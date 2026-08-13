---
id: kin-selection
title: Kin Selection
category: theory
tradition: evolutionary-ethics
philosophers:
  - W.D. Hamilton
era: "1964"
tags: [evolution, family, partiality, nepotism, altruism, inclusive-fitness]
sources:
  - author: W. D. Hamilton
    title: "The Genetical Evolution of Social Behaviour, I and II"
    published: "Journal of Theoretical Biology 7(1), 1–16 and 17–52"
    year: 1964
  - author: Richard Dawkins
    title: The Selfish Gene
    published: Oxford University Press
    year: 1976
  - author: Martin A. Nowak, Corina E. Tarnita, Edward O. Wilson
    title: "The evolution of eusociality"
    published: "Nature 466, 1057–1062"
    year: 2010
  - author: Patrick Abbot and 136 co-authors
    title: "Inclusive fitness theory and eusociality"
    published: "Nature 471, E1–E4"
    year: 2011
  - author: William Godwin
    title: An Enquiry Concerning Political Justice
    published: G. G. J. and J. Robinson
    year: 1793
  - author: Samuel Scheffler
    title: "Relationships and Responsibilities"
    published: "Philosophy and Public Affairs 26(3), 189–209"
    year: 1997
questions:
  - id: q1
    prompt: >-
      A building is burning. You can carry out one person. One is your own child. The
      other is a stranger's child who, you happen to know, would grow up to be a
      considerably better doctor than yours ever will.
    options:
      - id: a
        label: >-
          Your child, and the question does not arise. A parent who had to think about it
          would already have failed at the only thing being a parent is.
        scores: { care: 1.0, virtue: 0.5, scope: -1.0 }
      - id: b
        label: >-
          Your child, and be clear that this is partiality, not justification. You are
          doing what you must, and it is not the same as doing what is best.
        scores: { care: 0.8, consequentialist: 0.4, certainty: -0.6 }
      - id: c
        label: >-
          The other child, if you really knew that. Being born to you is not a moral
          qualification, and a life you are attached to is not worth more.
        scores: { consequentialist: 1.0, scope: 1.0, affect: -0.8 }
      - id: d
        label: >-
          Your child, because you have a duty to her that you contracted by having her,
          and duties are not suspended by comparative merit.
        scores: { deontological: 1.0, certainty: 0.6, scope: -0.5 }
  - id: q2
    prompt: >-
      Hamilton's rule says a costly helping behaviour spreads when the benefit to the
      recipient, discounted by relatedness, exceeds the cost to the helper. Suppose your
      strong feeling for your sister has this as its explanation.
    options:
      - id: a
        label: >-
          Then the feeling is not diminished. Explaining the origin of love does not
          convert it into arithmetic any more than explaining hunger makes bread a number.
        scores: { care: 0.9, virtue: 0.5, affect: 0.7 }
      - id: b
        label: >-
          Then family partiality is a fact about our machinery with no moral standing,
          and any weight it gets in public decisions has to be argued for separately.
        scores: { consequentialist: 0.9, contractarian: 0.5, scope: 0.7 }
      - id: c
        label: >-
          Then it is worth noticing how far your circle is really drawn by biology and
          how far by acquaintance — you would die for an adopted sister too.
        scores: { virtue: 0.9, care: 0.4, certainty: -0.5 }
      - id: d
        label: >-
          Then nothing follows about obligations at all. The genealogy of a motive is
          silent on whether it should be obeyed.
        scores: { deontological: 0.9, certainty: 0.7, affect: -0.4 }
  - id: q3
    prompt: >-
      You chair a hiring panel. The strongest candidate on paper is your nephew, whom you
      did not encourage to apply and who is genuinely the best of the four. Nobody else
      on the panel knows he is related to you.
    options:
      - id: a
        label: >-
          Declare the relationship and recuse yourself. What is at stake is whether the
          process can be trusted, and it cannot be trusted by people who were not told.
        scores: { contractarian: 1.0, deontological: 0.5, authority: -0.3 }
      - id: b
        label: >-
          Declare it and stay. Recusal costs the organisation your judgement on a panel
          of four, and the disclosure is what does the actual work.
        scores: { consequentialist: 0.8, contractarian: 0.5, certainty: -0.4 }
      - id: c
        label: >-
          Say nothing and appoint the best candidate. You would have picked him either
          way, and the disclosure introduces a distortion that was not there before.
        scores: { consequentialist: 0.9, egoist: 0.4, scope: -0.6 }
      - id: d
        label: >-
          Declare it, recuse yourself, and accept that they may appoint worse. The
          appearance of integrity is part of integrity, not a substitute for it.
        scores: { virtue: 1.0, deontological: 0.5, certainty: 0.5 }
  - id: q4
    prompt: >-
      William Godwin argued in 1793 that if you could save only one from a fire — a great
      benefactor of mankind, or your own mother — you should save the benefactor, and
      that "what magic is there in the pronoun my" to alter the calculation.
    options:
      - id: a
        label: >-
          Godwin is right and almost nobody can live it. That is a fact about our
          weakness, not a refutation of the argument.
        scores: { consequentialist: 1.0, scope: 1.0, affect: -0.9 }
      - id: b
        label: >-
          The magic in the pronoun is that a life without such pronouns is not a human
          life. A theory that cannot house that has described nobody.
        scores: { care: 1.0, virtue: 0.6, scope: -0.8 }
      - id: c
        label: >-
          Partiality is legitimate but bounded. You may save your mother; you may not
          hand her the contract, the visa or the hospital bed.
        scores: { contractarian: 0.9, consequentialist: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          The obligation to a parent is not a preference to be weighed at all. It is a
          debt, and debts are not settled by comparing the creditors' usefulness.
        scores: { deontological: 1.0, divine: 0.3, certainty: 0.7 }
outcomes:
  - id: the-pronoun
    dominant: care
    label: The Magic in the Pronoun
    text: >-
      You hold that particular attachments are not a defect in impartial reasoning but the
      substance of a life, and that a parent who deliberated about the burning building
      would have failed at something more important than the deliberation. Samuel
      Scheffler's work on relationships and responsibilities is the strongest philosophical
      defence of your position. Its price is that partiality has no natural boundary of its
      own. Everything from a lift home to a rigged appointment comes out of the same
      impulse, and you will need something other than the impulse to tell you where it stops.
    base_rate: null
  - id: the-impartial
    dominant: consequentialist
    label: No Magic in the Pronoun
    text: >-
      You take the Godwinian line: that a person's claim on you does not increase because
      they share your surname, and that the feeling which says otherwise is a fact about
      how we were built rather than about what is owed. This is the reasoning behind
      anti-nepotism rules, blind marking and universal provision, and it has improved a
      great deal. The cost is that you are committed to describing ordinary parental love
      as a bias to be managed, and it is worth checking whether you are willing to say
      that out loud to the people it concerns.
    base_rate: null
  - id: the-owed
    dominant: deontological
    label: The Debt You Did Not Choose
    text: >-
      You treat the claim of a parent, a child or a sibling as an obligation rather than a
      preference, which means it does not have to win a comparison to be binding. This
      protects family duty from being outbid by anyone more useful, and it explains why
      abandoning a dependent feels like a wrong done rather than a good foregone. What it
      owes is a source. If the duty is not chosen and not calculated, you need an account
      of where it comes from that does not collapse into either sentiment or biology.
    base_rate: null
  - id: the-declared
    dominant: contractarian
    label: Declare It and Be Bound
    text: >-
      Your answer to partiality is not to eliminate it but to make it visible and hold it
      to rules everyone can see — disclosure, recusal, the standard applied to all. This
      is the only workable response in institutions, because it does not require anyone to
      stop loving their family, only to stop deciding alone. Its weakness is that it puts
      all the weight on procedure, and the person who complies with every rule while
      steering the outcome is precisely the person the rules cannot catch.
    base_rate: null
  - id: the-character
    dominant: virtue
    label: The Kind of Relative to Be
    text: >-
      You are less interested in the rule than in what the choice makes of you, and you
      notice that the same warmth which makes someone a good parent makes them a bad panel
      chair. So you attend to the disposition rather than the case. That is realistic, and
      it explains why people who behave well under scrutiny often behave badly without it.
      What you cannot supply is a decision procedure, and the burning building does not
      wait for character to be formed.
    base_rate: null
---

## What it means

In 1964 W. D. Hamilton published two papers in the *Journal of Theoretical Biology* under
the title "The Genetical Evolution of Social Behaviour". They contained the idea now
known as **kin selection** or **inclusive fitness**, and they solved the problem Darwin
himself had flagged as potentially fatal to his theory: the sterile worker bee, which
raises no offspring at all and therefore ought, on any simple reading of natural
selection, not to exist.

Hamilton's move was to shift the accounting unit. What propagates is not an individual but
the genes an individual carries — and copies of those genes are also carried by relatives,
with a probability given by how closely related they are. A full sibling shares, on
average, half your genes by descent; a cousin, an eighth. So a gene that disposes you to
help relatives can spread even at cost to you, provided the help is efficient enough.
Hamilton's rule states the condition compactly: the behaviour is favoured when *rb > c* —
relatedness times benefit to the recipient exceeds cost to the actor.

The line usually attached to this, that one should lay down one's life for two brothers or
eight cousins, is credited to J. B. S. Haldane and was reported second-hand; it predates
Hamilton's formalism and stands as a joke, not a derivation. Hamilton's own papers are
dense population genetics. Richard Dawkins made the framework famous in *The Selfish Gene*
(1976), where the point is made carefully and is then, in popular retelling, routinely
mangled: the gene is called selfish, the organism is not, and the theory's whole content
is an explanation of unselfish behaviour.

The theory is not uncontested inside biology. In 2010 Martin Nowak, Corina Tarnita and
E. O. Wilson argued in *Nature* that inclusive fitness theory was a limited and often
unnecessary special case, and that standard natural selection models handled eusociality
better. The response was extraordinary: a rebuttal in *Nature* the following year signed
by Patrick Abbot and 136 other biologists, rejecting the argument. The dispute concerns
the mathematics and its scope rather than whether relatives help each other, and it has
not obviously been settled; anyone citing kin selection as unanimous consensus is
overstating the case.

## What it suggests

For ethics, the interest is not the equations but what they explain about us. Kin selection
predicts, and the anthropological record broadly confirms, that human beings will be
reliably more generous towards close relatives, that inheritance and nepotism will be
universal tendencies rather than local corruptions, and that appeals to fictive kinship —
brotherhood, fatherland, the family of man — will be powerful precisely because they
borrow machinery built for something else.

That leaves two very different conclusions available, and which one you take is what this
entry tests.

The first is deflationary. If your feeling that your child matters more is the output of a
gene-propagating mechanism, then it is a bias like any other, and it has no more standing
in a decision about who gets the ventilator than your preference for people who look like
you. William Godwin got there in 1793 without any biology at all, in the famous passage
asking what magic there is in the pronoun *my* that should overturn the decisions of
impartial truth. Godwin's own example — save the great benefactor rather than your mother
— has been an embarrassment to utilitarianism ever since, mostly because almost nobody
believes it.

The second conclusion is that the impartial standpoint has been asking for something
inhuman. Bernard Williams's charge is that a man who saves his wife from drowning after
establishing that morality permits it has had one thought too many. Samuel Scheffler
argues in "Relationships and Responsibilities" (1997) that valuing a relationship just is
being disposed to see the other person's interests as giving you reasons — so someone who
weighed his daughter impartially would not have a relationship with her at all, and the
impartialist demand is not a demand for better behaviour within relationships but for
their abolition.

The strongest objection to that defence is that partiality does not come with a boundary
marked on it. The warmth that makes someone a good parent is continuous with the warmth
that gets a nephew a job, a cousin a visa and a family a hospital bed ahead of strangers,
and no amount of insisting on the depth of family love tells you where the line falls.

## The problem

You are the senior clinician on call, and the transfer list has one intensive care bed.

Two patients qualify. One is a fifty-eight-year-old man from the next district whose
scores are marginally better on every measure your protocol uses. The other is your
brother-in-law's mother, who has been in your house at every Christmas for nineteen years,
who taught your daughter to swim, and whose scores are marginally worse.

Nobody has asked you to do anything improper. There is a protocol. The protocol has a
tolerance band, and both patients sit inside it, which means the decision is legitimately
yours and will not be reviewed. You could give her the bed and write a defensible note. You
know how to write the note.

What you cannot work out is whether the reluctance you feel is your integrity speaking or
your fear of being caught, and whether the pull towards her is love — which you have been
told all your life is the best thing about people — or the oldest and most ordinary form of
corruption there is.

## The questions

**1. The burning building.** You can carry out one child. One is yours; the other, you
happen to know, would grow up to do far more good.

- Your child, and the question does not arise.
- Your child, but be clear this is partiality, not justification.
- The other child, if you really knew that. Being born to you is not a qualification.
- Your child, because you contracted a duty by having her.

**2. Hamilton's rule applied to your sister.** Suppose your feeling for her has this
explanation.

- The feeling is undiminished. Explaining love does not convert it into arithmetic.
- Then family partiality is machinery, and its weight in public decisions must be argued for.
- Then notice how much of your circle is biology and how much acquaintance.
- Then nothing follows. The genealogy of a motive is silent on whether to obey it.

**3. The nephew on the shortlist.** He is genuinely the best candidate. Nobody knows he is
your nephew.

- Declare and recuse. Trust in the process is the thing at stake.
- Declare and stay. Disclosure does the work; recusal just costs the organisation.
- Say nothing and appoint the best candidate.
- Declare, recuse, and accept they may appoint worse.

**4. Godwin's fire.** Save the great benefactor or your own mother — what magic is there
in the pronoun *my*?

- Godwin is right and almost nobody can live it. That is our weakness, not his error.
- The magic is that a life without such pronouns is not a human life.
- Partiality is legitimate but bounded — the fire, yes; the contract, no.
- The obligation to a parent is a debt, not a preference to be weighed.

## Reading your answer

**The Magic in the Pronoun.** You hold that particular attachment is the substance of a
life rather than an error in impartial reasoning, and Scheffler's argument is behind you.
The price is that partiality has no internal stopping point. Everything from a lift home to
a rigged appointment draws on the same impulse, and you will need a boundary that the
impulse itself cannot supply.

**No Magic in the Pronoun.** You take a person's claim on you to be independent of their
relation to you. This is the thought behind blind marking, anti-nepotism rules and
universal provision, and it has done a great deal of good. The cost is that you must
describe ordinary parental love as a bias under management, and it is worth testing whether
you would say that to the people concerned.

**The Debt You Did Not Choose.** You treat the family claim as an obligation rather than a
preference, so it does not have to win a comparison to bind you. That explains why
abandoning a dependent feels like a wrong done rather than a good foregone. You owe an
account of where an unchosen, uncalculated duty comes from.

**Declare It and Be Bound.** You would not abolish partiality but make it visible and
subject it to rules. This is the only version that works inside institutions, since it asks
nobody to stop loving anyone. Its weakness is the person who follows every procedure and
steers the outcome anyway.

**The Kind of Relative to Be.** You attend to the disposition rather than the case, and you
notice that what makes a good parent makes a poor panel chair. Realistic, and it explains
why conduct under scrutiny predicts conduct without it so badly. What you lack is a
procedure, and the burning building will not wait.

## Sources

- W. D. Hamilton, "The Genetical Evolution of Social Behaviour, I and II", *Journal of
  Theoretical Biology* 7(1) (1964), 1–16 and 17–52.
- Richard Dawkins, *The Selfish Gene* (Oxford University Press, 1976).
- Martin A. Nowak, Corina E. Tarnita and Edward O. Wilson, "The evolution of eusociality",
  *Nature* 466 (2010), 1057–1062 — the challenge to inclusive fitness theory.
- Patrick Abbot et al. (137 authors), "Inclusive fitness theory and eusociality", *Nature*
  471 (2011), E1–E4 — the reply. The dispute is live.
- William Godwin, *An Enquiry Concerning Political Justice* (1793) — the archbishop and the
  chambermaid, and the pronoun.
- Samuel Scheffler, "Relationships and Responsibilities", *Philosophy and Public Affairs*
  26(3) (1997), 189–209 — the case that partiality is constitutive of valuing a relationship.
