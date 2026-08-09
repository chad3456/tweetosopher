/**
 * The one door out to the network.
 *
 * Every request the pipeline makes goes through this client, which exists to
 * make us a well-behaved guest on somebody else's server:
 *
 *   - one request per host at a time, with a minimum gap between them
 *   - exponential backoff with jitter on 429/5xx, honouring `Retry-After`
 *   - robots.txt fetched once per origin and actually obeyed
 *   - an identifying User-Agent, so an admin who sees us in their logs knows
 *     who we are and can block us
 *   - an in-memory response cache, so a pipeline that touches the same URL from
 *     two stages only fetches it once
 *
 * Politeness here is not just etiquette. A scraper that hammers a host gets
 * blocked, and a blocked scraper is a broken product.
 */

const DEFAULTS = {
  userAgent:
    'Tweetosopher/0.1 (+https://github.com/chad3456/tweetosopher) reads public posts for a philosophy-panel toy',
  minIntervalMs: 700,
  maxRetries: 3,
  timeoutMs: 15_000,
  cacheTtlMs: 15 * 60 * 1000,
  respectRobots: true,
};

export class HttpError extends Error {
  constructor(message, { status, url, retryable = false } = {}) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.url = url;
    this.retryable = retryable;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * How long to wait after a throttled response.
 *
 * Two conventions, and hosts do not agree on which to use. `Retry-After` is the
 * standard one (seconds). X sends `x-rate-limit-reset`, an absolute epoch
 * *second* — reading that as a duration would sleep for fifty-odd years, so it
 * has to be differenced against now. Returns null when neither is usable, which
 * leaves the caller on plain exponential backoff.
 */
function retryDelayFrom(res) {
  const retryAfter = Number(res.headers.get('retry-after'));
  if (Number.isFinite(retryAfter) && retryAfter > 0) {
    return Math.min(retryAfter * 1000, 60_000);
  }

  const reset = Number(res.headers.get('x-rate-limit-reset'));
  if (Number.isFinite(reset) && reset > 0) {
    const ms = reset * 1000 - Date.now();
    // A window that has already passed, or one absurdly far out, is not useful.
    if (ms > 0 && ms < 15 * 60_000) return ms;
  }
  return null;
}

/**
 * A deliberately small robots.txt reader.
 *
 * It implements the parts that matter for a read-only crawler — grouped
 * User-agent blocks, Allow/Disallow, longest-match wins — and ignores the rest
 * (sitemaps, crawl-delay extensions, wildcards beyond a trailing `*`). When it
 * cannot parse or cannot fetch, it allows: a malformed robots.txt should not
 * silently disable the product, but a clear `Disallow` must be obeyed.
 */
function parseRobots(text, userAgent) {
  const lines = String(text).split(/\r?\n/);
  const groups = [];
  let current = null;

  for (const raw of lines) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const [rawKey, ...rest] = line.split(':');
    const key = rawKey.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (!value && key !== 'disallow') continue;

    if (key === 'user-agent') {
      // Consecutive User-agent lines share one rule block.
      if (!current || current.rules.length) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
    } else if ((key === 'disallow' || key === 'allow') && current) {
      current.rules.push({ allow: key === 'allow', path: value });
    }
  }

  const token = userAgent.split('/')[0].toLowerCase();
  const specific = groups.find((g) => g.agents.includes(token));
  const wildcard = groups.find((g) => g.agents.includes('*'));
  const group = specific ?? wildcard;
  if (!group) return () => true;

  return (path) => {
    let verdict = true;
    let longest = -1;
    for (const rule of group.rules) {
      if (!rule.path) continue; // `Disallow:` with no value means allow all.
      const prefix = rule.path.endsWith('*') ? rule.path.slice(0, -1) : rule.path;
      if (!path.startsWith(prefix)) continue;
      if (prefix.length > longest) {
        longest = prefix.length;
        verdict = rule.allow;
      }
    }
    return verdict;
  };
}

export class PoliteClient {
  constructor(options = {}) {
    this.opts = { ...DEFAULTS, ...options };
    /** @type {Map<string, Promise<void>>} per-host serialisation chain */
    this.hostChains = new Map();
    this.lastHit = new Map();
    this.robots = new Map();
    this.cache = new Map();
    this.stats = { requests: 0, cacheHits: 0, retries: 0, blocked: 0 };
  }

  /** Serialise per host, and keep at least `minIntervalMs` between requests. */
  async #slot(host) {
    const prev = this.hostChains.get(host) ?? Promise.resolve();
    let release;
    const mine = new Promise((r) => {
      release = r;
    });
    this.hostChains.set(
      host,
      prev.then(() => mine),
    );
    await prev;

    const since = Date.now() - (this.lastHit.get(host) ?? 0);
    const wait = this.opts.minIntervalMs - since;
    if (wait > 0) await sleep(wait);

    return () => {
      this.lastHit.set(host, Date.now());
      release();
    };
  }

  async #allowed(url) {
    if (!this.opts.respectRobots) return true;
    const origin = url.origin;

    if (!this.robots.has(origin)) {
      this.robots.set(
        origin,
        (async () => {
          try {
            const res = await fetch(`${origin}/robots.txt`, {
              headers: { 'user-agent': this.opts.userAgent },
              signal: AbortSignal.timeout(this.opts.timeoutMs),
            });
            if (!res.ok) return () => true;
            return parseRobots(await res.text(), this.opts.userAgent);
          } catch {
            return () => true;
          }
        })(),
      );
    }

    const test = await this.robots.get(origin);
    return test(url.pathname + url.search);
  }

  /**
   * @param {string} rawUrl
   * @param {{as?: 'json'|'text', headers?: object, allowNotFound?: boolean}} opts
   * @returns {Promise<{ok: boolean, status: number, body: any, url: string}>}
   */
  async get(rawUrl, { as = 'text', headers = {}, allowNotFound = false } = {}) {
    const url = new URL(rawUrl);
    const key = `${as}:${url.href}`;

    const cached = this.cache.get(key);
    if (cached && Date.now() < cached.expires) {
      this.stats.cacheHits++;
      return cached.value;
    }

    if (!(await this.#allowed(url))) {
      this.stats.blocked++;
      throw new HttpError(`robots.txt disallows ${url.pathname}`, {
        status: 403,
        url: url.href,
      });
    }

    let attempt = 0;
    let lastErr;

    while (attempt <= this.opts.maxRetries) {
      const done = await this.#slot(url.host);
      try {
        this.stats.requests++;
        const res = await fetch(url, {
          headers: {
            'user-agent': this.opts.userAgent,
            accept: as === 'json' ? 'application/json' : 'text/html,application/xml;q=0.9,*/*;q=0.8',
            ...headers,
          },
          redirect: 'follow',
          signal: AbortSignal.timeout(this.opts.timeoutMs),
        });

        if (res.status === 404 && allowNotFound) {
          const value = { ok: false, status: 404, body: null, url: res.url };
          this.cache.set(key, { value, expires: Date.now() + this.opts.cacheTtlMs });
          return value;
        }

        if (res.status === 429 || res.status >= 500) {
          throw new HttpError(`HTTP ${res.status}`, {
            status: res.status,
            url: url.href,
            retryable: true,
            retryAfterMs: retryDelayFrom(res),
          });
        }

        if (!res.ok) {
          throw new HttpError(`HTTP ${res.status}`, { status: res.status, url: url.href });
        }

        const raw = await res.text();
        let body = raw;
        if (as === 'json') {
          try {
            body = JSON.parse(raw);
          } catch {
            // A JSON endpoint that returns HTML usually means we were served a
            // login wall or an error page. Surface it as a shape problem, which
            // is exactly the signal the repair agent looks for.
            throw new HttpError('Expected JSON, received something else.', {
              status: res.status,
              url: url.href,
            });
          }
        }

        const value = { ok: true, status: res.status, body, url: res.url };
        this.cache.set(key, { value, expires: Date.now() + this.opts.cacheTtlMs });
        return value;
      } catch (err) {
        lastErr = err;
        const retryable =
          err.retryable || err.name === 'TimeoutError' || err.name === 'TypeError';
        if (!retryable || attempt === this.opts.maxRetries) break;

        this.stats.retries++;
        const backoff =
          err.retryAfterMs ?? Math.min(8000, 2 ** attempt * 600) + Math.random() * 400;
        await sleep(backoff);
        attempt++;
      } finally {
        done();
      }
    }

    throw lastErr;
  }

  /** Convenience: returns `null` instead of throwing. For optional stages. */
  async tryGet(url, opts) {
    try {
      const res = await this.get(url, { allowNotFound: true, ...opts });
      return res.ok ? res : null;
    } catch {
      return null;
    }
  }
}
