---
id: sorites-paradox
title: The Sorites Paradox
category: paradox
tradition: classical-greek
philosophers:
  - Eubulides of Miletus
era: "c. 350 BCE"
tags: [vagueness, thresholds, slippery-slope, aggregation, corruption]
sources:
  - author: Diogenes Laertius
    title: "Lives of the Eminent Philosophers, Book II"
    published: "3rd century CE; the report attributing the paradox to Eubulides of Miletus"
  - author: Cicero
    title: Academica
    published: "45 BCE; the earliest surviving sustained discussion of the sorites, II.92–94"
  - author: Timothy Williamson
    title: Vagueness
    published: Routledge
    year: 1994
  - author: Rosanna Keefe
    title: Theories of Vagueness
    published: Cambridge University Press
    year: 2000
  - author: Derek Parfit
    title: Reasons and Persons
    published: "Oxford University Press, Part One, chapter 3, on imperceptible harms"
    year: 1984
questions:
  - id: q1
    prompt: >-
      Eleven years ago you rounded a taxi fare up by three pounds. Since then the
      roundings have grown, always by an amount that would have looked absurd to make a
      fuss about. Last month it was four hundred. On which claim did you become dishonest?
    options:
      - id: a
        label: >-
          On the first one. Either the money was yours or it was not, and nothing about
          the size of the step changes which of those it was.
        scores: { deontological: 1.0, certainty: 0.8, agency: 0.4 }
      - id: b
        label: >-
          There is no such claim, and the question is malformed. What is true is that you
          are dishonest now, and you got here without ever crossing anything.
        scores: { virtue: 1.0, certainty: -0.6 }
      - id: c
        label: >-
          At the point where the harm became real — where someone's budget noticed. Before
          that it was accounting noise, whatever the rule said.
        scores: { consequentialist: 1.0, agency: 0.3, affect: -0.4 }
      - id: d
        label: >-
          At the point your profession would say. These lines are conventions, and a
          convention doing its job is not less binding for being one.
        scores: { relativist: 0.9, contractarian: 0.4, authority: -0.5 }
  - id: q2
    prompt: >-
      Derek Parfit's case: a thousand torturers each turn a dial one thousandth of a
      notch, and no single turn is detectable by the victim, but together they cause
      agony. Your flight, your vote, your purchase are each of this shape. What have you
      done?
    options:
      - id: a
        label: >-
          Your full share of the agony. Imperceptibility is a fact about the victim's
          nerves, not about what you did.
        scores: { consequentialist: 1.0, scope: 0.8, agency: 0.5 }
      - id: b
        label: >-
          Nothing, strictly — and that is exactly why individual morality is the wrong
          instrument here. This needs a rule, enforced on everyone, not a conscience.
        scores: { contractarian: 0.9, deontological: 0.4, scope: 0.5 }
      - id: c
        label: >-
          You joined in. What is wrong is the participation, not the increment, and it
          would still be wrong if your dial were disconnected.
        scores: { virtue: 0.9, deontological: 0.5, agency: 0.4 }
      - id: d
        label: >-
          Nothing you can be held to. A morality that can convict you of an undetectable
          harm can convict you of anything, and will.
        scores: { relativist: 0.6, egoist: 0.4, certainty: 0.5 }
  - id: q3
    prompt: >-
      A committee must set the age at which a person can consent to a surgery with
      lifelong consequences. Nobody thinks a sixteenth birthday changes anyone. Every
      proposed number is arbitrary, and the committee has to pick one.
    options:
      - id: a
        label: >-
          Pick the number and enforce it without exception. An arbitrary line held firmly
          protects more people than a wise line held loosely.
        scores: { deontological: 0.9, certainty: 0.8, authority: -0.5 }
      - id: b
        label: >-
          Assess each person's actual capacity. A rule this crude is guaranteed to be
          wrong about specific children in both directions.
        scores: { consequentialist: 0.9, care: 0.5, certainty: -0.6 }
      - id: c
        label: >-
          The number should be whatever this society can actually live with. There is no
          fact of the matter underneath it and pretending otherwise is theatre.
        scores: { relativist: 1.0, certainty: -0.5 }
      - id: d
        label: >-
          Pick a number, publish the reasoning, and treat it as revisable. The line is
          honest work, not discovery, and it should be visibly that.
        scores: { contractarian: 0.9, relativist: 0.4, certainty: -0.4 }
  - id: q4
    prompt: >-
      A proposal in front of you is genuinely harmless and genuinely useful. Your
      objection is that once it passes there is no principled place to stop the next
      twelve versions of it, each only slightly worse than the last.
    options:
      - id: a
        label: >-
          Oppose it anyway. The absence of a stopping point is the argument; you will not
          find a better place to stand than the one you are standing on.
        scores: { deontological: 1.0, certainty: 0.7, authority: -0.3 }
      - id: b
        label: >-
          Support it. Refusing a real good because of a hypothetical sequence is how you
          pay a certain cost to avoid an imagined one.
        scores: { consequentialist: 1.0, certainty: -0.5 }
      - id: c
        label: >-
          Support it, and build the stopping mechanism into it now — the review, the
          sunset, the thing that forces the next step to be argued from scratch.
        scores: { contractarian: 1.0, consequentialist: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          The real question is what the institution becomes by degrees. Judge the slope by
          the character it produces at the bottom of it, not by the step.
        scores: { virtue: 1.0, certainty: -0.3, affect: 0.4 }
outcomes:
  - id: the-bright-line
    dominant: deontological
    label: The Line Held Anyway
    text: >-
      You hold that a line has to be somewhere, that its arbitrariness is not an argument
      against enforcing it, and that the first small step is already across. This is the
      only position here that cannot be walked down a slope, which is a serious
      advantage: every mechanism of gradual corruption depends on the target agreeing to
      evaluate each step on its own merits. What it costs is the specific cases where your
      line is visibly, painfully wrong — the capable seventeen-year-old, the three-pound
      taxi fare treated as a resigning matter — and you must be willing to pay that
      publicly rather than quietly making exceptions, since a bright line with quiet
      exceptions is just a slope with better branding.
    base_rate: null
  - id: the-aggregate
    dominant: consequentialist
    label: The Sum of Small Things
    text: >-
      You look through the increment to the total. Where the harm is real you count your
      share of it whether or not anyone can feel your contribution, and where the harm is
      nil you decline to be convicted of a technicality. This gets Parfit's case right and
      makes you very hard to fool with the word "negligible". The exposure runs both ways:
      the same reasoning that makes each small contribution count makes each small
      contribution matter almost nothing, and a person who assesses every step by its own
      consequences is exactly the person a long slope is designed for.
    base_rate: null
  - id: the-becoming
    dominant: virtue
    label: What You Became Without Noticing
    text: >-
      You are not much interested in locating the crossing. You think the honest
      description is that a person can be dishonest now, arrived at by a route with no
      moment in it, and that this is a fact about how character is made rather than a
      failure of the question. That is probably the most realistic thing anyone says about
      gradual corruption. It is also the least actionable: it tells you what happened but
      not what to refuse, and "notice what you are becoming" has never yet stopped anyone
      mid-slope, since the whole mechanism of a slope is that the view from each step
      looks fine.
    base_rate: null
  - id: the-convention
    dominant: relativist
    label: The Line as Convention
    text: >-
      You think the search for the true boundary is a category error: heaps, adulthood and
      corruption are our categories, cut where our purposes require, and a line that
      admits it is a convention is more honest than one pretending to be a discovery. This
      is defensible and widely held among philosophers of vagueness. Its price is that it
      is very hard to say from this position why any particular line should bind someone
      who does not share the purposes — and that "it is only a convention" is the first
      sentence of nearly every argument for moving one.
    base_rate: null
  - id: the-rule-we-set
    dominant: contractarian
    label: The Rule We Agree to Draw
    text: >-
      Your instinct is procedural: where no fact settles the boundary, what settles it is
      a decision made properly, published, and open to revision — with the mechanism for
      stopping built in before the first step rather than discovered during the twelfth.
      This handles the aggregation cases better than individual conscience does, because
      it puts the obligation where the causation actually is. Its weakness is that it
      needs a functioning body to do the deciding, and the cases where slopes do the most
      damage are precisely those where the deciding body is on the slope too.
    base_rate: null
  - id: the-particular-child
    dominant: care
    label: The Child, Not the Threshold
    text: >-
      You treat the vagueness as a reason to look harder at the individual rather than to
      argue about where the line falls. A rule crude enough to be administrable is
      guaranteed to be wrong about somebody, and you would rather be answerable to the
      person in front of you than to the boundary. The cost is scale and consistency: case
      by case judgement is exactly what cannot be audited, and the discretion you are
      asking for is the same discretion that lets bias operate unchallenged.
    base_rate: null

---

## What it means

*Soros* is Greek for heap. The paradox is attributed to Eubulides of Miletus, a Megarian
logician of the fourth century BCE better known for the Liar, and it runs like this. One
grain of sand is not a heap. Adding one grain to something that is not a heap never turns it
into a heap. Therefore no number of grains is a heap. Or, run the other way: a million
grains is a heap, removing one grain never destroys a heap, therefore one grain is a heap.

Each premise looks undeniable and the conclusion is absurd. That is the whole of it, and two
and a half thousand years of work have not produced a solution that most philosophers
accept. The reverse form, the *falakros* or bald man, makes the structure obvious: no single
hair is the one whose loss makes a man bald, and yet men go bald.

The paradox is not about sand. It is about every predicate that admits of borderline cases,
which is nearly all of them: tall, red, alive, awake, cruel, corrupt, adult, person, enough.
Cicero, discussing the sorites in the *Academica*, already saw why it mattered to the
Stoics and not just the logicians — if the wise man cannot say where knowledge shades into
opinion, he must at some point either assert something false or stop asserting.

Modern responses fall into three broad families, and it is worth knowing which one you find
tolerable, because they are all uncomfortable. **Epistemicism**, defended at length by
Timothy Williamson in *Vagueness*, holds that there *is* a sharp cut-off — some exact grain
at which the heap begins — and that our inability to locate it is ignorance rather than
indeterminacy. **Degree theories** deny that every statement is simply true or false and let
"this is a heap" be true to a degree, which saves the intuitions at the cost of classical
logic. **Nihilism about vague terms** concludes that predicates like "heap" are incoherent
and strictly speaking apply to nothing. Rosanna Keefe's *Theories of Vagueness* maps the
field; what none of them has produced is a version that leaves everything where you found
it.

## What it suggests

Moral concepts are vague in exactly the sorites way, and the paradox is therefore not a
logician's toy but the structure of some of the hardest practical problems there are.

Three families of case. The first is **gradual corruption**. Nobody wakes up dishonest.
People arrive there by increments each of which was too small to be worth a scene, and the
sorites explains why the standard defence — "show me the day I crossed the line" — is both
unanswerable and worthless. The second is **thresholds in law and medicine**: consent at
sixteen or eighteen, brain death, viability, the blood alcohol number. Everyone involved
knows the line is arbitrary at the margin, and the paradox is why it has to be drawn anyway
and why every drawing of it will be defensible only in bulk. The third is **aggregation**.
Derek Parfit's harmless torturers, in *Reasons and Persons*, put a thousand people at a
thousand dials, each turning one imperceptible notch; the victim is tortured and no
individual did anything anyone could feel. Your flight, your vote, your consumption, your
one extra prescription of antibiotics are all this case.

The strongest objection to making much of any of this is that vagueness is a fact about
language rather than about the world, and importing it into ethics smuggles in a
conclusion. The sorites shows that "heap" has no sharp boundary; it does not show that
morality has no sharp boundaries, and the move from one to the other is the standard
rhetorical use of the paradox by people who would like a particular line moved. It is
noticeable that the argument "there is no principled place to draw it, so you cannot object
to my step" is almost never deployed by whoever is defending the status quo. A related
objection cuts the other way: slippery-slope reasoning built on the sorites will block any
reform whatsoever, since every reform is a first step and no first step has a principled
successor. Both of these are true, and they do not cancel out — which is the actual
difficulty.

## The problem

The hospital's private-patient scheme began as an evening list. Consultants who had
finished their NHS sessions could use theatres that would otherwise sit idle, and the money
came back to the trust. Nobody objected; there was nothing to object to.

Year two, the list moved to Thursday afternoons, because that was when the anaesthetists
were free. Year three, a second theatre. Year four, a nurse was hired specifically for it,
paid from the scheme's own income. Year six, when the waiting list crisis hit, the Thursday
theatres were the ones that had staff, so they kept running. Year eight, two of the four
theatres are private most of the week, the trust's finances now depend on the income, and
the NHS wait for the same procedure has gone from nine weeks to eleven months.

Ruth chairs the board. She has been on it for the whole eight years and has voted for every
single change. She can defend each vote, individually, on the evidence that existed at the
time, and she is not being disingenuous: each one was genuinely the better option in front
of her.

The paper in front of her tonight proposes a fifth theatre. It will fund three additional
NHS consultant posts. The business case is sound. The wait will probably fall.

She keeps trying to identify the meeting at which this became a private hospital with an
NHS annex, and she cannot find it, and she is aware that the inability to find it is being
used — by her, in her own head — as an argument.

## The questions

**1. The roundings.** Eleven years of expense claims, each larger than the last, none large
enough to make a scene about. On which claim did you become dishonest?

- On the first. The size of the step never changed whose money it was.
- On none. There is no such claim, and yet you are dishonest now.
- When the harm became real and someone's budget noticed.
- At the point your profession's rule says, because a working convention still binds.

**2. The thousand dials.** Each torturer turns a dial by an imperceptible amount; together
they cause agony. Your flight, your vote, your purchase have this shape.

- Your full share of the agony. Imperceptibility is a fact about nerves, not about acts.
- Nothing, strictly — which is why this needs an enforced rule, not a conscience.
- You joined in. The wrong is participation, not the increment.
- Nothing you can be held to. A morality that convicts on undetectable harm will convict
  on anything.

**3. The age of consent.** No birthday changes anyone, every number is arbitrary, and the
committee must pick one.

- Pick it and hold it. An arbitrary line held firmly protects more than a wise line held loosely.
- Assess actual capacity case by case. The rule is guaranteed to be wrong in both directions.
- Pick what this society can live with. There is no fact underneath it.
- Pick, publish the reasoning, and treat it as revisable.

**4. The first step.** The proposal is genuinely harmless and useful. Your only objection is
that nothing will stop the next twelve.

- Oppose it. The absence of a stopping point is the argument.
- Support it. Paying a certain cost to avoid an imagined sequence is not prudence.
- Support it and build the sunset clause in now.
- Ask what the institution becomes at the bottom of the slope, and judge from there.

## Reading your answer

**The Line Held Anyway.** You hold that the line's arbitrariness is not an argument against
enforcing it and that the first step is already across. This is the only position that
cannot be walked down a slope — a real advantage, since every gradual corruption depends on
the target agreeing to judge each step on its own merits. It costs you the cases where your
line is visibly wrong, and it requires you to pay that in public: a bright line with quiet
exceptions is a slope with better branding.

**The Sum of Small Things.** You look through the increment to the total, and you refuse
the word "negligible" as an argument. That gets Parfit's case right. The exposure runs both
ways: the reasoning that makes each contribution count also makes each contribution nearly
weightless, and someone who evaluates every step on its own consequences is precisely who a
long slope is built for.

**What You Became Without Noticing.** You think the honest description is that a person can
be corrupt now by a route with no moment in it. That is probably the most accurate account
of how it actually happens. It is also the least usable: it tells you what occurred but not
what to refuse, and noticing what you are becoming has stopped very few people mid-slope,
because the view from each step looks fine.

**The Line as Convention.** You treat the search for the true boundary as a category error,
and prefer a line that admits what it is. This is a respectable position in the literature
on vagueness. Its price is explaining why a convention binds anyone who does not share its
purposes — and noticing that "it is only a convention" opens nearly every argument for
moving one.

**The Rule We Agree to Draw.** Where no fact settles the boundary, you want the boundary
settled properly: decided, published, revisable, with the stopping mechanism installed
before the first step. This puts the obligation where the causation is. Its weakness is
that it needs a functioning body to do the deciding, and the slopes that do most damage are
the ones the deciding body is standing on.

**The Child, Not the Threshold.** You take the vagueness as a reason to look harder at
the individual rather than to argue about where the line falls. A rule crude enough to be
administrable is guaranteed to be wrong about somebody, and you would rather answer to the
person in front of you. The cost is scale: case-by-case judgement is precisely what cannot
be audited, and the discretion you want is the discretion that lets bias work unchallenged.

## Sources

- Diogenes Laertius, *Lives of the Eminent Philosophers*, Book II (3rd century CE) — the
  report attributing the sorites and the Liar to Eubulides of Miletus.
- Cicero, *Academica* II.92–94 (45 BCE) — the earliest surviving extended discussion, and
  the source for the Stoic worry about where assent should stop.
- Timothy Williamson, *Vagueness*, Routledge, 1994 — the sustained defence of epistemicism:
  there is a sharp cut-off, and we cannot know it.
- Rosanna Keefe, *Theories of Vagueness*, Cambridge University Press, 2000 — a survey of
  the competing responses.
- Derek Parfit, *Reasons and Persons*, Oxford University Press, 1984, Part One — the
  harmless torturers and the problem of imperceptible contributions.
