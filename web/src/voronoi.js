/**
 * A weighted Voronoi treemap — "the floor plan of a mind".
 *
 * The point of the form here is that **cell area is proportional to the data**.
 * A plain Voronoi diagram over jittered seeds looks the same and means nothing;
 * its cell sizes are an artefact of where the seeds landed. So this computes a
 * genuine additively-weighted (power) diagram and iterates until every cell's
 * area matches its target, using the Balzer–Deussen scheme: Lloyd relaxation to
 * keep cells compact, plus a weight adjustment to drive areas toward target.
 *
 * Area is still a weaker channel than length — a reader estimates it to maybe
 * ±20%. That is why every cell is direct-labelled with its exact figure and a
 * table view sits underneath: the shape carries the gestalt, the label carries
 * the number.
 *
 * Cells are clipped by successive half-plane intersection rather than by
 * building a full Fortune's-algorithm diagram. That is O(n²) per cell, but n
 * here is under a dozen, and it is exact, short and has no failure modes around
 * degenerate inputs.
 */

/* ── Geometry ─────────────────────────────────────────────────────────── */

export function polygonArea(poly) {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    a += (poly[j][0] + poly[i][0]) * (poly[j][1] - poly[i][1]);
  }
  return Math.abs(a / 2);
}

export function polygonCentroid(poly) {
  let x = 0;
  let y = 0;
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const cross = poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
    a += cross;
    x += (poly[j][0] + poly[i][0]) * cross;
    y += (poly[j][1] + poly[i][1]) * cross;
  }
  if (Math.abs(a) < 1e-9) {
    // Degenerate sliver: fall back to the vertex mean rather than dividing by ~0.
    const n = poly.length || 1;
    return [poly.reduce((s, p) => s + p[0], 0) / n, poly.reduce((s, p) => s + p[1], 0) / n];
  }
  a *= 3;
  return [x / a, y / a];
}

/** Sutherland–Hodgman clip of `poly` to the half-plane ax + by <= c. */
function clipHalfPlane(poly, a, b, c) {
  if (!poly.length) return poly;
  const out = [];
  const inside = (p) => a * p[0] + b * p[1] <= c;

  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const cur = poly[i];
    const prev = poly[j];
    const curIn = inside(cur);
    const prevIn = inside(prev);

    if (curIn !== prevIn) {
      const dx = cur[0] - prev[0];
      const dy = cur[1] - prev[1];
      const denom = a * dx + b * dy;
      if (Math.abs(denom) > 1e-12) {
        const t = (c - a * prev[0] - b * prev[1]) / denom;
        out.push([prev[0] + t * dx, prev[1] + t * dy]);
      }
    }
    if (curIn) out.push(cur);
  }
  return out;
}

/**
 * Power (additively weighted Voronoi) cell for each site, clipped to `clip`.
 *
 * Site i owns x where |x−pᵢ|² − wᵢ ≤ |x−pⱼ|² − wⱼ for all j, which rearranges to
 * the linear half-plane below — so a power diagram is just a Voronoi diagram
 * whose bisectors have been slid along by the weight difference.
 */
export function powerDiagram(sites, clip) {
  return sites.map((si) => {
    let cell = clip;
    for (const sj of sites) {
      if (sj === si || !cell.length) continue;
      const a = 2 * (sj.x - si.x);
      const b = 2 * (sj.y - si.y);
      const c = sj.x ** 2 + sj.y ** 2 - si.x ** 2 - si.y ** 2 - sj.w + si.w;
      cell = clipHalfPlane(cell, a, b, c);
    }
    return cell;
  });
}

/** Mulberry32 — small, fast, and seeded so a given subject always gets the
 *  same floor plan. A museum's rooms do not move between visits. */
export function rng(seed) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}


/**
 * Compute a treemap.
 *
 * @param {{weight:number}[]} data  one entry per cell; `weight` need not be normalised
 * @param {[number,number][]} clip  convex clipping polygon
 * @param {{seed?:number, iterations?:number, tolerance?:number}} opts
 * @returns {{index:number, polygon:[number,number][], area:number, target:number, centroid:[number,number], error:number}[]}
 */
export function voronoiTreemap(data, clip, opts = {}) {
  // 32 attempts. Measured on a 90:1 ratio across five cells — the hardest shape
  // either instrument produces — over 200 seeds: 16 attempts failed 11 times, 24
  // failed twice, 32 failed none. It is close to free, because the loop stops at
  // the first descent that converges, so the extra attempts are only ever spent
  // on the inputs that need them: 200 runs of the worst case take ~700ms either
  // way. Raising `iterations` instead does not help — a starved descent is stuck,
  // not slow, so the fix is another seeding rather than more passes over a dead one.
  const { seed = 1, iterations = 160, tolerance = 0.008, attempts = 32 } = opts;
  const total = data.reduce((s, d) => s + Math.max(d.weight, 1e-6), 0);
  const clipArea = polygonArea(clip);
  const targets = data.map((d) => (Math.max(d.weight, 1e-6) / total) * clipArea);

  const xs = clip.map((p) => p[0]);
  const ys = clip.map((p) => p[1]);
  const [minX, maxX] = [Math.min(...xs), Math.max(...xs)];
  const [minY, maxY] = [Math.min(...ys), Math.max(...ys)];
  const scale = Math.min(maxX - minX, maxY - minY);

  const inClip = (x, y) => {
    for (let i = 0, j = clip.length - 1; i < clip.length; j = i++) {
      const [x1, y1] = clip[j];
      const [x2, y2] = clip[i];
      if ((x2 - x1) * (y - y1) - (y2 - y1) * (x - x1) < -1e-9) return false;
    }
    return true;
  };

  /*
   * The update rule is additive, and that detail is the whole ballgame.
   *
   * The textbook multiplicative form (scale each weight by the area ratio) was
   * tried first and left cells up to 88% away from their target areas — a
   * treemap whose areas are wrong is worse than no treemap, because it looks
   * authoritative while lying. Two things were wrong with it: weights are only
   * meaningful as *differences* in a power diagram, so scaling them all drifts
   * without separating them; and clamping each weight against its nearest
   * neighbour is symmetric, so a big cell got throttled by the small cells
   * crowding it.
   *
   * The additive form is dimensionally honest: in a power diagram w has units of
   * length², and so does (target − area), so the error adds to the weight
   * directly. Re-centring on the minimum each pass keeps the absolute values
   * bounded while preserving every difference. GAIN above ~0.7 overshoots and
   * oscillates; 0.35 sits comfortably inside the stable band.
   */
  const GAIN = 0.35;
  const LLOYD = 0.4;

  /**
   * One descent from one seeding. Returns the best complete layout it saw.
   *
   * A single run can fail outright: with few cells and lopsided weights, a site
   * can be squeezed out of the diagram entirely and never recover, because a
   * site with no area is a site the area feedback cannot push. Rescuing it in
   * place does not reliably work either — the rescue has to reset the weight,
   * which throws away the very accumulation that would have grown the cell, so
   * an aggressive rescue can loop forever. Rather than pretend one descent
   * always converges, `solve` reports honestly whether it produced a complete
   * layout, and the caller reseeds and tries again.
   */
  const solve = (attemptSeed) => {
    const random = rng(attemptSeed);
    const sites = data.map(() => {
      for (let tries = 0; tries < 200; tries++) {
        const x = minX + random() * (maxX - minX);
        const y = minY + random() * (maxY - minY);
        if (inClip(x, y)) return { x, y, w: 0 };
      }
      return { x: (minX + maxX) / 2, y: (minY + maxY) / 2, w: 0 };
    });

    let best = null;
    let bestWorst = Infinity;
    let starvedFor = data.map(() => 0);

    for (let iter = 0; iter < iterations; iter++) {
      let cells = powerDiagram(sites, clip);

      cells.forEach((cell, i) => {
        if (cell.length < 3) {
          starvedFor[i] += 1;
          // Give the weight feedback a few passes to grow the cell on its own
          // before intervening; only relocate if it is genuinely stuck.
          if (starvedFor[i] < 4) return;
          starvedFor[i] = 0;
          let host = -1;
          let hostArea = -1;
          cells.forEach((c, k) => {
            if (c.length < 3) return;
            const a = polygonArea(c);
            if (a > hostArea) { hostArea = a; host = k; }
          });
          const room = host >= 0 ? cells[host] : clip;
          const [cx, cy] = polygonCentroid(room);
          sites[i].x = cx + (random() - 0.5) * scale * 0.25;
          sites[i].y = cy + (random() - 0.5) * scale * 0.25;
          // Land on the host's weight, not on 0. Weights are floor-normalised to
          // a minimum of 0 each pass, so 0 is the weakest weight on the board and
          // a weakest site beside a strong one gets no region at all — the reset
          // would re-cause the starvation it is meant to cure.
          sites[i].w = host >= 0 ? sites[host].w : 0;
          return;
        }
        starvedFor[i] = 0;
        const [cx, cy] = polygonCentroid(cell);
        sites[i].x += (cx - sites[i].x) * LLOYD;
        sites[i].y += (cy - sites[i].y) * LLOYD;
      });

      cells = powerDiagram(sites, clip);

      let worst = 0;
      let complete = true;
      cells.forEach((cell, i) => {
        const area = cell.length >= 3 ? polygonArea(cell) : 0;
        if (area <= 0) complete = false;
        worst = Math.max(worst, Math.abs(targets[i] - area) / targets[i]);
      });

      // Snapshot BEFORE the weight update, so the saved sites are the ones that
      // actually produced the `worst` just measured. Snapshotting after would
      // store a state nobody evaluated.
      if (complete && worst < bestWorst) {
        bestWorst = worst;
        best = sites.map((s) => ({ ...s }));
      }
      if (complete && worst < tolerance) break;

      cells.forEach((cell, i) => {
        const area = cell.length >= 3 ? polygonArea(cell) : 0;
        sites[i].w += GAIN * (targets[i] - area);
      });
      const floor = Math.min(...sites.map((s) => s.w));
      for (const site of sites) site.w -= floor;
    }

    return { sites: best, worst: bestWorst };
  };

  // Starvation is a property of where the sites happened to land, so a fresh
  // seeding usually clears it. Attempts are walked deterministically from the
  // caller's seed, so the same input still yields the same picture every time.
  let chosen = null;
  let chosenWorst = Infinity;
  for (let attempt = 0; attempt < attempts; attempt++) {
    const { sites, worst } = solve((seed + attempt * 0x9e3779b9) >>> 0);
    if (sites && worst < chosenWorst) {
      chosen = sites;
      chosenWorst = worst;
    }
    if (chosen && chosenWorst < tolerance) break;
  }

  // Every attempt starved. Fall back to an unweighted Lloyd relaxation, which
  // cannot starve a cell — the areas will be wrong, and `error` will say so,
  // rather than the caller being handed a plate with a category missing.
  if (!chosen) {
    const random = rng(seed);
    chosen = data.map(() => {
      for (let tries = 0; tries < 200; tries++) {
        const x = minX + random() * (maxX - minX);
        const y = minY + random() * (maxY - minY);
        if (inClip(x, y)) return { x, y, w: 0 };
      }
      return { x: (minX + maxX) / 2, y: (minY + maxY) / 2, w: 0 };
    });
    for (let iter = 0; iter < 60; iter++) {
      const cells = powerDiagram(chosen, clip);
      cells.forEach((cell, i) => {
        if (cell.length < 3) return;
        const [cx, cy] = polygonCentroid(cell);
        chosen[i].x += (cx - chosen[i].x) * LLOYD;
        chosen[i].y += (cy - chosen[i].y) * LLOYD;
      });
    }
  }

  const cells = powerDiagram(chosen, clip);
  return cells.map((polygon, i) => {
    const area = polygon.length >= 3 ? polygonArea(polygon) : 0;
    return {
      index: i,
      polygon,
      area,
      target: targets[i],
      centroid: polygon.length >= 3 ? polygonCentroid(polygon) : [chosen[i].x, chosen[i].y],
      // How far off the requested proportion this cell landed. Surfaced so the
      // caller can tell an honest partition from a failed one.
      error: targets[i] ? Math.abs(area - targets[i]) / targets[i] : 0,
    };
  });
}

/* ── Turning a verdict into territories ───────────────────────────────── */

/** Kinds that are the subject speaking, as opposed to endorsing. */
const OWN_VOICE = new Set(['post', 'thread', 'reply', 'quote', 'essay', 'essay-summary', 'note']);

const CITATION = /\[(\d{1,3})\]/g;

function citedIndices(text) {
  const out = new Set();
  for (const m of String(text ?? '').matchAll(CITATION)) out.add(Number(m[1]));
  return out;
}

/**
 * Build the cells.
 *
 * Every cell is a claim the panel made, measured in one unit — the number of
 * distinct corpus items it rests on. Mixing units across cells (a theme sized by
 * citations next to a philosopher sized by a score) would make the areas
 * incomparable and the picture a lie, so everything here is citations.
 *
 * @param {object} verdict  the hydrated verdict, including `citations`
 */
export function buildTerritories(verdict) {
  const lookup = verdict.citations ?? {};

  const make = (label, kind, sources) => {
    const cited = new Set();
    for (const s of sources) for (const n of citedIndices(s)) cited.add(n);
    if (!cited.size) return null;

    let own = 0;
    let amplified = 0;
    for (const n of cited) {
      const item = lookup[n];
      if (!item) continue;
      if (OWN_VOICE.has(item.kind)) own++;
      else amplified++;
    }
    const known = own + amplified;

    return {
      label,
      kind,
      weight: cited.size,
      citations: [...cited].sort((a, b) => a - b),
      // −1 entirely their own words · 0 mixed · +1 entirely things they amplified
      polarity: known ? (amplified - own) / known : 0,
      own,
      amplified,
    };
  };

  const cells = [];

  const assignment = make(
    verdict.verdict.philosopher.name,
    'assignment',
    [verdict.verdict.reasoning, verdict.verdict.anecdote],
  );
  if (assignment) cells.push(assignment);

  for (const theme of verdict.themes ?? []) {
    const cell = make(theme.name, 'theme', [theme.evidence]);
    if (cell) cells.push(cell);
  }

  (verdict.tensions ?? []).forEach((t, i) => {
    const cell = make(`Contradiction ${'I'.repeat(i + 1)}`, 'tension', [t]);
    if (cell) {
      cell.detail = t;
      cells.push(cell);
    }
  });

  for (const cell of cells) {
    if (cell.kind === 'theme') {
      cell.detail = (verdict.themes ?? []).find((t) => t.name === cell.label)?.evidence ?? '';
    } else if (cell.kind === 'assignment') {
      cell.detail = `The panel's assignment. Rests on ${cell.weight} cited item(s) across the reading.`;
    }
  }

  return cells;
}
