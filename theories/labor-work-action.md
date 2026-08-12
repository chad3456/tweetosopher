---
id: labor-work-action
title: Labor, Work and Action
category: theory
tradition: political-philosophy
philosophers:
  - Hannah Arendt
era: "1958"
tags: [work, politics, meaning, automation, plurality, public-life]
sources:
  - author: Hannah Arendt
    title: The Human Condition
    published: University of Chicago Press
    year: 1958
  - author: Hannah Arendt
    title: "Eichmann in Jerusalem — A Report on the Banality of Evil"
    published: Viking Press
    year: 1963
  - author: Adrienne Rich
    title: On Lies, Secrets, and Silence — Selected Prose 1966–1978
    published: W. W. Norton
    year: 1979
  - author: Hanna Fenichel Pitkin
    title: "The Attack of the Blob — Hannah Arendt's Concept of the Social"
    published: University of Chicago Press
    year: 1998
questions:
  - id: q1
    prompt: >-
      Two job offers, same pay. One keeps a hospital's supply chain running — endless,
      invisible, and undone by tomorrow morning. One builds an archive that will
      outlast you but that nobody will use for a decade. Which is the better life?
    options:
      - id: a
        label: >-
          The archive. A life should leave something behind that stands up on its own
          after you stop touching it.
        scores: { virtue: 0.9, existentialist: 0.4, affect: -0.3 }
      - id: b
        label: >-
          The supply chain. People are alive on the other end of it, and durability is
          a vanity next to that.
        scores: { consequentialist: 0.9, care: 0.6, scope: 0.5 }
      - id: c
        label: >-
          Neither is the question. A better life is one spent among other people
          deciding things together, and both of these are done alone at a desk.
        scores: { virtue: 0.7, existentialist: 0.6, authority: 0.4 }
      - id: d
        label: >-
          Whichever you can be honest about wanting. Ranking kinds of work is how
          people end up despising the ones who do the necessary kind.
        scores: { existentialist: 0.8, relativist: 0.4, certainty: -0.6 }
  - id: q2
    prompt: >-
      Automation can eliminate every repetitive job in your firm within three years.
      Nobody would be sacked; the freed workers keep their pay and choose what to do.
      A union rep argues that the jobs were how people knew what their day was for.
    options:
      - id: a
        label: >-
          Automate. Necessity is not dignity, and no one should have to grind to
          deserve a life.
        scores: { consequentialist: 0.9, existentialist: 0.5, agency: 0.4 }
      - id: b
        label: >-
          Automate, but understand what you are removing. A society freed from labour
          and unequipped for anything else is a society of consumers.
        scores: { virtue: 0.9, consequentialist: 0.4, certainty: -0.4 }
      - id: c
        label: >-
          Slow down. What holds those people's weeks together is not the pay, and you
          cannot hand them a substitute you have not built yet.
        scores: { care: 0.9, virtue: 0.5, affect: 0.6 }
      - id: d
        label: >-
          Ask them, and abide by it. Whose day it is decides what the day is for.
        scores: { contractarian: 0.9, existentialist: 0.4, authority: 0.5 }
  - id: q3
    prompt: >-
      A city has a homelessness crisis. A consultancy proposes a fully specified
      programme with a target, a timetable and a delivery unit, and asks the council to
      stop debating and let them execute.
    options:
      - id: a
        label: >-
          Let them execute. Deliberation has produced eleven years of debate and no
          beds. Results are the only argument that matters.
        scores: { consequentialist: 1.0, authority: -0.5, affect: -0.5 }
      - id: b
        label: >-
          Refuse. Treating a political question as a manufacturing problem means
          somebody decides what people are for, and nobody elected them.
        scores: { virtue: 0.8, contractarian: 0.6, authority: 0.7 }
      - id: c
        label: >-
          Execute the beds, keep the argument. The mistake is thinking you must pick
          between building and deciding.
        scores: { consequentialist: 0.7, contractarian: 0.5, certainty: -0.3 }
      - id: d
        label: >-
          Put the people who sleep outside in the room with a vote. Anything decided
          about them without them is administration, not politics.
        scores: { care: 0.8, contractarian: 0.6, scope: 0.5 }
  - id: q4
    prompt: >-
      Your father is dying slowly at home. Caring for him full time will consume two
      years, leave no trace anyone will see, and end the public work you had begun.
      A paid carer is affordable and competent.
    options:
      - id: a
        label: >-
          Do it yourself. Some things are not delegable, and what shows for it
          afterwards is not the measure.
        scores: { care: 1.0, virtue: 0.5, scope: -0.7 }
      - id: b
        label: >-
          Hire the carer and keep the work. More people are served by what you were
          building than by which hands hold the cup.
        scores: { consequentialist: 0.9, scope: 0.8, affect: -0.6 }
      - id: c
        label: >-
          Hire the carer and be there anyway, badly, in the evenings. The choice is
          rigged; refuse the framing.
        scores: { care: 0.7, virtue: 0.6, certainty: -0.5 }
      - id: d
        label: >-
          Decide it as your own life's shape and stop looking for a rule. This is
          exactly the kind of question that has no answer outside the person living it.
        scores: { existentialist: 1.0, relativist: 0.3, certainty: -0.8 }
outcomes:
  - id: the-durable
    dominant: virtue
    label: What a Life Leaves Standing
    text: >-
      You judge a life by what it makes and what making it makes of the maker, and you
      are suspicious of activity that only sustains itself. Arendt is with you at least
      this far — she thought a world of things that outlast their makers is what stops
      human life from being a treadmill. The cost is that this ranking has a long
      history of being used against people who had no choice about which kind of work
      they did, and against every task that has to be redone tomorrow, which includes
      most of the tasks that keep anyone alive.
    base_rate: null
  - id: the-necessary
    dominant: consequentialist
    label: Whatever Keeps People Alive
    text: >-
      You think the hierarchy is an aesthetic preference dressed as a philosophy, and
      that a hospital's deliveries matter more than an archive nobody opens. This is a
      strong position and it is why the tradition Arendt drew on has been criticised
      since antiquity for contempt toward the people who do the necessary work. Its
      exposure is the one she named directly — a politics run entirely as delivery has
      to decide what people need without asking them, and then it has stopped being
      politics.
    base_rate: null
  - id: the-sustaining
    dominant: care
    label: The Work That Leaves No Trace
    text: >-
      You reach for the tasks that vanish on completion and are owed anyway — the meal,
      the bedside, the shift covered. Feminist readers of Arendt, and Adrienne Rich
      most memorably, made this the central objection to her scheme: what she filed
      under mere biological necessity is where most love actually happens. What the
      position owes you is an account of scale, since an ethic organised around
      presence has real trouble saying why the four hundred people you will never meet
      have any claim.
    base_rate: null
  - id: the-self-authored
    dominant: existentialist
    label: No Rank Outside the Life
    text: >-
      You refuse the ordering itself. Whether a life was well spent is settled by the
      person spending it, and rankings of kinds of activity are how contempt gets a
      philosophical licence. That is a serious position and it protects people the
      scheme was used against. The price is that it makes the question unanswerable in
      advance, which is fine for your own life and awkward when a council has to decide
      whose weeks it is about to rearrange.
    base_rate: null
  - id: the-agreed
    dominant: contractarian
    label: Whose Day It Is
    text: >-
      Your instinct is to hand the decision to the people it will land on — automate if
      they choose it, house people with them in the room. That is close to what Arendt
      meant by action, which for her happens between plural people who are not
      interchangeable and cannot be spoken for. The difficulty is that consultation is
      slow and often produces the answer that nobody moves, and the people sleeping
      outside tonight are not indifferent to how long the argument takes.
    base_rate: null
---

## What it means

*The Human Condition* (1958) is Hannah Arendt's attempt to sort out what human beings
are doing when they are doing something. She divides the active life into three kinds
of activity, and insists they are not degrees of the same thing but genuinely
different.

**Labour** is what we do to stay alive: growing food, cooking it, cleaning, nursing,
maintaining, and all the effort that is consumed in the moment of its use and must be
done again tomorrow. It answers to biological necessity and it leaves no residue.
Arendt calls the human being considered under this aspect *animal laborans* — the
labouring animal, cycling with nature rather than escaping it.

**Work** is fabrication. It makes objects that stand apart from their maker and last:
a table, a road, a legal code, a violin. Work has a beginning and a definite end, it
proceeds by means and ends, and what it produces is a *world* — the durable artificial
environment that human beings inhabit and that outlives any of them. Its figure is
*homo faber*, man the maker.

**Action** is the one Arendt cares about most and the hardest to state. It is what
happens between people when they speak and act in each other's presence without an
object in between: founding, promising, arguing, refusing, beginning something new.
Action depends on *plurality* — the fact that many distinct people, not one repeated
person, inhabit the earth — and its result is not a product but a disclosure of *who*
somebody is. It is unpredictable, irreversible, and cannot be done alone. Politics,
for Arendt, just is this, and everything else called politics is administration.

Her worry about the modern age is that the ranking has inverted. Labour, once hidden in
the household, has become the model for everything, so that work is judged by
productivity and politics by delivery; meanwhile action has thinned out into
management. Her separate and much-abused account of Adolf Eichmann in 1963 — the
"banality of evil" — belongs to the same picture: what she claimed to see in the
courtroom was a man who had stopped thinking, doing his job. Whether that description
fits the historical Eichmann has been seriously contested, above all by Bettina
Stangneth's *Eichmann Before Jerusalem*, which documents an ideologically committed
antisemite performing mediocrity for the court. Report the thesis; do not treat it as
settled biography.

## What it suggests

If the distinctions hold, several ordinary judgements have to be redone.

It means you cannot evaluate a job purely by what it pays or produces. A life spent
entirely in labour — however well compensated — never leaves the cycle of consumption,
and Arendt thinks a society organised around that will experience its own freedom as
boredom. It means automation is not straightforwardly good news: a society that frees
itself from labour without having anywhere to put the freed capacity gets consumers,
not citizens. And it means the highest-status activity in most modern lives —
efficient execution against a target — is, in her scheme, the *second* thing, and
becomes dangerous when applied to people. Fabrication works by means and ends. Applied
to a political community, it requires someone to hold the blueprint, and everyone else
becomes material.

The objection is serious and comes from several directions at once. The most damaging
is that the hierarchy is a piece of Greek aristocratic prejudice given a twentieth-
century vocabulary: labour is what women, slaves and servants did, it was despised
because of who did it, and Arendt reinscribes the contempt while claiming to describe a
structure. Adrienne Rich called the book a failure of female consciousness. Others,
Hanna Pitkin among them, argue that Arendt's category of "the social" — the blob of
mass housekeeping she thinks has swallowed politics — is never coherently defined and
does most of its work by disdain. And there is a plain practical objection: if action
is unpredictable, discloses rather than achieves, and produces no product, it is not
obvious why anyone starving should prefer it.

## The problem

The plant employs six hundred people in a town of eleven thousand, and you run it.

The work is repetitive. People stand at a line and do a thing four hundred times a
shift. You have costed a system that will do all of it, and the board has agreed to a
condition you insisted on: nobody loses their income. Every one of the six hundred
keeps their wage for as long as they would have worked. The money is real; the
mechanism is signed.

At the consultation meeting, a woman named Teresa who has been on the line for
twenty-two years asks what she is supposed to do on Monday. You explain, again, that
she will be paid. She says she understood that the first time. She says her sister was
paid off six years ago and now watches television. She says the line is where she
learned everyone's names, where she once organised a walkout that won something, where
she knows what she is for by ten past six in the morning.

You have a good argument. The work is hard, the bodies wear out, and nobody's dignity
should require standing on concrete. She has a good argument too, and it is not really
about money, so the money does not answer it.

Behind both of you is a third question nobody in the room has asked: whether the answer
is anyone's to give but Teresa's.

## The questions

**1. Two offers.** Keep a hospital's supply chain running, or build an archive that
outlasts you and nobody opens for a decade.

- The archive. A life should leave something that stands after you stop touching it.
- The supply chain. People are alive at the other end; durability is a vanity beside that.
- Neither. A better life is spent among others deciding things, and both of these are solitary.
- Whichever you can be honest about wanting. Ranking work is how contempt starts.

**2. The automation.** Every repetitive job gone in three years, nobody sacked, pay
retained.

- Automate. Necessity is not dignity.
- Automate, but know what you are removing. Freed and unequipped is a society of consumers.
- Slow down. You cannot hand people a substitute you have not built.
- Ask them and abide by it. Whose day it is decides what the day is for.

**3. The delivery unit.** A fully specified homelessness programme, on condition the
council stops debating.

- Let them execute. Eleven years of debate, no beds.
- Refuse. A political question run as manufacturing means somebody decides what people are for.
- Execute the beds, keep the argument. The choice is false.
- Put the people sleeping outside in the room with a vote.

**4. The dying father.** Two years of care that leaves no trace, or a competent paid
carer and the public work you had started.

- Do it yourself. Some things are not delegable.
- Hire the carer, keep the work. More people are served by what you were building.
- Hire the carer and be there badly in the evenings. Refuse the framing.
- Decide it as your own life's shape; no rule reaches inside it.

## Reading your answer

**What a Life Leaves Standing.** You measure by what gets made and what making it makes
of you. Arendt is with you about the world of durable things. The cost is that this
ranking has been used for two thousand years against the people who had no say in which
kind of work they did.

**Whatever Keeps People Alive.** You think the hierarchy is taste dressed as
philosophy, and that deliveries beat archives. Strong ground — and the exact ground on
which the tradition has been criticised since antiquity. Your exposure is that a
politics run wholly as delivery decides what people need without asking, and has
stopped being politics.

**The Work That Leaves No Trace.** You go to the tasks that vanish and are owed anyway.
That is the standing feminist objection to Arendt's scheme, and it lands. What it owes
you is scale: an ethic run on presence struggles to say why strangers count.

**No Rank Outside the Life.** You refuse the ordering. That protects the people it was
used against, and it makes the question unanswerable in advance — awkward when a
council has to decide whose week it is rearranging.

**Whose Day It Is.** You hand the decision to the people it lands on, which is close to
what Arendt meant by action among plural people. The difficulty is that the process is
slow, often returns "do nothing", and the people sleeping outside are not indifferent
to the delay.

## Sources

- Hannah Arendt, *The Human Condition* (University of Chicago Press, 1958) — the
  primary statement; the three activities are set out in the Prologue and chapters III
  to V.
- Hannah Arendt, *Eichmann in Jerusalem: A Report on the Banality of Evil* (Viking,
  1963) — the thoughtlessness thesis; contested as biography by Bettina Stangneth,
  *Eichmann Before Jerusalem: The Unexamined Life of a Mass Murderer* (German 1911
  publisher Arche, 2011; English translation Knopf, 2014).
- Adrienne Rich, *On Lies, Secrets, and Silence: Selected Prose 1966–1978* (W. W.
  Norton, 1979) — the feminist objection to Arendt's treatment of labour.
- Hanna Fenichel Pitkin, *The Attack of the Blob: Hannah Arendt's Concept of the Social*
  (University of Chicago Press, 1998).
