---
id: trolley-problem
title: The Trolley Problem
category: thought-experiment
tradition: analytic-ethics
philosophers:
  - Philippa Foot
  - Judith Jarvis Thomson
era: "1967"
tags: [killing, intention, numbers, doing-and-allowing, sacrifice]
sources:
  - author: Philippa Foot
    title: The Problem of Abortion and the Doctrine of the Double Effect
    published: "Oxford Review 5, 5–15"
    year: 1967
  - author: Judith Jarvis Thomson
    title: "Killing, Letting Die, and the Trolley Problem"
    published: "The Monist 59, 204–217"
    year: 1976
  - author: Judith Jarvis Thomson
    title: "The Trolley Problem"
    published: "Yale Law Journal 94, 1395–1415"
    year: 1985
  - author: Edmond Awad, Sohan Dsouza, Azim Shariff, Iyad Rahwan, Jean-François Bonnefon
    title: "Universals and variations in moral decisions made in 42 countries by 70,000 participants"
    published: "Proceedings of the National Academy of Sciences 117(5), 2332–2337"
    year: 2020
questions:
  - id: q1
    prompt: >-
      A runaway tram is heading for five track workers who cannot get clear. You are
      standing at a junction lever. Pull it and the tram takes a side spur, where it
      will kill one worker who would otherwise have been safe. Nobody else can act.
    options:
      - id: a
        label: Pull the lever. Five deaths are worse than one, and that settles it.
        scores: { consequentialist: 1.0, scope: 0.7, agency: 0.6 }
      - id: b
        label: Pull it, but you have killed someone, and that is yours to carry.
        scores: { consequentialist: 0.7, virtue: 0.5, agency: 0.3, certainty: -0.5 }
      - id: c
        label: Do not pull. The five are being killed by the tram; the one would be killed by you.
        scores: { deontological: 1.0, agency: -0.9, certainty: 0.6 }
      - id: d
        label: >-
          Refuse the question. A scenario stripped of everything that makes real
          decisions hard cannot tell you what you would really do.
        scores: { virtue: 0.6, relativist: 0.4, certainty: -0.7, affect: 0.3 }
  - id: q2
    prompt: >-
      Same five workers, no junction. You are on a footbridge above the track beside a
      very large stranger. The only way to stop the tram is to push him onto the line,
      where his body will halt it and he will die. Your own body is not heavy enough.
    options:
      - id: a
        label: Push him. The arithmetic has not changed, so neither has the answer.
        scores: { consequentialist: 1.0, agency: 1.0, scope: 0.6, affect: -0.6 }
      - id: b
        label: >-
          Do not push. Using a man's body as the brake treats him as equipment,
          which is a different act from redirecting a threat.
        scores: { deontological: 1.0, certainty: 0.5, agency: -0.7 }
      - id: c
        label: >-
          Do not push, and admit you cannot fully justify why this differs from
          the lever — but the revulsion is evidence, not squeamishness.
        scores: { virtue: 0.7, deontological: 0.4, affect: 1.0, certainty: -0.4 }
      - id: d
        label: >-
          You could not do it, and you would not have pulled the lever either.
          Killing is not yours to do in either case.
        scores: { deontological: 0.8, divine: 0.3, agency: -1.0, certainty: 0.8 }
  - id: q3
    prompt: >-
      The lever again, but the side spur loops back to the main track. The tram will
      return and still hit the five — unless the one worker's body stops it on the way
      round. Here his being hit is not a side effect. It is the mechanism that saves them.
    options:
      - id: a
        label: >-
          Still pull. If the loop makes a moral difference, the difference is in the
          track layout, and track layout cannot decide who lives.
        scores: { consequentialist: 1.0, agency: 0.8, certainty: -0.3 }
      - id: b
        label: >-
          Now stop. In the first case his death was foreseen; here it is intended,
          and what you aim at is part of what you do.
        scores: { deontological: 1.0, virtue: 0.4, certainty: 0.6, agency: -0.6 }
      - id: c
        label: >-
          The loop shows the whole distinction was never load-bearing. Consistency
          means pulling in all three cases, footbridge included.
        scores: { consequentialist: 1.0, agency: 1.0, affect: -0.8, certainty: 0.4 }
      - id: d
        label: >-
          It should turn on who these people are to you and to each other, which the
          case deliberately hides.
        scores: { care: 1.0, virtue: 0.4, scope: -0.8 }
  - id: q4
    prompt: >-
      A surgeon has five patients who will die tonight without transplants, and one
      healthy person in the waiting room whose organs would save all five. No one
      would ever know. The arithmetic is identical to the lever.
    options:
      - id: a
        label: >-
          Obviously not — and that tells you the arithmetic was never the whole
          argument in any of these cases.
        scores: { deontological: 0.9, virtue: 0.6, certainty: 0.5 }
      - id: b
        label: >-
          Not, but only because a hospital that did this would kill far more people
          than it saved once nobody dared be treated.
        scores: { consequentialist: 1.0, contractarian: 0.6, agency: 0.5 }
      - id: c
        label: >-
          Not, because nobody could agree in advance to a rule that made them
          available as spare parts.
        scores: { contractarian: 1.0, deontological: 0.5, scope: 0.5 }
      - id: d
        label: >-
          If the secrecy really held and the numbers really held, then yes — and the
          horror you feel is training, not insight.
        scores: { consequentialist: 1.0, nihilist: 0.3, affect: -1.0, certainty: 0.5 }
outcomes:
  - id: the-arithmetic
    dominant: consequentialist
    label: The Arithmetic of Lives
    text: >-
      You count. Five is more than one, and you do not think the shape of the track,
      the reach of your arm, or how vividly you can picture the death changes what is
      owed. The price is that you have to keep counting when the counting turns ugly —
      in the surgeon's theatre, and everywhere else the numbers point somewhere you
      would rather not go. Most people who answer as you did stop counting at exactly
      the point where it starts to cost them something.
    base_rate: null
  - id: the-line
    dominant: deontological
    label: The Line You Do Not Cross
    text: >-
      You hold that there are things you may not do to a person even to prevent worse,
      and that what you aim at is part of what you do. This survives the cases that
      break pure counting — the surgeon, the footbridge — and it does so without
      special pleading. What it owes you is an account of the lever: if redirecting a
      threat is genuinely different from using a man, the difference has to be stated,
      not just felt.
    base_rate: null
  - id: the-agent
    dominant: virtue
    label: What It Would Make of You
    text: >-
      Your attention is on the person doing it rather than the act done. You notice
      that someone who could push the large man without difficulty is not someone you
      would trust, and you treat that as evidence rather than sentiment. The objection
      you have to answer is that character is not a decision procedure: when the tram
      is actually coming, "be the sort of person who chooses well" does not yet tell
      you which lever to touch.
    base_rate: null
  - id: the-agreement
    dominant: contractarian
    label: What None of Us Could Refuse
    text: >-
      You reach for what people could agree to in advance, not knowing which body on
      the track would be theirs. It handles the surgeon cleanly and explains why the
      hospital case feels categorically unlike the lever. Its exposure is the case
      where nobody can be asked — the unconscious, the unborn, the not-yet-existing,
      the animal — and agreement has no one to be an agreement between.
    base_rate: null
  - id: the-particular
    dominant: care
    label: The People, Not the Numbers
    text: >-
      You want to know who these six are and what they are to each other, and you take
      the case's refusal to say as the case's failure rather than yours. That instinct
      is right about ordinary life, where nearly every real obligation runs through a
      particular relationship. It is most exposed where you have no relationship at all
      with the person your decision kills — which is most of the decisions a modern
      life makes.
    base_rate: null
---

## What it means

The trolley problem is not one puzzle but a set of cases built to be identical in every
respect their author could control except one, so that whatever your answers do differ on
must be the thing that is doing the moral work.

Philippa Foot introduced the case in 1967, in a paper about abortion and the doctrine of
double effect. Her interest was not in what you should do about trams. She wanted to know
why the doctrine of double effect — which permits a harm foreseen as a side effect of a
good act, but forbids the same harm used as the means to the same good — seems obviously
right in some cases and monstrous in others. The driver who steers toward one man rather
than five looks blameless. The judge who frames and executes an innocent man to stop a
riot that would kill five does not. Same numbers, different verdicts, and the reason is
not the numbers.

Judith Jarvis Thomson gave the problem the form most people now know, and gave it its
name. In papers of 1976 and 1985 she added the bystander at the switch, who is not driving
and has no prior involvement, and then the footbridge, where the only way to stop the tram
is to push a large stranger into its path. Almost everyone will throw the switch. Almost
nobody will push the man. Thomson's question, and the one the literature has been chewing
on for fifty years, is whether that pair of answers can be *defended* or is merely
*reported* — whether there is a principle underneath it, or only a fact about human
squeamishness that we have dressed as a principle.

The loop variant is the screw turning. The spur curves back to the main line, so the tram
would return and kill the five anyway; only the one man's body stops it. Now his death is
not a side effect of the diversion. It is what makes the diversion work. If you would pull
the lever in the original and not push on the footbridge, the loop asks which of those two
this is — and a great deal of very careful philosophy has failed to produce an answer that
everyone finds stable.

## What it suggests

Take the cases seriously and at least one belief you hold has to go.

If you think outcomes are what matter, the surgeon is waiting for you. Five patients die
tonight; one healthy visitor could save them all; the arithmetic is exactly the lever's. If
you refuse — and essentially everyone refuses — you are conceding that something other than
the count is operating. The usual repair is to appeal to consequences at one remove: a
hospital known to harvest its visitors would empty, and more would die. That repair works,
but notice its shape. It says the surgeon is wrong *because of what it would cost*, which
means that in a world where the secret genuinely held, the surgeon would be right. Some
consequentialists accept that. It is worth knowing whether you are one of them.

If you think there are acts you may not perform whatever the benefit, the lever is waiting
for you. You are letting five people die to keep your own hands clean, and "I did not kill
them, the tram did" is a claim you have to defend rather than assert — Foot's whole point
was that the doing/allowing line is doing enormous moral work and has never been given a
foundation everyone accepts.

And if your reply is that these cases are absurd — that real moral life has no runaway
trams, perfect information, or guaranteed outcomes — you are in good company, and you are
also not off the hook. Bernard Williams's objection was not that the cases are unrealistic
but that they are *rigged*: by stipulating away everything except the count, they quietly
assume the answer they then claim to discover. But the structure the cases isolate is not
rare. Triage, sanctions, drug pricing, autonomous vehicles, and the allocation of any
scarce thing that keeps people alive are all versions of it, with worse information and
real people. The tram is a laboratory, and the objection to laboratories is never that
they are clean.

## The problem

You dispatch trains, and tonight the board tells you a freight has lost its brakes on the
long grade into the yard.

Five of your people are on the main line at the bottom, replacing sleepers. The radio in
their van is out — you can see the van, you cannot reach it. There is one set of points
between the freight and them, and you have the switch.

The spur takes the freight into the old siding. There is a man in the siding. You know his
name; he is doing a routine inspection you signed off this morning, and he is exactly where
your paperwork says he should be. He has no radio either.

The freight will be at the points in ninety seconds. Nobody else knows. Whatever happens
will be your doing, and the report will be written by you.

Nothing about the arithmetic is in doubt. One is fewer than five. What is in doubt is
whether the arithmetic is the question — and whether the man in the siding, who is where
he is because you put him there, is owed something that the five, who are simply in the
path of a thing that is already coming, are not.

## The questions

**1. The lever.** A runaway tram is heading for five track workers who cannot get clear.
Pull the junction lever and it takes a side spur, killing one worker who would otherwise
have been safe.

- Pull the lever. Five deaths are worse than one, and that settles it.
- Pull it, but you have killed someone, and that is yours to carry.
- Do not pull. The five are being killed by the tram; the one would be killed by you.
- Refuse the question. A scenario stripped of everything that makes real decisions hard
  cannot tell you what you would really do.

**2. The footbridge.** No junction this time. The only way to stop the tram is to push a
large stranger from the bridge onto the line. Your own body is not heavy enough.

- Push him. The arithmetic has not changed, so neither has the answer.
- Do not push. Using a man's body as the brake treats him as equipment, which is a
  different act from redirecting a threat.
- Do not push, and admit you cannot fully justify why this differs from the lever — but
  the revulsion is evidence, not squeamishness.
- You could not do it, and you would not have pulled the lever either. Killing is not
  yours to do in either case.

**3. The loop.** The spur curves back to the main track. The tram returns and still hits
the five — unless the one man's body stops it on the way round. His being hit is now the
mechanism, not a side effect.

- Still pull. If the loop makes a moral difference, the difference is in the track layout,
  and track layout cannot decide who lives.
- Now stop. In the first case his death was foreseen; here it is intended, and what you
  aim at is part of what you do.
- The loop shows the distinction was never load-bearing. Consistency means pulling in all
  three cases, footbridge included.
- It should turn on who these people are to you and to each other, which the case
  deliberately hides.

**4. The surgeon.** Five patients will die tonight without transplants. One healthy person
in the waiting room could save all five. Nobody would ever know.

- Obviously not — and that tells you the arithmetic was never the whole argument in any of
  these cases.
- Not, but only because a hospital that did this would kill far more people than it saved
  once nobody dared be treated.
- Not, because nobody could agree in advance to a rule that made them available as spare
  parts.
- If the secrecy really held and the numbers really held, then yes — and the horror you
  feel is training, not insight.

## Reading your answer

**The Arithmetic of Lives.** You count, and you do not think the shape of the track or the
reach of your arm changes what is owed. The price is that you have to keep counting when
the counting turns ugly. Watch where you stopped: most people who answer as you did hold
the line at the surgeon, and the interesting question is what principle they used to stop
there, since it was not arithmetic.

**The Line You Do Not Cross.** You hold that some things may not be done to a person even
to prevent worse, and that what you aim at is part of what you do. This survives the cases
that break pure counting, and without special pleading. What it owes you is an account of
the lever — if redirecting a threat really differs from using a man, say how.

**What It Would Make of You.** Your attention is on the agent rather than the act. You
treat the fact that a person could push the stranger easily as evidence about them, not
sentiment about you. The objection to answer is that character is not a decision
procedure: when the tram is coming, it does not yet tell you which lever to touch.

**What None of Us Could Refuse.** You ask what people could agree to before knowing whose
body would be on the track. This handles the surgeon cleanly. Its exposure is everyone who
cannot be asked — the unconscious, the unborn, the not-yet-existing, the animal.

**The People, Not the Numbers.** You want to know who these six are to each other, and you
treat the case's silence as the case's failure. You are right about ordinary life, where
almost every real obligation runs through a particular relationship. You are most exposed
where you have no relationship at all with the person your decision kills — which is most
decisions a modern life makes.

None of the five is the correct answer. The test measures which one you actually hold when
the case is built so that you cannot hold all of them.

## Sources

- Philippa Foot, "The Problem of Abortion and the Doctrine of the Double Effect", *Oxford
  Review* 5 (1967), 5–15. Reprinted in *Virtues and Vices and Other Essays in Moral
  Philosophy* (1978).
- Judith Jarvis Thomson, "Killing, Letting Die, and the Trolley Problem", *The Monist* 59
  (1976), 204–217.
- Judith Jarvis Thomson, "The Trolley Problem", *Yale Law Journal* 94 (1985), 1395–1415.
- Edmond Awad, Sohan Dsouza, Azim Shariff, Iyad Rahwan and Jean-François Bonnefon,
  "Universals and variations in moral decisions made in 42 countries by 70,000
  participants", *PNAS* 117(5) (2020), 2332–2337. The largest cross-cultural dataset on
  these cases; consult it directly for response rates, which are not reproduced here.
- Bernard Williams, "A Critique of Utilitarianism", in J.J.C. Smart and Bernard Williams,
  *Utilitarianism: For and Against* (1973) — the integrity objection to reasoning of this
  kind.
