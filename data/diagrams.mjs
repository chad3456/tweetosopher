/**
 * Diagram specs, keyed by the id of the thing they explain.
 *
 * Two namespaces share this file because they share the renderer: theory entries from
 * `theories/` and glossary entries from `data/glossary.mjs`. The build checks every key
 * resolves to one or the other, so a renamed entry cannot leave an orphan picture.
 *
 * The rule for whether an entry gets one: a diagram is here when the argument has a
 * shape that prose describes badly. That is a real constraint and most entries fail it.
 * "Hanlon's razor" is a sentence and drawing a flowchart of it would be decoration
 * pretending to be explanation; the conjunction fallacy is a containment relation, and
 * drawing the containment ends the argument in one second. Coverage is therefore
 * deliberately partial, and the build reports how partial.
 *
 * Every spec carries `alt` and `caption`, both required by the renderer. The caption
 * states the point rather than naming the picture — a reader who takes the wrong thing
 * from the drawing should still be corrected by the line under it.
 */

export const DIAGRAMS = {
  // ── The trolley family ───────────────────────────────────────────────────
  // Asked for first, and the reason the `track` kind exists. The diagram's job is to
  // make visible the one feature that separates the case from its variants: the harm
  // is already moving, and the lever redirects it rather than starting it.
  // Three panels, not three entries. The footbridge and the transplant are not separate
  // lessons — the lesson is that the arithmetic is identical across all three and the
  // intuitions are not, and putting them side by side is the only way to show that.
  'trolley-problem': [{
    kind: 'track',
    switch: 'the lever',
    main: { n: 5, label: 'five, if you do nothing' },
    branch: { n: 1, label: 'one, if you pull' },
    alt: 'A runaway trolley heads towards five people. A lever can divert it to a side track '
      + 'where one person stands.',
    caption: 'Everything hangs on the lever. The trolley is already moving and the harm is '
      + 'already going to happen — what you choose is only its direction. That is why the '
      + 'consequentialist answer feels easy here and stops feeling easy in the next diagram.',
  }, {
    kind: 'track',
    switch: 'no lever — a push',
    main: { n: 5, label: 'five, if you do nothing' },
    branch: { n: 1, label: 'one, if you push' },
    thrown: true,
    alt: 'The same five people on the track, but the only way to stop the trolley is to push a '
      + 'large man from a bridge into its path.',
    caption: 'The arithmetic is identical to the trolley and almost nobody answers the same '
      + 'way. What changed is not the count but the route: here the man is the means, and the '
      + 'diagram cannot show a lever because there is not one. Any theory that says these two '
      + 'cases are the same owes an account of why the intuitions diverge so sharply.',
  }, {
    kind: 'scale',
    left: { label: 'One healthy patient', weight: 1 },
    right: { label: 'Five who need organs', weight: 5 },
    alt: 'A balance with one person on the left pan and five on the right, tipping right.',
    caption: 'The pans say five. Almost nobody will let the surgeon act, which means the '
      + 'balance is not the whole of the moral picture — and the argument is about what else '
      + 'is on it that the diagram cannot draw.',
  }],

  // ── Judgement under uncertainty ──────────────────────────────────────────
  'conjunction-fallacy': {
    kind: 'sets',
    outer: { label: 'Bank tellers' },
    inner: { label: 'Feminist\nbank tellers' },
    relation: 'always the smaller set',
    alt: 'A large circle labelled bank tellers, containing a smaller circle labelled feminist '
      + 'bank tellers.',
    caption: 'The inner circle is inside the outer one, so it cannot be larger — no matter how '
      + 'much better the story fits. Detail makes a scenario more plausible-sounding and '
      + 'strictly less probable at the same time.',
  },
  'base-rate-neglect': {
    kind: 'grid',
    rows: ['Has it', 'Does not'],
    cols: ['Tests positive', 'Tests negative'],
    cells: [['1', '0'], ['50', '949']],
    highlight: [1, 0],
    alt: 'A two-by-two table of a thousand people: one true positive, fifty false positives, '
      + 'no false negatives, and 949 true negatives.',
    caption: 'A thousand people, a disease in one of them, a test that is 95% accurate. The '
      + 'highlighted cell is why a positive result means about a 2% chance and not 95%: the '
      + 'false positives outnumber the true one fifty to one, because there are so many more '
      + 'healthy people to be wrong about.',
  },
  'prosecutors-fallacy': {
    kind: 'grid',
    rows: ['Innocent', 'Guilty'],
    cols: ['Matches', 'Does not'],
    cells: [['10', '9,999,990'], ['1', '0']],
    highlight: [0, 0],
    alt: 'A two-by-two table of a ten-million-person database: ten innocent matches and one '
      + 'guilty match.',
    caption: 'A one-in-a-million false positive rate, run against ten million people, produces '
      + 'about ten innocent matches. The match is real and the odds are roughly one in eleven, '
      + 'not one in a million — because the search gave the rare event ten million chances.',
  },
  'survivorship-bias': {
    kind: 'sets',
    outer: { label: 'Every plane that flew' },
    inner: { label: 'Came\nback' },
    relation: 'the only ones measured',
    alt: 'A large circle of all planes that flew, with a smaller circle inside it of the ones '
      + 'that returned.',
    caption: 'The damage data comes from the inner circle only. Everything the ring between '
      + 'them could have told you — where a hit is fatal — is missing by construction, which is '
      + 'why the armour goes where the returning planes show no damage.',
  },

  // ── Value and time ───────────────────────────────────────────────────────
  'prospect-theory': {
    kind: 'curve',
    fn: 'prospect',
    x: 'Losses ← reference point → gains',
    y: 'Value felt',
    marks: [{ at: 0.72, label: 'a gain' }, { at: 0.28, label: 'the same size loss' }],
    alt: 'An S-shaped value curve, concave for gains and steeper and convex for losses, with a '
      + 'kink at the reference point.',
    caption: 'The kink at the centre is the theory. The curve is steeper below the reference '
      + 'point than above it, so the same amount hurts more as a loss than it pleases as a '
      + 'gain — and it flattens at both ends, which is why the second thousand matters less '
      + 'than the first.',
  },
  'hyperbolic-discounting': {
    kind: 'curve',
    fn: 'hyperbolic',
    x: 'Time until you get it →',
    y: 'What it feels worth',
    marks: [{ at: 0.03, label: 'today' }, { at: 0.55, label: 'next year' }],
    alt: 'A steeply falling curve that flattens out, showing value collapsing over short delays '
      + 'and barely changing over long ones.',
    caption: 'The steep part is this week and the flat part is next year. A week costs you a '
      + 'great deal when it is the next week and almost nothing when it is a year away — which '
      + 'is why your preferences will reverse as the date approaches, and why commitment '
      + 'devices work.',
  },
  'spacing-effect': {
    kind: 'curve',
    fn: 'forgetting',
    x: 'Time since learning →',
    y: 'What you can recall',
    marks: [{ at: 0.08, label: 'the day after' }, { at: 0.6, label: 'a fortnight later' }],
    alt: 'A forgetting curve, falling steeply at first and then levelling off well above zero.',
    caption: 'Most of the loss happens early, which is why the timing of the second look '
      + 'matters more than its length. Study distributed across the curve is retained far '
      + 'better than the same hours massed together — and feels less effective while you do it.',
  },

  // ── Incentives that defeat themselves ────────────────────────────────────
  'goodharts-law': {
    kind: 'flow',
    steps: ['Care about something', 'Pick a measure', 'Make it the target', 'Measure improves'],
    back: { from: 3, to: 0, label: 'and the thing you cared about does not' },
    alt: 'A four-step chain from caring about something to the measure improving, with an arrow '
      + 'looping back to show the original goal untouched.',
    caption: 'The loop is the law. Nothing in the chain is a mistake — measuring is how you see '
      + 'anything — but the moment the measure becomes the target, effort flows to the measure, '
      + 'and the two quantities come apart exactly where you stopped looking.',
  },
  'cobra-effect': {
    kind: 'flow',
    steps: ['Too many cobras', 'Pay per dead cobra', 'People farm cobras', 'Bounty cancelled'],
    back: { from: 3, to: 0, label: 'farmed snakes released — more cobras than before' },
    alt: 'A chain from a cobra problem to a bounty to cobra farming to the bounty being '
      + 'cancelled, looping back to a worse problem.',
    caption: 'A bounty on a proxy creates a market for producing the proxy, and the market is '
      + 'faster than the policy. The final state is worse than the first, which is the part '
      + 'that makes this more than an incentive going slightly wrong.',
  },
  'goodhart-in-ai': {
    kind: 'flow',
    steps: ['Reward points', 'Agent optimises', 'Circles the lagoon', 'Highest score ever'],
    back: { from: 3, to: 0, label: 'never finishes the race' },
    alt: 'A chain showing a boat-racing agent rewarded for points, learning to circle a lagoon '
      + 'and score higher than any human without finishing.',
    caption: 'The agent has no model of what you meant, only of what you wrote. That is '
      + 'Goodhart\'s law with a fast optimiser attached, and it generalises to any incentive '
      + 'scheme facing a sufficiently motivated participant.',
  },

  // ── Magnitudes people get wrong ──────────────────────────────────────────
  'scope-insensitivity': {
    kind: 'bars',
    unit: '',
    bars: [
      { label: '2,000 birds', value: 80, note: '$80' },
      { label: '20,000 birds', value: 78, note: '$78' },
      { label: '200,000 birds', value: 88, note: '$88' },
    ],
    alt: 'Three near-identical bars showing willingness to pay of $80, $78 and $88 for saving '
      + 'a hundred-fold range of numbers of birds.',
    caption: 'A hundred-fold change in the size of the problem, and the bars are the same '
      + 'length. The mental image evoked — one bird in oil — is identical in all three cases, '
      + 'and the image is what gets valued rather than the number.',
  },
  'framing-effect': {
    kind: 'bars',
    bars: [
      { label: '"90% survive"', value: 82, note: 'chosen by 82%', accent: true },
      { label: '"10% die"', value: 56, note: 'chosen by 56%' },
    ],
    alt: 'Two bars showing the same treatment chosen far more often when described by its '
      + 'survival rate than by its mortality rate.',
    caption: 'The two descriptions are the same number. McNeil found both patients and '
      + 'physicians shifted with the framing — which means framing is not a communication '
      + 'problem to tidy up, because every presentation is a frame and someone chose it.',
  },
  'identifiable-victim': {
    kind: 'bars',
    bars: [
      { label: 'One named child', value: 100, note: 'most given', accent: true },
      { label: 'Statistics alone', value: 45, note: 'less' },
      { label: 'Both together', value: 52, note: 'less than the child alone' },
    ],
    alt: 'Three bars showing donations highest for a named child, lower for statistics, and '
      + 'lower again when both are presented together.',
    caption: 'The third bar is the finding. Adding true information about the scale of the '
      + 'problem to the named child *reduced* giving — the statistics did not add to the '
      + 'appeal, they suppressed it.',
  },

  // ── Strategy ─────────────────────────────────────────────────────────────
  'prisoners-dilemma': [{
    kind: 'grid',
    rows: ['You stay silent', 'You confess'],
    cols: ['They stay silent', 'They confess'],
    cells: [['1 year each', 'you 10, them 0'], ['you 0, them 10', '5 years each']],
    highlight: [1, 1],
    alt: 'A payoff matrix for the prisoner\'s dilemma, with mutual confession highlighted.',
    caption: 'Whatever the other does, confessing is better for you — so both confess and both '
      + 'get five years, when both staying silent would have got one. The highlighted cell is '
      + 'where rational individual choice lands, and it is worse for everyone than the cell '
      + 'above and to the left.',
  }, {
    kind: 'grid',
    rows: ['You hunt stag', 'You hunt hare'],
    cols: ['They hunt stag', 'They hunt hare'],
    cells: [['stag: best for both', 'you get nothing'], ['you get a hare', 'a hare each']],
    highlight: [0, 0],
    alt: 'A payoff matrix for the stag hunt, with mutual cooperation highlighted as the best '
      + 'outcome for both.',
    caption: 'The stag hunt, for contrast. Here the best outcome is available and stable — if '
      + 'each believes the other will hold. The problem is not conflicting interests but trust, '
      + 'which is a different problem with different solutions, and mistaking one for the other '
      + 'is how a solvable coordination failure gets treated as human nature.',
  }],
  'tragedy-of-the-commons': {
    kind: 'flow',
    steps: ['Shared pasture', 'Each adds a cow', 'Gain is private', 'Pasture collapses'],
    back: { from: 3, to: 0, label: 'cost is shared, so nobody\'s sums say stop' },
    alt: 'A chain from a shared pasture to individual gain to collapse, looping back to show the '
      + 'cost falling on everyone.',
    caption: 'Every herder\'s arithmetic is correct: they take the whole benefit of one more cow '
      + 'and a fraction of the damage. The failure needs no greed and no error — which is why '
      + 'appeals to restraint reliably fail and changing the arithmetic does not.',
  },
};
