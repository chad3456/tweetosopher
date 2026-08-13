---
id: ockhamist-voluntarism
title: Ockhamist Voluntarism
category: theory
tradition: medieval-philosophy
philosophers:
  - William of Ockham
era: "c. 1330"
tags: [divine-command, obligation, obedience, euthyphro, will]
sources:
  - author: William of Ockham
    title: Quodlibetal Questions
    published: "Quodlibeta septem, disputed at Oxford and Paris"
    year: 1327
  - author: William of Ockham
    title: Commentary on the Sentences, Book IV
    published: "Reportatio, question 16"
    year: 1320
  - author: Marilyn McCord Adams
    title: William Ockham
    published: University of Notre Dame Press, two volumes
    year: 1987
  - author: Robert Merrihew Adams
    title: A Modified Divine Command Theory of Ethical Wrongness
    published: "in Gene Outka and John P. Reeder, eds., Religion and Morality"
    year: 1973
  - author: Janine Marie Idziak
    title: Divine Command Morality — Historical and Contemporary Readings
    published: Edwin Mellen Press
    year: 1979
  - author: Plato
    title: Euthyphro
    published: "in the early dialogues"
    year: -399
questions:
  - id: q1
    prompt: >-
      Suppose it were established beyond doubt that God had commanded something
      you now regard as monstrous — and that God's commanding it is what makes
      any act obligatory at all. What follows for you?
    options:
      - id: a
        label: >-
          Then it is obligatory. A command from the source of all obligation is
          not one consideration among others; it is the thing the others answer to.
        scores: { divine: 1.0, authority: -0.9, certainty: 0.7 }
      - id: b
        label: >-
          Then either I have misheard the command or the being issuing it is not
          God. Goodness is part of what the word means.
        scores: { divine: 0.7, deontological: 0.6, certainty: 0.6 }
      - id: c
        label: >-
          Then I refuse, and accept whatever that costs me. Some acts are wrong in
          themselves, and no will — anyone's — reaches down that far.
        scores: { deontological: 1.0, authority: 0.9, certainty: 0.8 }
      - id: d
        label: >-
          The case proves the point in reverse. Every moral law is somebody's
          decree; you are simply noticing whose.
        scores: { existentialist: 0.9, relativist: 0.4, authority: 0.5 }
  - id: q2
    prompt: >-
      A friend asks why torturing a child for entertainment is wrong. Which
      answer do you actually believe, as opposed to the one that argues best?
    options:
      - id: a
        label: >-
          Because it is forbidden by the one whose will constitutes the moral law.
          Without that, the wrongness is a strong feeling with nothing under it.
        scores: { divine: 1.0, certainty: 0.8, affect: -0.3 }
      - id: b
        label: >-
          Because of what it does to the child. The reason is in the room; it does
          not need a guarantor outside it.
        scores: { consequentialist: 0.8, care: 0.4, scope: 0.4 }
      - id: c
        label: >-
          Because a rational agent cannot consistently will it, whatever anyone
          commands. The wrongness is a fact about reason, not a decree.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: d
        label: >-
          Because no one you could meet, having done it, would still be someone
          you could call human. The verdict is on the person as much as the act.
        scores: { virtue: 1.0, affect: 0.6, certainty: 0.3 }
  - id: q3
    prompt: >-
      Two accounts of God and goodness. God commands what is good because it is
      good — or the good is good because God commands it. Ockham's question is
      whether God is bound by anything He did not Himself institute.
    options:
      - id: a
        label: >-
          God commands it because it is good. A standard God consults is not a
          limit on God; it is what God is.
        scores: { divine: 0.8, deontological: 0.6, certainty: 0.5 }
      - id: b
        label: >-
          It is good because God commands it. Anything else makes goodness a
          second sovereign, and there is only one.
        scores: { divine: 1.0, authority: -0.8, certainty: 0.8 }
      - id: c
        label: >-
          The dilemma is a trap for both sides, and I would rather ground morality
          somewhere that does not need a divine will at all.
        scores: { deontological: 0.7, consequentialist: 0.5, authority: 0.6 }
      - id: d
        label: >-
          The dilemma shows that value is always instituted by some will. Ockham
          just names a will most people no longer believe in.
        scores: { existentialist: 1.0, nihilist: 0.4, certainty: -0.4 }
  - id: q4
    prompt: >-
      Your church, your state and your own conscience give three different
      verdicts on the same act. Ockham himself was excommunicated and wrote
      against a sitting pope. Which authority governs you?
    options:
      - id: a
        label: >-
          Conscience. It is the only faculty through which any command reaches me
          at all, so it cannot be overridden by what reaches me through it.
        scores: { deontological: 0.8, existentialist: 0.5, authority: 1.0 }
      - id: b
        label: >-
          The divine law as best I can discern it, which is exactly why I may have
          to defy both church and state to obey it.
        scores: { divine: 1.0, authority: 0.6, certainty: 0.7 }
      - id: c
        label: >-
          The institution. A private reading of God's will that overrides every
          established authority is how ruin usually announces itself.
        scores: { divine: 0.6, contractarian: 0.4, authority: -0.9 }
      - id: d
        label: >-
          Whichever answer produces the least wreckage for the people affected.
          Three authorities disagreeing is a practical problem, not a metaphysical one.
        scores: { consequentialist: 0.9, scope: 0.6, certainty: -0.5 }
outcomes:
  - id: the-command
    dominant: divine
    label: The Command Is the Ground
    text: >-
      You hold that obligation has a source, and that the source is a will rather
      than a fact. This gives moral claims something that mere intuition lacks —
      an author who can actually bind you. The price is Ockham's own price. If the
      command is what makes acts right, then the command could in principle have
      gone the other way, and your confidence that it did not is confidence about
      God's character rather than about morality's content.
    base_rate: null
  - id: the-standard
    dominant: deontological
    label: The Standard Nobody Authored
    text: >-
      You think some things are wrong in themselves and that no decree, human or
      divine, reaches down far enough to change it. This lets you say the thing
      most people want to say about atrocities — that they would be wrong however
      the universe was arranged. What it owes you is an account of what kind of
      fact a moral fact is, and why it obliges you, given that nobody made it and
      nobody enforces it.
    base_rate: null
  - id: the-person
    dominant: virtue
    label: The Verdict on the Agent
    text: >-
      You keep reaching past the act to the person doing it, and you treat the
      question of what a command would make of someone as more revealing than the
      question of who issued it. That instinct survives the Euthyphro dilemma
      untouched, because it never needed a ground outside human life. Its exposure
      is the case where a good person and a bad person would do the same thing,
      and you still need to know whether the thing was right.
    base_rate: null
  - id: the-instituted
    dominant: existentialist
    label: Value Is Instituted
    text: >-
      You read Ockham as accidentally correct about the structure and wrong only
      about the author — value comes into being by being posited, and the question
      is always whose positing you are living inside. This is unusually honest
      about how moral orders actually arise. It costs you the ability to say that
      a moral order is mistaken rather than merely different, which is a sentence
      you will want at some point.
    base_rate: null
  - id: the-outcome
    dominant: consequentialist
    label: What It Does to People
    text: >-
      You keep returning the question to effects — the child in the room, the
      wreckage of a conflict between authorities — and treat the metaphysics as
      scaffolding around that. This is the position least likely to be argued into
      an atrocity, because the harm stays in view the whole way down. Its weakness
      is that it cannot tell you why suffering matters without at some point
      leaning on exactly the kind of unauthored fact you were trying to avoid.
    base_rate: null
---

## What it means

William of Ockham held that moral obligation is constituted by God's command, and
he held it in a form sharper than almost anyone before or since was willing to
state. The argument runs through his account of divine power. God's *potentia
absoluta*, His absolute power, extends to anything that does not involve a
contradiction. The moral order we live under is His *potentia ordinata*, His
ordained power: the arrangement He has in fact chosen and freely bound Himself
to. But a free choice is one that could have gone otherwise, and Ockham does not
flinch from the consequence.

In his commentary on the *Sentences* he takes the hardest case he can construct.
God has commanded that we love Him. Could God have commanded us to hate Him? On
Ockham's analysis, the act of hating God is not intrinsically evil in the way a
square circle is impossible — its wrongness comes from its being forbidden. So if
God commanded it, the act would be meritorious. Ockham notes the paradox, which
scholars have argued about ever since: an act of hatred performed in obedience
would be, in the performing, an act of love. Marilyn McCord Adams reads him as
making a technical point about the logic of divine freedom rather than a
recommendation; others read the doctrine as a genuine and radical voluntarism.
Nobody reads it as comfortable.

The alternative Ockham is rejecting is the intellectualist one, held in various
forms by Aquinas: that God's will follows His intellect, that goodness is a real
feature of things which God perceives and legislates in accordance with, and that
God therefore cannot command atrocity because atrocity is not good. Ockham thinks
this quietly makes goodness into a second sovereign standing over God, telling
Him what He may will. If there is one sovereign, the ordering has to run the
other way.

This is the medieval form of the question Plato had already put in the
*Euthyphro*: is the pious loved by the gods because it is pious, or pious because
it is loved by the gods? Ockham takes the second horn deliberately, with his eyes
open.

## What it suggests

If Ockham is right, moral facts have an author. That is not a small thing to be
able to say. The persistent embarrassment of secular ethics is that it wants
moral claims to be true, binding and independent of anyone's opinion, while
having no account of what makes them true or what does the binding. Divine
command theory has an answer. Obligation is a relation between persons, the way a
promise or a law is; and where there is a command there is someone with the
standing to issue it.

It also reorganises what moral inquiry is. You are not, on this view, discovering
a structure in the world by reasoning about welfare or coherence; you are
receiving instructions and trying to understand them. That makes revelation,
tradition and interpretive humility central rather than decorative. It makes moral
confidence a form of trust rather than a form of proof.

The objection is the one Ockham walked straight into, and it is serious. If the
command makes the act right, the command could have made the opposite act right,
and morality turns out to be contingent all the way down — arbitrary, in the exact
sense that it rests on a choice for which no further reason can be given. Robert
Merrihew Adams's response, in his 1973 paper, is a modified theory: wrongness is
contrariety to the commands of a *loving* God, which builds the character
constraint into the definition. Critics reply that this reintroduces a standard
God is measured against, which is precisely what Ockham refused.

There is a second objection, less metaphysical and more practical. A theory on
which the right act is the commanded act is only as safe as the channel through
which commands arrive — and that channel, historically, is other human beings
with interests. Ockham's own life is the counter-evidence and the complication:
excommunicated, in flight, writing against the pope on the strength of his own
reading of the law. The doctrine that obligation comes from a divine will has been
used to demand obedience and used to justify defiance, roughly equally.

## The problem

Brother Anselm has been keeper of the abbey's records for nineteen years, and he
is good at it.

In March a rider comes from the bishop with an instruction under seal. Three
families sheltering in the abbey's outbuildings are to be handed over to the
count's men. They are not accused of anything Anselm can identify; the letter
speaks of good order in the diocese. The abbot reads it, says the bishop has the
authority, and tells Anselm to prepare the list of names — he alone knows who is
in which building, and the count's men do not.

Anselm believes three things and has never had to hold them at once. That the
bishop's office is genuinely instituted by God, so that obedience to it is
obedience to God. That the law of God forbids delivering the innocent to men who
will kill them. And that his own conscience, being one man's, is not obviously a
better guide to God's will than the office of a bishop.

He can write the list. He can refuse and be removed, after which someone else
writes it from the tally rolls in a week. He can write a list with the names
wrong, which is a lie told to a lawful superior. What he cannot do is find a place
to stand outside all three claims and adjudicate between them, because every place
he might stand is one of them.

He sits with the ledger open until the candle is low, and the question underneath
all of it will not resolve: is the instruction wrong because it is cruel, or would
it be right if the source of all obligation had in fact issued it?

## The questions

**1. The monstrous command.** Suppose it were established that God had commanded
something you regard as monstrous, and that God's commanding is what makes any act
obligatory at all.

- Then it is obligatory. A command from the source of obligation is not one
  consideration among others.
- Then either you have misheard, or the being issuing it is not God. Goodness is
  part of what the word means.
- Then you refuse, and accept the cost. Some acts are wrong in themselves and no
  will reaches down that far.
- The case proves the point in reverse. Every moral law is somebody's decree; you
  are noticing whose.

**2. Why torture is wrong.** A friend asks why torturing a child for entertainment
is wrong. Which answer do you actually believe?

- Because it is forbidden by the one whose will constitutes the moral law.
- Because of what it does to the child. The reason is in the room.
- Because a rational agent cannot consistently will it, whatever anyone commands.
- Because of what having done it would make of the person who did.

**3. The Euthyphro fork.** God commands what is good because it is good — or the
good is good because God commands it.

- God commands it because it is good. A standard God consults is what God is.
- It is good because God commands it. Anything else makes goodness a second
  sovereign.
- The dilemma is a trap for both sides; ground morality somewhere else entirely.
- The dilemma shows value is always instituted by some will.

**4. Three authorities.** Church, state and conscience give three verdicts on the
same act. Ockham was excommunicated and wrote against a sitting pope.

- Conscience, because every command reaches you through it.
- The divine law as best you discern it, even against church and state.
- The institution. A private reading that overrides everything is how ruin begins.
- Whichever produces the least wreckage for the people affected.

## Reading your answer

**The Command Is the Ground.** You hold that obligation has an author, and that a
will can bind you in a way a fact cannot. This is a real advantage over theories
that want moral claims to be binding without saying who does the binding. The
price is Ockham's: if the command is what makes acts right, it could have gone
otherwise, and your confidence that it did not is confidence about a character,
not about a content.

**The Standard Nobody Authored.** You think some acts are wrong in themselves,
full stop. This lets you say what most people want to say about atrocity — that it
would be wrong however the universe was arranged. What you owe is an account of
what kind of fact that is, given that nobody made it and nobody enforces it.

**The Verdict on the Agent.** You keep moving from the act to the person. That
move is untouched by the Euthyphro dilemma, because it never needed a ground
outside human life. It is most exposed where a good person and a bad person would
do exactly the same thing and you still need to know whether the thing was right.

**Value Is Instituted.** You read the structure as correct and the author as
missing: value comes into being by being posited, and the live question is whose
positing you are inside. This is unusually honest about how moral orders actually
form. It costs you the sentence "that order is mistaken", which you will want.

**What It Does to People.** You keep returning to effects and treat the metaphysics
as scaffolding. This is the position hardest to argue into an atrocity, because the
harm never leaves the frame. Its weakness is that explaining why suffering matters
eventually leans on the sort of unauthored fact you were trying to avoid.

## Sources

- William of Ockham, *Quodlibetal Questions* (*Quodlibeta septem*), disputed
  c. 1322–1327 — the discussions of right reason, obligation and divine freedom.
- William of Ockham, *Commentary on the Sentences*, Book IV, q. 16 — the passage
  on whether God could command hatred of Himself.
- Marilyn McCord Adams, *William Ockham*, 2 vols. (University of Notre Dame
  Press, 1987) — the standard defence of a moderate reading.
- Robert Merrihew Adams, "A Modified Divine Command Theory of Ethical Wrongness",
  in Gene Outka and John P. Reeder, eds., *Religion and Morality* (1973).
- Janine Marie Idziak, ed., *Divine Command Morality: Historical and Contemporary
  Readings* (Edwin Mellen Press, 1979) — the primary sources collected.
- Plato, *Euthyphro* — the original fork, c. 399 BCE.
