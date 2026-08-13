---
id: aristotelian-friendship
title: The Three Friendships
category: theory
tradition: aristotelianism
philosophers:
  - Aristotle
era: "c. 340 BCE"
tags: [friendship, utility, pleasure, character, loyalty]
sources:
  - author: Aristotle
    title: "Nicomachean Ethics, Books VIII and IX"
    published: "in The Complete Works of Aristotle, ed. Jonathan Barnes, Princeton"
  - author: Michel de Montaigne
    title: "Of Friendship"
    published: "in Essays, Book I, trans. Donald Frame, Stanford"
    year: 1580
  - author: Bernard Williams
    title: "Persons, Character and Morality"
    published: "in Moral Luck, Cambridge University Press"
    year: 1981
  - author: Nel Noddings
    title: "Caring: A Feminine Approach to Ethics and Moral Education"
    published: University of California Press
    year: 1984
questions:
  - id: q1
    prompt: >-
      Aristotle says most friendships are based on usefulness or pleasure and
      dissolve when the use or the pleasure does; only friendships between
      good people, loved for who they are, last. Someone tells you that your
      closest work friendship is the first kind. Are they insulting you?
    options:
      - id: a
        label: >-
          Yes, and they are also probably wrong. You do not stop knowing
          someone's character because you met them through a job.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
      - id: b
        label: >-
          No, and it does not matter. Friendships of use are most of life
          and they are not lesser for being conditional.
        scores: { egoist: 0.8, contractarian: 0.4, certainty: 0.4 }
      - id: c
        label: >-
          The ranking is the problem. A friendship is not a grade of ore;
          what it is depends on what the two people do in it.
        scores: { care: 0.9, existentialist: 0.4, scope: -0.5 }
      - id: d
        label: >-
          Test it rather than argue about it. What happened last time one of
          you had nothing to offer the other?
        scores: { consequentialist: 0.9, virtue: 0.4, affect: -0.4 }
  - id: q2
    prompt: >-
      A close friend has done something seriously wrong at work — not
      criminal, but the kind of thing that would end a career — and asks you
      to say nothing. You are the only person who knows.
    options:
      - id: a
        label: >-
          Say nothing, but tell him you will not do it twice, and mean it.
          Friendship is not neutrality about who your friend becomes.
        scores: { virtue: 1.0, care: 0.5, authority: -0.4 }
      - id: b
        label: >-
          Say nothing. He came to you as a friend, and a friend who reports
          you is a colleague you were mistaken about.
        scores: { care: 1.0, scope: -0.9, authority: 0.4 }
      - id: c
        label: >-
          Report it. The people affected did not choose to be inside your
          friendship, and being close to you is not a defence.
        scores: { deontological: 0.9, contractarian: 0.5, scope: 0.8 }
      - id: d
        label: >-
          Work out who is actually harmed and how badly. If the answer is
          nobody much, that changes it; if it is someone real, so does that.
        scores: { consequentialist: 1.0, certainty: -0.5 }
  - id: q3
    prompt: >-
      Aristotle says a friend is "another self", and that you cannot be
      friends in the fullest sense with many people, because it takes time
      and there is only so much of you. A colleague says she has forty close
      friends and is not exaggerating.
    options:
      - id: a
        label: >-
          Then she has forty pleasant acquaintances. The word is doing work
          it cannot do at that number, and something is being lost.
        scores: { virtue: 0.9, certainty: 0.6, scope: -0.5 }
      - id: b
        label: >-
          She may be describing something real that Aristotle's model has no
          room for — a life of many partial, sustaining attachments.
        scores: { care: 0.9, relativist: 0.4, scope: 0.4 }
      - id: c
        label: >-
          Nothing turns on the word. What matters is whether anyone would
          drive four hours for her at 2 a.m., and she will find out.
        scores: { consequentialist: 0.9, egoist: 0.4, affect: -0.4 }
      - id: d
        label: >-
          Aristotle's limit is a fact about his leisure, not about people.
          Depth is not the only thing friendship can be for.
        scores: { relativist: 0.9, existentialist: 0.4, authority: 0.6 }
  - id: q4
    prompt: >-
      Bernard Williams imagined a man who can save one of two drowning
      people, one of them his wife, and who pauses to check that impartial
      morality permits him to save her. Williams called that "one thought
      too many".
    options:
      - id: a
        label: >-
          Exactly right. A person who needs a permission slip to save his
          wife has already failed at being her husband.
        scores: { care: 1.0, virtue: 0.5, scope: -0.9 }
      - id: b
        label: >-
          The pause is honest. Two people were drowning, and the fact that
          one was yours is not a reason the other one would accept.
        scores: { consequentialist: 1.0, scope: 1.0, affect: -0.7 }
      - id: c
        label: >-
          Partiality is permitted by any liveable moral system, and knowing
          that is not an extra thought — it is why the system is liveable.
        scores: { contractarian: 1.0, deontological: 0.4, certainty: 0.5 }
      - id: d
        label: >-
          The kind of person who saves his wife without deliberating is the
          kind of person you want in the water. Judge the disposition.
        scores: { virtue: 1.0, care: 0.4, affect: 0.7 }
outcomes:
  - id: friendship-of-character
    dominant: virtue
    label: Loved For What They Are
    text: >-
      You hold with Aristotle that the friendships worth the name are between
      people who like each other's character, that these are rare and slow,
      and that being a friend includes caring what your friend becomes — which
      is why you would not simply cover for him. This is a demanding and
      accurate picture of the few relationships most people would actually die
      for. Its cost is a certain severity: the ranking implies that most of
      the attachments in a life are second-rate, and the people inside them
      would not describe them that way.
    base_rate: null
  - id: the-particular-attachment
    dominant: care
    label: This Person, Not the Category
    text: >-
      Your loyalty runs to the actual person rather than to a grade of
      relationship or a rule about relationships, and you take Williams's
      point that a man who deliberates about saving his wife has already gone
      wrong. This is where most real obligation lives, and any moral theory
      that cannot accommodate it is describing somebody else's life. Its
      exposure is everyone outside the circle: partiality is the engine of
      both loyalty and nepotism, and from the inside they are difficult to
      tell apart.
    base_rate: null
  - id: what-the-friendship-costs-others
    dominant: deontological
    label: The People Outside It
    text: >-
      You hold that being close to you is not a defence, and that the people
      harmed by a friend's conduct did not consent to be inside the
      friendship. This is the position that protects everyone who is not in
      the room. What it costs is intimacy of a specific kind: a friend who
      knows you will report him is a friend he cannot bring the worst thing to,
      and you should be clear-eyed that this is a real loss and not merely his
      problem.
    base_rate: null
  - id: count-everyone
    dominant: consequentialist
    label: Count Everyone In the Water
    text: >-
      You will not let the fact that someone is yours settle who matters, and
      you are willing to say the uncomfortable thing: the stranger drowning
      beside your wife has the same claim to a life. This is consistent, and
      it is the reasoning behind almost every institution that has ever
      reduced suffering at scale. The difficulty is that a person who really
      applied it would have no friends in Aristotle's sense at all — and that
      the practice of loving particular people is not obviously something a
      good world would want less of.
    base_rate: null
  - id: useful-is-not-lesser
    dominant: egoist
    label: Most Friendship Is Conditional
    text: >-
      You decline the hierarchy: the friendships that run on usefulness and
      pleasure are most of anyone's life, they are not counterfeit, and the
      demand that they be unconditional is a way of setting people up to be
      disappointed. This is honest about how attachments actually work and it
      wastes nobody's time. What it gives up is Aristotle's central
      observation — that some people are loved for who they are rather than
      what they supply — and most people who deny that are quietly hoping it
      is true about one or two of theirs.
    base_rate: null
  - id: the-terms-of-loyalty
    dominant: contractarian
    label: What Friends Can Ask
    text: >-
      You think a friendship has terms — things that can be asked and things
      that cannot — and that partiality is legitimate precisely because a
      liveable moral order makes room for it. This gives you a principled
      answer to the friend asking for silence: he is asking for something
      outside what friendship licenses. Its weakness is that the terms are
      never actually negotiated, and the person invoking them is usually the
      one who wants out of the harder thing.
    base_rate: null
  - id: many-partial-attachments
    dominant: relativist
    label: A Different Shape of Life
    text: >-
      You suspect Aristotle's model describes a particular sort of life — male,
      leisured, unhurried, with time to build a handful of deep bonds — and
      that a person with forty warm, partial, sustaining attachments is not
      failing at friendship but doing something his framework cannot see. That
      is a fair historical point. Where it thins is that Aristotle's test is
      not about numbers: it is about whether anyone loves you when you have
      stopped being useful, and that test does not care what era you are in.
    base_rate: null
---

## What it means

Books VIII and IX of the *Nicomachean Ethics* are the longest sustained treatment of
friendship in ancient philosophy — roughly a fifth of the whole work — and Aristotle
begins by dividing it into three kinds according to what is loved.

Friendships of *utility* are based on what each party gets. Aristotle's examples are
commercial and civic: the people you deal with because the dealing is advantageous. He
is not sneering. He says these are real friendships, and that most friendships between
older people are of this kind. Friendships of *pleasure* are based on enjoyment of each
other's company — his example is the young, whose friendships are intense, quickly
formed, and quickly dissolved, because what they enjoy changes as they do. Both kinds
are, in his word, *accidental*: what is loved is not the person but something the person
supplies, and when the supply stops the friendship stops, which is why these end without
anyone behaving badly.

The third kind he calls complete or perfect friendship: between good people, alike in
virtue, who wish each other well for the other's own sake. Because they love the
person's character rather than what they get, and character is stable, these friendships
are stable. They also happen to include the utility and the pleasure — good friends are
useful and enjoyable — which is why Aristotle thinks nothing is lost by ranking them
highest. He adds that such friendships require time and shared life ("you cannot know
each other until you have eaten the proverbial salt together"), and that you cannot have
many of them, for the same reason you cannot be passionately in love with several people
at once.

Two further claims give the account its bite. First, that a friend is "another self",
which is why your friend's good is not an external interest you happen to have. Second,
that friendship of the complete kind is only possible between good people — vicious
people can be useful to each other but cannot be friends in the full sense, because
there is nothing stable in them to love.

## What it suggests

The immediate practical consequence is a diagnostic. If you want to know what kind of
friendship you are in, ask what happens when the utility ends: the promotion goes the
other way, the illness is long, the person stops being fun. Aristotle's claim is not
that friendships which fail this test are worthless, but that they are honestly
describable, and that a good deal of unhappiness comes from expecting a friendship of
utility to behave like a friendship of character.

The account also puts pressure on a certain picture of morality. If a friend is another
self, then your obligations to friends are not derived from general duties to persons —
they are constitutive of who you are. Bernard Williams turned this into one of the
sharpest objections to impartial ethics: a man who saves his wife from drowning and
justifies it by noting that morality permits saving one's wife has had, in Williams's
phrase, "one thought too many". The thought that should move him is *that she is his
wife*, and a theory which makes that thought require a licence has misdescribed what it
is to have a life.

Two objections are worth holding. The first is that the ranking is class-inflected.
Complete friendship as Aristotle describes it requires leisure, longevity, stability of
circumstance and a rough equality of standing — conditions that were available to a
narrow slice of Athens and are not universal now. Montaigne's famous essay on his
friendship with Étienne de La Boétie inherits the same ideal and the same narrowness.
Nel Noddings and others in the ethics of care have argued that the model also quietly
excludes the asymmetrical relationships — parent and child, carer and cared-for — that
make up most of the actual work of human attachment, and which are not less moral for
being unequal.

The second objection is that "another self" is a dangerous formula. If your friend's
interests are yours, then loyalty has no natural limit, and the same reasoning that
makes friendship admirable makes conspiracy comfortable. Aristotle's answer is that
complete friendship only holds between good people — but that answer works by
assumption, and the friend who asks you to lie for him rarely announces which category
he is in.

## The problem

Marek and Danny have been friends for twenty-six years, since a shared flat with a
broken boiler.

Danny is now the finance director of a housing association with four hundred properties.
Marek has just been appointed to its board as a trustee, which Danny suggested, and
which they both joked about at the time.

Three weeks in, Marek found the anomaly. It is not theft. It is a contract with a
maintenance company whose director is Danny's brother-in-law, awarded twice without
competitive tender, at prices that are not unreasonable but are not good either, and
Danny's declaration of interest is on file for the first award and missing for the
second. In the sector this is a serious governance failure. It is the kind of thing that
ends a career and, if it goes to the regulator badly, costs the association its funding
for two years.

Marek raised it with him on a Tuesday, in a pub, badly. Danny did not deny anything. He
said the second declaration was an oversight, that he could produce the email trail to
show it, that the work was done properly, that Marek has known him for twenty-six years
and knows he would not steal from tenants. Then he said the thing Marek has not been
able to put down: *you're on that board because I put you there.*

Marek believes him about the money. He is fairly sure the tenants got adequate
gutters at a fair-ish price. He is also aware that if this were a stranger he would have
written to the chair on Wednesday morning, and that the only thing that has changed is
who it is — which is either the reason he should not report it, or the reason he must.

The board meets in nine days. Danny has not asked him to lie. He has asked him to leave
it, which is not the same thing and is not different enough.

## The questions

**1. Friendship of use.** Someone tells you your closest work friendship is based on
usefulness and would not survive the usefulness ending.

- An insult, and probably wrong. Meeting through a job does not stop you knowing someone.
- Not an insult and not important. Conditional friendships are most of life.
- The ranking is the problem. It depends what the two people do in it.
- Test it. What happened last time one of you had nothing to offer?

**2. The friend who asks for silence** about something that would end his career.

- Say nothing, but tell him not twice, and mean it.
- Say nothing. A friend who reports you was a colleague all along.
- Report it. The people affected did not consent to be inside your friendship.
- Work out who is actually harmed and how badly.

**3. "Another self."** Aristotle says you cannot have many complete friendships. A
colleague says she has forty close friends and is not exaggerating.

- Then she has forty acquaintances. The word cannot carry that number.
- She may be describing something real his model has no room for.
- Nothing turns on the word. Would anyone drive four hours at 2 a.m.?
- His limit reflects his leisure. Depth is not the only thing friendship is for.

**4. One thought too many.** The man who pauses to check that morality permits him to
save his wife rather than the stranger.

- Exactly right. Needing a permission slip is already a failure as her husband.
- The pause is honest. That she is yours is not a reason the other would accept.
- Partiality is permitted by any liveable morality; knowing that is not an extra thought.
- Judge the disposition. The undeliberating husband is who you want in the water.

## Reading your answer

**Loved For What They Are.** You hold that the friendships worth the name are built on
character, are slow and rare, and include caring what your friend becomes — which is why
covering for him without conditions is not friendship to you. This describes accurately
the few relationships most people would upend a life for. Its cost is severity: the
ranking implies most attachments in a life are second-rate, and the people inside them
do not experience them that way.

**This Person, Not the Category.** Your loyalty runs to the actual person, and you take
Williams's point that deliberating about your wife is already the wrong relationship to
her. This is where most real obligation lives, and a theory that cannot fit it is
describing someone else's life. Your exposure is everyone outside the circle: partiality
drives both loyalty and nepotism, and from the inside they look identical.

**The People Outside It.** You hold that closeness to you is not a defence, and that
those harmed did not agree to be inside your friendship. This protects everyone not in
the room. It costs a specific kind of intimacy — a friend who knows you will report him
cannot bring you the worst thing — and it is worth admitting that this is a real loss
rather than only his problem.

**Count Everyone In the Water.** You refuse to let ownership settle who matters, and you
will say the uncomfortable thing about the stranger drowning beside your wife. That is
consistent, and it is the reasoning behind most institutions that have reduced suffering
at scale. The difficulty is that a person who fully applied it would have no friends in
Aristotle's sense — and it is not obvious a good world wants less of the practice of
loving particular people.

**Most Friendship Is Conditional.** You decline the hierarchy: friendships of use and
pleasure are most of any life, are not counterfeit, and demanding unconditionality sets
people up to be let down. This is honest and it wastes nobody's time. What you give up is
Aristotle's central observation — that some people are loved for who they are rather
than what they supply — and most people who deny it are quietly hoping it holds for one
or two of theirs.

**What Friends Can Ask.** You think friendship has terms, and that partiality is
legitimate because a liveable moral order makes room for it. That gives you a principled
answer to Danny: he is asking for something outside what friendship licenses. Its
weakness is that the terms were never actually negotiated, and the person who invokes
them is usually the one looking for a way out of the harder thing.

**A Different Shape of Life.** You suspect the model describes a leisured, unhurried,
male sort of life, and that many partial attachments are a different shape rather than a
failure. Fair. Where it thins is that Aristotle's real test is not about numbers — it is
whether anyone loves you once you have stopped being useful, and that test is indifferent
to the era.

## Sources

- Aristotle, *Nicomachean Ethics*, Books VIII and IX (1155a–1172a), in *The Complete
  Works of Aristotle*, ed. Jonathan Barnes (Princeton University Press). The three kinds
  of friendship, the friend as another self, and the limits on number.
- Michel de Montaigne, "Of Friendship", *Essays* Book I (1580), trans. Donald Frame
  (Stanford University Press).
- Bernard Williams, "Persons, Character and Morality", in *Moral Luck* (Cambridge
  University Press, 1981) — "one thought too many".
- Nel Noddings, *Caring: A Feminine Approach to Ethics and Moral Education* (University
  of California Press, 1984), on asymmetrical relationships as moral rather than
  defective.
