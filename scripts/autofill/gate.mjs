/**
 * The gate: what an entry must clear before it is allowed into the corpus.
 *
 * "Without any manual intervention" is the requirement, and this file is what makes
 * that safe rather than reckless. Nothing here asks a model whether its own output is
 * good — every check is mechanical, so it fails the same way every time and can be
 * reasoned about when it rejects something.
 *
 * Five classes of check, in the order they run:
 *
 *   structure    Fields present, types right, lengths plausible. Cheapest, so first.
 *   originality  The entry must not reproduce runs of words from any source text the
 *                pipeline saw. This is the check that keeps the promise made in
 *                `sources.mjs` — that discovery reads a taxonomy and the prose is ours.
 *   distinctness The entry must not be a paraphrase of one already in the corpus.
 *                Near-duplicates are how an auto-filled reference rots: it grows
 *                without saying more.
 *   house style  No markdown, no lists, no URLs, no second person, no banned openings.
 *                The corpus has a voice and an unattended writer drifts out of it.
 *   honesty      The `notFallacy` field must actually describe a legitimate case rather
 *                than restate the error, and `modern.now` must not restate the
 *                definition. These are the two fields most likely to be filled with
 *                something that reads fine and says nothing.
 *
 * Every rejection carries the check that produced it, so a run that rejects half its
 * batch tells you which rule to look at rather than just a count.
 */

/** Shingle size for overlap detection. Seven words is long enough that a collision is
 *  not idiom and short enough to catch a lightly-reworded sentence. */
const SHINGLE = 7;

const words = (s) => String(s).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);

function shingles(text, n = SHINGLE) {
  const w = words(text);
  const out = new Set();
  for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' '));
  return out;
}

/** Jaccard over word sets. Crude, cheap, and adequate for catching paraphrase. */
function similarity(a, b) {
  const A = new Set(words(a));
  const B = new Set(words(b));
  if (!A.size || !B.size) return 0;
  let shared = 0;
  for (const w of A) if (B.has(w)) shared += 1;
  return shared / (A.size + B.size - shared);
}

const LIMITS = {
  definition: [40, 320],
  example: [80, 700],
  notFallacy: [140, 900],
  'modern.now': [140, 900],
  'modern.test': [50, 400],
};

const BANNED_OPENINGS = [
  /^in today'?s (world|society|climate)/i,
  /^in the (modern|digital) (age|era|world)/i,
  /^(it is|it'?s) (important|worth) (to note|noting)/i,
  /^this fallacy (is|occurs)/i,
];

/** Second-person exhortation. The corpus addresses the reader, but not like a manual. */
const BANNED_STYLE = [
  [/\bhttps?:\/\//i, 'contains a URL'],
  [/^\s*[-*•]\s/m, 'contains a list item'],
  [/^#{1,6}\s/m, 'contains a markdown heading'],
  [/\*\*|__/, 'contains markdown emphasis'],
  [/\byou should\b|\bmake sure to\b|\bremember to\b|\bbe sure to\b/i, 'instructional second person'],
  [/\bdelve\b|\bin conclusion\b|\bfurthermore\b/i, 'filler register'],
  [/\?\s*$/, 'ends on a rhetorical question'],
];

/**
 * @param entry        the authored entry
 * @param ctx          {existing, sourceTexts, families}
 *   existing     array of entries already in the corpus (for distinctness)
 *   sourceTexts  array of strings the pipeline fetched (for originality)
 *   families     allowed family names
 * @returns {{ok: boolean, reasons: string[]}}
 */
export function gateFallacy(entry, { existing = [], sourceTexts = [], families = [] } = {}) {
  const reasons = [];
  const fail = (check, why) => reasons.push(`${check}: ${why}`);

  // ── structure ────────────────────────────────────────────────────────────
  if (!entry?.id || !/^[a-z0-9-]+$/.test(entry.id)) fail('structure', 'bad or missing id');
  if (!entry?.name || entry.name.length < 3) fail('structure', 'bad or missing name');
  if (families.length && !families.includes(entry?.family)) fail('structure', `family "${entry?.family}" not allowed`);

  const field = (path) => path.split('.').reduce((o, k) => o?.[k], entry);
  for (const [path, [lo, hi]] of Object.entries(LIMITS)) {
    const v = field(path);
    if (typeof v !== 'string') { fail('structure', `${path} missing`); continue; }
    if (v.length < lo) fail('structure', `${path} too short (${v.length} < ${lo})`);
    if (v.length > hi) fail('structure', `${path} too long (${v.length} > ${hi})`);
  }
  // Nothing below can run meaningfully on a malformed entry.
  if (reasons.length) return { ok: false, reasons };

  const prose = [entry.definition, entry.example, entry.notFallacy, entry.modern.now, entry.modern.test];

  // ── originality ──────────────────────────────────────────────────────────
  // Any seven-word run shared with a fetched source is treated as copied, full stop.
  // There is no threshold to argue about: the pipeline's promise is that the prose is
  // written here, and one reproduced sentence breaks it.
  if (sourceTexts.length) {
    const sourceShingles = new Set();
    for (const t of sourceTexts) for (const s of shingles(t)) sourceShingles.add(s);
    for (const text of prose) {
      for (const s of shingles(text)) {
        if (sourceShingles.has(s)) { fail('originality', `reproduces source text: "${s}"`); break; }
      }
    }
  }

  // ── distinctness ─────────────────────────────────────────────────────────
  for (const other of existing) {
    if (other.id === entry.id) { fail('distinctness', `id ${entry.id} already exists`); break; }
    const d = similarity(entry.definition, other.definition ?? '');
    if (d > 0.62) {
      fail('distinctness', `definition is ${(d * 100).toFixed(0)}% similar to "${other.id}"`);
      break;
    }
  }

  // ── house style ──────────────────────────────────────────────────────────
  for (const text of prose) {
    for (const [re, why] of BANNED_STYLE) {
      if (re.test(text)) { fail('style', why); break; }
    }
  }
  for (const re of BANNED_OPENINGS) {
    if (re.test(entry.definition.trim())) fail('style', 'formulaic opening');
  }

  // ── honesty ──────────────────────────────────────────────────────────────
  // `notFallacy` must describe a case where the move is legitimate. A field that only
  // restates the error is the commonest way this entry type goes hollow.
  const concedes = /\blegitimat|\bvalid\b|\breasonabl|\bappropriat|\bfair\b|\bcorrect\b|\bgenuinel|\bis not\b|\bnot a fallac|\bwhen the\b/i
    .test(entry.notFallacy);
  if (!concedes) fail('honesty', 'notFallacy never names a legitimate case');
  if (similarity(entry.notFallacy, entry.definition) > 0.55) {
    fail('honesty', 'notFallacy restates the definition');
  }
  if (similarity(entry.modern.now, entry.definition) > 0.55) {
    fail('honesty', 'modern reading restates the definition');
  }
  // A modern reading that names no mechanism is a mood, not a reading.
  const mechanism = /scale|incentiv|platform|algorithm|metric|audience|quote|clip|screenshot|search|feed|cheap|cost|volume|automat|dashboard|moderation|recommend|viral|engagement/i
    .test(entry.modern.now);
  if (!mechanism) fail('honesty', 'modern reading names no mechanism');

  return { ok: reasons.length === 0, reasons };
}

export const _internals = { shingles, similarity, LIMITS };
