---
id: noble-lie
title: The Noble Lie
category: principle
tradition: platonism
philosophers:
  - Plato
era: "c. 375 BCE"
tags: [truth, deception, paternalism, legitimacy, public-myth]
sources:
  - author: Plato
    title: "Republic, Book III"
    published: "in Plato, Complete Works, ed. John M. Cooper, Hackett"
  - author: Immanuel Kant
    title: "On a Supposed Right to Lie from Philanthropy"
    published: "in Practical Philosophy, ed. Mary J. Gregor, Cambridge"
    year: 1797
  - author: Sissela Bok
    title: "Lying: Moral Choice in Public and Private Life"
    published: Pantheon
    year: 1978
  - author: Leo Strauss
    title: The City and Man
    published: University of Chicago Press
    year: 1964
questions:
  - id: q1
    prompt: >-
      Plato's founding myth tells citizens that they were all born from the
      same earth — so they are siblings — but that the god mixed gold, silver
      or bronze into each of them, which is why they hold different stations.
      Both halves are false. Should the rulers tell it?
    options:
      - id: a
        label: >-
          No. A society whose cohesion rests on something untrue is holding a
          debt it will eventually have to pay in full.
        scores: { deontological: 1.0, certainty: 0.7, authority: 0.6 }
      - id: b
        label: >-
          Yes, if it works. Every society runs on stories about itself, and
          the only real question is which stories produce a place worth living.
        scores: { consequentialist: 1.0, relativist: 0.4, scope: 0.5 }
      - id: c
        label: >-
          Notice what the lie does. The first half unites and the second half
          ranks, and rulers who tell it profit from the second.
        scores: { contractarian: 0.9, egoist: 0.3, authority: 0.7 }
      - id: d
        label: >-
          It is not a lie in the ordinary sense but a myth, and the people
          telling it know that. Myths are how a community says what it is.
        scores: { relativist: 0.8, virtue: 0.4, affect: 0.6 }
  - id: q2
    prompt: >-
      A public health team has evidence that a threat is real but smaller than
      feared. Stating the true figure will collapse compliance and, on their
      best modelling, cost lives. Overstating it will save some and be found
      out within two years.
    options:
      - id: a
        label: >-
          Say the true figure and argue for compliance on its merits. You
          only get to spend public trust once.
        scores: { deontological: 0.9, contractarian: 0.4, certainty: 0.6 }
      - id: b
        label: >-
          Overstate it. Two years of eroded trust is a real cost and a
          smaller one than the funerals it prevents.
        scores: { consequentialist: 1.0, scope: 0.7, affect: -0.6 }
      - id: c
        label: >-
          Publish everything, including the modelling and the disagreement,
          and let people be the kind of adults you need them to be.
        scores: { contractarian: 1.0, virtue: 0.4, authority: 0.5 }
      - id: d
        label: >-
          Emphasise selectively without stating a false number. It is not
          honest, but it is what the job actually is.
        scores: { consequentialist: 0.7, egoist: 0.4, certainty: -0.5 }
  - id: q3
    prompt: >-
      Your father is dying and asks whether your sister — who died last month
      in an accident he does not know about — is coming to visit. He has
      perhaps three days.
    options:
      - id: a
        label: >-
          Tell him she is on her way. Nothing is served by making a dying man
          carry that, and it is not information he can use.
        scores: { care: 1.0, consequentialist: 0.4, scope: -0.7 }
      - id: b
        label: >-
          Tell him the truth. It is his life and his daughter, and deciding
          he cannot bear it is a decision that was never yours.
        scores: { deontological: 0.9, contractarian: 0.5, authority: 0.5 }
      - id: c
        label: >-
          Neither exactly — sit with him, answer around it, and let him take
          it where he wants. Most dying people know more than they say.
        scores: { virtue: 0.9, care: 0.5, affect: 0.7 }
      - id: d
        label: >-
          Ask what he would have wanted, back when he could answer. Do that,
          whichever way it comes out.
        scores: { contractarian: 0.8, care: 0.4, certainty: -0.4 }
  - id: q4
    prompt: >-
      Suppose a founding myth of your own country is largely false, and that
      believing it is part of what makes people here willing to pay taxes,
      serve on juries, and treat strangers as compatriots. You have the
      evidence. Do you publish?
    options:
      - id: a
        label: >-
          Publish. People are owed the truth about their own history whatever
          it does to the arrangements built on top of it.
        scores: { deontological: 1.0, certainty: 0.8, authority: 0.7 }
      - id: b
        label: >-
          Publish, and expect it to hold. Solidarity that only survives on
          false beliefs was never solidarity, and people are tougher than that.
        scores: { contractarian: 0.9, existentialist: 0.4, authority: 0.6 }
      - id: c
        label: >-
          Weigh it. Some myths hold up things worth more than the correction,
          and the correction usually arrives regardless, from someone else.
        scores: { consequentialist: 1.0, relativist: 0.4, certainty: -0.5 }
      - id: d
        label: >-
          Publish it as history and leave the myth alone as myth. They are
          different registers and people have always kept both.
        scores: { relativist: 0.9, virtue: 0.4, affect: 0.5 }
outcomes:
  - id: the-truth-owed
    dominant: deontological
    label: What People Are Owed
    text: >-
      You hold that people have a claim on the truth about their own lives and
      their own country, and that deciding what they can handle is not a
      decision anyone gets to take on their behalf. It is the position that
      does not need to guess right about consequences, which is its main
      strength, since the people who calculate that a lie will help are wrong
      surprisingly often. Its cost arrives in the hospital room, where the
      principle keeps its shape and hurts a man who has three days left and no
      use for the information.
    base_rate: null
  - id: the-useful-story
    dominant: consequentialist
    label: What the Story Does
    text: >-
      You judge a belief by what holding it produces, and you are not
      sentimental about how a society keeps itself together. This is realistic
      about how institutions actually work — none of them run on unvarnished
      fact. The problem is the position you have to occupy to use it: someone
      has to be outside the story, deciding what everyone inside it will
      believe, and you have offered no account of who that person is, how they
      are chosen, or what stops them lying about something else next.
    base_rate: null
  - id: the-adults-in-the-room
    dominant: contractarian
    label: Treat Them as Adults
    text: >-
      Your instinct is to publish everything — the evidence, the modelling, the
      disagreement — on the grounds that legitimacy comes from what people
      could accept knowing all of it. This is the most demanding answer and the
      one that scales, because it does not require anyone to be trustworthy in
      private. Its exposure is that it assumes a public capable of holding
      complexity under fear, and there is real evidence in both directions
      about whether that assumption holds when it is tested.
    base_rate: null
  - id: what-this-person-needs
    dominant: care
    label: The Person in Front of You
    text: >-
      You start from the particular person and what this particular deception
      does to them, which is why the dying father and the public health
      broadcast come out differently for you. That is not inconsistency; it is
      the recognition that a lie between two people who love each other is a
      different act from a lie told to millions by an institution. What it owes
      you is a boundary. Protective lying scales badly, and the person who
      decides what someone else can bear is usually also protecting themselves.
    base_rate: null
  - id: the-register-of-myth
    dominant: relativist
    label: Myths Are Not Lies
    text: >-
      You resist the framing: a founding story is not a false assertion but a
      different kind of speech, and communities have always kept myth and
      chronicle in separate hands without confusion. This is anthropologically
      sound and it dissolves a lot of the problem. Where it strains is that
      Plato's rulers are not doing this — they know the myth is false and
      intend belief in it, which is deception however it is packaged, and you
      need a test that tells those two cases apart.
    base_rate: null
  - id: the-tact-of-the-good
    dominant: virtue
    label: The Third Thing
    text: >-
      You look for the answer that is neither the lie nor the blunt truth: sit
      with him, answer around it, let him arrive where he can. This is what
      people who are actually good at these situations do, and it is
      underrepresented in the philosophy because it cannot be stated as a rule.
      Its weakness is exactly that. When you are tired, frightened, or acting
      in your own interest, "I handled it with tact" is indistinguishable from
      the inside from having quietly taken the easy way.
    base_rate: null
---

## What it means

Near the end of Book III of the *Republic*, Socrates asks whether he can get away with
telling the citizens of his imagined city "one noble lie" — in the Greek, a *gennaion
pseudos*, which can be rendered as noble, well-bred, or simply large. He is
embarrassed about it, and says so.

The lie has two parts. First, that everyone was born from the earth itself, so all
citizens are literally brothers and sisters and the land is literally their mother.
Second, that the god who made them mixed gold into the souls of those fit to rule,
silver into the auxiliaries, and iron and bronze into the farmers and craftsmen — and
that a child born to gold parents may turn out bronze, and must then be demoted, and a
bronze child may turn out gold, and must be raised up. Neither claim is true and
Socrates does not pretend otherwise.

What the lie is *for* is legitimacy. The first half manufactures solidarity: you cannot
easily be indifferent to someone you believe is your brother. The second half makes the
class system feel like a fact of nature rather than an arrangement, and — this is the
part usually forgotten — makes it permeable, since the metals do not run reliably in
families. Plato thinks a city needs both a reason for its members to care about each
other and a reason for them to accept their place in it, and he does not believe the
truth supplies either.

The passage has had a strange afterlife. Leo Strauss read it as evidence that political
philosophy has always contained an esoteric teaching, understood by the few and
prudently concealed from the many, and his readers on the American right and his critics
on the left have argued about that ever since. Karl Popper read the same passage as the
blueprint of totalitarian propaganda. What is not in dispute is that Plato saw the
problem clearly: political communities run on shared beliefs that are not straight
reports of fact, and he was willing to say so.

## What it suggests

If Plato is right, then anyone who runs anything is already doing a version of this. The
question is never whether an institution tells its members a story about themselves, but
whether the story is well chosen, who chose it, and what happens when it fails. National
histories, corporate values, the account a hospital gives of what it is for — none of
these is a neutral description, and each is doing work that a neutral description could
not do.

Once you accept that, a practical criterion suggests itself: not "is this true?" but "is
this the sort of thing that could be said out loud?" A story a community tells itself
knowingly — a founding legend everyone understands as legend — is doing something quite
different from a claim the leadership believes false and intends the public to believe
true. Plato's case is squarely the second kind, and that is what makes it a lie rather
than a myth.

The strongest objection is not Kant's absolute prohibition, though Kant supplies the
purest version of it — that lying wrongs humanity in one's own person, even to the
murderer at the door asking where your friend is hiding. The strongest objection is
Sissela Bok's, and it is practical. Liars systematically underestimate the cost of
lying, because they see the benefit from the inside and the damage from the outside.
Deception has to be evaluated from the perspective of the deceived, and almost nobody
who is lied to for their own good agrees afterwards that it was for their own good. The
noble lie also has a structural problem: it requires a class of people exempt from it.
Someone has to know. And a society divided into those who know and those who are
managed has already conceded the thing the lie was supposed to secure, which was that
all of them were siblings.

There is a second objection that cuts the other way, and it deserves its place. The
alternative to the noble lie is not the truth. It is whatever story fills the space
instead — and that story is usually not chosen by anyone thoughtful.

## The problem

The mine at Corran closed in 1986 and the town's whole account of itself dates from the
year after.

The story is that the pit was profitable, that the closure was punitive, and that a
delegation of local men travelled to London and were refused a hearing by a minister
who never read the file. There is a mural. There is a memorial with the delegation's
names, three of whom are still alive. The annual march on the anniversary is the one
day the town is full, and the community trust that runs the food bank, the youth
project and the two remaining football pitches was founded on the back of it and has
kept going for thirty-eight years on the strength of what that day means to people.

Dr Aoife Brennan has spent four years in the National Archives on a book about the
closure. The pit was not profitable; it had not been for eleven years, on figures the
union's own accountants accepted at the time. The delegation was seen, twice, for a
total of ninety minutes, and the minister's notes show he read the file carefully and
had already decided. And the man whose name is largest on the memorial, whom the town
remembers as having been sacked for leading the walkout, was in fact a paid informant
for the coal board from 1984 and has a file to prove it.

She has a publisher. She also has, on her desk, a letter from the trust's chair — the
informant's granddaughter, who does not know — asking her to speak at this year's
march.

The book is accurate. She has checked everything twice. What she cannot establish is
what the town is, if it is not the thing it has believed about itself since she was a
child, and whether she is publishing history or dismantling a place because she has the
documents.

## The questions

**1. The founding myth.** All citizens born of the same earth, all with metal in their
souls that fixes their station. Both false. Tell it?

- No. Cohesion built on something untrue is a debt that gets called in.
- Yes, if it works. Every society runs on stories; the question is which ones.
- Notice what it does: the first half unites, the second half ranks, and the tellers profit.
- It is myth, not lie. Myths are how a community says what it is.

**2. The public health figure.** True number collapses compliance and costs lives;
overstatement saves some and is exposed in two years.

- Say the true figure. You spend public trust once.
- Overstate it. Two years of eroded trust is smaller than the funerals.
- Publish everything, including the disagreement, and treat people as adults.
- Emphasise selectively without stating a false number.

**3. The dying father.** He asks whether your sister — killed last month, which he does
not know — is coming. He has three days.

- Tell him she is on her way. It is not information he can use.
- Tell him the truth. Deciding he cannot bear it was never your decision.
- Sit with him and answer around it. Most dying people know more than they say.
- Do what he would have wanted, back when he could have told you.

**4. The false founding story** of your own country, which underwrites a lot of real
solidarity. You have the evidence.

- Publish. People are owed the truth about their own history.
- Publish, and expect it to hold. Solidarity that needs falsehood was not solidarity.
- Weigh it. Some myths hold up more than the correction is worth.
- Publish the history and leave the myth as myth. Different registers.

## Reading your answer

**What People Are Owed.** You hold that nobody gets to decide on someone else's behalf
what they can handle. Its main strength is that it never has to guess right about
consequences — and the people who calculate that a lie will help are wrong far more
often than they expect. Its cost arrives in the hospital room, where the principle keeps
its shape exactly and hurts a man with three days left and no use for what you have
told him.

**What the Story Does.** You judge a belief by what holding it produces and you are
unsentimental about how societies cohere. That is realistic. The difficulty is the
position it requires you to occupy: someone stands outside the story deciding what
everyone inside will believe. You have not said who that is, how they got there, or
what stops them from lying about the next thing.

**Treat Them as Adults.** You publish the evidence, the modelling and the disagreement,
because legitimacy comes from what people could accept while knowing all of it. This is
the most demanding answer and the only one that does not depend on anyone being
trustworthy in private. Its exposure is empirical: it assumes a public that can hold
complexity while frightened, and the evidence on that is genuinely mixed.

**The Person in Front of You.** You start from the particular person, which is why the
dying father and the national broadcast come out differently. That is not inconsistency
— a lie between two people who love each other is a different act from an institutional
one. You owe a boundary, because protective lying scales badly, and the person deciding
what someone else can bear is very often also sparing themselves.

**Myths Are Not Lies.** You separate the registers: founding stories are not false
assertions but a different kind of speech, and communities have always kept both without
confusion. This is anthropologically sound and it dissolves much of the problem. It
strains on Plato's own case, where the rulers know the story is false and intend belief
in it — you need a test that tells that apart from myth, and it is harder to state than
it looks.

**The Third Thing.** You reach for the answer that is neither the lie nor the blunt
truth, and that is what people who are good at these situations actually do. It is
underrepresented in the philosophy because it cannot be written as a rule. That is also
its weakness: when you are tired or frightened or quietly self-interested, "I handled it
with tact" feels identical from the inside to having taken the easy way.

## Sources

- Plato, *Republic*, Book III (414b–415d), in *Plato: Complete Works*, ed. John M.
  Cooper (Hackett). The *gennaion pseudos* and the myth of the metals.
- Immanuel Kant, "On a Supposed Right to Lie from Philanthropy" (1797), in *Practical
  Philosophy*, ed. Mary J. Gregor (Cambridge University Press). The absolute
  prohibition, and the murderer at the door.
- Sissela Bok, *Lying: Moral Choice in Public and Private Life* (Pantheon, 1978). The
  argument that deception must be judged from the position of the deceived.
- Leo Strauss, *The City and Man* (University of Chicago Press, 1964) — the esoteric
  reading, itself much disputed.
- Karl Popper, *The Open Society and Its Enemies*, volume I (1945), for the opposed
  reading of the same passage.
