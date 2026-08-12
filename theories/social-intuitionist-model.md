---
id: social-intuitionist-model
title: The Rider and the Elephant
category: theory
tradition: moral-psychology
philosophers:
  - Jonathan Haidt
era: "2001"
tags: [intuition, reasoning, disgust, moral-psychology, justification]
sources:
  - author: Jonathan Haidt
    title: "The emotional dog and its rational tail: A social intuitionist approach to moral judgment"
    published: "Psychological Review 108(4), 814–834"
    year: 2001
  - author: Jonathan Haidt
    title: The Righteous Mind - Why Good People Are Divided by Politics and Religion
    published: Pantheon Books
    year: 2012
  - author: Edward B. Royzman, Kwanwook Kim, Robert F. Leeman
    title: "The curious tale of Julie and Mark: Unraveling the moral dumbfounding effect"
    published: "Judgment and Decision Making 10(4), 296–313"
    year: 2015
  - author: David Hume
    title: A Treatise of Human Nature
    published: "Book II, Part III"
    year: 1739
questions:
  - id: q1
    prompt: >-
      A family's elderly dog is killed by a car outside their house. They have heard
      that dog meat is good, so they butcher it and eat it for dinner. Nobody sees,
      nobody is harmed, no law is broken, and they do not tell anyone.
    options:
      - id: a
        label: >-
          Nothing wrong happened. Once you have removed the harm, the suffering and
          the deception, there is nothing left for the wrongness to consist in.
        scores: { consequentialist: 1.0, certainty: 0.4, affect: -0.9 }
      - id: b
        label: >-
          Something wrong happened, and the fact that you cannot name the harm is a
          fact about your vocabulary, not about the act.
        scores: { virtue: 0.9, deontological: 0.4, affect: 1.0, certainty: 0.3 }
      - id: c
        label: >-
          Wrong for a family raised as they were, permissible for a family raised
          elsewhere. Meat taboos are exactly the kind of thing that varies.
        scores: { relativist: 1.0, scope: -0.4, certainty: -0.6 }
      - id: d
        label: >-
          Wrong, because a creature you have lived with for fifteen years is owed a
          burial, and that obligation does not need a victim to be real.
        scores: { deontological: 0.9, care: 0.4, certainty: 0.5 }
  - id: q2
    prompt: >-
      You argue for an hour about a moral question and lose every exchange. Your
      opponent's reasoning is better than yours and you cannot repair your case.
      At the end of the hour you still believe exactly what you believed at the start.
    options:
      - id: a
        label: >-
          Then you are not entitled to the belief any more. An argument you cannot
          answer is a reason to change your mind, and holding out is just stubbornness.
        scores: { consequentialist: 0.7, deontological: 0.4, affect: -1.0, certainty: -0.3 }
      - id: b
        label: >-
          Losing an argument is weak evidence. Clever people can construct a case for
          almost anything, and a conviction that survives is telling you something.
        scores: { virtue: 0.9, affect: 0.9, certainty: 0.4 }
      - id: c
        label: >-
          Nobody has ever changed their mind mid-argument. What actually changes minds
          is the person, over time, and pretending otherwise is theatre.
        scores: { relativist: 0.7, virtue: 0.5, affect: 0.6, certainty: -0.5 }
      - id: d
        label: >-
          Hold the belief but stop asserting it publicly until you can defend it. A
          claim you cannot argue for is not one you may press on other people.
        scores: { deontological: 0.8, contractarian: 0.4, certainty: -0.4 }
  - id: q3
    prompt: >-
      You are on a hiring panel. A candidate's record is spotless and every reference
      is strong, but forty minutes in the room has left you certain he is dishonest.
      You cannot point to anything he said that would justify the impression.
    options:
      - id: a
        label: >-
          Say so and vote against him. Twenty years of reading people is a trained
          instrument, and refusing to use it is not neutrality, it is negligence.
        scores: { virtue: 1.0, affect: 1.0, certainty: 0.3 }
      - id: b
        label: >-
          Vote on the record. An impression you cannot articulate is indistinguishable
          from a prejudice you would be ashamed of, and he cannot answer it.
        scores: { deontological: 0.9, contractarian: 0.6, affect: -0.8 }
      - id: c
        label: >-
          Report the feeling as a feeling, without a vote attached, and let the panel
          weigh it knowing exactly what it is.
        scores: { contractarian: 0.7, virtue: 0.4, affect: 0.3, certainty: -0.5 }
      - id: d
        label: >-
          Vote against him. If he later does what you think he would do, the cost lands
          on colleagues and clients, and your discomfort is not the thing at stake.
        scores: { consequentialist: 0.9, affect: 0.5, scope: 0.4 }
  - id: q4
    prompt: >-
      Suppose Haidt is broadly right and moral reasoning usually arrives after the
      verdict, as its press officer rather than its judge. What should you then do
      differently?
    options:
      - id: a
        label: >-
          Distrust your first reaction on anything that matters and force yourself
          through the argument anyway. Bias you know about is bias you can correct.
        scores: { consequentialist: 0.9, affect: -1.0, certainty: -0.3 }
      - id: b
        label: >-
          Take intuitions more seriously, not less. If they came first, they are the
          data, and the arguments were always the decoration.
        scores: { virtue: 0.9, affect: 1.0, certainty: 0.4 }
      - id: c
        label: >-
          Stop treating disagreement as a failure of logic in the other person. Two
          well-formed moral sensibilities can face each other with nothing to settle it.
        scores: { relativist: 0.9, certainty: -0.8, scope: -0.3 }
      - id: d
        label: >-
          Nothing. How a judgement was produced has no bearing on whether it is correct,
          and the theory is a psychology, not an ethics.
        scores: { deontological: 0.8, certainty: 0.7, affect: -0.4 }
outcomes:
  - id: the-elephant
    dominant: virtue
    label: The Elephant Knows
    text: >-
      You treat moral perception as a skill rather than a bias - something a life of
      attention trains and a good argument cannot easily overturn. That protects you
      from the clever case for a monstrous conclusion, which is a real danger and not
      a hypothetical one. The cost is that the mechanism you are trusting has no way of
      telling you when it is wrong, and every era's cruelties felt exactly this obvious
      to the people committing them.
    base_rate: null
  - id: the-rider
    dominant: consequentialist
    label: The Rider Should Steer
    text: >-
      You hold that a judgement you cannot defend is a judgement you should not act on,
      and that the discomfort of following an argument past your instincts is the price
      of thinking at all. It is the position that has driven most moral reform. Its
      exposure is that reasoning is also how atrocities get authorised: the argument
      that outruns your revulsion is sometimes the argument that should have been stopped
      by it, and you need an account of which is which.
    base_rate: null
  - id: the-rule
    dominant: deontological
    label: The Standard Outside You
    text: >-
      You want the question decided by something that is neither your gut nor your
      calculation - a duty, a right, a rule you could state in advance and be held to.
      This is the answer that keeps a hiring panel honest and keeps power accountable.
      What it owes you is a story about where the rules came from, since on Haidt's
      account the intuitions came first and the rules were built to house them.
    base_rate: null
  - id: the-variation
    dominant: relativist
    label: Different Elephants
    text: >-
      You draw the conclusion that if judgement is intuition-first, and intuitions are
      shaped by upbringing and culture, then moral disagreement often runs deeper than
      argument can reach. You will misread fewer opponents than most people do. The
      price is that you have made it hard to say that anyone is simply wrong, including
      in the cases where you plainly want to.
    base_rate: null
  - id: the-record
    dominant: contractarian
    label: What You Can Put on the Record
    text: >-
      Your test is whether the judgement can be stated to the people it falls on. An
      impression you cannot articulate may still be right, but it cannot be checked, and
      you would rather be bound to what survives being said aloud. This is the discipline
      that makes collective decisions answerable, and Haidt's own account gives it a job:
      the rider may not steer the elephant, but it can be made to explain itself to other
      riders. What it risks is filtering out exactly the perceptions that arrive before
      anyone has the words — which, on this theory, are most of the true ones.
    base_rate: null

---

## What it means

Jonathan Haidt's claim, made in "The emotional dog and its rational tail" in 1993 —
published in *Psychological Review* in 2001 — is that moral judgement usually works
backwards from the way philosophy has assumed. You do not weigh a case and arrive at a
verdict. The verdict arrives, fast and whole, and then reasoning goes to work producing
the justification.

Haidt calls the model *social intuitionist*. **Intuitionist**, because the judgement is
an intuition: a quick flash of approval or disapproval that appears in consciousness
already finished, without any sense of having gone through steps. **Social**, because the
reasoning that follows is aimed outward. It is built to persuade other people, and the
main thing that actually changes a person's moral mind is not their own reflection but
somebody else's intuition arriving through conversation, affection or pressure.

The metaphor he later used, in *The Happiness Hypothesis* and then *The Righteous Mind*,
is a rider on an elephant. The elephant is the automatic, evaluative, emotional system;
the rider is conscious reasoning. The rider looks like the one in charge and can turn the
elephant if it is willing, but mostly the rider is an advocate hired after the fact —
producing arguments for wherever the elephant was already going.

The evidence Haidt leaned on hardest was **moral dumbfounding**. Participants were given
stories carefully stripped of harm: consensual sibling incest with two forms of
contraception, a family eating the family dog after it was killed by a car. Most people
condemned the acts, offered a reason, had the reason taken away, and then condemned them
anyway — saying, in the end, that they could not explain why, but it was wrong. Haidt read
this as the rider running out of material while the elephant stood firm. It is a
descendant of Hume's line in the *Treatise* that reason is, and ought only to be, the
slave of the passions.

## What it suggests

If the model is right, a great deal of moral argument is misconceived. When you construct
a careful case against someone's position, you are addressing the press officer, not the
principal. Persuasion runs instead through relationship, narrative, and the slow work of
making a new intuition available. That is a bleak conclusion for the seminar room and a
useful one for anyone who has ever tried to change a family member's mind at a table.

It also cuts against the reflex of dismissing an unarticulated moral reaction as mere
squeamishness. If the reaction came first and the reasons were assembled later, then the
absence of a good reason is weak evidence that there is nothing there. That thought is
Haidt's, but it can be turned against him: the same argument protects the revulsions we
now think were shameful.

The strongest objection is to the dumbfounding evidence itself. Royzman, Kim and Leeman,
in "The curious tale of Julie and Mark" (2015), re-ran the incest vignette and probed what
participants actually believed. Most of them did not accept the stipulation that no harm
could result — they thought harm was likely despite the story's assurances, and they said
so when asked properly. On that reading, subjects were not condemning without reasons at
all; they were holding a reason the experimenter had declared inadmissible. Royzman and
colleagues take this as evidence *for* a rationalist model rather than against it. Haidt's
broader framework has other support, and the dispute is live rather than closed, but the
specific experiment most often cited as proving that moral judgement is arational does not
carry the weight popular accounts put on it. Anyone repeating the Julie and Mark story as
a settled demonstration is a generation behind the literature.

A second objection is philosophical. Even a complete account of how a judgement was
produced says nothing about whether it is true. Mathematicians also have flashes of
conviction and construct proofs afterwards; nobody concludes that arithmetic is a
rationalisation.

## The problem

You chair the ethics committee of a mid-sized hospital, and the case in front of you is a
research protocol that everyone senior wants approved.

The science is good. The consent forms are exemplary. The statistician is satisfied, the
funding is clean, the patients are volunteers who will be paid fairly and told everything.
Two other committees have passed it. You have read it four times and you cannot find a
single thing in it you could write down as an objection.

You also cannot make yourself sign it. Something about the design sits wrong — the way the
recruitment targets a hospice population, the way the questionnaire's phrasing gets a
dying man to agree to something in a tone of voice. When you try to put it into a sentence
it evaporates, and what comes out sounds like sentiment.

The principal investigator is waiting outside. She has asked, reasonably, that you tell
her what the problem is so she can fix it. You have twenty minutes to decide whether an
objection you cannot state is an objection at all.

## The questions

**1. The family dog.** A family's elderly dog is killed by a car. They butcher it and eat
it for dinner. Nobody sees, nobody is harmed, no law is broken.

- Nothing wrong happened. Remove the harm, the suffering and the deception, and there is
  nothing left for the wrongness to consist in.
- Something wrong happened, and your inability to name the harm is a fact about your
  vocabulary, not about the act.
- Wrong for a family raised as they were, permissible for a family raised elsewhere.
- Wrong, because an animal you have lived with for fifteen years is owed a burial.

**2. Losing the argument.** You are outargued for an hour and believe exactly what you
believed at the start.

- Then you are not entitled to the belief any more.
- Losing an argument is weak evidence; a conviction that survives is telling you something.
- Nobody changes their mind mid-argument. What changes minds is the person, over time.
- Hold it, but stop asserting it publicly until you can defend it.

**3. The hiring panel.** A spotless record, strong references, and forty minutes that have
left you certain the candidate is dishonest, with nothing you can point to.

- Say so and vote against him. Trained instinct is an instrument.
- Vote on the record. An impression you cannot articulate is indistinguishable from a
  prejudice, and he cannot answer it.
- Report the feeling as a feeling, and let the panel weigh it knowing what it is.
- Vote against him; the cost of being wrong lands on other people, not on your comfort.

**4. If he is right.** Suppose reasoning usually arrives after the verdict, as its press
officer. What follows?

- Distrust your first reaction on anything that matters and force the argument anyway.
- Take intuitions more seriously, not less. They were always the data.
- Stop treating disagreement as a logical failure in the other person.
- Nothing. How a judgement was produced has no bearing on whether it is correct.

## Reading your answer

**The Elephant Knows.** You treat moral perception as trained skill rather than noise, and
you are willing to hold a position you cannot fully argue for. That is the right stance
towards the clever case for a monstrous conclusion. The price is that the faculty you are
trusting gives no signal when it misfires, and the cruelties of every previous century felt
exactly this self-evident from inside.

**The Rider Should Steer.** You hold that a judgement you cannot defend is one you should
not act on. Nearly every moral reform in history has needed someone willing to do that. The
exposure is symmetrical: reasoning is also how atrocities get authorised, and you need some
account of when an argument outrunning your revulsion means the revulsion was wrong.

**The Standard Outside You.** You want the decision made by something statable in advance —
a rule, a right, a duty — precisely so that neither your gut nor your arithmetic gets the
final word. This keeps panels honest and power answerable. It owes an account of where the
rules came from, since on Haidt's picture the intuitions came first and built them.

**Different Elephants.** You conclude that moral disagreement often runs below the level
argument can reach. You will misdiagnose fewer opponents than most people do. What it costs
you is the ability to say plainly that someone is wrong, in the cases where you badly want
to say it.

**What You Can Put on the Record.** Your test is whether a judgement can be stated to
the people it falls on. An impression you cannot articulate may still be right, but it
cannot be checked, and you would rather be bound to what survives being said aloud. Haidt's
own account gives this a job: the rider may not steer the elephant, but it can be made to
explain itself to other riders. The risk is that it filters out the perceptions that arrive
before anyone has words for them — which, on this theory, are most of the true ones.

## Sources

- Jonathan Haidt, "The emotional dog and its rational tail: A social intuitionist approach
  to moral judgment", *Psychological Review* 108(4) (2001), 814–834.
- Jonathan Haidt, *The Righteous Mind: Why Good People Are Divided by Politics and
  Religion* (Pantheon, 2012) — the rider-and-elephant metaphor and the moral foundations
  extension.
- Edward B. Royzman, Kwanwook Kim and Robert F. Leeman, "The curious tale of Julie and
  Mark: Unraveling the moral dumbfounding effect", *Judgment and Decision Making* 10(4)
  (2015), 296–313 — the central challenge to the dumbfounding evidence.
- David Hume, *A Treatise of Human Nature* (1739), Book II, Part III — the ancestor of the
  claim.
