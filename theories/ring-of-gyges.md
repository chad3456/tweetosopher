---
id: ring-of-gyges
title: The Ring of Gyges
category: thought-experiment
tradition: classical-greek
philosophers:
  - Plato
  - Glaucon
era: "c. 375 BCE"
tags: [justice, invisibility, reputation, self-interest, motivation]
sources:
  - author: Plato
    title: Republic, Book II
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Herodotus
    title: "Histories, Book I"
    published: "the earlier, non-magical version of the Gyges story"
  - author: Bernard Williams
    title: "Plato: The Invention of Philosophy"
    published: Routledge
    year: 1998
  - author: Christine Korsgaard
    title: The Sources of Normativity
    published: Cambridge University Press
    year: 1996
questions:
  - id: q1
    prompt: >-
      A ring makes you undetectable — no camera, no witness, no trace, no
      possibility of ever being found out. You are not a criminal and never
      have been. What happens over the first year?
    options:
      - id: a
        label: >-
          Nothing much changes. Being watched was never why you behaved;
          you would still be the one who had done it.
        scores: { virtue: 1.0, deontological: 0.4, authority: 0.6 }
      - id: b
        label: >-
          You would take things — not violently, but you would take them.
          Anyone honest about themselves knows this.
        scores: { egoist: 1.0, nihilist: 0.3, certainty: 0.4 }
      - id: c
        label: >-
          You would use it for good — evidence nobody can gather legally,
          money moved where it is needed. Invisibility is a tool.
        scores: { consequentialist: 1.0, scope: 0.7, authority: 0.8 }
      - id: d
        label: >-
          You would deteriorate slowly, and not notice. The restraint that
          feels internal is mostly scaffolding you did not build.
        scores: { virtue: 0.7, relativist: 0.4, certainty: -0.5 }
  - id: q2
    prompt: >-
      Glaucon's second case: a man who is perfectly just but universally
      believed to be a monster, dying despised, against a man who is
      thoroughly unjust but universally admired, dying honoured.
    options:
      - id: a
        label: >-
          The just man's life is still the better one. What he has, he has
          regardless of what a crowd believes about him.
        scores: { virtue: 1.0, certainty: 0.6, authority: 0.9 }
      - id: b
        label: >-
          The unjust man's life is plainly better, and saying otherwise is
          a story we tell to keep people in line.
        scores: { egoist: 1.0, nihilist: 0.4, affect: -0.6 }
      - id: c
        label: >-
          Compare the wreckage, not the men. His victims are the reason his
          life was worse, not some damage to his soul.
        scores: { consequentialist: 1.0, scope: 0.8 }
      - id: d
        label: >-
          The case is unreal. Nobody is just in isolation — justice is
          something done with and for particular people who know you.
        scores: { care: 0.9, contractarian: 0.3, scope: -0.6 }
  - id: q3
    prompt: >-
      Your firm's expenses system has a gap you found by accident. Claiming
      through it is undetectable, the amounts are small against a large
      company, and three colleagues you respect are already doing it.
    options:
      - id: a
        label: >-
          Don't claim, don't report them. It is not yours to take and not
          yours to police.
        scores: { virtue: 0.8, deontological: 0.5, scope: -0.4 }
      - id: b
        label: >-
          Report the gap. A rule everyone quietly exempts themselves from
          is not a rule, and the exemption cannot be general.
        scores: { contractarian: 0.9, deontological: 0.6, authority: -0.7 }
      - id: c
        label: >-
          Claim. The company prices this in, the money is trivial to it and
          not to you, and nobody is harmed you can name.
        scores: { egoist: 0.9, consequentialist: 0.4, affect: -0.4 }
      - id: d
        label: >-
          What matters is the culture you are joining. Do whatever keeps you
          honest with the three of them and with yourself afterwards.
        scores: { virtue: 0.7, care: 0.5, relativist: 0.3 }
  - id: q4
    prompt: >-
      Suppose Plato is wrong, and the just life is not in fact better for the
      person living it — being decent really does cost you, and the cost is
      never repaid. Does that change what you do?
    options:
      - id: a
        label: >-
          No. Justice is worth doing whether or not it pays, and needing it
          to pay is already the wrong relationship to it.
        scores: { deontological: 1.0, certainty: 0.7, authority: 0.5 }
      - id: b
        label: >-
          Yes, and honestly it should. A morality that never repays anyone
          is a demand with nothing behind it.
        scores: { egoist: 0.9, nihilist: 0.4, certainty: 0.3 }
      - id: c
        label: >-
          The question is malformed. There is no "you" outside the life you
          live; a corrupt person is not a happy person wearing a mask.
        scores: { virtue: 1.0, certainty: 0.5, affect: 0.4 }
      - id: d
        label: >-
          It changes nothing, because the point was never you. The reason
          not to steal is the person who loses.
        scores: { consequentialist: 0.9, care: 0.5, scope: 0.6 }
outcomes:
  - id: the-ring-changes-nothing
    dominant: virtue
    label: The Ring Changes Nothing
    text: >-
      You hold Socrates' side of the argument: that being unjust damages the
      person who does it, and that this damage is real whether or not anyone
      ever finds out. It is the only answer that makes the ring uninteresting,
      which is what Plato wanted. Its weakness is the one Glaucon presses — you
      have to make the internal damage vivid enough to outweigh a life of
      undetected advantage, and "your soul is disordered" is not obviously
      heavier than a fortune nobody can trace.
    base_rate: null
  - id: the-honest-thief
    dominant: egoist
    label: The Ring Reveals
    text: >-
      You think restraint is largely a function of exposure, and that a person
      who says otherwise has simply never been offered the ring. This is hard
      to refute and easy to underrate — most institutional design assumes you
      are right. What it costs is any account of why you keep the promises
      nobody is checking, and you probably do keep some, which means either
      you are an exception to your own theory or the theory is describing
      other people.
    base_rate: null
  - id: the-invisible-good
    dominant: consequentialist
    label: What the Ring Could Do
    text: >-
      You take invisibility as capability rather than temptation, and ask what
      it makes possible. That is a serious answer: the harms of the world are
      not mostly caused by unwatched individuals but by watched institutions,
      and a person outside their sight could do real good. The cost is that you
      have granted yourself an exemption from every check that exists on
      everybody else, on the strength of your own judgement about outcomes —
      which is precisely the argument every unaccountable actor has ever made.
    base_rate: null
  - id: the-rule-that-holds
    dominant: deontological
    label: It Would Still Be Wrong
    text: >-
      You separate whether justice pays from whether justice binds, and hold
      the second fixed while conceding the first. This is cleaner than Plato's
      answer, and it does not need the psychology to come out any particular
      way. What it owes you is a source: if the wrongness of the invisible
      theft does not come from harm, and does not come from what it makes of
      you, you have to say where it does come from and why it has authority
      over someone who does not feel it.
    base_rate: null
  - id: the-terms-of-the-deal
    dominant: contractarian
    label: The Rule You Could Not Generalise
    text: >-
      You ask what could be agreed to by people who did not know which of them
      would get the ring, and the exemption fails that test immediately. This
      handles the expenses case cleanly and explains the difference between a
      rule and a rule you quietly except yourself from. Its exposure is the
      person genuinely outside the agreement — the one with the ring
      permanently, who needs nothing from anyone and cannot be bargained with.
    base_rate: null
  - id: the-people-you-know
    dominant: care
    label: Justice Among Particular People
    text: >-
      You resist the whole framing: the isolated ring-bearer is not a moral
      agent stripped to essentials but a person with everything that generates
      obligation removed. Justice for you is what happens between people who
      are something to each other. That is right about most of a life. It is
      weakest exactly where the ring would be used — on strangers, at
      distance, where nobody is anything to you and the case still seems to
      have an answer.
    base_rate: null
---

## What it means

In Book II of the *Republic*, Plato's brother Glaucon refuses to let Socrates off
lightly. Socrates has just argued that justice is good in itself. Glaucon says he is
unconvinced, not because he wants injustice to win but because he wants the argument
made properly, and he proceeds to make the strongest case he can for the other side.

His device is a story. A shepherd named Gyges, in the service of the king of Lydia,
finds a gold ring in a chasm opened by an earthquake. He discovers that turning the
bezel inward makes him invisible. Within a short time he has used it to seduce the
queen, murder the king, and take the kingdom. Glaucon's point is not that Gyges was
unusually wicked. It is the opposite: put the ring on anyone at all — the most upright
man you know — and, Glaucon claims, he will do the same, because the only thing that
was ever holding him back was the risk of being seen. On this view justice is not
something people want; it is a compromise struck by people who would rather do wrong
with impunity but fear suffering it more, and who therefore agree to a rule they all
privately resent. Herodotus tells a version of the Gyges story a century earlier with
no ring in it at all; the magic is Plato's addition, and it is doing all the work.

Glaucon then sharpens the challenge with a second case. Take a perfectly just man who
is universally believed to be unjust — hated, tortured, and killed as a criminal — and
a perfectly unjust man who has arranged matters so that everyone believes him a saint,
and who dies honoured. Strip away reputation entirely, Glaucon says, and now tell me
that the just man has the better life. The rest of the *Republic* is Socrates' attempt
to answer, and his answer is that justice is a kind of internal order, a right
arrangement of the parts of the soul, so that the unjust man is damaged in the way a
diseased body is damaged, whether or not he notices.

## What it suggests

If Glaucon is right, most of what we call morality is enforcement wearing a costume.
Take away detection and you take away the behaviour. That is a testable claim, and it
is one a great deal of institutional design quietly assumes: we do not run audits
because we think accountants are wicked, we run them because we think exposure is what
makes honesty stable. Anyone who has watched behaviour change when the camera goes up
has some evidence for Glaucon.

If Socrates is right, something stranger is true — that a person who profits invisibly
from wrongdoing has nonetheless made themselves worse off, in a currency that has
nothing to do with what they got. This is the harder claim and the more interesting
one. It says the question "why be moral when you can get away with it?" has an answer
in terms of your own interest, correctly understood, rather than requiring you to
sacrifice your interest to a rule.

The strongest objection is that Socrates never really pays the debt. What he offers is
an analogy: injustice is to the soul as illness is to the body. But we can measure a
diseased body and we cannot measure a disordered soul, and the tyrant in Book IX who is
supposed to be the most miserable man alive does not seem miserable to anyone but
Plato. Bernard Williams argued that the psychological picture the argument needs — the
soul with parts that can be in genuine conflict, and a single healthy arrangement of
them — is doing metaphorical work it cannot cash. And there is a second objection from
the other direction: even if the just life is better for you, making that the reason to
be just gets the motivation wrong. A person who is honest because dishonesty would
corrode them is still, at bottom, looking after themselves.

## The problem

Nadia is a nurse manager on a ward that runs a small discretionary fund — donations,
mostly, for things the trust will not buy: taxi fares home, a phone charger, a decent
coat for someone discharged in January.

She controls it alone. There is no second signature, no reconciliation, and the audit
that would have caught it was suspended two years ago in a round of cuts nobody
reversed. She discovered this by accident, the way you discover a door is unlocked.

Her mother's care home has raised its fees again. Nadia can cover it for four months,
maybe five. The fund holds about nine thousand pounds.

Nobody would know. Not "probably nobody" — nobody, in the sense that the record that
would show it does not exist and is not going to be created. She has already worked
out how she would put it back, and she believes she would, and she is aware that
everyone who has ever done this believed that.

What she cannot work out is what the wrongness would consist in, if there is no one to
be wronged who will ever feel it, and no version of her that gets found out. She is not
looking for permission. She is looking for the thing she would be damaging, and she
cannot locate it, and she does not think that means it is not there.

## The questions

**1. The ring.** You cannot be detected — no camera, no witness, no trace, no
possibility of being found out. What happens over the first year?

- Nothing much changes. Being watched was never why you behaved.
- You would take things. Anyone honest about themselves knows this.
- You would use it for good — invisibility is a tool.
- You would deteriorate slowly, and not notice.

**2. Glaucon's two men.** The perfectly just man believed to be a monster, dying
despised; the perfectly unjust man believed to be a saint, dying honoured.

- The just man's life is still better, regardless of what a crowd believes.
- The unjust man's life is plainly better, and saying otherwise keeps people in line.
- Compare the wreckage, not the men. His victims are what made his life worse.
- The case is unreal. Nobody is just in isolation.

**3. The expenses gap.** Undetectable, small amounts, large company, three respected
colleagues already doing it.

- Don't claim, don't report. Not yours to take, not yours to police.
- Report it. A rule everyone excepts themselves from is not a rule.
- Claim. The company prices this in and nobody is harmed you can name.
- Do whatever keeps you honest with them and with yourself afterwards.

**4. Suppose Plato is wrong** and the just life really does cost you, permanently and
without repayment. Does that change what you do?

- No. Needing justice to pay is already the wrong relationship to it.
- Yes, and it should. A demand that never repays anyone has nothing behind it.
- The question is malformed. A corrupt person is not a happy person in a mask.
- Nothing changes, because the point was never you.

## Reading your answer

**The Ring Changes Nothing.** You hold that injustice damages the one who does it, and
that this is true unobserved. It is the only answer that makes the ring boring, which
is what Plato wanted. You owe Glaucon a measurement: say what the damage is in terms
someone who cannot feel it would recognise, because "your soul is disordered" is not
obviously heavier than an untraceable fortune.

**The Ring Reveals.** You think restraint tracks exposure. This is hard to refute and
routinely underrated — nearly every audit function in the world assumes you are right.
Its price is the promises you keep that nobody is checking. If you keep any, either you
are an exception to your own theory, or your theory is about other people.

**What the Ring Could Do.** You see capability rather than temptation, and you are
right that the world's worst harms are done in plain sight by institutions, not in the
dark by individuals. But you have granted yourself exemption from every check that
binds everyone else, on the strength of your own forecast — which is the argument every
unaccountable actor has ever made, including the ones who were sincere.

**It Would Still Be Wrong.** You uncouple whether justice pays from whether it binds.
This is cleaner than Plato's answer and needs no psychology. It owes you a source: if
the wrongness is not in the harm and not in what it makes of you, say where it is, and
why it has authority over someone who feels nothing.

**The Rule You Could Not Generalise.** You ask what people could agree to before
knowing who gets the ring, and the exemption fails immediately. This explains the
difference between a rule and a rule you quietly except yourself from. Its exposure is
the person permanently outside the bargain, who needs nothing from anyone.

**Justice Among Particular People.** You reject the framing: strip a person of every
relationship and you have not found the moral core, you have removed it. That is right
about most of a life, and weakest exactly where the ring gets used — on strangers, at
distance, where the case still seems to have an answer.

## Sources

- Plato, *Republic*, Book II (357a–367e), in *Plato: Complete Works*, ed. John M.
  Cooper (Hackett). Glaucon's challenge and the story of Gyges' ancestor.
- Plato, *Republic*, Books IV and IX — the soul with parts, and the argument that the
  tyrant is the unhappiest of men.
- Herodotus, *Histories*, Book I. The older Gyges story, without the ring.
- Bernard Williams, *Plato: The Invention of Philosophy* (Routledge, 1998), and his
  essay on the analogy of city and soul in the *Republic*.
- Christine Korsgaard, *The Sources of Normativity* (Cambridge University Press, 1996)
  — a modern attempt to answer the question of why obligation binds an agent who does
  not feel bound.
