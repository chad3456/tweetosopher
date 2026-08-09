#!/usr/bin/env node
/**
 * Run a collection pipeline on its own and print what it got.
 *
 *   npm run scrape -- marbledust
 *   npm run scrape -- marbledust --depth deep
 *   npm run scrape -- marbledust --json > corpus.json
 *   npm run scrape -- the-long-way --platform substack
 *
 * This exists because a scraper you can only exercise through a web form is a
 * scraper you cannot debug. It prints the stage log, the coverage gaps, and any
 * repairs the agent made — which is what you need when an endpoint has changed
 * shape underneath you.
 */

import 'dotenv/config';
import { runXPipeline, X_DEPTHS } from '../server/lib/pipeline/x/index.js';
import { runSubstackPipeline, DEPTHS as SUBSTACK_DEPTHS } from '../server/lib/pipeline/index.js';
import { buildCorpus } from '../server/lib/corpus.js';

const argv = process.argv.slice(2);
const VALUE_FLAGS = new Set(['--depth', '--platform']);

const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : argv[i + 1];
};
const has = (name) => argv.includes(`--${name}`);

// Positional target = the first bare argument that is not a flag's value.
const target = argv.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.has(argv[i - 1]));

const platform = flag('platform', 'twitter');
const RUNNERS = {
  twitter: { run: runXPipeline, depths: X_DEPTHS, sigil: '@' },
  substack: { run: runSubstackPipeline, depths: SUBSTACK_DEPTHS, sigil: '' },
};

if (!target || has('help')) {
  console.log(`
Usage: npm run scrape -- <handle> [options]

  <handle>            an X handle, @handle, or profile URL
  --platform <name>   twitter (default) | substack
  --depth <level>     fast | standard | deep      (default: standard)
  --json              print the collection as JSON and nothing else
  --corpus            also print the assembled prompt corpus
`);
  process.exit(target ? 0 : 1);
}

const runner = RUNNERS[platform];
if (!runner) {
  console.error(`Unknown platform "${platform}". Options: ${Object.keys(RUNNERS).join(', ')}`);
  process.exit(1);
}

const depth = flag('depth', 'standard');
if (!runner.depths[depth]) {
  console.error(`Unknown depth "${depth}". Options: ${Object.keys(runner.depths).join(', ')}`);
  process.exit(1);
}

const quiet = has('json');
const started = Date.now();

try {
  const collection = await runner.run(target, {
    depth,
    onProgress: quiet
      ? undefined
      : (e) => console.error(`  [${String(e.stage).padEnd(8)}] ${e.message}`),
  });

  if (quiet) {
    console.log(JSON.stringify(collection, null, 2));
    process.exit(0);
  }

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  const p = collection.pipeline ?? {};
  const name = collection.profile.displayName || collection.profile.handle;

  const composition = Object.entries({
    posts: p.posts,
    threads: p.threads,
    replies: p.replies,
    quotes: p.quotes,
    reposts: p.retweets,
    likes: p.likes,
    essays: p.essays,
    notes: p.notes,
  })
    .filter(([, n]) => n)
    .map(([k, n]) => `${n} ${k}`)
    .join(' · ');

  console.log(`
── ${name} ${'─'.repeat(Math.max(0, 46 - name.length))}
   ${runner.sigil}${collection.profile.handle} · ${collection.profile.url}
   ${collection.profile.bio || '(no bio)'}

   ${composition || `${collection.items.length} items`}
   depth "${depth}" · ${elapsed}s · ${p.requests ?? '?'} requests (${p.retries ?? 0} retried) · ${
     p.repairs ?? 0
   } extraction repair(s)
`);

  if (collection.coverage.repairs?.length) {
    console.log('   Repairs:');
    for (const r of collection.coverage.repairs) {
      console.log(`     • ${r.endpoint}: ${r.notes}${r.cached ? ' (cached)' : ''}`);
    }
    console.log();
  }

  if (collection.coverage.notes?.length) {
    console.log('   Gaps:');
    for (const n of collection.coverage.notes) console.log(`     • ${n}`);
    console.log();
  }

  const MARK = { thread: '⛓', retweet: '↻', like: '♡', quote: '❝', reply: '↳', note: '✎' };
  console.log('   Most recent:');
  for (const item of collection.items.slice(0, 14)) {
    const date = item.createdAt
      ? new Date(item.createdAt).toISOString().slice(0, 10)
      : '          ';
    const label = (item.title || item.text).replace(/\s+/g, ' ').slice(0, 66);
    const via = item.via ? ` (@${item.via})` : '';
    console.log(`     ${date}  ${(MARK[item.kind] ?? ' ').padEnd(2)} ${label}${via}`);
  }
  console.log();

  if (has('corpus')) {
    const corpus = buildCorpus(collection);
    console.log(`── prompt corpus ${'─'.repeat(38)}`);
    console.log(`   ${JSON.stringify(corpus.stats)}\n`);
    console.log(corpus.text.slice(0, 4000));
  }
} catch (err) {
  console.error(`\n  ✗ ${err.message}`);
  if (err.hint) console.error(`    ${err.hint}`);
  process.exit(1);
}
