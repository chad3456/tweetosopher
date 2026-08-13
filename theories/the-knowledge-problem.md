---
id: the-knowledge-problem
title: The Knowledge Problem
category: theory
tradition: austrian-school
philosophers:
  - Friedrich Hayek
era: "1945"
tags: [markets, planning, information, prices, decentralisation, expertise]
sources:
  - author: Friedrich Hayek
    title: "The Use of Knowledge in Society"
    published: "American Economic Review 35(4), 519–530"
    year: 1945
  - author: Ludwig von Mises
    title: "Economic Calculation in the Socialist Commonwealth"
    published: "Archiv für Sozialwissenschaften"
    year: 1920
  - author: Oskar Lange
    title: "On the Economic Theory of Socialism"
    published: "Review of Economic Studies"
    year: 1936
  - author: Joseph E. Stiglitz
    title: "Whither Socialism?"
    published: MIT Press
    year: 1994
  - author: Amartya Sen
    title: "Poverty and Famines: An Essay on Entitlement and Deprivation"
    published: Clarendon Press
    year: 1981
  - author: Arthur Cecil Pigou
    title: The Economics of Welfare
    published: Macmillan
    year: 1920
  - author: Elinor Ostrom
    title: "Governing the Commons: The Evolution of Institutions for Collective Action"
    published: Cambridge University Press
    year: 1990
  - author: Ronald Coase
    title: "The Nature of the Firm"
    published: "Economica 4(16), 386–405"
    year: 1937
  - author: Herbert A. Simon
    title: "Organizations and Markets"
    published: "Journal of Economic Perspectives 5(2), 25–44"
    year: 1991
  - author: Karl Polanyi
    title: The Great Transformation
    published: Farrar and Rinehart
    year: 1944
  - author: Michael Polanyi
    title: The Tacit Dimension
    published: Routledge and Kegan Paul
    year: 1966
questions:
  - id: q1
    prompt: >-
      Two weeks after an ice storm, a region needs generators, fuel and bottled water moved
      to where they are most needed. The agency can let prices rise freely, hold prices and
      queue, or allocate centrally from an assessment of need.
    options:
      - id: a
        label: >-
          Let the price move. It carries information nobody at the agency has — who needs it
          most urgently, who can wait, where supply should be sent from.
        scores: { consequentialist: 0.9, contractarian: 0.5, affect: -0.7 }
        evidence:
          who: Friedrich Hayek
          work: "The Use of Knowledge in Society"
          year: 1945
          says: >-
            Hayek argued that a price change tells every participant how much to economise
            without telling them why, so the system transmits the relevant fragment of a
            dispersed body of knowledge that no single mind could hold.
      - id: b
        label: >-
          Hold the price. A price signal registers what people can pay, and after a
          disaster that is a measure of who had savings, not who is cold.
        scores: { care: 0.9, consequentialist: 0.5, scope: 0.6 }
        evidence:
          who: Amartya Sen
          work: "Poverty and Famines: An Essay on Entitlement and Deprivation"
          year: 1981
          says: >-
            Sen showed that famines have occurred without any fall in food availability,
            because what collapsed was people's entitlement to buy; functioning markets can
            move food away from the starving, who are not signalling demand.
      - id: c
        label: >-
          Neither. Give the decision to the depot managers and parish committees who already
          know which streets have the elderly on oxygen.
        scores: { contractarian: 0.7, care: 0.6, authority: 0.4 }
        evidence:
          who: Elinor Ostrom
          work: "Governing the Commons"
          year: 1990
          says: >-
            Ostrom documented long-lived local institutions that manage shared resources
            without central direction or private ownership, and argued their advantage lies
            in the local knowledge and monitoring of the people who live with the outcome.
      - id: d
        label: >-
          Allocate centrally from an assessment of need, and accept that it will be clumsy.
          A clumsy allocation that reaches everyone beats an elegant one that does not.
        scores: { deontological: 0.7, care: 0.5, certainty: 0.5 }
  - id: q2
    prompt: >-
      An analyst says the argument is out of date: with real-time inventory data, sensors and
      modern computation, the planner now has what Hayek said no planner could have.
    options:
      - id: a
        label: >-
          The claim was never about arithmetic. The knowledge in question is unarticulated —
          the shift manager's sense that the third valve sticks in cold weather — and it does
          not exist in a form that can be uploaded.
        scores: { consequentialist: 0.7, certainty: 0.6, affect: -0.4 }
        evidence:
          who: Michael Polanyi
          work: The Tacit Dimension
          year: 1966
          says: >-
            Polanyi's thesis was that we know more than we can tell: skilled practice rests
            on knowledge that cannot be fully stated, and which is therefore lost in any
            attempt to codify it for transmission upward.
      - id: b
        label: >-
          Partly right, and it was always partly a computation claim. Where measurement has
          got good — logistics, grids, freight — planning inside large organisations works
          very well.
        scores: { consequentialist: 0.9, certainty: -0.6, agency: 0.5 }
        evidence:
          who: Herbert A. Simon
          work: "Organizations and Markets"
          year: 1991
          says: >-
            Simon observed that most economic activity in a modern economy is coordinated
            inside organisations by authority and plan rather than through markets, and
            suggested an observer from outside would call ours an organisational economy.
      - id: c
        label: >-
          The deeper problem is not knowledge but incentive: a planner with perfect data
          still faces nobody who loses their own money by being wrong.
        scores: { egoist: 0.4, consequentialist: 0.8, certainty: 0.5 }
        evidence:
          who: Ludwig von Mises
          work: "Economic Calculation in the Socialist Commonwealth"
          year: 1920
          says: >-
            Mises argued that without genuine markets in capital goods there are no prices
            for them, and without those prices a planner cannot compare the value of
            alternative uses of resources at all, however much data is collected.
      - id: d
        label: >-
          Markets have the same informational failure and the argument is symmetric. Firms
          also operate under asymmetric and missing information, which is why they are not
          generally efficient either.
        scores: { consequentialist: 0.8, relativist: 0.5, certainty: -0.7 }
        evidence:
          who: Joseph E. Stiglitz
          work: "Whither Socialism?"
          year: 1994
          says: >-
            Stiglitz argued that once information is imperfect and incomplete — the normal
            case — market equilibria are not in general efficient, so the informational
            critique of planning also undercuts the standard defence of markets.
  - id: q3
    prompt: >-
      A national ministry mandates a single uniform procedure for every school and hospital
      in the country, on grounds of accountability. A large private conglomerate does the
      same across its two hundred branches, on grounds of efficiency.
    options:
      - id: a
        label: >-
          The same objection applies to both. Distance from local conditions is the problem,
          and it does not care whether the headquarters is public or private.
        scores: { consequentialist: 0.8, scope: 0.6, certainty: 0.5 }
        evidence:
          who: Friedrich Hayek
          work: "The Use of Knowledge in Society"
          year: 1945
          says: >-
            Hayek's case rests on knowledge of particular circumstances of time and place,
            which is why he treated the decisive question as who is permitted to decide
            rather than which institution employs them.
      - id: b
        label: >-
          Not the same. The conglomerate faces competitors and can be left; the ministry
          cannot, and that difference is the whole argument.
        scores: { contractarian: 0.8, egoist: 0.3, authority: 0.5 }
      - id: c
        label: >-
          Both are fine where the transaction costs justify them. Firms exist precisely
          because coordinating by command is sometimes cheaper than coordinating by price,
          and the boundary is an empirical question, not a principle.
        scores: { consequentialist: 0.9, certainty: -0.7, affect: -0.6 }
        evidence:
          who: Ronald Coase
          work: "The Nature of the Firm"
          year: 1937
          says: >-
            Coase explained the firm as an island of planned coordination inside a market,
            arising wherever the cost of using the price mechanism exceeds the cost of
            direction, which makes the extent of planning a matter of costs rather than
            ideology.
      - id: d
        label: >-
          Uniformity is not really about knowledge in either case. It is about who gets
          blamed, and both headquarters are buying protection with other people's outcomes.
        scores: { relativist: 0.7, virtue: 0.6, affect: 0.5 }
  - id: q4
    prompt: >-
      A chemical plant's operations are efficiently priced and coordinated, and its
      discharges make a river downstream unusable for four villages that were never party to
      any transaction.
    options:
      - id: a
        label: >-
          Price the harm and the mechanism works again. This is a missing market, not an
          indictment of markets.
        scores: { consequentialist: 0.9, contractarian: 0.6, affect: -0.7 }
        evidence:
          who: Arthur Cecil Pigou
          work: The Economics of Welfare
          year: 1920
          says: >-
            Pigou identified cases where private and social net product diverge because a
            cost falls on parties outside the transaction, and proposed taxes and bounties
            to bring the private calculation back into line with the social one.
      - id: b
        label: >-
          The villagers had no signal to send and no price to pay with, and calling their
          river a missing market describes the injury in the vocabulary that caused it.
        scores: { care: 0.9, deontological: 0.6, affect: 0.6 }
        evidence:
          who: Karl Polanyi
          work: The Great Transformation
          year: 1944
          says: >-
            Polanyi argued that land, labour and nature are not produced for sale and that
            treating them as commodities subordinates a society to a mechanism that was
            built to allocate goods, with damage the mechanism cannot register.
      - id: c
        label: >-
          Assign the river to the villages and let them bargain or sue. The failure is
          missing property rights, not missing regulation.
        scores: { contractarian: 0.8, consequentialist: 0.5, authority: 0.4 }
        evidence:
          who: Ronald Coase
          work: "The Problem of Social Cost"
          year: 1960
          says: >-
            Coase argued that harmful effects are reciprocal and that, where rights are
            clearly assigned and bargaining is cheap, the parties can reach an efficient
            arrangement themselves regardless of which side initially holds the right.
      - id: d
        label: >-
          Some things are simply not to be done to people, and the argument about which
          mechanism registers it best is a way of not saying so.
        scores: { deontological: 0.9, certainty: 0.7, affect: 0.5 }
outcomes:
  - id: dispersed-knowledge
    dominant: consequentialist
    label: Nobody Has the Whole Picture
    text: >-
      You take seriously that the information needed to run anything complicated is scattered
      across the people doing it, most of it unwritten, and you distrust any arrangement that
      requires it to be gathered in one place first. This is Hayek's real contribution and it
      is not the property of one politics — it convicts a ministry and a head office equally.
      Its exposure is what the mechanism cannot register: a price tells you about people who
      can pay, and a system tuned to that signal will run smoothly past the four villages
      without any warning light coming on.
    base_rate: null
  - id: who-cannot-signal
    dominant: care
    label: Who Cannot Signal
    text: >-
      You look for the people the mechanism cannot hear — the household with no savings after
      the storm, the village downstream — and you treat their absence from the ledger as the
      first fact rather than an externality to be added later. Sen's work is the strongest
      version of this and it is empirical, not sentimental. What it costs you is that the
      alternative you reach for has its own blindness: an allocator deciding who is most in
      need is also working from a picture, and theirs is usually worse.
    base_rate: null
  - id: rights-and-agreement
    dominant: contractarian
    label: Rights, Exit and Agreement
    text: >-
      You resolve these cases by asking who holds which right, who consented, and who can
      leave — which is why the conglomerate and the ministry look different to you, and why
      you would give the river to the villages. It is a workable procedure that produces
      answers. Its limit shows where exit is theoretical: a person who cannot in practice
      move, sue or wait is formally a party to a bargain they had no power to affect, and the
      framework will record that as agreement.
    base_rate: null
  - id: some-things-are-not-done
    dominant: deontological
    label: Some Things Are Not Done
    text: >-
      You hold that certain outcomes are excluded before any calculation begins, and you
      notice that long arguments about mechanism can be a way of never saying so. That is a
      real check on a discourse that can price anything. The cost is that it does not tell
      you how much water to send to which town, and in the storm somebody has to answer that
      question with a number.
    base_rate: null
  - id: what-headquarters-is-buying
    dominant: relativist
    label: What Headquarters Is Buying
    text: >-
      You read the choice of mechanism as a question about who will be blamed, and you are
      often right — uniform procedures are adopted for defensibility at least as often as for
      efficiency. The difficulty is that this reading applies to every party including the
      local committee, and if all institutional design is blame-shifting you have no basis
      for preferring any arrangement to any other.
    base_rate: null
  - id: what-it-makes-of-planners
    dominant: virtue
    label: What It Makes of the People Deciding
    text: >-
      Your attention is on the character of the decision-maker: whether they are curious
      about conditions they cannot see, or comfortable overriding them. That is a genuine
      predictor of how a system behaves under strain, since the same rules run very
      differently under different temperaments. It also decides nothing on its own — humility
      is not an allocation, and the generators still have to go somewhere tonight.
    base_rate: null
---

## What it means

Friedrich Hayek's "The Use of Knowledge in Society" appeared in the *American Economic
Review* in 1945, and its opening move is a redefinition. The economic problem, he says, is
not the one the textbooks pose — how to allocate given resources among known ends, which is
a problem of arithmetic. The real problem is that the data never exist in that form for
anybody. The knowledge of what is scarce, where, how urgently, and what could substitute for
it exists only as fragments held by thousands of separate people, and much of it is not the
scientific kind. It is knowledge of the particular circumstances of time and place: that this
machine runs half-idle, that a ship is arriving early, that a supplier two towns over has
stock.

Two features of that knowledge do the work. It is **dispersed** — no one holds more than a
sliver. And much of it is **tacit**: the shift engineer knows the valve sticks in cold
weather but has never written it down and could not fully explain how he knows. Michael
Polanyi would later put the general point as knowing more than we can tell. A planning
bureau cannot requisition this material because the act of codifying it destroys most of it,
and because a great deal of it is generated only in the course of acting.

Hayek's answer to what does the job instead is the price system. When tin becomes scarce
somewhere, the price rises, and everyone who uses tin economises without knowing whether the
cause was a mine collapse or a new use for it. Only the relevant fragment travels. He called
prices a mechanism for communicating information, and treated the market less as a way of
rewarding effort than as a way of coordinating knowledge nobody possesses in full.

The argument sits alongside, but is not identical to, Ludwig von Mises's earlier claim in
*Economic Calculation in the Socialist Commonwealth* (1920): that without markets in capital
goods there are no prices for them, and so no way to compare alternative uses of resources at
all. Mises's is a problem about calculation; Hayek's is about knowledge and who is in a
position to have it. Oskar Lange's market-socialist reply — that a planning board could set
prices by trial and error, adjusting to shortages and surpluses — is the classic attempt to
answer both, and the argument about whether it works has never quite closed.

## What it suggests

Taken seriously, the argument is about the location of decisions rather than about
ownership. Whoever holds the local knowledge should be allowed to act on it, which means
authority ought to sit as close to the ground as the coordination problem permits. That is a
claim with teeth against a great deal more than socialism: it convicts the ministry that
imposes one procedure on every hospital, the head office that standardises two hundred
branches, the funder who insists on a single metric. Hayek's admirers apply it against the
state with enthusiasm and against large corporations rather less often, which is a fact about
them and not about the argument.

It also implies a particular humility about experts: not that they know nothing, but that
what they know is a different kind of thing from what the man on the loading bay knows, and
that the second kind cannot be aggregated upward without loss.

**The objections are strong and there are three of them.**

*Market failure and externalities.* A price coordinates the parties to a transaction and is
silent about everyone else. Pigou's *Economics of Welfare* (1920) set out the standard case:
where private and social costs diverge — pollution, congestion, depletion — the mechanism
runs smoothly and produces a bad outcome, with no signal that anything has gone wrong. The
system's informational elegance is exactly what makes the omission invisible.

*The symmetry objection.* Joseph Stiglitz's *Whither Socialism?* (1994) turns the argument
around: if information is imperfect and asymmetric, as it always is, then market equilibria
are not generally efficient either. The informational critique does not select for markets;
it undermines the standard case for them at the same time. And Herbert Simon's observation is
awkward for the popular version: most economic activity in a modern economy is coordinated
inside organisations by plan and authority, not through markets, and those organisations are
enormous. Coase had already explained why — direction is cheaper than pricing whenever
transaction costs are high — which makes the extent of planning an empirical question rather
than a matter of principle.

*Power and entitlement.* A price registers willingness to pay backed by ability to pay.
Someone with no money sends no signal at all, which is not a marginal case: Amartya Sen's
*Poverty and Famines* (1981) showed famines occurring without any fall in the food supply,
because markets moved food away from people whose entitlement to buy had collapsed. The
system did precisely what it is designed to do. Karl Polanyi's *The Great Transformation*
(1944) makes the wider version of the charge — that land, labour and nature were never
produced for sale, and that subordinating a society to a mechanism built for goods does
damage the mechanism cannot see.

## The problem

Eleven days after the ice storm, Ingrid Halvorsen has four hundred generators, sixteen fuel
tankers and a warehouse of bottled water, and she has to decide how they move.

Her economist says: release the price cap. Merchants two hundred miles south are sitting on
stock and will not drive it up here at the capped price; let the price rise and the stock
arrives by Thursday, and the households that need a generator most will bid hardest for it.
He is not being cruel. He can show her three regions where the cap held and the shelves
stayed empty for a fortnight.

Her operations director says: hold the cap and queue. In this valley the people who will bid
hardest are the ones with money in an account, and the people freezing hardest are the ones
who lost a fortnight's wages when the sawmill shut. The price will not tell her the
difference between those two groups because it cannot see it.

Her deputy says: neither of you knows this valley. The depot manager in Sørheim has been
running that road for nineteen years and can name the eleven houses with oxygen concentrators
and the two bridges that will not take a tanker. Devolve it, and stop pretending head office
has a picture.

Ingrid has, in front of her, a national dashboard showing real-time inventory at every depot,
which is exactly the thing Hayek said would never exist. It is accurate. It also does not
contain the bridges, and she only knows about the bridges because her deputy grew up there.

## The questions

**1. The storm.** Free the price, hold it and queue, devolve to local depots, or allocate
centrally by assessed need.

- Let the price move; it carries information nobody at the agency has.
- Hold it. A price registers who can pay, not who is cold.
- Devolve. The people who know which streets have oxygen are already there.
- Allocate centrally and accept the clumsiness; clumsy but universal beats elegant but not.

**2. The dashboard.** With sensors and computation, does the planner now have what Hayek said
no planner could have?

- No — the knowledge in question was never in a form that could be uploaded.
- Partly, and it was always partly a computation claim; large organisations plan very well.
- The binding problem is incentive, not information: nobody loses their own money.
- Markets have the same failure; the critique is symmetric and undercuts both.

**3. Headquarters.** A ministry imposes one procedure nationally; a conglomerate does the
same across two hundred branches.

- Same objection to both. Distance from local conditions does not care who owns the building.
- Not the same: one can be left and the other cannot.
- Both fine where transaction costs justify them. It is an empirical boundary.
- Neither is about knowledge. Both are buying protection from blame.

**4. The river.** An efficiently run plant makes a river unusable for four villages who were
party to nothing.

- Price the harm. This is a missing market, not an indictment of markets.
- They had no signal to send. Calling it a missing market speaks in the vocabulary that did it.
- Assign the river to the villages and let them bargain or sue.
- Some things are not to be done to people, and the mechanism argument avoids saying so.

## Reading your answer

**Nobody Has the Whole Picture.** You distrust any arrangement that requires scattered,
largely unwritten knowledge to be gathered centrally first, and you apply that to head
offices as readily as to ministries. That is Hayek's actual argument and it belongs to no
party. Its exposure is what the mechanism cannot register — it will run past the four
villages with no warning light.

**Who Cannot Signal.** You look for the people the system cannot hear and treat their absence
from the ledger as the first fact. Sen's version is empirical, not sentimental. The cost is
that your alternative has its own blindness: an allocator judging need is also working from a
picture, usually a worse one.

**Rights, Exit and Agreement.** You settle these by asking who holds which right and who can
leave, which is why the ministry and the conglomerate look different to you. Workable, and it
produces answers. Its limit is where exit is theoretical — someone who cannot in practice
move or sue gets recorded as having agreed.

**Some Things Are Not Done.** You put certain outcomes outside the calculation and notice
that long arguments about mechanism can be a way of never saying so. A real check on a
discourse that can price anything. It also cannot tell Ingrid how many tankers go north.

**What Headquarters Is Buying.** You read the choice of mechanism as a question about blame,
and you are frequently right. The difficulty is that it applies to the local committee too,
and if every arrangement is blame-shifting you have no reason to prefer any of them.

**What It Makes of the People Deciding.** You watch whether the decision-maker is curious
about conditions they cannot see. That genuinely predicts how a system behaves under strain.
It is not an allocation, and the generators move tonight.

## Sources

- Friedrich Hayek, "The Use of Knowledge in Society" (*American Economic Review*, 1945) — the
  paper itself, twelve pages.
- Ludwig von Mises, "Economic Calculation in the Socialist Commonwealth" (1920) — the earlier
  and different calculation argument.
- Oskar Lange, "On the Economic Theory of Socialism" (*Review of Economic Studies*, 1936) —
  the market-socialist reply.
- Joseph E. Stiglitz, *Whither Socialism?* (MIT Press, 1994) — the informational critique
  turned back on markets.
- Amartya Sen, *Poverty and Famines* (Clarendon Press, 1981) — entitlement collapse and
  famine without shortage.
- Arthur Cecil Pigou, *The Economics of Welfare* (Macmillan, 1920) — divergence of private and
  social cost.
- Ronald Coase, "The Nature of the Firm" (*Economica*, 1937) and "The Problem of Social Cost"
  (*Journal of Law and Economics*, 1960) — why planning exists inside markets, and bargaining
  over harms.
- Herbert A. Simon, "Organizations and Markets" (*Journal of Economic Perspectives*, 1991) —
  how much of the economy is actually coordinated by authority.
- Elinor Ostrom, *Governing the Commons* (Cambridge University Press, 1990) — local
  institutions that are neither market nor state.
- Karl Polanyi, *The Great Transformation* (1944) — the market society as constructed, and
  what it cannot register.
- Michael Polanyi, *The Tacit Dimension* (1966) — knowledge that cannot be told.
