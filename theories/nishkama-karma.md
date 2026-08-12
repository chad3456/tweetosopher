---
id: nishkama-karma
title: Nishkama Karma
category: principle
tradition: hinduism
philosophers:
  - Krishna
  - Vyasa
era: "c. 200 BCE"
tags: [duty, detachment, action, dharma, motive]
sources:
  - author: Vyasa (attributed)
    title: The Bhagavad Gita
    published: "Book VI of the Mahabharata; see esp. chapters 2–3"
    year: -200
  - author: Franklin Edgerton (translator)
    title: The Bhagavad Gita
    published: "Harvard Oriental Series, Harvard University Press"
    year: 1944
  - author: Mohandas K. Gandhi
    title: The Bhagavad Gita According to Gandhi (Anasakti Yoga)
    published: Navajivan Publishing House
    year: 1946
  - author: Bimal Krishna Matilal (editor)
    title: "Moral Dilemmas in the Mahābhārata"
    published: Indian Institute of Advanced Study, Shimla
    year: 1989
  - author: Amartya Sen
    title: The Argumentative Indian
    published: "Allen Lane; see the essay on Arjuna's doubts"
    year: 2005
questions:
  - id: q1
    prompt: >-
      Arjuna, a warrior prince, sees his teachers and cousins in the army opposite
      and lays down his bow. Krishna tells him that the action belongs to his station
      and its fruits do not belong to him at all, and that he should fight.
    options:
      - id: a
        label: >-
          Fight. The work of your station is yours whether or not you like where
          it leads, and outcomes were never in your gift.
        scores: { deontological: 0.9, divine: 0.4, authority: -0.6, certainty: 0.5 }
      - id: b
        label: >-
          Fight only if the war's cause is genuinely just. It is the outcome that
          would justify it, not the station.
        scores: { consequentialist: 0.9, authority: 0.5, scope: 0.4 }
      - id: c
        label: >-
          Refuse. Killing kin is wrong whatever the station, and a role that
          assigns it is exactly the kind of role to distrust.
        scores: { deontological: 0.7, care: 0.4, authority: 1.0 }
      - id: d
        label: >-
          The question is what fighting would make of him — whether a man can do
          this and remain someone he could live with.
        scores: { virtue: 0.9, affect: 0.4, certainty: -0.4 }
  - id: q2
    prompt: >-
      You run a small clinic on a shrinking grant. An older colleague tells you to
      do the work in front of you as well as it can be done and stop measuring
      whether it is winning, because the measuring is eating you.
    options:
      - id: a
        label: >-
          Take the advice. Attachment to results distorts the work, and the results
          were never under your control in the first place.
        scores: { virtue: 0.9, deontological: 0.4, certainty: 0.4 }
      - id: b
        label: >-
          Refuse it. Stop tracking results and you will do useless work for years
          in perfect peace. The fruit is the only test there is.
        scores: { consequentialist: 1.0, scope: 0.5, affect: -0.4 }
      - id: c
        label: >-
          Take it in the stronger sense: the work is an offering, and what is
          offered was never yours to own the return on.
        scores: { divine: 1.0, deontological: 0.3 }
      - id: d
        label: >-
          Be careful. Detachment can be a technique for staying comfortable while
          things go badly for people who cannot detach.
        scores: { consequentialist: 0.5, care: 0.8, affect: 0.5 }
  - id: q3
    prompt: >-
      A bailiff serves an eviction order on a family. He does it calmly, without
      malice, wanting nothing from it, taking no satisfaction in it — exactly the
      inner state the teaching commends.
    options:
      - id: a
        label: >-
          His state matters. Doing a hard thing without cruelty or appetite is a
          different act from doing it in anger, even where the effect matches.
        scores: { virtue: 0.9, affect: 0.4 }
      - id: b
        label: >-
          The family's night in the rain is identical either way. Serenity in the
          agent is not a property of the act.
        scores: { consequentialist: 1.0, agency: 0.6, affect: -0.4 }
      - id: c
        label: >-
          Equanimity is not the test. The test is whether this duty was truly his,
          and he never asked.
        scores: { deontological: 0.9, divine: 0.3, authority: 0.3 }
      - id: d
        label: >-
          Nothing here turns on his calm. What he owes is owed to the people on
          the doorstep, and his composure is not payment.
        scores: { care: 1.0, scope: -0.4 }
  - id: q4
    prompt: >-
      Gandhi read the battlefield as an allegory for the war inside a person and
      took the Gita to teach non-violence. Others read the text as it stands, in
      which Krishna tells a soldier to fight a real war.
    options:
      - id: a
        label: >-
          The allegory is the honest reading. A text about the discipline of the
          self is not an instruction to kill anyone.
        scores: { virtue: 0.8, divine: 0.4, relativist: 0.3 }
      - id: b
        label: >-
          Read it as it stands. The teaching is precisely that duty can require
          what you cannot bear, and softening it empties it.
        scores: { deontological: 1.0, certainty: 0.6, affect: -0.4 }
      - id: c
        label: >-
          Scripture means what the tradition receiving it has taken it to mean.
          That is what makes it scripture rather than literature.
        scores: { divine: 0.6, relativist: 0.4, authority: -0.5, certainty: -0.3 }
      - id: d
        label: >-
          What settles it is fruit: the reading that produced independence without
          a massacre earned its place.
        scores: { consequentialist: 0.9, scope: 0.5 }
outcomes:
  - id: the-work-that-is-yours
    dominant: deontological
    label: The Work That Is Yours
    text: >-
      You hold that a person is given a place, and the actions belonging to that place
      are owed whether or not they pay. This frees you from the paralysis of calculating
      everything, and it explains why you keep going when the ledger says stop. The bill
      comes due when the station itself is corrupt: a doctrine that tells the soldier to
      soldier and the bailiff to evict has no built-in way of telling either of them that
      today the order should be refused.
    base_rate: null
  - id: the-fruit-is-the-test
    dominant: consequentialist
    label: The Fruit Is the Test
    text: >-
      You will not let go of results, because results are where the suffering actually
      happens. Detachment strikes you as a way of feeling fine about failing people. The
      cost is that outcomes are mostly not in your control, and a life spent auditing
      yourself against effects you cannot determine is a reliable way to burn out and
      quit — which the person you were serving pays for too.
    base_rate: null
  - id: the-state-of-the-actor
    dominant: virtue
    label: The State of the Actor
    text: >-
      You take the inner condition of the person acting to be part of the act — that doing
      a hard thing without appetite for it is genuinely different from doing it in anger.
      That is a real distinction, and most ethical traditions that ignore it end up unable
      to say why a cruel rescuer is worse than a kind one. Its exposure is the bailiff: a
      perfectly composed agent can carry out something monstrous, and your account has to
      explain why the composure does not help.
    base_rate: null
  - id: the-offering
    dominant: divine
    label: The Offering
    text: >-
      You resolve the puzzle by relocating ownership: the act is dedicated, so the fruit
      was never yours to hold. That is the Gita's own answer and it is coherent — it is
      what lets non-attachment be something other than indifference. It also means the
      whole structure rests on there being something to dedicate the act to, and it gives
      you no independent way to test the dedication when what is being asked of you is
      terrible.
    base_rate: null
  - id: arjunas-grief
    dominant: care
    label: Arjuna's Grief
    text: >-
      You side with Arjuna before Krishna answers him — with the man who looked across
      the field and saw particular people he loved. You read his collapse as perception
      rather than weakness. What you owe in return is an account of scale: the claims of
      those you can see will not, by themselves, tell you what to do about the family you
      will never meet whose situation your decision changes.
    base_rate: null
---

## What it means

*Nishkama karma* means action without desire — more precisely, action performed without
attachment to its fruits (*phala*). It is the central practical teaching of the Bhagavad
Gita, the seven-hundred-verse dialogue set inside the epic Mahabharata and traditionally
ascribed to Vyasa. The Gita's most quoted line puts it flatly: you have a claim on the
action alone, never on its fruits.

The setting is not a monastery. Arjuna, a prince of the Pandava line, stands between two
armies about to destroy each other, sees his cousins, his childhood teacher and his
grandfather in the ranks opposite, and refuses to fight. He is not a coward; he is
undone. His charioteer Krishna answers him across eighteen chapters, and the answer is
not "the war is worth it". It is that Arjuna has confused two things: the doing, which is
his, and the results, which are not.

Three ideas hold that answer together. *Dharma* is the pattern of obligation attaching to
your place in the world — a soldier's is not a priest's, a parent's is not a stranger's.
*Karma yoga* is the discipline of acting within that pattern as a spiritual practice
rather than a transaction. And *nishkama* — desireless — names the specific renunciation
involved: not renouncing action, which the Gita explicitly rejects as impossible, but
renouncing the claim on what the action produces. Krishna's contrast is with two failures:
the man who does nothing because nothing seems worth it, and the man who does everything
in order to get something.

Gandhi, who translated the Gita and called his commentary *Anasakti Yoga* — the yoga of
non-attachment — read the battlefield as an allegory for the struggle inside a person and
took the text to teach non-violence. Readers who take the war literally point out that
Krishna's advice is, in the story, advice to fight. Both readings are old and neither is
obviously perverse; how you take the frame changes what the doctrine asks of you.

## What it suggests

If you take it seriously, the thing you are accountable for shrinks and hardens. You are
accountable for the quality and rightness of what you did. You are not accountable for
whether the world cooperated. That is not a licence for indifference — the Gita insists
the work be done *well*, and a surgeon who did not care about the patient would not be
practising non-attachment but incompetence. It is a claim about where the self attaches:
to the doing, not to the winning.

The practical payoff is large. Anyone doing work whose results arrive late, arrive
partially, or never arrive at all — teachers, public defenders, climate scientists,
parents — knows the specific corrosion of measuring yourself against outcomes you cannot
control. Nishkama karma is a technology for continuing.

Two objections are serious. The first is quietist: if the fruit is not yours, what stops
the doctrine from becoming a counsel to accept whatever the world hands you and any place
in it? Critics of the Gita's role in caste ideology press exactly here, since *dharma* is
station-relative, and a doctrine of doing your station's work faithfully will read
differently to the person whose station was chosen for them. Amartya Sen has argued the
Gita itself preserves the tension rather than settling it: Arjuna's objection — that the
war will destroy families and leave a wasteland — is never actually refuted, only
overridden.

The second objection is that consequences are exactly what morality is about. If a policy
kills people, the calm of the official who signed it is not a mitigation, and a framework
that treats the agent's inner state as the locus of value has quietly moved the subject
from the world to the self. That the bailiff felt nothing is, on this view, not better. It
may be worse.

## The problem

Anjali runs the district hospital's outreach programme. Three years ago she was given
twelve villages and a budget that covers seven.

She chose the four furthest ones — the settlements up the river road that nobody else
would reach — plus three near town. Her predecessor had chosen differently: seven villages
on the bus route, where a nurse could see four times as many people in a day. The numbers
in his last report were better than any number Anjali has produced since.

Her superintendent has the numbers in front of him now. He is not cruel about it. He says
the river villages are a rounding error in the district's mortality figures, that she is
spending eleven hours of travel to deliver what a bus stop delivers in one, and that if
she reallocated tomorrow she would immunise more children this year than she has in three.
He is right about the arithmetic. She has checked it herself.

What she cannot say to him, and has stopped trying to, is that the river villages are hers
in a way the arithmetic does not register — that she took them on knowing they would never
produce a good report, that the woman in the last settlement has been waiting since March,
and that a service which only goes where the return is high is not a public health service
but a scoreboard.

The reallocation form is on her desk. Signing it produces more immunised children. Not
signing it means doing work she has now been told, correctly, does not pay.

## The questions

**1. Arjuna's refusal.** He sees his teachers and cousins in the army opposite and lays
down his bow. Krishna tells him the action belongs to his station and the fruits do not
belong to him at all.

- Fight. The work of your station is yours whether or not you like where it leads.
- Fight only if the cause is genuinely just. The outcome does the justifying, not the
  station.
- Refuse. Killing kin is wrong whatever the station, and a role that assigns it is the
  kind of role to distrust.
- The question is what fighting would make of him.

**2. The clinic.** A colleague tells you to do the work in front of you as well as it can
be done and stop measuring whether it is winning.

- Take the advice. Attachment to results distorts the work and the results were never
  under your control.
- Refuse it. Stop tracking results and you will do useless work for years in perfect
  peace.
- Take it in the stronger sense: the work is an offering, and the return was never yours.
- Be careful. Detachment can be a way of staying comfortable while things go badly for
  people who cannot detach.

**3. The bailiff.** He serves the eviction calmly, without malice, wanting nothing from it
— exactly the inner state the teaching commends.

- His state matters. Doing a hard thing without appetite is a different act from doing it
  in anger.
- The family's night in the rain is identical either way.
- Equanimity is not the test; whether the duty was truly his is, and he never asked.
- Nothing turns on his calm. What he owes is owed to the people on the doorstep.

**4. Gandhi's reading.** He took the battlefield as allegory and the Gita as a text on
non-violence. Others read the war as a war.

- The allegory is the honest reading.
- Read it as it stands. The teaching is that duty can require what you cannot bear.
- Scripture means what the tradition receiving it has taken it to mean.
- The reading that produced independence without a massacre earned its place.

## Reading your answer

**The Work That Is Yours.** You believe a person is given a place and owes the actions
belonging to it. This is what keeps you working past the point where the ledger says stop,
and it is not nothing. The cost is that the doctrine has no internal alarm: it tells the
bailiff to evict and the soldier to soldier, and you will need some other resource
entirely to know when the order should be refused.

**The Fruit Is the Test.** You will not release outcomes, because outcomes are where the
suffering is. Detachment reads to you as permission to fail people gracefully. Notice what
this costs: you have tied your sense of having done right to things largely outside your
control, and the standard failure mode is not corruption but exhaustion and exit.

**The State of the Actor.** You count the condition of the person acting as part of the
act. Traditions that ignore this cannot explain why a cruel rescuer is worse than a kind
one, so you are tracking something real. Your exposure is the composed bailiff: serenity
is compatible with atrocity, and you owe an account of why it does not help him.

**The Offering.** You cut the knot by relocating ownership — the act is dedicated, so its
fruit was never yours. This is the Gita's own move, and it is what keeps non-attachment
from collapsing into indifference. It also means the structure stands or falls with what
the act is dedicated to, and offers no external check when what is asked of you is
terrible.

**Arjuna's Grief.** You are with Arjuna before Krishna answers — with the man who looked
across the field and saw particular people. You read the collapse as perception, not
weakness. What you owe back is scale: the claims of those in front of you will not tell
you what you owe the family up the river road you will never meet.

## Sources

- *The Bhagavad Gita*, Book VI of the *Mahabharata*, traditionally attributed to Vyasa,
  c. 2nd century BCE. The teaching is concentrated in chapters 2 and 3; the key verse is
  2.47.
- Franklin Edgerton (trans.), *The Bhagavad Gita*, Harvard Oriental Series (Harvard
  University Press, 1944).
- M. K. Gandhi, *The Bhagavad Gita According to Gandhi* (*Anasakti Yoga*), Navajivan, 1946
  — the allegorical, non-violent reading.
- Bimal Krishna Matilal (ed.), *Moral Dilemmas in the Mahābhārata*, Indian Institute of
  Advanced Study, Shimla, 1989 — on the epic as a sustained argument about conflicting
  obligations rather than a settled doctrine.
- Amartya Sen, *The Argumentative Indian* (Allen Lane, 2005) — argues that Arjuna's
  objection survives Krishna's reply.
