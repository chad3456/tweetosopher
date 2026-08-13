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
