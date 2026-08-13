import test from 'node:test';
import assert from 'node:assert/strict';

import { voronoiTreemap, polygonArea } from '../web/src/voronoi.js';

const W = 960;
const H = 540;
const I = 5;
const CLIP = [[I, I], [W - I, I], [W - I, H - I], [I, H - I]];

/** Every weight pattern either instrument can hand the solver, plus worse. */
const PATTERNS = {
  even4: [0.25, 0.25, 0.25, 0.25],
  skew4: [0.55, 0.2, 0.15, 0.1],
  harsh4: [0.7, 0.15, 0.1, 0.05],
  skew5: [0.45, 0.25, 0.15, 0.1, 0.05],
  even8: Array(8).fill(1 / 8),
  skew8: [0.3, 0.18, 0.14, 0.11, 0.09, 0.08, 0.06, 0.04],
  tiny3: [0.8, 0.15, 0.05],
  pair: [0.9, 0.1],
  ten: [0.25, 0.15, 0.12, 0.1, 0.09, 0.08, 0.07, 0.06, 0.05, 0.03],
  extreme: [0.9, 0.04, 0.03, 0.02, 0.01],
  flat12: Array(12).fill(1 / 12),
  citationCounts: [9, 7, 5, 4, 3, 2, 2, 1],
};

const SEEDS = 40;

/**
 * A cell squeezed out of the diagram is the failure that matters most: it does not
 * make the picture slightly wrong, it removes a category from it. The reader is then
 * told about N traditions while looking at N−1, with nothing on screen to reveal it.
 *
 * This used to happen. A starved site was rescued by resetting its weight to 0, but
 * weights are floor-normalised to a minimum of 0 every pass, so 0 is the weakest
 * weight on the board — the rescue re-caused the starvation it was meant to cure.
 */
test('no weight pattern ever loses a cell', () => {
  for (const [name, weights] of Object.entries(PATTERNS)) {
    for (let seed = 0; seed < SEEDS; seed++) {
      const cells = voronoiTreemap(weights.map((w) => ({ weight: w })), CLIP, { seed });
      assert.equal(cells.length, weights.length, `${name}/${seed}: wrong cell count`);
      for (const [i, cell] of cells.entries()) {
        assert.ok(cell.polygon.length >= 3, `${name}/${seed}: cell ${i} has no polygon`);
        assert.ok(cell.area > 0, `${name}/${seed}: cell ${i} has zero area`);
      }
    }
  }
});

test('cell areas match their requested proportions', () => {
  let worst = 0;
  let worstAt = '';
  for (const [name, weights] of Object.entries(PATTERNS)) {
    const sum = weights.reduce((a, b) => a + b, 0);
    for (let seed = 0; seed < SEEDS; seed++) {
      const cells = voronoiTreemap(weights.map((w) => ({ weight: w })), CLIP, { seed });
      const total = cells.reduce((n, c) => n + c.area, 0);
      weights.forEach((w, i) => {
        const off = Math.abs(w / sum - cells[i].area / total) * 100;
        if (off > worst) { worst = off; worstAt = `${name}/${seed}`; }
      });
    }
  }
  // Half a point is the most an integer percentage label can be wrong by from
  // rounding alone, so that is the bar: no reader can see a discrepancy smaller
  // than the one their own label already carries.
  assert.ok(worst < 0.5, `worst area error ${worst.toFixed(3)}pp at ${worstAt}`);
});

test('cells tile the clip without gaps or overlap', () => {
  const clipArea = polygonArea(CLIP);
  for (const [name, weights] of Object.entries(PATTERNS)) {
    for (let seed = 0; seed < 8; seed++) {
      const cells = voronoiTreemap(weights.map((w) => ({ weight: w })), CLIP, { seed });
      const total = cells.reduce((n, c) => n + c.area, 0);
      assert.ok(
        Math.abs(total - clipArea) / clipArea < 0.005,
        `${name}/${seed}: cells cover ${((total / clipArea) * 100).toFixed(1)}% of the clip`,
      );
    }
  }
});

test('the same seed always draws the same picture', () => {
  const weights = PATTERNS.skew5.map((w) => ({ weight: w }));
  const sig = (cells) => cells.map((c) => c.polygon.map((p) => p.map((n) => n.toFixed(4)).join(',')).join(' ')).join('|');
  assert.equal(
    sig(voronoiTreemap(weights, CLIP, { seed: 7 })),
    sig(voronoiTreemap(weights, CLIP, { seed: 7 })),
    'same seed diverged',
  );
  assert.notEqual(
    sig(voronoiTreemap(weights, CLIP, { seed: 7 })),
    sig(voronoiTreemap(weights, CLIP, { seed: 8 })),
    'different seeds produced identical layouts',
  );
});

test('every cell reports its own error honestly', () => {
  for (const [name, weights] of Object.entries(PATTERNS)) {
    const cells = voronoiTreemap(weights.map((w) => ({ weight: w })), CLIP, { seed: 3 });
    for (const cell of cells) {
      const actual = Math.abs(cell.area - cell.target) / cell.target;
      assert.ok(Math.abs(actual - cell.error) < 1e-9, `${name}: reported error does not match measured`);
    }
  }
});
