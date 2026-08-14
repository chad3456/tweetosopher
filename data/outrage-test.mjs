/**
 * The Selective Outrage test.
 *
 * The brief for this was to expose the performed morality of people online. There is
 * an easy version of that — show the user some influencers and let them rate how fake
 * each one is — and it would be worthless twice over. It would measure nothing about
 * the user, and it would be an exercise in exactly the moral grandstanding the corpus
 * documents: condemnation as self-presentation, at no cost to the condemner.
 *
 * So the instrument points the other way. Each item is one act, described identically,
 * with one detail changed: who did it. Half of readers get one actor, half the other.
 * The reader rates severity on a scale, and at the end is shown the pairs and told
 * which detail was varied.
 *
 * The honest limit, stated in the reveal rather than hidden: a single reader sees one
 * arm, so their ratings cannot demonstrate their own bias. What the test can do is
 * show them the manipulation, let them ask whether the other version would have moved
 * them, and hand them the research on how the effect behaves at population scale —
 * where Ditto and colleagues found partisan bias in evaluating identical evidence to
 * be substantial and roughly symmetrical across left and right.
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
];

export const OUTRAGE_SCALE = [
  { value: 1, label: 'Not wrong at all' },
  { value: 2, label: 'Mildly questionable' },
  { value: 3, label: 'Clearly wrong' },
  { value: 4, label: 'Seriously wrong' },
  { value: 5, label: 'Indefensible' },
];
