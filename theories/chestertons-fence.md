---
id: chestertons-fence
title: Chesterton's Fence
category: principle
tradition: conservatism
philosophers:
  - G.K. Chesterton
era: "1929"
tags: [tradition, reform, institutions, caution, burden-of-proof, knowledge]
sources:
  - author: G.K. Chesterton
    title: "The Thing: Why I Am a Catholic"
    published: Sheed and Ward
    year: 1929
  - author: Edmund Burke
    title: Reflections on the Revolution in France
    published: J. Dodsley
    year: 1790
  - author: Thomas Paine
    title: Rights of Man
    published: J. S. Jordan
    year: 1791
  - author: Mary Wollstonecraft
    title: A Vindication of the Rights of Men
    published: Joseph Johnson
    year: 1790
  - author: Jeremy Bentham
    title: The Book of Fallacies
    published: John and H. L. Hunt
    year: 1824
  - author: Michael Oakeshott
    title: "Rationalism in Politics and Other Essays"
    published: Methuen
    year: 1962
  - author: Martin Luther King Jr.
    title: Letter from Birmingham Jail
    published: written from Birmingham City Jail; collected in Why We Can't Wait
    year: 1963
  - author: Karl Popper
    title: The Open Society and Its Enemies
    published: Routledge
    year: 1945
  - author: Donald T. Campbell
    title: "Reforms as Experiments"
    published: "American Psychologist 24(4), 409–429"
    year: 1969
questions:
  - id: q1
    prompt: >-
      A rule has been in place for thirty years. It costs the organisation real money every
      week. Nobody currently employed there can say what it is for, and the people who wrote
      it are dead or unreachable.
    options:
      - id: a
        label: >-
          Do not touch it until someone can explain it. A reason you cannot find is not the
          same as a reason that was never there.
        scores: { deontological: 0.8, certainty: 0.6, agency: -0.5 }
        evidence:
          who: G.K. Chesterton
          work: "The Thing: Why I Am a Catholic"
          year: 1929
          says: >-
            Chesterton's rule was that the reformer who cannot say why the fence was built
            has not yet earned the right to remove it, and should be sent away to find out
            before he is allowed to touch it.
      - id: b
        label: >-
          Remove it and watch. If something breaks you will learn what it was for faster
          than any archive will tell you.
        scores: { consequentialist: 0.9, agency: 0.6, certainty: -0.6 }
        evidence:
          who: Donald T. Campbell
          work: "Reforms as Experiments"
          year: 1969
          says: >-
            Campbell argued that policy changes should be designed as experiments with real
            measurement, on the view that we learn what an arrangement does by varying it
            and observing, not by reasoning about it in advance.
      - id: c
        label: >-
          Suspend it in one department for six months with someone watching. Neither
          preservation nor demolition — a test.
        scores: { consequentialist: 0.7, virtue: 0.5, certainty: -0.5 }
        evidence:
          who: Karl Popper
          work: The Open Society and Its Enemies
          year: 1945
          says: >-
            Popper defended piecemeal change over wholesale redesign precisely because
            small alterations produce errors you can detect and reverse, whereas a total
            reconstruction destroys the evidence that would have corrected it.
      - id: d
        label: >-
          The cost is the argument. Thirty years of unexplained expense is itself a finding,
          and the burden belongs on whoever wants to keep it.
        scores: { consequentialist: 0.8, contractarian: 0.5, authority: 0.6 }
        evidence:
          who: Jeremy Bentham
          work: The Book of Fallacies
          year: 1824
          says: >-
            Bentham catalogued appeals to ancestral wisdom as a distinct species of
            fallacy, arguing that earlier generations had less information than we do and
            that antiquity of a practice is no evidence at all of its utility.
  - id: q2
    prompt: >-
      The archive turns up the reason. The rule was written to keep a particular group of
      applicants out, and it worked. It has since acquired a second function that is
      genuinely useful.
    options:
      - id: a
        label: >-
          Now you know why the fence is there, remove it. The knowledge requirement has been
          met and the answer was disqualifying.
        scores: { deontological: 0.9, certainty: 0.7, authority: 0.7 }
        evidence:
          who: Mary Wollstonecraft
          work: A Vindication of the Rights of Men
          year: 1790
          says: >-
            Answering Burke directly, Wollstonecraft held that much of what he revered as
            inherited wisdom was the residue of force and interest, and that an institution's
            age is no reason to spare it once its origin is known.
      - id: b
        label: >-
          Keep the second function, drop the first. Institutions outlive their reasons all
          the time and that is not automatically a scandal.
        scores: { consequentialist: 0.9, virtue: 0.4, affect: -0.6 }
        evidence:
          who: Friedrich Hayek
          work: "Law, Legislation and Liberty"
          year: 1973
          says: >-
            Hayek held that rules can serve functions nobody designed them for and nobody
            can fully articulate, so the intention behind a rule is a poor guide to whether
            the rule is now doing useful work.
      - id: c
        label: >-
          A rule with that origin cannot be laundered by a later use. What it was built to
          do is part of what it is.
        scores: { deontological: 0.8, care: 0.6, certainty: 0.5 }
        evidence:
          who: Martin Luther King Jr.
          work: Letter from Birmingham Jail
          year: 1963
          says: >-
            King argued that an ordinance may be lawful and orderly and still be unjust in
            its operation, and that the demand to preserve order while the injustice
            continues is itself a decision about who may be made to wait.
      - id: d
        label: >-
          Build the second function on purpose, then remove the rule. Do not inherit by
          accident what you would not have chosen.
        scores: { contractarian: 0.8, virtue: 0.6, agency: 0.5 }
  - id: q3
    prompt: >-
      An incoming administration proposes abolishing an agency, saying no one can explain
      what most of it does. Officials reply that its function is diffuse, largely
      preventive, and hard to state — which is exactly what the archivist said about the
      rule.
    options:
      - id: a
        label: >-
          Then the principle protects the agency. It does not come with a politics attached
          and it binds whoever is holding the axe.
        scores: { deontological: 0.9, scope: 0.6, certainty: 0.5 }
        evidence:
          who: Michael Oakeshott
          work: Rationalism in Politics and Other Essays
          year: 1962
          says: >-
            Oakeshott's target was the rationalist temper in general — the confidence that
            what cannot be set out as an explicit argument is not knowledge — and he found
            it on the political right as readily as on the left.
      - id: b
        label: >-
          Not comparable. An unexplained restriction on people differs from an unexplained
          protection of them, and the burden should sit where the harm would fall.
        scores: { care: 0.8, consequentialist: 0.6, agency: -0.5 }
      - id: c
        label: >-
          It protects nothing. An institution that cannot say what it does after being asked
          has failed the test the principle actually sets.
        scores: { consequentialist: 0.8, contractarian: 0.5, authority: 0.6 }
      - id: d
        label: >-
          The principle is being used as a delay device by whichever side currently owns the
          thing, and that is all it has ever been.
        scores: { relativist: 0.8, certainty: -0.7, affect: -0.4 }
        evidence:
          who: Thomas Paine
          work: Rights of Man
          year: 1791
          says: >-
            Paine denied that any generation can bind those that follow, and read the
            appeal to inherited arrangements as a way of dressing present power in the
            authority of the dead.
  - id: q4
    prompt: >-
      The investigation will take eleven months. During those eleven months the rule
      continues to operate, and it is currently excluding around forty people a year from
      something they need.
    options:
      - id: a
        label: >-
          Suspend it while you investigate. Caution about consequences that has no view
          about the ongoing cost is not caution.
        scores: { care: 0.9, consequentialist: 0.6, agency: 0.6 }
        evidence:
          who: Martin Luther King Jr.
          work: Letter from Birmingham Jail
          year: 1963
          says: >-
            King's charge against the moderate was that the counsel to wait for a more
            convenient season has almost always meant never, and that it is offered by
            people who are not the ones waiting.
      - id: b
        label: >-
          Eleven months is not long against thirty years, and reversing a suspension is
          harder than people think. Finish the work first.
        scores: { deontological: 0.7, certainty: 0.6, agency: -0.7 }
        evidence:
          who: Edmund Burke
          work: Reflections on the Revolution in France
          year: 1790
          says: >-
            Burke argued that a society is an inheritance held in trust across generations,
            and that changes to it should be made slowly and in the manner of a repair,
            because what is dismantled quickly cannot be reassembled at all.
      - id: c
        label: >-
          Forty people a year is the whole question and the rest is procedure. Anyone
          arguing for delay should have to tell them.
        scores: { care: 0.8, affect: 0.7, scope: 0.5 }
      - id: d
        label: >-
          Suspend it and commit in advance to what evidence would restore it. The problem
          with both camps is that neither says beforehand what would change their mind.
        scores: { consequentialist: 0.8, contractarian: 0.7, certainty: -0.5 }
outcomes:
  - id: earn-the-right
    dominant: deontological
    label: Earn the Right First
    text: >-
      You hold that the burden sits on whoever wants to change something, and that a reason
      you cannot presently see is not the same as no reason. This is the strongest thing in
      conservative epistemology and it applies to far more than tradition — it is why good
      engineers do not delete code they do not understand. Its price is that the burden is
      never discharged: a reason can always be sought for a while longer, and a principle
      that permits indefinite postponement will be used for it, by people who like the fence.
    base_rate: null
  - id: find-out-by-doing
    dominant: consequentialist
    label: Find Out by Doing
    text: >-
      You think arrangements reveal their functions when varied, and that the fastest honest
      route to understanding a rule is to stop applying it somewhere and watch carefully.
      Campbell and Popper are with you and so is most of the evidence about how institutions
      are actually learned. What it costs you is that not everything fails visibly or
      recoverably — some fences are load-bearing in ways that show up years later, in a
      different department, as something nobody connects back to you.
    base_rate: null
  - id: the-cost-runs-while-you-think
    dominant: care
    label: The Cost Runs While You Think
    text: >-
      You keep the forty people in view and refuse to treat delay as the neutral option,
      because delay is a decision with a bill attached and someone specific is paying it.
      King is with you, and the point is hard to answer honestly. Its exposure is that
      urgency is the argument used by every bad reform as well as every good one, and the
      visible cost of the present arrangement is systematically easier to see than the
      dispersed cost of removing it.
    base_rate: null
  - id: rebuild-on-purpose
    dominant: contractarian
    label: Rebuild It on Purpose
    text: >-
      Your instinct is to ask what could be justified to everyone affected and then build
      that, rather than either inheriting or demolishing. It escapes the whole quarrel and it
      is how the better institutional reforms have actually been done. The difficulty is
      capacity: deliberate design is slow, expensive and rarer than its advocates admit, and
      in the meantime you have often left the old rule standing while the redesign is
      discussed.
    base_rate: null
  - id: whoever-owns-the-fence
    dominant: relativist
    label: Whoever Owns the Fence
    text: >-
      You notice the principle is invoked by whichever side currently possesses the
      institution under threat, and that it changes hands the moment the majority does. That
      observation is accurate and rarely made by the people who quote Chesterton. Where it
      leaves you is thin: if the argument is only ever a delaying tactic, you have no account
      of why some inherited arrangements really do carry knowledge, and you will demolish
      something that was holding the roof up.
    base_rate: null
  - id: what-it-makes-of-reformers
    dominant: virtue
    label: What It Makes of Reformers
    text: >-
      You are watching the temperament as much as the decision — whether the reformer is
      curious about what he is about to remove, or merely impatient with it. That is
      Chesterton's actual subject and it survives every objection to his rule, because the
      person who has genuinely tried to understand the fence will handle both outcomes
      better. It cannot decide anything on its own, though, and eleven months from now
      someone still has to sign a piece of paper.
    base_rate: null
---

## What it means

The image comes from G.K. Chesterton's *The Thing* (1929), in an essay on the family. He
sets up a scene: a fence stands across a road in a field, apparently pointless. A reformer
comes along and says he cannot see any use for it, so it should be cleared away. Chesterton's
answer is that this is precisely the wrong qualification for the job. If you do not know why
the fence was put there, you are not yet entitled to remove it. Go and find out. Come back
when you can say what it was for, and then, if you still want to take it down, you may.

Chesterton was not arguing that the fence must be right. He was making a claim about the
order of operations, and about who has standing. The reformer's not seeing the point is a
fact about the reformer. The fence was built by someone, at some cost, for some reason, and
the burden falls on whoever proposes the change to establish what that reason was — because
only then does he know what he is destroying.

Behind the joke is an old argument. Edmund Burke's *Reflections on the Revolution in France*
(1790) held that a society is an inheritance held in trust, that inherited arrangements
carry knowledge their inheritors cannot articulate, and that reform should proceed as
repair. Michael Oakeshott, in *Rationalism in Politics* (1962), sharpened the epistemology:
the rationalist error is the belief that knowledge which cannot be written down as an
explicit argument is not knowledge, when in fact most of what makes an institution work is
practical, tacit, and carried in habit.

The principle has travelled far outside conservatism. Software engineers cite it about code
whose purpose is unclear; doctors cite it about protocols; it appears routinely in
discussions of institutional design by people with no interest in Burke. That portability is
a sign it is tracking something general about acting under ignorance, rather than a
preference for the past.

## What it suggests

Taken seriously, it reverses the default. Most reform arguments run: here is a cost, here is
no visible benefit, therefore remove. The fence says the absence of a visible benefit is
weak evidence when the system is old, because arrangements that survive have often been
selected for functions nobody stated. It makes ignorance a reason for inaction rather than a
reason for action, which is the opposite of how the impulse usually runs.

It also assigns a duty, and this is the part most often dropped when the principle is
quoted. Chesterton does not tell the reformer to go away. He tells him to go and find out,
and says he may then destroy it. The principle demands investigation and licenses removal at
the end of it. Used as a permanent veto it is being used against its own text.

**The objection is severe and it is structural.** The condition — know why it was put there
— can never be conclusively met. Records are lost; reasons were multiple; the person who
built it is dead. Since a reason can always be sought for a little longer, anyone who wants
the fence kept has an unlimited supply of legitimate-sounding delay. The principle therefore
has an asymmetry built into it that favours whatever exists, regardless of merit, and the
people paying for the delay are never the ones invoking it. Jeremy Bentham had already
catalogued the general form as a fallacy in *The Book of Fallacies* (1824): the appeal to
ancestral wisdom, he pointed out, cites as authority the people who had the least
information.

There is a second objection. Knowing why the fence was built can be disqualifying rather
than reassuring. Many long-standing arrangements were built to exclude somebody, and worked.
Mary Wollstonecraft's reply to Burke made this exact move: what he called inherited wisdom
was in large part the settled residue of force. Discovering the reason does not always
counsel caution; sometimes it removes the last doubt.

And a third, which cuts against the principle's usual users: it is politically neutral, and
almost nobody applies it that way. A government abolishing an agency because officials
cannot crisply explain what it does is the reformer in the field with a hammer. If the
principle is sound, it protects the agency exactly as it protects the parish boundary — and
the test of whether someone believes it is whether they have ever once been inconvenienced
by it.

## The problem

The rule at St. Aidan's is thirty-one years old, and it says that no applicant to the
hospital's housing-linked care scheme may be admitted without a countersignature from a
consultant who has seen them in person within the preceding six weeks.

Nobody knows why. Ruth, who runs the scheme, has asked four people. The consultant clinic
that provides the countersignature has a nine-week wait. The effect is that roughly forty
people a year, most of them the least mobile applicants, drop out of the process before they
reach the front of it. She would like to delete the rule on Monday.

The finance director wants it gone too, for different reasons, and this makes Ruth uneasy
without her being able to say why.

The trust's archivist thinks she can find the answer, but says it will take about eleven
months: the relevant committee minutes are in a warehouse and were never indexed. Meanwhile
a retired administrator has phoned to say, vaguely, that there was a death in the late
eighties and the rule came after it, though he cannot remember whether the two were
connected.

At the same meeting, the board is asked to approve the closure of the trust's overnight
pharmacy post, on the grounds that an audit could not identify what the post-holder does
between two and six in the morning. Ruth votes against, on the grounds that an audit's
failure to see a function is not the absence of one, and hears herself make the argument she
has spent all month refusing.

## The questions

**1. The rule.** Thirty years old, expensive, and nobody can say what it is for.

- Do not touch it until someone can explain it.
- Remove it and watch. Breakage teaches faster than archives.
- Suspend it in one department for six months, with someone measuring.
- The unexplained cost is itself the finding. Burden on whoever wants it kept.

**2. The reason, found.** It was written to keep a group out, and worked — and has since
acquired a genuinely useful second function.

- Now you know, remove it. The answer was disqualifying.
- Keep the second function, drop the first.
- That origin cannot be laundered by a later use.
- Build the second function deliberately, then remove the rule.

**3. The other direction.** A government proposes abolishing an agency whose function
officials describe as diffuse and preventive.

- Then the principle protects the agency. It binds whoever holds the axe.
- Not comparable: an unexplained restriction differs from an unexplained protection.
- It protects nothing — an institution asked what it does must be able to answer.
- The principle is a delay device belonging to whoever currently owns the thing.

**4. The eleven months.** The rule keeps operating while you investigate, and excludes forty
people a year.

- Suspend it meanwhile. Caution with no view about the running cost is not caution.
- Eleven months against thirty years. Finish the work first.
- Forty people is the whole question; anyone arguing for delay should tell them.
- Suspend it, and say in advance what evidence would bring it back.

## Reading your answer

**Earn the Right First.** You put the burden on whoever wants the change, and you distinguish
a reason you cannot see from a reason that was never there. This is the best thing in
conservative epistemology and it is why careful engineers do not delete code they do not
understand. Its price is that the burden never fully discharges, and a principle permitting
indefinite postponement will be used for it.

**Find Out by Doing.** You think arrangements reveal their functions when varied, and you
would rather learn from a controlled failure than a warehouse. Campbell and Popper are with
you. Not everything fails visibly or recoverably, though, and some fences turn out to have
been load-bearing three years later in a department that never heard of you.

**The Cost Runs While You Think.** You refuse to treat delay as the neutral option, because
it has a bill and someone specific is paying it. King's version of this is hard to answer.
The exposure is that urgency is also the argument of every bad reform, and the cost of the
present arrangement is always easier to see than the cost of removing it.

**Rebuild It on Purpose.** You want to ask what could be justified to everyone affected and
then build that. It escapes the quarrel entirely and it is how the better reforms were done.
The difficulty is capacity — deliberate design is slow, and the old rule usually stays
standing while it is discussed.

**Whoever Owns the Fence.** You notice the principle changes hands with the majority, which
is accurate and rarely admitted by the people quoting it. It leaves you thin: if the argument
is only ever tactical, you have no account of why some inherited arrangements really do carry
knowledge.

**What It Makes of Reformers.** You are watching the temperament — curiosity about the thing
you are removing, or impatience with it. That is Chesterton's real subject and it survives
the objections to his rule. It also decides nothing by itself, and someone still has to sign
the paper.

## Sources

- G.K. Chesterton, *The Thing: Why I Am a Catholic* (Sheed and Ward, 1929) — the fence
  passage appears in the essay "The Drift from Domesticity".
- Edmund Burke, *Reflections on the Revolution in France* (1790) — inheritance, prescription,
  and reform as repair.
- Michael Oakeshott, *Rationalism in Politics and Other Essays* (Methuen, 1962) — practical
  knowledge against the rationalist temper, applied to both wings.
- Mary Wollstonecraft, *A Vindication of the Rights of Men* (Joseph Johnson, 1790) — the
  direct reply to Burke, published within weeks of him.
- Thomas Paine, *Rights of Man* (1791) — the dead cannot bind the living.
- Jeremy Bentham, *The Book of Fallacies* (1824) — the appeal to ancestral wisdom, classified.
- Martin Luther King Jr., *Letter from Birmingham Jail* (1963) — on order, delay and who is
  asked to wait.
- Karl Popper, *The Open Society and Its Enemies* (Routledge, 1945) — piecemeal change as the
  method that permits correction.
- Donald T. Campbell, "Reforms as Experiments" (*American Psychologist*, 1969) — treating a
  policy change as a measurable experiment.
