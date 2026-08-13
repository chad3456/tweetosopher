---
id: cynic-parrhesia
title: Cynic Parrhesia
category: principle
tradition: cynicism
philosophers:
  - Diogenes of Sinope
era: "c. 350 BCE"
tags: [honesty, courage, convention, speech, shamelessness]
sources:
  - author: Diogenes Laertius
    title: "Lives of the Eminent Philosophers, Book VI"
    published: "3rd century CE; trans. Pamela Mensch, ed. James Miller, Oxford University Press"
    year: 2018
  - author: Michel Foucault
    title: Fearless Speech
    published: "ed. Joseph Pearson, Semiotext(e)"
    year: 2001
  - author: Michel Foucault
    title: "The Courage of Truth: Lectures at the Collège de France 1983–1984"
    published: "trans. Graham Burchell, Palgrave Macmillan"
    year: 2011
  - author: R. Bracht Branham and Marie-Odile Goulet-Cazé (eds)
    title: "The Cynics: The Cynic Movement in Antiquity and Its Legacy"
    published: University of California Press
    year: 1996
  - author: Donald R. Dudley
    title: "A History of Cynicism: From Diogenes to the 6th Century A.D."
    published: Methuen
    year: 1937
questions:
  - id: q1
    prompt: >-
      Your closest friend is about to remortgage her house for a business you are
      confident will fail. She has not asked what you think. She has asked you to
      celebrate with her on Friday.
    options:
      - id: a
        label: >-
          Say it, plainly, before Friday. Withholding it would be choosing your own
          comfort over her house and calling that tact.
        scores: { virtue: 1.0, certainty: 0.6, affect: -0.3 }
      - id: b
        label: >-
          Say it only if you think she can still hear it. If the decision is already
          made, candour is just you offloading discomfort onto her.
        scores: { consequentialist: 0.9, care: 0.4, affect: -0.4 }
      - id: c
        label: >-
          She did not ask. Being her friend means being on her side in this, and there
          is a version of honesty that is really a bid for authority over her life.
        scores: { care: 0.9, scope: -0.5, authority: -0.3 }
      - id: d
        label: >-
          Ask permission first — "do you want my read on this?" — and abide by the
          answer. Unrequested truth is a thing done to someone.
        scores: { contractarian: 0.8, care: 0.4, authority: -0.4 }
  - id: q2
    prompt: >-
      In a large meeting, the person who decides your promotion states as fact something
      you know to be false and consequential. Six other people in the room also know. All
      six are looking at their laptops.
    options:
      - id: a
        label: >-
          Correct it out loud, now, in front of everyone. The cost to you is exactly
          what makes it worth anything.
        scores: { virtue: 1.0, authority: 0.9, certainty: 0.5 }
      - id: b
        label: >-
          Correct it afterwards, privately, where he can climb down without losing the
          room. What matters is that the decision comes out right.
        scores: { consequentialist: 1.0, authority: -0.3, affect: -0.5 }
      - id: c
        label: >-
          Say nothing. You have colleagues who depend on your judgement being trusted
          next year, and you spend that credit once.
        scores: { consequentialist: 0.6, care: 0.6, egoist: 0.4 }
      - id: d
        label: >-
          Meetings have rules, and you agreed to them by being in the room. Use the
          channel that exists rather than one that humiliates him.
        scores: { contractarian: 0.9, authority: -0.6, certainty: 0.3 }
  - id: q3
    prompt: >-
      Diogenes ate in the marketplace, which Athenians found indecent, and answered that
      if it is not shameful to eat, it is not shameful to eat in the marketplace. A
      colleague of yours behaves this way habitually: no small talk, no softening, every
      convention treated as a lie to be exposed.
    options:
      - id: a
        label: >-
          He is doing something real. Most manners are the mechanism by which people
          agree not to say what everyone can see.
        scores: { virtue: 0.9, relativist: 0.3, authority: 0.8 }
      - id: b
        label: >-
          Manners are how strangers cooperate without trusting each other. Tearing them
          up costs everyone and buys him a reputation.
        scores: { contractarian: 1.0, certainty: 0.4, authority: -0.5 }
      - id: c
        label: >-
          Watch what it does. If the team says more true things because of him, he is
          an asset; if they say fewer, he is a liability wearing a virtue.
        scores: { consequentialist: 1.0, certainty: -0.4 }
      - id: d
        label: >-
          It reads as courage and functions as cruelty. The people it lands hardest on
          are the ones with least room to answer back.
        scores: { care: 1.0, scope: 0.4, affect: 0.5 }
  - id: q4
    prompt: >-
      Alexander stands over Diogenes in the sun and offers him anything he wants;
      Diogenes asks him to move out of the light. You have the equivalent: a patron who
      can make your career, and who is wrong about something that matters to you.
    options:
      - id: a
        label: >-
          Tell him. A truth you only say to people who cannot hurt you is not something
          you believe, it is something you can afford.
        scores: { virtue: 1.0, authority: 1.0, certainty: 0.6 }
      - id: b
        label: >-
          Keep the patronage and use it. Influence you actually have beats candour you
          performed once on the way out.
        scores: { consequentialist: 0.9, egoist: 0.4, authority: -0.5 }
      - id: c
        label: >-
          You have people whose livelihoods run through your position. Spending it on
          your own integrity is spending something that is not only yours.
        scores: { care: 0.9, consequentialist: 0.4, scope: -0.5 }
      - id: d
        label: >-
          There are terms to this relationship and he has not broken them. Frankness he
          did not invite is not courage, it is a unilateral change of the deal.
        scores: { contractarian: 0.9, authority: -0.4, certainty: 0.3 }
outcomes:
  - id: the-practice
    dominant: virtue
    label: The Practice of Frankness
    text: >-
      You treat truth-telling as something you do rather than something you calculate,
      and you take the risk it carries as the proof that it is real. On Foucault's
      reading this is exactly the Cynic's claim: parrhesia is not information transfer
      but a way of binding your life to what you say, which is why it has to cost. What
      it commits you to is saying the unwelcome thing on the days when nothing good will
      come of it — and to a hard question about the difference between courage and
      appetite, since the person who most enjoys being the one who says it is rarely the
      best judge of whether it needed saying.
    base_rate: null
  - id: what-it-does
    dominant: consequentialist
    label: Truth When It Lands
    text: >-
      Speech is an act with effects, and you assess it that way: the point of saying the
      true thing is that something changes, and if nothing changes you have spent a
      relationship for a feeling. This makes you effective and hard to bait. Its cost is
      that it hands you a permanent, flattering excuse — "they were not ready to hear it"
      is available every single time — and a practice of only speaking when it works
      tends over years to become a practice of not speaking.
    base_rate: null
  - id: the-person-in-front
    dominant: care
    label: The Person in Front of You
    text: >-
      You measure candour by what it does to someone, not by what it proves about you,
      and you notice that unrequested truth-telling lands hardest on whoever has least
      room to answer back. That is a real observation about how frankness is distributed
      in practice. The cost is that you have adopted the position most easily confused
      with cowardice, including by yourself, and you will need some way of telling apart
      the silence that protects someone from the silence that protects you.
    base_rate: null
  - id: the-terms
    dominant: contractarian
    label: The Terms of Speech
    text: >-
      For you, speech happens inside arrangements people are entitled to rely on:
      meetings have channels, friendships have invitations, and frankness that arrives
      outside them is a unilateral rewriting of the terms. This explains a great deal
      that pure candour cannot — why the same sentence is fine in one room and an assault
      in another. Its exposure is the case the Cynics were built for: when the
      arrangements themselves are the thing keeping the falsehood in place, working
      through the proper channel is how nothing happens.
    base_rate: null
---

## What it means

*Parrhesia* is Greek for saying everything — frankness, free speech, telling it straight.
The word is older than the Cynics and belonged first to Athenian democratic politics, where
it named the citizen's right to speak in the assembly. What Diogenes of Sinope and the
Cynics after him did was take it out of the assembly and make it a way of life.

Almost everything we have about Diogenes comes through anecdote, most of it collected
centuries later by Diogenes Laertius in Book VI of the *Lives of the Eminent Philosophers*,
and much of it is probably invention that accreted around a real figure. The stories are
consistent in shape. He lived in a storage jar. He carried a lamp in daylight, saying he
was looking for a human being. Told that the people of Sinope had sentenced him to exile,
he said he had sentenced them to stay at home. Asked by Alexander the Great, standing over
him, what he wanted, he asked him to stand out of the sun. Plato, on one account, defined
man as a featherless biped, and Diogenes produced a plucked chicken.

What holds the anecdotes together is a doctrine. The Cynics held that most of what people
suffer from is *nomos* — custom, convention, the arbitrary rules a society treats as
nature — as against *physis*, what a human being actually is and actually needs. Shame is
the enforcement mechanism of nomos, so the Cynic practices *anaideia*, shamelessness: doing
in public what convention says must be hidden, precisely to demonstrate that the hiding was
never about the act. Eating in the marketplace was indecent in Athens; Diogenes ate there,
and asked what could possibly be shameful about eating.

Parrhesia is the speech that goes with that life. Michel Foucault, in the lectures published
as *Fearless Speech* and *The Courage of Truth*, argued that the Cynic version has four
features that distinguish it from ordinary honesty: the speaker says what they actually
believe, they say it to someone with power over them, they accept a real risk in saying it,
and they do it out of duty rather than advantage. Foucault's word for the last requirement
is important — parrhesia on this account is not primarily about transmitting information.
It is about staking your life on your speech, so that the truth appears in the world in the
form of a person who will bear the cost of it.

## What it suggests

Take this seriously and the interesting question about honesty stops being *is it true* and
becomes *what did it cost you*. Truth you say to people who cannot hurt you is, on the Cynic
account, not yet a belief. It is a preference. The test of whether you hold a view is
whether you will say it upward.

That has consequences that are easy to admire and harder to live with. It means the
whistleblower is the paradigm case of an honest person, not an unusually reckless one. It
means the well-timed private word — the one that lets the powerful person climb down without
losing face — is at best a lesser thing and at worst a way of buying influence with your
silence in public. And it means that the ordinary machinery of professional life, which
runs almost entirely on people not saying the obvious thing in the room where it would land,
is a machine for producing dishonest people who feel fine.

There are two serious objections. The first is that shamelessness is not a reliable route to
truth. Conventions do hide things, but they also hold things together: manners are, among
other things, the technology by which strangers cooperate without having to trust each
other, and the person who treats every convention as a lie will destroy a great deal that
was load-bearing in order to expose a little that was not. The Cynics have no account of the
difference, because their diagnosis puts all of nomos on one side.

The second objection is about the speaker. Parrhesia is unusually easy to counterfeit, and
the counterfeit is more common than the real thing. Anyone can produce the *form* of
fearless truth-telling — the interruption, the refusal of pleasantry, the announcement that
one is only being honest — while carefully aiming it at targets who cannot retaliate. That
is a description of a great deal of modern public speech. Since the Cynic account locates
the value in the risk rather than the content, it has a hard time distinguishing courage
from cruelty performed downward, and its most famous practitioner is remembered as much for
insulting people as for being right.

## The problem

Nadia is four months into running the data team when she finds the error.

The department's flagship report — the one the minister has cited twice, the one that
justified closing eleven sites — double-counts a category of case. It is not fraud. It is a
join on the wrong key, made three years ago by someone who has since left, and it inflates
the headline figure by something between eighteen and thirty per cent depending on how you
handle the ambiguous rows.

She takes it to Peter, who commissioned the report and who hired her. He looks at it for a
long time and then says: the sites are closed. Reopening this now does not un-close them; it
ends the careers of four people who did nothing wrong, and it hands a talking point to
people who want the whole programme killed, including the parts that work. He tells her he
will have the methodology quietly corrected in next year's edition, which is true, and that
the correction will be in an annex nobody reads, which is also true.

Thursday there is an all-staff briefing. The minister's adviser will be there. Peter will
present the figure. Nadia will be in the second row.

She can raise her hand. She can email the permanent secretary. She can accept the annex and
keep a job in which she will be able to prevent the next one of these. She has noticed that
she wants to raise her hand very badly, and she is not sure whether that is because it is
right or because she has imagined the room going quiet.

## The questions

**1. The remortgage.** Your closest friend is about to remortgage her house for a business
you think will fail. She has not asked your opinion.

- Say it plainly, before it is done. Silence here is your comfort dressed as tact.
- Say it only if she can still hear it. Otherwise candour is offloading your discomfort.
- She did not ask. There is a version of honesty that is a bid for authority over her life.
- Ask whether she wants your read, and abide by the answer.

**2. The meeting.** The person who decides your promotion states something false and
consequential. Six others know. All six are looking at their laptops.

- Correct it now, out loud. The cost to you is what makes it worth anything.
- Correct it privately afterwards, so he can climb down. What matters is the decision.
- Say nothing. You spend that credit once, and you have people who need you trusted.
- Use the channel that exists rather than one that humiliates him.

**3. The marketplace.** A colleague treats every convention as a lie to be exposed: no
small talk, no softening, nothing left unsaid.

- He is doing something real. Manners are how people agree not to say what everyone sees.
- Manners are how strangers cooperate without trusting each other. He is spending everyone's.
- Watch what it does. If the team says more true things, he is an asset.
- It reads as courage and functions as cruelty, hardest on those with least room to reply.

**4. Alexander in the sun.** A patron who can make your career is wrong about something
that matters.

- Tell him. A truth you only say to the harmless is something you can afford, not believe.
- Keep the patronage and use it. Influence beats a single performance of candour.
- Others' livelihoods run through your position; spending it is spending what is not only yours.
- He has not broken the terms. Uninvited frankness is a unilateral change of the deal.

## Reading your answer

**The Practice of Frankness.** You hold that saying the true thing is an act, not a
calculation, and that the risk is the proof. This is the Cynic position and it is not a
comfortable one to occupy: it commits you to speaking on the days when nothing will come of
it. The question it leaves you is how to tell courage from appetite, since the person who
most enjoys being the one who says it is the worst-placed judge of whether it needed saying.

**Truth When It Lands.** You treat speech as an act with effects and refuse to spend a
relationship for a feeling. That makes you effective and difficult to provoke. The cost is
the excuse it hands you — "they were not ready to hear it" is available every time — and the
tendency of a policy of speaking only when it works to become, over a decade, a policy of
not speaking.

**The Person in Front of You.** You measure candour by what it does to someone. You are
right that unrequested truth lands hardest on whoever can least answer back. You have also
taken the position most easily confused with cowardice, including by you, and you will need
a way of telling the silence that protects someone from the silence that protects you.

**The Terms of Speech.** You see speech as happening inside arrangements people rely on,
which explains why the same sentence is fine in one room and an assault in another. Your
exposure is the case the Cynics were built for: when the arrangement is itself what keeps
the falsehood standing, the proper channel is the mechanism by which nothing happens.

## Sources

- Diogenes Laertius, *Lives of the Eminent Philosophers*, Book VI (3rd century CE) — the
  main source for Diogenes of Sinope, and a late one; trans. Pamela Mensch, ed. James
  Miller, Oxford University Press, 2018.
- Michel Foucault, *Fearless Speech*, ed. Joseph Pearson, Semiotext(e), 2001 — the
  four-part analysis of parrhesia used above is Foucault's reading, not an ancient text.
- Michel Foucault, *The Courage of Truth: Lectures at the Collège de France 1983–1984*,
  trans. Graham Burchell, Palgrave Macmillan, 2011.
- R. Bracht Branham and Marie-Odile Goulet-Cazé (eds), *The Cynics: The Cynic Movement in
  Antiquity and Its Legacy*, University of California Press, 1996.
- Donald R. Dudley, *A History of Cynicism: From Diogenes to the 6th Century A.D.*,
  Methuen, 1937.
