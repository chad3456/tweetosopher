/**
 * X (Twitter) pipeline stages.
 *
 *   profile → timeline → likes → stitch
 *
 * The interesting work is in the last three. A naive collector reads
 * `data[].text` and ships it; that produces a corpus with three specific holes,
 * each of which damages exactly the thing this product is trying to read:
 *
 *   - **Retweets arrive as `RT @someone: first 140 characters…`.** Endorsement
 *     is signal, but a truncated one is noise. Expansions give the real text.
 *   - **Quote posts arrive without their referent.** "this is exactly right"
 *     tells a panel of philosophers nothing at all unless you know what "this"
 *     was.
 *   - **Threads arrive shredded.** A twelve-post argument becomes twelve
 *     disconnected fragments, and the argument — the most valuable thing in the
 *     corpus — is destroyed by the collection step.
 *
 * So this pipeline expands references and stitches threads before anything
 * downstream sees the data.
 */

import { applyPlan, pickList, validatePlan } from '../plans.js';
import { repairPlan } from '../agent.js';
import { X_PLANS, TWEET_FIELD_DESCRIPTIONS } from './plans.js';

/** Overridable so tests can point at a fixture, and so a deployment can sit
 *  behind an egress proxy or an API mirror without a code change. */
const API = () => process.env.X_API_BASE || 'https://api.twitter.com/2';

const TWEET_FIELDS =
  'created_at,public_metrics,referenced_tweets,conversation_id,in_reply_to_user_id,lang,note_tweet';
const EXPANSIONS = 'referenced_tweets.id,referenced_tweets.id.author_id';
const USER_FIELDS = 'username,name';

/** t.co links carry no signal for the panel and cost a lot of tokens. */
export function stripUrls(text) {
  return String(text ?? '')
    .replace(/https?:\/\/t\.co\/\w+/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

async function apiGet(ctx, path, params, token) {
  const url = new URL(API() + path);
  for (const [k, v] of Object.entries(params ?? {})) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }
  return ctx.http.get(url.href, {
    as: 'json',
    headers: { authorization: `Bearer ${token}` },
  });
}

/** Index `includes` so referenced posts and their authors can be resolved. */
function buildIncludes(body, into = { tweets: new Map(), users: new Map() }) {
  for (const t of body?.includes?.tweets ?? []) into.tweets.set(t.id, t);
  for (const u of body?.includes?.users ?? []) into.users.set(u.id, u);
  return into;
}

const fullText = (tweet) => stripUrls(tweet?.note_tweet?.text || tweet?.text || '');

/**
 * Turn one API record into a corpus item, resolving whatever it points at.
 */
function shapeTweet(fields, { includes, kindOverride, subjectId }) {
  const refs = Array.isArray(fields.referenced) ? fields.referenced : [];
  const ref = refs[0];
  const referenced = ref ? includes.tweets.get(ref.id) : null;
  const refAuthor = referenced ? includes.users.get(referenced.author_id) : null;

  let kind =
    kindOverride ??
    (ref?.type === 'retweeted'
      ? 'retweet'
      : ref?.type === 'quoted'
        ? 'quote'
        : ref?.type === 'replied_to'
          ? 'reply'
          : 'post');

  let text = stripUrls(fields.text ?? '');
  let via = null;

  if (kind === 'retweet' && referenced) {
    // The timeline's own text is the truncated "RT @x: …" form. The endorsement
    // is what matters, so keep the real words and record whose they are.
    text = fullText(referenced);
    via = refAuthor?.username ?? null;
  } else if (kind === 'quote' && referenced) {
    const quoted = fullText(referenced);
    if (quoted) {
      const who = refAuthor?.username ? `@${refAuthor.username}` : 'someone';
      text = `${text}\n\n> quoting ${who}: ${quoted}`;
    }
  }

  return {
    id: fields.id,
    kind,
    text,
    via,
    createdAt: fields.date ?? null,
    likes: Number(fields.likes) || 0,
    reposts: Number(fields.reposts) || 0,
    replies: Number(fields.replies) || 0,
    conversationId: fields.conversation ?? null,
    isSelfReply: Boolean(subjectId) && fields.replyToUser === subjectId,
    lang: fields.lang ?? null,
  };
}

/* ── 1. Profile ─────────────────────────────────────────────────────────── */

export async function profile(ctx) {
  const res = await apiGet(
    ctx,
    `/users/by/username/${ctx.handle}`,
    {
      'user.fields': 'description,public_metrics,created_at,location,url,verified,pinned_tweet_id',
    },
    ctx.tokens.app,
  );

  // A single record rather than a list, so the plan is applied to the envelope
  // directly and "did it work" is simply whether an id came back.
  const f = applyPlan(res.body, X_PLANS.user);
  if (!f.id) {
    const err = new Error(`No X account found for @${ctx.handle}.`);
    err.status = 404;
    throw err;
  }

  ctx.subject = {
    id: f.id,
    handle: f.username ?? ctx.handle,
    displayName: f.name ?? null,
    bio: stripUrls(f.bio ?? ''),
    location: f.location ?? null,
    joined: f.joined ?? null,
    followers: f.followers ?? null,
    following: f.following ?? null,
    posts: f.posts ?? null,
    pinnedId: f.pinned ?? null,
    url: `https://x.com/${f.username ?? ctx.handle}`,
  };

  ctx.onProgress?.({
    stage: 'profile',
    message: `@${ctx.subject.handle}${
      ctx.subject.posts ? ` — ${ctx.subject.posts.toLocaleString()} posts on record` : ''
    }.`,
  });
}

/* ── 2. Timeline ────────────────────────────────────────────────────────── */

export async function timeline(ctx) {
  const includes = { tweets: new Map(), users: new Map() };
  let cursor;
  let plan = null;
  let added = 0;

  for (let page = 0; page < ctx.limits.timelinePages; page++) {
    let res;
    try {
      res = await apiGet(
        ctx,
        `/users/${ctx.subject.id}/tweets`,
        {
          max_results: 100,
          'tweet.fields': TWEET_FIELDS,
          expansions: EXPANSIONS,
          'user.fields': USER_FIELDS,
          pagination_token: cursor,
        },
        ctx.tokens.app,
      );
    } catch (err) {
      ctx.coverage.notes.push(`Timeline stopped after ${added} posts: ${err.message}`);
      break;
    }

    buildIncludes(res.body, includes);

    if (!plan) {
      const check = validatePlan(res.body, X_PLANS.tweets, ['id', 'text']);
      if (check.ok) {
        plan = X_PLANS.tweets;
      } else {
        const repair = await repairPlan({
          endpoint: 'x:timeline',
          host: 'api.twitter.com',
          payload: res.body,
          fields: TWEET_FIELD_DESCRIPTIONS,
          failure: check.reason,
          required: ['id', 'text'],
          budget: ctx.budget,
          onProgress: ctx.onProgress,
        });
        if (!repair) {
          ctx.coverage.notes.push(`Timeline unreadable: ${check.reason}`);
          return;
        }
        ctx.coverage.repairs.push({ endpoint: 'x:timeline', notes: repair.notes });
        plan = repair.plan;
      }
    }

    const list = pickList(res.body, plan) ?? [];
    for (const record of list) {
      const item = shapeTweet(applyPlan(record, plan), {
        includes,
        subjectId: ctx.subject.id,
      });
      if (item.text) {
        ctx.upsert(item);
        added++;
      }
    }

    cursor = res.body.meta?.next_token;
    if (!cursor) break;
  }

  ctx.includes = includes;
  ctx.coverage.timeline = added > 0;
  ctx.onProgress?.({ stage: 'timeline', message: `${added} posts collected.` });
}

/* ── 3. Likes ───────────────────────────────────────────────────────────── */

export async function likes(ctx) {
  if (!ctx.tokens.user) {
    ctx.coverage.notes.push(
      'Likes not collected — no X_USER_ACCESS_TOKEN with the likes.read scope. ' +
        'The panel is judging public output only, not taste.',
    );
    return;
  }

  const includes = ctx.includes ?? { tweets: new Map(), users: new Map() };
  let cursor;
  let added = 0;

  for (let page = 0; page < ctx.limits.likePages; page++) {
    let res;
    try {
      res = await apiGet(
        ctx,
        `/users/${ctx.subject.id}/liked_tweets`,
        {
          max_results: 100,
          'tweet.fields': TWEET_FIELDS,
          expansions: 'author_id',
          'user.fields': USER_FIELDS,
          pagination_token: cursor,
        },
        ctx.tokens.user,
      );
    } catch (err) {
      // 403 here almost always means an app-only token was supplied for a
      // user-context endpoint. Say so, rather than reporting a bare 403.
      const hint =
        err.status === 403
          ? ' (this endpoint needs an OAuth 2.0 user token with likes.read, not an app-only bearer)'
          : '';
      ctx.coverage.notes.push(`Likes unavailable: ${err.message}${hint}`);
      break;
    }

    buildIncludes(res.body, includes);
    const list = pickList(res.body, X_PLANS.tweets) ?? [];

    for (const record of list) {
      const f = applyPlan(record, X_PLANS.tweets);
      const author = includes.users.get(record.author_id);
      const item = shapeTweet(f, { includes, kindOverride: 'like' });
      if (!item.text) continue;
      item.via = author?.username ?? null;
      // A like is evidence about the subject, not about their reach. Zeroing
      // the other author's metrics keeps reach-ranking honest downstream.
      item.likes = 0;
      item.reposts = 0;
      ctx.upsert(item);
      added++;
    }

    cursor = res.body.meta?.next_token;
    if (!cursor) break;
  }

  ctx.coverage.likes = added > 0;
  if (added) ctx.onProgress?.({ stage: 'likes', message: `${added} liked posts collected.` });
}

/* ── 4. Stitch ──────────────────────────────────────────────────────────── */

/**
 * Reassemble self-threads.
 *
 * This is the single highest-value transformation in the X pipeline. A thread
 * is one argument written in instalments; read as separate posts it looks like
 * a person repeating themselves in fragments, and the panel is asked to judge a
 * mind on evidence that has been mechanically dismantled.
 *
 * Only *self*-threads are merged. A reply to someone else is a different speech
 * act and stays its own item.
 */
export function stitch(ctx) {
  const byConversation = new Map();

  for (const item of ctx.items.values()) {
    if (item.kind === 'like' || item.kind === 'retweet') continue;
    if (!item.conversationId) continue;
    if (!byConversation.has(item.conversationId)) byConversation.set(item.conversationId, []);
    byConversation.get(item.conversationId).push(item);
  }

  let threads = 0;
  let absorbed = 0;

  for (const [conversationId, parts] of byConversation) {
    if (parts.length < 2) continue;
    // Every part after the root must be the subject replying to themselves.
    const chained = parts.filter((p) => p.isSelfReply || p.id === conversationId);
    if (chained.length < 2) continue;

    chained.sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));
    const root = chained.find((p) => p.id === conversationId) ?? chained[0];

    const merged = {
      id: root.id,
      kind: 'thread',
      // Numbered so the panel can see the shape of the argument, not just its
      // content — where the writer paused, and what they put first.
      text: chained.map((p, i) => `(${i + 1}/${chained.length}) ${p.text}`).join('\n\n'),
      createdAt: root.createdAt,
      // Engagement concentrates on a thread's opening post; summing would
      // wildly overstate reach, so the root's numbers are the honest ones.
      likes: root.likes,
      reposts: root.reposts,
      replies: root.replies,
      conversationId,
      parts: chained.length,
      partial: !chained.some((p) => p.id === conversationId),
      isSelfReply: false,
      via: null,
    };

    for (const part of chained) ctx.items.delete(part.id);
    ctx.items.set(merged.id, merged);
    threads++;
    absorbed += chained.length;
  }

  ctx.coverage.threads = threads;
  if (threads) {
    ctx.onProgress?.({
      stage: 'stitch',
      message: `${threads} thread(s) reassembled from ${absorbed} posts.`,
    });
  }
}
