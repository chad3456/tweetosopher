---
id: tripartite-soul
title: The Tripartite Soul
category: theory
tradition: platonism
philosophers:
  - Plato
era: "c. 375 BCE"
tags: [reason, desire, spirit, self-control, inner-conflict]
sources:
  - author: Plato
    title: "Republic, Book IV"
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Plato
    title: Phaedrus
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: David Hume
    title: A Treatise of Human Nature
    published: "Book II, Part III, Section III"
    year: 1739
  - author: Jonathan Lear
    title: "Open Minded: Working Out the Logic of the Soul"
    published: Harvard University Press
    year: 1998
questions:
  - id: q1
    prompt: >-
      You have decided, calmly and for good reasons, to end a relationship.
      Every time you are in the room with the person, you find you do not do
      it, and afterwards you cannot say what stopped you.
    options:
      - id: a
        label: >-
          Your reasoning was incomplete. Something you have not articulated
          knows more about this than your conclusion does.
        scores: { virtue: 0.9, care: 0.5, affect: 0.8 }
      - id: b
        label: >-
          Appetite is overriding judgement. The remedy is structure — decide
          in advance, then remove your own ability to postpone.
        scores: { virtue: 0.7, consequentialist: 0.4, certainty: 0.6 }
      - id: c
        label: >-
          There is no ruling part being overruled. There are competing wants,
          and the one that wins in the room is the one you actually have.
        scores: { egoist: 0.8, existentialist: 0.5, affect: 0.4 }
      - id: d
        label: >-
          What matters is the other person, who is being kept in a thing you
          have privately ended. The delay is the wrong, whatever caused it.
        scores: { care: 1.0, deontological: 0.4, scope: -0.3 }
  - id: q2
    prompt: >-
      Plato's third part of the soul is thumos — spirit, the seat of anger,
      shame and indignation. He tells of Leontius, who wanted to look at
      executed corpses, hated himself for it, and looked anyway, cursing his
      own eyes. Is his disgust with himself worth anything?
    options:
      - id: a
        label: >-
          Yes. Shame is reason's ally against appetite, and a person without
          it has lost an instrument, not gained a freedom.
        scores: { virtue: 1.0, deontological: 0.4, affect: 0.6 }
      - id: b
        label: >-
          No. Self-disgust changed nothing about what he did and left him
          worse off. It is a cost with no product.
        scores: { consequentialist: 0.9, egoist: 0.4, affect: -0.6 }
      - id: c
        label: >-
          His shame was borrowed from Athens, not built by him. Look at what
          any culture makes people ashamed of before trusting the feeling.
        scores: { relativist: 0.9, existentialist: 0.4, authority: 0.5 }
      - id: d
        label: >-
          The shame is the point and the looking is trivial. He knew the
          corpses were people once, and something in him insisted on it.
        scores: { care: 0.8, virtue: 0.4, affect: 0.7 }
  - id: q3
    prompt: >-
      Plato's healthy soul is one where reason rules, spirit enforces, and
      appetite obeys — and he calls that arrangement justice in a person.
      Is a person like that the person you would want to be?
    options:
      - id: a
        label: >-
          Yes. Everything good in a life depends on being able to keep a
          decision when the wanting arrives, which is most of the time.
        scores: { virtue: 1.0, deontological: 0.4, certainty: 0.6 }
      - id: b
        label: >-
          No. Reason has no authority to rule anything; it works out how to
          get what you already want and pretends afterwards that it chose.
        scores: { egoist: 0.8, nihilist: 0.4, affect: 0.7 }
      - id: c
        label: >-
          It depends what reason is ruling toward. A perfectly governed soul
          in the service of something monstrous is worse, not better.
        scores: { consequentialist: 0.9, scope: 0.6 }
      - id: d
        label: >-
          A soul that has to be governed is already divided, and calling one
          faction the legitimate one is a political move, not a discovery.
        scores: { existentialist: 0.9, relativist: 0.4, authority: 0.7 }
  - id: q4
    prompt: >-
      A friend has decided to stop drinking and asks you to hold his card,
      refuse him money, and ignore him when he asks for either — including
      when he insists, sober and articulate, that he has changed his mind.
    options:
      - id: a
        label: >-
          Agree, and hold. The person who asked you is the one to honour;
          the one asking now is the appetite talking.
        scores: { virtue: 0.8, deontological: 0.4, authority: -0.4 }
      - id: b
        label: >-
          Agree, but return it the moment he is sober and serious. He is one
          person, not a committee, and he can revoke what he set up.
        scores: { contractarian: 1.0, existentialist: 0.4, authority: 0.5 }
      - id: c
        label: >-
          Agree, and decide in the moment on what will actually help. The
          promise is a tool for keeping him alive, not a rule to obey.
        scores: { consequentialist: 1.0, care: 0.4, certainty: -0.6 }
      - id: d
        label: >-
          Don't agree. Being someone's jailer damages the friendship you are
          both relying on to get him through this.
        scores: { care: 0.9, virtue: 0.4, scope: -0.5 }
outcomes:
  - id: reason-should-rule
    dominant: virtue
    label: The Governed Soul
    text: >-
      You take Plato's side: the parts of a person are genuinely in conflict,
      one of them ought to be in charge, and a life in which appetite decides
      is not free but merely unruled. This matches how self-command actually
      feels from the inside, and it explains why people build commitments
      against their own future selves. Its cost is the ranking. You have to
      say why reason's verdicts deserve to win, and the honest answer is
      usually that they are yours in a way the wanting is not — which is
      exactly the claim Hume denied.
    base_rate: null
  - id: reason-is-the-servant
    dominant: egoist
    label: Reason Is the Servant
    text: >-
      You think the ruling part is a flattering fiction — that what people
      call deliberation is mostly the assembling of reasons for what they were
      going to do anyway. Hume put it bluntly: reason is and ought only to be
      the slave of the passions. A great deal of psychology since has sided
      with him. What it costs you is any clean account of the person who does
      change their mind under argument, and of why anyone would bother
      arguing, including you, just now.
    base_rate: null
  - id: rule-toward-what
    dominant: consequentialist
    label: Governed Toward What
    text: >-
      You are less interested in the architecture than in where it is pointed.
      A well-ordered soul in the service of something terrible is a worse
      thing than a chaotic one, and history's most disciplined men are not its
      best. This is a real correction to Plato, who assumes that reason in
      charge will aim at the good. Its exposure is that you still need the
      internal order to get anything done at all, and you have said nothing
      about how a person gets it.
    base_rate: null
  - id: the-divided-self
    dominant: existentialist
    label: There Is No Ruling Part
    text: >-
      You reject the constitutional picture: naming one faction the legitimate
      government of a person is a move in the argument, not a finding about
      the soul. What you are left with is a self that has to be made rather
      than governed, and you own every part of it. That is honest, and it is
      also heavy — you cannot disown the 3 a.m. decision as "not really me",
      because on your account there is no really-me for it to fail to be.
    base_rate: null
  - id: shame-is-inherited
    dominant: relativist
    label: Whose Shame Is It
    text: >-
      You are suspicious of spirit in particular: indignation and self-disgust
      feel like moral perception and are largely trained, and the things
      people have burned with shame over vary enormously across places. That
      caution is well earned. Its difficulty is that it applies to the
      suspicion too — the standard you use to audit your shame came from
      somewhere as well, and you have no unconditioned place to stand while
      you do the auditing.
    base_rate: null
  - id: the-other-person
    dominant: care
    label: The Person on the Other Side
    text: >-
      Your attention goes past the interior drama to whoever is waiting on the
      outcome of it: the partner still in the relationship, the friend holding
      the card, the dead the crowd was staring at. This is a genuine
      correction, since the language of inner government makes the self the
      only subject and everyone else scenery. Where it strains is that the
      internal question is not thereby answered — you still have to act, and
      knowing who will be hurt does not tell you which part of yourself to
      trust when they disagree.
    base_rate: null
  - id: the-standing-arrangement
    dominant: contractarian
    label: What You Agreed With Yourself
    text: >-
      You treat self-binding as a kind of contract — made in advance, with
      terms, and revocable by the person who made it. This handles the drinking
      friend well and respects him as an adult rather than a case. Its
      pressure point is the moment the revocation arrives: if you honour every
      revision, the arrangement gives no protection at all, and if you don't,
      you have decided that one version of him is the real signatory, which is
      the very ranking you were trying to avoid.
    base_rate: null
---

## What it means

In Book IV of the *Republic*, Plato argues that the soul has three parts, and he argues
it from conflict. If a thirsty man refuses to drink, then something in him is pulling
toward the water and something else is holding him back, and one thing cannot both push
and pull at once in the same respect. So there must be at least two things.

He names them. *Logistikon* — the calculating or reasoning part, which works out what is
actually good. *Epithumetikon* — the appetitive part, which wants food, drink, sex and
money, and which is the largest part in most people. And between them *thumos*: spirit,
the seat of anger, pride, competitiveness, shame and indignation. Thumos is the
distinctive contribution. It is not appetite and not reason, but the part that gets
furious on your behalf, that is humiliated, that wants to be seen as worthy. Plato's
illustration is the story of Leontius, who was walking past the public executioner's
ground, wanted to look at the corpses, was disgusted at himself for wanting to, fought
it, lost, ran over, forced his eyes open and shouted at them: *there you are, curse
you, take your fill of the lovely sight*. The disgust is thumos; the wanting is
appetite; and they are visibly not the same thing.

The point of the division is political, in the literal sense. Plato's city has three
classes — rulers, guardians, producers — and the argument runs in parallel: justice in
a city is each class doing its own work and not another's, and justice in a person is
each part of the soul doing its own work. Reason rules because it alone knows what is
good for the whole; spirit is reason's enforcer, the ally that supplies the energy to
carry a decision; appetite obeys. In the *Phaedrus* he gives the same picture as an
image: a charioteer with two horses, one noble and one unruly.

## What it suggests

Take the picture seriously and self-control stops being a matter of willpower and
becomes a matter of *arrangement*. If appetite is a permanent resident rather than an
intruder, then the useful question is not how to be stronger in the moment but how to
structure your life so the moment arrives less often and finds you already committed:
the standing order, the friend who holds the card, the food not in the house. Every
technology of precommitment, from Odysseus at the mast to a savings product that
penalises withdrawal, is Platonic engineering.

It also rehabilitates the emotions Plato's successors were often keenest to suppress.
Thumos is not a defect. Indignation on behalf of someone wronged, shame at your own
smallness, the flare of anger that makes you say the thing at the meeting — these are
the fuel that reason cannot supply itself. A person of good judgement and no spirit
knows what should be done and does not do it. This is why Plato's guardians are trained
in music and gymnastics before they are trained in argument: he is building the
enforcer first.

The standing objection is Hume's, and it is fundamental. Reason, he said, is and ought
only to be the slave of the passions: it can tell you how to get what you want and what
follows from what, but it cannot by itself supply a want, and therefore it cannot rule
anything. On this view Plato's three parts are really one part that desires and one
part that calculates, and calling the calculator the legitimate government is a piece
of self-flattery. A great deal of subsequent psychology has been friendly to Hume —
work on motivated reasoning suggests that much of what feels like deliberating is
retrospective justification of a conclusion already reached elsewhere.

There is a second, more modern objection. The constitutional metaphor smuggles in its
own conclusion. Once you have described yourself as a city with a rightful government
and a rebellious populace, the question "which part of me should win?" has already been
answered by the vocabulary. Someone who says the 3 a.m. want was also them, not an
invader, is not making a mistake about their own anatomy. They are declining a
description.

## The problem

Owen has been sober for fourteen months, and in March he wrote a document.

He wrote it in the morning, at a kitchen table, sober and unhurried, and it is careful.
It gives his sister Ruth power over the joint account. It lists three things he might
say to get access — he predicted all three almost word for word — and instructs her to
refuse them. It ends with a sentence he read aloud to her: *the version of me who asks
you for this is not the one asking you now, and I am asking you now.*

It is November. His father has died. Owen has not had a drink, and he is asking Ruth
for the account back — not desperate, not slurring, at ten in the morning, with a
reasonable account of why the March document was written by a frightened man who did
not know what he would need later. He points out, correctly, that Ruth is not his
guardian and he is not ill. He says the arrangement is now the thing eating him, that
being managed by his sister at forty-one is its own kind of drowning, and that she has
started looking at him the way you look at a patient.

Ruth has read the document eleven times. She cannot find anything in it that
distinguishes this request from the ones it told her to refuse — because the man who
wrote it anticipated that he would be persuasive.

She has to answer him today. Either she treats the March document as the voice of the
real Owen and this morning's request as symptom, or she treats a competent adult
standing in front of her as the authority on his own life. There is no third thing, and
both of them know that whichever she chooses, she is deciding which of two men is her
brother.

## The questions

**1. The decision you cannot execute.** You have decided, calmly and with good reasons,
to end a relationship, and in the room you never do it.

- Your reasoning was incomplete; something unarticulated knows more than your conclusion.
- Appetite is overriding judgement. The remedy is structure, not effort.
- No ruling part is being overruled. The want that wins in the room is the one you have.
- The wrong is what the other person is being kept inside, whatever caused the delay.

**2. Leontius.** He wanted to look at the corpses, hated himself for it, and looked,
cursing his own eyes. Is the self-disgust worth anything?

- Yes. Shame is reason's ally, and losing it is losing an instrument.
- No. It changed nothing and cost him something. A cost with no product.
- His shame was Athens', not his. Check what a culture shames before trusting it.
- The shame is the point: something in him insisted the corpses had been people.

**3. The governed soul.** Reason rules, spirit enforces, appetite obeys. Is that who you
want to be?

- Yes. Everything good depends on holding a decision when the wanting arrives.
- No. Reason serves what you already want and takes the credit afterwards.
- Depends what it is ruling toward. A well-run soul aimed at something monstrous is worse.
- A soul needing government is already divided; naming the rightful faction is politics.

**4. The card.** Your friend asks you to hold his money and refuse him — including when
he insists, sober and articulate, that he has changed his mind.

- Agree and hold. The one who asked you is the one to honour.
- Agree, but return it when he is sober and serious. He can revoke what he set up.
- Agree, then decide in the moment on what will help. The promise is a tool.
- Don't agree. Being his jailer damages what you are both relying on.

## Reading your answer

**The Governed Soul.** You hold that the parts are really in conflict and that one of
them ought to win. This matches how self-command feels and explains why people build
cages for their future selves. The cost is the ranking: say why reason's verdicts
deserve to rule, without simply asserting that they are more you than the wanting is —
which is the claim Hume denied and you will need to defend.

**Reason Is the Servant.** You think the ruling part is flattery, and that deliberation
mostly assembles reasons for a conclusion reached elsewhere. Much of modern psychology
is on your side. What you lack is an account of the person who genuinely changes their
mind under argument — and of why you would bother reading an argument, including this
one.

**Governed Toward What.** You care less about the architecture than its aim, and you
are right that Plato assumes what he should prove: that reason in charge will aim well.
The disciplined have committed most of history's organised horrors. Your exposure is
that you still need internal order to do anything at all, and you have said nothing
about how a person acquires it.

**There Is No Ruling Part.** You decline the constitutional description, and you own
every faction. This is honest and it is heavy. You cannot disown the 3 a.m. decision as
not really you, because on your account there is no really-you it failed to be — and
that makes forgiveness of yourself harder, not easier.

**Whose Shame Is It.** You are suspicious of spirit specifically: indignation feels like
perception and is largely trained, and the catalogue of things people have burned with
shame over is a warning. The difficulty is that the suspicion is trained too. The
standard you audit your shame with came from somewhere, and you have no unconditioned
place to stand while auditing.

**The Person on the Other Side.** You look past the interior drama to whoever is waiting
on it. That is a real correction — the language of inner government makes everyone else
scenery. But the internal question is not answered by it: you still have to act, and
knowing who gets hurt does not tell you which part of yourself to believe when they
disagree.

**What You Agreed With Yourself.** You treat self-binding as a contract with terms,
revocable by its author, which respects the drinker as an adult rather than a case. The
pressure comes at the revocation. Honour every revision and the arrangement protects
nobody; refuse one and you have declared which version signed — the ranking you were
trying to avoid.

## Sources

- Plato, *Republic*, Book IV (435c–444e), in *Plato: Complete Works*, ed. John M. Cooper
  (Hackett). The argument from conflict, the three parts, and the story of Leontius.
- Plato, *Phaedrus* (246a–254e) — the charioteer and the two horses.
- David Hume, *A Treatise of Human Nature* (1739), Book II, Part III, Section III:
  reason as the slave of the passions.
- Jonathan Lear, *Open Minded: Working Out the Logic of the Soul* (Harvard University
  Press, 1998), for a reading that takes Plato's psychology seriously alongside Freud's.
- Jon Elster, *Ulysses and the Sirens* (Cambridge University Press, 1979), on
  precommitment and the divided agent.
