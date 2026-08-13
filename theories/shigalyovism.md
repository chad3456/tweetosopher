---
id: shigalyovism
title: Shigalyovism
category: theory
tradition: russian-literature
philosophers:
  - Fyodor Dostoevsky
era: "1872"
tags: [equality, freedom, despotism, revolution, utopia, surveillance, power]
sources:
  - author: Fyodor Dostoevsky
    title: "Demons"
    published: "serialised in The Russian Messenger, 1871–72; also translated as The Possessed and The Devils"
    year: 1872
  - author: Sergei Nechaev
    title: Catechism of a Revolutionary
    published: "circulated in Russian émigré circles"
    year: 1869
  - author: Isaiah Berlin
    title: Two Concepts of Liberty
    published: "Clarendon Press, inaugural lecture at Oxford"
    year: 1958
  - author: J. L. Talmon
    title: The Origins of Totalitarian Democracy
    published: Secker & Warburg
    year: 1952
  - author: Robert Michels
    title: "Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy"
    published: "translated from the German edition of 1911"
    year: 1911
  - author: Albert Camus
    title: "The Rebel"
    published: "Gallimard, as L'Homme révolté"
    year: 1951
  - author: John Rawls
    title: A Theory of Justice
    published: Harvard University Press
    year: 1971
questions:
  - id: q1
    prompt: >-
      The most rigorous egalitarian in your group presents a worked plan for making the
      group genuinely equal. It requires a standing committee that can override any
      member, a compulsory work rota, and members reporting on one another's compliance.
    options:
      - id: a
        label: >-
          The plan refutes the premise. If following the reasoning honestly lands here,
          something in the reasoning was wrong several steps back.
        scores: { deontological: 0.8, certainty: 0.5, authority: 0.6 }
        evidence:
          who: Isaiah Berlin
          work: Two Concepts of Liberty
          year: 1958
          says: >-
            Berlin traced how a doctrine of freedom as self-realisation licenses coercing
            people toward the self they would have chosen if they were wiser, which puts
            liberation and tyranny on the same road.
      - id: b
        label: >-
          The plan is what equality actually costs, and everyone who claims to want
          equality while refusing the machinery is bluffing.
        scores: { consequentialist: 0.8, contractarian: 0.4, authority: -0.6 }
        evidence:
          who: Jean-Jacques Rousseau
          work: The Social Contract
          year: 1762
          says: >-
            Rousseau held that a citizen who resists the general will may legitimately be
            compelled by the whole body, on the grounds that this only forces him to be
            free of his own private dependence.
      - id: c
        label: >-
          Nothing follows about equality. It follows that plans of this kind always
          produce an enforcing minority, whatever they are plans for.
        scores: { consequentialist: 0.7, relativist: 0.4, certainty: -0.5 }
        evidence:
          who: Robert Michels
          work: Political Parties
          year: 1911
          says: >-
            Michels argued from the study of avowedly democratic mass parties that
            organisation itself generates a governing minority, so the outcome is a
            property of the structure rather than of the ideology it serves.
      - id: d
        label: >-
          Keep the goal and drop the completeness. Equal basic liberties come first, and
          any distributive scheme has to fit inside them rather than override them.
        scores: { contractarian: 0.9, deontological: 0.4, scope: 0.5 }
        evidence:
          who: John Rawls
          work: A Theory of Justice
          year: 1971
          says: >-
            Rawls ordered his principles so that equal basic liberties take priority over
            distributive gains, precisely to block trades of freedom for equality however
            favourable the arithmetic looks.
  - id: q2
    prompt: >-
      A second member — bored by the theory, ruthless about people — has spotted that the
      committee could be used to remove anyone she dislikes, and begins quietly saying so
      to the people whose votes she needs.
    options:
      - id: a
        label: >-
          This is the real objection to the plan. A structure is what it can be used for,
          not what its author intended it for.
        scores: { consequentialist: 0.9, contractarian: 0.4, agency: 0.6 }
        evidence:
          who: Friedrich A. Hayek
          work: The Road to Serfdom
          year: 1944
          says: >-
            Hayek argued that centrally directed schemes select for the people willing to
            do what direction requires, so the unscrupulous rise not by accident but
            because the structure has work only they will take on.
      - id: b
        label: >-
          Separate them. Her opportunism is a fact about her; the plan should be judged
          on whether it is right, then defended with safeguards against people like her.
        scores: { deontological: 0.7, contractarian: 0.5, certainty: 0.5 }
      - id: c
        label: >-
          She is the point. The theorist supplies the vocabulary and someone like her
          always supplies the will; that pairing is the actual historical mechanism.
        scores: { virtue: 0.7, consequentialist: 0.5, affect: -0.4 }
        evidence:
          who: Albert Camus
          work: The Rebel
          year: 1951
          says: >-
            Camus argued that rebellion turns murderous when it is handed a total
            justification, and read Dostoevsky's conspirators as the case where an
            abstract logic finds the men who will carry it out.
      - id: d
        label: >-
          Deal with her directly and leave the plan alone. Naming what she is doing, in
          the room, to her face, is the only thing that stops it.
        scores: { virtue: 0.8, care: 0.5, authority: 0.5 }
  - id: q3
    prompt: >-
      When the committee's first act is to expel a member, the author of the plan
      objects that this is a wasteful deviation from his system, declines to take part,
      and goes home. The expulsion proceeds without him.
    options:
      - id: a
        label: >-
          He is responsible for it. Designing the mechanism and then declining to operate
          it is not distance; it is the division of labour working as intended.
        scores: { deontological: 0.8, agency: 0.8, certainty: 0.5 }
      - id: b
        label: >-
          His walking out is the most useful information anyone has. A designer who will
          not stay in the room has told you what the design is.
        scores: { virtue: 0.8, consequentialist: 0.4, affect: 0.5 }
      - id: c
        label: >-
          He is not responsible, and pretending otherwise makes every theorist liable for
          the worst reader they ever had. Blame belongs to the people who voted.
        scores: { deontological: 0.7, existentialist: 0.4, agency: -0.7 }
      - id: d
        label: >-
          Forget him. There is a person being expelled tonight and the interesting
          question about the author of the plan can wait a week.
        scores: { care: 0.9, consequentialist: 0.4, scope: -0.5 }
  - id: q4
    prompt: >-
      Someone objects that this whole line of argument is a conservative alibi: point at
      the committee, and every proposal to share anything out gets shelved forever while
      the existing distribution — which nobody designed and nobody voted for — carries on.
    options:
      - id: a
        label: >-
          The objection is right. The status quo is also a coercive arrangement, and it
          is exempted from this scrutiny only because it is old.
        scores: { consequentialist: 0.8, care: 0.5, scope: 0.5 }
        evidence:
          who: G. A. Cohen
          work: "Why Not Socialism?"
          year: 2009
          says: >-
            Cohen argued that equality and community are plainly desirable when we test
            them on a small scale we all understand, and that objections almost always
            concern feasibility while presenting themselves as objections to the ideal.
      - id: b
        label: >-
          The objection is right about the alibi and wrong about the lesson. Redistribute
          by rules that apply to everyone, and refuse any scheme needing a body above
          them.
        scores: { contractarian: 0.9, consequentialist: 0.4, authority: 0.4 }
      - id: c
        label: >-
          The warning survives the alibi. The distinctive danger is the complete plan,
          not the redistribution — piecemeal changes can be reversed, blueprints cannot.
        scores: { consequentialist: 0.7, deontological: 0.5, certainty: -0.6 }
        evidence:
          who: Karl Popper
          work: The Open Society and Its Enemies
          year: 1945
          says: >-
            Popper distinguished piecemeal reform, which can be checked against results
            and undone, from utopian engineering, which needs a long horizon and
            therefore needs to suppress the criticism that would interrupt it.
      - id: d
        label: >-
          Both sides are arguing about systems. What settles it is who ends up holding a
          key to somebody else's door, and that is visible without any theory at all.
        scores: { care: 0.8, virtue: 0.5, affect: 0.6 }
outcomes:
  - id: where-it-terminates
    dominant: consequentialist
    label: Follow It to the End
    text: >-
      You judge a proposal by where it lands rather than by what it declares, and you
      treat the committee, the rota and the reporting as the actual content of the plan.
      This is the reading that makes Shigalyov worth arguing with. Its price is
      conservative by default: since almost any arrangement can be shown to terminate
      somewhere unpleasant if you extend it far enough, this instrument will nearly always
      be available to whoever wants nothing to change.
    base_rate: null
  - id: the-line-liberty
    dominant: deontological
    label: Some Things Are Not Tradeable
    text: >-
      You hold that a person's standing is not an input to a distribution — that no
      arithmetic about the nine tenths licenses anything over them — and you will say so
      before you know what the alternative costs. That is the position Shigalyov's own
      argument was constructed to embarrass, and it survives the embarrassment. What it
      costs is that you must accept the existing distribution's victims as the price of
      refusing the machinery, and you owe them a reason that is not merely that their
      suffering is traditional.
    base_rate: null
  - id: rules-not-rulers
    dominant: contractarian
    label: Rules, Not a Body Above Them
    text: >-
      Your test is whether the scheme needs somebody standing outside it with a power of
      override. If it does, you refuse it; if it can be run as rules that bind their
      authors, you will consider almost any content. This is the most workable answer in
      the file and the one that most nearly separates redistribution from Shigalyovism.
      Its weakness is that rules are administered, and the discretion you refused at the
      door tends to reappear in the person deciding what counts as compliance.
    base_rate: null
  - id: who-is-in-the-room
    dominant: virtue
    label: Watch Who Volunteers
    text: >-
      You read the situation through the people in it — the theorist who cannot stay for
      the consequences, the opportunist who has found her instrument — and you think the
      pairing, not the doctrine, is what does the damage. Dostoevsky's novel is built on
      exactly that observation. The limitation is that character is not a check: the plan
      will still be adopted, and having correctly identified everyone's motives leaves you
      with nothing to propose at the meeting.
    base_rate: null
  - id: the-one-being-expelled
    dominant: care
    label: There Is a Person at the Door
    text: >-
      You keep the argument anchored to whoever is actually about to lose something
      tonight, and you decline to let the general question postpone the particular one.
      That instinct is what keeps such rooms honest, and it is the thing every complete
      plan is designed to make you feel embarrassed about. Its cost is scale: the harms
      done by an arrangement to people you will never meet do not register on this
      instrument, and those are usually the larger ones.
    base_rate: null
---

## What it means

In Part Two of Dostoevsky's *Demons* (serialised 1871–72) a group of provincial
conspirators gather at Virginsky's house. One of them, Shigalyov, has written a book. He
explains its argument to the room, apologising in advance: he set out from the principle of
unlimited freedom, he says, and he has arrived at unlimited despotism. He adds that no
other solution to the social problem is possible.

The system itself is set out plainly by the character. Mankind is divided. One tenth
receives freedom of personality and unlimited rights over the remaining nine tenths; the
nine tenths surrender personality altogether and become something like a herd, and through
boundless obedience arrive at a condition of primeval innocence — though they will still
work. Equality is reached not by raising the low but by levelling: Cicero's tongue is cut
out, Copernicus's eyes are put out, Shakespeare is stoned. That last formulation is not
Shigalyov's. It is Pyotr Verkhovensky's, the organiser of the cell, who names the whole
doctrine **Shigalyovism** while explaining to Stavrogin what he intends to do with it — and
who has no interest in the theory except as a licence. Verkhovensky's addition is
surveillance: every member of the society watches the others and is obliged to report.

Two things about the scene are usually mislaid. The first is whose mouths these lines are
in. Shigalyov is a character invented to be embarrassing, and *Demons* is a hostile novel:
Dostoevsky wrote it after the Nechaev affair of 1869, in which a student named Ivanov was
murdered by his own revolutionary cell, and Verkhovensky is drawn from Sergei Nechaev,
whose *Catechism of a Revolutionary* is a real document with real instructions. Nothing
here is Dostoevsky's doctrine. It is his caricature of somebody else's, sharpened until it
argues.

The second is what Shigalyov does later. When the cell decides to murder Shatov, Shigalyov
announces that the killing is a wasteful deviation from his system, declines to take part,
and walks out. The systematiser withdraws. The practical man does the work. The novel's
suggestion is that this is not a betrayal of the system but its normal operation.

## What it suggests

Taken as a claim rather than a joke, Shigalyovism says that a sufficiently thorough
commitment to equality contains its own reversal. If people differ in talent, energy and
ambition, then leaving them free will reproduce inequality; so real equality requires
continuous correction; and continuous correction requires a body empowered to correct,
which is by construction unequal. The argument does not depend on anyone's bad faith. It is
what Isaiah Berlin's *Two Concepts of Liberty* (1958) tracked under the heading of positive
liberty, and what J. L. Talmon's *The Origins of Totalitarian Democracy* (1952) traced from
Rousseau to the Jacobins.

If it is sound, the practical rule is not "want less equality" but "refuse any scheme that
requires someone standing outside the scheme". A redistribution effected by rules that bind
their authors is a different object from one administered by a body with discretion, even
when the resulting numbers are identical.

**The strongest objection is that this is an alibi.** The existing distribution is also
coercive — it is enforced by police, courts and property law — and it escapes this scrutiny
only because nobody drafted it at a meeting. Point at Shigalyov's committee and any
proposal to share anything out can be shelved indefinitely, while an unplanned arrangement
that nobody voted for continues to do its work quietly. G. A. Cohen's *Why Not Socialism?*
(2009) makes the sharper version: objections of this sort are almost always about
feasibility and almost always dressed as objections to the ideal.

There is a second objection, from the other direction, which weakens the doctrine by
generalising it. Robert Michels' *Political Parties* (1911) found that any large
organisation, including determinedly democratic ones, throws up a ruling minority. If that
is right then Shigalyov has discovered a fact about organisation rather than a fact about
equality, and pinning it on egalitarianism is a smear.

## The problem

Fennel Court is a hundred and ninety flats, occupied for eleven years, legalised for three.
It now has to write a constitution, because the bank will not lend to a body that does not
have one.

Theo has done the work nobody else would do. His draft is a hundred and forty pages and
it is not stupid. He begins from a principle everyone in the building says they hold: that
nobody at Fennel Court should have power over anybody else. He then demonstrates, with
eleven years of the building's own minutes as evidence, that under the current
arrangements four households make every decision, that the cleaning is done by the same
nine people it was done by in 2015, and that the flats with the balconies went to friends
of the original committee. His remedy is a Standing Group with power to reassign labour and
to override any tenancy, a compulsory rota, and a monthly return in which each household
records what the households on its landing have contributed. He is entirely open that this
is coercive. He says the alternative is the coercion already happening, which has the
advantage of being invisible.

Rae has read the draft twice. Rae does not care about any of it. What Rae has noticed is
that the Standing Group can end a tenancy, and that there are four people in the building
she wants gone. She has begun explaining to the people on the second floor how much better
things would be.

The vote is in a fortnight. Theo asked you last night whether you had found an error.

## The questions

**1. The draft.** A worked plan for real equality that requires a standing override, a
compulsory rota, and members reporting on one another.

- The plan refutes the premise; something went wrong several steps back.
- The plan is what equality costs, and refusing the machinery is bluffing.
- Nothing follows about equality — all plans of this kind produce an enforcing minority.
- Keep the goal, drop the completeness: basic liberties first, distribution inside them.

**2. Rae.** She does not care about the theory. She has noticed what the committee can do.

- She is the real objection: a structure is what it can be used for.
- Separate them — judge the plan, then guard it against her.
- She is the point; theorist plus operator is the historical mechanism.
- Deal with her in the room, to her face, and leave the plan alone.

**3. The walkout.** The plan's author calls the first expulsion a wasteful deviation and
goes home. It proceeds anyway.

- He is responsible; that is the division of labour working as designed.
- His walking out is the most useful information available about the design.
- He is not responsible; blame belongs to the people who voted.
- There is a person being expelled tonight; his position can wait.

**4. The alibi.** Point at the committee and nothing is ever shared out again.

- Correct. The status quo is coercive too and is exempt only for being old.
- Right about the alibi, wrong about the lesson: redistribute by rules binding their authors.
- The warning survives: the danger is the complete plan, not the redistribution.
- Both of you are arguing about systems. Watch who ends up holding a key to a door.

## Reading your answer

**Follow It to the End.** You judge by termination rather than declaration, which is what
makes Shigalyov worth arguing with rather than laughing at. It is conservative by default,
since almost anything can be extended into something unpleasant.

**Some Things Are Not Tradeable.** You refuse to let a person's standing become an input to
a distribution, and you say so before counting the cost. Shigalyov's argument was built to
embarrass exactly this, and you survive it — at the price of owing the status quo's victims
a reason that is not simply that their suffering is traditional.

**Rules, Not a Body Above Them.** Your test is whether the scheme needs someone standing
outside it. That nearly separates redistribution from Shigalyovism, which is the most
useful thing anyone can do with this material. Discretion tends to reappear in whoever
decides what counts as compliance.

**Watch Who Volunteers.** You read the pairing of theorist and operator as the real
mechanism, which is how the novel itself is built. Character is not a check: you will have
everyone's motives correctly identified and nothing to move at the meeting.

**There Is a Person at the Door.** You anchor the argument to tonight's actual loss and
refuse to let the general question postpone it. The harms done at scale, to people you will
never meet, do not register here, and those are usually the larger ones.

## Sources

- Fyodor Dostoevsky, *Demons* (1871–72) — Part Two, the meeting at Virginsky's, where the
  character Shigalyov presents his system; and Pyotr Verkhovensky's use of it with
  Stavrogin. Also translated as *The Possessed* and *The Devils*.
- Sergei Nechaev, *Catechism of a Revolutionary* (1869) — the document behind Verkhovensky;
  the Ivanov murder of 1869 is the case the novel is written about.
- Isaiah Berlin, *Two Concepts of Liberty* (Clarendon Press, 1958) — positive liberty and
  the road from self-realisation to coercion.
- J. L. Talmon, *The Origins of Totalitarian Democracy* (Secker & Warburg, 1952) — the
  messianic strand in democratic thought.
- Robert Michels, *Political Parties* (1911) — the oligarchical tendency of organisation as
  such.
- Albert Camus, *The Rebel* (1951) — rebellion, total justification, and Dostoevsky's
  conspirators; Camus later adapted *Demons* for the stage.
- G. A. Cohen, *Why Not Socialism?* (Princeton University Press, 2009) — the reply, and the
  charge that feasibility objections masquerade as objections to the ideal.
