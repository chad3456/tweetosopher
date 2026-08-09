/**
 * Demo corpora.
 *
 * These stand in for real API results so the whole experience runs with no
 * credentials at all. They are also useful with a real ANTHROPIC_API_KEY and no
 * X token: you get a genuine panel verdict over a known corpus, which is the
 * fastest way to iterate on the prompt.
 *
 * `@marbledust` is invented. Any resemblance to your timeline is your problem.
 */

const DAY = 86_400_000;
const ago = (d) => new Date(Date.now() - d * DAY).toISOString();

export const DEMO_TWITTER = {
  platform: 'twitter',
  profile: {
    handle: 'marbledust',
    displayName: 'dust',
    bio: 'reading things slowly. former: several places. i will not be explaining the alt text.',
    location: 'a north-facing room',
    joined: ago(2190),
    followers: 4412,
    following: 289,
    posts: 18_204,
    url: 'https://x.com/marbledust',
  },
  coverage: { timeline: true, likes: true, notes: [] },
  items: [
    { id: 'd1', kind: 'post', createdAt: ago(1), likes: 1204, reposts: 210, text: 'every productivity system is a theory of what a person is for, and almost all of them think you are a warehouse' },
    { id: 'd2', kind: 'post', createdAt: ago(2), likes: 88, reposts: 4, text: 'spent forty minutes deciding whether to send a two-line email. the deliberation cost more than any outcome the email could produce. anyway. sent it.' },
    { id: 'd3', kind: 'reply', createdAt: ago(3), likes: 31, reposts: 0, text: 'i don’t think you’re wrong exactly, i think the question has been posed in a way that guarantees this answer' },
    { id: 'd4', kind: 'post', createdAt: ago(5), likes: 3320, reposts: 890, text: 'the phrase "content creator" did more damage to art in fifteen years than the entire twentieth century managed on purpose' },
    { id: 'd5', kind: 'post', createdAt: ago(6), likes: 52, reposts: 2, text: 'bought a plant. named it nothing. it is simply the plant. i think this is progress' },
    { id: 'd6', kind: 'quote', createdAt: ago(8), likes: 640, reposts: 120, text: 'this is what people mean when they say something is "for the algorithm" — not that a machine wanted it, but that a person imagined a machine wanting it and made that instead' },
    { id: 'd7', kind: 'post', createdAt: ago(9), likes: 210, reposts: 18, text: 'i keep a list of arguments i lost and was right about, and a list of arguments i won and was wrong about. the second list is longer and i have stopped showing it to people' },
    { id: 'd8', kind: 'post', createdAt: ago(11), likes: 74, reposts: 3, text: 'reading the same twelve pages for the fourth night. not because they are hard. because i keep arriving at them differently' },
    { id: 'd9', kind: 'reply', createdAt: ago(12), likes: 19, reposts: 0, text: 'respectfully: "we should have a conversation about this" has never once preceded a conversation' },
    { id: 'd10', kind: 'post', createdAt: ago(14), likes: 1890, reposts: 402, text: 'the internet did not make everyone a critic. it made everyone a defendant, and criticism is just what we call the noise a defendant makes' },
    { id: 'd11', kind: 'post', createdAt: ago(17), likes: 96, reposts: 5, text: 'the specific grief of closing a tab you meant to read. it was going to change everything. it is gone now. there are eleven more' },
    { id: 'd12', kind: 'post', createdAt: ago(19), likes: 44, reposts: 1, text: 'walked to the shop the long way to avoid a conversation and then thought about the conversation the entire way. the long way is not a solution, it is a venue' },
    { id: 'd13', kind: 'post', createdAt: ago(23), likes: 2450, reposts: 610, text: 'you are not burnt out from work. you are burnt out from performing a self that could do the work happily, which is a second job nobody is paying you for' },
    { id: 'd14', kind: 'reply', createdAt: ago(25), likes: 8, reposts: 0, text: 'i have read the thread. i think the disagreement is about the word "obviously"' },
    { id: 'd15', kind: 'post', createdAt: ago(28), likes: 305, reposts: 40, text: 'a small test for any idea: can you hold it without an audience? most of mine evaporate immediately and i have decided to find that funny rather than devastating' },
    { id: 'd16', kind: 'post', createdAt: ago(33), likes: 61, reposts: 2, text: 'my drafts folder is the honest account. everything posted has been sanded' },
    { id: 'd17', kind: 'post', createdAt: ago(41), likes: 1120, reposts: 245, text: 'nostalgia is not longing for the past. it is longing for a future that the past was still allowed to have' },
    { id: 'd18', kind: 'post', createdAt: ago(52), likes: 130, reposts: 12, text: 'quit the group chat. rejoined the group chat. i would like it noted that i lasted nine days and that nobody noticed either transition' },
    { id: 'd19', kind: 'like', createdAt: ago(2), likes: 0, reposts: 0, text: 'the opposite of a rushed decision is not a slow decision, it is a decision you have already made and are waiting to admit' },
    { id: 'd20', kind: 'like', createdAt: ago(4), likes: 0, reposts: 0, text: 'attention is the only currency i have never been able to fake spending' },
    { id: 'd21', kind: 'like', createdAt: ago(7), likes: 0, reposts: 0, text: 'genuinely think most people would be happier if they were slightly worse at their jobs' },
    { id: 'd22', kind: 'retweet', createdAt: ago(10), likes: 0, reposts: 0, text: 'the enemy is not the phone. the enemy is the idea that every hour must be accounted for to somebody' },
    { id: 'd23', kind: 'like', createdAt: ago(15), likes: 0, reposts: 0, text: 'i want to be perceived accurately by four people and by no one else, and i have built an entire life around failing at this' },
    { id: 'd24', kind: 'like', createdAt: ago(21), likes: 0, reposts: 0, text: 'a museum is just a building where we agree to look slowly. we could do that anywhere. we don’t' },
  ],
};

export const DEMO_SUBSTACK = {
  platform: 'substack',
  profile: {
    handle: 'the-long-way',
    displayName: 'The Long Way',
    bio: 'Essays about attention, machines, and the difficulty of meaning it.',
    url: 'https://the-long-way.substack.com',
  },
  coverage: { feed: true, archive: true, notes: [] },
  items: [
    {
      id: 's1',
      kind: 'essay',
      title: 'The Warehouse Theory of the Self',
      createdAt: ago(4),
      url: 'https://the-long-way.substack.com/p/warehouse-theory',
      text: 'Every productivity method smuggles in an anthropology. Tell me how you think a day should be structured and I will tell you what you believe a person fundamentally is.\n\nThe dominant answer for twenty years has been: a warehouse. Inputs arrive, are sorted, are dispatched. The virtues are throughput and low shrinkage. The vices are backlog and idleness. What is striking is not that this model is wrong — it is obviously wrong, nobody experiences a Tuesday as a logistics problem — but that we adopted it anyway, and then felt personally ashamed when we failed to behave like a well-run distribution centre.\n\n[…]\n\nThe alternative is not a softer system. It is noticing that the question "what did I get done today" is a question the warehouse asks, and that you are permitted to ask a different one.',
    },
    {
      id: 's2',
      kind: 'essay',
      title: 'Notes on Being Perceived',
      createdAt: ago(18),
      url: 'https://the-long-way.substack.com/p/being-perceived',
      text: 'There is a particular exhaustion that has nothing to do with work. It is the exhaustion of maintaining a self that is legible to strangers at all times, in public, for free.\n\nWhat the platforms did was not to make us vain. Vanity is old and survivable. What they did was make the performance continuous and the audience unspecified. A stage you can leave is a stage. A stage you cannot leave is a condition.\n\n[…]\n\nI notice I write better when I assume four readers. I notice I write worse, and more often, when I assume forty thousand.',
    },
    {
      id: 's3',
      kind: 'essay',
      title: 'Against the Conversation We Should Have',
      createdAt: ago(37),
      url: 'https://the-long-way.substack.com/p/against-the-conversation',
      text: 'The sentence "we should have a conversation about this" is a load-bearing beam of contemporary avoidance. It has the grammar of engagement and the function of a door closing.\n\nA real conversation has a time, a room, and at least one person willing to be changed by it. The proposed conversation has none of these, and everybody involved knows it, which is why it is proposed so warmly.\n\n[…]\n\nI am not against talking. I am against the ritual invocation of talking as a substitute for it.',
    },
    {
      id: 's4',
      kind: 'essay',
      title: 'The Tab You Meant To Read',
      createdAt: ago(61),
      url: 'https://the-long-way.substack.com/p/the-tab',
      text: 'I have begun to think of my open tabs as a moral document. Each one is a small promise made to a future version of me who was going to be more serious, better rested, and in possession of an afternoon.\n\nThat person does not arrive. The promises accumulate anyway. At some point the browser crashes and I feel a relief so total it embarrasses me.\n\n[…]\n\nWhat is being mourned is not the article. It is the hour in which reading it would have been possible, and the self who would have had that hour.',
    },
    {
      id: 's5',
      kind: 'essay-summary',
      title: 'Slowness Is Not A Virtue',
      createdAt: ago(88),
      url: 'https://the-long-way.substack.com/p/slowness',
      text: 'On the mistake of turning attention into another performance metric — and why "reading deeply" became a status claim rather than a practice.',
    },
  ],
};

export function demoCollection(platform) {
  return platform === 'substack' ? DEMO_SUBSTACK : DEMO_TWITTER;
}
