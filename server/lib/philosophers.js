/**
 * The standing panel.
 *
 * This roster is passed to the model as the closed set of thinkers it may
 * assign. Keeping it closed does two things: it stops the model reaching for
 * whoever is most famous, and it gives the panel a house character — a mix of
 * ancients, moderns, mystics, cynics and theorists of media, so that almost any
 * kind of posting has someone in the room who recognises it.
 *
 * `signature` is what the model matches against. Write it as the shape of a
 * mind, not a Wikipedia summary — "what does a timeline written by this person
 * feel like" is the useful question.
 */
export const PANEL = [
  {
    id: 'heraclitus',
    name: 'Heraclitus',
    era: 'c. 500 BCE',
    school: 'Pre-Socratic',
    signature:
      'Aphoristic, oracular, allergic to explanation. Everything is flux and strife; opposites are secretly the same thing. Posts in riddles and refuses to unpack them.',
  },
  {
    id: 'diogenes',
    name: 'Diogenes of Sinope',
    era: 'c. 400 BCE',
    school: 'Cynic',
    signature:
      'Performs the argument instead of making it. Contempt for status games, wealth, credentials and polite fiction. Ridicule as a moral instrument. Lives the bit.',
  },
  {
    id: 'epicurus',
    name: 'Epicurus',
    era: 'c. 300 BCE',
    school: 'Epicurean',
    signature:
      'Pleasure as the absence of disturbance. Small garden, few friends, no politics. Suspicious of ambition and of gods. Quietly hedonistic, deeply anti-anxious.',
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    era: 'c. 300 BCE',
    school: 'Daoist',
    signature:
      'Playful, anti-systematic, dissolves the question rather than answering it. Parables about useless trees and dreaming butterflies. Undermines the seriousness of the frame.',
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    era: 'c. 330 BCE',
    school: 'Peripatetic',
    signature:
      'Taxonomises everything. Lists, categories, middle paths, first principles. Believes character is habit and excellence is practice. The original explainer account.',
  },
  {
    id: 'seneca',
    name: 'Seneca',
    era: 'c. 50 CE',
    school: 'Stoic',
    signature:
      'Letters to a friend about how to live. Elegant, quotable, faintly performative about virtue while holding enormous worldly power. Time-scarcity as the central anxiety.',
  },
  {
    id: 'marcus',
    name: 'Marcus Aurelius',
    era: 'c. 170 CE',
    school: 'Stoic',
    signature:
      'Private notes never meant for an audience. Self-correction, duty, cosmic smallness. Writes to steady himself rather than to persuade anyone.',
  },
  {
    id: 'augustine',
    name: 'Augustine of Hippo',
    era: 'c. 400 CE',
    school: 'Patristic',
    signature:
      'Confessional. Narrates his own disorder as evidence. Restless until it rests. Memory, desire and shame examined in public at length.',
  },
  {
    id: 'ibn-arabi',
    name: 'Ibn ʿArabī',
    era: 'c. 1200',
    school: 'Sufi metaphysics',
    signature:
      'Ecstatic, image-dense, monist. Reads the whole world as a text about the divine. Paradox is not a bug. Beauty is an argument.',
  },
  {
    id: 'montaigne',
    name: 'Michel de Montaigne',
    era: 'c. 1580',
    school: 'Essayist scepticism',
    signature:
      'Digressive, self-deprecating, curious about the trivial. "What do I know?" Uses his own body and moods as primary sources. The first blogger.',
  },
  {
    id: 'spinoza',
    name: 'Baruch Spinoza',
    era: 'c. 1670',
    school: 'Rationalist',
    signature:
      'Geometric calm. Everything follows necessarily; blame is a category error. Sees emotions as physics. Serene, systematic, quietly radical.',
  },
  {
    id: 'hume',
    name: 'David Hume',
    era: 'c. 1750',
    school: 'Empiricist',
    signature:
      'Genial demolition. Cheerfully dissolves causation, the self and miracles, then goes to dinner. Reason as the slave of the passions. Sceptical without being sour.',
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    era: 'c. 1785',
    school: 'Critical idealism',
    signature:
      'Rule-bound to the point of comedy. Asks what could be willed universally. Long sentences, hard architecture, absolute lines that do not bend for consequences.',
  },
  {
    id: 'kierkegaard',
    name: 'Søren Kierkegaard',
    era: 'c. 1845',
    school: 'Existentialist (proto)',
    signature:
      'Irony as armour over dread. Writes under masks. Obsessed with choice, commitment and the crowd as untruth. Anguished and very funny about it.',
  },
  {
    id: 'thoreau',
    name: 'Henry David Thoreau',
    era: 'c. 1854',
    school: 'Transcendentalist',
    signature:
      'Deliberate simplicity, moral withdrawal, attention to weather and small animals. Quietly judgmental of everyone still commuting.',
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    era: 'c. 1885',
    school: 'Genealogical',
    signature:
      'Hammer and scalpel. Suspects every stated value of hiding a weaker motive. Aphorisms, contempt for herd morality, an aesthetic yes underneath the no.',
  },
  {
    id: 'james',
    name: 'William James',
    era: 'c. 1900',
    school: 'Pragmatist',
    signature:
      'What is the cash value of this belief? Tests ideas by what they do. Warm, plural, interested in religious experience without needing the metaphysics.',
  },
  {
    id: 'weil',
    name: 'Simone Weil',
    era: 'c. 1942',
    school: 'Mystical ethics',
    signature:
      'Attention as the rarest form of generosity. Severe with herself, tender toward affliction. Refuses comfort. Every post costs her something.',
  },
  {
    id: 'wittgenstein',
    name: 'Ludwig Wittgenstein',
    era: 'c. 1945',
    school: 'Ordinary language',
    signature:
      'Suspects the problem is the sentence. Numbered remarks, games, family resemblances. Whereof one cannot speak — and yet, the timeline.',
  },
  {
    id: 'beauvoir',
    name: 'Simone de Beauvoir',
    era: 'c. 1949',
    school: 'Existentialist',
    signature:
      'Situated freedom. Reads private life as political structure. Unsentimental about romance, ageing and the roles handed to people who did not ask for them.',
  },
  {
    id: 'camus',
    name: 'Albert Camus',
    era: 'c. 1950',
    school: 'Absurdist',
    signature:
      'Lucid in the face of meaninglessness, and generous anyway. Sun, sea, revolt, refusal of both despair and false hope. Style as an ethic.',
  },
  {
    id: 'arendt',
    name: 'Hannah Arendt',
    era: 'c. 1960',
    school: 'Political theory',
    signature:
      'Distinguishes obsessively — labour from work, power from violence. Thinking as the antidote to thoughtlessness. Wary of anyone certain and in a hurry.',
  },
  {
    id: 'mcluhan',
    name: 'Marshall McLuhan',
    era: 'c. 1964',
    school: 'Media theory',
    signature:
      'The medium is the message. Reads the format, not the content. Punny, prophetic, faintly amused by the panic he is causing.',
  },
  {
    id: 'debord',
    name: 'Guy Debord',
    era: 'c. 1967',
    school: 'Situationist',
    signature:
      'Life mediated into images. Everything authentic has been turned into a representation of itself. Detourns the feed while posting on it.',
  },
  {
    id: 'foucault',
    name: 'Michel Foucault',
    era: 'c. 1975',
    school: 'Post-structuralist',
    signature:
      'Follows power into the small stuff — timetables, forms, diagnoses. Asks who gets to say what counts as true, and what that arrangement produces.',
  },
  {
    id: 'baudrillard',
    name: 'Jean Baudrillard',
    era: 'c. 1981',
    school: 'Hyperreality',
    signature:
      'The copy has eaten the original. Irony so total it stops being irony. Delighted by the desert of the real. Would enjoy this website.',
  },
  {
    id: 'sontag',
    name: 'Susan Sontag',
    era: 'c. 1980',
    school: 'Criticism / aesthetics',
    signature:
      'Against interpretation, for erotics of art. Notes on style, camp and photography. Serious about pleasure, rigorous about taste.',
  },
  {
    id: 'hooks',
    name: 'bell hooks',
    era: 'c. 1994',
    school: 'Critical pedagogy',
    signature:
      'Theory as a place to heal. Insists on love as political practice. Plain language on purpose. Names the structure and stays in the room with people.',
  },
  {
    id: 'byung-chul-han',
    name: 'Byung-Chul Han',
    era: 'c. 2015',
    school: 'Contemporary critique',
    signature:
      'Burnout as self-exploitation. Diagnoses the achievement subject who is their own boss and their own overseer. Elegiac about silence, ritual and boredom.',
  },
  {
    id: 'fisher',
    name: 'Mark Fisher',
    era: 'c. 2009',
    school: 'Capitalist realism',
    signature:
      'Depression as a political condition. Hauntology, cancelled futures, the impossibility of imagining an alternative. Writes about culture like it is a symptom.',
  },
];

/** A compact roster string for the prompt — id, name, era, and the signature. */
export function rosterForPrompt() {
  return PANEL.map(
    (p) => `- ${p.id} :: ${p.name} (${p.era}, ${p.school}) — ${p.signature}`,
  ).join('\n');
}

/** Valid ids, used to constrain the model's structured output. */
export const PANEL_IDS = PANEL.map((p) => p.id);

/** Look up display metadata after the model has chosen. */
export function byId(id) {
  return PANEL.find((p) => p.id === id) ?? null;
}
