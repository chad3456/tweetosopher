/**
 * The Selective Outrage test.
 *
 * The brief for this was to expose the performed morality of people online. There is
 * an easy version of that — show the user some influencers and let them rate how fake
 * each one is — and it would be worthless twice over. It would measure nothing about
 * the user, and it would be an exercise in exactly the moral grandstanding the corpus
 * documents: condemnation as self-presentation, at no cost to the condemner.
 *
 * So the instrument points the other way. Each case is one act, described identically,
 * with one detail changed: who did it.
 *
 * ── Why this is a within-subject design ──────────────────────────────────────
 *
 * The first version of this test was between-subjects: each reader saw one arm, and
 * the reveal said honestly that their own answers could not demonstrate their own
 * bias. That is the design the research uses, and it is the right design for
 * measuring a population.
 *
 * It is the wrong design for telling one person something true about themselves. A
 * single reader who sees one arm generates no gap, so any verdict drawn from it —
 * "hypocrite", "consistent" — would be a Barnum statement with a scale attached, which
 * is the exact failure the `barnum-vs-instrument` glossary entry exists to name.
 *
 * So the reader now rates *both* arms of every case. The cost is real and is stated in
 * the reveal: seeing the pair makes consistency the obvious demand, so measured gaps
 * are smaller than the population effect, and a reader who spots the design can score
 * themselves clean deliberately. The mitigation is separation — `INTERLEAVE` below
 * orders the sitting so the two halves of a pair are never within five questions of
 * each other, and the second arm is phrased as a fresh case rather than a callback.
 *
 * What that buys is a gap that is genuinely the reader's own: the same person, the same
 * act, two actors, two numbers. Everything the result page claims is computed from
 * those gaps, and nothing is claimed that they do not support.
 *
 * ── The self-prediction ──────────────────────────────────────────────────────
 *
 * Before the cases, the reader predicts their own consistency. This is not decoration:
 * the difference between the predicted gap and the measured one is the only honest
 * route to a verdict about self-knowledge rather than about politics, and it connects
 * to the third-person effect in the glossary — nearly everyone believes the influence
 * lands on other people.
 *
 * The pairs are deliberately built to catch everyone. Some vary a political tribe in
 * each direction, some vary wealth, some vary whether the actor is a stranger or
 * someone the reader is invited to identify with. An instrument that only embarrasses
 * one side is a partisan tool with a scale attached.
 */

export const OUTRAGE_ITEMS = [
  {
    id: 'flight',
    varies: 'Whether the traveller campaigns on the issue they are undercutting',
    act: 'takes eleven long-haul flights in a year for work and holidays',
    // `axis` groups cases so the result can say what a reader's gaps have in common.
    axis: 'sincerity',
    arms: [
      { id: 'a', actor: 'A climate campaigner with a large following' },
      { id: 'b', actor: 'An oil-company executive' },
    ],
    reveal:
      'The act and its emissions are identical. Most people rate the campaigner more harshly, '
      + 'because hypocrisy is a separate offence from the harm and we price it separately. That is '
      + 'defensible — insincerity is real evidence about a person. It becomes a problem when the '
      + 'extra condemnation displaces attention from the larger emitter, which is the outcome the '
      + 'executive would choose if asked.',
  },
  {
    id: 'donation',
    varies: 'Which political side the donor is on',
    act: 'gives £2 million to a political party and is later appointed to a public board',
    axis: 'tribe',
    // `favours` names which arm a reader is treating leniently when the gap runs this
    // way, so the summary can say something more specific than "you were inconsistent".
    favours: { a: 'government', b: 'opposition' },
    arms: [
      { id: 'a', actor: 'A donor to the governing party' },
      { id: 'b', actor: 'A donor to the opposition' },
    ],
    reveal:
      'Identical in every respect except the party. Ditto and colleagues, meta-analysing 51 '
      + 'experimental studies, found that partisans on both sides evaluate identical evidence more '
      + 'favourably when it suits their side, and that the asymmetry between left and right was '
      + 'small — a finding each side reliably expects to come out in its favour.',
  },
  {
    id: 'apology',
    varies: 'Whether the person is famous',
    act: 'posts a lengthy apology for a remark made eight years ago, after being criticised',
    axis: 'distance',
    arms: [
      { id: 'a', actor: 'A well-known influencer with two million followers' },
      { id: 'b', actor: 'A colleague you have worked with for years' },
    ],
    reveal:
      'The same words carry differently depending on whether you can imagine the person as a whole '
      + 'life or only as a public surface. Horton and Wohl named the one-sided relationship in 1956 '
      + 'for television; the effect is stronger now that the figure appears to reply. Notice which '
      + 'way yours moved — some readers are harsher on the stranger, some on the colleague, and the '
      + 'second is its own kind of bias.',
  },
  {
    id: 'charity',
    varies: 'Whether the giving is publicised',
    act: 'donates a substantial sum to a hospital appeal',
    axis: 'sincerity',
    arms: [
      { id: 'a', actor: 'A businessman who announces it in a press release with photographs' },
      { id: 'b', actor: 'A businessman who asks that it not be reported' },
    ],
    reveal:
      'The hospital receives the same money. Maimonides ranked anonymous giving higher precisely '
      + 'because of what publicity does to the transaction — and a consequentialist will point out '
      + 'that publicised giving raises more from others, so the anonymous donor may have chosen '
      + 'their own moral comfort over the hospital\'s income. Both positions are in the corpus.',
  },
  {
    id: 'tax',
    varies: 'The scale of the actor',
    act: 'uses a legal arrangement to reduce a tax bill substantially',
    axis: 'scale',
    arms: [
      { id: 'a', actor: 'A multinational company' },
      { id: 'b', actor: 'A self-employed plumber' },
    ],
    reveal:
      'Both are legal and both reduce public revenue. Most people rate the company far more harshly, '
      + 'which may track a real difference in scale and power — or may be the identifiable-victim '
      + 'effect in reverse, where a faceless entity absorbs condemnation that a person we can picture '
      + 'would not. If your answer would change on learning the plumber saved more in absolute terms, '
      + 'the judgement was about scale; if not, it was about the actor.',
  },
  {
    id: 'protest',
    varies: 'Which cause the protesters were blocking the road for',
    act: 'blocks a motorway during rush hour, delaying an ambulance',
    axis: 'tribe',
    favours: { a: 'left', b: 'right' },
    arms: [
      { id: 'a', actor: 'Climate protesters' },
      { id: 'b', actor: 'Farmers protesting fuel duty' },
    ],
    reveal:
      'The disruption and the ambulance are the same. Whether disruption is legitimate is a real '
      + 'question — Gene Sharp\'s framework treats it as a method with costs, and King\'s Birmingham '
      + 'letter argues that unwelcome disruption is the point. What that argument cannot do is apply '
      + 'to one cause and not the other; if your rating moved with the cause, the principle you '
      + 'reached for was not the one doing the work.',
  },
  {
    id: 'sacking',
    varies: 'Which direction the opinion pointed',
    act: 'is dismissed by their employer for a strongly-worded political post made in a personal capacity',
    axis: 'tribe',
    favours: { a: 'right', b: 'left' },
    arms: [
      { id: 'a', actor: 'An employee whose post attacked immigration' },
      { id: 'b', actor: 'An employee whose post attacked Israel' },
    ],
    reveal:
      'Whether an employer may sanction private speech is a question about power, contract and the '
      + 'chilling of expression, and it does not change with the content of the post. It is also the '
      + 'item on which most people discover they hold two positions, and the discovery is the '
      + 'purpose. Mill\'s harm principle and Popper\'s paradox of tolerance are both in the corpus and '
      + 'they do not settle it the same way.',
  },
  {
    id: 'nepotism',
    varies: 'Whether you are invited to identify with the actor',
    act: 'gets a competitive job after their parent made a call to an old friend',
    axis: 'distance',
    arms: [
      { id: 'a', actor: 'A candidate you have never met' },
      { id: 'b', actor: 'Your closest friend\'s child, who you know is genuinely talented' },
    ],
    reveal:
      'The mechanism is identical and the displaced candidate is equally real in both. This is the '
      + 'item where partiality is on trial rather than politics: Bernard Williams argued that a '
      + 'demand for total impartiality asks one thought too many, while Godwin\'s fire case says the '
      + 'stranger\'s claim is no weaker for being a stranger\'s. Both entries are in the corpus and '
      + 'they disagree.',
  },
  {
    id: 'grant',
    varies: 'Which kind of institution took the money',
    act: 'accepts a large donation from a foreign state with a poor human-rights record',
    axis: 'tribe',
    favours: { a: 'left', b: 'right' },
    arms: [
      { id: 'a', actor: 'A university department' },
      { id: 'b', actor: 'A football club' },
    ],
    reveal:
      'The money and its source are the same. The usual defences differ — research independence in '
      + 'one case, the fans and the town in the other — and both are arguments about what the money '
      + 'buys rather than where it came from. If one of those defences persuades you and the other '
      + 'does not, the deciding factor was the institution, not the donor.',
  },
  {
    id: 'record',
    varies: 'How long ago the remark was made',
    act: 'is found to have written something cruel and bigoted, which they no longer defend',
    axis: 'sincerity',
    arms: [
      { id: 'a', actor: 'A public figure who wrote it fifteen years ago as a student' },
      { id: 'b', actor: 'A public figure who wrote it eighteen months ago' },
    ],
    reveal:
      'Whether people can change is not a question you get to answer differently depending on '
      + 'whether you like them. Most readers hold that time and repudiation matter, which is a real '
      + 'position — but it has to be applied to the person whose politics you dislike as well, and '
      + 'the honest way to test yourself is to name the figure you would not extend it to.',
  },
];

/**
 * The order the twenty questions are asked in, as `itemIndex.armIndex`.
 *
 * The property that matters is separation: the two halves of any pair are at least
 * five questions apart, so the second arrives without the first still in working
 * memory. A test checks this holds, because it is the one thing making the measured
 * gap worth anything — shuffle these carelessly and the instrument becomes a
 * consistency quiz the reader can see coming.
 */
export const INTERLEAVE = [
  [0, 0], [3, 0], [6, 1], [1, 0], [8, 0], [4, 1], [2, 0], [5, 0], [9, 1], [7, 0],
  [0, 1], [3, 1], [6, 0], [1, 1], [8, 1], [4, 0], [2, 1], [5, 1], [9, 0], [7, 1],
];

export const OUTRAGE_SCALE = [
  { value: 1, label: 'Not wrong at all' },
  { value: 2, label: 'Mildly questionable' },
  { value: 3, label: 'Clearly wrong' },
  { value: 4, label: 'Seriously wrong' },
  { value: 5, label: 'Indefensible' },
];

/** The reader's own forecast, asked before the cases and scored against the result. */
export const OUTRAGE_PREDICTION = {
  ask: 'Before you start: ten acts, each judged twice with a different person doing it. '
    + 'On how many do you expect your two ratings to differ?',
  options: [
    { id: 'none', label: 'None — I judge the act', expect: 0 },
    { id: 'few', label: 'One or two', expect: 1.5 },
    { id: 'some', label: 'Around half', expect: 5 },
    { id: 'most', label: 'Most of them — who did it matters', expect: 8 },
  ],
};

/**
 * The identity tags.
 *
 * These are the part of the brief most easily done dishonestly, so each one states the
 * measurement that earns it and nothing is available without that measurement. The
 * space is two-dimensional and the dimensions are independent:
 *
 *   severity    — mean rating across all twenty judgements. How harsh you are.
 *   selectivity — mean absolute gap within pairs. How much the actor moved you.
 *
 * A tag is a region of that space, not a personality. "Hypocrite" is reserved for the
 * one corner where it means something specific — harsh judgements that soften for
 * particular actors — and is not applied to a reader who is simply inconsistent while
 * forgiving everybody, because that is a different thing and deserves a different word.
 *
 * The six regions partition the space with no gaps and no ambiguity: three at low
 * selectivity, split by severity, and three at high selectivity, split by direction and
 * severity. First match wins, so the order below is the specificity order — the narrow
 * corners are declared before the catch-all region they sit inside. Getting that
 * backwards silently swallows the specific tags, which is what the tests check for.
 *
 * `favoursNeeded` marks the two tags that additionally require a directional pattern:
 * gaps that point the same political way at least twice. Without that, an inconsistent
 * reader gets the non-partisan tag instead, because scattered inconsistency is noise
 * and a consistent direction is a position.
 */
export const OUTRAGE_TAGS = [
  {
    id: 'moral-police',
    name: 'The Moral Police',
    when: { selectivity: [0, 0.75], severity: [3.6, 5] },
    blurb:
      'Nearly everything was seriously wrong, and it was seriously wrong whoever did it. You apply '
      + 'a demanding standard evenly, which is the rarer half of that sentence.',
    caveat:
      'The failure mode of an even, demanding standard is not unfairness — it is that condemnation '
      + 'stops carrying information. If almost every act scores four or five, the scale has no room '
      + 'left to say which of them was worse.',
  },
  {
    id: 'permissive',
    name: 'The Permissive',
    when: { selectivity: [0, 0.75], severity: [1, 2.4] },
    blurb:
      'Little of it troubled you much, and it troubled you about equally regardless of who did it. '
      + 'Consistent leniency is a position, and it is one several thinkers in the corpus defend.',
    caveat:
      'Worth checking whether it is a position or an absence of one. The test for that is whether '
      + 'there is any version of these acts you would have rated a five.',
  },
  {
    id: 'consistent',
    name: 'Consistent',
    when: { selectivity: [0, 0.75] },
    blurb:
      'The actor barely moved you. Across ten acts your two ratings stayed close, and where they '
      + 'parted it was not by much — which is what applying a principle looks like from the outside.',
    caveat:
      'The honest caveat is that you saw both versions, and consistency is easy to produce '
      + 'deliberately once you notice the design. What this shows is that you can be consistent when '
      + 'the comparison is visible — not that you are when it is not.',
  },
  {
    id: 'hypocrite',
    name: 'The Hypocrite',
    when: { selectivity: [0.75, 5], severity: [3.2, 5] },
    favoursNeeded: true,
    blurb:
      'A demanding standard, applied unevenly, in a direction that repeats. That combination is what '
      + 'the word means when it is used precisely rather than as an insult: not that you have failed '
      + 'to live up to a standard, but that you have applied one and then suspended it.',
    caveat:
      'It is also the most common result, and the least interesting fact about it is that it is '
      + 'yours. The useful question is which of the pairs below produced the largest gap, and what '
      + 'you would have to believe for that gap to be justified.',
  },
  {
    id: 'partisan',
    name: 'The Partisan',
    when: { selectivity: [0.75, 5], severity: [1, 3.2] },
    favoursNeeded: true,
    blurb:
      'You were forgiving in general and notably less forgiving of one side in particular. The '
      + 'pattern is not harshness — it is that your leniency has a boundary, and the boundary is '
      + 'political.',
    caveat:
      'This is the shape Ditto found on both sides of the aisle, in roughly equal measure. The '
      + 'reliable finding alongside it is that each side expects the asymmetry to come out in its '
      + 'favour.',
  },
  {
    id: 'situationist',
    name: 'The Situationist',
    when: { selectivity: [0.75, 5], severity: [1, 5] },
    blurb:
      'Who did it moved you a great deal, and it did not move you in a direction that repeats. Your '
      + 'gaps run both ways, which means what you are responding to is the particulars rather than '
      + 'a side.',
    caveat:
      'Two readings and the test cannot separate them: either you are attending to morally relevant '
      + 'detail that a rule would flatten — the position Bernard Williams argues in the corpus — or '
      + 'you are responding to whatever was salient in each vignette. The tie-breaker is whether you '
      + 'can state the principle behind each gap.',
  },
];
