---
id: dual-process-morality
title: Dual-Process Moral Psychology
category: theory
tradition: moral-psychology
philosophers:
  - Joshua Greene
era: "2001"
tags: [neuroscience, intuition, deliberation, trolley, moral-psychology, utilitarianism]
sources:
  - author: Joshua D. Greene, R. Brian Sommerville, Leigh E. Nystrom, John M. Darley, Jonathan D. Cohen
    title: "An fMRI investigation of emotional engagement in moral judgment"
    published: "Science 293(5537), 2105–2108"
    year: 2001
  - author: Joshua D. Greene, Leigh E. Nystrom, Andrew D. Engell, John M. Darley, Jonathan D. Cohen
    title: "The neural bases of cognitive conflict and control in moral judgment"
    published: "Neuron 44(2), 389–400"
    year: 2004
  - author: Joshua Greene
    title: Moral Tribes - Emotion, Reason, and the Gap Between Us and Them
    published: Penguin Press
    year: 2013
  - author: Selim Berker
    title: "The Normative Insignificance of Neuroscience"
    published: "Philosophy and Public Affairs 37(4), 293–329"
    year: 2009
  - author: Michael McGuire, Robyn Langdon, Max Coltheart, Catriona Mackenzie
    title: "A reanalysis of the personal/impersonal distinction in moral psychology research"
    published: "Journal of Experimental Social Psychology 45(3), 577–580"
    year: 2009
  - author: Guy Kahane, Jim A. C. Everett, Brian D. Earp, Miguel Farias, Julian Savulescu
    title: "'Utilitarian' judgments in sacrificial moral dilemmas do not reflect impartial concern for the greater good"
    published: "Cognition 134, 193–209"
    year: 2015
  - author: Daniel M. Bartels, David A. Pizarro
    title: "The mismeasure of morals - antisocial personality traits predict utilitarian responses to moral dilemmas"
    published: "Cognition 121(1), 154–161"
    year: 2011
questions:
  - id: q1
    prompt: >-
      Suppose it turns out that your refusal to push a man off a footbridge to stop a
      runaway train runs through the same fast, emotional machinery that fires when a
      stranger stands too close to you. Does learning that change what you should do?
    options:
      - id: a
        label: >-
          Yes. A verdict produced by an alarm system tuned for close-quarters primate
          life has no authority over a decision about five lives, so override it.
        scores: { consequentialist: 1.0, affect: -0.9, scope: 0.6 }
      - id: b
        label: >-
          No. Every judgement you make runs on some machinery, including the one that
          says five is more than one. Showing the mechanism does not show the error.
        scores: { deontological: 0.9, certainty: 0.5, affect: 0.3 }
      - id: c
        label: >-
          It changes how confident you should be, nothing more. Knowing a reaction is
          fast and old is a reason to check it, not a reason to discard it.
        scores: { virtue: 0.8, certainty: -0.6, affect: 0.4 }
      - id: d
        label: >-
          It reframes the dispute as one between differently built brains rather than
          between true and false claims, and that is the honest conclusion to draw.
        scores: { relativist: 0.9, certainty: -0.7, scope: -0.3 }
  - id: q2
    prompt: >-
      A hospital has one dose of a drug and two wards that need it. The ward manager
      wants the decision made by a formula. The head nurse wants it made in the room,
      by whoever is standing at the bedside and can see the patients.
    options:
      - id: a
        label: >-
          Use the formula. Bedside judgement reliably favours the patient whose face
          is in front of you, and the other ward has faces too.
        scores: { consequentialist: 1.0, scope: 0.8, affect: -0.7 }
      - id: b
        label: >-
          Decide at the bedside. A formula cannot see that one of these patients has
          nobody coming, and that is not a sentimental detail.
        scores: { care: 1.0, virtue: 0.4, scope: -0.7, affect: 0.7 }
      - id: c
        label: >-
          Publish the rule in advance and follow it, so that the patients and their
          families know what standard they were held to before the case arose.
        scores: { contractarian: 0.9, deontological: 0.4, certainty: 0.4 }
      - id: d
        label: >-
          The formula sets the default and the person at the bedside may depart from
          it in writing. Neither system is trustworthy alone.
        scores: { virtue: 0.9, contractarian: 0.4, certainty: -0.5 }
  - id: q3
    prompt: >-
      Greene argues that intuitions are reliable for problems our species has faced
      for a long time — me against you, us within a tribe — and unreliable for problems
      that are new, like a policy affecting millions of strangers you will never meet.
    options:
      - id: a
        label: >-
          That is the right dividing line, and it means impartial calculation should
          govern anything at scale, whatever it feels like from inside.
        scores: { consequentialist: 1.0, scope: 0.9, affect: -0.6 }
      - id: b
        label: >-
          The dividing line is drawn to deliver the verdict he already held. Nothing
          in the science tells you which problems count as new.
        scores: { deontological: 0.7, virtue: 0.5, certainty: -0.4 }
      - id: c
        label: >-
          It gets the direction backwards. The judgements we have made for a hundred
          thousand years are the ones with a track record; the novel ones are guesses.
        scores: { virtue: 1.0, affect: 0.8, scope: -0.5 }
      - id: d
        label: >-
          At scale, what matters is not which faculty produced the judgement but
          whether the people affected could have accepted the rule you used.
        scores: { contractarian: 1.0, scope: 0.5, certainty: 0.3 }
  - id: q4
    prompt: >-
      Researchers find that people who most readily endorse sacrificing one to save
      five also score higher on measures of reduced concern for others. Suppose that
      finding holds. What does it do to the case for calculating?
    options:
      - id: a
        label: >-
          Nothing. Who gives the right answer and why they give it are different
          questions, and an argument is not refuted by its adherents.
        scores: { consequentialist: 0.9, certainty: 0.6, affect: -0.5 }
      - id: b
        label: >-
          A great deal. If the people most willing to do the arithmetic are the people
          least able to feel what it costs, the arithmetic is not measuring what it claims.
        scores: { virtue: 1.0, care: 0.4, affect: 0.8 }
      - id: c
        label: >-
          It shows the dilemmas are the wrong instrument. Willingness to push a
          stranger in a laboratory story predicts nothing about real generosity.
        scores: { relativist: 0.6, deontological: 0.5, certainty: -0.8 }
      - id: d
        label: >-
          It is a reason to keep the rules out of individual hands. Bind everyone to
          a standard rather than trusting anyone's private calculation.
        scores: { contractarian: 0.9, deontological: 0.5, authority: -0.3 }
outcomes:
  - id: override
    dominant: consequentialist
    label: Override the Alarm
    text: >-
      You take the dual-process story as a debunking argument and follow it where it
      leads. The gut is a fast device for local problems, the world now poses global
      ones, and the discomfort of acting against your instincts is the cost of getting
      the answer right. What you owe is a criterion. Greene's own claim that intuitions
      fail on unfamiliar problems does not say which problems are unfamiliar, and
      without that line the argument can be pointed at any intuition you already wanted
      to lose.
    base_rate: null
  - id: mechanism-is-not-error
    dominant: deontological
    label: The Mechanism Is Not the Error
    text: >-
      You hold that showing how a judgement was produced does not show that it is
      wrong, and you notice this cuts both ways — the sense that five outweighs one
      also has a neural story. Selim Berker's objection is yours. The price is that you
      have made neuroscience irrelevant to ethics in principle, which is a strong claim,
      and it leaves you needing an independent argument for the duties you are
      protecting.
    base_rate: null
  - id: two-systems-one-person
    dominant: virtue
    label: Two Systems, One Person
    text: >-
      You treat the fast reaction as trained perception rather than noise, and the slow
      calculation as a check rather than a master. That fits the finding that the people
      most fluent at sacrificial arithmetic are not obviously the people you would want
      making the decision. What it costs you is decidability. When the two systems
      disagree — which is precisely the case the theory is about — a settlement that says
      weigh both does not yet tell you which way to move.
    base_rate: null
  - id: the-standard
    dominant: contractarian
    label: The Standard Written Down
    text: >-
      Your response to a divided mind is to take the decision out of the individual head
      and put it in a rule that can be published, argued over and applied to everyone.
      This is the discipline that keeps triage honest and keeps a calculating temperament
      from freelancing. Its exposure is the case the rule did not anticipate, where the
      person at the bedside can see something the drafters could not.
    base_rate: null
  - id: the-bedside
    dominant: care
    label: What Only the Bedside Can See
    text: >-
      You think the fast system is not an alarm but an organ of perception, and that what
      it perceives is the particular person — this one, here, with nobody coming for her.
      Greene's own account concedes that the automatic settings are well tuned for exactly
      this range of problems. Your exposure is the ward you are not standing in, whose
      patients have faces you will never see and whose claim on the dose is no weaker for
      that.
    base_rate: null
  - id: different-brains
    dominant: relativist
    label: Different Brains, Different Verdicts
    text: >-
      You read the evidence as showing that moral disagreement is often architectural
      rather than logical, and you stop expecting arguments to close gaps that arguments
      did not open. That will make you a better predictor of how disputes actually go.
      It also makes it hard for you to say that a verdict is mistaken rather than merely
      differently produced, including in the cases where you plainly want to say it.
    base_rate: null
---

## What it means

Joshua Greene's dual-process theory is an attempt to explain why the same person gives
opposite answers to two versions of the same arithmetic — and to argue that the
explanation matters for which answer is correct.

The starting observation is Judith Jarvis Thomson's. Most people will divert a runaway
train onto a side track, killing one instead of five. Almost nobody will push a large
man off a footbridge into the train's path to achieve the same result. In 2001, in
*Science*, Greene and colleagues scanned people while they judged both kinds of case and
reported that the up-close, hands-on dilemmas produced more activity in regions
associated with emotional processing, while the impersonal ones produced more activity
in regions associated with working memory and abstract reasoning. A 2004 follow-up in
*Neuron* added that people who did give the sacrificial answer to the up-close cases took
longer and showed more activity in areas linked to cognitive control — as though they
were overriding something.

Greene's model, stated most fully in *Moral Tribes* (2013), casts the mind as a camera
with two settings. Point-and-shoot mode is fast, automatic, emotional, and produces the
characteristic deontological verdicts: do not use a person as a means, do not push. Manual
mode is slow, effortful and calculating, and produces the characteristic utilitarian
verdicts. Neither mode is a malfunction. The camera has both because both are useful.

The philosophical move — the one that made the theory famous and contested in equal
measure — is that the two modes are not equally trustworthy about the same range of
problems. Automatic settings were tuned by evolution and culture for recurring
situations, chiefly conflicts inside a group where everyone can see everyone. They were
not tuned for climate policy, pandemic triage or global poverty. Greene concludes that
when the fast system and the slow system disagree about a genuinely modern problem, the
slow system should win.

## What it suggests

If you accept the argument, a familiar move becomes available: you may treat your own
moral revulsion as data about your wiring rather than about the act. That licenses a
very demanding impartiality. If the reason you would save the child in front of you but
not the hundred children a transfer could save is that one of them is visible and the
others are statistics, then the reason is not a reason.

Two objections have to be reported honestly, because both have force.

The first is philosophical, and Selim Berker put it most sharply in "The Normative
Insignificance of Neuroscience" (2009). Every judgement has a mechanism. Showing that
the deontological verdict has an emotional substrate does not show it is false unless you
already have an argument that emotional substrates are unreliable — and the utilitarian
verdict has a substrate too. On Berker's reading the scanner adds nothing to arguments
that were already available on the page; the neuroscience is dressing.

The second is empirical, and it concerns the studies themselves. McGuire, Langdon,
Coltheart and Mackenzie reanalysed Greene's stimuli in 2009 and reported that the
personal/impersonal difference was driven by a subset of the dilemmas rather than
holding across the set. Kahane and colleagues argued in 2015 that the sacrificial
answer in these vignettes does not track impartial concern for the greater good at all —
people who give it are no more generous or cosmopolitan on other measures. Bartels and
Pizarro reported in 2011 that willingness to endorse the sacrificial answer correlated
with psychopathy and Machiavellianism scores. None of this shows the dual-process model
is false; Greene has replied to each. But the popular version — the scanner proved
deontology is just feelings — outruns the evidence considerably, and the small sample
sizes typical of early-2000s fMRI are now widely regarded as a reason for caution about
any single imaging result.

## The problem

You run the transplant list for a regional network, and the software has just been
replaced.

The old system was a committee. Three clinicians met on Thursday, read the files, and
argued. They knew the patients, or knew the doctors who knew them. They were also, an
audit found, measurably more likely to move a patient up the list after meeting the
family, and measurably slower to move up patients who lived more than two hours away.

The new system is a scoring model. It weighs expected years of life, waiting time and
tissue match, and it does not know who visited. In its first month it has produced two
decisions the committee would have reversed. One of them concerns a nineteen-year-old
whose mother has been in the corridor every day for five weeks, and who the model places
fourth.

The mother is asking you to explain the number. You believe the model is better on
average and worse in this room. You have to decide whether the feeling that it is worse
in this room is information you should act on, or exactly the bias the model was
installed to remove.

## The questions

**1. The debunking move.** Suppose your refusal to push the man runs through the same
fast machinery that fires when a stranger crowds you. Does learning that change what you
should do?

- Yes. A verdict from an alarm system tuned for close-quarters life has no authority over
  five lives. Override it.
- No. Every judgement runs on some machinery, including the one that says five beats one.
- It changes your confidence, nothing more. Fast and old is a reason to check, not to discard.
- It reframes the dispute as one between differently built brains rather than true and
  false claims.

**2. The formula or the bedside.** One dose, two wards. The manager wants a formula; the
head nurse wants the decision made in the room.

- Use the formula. Bedside judgement favours the face in front of you.
- Decide at the bedside. A formula cannot see that one patient has nobody coming.
- Publish the rule in advance and follow it, so patients know the standard beforehand.
- Formula as default, departures in writing. Neither system is trustworthy alone.

**3. Old problems and new ones.** Greene holds that intuitions are reliable for ancient
problems and unreliable for novel ones at scale.

- That is the right line, and impartial calculation should govern anything at scale.
- The line is drawn to deliver the verdict he already held.
- It gets the direction backwards. The ancient judgements have the track record.
- What matters at scale is whether those affected could accept the rule you used.

**4. Who gives the sacrificial answer.** Suppose the people most willing to sacrifice one
for five also score higher on reduced concern for others.

- Nothing follows. An argument is not refuted by its adherents.
- A great deal follows. The arithmetic is not measuring what it claims.
- It shows the dilemmas are the wrong instrument entirely.
- It is a reason to bind everyone to a public standard rather than trust private calculation.

## Reading your answer

**Override the Alarm.** You take the debunking argument seriously and act on it, which
makes you unusually willing to do the impartial thing when it feels wrong. What you owe
is a criterion for which intuitions count as obsolete. Without one, the argument becomes
a solvent you apply selectively to the intuitions you had already decided to lose.

**The Mechanism Is Not the Error.** You hold with Berker that a causal story about a
judgement is not an evaluation of it. This is clean and it is symmetrical — it protects
your intuitions and your opponent's equally. The cost is that you have declared an entire
science irrelevant to your subject, and you now need the duties you are protecting to
stand on arguments that owe nothing to how anyone feels.

**Two Systems, One Person.** You want both faculties in the room and neither in charge.
The empirical findings about who gives the sacrificial answer are on your side. What you
lack is a tie-breaker, and the case the theory is about is exactly the tie.

**The Standard Written Down.** You move the decision out of the individual and into a
published rule. This is the honest response to knowing your own judgement is unreliable
in ways you cannot detect from inside. It fails at the case nobody drafted for.

**What Only the Bedside Can See.** You treat the fast system as perception rather than
alarm, and what it perceives is the particular person in front of you. Greene concedes
the automatic settings are well tuned for close-range problems, so you are not arguing
against the science. You are exposed at the ward you are not standing in, whose patients
have a claim that is no weaker for being invisible to you.

**Different Brains, Different Verdicts.** You conclude that much moral disagreement is
architectural. You will predict the shape of disputes better than most. You will also
struggle to say that anyone is wrong rather than differently built.

## Sources

- Joshua D. Greene, R. Brian Sommerville, Leigh E. Nystrom, John M. Darley and Jonathan D.
  Cohen, "An fMRI investigation of emotional engagement in moral judgment", *Science*
  293(5537) (2001), 2105–2108.
- Joshua D. Greene, Leigh E. Nystrom, Andrew D. Engell, John M. Darley and Jonathan D.
  Cohen, "The neural bases of cognitive conflict and control in moral judgment", *Neuron*
  44(2) (2004), 389–400.
- Joshua Greene, *Moral Tribes: Emotion, Reason, and the Gap Between Us and Them*
  (Penguin Press, 2013) — the camera metaphor and the normative argument.
- Selim Berker, "The Normative Insignificance of Neuroscience", *Philosophy and Public
  Affairs* 37(4) (2009), 293–329 — the central philosophical objection.
- Michael McGuire, Robyn Langdon, Max Coltheart and Catriona Mackenzie, "A reanalysis of
  the personal/impersonal distinction in moral psychology research", *Journal of
  Experimental Social Psychology* 45(3) (2009), 577–580.
- Guy Kahane, Jim A. C. Everett, Brian D. Earp, Miguel Farias and Julian Savulescu,
  "'Utilitarian' judgments in sacrificial moral dilemmas do not reflect impartial concern
  for the greater good", *Cognition* 134 (2015), 193–209.
- Daniel M. Bartels and David A. Pizarro, "The mismeasure of morals: antisocial
  personality traits predict utilitarian responses to moral dilemmas", *Cognition* 121(1)
  (2011), 154–161.
