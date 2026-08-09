import { Router } from 'express';
import { collectTwitter, normalizeHandle } from '../lib/sources/twitter.js';
import { collectSubstack, normalizeSubstack } from '../lib/sources/substack.js';
import { DEPTHS } from '../lib/pipeline/index.js';
import { buildCorpus } from '../lib/corpus.js';
import { convenePanel, hasCredentials } from '../lib/engine.js';
import * as cache from '../lib/cache.js';
import { demoCollection } from '../../demo/corpora.js';
import { demoVerdict } from '../../demo/verdict.js';

export const router = Router();

const PLATFORMS = new Set(['twitter', 'substack']);

function sourceCredentials(platform) {
  if (platform === 'twitter') return Boolean(process.env.X_BEARER_TOKEN);
  return true; // Substack is public.
}

/**
 * Line-delimited JSON rather than SSE.
 *
 * The request carries a body (handle + platform), and `EventSource` is GET-only,
 * so SSE would mean either query-string state or a two-call handshake. NDJSON
 * over a normal POST gives the same incremental UI with none of that.
 */
function ndjson(res) {
  res.status(200);
  res.setHeader('Content-Type', 'application/x-ndjson; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders?.();

  let closed = false;
  return {
    send(obj) {
      if (closed) return;
      res.write(`${JSON.stringify(obj)}\n`);
    },
    end() {
      if (closed) return;
      closed = true;
      res.end();
    },
  };
}

router.get('/health', (_req, res) => {
  res.json({
    ok: true,
    engine: hasCredentials() ? 'live' : 'demo',
    model: process.env.TWEETOSOPHER_MODEL || 'claude-opus-5',
    sources: {
      twitter: {
        timeline: Boolean(process.env.X_BEARER_TOKEN),
        likes: Boolean(process.env.X_USER_ACCESS_TOKEN),
      },
      substack: true,
    },
  });
});

router.post('/analyze', async (req, res) => {
  const { handle: rawHandle, platform: rawPlatform, force } = req.body ?? {};
  const platform = String(rawPlatform || 'twitter').toLowerCase();

  if (!PLATFORMS.has(platform)) {
    return res.status(400).json({
      error: `Unknown platform "${rawPlatform}".`,
      hint: 'Supported: twitter, substack.',
    });
  }
  if (!rawHandle || !String(rawHandle).trim()) {
    return res.status(400).json({ error: 'A handle is required.' });
  }

  const stream = ndjson(res);
  let finished = false;
  // `res`, not `req`: the request stream emits 'close' as soon as its body has
  // been consumed by the JSON parser, which is immediately. Only the response
  // closing tells us the client actually went away.
  res.on('close', () => {
    finished = true;
  });

  const fail = (message, extra = {}) => {
    finished = true;
    stream.send({ stage: 'error', error: { message, ...extra } });
    stream.end();
  };

  try {
    // ── Collect ───────────────────────────────────────────────────────────
    const useDemoCorpus = !sourceCredentials(platform);
    const identity =
      platform === 'twitter'
        ? normalizeHandle(rawHandle)
        : (normalizeSubstack(rawHandle) ?? String(rawHandle).trim());

    const key = cache.cacheKey(platform, useDemoCorpus ? 'demo' : identity);
    if (!force) {
      const cached = cache.get(key);
      if (cached) {
        stream.send({ stage: 'cached', message: 'Recalling a recent acquisition.' });
        finished = true;
        stream.send({ stage: 'done', result: cached });
        return stream.end();
      }
    }

    stream.send({
      stage: 'collecting',
      message: useDemoCorpus
        ? 'No platform credentials — opening the sample archive.'
        : platform === 'twitter'
          ? `Retrieving the timeline of @${identity}.`
          : `Retrieving the archive of ${identity}.`,
    });

    let collection;
    if (useDemoCorpus) {
      collection = demoCollection(platform);
    } else if (platform === 'twitter') {
      collection = await collectTwitter(rawHandle);
    } else {
      // The Substack pipeline runs several stages and can take a while at
      // depth, so its progress is forwarded onto the same NDJSON stream the
      // panel uses — the reader sees collection happening rather than a pause.
      collection = await collectSubstack(rawHandle, {
        depth: DEPTHS[req.body?.depth] ? req.body.depth : undefined,
        onProgress: (event) =>
          stream.send({ stage: 'collecting', message: event.message, phase: event.stage }),
      });
    }

    // ── Curate ────────────────────────────────────────────────────────────
    const corpus = buildCorpus(collection);
    stream.send({
      stage: 'reading',
      message: `${corpus.stats.analysed} items catalogued.`,
      stats: corpus.stats,
      profile: collection.profile,
    });

    // ── Deliberate ────────────────────────────────────────────────────────
    let result;
    if (!hasCredentials()) {
      stream.send({
        stage: 'deliberating',
        message: 'No Anthropic key set — the panel is reading from the demonstration file.',
        demo: true,
      });
      // A beat, so the demo does not resolve so fast it looks broken.
      await new Promise((r) => setTimeout(r, 1200));
      result = demoVerdict({ corpus, collection });
    } else {
      stream.send({ stage: 'deliberating', message: 'The panel is convening.' });
      let lastTick = 0;
      result = await convenePanel({
        corpus,
        collection,
        onProgress: (written) => {
          // Throttle: the UI only needs a heartbeat, not every delta.
          if (written - lastTick < 400) return;
          lastTick = written;
          stream.send({ stage: 'writing', written });
        },
      });
    }

    cache.set(key, result);
    finished = true;
    stream.send({ stage: 'done', result });
    stream.end();
  } catch (err) {
    const status = err.status ?? 502;
    fail(err.message || 'Something went wrong in the reading room.', {
      status,
      hint: err.hint,
    });
  }
});
