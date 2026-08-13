---
id: akrasia
title: Akrasia
category: paradox
tradition: aristotelianism
philosophers:
  - Aristotle
  - Socrates
era: "c. 340 BCE"
tags: [weakness-of-will, self-control, addiction, responsibility, desire]
sources:
  - author: Aristotle
    title: "Nicomachean Ethics, Book VII"
    published: "in The Complete Works of Aristotle, ed. Jonathan Barnes, Princeton"
  - author: Donald Davidson
    title: "How Is Weakness of the Will Possible?"
    published: "in Essays on Actions and Events, Oxford University Press"
    year: 1970
  - author: Richard Holton
    title: "Willing, Wanting, Waiting"
    published: Oxford University Press
    year: 2009
  - author: Harry Frankfurt
    title: "Freedom of the Will and the Concept of a Person"
    published: "The Journal of Philosophy 68(1), 5–20"
    year: 1971
questions:
  - id: q1
    prompt: >-
      Aristotle says the akratic person knows the right thing in the way a
      drunk man knows the verses of Empedocles — he can say them, but they
      are not doing anything in him. Is that an explanation or an excuse?
    options:
      - id: a
        label: >-
          An explanation, and a good one. Knowledge that is not live at the
          moment of acting is not doing the work knowledge is supposed to do.
        scores: { virtue: 0.9, certainty: 0.4, affect: 0.5 }
      - id: b
        label: >-
          An excuse. He knew, in the ordinary sense in which anyone knows
          anything, and the redescription is doing the work.
        scores: { existentialist: 0.9, deontological: 0.4, agency: 0.6 }
      - id: c
        label: >-
          Neither. Whether he knew is unanswerable and irrelevant; what
          matters is what happened and whether it happens again.
        scores: { consequentialist: 1.0, certainty: -0.4, affect: -0.6 }
      - id: d
        label: >-
          At the moment of acting he preferred the thing he did. Calling that
          a failure of knowledge is how we avoid saying what we want.
        scores: { egoist: 0.9, nihilist: 0.3 }
  - id: q2
    prompt: >-
      A colleague misses three deadlines in a row. He is not lazy, he is
      not lying about wanting to deliver, and he can describe exactly what
      he should have done each time. He is very sorry, each time, and means it.
    options:
      - id: a
        label: >-
          Sincerity about intentions is worth nothing at this point. Judge
          the pattern and manage the pattern.
        scores: { consequentialist: 1.0, certainty: 0.5, affect: -0.7 }
      - id: b
        label: >-
          Take the apologies seriously and build the structure with him —
          shorter cycles, external checks, someone he has to face on Fridays.
        scores: { care: 0.9, virtue: 0.4, scope: -0.5 }
      - id: c
        label: >-
          He has made a commitment to people relying on him and broken it
          three times. The interior story does not change what is owed.
        scores: { deontological: 0.9, contractarian: 0.4, certainty: 0.6 }
      - id: d
        label: >-
          The pattern is who he is. Character is what you do repeatedly, and
          he has told you what to expect more clearly than any promise could.
        scores: { virtue: 0.9, certainty: 0.5, affect: -0.3 }
  - id: q3
    prompt: >-
      Someone with a serious addiction relapses after eight months. He was
      not deceived about the risk, he was not compelled by anyone, and he
      would have told you that morning that he did not want to.
    options:
      - id: a
        label: >-
          He wanted it and did not want to want it. That gap is the whole
          phenomenon and it is not a failure of belief.
        scores: { virtue: 0.8, existentialist: 0.5, affect: 0.6 }
      - id: b
        label: >-
          Blame is beside the point. The question is what makes relapse less
          likely next time, and shame reliably makes it more likely.
        scores: { consequentialist: 1.0, care: 0.4, agency: -0.4 }
      - id: c
        label: >-
          He is responsible. Treating him as a case rather than a person is
          its own kind of contempt, and he would say so himself.
        scores: { deontological: 0.8, existentialist: 0.5, agency: 0.7 }
      - id: d
        label: >-
          Look at what the eight months cost him and what the hour gave him.
          People do not do things that offer them nothing.
        scores: { egoist: 0.8, consequentialist: 0.4, affect: -0.5 }
  - id: q4
    prompt: >-
      You have a rule for yourself that you keep breaking — the phone at
      night, the second drink, the thing you always say to your brother.
      You have broken it enough times to have data.
    options:
      - id: a
        label: >-
          Then stop treating it as a test of resolve and change the
          conditions. Willpower is a resource, not a character reference.
        scores: { consequentialist: 0.9, virtue: 0.4, certainty: -0.4 }
      - id: b
        label: >-
          Keep the rule and keep failing it. A standard you fall short of is
          still doing something a lowered standard would not.
        scores: { deontological: 0.9, virtue: 0.4, certainty: 0.7 }
      - id: c
        label: >-
          Ask honestly whether you want the rule or want to be the sort of
          person who has it. Those come apart more often than people admit.
        scores: { existentialist: 0.9, egoist: 0.4, affect: 0.5 }
      - id: d
        label: >-
          Ask who is on the other end of it. The rule about your brother is
          not about you, and that is the one to start with.
        scores: { care: 1.0, virtue: 0.4, scope: -0.7 }
outcomes:
  - id: knowledge-that-is-not-live
    dominant: virtue
    label: Knowing and Having
    text: >-
      You accept Aristotle's diagnosis: the akratic has the right belief in
      some sense and not in the sense that moves a person, and the difference
      between knowing a thing and having it available under pressure is real
      rather than verbal. This lines up with how skills and habits actually
      work. Its risk is that the distinction can absorb any counterexample —
      whenever someone acts badly you can say the knowledge was not live, and
      a claim nothing could contradict has stopped explaining anything.
    base_rate: null
  - id: you-did-it
    dominant: existentialist
    label: You Did It Anyway
    text: >-
      You resist every redescription that turns the moment of acting into
      something that happened to the agent. He saw the better and took the
      worse, and that is not a puzzle to be dissolved but the basic fact about
      people. This keeps responsibility where most of us, on reflection, want
      it. What it owes is a mechanism: if reason is not steering, say what is,
      without making the choice a brute event that simply occurs inside
      someone for no reason at all.
    base_rate: null
  - id: change-the-conditions
    dominant: consequentialist
    label: Change the Conditions
    text: >-
      You are impatient with the interior question and interested in what
      reduces the frequency: structure, feedback, shorter cycles, removing the
      thing from the house. This is almost certainly the most effective
      answer, and the evidence on self-control favours situation design over
      exhortation. Its exposure is that it treats a person as a system to be
      tuned, and some of them will tell you — correctly — that being managed
      rather than addressed is its own kind of insult.
    base_rate: null
  - id: what-was-promised
    dominant: deontological
    label: What Was Promised Is Owed
    text: >-
      You hold that the internal story does not alter the obligation: three
      missed deadlines are three broken commitments to people who arranged
      their work around them, whatever was happening inside. This protects
      everyone downstream of an unreliable person, which is a group that gets
      very little attention in discussions of weakness of will. Its cost
      arrives with the addict, where holding the line and holding the person
      start to come apart, and you have to say which you are doing.
    base_rate: null
  - id: the-second-order-want
    dominant: egoist
    label: He Wanted It
    text: >-
      You read akrasia as a preference people would rather not own. At the
      moment of acting, the drink was what he wanted; the wanting-not-to-want
      is real but it is a second desire, not a higher authority. This is
      clarifying and it strips out a lot of comfortable fiction. What it
      cannot easily accommodate is the phenomenon Frankfurt described — that
      what a person cares about *wanting* seems to be more them than what they
      happen to want — and most people, including you, act as if that is true.
    base_rate: null
  - id: who-is-on-the-other-end
    dominant: care
    label: Who Is On the Other End
    text: >-
      You move the question off the will and onto the people the failure lands
      on: the colleague covering, the family waiting, the brother on the other
      end of the thing you always say. This is the least self-absorbed way to
      think about self-control, and it turns an abstract puzzle into a
      specific debt. Its limit is that it gives you no purchase on the private
      failure that harms nobody else, and those are the ones that make up most
      of a person's actual struggle with themselves.
    base_rate: null
---

## What it means

*Akrasia* — usually translated as incontinence or weakness of will — is acting against
your own better judgement. You believe you should not, and you do. Everybody has done
it, which is exactly what makes it a philosophical problem, because on the most natural
account of action it cannot happen.

Socrates denied that it does. If you genuinely judge that a course is worse for you, you
will not take it; anyone who takes it has failed to see clearly, so what looks like
weakness is really ignorance. Aristotle, in Book VII of the *Nicomachean Ethics*, thinks
this is plainly false to experience and sets out to explain how akrasia is possible
without abandoning the idea that people act on their judgements.

His answer turns on the way knowledge can be present without being operative. He
distinguishes having knowledge from using it, and offers analogies: a man asleep, a man
mad, a man drunk. Someone drunk can recite the verses of Empedocles without in any sense
understanding them at that moment. Aristotle also analyses action as proceeding from a
kind of syllogism — a general premise ("nothing sweet should be eaten now"), a
particular premise ("this is sweet"), and a conclusion which *is* the action. The
akratic, he says, has the general premise but under the influence of appetite fails to
bring the particular one to bear, or has it only in the way the drunk has Empedocles.
He also separates the akratic, who acts against his own principle and regrets it, from
the *akolastos*, the self-indulgent man, who has no such principle and does not regret
anything. The first is curable; the second is not, because he does not think anything is
wrong.

Donald Davidson revived the problem in 1970, arguing that akrasia is genuinely possible
and genuinely irrational: the agent makes an all-things-considered judgement that one
action is better, and then acts on a partial judgement instead. What he cannot fully
explain, and says so, is why.

## What it suggests

If Aristotle is right, then the practical question is never simply how to know better.
It is how to arrange things so that what you know is *available* at the moment it is
needed — which is a different problem and has different solutions. Precommitment,
routine, removing the option, involving another person, deciding while calm what you
will do while agitated: these are all technologies for making the general premise
operative when appetite is loud. Richard Holton's work on the will suggests that
resolutions function as a distinct psychological kind, and that the skill of not
reconsidering them in the moment — of refusing to reopen the question when a good
argument for reopening it arrives — is closer to what we mean by strength of will than
any amount of belief.

It also has a sharp implication for how we treat other people's failures. If akrasia is
real, then a person who repeatedly fails to do what they sincerely intend is neither a
liar nor simply wicked, and both of those descriptions will mislead you about what to
do next. But if akrasia is *not* real — if Socrates or the egoist is right, and what
looks like weakness is a preference the person would rather not admit to — then the
apologies are noise, and taking them at face value is how people arrange to be
disappointed repeatedly by the same person.

The strongest objection to Aristotle's solution is that it is a redescription. Whenever
someone acts against their judgement, we can say the knowledge was not fully operative
— and since nothing could count against that claim, it explains everything and predicts
nothing. Harry Frankfurt's approach avoids the problem differently, by locating the self
not in beliefs but in second-order desires: what makes an addict's craving alien to him
is not that he lacks knowledge but that he does not want to be moved by it. That is a
better account of what the addict is experiencing. It does not, on its own, tell you why
the first-order desire wins.

## The problem

Every year, for six years, Callum has told his sister he will come to their mother's
birthday, and for four of those six he has not come.

He is not lying when he says it. He books the train. Twice he has been at the station.
What happens is that the day arrives and something in him produces a work reason, and
the work reason is always real — that is the part he cannot explain to anyone — and by
the time he has finished evaluating it, the train has gone, and then there is a phone
call in which his sister is very calm, which is worse than if she shouted.

He knows what is happening. He has known for years. He can describe the mechanism more
accurately than anyone else could: that he finds his mother's house unbearable for
reasons he could list, that the unbearableness does not feel like a reason on Tuesday
when he books the ticket and feels like the only fact in the world on Saturday morning,
and that the work emergency is not invented, it is selected.

This year his sister has said something new. She has said that she has stopped
believing him, that she would rather he said no in March than yes in March and no in
September, and that she does not think he is a bad person but she has started to plan
around him the way you plan around weather.

Callum has three months. He can promise again and mean it again, which is what he has
always done. He can decline in advance, which is honest and which he experiences as
giving up on being a certain kind of son. Or he can do something with the three months
that is not about resolve at all — tell his sister to book the ticket, have someone
drive him, arrange the work so there is nothing to be selected.

What he cannot decide is whether the third option is wisdom or an admission that the
person who books the ticket in March is not really in charge of the person who wakes up
in September, and that he has been signing his name to promises made by someone who
does not turn up.

## The questions

**1. The drunk reciting Empedocles.** Aristotle says the akratic has the knowledge the
way a drunk has the verses. Explanation or excuse?

- An explanation. Knowledge that is not live is not doing knowledge's work.
- An excuse. He knew, in the ordinary sense, and the redescription is doing the work.
- Neither. Unanswerable and irrelevant; what matters is whether it happens again.
- He preferred what he did. Calling it a failure of knowledge avoids saying what we want.

**2. Three missed deadlines.** Not lazy, not lying, sorry each time and means it.

- Sincerity is worth nothing now. Judge the pattern.
- Take the apologies seriously and build structure with him.
- Three commitments broken to people who relied on them. The interior story is not the point.
- The pattern is who he is. Character is what you do repeatedly.

**3. The relapse** after eight months. Not deceived, not compelled, did not want to.

- He wanted it and did not want to want it. That gap is the phenomenon.
- Blame is beside the point; shame makes relapse more likely, not less.
- He is responsible. Treating him as a case is its own contempt.
- Look at what the eight months cost and the hour gave. Nothing is done for nothing.

**4. Your own broken rule** — the phone, the second drink, the thing you say to your
brother. You have enough data now.

- Stop treating it as a test of resolve and change the conditions.
- Keep the rule and keep failing it. A standard you fall short of still does something.
- Ask whether you want the rule or want to be the sort of person who has it.
- Ask who is on the other end. Start with the one about your brother.

## Reading your answer

**Knowing and Having.** You accept that there is a real difference between knowing
something and having it available under pressure, and that the akratic is on the wrong
side of it. This matches how habits and skills actually behave. The risk is that the
distinction absorbs everything: any bad action can be described as knowledge that was
not live, and a claim nothing could falsify has stopped doing explanatory work.

**You Did It Anyway.** You refuse the redescriptions that turn the moment of acting into
something that happened to the person. He saw the better and took the worse, and that is
the basic fact rather than a puzzle. This keeps responsibility where most people on
reflection want it. You owe a mechanism — if reason is not steering, say what is,
without making the choice an uncaused event inside someone.

**Change the Conditions.** You are uninterested in the interior and focused on what
reduces frequency. This is probably the most effective answer available, and the
evidence on self-control favours designing the situation over exhorting the person. Its
exposure is that it treats someone as a system to be tuned, and some of them will tell
you, fairly, that being managed instead of addressed is its own insult.

**What Was Promised Is Owed.** You hold that the internal story does not change the
obligation, which protects everyone downstream of an unreliable person — a group that
gets remarkably little attention in this literature. The cost arrives with the addict,
where holding the line and holding the person come apart, and you have to be able to say
which one you are doing.

**He Wanted It.** You read weakness as a preference people would rather not own, and
that strips out a lot of comfortable fiction. What it struggles with is Frankfurt's
observation that what a person wants to want seems more truly theirs than what they
happen to want — and you probably act as though that is true about yourself, whatever
you say about the addict.

**Who Is On the Other End.** You move the question off the will and onto whoever is
absorbing the failure. This is the least self-absorbed way to think about self-control
and it converts a puzzle into a debt. Its limit is the private failure that harms nobody
else — which is most of what anyone actually struggles with, and about which you have
nothing to say.

## Sources

- Aristotle, *Nicomachean Ethics*, Book VII (1145a–1152a), in *The Complete Works of
  Aristotle*, ed. Jonathan Barnes (Princeton University Press). The drunk and Empedocles,
  the practical syllogism, and the distinction from self-indulgence.
- Plato, *Protagoras*, for the Socratic denial that akrasia is possible.
- Donald Davidson, "How Is Weakness of the Will Possible?" (1970), in *Essays on Actions
  and Events* (Oxford University Press, 1980).
- Harry Frankfurt, "Freedom of the Will and the Concept of a Person", *The Journal of
  Philosophy* 68(1) (1971), 5–20. Second-order desires and the unwilling addict.
- Richard Holton, *Willing, Wanting, Waiting* (Oxford University Press, 2009), on
  resolutions and the skill of not reconsidering.
