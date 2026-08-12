/**
 * The Test of Morality — the whole application.
 *
 * Three stages: choose a sitting, answer it, read the verdict. No network calls, no
 * persistence, no account. The corpus is compiled into the bundle and the scoring is
 * arithmetic, so the test works with the wifi off and cannot leak what you answered.
 */

import corpusData from '../corpus.generated.json';
import { voronoiTreemap } from '../voronoi.js';
import { score, verdicts, nameFor } from './scoring.js';
import { buildSitting, capacity, seedFrom, TRACKS } from './select.js';

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

const state = {
  track: TRACKS[1],
  sitting: [],
  answers: [],
  at: 0,
};

const MAX = capacity(corpus);

// ── Stage: the desk ────────────────────────────────────────────────────────

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
    button.addEventListener('click', () => {
      state.track = track;
      renderTracks();
    });
    mount.append(button);
  }
}

function renderIntro() {
  const { written, planned, questions, philosophers, traditions } = corpus;
  $('#imprint').textContent =
    `${written} of ${planned} entries written · ${philosophers} thinkers · ${traditions} traditions`;
  $('#corpus-note').textContent =
    `${questions} questions available. Nothing is sent anywhere.`;
  $('#foot-count').textContent = `${written}`;
  renderTracks();
}

// ── Stage: the sitting ─────────────────────────────────────────────────────

function begin() {
  const seed = seedFrom(`${state.track.id}:${Date.now()}`);
  state.sitting = buildSitting(corpus, state.track.questions, seed);
  state.answers = [];
  state.at = 0;
  $('#stage-intro').hidden = true;
  $('#stage-result').hidden = true;
  $('#stage-sitting').hidden = false;
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
  $('#source-note').textContent = entry.tradition.replace(/-/g, ' ');
  $('#origin').textContent = `${entry.title} · ${entry.philosophers[0]}`;
  $('#prompt').textContent = question.prompt;
  $('#back').disabled = state.at === 0;

  const chosen = state.answers.find(
    (a) => a.entryId === entry.id && a.questionId === question.id,
  );

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
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function choose(entry, question, option) {
  state.answers = state.answers.filter(
    (a) => !(a.entryId === entry.id && a.questionId === question.id),
  );
  state.answers.push({ entryId: entry.id, questionId: question.id, optionId: option.id });
  state.at += 1;
  if (state.at >= state.sitting.length) finish();
  else renderQuestion();
}

// ── Stage: the verdict ─────────────────────────────────────────────────────

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

  $('#stage-sitting').hidden = true;
  const mount = $('#stage-result');
  mount.hidden = false;
  mount.replaceChildren();

  // ── headline ──
  const head = el('div', 'verdict-head');
  const left = el('div');
  left.append(el('h2', null, nameFor(result)));
  left.append(el('p', 'gloss', result.lead ? result.lead.gloss : 'Nothing was answered.'));
  head.append(left);

  if (result.lead) {
    const fig = el('div', 'headline-figure');
    const runnerUp = result.frameworks[1];
    fig.append(
      Object.assign(el('b'), { textContent: pct(result.lead.share) }),
      el('span', null, `${result.lead.label.toLowerCase()} of your answers`),
      el('em', null,
        runnerUp && runnerUp.share > 0
          ? `${(result.margin * 100).toFixed(1)} pts clear of ${runnerUp.label.toLowerCase()}`
          : ''),
    );
    head.append(fig);
  }
  mount.append(head);

  mount.append(renderPlate(result));
  mount.append(renderDispositions(result));
  mount.append(renderCases(cases));

  const foot = el('div', 'result-foot');
  const again = el('button', null, 'Sit it again');
  again.type = 'button';
  again.addEventListener('click', () => {
    $('#stage-result').hidden = true;
    $('#stage-intro').hidden = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  foot.append(again, el('p', 'note',
    `Scored from ${result.answered} answer${result.answered === 1 ? '' : 's'}. ` +
    'Every figure above is a sum of what you clicked.'));
  mount.append(foot);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * The framework distribution as a Voronoi treemap: area is the share, and the
 * assigned tradition takes the accent while the rest step back through one neutral.
 * Magnitude is carried by area and by the printed figure, so the ramp owes nothing —
 * which is what keeps every label legible against its own tile in both themes.
 */
function renderPlate(result) {
  const wrap = section('The distribution of your answers');

  // A share this small cannot be given a cell you could see, let alone label, and the
  // solver may hand back a degenerate polygon for it. Excluding it here — rather than
  // silently dropping it after layout — is what keeps the caption's count equal to the
  // number of tiles actually on the plate.
  const FLOOR = 0.02;
  const candidates = result.frameworks.filter((f) => f.share >= FLOOR).slice(0, 8);

  if (candidates.length < 3) {
    wrap.append(el('p', 'plate-note',
      'Too few answers landed on distinct traditions to be worth drawing. The figures below still hold.'));
    return wrap;
  }

  const W = 960, H = 540, I = 5;
  const clip = [[I, I], [W - I, I], [W - I, H - I], [I, H - I]];
  const rawLayout = voronoiTreemap(candidates.map((f) => ({ weight: f.share })), clip, {
    seed: seedFrom(candidates.map((f) => f.key).join('') + result.answered),
  });

  // Pair each tradition with its cell and keep only what really drew, so every figure
  // printed below describes the plate the reader is looking at.
  const plotted = candidates
    .map((f, i) => ({ f, cell: rawLayout[i] }))
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
    'aria-labelledby': 'plate-t plate-d',
    preserveAspectRatio: 'xMidYMid meet',
  });
  const title = sv('title', { id: 'plate-t' });
  title.textContent = 'How your answers divided across moral traditions';
  const desc = sv('desc', { id: 'plate-d' });
  desc.textContent = partial
    ? `${drawn.length} traditions, holding ${pct(drawnSum)} of your total score. ` +
      drawn.map((f) => `${f.label}, ${pct(shareOfPlate(f))} of the plate, ${pct(f.share)} overall`).join('. ') +
      '. Area is proportional to the first figure.'
    : `${drawn.length} traditions covering your whole result. ` +
      drawn.map((f) => `${f.label}, ${pct(f.share)}`).join('. ') +
      '. Area is proportional to the percentage.';
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
    if (cellLayout.polygon.length < 3) return;

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
    path.style.fill = i === 0
      ? 'var(--bar-lead)'
      : `color-mix(in oklab, var(--bar) ${44 - i * 3}%, var(--paper-2))`;
    cell.append(path);

    if (cellLayout.area > (W * H) / 22) {
      const [cx, cy] = cellLayout.centroid;
      const text = sv('text', {
        class: 'cell__label', 'text-anchor': 'middle',
        x: cx.toFixed(1), y: cy.toFixed(1),
      });
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
  wrap.append(el('p', 'plate-note', partial
    ? `The plate shows the ${drawn.length} traditions with a large enough share to draw, which hold `
      + `${pct(drawnSum)} of your total between them. Each tile's percentage is its share of this `
      + 'plate; the share of your whole result is in the readout.'
    : `The plate shows all ${drawn.length} traditions your answers reached. Each tile's `
      + 'percentage is its share of your whole result, and its area is that same figure.'));
  return wrap;
}

function renderDispositions(result) {
  const wrap = section('Your temperament, independent of tradition');
  const list = el('div', 'dispositions');

  const answered = result.dispositions.filter((d) => d.answered > 0);
  if (!answered.length) {
    wrap.append(el('p', 'plate-note', 'None of the questions you answered scored these axes.'));
    return wrap;
  }

  for (const d of answered) {
    const row = el('div', 'disp');
    const head = el('div', 'disp__head');
    head.append(
      el('span', 'disp__name', d.label),
      el('span', null, `${d.value >= 0 ? '+' : ''}${d.value.toFixed(2)}`),
    );

    const track = el('div', 'disp__track');
    const fill = el('div', 'disp__fill');
    const width = Math.min(50, Math.abs(d.value) * 50);
    fill.dataset.sign = d.value >= 0 ? 'pos' : 'neg';
    if (d.value >= 0) {
      fill.style.left = '50%';
      fill.style.width = `${width}%`;
    } else {
      fill.style.right = '50%';
      fill.style.width = `${width}%`;
    }
    track.append(fill);

    const poles = el('div', 'disp__poles');
    poles.append(el('span', null, d.low), el('span', null, d.high));

    row.append(head, track, poles);
    list.append(row);
  }

  wrap.append(list);
  wrap.append(el('p', 'plate-note',
    'These are averages, not totals — a longer sitting measures the same disposition more ' +
    'reliably rather than making it look stronger. Zero is the centre line, not an absence of view.'));
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
    card.append(head);
    card.append(el('p', 'case__band', v.outcome.label));
    card.append(el('p', 'case__text', v.outcome.text));
    if (v.contested && v.runnerUp) {
      card.append(el('p', 'case__flag',
        `Close — you were nearly "${v.runnerUp.label}" on this one`));
    }
    list.append(card);
  }

  wrap.append(list);
  wrap.append(el('p', 'plate-note',
    'Scored per case rather than globally, because each band was written about that ' +
    'particular dilemma. Landing somewhere different here than in your overall result ' +
    'is not an inconsistency — it is where the case pulled against your usual instinct.'));
  return wrap;
}

// ── Wiring ─────────────────────────────────────────────────────────────────

$('#begin').addEventListener('click', begin);
$('#back').addEventListener('click', () => {
  if (state.at > 0) {
    state.at -= 1;
    renderQuestion();
  }
});

renderIntro();
