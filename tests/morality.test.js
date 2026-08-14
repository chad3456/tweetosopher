import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import { score, verdicts, nameFor, FRAMEWORK_KEYS, DISPOSITION_KEYS } from '../web/src/test/scoring.js';
import { buildSitting, capacity, seedFrom, TRACKS } from '../web/src/test/select.js';

const raw = JSON.parse(readFileSync(new URL('../web/src/corpus.generated.json', import.meta.url), 'utf8'));
const corpus = { ...raw, byId: new Map(raw.entries.map((e) => [e.id, e])) };

const answerAll = (entry, pick) =>
  entry.questions.map((q) => ({
    entryId: entry.id,
    questionId: q.id,
    optionId: pick(q).id,
  }));

/** The option that most expresses `axis`, for building a deliberately lopsided sitting. */
const strongest = (axis) => (q) =>
  [...q.options].sort((a, b) => (b.scores[axis] ?? 0) - (a.scores[axis] ?? 0))[0];

test('the compiled corpus is well formed', () => {
  assert.ok(corpus.entries.length > 0, 'corpus has entries');
  // The floor, not the exact figure. Pinning the roster size means every entry added
  // breaks a test that has nothing to do with the addition — which is how a suite
  // trains people to ignore it. 250 is the threshold the corpus is required to clear.
  assert.ok(corpus.planned >= 250, `registry plans ${corpus.planned} entries, floor is 250`);
  assert.ok(corpus.written <= corpus.planned, 'cannot have written more than planned');
  for (const entry of corpus.entries) {
    assert.ok(entry.questions.length >= 3, `${entry.id} has 3+ questions`);
    assert.ok(entry.outcomes.length >= 2, `${entry.id} has 2+ outcomes`);
    assert.ok(entry.gist, `${entry.id} carries a gist for the result page`);
    for (const q of entry.questions) {
      assert.ok(q.options.length >= 3, `${entry.id}/${q.id} has 3+ options`);
      for (const o of q.options) {
        for (const axis of Object.keys(o.scores)) {
          assert.ok(
            FRAMEWORK_KEYS.includes(axis) || DISPOSITION_KEYS.includes(axis),
            `${entry.id}/${q.id}/${o.id} scores unknown axis ${axis}`,
          );
        }
      }
    }
  }
});

test('framework shares sum to one and rank by strength', () => {
  const entry = corpus.entries[0];
  const result = score(corpus, answerAll(entry, (q) => q.options[0]));
  const total = result.frameworks.reduce((n, f) => n + f.share, 0);
  assert.ok(Math.abs(total - 1) < 1e-9, `shares sum to ${total}`);
  for (let i = 1; i < result.frameworks.length; i++) {
    assert.ok(result.frameworks[i - 1].share >= result.frameworks[i].share, 'sorted by share');
  }
});

test('answering consistently in one framework makes it lead', () => {
  // Take every entry that offers a strongly consequentialist option and always pick it.
  const answers = [];
  for (const entry of corpus.entries) {
    for (const q of entry.questions) {
      const best = strongest('consequentialist')(q);
      if ((best.scores.consequentialist ?? 0) >= 0.7) {
        answers.push({ entryId: entry.id, questionId: q.id, optionId: best.id });
      }
    }
  }
  assert.ok(answers.length >= 10, `found ${answers.length} strongly consequentialist options`);

  const result = score(corpus, answers);
  assert.equal(result.lead.key, 'consequentialist');
  assert.ok(result.lead.share > 0.3, `lead share ${result.lead.share}`);
  assert.ok(result.margin > 0, 'lead is clear of the runner-up');
});

test('no answers produces no verdict rather than a fabricated one', () => {
  const result = score(corpus, []);
  assert.equal(result.lead, null);
  assert.equal(result.answered, 0);
  assert.equal(nameFor(result), 'Unscored');
  assert.equal(result.frameworks.every((f) => f.share === 0), true);
});

test('answers referring to entries no longer in the corpus are ignored, not counted', () => {
  const entry = corpus.entries[0];
  const good = answerAll(entry, (q) => q.options[0]);
  const result = score(corpus, [
    ...good,
    { entryId: 'no-such-entry', questionId: 'q1', optionId: 'a' },
    { entryId: entry.id, questionId: 'no-such-question', optionId: 'a' },
    { entryId: entry.id, questionId: entry.questions[0].id, optionId: 'no-such-option' },
  ]);
  assert.equal(result.answered, good.length, 'only resolvable answers are scored');
});

test('dispositions are averaged, so a longer sitting does not inflate them', () => {
  const entry = corpus.entries.find((e) => e.questions.some((q) => q.options.some((o) => 'certainty' in o.scores)));
  assert.ok(entry, 'some entry scores certainty');

  const one = entry.questions.filter((q) => q.options.some((o) => 'certainty' in o.scores)).slice(0, 1);
  const answers = one.map((q) => ({
    entryId: entry.id,
    questionId: q.id,
    optionId: strongest('certainty')(q).id,
  }));

  const single = score(corpus, answers);
  const doubled = score(corpus, [...answers, ...answers]);
  const a = single.dispositions.find((d) => d.key === 'certainty').value;
  const b = doubled.dispositions.find((d) => d.key === 'certainty').value;
  assert.ok(Math.abs(a - b) < 1e-9, `average held: ${a} vs ${b}`);
  assert.ok(a >= -1 && a <= 1, 'stays in range');
});

test('every verdict names a band that exists in its own entry', () => {
  const answers = corpus.entries.flatMap((e) => answerAll(e, (q) => q.options[0]));
  const out = verdicts(corpus, answers);
  assert.ok(out.length > 0);
  for (const v of out) {
    assert.ok(
      v.entry.outcomes.some((o) => o.id === v.outcome.id),
      `${v.entry.id} verdict points at one of its own outcomes`,
    );
    assert.equal(v.outcome.dominant, v.dominant);
  }
});

test('a sitting is deterministic in its seed and varies across seeds', () => {
  const a = buildSitting(corpus, 12, seedFrom('same'));
  const b = buildSitting(corpus, 12, seedFrom('same'));
  const c = buildSitting(corpus, 12, seedFrom('different'));
  const sig = (s) => s.map((x) => `${x.entry.id}/${x.question.id}`).join(',');
  assert.equal(sig(a), sig(b), 'same seed, same sitting');
  assert.notEqual(sig(a), sig(c), 'different seed, different sitting');
});

test('a sitting never repeats a question and honours its length', () => {
  for (const track of TRACKS) {
    const want = Math.min(track.questions, capacity(corpus));
    const sitting = buildSitting(corpus, track.questions, seedFrom(track.id));
    assert.equal(sitting.length, want, `${track.id}: asked ${sitting.length}, wanted ${want}`);
    const keys = sitting.map((s) => `${s.entry.id}/${s.question.id}`);
    assert.equal(new Set(keys).size, keys.length, `${track.id} repeats a question`);
  }
});

test('a short sitting spreads across traditions instead of stacking one', () => {
  const sitting = buildSitting(corpus, 12, seedFrom('spread'));
  const traditions = new Set(sitting.map((s) => s.entry.tradition));
  const entries = new Set(sitting.map((s) => s.entry.id));
  assert.equal(entries.size, sitting.length, 'one question per entry while entries last');
  assert.ok(traditions.size >= Math.min(8, sitting.length), `only ${traditions.size} traditions in 12 questions`);
});

test('asking for more questions than exist returns everything, without looping forever', () => {
  const sitting = buildSitting(corpus, capacity(corpus) + 50, seedFrom('greedy'));
  assert.equal(sitting.length, capacity(corpus));
  const keys = sitting.map((s) => `${s.entry.id}/${s.question.id}`);
  assert.equal(new Set(keys).size, keys.length, 'still no repeats at full draw');
});

// ── Glossary and Bias Audit ────────────────────────────────────────────────

test('the glossary clears 100 entries and every one declares a replication status', () => {
  const g = raw.glossary ?? [];
  assert.ok(g.length >= 100, `glossary has ${g.length} entries, floor is 100`);
  const allowed = new Set(['robust', 'mixed', 'contested', 'failed', '—']);
  const ids = new Set();
  for (const e of g) {
    assert.ok(!ids.has(e.id), `duplicate glossary id ${e.id}`);
    ids.add(e.id);
    assert.ok(allowed.has(e.status), `${e.id} has unknown status "${e.status}"`);
    assert.ok(e.definition?.length > 20, `${e.id} needs a real definition`);
    assert.ok(e.example?.length > 40, `${e.id} needs a case`);
    assert.ok(e.source?.length > 3, `${e.id} needs a source`);
  }
});

test('findings that failed replication are present and labelled, not quietly dropped', () => {
  const g = raw.glossary ?? [];
  // The whole point of the status field. If these ever get deleted or relabelled
  // upward, the list has become the thing it was written to correct.
  for (const id of ['ego-depletion', 'power-posing', 'elderly-priming', 'backfire-effect']) {
    const entry = g.find((e) => e.id === id);
    assert.ok(entry, `${id} should be in the glossary`);
    assert.equal(entry.status, 'failed', `${id} must stay labelled as failed`);
  }
});

test('the audit asks real items and every one explains itself afterwards', () => {
  const audit = raw.audit ?? [];
  assert.ok(audit.length >= 8, `audit has ${audit.length} items`);
  for (const item of audit) {
    assert.ok(item.prompt?.length > 10, `${item.id} needs a prompt`);
    assert.ok(item.reveal?.what, `${item.id} must name what it was measuring`);
    assert.ok(item.reveal?.says?.length > 80, `${item.id} reveal is too thin`);
    assert.ok(['choice', 'number'].includes(item.kind), `${item.id} has odd kind`);
    if (item.kind === 'choice') assert.ok(item.options?.length >= 2, `${item.id} needs options`);
    // Between-subjects items must offer more than one arm, or the manipulation is fake.
    if (item.arms) assert.ok(item.arms.length >= 2, `${item.id} has only one arm`);
  }
});

test('only items with a defined correct answer can be graded', () => {
  const audit = raw.audit ?? [];
  const graded = audit.filter((i) => i.options?.some((o) => 'correct' in o));
  assert.ok(graded.length >= 3, 'some items should be gradeable');
  // Every gradeable item must have exactly one correct option, or scoring is incoherent.
  for (const item of graded) {
    const n = item.options.filter((o) => o.correct).length;
    assert.equal(n, 1, `${item.id} has ${n} correct options`);
  }
  // And the arm-based items must NOT be graded — a single arm cannot be right or wrong.
  for (const item of audit.filter((i) => i.arms)) {
    assert.ok(!item.options?.some((o) => 'correct' in o),
      `${item.id} is between-subjects and must not claim a correct answer`);
  }
});
