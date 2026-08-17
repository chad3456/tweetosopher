#!/usr/bin/env node
/**
 * `npm run autofill` — discover, author, gate, write.
 *
 * Designed to be run unattended on a schedule (see .github/workflows/autofill.yml) as
 * well as by hand. Four properties make that safe:
 *
 *   idempotent   Candidates already in the corpus are skipped, so a second run with the
 *                same sources adds nothing. There is no "have I run this?" state to keep.
 *   bounded      `--limit` caps entries per run and the default is small. An unattended
 *                job that can add sixty entries in one go can also add sixty bad ones.
 *   fail-open    A candidate that errors or is rejected is logged and skipped; the run
 *                continues and exits 0. A single bad candidate must not stop a schedule.
 *                A *systemic* failure is different — see the abort rule below.
 *   auditable    Every run appends one JSON line to autofill.log.jsonl with counts and
 *                every rejection reason, and the generated file records provenance.
 *
 * The abort rule: if the first four candidates in a run are all rejected, the run stops.
 * That pattern means the prompt, the schema, or the gate has drifted, and grinding
 * through the remaining candidates would burn tokens producing nothing.
 *
 * Usage:
 *   npm run autofill -- --dry-run              # discovery + gate only, no API calls
 *   npm run autofill -- --limit 5
 *   npm run autofill -- --sources seed,wikipedia
 *   npm run autofill -- --limit 5 --write      # actually write (default is preview)
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { discover, FAMILIES } from './sources.mjs';
import { authorFallacy, makeClient } from './author.mjs';
import { gateFallacy } from './gate.mjs';
import { readGenerated, writeGenerated, appendLog } from './write.mjs';
import { FALLACIES } from '../../data/fallacies.mjs';
import { unwritten, authorTheory, writeAndValidate } from './theories.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const GENERATED = join(ROOT, 'data', 'fallacies.generated.mjs');
const LOG = join(ROOT, 'autofill.log.jsonl');

/**
 * Ids a run must never re-add. This is the mechanism for permanently rejecting an entry
 * that cleared the gate and was wrong anyway — the one judgement call the pipeline
 * cannot make for itself, recorded once so it holds.
 */
const REJECTED = new Set([]);

const ABORT_AFTER_CONSECUTIVE_REJECTS = 4;

function parseArgs(argv) {
  const args = { kind: 'fallacies', limit: 3, sources: ['seed'], dryRun: false, write: false, model: undefined };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') args.dryRun = true;
    else if (a === '--write') args.write = true;
    else if (a === '--limit') args.limit = Number(argv[++i]);
    else if (a === '--sources') args.sources = String(argv[++i]).split(',').map((s) => s.trim());
    else if (a === '--model') args.model = argv[++i];
    else if (a === '--kind') args.kind = argv[++i];
    else if (a === '--help') { console.log(readFileSync(new URL(import.meta.url)).toString().slice(0, 1800)); process.exit(0); }
    else throw new Error(`unknown argument: ${a}`);
  }
  if (!Number.isInteger(args.limit) || args.limit < 1) throw new Error('--limit must be a positive integer');
  if (!['fallacies', 'theories'].includes(args.kind)) throw new Error(`--kind must be fallacies or theories`);
  return args;
}

/**
 * The theory arm. Discovery is a directory listing against the registry, and the gate is
 * the repository's own `validate-theories.mjs` — so a generated entry clears exactly the
 * bar a hand-written one clears, checked by the same code.
 */
async function runTheories(args) {
  const started = Date.now();
  const candidates = unwritten();
  console.log(`${candidates.length} registry entries have no file yet`);
  if (!candidates.length) {
    console.log('the corpus is complete');
    return;
  }
  const batch = candidates.slice(0, args.limit);
  console.log(`\nthis run: ${batch.map((c) => c.id).join(', ')}`);

  if (args.dryRun) {
    // Exercises the renderer and the real validator without an API call.
    //
    // The probe is structurally complete on purpose — three questions, three outcomes,
    // valid front matter — and violates exactly one rule: an option scores `virtue` at
    // 0.9 and no outcome band is dominant on virtue. That is the load-bearing axis rule,
    // the subtle constraint a generated entry is most likely to break, and the reason
    // this arm can be trusted to run unattended is that the repository's own validator
    // catches it. A probe that failed on missing fields would prove much less.
    const probe = batch[0];
    const opt = (id, label, scores) => ({ id, label, scores });
    const bad = {
      tags: ['probe-tag-one', 'probe-tag-two'],
      sources: [{ title: 'A Work That Does Not Exist', author: 'Nobody', year: 'undated' }],
      whatItMeans: 'Probe entry. Written and deleted by the autofill dry run.',
      whatItSuggests: 'Nothing. It exists to be rejected.',
      theProblem: 'It scores an axis that no outcome band accounts for.',
      readingYourAnswer: 'You will not read this; the file is deleted before the run ends.',
      sourcesProse: 'No real source. This entry is a self-check.',
      questions: [1, 2, 3].map((n) => ({
        id: `q${n}`,
        prompt: `Probe question ${n}.`,
        options: [
          opt('a', 'The virtue answer', { virtue: 0.9 }),
          opt('b', 'The egoist answer', { egoist: 0.8 }),
          opt('c', 'The deontological answer', { deontological: 0.7 }),
        ],
      })),
      // virtue is deliberately absent: an option scores it 0.9 with nowhere to land.
      outcomes: [
        { id: 'o1', dominant: 'egoist', label: 'Self-interest', text: 'Probe band. Not for reading.' },
        { id: 'o2', dominant: 'deontological', label: 'Duty', text: 'Probe band. Not for reading.' },
      ],
    };
    const verdict = writeAndValidate(probe, bad, { keep: false });
    // The probe's prompts are short, so the validator objects to several things. The one
    // that matters is the axis rule; it is surfaced rather than whichever came first.
    const axisReason = verdict.reasons.find((r) => /virtue/.test(r));
    console.log('\n--dry-run: no API calls. Validator self-check on a load-bearing-axis violation:');
    console.log(`  rejects it: ${verdict.ok ? 'NO — the gate is broken' : 'yes'}`);
    console.log(`  caught the axis rule: ${axisReason ? 'yes' : 'NO — it failed on something else'}`);
    if (axisReason) console.log(`    ${axisReason}`);
    console.log(`  ${verdict.reasons.length} objections in total`);
    if (verdict.ok || !axisReason) process.exitCode = 1;
    return;
  }

  let client;
  try {
    client = await makeClient();
  } catch (err) {
    console.error(`\ncannot reach the API: ${err.message}\nUse --dry-run to test without a key.`);
    process.exitCode = 1;
    return;
  }

  let added = 0;
  const rejections = [];
  let consecutive = 0;
  for (const meta of batch) {
    try {
      const { body, usage } = await authorTheory(meta, { client, model: args.model });
      const verdict = writeAndValidate(meta, body, { keep: args.write });
      if (verdict.ok) {
        added += 1;
        consecutive = 0;
        console.log(`  ✓ ${meta.id} (${usage.input_tokens}in/${usage.output_tokens}out)${args.write ? '' : ' [not kept]'}`);
      } else {
        rejections.push({ id: meta.id, reasons: verdict.reasons });
        consecutive += 1;
        console.log(`  ✗ ${meta.id} — ${verdict.reasons.slice(0, 2).join('; ')}`);
      }
    } catch (err) {
      rejections.push({ id: meta.id, reasons: [`error: ${err.message}`] });
      consecutive += 1;
      console.log(`  ! ${meta.id} — ${err.message}`);
    }
    if (consecutive >= ABORT_AFTER_CONSECUTIVE_REJECTS) {
      console.log(`\naborting: ${consecutive} rejections in a row — check the prompt against theories/SCHEMA.md.`);
      break;
    }
  }

  console.log(`\n${added} written, ${rejections.length} rejected`);
  if (added && args.write) console.log('run `npm run corpus && npm test` before committing');
  appendLog(LOG, {
    at: new Date().toISOString(), kind: 'theories', model: args.model ?? 'default',
    considered: batch.length, added: args.write ? added : 0, previewed: args.write ? 0 : added,
    rejected: rejections.length, rejections, ms: Date.now() - started,
  });
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.kind === 'theories') return runTheories(args);
  const started = Date.now();

  const generated = await readGenerated(GENERATED);
  // Hand-written wins: an id present in both is not a candidate and not re-authored.
  const existing = [...FALLACIES, ...generated];
  const known = new Set([...existing.map((e) => e.id), ...REJECTED]);

  const { candidates, notes } = await discover({ adapters: args.sources, known });
  for (const n of notes) console.log(`· ${n}`);
  console.log(
    `${existing.length} entries in the corpus (${FALLACIES.length} hand-written, `
    + `${generated.length} generated) · ${candidates.length} new candidates`,
  );

  if (!candidates.length) {
    console.log('nothing to add — sources are exhausted against the current corpus');
    appendLog(LOG, { at: new Date().toISOString(), added: 0, rejected: 0, note: 'no candidates' });
    return;
  }

  const batch = candidates.slice(0, args.limit);
  console.log(`\nthis run: ${batch.map((c) => c.id).join(', ')}`);

  if (args.dryRun) {
    // The dry run exercises everything except the model: discovery, the candidate
    // shape, and the gate's structural checks against a deliberately empty entry. It
    // exists so the pipeline can be tested where no API key is available.
    console.log('\n--dry-run: no API calls. Gate self-check against an empty entry:');
    const probe = gateFallacy({ id: 'probe', name: 'Probe', family: 'relevance' }, { families: FAMILIES });
    console.log(`  rejects an empty entry: ${probe.ok ? 'NO — the gate is broken' : 'yes'}`);
    console.log(`  reasons: ${probe.reasons.slice(0, 3).join(' | ')}`);
    return;
  }

  let client;
  try {
    client = await makeClient();
  } catch (err) {
    console.error(
      `\ncannot reach the API: ${err.message}\n`
      + 'Set ANTHROPIC_API_KEY, or run `ant auth login`. Use --dry-run to test without one.',
    );
    process.exitCode = 1;
    return;
  }

  const accepted = [];
  const rejections = [];
  let consecutive = 0;

  for (const candidate of batch) {
    try {
      const { entry, usage } = await authorFallacy(candidate, { client, model: args.model });
      const verdict = gateFallacy(entry, { existing: [...existing, ...accepted], families: FAMILIES });
      if (verdict.ok) {
        accepted.push(entry);
        consecutive = 0;
        console.log(`  ✓ ${entry.id} (${usage.input_tokens}in/${usage.output_tokens}out)`);
      } else {
        rejections.push({ id: candidate.id, reasons: verdict.reasons });
        consecutive += 1;
        console.log(`  ✗ ${candidate.id} — ${verdict.reasons.join('; ')}`);
      }
    } catch (err) {
      rejections.push({ id: candidate.id, reasons: [`error: ${err.message}`] });
      consecutive += 1;
      console.log(`  ! ${candidate.id} — ${err.message}`);
    }

    if (consecutive >= ABORT_AFTER_CONSECUTIVE_REJECTS) {
      console.log(
        `\naborting: ${consecutive} rejections in a row. That is a drift signal rather `
        + 'than bad luck — check the prompt, the schema and the gate before rerunning.',
      );
      break;
    }
  }

  console.log(`\n${accepted.length} accepted, ${rejections.length} rejected`);

  if (accepted.length && args.write) {
    const total = writeGenerated(GENERATED, [...generated, ...accepted]);
    console.log(`wrote ${total} generated entries to data/fallacies.generated.mjs`);
    console.log('run `npm run corpus && npm test` before committing');
  } else if (accepted.length) {
    console.log('preview only — pass --write to update data/fallacies.generated.mjs');
  }

  appendLog(LOG, {
    at: new Date().toISOString(),
    sources: args.sources,
    model: args.model ?? 'default',
    considered: batch.length,
    added: args.write ? accepted.length : 0,
    previewed: args.write ? 0 : accepted.length,
    rejected: rejections.length,
    rejections,
    ms: Date.now() - started,
  });
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
