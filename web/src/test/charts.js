/**
 * Chart builders for the Selective Outrage result.
 *
 * Inline SVG, no library, theme-aware through CSS custom properties rather than baked
 * hexes — the page is served in light and dark and the marks have to be selected for
 * each rather than flipped.
 *
 * The palette is a diverging pair (blue ↔ red, neutral gray midpoint) because what is
 * being encoded is polarity: which of two actors you were harsher on. It is not
 * identity, so it is not the categorical ramp. Both modes were validated rather than
 * eyeballed — the site's own --pos/--neg were the obvious first choice and failed hard
 * (ΔE 2.4 under deuteranopia, 10.7 even with full colour vision), which is exactly the
 * collapse that only shows up if you measure. The steps below pass all six checks on
 * this page's own surfaces:
 *
 *   light  #2a78d6 / #e34948 on #e3e6eb — CVD ΔE 21.6, normal 32.3, contrast ≥ 3:1
 *   dark   #3987e5 / #e66767 on #1c1f26 — CVD ΔE 19.2, normal 29.0, contrast ≥ 3:1
 *
 * Colour is never the only channel: the two hues identify which version of an act a dot
 * belongs to, the gap between them is a position, every real gap carries a direct
 * numeric label, and a table view sits under the chart with the actors named in full.
 */

const NS = 'http://www.w3.org/2000/svg';

const svgEl = (tag, attrs = {}) => {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
};
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

/** One tooltip element per chart, positioned against the chart's own box. */
function withTooltip(figure, svg) {
  const tip = el('div', 'chart__tip');
  tip.hidden = true;
  figure.append(tip);
  const show = (target, html) => {
    tip.replaceChildren(...html);
    tip.hidden = false;
    const box = figure.getBoundingClientRect();
    const mark = target.getBoundingClientRect();
    tip.style.left = `${Math.round(mark.left - box.left + mark.width / 2)}px`;
    tip.style.top = `${Math.round(mark.top - box.top)}px`;
  };
  const hide = () => { tip.hidden = true; };
  svg.addEventListener('pointerleave', hide);
  return { show, hide };
}

/**
 * The paired-gap chart: one row per case, a dot for each actor, a connector between.
 *
 * A dumbbell rather than grouped bars because the quantity the reader needs to see is
 * the distance between two values, and a connector shows a distance where two bar
 * lengths make you subtract them by eye.
 */
export function gapChart(pairs, scale, opts = {}) {
  const figure = el('figure', 'chart');
  if (!pairs.length) return figure;

  const rows = [...pairs].sort((a, b) => b.gap - a.gap);
  const ROW = 34;
  const PAD = { t: 34, r: 16, b: 30, l: 168 };
  const W = 640;
  const plotW = W - PAD.l - PAD.r;
  const H = PAD.t + rows.length * ROW + PAD.b;
  const x = (v) => PAD.l + ((v - 1) / (scale.length - 1)) * plotW;

  const svg = svgEl('svg', {
    viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img',
    'aria-label': `Your two ratings for each of ${rows.length} cases, with the gap between them.`,
  });

  // Recessive grid, one line per scale point, labelled at the ends only.
  for (const s of scale) {
    svg.append(svgEl('line', {
      x1: x(s.value), x2: x(s.value), y1: PAD.t - 12, y2: H - PAD.b + 4, class: 'chart__grid',
    }));
    const t = svgEl('text', { x: x(s.value), y: H - PAD.b + 18, class: 'chart__axis', 'text-anchor': 'middle' });
    t.textContent = String(s.value);
    svg.append(t);
  }
  const capL = svgEl('text', { x: PAD.l, y: PAD.t - 20, class: 'chart__axis', 'text-anchor': 'start' });
  capL.textContent = scale[0].label;
  const capR = svgEl('text', { x: PAD.l + plotW, y: PAD.t - 20, class: 'chart__axis', 'text-anchor': 'end' });
  capR.textContent = scale[scale.length - 1].label;
  svg.append(capL, capR);

  const tip = withTooltip(figure, svg);

  rows.forEach((p, i) => {
    const y = PAD.t + i * ROW + ROW / 2;

    const label = svgEl('text', { x: PAD.l - 14, y: y + 4, class: 'chart__row', 'text-anchor': 'end' });
    label.textContent = p.item.id;
    svg.append(label);

    // Connector first, so the markers sit on top of it with their surface rings. It is
    // deliberately neutral: the two hues already mean "which version", and colouring
    // the bar by which version you favoured would make the same blue mean two things
    // in the same picture. Direction is carried by which dot sits further right.
    svg.append(svgEl('line', {
      x1: x(p.a), x2: x(p.b), y1: y, y2: y, class: 'chart__link',
    }));

    for (const [armIdx, value] of [[0, p.a], [1, p.b]]) {
      const arm = p.item.arms[armIdx];
      const g = svgEl('g', { class: 'chart__markg', tabindex: '0', role: 'button' });
      g.append(svgEl('circle', {
        cx: x(value), cy: y, r: 6,
        class: `chart__mark chart__mark--${armIdx === 0 ? 'a' : 'b'}`,
      }));
      // Generous invisible hit target — the visible mark is 12px across, the target 26.
      g.append(svgEl('circle', { cx: x(value), cy: y, r: 13, class: 'chart__hit' }));
      const say = () => tip.show(g, [
        el('strong', null, arm.actor),
        el('span', null, `${p.item.act}.`),
        el('em', null, `You said: ${scale.find((s) => s.value === value)?.label ?? value}`),
      ]);
      g.addEventListener('pointerenter', say);
      g.addEventListener('focus', say);
      g.addEventListener('blur', tip.hide);
      svg.append(g);
    }

    // Direct label on the gap, so the magnitude never depends on reading the colour.
    if (p.real) {
      const mid = (x(p.a) + x(p.b)) / 2;
      const t = svgEl('text', { x: mid, y: y - 11, class: 'chart__val', 'text-anchor': 'middle' });
      t.textContent = `${p.gap.toFixed(0)}`;
      svg.append(t);
    }
  });

  figure.append(svg);
  if (opts.caption) figure.append(el('figcaption', 'chart__cap', opts.caption));
  return figure;
}

/**
 * The field: severity against selectivity, with the tag regions drawn and the reader
 * placed on it. A single point is not a chart, but a single point on a labelled field
 * is — what it shows is not where you are so much as what the other results would have
 * required, which is the thing that makes the tag falsifiable.
 */
export function fieldChart(result, tags) {
  const figure = el('figure', 'chart');
  const W = 520, H = 340;
  const PAD = { t: 20, r: 20, b: 46, l: 58 };
  const plotW = W - PAD.l - PAD.r, plotH = H - PAD.t - PAD.b;
  // A mean gap of 4 is arithmetically possible and would mean every pair was rated 1
  // and 5. Scaling to that squeezes the band everyone actually lands in — under one
  // scale point — into a sixth of the width, so the axis stops at 2.5 and a result
  // beyond it is pinned to the edge and labelled with its true value.
  const MAXSEL = 2.5;
  const x = (v) => PAD.l + (Math.min(v, MAXSEL) / MAXSEL) * plotW;
  const y = (v) => PAD.t + plotH - ((v - 1) / 4) * plotH;

  const svg = svgEl('svg', {
    viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img',
    'aria-label': 'Where your result sits on the field of severity against selectivity.',
  });

  // Two of the six results are not regions of this plane: they occupy the same area as
  // their neighbours and are separated by a third condition, whether the gaps repeat a
  // political direction. Drawing them as plain rectangles would claim the plane decides
  // them, which it does not — so they appear only when they are the reader's own result,
  // where leaving them out would put the dot in a box that disagrees with the verdict.
  const planar = tags.filter((t) => !t.favoursNeeded);

  // Scoring is first-match-wins, so a broad region is only ever reached where the
  // narrower ones declared before it did not match. Drawing the declared band would
  // paint over those corners and bury their labels; what gets drawn is the residual —
  // the part of each band no earlier tag has already claimed.
  const claimed = [];
  const bands = [];
  for (const t of planar) {
    const sel = t.when.selectivity ?? [0, MAXSEL];
    let [lo, hi] = t.when.severity ?? [1, 5];
    for (const c of claimed) {
      if (c.sel[0] !== sel[0] || c.sel[1] !== sel[1]) continue;
      if (c.sev[0] <= lo && c.sev[1] > lo) lo = c.sev[1];
      if (c.sev[1] >= hi && c.sev[0] < hi) hi = c.sev[0];
    }
    claimed.push({ sel, sev: t.when.severity ?? [1, 5] });
    if (hi > lo) bands.push({ tag: t, sel, sev: [lo, hi] });
  }

  // The reader's own region, when it is one of the conditional pair, drawn beneath the
  // planar bands so its label does not collide with theirs.
  const mine = result.tag?.favoursNeeded ? result.tag : null;
  if (mine) {
    const sel = mine.when.selectivity ?? [0, MAXSEL];
    const sev = mine.when.severity ?? [1, 5];
    bands.push({ tag: mine, sel, sev, conditional: true });
  }

  for (const band of bands) {
    const x0 = x(band.sel[0]), x1 = x(Math.min(band.sel[1], MAXSEL));
    const y0 = y(Math.min(band.sev[1], 5)), y1 = y(Math.max(band.sev[0], 1));
    const on = result.tag?.id === band.tag.id;
    svg.append(svgEl('rect', {
      x: x0 + 1, y: y0 + 1, width: Math.max(0, x1 - x0 - 2), height: Math.max(0, y1 - y0 - 2),
      class: `chart__region${on ? ' is-on' : ''}${band.conditional ? ' is-conditional' : ''}`,
    }));
    const lab = svgEl('text', {
      x: x0 + 9, y: y0 + 17, class: `chart__region-label${on ? ' is-on' : ''}`,
    });
    lab.textContent = band.tag.name;
    svg.append(lab);
  }

  svg.append(svgEl('line', { x1: PAD.l, x2: PAD.l, y1: PAD.t, y2: PAD.t + plotH, class: 'chart__grid' }));
  svg.append(svgEl('line', { x1: PAD.l, x2: PAD.l + plotW, y1: PAD.t + plotH, y2: PAD.t + plotH, class: 'chart__grid' }));

  const ax = svgEl('text', { x: PAD.l + plotW / 2, y: H - 22, class: 'chart__axis', 'text-anchor': 'middle' });
  ax.textContent = 'How much the actor moved you →';
  const ay = svgEl('text', {
    x: 16, y: PAD.t + plotH / 2, class: 'chart__axis', 'text-anchor': 'middle',
    transform: `rotate(-90 16 ${PAD.t + plotH / 2})`,
  });
  ay.textContent = 'How harsh →';
  svg.append(ax, ay);

  if (result.complete) {
    const pinned = result.selectivity > MAXSEL;
    // Kept off the frame so a result at the extreme is still a whole dot rather than a
    // half one bleeding over the border.
    const cx = Math.min(x(result.selectivity), PAD.l + plotW - 10);
    const cy = y(result.severity);
    svg.append(svgEl('circle', { cx, cy, r: 9, class: 'chart__you-ring' }));
    svg.append(svgEl('circle', { cx, cy, r: 5, class: 'chart__you' }));
    const right = cx > PAD.l + plotW * 0.6;
    const t = svgEl('text', {
      x: cx + (right ? -14 : 14), y: cy + 4, class: 'chart__you-label',
      'text-anchor': right ? 'end' : 'start',
    });
    t.textContent = pinned ? `You (${result.selectivity.toFixed(1)})` : 'You';
    svg.append(t);
  }

  figure.append(svg);
  const conditional = tags.filter((t) => t.favoursNeeded);
  if (conditional.length) {
    figure.append(el('figcaption', 'chart__cap',
      `${conditional.map((t) => t.name).join(' and ')} occupy the right-hand half too, and are `
      + 'not decided by position: they additionally require your gaps to repeat a political '
      + 'direction. Without one, a right-hand result is '
      + `${planar.find((t) => (t.when.selectivity ?? [0])[0] > 0)?.name ?? 'the non-directional tag'}.`));
  }
  return figure;
}

/** Mean gap by what the case varied. Bars, because the job is comparing magnitudes. */
export function axisChart(rows, labels) {
  const figure = el('figure', 'chart');
  if (!rows.length) return figure;
  const ROW = 30;
  const PAD = { t: 10, r: 44, b: 26, l: 210 };
  const W = 560;
  const plotW = W - PAD.l - PAD.r;
  const H = PAD.t + rows.length * ROW + PAD.b;
  const max = Math.max(1, ...rows.map((r) => r.mean));

  const svg = svgEl('svg', {
    viewBox: `0 0 ${W} ${H}`, class: 'chart__svg', role: 'img',
    'aria-label': 'Your average gap, grouped by what each pair of cases varied.',
  });

  rows.forEach((r, i) => {
    const y = PAD.t + i * ROW;
    const w = Math.max(2, (r.mean / max) * plotW);
    const label = svgEl('text', { x: PAD.l - 14, y: y + ROW / 2 + 4, class: 'chart__row', 'text-anchor': 'end' });
    label.textContent = labels[r.axis] ?? r.axis;
    svg.append(label);
    svg.append(svgEl('rect', {
      x: PAD.l, y: y + 7, width: w, height: ROW - 14, rx: 4, class: 'chart__bar',
    }));
    const v = svgEl('text', { x: PAD.l + w + 8, y: y + ROW / 2 + 4, class: 'chart__val' });
    v.textContent = r.mean.toFixed(1);
    svg.append(v);
  });

  const ax = svgEl('text', { x: PAD.l, y: H - 6, class: 'chart__axis' });
  ax.textContent = 'Mean gap, in scale points';
  svg.append(ax);
  figure.append(svg);
  return figure;
}

/** The table view. Required, not optional: colour is never the only route to the data. */
export function gapTable(pairs, scale) {
  const wrap = el('details', 'chart__table');
  wrap.append(el('summary', null, 'The same data as a table'));
  const table = el('table');
  const head = el('tr');
  for (const h of ['Case', 'Actor', 'You said', 'Other actor', 'You said', 'Gap']) head.append(el('th', null, h));
  // `append` returns undefined, so the head element is built and kept, never chained.
  const thead = el('thead');
  thead.append(head);
  table.append(thead);
  const body = el('tbody');
  const name = (v) => scale.find((s) => s.value === v)?.label ?? String(v);
  for (const p of [...pairs].sort((a, b) => b.gap - a.gap)) {
    const tr = el('tr');
    tr.append(
      el('td', null, p.item.id),
      el('td', null, p.item.arms[0].actor),
      el('td', null, name(p.a)),
      el('td', null, p.item.arms[1].actor),
      el('td', null, name(p.b)),
      el('td', null, p.gap.toFixed(0)),
    );
    body.append(tr);
  }
  table.append(body);
  wrap.append(table);
  return wrap;
}

/** Legend. Present whenever two series are drawn — identity is never colour alone. */
export function gapLegend(items) {
  const box = el('div', 'chart__legend');
  for (const [cls, label] of items) {
    const row = el('span', 'chart__legend-item');
    row.append(el('span', `chart__swatch chart__swatch--${cls}`), el('span', null, label));
    box.append(row);
  }
  return box;
}
