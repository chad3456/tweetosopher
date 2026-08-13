---
id: dualism-of-practical-reason
title: The Dualism of Practical Reason
category: paradox
tradition: utilitarianism
philosophers:
  - Henry Sidgwick
era: "1874"
tags: [egoism, impartiality, self-interest, rationality, sacrifice, theism]
sources:
  - author: Henry Sidgwick
    title: The Methods of Ethics
    published: "Macmillan, London; 7th edition 1907"
    year: 1874
  - author: C. D. Broad
    title: Five Types of Ethical Theory
    published: "Kegan Paul, London"
    year: 1930
  - author: Derek Parfit
    title: Reasons and Persons
    published: Clarendon Press, Oxford
    year: 1984
  - author: J. B. Schneewind
    title: "Sidgwick's Ethics and Victorian Moral Philosophy"
    published: Clarendon Press, Oxford
    year: 1977
  - author: Bernard Williams
    title: "Ethics and the Limits of Philosophy"
    published: "Fontana / Harvard University Press"
    year: 1985
questions:
  - id: q1
    prompt: >-
      You can take a job that would consume your thirties and, by your own honest
      estimate, do a great deal of good for people you will never meet — or one
      that pays less, matters less, and would leave you a life you actually want.
      Nobody is depending on you either way.
    options:
      - id: a
        label: >-
          Take the demanding job. From the point of view of the universe your own
          satisfaction has no special weight, and you know that when you are calm.
        scores: { consequentialist: 1.0, scope: 1.0 }
      - id: b
        label: >-
          Take the life you want. Your own good is a reason for you in a way it
          is not for anyone else, and no argument has ever really dislodged that.
        scores: { egoist: 1.0, authority: 0.5 }
      - id: c
        label: >-
          Both answers are rational and they do not reconcile. Choose, and stop
          pretending the choice was made for you by an argument.
        scores: { existentialist: 0.9, nihilist: 0.3, certainty: -0.8 }
      - id: d
        label: >-
          The question is badly framed. A good life is not a quantity of
          satisfaction competing with a quantity of good done.
        scores: { virtue: 1.0, care: 0.3 }
  - id: q2
    prompt: >-
      Sidgwick thought the two principles could only be reconciled if the
      universe were so arranged that doing right and faring well finally coincide
      — which, he said, requires something like a moral government of the world.
      Suppose you are confident it is not so arranged.
    options:
      - id: a
        label: >-
          Then reason is genuinely divided, and ethics rests on a gap that no
          further argument closes. Sidgwick was right to end on that note.
        scores: { existentialist: 0.9, nihilist: 0.4, certainty: -0.9 }
      - id: b
        label: >-
          Then impartial reason simply wins. That my sacrifice goes unrewarded is
          a fact about the universe, not a defect in the argument for making it.
        scores: { consequentialist: 1.0, scope: 0.8, affect: -0.4 }
      - id: c
        label: >-
          Then prudence wins. A demand that costs everything and returns nothing
          is not a demand reason can make of a person.
        scores: { egoist: 1.0, certainty: 0.5 }
      - id: d
        label: >-
          The gap is why the question has always been religious. Sidgwick's
          conclusion is an argument for the postulate, not against it.
        scores: { divine: 1.0, certainty: 0.4 }
  - id: q3
    prompt: >-
      "The good of any one individual is of no more importance, from the point of
      view of the Universe, than the good of any other." Your own child needs an
      operation that will cost what would immunise several hundred children
      elsewhere, whose deaths are as certain as anything statistical can be.
    options:
      - id: a
        label: >-
          Pay for your child. The point of view of the universe is not a place
          anyone stands, and a parent who reasons from it is not a parent.
        scores: { care: 1.0, virtue: 0.4, scope: -0.9 }
      - id: b
        label: >-
          Fund the hundreds. If the axiom is true it is true at the worst moment,
          and this is the worst moment.
        scores: { consequentialist: 1.0, scope: 1.0, affect: -0.7 }
      - id: c
        label: >-
          Pay for your child, and do not dress it as principle. You are acting on
          an attachment that reason does not endorse, and you know it.
        scores: { egoist: 0.8, care: 0.5, certainty: -0.5 }
      - id: d
        label: >-
          You have a duty to your child that others do not have. Special
          obligations are not a failure of impartiality; they are its content.
        scores: { care: 0.9, deontological: 0.4, certainty: 0.4 }
  - id: q4
    prompt: >-
      Sidgwick published the divided conclusion knowing it would be taken as a
      failure of the book. His students asked what a moral philosopher is for if
      he cannot say which of two principles governs.
    options:
      - id: a
        label: >-
          Publishing the gap was the achievement. A philosophy that manufactures
          a reconciliation it has not found is worth less than an honest failure.
        scores: { virtue: 1.0, certainty: -0.6 }
      - id: b
        label: >-
          A theory that cannot answer the central practical question has not yet
          done its job, however honestly it says so.
        scores: { consequentialist: 0.7, deontological: 0.4, certainty: 0.5 }
      - id: c
        label: >-
          The dualism dissolves once you stop treating "rational" as a single
          thing. Prudence and morality answer different questions.
        scores: { existentialist: 0.7, relativist: 0.4, certainty: -0.4 }
      - id: d
        label: >-
          Live with the gap. Most people manage a working truce between the two
          without needing a proof that the truce is valid.
        scores: { virtue: 0.7, egoist: 0.5, affect: 0.5 }
outcomes:
  - id: the-universe
    dominant: consequentialist
    label: The Point of View of the Universe
    text: >-
      You accept Sidgwick's axiom of rational benevolence and follow it where it
      leads: your own good has no special standing simply because it is yours,
      and the fact that impartial reasoning goes unrewarded is not an argument
      against it. This is the most demanding position in the file and the one
      hardest to dismiss, because the axiom really does look self-evident when
      you are not the one being asked to pay. What it costs is that there is no
      principled place to stop. Sidgwick himself could not show that a person has
      sufficient reason to make the sacrifice, only that morality requires it —
      and you have to live in the space between those two.
    base_rate: null
  - id: the-self
    dominant: egoist
    label: A Reason For You
    text: >-
      You hold that your own good is a reason for you in a way it is not for
      anyone else, and that no argument has dislodged this — which is exactly
      Sidgwick's point, since he could not dislodge it either. Rational egoism in
      his sense is not selfishness; it is the claim that a demand which costs you
      everything and returns nothing is not a demand reason can make. The bill is
      that you cannot then object when someone else applies the same principle to
      you, and much of what you want from other people is precisely that they not.
    base_rate: null
  - id: the-postulate
    dominant: divine
    label: The Moral Government of the World
    text: >-
      You take the gap as evidence rather than as a dead end: if reason issues
      two commands that cannot both be satisfied, either reason is defective or
      the universe is arranged so that they finally coincide. Sidgwick's first
      edition took this seriously, and it is the same structure as Kant's
      postulate of a moral order. What you are carrying is a large claim about
      the world doing the work that an argument could not. If the postulate is
      false, the dualism is exactly where Sidgwick left it, and you have spent
      your reconciliation on a promissory note.
    base_rate: null
  - id: the-honest-gap
    dominant: existentialist
    label: Nobody Closes It For You
    text: >-
      You accept that the two principles are both rational and do not reconcile,
      and you treat the choice between them as yours to make rather than as a
      problem awaiting a solution. That is a defensible reading of where the
      argument actually stands, and it is more honest than most of the repairs.
      Its difficulty is that it makes the deepest question about how to live into
      something like a preference, and it gives you nothing to say to someone who
      chooses the other way — including at the moment when their choosing that
      way falls on you.
    base_rate: null
  - id: the-shape-of-a-life
    dominant: virtue
    label: The Question Is Malformed
    text: >-
      You refuse the framing: a life is not a quantity of satisfaction set
      against a quantity of good produced, and the dilemma has force only once
      you have accepted a picture of value that flattens both. Bernard Williams
      took roughly this line, arguing that the demand to justify one's life from
      an impartial standpoint is itself the mistake. What you owe is an account
      of what to do when the two really do conflict in a particular case — the
      operation, the job, the money — because "the question is malformed" is a
      diagnosis, and the cheque still has to be written or not written.
    base_rate: null
  - id: the-nearest
    dominant: care
    label: This One, Who Is Yours
    text: >-
      You answer from the relationship: the child in front of you has a claim
      that no aggregate can outbid, and a parent who reasons from the point of
      view of the universe has stopped being one. Almost everyone acts this way,
      and a theory that cannot accommodate it is describing nobody. What you have
      not done is answer Sidgwick — you have declined to. The several hundred
      children are still there, their deaths are still as certain, and your
      position tells you nothing about them except that they are further away.
    base_rate: null
---

## What it means

Henry Sidgwick's *The Methods of Ethics* (1874, revised through seven editions to 1907)
is the most careful book the utilitarian tradition produced, and it ends by admitting that
it has failed.

Sidgwick's method is to identify the ways ordinary people actually reason about what to
do, and to test each for coherence. He finds three: **egoism** (act so as to produce the
greatest good for yourself), **intuitionism** (follow the dictates of common-sense
morality, which presents itself as a set of self-evident rules), and **utilitarianism**
(act so as to produce the greatest good on the whole). Most of the book is spent showing
that intuitionism, examined closely, does not stand on its own — its rules are vague,
conflicting and admit of exceptions its own resources cannot systematise — and that when
its principles are refined to the point of genuine self-evidence, they turn out to be
utilitarian in content.

That leaves two methods, and Sidgwick argues that each rests on a proposition he cannot
deny. The **axiom of rational benevolence** states that "the good of any one individual is
of no more importance, from the point of view of the Universe, than the good of any
other" — from which it follows that one ought to aim at good generally, not at one's own
good in particular. But the **axiom of prudence**, that a person's own good is a rational
end for that person, seems equally undeniable, and it is not derived from the first.

The two coincide in most of life and come apart exactly where it matters: the case where
sacrificing your own good would produce more good overall. Here reason appears to issue
two commands, both apparently self-evident, which cannot both be obeyed. Sidgwick calls
this the "dualism of the practical reason", and in the book's final pages he draws the
conclusion that has haunted the tradition since: unless the universe is so ordered that
duty and self-interest ultimately coincide — which would require something like a moral
government of the world — then "the Cosmos of Duty is thus really reduced to a Chaos", and
the effort to make practical reason fully rational has failed.

In the first edition Sidgwick raised the theistic postulate as a possible resolution and
declined to assert it. Later editions handle it more guardedly. What never changed is the
diagnosis.

## What it suggests

The first thing to notice is what Sidgwick did *not* claim. He did not say self-interest
wins, and he did not say morality wins. He said both principles survive scrutiny and no
third principle adjudicates between them — which means that the standard move in ethical
argument, showing that being good is really in your interest properly understood, is
either false or unprovable.

That matters practically. Much of moral education, and nearly all of the popular
literature about ethics, works by trying to close this gap: virtue is its own reward, the
selfish are unhappy, integrity pays in the long run. Sidgwick had read the arguments and
did not think they held. Sometimes doing the right thing costs you your life, and there is
no ledger anywhere that squares it. If he is right, then whenever you act well at
significant cost you are doing something that reason recommends under one aspect and
recommends against under another, and no amount of clear thinking will make that feeling
go away, because the feeling is accurate.

The second thing is how the resolutions divide, because each one gives something up.

You can deny the axiom of prudence — hold that the agent's own good has no independent
rational standing, and that what looks like a second principle is just an attachment. Derek
Parfit's work in *Reasons and Persons* (1984) presses this from an unexpected direction:
if personal identity is less deep than we assume, the special rational status of *my*
future good is harder to defend, and the egoist's principle loses its footing before the
impartial one does.

You can deny the axiom of benevolence, or downgrade it — hold that the point of view of the
universe is not a viewpoint anyone occupies, and that reasons are always somebody's
reasons. This is the more common modern position and it is not obviously wrong, but it
gives up the thing that made utilitarianism compelling in the first place.

You can accept the theistic postulate, which is the honest name for what Sidgwick was
gesturing at and what Kant reached for in the same place a century earlier.

Or you can accept the dualism, which is what Sidgwick did.

The strongest objection to the whole framing comes from Bernard Williams, in *Ethics and
the Limits of Philosophy* (1985): that the demand for a single rational standpoint from
which one's whole life can be justified is itself the error, and that the dualism is an
artefact of insisting on it. On that reading Sidgwick's chaos is not a discovery about
practical reason but a consequence of the shape he required an answer to have.

## The problem

Isabel is forty-four and has been offered the directorship of a field programme.

The programme works. She has audited it herself and the numbers are not soft: measured
against the counterfactual, running it well for a decade prevents somewhere between four
and nine thousand deaths, mostly of children under five. It is in a country she does not
speak the language of. The post requires her there ten months a year.

She has spent eleven years building something else: a house she loves, a partner who will
not move, a circle of friends thirty years deep, a garden she started from clay. She is
not unusually selfish. She gives away a tenth of what she earns and has done since she was
twenty-six. She has read the arguments, and she cannot find the flaw in them.

She also cannot find the reason why she should be the one to lose everything she has, and
she notices that this second inability does not feel like a failure of nerve. It feels
like a fact — that her own life is hers in a way that is not simply a preference she has
about it.

Her brother, who is not a philosopher, says the obvious thing: nobody could be expected to
do that. Her colleague says the other obvious thing: four thousand children.

Both of them are describing something real, and Sidgwick's conclusion is that Isabel is
not going to be shown which one is the reason, because both are, and there is no third
thing standing behind them to break the tie.

## The questions

**1. The demanding job.** Great good for strangers and your thirties gone, or a smaller
life you actually want. Nobody depends on you.

- Take the demanding job. Your own satisfaction has no special weight.
- Take the life you want. Your own good is a reason for you in a way it is not for anyone
  else.
- Both are rational and do not reconcile. Choose, and stop pretending otherwise.
- The question is badly framed.

**2. Suppose the universe is not arranged to reward it.**

- Then reason is genuinely divided and ethics rests on a gap.
- Then impartial reason wins; going unrewarded is a fact about the universe, not a defect
  in the argument.
- Then prudence wins; a demand that costs everything and returns nothing is not one reason
  can make.
- The gap is why the question has always been religious.

**3. Your child, or several hundred children elsewhere.**

- Pay for your child. The point of view of the universe is not a place anyone stands.
- Fund the hundreds. If the axiom holds at all, it holds at the worst moment.
- Pay for your child, and do not dress it as principle.
- You have a duty to your child that others do not have.

**4. Publishing the failure.** Sidgwick ended the book without an answer.

- Publishing the gap was the achievement.
- A theory that cannot answer the central question has not done its job.
- The dualism dissolves once "rational" stops being treated as one thing.
- Live with the gap; most people manage a working truce without a proof.

## Reading your answer

**The Point of View of the Universe.** You take the impartial axiom to be true and follow
it, including where it is unrewarded. It is very hard to argue against, and it is not
supposed to be comfortable. What you carry is the absence of a floor: Sidgwick could show
that morality requires the sacrifice and could not show that you have sufficient reason to
make it, and that gap is where you now live.

**A Reason For You.** You hold that your own good has independent rational standing. This
is not selfishness in Sidgwick's sense and it is not easily refuted — he tried. Your
exposure is symmetry: everyone else may reason the same way about you, and a great deal of
what you want from other people consists in their not doing so.

**The Moral Government of the World.** You treat the gap as pointing beyond the argument.
This is a serious response with a long lineage, and it is the one Sidgwick himself found
hardest to let go of. It runs on a claim about how the world is arranged, and if that claim
is false you are exactly where he left you, having spent the reconciliation in advance.

**Nobody Closes It For You.** You accept the division and take the choice as yours. That is
probably the most accurate description of where the argument stands. Its cost is that it
converts the deepest practical question into something adjacent to a preference, and leaves
you without an answer to someone who chooses the other way — including when their choice
is about you.

**The Question Is Malformed.** You reject the framing, with Williams. That is a real
philosophical position and not an evasion. But diagnosis is not decision: when the
operation must be paid for or not paid for, "you have set the question up wrongly" does not
yet tell anyone what to do.

**This One, Who Is Yours.** You answer from the relationship, and nearly everyone does. A
theory that cannot accommodate it is describing no one who has ever existed. What you
should be clear about is that you have not met Sidgwick's argument; you have declined it.
The several hundred children have not gone anywhere.

## Sources

- Henry Sidgwick, *The Methods of Ethics*, Macmillan (1874; 7th edition 1907) — the three
  methods, the axioms of book III chapter 13, and the concluding chapter on the dualism.
- C. D. Broad, *Five Types of Ethical Theory*, Kegan Paul (1930) — the chapter on Sidgwick
  that fixed the modern reading of the dualism.
- J. B. Schneewind, *Sidgwick's Ethics and Victorian Moral Philosophy*, Clarendon Press
  (1977) — on what Sidgwick took himself to be doing and why the ending is not an accident.
- Derek Parfit, *Reasons and Persons*, Clarendon Press (1984) — the pressure personal
  identity puts on the rational standing of self-interest.
- Bernard Williams, *Ethics and the Limits of Philosophy*, Fontana (1985) — the argument
  that the demand for a single justifying standpoint is the error.
