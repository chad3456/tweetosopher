import http from 'node:http';

/**
 * A stand-in X API v2.
 *
 * Reproduces the shapes that matter for this product and, more importantly, the
 * ones that are easy to get wrong: retweets whose `text` is the truncated
 * "RT @x: …" form with the real words only in `includes.tweets`, quote posts
 * whose referent lives in the same place, long posts truncated in `text` with
 * the full body in `note_tweet`, and a self-thread chained by
 * `conversation_id` + `in_reply_to_user_id`.
 *
 * `startXFixture` returns an `apiBase` you can point the pipeline's API host at
 * by overriding the module's base URL in tests.
 */

const SUBJECT = {
  id: '4242',
  username: 'marbledust',
  name: 'dust',
  description: 'reading things slowly https://t.co/abc123',
  location: 'a north-facing room',
  created_at: '2020-08-10T06:03:28.000Z',
  public_metrics: { followers_count: 4412, following_count: 289, tweet_count: 18204 },
};

const OTHER = { id: '9001', username: 'someone_else', name: 'Someone Else' };

const metrics = (l = 10) => ({
  like_count: l,
  retweet_count: Math.floor(l / 4),
  reply_count: 2,
  quote_count: 1,
});

/** The three-post self-thread, chained the way X chains them. */
const THREAD = [
  {
    id: '100',
    text: 'a thread about attention, one:',
    conversation_id: '100',
    created_at: '2026-02-01T10:00:00.000Z',
    public_metrics: metrics(900),
  },
  {
    id: '101',
    text: 'two: the platforms did not make us vain, vanity is old',
    conversation_id: '100',
    in_reply_to_user_id: SUBJECT.id,
    referenced_tweets: [{ type: 'replied_to', id: '100' }],
    created_at: '2026-02-01T10:02:00.000Z',
    public_metrics: metrics(120),
  },
  {
    id: '102',
    text: 'three: they made the audience unspecified, which is a condition',
    conversation_id: '100',
    in_reply_to_user_id: SUBJECT.id,
    referenced_tweets: [{ type: 'replied_to', id: '101' }],
    created_at: '2026-02-01T10:05:00.000Z',
    public_metrics: metrics(80),
  },
];

const TIMELINE = [
  ...THREAD,
  {
    id: '200',
    // The truncated form the API actually returns for a repost.
    text: 'RT @someone_else: the opposite of a rushed decision is not a slow…',
    conversation_id: '200',
    referenced_tweets: [{ type: 'retweeted', id: '900' }],
    created_at: '2026-01-30T09:00:00.000Z',
    public_metrics: metrics(0),
  },
  {
    id: '201',
    text: 'this is exactly right and I have nothing to add',
    conversation_id: '201',
    referenced_tweets: [{ type: 'quoted', id: '901' }],
    created_at: '2026-01-29T09:00:00.000Z',
    public_metrics: metrics(300),
  },
  {
    id: '202',
    text: 'a reply to a stranger, which is its own speech act',
    conversation_id: '888',
    in_reply_to_user_id: OTHER.id,
    referenced_tweets: [{ type: 'replied_to', id: '888' }],
    created_at: '2026-01-28T09:00:00.000Z',
    public_metrics: metrics(5),
  },
  {
    id: '203',
    // Long post: `text` is truncated, the real body is in note_tweet.
    text: 'every productivity system is a theory of what a person is for, and almost all of them…',
    note_tweet: {
      text: 'every productivity system is a theory of what a person is for, and almost all of them think you are a warehouse. inputs arrive, are sorted, are dispatched. the virtues are throughput and low shrinkage.',
    },
    conversation_id: '203',
    created_at: '2026-01-27T09:00:00.000Z',
    public_metrics: metrics(1200),
  },
  {
    id: '204',
    text: 'bought a plant. named it nothing. it is simply the plant https://t.co/xyz789',
    conversation_id: '204',
    created_at: '2026-01-26T09:00:00.000Z',
    public_metrics: metrics(52),
  },
];

const REFERENCED = [
  {
    id: '900',
    author_id: OTHER.id,
    text: 'the opposite of a rushed decision is not a slow decision, it is a decision you have already made and are waiting to admit',
    created_at: '2026-01-30T08:00:00.000Z',
    public_metrics: metrics(4000),
  },
  {
    id: '901',
    author_id: OTHER.id,
    text: 'attention is the only currency I have never been able to fake spending',
    created_at: '2026-01-29T08:00:00.000Z',
    public_metrics: metrics(2200),
  },
];

const LIKED = [
  {
    id: '700',
    author_id: OTHER.id,
    text: 'genuinely think most people would be happier if they were slightly worse at their jobs',
    created_at: '2026-01-25T09:00:00.000Z',
    public_metrics: metrics(8800),
  },
  {
    id: '701',
    author_id: OTHER.id,
    text: 'a museum is just a building where we agree to look slowly',
    created_at: '2026-01-24T09:00:00.000Z',
    public_metrics: metrics(3100),
  },
];

export async function startXFixture({ rateLimitFirst = 0, requireUserToken = true } = {}) {
  const hits = [];
  let throttled = 0;

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const auth = req.headers.authorization ?? '';
    hits.push({ path: url.pathname, params: Object.fromEntries(url.searchParams), auth });

    const send = (code, body) => {
      res.writeHead(code, { 'content-type': 'application/json' });
      res.end(JSON.stringify(body));
    };

    if (throttled < rateLimitFirst) {
      throttled++;
      res.writeHead(429, {
        'content-type': 'application/json',
        // X's convention: an absolute epoch second, not a duration.
        'x-rate-limit-reset': String(Math.floor(Date.now() / 1000)),
      });
      return res.end(JSON.stringify({ title: 'Too Many Requests' }));
    }

    if (!auth.startsWith('Bearer ')) return send(401, { title: 'Unauthorized' });

    if (url.pathname === `/2/users/by/username/${SUBJECT.username}`) {
      return send(200, { data: SUBJECT });
    }
    if (url.pathname.startsWith('/2/users/by/username/')) {
      return send(404, { title: 'Not Found Error', detail: 'Could not find user' });
    }

    if (url.pathname === `/2/users/${SUBJECT.id}/tweets`) {
      const expansions = url.searchParams.get('expansions') ?? '';
      return send(200, {
        data: TIMELINE,
        // Referenced posts only arrive when they were asked for.
        includes: expansions.includes('referenced_tweets.id')
          ? { tweets: REFERENCED, users: [OTHER] }
          : undefined,
        meta: { result_count: TIMELINE.length },
      });
    }

    if (url.pathname === `/2/users/${SUBJECT.id}/liked_tweets`) {
      // Mirrors the real failure: an app-only bearer is refused here.
      if (requireUserToken && !auth.includes('user-token')) {
        return send(403, {
          title: 'Forbidden',
          detail: 'Unsupported Authentication: user context required',
        });
      }
      return send(200, {
        data: LIKED,
        includes: { users: [OTHER] },
        meta: { result_count: LIKED.length },
      });
    }

    send(404, { title: 'Not Found Error' });
  });

  await new Promise((r) => server.listen(0, '127.0.0.1', r));

  return {
    apiBase: `http://127.0.0.1:${server.address().port}/2`,
    subject: SUBJECT,
    other: OTHER,
    hits,
    close: () => new Promise((r) => server.close(r)),
  };
}
