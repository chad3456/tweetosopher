---
id: radical-chic
title: Radical Chic
category: term
tradition: literary-criticism
philosophers:
  - Tom Wolfe
era: "1970"
tags: [status, class, solidarity, satire, elites, sincerity]
sources:
  - author: Tom Wolfe
    title: "Radical Chic & Mau-Mauing the Flak Catchers"
    published: Farrar, Straus and Giroux
    year: 1970
  - author: Thorstein Veblen
    title: The Theory of the Leisure Class
    published: Macmillan
    year: 1899
  - author: Christopher Lasch
    title: The Revolt of the Elites and the Betrayal of Democracy
    published: W. W. Norton
    year: 1995
  - author: George Orwell
    title: The Road to Wigan Pier
    published: Victor Gollancz
    year: 1937
  - author: Dwight Macdonald
    title: "Parajournalism, or Tom Wolfe and His Magic Writing Machine"
    published: The New York Review of Books
    year: 1965
  - author: Pierre Bourdieu
    title: "Distinction: A Social Critique of the Judgement of Taste"
    published: Les Éditions de Minuit
    year: 1979
questions:
  - id: q1
    prompt: >-
      A wealthy host holds a fundraiser in her apartment for a militant tenants' movement.
      The evening raises ninety thousand pounds for a bail and legal fund. It also produces
      a photograph of the host, in her drawing room, beside the movement's spokesman.
    options:
      - id: a
        label: >-
          Ninety thousand pounds is ninety thousand pounds. The motive of the giver is not
          a property of the money.
        scores: { consequentialist: 0.9, affect: -0.7, scope: 0.5 }
        evidence:
          who: Peter Singer
          work: "Famine, Affluence, and Morality"
          year: 1972
          says: >-
            Singer's argument turns entirely on what the transfer does for the recipient;
            on his account the donor's inner life, and whether giving flatters them, is
            morally beside the point next to the good the money does.
      - id: b
        label: >-
          The photograph is the transaction. She bought standing among her own set, and the
          movement supplied it.
        scores: { virtue: 0.8, egoist: 0.4, affect: 0.6 }
        evidence:
          who: Thorstein Veblen
          work: The Theory of the Leisure Class
          year: 1899
          says: >-
            Veblen argued that the leisure class signals rank through expenditures whose
            point is that they are visible and costly, and that the signalling function
            operates whether or not the spender is aware of it.
      - id: c
        label: >-
          Both. She gets the status and they get the fund, and that is a normal exchange
          rather than a scandal.
        scores: { relativist: 0.7, contractarian: 0.4, certainty: -0.6 }
        evidence:
          who: Pierre Bourdieu
          work: "Distinction: A Social Critique of the Judgement of Taste"
          year: 1979
          says: >-
            Bourdieu treated cultural and political affiliation as convertible into social
            standing as a matter of routine, describing the conversion as how the field
            works rather than as an individual failing to be denounced.
      - id: d
        label: >-
          Ask the people the fund is for. Whether the evening was tasteful is a question
          only the comfortable have the leisure to raise.
        scores: { care: 0.8, consequentialist: 0.5, authority: 0.4 }
  - id: q2
    prompt: >-
      A journalist attends and writes it up: the canapés, the accents, the host's anxiety
      about which staff to have visible. The piece is brilliant, widely read, and does not
      engage a single claim the movement makes.
    options:
      - id: a
        label: >-
          That is the piece worth writing. The gap between what people say they believe and
          what they are doing socially is the real information.
        scores: { virtue: 0.9, affect: 0.5, certainty: 0.4 }
        evidence:
          who: Tom Wolfe
          work: "Radical Chic & Mau-Mauing the Flak Catchers"
          year: 1970
          says: >-
            Wolfe's method was to report the social detail — seating, servants, clothes,
            who was nervous about whom — on the view that the status manoeuvre was the
            actual event and the political content largely its occasion.
      - id: b
        label: >-
          It is an assassination dressed as reporting. Describing someone's furniture is
          not a refutation of what they funded.
        scores: { deontological: 0.8, certainty: 0.5, affect: -0.5 }
        evidence:
          who: Dwight Macdonald
          work: "Parajournalism, or Tom Wolfe and His Magic Writing Machine"
          year: 1965
          says: >-
            Macdonald's charge against Wolfe was that the form borrows journalism's
            authority while taking fiction's liberties, so the reader cannot tell where
            observation stops and the writer's disdain begins.
      - id: c
        label: >-
          The journalist is running the same status game from the other side, and his
          readers are buying the same product: the pleasure of being above someone.
        scores: { relativist: 0.7, virtue: 0.5, certainty: -0.5 }
        evidence:
          who: Christopher Lasch
          work: The Revolt of the Elites and the Betrayal of Democracy
          year: 1995
          says: >-
            Lasch held that contempt for other elites is itself a professional-class
            posture, and that the critic who positions himself as the one honest man in
            the room is making a bid for standing rather than escaping the competition.
      - id: d
        label: >-
          Publish it, and publish the movement's programme beside it. Ridicule and argument
          are different jobs and a magazine can do both.
        scores: { deontological: 0.6, consequentialist: 0.5, scope: 0.5 }
  - id: q3
    prompt: >-
      Six months later the same journalist is invited to a private dinner where a
      manufacturer funds a campaign against a workplace-safety rule, on stated grounds of
      liberty, while his own plants are the ones the rule would cover.
    options:
      - id: a
        label: >-
          Identical case, and it must be written identically. A tool that only points one
          way is not a tool.
        scores: { deontological: 0.9, scope: 0.7, certainty: 0.6 }
        evidence:
          who: Adam Smith
          work: The Wealth of Nations
          year: 1776
          says: >-
            Smith warned that any law or regulation proposed by a body of merchants should
            be examined with long suspicion, because such men have an interest in deceiving
            and even oppressing the public that differs from the public's own.
      - id: b
        label: >-
          Not identical. He is at least paying a cost aligned with his own interest, which
          is honest in a way the drawing room was not.
        scores: { virtue: 0.6, egoist: 0.4, affect: 0.5 }
      - id: c
        label: >-
          Worse, and by a wide margin. One evening spends status on other people's cause;
          the other spends money to keep a hazard where it already is.
        scores: { consequentialist: 0.9, care: 0.6, scope: 0.6 }
        evidence:
          who: Friedrich Engels
          work: The Condition of the Working Class in England
          year: 1845
          says: >-
            Engels argued that when a class knowingly maintains conditions it knows to be
            killing people, the resulting deaths should be described as the acts they are
            rather than as the weather.
      - id: d
        label: >-
          Neither dinner is the story. Both are anecdotes standing in for an argument about
          the rule, which nobody at either table examined.
        scores: { consequentialist: 0.6, certainty: -0.7, affect: -0.8 }
  - id: q4
    prompt: >-
      The host reads the piece. She is humiliated, and she is also considering whether to
      hold the next fundraiser at all.
    options:
      - id: a
        label: >-
          Hold it. Withdrawing because you were mocked confirms that the applause was the
          point.
        scores: { virtue: 0.8, deontological: 0.5, authority: 0.6 }
        evidence:
          who: Aristotle
          work: Nicomachean Ethics
          says: >-
            Aristotle's account of the great-souled man has him indifferent to honour from
            people whose judgement he does not respect; acting well because it is good,
            not because it is seen, is what makes the act his own.
      - id: b
        label: >-
          Hold it privately. The cause keeps the money and loses the photograph, which
          costs her exactly what the critique says she came for.
        scores: { consequentialist: 0.8, virtue: 0.5, affect: -0.5 }
      - id: c
        label: >-
          Stop, and give quietly to something nearer to her. She was never going to
          understand what these people needed and the evening proved it.
        scores: { care: 0.7, relativist: 0.5, scope: -0.7 }
        evidence:
          who: George Orwell
          work: The Road to Wigan Pier
          year: 1937
          says: >-
            Orwell wrote that many middle-class socialists were drawn to the idea of the
            worker while flinching from actual workers, and that the gap between the
            doctrine and the physical reality did not survive contact.
      - id: d
        label: >-
          The question is hers to settle and nobody else's business. A person humiliated in
          print owes the public no further performance in either direction.
        scores: { existentialist: 0.8, authority: 0.7, certainty: -0.4 }
outcomes:
  - id: the-money-is-the-money
    dominant: consequentialist
    label: The Money Is the Money
    text: >-
      You judge the evening by what it moved: a bail fund, a safety rule, a hazard left in
      place. That keeps you focused on the thing most of this argument is a distraction
      from, and it makes you very hard to embarrass, because embarrassment is not an
      outcome. The cost is that you have no account of why anyone finds these scenes
      revolting, and the revulsion is doing real political work whether or not it is
      justified — a movement funded by people who need to be seen funding it will be
      steered by what can be seen.
    base_rate: null
  - id: what-the-evening-makes-of-you
    dominant: virtue
    label: What the Evening Makes of You
    text: >-
      You watch what the act does to the actor, and you notice the difference between
      giving and being seen to give. Wolfe is with you, and so, from the other direction,
      is Orwell. The exposure is that this reading is unfalsifiable in the hands of anyone
      who wants it: any generous act can be redescribed as a status move, and once you have
      the redescription you never have to examine what the person was actually funding.
    base_rate: null
  - id: the-same-tool-both-ways
    dominant: deontological
    label: The Same Tool Both Ways
    text: >-
      You hold that a standard which cannot be turned on your own side is not a standard,
      and you would run the manufacturer's dinner in the same column as the drawing room.
      That is the discipline this whole genre lacks. What it costs you is force: applied
      evenly, the critique flattens differences of scale that matter, and you will find
      yourself giving equal weight to a vanity and an injury because both were served with
      drinks.
    base_rate: null
  - id: ask-the-beneficiaries
    dominant: care
    label: Ask Who It Was For
    text: >-
      Your instinct is to look past the hosts to the people the fund was raised for, and to
      treat taste as a luxury complaint. That is usually the right correction, and it is the
      one the essay never makes. Its weakness is that beneficiaries are not a single voice
      and can be invoked without being asked — the appeal to them is available to anyone
      who claims to speak for them, which includes the people running the fund.
    base_rate: null
  - id: everyone-is-playing
    dominant: relativist
    label: Everyone Is Playing
    text: >-
      You see status competition on all sides of the room, the journalist's included, and
      you decline to treat any player's stance as the neutral one. Bourdieu and Lasch both
      support you, from different politics. The difficulty is where it leaves you: if every
      position is a move in a status game, so is that observation, and you have no ground
      from which to say the safety rule should stand.
    base_rate: null
  - id: nobody-owes-a-performance
    dominant: existentialist
    label: Nobody Owes a Performance
    text: >-
      You think the humiliated host's decision belongs to her, and that both the
      grandstanding and the penitent retreat are ways of letting an audience write your
      conduct. That is a real defence of a self against a crowd. It also cannot be scaled:
      a politics made of private choices nobody may comment on is not a politics, and the
      fund still has to be raised in public by somebody.
    base_rate: null
---

## What it means

In June 1970 Tom Wolfe published an account of a party. Leonard Bernstein — conductor of
the New York Philharmonic, one of the most celebrated musicians alive — and his wife Felicia
Montealegre had hosted a gathering at their Park Avenue duplex to raise money for the legal
defence of the Panther 21, members of the Black Panther Party then facing charges in New
York. Wolfe's piece, later collected as *Radical Chic & Mau-Mauing the Flak Catchers*
(1970), reported the evening in exhaustive social detail: the canapés and who served them,
the question of whether to use the white servants that night, the guests' clothes and
nervousness, the Panthers' field marshal explaining the ten-point programme to a room of
people asking careful questions.

The term Wolfe coined names what he thought was actually happening. **Radical chic** is the
adoption of a radical cause as a marker of social standing by people who will not bear the
consequences of the cause succeeding. On Wolfe's reading the politics was real to nobody in
that room in the way it was real on the street; what was real was a status economy in which
proximity to a genuinely dangerous movement conferred something no amount of money could
otherwise buy — the frisson of authenticity, seriousness, moral weight.

The observation is older than the phrase. Thorstein Veblen's *The Theory of the Leisure
Class* (1899) had described conspicuous consumption as expenditure whose function is to be
seen, and Wolfe's move was to notice that political affiliation can serve the same function,
at lower cost. Pierre Bourdieu, from an entirely different tradition, would soon describe
the same convertibility as ordinary sociology rather than hypocrisy. Christopher Lasch
extended it in a direction the phrase's usual users skip: the critic of elite posturing is
also making a status bid, and the pose of being the one unillusioned man in the room is
itself a position in the market.

Three things about the essay are usually left out when the phrase is deployed. Wolfe was a
satirist with his own politics, and the piece is an attack, not a survey. The defendants
in the Panther 21 case were acquitted on all counts in 1971, after a trial that ran for
months and that the jury took under an hour to decide — the fund paid for a defence that
turned out to be warranted. And
Bernstein was surveilled and briefed against by the FBI during the same period, which means
the evening had a consequence for him beyond the loss of face Wolfe inflicted. None of that
refutes Wolfe. All of it complicates the confident use of his term.

## What it suggests

If the concept holds, it changes what a public act of solidarity is evidence of. It says
that the visibility of a commitment is not incidental to it, and that we should expect the
causes elites take up to be selected partly for what they signal — dangerous enough to be
impressive, distant enough to be safe. That predicts something checkable: sympathies cluster
where the sympathiser's own arrangements are not at risk.

It also cuts at a specific self-image. The person at the party believes they are doing a
brave thing. Wolfe's claim is not that they are lying but that they cannot see the ledger
they are settling, which is why the essay is written as description rather than argument —
you are meant to recognise the room, not be persuaded about it.

**The objection is serious and it is the reason the term is dangerous.** Motive-reading is
unfalsifiable. Any charitable act can be redescribed as status-seeking, and once the
redescription is available it functions as a permanent excuse never to engage what the
person actually said or funded. Wolfe's essay does not answer a single Panther claim; it
does not need to, because it has changed the subject to seating arrangements. The same
technique works perfectly against a donor to a police widows' fund or a bishop denouncing
abortion, and it is used that way. A critique that can be run against anyone who acts in
public, and which never requires the critic to hold a position of their own, is not analysis
— it is a way of winning without arguing.

There is also the question of what the alternative is supposed to be. If the wealthy give
publicly they are performing; if they give privately they are absolved of scrutiny; if they
give nothing they are at least not hypocrites. A standard on which no available action is
creditable is telling you about the standard.

## The problem

Naomi Feldstein is a partner at a firm whose largest client is a residential landlord.

She has spent four months organising an evening in her flat for a tenants' union that is
fighting eviction proceedings — some of them brought by that client, though not by her. The
evening raises ninety-one thousand pounds. It pays for two staff solicitors for a year.

A journalist she invited writes it up. The piece is very good. It notices that she moved a
photograph before the guests arrived, that she asked the union's organiser three times
whether he was comfortable, that the caterers were the same firm the landlord uses for its
Christmas party, and that she said the word "displacement" nine times. It quotes no part of
the union's case. It runs with a photograph of her laughing beside the organiser, and the
caption is not kind.

Two things happen. Her firm's managing partner asks her, mildly, whether she has thought
about how this looks to the client. And the union's organiser calls to say the piece has
been shared four thousand times and their donation page has taken in nineteen thousand
pounds from strangers since Tuesday.

She has to decide whether there will be another evening, and the union has to decide whether
to ask her for one.

## The questions

**1. The fundraiser.** Ninety thousand raised; also a photograph of the host beside the
movement's spokesman.

- The money is the money. The giver's motive is not a property of it.
- The photograph is the transaction. She bought standing; they supplied it.
- Both, and that is a normal exchange rather than a scandal.
- Ask the people the fund is for. Taste is a complaint the comfortable can afford.

**2. The write-up.** Brilliant on the canapés, silent on every claim the movement makes.

- That is the piece worth writing. The gap is the information.
- An assassination dressed as reporting. Furniture is not a refutation.
- The journalist is playing the same game from the other side.
- Publish it, and publish the movement's programme beside it.

**3. The other dinner.** A manufacturer funds a campaign against a safety rule his own
plants would fall under, on grounds of liberty.

- Identical case; write it identically. A tool that points one way is not a tool.
- Not identical — his interest and his stated position at least match.
- Worse by a wide margin. One spends status; the other keeps a hazard in place.
- Neither dinner is the story. Both are anecdotes standing in for the argument.

**4. Afterwards.** She is humiliated and is wondering whether to hold the next one.

- Hold it. Withdrawing confirms the applause was the point.
- Hold it privately — the cause keeps the money, she loses the photograph.
- Stop, and give quietly to something nearer to her.
- Her business, nobody else's. She owes no further performance.

## Reading your answer

**The Money Is the Money.** You judge by what moved, which keeps you clear of a debate that
is often a way of avoiding the subject, and makes you hard to shame. The price is that you
have no account of why these scenes disgust people — and a movement funded by those who need
to be seen funding it will be steered by what can be seen.

**What the Evening Makes of You.** You watch what the act does to the actor. Wolfe is with
you and so is Orwell. But the reading is unfalsifiable on demand: any generosity can be
recast as a status move, and once you have that move you never have to look at the cause.

**The Same Tool Both Ways.** You would run the manufacturer's dinner in the same column as
the drawing room, and that symmetry is what the genre most lacks. It costs you force:
applied evenly, the critique gives equal weight to a vanity and an injury.

**Ask Who It Was For.** You look past the hosts to the beneficiaries, which is the
correction the essay never makes. Its weakness is that beneficiaries are not one voice, and
can be invoked by anyone claiming to speak for them.

**Everyone Is Playing.** You see the status game on all sides, journalist included, and
refuse to grant anyone the neutral chair. Bourdieu and Lasch back you from opposite
politics. The difficulty is that the observation applies to itself, leaving you no ground
from which to say the safety rule should stand.

**Nobody Owes a Performance.** You return the decision to the person who was humiliated and
refuse the audience its say. That defends a self against a crowd. It does not scale: the
money still has to be raised in public by somebody.

## Sources

- Tom Wolfe, *Radical Chic & Mau-Mauing the Flak Catchers* (Farrar, Straus and Giroux,
  1970) — the essay, first published in *New York* magazine in June 1970.
- Thorstein Veblen, *The Theory of the Leisure Class* (Macmillan, 1899) — conspicuous
  consumption, the structure Wolfe applies to politics.
- Pierre Bourdieu, *Distinction* (1979) — affiliation and taste as convertible forms of
  capital, described without moral heat.
- Christopher Lasch, *The Revolt of the Elites and the Betrayal of Democracy* (W. W. Norton,
  1995) — the critic's own bid for standing.
- George Orwell, *The Road to Wigan Pier* (Victor Gollancz, 1937) — Part II, on middle-class
  socialists and actual workers.
- Dwight Macdonald, "Parajournalism, or Tom Wolfe and His Magic Writing Machine" (*The New
  York Review of Books*, 1965) — the standing objection to Wolfe's method, written five
  years before the party.
