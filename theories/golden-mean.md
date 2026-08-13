---
id: golden-mean
title: The Golden Mean
category: principle
tradition: aristotelianism
philosophers:
  - Aristotle
era: "c. 340 BCE"
tags: [virtue, moderation, courage, anger, judgement]
sources:
  - author: Aristotle
    title: "Nicomachean Ethics, Book II"
    published: "in The Complete Works of Aristotle, ed. Jonathan Barnes, Princeton"
  - author: Rosalind Hursthouse
    title: On Virtue Ethics
    published: Oxford University Press
    year: 1999
  - author: J. O. Urmson
    title: "Aristotle's Doctrine of the Mean"
    published: "American Philosophical Quarterly 10(3), 223–230"
    year: 1973
  - author: Bernard Williams
    title: Ethics and the Limits of Philosophy
    published: Harvard University Press
    year: 1985
questions:
  - id: q1
    prompt: >-
      A colleague has taken credit for your work in front of the executive
      team. Aristotle says the virtue here is a mean: not the rage of the
      irascible, not the meekness of the man who feels nothing, but anger at
      the right person, to the right degree, at the right time.
    options:
      - id: a
        label: >-
          That is exactly right, and the whole difficulty is that no rule
          tells you where the right degree is. You learn it or you don't.
        scores: { virtue: 1.0, certainty: -0.5, affect: 0.6 }
      - id: b
        label: >-
          Skip the calibration. Ask what response will actually fix the
          situation and protect the next person he does it to.
        scores: { consequentialist: 1.0, scope: 0.5 }
      - id: c
        label: >-
          There is a rule: say plainly and once what happened. Truth-telling
          is not a quantity to be dosed.
        scores: { deontological: 0.9, certainty: 0.7, authority: 0.5 }
      - id: d
        label: >-
          Right degree according to whom? Every workplace has a different
          setting for how much anger is permissible, and it is not neutral.
        scores: { relativist: 0.9, contractarian: 0.3, authority: 0.5 }
  - id: q2
    prompt: >-
      Aristotle insists that some things admit no mean — spite, envy, theft,
      murder. There is no correct amount of them. Is he entitled to that
      exception, given that his whole method is calibration?
    options:
      - id: a
        label: >-
          Yes, and it shows the doctrine was never really about moderation.
          It was about hitting the target, which is sometimes zero.
        scores: { virtue: 0.9, deontological: 0.4, certainty: 0.5 }
      - id: b
        label: >-
          No. Once you allow absolute prohibitions you are doing rule-based
          ethics and should say so rather than smuggling it in.
        scores: { deontological: 1.0, certainty: 0.8 }
      - id: c
        label: >-
          The exceptions are the leftovers of his own society's list, which
          is why they look obvious to him and arbitrary from outside.
        scores: { relativist: 0.9, certainty: -0.6 }
      - id: d
        label: >-
          Take it practically. Some acts have no version that leaves things
          better, and calling them off the scale saves everyone time.
        scores: { consequentialist: 0.9, contractarian: 0.4, scope: 0.4 }
  - id: q3
    prompt: >-
      Your closest friend is about to marry someone you think will make her
      unhappy. Aristotle's mean between blurting and silence is frankness at
      the right moment, in the right measure, to the right person.
    options:
      - id: a
        label: >-
          Say it once, privately, early, and then be entirely at her wedding.
          The measure is the whole art here.
        scores: { virtue: 1.0, care: 0.4, affect: 0.6 }
      - id: b
        label: >-
          Say nothing. It is her life, she has the same information you do,
          and your judgement of her fiancé is not a fact.
        scores: { contractarian: 0.9, deontological: 0.4, authority: 0.4 }
      - id: c
        label: >-
          Say it, keep saying it, and accept the cost to yourself. That is
          what the friendship is for and there is no elegant version.
        scores: { care: 1.0, virtue: 0.4, scope: -0.7 }
      - id: d
        label: >-
          Work out whether saying anything has ever changed such a decision.
          If not, spend the capital on being useful afterwards.
        scores: { consequentialist: 0.9, care: 0.4, affect: -0.5 }
  - id: q4
    prompt: >-
      Aristotle says we learn the mean by imitating people who have it, and
      that a well-brought-up person can perceive the right response the way
      a trained eye perceives a good likeness. Is that moral education or
      moral conditioning?
    options:
      - id: a
        label: >-
          Education. There is no other way anyone has ever learned a skill,
          and moral judgement is a skill before it is a theory.
        scores: { virtue: 1.0, authority: -0.3, affect: 0.6 }
      - id: b
        label: >-
          Conditioning, and it shows: what it reliably transmits is the
          moral confidence of whoever was doing the raising.
        scores: { relativist: 0.9, existentialist: 0.4, authority: 0.7 }
      - id: c
        label: >-
          It is why explicit rules matter. A person can check a rule against
          an argument; they cannot check an inherited instinct against one.
        scores: { deontological: 0.9, certainty: 0.6, affect: -0.7 }
      - id: d
        label: >-
          Whatever it is, judge it by output. Do the people trained this way
          behave better than the people handed a rulebook?
        scores: { consequentialist: 1.0, certainty: -0.4 }
outcomes:
  - id: the-trained-judgement
    dominant: virtue
    label: The Mean Is a Skill
    text: >-
      You accept Aristotle's central claim: that the right response is a
      matter of hitting a target no formula locates, and that the capacity to
      hit it is trained rather than deduced. This is true to how competent
      people actually operate — nobody good at difficult conversations is
      consulting a principle. What it costs you is checkability. A skill you
      cannot state cannot be argued with, and the person who has quietly
      calibrated toward their own convenience feels, from the inside, exactly
      like the person who has calibrated well.
    base_rate: null
  - id: the-stated-rule
    dominant: deontological
    label: Say What the Rule Is
    text: >-
      You want the standard written down, because a rule can be examined,
      taught, and used against the person who invented it. Aristotle's own
      list of things that admit no mean is your evidence: even he could not do
      it all by calibration. The price is the cases where the rule keeps its
      shape and the situation does not — where saying the true thing plainly
      and once is exactly the wrong thing to do to someone, and you knew it,
      and the rule did not.
    base_rate: null
  - id: whose-mean
    dominant: relativist
    label: Whose Middle Is It
    text: >-
      You notice that the mean is measured from somewhere, and that the
      somewhere is a particular society's settings for how much anger,
      frankness or ambition is seemly. Aristotle's own exceptions look
      suspiciously like his city's list. This is a real historical point. Its
      difficulty is that you still have to act on Thursday, and "there is no
      neutral setting" does not tell you how loudly to speak to the colleague
      who stole your work.
    base_rate: null
  - id: measure-the-result
    dominant: consequentialist
    label: Measure the Result
    text: >-
      You are impatient with calibration talk and want to know what a response
      accomplishes — for the situation, the next person, the friend who is
      going to marry him anyway. This cuts through a great deal of
      self-admiring moral fine-tuning. Its exposure is that you have no account
      of the person doing the accomplishing, and Aristotle's whole point was
      that outcomes are produced by people, whose reliability is not itself an
      outcome you can aim at directly.
    base_rate: null
  - id: her-life-her-call
    dominant: contractarian
    label: Not Yours to Dose
    text: >-
      Where the doctrine asks how much to intervene, your instinct is to ask
      whether intervening is yours at all — and often to conclude that an adult
      with the same information gets to make her own mistake. This respects
      people in a way the calibration framing quietly does not, since it treats
      them as the object of your correctly-measured response. It is weakest
      with the people closest to you, where standing back on principle can be
      indistinguishable from not wanting the argument.
    base_rate: null
  - id: what-the-friendship-is-for
    dominant: care
    label: There Is No Elegant Version
    text: >-
      You think the search for the well-judged amount is often a way of
      protecting yourself, and that some relationships require you to say the
      thing badly, repeatedly, and take the damage. That is a real objection to
      Aristotle, whose good man is conspicuously never humiliated. What it owes
      you is a limit: love is not a licence, and the person who keeps saying it
      because the friendship demands it is sometimes just someone who cannot
      let a judgement go.
    base_rate: null
---

## What it means

In Book II of the *Nicomachean Ethics*, Aristotle proposes that each virtue of character
sits between two failings, one of excess and one of deficiency. Courage lies between
recklessness and cowardice. Generosity lies between extravagance and meanness. Proper
pride lies between vanity and a kind of self-abasement he thinks is a real defect rather
than a modesty. Even the ordinary business of being funny has a mean, between the buffoon
and the person with no wit at all.

Two things about this are constantly misremembered. The first is that the mean is not
the midpoint. Aristotle says explicitly that it is a mean "relative to us" — the right
amount of food for a wrestler is not the right amount for a beginner, and the right
amount of fear at a border crossing is not the right amount at a dinner party. Courage
in a soldier and courage in a witness look nothing alike. The doctrine is not a
recommendation of moderation; it is a claim that virtues are *targets*, and that you can
miss a target in more than one direction.

The second is that the calibration runs over several dimensions at once. Aristotle's
formula is that the person of practical wisdom feels and acts "at the right times, about
the right things, towards the right people, for the right end, and in the right way."
Anger is his standing example: anyone can get angry, that is easy, but to be angry with
the right person, to the right degree, at the right time, for the right purpose and in
the right way is not easy, and is not something everyone can do.

And he permits exceptions that sit awkwardly with the whole method. Some things, he
says, are bad in themselves and admit of no mean at all — spite, shamelessness, envy,
adultery, theft, murder. There is no correct quantity of murder. J. O. Urmson argued
that this shows the doctrine was never really about amounts in the first place, but
about correctness: the mean is simply the right response, and "excess" and "deficiency"
are the two ways of getting it wrong.

## What it suggests

If Aristotle is right, moral competence is a skill, and skills are acquired the way
skills are acquired: by practice, under correction, by watching people who already have
them. That changes what moral improvement looks like. It is not mainly a matter of
adopting better principles. It is a matter of noticing more, reacting proportionately,
and having done it enough times that the reaction arrives without deliberation. This is
why Aristotle thinks character is built by habituation and why he thinks it is very hard
to fix in an adult who was badly brought up.

It also explains a fact about moral life that rule-based theories struggle with, which
is that the same action can be right and wrong depending on quantity. Speaking up is a
virtue and also, at a certain volume and frequency, a way of making every room about
yourself. Loyalty is a virtue and also, past a point, complicity. Almost nothing in
practical life is good without a dial.

The strongest objection is that the doctrine does no work. Told to feel anger "to the
right degree", you have been told nothing you did not already know — the whole question
was what degree is right, and the formula answers it by naming it "right". Kant's
tradition presses this hard: an ethics that cannot state its standard cannot be taught,
cannot be checked, and cannot be used to criticise the very upbringing that installed it.
Bernard Williams, who was sympathetic to Aristotle in most respects, still noted the
difficulty that the doctrine's confidence in a well-brought-up person's perceptions
depends on a settled society agreeing about what a good upbringing is.

There is a related worry, sharper for us than for Aristotle. If the mean is relative to
us and learned from those around us, then a society calibrated wrongly produces people
who perceive its calibration as obvious. Aristotle's own list of virtues includes some
that look to us like the manners of a leisured Athenian gentleman, and he could not see
that from where he stood. Neither, presumably, can we.

## The problem

Reza has been asked to give the reference.

Katie worked for him for three years. She is applying to run a small charity — twelve
staff, mostly working with families in crisis — and the trustees have sent a form with
one open box at the end and a phone number for "any further remarks".

The facts are these. She is the most capable person he has managed. She raised more
money than the two before her combined and she is genuinely good with the people the
charity exists for; he has watched her sit with a woman for two hours in a corridor and
do it well. And twice in three years she has behaved badly under pressure with junior
staff — once with a placement student who left the sector afterwards, and once in a
meeting Reza was in, where she said something to an administrator that he still thinks
about. Both times she apologised properly and, as far as he can tell, meant it. There
was no formal process. It is not on any record. Nobody has asked him a question that
requires him to mention it.

The written box is easy to fill honestly. It is the phone call he is turning over.

Say nothing and he has handed twelve people a manager who may do it again, and he will
know he chose the comfortable path and called it discretion. Say it all — the student,
the meeting, his own unease — and the description will be true and the impression will
be false, because a phone call about a candidate is not read as data, it is read as a
warning, and she will not get the job on the strength of two incidents in three years
that she has, by every visible sign, worked on.

There is a right amount to say. Reza is fairly sure it exists. He has been sitting with
the form for two days and cannot find it, and he is aware that the longer he takes, the
more attractive the version that costs him nothing is starting to look.

## The questions

**1. The stolen credit.** Anger at the right person, to the right degree, at the right
time — is that the answer?

- Yes, and the whole difficulty is that no rule locates the right degree.
- Skip the calibration. Ask what will fix it and protect the next person.
- There is a rule: say plainly and once what happened.
- Right degree according to whom? Every workplace sets that dial differently.

**2. The things with no mean.** Aristotle exempts spite, theft, murder. Is he entitled
to the exception?

- Yes, and it shows the doctrine was about hitting the target, sometimes at zero.
- No. That is rule-based ethics, and he should say so.
- The exceptions are his own society's list, which is why they look obvious to him.
- Practically, some acts have no better version. Calling them off the scale saves time.

**3. The friend's wedding.** Frankness at the right moment, in the right measure.

- Say it once, privately, early, then be entirely at her wedding.
- Say nothing. She has the same information and it is her life.
- Say it, keep saying it, take the cost. That is what the friendship is for.
- Ask whether saying anything ever changes such a decision, and spend the capital later.

**4. Learning by imitation.** A well-raised person perceives the right response like a
trained eye. Education or conditioning?

- Education. That is how every skill has ever been learned.
- Conditioning — what it transmits is the confidence of whoever did the raising.
- This is why explicit rules matter: you can check a rule, not an instinct.
- Judge by output. Do people trained this way behave better than people with rulebooks?

## Reading your answer

**The Mean Is a Skill.** You hold that the right response is a target no formula locates
and that hitting it is trained. This is true to how competent people actually work —
nobody good at a hard conversation is consulting a principle. It costs you
checkability. A skill you cannot state cannot be argued with, and someone who has
quietly calibrated toward their own convenience feels exactly like someone who has
calibrated well.

**Say What the Rule Is.** You want the standard written down, because a written rule can
be taught and turned back on whoever wrote it. Aristotle's own exceptions are your best
evidence that even he could not do it all by feel. The price shows up where the rule
keeps its shape and the situation does not — where saying the true thing plainly and
once was exactly the wrong thing to do to a person, and you could tell, and the rule
could not.

**Whose Middle Is It.** You notice the mean is measured from somewhere, and that the
somewhere is a society's settings on anger, frankness and ambition. Aristotle's list of
virtues is a decent exhibit. The difficulty is Thursday: knowing there is no neutral
setting does not tell you how loudly to speak to the colleague who stole your work, and
you will speak at some volume.

**Measure the Result.** You want to know what a response accomplishes, which cuts
through a lot of self-admiring fine-tuning about tone. What you lack is any account of
the person doing the accomplishing. Aristotle's point was that results are produced by
people whose reliability is not itself a result you can aim at, and you have to get that
reliability from somewhere.

**Not Yours to Dose.** Where the doctrine asks how much to intervene, you ask whether
intervening is yours at all. This respects people in a way the calibration framing does
not, since that framing treats them as the object of your well-measured response. It is
weakest with those closest to you, where principled restraint is hard to tell apart from
not wanting the argument.

**There Is No Elegant Version.** You suspect the search for the well-judged amount is
often self-protection, and that some relationships require you to say the thing badly
and repeatedly and take the damage. That lands on Aristotle, whose good man is never
humiliated. You owe a limit: love is not a licence, and someone who keeps saying it
because the friendship demands it is sometimes just someone who cannot drop a judgement.

## Sources

- Aristotle, *Nicomachean Ethics*, Book II (especially 1106a–1109b), in *The Complete
  Works of Aristotle*, ed. Jonathan Barnes (Princeton University Press). The doctrine of
  the mean, the anger passage, and the acts that admit no mean.
- J. O. Urmson, "Aristotle's Doctrine of the Mean", *American Philosophical Quarterly*
  10(3) (1973), 223–230. The argument that the mean is correctness, not moderation.
- Rosalind Hursthouse, *On Virtue Ethics* (Oxford University Press, 1999), for the reply
  that virtue ethics can give action-guidance after all.
- Bernard Williams, *Ethics and the Limits of Philosophy* (Harvard University Press,
  1985), on what an ethics of character presupposes about the society that trains it.
