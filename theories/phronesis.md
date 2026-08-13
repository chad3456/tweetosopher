---
id: phronesis
title: Phronesis
category: term
tradition: aristotelianism
philosophers:
  - Aristotle
era: "c. 340 BCE"
tags: [practical-wisdom, judgement, experience, rules, discretion]
sources:
  - author: Aristotle
    title: "Nicomachean Ethics, Book VI"
    published: "in The Complete Works of Aristotle, ed. Jonathan Barnes, Princeton"
  - author: Hans-Georg Gadamer
    title: Truth and Method
    published: "trans. Joel Weinsheimer and Donald G. Marshall, Continuum"
    year: 1960
  - author: Barry Schwartz and Kenneth Sharpe
    title: "Practical Wisdom: The Right Way to Do the Right Thing"
    published: Riverhead
    year: 2010
  - author: John McDowell
    title: "Virtue and Reason"
    published: "The Monist 62(3), 331–350"
    year: 1979
questions:
  - id: q1
    prompt: >-
      A hospital's sepsis protocol says start antibiotics within an hour of
      the trigger criteria. A registrar with fourteen years on the ward is
      certain this particular patient does not have sepsis and that the
      antibiotics will harm her. The protocol exists because clinicians'
      certainty has killed people before.
    options:
      - id: a
        label: >-
          Follow her judgement and document why. Protocols encode the average
          case; the patient in front of her is not the average case.
        scores: { virtue: 1.0, certainty: -0.4, authority: -0.6 }
      - id: b
        label: >-
          Follow the protocol. It was written precisely because experienced
          people are confident, and confidence is not accuracy.
        scores: { deontological: 0.9, consequentialist: 0.4, authority: 0.8 }
      - id: c
        label: >-
          Look at the outcome data for deviations on this protocol. If
          override cases do worse on average, that settles it.
        scores: { consequentialist: 1.0, scope: 0.5, affect: -0.6 }
      - id: d
        label: >-
          The protocol should have an override with a name attached to it,
          reviewed afterwards. Discretion needs to be accountable, not banned.
        scores: { contractarian: 1.0, virtue: 0.4, authority: 0.4 }
  - id: q2
    prompt: >-
      Aristotle says the young can be brilliant at mathematics and cannot be
      practically wise, because phronesis requires experience of particulars
      and experience takes time. A twenty-four-year-old thinks this is a way
      of telling her to wait her turn.
    options:
      - id: a
        label: >-
          He is right. There is knowledge that only arrives from having been
          wrong repeatedly about real people, and it cannot be shortcut.
        scores: { virtue: 1.0, certainty: 0.5, authority: -0.3 }
      - id: b
        label: >-
          She is right. "Wisdom comes with age" is how every incumbent has
          always described the advantage of already being in the room.
        scores: { relativist: 0.8, contractarian: 0.4, authority: 0.8 }
      - id: c
        label: >-
          Experience without feedback produces confidence, not wisdom. What
          matters is whether you found out you were wrong, not how long it took.
        scores: { consequentialist: 0.9, virtue: 0.4, certainty: -0.5 }
      - id: d
        label: >-
          It depends what she has been doing. Someone who has cared for a
          dying parent at twenty-four knows things a comfortable fifty
          -year-old does not.
        scores: { care: 0.9, virtue: 0.4, scope: -0.4 }
  - id: q3
    prompt: >-
      A caseworker can see that a family will be destroyed by the eligibility
      rule she is required to apply. She has discretion in how she records
      their circumstances, and a plausible recording would qualify them.
    options:
      - id: a
        label: >-
          Record it their way. The rule's purpose is to help families like
          this one, and serving the purpose is what judgement is for.
        scores: { virtue: 0.9, care: 0.5, authority: -0.7 }
      - id: b
        label: >-
          Record it accurately and escalate hard. Once caseworkers write
          fiction for the deserving, the system stops meaning anything.
        scores: { deontological: 1.0, contractarian: 0.4, certainty: 0.6 }
      - id: c
        label: >-
          Record it their way, and understand clearly that you are lying and
          that the next family will get whoever is on duty instead of a rule.
        scores: { care: 1.0, consequentialist: 0.4, scope: -0.8 }
      - id: d
        label: >-
          The question is which practice produces fewer destroyed families
          over a thousand cases, not what this one deserves.
        scores: { consequentialist: 1.0, scope: 0.8, affect: -0.5 }
  - id: q4
    prompt: >-
      Aristotle distinguishes phronesis from mere cleverness — deinotes —
      which is skill at hitting whatever target you aim at. He says the
      clever man without virtue is a scoundrel, and that only the good person
      can be practically wise. Is that a real distinction or a definition?
    options:
      - id: a
        label: >-
          Real. Perception is shaped by what you care about; a person who
          wants the wrong things does not see the situation accurately.
        scores: { virtue: 1.0, affect: 0.6, certainty: 0.5 }
      - id: b
        label: >-
          A definition, and a self-serving one. Plenty of people read
          situations superbly and use it for themselves.
        scores: { egoist: 0.9, nihilist: 0.4, affect: -0.5 }
      - id: c
        label: >-
          The distinction should be tested, not stipulated: does moral
          concern actually improve judgement, or just its packaging?
        scores: { consequentialist: 0.9, certainty: -0.6 }
      - id: d
        label: >-
          Whose targets count as good is the whole question, and Aristotle
          answers it by assuming his own answer.
        scores: { relativist: 0.9, existentialist: 0.4, authority: 0.6 }
outcomes:
  - id: the-eye-of-the-practised
    dominant: virtue
    label: The Practised Eye
    text: >-
      You trust judgement over specification: rules are compressed experience,
      and the person with the experience can sometimes see what the
      compression lost. This is how skilled practitioners in every field
      actually behave, and it is the reason organisations that eliminate
      discretion entirely produce absurdities. Its cost is that judgement is
      unauditable from outside. The doctor who deviated correctly and the
      doctor who deviated out of ego file the same note, and you have offered
      no way to tell them apart before the outcome arrives.
    base_rate: null
  - id: the-rule-holds
    dominant: deontological
    label: The Rule Was Written For a Reason
    text: >-
      You hold that a standard which bends to the judgement of whoever is on
      shift is not a standard, and you notice that protocols usually exist
      because confident people got it wrong. This protects the people who have
      no way of knowing whether the professional in front of them is the wise
      one or the reckless one. What it costs is the case the rule did not
      anticipate — which is not rare, and which the rule will handle badly
      while you watch it happen.
    base_rate: null
  - id: test-the-judgement
    dominant: consequentialist
    label: Check Whether It Works
    text: >-
      You want the argument settled empirically: do overrides improve outcomes,
      does experience track accuracy, does moral concern sharpen perception or
      merely dress it. This is the right question to ask about a claim that has
      been asserted for two thousand years and tested rarely. Its exposure is
      that many of the judgements at issue are not the kind that generate
      comparable data, and waiting for evidence is itself a decision that gets
      made in the meantime by someone.
    base_rate: null
  - id: accountable-discretion
    dominant: contractarian
    label: Discretion With a Name On It
    text: >-
      Rather than choosing between the rule and the judgement, you want
      judgement made visible: a documented override, a named decision-maker, a
      review afterwards. This is how most functioning institutions actually
      resolve the problem, and it takes the strongest point from each side. Its
      difficulty is that recorded discretion becomes defensive discretion —
      once a deviation is a thing you may be asked to justify, people stop
      making the ones that would be hardest to explain and easiest to defend.
    base_rate: null
  - id: this-family
    dominant: care
    label: This Family, In Front of You
    text: >-
      You resolve the tension toward the particular people whose lives the
      decision lands on, and you are willing to pay for it in consistency.
      Aristotle would recognise this: phronesis is knowledge of particulars,
      and the general rule is not where the moral action is. The price is that
      you become the rule, and the next family gets whoever is on duty. That is
      fine when the person on duty is you and much less fine as a general
      arrangement, which you have to be willing to say out loud.
    base_rate: null
  - id: judgement-is-position
    dominant: relativist
    label: Whose Judgement Counts
    text: >-
      You are alert to the politics of the concept: "practical wisdom" is
      almost always attributed to people who already hold authority, and
      "experience" is what incumbents have. That is a real observation about
      how the word gets used, and it should make anyone appealing to their own
      judgement uncomfortable. Where it leaves you thin is that some people
      genuinely are better at this than others, and a position that cannot
      admit that will hand the decision to whoever is loudest instead.
    base_rate: null
  - id: clever-and-nothing-else
    dominant: egoist
    label: Cleverness Is the Real Skill
    text: >-
      You reject Aristotle's claim that only a good person can be practically
      wise, on the straightforward grounds that some of the sharpest readers of
      a room you have met were operating entirely for themselves. That is hard
      to argue with as observation. What it costs you is his most interesting
      thesis — that caring about the right things changes what you notice —
      and you should test it before discarding it, because the people best at
      reading a room for their own benefit are often strikingly bad at seeing
      what is happening to anyone else in it.
    base_rate: null
---

## What it means

*Phronesis* is Aristotle's word for practical wisdom, and in Book VI of the *Nicomachean
Ethics* he separates it carefully from every neighbouring capacity. It is not *sophia*,
theoretical wisdom about things that cannot be otherwise. It is not *techne*, the craft
knowledge of how to make a thing, because making has a product outside itself and acting
does not. Phronesis is the capacity to deliberate well about what conduces to living
well in general — not about how to achieve some particular end, but about which ends are
worth having and what this situation, now, actually requires.

Three features make it distinctive. First, it is knowledge of *particulars*. Aristotle
says a man who knows that light meats are digestible but does not know which meats are
light will not produce health, and that phronesis is concerned with the last thing, the
particular, which is not the object of scientific knowledge but of perception. Second,
it cannot be taught by rule, which is why he says the young can be geometers and cannot
be practically wise: geometry proceeds from principles, and practical wisdom comes from
experience of cases, which takes time to acquire.

Third, and most contentiously, he ties it to character. He distinguishes phronesis from
*deinotes*, cleverness — the power to hit whatever target you set. Cleverness is morally
neutral; if the target is base, the clever man is merely unscrupulous. Aristotle claims
you cannot have practical wisdom without being good, because the ends you aim at are
made visible to you by your character, and a person who wants the wrong things will
perceive the situation wrongly. This is not a moralising add-on. It is a claim about
perception: the corrupt do not see the case clearly, because what they care about
determines what shows up as salient.

John McDowell built an influential modern reading on exactly this: that the virtuous
person's knowledge is a way of *seeing* situations, not a stock of rules applied to
them, and that any attempt to write the knowledge down as a code will always leave out
the capacity that made it work.

## What it suggests

If phronesis is real, then a great deal of what modern institutions do is
self-defeating. Protocols, scoring matrices, checklists and standardised procedures all
work by removing judgement from the person on the spot, and they exist because
judgement is unreliable. But they succeed only when situations resemble each other
closely enough for the compression to hold. Barry Schwartz and Kenneth Sharpe argued
that the systematic replacement of discretion with rules and incentives has produced
professionals who are technically compliant and practically deskilled — doctors who
hit the metric, teachers who cover the curriculum, caseworkers who apply the criteria —
and that this is not a failure of the individuals but the predicted result of taking
away the thing that would have let them do better.

It also reframes moral disagreement. If moral competence is perceptual and trained, then
some disagreements are not disagreements about principle at all. They are cases where
one party can see something the other cannot, and no argument will transmit it, because
the thing that would need transmitting is a capacity rather than a proposition. That is
either a profound insight or a disastrous licence, depending on who is claiming to have
the capacity.

Which is the objection. Phronesis is unfalsifiable from the outside. The practitioner
who deviates from the protocol because she truly saw what it missed, and the one who
deviated because she resented being told what to do, produce identical accounts of
themselves. Aristotle's own test — that only a good person has it — is no help, since
being good is exactly what is in question. And the empirical record is not kind:
research on expert judgement has repeatedly found that experienced professionals'
confidence outruns their accuracy in domains where feedback is slow, noisy or absent,
which describes most of the domains where phronesis is invoked. Hans-Georg Gadamer's
rehabilitation of the concept in *Truth and Method* — where phronesis becomes the model
for all understanding — is powerful, and it does not answer the accountability problem
so much as decline it.

## The problem

Ines has run the fostering panel for six years, and the case in front of her is the
kind she has learned to distrust her own instincts about.

The Ogunlade family have applied to foster a nine-year-old boy who is currently in his
fourth placement in eighteen months. On paper they are a strong match: same church, same
part of the city, a stable income, a spare room, and a fifteen-year-old daughter who
has been present at every meeting and clearly wants him there.

The problem is the criterion about physical discipline. Mrs Ogunlade, asked the standard
question, said that she had smacked her own children when they were small, that she does
not believe it did them harm, and that she would of course follow the policy now.
Everyone who has met her believes she means it. The framework Ines works under does not
distinguish between a candid answer to a historical question and a stated intention, and
the panel's guidance is unambiguous: this is a decline.

Ines has seen four cases in six years where she overrode guidance on a judgement about a
family. Three were, as far as she can tell, right. The fourth is a boy who is now
sixteen and in a secure unit, and she has never established whether she caused that or
merely failed to prevent it.

She knows that this family is the best placement this child has been offered. She also
knows that the last three chairs of this panel each thought they could tell, and that
the framework she is being asked to bend was written after a review into a death.

The panel is on Thursday. If she declines, the boy goes to a residential placement
forty miles away, and everyone in the room will know that the reason was a truthful
answer to a question about 1994.

## The questions

**1. The sepsis protocol.** A registrar of fourteen years is certain this patient does
not have sepsis. The protocol exists because clinicians' certainty has killed people.

- Follow her judgement and document it. Protocols encode the average case.
- Follow the protocol. It was written because confidence is not accuracy.
- Look at the outcome data for deviations. If overrides do worse, that settles it.
- Build an override with a name attached and a review. Accountable, not banned.

**2. The young and the wise.** Aristotle says the young cannot have phronesis. A
twenty-four-year-old hears "wait your turn".

- He is right. Some knowledge only comes from having been wrong about real people.
- She is right. That is how incumbents describe already being in the room.
- Experience without feedback makes confidence, not wisdom.
- Depends what she has done. Some twenty-four-year-olds have buried a parent.

**3. The eligibility rule.** A plausible recording would qualify a family the rule will
destroy.

- Record it their way. Serving the rule's purpose is what judgement is for.
- Record it accurately and escalate hard. Fiction for the deserving corrodes everything.
- Record it their way, knowing you are lying and that the next family gets a person, not a rule.
- Ask which practice destroys fewer families across a thousand cases.

**4. Cleverness and wisdom.** Aristotle says only the good can be practically wise. Real
distinction or definition?

- Real. What you care about shapes what you can see.
- A self-serving definition. Plenty of people read rooms superbly and for themselves.
- Test it. Does moral concern improve judgement or only its packaging?
- Whose targets count as good is the whole question, and he assumes his answer.

## Reading your answer

**The Practised Eye.** You trust judgement over specification, on the grounds that rules
are compressed experience and the experienced can see what the compression dropped. This
is how skilled people in every field actually behave. Its cost is auditability: the
clinician who deviated correctly and the one who deviated out of ego write the same
note, and you have no way to sort them before the outcome arrives.

**The Rule Was Written For a Reason.** You hold that a standard bending to whoever is on
shift is not a standard, and you are right that protocols usually exist because
confident people were wrong. This protects everyone who cannot tell whether the
professional in front of them is the wise one. Its price is the case the rule did not
anticipate, which is not rare, and which you will watch it handle badly.

**Check Whether It Works.** You want the question settled with evidence — whether
overrides help, whether experience tracks accuracy. That is the right demand for a claim
asserted for two millennia and tested rarely. Your exposure is that many of these
judgements do not generate comparable data, and while you wait, the decision is being
made anyway by someone who is not waiting.

**Discretion With a Name On It.** You want judgement made visible rather than abolished:
documented, attributed, reviewed. This is what functioning institutions converge on. The
difficulty is that recorded discretion becomes defensive discretion — once a deviation
must be justified, the ones people stop making are the hardest to explain, which are not
the same as the worst ones.

**This Family, In Front of You.** You resolve toward the particular people the decision
lands on and pay for it in consistency. Aristotle would recognise you: phronesis is
knowledge of particulars. The price is that you become the rule, and the next family
gets whoever is on duty. That is comfortable while the person on duty is you.

**Whose Judgement Counts.** You notice that "practical wisdom" is nearly always
attributed to people who already have authority, and that this should make anyone
citing their own judgement uneasy. It should. Where it leaves you thin is that some
people really are better at this, and a view that cannot say so hands the decision to
whoever is most insistent.

**Cleverness Is the Real Skill.** You reject the claim that only the good can be
practically wise, because you have met people who read a room superbly and entirely for
themselves. That is hard to argue with. It costs you Aristotle's most interesting
thesis — that caring about the right things changes what you notice — and it is worth
testing, since the people best at reading a room for their own benefit are often
remarkably bad at seeing what is happening to anyone else in it.

## Sources

- Aristotle, *Nicomachean Ethics*, Book VI (especially 1140a–1145a), in *The Complete
  Works of Aristotle*, ed. Jonathan Barnes (Princeton University Press). Phronesis,
  particulars, and the distinction from cleverness.
- John McDowell, "Virtue and Reason", *The Monist* 62(3) (1979), 331–350. Moral
  knowledge as a way of seeing rather than a code.
- Hans-Georg Gadamer, *Truth and Method* (1960), trans. Joel Weinsheimer and Donald G.
  Marshall — phronesis as the model for understanding generally.
- Barry Schwartz and Kenneth Sharpe, *Practical Wisdom: The Right Way to Do the Right
  Thing* (Riverhead, 2010). The deskilling of professionals by rules and incentives.
- Daniel Kahneman and Gary Klein, "Conditions for Intuitive Expertise: A Failure to
  Disagree", *American Psychologist* 64(6) (2009), 515–526 — on when expert intuition is
  and is not trustworthy.
