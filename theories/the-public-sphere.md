---
id: the-public-sphere
title: The Public Sphere
category: theory
tradition: critical-theory
philosophers:
  - Jürgen Habermas
era: "1962"
tags: [democracy, media, publicity, exclusion, deliberation, press]
sources:
  - author: Jürgen Habermas
    title: "The Structural Transformation of the Public Sphere: An Inquiry into a Category of Bourgeois Society"
    published: "Luchterhand; English translation MIT Press, 1989"
    year: 1962
  - author: Jürgen Habermas
    title: "Further Reflections on the Public Sphere"
    published: "in Craig Calhoun, ed., Habermas and the Public Sphere, MIT Press"
    year: 1992
  - author: Jürgen Habermas
    title: "A New Structural Transformation of the Public Sphere and Deliberative Politics"
    published: "Suhrkamp; English translation Polity, 2023"
    year: 2022
  - author: Nancy Fraser
    title: "Rethinking the Public Sphere: A Contribution to the Critique of Actually Existing Democracy"
    published: "Social Text 25/26, 56–80"
    year: 1990
  - author: Joan B. Landes
    title: "Women and the Public Sphere in the Age of the French Revolution"
    published: Cornell University Press
    year: 1988
  - author: Michael Warner
    title: Publics and Counterpublics
    published: Zone Books
    year: 2002
  - author: Michael Schudson
    title: "Was There Ever a Public Sphere? If So, When? Reflections on the American Case"
    published: "in Craig Calhoun, ed., Habermas and the Public Sphere, MIT Press"
    year: 1992
  - author: Walter Lippmann
    title: The Phantom Public
    published: Harcourt, Brace
    year: 1925
  - author: Carole Pateman
    title: "Feminist Critiques of the Public/Private Dichotomy"
    published: "in Public and Private in Social Life, ed. Benn and Gaus, Croom Helm"
    year: 1983
questions:
  - id: q1
    prompt: >-
      The neighbourhood assembly on the harbour redevelopment is open to anyone. In
      practice it is attended by retired homeowners with time to prepare, and the tenants
      most affected work shifts, have children, and have started meeting instead in a
      messaging group of nine hundred people that refuses to send delegates.
    options:
      - id: a
        label: >-
          Keep the assembly open and unweighted. Any rule you write to correct for this
          will be captured by whoever writes it, and an open room is the only thing
          nobody owns.
        scores: { contractarian: 0.8, deontological: 0.5, certainty: 0.4 }
        evidence:
          who: Jürgen Habermas
          work: "The Structural Transformation of the Public Sphere"
          year: 1962
          says: >-
            Habermas identified the bourgeois public sphere's constitutive norm as the
            bracketing of status: participants were to argue as though social rank did not
            apply, so that the only authority in the room was the better argument.
      - id: b
        label: >-
          Restructure it. Evening sittings, paid childcare, interpretation, and speaking
          time that is not first come first served. Formal openness to people who cannot
          come is not openness.
        scores: { care: 0.7, contractarian: 0.6, scope: 0.6 }
        evidence:
          who: Nancy Fraser
          work: Rethinking the Public Sphere
          year: 1990
          says: >-
            Fraser argued that bracketing inequality rather than eliminating it works to
            the advantage of dominant groups, because the protocols of polite public
            reason are themselves marks of the status they claim to set aside.
      - id: c
        label: >-
          Treat the messaging group as a public in its own right, not a failure to attend
          yours. It is where those people are actually working out what they think.
        scores: { relativist: 0.7, care: 0.5, authority: 0.5 }
        evidence:
          who: Michael Warner
          work: Publics and Counterpublics
          year: 2002
          says: >-
            Warner described counterpublics as publics that maintain an awareness of their
            subordinate standing and develop their own idioms, rather than as deficient
            attempts at the dominant public's style of address.
      - id: d
        label: >-
          Stop pretending an assembly decides this. Tidal modelling and traffic load are
          not matters of opinion, and the forum's real function is to consent to what the
          engineers conclude.
        scores: { consequentialist: 0.8, authority: -0.6, certainty: 0.4 }
        evidence:
          who: Walter Lippmann
          work: The Phantom Public
          year: 1925
          says: >-
            Lippmann held that the omnicompetent citizen is a fiction and that the public
            cannot govern the substance of complex questions; its realistic role is to
            side with one faction of insiders against another at moments of crisis.
  - id: q2
    prompt: >-
      A tenant begins describing her landlord's conduct — the boiler, the letters, the man
      who lets himself in. The chair rules it out of scope: this is a planning forum, and
      that is a private dispute for a tribunal.
    options:
      - id: a
        label: >-
          The chair is right. A forum with no boundary becomes a place where everything is
          aired and nothing is decided, and the boundary is what makes it politics rather
          than grievance.
        scores: { virtue: 0.7, deontological: 0.5, affect: -0.4 }
        evidence:
          who: Hannah Arendt
          work: The Human Condition
          year: 1958
          says: >-
            Arendt held that a political realm exists only where people speak about a
            world held in common, and that when the concerns of the household flood the
            public space what remains is administration and complaint rather than action.
      - id: b
        label: >-
          The chair is wrong, and the ruling is the mechanism. Deciding which troubles
          count as public is how whole categories of harm were kept off every agenda for a
          century.
        scores: { care: 0.8, authority: 0.7, relativist: 0.4 }
        evidence:
          who: Carole Pateman
          work: "Feminist Critiques of the Public/Private Dichotomy"
          year: 1983
          says: >-
            Pateman argued that the public–private division is not a neutral boundary but
            a political settlement, and that classifying domestic life as private removed
            from politics precisely the relations in which many people are least free.
      - id: c
        label: >-
          He should have let her finish and then explained on the record why it falls
          outside. A procedure that never justifies itself is what empties rooms.
        scores: { contractarian: 0.8, care: 0.5, affect: 0.4 }
      - id: d
        label: >-
          Chairs discover scope rules when the content is inconvenient. This is about
          Thursday's vote, and everyone in the room understood that.
        scores: { relativist: 0.7, egoist: 0.3, certainty: -0.6 }
  - id: q3
    prompt: >-
      The developer offers to fund the assembly properly: hall hire, childcare, a
      professional facilitator, translation, and a printed summary posted to every
      household. There is no editorial condition, and nothing in writing about content.
    options:
      - id: a
        label: >-
          Refuse. A deliberation funded by an interested party is publicity wearing the
          costume of a public, and everyone will know it even if nothing improper ever
          happens.
        scores: { deontological: 0.8, virtue: 0.5, certainty: 0.5 }
        evidence:
          who: Jürgen Habermas
          work: "The Structural Transformation of the Public Sphere"
          year: 1962
          says: >-
            Habermas traced a shift from a public that reasoned about power to a field of
            managed publicity, in which organised interests stage displays designed to
            secure acclamation rather than to be argued with.
      - id: b
        label: >-
          Accept. The assembly is already captured — by time rather than money — and the
          childcare is the single thing on that list that would put the affected tenants
          in the room.
        scores: { consequentialist: 0.8, care: 0.6, scope: 0.5 }
        evidence:
          who: Nancy Fraser
          work: Rethinking the Public Sphere
          year: 1990
          says: >-
            Fraser's standard is participatory parity, which she argued has material
            preconditions: without the resources that make attendance possible, a formally
            open forum reproduces the inequalities outside it.
      - id: c
        label: >-
          Accept, with a published agreement, an independent chair, and the funder's
          submissions marked as such. Money is not the problem; unaccountable money is.
        scores: { contractarian: 0.9, consequentialist: 0.4, certainty: 0.4 }
        evidence:
          who: Elinor Ostrom
          work: Governing the Commons
          year: 1990
          says: >-
            Ostrom found that durable collective arrangements were those whose rules the
            participants themselves shaped and could monitor, with accessible arenas for
            resolving conflict — the accountability structure mattering more than the
            source of resources.
      - id: d
        label: >-
          It makes no difference. The planning department settled this in March, and the
          assembly is a ritual whose function is to have happened.
        scores: { relativist: 0.8, egoist: 0.3, certainty: -0.6 }
        evidence:
          who: Robert Michels
          work: Political Parties
          year: 1911
          says: >-
            Michels argued that any large organisation, however democratic its charter,
            develops a directing minority whose interest in remaining in charge shapes
            outcomes before the membership is consulted.
  - id: q4
    prompt: >-
      A historian on the panel says the whole framework is nostalgia. The coffee-house
      public was a few thousand propertied men in two cities; it excluded women, servants
      and the poor by design; and invoking it is how every generation condemns its own
      media.
    options:
      - id: a
        label: >-
          She is right, and the myth does work. A golden age nobody can date is a
          convenient standard because nothing present can meet it.
        scores: { relativist: 0.6, consequentialist: 0.4, certainty: -0.7 }
        evidence:
          who: Michael Schudson
          work: "Was There Ever a Public Sphere? If So, When?"
          year: 1992
          says: >-
            Schudson argued that the American record shows little of the rational public
            discussion the model posits, and that the ideal is better understood as a
            recent normative invention projected backwards.
      - id: b
        label: >-
          The description was always normative. What matters is the standard those rooms
          claimed and failed to meet, which is still the standard we use to convict them.
        scores: { deontological: 0.7, contractarian: 0.5, certainty: 0.5 }
        evidence:
          who: Jürgen Habermas
          work: Further Reflections on the Public Sphere
          year: 1992
          says: >-
            Replying to his critics, Habermas conceded much of the historical case,
            including the plebeian and excluded publics he had underweighted, while
            holding that the normative content of the ideal is not disposed of by the
            failures of the society that first articulated it.
      - id: c
        label: >-
          Both of you are arguing about 1750. The present problem is different in kind and
          needs its own description, not a verdict on coffee houses.
        scores: { consequentialist: 0.7, scope: 0.4, certainty: -0.5 }
        evidence:
          who: Jürgen Habermas
          work: "A New Structural Transformation of the Public Sphere and Deliberative Politics"
          year: 2022
          says: >-
            In his late return to the theme Habermas argued that platform media dissolve
            the editorial filtering that once made a common agenda possible, so that the
            characteristic pathology is now fragmentation rather than manufactured
            consensus.
      - id: d
        label: >-
          The exclusions were not a flaw in the achievement, they were its condition.
          Those men could reason calmly because nothing under discussion threatened them.
        scores: { relativist: 0.7, care: 0.5, authority: 0.6 }
        evidence:
          who: Joan B. Landes
          work: "Women and the Public Sphere in the Age of the French Revolution"
          year: 1988
          says: >-
            Landes argued that the republican public sphere was constructed in explicit
            opposition to the salon culture women had led, so that its universality was
            defined against them rather than merely failing to include them.
outcomes:
  - id: the-open-room
    dominant: contractarian
    label: The Open Room
    text: >-
      You care about what could be justified to everyone affected, and your instinct is to
      fix the procedure rather than the outcome: publish the rules, explain the rulings,
      declare the money. This is the closest thing to Habermas's own position and it is
      more robust than its critics allow, because it survives the discovery that your side
      is the one being ruled out of order. Its exposure is that a fair procedure can be
      fair and still be attended entirely by people with Tuesday evenings free.
    base_rate: null
  - id: the-standard-holds
    dominant: deontological
    label: The Standard Holds
    text: >-
      You hold that some things are not for sale or for negotiation regardless of what
      they would buy — a deliberation funded by an interested party is compromised even if
      it is never interfered with. That keeps a public space recognisable as one. The
      price is visible in the childcare: refusing tainted money is a decision made by
      people who could already attend, and it is paid by people who could not.
    base_rate: null
  - id: whose-trouble-counts
    dominant: care
    label: Whose Trouble Counts
    text: >-
      You track who is not in the room and what they were not allowed to say, and you
      treat the scope ruling as the substance rather than the housekeeping. Fraser and
      Pateman are with you, and the historical record is largely on that side. Where it
      strains is that a forum which admits every trouble as public business becomes one in
      which nothing is settled, and the people with the least time are the first to stop
      coming.
    base_rate: null
  - id: what-actually-improves
    dominant: consequentialist
    label: What Actually Improves It
    text: >-
      You ask what will change who is in the room and what gets decided, and you will take
      compromised means to a better distribution of voice. That is the answer with the best
      chance of doing something by next month. It also has no natural stopping point: the
      same reasoning that accepts the childcare accepts the facilitator, the summary, and
      eventually the agenda, and no single step is the one that looks wrong.
    base_rate: null
  - id: publics-not-the-public
    dominant: relativist
    label: Publics, Not The Public
    text: >-
      You doubt there is one forum in which everyone could reason together, and you read
      appeals to it as the standpoint of whoever already sets the terms. The historical
      case for this is strong and the messaging group is genuinely a public. The difficulty
      arrives at the vote: if there is no shared arena, there is no procedure the losing
      side has any reason to accept, and you have described the situation without leaving
      anyone a way out of it.
    base_rate: null
  - id: the-common-world
    dominant: virtue
    label: The Common World
    text: >-
      Your concern is what a public body is for and what taking part in one makes of
      people — a distinction between speaking about a shared world and rehearsing private
      injuries. Arendt is with you, and something real is lost when that distinction goes.
      What it costs you is that the boundary has, historically, been drawn almost exactly
      where the powerful needed it, and your defence of it needs an account of why this
      time is different.
    base_rate: null
---

## What it means

*The Structural Transformation of the Public Sphere* (1962) is Jürgen Habermas's
habilitation thesis, and it is a history with a claim buried in it. The history concerns a
peculiar development in eighteenth-century Britain, France and the German states: the
appearance of coffee houses, salons, table societies, subscription libraries and journals
like the *Tatler* and the *Spectator*, in which private persons came together **as a public**
to reason about matters of general concern.

Habermas is precise about what made this new. These were people who were private in the
sense that mattered: they held no office, and they were not speaking for the crown, the
church or a guild. Yet what they discussed was not private business. They discussed, first,
art and literature — and then, having developed the habit, taxation, war, the conduct of
ministers. Three norms governed the practice, at least as an ideal. Social rank was to be
bracketed, so that arguments were assessed rather than speakers. Nothing was exempt from
discussion, including matters the church or state had previously settled. And the public was
in principle open to anyone who could read and pay for coffee.

That last principle carried the material conditions with it. This public sphere rested on a
market economy that had separated a private realm from the state, on a literate propertied
class with the leisure to argue, and on a press that could survive without a subsidy. The
public that formed there addressed itself to the state and claimed the right to scrutinise
it — which is where the idea of public opinion as something a government must answer to
comes from.

The second half of the book is a decline story, and it is bleaker than the reputation of the
concept suggests. As the state took on economic functions and organised interests took on
public ones, the separation that made the whole thing possible closed up. Habermas called
the result a **refeudalisation** of public life: publicity ceased to mean scrutiny and came
to mean display. Public relations, advertising and party media produce staged appearances
designed to secure acclamation rather than to be argued with, and the public itself is
reconstituted as an audience — its opinion something to be measured and cultivated rather
than formed. In his late book on the digital transformation (2022) he revised the diagnosis:
the pathology now, he argued, is not a manufactured common view but the loss of any common
agenda at all.

## What it suggests

**A conversation is not a public sphere just because it is large.** The concept sets
conditions — that participants address a common concern, that arguments can be contested,
that status is set aside. This gives you a usable and uncomfortable test to apply to any
forum, including the ones you like.

**And a decision can be procedurally open and substantively closed.** If the theory is
right, formal access is nearly worthless without the conditions that make attendance
possible. That is a demanding claim about consultation exercises, and most fail it.

**The strongest objection is that the ideal was never innocent.** Nancy Fraser's *Rethinking
the Public Sphere* (1990) is the essential correction: the bourgeois public was constituted
by exclusions of gender, class and race, and the norm of bracketing status is not neutral,
because the protocols of reasonable public speech are themselves a class inheritance. Asked
to argue calmly and in the right register, some people are being asked to argue and others
to become someone else first. Fraser's second move matters more. Where Habermas treats a
single inclusive public as the ideal and its fragmentation as decline, Fraser argues that
**subaltern counterpublics** — the separate arenas in which excluded groups develop their own
account of their needs — are not a falling away but the actual mechanism by which anything
new ever reaches the general agenda. And she attacks the boundary itself: what counts as a
matter of common concern is settled by contest, and calling something private has kept
enormous categories of harm out of politics entirely.

Joan Landes pressed the point harder still, arguing that the republican public sphere was
built in opposition to the salon culture women had led — so that its universality was
defined against them rather than accidentally failing to include them. And Michael Schudson
asked the flat historical question of whether the coffee-house public ever behaved as
described, concluding that the ideal is largely a recent invention projected backwards.

Habermas conceded a great deal of this in 1992, while insisting on the part that cannot be
conceded: the standard by which those rooms are convicted of exclusion is the standard those
rooms articulated.

## The problem

The harbour redevelopment assembly meets on the first Tuesday of the month in the library,
and Farid has chaired it for two years.

Attendance is thirty to forty. Almost all of them are retired, own their flats, and arrive
with printed submissions. The people who will actually be moved by the scheme — four hundred
households in the two blocks behind the container yard — are largely absent, because the
meeting is at seven and they are at work, or with children, or too tired. They have a
messaging group with nine hundred members, and when Farid asked it to send three delegates,
the reply was that the assembly is a theatre with the ending printed on the programme.

Last month a tenant did come. She started describing her landlord — the boiler that has not
worked since February, the letters, the man who lets himself in — and Farid ruled her out of
order, because it is a planning forum and that is a tribunal matter. She left before the
break. He has thought about it every day since.

This week the developer's community liaison offered to fund the assembly properly: the hall,
childcare, a facilitator, translation into two languages, and a printed summary through every
door in the ward. Nothing in writing about content. Farid can see that this offer would
double attendance and change who attends, and he can see what it would make the assembly
into, and both of these are true at once.

## The questions

**1. The empty seats.** The assembly is open; the affected tenants are elsewhere.

- Keep it open and unweighted. Any correction will be captured too.
- Restructure it: evening sittings, childcare, translation, allocated speaking time.
- Treat the messaging group as a public in its own right.
- Stop pretending an assembly decides this; the modelling is not a matter of opinion.

**2. The ruling.** The tenant's landlord is declared out of scope.

- The chair is right. A boundary is what makes it politics rather than grievance.
- The chair is wrong. Deciding which troubles count as public is the mechanism.
- He should have let her finish and then explained, on the record, why it falls outside.
- Chairs discover scope rules when the content is inconvenient.

**3. The offer.** The developer will fund the hall, childcare, facilitation and a printed
summary.

- Refuse. Funded deliberation is publicity in costume.
- Accept. The childcare is the one thing that would put the tenants in the room.
- Accept with a published agreement, an independent chair and declared submissions.
- It makes no difference; the department decided in March.

**4. The historian.** The coffee-house public was a few thousand propertied men.

- She is right, and the myth is convenient because nothing present can meet it.
- The description was normative. The standard is what convicts them.
- You are both arguing about 1750; the present problem is different in kind.
- The exclusions were the condition of the achievement, not a flaw in it.

## Reading your answer

**The Open Room.** You fix procedure rather than outcomes — publish the rules, explain the
rulings, declare the money. It survives the discovery that your side is the one being ruled
out of order. It does not survive the observation that a fair room can be filled entirely by
people with free evenings.

**The Standard Holds.** Some things are not for sale regardless of what they would buy. That
keeps a public space recognisable. The cost is visible in the childcare: the refusal is made
by people who could already attend.

**Whose Trouble Counts.** You treat the scope ruling as the substance, and the historical
record is largely with you. The strain is that a forum admitting every trouble settles
nothing, and the people with the least time leave first.

**What Actually Improves It.** You will take compromised means to a better distribution of
voice, which is the answer most likely to change something by next month. It has no natural
stopping point, and no single step on the way looks wrong.

**Publics, Not The Public.** You doubt there is one arena where everyone could reason
together, and the messaging group really is a public. The difficulty comes at the vote: with
no shared arena, the losing side has no reason to accept the result.

**The Common World.** You want to preserve the difference between speaking about a shared
world and rehearsing private injury, and something real does go when it goes. You need an
account of why the boundary, drawn where the powerful have always needed it, is drawn
honestly this time.

## Sources

- Jürgen Habermas, *The Structural Transformation of the Public Sphere* (1962; MIT Press
  translation 1989) — the history, the norms, and the refeudalisation thesis.
- Jürgen Habermas, "Further Reflections on the Public Sphere", in Craig Calhoun, ed.,
  *Habermas and the Public Sphere* (MIT Press, 1992) — his reply to the historical critics.
- Jürgen Habermas, *A New Structural Transformation of the Public Sphere and Deliberative
  Politics* (2022) — the digital revision.
- Nancy Fraser, "Rethinking the Public Sphere", *Social Text* 25/26 (1990) — exclusion,
  bracketing, counterpublics, and the contested boundary of common concern.
- Joan B. Landes, *Women and the Public Sphere in the Age of the French Revolution* (Cornell
  University Press, 1988) — the republican public constituted against women.
- Michael Warner, *Publics and Counterpublics* (Zone Books, 2002) — counterpublics on their
  own terms.
- Michael Schudson, "Was There Ever a Public Sphere? If So, When?", in Calhoun, ed. (1992) —
  the historical scepticism.
- Walter Lippmann, *The Phantom Public* (Harcourt, Brace, 1925) — the case that the public
  cannot govern the substance.
- Carole Pateman, "Feminist Critiques of the Public/Private Dichotomy" (1983) — the boundary
  as a political settlement.
