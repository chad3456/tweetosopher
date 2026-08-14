/**
 * The glossary tab, and the Bias Audit.
 *
 * The glossary's organising idea is the `status` badge. Lists of biases circulate
 * everywhere and almost none of them say which findings survived the replication
 * crisis — so filtering by status is the first control offered, and "Failed" is a
 * filter a reader can actually use to find out what they have been repeating.
 */

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

import { scoreOutrage, byAxis, AXIS_LABEL, SIDE_LABEL, MIN_PAIRS } from './outrage.js';
import { gapChart, fieldChart, axisChart, gapTable, gapLegend } from './charts.js';

const STATUS_ORDER = ['robust', 'mixed', 'contested', 'failed', '—'];
const STATUS_LABEL = { robust: 'Robust', mixed: 'Mixed', contested: 'Contested', failed: 'Failed', '—': 'Not empirical' };

// A probe's kind is a claim about what answering it can establish, so it is shown to
// the reader rather than kept as an internal field. "Run it on yourself" means the
// answer is evidence about them; "Where you land" means it indicates a leaning with no
// control condition behind it; "Check your belief" means the effect is disputed or dead
// and the probe exists to show them the record rather than to demonstrate anything.
const PROBE_ORDER = ['demo', 'judgement', 'audit'];
const PROBE_LABEL = { demo: 'Run it on yourself', judgement: 'Where you land', audit: 'Check your belief' };
const PROBE_NOTE = {
  demo: 'This one runs on you. Answer before reading on — the explanation spoils it.',
  judgement: 'No control condition here, so your answer indicates a leaning rather than proving one.',
  audit: 'This asks what you already believe, then shows you the record.',
};

/** One glossary entry's test. Locks after an answer: the reveal is not re-winnable. */
function renderProbe(probe) {
  const box = el('div', `probe probe--${probe.kind}`);
  const head = el('p', 'probe__head');
  head.append(
    el('span', `probe__kind probe__kind--${probe.kind}`, PROBE_LABEL[probe.kind]),
    el('span', 'probe__note', PROBE_NOTE[probe.kind]),
  );
  box.append(head);
  box.append(el('p', 'probe__ask', probe.ask));

  const options = el('div', 'probe__options');
  const buttons = [];
  for (const opt of probe.options) {
    const b = el('button', 'probe__option');
    b.type = 'button';
    b.textContent = opt.label;
    b.addEventListener('click', () => answer(opt, b));
    buttons.push(b);
    options.append(b);
  }
  box.append(options);

  const after = el('div', 'probe__after');
  after.hidden = true;
  box.append(after);

  function answer(opt, button) {
    for (const b of buttons) { b.disabled = true; b.classList.remove('is-chosen'); }
    button.classList.add('is-chosen');
    after.replaceChildren();
    after.append(el('p', 'probe__tell', opt.tell));
    // Every option's consequence is shown, not only the chosen one — otherwise the
    // reader learns their own answer and nothing about the alternatives, which is
    // where most of the content is.
    for (const other of probe.options) {
      if (other.id === opt.id) continue;
      after.append(el('p', 'probe__other', `${other.label} — ${other.tell}`));
    }
    after.append(el('p', 'probe__reveal', probe.reveal));
    after.hidden = false;
  }

  return box;
}

// ── Glossary ───────────────────────────────────────────────────────────────

export function renderGlossary(mount, corpus) {
  const entries = corpus.glossary ?? [];
  const state = { q: '', status: 'all', category: 'all', kind: 'all' };

  mount.replaceChildren();

  const counts = {};
  for (const g of entries) counts[g.status] = (counts[g.status] ?? 0) + 1;
  const categories = [...new Set(entries.map((g) => g.category))].sort();

  // ── controls ──
  const controls = el('div', 'gl-controls');

  const search = el('input', 'gl-search');
  search.type = 'search';
  search.placeholder = `Search ${entries.length} entries…`;
  search.setAttribute('aria-label', 'Search the glossary');
  controls.append(search);

  const statusRow = el('div', 'gl-filters');
  statusRow.setAttribute('role', 'group');
  statusRow.setAttribute('aria-label', 'Filter by replication status');
  const statusButtons = [];
  const addStatus = (value, label, n) => {
    const b = el('button', `gl-chip gl-chip--${value === 'all' ? 'all' : value.replace('—', 'na')}`);
    b.type = 'button';
    b.textContent = n == null ? label : `${label} ${n}`;
    b.setAttribute('aria-pressed', String(state.status === value));
    b.addEventListener('click', () => { state.status = value; draw(); });
    statusButtons.push([b, value]);
    statusRow.append(b);
  };
  addStatus('all', 'All', entries.length);
  for (const s of STATUS_ORDER) if (counts[s]) addStatus(s, STATUS_LABEL[s], counts[s]);
  controls.append(statusRow);

  const catRow = el('div', 'gl-filters');
  catRow.setAttribute('role', 'group');
  catRow.setAttribute('aria-label', 'Filter by kind');
  const catButtons = [];
  const addCat = (value, label) => {
    const b = el('button', 'gl-chip');
    b.type = 'button';
    b.textContent = label;
    b.setAttribute('aria-pressed', String(state.category === value));
    b.addEventListener('click', () => { state.category = value; draw(); });
    catButtons.push([b, value]);
    catRow.append(b);
  };
  addCat('all', 'Every kind');
  for (const c of categories) addCat(c, c);
  controls.append(catRow);

  const kindRow = el('div', 'gl-filters');
  kindRow.setAttribute('role', 'group');
  kindRow.setAttribute('aria-label', 'Filter by what the entry’s test can show');
  const kindButtons = [];
  const kindCounts = {};
  for (const g of entries) if (g.probe) kindCounts[g.probe.kind] = (kindCounts[g.probe.kind] ?? 0) + 1;
  const addKind = (value, label) => {
    const b = el('button', 'gl-chip');
    b.type = 'button';
    b.textContent = label;
    b.setAttribute('aria-pressed', String(state.kind === value));
    b.addEventListener('click', () => { state.kind = value; draw(); });
    kindButtons.push([b, value]);
    kindRow.append(b);
  };
  addKind('all', 'Every test');
  for (const k of PROBE_ORDER) if (kindCounts[k]) addKind(k, `${PROBE_LABEL[k]} ${kindCounts[k]}`);
  controls.append(kindRow);

  mount.append(controls);

  const legend = el('p', 'gl-legend');
  legend.textContent =
    'Status is the point of this list. Most published bias lists were assembled before the '
    + 'replication crisis and still present findings that did not survive it — so each entry '
    + 'says whether it held up. Filter by "Failed" to see what you have probably been repeating. '
    + 'Every entry also carries a test: open one and answer before you read on. The test\'s label '
    + 'says what answering it can actually establish, which for a failed finding is nothing about '
    + 'you and everything about the record.';
  mount.append(legend);

  const count = el('p', 'gl-count');
  mount.append(count);

  const list = el('div', 'gl-list');
  mount.append(list);

  function draw() {
    for (const [b, v] of statusButtons) b.setAttribute('aria-pressed', String(state.status === v));
    for (const [b, v] of catButtons) b.setAttribute('aria-pressed', String(state.category === v));
    for (const [b, v] of kindButtons) b.setAttribute('aria-pressed', String(state.kind === v));

    const q = state.q.trim().toLowerCase();
    const shown = entries.filter((g) => {
      if (state.status !== 'all' && g.status !== state.status) return false;
      if (state.category !== 'all' && g.category !== state.category) return false;
      if (state.kind !== 'all' && g.probe?.kind !== state.kind) return false;
      if (!q) return true;
      const probeText = g.probe ? `${g.probe.ask} ${g.probe.reveal}` : '';
      return `${g.name} ${g.definition} ${g.example} ${g.source} ${probeText}`.toLowerCase().includes(q);
    });

    count.textContent = shown.length === entries.length
      ? `${entries.length} entries`
      : `${shown.length} of ${entries.length} entries`;

    list.replaceChildren();
    if (!shown.length) {
      list.append(el('p', 'sec-note', 'Nothing matches. Try a different word, or clear the filters.'));
      return;
    }

    for (const g of shown) {
      const item = el('details', 'gl-item');
      const summary = el('summary');
      const head = el('span', 'gl-head');
      head.append(
        el('span', 'gl-name', g.name),
        el('span', `gl-status gl-status--${g.status === '—' ? 'na' : g.status}`, STATUS_LABEL[g.status]),
      );
      summary.append(head, el('span', 'gl-def', g.definition));
      item.append(summary);

      const body = el('div', 'gl-body');
      body.append(el('p', 'gl-source', `${g.source} · ${g.category}`));
      body.append(el('p', 'gl-case', g.example));
      if (g.probe) body.append(renderProbe(g.probe));
      item.append(body);
      list.append(item);
    }
  }

  search.addEventListener('input', () => { state.q = search.value; draw(); });
  draw();
}

// ── Bias Audit ─────────────────────────────────────────────────────────────

/** Picks an arm per item, so a reader gets one side of each between-subjects design. */
export function buildAudit(corpus) {
  return (corpus.audit ?? []).map((item) => ({
    item,
    arm: item.arms ? item.arms[Math.floor(Math.random() * item.arms.length)] : null,
  }));
}

export function renderAuditQuestion(mount, step, index, total, onAnswer) {
  const { item, arm } = step;
  mount.replaceChildren();

  mount.append(el('p', 'rail__meta', `Item ${index + 1} of ${total} · ${item.title}`));

  const preamble = arm?.preamble ?? item.preamble;
  if (preamble) mount.append(el('p', 'audit__preamble', preamble));

  mount.append(el('h2', 'question__prompt', item.prompt));

  if (item.kind === 'number') {
    const form = el('form', 'audit__number');
    const input = el('input');
    input.type = 'number';
    input.required = true;
    input.setAttribute('aria-label', item.prompt);
    const submit = el('button', 'primary', 'Record');
    submit.type = 'submit';
    form.append(input, submit);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value === '') return;
      onAnswer({ value: Number(input.value) });
    });
    mount.append(form);
    input.focus();
    return;
  }

  const options = el('div', 'options');
  item.options.forEach((option, i) => {
    const button = el('button', 'option');
    button.type = 'button';
    button.append(
      el('span', 'option__mark', String.fromCharCode(65 + i)),
      el('span', 'option__body', option.label),
    );
    button.addEventListener('click', () => onAnswer({ optionId: option.id }));
    options.append(button);
  });
  mount.append(options);
}

/**
 * The reveal. Reports what each item was measuring and what the reader's answer was,
 * and is careful about what a single answer can show: only the gradeable items get a
 * verdict, and the between-subjects ones explain the mechanism instead.
 */
export function renderAuditResult(mount, steps, answers) {
  mount.replaceChildren();

  const head = el('div', 'verdict');
  head.append(el('p', 'verdict-label', 'What that was'));
  head.append(el('h2', 'verdict-name', 'The Bias Audit'));
  head.append(el('p', 'verdict-voice',
    'Each item was a demonstration rather than a question about your opinion. Here is what '
    + 'each one was doing, and what your answer can and cannot show.'));
  mount.append(head);

  let gradeable = 0;
  let correct = 0;

  const list = el('div', 'audit-reveals');
  steps.forEach((step, i) => {
    const { item, arm } = step;
    const answer = answers[i];
    const card = el('div', 'reveal');

    card.append(el('p', 'reveal__what', item.reveal.what));

    // What they answered, in readable form.
    let given = '—';
    if (item.kind === 'number') given = `You said ${answer?.value?.toLocaleString() ?? '—'}`;
    else {
      const chosen = item.options.find((o) => o.id === answer?.optionId);
      given = chosen ? `You chose: ${chosen.label}` : 'Not answered';
    }
    card.append(el('p', 'reveal__answer', given));

    if (arm) {
      card.append(el('p', 'reveal__arm', `You were shown the "${arm.id}" version of this item.`));
    }

    // Only items with a defined correct answer get a verdict.
    const graded = item.options?.some((o) => 'correct' in o);
    if (graded && answer?.optionId) {
      gradeable += 1;
      const chosen = item.options.find((o) => o.id === answer.optionId);
      const right = Boolean(chosen?.correct);
      if (right) correct += 1;
      card.append(el('p', `reveal__verdict reveal__verdict--${right ? 'ok' : 'no'}`,
        right ? 'Correct.' : 'Not the answer the arithmetic gives.'));
    }

    card.append(el('p', 'reveal__says', item.reveal.says));
    if (item.reveal.caveat) card.append(el('p', 'reveal__caveat', item.reveal.caveat));
    list.append(card);
  });
  mount.append(list);

  const foot = el('div', 'result-foot');
  foot.append(el('p', 'sec-note',
    `${gradeable ? `${correct} of ${gradeable} items with a definite answer were correct. ` : ''}`
    + 'The other items have no score, deliberately: they depend on comparing groups that saw '
    + 'different versions, and you saw one. A single answer demonstrates a mechanism; it does '
    + 'not measure a person. Any bias test that gives you a confident individual score on '
    + 'nine items is doing something the evidence does not support.'));
  mount.append(foot);
}

// ── Fallacies ──────────────────────────────────────────────────────────────

/**
 * The `notFallacy` field is given equal weight to the definition, deliberately.
 * These names are used mainly as weapons — "ad hominem" thrown at any criticism of
 * a speaker — and a list that teaches only the label arms people to misuse it. The
 * misuse is now commoner than the fallacy.
 */
export function renderFallacies(mount, corpus) {
  const items = corpus.fallacies ?? [];
  const families = corpus.fallacyFamilies ?? {};
  mount.replaceChildren();

  const state = { family: 'all' };
  const row = el('div', 'gl-filters');
  const buttons = [];
  const add = (value, label) => {
    const b = el('button', 'gl-chip');
    b.type = 'button';
    b.textContent = label;
    b.addEventListener('click', () => { state.family = value; draw(); });
    buttons.push([b, value]);
    row.append(b);
  };
  add('all', `All ${items.length}`);
  for (const f of Object.keys(families)) add(f, f);
  mount.append(row);

  const note = el('p', 'gl-legend');
  note.textContent =
    'Each entry carries what it is most often confused with. That field matters more than the '
    + 'definition: these names are mostly used as weapons, and the misuse is now commoner than '
    + 'the fallacy. Attacking someone\'s credibility is not ad hominem when their testimony is '
    + 'the evidence.';
  mount.append(note);

  const list = el('div', 'gl-list');
  mount.append(list);

  function draw() {
    for (const [b, v] of buttons) b.setAttribute('aria-pressed', String(state.family === v));
    const shown = state.family === 'all' ? items : items.filter((f) => f.family === state.family);
    list.replaceChildren();
    if (state.family !== 'all') {
      const d = el('p', 'gl-count', families[state.family]);
      list.append(d);
    }
    for (const f of shown) {
      const item = el('details', 'gl-item');
      const summary = el('summary');
      const head = el('span', 'gl-head');
      head.append(el('span', 'gl-name', f.name), el('span', 'gl-status gl-status--na', f.family));
      summary.append(head, el('span', 'gl-def', f.definition));
      item.append(summary);

      const body = el('div', 'gl-body');
      body.append(el('p', 'gl-case', f.example));
      const not = el('div', 'fl-not');
      not.append(
        el('p', 'fl-not__label', 'Not a fallacy when'),
        el('p', 'fl-not__text', f.notFallacy),
      );
      body.append(not);
      item.append(body);
      list.append(item);
    }
  }
  draw();
}


// ── Selective Outrage ──────────────────────────────────────────────────────

/**
 * Builds the sitting: every case asked twice, once per actor, in the interleaved
 * order the data file specifies. The separation between the two halves of a pair is
 * the whole basis of the measurement, so the order is authored and tested rather than
 * shuffled at runtime — a random shuffle will happily put a pair back to back.
 */
export function buildOutrage(corpus) {
  const items = corpus.outrage ?? [];
  const order = corpus.outrageOrder ?? [];
  return order
    .filter(([i]) => items[i])
    .map(([i, armIdx]) => ({ item: items[i], arm: items[i].arms[armIdx] }));
}

/** The forecast, asked once before the cases. */
export function renderOutragePrediction(mount, prediction, onAnswer) {
  mount.replaceChildren();
  mount.append(el('p', 'rail__meta', 'Before you begin'));
  mount.append(el('h2', 'question__prompt', prediction.ask));
  mount.append(el('p', 'sec-lede',
    'This is scored against what you actually do. It is the only part of the result that is '
    + 'about self-knowledge rather than about politics.'));
  const options = el('div', 'options');
  prediction.options.forEach((opt, i) => {
    const b = el('button', 'option');
    b.type = 'button';
    b.append(el('span', 'option__mark', String(i + 1)), el('span', 'option__body', opt.label));
    b.addEventListener('click', () => onAnswer(opt));
    options.append(b);
  });
  mount.append(options);
}

export function renderOutrageQuestion(mount, step, index, total, scale, onAnswer) {
  const { item, arm } = step;
  mount.replaceChildren();
  mount.append(el('p', 'rail__meta', `Case ${index + 1} of ${total}`));
  mount.append(el('h2', 'question__prompt', `${arm.actor} ${item.act}.`));
  mount.append(el('p', 'sec-lede', 'How wrong is that?'));

  const options = el('div', 'options');
  for (const point of scale) {
    const b = el('button', 'option');
    b.type = 'button';
    b.append(el('span', 'option__mark', String(point.value)), el('span', 'option__body', point.label));
    b.addEventListener('click', () => onAnswer({ value: point.value }));
    options.append(b);
  }
  mount.append(options);
}

/**
 * The result.
 *
 * Structured so that the claim arrives after the evidence that licenses it: the charts
 * first, then the tag, then the caveat that belongs to that tag, then the individual
 * cases. A tag stated before the reader has seen their own gaps is a horoscope.
 */
export function renderOutrageResult(mount, steps, answers, corpus, predicted) {
  mount.replaceChildren();
  const items = corpus.outrage ?? [];
  const scale = corpus.outrageScale ?? [];
  const tags = corpus.outrageTags ?? [];

  // Answers arrive positionally; key them by case and arm so scoring can pair them.
  const keyed = {};
  steps.forEach((step, i) => {
    const v = answers[i]?.value;
    if (v != null) keyed[`${step.item.id}.${step.arm.id}`] = v;
  });

  const result = scoreOutrage(items, keyed, tags, predicted);

  const head = el('div', 'verdict');
  head.append(el('p', 'verdict-label', 'Selective Outrage'));
  head.append(el('h2', 'verdict-name', 'You judged each act twice'));
  head.append(el('p', 'verdict-voice',
    'Every case appeared in two versions, identical except for who did it, separated so the '
    + 'second arrived without the first still in mind. The distance between your two ratings is '
    + 'the measurement. It is yours — the same person, the same act, two actors.'));
  mount.append(head);

  if (result.complete < MIN_PAIRS) {
    mount.append(el('p', 'sec-note',
      `Only ${result.complete} of ${result.total} pairs were completed, which is too few to say `
      + 'anything. The test needs both halves of at least six cases before it will offer a verdict, '
      + 'and inventing one from fewer is what this whole section exists to argue against.'));
    return;
  }

  // ── the evidence ─────────────────────────────────────────────────────────
  const charts = el('div', 'result-charts');

  const gaps = el('section', 'result-chart');
  gaps.append(el('h3', 'result-chart__title', 'Your two ratings, case by case'));
  gaps.append(el('p', 'result-chart__note',
    'Each row is one act. The two dots are your ratings of the two actors; the bar between them '
    + 'is how much the actor mattered. A row with the dots on top of each other is a row where '
    + 'you judged the act.'));
  // The actors differ from row to row, so the legend names the position in the pair
  // rather than a person. Hovering a dot names the actual one; the table lists them all.
  gaps.append(gapLegend([
    ['a', 'The first version of each act'],
    ['b', 'The second version'],
  ]));
  gaps.append(gapChart(result.pairs, scale));
  gaps.append(gapTable(result.pairs, scale));
  charts.append(gaps);

  const byWhat = byAxis(result.pairs);
  if (byWhat.length > 1) {
    const ax = el('section', 'result-chart');
    ax.append(el('h3', 'result-chart__title', 'What moved you'));
    ax.append(el('p', 'result-chart__note',
      'The cases vary four different things. This is where your gaps were largest, which says '
      + 'more about you than the total does — being moved by how close someone is to you and '
      + 'being moved by which side they are on are different failings with different defences.'));
    ax.append(axisChart(byWhat, AXIS_LABEL));
    charts.append(ax);
  }

  const field = el('section', 'result-chart');
  field.append(el('h3', 'result-chart__title', 'Where that puts you'));
  field.append(el('p', 'result-chart__note',
    'Two independent axes: how harsh you were, and how much the actor changed it. The regions '
    + 'are the results this test can return. Yours is the one you landed in — and the others are '
    + 'shown so you can see exactly what you would have had to do to get them.'));
  field.append(fieldChart(result, tags));
  charts.append(field);
  mount.append(charts);

  // ── the claim ────────────────────────────────────────────────────────────
  if (result.tag) {
    const box = el('div', `outcome-tag outcome-tag--${result.tag.id}`);
    box.append(el('p', 'outcome-tag__label', 'On this test, on this occasion'));
    box.append(el('h3', 'outcome-tag__name', result.tag.name));
    box.append(el('p', 'outcome-tag__numbers',
      `Mean severity ${result.severity.toFixed(1)} of 5 · mean gap ${result.selectivity.toFixed(2)} `
      + `scale points · ${result.moved} of ${result.complete} pairs moved by half a point or more`));
    box.append(el('p', 'outcome-tag__blurb', result.tag.blurb));
    if (result.direction) {
      box.append(el('p', 'outcome-tag__dir',
        `The gaps point one way: on ${result.direction.votes} of the cases that name a side, the `
        + `one you let off was ${SIDE_LABEL[result.direction.side] ?? result.direction.side}.`));
    }
    box.append(el('p', 'outcome-tag__caveat', result.tag.caveat));
    mount.append(box);
  }

  if (result.forecast) {
    const f = result.forecast;
    const said = {
      accurate: 'You predicted your own inconsistency about right, which is rarer than it sounds — '
        + 'most people underestimate it, and the third-person effect in the glossary is the reason.',
      under: 'You predicted fewer differences than you produced. That is the ordinary result, and it '
        + 'is the same asymmetry that has people rating advertising as effective on others and not '
        + 'on themselves.',
      over: 'You predicted more differences than you produced — you were harder on yourself than the '
        + 'evidence warranted, or you saw the design coming and corrected for it.',
    }[f.verdict];
    const p = el('div', 'outcome-forecast');
    p.append(el('h3', 'outcome-forecast__title', 'Against your own forecast'));
    p.append(el('p', 'outcome-forecast__body',
      `You expected about ${f.predicted.toFixed(0)} of ${result.complete} to differ. `
      + `${result.moved} did. ${said}`));
    mount.append(p);
  }

  if (result.widest?.real) {
    const w = result.widest;
    const box = el('div', 'outcome-widest');
    box.append(el('h3', 'outcome-widest__title', 'The one to explain'));
    box.append(el('p', 'outcome-widest__body',
      `Your largest gap was ${w.gap} points, on the act where someone ${w.item.act}. `
      + `You rated ${w.item.arms[0].actor.toLowerCase()} at ${w.a} and `
      + `${w.item.arms[1].actor.toLowerCase()} at ${w.b}. What varied was: ${w.item.varies.toLowerCase()}. `
      + 'There may be a good reason. The test is whether you can state it as a principle that you '
      + 'would also accept applied against you.'));
    mount.append(box);
  }

  // ── the cases ────────────────────────────────────────────────────────────
  const list = el('div', 'audit-reveals');
  for (const p of [...result.pairs].sort((a, b) => b.gap - a.gap)) {
    const card = el('div', 'reveal');
    card.append(el('p', 'reveal__what', p.item.varies));
    card.append(el('p', 'reveal__answer', `Someone ${p.item.act}.`));
    card.append(el('p', 'reveal__verdict',
      `${p.item.arms[0].actor}: ${p.a} · ${p.item.arms[1].actor}: ${p.b}`
      + (p.real ? ` · gap ${p.gap}` : ' · no gap')));
    card.append(el('p', 'reveal__says', p.item.reveal));
    list.append(card);
  }
  mount.append(list);

  const foot = el('div', 'result-foot');
  foot.append(el('p', 'sec-note',
    'What this cannot do, stated plainly: you saw both versions, so consistency was the visible '
    + 'demand and your measured gaps are almost certainly smaller than they would be in the wild. '
    + 'Ten pairs is also a short instrument. Treat a large gap as real evidence and a small one as '
    + 'weak evidence, because that is the direction the design biases in.'));
  mount.append(foot);
}
