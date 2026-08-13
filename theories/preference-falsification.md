---
id: preference-falsification
title: Preference Falsification
category: theory
tradition: political-economy
philosophers:
  - Timur Kuran
era: "1995"
tags: [conformity, revolution, opinion, honesty, social-pressure, institutions]
sources:
  - author: Timur Kuran
    title: "Private Truths, Public Lies: The Social Consequences of Preference Falsification"
    published: Harvard University Press
    year: 1995
  - author: Timur Kuran
    title: "Now Out of Never: The Element of Surprise in the East European Revolution of 1989"
    published: "World Politics 44(1), 7–48"
    year: 1991
  - author: Timur Kuran and Cass R. Sunstein
    title: "Availability Cascades and Risk Regulation"
    published: "Stanford Law Review 51(4), 683–768"
    year: 1999
  - author: Elisabeth Noelle-Neumann
    title: "The Spiral of Silence: Public Opinion — Our Social Skin"
    published: University of Chicago Press
    year: 1984
  - author: Michael Suk-Young Chwe
    title: "Rational Ritual: Culture, Coordination, and Common Knowledge"
    published: Princeton University Press
    year: 2001
  - author: Philip E. Converse
    title: "The Nature of Belief Systems in Mass Publics"
    published: "in Ideology and Discontent, ed. David E. Apter, Free Press"
    year: 1964
  - author: Jon Elster
    title: "Deliberation and Constitution Making"
    published: "in Deliberative Democracy, ed. Jon Elster, Cambridge University Press"
    year: 1998
  - author: Thomas Nagel
    title: "Concealment and Exposure"
    published: "Philosophy & Public Affairs 27(1), 3–30"
    year: 1998
  - author: John Stuart Mill
    title: Considerations on Representative Government
    published: Parker, Son and Bourn
    year: 1861
questions:
  - id: q1
    prompt: >-
      You are secretary of a professional body whose last four general meetings endorsed a
      new membership requirement unanimously, on a show of hands. The anonymous survey you
      commissioned has come back: sixty-one of a hundred respondents oppose it.
    options:
      - id: a
        label: >-
          Publish the whole thing. The entire mechanism runs on each person believing they
          are the only one, and that belief survives exactly as long as nobody says the
          number out loud.
        scores: { consequentialist: 0.9, authority: 0.6, scope: 0.5 }
        evidence:
          who: Timur Kuran
          work: "Private Truths, Public Lies"
          year: 1995
          says: >-
            Kuran's account is that people conceal their views because the reputational
            cost of dissent looks high while support looks universal, and that revealing
            the true distribution can flip large numbers at once because each person's
            threshold for speaking depends on how many others already have.
      - id: b
        label: >-
          Sit on it. An anonymous survey is not a mandate either, and you would be
          replacing one unverifiable claim about what people really think with another.
        scores: { contractarian: 0.5, consequentialist: 0.4, certainty: -0.8 }
        evidence:
          who: Philip E. Converse
          work: The Nature of Belief Systems in Mass Publics
          year: 1964
          says: >-
            Converse found that many survey answers are non-attitudes — responses
            manufactured on the spot with little stability over time — which means a poll
            can report an opinion the respondent does not durably hold.
      - id: c
        label: >-
          Publish it, and resign the secretaryship in the same letter. You are the person
          who wrote "carried unanimously" four times.
        scores: { virtue: 0.9, deontological: 0.5, authority: 0.7 }
        evidence:
          who: Václav Havel
          work: The Power of the Powerless
          year: 1978
          says: >-
            Havel's greengrocer participates in the lie by a small daily act he does not
            believe in, and Havel's point is that the system is held up by exactly these
            acts, so that the remedy begins with the person who has been performing one.
      - id: d
        label: >-
          Take it to the board privately first. The aim is to change the requirement, not
          to detonate an institution that does several other useful things.
        scores: { consequentialist: 0.7, care: 0.5, agency: 0.4 }
  - id: q2
    prompt: >-
      Two colleagues each cite the same theory at you within a week. One says a silent
      majority privately agrees with the traditional position and conforms out of career
      fear. The other says most members privately favour the reform but will not cross the
      senior fellows who control appointments.
    options:
      - id: a
        label: >-
          They may both be right, and that is the problem. A theory that explains every gap
          between what people say and what happens forbids no observation at all.
        scores: { relativist: 0.6, consequentialist: 0.4, certainty: -0.9 }
        evidence:
          who: Karl Popper
          work: Conjectures and Refutations
          year: 1963
          says: >-
            Popper's criterion was that a theory earns its standing by what it rules out;
            an explanation that can absorb any outcome after the fact is confirmed by
            everything and therefore tested by nothing.
      - id: b
        label: >-
          Both assume the hidden view is the real one. What people commit to publicly, over
          years, is not a mask — it is a large part of what makes them who they are.
        scores: { virtue: 0.9, deontological: 0.4, affect: -0.3 }
        evidence:
          who: Aristotle
          work: Nicomachean Ethics
          says: >-
            Aristotle held that character is formed by repeated action rather than
            expressed by it: we become just by doing just things, which implies that a
            long public practice is constitutive of a person and not a covering over
            something truer underneath.
      - id: c
        label: >-
          The question is answerable. Falsification runs toward whoever controls the
          rewards, and in this institution that is not a mystery.
        scores: { consequentialist: 0.8, care: 0.4, scope: 0.5 }
        evidence:
          who: Timur Kuran
          work: "Private Truths, Public Lies"
          year: 1995
          says: >-
            Kuran models public preference as a response to reputational incentives, so
            that the direction of concealment can be inferred from who is in a position to
            impose costs for dissent rather than guessed at.
      - id: d
        label: >-
          Everyone who claims a silent majority is claiming a mandate they cannot produce.
          It is the oldest move there is and both of them know it.
        scores: { relativist: 0.7, egoist: 0.4, certainty: -0.5 }
  - id: q3
    prompt: >-
      The board concedes a re-vote and asks how it should be run. The requirement is
      contentious enough that people's committee seats and referrals plausibly turn on how
      they are seen to vote.
    options:
      - id: a
        label: >-
          Secret ballot. A vote that can be punished is not a vote, and every institution
          that has needed to know what its members think has worked this out.
        scores: { contractarian: 0.9, care: 0.5, authority: 0.4 }
        evidence:
          who: Timur Kuran
          work: "Private Truths, Public Lies"
          year: 1995
          says: >-
            Kuran treats the secrecy of the ballot as one of the few reliable institutional
            correctives, because it removes the reputational payoff that makes
            misrepresentation individually rational in the first place.
      - id: b
        label: >-
          Open vote. A member's vote is a trust exercised over other people, and secrecy
          lets someone do quietly what they would be ashamed to be seen doing.
        scores: { deontological: 0.8, virtue: 0.5, authority: -0.5 }
        evidence:
          who: John Stuart Mill
          work: Considerations on Representative Government
          year: 1861
          says: >-
            Mill argued against the secret ballot on the ground that a vote is a public
            function rather than a private right, and that the voter who cannot be seen is
            released from the duty to justify what he does with it.
      - id: c
        label: >-
          Secret ballot and unattributed written submissions. The vote was never where the
          pressure was applied — it was applied in the discussion beforehand.
        scores: { consequentialist: 0.7, contractarian: 0.4, scope: 0.4 }
        evidence:
          who: Elisabeth Noelle-Neumann
          work: The Spiral of Silence
          year: 1984
          says: >-
            Noelle-Neumann argued that people continuously read the climate of opinion and
            fall silent when they sense themselves in the minority, so that a view can
            disappear from discussion long before anyone votes on it.
      - id: d
        label: >-
          No procedure fixes this. In a body where people can be punished for a view, the
          ballot only relocates the fear to the next visible thing.
        scores: { care: 0.8, relativist: 0.4, certainty: -0.4 }
  - id: q4
    prompt: >-
      The survey's free-text comments arrive. A substantial share of the private opposition
      turns out to be contemptuous in terms nobody has used aloud in that building in
      twenty years, and it is clear the public norm was holding it down.
    options:
      - id: a
        label: >-
          Then the norm was doing something. A standard that makes contempt costly to voice
          shapes conduct even when it does not change minds, and hypocrisy is a small price.
        scores: { consequentialist: 0.8, virtue: 0.5, affect: -0.4 }
        evidence:
          who: Jon Elster
          work: Deliberation and Constitution Making
          year: 1998
          says: >-
            Elster described a civilising force of hypocrisy: participants obliged to
            argue in public-interest terms become partly bound by the terms they have
            adopted, so that the pretence constrains what they can then go on to propose.
      - id: b
        label: >-
          Suppression is why it reads like that. An argument that is never made is never
          answered, and twenty years of not being answered is what produced these comments.
        scores: { consequentialist: 0.7, deontological: 0.5, authority: 0.5 }
        evidence:
          who: Timur Kuran
          work: "Private Truths, Public Lies"
          year: 1995
          says: >-
            Kuran argues that preference falsification also falsifies public knowledge:
            once positions go unstated they go unexamined, so both the concealed view and
            the official one deteriorate for want of contact.
      - id: c
        label: >-
          Some of this should have stayed private. A society in which nothing is concealed
          is not a more honest one, only a harsher one to live in.
        scores: { deontological: 0.8, care: 0.6, scope: -0.4 }
        evidence:
          who: Thomas Nagel
          work: Concealment and Exposure
          year: 1998
          says: >-
            Nagel defended reticence as a condition of civilised social life, arguing that
            a public space works partly by keeping much of what people think out of it, and
            that exposure of everything degrades both the public and the private realm.
      - id: d
        label: >-
          You are still looking for the real preference underneath. There may not be one —
          people are made of what they do, and the private comment is not more genuine for
          being unsaid.
        scores: { nihilist: 0.6, relativist: 0.5, certainty: -0.6 }
        evidence:
          who: Friedrich Nietzsche
          work: On the Genealogy of Morality
          year: 1887
          says: >-
            Nietzsche argued that the idea of a doer standing behind the deed is a
            grammatical illusion, which cuts against the assumption that behind each public
            act there sits an authentic preference waiting to be uncovered.
outcomes:
  - id: reveal-the-distribution
    dominant: consequentialist
    label: Reveal the Distribution
    text: >-
      Your instinct is to fix the information problem: find out what people actually think,
      make it common knowledge, and let the equilibrium move. That is Kuran's own logic and
      it explains things nothing else does, including why regimes and institutions collapse
      without warning. Its exposure is that revelation is not steerable. You do not get to
      publish the part of the private distribution you approve of, and the same disclosure
      that liberates a suppressed majority can license a suppressed contempt.
    base_rate: null
  - id: the-record-you-signed
    dominant: virtue
    label: The Record You Signed
    text: >-
      You go straight to your own participation — you wrote "carried unanimously" four
      times, and you regard that as the fact requiring an answer before any analysis of
      other people. Havel is with you, and this is the one move in the whole subject that
      does not depend on anyone else moving first. What it costs is proportion: resigning
      settles your position and vacates the seat from which the requirement could have been
      changed, which is a good outcome for you and not obviously for anyone else.
    base_rate: null
  - id: the-vote-is-a-trust
    dominant: deontological
    label: The Vote Is a Trust
    text: >-
      You hold that some things are owed regardless of consequence — that a vote exercised
      over other people should be answerable, and that not everything private is owed to
      the public. Both halves come from the same source: a view about what people are
      entitled to and what they must stand behind. The tension is that these two commitments
      pull opposite ways in this case, and you will have to say which of them is the
      exception.
    base_rate: null
  - id: conditions-of-a-real-vote
    dominant: contractarian
    label: Conditions of a Real Vote
    text: >-
      You care about whether the procedure could produce an answer anyone should be bound
      by, which is why you want secrecy where punishment is possible and why you distrust
      both the show of hands and the anonymous survey. This is the most defensible ground
      here and it is where most institutions eventually arrive. Its limit is that procedure
      is cheap to satisfy formally: the ballot can be secret while everything that decides
      the vote happens in the room beforehand.
    base_rate: null
  - id: who-pays-for-speaking
    dominant: care
    label: Who Pays for Speaking
    text: >-
      You keep your eye on the person who would have to bear the cost of dissenting, and
      you doubt that any procedural fix removes it. That scepticism is well founded — the
      colleague censured eighteen months ago is the reason the last four votes were
      unanimous, and no ballot design addresses him. Where it leaves you is with a diagnosis
      and no lever, and the institution runs on regardless while you are being right about
      it.
    base_rate: null
  - id: everyone-claims-the-silent
    dominant: relativist
    label: Everyone Claims the Silent
    text: >-
      You notice that every faction discovers a silent majority exactly where its public
      support runs out, and you are right that this is the oldest move in politics. It also
      leaves you unable to act on the survey in front of you: if all claims about hidden
      opinion are positioning, then so is the sixty-one, and the show of hands wins by
      default because it is the only thing anyone counted.
    base_rate: null
  - id: nothing-underneath
    dominant: nihilist
    label: Nothing Underneath
    text: >-
      You doubt the picture the whole theory runs on — a true preference sitting behind the
      public one, waiting to be measured. People are largely made of what they repeatedly
      do, and the anonymous comment is not more authentic for being unsigned. This is a
      serious position and it dissolves a great deal of bad reasoning about silent
      majorities. It also dissolves the grounds for objecting to the requirement, since on
      this account the members who voted for it four times simply favour it.
    base_rate: null
---

## What it means

Timur Kuran's *Private Truths, Public Lies* (1995) starts from something everyone has done.
You are in a room. You hold a view. You can see what saying it would cost — a look, a
reputation, a client, a job — and you can see that saying nothing costs almost nothing. So
you nod, or you say something adjacent to what you think, or you say the expected thing with
enough irony that you could deny it later. Kuran calls this **preference falsification**: the
misrepresentation of what one wants under perceived social pressure.

The individual act is trivial. Kuran's book is about what happens when a whole population
does it at once, and his central point is that the consequences are not additive but
structural.

**Public opinion becomes unmeasurable, including by the people who make it up.** Each person
sees only the public preferences of others — which are themselves falsified — and calibrates
their own risk against that false picture. The result is a stable equilibrium that nobody in
it endorses. Kuran's illustration is that a policy can be supported by nearly everyone in
public and by almost no one in private, and that this can persist for decades without anyone
lying to anyone in a way they would call lying.

**Knowledge itself degrades.** This is the part usually dropped from summaries and it is the
part Kuran cares most about. Arguments that go unmade go unanswered; a generation grows up
having never encountered the objection; and eventually private preferences themselves drift
toward the public ones, because people mostly believe what they have never heard contested.
Falsification of preference produces falsification of knowledge, and that is far harder to
reverse.

**And revolutions become unpredictable in principle.** Kuran developed this in "Now Out of
Never" (1991), his account of 1989. If each person has a private threshold — the number of
visible dissenters at which they would join — then the distribution of thresholds is hidden
from everyone, including the security services, including the dissidents. A small shock can
tip a few people over their thresholds, which tips more, and a regime that looked
unshakeable on Monday is gone by Friday. The surprise is not a failure of intelligence. It
is a property of the system. This is why Kuran insists that nobody, including the
participants, predicted 1989, and why he thinks nobody could have.

## What it suggests

**Unanimity is evidence of pressure, not of agreement.** Once you have the concept, a
unanimous show of hands stops being reassuring and starts being a data point about what it
costs to dissent.

**Institutional design becomes the main lever.** Secret ballots, anonymous submissions,
tenure, an ombudsman, a genuinely independent press: these are not niceties but instruments
for finding out what a population thinks. On Kuran's account an organisation that cannot
find that out is flying blind and will be surprised.

**Three objections, and they are serious.**

The first is that the theory forbids nothing. Any discrepancy between stated opinion and
observed behaviour can be attributed to falsification, and any surprising outcome can be
explained afterwards by hidden preferences that were, conveniently, hidden. Meanwhile the
empirical record on "shy" respondents in polling is much weaker than the popular version
assumes; most large polling misses turn out to involve who answered the phone rather than
who lied on it.

The second is political, and it cuts every way at once. "The silent majority agrees with me"
is available to any faction whose public support has run out, and it is used by all of them.
Kuran's framework gives that claim a scholarly vocabulary without giving it evidence.

The third is the one his admirers find hardest. Preference falsification is not always bad.
Norms that make certain things costly to say do real work, and Jon Elster's "civilising
force of hypocrisy" names the mechanism: people obliged to argue in public terms become
partially bound by the terms they adopted. Kuran knows this and says so; the popular reading
of him does not. And there is a version of the private-truths story where the truths are
worse than the lies — where the concealed preference is contempt, and the norm suppressing
it was the achievement rather than the distortion.

## The problem

Priya has been secretary of the institute's regional chapter for six years, and she has the
survey open on her laptop at eleven at night.

The chapter has voted four times, on a show of hands, to require members to sign a statement
of commitment on a contested public question before they can sit on any committee. Each vote
was recorded as carried unanimously, and she typed those words herself. The debates were
short. Nobody argued against.

The anonymous survey she commissioned in June, ostensibly about member services, carried a
question about the requirement. Sixty-one of a hundred respondents oppose it. Fourteen are
neutral.

Priya can account for the gap without any theory at all, because everyone in the chapter can.
Eighteen months ago Alan Reddy said in a meeting that he thought the requirement was a bad
idea, and was censured, and lost two referrals, and no longer comes.

Two colleagues have already been to see her. One says this proves the members were always
against it and were bullied. The other says the survey proves nothing, that a great many of
the sixty-one would not repeat it to her face, and that a body which governs itself by
anonymous opinion is not governing itself at all.

And there is the file of free-text comments, which Priya has read twice and has not shown to
anyone, because a good deal of what is in it is not an argument about committee procedure.

## The questions

**1. The survey.** Four unanimous shows of hands; sixty-one of a hundred privately opposed.

- Publish all of it. The mechanism runs on each person believing they are alone.
- Sit on it. You would be swapping one unverifiable claim for another.
- Publish it and resign, since you wrote "carried unanimously" four times.
- Take it to the board privately. The aim is to change the rule, not to detonate the body.

**2. The two colleagues.** Both cite the same theory in opposite directions.

- They may both be right, which is the theory's problem: it forbids no observation.
- Both assume the hidden view is the real one. Long public commitment is not a mask.
- It is answerable: falsification runs toward whoever controls the rewards.
- Everyone who claims a silent majority is claiming a mandate they cannot produce.

**3. The re-vote.** Seats and referrals plausibly turn on how members are seen to vote.

- Secret ballot. A vote that can be punished is not a vote.
- Open vote. A vote is a trust exercised over other people.
- Secret ballot and unattributed submissions — the pressure was never at the vote.
- No procedure fixes this; the ballot relocates the fear.

**4. The comments file.** Much of the private opposition is contemptuous in terms nobody has
used aloud in twenty years.

- Then the norm was working. Hypocrisy is a small price for constrained conduct.
- Suppression is why it reads like that; an argument never made is never answered.
- Some of it should have stayed private. Total exposure is harsher, not more honest.
- You are still looking for a real preference underneath. There may not be one.

## Reading your answer

**Reveal the Distribution.** You want the information problem solved and the equilibrium
moved, which is Kuran's own logic and explains things nothing else does. Revelation is not
steerable: you do not get to publish only the part of the private distribution you approve
of.

**The Record You Signed.** You go to your own participation first, which is the one move
here that does not wait on anyone else. It costs proportion — resigning settles your position
and vacates the seat from which the rule could have been changed.

**The Vote Is a Trust.** You think a vote over others should be answerable, and that not
everything private is owed to the public. Both come from one view about what people must
stand behind, and in this case they pull opposite ways. You will have to name the exception.

**Conditions of a Real Vote.** You ask whether the procedure could produce a result anyone
should be bound by, and distrust the show of hands and the survey equally. Procedure is cheap
to satisfy formally: the ballot can be secret while everything deciding it happens
beforehand.

**Who Pays for Speaking.** You watch the person who would bear the cost, and doubt any
procedural fix removes it. Alan Reddy is the reason the last four votes were unanimous and no
ballot design addresses him. That leaves you with a diagnosis and no lever.

**Everyone Claims the Silent.** You notice each faction finding a silent majority exactly
where its public support ends. If all claims about hidden opinion are positioning, so is the
sixty-one — and the show of hands wins by being the only thing counted.

**Nothing Underneath.** You doubt the picture the theory runs on, and you dissolve a lot of
bad reasoning about silent majorities. You also dissolve the objection to the requirement,
since on this account the members who voted for it four times simply favour it.

## Sources

- Timur Kuran, *Private Truths, Public Lies* (Harvard University Press, 1995) — the theory,
  the knowledge-falsification argument, and the institutional remedies.
- Timur Kuran, "Now Out of Never", *World Politics* 44(1) (1991) — thresholds, cascades, and
  why 1989 was unpredictable in principle.
- Timur Kuran and Cass R. Sunstein, "Availability Cascades and Risk Regulation", *Stanford
  Law Review* 51(4) (1999) — the same dynamics applied to what a public comes to fear.
- Elisabeth Noelle-Neumann, *The Spiral of Silence* (University of Chicago Press, 1984) — the
  independent line of research on falling silent in a perceived minority.
- Michael Suk-Young Chwe, *Rational Ritual* (Princeton University Press, 2001) — why common
  knowledge, not private knowledge, is what lets people act together.
- Philip E. Converse, "The Nature of Belief Systems in Mass Publics" (1964) — non-attitudes,
  and the limits of treating a survey answer as a preference.
- Jon Elster, "Deliberation and Constitution Making", in *Deliberative Democracy* (Cambridge
  University Press, 1998) — the civilising force of hypocrisy.
- Thomas Nagel, "Concealment and Exposure", *Philosophy & Public Affairs* 27(1) (1998) — the
  case for reticence.
- John Stuart Mill, *Considerations on Representative Government* (1861) — the argument
  against the secret ballot.
