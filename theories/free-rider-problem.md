---
id: free-rider-problem
title: The Free Rider Problem
category: paradox
tradition: game-theory
philosophers:
  - Mancur Olson
era: "1965"
tags: [public-goods, collective-action, fairness, taxation, unions, punishment]
sources:
  - author: Mancur Olson
    title: The Logic of Collective Action - Public Goods and the Theory of Groups
    published: Harvard University Press
    year: 1965
  - author: Ernst Fehr, Simon Gächter
    title: "Cooperation and punishment in public goods experiments"
    published: "American Economic Review 90(4), 980–994"
    year: 2000
  - author: Benedikt Herrmann, Christian Thöni, Simon Gächter
    title: "Antisocial punishment across societies"
    published: "Science 319(5868), 1362–1367"
    year: 2008
  - author: Robert Nozick
    title: Anarchy, State, and Utopia
    published: Basic Books
    year: 1974
  - author: John Rawls
    title: A Theory of Justice
    published: Harvard University Press
    year: 1971
  - author: H. L. A. Hart
    title: "Are There Any Natural Rights?"
    published: "Philosophical Review 64(2), 175–191"
    year: 1955
questions:
  - id: q1
    prompt: >-
      Everyone in your building benefits from the residents' association, which fights the
      developer, chases the freeholder and keeps the roof from leaking. Twelve of the
      thirty flats pay the voluntary levy. You have never paid.
    options:
      - id: a
        label: >-
          Pay. You have taken the benefit of other people's work and money, and taking a
          benefit produced by an arrangement obliges you to share its cost.
        scores: { contractarian: 1.0, deontological: 0.5, scope: 0.4 }
      - id: b
        label: >-
          Do not pay. You did not ask for the association, you did not agree to the levy,
          and nobody may bill you for a benefit they decided to give you.
        scores: { egoist: 0.9, deontological: 0.4, authority: 0.6 }
      - id: c
        label: >-
          Pay, and stop treating it as a payment. The question is whether you are the sort
          of person who lets the same twelve neighbours carry everyone.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
      - id: d
        label: >-
          Make it a charge on the service bill, so that it is collected from everyone and
          nobody has to rely on anyone's conscience.
        scores: { consequentialist: 0.9, contractarian: 0.4, authority: -0.4 }
  - id: q2
    prompt: >-
      Your union negotiated a pay rise that applies to every employee in the grade,
      members and non-members alike. Subscriptions are a real cost. Roughly a third of
      your colleagues take the rise and do not join.
    options:
      - id: a
        label: >-
          They are free riders and should be named as such. A benefit produced by other
          people's risk and expense is not a windfall you may simply pocket.
        scores: { contractarian: 0.9, virtue: 0.5, certainty: 0.5 }
      - id: b
        label: >-
          They made a defensible choice. Compulsory association is a serious thing to
          impose, and no one is obliged to fund an organisation to keep a legal right.
        scores: { egoist: 0.8, deontological: 0.5, authority: 0.7 }
      - id: c
        label: >-
          The problem is structural, not moral. Design the arrangement so the benefit and
          the cost travel together, and stop asking individuals to be better than the design.
        scores: { consequentialist: 1.0, contractarian: 0.4, affect: -0.5 }
      - id: d
        label: >-
          Keep paying and say nothing. Resentment of colleagues is corrosive and costs the
          workplace more over ten years than the subscriptions are worth.
        scores: { virtue: 0.9, care: 0.4, certainty: -0.4 }
  - id: q3
    prompt: >-
      In public goods experiments, contributions typically decline round after round —
      but recover sharply when players are allowed to pay some of their own money to
      punish low contributors, which many do.
    options:
      - id: a
        label: >-
          That vindicates punishment. Cooperation is not sustained by good will, it is
          sustained by the credible prospect of a cost, and someone has to bear it.
        scores: { consequentialist: 1.0, contractarian: 0.5, scope: 0.5 }
      - id: b
        label: >-
          It shows why punishing should be institutional. Angry individuals punish
          inconsistently, and in some societies they punish the generous.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.5 }
      - id: c
        label: >-
          It shows people care about being taken advantage of more than they care about the
          public good, which is not the same discovery and is less flattering.
        scores: { egoist: 0.8, relativist: 0.4, affect: -0.4 }
      - id: d
        label: >-
          Whether punishment works is beside the point. Contributing is what you owe, and a
          duty is not created or dissolved by the enforcement regime around it.
        scores: { deontological: 1.0, certainty: 0.8 }
  - id: q4
    prompt: >-
      Nozick asks you to imagine that your neighbours set up a public address system and
      each takes a turn broadcasting. On the 138th day it is your turn. You enjoyed some
      of the broadcasts. Must you take your day?
    options:
      - id: a
        label: >-
          No. A benefit thrown at you does not generate an obligation, or anyone could
          bind you to anything simply by doing you an unrequested favour.
        scores: { egoist: 0.9, deontological: 0.4, authority: 0.7 }
      - id: b
        label: >-
          Yes, if you took the benefit knowing what the scheme was. Accepting the product of
          a cooperative arrangement while refusing its terms is what fair play rules out.
        scores: { contractarian: 1.0, deontological: 0.5, scope: 0.4 }
      - id: c
        label: >-
          The case is built to be trivial so the answer comes out no. Ask the same question
          about clean air, courts or vaccination and the intuition reverses.
        scores: { consequentialist: 1.0, contractarian: 0.4, certainty: 0.4 }
      - id: d
        label: >-
          Take your day. Living among people who have all taken theirs and declining is a
          way of holding yourself above them that no argument quite covers.
        scores: { virtue: 1.0, care: 0.4, affect: 0.6 }
outcomes:
  - id: fair-play
    dominant: contractarian
    label: The Terms of the Benefit
    text: >-
      You hold to something like the principle of fair play that H. L. A. Hart and John
      Rawls set out — that accepting the benefits of a cooperative scheme, knowing what it
      is, binds you to the share of the burden that produced them. It explains the special
      irritation reserved for free riders, which is not about the money. What you have to
      answer is Nozick's question about how far a benefit can be pushed at you before
      accepting it counts as agreeing to anything, since almost nobody consented to most of
      the schemes they live inside.
    base_rate: null
  - id: the-unasked
    dominant: egoist
    label: You Did Not Ask
    text: >-
      Your position is that nobody may generate an obligation in you by giving you something
      you never requested, and that the alternative licenses anyone to bill you for anything
      they decide is good for you. It is a real principle with a real defence, not merely a
      dodge. The cost is that it is not clear anything of scale can be built on it. Roads,
      vaccination, defence, clean water and courts are all benefits nobody individually
      asked for, and a rule that exempts you from all of them exempts everybody.
    base_rate: null
  - id: the-design
    dominant: consequentialist
    label: Fix the Design, Not the People
    text: >-
      You treat free riding as an engineering failure rather than a character failure. Make
      the benefit and the cost travel together, collect at source, and stop asking
      individuals to be reliably better than the incentives they sit in. Olson's own
      conclusion — that groups need selective incentives rather than shared interests — is
      yours. What it leaves out is that somebody has to want the design built, and the
      appetite for building it is exactly the public-spiritedness the design was meant to
      make unnecessary.
    base_rate: null
  - id: the-duty
    dominant: deontological
    label: Owed Whatever Anyone Else Does
    text: >-
      For you the obligation to contribute does not depend on whether contributing works,
      whether others are contributing, or whether anyone is enforcing it. That makes you the
      person a scheme can be built on, and it is immune to the demoralisation that empties
      voluntary systems. Its exposure is that you may be the last person paying into
      something that has stopped functioning, and your account gives you no way to notice
      when a duty has become a subsidy.
    base_rate: null
  - id: the-neighbour
    dominant: virtue
    label: The Same Twelve Neighbours
    text: >-
      Your objection to free riding is not a calculation but a picture — the same handful of
      people carrying everyone, year after year, while others accept it as a fact of nature.
      You would rather pay than be that. This is probably the actual mechanism holding most
      voluntary arrangements together, and it operates well below the level of argument. It
      also gives you no way to distinguish between someone shirking and someone who cannot
      afford to pay, and shame is a poor instrument for telling them apart.
    base_rate: null
---

## What it means

Mancur Olson's *The Logic of Collective Action* (1965) attacked a proposition so widely
assumed that nobody had thought to test it: that people who share an interest will act to
advance it.

Olson's argument turns on the nature of a **public good** — something that, once produced,
is available to everyone whether or not they helped, and that is not used up by any one
person's enjoyment of it. Clean air, national defence, a negotiated pay scale, a lobbying
campaign, a lighthouse. Because the benefit cannot be withheld from non-contributors, each
individual's best move is to let others produce it and enjoy it free. Everyone reasons
this way, so the good is underproduced or not produced at all — even though everyone
wanted it and everyone is worse off without it.

Olson's second claim is about size, and it was the more provocative. In a small group, one
member's contribution is a visible fraction of the total, everyone can see who did what,
and social pressure works. In a large group, no individual contribution changes the
outcome perceptibly, nobody notices your absence, and the incentive to ride free is nearly
total. Hence his conclusion, which reversed the received view of pluralist politics: large
latent groups with diffuse interests — consumers, taxpayers, the general public — organise
badly, while small groups with concentrated interests organise easily. That is why a
hundred sugar producers out-lobby fifty million sugar buyers.

His remedy was **selective incentives**: benefits available only to contributors. Unions
offering legal representation to members only; professional bodies offering credentials;
associations offering insurance. On Olson's account, mass membership organisations survive
by selling private goods and producing public ones as a by-product.

## What it suggests

The laboratory evidence broadly bears out the structure. In public goods experiments,
groups typically start out contributing a substantial fraction of their endowment and then
decline, round after round, as contributors observe others contributing less. Fehr and
Gächter showed in 2000 that when players are given the option to spend their own money to
punish low contributors, many do, and contributions recover and stay high. This became the
standard evidence for costly or altruistic punishment as the mechanism sustaining
cooperation.

That result needs a caveat which is routinely dropped. Herrmann, Thöni and Gächter ran the
same design in sixteen participant pools around the world in 2008 and found widespread
**antisocial punishment** — people paying to punish *high* contributors — in some
societies, at levels that wiped out the gains from cooperation entirely. The mechanism is
not a human universal producing good outcomes wherever it appears. It is a mechanism whose
effects depend on norms of civic cooperation and rule of law that vary considerably.

The philosophical dispute is older and unresolved. H. L. A. Hart in 1955, and Rawls
following him in *A Theory of Justice* (1971), argued for a **principle of fair play**:
when a cooperative scheme produces benefits, those who accept the benefits are obliged to
bear their share of the burdens. That is the reasoning behind the ordinary sense that the
non-member taking the union's pay rise is doing something wrong.

Robert Nozick's reply in *Anarchy, State, and Utopia* (1974) is the standard objection.
Suppose your neighbours set up a public address system and rota; you have listened to some
broadcasts; on the 138th day it is your turn. Are you bound? Nozick says plainly not — you
cannot be obliged by benefits pushed at you without your consent, or anyone could bind you
to anything by doing you an unrequested favour. The difficulty for Nozick's side is that
this describes nearly every public good anyone lives inside. The difficulty for Hart's side
is saying where accepting a benefit stops being merely receiving one.

## The problem

You are one of fourteen partners in a veterinary practice, and the out-of-hours rota is
voluntary.

For eleven years the same five partners have covered nearly all of it. There is no rule
requiring anyone to take nights; the rota was set up as a goodwill arrangement when the
practice was six people, and the founding agreement was never amended. Everyone benefits:
the practice keeps its accreditation, keeps its farm contracts, and charges the fees that
pay all fourteen drawings.

Two of the five who cover the nights are now in their sixties. One has told you privately
that she will resign from the rota in the spring and that she has been told by her
consultant to. Of the nine who do not cover nights, three have small children, two have
never given a reason, and one has said openly that he sees no reason to volunteer for
something nobody is obliged to do, and that if the practice wants night cover it should pay
for it or hire someone.

He is, on the wording of the agreement, entirely correct. The practice cannot afford to
hire, and everyone knows it. The partners' meeting is next month and the item is on the
agenda because you put it there.

## The questions

**1. The residents' association.** Twelve of thirty flats pay the voluntary levy. You have
never paid.

- Pay. Taking a benefit produced by an arrangement obliges you to share its cost.
- Do not pay. Nobody may bill you for a benefit they decided to give you.
- Pay, and stop treating it as a payment. The question is what sort of neighbour you are.
- Make it a charge on the service bill so nobody has to rely on anyone's conscience.

**2. The union rise.** A third of your colleagues take the negotiated rise without joining.

- They are free riders and should be named as such.
- They made a defensible choice. Compulsory association is a serious imposition.
- The problem is structural. Design it so benefit and cost travel together.
- Keep paying and say nothing. Resentment costs more than the subscriptions.

**3. Punishment in the lab.** Contributions decline, then recover when players can pay to
punish.

- That vindicates punishment. Someone has to bear the cost of enforcement.
- It shows punishing should be institutional. Individuals punish inconsistently, and
  sometimes punish the generous.
- It shows people mind being taken advantage of more than they mind the good going unmade.
- Beside the point. A duty is not created or dissolved by the enforcement around it.

**4. Nozick's public address system.** On the 138th day it is your turn. You enjoyed some
of the broadcasts.

- No obligation. A benefit thrown at you does not bind you.
- Obligation, if you took the benefit knowing what the scheme was.
- The case is built trivially so the answer comes out no. Try it with courts or vaccination.
- Take your day. Declining is a way of holding yourself above your neighbours.

## Reading your answer

**The Terms of the Benefit.** You hold the fair-play principle of Hart and Rawls: accepting
what a scheme produces binds you to a share of what produced it. That explains the specific
anger free riders provoke, which is never really about money. You have to answer Nozick's
question about how much of a benefit can be pushed at you before acceptance means anything
— because you did not consent to most of the schemes you live inside either.

**You Did Not Ask.** You will not let anyone manufacture an obligation in you by doing you
an unrequested favour, and this is a genuine principle rather than a dodge. Its cost is
that almost nothing large can be built on it, since roads, courts, vaccination and clean
water are all benefits nobody individually requested.

**Fix the Design, Not the People.** You treat free riding as an engineering problem and
collect at source rather than appealing to conscience. Olson agrees with you; selective
incentives were his own conclusion. What the position cannot supply is the will to build
the design in the first place, which is precisely the public-spiritedness it was meant to
render unnecessary.

**Owed Whatever Anyone Else Does.** Your obligation does not depend on whether others are
paying or whether anyone is watching, which makes you the kind of person a scheme can rest
on. It also means you have no way to notice when your duty has quietly become a subsidy to
people who stopped a long time ago.

**The Same Twelve Neighbours.** Your objection is a picture rather than an argument — the
same few carrying everyone, year after year. That is probably what actually holds voluntary
arrangements together, well below the level at which anyone argues. It gives you no way to
tell shirking from inability, and shame is a blunt instrument for that distinction.

## Sources

- Mancur Olson, *The Logic of Collective Action: Public Goods and the Theory of Groups*
  (Harvard University Press, 1965).
- Ernst Fehr and Simon Gächter, "Cooperation and punishment in public goods experiments",
  *American Economic Review* 90(4) (2000), 980–994.
- Benedikt Herrmann, Christian Thöni and Simon Gächter, "Antisocial punishment across
  societies", *Science* 319(5868) (2008), 1362–1367 — punishment of high contributors, and
  the limits of the altruistic-punishment story.
- H. L. A. Hart, "Are There Any Natural Rights?", *Philosophical Review* 64(2) (1955),
  175–191 — the principle of fair play.
- John Rawls, *A Theory of Justice* (Harvard University Press, 1971), especially the
  discussion of the duty of fair play.
- Robert Nozick, *Anarchy, State, and Utopia* (Basic Books, 1974) — the public address
  system objection.
