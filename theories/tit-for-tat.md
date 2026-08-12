---
id: tit-for-tat
title: Tit for Tat
category: principle
tradition: game-theory
philosophers:
  - Robert Axelrod
  - Anatol Rapoport
era: "1984"
tags: [cooperation, retaliation, forgiveness, reciprocity, strategy, punishment]
sources:
  - author: Robert Axelrod
    title: The Evolution of Cooperation
    published: Basic Books
    year: 1984
  - author: Robert Axelrod
    title: "Effective Choice in the Prisoner's Dilemma"
    published: "Journal of Conflict Resolution 24(1), 3–25"
    year: 1980
  - author: Robert Axelrod, William D. Hamilton
    title: "The Evolution of Cooperation"
    published: "Science 211(4489), 1390–1396"
    year: 1981
  - author: Martin A. Nowak, Karl Sigmund
    title: "A strategy of win-stay, lose-shift that outperforms tit-for-tat in the Prisoner's Dilemma game"
    published: "Nature 364, 56–58"
    year: 1993
  - author: William H. Press, Freeman J. Dyson
    title: "Iterated Prisoner's Dilemma contains strategies that dominate any evolutionary opponent"
    published: "Proceedings of the National Academy of Sciences 109(26), 10409–10413"
    year: 2012
  - author: Tony Ashworth
    title: Trench Warfare 1914-1918 - The Live and Let Live System
    published: Macmillan
    year: 1980
questions:
  - id: q1
    prompt: >-
      A neighbouring department has quietly withheld data from you that they had agreed
      to share, and it cost you a deadline. You have data they need next month. Nobody
      above either of you is paying attention.
    options:
      - id: a
        label: >-
          Withhold once, tell them exactly why, and share again the moment they do.
          Cooperation that cannot be defended gets eaten.
        scores: { contractarian: 1.0, consequentialist: 0.5, certainty: 0.4 }
      - id: b
        label: >-
          Share. You do not become a person who withholds data because someone else did,
          and retaliation is how a department turns into two departments.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
      - id: c
        label: >-
          Share, and escalate the original breach through the proper channel. Private
          punishment is exactly what the channel exists to replace.
        scores: { deontological: 0.9, contractarian: 0.5, authority: -0.5 }
      - id: d
        label: >-
          Work out what each course actually costs over the next three years and do that.
          Whether it feels like justice is not the question.
        scores: { consequentialist: 1.0, egoist: 0.4, affect: -0.7 }
  - id: q2
    prompt: >-
      Tit for tat has a known failure. If either side makes a single mistake — a message
      lost, an intention misread — two players who both intend to cooperate can fall into
      an unbroken chain of mutual retaliation, each correctly punishing the last defection.
    options:
      - id: a
        label: >-
          Then build in forgiveness. Occasionally cooperate after being defected against,
          even without an apology, because the cost of one exploitation is less than the cost
          of a permanent feud.
        scores: { consequentialist: 1.0, virtue: 0.4, certainty: -0.5 }
      - id: b
        label: >-
          Then say out loud what you are doing and why, every time. The failure is not in
          the rule, it is in the silence around it.
        scores: { contractarian: 1.0, deontological: 0.4, certainty: 0.3 }
      - id: c
        label: >-
          Then the rule was never doing the moral work. What breaks a feud is somebody
          absorbing a loss they were entitled to avenge, and no strategy will tell you when.
        scores: { virtue: 1.0, care: 0.4, affect: 0.7 }
      - id: d
        label: >-
          Then keep retaliating and accept the cost. A reputation for reliable punishment
          is worth more than any single relationship it destroys.
        scores: { egoist: 0.9, contractarian: 0.4, certainty: 0.6 }
  - id: q3
    prompt: >-
      Axelrod's tournaments rewarded strategies that were nice, retaliatory, forgiving
      and clear. Suppose a strategy of unbroken forgiveness reliably loses — that the
      person who never punishes is exploited until nothing is left.
    options:
      - id: a
        label: >-
          Then unbroken forgiveness is a vice dressed as a virtue. Letting yourself be
          eaten teaches the next person that eating works.
        scores: { consequentialist: 0.9, virtue: 0.5, scope: 0.4 }
      - id: b
        label: >-
          Then losing is sometimes what you are called to do. A principle you abandon when
          it costs you was a policy, not a principle.
        scores: { deontological: 1.0, divine: 0.4, certainty: 0.8 }
      - id: c
        label: >-
          Then the tournament has told you about tournaments. Nobody's life is a round
          robin against strangers with a published score.
        scores: { virtue: 0.9, relativist: 0.4, certainty: -0.6 }
      - id: d
        label: >-
          Then design the institution so that punishment is not your job. Individuals
          forgive badly and courts do it tolerably.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.4 }
  - id: q4
    prompt: >-
      Press and Dyson showed in 2012 that a sufficiently sophisticated player can adopt
      a strategy which forces a naive opponent into an unfair split, and that tit for tat
      has no defence against it beyond refusing to play.
    options:
      - id: a
        label: >-
          Then refuse to play. The strength of a decent strategy was never that it wins,
          it is that you can look at what you did.
        scores: { virtue: 1.0, deontological: 0.4, certainty: 0.4 }
      - id: b
        label: >-
          Then learn the sophisticated strategy. Being exploitable is not a moral
          achievement, and the people you protect depend on you not being exploited.
        scores: { egoist: 0.9, consequentialist: 0.5, scope: -0.5 }
      - id: c
        label: >-
          Then the answer is not individual at all. Make extortion visible and costly to
          the extortioner, by rules that bind whoever writes them too.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.3 }
      - id: d
        label: >-
          Then all these results describe engineering, not ethics. Whether you may cheat
          someone is not settled by whether cheating pays.
        scores: { deontological: 1.0, certainty: 0.8, affect: -0.3 }
outcomes:
  - id: the-reciprocator
    dominant: contractarian
    label: Nice, Provocable, Forgiving, Clear
    text: >-
      You want the terms of engagement stated and enforced — cooperate first, respond in
      kind, and never leave anyone guessing what you will do. Axelrod's four properties
      are your properties, and they have a strong record in exactly the conditions he
      identified: repeated dealings, recognisable partners, an unknown end date. What you
      have to watch is what happens when those conditions fail. Against someone you will
      meet once, or who is playing a different game than the one you announced, clarity is
      information you have given away for nothing.
    base_rate: null
  - id: the-calculator
    dominant: consequentialist
    label: Whatever Actually Works
    text: >-
      You treat retaliation and forgiveness as instruments rather than stances, and you
      choose whichever produces the better run of outcomes. That makes you willing to
      forgive an unrepented defection when a feud would cost more, which is the correction
      the noisy version of the game actually requires. The price is that you have no fixed
      point. Someone who watches you long enough can work out the conditions under which
      you will absorb a wrong, and those conditions are then a lever.
    base_rate: null
  - id: the-line
    dominant: deontological
    label: The Rule Does Not Move
    text: >-
      You hold that what you may do to another person is not settled by what it earns you,
      and that a principle abandoned when it starts costing was never one. This is the
      only position that cannot be reverse-engineered and exploited, because there is
      nothing in it to trade. Its exposure is the case where holding the line does not
      just cost you but costs people who depended on you, and where the calculation you
      refuse to run would have saved them.
    base_rate: null
  - id: the-person
    dominant: virtue
    label: What Retaliating Makes of You
    text: >-
      Your attention is on the agent rather than the payoff, and you notice that a person
      who administers correct punishments for twenty years has become something. So you
      would rather absorb a loss than be trained by a strategy. That is how most feuds
      actually end, and no game-theoretic result contains it. What it cannot give you is
      protection: the person who has decided in advance not to retaliate is legible, and
      being legible in that particular way is an invitation.
    base_rate: null
  - id: the-player
    dominant: egoist
    label: Play the Game in Front of You
    text: >-
      You take seriously that the world contains players who are better at this than you
      are, and you decline to be the reliable donor in someone else's strategy. There is
      an honesty in this that softer positions lack, and the people who depend on you may
      well be better served by it. What it costs is the thing that made cooperation
      possible in the first place — a reputation for behaving well when behaving badly
      would have paid — and that reputation cannot be acquired at the moment you need it.
    base_rate: null
---

## What it means

In 1980 Robert Axelrod, a political scientist, ran a computer tournament. He invited
game theorists, economists, psychologists and mathematicians to submit programs that
would play the iterated prisoner's dilemma against each other — a game where on each
round you may cooperate or defect, where mutual cooperation pays both of you moderately
well, where defecting against a cooperator pays you best of all, and where mutual
defection leaves both of you worse off than if you had cooperated.

The winner was the shortest program submitted. Anatol Rapoport's TIT FOR TAT was four
lines long. It cooperates on the first move, and thereafter does whatever its opponent
did on the previous move. That is the whole strategy. Axelrod published the results,
announced a second tournament in which everyone knew what had won and could design
against it, and TIT FOR TAT won again.

In *The Evolution of Cooperation* (1984), Axelrod drew out why. Successful strategies
shared four properties. They were **nice** — never the first to defect. They were
**provocable** — they retaliated immediately rather than absorbing exploitation. They were
**forgiving** — they returned to cooperation the moment the other side did, holding no
grudge beyond the last move. And they were **clear** — simple enough that an opponent
could work out the rule and see that cooperating was the better reply.

Axelrod's most memorable illustration was not a computer run. It was the live-and-let-live
system that developed in the trenches of the First World War, documented by the sociologist
Tony Ashworth: units facing each other for months developed tacit truces, deliberately
inaccurate shelling at predictable times, and reprisals proportionate enough that both
sides could read them. The general staffs on both sides broke it up by rotating units, which
is precisely what the theory predicts — the strategy depends on expecting to meet the same
people again.

## What it suggests

If Axelrod is right, cooperation does not require good intentions, a shared culture, a
central authority, or even communication. It requires only that people expect to meet
again, can tell each other apart, and can respond. That is a genuinely surprising and
genuinely useful result, and it is why the book is on reading lists in arms control,
commercial law and evolutionary biology alike.

For a person rather than a program, the practical upshot is a policy: extend trust first,
answer betrayal once and proportionately, and let it go the moment the other side comes
back. Almost everyone will recognise this as a description of how decent people manage
long relationships.

Three qualifications matter, and popular accounts routinely omit all three.

First, **tit for tat is fragile under noise**. If a message goes missing or an intention is
misread, two players who both meant to cooperate will lock into an unbroken alternation of
punishment, each correctly retaliating against the last defection. Nowak and Sigmund
showed in *Nature* in 1993 that a strategy of win-stay, lose-shift outperforms tit for tat
in noisy conditions, and generous variants that occasionally forgive without cause do
better than the pure rule. Real life is noisy. This is not an edge case.

Second, **tit for tat did not win everything**. It won two round-robin tournaments under
particular conditions. In the twentieth-anniversary tournament in 2004, teams entering
multiple colluding programs — some designed to recognise each other and sacrifice
themselves to feed a designated winner — took the top places, which says as much about
tournament design as about strategy.

Third, and most seriously, Press and Dyson proved in 2012 that the iterated prisoner's
dilemma contains **zero-determinant strategies**: a sophisticated player can unilaterally
force a fixed relationship between the two scores, extorting a naive but adapting opponent
into accepting an unequal split. Tit for tat has no answer to this beyond refusing to play.
The tidy moral — that decency wins in the long run — turns out to depend on nobody at the
table being much cleverer than you.

And then there is the objection from outside the frame entirely: that none of this is
ethics. A demonstration that a disposition pays is not a demonstration that it is right,
and if extortion had won the tournaments, nothing would follow about whether to extort.

## The problem

You manage a haulage depot, and for six years you and the depot forty miles east have
covered each other's breakdowns without paperwork.

In March, their manager took two of your drivers during a shortage after promising he
would not, and it cost you a contract you had held since 2017. He has never mentioned it.
Last week his refrigeration failed, and he has called you, in the flat voice of a man who
knows exactly what he is calling about, to ask for two units for the weekend.

Your yard foreman wants you to say no, once, clearly, and tell him why. Your accountant
points out that the eastern depot handles your overflow every December and there is no
alternative within a hundred miles. Your daughter, who has started doing your invoicing
and has opinions, says that if you say yes without saying anything you will be the sort of
man people take things from, and that she has watched this happen to you before.

He needs an answer this afternoon.

## The questions

**1. The withheld data.** A department broke an agreement and it cost you a deadline. They
need something from you next month.

- Withhold once, say exactly why, and share again the moment they do.
- Share. You do not become a person who withholds because someone else did.
- Share, and escalate the original breach properly. Private punishment is what channels replace.
- Work out what each course costs over three years and do that.

**2. The echo.** One misread signal can lock two willing cooperators into permanent mutual
punishment.

- Build in forgiveness — cooperate sometimes even without an apology.
- Say out loud what you are doing and why, every time.
- Then the rule was never doing the work. Somebody has to absorb a loss they could avenge.
- Keep retaliating. A reputation for reliable punishment outlasts any one relationship.

**3. If forgiveness loses.** Suppose the player who never punishes is exploited until
nothing is left.

- Then unbroken forgiveness is a vice dressed as a virtue.
- Then losing is sometimes what you are called to do.
- Then the tournament has told you about tournaments.
- Then design institutions so that punishing is not your job.

**4. The extortionist.** A sophisticated player can force an unfair split on you, and tit
for tat has no reply but to walk away.

- Then walk away. Decency was never about winning.
- Then learn the strategy. Being exploitable is not an achievement.
- Then make extortion visible and costly, by rules that bind their author too.
- Then this is engineering, not ethics. Whether you may cheat is not settled by whether it pays.

## Reading your answer

**Nice, Provocable, Forgiving, Clear.** You want the terms stated and enforced, and you
never leave anyone guessing. In repeated dealings with people you will meet again, this is
close to optimal and it is why Axelrod's four properties describe most trustworthy people
you know. Watch the conditions: against a one-off partner, or someone playing a game you
have not identified, your clarity is intelligence you handed over free.

**Whatever Actually Works.** You treat retaliation and forgiveness as tools. That gets you
the correction the noisy version of the game demands — forgiving an unrepented defection
because the feud costs more. What it costs you is a fixed point. Anyone who studies you can
find the conditions under which you will absorb a wrong, and then those conditions become
a handle.

**The Rule Does Not Move.** You hold that what may be done to a person is not settled by
what it earns. Yours is the only position that cannot be reverse-engineered, because there
is nothing in it to trade against. The exposure is the case where the cost of holding falls
on people who were depending on you.

**What Retaliating Makes of You.** You notice that someone who administers correct
punishments for twenty years has become something, and you would rather take the loss. That
is, in fact, how most feuds end, and no result in the literature contains it. It gives you
no protection: a person known to be unwilling to retaliate is legible in the one way that
invites being used.

**Play the Game in Front of You.** You decline to be the reliable donor in somebody else's
strategy, and there is an honesty in that which softer answers lack. The price is the
reputation that made cooperation available in the first place, which cannot be built at the
moment you discover you need it.

## Sources

- Robert Axelrod, *The Evolution of Cooperation* (Basic Books, 1984) — the tournaments, the
  four properties, and the trench-warfare case study.
- Robert Axelrod, "Effective Choice in the Prisoner's Dilemma", *Journal of Conflict
  Resolution* 24(1) (1980), 3–25 — the first tournament.
- Robert Axelrod and William D. Hamilton, "The Evolution of Cooperation", *Science*
  211(4489) (1981), 1390–1396 — the biological extension.
- Martin A. Nowak and Karl Sigmund, "A strategy of win-stay, lose-shift that outperforms
  tit-for-tat in the Prisoner's Dilemma game", *Nature* 364 (1993), 56–58 — the noise problem.
- William H. Press and Freeman J. Dyson, "Iterated Prisoner's Dilemma contains strategies
  that dominate any evolutionary opponent", *PNAS* 109(26) (2012), 10409–10413 — extortionate
  zero-determinant strategies.
- Tony Ashworth, *Trench Warfare 1914-1918: The Live and Let Live System* (Macmillan, 1980)
  — the historical material Axelrod drew on.
