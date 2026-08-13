---
id: ideal-speech-situation
title: The Ideal Speech Situation
category: thought-experiment
tradition: critical-theory
philosophers:
  - Jürgen Habermas
era: "1981"
tags: [discourse, consent, deliberation, coercion, argument, legitimacy]
sources:
  - author: Jürgen Habermas
    title: "The Theory of Communicative Action"
    published: "Suhrkamp, two volumes; English translation Beacon Press, 1984 and 1987"
    year: 1981
  - author: Jürgen Habermas
    title: "Moral Consciousness and Communicative Action"
    published: "Suhrkamp; English translation MIT Press, 1990"
    year: 1983
  - author: Karl-Otto Apel
    title: "Towards a Transformation of Philosophy"
    published: "Suhrkamp; English translation Routledge & Kegan Paul, 1980"
    year: 1973
  - author: Iris Marion Young
    title: "Communication and the Other: Beyond Deliberative Democracy"
    published: "in Democracy and Difference, ed. Seyla Benhabib, Princeton University Press"
    year: 1996
  - author: Jean-François Lyotard
    title: "The Postmodern Condition: A Report on Knowledge"
    published: "Minuit; English translation University of Minnesota Press, 1984"
    year: 1979
  - author: Chantal Mouffe
    title: The Democratic Paradox
    published: Verso
    year: 2000
  - author: Michel Foucault
    title: "The Order of Discourse"
    published: "inaugural lecture at the Collège de France; published Gallimard, 1971"
    year: 1971
  - author: Seyla Benhabib
    title: "Situating the Self: Gender, Community and Postmodernism in Contemporary Ethics"
    published: Polity Press
    year: 1992
  - author: James S. Fishkin
    title: "When the People Speak: Deliberative Democracy and Public Consultation"
    published: Oxford University Press
    year: 2009
  - author: Amy Gutmann and Dennis Thompson
    title: Democracy and Disagreement
    published: Harvard University Press
    year: 1996
questions:
  - id: q1
    prompt: >-
      Six minutes into her turn, a resident is still shouting and crying about her son, who
      died last year, and about what she believes the proposed facility will bring onto her
      street. As facilitator you have to decide what to do with the next thirty seconds.
    options:
      - id: a
        label: >-
          Ask her, gently, to put it as a claim the room can examine. A discussion in which
          intensity carries weight is one where the loudest grief decides.
        scores: { deontological: 0.7, contractarian: 0.5, affect: -0.8 }
        evidence:
          who: Jürgen Habermas
          work: The Theory of Communicative Action
          year: 1981
          says: >-
            Habermas held that speech aimed at understanding raises validity claims which
            are redeemable only through reasons, so that what should move the participants
            is the unforced force of the better argument and nothing else.
      - id: b
        label: >-
          Let her finish. Requiring people to translate what happened to them into the
          register of a committee paper is not neutrality; it is a filter with a class and
          a temperament.
        scores: { care: 0.7, relativist: 0.5, affect: 0.6 }
        evidence:
          who: Iris Marion Young
          work: Communication and the Other
          year: 1996
          says: >-
            Young argued that deliberative norms privilege dispassionate, articulate and
            orderly speech, and that greeting, rhetoric and narrative are legitimate modes
            of political communication rather than lapses from one.
      - id: c
        label: >-
          Let her finish, then say plainly to the room that her loss is not evidence about
          the siting question, so that nobody is moved by it without noticing.
        scores: { consequentialist: 0.6, contractarian: 0.5, affect: -0.5 }
      - id: d
        label: >-
          The failure was upstream. A process that puts a bereaved woman in front of
          strangers to have her account assessed has already done something to her.
        scores: { care: 0.9, virtue: 0.5, scope: -0.4 }
        evidence:
          who: Seyla Benhabib
          work: Situating the Self
          year: 1992
          says: >-
            Benhabib argued that discourse ethics needs the standpoint of the concrete
            other — a person with a history, needs and attachments — alongside the
            generalised other, or its universality is bought by abstracting from
            everything that makes a claim intelligible.
  - id: q2
    prompt: >-
      The objectors have hired a professional advocate. His written submission is better
      organised, better evidenced and better argued than anything else in front of the
      assembly, and everyone in the room can feel it working.
    options:
      - id: a
        label: >-
          That is what the better argument looks like. Objecting to being outargued because
          the other side prepared is not a procedural complaint.
        scores: { contractarian: 0.8, deontological: 0.5, certainty: 0.4 }
        evidence:
          who: John Stuart Mill
          work: On Liberty
          year: 1859
          says: >-
            Mill held that a position is only properly held when it has met the strongest
            available statement of its rival, and that hearing an opposing case put at its
            best is a benefit to the hearer rather than an imposition on them.
      - id: b
        label: >-
          Purchased eloquence is power in a suit. Either fund equivalent advocacy for the
          residents or the assembly should discount it, and say so out loud.
        scores: { care: 0.7, contractarian: 0.6, scope: 0.5 }
        evidence:
          who: Jürgen Habermas
          work: "Moral Consciousness and Communicative Action"
          year: 1983
          says: >-
            Habermas's conditions for genuine discourse exclude coercion of every kind,
            including the systematically distorted communication in which asymmetries of
            power operate through the structure of the exchange rather than against it.
      - id: c
        label: >-
          The idea that the room could be uncoerced is what makes this invisible. Better to
          run it as an open contest between adversaries with their interests declared.
        scores: { relativist: 0.7, consequentialist: 0.4, certainty: -0.5 }
        evidence:
          who: Chantal Mouffe
          work: The Democratic Paradox
          year: 2000
          says: >-
            Mouffe argued that a consensus without exclusion is conceptually impossible,
            and proposed an agonistic politics in which opponents are legitimate adversaries
            rather than obstacles to a rational agreement that is never coming.
      - id: d
        label: >-
          There is no speech outside power. The useful question is not how to purify the
          room but who benefits from its being described as neutral.
        scores: { relativist: 0.8, nihilist: 0.3, authority: 0.5 }
        evidence:
          who: Michel Foucault
          work: The Order of Discourse
          year: 1971
          says: >-
            Foucault described the procedures by which discourse is controlled — what may
            be said, on what occasion, and by whom qualified — and treated these as
            constitutive of the discussion rather than as interference with it.
  - id: q3
    prompt: >-
      The terms of reference were written by the health authority. They cover where the
      facility should go and how it should be run, and they exclude the question of whether
      it should be built. A member of the assembly proposes to debate that anyway.
    options:
      - id: a
        label: >-
          Debate it. A discussion in which some questions are ruled unaskable is not a
          discussion, and that condition is not negotiable for the sake of the timetable.
        scores: { deontological: 0.9, authority: 0.8, certainty: 0.6 }
        evidence:
          who: Jürgen Habermas
          work: "Moral Consciousness and Communicative Action"
          year: 1983
          says: >-
            Among the conditions Habermas sets for practical discourse is that every
            competent participant may problematise any assertion, introduce any assertion,
            and express their needs, with no one prevented from doing so by internal or
            external compulsion.
      - id: b
        label: >-
          Keep to the remit. Every real deliberation is bounded, and an assembly that
          reopens everything exhausts itself and hands the decision back to officials by
          default.
        scores: { consequentialist: 0.8, authority: -0.5, certainty: -0.4 }
        evidence:
          who: Amy Gutmann and Dennis Thompson
          work: Democracy and Disagreement
          year: 1996
          says: >-
            Gutmann and Thompson defended deliberation while insisting that it must reach
            provisional closure and economise on the disagreements it reopens, since a
            process that settles nothing cannot claim the authority deliberation is meant
            to produce.
      - id: c
        label: >-
          Continue under the remit, with a formal minute recording that the assembly does
          not accept the boundary and did not choose it.
        scores: { contractarian: 0.8, virtue: 0.5, authority: 0.4 }
      - id: d
        label: >-
          The remit was written by the people who already knew the answer. The honest
          response is to leave the room and organise outside it.
        scores: { relativist: 0.6, consequentialist: 0.5, egoist: 0.4 }
  - id: q4
    prompt: >-
      After three weekends the assembly arrives at something close to agreement. One member
      says this vindicates the method. Another says it shows only that the people who could
      not keep giving up their Saturdays stopped coming.
    options:
      - id: a
        label: >-
          It works well enough. Structured deliberation demonstrably changes what people
          conclude, and an unreachable ideal can still specify a direction of improvement.
        scores: { consequentialist: 0.9, scope: 0.5, certainty: -0.4 }
        evidence:
          who: James S. Fishkin
          work: When the People Speak
          year: 2009
          says: >-
            Fishkin's deliberative polling experiments found that representative samples
            given balanced briefing and moderated small-group discussion shifted their
            considered views substantially and often toward positions they had not held
            before.
      - id: b
        label: >-
          You have the status of the ideal wrong. It is not a target but something you have
          already conceded the moment you argue with anyone at all.
        scores: { deontological: 0.7, contractarian: 0.6, certainty: 0.6 }
        evidence:
          who: Karl-Otto Apel
          work: Towards a Transformation of Philosophy
          year: 1973
          says: >-
            Apel argued that anyone who seriously advances an argument has already presupposed
            the norms of an unlimited communication community, so that denying those norms
            in argument is a performative contradiction.
      - id: c
        label: >-
          The agreement is an artefact of who could keep attending, and consensus is the
          suspect value here. Sustained disagreement is a sign of a healthy process, not a
          failed one.
        scores: { relativist: 0.8, authority: 0.5, certainty: -0.7 }
        evidence:
          who: Jean-François Lyotard
          work: The Postmodern Condition
          year: 1979
          says: >-
            Lyotard treated consensus as an outmoded and suspect value, arguing that
            invention proceeds from dissent and that a procedure requiring all claims to be
            stated in one shared idiom silences those who lack it.
      - id: d
        label: >-
          The agreement is real and it is the point. People sat with neighbours they
          disliked for three weekends and changed their minds, which is rarer than any
          theory about it.
        scores: { virtue: 0.8, care: 0.6, affect: 0.5 }
outcomes:
  - id: the-conditions-hold
    dominant: deontological
    label: The Conditions Are Not Optional
    text: >-
      You treat the requirements of a genuine discussion — that anything may be questioned,
      that nobody is compelled, that only reasons count — as conditions rather than
      aspirations, and you will break a timetable rather than a condition. This is the
      position with the cleanest account of why a rigged consultation is worthless even
      when its outcome is good. What it costs you is almost every actual process, since
      none of them meet the conditions, and a standard that condemns everything gives no
      guidance about which flawed room to sit in.
    base_rate: null
  - id: what-could-be-accepted
    dominant: contractarian
    label: What Everyone Could Accept
    text: >-
      Your test is whether the people bound by an outcome could have accepted the way it was
      reached, which is why you want the boundary minuted, the funding equalised and the
      advocate's status declared. It is the most workable version of the ideal, and it
      converts a philosophical standard into things a facilitator can do on a Saturday. Its
      weakness is that consent to a procedure is easy to manufacture in people who have no
      alternative procedure available.
    base_rate: null
  - id: whoever-is-in-the-room
    dominant: care
    label: Whoever Is In The Room
    text: >-
      You attend to the particular person speaking rather than to the form of their
      contribution, and you notice what the process costs them. Young and Benhabib are with
      you, and the deliberative literature has largely conceded this ground. Where it leaves
      you exposed is that a room in which every account must be received on its own terms
      has no way to tell a true account from a compelling one, and the compelling one usually
      wins.
    base_rate: null
  - id: does-it-improve-judgement
    dominant: consequentialist
    label: Does It Improve the Judgement
    text: >-
      You judge a procedure by what comes out of it — whether people end up better informed
      and closer to something they can live with — and you are willing to bound the agenda
      to get there. That is why deliberative processes exist at all rather than remaining a
      seminar topic. The exposure is that an outcome-tested procedure will drift toward
      whatever produces agreement, and agreement is producible by fatigue.
    base_rate: null
  - id: no-neutral-room
    dominant: relativist
    label: There Is No Neutral Room
    text: >-
      You read the conditions of uncoerced speech as a description that cannot be satisfied
      and a claim that conceals whose idiom is being used, and you would rather have a
      declared contest than a laundered one. The historical evidence for this is
      considerable. The difficulty is the one Apel presses: you made that case by arguing,
      to people you expected to be persuaded by reasons, which is awkward for someone
      denying that such a practice exists.
    base_rate: null
  - id: three-weekends
    dominant: virtue
    label: Three Weekends
    text: >-
      What impresses you is the practice rather than the proof: people sitting with
      neighbours they dislike, listening long enough to be changed, and behaving decently
      while doing it. That is the thing the theory is trying to describe, and you have gone
      straight to it. The risk is that the same qualities make people agreeable — the
      participants most willing to be moved are not always the ones who were right, and
      good manners are compatible with a bad decision.
    base_rate: null
---

## What it means

Habermas's question is the oldest one in political philosophy asked in an unusual way. Not
*what is just*, but: **under what conditions would an agreement about what is just actually
be worth anything?**

His answer, developed across *The Theory of Communicative Action* (1981) and stated as a
principle in *Moral Consciousness and Communicative Action* (1983), is that a norm is valid
only if all those affected by it could accept it in a practical discourse — a discussion
meeting conditions he spells out. Every competent speaker may take part. Anyone may
introduce any assertion, question any assertion, and express their own needs and attitudes.
And no participant may be prevented from doing any of this by coercion, whether external
force or the internal compulsions that make some people unable to say what they think. In
such a discussion the only thing that could move anyone is what Habermas calls the unforced
force of the better argument.

That is the **ideal speech situation**, and the first thing to understand about it is that
Habermas never proposed it as an arrangement to build. It is a counterfactual: a set of
idealisations that, on his account, anyone arguing has *already assumed*. When you offer
someone a reason, you are treating them as capable of assessing it, implying that you would
withdraw if refuted, implying that you are not simply manipulating them. Karl-Otto Apel, who
developed the argument alongside Habermas, put it sharply: to argue that these presuppositions
are illusory is a **performative contradiction**, since you are relying on them in the act of
denying them. Habermas came to dislike his own early phrase precisely because it invited the
reading that he was sketching a utopia.

The payoff is a test with real bite. Ask of any settlement: could this have been agreed to by
everyone it binds, in a discussion where nobody was silenced and nothing was unaskable? Where
the answer is clearly no — because the terms of reference excluded the real question, because
one side could afford professional advocacy, because raising an objection would cost you your
job — the agreement records a distribution of power, not a validity.

## What it suggests

**Legitimacy migrates from outcomes to procedures.** On this view you cannot certify a
decision by inspecting it. You have to know how it was reached and who could speak. That is
the intuition behind consultations, works councils, citizens' assemblies and the entire
apparatus of participation, and it explains the specific fury people feel at a consultation
whose conclusion was written first — an anger the theory takes seriously rather than
treating as sour grapes.

**It makes the agenda the main event.** If any participant may question any assertion, then
the power to declare a question out of scope is the decisive power in the room, and it is
usually exercised quietly by whoever drafted the paperwork.

**The standing objection is that the conditions never obtain and probably could not.** Every
real discussion has time limits, unequal fluency, people who cannot attend and people whose
livelihood depends on the outcome. Habermas's reply — that the ideal is presupposed rather
than achieved — is coherent, and it is also very convenient, since it insulates the standard
from every possible counterexample.

**The sharper objection is about the idiom.** Iris Marion Young argued that the norms of
deliberation are not neutral: calm, orderly, propositional, unemotional speech is a
particular cultural style, and requiring it as the price of admission is an exclusion
performed in the name of inclusion. Lyotard pressed a harder version — that some wrongs
cannot be stated in the available idiom at all, so that a procedure demanding a common
language of argument silences precisely the claims most in need of hearing. And Chantal
Mouffe denies the destination: a consensus that excludes nobody is not difficult but
incoherent, and a politics organised around its pursuit will keep mistaking its own
exclusions for stages on the way.

Seyla Benhabib's response is the one that has travelled furthest inside the tradition:
discourse ethics needs the standpoint of the *concrete* other — a person with a history and
needs — alongside the generalised other it was built on, or its universality is purchased by
abstracting away everything that made a claim comprehensible.

## The problem

Marta is facilitating the third weekend of a regional assembly on where to site a secure
treatment unit for people leaving prison with addictions. Forty-one members, randomly
selected, paid a stipend. Everything about the design is best practice, and she has stopped
believing in it three separate times.

The first was on Saturday morning, when a woman from the Fenwick estate spent six minutes
shouting and weeping about her son, who died last year, and about what she is certain the
unit will bring onto her street. Marta's training says to thank her and invite her to put
the concern in a form the group can weigh. She could see, while deciding, that asking a
woman in that state to be orderly would be experienced as being told she was the wrong sort
of person for this room.

The second was the submission from the objectors, who have hired an advocate. It is
excellent — properly sourced, calmly written, and it takes apart the health authority's
traffic assumptions in four pages. The residents in favour of the unit have a hand-written
letter and a nurse who spoke well but ran out of time.

The third is the terms of reference, which she did not write. They cover siting and
operation. They do not permit the assembly to consider whether the unit should be built,
because that was settled in a commissioning decision eighteen months ago that no one in the
room was consulted about.

By Sunday afternoon the assembly is close to agreement. Marta cannot tell whether she is
watching people reason their way to a shared view, or watching the six most persistent
members outlast everyone else.

## The questions

**1. Six minutes.** A bereaved resident is shouting and crying about the proposal.

- Ask her to put it as a claim the room can examine.
- Let her finish. Demanding the register of a committee paper is a filter, not neutrality.
- Let her finish, then say the loss is not evidence about siting, so nobody is moved without
  noticing.
- The failure was upstream. The process should not have put her there.

**2. The advocate.** The objectors have hired a professional and it shows.

- That is what the better argument looks like.
- Purchased eloquence is power in a suit; fund the other side or discount it.
- The pretence that the room could be uncoerced is what hides this; run it as a declared
  contest.
- There is no speech outside power; ask who benefits from calling it neutral.

**3. The remit.** The question of whether the unit should exist is excluded.

- Debate it anyway. A question that cannot be asked ends the discussion.
- Keep to the remit. Unbounded deliberation hands the decision back to officials.
- Continue, with a minute recording that the assembly did not accept the boundary.
- Leave and organise outside the room.

**4. The agreement.** Near-consensus after three weekends.

- It works well enough; structured deliberation demonstrably changes conclusions.
- The ideal is not a target — you conceded it the moment you argued with anyone.
- The agreement is an artefact of who kept attending, and consensus is the suspect value.
- The agreement is real, and people changing their minds is rarer than any theory about it.

## Reading your answer

**The Conditions Are Not Optional.** You treat unaskable questions and unequal voice as
disqualifying rather than regrettable, which gives you the cleanest account of why a rigged
consultation is worthless even when its result is good. It also disqualifies nearly every
process there is, and offers no guidance about which flawed room to sit in.

**What Everyone Could Accept.** You convert the standard into things a facilitator can
actually do — minute the boundary, equalise the funding, declare the advocate. Consent to a
procedure is easiest to obtain from people who have no other procedure available.

**Whoever Is In The Room.** You attend to the person rather than the form, and the
deliberative literature has largely conceded this ground to you. The exposure is that a room
which receives every account on its own terms has no way to separate true from compelling.

**Does It Improve the Judgement.** You test procedures by their results and will bound the
agenda to get one. That is why these processes exist outside seminars. The drift is toward
whatever produces agreement, and fatigue produces agreement.

**There Is No Neutral Room.** You take the conditions to be unsatisfiable and the appeal to
them to be a claim about whose idiom counts. The evidence is on your side; Apel's objection
is not, and you made your case by arguing.

**Three Weekends.** You value the practice over the proof — people listening long enough to
be changed. The risk is that the participants most willing to be moved are not reliably the
ones who were right.

## Sources

- Jürgen Habermas, *The Theory of Communicative Action*, 2 vols. (1981) — communicative
  rationality and the validity claims raised in speech.
- Jürgen Habermas, *Moral Consciousness and Communicative Action* (1983) — the discourse
  principle and the conditions of practical discourse.
- Karl-Otto Apel, *Towards a Transformation of Philosophy* (1973) — the communication
  community and the performative-contradiction argument.
- Iris Marion Young, "Communication and the Other: Beyond Deliberative Democracy", in
  *Democracy and Difference* (Princeton University Press, 1996) — the critique of the
  deliberative idiom.
- Jean-François Lyotard, *The Postmodern Condition* (1979) — consensus as a suspect value.
- Chantal Mouffe, *The Democratic Paradox* (Verso, 2000) — agonistic pluralism against
  rational consensus.
- Michel Foucault, *The Order of Discourse* (1971) — the procedures that control what may be
  said and by whom.
- Seyla Benhabib, *Situating the Self* (Polity, 1992) — the concrete other, and a friendly
  reconstruction of discourse ethics.
- James S. Fishkin, *When the People Speak* (Oxford University Press, 2009) — the empirical
  case that structured deliberation changes considered opinion.
- Amy Gutmann and Dennis Thompson, *Democracy and Disagreement* (Harvard University Press,
  1996) — deliberation with closure and the economy of moral disagreement.
