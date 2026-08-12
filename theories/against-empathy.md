---
id: against-empathy
title: Against Empathy
category: theory
tradition: moral-psychology
philosophers:
  - Paul Bloom
era: "2016"
tags: [empathy, compassion, identifiable-victim, moral-psychology, impartiality]
sources:
  - author: Paul Bloom
    title: Against Empathy - The Case for Rational Compassion
    published: Ecco / HarperCollins
    year: 2016
  - author: Paul Bloom
    title: "Empathy and Its Discontents"
    published: "Trends in Cognitive Sciences 21(1), 24–31"
    year: 2017
  - author: C. Daniel Batson
    title: The Altruism Question - Toward a Social-Psychological Answer
    published: Lawrence Erlbaum Associates
    year: 1991
  - author: C. Daniel Batson, Tricia R. Klein, Lori Highberger, Laura L. Shaw
    title: "Immorality from empathy-induced altruism - when compassion and justice conflict"
    published: "Journal of Personality and Social Psychology 68(6), 1042–1054"
    year: 1995
  - author: Deborah A. Small, George Loewenstein, Paul Slovic
    title: "Sympathy and callousness - the impact of deliberative thought on donations to identifiable and statistical victims"
    published: "Organizational Behavior and Human Decision Processes 102(2), 143–153"
    year: 2007
  - author: Jamil Zaki
    title: The War for Kindness - Building Empathy in a Fractured World
    published: Crown
    year: 2019
  - author: Michael Slote
    title: The Ethics of Care and Empathy
    published: Routledge
    year: 2007
questions:
  - id: q1
    prompt: >-
      A charity finds that a letter about one named child, with a photograph, raises far
      more than a letter reporting that eight thousand children in the same region are
      malnourished. The eight thousand are real. The named child is one of them.
    options:
      - id: a
        label: >-
          Send the letter about the child. More money arrives, more children eat, and
          the psychology of the donor is not the charity's problem to fix.
        scores: { consequentialist: 1.0, scope: 0.6, affect: 0.3 }
      - id: b
        label: >-
          Report the eight thousand. Raising money by exploiting a bias you know to be a
          bias is a form of manipulation, however good the cause.
        scores: { deontological: 0.9, contractarian: 0.4, affect: -0.6 }
      - id: c
        label: >-
          Send the child's letter, because attachment to a particular person is not a
          malfunction. It is where every real obligation any of us has ever had began.
        scores: { care: 1.0, virtue: 0.4, scope: -0.5, affect: 0.8 }
      - id: d
        label: >-
          Send the child's letter and say plainly in it that she stands for eight
          thousand. A donor who is told what is happening to them is not being used.
        scores: { virtue: 0.9, contractarian: 0.5, certainty: -0.3 }
  - id: q2
    prompt: >-
      In a study, people made to feel for one named child on a waiting list moved her
      ahead of children who were sicker. They knew the list was ordered by need. Suppose
      you are the one feeling it, and you have the authority to move her.
    options:
      - id: a
        label: >-
          Do not move her. The list exists precisely because your feeling for whoever
          you happen to have met is not a measure of who is dying fastest.
        scores: { consequentialist: 0.9, contractarian: 0.5, affect: -0.8, scope: 0.6 }
      - id: b
        label: >-
          Do not move her, and do not congratulate yourself. The feeling that made you
          want to is the same faculty that got you to care about lists at all.
        scores: { virtue: 1.0, care: 0.4, certainty: -0.5 }
      - id: c
        label: >-
          Move her. You are the only person in the world positioned to help this
          particular child, and abstract need has no such claim on you.
        scores: { care: 1.0, egoist: 0.3, scope: -0.9 }
      - id: d
        label: >-
          Do not move her, because you have no right to hand another child's place away.
          The place was theirs, not yours to give.
        scores: { deontological: 1.0, certainty: 0.7, agency: 0.3 }
  - id: q3
    prompt: >-
      Bloom argues we should replace empathy — feeling what another feels — with
      rational compassion, which cares about someone's welfare without simulating their
      distress. A hospice nurse says that is a description of burnout, not of virtue.
    options:
      - id: a
        label: >-
          Bloom is right. The nurse who feels every death does not last a year, and the
          patients need her in five years more than they need her weeping today.
        scores: { consequentialist: 0.9, virtue: 0.4, affect: -0.7 }
      - id: b
        label: >-
          The nurse is right. Care that no longer costs anything has stopped being care,
          and the people in the bed can tell the difference.
        scores: { care: 1.0, virtue: 0.5, affect: 0.9 }
      - id: c
        label: >-
          The distinction is real but the ranking is not. Some work needs the feeling and
          some work needs the distance, and the skill is knowing which room you are in.
        scores: { virtue: 1.0, certainty: -0.6, affect: 0.3 }
      - id: d
        label: >-
          Whether a carer feels anything is between her and herself. What is owed to the
          patient is the standard of treatment, and that can be specified without feelings.
        scores: { contractarian: 0.9, deontological: 0.5, affect: -0.5 }
  - id: q4
    prompt: >-
      Empathy is easier to feel for people who look, sound and vote like you. Suppose
      that is well established. What does it imply about using empathy as a moral guide?
    options:
      - id: a
        label: >-
          That it is disqualifying. A faculty that reliably tracks similarity rather than
          suffering is a bias with good public relations.
        scores: { consequentialist: 1.0, scope: 0.9, affect: -0.9 }
      - id: b
        label: >-
          That it needs widening, not replacing. Empathy is trainable, and the answer to a
          narrow circle is a larger one, not a colder one.
        scores: { care: 0.9, virtue: 0.6, scope: 0.5 }
      - id: c
        label: >-
          That morality should not rest on any feeling. Rules bind you to the stranger
          whether or not you can imagine his afternoon.
        scores: { deontological: 1.0, certainty: 0.6, affect: -0.7 }
      - id: d
        label: >-
          That the bias is the point. You owe more to your own, and a theory that finds
          this embarrassing has misdescribed what obligations are.
        scores: { care: 0.8, egoist: 0.4, scope: -1.0 }
outcomes:
  - id: the-arithmetic-of-suffering
    dominant: consequentialist
    label: Count the Ones You Cannot See
    text: >-
      You hold that suffering is suffering whether or not you can picture the sufferer,
      and that a faculty which brightens for the photogenic and dims for the statistical
      is not fit to govern serious decisions. This is Bloom's position and it is the
      reason most large-scale good gets done. Its price is that you have detached moral
      seriousness from moral motivation. Something still has to get you out of bed, and
      the thing that does is usually the thing you have just demoted.
    base_rate: null
  - id: the-particular-person
    dominant: care
    label: The One in Front of You
    text: >-
      You think that feeling for a particular person is not a defective route to caring
      about everyone but the only route anyone has ever taken. The tradition behind you
      runs through Michael Slote and the ethics of care, and it is right that nobody has
      ever been moved to act by a number alone. What it costs you is defensible in most
      of your life and indefensible in some of it — the waiting list, the transfer, the
      ward you will never visit — where being the person who happened to be met is not a
      reason to be preferred.
    base_rate: null
  - id: the-trained-heart
    dominant: virtue
    label: The Trained Heart
    text: >-
      You refuse the choice as posed. Feeling and distance are not rival theories but
      rival tools, and what a good person has is the judgement to know which the room
      calls for. This is the most livable answer and the hardest to check. You cannot say
      in advance what your rule is, which means you cannot be held to it, and neither can
      anyone who claims the same skill with less of it.
    base_rate: null
  - id: the-rule-that-binds
    dominant: deontological
    label: What Is Owed Regardless
    text: >-
      You want the stranger's claim on you to survive your failure to imagine him, so you
      ground it in something other than what you can feel. That makes your obligations
      stable under fatigue, prejudice and distance, which is exactly when they are tested.
      The objection is that a duty nobody feels is a duty nobody performs, and you need an
      account of how the rule gets into anyone in the first place.
    base_rate: null
  - id: the-published-standard
    dominant: contractarian
    label: The Standard, Not the Sentiment
    text: >-
      Your instinct is to make the obligation something the parties could have agreed to
      and can hold each other to, so that what a carer or a donor or an official happens
      to feel does not decide anyone's fate. It handles the waiting list cleanly and it
      makes power answerable. It is weakest where no agreement was possible and the only
      thing keeping someone in view is that a particular person could not stop thinking
      about them.
    base_rate: null
---

## What it means

Paul Bloom's *Against Empathy: The Case for Rational Compassion* (2016) is not an argument
for coldness. It is an argument that one particular capacity, widely treated as the
foundation of morality, is a bad instrument for the job.

Bloom is careful about the word. By **empathy** he means the narrow thing: feeling what
you take another person to be feeling, putting yourself in their place and experiencing a
version of their distress. He distinguishes this from **compassion** or concern, which
is caring about someone's welfare and wanting it to improve, without necessarily
simulating what they undergo. His claim is that the second is what we want and the first
is what we praise.

The case against empathy is that it has the properties of a spotlight. It illuminates
one thing at a time, it is aimed by whoever is holding it, and everything outside the
beam goes dark. Empathy is roused far more easily by one identified person than by
thousands of unidentified ones — the finding Small, Loewenstein and Slovic reported in
2007, that donations fall when people are prompted to think analytically about statistical
victims. It is roused more easily by people who resemble you. It is innumerate in a way
that matters: it does not scale, so a hundred deaths do not move it a hundred times as
much as one.

Worse, Bloom argues, empathy can be recruited for cruelty. The most reliable way to get a
population to support a war is not to suppress its empathy but to direct it — at your own
casualties, at an atrocity story, at a child on your side of the line. Bloom's proposal
is that we should make decisions using compassion plus cost-benefit reasoning, and treat
empathy as we treat any other vivid, fast, partial signal.

## What it suggests

Take the argument seriously and a good deal of moral self-congratulation looks different.
Charity appeals built around one named child, victim-impact statements, the entire genre
of putting a human face on it — these become techniques for producing a feeling that
predictably distorts the decision it is meant to inform.

The most uncomfortable evidence is Batson's. In a 1995 study, Batson and colleagues
induced empathy for a named child on a waiting list for treatment, then gave participants
the power to move her up. Many did, ahead of children the list said were more urgent, and
they did so knowing that. Batson — who had spent a career arguing that empathy produces
genuine altruism — reported this as a case where empathy and justice come apart, and
empathy wins. That is Bloom's exhibit A, and it is not a fringe result from a critic. It
comes from empathy's most distinguished defender.

Now the objections, which are serious.

The first is that Bloom has won an argument against a definition. If empathy means only
affective mirroring, then yes, it is partial and innumerate — but many people who defend
empathy mean something closer to the capacity to understand and be moved by another
person's situation, which is not obviously separable from compassion at all. Jamil Zaki
argues in *The War for Kindness* (2019) that empathy is a skill rather than a fixed
quantity, that it can be trained and widened, and that the correct response to its
narrowness is expansion rather than replacement.

The second is Michael Slote's, from the care-ethics tradition: that Bloom's rational
compassion is parasitic. Where would the concern come from, if not from having once felt
what someone else felt? A person who has never been pierced by a particular case does not
reliably develop a general concern for cases.

The third is practical. Bloom's alternative asks you to be moved by reasons. It is worth
asking, of any account of moral motivation, whether it describes anyone.

## The problem

You direct fundraising for a medical charity working in three countries, and you have
one budget for the year's appeal.

Your data is unambiguous. The appeal built around Amina — nine years old, photographed on
her mother's step in Kano, named in every paragraph — raised almost four times what last
year's appeal raised, and last year's was honest reporting about a region. The money
bought treatment for a great many children, of whom Amina was one.

Your programme director wants Amina again. Your head of communications has stopped
sleeping. She points out that the campaign works because donors believe, at some level
they would deny if asked, that their money went to that child on that step. She thinks
you are running a machine that converts a bias you have documented into revenue, and that
one day the machine will be pointed at something worse by someone else.

Your finance officer has run the numbers on the honest version. It costs about six
thousand children's treatment.

The board meets Thursday.

## The questions

**1. The named child.** One named child with a photograph raises far more than an honest
report about eight thousand.

- Send the child's letter. More money, more children fed; the donor's psychology is not
  yours to fix.
- Report the eight thousand. Raising money on a bias you know to be a bias is manipulation.
- Send the child's letter. Attachment to a particular person is where every real
  obligation began.
- Send it and say in it that she stands for eight thousand. A donor who is told is not
  being used.

**2. Moving her up the list.** You feel for one named child on a waiting list ordered by
need, and you can move her.

- Do not move her. The list exists because your feeling is not a measure of who is dying.
- Do not move her, and do not congratulate yourself; that feeling is why you care at all.
- Move her. You are the only person positioned to help this child.
- Do not move her. The place was another child's, not yours to give away.

**3. The hospice nurse.** Bloom would replace empathy with rational compassion. A nurse
says that describes burnout, not virtue.

- Bloom is right. The nurse who feels every death does not last the year.
- The nurse is right. Care that costs nothing has stopped being care.
- The distinction is real, the ranking is not. The skill is knowing which room you are in.
- What is owed to the patient is a standard of treatment, specifiable without feelings.

**4. The narrow circle.** Empathy comes easier for people like you.

- That is disqualifying. It tracks similarity, not suffering.
- It needs widening, not replacing. Empathy is trainable.
- Morality should not rest on any feeling. Rules bind you to the stranger regardless.
- The bias is the point. You do owe more to your own.

## Reading your answer

**Count the Ones You Cannot See.** You will not let a person's claim depend on whether you
can picture them, and you are willing to run the appeal, the list or the budget in a way
that feels worse and does more. The cost is a gap between what moves you and what you
endorse. You should watch whether the endorsed thing survives a bad week.

**The One in Front of You.** You hold that the particular attachment is not a broken
version of impartial concern but its origin, and you are right about how nearly every
human being actually came to care about anything. Where this bites is the waiting list.
Being the one who happened to be met is not, on its own, a claim — and you will need to
say what is doing the work when you act as though it were.

**The Trained Heart.** You refuse the dichotomy and put the weight on judgement. This is
the most livable answer, and the least checkable. You cannot state your rule in advance,
which means you cannot be held to it, and neither can anyone claiming the same skill with
less of it.

**What Is Owed Regardless.** You ground the stranger's claim in something sturdier than
your capacity to imagine him, so that it holds when you are tired, frightened or
prejudiced — which is when it matters. What you owe in return is an account of how anyone
comes to care about a rule, since duties do not motivate themselves.

**The Standard, Not the Sentiment.** You want the decision made by something the parties
could have agreed to, so nobody's fate turns on who happened to move an official. This
keeps institutions honest. It is weakest where no agreement was available and the only
thing keeping a person in view was that someone could not stop thinking about them.

## Sources

- Paul Bloom, *Against Empathy: The Case for Rational Compassion* (Ecco, 2016).
- Paul Bloom, "Empathy and Its Discontents", *Trends in Cognitive Sciences* 21(1) (2017),
  24–31 — the argument in short form, with replies to critics.
- C. Daniel Batson, *The Altruism Question: Toward a Social-Psychological Answer*
  (Lawrence Erlbaum, 1991) — the empathy-altruism hypothesis Bloom is arguing against.
- C. Daniel Batson, Tricia R. Klein, Lori Highberger and Laura L. Shaw, "Immorality from
  empathy-induced altruism: when compassion and justice conflict", *Journal of Personality
  and Social Psychology* 68(6) (1995), 1042–1054 — the waiting-list study.
- Deborah A. Small, George Loewenstein and Paul Slovic, "Sympathy and callousness: the
  impact of deliberative thought on donations to identifiable and statistical victims",
  *Organizational Behavior and Human Decision Processes* 102(2) (2007), 143–153.
- Jamil Zaki, *The War for Kindness: Building Empathy in a Fractured World* (Crown, 2019)
  — empathy as a trainable skill.
- Michael Slote, *The Ethics of Care and Empathy* (Routledge, 2007) — the care-ethics case
  that empathy is foundational rather than incidental.
