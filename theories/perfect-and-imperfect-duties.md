---
id: perfect-and-imperfect-duties
title: Perfect and Imperfect Duties
category: principle
tradition: kantian-ethics
philosophers:
  - Immanuel Kant
era: "1785"
tags: [duty, obligation, beneficence, latitude, promises]
sources:
  - author: Immanuel Kant
    title: Groundwork of the Metaphysics of Morals
    published: "trans. Mary Gregor, Cambridge University Press"
    year: 1785
  - author: Immanuel Kant
    title: The Metaphysics of Morals
    published: "trans. Mary Gregor, Cambridge University Press"
    year: 1797
  - author: Onora O'Neill
    title: "Constructions of Reason: Explorations of Kant's Practical Philosophy"
    published: Cambridge University Press
    year: 1989
  - author: Barbara Herman
    title: The Practice of Moral Judgment
    published: Harvard University Press
    year: 1993
questions:
  - id: q1
    prompt: >-
      You promised your sister you would collect her from the airport at seven. At
      six you get a call: a colleague has been left without childcare and is about
      to lose a shift she cannot afford to lose. You cannot do both. Your sister
      will be inconvenienced and can take a train.
    options:
      - id: a
        label: >-
          Keep the promise. A promise made is a debt owed to a particular person,
          and it is not cancelled by finding a better use for the evening.
        scores: { deontological: 1.0, certainty: 0.6, scope: -0.3 }
      - id: b
        label: >-
          Help the colleague. More good is done, and your sister's evening is the
          cheapest thing on the table.
        scores: { consequentialist: 1.0, scope: 0.7, agency: 0.4 }
      - id: c
        label: >-
          Help the colleague, but call your sister first and take the cost of it.
          A promise you release yourself from is not a promise.
        scores: { deontological: 0.6, care: 0.6, certainty: -0.3 }
      - id: d
        label: >-
          It turns on who these people are to you. Your sister is your sister; a
          colleague in trouble at six o'clock is also not nothing.
        scores: { care: 1.0, virtue: 0.4, scope: -0.6 }
  - id: q2
    prompt: >-
      You can afford to give away a fifth of your income, or a fiftieth, or nothing.
      Kant holds that helping others is a duty, but one that leaves you latitude —
      you must adopt the end, not hit a number. A friend asks how much is enough.
    options:
      - id: a
        label: >-
          Enough that it shapes what you do with your life, but no number is owed.
          The duty is to be someone whose plans include other people.
        scores: { deontological: 0.8, virtue: 0.6, certainty: -0.3 }
      - id: b
        label: >-
          As much as you can give before you are worse off than the people you
          would be helping. Latitude here is just a licence to do less.
        scores: { consequentialist: 1.0, scope: 1.0, agency: 0.5 }
      - id: c
        label: >-
          Enough that the people actually in front of you — parents, neighbours,
          the friend who asked — are met. Strangers come after that.
        scores: { care: 0.9, scope: -0.7 }
      - id: d
        label: >-
          The question is malformed. Generosity is a virtue you develop, not a
          quota you clear, and quotas tend to kill it.
        scores: { virtue: 0.9, deontological: 0.3, affect: 0.4 }
  - id: q3
    prompt: >-
      A colleague asks you to sign a reference saying you supervised work you did not
      supervise. It is true in substance — he did the work — and the form requires a
      supervisor's name. Refusing costs him the job.
    options:
      - id: a
        label: >-
          Refuse. Attesting to something you did not witness is a false statement
          whatever the surrounding facts, and you do not make those.
        scores: { deontological: 1.0, certainty: 0.8, agency: -0.4 }
      - id: b
        label: >-
          Sign. The document's purpose is to certify that the work was done; it was.
          Refusing serves a form, not a person.
        scores: { consequentialist: 0.9, agency: 0.5, certainty: -0.5 }
      - id: c
        label: >-
          Refuse to sign, and then spend real effort finding him another route.
          You owe him help; you do not owe him your signature.
        scores: { deontological: 0.7, care: 0.6, virtue: 0.4 }
      - id: d
        label: >-
          Sign, and notice that you are now the kind of person who signs. That is
          the cost, and it is a real one.
        scores: { virtue: 0.8, consequentialist: 0.4, certainty: -0.4 }
  - id: q4
    prompt: >-
      You have a talent you have let rust for a decade — you were good, and you
      stopped. Nobody is harmed by this. Kant lists cultivating one's powers among
      the duties one owes oneself.
    options:
      - id: a
        label: >-
          It is a genuine failing. A rational being who lets its capacities rot
          cannot coherently will that as a way for everyone to live.
        scores: { deontological: 0.9, certainty: 0.6 }
      - id: b
        label: >-
          It is a failing only if the world is worse for it. Talents are for using
          on somebody's behalf, not for polishing.
        scores: { consequentialist: 0.9, scope: 0.6 }
      - id: c
        label: >-
          It is a loss, not a wrong. What you owe yourself is a life you can look
          back on, and there is no court but you.
        scores: { virtue: 0.8, egoist: 0.4, authority: 0.5 }
      - id: d
        label: >-
          Duties to oneself are a confusion. Where there is nobody to be wronged,
          there is nobody to be owed.
        scores: { consequentialist: 0.7, existentialist: 0.4, certainty: 0.4 }
outcomes:
  - id: the-strict-and-the-wide
    dominant: deontological
    label: The Strict and the Wide
    text: >-
      You keep two kinds of obligation apart: things you must never do, whatever
      follows, and ends you must adopt but may pursue in your own way. That
      structure explains why a small lie can be worse than a large omission without
      making you a monster about charity. What it costs you is the cases where the
      strict duty is trivial and the omission is enormous — you have to say, and
      mean, that you will not lie to save the day.
    base_rate: null
  - id: one-ledger
    dominant: consequentialist
    label: One Ledger
    text: >-
      You do not think a duty gets stricter by being negative. Failing to help and
      choosing to harm both show up as damage, and you weigh them together. This
      makes you consistent where the two-tier view has to do special pleading. The
      price is latitude: with one ledger, there is no principled place to stop
      giving, and every hour you spend on yourself is an hour that fails an
      argument you accept.
    base_rate: null
  - id: the-cultivated-self
    dominant: virtue
    label: What the Rule Cannot Say
    text: >-
      You read duty as a shape a life takes rather than a set of instructions.
      Latitude is not slack to you; it is the space in which character does its
      work, and a person who needed the number would already have missed the point.
      The objection you owe an answer to is that this is unfalsifiable from the
      inside: someone doing very little and someone doing a great deal can both
      report that their plans include other people.
    base_rate: null
  - id: the-particular-claim
    dominant: care
    label: The Person in Front of You
    text: >-
      Your obligations run through particular people, and you distrust a theory that
      converts your sister into an instance. That is how nearly every real duty is
      actually experienced, and it explains promises better than any calculation
      does. Its exposure is scale: it gives you almost nothing to say to the claim
      of someone you will never meet, and most of the harm and help available to a
      modern life is at that distance.
    base_rate: null
---

## What it means

Kant divides duties twice over, and the two divisions are often run together. The
first cut is between duties to oneself and duties to others. The second — the one at
issue here — is between **perfect** and **imperfect** duties.

A perfect duty is strict. It specifies an act or an omission, it holds in every case,
and it leaves you no discretion about when to comply: do not make a lying promise, do
not destroy yourself, do not treat another person merely as a means. An imperfect duty
requires you to adopt an *end* rather than perform an act: help others, cultivate your
own powers. You must take the end on, but Kant says it leaves **latitude** (*Spielraum*)
— you decide when, how much, and toward whom. In the *Metaphysics of Morals* (1797) he
calls imperfect duties "meritorious": fulfilling them earns credit in a way that not
committing murder does not.

In the *Groundwork of the Metaphysics of Morals* (1785) the distinction falls out of the
test Kant applies to maxims. Some maxims cannot even be *conceived* as universal laws —
a world in which everyone made lying promises when convenient is a world in which
promising does not exist, so the maxim destroys its own conditions. Those generate
perfect duties. Other maxims can be conceived universally but cannot be *willed*: a
world of universal indifference is coherent, but Kant argues you cannot rationally will
it, since you will need others' help and would be willing away the possibility of
receiving it. Those generate imperfect duties. Commentators call these the contradiction
in conception and the contradiction in the will; the labels are not Kant's, but the two
tests are visibly doing different work in his four examples.

## What it suggests

If the division holds, moral failure comes in two kinds that should not be compared on a
single scale. Breaching a perfect duty is not a large quantity of the same stuff as
giving too little to charity; it is a different kind of failure, and no amount of good
done elsewhere buys it back. That is why a Kantian can say, without inconsistency, that
a modest lie is impermissible while leaving open how much of your income you owe to
famine relief.

It also explains something a purely maximising view struggles with: why we think there
is such a thing as doing enough. On the utilitarian side, every hour not spent producing
good is an hour that fails; the theory has no natural stopping point, and its defenders
have to reach for indirect arguments about burnout to get one. Latitude gives the
Kantian a stopping point built into the structure of the duty rather than bolted on.

The strongest objection is that latitude is too generous and strictness too blind, and
that Kant cannot tune either. Take latitude first: if the duty of beneficence is
satisfied by *some* helping, chosen by me, then a person who gives a coin a year has
technically adopted the end, and Kant's framework has trouble denying it. Critics have
argued the account is either empty or must smuggle in a quantity it has no way to
derive. Onora O'Neill and Barbara Herman have each defended richer readings — that
adopting an end constrains deliberation across a whole life, not just at moments of
donation — but the reading is contested and the vagueness is real.

Now strictness. If perfect duties admit no exception in favour of inclination, then in
the case where lying would save an innocent life, the Kantian answer is fixed before the
details arrive. Kant embraced this in his 1797 reply to Benjamin Constant. Many of his
sympathisers think he did not have to, and that a duty can be exceptionless in form
while its scope is settled by more careful description of the act. That repair is
plausible, and it is also the point at which a critic will say the strictness was never
doing the work claimed for it.

## The problem

Ravi runs a small architectural practice. On Monday he promised a client, in writing,
that the drawings would be with the planning office by Friday.

On Thursday his draughtswoman's mother has a stroke. She is the only one who can drive
to the hospital, four hours away, and the only person who can finish the drawings by
Friday. Ravi can finish them himself if he works through the night — or he can tell her
to go, miss the deadline, and cost the client a delay that will run into five figures.

There is a third option and he can see it clearly. He can submit the incomplete set with
the structural certificate marked as pending and his own initials where the sign-off
should be, and lodge the corrected pages on Monday. The office almost never checks. The
building would be no less safe, the client would be whole, and his draughtswoman would
be at her mother's bedside by nine.

Three duties, and they are not the same kind of thing: a promise to a client, help owed
to someone who works for him, and a signature that would say something not true. Only
one of the three, on Kant's account, is the sort that does not bend.

## The questions

**1. The promise and the shift.** You promised to collect your sister at seven. A
colleague will lose a shift she cannot afford unless you help instead.

- Keep the promise. A promise is a debt owed to a particular person, not cancelled by a
  better use of the evening.
- Help the colleague. More good is done, and your sister's evening is the cheapest thing
  on the table.
- Help the colleague, but call your sister first and take the cost of it.
- It turns on who these people are to you.

**2. How much is enough?** Helping others is a duty that leaves latitude. A friend asks
what that amounts to in pounds.

- Enough that it shapes your life, but no number is owed.
- As much as you can give before you are worse off than those you help.
- Enough that the people in front of you are met; strangers come after.
- The question is malformed — generosity is a virtue, not a quota.

**3. The reference.** A colleague asks you to sign that you supervised work you did not
supervise. It is true in substance. Refusing costs him the job.

- Refuse. You do not attest to what you did not witness.
- Sign. The document exists to certify that the work was done, and it was.
- Refuse, then spend real effort finding him another route.
- Sign, and notice that you are now someone who signs.

**4. The rusted talent.** You were good at something and stopped. Nobody is harmed.

- A genuine failing; you cannot will a world where everyone lets their powers rot.
- A failing only if the world is worse for it.
- A loss, not a wrong. There is no court but you.
- Duties to oneself are a confusion — no one is wronged, so no one is owed.

## Reading your answer

**The Strict and the Wide.** You hold two kinds of obligation apart, and you think the
difference is in kind rather than degree. This buys you a coherent account of why small
prohibitions can outrank large omissions. It bills you in the case where the prohibition
is trivial and the omission is catastrophic, and you must be willing to say there that
you will not do the small wrong.

**One Ledger.** You will not let a duty become stricter merely by being negative. That
consistency is real, and the two-tier view has to work hard against it. What you inherit
is the demandingness problem in its full form: on your view there is no principled hour
at which you have done enough, and you almost certainly stop before you have.

**What the Rule Cannot Say.** You read latitude as the room in which character shows,
not as slack. The difficulty is that from the inside, this is very hard to fail: the
generous person and the stingy one can each report that their plans include others, and
you have no external check to tell them apart.

**The Person in Front of You.** You take obligations to run through particular
relationships, and you resist a theory that turns your sister into a case. Promising and
partiality both come out right on your view. Distance is where it thins: you have little
to say to a claim from someone you will never meet, and much of what a modern life does
is done at exactly that range.

## Sources

- Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785), trans. Mary Gregor,
  Cambridge University Press — the four examples in Section II from which the perfect
  and imperfect division is usually read.
- Immanuel Kant, *The Metaphysics of Morals* (1797), trans. Mary Gregor, Cambridge
  University Press — the developed treatment of latitude and meritorious duty.
- Onora O'Neill, *Constructions of Reason: Explorations of Kant's Practical Philosophy*,
  Cambridge University Press (1989).
- Barbara Herman, *The Practice of Moral Judgment*, Harvard University Press (1993) — on
  what adopting an end commits a deliberating agent to.
