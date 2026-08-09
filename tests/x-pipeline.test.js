import test from 'node:test';
import assert from 'node:assert/strict';

import { startXFixture } from './fixtures/x-server.js';
import { runXPipeline, normalizeHandle } from '../server/lib/pipeline/x/index.js';
import { stripUrls } from '../server/lib/pipeline/x/stages.js';
import { PoliteClient } from '../server/lib/pipeline/http.js';
import { buildCorpus } from '../server/lib/corpus.js';

const fast = () =>
  new PoliteClient({ minIntervalMs: 0, cacheTtlMs: 0, respectRobots: false, maxRetries: 2 });

/** Point the pipeline at the fixture for the duration of one test. */
async function withFixture(opts, fn) {
  const fx = await startXFixture(opts);
  const prev = process.env.X_API_BASE;
  process.env.X_API_BASE = fx.apiBase;
  try {
    return await fn(fx);
  } finally {
    if (prev === undefined) delete process.env.X_API_BASE;
    else process.env.X_API_BASE = prev;
    await fx.close();
  }
}

const run = (fx, opts = {}) =>
  runXPipeline('marbledust', {
    depth: 'standard',
    http: fast(),
    ...opts,
    // After the spread, so a caller supplying only `tokens.user` still gets the
    // app token rather than silently dropping it.
    tokens: { app: 'app-token', ...opts.tokens },
  });

test('normalizeHandle accepts every shape a person might paste', () => {
  assert.equal(normalizeHandle('@marbledust'), 'marbledust');
  assert.equal(normalizeHandle('marbledust'), 'marbledust');
  assert.equal(normalizeHandle('https://x.com/marbledust'), 'marbledust');
  assert.equal(normalizeHandle('https://twitter.com/marbledust/status/123'), 'marbledust');
  assert.equal(normalizeHandle('x.com/marbledust?utm=1'), 'marbledust');
});

test('stripUrls removes t.co noise without eating the prose', () => {
  assert.equal(stripUrls('a plant https://t.co/xyz789'), 'a plant');
  assert.equal(stripUrls('see https://t.co/a and https://t.co/b now'), 'see and now');
  assert.equal(stripUrls('no links here'), 'no links here');
});

test('the profile is read and normalised', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);
    assert.equal(c.platform, 'twitter');
    assert.equal(c.profile.handle, 'marbledust');
    assert.equal(c.profile.displayName, 'dust');
    assert.equal(c.profile.followers, 4412);
    assert.equal(c.profile.bio, 'reading things slowly', 't.co link stripped from the bio');
    assert.equal(c.profile.url, 'https://x.com/marbledust');
  });
});

test('a self-thread is reassembled into one argument', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);

    const thread = c.items.find((i) => i.kind === 'thread');
    assert.ok(thread, 'the three chained posts became a thread');
    assert.equal(thread.parts, 3);
    assert.equal(thread.id, '100', 'keyed on the root post');

    // The argument survives in order, and the reader can see its shape.
    assert.match(thread.text, /\(1\/3\) a thread about attention/);
    assert.match(thread.text, /\(2\/3\) two: the platforms/);
    assert.match(thread.text, /\(3\/3\) three: they made the audience/);
    assert.ok(
      thread.text.indexOf('(1/3)') < thread.text.indexOf('(3/3)'),
      'chronological, not API order',
    );

    // Engagement concentrates on the opening post; summing would overstate it.
    assert.equal(thread.likes, 900);

    // And the parts are gone as standalone items.
    assert.equal(c.items.filter((i) => ['101', '102'].includes(i.id)).length, 0);
  });
});

test('a reply to someone else stays its own item', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);
    const reply = c.items.find((i) => i.id === '202');
    assert.ok(reply, 'not swept into a thread');
    assert.equal(reply.kind, 'reply');
  });
});

test('reposts carry the real text, not the RT truncation', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);
    const repost = c.items.find((i) => i.kind === 'retweet');

    assert.ok(repost);
    assert.ok(!repost.text.startsWith('RT @'), 'the API truncation is replaced');
    assert.ok(!repost.text.includes('…'), 'and it is not still truncated');
    assert.match(repost.text, /waiting to admit$/, 'the full original text is present');
    assert.equal(repost.via, 'someone_else', 'authorship is recorded');
  });
});

test('quote posts are given their referent', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);
    const quote = c.items.find((i) => i.kind === 'quote');

    assert.ok(quote);
    assert.match(quote.text, /^this is exactly right/);
    // Without this the panel reads "this is exactly right" about nothing.
    assert.match(quote.text, /quoting @someone_else: attention is the only currency/);
  });
});

test('long posts use the untruncated body', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);
    const long = c.items.find((i) => i.id === '203');

    assert.ok(long.text.length > 150, 'note_tweet preferred over the clipped text');
    assert.match(long.text, /low shrinkage\.$/);
    assert.ok(!long.text.includes('…'), 'no ellipsis survived');
  });
});

test('likes need a user token, and say so when absent', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx);

    assert.equal(c.items.filter((i) => i.kind === 'like').length, 0);
    assert.equal(c.coverage.likes, false);
    assert.ok(
      c.coverage.notes.some((n) => n.includes('X_USER_ACCESS_TOKEN')),
      'the gap names the credential that would fix it',
    );
    assert.ok(!fx.hits.some((h) => h.path.includes('liked_tweets')), 'and it is not attempted');
  });
});

test('with a user token, likes are collected as taste rather than reach', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx, { tokens: { user: 'user-token' } });

    const likes = c.items.filter((i) => i.kind === 'like');
    assert.equal(likes.length, 2);
    assert.equal(likes[0].via, 'someone_else');
    // The other author's engagement is not this subject's reach.
    assert.ok(likes.every((l) => l.likes === 0 && l.reposts === 0));
    assert.ok(likes.every((l) => l.url === null), 'a like is not the subject\'s own post');
  });
});

test('an app-only token on the likes endpoint reports the real cause', async () => {
  await withFixture({}, async (fx) => {
    // A user token that the fixture rejects, i.e. an app-only bearer misused.
    const c = await run(fx, { tokens: { user: 'app-only-bearer' } });
    assert.ok(
      c.coverage.notes.some((n) => /likes\.read/.test(n)),
      'the 403 is explained rather than passed through raw',
    );
  });
});

test('expansions are actually requested', async () => {
  await withFixture({}, async (fx) => {
    await run(fx);
    const timeline = fx.hits.find((h) => h.path.endsWith('/tweets'));
    assert.match(timeline.params.expansions, /referenced_tweets\.id/);
    assert.match(timeline.params['tweet.fields'], /conversation_id/);
    assert.match(timeline.params['tweet.fields'], /note_tweet/);
  });
});

test('x-rate-limit-reset is read as a deadline, not a duration', async () => {
  await withFixture({ rateLimitFirst: 1 }, async (fx) => {
    const client = fast();
    const started = Date.now();
    const c = await run(fx, { http: client });
    // Misreading the epoch second as a delay would sleep for decades.
    assert.ok(Date.now() - started < 5000, 'retried promptly');
    assert.ok(client.stats.retries >= 1);
    assert.ok(c.items.length > 0);
  });
});

test('an unknown handle fails with a useful status', async () => {
  await withFixture({}, async (fx) => {
    await assert.rejects(
      () =>
        runXPipeline('nobody_here', {
          depth: 'fast',
          http: fast(),
          tokens: { app: 'app-token' },
        }),
      (err) => err.status === 404,
    );
  });
});

test('a missing bearer token fails before any request', async () => {
  await assert.rejects(
    () => runXPipeline('marbledust', { tokens: {}, http: fast() }),
    (err) => err.status === 401 && /X_BEARER_TOKEN/.test(err.message),
  );
});

test('an invalid handle is rejected without calling the API', async () => {
  await withFixture({}, async (fx) => {
    await assert.rejects(
      () => runXPipeline('this handle is far too long', { http: fast(), tokens: { app: 'a' } }),
      (err) => err.status === 400,
    );
    assert.equal(fx.hits.length, 0);
  });
});

test('the collection feeds the corpus builder, threads intact', async () => {
  await withFixture({}, async (fx) => {
    const c = await run(fx, { tokens: { user: 'user-token' } });
    const corpus = buildCorpus(c);

    assert.ok(corpus.stats.analysed > 0);
    assert.ok(corpus.text.includes('PLATFORM: twitter'));
    assert.ok(corpus.text.includes('HANDLE: marbledust'));
    assert.match(corpus.text, /\(thread\)/, 'thread kind is visible to the panel');
    assert.ok(
      corpus.text.includes('WHAT THEY AMPLIFY'),
      'likes are presented as taste, in their own section',
    );
    assert.equal(corpus.index.size, corpus.stats.analysed);
  });
});
