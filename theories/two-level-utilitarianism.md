---
id: two-level-utilitarianism
title: Two-Level Utilitarianism
category: theory
tradition: utilitarianism
philosophers:
  - R.M. Hare
era: "1981"
tags: [intuition, critical-thinking, moral-education, dispositions, self-deception, rules]
sources:
  - author: R. M. Hare
    title: "Moral Thinking: Its Levels, Method and Point"
    published: Clarendon Press, Oxford
    year: 1981
  - author: R. M. Hare
    title: "Ethical Theory and Utilitarianism"
    published: "in H. D. Lewis (ed.), Contemporary British Philosophy, 4th series, Allen & Unwin"
    year: 1976
  - author: Bernard Williams
    title: "A Critique of Utilitarianism"
    published: "in J.J.C. Smart and Bernard Williams, Utilitarianism: For and Against, Cambridge University Press"
    year: 1973
  - author: Michael Stocker
    title: "The Schizophrenia of Modern Ethical Theories"
    published: "Journal of Philosophy 73(14), 453–466"
    year: 1976
  - author: Peter Railton
    title: "Alienation, Consequentialism, and the Morality of Duty"
    published: "Philosophy & Public Affairs 13(2), 134–171"
    year: 1984
questions:
  - id: q1
    prompt: >-
      You are a hospital manager, and you hold a firm principle: never divert
      resources from a named patient to a statistical one. Tonight you can see,
      clearly and with the numbers in front of you, that breaking it would save
      more lives. You have four minutes and you are tired.
    options:
      - id: a
        label: >-
          Follow the principle. You adopted it precisely for moments like this,
          when you are tired and the arithmetic is flattering.
        scores: { consequentialist: 0.9, contractarian: 0.4, authority: -0.4 }
      - id: b
        label: >-
          Override it. A principle you keep when you can see it costs lives is
          not humility about your judgement, it is abdication of it.
        scores: { consequentialist: 1.0, authority: 0.6, certainty: 0.4 }
      - id: c
        label: >-
          Follow it. The named patient has a claim on you that does not vary
          with tonight's arithmetic, and that is why you have the principle.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          Whether you should override depends entirely on what kind of manager
          you have become — and you cannot audit that at two in the morning.
        scores: { virtue: 1.0, certainty: -0.6 }
  - id: q2
    prompt: >-
      Hare's two figures are the archangel, who has perfect information and no
      partiality and can calculate each case from scratch, and the prole, who has
      neither and should rely on firm intuitive principles. A colleague says he
      does his best thinking without rules and prefers to judge case by case.
    options:
      - id: a
        label: >-
          The people most confident they can think like the archangel are
          reliably the ones who should not try. That is the point of the picture.
        scores: { consequentialist: 0.8, virtue: 0.5, authority: -0.4 }
      - id: b
        label: >-
          He may well be right about himself. Treating everyone as a prole is a
          policy of managed mediocrity dressed as epistemic modesty.
        scores: { consequentialist: 0.7, egoist: 0.4, authority: 0.7 }
      - id: c
        label: >-
          A person of good judgement is not applying rules or calculating; the
          whole two-level picture misdescribes what practical wisdom is.
        scores: { virtue: 1.0, affect: 0.5 }
      - id: d
        label: >-
          The problem is that he decides which mode he is in, and nobody can
          check. Principles you may set aside at your own discretion are not
          principles.
        scores: { contractarian: 0.9, deontological: 0.4, certainty: 0.5 }
  - id: q3
    prompt: >-
      On Hare's account you should raise a child to feel real horror at lying —
      not to hold "lying is usually suboptimal" as a revisable estimate — because
      the feeling is what works under pressure. But you yourself know the horror
      is a device selected for its consequences.
    options:
      - id: a
        label: >-
          Do it. Dispositions are the machinery that produces good conduct, and
          knowing why you installed one does not make it a deception.
        scores: { consequentialist: 1.0, certainty: 0.4 }
      - id: b
        label: >-
          There is something wrong with holding a conviction you privately regard
          as equipment. Sincerity is not something you can decide to have.
        scores: { virtue: 1.0, affect: 0.5 }
      - id: c
        label: >-
          Teach the horror because lying really is wrong, not because horror is
          useful. The child is owed the truth about why.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: d
        label: >-
          Teach it, and tell the child eventually. A disposition that cannot
          survive being explained was not worth having.
        scores: { contractarian: 0.8, consequentialist: 0.4, authority: 0.5 }
  - id: q4
    prompt: >-
      A friend asks whether you would break a confidence to prevent a serious
      harm. You say yes if it were serious enough. He says that you have just
      told him you are not someone a confidence can be given to, and that the
      answer he wanted was the one you cannot now give.
    options:
      - id: a
        label: >-
          He is right and that is the cost of honesty. A friend who says "never,
          whatever happens" is either lying or dangerous.
        scores: { consequentialist: 0.9, certainty: -0.4 }
      - id: b
        label: >-
          He is right and it is a real loss. Some goods only exist between people
          who have taken a question off the table entirely.
        scores: { deontological: 0.8, care: 0.5, certainty: 0.5 }
      - id: c
        label: >-
          The right answer is to be the sort of person who would never do it, and
          then, in the one case in a lifetime, to do it and bear what follows.
        scores: { virtue: 1.0, certainty: -0.3 }
      - id: d
        label: >-
          Friendship is not built on unconditional guarantees; it is built on
          each of you knowing roughly where the other's limits are.
        scores: { care: 1.0, contractarian: 0.4, scope: -0.5 }
outcomes:
  - id: the-two-levels
    dominant: consequentialist
    label: Rules For Creatures Like Us
    text: >-
      You accept the structure: firm intuitive principles because you are tired,
      partial and short of information, and critical reasoning to choose those
      principles and settle their conflicts. This is the most psychologically
      realistic form utilitarianism has taken, and it answers the standard charge
      that consequentialists are always recalculating. What it never quite
      answers is the switching problem. Nothing in the theory tells you when you
      are entitled to go critical, the temptation to go critical rises exactly
      with how much you want the exception, and the level you are on is decided
      by the very judgement whose unreliability motivated the levels.
    base_rate: null
  - id: the-principle
    dominant: deontological
    label: The Principle Is Not Equipment
    text: >-
      You hold that a principle is binding because of what it is about, not
      because holding it works — and so you are not exposed to the switching
      problem at all. The named patient's claim does not vary with tonight's
      arithmetic. This also gives you the cleanest answer about the child: she is
      owed the real reason, not a serviceable one. The bill is the case where the
      principle is small and the disaster is large, and it is worth knowing
      whether you have ever actually held the line there or only expected to.
    base_rate: null
  - id: the-agent
    dominant: virtue
    label: What You Have Become
    text: >-
      You think the two-level picture misdescribes practical wisdom, which is
      neither rule-following nor calculating but a trained perception of what a
      situation calls for. Michael Stocker's charge of moral schizophrenia is
      yours: there is something wrong with holding a conviction you privately
      regard as a device. What you cannot supply is a check. If good judgement is
      not decomposable into principles or calculations, then a person with bad
      judgement has no way to discover it, and neither has anyone relying on them.
    base_rate: null
  - id: the-checkable
    dominant: contractarian
    label: Principles Others Can Rely On
    text: >-
      Your test is whether the people affected can know where they stand — which
      makes the fatal question not "is the exception correct?" but "who decides,
      and can anyone check?". A principle set aside at the holder's own
      discretion offers no protection to anyone relying on it, whatever it
      offers the holder. This is the sharpest available criticism of the two-level
      structure and it does not require denying that the exceptions are sometimes
      right. Its price is rigidity in the cases where the exception is genuine
      and there is no time to obtain anyone's agreement.
    base_rate: null
  - id: the-friendship
    dominant: care
    label: Where Each Other's Limits Are
    text: >-
      You locate the answer in the actual texture of relationships rather than in
      the architecture of a theory: what friends owe each other is not an
      unconditional guarantee but a reliable sense of where the other will stop.
      That is truer to how trust works than either the unbreakable rule or the
      running calculation. What it does not give you is anything to say when the
      relationship is absent — to the patients you will never meet, whose claims
      are exactly what the manager's principle exists to protect.
    base_rate: null
---

## What it means

R. M. Hare's *Moral Thinking* (1981) is an attempt to keep utilitarianism as the truth
about what makes acts right while denying that anyone should generally reason like a
utilitarian.

Hare distinguishes two levels of moral thinking. At the **intuitive level** we operate with
relatively simple, firm principles — do not lie, keep promises, do not use people, care for
your own children first — held with genuine moral feeling and considerable resistance to
being overridden. At the **critical level** we reason as act utilitarians, weighing
preferences impartially, and we use this reasoning for two jobs: to select the intuitive
principles in the first place, and to adjudicate when two of them conflict and the
intuitive level has nothing to say.

Hare dramatises the distinction with two figures. The **archangel** has complete
information, unlimited time, perfect impartiality and no self-interested bias; he needs no
intuitive principles, since he can calculate each case correctly from scratch. The
**prole** has none of these and would go badly wrong trying, so he does best by following
sound principles without question. Real people are neither. We have "archangelic" moments —
in calm reflection, with time, at a distance from our own interests — and we spend most of
our lives closer to the prole, deciding quickly, partially, and with bad information.

The critical move, and the thing that separates Hare from a mere rule-of-thumb view, is his
insistence that intuitive principles must be held with real feeling. A principle you regard
as a revisable estimate will not survive the moment when breaking it is attractive, and the
whole point of having it was to survive that moment. So moral education should instil
genuine horror at cruelty and betrayal, not a calibrated probability. Hare accepts the
apparent tension frankly: the critical thinker knows that these dispositions were selected
for their consequences, and must nonetheless have them, not merely endorse them.

## What it suggests

Two-level thinking dissolves a family of standard objections to utilitarianism at a
stroke. The utilitarian is not, on this account, someone who would frame an innocent man if
the numbers worked, because a person constituted so as to consider that seriously would
make far worse decisions across a lifetime than one who simply cannot entertain it. The
theory recommends against being the kind of agent the theory's critics fear.

It also supplies a rationale for something people do anyway and are usually embarrassed
about: holding a rule more firmly than the reasons behind it strictly warrant. Hare's
answer is that this is not irrationality but engineering. You are a device with known
failure modes — tiredness, partiality, motivated reasoning, bad estimates under pressure —
and the correct design for such a device includes commitments that resist tampering.
Peter Railton's "Alienation, Consequentialism, and the Morality of Duty" (1984) develops the
same insight into sophisticated consequentialism: the best-placed agent is not the one who
calculates most but the one whose dispositions produce the best results, including
dispositions of love and loyalty that do not consult the theory at all.

The objections concentrate on one hinge: **who decides which level you are on, and when?**

Nothing in Hare's account provides a test. And the situations in which one is most tempted
to ascend to critical thinking — where the intuitive principle is inconvenient, where the
stakes seem to justify an exception, where you are sure you can see the whole picture —
correlate almost perfectly with the situations in which one's judgement is least reliable.
The theory's own diagnosis of human frailty predicts that the level-switch will be abused,
and it offers no defence against that except further judgement of the sort it has just
declared unreliable.

The second objection is Michael Stocker's, from "The Schizophrenia of Modern Ethical
Theories" (1976). There is something incoherent, Stocker argues, in holding a value at one
level while privately regarding it at another as a useful mechanism. A friend who visits
you in hospital because visiting friends is a disposition selected for its good
consequences has not quite done what a friend does — and if he must not think that thought
while visiting, then the theory requires a permanent internal division in anyone who
believes it.

Bernard Williams pressed a related point: a theory that is best not believed by most
people, or best not thought about while acting, has a strange relationship to the ordinary
notion of a reason. If the true account of right action is one that agents should generally
be discouraged from applying, what exactly is the account doing?

Hare's reply to all of this is that the alternative is worse. Every workable morality
involves dispositions that were not chosen by the person who has them; the only question is
whether we are allowed to ask what they are for. He thought refusing to ask was not
integrity but superstition.

## The problem

Marcus is a police officer with nineteen years in and one rule he has never broken: he
does not lie in a statement.

It is not a policy. It is closer to a physical revulsion. He learned it from a sergeant who
told him that the day you write something untrue is the day you become a different kind of
officer, and he has watched that happen to two colleagues since.

Tonight he has a statement to write about a stop. He and his partner got a domestic call
wrong — they went to the wrong flat first, which cost eleven minutes. The woman was
seriously hurt. She would have been seriously hurt anyway; the paramedics have said so, and
Marcus believes them.

If the eleven minutes appear in the statement, there will be an inquiry. His partner, who
made the call about the address, will be suspended and probably dismissed; she is
twenty-six, she is the best young officer he has worked with, and the error is the kind
anyone makes once. The woman's compensation is unaffected. The prosecution of the man who
did it is unaffected. Marcus has run it every way and the only measurable difference the
eleven minutes make to anyone is to his partner's career.

He can see the critical-level argument. He can see it clearly, and he has never in
nineteen years been able to see one so cleanly.

He also knows precisely what he would say to a younger officer who came to him with an
argument this clean about why tonight was the exception.

## The questions

**1. Four minutes, tired, and the arithmetic is flattering.** Your firm principle says do
not divert from the named patient; tonight breaking it would save more lives.

- Follow the principle. You adopted it for moments exactly like this.
- Override it. Keeping it when you can see the cost is abdication, not humility.
- Follow it. The named patient's claim does not vary with tonight's numbers.
- It depends what kind of manager you have become, and you cannot audit that now.

**2. The archangel and the prole.** A colleague says he thinks best without rules.

- The people most confident they can think like the archangel are the ones who should not
  try.
- He may be right about himself; treating everyone as a prole is managed mediocrity.
- Practical wisdom is neither rules nor calculation; the picture misdescribes it.
- The problem is that he decides which mode he is in and nobody can check.

**3. Teaching the horror.** You install a disposition you privately regard as a device.

- Do it. Knowing why you installed it does not make it a deception.
- Something is wrong with holding as conviction what you regard as equipment.
- Teach it because lying is wrong, not because horror is useful.
- Teach it, and tell the child eventually.

**4. The confidence.** You admit you would break one to prevent a serious enough harm.

- He is right, and that is the cost of honesty.
- He is right, and it is a real loss — some goods need the question off the table.
- Be someone who would never, and then in the one case, do it and bear it.
- Friendship runs on knowing roughly where each other's limits are.

## Reading your answer

**Rules For Creatures Like Us.** You accept that the right design for a fallible agent
includes commitments that resist tampering, and that choosing those commitments is what
critical reasoning is for. This is the most realistic version of utilitarianism there is.
The unresolved part is the switch: the theory offers no test for when ascending to critical
thinking is legitimate, and the pull toward ascending is strongest precisely where your
judgement is worst.

**The Principle Is Not Equipment.** You take principles to bind because of what they are
about, which immunises you against the switching problem entirely. It also gives you the
clean answer about the child, who is owed the real reason rather than a serviceable one.
Your bill is the small principle and the large disaster, and most people who hold your
position have never been billed.

**What You Have Become.** You think the architecture misdescribes practical wisdom, and
Stocker's charge of moral schizophrenia is one you would press. It is a serious objection
and it has never been fully answered. What you lack is an external check: if judgement is
not decomposable, then bad judgement is undetectable from the inside, and Marcus's clean
argument at two in the morning feels exactly like wisdom.

**Principles Others Can Rely On.** You shift the question from whether the exception is
correct to who decides and who can check. That is the sharpest criticism of the two-level
structure, and it works without denying that the exceptions are sometimes right. It buys
rigidity: the case where the exception is genuine and there is no time to secure anyone's
agreement is one you will get wrong, knowingly.

**Where Each Other's Limits Are.** You answer from the texture of actual relationships
rather than from theory, and you are right that trust is built on legibility rather than
guarantees. What it does not reach is everyone you have no relationship with — which is
precisely who the manager's principle was protecting in the first question.

## Sources

- R. M. Hare, *Moral Thinking: Its Levels, Method and Point*, Clarendon Press (1981) —
  the levels, the archangel and the prole.
- R. M. Hare, "Ethical Theory and Utilitarianism", in H. D. Lewis (ed.), *Contemporary
  British Philosophy*, 4th series (1976) — the earlier statement of the two-level structure.
- Michael Stocker, "The Schizophrenia of Modern Ethical Theories", *Journal of Philosophy*
  73(14) (1976), 453–466 — the objection to holding values one privately regards as devices.
- Bernard Williams, "A Critique of Utilitarianism", in Smart and Williams, *Utilitarianism:
  For and Against*, Cambridge University Press (1973) — integrity, and the oddity of a
  theory best not applied.
- Peter Railton, "Alienation, Consequentialism, and the Morality of Duty", *Philosophy &
  Public Affairs* 13(2) (1984), 134–171 — sophisticated consequentialism as a reply to
  Stocker and Williams.
