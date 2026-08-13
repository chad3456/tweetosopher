---
id: civil-resistance-threshold
title: The Participation Threshold
category: theory
tradition: nonviolent-resistance
philosophers:
  - Erica Chenoweth
  - Maria Stephan
era: "2011"
tags: [protest, revolution, democracy, evidence, legitimacy, statistics]
sources:
  - author: Erica Chenoweth and Maria J. Stephan
    title: "Why Civil Resistance Works: The Strategic Logic of Nonviolent Conflict"
    published: Columbia University Press
    year: 2011
  - author: Erica Chenoweth
    title: "Civil Resistance: What Everyone Needs to Know"
    published: Oxford University Press
    year: 2021
  - author: Erica Chenoweth
    title: "The Future of Nonviolent Resistance"
    published: "Journal of Democracy 31(3)"
    year: 2020
  - author: Erica Chenoweth
    title: "Questions, Answers, and Some Cautionary Updates Regarding the 3.5% Rule"
    published: "Carr Center for Human Rights Policy, Harvard Kennedy School, discussion paper"
    year: 2020
  - author: Jonathan Pinckney
    title: "From Dissent to Democracy: The Promise and Peril of Civil Resistance Transitions"
    published: Oxford University Press
    year: 2020
  - author: Sidney Tarrow
    title: "Power in Movement: Social Movements and Contentious Politics"
    published: Cambridge University Press
    year: 1994
  - author: Steven Levitsky and Daniel Ziblatt
    title: How Democracies Die
    published: Crown
    year: 2018
  - author: Guillermo O'Donnell
    title: Delegative Democracy
    published: "Journal of Democracy 5(1)"
    year: 1994
questions:
  - id: q1
    prompt: >-
      Your campaign's own count says roughly 2.9 per cent of the country has turned out at
      peak. Reaching the figure people keep citing would mean bringing in villagers from
      three provinces who will be identifiable to the police afterwards and who cannot
      leave the country if this goes wrong.
    options:
      - id: a
        label: >-
          Bring them. Participation size is the best-supported predictor anyone has, and
          declining to use the one thing that reliably matters is not caution, it is
          waste.
        scores: { consequentialist: 0.9, scope: 0.5, affect: -0.6 }
        evidence:
          who: Erica Chenoweth and Maria J. Stephan
          work: Why Civil Resistance Works
          year: 2011
          says: >-
            Across their dataset of twentieth-century campaigns, the size and social
            breadth of participation emerged as the strongest single correlate of
            success, working through defections, loyalty shifts and the range of methods
            a large campaign can sustain.
      - id: b
        label: >-
          Do not treat a historical regularity as a target. The figure described campaigns
          that had already grown; it was never a recipe for growing one.
        scores: { consequentialist: 0.6, certainty: -0.8, affect: -0.4 }
        evidence:
          who: Erica Chenoweth
          work: "Questions, Answers, and Some Cautionary Updates Regarding the 3.5% Rule"
          year: 2020
          says: >-
            Chenoweth has repeatedly cautioned that the threshold is a descriptive
            observation about her sample rather than a law or a strategic instruction,
            and that no campaign in the data mobilised that share by deciding to.
      - id: c
        label: >-
          The number is a symptom, not a cause. Campaigns reach that size when the regime
          is already cracking, and you cannot manufacture the crack from below.
        scores: { consequentialist: 0.7, relativist: 0.4, certainty: -0.7 }
        evidence:
          who: Sidney Tarrow
          work: Power in Movement
          year: 1994
          says: >-
            Tarrow argued that cycles of contention open when political opportunities
            appear — elite divisions, unstable alignments, weakened repression — so that
            mass mobilisation is often the visible sign of a shift that began elsewhere.
      - id: d
        label: >-
          You are proposing to move human beings across a country to hit a statistical
          target. That is the wrong relation to have to the people who trust you.
        scores: { deontological: 0.8, care: 0.7, agency: -0.5 }
  - id: q2
    prompt: >-
      The president offers a negotiated early election in eighteen months, with the same
      electoral commission and the same state broadcaster. Half your coalition calls it a
      win; the other half says it is the concession that ends the campaign without
      changing anything.
    options:
      - id: a
        label: >-
          Take it. A campaign that extracts a dated concession from a sitting president
          has done the thing campaigns are for, and holding out for total victory is how
          movements dissolve.
        scores: { consequentialist: 0.9, certainty: -0.4, scope: 0.4 }
        evidence:
          who: Erica Chenoweth and Maria J. Stephan
          work: Why Civil Resistance Works
          year: 2011
          says: >-
            Their coding counts a campaign as successful when it achieves its stated
            maximalist objective within a year of peak activity, and much of the record
            consists of negotiated exits rather than collapses.
      - id: b
        label: >-
          Refuse. What a database records as success is not what people marched for, and
          the coding is exactly where this literature is weakest.
        scores: { consequentialist: 0.6, deontological: 0.5, certainty: 0.5 }
        evidence:
          who: Jonathan Pinckney
          work: From Dissent to Democracy
          year: 2020
          says: >-
            Pinckney showed that campaigns which remove a ruler frequently fail to produce
            democracy afterwards, and that what follows depends on sustained mobilisation
            and on the transitional government not concentrating power — none of which the
            success coding captures.
      - id: c
        label: >-
          Neither half of the coalition owns this. Put it to the people who have been
          sleeping in the square, and abide by what they say.
        scores: { contractarian: 0.9, authority: 0.4, scope: 0.5 }
      - id: d
        label: >-
          Accept and stay in the square. A promise from this government is worth exactly
          the pressure standing behind it on the day it comes due.
        scores: { consequentialist: 0.8, egoist: 0.3, certainty: -0.5 }
        evidence:
          who: Guillermo O'Donnell
          work: Delegative Democracy
          year: 1994
          says: >-
            O'Donnell described elected executives who accept the ritual of elections while
            hollowing out the institutions that could hold them to account, which implies
            that a commitment from such an executive binds only while it is enforced.
  - id: q3
    prompt: >-
      A television commentator makes the case against you plainly. Nine hundred thousand
      people is three per cent of the country; the president was elected with fifty-one
      per cent; and a movement that removes a government because it can fill a square is
      claiming a veto that no one voted to give it.
    options:
      - id: a
        label: >-
          He is right. The remedy for a bad election is the next one, and removing an
          elected government by mobilisation writes a precedent your opponents will use
          against you within the decade.
        scores: { contractarian: 0.8, deontological: 0.6, authority: -0.6 }
        evidence:
          who: Steven Levitsky and Daniel Ziblatt
          work: How Democracies Die
          year: 2018
          says: >-
            Levitsky and Ziblatt document cases in which opposition attempts to remove
            elected leaders by extra-electoral means strengthened those leaders and
            accelerated democratic breakdown rather than preventing it.
      - id: b
        label: >-
          He is wrong. A vote held under a captured court, a state broadcaster and a
          jailed challenger is not a mandate, and the street is the only check left
          standing.
        scores: { consequentialist: 0.8, deontological: 0.5, authority: 0.7 }
        evidence:
          who: Guillermo O'Donnell
          work: Delegative Democracy
          year: 1994
          says: >-
            O'Donnell's argument is that an electoral victory does not by itself confer
            democratic authority where horizontal accountability has been dismantled, since
            the election is then a plebiscite rather than a choice.
      - id: c
        label: >-
          Both are counting the wrong thing. Neither a crowd nor a ballot box settles
          legitimacy; the question is whether the rules could be accepted by whoever ends
          up losing under them.
        scores: { contractarian: 0.9, certainty: 0.4, affect: -0.5 }
        evidence:
          who: John Rawls
          work: A Theory of Justice
          year: 1971
          says: >-
            Rawls grounded legitimacy in principles that free and equal persons could
            accept in advance without knowing their own position, which makes both the
            headcount in the square and the margin at the polls evidence rather than the
            standard.
      - id: d
        label: >-
          Whichever side wins will describe its own method as the legitimate one. This
          argument is about who expects to be on top, and everyone in it knows that.
        scores: { relativist: 0.8, egoist: 0.3, certainty: -0.7 }
  - id: q4
    prompt: >-
      A statistician friend takes the finding apart over dinner: the dataset only includes
      campaigns that already reached a thousand observed participants, the success coding
      is generous, and the record since 2010 is far worse than the century it was drawn
      from.
    options:
      - id: a
        label: >-
          Concede all of it. The honest claim is narrower than the one on the placards,
          and its own author has said so.
        scores: { consequentialist: 0.6, certainty: -0.9, affect: -0.5 }
        evidence:
          who: Erica Chenoweth
          work: The Future of Nonviolent Resistance
          year: 2020
          says: >-
            Chenoweth reported that the success rate of nonviolent campaigns has fallen
            sharply since around 2010, attributing it partly to smaller and more
            digitally organised campaigns and partly to regimes that have learned to
            counter them.
      - id: b
        label: >-
          A weakened regularity is still the best comparison available, and the
          alternative it is being compared with is armed rebellion, which does worse on
          the same coding and costs more.
        scores: { consequentialist: 0.9, scope: 0.5, certainty: 0.4 }
        evidence:
          who: Erica Chenoweth
          work: "Civil Resistance: What Everyone Needs to Know"
          year: 2021
          says: >-
            Chenoweth's summary of the field holds that even after every correction, the
            comparative record still favours nonviolent campaigns over armed ones on
            both success and post-conflict outcomes.
      - id: c
        label: >-
          The measurement argument is a way of not noticing that actual people are being
          asked to risk their lives on a correlation drawn from other people's countries.
        scores: { care: 0.9, virtue: 0.4, affect: 0.6 }
      - id: d
        label: >-
          None of this decides anything. You do not consult a dataset to work out whether
          to refuse a government you cannot live under.
        scores: { existentialist: 0.8, virtue: 0.45, authority: 0.6 }
        evidence:
          who: Václav Havel
          work: The Power of the Powerless
          year: 1978
          says: >-
            Havel's greengrocer stops displaying the slogan not because a calculation
            favours it but because continuing has become a lie he is telling with his own
            hands; the refusal is prior to any estimate of what it will achieve.
outcomes:
  - id: the-arithmetic
    dominant: consequentialist
    label: The Arithmetic
    text: >-
      You want to know what actually moves outcomes, and you are willing to change your
      plan when the evidence changes. That is rarer in political argument than it should
      be, and it is the spirit in which Chenoweth and Stephan did the work. What it exposes
      you to is treating a correlation as an instruction: the dataset can tell you that big
      campaigns succeeded more often, and it cannot tell you that the forty people you
      bring in tomorrow will not simply be arrested.
    base_rate: null
  - id: not-a-target
    dominant: deontological
    label: People Are Not the Denominator
    text: >-
      You refuse to let a person become a unit in a headcount, whatever the headcount
      predicts, and you hold to procedural limits even when they cost you the outcome. The
      strength of this is that it survives the moment when your side is winning and finds
      the shortcut tempting. The cost is that the constraint binds you and not the
      government, which is the standard complaint against it and has never been fully
      answered.
    base_rate: null
  - id: who-agreed
    dominant: contractarian
    label: Rules the Loser Could Accept
    text: >-
      Your test is what could be agreed to in advance by people who do not know whether
      they will win — which is why you distrust both the square and a rigged ballot, and
      why you want the risk-bearers themselves to decide about the deal. It is the most
      stable position here. Its weakness is speed: working out what everyone could accept
      takes time that a campaign at its peak does not have, and peaks do not recur on
      request.
    base_rate: null
  - id: the-people-counted
    dominant: care
    label: The People Being Counted
    text: >-
      You keep your attention on the identifiable villagers rather than the percentage
      they would constitute, and you notice when a strategic conversation has stopped
      being about anyone. That instinct is a genuine check on organisers who have started
      to think in aggregates. Where it leaves you stuck is that the status quo is also
      producing casualties, they are simply not gathered in one place where you can see
      them at once.
    base_rate: null
  - id: whoever-wins-writes-it
    dominant: relativist
    label: Whoever Wins Writes It
    text: >-
      You read the legitimacy argument as a proxy for the power struggle underneath, and
      you are frequently right — the same commentators change sides on street mobilisation
      depending on who is in the street. The difficulty is that this reading also dissolves
      your own claim: if legitimacy language is only ever positioning, you have nothing
      left to say when the winners do what the losers were condemned for.
    base_rate: null
  - id: prior-to-the-estimate
    dominant: existentialist
    label: Prior to the Estimate
    text: >-
      You think the decision to refuse comes before any calculation of what refusal will
      achieve, and that a person who resists only when the odds are good was not really
      resisting. Havel is with you, and so is most of the testimony of people who actually
      did it. The price is that this reasoning cannot be given to anyone else: it justifies
      your own risk and it cannot justify asking a village to take one.
    base_rate: null
---

## What it means

Erica Chenoweth and Maria Stephan's *Why Civil Resistance Works* (2011) did something the
literature on protest had mostly avoided: it counted. They assembled a dataset of major
campaigns from 1900 onward that pursued maximalist aims — removing a government, expelling
an occupier, or seceding — and that could be observed to have at least a thousand
participants. Then they coded each campaign as primarily violent or primarily nonviolent
and asked which achieved its stated objective.

The headline result was that the nonviolent campaigns succeeded roughly twice as often as
the armed ones: about half against about a quarter, on their coding. That finding is the
reason the book is cited in places where nobody reads political science, and it is worth
noting that the authors' own explanation is not moral. Nonviolent campaigns did better, they
argued, because they are easier to join. A campaign that does not require you to be young,
fit, armed and willing to kill can recruit the old, the religious, the middle class and the
civil servant — and it is those people, once mobilised, who make security-force defection
and elite fracture likely.

From that came the claim the book is now known for. Chenoweth has stated that no campaign in
the dataset which mobilised at least around three and a half per cent of the population at
its peak failed to achieve its aim. The figure has escaped into activist practice as the
**3.5% rule**, printed on placards and cited as an engineering specification. Chenoweth
herself has spent years qualifying it — most directly in a 2020 discussion paper written
because the claim had run so far ahead of what the data supports. It is a description of a
particular set of cases, not a law; the sample of campaigns that ever got that large is
small; and nothing in the data shows that a campaign can decide to reach that size.

Chenoweth has also published the least convenient update. In *Journal of Democracy* (2020)
she reported that the success rate of nonviolent campaigns has fallen sharply since about
2010 — a period of more campaigns, more digital organisation, smaller sustained turnout, and
governments that have plainly studied the same literature.

## What it suggests

**If the finding holds, breadth beats intensity.** A campaign should be measured by how many
different kinds of person are in it, not by how committed the committed are. That is a real
instruction and it cuts against the instincts of most activist cultures, which reward
militancy and treat the cautious participant as a lesser one.

**It also makes participation a moral currency.** Once you know that size predicts success,
every additional body has an expected value, and the organiser's problem becomes a
recruitment problem with a target attached. This is where the finding starts doing damage.
The people who make up the marginal percentage point are rarely the people who wrote the
strategy, and the risk is not distributed the way the credit is.

**The strongest objection is that the threshold may be a thermometer, not a lever.**
Campaigns reach that size when a regime is already fracturing — when the police are unsure,
when the business class has quietly hedged, when repression has become erratic. On that
reading, popularised in the movement literature by the political-opportunity tradition
Sidney Tarrow set out in *Power in Movement* (1994), the crowd measures the crack rather
than causing it, and an organiser who plans to manufacture 3.5 per cent has misunderstood
what the number was recording.

Two further problems are technical and serious. The dataset selects on visibility: campaigns
too small or too quickly crushed to leave a record are not in it, which biases the sample
toward the ones that got somewhere. And the success coding — objective achieved within a
year of peak — counts outcomes that participants would not recognise as victories. Jonathan
Pinckney's *From Dissent to Democracy* (2020) traces what happened afterwards in these cases
and the picture is far less encouraging than the headline suggests.

## The problem

Ines has the count on a laptop in the back of a church hall, and she does not want to show
it to the others.

Peak turnout was nine hundred and ten thousand across eleven cities, in a country of thirty
million. That is a little over three per cent. Everyone in the room has read the same
article and knows what the next number is supposed to be, and her organisers have a plan to
reach it: buses from three rural provinces, roughly two hundred thousand people, most of
them from towns where everyone knows everyone and where the police will have no difficulty
identifying who went.

The people on those buses cannot leave the country. They do not have relatives abroad. If
this campaign stalls in a month, they will still be living next door to the man who wrote
down their names.

Meanwhile the president's office has made a private offer: an early election in eighteen
months, conducted by the same electoral commission that certified the last one. Half of
Ines's coalition wants to take it. The other half points out that the same offer was made in
another country nine years ago and that the election, when it came, was not close.

Ines's difficulty is not that she doubts the research. It is that the research describes
campaigns from the outside, after they finished, and she is inside one that has not.

## The questions

**1. The buses.** Reaching the cited figure means bringing in villagers who will be
identifiable afterwards.

- Bring them. Participation size is the best-supported predictor anyone has.
- Do not treat a historical regularity as a target. It described campaigns; it does not grow
  them.
- The number is a symptom. Campaigns get that big when the regime is already cracking.
- Moving people to hit a statistical target is the wrong relation to have to them.

**2. The offer.** An early election in eighteen months, same commission, same broadcaster.

- Take it. A dated concession is what campaigns are for.
- Refuse. What a database calls success is not what people marched for.
- Put it to the people who have been sleeping in the square.
- Accept and stay in the square. The promise is worth the pressure behind it.

**3. The commentator.** Three per cent removing a president elected with fifty-one.

- He is right. The remedy for a bad election is the next one, and this precedent will be
  used against you.
- He is wrong. A vote under a captured court is not a mandate.
- Both are counting the wrong thing; legitimacy is about rules the loser could accept.
- Whoever wins will call their own method legitimate, and everyone here knows it.

**4. The statistician.** Selection into the sample, generous success coding, a much worse
record since 2010.

- Concede all of it. The honest claim is narrower, and its author has said so.
- A weakened regularity still beats the alternative it is compared with.
- The measurement argument avoids noticing who is being asked to take the risk.
- None of this decides anything. You do not consult a dataset about this.

## Reading your answer

**The Arithmetic.** You update on evidence and want to know what actually moves outcomes,
which is the spirit the research was done in. The exposure is treating a correlation as an
instruction — the data cannot tell you that the people you bring tomorrow will not simply be
arrested.

**People Are Not the Denominator.** You will not let a person become a unit, and you keep
procedural limits when they cost you. That survives the moment your side is winning. It also
binds you and not the government, which is the standing complaint and has no clean answer.

**Rules the Loser Could Accept.** You distrust the square and the rigged ballot equally, and
you want the risk-bearers themselves consulted. It is the most stable position here, and the
slowest — peaks do not recur on request.

**The People Being Counted.** You watch the identifiable villagers rather than the
percentage. That is a real check on organisers thinking in aggregates. The status quo also
produces casualties; they are simply never gathered where you can see them at once.

**Whoever Wins Writes It.** You hear legitimacy talk as positioning, and you are often
right. The reading also dissolves your own claim, which leaves you nothing to say when the
winners do what the losers were condemned for.

**Prior to the Estimate.** You think refusal comes before the calculation, and most
first-hand testimony agrees with you. The price is that this reason cannot be given to
anyone else — it justifies your risk, not your asking a village to take one.

## Sources

- Erica Chenoweth and Maria J. Stephan, *Why Civil Resistance Works* (Columbia University
  Press, 2011) — the dataset, the comparison with armed campaigns, and the participation
  argument.
- Erica Chenoweth, *Civil Resistance: What Everyone Needs to Know* (Oxford University Press,
  2021) — the field summarised, with the qualifications.
- Erica Chenoweth, "The Future of Nonviolent Resistance", *Journal of Democracy* 31(3)
  (2020) — the post-2010 decline, reported by the finding's own author.
- Jonathan Pinckney, *From Dissent to Democracy* (Oxford University Press, 2020) — what
  happens after a campaign coded successful.
- Sidney Tarrow, *Power in Movement* (Cambridge University Press, 1994) — political
  opportunity, and why mass turnout may be the sign of a shift rather than its cause.
- Steven Levitsky and Daniel Ziblatt, *How Democracies Die* (Crown, 2018) — the case against
  extra-electoral removal of elected leaders.
- Guillermo O'Donnell, "Delegative Democracy", *Journal of Democracy* 5(1) (1994) — why an
  election win is not by itself democratic authority.
