/**
 * The Test of Morality — the whole application.
 *
 * Stages: the front page (hero, explainer, subjects), a themed five-question test or a
 * full sitting, then the verdict. No network calls, no persistence, no account. The
 * corpus is compiled into the bundle and the scoring is arithmetic, so the test works
 * with the wifi off and cannot leak what you answered.
 */

import corpusData from '../corpus.generated.json';
import { voronoiTreemap } from '../voronoi.js';
import { score, verdicts, nameFor } from './scoring.js';
import { buildSitting, capacity, seedFrom, TRACKS, TEST_LENGTH, testsFor, buildTest } from './select.js';
import { matchPhilosophers, sphereFor, tiedWith } from './match.js';

const corpus = { ...corpusData, byId: new Map(corpusData.entries.map((e) => [e.id, e])) };

const $ = (sel) => document.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};
const NS = 'http://www.w3.org/2000/svg';
const sv = (tag, attrs = {}) => {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
};
const pct = (v) => `${Math.round(v * 100)}%`;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state = { track: TRACKS[1], sitting: [], answers: [], at: 0, test: null };
const MAX = capacity(corpus);
const READY = (corpus.themes ?? []).filter((t) => t.questions >= TEST_LENGTH);

// ── Hero ───────────────────────────────────────────────────────────────────

/**
 * The ten moral spheres as a live partition behind the title.
 *
 * It is the real solver on the real ten categories, not decoration: the shape a
 * visitor sees first is the shape their result will be drawn in. It drifts slowly
 * between weightings so the page has a pulse, and holds still entirely under
 * prefers-reduced-motion, where a moving background is the thing being asked about.
 */
function heroField() {
  const svg = $('#hero-field');
  const W = 1200;
  const H = 760;
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  const clip = [[0, 0], [W, 0], [W, H], [0, H]];
  const n = 10;

  const draw = (weights, seed) => {
    const cells = voronoiTreemap(weights.map((w) => ({ weight: w })), clip, { seed });
    svg.replaceChildren();
    cells.forEach((cell, i) => {
      if (cell.polygon.length < 3) return;
      const path = sv('path', {
        class: 'hero__cell',
        d: `M${cell.polygon.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('L')}Z`,
      });
      path.style.fill = `color-mix(in oklab, var(--bar) ${5 + (i % 5) * 5}%, var(--paper))`;
      svg.append(path);
    });
  };

  const weightsFor = (seed) => {
    let a = seed;
    const next = () => {
      a = (a * 1103515245 + 12345) & 0x7fffffff;
      return a / 0x7fffffff;
    };
    return Array.from({ length: n }, () => 0.3 + next());
  };

  let seed = 11;
  draw(weightsFor(seed), seed);
  if (reduced) return;
  setInterval(() => {
    seed += 1;
    draw(weightsFor(seed), seed);
  }, 6000);
}

// ── Front page ─────────────────────────────────────────────────────────────

function renderFront() {
  const { written, planned, questions } = corpus;
  const tests = READY.reduce((n, t) => n + testsFor(corpus, t.id).length, 0);

  $('#hero-eyebrow').textContent =
    `${READY.length} subjects · ${tests} tests · ${corpus.philosophers.length} thinkers on the bench`;
  $('#hero-meta').textContent =
    `${questions} questions drawn from ${written} of ${planned} entries. Nothing is sent anywhere.`;
  $('#foot-count').textContent = String(written);
  $('#foot-bench').textContent = String(corpus.philosophers.length);

  const grid = $('#theme-grid');
  grid.replaceChildren();
  for (const theme of corpus.themes) {
    const available = testsFor(corpus, theme.id);
    const card = el('button', `theme${available.length ? '' : ' theme--empty'}`);
    card.type = 'button';
    card.disabled = !available.length;
    card.append(
      el('h3', 'theme__name', theme.name),
      el('p', 'theme__blurb', theme.blurb),
      el('p', 'theme__meta',
        available.length
          ? `${available.length} test${available.length === 1 ? '' : 's'} · ${theme.entries.length} entries`
          : 'Not enough entries written yet'),
    );
    if (available.length) card.addEventListener('click', () => openPicker(theme));
    grid.append(card);
  }

  $('#theme-note').textContent =
    `A subject offers as many tests as it has material for — ${TEST_LENGTH} questions each, ` +
    'no question repeated within a subject. Subjects marked otherwise are waiting on entries.';

  renderTracks();
}

function renderTracks() {
  const mount = $('#tracks');
  mount.replaceChildren();
  for (const track of TRACKS) {
    const asked = Math.min(track.questions, MAX);
    const button = el('button', 'track');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(track.id === state.track.id));
    button.append(
      el('span', 'track__n', String(asked)),
      el('span', 'track__label', track.label),
      el('span', 'track__note',
        asked < track.questions
          ? `${track.note} Capped at ${asked} — the corpus has no more written yet.`
          : track.note),
    );
    button.addEventListener('click', () => { state.track = track; renderTracks(); });
    mount.append(button);
  }
}

// ── Test picker ────────────────────────────────────────────────────────────

function openPicker(theme) {
  const tests = testsFor(corpus, theme.id);
  const mount = $('#stage-picker');
  mount.hidden = false;
  mount.replaceChildren();

  const head = el('div', 'picker-head');
  head.append(el('h2', null, theme.name), el('p', 'sec-lede', theme.blurb));
  mount.append(head);

  const list = el('div', 'test-grid');
  tests.forEach((test) => {
    const card = el('button', 'test-card');
    card.type = 'button';
    card.append(
      el('span', 'test-card__n', `${test.number}`),
      el('span', 'test-card__label', `Test ${test.number} of ${test.of}`),
      el('span', 'test-card__note', `${TEST_LENGTH} questions`),
    );
    card.addEventListener('click', () => beginTest(test));
    list.append(card);
  });
  mount.append(list);

  const back = el('button', null, 'Back to the subjects');
  back.type = 'button';
  back.addEventListener('click', () => {
    mount.hidden = true;
    $('#themes').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });
  const footer = el('div', 'picker-foot');
  footer.append(back);
  mount.append(footer);

  mount.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}

// ── The sitting ────────────────────────────────────────────────────────────

function showStage(id) {
  for (const s of ['#stage-picker', '#stage-sitting', '#stage-result']) $(s).hidden = s !== id;
  for (const s of ['#hero', '#about', '#themes', '#long']) $(s).hidden = id !== null;
}

function beginTest(test) {
  state.test = test;
  state.sitting = buildTest(corpus, test);
  state.answers = [];
  state.at = 0;
  showStage('#stage-sitting');
  renderQuestion();
}

function begin() {
  state.test = null;
  state.sitting = buildSitting(corpus, state.track.questions, seedFrom(`${state.track.id}:${Date.now()}`));
  state.answers = [];
  state.at = 0;
  showStage('#stage-sitting');
  renderQuestion();
}

function renderQuestion() {
  const step = state.sitting[state.at];
  if (!step) return finish();

  const { entry, question } = step;
  const n = state.at + 1;
  const total = state.sitting.length;

  $('#progress').style.width = `${((n - 1) / total) * 100}%`;
  $('#counter').textContent = `Question ${n} of ${total}`;
  $('#source-note').textContent = state.test ? state.test.theme.name : entry.tradition.replace(/-/g, ' ');
  $('#origin').textContent = `${entry.title} · ${entry.philosophers[0]}`;
  $('#prompt').textContent = question.prompt;
  $('#back').disabled = state.at === 0;

  const chosen = state.answers.find((a) => a.entryId === entry.id && a.questionId === question.id);

  const mount = $('#options');
  mount.replaceChildren();
  question.options.forEach((option, i) => {
    const button = el('button', 'option');
    button.type = 'button';
    button.setAttribute('aria-pressed', String(chosen?.optionId === option.id));
    button.append(
      el('span', 'option__mark', String.fromCharCode(65 + i)),
      el('span', 'option__body', option.label),
    );
    button.addEventListener('click', () => choose(entry, question, option));
    mount.append(button);
  });

  // Move focus to the prompt so a keyboard or screen-reader user lands on the new
  // question rather than wherever the old option list used to be.
  $('#prompt').setAttribute('tabindex', '-1');
  $('#prompt').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
}

function choose(entry, question, option) {
  state.answers = state.answers.filter((a) => !(a.entryId === entry.id && a.questionId === question.id));
  state.answers.push({ entryId: entry.id, questionId: question.id, optionId: option.id });
  state.at += 1;
  if (state.at >= state.sitting.length) finish();
  else renderQuestion();
}

// ── The verdict ────────────────────────────────────────────────────────────

function section(label) {
  const wrap = el('section', 'sec');
  const head = el('div', 'sec-head');
  head.append(el('h3', null, label), el('div', 'line'));
  wrap.append(head);
  return wrap;
}

function finish() {
  const result = score(corpus, state.answers);
  const cases = verdicts(corpus, state.answers);
  const matches = matchPhilosophers(result, corpus.philosophers);
  const sphere = sphereFor(result);

  showStage('#stage-result');
  const mount = $('#stage-result');
  mount.replaceChildren();

  mount.append(renderVerdictHead(result, matches, sphere));
  mount.append(renderEvidence(result));
  mount.append(renderBench(matches));
  mount.append(renderPlate(result));
  mount.append(renderDispositions(result));
  mount.append(renderCases(cases));

  const foot = el('div', 'result-foot');
  const again = el('button', 'primary', state.test ? 'Another subject' : 'Sit it again');
  again.type = 'button';
  again.addEventListener('click', () => {
    showStage(null);
    $(state.test ? '#themes' : '#long').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  });
  foot.append(again, el('p', 'note',
    `Scored from ${result.answered} answer${result.answered === 1 ? '' : 's'}. ` +
    'Every figure above is a sum of what you clicked.'));
  mount.append(foot);

  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
}

function renderVerdictHead(result, matches, sphere) {
  const wrap = el('div', 'verdict');
  if (!result.lead) {
    wrap.append(el('h2', null, 'Nothing was answered'));
    return wrap;
  }

  const top = matches[0];
  const head = el('div', 'verdict-head');

  const left = el('div');
  left.append(el('p', 'verdict-label', 'The thinker your answers most resemble'));
  left.append(el('h2', 'verdict-name', top.philosopher.name));
  left.append(el('p', 'verdict-role', `${top.philosopher.role} · ${top.philosopher.era}`));
  left.append(el('p', 'verdict-voice', top.philosopher.voice));
  head.append(left);

  const tied = tiedWith(matches);
  const fig = el('div', 'headline-figure');
  const gap = matches[1] ? (top.fit - matches[1].fit) * 100 : null;
  fig.append(
    Object.assign(el('b'), { textContent: pct(top.fit) }),
    el('span', null, 'fit to your profile'),
    el('em', null,
      tied.length ? `${tied.length} other${tied.length === 1 ? '' : 's'} score the same`
        : gap == null ? ''
        : `${gap.toFixed(1)} pts clear of ${matches[1].philosopher.name}`),
  );
  head.append(fig);
  wrap.append(head);

  if (tied.length) {
    const names = tied.slice(0, 4).map((m) => m.philosopher.name);
    wrap.append(el('p', 'verdict-tie',
      `On these answers ${tied.length === 1 ? 'one other thinker is' : `${tied.length} other thinkers are`} `
      + `indistinguishable from ${top.philosopher.name}: ${names.join(', ')}`
      + `${tied.length > names.length ? ', and others' : ''}. That is not a flaw in the match — they `
      + 'differ over what to count rather than over whether counting is the method, and '
      + `${state.sitting.length} questions cannot separate them. A longer sitting can.`));
  }

  const band = el('div', 'sphere');
  band.append(
    el('p', 'sphere__label', 'Your sphere'),
    el('h3', 'sphere__name', sphere.name),
    el('p', 'sphere__line', sphere.line),
    el('p', 'sphere__meta',
      `${nameFor(result)} — ${pct(result.lead.share)} of your answers, ` +
      `${(result.margin * 100).toFixed(1)} points clear of the next.`),
  );
  wrap.append(band);

  if (top.shared.length) {
    wrap.append(el('p', 'verdict-why',
      `Matched on ${top.shared.map((k) => result.frameworks.find((f) => f.key === k).label.toLowerCase()).join(', ')} — ` +
      'the axes you leaned on that this thinker also leans on. Nothing else went into it.'));
  }
  return wrap;
}

/**
 * What was actually said, by whom, about each answer the reader gave.
 *
 * This is the section that makes the verdict checkable. Everything else here is the
 * app's own arithmetic; this is the app showing its working against somebody else's
 * argument — the reader can look the work up and disagree with the attribution.
 *
 * It reports only what the corpus carries. Options nobody cleanly holds have no
 * evidence, and are shown as answered-without-a-champion rather than being quietly
 * dropped, so the section cannot flatter the analysis by hiding its own gaps.
 */
function renderEvidence(result) {
  const wrap = section('Who has argued what you answered');

  const withEvidence = result.resolved.filter((r) => r.option.evidence);
  if (!withEvidence.length) {
    wrap.append(el('p', 'sec-note',
      'None of the answers you gave carry a named advocate in the corpus yet. That is a '
      + 'gap in the entries rather than a comment on your answers.'));
    return wrap;
  }

  const list = el('div', 'evidence');
  for (const { entry, question, option } of withEvidence) {
    const card = el('div', 'ev');
    card.append(el('p', 'ev__q', entry.title));
    card.append(el('p', 'ev__a', `You answered: ${option.label}`));

    const e = option.evidence;
    const head = el('p', 'ev__who');
    head.append(
      Object.assign(el('strong'), { textContent: e.who }),
      el('span', 'ev__work', ` · ${e.work}${e.year ? `, ${e.year}` : ''}`),
    );
    card.append(head);
    card.append(el('p', 'ev__says', e.says));
    list.append(card);
  }
  wrap.append(list);

  const missing = result.resolved.length - withEvidence.length;
  wrap.append(el('p', 'sec-note',
    `${withEvidence.length} of your ${result.resolved.length} answers `
    + `${withEvidence.length === 1 ? 'has' : 'have'} a named thinker who argued something `
    + 'close to it, cited to the work.'
    + (missing ? ` The other ${missing} took positions the corpus does not yet attribute to anyone.` : '')
    + ' These are paraphrases of the argument, not quotations, and the citation is there so '
    + 'you can check whether the attribution is fair.'));
  return wrap;
}

function renderBench(matches) {
  const wrap = section('The rest of the bench');
  const list = el('div', 'bench');
  for (const m of matches.slice(1, 7)) {
    const row = el('div', 'bench__row');
    row.append(
      el('span', 'bench__fit', pct(m.fit)),
      el('span', 'bench__name', m.philosopher.name),
      el('span', 'bench__role', m.philosopher.role),
    );
    list.append(row);
  }
  wrap.append(list);

  const far = matches[matches.length - 1];
  wrap.append(el('p', 'sec-note',
    `Furthest from you on the bench: ${far.philosopher.name} at ${pct(far.fit)}. ` +
    'Fit is the angle between your profile and theirs across the same axes, so it measures ' +
    'the shape of a position rather than how strongly it was held.'));
  return wrap;
}

/**
 * The framework distribution as a Voronoi treemap: area is the share, the leading
 * tradition takes the accent, and the rest step back through one neutral. Magnitude
 * is carried by area and by the printed figure, so the ramp owes nothing — which is
 * what keeps every label legible against its own tile in both themes.
 */
function renderPlate(result) {
  const wrap = section('How your answers divided');

  // A share this small cannot be given a cell you could see, let alone label, and the
  // solver may hand back a degenerate polygon for it. Excluding it here — rather than
  // dropping it silently after layout — keeps the caption's count equal to the number
  // of tiles actually on the plate.
  const FLOOR = 0.02;
  const candidates = result.frameworks.filter((f) => f.share >= FLOOR).slice(0, 8);
  if (candidates.length < 3) {
    wrap.append(el('p', 'sec-note',
      'Too few answers landed on distinct traditions to be worth drawing. The figures below still hold.'));
    return wrap;
  }

  const W = 960, H = 520, I = 5;
  const clip = [[I, I], [W - I, I], [W - I, H - I], [I, H - I]];
  const raw = voronoiTreemap(candidates.map((f) => ({ weight: f.share })), clip, {
    seed: seedFrom(candidates.map((f) => f.key).join('') + result.answered),
  });

  const plotted = candidates.map((f, i) => ({ f, cell: raw[i] }))
    .filter(({ cell }) => cell && cell.polygon.length >= 3);
  const drawn = plotted.map((p) => p.f);
  const layout = plotted.map((p) => p.cell);
  const drawnSum = drawn.reduce((n, f) => n + f.share, 0) || 1;
  const shareOfPlate = (f) => f.share / drawnSum;

  // When the plate holds essentially everything, "x% of the plate" and "x% of your
  // total" are the same number, and printing both is noise wearing the costume of
  // precision. Only distinguish them when they actually differ.
  const partial = drawnSum < 0.995;

  const svg = sv('svg', {
    viewBox: `0 0 ${W} ${H}`, role: 'img',
    'aria-labelledby': 'plate-t plate-d', preserveAspectRatio: 'xMidYMid meet',
  });
  const title = sv('title', { id: 'plate-t' });
  title.textContent = 'How your answers divided across moral traditions';
  const desc = sv('desc', { id: 'plate-d' });
  desc.textContent = partial
    ? `${drawn.length} traditions, holding ${pct(drawnSum)} of your total. `
      + drawn.map((f) => `${f.label}, ${pct(shareOfPlate(f))} of the plate, ${pct(f.share)} overall`).join('. ')
    : `${drawn.length} traditions covering your whole result. `
      + drawn.map((f) => `${f.label}, ${pct(f.share)}`).join('. ');
  svg.append(title, desc);

  const readout = el('div', 'readout');
  const rh = el('h4', null, 'Hover or tab a region');
  const rm = el('p', 'm', 'Area is proportional to share of your answers');
  const rp = el('p', null, '');
  readout.append(rh, rm, rp);
  let on = null;

  const group = sv('g', { role: 'list' });
  layout.forEach((cellLayout, i) => {
    const f = drawn[i];
    const cell = sv('g', {
      class: `cell${i === 0 ? ' cell--lead' : ''}`,
      tabindex: '0', role: 'listitem',
      'aria-label': partial
        ? `${f.label}, rank ${i + 1}: ${pct(shareOfPlate(f))} of the plate, ${pct(f.share)} of your total.`
        : `${f.label}, rank ${i + 1}: ${pct(f.share)} of your answers.`,
    });
    const path = sv('path', {
      class: 'cell__shape',
      d: `M${cellLayout.polygon.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join('L')}Z`,
    });
    path.style.fill = i === 0 ? 'var(--bar-lead)'
      : `color-mix(in oklab, var(--bar) ${44 - i * 3}%, var(--paper-2))`;
    cell.append(path);

    if (cellLayout.area > (W * H) / 22) {
      const [cx, cy] = cellLayout.centroid;
      const text = sv('text', { class: 'cell__label', 'text-anchor': 'middle', x: cx.toFixed(1), y: cy.toFixed(1) });
      const name = sv('tspan', { x: cx.toFixed(1) });
      name.textContent = f.label;
      const figure = sv('tspan', { class: 'cell__pct', x: cx.toFixed(1), dy: '24' });
      figure.textContent = pct(partial ? shareOfPlate(f) : f.share);
      text.append(name, figure);
      cell.append(text);
    }

    const show = () => {
      on?.classList.remove('is-on');
      cell.classList.add('is-on');
      on = cell;
      rh.textContent = f.label;
      rm.textContent = partial
        ? `rank ${i + 1} · ${pct(shareOfPlate(f))} of the plate · ${pct(f.share)} of your total`
        : `rank ${i + 1} of ${drawn.length} · ${pct(f.share)} of your answers`;
      rp.textContent = f.gloss;
    };
    const off = () => {
      on?.classList.remove('is-on');
      on = null;
      rh.textContent = 'Hover or tab a region';
      rm.textContent = 'Area is proportional to share of your answers';
      rp.textContent = '';
    };
    cell.addEventListener('pointerenter', show);
    cell.addEventListener('focus', show);
    cell.addEventListener('pointerleave', off);
    cell.addEventListener('blur', off);
    group.append(cell);
  });
  svg.append(group);

  const plate = el('div', 'plate');
  plate.append(svg, readout);
  wrap.append(plate);
  wrap.append(el('p', 'sec-note', partial
    ? `The plate shows the ${drawn.length} traditions large enough to draw, holding ${pct(drawnSum)} `
      + "of your total. Each tile's percentage is its share of this plate."
    : `All ${drawn.length} traditions your answers reached. Each tile's percentage is its share of `
      + 'your result, and its area is that same figure.'));
  return wrap;
}

function renderDispositions(result) {
  const wrap = section('Your temperament, independent of tradition');
  const answered = result.dispositions.filter((d) => d.answered > 0);
  if (!answered.length) {
    wrap.append(el('p', 'sec-note', 'None of the questions you answered scored these axes.'));
    return wrap;
  }

  const list = el('div', 'dispositions');
  for (const d of answered) {
    const row = el('div', 'disp');
    const head = el('div', 'disp__head');
    head.append(el('span', 'disp__name', d.label), el('span', null, `${d.value >= 0 ? '+' : ''}${d.value.toFixed(2)}`));

    const track = el('div', 'disp__track');
    const fill = el('div', 'disp__fill');
    const width = Math.min(50, Math.abs(d.value) * 50);
    fill.dataset.sign = d.value >= 0 ? 'pos' : 'neg';
    if (d.value >= 0) { fill.style.left = '50%'; fill.style.width = `${width}%`; }
    else { fill.style.right = '50%'; fill.style.width = `${width}%`; }
    track.append(fill);

    const poles = el('div', 'disp__poles');
    poles.append(el('span', null, d.low), el('span', null, d.high));
    row.append(head, track, poles);
    list.append(row);
  }
  wrap.append(list);
  wrap.append(el('p', 'sec-note',
    'These are averages, not totals — a longer sitting measures the same disposition more '
    + 'reliably rather than making it look stronger. Zero is the centre line, not an absence of view.'));
  return wrap;
}

function renderCases(cases) {
  const wrap = section('The cases you were put to');
  const list = el('div', 'cases');
  for (const v of cases) {
    const card = el('div', 'case');
    const head = el('div', 'case__head');
    head.append(
      el('h4', 'case__title', v.entry.title),
      el('span', 'case__who', `${v.entry.philosophers[0]} · ${v.entry.era}`),
    );
    card.append(head, el('p', 'case__band', v.outcome.label), el('p', 'case__text', v.outcome.text));
    if (v.contested && v.runnerUp) {
      card.append(el('p', 'case__flag', `Close — you were nearly "${v.runnerUp.label}" on this one`));
    }
    list.append(card);
  }
  wrap.append(list);
  wrap.append(el('p', 'sec-note',
    'Scored per case, because each band was written about that particular dilemma. Landing '
    + 'somewhere different here than in your overall result is not an inconsistency — it is '
    + 'where the case pulled against your usual instinct.'));
  return wrap;
}

// ── Wiring ─────────────────────────────────────────────────────────────────

$('#begin').addEventListener('click', begin);
$('#back').addEventListener('click', () => {
  if (state.at > 0) { state.at -= 1; renderQuestion(); }
});
$('#hero-random').addEventListener('click', () => {
  if (!READY.length) return;
  const theme = READY[Math.floor(Math.random() * READY.length)];
  const tests = testsFor(corpus, theme.id);
  beginTest(tests[Math.floor(Math.random() * tests.length)]);
});

renderFront();
heroField();
