---
id: smerdyakovs-inference
title: Smerdyakov's Inference
category: thought-experiment
tradition: russian-literature
philosophers:
  - Fyodor Dostoevsky
era: "1880"
tags: [responsibility, ideas, incitement, complicity, God, guilt, teaching]
sources:
  - author: Fyodor Dostoevsky
    title: The Brothers Karamazov
    published: "serialised in The Russian Messenger, 1879–80"
    year: 1880
  - author: Jean-Paul Sartre
    title: "Existentialism Is a Humanism"
    published: "Nagel, Paris, as L'existentialisme est un humanisme"
    year: 1946
  - author: John Stuart Mill
    title: On Liberty
    published: John W. Parker and Son
    year: 1859
  - author: Karl Jaspers
    title: The Question of German Guilt
    published: "Lambert Schneider, Heidelberg, as Die Schuldfrage"
    year: 1946
  - author: Bernard Williams
    title: Moral Luck
    published: Cambridge University Press
    year: 1981
  - author: Philippa Foot
    title: Natural Goodness
    published: Clarendon Press
    year: 2001
  - author: G. E. M. Anscombe
    title: Modern Moral Philosophy
    published: "Philosophy 33, 1–19"
    year: 1958
questions:
  - id: q1
    prompt: >-
      A man kills someone, and tells you afterwards that he did it because of an argument
      you had made in public and repeated in front of him. You believe him. You also
      believe the argument is true, and you gain materially from the death.
    options:
      - id: a
        label: >-
          You are guilty. Not in the way he is, but really — you supplied the reasoning
          and the permission, and the fact that he pulled the trigger does not undo that.
        scores: { deontological: 0.7, virtue: 0.6, agency: 0.7 }
        evidence:
          who: Karl Jaspers
          work: The Question of German Guilt
          year: 1946
          says: >-
            Jaspers separated criminal guilt, which attaches to the act, from moral and
            metaphysical guilt, which attaches to those who supplied the climate, and
            refused to let the second dissolve because the first belongs elsewhere.
      - id: b
        label: >-
          He is guilty and you are not. He heard an argument and made a choice; treating
          him as something your words operated is a worse insult than blaming him.
        scores: { existentialist: 0.9, agency: -0.7, authority: 0.4 }
        evidence:
          who: Jean-Paul Sartre
          work: "Existentialism Is a Humanism"
          year: 1946
          says: >-
            Sartre took Dostoevsky's formula as the starting point of his own position and
            drew the opposite conclusion from it — that without a given standard a person
            is wholly responsible for what he makes of what he is handed.
      - id: c
        label: >-
          What matters is not guilt but what you do now. Guilt is an accounting exercise;
          there is a family, an inheritance you should not take, and a public argument
          that has been shown to do something.
        scores: { consequentialist: 0.8, care: 0.5, affect: -0.5 }
      - id: d
        label: >-
          Look at what you gained. Until you can rule out that you wanted this, your
          verdict on your own responsibility is not evidence about anything.
        scores: { virtue: 0.8, certainty: -0.6, affect: 0.5 }
        evidence:
          who: Joseph Butler
          work: Fifteen Sermons Preached at the Rolls Chapel
          year: 1726
          says: >-
            Butler's sermon on self-deceit argues that partiality to ourselves operates
            precisely where our interest lies, so a self-acquittal issued in a case one
            profits from is the least trustworthy judgement a person can make.
  - id: q2
    prompt: >-
      He puts it to you directly: he was only the pupil. You were the one who believed
      it, said it, and lived as though it were true; he simply took it seriously enough
      to act.
    options:
      - id: a
        label: >-
          He is right about you and wrong about himself. Both of those can be true, and a
          man who claims to be a mere instrument has just made one more choice.
        scores: { existentialist: 0.7, deontological: 0.5, certainty: 0.4 }
      - id: b
        label: >-
          The charge that stings is the one about living as though it were true. Saying it
          and not meaning it would have been the worse fault, not the lesser.
        scores: { virtue: 0.9, existentialist: 0.4, affect: 0.4 }
      - id: c
        label: >-
          It is a manipulation. He needs you implicated so that he is only half a
          murderer, and you should not accept a role because it is offered persuasively.
        scores: { deontological: 0.6, egoist: 0.4, affect: -0.6 }
      - id: d
        label: >-
          He is right, and the reason is that you spoke to him as though he were not
          really listening. You were performing an argument in front of someone you had
          decided did not count as an interlocutor.
        scores: { care: 0.9, virtue: 0.5, scope: -0.4 }
  - id: q3
    prompt: >-
      You are asked to retract the argument publicly. You still think it is true. A
      retraction would help the family, cost you your standing, and be a lie.
    options:
      - id: a
        label: >-
          Do not retract. An argument is not refuted by someone acting on it badly, and a
          public lie about what you believe corrupts the only thing you had to offer.
        scores: { deontological: 0.8, certainty: 0.6, authority: 0.7 }
      - id: b
        label: >-
          Retract, in the sense that matters: say publicly that you were wrong to say it
          the way you said it, to whom you said it, without the parts that restrain it.
        scores: { virtue: 0.8, consequentialist: 0.5, affect: -0.4 }
        evidence:
          who: John Stuart Mill
          work: On Liberty
          year: 1859
          says: >-
            Mill protected opinions absolutely while denying protection to the same words
            delivered as an instigation to a particular audience, locating the wrong in
            the circumstances of the utterance rather than in the content.
      - id: c
        label: >-
          Retract fully, and accept that it is a lie. The family's need is concrete and
          your intellectual consistency is not, and you would not be the first person to
          pay for a death with a humiliation.
        scores: { care: 0.9, consequentialist: 0.5, scope: -0.5 }
      - id: d
        label: >-
          Do not retract, because the argument was false and should be refuted rather than
          withdrawn. Obligation does not need a transcendent ground, and saying it does is
          what made the inference look valid to him.
        scores: { deontological: 0.7, virtue: 0.4, certainty: 0.5 }
        evidence:
          who: Philippa Foot
          work: Natural Goodness
          year: 2001
          says: >-
            Foot grounded moral evaluation in facts about what human beings need in order
            to live well, arguing that the standard is as objective as the one applied to
            a plant or an animal and requires no religious backing at all.
  - id: q4
    prompt: >-
      Before any of it becomes public he kills himself, leaving a note taking sole
      responsibility. Nothing you say now can be corroborated. You confess anyway and are
      told, kindly, that you are not well and should rest.
    options:
      - id: a
        label: >-
          Keep confessing. What you owe is the truth about what happened, and whether
          anyone credits it is not a condition on the debt.
        scores: { deontological: 0.9, certainty: 0.7, authority: 0.6 }
      - id: b
        label: >-
          Stop. A confession nobody believes is not truth-telling, it is a performance of
          remorse that costs the family another week of the story being about you.
        scores: { consequentialist: 0.8, care: 0.5, affect: -0.6 }
      - id: c
        label: >-
          Neither confess nor stop. Live differently — give up what you gained, and take
          the work you would not have taken. Words are what got everybody here.
        scores: { virtue: 0.9, care: 0.4, agency: 0.5 }
      - id: d
        label: >-
          The confession is owed regardless of the audience, because the wrong is not
          exhausted by what any court could establish. Being disbelieved is part of it.
        scores: { divine: 0.8, deontological: 0.4, affect: 0.5 }
        evidence:
          who: Fyodor Dostoevsky
          work: The Brothers Karamazov
          year: 1880
          says: >-
            Dostoevsky gives the elder Zosima the doctrine that each person is guilty
            before all for everything, a responsibility that is acknowledged rather than
            adjudicated and does not wait on anyone else's verdict.
outcomes:
  - id: the-author-of-the-argument
    dominant: deontological
    label: You Wrote the Permission
    text: >-
      You hold that supplying the reasoning is itself an act, and that responsibility does
      not evaporate because a second free agent stands between you and the body. That is a
      hard line and it survives the obvious replies. Its cost is that it generalises
      badly: every teacher, every editor, every person who has ever argued a position in
      front of a stranger falls under it somewhere, and you will need a stopping rule that
      does not simply track how much you happen to regret this particular case.
    base_rate: null
  - id: he-chose
    dominant: existentialist
    label: He Chose, and So Did You
    text: >-
      You refuse to let either party dissolve into the other. He is not a mechanism your
      words operated, and you are not innocent merely because he acted; both of you made
      something out of what was available. Sartre took Dostoevsky's own formula in exactly
      this direction. What it costs is an answer to the asymmetry — you had the education,
      the standing and the money coming, and a doctrine of equal freedom is very
      convenient for whoever already had more of it.
    base_rate: null
  - id: what-is-left-to-do
    dominant: consequentialist
    label: What Is Left to Do
    text: >-
      You treat the allocation of guilt as an accounting exercise that helps nobody, and
      you go looking for what can still be affected — the inheritance, the family, the way
      the argument gets made next time. This is the answer most likely to do some good.
      Its exposure is that it never has to settle the question, and a person who is always
      busy repairing has found a socially admired method of not thinking about what he did.
    base_rate: null
  - id: the-kind-of-thinker
    dominant: virtue
    label: The Kind of Person Who Says It
    text: >-
      Your attention is on what the arguing was for — whether you believed it, whether you
      were performing, whether you noticed who was in the room. That is the register the
      novel itself works in, and it catches something the guilt calculation misses. Its
      weakness is that it can be conducted entirely inside your own head: self-examination
      is unfalsifiable, and it makes no difference to anyone that you have understood
      yourself better than they have.
    base_rate: null
  - id: the-man-you-were-not-listening-to
    dominant: care
    label: The Man You Were Not Listening To
    text: >-
      You locate the wrong in the relationship — that you talked past someone you had
      decided did not count as an interlocutor, and that this is why he heard permission
      where you heard an argument. It is the most specific diagnosis available here and
      probably the truest to the case. It also risks making the murder a communication
      failure, and there is a point past which attending to how you spoke to him becomes
      another way of keeping the subject on you.
    base_rate: null
  - id: guilty-before-all
    dominant: divine
    label: Guilty Before All
    text: >-
      You think the debt is real whether or not it can be established, and that
      acknowledging it is owed regardless of who believes you. Dostoevsky gives that
      position to Zosima and clearly means it, which is worth knowing: it is the novel's
      answer, not a neutral reading of it. The difficulty is that a guilt everyone bears
      for everything is hard to act on and easy to enjoy, and it can leave the person who
      actually did the thing standing in a crowd of the equally culpable.
    base_rate: null
---

## What it means

In *The Brothers Karamazov* (1879–80) the middle brother, Ivan Fyodorovich, is credited
with a formula he never quite states in his own voice at the moment it matters. It is
reported at the monastery by Miusov, who says Ivan has argued that virtue depends on the
immortality of the soul, so that if belief in immortality were destroyed nothing would be
immoral and **everything would be permitted**. Ivan, present, does not disown it. Rakitin
repeats it to Alyosha. It circulates around the novel as a thing Ivan is known for, which
is the first thing to notice about it: a doctrine loose in a household.

Smerdyakov is the fourth Karamazov. Probably Fyodor Pavlovich's illegitimate son, he works
in the house as a lackey, is treated by everyone as a servant with pretensions, and listens
to Ivan carefully. He is the only person in the book who takes Ivan's ideas as instructions
rather than as conversation.

He murders the father. In Book XI, across three interviews, he tells Ivan what he has done
and why. His account is precise and it is designed to be unbearable: Ivan taught that
everything is permitted; Ivan wanted the old man dead and had money coming; Ivan went to
Chermashnya when he was asked to, which Smerdyakov read as consent. So the murderer, he
says, is Ivan, and Smerdyakov was only the pupil, the faithful servant carrying out what
the master had established in theory and desired in fact. Then he hands over the money,
and that night hangs himself, leaving a note that takes the deed as his own and blames
nobody.

**None of this is Dostoevsky's doctrine.** Ivan is a character, and one the novel is
arguing with; the formula reaches us third-hand through people who dislike him; and the
book supplies its own counter-position through the elder Zosima, who teaches that each of
us is guilty before all, for everything — a doctrine that answers Ivan by making
responsibility larger rather than smaller. Alyosha, who is not a neutral party either,
tells Ivan flatly that it was not he who killed their father. Dostoevsky puts both verdicts
on the page and declines to adjudicate.

## What it suggests

The thought experiment is not about the truth of Ivan's premise. It is about the ownership
of a conclusion. Suppose someone acts on an argument of yours, in a way you did not intend
and would have forbidden. What, if anything, do you owe?

Three answers have real defenders. **You owe nothing**: an argument is either sound or not,
and a listener who acts on it has exercised his own freedom — a position Jean-Paul Sartre
reached by taking Dostoevsky's own formula as his starting point and concluding that
without a given standard a person is wholly responsible for what he makes of what he
receives. **You owe everything short of the act**: Karl Jaspers, writing in 1946 about
Germany, insisted that a moral and metaphysical guilt attaches to those who supplied the
climate, and that it does not dissolve because criminal guilt sits elsewhere. **You owe
something that depends on the circumstances**: Mill protected opinions absolutely while
withdrawing protection from the same words delivered as an instigation, which locates the
wrong in the occasion rather than in the content.

**The strongest objection to holding Ivan responsible is that it patronises Smerdyakov.**
To say the servant was moved by the gentleman's ideas is to treat him as something the
ideas operated, which is precisely the contempt that made him a murderer in the first
place. He is the only character in the novel who is never taken seriously as a mind, and
the reading that convicts Ivan does it once more.

**The strongest objection to acquitting Ivan** is the money and the trip to Chermashnya.
Ivan does not merely hold a theory; he holds it while standing to inherit, and he leaves
town when a hint is dropped. Whatever the general rule about ideas turns out to be, this
case has a wish in it, and the novel's cruellest stroke is that Ivan cannot tell — through
the whole of Book XI and into the hallucination that follows — whether he wanted it.

## The problem

Ruta is a consultant physician, forty-eight, well regarded, moderately public. For two
years she has argued — in a monthly column, on a podcast, twice at a staff meeting — that
the sanctity-of-life doctrine is a superstition; that we keep bodies going out of
squeamishness and call it respect; and that if a life has stopped being anything to the
person living it, sustaining it is a harm we have agreed not to name. She believes this.
The arguments are careful. She has never once concluded that anybody may act.

Her father is in a residential home twenty minutes from the hospital. He is eighty-six, he
does not know her, and he was, before all this, a man she has never described to anyone as
kind. The fees are ninety-one thousand a year and they come out of the house. When he dies,
the house is hers.

Marek is a care assistant on her father's floor. He has listened to the podcast on nights.
At a family meeting in April, when he offered an opinion, Ruta answered his question by
addressing her reply to the manager. In the corridor afterwards, tired, she said in front of
him that if her father went in his sleep it would be a mercy for everyone, herself
included.

On the eleventh of November her father dies. Four days later Marek asks to speak to her
alone and tells her exactly what he did with the syringe driver, and that he did it
because she was right, and because she had wanted it, and because he was — the word is his
— her pupil.

## The questions

**1. The death.** He acted on your argument, you believe him, you think the argument true,
and you inherit.

- You are guilty — not as he is, but really.
- He is guilty and you are not; he heard an argument and chose.
- Guilt is an accounting exercise. What matters is the inheritance and what you say next.
- Until you can rule out that you wanted it, your verdict on yourself is not evidence.

**2. The pupil.** He says he only took seriously what you believed and lived by.

- Right about you, wrong about himself; claiming to be an instrument is one more choice.
- The charge that stings is about living by it — saying it insincerely would be worse.
- It is a manipulation; he needs you implicated to be only half a murderer.
- He is right, and the reason is that you spoke as though he were not listening.

**3. The retraction.** It would help the family, cost your standing, and be a lie.

- Do not retract. Bad use does not refute an argument, and a public lie corrupts the work.
- Retract the manner: how you said it, to whom, without the parts that restrain it.
- Retract fully and accept that it is a lie. Her need is concrete; your consistency is not.
- Do not retract — refute it. Obligation never needed a transcendent ground.

**4. The confession nobody believes.** He is dead, his note takes sole responsibility, and
you are told kindly that you are unwell.

- Keep confessing. Being credited is not a condition on the debt.
- Stop. It has become a performance that keeps the story about you.
- Neither. Give up what you gained and live differently; words got everyone here.
- The debt is owed regardless of the audience. Being disbelieved is part of it.

## Reading your answer

**You Wrote the Permission.** Supplying the reasoning is an act, and a second free agent
does not clear you. Hard, and it survives the easy replies — but it generalises to every
teacher and editor alive, and you need a stopping rule that is not just the size of your
regret.

**He Chose, and So Did You.** You will not let either party dissolve into the other. Sartre
took the same formula this way. You owe an answer to the asymmetry: you had the education,
the standing and the money coming.

**What Is Left to Do.** You skip the allocation of guilt and go to what can still be
affected. Most likely to do some good — and it never has to settle the question, which is a
socially admired way of not thinking about it.

**The Kind of Person Who Says It.** You ask what the arguing was for and who was in the
room. That is the novel's own register. It can also be conducted entirely inside your head,
where nothing is falsifiable and nobody else benefits.

**The Man You Were Not Listening To.** You locate the wrong in having talked past him. It
is probably the truest diagnosis here, and it risks turning a killing into a communication
failure with you still at the centre of it.

**Guilty Before All.** You think the debt holds whether or not it can be established.
That is Zosima's answer and Dostoevsky means it — worth knowing as the novel's position
rather than a neutral reading. A guilt everyone bears is hard to act on and easy to enjoy.

## Sources

- Fyodor Dostoevsky, *The Brothers Karamazov* (1879–80) — Book II ch. 6, where Miusov
  reports Ivan's formula; Book VI for Zosima's counter-doctrine; Book XI chs. 5–9 for
  Alyosha's verdict, the three interviews with Smerdyakov, and Ivan's collapse.
- Jean-Paul Sartre, *Existentialism Is a Humanism* (1946) — the formula taken up as a
  premise, with responsibility rather than licence drawn from it.
- Karl Jaspers, *The Question of German Guilt* (1946) — criminal, political, moral and
  metaphysical guilt distinguished.
- John Stuart Mill, *On Liberty* (1859) — opinion protected, instigation not.
- Bernard Williams, *Moral Luck* (Cambridge University Press, 1981) — what an agent owes
  for outcomes he did not intend and could not fully control.
- Philippa Foot, *Natural Goodness* (Clarendon Press, 2001) — moral evaluation without a
  religious ground.
- G. E. M. Anscombe, "Modern Moral Philosophy", *Philosophy* 33 (1958) — on what is
  conveyed by a philosopher's willingness to argue certain things at all.
