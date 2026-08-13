---
id: newcombs-problem
title: Newcomb's Problem
category: paradox
tradition: decision-theory
philosophers:
  - William Newcomb
  - Robert Nozick
era: "1969"
tags: [prediction, free-will, decision-theory, commitment, dominance, rationality]
sources:
  - author: Robert Nozick
    title: "Newcomb's Problem and Two Principles of Choice"
    published: "in Essays in Honor of Carl G. Hempel, ed. Nicholas Rescher, Reidel, 114–146"
    year: 1969
  - author: Allan Gibbard, William L. Harper
    title: "Counterfactuals and Two Kinds of Expected Utility"
    published: "in Foundations and Applications of Decision Theory, eds. Hooker, Leach and McClennen, Reidel, 125–162"
    year: 1978
  - author: David Lewis
    title: "Prisoners' Dilemma is a Newcomb Problem"
    published: "Philosophy and Public Affairs 8(3), 235–240"
    year: 1979
  - author: David Bourget, David J. Chalmers
    title: "Philosophers on Philosophy - The 2020 PhilPapers Survey"
    published: "Philosophers' Imprint 23(11)"
    year: 2023
  - author: Martin Gardner
    title: "Mathematical Games - Free will revisited, with a mind-bending prediction paradox by William Newcomb"
    published: "Scientific American 229(1), 104–109"
    year: 1973
questions:
  - id: q1
    prompt: >-
      A being that has predicted correctly in every observed case offers you two boxes.
      The clear box holds a thousand pounds. The opaque box holds a million if it
      predicted you would take only the opaque box, and nothing if it predicted you would
      take both. It has already decided and left.
    options:
      - id: a
        label: >-
          Take the opaque box only. Everyone who does walks away rich and everyone who
          takes both walks away with a thousand, and no argument survives that record.
        scores: { consequentialist: 1.0, certainty: 0.5, affect: 0.4 }
      - id: b
        label: >-
          Take both. The money is already in the box or it is not, nothing you now do can
          change it, and leaving a thousand pounds on the table is simply leaving it.
        scores: { egoist: 1.0, certainty: 0.6, affect: -0.6 }
      - id: c
        label: >-
          Take the opaque box only, because you decided long before you got here what kind
          of person you would be in a room like this, and that decision is the point.
        scores: { virtue: 1.0, deontological: 0.4, certainty: 0.4 }
      - id: d
        label: >-
          Refuse the frame. If your choice was genuinely predictable in advance then it was
          not a choice, and a paradox built on denying your agency has assumed its conclusion.
        scores: { existentialist: 1.0, certainty: -0.6, authority: 0.5 }
  - id: q2
    prompt: >-
      A friend takes both boxes, gets a thousand pounds, and says his reasoning was
      correct — he would have got a thousand less had he taken one box, given what was
      already in it. He is right about that. He is also considerably poorer than you.
    options:
      - id: a
        label: >-
          Then his reasoning was wrong, whatever its internal tidiness. A theory of rational
          choice whose adherents reliably end up poor has failed at the one thing it does.
        scores: { consequentialist: 1.0, certainty: 0.6, affect: 0.3 }
      - id: b
        label: >-
          Then he is right and unlucky. Being rewarded for irrationality is a feature of the
          scenario, not a discovery about rationality.
        scores: { egoist: 0.9, deontological: 0.4, certainty: 0.7 }
      - id: c
        label: >-
          Then the disagreement is not about the money at all. He values acting on what he
          can defend; you value being someone worth predicting well.
        scores: { virtue: 1.0, relativist: 0.4, certainty: -0.5 }
      - id: d
        label: >-
          Then someone should build the theory that gets both the reasoning and the money,
          and until then neither of you is entitled to be confident.
        scores: { consequentialist: 0.6, existentialist: 0.5, certainty: -0.9 }
  - id: q3
    prompt: >-
      Your employer runs an assessment that predicts, with a long and accurate record,
      who will leave within two years. Those it clears get a large retention payment. It
      has already run on you, and the result is sealed.
    options:
      - id: a
        label: >-
          Commit publicly to staying, and mean it. The only way to be read as staying by
          anything that reads people well is to actually be staying.
        scores: { virtue: 1.0, contractarian: 0.3, certainty: 0.4 }
      - id: b
        label: >-
          Take the offer elsewhere if it comes. The assessment has already run, your
          behaviour now cannot change a sealed file, and your career is not a wager.
        scores: { egoist: 1.0, scope: -0.7 }
      - id: c
        label: >-
          Refuse to participate in an assessment that decides in advance what you are going
          to do. Being modelled is not the same as being known, and you should say so.
        scores: { existentialist: 1.0, authority: 0.8 }
      - id: d
        label: >-
          Behave in whatever way makes you most likely to be someone the model clears,
          because that is where the money is and the money is real.
        scores: { consequentialist: 1.0, egoist: 0.4, affect: -0.5 }
  - id: q4
    prompt: >-
      David Lewis argued that the prisoner's dilemma is a Newcomb problem — your partner
      is your predictor, since you reason alike, and cooperating is one-boxing.
    options:
      - id: a
        label: >-
          Then cooperate, in both. If reasoning alike means acting alike, you are choosing
          which of two outcomes you both get, not which of four.
        scores: { consequentialist: 1.0, contractarian: 0.3, scope: 0.6 }
      - id: b
        label: >-
          Then defect, in both. Nothing you do causes his choice, and treating a correlation
          as a lever is the mistake the whole dispute is about.
        scores: { egoist: 1.0, certainty: 0.7, affect: -0.6 }
      - id: c
        label: >-
          Then the analogy shows the case was never merely technical. What is at stake is
          whether you keep faith with someone in your position, and that is a moral question.
        scores: { virtue: 0.9, deontological: 0.5, care: 0.4 }
      - id: d
        label: >-
          Then a lot depends on what "reason alike" means, and until someone can say, the
          analogy is a suggestion rather than an argument.
        scores: { existentialist: 0.6, consequentialist: 0.4, certainty: -0.8 }
outcomes:
  - id: one-box
    dominant: consequentialist
    label: Take the Opaque Box
    text: >-
      You judge a decision by what it gets you, and the record is not in doubt — one-boxers
      leave rich. You are willing to say that a rule which is unimpeachable step by step and
      poor in outcome has been refuted by the outcome. The strain is explaining what you
      think you are doing when you choose, since the money is already in the box and your
      choice cannot put it there. The published figure attached to this result is the share
      of professional philosophers in the 2020 PhilPapers survey who accepted or leaned
      towards one-boxing.
    base_rate: 0.312
  - id: two-box
    dominant: egoist
    label: Take Both
    text: >-
      You will not treat a correlation as a lever. Whatever is in the opaque box is in it
      already, your choice now cannot reach backwards, and given any fixed contents taking
      both is strictly better by a thousand pounds. This is causal decision theory and it is
      the majority view among philosophers who work on it. What you have to sit with is the
      question David Lewis put to his own side: if you're so smart, why ain'cha rich? The
      figure here is the share of professional philosophers in the 2020 PhilPapers survey
      who accepted or leaned towards two-boxing.
    base_rate: 0.39
  - id: the-kind-of-agent
    dominant: virtue
    label: The Sort of Agent to Be
    text: >-
      You relocate the question from the act to the agent. What is being rewarded is not
      your choice but the kind of person you have made yourself into, and someone who could
      be argued out of one-boxing at the last moment was never a one-boxer to begin with.
      This is the most natural answer for anyone who takes commitment seriously, and it
      transfers directly to promises, deterrence and reputation. Its cost is that it
      recommends becoming someone who will predictably do a thing you may, at the moment of
      doing it, be able to see is worse for you.
    base_rate: null
  - id: refuse-the-frame
    dominant: existentialist
    label: You Are Not a Prediction
    text: >-
      Your response is to attack the setup. If the being can genuinely predict you, then
      whatever you do next was fixed before you entered the room, and a puzzle that first
      abolishes your agency and then asks what you should do has taken back the thing it was
      asking about. That is a serious objection and not a dodge. Its weakness is that
      near-perfect prediction of ordinary people is not science fiction any more, and
      refusing the frame will not stop the assessments from running.
    base_rate: null
  - id: keep-faith
    dominant: deontological
    label: Bound by the Policy
    text: >-
      You treat the choice as already made — by a rule you adopted, a commitment you gave,
      a policy you are keeping faith with — so the question at the table is not what to do
      but whether you are the sort of thing that does what it said. This handles Newcomb,
      deterrence and promise-keeping with one mechanism. What it owes is an account of why a
      past decision binds a present agent who can now see it is worse, which is exactly the
      difficulty the paradox was built around.
    base_rate: null
---

## What it means

Newcomb's problem was devised around 1960 by William Newcomb, a physicist at the Lawrence
Livermore laboratory, and reached philosophy through Robert Nozick's paper "Newcomb's
Problem and Two Principles of Choice" (1969). Martin Gardner gave it to a general audience
in *Scientific American* in 1973.

Here it is. A being — call it the Predictor — has an extraordinary record of predicting
what people will choose. In front of you are two boxes. The clear box contains a thousand
pounds and you can see it. The opaque box contains either a million pounds or nothing. The
Predictor has already made its prediction and filled the boxes accordingly: a million in
the opaque box if it predicted you would take **only** the opaque box, nothing if it
predicted you would take **both**. It has gone. Nothing you do now changes what is in the
boxes. You may take both boxes, or the opaque box alone.

Two arguments, each apparently decisive, point opposite ways.

**The expected-value argument.** Almost everyone who takes only the opaque box gets a
million. Almost everyone who takes both gets a thousand. If you want the million, do what
the millionaires did.

**The dominance argument.** Whatever is in the opaque box is already in it. If it contains
a million, taking both gets you a million and a thousand. If it contains nothing, taking
both gets you a thousand rather than nothing. In every possible state of the world, taking
both does better by exactly a thousand pounds. To leave the clear box is to burn money to
influence something that has already happened.

Nozick's own remark has become the standard epigraph: to almost everyone it is perfectly
clear and obvious what should be done, and these people divide almost evenly. The dispute
matured into two rival decision theories — **evidential**, which asks what your choosing
would be evidence of, and **causal**, formulated by Gibbard and Harper in 1978, which asks
what your choosing would bring about. In the 2020 PhilPapers survey of professional
philosophers, reported by Bourget and Chalmers, two-boxing drew 39.0 per cent and one-boxing
31.2 per cent, with the remainder undecided, agnostic or holding other views. Sixty years
of argument have moved the numbers, not settled them.

## What it suggests

It looks like a game-show puzzle and is not. What it isolates is the relationship between
being the sort of agent who will do something and doing it, and that relationship is at the
heart of a great deal of ordinary moral life.

Consider deterrence. A state announces it will retaliate against an attack. Retaliation
after the fact accomplishes nothing — the attack has happened, and the second strike merely
adds deaths. Yet only a state that will actually retaliate can deter, and if the enemy can
read intentions, only genuinely intending it works. The reasoning that says "take both
boxes" says "do not retaliate", and it says it in a way that, if known in advance, removes
the deterrent.

Consider a promise. You promise to repay a loan from someone who will never be able to
enforce it. When repayment day comes, the benefit of the loan is already banked and nothing
you do now can retrieve it. Dominance reasoning says keep the money. What sustains lending
is people who are not moved by that argument — and who could not have been talked into
being moved, since anyone who could would have been read as such.

David Lewis pressed the connection hardest in 1979, arguing that the prisoner's dilemma
simply *is* a Newcomb problem: your partner's choice is correlated with yours because you
are similar reasoners facing the same structure, so cooperating is one-boxing and defecting
is two-boxing. If he is right, the technical dispute in decision theory and the oldest
question in the ethics of cooperation are the same question.

The objections are real. Against one-boxing: your choice cannot cause the contents of a
sealed box, and any theory that recommends acting as if it could will misfire in the many
cases where a correlation runs through a common cause rather than through you. Against
two-boxing: Lewis's own taunt, if you're so smart, why ain'cha rich? And against the whole
construction: that perfect prediction of a free choice may be incoherent, so the case is not
a discovery about rationality but a description of a situation that cannot arise. That last
objection has lost force as prediction has become ordinary. Nobody needs a godlike being to
build a model that anticipates what you will do.

## The problem

Your firm has installed a retention model, and you have just been told your file is sealed.

The model reads eleven years of internal data and predicts, with a record the HR director
describes as uncomfortably good, who will still be there in two years. Anyone it clears is
paid ninety thousand pounds in March, unconditionally, whether or not they subsequently
stay. Anyone it does not clear is paid nothing. There is no appeal, and the assessment has
already run.

On Tuesday a competitor offered you a job. It is better paid, it is closer to your mother,
and you would take it tomorrow if not for March.

Your instinct is that it makes no difference now — the file is sealed, the model has said
whatever it has said, and your decision in a week cannot reach back into a decision made
last month. Your colleague, who has thought about this more than is healthy, says that is
exactly the reasoning that gets you nothing, because a model good enough to be worth
installing is a model that already knows you are the sort of person who reasons that way.

You have until Friday, and you have realised that you cannot decide what to do without
first deciding what you think you are.

## The questions

**1. The two boxes.** A thousand visible; a million in the opaque box if the Predictor
predicted you would take only that one. It has already left.

- Take the opaque box only. One-boxers leave rich; no argument survives that record.
- Take both. Nothing you do now changes the contents, and a thousand pounds is a thousand pounds.
- Take the opaque box, because you decided long ago what kind of person you would be here.
- Refuse the frame. A puzzle that denies your agency has assumed its conclusion.

**2. Your friend with the thousand.** His reasoning was locally correct. He is much poorer
than you.

- Then his reasoning was wrong, whatever its tidiness.
- Then he is right and unlucky. The scenario rewards irrationality.
- Then the disagreement was never about the money.
- Then neither of you is entitled to confidence until someone builds a better theory.

**3. The sealed assessment.** A model predicts who will leave; those it clears are paid.

- Commit publicly to staying, and mean it.
- Take the better offer. A sealed file cannot be changed by what you do next.
- Refuse to be assessed. Being modelled is not being known.
- Do whatever makes you likeliest to be cleared. The money is real.

**4. Lewis's identification.** The prisoner's dilemma is a Newcomb problem; your partner is
your predictor.

- Then cooperate in both. You are choosing between two outcomes, not four.
- Then defect in both. Correlation is not a lever.
- Then the case was never technical. It is about keeping faith.
- Then it depends entirely on what "reason alike" means, and nobody has said.

## Reading your answer

**Take the Opaque Box.** You judge by results and you are willing to say that a locally
impeccable rule has been refuted by what happens to the people who follow it. The strain is
in describing what you take yourself to be doing at the moment of choosing, given that the
money is already there or already not.

**Take Both.** You refuse to treat a correlation as something you can pull on, and you have
the majority of decision theorists with you. What you have to live with is Lewis's question
to his own side, which has never been fully answered: if the reasoning is so good, why are
its adherents poorer?

**The Sort of Agent to Be.** You move the question from the act to the agent, and you note
that anyone who could be talked out of one-boxing at the last moment was never a one-boxer.
This transfers cleanly to promises, deterrence and reputation. It also commits you to
making yourself into someone who will predictably do a thing you may, in the moment, be
able to see is worse for you.

**You Are Not a Prediction.** You attack the setup, and the objection is serious: a case
that abolishes your agency and then asks what you should do has taken back what it was
asking about. It is getting harder to hold. Prediction of ordinary people is now routine,
and the assessments will run whether or not you consent to the premise.

**Bound by the Policy.** You treat the decision as already taken by a commitment you are
keeping faith with, which handles Newcomb, promising and deterrence with a single
mechanism. What it owes is an account of why the past decision binds you now, which is
precisely what the paradox was built to make difficult.

## Sources

- Robert Nozick, "Newcomb's Problem and Two Principles of Choice", in *Essays in Honor of
  Carl G. Hempel*, ed. Nicholas Rescher (Reidel, 1969), 114–146.
- Martin Gardner, "Mathematical Games", *Scientific American* 229(1) (1973), 104–109 — the
  problem's first mass audience.
- Allan Gibbard and William L. Harper, "Counterfactuals and Two Kinds of Expected Utility",
  in *Foundations and Applications of Decision Theory*, eds. Hooker, Leach and McClennen
  (Reidel, 1978), 125–162 — causal decision theory.
- David Lewis, "Prisoners' Dilemma is a Newcomb Problem", *Philosophy and Public Affairs*
  8(3) (1979), 235–240.
- David Bourget and David J. Chalmers, "Philosophers on Philosophy: The 2020 PhilPapers
  Survey", *Philosophers' Imprint* 23(11) (2023) — the source of the 39.0 per cent
  two-boxing and 31.2 per cent one-boxing figures, reported as accept-or-lean responses
  among surveyed professional philosophers.
