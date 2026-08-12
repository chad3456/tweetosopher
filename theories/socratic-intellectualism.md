---
id: socratic-intellectualism
title: Socratic Intellectualism
category: theory
tradition: classical-greek
philosophers:
  - Socrates
  - Plato
era: "c. 399 BCE"
tags: [knowledge, virtue, wrongdoing, ignorance, responsibility]
sources:
  - author: Plato
    title: Protagoras
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Plato
    title: Meno
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Plato
    title: Gorgias
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Gregory Vlastos
    title: "Socrates: Ironist and Moral Philosopher"
    published: Cornell University Press
    year: 1991
  - author: Terence Irwin
    title: Plato's Ethics
    published: Oxford University Press
    year: 1995
questions:
  - id: q1
    prompt: >-
      Dana, a plant manager, signed off a safety report she had not read, on a line
      she suspected was faulty. A worker was badly hurt. In the review she says,
      quite sincerely, that at the time it did not seem wrong to her.
    options:
      - id: a
        label: >-
          Believe her. She had convinced herself the risk was tolerable, and that
          self-deception is the failure — nobody knowingly wrecks their own life.
        scores: { virtue: 0.9, certainty: 0.4, affect: -0.5 }
      - id: b
        label: >-
          She knew and signed anyway. People act against their own judgement
          constantly, and pretending otherwise excuses them.
        scores: { existentialist: 0.8, certainty: 0.5, agency: 0.4 }
      - id: c
        label: >-
          She knew, and judged that the odds favoured her. That is not ignorance,
          it is a bet on her own interest that happened to lose.
        scores: { egoist: 0.9, consequentialist: 0.3 }
      - id: d
        label: >-
          What she believed is unknowable and mostly beside the point. A man lost
          his hand; that is what the review is for.
        scores: { consequentialist: 0.9, scope: 0.5, affect: -0.4 }
  - id: q2
    prompt: >-
      Your brother-in-law has read the research, agrees the drinking is killing him,
      can recite the effects on his liver better than his doctor, and pours another.
      Ask him and he will tell you he wants to stop.
    options:
      - id: a
        label: >-
          Then he does not really know it, not in the way that moves a person.
          Knowledge that changes nothing was never knowledge of the right kind.
        scores: { virtue: 0.9, affect: -0.3, certainty: 0.4 }
      - id: b
        label: >-
          He knows perfectly well. Wanting and knowing are separate machinery, and
          the second does not drive the first.
        scores: { existentialist: 0.7, egoist: 0.3, affect: 0.6 }
      - id: c
        label: >-
          At the moment he pours, the drink genuinely is the better option to him.
          He is not failing at reasoning; he is reasoning from a different value.
        scores: { egoist: 0.8, relativist: 0.4 }
      - id: d
        label: >-
          The question is what gets him to stop. If calling it ignorance helps and
          calling it weakness does not, use the one that helps.
        scores: { consequentialist: 0.9, care: 0.4, certainty: -0.5 }
  - id: q3
    prompt: >-
      A young officer at a checkpoint has been taught for two years that the people
      on the other side are not quite people. He does something terrible and believes,
      without lying, that it was required of him.
    options:
      - id: a
        label: >-
          He is ignorant in the deepest sense, and the ones who taught him are the
          ones who did the wrong. He is a weapon, not an author.
        scores: { virtue: 0.7, care: 0.4, certainty: -0.4 }
      - id: b
        label: >-
          He could have seen. Something in him agreed to stop looking, and that
          agreement is where his responsibility sits.
        scores: { existentialist: 1.0, agency: 0.6, certainty: 0.5 }
      - id: c
        label: >-
          Judge the act, not the state of his soul. Some things are forbidden
          whether or not the person doing them has worked that out.
        scores: { deontological: 0.9, certainty: 0.8, affect: -0.4 }
      - id: d
        label: >-
          It served him to believe it. Convenient beliefs are held for a reason,
          and the reason is usually the believer's own skin.
        scores: { egoist: 0.8, consequentialist: 0.3, affect: -0.3 }
outcomes:
  - id: the-failure-of-sight
    dominant: virtue
    label: Wrongdoing Is Blindness
    text: >-
      You take the Socratic line: nobody pursues what they see clearly as bad for
      them, so vice is a defect of vision rather than of will. It explains a great
      deal that "they just chose evil" cannot — how ordinary people staff atrocities,
      how self-deception does most of the work. The cost is that it makes blame hard
      to locate. If the officer could not see, punishing him is treating a sick man
      as a criminal, and you will have to say what you would do with him instead.
    base_rate: null
  - id: the-author
    dominant: existentialist
    label: You Chose It
    text: >-
      You think people act against their own best judgement all the time, and that
      the moment of choosing is exactly where responsibility lives. This keeps agency
      intact where the Socratic account dissolves it. What it owes you is an account
      of the mechanism: if a person can see the better and take the worse, then reason
      is not steering, and you need to say what is — without making the choice a
      brute, unexplained event that just happens inside someone.
    base_rate: null
  - id: the-interest
    dominant: egoist
    label: They Knew What They Wanted
    text: >-
      You read apparent weakness as a preference you disapprove of. The drinker is
      not confused; he values the drink. The manager was not ignorant; she was
      betting. This is unfalsifiable in the wrong way if you are not careful — any
      behaviour can be redescribed as revealing a preference — and you should be able
      to say what evidence would show you someone genuinely acted against their own
      interest rather than for an interest you find ugly.
    base_rate: null
  - id: the-damage
    dominant: consequentialist
    label: The Harm Is the Fact
    text: >-
      You are impatient with the interior. States of knowledge are unobservable, and
      the hand is off either way. This makes you effective and hard to manipulate by
      anyone with a good excuse. Its exposure is that you have no principled
      difference between the person who erred and the person who intended, which is a
      distinction almost every legal system in history has thought worth the trouble
      of drawing.
    base_rate: null
  - id: the-forbidden
    dominant: deontological
    label: Some Things Are Forbidden Anyway
    text: >-
      You hold that certain acts are wrong regardless of what the actor understood,
      and that a moral education which failed is not a defence. This gives you a
      standard that indoctrination cannot erode. The pressure on it comes from cases
      where the person genuinely could not have known — the child soldier, the
      believer raised inside a closed world — and where holding the line starts to
      look like punishing people for the accident of where they were born.
    base_rate: null
---

## What it means

Socrates held, as Plato reports him in the *Protagoras* and the *Meno*, that virtue is
knowledge and that nobody does wrong willingly. The two claims are one claim. If you
genuinely know that a course of action is bad for you, you will not take it; therefore
everyone who takes a bad course does so because they have failed to see it clearly.
Wrongdoing is a cognitive error, like a badly measured plank, not a rebellion of the
will against what the mind can see perfectly well.

The argument in the *Protagoras* runs through a discussion of pleasure. Socrates gets
his interlocutors to agree that what people are really doing when they "give in to
pleasure" is choosing a smaller good over a larger one — the drink now over the health
later. But that is a measuring error. It is being fooled the way a near object fools you
into thinking it is larger than a far one. What such a person needs is not more
willpower but the art of measurement: a reliable way of seeing goods at their true size.
On this picture, moral failure and arithmetical failure are the same kind of failure.

The consequence Socrates draws in the *Gorgias* is stranger still: it is better to
suffer injustice than to do it, and the tyrant who murders freely is the most miserable
man alive, because he has damaged the only thing that is really his. He does not know
this, which is precisely his problem. Gregory Vlastos argued that Socrates held these
positions in earnest and that Plato later moved away from them — the tripartite soul of
the *Republic*, with its warring parts, is a repudiation of the idea that reason alone
determines action. Aristotle attacks the doctrine directly in the *Nicomachean Ethics*,
saying that it plainly contradicts what we observe.

## What it suggests

If Socrates is right, then moral improvement is education and moral failure is
misunderstanding. Blame, punishment and shame are all category errors — you would not
shame a man for miscalculating a tax return, you would show him the correct method.
Prisons become schools or hospitals. The angry demand that someone should have known
better collapses into the observation that they did not.

It also lands a real blow on a comforting picture of ourselves. Most people who have
done something they later found indefensible do not report a moment of choosing evil.
They report that at the time it seemed fine, or necessary, or not their business, or
smaller than it turned out to be. Hannah Arendt's account of Adolf Eichmann, whatever
one makes of it as history, describes a man who is not a monster but a fool — and that
is a Socratic diagnosis. The mechanism by which ordinary people do terrible things looks
much more like failed seeing than like chosen wickedness.

The strongest objection is Aristotle's, and it is simply that the doctrine is false to
experience. *Akrasia* — acting against your own better judgement — is not a rare
philosophical curiosity; it is Tuesday. The dieter knows. The smoker knows. The person
sending the message at 2 a.m. knows, is watching themselves know, and sends it anyway.
Socrates has to say that at the instant of acting, the belief lapses or is overwhelmed.
That may be right, but it looks like the theory rescuing itself by redescribing every
counterexample. And there is a moral cost to the redescription: a doctrine on which
nobody ever chooses wrong is a doctrine on which nobody is ever guilty, and most of us
are not willing to say that about the worst things human beings have done.

## The problem

Marcus runs procurement for a mid-sized hospital trust. Eighteen months ago he approved
a supplier whose sterilisation certificates were, on any careful reading, out of date.
He did read them. He remembers a small internal flicker — the sense of a thing not
sitting right — and he remembers what he did with it, which was to note that the
contract deadline was Friday, that the alternative supplier was forty per cent dearer,
that the certificates were probably a renewal formality, and that four people were
waiting for his signature.

Six patients were infected. Two died.

At the inquiry, Marcus is asked whether he knew the certificates were invalid. He says
no, and the panel can tell he is not lying. He is also not telling the truth, and he
knows that too, and cannot find the words for the difference.

His counsel wants to argue he did not know. The families want to hear that he did. The
regulator wants to know whether he is dangerous or merely unlucky, which is a question
about whether he chose. And Marcus, lying awake, cannot answer the only question that
matters to him: whether he was a man who failed to see, or a man who arranged not to.

## The questions

**1. The manager who did not read.** Dana signed off a safety report she had not read,
on a line she suspected was faulty. A worker was badly hurt. She says, sincerely, that
at the time it did not seem wrong.

- Believe her. She had convinced herself the risk was tolerable, and that self-deception
  is the failure.
- She knew and signed anyway. People act against their own judgement constantly.
- She knew, and bet on the odds. That is interest, not ignorance.
- What she believed is unknowable and beside the point. A man lost his hand.

**2. The brother-in-law.** He can recite the effects on his liver better than his doctor
can, says he wants to stop, and pours another.

- Then he does not know it in the way that moves a person.
- He knows perfectly well. Wanting and knowing are separate machinery.
- At the moment he pours, the drink genuinely is better to him.
- The question is what gets him to stop; use whichever description helps.

**3. The officer at the checkpoint.** Taught for two years that the people opposite are
not quite people, he does something terrible and believes it was required of him.

- He is ignorant in the deepest sense; the ones who taught him did the wrong.
- He could have seen. Something in him agreed to stop looking.
- Judge the act, not the state of his soul.
- It served him to believe it. Convenient beliefs are held for a reason.

## Reading your answer

**Wrongdoing Is Blindness.** You hold that vice is a defect of vision. This explains what
"they chose evil" cannot: how ordinary people staff atrocities. It costs you blame. If
Marcus could not see, then he is unwell rather than guilty, and you owe the families an
account of what should happen to him that does not smuggle punishment back in under
another name.

**You Chose It.** You locate responsibility at the moment of turning away. This preserves
agency where the Socratic account dissolves it, and it matches how the people who did
such things describe themselves afterwards. What you owe is a mechanism — if a person can
see the better and take the worse, something other than reason is steering, and you have
to say what, without making the choice a brute event.

**They Knew What They Wanted.** You read weakness as preference. The drinker is not
confused; he values the drink more than the years. This is clear-eyed about how much
apparent confusion is convenient. Be careful that it is not unfalsifiable: say what
would show you that someone acted against their own interest rather than for an interest
you dislike.

**The Harm Is the Fact.** You are impatient with the interior, because it is unobservable
and the damage is not. This makes you hard to manipulate with a good excuse. Its price is
that you have no principled gap between error and intention, which nearly every legal
system has thought worth the trouble of drawing.

**Some Things Are Forbidden Anyway.** You hold that a failed moral education is not a
defence, which gives you a standard indoctrination cannot dissolve. The pressure comes
from the person who genuinely could not have known — and from how uncomfortably close
that is to punishing people for where they were born.

## Sources

- Plato, *Protagoras*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). The
  argument that apparent weakness is a failure of measurement.
- Plato, *Meno*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). Whether virtue
  can be taught.
- Plato, *Gorgias*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). That it is
  better to suffer wrong than to do it.
- Aristotle, *Nicomachean Ethics*, Book VII — the direct objection from *akrasia*.
- Gregory Vlastos, *Socrates: Ironist and Moral Philosopher* (Cornell University Press,
  1991). The developmental reading on which the mature Plato abandons the doctrine.
- Terence Irwin, *Plato's Ethics* (Oxford University Press, 1995).
