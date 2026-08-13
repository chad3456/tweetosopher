---
id: dirty-hands
title: The Problem of Dirty Hands
category: paradox
tradition: political-ethics
philosophers:
  - Michael Walzer
  - Jean-Paul Sartre
era: "1973"
tags: [politics, guilt, torture, moral-residue, leadership]
sources:
  - author: Michael Walzer
    title: "Political Action: The Problem of Dirty Hands"
    published: "Philosophy & Public Affairs 2(2), 160–180"
    year: 1973
  - author: Jean-Paul Sartre
    title: Les Mains sales
    published: "Gallimard; translated as Dirty Hands"
    year: 1948
  - author: Max Weber
    title: Politics as a Vocation
    published: "Lecture, Munich; in From Max Weber: Essays in Sociology"
    year: 1919
  - author: Niccolò Machiavelli
    title: The Prince
    published: "Composed 1513, published posthumously"
    year: 1532
  - author: Bernard Williams
    title: "Politics and Moral Character"
    published: "in Moral Luck: Philosophical Papers 1973–1980, Cambridge University Press"
    year: 1981
questions:
  - id: q1
    prompt: >-
      You are running for office on a platform of school reform you believe will
      genuinely help children. You cannot win the district without the ward boss,
      and his price is a school construction contract for his brother-in-law's firm.
      Refuse and you lose; the incumbent keeps the schools as they are.
    options:
      - id: a
        label: >-
          Make the deal. Refusing buys you clean hands at the children's expense,
          and that is a purchase made with someone else's money.
        scores: { consequentialist: 1.0, scope: 0.6, agency: 0.5 }
      - id: b
        label: >-
          Make the deal, and know that you have done something wrong that winning
          does not erase. The debt is real even though the deal was right.
        scores: { virtue: 0.9, consequentialist: 0.4, certainty: -0.5, affect: 0.4 }
      - id: c
        label: >-
          Refuse. A politician who trades away the public's money to get power is
          already the thing he promised to replace.
        scores: { deontological: 0.9, certainty: 0.6, authority: 0.4 }
      - id: d
        label: >-
          There is no rule that settles this. You make the deal or you don't, and
          whichever you do is a choice you invent and then have to answer for.
        scores: { existentialist: 1.0, certainty: -0.8, authority: 0.5 }
  - id: q2
    prompt: >-
      You now hold office. A captured member of a rebel cell is in custody and your
      security chief is confident the man knows where bombs are hidden in the
      city's markets, set to go off within the day. He wants your authorisation to
      torture him. You believe the intelligence is probably right.
    options:
      - id: a
        label: >-
          Authorise it. If the bombs are real, refusing is a decision to let people
          be blown apart in order to keep your own conscience tidy.
        scores: { consequentialist: 1.0, agency: 0.8, affect: -0.6 }
      - id: b
        label: >-
          Authorise it, then resign or submit to prosecution. If the act needed
          doing it still needed paying for, and you are the one who owes.
        scores: { virtue: 1.0, deontological: 0.4, certainty: -0.4, authority: 0.5 }
      - id: c
        label: >-
          Refuse. Torture is one of the things a state may not do, and "probably"
          is the word every torturer in history has used.
        scores: { deontological: 1.0, certainty: 0.8, agency: -0.6 }
      - id: d
        label: >-
          Refuse the framing. The case is built so that only one answer is available;
          real emergencies never come with this much certainty attached.
        scores: { existentialist: 0.5, relativist: 0.4, certainty: -0.7, affect: 0.3 }
  - id: q3
    prompt: >-
      A year later the bombs turn out to have been real and the city was saved. Your
      opponent runs on what you authorised. A journalist asks whether you regret it.
    options:
      - id: a
        label: >-
          Say no. It was the right call, it saved the market crowds, and manufacturing
          remorse you do not feel is its own kind of dishonesty.
        scores: { consequentialist: 1.0, certainty: 0.6, affect: -0.5 }
      - id: b
        label: >-
          Say yes, and mean it. Something was destroyed in that room that the saved
          lives do not restore, and a leader who cannot feel that should not hold power.
        scores: { virtue: 1.0, care: 0.4, affect: 0.7 }
      - id: c
        label: >-
          Say it was a crime, and that you would do it again, and that both halves
          of that sentence are true. Let the voters decide what to do with you.
        scores: { deontological: 0.6, virtue: 0.5, certainty: -0.5, authority: 0.4 }
      - id: d
        label: >-
          Say that regret is beside the point. You chose, the choice is yours, and
          the meaning it has is the one your later conduct gives it.
        scores: { existentialist: 1.0, certainty: -0.6, affect: -0.4 }
outcomes:
  - id: the-tally
    dominant: consequentialist
    label: The Tally, Not the Hands
    text: >-
      You think that if an act was the best available, it was simply right, and that
      the residue people report feeling afterwards is nerves rather than knowledge.
      This is coherent, and it spares you the strange position of calling an act
      both required and wicked. The cost is that your theory has no way to mark the
      difference between a leader who authorises torture with difficulty and one who
      does it easily — and in practice that difference is most of what we want to
      know about the people we hand power to.
    base_rate: null
  - id: the-forbidden
    dominant: deontological
    label: The Things a State May Not Do
    text: >-
      You hold that some acts are barred to public officials whatever the stakes,
      and you notice that emergency is the standing excuse of every regime that has
      ever tortured. That is a strong historical argument and it does real work.
      What it owes you is an answer for the case where the emergency is genuine: if
      you would let a city burn rather than break the rule, say so plainly, because
      that is the commitment, and softening it into "the case would never really
      arise" is a way of not answering.
    base_rate: null
  - id: the-stain
    dominant: virtue
    label: The Stain That Stays
    text: >-
      You want both halves: the act was necessary and the actor is guilty. This is
      close to Walzer's own position, and it captures something the other answers
      lose — that we want leaders who are reluctant, who suffer the decision, who
      would not be available for it a second time without cost. The objection is
      structural: if the act was right, what exactly is the guilt tracking, and if it
      was wrong, why did you order it? A theory that answers "both" has to explain
      how, or the guilt becomes a performance that licenses the next act.
    base_rate: null
  - id: the-choice
    dominant: existentialist
    label: No Rule Will Sign for You
    text: >-
      You think the situation exceeds every rule brought to it, and that what happens
      in the room is a choice a person makes and then owns — Sartre's Hoederer, who
      says he will dirty his hands up to the elbows rather than govern with gloves on.
      This is honest about how such decisions actually feel from inside. Its exposure
      is that it gives no purchase on the leader who chooses monstrously and owns it
      with equal sincerity; ownership is not yet a constraint.
    base_rate: null
---

## What it means

The problem of dirty hands is the claim that political life contains acts that are
wrong and also right to do — not merely permitted, not merely excusable, but genuinely
wrong and genuinely required, so that the person who does them is both correct and
guilty.

Michael Walzer named the problem in its modern form in "Political Action: The Problem
of Dirty Hands" (1973). His question is not whether politicians in fact lie, bribe and
authorise ugly things; everyone knows they do. His question is what to say about the
good politician who does it. Walzer thinks we want three things at once from such a
person, and that the three do not fit together. We want them to do the necessary thing.
We want them to know it was wrong. And we want the knowing to cost them something
visible, so that the next such act is harder rather than easier.

The lineage runs back through Max Weber's 1919 lecture "Politics as a Vocation", which
distinguished an ethic of conviction — act rightly and let the consequences fall — from
an ethic of responsibility, which holds you answerable for what follows from your purity.
Weber's politician contracts with "diabolical powers" and cannot come away unmarked. It
runs back further to Machiavelli, who advised the prince to learn how not to be good;
but Machiavelli, on the usual reading, is telling the prince to shed the moral scruple
rather than to carry it, and that is exactly what Walzer will not do. Walzer's politician
keeps the scruple and violates it.

The title comes from Sartre's 1948 play *Les Mains sales*, in which the party organiser
Hoederer tells the young idealist that he has hands dirty to the elbows — that he has
plunged them in filth and blood — and asks whether the boy imagines one can govern
innocently. The play is not a defence of anything; Hoederer is murdered, and the murder
is politically useful, and nobody is clean at the end.

## What it suggests

If the paradox is real, two very tidy pictures of political morality are false.

The first is the picture in which the right act leaves no remainder. On a straightforward
consequentialist accounting, if bribing the ward boss produced the best available outcome,
then bribing him was right and there is nothing left over to feel. Walzer's reply is that
the feeling is data. We do not simply approve of the politician who tortured and saved the
city; we want him to have found it terrible, and we would think less of him — and trust
him less with the next decision — if he had not. A theory that treats that reaction as
sentimental noise is throwing away the main thing we know about political character.

The second is the picture in which the rule settles it. If torture is absolutely
forbidden, then the official who refuses has done his duty and the deaths that follow are
not his. Walzer thinks this too is a purchase, and one made with other people's money: the
official has bought his own moral cleanliness at a price paid by strangers, and calling
the price "not his doing" is a claim that has to be argued rather than announced.

The strongest objection is that the paradox may be incoherent, and dangerous in exactly
the way incoherent things are. If the act was right, the guilt has nothing to attach to;
if it was wrong, no amount of anguish licenses it. Critics have pressed that the dirty
hands story gives officials the best of both worlds — the act and the halo — and that in
practice the confession of moral agony has become the standard rhetorical accompaniment
to policies that would be harder to defend on their merits. Walzer is alive to this and
his answer is institutional rather than psychological: the guilt has to be *paid*, in
resignation, punishment or disgrace, or it is not guilt at all. Whether any political
system has ever actually collected that debt is a fair question to put to him.

Bernard Williams, writing about political character, made a related and sharper point:
the useful question is not which acts are permitted but what kind of person we should
want to be capable of doing them — because a role that requires such acts will select,
over time, for people who find them easy.

## The problem

You are three weeks from an election you can win.

The reform you have spent four years on is real: two thousand children in a district
where the roofs leak and the science labs have no gas. You have costed it, and it works.
Your opponent will not do it, has said so, and will win if you do not.

Kovacs runs the eleventh ward and has never lost it. He will move the ward for you. His
price is that the demolition contract goes to a company his brother-in-law owns, which
will do the work adequately and overcharge the city by perhaps four hundred thousand.
He does not put it that way. He puts it as a conversation about local firms and local
jobs, and he does not need an answer tonight.

Four hundred thousand is a science wing. It is also less than the cost of doing nothing
for another four years, and you have done that arithmetic more than once at three in the
morning.

If you take the deal you will win, and the children will get the schools, and there will
be a fact about you that you will not be able to put down. If you refuse you will lose
cleanly, and the roofs will still leak in 2030, and you will be able to say — to yourself,
since nobody else will ask — that you never traded anything that was not yours to trade.

Kovacs is waiting. He is a patient man and he has done this many times.

## The questions

**1. The ward boss.** You cannot win without a deal that hands a public contract to a
crony. Losing means the reform dies.

- Make the deal. Refusing buys clean hands with someone else's money.
- Make the deal, and know you have done something wrong that winning does not erase.
- Refuse. A politician who trades the public's money for power is already what he
  promised to replace.
- No rule settles this. Whichever you do is a choice you invent and then answer for.

**2. The interrogation room.** A captured man probably knows where bombs are hidden in
the city's markets. Your security chief wants authorisation.

- Authorise it. Refusing is a decision to let people be blown apart to keep your
  conscience tidy.
- Authorise it, then resign or submit to prosecution. The act still needs paying for.
- Refuse. Torture is one of the things a state may not do, and "probably" is the word
  every torturer has used.
- Refuse the framing. Real emergencies never come with this much certainty attached.

**3. The interview.** The bombs were real, the city was saved, and a journalist asks
whether you regret it.

- No. It was the right call, and manufacturing remorse you do not feel is its own
  dishonesty.
- Yes, and you mean it. A leader who cannot feel what was destroyed in that room
  should not hold power.
- It was a crime and you would do it again, and both halves are true. Let the voters
  decide what to do with you.
- Regret is beside the point. You chose; the meaning of the choice is what your later
  conduct makes of it.

## Reading your answer

**The Tally, Not the Hands.** You think a best-available act is simply right, and the
residue people report is nerves rather than knowledge. That is coherent and it avoids the
odd position of calling an act both required and wicked. Its price: your account cannot
distinguish the leader who authorised torture with difficulty from the one who found it
easy, and in practice that distinction is most of what we want to know about the people
we give power to.

**The Things a State May Not Do.** You hold that certain acts are barred to officials
whatever the stakes, and you are right that emergency is the standing alibi of every
regime that ever tortured. The commitment you have to state plainly is the hard case: if
you would let the markets burn rather than break the rule, say it. Deflecting with "the
case would never really arise" is not an answer, it is a change of subject.

**The Stain That Stays.** You want the act necessary and the actor guilty, which is close
to Walzer's own position and catches something real about what we want from leaders. The
question you owe: if the act was right, what is the guilt tracking? Unless the guilt has
teeth — resignation, prosecution, the end of a career — it becomes a ritual that makes
the next such act cheaper rather than dearer.

**No Rule Will Sign for You.** You think the situation outruns every rule brought to it
and that what remains is a choice someone makes and owns. That is honest about how these
decisions feel from the inside. It is most exposed against the official who chooses
monstrously and owns it with the same sincerity you admire — owning a choice is not yet
a limit on what may be chosen.

## Sources

- Michael Walzer, "Political Action: The Problem of Dirty Hands", *Philosophy & Public
  Affairs* 2(2) (1973), 160–180.
- Jean-Paul Sartre, *Les Mains sales* (1948), translated as *Dirty Hands*.
- Max Weber, "Politics as a Vocation" (lecture, Munich, 1919), in *From Max Weber: Essays
  in Sociology*.
- Niccolò Machiavelli, *The Prince* (composed 1513; published 1532).
- Bernard Williams, "Politics and Moral Character", in *Moral Luck: Philosophical Papers
  1973–1980* (Cambridge University Press, 1981).
