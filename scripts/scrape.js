#!/usr/bin/env node
/**
 * Run the Substack pipeline on its own and print what it got.
 *
 *   npm run scrape -- astralcodexten
 *   npm run scrape -- astralcodexten --depth deep
 *   npm run scrape -- https://www.astralcodexten.com --json > corpus.json
 *
 * This exists because a scraper you can only exercise through a web form is a
 * scraper you cannot debug. It prints the stage log, the coverage gaps, and any
 * repairs the agent made, which is exactly what you need when an endpoint has
 * changed shape underneath you.
 */

import 'dotenv/config';
import { runSubstackPipeline, DEPTHS } from '../server/lib/pipeline/index.js';
import { buildCorpus } from '../server/lib/corpus.js';

const argv = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? fallback : argv[i + 1];
};
const has = (name) => argv.includes(`--${name}`);

const target = argv.find((a) => !a.startsWith('--') && argv[argv.indexOf(a) - 1] !== '--depth');

if (!target || has('help')) {
  console.log(`
Usage: npm run scrape -- <publication> [options]

  <publication>     name, host, or full URL
  --depth <level>   ${Object.keys(DEPTHS).join(' | ')}   (default: standard)
  --json            print the collection as JSON and nothing else
  --corpus          also print the assembled prompt corpus
`);
  process.exit(target ? 0 : 1);
}

const depth = flag('depth', 'standard');
if (!DEPTHS[depth]) {
  console.error(`Unknown depth "${depth}". Options: ${Object.keys(DEPTHS).join(', ')}`);
  process.exit(1);
}

const quiet = has('json');
const started = Date.now();

try {
  const collection = await runSubstackPipeline(target, {
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
  const p = collection.pipeline;

  console.log(`
── ${collection.profile.displayName} ${'─'.repeat(Math.max(0, 46 - collection.profile.displayName.length))}
   ${collection.profile.url}
   ${collection.profile.bio || '(no description)'}

   ${p.essays} essays · ${p.notes} notes · depth "${p.depth}" · ${elapsed}s
   ${p.requests} requests (${p.cacheHits} cached, ${p.retries} retried) · ${p.repairs} extraction repair(s)
`);

  if (collection.coverage.repairs.length) {
    console.log('   Repairs:');
    for (const r of collection.coverage.repairs) {
      console.log(`     • ${r.endpoint}: ${r.notes}${r.cached ? ' (cached)' : ''}`);
    }
    console.log();
  }

  if (collection.coverage.notes.length) {
    console.log('   Gaps:');
    for (const n of collection.coverage.notes) console.log(`     • ${n}`);
    console.log();
  }

  console.log('   Most recent:');
  for (const item of collection.items.slice(0, 12)) {
    const date = item.createdAt ? new Date(item.createdAt).toISOString().slice(0, 10) : '          ';
    const label = item.title || item.text.slice(0, 64).replace(/\n/g, ' ');
    const marks = [item.paywalled ? '🔒' : '', item.kind === 'note' ? '✎' : ''].join('');
    console.log(`     ${date}  ${marks.padEnd(2)} ${label.slice(0, 68)}`);
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
