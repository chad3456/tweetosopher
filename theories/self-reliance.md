---
id: self-reliance
title: Self-Reliance
category: theory
tradition: transcendentalism
philosophers:
  - Ralph Waldo Emerson
era: "1841"
tags: [conformity, conscience, integrity, individualism, obligation]
sources:
  - author: Ralph Waldo Emerson
    title: Self-Reliance
    published: "Essays: First Series"
    year: 1841
  - author: Ralph Waldo Emerson
    title: The American Scholar
    published: "Address to the Phi Beta Kappa Society, Cambridge, Massachusetts"
    year: 1837
  - author: Stanley Cavell
    title: "Conditions Handsome and Unhandsome: The Constitution of Emersonian Perfectionism"
    published: University of Chicago Press
    year: 1990
questions:
  - id: q1
    prompt: >-
      You have worked six years in your family's business because your father asked
      you to, and you are good at it. You want to leave for work of your own. Your
      mother says the firm will not survive the year without you, and that she is not
      asking you to be happy, only to be decent.
    options:
      - id: a
        label: >-
          Leave. A life spent inside a plan someone else made for you is not made
          better by the plan being a good one.
        scores: { existentialist: 0.9, egoist: 0.4, authority: 0.8 }
      - id: b
        label: >-
          Stay. You did not choose this family, and that is exactly why the claim
          it has on you is real.
        scores: { care: 0.9, deontological: 0.4, authority: -0.6 }
      - id: c
        label: >-
          Stay long enough to hand it over properly, then go. How you leave is part
          of what leaving means.
        scores: { virtue: 0.7, care: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          Ask what you would tell a stranger in your position. If the obligation is
          real it binds anyone, and if it is not it does not bind you either.
        scores: { deontological: 0.8, scope: 0.5, affect: -0.5 }
  - id: q2
    prompt: >-
      A man you barely know stops you in the street collecting for a cause you have
      no connection to. You feel nothing for it. You are aware that you will be seen
      refusing, and that the money would do some good.
    options:
      - id: a
        label: >-
          Give. Whether you happen to feel connected has nothing to do with whether
          the need is real.
        scores: { deontological: 0.6, scope: 0.8, consequentialist: 0.4 }
      - id: b
        label: >-
          Refuse. What you have belongs first to the people you actually stand in
          some relation to, and that list is short.
        scores: { care: 0.9, egoist: 0.3, scope: -0.8 }
      - id: c
        label: >-
          Refuse, precisely because you can feel the pull of being watched. Giving to
          settle that feeling is the thing worth refusing.
        scores: { existentialist: 0.8, virtue: 0.4, authority: 0.9 }
      - id: d
        label: >-
          Give, and admit the motive was mostly awkwardness. That is a poor reason,
          and the money still arrives.
        scores: { virtue: 0.5, consequentialist: 0.4, certainty: -0.5 }
  - id: q3
    prompt: >-
      Five years ago you argued a position publicly and persuaded people. You now
      think you were wrong. Several of them have made decisions on the strength of
      what you said, and one of them will be in the room when you speak next.
    options:
      - id: a
        label: >-
          Say so plainly. Agreeing with a former self is not a virtue, and treating
          it as one is how people end up defending things they no longer believe.
        scores: { existentialist: 0.8, virtue: 0.4, certainty: -0.7 }
      - id: b
        label: >-
          Say so, but the manner is the substance. People built lives on this and are
          owed more than your relief at having seen the light.
        scores: { care: 0.7, deontological: 0.5, certainty: -0.3 }
      - id: c
        label: >-
          Hold the line until you are sure. A public reversal you have not yet
          earned is vanity wearing the costume of honesty.
        scores: { virtue: 0.7, authority: -0.3, certainty: 0.3 }
      - id: d
        label: >-
          Publish the reasons and let them be judged. What you owe is the argument,
          not the conclusion and not your credibility.
        scores: { deontological: 0.6, contractarian: 0.4, affect: -0.6 }
  - id: q4
    prompt: >-
      A twenty-year-old you like asks you, seriously and without irony, where a
      person should look when they want to know what to do. They mean it as a
      practical question and they will take your answer seriously.
    options:
      - id: a
        label: >-
          Inward. Whatever you can be talked out of by a crowd was never yours in
          the first place.
        scores: { existentialist: 0.9, authority: 1.0 }
      - id: b
        label: >-
          To the traditions that formed you. They are older than you and have
          survived more tests than your conscience has faced.
        scores: { deontological: 0.7, divine: 0.3, authority: -0.8 }
      - id: c
        label: >-
          To someone they admire, and then watch what that person actually does when
          it costs them.
        scores: { virtue: 0.9, affect: 0.4 }
      - id: d
        label: >-
          To whoever depends on them. Obligations are mostly discovered, not chosen,
          and they are usually standing right there.
        scores: { care: 0.9, scope: -0.5 }
outcomes:
  - id: the-original-self
    dominant: existentialist
    label: Nothing Above Your Own Verdict
    text: >-
      You treat your own judgement as the last court, and you distrust any pull that
      comes from being seen. That is the Emersonian nerve, and it is the only thing
      that has ever let anyone break a bad consensus. Its price is that self-trust
      does not come with a way of telling genius from appetite: the person who
      refuses the crowd because they see further and the person who refuses because
      they cannot bear to be told anything both report the same inner voice.
    base_rate: null
  - id: the-character
    dominant: virtue
    label: What the Leaving Says About You
    text: >-
      You judge acts by what they reveal and what they build, which is why the manner
      of doing a thing weighs as much with you as the thing. This handles the cases
      where a technically correct decision is executed shabbily. It is weakest when
      you need an answer now: character tells you how to leave the family firm but not
      whether to, and "be the sort of person who chooses well" has never yet chosen
      anything.
    base_rate: null
  - id: the-near-claim
    dominant: care
    label: The Ones Already Holding On
    text: >-
      You take obligation to be something you find yourself inside rather than
      something you sign up for, and you are unimpressed by claims from people who
      are strangers to you. That is a fair description of how nearly every real duty
      actually arrives. What it costs you is the stranger: on your view the collector
      in the street has no purchase at all, and you need some account of why distance
      should make a difference to need.
    base_rate: null
  - id: the-binding-rule
    dominant: deontological
    label: What Would Bind Anyone
    text: >-
      You test a claim by asking whether it would bind someone else in the same
      position, which strips out both flattery and self-interest and is the reason
      you can be argued with. The exposure is Emerson's own charge: a rule that binds
      anyone is a rule you did not make, and if you are never willing to trust your
      own sense against it, you have simply relocated the crowd inside your head.
    base_rate: null
---

## What it means

"Self-Reliance" is the essay Emerson published in *Essays: First Series* in 1841, and its
claim is narrower and harder than the slogan it became. Emerson is not saying that you
should look after yourself. He is saying that the moral authority most people defer to —
custom, respectability, the church, the party, the opinion of the room — has no standing
that your own perception does not have, and that deferring to it is the ordinary way a
person stops being anyone in particular.

The argument runs through a set of lines that have long outlived their context. "Whoso
would be a man must be a nonconformist." "A foolish consistency is the hobgoblin of little
minds." "Trust thyself: every heart vibrates to that iron string." Emerson's picture is
that each person has access to something — he calls it genius, and elsewhere the Over-Soul
— that is not private in the sense of being merely theirs, but is reached only from where
they stand. To speak from it is to speak for others; to speak from received opinion is to
speak for nobody, including yourself.

The essay is not sentimental about the cost. Emerson expects the self-reliant person to be
misunderstood, to disappoint people who counted on them, and to contradict themselves in
public. The passage that still stops readers is the one about charity: he writes of the
dollar he sometimes gives to causes that do not belong to him, and calls it a wicked
dollar which by and by he shall have the manhood to withhold. He is not defending
stinginess. He is saying that giving in order to be seen giving corrupts both the gift and
the giver, and that "thy love afar is spite at home."

## What it suggests

If you take it seriously, the first casualty is the idea that being consistent with your
past positions is a form of integrity. On Emerson's view it is usually the opposite: a
person who cannot revise in public has made their reputation the thing they are protecting.
The second casualty is deference as a default. Not deference in particular cases — Emerson
has no objection to learning from a doctor — but the habit of treating the existence of a
consensus as evidence that the consensus is right.

The third and most uncomfortable implication is about obligation. Emerson's position makes
duties something you must be able to see for yourself, not something that can be handed to
you by a family, a nation or a needy stranger. This licenses the person who walks out of
the family firm. It also licenses the person who walks out on their children, and Emerson
supplies no principled way to separate them. On Stanley Cavell's reading the essay is about
perfectionism — becoming the next self you are capable of — rather than about escaping
obligation, but the text does not close the door Cavell would like closed.

That is the standing objection, and it is serious. Self-trust has no error-detection built
in. The rebel and the crank produce identical first-person reports: both feel the crowd is
wrong, both feel a conviction they cannot fully justify, both find that the people around
them are alarmed. Emerson's answer — that the true instance will be recognised eventually
and the false one will not — is a bet on posterity, not a test you can run now. A further
objection is sociological: the freedom to disregard everyone's opinion is unevenly
distributed, and it is much easier to trust yourself from a house you own in Concord than
from a position where other people's approval is what keeps you fed.

## The problem

Your sister runs the shop your parents built, and you have kept the books for it since you
left college. The work is dull and you are good at it, and everyone assumes you always will.

Two months ago you were offered something else — smaller money, work you would choose, and
a start date in six weeks. You have not told anyone.

Last week your sister told you, without knowing what she was doing, that she had turned
down an offer to sell because the family would never forgive her, and that she had assumed
you would be there. She said it lightly. She meant it entirely.

You know the shop will survive without you, probably. You know it will be harder, certainly.
You know that if you go, the version of you that everyone has agreed on for fifteen years
goes with it, and that some of them will treat your leaving as a verdict on them.

Nobody is asking you to do anything wrong. That is what makes it hard. The claim on you is
made of ordinary decency, long habit, and the fact that you are the person who does the
books. Emerson's question is whether any of that is a reason, or only a weight.

## The questions

**1. The family firm.** Six years in the family business because your father asked. You
want work of your own. Your mother says the firm will not survive the year, and that she is
asking you to be decent, not happy.

- Leave. A life spent inside a plan someone else made for you is not improved by the plan
  being a good one.
- Stay. You did not choose this family, and that is exactly why its claim on you is real.
- Stay long enough to hand it over properly, then go. How you leave is part of what leaving
  means.
- Ask what you would tell a stranger in your position. A real obligation binds anyone.

**2. The dollar in the street.** A collector for a cause you feel nothing for. You will be
seen refusing, and the money would do some good.

- Give. Whether you feel connected has nothing to do with whether the need is real.
- Refuse. What you have belongs first to the people you actually stand in relation to.
- Refuse, precisely because you can feel the pull of being watched.
- Give, and admit the motive was mostly awkwardness. Poor reason; the money still arrives.

**3. The public reversal.** You argued a position five years ago and persuaded people. You
now think you were wrong, and one of the persuaded will be in the room.

- Say so plainly. Agreeing with a former self is not a virtue.
- Say so, but the manner is the substance — people built lives on this.
- Hold the line until you are sure. A reversal you have not earned is its own vanity.
- Publish the reasons and let them be judged. What you owe is the argument.

**4. The question from the twenty-year-old.** Where should a person look when they want to
know what to do?

- Inward. Whatever a crowd can talk you out of was never yours.
- To the traditions that formed you; they have survived more tests than your conscience has.
- To someone they admire, and watch what that person does when it costs them.
- To whoever depends on them. Obligations are mostly discovered, not chosen.

## Reading your answer

**Nothing Above Your Own Verdict.** You treat your own judgement as final and distrust
anything that moves you because you are being watched. That is the whole Emersonian nerve,
and nothing else has ever broken a bad consensus. The price is that self-trust has no
error-detection: the person who refuses the crowd because they see further and the person
who refuses because they cannot bear instruction give the same report from the inside.

**What the Leaving Says About You.** You weigh the manner of an act as heavily as the act,
which is why you can tell a correct decision executed shabbily from a good one. Your weak
point is urgency. Character tells you how to leave the family firm and not whether to, and
you should notice how often "do it well" has stood in for deciding.

**The Ones Already Holding On.** You take obligation as something you find yourself inside,
not something you opt into, which describes how nearly every real duty actually arrives.
What it costs is the stranger. On your account the collector has no purchase at all, and
you owe yourself some story about why distance should change what need is worth.

**What Would Bind Anyone.** You test a claim by asking whether it would bind someone else
in your position, which strips out flattery and self-interest and makes you argueable-with.
The exposure is Emerson's own charge: a rule that binds anyone is a rule you did not make,
and if you never trust your own sense against it, you have moved the crowd indoors.

## Sources

- Ralph Waldo Emerson, "Self-Reliance", in *Essays: First Series* (1841).
- Ralph Waldo Emerson, "The American Scholar", address to the Phi Beta Kappa Society,
  Cambridge, Massachusetts (1837) — the earlier statement of intellectual independence.
- Stanley Cavell, *Conditions Handsome and Unhandsome: The Constitution of Emersonian
  Perfectionism* (University of Chicago Press, 1990) — the reading on which the essay is
  about becoming a next self rather than escaping obligation.
