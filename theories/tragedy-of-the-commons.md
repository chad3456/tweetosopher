---
id: tragedy-of-the-commons
title: The Tragedy of the Commons
category: paradox
tradition: game-theory
philosophers:
  - Garrett Hardin
  - William Forster Lloyd
era: "1968"
tags: [collective-action, environment, coercion, property, sustainability, free-riding]
sources:
  - author: Garrett Hardin
    title: "The Tragedy of the Commons"
    published: "Science 162(3859), 1243–1248"
    year: 1968
  - author: William Forster Lloyd
    title: Two Lectures on the Checks to Population
    published: Oxford University Press
    year: 1833
  - author: Elinor Ostrom
    title: Governing the Commons - The Evolution of Institutions for Collective Action
    published: Cambridge University Press
    year: 1990
  - author: Susan Jane Buck Cox
    title: "No Tragedy on the Commons"
    published: "Environmental Ethics 7(1), 49–61"
    year: 1985
  - author: Garrett Hardin
    title: "Lifeboat Ethics - The Case Against Helping the Poor"
    published: "Psychology Today 8, 38–43"
    year: 1974
questions:
  - id: q1
    prompt: >-
      Your village shares a well that is dropping. Everyone can see it. If you take less,
      and three of your neighbours take the same as before, the well still fails and you
      have simply had less water than they did.
    options:
      - id: a
        label: >-
          Take less anyway, and say publicly that you are doing it. You are not entitled to
          hasten a disaster because your restraint alone will not prevent it.
        scores: { deontological: 0.9, virtue: 0.5, agency: 0.5 }
      - id: b
        label: >-
          Call the village together and agree a limit with a way of checking. Unilateral
          restraint is a gesture; an enforceable rule is a solution.
        scores: { contractarian: 1.0, consequentialist: 0.5, authority: -0.3 }
      - id: c
        label: >-
          Take your share. Your family drinks, the well fails on a schedule you did not set,
          and moralising about it will not put water in the ground.
        scores: { egoist: 1.0, scope: -0.9 }
      - id: d
        label: >-
          Work out what actually saves the most water — probably not your bucket — and spend
          your effort there instead of on your own conduct.
        scores: { consequentialist: 1.0, scope: 0.6, affect: -0.5 }
  - id: q2
    prompt: >-
      Hardin's own remedy was what he called mutual coercion, mutually agreed upon —
      binding restrictions that everyone accepts precisely because nobody trusts anyone
      to restrain themselves voluntarily.
    options:
      - id: a
        label: >-
          Right, and it is the only honest answer. Freedom in a commons brings ruin to all,
          and a rule you consented to is not a loss of liberty.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.4 }
      - id: b
        label: >-
          Coercion is what you reach for when you have decided in advance that people cannot
          govern themselves. Very often they can, and they do it better than a ministry.
        scores: { virtue: 0.9, relativist: 0.4, authority: 0.6 }
      - id: c
        label: >-
          The word mutually is doing far too much work. Somebody writes the rule, and the
          people it falls hardest on are rarely the people who wrote it.
        scores: { deontological: 0.9, contractarian: 0.4, authority: 0.7 }
      - id: d
        label: >-
          Whether it is coercion is beside the point. The question is whether the resource
          survives, and voluntary schemes mostly have not made it.
        scores: { consequentialist: 1.0, scope: 0.7, certainty: 0.4 }
  - id: q3
    prompt: >-
      Elinor Ostrom spent thirty years documenting communities — Swiss alpine pastures,
      Japanese forests, Spanish irrigation, Philippine fisheries — that governed shared
      resources successfully for centuries with neither privatisation nor a state.
    options:
      - id: a
        label: >-
          That settles it. The tragedy is a claim about strangers who cannot see or sanction
          each other, and the answer is to rebuild the conditions where they can.
        scores: { contractarian: 1.0, virtue: 0.4, scope: -0.3 }
      - id: b
        label: >-
          Her cases are small, bounded and old. A fishery of two hundred families is not the
          atmosphere, and the scaling problem is the whole problem.
        scores: { consequentialist: 1.0, certainty: 0.4, scope: 0.8 }
      - id: c
        label: >-
          It shows the tragedy was never a law of nature but a description of a particular
          arrangement, and arrangements can be changed.
        scores: { virtue: 0.9, relativist: 0.4, certainty: -0.6 }
      - id: d
        label: >-
          It changes nothing about your own obligation. Whether a community can be built is a
          separate question from what you owe while it has not been.
        scores: { deontological: 1.0, agency: 0.4, certainty: 0.6 }
  - id: q4
    prompt: >-
      You fly twice a year to see family. Your emissions are a vanishing fraction of the
      total, and no plausible change in your behaviour affects any outcome that anyone
      could measure.
    options:
      - id: a
        label: >-
          Stop flying. What is wrong with the act does not depend on whether your share is
          detectable, and a wrong divided among millions is still being done.
        scores: { deontological: 1.0, agency: 0.6, certainty: 0.6 }
      - id: b
        label: >-
          Keep flying and put your effort into policy, which is where the quantities are.
          Personal abstinence is the least efficient thing an individual can do.
        scores: { consequentialist: 1.0, scope: 0.8, affect: -0.6 }
      - id: c
        label: >-
          Keep flying and stop pretending it is a moral question. You are being asked to
          carry a burden that was engineered to be uncarriable.
        scores: { egoist: 0.9, nihilist: 0.3, scope: -0.6 }
      - id: d
        label: >-
          Fly less, not because it registers, but because you cannot ask for a rule you are
          unwilling to live under before it exists.
        scores: { virtue: 1.0, contractarian: 0.4, certainty: -0.3 }
outcomes:
  - id: the-rule
    dominant: contractarian
    label: Mutual Coercion, Mutually Agreed
    text: >-
      You conclude that the answer to a commons is neither exhortation nor private virtue
      but a rule with teeth that everyone had a hand in and nobody can undercut. Both Hardin
      and Ostrom end up here, by opposite routes — Hardin through the state, Ostrom through
      the community — and it is the reasoning behind every fishing quota and emissions
      treaty that has worked. What you have to watch is who holds the pen. The word
      "mutually" carries the entire moral weight of the phrase, and in practice it is often
      the thinnest part of the arrangement.
    base_rate: null
  - id: the-quantity
    dominant: consequentialist
    label: Where the Quantities Are
    text: >-
      You keep your attention on the resource rather than on your own conduct, and you spend
      your effort where the numbers are largest even when that means declining to make a
      personal sacrifice that would have felt better. This is very likely the correct
      allocation of a limited amount of moral energy. Its cost is that it licenses almost
      any personal indulgence with an argument about scale, and the argument is the same
      whether or not you are actually doing the policy work you invoked.
    base_rate: null
  - id: the-share
    dominant: deontological
    label: Your Share Is Still Yours
    text: >-
      You hold that a wrong divided among millions is still being done, and that the
      undetectability of your contribution is a fact about measurement rather than about
      what you did. This keeps you honest where the consequentialist argument runs out, and
      it is the only position that does not dissolve entirely at scale. What it owes you is
      an account of the threshold — if no individual act makes a difference and yet the acts
      together do, you need to say what exactly it is you are doing wrong.
    base_rate: null
  - id: the-commoner
    dominant: virtue
    label: The Kind of Neighbour
    text: >-
      Your instinct is that Hardin's herdsmen are not people but a model of people, and that
      actual communities have restrained themselves for centuries through custom, shame,
      standing and the simple fact of being watched by people whose opinion matters. Ostrom's
      evidence is behind you. The limit is the one her critics press: the mechanisms you are
      relying on work where a community is bounded, durable and mutually visible, and the
      largest commons we now face are none of those things.
    base_rate: null
  - id: the-user
    dominant: egoist
    label: Take Your Share
    text: >-
      You decline to be the only one who stops, and you refuse to describe as a moral duty
      something that will change nothing except your own position relative to people who
      ignored it. There is a hard honesty here, and it identifies exactly why voluntary
      schemes fail. What it commits you to is a world in which nobody moves first — including
      in the cases where somebody moving first is the only mechanism by which any rule has
      ever come into existence.
    base_rate: null
---

## What it means

Garrett Hardin's essay "The Tragedy of the Commons" appeared in *Science* in 1968 and is
among the most cited papers ever published in any field. Its argument is contained in one
image.

Picture a pasture open to all. Each herdsman asks whether to add one more animal. The gain
from the extra animal is his alone. The cost — the incremental overgrazing — is shared by
everyone using the pasture. So the rational calculation, for each herdsman separately,
comes out in favour of adding the animal, and it comes out that way for every herdsman,
and it keeps coming out that way as the pasture degrades. Hardin's sentence: "Ruin is the
destination toward which all men rush, each pursuing his own best interest in a society
that believes in the freedom of the commons."

The picture was not original to him. William Forster Lloyd used it in *Two Lectures on the
Checks to Population* in 1833, and Hardin credits him. What Hardin added was the
generalisation — that this structure governs fisheries, aquifers, air, roads, national
parks and, in the essay's central and least-quoted application, human population — and a
conclusion about what to do. Technical fixes will not work, he argued, because the problem
has "no technical solution". Appeals to conscience will not work either; worse, they
select against the conscientious, who breed less and use less while everyone else does
not. What remains is what he called **mutual coercion, mutually agreed upon**: binding
restrictions accepted by the people they bind, precisely because nobody trusts anyone to
restrain themselves voluntarily. Taxes, quotas, licences, enclosure, private property in
what was common.

## What it suggests

The structural insight is durable and is not in serious dispute. Where the benefit of a
use is private and the cost of it is shared, individually reasonable behaviour aggregates
into collective ruin, and no amount of good character in any one participant fixes it. That
is the shape of overfishing, antibiotic resistance, traffic congestion, aquifer depletion
and the climate. It is also the best available explanation for why exhortation campaigns
tend to fail while quota systems tend to work.

Three things about the essay need saying plainly, because the citation is far more famous
than the reading.

**The history is wrong.** English commons were not open-access free-for-alls. They were
regulated: stinted, with the number of animals each commoner could graze fixed by right and
enforced by manorial courts, in some cases for six hundred years. Susan Jane Buck Cox
argued in "No Tragedy on the Commons" (1985) that what destroyed the commons was
enclosure, not overgrazing. Hardin's parable describes an unmanaged open-access resource
and calls it a commons, which is close to the opposite of what the word historically
meant.

**The empirical claim has been substantially answered.** Elinor Ostrom's *Governing the
Commons* (1990) — for which she received the Nobel Memorial Prize in Economics in 2009 —
documented Swiss alpine pastures, Japanese village forests, Spanish irrigation
associations and inshore fisheries that have governed shared resources for centuries with
neither privatisation nor state control. She extracted design principles: clear boundaries,
rules matched to local conditions, participation by users in making the rules, monitoring
by the users themselves, graduated sanctions, cheap conflict resolution, and recognition
from higher authorities. Ostrom did not claim commons always succeed; she showed that the
tragedy is a possible outcome rather than an inevitable one. The rejoinder her critics make
is about scale: her successful cases are bounded, long-lived communities where everyone can
see everyone, and the atmosphere is not one of those.

**The politics are part of the paper.** Hardin's essay is centrally about population
control, and it argues against what he called the freedom to breed. He went on to write
"Lifeboat Ethics: The Case Against Helping the Poor" (*Psychology Today*, 1974), arguing
against food aid and immigration on the grounds that rich nations are lifeboats that will
be swamped. That work, and his later associations, are documented and are a matter of
public record. None of it makes the structural insight false — the free-rider problem is
real whoever noticed it — but a reader who cites the paper without knowing what else is in
it should know.

## The problem

You sit on the harbour committee of a fishing town of nine hundred people, and the
scientific advice on the inshore stock arrived in March.

The number is not ambiguous. At current effort the stock collapses within six years. At
sixty per cent of current effort it recovers. There are fourteen boats. Six are owned by
families who have been here for four generations; four are owned by a company in another
country; two belong to men in their sixties with no successor and nothing else; two belong
to young men who mortgaged houses last year on the strength of the last good season.

Any voluntary scheme will be honoured by exactly the boats that need it least. Any
enforceable quota needs an inspector, and the inspector will be somebody's cousin. Any
allocation you propose will take from someone and give to someone else, and every method
you can think of — historical catch, boat size, need, seniority, lottery — is defensible
and favours a different four boats.

The company's boats will fish the quota to the last kilo and then move on to another
coast. Everyone knows this. Nobody can prove it, and the rules do not let you write it in.

The vote is in a fortnight, and after that the season opens whatever you have decided.

## The questions

**1. The failing well.** If you take less and three neighbours do not, the well still fails
and you have simply had less water.

- Take less anyway, and say so publicly.
- Call the village together and agree an enforceable limit.
- Take your share. Moralising will not put water in the ground.
- Work out what actually saves the most water and spend your effort there.

**2. Mutual coercion.** Hardin's remedy was binding restriction accepted by those it binds.

- Right, and the only honest answer. A rule you consented to is not a loss of liberty.
- Coercion is what you reach for when you have decided people cannot govern themselves.
- The word "mutually" is doing too much work. Somebody writes the rule.
- Whether it is coercion is beside the point. The question is whether the resource survives.

**3. Ostrom's cases.** Communities have governed commons for centuries with neither
privatisation nor a state.

- That settles it. Rebuild the conditions where people can see and sanction each other.
- Her cases are small and bounded. Scaling is the whole problem.
- It shows the tragedy was a description of an arrangement, not a law of nature.
- It changes nothing about what you owe while no such community exists.

**4. Two flights a year.** Your share is undetectable and no change you make affects any
measurable outcome.

- Stop flying. A wrong divided among millions is still being done.
- Keep flying, put your effort into policy, which is where the quantities are.
- Keep flying and stop pretending it is a moral question.
- Fly less, not because it registers, but because you cannot ask for a rule you will not
  live under.

## Reading your answer

**Mutual Coercion, Mutually Agreed.** You want a rule with teeth that nobody can undercut,
and you are willing to be bound by it yourself. Hardin and Ostrom both arrive here from
opposite directions, and it is the reasoning behind every quota that has actually worked.
Watch who holds the pen: "mutually" carries all the moral weight in that phrase and is
usually the weakest part of the arrangement.

**Where the Quantities Are.** You keep your eye on the resource and spend limited moral
energy where the numbers are largest, even at the cost of a personal sacrifice that would
have felt better. That is probably the right allocation. It also licenses almost any
indulgence with an argument about scale — an argument that reads identically whether or not
you are doing the policy work you invoked.

**Your Share Is Still Yours.** You hold that undetectability is a fact about measurement,
not about what you did. This survives at scales where consequentialist reasoning dissolves.
What you owe is an account of the threshold: if no single act makes a difference and the
acts together do, say precisely what the wrong in yours consists of.

**The Kind of Neighbour.** You think Hardin's herdsmen are a model of people rather than
people, and that custom, shame and mutual visibility have restrained communities for
centuries. Ostrom's evidence supports you. The limit is the one her critics press — those
mechanisms need a bounded, durable, mutually visible community, and the largest commons we
now face are none of those.

**Take Your Share.** You will not be the only one who stops, and you refuse to call a duty
what will change nothing but your own position relative to people who ignore it. This
correctly identifies why voluntary schemes fail. It commits you to a world where nobody
moves first, which is a problem, since somebody moving first is how every rule that now
exists got started.

## Sources

- Garrett Hardin, "The Tragedy of the Commons", *Science* 162(3859) (1968), 1243–1248.
- William Forster Lloyd, *Two Lectures on the Checks to Population* (Oxford, 1833) — the
  original parable, credited by Hardin.
- Elinor Ostrom, *Governing the Commons: The Evolution of Institutions for Collective
  Action* (Cambridge University Press, 1990) — the design principles and the empirical
  cases.
- Susan Jane Buck Cox, "No Tragedy on the Commons", *Environmental Ethics* 7(1) (1985),
  49–61 — the historical correction about English commons.
- Garrett Hardin, "Lifeboat Ethics: The Case Against Helping the Poor", *Psychology Today*
  8 (1974), 38–43 — the political programme the 1968 essay belongs to.
