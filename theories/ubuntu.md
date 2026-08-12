---
id: ubuntu
title: Ubuntu
category: theory
tradition: african-philosophy
philosophers:
  - Desmond Tutu
  - Mogobe Ramose
era: "c. 1990"
tags: [community, personhood, reconciliation, relationship, restorative-justice]
sources:
  - author: Desmond Tutu
    title: No Future Without Forgiveness
    published: Rider / Doubleday
    year: 1999
  - author: Mogobe B. Ramose
    title: African Philosophy through Ubuntu
    published: "Mond Books, Harare"
    year: 1999
  - author: Thaddeus Metz
    title: "Toward an African Moral Theory"
    published: "Journal of Political Philosophy 15(3), 321–341"
    year: 2007
  - author: Michael Onyebuchi Eze
    title: "Intellectual History in Contemporary South Africa"
    published: Palgrave Macmillan
    year: 2010
  - author: Bernard Matolino and Wenceslaus Kwindingwi
    title: "The end of ubuntu"
    published: "South African Journal of Philosophy 32(2), 197–205"
    year: 2013
questions:
  - id: q1
    prompt: >-
      A commission offers amnesty to perpetrators of political violence who disclose
      everything they did, in public, to the families of the people they killed.
      Those who confess fully are not prosecuted. Those families get the truth and
      no trial.
    options:
      - id: a
        label: >-
          Take the trade. Restoring the fabric between these people — and restoring
          the perpetrator to it — is worth more than a sentence served.
        scores: { care: 0.9, virtue: 0.5, agency: -0.3 }
      - id: b
        label: >-
          Prosecute. What the families are owed is justice, and justice is not a
          contribution to social harmony that can be waived for the greater good.
        scores: { deontological: 1.0, certainty: 0.6, authority: 0.4 }
      - id: c
        label: >-
          Take the trade, but for the plainer reason: trials would have restarted
          the war, and the truth would have been buried with the files.
        scores: { consequentialist: 1.0, scope: 0.5 }
      - id: d
        label: >-
          No one could have agreed in advance to a scheme where the price of the
          country's peace is their own claim against the man who shot their son.
        scores: { contractarian: 0.9, deontological: 0.4, scope: 0.4 }
  - id: q2
    prompt: >-
      A young man educated on the earnings of an extended family moves to the city,
      takes a good job, and stops sending anything home. He says he did not ask
      them to pay and does not accept a debt he never signed.
    options:
      - id: a
        label: >-
          He owes them. The capacities he is now selling were made by other people,
          and he cannot both use them and disown where they came from.
        scores: { care: 1.0, scope: -0.5 }
      - id: b
        label: >-
          He is right in principle. Obligations you never took on are not
          obligations, however much was done for you.
        scores: { contractarian: 0.9, egoist: 0.4, authority: 0.5 }
      - id: c
        label: >-
          The question is not the debt but the man. Someone who can do this has
          become something, and it is not admirable.
        scores: { virtue: 1.0, affect: 0.4 }
      - id: d
        label: >-
          Obligation should track need, not kinship. The village has a claim only
          if it is needier than everyone else his money could reach.
        scores: { consequentialist: 0.9, scope: 1.0 }
  - id: q3
    prompt: >-
      A woman in a small town accuses a respected man of theft. She is right. The
      elders press her to accept a private settlement and a public reconciliation,
      because a prosecution would tear the place in half.
    options:
      - id: a
        label: >-
          The pressure is not oppression. The community is declining to give up on
          either of them, and reconciliation is a harder demand than punishment.
        scores: { care: 0.7, relativist: 0.3, agency: -0.3 }
      - id: b
        label: >-
          This is the standing danger of a communal ethic: harmony is preserved and
          the person who was wronged pays for it.
        scores: { deontological: 0.8, authority: 1.0 }
      - id: c
        label: >-
          Real harmony is not agreement. A tradition worth the name includes public
          rebuke, and elders who forgot that are not applying it but hiding behind it.
        scores: { virtue: 0.8, care: 0.4, authority: 0.4 }
      - id: d
        label: >-
          Weigh it: what a split town does to everyone in it over the next decade
          against what one unpunished theft does.
        scores: { consequentialist: 1.0, scope: 0.4, affect: -0.4 }
  - id: q4
    prompt: >-
      Critics argue that ubuntu as now invoked — in constitutions, corporate
      trainings and political speeches — is a modern construction being sold as
      ancient wisdom, and that it mostly serves whoever is invoking it.
    options:
      - id: a
        label: >-
          Its history is beside the point. Either "a person is a person through
          other persons" is true about human beings or it is not.
        scores: { deontological: 0.5, virtue: 0.6, certainty: 0.6 }
      - id: b
        label: >-
          The critique lands. Watch who says it: it is most often quoted downward,
          by people asking others to absorb a cost quietly.
        scores: { contractarian: 0.6, egoist: 0.3, authority: 0.8 }
      - id: c
        label: >-
          Every ethical tradition is a construction that a community keeps building.
          That is not a charge against it; it is what a living tradition is.
        scores: { relativist: 0.4, virtue: 0.5, certainty: -0.6 }
      - id: d
        label: >-
          Judge it by what it did. A country that chose confession over reprisal
          did something few others managed, and the idea was load-bearing.
        scores: { consequentialist: 0.9, care: 0.4 }
outcomes:
  - id: the-fabric
    dominant: care
    label: The Fabric Between People
    text: >-
      You take relationship to be prior to obligation rather than a source of it — the
      claims people have on you exist because you are already woven into them, not because
      you signed anything. This tracks how nearly all real moral life feels from the
      inside, and it explains why abandonment is a wrong even where no rule was broken.
      What it does not settle is the case where the fabric itself is the problem: a
      community can be close-knit and also unjust to someone inside it, and closeness will
      not tell you which.
    base_rate: null
  - id: what-it-makes-of-you
    dominant: virtue
    label: What It Makes of a Person
    text: >-
      You read these cases as questions about character formed in company — that a person
      becomes someone through other people, and that the test is what the community and
      the individual are making of each other. This is the reading closest to how Tutu and
      Ramose both state the idea. Its cost is indeterminacy: told that a good person would
      neither abandon the village nor be swallowed by it, you still have to decide what to
      send home this month.
    base_rate: null
  - id: the-claim-that-stands
    dominant: deontological
    label: The Claim That Stands
    text: >-
      You hold that some claims are not available for trade — that the woman who was
      robbed and the family whose son was shot hold something that no amount of communal
      benefit can spend on their behalf. This is the strongest guard against a
      collectivism that quietly bills the weakest member. The price is that you must be
      willing to accept the wreckage: sometimes insisting on the claim really does mean
      the town splits, and you have to say that this was worth it.
    base_rate: null
  - id: what-it-costs-everyone
    dominant: consequentialist
    label: What It Costs Everyone
    text: >-
      You resolve these by looking at what actually happens to people, and you are willing
      to say that reconciliation was right because the alternative was worse. That is a
      defensible reading of the amnesty and probably a true one. Note what it implies: you
      are not committed to ubuntu at all, only to the fact that in this instance it paid,
      and you would drop it in the case where the arithmetic ran the other way.
    base_rate: null
  - id: what-was-agreed
    dominant: contractarian
    label: What Was Agreed
    text: >-
      You want obligations traceable to something a person could have accepted, and you are
      suspicious of debts that arrive already incurred. This is the sharpest objection to
      ubuntu and it is not a trivial one — communal duty has been used to bill people who
      were never asked. Its own exposure is that almost nothing that made you was
      consented to: your language, your upbringing, the people who fed you. If unchosen
      debts are not debts, most of what you owe anyone disappears.
    base_rate: null
---

## What it means

*Ubuntu* is a term from the Nguni languages of southern Africa — isiZulu, isiXhosa,
siSwati — usually unpacked by the proverb *umuntu ngumuntu ngabantu*: a person is a person
through other persons. The claim is not the sentimental one that people need company. It
is a claim about what a person *is*: personhood is an achievement realised in relationship,
not a property each individual carries into the world already complete.

Two consequences follow immediately and neither is obvious. First, personhood admits of
degrees. On this account you can become more of a person, or less, depending on how you
stand toward others, which is why the strongest thing that can be said of someone in these
languages is that they *have* ubuntu — that they are generous, hospitable, available. The
strongest condemnation is not that they broke a rule but that they are not yet fully a
person. Second, a wrong is a tear in something, and the response to a wrong is repair. This
is why ubuntu is so often paired with restorative rather than retributive justice.

Desmond Tutu made the term internationally known through his account of South Africa's
Truth and Reconciliation Commission in *No Future Without Forgiveness* (1999), where he
explicitly set ubuntu against the Nuremberg model: not because the perpetrators deserved
less, but because the aim was to restore a society in which victims and perpetrators would
have to go on living. Mogobe Ramose, in *African Philosophy through Ubuntu* (1999), argues
for something more structural — that *ubu-ntu* names a metaphysics of becoming, in which
being is never finished and never solitary, and that reading it as a set of nice values is
already a mistranslation. Thaddeus Metz has since tried to state it as a general moral
theory: roughly, that an act is right insofar as it honours relationships of identifying
with others and caring for their quality of life.

## What it suggests

If personhood is constituted by relationship, then the standard Western starting point —
an individual with rights and interests, who then enters into relations — is not merely
incomplete but backwards. Obligation does not have to be generated out of consent, because
you were never outside the web that generates it. The young man who says he never asked to
be educated is, on this view, making a category mistake: the "he" doing the refusing was
assembled by the very people he is refusing.

It also reframes wrongdoing. A thief has damaged a relationship, and the community's
interest is in restoration — which is a heavier demand than punishment, not a lighter one,
since it requires the wrongdoer to face the person harmed and remain among them afterwards.
Tutu's version has real teeth: amnesty at the TRC was conditional on full public
disclosure, not offered for silence.

The objections are serious and come from inside the tradition as well as outside. The
philosophical one is that a communal ethic has no reliable brake when the community is
wrong. If the good is harmony, the person whose grievance disturbs the harmony is
structurally at a disadvantage, and this falls hardest on those with least standing —
women, the young, dissenters, anyone whose complaint is inconvenient. Tutu's own church
has been on both sides of that.

The historical objection is sharper. Bernard Matolino and Wenceslaus Kwindingwi have argued
that ubuntu as now deployed is a post-1994 political project rather than a recovered
philosophy — a "grand narrative" mobilised by elites, invoked to ask ordinary people for
patience. Michael Onyebuchi Eze makes a subtler version: the concept has a traceable modern
intellectual history, and presenting it as timeless African essence is itself a colonial
habit of thought. Defenders reply that every ethical tradition is continuously reconstructed
and that this tells against none of them. Whether that reply satisfies you is part of what
this entry is testing.

## The problem

Nomsa chairs the school governing body in a township of about nine thousand people.

The treasurer, Mr Dube, has taken money. Not a great deal — around forty thousand rand over
two years, from the feeding scheme and the uniform fund. She has the bank records. He is
sixty-one, he built the school's first two classrooms with his own hands in 1987, and he
buried his wife in March. He has already offered to repay it in instalments and to stand up
at the next parents' meeting and say what he did.

The alternative is a police docket. It would be a clean, correct thing to do. It would also
be in the newspaper within a week, it would end him, and it would split the governing body
— four of its members are people he taught.

What Nomsa keeps returning to is Mrs Sithole, whose two children ate less at school for
two years while this was happening, and who has not been asked. If Nomsa takes the
confession-and-repayment route, she will be spending something that belongs to Mrs Sithole:
her claim, her right to have the state take this seriously on her behalf. She will be
spending it for a reason she believes in — that the town has to hold together, that Dube
is not disposable, that a criminal record repairs nothing — and she will not have asked
permission.

The docket is at the station. The parents' meeting is on Thursday.

## The questions

**1. The amnesty.** Perpetrators who disclose everything in public to the families of the
people they killed are not prosecuted. The families get the truth and no trial.

- Take the trade. Restoring the fabric between these people — and the perpetrator to it —
  is worth more than a sentence served.
- Prosecute. Justice is not a contribution to social harmony that can be waived.
- Take the trade for the plainer reason: trials would have restarted the war.
- No one could have agreed in advance to a scheme where the price of peace is their own
  claim.

**2. The remittance.** A young man educated on his extended family's earnings stops sending
money home, saying he never signed anything.

- He owes them; the capacities he is selling were made by other people.
- He is right in principle. Obligations you never took on are not obligations.
- The question is not the debt but what he has become.
- Obligation should track need, not kinship.

**3. The theft.** A woman's accusation against a respected man is true. The elders press her
to settle privately rather than split the town.

- The pressure is not oppression. Reconciliation is a harder demand than punishment.
- This is the standing danger: harmony is preserved and the person wronged pays for it.
- Real harmony includes public rebuke; elders who forgot that are hiding behind the
  tradition.
- Weigh what a split town does to everyone against what one unpunished theft does.

**4. The critique.** Ubuntu as now invoked may be a modern construction sold as ancient
wisdom.

- Beside the point. Either the claim about persons is true or it is not.
- The critique lands — notice it is usually quoted downward.
- Every tradition is a construction a community keeps building.
- Judge it by what it did; the idea was load-bearing in 1995.

## Reading your answer

**The Fabric Between People.** You take relationship as prior to obligation rather than a
source of it. That tracks how moral life actually feels and explains why abandonment wrongs
someone even when no rule was broken. It leaves you without a tool for the case where the
fabric is itself the problem — communities can be close and unjust at once, and closeness
does not tell you which one you are in.

**What It Makes of a Person.** You hear these as questions about character formed in
company. That is the reading closest to how Tutu and Ramose each state it. Its price is
indeterminacy: knowing that a good person neither abandons the village nor is swallowed by
it still leaves you deciding what to send this month.

**The Claim That Stands.** You hold that some claims cannot be spent on the holder's behalf.
This is the strongest guard against a collectivism that bills its weakest members. The cost
is that you must be prepared to accept the wreckage and say it was worth it — because
sometimes insisting really does split the town.

**What It Costs Everyone.** You judge by what happens to people, and you will say
reconciliation was right because the alternative was worse. That is probably true of 1995.
Notice that it commits you to nothing about ubuntu: you would abandon it in the case where
the numbers ran the other way, which means the idea was never doing the work.

**What Was Agreed.** You want obligations traceable to something a person could have
accepted, and you distrust debts that arrive already incurred. It is the sharpest objection
here. Its exposure is that almost nothing that made you was consented to — your language,
your upbringing, the people who fed you — and if unchosen debts are not debts, very little
of what you owe anyone survives.

## Sources

- Desmond Tutu, *No Future Without Forgiveness* (Rider/Doubleday, 1999).
- Mogobe B. Ramose, *African Philosophy through Ubuntu* (Mond Books, Harare, 1999).
- Thaddeus Metz, "Toward an African Moral Theory", *Journal of Political Philosophy* 15(3)
  (2007), 321–341 — the attempt to state ubuntu as a general normative theory.
- Michael Onyebuchi Eze, *Intellectual History in Contemporary South Africa* (Palgrave
  Macmillan, 2010) — on the traceable modern history of the concept.
- Bernard Matolino and Wenceslaus Kwindingwi, "The end of ubuntu", *South African Journal
  of Philosophy* 32(2) (2013), 197–205; Metz replied in the same journal the following
  year.
