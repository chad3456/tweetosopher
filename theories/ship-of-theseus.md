---
id: ship-of-theseus
title: The Ship of Theseus and Moral Identity
category: paradox
tradition: personal-identity
philosophers:
  - Plutarch
  - Thomas Hobbes
era: "c. 100 CE"
tags: [identity, responsibility, punishment, promises, change]
sources:
  - author: Plutarch
    title: "Life of Theseus"
    published: Parallel Lives
    year: 100
  - author: Thomas Hobbes
    title: De Corpore
    published: "London, Part II, chapter 11"
    year: 1655
  - author: John Locke
    title: An Essay Concerning Human Understanding
    published: "Book II, chapter 27, 'Of Identity and Diversity', added in the second edition"
    year: 1694
  - author: Derek Parfit
    title: Reasons and Persons
    published: Oxford University Press
    year: 1984
questions:
  - id: q1
    prompt: >-
      A man of seventy is identified as the guard who beat prisoners at a camp when he
      was twenty-two. Every cell in his body has been replaced. He remembers almost
      nothing of those years, has lived blamelessly since, and is by every account a
      gentle man. The evidence that he did it is conclusive.
    options:
      - id: a
        label: >-
          Try him. The person who did it is the person standing there; a continuous life
          is one life, and debts do not expire because the debtor changed.
        scores: { deontological: 1.0, certainty: 0.6, agency: 0.3 }
      - id: b
        label: >-
          Try him only if it does some good now — deterrence, a record, the victims'
          standing. Punishment aimed at a man who no longer exists is theatre.
        scores: { consequentialist: 1.0, scope: 0.5, certainty: -0.4 }
      - id: c
        label: >-
          What matters is whether the disposition survived. If the cruelty is gone, you
          are punishing a stranger who happens to share his address.
        scores: { virtue: 0.9, certainty: -0.5, affect: 0.4 }
      - id: d
        label: >-
          He is answerable because he can still own the act — and refusing to own it is
          itself a choice he is making now.
        scores: { existentialist: 0.9, deontological: 0.4, authority: 0.5 }
  - id: q2
    prompt: >-
      At twenty-six you promised your dying father you would keep the family farm. You
      are now fifty-two, hold none of the beliefs you held then, and think the promise
      was made by someone whose reasoning you can no longer reconstruct. Selling would
      fund your daughter's treatment.
    options:
      - id: a
        label: >-
          The promise binds. That is what a promise is for — to hold when the person who
          made it would rather it did not.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: b
        label: >-
          Sell. A promise is a tool for coordinating lives, not a chain; when keeping it
          costs a life it has stopped doing its job.
        scores: { consequentialist: 1.0, scope: 0.4, agency: 0.5 }
      - id: c
        label: >-
          Sell, and treat the promise as your daughter's inheritance rather than the
          farm's. The obligation was always to the people, not the soil.
        scores: { care: 1.0, scope: -0.6, affect: 0.5 }
      - id: d
        label: >-
          You are not bound by him, but you become someone by deciding. Break it
          deliberately and in your own name, not by pleading you are a different man.
        scores: { existentialist: 1.0, virtue: 0.4, authority: 0.6 }
  - id: q3
    prompt: >-
      A neurological condition has left your mother without any memory extending past a
      few minutes, and with a settled temperament nothing like the one she had. She is
      calm and seems content. Her advance directive, written when she was well, refuses
      the treatment that is now keeping her comfortable.
    options:
      - id: a
        label: >-
          Honour the directive. She wrote it precisely to govern a future self she could
          not consult, and that authority is the whole point of writing one.
        scores: { deontological: 1.0, authority: -0.3, certainty: 0.6 }
      - id: b
        label: >-
          Attend to the woman in the bed. She is the one who can be made comfortable or
          not, and a document cannot outrank a present person.
        scores: { care: 1.0, consequentialist: 0.4, affect: 0.6 }
      - id: c
        label: >-
          Weigh what produces the better remaining life. The directive is evidence about
          what she valued, not a command that binds you.
        scores: { consequentialist: 1.0, certainty: -0.5 }
      - id: d
        label: >-
          The question has no fact to settle it. Whether she is still her is a decision
          the family has to make and then live inside.
        scores: { existentialist: 0.8, relativist: 0.4, certainty: -0.8 }
outcomes:
  - id: the-continuous-person
    dominant: deontological
    label: One Life, One Ledger
    text: >-
      You treat the person as a single continuous thing that carries its commitments and
      its debts forward whether or not it likes them. This is what makes promising
      possible and what makes accountability more than a mood. Its cost shows up at the
      edges: the man who genuinely cannot recognise himself in what he did, the directive
      written by someone who could not imagine the life it now governs. You have to say
      that the ledger holds there too, and mean it.
    base_rate: null
  - id: the-forward-look
    dominant: consequentialist
    label: What the Past Is For
    text: >-
      You take the past as evidence rather than as a claim, and ask what treating it one
      way or another will do from here. This dissolves a lot of metaphysical anguish and
      it is honest about why we punish and why we keep promises at all. What it gives up
      is the sense that anything is owed simply because it was undertaken — and most
      people who answer this way still feel the pull of a promise they can no longer
      justify by results.
    base_rate: null
  - id: the-character
    dominant: virtue
    label: What Survived
    text: >-
      You locate the person in the settled dispositions rather than in the body or the
      paperwork, so the question becomes whether the cruelty, or the tenderness, is still
      there. That tracks something real about how we actually forgive people. It is
      hardest to hold where character has changed and the harm has not — the victims are
      still injured by an act nobody is now available to answer for.
    base_rate: null
  - id: the-owner
    dominant: existentialist
    label: The Self You Take Up
    text: >-
      You deny that there is a fact waiting to be discovered, and put the weight on the
      act of claiming or disowning a past. This is unusually honest about advance
      directives and deathbed promises, which are attempts to bind a stranger. Its
      exposure is that a person can simply decline to claim what they did, and on your
      account there is no further place to stand and tell them they are wrong.
    base_rate: null
  - id: the-person-present
    dominant: care
    label: The One in the Room
    text: >-
      You start from whoever is actually in front of you and what they now need, which
      is how families in fact behave and how most bedside decisions are really made. It
      keeps the question from becoming a puzzle about spare parts. Its price is that
      commitments made to people who are gone — the dead father, the well woman who wrote
      the directive — lose their grip exactly when they were meant to hold.
    base_rate: null
---

## What it means

Plutarch reports, in his *Life of Theseus*, that the Athenians preserved the ship in which
Theseus returned from Crete, replacing each timber as it rotted, so that the vessel became
a standing dispute among philosophers: some said it was the same ship, others that it was
not. Thomas Hobbes sharpened it in *De Corpore* (1655) by asking what happens if someone
has been collecting the discarded planks and reassembles them. Now there are two ships with
equal claim, which shows that at most one of the intuitions we started with can be right.

The puzzle is usually filed under metaphysics, but the reason it will not go away is moral.
Almost everything we do with the concept of a person is a claim across time. Punishment
holds someone answerable now for something done then. A promise binds a future self who did
not agree to it. Contracts, debts, marriage vows, criminal records, forgiveness, gratitude
and revenge all assume that the thing standing here is the thing that was standing there.
Take that assumption away and every one of those practices needs a new justification.

John Locke saw this and answered it with memory: a person is the same person as far as
consciousness reaches back, and he explicitly drew the moral conclusion, arguing that
punishing a man for a deed he genuinely cannot recall is like punishing a twin for his
brother. Derek Parfit, in *Reasons and Persons* (1984), pushed harder and concluded that
identity is not what matters — what there is, is more or less psychological continuity, a
matter of degree, and our all-or-nothing practices of blame and commitment are built on a
distinction that does not exist in the world.

## What it suggests

If Parfit is right, a great deal of moral bookkeeping is misdescribed. Punishment cannot
be retribution against the guilty party if the guilty party is only partly still here; it
becomes something more like quarantine, deterrence and public record, which are forward-
looking justifications and have to meet forward-looking tests. Long sentences served by
men who no longer resemble the boys who were convicted start to look less like justice and
more like storage. Deathbed promises and advance directives start to look like attempts to
give orders to a stranger.

That is the argument. The objection to it is serious. Practices of promising, blame and
gratitude are not fragile theories waiting to be corrected by a better metaphysics — they
are the machinery by which people become able to rely on each other, and they work
precisely because they do not renegotiate every time the promisor changes his mind about
who he is. "I am not the man who made that promise" is available to anyone at any time, and
a moral vocabulary that accepts it has handed everyone a universal exit. There is also a
suspicion worth naming: the ship argument tends to get deployed by whoever benefits from
discontinuity. Nobody invokes it to escape an inheritance.

A middle position holds that identity comes in degrees and so does obligation. Debts and
promises weaken with distance and transformation without vanishing, which fits how we
actually treat a promise made at nineteen and a crime committed at nineteen — differently
from the same things at forty, but not as nothing.

## The problem

The file on your desk is thin because the man never denied it.

Josef Weiss is eighty-one. In 1963 he stood in a doorway at a camp in Silesia and did what
the deposition describes over four pages. He was twenty. He then emigrated, took a
different name for a while, went back to his own, married, taught woodwork to
apprentices for thirty-one years, and was three times the man his neighbours called when
something needed fixing at night.

He does not remember most of it. This is not a defence he is mounting; the neurologist's
report is unambiguous and he has not tried to use it. When the details are read to him he
listens with the polite attention of a man being told about somebody else. Asked directly,
he says: "If it says I did it, I did it." He does not say he is sorry, because he says it
would be a lie to be sorry for something he cannot find in himself.

Two of the survivors are alive. One wants him in court. The other has written to say that
whatever is in that dock will not be the thing that hurt her, and that she wants no part
of a trial of an old man's body.

You have to decide whether to prosecute. What you cannot avoid deciding, on the way, is
whether the man in the woodwork shop is the man in the doorway — and whether it matters.

## The questions

**1. The old guard.** A man of eighty-one is conclusively identified as a camp guard from
sixty years ago. He remembers almost none of it and has lived blamelessly since.

- Try him. A continuous life is one life, and debts do not expire because the debtor
  changed.
- Try him only if it does some good now. Punishment aimed at a man who no longer exists is
  theatre.
- What matters is whether the cruelty survived. If it is gone, you are punishing a stranger
  at his address.
- He is answerable because he can still own the act, and declining to own it is a choice he
  is making today.

**2. The promise to the dying.** At twenty-six you promised your father you would keep the
farm. At fifty-two you can no longer reconstruct why. Selling it would fund your daughter's
treatment.

- The promise binds. That is what promises are for — to hold when you would rather they did
  not.
- Sell. A promise coordinates lives; when it costs a life it has stopped doing its job.
- Sell. The obligation ran to the people, not the soil.
- You are not bound by him, but break it in your own name rather than pleading that you are
  a different man.

**3. The directive.** Your mother, without memory and with a wholly changed temperament,
seems content. Her advance directive refuses the treatment now keeping her comfortable.

- Honour it. She wrote it to govern a future self she could not consult.
- Attend to the woman in the bed. A document cannot outrank a present person.
- Weigh the remaining life. The directive is evidence about her values, not a command.
- There is no fact here. Whether she is still her is something the family decides and then
  lives inside.

## Reading your answer

**One Life, One Ledger.** You hold the person to be continuous and the commitments to
travel with them. This is what makes promising possible at all. Notice where it bites: you
have to say the ledger holds for the man who cannot find the act in himself, and for the
woman who wrote a directive she could not have imagined obeying.

**What the Past Is For.** You treat history as evidence rather than as a claim on you. It
is a clear-eyed account of why we punish and it spares you a lot of metaphysics. What you
have given up is that anything is owed simply because it was undertaken — and most people
who answer this way still feel the grip of a promise they cannot justify by results.

**What Survived.** You look for whether the disposition is still there. That tracks how
forgiveness actually works between people. It is worst placed where the character has
changed and the injury has not, and the victim is left holding a harm that nobody present
is available to answer for.

**The Self You Take Up.** You put the weight on claiming or disowning rather than on
discovering. This is honest about the strangeness of binding your future self. Its exposure
is that someone can simply decline to claim what they did, and you have no further ground
from which to say they are wrong.

**The One in the Room.** You begin from the person actually present and what they need now.
That is how families behave and how most bedside decisions are really made. The price is
that obligations to people who are gone lose their hold precisely when they were designed
to hold.

## Sources

- Plutarch, "Life of Theseus", in *Parallel Lives* (c. 100 CE) — the ship of the thirty
  oars, and the standing dispute about it among Athenian philosophers.
- Thomas Hobbes, *De Corpore* (1655), Part II, chapter 11 — the reassembled ship from the
  discarded planks.
- John Locke, *An Essay Concerning Human Understanding*, Book II, chapter 27, "Of Identity
  and Diversity" (added in the second edition, 1694) — personhood as continuity of
  consciousness, with the explicit application to punishment.
- Derek Parfit, *Reasons and Persons* (Oxford University Press, 1984), Part III — the
  argument that identity is not what matters, and its consequences for desert, commitment
  and self-interest.
