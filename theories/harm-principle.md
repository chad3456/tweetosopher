---
id: harm-principle
title: The Harm Principle
category: principle
tradition: liberalism
philosophers:
  - John Stuart Mill
era: "1859"
tags: [liberty, paternalism, law, offence, self-regarding, consent]
sources:
  - author: John Stuart Mill
    title: On Liberty
    published: "John W. Parker and Son, London"
    year: 1859
  - author: James Fitzjames Stephen
    title: "Liberty, Equality, Fraternity"
    published: "Smith, Elder & Co., London"
    year: 1873
  - author: Patrick Devlin
    title: The Enforcement of Morals
    published: Oxford University Press
    year: 1965
  - author: H. L. A. Hart
    title: "Law, Liberty and Morality"
    published: Stanford University Press
    year: 1963
  - author: Joel Feinberg
    title: "The Moral Limits of the Criminal Law, vol. 1: Harm to Others"
    published: Oxford University Press
    year: 1984
questions:
  - id: q1
    prompt: >-
      A colleague you like has started drinking heavily in the evenings. It has
      not yet affected his work, he has no children, and he tells you plainly
      that it is his life and he is not asking for advice. Occupational health
      would act if you reported it, and he would probably keep his job.
    options:
      - id: a
        label: >-
          Say nothing to the employer. Over himself, over his own body and mind,
          he is sovereign, and your concern does not convert into authority.
        scores: { deontological: 0.8, authority: 0.5, scope: -0.3 }
      - id: b
        label: >-
          Report it. Sovereignty over yourself is a fine principle for people who
          are not currently being run by a substance.
        scores: { consequentialist: 0.9, care: 0.5, authority: -0.4 }
      - id: c
        label: >-
          Do not report, but do not leave him alone either. Persuasion,
          remonstrance and staying close are exactly what Mill leaves open.
        scores: { care: 1.0, virtue: 0.5 }
      - id: d
        label: >-
          Report it, because "it affects no one else" is almost never true. You
          are already affected, and so is everyone who will pick up his work.
        scores: { consequentialist: 0.8, contractarian: 0.4, scope: 0.5 }
  - id: q2
    prompt: >-
      A town wants to ban a legal but widely detested activity in a private club
      — nothing leaves the building, all participants consent, but a majority of
      residents find the knowledge that it happens genuinely distressing.
    options:
      - id: a
        label: >-
          No ban. Distress at what consenting adults do behind a door is not
          harm, and treating it as harm gives every majority a veto.
        scores: { deontological: 0.9, contractarian: 0.4, certainty: 0.6 }
      - id: b
        label: >-
          Ban it. A community is partly constituted by what it will not tolerate,
          and pretending otherwise dissolves the thing that makes it a community.
        scores: { relativist: 0.8, virtue: 0.4, authority: -0.6 }
      - id: c
        label: >-
          No ban, but for practical reasons: bans on private conduct fail, drive
          it underground, and cost more than the distress they relieve.
        scores: { consequentialist: 1.0, certainty: -0.3 }
      - id: d
        label: >-
          It depends what it is. Some things really do coarsen the people around
          them, and "consenting adults" cannot be the end of every sentence.
        scores: { virtue: 0.9, relativist: 0.3, affect: 0.5 }
  - id: q3
    prompt: >-
      Mill argued against a law forbidding a man from crossing an unsafe bridge —
      warn him, he says, but do not restrain him, unless there is no time to warn.
      A government proposes mandatory helmets, seatbelts and a ban on the sale of
      a supplement that kills roughly forty people a year, all users adults.
    options:
      - id: a
        label: >-
          All three are justified. Deaths prevented are deaths prevented, and the
          liberty being defended here is the liberty to be badly informed.
        scores: { consequentialist: 1.0, authority: -0.5, scope: 0.4 }
      - id: b
        label: >-
          None is justified against a competent adult who knows the risk. Warn,
          label, tax if you must — but the decision stays with the person.
        scores: { deontological: 0.9, authority: 0.7 }
      - id: c
        label: >-
          Seatbelts and helmets yes, the ban no. Requiring a precaution leaves the
          activity open; prohibiting the substance removes the choice entirely.
        scores: { contractarian: 0.8, consequentialist: 0.5, certainty: -0.4 }
      - id: d
        label: >-
          Justified because the costs are never really private — the ambulance,
          the ward, the family, and everyone whose insurance pays for it.
        scores: { consequentialist: 0.8, contractarian: 0.6, scope: 0.4 }
  - id: q4
    prompt: >-
      Mill exempted children, and also what he called "backward states of
      society", where he thought despotism a legitimate mode of government. A
      reader points out that the same book that defends liberty absolutely at
      home defends withholding it abroad.
    options:
      - id: a
        label: >-
          The exception is a defect in Mill, not in the principle. Excise it and
          the argument stands, stronger for the loss.
        scores: { deontological: 0.8, scope: 0.8 }
      - id: b
        label: >-
          The exception shows what the principle was for. Liberty was extended to
          those already judged fit for it, which is not a neutral standard.
        scores: { relativist: 0.9, nihilist: 0.3, certainty: -0.4 }
      - id: c
        label: >-
          Some version of the exception is unavoidable. Children, the very ill
          and the incapacitated cannot be left sovereign, and drawing that line
          is a judgement someone has to make.
        scores: { consequentialist: 0.7, care: 0.6, authority: -0.4 }
      - id: d
        label: >-
          Judge Mill by whether he practised it, not by whether he wrote it. He
          took the wage of the East India Company for thirty-five years.
        scores: { virtue: 0.9, relativist: 0.3, affect: 0.5 }
outcomes:
  - id: the-sovereign-self
    dominant: deontological
    label: Sovereign Over Himself
    text: >-
      You hold that a competent adult's authority over their own life is not
      defeated by the fact that others could improve it. That is the cleanest
      line anyone has drawn against the accumulated small tyrannies of well-meant
      intervention, and it does not require you to think the choices are good
      ones. What it costs you is the cases where the person is competent in the
      legal sense and plainly not in charge — the addiction, the coercive
      relationship, the depressive refusal — where "his own to decide" is true
      and also the least useful thing anyone could say.
    base_rate: null
  - id: the-effects
    dominant: consequentialist
    label: Nothing Is Purely Self-Regarding
    text: >-
      You suspect the line between self-regarding and other-regarding conduct of
      being drawn wherever the arguer needs it. Almost every private ruin lands
      on someone: a family, a ward, a colleague, a shared insurance pool. That
      observation is correct and it is the standard objection — James Fitzjames
      Stephen made it in 1873 and it has never been answered cleanly. Its danger
      is that it proves too much. If any effect on anyone counts as harm, then
      nothing is protected, and the principle you have refuted was the only thing
      standing between a majority and whatever it disapproves of.
    base_rate: null
  - id: the-terms
    dominant: contractarian
    label: What Was Agreed To
    text: >-
      You look for what people could accept as terms of common life: precautions
      that leave the activity open, costs borne by those who impose them, rules
      whose reach is bounded by what everyone signed up to. This handles the
      insurance-pool cases without licensing a general power to improve people,
      and it explains the seatbelt-but-not-prohibition intuition better than
      either pure liberty or pure harm-counting does. Where it thins is with
      whoever was not party to the terms — the very poor, the very young, and
      anyone whose agreement is available cheaply enough to be worthless.
    base_rate: null
  - id: the-shared-life
    dominant: virtue
    label: A Community Is Made of Its Refusals
    text: >-
      You think a community is partly constituted by what it will not have in
      it, and that "consenting adults" is where an argument gets difficult rather
      than where it ends. Patrick Devlin made this case seriously in 1965 and it
      is not a case that has been disposed of, only outvoted. The bill is
      historical: the record of what communities have refused to tolerate is
      mostly a record of harmless minorities, and your view supplies no internal
      brake — Hart's reply was precisely that you cannot get from "we are
      disgusted" to "this may be forbidden" without one.
    base_rate: null
  - id: the-particular-person
    dominant: care
    label: Stay Close, Do Not Report
    text: >-
      You take the third path Mill actually leaves open — remonstrance,
      persuasion, presence — and refuse both the report and the shrug. This is
      probably the most accurate description of how people actually help each
      other, and Mill would recognise it as his own position rather than a
      compromise with it. Its exposure is time. Staying close works when there is
      time, and the cases that force the question are the ones where there is
      not.
    base_rate: null
  - id: the-selective-liberty
    dominant: relativist
    label: Liberty For Whom
    text: >-
      You read the exceptions as revealing rather than incidental — that the book
      defending liberty absolutely for Englishmen also defended withholding it
      elsewhere, and that this tells you what kind of principle it was. The
      textual case is solid; the exception is in Mill's first chapter, not
      smuggled in by hostile readers. What follows is the harder part. If the
      principle is only ever a local settlement about who counts as competent,
      you have no ground left to object when the next settlement counts you out.
    base_rate: null
---

## What it means

*On Liberty* (1859) states its object in the first chapter and does not equivocate:

"The sole end for which mankind are warranted, individually or collectively, in
interfering with the liberty of action of any of their number, is self-protection. That
the only purpose for which power can be rightfully exercised over any member of a
civilised community, against his will, is to prevent harm to others. His own good, either
physical or moral, is not a sufficient warrant."

The scope of the claim is wider than law. Mill is as concerned with what he calls the
"moral coercion of public opinion" as with the statute book — the tyranny of the
prevailing feeling, which "leaves fewer means of escape, penetrating much more deeply into
the details of life". A society can be perfectly free in its laws and thoroughly
unfree in its conduct.

Three features are usually missed. First, the principle rules out two grounds at once:
**paternalism** (your own good) and **moralism** (the good of your soul, or the moral
tone of the community). Second, it does not rule out everything except punishment. Mill
explicitly permits "remonstrating with him, or reasoning with him, or persuading him, or
entreating him" — what it forbids is compulsion and penalty. Third, the principle has
express exclusions. It applies "only to human beings in the maturity of their faculties",
not to children — and, in a passage his admirers tend to hurry past, not to "those backward
states of society in which the race itself may be considered as in its nonage", where Mill
holds despotism a legitimate mode of government if the end is improvement. He wrote this
while employed by the East India Company, where he worked for thirty-five years.

The load-bearing distinction is between conduct that concerns only the agent and conduct
that affects others. Mill knows the objection coming — that no man is an island, that
private ruin injures family and friends — and answers it by distinguishing between harms
proper and mere distress or disapproval, and between duties a person actually owes and
disappointment felt by those around them.

## What it suggests

Adopted seriously, the principle disposes of a great deal of law and a great deal of
ordinary moral pressure. Consensual conduct between adults becomes nobody's business.
Blasphemy, obscenity and public-decency offences lose their footing except where a
concrete harm can be produced. Drug prohibition has to be argued on harm-to-others
grounds, not harm-to-self. And, less comfortably for its usual champions, so does much
regulation people like: mandatory helmets, seatbelts, and bans on dangerous products
bought knowingly by adults all sit on the wrong side of the line unless a third party's
injury can be shown.

The principle also imposes a discipline on how objections must be phrased. "It disgusts
me" is not an argument. If you want a thing forbidden you must name the person harmed and
the harm, and this requirement alone has done more work in liberal jurisprudence than any
other single sentence in nineteenth-century philosophy.

The objections are serious and they come from two directions.

James Fitzjames Stephen, in *Liberty, Equality, Fraternity* (1873), attacked the
distinction itself. Self-regarding conduct, he argued, is a category with almost nothing in
it: character is formed socially, vice spreads by example, and a man's ruin is never
confined to him. If that is right, the principle does not restrict interference — it merely
requires that interference be described in the vocabulary of harm, which any competent
advocate can do.

Patrick Devlin, in *The Enforcement of Morals* (1965), attacked it from the other side.
A society, he argued, is held together by a shared morality as much as by a government, and
is entitled to defend that morality against practices that would dissolve it, using the
criminal law if necessary. H. L. A. Hart's reply in *Law, Liberty and Morality* (1963) was
that Devlin had produced no evidence that toleration disintegrates societies, and that
disgust — however widely shared — is not a demonstration of harm.

Joel Feinberg's four-volume *The Moral Limits of the Criminal Law* (from 1984) is the most
serious modern attempt to rescue the principle by making "harm" precise, defining it as a
setback to interest that is also a wrong. Feinberg concluded that the harm principle alone
cannot do all the work, and that a separate and carefully bounded offence principle is
needed for public conduct — which is a repair, and also a concession.

## The problem

Yusuf is a GP in a small town. Ellen has been his patient for twenty years.

She is sixty-eight, widowed, and has recently sold her house to fund what she describes, in
the surgery, in detail, as a plan: a clinic in another country offering an unproven
treatment for a condition she does not have, sold to her by a man she has met three times.
Yusuf has read the material. It is a fraud. He is certain, and he has said so, twice.

Ellen is not cognitively impaired. Two assessments confirm it. She understands the risk,
she understands he thinks it is a fraud, and she has told him — pleasantly, and with the
same clarity she has always had — that she is aware he disapproves, that she has thought
about it for a year, and that she would like him to stop.

There are three other things.

Her son is asking Yusuf to declare her incapable. He would inherit the money.

The treatment carries a real chance of leaving her needing full-time care, which will fall
on the local authority and on the son, and Yusuf will be the one signing that too.

And Yusuf has noticed that his certainty has a shape to it: he was equally certain, in
2003, about a different patient, who was right.

Mill's principle tells him he may reason, remonstrate and entreat, and may not compel.
He has reasoned. She has answered. What he actually has in front of him is the question of
whether the line between advising and overriding is one he believes in, or one he holds
until it costs him a patient he is fond of.

## The questions

**1. The colleague who drinks.** Work is unaffected, no children, and he has asked you to
leave it. Reporting would trigger occupational health.

- Say nothing to the employer. He is sovereign over himself.
- Report it. Sovereignty is a fine principle for people not being run by a substance.
- Do not report, but stay close. Remonstrance is exactly what Mill leaves open.
- Report it — "it affects nobody else" is almost never true.

**2. The private club.** Consenting adults, nothing leaves the building, and a majority of
residents are genuinely distressed to know it happens.

- No ban. Distress at private conduct is not harm.
- Ban it. A community is partly constituted by what it will not tolerate.
- No ban, for practical reasons: such bans fail and cost more than they relieve.
- It depends what it is. "Consenting adults" cannot end every sentence.

**3. Helmets, seatbelts, and the supplement.** All users adults, all risks known.

- All justified. The liberty defended here is the liberty to be badly informed.
- None justified against a competent adult. Warn, label, tax — do not compel.
- Precautions yes, prohibition no: one leaves the choice open, the other removes it.
- Justified, because the costs are never private.

**4. The exception in the first chapter.** Liberty for the mature; despotism permissible
for "backward states of society".

- A defect in Mill, not the principle. Excise it and the argument stands.
- It shows what the principle was for — liberty extended to those already judged fit.
- Some version of the exception is unavoidable; someone must draw the line.
- Judge him by whether he practised it. He took the Company's wage for thirty-five years.

## Reading your answer

**Sovereign Over Himself.** You hold the line at competence and refuse to let good
intentions convert into authority. This is the strongest available defence against the
accumulation of small, well-meant coercions, and it does not require you to approve of
anything. It bills you where competence is technically present and plainly not in charge —
addiction, coercion, depression — and there "it is his to decide" is both true and the
least useful sentence available.

**Nothing Is Purely Self-Regarding.** You doubt the distinction, and Stephen's objection is
yours: harm leaks, and the line gets drawn wherever the arguer needs it. That is a real
hit. Watch where it lands. If any effect on anyone qualifies, the principle protects
nothing at all, and the majority in question two gets its ban after all — on the argument
you supplied.

**What Was Agreed To.** You bound interference by terms people could accept, which lets you
regulate shared costs without acquiring a general licence to improve people. It explains the
seatbelt-yes-prohibition-no intuition better than either pure liberty or pure harm-counting.
It thins wherever agreement was not really available: the poor, the young, and anyone whose
consent can be bought at a price that makes it meaningless.

**A Community Is Made of Its Refusals.** You take Devlin's side, and it deserves a hearing
rather than a sneer. The historical bill is heavy: the record of what communities have
refused to tolerate is mostly a record of minorities who were harming nobody, and your view
contains no brake of its own. Hart's challenge is the one to answer — how do you get from
shared disgust to permissible prohibition without one?

**Stay Close, Do Not Report.** You take the option Mill actually leaves open and most
readers forget: neither compulsion nor indifference, but presence. That is how people
mostly do help each other, and it is Mill's own position rather than a softening of it.
Time is where it fails, and the cases that force the question are precisely the ones
without time.

**Liberty For Whom.** You read the exception as diagnostic. Textually you are on firm
ground — it is in the first chapter, in Mill's own hand. What you have to carry is the
consequence: if the principle is only ever a local settlement about who counts as
competent, then it offers you nothing when a later settlement decides you do not.

## Sources

- John Stuart Mill, *On Liberty*, John W. Parker and Son (1859) — chapter 1 for the
  principle, its exceptions, and the "moral coercion of public opinion"; chapter 5 for the
  applications, including the unsafe bridge.
- James Fitzjames Stephen, *Liberty, Equality, Fraternity*, Smith, Elder & Co. (1873) — the
  attack on the self-regarding category.
- Patrick Devlin, *The Enforcement of Morals*, Oxford University Press (1965) — the case
  for a society's right to enforce a shared morality.
- H. L. A. Hart, *Law, Liberty and Morality*, Stanford University Press (1963) — the reply
  to Devlin.
- Joel Feinberg, *The Moral Limits of the Criminal Law*, vol. 1: *Harm to Others*, Oxford
  University Press (1984) — the most careful modern attempt to define the harm at issue.
