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
import { THEMES, inTheme } from '../data/themes.mjs';
import { PHILOSOPHERS } from '../data/philosophers.mjs';
import { GLOSSARY, GLOSSARY_STATUS } from '../data/glossary.mjs';
import { PROBES } from '../data/glossary-probes.mjs';
import { AUDIT } from '../data/bias-audit.mjs';
import { FALLACIES, FALLACY_FAMILIES } from '../data/fallacies.mjs';
import { FALLACY_MODERN } from '../data/fallacy-modern.mjs';
import { DIAGRAMS } from '../data/diagrams.mjs';
import { OUTRAGE_ITEMS, OUTRAGE_SCALE, OUTRAGE_TAGS, OUTRAGE_PREDICTION, INTERLEAVE } from '../data/outrage-test.mjs';

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
        ...(o.evidence
          ? { evidence: { ...o.evidence, says: String(o.evidence.says).replace(/\s+/g, ' ').trim() } }
          : {}),
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

// Themes are computed, not stored, so an entry written tomorrow files itself.
const themes = THEMES.map((theme) => {
  const members = entries.filter((e) => inTheme(e, theme));
  return {
    id: theme.id,
    name: theme.name,
    blurb: theme.blurb,
    entries: members.map((e) => e.id),
    questions: members.reduce((n, e) => n + e.questions.length, 0),
  };
});

const orphans = entries.filter((e) => !themes.some((t) => t.entries.includes(e.id)));

const questionCount = entries.reduce((n, e) => n + e.questions.length, 0);

// Every glossary entry carries its own probe, joined here rather than stored inline so
// that the prose file and the test file can be edited independently. The join is
// enforced in both directions: an entry without a probe is a definition the reader can
// only nod at, and a probe without an entry is dead weight that will never render.
//
// The second check is the one that matters. A probe for an effect that failed
// replication must be an `audit` — it may ask what the reader believes and then show
// them the record, and it may not be built to appear to demonstrate the effect. Ego
// depletion did not survive; a quiz that walks the reader through feeling depleted
// would be a lie with an interaction on it. This is a build error, not a lint warning.
const missingProbe = GLOSSARY.filter((e) => !PROBES[e.id]).map((e) => e.id);
const orphanProbe = Object.keys(PROBES).filter((id) => !GLOSSARY.some((e) => e.id === id));
if (missingProbe.length) throw new Error(`glossary entries with no probe: ${missingProbe.join(', ')}`);
if (orphanProbe.length) throw new Error(`probes with no glossary entry: ${orphanProbe.join(', ')}`);

const glossary = GLOSSARY.map((entry) => {
  const probe = PROBES[entry.id];
  if (entry.status === 'failed' && probe.kind !== 'audit') {
    throw new Error(`${entry.id} failed replication, so its probe must be an audit, not a ${probe.kind}`);
  }
  return { ...entry, probe };
});

// Every fallacy carries a modern reading, joined the same way and enforced the same
// way as the glossary probes. A reference that stops at the Latin teaches recognition
// and not use, which is how a reader ends up naming moves instead of answering them.
const missingModern = FALLACIES.filter((f) => !FALLACY_MODERN[f.id]).map((f) => f.id);
const orphanModern = Object.keys(FALLACY_MODERN).filter((id) => !FALLACIES.some((f) => f.id === id));
if (missingModern.length) throw new Error(`fallacies with no modern reading: ${missingModern.join(', ')}`);
if (orphanModern.length) throw new Error(`modern readings with no fallacy: ${orphanModern.join(', ')}`);
const fallacies = FALLACIES.map((f) => ({ ...f, modern: FALLACY_MODERN[f.id] }));

// Diagrams are keyed by entry id across two namespaces — theory entries and glossary
// entries — because they share a renderer. Coverage is deliberately partial: a diagram
// belongs to an argument with a shape, and most entries do not have one. What is not
// allowed is a picture pointing at nothing, so an unresolvable key fails the build.
const diagramTargets = new Set([...entries.map((e) => e.id), ...GLOSSARY.map((g) => g.id)]);
const strayDiagrams = Object.keys(DIAGRAMS).filter((id) => !diagramTargets.has(id));
if (strayDiagrams.length) {
  throw new Error(`diagrams with no entry: ${strayDiagrams.join(', ')}`);
}
// A value may be one spec or a series of them, because some arguments only make their
// point in contrast — the trolley is not really about the trolley.
for (const [id, d] of Object.entries(DIAGRAMS)) {
  for (const panel of [d].flat()) {
    if (!panel.alt || !panel.caption) throw new Error(`diagram ${id} needs both alt and caption`);
  }
}

const corpus = {
  generatedBy: 'scripts/build-corpus.mjs',
  written: entries.length,
  planned: registry.count,
  questions: questionCount,
  traditions: [...new Set(entries.map((e) => e.tradition))].length,
  entries,
  themes,
  philosophers: PHILOSOPHERS,
  glossary,
  glossaryStatus: GLOSSARY_STATUS,
  audit: AUDIT,
  fallacies,
  diagrams: DIAGRAMS,
  fallacyFamilies: FALLACY_FAMILIES,
  outrage: OUTRAGE_ITEMS,
  outrageScale: OUTRAGE_SCALE,
  outrageTags: OUTRAGE_TAGS,
  outragePrediction: OUTRAGE_PREDICTION,
  outrageOrder: INTERLEAVE,
};

const out = join(ROOT, 'web', 'src', 'corpus.generated.json');
writeFileSync(out, `${JSON.stringify(corpus)}\n`);

const kb = (readFileSync(out).length / 1024).toFixed(0);
console.log(
  `${entries.length}/${registry.count} entries · ${questionCount} questions · ` +
    `${PHILOSOPHERS.length} on the bench · ${corpus.traditions} traditions · ${kb} kB`,
);
if (skipped.length) console.log(`${skipped.length} entries not yet written`);

// A theme with fewer than five questions cannot run a five-question test, so it is
// reported rather than silently offered and then failing in front of a visitor.
const TEST_LENGTH = 5;
const thin = themes.filter((t) => t.questions < TEST_LENGTH);
console.log(
  `${themes.length} themes · ${themes.length - thin.length} ready` +
    (thin.length ? ` · thin: ${thin.map((t) => `${t.id}(${t.questions}q)`).join(', ')}` : ''),
);
console.log(
  `glossary: ${GLOSSARY.length} · fallacies: ${FALLACIES.length} · `
  + `audit: ${AUDIT.length} items · outrage: ${OUTRAGE_ITEMS.length} pairs (${INTERLEAVE.length} questions)`,
);
const drawnTheory = Object.keys(DIAGRAMS).filter((id) => entries.some((e) => e.id === id)).length;
const drawnGlossary = Object.keys(DIAGRAMS).length - drawnTheory;
const panels = Object.values(DIAGRAMS).reduce((n, d) => n + [d].flat().length, 0);
console.log(
  `diagrams: ${Object.keys(DIAGRAMS).length} entries, ${panels} panels · ${drawnTheory} on `
  + `theory entries (of ${entries.length}) · ${drawnGlossary} on glossary (of ${GLOSSARY.length})`,
);
const kinds = glossary.reduce((acc, e) => ({ ...acc, [e.probe.kind]: (acc[e.probe.kind] ?? 0) + 1 }), {});
console.log(
  `probes: ${glossary.length} · `
  + Object.entries(kinds).map(([k, n]) => `${k} ${n}`).join(' · '),
);
if (orphans.length) {
  console.log(`${orphans.length} entries match no theme: ${orphans.slice(0, 8).map((e) => e.id).join(', ')}`);
}
