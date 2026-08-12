---
id: act-and-rule-utilitarianism
title: Act and Rule Utilitarianism
category: theory
tradition: utilitarianism
philosophers:
  - John Stuart Mill
  - J.J.C. Smart
era: "1863"
tags: [rules, promises, coordination, rule-worship, collapse, exceptions]
sources:
  - author: John Stuart Mill
    title: Utilitarianism
    published: "Fraser's Magazine 1861; book edition, Parker, Son & Bourn, London"
    year: 1863
  - author: J. O. Urmson
    title: "The Interpretation of the Moral Philosophy of J. S. Mill"
    published: "Philosophical Quarterly 3(10), 33–39"
    year: 1953
  - author: J.J.C. Smart
    title: "Extreme and Restricted Utilitarianism"
    published: "Philosophical Quarterly 6(25), 344–354"
    year: 1956
  - author: Richard B. Brandt
    title: "Ethical Theory: The Problems of Normative and Critical Ethics"
    published: "Prentice-Hall, Englewood Cliffs"
    year: 1959
  - author: David Lyons
    title: Forms and Limits of Utilitarianism
    published: Clarendon Press, Oxford
    year: 1965
questions:
  - id: q1
    prompt: >-
      You promised a dying friend you would give his savings to his estranged
      daughter. Nobody else knows of the promise, there is no will, and no one
      will ever find out. The daughter is comfortable. The same money would keep
      a small local charity running for three years.
    options:
      - id: a
        label: >-
          Give it to the charity. The promise mattered because keeping promises
          usually does good; here it does not, and the ritual is not the point.
        scores: { consequentialist: 1.0, certainty: 0.4, affect: -0.5 }
      - id: b
        label: >-
          Give it to the daughter. A practice of keeping promises only survives
          if people keep them when nobody is checking, and this is that case.
        scores: { consequentialist: 0.8, contractarian: 0.5, certainty: 0.4 }
      - id: c
        label: >-
          Give it to the daughter, because you gave your word to a man who
          trusted you. That is a debt, not a calculation with a strong prior.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          A person who can reason his way out of a deathbed promise in an
          afternoon has a talent he should be more frightened of.
        scores: { virtue: 1.0, deontological: 0.4, affect: 0.6 }
  - id: q2
    prompt: >-
      Smart's objection to rule-following is "rule worship": if you know the rule
      produces a worse outcome here, obeying it anyway is superstition dressed as
      principle. You are a triage doctor whose protocol requires you to treat in
      arrival order, and you can see that departing from it tonight would save
      one more life.
    options:
      - id: a
        label: >-
          Depart from it. The protocol exists to save lives; when it costs one,
          following it is loyalty to a document rather than to patients.
        scores: { consequentialist: 1.0, authority: 0.6 }
      - id: b
        label: >-
          Follow it. A protocol that everyone departs from when they judge it
          wrong is not a protocol, and your judgement tonight is one data point.
        scores: { consequentialist: 0.9, contractarian: 0.4, authority: -0.6 }
      - id: c
        label: >-
          Follow it, because patients are entitled to be treated under known
          rules rather than under one doctor's assessment of their worth.
        scores: { deontological: 0.9, contractarian: 0.5 }
      - id: d
        label: >-
          Depart from it and report that you did, immediately. The exception is
          only defensible if it is visible and can be argued with afterwards.
        scores: { consequentialist: 0.7, virtue: 0.6, authority: 0.3 }
  - id: q3
    prompt: >-
      A rule utilitarian asks which rule, generally followed, would produce the
      most good. A critic answers: then adopt the rule "keep promises except when
      breaking them produces more good" — which is better than any simpler rule,
      and which tells you exactly what an act utilitarian would have done.
    options:
      - id: a
        label: >-
          The critic is right and the distinction collapses. Any rule refined
          enough to be optimal just is act utilitarianism written out longhand.
        scores: { consequentialist: 1.0, certainty: 0.5 }
      - id: b
        label: >-
          The refinement is not available, because rules have to be teachable and
          publicly checkable. A rule nobody can apply reliably is not a rule.
        scores: { contractarian: 0.9, consequentialist: 0.5 }
      - id: c
        label: >-
          The collapse only threatens rules justified by their outcomes. Justify
          them another way and the objection has nothing to grip.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          The argument is a symptom. A theory this easily rewritten into its own
          opposite is not telling you much about how to live.
        scores: { virtue: 0.8, nihilist: 0.3, certainty: -0.6 }
  - id: q4
    prompt: >-
      You are one of about eleven thousand people who could walk across a lawn to
      save four minutes. Your crossing does no measurable damage. If everyone
      crosses the lawn is destroyed, and the sign says keep off.
    options:
      - id: a
        label: >-
          Cross. Your act does no harm, and being asked to sacrifice for a
          hypothetical in which everyone acts as you do is a confusion.
        scores: { consequentialist: 0.9, egoist: 0.4, authority: 0.5 }
      - id: b
        label: >-
          Do not cross. Taking a benefit from a practice while declining its
          burden is unfair to everyone shouldering it, damage or no damage.
        scores: { contractarian: 1.0, deontological: 0.4, scope: 0.4 }
      - id: c
        label: >-
          Do not cross, because you would be making an exception of yourself, and
          you cannot state the reason without embarrassment.
        scores: { deontological: 0.9, virtue: 0.5, certainty: 0.5 }
      - id: d
        label: >-
          Cross, but notice you have just constructed the argument that empties
          every commons, and that you will use it again tomorrow.
        scores: { consequentialist: 0.6, virtue: 0.6, certainty: -0.5 }
outcomes:
  - id: the-act
    dominant: consequentialist
    label: This Act, These Consequences
    text: >-
      You judge each act by what it actually brings about, and you will not let a
      rule stand between you and a better outcome you can see. Smart's charge of
      rule worship is yours: a rule justified by its results cannot coherently be
      obeyed when the results go the other way. The cost is not that you will be
      wrong about the cases; it is that you will be right about them one at a
      time while the practices that made them possible erode. Promising, triage
      order and the lawn all work because people do not reopen them, and your
      view reopens them by design.
    base_rate: null
  - id: the-rule
    dominant: contractarian
    label: The Practice, Not the Instance
    text: >-
      You evaluate acts by the rules whose general acceptance would go best, and
      you take seriously that rules must be public, teachable and applied by
      fallible people under pressure. This handles free-riding and coordination
      cleanly, and it explains why "nobody would ever know" is a reason for
      suspicion rather than a licence. What you must answer is Lyons's collapse
      objection: if the best rule is the one with the best exceptions built in,
      then a sufficiently refined rule tells you to do precisely what an act
      utilitarian would do, and your position has become a longer way of writing
      theirs.
    base_rate: null
  - id: the-word-given
    dominant: deontological
    label: A Debt, Not a Calculation
    text: >-
      You hold that a promise binds because it was given, not because keeping it
      tends to go well — which is why the collapse objection does not touch you.
      Rules on your view were never a device for producing good outcomes, so
      their occasionally producing bad ones is not a scandal. The bill arrives
      where the outcome is catastrophic and the duty is trivial, and you must
      say, in that case, that the word given still holds. Most people who take
      your position have not tested it against a case built to cost them.
    base_rate: null
  - id: the-person-deciding
    dominant: virtue
    label: Watch Who Is Doing the Reasoning
    text: >-
      Your attention is on the reasoner rather than the reasoning. You notice
      that the faculty which finds the exception is the same faculty that wants
      the exception, and you treat the speed of the argument as evidence about
      the arguer. That is a real epistemic point and neither side of the formal
      debate has a good answer to it. Where it leaves you short is the honest
      hard case: sometimes the exception is genuine, and a policy of distrusting
      your own reasoning cannot distinguish self-serving cleverness from correct
      judgement under pressure.
    base_rate: null
---

## What it means

Both positions accept that only consequences finally matter. They differ about what the
consequences are consequences *of*.

**Act utilitarianism** applies the standard directly to the act. This act is right if it
produces at least as much good as any alternative available to the agent. Rules,
conventions and promises are useful summaries of what has usually produced good — Smart
called them "rules of thumb" — but they have no authority of their own. Where following a
rule would produce less good than breaking it, you break it, and nothing has gone wrong.

**Rule utilitarianism** applies the standard to the rule. An act is right if it conforms
to a rule the general acceptance of which would produce more good than any alternative
rule. The individual act is then assessed for conformity, not for its own yield. This
means a rule utilitarian can be committed to keeping a promise in a case where breaking
it would do more good, because the question was never about this promise; it was about
what a practice of promising is worth.

The distinction is a twentieth-century clarification of a nineteenth-century muddle.
Mill's *Utilitarianism* (1863) contains passages that pull both ways — he speaks of
"secondary principles" and "corollaries from the principle of utility" that agents should
generally follow, and warns against recalculating everything from first principles each
time. J. O. Urmson argued in 1953 that Mill was best read as a rule utilitarian all along;
that reading is contested but it started the modern debate. Richard Brandt supplied the
terminology in *Ethical Theory* (1959), and J.J.C. Smart, writing in 1956 under the labels
"extreme" and "restricted" utilitarianism, mounted the attack that still defines the
argument.

Smart's charge is **rule worship**. If a rule is justified because following it produces
good, then in a case where you know it will not, adherence is not principle but
superstition — a kind of deference to a formula that has forgotten what the formula was
for. The reply is that Smart has assumed the agent reliably knows, which is exactly what a
person about to break a rule in their own favour is worst placed to establish.

## What it suggests

The practical difference is not a difference about hard cases. It is a difference about
who you are when you are deciding.

An act utilitarian is a permanent optimiser. Nothing is settled; every commitment is open
to review the moment new information arrives. This is the theory's strength in emergencies
— it never tells you to let something terrible happen out of fidelity to a form — and its
weakness everywhere else, because most valuable social practices depend on being closed
to review. A promise you would break if the sums changed is not, in the relevant sense, a
promise; it is a forecast of your future behaviour. Contracts, confidences, triage
protocols, judicial impartiality and the ordinary reliability of institutions all work by
removing themselves from case-by-case recalculation.

A rule utilitarian buys that stability, and pays for it in two ways. The first is the
occasional bad outcome accepted for the sake of the practice, which Smart says is a real
cost dressed as a virtue. The second is more damaging.

David Lyons argued in *Forms and Limits of Utilitarianism* (1965) that rule
utilitarianism, taken seriously, **collapses**. If the test is which rule would produce
most good, then a rule with exceptions built in beats the rule without them: "keep
promises, except where breaking one produces substantially more good" is a better rule
than "keep promises", by the rule utilitarian's own standard. Keep refining and you
converge on a rule that prescribes exactly what act utilitarianism prescribes, at which
point the two theories are extensionally identical and the rule version is simply the
longer way of saying it.

The standard defence is to deny that the refined rule is available. Rules have to be
learned, taught, remembered, applied by tired people at three in the morning, and checked
by others; a rule whose application requires an accurate consequence calculation is not
performing the function rules exist to perform. On this reading, rule utilitarianism is
not act utilitarianism plus a detour, because the constraint is not "which rule would be
best if perfectly applied" but "which rule would be best given how people actually apply
rules". Brad Hooker's later work develops exactly this line, building expected acceptance
costs into the test.

Whether that defence works is still open. What is not open is that the choice between the
two positions is a choice about how much you trust your own judgement in the moment when
it favours you.

## The problem

Kwame is a duty pharmacist on a Sunday.

A woman comes in with a repeat prescription that expired eight days ago. It is for her
son's anti-seizure medication. The prescriber is on leave, the out-of-hours service has a
six-hour queue, and the boy takes his next dose at four.

Kwame knows the family. He knows the diagnosis. He knows, with as much confidence as he
knows anything professional, that dispensing is medically correct, that the prescription
will be reissued on Tuesday, and that a seizure this afternoon could cost the boy a great
deal.

He also knows the rule. It is not a guideline. It exists because pharmacists who are
confident they know the patient are exactly the pharmacists who dispense the wrong thing
to the wrong person, and because a profession in which each member decides when the
paperwork is a formality is a profession that has no paperwork. He has sat on the
committee that heard the last such case, and he voted to uphold the sanction.

What makes it hard is not that he cannot tell which act produces more good this afternoon.
He can. It is that his reasons for being certain are indistinguishable, from the inside,
from the reasons the pharmacist he sanctioned had for being certain — and that the only
difference he can point to is that this time it is his own judgement doing the reassuring.

## The questions

**1. The deathbed promise.** No will, no witnesses, a comfortable daughter, and a charity
the money would keep alive for three years.

- Give it to the charity. The promise mattered because keeping promises usually does good.
- Give it to the daughter. The practice survives only if people keep promises unobserved.
- Give it to the daughter. You gave your word to a man who trusted you.
- Anyone who can reason out of a deathbed promise in an afternoon has a talent to fear.

**2. Rule worship.** The triage protocol requires arrival order; departing tonight would
save one more life.

- Depart. Following it here is loyalty to a document rather than to patients.
- Follow it. A protocol everyone departs from when they disagree is not a protocol.
- Follow it. Patients are entitled to known rules, not one doctor's assessment.
- Depart, and report it immediately. Exceptions must be visible.

**3. The collapse.** "Keep promises except where breaking them does more good" is a better
rule than "keep promises" — and prescribes what an act utilitarian would do.

- The critic is right; the distinction collapses.
- The refinement is unavailable — rules must be teachable and checkable.
- The collapse only threatens rules justified by outcomes. Justify them otherwise.
- A theory this easily rewritten into its opposite is not telling you much.

**4. The lawn.** Eleven thousand people could cross; yours does no measurable damage; if
all cross it is destroyed.

- Cross. Your act does no harm.
- Do not. Taking the benefit while declining the burden is unfair to everyone else.
- Do not. You would be making an exception of yourself.
- Cross, and notice you have built the argument that empties every commons.

## Reading your answer

**This Act, These Consequences.** You will not let a rule stand between you and a better
outcome you can see, and Smart's charge of rule worship is one you are entitled to press.
Your exposure is not error in the individual case — you may well be right each time. It is
that the practices which make the good outcomes possible are constituted by not being
reopened, and your method reopens them as a matter of policy.

**The Practice, Not the Instance.** You evaluate the rule rather than the act, and you take
seriously that rules are applied by tired, partial, fallible people. This handles
free-riding and coordination better than anything else on offer. Lyons's collapse
objection is the one you owe an answer to, and the only answer that has held up is that the
refined rule is not a real option — which means your position depends on a claim about
human limitation rather than about value.

**A Debt, Not a Calculation.** You hold that a promise binds because it was given. This is
the one position the collapse argument cannot reach, since your rules were never
instruments in the first place. What you must be willing to say, and mean, is that the word
holds in the case built to make it cost you — and it is worth knowing whether you have ever
actually been in one.

**Watch Who Is Doing the Reasoning.** You look at the arguer rather than the argument, and
you treat the ease of the exception as evidence about the person finding it. Neither formal
position has a good reply to this. What it does not give you is a way to tell the genuine
exception from the self-serving one, and there are genuine exceptions — the boy's
medication is due at four.

## Sources

- John Stuart Mill, *Utilitarianism* (1863), chapter 2 — the discussion of secondary
  principles that both sides claim.
- J. O. Urmson, "The Interpretation of the Moral Philosophy of J. S. Mill", *Philosophical
  Quarterly* 3(10) (1953), 33–39 — the rule-utilitarian reading of Mill.
- J.J.C. Smart, "Extreme and Restricted Utilitarianism", *Philosophical Quarterly* 6(25)
  (1956), 344–354 — the rule worship charge.
- Richard B. Brandt, *Ethical Theory*, Prentice-Hall (1959) — where the terms "act" and
  "rule" utilitarianism are fixed.
- David Lyons, *Forms and Limits of Utilitarianism*, Clarendon Press (1965) — the collapse
  argument.
- J.J.C. Smart and Bernard Williams, *Utilitarianism: For and Against*, Cambridge
  University Press (1973) — Smart's mature statement and Williams's reply.
