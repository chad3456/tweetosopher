---
id: prisoners-dilemma
title: The Prisoner's Dilemma
category: paradox
tradition: game-theory
philosophers:
  - Merrill Flood
  - Albert Tucker
era: "1950"
tags: [cooperation, defection, rationality, trust, collective-action, self-interest]
sources:
  - author: Merrill M. Flood
    title: "Some Experimental Games"
    published: "Management Science 5(1), 5–26 (first issued as RAND Research Memorandum RM-789-1, 1952)"
    year: 1958
  - author: William Poundstone
    title: Prisoner's Dilemma - John von Neumann, Game Theory and the Puzzle of the Bomb
    published: Doubleday
    year: 1992
  - author: Thomas Hobbes
    title: Leviathan
    published: Andrew Crooke
    year: 1651
  - author: Derek Parfit
    title: Reasons and Persons
    published: Oxford University Press
    year: 1984
  - author: Amartya Sen
    title: "Rational Fools - A Critique of the Behavioral Foundations of Economic Theory"
    published: "Philosophy and Public Affairs 6(4), 317–344"
    year: 1977
  - author: David Sally
    title: "Conversation and cooperation in social dilemmas - a meta-analysis of experiments from 1958 to 1992"
    published: "Rationality and Society 7(1), 58–92"
    year: 1995
questions:
  - id: q1
    prompt: >-
      You and a stranger are questioned separately. Stay silent and you each get one
      year. Betray while the other stays silent and you walk free while he gets ten.
      Both betray and you each get five. You will never meet him and never learn his name.
    options:
      - id: a
        label: >-
          Stay silent. Whatever he does, betraying him is a thing you would have done to a
          man who could not answer, and that is not made acceptable by his doing it first.
        scores: { deontological: 1.0, agency: 0.4, certainty: 0.7 }
      - id: b
        label: >-
          Betray. Whatever he chooses, you are better off having betrayed, and refusing to
          see that is not virtue, it is a preference for how you feel over what happens.
        scores: { egoist: 1.0, consequentialist: 0.4, scope: -0.8 }
      - id: c
        label: >-
          Stay silent, because two silences is the outcome any two people in this position
          would have agreed on if they had been allowed to speak.
        scores: { contractarian: 1.0, consequentialist: 0.4, scope: 0.5 }
      - id: d
        label: >-
          Stay silent, because you would rather be the kind of person who is occasionally
          taken for ten years than the kind who reasons his way out of it.
        scores: { virtue: 1.0, affect: 0.6, certainty: -0.3 }
  - id: q2
    prompt: >-
      Now you know the other prisoner. He is a colleague you have worked beside for nine
      years, and you are confident he will stay silent. Betraying him is now certain to
      work — you walk free and he serves ten.
    options:
      - id: a
        label: >-
          Certainly stay silent. The whole point of a relationship is that it removes some
          options from consideration rather than making them cheaper.
        scores: { care: 1.0, virtue: 0.5, scope: -0.7 }
      - id: b
        label: >-
          Stay silent, and notice that your reason has changed. In the first case you had a
          principle; here you have a friendship, and it is worth knowing which you rely on.
        scores: { virtue: 0.9, care: 0.4, certainty: -0.6 }
      - id: c
        label: >-
          Stay silent. It was wrong to betray a stranger and it is wrong here, and knowing
          him changes the difficulty rather than the answer.
        scores: { deontological: 1.0, certainty: 0.8, scope: 0.4 }
      - id: d
        label: >-
          If he is genuinely certain to stay silent, the argument for betraying is stronger
          here, not weaker — which tells you something uncomfortable about the argument.
        scores: { egoist: 0.8, consequentialist: 0.4, affect: -0.6 }
  - id: q3
    prompt: >-
      Two states can each build a weapon or refrain. Whatever the other does, building is
      safer for the builder; both building leaves both poorer and no safer than both
      refraining. Neither can verify what the other is doing.
    options:
      - id: a
        label: >-
          Build. A government that gambles its population on another government's restraint
          has misunderstood what it was elected to do.
        scores: { egoist: 0.9, deontological: 0.4, scope: -0.8 }
      - id: b
        label: >-
          Build inspection first and the weapons never. The dilemma is a verification
          problem wearing a philosophical costume, and verification is buildable.
        scores: { contractarian: 1.0, consequentialist: 0.4, certainty: -0.3 }
      - id: c
        label: >-
          Refrain unilaterally and say so publicly. Someone has to be first, and a state
          unwilling to take that risk has no standing to ask it of anyone else.
        scores: { virtue: 0.9, consequentialist: 0.4, scope: 0.7 }
      - id: d
        label: >-
          Refrain, because building a thing whose only use is mass killing is not permitted
          to you regardless of what it protects.
        scores: { deontological: 1.0, divine: 0.3, certainty: 0.8 }
  - id: q4
    prompt: >-
      Suppose defection really is the rationally dominant move in a one-shot game, and
      suppose you cooperate anyway. What is the honest description of what you did?
    options:
      - id: a
        label: >-
          You acted rationally by a wider standard. Any account of rationality on which
          two people reliably reach a worse outcome has defined the word badly.
        scores: { contractarian: 0.9, consequentialist: 0.4, certainty: 0.4 }
      - id: b
        label: >-
          You did something other than maximise, and it was better. Not everything worth
          doing has to be smuggled back inside the definition of self-interest.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
      - id: c
        label: >-
          You obeyed a rule that does not consult outcomes, which is exactly what a moral
          rule is for, and its whole value lies in surviving cases like this.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: d
        label: >-
          You made a mistake, possibly an admirable one. Sentiment is not a refutation of
          arithmetic, and pretending otherwise will cost somebody eventually.
        scores: { egoist: 0.9, consequentialist: 0.4, affect: -0.9 }
outcomes:
  - id: dominance
    dominant: egoist
    label: The Dominant Move
    text: >-
      You follow the structure of the game where it leads and refuse to dress the result
      up. Whatever the other does, you do better by defecting, and you regard the reluctance
      to say so as squeamishness with consequences of its own. There is a real integrity in
      this, and it has kept people alive. The cost is that the reasoning is symmetrical:
      everyone who reasons as you do ends in mutual defection, worse off than the people who
      did not, and you cannot recommend your own policy to others without making yourself
      poorer.
    base_rate: null
  - id: the-agreement
    dominant: contractarian
    label: What You Would Have Agreed
    text: >-
      Your answer is that the dilemma is an artefact of being unable to speak, and the
      remedy is to build the conversation into the world — contracts, inspections,
      enforcement, anything that makes the promise cost something to break. This is how
      almost every real prisoner's dilemma has actually been solved, from arms control to
      fisheries. What it does not tell you is what to do this afternoon, in the room, with
      no institution and no time to build one.
    base_rate: null
  - id: the-rule
    dominant: deontological
    label: Not Yours to Do
    text: >-
      You hold that betraying someone who cannot answer is impermissible whatever it gets
      you, and that a rule which bends when the payoff is high enough was never a rule.
      This is the position the dilemma is least able to touch, because it does not enter the
      payoff comparison at all. Its exposure is the case where your silence is not noble but
      expensive to third parties who did not choose it, and where the person you refused to
      betray is betraying you.
    base_rate: null
  - id: the-person
    dominant: virtue
    label: The Sort of Person to Be
    text: >-
      You would rather be occasionally exploited than be someone who reasons his way out of
      loyalty, and you take the disposition rather than the individual decision as the real
      unit. That is probably how trust is actually produced, since nobody can verify a
      calculation but people can read a character. What it cannot do is give an account of
      itself when the exploitation is severe, and you should know in advance how much of
      someone else's ten years you are willing to spend on being that person.
    base_rate: null
  - id: the-friend
    dominant: care
    label: The Man in the Next Room
    text: >-
      For you the decisive fact is who he is. A relationship of nine years does not lower
      the price of betrayal, it takes betrayal off the table, and you regard a mind still
      running the comparison as one that has already left the relationship. That is a true
      description of what friendship is for. It also means your answer changes when the
      other prisoner is a stranger, and you owe some account of what he is owed — since the
      game was designed so that he is exactly as trapped as your friend.
    base_rate: null
---

## What it means

The prisoner's dilemma is a two-by-two table that has caused more philosophical trouble
than most books.

It was constructed in 1950 at the RAND Corporation by Merrill Flood and Melvin Dresher,
who were studying whether real people played as the new mathematics of games said they
should. Albert W. Tucker, giving a talk to psychologists at Stanford shortly afterwards,
supplied the story that gave it its name: two prisoners, questioned separately, each
offered a lighter sentence for testifying against the other. William Poundstone's
*Prisoner's Dilemma* (1992) tells the history.

The structure is this. Each player chooses to cooperate or defect, without knowing the
other's choice. If both cooperate, both do reasonably well. If both defect, both do badly.
If one defects while the other cooperates, the defector does best of all and the
cooperator worst of all.

What makes it a paradox rather than a puzzle is that defection **dominates**. Suppose the
other player cooperates: you do better by defecting. Suppose he defects: you still do
better by defecting. Since this holds whatever he does, you never need to know what he
does. And since the reasoning is available to him too, both defect, and both end up worse
off than if both had done the thing that individual reasoning told each of them not to do.

The first experimental run, by Flood and Dresher, is a small comedy that deserves to be
better known. Their two subjects, playing a hundred rounds, cooperated far more than the
theory predicted, and one of them wrote notes complaining that the other was not being
sensible. Real people have been failing to defect ever since. David Sally's 1995
meta-analysis of experiments from 1958 to 1992 found substantial cooperation across the
literature, and found that the single strongest predictor of cooperation was simply
whether the players had been allowed to talk to each other beforehand — even when the talk
could not bind anyone to anything.

## What it suggests

If the structure is real, then a great many bad outcomes are nobody's fault in the usual
sense. Arms races, overfishing, price wars, doping in sport, tax avoidance, the collapse of
a queue into a scrum: in each, everyone behaves defensibly given what everyone else is
doing, and the result is worse for all of them than an arrangement none of them could
individually reach. Hobbes had the essential thought in 1651 without the table — in the
state of nature each man's rational self-defence produces the war of all against all, and
only a sovereign able to enforce covenants gets anyone out.

That is the constructive lesson, and it is the reason the dilemma is a founding text of
institutional design. The way out is almost never to persuade individuals to be better. It
is to change the payoffs: make the promise enforceable, make the interaction repeated, make
reputations visible, make defection detectable. Arms control treaties are inspection
regimes rather than moral appeals for exactly this reason.

The objections are worth stating precisely, because two of them are strong.

Amartya Sen's, in "Rational Fools" (1977), is that the model has smuggled in a theory of
persons. It defines rational as maximising your own ranked preferences and then discovers,
with feigned surprise, that maximisers do badly together. A person with commitments — who
simply will not testify against a colleague, and does not experience this as a cost to be
weighed — is not irrational; he has a different structure, and describing that structure as
a defect is a decision, not a finding.

Derek Parfit's, in *Reasons and Persons* (1984), is that the dilemma shows self-interested
theories to be **self-defeating**: a theory that tells everyone to defect makes everyone
worse off by the theory's own measure, which is a serious mark against it.

And there is a limit worth being honest about. The one-shot dilemma with anonymous
strangers, no reputation, no repetition and no communication is a laboratory construction.
Most of life is the iterated version among people who can see each other, which is a
different game with different answers — as Axelrod's tournaments showed.

## The problem

Your firm and one competitor supply the same three hospitals with the same sterile
consumable, and both of you are losing money on the contract.

The tender opens in eleven days. If you both bid at cost, you both survive on thin margins,
which is what happened last time. If you undercut and they do not, you take all three
hospitals and they lay off forty people in a town with nothing else. If they undercut and
you do not, the same happens to you. If you both undercut, you both bid below cost, and
in about two years one of you goes under and the survivor raises prices on hospitals that
will have no alternative.

You cannot discuss it with them. Discussing it is a criminal offence, and rightly so; the
last time two firms in this sector coordinated, patients paid for it for a decade.

Their managing director is a woman you have known for twenty years. On Friday she said, in
a corridor at a conference, without context and without looking at you, that she hoped
everyone would be sensible this time. You have spent the weekend trying to work out whether
that was a signal, a plea, a trap, or nothing at all.

## The questions

**1. The strangers.** Silence gets you each a year. Betray a silent man and you walk while
he gets ten. Both betray and you get five each. You will never meet him.

- Stay silent. Betraying a man who cannot answer is not made acceptable by his doing it first.
- Betray. Whatever he does, you do better, and refusing to see it is not virtue.
- Stay silent — two silences is what any two people here would have agreed on if they could speak.
- Stay silent, because you would rather be occasionally taken for ten years than reason your way out.

**2. The colleague.** You know he will stay silent. Betraying him is now certain to work.

- Certainly stay silent. A relationship removes options rather than repricing them.
- Stay silent, and notice your reason has changed from a principle to a friendship.
- Stay silent. Knowing him changes the difficulty, not the answer.
- If he is certain to stay silent, the argument for betraying is stronger here — which tells
  you something about the argument.

**3. The two states.** Building is safer whatever the other does; both building leaves both
poorer and no safer. Neither can verify.

- Build. A government that gambles its population on another's restraint has misunderstood its job.
- Build inspection first and the weapons never.
- Refrain unilaterally and say so publicly. Someone has to be first.
- Refrain, because building it is not permitted to you regardless of what it protects.

**4. What you did.** Suppose defection really is dominant and you cooperate anyway.

- You were rational by a wider standard; any account on which two people reach a worse
  outcome has defined the word badly.
- You did something other than maximise, and it was better.
- You obeyed a rule that does not consult outcomes, which is what rules are for.
- You made a mistake, possibly an admirable one.

## Reading your answer

**The Dominant Move.** You follow the structure and refuse to dress up the result. There is
real integrity in that, and it has kept people alive. The problem is that your reasoning is
symmetrical — everyone who reasons as you do ends worse off than people who do not, and you
cannot recommend your own policy without damaging yourself.

**What You Would Have Agreed.** You treat the dilemma as an artefact of not being able to
speak, and you build the conversation into the world: contracts, inspection, enforcement.
This is how nearly every real dilemma has been solved. It does not tell you what to do this
afternoon, in a room, with no institution and no time to build one.

**Not Yours to Do.** You hold that betraying someone who cannot answer is impermissible
whatever it gets you. The dilemma cannot touch this, because it never enters the payoff
comparison. It is exposed where your silence is expensive to third parties who did not
choose it, and where the man you refused to betray is at this moment betraying you.

**The Sort of Person to Be.** You take the disposition as the unit rather than the decision,
which is probably how trust is really produced. What you owe yourself is a number: how much
of someone else's ten years you are prepared to spend on being that person.

**The Man in the Next Room.** For you the decisive fact is who he is, and a mind still
running the comparison has already left the friendship. That is a true account of what
friendship is for. It also means your answer changes when the prisoner is a stranger — and
the game was built so that he is exactly as trapped as your friend is.

## Sources

- Merrill M. Flood, "Some Experimental Games", *Management Science* 5(1) (1958), 5–26;
  first issued as RAND Research Memorandum RM-789-1 (1952) — the original experiment with
  Melvin Dresher.
- William Poundstone, *Prisoner's Dilemma* (Doubleday, 1992) — the RAND history and
  Tucker's naming of the game.
- Thomas Hobbes, *Leviathan* (1651) — the state of nature as the same structure without
  the table.
- Derek Parfit, *Reasons and Persons* (Oxford University Press, 1984), Part One — the
  self-defeatingness of self-interested theories.
- Amartya Sen, "Rational Fools: A Critique of the Behavioral Foundations of Economic
  Theory", *Philosophy and Public Affairs* 6(4) (1977), 317–344.
- David Sally, "Conversation and cooperation in social dilemmas: a meta-analysis of
  experiments from 1958 to 1992", *Rationality and Society* 7(1) (1995), 58–92 — consult it
  directly for cooperation rates, which vary widely with design and are not reproduced here.
