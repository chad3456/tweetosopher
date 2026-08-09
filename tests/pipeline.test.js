import test from 'node:test';
import assert from 'node:assert/strict';

import { startFixture } from './fixtures/substack-server.js';
import { runSubstackPipeline, normalizeSubstack } from '../server/lib/pipeline/index.js';
import { PoliteClient, HttpError } from '../server/lib/pipeline/http.js';
import {
  BUILTIN_PLANS,
  applyPlan,
  pick,
  pickList,
  planStore,
  validatePlan,
} from '../server/lib/pipeline/plans.js';
import { summarize } from '../server/lib/pipeline/agent.js';
import { buildCorpus } from '../server/lib/corpus.js';

/** Fast, non-caching client so tests do not sit through politeness delays. */
const testClient = (opts = {}) =>
  new PoliteClient({ minIntervalMs: 0, cacheTtlMs: 0, maxRetries: 2, ...opts });

test('normalizeSubstack accepts every shape a person might paste', () => {
  assert.equal(normalizeSubstack('astralcodexten'), 'https://astralcodexten.substack.com');
  assert.equal(normalizeSubstack('@astralcodexten'), 'https://astralcodexten.substack.com');
  assert.equal(normalizeSubstack('foo.substack.com/p/bar'), 'https://foo.substack.com');
  assert.equal(normalizeSubstack('https://custom.domain/p/x'), 'https://custom.domain');
  assert.equal(normalizeSubstack(''), null);
  assert.equal(normalizeSubstack('   '), null);
});

test('pick refuses to walk the prototype chain', () => {
  // A plan is authored by a model. It must not be able to reach Object.prototype.
  assert.equal(pick({}, 'constructor.name'), undefined);
  assert.equal(pick({}, '__proto__.polluted'), undefined);
  assert.equal(pick({ a: { b: [{ c: 'yes' }] } }, 'a.b.0.c'), 'yes');
  assert.equal(pick({ a: 1 }, 'a.b.c'), undefined);
});

test('validatePlan rejects a plausible plan that does not actually fit', () => {
  const payload = [{ headline: 'A' }, { headline: 'B' }];
  const wrong = { list: '', fields: { title: ['title'], text: ['body'] } };
  const right = { list: '', fields: { title: ['headline'], text: ['headline'] } };

  assert.equal(validatePlan(payload, wrong).ok, false);
  assert.equal(validatePlan(payload, right).ok, true);
});

test('fast depth is one pass over the feed and nothing else', async () => {
  const fx = await startFixture();
  try {
    const c = await runSubstackPipeline(fx.origin, { depth: 'fast', http: testClient() });

    assert.equal(c.platform, 'substack');
    assert.equal(c.profile.displayName, 'The Long Way');
    assert.equal(c.profile.bio, 'Essays about attention & machines.');
    assert.equal(c.items.length, 3);
    assert.ok(c.items.every((i) => i.text.length > 100), 'feed carries full bodies');
    assert.ok(!fx.hits.includes('/api/v1/archive'), 'fast depth must not touch the archive');
  } finally {
    await fx.close();
  }
});

test('standard depth merges feed, archive and notes without duplicating posts', async () => {
  const fx = await startFixture();
  try {
    const c = await runSubstackPipeline(fx.origin, { depth: 'standard', http: testClient() });

    const essays = c.items.filter((i) => i.kind !== 'note');
    const notes = c.items.filter((i) => i.kind === 'note');

    assert.equal(essays.length, 24, 'the whole archive, not just the feed');
    assert.equal(notes.length, 5);

    const ids = c.items.map((i) => i.id);
    assert.equal(new Set(ids).size, ids.length, 'no duplicates across stages');

    // The three posts that appear in both feed and archive must keep the feed's
    // full body rather than being clobbered by the archive's short blurb.
    const overlap = essays.filter((i) => i.url?.endsWith('post-0') || i.url?.endsWith('post-1'));
    assert.ok(overlap.length >= 1);
    assert.ok(
      overlap.every((i) => i.text.length > 300),
      'richer text must win the merge',
    );

    assert.equal(c.pipeline.repairs, 0, 'built-in plans fit the expected shape');
  } finally {
    await fx.close();
  }
});

test('deep depth hydrates thin posts and flags the paywalled ones', async () => {
  const fx = await startFixture();
  try {
    const c = await runSubstackPipeline(fx.origin, { depth: 'deep', http: testClient() });

    const hydrated = c.items.filter((i) => i.source?.includes('+api'));
    assert.ok(hydrated.length > 0, 'some posts were fetched in full');
    assert.ok(
      hydrated.every((i) => i.text.length > 300),
      'hydration produced real prose',
    );

    const paywalled = c.items.filter((i) => i.paywalled);
    assert.ok(paywalled.length > 0, 'paid posts are detected');
    assert.ok(
      c.coverage.notes.some((n) => n.includes('paid-subscriber only')),
      'and reported in coverage',
    );
    assert.ok(
      !hydrated.some((i) => i.paywalled),
      'paywalled posts are not counted as successfully hydrated',
    );
  } finally {
    await fx.close();
  }
});

test('a changed archive shape degrades to a gap when the agent is unavailable', async () => {
  const fx = await startFixture({ mutateArchive: true });
  const key = process.env.ANTHROPIC_API_KEY;
  delete process.env.ANTHROPIC_API_KEY;
  planStore.clear();

  try {
    const c = await runSubstackPipeline(fx.origin, { depth: 'standard', http: testClient() });

    // The archive is unreadable, but the feed still worked — the run survives.
    assert.ok(c.items.length >= 3, 'feed items still collected');
    assert.equal(c.coverage.archive, false);
    assert.ok(
      c.coverage.notes.some((n) => n.includes('archive') && n.includes('could not extract')),
      'the gap is recorded rather than swallowed',
    );
    assert.ok(
      c.coverage.notes.some((n) => n.includes('ANTHROPIC_API_KEY')),
      'and it says why repair did not run',
    );
  } finally {
    if (key) process.env.ANTHROPIC_API_KEY = key;
    await fx.close();
  }
});

test('a repaired plan makes the changed shape readable again', async () => {
  const fx = await startFixture({ mutateArchive: true });
  try {
    // Stand in for what the agent would return, and prove the plan mechanism
    // — validation, list resolution, field mapping — actually recovers the data.
    const payload = { results: [{ uid: 1, headline: 'A', teaser_html: '<p>body</p>', permalink: 'u' }] };
    const repaired = {
      list: 'results',
      fields: {
        id: ['uid'],
        title: ['headline'],
        text: ['teaser_html', 'standfirst'],
        url: ['permalink'],
      },
    };

    assert.equal(validatePlan(payload, repaired, ['title', 'text']).ok, true);

    const list = pickList(payload, repaired);
    const mapped = applyPlan(list[0], repaired);
    assert.equal(mapped.title, 'A');
    assert.equal(mapped.url, 'u');

    // And the built-in plan genuinely fails on it, so the repair was necessary.
    assert.equal(validatePlan(payload, BUILTIN_PLANS.archive, ['title']).ok, false);
  } finally {
    await fx.close();
  }
});

test('robots.txt is obeyed', async () => {
  const fx = await startFixture({ robots: 'User-agent: *\nDisallow: /api/\n' });
  try {
    const client = testClient();
    await assert.rejects(
      () => client.get(`${fx.origin}/api/v1/publication`, { as: 'json' }),
      (err) => err instanceof HttpError && /robots/.test(err.message),
    );

    // A disallowed path must not be requested at all, not merely discarded.
    assert.ok(!fx.hits.includes('/api/v1/publication'));
    assert.equal(client.stats.blocked, 1);
  } finally {
    await fx.close();
  }
});

test('429 is retried with backoff rather than failing the run', async () => {
  const fx = await startFixture({ rateLimitFirst: 2 });
  try {
    const client = testClient();
    const c = await runSubstackPipeline(fx.origin, { depth: 'standard', http: client });
    assert.ok(client.stats.retries >= 2, 'retries happened');
    assert.ok(c.items.length > 3, 'and the run still completed');
  } finally {
    await fx.close();
  }
});

test('an unreachable publication fails loudly', async () => {
  const fx = await startFixture();
  const origin = fx.origin;
  await fx.close();

  await assert.rejects(
    () => runSubstackPipeline(origin, { depth: 'fast', http: testClient({ maxRetries: 0 }) }),
    (err) => err.status === 404 && /No public posts/.test(err.message),
  );
});

test('summarize keeps keys and drops bulk', () => {
  const big = { body: 'x'.repeat(5000), list: Array.from({ length: 50 }, (_, i) => ({ i })) };
  const small = summarize(big);
  assert.ok(small.body.length < 220, 'long strings truncated');
  assert.ok(small.body.includes('5000 chars'), 'and marked as truncated');
  assert.equal(small.list.length, 3, 'two samples plus a count');
  assert.ok(String(small.list[2]).includes('48 more'));
});

test('the pipeline output feeds the corpus builder unchanged', async () => {
  const fx = await startFixture();
  try {
    const c = await runSubstackPipeline(fx.origin, { depth: 'standard', http: testClient() });
    const corpus = buildCorpus(c);

    assert.ok(corpus.stats.analysed > 0);
    assert.ok(corpus.text.includes('PLATFORM: substack'));
    assert.ok(corpus.text.includes('[0]'), 'items are numbered for citation');
    assert.equal(corpus.index.size, corpus.stats.analysed);
  } finally {
    await fx.close();
  }
});
