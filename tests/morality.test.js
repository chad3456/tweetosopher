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

// ── Fallacies and Selective Outrage ────────────────────────────────────────

test('every fallacy names what it is confused with', () => {
  const f = raw.fallacies ?? [];
  assert.ok(f.length >= 30, `only ${f.length} fallacies`);
  const ids = new Set();
  for (const item of f) {
    assert.ok(!ids.has(item.id), `duplicate fallacy ${item.id}`);
    ids.add(item.id);
    assert.ok(item.definition?.length > 20, `${item.id} needs a definition`);
    assert.ok(item.example?.length > 30, `${item.id} needs an example`);
    // The field that stops the list becoming a weapon. Without it a reader learns
    // the label and not the boundary, and the misuse is commoner than the fallacy.
    assert.ok(item.notFallacy?.length > 60, `${item.id} must say when it is NOT a fallacy`);
    assert.ok(raw.fallacyFamilies[item.family], `${item.id} has unknown family ${item.family}`);
  }
});

test('every outrage case varies exactly one thing and offers two arms', () => {
  const items = raw.outrage ?? [];
  assert.ok(items.length >= 6, `only ${items.length} outrage cases`);
  for (const item of items) {
    assert.equal(item.arms.length, 2, `${item.id} must have exactly two arms`);
    assert.ok(item.varies?.length > 10, `${item.id} must name what varies`);
    assert.ok(item.act?.length > 20, `${item.id} needs an act`);
    assert.ok(item.reveal?.length > 100, `${item.id} reveal is too thin`);
    // The act must be identical across arms — only the actor changes. If an arm
    // carried its own act the test would be measuring two different things.
    for (const arm of item.arms) {
      assert.ok(arm.actor?.length > 5, `${item.id}/${arm.id} needs an actor`);
      assert.ok(!('act' in arm), `${item.id}/${arm.id} must not vary the act`);
    }
  }
});

test('the outrage test is politically two-directional', () => {
  const items = raw.outrage ?? [];
  // An instrument that only ever embarrasses one side is a partisan tool with a
  // scale on it. At minimum the arms must not all point the same way, so this
  // checks that the varied dimensions are not a single repeated axis.
  const dimensions = new Set(items.map((i) => i.varies.toLowerCase()));
  assert.equal(dimensions.size, items.length, 'each case should vary a different thing');
  const text = JSON.stringify(items).toLowerCase();
  for (const side of ['climate', 'farmers', 'immigration', 'governing party', 'opposition']) {
    assert.ok(text.includes(side), `expected a case touching "${side}"`);
  }
});

test('every glossary entry carries a probe, and every probe a glossary entry', () => {
  const entries = raw.glossary ?? [];
  assert.ok(entries.length >= 100, `only ${entries.length} glossary entries`);
  for (const g of entries) {
    assert.ok(g.probe, `${g.id} has no probe — a definition the reader can only nod at`);
    assert.ok(['demo', 'judgement', 'audit'].includes(g.probe.kind), `${g.id} has kind ${g.probe.kind}`);
    assert.ok(g.probe.ask?.length > 30, `${g.id} probe needs a real question`);
    assert.ok(g.probe.reveal?.length > 120, `${g.id} probe reveal is too thin`);
    assert.ok(g.probe.options?.length >= 2, `${g.id} probe needs at least two options`);
    const ids = new Set();
    for (const o of g.probe.options) {
      assert.ok(o.label?.length > 3, `${g.id}/${o.id} needs a label`);
      assert.ok(o.tell?.length > 25, `${g.id}/${o.id} needs to say what the answer indicates`);
      assert.ok(!ids.has(o.id), `${g.id} repeats option id ${o.id}`);
      ids.add(o.id);
    }
  }
});

test('a finding that failed replication is never probed as if it were real', () => {
  // This is the honesty rule the whole probe file exists under. A `demo` claims the
  // reader's answer is evidence about them; running one for ego depletion would be
  // staging a demonstration of an effect that is not there. Such entries get an
  // `audit` — asked what they believe, then shown the record.
  const failed = (raw.glossary ?? []).filter((g) => g.status === 'failed');
  assert.ok(failed.length >= 3, `expected several failed findings, found ${failed.length}`);
  for (const g of failed) {
    assert.equal(g.probe.kind, 'audit', `${g.id} failed replication but is probed as a ${g.probe.kind}`);
    // The reveal must name what happened, not merely restate the claim.
    const names = /replicat|did not survive|no effect|near zero|no longer believ|failed/i.test(g.probe.reveal);
    assert.ok(names, `${g.id} reveal does not say the finding failed`);
  }
});

test('disputed findings are not probed as settled ones', () => {
  const shaky = (raw.glossary ?? []).filter((g) => g.status === 'contested' || g.status === 'mixed');
  assert.ok(shaky.length >= 20, `expected many disputed entries, found ${shaky.length}`);
  const asDemo = shaky.filter((g) => g.probe.kind === 'demo').map((g) => g.id);
  // Some contested effects can still be run on a reader honestly — the endowment
  // effect will produce a gap in an inexperienced trader whatever the literature
  // says about generality. But most should be audits or judgements, and if that
  // ratio inverts, the file has drifted into presenting disputes as demonstrations.
  assert.ok(
    asDemo.length <= shaky.length / 2,
    `${asDemo.length} of ${shaky.length} disputed entries are run as demos: ${asDemo.join(', ')}`,
  );
  for (const g of shaky) {
    // Markers that the reveal acknowledges the dispute rather than reporting the
    // headline. Deliberately broad: "an artefact of how the task is explained" and
    // "the effect shrinks" both concede as much as the word "contested" does.
    const hedged = /disput|mixed|contested|replicat|meta-analys|smaller|shr[ai]nk|artefact|less general|lost significance|unresolved|not established|not supported|weak|inconsistent|uneven|near zero|no consistent|no significant|far below/i
      .test(g.probe.reveal);
    assert.ok(hedged, `${g.id} is ${g.status} but its reveal reads as settled`);
  }
});

test('the hero animation honours prefers-reduced-motion and a missing canvas', async () => {
  // The hero's swinging figure is the one thing on the page that moves on its own, so
  // the reduced-motion promise is worth holding with a test rather than a comment. The
  // module is mounted against stub globals: if it ever starts a frame loop or touches
  // the canvas under `reduce`, one of the stubs below records it.
  const calls = { raf: 0, ctx: 0, observed: 0 };
  const stubCanvas = () => ({
    getContext: () => { calls.ctx += 1; return null; },
    getBoundingClientRect: () => ({ width: 800, height: 600 }),
    width: 0, height: 0,
  });
  const prior = { window: globalThis.window, IntersectionObserver: globalThis.IntersectionObserver };
  globalThis.window = {
    matchMedia: (q) => ({ matches: /reduced-motion/.test(q), addEventListener() {} }),
    devicePixelRatio: 1,
    addEventListener() {}, removeEventListener() {},
  };
  globalThis.requestAnimationFrame = () => { calls.raf += 1; return 1; };
  globalThis.cancelAnimationFrame = () => {};
  globalThis.IntersectionObserver = class { observe() { calls.observed += 1; } disconnect() {} };

  try {
    const { mountSwing } = await import('../web/src/test/swing.js');
    const teardown = mountSwing(stubCanvas());
    assert.equal(typeof teardown, 'function', 'mountSwing must always return a teardown');
    assert.equal(calls.raf, 0, 'no frame loop may start under prefers-reduced-motion');
    assert.equal(calls.ctx, 0, 'the canvas must not be touched under prefers-reduced-motion');
    assert.equal(calls.observed, 0, 'nothing to observe if nothing animates');
    teardown();
    // A missing canvas must be survivable too — the hero renders without the element in
    // any embedding that strips it, and this must not throw on the way past.
    assert.equal(typeof mountSwing(null), 'function');
    assert.equal(typeof mountSwing({}), 'function');
  } finally {
    globalThis.window = prior.window;
    globalThis.IntersectionObserver = prior.IntersectionObserver;
  }
});
