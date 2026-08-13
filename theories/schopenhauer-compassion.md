---
id: schopenhauer-compassion
title: Compassion as the Basis of Morality
category: theory
tradition: pessimism
philosophers:
  - Arthur Schopenhauer
era: "1840"
tags: [compassion, motivation, animals, egoism, feeling]
sources:
  - author: Arthur Schopenhauer
    title: On the Basis of Morality
    published: "In Die beiden Grundprobleme der Ethik (The Two Fundamental Problems of Ethics)"
    year: 1840
  - author: Arthur Schopenhauer
    title: The World as Will and Representation, Volume I, Book IV
    published: Leipzig, F. A. Brockhaus
    year: 1818
  - author: Immanuel Kant
    title: Groundwork of the Metaphysics of Morals
    published: Riga, Johann Friedrich Hartknoch
    year: 1785
  - author: Friedrich Nietzsche
    title: On the Genealogy of Morality
    published: Leipzig, C. G. Naumann
    year: 1887
  - author: Christopher Janaway
    title: "Beyond Selflessness. Reading Nietzsche's Genealogy"
    published: Oxford University Press
    year: 2007
questions:
  - id: q1
    prompt: >-
      You give money to a man begging outside a station you pass through once a
      year. He will not remember you and you will not see him again. Nobody
      watched you do it. Ask yourself honestly what moved your hand.
    options:
      - id: a
        label: >-
          His need stopped being information and became something you felt from
          the inside. That participation in another's suffering is the whole of it.
        scores: { care: 1.0, virtue: 0.4, affect: 0.8 }
      - id: b
        label: >-
          You cannot consistently will a world in which need like his goes unmet.
          Whether you felt anything is beside the point.
        scores: { deontological: 1.0, certainty: 0.5, affect: -0.7 }
      - id: c
        label: >-
          You disliked the sensation of walking past, and you paid a small sum to
          be rid of it. That is not compassion, and you should not call it that.
        scores: { egoist: 0.9, affect: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          Giving is what a decent person does, and you would rather be that kind
          of person than the kind who calculates on a station concourse.
        scores: { virtue: 1.0, care: 0.3, affect: 0.4 }
  - id: q2
    prompt: >-
      In the yard behind your building a man is beating a dog with a length of
      hose. It is his dog. No law here is being broken and he tells you, correctly,
      that it is none of your business.
    options:
      - id: a
        label: >-
          Stop him. The suffering in front of you is the same suffering it would be
          in a human animal, and the species boundary is not a moral one.
        scores: { care: 1.0, scope: 0.9 }
      - id: b
        label: >-
          Stop him, but the wrong is what it makes of him. A man who can do this to
          a dog has already spoiled something he will need later with people.
        scores: { virtue: 0.9, certainty: 0.3, scope: -0.4 }
      - id: c
        label: >-
          Object, but be clear that the dog is not wronged. Duties are owed to
          beings who can hold and answer to them, and the dog cannot.
        scores: { deontological: 0.8, scope: -0.7, certainty: 0.4 }
      - id: d
        label: >-
          Walk on. It is not your dog and not your yard, and a stranger's cruelty
          is a thing you are entitled to leave alone.
        scores: { egoist: 0.7, relativist: 0.3, scope: -0.9 }
  - id: q3
    prompt: >-
      A colleague you have never liked tells you her mother is dying. You say the
      right things and you offer real help, and you notice while you are doing it
      that you feel nothing at all.
    options:
      - id: a
        label: >-
          Then it was not a moral act. The feeling is not the ornament on the deed,
          it is the thing that made the deed moral rather than merely correct.
        scores: { care: 0.9, virtue: 0.4, affect: 0.8 }
      - id: b
        label: >-
          It was a moral act and a better one for being cold. You did what was owed
          without the assistance of liking her.
        scores: { deontological: 1.0, affect: -0.8, certainty: 0.5 }
      - id: c
        label: >-
          The absence of feeling is a fault, but a fault of formation rather than of
          will. Compassion can be trained, and you have not trained it.
        scores: { virtue: 1.0, care: 0.4 }
      - id: d
        label: >-
          You help when it is cheap and you stop when it is not, like everyone else.
          Calling the pattern compassion is flattery.
        scores: { egoist: 1.0, certainty: 0.4, affect: -0.4 }
outcomes:
  - id: felt-from-inside
    dominant: care
    label: The Barrier Goes Down
    text: >-
      You locate morality in the moment another person's suffering stops being
      information about the world and becomes something happening to you. That is
      Schopenhauer's own position and it explains what rule-based accounts strain
      to explain, including why cruelty to animals is cruelty. The cost is
      partiality. What you feel tracks proximity, vividness and resemblance, so an
      ethics built on it will always be loudest about the person in front of you
      and quietest about the thousand you cannot see.
    base_rate: null
  - id: owed-regardless
    dominant: deontological
    label: Owed Whether Felt or Not
    text: >-
      You treat obligation as something that holds independently of what you feel
      about the person it is owed to, which is why you can meet it towards someone
      you dislike. This is robust exactly where compassion is weak. Its exposure is
      the case Schopenhauer pressed against Kant, that a duty owed only to rational
      agents leaves out everything that suffers without reasoning, and that the
      person who helps purely from principle is missing something we would notice
      if we saw it.
    base_rate: null
  - id: what-it-makes-of-you
    dominant: virtue
    label: What the Doing Makes
    text: >-
      Your attention is on the person acting rather than on the act or the feeling
      behind it, and you treat compassion as a capacity that can be cultivated or
      allowed to rot. That absorbs the strongest thing in Schopenhauer without
      committing you to his metaphysics. What it owes you is an account of the hard
      case, where two decent people with well-formed characters want opposite
      things and character has nothing further to say.
    base_rate: null
  - id: the-honest-egoist
    dominant: egoist
    label: The Interest Underneath
    text: >-
      You suspect that most of what passes for compassion is the purchase of relief
      from discomfort, and you would rather say so than accept a flattering
      description. Schopenhauer half agrees with you, since egoism is the first of
      his three incentives and the one that covers almost all behaviour. The
      difficulty is that the suspicion is unfalsifiable. Any act can be redescribed
      as self-interested, and a claim that nothing could count against it has
      stopped being a discovery about people.
    base_rate: null
---

## What it means

Schopenhauer thought that every moral philosophy before his had asked the wrong
question. Kant had asked what a rational will must command itself to do.
Schopenhauer asked what actually moves anybody, and answered that human action has
exactly three incentives: egoism, which wants one's own good; malice, which wants
another's harm; and compassion, *Mitleid*, which wants another's good. Only the
third has moral worth, and every act we recognise as moral turns out on inspection
to run through it.

The argument is set out in *On the Basis of Morality*, written in 1839 for a prize
competition of the Royal Danish Society of Sciences and published in 1840. The
Society declined to award the prize, though Schopenhauer was the only entrant, and
he printed their reasons alongside the essay with some relish.

*Mitleid* is usually rendered "compassion" and is badly translated as "pity", which
implies a superior looking down. Schopenhauer means something stranger. In
compassion, he says, the barrier between me and another momentarily fails: I do not
infer that you are suffering and then decide to care, I participate directly in the
suffering, and the whole apparatus of self-interest is for that moment suspended.
His metaphysics explains why this is possible rather than miraculous. Individuality,
on his account, belongs to appearance; underneath it there is one undivided will,
so the compassionate man is registering something true — *tat tvam asi*, that art
thou, which he borrows from the Upanishads.

Two consequences follow that his contemporaries found scandalous. The whole of
morality reduces to one maxim: *harm no one; rather, help everyone as much as you
can*. And animals are inside the circle, not outside it, since what compassion
responds to is suffering rather than rationality. Schopenhauer is savage about the
tradition that made animals things, and blunt that Kant's system has no room for
them.

## What it suggests

If Schopenhauer is right, moral education is not the teaching of principles but the
cultivation of a capacity to be affected. You would not train a child by rehearsing
the categorical imperative; you would arrange for them to see suffering closely
enough that it registers. You would also stop grading acts by their conformity to
rules and start grading them by what moved the person, which means a correct act
done from calculation is not a moral act at all — merely a well-behaved one.

It also means the argument about animals is over before it starts. There is no
threshold of language or reason to be met. If a creature can suffer, its suffering
is the same kind of fact as yours, and the only question is how much of it you are
causing.

The standing objection is that compassion is a terrible instrument. It is partial
by construction: it responds to what is near, vivid, and like us, which is why a
single named child in a well commands more of it than a famine. If morality is
whatever compassion motivates, morality inherits that distortion. Rule-based
ethics exists partly to correct it — the whole point of a duty is that it holds
towards the person you do not feel for.

A second objection, sharper because it comes from someone who admired him, is
Nietzsche's. In *On the Genealogy of Morality* he treats the elevation of pity as
itself a symptom: a morality made by and for the weak, which flatters suffering by
making it the thing that confers standing, and which drags the strong down under
the guise of decency. You do not have to accept Nietzsche's diagnosis to notice
that a compassion-based ethic has no obvious answer to it, since the reply "but
that is cruel" is exactly the move being questioned.

## The problem

Mira runs a small charitable trust with money enough to fund one thing this year.

On her desk are two files. The first is a boy of nine in a town four hours away
with a rare tumour; the surgery is available abroad and the family cannot pay. She
has met him. He drew her a picture of a heron, which is pinned above her desk, and
she thinks about him at odd hours without meaning to.

The second file is a water scheme for a district she will never visit. The
engineer's estimate is that clean supply to the four villages would prevent
somewhere between eleven and forty deaths over a decade, most of them infants,
none of whom exist yet as names. The uncertainty is real; the range is honest.

Her deputy points out that the second file plainly saves more lives, that Mira
knows this, and that the only reason it is still an argument is a drawing of a
heron.

Mira does not disagree. What she wants to know is whether the pull she feels
towards the boy is a distortion she should correct for — or whether it is the only
thing in the room that is actually moral, and the spreadsheet is the intruder.

## The questions

**1. The station.** You give money to a man begging outside a station you pass
through once a year. Nobody saw. What moved your hand?

- His need stopped being information and became something you felt from the inside.
- You cannot consistently will a world in which such need goes unmet; feeling is
  beside the point.
- You disliked walking past and paid to be rid of the sensation.
- Giving is what a decent person does, and you would rather be that person.

**2. The dog in the yard.** A man is beating his own dog. No law is broken and he
tells you it is none of your business.

- Stop him. The suffering is the same suffering, and the species line is not a moral
  one.
- Stop him, but the wrong is what it makes of him.
- Object, but be clear the dog is not wronged; duties are owed to beings who can
  hold them.
- Walk on. A stranger's cruelty is a thing you may leave alone.

**3. The colleague.** Someone you have never liked tells you her mother is dying.
You say and do the right things, and you notice you feel nothing.

- Then it was not a moral act; the feeling was what would have made it one.
- It was a moral act and a better one for being cold.
- The absence is a fault of formation rather than of will; compassion can be trained.
- You help when it is cheap and stop when it is not, and calling that compassion is
  flattery.

## Reading your answer

**The Barrier Goes Down.** You put the moral event at the moment another's
suffering stops being information and starts being yours. That gets animals right
without argument and explains why we distrust the correct act performed coldly. It
commits you to an ethics that is loudest about whoever is in front of you. Mira's
heron will keep beating the water scheme, and you will need a reason why that is not
simply an error.

**Owed Whether Felt or Not.** You hold that obligation survives the absence of
warmth, which is why you can meet it towards people you dislike — and most people we
owe things to are people we feel nothing about. The price is the charge
Schopenhauer laid against Kant: a morality addressed to rational agents has to work
hard to say what is wrong with hurting something that cannot reason, and the
person who helps purely from duty is missing a thing we would notice.

**What the Doing Makes.** You treat compassion as a capacity that is grown or lost
rather than a feeling that visits, which lets you keep Schopenhauer's insight and
drop his metaphysics. The unfinished business is decision. When two well-formed
people want opposite things, character has run out of things to say and you still
have to choose.

**The Interest Underneath.** You suspect self-interest under most of what is called
compassion and you would rather be accurate than flattered. Schopenhauer grants you
most of the territory. The trap is that the suspicion cannot be tested: if every
act admits a selfish redescription, you have not discovered anything about people,
you have adopted a vocabulary.

## Sources

- Arthur Schopenhauer, *On the Basis of Morality* (Über die Grundlage der Moral),
  written 1839, published 1840 in *Die beiden Grundprobleme der Ethik*.
- Arthur Schopenhauer, *The World as Will and Representation*, Volume I (1818),
  Book IV, on compassion, asceticism and the denial of the will.
- Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785) — the account of
  duty and rational agency that Schopenhauer's essay is written against.
- Friedrich Nietzsche, *On the Genealogy of Morality* (1887), Preface and First
  Essay, for the counter-argument that the elevation of pity is itself a symptom.
- Christopher Janaway, *Beyond Selflessness: Reading Nietzsche's Genealogy* (Oxford
  University Press, 2007), on the Schopenhauer–Nietzsche dispute about compassion.
