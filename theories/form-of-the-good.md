---
id: form-of-the-good
title: The Form of the Good
category: theory
tradition: platonism
philosophers:
  - Plato
era: "c. 375 BCE"
tags: [metaethics, objectivity, knowledge, expertise, moral-realism]
sources:
  - author: Plato
    title: "Republic, Books VI–VII"
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Aristotle
    title: "Nicomachean Ethics, Book I"
    published: "in The Complete Works of Aristotle, ed. Jonathan Barnes, Princeton"
  - author: Iris Murdoch
    title: The Sovereignty of Good
    published: Routledge & Kegan Paul
    year: 1970
  - author: J. L. Mackie
    title: "Ethics: Inventing Right and Wrong"
    published: Penguin
    year: 1977
questions:
  - id: q1
    prompt: >-
      Two societies disagree about whether it is acceptable to leave the very
      old to die when food is short. Each has reasoned carefully from its own
      history and conditions. Is one of them wrong?
    options:
      - id: a
        label: >-
          Yes. One of them has got a real question wrong, whether or not
          anyone can currently prove which.
        scores: { divine: 0.7, deontological: 0.4, certainty: 0.8 }
      - id: b
        label: >-
          No. There is no vantage point above both of them from which the
          question could even be asked.
        scores: { relativist: 1.0, certainty: -0.8, scope: -0.4 }
      - id: c
        label: >-
          One arrangement produces more suffering than the other, and that
          is as objective as this gets.
        scores: { consequentialist: 1.0, scope: 0.7 }
      - id: d
        label: >-
          Ask which society you would rather be old in, and whether the
          people in it can look at each other. That is not nothing.
        scores: { virtue: 0.8, care: 0.4, affect: 0.5 }
  - id: q2
    prompt: >-
      Plato thinks moral knowledge is like mathematics — hard, learnable,
      and something most people simply do not have. A committee of experts
      would therefore be better at moral questions than a public vote.
    options:
      - id: a
        label: >-
          Broadly yes. We defer to expertise on every other hard question;
          the exception we make for ethics is flattery, not reason.
        scores: { divine: 0.5, consequentialist: 0.5, authority: -0.8 }
      - id: b
        label: >-
          No. Moral standing does not come with a qualification, and rule
          by people who know best has a consistent historical record.
        scores: { contractarian: 1.0, authority: 0.7, certainty: 0.4 }
      - id: c
        label: >-
          There is nothing to be expert about. What the committee would
          have is confidence, not knowledge.
        scores: { relativist: 0.9, nihilist: 0.4 }
      - id: d
        label: >-
          Some people really are better at this — not by training but by
          attention. You can usually tell who they are.
        scores: { virtue: 1.0, affect: 0.6, certainty: -0.3 }
  - id: q3
    prompt: >-
      You have believed something was right your whole adult life. Someone
      shows you an argument you cannot answer that it is wrong. You are not
      persuaded, but you cannot say where the argument fails.
    options:
      - id: a
        label: >-
          Hold the belief and keep looking. The failure is in your grasp of
          the reason, not in there being one.
        scores: { divine: 0.7, certainty: 0.7, affect: 0.5 }
      - id: b
        label: >-
          Change the belief. An unanswerable argument is what being wrong
          feels like from the inside.
        scores: { consequentialist: 0.5, contractarian: 0.5, certainty: -0.6 }
      - id: c
        label: >-
          Neither. It shows that arguments were never what held the belief
          up, and pretending otherwise is theatre.
        scores: { relativist: 0.8, existentialist: 0.4, affect: 0.7 }
      - id: d
        label: >-
          Watch how the person making the argument lives before deciding
          anything. That will tell you more than the argument does.
        scores: { virtue: 0.9, care: 0.4, affect: 0.6 }
  - id: q4
    prompt: >-
      Plato's prisoner escapes the cave, sees the sun, and returns to tell
      the others what is really there. They think he has come back with his
      eyesight ruined, and they are ready to kill him for it.
    options:
      - id: a
        label: >-
          He should go back anyway. Knowing something and keeping it to
          yourself is a way of not really knowing it.
        scores: { divine: 0.7, deontological: 0.4, authority: -0.6 }
      - id: b
        label: >-
          The prisoners have a point. Someone certain he has seen the truth
          and that the rest of us are in shadows is dangerous.
        scores: { contractarian: 0.8, relativist: 0.5, certainty: -0.7 }
      - id: c
        label: >-
          Judge by what happens. If he can improve their lives he should
          return; if he will only be killed, the ascent was the point.
        scores: { consequentialist: 1.0, egoist: 0.3, scope: 0.5 }
      - id: d
        label: >-
          The whole picture is wrong. Nobody gets out of the cave; we get
          slightly better at describing the shadows, together.
        scores: { relativist: 0.8, contractarian: 0.4, certainty: -0.9 }
outcomes:
  - id: there-is-a-sun
    dominant: divine
    label: There Is Something to Get Right
    text: >-
      You hold that moral questions have answers that do not depend on us —
      that when two societies disagree, at least one is mistaken, and the
      mistake is about something. This is what makes moral progress a
      coherent idea rather than just a change of fashion. Its cost is the
      question Mackie pressed: what kind of thing is a value, that it exists
      independently of any valuer and yet reaches into a person and moves
      them? You need an answer, and "it just does" is the answer most people
      in your position end up giving.
    base_rate: null
  - id: the-cave-is-all-there-is
    dominant: relativist
    label: Nobody Leaves the Cave
    text: >-
      You think there is no vantage above all frameworks from which to judge
      them, and that claims to have found one have a poor record. This is
      modest and hard to argue against directly. What it costs you is the
      sentence "that was wrong" said about another time or place — you can
      say it was wrong by our lights, but the person who wants to say slavery
      was wrong even where everyone approved of it is saying something more,
      and you have to tell them they are confused.
    base_rate: null
  - id: the-suffering-is-real
    dominant: consequentialist
    label: The Measurable Thing
    text: >-
      You locate objectivity in something you can point at: whether people are
      hurt, whether they are fed, whether they can live. This gives you a
      standard without any metaphysics, and it is enough for most real
      disagreements. The pressure comes at the edges — when you have to say
      why suffering is the thing that matters, since that claim is not itself
      measurable, and someone who says honour or holiness matters more is not
      making an arithmetical error.
    base_rate: null
  - id: the-trained-eye
    dominant: virtue
    label: The Trained Eye
    text: >-
      You think moral perception is real and unevenly distributed — that some
      people simply see situations better, the way some people hear music
      better, and that this shows in how they live rather than in what they
      can prove. Iris Murdoch made this the centre of her reading of Plato.
      What it owes you is a check: if the expert is identified by the
      judgement of people who are themselves untrained, the circle is small,
      and every charismatic fraud in history has passed the same test.
    base_rate: null
  - id: what-we-can-agree
    dominant: contractarian
    label: The Standard We Can Build
    text: >-
      You are wary of anyone who claims to have seen the sun, and you locate
      moral authority in what people can justify to each other rather than in
      what one of them has glimpsed. This is the strongest available defence
      against rule by the certain. Its exposure is that agreement is not
      truth: a settlement everyone accepts can still be a settlement built on
      a mistake, and you have left yourself no way to say so from inside.
    base_rate: null
---

## What it means

In Books VI and VII of the *Republic*, Plato asks what makes anything good, and gives
an answer that sounds outlandish and has never quite gone away: that goodness is not a
property things have because we approve of them, but something that exists in its own
right, and which particular good things resemble in the way a shadow resembles what
casts it. He calls it the Form of the Good.

He does not argue for it directly. He offers three images. The first is the sun: as the
sun makes objects visible and also makes them grow, so the Good makes things knowable
and also makes them be what they are. The second is a divided line, ordered from
shadows and reflections up through visible objects, then mathematical reasoning, and
finally the Forms themselves — a ladder from opinion to knowledge. The third is the
cave. Prisoners are chained facing a wall, seeing only shadows cast by objects carried
behind them in firelight, and taking those shadows for the whole of reality. One is
freed, dragged painfully up into the sunlight, and eventually sees the sun. When he
returns to tell the others, they find him ridiculous. Plato, whose teacher had been
executed by Athens, adds that they would kill him if they could.

Two claims are being made at once, and they can be separated. The first is that there
are objective moral facts, not fixed by any culture's opinion. The second, more
demanding, is that these facts are *known* the way mathematics is known — by a
difficult training that most people never complete, so that moral competence is an
achievement rather than a birthright. Aristotle, Plato's own student, accepted the
first and rejected the second: in Book I of the *Nicomachean Ethics* he says the
universal Good is either non-existent or useless, since a doctor does not treat health
in general but this patient, in this bed, tonight.

## What it suggests

Take the Good seriously and moral disagreement changes character. It stops being a
clash of preferences to be negotiated and becomes a question with an answer, where at
least one party is mistaken. This is what lets you say that a practice was wrong even
in a society where everyone endorsed it, which is a sentence most people want to be
able to say and which is surprisingly hard to earn.

It also raises the stakes on moral education. If the Good is something you can see
better or worse, then a person's moral views are not simply theirs to have. They can be
undeveloped, in the way an untrained ear is undeveloped, and improving them is not
imposition but instruction. Iris Murdoch built her entire ethics on this thought: that
the central moral activity is not choosing but *attending* — looking at a person or
situation until you see it truly, since by the time you choose, the seeing has already
determined what choices are available to you.

And it has an unattractive political consequence, which Plato accepted without
embarrassment. If moral knowledge is expertise, then those who have it should govern.
The *Republic* ends with philosopher-kings and a rigidly stratified city, and the
twentieth century's most influential attack on Plato — Karl Popper's — took this
seriously as the ancestor of a familiar and terrible political form.

The deepest objection is J. L. Mackie's, and it is metaphysical rather than political.
Objective values, if they existed, would be very strange entities: things whose mere
existence somehow obliges anyone who perceives them, unlike any other fact in the
world. Facts about the arrangement of matter do not, by themselves, tell you to do
anything. Mackie's conclusion was that ordinary moral thought does presuppose such
things, and that this is exactly why ordinary moral thought is systematically false.
Against this, the Platonist has to say either that values are a special kind of fact
with built-in authority, or that we perceive them with a faculty that is not quite
perception — and both replies have the shape of a promissory note.

## The problem

The trust's ethics committee has to decide whether to keep funding a treatment.

It costs about four hundred thousand pounds per patient per year. It does not cure
anything. For roughly one child in six it converts a death at four into a death at
eleven, with the seven years spent mostly at home rather than mostly in hospital. There
are eleven children in the region who would qualify. The same money would fund the
district's entire community paediatric nursing service twice over.

Priya chairs the committee. She has spent three meetings watching two of her colleagues
talk past each other in a way that is starting to frighten her. Rob does the arithmetic
and thinks the answer is obvious and that the only thing preventing it is squeamishness
about saying so in front of parents. Elaine thinks that a health service which decides
some children are not worth treating has already become something other than a health
service, whatever the arithmetic says, and that the arithmetic is a way of not looking
at the children.

What frightens Priya is not that they disagree. It is that she cannot work out what
they are disagreeing *about*. If there is a fact here — something the committee could
get right or wrong, independent of how they vote — then the vote is a way of finding it
and the minority is mistaken. If there is not, then the vote is just a vote, the
committee is a mechanism for producing a decision rather than a judgement, and the
letter she signs to eleven families is an exercise of power dressed as an answer.

She has to write the letter either way. She would like to know which one she is
writing.

## The questions

**1. Two societies.** Each has reasoned carefully from its own history about whether to
leave the very old to die when food is short, and they disagree. Is one of them wrong?

- Yes. One has got a real question wrong, whether or not anyone can prove which.
- No. There is no vantage above both from which the question could be asked.
- One arrangement produces more suffering, and that is as objective as this gets.
- Ask which one you would rather be old in. That is not nothing.

**2. The committee of experts.** If moral knowledge is like mathematics, experts should
decide moral questions rather than the public.

- Broadly yes. The exception we make for ethics is flattery, not reason.
- No. Moral standing does not come with a qualification.
- There is nothing to be expert about; that is confidence, not knowledge.
- Some people are better at this — by attention, not training. You can tell.

**3. The unanswerable argument.** You cannot rebut it and you are not persuaded.

- Hold the belief and keep looking. The failure is in your grasp of the reason.
- Change the belief. This is what being wrong feels like from the inside.
- Neither — it shows arguments were never holding the belief up.
- Watch how the arguer lives before deciding.

**4. The return to the cave.** He has seen the sun; they think his eyes are ruined and
are ready to kill him.

- He should go back anyway. Keeping it to yourself is a way of not knowing it.
- The prisoners have a point about people certain they have seen the truth.
- Judge by what happens: return if it helps, otherwise the ascent was the point.
- Nobody gets out. We get better at describing shadows, together.

## Reading your answer

**There Is Something to Get Right.** You hold that moral questions have answers
independent of us, which is what makes moral progress more than a change of fashion.
The bill comes from Mackie: say what kind of thing a value is, such that it exists
without a valuer and still moves the person who sees it. Most people in your position
end up saying "it just does", and that is worth noticing about your own view.

**Nobody Leaves the Cave.** You doubt any vantage above all frameworks, and the record
of people claiming one supports you. The cost is a specific sentence: that a practice
was wrong even where everyone approved of it. You can say it was wrong by our lights.
Someone who means more than that is, on your view, confused — and you should check
whether you are willing to tell them so.

**The Measurable Thing.** You put objectivity where you can point at it: harm, hunger,
whether people can live. This gets you a standard with no metaphysics, and it settles
most real arguments. It strains at the edge, where you must say why suffering is the
thing that counts — a claim that is not itself measurable, and that someone who ranks
honour or holiness higher is not making an arithmetical error about.

**The Trained Eye.** You think moral perception is real and unequally distributed, and
shows in how someone lives rather than what they can prove. This is close to Murdoch's
reading of Plato and it explains something real about who you actually trust. It needs
a check: if the expert is identified by the untrained, the circle is small, and every
charismatic fraud in history has passed that test.

**The Standard We Can Build.** You are wary of anyone who says they have seen the sun,
and you put authority in what people can justify to each other. This is the best defence
available against rule by the certain. Its exposure is that agreement is not truth — a
settlement everyone accepts can rest on a mistake, and you have no way to say so from
inside it.

## Sources

- Plato, *Republic*, Books VI–VII (especially 507b–521b), in *Plato: Complete Works*,
  ed. John M. Cooper (Hackett). The sun, the divided line, and the cave.
- Aristotle, *Nicomachean Ethics*, Book I, chapter 6 — the objection that a universal
  Good would be of no use to any practitioner.
- Iris Murdoch, *The Sovereignty of Good* (Routledge & Kegan Paul, 1970). Attention as
  the central moral act, and a sympathetic modern reading of the Form of the Good.
- J. L. Mackie, *Ethics: Inventing Right and Wrong* (Penguin, 1977). The arguments from
  queerness and from relativity against objective values.
- Karl Popper, *The Open Society and Its Enemies*, volume I (1945) — the political
  charge against the *Republic*, itself much contested.
