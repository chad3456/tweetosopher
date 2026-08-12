---
id: protagorean-relativism
title: Man Is the Measure of All Things
category: theory
tradition: sophism
philosophers:
  - Protagoras
era: "c. 440 BCE"
tags: [relativism, custom, truth, disagreement, tolerance]
sources:
  - author: Plato
    title: Theaetetus
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Herodotus
    title: "Histories, Book III"
    published: "the Darius anecdote on funeral customs"
  - author: Bernard Williams
    title: "Ethics and the Limits of Philosophy"
    published: Harvard University Press
    year: 1985
  - author: Gilbert Harman
    title: "Moral Relativism Defended"
    published: "The Philosophical Review 84(1), 3–22"
    year: 1975
questions:
  - id: q1
    prompt: >-
      Protagoras says man is the measure of all things: things are to each
      person as they appear to that person. Applied to morals, that means
      neither of two disagreeing societies is mistaken. Can you hold that?
    options:
      - id: a
        label: >-
          Yes, and it is the only honest position. Every standard anyone has
          offered turned out to be somebody's local standard.
        scores: { relativist: 1.0, certainty: -0.8, authority: 0.4 }
      - id: b
        label: >-
          No, and the position defeats itself. If it is true for me that
          relativism is false, you have to grant me that too.
        scores: { deontological: 0.9, divine: 0.4, certainty: 0.8 }
      - id: c
        label: >-
          There is one non-local fact: some arrangements cause more misery
          than others, and everyone recognises misery when it is theirs.
        scores: { consequentialist: 1.0, scope: 0.8 }
      - id: d
        label: >-
          The disagreement is usually smaller than it looks. Most societies
          want similar things and differ about how to get them.
        scores: { contractarian: 0.9, virtue: 0.4, certainty: -0.4 }
  - id: q2
    prompt: >-
      Herodotus tells of Darius asking Greeks what he would have to pay them
      to eat their dead fathers, and asking Indians who eat their dead what
      he would pay them to burn theirs. Both were horrified. Custom, he
      concludes, is king of all.
    options:
      - id: a
        label: >-
          The story proves what it says. Both groups experienced their custom
          as the natural order, and neither could see it from outside.
        scores: { relativist: 1.0, affect: 0.5, certainty: -0.6 }
      - id: b
        label: >-
          It proves only that funerals vary. Neither group would have taken
          money to kill their fathers, and that is the interesting part.
        scores: { deontological: 0.8, divine: 0.4, certainty: 0.7 }
      - id: c
        label: >-
          Both practices honour the dead and disgust outsiders. The shared
          thing is doing right by your father, and it is not local.
        scores: { care: 0.9, virtue: 0.4, scope: -0.4 }
      - id: d
        label: >-
          Practices survive because they work in a place — sanitation, land,
          climate. Look for the function before calling it arbitrary.
        scores: { consequentialist: 0.9, contractarian: 0.4, affect: -0.5 }
  - id: q3
    prompt: >-
      Protagoras himself did not conclude that anything goes. He said the
      wise adviser cannot make one city's view truer than another's, but can
      make it better for that city — the way a doctor changes a sick man's
      state rather than correcting his error.
    options:
      - id: a
        label: >-
          That is the right refinement. You can improve a practice by its own
          lights without needing a view from nowhere.
        scores: { relativist: 0.9, consequentialist: 0.4, certainty: -0.5 }
      - id: b
        label: >-
          "Better for that city" smuggles a standard back in. Better by what
          measure, if not one that stands outside the city?
        scores: { deontological: 0.8, divine: 0.4, certainty: 0.7 }
      - id: c
        label: >-
          It is a working politics: negotiate from what people already accept,
          because that is the only leverage anyone has ever had.
        scores: { contractarian: 1.0, authority: 0.4 }
      - id: d
        label: >-
          Then the adviser decides what counts as sick. That is a great deal
          of power for a man who says there is no truth of the matter.
        scores: { relativist: 0.4, egoist: 0.7, authority: 0.8 }
  - id: q4
    prompt: >-
      You work for an NGO in a country where a practice you regard as a
      serious harm to girls is defended locally as tradition — including by
      many of the women whose daughters it affects. Your funding depends on
      results and your access depends on relationships.
    options:
      - id: a
        label: >-
          Oppose it directly and accept the cost. Whether a harm is
          traditional has nothing to do with whether it is a harm.
        scores: { deontological: 0.9, divine: 0.4, scope: 0.7 }
      - id: b
        label: >-
          Work through the people inside it who already want it to change,
          and go at their speed even when it is slower than yours.
        scores: { care: 1.0, relativist: 0.4, scope: -0.4 }
      - id: c
        label: >-
          Do whatever measurably reduces the number of girls affected, even
          if that means saying less than you believe.
        scores: { consequentialist: 1.0, egoist: 0.3, affect: -0.6 }
      - id: d
        label: >-
          You are a foreigner with money in a place you do not live. The
          strongest reason for caution is that you may be wrong.
        scores: { relativist: 0.9, contractarian: 0.4, certainty: -0.8 }
outcomes:
  - id: custom-is-king
    dominant: relativist
    label: Custom Is King
    text: >-
      You hold that moral claims are made from somewhere, that every standard
      offered as universal has turned out to have a postcode, and that this is
      a discovery rather than a defeat. It makes you unusually good at seeing
      what a practice does for the people inside it. The cost is the case you
      cannot argue: when the practice is defended by exactly the people it
      harms, your position gives you no ground to stand on, and refusing to
      stand anywhere is itself a decision with consequences for somebody else's
      daughter.
    base_rate: null
  - id: the-standard-outside
    dominant: deontological
    label: Some Things Are Not Local
    text: >-
      You think the relativist argument proves less than it claims: that
      funerals vary does not show that anything goes, and a position which
      cannot say a practice is wrong has given up something people plainly
      mean when they speak. You also have the self-refutation charge, which
      Plato pressed and which has never been fully answered. What you owe is
      the positive account — where the non-local standard comes from — and
      every answer to that has itself arrived through some particular history.
    base_rate: null
  - id: measure-the-harm
    dominant: consequentialist
    label: Suffering Is Not a Custom
    text: >-
      You grant that ceremonies and manners vary and deny that this reaches
      the things that matter: pain, hunger, early death, and the fear of them.
      This gives you a cross-cultural standard without any metaphysics, and it
      is the one most international practice actually runs on. It strains
      where people trade suffering for something they value more — honour,
      salvation, belonging — and tell you sincerely that your measure is not
      the important one.
    base_rate: null
  - id: what-can-be-agreed
    dominant: contractarian
    label: Negotiate From What Is Shared
    text: >-
      You think the disagreement is usually narrower than it is presented, and
      that the practical route runs through what people already accept rather
      than through a standard imposed from outside. Protagoras himself worked
      this way, and it is how nearly every durable reform has actually
      happened. Its limit is the case where nothing relevant is shared, or
      where the people at the table were selected by the practice you are
      trying to change.
    base_rate: null
  - id: the-people-inside-it
    dominant: care
    label: The People Inside It
    text: >-
      You resolve the question by attending to particular people rather than
      to the clash of frameworks — the mothers, the daughters, the ones who
      already want it to change — and you are willing to move at their pace.
      This avoids both the arrogance of the outsider and the paralysis of the
      relativist. The price is time, and time is not neutral: while you are
      building the relationship, the practice continues, and you have decided
      that is acceptable without saying so out loud.
    base_rate: null
  - id: who-decides-what-is-sick
    dominant: egoist
    label: Who Holds the Thermometer
    text: >-
      You notice the move in Protagoras's own refinement: once the adviser
      decides which state of the city counts as sick, he has all the authority
      a truth-claim would have given him and none of the accountability. That
      suspicion applies to donors, consultants, and anyone whose expertise
      happens to be indispensable. It is well founded. What it does not supply
      is what to do next — a critique of everyone's motives leaves the
      practice exactly where it was, which suits whoever currently benefits.
    base_rate: null
---

## What it means

Protagoras of Abdera, the most famous of the sophists, opened a lost book with a
sentence that has survived because everyone quoted it: *of all things the measure is
man, of things that are that they are, and of things that are not that they are not.*

Plato's *Theaetetus* preserves the fullest ancient discussion, and Socrates gives it a
concrete gloss: the same wind blows, and one person feels cold while another does not.
It is not that one of them is wrong. The wind is cold to the one and not cold to the
other, and there is no further fact about how the wind really is. Extended to
appearances generally, this gives a doctrine on which truth is always truth-for-someone
— and extended to morals and law, it gives the claim that what is just in a city is what
that city holds to be just, with no higher court.

The empirical case for it was already familiar in the fifth century. Herodotus reports
Darius summoning Greeks, who burned their dead, and Callatiae from India, who ate them,
and asking each what payment would induce them to adopt the other's practice; both
recoiled, and Herodotus concludes with a line from Pindar, that custom is king of all.
The sophists travelled, and travelling makes the variety of *nomos* — custom, convention,
law — hard to unsee.

What is less often remembered is Protagoras's own qualification, which Plato has him
make in his defence. He does not say that all views are equally good. He says that no
adviser can make one city's view *truer* than another's, but that a wise adviser can
make a city's condition *better* — as a doctor changes a patient's state rather than
correcting a false belief. Some appearances are worth having and some are not, even
though none is more true.

Plato's objection is the famous self-refutation argument, and it is at 171a of the
*Theaetetus*: most people believe that Protagoras's doctrine is false. If truth is
truth-for-each, then it is true for them that it is false — so by his own account
Protagoras must concede that his doctrine is false for almost everybody.

## What it suggests

If Protagoras is right, then moral criticism across a boundary changes character. You
cannot tell another society it is mistaken, as you might tell it its bridge calculations
are mistaken. What you can do is what he says the wise adviser does: work from what the
people there already hold, and try to move a practice toward something that serves them
better *by their own lights*. That is not a small thing. It is roughly how effective
reform has always worked, and it explains why reform imposed from outside tends to
produce the appearance of change and the persistence of the practice.

It also has a good record as a caution. Gilbert Harman's modern defence of relativism
notes that moral judgements of the strongest kind — "he ought not to have done that" —
seem to presuppose that the agent shares a framework with the speaker, and that when
they plainly do not, the judgement misfires. Anyone who has watched a confident foreign
intervention rest on assumptions nobody local held has seen the point demonstrated.

The objections are severe and they are not only Plato's. The self-refutation argument
can be blunted by careful formulation, but the practical difficulty remains: relativism
is almost never held consistently. The people who hold it want to say that slavery was
wrong, not merely that it is out of fashion here — and once you allow that one sentence,
the position has been abandoned in the only case where it mattered.

There is also a subtler problem, which Bernard Williams identified. Relativism is
usually offered as an argument for tolerance, but tolerance is itself a value, and if no
value is non-local then the injunction to tolerate is just another custom with no
special claim on anyone. The relativist who tells an intolerant society to stand down is
doing the thing their position forbids.

And there is the question of who benefits. "This is our tradition" is a sentence
overwhelmingly spoken by the people a tradition suits, about the people it does not.
Deferring to a culture usually means deferring to whoever is authorised to speak for it.

## The problem

Sofia has run the regional office for four years and the file on her desk concerns a
school.

The village has a secondary school with two hundred and forty pupils, built with her
organisation's money in 2019. Girls attend until they are married, which locally happens
between thirteen and fifteen, at which point they stop. The marriages are arranged
between families, they are legal under national law with parental consent, and the
alternative for most of these families is a daughter who is an economic liability
through a drought year.

Sofia has spent four years learning not to say the obvious sentence. She has watched two
predecessors say it — one publicly, one to a district official — and she knows what
happened to the programme afterwards, and to the two staff members who were local.

She now has three things in front of her. A donor requirement to report on girls'
secondary completion, which she cannot meet honestly. A proposal from Amina, her deputy,
who grew up in the next district and was married at fourteen and is now thirty-one with
a master's degree, to fund a boarding option in the town twenty miles away — which would
help perhaps twelve girls a year and would be understood locally as exactly what it is.
And a letter from the girls' mothers' committee, which she has read four times, saying
that they want the boarding option, that they want it quietly, and that Sofia should
not attend the meeting where it is discussed.

The last of these is the one that has stopped her. The mothers are not asking her to
respect their culture. They are asking her to be useful and to stay out of the room,
and she cannot work out whether that is a rebuke, a strategy, a kindness, or all three
— and whether the version of her that finds it difficult is the version that thinks she
should be in charge of what happens to other people's daughters.

## The questions

**1. Man is the measure.** Applied to morals: neither of two disagreeing societies is
mistaken. Can you hold that?

- Yes, and it is the only honest position. Every universal turned out to be local.
- No, and it defeats itself. If it is true for me that it is false, grant me that.
- One non-local fact: some arrangements cause more misery, and everyone knows misery.
- The disagreement is usually smaller than it looks.

**2. Darius and the funerals.** Greeks who burned their dead and Indians who ate theirs,
each horrified by the other. Custom is king.

- It proves what it says. Neither could see their own custom from outside.
- It proves only that funerals vary. Neither would have taken money to kill their fathers.
- Both are doing right by their fathers. The shared thing is not local.
- Practices have functions. Look for the function before calling it arbitrary.

**3. The doctor, not the corrector.** Protagoras says the adviser cannot make a view
truer, only the city's condition better.

- The right refinement. You can improve a practice by its own lights.
- "Better" smuggles a standard back in. Better by what measure?
- It is a working politics: negotiate from what people already accept.
- Then the adviser decides what counts as sick, which is a lot of power.

**4. The NGO.** A practice you regard as serious harm is defended locally, including by
mothers of the girls affected.

- Oppose it directly and accept the cost. Traditional harm is still harm.
- Work through those inside who want change, at their speed.
- Do whatever measurably reduces the number affected, even if you say less than you believe.
- You are a foreigner with money. The strongest reason for caution is that you may be wrong.

## Reading your answer

**Custom Is King.** You hold that every standard offered as universal has turned out to
have a postcode, and you treat that as a discovery. It makes you unusually good at
seeing what a practice does for the people inside it. Its cost arrives when the practice
is defended by the people it harms: your position gives you nowhere to stand, and
declining to stand anywhere is a decision whose consequences land on someone else's
daughter.

**Some Things Are Not Local.** You think the relativist proves less than claimed — that
funerals varying does not license anything — and you have the self-refutation argument,
which has never been fully answered. What you owe is the positive account: where the
non-local standard comes from, given that every version of it you have encountered
arrived through a particular history.

**Suffering Is Not a Custom.** You concede that manners and ceremonies vary and deny it
reaches pain, hunger and early death. This gets you a cross-cultural standard without
metaphysics, and it is the one most international practice actually runs on. It strains
where people knowingly trade suffering for honour, salvation or belonging, and tell you
your measure is not the important one.

**Negotiate From What Is Shared.** You think disagreements are narrower than advertised
and that leverage runs through what people already hold. Protagoras worked this way and
so has almost every durable reform. Its limit is the case where nothing relevant is
shared — or where the people at the table were chosen by the practice you came to
change.

**The People Inside It.** You resolve toward particular people rather than clashing
frameworks, and you move at their pace. This escapes both the outsider's arrogance and
the relativist's paralysis. The price is time, and time is not neutral: while the
relationship is being built the practice continues, and you have accepted that without
saying so.

**Who Holds the Thermometer.** You spot the move inside Protagoras's own refinement:
whoever decides which condition counts as sick has all the authority a truth-claim would
confer and none of the accountability. That suspicion is well founded and it applies to
donors and experts as much as to sophists. What it does not supply is a next step — a
critique of everyone's motives leaves the practice untouched, which suits whoever is
currently served by it.

## Sources

- Plato, *Theaetetus* (151d–179d), in *Plato: Complete Works*, ed. John M. Cooper
  (Hackett). The measure doctrine, the wind, the doctor analogy, and the self-refutation
  argument.
- Herodotus, *Histories*, Book III, 38 — Darius, the Greeks and the Callatiae.
- Gilbert Harman, "Moral Relativism Defended", *The Philosophical Review* 84(1) (1975),
  3–22.
- Bernard Williams, *Ethics and the Limits of Philosophy* (Harvard University Press,
  1985), chapter 9, on "the relativism of distance" and why relativism cannot ground
  tolerance.
- Plato, *Protagoras*, for the Great Speech, which gives Protagoras a considerably more
  substantive moral position than the slogan suggests.
