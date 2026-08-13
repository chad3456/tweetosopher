---
id: panopticon
title: The Panopticon
category: thought-experiment
tradition: utilitarianism
philosophers:
  - Jeremy Bentham
  - Michel Foucault
era: "1791"
tags: [surveillance, punishment, power, privacy, discipline, autonomy]
sources:
  - author: Jeremy Bentham
    title: "Panopticon; or, The Inspection-House"
    published: "letters written 1787; published Dublin and London"
    year: 1791
  - author: Michel Foucault
    title: "Discipline and Punish: The Birth of the Prison"
    published: "orig. Surveiller et punir, Gallimard 1975; trans. Alan Sheridan, Pantheon"
    year: 1977
  - author: Janet Semple
    title: "Bentham's Prison: A Study of the Panopticon Penitentiary"
    published: Clarendon Press, Oxford
    year: 1993
  - author: Shoshana Zuboff
    title: The Age of Surveillance Capitalism
    published: PublicAffairs
    year: 2019
questions:
  - id: q1
    prompt: >-
      Your warehouse fits every picker with a scanner that logs idle seconds and
      flags anyone below target. Injuries fall, theft falls, and productivity
      rises by a fifth. Workers say the work is now unbearable in a way they find
      hard to name, and turnover has doubled among the people who stay longest.
    options:
      - id: a
        label: >-
          Keep it. Fewer injuries and less theft are real goods; "hard to name"
          is not yet a harm you can weigh against them.
        scores: { consequentialist: 1.0, certainty: 0.4, affect: -0.6 }
      - id: b
        label: >-
          Remove it. Watching a person continuously to extract more from them
          treats them as a mechanism, whatever the productivity numbers say.
        scores: { deontological: 1.0, certainty: 0.5 }
      - id: c
        label: >-
          Keep it only if the workers vote for it, with the data and the rates in
          front of them, and only for as long as that vote holds.
        scores: { contractarian: 1.0, authority: 0.4, scope: 0.3 }
      - id: d
        label: >-
          The unnameable thing is the point. It is making a certain kind of
          person — watchful, defensive, incapable of unobserved work — and that
          is a cost even when nobody can put a figure on it.
        scores: { virtue: 1.0, care: 0.3, affect: 0.6 }
  - id: q2
    prompt: >-
      Bentham's design worked because the inmate could never tell whether the
      inspector was in the tower. A school proposes cameras in every classroom
      that record continuously but are reviewed only if a complaint is made. The
      head says the uncertainty is what does the work, and it costs almost nothing.
    options:
      - id: a
        label: >-
          Install them. Deterrence that needs no punishment is the cheapest
          protection there is, and the children who need protecting get it.
        scores: { consequentialist: 1.0, authority: -0.3, scope: 0.4 }
      - id: b
        label: >-
          Refuse. Manufacturing the belief that you are being watched, in order
          to govern behaviour, is a manipulation whether or not anyone watches.
        scores: { deontological: 0.9, virtue: 0.4, certainty: 0.5 }
      - id: c
        label: >-
          Install them, but tell everyone exactly when they are reviewed. Take
          the smaller deterrent effect as the price of not governing by bluff.
        scores: { contractarian: 0.8, consequentialist: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          Children learn conduct by being trusted and sometimes failing. A room
          where that is impossible teaches compliance and calls it character.
        scores: { virtue: 1.0, care: 0.4 }
  - id: q3
    prompt: >-
      Bentham thought the Panopticon humane — compared with hanging, hulks and
      transportation, it was. A justice minister offers convicted burglars a
      choice: four years in a conventional prison, or eight months at home under
      permanent audio-visual monitoring, with every room recorded.
    options:
      - id: a
        label: >-
          Offer it. Eight months at home with your family is plainly less
          suffering than four years in a cell, and they can choose.
        scores: { consequentialist: 1.0, scope: 0.4, affect: -0.4 }
      - id: b
        label: >-
          Do not offer it. A choice made against four years in prison is not
          consent, and total surveillance of a home is not a punishment a state
          should have on its menu.
        scores: { deontological: 0.9, contractarian: 0.4, authority: 0.5 }
      - id: c
        label: >-
          Offer it, since refusing on their behalf is the paternalism you claim
          to be objecting to — they know their own lives better than you do.
        scores: { contractarian: 0.9, egoist: 0.3, authority: 0.5 }
      - id: d
        label: >-
          Offer it and be uneasy. It is more humane and it is also the beginning
          of a state that punishes by installing itself in rooms.
        scores: { consequentialist: 0.7, virtue: 0.5, certainty: -0.7 }
  - id: q4
    prompt: >-
      On Foucault's reading the Panopticon's real achievement is that the watched
      person eventually watches himself — power becomes automatic and no longer
      needs anyone in the tower. You notice you have started composing your own
      messages as though a stranger will one day read them.
    options:
      - id: a
        label: >-
          That is a loss of something real. A self that is always performing for
          an imagined audience is not the same self, and the change was not chosen.
        scores: { virtue: 0.9, existentialist: 0.4, affect: 0.5 }
      - id: b
        label: >-
          It is a rational adjustment to a world where messages do get read. The
          feeling of loss is nostalgia for a privacy that was mostly luck.
        scores: { consequentialist: 0.8, egoist: 0.4, certainty: 0.4 }
      - id: c
        label: >-
          Whether it is a loss depends on nothing but what you decide to make of
          it. The watcher has no authority you do not grant.
        scores: { existentialist: 1.0, authority: 0.9 }
      - id: d
        label: >-
          It is a wrong done to you, not a mood. Being made into your own guard
          is the injury, and it happened without your agreement.
        scores: { deontological: 0.9, contractarian: 0.5 }
outcomes:
  - id: the-outcome-ledger
    dominant: consequentialist
    label: Count the Injuries, Count the Theft
    text: >-
      You judge surveillance by what it does: fewer injuries, fewer thefts,
      shorter sentences, safer children. This is Bentham's own defence and it is
      not a weak one — he was arguing against the gallows and the convict ship,
      and by that comparison his inspection-house really was mercy. What you are
      exposed to is the harm your ledger has no line for. The thing the pickers
      could not name is not nothing, and a method that can only register what it
      can measure will keep expanding surveillance until something measurable
      finally breaks.
    base_rate: null
  - id: the-limit
    dominant: deontological
    label: A Line Around a Person
    text: >-
      You hold that continuous observation wrongs someone independently of its
      effects — that manufacturing the sense of being watched in order to steer
      conduct treats a person as a mechanism to be tuned. That gets the right
      answer in the cases where the numbers say yes and almost everyone still
      recoils. It bills you where the numbers are large and the intrusion is
      small: you have to say why a camera that saves lives is impermissible, and
      "it just is" will not hold the position for long.
    base_rate: null
  - id: the-consent
    dominant: contractarian
    label: Only What They Agreed To
    text: >-
      You make legitimacy turn on agreement: monitoring the workers voted for,
      review windows everyone knows about, punishments the punished could accept.
      This is the cleanest way to separate the surveillance people put up with
      from the surveillance done to them. Its weak point is the quality of the
      agreement. Consent obtained against the alternative of four years in a cell,
      or of losing the only job in town, records a constraint and files it as a
      choice.
    base_rate: null
  - id: the-formed-self
    dominant: virtue
    label: What Being Watched Makes of You
    text: >-
      Your attention is on what the watching does to the watched — that a person
      who can never act unobserved never quite learns to act, and that compliance
      produced this way is not the same thing as conduct. This is close to
      Foucault's point without needing his machinery, and it explains why the
      harm is felt even by people the system treats well. The difficulty is that
      it is very hard to weigh: you are claiming a cost that does not show up in
      injuries, theft, or anything else a board can audit.
    base_rate: null
  - id: the-own-account
    dominant: existentialist
    label: The Tower Has No Authority
    text: >-
      You deny that the watcher has any standing over you that you have not
      granted, and you treat the internalised audience as something to be
      refused rather than a fate. That keeps agency where it belongs, and it is
      a genuinely liberating stance in conditions nobody can opt out of. What it
      risks is asking people to be heroic about a structural condition: the
      unwatched self is easier to maintain if you own the building, and telling
      the picker that the scanner has only the authority he grants it is not
      obviously advice.
    base_rate: null
---

## What it means

The Panopticon is an architecture. Bentham described it in a series of letters written in
1787 while visiting his brother Samuel in Russia, published in 1791 as *Panopticon; or,
The Inspection-House*.

The building is annular. Cells run around the circumference, each with a window to the
outside and a grating onto the central well, so that every inmate is backlit and visible
in silhouette. In the middle stands an inspection tower, fitted with blinds, baffles and
angled passages so that the inspector can see out but nobody can see in. The inmate
therefore knows he *may* be observed at every moment and can never establish that he *is*.
Bentham's summary of what this achieves is exact: "a new mode of obtaining power of mind
over mind, in a quantity hitherto without example."

The crucial economy is that the tower need not be occupied. Once the uncertainty is
established, the observation becomes, in Bentham's words, "unnecessary" — the effect of
being watched persists without the cost of watching. He proposed the design not only for
prisons but for factories, madhouses, hospitals and schools, and he spent two decades and
a great deal of his own money trying to get one built in Britain. He never did.

The word means something different now largely because of Michel Foucault. In *Surveiller
et punir* (1975; translated as *Discipline and Punish*, 1977) Foucault treats the
Panopticon not as a failed building project but as the diagram of a whole form of power.
Sovereign power was spectacular, occasional and applied to bodies — the scaffold.
Disciplinary power is continuous, invisible and applied to conduct: it sorts, ranks,
times, examines, and produces what Foucault calls docile bodies. Its masterstroke is that
the inmate "inscribes in himself the power relation" and "becomes the principle of his own
subjection". Power stops needing a wielder. This is the sense in which schools, clinics,
barracks and offices are, on Foucault's account, panoptic without anyone having designed
them to be.

## What it suggests

If Bentham is right, surveillance is simply a technology of prevention, and it should be
assessed as you would assess any other: does it reduce suffering more than it produces?
Judged that way the Panopticon has a strong case. Bentham's comparison class was hanging,
the prison hulks and transportation to Botany Bay, and Janet Semple's *Bentham's Prison*
(1993) argues that his intentions were genuinely reformist — the design also let inspectors
be inspected, and Bentham insisted the accounts be public. He was not building a nightmare;
he was trying to replace one.

If Foucault is right, the assessment misses the point, because the effects that matter are
not on the ledger at all. What the Panopticon produces is not merely less theft but a
different kind of person: one who has taken the inspector inside, who behaves the same
whether or not the tower is manned, and who experiences this as his own character rather
than as an imposition. You cannot object to that in the currency of harms prevented,
because the whole point is that the harms are prevented. The objection is that a certain
capacity — to act unobserved, to be one thing rather than a performance — has been removed
without anyone deciding to remove it.

Both accounts have obvious modern application, and the interesting thing is that they
point at the same systems and disagree about what is wrong with them. Bentham's version
condemns workplace monitoring when the injury and theft numbers do not justify it, and
approves it when they do. Foucault's version does not run on numbers at all. Shoshana
Zuboff's *The Age of Surveillance Capitalism* (2019) argues that the contemporary case is
different from both: the aim is not to discipline the watched but to predict and shape
them for sale to third parties, and the tower does not want obedience — it wants data.

The strongest objection to the Foucauldian reading is that it proves too much. If every
institution that observes and records is panoptic, then hospitals keeping notes, teachers
marking work and auditors checking accounts all fall under the same description, and the
concept has stopped discriminating between an inspection you would want and one you would
not. And the strongest objection to Bentham is that he really did think the effect on the
inmate's inner life was a benefit — the internalised inspector was the reform — which is
precisely the thing his critics say cannot be a benefit at all.

## The problem

Dana manages a call centre with two hundred and forty seats.

The software the parent company has bought does everything. It records every call, scores
sentiment in real time, tracks how long each agent's cursor sits still, and produces a
weekly ranking. It is not reviewed by anyone unless the score falls below a threshold, and
the agents have been told this. They have not been told the threshold.

In eight months: complaints down forty per cent, average handling time down, two
safeguarding incidents caught that the old system would have missed — one of them a caller
who was going to kill herself that evening. Dana can point to the recording.

She can also point to the break room, which is now silent. To Marek, her best agent for
six years, who has started reading his own scripts word for word because improvising costs
him seconds. To the fact that nobody covers for anyone any more, because covering for
someone shows up as idle time on your own line. To her own habit, which she noticed last
week, of composing internal emails as though HR will one day read them.

Head office wants the system extended to the eleven other sites. Dana has been asked to
write the recommendation. The safeguarding case is in the appendix, with a photograph of
the caller, who is alive.

Everything she would put on the other side of the ledger is a sentence like "the break
room is quiet now", which she knows exactly how it will read in a board paper.

## The questions

**1. The warehouse scanner.** Injuries down, theft down, output up a fifth. Workers say the
work is unbearable in a way they cannot name.

- Keep it. "Hard to name" is not yet a harm you can weigh.
- Remove it. Continuous watching to extract more treats a person as a mechanism.
- Keep it only if the workers vote for it with the numbers in front of them.
- The unnameable thing is the point — it is making a certain kind of person.

**2. The classroom camera.** Recorded always, reviewed only on complaint. The uncertainty
does the work, and it costs nothing.

- Install them. Deterrence without punishment is the cheapest protection there is.
- Refuse. Manufacturing the belief that you are watched is a manipulation.
- Install, but publish exactly when they are reviewed, and accept the weaker effect.
- Children learn conduct by being trusted; this teaches compliance and calls it character.

**3. Eight months at home, recorded.** Or four years in a conventional prison. The
convicted person chooses.

- Offer it. Eight months at home is plainly less suffering, and they can choose.
- Do not. A choice made against four years is not consent.
- Offer it — refusing on their behalf is the paternalism you claim to object to.
- Offer it and be uneasy. It is more humane and it is also a state installing itself in
  rooms.

**4. The inspector inside.** You have started writing your own messages as though a
stranger will read them.

- That is a real loss, and it was not chosen.
- It is a rational adjustment; the sense of loss is nostalgia for privacy that was luck.
- It is a loss only if you decide it is. The watcher has no authority you do not grant.
- It is a wrong done to you — being made into your own guard is the injury.

## Reading your answer

**Count the Injuries, Count the Theft.** You assess watching by what it prevents, which is
Bentham's own ground and stronger than it is usually given credit for. The exposure is
structural: your method registers what it can measure, the costs of surveillance are
mostly not of that kind, and so the argument will keep coming out in favour of more
watching until something measurable finally breaks.

**A Line Around a Person.** You think continuous observation wrongs someone regardless of
its effects. That gets the cases right where the numbers say yes and nearly everyone
recoils, and it does not require you to pretend the numbers are false. Your bill is the
small intrusion with the large payoff — the camera that catches the caller who was going
to die — where you must say the intrusion is still impermissible and mean it.

**Only What They Agreed To.** You put legitimacy in consent, which cleanly separates
monitoring people accept from monitoring done to them. What you inherit is the quality of
the agreement: consent given against four years in a cell, or against no other job in
town, is a record of someone's constraints that your framework files as their preference.

**What Being Watched Makes of You.** You are looking at what the watching does to the
watched — Foucault's conclusion without his apparatus. It explains the silent break room,
which no harm-based account can. Its difficulty is evidential: you are asserting a cost
that will never appear in any figure a board reads, and you have no way to show someone
who does not already feel it.

**The Tower Has No Authority.** You refuse to grant the watcher standing, and you treat
the internalised audience as something to be shrugged off rather than suffered. That keeps
agency where it belongs. Its risk is asking for heroism about a condition nobody chose:
the position is easier to hold from outside the cell than inside it, and telling Marek
that the score has only the authority he grants it is not, by itself, help.

## Sources

- Jeremy Bentham, *Panopticon; or, The Inspection-House* (letters written 1787; published
  1791) — the design, and "power of mind over mind, in a quantity hitherto without example".
- Michel Foucault, *Discipline and Punish: The Birth of the Prison* (*Surveiller et punir*,
  Gallimard, 1975; trans. Alan Sheridan, Pantheon, 1977) — the chapter "Panopticism".
- Janet Semple, *Bentham's Prison: A Study of the Panopticon Penitentiary*, Clarendon Press
  (1993) — a historian's case that Foucault's Bentham is a caricature.
- Shoshana Zuboff, *The Age of Surveillance Capitalism*, PublicAffairs (2019) — the
  argument that contemporary surveillance seeks prediction rather than discipline.
