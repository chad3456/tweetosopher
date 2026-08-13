---
id: might-makes-right
title: Might Makes Right
category: theory
tradition: sophism
philosophers:
  - Thrasymachus
  - Plato
era: "c. 375 BCE"
tags: [power, justice, law, ideology, self-interest]
sources:
  - author: Plato
    title: "Republic, Book I"
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Thucydides
    title: "History of the Peloponnesian War, Book V (the Melian Dialogue)"
    published: "trans. Rex Warner, Penguin Classics"
  - author: Friedrich Nietzsche
    title: On the Genealogy of Morality
    published: "trans. Maudemarie Clark and Alan Swensen, Hackett"
    year: 1887
  - author: Karl Marx and Friedrich Engels
    title: The German Ideology
    published: "written 1845–46, first published in full 1932"
questions:
  - id: q1
    prompt: >-
      Thrasymachus says justice is nothing but the advantage of the stronger:
      every regime makes laws that suit itself and then calls obedience to
      them righteous. Is he describing how law works, or slandering it?
    options:
      - id: a
        label: >-
          Describing it, and accurately. Look at who writes the laws and who
          they fall on, and the pattern is not subtle.
        scores: { nihilist: 0.8, relativist: 0.4, authority: 0.8 }
      - id: b
        label: >-
          Half right. Law is shaped by power and also constrains it — that is
          the whole point of the thing, and it partly works.
        scores: { contractarian: 1.0, certainty: -0.5 }
      - id: c
        label: >-
          He has confused the origin of a rule with its authority. A just law
          is just even if a scoundrel wrote it for bad reasons.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: d
        label: >-
          He is right about most laws and wrong about the conclusion he draws.
          Bad law is why we can recognise good law at all.
        scores: { virtue: 0.7, deontological: 0.4, certainty: -0.4 }
  - id: q2
    prompt: >-
      At Melos, Athenian envoys tell a small neutral island: the strong do
      what they can and the weak suffer what they must, and appeals to
      justice only carry weight between equals in power. Melos refuses. The
      Athenians kill the men and enslave the rest.
    options:
      - id: a
        label: >-
          The Athenians described the world correctly and were monstrous
          anyway. Both of those are true and neither cancels the other.
        scores: { virtue: 0.8, nihilist: 0.3, certainty: -0.4 }
      - id: b
        label: >-
          Their premise was wrong: it cost Athens its reputation and helped
          lose them the war. Brutality is usually bad strategy.
        scores: { consequentialist: 1.0, egoist: 0.4, scope: 0.4 }
      - id: c
        label: >-
          They were simply honest about what every state does and most
          disguise. The disguise is the only thing that was ever optional.
        scores: { nihilist: 0.8, egoist: 0.5, affect: -0.7 }
      - id: d
        label: >-
          Nothing about their power made the killing permissible. Melos had
          a right they violated, whether or not it could be enforced.
        scores: { deontological: 1.0, certainty: 0.9, authority: 0.5 }
  - id: q3
    prompt: >-
      A senior colleague tells you, privately and without malice, that the
      firm's ethics policy exists to be quoted at people without leverage,
      and that nobody who brings in money has ever been held to it. As far
      as you can tell, he is right.
    options:
      - id: a
        label: >-
          Then treat the policy as what it is — a weapon — and learn to use
          it rather than be used by it.
        scores: { egoist: 0.9, nihilist: 0.4, authority: 0.6 }
      - id: b
        label: >-
          Hold to it yourself regardless. Whether others are held to a rule
          has nothing to do with whether it binds you.
        scores: { deontological: 0.9, virtue: 0.5, authority: 0.4 }
      - id: c
        label: >-
          Try to make it real — enforce it upward once, publicly, and see
          what happens. A rule only exists where it is applied.
        scores: { contractarian: 0.9, consequentialist: 0.4, authority: -0.6 }
      - id: d
        label: >-
          Work out who actually gets hurt by the double standard and act on
          that, not on the abstraction about rules.
        scores: { consequentialist: 0.8, care: 0.4, scope: 0.3 }
  - id: q4
    prompt: >-
      Suppose you became convinced that everything you call justice is the
      residue of past victories — that there is no standard above the
      contest, only winners who got to name things. What follows?
    options:
      - id: a
        label: >-
          Very little. You would still not be able to do certain things, and
          that inability is worth more than the theory.
        scores: { virtue: 0.9, existentialist: 0.4, affect: 0.7 }
      - id: b
        label: >-
          You would owe nobody anything you did not choose to owe, and you
          would start choosing more carefully who to owe.
        scores: { egoist: 0.8, existentialist: 0.5, scope: -0.5 }
      - id: c
        label: >-
          It follows that the contest is the only place to act — so pick a
          side, build power, and stop pretending to be above it.
        scores: { existentialist: 0.9, nihilist: 0.4, authority: 0.7 }
      - id: d
        label: >-
          Nothing follows about what to do. The history of a rule and its
          justification are separate questions and always were.
        scores: { deontological: 0.8, contractarian: 0.4, certainty: 0.6 }
outcomes:
  - id: the-frank-account
    dominant: nihilist
    label: The Honest Description
    text: >-
      You think Thrasymachus was reporting rather than arguing, and that the
      moral vocabulary is mostly the winner's account of the fight. This makes
      you very hard to fool with an appeal to principle, which is the most
      common way people are fooled. Its cost is that you have no way to
      complain when it is done to you. If justice is only the advantage of
      whoever is stronger, then when you are the weaker party you are not
      being wronged, you are merely losing — and almost nobody who holds this
      view actually believes that about their own case.
    base_rate: null
  - id: the-standard-above
    dominant: deontological
    label: The Standard Power Does Not Set
    text: >-
      You separate where a rule came from and whether it binds, and hold that
      Melos was wronged whether or not anyone could stop it. This is what lets
      the phrase "that was unjust" mean anything when said about the powerful
      by people who cannot touch them. What it owes you is an account of where
      that standard lives, given that every version of it you have ever met
      arrived through some particular history — and that the sceptic's
      question is precisely how you tell a real standard from a well-defended
      one.
    base_rate: null
  - id: the-thing-we-built
    dominant: contractarian
    label: Law Against Power
    text: >-
      You take law as an artefact built partly to restrain the strong,
      imperfect but not therefore fake, and you measure it by whether it is
      applied upward as well as downward. This is the most practically useful
      answer here: it tells you what to fix. Its exposure is that a settlement
      reached under a large enough imbalance is not much of a settlement, and
      you need a way to say when consent has been so thoroughly shaped by
      power that it has stopped counting as consent.
    base_rate: null
  - id: what-you-cannot-do
    dominant: virtue
    label: What You Still Could Not Do
    text: >-
      You concede most of the descriptive claim and refuse the conclusion:
      even granting that the vocabulary is contested and the enforcement is
      crooked, there remain things you are not able to do, and you treat that
      inability as knowledge rather than as conditioning. This is honest about
      power without being disarmed by it. The pressure on it is that your
      inability is exactly what Nietzsche said it was — history, internalised
      — and you have no argument that it is anything else, only the fact that
      it holds.
    base_rate: null
  - id: the-players-interest
    dominant: egoist
    label: Play the Game You Are In
    text: >-
      You draw the practical conclusion: if the rules are instruments, then be
      the one holding the instrument. This is clear-eyed and it works, up to a
      point. The point is that instruments are held by other people too, and
      the entire reason anyone ever built an impartial rule was that a world
      of pure position is worse for almost everyone in it, including the
      people currently doing well out of it.
    base_rate: null
  - id: the-cost-of-cruelty
    dominant: consequentialist
    label: What It Actually Costs
    text: >-
      You answer the power argument on its own ground: brutality is usually a
      bad bet, reputations are assets, and the Athenians lost more at Melos
      than they gained. This keeps you inside the conversation rather than
      moralising from outside it, and it is often simply true. Its weakness is
      that it makes the wrongness contingent on the accounting. If a cruelty
      were genuinely cheap — and some are — you would have nothing left to say
      about it except that it worked.
    base_rate: null
  - id: the-side-taken
    dominant: existentialist
    label: Then Choose a Side
    text: >-
      You accept that there is no verdict handed down from outside the contest
      and conclude that the contest is where you have to act — which makes
      commitment a decision rather than a discovery. This is more honest than
      most positions about what a value actually is when you look closely. It
      leaves you unable to say that someone who chose the other side chose
      wrongly, only that they chose against you, and you should check whether
      you can live inside that sentence.
    base_rate: null
---

## What it means

Book I of Plato's *Republic* is mostly a polite conversation about what justice is,
until Thrasymachus loses patience. He accuses Socrates of talking nonsense and states
his own view flatly: justice is nothing other than the advantage of the stronger.

His argument is not that might is a moral property. It is a claim about how the word
gets its content. Each regime — democratic, oligarchic, tyrannical — makes laws in its
own interest, announces that obeying them is just, and punishes those who do not. Since
this is what happens everywhere, the honest conclusion is that "just" simply means
"what serves the people currently in charge". He then adds the practical corollary,
which is where the sting is: injustice, done at scale and successfully, pays. The petty
thief is punished; the man who takes an entire city is called a statesman. The just man
comes off worse in every partnership, pays more tax on the same income, and gets
nothing for it but a reputation among people who are also losing.

Socrates' replies in Book I are widely regarded as weak — he catches Thrasymachus in
technicalities about whether rulers ever err, and the argument that the unjust man is
unhappy is asserted more than shown. Thrasymachus withdraws in bad temper rather than
being refuted, which is why Glaucon and Adeimantus have to take up his case in Book II
and why the remaining nine books exist at all.

The position has a long life afterwards. Thucydides puts a version of it in the mouths
of the Athenian envoys at Melos: the strong do what they can and the weak suffer what
they must, and questions of justice only arise between parties of roughly equal power.
Marx and Engels give it an economic form — the ruling ideas of any age are the ideas of
its ruling class. Nietzsche gives it a genealogical one, arguing that our moral
vocabulary is the sediment of ancient contests over who got to name what, with "good"
originally meaning noble and only later meaning meek.

## What it suggests

If Thrasymachus is right, the correct response to a moral claim is to ask who benefits
from your believing it. That is not cynicism; it is a research programme, and it has
produced a great deal that is true. Vagrancy laws, the historical treatment of debt,
who gets prosecuted for fraud and who gets fined — the pattern of enforcement is often
a better guide to a legal system's real content than the text of its statutes.

It also predicts something specific: that moral language will be deployed most
insistently against those least able to resist it. Anyone who has watched a large
institution discover its principles at exactly the moment those principles happened to
be convenient has seen the mechanism working.

The strongest objection is that the position saws through the branch it sits on.
Thrasymachus is not merely describing; he is complaining. He thinks it is *outrageous*
that the strong dress up their advantage as righteousness — and outrage requires a
standard the strong are failing to meet. If justice really were nothing but the
advantage of the stronger, then the powerful arranging things to suit themselves would
be no more objectionable than water running downhill, and the Melian dialogue would not
have the terrible force it has had for two and a half thousand years. Something in the
reader refuses, and the refusal is data.

There is a second objection, quieter and harder. Even granting that every existing
standard arrived through some history of power, it does not follow that no standard is
valid — that is the genetic fallacy, the mistake of judging a claim by its parentage.
A rule invented by tyrants for tyrannical reasons might still be a good rule. Where the
sceptic has real ground is in the suspicion that we cannot tell the difference from the
inside, because the faculty we would use to check is itself part of what was shaped.

## The problem

Fatima is head of compliance at a mid-sized asset manager, and she has two files on her
desk.

The first is an operations analyst who booked flights against a client entertainment
code. Eleven hundred pounds. She has the receipts, his written explanation, and a clear
policy breach. The recommendation drafted for her is dismissal, and it is the third
such recommendation she has signed this year, all of them for people earning under
fifty thousand.

The second is a portfolio manager who has, over eighteen months, been running a
personal position that shadows a fund the firm advises. It is not illegal on any
reading she is confident of. It is very obviously the thing the policy she wrote was
written to prevent. He brought in eleven million in fees last year. She raised it once,
carefully, with the chief executive, who agreed it was uncomfortable, said the policy
language was ambiguous, and asked her to keep it in her own file for now.

She has been in the job four years, and she can no longer honestly say that the
document she enforces is a set of standards. It behaves like a set of standards when
applied downward and like a suggestion when applied upward, and the difference tracks
revenue with an accuracy that would be impressive in a forecasting model.

She can sign the dismissal. She can refuse to sign it while the second file sits there,
which will end her ability to do the job at all. She can escalate to the board, which
appointed the chief executive. Or she can decide that a rule enforced unevenly is still
a rule, and that the analyst did in fact do the thing.

What she cannot do is pretend she does not know which of the two files is going to be
resolved this week.

## The questions

**1. Thrasymachus.** Justice is the advantage of the stronger: every regime makes laws
that suit itself and calls obedience righteous. Description or slander?

- Description, and accurate. Look at who writes laws and who they fall on.
- Half right. Law is shaped by power and also constrains it, and partly works.
- He confuses a rule's origin with its authority. A just law is just anyway.
- Right about most laws, wrong about the conclusion. Bad law is how we know good law.

**2. Melos.** The strong do what they can; the weak suffer what they must. Melos
refuses, and is destroyed.

- They described the world correctly and were monstrous anyway. Both are true.
- Their premise was wrong: it cost them the war. Brutality is usually bad strategy.
- They were honest about what every state does. Only the disguise was optional.
- Nothing about their power made it permissible. Melos had a right.

**3. The policy.** A colleague tells you the ethics policy is quoted only at people
without leverage. He is right.

- Then treat it as a weapon and learn to use it.
- Hold to it yourself regardless. Others' exemption is not yours.
- Enforce it upward once, publicly. A rule exists where it is applied.
- Work out who is actually hurt by the double standard, and act on that.

**4. Suppose it is all residue** of past victories, with no standard above the contest.
What follows?

- Very little. You still could not do certain things.
- You owe nobody anything you did not choose to owe.
- The contest is the only place to act. Pick a side and build power.
- Nothing follows. Origin and justification were always separate questions.

## Reading your answer

**The Honest Description.** You read the moral vocabulary as the winner's account of
the fight, and you are consequently very hard to move with an appeal to principle —
which is how most people are moved. The price is precise: on your view, when you are
the weaker party you are not being wronged, only losing. Almost nobody who holds this
believes it about their own case, and it is worth finding out whether you do.

**The Standard Power Does Not Set.** You hold that Melos was wronged whether or not
anyone could have stopped it. This is what makes the sentence "that was unjust" mean
something when the powerless say it about the powerful. You owe an account of where the
standard lives, given that every version of it you have met arrived through a
particular history — and the sceptic's question is how you tell a real standard from a
well-defended one.

**Law Against Power.** You treat law as a built thing, imperfect but not fake, and you
judge it by whether it is applied upward. This is the most operationally useful position
here, because it names what to fix. Its exposure is that a bargain struck under a large
enough imbalance is barely a bargain, and you need a threshold at which consent stops
counting as consent.

**What You Still Could Not Do.** You grant the description and refuse the conclusion:
whatever the genealogy, there are things you cannot bring yourself to do, and you treat
that as knowledge. This is honest about power without being disarmed by it. The
pressure is that your inability is exactly what Nietzsche said it was — history worn
smooth — and you have no argument that it is more, only the fact that it holds.

**Play the Game You Are In.** You conclude that if rules are instruments, better to
hold one. This works, up to the point where you notice other people are holding them
too. The reason anyone ever built an impartial rule is that a world of pure position is
worse for nearly everyone in it, including most of those currently winning.

**What It Actually Costs.** You meet the power argument on its own ground: Melos cost
Athens more than it gained, and cruelty is usually a bad bet. This keeps you inside the
argument rather than moralising at it, and it is frequently just true. Its weakness is
that the wrongness becomes contingent on the accounting — and where a cruelty is
genuinely cheap, which some are, you have nothing left to say about it except that it
worked.

**Then Choose a Side.** You accept that no verdict comes from outside the contest, so
commitment becomes a decision rather than a discovery. That is more honest than most
positions about what a value is under inspection. It leaves you unable to say that
someone on the other side chose wrongly — only that they chose against you. Check
whether you can live inside that sentence.

## Sources

- Plato, *Republic*, Book I (336b–354c), in *Plato: Complete Works*, ed. John M. Cooper
  (Hackett). Thrasymachus' definition and Socrates' contested reply.
- Thucydides, *History of the Peloponnesian War*, Book V, the Melian Dialogue, trans.
  Rex Warner (Penguin Classics).
- Friedrich Nietzsche, *On the Genealogy of Morality* (1887), trans. Maudemarie Clark
  and Alan Swensen (Hackett). The historical derivation of moral vocabulary.
- Karl Marx and Friedrich Engels, *The German Ideology* (written 1845–46) — the ruling
  ideas of an age as the ideas of its ruling class.
- H. L. A. Hart, *The Concept of Law* (Oxford University Press, 1961), chapters 2–4,
  for the standard reply that law cannot be reduced to commands backed by force.
