---
id: porcupine-dilemma
title: The Porcupine Dilemma
category: thought-experiment
tradition: pessimism
philosophers:
  - Arthur Schopenhauer
era: "1851"
tags: [intimacy, distance, politeness, loneliness, society]
sources:
  - author: Arthur Schopenhauer
    title: "Parerga and Paralipomena, Volume II, chapter 31, section 396"
    published: Berlin, A. W. Hayn
    year: 1851
  - author: Sigmund Freud
    title: Group Psychology and the Analysis of the Ego
    published: "Internationaler Psychoanalytischer Verlag, Vienna"
    year: 1921
  - author: Arthur Schopenhauer
    title: "The Wisdom of Life (Aphorismen zur Lebensweisheit), in Parerga and Paralipomena, Volume I"
    published: Berlin, A. W. Hayn
    year: 1851
questions:
  - id: q1
    prompt: >-
      Two friends of yours have moved in together after nine years of a
      relationship that worked at a distance. Within a year they are quarrelling
      over nothing, in the way that people do when there is no longer any nothing
      left between them.
    options:
      - id: a
        label: >-
          They are learning the right distance and the quarrels are the
          instrument. Friction is how the spacing gets found.
        scores: { virtue: 0.8, care: 0.5, certainty: -0.4 }
      - id: b
        label: >-
          The distance was doing work neither of them saw, and removing it removed
          the relationship. Some things only survive at range.
        scores: { egoist: 0.7, relativist: 0.4, scope: -0.6 }
      - id: c
        label: >-
          Closeness is supposed to hurt. A love with no capacity to wound you is
          not intimacy, it is company.
        scores: { care: 1.0, virtue: 0.4, affect: 0.7 }
      - id: d
        label: >-
          They need rules, not feelings. Agreed hours, agreed rooms, agreed
          silences. Most of what wrecks households is unnegotiated.
        scores: { contractarian: 0.9, certainty: 0.4 }
  - id: q2
    prompt: >-
      A colleague is warm, funny and constantly present, and treats every
      professional courtesy as coldness. You are polite with him and he has begun
      to say, publicly and not entirely as a joke, that you are a closed person.
    options:
      - id: a
        label: >-
          Politeness is not coldness, it is the coat you wear so that neither of
          you gets stuck to the other. Keep wearing it.
        scores: { virtue: 0.9, egoist: 0.3, certainty: 0.5 }
      - id: b
        label: >-
          He is right and the coat is a defence. You have made distance into a
          personality and called it manners.
        scores: { care: 0.9, existentialist: 0.4, affect: 0.6 }
      - id: c
        label: >-
          Neither of you owes the other a temperature. Workplaces run on terms
          people can decline, and warmth is not one of the terms.
        scores: { contractarian: 1.0, authority: 0.3, scope: 0.4 }
      - id: d
        label: >-
          Give him what he wants and watch what happens. Most demands for
          closeness dissolve the moment they are met.
        scores: { egoist: 0.8, consequentialist: 0.4, affect: -0.5 }
  - id: q3
    prompt: >-
      Your brother, who has had a bad two years, asks whether he can stay with you
      and your family indefinitely. You have the room. You also know, from having
      done this once before, roughly what it will do to the house.
    options:
      - id: a
        label: >-
          Yes, without conditions. He is your brother and a family that meters its
          help is not offering help.
        scores: { care: 1.0, deontological: 0.4, scope: -0.7 }
      - id: b
        label: >-
          Yes, with an end date and written terms, because that is what makes the
          yes survivable and the alternative is a slow no.
        scores: { contractarian: 1.0, care: 0.4, certainty: 0.3 }
      - id: c
        label: >-
          No, and say why plainly. Refusing at the right distance preserves the
          relationship that agreeing would consume.
        scores: { virtue: 0.9, egoist: 0.4, certainty: 0.4 }
      - id: d
        label: >-
          No. Your household is yours and the fact that you can absorb a cost is
          not a reason you must.
        scores: { egoist: 1.0, scope: -0.8 }
outcomes:
  - id: the-right-distance
    dominant: virtue
    label: The Art of the Spacing
    text: >-
      You treat the finding of distance as a skill rather than a compromise, and
      you take manners seriously as the thing that lets people who cannot fuse
      still live near each other. Schopenhauer would recognise you, and so would
      anyone who has watched a household destroyed by unlimited access. What it
      costs you is that the same skill, practised well, produces people nobody ever
      gets close to, and from inside it is very hard to tell mastery from
      avoidance.
    base_rate: null
  - id: the-quills-are-the-point
    dominant: care
    label: Close Enough to Be Hurt
    text: >-
      You hold that a relation which cannot wound you is not the relation you were
      looking for, and that the pricking is not the failure of intimacy but its
      evidence. That is the honest answer to the parable, which describes the cost
      of closeness without ever arguing that the cost is not worth paying. The
      price is that you are committing to a life with recurring damage in it, and
      you cannot rule out that some of the people who hurt you were simply people
      you should have stood further from.
    base_rate: null
  - id: the-negotiated-distance
    dominant: contractarian
    label: Terms Rather Than Temperature
    text: >-
      You would rather settle the spacing explicitly than let it be found by
      collision, and you notice that most domestic wreckage happens in the space
      nobody named. Terms make a yes survivable that would otherwise have to be a
      no. What terms cannot do is generate the thing they regulate. Nobody has ever
      been loved on schedule, and a relationship that consists entirely of
      well-drafted boundaries has solved the porcupine problem by removing the
      porcupines.
    base_rate: null
  - id: the-self-sufficient
    dominant: egoist
    label: The Warmth You Can Do Without
    text: >-
      You think the need for others is largely a need that can be reduced, and you
      would rather be cold than compromised. Schopenhauer agrees with you and said
      so at length, holding that a man of inner richness needs little from society
      and pays dearly whenever he seeks it. The difficulty is that this is
      unfalsifiable from inside. Everyone who has retreated reports contentment,
      and the report is the same whether the retreat was wisdom or fear.
    base_rate: null
---

## What it means

The parable is four sentences long and Schopenhauer buried it in the second volume
of *Parerga and Paralipomena* (1851), among the similes and fables at section 396.

A group of porcupines crowd together on a cold day for warmth. Their quills prick
one another, so they move apart, and then the cold drives them back together, and
they are pricked again. They oscillate until they find a middling distance at which
the cold is bearable and the pricking is bearable, and neither is solved. That
middling distance, Schopenhauer says, is politeness and good manners. Whoever cannot
tolerate it is told to keep away — and the man with enough inner warmth of his own
prefers to stay out of the huddle entirely, avoiding both the giving and the
receiving of injury.

Two things about the parable are usually missed. The first is that it is not about
romantic love; Schopenhauer offers it as an account of *society* in general, of why
human beings need each other, cannot bear each other at close range, and have
invented an elaborate technology of manners to manage the fact. The second is that
it has no happy ending. The porcupines do not solve the problem. They find a
distance at which both discomforts are tolerable, and the arrangement is permanent.

Freud picked the fable up in 1921, in *Group Psychology and the Analysis of the
Ego*, using it to introduce what he called the ambivalence at the heart of every
close relationship — that intimacy reliably generates hostility, and that the
tenderness in most long attachments sits directly on top of an aversion that has
been suppressed rather than dissolved.

## What it suggests

If the parable is right, then a great deal of what we treat as failure is structure.
The couple who cannot live together and cannot live apart, the family that is
loving at Christmas and unbearable in week three, the friendship that thrives at two
hundred miles and curdles at two — none of these are cases of people getting it
wrong. They are cases of people discovering the spacing empirically, by the only
method available, which is being pricked.

It also makes an unfashionable case for formality. Manners, on this account, are
not insincerity. They are the apparatus that lets beings who cannot merge live at
close quarters without constant injury, and the demand that everyone be authentic
and available at all times is a demand to remove the padding. Anyone who has worked
somewhere that abolished professional distance in favour of family feeling knows
what is generated in its place.

The objection is that Schopenhauer has universalised his own temperament. He lived
alone with a series of poodles, quarrelled with almost everyone, and had a documented
talent for finding other people intolerable; the parable can be read as a
constitution written for one citizen. Human beings are not in fact quilled, and
plenty of people live in sustained proximity — households, crews, monasteries, long
marriages — without perpetual injury, which suggests the pricking is not a property
of contact but of particular contacts.

There is a second, sharper objection. The parable smuggles in a conclusion under the
guise of a description. It says that closeness costs, which is true, and then it
implies that the correct response to a cost is to reduce exposure. But most people
who have loved anyone report the cost as inseparable from the thing, not as an
overhead on it. The quills are not a design flaw in intimacy. On this reading they
are what tells you the distance has actually closed.

## The problem

Rasheed and his mother have not lived under one roof since he was nineteen. They
speak on Sundays, and for twenty-two years those calls have been the best hour of
his week — funny, unhurried, affectionate in a way neither of them manages face to
face.

She is now eighty-one and cannot safely be alone. There are three options. She can
go into a home twenty minutes from him, which she can afford and does not want. She
can have carers four times a day in her own flat, which is workable for perhaps
another year. Or she can move into the room at the back of his house, which his wife
has offered without enthusiasm and his mother would accept in an instant.

Rasheed knows what the third option contains. He knows how she is about the kitchen,
and how he is about being managed, and he can predict with unpleasant accuracy the
month in which the Sunday calls will stop being the best hour of his week because
there will no longer be a week to have an hour in. He also knows that choosing the
home means choosing, deliberately, to keep his mother at the distance that made him
able to love her — and that she will experience this as being put away by a son who
had a spare room.

There is no option in which he keeps both the closeness and the affection. He has to
decide which of the two he was actually protecting all these years.

## The questions

**1. The friends who moved in.** Nine years at a distance, then a year of quarrelling
over nothing.

- They are learning the right distance and the quarrels are the instrument.
- The distance was doing work neither saw; some things only survive at range.
- Closeness is supposed to hurt. A love that cannot wound you is company.
- They need rules, not feelings. Most of what wrecks households is unnegotiated.

**2. The colleague who calls you closed.** He treats professional courtesy as
coldness and says so publicly.

- Politeness is not coldness; it is the coat that stops you sticking to each other.
- He is right, and you have made distance into a personality and called it manners.
- Neither of you owes the other a temperature.
- Give him what he asks for and watch how fast the demand dissolves.

**3. Your brother's room.** He asks to stay indefinitely. You have the room and you
know what it will do to the house.

- Yes, without conditions. A family that meters its help is not helping.
- Yes, with an end date and written terms, which is what makes the yes survivable.
- No, and say why plainly; refusing preserves what agreeing would consume.
- No. Being able to absorb a cost is not a reason you must.

## Reading your answer

**The Art of the Spacing.** You treat distance as a skill and manners as
load-bearing rather than decorative, which is precisely Schopenhauer's point and is
confirmed by every household ruined by unlimited access. The cost is that the skill,
practised well, produces people nobody ever reaches — and from the inside, mastery
and avoidance feel identical. Rasheed will choose the home and be able to defend it
for years.

**Close Enough to Be Hurt.** You hold that a relation which cannot injure you is not
the one you were after, and that the pricking is evidence rather than failure. The
parable never actually argues against you; it describes a cost and lets you decide
whether to pay. What you are committing to is a life with recurring damage in it,
and you will not always be able to tell the people who hurt you because you were
close from the people you should have stood further from.

**Terms Rather Than Temperature.** You want the spacing named rather than discovered
by collision, and you are right that most domestic wreckage happens in the space
nobody agreed. Terms turn an impossible yes into a survivable one. What terms cannot
do is produce the thing they govern: nobody has been loved on schedule, and a
relationship consisting entirely of well-drafted boundaries has solved the porcupine
problem by removing the porcupines.

**The Warmth You Can Do Without.** You think the need for others is mostly
reducible, and you would rather be cold than entangled. Schopenhauer is on your side
and argued it at length in *The Wisdom of Life* — the man of inner richness needs
little and pays too much whenever he seeks company. The difficulty is that you cannot
audit this from inside. Everyone who has withdrawn reports contentment, and the
report reads the same whether the withdrawal was judgement or fear.

## Sources

- Arthur Schopenhauer, *Parerga and Paralipomena*, Volume II (1851), chapter 31,
  section 396 — the porcupine parable in full.
- Arthur Schopenhauer, "Aphorisms on the Wisdom of Life", in *Parerga and
  Paralipomena*, Volume I (1851), on solitude and the costs of society.
- Sigmund Freud, *Group Psychology and the Analysis of the Ego* (1921), which
  retells the fable to introduce ambivalence in close relationships.
