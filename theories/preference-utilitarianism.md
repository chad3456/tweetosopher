---
id: preference-utilitarianism
title: Preference Utilitarianism
category: theory
tradition: utilitarianism
philosophers:
  - Peter Singer
  - R.M. Hare
era: "1979"
tags: [preferences, interests, paternalism, animals, adaptation, autonomy]
sources:
  - author: R. M. Hare
    title: Freedom and Reason
    published: Clarendon Press, Oxford
    year: 1963
  - author: R. M. Hare
    title: "Moral Thinking: Its Levels, Method and Point"
    published: Clarendon Press, Oxford
    year: 1981
  - author: Peter Singer
    title: Practical Ethics
    published: "Cambridge University Press; 3rd edition 2011"
    year: 1979
  - author: Peter Singer
    title: Animal Liberation
    published: "New York Review / Random House"
    year: 1975
  - author: Katarzyna de Lazari-Radek and Peter Singer
    title: "The Point of View of the Universe: Sidgwick and Contemporary Ethics"
    published: Oxford University Press
    year: 2014
  - author: Martha Nussbaum
    title: "Women and Human Development: The Capabilities Approach"
    published: Cambridge University Press
    year: 2000
questions:
  - id: q1
    prompt: >-
      A woman in a community where women are not educated says, sincerely and
      without coercion in the moment, that she does not want schooling for her
      daughters and would resent an intervention. A programme could enrol them
      anyway. She has never had the option and does not miss it.
    options:
      - id: a
        label: >-
          Respect the preference. Deciding that someone's stated wants are not
          their real ones is how every paternalist has ever begun.
        scores: { consequentialist: 0.8, contractarian: 0.5, authority: 0.5 }
      - id: b
        label: >-
          Enrol them. A preference formed under conditions that made the
          alternative unimaginable is a record of the conditions, not a choice.
        scores: { consequentialist: 0.9, scope: 0.6, authority: -0.5 }
      - id: c
        label: >-
          The daughters have interests of their own that neither adult is
          entitled to trade away, and that is what settles it.
        scores: { deontological: 1.0, care: 0.4 }
      - id: d
        label: >-
          Some capacities are part of a life going well whether or not anyone
          currently wants them, and literacy is one.
        scores: { virtue: 0.9, consequentialist: 0.3, certainty: 0.5 }
  - id: q2
    prompt: >-
      A man dies having spent forty years on a project he asked, in writing, be
      completed. Finishing it costs his estate a great deal and benefits no
      living person. He will never know either way; on a preference view, the
      frustration of a preference is bad even when nobody experiences it.
    options:
      - id: a
        label: >-
          Complete it. What he wanted is what mattered, and his being dead did
          not turn what he wanted into nothing.
        scores: { consequentialist: 0.9, deontological: 0.4, certainty: 0.4 }
      - id: b
        label: >-
          Do not. Nobody is left to be let down; treating an unexperienced
          frustration as a harm makes the theory count things that cannot be felt.
        scores: { consequentialist: 0.8, certainty: 0.5, affect: -0.5 }
      - id: c
        label: >-
          Complete it because you said you would, or because your silence let him
          believe it. That is a promise, not a calculation about welfare.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          What matters is what it does to the people left — whether finishing it
          honours him in a way they can live with, or bankrupts them for a ghost.
        scores: { care: 1.0, virtue: 0.4, scope: -0.5 }
  - id: q3
    prompt: >-
      Singer argues that if what counts is interests rather than species, then a
      being's capacity to have preferences at all is what admits it to the moral
      community. A shelter must choose between a programme for chronically ill
      dogs and one for adults with profound cognitive disability, whose measurable
      preferences are simpler than the dogs'.
    options:
      - id: a
        label: >-
          Fund by interests at stake, not by species. That is the whole point of
          equal consideration, and flinching from it here is the bias it names.
        scores: { consequentialist: 1.0, scope: 1.0, affect: -0.6 }
      - id: b
        label: >-
          Fund the humans. Being one of us is a moral fact, not a prejudice, and
          a theory that cannot say so has produced a reductio of itself.
        scores: { deontological: 0.9, care: 0.4, certainty: 0.6 }
      - id: c
        label: >-
          Fund the humans, because they stand in relations of dependency and
          obligation to us that we entered into and cannot walk away from.
        scores: { care: 1.0, contractarian: 0.4 }
      - id: d
        label: >-
          Measured preference is the wrong yardstick. It scores whoever can be
          tested most easily, which is a fact about instruments, not about worth.
        scores: { virtue: 0.8, deontological: 0.4, certainty: -0.5 }
  - id: q4
    prompt: >-
      A great many people would strongly prefer that a particular minority not
      live in their town. Their preferences are sincere, intense, and vastly
      outnumber the minority's preference to stay. A pure preference calculus has
      to count them.
    options:
      - id: a
        label: >-
          Count them and they still lose. Prejudiced preferences depend on false
          beliefs and dissolve under the information the theory requires.
        scores: { consequentialist: 1.0, certainty: 0.4 }
      - id: b
        label: >-
          Do not count them at all. Some preferences have no standing whatever
          their number, and a theory that cannot say so is unusable.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: c
        label: >-
          Do not count them, because no one could accept terms under which their
          right to live somewhere turns on how much others dislike them.
        scores: { contractarian: 1.0, scope: 0.5 }
      - id: d
        label: >-
          A theory that has to be rescued at this point by a rule about which
          wants are admissible has stopped being a preference theory.
        scores: { virtue: 0.7, nihilist: 0.3, certainty: -0.5 }
outcomes:
  - id: the-interests
    dominant: consequentialist
    label: What They Actually Want
    text: >-
      You take the good to be the satisfaction of what beings actually want,
      which is the least presumptuous account of welfare on offer: it does not
      require you to decide from outside what is good for anyone, and it extends
      naturally to any creature with interests at all. That is the argument's
      real power and it is why it changed how a generation thought about animals.
      Its two open wounds are preferences formed under bad conditions, which the
      theory has to either honour or overrule, and preferences directed at other
      people, which it has to count.
    base_rate: null
  - id: the-standing
    dominant: deontological
    label: Claims, Not Wants
    text: >-
      You hold that what a person is owed is not settled by adding up what
      everybody wants — that the daughters have claims their mother cannot trade,
      and that a sufficiently popular hatred does not acquire weight by being
      popular. This is the objection that has never been fully answered, and it
      is why almost every preference theory ends up importing a filter on which
      preferences count. The cost is that once you have a standard outside
      preference, you must say where it comes from, and the theory you were
      criticising at least had an answer to that.
    base_rate: null
  - id: the-terms
    dominant: contractarian
    label: Terms Nobody Could Reject
    text: >-
      You bound the calculus by what people could accept as terms of living
      together, which removes the majority's veto over the minority without
      having to deny that the majority sincerely wants it. It is the cleanest
      available block on the aggregation problem. What it does not reach is
      everything Singer's view is best at: animals, infants and the profoundly
      disabled cannot be parties to terms, and a theory grounded in agreement
      keeps having to explain why they are covered.
    base_rate: null
  - id: the-good-life
    dominant: virtue
    label: Some Things Are Good For You Anyway
    text: >-
      You think a life can go badly while every stated preference is met, and
      that literacy, health and capability are goods whether or not they are
      currently wanted — roughly the position Martha Nussbaum develops against
      preference-based welfare economics. It explains adaptive preference without
      calling anyone a liar. What you owe is the list and its author: an
      objective account of what is good for people is exactly the thing that has
      historically been written by whoever held the pen.
    base_rate: null
  - id: the-people-left
    dominant: care
    label: The Ones Still Here
    text: >-
      You resolve these cases by looking at actual relationships and what they
      can bear — what honouring the dead man does to his family, what we owe
      people whose dependency we already accepted. That gets the third and second
      questions right in a way the calculus struggles with, and it does not
      require you to rank species. Its exposure is the being with no relationship
      to anyone: on your view they have almost no claim, and preference
      utilitarianism's best moment is exactly there.
    base_rate: null
---

## What it means

Classical utilitarianism identifies the good with a mental state — pleasure, or happiness.
Preference utilitarianism identifies it with the satisfaction of preferences: what makes an
outcome better is that it accords with what the affected beings want, whether or not they
ever experience the difference.

The move has two motivations. The first is that people demonstrably want things other than
their own experiences. They want their children to actually flourish, not merely to believe
it; they want their work to survive them; they want not to be deceived even by a deception
they will never detect. A theory that counts only felt states cannot register these as
gains and losses, and most people think they are.

The second motivation is formal, and it comes from R. M. Hare. In *Freedom and Reason*
(1963) and *Moral Thinking* (1981) Hare argued that moral judgements are universalisable
prescriptions: to say that an act is wrong is to prescribe against it for anyone in
relevantly similar circumstances, including oneself in the other party's position. If you
must be willing to prescribe the act while imagining yourself in each affected role, and
if in each role you would have that party's preferences, then consistent moral thinking
requires you to weigh everyone's preferences equally. Utilitarianism, on this account, is
not a substantive theory bolted onto logic; it is what logic and the universalisability of
moral language produce when applied honestly.

Peter Singer built the practical ethics of the late twentieth century on this foundation.
In *Animal Liberation* (1975) and *Practical Ethics* (1979) the crucial principle is the
**equal consideration of interests**: like interests count alike, whoever has them.
Species membership is not an interest and so cannot itself confer weight — the argument
Singer named speciesism, by analogy with racism and sexism. This is the source of nearly
every uncomfortable conclusion associated with him, and also of the movement that changed
how millions of people eat.

One point of intellectual honesty about the position: Singer no longer holds it. In *The
Point of View of the Universe* (2014), written with Katarzyna de Lazari-Radek, he argues
that the objections to preference satisfaction as the good are decisive and returns to a
hedonistic account, closer to Sidgwick's. The theory in this entry is one its most famous
proponent abandoned, for reasons partly set out below.

## What it suggests

The immediate consequence is a strong presumption against paternalism. If the good is what
people want, then someone who overrides a competent adult's preference for their own good
is not producing a benefit at all; they are producing what they would want in that
position, which is a different thing. Preference views therefore underwrite consent-based
medicine, respect for eccentric life choices, and a general suspicion of experts deciding
what is good for people.

The second consequence is the expansion of the moral circle. Once the question is "does
this being have interests?" rather than "is this being one of us?", the boundary moves. A
pig has preferences about pain, confinement and companionship, and on this view the fact
that it is a pig cannot discount them. Singer's argument here is genuinely hard to answer
without either accepting the conclusion or naming some property that all humans share and
no animal has — and the properties usually offered, such as rationality or language, are
not possessed by every human being, which is what makes the argument bite.

The objections are severe, and they run in three families.

**Adaptive preference.** People shape their wants to their circumstances. Someone who has
never had a real option does not want it, and the preference view must then record their
deprivation as satisfaction. Martha Nussbaum's *Women and Human Development* (2000) makes
this the centrepiece of her case for an objective list of capabilities: if you measure
welfare by preference, the most thoroughly deprived will often score best.

**External and malicious preferences.** Preferences are not confined to one's own life. A
great many people can prefer that a small number of others be excluded, humiliated or
removed, and a straight sum has to count that. Hare's reply — that under the full
information and vivid role-taking the method demands, prejudiced preferences would not
survive — is elegant and depends on an empirical claim that is not obviously true. Bigotry
is not always a mistake about facts.

**Which preferences, and when.** Present or considered? Actual or informed? What about
preferences of the dead, the not-yet-born, the drunk, the depressed? Each answer changes
the verdicts substantially and none is derivable from the theory itself. This is the
family of problems that eventually moved Singer off the position.

## The problem

Ines is the clinical lead on a transplant panel, and there is one liver.

Candidate A is thirty-four, has an alcohol-related failure, has been abstinent for eleven
months, and wants the transplant more than anything in her life. She has said so in three
assessments, in language that the panel psychologist recorded as the most articulate
statement of preference she had heard in nine years.

Candidate B is sixty-one, has never drunk, and does not much want it. He says, plainly and
consistently, that he has had a good life, that his wife died in March, and that he would
take the liver if it were offered but would not be sorry to be passed over. He is not
depressed by any measure the service applies. He means what he says.

Candidate C is nineteen and has a profound cognitive disability. She cannot state a
preference about transplantation at all. She can express distress and comfort, she has
clear preferences about food, noise and the presence of her brother, and she will die
within four months without a liver.

The medical prognoses are similar enough that the panel has been told to decide on other
grounds.

On a preference view, the strength and clarity of what each candidate wants is not
irrelevant background — it is the substance of the case. Which means the panel is being
asked to give the liver to the person who wants it most, and Ines has noticed that this
ranking puts the nineteen-year-old last, and that she does not know how to say out loud
why that is wrong without abandoning the framework she came in holding.

## The questions

**1. The daughters' schooling.** A sincere, uncoerced preference formed where the
alternative was never available.

- Respect it. Deciding someone's stated wants are not their real ones is how paternalism
  begins.
- Enrol them. A preference formed under those conditions records the conditions.
- The daughters have interests neither adult may trade away.
- Some capacities are part of a life going well whether or not they are wanted.

**2. The dead man's project.** Costly, benefits no living person, and he will never know.

- Complete it. His being dead did not turn what he wanted into nothing.
- Do not. An unexperienced frustration is not a harm.
- Complete it because you said you would — that is a promise, not a welfare calculation.
- What matters is what it does to the people left.

**3. The shelter's budget.** Chronically ill dogs, or adults whose measurable preferences
are simpler.

- Fund by interests at stake, not species.
- Fund the humans. Being one of us is a moral fact, not a prejudice.
- Fund the humans, because of dependencies we already entered into.
- Measured preference is the wrong yardstick; it scores testability.

**4. The town.** Sincere, intense, vastly outnumbering preferences that a minority not live
there.

- Count them and they still lose; prejudice does not survive full information.
- Do not count them at all; some preferences have no standing.
- Do not count them, because nobody could accept terms like that.
- A theory rescued at this point by a rule about admissible wants has stopped being a
  preference theory.

## Reading your answer

**What They Actually Want.** You take welfare to be preference satisfaction, which spares
you the presumption of deciding what is good for other people and extends without strain
to every creature with interests. That is a serious achievement and it is why this argument
changed practices rather than just journals. Your two open wounds are the ones that moved
Singer himself: preferences deformed by circumstance, and preferences about other people's
lives.

**Claims, Not Wants.** You hold that what someone is owed is not settled by totalling
wants. The daughters have claims their mother cannot sell; a popular hatred does not gain
weight from its popularity. Nearly every preference theory ends up conceding this by
importing a filter. What you owe is the source of the standard, and "it is obvious" will
be asked to do more work than it can.

**Terms Nobody Could Reject.** You bound the sum by what could be agreed, which blocks the
majority's veto without calling anyone insincere. It is the tidiest solution to the
external-preference problem. It also cannot reach the beings this theory is best at
including — the animals, the infant, the nineteen-year-old in the transplant case — because
none of them can be party to terms.

**Some Things Are Good For You Anyway.** You think a life can go badly with every stated
preference met, and you are willing to name goods independent of wanting. Nussbaum's
capabilities approach is the developed version. The bill is authorship: an objective list
of what is good for people has historically been written by whoever held the pen, and your
view needs a reason why yours is different.

**The Ones Still Here.** You reason from actual relationships and what they can bear.
That handles the dead man and the accepted dependencies better than any calculus. Its blind
spot is the being with no relationship to anyone — and the preference view's best moment is
precisely that it has something to say about them.

## Sources

- R. M. Hare, *Freedom and Reason*, Clarendon Press (1963), and *Moral Thinking: Its
  Levels, Method and Point*, Clarendon Press (1981) — universalisability as the route to
  weighing preferences equally.
- Peter Singer, *Animal Liberation*, New York Review / Random House (1975) — equal
  consideration of interests and the argument against speciesism.
- Peter Singer, *Practical Ethics*, Cambridge University Press (1979; 3rd edition 2011) —
  the systematic statement.
- Katarzyna de Lazari-Radek and Peter Singer, *The Point of View of the Universe: Sidgwick
  and Contemporary Ethics*, Oxford University Press (2014) — Singer's own case for
  abandoning preference utilitarianism in favour of hedonism.
- Martha Nussbaum, *Women and Human Development: The Capabilities Approach*, Cambridge
  University Press (2000) — adaptive preference and the case for an objective list.
