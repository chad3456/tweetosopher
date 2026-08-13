---
id: false-consciousness
title: False Consciousness
category: theory
tradition: marxism
philosophers:
  - György Lukács
  - Friedrich Engels
era: "1923"
tags: [ideology, class, interests, paternalism, autonomy, persuasion]
sources:
  - author: György Lukács
    title: History and Class Consciousness
    published: Malik Verlag
    year: 1923
  - author: Friedrich Engels
    title: "Letter to Franz Mehring"
    published: "collected in Marx and Engels, Selected Correspondence"
    year: 1893
  - author: Karl Marx and Friedrich Engels
    title: The German Ideology
    published: "written 1845–46; first published in full 1932"
    year: 1932
  - author: Antonio Gramsci
    title: Prison Notebooks
    published: "written 1929–35; published posthumously"
    year: 1948
  - author: Steven Lukes
    title: "Power: A Radical View"
    published: Macmillan
    year: 1974
  - author: Isaiah Berlin
    title: Two Concepts of Liberty
    published: Clarendon Press
    year: 1958
  - author: E.P. Thompson
    title: The Making of the English Working Class
    published: Victor Gollancz
    year: 1963
  - author: James C. Scott
    title: "Weapons of the Weak: Everyday Forms of Peasant Resistance"
    published: Yale University Press
    year: 1985
  - author: Thomas Frank
    title: "What's the Matter with Kansas? How Conservatives Won the Heart of America"
    published: Metropolitan Books
    year: 2004
  - author: Larry M. Bartels
    title: "What's the Matter with What's the Matter with Kansas?"
    published: "Quarterly Journal of Political Science 1(2), 201–226"
    year: 2006
  - author: Friedrich Hayek
    title: "The Intellectuals and Socialism"
    published: "University of Chicago Law Review 16(3), 417–433"
    year: 1949
questions:
  - id: q1
    prompt: >-
      After two years of organising, the warehouse votes down the union by a wide margin.
      The organiser has to write a report saying what happened.
    options:
      - id: a
        label: >-
          They were told their jobs would go, in a hundred small ways, by people with power
          over them. That is not a preference, it is a result produced by a campaign.
        scores: { consequentialist: 0.8, care: 0.6, agency: 0.5 }
        evidence:
          who: Steven Lukes
          work: "Power: A Radical View"
          year: 1974
          says: >-
            Lukes argued that the most effective exercise of power is the shaping of what
            people want in the first place, so that observable preferences cannot be taken
            as the last word on whose interests were served.
      - id: b
        label: >-
          They voted no. Whatever pressures existed, treating the result as not really their
          answer is the beginning of deciding for them permanently.
        scores: { deontological: 0.9, authority: 0.5, certainty: 0.6 }
        evidence:
          who: Isaiah Berlin
          work: Two Concepts of Liberty
          year: 1958
          says: >-
            Berlin warned against the move that posits a real self whose true wishes differ
            from what a person actually says, because it allows others to coerce someone in
            the name of a freedom they are said to want but have not expressed.
      - id: c
        label: >-
          They understood their position better than the organisers did. They judged this
          union, at this site, this year, would lose and cost them, and they were probably
          right.
        scores: { consequentialist: 0.8, relativist: 0.5, affect: -0.6 }
        evidence:
          who: James C. Scott
          work: "Weapons of the Weak: Everyday Forms of Peasant Resistance"
          year: 1985
          says: >-
            Scott's fieldwork found subordinate groups accommodating publicly while
            resisting in low-visibility ways, and argued they were making shrewd
            calculations about risk rather than mistaking their own interests.
      - id: d
        label: >-
          Both things are true and the report should say so: their reasoning was sound and
          the range of options they were reasoning within had been narrowed for them.
        scores: { consequentialist: 0.6, care: 0.6, certainty: -0.7 }
        evidence:
          who: Antonio Gramsci
          work: Prison Notebooks
          says: >-
            Gramsci described the consciousness of subordinate groups as contradictory —
            partly inherited from those who rule and partly formed in their own practice —
            which makes it neither simply duped nor simply free.
  - id: q2
    prompt: >-
      At the debrief, someone applies the same tool the other way: the company's managers,
      they say, sincerely believe the union would hurt workers, and that belief is exactly
      what their salaries require them to believe.
    options:
      - id: a
        label: >-
          Correct, and it is the same analysis. Position shapes belief upward as well as
          downward, and the powerful are no more transparent to themselves.
        scores: { relativist: 0.7, consequentialist: 0.6, scope: 0.6 }
        evidence:
          who: Karl Marx and Friedrich Engels
          work: The German Ideology
          says: >-
            Their claim was that the ruling ideas of an epoch are the ideas of the ruling
            class, presented as universal truths, and that those who hold them experience
            them as ordinary common sense rather than as class interest.
      - id: b
        label: >-
          It is the same analysis, and that is the problem. A tool that explains everyone's
          beliefs by their position has stopped being able to say anything is true.
        scores: { consequentialist: 0.7, certainty: -0.6, affect: -0.7 }
        evidence:
          who: Karl Popper
          work: The Open Society and Its Enemies
          year: 1945
          says: >-
            Popper's objection to this style of argument was that it reinterprets any
            disagreement as evidence of the opponent's social position, and so immunises
            itself against the only thing that could refute it.
      - id: c
        label: >-
          It applies with most force to the people in this room. Organisers and academics
          also hold the beliefs their careers reward, and they audit that least.
        scores: { virtue: 0.8, certainty: 0.5, affect: 0.5 }
        evidence:
          who: Friedrich Hayek
          work: "The Intellectuals and Socialism"
          year: 1949
          says: >-
            Hayek argued that the opinions circulating among teachers, journalists and
            other second-hand dealers in ideas are shaped by the incentives of that
            occupation, and are transmitted onward as disinterested conclusions.
      - id: d
        label: >-
          Sincerity is not the question. What matters is whether the belief is true and who
          it happens to serve, and both can be checked without a theory of anyone's psyche.
        scores: { consequentialist: 0.9, affect: -0.8, agency: 0.4 }
  - id: q3
    prompt: >-
      A researcher asks what would distinguish false consciousness from ordinary
      disagreement. If people who agree with you are clear-sighted and people who do not are
      mystified, the theory has no content.
    options:
      - id: a
        label: >-
          Nothing distinguishes them, and that is fatal. In practice the theorist's own
          conclusions supply the standard of clear sight.
        scores: { deontological: 0.7, certainty: -0.5, affect: -0.6 }
        evidence:
          who: E.P. Thompson
          work: The Making of the English Working Class
          year: 1963
          says: >-
            Thompson set out to rescue working people from the condescension of posterity,
            insisting that their beliefs and actions be understood in the terms available to
            them rather than graded against a consciousness a later theorist thinks they
            should have reached.
      - id: b
        label: >-
          It is testable. Ask whether the belief survives full information, time to
          deliberate, and freedom from retaliation — and sometimes it plainly does not.
        scores: { consequentialist: 0.8, contractarian: 0.7, certainty: -0.4 }
        evidence:
          who: Steven Lukes
          work: "Power: A Radical View"
          year: 1974
          says: >-
            Lukes proposed asking what people would want under conditions of relative
            autonomy, treating the gap between that and their actual preferences as the
            measurable trace of power rather than as an article of faith.
      - id: c
        label: >-
          The empirical version has been checked and it often fails. People described as
          voting against their interests frequently turn out to hold the priorities they
          say they hold.
        scores: { consequentialist: 0.9, affect: -0.7, certainty: 0.4 }
        evidence:
          who: Larry M. Bartels
          work: "What's the Matter with What's the Matter with Kansas?"
          year: 2006
          says: >-
            Bartels re-examined the survey data behind the claim that working-class voters
            had abandoned economic self-interest for cultural politics and found the pattern
            largely absent among lower-income white voters.
      - id: d
        label: >-
          The point was never to grade individuals. It is a claim about what a class would
          have to understand collectively, not a diagnosis of anybody's error.
        scores: { relativist: 0.6, consequentialist: 0.5, certainty: 0.4 }
        evidence:
          who: György Lukács
          work: History and Class Consciousness
          year: 1923
          says: >-
            Lukács distinguished the empirical opinions workers happen to hold from the
            consciousness imputed to their class — the view of the whole that would follow
            from grasping its position — and treated only the second as the subject of the
            theory.
  - id: q4
    prompt: >-
      A second ballot is possible. The organisers can either run it as before, or delay
      eighteen months while conditions change, on the reasoning that the workers will
      eventually want what they voted against.
    options:
      - id: a
        label: >-
          Delay. What people want is partly made by their circumstances, and changing the
          circumstances is not the same as overriding them.
        scores: { consequentialist: 0.8, care: 0.5, agency: 0.6 }
      - id: b
        label: >-
          Run it now and lose again if that is the answer. A movement that keeps holding
          ballots until it wins is not representing anyone.
        scores: { deontological: 0.9, contractarian: 0.6, certainty: 0.6 }
      - id: c
        label: >-
          Ask them. Not whether they want a union — whether they want the question asked
          again, and when.
        scores: { contractarian: 0.9, care: 0.6, authority: 0.4 }
      - id: d
        label: >-
          Stop organising here and go where people are already asking. The obligation was
          never to deliver these workers a conclusion.
        scores: { existentialist: 0.7, virtue: 0.5, scope: -0.5 }
outcomes:
  - id: preferences-are-produced
    dominant: consequentialist
    label: Preferences Are Produced
    text: >-
      You treat what people want as partly an output of the conditions they are in, so a
      vote taken under retaliation, or after a campaign, is data about the campaign as well
      as about them. This is a serious position with real evidence behind it, and Lukes gives
      it a testable shape. Its exposure is the direction of travel: once you can discount a
      stated answer as produced, you will find you can discount any answer that disappoints
      you, and the check on that is only your own restraint.
    base_rate: null
  - id: the-answer-they-gave
    dominant: deontological
    label: The Answer They Gave
    text: >-
      You hold that what a person says they want is the thing you have to work with, and
      that the alternative — a real interest they have not expressed — is the door every
      paternalism has walked through. Berlin is with you and so, from inside the left, is
      Thompson. The cost is that you must count some outcomes as free choices which you know
      were extracted, and you will sometimes be defending a result the employer bought.
    base_rate: null
  - id: ask-them-again
    dominant: contractarian
    label: Ask, Do Not Impute
    text: >-
      Your instinct is procedural: fix the conditions under which the question is asked,
      then take the answer. That is the only version of this argument that can be
      institutionalised, because it puts the standard outside the theorist's judgement. Its
      limit is that no achievable procedure is clean — there is always some remaining
      pressure, and someone can always say the conditions were not yet fair enough to count.
    base_rate: null
  - id: who-carries-the-risk
    dominant: care
    label: Who Carries the Risk
    text: >-
      You keep returning to the specific people in the room and what a wrong call costs
      them — the woman on a contract that ends in March, not the class as an abstraction.
      That keeps you close to the only evidence that has ever settled these arguments, which
      is what happens to particular people afterwards. Its weakness is scale: attention to
      those in front of you is exactly the disposition that a campaign of pressure is
      designed to exploit, since the immediate risk is always the one it manufactures.
    base_rate: null
  - id: everyone-is-positioned
    dominant: relativist
    label: Everyone Is Positioned
    text: >-
      You apply the analysis symmetrically: managers, organisers and researchers all believe
      what their situation makes believable, and no one in the room occupies the view from
      nowhere. That is more consistent than most people who use this vocabulary manage. The
      difficulty is that a tool which explains all beliefs by position cannot be used to
      establish that anything is the case, including its own claims about whose interests are
      being served.
    base_rate: null
  - id: who-you-become-diagnosing
    dominant: virtue
    label: What Diagnosing People Does to You
    text: >-
      You watch what the habit does to the person who acquires it — the slow shift from
      persuading people to explaining them, and the comfort of never having to lose an
      argument. That is a real occupational hazard and it is best noticed early. On its own
      it settles nothing: sometimes people genuinely are being deceived, and a scruple about
      condescension is not a reason to pretend otherwise.
    base_rate: null
  - id: not-your-conclusion-to-deliver
    dominant: existentialist
    label: Not Yours to Deliver
    text: >-
      You think the organiser's job ends where the workers' judgement begins, and that a
      campaign built on knowing better than the people it is for has already become
      something else. That protects both parties from a familiar corruption. It also concedes
      the field: if nobody may act until people have arrived at a view unaided, the side that
      is already shaping conditions goes on shaping them without opposition.
    base_rate: null
---

## What it means

The phrase belongs to Friedrich Engels. Writing to Franz Mehring in 1893, he described
ideology as a process carried out by the thinker consciously but with a false consciousness:
the real motives driving his thought remain unknown to him, so he invents apparent motives
after the fact. The underlying account is older, set out with Marx in *The German Ideology*
(written 1845–46): the ruling ideas of an age are the ideas of the ruling class, and they
circulate as ordinary common sense rather than as anyone's interest.

The major theoretical treatment is György Lukács's *History and Class Consciousness* (1923),
and it is more careful than the slogan. Lukács distinguishes the empirical opinions people
happen to hold from what he calls **imputed** class consciousness — the understanding that
would follow from grasping the class's actual position in the whole. The gap between the two
is the subject. He also supplies the mechanism: **reification**, the process by which
relations between people come to be experienced as properties of things, so that a labour
market appears as a natural fact with its own laws rather than as an arrangement.

Antonio Gramsci, writing in prison in the 1930s, made the picture less binary. Subordinate
groups, on his account, hold a **contradictory consciousness**: part of it inherited from
those who rule them and absorbed uncritically, part of it formed in their own practical
experience and often sharper than anything in the newspapers. Neither dupes nor free agents.
Steven Lukes gave the idea an analytical form in *Power: A Radical View* (1974), arguing that
the deepest exercise of power is the shaping of what people want, and proposing that we ask
what they would want under conditions of relative autonomy.

The idea has never been confined to Marxism. Its structure — you believe this because of
where you sit, not because it is true — appears in Hayek on intellectuals, in complaints
about media capture from every direction, and in most modern accounts of why the other side
votes as it does. Thomas Frank's *What's the Matter with Kansas?* (2004) is the best-known
recent instance in an American register, and Larry Bartels's survey re-examination of it is
the best-known rebuttal.

## What it suggests

If people can hold beliefs that serve interests other than their own without knowing it,
then a preference is not automatically the end of an inquiry. That has practical
consequences. It means an election, a ballot, or a survey result can be evidence about the
conditions it was produced under as well as about what people want. It means persuasion is
not merely supplying information, because the frame in which information lands was itself
built by someone. And it means the absence of complaint is not evidence of satisfaction —
which is the observation that made the concept indispensable to anyone studying why stable
injustice is stable.

There is a version of this nobody really disputes. Advertising works. Employers run
anti-union campaigns because they change results. Propaganda states invest in propaganda.
The disagreement is not about whether preferences can be shaped but about what follows.

**And what follows is the objection, which is the strongest in this entry.** The concept
licenses a person to say: I know what you want better than you do. Once that move is
available, every disagreement can be reclassified as a symptom, and the theorist's own
conclusions quietly become the standard of clear sight. Isaiah Berlin's *Two Concepts of
Liberty* (1958) traced the road: posit a real self whose true wishes differ from the
person's stated ones, and coercion becomes liberation. The history of the twentieth century
supplies the rest of the argument.

The objection is not only liberal. E.P. Thompson, a Marxist historian, wrote *The Making of
the English Working Class* (1963) explicitly to rescue working people from the condescension
of posterity, against a tradition that graded their beliefs against a consciousness they
were supposed to have reached. James C. Scott's fieldwork in *Weapons of the Weak* (1985)
found peasants who were not deceived at all: they complied in public and resisted in ways
that were cheap and deniable, having judged the risks accurately. On Scott's reading what
looks like false consciousness from outside is frequently a correct estimate of the odds
made by someone with more to lose than the observer.

There is a final difficulty of method. If the theory can explain both agreement and
disagreement — the agreeing are lucid, the disagreeing are mystified — it has no content.
Any serious use of it has to say in advance what would count as an ordinary, informed,
unmystified disagreement, and most uses of it do not.

## The problem

Dilyana has organised the Kettering fulfilment centre for two years, and the ballot has just
gone against her by four hundred and eleven votes to a hundred and ninety-three.

She knows the campaign that was run. Two consultancy staff on site full-time for six weeks.
Meetings pickers were paid to attend. A supervisor who told three separate people, in words
that could not be quoted, that the site was on a list. And a leaflet, accurate in every
particular, listing the four sites in the region that had closed within two years of a
recognition vote.

She also knows something less convenient. When she has asked people why, the most common
answer has not been fear. It has been that the union lost the last two disputes it ran in
this sector, that the subscription is real money against a wage that does not cover the
month, and that half the workforce is on contracts that will end before any agreement could
be signed. She has heard that argument put by a woman in her fifties who had thought about
it more carefully than Dilyana's own regional office had.

Her report is due Friday. The regional secretary has already used the phrase "they've been
got at" twice on the phone. If she writes that, she gets a second campaign funded. If she
writes what the woman in her fifties said, the region will write off the site.

And there is a second ballot available in eighteen months, after the contract changes come
in, when she is fairly confident the vote goes the other way.

## The questions

**1. The result.** The warehouse votes the union down. What does the report say?

- They were told their jobs would go. That is a produced result, not a preference.
- They voted no. Treating that as not really their answer is where deciding for them starts.
- They read their own position better than the organisers did, and were probably right.
- Both: sound reasoning, inside a range of options that had been narrowed for them.

**2. The mirror.** Managers sincerely believe the union would hurt workers — which is what
their salaries require them to believe.

- Correct, and it is the same analysis running upward.
- The same analysis, and that is the problem: it now explains everyone.
- It applies hardest to the organisers and academics in this room.
- Sincerity is beside the point. Ask whether the belief is true and who it serves.

**3. The test.** What distinguishes false consciousness from ordinary disagreement?

- Nothing does, and that is fatal.
- Information, time and freedom from retaliation. Sometimes a belief plainly fails that.
- The empirical version has been checked, and often fails.
- It was never a diagnosis of individuals — the claim is about a class's collective position.

**4. The second ballot.** Run it now, or wait eighteen months for conditions to change.

- Wait. Changing circumstances is not the same as overriding people.
- Run it now and lose again if that is the answer.
- Ask them whether they want to be asked again, and when.
- Stop here and organise where people are already asking.

## Reading your answer

**Preferences Are Produced.** You treat wants as partly the output of conditions, so a result
obtained under pressure is evidence about the pressure. There is real evidence behind this
and Lukes gives it a shape you can test. The exposure is directional: once a stated answer
can be discounted as produced, any disappointing answer can be, and only your own restraint
stops it.

**The Answer They Gave.** You work with what people say they want, and you regard the
unexpressed real interest as the door every paternalism has walked through. Berlin is with
you; so is Thompson, from inside the tradition. The cost is that you will defend some results
you know were bought.

**Ask, Do Not Impute.** You would fix the conditions of asking and then take the answer. It is
the only form of this argument that survives being institutionalised, because it puts the
standard outside the theorist. Its limit is that no real procedure is clean, and someone can
always say the conditions were not yet fair enough to count.

**Who Carries the Risk.** You stay with the particular people and what a wrong call costs
them, rather than with the class as an abstraction. That keeps you near the only evidence
that has ever settled these arguments. Its weakness is that attention to the person in front
of you is precisely what a pressure campaign is built to exploit.

**Everyone Is Positioned.** You run the analysis on managers, organisers and researchers
alike, which is more consistent than most users of this vocabulary manage. The difficulty is
that a tool explaining all beliefs by position cannot establish that anything is true,
including its own account of whose interests are served.

**What Diagnosing People Does to You.** You watch the drift from persuading people to
explaining them, and the comfort of never losing an argument again. A real occupational
hazard, best caught early. It settles nothing on its own: sometimes people are in fact being
deceived, and a scruple about condescension is not a reason to say otherwise.

**Not Yours to Deliver.** You think the organiser's job stops where the workers' judgement
begins. That protects both sides from a familiar corruption, and it concedes the field: the
side already shaping conditions carries on doing so while you wait.

## Sources

- György Lukács, *History and Class Consciousness* (Malik Verlag, 1923) — reification and
  imputed class consciousness.
- Friedrich Engels, letter to Franz Mehring (1893) — where the phrase itself appears.
- Karl Marx and Friedrich Engels, *The German Ideology* (written 1845–46) — the ruling ideas
  of an epoch.
- Antonio Gramsci, *Prison Notebooks* (written 1929–35) — hegemony and contradictory
  consciousness.
- Steven Lukes, *Power: A Radical View* (Macmillan, 1974) — the third dimension of power, and
  an attempt to make it testable.
- Isaiah Berlin, *Two Concepts of Liberty* (Clarendon Press, 1958) — the real self and where
  it leads.
- E.P. Thompson, *The Making of the English Working Class* (Victor Gollancz, 1963) — against
  the condescension of posterity, from within Marxism.
- James C. Scott, *Weapons of the Weak* (Yale University Press, 1985) — compliance as
  calculation rather than delusion.
- Thomas Frank, *What's the Matter with Kansas?* (Metropolitan Books, 2004) and Larry M.
  Bartels, "What's the Matter with *What's the Matter with Kansas*?" (*Quarterly Journal of
  Political Science*, 2006) — the modern instance and its rebuttal.
- Friedrich Hayek, "The Intellectuals and Socialism" (*University of Chicago Law Review*,
  1949) — the same structure of argument, aimed the other way.
