/**
 * Scoring for the Selective Outrage test.
 *
 * Everything here is computed from the reader's own paired ratings. Nothing is
 * inferred from population research, and no verdict is produced that the twenty
 * numbers do not support — which is why `scoreOutrage` returns `null` for the tag when
 * fewer than six pairs are complete rather than guessing from what it has.
 *
 * The two axes are deliberately independent:
 *
 *   severity    mean of all ratings. How harsh, on a 1–5 scale.
 *   selectivity mean of |gap| across complete pairs. How much the actor moved you,
 *               in scale points. Zero means the act was the whole of the judgement.
 *
 * `direction` is the third quantity and the one that separates an inconsistent reader
 * from a partisan one. Each case tagged with `favours` names which side each arm
 * belongs to; a gap on such a case is a vote for leniency toward one of them. Two or
 * more votes the same way is a pattern; anything less is noise and is reported as such.
 */

/** Gap large enough to count as a real difference rather than scale wobble. */
const REAL_GAP = 0.5;
/**
 * A direction is claimed only when the leading side has at least this many votes AND
 * clears the runner-up by the same margin. Two-versus-one on four political cases is
 * noise, and the first version of this treated it as a lean — which the test fixture
 * for "scattered inconsistency" caught by being labelled a partisan.
 */
const PATTERN = 2;
/** Complete pairs needed before any tag is offered at all. */
const MIN_PAIRS = 6;

const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0);

/**
 * @param items    OUTRAGE_ITEMS
 * @param answers  { [`${itemId}.${armId}`]: number }
 * @param tags     OUTRAGE_TAGS
 * @param predicted expected number of differing pairs, or null
 */
export function scoreOutrage(items, answers, tags, predicted = null) {
  const pairs = [];
  for (const item of items) {
    const a = answers[`${item.id}.${item.arms[0].id}`];
    const b = answers[`${item.id}.${item.arms[1].id}`];
    if (a == null || b == null) continue;
    // Signed so the chart can show which way it ran; `gap` is what the tags use.
    const delta = a - b;
    pairs.push({
      item,
      a,
      b,
      delta,
      gap: Math.abs(delta),
      real: Math.abs(delta) >= REAL_GAP,
      // Which arm you let off. Only meaningful where the case names sides.
      lenientOn: delta === 0 ? null : (delta > 0 ? item.arms[1].id : item.arms[0].id),
    });
  }

  const ratings = pairs.flatMap((p) => [p.a, p.b]);
  const severity = mean(ratings);
  const selectivity = mean(pairs.map((p) => p.gap));
  const moved = pairs.filter((p) => p.real).length;

  // ── direction ────────────────────────────────────────────────────────────
  // A vote is cast only by a case that names sides and produced a real gap.
  const votes = {};
  for (const p of pairs) {
    if (!p.real || !p.item.favours || !p.lenientOn) continue;
    const side = p.item.favours[p.lenientOn];
    if (side) votes[side] = (votes[side] ?? 0) + 1;
  }
  const ranked = Object.entries(votes).sort((x, y) => y[1] - x[1]);
  const top = ranked[0] ?? null;
  const runnerUp = ranked[1] ?? null;
  // Note the keys are per-dichotomy: a case pitting government against opposition does
  // not add votes to "the right", because those are different questions. They compete
  // for the top slot rather than pooling, which is why the margin rule below is what
  // separates a lean from a scatter.
  const hasPattern = Boolean(top) && top[1] >= PATTERN && top[1] >= (runnerUp?.[1] ?? 0) + PATTERN;
  const direction = hasPattern ? { side: top[0], votes: top[1] } : null;

  // ── tag ──────────────────────────────────────────────────────────────────
  let tag = null;
  if (pairs.length >= MIN_PAIRS) {
    const fits = (t) => {
      const [sl, sh] = t.when.selectivity ?? [0, 99];
      const [vl, vh] = t.when.severity ?? [0, 99];
      if (selectivity < sl || selectivity > sh) return false;
      if (severity < vl || severity > vh) return false;
      // The two political tags are unavailable without a repeating direction, so an
      // inconsistent reader is never called a partisan on the strength of noise.
      if (t.favoursNeeded && !direction) return false;
      return true;
    };
    // First match wins, so the order in the data file is the specificity order: the
    // narrow corners are declared before the catch-all they sit inside.
    tag = tags.find(fits) ?? null;
  }

  // ── self-knowledge ───────────────────────────────────────────────────────
  // The gap between what the reader forecast and what they did. Reported only as a
  // direction and a size, because a four-option forecast cannot support more.
  let forecast = null;
  if (predicted != null && pairs.length >= MIN_PAIRS) {
    const scaled = predicted * (pairs.length / items.length);
    const miss = moved - scaled;
    forecast = {
      predicted: scaled,
      actual: moved,
      miss,
      verdict: Math.abs(miss) <= 1.5 ? 'accurate' : (miss > 0 ? 'under' : 'over'),
    };
  }

  return {
    pairs,
    complete: pairs.length,
    total: items.length,
    severity,
    selectivity,
    moved,
    direction,
    votes,
    tag,
    forecast,
    // The largest gap is what the result page points the reader at, because it is the
    // one case where they have to supply a justification or concede the point.
    widest: pairs.length ? [...pairs].sort((x, y) => y.gap - x.gap)[0] : null,
  };
}

/**
 * Groups gaps by the axis each case varies, so the result can say what a reader's
 * inconsistencies have in common rather than only how large they were.
 */
export function byAxis(pairs) {
  const out = new Map();
  for (const p of pairs) {
    const key = p.item.axis ?? 'other';
    if (!out.has(key)) out.set(key, []);
    out.get(key).push(p);
  }
  return [...out.entries()]
    .map(([axis, ps]) => ({ axis, mean: mean(ps.map((x) => x.gap)), n: ps.length }))
    .sort((x, y) => y.mean - x.mean);
}

export const AXIS_LABEL = {
  tribe: 'Which side they are on',
  sincerity: 'Whether they practise what they preach',
  distance: 'How close they are to you',
  scale: 'How big they are',
  other: 'Other',
};

export const SIDE_LABEL = {
  left: 'the left',
  right: 'the right',
  government: 'the governing party',
  opposition: 'the opposition',
};

export { REAL_GAP, MIN_PAIRS };
