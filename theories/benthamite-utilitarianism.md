---
id: benthamite-utilitarianism
title: The Greatest Happiness Principle
category: theory
tradition: utilitarianism
philosophers:
  - Jeremy Bentham
era: "1789"
tags: [pleasure, pain, aggregation, impartiality, legislation, animals]
sources:
  - author: Jeremy Bentham
    title: An Introduction to the Principles of Morals and Legislation
    published: "printed 1780, published London 1789"
    year: 1789
  - author: Jeremy Bentham
    title: Anarchical Fallacies
    published: "written 1796; in The Works of Jeremy Bentham, ed. John Bowring, vol. 2"
    year: 1843
  - author: John Stuart Mill
    title: Utilitarianism
    published: "Fraser's Magazine, in three parts; book edition 1863"
    year: 1863
  - author: John Rawls
    title: A Theory of Justice
    published: Harvard University Press
    year: 1971
  - author: Robert Nozick
    title: "Anarchy, State, and Utopia"
    published: Basic Books
    year: 1974
questions:
  - id: q1
    prompt: >-
      A council must site a waste incinerator. Put it in the wealthy district and
      four thousand people suffer moderate nuisance. Put it in the poor district
      and six hundred people suffer badly, because they already breathe worse air
      and cannot move. Total measured suffering is lower in the second option.
    options:
      - id: a
        label: >-
          Site it where total suffering is lowest. The sum is the whole question,
          and six hundred people suffering is less suffering than four thousand.
        scores: { consequentialist: 1.0, scope: 0.8, affect: -0.6 }
      - id: b
        label: >-
          Site it in the wealthy district. Loading more onto people already
          carrying most of it is a wrong the total conceals.
        scores: { deontological: 0.8, contractarian: 0.6, scope: 0.4 }
      - id: c
        label: >-
          Site it where the sum is lowest, but compensate the six hundred until
          they would have chosen it. Then the total and the fairness agree.
        scores: { consequentialist: 0.7, contractarian: 0.7, certainty: -0.3 }
      - id: d
        label: >-
          Whichever district you would be willing to look in the face and explain
          it to. A decision nobody can defend in person is not defensible.
        scores: { virtue: 0.9, care: 0.4, affect: 0.5 }
  - id: q2
    prompt: >-
      Bentham held that the pleasure of a game of pushpin, if equal in quantity,
      is as good as the pleasure of poetry — and that a pleasure counts whoever
      has it. A grant committee can fund an opera house or a chain of very
      ordinary amusement arcades that will please far more people far more often.
    options:
      - id: a
        label: >-
          Fund the arcades. Preferring opera is a taste, and dressing a taste as
          a value is how elites spend other people's money on themselves.
        scores: { consequentialist: 1.0, scope: 0.7, authority: 0.4 }
      - id: b
        label: >-
          Fund the opera house. Some goods are worth more than the pleasure they
          produce, and a public body exists partly to protect those.
        scores: { virtue: 0.8, deontological: 0.4, authority: -0.5 }
      - id: c
        label: >-
          Fund the arcades, but concede this is a real loss. The theory is right
          about the count and blind to what is being counted.
        scores: { consequentialist: 0.8, virtue: 0.4, certainty: -0.6 }
      - id: d
        label: >-
          Neither committee should decide. Let the people whose money it is
          choose, and take whatever they choose as the answer.
        scores: { contractarian: 0.8, egoist: 0.3, authority: 0.5 }
  - id: q3
    prompt: >-
      Bentham asked of animals: "The question is not, Can they reason? nor, Can
      they talk? but, Can they suffer?" A new regional budget can fund a scheme
      that spares fifty thousand pigs a painful husbandry practice, or one that
      modestly shortens waiting lists for two hundred human patients.
    options:
      - id: a
        label: >-
          Fund the pigs. Suffering is suffering; species is no more relevant to
          the sum than parish or skin.
        scores: { consequentialist: 1.0, scope: 1.0 }
      - id: b
        label: >-
          Fund the patients. Human beings stand in relations of claim and answer
          to one another that animals do not, and that is not mere prejudice.
        scores: { deontological: 0.8, contractarian: 0.5, scope: -0.5 }
      - id: c
        label: >-
          Fund the patients, and admit that the reason is that they are ours.
          Partiality is honest; a rationalisation of it is not.
        scores: { care: 0.9, virtue: 0.4, scope: -0.8 }
      - id: d
        label: >-
          Fund the pigs, because the scale is overwhelming — but you would not
          hold to it if the two hundred were people you knew.
        scores: { consequentialist: 0.8, care: 0.4, certainty: -0.5 }
  - id: q4
    prompt: >-
      Bentham called natural rights "nonsense upon stilts" — for him a right is
      whatever a legislature creates because creating it does good. A government
      proposes suspending a long-standing legal protection for a year, and its
      economists have shown, credibly, that the year would go better without it.
    options:
      - id: a
        label: >-
          Suspend it. A protection is a tool for producing good outcomes; when it
          stops doing that, keeping it is superstition.
        scores: { consequentialist: 1.0, certainty: 0.4, authority: -0.4 }
      - id: b
        label: >-
          Refuse. A protection that lasts only while it is convenient is not a
          protection, and the people relying on it were relying on exactly that.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: c
        label: >-
          Refuse, on the government's own grounds: a state that suspends rights
          when the sums favour it produces worse outcomes over any long run.
        scores: { consequentialist: 0.9, contractarian: 0.5, certainty: 0.3 }
      - id: d
        label: >-
          Refuse, because no one could be asked in advance to accept a rule that
          suspends their protection whenever someone else's arithmetic improves.
        scores: { contractarian: 1.0, deontological: 0.4, scope: 0.5 }
outcomes:
  - id: the-sum
    dominant: consequentialist
    label: The Sum of Sentience
    text: >-
      You take pleasure and pain to be the only things that finally matter, and
      you count them wherever they occur — across classes, across borders, across
      species. That is a demanding and unusually consistent position: most of the
      exclusions other people make turn out, under your view, to be conveniences
      wearing the costume of principle. Its cost is that a sum has no memory of
      whose pain it is. Nothing in the count itself objects when the total
      improves by loading more onto people already carrying most of it, and you
      have to supply that objection from outside the theory or do without it.
    base_rate: null
  - id: the-protected
    dominant: deontological
    label: What the Total Cannot Touch
    text: >-
      You hold that some claims are not inputs to a calculation — that a right
      which lapses when the arithmetic turns is not a right, and that a person
      has standing the sum does not confer. This is the objection Bentham never
      answered to everyone's satisfaction: aggregation runs people together as
      though the losses of one could be made good by the gains of another. What
      you owe is an account of where the protected claims come from, since
      Bentham's challenge — show me the right and who issued it — is still open.
    base_rate: null
  - id: the-agreement
    dominant: contractarian
    label: What Could Be Agreed
    text: >-
      You reach for what people could accept in advance without knowing which
      side of the ledger they would land on. It gives you a principled objection
      to sacrifice that pure counting cannot generate, and it explains why
      compensation changes the case where a raw total does not. Its exposure is
      everything that cannot bargain: the animals in the third question, the
      unborn, the very poor whose agreement is available for a price.
    base_rate: null
  - id: the-defensible
    dominant: virtue
    label: What You Could Say to Their Face
    text: >-
      You test decisions by whether a decent person could stand behind them in
      the presence of the people they fall on. That catches something the
      calculus misses — the difference between a defensible policy and a
      defensible spreadsheet. The objection to answer is that it does not scale:
      the people your decisions actually affect mostly cannot be assembled, and
      "who could you face" starts to select for whoever happens to be visible.
    base_rate: null
  - id: the-particular
    dominant: care
    label: The Ones Who Are Ours
    text: >-
      You are willing to say plainly that nearness makes a claim — that the two
      hundred patients count for you because they are yours, not because of a
      principle you could write down. That honesty is worth something: most
      people who reason impartially in public are doing what you are doing in
      private. The price is that you have conceded the argument at the level of
      principle and kept the practice anyway, and a critic will ask which of the
      two you actually believe.
    base_rate: null
---

## What it means

Jeremy Bentham opens *An Introduction to the Principles of Morals and Legislation*
(printed 1780, published 1789) with a sentence that does the work of a whole system:
"Nature has placed mankind under the governance of two sovereign masters, pain and
pleasure. It is for them alone to point out what we ought to do, as well as to determine
what we shall do."

From this he derives the **principle of utility**: an action is to be approved or
disapproved according to its tendency to increase or diminish the happiness of the party
whose interest is in question. Applied to a government, "the party whose interest is in
question" is everyone the policy touches, and the standard becomes the greatest happiness
of the greatest number. Bentham did not invent the phrase — he credited it variously to
Priestley, Beccaria and Helvétius — but he made it into a method.

Three features distinguish his version from the vaguer benevolence of his predecessors.
First, it is **hedonistic**: the good is pleasure and the absence of pain, full stop, and
everything else — money, liberty, virtue — matters instrumentally, as a means to that.
Second, it is **impartial** in a way that was radical in 1789. Mill later summarised the
rule as "everybody to count for one, nobody for more than one": the pleasure of a duke
and the pleasure of a labourer enter the sum at the same weight. In a famous footnote
Bentham extends the franchise further still, to animals — "the question is not, Can they
reason? nor, Can they talk? but, Can they suffer?" Third, it is **aggregative**: what
matters is the total, arrived at by summing across persons.

The corollary Bentham drew, and drew loudly, is that talk of natural rights existing
prior to law is empty. In *Anarchical Fallacies* he called natural rights "simple
nonsense" and imprescriptible natural rights "nonsense upon stilts". Rights on his view
are creatures of legislation: real, enormously useful, and justified by the good their
existence does — but not discovered in nature and not immune to the ledger that created
them.

## What it suggests

Take the principle seriously and it reorganises what counts as an argument. Appeals to
tradition, to dignity, to what has always been done, and to what feels natural all become
placeholders that have to be cashed out in suffering and its relief or dropped. Bentham
used this to spectacular reforming effect: his arguments against cruel punishment, for
prison reform, for the legal equality of women, and — in a manuscript he did not dare
publish — against the criminalisation of homosexuality, all run the same way. Show me who
is harmed. If nobody is, the prohibition has no defence but disgust.

That same move is what makes the theory dangerous, and its critics have never let this
go. If the good is a total, then a person is a location where pleasure and pain happen to
occur, and locations have no claims. Rawls put the charge most sharply in *A Theory of
Justice* (1971): utilitarianism "does not take seriously the distinction between
persons". It treats society as though it were one great person spreading satisfactions
across a lifetime, when in fact the man who bears the loss is not the man who enjoys the
gain, and no compensation passes between them.

Two further pressures are worth naming because they bite in different places. Nozick's
**utility monster** in *Anarchy, State, and Utopia* (1974) is a being who converts
resources into pleasure so efficiently that the sum instructs everyone else to feed it —
a case that damages the aggregation rather than the hedonism. And the hedonism itself is
challenged by the observation that people care about things beyond their own experience:
whether their child actually flourishes, not merely whether they believe it. A theory
that counts only felt states cannot register the difference, and most people think there
is one.

A defender will answer that these are objections to a caricature — that Bentham's calculus
was designed for legislators choosing between statutes, not for private agents deciding
whom to push, and that at the level of law the impartial sum is very hard to beat. That
reply is strong. It is also a retreat, and it concedes that the principle needs help from
somewhere else in the cases where it goes wrong.

## The problem

You chair a health board with a fixed budget and two proposals on the table.

The first is a drug for a rare condition: eleven children in your region, each of whom
will otherwise die before they are twenty. It costs almost the entire discretionary fund.

The second is a set of unglamorous things — smoking cessation clinics, a falls programme
for the elderly, a scheme to get diabetics to attend appointments. Your analysts model it
carefully. Over ten years it prevents roughly nine hundred hospital admissions and adds,
in aggregate, something between forty and sixty times the years of decent life that the
drug does. Nobody who benefits will ever know they were the one who benefited.

The eleven children have names, and three of their families are in the public gallery.
The nine hundred are a distribution, and none of them is anywhere.

Bentham's method has an answer, and it is not the one the gallery wants. The question is
whether you think the gallery is a source of moral information or a source of pressure —
and whether, if you fund the eleven, you can say what principle you used that is not
simply the principle that a face is worth more than a number.

## The questions

**1. The incinerator.** Four thousand moderately harmed, or six hundred badly harmed in a
district that already bears the worst of it. Total suffering is lower in the second.

- Site it where total suffering is lowest. The sum is the whole question.
- Site it in the wealthy district. Loading more onto the already-loaded is a wrong the
  total conceals.
- Site it where the sum is lowest, and compensate until the six hundred would have chosen
  it.
- Whichever you would be willing to explain in person.

**2. Pushpin and poetry.** An opera house, or arcades that please far more people far
more often.

- Fund the arcades. Preferring opera is a taste dressed as a value.
- Fund the opera house. Some goods are worth more than the pleasure they produce.
- Fund the arcades, and concede it is a real loss.
- Neither committee should decide; let the people whose money it is choose.

**3. Can they suffer?** Fifty thousand pigs spared a painful practice, or shorter waiting
lists for two hundred human patients.

- Fund the pigs. Species is no more relevant to the sum than parish.
- Fund the patients. Humans stand in relations of claim and answer that animals do not.
- Fund the patients, and admit the reason is that they are ours.
- Fund the pigs, because the scale is overwhelming — but you would not hold to it if the
  two hundred were people you knew.

**4. Nonsense upon stilts.** Suspending a legal protection for a year, where the
economics credibly favour suspension.

- Suspend it. A protection that stops doing good is superstition.
- Refuse. A protection that lasts only while convenient is not a protection.
- Refuse on the government's own grounds — the long run is worse.
- Refuse, because nobody could accept in advance a rule that suspends their protection
  when someone else's arithmetic improves.

## Reading your answer

**The Sum of Sentience.** You count, and you count everyone. That gets you the reforming
edge of the theory: most of the lines other people draw around whose suffering matters
turn out, on your view, to be conveniences. What it costs is that a total has no memory
of whose pain it is. When the sum improves by loading more onto people already carrying
most of it, nothing inside your view objects, and you will have to import the objection
or live without it.

**What the Total Cannot Touch.** You hold that some claims are not inputs. This is the
separateness-of-persons objection, and it is the best one there is. Your bill is
Bentham's original question, which has not gone away: where does the protected claim come
from, and who issued it, if not the law that could also repeal it?

**What Could Be Agreed.** You test policies by whether people could accept them before
knowing where they would stand. This gives you a principled floor under the arithmetic
rather than a feeling about it. It thins wherever agreement is unavailable — the animals
in question three, future people, and anyone poor enough that their consent is purchasable.

**What You Could Say to Their Face.** You test a decision by whether it could be defended
in the presence of the people it falls on. That is a real check and it catches things a
spreadsheet does not. It also quietly weights the visible: the people affected by most
serious decisions cannot be assembled in a room, and the ones who can be are not a
representative sample of them.

**The Ones Who Are Ours.** You say plainly that nearness makes a claim. That is more
honest than most impartialist reasoning, which tends to be impartial in the argument and
partial in the conduct. The difficulty is that you have granted the principle to the other
side and kept the practice anyway, and it is fair to ask which one you actually hold.

## Sources

- Jeremy Bentham, *An Introduction to the Principles of Morals and Legislation* (printed
  1780, published 1789) — the principle of utility, the calculus, and the footnote on
  animals in the final chapter.
- Jeremy Bentham, *Anarchical Fallacies* (written 1796), in *The Works of Jeremy Bentham*,
  ed. John Bowring, vol. 2 (1843) — "nonsense upon stilts".
- John Stuart Mill, *Utilitarianism* (1863) — the source of the "everybody to count for
  one" formula attributed to Bentham.
- John Rawls, *A Theory of Justice*, Harvard University Press (1971), §5–6 — the
  separateness of persons objection.
- Robert Nozick, *Anarchy, State, and Utopia*, Basic Books (1974) — the utility monster.
