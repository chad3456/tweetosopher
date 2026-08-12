/**
 * Choosing which questions a sitting asks.
 *
 * The corpus is far larger than any sitting, so selection is doing real work: ask
 * twelve questions all drawn from Kant and the result measures how well somebody
 * tolerates Kant, not what they believe. So the sitting is spread deliberately —
 * one question per entry, entries spread across traditions, traditions spread
 * across categories — and the spread is seeded, so a result can be reproduced and
 * compared rather than being a different test every time.
 */

/** mulberry32 — small, fast, and good enough that a shuffle does not visibly clump. */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seedFrom(text) {
  let h = 2166136261;
  for (const ch of String(text ?? '')) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function shuffled(list, random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Round-robins across groups so the sitting cannot stack one tradition, then falls
 * back to whatever is left once the thin groups are exhausted.
 */
function spread(items, keyOf, random) {
  const groups = new Map();
  for (const item of shuffled(items, random)) {
    const key = keyOf(item);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  const queues = shuffled([...groups.values()], random);
  const out = [];
  let live = true;
  while (live) {
    live = false;
    for (const queue of queues) {
      if (queue.length) {
        out.push(queue.shift());
        live = true;
      }
    }
  }
  return out;
}

export const TRACKS = [
  { id: 'short', label: 'Short', questions: 12, note: 'Ten minutes. Enough for a reading, not a verdict.' },
  { id: 'standard', label: 'Standard', questions: 24, note: 'The intended length. Broad enough to be stable.' },
  { id: 'long', label: 'Full sitting', questions: 40, note: 'Every tradition the corpus can reach.' },
];

/**
 * @param {object} corpus compiled corpus (needs `entries`)
 * @param {number} count how many questions to ask
 * @param {number} seed  deterministic — same seed, same sitting
 */
export function buildSitting(corpus, count, seed) {
  const random = rng(seed);
  const usable = corpus.entries.filter((e) => e.questions?.length);
  if (!usable.length) return [];

  // Spread by tradition first — it is the coarsest grain and the one that most
  // distorts a result when it stacks. Category evens out the second pass.
  const byTradition = spread(usable, (e) => e.tradition, random);
  const ordered = spread(byTradition, (e) => e.category, random);

  const sitting = [];
  const used = new Map();
  // Passes let a sitting longer than the entry count take a second question from an
  // entry rather than repeating the first, or silently coming up short.
  for (let pass = 0; sitting.length < count && pass < 6; pass++) {
    for (const entry of ordered) {
      if (sitting.length >= count) break;
      const taken = used.get(entry.id) ?? 0;
      if (taken >= entry.questions.length) continue;
      const questions = shuffled(entry.questions, rng(seed ^ seedFrom(entry.id)));
      sitting.push({ entry, question: questions[taken] });
      used.set(entry.id, taken + 1);
    }
  }
  return sitting;
}

/** How long a sitting the corpus can actually support right now. */
export function capacity(corpus) {
  return (corpus.entries ?? []).reduce((n, e) => n + (e.questions?.length ?? 0), 0);
}
