import http from 'node:http';

/**
 * A stand-in Substack.
 *
 * Substack's real endpoints cannot be exercised in CI (and their shapes are
 * undocumented and unstable, which is the whole reason the repair agent
 * exists), so the pipeline is tested against a server that reproduces the
 * shapes we expect plus the failure modes we care about: pagination, paywalls,
 * rate limiting, robots.txt, and — via `mutate` — an endpoint that has changed
 * shape underneath us.
 */
export async function startFixture({ mutateArchive = false, rateLimitFirst = 0, robots } = {}) {
  const hits = [];
  let rateLimited = 0;

  const POSTS = Array.from({ length: 24 }, (_, i) => ({
    id: 1000 + i,
    slug: `post-${i}`,
    title: `Essay Number ${i}`,
    subtitle: `A subtitle for ${i}`,
    description: `<p>Blurb for essay ${i}.</p>`,
    canonical_url: `https://pub.test/p/post-${i}`,
    post_date: new Date(Date.UTC(2026, 0, 24 - i)).toISOString(),
    audience: i % 7 === 0 ? 'only_paid' : 'everyone',
    reaction_count: 100 - i,
    comment_count: i,
  }));

  const FEED = `<?xml version="1.0"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title><![CDATA[The Long Way]]></title>
  <description><![CDATA[Essays about attention &amp; machines.]]></description>
  ${POSTS.slice(0, 3)
    .map(
      (p) => `<item>
    <title><![CDATA[${p.title}]]></title>
    <link>${p.canonical_url}</link>
    <pubDate>${new Date(p.post_date).toUTCString()}</pubDate>
    <content:encoded><![CDATA[<p>${'Full body prose for this essay. '.repeat(20)}</p>]]></content:encoded>
  </item>`,
    )
    .join('\n')}
</channel>
</rss>`;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    hits.push(url.pathname);

    const send = (code, body, type = 'application/json') => {
      res.writeHead(code, { 'content-type': type });
      res.end(typeof body === 'string' ? body : JSON.stringify(body));
    };

    if (url.pathname === '/robots.txt') {
      return send(200, robots ?? 'User-agent: *\nDisallow: /private\n', 'text/plain');
    }

    if (rateLimited < rateLimitFirst && url.pathname.startsWith('/api/')) {
      rateLimited++;
      res.writeHead(429, { 'retry-after': '0' });
      return res.end('slow down');
    }

    if (url.pathname === '/feed') return send(200, FEED, 'application/rss+xml');

    if (url.pathname === '/api/v1/publication') {
      return send(200, { name: 'The Long Way', hero_text: 'Attention, machines.', author_id: 77 });
    }

    if (url.pathname === '/api/v1/archive') {
      const offset = Number(url.searchParams.get('offset') ?? 0);
      const limit = Number(url.searchParams.get('limit') ?? 50);
      const page = POSTS.slice(offset, offset + limit);
      // `mutateArchive` renames every field the built-in plan knows about,
      // which is what a Substack schema change looks like from our side.
      const shaped = mutateArchive
        ? page.map((p) => ({
            uid: p.id,
            headline: p.title,
            standfirst: p.subtitle,
            teaser_html: p.description,
            permalink: p.canonical_url,
            path: p.slug,
            published: p.post_date,
            access: p.audience,
          }))
        : page;
      return send(200, mutateArchive ? { results: shaped } : shaped);
    }

    const postMatch = url.pathname.match(/^\/api\/v1\/posts\/(.+)$/);
    if (postMatch) {
      const post = POSTS.find((p) => p.slug === postMatch[1]);
      if (!post) return send(404, { error: 'not found' });
      const paid = post.audience !== 'everyone';
      return send(200, {
        ...post,
        body_html: paid
          ? '<p>This post is for paid subscribers</p>'
          : `<p>${`Hydrated full text for ${post.slug}. `.repeat(30)}</p>`,
      });
    }

    if (url.pathname.startsWith('/api/v1/reader/feed/profile/')) {
      return send(200, {
        items: Array.from({ length: 5 }, (_, i) => ({
          entity_key: `n${i}`,
          comment: {
            id: i,
            body: `A note about attention, number ${i}.`,
            date: new Date(Date.UTC(2026, 0, 20 - i)).toISOString(),
            reaction_count: i * 3,
          },
        })),
      });
    }

    if (url.pathname === '/private') return send(200, 'secret');

    send(404, { error: 'not found' });
  });

  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const origin = `http://127.0.0.1:${server.address().port}`;

  return {
    origin,
    hits,
    close: () => new Promise((r) => server.close(r)),
  };
}
