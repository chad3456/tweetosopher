---
id: the-unexamined-life
title: The Unexamined Life
category: principle
tradition: classical-greek
philosophers:
  - Socrates
era: "c. 399 BCE"
tags: [self-knowledge, examination, meaning, integrity, death]
sources:
  - author: Plato
    title: Apology
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Plato
    title: Crito
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Alexander Nehamas
    title: "The Art of Living: Socratic Reflections from Plato to Foucault"
    published: University of California Press
    year: 1998
  - author: Bernard Williams
    title: "Moral Luck"
    published: Cambridge University Press
    year: 1981
questions:
  - id: q1
    prompt: >-
      Your aunt is eighty-one. She has never in her life asked why she believes what she
      believes. She has kept a village going, buried a husband, raised four children who
      all speak to her, and is by every visible measure content.
    options:
      - id: a
        label: >-
          Something is missing that she cannot miss, because missing it is what it is.
          A life can be good to live and still be unexamined.
        scores: { virtue: 0.9, certainty: 0.5, affect: -0.4 }
      - id: b
        label: >-
          She has examined her life — in doing it well, over sixty years. Examination
          need not take the form of argument.
        scores: { virtue: 0.6, care: 0.6, affect: 0.5 }
      - id: c
        label: >-
          Four children who still speak to her is the whole of the answer. What she
          made is the measure; her inner commentary is not.
        scores: { care: 0.9, consequentialist: 0.4, scope: -0.5 }
      - id: d
        label: >-
          Socrates was describing what he needed, not what everyone needs. It is a
          preference dressed as a universal.
        scores: { relativist: 0.9, certainty: -0.6 }
  - id: q2
    prompt: >-
      You are offered a drug with no side effects that permanently removes the habit of
      self-questioning. You would be reliably decent and much happier. You would never
      again lie awake wondering whether you had got something badly wrong.
    options:
      - id: a
        label: >-
          Refuse. Whatever that person is, he is not you, and the wondering is not a
          symptom — it is the part worth keeping.
        scores: { virtue: 0.9, existentialist: 0.4, certainty: 0.6 }
      - id: b
        label: >-
          Refuse, because someone who cannot ask whether he is wrong will eventually
          be wrong in some way that costs other people.
        scores: { consequentialist: 0.8, scope: 0.6, agency: 0.4 }
      - id: c
        label: >-
          Take it. You have confused a nervous habit with a virtue. Reliable decency
          and no 3 a.m. is a better life by any honest accounting.
        scores: { consequentialist: 0.9, egoist: 0.4, affect: 0.3 }
      - id: d
        label: >-
          Take it, and notice that the refusal is vanity: you want to be the kind of
          person who refuses more than you want the good the refusing protects.
        scores: { existentialist: 0.7, egoist: 0.4, certainty: -0.4 }
  - id: q3
    prompt: >-
      A colleague asks you, seriously and without malice, why you do the work you do.
      You realise mid-sentence that the answer you have been giving for eleven years
      is not true, and has not been true for some time.
    options:
      - id: a
        label: >-
          Say so, out loud, to him. The value of noticing is lost if you file it
          somewhere private and go back to your desk.
        scores: { virtue: 0.8, existentialist: 0.5, certainty: 0.4 }
      - id: b
        label: >-
          Finish the sentence, and sit with it later. Some things are ruined by being
          said before they are understood.
        scores: { virtue: 0.7, care: 0.4, affect: 0.5 }
      - id: c
        label: >-
          It changes nothing you owe anyone. The mortgage, the team and the patients
          are all exactly where they were this morning.
        scores: { deontological: 0.9, certainty: 0.6, agency: -0.4 }
      - id: d
        label: >-
          If the reason has gone, the work should go too, and soon. A life is a series
          of things you are still choosing.
        scores: { existentialist: 1.0, agency: 0.6, certainty: 0.5 }
outcomes:
  - id: the-questioner
    dominant: virtue
    label: The Examined Life
    text: >-
      You hold that self-questioning is not instrumental — it is not for producing better
      decisions, it is part of what a human life at full stretch consists in. This is the
      strongest reading of Socrates and the hardest to argue anyone out of. Its cost is
      that it quietly ranks lives, and the lives it ranks lowest belong disproportionately
      to people who never had the leisure to sit and wonder. You should be able to say
      what you actually think about your aunt.
    base_rate: null
  - id: the-author
    dominant: existentialist
    label: Still Choosing
    text: >-
      You treat examination as live and consequential: if the reason has gone, the thing
      built on it should go. That makes your life yours in a way an inherited one is not.
      The price is instability, and the people around you pay some of it — commitments that
      only hold while you still endorse them are a thinner thing to be on the receiving end
      of than they are to hold.
    base_rate: null
  - id: the-life-lived
    dominant: care
    label: The Life You Made
    text: >-
      You measure a life by what it held together and who it kept: children who still call,
      a village that ran. Examination, on your view, is one activity among many and not the
      one that confers worth. This is a real correction to a philosopher's bias in favour of
      philosophers. It leaves you needing an answer for the person whose life held together
      beautifully around something false or cruel, since it held together all the same.
    base_rate: null
  - id: the-cost-benefit
    dominant: consequentialist
    label: What the Questioning Is For
    text: >-
      You value reflection for what it prevents: the unexamined person eventually does
      damage, or the examined one is merely miserable, and which is which is an empirical
      matter. This is honest about a question most people answer by assertion. Its exposure
      is the drug: if reliable decency plus contentment is genuinely available without the
      3 a.m., your framework says take it, and you should check whether you would.
    base_rate: null
  - id: the-obligations
    dominant: deontological
    label: The Duties Do Not Move
    text: >-
      You separate the interior question from the standing one. Whatever you discovered
      about yourself mid-sentence, the patients are still waiting and the mortgage is still
      due. This is a defence against using self-knowledge as a permission slip, which is one
      of its commonest uses. What it risks is a life run entirely on obligations you have
      stopped believing in — which is exactly the condition Socrates was warning about.
    base_rate: null
  - id: the-preference
    dominant: relativist
    label: One Way to Live
    text: >-
      You read the famous line as autobiography. Socrates is telling a jury what made his
      own life bearable, and generalising. That reading is textually defensible and it
      protects a great many lives from a standard they never signed up to. The difficulty
      is that it also disarms you: if examination is just one taste among others, you have
      no ground to stand on when someone declines to examine something that badly needs it.
    base_rate: null
---

## What it means

The line comes from Plato's *Apology*, at the point where Socrates, already convicted,
is proposing his own sentence. The jury would accept exile, or silence. He refuses both:
to stop questioning would be to disobey the god, and besides, *ho de anexetastos bios ou
biōtos anthrōpōi* — the unexamined life is not worth living, or more literally, is not
liveable, for a human being.

Read carefully, it is not a recommendation of introspection. Socrates is not suggesting
journalling. The examination he means is public, dialectical and largely conducted on
other people: he stops men in the agora and asks them what courage is, or piety, and
keeps asking until the confident answer falls apart. What he is defending at his trial
is that activity — the systematic testing of what everyone assumes they know — as the
thing that makes a life a human one rather than a well-fed animal one. It is also, as he
notes without much apparent regret, the thing that got him prosecuted.

The claim has a strong and a weak form and people slide between them. The weak form:
unreflective people make avoidable mistakes, so examine your life for the same reason you
service a car. The strong form, which is Socrates's: a life without examination is
*defective as a life*, regardless of how well it goes, in the way a piece of music
performed on mute is defective regardless of how the score reads. Alexander Nehamas has
argued that Socrates is best understood as offering himself as an example rather than a
rule — a way of living that he made his own, and which cannot be simply prescribed to
others without becoming the opposite of itself.

## What it suggests

If you take the strong form seriously, some lives that look enviable are not good ones.
The person who inherited their politics, their religion, their profession and their
opinion of their neighbours, and has never had cause to open any of it, is missing
something whether or not they are happy — and crucially, cannot notice that they are
missing it, since noticing is the thing they lack. This is why the doctrine feels
insulting: it is the one criticism that cannot be answered by the person criticised.

It also implies a duty of disruption. If examination is that valuable, then provoking it
in others is a kindness even when it is unwelcome, which is precisely how Socrates
justified being, by his own description, a gadfly on a sluggish horse. Anyone who has
been on the receiving end of a philosophy student at Christmas has felt the other side of
this.

The objection is worth taking at full strength. First, it is suspiciously convenient:
philosophers have concluded that the activity philosophers are best at is the one that
makes a life worthwhile. Second, and more seriously, examination is not free and not
neutral. It requires leisure, safety and a certain temperament; it is easier to interrogate
your commitments when none of them is load-bearing. Third, examination can hollow out what
it inspects. Bernard Williams argued that some reasons should not be examined — the man who
pauses to consider whether he is permitted to save his drowning wife has, as Williams put
it, one thought too many. There are goods that survive only inside an unexamined
attachment, and the demand to hold every commitment up to the light is a demand that some
of them not survive.

## The problem

Every February, Theo drives out to the coast for the same three days, alone, in the same
rented cottage, and has done for twenty-two years. It began after his father died. His
wife has stopped asking; the children think of it as the way he is.

This year, on the second evening, his daughter calls about something else, and near the
end she says, lightly, "Dad, what do you actually do out there?"

And Theo finds he does not know. He can describe the routine — the walk, the pub, the
same table — but not the point of it. The grief it was for is decades gone and did not
survive the arrangement made to hold it. What is left is a rite that runs itself, three
days a year, twenty-two years, a week and a half of his life spent in a cottage for a
reason that expired somewhere around 2009.

He could examine it. He suspects that if he does, honestly, it will not survive, and he
will lose the one part of the year that is entirely his own — not because it was worth
having, but because it was never inspected.

Or he could say nothing, drive home Sunday, and book it again next year.

## The questions

**1. The aunt.** Eighty-one, has never asked why she believes what she believes, kept a
village going, buried a husband, raised four children who all still speak to her, and is
by every visible measure content.

- Something is missing that she cannot miss, because missing it is what it is.
- She has examined her life — in doing it well, over sixty years.
- Four children who still speak to her is the whole answer. What she made is the measure.
- Socrates was describing what he needed, not what everyone needs.

**2. The drug.** No side effects, permanently removes the habit of self-questioning. You
would be reliably decent and much happier, and never again lie awake wondering whether you
had got something badly wrong.

- Refuse. Whatever that person is, he is not you.
- Refuse, because someone who cannot ask whether he is wrong will eventually cost other
  people something.
- Take it. You have confused a nervous habit with a virtue.
- Take it, and notice that refusing is vanity.

**3. The answer that stopped being true.** A colleague asks why you do the work you do,
and mid-sentence you realise your standard answer has not been true for years.

- Say so, out loud, to him.
- Finish the sentence, and sit with it later.
- It changes nothing you owe anyone.
- If the reason has gone, the work should go too.

## Reading your answer

**The Examined Life.** You hold that self-questioning is constitutive, not instrumental —
part of what a human life at full stretch is, not a tool for producing better decisions.
This is the strongest reading of the *Apology*. It quietly ranks lives, and the lives it
ranks lowest belong disproportionately to people who never had the leisure to wonder. Be
sure you can say what you actually think about your aunt.

**Still Choosing.** You treat examination as live: if the reason has gone, the thing built
on it should go. Your life is yours rather than inherited. The instability is real and
other people absorb some of it — a commitment that holds only while you still endorse it
is thinner to receive than it is to hold.

**The Life You Made.** You measure by what a life held together and who it kept. That is a
genuine correction to philosophy's bias in favour of philosophers. You still owe an answer
for the life that held together beautifully around something false, since it held together
all the same.

**What the Questioning Is For.** You value reflection for what it prevents, and treat the
rest as an empirical question rather than a slogan. Honest. The drug is your test case: if
reliable decency plus contentment is genuinely on offer, your framework says take it, and
it is worth finding out whether you would.

**The Duties Do Not Move.** You separate discovery from obligation. Whatever you learned
about yourself, the patients are still waiting. This blocks the commonest use of
self-knowledge, which is as a permission slip. It also risks a life run entirely on
commitments you no longer believe — the condition Socrates was warning about.

**One Way to Live.** You read the line as autobiography: a man telling a jury what made
his own life bearable. Textually defensible, and it spares a great many lives a standard
they never chose. It also disarms you when someone declines to examine something that
badly needs examining.

## Sources

- Plato, *Apology*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett). The trial
  speech in which the line appears.
- Plato, *Crito*, in *Plato: Complete Works*, ed. John M. Cooper (Hackett).
- Alexander Nehamas, *The Art of Living: Socratic Reflections from Plato to Foucault*
  (University of California Press, 1998). The reading on which Socrates offers an example
  rather than a rule.
- Bernard Williams, *Moral Luck* (Cambridge University Press, 1981) — including "Persons,
  Character and Morality", source of the "one thought too many" objection.
