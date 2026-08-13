---
id: the-onion
title: The Onion
category: thought-experiment
tradition: russian-literature
philosophers:
  - Fyodor Dostoevsky
era: "1880"
tags: [charity, desert, redemption, solidarity, motive, grace, kindness]
sources:
  - author: Fyodor Dostoevsky
    title: The Brothers Karamazov
    published: "serialised in The Russian Messenger, 1879–80; the fable is in Book VII, chapter 3"
    year: 1880
  - author: Immanuel Kant
    title: Groundwork of the Metaphysics of Morals
    published: "Riga, as Grundlegung zur Metaphysik der Sitten"
    year: 1785
  - author: Aristotle
    title: Nicomachean Ethics
    published: "Athens, 4th century BC"
  - author: Iris Murdoch
    title: The Sovereignty of Good
    published: Routledge & Kegan Paul
    year: 1970
  - author: Emmanuel Levinas
    title: "Otherwise than Being, or Beyond Essence"
    published: "Martinus Nijhoff, as Autrement qu'être ou au-delà de l'essence"
    year: 1974
  - author: Susan Wolf
    title: Moral Saints
    published: "The Journal of Philosophy 79, 419–439"
    year: 1982
  - author: Bernard Mandeville
    title: The Fable of the Bees
    published: "London; including the essay on charity and charity schools"
    year: 1714
questions:
  - id: q1
    prompt: >-
      A woman who has treated the people around her badly for forty years did one
      generous thing, once, a long time ago, and the person she did it for is now the
      only one arguing that she should be helped.
    options:
      - id: a
        label: >-
          The one act counts, entirely and without discount. A kindness is not cancelled
          by the forty years around it, and it is the only thing here anybody actually did.
        scores: { care: 0.8, divine: 0.6, affect: 0.6 }
      - id: b
        label: >-
          One act does not make a person generous. Character is a settled disposition
          built by repetition, and a single exception is evidence of very little.
        scores: { virtue: 0.9, certainty: 0.5, affect: -0.5 }
        evidence:
          who: Aristotle
          work: Nicomachean Ethics
          says: >-
            Aristotle held that virtue is a stable disposition formed by habituation, so
            that doing one just thing no more makes a person just than one swallow makes
            a summer.
      - id: c
        label: >-
          What matters is why she did it. If it was a mood, or vanity, or a debt she was
          settling, it tells you nothing about what she is owed now.
        scores: { deontological: 0.8, virtue: 0.4, affect: -0.6 }
        evidence:
          who: Immanuel Kant
          work: Groundwork of the Metaphysics of Morals
          year: 1785
          says: >-
            Kant argued that an action has moral worth only when done from duty rather
            than from inclination or advantage, so a benevolent impulse that happens to
            help is praiseworthy but not, strictly, good.
      - id: d
        label: >-
          Her record is beside the point. Ask what helping her costs and what refusing
          costs, and treat the forty years as a fact about her rather than a sentence.
        scores: { consequentialist: 0.9, scope: 0.5, affect: -0.5 }
  - id: q2
    prompt: >-
      Offered a private deal that saves her alone and weakens the case for the other
      forty households, she takes it, and says openly that she was offered it and they
      were not.
    options:
      - id: a
        label: >-
          That is the end of the claim. Whatever the one kindness was worth, she has just
          spent it — and spent it on exactly the thing it was supposed to prove she was not.
        scores: { contractarian: 0.8, virtue: 0.5, certainty: 0.5 }
      - id: b
        label: >-
          It is not the end of anything. She is seventy-nine and frightened, and taking
          the offer in front of you is not a moral position she is adopting.
        scores: { care: 0.9, consequentialist: 0.4, scope: -0.6 }
      - id: c
        label: >-
          Nothing about her changes what you owe. You do not calibrate your conduct to
          hers, or you have made her the author of your behaviour as well as her own.
        scores: { deontological: 0.9, authority: 0.6, agency: 0.4 }
        evidence:
          who: Emmanuel Levinas
          work: "Otherwise than Being, or Beyond Essence"
          year: 1974
          says: >-
            Levinas, who returned repeatedly to Dostoevsky's line about being guilty
            before all, held that responsibility for the other is prior to any reckoning
            and does not depend on the other reciprocating it.
      - id: d
        label: >-
          Everyone in the building would take that offer, and most of them would tell
          themselves a better story about it. What is being punished is her candour.
        scores: { relativist: 0.8, egoist: 0.4, certainty: -0.6 }
        evidence:
          who: Bernard Mandeville
          work: The Fable of the Bees
          year: 1714
          says: >-
            Mandeville argued that public displays of charity and public condemnations of
            selfishness are largely governed by pride and reputation, and that people
            claim motives their conduct does not support.
  - id: q3
    prompt: >-
      The man she once helped wants to keep supporting her, at real cost to the campaign
      the other households depend on. He says he owes her, and that a debt is a debt.
    options:
      - id: a
        label: >-
          He is right. Particular obligations to particular people are not overridden by
          arithmetic about strangers, and a person who drops them is not more moral.
        scores: { care: 0.9, virtue: 0.4, scope: -0.8 }
      - id: b
        label: >-
          He is wrong, and being used. Forty households against one debt is not a close
          question, however much the debt feels like a debt from inside.
        scores: { consequentialist: 0.9, scope: 0.8, affect: -0.6 }
        evidence:
          who: Peter Singer
          work: "Famine, Affluence, and Morality"
          year: 1972
          says: >-
            Singer argued that proximity and personal connection carry no moral weight in
            themselves, so an obligation is not diminished by the beneficiary being a
            stranger nor inflated by their being close at hand.
      - id: c
        label: >-
          He should pay the debt himself and not out of the common fund. Gratitude is his
          to honour with his own money and his own time, not with theirs.
        scores: { contractarian: 0.9, care: 0.4, agency: 0.5 }
      - id: d
        label: >-
          Look at what he is actually doing — sitting with someone nobody else will sit
          with. That is the whole of moral life and the campaign is the abstraction.
        scores: { virtue: 0.8, care: 0.5, affect: 0.6 }
        evidence:
          who: Iris Murdoch
          work: The Sovereignty of Good
          year: 1970
          says: >-
            Murdoch located moral progress in the patient attention one person gives
            another rather than in choices between options, and treated the just regard
            for a particular person as the substance of goodness rather than its ornament.
  - id: q4
    prompt: >-
      To move quickly, the campaign must drop one household. The lawyer is indifferent
      which. Someone proposes dropping the one who has behaved worst; someone else
      proposes dropping the one who will manage best without it.
    options:
      - id: a
        label: >-
          Drop by conduct. A group that will not distinguish between its members'
          behaviour has no standards, and the standards are what made this a campaign.
        scores: { contractarian: 0.8, virtue: 0.5, certainty: 0.5 }
      - id: b
        label: >-
          Drop by resilience. Desert is unknowable and need is not, and you would be
          building the whole judgement on gossip about forty years of somebody's temper.
        scores: { consequentialist: 0.8, care: 0.5, certainty: -0.5 }
      - id: c
        label: >-
          Drop nobody. Take the slower route and lose two months. The moment this group
          starts ranking its own, it becomes the thing it was formed against.
        scores: { deontological: 0.8, contractarian: 0.4, authority: 0.6 }
      - id: d
        label: >-
          Draw lots. It is the only method that does not require anyone to be judged, and
          the only one everybody could still look at afterwards.
        scores: { contractarian: 0.7, deontological: 0.5, scope: 0.5 }
        evidence:
          who: John Broome
          work: "Selecting People Randomly"
          year: 1984
          says: >-
            Broome argued that when claims are comparable but cannot all be met, a
            lottery gives each claim a proportionate hearing in a way that direct
            selection does not.
outcomes:
  - id: the-onion-is-an-onion
    dominant: care
    label: The Onion Is an Onion
    text: >-
      You hold that a kindness is real when it happens and stays real afterwards, and you
      will not let a ledger of forty years cancel it. You also stay with the frightened
      old woman rather than with the principle she has offended. That is the reading of
      the fable most people take from it, and it is the warmer one. Its cost is that it
      has no way to refuse anybody: the person who kicks is exactly the person this
      instinct will keep on helping, and the forty households are also particular people
      whom you happen not to be looking at.
    base_rate: null
  - id: one-swallow
    dominant: virtue
    label: One Swallow
    text: >-
      You want to know what the act came out of, and you are unmoved by a single
      exception in a long record. Aristotle is behind you, and so is the shape of the
      fable — it is not the smallness of the onion that breaks it. The exposure is that
      this standard is nearly impossible to meet from outside: you are assessing a
      character you have only heard about, and the people whose dispositions are legible
      to you are mostly the ones who are already like you.
    base_rate: null
  - id: what-is-owed-anyway
    dominant: deontological
    label: What Is Owed Anyway
    text: >-
      You detach what you owe from what the other person deserves, which means the
      side-deal, the forty years and the kicking change nothing about your conduct.
      Levinas holds that position seriously and so, in his own idiom, does Zosima. It is
      the hardest line here to knock over. What it costs is that you will be used, that
      you have no way to say so, and that the people who cooperate at their own expense
      are subsidising the people who do not.
    base_rate: null
  - id: count-the-households
    dominant: consequentialist
    label: Count the Households
    text: >-
      You keep the arithmetic in view — forty tenancies against one debt of gratitude —
      and you decline to let the vividness of the person in front of you set the price.
      That resistance is genuinely difficult and usually right about scale. Its price is
      that it can justify dropping her, and the reasoning that drops her will be
      available again next month against someone else, at which point the group has
      acquired a method for deciding who is expendable.
    base_rate: null
  - id: terms-everyone-can-see
    dominant: contractarian
    label: Terms Everyone Can See
    text: >-
      Your instinct is to fix the rule before the case: who is in, what a member owes,
      what happens to someone who takes a private deal. That is what actually holds a
      campaign of forty households together, and it is the only answer here that does not
      depend on everyone being decent. Its weakness is the fable's own point — a rule
      about who may hold on to the onion is still a rule about letting go, and the woman
      in the lake did nothing that any constitution forbids.
    base_rate: null
  - id: everybody-would-have-taken-it
    dominant: relativist
    label: Everybody Would Have Taken It
    text: >-
      You suspect the judgement more than the conduct: the building is condemning a woman
      for doing what almost anyone would do and saying so without a cover story, and the
      standard being applied is a standard nobody in the room could survive. Mandeville
      would recognise the point, and it is a useful corrective in a meeting that has begun
      to enjoy itself. Its difficulty is that it disarms you completely — if every standard
      is really about reputation, you have no ground left from which to object when the
      company does the same thing to all forty-one of you.
    base_rate: null
  - id: nobody-earns-it
    dominant: divine
    label: Nobody Earns It
    text: >-
      You take the fable as being about grace rather than accounting: the onion was never
      payment, it was a handhold offered to someone with no claim at all. On that reading
      the question of what she deserves was always the wrong question, and the sin is not
      the thinness of her record but her insistence that the rescue be hers alone. It is
      probably the reading Dostoevsky intended. Its difficulty is practical: an
      unconditional rescue is easy to affirm and expensive to run, and the forty
      households cannot be saved by a doctrine that declines to choose.
    base_rate: null
---

## What it means

In Book VII of *The Brothers Karamazov* (1879–80), Alyosha goes to Grushenka's house on the
worst night of his life. His teacher, the elder Zosima, has died, and the body has begun to
smell — which the monastery takes as a verdict on the man. Grushenka, who has arranged to
have Alyosha brought to her intending to ruin him, hears about Zosima and gets off his knee.
Then she tells him a story she says she had from her cook, Matryona.

Once there was a wicked peasant woman, and she died without a single good deed to her name.
The devils took her and threw her into the lake of fire. Her guardian angel stood there
trying to think of one good thing to tell God, and remembered one: she had once pulled up
an onion in her vegetable patch and given it to a beggar woman. God said: take that onion,
hold it out to her in the lake, and if you can pull her out with it she may come to
paradise; if it breaks she stays where she is. The angel went and held out the onion and
told her to take hold. He began pulling, carefully, and had almost got her out — and then
the other sinners in the lake, seeing her rise, caught hold of her to be pulled out with
her. She was a wicked woman, and she began kicking them off: *it is my onion, not yours.*
The moment she said it the onion broke. She fell back and is burning there still. The angel
wept and went away.

Grushenka's application is to herself. She says she has given one onion in her whole life
and that is the sum of her goodness. She is not asking for absolution and she does not get
any; what happens in the chapter is that two people who each came to do harm to the other
fail to.

**This is a folk tale in a character's mouth**, told by a woman who has just called herself
the wicked one, in a novel that argues with everybody in it. It is not a doctrine Dostoevsky
sets out. But the fable is built with unusual care, and the care shows in the ending: the
onion does not break because it was only one onion. It breaks because she would not let
anybody else hold on.

## What it suggests

Read as a moral instrument, the fable makes two separable claims, and most readers collapse
them.

The first is about **accounting**. A life can be so thin in good that a single onion is the
whole balance, and the fable declines to say this is nothing. The angel finds one thing and
God accepts it. That is a real position: an act of kindness is not annulled by the record
around it, and it remains what it was.

The second is about **exclusivity**, and it is the one the story actually turns on. What
destroys her is not her past. It is the claim of sole title — that the rescue is hers, that
the others have no business on her onion. Whatever grace is in the story, it is not
transferable to a person who insists on holding it alone. That is why the fable is a moral
argument and not merely a consoling one.

**The strongest objections come from both directions at once.** From one side, Aristotle:
virtue is a settled disposition built by habit, and one swallow does not make a summer, so
crediting a woman for a forty-year-old onion mistakes an incident for a character. Kant
sharpens it — if she handed it over out of momentary softness or to be rid of the beggar,
the act may be agreeable but has no moral worth. From the other side, the fable is a piece
of religious folk consolation that flatters the reader: everybody hearing it identifies
with the angel or the beggar, nobody with the woman doing the kicking, and the story's real
work is to let an audience feel the pathos of judgement while sitting comfortably on the
right side of it.

And there is a practical objection. In the lake there were many people and one onion. The
fable resolves this by making the onion break, which is a way of not answering the question
of what you should do when a handhold will genuinely take only one.

## The problem

Ilona Barsi is seventy-nine and has lived at 14 Meadowgate for fifty-one years, forty of
them as its owner.

Nobody in the building remembers her fondly. She kept deposits on invented grounds. She put
the rent up on the Kovács family the month after the funeral. In February 2011 she turned
the boiler off for nine days over a dispute about a bicycle in the hallway, and a child on
the top floor was hospitalised with a chest infection. Two years ago, in debt, she sold the
freehold to a company that has since issued notices to every household in the building —
including Ilona, who now rents her own flat on the ground floor.

Forty-one households have joined a single legal action. The solicitor is clear that it is
strong because it is joint, and that private settlements will gut it.

Bogdan Nagy is fifty-five and lives on the second floor. In the winter of 1998 his wife was
dying at home and he stopped being able to work, and Ilona took no rent for five months and
never mentioned it again, then or since. He has told nobody until now. He is the only person
in the building arguing that Ilona should be inside the action rather than left to the
company.

On Tuesday the company offered Ilona, alone, a lifetime tenancy at her present rent if she
withdraws from the action. She has accepted. She told Bogdan herself, in the hallway, and
added that they had offered it to her and not to anyone else.

The solicitor now says the action can proceed at speed with forty households and not
forty-one, and asks the meeting to decide which one to drop.

## The questions

**1. The winter of 1998.** Forty years of meanness and five months of rent forgiven.

- The one act counts, entirely and without discount.
- One act does not make a person generous; character is built by repetition.
- What matters is why she did it.
- Her record is beside the point; ask what helping and refusing each cost.

**2. The private deal.** She takes it, and says openly that it was offered to her and not
to them.

- That ends the claim. She has spent whatever the kindness was worth.
- It ends nothing. She is seventy-nine and frightened.
- Nothing about her changes what you owe.
- Everyone would take it; most would tell a better story. Her candour is what is being punished.

**3. Bogdan's debt.** He wants to go on supporting her, at real cost to the campaign.

- He is right; particular obligations are not overridden by arithmetic about strangers.
- He is wrong and being used; forty households against one debt is not close.
- He should pay it with his own money and time, not the common fund.
- Look at what he is actually doing: sitting with someone nobody else will sit with.

**4. The one to drop.** By conduct, or by who will cope best without it.

- By conduct. A group with no standards is not a campaign.
- By resilience. Desert is unknowable; need is not.
- Drop nobody; lose two months.
- Draw lots.

## Reading your answer

**The Onion Is an Onion.** A kindness stays real, and you stay with the frightened woman
rather than the principle she offended. The warmer reading — and it has no way to refuse
anybody, including the person doing the kicking, while the forty households are also
particular people you are not looking at.

**One Swallow.** You want to know what the act came out of. Aristotle is behind you, and so
is the fable's own shape. The standard is nearly unmeetable from outside, and the characters
legible to you tend to be the ones that resemble yours.

**What Is Owed Anyway.** You detach what you owe from what she deserves, so none of it
changes your conduct. The hardest line here to knock over. You will be used, and the people
who cooperate at their own expense are subsidising the people who do not.

**Count the Households.** You keep forty tenancies against one debt in view and refuse to
let vividness set the price. Usually right about scale — and the reasoning that drops her
will be available again next month.

**Terms Everyone Can See.** You fix the rule before the case, which is what actually holds
forty-one households together and does not require everyone to be decent. The fable's reply
is that a rule about who may hold on is still a rule about letting go.

**Everybody Would Have Taken It.** You distrust the judgement more than the conduct, and
you notice the standard is one nobody in the room could survive. A useful corrective — and
it disarms you, since a critique that dissolves all standards leaves nothing to object with
when the company does it to all forty-one of you.

**Nobody Earns It.** You read the story as being about grace rather than accounting: the
onion was a handhold, not a payment, and the sin was insisting the rescue be hers alone.
Probably Dostoevsky's own reading. Unconditional rescue is cheap to affirm and expensive to
run, and the meeting still has to choose.

## Sources

- Fyodor Dostoevsky, *The Brothers Karamazov* (1879–80), Book VII ch. 3 — Grushenka tells
  the fable to Alyosha and applies it to herself; she attributes it to her cook Matryona.
- Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785) — moral worth and the
  motive of duty.
- Aristotle, *Nicomachean Ethics* — virtue as a disposition formed by habituation.
- Iris Murdoch, *The Sovereignty of Good* (Routledge & Kegan Paul, 1970) — attention to a
  particular person as the substance of moral life.
- Emmanuel Levinas, *Otherwise than Being* (1974) — responsibility for the other as prior to
  reckoning; Levinas returned often to Dostoevsky's line about being guilty before all.
- Susan Wolf, "Moral Saints", *Journal of Philosophy* 79 (1982) — against the demand that a
  life be organised around maximal moral performance.
- Bernard Mandeville, *The Fable of the Bees* (1714) — charity, pride, and the motives people
  claim.
