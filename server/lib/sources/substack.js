/**
 * Substack collection.
 *
 * No credentials: every public Substack exposes an RSS feed at
 * `/feed` and a JSON archive at `/api/v1/archive`. RSS is the primary source
 * because `content:encoded` carries the full post body for public pieces; the
 * archive endpoint fills in titles and subtitles for anything RSS truncated,
 * and covers publications whose feed is short.
 *
 * The XML is parsed with targeted regex rather than a DOM parser. Substack's
 * feed is machine-generated and consistently well-formed, and the alternative
 * is a dependency for one file — but this is the reason to be conservative
 * about what we extract: title, link, date, and the CDATA body, nothing more.
 */

class SubstackError extends Error {
  constructor(message, { status, hint } = {}) {
    super(message);
    this.name = 'SubstackError';
    this.status = status;
    this.hint = hint;
  }
}

/**
 * `handle`, `handle.substack.com`, `https://handle.substack.com/p/whatever`,
 * or a custom domain → an origin we can hit.
 */
export function normalizeSubstack(input) {
  const s = String(input || '').trim().replace(/^@/, '');
  if (!s) return null;

  if (/^https?:\/\//i.test(s)) {
    try {
      return new URL(s).origin;
    } catch {
      return null;
    }
  }
  // A bare host (custom domain or full substack host).
  if (s.includes('.')) return `https://${s.replace(/\/.*$/, '')}`;
  // A bare publication name.
  if (/^[A-Za-z0-9_-]+$/.test(s)) return `https://${s}.substack.com`;
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function htmlToText(html) {
  return decodeEntities(
    String(html || '')
      .replace(/<figcaption[\s\S]*?<\/figcaption>/gi, ' ')
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<\/(p|div|li|h[1-6]|blockquote)>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ''),
  )
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function unwrap(raw) {
  const cdata = raw.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return cdata ? cdata[1] : raw;
}

function tag(itemXml, name) {
  const m = itemXml.match(
    new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'),
  );
  return m ? unwrap(m[1]).trim() : '';
}

function parseFeed(xml) {
  const channelTitle = tag(xml.split('<item>')[0] || '', 'title');
  const channelDesc = tag(xml.split('<item>')[0] || '', 'description');

  const items = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const body =
      tag(block, 'content:encoded') || tag(block, 'description') || '';
    items.push({
      title: htmlToText(tag(block, 'title')),
      link: tag(block, 'link'),
      createdAt: tag(block, 'pubDate') || null,
      text: htmlToText(body),
    });
  }

  return { channelTitle: htmlToText(channelTitle), channelDesc: htmlToText(channelDesc), items };
}

/**
 * Essays are long. The panel needs voice and argument, not word count, so each
 * post is reduced to its opening and a mid-body sample — the two places where a
 * writer's actual thinking is least likely to be throat-clearing or sign-off.
 */
function condense(text, budget = 2600) {
  if (text.length <= budget) return text;
  const head = text.slice(0, Math.floor(budget * 0.65));
  const midStart = Math.floor(text.length / 2);
  const middle = text.slice(midStart, midStart + Math.floor(budget * 0.35));
  return `${head.trim()}\n\n[…]\n\n${middle.trim()}`;
}

async function getJson(url) {
  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new SubstackError(`HTTP ${res.status}`, { status: res.status });
  return res.json();
}

export async function collectSubstack(rawInput) {
  const origin = normalizeSubstack(rawInput);
  if (!origin) {
    throw new SubstackError(`"${rawInput}" is not a Substack I can resolve.`, {
      status: 400,
      hint: 'Try the publication name, e.g. "astralcodexten", or the full URL.',
    });
  }

  const coverage = { feed: false, archive: false, notes: [] };

  let feed = { channelTitle: '', channelDesc: '', items: [] };
  try {
    const res = await fetch(`${origin}/feed`, {
      headers: { accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) throw new SubstackError(`HTTP ${res.status}`, { status: res.status });
    feed = parseFeed(await res.text());
    coverage.feed = feed.items.length > 0;
  } catch (err) {
    coverage.notes.push(`RSS unavailable: ${err.message}`);
  }

  // The archive reaches further back than the feed's ~20 most recent items.
  let archive = [];
  try {
    archive = await getJson(
      `${origin}/api/v1/archive?sort=new&search=&offset=0&limit=50`,
    );
    coverage.archive = Array.isArray(archive) && archive.length > 0;
  } catch (err) {
    coverage.notes.push(`Archive unavailable: ${err.message}`);
  }

  const seen = new Set();
  const items = [];

  for (const post of feed.items) {
    if (!post.text && !post.title) continue;
    seen.add(post.link);
    items.push({
      id: post.link,
      kind: 'essay',
      title: post.title,
      text: condense(post.text || post.title),
      createdAt: post.createdAt,
      url: post.link,
    });
  }

  if (Array.isArray(archive)) {
    for (const post of archive) {
      const url = post.canonical_url;
      if (!url || seen.has(url)) continue;
      const blurb = htmlToText(post.description || post.subtitle || '');
      if (!post.title && !blurb) continue;
      items.push({
        id: url,
        kind: 'essay-summary',
        title: htmlToText(post.title || ''),
        text: blurb,
        createdAt: post.post_date || null,
        url,
      });
    }
  }

  if (!items.length) {
    throw new SubstackError(
      `No public posts found at ${origin}.`,
      {
        status: 404,
        hint: 'The publication may be private, paywalled, or the name may be wrong.',
      },
    );
  }

  const name =
    feed.channelTitle ||
    archive?.[0]?.publishedBylines?.[0]?.publication_name ||
    new URL(origin).hostname;

  return {
    platform: 'substack',
    profile: {
      handle: new URL(origin).hostname.replace(/\.substack\.com$/, ''),
      displayName: name,
      bio: feed.channelDesc || '',
      url: origin,
    },
    // Newest first, capped — 30 essays is already a lot of a person.
    items: items.slice(0, 30),
    coverage,
  };
}
