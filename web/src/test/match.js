/**
 * Matching a set of answers to a thinker on the bench, and naming the sphere it sits in.
 *
 * The match is a cosine similarity between the reader's profile and each thinker's
 * weight vector, over the same closed axis vocabulary the questions score against.
 * Cosine rather than distance because what is being compared is the *shape* of a
 * profile, not its magnitude: someone who answered five questions and someone who
 * answered forty can hold the same position, and a distance metric would call the
 * short sitting less Kantian rather than equally Kantian on less evidence.
 *
 * Framework and disposition axes are compared separately and then combined, because
 * they measure different things and live on different scales — framework axes are
 * non-negative shares, dispositions are signed positions about zero. Pouring both
 * into one vector would let a strong disposition swamp the framework signal, which
 * is the part the reader actually asked about.
 */

import { FRAMEWORK_KEYS, DISPOSITION_KEYS, FRAMEWORKS } from './scoring.js';

/**
 * The sphere a result belongs to — the reader's "moral territory", named from the
 * framework that came top. One per framework axis, so the sphere and the
 * distribution can never disagree with each other.
 */
export const SPHERES = {
  consequentialist: {
    name: 'The Ledger',
    line: 'You keep an account of what happens to people, and you are prepared to be the one who reads it out.',
  },
  deontological: {
    name: 'The Line',
    line: 'There are things you will not do, and you would rather answer for the cost of refusing than for the act.',
  },
  virtue: {
    name: 'The Grain',
    line: 'You judge by what an act makes of the person doing it, and you think character is built rather than declared.',
  },
  contractarian: {
    name: 'The Table',
    line: 'You want to know what everyone at the table could accept, especially whoever has the least to bring to it.',
  },
  care: {
    name: 'The Bond',
    line: 'You start from the person in front of you, and you treat the pull of that as evidence rather than as bias.',
  },
  egoist: {
    name: 'The Keep',
    line: 'You think an ethics that never serves the person holding it is asking for a sacrifice it cannot justify.',
  },
  relativist: {
    name: 'The Many Rooms',
    line: 'You notice how much of what passes for moral truth is local, and you decline to pretend your room is the building.',
  },
  divine: {
    name: 'The Given',
    line: 'You hold that the standard was not ours to invent, and that a morality we authored is one we can revoke.',
  },
  existentialist: {
    name: 'The Open Ground',
    line: 'Nothing hands you the answer. You take that as the condition of the choice mattering rather than as its defeat.',
  },
  nihilist: {
    name: 'The Bare Fact',
    line: 'You doubt there is anything underneath the moral vocabulary, and you would rather say so than keep the furniture.',
  },
};

const dot = (a, b, keys) => keys.reduce((n, k) => n + (a[k] ?? 0) * (b[k] ?? 0), 0);
const norm = (v, keys) => Math.sqrt(keys.reduce((n, k) => n + (v[k] ?? 0) ** 2, 0));

/** Raw cosine in [−1,1]. Zero vectors have no direction, so they get none. */
function cosine(a, b, keys) {
  const na = norm(a, keys);
  const nb = norm(b, keys);
  if (na === 0 || nb === 0) return null;
  return dot(a, b, keys) / (na * nb);
}

/**
 * Framework axes are non-negative, so their cosine already lives in [0,1] and needs
 * no remapping. Rescaling it from [−1,1] — the obvious thing to write — squashes
 * every result into the top half of the scale, and since consequentialists all point
 * the same way it printed Parfit, Bentham, Bostrom and Singer at an identical 93%.
 * A figure that cannot separate four different people is not a measurement.
 *
 * Disposition axes are signed and genuinely do run to −1, so those are remapped.
 */
const frameworkScore = (c) => (c == null ? 0 : Math.max(0, c));
const dispositionScore = (c) => (c == null ? 0.5 : (c + 1) / 2);

/**
 * @param {object} result the object returned by `score()`
 * @param {{id:string,name:string,vector:object}[]} bench
 * @returns {{philosopher:object, fit:number, shared:string[]}[]} best first
 */
export function matchPhilosophers(result, bench) {
  const profile = {};
  for (const f of result.frameworks) profile[f.key] = f.share;
  for (const d of result.dispositions) if (d.answered) profile[d.key] = d.value;

  const answeredDispositions = DISPOSITION_KEYS.filter(
    (k) => result.dispositions.find((d) => d.key === k)?.answered,
  );

  return bench
    .map((philosopher) => {
      const frameworkFit = frameworkScore(cosine(profile, philosopher.vector, FRAMEWORK_KEYS));
      const dispositionFit = answeredDispositions.length
        ? dispositionScore(cosine(profile, philosopher.vector, answeredDispositions))
        : 0.5;

      // Framework carries most of the weight. Disposition is a tiebreaker between
      // thinkers who share a framework — it is what separates Bentham from Mill, or
      // Kant from Anscombe, and it should not be able to override the framework itself.
      const fit = frameworkFit * 0.75 + dispositionFit * 0.25;

      // The axes both the reader and the thinker actually lean on. This is what the
      // result cites, so a match can be checked rather than taken on faith.
      const shared = FRAMEWORK_KEYS
        .filter((k) => (profile[k] ?? 0) >= 0.1 && (philosopher.vector[k] ?? 0) >= 0.4)
        .sort((a, b) => (profile[b] ?? 0) - (profile[a] ?? 0));

      return { philosopher, fit, frameworkFit, shared };
    })
    .sort((a, b) => b.fit - a.fit || a.philosopher.name.localeCompare(b.philosopher.name));
}

/**
 * The thinkers the answers cannot tell apart from the leader.
 *
 * Some clusters on this bench really are near-identical on ten axes — Bentham,
 * Singer, Parfit and Bostrom differ over what to count, not over whether counting is
 * the method — so a short test lands on all of them at once. Sorting them into a
 * ranked list and printing 87%, 87%, 87% presents an arbitrary winner as a finding.
 * Naming the tie instead is both truer and more informative, and it tells the reader
 * exactly what a longer sitting would buy them.
 */
export function tiedWith(matches, epsilon = 0.005) {
  if (!matches.length) return [];
  const top = matches[0].fit;
  return matches.slice(1).filter((m) => top - m.fit <= epsilon);
}

/** The sphere for a result, or null when nothing was answered. */
export function sphereFor(result) {
  if (!result.lead) return null;
  return { key: result.lead.key, ...SPHERES[result.lead.key], framework: FRAMEWORKS[result.lead.key] };
}
