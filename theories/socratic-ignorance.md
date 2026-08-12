---
id: socratic-ignorance
title: Socratic Ignorance
category: principle
tradition: classical-greek
philosophers:
  - Socrates
era: "c. 399 BCE"
tags: [humility, knowledge, certainty, expertise, doubt]
sources:
  - author: Plato
    title: Apology
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Plato
    title: Charmides
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Gregory Vlastos
    title: "Socrates' Disavowal of Knowledge"
    published: "The Philosophical Quarterly 35, 1–31"
    year: 1985
  - author: Michel de Montaigne
    title: "An Apology for Raymond Sebond"
    published: "in The Complete Essays, Book II"
questions:
  - id: q1
    prompt: >-
      A ward is deciding whether to withdraw treatment from a patient who cannot speak
      for herself. You are the least experienced person in the room and the only one
      who is not sure. Everyone else is certain, and they disagree with each other.
    options:
      - id: a
        label: >-
          Say you are not sure, and say why. Uncertainty stated out loud is worth
          more to that room than another confident vote.
        scores: { virtue: 0.9, certainty: -0.8, affect: -0.3 }
      - id: b
        label: >-
          Defer. The others have seen a hundred of these and you have seen two;
          experience is a form of knowledge you do not have yet.
        scores: { deontological: 0.6, virtue: 0.4, authority: -0.8 }
      - id: c
        label: >-
          Doubt is a luxury here. Someone has to decide by Thursday, and the least
          bad estimate of her interests is the only usable thing in the room.
        scores: { consequentialist: 0.9, agency: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          Two clinicians certain of opposite conclusions is evidence that there is no
          fact of the matter, only frameworks. Say that.
        scores: { relativist: 0.9, certainty: -0.6 }
  - id: q2
    prompt: >-
      Your brother has decided, after two years of reading, that a treatment your whole
      profession considers useless will cure his wife. He asks what you think. He is not
      being stupid; he has arguments, and you cannot immediately refute all of them.
    options:
      - id: a
        label: >-
          Tell him plainly that he is wrong. Some things are settled, and Socratic
          modesty about them is a pose that will cost her months.
        scores: { deontological: 0.8, certainty: 0.9, affect: -0.4 }
      - id: b
        label: >-
          Take his arguments apart with him, one at a time, without asserting anything
          you cannot defend. Let the collapse be his.
        scores: { virtue: 1.0, certainty: -0.4, authority: 0.5 }
      - id: c
        label: >-
          Say what the evidence shows and what it does not, then back whichever choice
          produces the most survivable outcome for her.
        scores: { consequentialist: 0.9, scope: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          It is his marriage and his framework, and yours is not a view from nowhere
          either. Say your piece once and then stop.
        scores: { relativist: 0.7, care: 0.4, authority: 0.4 }
  - id: q3
    prompt: >-
      You have held a moral position for thirty years — on capital punishment, or eating
      animals, or something equally load-bearing. Someone half your age makes an argument
      against it that you cannot answer.
    options:
      - id: a
        label: >-
          Say you cannot answer it, and mean it. An unanswerable objection you file
          away and keep walking past is a lie you tell yourself.
        scores: { virtue: 0.9, certainty: -0.7, affect: -0.4 }
      - id: b
        label: >-
          Not being able to answer an argument on the spot is weak evidence. Thirty
          years of considered judgement outweighs one clever afternoon.
        scores: { deontological: 0.7, certainty: 0.8, affect: 0.4 }
      - id: c
        label: >-
          Change the position provisionally and see what it costs you to live in.
          Beliefs are tested by being worn, not by being defended.
        scores: { consequentialist: 0.7, virtue: 0.4, certainty: -0.6 }
      - id: d
        label: >-
          The fact that both positions survive every argument thrown at them tells
          you what kind of question this is, and it is not a factual one.
        scores: { relativist: 0.8, nihilist: 0.3, certainty: -0.5 }
outcomes:
  - id: the-disavowal
    dominant: virtue
    label: Knowing That You Do Not Know
    text: >-
      You treat the admission of ignorance as an achievement rather than a failure, and you
      are willing to make it in public, in rooms where it is expensive. That is the
      Socratic position proper, and it is rarer than the number of people who quote it. Its
      cost is real: uncertainty is contagious, and a person who reliably declines to assert
      will find that decisions get made by whoever is willing to assert instead — which is
      not always an improvement on you.
    base_rate: null
  - id: the-settled
    dominant: deontological
    label: Some Things Are Settled
    text: >-
      You hold that not everything is open, and that treating a settled matter as an open
      question is its own kind of dishonesty — one that costs people time they do not have.
      This is a defence against the use of professional humility as a way of never being
      responsible for a claim. What it owes you is a criterion: which things are settled,
      who settled them, and what it would take to unsettle one, answered before rather than
      after the argument you would rather not have.
    base_rate: null
  - id: the-decision
    dominant: consequentialist
    label: Something Has to Be Decided
    text: >-
      You take uncertainty as a fact about the evidence, not a reason to withhold action:
      the estimate is what you have, and Thursday is coming. This is how anyone who has
      ever had to actually decide something thinks. Its exposure is that acting on a bad
      estimate with full commitment is precisely the failure mode Socrates was pointing at,
      and confidence in your estimate is not the same thing as the estimate being good.
    base_rate: null
  - id: the-frameworks
    dominant: relativist
    label: No Fact of the Matter
    text: >-
      You read persistent, competent disagreement as evidence that the question has no
      single answer rather than that someone is failing to find it. This is a serious
      position and it explains a great deal about moral disagreement that the alternatives
      handle badly. Note the distance from Socrates: he doubted his own grip on the truth,
      not the existence of one, and the difference shows up the moment someone asserts
      something monstrous and you find you have nothing to say but that it is not your
      framework.
    base_rate: null
---

## What it means

At his trial, as Plato reports it in the *Apology*, Socrates explains how he made so
many enemies. A friend had asked the oracle at Delphi whether anyone was wiser than
Socrates, and the oracle said no. Socrates, who believed he knew nothing of value, set
out to refute this by finding someone wiser. He went to the politicians, then the poets,
then the craftsmen. In each case he found a man who knew something real — the craftsmen
genuinely did know their crafts — but who, on the strength of it, believed he also
understood justice, piety and the good. Socrates concluded that the oracle meant this:
he was wiser only in that he did not think he knew what he did not know.

That is the whole doctrine, and it is narrower than the slogan it has become. "All I know
is that I know nothing" is not what the text says, and it is not a position anyone can
hold — it eats itself. What Socrates disavows is *sophia*, the wisdom that would let him
say what virtue is. He is perfectly willing to assert other things, and does so
constantly, often with force: that it is worse to do injustice than to suffer it, that
he will not stop philosophising, that a good man cannot be harmed. Gregory Vlastos
proposed a well-known resolution — that Socrates disclaims one kind of knowledge, the
kind that comes with a demonstrable account, while claiming another, the kind you earn by
holding a belief through years of unsuccessful attempts to refute it.

The method follows from the position. If he does not know, he cannot teach; he can only
test. So the dialogues are cross-examinations, and most of them end without an answer.
The *Charmides* fails to define temperance. The *Euthyphro* fails to define piety. This
is not authorial coyness. It is what an inquiry conducted by someone who really does not
know looks like from the inside.

## What it suggests

Taken seriously, it reorders who you listen to. The signal of competence stops being
confidence and becomes the ability to say precisely where one's competence ends — which
is a much rarer skill and much less rewarded. It implies that the expert who answers
outside his field is not merely overreaching but exhibiting the specific error Socrates
found in the craftsmen: a real skill mistaken for general authority.

It also implies a way of arguing. If you do not have the answer, you cannot deliver it;
you can only find out whether the other person's answer survives. That is a slower, less
satisfying and much more respectful form of disagreement than assertion, and it has the
side effect that when a position collapses, it collapses in the holder's own hands rather
than being knocked down by you — which is the only way anybody actually changes their
mind.

The objection is that professed ignorance is very easily worn as a costume. Socrates was
accused of exactly this in his own lifetime; the charge of *eirōneia*, mock-modesty, was
not a compliment. A man who declines to assert anything cannot be pinned to anything, and
can dismantle every position in the room while risking none of his own. There is also a
straightforwardly practical cost. Some things are known. Vaccines work; the earth is old;
the man in the dock did it, and the CCTV shows him doing it. Treating settled matters as
perpetually open is not humility, it is a way of never being answerable for a claim, and
in public life it is now a recognised technique for people who want a question kept open
because the answer is inconvenient. Montaigne, who inherited the Socratic posture and made
it his own, was clear that doubt was meant to be lived rather than deployed — the moment it
becomes an instrument for winning, it has turned into the thing it was against.

## The problem

The inquiry into the bridge has been running for four months, and Priya is the youngest
engineer on the panel by fifteen years.

Two things are true. The first is that she does not know why the deck failed; nobody
does; the modelling is ambiguous and the recovered steel supports at least three stories.
The second is that everyone else on the panel has now settled, and there are two camps,
and each camp is certain, and their certainty has hardened over four months of arguing
with the other.

The report is due in a fortnight. If she signs with the majority, the finding is a
material defect, the manufacturer pays, and a class of fixings is withdrawn from bridges
across the country — which will be good if it is right and enormously expensive if it is
not. If she writes a minority note saying the evidence does not support either finding,
the report goes out weakened, the manufacturer's lawyers will use her three paragraphs
for a decade, and nothing gets withdrawn from anything.

She has been over the data eleven times. She is the only person in the room who does not
know what happened, and she has begun to suspect that this is not because she is the
youngest.

## The questions

**1. The ward round.** A decision to withdraw treatment. You are the least experienced
person present and the only one who is unsure; everyone else is certain and they disagree
with each other.

- Say you are not sure, and say why.
- Defer. Experience is a form of knowledge you do not have yet.
- Doubt is a luxury; someone has to decide by Thursday.
- Two clinicians certain of opposite conclusions is evidence there is no fact of the
  matter.

**2. Your brother's treatment.** He has arguments for a therapy your profession considers
useless, and you cannot immediately refute all of them.

- Tell him plainly that he is wrong. Some things are settled.
- Take his arguments apart with him, one at a time, asserting nothing you cannot defend.
- Say what the evidence shows and what it does not, then back the most survivable option.
- It is his marriage and his framework. Say your piece once and stop.

**3. The thirty-year position.** Someone half your age makes an argument against it that
you cannot answer.

- Say you cannot answer it, and mean it.
- Failing to answer on the spot is weak evidence against thirty years of judgement.
- Change the position provisionally and see what it costs to live in.
- That both positions survive every argument tells you what kind of question this is.

## Reading your answer

**Knowing That You Do Not Know.** You treat admitted ignorance as an achievement and are
willing to pay for it in rooms where it is expensive. That is the Socratic position rather
than the slogan. The cost is that decisions still get made, and if you reliably decline to
assert, they get made by whoever will — which is not always an upgrade on you.

**Some Things Are Settled.** You hold that treating closed questions as open is its own
dishonesty, and that it costs people time they do not have. This blocks the use of humility
as permanent deniability. You owe a criterion: which things are settled, and what would
unsettle one — decided in advance of the argument you would rather not have.

**Something Has to Be Decided.** You treat uncertainty as a property of the evidence, not a
reason to withhold action. This is how anyone who has actually had to decide something
thinks. Your exposure is that acting on a poor estimate with full commitment is exactly the
failure Socrates was describing, and your confidence in the estimate is not evidence about
the estimate.

**No Fact of the Matter.** You read persistent competent disagreement as evidence the
question has no single answer. Serious, and it explains moral disagreement better than the
alternatives do. Notice the distance from Socrates: he doubted his own grip on the truth,
not that there was one. The difference surfaces the moment somebody asserts something
monstrous and all you have is that it is not your framework.

## Sources

- Plato, *Apology*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). The oracle
  story and the disavowal.
- Plato, *Charmides*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). An inquiry
  into temperance that ends without one.
- Gregory Vlastos, "Socrates' Disavowal of Knowledge", *The Philosophical Quarterly* 35
  (1985), 1–31. The two-kinds-of-knowledge resolution.
- Michel de Montaigne, "An Apology for Raymond Sebond", in *The Complete Essays*, Book II
  — scepticism as something lived rather than deployed.
