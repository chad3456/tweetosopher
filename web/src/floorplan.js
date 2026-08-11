/**
 * Renders the Voronoi treemap as museum floor-plan marquetry.
 *
 * Encoding, one channel one job:
 *
 *   area   — how much of the corpus the claim rests on (cited items)
 *   colour — a diverging scale: their own words ← mixed → things they amplified
 *   label  — identity, printed in the cell along with the exact figure
 *
 * The colour scale is stepped rather than continuous. Seven discrete steps are
 * read more accurately than a gradient and give the legend something to be a key
 * *for*; "equal steps per arm" is also what a diverging ramp is supposed to be.
 *
 * Area is a soft channel, so identity and magnitude never depend on it alone:
 * every cell carries its own label and count, and the table view underneath is
 * the exact same data in a form you can read a number off.
 */

import { voronoiTreemap, buildTerritories } from './voronoi.js';

const NS = 'http://www.w3.org/2000/svg';
const svgEl = (tag, attrs = {}) => {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
};
const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

const W = 960;
const H = 620;
const INSET = 6;

/**
 * polarity (−1 own voice … +1 amplified) → one of seven step classes.
 *
 * Rounded symmetrically about zero. `Math.round` alone breaks ties toward +∞,
 * so −1.5 → −1 while +1.5 → +2: a cell that is 6-own/2-amplified would land one
 * step *paler* than its mirror image, and the two arms of a diverging scale
 * would not be equal. They must be.
 */
export function stepFor(polarity) {
  const p = Math.max(-1, Math.min(1, polarity));
  const step = Math.sign(p) * Math.round(Math.abs(p) * 3); // −3 … +3
  return step < 0 ? `voice-${-step}` : step > 0 ? `taste-${step}` : 'mixed';
}

const SCALE_KEY = [
  { cls: 'voice-3', label: 'Entirely their own words' },
  { cls: 'voice-2', label: '' },
  { cls: 'voice-1', label: '' },
  { cls: 'mixed', label: 'Mixed' },
  { cls: 'taste-1', label: '' },
  { cls: 'taste-2', label: '' },
  { cls: 'taste-3', label: 'Entirely things they amplified' },
];

const KIND_NOTE = {
  assignment: 'the assignment',
  theme: 'preoccupation',
  tension: 'contradiction',
};

/** A deterministic seed, so one subject always gets the same floor plan. */
function seedFrom(text) {
  let h = 2166136261;
  for (const ch of String(text ?? '')) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * @param {HTMLElement} mount
 * @param {object} verdict hydrated verdict, including `citations`
 * @returns {HTMLElement|null} null when there is nothing worth drawing
 */
export function renderFloorPlan(mount, verdict) {
  const cells = buildTerritories(verdict);

  // Below three territories a partition says nothing a sentence would not say
  // better — so draw nothing rather than dress up two rectangles as analysis.
  if (cells.length < 3) return null;

  const clip = [
    [INSET, INSET],
    [W - INSET, INSET],
    [W - INSET, H - INSET],
    [INSET, H - INSET],
  ];

  const layout = voronoiTreemap(cells, clip, {
    seed: seedFrom(verdict.subject?.handle ?? verdict.nameTag),
  });

  const figure = el('figure', 'floorplan');

  const svg = svgEl('svg', {
    viewBox: `0 0 ${W} ${H}`,
    role: 'img',
    'aria-labelledby': 'floorplan-title floorplan-desc',
    preserveAspectRatio: 'xMidYMid meet',
  });

  const totalCitations = cells.reduce((s, c) => s + c.weight, 0);
  svg.append(
    svgEl('title', { id: 'floorplan-title' }),
    svgEl('desc', { id: 'floorplan-desc' }),
  );
  svg.querySelector('title').textContent = 'Floor plan of the collection';
  svg.querySelector('desc').textContent =
    `A partition of ${totalCitations} cited items into ${cells.length} territories. ` +
    cells
      .map((c) => `${c.label}: ${c.weight} items, ${c.own} in their own words, ${c.amplified} amplified`)
      .join('. ') +
    '. The same figures are in the table below.';

  const plate = svgEl('g', { class: 'floorplan__cells' });

  let active = null;
  const tooltip = el('div', 'floorplan__tip');
  tooltip.hidden = true;

  const show = (cell, node) => {
    active?.classList.remove('is-active');
    node.classList.add('is-active');
    active = node;

    tooltip.replaceChildren();
    tooltip.append(el('p', 'floorplan__tip-name', cell.label));
    tooltip.append(
      el(
        'p',
        'floorplan__tip-meta',
        `${KIND_NOTE[cell.kind]} · ${cell.weight} cited item${cell.weight === 1 ? '' : 's'} · ` +
          `${cell.own} their words, ${cell.amplified} amplified`,
      ),
    );
    if (cell.detail) tooltip.append(el('p', 'floorplan__tip-detail', cell.detail));
    tooltip.hidden = false;
  };

  const hide = () => {
    active?.classList.remove('is-active');
    active = null;
    tooltip.hidden = true;
  };

  layout.forEach((cellLayout, i) => {
    const cell = cells[i];
    if (cellLayout.polygon.length < 3) return;

    const group = svgEl('g', {
      class: `floorplan__cell floorplan__cell--${stepFor(cell.polarity)}`,
      tabindex: '0',
      role: 'listitem',
      'aria-label':
        `${cell.label}: ${cell.weight} cited items, ` +
        `${cell.own} in their own words, ${cell.amplified} amplified.`,
    });

    group.append(
      svgEl('path', {
        class: 'floorplan__shape',
        d: `M${cellLayout.polygon.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join('L')}Z`,
      }),
    );

    // Label only where it fits. A leader line into a sliver is worse than the
    // table row that is already there.
    const [cx, cy] = cellLayout.centroid;
    if (cellLayout.area > (W * H) / 26) {
      const words = cell.label.split(' ');
      const lines = [];
      let line = '';
      for (const word of words) {
        if ((line + ' ' + word).trim().length > 16 && line) {
          lines.push(line.trim());
          line = word;
        } else {
          line = `${line} ${word}`.trim();
        }
      }
      if (line) lines.push(line);

      const text = svgEl('text', {
        class: 'floorplan__label',
        x: cx.toFixed(1),
        y: (cy - (lines.length - 1) * 11).toFixed(1),
        'text-anchor': 'middle',
      });
      for (const [n, l] of lines.entries()) {
        const tspan = svgEl('tspan', { x: cx.toFixed(1), dy: n === 0 ? 0 : 22 });
        tspan.textContent = l;
        text.append(tspan);
      }
      const count = svgEl('tspan', {
        x: cx.toFixed(1),
        dy: 24,
        class: 'floorplan__count',
      });
      count.textContent = `${cell.weight} cited`;
      text.append(count);
      group.append(text);
    }

    group.addEventListener('pointerenter', () => show(cell, group));
    group.addEventListener('focus', () => show(cell, group));
    group.addEventListener('pointerleave', hide);
    group.addEventListener('blur', hide);

    plate.append(group);
  });

  plate.setAttribute('role', 'list');
  svg.append(plate);

  const stage = el('div', 'floorplan__stage');
  stage.append(svg, tooltip);
  figure.append(stage);

  // ── Legend ────────────────────────────────────────────────────────────
  const legend = el('div', 'floorplan__legend');
  const ramp = el('div', 'floorplan__ramp');
  for (const step of SCALE_KEY) {
    const swatch = el('span', `floorplan__swatch floorplan__swatch--${step.cls}`);
    if (step.label) swatch.title = step.label;
    ramp.append(swatch);
  }
  legend.append(
    el('span', 'floorplan__legend-end', 'their own words'),
    ramp,
    el('span', 'floorplan__legend-end', 'what they amplified'),
  );
  figure.append(legend);

  figure.append(
    el(
      'figcaption',
      'floorplan__caption',
      `Each room is a claim the panel made, sized by how many cited items it rests on ` +
        `(${totalCitations} in total) and shaded by whether that evidence is the subject speaking ` +
        `or endorsing. Hover a room for its evidence.`,
    ),
  );

  // ── Table view ────────────────────────────────────────────────────────
  const details = el('details', 'floorplan__table');
  details.append(el('summary', null, 'Read as a table'));

  const table = el('table');
  const thead = el('thead');
  const hrow = el('tr');
  for (const h of ['Territory', 'Kind', 'Cited items', 'Own words', 'Amplified', 'Share']) {
    hrow.append(el('th', null, h));
  }
  thead.append(hrow);
  table.append(thead);

  const tbody = el('tbody');
  for (const cell of [...cells].sort((a, b) => b.weight - a.weight)) {
    const row = el('tr');
    row.append(
      el('td', null, cell.label),
      el('td', null, KIND_NOTE[cell.kind]),
      el('td', 'num', String(cell.weight)),
      el('td', 'num', String(cell.own)),
      el('td', 'num', String(cell.amplified)),
      el('td', 'num', `${Math.round((cell.weight / totalCitations) * 100)}%`),
    );
    tbody.append(row);
  }
  table.append(tbody);
  details.append(table);
  figure.append(details);

  mount.append(figure);
  return figure;
}
