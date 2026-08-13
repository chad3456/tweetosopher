/**
 * The arithmetic behind a verdict.
 *
 * Everything here is a pure function of the answers given. There is no model in this
 * path and no randomness: the same answers always produce the same result, and every
 * number the app prints can be recomputed by hand from what the reader clicked. That
 * is the whole claim the product makes about itself, so it is worth keeping true.
 */

export const FRAMEWORKS = {
  consequentialist: {
    label: 'Consequentialist',
    gloss: 'Rightness is fixed by outcomes. What matters is the state of the world you leave.',
  },
  deontological: {
    label: 'Deontological',
    gloss: 'Rightness is fixed by duties and rights, whatever the outcome.',
  },
  virtue: {
    label: 'Virtue',
    gloss: 'The question is what a person of good character would do, and what doing it makes of you.',
  },
  contractarian: {
    label: 'Contractarian',
    gloss: 'Rightness is what free people could agree to, or could not reasonably reject.',
  },
  care: {
    label: 'Care',
    gloss: 'Morality begins in relationship, dependency and particular attachment.',
  },
  egoist: {
    label: 'Egoist',
    gloss: "The agent's own interest is the standard.",
  },
  relativist: {
    label: 'Relativist',
    gloss: 'Moral claims hold relative to a culture, framework or standpoint.',
  },
  divine: {
    label: 'Theological',
    gloss: 'Morality is grounded in God, sacred law, or a transcendent order.',
  },
  existentialist: {
    label: 'Existentialist',
    gloss: 'There is no given standard. You are responsible for the value you create.',
  },
  nihilist: {
    label: 'Nihilist',
    gloss: 'Moral claims have no truth-makers. Nothing underwrites them.',
  },
};

export const DISPOSITIONS = {
  scope: { label: 'Scope', low: 'those near you', high: 'everyone affected' },
  agency: { label: 'Doing and allowing', low: 'letting differs from doing', high: 'they weigh the same' },
  authority: { label: 'Authority', low: 'defer to legitimate authority', high: 'conscience overrides' },
  certainty: { label: 'Certainty', low: 'judgement is revisable', high: 'some truths admit no exception' },
  affect: { label: 'Source', low: 'follow the argument', high: 'follow the intuition' },
};

export const FRAMEWORK_KEYS = Object.keys(FRAMEWORKS);
export const DISPOSITION_KEYS = Object.keys(DISPOSITIONS);

/**
 * @typedef {{entryId: string, questionId: string, optionId: string}} Answer
 */

/** Finds the option an answer refers to. Returns null if the corpus has moved under it. */
function resolve(corpus, answer) {
  const entry = corpus.byId.get(answer.entryId);
  const question = entry?.questions.find((q) => q.id === answer.questionId);
  const option = question?.options.find((o) => o.id === answer.optionId);
  return option ? { entry, question, option } : null;
}

/**
 * Sums every answer's scores, then normalises the framework axes into shares of 1.
 *
 * Shares, not a 0-100 "score". Any such score would be the leader divided by the
 * leader, so it would read 100 for every person who ever took the test — a figure
 * that looks like a measurement and carries no information.
 *
 * Dispositions are averaged rather than summed, because they are signed positions on
 * a scale rather than quantities: answering ten questions should not make you twice
 * as certain as answering five, it should measure the same disposition more reliably.
 */
export function score(corpus, answers) {
  const frameworkTotals = Object.fromEntries(FRAMEWORK_KEYS.map((k) => [k, 0]));
  const dispositionTotals = Object.fromEntries(DISPOSITION_KEYS.map((k) => [k, 0]));
  const dispositionCounts = Object.fromEntries(DISPOSITION_KEYS.map((k) => [k, 0]));

  const resolved = [];
  for (const answer of answers) {
    const hit = resolve(corpus, answer);
    if (!hit) continue;
    resolved.push({ ...hit, answer });
    for (const [axis, value] of Object.entries(hit.option.scores)) {
      if (axis in frameworkTotals) frameworkTotals[axis] += value;
      else if (axis in dispositionTotals) {
        dispositionTotals[axis] += value;
        dispositionCounts[axis] += 1;
      }
    }
  }

  const sum = Object.values(frameworkTotals).reduce((a, b) => a + b, 0);
  const frameworks = FRAMEWORK_KEYS.map((key) => ({
    key,
    ...FRAMEWORKS[key],
    total: frameworkTotals[key],
    share: sum > 0 ? frameworkTotals[key] / sum : 0,
  })).sort((a, b) => b.share - a.share);

  const dispositions = DISPOSITION_KEYS.map((key) => ({
    key,
    ...DISPOSITIONS[key],
    value: dispositionCounts[key] ? dispositionTotals[key] / dispositionCounts[key] : 0,
    answered: dispositionCounts[key],
  }));

  const [lead, second] = frameworks;
  return {
    frameworks,
    dispositions,
    resolved,
    answered: resolved.length,
    lead: lead && lead.share > 0 ? lead : null,
    margin: lead && second ? lead.share - second.share : 0,
  };
}

/**
 * Which result band each answered entry lands the reader in.
 *
 * Scored per entry rather than globally, because an entry's outcomes are written about
 * *that* dilemma. A reader can be consequentialist overall and still land on the
 * deontological band of one case, and that disagreement is the interesting part.
 */
export function verdicts(corpus, answers) {
  const byEntry = new Map();
  for (const answer of answers) {
    const hit = resolve(corpus, answer);
    if (!hit) continue;
    if (!byEntry.has(hit.entry.id)) byEntry.set(hit.entry.id, { entry: hit.entry, totals: {} });
    const bucket = byEntry.get(hit.entry.id).totals;
    for (const [axis, value] of Object.entries(hit.option.scores)) {
      if (FRAMEWORK_KEYS.includes(axis)) bucket[axis] = (bucket[axis] ?? 0) + value;
    }
  }

  const out = [];
  for (const { entry, totals } of byEntry.values()) {
    const ranked = Object.entries(totals).sort((a, b) => b[1] - a[1]);
    if (!ranked.length) continue;
    const [dominant, top] = ranked[0];
    const outcome = entry.outcomes.find((o) => o.dominant === dominant);
    if (!outcome) continue;
    const total = ranked.reduce((n, [, v]) => n + v, 0);
    out.push({
      entry,
      outcome,
      dominant,
      share: total > 0 ? top / total : 0,
      // Two axes within a whisker of each other means the reader was pulled both ways
      // in this case. Saying so is more honest than printing the winner alone.
      contested: ranked.length > 1 && top - ranked[1][1] < 0.25 * top,
      runnerUp: ranked[1] ? entry.outcomes.find((o) => o.dominant === ranked[1][0]) ?? null : null,
    });
  }
  return out.sort((a, b) => b.share - a.share);
}

/** A one-line name for the profile, built from the two strongest framework signals. */
export function nameFor(result) {
  if (!result.lead) return 'Unscored';
  const [first, second] = result.frameworks;
  const decisive = result.margin >= 0.12;
  if (decisive || !second || second.share < 0.08) return `The ${first.label}`;
  return `The ${first.label}, ${second.label} Underneath`;
}
