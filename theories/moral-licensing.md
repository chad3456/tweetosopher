---
id: moral-licensing
title: Moral Licensing
category: term
tradition: moral-psychology
philosophers:
  - Benoît Monin
  - Dale Miller
era: "2001"
tags: [self-image, hypocrisy, credentials, replication, moral-psychology, consistency]
sources:
  - author: Benoît Monin, Dale T. Miller
    title: "Moral credentials and the expression of prejudice"
    published: "Journal of Personality and Social Psychology 81(1), 33–43"
    year: 2001
  - author: Sonya Sachdeva, Rumen Iliev, Douglas L. Medin
    title: "Sinning saints and saintly sinners - the paradox of moral self-regulation"
    published: "Psychological Science 20(4), 523–528"
    year: 2009
  - author: Anna C. Merritt, Daniel A. Effron, Benoît Monin
    title: "Moral self-licensing - when being good frees us to be bad"
    published: "Social and Personality Psychology Compass 4(5), 344–357"
    year: 2010
  - author: Irene Blanken, Niels van de Ven, Marcel Zeelenberg
    title: "A meta-analytic review of moral licensing"
    published: "Personality and Social Psychology Bulletin 41(4), 540–558"
    year: 2015
  - author: Irene Blanken, Niels van de Ven, Marcel Zeelenberg, Marijn H. C. Meijers
    title: "Three attempts to replicate the moral licensing effect"
    published: "Social Psychology 45(3), 232–238"
    year: 2014
questions:
  - id: q1
    prompt: >-
      A colleague who has spent fifteen years on diversity work in your organisation makes
      an appointment that everyone in the room thinks is indefensible, and says, when
      challenged, that of all people he does not need to prove himself on this.
    options:
      - id: a
        label: >-
          His record is not a defence. Each decision is answerable on its own terms, and a
          history of good ones does not buy a bad one.
        scores: { deontological: 1.0, certainty: 0.7, agency: 0.4 }
      - id: b
        label: >-
          His record is genuine evidence about how to read this decision. Discounting a
          lifetime of conduct because of one bad-looking case is its own error.
        scores: { virtue: 1.0, care: 0.4, affect: 0.5 }
      - id: c
        label: >-
          What matters is who did not get the job. The harm is the same whoever made the
          appointment and whatever he has done previously.
        scores: { consequentialist: 1.0, scope: 0.6, affect: -0.6 }
      - id: d
        label: >-
          Which is why the decision should not have been his alone. Records are exactly what
          make people feel entitled to skip the process.
        scores: { contractarian: 1.0, deontological: 0.4, authority: -0.4 }
  - id: q2
    prompt: >-
      You notice in yourself that after a week of genuine generosity you are markedly
      quicker to excuse something small and mean — a curtness, a corner cut, a donation
      not made — as though you had built up a balance.
    options:
      - id: a
        label: >-
          Then stop keeping the balance. Moral life is not an account, and the sense of
          having earned something is the beginning of most of the trouble.
        scores: { virtue: 1.0, deontological: 0.4, certainty: 0.4 }
      - id: b
        label: >-
          Then use it. If people can be induced to do good by letting them feel good, the
          ledger is a tool, and the outcomes are what you are trying to move.
        scores: { consequentialist: 1.0, egoist: 0.4, affect: -0.5 }
      - id: c
        label: >-
          Then build commitments that do not consult how you feel — standing orders,
          rotas, rules — so that the balance never gets a vote.
        scores: { contractarian: 0.9, deontological: 0.5, certainty: 0.3 }
      - id: d
        label: >-
          Then accept it. Nobody sustains constant effort, and a week of generosity followed
          by a bad Tuesday is a human being rather than a hypocrite.
        scores: { egoist: 0.8, relativist: 0.4, affect: 0.6 }
  - id: q3
    prompt: >-
      Monin and Miller reported that people who had first disagreed with blatantly sexist
      statements were afterwards more willing to say a job was better suited to a man.
      Direct replication attempts have since failed, and the meta-analytic effect is small.
    options:
      - id: a
        label: >-
          Then hold the finding loosely and stop using it to explain your own behaviour.
          An effect this fragile cannot bear the weight popular writing puts on it.
        scores: { consequentialist: 0.9, certainty: -0.8, affect: -0.5 }
      - id: b
        label: >-
          The mechanism is recognisable from the inside whatever the effect sizes do. You
          have watched yourself do it, and that is not nothing.
        scores: { virtue: 0.9, relativist: 0.4, affect: 0.9 }
      - id: c
        label: >-
          The lesson is about the discipline, not the phenomenon. Build practices that do
          not depend on which way the literature settles.
        scores: { contractarian: 1.0, consequentialist: 0.4, certainty: -0.4 }
      - id: d
        label: >-
          It does not matter either way. Whether people in fact license themselves has no
          bearing on whether the licence is any good.
        scores: { deontological: 1.0, certainty: 0.8, affect: -0.4 }
  - id: q4
    prompt: >-
      A company publicises a large environmental commitment and then, quietly, lobbies
      against a regulation that would cost it more. Suppose the commitment is real and
      the lobbying is real.
    options:
      - id: a
        label: >-
          Judge the net effect. If the commitment does more good than the lobbying does
          harm, the company is on balance an improvement, and balance is what there is.
        scores: { consequentialist: 1.0, scope: 0.7, affect: -0.7 }
      - id: b
        label: >-
          The publicity is the problem. Visible good works purchase the licence to do the
          rest out of sight, and that trade should be named every time.
        scores: { deontological: 0.9, virtue: 0.5, certainty: 0.5 }
      - id: c
        label: >-
          Firms are not people and do not have consciences to license. Expecting
          consistency of a legal structure is a category error.
        scores: { egoist: 0.8, relativist: 0.4, certainty: 0.4 }
      - id: d
        label: >-
          Which is why voluntary commitments should never be accepted in place of rules.
          The credential and the exemption arrive in the same envelope.
        scores: { contractarian: 1.0, consequentialist: 0.4, authority: -0.5 }
outcomes:
  - id: no-account
    dominant: virtue
    label: There Is No Account
    text: >-
      You refuse the ledger. Good conduct does not accumulate into a balance that can be
      drawn down, and the feeling of having earned something is where most people's
      self-deception starts. This is the classical view of character — a disposition you
      either have or are building, not a store of credit — and it is proof against the whole
      licensing move. Its cost is severity. It gives no account of ordinary human unevenness,
      and it makes a person's fifteen good years count for nothing on the day they are
      needed as evidence.
    base_rate: null
  - id: the-net
    dominant: consequentialist
    label: Count the Net
    text: >-
      Your attention is on what happened rather than on the coherence of the person who did
      it, so a mixed record is simply a sum, and a licensed lapse counts exactly as much as
      an unlicensed one — no more, no less. That keeps you from moralising about hypocrisy
      when the hypocrite is on net doing good. What it costs is any grip on the mechanism.
      If publicised virtue reliably buys concealed vice, the sum you are computing is being
      manipulated by the people you are computing it about.
    base_rate: null
  - id: each-act
    dominant: deontological
    label: Each Act Answers for Itself
    text: >-
      You hold that a record is not a defence and a credential is not an exemption, so the
      question in front of you is only whether this act was permissible. Nothing licenses.
      This is clean, it cannot be gamed by reputation, and it is the standard any tribunal
      has to use. What it asks you to give up is the evidential value of a life, which in
      practice is often the best information available about what someone was doing and why.
    base_rate: null
  - id: the-structure
    dominant: contractarian
    label: Take It Out of the Conscience
    text: >-
      You draw the institutional lesson rather than the personal one. If self-image can
      quietly purchase exemptions, then decisions should not rest on any individual's sense
      of their own standing — put them in rotas, panels, standing rules and enforceable
      commitments, so nobody's credentials get a vote. This is robust to how the psychology
      literature eventually settles, which is a real advantage here. Its limit is that
      someone has to build and maintain the structure, and they will do it out of exactly
      the self-assessment you have declined to trust.
    base_rate: null
  - id: the-human
    dominant: egoist
    label: Nobody Sustains It
    text: >-
      You think the demand for constant consistency is the artificial thing, and that a
      person who does well for a week and badly on a Tuesday is not a hypocrite but a
      person. There is honesty in this, and it protects you from the peculiar cruelty
      reserved for people who nearly live up to their stated values. What it does not give
      you is a stopping point: the same reasoning excuses the second Tuesday and the third,
      and you will need something outside the mood to tell you when the allowance has become
      the pattern.
    base_rate: null
---

## What it means

**Moral licensing** is the proposed effect by which doing something good, or merely
establishing to yourself that you are a good sort of person, makes you subsequently more
willing to do something bad — as though the first act had purchased a credit against which
the second could be drawn.

The founding study is Benoît Monin and Dale Miller's "Moral credentials and the expression
of prejudice", published in the *Journal of Personality and Social Psychology* in 2001.
Participants first had an opportunity to disagree with blatantly sexist statements, or to
select a strong minority candidate for a job. Having done so — having, in the authors'
term, established their **moral credentials** — they were afterwards more willing to say
that a stereotypically male job would be better suited to a man, or to favour a white
candidate. Monin and Miller's interpretation was not that the participants had become more
prejudiced. It was that the earlier act had removed the worry that a later choice might
look prejudiced, freeing them to answer on other grounds.

Sonya Sachdeva, Rumen Iliev and Douglas Medin extended this in 2009 with a study they
titled "Sinning saints and saintly sinners", reporting that participants asked to write
about themselves using positive trait words afterwards donated less to charity than those
who wrote using negative trait words. Their model was **moral self-regulation**: people
hold an internal sense of moral adequacy around a set point, and both fall below and rise
above it, correcting in whichever direction restores the level. On that picture, licensing
and its mirror image — compensating for a lapse by doing something generous — are one
mechanism.

Merritt, Effron and Monin's 2010 review distinguished two versions. On the **credentials**
account, the earlier good act changes how the later ambiguous act is interpreted: it is no
longer evidence of prejudice, so you feel free to make it. On the **credits** account, the
earlier act buys a balance that the later one spends. These make different predictions and
have not been decisively separated.

## What it suggests

If the effect is real and large, its implications are awkward for a great deal of
well-meaning practice. Publicising a good deed would be self-undermining. Diversity
training might, in some conditions, license the trained. Buying the organic option might
make you slightly worse at the next choice. Above all, the people most confident of their
own moral standing would be the people least reliably restrained by it.

The honest position is that the effect is **contested**, and the state of the evidence
should be reported alongside the finding.

Irene Blanken, Niels van de Ven, Marcel Zeelenberg and Marijn Meijers published three
direct replication attempts in *Social Psychology* in 2014 and did not find the effect. The
same team's 2015 meta-analysis in *Personality and Social Psychology Bulletin* pooled the
published literature and found a small to medium effect overall, while flagging that the
literature shows the signs associated with publication bias and that the effect varies a
great deal by paradigm. Moral licensing is not a debunked finding in the way some
well-known social psychology results now are. Nor is it a settled one. It is a plausible
mechanism, with a modest and unstable empirical base, that has been repeated in popular
writing with a confidence the studies do not support.

That leaves a philosophical question the empirical dispute does not touch. Suppose people
do license themselves. It does not follow that the licence is valid. A record of good
conduct might be genuine evidence about a person's motives — juries and referees treat it
that way — or it might be irrelevant to whether this act, now, is permissible. The
psychology tells you that credentials feel like they license. It cannot tell you whether
they do.

## The problem

You are one of five trustees of a small charity, and the vote is on Thursday.

The chief executive has run the organisation for nine years. She took it over when it had
four staff and a deficit; it now has thirty-one and reserves. Two years ago she took a pay
cut to keep a project running and did not mention it to anyone until an auditor found it.
There is no one in the sector who does not speak well of her.

In March she dismissed a fundraiser three weeks before the woman's employment protections
would have taken effect. The paperwork is correct and the reason given is plausible. The
fundraiser's account, which you have read, is that she raised a concern about a donor in
February and was gone by the end of the month. There is no evidence beyond the sequence of
dates, and the CEO's response — delivered with real hurt — is that after nine years and
everything she has given up for this organisation, she should not have to answer this.

Two trustees find that response sufficient. One finds it disqualifying. You have realised
that you do not know whether her nine years are evidence about what happened in March, or
the reason nobody is asking properly.

## The questions

**1. The colleague with the record.** Fifteen years of diversity work, one indefensible
appointment, and "of all people I do not need to prove myself".

- His record is not a defence. Each decision is answerable on its own terms.
- His record is real evidence about how to read this decision.
- What matters is who did not get the job.
- Which is why the decision should not have been his alone.

**2. The balance you notice in yourself.** A generous week, then a quickness to excuse
something mean.

- Stop keeping the balance. Moral life is not an account.
- Use it. If letting people feel good gets good done, the ledger is a tool.
- Build commitments that do not consult how you feel.
- Accept it. Nobody sustains constant effort.

**3. The state of the evidence.** Direct replications have failed and the meta-analytic
effect is small.

- Hold the finding loosely and stop using it to explain yourself.
- The mechanism is recognisable from the inside whatever the effect sizes do.
- The lesson is about the discipline, not the phenomenon.
- It does not matter either way. Whether people license themselves is not whether the
  licence is good.

**4. The company.** A real environmental commitment, publicised; real lobbying against a
regulation, quiet.

- Judge the net effect. Balance is what there is.
- The publicity is the problem. Visible good buys the licence for the rest.
- Firms have no consciences to license. Expecting consistency of a legal structure is a
  category error.
- Which is why voluntary commitments should never be accepted in place of rules.

## Reading your answer

**There Is No Account.** You refuse the ledger entirely: conduct does not accumulate into
credit, and the sense of having earned something is where self-deception starts. This is
the classical view of character and it is immune to the licensing move. It is also severe.
It has nothing to say about ordinary unevenness, and it makes fifteen good years count for
nothing on the day they are the only evidence anyone has.

**Count the Net.** You attend to what happened rather than to the consistency of the person
who did it, which keeps you from moralising about hypocrisy when the hypocrite is on balance
doing good. The exposure is that if publicised virtue reliably buys concealed vice, the sum
you are computing is being managed by the people you are computing it about.

**Each Act Answers for Itself.** You will not let a record function as a defence. This
cannot be gamed by reputation and it is the standard any tribunal must apply. What you give
up is the evidential value of a life, which is very often the best information anyone has
about what a person was doing and why.

**Take It Out of the Conscience.** You draw the institutional lesson: put decisions in
panels, rotas and enforceable rules so that nobody's sense of their own standing gets a
vote. This is robust to however the psychology literature settles, which matters here.
Somebody still has to build the structure, and they will do it on exactly the self-assessment
you have declined to trust.

**Nobody Sustains It.** You think the demand for perfect consistency is the artificial
thing, and you decline to call a person a hypocrite for a bad Tuesday. That protects you
from a real and peculiar cruelty. It also has no stopping point — the same reasoning covers
the second Tuesday and the third — and you will need something outside your mood to tell
you when the allowance became the pattern.

## Sources

- Benoît Monin and Dale T. Miller, "Moral credentials and the expression of prejudice",
  *Journal of Personality and Social Psychology* 81(1) (2001), 33–43.
- Sonya Sachdeva, Rumen Iliev and Douglas L. Medin, "Sinning saints and saintly sinners:
  the paradox of moral self-regulation", *Psychological Science* 20(4) (2009), 523–528.
- Anna C. Merritt, Daniel A. Effron and Benoît Monin, "Moral self-licensing: when being good
  frees us to be bad", *Social and Personality Psychology Compass* 4(5) (2010), 344–357 —
  the credentials/credits distinction.
- Irene Blanken, Niels van de Ven, Marcel Zeelenberg and Marijn H. C. Meijers, "Three
  attempts to replicate the moral licensing effect", *Social Psychology* 45(3) (2014),
  232–238 — unsuccessful direct replications.
- Irene Blanken, Niels van de Ven and Marcel Zeelenberg, "A meta-analytic review of moral
  licensing", *Personality and Social Psychology Bulletin* 41(4) (2015), 540–558 — a small
  to medium pooled effect, with publication bias flagged. Consult it directly for the
  effect size, which is not reproduced here.
