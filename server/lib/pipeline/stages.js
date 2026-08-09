/**
 * Pipeline stages.
 *
 * Each stage is an async function of `(ctx) => void` that adds to `ctx` and
 * reports what it managed to get. Stages are individually failable: a scrape
 * that gets the archive but not the notes is a worse reading, not a broken one,
 * so failures are recorded in `ctx.coverage.notes` and the run continues.
 *
 * Every stage that parses JSON does so through a *plan* (see plans.js), and
 * every stage that fails to extract with its built-in plan offers the payload
 * to the repair agent before giving up.
 */

import {
  BUILTIN_PLANS,
  applyPlan,
  pickList,
  validatePlan,
} from './plans.js';
import { repairPlan } from './agent.js';
import {
  condense,
  extractArticle,
  extractPreloads,
  htmlToText,
  looksPaywalled,
  parseFeed,
} from './text.js';

/** Run a built-in plan, and call the agent if it does not fit the payload. */
async function extract({ ctx, endpoint, payload, planName, fields, required }) {
  const builtin = BUILTIN_PLANS[planName];
  const check = validatePlan(payload, builtin, required);
  if (check.ok) return { plan: builtin, repaired: false };

  const repair = await repairPlan({
    endpoint,
    host: ctx.host,
    payload,
    fields,
    failure: check.reason,
    required,
    budget: ctx.budget,
    onProgress: ctx.onProgress,
  });

  if (!repair) {
    ctx.coverage.notes.push(
      `${endpoint}: could not extract (${check.reason})${
        ctx.agentEnabled ? '' : ' — repair agent disabled, no ANTHROPIC_API_KEY'
      }`,
    );
    return null;
  }
  ctx.coverage.repairs.push({ endpoint, notes: repair.notes, cached: repair.cached });
  return { plan: repair.plan, repaired: true };
}

/* ── 1. Resolve ──────────────────────────────────────────────────────────
   Turn whatever the user typed into an origin we can crawl, and confirm
   something is actually there before spending the rest of the pipeline on it. */

export async function resolve(ctx) {
  const res = await ctx.http.tryGet(`${ctx.origin}/api/v1/publication`, { as: 'json' });
  if (res?.body) {
    const p = res.body;
    ctx.publication = {
      name: p.name ?? null,
      hero: htmlToText(p.hero_text ?? ''),
      logo: p.logo_url ?? null,
      authorId: p.author_id ?? null,
    };
  }
  ctx.onProgress?.({ stage: 'resolve', message: `Reading ${ctx.host}.` });
}

/* ── 2. Feed ─────────────────────────────────────────────────────────────
   RSS first: it is the only endpoint Substack documents, it carries full post
   bodies for public posts, and it costs one request. Everything after this
   stage is enrichment. */

export async function feed(ctx) {
  const res = await ctx.http.tryGet(`${ctx.origin}/feed`);
  if (!res) {
    ctx.coverage.notes.push('RSS feed unavailable.');
    return;
  }

  const parsed = parseFeed(res.body);
  ctx.channel = { title: parsed.title, description: parsed.description };

  for (const item of parsed.items) {
    if (!item.text && !item.title) continue;
    ctx.upsert({
      id: item.url || item.title,
      kind: 'essay',
      title: item.title,
      text: item.text,
      url: item.url,
      createdAt: item.date,
      source: 'rss',
      complete: Boolean(item.text),
    });
  }

  ctx.coverage.feed = parsed.items.length > 0;
  ctx.onProgress?.({
    stage: 'feed',
    message: `${parsed.items.length} posts from the feed.`,
  });
}

/* ── 3. Archive ──────────────────────────────────────────────────────────
   The feed stops at ~20 posts. The archive endpoint paginates the whole
   publication, which is what gets us a writer's range rather than their month. */

export async function archive(ctx) {
  const PAGE = 50;
  let offset = 0;
  let plan = null;
  let added = 0;

  while (offset < ctx.limits.maxArchive) {
    const res = await ctx.http.tryGet(
      `${ctx.origin}/api/v1/archive?sort=new&search=&offset=${offset}&limit=${PAGE}`,
      { as: 'json' },
    );
    if (!res?.body) break;

    if (!plan) {
      const got = await extract({
        ctx,
        endpoint: 'archive',
        payload: res.body,
        planName: 'archive',
        required: ['title'],
        fields: [
          { name: 'id', description: 'stable post identifier' },
          { name: 'title', description: 'post title' },
          { name: 'subtitle', description: 'post subtitle or deck, if any' },
          { name: 'text', description: 'the post body or the longest available summary' },
          { name: 'url', description: 'canonical public URL of the post' },
          { name: 'slug', description: 'URL slug' },
          { name: 'date', description: 'publication date' },
          { name: 'audience', description: 'who can read it: everyone, paid subscribers, etc.' },
          { name: 'reactions', description: 'like or reaction count' },
          { name: 'comments', description: 'comment count' },
        ],
      });
      if (!got) return;
      plan = got.plan;
    }

    const list = pickList(res.body, plan) ?? [];
    if (!list.length) break;

    for (const record of list) {
      const f = applyPlan(record, plan);
      const text = htmlToText(f.text ?? '');
      ctx.upsert({
        id: f.url || f.id || f.slug,
        kind: text.length > 400 ? 'essay' : 'essay-summary',
        title: htmlToText(f.title ?? ''),
        subtitle: htmlToText(f.subtitle ?? ''),
        text,
        url: f.url,
        slug: f.slug,
        createdAt: f.date,
        reactions: Number(f.reactions) || 0,
        commentCount: Number(f.comments) || 0,
        paywalled: looksPaywalled(f, text),
        source: 'archive',
        complete: text.length > 400,
      });
      added++;
    }

    if (list.length < PAGE) break;
    offset += PAGE;
  }

  ctx.coverage.archive = added > 0;
  ctx.onProgress?.({ stage: 'archive', message: `${added} posts indexed from the archive.` });
}

/* ── 4. Hydrate ──────────────────────────────────────────────────────────
   The archive gives titles and blurbs; the panel needs prose. This fetches full
   bodies for the posts that are still thin, newest and most-reacted first,
   because that is where a writer's voice is densest per request spent. */

export async function hydrate(ctx) {
  const thin = [...ctx.items.values()]
    .filter((i) => !i.complete && !i.paywalled && (i.url || i.slug))
    .sort(
      (a, b) =>
        (b.reactions ?? 0) - (a.reactions ?? 0) ||
        new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
    )
    .slice(0, ctx.limits.maxHydrate);

  if (!thin.length) return;

  let done = 0;
  for (const item of thin) {
    const body = await fetchPostBody(ctx, item);
    if (!body?.text) continue;

    ctx.upsert({
      ...item,
      text: body.text,
      paywalled: body.paywalled,
      source: `${item.source}+${body.via}`,
      complete: !body.paywalled,
    });
    done++;

    ctx.onProgress?.({
      stage: 'hydrate',
      message: `Full text: ${item.title || item.slug} (${done}/${thin.length}).`,
    });
  }

  ctx.coverage.bodies = done;
}

async function fetchPostBody(ctx, item) {
  // 1. The JSON endpoint the site itself uses. Cheapest and cleanest.
  if (item.slug) {
    const res = await ctx.http.tryGet(`${ctx.origin}/api/v1/posts/${item.slug}`, {
      as: 'json',
    });
    if (res?.body) {
      const plan = BUILTIN_PLANS.post;
      const f = applyPlan(res.body, plan);
      const text = htmlToText(f.text ?? '');
      if (text.length > 200) {
        return { text, paywalled: looksPaywalled({ ...res.body, ...f }, text), via: 'api' };
      }
    }
  }

  if (!item.url) return null;

  // 2. The rendered page, whose embedded state carries the same object.
  const page = await ctx.http.tryGet(item.url);
  if (!page?.body) return null;

  const preloads = extractPreloads(page.body);
  const post = preloads?.post ?? preloads?.pub?.post;
  if (post) {
    const text = htmlToText(post.body_html ?? post.truncated_body_text ?? '');
    if (text.length > 200) {
      return { text, paywalled: looksPaywalled(post, text), via: 'preloads' };
    }
  }

  // 3. Scrape the article element. Least reliable, so it goes last.
  const article = extractArticle(page.body);
  if (article.length > 200) {
    return { text: article, paywalled: looksPaywalled(null, article), via: 'html' };
  }
  return null;
}

/* ── 5. Notes ────────────────────────────────────────────────────────────
   Substack Notes are the closest thing this platform has to a timeline: short,
   frequent, unedited. For a product that reads voice rather than argument they
   are worth more per token than the essays, so they get their own stage. */

export async function notes(ctx) {
  const profile = await resolveAuthor(ctx);
  if (!profile?.id) {
    ctx.coverage.notes.push('Notes unavailable: could not resolve an author id.');
    return;
  }

  const res = await ctx.http.tryGet(
    `${ctx.origin}/api/v1/reader/feed/profile/${profile.id}?types%5B%5D=note`,
    { as: 'json' },
  );
  if (!res?.body) {
    ctx.coverage.notes.push('Notes unavailable: profile feed did not respond.');
    return;
  }

  const got = await extract({
    ctx,
    endpoint: 'notes',
    payload: res.body,
    planName: 'notes',
    required: ['text'],
    fields: [
      { name: 'id', description: 'stable note identifier' },
      { name: 'text', description: 'the note body as written by the author' },
      { name: 'date', description: 'when it was posted' },
      { name: 'reactions', description: 'like count' },
    ],
  });
  if (!got) return;

  const list = pickList(res.body, got.plan) ?? [];
  let added = 0;
  for (const record of list.slice(0, ctx.limits.maxNotes)) {
    const f = applyPlan(record, got.plan);
    const text = htmlToText(f.text ?? '');
    if (text.length < 2) continue;
    ctx.upsert({
      id: `note:${f.id ?? added}`,
      kind: 'note',
      text,
      createdAt: f.date,
      reactions: Number(f.reactions) || 0,
      source: 'notes',
      complete: true,
    });
    added++;
  }

  ctx.coverage.notesCount = added;
  ctx.onProgress?.({ stage: 'notes', message: `${added} notes collected.` });
}

async function resolveAuthor(ctx) {
  if (ctx.publication?.authorId) return { id: ctx.publication.authorId };

  const sub = ctx.host.match(/^([^.]+)\.substack\.com$/)?.[1];
  if (!sub) return null;

  const res = await ctx.http.tryGet(
    `https://substack.com/api/v1/user/${sub}/public_profile`,
    { as: 'json' },
  );
  const f = res?.body ? applyPlan(res.body, BUILTIN_PLANS.profile) : null;
  return f?.id ? { id: f.id, name: f.name, bio: f.bio } : null;
}
