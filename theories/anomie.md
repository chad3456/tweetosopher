---
id: anomie
title: Anomie and the Collective Conscience
category: theory
tradition: sociology
philosophers:
  - Émile Durkheim
era: "1893"
tags: [norms, solidarity, punishment, society, regulation]
sources:
  - author: Émile Durkheim
    title: The Division of Labour in Society
    published: "originally De la division du travail social, Félix Alcan, Paris"
    year: 1893
  - author: Émile Durkheim
    title: Suicide - A Study in Sociology
    published: "originally Le suicide: étude de sociologie, Félix Alcan, Paris"
    year: 1897
  - author: Émile Durkheim
    title: Moral Education
    published: "lectures delivered at the Sorbonne, published posthumously as L'éducation morale"
    year: 1925
  - author: Robert K. Merton
    title: Social Structure and Anomie
    published: "American Sociological Review 3, 672-682"
    year: 1938
questions:
  - id: q1
    prompt: >-
      Your department has been reorganised three times in two years. Nobody now knows
      who decides what, the old understandings about workload have quietly lapsed, and
      people are working either far too much or barely at all. Nothing illegal is
      happening. Everyone says they are unhappy and nobody can say exactly why.
    options:
      - id: a
        label: >-
          The problem is that the rules died and nothing replaced them. Write the
          norms down, publicly, even imperfect ones, and the misery lifts.
        scores: { relativist: 0.6, deontological: 0.5, authority: -0.6 }
      - id: b
        label: >-
          The problem is that people are overworked and anxious. Fix the workload and
          the talk about norms will look like what it is, a symptom.
        scores: { consequentialist: 0.8, scope: 0.4, affect: -0.4 }
      - id: c
        label: >-
          Nothing is stopping anyone from deciding how they want to work. People are
          waiting to be told, and that habit is the thing to break.
        scores: { existentialist: 0.8, egoist: 0.3, authority: 0.8 }
      - id: d
        label: >-
          What is missing is not rules but people who behave well without them. Find
          the three who already do and give them room.
        scores: { virtue: 0.8, care: 0.3, affect: 0.4 }
  - id: q2
    prompt: >-
      A man in your town has been convicted of defrauding elderly neighbours out of
      their savings. The money is gone and cannot be recovered. He is seventy, in poor
      health, and certain never to do it again. The judge can give him prison or a
      suspended sentence.
    options:
      - id: a
        label: >-
          Prison. A punishment that fits nothing except the community's need to say
          out loud that this is not tolerated is still doing necessary work.
        scores: { relativist: 0.7, deontological: 0.5, authority: -0.5 }
      - id: b
        label: >-
          Suspend it. Punishment that prevents nothing and repairs nothing is cruelty
          with paperwork.
        scores: { consequentialist: 0.9, agency: 0.4, certainty: 0.3 }
      - id: c
        label: >-
          Prison, because he earned it. What the sentence does for the town is not
          the reason, and using him to send a message is its own wrong.
        scores: { deontological: 0.9, certainty: 0.6 }
      - id: d
        label: >-
          Ask the victims. This is their loss, and the sentence they can live with is
          the one that ought to be handed down.
        scores: { care: 0.8, contractarian: 0.4, scope: -0.5 }
  - id: q3
    prompt: >-
      A friend has more freedom than anyone you know: no job she needs, no partner, no
      town she has to live in, no faith. She tells you she is miserable and cannot
      think why, since she can do anything at all.
    options:
      - id: a
        label: >-
          Unlimited possibility is not a gift. Desire with nothing to push against
          expands until nothing satisfies it, and that is the whole diagnosis.
        scores: { relativist: 0.7, virtue: 0.4, affect: 0.4 }
      - id: b
        label: >-
          She needs to commit to something and let it bind her, not because it is
          true but because a self is made of what you refuse to reconsider.
        scores: { existentialist: 0.8, virtue: 0.4, certainty: -0.4 }
      - id: c
        label: >-
          She needs people who would notice if she vanished. This is a description of
          isolation, not of freedom.
        scores: { care: 0.9, scope: -0.4 }
      - id: d
        label: >-
          She should find work that visibly helps somebody. Meaning is a by-product of
          being useful, not something you locate first.
        scores: { consequentialist: 0.7, virtue: 0.4, scope: 0.5 }
  - id: q4
    prompt: >-
      Your country's law and your own conscience come apart on a matter you have
      thought about carefully. Nobody influential agrees with you. The practice you
      object to is old, widely approved, and causes harm you think is obvious.
    options:
      - id: a
        label: >-
          Long and general approval is evidence. If everyone you respect sees it
          differently, the likeliest explanation is that you are wrong.
        scores: { relativist: 0.8, authority: -0.8, certainty: -0.4 }
      - id: b
        label: >-
          The harm is a fact about the world, not a fact about opinion, and no amount
          of agreement makes it stop being harm.
        scores: { consequentialist: 0.9, authority: 0.7, scope: 0.5 }
      - id: c
        label: >-
          A wrong is a wrong whether or not anyone else can see it. Say so, take the
          cost, and do not wait for company.
        scores: { deontological: 0.8, authority: 0.9, certainty: 0.7 }
      - id: d
        label: >-
          Work through the associations and bodies you belong to. Conscience becomes
          moral force only when it passes through something collective.
        scores: { contractarian: 0.6, relativist: 0.4, authority: -0.3 }
outcomes:
  - id: the-common-conscience
    dominant: relativist
    label: Morality as a Shared Thing
    text: >-
      You treat moral life as something a group holds together rather than something an
      individual works out, and you take the collapse of shared expectation to be a real
      injury and not merely an inconvenience. This explains a great deal that individual
      psychology cannot: why deregulated prosperity is not experienced as freedom, why
      punishment that deters nobody still matters. The bill comes due when the shared
      conscience is itself vicious, and your account gives the dissenter nothing to stand
      on but bad timing.
    base_rate: null
  - id: the-outcome-audit
    dominant: consequentialist
    label: What It Actually Does to People
    text: >-
      You look past the ritual to the effects, and you are unwilling to let a practice
      survive because it expresses something. That is the right instinct against cruelty
      dressed as tradition. Its blind spot is exactly Durkheim's subject: institutions
      whose effects run through meaning rather than mechanism, where a sentence that
      prevents nothing may still be holding something up, and abolishing it costs more
      than the audit can see.
    base_rate: null
  - id: the-standing-rule
    dominant: deontological
    label: What Is Owed Regardless
    text: >-
      You separate what a person deserves from what the community needs, and you refuse
      to let one be used to settle the other. That refusal is what stops punishment from
      becoming theatre performed on a convenient body. The cost is that you must supply
      the authority of the rule yourself: Durkheim's whole argument is that the sense of
      obligation is a social fact, and if he is right, the rule you are appealing to
      came from somewhere and could go.
    base_rate: null
  - id: the-self-made-limit
    dominant: existentialist
    label: The Limit You Set
    text: >-
      You think a person can and must set their own bounds, and you read normlessness as
      an unfinished job rather than a social condition. That takes seriously something
      Durkheim's account struggles with, namely that people do sometimes build lives from
      nothing. What it has to survive is the evidence he assembled: rates of despair that
      move with social conditions and not with individual resolve, which is hard to
      explain if setting your own limits were really available to anyone who tried.
    base_rate: null
  - id: the-particular-tie
    dominant: care
    label: The People in the Room
    text: >-
      You reach for the actual relationships involved: who was hurt, who would notice an
      absence, whose loss it is to settle. This keeps moral questions attached to the
      people they are about, which the sociological view can lose. Its limit is scale.
      Asking the victims is unavailable when the injured party is a whole town, a future
      generation, or a rule that everyone relies on and nobody owns.
    base_rate: null
  - id: the-three-who-already-do
    dominant: virtue
    label: The Ones Who Behave Well Anyway
    text: >-
      You do not think the gap is a rule-shaped hole. Where norms have thinned, what
      restores them is people whose conduct others can copy, and no amount of policy
      substitutes for that. Durkheim would half agree: he thought moral life was carried
      by groups rather than by codes. The objection is one he would also press — that
      character is itself produced by the institutions you are proposing to do without,
      so a plan resting on the three people who are already good has no account of where
      the next three come from.
    base_rate: null
  - id: through-the-bodies-we-belong-to
    dominant: contractarian
    label: Conscience That Passes Through Something
    text: >-
      Your answer is institutional. A private conviction becomes a moral force only once
      it runs through an association that can hold people to it — a union, a profession, a
      congregation, a board. This is close to Durkheim's own prescription, and it is the
      part of him most often skipped in favour of the diagnosis. Its exposure is obvious
      once named: the intermediate bodies are exactly what has thinned, and an answer that
      requires them cannot be used by the person who has none.
    base_rate: null

---

## What it means

Durkheim's claim, made first in *The Division of Labour in Society* (1893) and pressed
hardest in *Suicide* (1897), is that morality is a social fact — something that exists
outside any individual, exerts pressure on them, and can be studied from the outside like
any other fact.

The **collective conscience** is his term for the totality of beliefs and sentiments common
to the average members of a society. It is not the sum of what individuals happen to think.
It is a thing with its own life, older than any of the people currently holding it, and it
is what makes an act a crime: an act is criminal, Durkheim says, when it offends strong and
defined states of the collective conscience — not the other way round. This is why
punishment interested him. Punishment, on his account, is not primarily deterrence or
repair. It is an expressive act by which a community re-asserts the sentiment that was
violated, and its main effect is on the law-abiding, who see the boundary redrawn.

**Anomie** is the condition where that regulation fails. Durkheim uses the word for periods
when the norms governing a sphere of life have broken down or have not yet been rebuilt —
after a boom, after a crash, in a rapidly reorganising industry, in a divorce. His striking
claim in *Suicide* is that it is not deprivation that destroys people but deregulation.
Human desire, he argues, has no internal stopping point; only society supplies one. Take
the limits away and appetite expands past anything that could satisfy it, which is why
suicide rates rise in sudden prosperity as well as sudden ruin. Robert Merton later
repurposed the term in "Social Structure and Anomie" (1938) to mean something narrower — the
strain when a culture prescribes goals it does not give everyone the means to reach — and
that is now the more common usage.

## What it suggests

If Durkheim is right, several familiar moves stop working. You cannot evaluate an
institution purely by what it accomplishes, because some institutions work by meaning
something rather than by causing something. A criminal sentence that deters nobody may still
be doing the job it exists to do. A funeral rite, a professional code, a public apology: on
this view these are not decoration on top of the real business, they are load-bearing.

You also cannot treat the removal of constraint as automatically an improvement. This is the
part that still stings. The modern instinct is that a person with more options is better off.
Durkheim's data — and it was data, which is part of why the book mattered — suggested that
people whose lives came loose from binding structures did worse, and that the very freedom
being celebrated was, for many of them, the injury. His proposed remedy in the second preface
to the *Division of Labour* was not a return to religion but occupational groups: intermediate
bodies, smaller than the state and larger than the family, that could regulate a working life.

The strongest objection is the one Durkheim's critics have pressed from the start: he moves
from what a society requires to what is right, and there is no valid road between them. If
the collective conscience is what makes an act criminal, then a society whose conscience
demands the persecution of a minority is not making a mistake; it is functioning. Durkheim
tried to answer this by arguing that modern societies had converged on a "cult of the
individual" — a shared conscience whose content is respect for persons — but that is a
happy empirical accident, not a principle, and it would not have helped a dissenter in a
society that had converged on something else. A second objection is methodological: the
collective conscience is inferred from the behaviour it is meant to explain, which makes it
difficult to say what would count as evidence against it.

## The problem

You chair a small housing association. For thirty years it has had an unwritten rule: when a
flat comes free it goes to whoever has been on the list longest, no exceptions, and everyone
knows it.

Last month the committee, under pressure and with good intentions, made an exception for a
family in a genuinely desperate case. Nobody objected. It was obviously the right call on the
merits.

Since then, three things have happened. Two other applicants have asked, reasonably, why not
them. A committee member has started lobbying privately for a friend. And the woman who has
kept the list by hand since 1998 has resigned, saying she no longer knows what she is keeping.

Nobody did anything wrong. Every individual decision was defensible. What has gone is the
sense that there is a rule, and you can feel the difference in the room: people who used to
wait now negotiate, and the ones with the least confidence have stopped applying.

You could restore the old rule and take the cost in the next desperate case. You could write
a new one, knowing any rule you write will be worse than good judgement in some case you can
already imagine. Or you could accept that the committee decides case by case, and see whether
what has been lost was worth anything.

## The questions

**1. The reorganised department.** Three restructures in two years. Nobody knows who decides
what, old understandings have lapsed, everyone is unhappy and nobody can say why.

- The rules died and nothing replaced them. Write norms down publicly, even imperfect ones.
- People are overworked and anxious. Fix the workload; the talk about norms is a symptom.
- Nothing stops anyone deciding how to work. People are waiting to be told, and that is the
  habit to break.
- What is missing is people who behave well without rules. Find the three who do and give
  them room.

**2. The old fraudster.** Money gone, certain never to reoffend, seventy and ill. Prison or a
suspended sentence.

- Prison. A punishment that only says out loud that this is not tolerated is still doing
  necessary work.
- Suspend it. Punishment that prevents nothing and repairs nothing is cruelty with paperwork.
- Prison, because he earned it — and using him to send a message is its own wrong.
- Ask the victims. It is their loss, and their answer should be the sentence.

**3. The unlimited friend.** No job she needs, no partner, no town, no faith, and miserable.

- Unlimited possibility is not a gift. Desire with nothing to push against never settles.
- She should commit to something and let it bind her — a self is made of what you refuse to
  reconsider.
- She needs people who would notice if she vanished. That is isolation, not freedom.
- She should find work that visibly helps someone. Meaning is a by-product of use.

**4. Conscience against the country.** A practice you think obviously harmful is old, legal
and widely approved, and nobody influential agrees with you.

- Long and general approval is evidence. The likeliest explanation is that you are wrong.
- The harm is a fact about the world, not about opinion, and agreement does not touch it.
- A wrong is a wrong unseen. Say so, take the cost, do not wait for company.
- Work through the bodies you belong to. Conscience becomes force by passing through
  something collective.

## Reading your answer

**Morality as a Shared Thing.** You treat moral life as something a group holds rather than
something an individual derives, and you count the collapse of shared expectation as a real
injury. That explains what individual psychology cannot — why deregulated prosperity is not
felt as freedom, why punishment that deters nobody still matters. The bill arrives when the
shared conscience is itself vicious, and your account leaves the dissenter standing on
nothing but bad timing.

**What It Actually Does to People.** You look past ritual to effects and will not let a
practice survive because it expresses something. That is the right weapon against cruelty
dressed as tradition. The blind spot is Durkheim's own subject: institutions that work
through meaning, where the thing that prevents nothing may still be holding something up.

**What Is Owed Regardless.** You keep what a person deserves separate from what the
community needs, which is what stops punishment becoming theatre staged on a convenient
body. The cost is that you must supply the rule's authority yourself, and Durkheim's whole
case is that the sense of obligation came from somewhere and can go.

**The Limit You Set.** You think a person can set their own bounds, and read normlessness as
an unfinished private job. That takes seriously what Durkheim handles badly — people do
build lives from nothing. What it must survive is his evidence: despair that tracks social
conditions rather than individual resolve.

**The People in the Room.** You reach for the actual relationships — who was hurt, whose
loss it is to settle. That keeps the question attached to the people it is about. Its limit
is scale: asking the victims is not available when the injured party is a town, a
generation, or a rule that everyone relies on and nobody owns.

**The Ones Who Behave Well Anyway.** You do not think the gap is a rule-shaped hole:
where norms have thinned, what restores them is people whose conduct others can copy.
Durkheim would half agree — he thought moral life was carried by groups rather than codes.
The objection is one he would also press: character is itself produced by the institutions
you propose to do without, so a plan resting on the three who are already good has no
account of where the next three come from.

**Conscience That Passes Through Something.** Your answer is institutional: a private
conviction becomes a moral force only once it runs through an association that can hold
people to it. This is close to Durkheim's own prescription, and it is the part most often
skipped in favour of the diagnosis. Its exposure is obvious once named — the intermediate
bodies are exactly what has thinned, and an answer requiring them is no use to the person
who has none.

## Sources

- Émile Durkheim, *The Division of Labour in Society* (1893), originally *De la division du
  travail social* — the collective conscience, and punishment as expressive.
- Émile Durkheim, *Suicide: A Study in Sociology* (1897) — anomie as deregulation, and the
  argument that desire has no internal limit.
- Émile Durkheim, *Moral Education* (lectures at the Sorbonne, published posthumously 1925) —
  the three elements of morality: discipline, attachment to groups, and autonomy.
- Robert K. Merton, "Social Structure and Anomie", *American Sociological Review* 3 (1938),
  672–682 — the later and now more common sense of the term.
