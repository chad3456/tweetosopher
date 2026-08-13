---
id: tyranny-of-the-majority
title: The Tyranny of the Majority
category: theory
tradition: liberalism
philosophers:
  - John Stuart Mill
  - Alexis de Tocqueville
era: "1859"
tags: [democracy, conformity, minorities, opinion, dissent, constitution]
sources:
  - author: Alexis de Tocqueville
    title: "Democracy in America"
    published: "vol. 1, Paris; vol. 2, 1840"
    year: 1835
  - author: John Stuart Mill
    title: On Liberty
    published: "John W. Parker and Son, London"
    year: 1859
  - author: John Stuart Mill
    title: Considerations on Representative Government
    published: "Parker, Son & Bourn, London"
    year: 1861
  - author: James Madison
    title: "Federalist No. 10"
    published: "The New York Packet, 22 November 1787"
    year: 1787
  - author: John Rawls
    title: A Theory of Justice
    published: Harvard University Press
    year: 1971
questions:
  - id: q1
    prompt: >-
      A referendum passes by 71 per cent, removing a long-standing exemption that
      only a small religious minority relied on. Turnout was high, the campaign
      was honest, and nobody was misled. The minority say they have been stripped
      of something; the majority say they voted and won.
    options:
      - id: a
        label: >-
          The vote settles it. A rule that a majority may not change when it is
          large and clear is not democracy with safeguards; it is not democracy.
        scores: { contractarian: 0.7, consequentialist: 0.4, authority: -0.6 }
      - id: b
        label: >-
          It should not have been on the ballot. Some claims are held against
          majorities, and putting them to a vote is already the wrong act.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: c
        label: >-
          Judge it by what it does. If the exemption cost the majority little and
          mattered enormously to the minority, removing it was simply a bad law.
        scores: { consequentialist: 1.0, scope: 0.6 }
      - id: d
        label: >-
          A majority that goes out of its way to take something from a small
          group it does not have to take is telling you what it has become.
        scores: { virtue: 0.9, care: 0.4, affect: 0.5 }
  - id: q2
    prompt: >-
      Tocqueville's worry was less about law than about opinion — that in a
      democracy the majority's view becomes so overwhelming that dissenters fall
      silent without anyone silencing them. At your organisation a view held by
      perhaps a third of staff is never voiced in any meeting, and no rule
      forbids it.
    options:
      - id: a
        label: >-
          That is a real unfreedom. Coercion that operates through the fear of
          being thought badly of is still coercion, and it reaches further than law.
        scores: { deontological: 0.7, virtue: 0.5, authority: 0.6 }
      - id: b
        label: >-
          It is not coercion. Nobody is entitled to an audience that will not
          think less of them, and social consequence is what opinions are for.
        scores: { contractarian: 0.8, consequentialist: 0.3, authority: -0.4 }
      - id: c
        label: >-
          Whether it matters depends on whether the silenced view is any good.
          Some views going quiet is exactly what moral progress looks like.
        scores: { consequentialist: 0.9, relativist: 0.3, certainty: 0.4 }
      - id: d
        label: >-
          What is lost is a capacity, not a policy: a room where nothing is said
          stops being able to find out that it is wrong.
        scores: { virtue: 1.0, consequentialist: 0.4, affect: -0.3 }
  - id: q3
    prompt: >-
      Mill proposed, in Considerations on Representative Government, that the
      better educated be given more than one vote — not to rule, but to stop a
      numerical majority from carrying everything. A constitutional convention
      asks whether some such weighting is defensible.
    options:
      - id: a
        label: >-
          No. Equal political standing is the point of the franchise, and a
          scheme that grades citizens has abandoned it whatever it protects.
        scores: { deontological: 1.0, contractarian: 0.5, certainty: 0.7 }
      - id: b
        label: >-
          No, but the worry is legitimate. Answer it with entrenched rights,
          courts and supermajorities rather than by weighting the voters.
        scores: { contractarian: 1.0, consequentialist: 0.4 }
      - id: c
        label: >-
          Defensible in principle. If the object of voting is good government,
          then who decides is an instrumental question like any other.
        scores: { consequentialist: 0.9, authority: -0.5, egoist: 0.3 }
      - id: d
        label: >-
          The proposal exposes the impulse behind the whole worry: fear of the
          many, held by people confident they are among the few.
        scores: { relativist: 0.8, virtue: 0.4, affect: 0.5 }
  - id: q4
    prompt: >-
      A judge can strike down a law that two thirds of the country supports,
      because it violates a constitutional guarantee written by people long dead.
      Critics call this rule by unelected officials; defenders call it the only
      thing standing between a minority and a vote.
    options:
      - id: a
        label: >-
          The court should strike it. Rights that a majority can vote away were
          never rights, only permissions.
        scores: { deontological: 1.0, authority: 0.5 }
      - id: b
        label: >-
          The court should defer. Nine appointees overriding two thirds of a
          country is a worse standing danger than the law they are blocking.
        scores: { contractarian: 0.8, consequentialist: 0.4, authority: -0.7 }
      - id: c
        label: >-
          Strike it or not depending on the damage. Courts are one institution
          among several and the question is which produces fewer disasters.
        scores: { consequentialist: 1.0, certainty: -0.5 }
      - id: d
        label: >-
          Both sides are arguing about who should hold a power neither can be
          trusted with; the real protection is a population that would not pass
          the law.
        scores: { virtue: 0.9, care: 0.3, affect: 0.4 }
outcomes:
  - id: the-entrenched
    dominant: deontological
    label: Held Against the Vote
    text: >-
      You think certain claims are simply not up for decision — that a right a
      majority can remove was a permission all along, and that putting it on a
      ballot is already the wrong act. This is the position that best explains
      why a fair, honest, high-turnout vote can still produce something illegitimate.
      What it owes is an account of who fixes the list and how it changes. Every
      entrenched settlement was written by particular people at a particular
      moment, and "not up for decision" is a claim that has protected some very
      bad arrangements as effectively as good ones.
    base_rate: null
  - id: the-institutions
    dominant: contractarian
    label: Terms Before Votes
    text: >-
      You look for the arrangement people could accept in advance without knowing
      whether they would end up in the majority or the minority — supermajorities,
      entrenched clauses, dispersed powers, courts. This is the mainstream
      constitutional answer and it has the advantage of not requiring anyone to
      be trusted. Its exposure is that institutions are made of people: Madison's
      machinery was designed by men who held slaves, and a structure that
      generates legitimacy from agreement inherits whoever was and was not at the
      table when the terms were set.
    base_rate: null
  - id: the-damage
    dominant: consequentialist
    label: Judge It By What It Does
    text: >-
      You will not treat the procedure as decisive in either direction. A vote is
      good when it produces good government and bad when it does not, and the
      same goes for a court. That keeps you free of the constitutional
      fetishism on both sides, and it lets you say the obvious thing about the
      referendum: an exemption that cost the majority nothing and meant
      everything to the minority was worth keeping. What you lack is a stopping
      point. If procedures have only instrumental value, then anyone confident
      enough about outcomes has a licence to set them aside, and confidence is
      the one resource majorities never run short of.
    base_rate: null
  - id: the-character-of-a-people
    dominant: virtue
    label: What a Majority Becomes
    text: >-
      Your attention is on the majority itself rather than the mechanism — on
      what it says about a people that they voted this way when they did not have
      to, and on the room where a third of the staff have learned not to speak.
      Tocqueville's own worry was closer to this than to any question about
      constitutional design; he thought democratic peoples would come to fear
      standing apart more than they feared being governed. The objection is that
      character is not enforceable. When the vote is next week, "be a people who
      would not do this" is a diagnosis and not yet a defence.
    base_rate: null
  - id: the-fear-of-the-many
    dominant: relativist
    label: Whose Tyranny, Whose Minority
    text: >-
      You notice who has historically raised this alarm and on whose behalf, and
      you decline to treat "tyranny of the majority" as a neutral description. It
      is a real observation: the phrase has been deployed at least as often to
      protect established property and privilege as to protect the vulnerable,
      and Mill's plural voting shows the impulse undisguised. What it costs is
      the case you may one day need. If the concept is only ever a rhetorical
      position, it is unavailable when a majority does come for a minority you
      care about.
    base_rate: null
---

## What it means

The phrase is Tocqueville's. In *De la démocratie en Amérique* (volume 1, 1835) he
devotes a chapter to "the omnipotence of the majority" and its consequences, and his
worry is not the one a modern reader expects. He is not chiefly afraid that fifty-one per
cent will pass cruel laws against forty-nine. He is afraid of what happens to thought.

"I know of no country in which there is so little independence of mind and real freedom of
discussion as in America," he writes — precisely because the majority's opinion carries
such overwhelming moral authority that dissent becomes not dangerous but pointless. Under
an absolute monarch, the tyrant strikes the body and the soul escapes. Under democratic
opinion, the dissenter is left free and simply ceases to be listened to; and so, in time,
ceases to speak. Tocqueville thought this a more complete form of subjection because it
requires no enforcement.

Mill takes the phrase directly from him — he had reviewed *Democracy in America*
enthusiastically — and puts it in the first chapter of *On Liberty* (1859) with a
sharpening. Society, Mill says, "practises a social tyranny more formidable than many
kinds of political oppression, since, though not usually upheld by such extreme penalties,
it leaves fewer means of escape, penetrating much more deeply into the details of life,
and enslaving the soul itself." Protection against the magistrate is therefore not enough.
There must also be protection "against the tyranny of the prevailing opinion and feeling".

Two clarifications matter. First, "tyranny of the majority" names two different problems
that are often run together: majorities passing laws that oppress minorities, and
majorities producing a climate in which minorities silence themselves. Tocqueville was
more interested in the second, Madison in *Federalist No. 10* (1787) in the first.
Second, neither Tocqueville nor Mill concludes against democracy. Tocqueville thought it
inevitable and largely just; Mill spent his career arguing for extending the franchise.
The claim is that majority rule requires something in addition to itself, not that it
should be replaced.

## What it suggests

If the diagnosis is right, then the legitimacy of a decision is not exhausted by the
count. A vote can be free, informed, honest and high-turnout, and still produce something
a democrat should refuse — and that thought is the seed of nearly every constitutional
device in use: entrenched rights, judicial review, supermajority requirements, federalism,
bicameralism, and the deliberate slowness that frustrates every reforming government.
Madison's version of the argument produced a machine designed so that no faction could
easily get its way, on the theory that ambition must be made to counteract ambition.

It also suggests something less institutional and, on Tocqueville's own account, more
important: that the health of a free society depends on the willingness of individuals to
be disliked. Mill's chapter on liberty of thought is not really a legal argument. It is a
claim about what a society loses when a view stops being contested — that even a true
opinion held without challenge becomes a dead dogma rather than a living conviction.

The objections are worth taking seriously, because this concept is unusually easy to abuse.

The first is that the phrase is very often a complaint by the powerful. Whenever a
majority acts against an established interest, that interest can describe itself as a
persecuted minority, and the vocabulary of tyranny is available at no cost. Mill's own
proposal in *Considerations on Representative Government* (1861) — that graduates and
professionals should have additional votes — shows how quickly the worry about majorities
turns into a scheme for weighting the franchise toward people like the author.

The second is that "self-silencing" is very hard to distinguish from ordinary social
consequence. Every society has views that are not said out loud, and some of them are not
said because they were examined and found wanting. If a view falls silent because holding
it now costs reputation, that may be conformity, or it may be moral progress that has
reached the stage of being taken for granted. Nothing in the concept tells you which case
you are in, and both sides of any given argument will insist they are the silenced one.

The third comes from the other direction. Rawls, in *A Theory of Justice* (1971), can be
read as arguing that the whole framing is second-best: if the terms of association were
chosen fairly to begin with, majorities would not be in a position to oppress, and the
elaborate machinery for restraining them is a repair for an unjust starting point rather
than a permanent feature of a well-ordered society.

## The problem

The council of a town of nine thousand has to decide about the reservoir.

For sixty years, a hamlet of about ninety people on the far side of the valley has drawn
water under an old arrangement that predates the town's ownership. It costs the town
almost nothing — the engineer estimates the maintenance at eleven thousand a year — and it
is the only water the hamlet has.

The arrangement has become a symbol. The hamlet is culturally distinct, votes differently,
and has been the subject of a long grievance about a planning decision in the 1990s. A
petition to end the arrangement gathered four thousand signatures. The consultation
produced a 68 per cent majority for ending it. The consultation was fair. Nobody lied.
Turnout was the highest in the council's history.

Amara chairs the committee. She has three things in front of her.

A legal opinion saying the arrangement is revocable at will and the council would win any
challenge.

A letter from the hamlet's oldest resident, which is not really an argument, and which
everyone on the committee has read.

And the honest testimony of her own deputy, who voted with the majority and told her
privately: "It isn't about the water. It has never been about the water."

Amara can uphold the consultation, in which case a lawful, well-run democratic process
will have taken from ninety people the one thing they cannot replace, for a reason nobody
will put in the minutes. Or she can override it, in which case she will have decided that
she knows better than the largest turnout the town has ever produced — and will be right
about that, and will also have made herself the kind of official the town will remember.

## The questions

**1. The referendum.** 71 per cent, high turnout, honest campaign, and an exemption only a
small minority relied on is removed.

- The vote settles it. A rule majorities may not change is not democracy.
- It should not have been on the ballot at all.
- Judge it by what it does — a costless exemption removed is simply a bad law.
- A majority that takes what it did not have to take is telling you what it has become.

**2. The unsaid view.** A third of staff hold a view that is never voiced. No rule forbids
it.

- A real unfreedom. Coercion through fear of disapproval reaches further than law.
- Not coercion. Nobody is entitled to an audience that will not think less of them.
- It depends whether the view is any good; some views going quiet is progress.
- What is lost is a capacity — a room where nothing is said cannot find out it is wrong.

**3. Plural voting.** Mill proposed extra votes for the better educated, to stop a
numerical majority carrying everything.

- No. Equal standing is the point of the franchise.
- No, but the worry is legitimate — answer it with rights and supermajorities.
- Defensible in principle; who decides is an instrumental question.
- The proposal exposes the impulse: fear of the many, held by people sure they are the few.

**4. Judicial review.** A court strikes down a law two thirds of the country supports.

- Strike it. Rights a majority can vote away were permissions.
- Defer. Appointees overriding two thirds is the worse standing danger.
- Depends on the damage; courts are one institution among several.
- Both sides want a power neither can be trusted with; the real protection is a population
  that would not pass the law.

## Reading your answer

**Held Against the Vote.** You take some claims to be outside the reach of counting, which
is the only view that explains cleanly how a fair vote can produce something illegitimate.
Your bill is authorship: someone fixed the list, at a particular moment, with particular
interests, and "not up for decision" has protected bad settlements as reliably as good ones.

**Terms Before Votes.** You want arrangements people could accept before knowing which side
they would land on, and you build them into institutions rather than trusting anyone. This
is the mainstream constitutional answer and it is mainstream for good reasons. What you
inherit is who was at the table: agreement-based legitimacy carries forward every exclusion
present when the terms were set.

**Judge It By What It Does.** You refuse to let procedure decide in either direction, which
keeps you clear of constitutional fetishism and lets you say the obvious thing about a
costless exemption. The difficulty is that you have made procedures instrumental, and
anyone sufficiently confident about outcomes now has a licence to set them aside.
Confidence is the resource majorities have most of.

**What a Majority Becomes.** You are looking at the people rather than the mechanism, which
is where Tocqueville was actually looking. It explains the silent room, and it explains why
the deputy's private remark is the most important document in the file. It is not,
however, enforceable: when the vote is next week, a diagnosis of national character is not
yet a defence.

**Whose Tyranny, Whose Minority.** You notice who raises this alarm and for whom, and you
are right that the phrase has often served property rather than the vulnerable — Mill's
plural voting is your exhibit. What it costs you is availability. If the concept is only
ever rhetoric, it will not be there on the day a majority comes for a minority you would
have wanted to defend.

## Sources

- Alexis de Tocqueville, *Democracy in America*, vol. 1 (1835), part 2, chapter 7, "On the
  omnipotence of the majority in the United States and its effects"; vol. 2 (1840) for the
  effects on thought.
- John Stuart Mill, *On Liberty*, John W. Parker and Son (1859), chapter 1 — social
  tyranny and "the tyranny of the prevailing opinion and feeling".
- John Stuart Mill, *Considerations on Representative Government*, Parker, Son & Bourn
  (1861), chapter 8 — plural voting and proportional representation.
- James Madison, *Federalist No. 10*, The New York Packet, 22 November 1787 — factions,
  and the case for the extended republic.
- John Rawls, *A Theory of Justice*, Harvard University Press (1971) — the priority of a
  fairly chosen basic structure over the machinery for restraining majorities within it.
