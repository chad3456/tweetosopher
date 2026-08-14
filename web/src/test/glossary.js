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

const STATUS_ORDER = ['robust', 'mixed', 'contested', 'failed', '—'];
const STATUS_LABEL = { robust: 'Robust', mixed: 'Mixed', contested: 'Contested', failed: 'Failed', '—': 'Not empirical' };

// ── Glossary ───────────────────────────────────────────────────────────────

export function renderGlossary(mount, corpus) {
  const entries = corpus.glossary ?? [];
  const state = { q: '', status: 'all', category: 'all' };

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

  mount.append(controls);

  const legend = el('p', 'gl-legend');
  legend.textContent =
    'Status is the point of this list. Most published bias lists were assembled before the '
    + 'replication crisis and still present findings that did not survive it — so each entry '
    + 'says whether it held up. Filter by "Failed" to see what you have probably been repeating.';
  mount.append(legend);

  const count = el('p', 'gl-count');
  mount.append(count);

  const list = el('div', 'gl-list');
  mount.append(list);

  function draw() {
    for (const [b, v] of statusButtons) b.setAttribute('aria-pressed', String(state.status === v));
    for (const [b, v] of catButtons) b.setAttribute('aria-pressed', String(state.category === v));

    const q = state.q.trim().toLowerCase();
    const shown = entries.filter((g) => {
      if (state.status !== 'all' && g.status !== state.status) return false;
      if (state.category !== 'all' && g.category !== state.category) return false;
      if (!q) return true;
      return `${g.name} ${g.definition} ${g.example} ${g.source}`.toLowerCase().includes(q);
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

export function buildOutrage(corpus) {
  return (corpus.outrage ?? []).map((item) => ({
    item,
    arm: item.arms[Math.floor(Math.random() * item.arms.length)],
  }));
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

export function renderOutrageResult(mount, steps, answers, scale) {
  mount.replaceChildren();

  const head = el('div', 'verdict');
  head.append(el('p', 'verdict-label', 'What was varied'));
  head.append(el('h2', 'verdict-name', 'Selective Outrage'));
  head.append(el('p', 'verdict-voice',
    'Every case you read exists in two versions, identical except for who did it. You were shown '
    + 'one at random. Here is the other, and what the difference is for.'));
  mount.append(head);

  const list = el('div', 'audit-reveals');
  steps.forEach((step, i) => {
    const { item, arm } = step;
    const other = item.arms.find((a) => a.id !== arm.id);
    const given = scale.find((s) => s.value === answers[i]?.value);

    const card = el('div', 'reveal');
    card.append(el('p', 'reveal__what', item.varies));
    card.append(el('p', 'reveal__answer', `${arm.actor} ${item.act}.`));
    card.append(el('p', 'reveal__verdict', `You said: ${given?.label ?? '—'}`));
    card.append(el('p', 'reveal__arm', `The other version: ${other.actor}`));
    card.append(el('p', 'reveal__says', item.reveal));
    list.append(card);
  });
  mount.append(list);

  const answered = answers.filter(Boolean).map((a) => a.value);
  const mean = answered.length ? answered.reduce((x, y) => x + y, 0) / answered.length : 0;
  const spread = answered.length ? Math.max(...answered) - Math.min(...answered) : 0;

  const foot = el('div', 'result-foot');
  foot.append(el('p', 'sec-note',
    `Your mean severity was ${mean.toFixed(1)} of 5, across a range of ${spread} points. `
    + 'Those two figures are all this can honestly tell you about yourself, and neither is a '
    + 'measure of bias: you saw one version of each case, so nothing here shows how you would '
    + 'have rated the other. A test claiming otherwise on eight items would be inventing a '
    + 'result. What it can do is put the pair in front of you and let you ask whether the swap '
    + 'would have moved you — and that question is the whole instrument.'));
  mount.append(foot);
}
