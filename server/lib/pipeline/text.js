/**
 * Text handling shared across the pipeline stages.
 *
 * The RSS parser here uses targeted regex rather than a DOM parser. Substack's
 * feed is machine-generated and consistently well-formed, and the alternative
 * is a dependency for one file — but that is the reason to be conservative
 * about what it extracts: title, link, date, and the CDATA body, nothing more.
 */

const ENTITIES = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&nbsp;': ' ',
  '&mdash;': '—',
  '&ndash;': '–',
  '&hellip;': '…',
  '&rsquo;': '\u2019',
  '&lsquo;': '\u2018',
  '&ldquo;': '\u201c',
  '&rdquo;': '\u201d',
};

export function decodeEntities(s) {
  return String(s ?? '')
    .replace(/&(?:lt|gt|quot|#39|apos|nbsp|mdash|ndash|hellip|rsquo|lsquo|ldquo|rdquo);/g,
      (m) => ENTITIES[m] ?? m)
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    // Ampersand last, so "&amp;lt;" does not become "<".
    .replace(/&amp;/g, '&');
}

export function htmlToText(html) {
  return decodeEntities(
    String(html ?? '')
      .replace(/<figcaption[\s\S]*?<\/figcaption>/gi, ' ')
      .replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ')
      // Substack wraps paywall teasers and subscribe widgets in these.
      .replace(/<div class="subscription-widget[\s\S]*?<\/div>/gi, ' ')
      .replace(/<\/(p|div|li|h[1-6]|blockquote|tr)>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ''),
  )
    .replace(/[ \t\u00a0]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/**
 * Essays are long. The panel needs voice and argument, not word count, so each
 * post is reduced to its opening and a mid-body sample — the two places where a
 * writer's actual thinking is least likely to be throat-clearing or sign-off.
 */
export function condense(text, budget = 2600) {
  const s = String(text ?? '');
  if (s.length <= budget) return s;
  const head = s.slice(0, Math.floor(budget * 0.65));
  const midStart = Math.floor(s.length / 2);
  const middle = s.slice(midStart, midStart + Math.floor(budget * 0.35));
  return `${head.trim()}\n\n[…]\n\n${middle.trim()}`;
}

function unwrap(raw) {
  const cdata = raw.match(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/);
  return cdata ? cdata[1] : raw;
}

export function tag(xml, name) {
  const m = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, 'i'));
  return m ? unwrap(m[1]).trim() : '';
}

export function parseFeed(xml) {
  const head = xml.split('<item>')[0] ?? '';
  const items = [];
  const itemRe = /<item>([\s\S]*?)<\/item>/gi;
  let m;
  while ((m = itemRe.exec(xml)) !== null) {
    const block = m[1];
    const body = tag(block, 'content:encoded') || tag(block, 'description') || '';
    items.push({
      title: htmlToText(tag(block, 'title')),
      url: tag(block, 'link'),
      date: tag(block, 'pubDate') || null,
      text: htmlToText(body),
    });
  }
  return {
    title: htmlToText(tag(head, 'title')),
    description: htmlToText(tag(head, 'description')),
    items,
  };
}

/**
 * Substack post pages embed the rendered post as JSON in a `window._preloads`
 * assignment. It is a JSON-encoded *string* containing JSON, which is why this
 * parses twice.
 */
export function extractPreloads(html) {
  const m = String(html).match(
    /window\._preloads\s*=\s*JSON\.parse\(\s*("(?:\\.|[^"\\])*")\s*\)/,
  );
  if (!m) return null;
  try {
    return JSON.parse(JSON.parse(m[1]));
  } catch {
    return null;
  }
}

/** Last-resort body extraction from a rendered post page. */
export function extractArticle(html) {
  const article =
    String(html).match(/<div[^>]+class="[^"]*available-content[^"]*"[\s\S]*?<\/article>/i)?.[0] ??
    String(html).match(/<article[\s\S]*?<\/article>/i)?.[0];
  return article ? htmlToText(article) : '';
}

/** Paywall detection across the several ways Substack signals it. */
export function looksPaywalled(record, text) {
  if (record?.audience && record.audience !== 'everyone') return true;
  if (record?.paywalled === true) return true;
  return /this post is for (paid|paying) subscribers|upgrade to paid|subscribe to keep reading/i.test(
    text ?? '',
  );
}
