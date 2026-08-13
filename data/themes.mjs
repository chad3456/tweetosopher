/**
 * The categories a visitor picks from on the front page.
 *
 * Membership is computed from each entry's own tags, tradition, category and id
 * rather than hand-assigned. That is the difference between a taxonomy that stays
 * true and one that rots: 352 entries hand-filed into twelve buckets would be wrong
 * within a week of anyone adding an entry, whereas a matcher files new work the
 * moment it lands.
 *
 * `ids` pins the entries that define a theme and would be missed by keywords alone.
 * `any` matches loosely against tags, tradition, title and id.
 * `not` excludes — used where a keyword is too greedy in one direction.
 *
 * Order matters only for display. An entry may belong to several themes, which is
 * correct: the Ring of Gyges is about hypocrisy *and* about the self, and a reader
 * who reaches it from either door should find it.
 */

export const THEMES = [
  {
    id: 'what-makes-right-right',
    name: 'What Makes Right Right',
    blurb: 'The ground floor. Whether morality is counted, commanded, cultivated or agreed — and whether it is anything at all.',
    ids: ['trolley-problem', 'categorical-imperative', 'benthamite-utilitarianism', 'golden-mean',
      'veil-of-ignorance', 'divine-command-theory', 'euthyphro-dilemma', 'moral-error-theory',
      'moral-relativism', 'moral-absolutism', 'moral-nihilism', 'naturalistic-fallacy',
      'humes-guillotine', 'emotivism', 'moral-realism', 'moral-anti-realism'],
    any: ['metaethics', 'utilitarianism', 'consequentialism', 'deontology', 'kantian-ethics',
      'contractualism', 'virtue-ethics', 'intuitionism', 'aristotelianism', 'platonism',
      'classical-greek', 'british-moralists', 'scottish-enlightenment', 'presocratic'],
  },
  {
    id: 'the-crowd',
    name: 'The Crowd',
    blurb: 'What other people do to your judgement — obedience, conformity, the diffusion of responsibility, the mob that thinks it is a public.',
    ids: ['milgram-obedience', 'stanford-prison-experiment', 'asch-conformity', 'bystander-effect',
      'banality-of-evil', 'superior-orders', 'tyranny-of-the-majority', 'anomie', 'noble-lie',
      'collective-responsibility', 'complicity', 'repressive-tolerance', 'paradox-of-tolerance',
      'notes-on-nationalism', 'doublethink', 'newspeak', 'general-will'],
    any: ['obedience', 'conformity', 'crowd', 'authority', 'propaganda', 'moral-psychology'],
  },
  {
    id: 'righteous-hypocrisy',
    name: 'Righteous Hypocrisy',
    blurb: 'The gap between the self you perform and the one that acts. Grandstanding, licensing, bad faith, and the comfort of an unexamined conviction.',
    ids: ['ring-of-gyges', 'bad-faith', 'moral-grandstanding', 'moral-licensing', 'akrasia',
      'fable-of-the-bees', 'ressentiment', 'master-and-slave-morality', 'underground-man',
      'shooting-an-elephant', 'living-in-truth', 'socratic-ignorance', 'the-unexamined-life',
      'genealogy-of-morals', 'casuistry', 'moral-testimony', 'impartial-spectator'],
    any: ['hypocrisy', 'self-deception', 'sincerity', 'conscience'],
  },
  {
    id: 'power-and-rule',
    name: 'Power and Rule',
    blurb: 'What a ruler may do that a person may not, whether the ends reach back and clean the means, and who gets to decide.',
    ids: ['ends-and-means', 'feared-or-loved', 'machiavellian-virtu', 'state-of-nature',
      'legalist-statecraft', 'dirty-hands', 'supreme-emergency', 'ticking-time-bomb',
      'biopower', 'disciplinary-power', 'panopticon', 'might-makes-right', 'civil-disobedience',
      'letter-from-birmingham-jail', 'radbruch-formula', 'hart-fuller-debate', 'by-any-means-necessary'],
    any: ['political-realism', 'legal-philosophy', 'just-war-theory', 'political-ethics', 'power',
      'liberalism', 'poststructuralism', 'marxism', 'social-contract'],
  },
  {
    id: 'suffering-and-compassion',
    name: 'Suffering and Compassion',
    blurb: 'Whether pain is the only thing that finally counts, what you owe the person in front of you, and what you owe the one you will never meet.',
    ids: ['schopenhauer-compassion', 'drowning-child', 'ethics-of-care', 'noddings-caring',
      'face-of-the-other', 'i-and-thou', 'negative-utilitarianism', 'four-noble-truths',
      'ahimsa', 'bodhisattva-vow', 'against-empathy', 'attention-and-affliction', 'love-ethic',
      'agape', 'ladder-of-charity', 'speciesism', 'subject-of-a-life', 'effective-altruism'],
    any: ['care-ethics', 'suffering', 'compassion', 'animal-ethics', 'charity', 'pessimism',
      'cynicism', 'renaissance-humanism'],
  },
  {
    id: 'truth-and-lies',
    name: 'Truth and Lies',
    blurb: 'Whether you may ever lie, what language does to what you can think, and whether some things should not be said at all.',
    ids: ['murderer-at-the-door', 'noble-lie', 'doublethink', 'newspeak', 'living-in-truth',
      'speak-the-truth', 'lecture-on-ethics', 'persuasive-definitions', 'grand-inquisitor',
      'simulacra', 'transparency-society', 'epistemic-injustice', 'russells-teapot',
      'protagorean-relativism', 'incredulity-toward-metanarratives'],
    any: ['truth', 'lying', 'language', 'deception', 'literary-ethics'],
  },
  {
    id: 'the-self-and-freedom',
    name: 'The Self and Freedom',
    blurb: 'Whether you chose any of it, whether that matters for blame, and what is left of responsibility if the answer is no.',
    ids: ['condemned-to-be-free', 'sartres-student', 'the-absurd', 'myth-of-sisyphus',
      'ethics-of-ambiguity', 'frankfurt-cases', 'reactive-attitudes', 'basic-argument',
      'harris-on-free-will', 'predestination-and-freedom', 'eternal-recurrence', 'ubermensch',
      'self-reliance', 'amor-fati', 'dichotomy-of-control', 'wu-wei', 'denial-of-the-will',
      'ship-of-theseus', 'experience-machine'],
    any: ['existentialism', 'absurdism', 'free-will', 'personal-identity', 'stoicism'],
  },
  {
    id: 'justice-and-desert',
    name: 'Justice and Desert',
    blurb: 'Who deserves what, whether luck should be allowed to decide it, and what a society owes the person it has ranked lowest.',
    ids: ['difference-principle', 'entitlement-theory', 'wilt-chamberlain-argument',
      'luck-egalitarianism', 'relational-equality', 'sufficientarianism', 'capabilities-approach',
      'tyranny-of-merit', 'moral-limits-of-markets', 'retributivism', 'restorative-justice',
      'prison-abolition', 'spheres-of-justice', 'moral-luck', 'social-connection-model',
      'negative-duties-and-global-poverty', 'camping-trip'],
    any: ['egalitarianism', 'punishment', 'global-justice', 'development-ethics', 'justice'],
  },
  {
    id: 'loyalty-and-attachment',
    name: 'Loyalty and Attachment',
    blurb: 'Whether the people close to you may count for more, and what impartiality costs when it is applied to a family.',
    ids: ['one-thought-too-many', 'jim-and-the-indians', 'impartial-care', 'confucian-ren',
      'confucian-li', 'silver-rule', 'confucian-role-ethics', 'four-sprouts', 'ubuntu',
      'aristotelian-friendship', 'sophies-choice', 'teleological-suspension', 'demandingness-objection',
      'moral-saints', 'nishkama-karma', 'dharma', 'pikuach-nefesh'],
    any: ['confucianism', 'family', 'friendship', 'loyalty', 'partiality'],
  },
  {
    id: 'the-sacred',
    name: 'The Sacred',
    blurb: 'Whether morality needs a ground outside us — and what changes if it turns out there is none.',
    ids: ['everything-is-permitted', 'death-of-god', 'pascals-wager', 'problem-of-evil',
      'natural-law', 'doctrine-of-double-effect', 'original-sin', 'privation-theory-of-evil',
      'leap-of-faith', 'sermon-on-the-mount', 'nonresistance-to-evil', 'karma',
      'maqasid-al-shariah', 'tikkun-olam', 'sufi-adab', 'liberation-theology', 'maat',
      'ghazali-ethics-of-the-heart'],
    any: ['religious-ethics', 'christian-philosophy', 'islamic-philosophy', 'jewish-philosophy',
      'buddhism', 'hinduism', 'jainism', 'sufism', 'philosophy-of-religion', 'scholasticism'],
  },
  {
    id: 'the-unborn-and-the-dead',
    name: 'The Unborn and the Dead',
    blurb: 'What is owed to people who do not exist yet, and whether more lives worth living is straightforwardly better.',
    ids: ['repugnant-conclusion', 'non-identity-problem', 'mere-addition-paradox',
      'imperative-of-responsibility', 'longtermism', 'the-precipice', 'procreative-beneficence',
      'land-ethic', 'deep-ecology', 'lifeboat-ethics', 'the-violinist', 'memento-mori',
      'tragedy-of-the-commons', 'ought-implies-can'],
    any: ['population-ethics', 'environmental-ethics', 'bioethics', 'future'],
  },
  {
    id: 'machines-and-the-future',
    name: 'Machines and the Future',
    blurb: 'What we are building, whether it can be given values, and whether anything we make could be owed something.',
    ids: ['paperclip-maximizer', 'instrumental-convergence', 'value-alignment',
      'moral-status-of-machines', 'brave-new-world', 'omelas', 'simulacra',
      'burnout-society', 'transparency-society', 'panopticon', 'performativity'],
    any: ['machine-ethics', 'technology', 'artificial-intelligence'],
  },
  {
    id: 'games-and-strangers',
    name: 'Games and Strangers',
    blurb: 'What happens to cooperation when nobody is watching, and why the rational move and the decent one keep coming apart.',
    ids: ['prisoners-dilemma', 'tragedy-of-the-commons', 'free-rider-problem', 'ultimatum-game',
      'tit-for-tat', 'reciprocal-altruism', 'kin-selection', 'newcombs-problem',
      'morals-by-agreement', 'scanlonian-contractualism', 'psychological-egoism',
      'buridans-ass', 'sorites-paradox', 'paradox-of-the-court'],
    any: ['game-theory', 'decision-theory', 'evolutionary-ethics', 'contractarianism'],
  },
];

/** Does an entry belong to a theme? Matched loosely, on purpose — see the header. */
export function inTheme(entry, theme) {
  if (theme.ids?.includes(entry.id)) return true;
  if (theme.not?.some((n) => entry.id.includes(n))) return false;
  if (!theme.any?.length) return false;
  const haystack = [
    entry.id,
    entry.tradition ?? '',
    entry.category ?? '',
    (entry.title ?? '').toLowerCase(),
    ...(entry.tags ?? []),
  ].join(' ').toLowerCase();
  return theme.any.some((needle) => haystack.includes(needle.toLowerCase()));
}
