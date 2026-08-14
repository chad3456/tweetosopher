/**
 * Visual explainers.
 *
 * The brief was that a theory, paradox or effect should be shown and not only
 * described, starting with the trolley problem. The trap in that request is the
 * decorative illustration: a picture of a trolley teaches nothing that the word
 * "trolley" did not. A diagram earns its place only when it shows the *mechanism* —
 * the thing that makes the case hard, in a form the sentence cannot hold.
 *
 * So this is a small vocabulary of diagram kinds rather than a drawing per entry, and
 * each kind exists because a class of arguments has a shape:
 *
 *   track   a branching line with a switch on it. For the trolley family, where the
 *           whole difficulty is that one act redirects a harm rather than creating it,
 *           and the diagram makes the redirection visible as geometry.
 *   scale   a balance. For trade-offs where the argument is about what goes on each
 *           pan and whether the pans are commensurable at all.
 *   sets    nested or overlapping regions. For the conjunction fallacy, Berkson,
 *           Simpson — errors that are errors *because* of containment, and become
 *           obvious the moment containment is drawn.
 *   grid    a 2×2. For payoff matrices and for the four cells a conditional
 *           probability question is really about.
 *   flow    a chain of steps with one arrow that turns back on itself. For every
 *           incentive that defeats its own purpose: Goodhart, the cobra effect,
 *           specification gaming.
 *   curve   a plotted function. For prospect theory, discounting, forgetting — cases
 *           where the claim is literally about a curve's shape and prose has to
 *           describe it badly.
 *   bars    compared magnitudes. For framing, scope insensitivity, base rates, where
 *           the point is that two numbers people treat as different are the same, or
 *           two they treat as the same are not.
 *
 * Everything is inline SVG with no library, theme-aware through the same tokens as the
 * rest of the page, and every diagram carries a text alternative — `alt` on the figure
 * and a caption that states the point in words. A diagram nobody can see must still
 * leave the reader with the argument.
 */

const NS = 'http://www.w3.org/2000/svg';

const svgEl = (tag, attrs = {}, text) => {
  const node = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (text != null) node.textContent = text;
  return node;
};
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

/** People, as a row of dots. The count is what the argument is about, so it is drawn. */
function figures(svg, x, y, n, cls = 'dg-person') {
  const g = svgEl('g');
  const per = 9;
  for (let i = 0; i < n; i++) {
    g.append(svgEl('circle', { cx: x + (i % 5) * per, cy: y + Math.floor(i / 5) * 11, r: 3.4, class: cls }));
  }
  svg.append(g);
  return g;
}

const W = 480;

/**
 * SVG text has no line breaks, so a label with a newline in it silently renders as one
 * long line and overflows whatever shape it was meant to sit inside. Every multi-line
 * label goes through here.
 */
function lines(svg, text, x, y, cls, anchor = 'middle', lh = 13) {
  const rows = String(text).split('\n');
  rows.forEach((row, i) => svg.append(svgEl('text', {
    x, y: y + (i - (rows.length - 1) / 2) * lh, class: cls, 'text-anchor': anchor,
  }, row)));
}

// ── track ──────────────────────────────────────────────────────────────────
/**
 * spec: { main:{n,label}, branch:{n,label}, switch:string, note:string, thrown:boolean }
 *
 * The switch is drawn in its default position and the alternative is drawn dashed, so
 * the reader sees both futures at once. That is the actual content of the case: not
 * that people are on a track, but that one lever chooses between two sets of dead.
 */
function track(spec) {
  const H = 190;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });

  svg.append(svgEl('path', { d: 'M 18 96 L 176 96', class: 'dg-rail' }));
  // Straight on, and the branch peeling away.
  svg.append(svgEl('path', { d: 'M 176 96 L 452 96', class: `dg-rail${spec.thrown ? ' is-off' : ''}` }));
  // The branch levels off early on purpose: the label below sits at y 128, and a curve
  // still descending under it collides with the text at this width.
  svg.append(svgEl('path', { d: 'M 176 96 C 206 96 210 150 244 150 L 452 150', class: `dg-rail${spec.thrown ? '' : ' is-off'}` }));

  // The trolley, and the switch that decides which rail it takes.
  svg.append(svgEl('rect', { x: 20, y: 84, width: 30, height: 22, rx: 3, class: 'dg-car' }));
  svg.append(svgEl('circle', { cx: 176, cy: 96, r: 5, class: 'dg-switch' }));
  svg.append(svgEl('text', { x: 176, y: 78, class: 'dg-label', 'text-anchor': 'middle' }, spec.switch));

  figures(svg, 368, 90, spec.main.n);
  svg.append(svgEl('text', { x: 452, y: 74, class: 'dg-count', 'text-anchor': 'end' }, spec.main.label));
  figures(svg, 368, 144, spec.branch.n);
  svg.append(svgEl('text', { x: 452, y: 128, class: 'dg-count', 'text-anchor': 'end' }, spec.branch.label));

  return svg;
}

// ── scale ──────────────────────────────────────────────────────────────────
/** spec: { left:{label,weight}, right:{label,weight}, note } */
function scale(spec) {
  const H = 190;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  // Tilt is bounded, so a lopsided pair is legible rather than falling off the frame.
  const diff = Math.max(-1, Math.min(1, (spec.left.weight - spec.right.weight) / 4));
  const tilt = diff * 22;

  svg.append(svgEl('path', { d: 'M 240 150 L 218 172 L 262 172 Z', class: 'dg-stand' }));
  svg.append(svgEl('line', { x1: 240, y1: 150, x2: 240, y2: 66, class: 'dg-stand-line' }));
  svg.append(svgEl('line', { x1: 90, y1: 66 + tilt, x2: 390, y2: 66 - tilt, class: 'dg-beam' }));

  for (const [side, x, dy] of [['left', 90, tilt], ['right', 390, -tilt]]) {
    const s = spec[side];
    svg.append(svgEl('line', { x1: x, y1: 66 + dy, x2: x, y2: 96 + dy, class: 'dg-stand-line' }));
    svg.append(svgEl('path', {
      d: `M ${x - 46} ${96 + dy} L ${x + 46} ${96 + dy} L ${x + 34} ${120 + dy} L ${x - 34} ${120 + dy} Z`,
      class: 'dg-pan',
    }));
    svg.append(svgEl('text', { x, y: 138 + dy, class: 'dg-label', 'text-anchor': 'middle' }, s.label));
    figures(svg, x - 18, 82 + dy, Math.min(s.weight, 10));
  }
  return svg;
}

// ── sets ───────────────────────────────────────────────────────────────────
/** spec: { outer:{label}, inner:{label}, note } — containment, drawn to scale. */
function sets(spec) {
  const H = 190;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  svg.append(svgEl('circle', { cx: 200, cy: 95, r: 78, class: 'dg-set' }));
  svg.append(svgEl('circle', { cx: 218, cy: 105, r: 34, class: 'dg-set dg-set--inner' }));
  lines(svg, spec.outer.label, 200, 32, 'dg-label');
  lines(svg, spec.inner.label, 218, 105, 'dg-label dg-label--in', 'middle', 12);
  svg.append(svgEl('text', { x: 300, y: 95, class: 'dg-count' }, spec.relation ?? 'cannot be larger'));
  svg.append(svgEl('line', { x1: 254, y1: 105, x2: 296, y2: 95, class: 'dg-lead' }));
  return svg;
}

// ── grid ───────────────────────────────────────────────────────────────────
/** spec: { rows:[a,b], cols:[a,b], cells:[[tl,tr],[bl,br]], highlight:[r,c] } */
function grid(spec) {
  const H = 210;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  const x0 = 128, y0 = 44, cw = 160, ch = 66;
  spec.cols.forEach((c, i) => svg.append(
    svgEl('text', { x: x0 + i * cw + cw / 2, y: 30, class: 'dg-label', 'text-anchor': 'middle' }, c),
  ));
  spec.rows.forEach((r, i) => svg.append(
    svgEl('text', { x: x0 - 12, y: y0 + i * ch + ch / 2 + 4, class: 'dg-label', 'text-anchor': 'end' }, r),
  ));
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 2; c++) {
      const on = spec.highlight && spec.highlight[0] === r && spec.highlight[1] === c;
      svg.append(svgEl('rect', {
        x: x0 + c * cw + 1, y: y0 + r * ch + 1, width: cw - 2, height: ch - 2,
        class: `dg-cell${on ? ' is-on' : ''}`,
      }));
      const lines = String(spec.cells[r][c]).split('\n');
      lines.forEach((line, li) => svg.append(svgEl('text', {
        x: x0 + c * cw + cw / 2, y: y0 + r * ch + ch / 2 + 4 + (li - (lines.length - 1) / 2) * 15,
        class: `dg-cell-text${on ? ' is-on' : ''}`, 'text-anchor': 'middle',
      }, line)));
    }
  }
  return svg;
}

// ── flow ───────────────────────────────────────────────────────────────────
/** spec: { steps:[string], back:{from,to,label} } — a chain that bites itself. */
function flow(spec) {
  const n = spec.steps.length;
  const H = 160;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  const bw = Math.min(120, (W - 40 - (n - 1) * 18) / n);
  const gap = (W - 40 - n * bw) / Math.max(1, n - 1);
  const cx = (i) => 20 + i * (bw + gap) + bw / 2;

  spec.steps.forEach((step, i) => {
    svg.append(svgEl('rect', { x: cx(i) - bw / 2, y: 40, width: bw, height: 44, rx: 3, class: 'dg-node' }));
    for (const [li, line] of wrap(step, Math.floor(bw / 6.2)).entries()) {
      svg.append(svgEl('text', {
        x: cx(i), y: 62 + (li - 0.5) * 13 + 5, class: 'dg-node-text', 'text-anchor': 'middle',
      }, line));
    }
    if (i < n - 1) {
      const a = cx(i) + bw / 2 + 3, b = cx(i + 1) - bw / 2 - 3;
      svg.append(svgEl('path', { d: `M ${a} 62 L ${b} 62`, class: 'dg-arrow' }));
      svg.append(svgEl('path', { d: `M ${b} 62 l -6 -4 l 0 8 Z`, class: 'dg-head' }));
    }
  });

  if (spec.back) {
    const a = cx(spec.back.from), b = cx(spec.back.to);
    svg.append(svgEl('path', { d: `M ${a} 88 C ${a} 132 ${b} 132 ${b} 92`, class: 'dg-arrow dg-arrow--back' }));
    svg.append(svgEl('path', { d: `M ${b} 92 l -4 8 l 8 0 Z`, class: 'dg-head dg-head--back' }));
    svg.append(svgEl('text', { x: (a + b) / 2, y: 146, class: 'dg-count', 'text-anchor': 'middle' }, spec.back.label));
  }
  return svg;
}

/** Crude greedy wrap. Good enough for three-word node labels; nothing longer belongs. */
function wrap(text, cols) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line && (line + ' ' + w).length > cols) { lines.push(line); line = w; } else line = line ? `${line} ${w}` : w;
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

// ── curve ──────────────────────────────────────────────────────────────────
/** spec: { fn:'prospect'|'hyperbolic'|'forgetting', x:string, y:string, marks:[{at,label}] } */
function curve(spec) {
  const H = 200;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  const L = 56, R = 24, T = 18, B = 40;
  const pw = W - L - R, ph = H - T - B;
  const FNS = {
    // Concave in gains, convex and steeper in losses — the kink at the origin is the
    // whole of prospect theory and the only part a reader needs to see.
    prospect: (t) => (t >= 0.5 ? 0.5 + 0.5 * ((t - 0.5) * 2) ** 0.55 * 0.72 : 0.5 - 0.5 * ((0.5 - t) * 2) ** 0.7),
    // Steep near the present, flat later: the crossing that produces preference reversal.
    hyperbolic: (t) => 1 / (1 + 9 * t),
    forgetting: (t) => 0.18 + 0.82 * Math.exp(-4.2 * t),
  };
  const f = FNS[spec.fn] ?? FNS.forgetting;

  svg.append(svgEl('line', { x1: L, y1: T, x2: L, y2: T + ph, class: 'dg-axis' }));
  svg.append(svgEl('line', { x1: L, y1: T + ph, x2: L + pw, y2: T + ph, class: 'dg-axis' }));
  if (spec.fn === 'prospect') {
    svg.append(svgEl('line', { x1: L + pw / 2, y1: T, x2: L + pw / 2, y2: T + ph, class: 'dg-axis dg-axis--mid' }));
  }

  let d = '';
  for (let i = 0; i <= 60; i++) {
    const t = i / 60;
    const px = L + t * pw;
    const py = T + ph - f(t) * ph;
    d += `${i ? 'L' : 'M'} ${px.toFixed(1)} ${py.toFixed(1)} `;
  }
  svg.append(svgEl('path', { d, class: 'dg-curve' }));

  for (const m of spec.marks ?? []) {
    const px = L + m.at * pw;
    const py = T + ph - f(m.at) * ph;
    svg.append(svgEl('circle', { cx: px, cy: py, r: 4.5, class: 'dg-dot' }));
    svg.append(svgEl('text', { x: px + 8, y: py - 8, class: 'dg-count' }, m.label));
  }
  svg.append(svgEl('text', { x: L + pw, y: H - 12, class: 'dg-count', 'text-anchor': 'end' }, spec.x));
  svg.append(svgEl('text', {
    x: 14, y: T + ph / 2, class: 'dg-count', 'text-anchor': 'middle',
    transform: `rotate(-90 14 ${T + ph / 2})`,
  }, spec.y));
  return svg;
}

// ── bars ───────────────────────────────────────────────────────────────────
/** spec: { bars:[{label,value,note,accent}], max, unit } */
function bars(spec) {
  const rows = spec.bars;
  const ROW = 40, L = 176, R = 60, T = 14;
  const H = T + rows.length * ROW + 16;
  const svg = svgEl('svg', { viewBox: `0 0 ${W} ${H}`, class: 'dg-svg' });
  const max = spec.max ?? Math.max(...rows.map((b) => b.value));
  const pw = W - L - R;
  rows.forEach((b, i) => {
    const y = T + i * ROW;
    svg.append(svgEl('text', { x: L - 12, y: y + 22, class: 'dg-label', 'text-anchor': 'end' }, b.label));
    svg.append(svgEl('rect', {
      x: L, y: y + 8, width: Math.max(2, (b.value / max) * pw), height: 22, rx: 3,
      class: `dg-bar${b.accent ? ' is-accent' : ''}`,
    }));
    svg.append(svgEl('text', {
      x: L + Math.max(2, (b.value / max) * pw) + 8, y: y + 24, class: 'dg-count',
    }, b.note ?? `${b.value}${spec.unit ?? ''}`));
  });
  return svg;
}

const KINDS = { track, scale, sets, grid, flow, curve, bars };

/**
 * Renders one diagram spec into a figure with its caption.
 *
 * The caption is not optional and is not a title: it states the point the picture is
 * making, so a reader who cannot see the picture — or who looks at it and takes the
 * wrong thing from it — still gets the argument.
 */
export function renderDiagram(spec) {
  const build = KINDS[spec.kind];
  if (!build) return null;
  const figure = el('figure', `dg dg--${spec.kind}`);
  const svg = build(spec);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', spec.alt);
  figure.append(svg);
  figure.append(el('figcaption', 'dg__cap', spec.caption));
  return figure;
}

export const DIAGRAM_KINDS = Object.keys(KINDS);
