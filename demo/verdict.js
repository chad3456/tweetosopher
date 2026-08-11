import { byId } from '../server/lib/philosophers.js';

/**
 * A canned verdict for zero-credential mode.
 *
 * This exists so the museum is never empty: with no ANTHROPIC_API_KEY at all,
 * the site still runs end to end and you can see exactly what the real engine
 * produces. It is written by hand in the same shape the model returns, and it
 * is clearly labelled as a demo in the response so the UI can say so.
 */

const meta = (id) => {
  const p = byId(id);
  return { id: p.id, name: p.name, era: p.era, school: p.school };
};

/** Find the corpus marker for a known demo item, so the citation is real. */
function markerFor(corpus, itemId) {
  for (const [n, item] of corpus.index.entries()) {
    if (item.id === itemId) return n;
  }
  return 0;
}

const TWITTER_VERDICT = (corpus) => ({
  nameTag: 'Custodian Of The Unsent Draft',
  tagline:
    'Posts like someone tidying a room they have already decided to leave.',
  verdict: {
    philosopherId: 'byung-chul-han',
    matchScore: 81,
    reasoning:
      'The tell is not the subject matter, it is the direction of the accusation. This account writes about exhaustion constantly and almost never blames an employer, a platform, or a person. In [13] burnout is relocated from the work to "performing a self that could do the work happily, which is a second job nobody is paying you for" — that is not a complaint about a boss, it is a description of a subject who has internalised the boss and now supervises herself. Han calls this the achievement subject, and the entire timeline is written from inside it.\n\nThe second signal is the register of the fatigue. This is not anger; anger would imply an antagonist. It is a kind of elegiac tiredness that keeps reaching for small, slow, unproductive things and finding them already colonised. The plant in [5] is deliberately not named — an attempt at a relation with no performance attached. The twelve pages re-read four nights running in [8] is an argument for a kind of attention that produces nothing. Both are Han\'s counter-programme almost verbatim, arrived at independently.\n\nWhat pushes this past the near-misses is the absence of a demand. Fisher was the obvious alternative, and [17] — nostalgia as "longing for a future that the past was still allowed to have" — is hauntology stated cleanly enough that a dissent from him is recorded below. But Fisher wants a political rupture; this account has no such expectation. It withdraws rather than organises. Debord was the other candidate, and [6] reads the feed exactly as he would, but Debord is contemptuous where this account is mostly sad, and sadness is the more honest reading of the corpus.\n\nThe amplification confirms it. What is liked here is not analysis of power but permission to be less: [21], that most people would be happier being slightly worse at their jobs; [24], that a museum is only a building where we agree to look slowly. This is a person collecting evidence that the achievement subject can be put down, and not yet putting it down.',
    anecdote:
      'Han has spent years refusing the conditions of his own profession — declining most interviews, teaching in near-silence, and reportedly answering questions about his availability by saying he was tending his garden. The garden was not a metaphor; he wrote about it while everyone assumed it was one. That is the exact structure of [5] and [12]: the long way to the shop is not a productivity hack and not a joke, it is a small refusal that the account is slightly embarrassed to have needed.',
    epigraph:
      'The tired self is not the one who was worked too hard. It is the one who could never stop volunteering.',
  },
  panel: [
    {
      philosopherId: 'montaigne',
      position: 'concurring',
      remark:
        'The drafts folder is the honest account — [16] — and I have never read a truer confession of the essayist\'s vice. We publish the sanded thing and keep the grain.',
    },
    {
      philosopherId: 'diogenes',
      position: 'dissenting',
      remark:
        'Nine days out of the group chat and back in, and we are to call this a philosophy? [18] is a man describing his own leash with unusual elegance. Put the phone in the barrel or stop writing about the barrel.',
    },
    {
      philosopherId: 'fisher',
      position: 'dissenting',
      remark:
        'Han lets this end in a north-facing room. But [17] is mine — a cancelled future, correctly diagnosed — and the diagnosis is being used as a place to sit down rather than a reason to move.',
    },
    {
      philosopherId: 'weil',
      position: 'concurring',
      remark:
        'Four nights on the same twelve pages, arriving differently each time. [8] is attention, which is rarer than intelligence and costs more. I would not call this exhaustion. I would call it the beginning of something.',
    },
  ],
  definingPost: {
    index: markerFor(corpus, 'd13'),
    why: 'Because it performs the move the whole account is built on: it takes a public, structural complaint — burnout — and quietly relocates the labour inside the person, where no employer can be blamed and no one can be asked for relief. Han would note that this is precisely what makes the achievement subject so efficient and so tired. It is also, tellingly, the most amplified thing here, which means the diagnosis was recognised widely and changed nothing.',
  },
  themes: [
    {
      name: 'Self-supervision',
      evidence:
        'Burnout located in the performance rather than the work ([13]), decisions costing more than their outcomes ([2]), ideas tested for whether they survive without an audience ([15]).',
    },
    {
      name: 'Attention as the last unowned thing',
      evidence:
        'Twelve pages re-read four nights running ([8]), grief over a closed tab ([11]), the liked line about faking spent attention ([20]).',
    },
    {
      name: 'Suspicion of the platform vernacular',
      evidence:
        '"Content creator" as fifteen years of damage ([4]), the algorithm as an imagined audience rather than a machine ([6]), criticism reframed as the noise a defendant makes ([10]).',
    },
    {
      name: 'Withdrawal, attempted and reversed',
      evidence:
        'Leaving and rejoining the group chat unnoticed ([18]), the long way to the shop as a venue rather than a solution ([12]).',
    },
  ],
  tensions: [
    'The account argues that ideas which need an audience are suspect ([15]) and reserves its most polished writing for its highest-reach posts ([4], [10], [13]).',
    'Its own words are gentle and unaccusing; its likes are considerably sharper ([21], [23]) — the taste has an appetite the voice does not admit to.',
    'It diagnoses performance as the source of exhaustion while performing the diagnosis, which it appears to know ([16]) and has decided to find funny rather than devastating ([15]).',
  ],
  shadow: {
    philosopherId: 'aristotle',
    why: 'Aristotle would say the answer is habituation: you become temperate by practising temperance, and the group chat problem is solved on the ninth day by not rejoining. This account would find that unbearable — not because it is wrong, but because it treats character as a project, and a project is exactly the thing that turned into a second job. The argument would be short and would end with both parties certain the other had missed the point.',
  },
  readingList: [
    {
      title: 'The Burnout Society',
      author: 'Byung-Chul Han',
      why: 'The book that already contains [13], stated colder and at length.',
    },
    {
      title: 'Gravity and Grace',
      author: 'Simone Weil',
      why: 'For the four nights on twelve pages — attention treated as a moral capacity rather than a resource.',
    },
    {
      title: 'The Uses of Boredom',
      author: 'Josef Pieper (Leisure: The Basis of Culture)',
      why: 'The oldest available argument that unproductive time is not a failure state.',
    },
  ],
  confidence: {
    level: 'medium',
    caveat:
      'This is a demonstration verdict shipped with the project, not a live reading. It is written over a fixed sample corpus of about two dozen items with no replies to strangers, no private context, and no way to tell a persona from a person.',
  },
});

const SUBSTACK_VERDICT = (corpus) => ({
  nameTag: 'Registrar Of Small Refusals',
  tagline: 'Writes essays the way other people cancel plans: carefully, and with reasons.',
  verdict: {
    philosopherId: 'montaigne',
    matchScore: 78,
    reasoning:
      'The form is the argument here. Every piece begins with a small private irritation — a browser tab, a phrase people use, a method of planning the day — and then declines to resolve it into advice. In [0] the productivity essay refuses its own genre in the last line: the alternative "is not a softer system", it is permission to ask a different question. That refusal to arrive is Montaigne\'s signature and it is almost impossible to fake.\n\nThe self is used as the primary instrument throughout, and used honestly rather than heroically. [1] admits the writing gets worse when the imagined readership grows, which is a confession against interest from someone publishing to a list. [3] mourns not the unread article but "the self who would have had that hour". Montaigne wrote about his kidney stones and his memory failing for exactly this reason: the nearest available specimen is the only one you can examine closely.\n\nHan was the obvious rival and dissents below, because the diagnostic content is genuinely his — [0] and [1] describe the achievement subject with precision. But Han is a systematiser with a thesis, and these essays keep declining a thesis. Where Han would name a condition and indict it, this writer notices something, turns it over, and stops at the point where a conclusion would be tidy. [2] is the clearest case: it takes a sentence apart, admits it is not against talking, and leaves it there.\n\nWhat keeps the score at seventy-eight rather than higher is the consistency of the register. Montaigne was ramshackle on purpose and would digress into a story about his horse. These essays are shapelier than that — each one arrives at a line good enough to quote, which is a discipline he never submitted to and which the platform quietly requires.',
    anecdote:
      'Montaigne had the beams of his library painted with sentences he wanted to keep arguing with, and then wrote essays that frequently contradicted them; when he revised, he added rather than corrected, letting the older self stand beside the newer one on the same page. That is the structure of [4] against [0] — slowness defended in one essay and then examined as a status claim in another, with neither retracted.',
    epigraph:
      'I do not describe the thing. I describe the passage — and I am, myself, the passage.',
  },
  panel: [
    {
      philosopherId: 'byung-chul-han',
      position: 'dissenting',
      remark:
        'The warehouse in [0] and the continuous stage in [1] are one condition, not two essays. To keep circling it without naming it is itself a symptom of the thing being circled.',
    },
    {
      philosopherId: 'sontag',
      position: 'concurring',
      remark:
        'What I like here is that [4] catches deep reading in the act of becoming a status claim. Very few people writing about attention are willing to notice that their own attentiveness is being displayed.',
    },
    {
      philosopherId: 'wittgenstein',
      position: 'unsettled',
      remark:
        '[2] is right that the trouble is in the sentence — "we should have a conversation" does no work at all. Whether that is a discovery about language or about cowardice, the essay does not settle, and I am not sure it should.',
    },
    {
      philosopherId: 'kierkegaard',
      position: 'concurring',
      remark:
        'Four readers rather than forty thousand. The crowd is untruth, and this writer has found that out empirically and is trying to publish anyway. I know that trap intimately.',
    },
  ],
  definingPost: {
    index: markerFor(corpus, 's2'),
    why: 'Because it is the essay in which the writer\'s method turns on the writer. It starts as cultural observation — the platforms made the performance continuous — and ends as an admission about their own prose quality under an imagined audience. Montaigne\'s whole innovation was that the specimen and the examiner are the same person, and this is the piece where that becomes unavoidable rather than decorative.',
  },
  themes: [
    {
      name: 'Refusing the genre from inside it',
      evidence:
        'A productivity essay that declines to supply a method ([0]); an attention essay that turns on attention as a status claim ([4]).',
    },
    {
      name: 'Language as a place to hide',
      evidence:
        '"We should have a conversation" examined as avoidance with the grammar of engagement ([2]).',
    },
    {
      name: 'Promises to a future self',
      evidence:
        'Open tabs read as a moral document owed to a better-rested person who never arrives ([3]).',
    },
    {
      name: 'Audience size as a corruption of voice',
      evidence:
        'Writing better at four readers and worse at forty thousand ([1]).',
    },
  ],
  tensions: [
    'The essays argue that arriving at a tidy conclusion is a form of dishonesty, and each one nonetheless closes on a line built to be quoted.',
    '[4] warns that slowness has become a performance, published on a platform whose subscribe button rewards exactly that performance.',
  ],
  shadow: {
    philosopherId: 'kant',
    why: 'Kant would ask what rule is actually being proposed, and would keep asking until an answer arrived. This writer\'s entire practice is the conviction that the rule is the wrong output — that a well-examined uncertainty is worth more than a maxim. Neither would concede, and the essay that came out of the argument would be the best thing on the list.',
  },
  readingList: [
    {
      title: 'Essays (Book II, "On Repentance")',
      author: 'Michel de Montaigne',
      why: 'The template, including the refusal to correct the earlier self.',
    },
    {
      title: 'Against Interpretation',
      author: 'Susan Sontag',
      why: 'For the suspicion in [4] that a way of reading has become a way of being seen.',
    },
    {
      title: 'The Burnout Society',
      author: 'Byung-Chul Han',
      why: 'The thesis these essays keep walking up to and declining to state.',
    },
  ],
  confidence: {
    level: 'medium',
    caveat:
      'This is a demonstration verdict shipped with the project, not a live reading. It works from five sample essays, two of them condensed — enough for method and voice, not enough to know what this writer avoids.',
  },
});

/** Same shape the live engine produces — see citationIndex() in engine.js. */
function demoCitations(raw, corpus) {
  const wanted = new Set();
  const walk = (node) => {
    if (typeof node === 'string') {
      for (const m of node.matchAll(/\[(\d{1,3})\]/g)) wanted.add(Number(m[1]));
    } else if (Array.isArray(node)) node.forEach(walk);
    else if (node && typeof node === 'object') Object.values(node).forEach(walk);
  };
  walk(raw);

  const out = {};
  for (const n of wanted) {
    const item = corpus.index.get(n);
    if (!item) continue;
    out[n] = {
      kind: item.kind,
      likes: item.likes ?? 0,
      createdAt: item.createdAt ?? null,
      excerpt: (item.title || item.text || '').slice(0, 140),
    };
  }
  return out;
}

export function demoVerdict({ corpus, collection }) {
  const raw =
    collection.platform === 'substack'
      ? SUBSTACK_VERDICT(corpus)
      : TWITTER_VERDICT(corpus);

  const cited = corpus.index.get(raw.definingPost.index);

  return {
    ...raw,
    verdict: { ...raw.verdict, philosopher: meta(raw.verdict.philosopherId) },
    panel: raw.panel.map((p) => ({ ...p, philosopher: meta(p.philosopherId) })),
    shadow: { ...raw.shadow, philosopher: meta(raw.shadow.philosopherId) },
    definingPost: {
      ...raw.definingPost,
      text: cited?.text ?? null,
      title: cited?.title ?? null,
      url: cited?.url ?? null,
      createdAt: cited?.createdAt ?? null,
      kind: cited?.kind ?? null,
      parts: cited?.parts ?? null,
      via: cited?.via ?? null,
    },
    citations: demoCitations(raw, corpus),
    subject: collection.profile,
    platform: collection.platform,
    stats: corpus.stats,
    coverage: collection.coverage,
    pipeline: collection.pipeline ?? null,
    demo: true,
    model: 'demo',
    generatedAt: new Date().toISOString(),
  };
}
