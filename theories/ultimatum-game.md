---
id: ultimatum-game
title: The Ultimatum Game
category: thought-experiment
tradition: game-theory
philosophers:
  - Werner Güth
era: "1982"
tags: [fairness, spite, punishment, bargaining, culture, rationality]
sources:
  - author: Werner Güth, Rolf Schmittberger, Bernd Schwarze
    title: "An experimental analysis of ultimatum bargaining"
    published: "Journal of Economic Behavior and Organization 3(4), 367–388"
    year: 1982
  - author: Hessel Oosterbeek, Randolph Sloof, Gijs van de Kuilen
    title: "Cultural differences in ultimatum game experiments - evidence from a meta-analysis"
    published: "Experimental Economics 7(2), 171–188"
    year: 2004
  - author: Joseph Henrich, Robert Boyd, Samuel Bowles, Colin Camerer, Ernst Fehr, Herbert Gintis, Richard McElreath
    title: "In search of Homo economicus - behavioral experiments in 15 small-scale societies"
    published: "American Economic Review 91(2), 73–78"
    year: 2001
  - author: Alan G. Sanfey, James K. Rilling, Jessica A. Aronson, Leigh E. Nystrom, Jonathan D. Cohen
    title: "The neural basis of economic decision-making in the Ultimatum Game"
    published: "Science 300(5626), 1755–1758"
    year: 2003
  - author: Joseph Henrich, Steven J. Heine, Ara Norenzayan
    title: "The weirdest people in the world?"
    published: "Behavioral and Brain Sciences 33(2-3), 61–83"
    year: 2010
questions:
  - id: q1
    prompt: >-
      A stranger has been given a hundred pounds to divide between you. He offers you
      five and keeps ninety-five. If you accept, you take five and he takes ninety-five.
      If you refuse, you both get nothing. You will never meet him again.
    options:
      - id: a
        label: >-
          Accept. Five pounds is five pounds, and burning it to punish a man you will never
          see again costs you money and costs him nothing you can verify.
        scores: { egoist: 1.0, consequentialist: 0.4, affect: -0.8 }
      - id: b
        label: >-
          Refuse. An offer like that is not a division, it is a test of what you will take,
          and accepting it is agreeing to be treated that way.
        scores: { virtue: 1.0, deontological: 0.4, affect: 0.7 }
      - id: c
        label: >-
          Refuse, because if people like him learn that offers like that are accepted, the
          next hundred people in your position get five pounds too.
        scores: { consequentialist: 0.9, contractarian: 0.5, scope: 0.6 }
      - id: d
        label: >-
          Accept, and take the five to someone who needs it. Your dignity is not worth more
          than a real sum of money in someone else's hands.
        scores: { consequentialist: 1.0, care: 0.4, scope: 0.5 }
  - id: q2
    prompt: >-
      Now you are the one dividing the hundred. You are confident, from long experience,
      that this particular person will accept twenty and be glad of it.
    options:
      - id: a
        label: >-
          Offer fifty. What the other party will tolerate is not the measure of what is
          fair, and knowing you can get away with less is not a reason to try.
        scores: { deontological: 0.9, virtue: 0.5, certainty: 0.6 }
      - id: b
        label: >-
          Offer twenty. It is a real gain for him, freely accepted, and calling a voluntary
          exchange unfair because you could have given more is a confusion.
        scores: { egoist: 0.9, contractarian: 0.4, scope: -0.6 }
      - id: c
        label: >-
          Offer whatever you would be willing to have offered to you if the roles had been
          assigned the other way round.
        scores: { contractarian: 1.0, deontological: 0.4, scope: 0.6 }
      - id: d
        label: >-
          Offer fifty, because you do not want to become someone whose first thought on
          meeting a person is what they can be got to accept.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
  - id: q3
    prompt: >-
      Anthropologists running this game in fifteen small-scale societies found offers and
      refusals varying enormously — some groups routinely made offers above half and had
      them refused, others offered very little and refusals were rare.
    options:
      - id: a
        label: >-
          Then fairness is a local convention, and the confident sense that half is obviously
          right is a fact about where you grew up.
        scores: { relativist: 1.0, certainty: -0.7, scope: -0.4 }
      - id: b
        label: >-
          Then the variation is in how a situation is read, not in the underlying norm.
          Everywhere, people punish what they take to be exploitation.
        scores: { contractarian: 0.9, virtue: 0.4, scope: 0.5 }
      - id: c
        label: >-
          Then be suspicious of the whole literature. Most of what we call human nature was
          measured on university students in a handful of rich countries.
        scores: { relativist: 0.8, consequentialist: 0.4, certainty: -0.8 }
      - id: d
        label: >-
          Then nothing about what is owed has been established either way. Finding out what
          people do is not finding out what is fair.
        scores: { deontological: 1.0, certainty: 0.7, affect: -0.5 }
  - id: q4
    prompt: >-
      Refusing a low offer costs you money to impose a loss on someone else. Suppose that
      impulse is what makes large-scale cooperation possible, because it makes exploiting
      strangers expensive.
    options:
      - id: a
        label: >-
          Then the impulse is worth keeping and worth acting on, even when a particular
          refusal is a straight loss to you.
        scores: { consequentialist: 0.9, virtue: 0.5, scope: 0.7 }
      - id: b
        label: >-
          Then it is still spite, and knowing what a feeling is for does not make it a
          reason. Costly punishment needs its own justification, case by case.
        scores: { egoist: 0.8, deontological: 0.4, affect: -0.7 }
      - id: c
        label: >-
          Then move the punishing out of individuals and into institutions, which can do it
          proportionately and without needing anyone to be angry.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.4 }
      - id: d
        label: >-
          Then it is not spite but self-respect, which is not a strategy at all and does not
          become one because it happens to be useful.
        scores: { virtue: 1.0, certainty: 0.4, affect: 0.8 }
outcomes:
  - id: the-taker
    dominant: egoist
    label: Take the Five
    text: >-
      You decline to spend your own money on a gesture, and you notice that a refusal made
      to a stranger you will never see again punishes chiefly yourself. That is clear-eyed,
      and in the strict one-shot case it is the answer the arithmetic gives. The difficulty
      is that everybody knowing you reason this way is exactly the condition under which
      lowball offers become standard — so the policy is one you cannot afford to have
      publicised, which is a poor sign in a policy.
    base_rate: null
  - id: the-fair-share
    dominant: contractarian
    label: What the Roles Could Have Been
    text: >-
      Your test is reversibility. You offer what you could accept had the assignment gone
      the other way, and you would rather have the standard fixed in advance than fought over
      in the moment. This is the reasoning that produces stable institutions and durable
      bargains. Where it is thin is in saying what the fair split actually is: half is the
      obvious answer only when the parties are symmetrical, and in most real bargains they
      are not.
    base_rate: null
  - id: the-refusal
    dominant: virtue
    label: Not on Those Terms
    text: >-
      You treat the low offer as an insult rather than a transaction, and you would rather
      take nothing than agree to be valued at that. This is not irrationality — it is what
      makes exploiting people expensive, and much of your standing with others rests on
      people believing you will do it. The price is that you have handed anyone who
      understands you a lever, since the same disposition can be triggered by an offer that
      was not an insult at all, and pride is easier to provoke than to withdraw.
    base_rate: null
  - id: the-consequence
    dominant: consequentialist
    label: What the Refusal Buys
    text: >-
      You judge the refusal by what it produces — the next hundred people in your position,
      the reputation, the norm — rather than by how it feels. That is the strongest defence
      available for costly punishment, and it is probably why the impulse exists. Its
      exposure is the case where the refusal buys nothing: no observer, no repetition, no
      norm to affect, just five pounds burned. On your own account you should accept there,
      and it is worth knowing whether you actually would.
    base_rate: null
  - id: the-standard
    dominant: deontological
    label: Fairness Is Not a Poll
    text: >-
      You separate the question of what people do from the question of what is owed, so the
      cross-cultural variation tells you nothing about the standard and the other party's
      willingness to accept twenty tells you nothing about whether offering it is decent.
      This keeps you steady where the empirical literature is noisiest. What it owes is a
      source for the standard, since you have ruled out both consequences and consensus as
      the thing that fixes it.
    base_rate: null
  - id: the-local
    dominant: relativist
    label: Fairness Where You Are
    text: >-
      You read the anthropology as showing that the sense of a fair split is built by a
      particular set of markets, kin obligations and customs of gift, and that the certainty
      you feel about half is a local certainty. That is a defensible reading of the fifteen
      societies data and it will make you a better negotiator across cultures. Its cost is
      that it leaves you without a way to say that any particular offer was exploitation
      rather than a different convention — including the ones you would very much like to
      call exploitation.
    base_rate: null
---

## What it means

In 1982 Werner Güth, Rolf Schmittberger and Bernd Schwarze published a short paper in the
*Journal of Economic Behavior and Organization* describing an experiment so simple it is
hard to believe nobody had run it earlier.

Two people, who cannot see each other and will not meet again. One — the **proposer** — is
given a sum of money and told to propose a division. The other — the **responder** — may
accept, in which case the division stands, or refuse, in which case both get nothing.
That is the whole game, and it is played once.

The prediction from standard economic theory is unambiguous. The responder should accept
any positive offer, because something beats nothing. The proposer, knowing this, should
offer the smallest possible positive amount and keep the rest.

That is not what happens, and it is not what happens anywhere the game has been run.
Güth's subjects made offers far above the minimum and rejected low ones. In a meta-analysis
of thirty-seven papers, Oosterbeek, Sloof and van de Kuilen reported in 2004 that
proposers offer on average around forty per cent of the pot, and that on average around
sixteen per cent of offers are rejected — with rejection rates falling as the share offered
rises. Consult that paper directly for the breakdown; the headline is that human beings
routinely pay money to refuse an insult.

The finding has been hammered at from several directions and has held up in outline.
Raising the stakes reduces rejections but does not eliminate them. Sanfey and colleagues
reported in *Science* in 2003 that unfair offers produced elevated activity in the
anterior insula, a region associated with disgust, and that the strength of that response
predicted refusal — an early and much-cited result which should be read with the usual
caution about small-sample imaging studies.

## What it suggests

Two very different conclusions are available, and the game is a good instrument precisely
because it separates them.

The first is that the responder who refuses is behaving well, and the model was wrong.
People are not indifferent to how a division was arrived at. A person who accepts any
positive amount is announcing that he can be got cheaply, and in a world where anyone is
watching, the announcement is expensive. On this reading, the willingness to pay for
punishment is the mechanism that makes large-scale cooperation among strangers possible at
all — it converts exploitation from free into costly.

The second is that the responder who refuses is behaving badly, or at least
uninterestingly: he is spending real money, in a situation nobody will hear about, to
inflict a loss on a man who has done him no injury beyond being lucky in the assignment of
roles. Five pounds refused is five pounds that could have gone somewhere. That the impulse
is useful in aggregate is not, on its own, a reason for you to indulge it in a case where
it is useful to nobody.

The cross-cultural evidence complicates both. Henrich and colleagues ran the game in
fifteen small-scale societies in 2001 and found variation far outside the range seen in
university laboratories. Among the Machiguenga of Peru, offers were low and rejections
rare. In some Melanesian groups, offers above half were common and were sometimes
*rejected* — in a gift-giving culture, an over-large offer places the recipient under an
obligation. The authors' conclusion was that what people bring to the game is the pattern
of exchange from their daily economic life, not a universal fairness instinct calibrated to
half. The same team's later "weirdest people in the world" paper argued that the
behavioural sciences had built a picture of human nature from an unrepresentative sliver of
humanity, mostly Western undergraduates.

There remains the objection that none of this is ethics. That the sense of fairness varies,
or that punishing is adaptive, tells you nothing about what the proposer ought to offer.
Fairness is not settled by a poll of what people will tolerate — which is the answer this
entry's fifth band belongs to.

## The problem

You own three small hotels, and a chain has offered to buy them.

Their offer values the business at rather less than you think it is worth, but well above
what you could get from any other buyer, because there is no other buyer. Their lawyer, who
has been perfectly courteous throughout, has made it clear that this is the number and
there will not be a second one. Your accountant has confirmed that accepting means your two
long-serving managers keep their jobs and you keep your house.

What you cannot get past is a sentence in the second meeting. Asked how the number was
arrived at, the chain's director said, pleasantly, that they had worked out what you would
take.

Refusing costs you money you cannot really afford and costs them a small delay in a
programme of acquisitions they will complete anyway. Nobody will hear about it. Your
managers will not thank you. You have three days.

## The questions

**1. Five out of a hundred.** A stranger offers you five and keeps ninety-five. Refuse and
you both get nothing. You will never meet again.

- Accept. Five is five, and burning it punishes chiefly yourself.
- Refuse. That is not a division, it is a test of what you will take.
- Refuse, so that the next hundred people in your position are not offered five.
- Accept, and give the five to someone who needs it.

**2. You are the proposer.** You know this person will accept twenty and be glad of it.

- Offer fifty. What they will tolerate is not the measure of what is fair.
- Offer twenty. A voluntary exchange is not unfair because you could have given more.
- Offer what you would accept if the roles had been assigned the other way.
- Offer fifty, because of what habitual calculation of that kind makes of you.

**3. Fifteen societies.** Offers and refusals varied enormously; some groups made
over-generous offers that were refused.

- Then fairness is a local convention and your certainty about half is provincial.
- Then the norm is constant and the reading of the situation varies.
- Then be suspicious of a literature built on Western undergraduates.
- Then nothing about what is owed has been established either way.

**4. Costly punishment.** Suppose the impulse to refuse is what makes exploiting strangers
expensive.

- Then act on it, even when a particular refusal is a straight loss.
- Then it is still spite. Knowing what a feeling is for does not make it a reason.
- Then move punishment into institutions, which can do it without anger.
- Then it is not spite but self-respect, and does not become a strategy by being useful.

## Reading your answer

**Take the Five.** You will not spend your own money on a gesture nobody will witness, and
in the strict one-shot case the arithmetic agrees with you. The trouble is that your policy
works only while it is private: a known willingness to accept anything is precisely the
condition that produces lowball offers.

**What the Roles Could Have Been.** You test an offer by asking whether you could accept it
from the other chair. That produces stable bargains and it is the discipline behind most
durable agreements. It is thin on what the fair number actually is — half is obvious only
between symmetrical parties, and real bargains rarely are.

**Not on Those Terms.** You treat the low offer as an insult, and you will take nothing
rather than be valued at that. This is not irrationality; it is the thing that makes
exploiting you expensive, and your standing rests on people believing it. It also hands a
lever to anyone who understands you, since pride is easy to provoke and hard to withdraw.

**What the Refusal Buys.** You judge the refusal by what it produces rather than by how it
feels, which is the strongest available defence of costly punishment. Your exposure is the
case where it buys nothing at all — no witness, no repetition, no norm — where your own
account says accept. It is worth knowing whether you would.

**Fairness Is Not a Poll.** You keep the question of what people do apart from the question
of what is owed, so neither the anthropology nor the other party's willingness settles
anything. This keeps you steady where the evidence is noisiest. You owe a source for the
standard, having ruled out both consequences and consensus.

**Fairness Where You Are.** You read the variation as showing that a sense of the fair
split is built by local markets, kinship and customs of gift. That is defensible, and it
will make you a better negotiator across cultures. It leaves you without a way to call any
particular offer exploitation rather than a different convention — including the offers you
would most like to call exploitation.

## Sources

- Werner Güth, Rolf Schmittberger and Bernd Schwarze, "An experimental analysis of
  ultimatum bargaining", *Journal of Economic Behavior and Organization* 3(4) (1982),
  367–388.
- Hessel Oosterbeek, Randolph Sloof and Gijs van de Kuilen, "Cultural differences in
  ultimatum game experiments: evidence from a meta-analysis", *Experimental Economics* 7(2)
  (2004), 171–188 — average offers of about forty per cent and average rejection of about
  sixteen per cent of offers, with substantial variation by design and population.
- Joseph Henrich, Robert Boyd, Samuel Bowles, Colin Camerer, Ernst Fehr, Herbert Gintis and
  Richard McElreath, "In search of Homo economicus: behavioral experiments in 15 small-scale
  societies", *American Economic Review* 91(2) (2001), 73–78.
- Alan G. Sanfey, James K. Rilling, Jessica A. Aronson, Leigh E. Nystrom and Jonathan D.
  Cohen, "The neural basis of economic decision-making in the Ultimatum Game", *Science*
  300(5626) (2003), 1755–1758.
- Joseph Henrich, Steven J. Heine and Ara Norenzayan, "The weirdest people in the world?",
  *Behavioral and Brain Sciences* 33(2-3) (2010), 61–83 — on the unrepresentativeness of the
  usual subject pool.
