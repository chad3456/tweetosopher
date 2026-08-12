---
id: felicific-calculus
title: The Felicific Calculus
category: principle
tradition: utilitarianism
philosophers:
  - Jeremy Bentham
era: "1789"
tags: [measurement, hedonism, commensurability, policy, quantification]
sources:
  - author: Jeremy Bentham
    title: An Introduction to the Principles of Morals and Legislation
    published: "chapter IV, 'Value of a Lot of Pleasure or Pain, How to be Measured'"
    year: 1789
  - author: Lionel Robbins
    title: An Essay on the Nature and Significance of Economic Science
    published: Macmillan, London
    year: 1932
  - author: Elizabeth Anderson
    title: Value in Ethics and Economics
    published: Harvard University Press
    year: 1993
  - author: John Broome
    title: "Weighing Lives"
    published: Oxford University Press
    year: 2004
  - author: James Griffin
    title: "Well-Being: Its Meaning, Measurement and Moral Importance"
    published: Oxford University Press
    year: 1986
questions:
  - id: q1
    prompt: >-
      Your hospital trust uses a standard measure that converts treatments into
      quality-adjusted life years, so a hip replacement and a cancer drug can be
      compared on one scale. A consultant objects that a year of her patient's
      life is not the same kind of thing as a year of someone's mobility, and
      that the scale is inventing a comparison rather than finding one.
    options:
      - id: a
        label: >-
          Keep the scale. You are choosing between them either way; the only
          question is whether the comparison is written down and challengeable.
        scores: { consequentialist: 1.0, certainty: 0.4, affect: -0.5 }
      - id: b
        label: >-
          The consultant is right. Forcing incomparable goods onto one axis does
          not measure a truth, it manufactures one and then defers to it.
        scores: { virtue: 0.8, deontological: 0.4, certainty: -0.5 }
      - id: c
        label: >-
          Keep the scale but treat it as a rough instrument that clinical
          judgement may override, not as the decision itself.
        scores: { consequentialist: 0.7, virtue: 0.5, certainty: -0.7 }
      - id: d
        label: >-
          Some claims should be settled before the scale is applied at all —
          nobody dying now should lose to an aggregate of mild improvements.
        scores: { deontological: 0.9, care: 0.4, scope: -0.3 }
  - id: q2
    prompt: >-
      Bentham's dimensions include propinquity — how near in time a pleasure or
      pain is. Your council can spend a fixed sum insulating homes, which saves a
      known set of residents from cold this winter, or on flood defences that
      will spare a larger but unidentified set of people forty years from now.
    options:
      - id: a
        label: >-
          Defences. Distance in time is not distance in importance; a person in
          2065 can suffer exactly as much as a person this winter.
        scores: { consequentialist: 1.0, scope: 1.0 }
      - id: b
        label: >-
          Insulation. Near-term good is knowable and the far forecast is a guess;
          discounting the future is honesty about uncertainty, not selfishness.
        scores: { consequentialist: 0.8, certainty: -0.6, scope: -0.4 }
      - id: c
        label: >-
          Insulation, because the people who pay the tax are the people who are
          cold, and a council owes its own residents first.
        scores: { care: 0.9, contractarian: 0.4, scope: -0.8 }
      - id: d
        label: >-
          Defences, because leaving a foreseeable catastrophe for others to meet
          is a wrong regardless of how the sums come out.
        scores: { deontological: 0.8, scope: 0.7, certainty: 0.4 }
  - id: q3
    prompt: >-
      A regulator must price a safety measure. The standard method assigns a
      monetary value to a statistical life so that costs and benefits share one
      unit. A campaigner says putting a number on a life is already the wrong
      act, whatever number you pick.
    options:
      - id: a
        label: >-
          Put the number on it. Refusing to price safety does not save lives; it
          hides where you stopped spending and why.
        scores: { consequentialist: 1.0, authority: -0.3, affect: -0.6 }
      - id: b
        label: >-
          The campaigner is right that pricing changes what the thing is, even if
          she has no better procedure to offer.
        scores: { virtue: 0.9, deontological: 0.5 }
      - id: c
        label: >-
          Price it, but by asking what risk people actually accept for what pay —
          then the number is their valuation, not the regulator's.
        scores: { contractarian: 0.9, consequentialist: 0.5, authority: 0.4 }
      - id: d
        label: >-
          Price it and expect the number to be wrong. A wrong number you can
          argue about beats a silence you cannot.
        scores: { consequentialist: 0.8, certainty: -0.8 }
  - id: q4
    prompt: >-
      Bentham's list ends with extent — the number of persons affected. A
      streaming service can tune its algorithm to maximise total hours of mild
      enjoyment across sixty million users, or to serve a smaller number of
      people something they will still be thinking about in ten years.
    options:
      - id: a
        label: >-
          Maximise the total. Sixty million people mildly pleased is more
          pleasure than six hundred thousand deeply moved, and it is their time.
        scores: { consequentialist: 1.0, scope: 0.8, authority: 0.4 }
      - id: b
        label: >-
          Serve the smaller number. A pleasure that leaves nothing behind is not
          the same good in a larger quantity; it is a different and lesser good.
        scores: { virtue: 0.9, consequentialist: 0.3, authority: -0.4 }
      - id: c
        label: >-
          Neither is the company's call. Give people the controls and let the
          distribution fall where their own choices put it.
        scores: { contractarian: 0.9, egoist: 0.3, authority: 0.6 }
      - id: d
        label: >-
          Maximising engagement across sixty million people is a wrong to each of
          them, whatever the aggregate says, because none of them asked for it.
        scores: { deontological: 0.9, contractarian: 0.4, scope: 0.3 }
outcomes:
  - id: the-ledger
    dominant: consequentialist
    label: Write the Number Down
    text: >-
      You would rather have an explicit and contestable measure than an implicit
      and unexaminable one. This is the calculus's real defence: the choice
      between a hip and a heart is being made anyway, and a hidden weighting is
      not a purer weighting, only an unaccountable one. What you carry is the
      measure's own distortions. A scale registers what it can register, and
      everything it cannot count effectively becomes worth zero — not because
      anyone decided that, but because nobody had a column for it.
    base_rate: null
  - id: the-incommensurable
    dominant: virtue
    label: Not Everything Is On One Axis
    text: >-
      You hold that some goods are not more or less of the same stuff, and that
      pressing them onto a single scale invents a comparison rather than
      discovering one. You are in good philosophical company; Elizabeth Anderson
      and James Griffin have both argued that plural values resist the reduction
      Bentham needed. The bill comes when a decision must be made anyway. If the
      goods cannot be compared, the choice between them is not thereby avoided —
      it is only made without a stated reason.
    base_rate: null
  - id: the-uncounted
    dominant: deontological
    label: Claims Before Counting
    text: >-
      You think some claims are settled before the arithmetic starts — that a
      person dying now does not enter a queue behind an aggregate of small
      improvements, and that maximising across people who did not ask is a wrong
      to each of them. This protects exactly what the calculus is worst at
      protecting. Its difficulty is scarcity: when several such claims compete
      and the resource is fixed, "this one is not to be counted" cannot be said
      of all of them, and you are back to weighing.
    base_rate: null
  - id: their-own-valuation
    dominant: contractarian
    label: Ask Them What It Is Worth
    text: >-
      You solve the measurement problem by handing it back — the value of a risk
      is whatever the people bearing it will accept to bear it, and the value of
      an hour is whatever they choose to do with it. This makes the numbers real
      rather than assigned, and it removes the analyst's thumb from the scale.
      What it does not remove is the constraint people are choosing under. A
      valuation extracted from someone with no alternatives records their
      situation, and you will have written it down as their preference.
    base_rate: null
  - id: the-near-ones
    dominant: care
    label: The People Who Are Here
    text: >-
      You weight the near and the known, and you think a body that taxes its own
      residents owes them before it owes a distribution. That tracks how
      obligation is actually felt and how it is actually enforced. Its exposure
      is that the largest goods and harms available to any modern institution
      fall on people it will never meet, and a principle that discounts them
      steeply will discount almost everything that matters most.
    base_rate: null
---

## What it means

In chapter IV of *An Introduction to the Principles of Morals and Legislation* (1789),
Bentham does something none of his predecessors had attempted: he sets out a procedure.

If pleasure and pain are the only things that finally matter, and if the right act is the
one producing the greatest balance of the first over the second, then a legislator needs
to know how to compare one lot of pleasure with another. Bentham lists the dimensions
along which they vary. Taken by itself, a pleasure or pain has an **intensity**, a
**duration**, a **certainty** (how likely it is to occur) and a **propinquity** (how soon).
Considered as a cause of further consequences it has **fecundity** — its tendency to be
followed by more of the same kind — and **purity**, its tendency not to be followed by
sensations of the opposite kind. And when the question is a public one, a seventh
dimension is added: **extent**, the number of persons affected.

The procedure then is mechanical in outline. Take each person affected. Sum their
pleasures, sum their pains, take the balance. Do this for everyone, sum across persons,
and the sign of the result tells you whether the act tends to the general good. Bentham
even supplied a mnemonic verse — "Intense, long, certain, speedy, fruitful, pure — such
marks in pleasures and in pains endure" — which tells you he expected it to be used by
people who were not philosophers.

Bentham was not naive about this. He says explicitly that the process is not to be
strictly pursued before every moral judgement, and that it should be kept in view "as
near as the process actually pursued on these occasions approaches to it". The calculus is
an ideal that real reasoning approximates, in the way a set of accounts is an ideal that a
running business approximates. What he did insist on is that this is the *kind* of thing
moral reasoning is: additive, quantitative, and in principle open to anyone's inspection.

## What it suggests

The calculus's most important consequence is procedural rather than substantive. It makes
moral disagreement into something you can audit. If we differ about a policy, we can ask
which dimension we differ on — is it that you think the harm less intense, or less likely,
or falling on fewer people? — and that is a question evidence can sometimes settle. Almost
every institution now weighing lives at scale works this way, whether or not it credits
Bentham: cost-benefit analysis, quality-adjusted life years, the value of a statistical
life, insurance pricing, triage protocols. The calculus is not a historical curiosity. It
is the operating logic of the modern administrative state.

The objections are correspondingly serious, and they come in three layers.

The first is **measurement**. There is no unit of pleasure, and Bentham's dimensions
interact — is a brief agony worse than a long ache, and how much? Any actual application
has to fix trade-off rates that the theory does not supply.

The second is **interpersonal comparison**. Even granting a scale within one life, summing
across persons requires that your pleasure and mine be denominated in the same currency.
Lionel Robbins argued in 1932 that such comparisons have no scientific content, which
pushed welfare economics for decades toward criteria that avoid them. Sophisticated
defences exist — John Broome's *Weighing Lives* (2004) is one sustained attempt — but this
is not a settled question, and it is the hinge on which "greatest number" turns.

The third is deepest: **commensurability**. Elizabeth Anderson and James Griffin have each
argued that goods differ in kind and not merely in quantity, and that a single scale does
not measure a pre-existing fact about their relative worth but imposes one. On this view
the calculus does not find the answer; it manufactures an answer and then treats it with
the deference owed to a discovery.

The strongest reply is uncomfortable for the critic. The trust still has to choose between
the hip and the cancer drug. Refusing to score them does not decline the trade-off; it
only moves it somewhere unwritten, where it will be made by whoever is loudest or nearest
or best represented. A bad measure is contestable in a way that a tacit judgement is not.
Whether that reply is enough depends on how much you think a written number, once
written, starts to do the deciding on its own.

## The problem

Priya is the analyst for a city that has one budget line left and three bids for it.

The first is a set of pedestrian crossings outside four primary schools. The traffic model
predicts, over twenty years, "0.7 prevented fatalities" and around forty prevented
injuries, most of them minor. No one will ever know which child it was.

The second is a specialist palliative unit. It saves nobody. It converts the last eleven
weeks of roughly ninety people's lives per year from something their families describe as
unbearable into something they describe as bearable. On the standard scale it scores
poorly, because the scale measures years and this buys almost none.

The third is a bridge repair. The engineers put the probability of failure within a decade
at somewhere between one in two hundred and one in two thousand — they will not narrow it
— and failure means an unknown number of deaths, plausibly dozens.

Priya's model can produce a number for all three. She knows how it will do it: the
crossings will win, because the model is built to count prevented death-years, and that is
what crossings produce. She also knows the palliative unit is the one her own family
needed, and that the bridge is the one that would end her career if it fell.

The calculus tells her to sum intensity, duration, certainty, propinquity, fecundity,
purity and extent. It does not tell her what to do when the instrument that performs the
sum was built by someone who had already decided which of these things counts.

## The questions

**1. One scale for the hip and the cancer drug.** A consultant objects that the measure
invents a comparison rather than finding one.

- Keep the scale. You are choosing anyway; the only question is whether it is written down.
- The consultant is right; a manufactured comparison is not a discovered one.
- Keep it as a rough instrument that judgement may override.
- Some claims should be settled before the scale is applied at all.

**2. Propinquity.** Insulation for known residents this winter, or flood defences for more
people in forty years.

- Defences. Distance in time is not distance in importance.
- Insulation. Discounting the future is honesty about uncertainty.
- Insulation. A council owes its own residents first.
- Defences. Leaving a foreseeable catastrophe to others is a wrong regardless of the sums.

**3. The value of a statistical life.** A campaigner says pricing a life is already the
wrong act.

- Put the number on it; refusing only hides where you stopped spending.
- She is right that pricing changes what the thing is.
- Price it by what risk people actually accept for what pay.
- Price it and expect it to be wrong. A wrong number beats a silence.

**4. Extent.** Sixty million people mildly pleased, or a smaller number deeply moved.

- Maximise the total; it is their time and there is more pleasure in it.
- Serve the smaller number; a pleasure that leaves nothing behind is a different good.
- Neither is the company's call — give people the controls.
- Maximising across sixty million who did not ask wrongs each of them.

## Reading your answer

**Write the Number Down.** You prefer an explicit measure you can argue with to an
implicit one you cannot see. That is the calculus's genuine strength and it is stronger
than its critics usually allow. Your exposure is that any scale silently zeroes what it
has no column for, and the things without columns — dignity, grief, the character of a
death — are not obviously the least important things on the list.

**Not Everything Is On One Axis.** You hold that goods differ in kind, and you decline to
pretend otherwise for the convenience of a spreadsheet. The pressure on you is practical
rather than philosophical: the choice still has to be made, and a decision made without a
stated comparison is not a decision that avoided comparing. It is one whose comparison
cannot be inspected.

**Claims Before Counting.** You think some claims are prior to the arithmetic. This
protects exactly what aggregation is worst at protecting, and it explains why maximising
across people who never consented feels like a wrong done to each rather than a suboptimal
total. Scarcity is where it strains: when three such claims compete for one budget, you
cannot exempt all of them, and the exemption you grant will need a reason that looks a
great deal like weighing.

**Ask Them What It Is Worth.** You return the valuation to the people who bear the risk.
This is the most defensible answer to "who decided this number", and it is how most real
safety pricing is done. What it inherits is the background: a wage-risk trade-off made by
someone with no other job available is a fact about their options, and your method will
have recorded it as their considered price.

**The People Who Are Here.** You weight the near, the known and the ones who paid in.
This matches how obligations are actually experienced and enforced. Its cost is that the
largest effects any institution has now fall on people it will never meet, and steep
discounting of the distant will discount most of what your decisions actually do.

## Sources

- Jeremy Bentham, *An Introduction to the Principles of Morals and Legislation* (1789),
  chapter IV, "Value of a Lot of Pleasure or Pain, How to be Measured" — the seven
  dimensions and the mnemonic verse.
- Lionel Robbins, *An Essay on the Nature and Significance of Economic Science*, Macmillan
  (1932) — the argument that interpersonal comparisons of utility have no scientific
  content.
- John Broome, *Weighing Lives*, Oxford University Press (2004) — a sustained modern
  attempt to make aggregation across persons rigorous.
- Elizabeth Anderson, *Value in Ethics and Economics*, Harvard University Press (1993) —
  the case that goods are plural and that valuing them alike changes what they are.
- James Griffin, *Well-Being: Its Meaning, Measurement and Moral Importance*, Oxford
  University Press (1986) — on whether well-being admits of a single measure.
