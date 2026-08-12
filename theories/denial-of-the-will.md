---
id: denial-of-the-will
title: Denial of the Will
category: theory
tradition: pessimism
philosophers:
  - Arthur Schopenhauer
era: "1818"
tags: [asceticism, suffering, desire, resignation, renunciation]
sources:
  - author: Arthur Schopenhauer
    title: The World as Will and Representation, Volume I, Book IV
    published: Leipzig, F. A. Brockhaus
    year: 1818
  - author: Arthur Schopenhauer
    title: "Parerga and Paralipomena, Volume II"
    published: Berlin, A. W. Hayn
    year: 1851
  - author: Friedrich Nietzsche
    title: On the Genealogy of Morality, Third Essay
    published: Leipzig, C. G. Naumann
    year: 1887
  - author: Bryan Magee
    title: The Philosophy of Schopenhauer
    published: Oxford University Press
    year: 1983
questions:
  - id: q1
    prompt: >-
      You have wanted a particular job for six years. You get it. Within four
      months the wanting has moved somewhere else and the job is simply your life
      now, neither better nor worse than the last one felt at the time.
    options:
      - id: a
        label: >-
          That is the structure, not your bad luck. Satisfaction is only the brief
          absence of a lack, and the lack always reforms somewhere else.
        scores: { virtue: 0.8, nihilist: 0.4, certainty: 0.5 }
      - id: b
        label: >-
          It means you chose badly. Some wants are worth having and the work is to
          find them, not to conclude that wanting itself is a trap.
        scores: { consequentialist: 0.8, egoist: 0.5, certainty: -0.4 }
      - id: c
        label: >-
          The wanting is the point and the arriving never was. A life of
          successive projects is not a failed life, it is what a life is.
        scores: { existentialist: 0.9, egoist: 0.3, affect: 0.3 }
      - id: d
        label: >-
          What is missing is not a better object of desire but an orientation that
          does not run through desire at all.
        scores: { divine: 0.9, virtue: 0.4, certainty: 0.4 }
  - id: q2
    prompt: >-
      A man you know gives away most of what he owns, refuses promotion, eats
      plainly, keeps no attachments he could be hurt through, and is by every
      account serene. He is forty-one and has made himself, deliberately, very
      small.
    options:
      - id: a
        label: >-
          He has understood something. Wanting less is not deprivation, it is the
          only reliable route out of a machine designed to keep you hungry.
        scores: { virtue: 1.0, divine: 0.4, certainty: 0.5 }
      - id: b
        label: >-
          He has confused peace with absence. A life arranged so that nothing can
          wound you is a life arranged so that nothing can reach you.
        scores: { existentialist: 0.9, care: 0.4, affect: 0.5 }
      - id: c
        label: >-
          Judge it by what it produced. He is calm and harms no one, and no
          accounting of the world's suffering is worse for his choices.
        scores: { consequentialist: 0.9, scope: 0.5 }
      - id: d
        label: >-
          He is exempting himself. Serenity bought by refusing every obligation
          that could cost you is a private good taken at other people's expense.
        scores: { deontological: 0.8, care: 0.5, scope: 0.6 }
  - id: q3
    prompt: >-
      Your closest friend is at the end of a long illness and tells you, lucidly,
      that she has stopped wanting anything, including recovery, and that this is
      the first peace she has had in two years. She asks you not to argue.
    options:
      - id: a
        label: >-
          Do not argue. What she has reached is not defeat and it is not yours to
          talk her out of because it frightens you.
        scores: { virtue: 0.9, care: 0.6, authority: 0.4 }
      - id: b
        label: >-
          Argue anyway. Wanting nothing is a symptom before it is a philosophy,
          and a friend who says nothing here is protecting their own comfort.
        scores: { care: 1.0, consequentialist: 0.4, affect: 0.6 }
      - id: c
        label: >-
          Say nothing, but privately hold that resignation is a failure of nerve
          dressed as wisdom. Sit with her and disagree in silence.
        scores: { existentialist: 0.8, care: 0.4, certainty: -0.5 }
      - id: d
        label: >-
          Take it as the real thing. She has arrived where the mystics arrive, and
          you are being shown something rather than losing someone.
        scores: { divine: 1.0, virtue: 0.3, affect: 0.6 }
outcomes:
  - id: the-turning
    dominant: virtue
    label: The Will Turns on Itself
    text: >-
      You take seriously the idea that the ordinary machinery of wanting produces
      the suffering it promises to end, and that the way out is not a better object
      but a changed relation to wanting as such. This is Schopenhauer's own
      conclusion and it has the merit of explaining, rather than scolding, the
      restlessness people actually report. What it owes you is a reason why the
      quieted life is better rather than merely calmer, since a person who has
      stopped wanting has also stopped being available for most of what other
      people need from them.
    base_rate: null
  - id: the-transcendent
    dominant: divine
    label: Toward the Other Order
    text: >-
      You read renunciation as contact with something rather than subtraction of
      everything, which puts you close to the traditions Schopenhauer borrowed from
      and further from Schopenhauer himself, who wanted the saint without the God.
      It gives resignation a content that mere quietism lacks. Its exposure is that
      the claim cannot be checked from outside, so the difference between the
      mystic and the person who has simply given up is not one you can show anyone
      who does not already see it.
    base_rate: null
  - id: the-refusal
    dominant: existentialist
    label: The Refusal to Be Quieted
    text: >-
      You hold that the striving is not a disease to be cured, and that a life
      built to be unwoundable has purchased its calm by making itself unreachable.
      That is the strongest thing said against Schopenhauer, and Nietzsche said it.
      The cost is that you have no answer to the person for whom wanting has become
      simple torment, and telling them their restlessness is the meaning is not
      obviously kinder than telling them it can end.
    base_rate: null
  - id: by-what-it-does
    dominant: consequentialist
    label: Measured by What It Leaves
    text: >-
      You decline to grade a life by its interior weather and ask instead what it
      adds or removes from the world. That is a discipline, and it keeps you from
      mistaking a mood for an achievement. The difficulty is that the ascetic is
      hard to score. He produces little and destroys nothing, and a standard that
      cannot separate him from a stone is not yet measuring what you meant.
    base_rate: null
  - id: the-obligations-left
    dominant: deontological
    label: What You Cannot Resign From
    text: >-
      You notice that renunciation is frequently exit, and that the obligations a
      person owes do not dissolve because they have stopped wanting things. This
      catches the real abuse, the serenity funded by other people's continued
      labour. What it has to face is the case where the duties themselves are the
      machine, and a life of unbroken obligation is exactly the treadmill
      Schopenhauer was describing.
    base_rate: null
  - id: the-better-wants
    dominant: egoist
    label: The Wants Were Wrong, Not Wanting
    text: >-
      You read the diagnosis as a mistake about objects rather than about desire itself.
      Some wants leave you emptier on arrival and some do not, and the work is telling
      them apart rather than concluding that wanting is the disease. This is the reply
      Schopenhauer least expected and the one most people actually live by. What you have
      to face is his evidence: the structure he describes is that satisfaction is
      followed by a new lack, and pointing at better objects does not obviously break it.
    base_rate: null
  - id: the-friend-in-the-room
    dominant: care
    label: What You Owe the Person in Front of You
    text: >-
      Your response to the doctrine is not an argument but an attachment: whatever is true
      about the will in general, there is someone here, and withdrawal has a cost that
      lands on other people. You are pointing at the strongest practical objection to any
      ethics of renunciation — that serenity purchased by refusing every obligation which
      could cost you is a private good bought with other people's money. The risk is the
      mirror image: that you will talk someone out of a peace they have genuinely reached
      because their calm frightens you.
    base_rate: null

---

## What it means

Schopenhauer's system ends where most systems begin. *The World as Will and
Representation*, published in 1818, argues that behind everything that appears
there is a single blind, purposeless striving he calls the will. It is not a mind
and it wants nothing in particular; it simply wills, endlessly, and every living
thing is a local knot of it.

The consequence is that suffering is structural rather than accidental. To will is
to lack. Satisfaction is only the brief cessation of a lack, and it is followed
either by a new lack or by boredom, which Schopenhauer takes to be the will running
with nothing to grip. Pleasure is thus negative — the removal of a pain — while
pain is the positive, felt thing. "Life swings like a pendulum backwards and
forwards between pain and boredom" is his summary, and he means it as description,
not as complaint.

Book IV asks whether anything can be done. Two things can. The first is aesthetic
contemplation, in which you look at something without wanting it and are, for the
duration, a will-less subject of knowledge — an interval rather than an escape. The
second is the one he cares about: *Verneinung des Willens zum Leben*, the denial of
the will to life. Someone who sees through the principle of individuation — who
grasps that the suffering in others is not different in kind from their own —
undergoes what Schopenhauer calls a turning of the will against itself. They stop
affirming. This shows up as voluntary poverty, chastity, fasting, and finally a
serenity that is not resignation exactly, because nothing is being endured.

He is explicit that this cannot be willed into being, which is the paradox at the
centre of the doctrine. You cannot decide to stop willing, since the deciding would
be an act of will. The turning happens to a person, usually through great suffering
or through knowledge that has become vivid enough to work like suffering. He points
to the Christian mystics, to Indian asceticism, and to the *Upanishads*, and he is
careful never to promise a heaven at the end of it. What lies past the denial of the
will is, in his last words of Volume I, nothing.

## What it suggests

Take it seriously and the whole apparatus of self-improvement is inverted. The
standard advice — identify what you want, pursue it efficiently — is on this view a
prescription for the disease. Every fulfilled want reveals the next one, and the
person who has attained everything discovers boredom, which Schopenhauer thought was
the reason the rich invent suffering for themselves.

It also reframes compassion. If the boundary between persons is appearance, then
your suffering and mine are the same phenomenon wearing two masks, and there is
nothing paradoxical about caring for a stranger. Schopenhauer's ethics and his
asceticism are the same insight at different temperatures.

The objection with the most force is Nietzsche's, who read Schopenhauer closely as
a young man and spent the rest of his life answering him. In the Third Essay of *On
the Genealogy of Morality* he asks what ascetic ideals *mean* — what a form of life
gets out of turning against itself — and answers that the ascetic is not escaping
the will but exercising it in the only direction still available. Renunciation is
not the absence of will to power but a will to power that has turned inward for want
of an outlet. On Nietzsche's account the ascetic wins by making weakness into merit.

There is a plainer objection too. A life arranged so that nothing can wound you is
a life arranged so that nothing can reach you, and most of what people value —
children, work, love, obligation — is exposure. Schopenhauer, who lived comfortably
on inherited money and did not himself renounce much, is vulnerable to the charge
that he admired from a distance a condition he had no intention of entering.

## The problem

Anneke is fifty-three and has spent thirty years as a partner in a practice she
built.

Eight months ago her daughter died. In the aftermath she stopped, in a way that
does not look like grief to the people around her. She sold the flat and moved into
two rooms. She resigned the partnership and refused the payout, which the firm has
placed in an account she does not touch. She reads, walks, and works two mornings a
week at a shelter where nobody knows what she used to be. She is not depressed by
any test her doctor can apply. She sleeps well. Asked what she wants, she says,
without any performance, that she has stopped finding the question interesting.

Her son thinks this is illness with good manners and wants her assessed. Her sister
thinks it is the most honest thing Anneke has ever done and that the family's
distress is about the family. The shelter's director, who has known many people
arrive at something similar, thinks it is neither — that Anneke has withdrawn from a
game she was winning and that the withdrawal is a real judgement about the game.

She is entirely competent and asks nothing of anyone. The question is whether there
is anything here to intervene in, and, if not, whether you would say she has lost
something or found it.

## The questions

**1. The job you wanted for six years.** You get it. Four months later the wanting
has moved elsewhere.

- That is the structure, not your bad luck. Satisfaction is the brief absence of a
  lack.
- It means you chose badly; some wants are worth having.
- The wanting was the point and the arriving never was.
- What is missing is an orientation that does not run through desire at all.

**2. The man who made himself small.** He gives away what he owns, refuses
promotion, keeps no attachments that could hurt him, and is serene.

- He has understood something; wanting less is the only reliable exit.
- He has confused peace with absence.
- Judge it by what it produced — he is calm and harms no one.
- He is exempting himself, and serenity bought by refusing obligations is taken at
  others' expense.

**3. The friend at the end.** She has stopped wanting anything, including recovery,
and says it is the first peace she has had. She asks you not to argue.

- Do not argue. It is not yours to talk her out of because it frightens you.
- Argue anyway. Wanting nothing is a symptom before it is a philosophy.
- Say nothing, and privately hold that resignation is a failure of nerve.
- Take it as the real thing; she has arrived where the mystics arrive.

## Reading your answer

**The Will Turns on Itself.** You accept the diagnosis: the wanting is the engine of
the trouble, and no rearrangement of its objects will help. That has the honesty of
explaining restlessness instead of blaming it. What you owe is an account of why the
quieted life is better and not merely quieter, because someone who has stopped
wanting has also stopped being usable by anyone who needs them.

**Toward the Other Order.** You read the renunciation as contact rather than
subtraction, which gives it a content mere withdrawal does not have. It also puts
you past where Schopenhauer would go, since he wanted the saint without the God.
The exposure is that from outside, the mystic and the person who has given up look
identical, and you have no test that separates them.

**The Refusal to Be Quieted.** You hold that striving is not a disease and that a
life proofed against wounding has bought its calm with unreachability. This is
Nietzsche's objection and it is the strongest one. Its price is that you have
nothing to offer the person for whom wanting has become simple torment, and telling
them their restlessness is the meaning may not be the kindness it feels like.

**Measured by What It Leaves.** You refuse to grade a life by its interior weather
and ask what it added or removed. That keeps you from mistaking a mood for an
achievement. The trouble is scoring the ascetic at all: he produces little and
destroys nothing, and a measure that cannot tell him from a stone is not yet
measuring what you meant.

**What You Cannot Resign From.** You notice that renunciation is often exit, and
that obligations do not lapse because a person has stopped wanting things. That
catches the real abuse. What it must face is the case where the obligations are
themselves the treadmill, and a life of unbroken duty is exactly what Schopenhauer
was pointing at.

**The Wants Were Wrong, Not Wanting.** You read the diagnosis as a mistake about
objects rather than about desire itself: some wants leave you emptier on arrival and some
do not, and the work is telling them apart. It is the reply Schopenhauer least expected and
the one most people actually live by. What you must face is his evidence — the structure he
describes is that satisfaction is followed by a fresh lack, and pointing at better objects
does not obviously break it.

**What You Owe the Person in Front of You.** Your response is not an argument but an
attachment: whatever is true of the will in general, there is someone here, and withdrawal
has a cost that lands on other people. That is the strongest practical objection to any
ethics of renunciation — serenity bought by refusing every obligation that could cost you
is a private good paid for with other people's money. The risk is its mirror image: talking
someone out of a peace they have genuinely reached because their calm unsettles you.

## Sources

- Arthur Schopenhauer, *The World as Will and Representation*, Volume I (1818),
  Book IV, §§ 54–71, on affirmation and denial of the will to life.
- Arthur Schopenhauer, *Parerga and Paralipomena*, Volume II (1851), especially the
  essays on the suffering of the world and on suicide.
- Friedrich Nietzsche, *On the Genealogy of Morality* (1887), Third Essay, "What do
  ascetic ideals mean?" — the central counter-argument.
- Bryan Magee, *The Philosophy of Schopenhauer* (Oxford University Press, 1983), for
  the structure of the system and its reception.
