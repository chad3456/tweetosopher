---
id: subject-of-a-life
title: The Subject-of-a-Life Criterion
category: theory
tradition: animal-ethics
philosophers:
  - Tom Regan
era: "1983"
tags: [animals, rights, inherent-value, killing, moral-status]
sources:
  - author: Tom Regan
    title: The Case for Animal Rights
    published: University of California Press
    year: 1983
  - author: Peter Singer
    title: Animal Liberation
    published: New York Review/Random House
    year: 1975
  - author: Peter Carruthers
    title: "The Animals Issue: Moral Theory in Practice"
    published: Cambridge University Press
    year: 1992
  - author: Carol J. Adams and Josephine Donovan (editors)
    title: "Beyond Animal Rights: A Feminist Caring Ethic for the Treatment of Animals"
    published: Continuum
    year: 1996
questions:
  - id: q1
    prompt: >-
      A research facility keeps forty beagles for toxicity testing on a compound that
      would, on the best available projection, spare a few thousand people a rare and
      painful liver disease. The dogs will be harmed and then killed. The projection
      is honest; there is no non-animal method yet.
    options:
      - id: a
        label: >-
          Stop it. Each dog has a life that goes well or badly for the dog, and that is
          not something you may trade away however good the arithmetic looks.
        scores: { deontological: 1.0, scope: 0.6, certainty: 0.6 }
      - id: b
        label: >-
          Continue, but only because the suffering prevented genuinely outweighs the
          suffering caused — and audit that claim every year.
        scores: { consequentialist: 1.0, scope: 0.5, certainty: -0.4 }
      - id: c
        label: >-
          Continue. Rights are things creatures hold against each other by mutual
          recognition, and a beagle cannot hold or honour one.
        scores: { contractarian: 0.9, deontological: 0.3, scope: -0.5 }
      - id: d
        label: >-
          The question is what the people who run this place become by doing it, and
          whether they could still look at a dog straight.
        scores: { virtue: 0.9, care: 0.4, affect: 0.6 }
  - id: q2
    prompt: >-
      Regan's criterion asks whether a creature has beliefs, desires, memory, a sense
      of its own future, and a welfare that matters to it. A pig meets it. A trout is
      disputed. An oyster almost certainly does not. Where does the line matter?
    options:
      - id: a
        label: >-
          The line is real and it is roughly there. Creatures with a life from the
          inside have inherent value; the rest have none of the relevant kind.
        scores: { deontological: 1.0, certainty: 0.5, scope: 0.4 }
      - id: b
        label: >-
          Drawing a line at all is the mistake. What matters is capacity to suffer,
          which comes in degrees, so obligations come in degrees too.
        scores: { consequentialist: 1.0, certainty: -0.5, scope: 0.6 }
      - id: c
        label: >-
          Obligation follows relationship, not a checklist. You owe the dog on your
          hearth what you do not owe a pig you will never meet.
        scores: { care: 1.0, scope: -0.7, affect: 0.5 }
      - id: d
        label: >-
          The line matters less than the habit. Cruelty practised on anything coarsens
          you, whatever the creature turns out to be inside.
        scores: { virtue: 1.0, affect: 0.4, certainty: -0.3 }
  - id: q3
    prompt: >-
      A wolf pack is killing the last breeding females of an endangered deer. Culling
      four wolves would save the deer population. The wolves are subjects-of-a-life in
      exactly Regan's sense; the deer are too, individually.
    options:
      - id: a
        label: >-
          Do not cull. A species is not a subject and cannot be wronged; only the four
          wolves you would shoot can be.
        scores: { deontological: 1.0, certainty: 0.6, scope: 0.3 }
      - id: b
        label: >-
          Cull. More individual animals will live good lives, over more years, if the
          deer survive.
        scores: { consequentialist: 1.0, scope: 0.7 }
      - id: c
        label: >-
          Intervene only where humans caused the imbalance. Otherwise this is not our
          quarrel and we are not competent to referee it.
        scores: { virtue: 0.7, deontological: 0.4, certainty: -0.5, agency: -0.6 }
      - id: d
        label: >-
          Rights language is the wrong tool outdoors. What is owed is stewardship of a
          place you are part of, not adjudication between claimants.
        scores: { care: 0.8, virtue: 0.5, scope: -0.3, certainty: -0.4 }
  - id: q4
    prompt: >-
      A lifeboat holds four people and a dog; one must go overboard or all die. Regan
      argued the dog should go, because death forecloses fewer opportunities for
      satisfaction — though he insisted this does not make the dog's value lesser.
    options:
      - id: a
        label: >-
          The dog goes, and Regan is right that this is compatible with equal inherent
          value — harm is measured by what a death takes away.
        scores: { deontological: 0.8, consequentialist: 0.5, certainty: 0.3 }
      - id: b
        label: >-
          The dog goes, and this shows the equal-value talk was decoration. You were
          comparing the worth of lives all along.
        scores: { consequentialist: 1.0, certainty: 0.5, affect: -0.5 }
      - id: c
        label: >-
          Draw lots including the dog. Anything else lets the strongest party write the
          rule that saves the strongest party.
        scores: { contractarian: 1.0, deontological: 0.4, scope: 0.7 }
      - id: d
        label: >-
          Whoever is closest to the person deciding stays. In a boat, that is how human
          beings actually behave, and it is not obviously a failing.
        scores: { care: 0.9, egoist: 0.4, scope: -0.9 }
outcomes:
  - id: inherent-value
    dominant: deontological
    label: Value That Is Not For Trading
    text: >-
      You hold that a creature with a life it experiences has a standing that cannot be
      priced, and that no total of benefits licenses using it as a resource. That gives
      you a clean answer in the laboratory and a hard one in the field: the criterion
      has an edge, and you must say where it falls and defend the creatures just outside
      it — the trout, the octopus, the human being with no sense of a future.
    base_rate: null
  - id: the-aggregate
    dominant: consequentialist
    label: Suffering Is Suffering
    text: >-
      You count experiences rather than bearers of rights, so degrees of sentience give
      you degrees of obligation without any line to police. The price is the one Regan
      pressed hardest: on your view a harm to an animal is always in principle
      purchasable, and you cannot rule out in advance the experiment whose numbers come
      out right.
    base_rate: null
  - id: mutual-recognition
    dominant: contractarian
    label: Rights Among Rights-Holders
    text: >-
      You treat moral standing as something that arises between beings who can recognise
      and honour claims, which explains why we owe each other justice rather than mere
      kindness. Your exposure is everyone inside the human species who cannot reciprocate
      either — infants, the severely cognitively impaired — and the indirect-duty
      manoeuvres used to cover them have struck many readers as an admission.
    base_rate: null
  - id: the-relationship
    dominant: care
    label: The Ones You Are With
    text: >-
      You think obligation grows out of attachment and dependency rather than out of a
      property a creature turns out to have. That describes almost every duty anyone
      actually discharges toward an animal. It leaves you least equipped where the harm
      is industrial and anonymous — the animals nobody has met and nobody is attached to,
      which is nearly all of them.
    base_rate: null
  - id: the-character
    dominant: virtue
    label: What Handling Them Makes of You
    text: >-
      You look at the keeper rather than the kept, and you treat the ease with which
      someone can do this work as evidence about them. It is a good account of why
      gratuitous cruelty is wrong even when no right is infringed. What it does not yet
      give you is a verdict: two people of decent character can walk into that facility
      and come out disagreeing, and your theory has to break the tie some other way.
    base_rate: null
---

## What it means

Tom Regan's *The Case for Animal Rights* (1983) is an argument that most animals are not
merely things that can be hurt but individuals who can be wronged, and that the difference
is a difference in kind.

His route there is a criterion. A being is a **subject-of-a-life** if it has beliefs and
desires; perception, memory, and a sense of its own future; an emotional life; preference
and welfare interests; the ability to initiate action in pursuit of goals; a psychophysical
identity that persists over time; and — the clause doing the real work — an individual
experiential welfare, in the sense that its life fares well or badly *for it*, logically
independently of its usefulness to anyone else. Regan was deliberately conservative about
who qualifies. His stated confidence covered mentally normal mammals of a year or more,
with the frank admission that the line is a line of caution rather than a discovery, and
that others fall on the far side of it too.

Everything that meets the criterion, Regan argues, has **inherent value**, and has it
equally. Inherent value is not a quantity of goodness contained in a life; it is a status
that a being has or lacks. Nothing that has it may be treated as a mere receptacle for
experiences to be poured into and out of. This is the point at which Regan turns against
Peter Singer as sharply as against the laboratory. Singer's *Animal Liberation* (1975)
asks us to weigh animal suffering equally in a utilitarian sum. Regan's objection is that
a sum has no room for the animal: if the numbers came out the other way, the sum would
license the experiment, and a view that could license it was never treating the beagle as
anything but a container.

What follows for Regan is not reform but abolition — of commercial animal agriculture, of
hunting and trapping, and of animal research, including research that would work.

## What it suggests

If the criterion holds, whole industries are not badly regulated but illegitimate, and the
usual improvements are beside the point. A larger cage is a better prison. The comparison
Regan intends is not rhetorical: he thinks we are in the position of someone who has
noticed that the beings being used have lives of their own, and that noticing this is the
end of the argument about how humanely to use them.

It also cuts against the most common defence of animal experimentation, which is not that
animals do not matter but that the benefits are large. On Regan's view the size of the
benefit is irrelevant in the way that the size of the benefit is irrelevant when the
subject is a human being who has not consented. We do not run the numbers on unconsenting
human subjects and then proceed if the numbers are good; we do not run them at all.

The strongest objection comes from the lifeboat. Regan himself poses a boat holding four
humans and a dog with room for four, and says the dog should go over — because death is a
harm proportional to the opportunities it forecloses, and the dog's death forecloses fewer.
He insists this is consistent with the dog's equal inherent value. Many careful readers have
found that it is not, or that if it is, then inherent value has become too thin to do the
work asked of it in the laboratory chapters: if lives can be compared when the boat is
sinking, it is unclear why they may not be compared when the disease is fatal. Regan's
reply — that the lifeboat is a case of unavoidable choice between innocents, not a case of
using one for another's benefit — is the sort of distinction the reader has to weigh for
themselves rather than accept.

Two further pressures. Peter Carruthers has argued that moral standing arises among beings
who can recognise and honour claims, so that our duties concerning animals are real but
indirect — a position whose burden is the human beings who cannot reciprocate either.
And feminist writers in the tradition collected by Josephine Donovan and Carol Adams have
argued that the rights framework imports exactly the abstract, adversarial, checklist
morality that got us here, and that what actually motivates people to protect animals is
attention, relationship, and sympathy, which the criterion treats as sentiment.

## The problem

The facility is on an industrial estate outside a small city, and you sit on its ethics
committee because the university needed someone from outside the biosciences.

The application in front of you is unusually good. A compound in phase development would,
if the modelling holds, spare several thousand people a year a liver disease that kills
slowly and painfully in early middle age. Regulators require the toxicity work. The
species that metabolises the compound closely enough is the dog. Forty beagles, purpose-bred,
never handled by anyone who was not paid to handle them. They will be dosed, monitored,
and killed for tissue.

The applicant has done everything right. There is no in-vitro model that regulators accept.
The protocol reduces numbers to the statistical minimum, and the welfare provisions are
better than any you have seen.

Before the vote you are taken through the unit. The dogs come to the front of the pens.
One of them looks at you and does the thing dogs do — head tilted, tail going, waiting to
see whether you are going to be the person who opens the door.

You have to say yes or no in eleven minutes, and the committee's practice is that abstention
counts as consent.

## The questions

**1. The forty beagles.** Toxicity testing that would spare thousands of people a painful
disease. No accepted alternative method exists.

- Stop it. Each dog has a life that goes well or badly for the dog, and that is not
  something you may trade away.
- Continue, but only because the suffering prevented genuinely outweighs the suffering
  caused — and audit that claim every year.
- Continue. Rights are held by beings who can recognise and honour them, and a beagle
  cannot.
- The question is what the people who run this place become by doing it.

**2. Where the criterion falls.** A pig meets Regan's test. A trout is disputed. An oyster
does not.

- The line is real and roughly there; creatures with a life from the inside have inherent
  value.
- Drawing a line is the mistake — capacity to suffer comes in degrees, so obligation does.
- Obligation follows relationship, not a checklist.
- The line matters less than the habit; cruelty coarsens you whatever the creature is.

**3. The wolves and the deer.** Culling four wolves would save an endangered deer
population. Both are subjects-of-a-life.

- Do not cull. A species is not a subject and cannot be wronged.
- Cull. More individual animals will live good lives over more years.
- Intervene only where humans caused the imbalance.
- Rights language is the wrong tool outdoors; what is owed is stewardship.

**4. The lifeboat.** Four people and a dog; one must go. Regan said the dog.

- The dog goes, and this is compatible with equal inherent value — harm is measured by
  what a death takes away.
- The dog goes, and this shows the equal-value talk was decoration.
- Draw lots including the dog.
- Whoever is closest to the person deciding stays.

## Reading your answer

**Value That Is Not For Trading.** You hold that a creature with a life it experiences has
a standing no benefit can buy out. This is the position with the fewest moving parts, and
it gives an immediate answer in the laboratory. Its cost is the boundary: you must say
where the criterion falls, and then hold your nerve about the creatures just outside it,
including the human ones with no sense of their own future.

**Suffering Is Suffering.** You count experiences and let obligation vary with sentience,
which spares you any line-drawing and matches the way most people actually rank a mosquito
against a chimpanzee. Regan's objection is aimed exactly at you: on your view the beagle is
in principle purchasable, and you cannot rule out the experiment whose numbers come out
right — only hope they don't.

**Rights Among Rights-Holders.** You take moral standing to arise between beings who can
make and honour claims, which explains why justice is something we owe each other and
kindness is something we owe more widely. The exposure is inside your own species: the
infant and the severely impaired adult cannot reciprocate either, and the indirect-duty
repairs offered for them have struck many readers as the theory paying a debt it cannot
afford.

**The Ones You Are With.** You think obligation grows from attachment rather than from a
property discovered by inspection, and you are describing accurately nearly every duty
anyone has ever actually discharged toward an animal. You are weakest exactly where the
harm is largest — industrial, anonymous, and involving animals nobody has met.

**What Handling Them Makes of You.** You watch the keeper rather than the kept. This
explains what mere rules cannot: why gratuitous cruelty to a thing nobody owns is still a
wrong. What it withholds is a verdict. Two people of decent character can leave that
committee room having voted opposite ways, and your view has to break the tie somewhere
else.

## Sources

- Tom Regan, *The Case for Animal Rights* (University of California Press, 1983) — the
  criterion, the inherent-value argument, and the lifeboat case.
- Peter Singer, *Animal Liberation* (1975) — the utilitarian account Regan is arguing
  against as much as he is arguing against the laboratories.
- Peter Carruthers, *The Animals Issue: Moral Theory in Practice* (Cambridge University
  Press, 1992) — the contractualist denial of direct duties to animals.
- Josephine Donovan and Carol J. Adams (eds), *Beyond Animal Rights: A Feminist Caring
  Ethic for the Treatment of Animals* (Continuum, 1996) — the care-ethics objection to
  rights framing.
