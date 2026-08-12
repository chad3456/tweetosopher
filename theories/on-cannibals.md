---
id: on-cannibals
title: On Cannibals
category: theory
tradition: renaissance-humanism
philosophers:
  - Michel de Montaigne
era: "1580"
tags: [custom, barbarism, cruelty, cultural-difference, judgement]
sources:
  - author: Michel de Montaigne
    title: "Des Cannibales (Essais, Book I, chapter 31)"
    published: Essais, Bordeaux
    year: 1580
  - author: Michel de Montaigne
    title: "De la coutume et de ne changer aisément une loi reçue (Essais, Book I, chapter 23)"
    published: Essais, Bordeaux
    year: 1580
  - author: Michel de Montaigne
    title: "De la cruauté (Essais, Book II, chapter 11)"
    published: Essais, Bordeaux
    year: 1580
  - author: David Quint
    title: "Montaigne and the Quality of Mercy: Ethical and Political Themes in the Essais"
    published: Princeton University Press
    year: 1998
questions:
  - id: q1
    prompt: >-
      A people you are living among honour a killed enemy by eating his body. They do
      not do it from hunger; they do it, they say, to show the dead man's kin what
      revenge means. You have watched it happen and you have to say what you think.
    options:
      - id: a
        label: It is barbarous, and the fact that it is their custom does not make it less so.
        scores: { deontological: 0.8, certainty: 0.7, relativist: 0.1 }
      - id: b
        label: >-
          Each of us calls barbarism whatever is not his own practice. You have no
          vantage point outside your own habits from which to score theirs.
        scores: { relativist: 1.0, certainty: -0.7, scope: 0.3 }
      - id: c
        label: >-
          Judge it — but judge your own country's rack, pyre and wars of religion by
          the same measure, and be ready for the verdict that comes back.
        scores: { virtue: 0.9, relativist: 0.4, certainty: -0.3, affect: 0.4 }
      - id: d
        label: >-
          The dead man feels nothing. Weigh it against what we do to the living and it
          is the lesser cruelty, whatever it looks like.
        scores: { consequentialist: 0.9, affect: -0.7, scope: 0.5 }
  - id: q2
    prompt: >-
      Three men from that people are brought to Rouen and shown the French court. Asked
      what they found strangest, they say two things: that grown armed men obeyed a boy
      king, and that half-starved men begged at the doors of the gorged without taking
      them by the throat.
    options:
      - id: a
        label: >-
          That is evidence against us. A stranger sees the arrangement custom has made
          invisible to the people inside it.
        scores: { virtue: 0.8, relativist: 0.3, certainty: -0.5 }
      - id: b
        label: >-
          It is evidence only where they name a harm anyone can see. Hunger beside
          plenty is one; obeying a child king is not.
        scores: { consequentialist: 0.8, certainty: 0.3, scope: 0.6 }
      - id: c
        label: >-
          It shows difference, not error. They are as bounded by their usages as the
          court is by its own.
        scores: { relativist: 0.9, certainty: -0.4 }
      - id: d
        label: >-
          Their astonishment is charming and beside the point. An institution is
          answerable to whether it holds a country together, not to how it strikes a visitor.
        scores: { consequentialist: 0.6, deontological: 0.5, authority: -0.7 }
  - id: q3
    prompt: >-
      Montaigne, having said that each man calls barbarism what is not his own usage,
      then plainly judges: he says it is worse to tear a man apart alive, as he has seen
      done at home, than to roast him after he is dead. Is that a contradiction?
    options:
      - id: a
        label: >-
          No — he is using their standard against us, not a universal one. The essay
          is an attack on French self-satisfaction, not a theory of value.
        scores: { relativist: 0.8, virtue: 0.4, certainty: -0.3 }
      - id: b
        label: >-
          No, because suffering is the standard, and it is not the property of any
          culture. A living man burning is worse than a dead one eaten, everywhere.
        scores: { consequentialist: 1.0, scope: 0.7, certainty: 0.4 }
      - id: c
        label: >-
          It is not a contradiction but it is a smuggled premise: he appeals to nature
          and reason as a court above custom, which makes him no relativist at all.
        scores: { deontological: 0.8, certainty: 0.5 }
      - id: d
        label: >-
          Yes, and the inconsistency is the honest part. Nobody can actually suspend
          judgement, and a writer who admits it mid-essay is telling the truth about us.
        scores: { virtue: 0.8, relativist: 0.5, certainty: -0.8 }
  - id: q4
    prompt: >-
      Years later you have some power in that country — a post, a budget, an ear at
      court. A practice you find abhorrent continues, and a faction of local people
      wants it stopped while most do not.
    options:
      - id: a
        label: Stop it with the power you have. Waiting for consensus costs lives that are being lost now.
        scores: { consequentialist: 0.9, authority: 0.5, certainty: 0.5 }
      - id: b
        label: >-
          Refuse. Power exercised over a people's usages is the barbarism you came to
          object to, wearing better clothes.
        scores: { relativist: 0.9, deontological: 0.4, authority: 0.4 }
      - id: c
        label: >-
          Back the faction who already want it stopped, and go no further than they can
          carry. The change has to be theirs or it is not a change.
        scores: { virtue: 0.7, care: 0.4, certainty: -0.4 }
      - id: d
        label: >-
          Some things may not be done to a person whoever is doing them. That your
          objection is inconvenient locally does not make it parochial.
        scores: { deontological: 1.0, scope: 0.8, certainty: 0.8 }
outcomes:
  - id: the-outside-standard
    dominant: deontological
    label: A Court Above Custom
    text: >-
      You hold that there is a standard custom answers to, and that "it is their way"
      settles nothing. This is the position that lets you condemn your own society as
      readily as anyone else's, which is not a small advantage. What it owes is an
      account of where the standard comes from that does not turn out, on inspection,
      to be the usages of the place you happen to have been raised.
    base_rate: null
  - id: the-mirror
    dominant: relativist
    label: Whatever Is Not Our Own Practice
    text: >-
      You take the force of Montaigne's opening move: judgement of a stranger's custom
      is nearly always judgement from inside one's own, and the confidence of the judge
      is a poor guide to the quality of the judgement. The price is the case you cannot
      speak about — the practice you would stop if it were yours to stop, where your
      own view forbids you the word you need.
    base_rate: null
  - id: the-count-of-suffering
    dominant: consequentialist
    label: What It Costs the Living
    text: >-
      You cut through the question of custom by asking who is hurt and how badly, and
      you are content that this measure travels. It does travel further than most. Its
      exposure is that it makes the meaning of a practice — what the people doing it
      take themselves to be doing — into decoration, and much of what people will die
      for lives in exactly that decoration.
    base_rate: null
  - id: the-turned-mirror
    dominant: virtue
    label: The Verdict That Comes Back
    text: >-
      Your interest is in what the act of judging does to the judge: you will judge, but
      only on terms that let the judgement run in both directions. That is Montaigne's
      actual method, and it is harder than either confidence or abstention. It commits
      you to a slow, comparative kind of moral attention that is very badly suited to
      the moment when something must be stopped today.
    base_rate: null
---

## What it means

"Des Cannibales" is chapter 31 of the first book of Montaigne's *Essais*, published in
1580. Its occasion was real: French expeditions to the Bay of Guanabara had brought back
reports of the Tupinambá of coastal Brazil, and Montaigne had questioned a servant of his
who had lived there, along with — by his own account, at Rouen — three Tupinambá men who
had been brought to France and presented to the boy king Charles IX.

The essay's most quoted sentence is that each man calls barbarism whatever is not his own
practice, since we have no measure of truth and reason other than the example and idea of
the opinions and usages of the country we are in. Read alone, that sentence has made
Montaigne the patron saint of cultural relativism.

Read to the end, the essay does something more awkward. Montaigne describes the eating of
a killed enemy in unsparing detail, and then says that he is not so much troubled by it as
by what he has watched his own countrymen do in the wars of religion: torturing a man to
death by degrees while he is alive and can feel it, and — this is his emphasis — doing it
under the cover of piety. His verdict is not that the two are incomparable. His verdict is
that ours is worse. He is judging, by a standard he takes to be available to anyone: the
amount of cruelty, and whether the man it is done to is alive to feel it.

The Rouen episode carries the same double edge. Asked what struck them most about France,
the visitors said they were astonished that grown, armed men obeyed a child, and that men
starving at the door of a house did not take the well-fed inside it by the throat.
Montaigne reports this without comment, then breaks off, complains that his interpreter
was too stupid to be much use, and ends the essay with a shrug about the visitors' lack of
breeches. The joke is at his readers' expense.

## What it suggests

If you take the essay seriously, two things follow, and they pull against each other.

The first is a permanent discount on your own confidence. Most of what you find obviously
correct is what you were raised inside, and the feeling of obviousness is produced by
familiarity rather than by evidence. Montaigne's method — read your own arrangements as a
visitor would, and notice which of them you cannot defend once described plainly — is a
usable instrument, and it is the ancestor of a great deal of later social criticism.

The second is that Montaigne does not stop there, and the essay would be worthless if he
did. He compares, and he ranks. What licenses the ranking is an appeal to something he
calls nature and reason: cruelty is worse the more it is felt, and worse still when
dressed as devotion. If that appeal is legitimate, the famous sentence about barbarism is
a warning about hasty judgement rather than a denial that judgement is possible.

The strongest objection is that he cannot have it both ways. If our measure of truth is
always the usage of our own country, then Montaigne's own standard — that felt suffering
is the thing to count, and hypocrisy an aggravation — is simply a sixteenth-century French
sceptic's usage, with no more authority than the Tupinambá's. Critics from both directions
have made this point: relativists say he flinched, universalists say he was never a
relativist to begin with and the opening sentence is rhetoric. Defenders answer that
Montaigne is not offering a theory at all but a discipline, and that a discipline can be
useful without being consistent. Whether that is a defence or a change of subject is the
thing your own answers will decide.

## The problem

You are the interpreter, and you are the only one who understands both sides.

The village has taken a man from the people they have been fighting for six years. He will
be kept, fed, treated well, and in some weeks he will be killed and eaten in front of
everyone, and his kin will be told. You have been told what he will say when it happens:
that these are the same bodies that fed his own father, and that they should look closely,
because they are about to eat their own.

The captain of your ship wants him bought and shipped home as evidence of what these people
are. The priest wants a rescue and is prepared to burn the village for it. The headman,
who has fed you for two years and has never lied to you, wants to know what your country
does to its enemies.

You have watched two men broken on the wheel in Bordeaux. You know the answer to his
question, and you know how it will sound if you give it honestly. You also know that a man
who is going to die in three weeks is not made less dead by anything you say about
Bordeaux.

## The questions

**1. The practice.** A people you live among eat a killed enemy — not from hunger, but to
show his kin what revenge means. You have to say what you think.

- It is barbarous, and its being their custom does not make it less so.
- Each of us calls barbarism whatever is not his own practice, and you have no vantage
  point outside your habits.
- Judge it, but judge your own country's rack and pyre by the same measure, and take the
  verdict that comes back.
- The dead man feels nothing; weighed against what we do to the living, it is the lesser
  cruelty.

**2. Rouen.** The visitors say the strangest things in France are that armed men obey a
boy, and that the starving beg at the doors of the gorged without violence.

- That is evidence against us; a stranger sees what custom has made invisible.
- It is evidence only where they name a harm anyone can see.
- It shows difference, not error.
- Charming and beside the point: institutions answer to whether they hold a country
  together.

**3. The inconsistency.** Having said each man calls barbarism what is not his own usage,
Montaigne then judges — tearing a man apart alive is worse than eating him dead.

- No contradiction: he uses their standard against us, not a universal one.
- No contradiction: suffering is the standard and belongs to no culture.
- Not a contradiction but a smuggled premise — he appeals to nature and reason, which
  makes him no relativist.
- Yes, and the inconsistency is the honest part; nobody can actually suspend judgement.

**4. The power.** Later you have a post and a budget. A practice you find abhorrent
continues; a local faction wants it stopped, most people do not.

- Stop it. Waiting for consensus costs lives now.
- Refuse. Power over a people's usages is the barbarism you came to object to.
- Back the faction and go no further than they can carry.
- Some things may not be done to a person whoever does them.

## Reading your answer

**A Court Above Custom.** You think there is a standard that custom answers to, and that
"it is their way" closes nothing. This lets you indict your own society as readily as any
other — Montaigne's actual achievement — and it gives you something to say when a practice
must be stopped. The bill comes due when you are asked where the standard came from, and
the honest answer is that you found it where you were raised.

**Whatever Is Not Our Own Practice.** You take the opening move seriously: the judge's
confidence is poor evidence for the judgement. You will be right more often than the
confident about other people's lives. Your exposure is the case where you would act if it
were happening at home, and your own position leaves you without the word you need.

**What It Costs the Living.** You skip the question of custom and ask who is hurt, how
badly, and whether they can feel it. That measure travels further than most and it is what
Montaigne himself reaches for when he stops hedging. It treats what a practice *means* to
the people performing it as decoration — and a great deal of what people will die for lives
in exactly that decoration.

**The Verdict That Comes Back.** You will judge, but only on terms that let the judgement
run both ways, and you are more interested in what judging does to the judge than in the
verdict. This is closest to what Montaigne actually does. It is also slow, comparative and
badly suited to the moment when someone has three weeks to live.

## Sources

- Michel de Montaigne, "Des Cannibales", *Essais*, Book I, chapter 31 (1580). The Rouen
  encounter, the comparison with the wars of religion, and the closing line about breeches
  are all in this chapter.
- Michel de Montaigne, "De la coutume et de ne changer aisément une loi reçue", *Essais*,
  Book I, chapter 23 — the fuller statement of how custom manufactures the feeling of
  obviousness.
- Michel de Montaigne, "De la cruauté", *Essais*, Book II, chapter 11 — where the ranking
  of cruelties is made explicit rather than implied.
- David Quint, *Montaigne and the Quality of Mercy: Ethical and Political Themes in the
  Essais* (Princeton University Press, 1998) — reads the essay against the Wars of
  Religion rather than as anthropology.
