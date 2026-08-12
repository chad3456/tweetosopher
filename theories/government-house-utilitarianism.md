---
id: government-house-utilitarianism
title: Government House Utilitarianism
category: term
tradition: utilitarianism
philosophers:
  - Bernard Williams
  - Henry Sidgwick
era: "1973–1982"
tags: [esoteric-morality, publicity, elitism, transparency, paternalism, colonialism]
sources:
  - author: Henry Sidgwick
    title: The Methods of Ethics
    published: "Macmillan, London; 7th edition 1907, book IV ch. 5"
    year: 1874
  - author: Bernard Williams
    title: "A Critique of Utilitarianism"
    published: "in J.J.C. Smart and Bernard Williams, Utilitarianism: For and Against, Cambridge University Press"
    year: 1973
  - author: Bernard Williams
    title: "Introduction"
    published: "in Amartya Sen and Bernard Williams (eds.), Utilitarianism and Beyond, Cambridge University Press"
    year: 1982
  - author: Bernard Williams
    title: "Ethics and the Limits of Philosophy"
    published: "Fontana / Harvard University Press"
    year: 1985
  - author: Katarzyna de Lazari-Radek and Peter Singer
    title: "Secrecy in Consequentialism: A Defence of Esoteric Morality"
    published: "Ratio 23(1), 34–59"
    year: 2010
  - author: John Rawls
    title: A Theory of Justice
    published: "Harvard University Press; see §23 on publicity"
    year: 1971
questions:
  - id: q1
    prompt: >-
      Your agency's modelling shows that publishing the true uncertainty around a
      public health measure would cut compliance sharply and cost lives, while a
      confident simplified message would not. Both messages are consistent with
      the evidence; only one is honest about how much you do not know.
    options:
      - id: a
        label: >-
          Simplify. You are not writing a paper, you are trying to keep people
          alive, and the accurate message predictably kills more of them.
        scores: { consequentialist: 1.0, authority: -0.4, affect: -0.4 }
      - id: b
        label: >-
          Publish the uncertainty. A public managed by messages calibrated for
          effect will stop believing any message, including the true ones.
        scores: { consequentialist: 0.8, contractarian: 0.5, certainty: 0.4 }
      - id: c
        label: >-
          Publish it because they are entitled to it. It is their risk, their
          bodies, and the information is not yours to ration.
        scores: { deontological: 1.0, authority: 0.6 }
      - id: d
        label: >-
          Publish it because of what an agency becomes once it has decided which
          truths the public can handle. That habit does not stay in one crisis.
        scores: { virtue: 0.9, care: 0.3 }
  - id: q2
    prompt: >-
      Sidgwick wrote that on utilitarian principles it may be right to do and
      privately recommend what it would not be right to advocate openly — and
      that a utilitarian may reasonably wish some of his conclusions to be
      rejected by mankind generally. Is that a coherent moral position?
    options:
      - id: a
        label: >-
          Coherent and correct. Whether a doctrine does good when believed is a
          separate question from whether it is true, and only a vanity insists
          they must coincide.
        scores: { consequentialist: 1.0, certainty: 0.5 }
      - id: b
        label: >-
          Not coherent as morality. A reason that cannot be offered to the person
          it applies to is not functioning as a reason at all.
        scores: { deontological: 0.9, contractarian: 0.5, certainty: 0.6 }
      - id: c
        label: >-
          Coherent, and that is the objection. It describes a caste who know the
          truth and a public who are managed, and history is not short of those.
        scores: { relativist: 0.8, virtue: 0.4, authority: 0.5 }
      - id: d
        label: >-
          The test is whether the arrangement could be agreed to by those kept in
          the dark, and by construction it cannot be.
        scores: { contractarian: 1.0, scope: 0.5 }
  - id: q3
    prompt: >-
      A trial's participants would drop out if told a true but discouraging
      interim result, and the trial will save many lives if completed. The
      protocol permits withholding. Your statistician says telling them is a
      luxury paid for by future patients.
    options:
      - id: a
        label: >-
          Withhold, disclose fully at the end, and accept the criticism. The
          lives are not hypothetical and the discomfort is temporary.
        scores: { consequentialist: 1.0, agency: 0.5 }
      - id: b
        label: >-
          Tell them. They lent you their bodies on terms, and those terms are
          what makes the trial something other than an experiment on people.
        scores: { deontological: 1.0, contractarian: 0.6 }
      - id: c
        label: >-
          Tell them, because a research system caught doing this once loses more
          participants over a decade than this trial could ever save.
        scores: { consequentialist: 0.9, certainty: 0.3 }
      - id: d
        label: >-
          Tell them, because these are people who trusted you personally, and
          "future patients" is a category that has never trusted anyone.
        scores: { care: 1.0, virtue: 0.4, scope: -0.7 }
  - id: q4
    prompt: >-
      Williams named the position after the colonial administrators who applied
      utilitarian reasoning themselves while encouraging the governed to keep
      their traditional morality. A defender replies that the elitism is an
      accident of the example and not of the argument.
    options:
      - id: a
        label: >-
          The defender is right. The structure appears wherever expertise is
          uneven — medicine, aviation, monetary policy — and it is not colonial.
        scores: { consequentialist: 0.9, authority: -0.5 }
      - id: b
        label: >-
          The name is the argument. A theory whose truth is fit only for those
          who administer it has told you what kind of theory it is.
        scores: { relativist: 0.9, certainty: 0.4, affect: 0.5 }
      - id: c
        label: >-
          The decisive point is publicity: principles must be capable of being
          known and accepted by everyone they bind, or they do not bind.
        scores: { contractarian: 1.0, deontological: 0.5 }
      - id: d
        label: >-
          The real objection is what it does to the administrators. People who
          spend a career deciding what others can be told stop being able to hear
          anything themselves.
        scores: { virtue: 1.0, affect: 0.4 }
outcomes:
  - id: the-results
    dominant: consequentialist
    label: Judge the Doctrine By Its Effects
    text: >-
      You separate the truth of a moral theory from the effects of teaching it,
      and you accept that these can come apart — that a message calibrated for
      compliance may do more good than an accurate one, and that this is a reason
      rather than a rationalisation. Sidgwick reached the same conclusion, and de
      Lazari-Radek and Singer have defended it seriously. What you cannot do is
      apply it to yourself from outside. Every institution that has taken this
      route has believed its own case for secrecy was the exceptional one, and
      the record of those judgements, examined afterwards, is very bad.
    base_rate: null
  - id: the-owed-truth
    dominant: deontological
    label: The Information Is Not Yours
    text: >-
      You hold that people are owed the truth about matters that concern them,
      independently of what they will do with it — their risk, their bodies,
      their decision. That gets the trial case right without needing to forecast
      anything, which is an advantage, since the forecast is exactly what the
      withholder is best placed to get wrong in his own favour. The cost is the
      case where telling the truth predictably kills people, and you must be
      willing to say there that the truth is still owed.
    base_rate: null
  - id: the-publicity
    dominant: contractarian
    label: Principles That Can Be Published
    text: >-
      Your test is publicity: a principle counts only if it could be known and
      accepted by everyone it binds, which is Rawls's condition and the most
      precise objection to esoteric morality anyone has formulated. It explains
      exactly what is wrong with a doctrine whose defenders hope the public will
      reject it. Where it presses on you is emergencies and expertise: some
      things genuinely cannot be explained in time, and a rule that every
      operative principle be publishable in advance will occasionally cost lives
      you could have saved.
    base_rate: null
  - id: the-administrator
    dominant: virtue
    label: What It Does to the Keeper
    text: >-
      Your attention is on the people who hold the secret rather than on those
      kept from it — on what a career of deciding which truths others can bear
      makes of a person and an institution. This is close to Williams's actual
      objection, which was never mainly about consequences. It also explains why
      the practice spreads: the habit is not confined to the emergency that
      justified it. Its weakness is that it is unfalsifiable in the moment. The
      administrator who has been corrupted this way is precisely the one who
      cannot tell.
    base_rate: null
  - id: the-caste
    dominant: relativist
    label: Who Gets to Know
    text: >-
      You read the doctrine through the sociology of who is trusted with it, and
      you take Williams's colonial name to be doing argumentative work rather
      than decorating it. The historical case is strong; the structure has
      reliably tracked existing hierarchies rather than actual competence. What
      it leaves you short of is a principle. If the objection is only that the
      wrong people have held the knowledge, then it is answered by better people
      holding it, and you would need something else to say why the arrangement
      is objectionable when they are.
    base_rate: null
  - id: the-ones-who-trusted
    dominant: care
    label: The People In Front of You
    text: >-
      You answer from the particular relationship: these participants trusted you
      by name, and a category like "future patients" has never trusted anyone.
      That is a real asymmetry and it explains why the betrayal in these cases is
      felt as a betrayal rather than as a suboptimal allocation. Its exposure is
      that the future patients exist too, in the same numbers as the model says,
      and that a morality operating only where there is a relationship will
      always be arguing on behalf of whoever happens to be present.
    base_rate: null
---

## What it means

"Government House utilitarianism" is Bernard Williams's name for a family of positions in
which the truth of utilitarianism is known and applied by some people while others are
encouraged to go on with a different, simpler morality — for their own good, and for the
good of the whole.

Williams's critique of indirect utilitarianism dates from his contribution to
*Utilitarianism: For and Against* (1973); the phrase itself appears in his introduction to
*Utilitarianism and Beyond*, edited with Amartya Sen in 1982, and recurs in *Ethics and
the Limits of Philosophy* (1985). The image is deliberate and unkind: the colonial
administrator in Government House, reasoning as a sophisticated utilitarian about the
welfare of the governed, while encouraging those he governs to retain the traditional
moral outlook that makes them easier to govern and, in his estimation, happier.

The position is not Williams's invention. It is Sidgwick's, stated with characteristic
composure in the closing pages of *The Methods of Ethics* (1874, book IV chapter 5). If
utilitarianism is true, Sidgwick reasons, then whether to promulgate it is itself a
utilitarian question — and the answer may be no. "Thus, on Utilitarian principles, it may
be right to do and privately recommend, under certain circumstances, what it would not be
right to advocate openly; it may be right to teach openly to one set of persons what it
would be wrong to teach to others." He goes further: a utilitarian "may reasonably desire,
on Utilitarian principles, that some of his conclusions should be rejected by mankind
generally", and concludes that "it seems expedient that the doctrine that esoteric morality
is expedient should itself be kept esoteric". The doctrine recommends its own concealment.

The term is pejorative, but the structure it names is not confined to colonial
administration or to utilitarianism. Any view on which the correct theory of right action
is one that agents are better off not consulting has the same shape — including R. M.
Hare's two-level theory, and any "sophisticated consequentialism" that recommends
dispositions rather than calculations.

## What it suggests

The defence is straightforward and it is not stupid. Whether a doctrine is true and
whether teaching it produces good results are two different questions, and there is no
guarantee they have the same answer. Nuclear physics is true; a policy of teaching weapons
design in schools would not thereby be justified. If moral theories are like this — if
believing the correct theory makes ordinary people worse at acting on it, because they
will misapply it in their own favour — then the utilitarian has a straightforwardly
utilitarian reason to be discreet. Katarzyna de Lazari-Radek and Peter Singer defend
exactly this in "Secrecy in Consequentialism" (2010), arguing that the objections to
esoteric morality are mostly an unexamined preference for transparency rather than an
argument against it.

The objections are three, and they are of quite different kinds.

The first is **epistemic**. The person deciding what others can be told is the person with
the strongest interest in the answer being "not much", and the least capacity to notice.
Every institution that has taken this road has believed its case was the exceptional one.
The judgement required is exactly the judgement the doctrine has just declared unreliable
in everyone else.

The second is about **publicity**, and it is the most precise. Rawls builds into his
account of justice a publicity condition: principles of justice must be capable of being
publicly known, taught and accepted by those they bind. A principle whose operation
depends on its being concealed from those it governs is not doing the work moral
principles do — it is doing the work of a technique. On this view esoteric morality is not
a morality with an unusual distribution; it is a management strategy that has borrowed the
vocabulary.

The third is Williams's own, and it is not about consequences at all. It is about what the
arrangement expresses and what it makes of the people in it. A theory that divides the
world into those fit to know and those to be managed has taken a position on human beings
before it has said anything about right action. Williams thought this was visible in the
theory's tone as much as in its content — the confidence that other people's moral lives
are a problem to be handled.

The honest reply from the other side is that all moral education is like this in some
degree. Nobody teaches a four-year-old the qualifications. Parents, doctors, pilots and
central bankers all routinely simplify for people who would be worse off with the full
picture, and the objection cannot be that this is never permissible. The question is what
constrains it — and the uncomfortable feature of Sidgwick's version is that the only thing
constraining it is the judgement of whoever is already inside Government House.

## The problem

Reem is the head of communications for a national medicines regulator.

A safety signal has appeared for a widely used vaccine. The current estimate is one serious
adverse event per 180,000 doses, with a confidence interval she describes privately as
"embarrassing" — the true rate could be twice that or a third of it, and it will be nine
months before anyone knows.

The vaccine prevents, on the same evidence, roughly two thousand deaths a year in this
country.

Her modelling team has done what they always do and it is unambiguous. A statement that
leads with the uncertainty produces a projected 19-point drop in uptake and, using the
regulator's own standard method, somewhere over four hundred additional deaths in the first
year. A statement that leads with the benefit, mentions the signal accurately in the fourth
paragraph, and does not publish the interval, produces almost no drop. Neither statement
contains a false sentence.

Three other things are true.

The interval will leak within a year, because these things do.

The last director who managed a message this way is the reason Reem's own audience is
already sceptical, and Reem has spent four years repairing it.

And her deputy, who is twenty-nine and has been on the team for six months, asked her at
the end of the meeting — not rhetorically, genuinely — how you tell the difference between
this and the thing they both agree the last director did wrong.

Reem has an answer. She has noticed that it is the same answer he had.

## The questions

**1. The public health message.** Both versions are consistent with the evidence; only one
is honest about the uncertainty, and it costs lives.

- Simplify. The accurate message predictably kills more people.
- Publish the uncertainty; a managed public stops believing any message.
- Publish it because they are entitled to it — their risk, their bodies.
- Publish it because of what an agency becomes once it rations truth.

**2. Sidgwick's esoteric morality.** It may be right to do and privately recommend what it
would be wrong to advocate openly.

- Coherent and correct; truth and usefulness are separate questions.
- Not coherent as morality; a reason that cannot be offered is not a reason.
- Coherent, and that is the objection — it describes a caste and a managed public.
- The test is whether those kept in the dark could agree, and they cannot.

**3. The interim result.** Telling them ends the trial; not telling them uses them.

- Withhold, disclose at the end, accept the criticism.
- Tell them. They lent you their bodies on terms.
- Tell them; a system caught doing this loses more than this trial could save.
- Tell them, because these people trusted you and "future patients" has never trusted
  anyone.

**4. The name.** Williams named it after colonial administrators; a defender says the
elitism is incidental.

- The defender is right; the structure appears wherever expertise is uneven.
- The name is the argument.
- The decisive point is publicity: principles must be knowable by those they bind.
- The real objection is what it does to the administrators.

## Reading your answer

**Judge the Doctrine By Its Effects.** You keep the truth of a theory apart from the
consequences of promulgating it, which is the consistent utilitarian position and the one
Sidgwick actually held. The problem is not that the reasoning is invalid; it is that you
cannot apply it to your own case from outside. Everyone who has taken this route believed
theirs was the exception, and the retrospective record of those judgements is the strongest
evidence against the practice.

**The Information Is Not Yours.** You hold that the truth about someone's own risk belongs
to them, whatever they do with it. This gets the trial right without any forecast, which
matters, because the forecast is exactly what the person minded to withhold is worst at
making honestly. Your bill is the case where honesty kills, and you have to be willing to
pay it in public.

**Principles That Can Be Published.** You apply the publicity test, which is the sharpest
formulation of the objection: a principle whose operation depends on concealment from those
it governs is not functioning as a principle. Where it costs you is genuine emergency and
genuine asymmetry of expertise, where explaining in time is not possible and your rule
still forbids the simplification.

**What It Does to the Keeper.** You are watching the administrators rather than the
administered, which is where Williams was actually looking. It explains why the practice
does not stay inside the emergency that licensed it. Its weakness is that it cannot be
checked in the moment: a person corrupted in this particular way is the last one able to
detect it, which is also the reason the objection is worth stating.

**Who Gets to Know.** You read the doctrine through who has historically been trusted with
it, and Williams's name is doing work for you rather than decoration. The history supports
you. What you lack is a principle that survives the reply "then let better people hold it" —
and you will need one, because that reply is always available.

**The People In Front of You.** You answer from the relationship, and the asymmetry you
identify is real: the participants trusted you personally, and the aggregate never trusted
anyone. It also means you will consistently find yourself arguing for whoever is in the
room, and the four hundred additional deaths in Reem's model are people too.

## Sources

- Henry Sidgwick, *The Methods of Ethics*, Macmillan (1874; 7th edition 1907), book IV
  chapter 5 — esoteric morality and the doctrine that its own expediency be kept esoteric.
- Bernard Williams, "A Critique of Utilitarianism", in Smart and Williams, *Utilitarianism:
  For and Against*, Cambridge University Press (1973) — the critique of indirect
  utilitarianism from which the objection grows.
- Bernard Williams, introduction to Amartya Sen and Bernard Williams (eds.),
  *Utilitarianism and Beyond*, Cambridge University Press (1982) — where the phrase
  "Government House utilitarianism" is coined.
- Bernard Williams, *Ethics and the Limits of Philosophy*, Fontana (1985) — the developed
  objection.
- Katarzyna de Lazari-Radek and Peter Singer, "Secrecy in Consequentialism: A Defence of
  Esoteric Morality", *Ratio* 23(1) (2010), 34–59 — the strongest modern defence.
- John Rawls, *A Theory of Justice*, Harvard University Press (1971), §23 — the publicity
  condition.
