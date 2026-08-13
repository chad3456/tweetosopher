---
id: buridans-ass
title: Buridan's Ass
category: paradox
tradition: medieval-philosophy
philosophers:
  - Jean Buridan
era: "c. 1340"
tags: [choice, freedom, indifference, reasons, deliberation]
sources:
  - author: Jean Buridan
    title: Questions on the Nicomachean Ethics of Aristotle
    published: "Quaestiones super decem libros Ethicorum Aristotelis ad Nicomachum, Paris"
    year: 1340
  - author: Aristotle
    title: On the Heavens
    published: "Book II, 295b — the man equally hungry and thirsty"
    year: -350
  - author: Baruch Spinoza
    title: Ethics
    published: "Part II, proposition 49, scholium — the ass discussed by name"
    year: 1677
  - author: Jack Zupko
    title: John Buridan — Portrait of a Fourteenth-Century Arts Master
    published: University of Notre Dame Press
    year: 2003
  - author: Edna Ullmann-Margalit and Sidney Morgenbesser
    title: Picking and Choosing
    published: "Social Research 44, 757–785"
    year: 1977
questions:
  - id: q1
    prompt: >-
      Two charities do work you judge equally valuable, equally well run, equally
      in need. You have one donation to give and no further information is
      obtainable. What do you do with the tie?
    options:
      - id: a
        label: >-
          Flip a coin and send it. The tie means the choice does not matter, and
          treating it as if it did wastes the only thing that does — the money.
        scores: { consequentialist: 1.0, certainty: 0.4, affect: -0.5 }
      - id: b
        label: >-
          Keep looking. A tie almost always means you have not found the
          difference yet, and stopping is a decision to stay ignorant.
        scores: { consequentialist: 0.7, virtue: 0.5, certainty: -0.6 }
      - id: c
        label: >-
          Pick one and commit to it as yours. Choosing is what converts an
          arbitrary option into something you have reasons to defend.
        scores: { existentialist: 1.0, agency: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          Break the tie with attachment — the one a friend works for, the one in
          the town you grew up in. That is not a failure of reasoning.
        scores: { care: 1.0, scope: -0.7, affect: 0.5 }
  - id: q2
    prompt: >-
      Buridan's own view was that the will can suspend judgement and go on
      deliberating rather than act. Suppose the deliberation cannot be finished
      before the deadline. Is delay itself a choice you are answerable for?
    options:
      - id: a
        label: >-
          Yes, and it is usually the worst one. Whatever happens while you deliberate
          is on your account as much as anything you do.
        scores: { consequentialist: 1.0, agency: 0.9, scope: 0.4 }
      - id: b
        label: >-
          No. Refusing to act on inadequate grounds is exactly what a careful person
          does, and the outcome of waiting is not authored by the one who waited.
        scores: { virtue: 0.9, agency: -0.8, certainty: -0.4 }
      - id: c
        label: >-
          Yes, and that is the whole point. There is no neutral position outside the
          choice from which to not-choose.
        scores: { existentialist: 1.0, agency: 0.7 }
      - id: d
        label: >-
          It depends entirely on who is waiting on you. Delay is owed differently to
          a stranger and to someone in your care.
        scores: { care: 1.0, scope: -0.6, certainty: -0.4 }
  - id: q3
    prompt: >-
      Two patients, one organ, and every clinical and social criterion comes out
      level. The committee must decide by morning and you chair it.
    options:
      - id: a
        label: >-
          Randomise, publicly, and record that you did. A visible lottery is the
          only tie-break that does not smuggle in a preference nobody voted for.
        scores: { consequentialist: 0.8, contractarian: 0.6, scope: 0.6 }
      - id: b
        label: >-
          Refuse to randomise. A human life is not decided by a coin, and someone
          on the committee must be willing to judge and to carry it.
        scores: { virtue: 1.0, agency: 0.5, affect: 0.6 }
      - id: c
        label: >-
          Find a further criterion — years of life, dependants, anything — because
          a genuine tie between two people is almost never real.
        scores: { consequentialist: 1.0, scope: 0.5, certainty: -0.4 }
      - id: d
        label: >-
          Decide, and refuse to pretend the decision was determined by anything but
          you deciding. Dressing it as a procedure is the evasion.
        scores: { existentialist: 1.0, agency: 0.6, certainty: -0.3 }
  - id: q4
    prompt: >-
      Someone tells you that when reasons run out, whatever you do next is
      arbitrary — and that this shows most of your moral life is arbitrary, since
      reasons run out constantly.
    options:
      - id: a
        label: >-
          Reasons rarely run out that cleanly. Perfect ties are laboratory objects;
          real cases have grain if you look.
        scores: { consequentialist: 0.7, virtue: 0.5, certainty: 0.4 }
      - id: b
        label: >-
          They do run out, and that is where freedom lives rather than where it fails.
          A choice fully determined by reasons would not be a choice.
        scores: { existentialist: 1.0, certainty: -0.5 }
      - id: c
        label: >-
          They run out, and what fills the gap is character — habits laid down long
          before the case arrived, doing the work reasoning cannot.
        scores: { virtue: 1.0, affect: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          They run out, and what fills the gap is who you love. Attachment is not the
          residue left when reasoning fails; it is what reasoning was serving.
        scores: { care: 1.0, scope: -0.7 }
outcomes:
  - id: the-tie-breaks-itself
    dominant: consequentialist
    label: The Tie Is Information
    text: >-
      You treat a perfect tie as a report about your evidence rather than about the
      world, and you treat deliberation as a cost that has to justify itself against
      the good the decision is meant to produce. This keeps you moving while others
      stall, which in most real cases is worth more than the accuracy you gave up.
      Its exposure is the case where the thing you randomised was not a quantity —
      where treating two people as interchangeable was itself the wrong done.
    base_rate: null
  - id: the-choosing
    dominant: existentialist
    label: The Choice Makes the Reason
    text: >-
      You think the paradox has the order backwards. Reasons do not run out and leave
      you stranded; they were never going to reach all the way down, and the choice is
      what converts an option into a commitment with a history. This is the only view
      on which the ass's problem is not a problem at all. What it costs you is the
      ability to say you got it wrong in a strong sense, since a choice that authors
      its own reasons is hard to convict of error.
    base_rate: null
  - id: the-settled-character
    dominant: virtue
    label: What You Do Without Deciding
    text: >-
      You locate the answer in the person rather than the procedure — in habits laid
      down long before the case arrived, which act when argument has nothing left to
      say. This explains something the other answers struggle with, namely that people
      of good judgement resolve ties quickly and well without being able to say why.
      The objection is that it is unfalsifiable from the inside. Settled character and
      settled prejudice feel identical to the person who has one.
    base_rate: null
  - id: the-particular-tie
    dominant: care
    label: The Tie Broken by Attachment
    text: >-
      You break ties the way people actually break them — toward the one you know, the
      place you are from, the person in front of you. You are right that this is not a
      lapse in reasoning but a different starting point, and right that impartial
      accounts owe an explanation for why anyone should have children rather than
      donors. Where it is exposed is the committee room, where the person you happen
      to know is not the person with the better claim, and the tie-break becomes the
      quiet operation of privilege.
    base_rate: null
  - id: the-visible-lottery
    dominant: contractarian
    label: The Tie Broken in Public
    text: >-
      You reach for a procedure rather than a reason: where nothing distinguishes the
      options, what makes the choice defensible is that the method was fixed in advance,
      visible, and the same for everyone. This is the one answer that survives being
      questioned afterwards, which is why institutions converge on it. Its limit is that a
      lottery is only fair if the pool was; randomising at the last step can launder every
      unfairness that decided who was standing there to be randomised over.
    base_rate: null

---

## What it means

A donkey stands exactly midway between two identical bales of hay. It is equally
hungry for both, has no reason to prefer either, and — if action requires a
reason, and reasons are what move the will — it starves.

The joke is older than the man it is named for. Aristotle raises the structure in
*On the Heavens*, asking about a man equally hungry and thirsty placed at equal
distance from food and drink, and uses it as a case about why the earth stays
still. Medieval Arabic and Latin writers pass versions of it around. What is
striking is that the animal does not appear in Jean Buridan's surviving work at
all. It was attached to his name, most likely by opponents, because of the
position he actually held.

Buridan, teaching arts at Paris in the mid fourteenth century, held a broadly
intellectualist account of the will: the will is moved by the intellect's judgement
of what is best, and cannot choose what the intellect presents as worse. His
critics saw the obvious consequence. If the intellect returns a tie, the will has
nothing to move it, and the agent is frozen. Buridan's own answer, as Jack Zupko
reconstructs it, was that the will has one further power — it can *suspend*
judgement and send the case back for more deliberation. That is a genuine escape
from paralysis, though critics note it also postpones rather than solves: an agent
who can only defer is still an agent who cannot act on a tie.

Spinoza, in the scholium to *Ethics* IIP49, mentions the ass directly and takes
the hard line: a man in such a position genuinely would starve, and anyone who
denies it does not understand what a mind is. Others — Leibniz among them —
denied that a perfect tie is even possible in a world of sufficient reasons. What
survives the medieval framing is the general question, which is not about donkeys.
When your reasons run out, what moves you? And is whatever moves you then part of
your moral life, or a gap in it?

## What it suggests

Take the case seriously and the neat picture of practical reasoning — survey the
options, weigh them, act on the winner — turns out to be incomplete in a way that
matters for ordinary decisions and not just for exotic ones. Reasons underdetermine
action constantly. Two job offers, two candidates, two equally defensible ways to
allocate a budget. Edna Ullmann-Margalit and Sidney Morgenbesser argued in 1977
that we should distinguish *choosing*, where reasons decide, from *picking*, where
they do not and something else must — and that picking is far more common than
anyone's theory of rationality admits.

If picking is common, the interesting question is what does it. One answer is
randomisation, which has the virtue of being honest and the vice of being cold:
transplant committees, school lotteries and military drafts all use it, and all
attract the complaint that a coin is not a reason. A second answer is that
character does it — the settled dispositions of a practically wise person deliver
an answer where deliberation stalls, which is roughly Aristotle's line and the
reason virtue ethicists find the case less alarming than others do. A third is
that attachment does it: you give to the hospital that treated your father, and
this is not a failure to be impartial but a refusal to be.

The strongest objection to making anything of the paradox at all is that perfect
ties are artefacts. Leibniz's version: in any real case there is always some
asymmetry, and the tie exists only because the description was stripped down until
it did. The reply is that this is true of the bales of hay and false of the
transplant committee, where the criteria are finite, published, and genuinely do
run out — and where the point at which they run out is where the moral action
actually is.

## The problem

Two boys came into the ward within an hour of each other, and there is one bed in
the paediatric intensive care unit.

Dr Halvorsen has been running triage for eleven years and has never had the
criteria fail her before. Both boys are eight. Both have the same injury from the
same collapsed stand at the same match. The scoring instrument the hospital
adopted after the last inquiry gives them identical numbers, twice, checked by two
people. Neither has a condition that changes the prognosis. Neither arrived first
in any sense the log can settle — the ambulances were logged in the same minute by
the same clerk.

The protocol says that where criteria are equal, the decision passes to the
consultant on duty. It does not say on what basis.

She knows one of the families slightly; their older daughter is in her son's
class. She is aware that she knows this, and aware that she must not use it, and
aware that being aware of it has not removed it from her mind. The registrar
suggests, quietly, that they toss for it and record the toss. The senior nurse
says that if that goes in the notes, both families will read it, and one of them
will read that a coin killed their child.

There are four minutes. Whatever she does will be a thing she did.

## The questions

**1. Two charities.** Both do work you judge equally valuable, equally well run,
equally in need. One donation, no further information available.

- Flip a coin and send it. Treating the tie as if it mattered wastes the thing
  that does.
- Keep looking. A tie usually means you have not found the difference yet.
- Pick one and commit to it as yours. Choosing is what makes it defensible.
- Break the tie with attachment — a friend works there, it is your home town.

**2. Suspending judgement.** Buridan held the will can suspend judgement and keep
deliberating. Suppose the deliberation cannot finish before the deadline.

- Delay is a choice, and usually the worst one; what happens meanwhile is yours.
- Delay is what a careful person does; the outcome of waiting is not authored by
  the one who waited.
- Delay is a choice, and that is the point — there is no position outside choosing.
- It depends on who is waiting. Delay is owed differently to a stranger.

**3. One organ, two patients.** Every criterion comes out level and the committee
must decide by morning.

- Randomise publicly and record it. Any other tie-break smuggles in a preference.
- Refuse to randomise. Someone must be willing to judge and to carry it.
- Find a further criterion. A genuine tie between two people is almost never real.
- Decide, and refuse to pretend the decision was made by a procedure.

**4. When reasons run out.** Someone says this shows most of your moral life is
arbitrary, since reasons run out constantly.

- They rarely run out that cleanly; real cases have grain if you look.
- They do, and that is where freedom lives rather than where it fails.
- They do, and character fills the gap — habits laid down before the case arrived.
- They do, and attachment fills it; that is what reasoning was serving all along.

## Reading your answer

**The Tie Is Information.** You read a tie as a fact about your evidence, not the
world, and you treat deliberation as a cost that must justify itself. You will
outperform more scrupulous people on volume and on speed, which in most real cases
is where the good actually is. You are exposed where the thing you randomised was
not a quantity — where treating two people as interchangeable was itself the wrong.

**The Choice Makes the Reason.** You think the paradox is inverted. Reasons were
never going to reach the bottom, and the choice is what turns an option into a
commitment. Nothing about the case troubles you. The cost is that a choice which
authors its own reasons is hard to convict of error, and you will want to convict
yourself of error at some point.

**What You Do Without Deciding.** You put the answer in the person, not the
procedure. This explains something the other views handle badly — that people of
good judgement settle ties fast and well without being able to say why. The
objection is that from the inside, settled character and settled prejudice are
indistinguishable, and the confidence feels the same in both.

**The Tie Broken by Attachment.** You break ties toward the one you know, and you
are right that this is a starting point rather than a lapse. Impartial theories do
owe an account of why anyone should have children rather than donors. You are most
exposed in the committee room, where the person you happen to know is not the
person with the better claim, and the tie-break becomes privilege operating
quietly.

**The Tie Broken in Public.** You reach for a procedure rather than a reason: where
nothing distinguishes the options, what makes the choice defensible is that the method was
fixed in advance, visible, and the same for everyone. It is the answer that survives being
questioned afterwards, which is why institutions converge on it. Its limit is that a
lottery is fair only if the pool was — randomising at the last step can launder every
unfairness that decided who was standing there.

## Sources

- Jean Buridan, *Quaestiones super decem libros Ethicorum Aristotelis ad
  Nicomachum* (Paris, mid fourteenth century) — the account of the will and the
  suspension of judgement. The ass itself does not appear.
- Aristotle, *On the Heavens* II, 295b — the man equally hungry and thirsty.
- Baruch Spinoza, *Ethics* (1677), IIP49 scholium — the ass named and the
  starvation conceded.
- Jack Zupko, *John Buridan: Portrait of a Fourteenth-Century Arts Master*
  (University of Notre Dame Press, 2003) — on what Buridan actually held.
- Edna Ullmann-Margalit and Sidney Morgenbesser, "Picking and Choosing", *Social
  Research* 44 (1977), 757–785.
