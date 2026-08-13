#!/usr/bin/env node
/**
 * Validates the theory corpus against theories/SCHEMA.md.
 *
 * This is the contract between sixteen writing agents and one product. Prose can vary;
 * structure cannot, or the app cannot execute the corpus as a single instrument. Every
 * failure printed here names the file, the field and what would fix it.
 *
 *   node scripts/validate-theories.mjs            # whole corpus
 *   node scripts/validate-theories.mjs --batch 7  # just one agent's slice
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'theories');

const FRAMEWORK = new Set([
  'consequentialist', 'deontological', 'virtue', 'contractarian', 'care',
  'egoist', 'relativist', 'divine', 'existentialist', 'nihilist',
]);
const DISPOSITION = new Set(['scope', 'agency', 'authority', 'certainty', 'affect']);
const CATEGORIES = new Set(['theory', 'principle', 'paradox', 'thought-experiment', 'term']);

const SECTIONS = [
  '## What it means',
  '## What it suggests',
  '## The problem',
  '## The questions',
  '## Reading your answer',
  '## Sources',
];

const RESERVED = new Set(['SCHEMA.md', 'README.md', '_registry.json']);

const registry = JSON.parse(readFileSync(join(DIR, '_registry.json'), 'utf8'));

const batchArg = process.argv.indexOf('--batch');
const onlyBatch = batchArg > -1 ? Number(process.argv[batchArg + 1]) : null;
const wanted = onlyBatch ? registry.entries.filter((e) => e.batch === onlyBatch) : registry.entries;

const problems = [];
const fail = (file, message) => problems.push(`${file}: ${message}`);

/** Splits `---\nyaml\n---\nbody`. Returns null when the fences are missing or unclosed. */
function split(raw) {
  if (!raw.startsWith('---\n')) return null;
  const end = raw.indexOf('\n---\n', 3);
  if (end === -1) return null;
  return { yaml: raw.slice(4, end + 1), body: raw.slice(end + 5) };
}

let checked = 0;

for (const entry of wanted) {
  const file = `${entry.id}.md`;
  const path = join(DIR, file);

  if (!existsSync(path)) {
    fail(file, 'missing — every registry id needs a file');
    continue;
  }
  checked += 1;

  const raw = readFileSync(path, 'utf8');
  const parts = split(raw);
  if (!parts) {
    fail(file, 'frontmatter must open with `---` on line 1 and close with `---` on its own line');
    continue;
  }

  let fm;
  try {
    fm = parse(parts.yaml);
  } catch (err) {
    fail(file, `frontmatter is not valid YAML — ${err.message.split('\n')[0]}`);
    continue;
  }
  if (!fm || typeof fm !== 'object') {
    fail(file, 'frontmatter parsed to nothing');
    continue;
  }

  // ── identity ────────────────────────────────────────────────────────────
  if (fm.id !== entry.id) fail(file, `id is "${fm.id}", registry says "${entry.id}"`);
  if (!fm.title) fail(file, 'title is required');
  if (!CATEGORIES.has(fm.category)) {
    fail(file, `category "${fm.category}" is not one of ${[...CATEGORIES].join(', ')}`);
  }
  if (!fm.tradition) fail(file, 'tradition is required');
  if (!Array.isArray(fm.philosophers) || !fm.philosophers.length) {
    fail(file, 'philosophers must be a non-empty list');
  }
  if (fm.era == null || fm.era === '') fail(file, 'era is required');
  if (!Array.isArray(fm.tags) || fm.tags.length < 2) fail(file, 'tags needs at least two');

  // ── sources: bibliographic, never URLs (SCHEMA.md §5) ───────────────────
  if (!Array.isArray(fm.sources) || !fm.sources.length) {
    fail(file, 'sources must list at least one real work');
  } else {
    fm.sources.forEach((s, i) => {
      if (!s || typeof s !== 'object') return fail(file, `sources[${i}] must be a mapping`);
      if (!s.title) fail(file, `sources[${i}] needs a title`);
      if ('url' in s) fail(file, `sources[${i}] has a url — links cannot be verified here, cite the work instead`);
      const text = JSON.stringify(s);
      if (/https?:\/\//.test(text)) fail(file, `sources[${i}] contains a URL — cite the work instead`);
    });
  }

  // ── questions ───────────────────────────────────────────────────────────
  // `peak` records the largest score any single option gives each framework axis.
  // An axis scored only in small amounts is seasoning on an answer that is mostly
  // about something else, and cannot realistically come top — so it does not oblige
  // the file to carry a whole result band. LOAD_BEARING is where that line sits.
  const LOAD_BEARING = 0.5;
  const peak = new Map();
  const reachable = new Set();
  if (!Array.isArray(fm.questions) || fm.questions.length < 3) {
    fail(file, `needs at least 3 questions, found ${fm.questions?.length ?? 0}`);
  } else {
    const qids = new Set();
    fm.questions.forEach((q, qi) => {
      const where = `questions[${qi}]`;
      if (!q?.id) fail(file, `${where} needs an id`);
      else if (qids.has(q.id)) fail(file, `${where} repeats question id "${q.id}"`);
      else qids.add(q.id);

      if (!q?.prompt || String(q.prompt).trim().length < 40) {
        fail(file, `${where} prompt is missing or too short to set up a real decision`);
      }
      if (!Array.isArray(q?.options) || q.options.length < 3) {
        return fail(file, `${where} needs at least 3 options, found ${q?.options?.length ?? 0}`);
      }

      const oids = new Set();
      q.options.forEach((o, oi) => {
        const ow = `${where}.options[${oi}]`;
        if (!o?.id) fail(file, `${ow} needs an id`);
        else if (oids.has(o.id)) fail(file, `${ow} repeats option id "${o.id}"`);
        else oids.add(o.id);

        if (!o?.label || String(o.label).trim().length < 15) {
          fail(file, `${ow} label is missing or too short to be a position anyone holds`);
        }
        if (!o?.scores || typeof o.scores !== 'object' || !Object.keys(o.scores).length) {
          return fail(file, `${ow} needs a scores mapping`);
        }

        const axes = Object.entries(o.scores);
        if (axes.length > 5) {
          fail(file, `${ow} scores ${axes.length} axes — 2 to 4 keeps the signal, more is mush`);
        }
        let frameworks = 0;
        for (const [axis, value] of axes) {
          if (typeof value !== 'number' || Number.isNaN(value)) {
            fail(file, `${ow} scores.${axis} must be a number`);
            continue;
          }
          if (FRAMEWORK.has(axis)) {
            frameworks += 1;
            reachable.add(axis);
            peak.set(axis, Math.max(peak.get(axis) ?? 0, value));
            if (value < 0 || value > 1) fail(file, `${ow} scores.${axis} = ${value}, framework axes are 0…1`);
          } else if (DISPOSITION.has(axis)) {
            if (value < -1 || value > 1) fail(file, `${ow} scores.${axis} = ${value}, disposition axes are −1…1`);
          } else {
            fail(file, `${ow} scores.${axis} is not a known axis — see SCHEMA.md §1`);
          }
        }
        if (!frameworks) fail(file, `${ow} scores no framework axis, so it cannot select an outcome`);

        // Evidence is optional — an option nobody cleanly holds should not have one —
        // but a present one is a citation, so it is held to the citation rules.
        if ('evidence' in o) {
          const e = o.evidence;
          if (!e || typeof e !== 'object') fail(file, `${ow} evidence must be a mapping`);
          else {
            if (!e.who) fail(file, `${ow} evidence needs "who"`);
            if (!e.work) fail(file, `${ow} evidence needs "work" — the book or paper`);
            if (!e.says || String(e.says).trim().length < 40) {
              fail(file, `${ow} evidence "says" is missing or too short to be a claim`);
            }
            if (/https?:\/\//.test(JSON.stringify(e))) {
              fail(file, `${ow} evidence contains a URL — cite the work instead`);
            }
            // A fabricated quotation is the one failure a reader cannot detect, so
            // `says` is required to be paraphrase. A short quoted phrase is fine; a
            // whole quoted sentence is almost certainly invented wording.
            const quoted = String(e.says).match(/[""][^""]{60,}[""]/);
            if (quoted) {
              fail(file, `${ow} evidence "says" contains a long quotation — paraphrase instead (SCHEMA §2.2)`);
            }
          }
        }
      });
    });
  }

  // ── outcomes ────────────────────────────────────────────────────────────
  if (!Array.isArray(fm.outcomes) || fm.outcomes.length < 2) {
    fail(file, `needs at least 2 outcomes, found ${fm.outcomes?.length ?? 0}`);
  } else {
    const seen = new Set();
    fm.outcomes.forEach((o, i) => {
      const ow = `outcomes[${i}]`;
      if (!o?.id) fail(file, `${ow} needs an id`);
      if (!o?.label) fail(file, `${ow} needs a label`);
      if (!o?.text || String(o.text).trim().length < 80) {
        fail(file, `${ow} text is missing or too short to tell the reader anything`);
      }
      if (!FRAMEWORK.has(o?.dominant)) {
        fail(file, `${ow} dominant "${o?.dominant}" is not a framework axis`);
      } else {
        if (seen.has(o.dominant)) fail(file, `${ow} repeats dominant "${o.dominant}"`);
        seen.add(o.dominant);
        if ((peak.get(o.dominant) ?? 0) < LOAD_BEARING) {
          fail(file, reachable.has(o.dominant)
            ? `${ow} dominant "${o.dominant}" peaks at ${peak.get(o.dominant)} — no option backs it strongly enough to reach this result`
            : `${ow} dominant "${o.dominant}" is unreachable — no option scores it`);
        }
      }
      if (!('base_rate' in o)) {
        fail(file, `${ow} must set base_rate (null unless a cited study supplies the figure)`);
      } else if (o.base_rate !== null) {
        if (typeof o.base_rate !== 'number' || o.base_rate < 0 || o.base_rate > 1) {
          fail(file, `${ow} base_rate must be null or a number 0…1`);
        }
      }
    });

    // Every framework an option backs strongly should have somewhere to land, or a
    // reader can answer their way to a result the file does not contain.
    for (const [axis, high] of peak) {
      if (high >= LOAD_BEARING && !seen.has(axis)) {
        fail(file, `an option scores "${axis}" at ${high} but no outcome has dominant: ${axis}`);
      }
    }
  }

  // ── prose ───────────────────────────────────────────────────────────────
  let cursor = -1;
  for (const heading of SECTIONS) {
    const at = parts.body.indexOf(`\n${heading}\n`, cursor);
    if (at === -1) {
      const anywhere = parts.body.includes(heading);
      fail(file, anywhere ? `section "${heading}" is out of order` : `section "${heading}" is missing`);
    } else {
      cursor = at + heading.length;
    }
  }

  const words = parts.body.split(/\s+/).filter(Boolean).length;
  if (words < 450) fail(file, `body is ${words} words — too thin to explain an idea and test it`);
}

// ── stray files ─────────────────────────────────────────────────────────────
if (!onlyBatch) {
  const known = new Set(registry.entries.map((e) => `${e.id}.md`));
  for (const name of readdirSync(DIR)) {
    if (RESERVED.has(name) || known.has(name)) continue;
    problems.push(`${name}: not in the registry — add it to scripts/build-registry.mjs or delete it`);
  }
  if (registry.count < 250) {
    problems.push(`_registry.json: ${registry.count} entries, the corpus threshold is 250`);
  }
}

// ── report ──────────────────────────────────────────────────────────────────
const scope = onlyBatch ? `batch ${onlyBatch}` : 'corpus';
if (problems.length) {
  console.error(`\n✗ ${problems.length} problem${problems.length === 1 ? '' : 's'} in ${scope}\n`);
  for (const p of problems) console.error(`  ${p}`);
  console.error('');
  process.exit(1);
}
console.log(`✓ ${scope}: ${checked}/${wanted.length} files valid`);
