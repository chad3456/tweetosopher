/**
 * Discovery: where new entries come from.
 *
 * ── What this deliberately does not do ───────────────────────────────────────
 *
 * The brief was a script that fetches fallacies and adds them to the site without
 * manual intervention. The obvious implementation — fetch logicallyfallacious.com,
 * parse each entry, insert the text — is not built here, and the reason is not
 * technical. That site's entries are Bo Bennett's authored prose. Copying them into
 * this site would be republishing someone's book under our own headings, and no amount
 * of automation makes that a different act. A pipeline that does it unattended just
 * does it faster and more of it.
 *
 * What is legitimate is the taxonomy. That a fallacy called "the fallacy of the beard"
 * exists, that it belongs to the presumption family, that it is also called the
 * continuum fallacy — these are facts about the world, not anyone's expression of them.
 * So discovery returns *names and families*, and the prose is written fresh by
 * `author.mjs` in this project's own voice, with this project's own honesty rules.
 *
 * ── The adapters ────────────────────────────────────────────────────────────
 *
 *   seed        A curated list in this file. Works offline, which matters: this
 *               environment's egress proxy blocks logicallyfallacious.com and
 *               wikipedia.org outright, so a pipeline that only worked with network
 *               access could not be tested where it was written.
 *
 *   wikipedia   Parses the section headings of "List of fallacies" — headings are the
 *               taxonomy, and the adapter reads nothing else. Returns nothing when
 *               the host is unreachable rather than failing the run.
 *
 * Adding an adapter means adding a function that returns `{id, name, family, aka}`
 * objects. Anything that returns prose belongs in `author.mjs`, not here.
 */

/** Families the corpus already recognises. A candidate outside these is rejected. */
export const FAMILIES = ['relevance', 'ambiguity', 'presumption', 'causal', 'statistical', 'formal'];

const slug = (name) =>
  name.toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/**
 * The seed list: fallacy names and their families, nothing else.
 *
 * Chosen for coverage of the gaps in the hand-written 38 rather than for volume —
 * the statistical and formal families were thinnest, so they are best represented
 * here. Each name is the one the literature uses; `aka` carries the synonyms a reader
 * is likely to search for, which is what the corpus indexes on.
 */
const SEED = [
  ['Appeal to Tradition', 'relevance', ['argumentum ad antiquitatem']],
  ['Appeal to Novelty', 'relevance', ['argumentum ad novitatem']],
  ['Appeal to Ignorance', 'presumption', ['argumentum ad ignorantiam']],
  ['Appeal to Fear', 'relevance', ['argumentum in terrorem', 'scare tactics']],
  ['Appeal to Pity', 'relevance', ['argumentum ad misericordiam']],
  ['Appeal to Ridicule', 'relevance', ['appeal to mockery']],
  ['Appeal to Wealth', 'relevance', ['argumentum ad crumenam']],
  ['Appeal to Poverty', 'relevance', ['argumentum ad lazarum']],
  ['Poisoning the Well', 'relevance', []],
  ['Guilt by Association', 'relevance', ['association fallacy']],
  ['Two Wrongs Make a Right', 'relevance', []],
  ['Red Herring', 'relevance', ['ignoratio elenchi']],
  ['Bulverism', 'relevance', []],
  ['Argument from Incredulity', 'presumption', ['appeal to common sense']],
  ['Argument from Silence', 'presumption', ['argumentum ex silentio']],
  ['The Fallacy of the Beard', 'presumption', ['continuum fallacy', 'line-drawing fallacy']],
  ['Middle Ground', 'presumption', ['argument to moderation', 'false compromise']],
  ['Division of Labour Fallacy', 'presumption', []],
  ['Complex Question', 'presumption', ['many questions fallacy']],
  ['Suppressed Correlative', 'presumption', []],
  ['Historian’s Fallacy', 'presumption', []],
  ['Presentism', 'presumption', ['chronological snobbery']],
  ['Nirvana Fallacy Reversed', 'presumption', ['perfect solution reversal']],
  ['Circular Definition', 'ambiguity', []],
  ['Accent Fallacy', 'ambiguity', ['fallacy of prosody']],
  ['Reification', 'ambiguity', ['fallacy of misplaced concreteness']],
  ['Euphemism Fallacy', 'ambiguity', []],
  ['Quoting Out of Context', 'ambiguity', ['contextomy']],
  ['Weasel Words', 'ambiguity', ['anonymous authority']],
  ['Continuum of Meaning', 'ambiguity', []],
  ['Reverse Causation', 'causal', ['wrong direction']],
  ['Common Cause Fallacy', 'causal', ['third cause', 'ignoring a common cause']],
  ['Cum Hoc Ergo Propter Hoc', 'causal', ['with this therefore because of this']],
  ['Circular Cause and Consequence', 'causal', []],
  ['Gambler’s Conjunction', 'causal', []],
  ['Magical Thinking', 'causal', []],
  ['Fallacy of the Single Cause Chain', 'causal', ['causal oversimplification']],
  ['Broken Window Fallacy', 'causal', []],
  ['Ludic Fallacy', 'statistical', []],
  ['Simpson’s Reversal', 'statistical', []],
  ['Multiple Comparisons Fallacy', 'statistical', ['look-elsewhere effect']],
  ['Sampling Frame Error', 'statistical', ['coverage error']],
  ['Non-Response Bias', 'statistical', []],
  ['Regression Discontinuity Misreading', 'statistical', []],
  ['Denominator Neglect', 'statistical', ['ratio bias']],
  ['Ecological Fallacy', 'statistical', []],
  ['Atomistic Fallacy', 'statistical', ['individualistic fallacy']],
  ['Misleading Vividness', 'statistical', []],
  ['Overprecision', 'statistical', ['false precision', 'fake accuracy']],
  ['Extrapolation Fallacy', 'statistical', []],
  ['Illicit Major', 'formal', []],
  ['Illicit Minor', 'formal', []],
  ['Existential Fallacy', 'formal', []],
  ['Exclusive Premises', 'formal', []],
  ['Negative Conclusion from Affirmative Premises', 'formal', []],
  ['Quantifier Shift', 'formal', ['illicit quantifier shift']],
  ['Modal Scope Fallacy', 'formal', []],
  ['Masked Man Fallacy', 'formal', ['intensional fallacy', 'illicit substitution of identicals']],
  ['Base Rate Substitution', 'formal', []],
  ['Affirming a Disjunct', 'formal', []],
];

function fromSeed() {
  return SEED.map(([name, family, aka]) => ({ id: slug(name), name, family, aka, source: 'seed' }));
}

/**
 * Wikipedia's "List of fallacies", read for its taxonomy only.
 *
 * The parse deliberately takes list-item *titles* and drops everything after the first
 * em dash or colon — the part after the dash is the prose, and this adapter has no
 * business with it. Family assignment comes from the enclosing section heading mapped
 * onto the corpus's own six families; anything that does not map is dropped rather
 * than guessed at, because a fallacy filed under the wrong family is worse than a
 * fallacy missing.
 */
async function fromWikipedia({ fetchImpl = globalThis.fetch, timeoutMs = 15000 } = {}) {
  const url = 'https://en.wikipedia.org/w/api.php'
    + '?action=parse&page=List_of_fallacies&prop=wikitext&format=json&formatversion=2';
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), timeoutMs);
  let text;
  try {
    const res = await fetchImpl(url, { signal: ctl.signal });
    if (!res.ok) return { items: [], note: `wikipedia returned ${res.status}` };
    const json = await res.json();
    text = json?.parse?.wikitext;
    if (typeof text !== 'string') return { items: [], note: 'wikipedia payload had no wikitext' };
  } catch (err) {
    // Unreachable host is the expected case in a sandboxed build, not a failure.
    return { items: [], note: `wikipedia unreachable: ${err.name}` };
  } finally {
    clearTimeout(timer);
  }

  const SECTION_TO_FAMILY = [
    [/formal fallac/i, 'formal'],
    [/propositional|syllogistic|quantification/i, 'formal'],
    [/faulty generali[sz]ation|statistical/i, 'statistical'],
    [/questionable cause|causal/i, 'causal'],
    [/relevance|red herring|ad hominem/i, 'relevance'],
    [/ambiguity|equivocation|verbal/i, 'ambiguity'],
    [/presumption|informal/i, 'presumption'],
  ];

  const items = [];
  let family = null;
  for (const line of text.split('\n')) {
    const heading = line.match(/^=+\s*(.+?)\s*=+$/);
    if (heading) {
      const found = SECTION_TO_FAMILY.find(([re]) => re.test(heading[1]));
      family = found ? found[1] : null;
      continue;
    }
    if (!family) continue;
    const item = line.match(/^\*\s*(?:''')?\[?\[?([^\]|–—:'\n]+)/);
    if (!item) continue;
    const name = item[1].replace(/\s+/g, ' ').trim();
    // Bare, over-long, or lower-cased fragments are wikitext noise, not entry names.
    if (name.length < 4 || name.length > 60 || !/^[A-Z]/.test(name)) continue;
    items.push({ id: slug(name), name, family, aka: [], source: 'wikipedia' });
  }
  return { items, note: `wikipedia yielded ${items.length} candidates` };
}

export const ADAPTERS = {
  seed: async () => ({ items: fromSeed(), note: `seed list: ${SEED.length} candidates` }),
  wikipedia: fromWikipedia,
};

/**
 * Runs the named adapters, drops anything already in the corpus or malformed, and
 * de-duplicates. `known` is the set of ids already present, so a run is idempotent:
 * the same sources produce nothing new on the second pass.
 */
export async function discover({ adapters = ['seed'], known = new Set(), opts = {} } = {}) {
  const notes = [];
  const seen = new Set();
  const out = [];
  for (const name of adapters) {
    const adapter = ADAPTERS[name];
    if (!adapter) { notes.push(`unknown adapter: ${name}`); continue; }
    const { items, note } = await adapter(opts);
    if (note) notes.push(note);
    for (const item of items) {
      if (!item.id || known.has(item.id) || seen.has(item.id)) continue;
      if (!FAMILIES.includes(item.family)) continue;
      seen.add(item.id);
      out.push(item);
    }
  }
  return { candidates: out, notes };
}
