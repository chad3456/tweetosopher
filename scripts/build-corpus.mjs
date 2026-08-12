#!/usr/bin/env node
/**
 * Compiles theories/*.md into web/src/corpus.generated.json — the file the app runs on.
 *
 * The scoring in this product is arithmetic, not judgement: sum the axes, normalise,
 * rank. Nothing about it needs a model at runtime, so the whole test ships to the
 * browser and runs there. No API key, no round trip, no way for a slow backend to
 * ruin the one interaction the product has.
 *
 * What ships is the machinery plus enough prose to explain a result — questions,
 * options, scores, outcome bands, and the opening of "What it means". The full essay
 * stays in the markdown, which is where someone reads it. Shipping all 352 essays
 * would multiply the bundle for text nobody sees during a sitting.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'theories');

const registry = JSON.parse(readFileSync(join(DIR, '_registry.json'), 'utf8'));

/** First paragraph of a named section, flattened to one line. */
function section(body, heading) {
  const at = body.indexOf(`\n${heading}\n`);
  if (at === -1) return null;
  const rest = body.slice(at + heading.length + 2);
  const end = rest.search(/\n## /);
  const text = (end === -1 ? rest : rest.slice(0, end)).trim();
  const first = text.split(/\n\s*\n/)[0] ?? '';
  return first.replace(/\s+/g, ' ').trim() || null;
}

const entries = [];
const skipped = [];

for (const meta of registry.entries) {
  const path = join(DIR, `${meta.id}.md`);
  if (!existsSync(path)) {
    skipped.push(meta.id);
    continue;
  }

  const raw = readFileSync(path, 'utf8');
  const end = raw.indexOf('\n---\n', 3);
  if (!raw.startsWith('---\n') || end === -1) {
    skipped.push(meta.id);
    continue;
  }

  let fm;
  try {
    fm = parse(raw.slice(4, end + 1));
  } catch {
    skipped.push(meta.id);
    continue;
  }
  const body = raw.slice(end + 5);

  entries.push({
    id: fm.id,
    title: fm.title,
    category: fm.category,
    tradition: fm.tradition,
    philosophers: fm.philosophers,
    era: fm.era,
    tags: fm.tags ?? [],
    gist: section(body, '## What it means'),
    questions: fm.questions.map((q) => ({
      id: q.id,
      prompt: String(q.prompt).replace(/\s+/g, ' ').trim(),
      options: q.options.map((o) => ({
        id: o.id,
        label: String(o.label).replace(/\s+/g, ' ').trim(),
        scores: o.scores,
      })),
    })),
    outcomes: fm.outcomes.map((o) => ({
      id: o.id,
      dominant: o.dominant,
      label: o.label,
      text: String(o.text).replace(/\s+/g, ' ').trim(),
      base_rate: o.base_rate ?? null,
    })),
  });
}

const questionCount = entries.reduce((n, e) => n + e.questions.length, 0);

const corpus = {
  generatedBy: 'scripts/build-corpus.mjs',
  written: entries.length,
  planned: registry.count,
  questions: questionCount,
  philosophers: [...new Set(entries.flatMap((e) => e.philosophers))].length,
  traditions: [...new Set(entries.map((e) => e.tradition))].length,
  entries,
};

const out = join(ROOT, 'web', 'src', 'corpus.generated.json');
writeFileSync(out, `${JSON.stringify(corpus)}\n`);

const kb = (readFileSync(out).length / 1024).toFixed(0);
console.log(
  `${entries.length}/${registry.count} entries · ${questionCount} questions · ` +
    `${corpus.philosophers} thinkers · ${corpus.traditions} traditions · ${kb} kB`,
);
if (skipped.length) console.log(`${skipped.length} not yet written`);
