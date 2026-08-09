/**
 * The X (Twitter) ingestion pipeline.
 *
 *   profile → timeline → likes → stitch → normalize
 *
 * Same contract and same failure philosophy as the Substack pipeline: stages
 * fail independently, gaps are recorded rather than thrown, and only a run that
 * ends with nothing at all is an error.
 *
 * Note on robots.txt: it is deliberately *not* consulted here. robots.txt
 * governs crawlers discovering pages; this pipeline talks to a documented,
 * credentialed API whose terms are the credential itself. Applying a crawl
 * directive to an authorised API call would be cargo-culted politeness.
 */

import { PoliteClient } from '../http.js';
import { newBudget, agentAvailable } from '../agent.js';
import * as stages from './stages.js';

export const X_DEPTHS = {
  // One page of the timeline. Enough for a reading, fast enough for a form.
  fast: { timelinePages: 1, likePages: 0, maxItems: 120 },
  // The default: three pages plus likes. Roughly a year for most accounts.
  standard: { timelinePages: 3, likePages: 2, maxItems: 400 },
  // As far back as the API will let us go without a paid tier.
  deep: { timelinePages: 8, likePages: 5, maxItems: 1000 },
};

export class XError extends Error {
  constructor(message, { status = 502, hint } = {}) {
    super(message);
    this.name = 'XError';
    this.status = status;
    this.hint = hint;
  }
}

/** `@handle`, a bare handle, or any x.com/twitter.com URL → bare handle. */
export function normalizeHandle(input) {
  let s = String(input ?? '').trim();
  const fromUrl = s.match(/(?:twitter\.com|x\.com)\/(?:#!\/)?@?([A-Za-z0-9_]{1,15})/i);
  if (fromUrl) return fromUrl[1];
  s = s.replace(/^@/, '');
  return s.split(/[/?#]/)[0];
}

/**
 * @param {string} rawHandle
 * @param {{depth?: keyof X_DEPTHS, onProgress?: Function, http?: PoliteClient, tokens?: object}} options
 */
export async function runXPipeline(rawHandle, options = {}) {
  const { depth = 'standard', onProgress, http } = options;

  const tokens = options.tokens ?? {
    app: process.env.X_BEARER_TOKEN,
    user: process.env.X_USER_ACCESS_TOKEN,
  };

  if (!tokens.app) {
    throw new XError('X_BEARER_TOKEN is not set.', {
      status: 401,
      hint: 'Add an app-only bearer token from the X developer portal to .env.',
    });
  }

  const handle = normalizeHandle(rawHandle);
  if (!/^[A-Za-z0-9_]{1,15}$/.test(handle)) {
    throw new XError(`"${rawHandle}" is not a valid X handle.`, {
      status: 400,
      hint: 'Handles are 1–15 characters: letters, numbers and underscores.',
    });
  }

  const items = new Map();
  const ctx = {
    handle,
    tokens,
    // The API is credentialed and rate-limit-headered; robots does not apply.
    http:
      http ??
      new PoliteClient({ minIntervalMs: 250, respectRobots: false, maxRetries: 3 }),
    limits: X_DEPTHS[depth] ?? X_DEPTHS.standard,
    items,
    budget: newBudget(),
    agentEnabled: agentAvailable(),
    onProgress,
    subject: null,
    includes: null,
    coverage: { timeline: false, likes: false, threads: 0, repairs: [], notes: [] },
    upsert(record) {
      if (!record?.id) return;
      const existing = items.get(record.id);
      items.set(record.id, existing ? { ...existing, ...record } : record);
    },
  };

  // The profile is the one stage that cannot fail softly: without a user id
  // there is nothing to collect from.
  try {
    await stages.profile(ctx);
  } catch (err) {
    throw new XError(err.message || 'Could not read that profile.', {
      status: err.status ?? 502,
      hint:
        err.status === 401
          ? 'X rejected the bearer token.'
          : err.status === 429
            ? 'X rate limit reached — try again in a few minutes.'
            : undefined,
    });
  }

  for (const [name, fn] of [
    ['timeline', stages.timeline],
    ['likes', stages.likes],
  ]) {
    try {
      await fn(ctx);
    } catch (err) {
      ctx.coverage.notes.push(`${name} stage failed: ${err.message}`);
      onProgress?.({ stage: name, message: `${name} failed: ${err.message}` });
    }
  }

  // Stitching is pure and local, but a bug in it should not lose the corpus.
  try {
    stages.stitch(ctx);
  } catch (err) {
    ctx.coverage.notes.push(`Thread reassembly failed: ${err.message}`);
  }

  const collected = [...items.values()].filter((i) => (i.text ?? '').trim().length > 1);
  if (!collected.length) {
    throw new XError(`@${handle} has no readable public activity to analyse.`, {
      status: 404,
      hint: 'The account may be protected, suspended, or empty.',
    });
  }

  return normalize(ctx, collected, depth);
}

function normalize(ctx, collected, depth) {
  const items = collected
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, ctx.limits.maxItems)
    .map((i) => ({
      id: i.id,
      kind: i.kind,
      text: i.text,
      createdAt: i.createdAt ?? null,
      likes: i.likes ?? 0,
      reposts: i.reposts ?? 0,
      replies: i.replies ?? 0,
      via: i.via ?? null,
      parts: i.parts ?? null,
      url: i.kind === 'like' ? null : `https://x.com/${ctx.subject.handle}/status/${i.id}`,
    }));

  const count = (kind) => items.filter((i) => i.kind === kind).length;

  return {
    platform: 'twitter',
    profile: {
      handle: ctx.subject.handle,
      displayName: ctx.subject.displayName,
      bio: ctx.subject.bio,
      location: ctx.subject.location,
      joined: ctx.subject.joined,
      followers: ctx.subject.followers,
      following: ctx.subject.following,
      posts: ctx.subject.posts,
      url: ctx.subject.url,
    },
    items,
    coverage: ctx.coverage,
    pipeline: {
      depth,
      requests: ctx.http.stats.requests,
      retries: ctx.http.stats.retries,
      repairs: ctx.coverage.repairs.length,
      posts: count('post'),
      threads: count('thread'),
      replies: count('reply'),
      quotes: count('quote'),
      retweets: count('retweet'),
      likes: count('like'),
    },
  };
}
