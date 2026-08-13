---
id: hypothetical-imperative
title: The Hypothetical Imperative
category: term
tradition: kantian-ethics
philosophers:
  - Immanuel Kant
era: "1785"
tags: [reasons, obligation, prudence, desire, motivation]
sources:
  - author: Immanuel Kant
    title: Groundwork of the Metaphysics of Morals
    published: "trans. Mary Gregor, Cambridge University Press"
    year: 1785
  - author: Philippa Foot
    title: "Morality as a System of Hypothetical Imperatives"
    published: "The Philosophical Review 81(3), 305–316"
    year: 1972
  - author: Bernard Williams
    title: "Internal and External Reasons"
    published: "in Moral Luck, Cambridge University Press"
    year: 1981
  - author: Christine M. Korsgaard
    title: The Sources of Normativity
    published: Cambridge University Press
    year: 1996
questions:
  - id: q1
    prompt: >-
      A junior analyst is leaving the firm in three weeks. He has found a way to
      round a set of figures in his favour that nobody will ever check, and it will
      not hurt anyone he can identify. He asks you, sincerely, what reason he has
      not to — given that reputation and conscience do not bite here.
    options:
      - id: a
        label: >-
          The reason does not run through what he wants. It is wrong, and that is a
          claim on him whether or not it connects to anything he cares about.
        scores: { deontological: 1.0, certainty: 0.8, authority: 0.4 }
      - id: b
        label: >-
          If he genuinely wants nothing that this threatens, then he has no reason,
          and pretending otherwise is bluffing.
        scores: { egoist: 1.0, nihilist: 0.4, certainty: 0.4 }
      - id: c
        label: >-
          He has a reason, and it is that everyone's figures get worse when people
          like him round them. He is just not the one who pays.
        scores: { consequentialist: 1.0, scope: 0.8 }
      - id: d
        label: >-
          Ask what he would become. Someone who rounds when unwatched is a worse
          thing to be, and he is the one who has to be it.
        scores: { virtue: 1.0, egoist: 0.3, affect: 0.3 }
  - id: q2
    prompt: >-
      Philippa Foot compared moral rules to rules of etiquette: both issue commands
      that do not begin "if you want to". You may not use the fish knife for the
      bread, and you may not lie — and in both cases the person who shrugs is not
      making a logical mistake, just refusing to play.
    options:
      - id: a
        label: >-
          The comparison fails. Etiquette can be shrugged off without error; a moral
          demand cannot, and that difference is the whole subject.
        scores: { deontological: 1.0, certainty: 0.7 }
      - id: b
        label: >-
          The comparison holds, and the honest conclusion is that moral reasons bind
          only those who care about the ends morality serves.
        scores: { egoist: 0.8, relativist: 0.6, certainty: -0.4 }
      - id: c
        label: >-
          The comparison holds and morality survives it. What makes morality unlike
          etiquette is not extra force but that the ends it serves are ones nobody
          coherently rejects — living well with others.
        scores: { virtue: 0.9, contractarian: 0.4, certainty: -0.3 }
      - id: d
        label: >-
          The rules bind because everyone is better off in a world where people
          treat them as binding. That is not a shrug, it is a reason.
        scores: { consequentialist: 0.9, contractarian: 0.5, scope: 0.6 }
  - id: q3
    prompt: >-
      A haulage firm has cut its emissions by a third. Asked why, the owner says
      plainly that the grant paid for it and the fuel saving pays the rest; if the
      numbers reversed tomorrow she would reverse with them.
    options:
      - id: a
        label: >-
          Then she has done nothing moral. The act is right and her reason is a
          price signal, which is a different thing entirely.
        scores: { deontological: 1.0, certainty: 0.6, affect: -0.3 }
      - id: b
        label: >-
          The emissions are down. Motive is a story we tell afterwards; the
          atmosphere does not read it.
        scores: { consequentialist: 1.0, agency: 0.5, affect: -0.6 }
      - id: c
        label: >-
          She is more trustworthy than a convert, not less. Incentives hold when
          enthusiasm fades, which is most of the time.
        scores: { consequentialist: 0.7, egoist: 0.6, contractarian: 0.4 }
      - id: d
        label: >-
          It matters, but not as a verdict on her. It matters because a firm run on
          price signals will do the wrong thing the day the signal moves.
        scores: { virtue: 0.8, consequentialist: 0.4, certainty: -0.3 }
  - id: q4
    prompt: >-
      Your fifteen-year-old asks why she should keep a promise she now regrets, to a
      friend who will never find out she broke it, when keeping it will cost her an
      afternoon she would rather spend otherwise.
    options:
      - id: a
        label: >-
          Because a promise is a commitment, and a commitment that lapses when it
          becomes inconvenient was never one. No further reason is available.
        scores: { deontological: 1.0, certainty: 0.8 }
      - id: b
        label: >-
          Because people who keep promises get trusted, and trust is worth more over
          a life than any single afternoon.
        scores: { egoist: 0.9, consequentialist: 0.4, scope: -0.4 }
      - id: c
        label: >-
          Because her friend is counting on her, and what that friend feels on
          Saturday is the reason — not a rule about promises.
        scores: { care: 1.0, affect: 0.6, scope: -0.5 }
      - id: d
        label: >-
          Because a world in which promises hold only while convenient is worse for
          everyone in it, including her.
        scores: { consequentialist: 0.9, contractarian: 0.5, scope: 0.7 }
outcomes:
  - id: the-unconditional
    dominant: deontological
    label: The Command That Does Not Bargain
    text: >-
      You hold that a moral demand is not an instruction for getting something you
      already want. It applies to the person who wants nothing it can be attached
      to, and that is precisely what makes it moral rather than practical advice.
      The bill comes when you are asked what makes it apply: you have to give an
      account of a reason that binds independently of anything in the agent, and
      every version of that account has been contested for two centuries.
    base_rate: null
  - id: reasons-you-have
    dominant: egoist
    label: Reasons You Actually Have
    text: >-
      You take reasons to run through the agent — what a person has reason to do
      depends on what they care about, and a demand with no purchase on them is a
      demand with no force. This is the honest position about motivation, and it
      explains why moralising so often bounces off. What it commits you to is
      colder than it first looks: the person who has been shaped to want nothing you
      could appeal to is not making a mistake on your view, only differing.
    base_rate: null
  - id: the-shared-end
    dominant: consequentialist
    label: The End Nobody Rejects
    text: >-
      You keep the "if" and argue about what fills it. Moral rules serve an end —
      that people can live together, that the world go better — and the reason to
      follow them is that the end is real and shared. This makes morality
      answerable to evidence rather than to authority. The cost is that anyone who
      genuinely opts out of the end has, by your own account, opted out of the
      obligation, and some people do.
    base_rate: null
  - id: the-good-life
    dominant: virtue
    label: What the Reason Is For
    text: >-
      You think the question of why to be moral is answered by what a human life
      goes well as, not by an unconditional command or a calculation. This is close
      to where Foot herself ended up after the 1972 paper, and it dissolves the
      standoff rather than winning it. Its exposure is the flourishing scoundrel:
      you owe an account of why the person who does very well out of doing wrong is
      making a mistake about their own life, and that account is hard to make stick.
    base_rate: null
  - id: the-one-owed
    dominant: care
    label: The Person You Promised
    text: >-
      You locate the reason in the particular person on the other end of it — not
      in a rule, not in a total, but in someone who is counting on you. That is
      usually how obligations are actually felt, and it explains the force of
      promises better than either abstraction. Where it runs out is the case with no
      face in it: the figures nobody checks, the stranger downstream, the person who
      will never know they were owed anything.
    base_rate: null
  - id: the-ones-who-care
    dominant: relativist
    label: Binding on Those Who Already Care
    text: >-
      You take the comparison at face value and follow it out: if every reason to act runs
      through some end the agent already has, then moral reasons reach only those who
      happen to hold the relevant ends, and calling them categorical is a piece of
      rhetoric. This is the honest version of the position most people half-hold. Its
      price is steep and worth naming — it leaves you nothing to say to the person who
      simply does not care, at exactly the moment you most want to say something.
    base_rate: null
  - id: the-terms-we-keep
    dominant: contractarian
    label: The Terms Everyone Is Better Under
    text: >-
      You ground the bindingness in an agreement rather than in reason's own structure:
      the rule holds because a world where people treat it as holding is one nobody could
      reasonably reject. This gets you unconditional-looking obligations without Kant's
      metaphysics, which is why it is the modern route to the same conclusions. What it
      cannot easily reach is the person the agreement never included — and Kant's
      objection is that an obligation which depends on the deal being good for you has
      quietly become hypothetical again.
    base_rate: null

---

## What it means

Kant's distinction, in the second section of the *Groundwork of the Metaphysics of
Morals* (1785), is between two forms a command can take.

A **hypothetical imperative** says: *if you want this end, do that.* If you want the
loan, do not default. If you want to be trusted, do not lie. Kant subdivides these into
imperatives of *skill* — rules for reaching whatever end you happen to have, which he
notes are as available to a poisoner as to a physician — and counsels of *prudence*,
which concern the end everyone has anyway, their own happiness. The crucial feature of
all of them is the escape clause. Drop the end and the command drops with it. If you no
longer want the loan, "do not default" has nothing left to say to you.

A **categorical imperative** says: *do that.* No antecedent, no end supplied by the
agent, nothing to drop. Kant's claim is that moral requirements have this form and could
not have the other, because a requirement that lapsed when the agent's desires changed
would not be a moral requirement at all — it would be advice. This is why he thinks the
whole question of morality's foundation is the question of how a categorical imperative
is possible.

The distinction is not about content. "Do not lie" can be either. Said to someone who
wants a good reputation, it is a rule of skill, and the liar with a secure position is
outside its reach. Said as a moral requirement, it is meant to reach him anyway. Two
sentences that sound the same are doing different jobs, and Kant's claim is that
everything turns on which job is being done.

## What it suggests

If Kant is right, most of what passes for moral argument is not moral argument. "Honesty
pays." "Cheating catches up with you." "Being kind makes you happier." Every one of
these is an imperative of skill wearing moral clothes, and every one of them is hostage
to the facts. When honesty does not pay — when the analyst is leaving in three weeks and
nobody will check — the argument has already conceded the case.

That is an uncomfortable result, and it is meant to be. It implies that the only
arguments that survive contact with a person who has nothing to gain are ones that do
not appeal to gain at all.

The strongest reply is Philippa Foot's, in "Morality as a System of Hypothetical
Imperatives" (1972). Foot noticed that Kant's argument runs together two things:
whether a rule can be *shrugged off without inconsistency*, and whether it applies
*inescapably*. Rules of etiquette apply to you whether or not you care about etiquette —
you have used the wrong fork, full stop — yet nobody thinks etiquette generates
categorical reasons. So inescapable application is cheap; what Kant needs is inescapable
*reason-giving*, and Foot argued he never shows morality has it. Her conclusion was that
moral reasons are hypothetical in form, hanging on ends that most people do in fact have
— caring about others, wanting to live decently among them — and that this is enough,
because those ends are not rare. Bernard Williams pressed a related point from a
different direction, arguing that a reason for action must connect to something in the
agent's existing motivational set or it is not a reason for *them*.

Foot herself later withdrew from the 1972 position, and Christine Korsgaard has argued
that the categorical form can be recovered from what it takes to be an agent at all. But
notice what is at stake in the argument, because it is not academic. If Foot's early view
is right, the person who genuinely does not care is not making an error — he is simply
outside the argument, and we are left with force, persuasion, or the slow work of making
people who care. If Kant is right, he is making an error, and we can say so. Neither
answer is comfortable, and one of them is true.

## The problem

Marta chairs the ethics committee of a mid-sized insurer. A claims manager named Piotr
has quietly been declining a category of claim on a technicality that is legally sound
and, in his own words, "obviously not what the policy was sold as".

She has three arguments available.

The first: the regulator will eventually notice, and the fine will exceed the savings.
Piotr has run these numbers. He believes, with good reason, that the regulator will not
notice; the category is small and the paperwork is impeccable.

The second: the firm's reputation. Piotr points out that the firm's reputation is made
by its pricing, that customers do not read claims data, and that the two competitors who
do this openly are gaining share.

The third is the one she actually believes: that it is a wrong done to people who paid
for cover they will not get, and that this is true regardless of fines or share. Piotr
listens politely and asks what he is supposed to do with that — he has a target, a team,
and no line in his objectives that this sentence attaches to.

Marta can see that her first two arguments are the ones with grip and the wrong shape,
and her third has the right shape and no grip. What she does not know is whether that is
a failure of her argument or a fact about Piotr.

## The questions

**1. The analyst who is leaving.** Nobody will check, nothing he wants is at risk, and
he asks sincerely what reason he has.

- The reason does not run through what he wants. It is wrong, and that is a claim on him
  regardless.
- If he genuinely wants nothing this threatens, he has no reason, and pretending
  otherwise is bluffing.
- He has a reason: everyone's figures get worse. He is just not the one who pays.
- Ask what he would become. Someone who rounds when unwatched is a worse thing to be.

**2. The etiquette comparison.** Foot compared moral rules to rules of etiquette: both
issue commands, and in both cases the person who shrugs makes no logical error.

- The comparison fails. Etiquette can be shrugged off; a moral demand cannot.
- The comparison holds, and moral reasons bind only those who care about the ends
  morality serves.
- The comparison holds and morality survives it — its ends are ones nobody coherently
  rejects.
- The rules bind because everyone is better off where they are treated as binding.

**3. The haulier.** She cut emissions by a third because the grant and the fuel saving
paid for it, and says she would reverse if the numbers did.

- Then she has done nothing moral. The act is right and her reason is a price signal.
- The emissions are down. The atmosphere does not read motives.
- She is more trustworthy than a convert. Incentives hold when enthusiasm fades.
- It matters, but as a prediction: she will do the wrong thing the day the signal moves.

**4. The promise your daughter regrets.** Nobody will find out. It costs her an
afternoon.

- Because a commitment that lapses when inconvenient was never one.
- Because promise-keepers get trusted, and trust outlasts any afternoon.
- Because her friend is counting on her, and that is the reason.
- Because a world where promises hold only while convenient is worse for everyone.

## Reading your answer

**The Command That Does Not Bargain.** You hold that moral demands apply to people who
have nothing to gain from them, and that this is what makes them moral rather than
prudent. You are not required to explain why anyone complies — but you are required to
explain what makes the demand *apply*, and this is where the position has spent two
hundred years under fire.

**Reasons You Actually Have.** You think a reason has to connect to something in the
person, or it is a noise aimed at them. This is realistic about how motivation works and
honest about the limits of argument. It commits you to something you may not like when
stated plainly: the person raised to care about nothing you can appeal to is not making
an error on your account, and you have no argument left, only leverage.

**The End Nobody Rejects.** You keep the conditional form and put something durable in
the antecedent — living together, the world going better. This keeps morality
answerable to facts rather than to assertion. The exposed edge is the genuine opt-out:
by your own logic, someone who does not share the end is released, and you will meet
such people.

**What the Reason Is For.** You think "why be moral?" is answered by what a good human
life consists in. This dissolves the standoff instead of winning it, and it is roughly
where Foot herself moved after 1972. You owe an account of the person who prospers by
doing wrong — of why they have got their own life wrong — and that account is the hardest
thing in the neighbourhood to make convincing.

**The Person You Promised.** You put the reason in the one who is owed rather than in a
rule or a sum. That is how obligation is usually experienced and it explains promises
well. It gives you least where there is no face: the unchecked figure, the stranger
downstream, the person who will never know.

**Binding on Those Who Already Care.** You follow the comparison out: if every reason
runs through an end the agent already holds, moral reasons reach only those who happen to
hold the relevant ends, and "categorical" is rhetoric. This is the honest version of a
position many people half-hold. Its price is steep and worth naming — it leaves you nothing
to say to someone who simply does not care, at exactly the moment you most want to.

**The Terms Everyone Is Better Under.** You ground the bindingness in an agreement
rather than in reason's own structure: the rule holds because a world where people treat it
as holding is one nobody could reasonably reject. That reaches unconditional-looking
obligations without Kant's metaphysics. What it struggles to reach is the party the
agreement never included — and Kant's own objection is that an obligation which holds
because the deal suits you has quietly become hypothetical again.

## Sources

- Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785), trans. Mary Gregor,
  Cambridge University Press — Section II, on imperatives of skill, counsels of prudence,
  and the categorical imperative.
- Philippa Foot, "Morality as a System of Hypothetical Imperatives", *The Philosophical
  Review* 81(3) (1972), 305–316. Foot later distanced herself from its conclusion.
- Bernard Williams, "Internal and External Reasons", in *Moral Luck*, Cambridge
  University Press (1981).
- Christine M. Korsgaard, *The Sources of Normativity*, Cambridge University Press
  (1996) — a defence of categorical requirement grounded in agency.
