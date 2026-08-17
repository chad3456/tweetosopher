/**
 * Tests for the autofill pipeline.
 *
 * The pipeline's whole justification is that it can run unattended, which means the
 * gate is the load-bearing part and it is what gets tested hardest. There is also an
 * end-to-end run against a stub client, because a pipeline whose authoring path has
 * never executed is not a pipeline — and no API key is available where this is written.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { discover, FAMILIES, ADAPTERS } from '../scripts/autofill/sources.mjs';
import { gateFallacy, _internals } from '../scripts/autofill/gate.mjs';
import { authorFallacy, FALLACY_SCHEMA } from '../scripts/autofill/author.mjs';
import { writeGenerated, readGenerated } from '../scripts/autofill/write.mjs';
import { FALLACIES } from '../data/fallacies.mjs';

/** An entry that passes every check, used as the base for negative cases. */
const good = () => ({
  id: 'appeal-to-tradition',
  name: 'Appeal to Tradition',
  family: 'relevance',
  definition: 'Treating the age of a practice as a reason to believe it is correct.',
  example:
    'A committee rejects a rota change on the grounds that the current one has been in '
    + 'place for thirty years, without anyone arguing that it works better than the '
    + 'alternative on the table.',
  notFallacy:
    'Longevity is legitimate evidence when survival is informative: a practice that has '
    + 'persisted through changing conditions has been tested by them, which is the '
    + 'reasonable core of the Lindy effect. It becomes a fallacy when the conditions that '
    + 'made the practice sensible have gone and only the habit remains.',
  modern: {
    now:
      'The move now arrives as a defence of institutional inertia, and the scale of '
      + 'search means a supporting precedent can be produced for almost any practice in '
      + 'seconds. The audience is usually a third party rather than the person arguing.',
    test:
      'Ask what conditions made the practice sensible, and whether those conditions '
      + 'still hold.',
  },
  generated: { by: 'claude-opus-5', at: '2026-08-17', source: 'seed' },
});

test('discovery skips what the corpus already has and is idempotent', async () => {
  const known = new Set(FALLACIES.map((f) => f.id));
  const first = await discover({ adapters: ['seed'], known });
  assert.ok(first.candidates.length > 20, `only ${first.candidates.length} candidates`);
  for (const c of first.candidates) {
    assert.ok(!known.has(c.id), `${c.id} is already in the corpus`);
    assert.ok(FAMILIES.includes(c.family), `${c.id} has family ${c.family}`);
    assert.ok(/^[a-z0-9-]+$/.test(c.id), `${c.id} is not a clean slug`);
  }
  // A second pass with everything now known must return nothing — this is what makes a
  // scheduled run safe to fire repeatedly.
  const after = new Set([...known, ...first.candidates.map((c) => c.id)]);
  const second = await discover({ adapters: ['seed'], known: after });
  assert.equal(second.candidates.length, 0, 'a repeat run should discover nothing new');
});

test('a discovery adapter that cannot reach its source degrades instead of failing', async () => {
  const boom = () => { throw Object.assign(new Error('blocked'), { name: 'TypeError' }); };
  const out = await ADAPTERS.wikipedia({ fetchImpl: boom, timeoutMs: 50 });
  assert.deepEqual(out.items, []);
  assert.match(out.note, /unreachable/);
});

test('the wikipedia adapter reads the taxonomy and not the prose', async () => {
  // The risk this guards is the adapter quietly starting to harvest descriptions. The
  // fixture puts prose after an em dash on every line; none of it may survive.
  const wikitext = [
    '== Formal fallacies ==',
    '* [[Affirming a disjunct]] – the error of concluding that one disjunct is false',
    '* [[Existential fallacy]] — an argument with a universal premise and a particular conclusion',
    '== Faulty generalizations ==',
    '* [[Ecological fallacy]] – inferences about individuals from group data',
    '* not a heading and not an entry',
  ].join('\n');
  const fetchImpl = async () => ({ ok: true, json: async () => ({ parse: { wikitext } }) });
  const { items } = await ADAPTERS.wikipedia({ fetchImpl });

  assert.equal(items.length, 3);
  assert.deepEqual(items.map((i) => i.id), ['affirming-a-disjunct', 'existential-fallacy', 'ecological-fallacy']);
  assert.deepEqual(items.map((i) => i.family), ['formal', 'formal', 'statistical']);
  const blob = JSON.stringify(items);
  for (const fragment of ['the error of concluding', 'universal premise', 'inferences about individuals']) {
    assert.ok(!blob.includes(fragment), `adapter captured source prose: "${fragment}"`);
  }
});

test('the gate accepts a well-formed entry', () => {
  const verdict = gateFallacy(good(), { existing: FALLACIES, families: FAMILIES });
  assert.ok(verdict.ok, `rejected a good entry: ${verdict.reasons.join('; ')}`);
});

test('the gate rejects an entry that reproduces source text', () => {
  // The promise made in sources.mjs is that discovery reads a taxonomy and the prose is
  // written here. This is the check that keeps it, so it is tested on a single sentence
  // lifted verbatim rather than on a whole copied entry.
  const entry = good();
  const lifted = 'the age of a practice is offered as the reason to believe that it is correct';
  entry.definition = `Something else entirely, except that ${lifted}.`;
  const verdict = gateFallacy(entry, { sourceTexts: [`Some source page saying ${lifted} and more.`], families: FAMILIES });
  assert.ok(!verdict.ok);
  assert.ok(verdict.reasons.some((r) => r.startsWith('originality')), verdict.reasons.join('; '));
});

test('the gate rejects a paraphrase of an entry already in the corpus', () => {
  const target = FALLACIES.find((f) => f.id === 'appeal-to-popularity');
  const entry = { ...good(), id: 'bandwagon', name: 'Bandwagon', definition: target.definition };
  const verdict = gateFallacy(entry, { existing: FALLACIES, families: FAMILIES });
  assert.ok(!verdict.ok);
  assert.ok(verdict.reasons.some((r) => r.startsWith('distinctness')), verdict.reasons.join('; '));
});

test('the gate rejects house-style violations', () => {
  const cases = [
    ['a URL', (e) => { e.example += ' See https://example.com/page for more.'; }],
    ['a markdown list', (e) => { e.notFallacy += '\n- first point\n- second point'; }],
    ['second-person instruction', (e) => { e.modern.test = 'You should make sure to ask what the conditions were.'; }],
    ['a formulaic opening', (e) => { e.definition = 'In today\'s world, the age of a practice is treated as a reason.'; }],
  ];
  for (const [why, mutate] of cases) {
    const entry = good();
    mutate(entry);
    const verdict = gateFallacy(entry, { families: FAMILIES });
    assert.ok(!verdict.ok, `accepted an entry with ${why}`);
    assert.ok(verdict.reasons.some((r) => r.startsWith('style')), `${why}: ${verdict.reasons.join('; ')}`);
  }
});

test('the gate rejects a hollow notFallacy or a hollow modern reading', () => {
  // These two fields are where an unattended writer most easily produces text that
  // reads fine and concedes nothing, so each has its own check.
  const noConcession = good();
  noConcession.notFallacy =
    'People make this move constantly and it remains a mistake every single time they '
    + 'do it, whatever they happen to think about the matter under discussion here.';
  let verdict = gateFallacy(noConcession, { families: FAMILIES });
  assert.ok(!verdict.ok);
  assert.ok(verdict.reasons.some((r) => /notFallacy never names a legitimate case/.test(r)), verdict.reasons.join('; '));

  const noMechanism = good();
  noMechanism.modern.now =
    'This remains extremely common today and continues to appear in a great many public '
    + 'disagreements, which makes it worth understanding properly before you meet it.';
  verdict = gateFallacy(noMechanism, { families: FAMILIES });
  assert.ok(!verdict.ok);
  assert.ok(verdict.reasons.some((r) => /names no mechanism/.test(r)), verdict.reasons.join('; '));
});

test('the gate rejects a family outside the taxonomy', () => {
  const entry = { ...good(), family: 'rhetorical' };
  const verdict = gateFallacy(entry, { families: FAMILIES });
  assert.ok(!verdict.ok);
  assert.ok(verdict.reasons.some((r) => /family "rhetorical" not allowed/.test(r)));
});

test('the authoring step refuses to read content from a refusal', async () => {
  // A safety decline is a successful HTTP 200 with an empty content array. Code that
  // indexes content[0] breaks here, so the check has to come first.
  const client = {
    beta: { messages: { stream: () => ({
      finalMessage: async () => ({
        stop_reason: 'refusal', stop_details: { category: 'cyber' }, content: [], usage: {},
      }),
    }) } },
  };
  await assert.rejects(
    () => authorFallacy({ id: 'x', name: 'X', family: 'relevance' }, { client }),
    (err) => err.refusal === true && /cyber/.test(err.message),
  );
});

test('the pipeline runs end to end against a stub client', async () => {
  // The authoring path is exercised here rather than left untested: this asserts the
  // request shape the API actually requires, and that a written file round-trips.
  let seen = null;
  const authored = good();
  const client = {
    beta: { messages: { stream: (params) => { seen = params; return {
      finalMessage: async () => ({
        stop_reason: 'end_turn',
        content: [{ type: 'text', text: JSON.stringify({
          definition: authored.definition,
          example: authored.example,
          notFallacy: authored.notFallacy,
          modern: authored.modern,
        }) }],
        usage: { input_tokens: 900, output_tokens: 400 },
      }),
    }; } } },
  };

  const candidate = { id: 'appeal-to-tradition', name: 'Appeal to Tradition', family: 'relevance', aka: ['argumentum ad antiquitatem'], source: 'seed' };
  const { entry } = await authorFallacy(candidate, { client });

  // Request shape. Each of these is a documented requirement of the current API and a
  // silent 400 or a silent behaviour change if it drifts.
  assert.equal(seen.model, 'claude-opus-5');
  assert.deepEqual(seen.output_config.format, { type: 'json_schema', schema: FALLACY_SCHEMA });
  assert.ok(seen.betas.includes('server-side-fallback-2026-07-01'), 'must opt into a refusal fallback');
  assert.equal(seen.fallbacks, 'default');
  assert.ok(!('temperature' in seen), 'temperature is rejected on this model');
  assert.ok(!('top_p' in seen), 'top_p is rejected on this model');
  assert.ok(!('thinking' in seen), 'thinking is on by default; configuring it is a 400 risk');

  // Provenance must survive onto the entry, or a wrong generated entry is indistinguishable
  // from a hand-written one.
  assert.equal(entry.generated.by, 'claude-opus-5');
  assert.deepEqual(entry.aka, ['argumentum ad antiquitatem']);

  const verdict = gateFallacy(entry, { existing: FALLACIES, families: FAMILIES });
  assert.ok(verdict.ok, `gate rejected the stubbed entry: ${verdict.reasons.join('; ')}`);

  const dir = mkdtempSync(join(tmpdir(), 'autofill-'));
  try {
    const path = join(dir, 'fallacies.generated.mjs');
    assert.deepEqual(await readGenerated(path), [], 'a missing file reads as empty');
    assert.equal(writeGenerated(path, [entry]), 1);

    // The emitted file must be valid module source that round-trips the entry, and it
    // must still clear the gate after the wrap-and-quote pass.
    const back = await readGenerated(path);
    assert.equal(back.length, 1);
    assert.equal(back[0].definition, entry.definition);
    assert.equal(back[0].notFallacy, entry.notFallacy);
    assert.ok(gateFallacy(back[0], { families: FAMILIES }).ok, 'round-trip broke the entry');
    assert.match(readFileSync(path, 'utf8'), /Do not hand-edit/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test('the shingle overlap check is not fooled by punctuation or case', () => {
  const { similarity, shingles } = _internals;
  const a = 'The age of a practice is not, by itself, evidence that it works.';
  const b = 'the AGE of a practice is not by itself evidence that it works';
  assert.ok(similarity(a, b) > 0.9);
  const overlap = [...shingles(a)].some((s) => shingles(b).has(s));
  assert.ok(overlap, 'identical text should share shingles across punctuation differences');
});

// ── the theory arm ─────────────────────────────────────────────────────────

test('the theory arm finds exactly the registry entries with no file', async () => {
  const { unwritten } = await import('../scripts/autofill/theories.mjs');
  const { existsSync } = await import('node:fs');
  const rows = unwritten();
  assert.ok(rows.length > 0, 'nothing left to write — update this test if the corpus completed');
  for (const row of rows.slice(0, 20)) {
    assert.ok(row.id && row.title && row.category, `${row.id} is missing registry metadata`);
    assert.ok(Number.isInteger(row.batch), `${row.id} has no batch, which the validator scopes on`);
    assert.ok(!existsSync(new URL(`../theories/${row.id}.md`, import.meta.url)), `${row.id} already exists`);
  }
  assert.equal(unwritten({ limit: 3 }).length, 3, '--limit must bound the batch');
});

test('the theory gate is the repository validator, and it catches the load-bearing axis rule', async () => {
  const { writeAndValidate, unwritten } = await import('../scripts/autofill/theories.mjs');
  const { existsSync } = await import('node:fs');
  const target = unwritten({ limit: 1 })[0];

  // Structurally complete, violating exactly one rule: an option scores `virtue` at 0.9
  // and no outcome band is dominant on virtue. This is the constraint a generated entry
  // is most likely to break, and the reason the arm can run unattended is that the
  // repository's own validator rejects it rather than a bespoke check written to be kind.
  const body = {
    tags: ['test-tag-one', 'test-tag-two'],
    sources: [{ title: 'A Work That Does Not Exist', author: 'Nobody', year: 'undated' }],
    whatItMeans: 'Fixture entry written by the test suite and deleted before it returns.',
    whatItSuggests: 'Nothing at all.',
    theProblem: 'It scores an axis no outcome band accounts for.',
    readingYourAnswer: 'Not for reading.',
    sourcesProse: 'No real source; this is a fixture.',
    questions: [1, 2, 3].map((n) => ({
      id: `q${n}`,
      prompt: `A deliberately long fixture prompt number ${n} that sets up a real decision for the reader.`,
      options: [
        { id: 'a', label: 'The virtue answer', scores: { virtue: 0.9 } },
        { id: 'b', label: 'The egoist answer', scores: { egoist: 0.8 } },
        { id: 'c', label: 'The deontological answer', scores: { deontological: 0.7 } },
      ],
    })),
    outcomes: [
      { id: 'o1', dominant: 'egoist', label: 'Self-interest', text: 'Fixture band, not for reading.' },
      { id: 'o2', dominant: 'deontological', label: 'Duty', text: 'Fixture band, not for reading.' },
    ],
  };

  const verdict = writeAndValidate(target, body, { keep: false });
  assert.ok(!verdict.ok, 'the validator accepted an entry that breaks the axis rule');
  assert.ok(
    verdict.reasons.some((r) => /virtue/.test(r)),
    `rejected for the wrong reason: ${verdict.reasons.join('; ')}`,
  );
  // A rejected candidate must leave nothing behind, or a failed unattended run pollutes
  // the corpus with files the build then has to cope with.
  assert.ok(
    !existsSync(new URL(`../theories/${target.id}.md`, import.meta.url)),
    'a rejected entry left its file on disk',
  );
});

test('the theory renderer emits front matter the corpus parser can read', async () => {
  const { renderTheory } = await import('../scripts/autofill/theories.mjs');
  const { parse } = await import('yaml');
  const meta = {
    id: 'fixture-entry', title: 'A Title With: A Colon', category: 'theory',
    tradition: 'classical-greek', philosophers: ['Someone', "O'Brien"], era: 'c. 400 BCE', batch: 1,
  };
  const md = renderTheory(meta, {
    tags: ['one', 'two'],
    sources: [{ title: 'Work: With Punctuation', author: "O'Brien", year: '1970' }],
    whatItMeans: 'Body.', whatItSuggests: 'Body.', theProblem: 'Body.',
    readingYourAnswer: 'Body.', sourcesProse: 'Body.',
    questions: [{ id: 'q1', prompt: 'P?', options: [{ id: 'a', label: 'L', scores: { virtue: 0.6 } }] }],
    outcomes: [{ id: 'o1', dominant: 'virtue', label: 'L', text: 'T' }],
  });

  // Colons and apostrophes in titles are the classic way hand-rolled YAML emission
  // breaks, so they are in the fixture deliberately.
  const end = md.indexOf('\n---\n', 3);
  const fm = parse(md.slice(4, end + 1));
  assert.equal(fm.title, 'A Title With: A Colon');
  assert.deepEqual(fm.philosophers, ['Someone', "O'Brien"]);
  assert.equal(fm.sources[0].title, 'Work: With Punctuation');
  assert.equal(fm.questions[0].options[0].scores.virtue, 0.6);
  for (const heading of ['## What it means', '## What it suggests', '## The problem',
    '## The questions', '## Reading your answer', '## Sources']) {
    assert.ok(md.includes(heading), `missing required section ${heading}`);
  }
});
