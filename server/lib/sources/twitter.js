/**
 * Twitter / X collection.
 *
 * Two credentials matter here and they are not interchangeable:
 *
 *   X_BEARER_TOKEN       app-only. Profile + timeline. This is the one most
 *                        people have.
 *   X_USER_ACCESS_TOKEN  OAuth 2.0 user context with `likes.read`. Required for
 *                        liked tweets — the app-only bearer returns 403 there,
 *                        no matter how the request is shaped.
 *
 * Likes are the most revealing part of a corpus and the hardest to get, so a
 * missing user token degrades the read rather than failing it: we record the
 * gap in `coverage` and let the panel know it is working from public output
 * only.
 */

const API = 'https://api.twitter.com/2';

class XError extends Error {
  constructor(message, { status, hint } = {}) {
    super(message);
    this.name = 'XError';
    this.status = status;
    this.hint = hint;
  }
}

async function xFetch(path, token, params = {}) {
  const url = new URL(API + path);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
  }

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status === 429) {
    const reset = res.headers.get('x-rate-limit-reset');
    const waitFor = reset
      ? Math.max(0, Number(reset) * 1000 - Date.now())
      : null;
    throw new XError('X rate limit reached.', {
      status: 429,
      hint: waitFor
        ? `Try again in about ${Math.ceil(waitFor / 60000)} minute(s).`
        : 'Try again shortly.',
    });
  }

  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    const detail = body?.detail || body?.title || `HTTP ${res.status}`;
    throw new XError(detail, { status: res.status });
  }

  return body;
}

/** `@handle`, a bare handle, or a full x.com/twitter.com URL → bare handle. */
export function normalizeHandle(input) {
  let s = String(input || '').trim();
  const urlMatch = s.match(
    /(?:twitter\.com|x\.com)\/(?:#!\/)?@?([A-Za-z0-9_]{1,15})/i,
  );
  if (urlMatch) return urlMatch[1];
  s = s.replace(/^@/, '');
  return s.split(/[/?#]/)[0];
}

function stripUrls(text) {
  // t.co links carry no signal for the panel and eat a lot of tokens.
  return text.replace(/https?:\/\/t\.co\/\w+/g, '').trim();
}

function shapeTweet(t, kind) {
  const refType = t.referenced_tweets?.[0]?.type;
  return {
    id: t.id,
    kind:
      kind ??
      (refType === 'retweeted'
        ? 'retweet'
        : refType === 'quoted'
          ? 'quote'
          : refType === 'replied_to'
            ? 'reply'
            : 'post'),
    text: stripUrls(t.text || ''),
    createdAt: t.created_at,
    likes: t.public_metrics?.like_count ?? 0,
    reposts: t.public_metrics?.retweet_count ?? 0,
    replies: t.public_metrics?.reply_count ?? 0,
  };
}

async function paginate(path, token, params, pages) {
  const out = [];
  let cursor;
  for (let i = 0; i < pages; i++) {
    const body = await xFetch(path, token, { ...params, pagination_token: cursor });
    out.push(...(body.data ?? []));
    cursor = body.meta?.next_token;
    if (!cursor) break;
  }
  return out;
}

/**
 * Collect a corpus for one handle.
 * Returns `{ platform, profile, items, coverage }` — the shape every source in
 * this project returns, so the analysis layer never branches on platform.
 */
export async function collectTwitter(rawHandle, { signal } = {}) {
  const bearer = process.env.X_BEARER_TOKEN;
  const userToken = process.env.X_USER_ACCESS_TOKEN;

  if (!bearer) {
    throw new XError('X_BEARER_TOKEN is not set.', {
      status: 401,
      hint: 'Add an app-only bearer token to .env, or run in demo mode.',
    });
  }

  const handle = normalizeHandle(rawHandle);
  if (!/^[A-Za-z0-9_]{1,15}$/.test(handle)) {
    throw new XError(`"${rawHandle}" is not a valid X handle.`, { status: 400 });
  }

  const userBody = await xFetch(`/users/by/username/${handle}`, bearer, {
    'user.fields': 'description,public_metrics,created_at,location,url,verified',
  });

  const user = userBody.data;
  if (!user) {
    throw new XError(`No X account found for @${handle}.`, { status: 404 });
  }

  const coverage = { timeline: false, likes: false, notes: [] };

  // Timeline: originals, replies and retweets. 3 pages ≈ 300 tweets, which is
  // more than enough voice for the panel without blowing the context window.
  let timeline = [];
  try {
    const raw = await paginate(`/users/${user.id}/tweets`, bearer, {
      max_results: 100,
      'tweet.fields': 'created_at,public_metrics,referenced_tweets',
    }, 3);
    timeline = raw.map((t) => shapeTweet(t));
    coverage.timeline = true;
  } catch (err) {
    coverage.notes.push(`Timeline unavailable: ${err.message}`);
  }

  // Likes: only reachable with a user-context token.
  let likes = [];
  if (userToken) {
    try {
      const raw = await paginate(`/users/${user.id}/liked_tweets`, userToken, {
        max_results: 100,
        'tweet.fields': 'created_at,public_metrics',
        'expansions': 'author_id',
      }, 2);
      likes = raw.map((t) => shapeTweet(t, 'like'));
      coverage.likes = true;
    } catch (err) {
      coverage.notes.push(`Likes unavailable: ${err.message}`);
    }
  } else {
    coverage.notes.push(
      'Likes not collected — no X_USER_ACCESS_TOKEN with likes.read scope.',
    );
  }

  if (!timeline.length && !likes.length) {
    throw new XError(
      `@${handle} has no readable public activity to analyse.`,
      { status: 404 },
    );
  }

  return {
    platform: 'twitter',
    profile: {
      handle: user.username,
      displayName: user.name,
      bio: stripUrls(user.description || ''),
      location: user.location || null,
      joined: user.created_at,
      followers: user.public_metrics?.followers_count ?? null,
      following: user.public_metrics?.following_count ?? null,
      posts: user.public_metrics?.tweet_count ?? null,
      url: `https://x.com/${user.username}`,
    },
    items: [...timeline, ...likes].filter((t) => t.text.length > 1),
    coverage,
  };
}
