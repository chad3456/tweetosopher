---
id: euthyphro-dilemma
title: The Euthyphro Dilemma
category: paradox
tradition: classical-greek
philosophers:
  - Plato
  - Socrates
era: "c. 399 BCE"
tags: [god, authority, grounding, obedience, meta-ethics]
sources:
  - author: Plato
    title: Euthyphro
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Robert Merrihew Adams
    title: "Finite and Infinite Goods: A Framework for Ethics"
    published: Oxford University Press
    year: 1999
  - author: Philip L. Quinn
    title: "Divine Commands and Moral Requirements"
    published: Oxford University Press
    year: 1978
  - author: Elizabeth Anscombe
    title: "Modern Moral Philosophy"
    published: "Philosophy 33, 1–19"
    year: 1958
questions:
  - id: q1
    prompt: >-
      Suppose the God you believe in — or the one your tradition describes — commands
      something that strikes you as plainly wrong. Not a hard case. A clear one.
      What has happened?
    options:
      - id: a
        label: >-
          Your sense of wrongness is the thing that is mistaken. If He commands it,
          it is right, and the discomfort is a limit in you.
        scores: { divine: 1.0, authority: -0.9, certainty: 0.8 }
      - id: b
        label: >-
          You have misheard, or the text is corrupt, or you have misread it. A good
          God cannot command what is wrong, so this is not His command.
        scores: { divine: 0.8, deontological: 0.5, authority: 0.4 }
      - id: c
        label: >-
          Then He is not good, and you refuse. Whatever you owe Him, it is not the
          surrender of the only faculty you have for telling right from wrong.
        scores: { deontological: 0.9, authority: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          The whole exercise mistakes what religious language is doing. It is not
          issuing instructions from outside human life.
        scores: { relativist: 0.7, existentialist: 0.4, certainty: -0.5 }
  - id: q2
    prompt: >-
      A hospital chaplain and a hospital ethicist reach the same conclusion about a
      case, by wholly different routes. A student asks which of them actually explains
      why the conclusion is right.
    options:
      - id: a
        label: >-
          The chaplain. Without something above human argument, "right" has nothing
          underneath it but our preferences, however carefully arranged.
        scores: { divine: 0.9, certainty: 0.6 }
      - id: b
        label: >-
          The ethicist. If the conclusion can be reached by reason alone, the appeal
          to God is doing no work in the explanation.
        scores: { deontological: 0.8, certainty: 0.4, authority: 0.5 }
      - id: c
        label: >-
          Neither explains it. It is right because of what it does for the patient,
          and both routes are commentary on that.
        scores: { consequentialist: 0.9, scope: 0.5 }
      - id: d
        label: >-
          They agree because they were raised in the same civilisation. Ask a
          third tradition and the agreement thins out fast.
        scores: { relativist: 0.9, certainty: -0.5 }
  - id: q3
    prompt: >-
      Euthyphro is prosecuting his own father for the death of a labourer. His family
      say it is monstrous to prosecute your father. He says piety requires it and the
      gods are on his side. He is very sure.
    options:
      - id: a
        label: >-
          He is right to go ahead. A wrong is a wrong, and being the man's son is
          not a licence to look away.
        scores: { deontological: 0.9, scope: 0.7, care: 0.2 }
      - id: b
        label: >-
          He is right, and his certainty is the problem rather than the conclusion.
          He should do it without believing the gods sent him.
        scores: { deontological: 0.7, virtue: 0.6, certainty: -0.6 }
      - id: c
        label: >-
          The family are right. Obligations to a father are not the sort of thing a
          principle overrides, and he is dressing a betrayal as piety.
        scores: { care: 1.0, scope: -0.8, affect: 0.5 }
      - id: d
        label: >-
          Ask what prosecuting achieves. If it deters and the labourer's family are
          owed something, do it; if it only destroys a household, do not.
        scores: { consequentialist: 1.0, agency: 0.4, certainty: -0.4 }
outcomes:
  - id: the-command
    dominant: divine
    label: Because He Commands It
    text: >-
      You take the first horn: what makes an act right is that God wills it, and there is
      no standard above Him against which He could be measured. This is the only position
      that makes God genuinely sovereign rather than an unusually well-informed subordinate
      of the moral law. The price is the one Socrates names — if goodness just is His
      command, then "God is good" says only that He commands what He commands, and you have
      no ground to stand on if the command turns out to be terrible. Robert Adams's repair,
      grounding obligation in the commands of a God whose nature is essentially loving,
      is the serious attempt to keep the horn and lose the cost.
    base_rate: null
  - id: the-standard
    dominant: deontological
    label: Because It Is Right
    text: >-
      You take the second horn: the good is good independently, and God — if there is one —
      recognises rather than creates it. Your conscience is therefore not overridable by any
      authority, sacred or otherwise. This is clean, and it is what most religious people
      actually do when a text says something monstrous. What it costs is the explanatory
      work God was doing: you now have to say what the moral law rests on instead, and
      "reason" is a name for the problem rather than a solution to it.
    base_rate: null
  - id: the-outcome
    dominant: consequentialist
    label: What It Does to People
    text: >-
      You think the grounding question is a distraction from the answerable one. Whether the
      rule descends from heaven or is derived at a desk, what settles it is what happens to
      the labourer's widow and to Euthyphro's household. This keeps you usefully close to
      the facts. Its exposure is that "better outcome" is itself a moral notion needing a
      ground, so the question you sidestepped is standing behind you, holding your coat.
    base_rate: null
  - id: the-particular
    dominant: care
    label: The Man Is His Father
    text: >-
      You will not let a principle, divine or rational, cut through a relationship that
      thick. Your objection to Euthyphro is not that his theology is bad but that he has
      turned his father into a case. This tracks something both horns of the dilemma
      overlook: obligations mostly arrive through particular people, not through general
      laws. It is most exposed where the relationship is the reason the wrong went
      unaddressed for years, which is the ordinary shape of harm inside families.
    base_rate: null
  - id: the-tradition
    dominant: relativist
    label: Whose Gods, Whose Piety
    text: >-
      You notice that the dilemma is posed in a world of many gods who disagree, and you
      take the disagreement as the real datum. Piety in this dialogue means what a
      particular city thought it meant. This is historically alert and it explains why the
      argument feels different in a polytheistic and a monotheistic setting. The cost is
      that you have not answered the question so much as relocated it: the same dilemma
      re-forms one level down, between your community's standard and whatever might ground
      that.
    base_rate: null
  - id: the-certainty
    dominant: virtue
    label: The Trouble Is the Certainty
    text: >-
      You do not object to what he concludes so much as to how easily he reached it. A man
      who can prosecute his own father without a tremor has not solved the moral problem;
      he has stopped noticing there was one. This tracks something the dialogue itself is
      doing — Socrates never says Euthyphro is wrong, only that he cannot say why he is
      right. What it owes you is an account of when confidence is warranted, because the
      position cannot be that every settled conviction is a character flaw.
    base_rate: null

---

## What it means

The *Euthyphro* is a short dialogue set outside the courthouse where Socrates is about to
be indicted for impiety. He meets Euthyphro, who is at the same court to prosecute his own
father for the death of a hired labourer, and who is confident that this is what piety
requires. Socrates, facing a charge of impiety, professes delight at meeting an expert,
and asks him what piety is.

After Euthyphro's first attempts fail — he offers examples, then "what is dear to the
gods", which founders on the fact that the gods quarrel — he arrives at a better answer:
the pious is what all the gods love. And Socrates asks the question the dialogue is
remembered for. Is the pious loved by the gods because it is pious, or is it pious because
the gods love it?

The two branches are not equally comfortable. If the gods love it *because* it is pious,
then piety is a standard the gods themselves answer to, and their approval is a reliable
indicator of goodness rather than the source of it. If it is pious *because* they love it,
then their approval is the source — and nothing in the universe could make their approval
wrong, including their approving of something horrific. Euthyphro cannot see a way through
and leaves, still certain about his father, having failed to say what piety is.

Transposed into monotheism, the question becomes: is an act right because God commands
it, or does God command it because it is right? The literature that grew up around this is
substantial and does not consist of theists conceding. Robert Adams argues for a modified
divine command theory on which moral obligation is constituted by the commands of a God
whose nature is essentially loving — so the horrific command is ruled out by what God is,
not by an external standard He consults. Philip Quinn's work maps the alternatives in
detail. On the other side, Elizabeth Anscombe argued in 1958 that the modern moral "ought"
is a survival of a law conception of ethics — a notion that only made sense against a
divine legislator — left running after the legislator was removed.

## What it suggests

The dilemma is not really about God. It bites on any authority claimed as the source
rather than the reporter of moral truth — a state, a party, a founder, a text, a market, a
sacred tradition, a leader. Whenever someone says a thing is right *because* a designated
authority has said so, the fork opens: either the authority is tracking something you could
in principle check, in which case you can check it, or it is not, in which case it could
have said anything and you would have had to call that right too.

The practical consequence runs the other way from what people expect. Almost everyone,
including almost every devout person, takes the second horn under pressure. When a text
seems to endorse something monstrous, the standard response inside living traditions is
not "then the monstrous is good" but "then we are reading it wrongly" — which is to
subordinate the reading to a moral judgement made outside it. That is Socrates's point
arriving on schedule, two and a half thousand years later, in a Bible study.

The objection to pressing the dilemma is that it flatters a picture of moral knowledge
nobody has. If you take the second horn, you owe an account of the independent standard.
"Reason" and "human flourishing" are placeholders, not answers, and the confident secular
moralist who thinks the dilemma has settled something in his favour has usually not
noticed that he has been handed the harder half of the bill. Anscombe's charge is
precisely that: having dismissed the legislator, we kept using the vocabulary of law —
obligation, duty, moral guilt — as if it still had something to attach to.

## The problem

Amira has been the imam's most exacting student for nine years, and she is now sitting
across from a woman whose husband has told her that a text obliges her to stay.

Amira knows the text. She knows the four classical readings of it, and the two modern
ones, and which scholars hold which. She also knows, with an immediacy that has nothing to
do with scholarship, that the woman in front of her should leave the house tonight and not
go back.

There are two paths available, and Amira has watched colleagues take both. One is to go
back into the sources and find the reading that permits her to go — and it exists, it is
respectable, and it is what Amira will probably do. The other is to notice what she is
actually doing when she does that: she has decided the answer first, on grounds that are
not the text's, and gone looking for a text that agrees.

If the second is what is happening, then the authority she keeps citing is not what has
been guiding her. It has been ratifying decisions she was already making by another light
— and she is not sure she could give an account of what that light is, or defend it to the
husband, who has a text too, and reads it in the obvious way.

## The questions

**1. The command you cannot accept.** God — or the God your tradition describes —
commands something plainly wrong. Not a hard case; a clear one.

- Your sense of wrongness is what is mistaken. If He commands it, it is right.
- You have misheard, or misread. A good God cannot command what is wrong.
- Then He is not good, and you refuse.
- The exercise mistakes what religious language is doing.

**2. The chaplain and the ethicist.** They reach the same conclusion by different routes.
Which one explains why the conclusion is right?

- The chaplain. Without something above human argument, "right" rests on preference.
- The ethicist. If reason alone gets there, the appeal to God does no work.
- Neither. It is right because of what it does for the patient.
- They agree because they share a civilisation; ask a third tradition.

**3. Euthyphro's father.** He is prosecuting his own father over a labourer's death. His
family call it monstrous. He says piety requires it, and is very sure.

- He is right to go ahead. Being the man's son is not a licence to look away.
- He is right, and the certainty is the problem rather than the conclusion.
- The family are right. He is dressing a betrayal as piety.
- Ask what prosecuting achieves, and decide on that.

## Reading your answer

**Because He Commands It.** You take the first horn and keep God sovereign — not an
unusually well-informed subordinate of a law above Him. You should hold the price openly:
"God is good" now says only that He commands what He commands, and a terrible command has
no ground left to be judged from. Adams's move — grounding obligation in the commands of an
essentially loving God — is the serious attempt to keep the horn without the price, and it
is worth knowing whether it is the move you are making.

**Because It Is Right.** You take the second horn. Goodness is independent, and no
authority overrides your conscience. Clean, and it is what most believers actually do when
a text says something monstrous. The bill is that God was doing explanatory work and you
have taken it on yourself: you now owe an account of what the moral law rests on, and
"reason" names the problem rather than answers it.

**What It Does to People.** You think the grounding question is a distraction from the
answerable one, and you keep your eyes on the widow and the household. That keeps you close
to the facts. Your exposure is that "better outcome" is itself a moral notion in need of a
ground, so the question you stepped around is standing behind you.

**The Man Is His Father.** You refuse to let a principle cut through a relationship that
thick, and your objection to Euthyphro is that he turned his father into a case. This
catches what both horns overlook: obligations mostly arrive through particular people. It
is most exposed where the relationship is exactly why the harm went unaddressed for years,
which is the ordinary shape of harm inside families.

**Whose Gods, Whose Piety.** You take the gods' quarrelling as the real datum, and read
piety as what a particular city thought it meant. Historically alert. But the dilemma
re-forms one level down — between your community's standard and whatever grounds that — so
you have relocated the question rather than closed it.

**The Trouble Is the Certainty.** You do not object to his conclusion so much as to how
easily he reached it — a man who can prosecute his own father without a tremor has stopped
noticing there was a problem. That tracks what the dialogue itself does: Socrates never
says Euthyphro is wrong, only that he cannot say why he is right. What you owe is an
account of when confidence *is* warranted, since the position cannot be that every settled
conviction is a defect of character.

## Sources

- Plato, *Euthyphro*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett).
- Robert Merrihew Adams, *Finite and Infinite Goods: A Framework for Ethics* (Oxford
  University Press, 1999). The modified divine command theory.
- Philip L. Quinn, *Divine Commands and Moral Requirements* (Oxford University Press,
  1978).
- G. E. M. Anscombe, "Modern Moral Philosophy", *Philosophy* 33 (1958), 1–19. The argument
  that the modern "ought" is a legal notion outliving its legislator.
