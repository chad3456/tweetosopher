---
id: negative-utilitarianism
title: Negative Utilitarianism
category: theory
tradition: utilitarianism
philosophers:
  - Karl Popper
  - R.N. Smart
era: "1945"
tags: [suffering, asymmetry, harm-reduction, extinction, policy, pessimism]
sources:
  - author: Karl Popper
    title: "The Open Society and Its Enemies"
    published: "Routledge, London; see vol. 1, ch. 5 n. 6 and ch. 9"
    year: 1945
  - author: Karl Popper
    title: "Utopia and Violence"
    published: "address to the Institut des Arts, Brussels; repr. in Conjectures and Refutations, 1963"
    year: 1948
  - author: R. N. Smart
    title: "Negative Utilitarianism"
    published: "Mind 67(268), 542–543"
    year: 1958
  - author: David Benatar
    title: "Better Never to Have Been: The Harm of Coming into Existence"
    published: Clarendon Press, Oxford
    year: 2006
  - author: Jamie Mayerfeld
    title: "Suffering and Moral Responsibility"
    published: Oxford University Press
    year: 1999
questions:
  - id: q1
    prompt: >-
      A foundation has one budget. It can fund a programme that lifts a hundred
      thousand comfortable people from contented to genuinely flourishing, or one
      that relieves the worst pain of four thousand people in the last months of
      terminal illness. The first produces far more happiness by any measure it
      has.
    options:
      - id: a
        label: >-
          Relieve the suffering. Pain makes a claim on you that the absence of
          extra joy does not; the two are not the same currency in two colours.
        scores: { consequentialist: 0.9, care: 0.5, affect: 0.4 }
      - id: b
        label: >-
          Fund the flourishing. More good is more good, and treating suffering as
          categorically special is a bias toward the vivid.
        scores: { consequentialist: 1.0, scope: 0.6, affect: -0.6 }
      - id: c
        label: >-
          Relieve the suffering, because those four thousand can name you and
          ask, and the hundred thousand cannot and would not.
        scores: { deontological: 0.9, contractarian: 0.4 }
      - id: d
        label: >-
          Relieve the suffering because of what a foundation that chose otherwise
          would become — an institution optimising the lives of the comfortable.
        scores: { virtue: 0.9, care: 0.4 }
  - id: q2
    prompt: >-
      R. N. Smart's objection: if the only aim is to minimise suffering, then a
      ruler who could painlessly end all sentient life ought to do it, since a
      world with nobody in it contains no suffering at all. Suppose the button
      exists and works exactly as described.
    options:
      - id: a
        label: >-
          The objection is decisive. Any principle whose consistent application
          empties the world has been shown to be the wrong principle.
        scores: { consequentialist: 0.8, certainty: 0.7 }
      - id: b
        label: >-
          Do not press it, and hold the principle anyway. Nothing in ordinary
          policy is remotely like the button, and no view survives every limit case.
        scores: { consequentialist: 0.9, certainty: -0.6 }
      - id: c
        label: >-
          Do not press it because it is not yours to press. Ending everyone
          without asking is a wrong regardless of what it prevents.
        scores: { deontological: 1.0, contractarian: 0.5, certainty: 0.6 }
      - id: d
        label: >-
          The button reveals that the value was never suffering as such but the
          people having it. There is no one left to have been spared.
        scores: { virtue: 0.8, care: 0.5, certainty: 0.3 }
  - id: q3
    prompt: >-
      Popper argued that public policy should aim at the elimination of concrete
      misery rather than the establishment of happiness, because we know what
      hunger is and disagree about what a good life is. A minister must choose
      between an anti-destitution scheme and a national programme for civic and
      cultural life.
    options:
      - id: a
        label: >-
          Destitution first, always. A state that knows what it is abolishing is
          safer than one that knows what it is building.
        scores: { consequentialist: 0.9, authority: 0.4, certainty: -0.4 }
      - id: b
        label: >-
          A state confined to relieving misery has decided in advance that it has
          nothing positive to offer, and a people will not be held together by
          that.
        scores: { virtue: 0.9, relativist: 0.3, authority: -0.4 }
      - id: c
        label: >-
          Destitution first because those people can demand it as of right, and
          nobody can demand a cultural programme.
        scores: { deontological: 0.8, contractarian: 0.4 }
      - id: d
        label: >-
          Do both badly rather than one well. Governments that pick a single
          aim get very good at it and blind to everything else.
        scores: { consequentialist: 0.7, virtue: 0.4, certainty: -0.7 }
  - id: q4
    prompt: >-
      You are advising a couple who ask, seriously, whether to have a child. They
      know the child will have a life much like theirs: mostly good, punctuated by
      real suffering, ending in a death they cannot prevent. Nobody is harmed by
      their not having one.
    options:
      - id: a
        label: >-
          A life not started avoids suffering and deprives nobody, because there
          is nobody there to be deprived. The asymmetry is real.
        scores: { consequentialist: 0.8, certainty: 0.4, affect: -0.5 }
      - id: b
        label: >-
          The good in a life is not compensation for its suffering; it is the
          point of it. Weighing them as a sum misdescribes what a life is.
        scores: { virtue: 1.0, certainty: 0.4 }
      - id: c
        label: >-
          It is not a question anyone answers by argument. They will decide who
          they are by deciding, and no calculation stands behind it.
        scores: { existentialist: 1.0, certainty: -0.8 }
      - id: d
        label: >-
          What matters is whether they can give a particular child what it will
          need. That is answerable, and the general question is not.
        scores: { care: 1.0, virtue: 0.3, scope: -0.6 }
outcomes:
  - id: the-suffering-first
    dominant: consequentialist
    label: Pain Comes First
    text: >-
      You hold that suffering makes a claim of a kind that missing happiness does
      not — that there is, as Popper put it, no ethical symmetry between the two.
      This gets you a clear ordering in almost every real allocation, and it
      protects the worst off from being outvoted by large numbers of small
      improvements, which classical aggregation cannot do. What it owes is an
      account of where the asymmetry stops. Pressed all the way it says a world
      with nobody in it is better than a world with anyone in it, and the repairs
      that block that conclusion tend to be exactly the concessions that let
      happiness back onto the scale.
    base_rate: null
  - id: the-claim
    dominant: deontological
    label: Who Can Ask You
    text: >-
      You locate the asymmetry in standing rather than in quantity: the person in
      pain can address you and demand relief, and no one can demand to be made
      happier than they already are. That explains the intuition Popper was
      chasing without needing a metric at all, and it disposes of the world-ending
      button cleanly, since nobody consented to being spared. Where it strains is
      the silent — the people whose suffering never becomes a demand because they
      cannot make one, who on your view have the weakest claim and on any other
      the strongest.
    base_rate: null
  - id: the-shape-of-a-life
    dominant: virtue
    label: Not a Sum With a Sign
    text: >-
      You resist the whole framing: the goods in a life are not compensation paid
      against its pains, and a view that can only subtract has misdescribed what
      it is measuring. This is why the button strikes you as a reductio of the
      arithmetic rather than a hard case within it. The difficulty is practical.
      Foundations and ministries do have to choose, and "the sum is the wrong
      instrument" leaves them holding the same budget with one fewer way to
      allocate it.
    base_rate: null
  - id: the-particular-child
    dominant: care
    label: This One, Not Lives in General
    text: >-
      You bring the question back to particular people and what can actually be
      given to them, and you decline the general question as unanswerable. That
      is where nearly all real deliberation happens, and it is a defensible reason
      for distrusting arguments that range over lives in the abstract. Its cost is
      scale: relieving suffering at any serious scale is done by people reasoning
      about strangers in aggregate, and a view that only works up close has ceded
      that ground to whoever is willing to do the arithmetic.
    base_rate: null
  - id: the-decision
    dominant: existentialist
    label: No Calculation Stands Behind It
    text: >-
      You hold that some questions are settled by deciding rather than by
      discovering, and that the couple will find out who they are in the act.
      This is honest about how such decisions are actually made and it refuses a
      false precision. What it gives up is criticism: if no calculation stands
      behind the choice, you have also given up the ground for saying that anyone
      who chooses monstrously has got it wrong, and negative utilitarianism's
      whole point was that some outcomes really are worse.
    base_rate: null
  - id: nobody-was-asked
    dominant: contractarian
    label: Nobody Was Asked
    text: >-
      Your objection is not to the arithmetic but to the standing. Whatever the ledger
      says, ending everyone is not a decision one party gets to take on behalf of all
      the others, and no calculation confers the authority that consent would. This is
      the cleanest reply to the button, because it does not require you to deny that
      suffering outweighs happiness — you can grant the whole premise and still refuse.
      What it owes is an account of the beings who cannot be asked, which on this
      question is most of them: the unborn, the animals, the future. If their interests
      count and their agreement cannot, the objection needs another leg.
    base_rate: null

---

## What it means

Negative utilitarianism is the view that the reduction of suffering is what a moral
theory should be maximising, and that increasing happiness is at best a secondary aim.

The label attached itself to Karl Popper, though he never used it of himself and would
have resisted a doctrine. In *The Open Society and Its Enemies* (1945) he proposes
"replacing the utilitarian formula 'Aim at the greatest amount of happiness for the
greatest number' by the formula 'The least amount of avoidable suffering for all'". His
reason is not metaphysical. It is that "there is, from the ethical point of view, no
symmetry between suffering and happiness": human suffering makes a direct moral appeal —
the appeal for help — while there is no comparable call to increase the happiness of
someone who is already doing well.

Popper's interest was political. His target was utopian social engineering: the attempt to
reorganise society around a conception of the good life, which he thought produced
catastrophe because the conception is always contested and the reorganisation is always
violent. Against it he set what he called piecemeal engineering — identify a concrete,
agreed evil, remove it, watch what happens, correct. The asymmetry is what makes this
possible. We can agree that famine, torture and preventable disease are evils without
agreeing on what a flourishing life looks like, and a politics that confines itself to the
first list is a politics that can proceed without first settling the second. He put the
same point in "Utopia and Violence" (1948): "It is a fact, and not a very strange fact,
that it is not so very difficult to reach agreement by discussion on what are the most
intolerable evils of our society, and on what are the most urgent social reforms."

The name and the standard objection both arrive in 1958, when R. N. Smart published a
two-page note in *Mind* pointing out where the principle leads. If minimising suffering is
the whole aim, then a benevolent ruler who could painlessly destroy all sentient life
ought to do it, since the resulting world would contain no suffering whatever. The
argument has been called the benevolent world-exploder ever since, and every subsequent
version of negative utilitarianism has been shaped by the need to answer it.

## What it suggests

Taken as a guide to allocation, the asymmetry is powerful and it points somewhere
definite. It says relief before enhancement: palliative care before enrichment, the
destitute before the merely unfulfilled, the prevention of catastrophe before the
promotion of excellence. It gives the worst-off a protection that straight aggregation
cannot, because on a classical view a sufficiently large number of small gains to the
comfortable will always eventually outweigh a severe harm to a few, and on a negative view
it never does.

It also has an epistemic virtue that is easy to underrate. Suffering is comparatively
legible. People can report it, it shows up in mortality and morbidity data, and there is
broad cross-cultural agreement about what counts. Flourishing is not like that. A policy
aimed at making people happy has to decide what happiness consists in, and the decision
will be made by whoever is holding the levers. Popper thought this was not an incidental
difficulty but the mechanism by which political idealism turns coercive.

Now the objections, and there are three that matter.

The **world-exploder** is the famous one. Its force is that it is not a distant edge case
but a direct consequence: the principle really does rank an empty world above any
populated one. Defenders reply by adding a preference component, or by weighting existing
people's interest in continuing, or by restricting the principle to policy within a
world that will continue regardless. Each repair works, and each concedes that suffering
alone was not the whole story.

The second is that the asymmetry, once granted, is hard to confine to the cases where it
seems obvious. David Benatar's *Better Never to Have Been* (2006) argues from a similar
asymmetry — that the absence of pain is good even if no one enjoys it, while the absence
of pleasure is not bad unless someone is deprived — to the conclusion that coming into
existence is always a harm. Most readers treat that as a reductio; Benatar treats it as
the argument's proper destination, and he has a point that the intermediate stopping places
are not well motivated.

The third is the political one, and it cuts against Popper directly. A state that has
decided in advance that it has no positive vision has decided something substantial. It is
not obvious that a society can be held together by the absence of the worst, and the
harm-reduction posture can shade into a managerial politics whose only ambition is that
nothing terrible happen.

The strongest defence is Popper's own, and it is modest: the asymmetry is not a complete
theory of value but a rule of priority for people with limited resources and worse
information, and every serious criticism of it is an argument about what to do after the
worst suffering has been dealt with. We are not there.

## The problem

Ola runs a health charity with £2.3 million and two proposals.

The first is a network of pain clinics in a region with almost no palliative provision.
The modelling is unglamorous and solid: over five years it materially changes the last
eight to fourteen weeks of about six thousand people's lives. It does not extend a single
life by a day. Everyone it treats dies on schedule. What it changes is what those weeks
are like, and the field reports describe the current situation in language the trustees
found difficult to read aloud.

The second is a schools programme in the same region — libraries, laboratories,
instruments, teachers. The evaluation is credible. Over twenty years it plausibly touches
sixty thousand children, and by every measure of well-being the sector uses, it produces
between eight and thirty times as much good.

Neither proposal is a fraud. Both teams are competent.

At the trustees' meeting, the argument goes the way it always goes. One trustee says: we
are not here to make good lives better, we are here for people in agony. Another says:
that sentence has been used to justify a hundred years of charity to the dying while
nobody built anything, and the children are not hypothetical.

Ola has to write the recommendation, and she notices that she cannot decide the case by
asking which produces more good, because she already knows the answer to that and it has
not moved her.

## The questions

**1. Flourishing or relief.** A hundred thousand lifted from contented to flourishing, or
the worst pain of four thousand dying people relieved.

- Relieve the suffering; pain makes a claim that missing joy does not.
- Fund the flourishing; more good is more good.
- Relieve the suffering, because those four thousand can ask you and the others cannot.
- Relieve it, because of what an institution that chose otherwise would become.

**2. The button.** Painlessly ending all sentient life would end all suffering.

- The objection is decisive; a principle that empties the world is the wrong principle.
- Do not press it and hold the principle anyway; no view survives every limit case.
- Do not press it because it is not yours to press.
- The button shows the value was never suffering but the people having it.

**3. Destitution or civic life.** We know what hunger is and disagree about the good life.

- Destitution first, always. A state that knows what it is abolishing is safer.
- A state confined to relieving misery has nothing to offer, and will not hold a people
  together.
- Destitution first, because those people can demand it as of right.
- Do both badly rather than one well.

**4. The couple.** A life like theirs: mostly good, with real suffering, ending in death.

- Not starting a life avoids suffering and deprives nobody.
- The good in a life is not compensation for its pain; it is the point.
- No argument settles it; they decide who they are by deciding.
- What matters is whether they can give a particular child what it needs.

## Reading your answer

**Pain Comes First.** You hold Popper's asymmetry and let it order your priorities. It
protects the worst-off from being outvoted by large numbers of small gains, which
classical aggregation cannot manage, and it lets policy proceed without first settling what
a good life is. What you owe is a stopping rule. Followed without one, the principle
prefers an empty world; and the standard repairs all work by readmitting exactly the
positive value the theory set out to demote.

**Who Can Ask You.** You put the asymmetry in standing rather than in quantity — the
sufferer can address a demand to you and the merely-unfulfilled cannot. That handles the
button without any arithmetic. Its blind spot is the people who cannot make a demand at
all: on your account their claim is weakest, and on almost every other account it is the
strongest.

**Not a Sum With a Sign.** You reject the framing, holding that a life's goods are not
compensation paid against its harms. It explains why the button reads as a reductio rather
than a puzzle. The cost is operational: the trustees still have £2.3 million and two
proposals, and rejecting the instrument does not distribute the money.

**This One, Not Lives in General.** You keep the question particular and distrust reasoning
that ranges over lives in the abstract. That is where most real deliberation lives. But
suffering is relieved at scale by people who do reason about strangers in aggregate, and a
view that only operates up close has handed that work to whoever is willing to do it.

**No Calculation Stands Behind It.** You take some questions to be settled by deciding.
That is honest about how the hardest choices are actually made. It also removes your
standing to criticise: if nothing stands behind the choice, nothing stands behind the
judgement that a monstrous choice was wrong — and the entire point of the asymmetry was
that some outcomes really are worse than others.

**Nobody Was Asked.** Your objection is not to the arithmetic but to the standing.
Whatever the ledger says, ending everyone is not a decision one party takes on behalf of
all the others, and no calculation confers the authority that consent would. It is the
cleanest reply to the button: you can grant the whole premise about suffering and still
refuse. What it owes you is an account of those who cannot be asked — the unborn, the
animals, the future — who on this question are most of the parties involved.

## Sources

- Karl Popper, *The Open Society and Its Enemies*, Routledge (1945) — the asymmetry of
  suffering and happiness, in the notes to chapter 5 and the discussion of piecemeal
  engineering in chapter 9.
- Karl Popper, "Utopia and Violence" (1948), reprinted in *Conjectures and Refutations*
  (1963) — agreement on evils without agreement on the good.
- R. N. Smart, "Negative Utilitarianism", *Mind* 67(268) (1958), 542–543 — the benevolent
  world-exploder.
- Jamie Mayerfeld, *Suffering and Moral Responsibility*, Oxford University Press (1999) —
  a sustained defence of giving suffering priority without the extinction conclusion.
- David Benatar, *Better Never to Have Been: The Harm of Coming into Existence*, Clarendon
  Press (2006) — the asymmetry pressed to its furthest conclusion.
