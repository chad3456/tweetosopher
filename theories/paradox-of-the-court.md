---
id: paradox-of-the-court
title: The Paradox of the Court
category: paradox
tradition: sophism
philosophers:
  - Protagoras
  - Euathlus
era: "c. 440 BCE"
tags: [contracts, promises, letter-and-spirit, self-reference, good-faith]
sources:
  - author: Aulus Gellius
    title: "Attic Nights, Book V, chapter 10"
    published: "trans. J. C. Rolfe, Loeb Classical Library"
  - author: Diogenes Laertius
    title: "Lives of the Eminent Philosophers, Book IX"
    published: "trans. Pamela Mensch, Oxford University Press"
  - author: Lon L. Fuller
    title: The Morality of Law
    published: Yale University Press
    year: 1964
  - author: Charles Fried
    title: "Contract as Promise: A Theory of Contractual Obligation"
    published: Harvard University Press
    year: 1981
questions:
  - id: q1
    prompt: >-
      Protagoras teaches Euathlus rhetoric on terms that the fee falls due
      when Euathlus wins his first case. Euathlus takes no cases. Protagoras
      sues him. Each can argue that he must win either way. Who should the
      court find for?
    options:
      - id: a
        label: >-
          Protagoras. The agreement plainly meant payment for teaching
          delivered, and Euathlus is using its wording against its point.
        scores: { contractarian: 1.0, virtue: 0.4, certainty: 0.5 }
      - id: b
        label: >-
          Euathlus. The condition has not occurred. A term you drafted badly
          is a term you drafted, and the risk of that is yours.
        scores: { deontological: 1.0, certainty: 0.7, authority: 0.4 }
      - id: c
        label: >-
          Dismiss it, and let Protagoras sue again after Euathlus has won
          this one. The paradox is an artefact of hearing it too early.
        scores: { consequentialist: 0.8, contractarian: 0.4, affect: -0.5 }
      - id: d
        label: >-
          Neither is arguing in good faith. Both are performing cleverness,
          and a court that rewards either is teaching the wrong lesson.
        scores: { virtue: 1.0, deontological: 0.4, affect: 0.6 }
  - id: q2
    prompt: >-
      A supplier's contract with your company contains a drafting error that
      caps their liability at a hundredth of what both sides discussed and
      minuted. They have just cost you eight hundred thousand pounds, and
      the error is entirely theirs.
    options:
      - id: a
        label: >-
          Hold them to the number both sides agreed. The document is
          evidence of the agreement, not a replacement for it.
        scores: { contractarian: 1.0, virtue: 0.4, certainty: 0.5 }
      - id: b
        label: >-
          Hold them to the document. Certainty about what a signed contract
          says is worth more than fairness in any single case.
        scores: { deontological: 1.0, consequentialist: 0.4, certainty: 0.8 }
      - id: c
        label: >-
          Take the cap and move on. You have insurance, they have forty
          staff, and destroying them buys you nothing you need.
        scores: { care: 0.9, consequentialist: 0.4, scope: -0.6 }
      - id: d
        label: >-
          Use the leverage. They made the error, you found it, and no rule
          obliges you to fix a counterparty's mistake against yourself.
        scores: { egoist: 1.0, contractarian: 0.3, affect: -0.7 }
  - id: q3
    prompt: >-
      Your father promised your brother the house "when he settles down".
      Your brother has now been living there for four years with a partner
      and a child and no marriage, which your father says is not what he
      meant. There is nothing in writing.
    options:
      - id: a
        label: >-
          What the words meant when spoken is what governs, and everyone in
          the family knows what they meant. That is not a legal question.
        scores: { care: 0.9, virtue: 0.5, scope: -0.7 }
      - id: b
        label: >-
          The promise binds on the plain sense of the words, and "settled
          down" plainly covers this. Your father cannot re-specify after.
        scores: { deontological: 0.9, contractarian: 0.4, certainty: 0.6 }
      - id: c
        label: >-
          Ambiguous promises are not really promises. What is owed now has
          to be renegotiated by people who are in the room together.
        scores: { contractarian: 1.0, certainty: -0.6 }
      - id: d
        label: >-
          Ask what happens to each of them under each outcome, and to
          whoever else is in that house. Then argue for that.
        scores: { consequentialist: 1.0, care: 0.4, scope: 0.4 }
  - id: q4
    prompt: >-
      Gellius reports that the judges, unable to decide, adjourned the case
      to a distant date and never returned to it. Is that cowardice or
      wisdom?
    options:
      - id: a
        label: >-
          Wisdom. Some disputes are better left unresolved than resolved
          badly, and a bad precedent outlives both parties.
        scores: { virtue: 0.9, consequentialist: 0.4, certainty: -0.7 }
      - id: b
        label: >-
          Cowardice. A court exists to decide, and refusing leaves the
          stronger party in possession, which is a decision made quietly.
        scores: { contractarian: 0.9, deontological: 0.5, authority: 0.7 }
      - id: c
        label: >-
          Correct procedure. The condition genuinely had not occurred yet,
          so there was nothing ripe to decide.
        scores: { deontological: 1.0, certainty: 0.6 }
      - id: d
        label: >-
          Sensible. Nobody was going to die, the sum was small, and the
          judges' time was worth more than the answer.
        scores: { consequentialist: 0.9, egoist: 0.4, affect: -0.6 }
outcomes:
  - id: the-agreement-behind-the-words
    dominant: contractarian
    label: The Agreement, Not the Wording
    text: >-
      You treat a contract as evidence of a bargain rather than as the bargain
      itself, and you think a party exploiting a drafting slip is defecting
      from something they actually agreed to. This is the view most commercial
      law has drifted toward, and it makes ordinary dealing possible without
      infinite documentation. Its cost is certainty: once the real agreement
      can differ from the written one, every dispute becomes an argument about
      what people meant, which is exactly what writing it down was for.
    base_rate: null
  - id: the-words-are-the-deal
    dominant: deontological
    label: The Words Are the Deal
    text: >-
      You hold parties to what they wrote, including when it hurts them,
      because a promise whose terms can be reinterpreted afterwards by the
      party who dislikes them is not much of a promise. This protects the
      careful and the weak equally, since the wording is the one thing a
      person without power can point at. What it costs is the case where the
      wording is plainly an accident and everyone knows it, and you enforce it
      anyway, and the result is something nobody ever agreed to.
    base_rate: null
  - id: what-it-makes-of-you
    dominant: virtue
    label: The Lesson It Teaches
    text: >-
      You are less interested in who wins than in what the winning rewards,
      and your instinct is that both Protagoras and Euathlus are performing
      rather than arguing. That instinct is sound: a rule that pays cleverness
      produces clever people. Its difficulty is that "neither of you is
      behaving well" is not a judgment a court can enter, and someone still
      has the money at the end of the afternoon.
    base_rate: null
  - id: what-follows-from-each
    dominant: consequentialist
    label: What Each Outcome Does
    text: >-
      You want to know what actually happens under each ruling — to the
      parties, to the next hundred contracts, to the forty people at the
      supplier. This is how the rules that work get chosen, and it is why
      liability caps exist at all. Its exposure is that it makes every
      agreement provisional: a promise you would break when breaking it looks
      better is not the sort of thing anyone can plan around, and planning was
      the point of promising.
    base_rate: null
  - id: the-family-in-the-house
    dominant: care
    label: Who Is Living In It
    text: >-
      You resolve these by looking at whose life is inside the arrangement —
      the brother, the partner, the child, the small supplier — rather than at
      the terms. That is right about the disputes that actually damage people,
      most of which are between parties who have to keep knowing each other
      afterwards. The price is that it can be exploited by whoever has the most
      sympathetic circumstances, and the person quietly relying on the written
      terms is often the one with no other protection.
    base_rate: null
  - id: the-leverage-is-real
    dominant: egoist
    label: You Found It, You Keep It
    text: >-
      Your view is that a counterparty's mistake is their mistake, that
      nothing obliges you to argue against your own interest, and that the
      moralising about good faith is usually done by whoever is losing. This
      is honest, and it is how a great deal of commercial life is actually
      conducted. What it costs is repeat business in the widest sense: almost
      every valuable arrangement anyone has depends on a counterparty who
      would not do to them what you have just decided you are entitled to do.
    base_rate: null
---

## What it means

The story comes down to us through Aulus Gellius, writing in the second century CE and
recounting it as a famous puzzle. Protagoras, the sophist, agreed to teach the young
Euathlus the art of pleading. The fee was substantial, and the terms were unusual: half
down, and the remainder payable on the day Euathlus won his first case in court.

Euathlus learned the art and then, Gellius says, declined to take any cases at all. Time
passed. Protagoras, suspecting he was being played, sued him for the balance — and in
court laid out an argument he thought was airtight. *Whichever way this goes, you pay
me. If I win, you pay by the judgment of the court. If you win, you pay by our
agreement, because you will have won your first case.*

Euathlus, who had been taught by the best, replied with the same argument reversed.
*Whichever way this goes, I pay you nothing. If I win, I owe nothing by the judgment of
the court. If I lose, I owe nothing by our agreement, because I will not have won my
first case.*

Gellius reports that the judges, finding the matter doubtful on both sides and fearing
that whatever they decided would undo itself, adjourned the case to a remote date and
in effect never came back to it. He calls the structure an *antistrephon* — an argument
that turns back on itself, which can be used with equal force by either party.

The knot is genuine, and it is not merely verbal. Two obligations are in play: the one
created by the contract and the one created by the judgment. Each argument works by
counting the *same* verdict twice, once as the court's decision and once as the
triggering condition of the contract, and the two counts point in opposite directions.
Note that Protagoras's argument requires the court to rule for Euathlus before the
contractual condition is met, and Euathlus's requires the same thing — which is why any
verdict at all can be re-litigated immediately afterwards on the other ground.

## What it suggests

The paradox is usually presented as a logical curiosity, and it survives because it is
not one. It is the sharpest available illustration of a permanent problem in agreements:
words fix obligations, but words cannot anticipate every state of the world, and
somebody eventually finds the gap.

Once you see the structure, you see it everywhere. A bonus payable "on completion" of a
project the employer then cancels. An insurance policy that excludes losses "arising
from" a cause that is one of four contributing. A separation agreement drafted for
circumstances that no longer exist. In each case the wording admits a reading its
author never intended, and one party has an interest in that reading.

Two families of response exist. Lon Fuller argued that law has an internal morality —
that rules must be capable of being followed, and that a purely formal application
detached from purpose is a failure of law rather than an example of it. On that view
Euathlus is not merely sharp; he is asking the court to participate in defeating the
point of the very institution he is standing in. Charles Fried's alternative grounds
contract in promise: what binds is the commitment the parties actually made to each
other, and the document is a record of it, not a substitute.

The strongest objection to both is certainty. If the wording is not the agreement, then
nobody knows what they have agreed until a third party tells them, and the whole value
of writing it down evaporates. The party who most needs the written word to be
enforceable is usually the one with the least power — an employee, a tenant, a small
supplier — since a rich counterparty can always afford a better story about what
everyone really meant. There is a reason formalism keeps coming back.

And there is a plainer objection to the moralising. Euathlus paid half a fee for a
training in argument and used the training to win an argument. It is difficult to say
that Protagoras got nothing for his money.

## The problem

Rina's mother died in February and left a will drafted in 2009.

It leaves "the contents of the property at 14 Aldergate" to Rina, and "all monies and
investments" to her brother Sam. In 2009 that was roughly fair: the house was to be
sold and split, the contents were furniture and a car, and the investments were about
sixty thousand pounds.

Three things happened afterwards. Their mother sold most of the investments in 2016 to
pay for care. She never updated the will. And in 2011 she had bought, on the advice of
a friend, a painting that hung in the back bedroom at Aldergate and is now — Rina has
had two valuations — worth somewhere between four hundred and six hundred thousand
pounds.

The painting is contents. Rina's solicitor has been clear about this and slightly too
pleased about it. Sam's inheritance, after the care costs, is eleven thousand pounds
and a share of the house.

Sam is not litigious. He has asked Rina, once, whether she thinks their mother meant
this, and Rina has been honest with him, which is that she is certain their mother did
not think about it at all. What their mother did say, repeatedly and to both of them,
was that she wanted things even between them, and there are eight years of birthday
cards to prove that she thought about fairness constantly and about drafting never.

Rina has the word on her side. She also has a brother, a nephew who calls her Auntie
Rin, and the knowledge that if she signs the form her solicitor has prepared, the estate
will distribute in nine days and there will be nothing dishonest about any of it.

She keeps returning to the same sentence and cannot make it come out: that the document
says one thing, that everyone alive knows what her mother wanted, and that these are
apparently two different kinds of fact.

## The questions

**1. Protagoras and Euathlus.** Each can argue he must win either way. Who should the
court find for?

- Protagoras. The agreement meant payment for teaching, and Euathlus is using its
  wording against its point.
- Euathlus. The condition has not occurred. A badly drafted term is still your term.
- Dismiss it, then let Protagoras sue again after this case is won.
- Neither is in good faith. A court that rewards either teaches the wrong lesson.

**2. The drafting error.** A supplier's liability cap is a hundredth of what both sides
minuted, and they have just cost you eight hundred thousand.

- Hold them to the agreed number. The document is evidence, not a replacement.
- Hold them to the document. Certainty is worth more than fairness in one case.
- Take the cap and move on. Destroying them buys you nothing.
- Use the leverage. Their error, your discovery.

**3. "When he settles down."** Your brother has lived in the house four years with a
partner and a child. Your father says that is not what he meant.

- What the words meant when spoken governs, and the family knows what they meant.
- The plain sense covers this. Your father cannot re-specify afterwards.
- An ambiguous promise is not really a promise. It has to be renegotiated.
- Ask what happens to each person under each outcome, then argue for that.

**4. The judges adjourned it and never returned.** Cowardice or wisdom?

- Wisdom. A bad precedent outlives both parties.
- Cowardice. Refusing to decide leaves the stronger party in possession.
- Correct procedure. Nothing was ripe.
- Sensible. Small sum, no deaths, better uses for the court's afternoon.

## Reading your answer

**The Agreement, Not the Wording.** You treat the document as evidence of a bargain
rather than the bargain itself, so someone exploiting a drafting slip is defecting from
what they actually agreed. Most commercial law has drifted your way, and it is what
makes ordinary dealing possible without infinite paperwork. The cost is certainty: once
the real agreement can differ from the written one, every dispute becomes an argument
about intentions, which is what writing it down was meant to end.

**The Words Are the Deal.** You hold people to what they wrote, including when it hurts,
because a promise reinterpretable by whoever dislikes it is barely a promise. This
protects the careful and the weak, since the wording is what someone without power can
point at. Its cost is the case where the wording is obviously an accident, everyone
knows it, and you enforce it into an outcome nobody agreed to.

**The Lesson It Teaches.** You care less who wins than what the winning rewards, and you
read both men as performing rather than arguing. That instinct is sound — a rule that
pays cleverness manufactures clever people. The difficulty is that "neither of you is
behaving well" is not a judgment anyone can enter, and somebody still has the money at
the end of the afternoon.

**What Each Outcome Does.** You ask what actually follows from each ruling: for the
parties, the next hundred contracts, the forty people at the supplier. This is how
workable rules get chosen. Its exposure is that it makes agreements provisional — a
promise you would break when breaking it looks better cannot be planned around, and
planning was the point.

**Who Is Living In It.** You look at whose life is inside the arrangement rather than at
its terms, which is right about the disputes that actually damage people — nearly all of
them between parties who must go on knowing each other. The price is that it rewards
whoever has the most sympathetic circumstances, and the person quietly relying on the
written terms often has nothing else.

**You Found It, You Keep It.** You hold that a counterparty's mistake is theirs, that
nothing obliges you to argue against yourself, and that good-faith talk is mostly done
by whoever is losing. That is honest and widely practised. What it costs is everything
downstream of being someone people will deal with: almost every arrangement worth having
depends on a counterparty who would not do to you what you have just decided you are
entitled to do.

## Sources

- Aulus Gellius, *Attic Nights*, Book V, chapter 10, trans. J. C. Rolfe (Loeb Classical
  Library). The fullest ancient account, including the adjournment.
- Diogenes Laertius, *Lives of the Eminent Philosophers*, Book IX, on Protagoras.
- Lon L. Fuller, *The Morality of Law* (Yale University Press, 1964). The internal
  morality of law and the failure of purely formal application.
- Charles Fried, *Contract as Promise: A Theory of Contractual Obligation* (Harvard
  University Press, 1981). Contract grounded in the promise rather than the document.
- Karl Llewellyn, *The Common Law Tradition* (Little, Brown, 1960), for the countervailing
  case that predictability is itself the central value of a legal system.
