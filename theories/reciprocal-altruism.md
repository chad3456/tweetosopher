---
id: reciprocal-altruism
title: Reciprocal Altruism
category: theory
tradition: evolutionary-ethics
philosophers:
  - Robert Trivers
era: "1971"
tags: [evolution, cooperation, gratitude, cheating, self-interest, reciprocity]
sources:
  - author: Robert L. Trivers
    title: "The Evolution of Reciprocal Altruism"
    published: "Quarterly Review of Biology 46(1), 35–57"
    year: 1971
  - author: Gerald S. Wilkinson
    title: "Reciprocal food sharing in the vampire bat"
    published: "Nature 308, 181–184"
    year: 1984
  - author: Tim Clutton-Brock
    title: "Cooperation between non-kin in animal societies"
    published: "Nature 462, 51–57"
    year: 2009
  - author: Peter Hammerstein
    title: "Why is reciprocity so rare in social animals? A protestant appeal"
    published: "in Genetic and Cultural Evolution of Cooperation, MIT Press, 83–93"
    year: 2003
  - author: Richard Dawkins
    title: The Selfish Gene
    published: Oxford University Press
    year: 1976
  - author: G. E. Moore
    title: Principia Ethica
    published: Cambridge University Press
    year: 1903
questions:
  - id: q1
    prompt: >-
      A colleague covered for you twice in a bad year, at real cost to herself. She has
      now asked you to sign off on something you think is a mistake — not dishonest, but
      wrong. Refusing will end the arrangement, and she will know why.
    options:
      - id: a
        label: >-
          Refuse. What you owe her is honesty, and a debt that can buy your judgement was
          never a friendship, it was a purchase.
        scores: { deontological: 0.9, virtue: 0.5, certainty: 0.5 }
      - id: b
        label: >-
          Sign. Relationships run on returned favours, and someone who takes and does not
          give is correctly dropped by everyone who notices.
        scores: { egoist: 0.9, contractarian: 0.4, scope: -0.6 }
      - id: c
        label: >-
          Refuse, and tell her exactly why, and expect to pay for it. The point of what
          she did was that it was not a loan, and you are honouring that by not treating
          it as one.
        scores: { virtue: 1.0, care: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          Weigh what the mistake actually costs. If it is small, sign it, because a
          working alliance produces more good over ten years than one correct memo.
        scores: { consequentialist: 1.0, scope: 0.4, agency: 0.4 }
  - id: q2
    prompt: >-
      Trivers argued that gratitude, guilt, indignation and the urge to punish cheats
      are engineering — feelings built by selection to make reciprocity stable. Suppose
      that is broadly true of your own gratitude.
    options:
      - id: a
        label: >-
          Then gratitude is a bookkeeping emotion, and knowing that should make you
          less impressed by it in yourself and in other people.
        scores: { egoist: 0.8, nihilist: 0.3, affect: -0.7 }
      - id: b
        label: >-
          Then nothing changes. Where a feeling came from is a different question from
          whether it is tracking something real, and gratitude tracks something real.
        scores: { deontological: 0.8, virtue: 0.5, certainty: 0.6 }
      - id: c
        label: >-
          Then be glad of it. A creature that can be bound by feeling rather than by
          contract can be trusted where no contract could reach, and that is not a
          second-best.
        scores: { virtue: 1.0, care: 0.4, affect: 0.7 }
      - id: d
        label: >-
          Then build institutions that do not depend on it. Selection tuned these
          feelings for villages, and you deal daily with strangers.
        scores: { contractarian: 1.0, consequentialist: 0.4, scope: 0.6 }
  - id: q3
    prompt: >-
      You have discovered that a supplier your firm has dealt with for twenty years has
      been quietly underpaying its own staff. Ending the relationship costs you a great
      deal and helps the staff not at all — the firm will simply be replaced by a worse one.
    options:
      - id: a
        label: >-
          End it anyway. Continuing to trade is continuing to endorse, and what you
          endorse is not decided by whether it works.
        scores: { deontological: 1.0, agency: 0.5, certainty: 0.7 }
      - id: b
        label: >-
          Stay, and use the leverage twenty years of dealing has bought you. The
          relationship is the only instrument anyone has here.
        scores: { consequentialist: 1.0, virtue: 0.4, scope: 0.5 }
      - id: c
        label: >-
          Stay, and be honest that you are staying because it suits you. Long
          relationships are how firms survive, and pretending otherwise is worse than
          the arrangement.
        scores: { egoist: 1.0, certainty: 0.3, scope: -0.7 }
      - id: d
        label: >-
          Take it to the industry body and make it a rule that binds everyone, so no
          firm is punished for being the one that stopped first.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.3 }
  - id: q4
    prompt: >-
      If cooperation exists because cooperators out-reproduced defectors, does anything
      follow about whether you should cooperate with someone who can never repay you and
      whom nobody is watching?
    options:
      - id: a
        label: >-
          No. The evolutionary story explains why the impulse exists; it has nothing to
          say about what is owed, and treating it as a guide is a plain category error.
        scores: { deontological: 0.9, certainty: 0.7, affect: -0.4 }
      - id: b
        label: >-
          Yes, and the answer is no obligation. Once you see reciprocity is a trade,
          one-way transfers to strangers are charity, not duty.
        scores: { egoist: 1.0, scope: -0.9 }
      - id: c
        label: >-
          Yes, and the answer is that you should help. The capacity was built for small
          groups but it is not confined to them, and extending it is the whole moral project.
        scores: { consequentialist: 0.8, care: 0.4, scope: 1.0 }
      - id: d
        label: >-
          It follows that you should be the sort of person who helps, which is not the
          same as calculating each case. Character is what selection actually built.
        scores: { virtue: 1.0, affect: 0.6, certainty: -0.4 }
outcomes:
  - id: the-ledger
    dominant: egoist
    label: The Ledger Is Real
    text: >-
      You think the honest description of most cooperation is exchange, and that dressing
      it as selflessness makes people worse at both keeping their agreements and knowing
      when they have been used. Trivers would largely agree with your description. The
      difficulty is what happens when the ledger runs out — the person who cannot repay,
      the stranger nobody is watching, the future generation with nothing to offer you.
      A theory that has nothing to say there is silent in most of the cases that made
      anyone want a moral theory.
    base_rate: null
  - id: the-agreement
    dominant: contractarian
    label: Make It a Rule Instead
    text: >-
      You draw the practical conclusion: if cooperation is stable only where people can
      watch and remember each other, then in a world of strangers we must build what
      instinct will not supply — contracts, regulators, reputational systems, industry
      standards nobody can undercut by defecting first. This is the reasoning behind most
      functioning institutions. It is weakest where enforcement is impossible and someone
      simply has to be decent unobserved, which is more of life than institutional design
      likes to admit.
    base_rate: null
  - id: not-a-guide
    dominant: deontological
    label: Origins Are Not Reasons
    text: >-
      You hold the line G. E. Moore drew: a causal account of why we have an impulse
      cannot tell us whether to follow it, and no amount of biology will yield an ought.
      This protects you from every attempt to launder a preference as a natural fact,
      which is a genuine and recurring danger. The cost is that you have insulated your
      duties from evidence entirely, and you now owe an account of where they do come
      from that does not simply assert them.
    base_rate: null
  - id: the-character
    dominant: virtue
    label: The Creature That Can Be Bound
    text: >-
      Your interest is in what the feelings make of the person who has them. You take
      gratitude and guilt as real bonds rather than as accounting, and you would rather be
      someone who helps than someone who calculates each case correctly. That is probably
      the better description of how trust actually works. What it costs you is the ability
      to answer the person who says your generosity is a well-disguised strategy, since on
      your own account it would feel exactly the same from inside either way.
    base_rate: null
  - id: the-extension
    dominant: consequentialist
    label: Extend the Circle
    text: >-
      You treat reciprocity as a starting mechanism rather than a boundary — the capacity
      evolved among people who could repay, but nothing confines it to them, and the moral
      work is widening it. This is the most ambitious reading and the one with the best
      historical record behind it. Its exposure is that you are asking a mechanism built
      to track debts to operate where there are none, and the evidence that it holds up
      under strain is thinner than the ambition requires.
    base_rate: null
---

## What it means

Robert Trivers's 1971 paper "The Evolution of Reciprocal Altruism", published in the
*Quarterly Review of Biology*, set out to solve a problem that had embarrassed evolutionary
theory for a century. Natural selection favours whatever leaves more descendants. Helping
another organism at a cost to yourself leaves fewer. So why does anyone help?

W. D. Hamilton had answered part of the question for relatives: help kin and you help
copies of your own genes. Trivers answered a different part. If two individuals meet
repeatedly, if each can help the other at low cost when the benefit to the recipient is
high, and if each can detect and refuse to help a partner who has failed to reciprocate,
then a disposition to help can be favoured by selection. You give when giving is cheap and
receive when receiving is precious, and over a lifetime both of you come out ahead. The
conditions are demanding: long life, low dispersal, repeated interaction, and above all
the ability to recognise individuals and remember what they did.

The part of Trivers's paper that made it a work of moral psychology rather than only of
biology is the second half. He argued that a system of delayed exchange creates enormous
pressure to cheat, which creates counter-pressure to detect cheating, which creates
pressure for subtler cheating — and that the human emotional repertoire is the residue of
this arms race. **Gratitude** calibrates how much you owe. **Guilt** repairs a defection
before the partner drops you. **Moralistic aggression** — the hot, disproportionate fury
at someone who took and did not give — punishes cheats at a cost the cheat must factor in.
**Trust**, **suspicion** and **the sense of fairness** are all, on this account, parts of
one machine. Richard Dawkins popularised the picture in *The Selfish Gene* (1976).

## What it suggests

The unsettling implication is not that people are secretly selfish. Trivers's point is
subtler and harder: the feelings really are feelings, and they really do move people to
act against their immediate interest. The self-interest is in the design, not in the
motive. A person who helps a friend at cost is not calculating; the mechanism that built
her was.

If you accept this, one thing follows immediately about institutions. Reciprocity is
stable only where the conditions hold — repeat encounters, recognisable individuals,
memory of past behaviour. Modern life mostly violates them. You deal with strangers you
will never meet again, through firms whose staff rotate, at distances where nobody can see
what you did. That is a reason to expect instinct to fail and a reason to build what
instinct will not supply: contracts, licensing, credit records, audit, reputation systems.
Much of the machinery of a commercial society is an attempt to manufacture the small
village artificially.

Two objections deserve their weight.

The first is philosophical and old. G. E. Moore's *Principia Ethica* (1903) named the move
from *this is how we came to be* to *this is how we should be* as a fallacy, and no amount
of detail in the evolutionary story closes that gap. Trivers himself made no claim to be
doing ethics. Readers regularly make it for him.

The second is empirical and comes from inside biology. Clear cases of reciprocal altruism
in non-human animals have proved surprisingly hard to find. Wilkinson's vampire bats,
reported in *Nature* in 1984, remain the textbook example, and even that case has been
argued to involve kinship and by-product benefits rather than pure reciprocity. Peter
Hammerstein asked in 2003 why reciprocity is so rare in social animals if the theory is
right, and Tim Clutton-Brock argued in *Nature* in 2009 that most apparent non-kin
cooperation in animals is better explained by mutualism, manipulation or shared interest
than by delayed exchange. The theory's standing as an account of *human* cooperation is
much stronger than its standing as a general biological principle, which is close to the
opposite of how it is usually cited.

## The problem

You run a small architectural practice with four employees, and Marek has been your
structural engineer for eleven years.

When your firm nearly folded in 2019, Marek carried three months of work unbilled and
never mentioned it again. When his marriage collapsed, you kept him on retainer through a
year in which he produced very little. Neither of you has ever described any of this as a
debt.

Last week you found an error in his calculations on a school extension — not dangerous,
but the kind of thing that means the drawings need redoing at a cost he cannot absorb and
you can barely absorb. He has asked you, in the least direct way possible, whether the
sign-off could go through as it stands. He is not asking you to endanger anyone; the
margin is real, if thinner than the standard requires. He is asking you to treat eleven
years as worth something.

You have realised, sitting with it, that you cannot tell whether the reluctance you feel
is integrity or self-protection, and that you cannot tell whether the pull towards saying
yes is loyalty or the ledger.

## The questions

**1. The favour called in.** A colleague who covered for you twice asks you to sign off on
something you think is a mistake.

- Refuse. A debt that can buy your judgement was a purchase, not a friendship.
- Sign. Relationships run on returned favours, and takers get dropped.
- Refuse, tell her why, and expect to pay for it. What she did was not a loan.
- Weigh what the mistake actually costs. A working alliance outproduces one correct memo.

**2. Gratitude as engineering.** Trivers holds that gratitude, guilt and indignation are
built to make reciprocity stable.

- Then gratitude is bookkeeping, and you should be less impressed by it.
- Then nothing changes. Where a feeling came from is not whether it tracks something real.
- Then be glad of it. A creature bindable by feeling can be trusted where no contract reaches.
- Then build institutions that do not depend on it. These feelings were tuned for villages.

**3. The old supplier.** A twenty-year supplier underpays its staff. Leaving costs you
much and helps them nothing.

- End it anyway. Trading is endorsing.
- Stay and use the leverage twenty years bought. The relationship is the only instrument.
- Stay, and be honest that it suits you.
- Take it to the industry body so no firm is punished for stopping first.

**4. The stranger who cannot repay.** Does the evolutionary story tell you anything about
helping someone who can never return it, unobserved?

- No. It explains the impulse and says nothing about the obligation.
- Yes, and the answer is no obligation. One-way transfers are charity, not duty.
- Yes, and the answer is that you should help. Extending the capacity is the moral project.
- It follows that you should be the sort of person who helps, not the sort who calculates.

## Reading your answer

**The Ledger Is Real.** You describe cooperation as exchange and refuse to be sentimental
about it, which makes you clear-eyed about being used and reliable about your own
obligations. Trivers would not contradict your description. The question you have to face
is what you say to the person who cannot repay — the very old, the very poor, the person
who will exist in eighty years — because on your account they have no standing at all,
and that is most of what moral theories were invented to talk about.

**Make It a Rule Instead.** You conclude that if instinct only works in villages, then
strangers need architecture: enforceable standards, industry-wide rules, records that
outlast individuals. Almost every functioning institution is built on this thought. It is
weakest exactly where enforcement cannot reach, and someone has to be decent with nobody
watching.

**Origins Are Not Reasons.** You keep biology out of the normative question, and you are
right that no amount of natural history yields an obligation. That defence has stopped a
great many bad arguments. The cost is that you have made your duties immune to evidence,
and you owe an account of their source that does not just repeat that they are duties.

**The Creature That Can Be Bound.** You care about what the feelings make of the person,
and you would rather be dependable than correct case by case. That is likely the truer
description of how trust actually works. Its price is that you cannot answer the person who
says your loyalty is a strategy in disguise, since on your own account it would feel
identical from inside.

**Extend the Circle.** You take reciprocity as a beginning rather than a boundary, and you
want the machinery built for neighbours to run for strangers. Historically, that has been
the direction of moral progress. The exposure is that you are asking a debt-tracking
mechanism to operate where there are no debts, and it is not obvious it holds under strain.

## Sources

- Robert L. Trivers, "The Evolution of Reciprocal Altruism", *Quarterly Review of Biology*
  46(1) (1971), 35–57.
- Gerald S. Wilkinson, "Reciprocal food sharing in the vampire bat", *Nature* 308 (1984),
  181–184 — the standard empirical example, itself contested.
- Peter Hammerstein, "Why is reciprocity so rare in social animals? A protestant appeal",
  in *Genetic and Cultural Evolution of Cooperation* (MIT Press, 2003), 83–93.
- Tim Clutton-Brock, "Cooperation between non-kin in animal societies", *Nature* 462
  (2009), 51–57 — the case that animal reciprocity is largely better explained otherwise.
- Richard Dawkins, *The Selfish Gene* (Oxford University Press, 1976) — the popularisation.
- G. E. Moore, *Principia Ethica* (Cambridge University Press, 1903) — the naturalistic
  fallacy, and the reason the biology settles nothing normative on its own.
