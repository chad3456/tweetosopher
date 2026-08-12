# The Test of Morality — the corpus

352 entries. 266 named thinkers. 108 traditions, from Ptahhotep around 2400 BCE to
arguments still being had this decade.

Each entry is one file: an idea from moral philosophy, explained, then turned into
questions that find out what you actually think about it.

| category | what it is | count |
| --- | --- | --- |
| `theory` | a worked-out account of what makes acts right | 201 |
| `principle` | a rule or maxim you could act on | 62 |
| `thought-experiment` | a constructed case built to isolate one variable | 35 |
| `paradox` | a place where plausible commitments collide | 30 |
| `term` | a piece of vocabulary that changes what you can notice | 24 |

## What this is for

The test asks you questions. Your answers are scored on ten **framework axes** — which
moral theory your judgements resemble — and five signed **disposition axes** — what kind of
moral temperament they express. `theories/SCHEMA.md` §1 is the full vocabulary, and it is
closed: no entry may invent an axis, which is what lets 352 separately written files add
up to one instrument rather than 352 unrelated quizzes.

The result you get is your own answer profile, computed: *"64% consequentialist, 21 points
clear of deontological."* That figure is checkable arithmetic on what you actually
clicked. It is **not** a claim about how other people answer — see the honesty rules.

## Reading one entry

Every file has the same six sections, in this order:

- **What it means** — the idea in its author's terms, naming the work it comes from.
- **What it suggests** — what follows if you take it seriously, including the strongest
  objection. An entry that only advocates is propaganda, so every entry argues with itself.
- **The problem** — a concrete scenario with a decision in it. Not a restatement.
- **The questions** — the same questions the app asks, so the file stands alone.
- **Reading your answer** — what each result commits you to, and what it costs.
- **Sources** — the works. See below.

No entry has a right answer. Every option in every question set is meant to be a position
a thoughtful person actually holds; an option nobody would pick is a wasted slot that
skews the score. If an entry reads as though it is steering you, that is a bug in it.

## Two honesty rules

**No URLs in sources.** Not a style preference. This repository is built in an environment
whose egress proxy blocks `plato.stanford.edu`, `pnas.org` and `pubmed.ncbi.nlm.nih.gov`
among others, so a link written into an entry could not be checked before shipping — and an
unchecked link is a guess wearing the costume of a citation. Sources are bibliographic:
author, title, where published, year. Verifiable from any library, and they cannot rot.

**No invented statistics.** An entry may carry a `base_rate` — the share of people who
answered a given way — only when a real published study supplies that exact figure *and*
that study is in its sources. Almost every entry is therefore `null`, and the app reports
only your own computed result. "72% of people pull the lever" would be a lie no reader
could detect, which is the only kind that matters.

Both rules are enforced by `scripts/validate-theories.mjs`, not left to good intentions.

## Working on the corpus

```bash
node scripts/build-registry.mjs           # regenerate _registry.json from the roster
node scripts/validate-theories.mjs        # check every entry against SCHEMA.md
node scripts/validate-theories.mjs --batch 7   # check one slice
```

`_registry.json` is generated — never edit it. To add or rename an entry, edit the tuple
list in `scripts/build-registry.mjs` and regenerate; that is where duplicate ids, bad
categories and the 250-entry floor get caught.

The validator is the contract. It checks structure, section order, the closed scoring
vocabulary, the numeric ranges, and that outcomes and options line up: an axis some option
backs at 0.5 or more must have a result band, or a reader could answer their way to a
result the file does not contain — and every result band needs an axis that can actually
reach it, or it is dead weight.

`theories/trolley-problem.md` is the worked exemplar and deliberately the fullest entry
here. Match its standard; you need not match its length.
