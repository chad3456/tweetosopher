# The Test of Morality — entry schema

Every theory, principle, paradox, thought experiment and philosopher's term in this
corpus is **one markdown file** in `theories/`, named `<id>.md`, where `<id>` is the
kebab-case identifier from `_registry.json`.

A file is two things at once:

- **A document** a person can read on its own — six prose sections, in a fixed order.
- **A test instrument** the app can execute — YAML frontmatter carrying the questions,
  the score each answer contributes, and the results those scores resolve to.

Both halves are required. A file with beautiful prose and no scoreable questions is not
usable by the product; a file with scores and no explanation is not usable by a reader.

---

## 1. The two score vocabularies

Every answer option is scored against a **closed** vocabulary. No file may invent an
axis name. This is what makes 250 separate files add up to a single coherent test
rather than 250 unrelated quizzes.

### 1.1 Framework axes — "which moral theory does this answer resemble?"

Range `0.0 … 1.0`. Non-negative. One option may express several frameworks at once.
Omit an axis entirely rather than scoring it `0`.

| axis | the position it expresses |
| --- | --- |
| `consequentialist` | rightness is fixed by outcomes; states of the world are what matter |
| `deontological` | rightness is fixed by duties, rules or rights, whatever the outcome |
| `virtue` | the question is what a person of good character would do, and what doing it makes of you |
| `contractarian` | rightness is what free people could agree to, or could not reasonably reject |
| `care` | morality begins in relationship, dependency and particular attachment |
| `egoist` | the agent's own interest is the standard |
| `relativist` | moral claims hold only relative to a culture, framework or standpoint |
| `divine` | morality is grounded in God, sacred law, or a transcendent order |
| `existentialist` | there is no given standard; you are responsible for the value you create |
| `nihilist` | moral claims have no truth-makers and nothing underwrites them |

### 1.2 Disposition axes — "what kind of moral temperament is this?"

Range `−1.0 … +1.0`, signed and bipolar. These are *orthogonal* to framework: two
consequentialists can sit at opposite ends of `authority`.

| axis | −1.0 | +1.0 |
| --- | --- | --- |
| `scope` | only those near you count | every affected party counts equally |
| `agency` | letting happen differs sharply from doing | doing and allowing weigh the same |
| `authority` | legitimate authority is owed deference | conscience overrides any authority |
| `certainty` | moral judgement is fallible and revisable | some moral truths admit no exception |
| `affect` | judgement should follow reasoned argument | judgement should follow moral intuition |

An option normally touches **two to four** axes in total across both tables. Scoring
every axis on every option produces mush.

---

## 2. Frontmatter

```yaml
---
id: doctrine-of-double-effect          # matches the filename and _registry.json
title: The Doctrine of Double Effect   # the display title
category: principle                    # theory | principle | paradox | thought-experiment | term
tradition: natural-law                 # the school it belongs to, kebab-case
philosophers:                          # everyone materially responsible for it
  - Thomas Aquinas
  - Philippa Foot
era: "13th century"                    # free text: a year, a century, or a range
tags: [intention, killing, war, medicine]
sources:                               # see §5 — bibliographic, never URLs
  - author: Philippa Foot
    title: The Problem of Abortion and the Doctrine of the Double Effect
    published: "Oxford Review 5, 5–15"
    year: 1967
  - title: Doctrine of Double Effect
    published: Stanford Encyclopedia of Philosophy
questions:
  - id: q1
    prompt: >-
      A runaway situation will kill five people unless you act. The only act
      available kills one person as a foreseen but unintended side effect.
    options:
      - id: a
        label: Act. The death is a side effect, not your means, and five live.
        scores: { consequentialist: 0.8, agency: 0.6, scope: 0.5 }
        evidence:                          # optional but wanted — see §2.2
          who: Philippa Foot
          work: The Problem of Abortion and the Doctrine of the Double Effect
          year: 1967
          says: >-
            Foot took the driver's case to be the easy one precisely because the
            harm is a side effect of redirecting a threat rather than the means of
            stopping it, and built the case to isolate that difference.
      - id: b
        label: Act, but the distinction between side effect and means is doing no work.
        scores: { consequentialist: 1.0, agency: 1.0, certainty: -0.4 }
        evidence:
          who: Judith Jarvis Thomson
          work: The Trolley Problem
          year: 1985
          says: >-
            Thomson's loop variant was designed to put this pressure on: the spur
            returns to the main line, so the one man's body becomes the mechanism
            rather than a side effect, and the distinction stops tracking anything.
      - id: c
        label: Do not act. You would be causing a death that is not otherwise yours.
        scores: { deontological: 0.9, agency: -0.8, certainty: 0.5 }
        evidence:
          who: G.E.M. Anscombe
          work: Modern Moral Philosophy
          year: 1958
          says: >-
            Anscombe held that some acts are excluded from deliberation entirely,
            and that a philosopher willing to weigh the killing of an innocent
            against a benefit has already shown a corrupt mind.
outcomes:
  - id: intention-matters
    dominant: deontological              # the framework axis this result reads from
    label: The Line at Intention
    text: >-
      You hold that what you aim at is part of what you do...
    base_rate: null                      # see §5
---
```

Rules the validator enforces:

- `id` equals the filename stem and the registry id.
- `category` is one of the five listed values.
- At least **three** questions; each has at least **three** options.
- Every key inside `scores` is from §1.1 or §1.2. Framework values in `[0, 1]`,
  disposition values in `[-1, 1]`.
- At least **two** outcomes, each with a distinct `dominant`, and every one setting
  `base_rate` explicitly (`null` in almost every case — see §5).
- **Outcomes and options must match up.** A framework axis is *load-bearing* in a file
  when some option scores it at **0.5 or more**. Every load-bearing axis needs an
  outcome, or a reader can answer their way to a result the file does not contain; and
  every outcome needs a load-bearing axis, or it is a result nobody can reach. Scores
  below 0.5 are seasoning on an answer that is mostly about something else — they are
  free, and oblige nothing.

### 2.2 Evidence: who actually held this

An option may carry `evidence` — a named thinker who took that position, the work they
took it in, and a sentence on what they argued. The app shows it back after a sitting,
so a reader can see that the analysis rests on somebody's actual argument rather than on
the app's say-so.

```yaml
evidence:
  who: Philippa Foot
  work: The Problem of Abortion and the Doctrine of the Double Effect
  year: 1967          # optional; omit rather than guess
  says: >-            # what they argued, in your words
    One or two sentences. Paraphrase.
```

Three rules, and they are the whole point of the field:

- **`says` is a paraphrase, not a quotation.** Do not put quotation marks around invented
  wording. Where an exact phrase genuinely matters and you are certain of it, quote the
  phrase only — never a fabricated sentence built around it.
- **The thinker must actually have held roughly this position.** Attaching a famous name
  to an option because it is nearby is worse than leaving `evidence` off; a citation that
  misattributes is a lie that looks like scholarship.
- **`work` must be a real work by that person.** Same rule as §5, and no URLs.

Leave `evidence` out entirely when no thinker cleanly holds the option — a "refuse the
question" answer often has none. An absent field is honest; a stretched one is not.

### 2.1 How an outcome is chosen

The app sums each answer's `scores` across the questions the reader answered, normalises
the ten framework axes to shares of 1.0, and selects the `outcomes` entry whose `dominant`
axis came top. What it reports is that share and its margin over the runner-up — *"64%
consequentialist, 21 points clear of deontological"* — which is the reader's own answer
profile, computed and checkable.

That is the only "probability" in the product, and it is a real one. It is not a claim
about how *other people* answer: that would require population data the corpus does not
have, and is what `base_rate` exists to hold on the rare entry where a study supplies it.
Write each outcome's `text` so it stands on its own without any population claim.

---

## 3. The six prose sections

In this order, with these exact headings.

```markdown
## What it means
## What it suggests
## The problem
## The questions
## Reading your answer
## Sources
```

- **What it means** — the idea stated plainly, in the terms its author used. Two to four
  paragraphs. Name the work it comes from.
- **What it suggests** — what follows if you take it seriously. This is the section that
  earns the entry its place: an idea nobody would act on differently is not being tested.
  Include the strongest objection; an entry that only advocates is propaganda.
- **The problem** — one concrete scenario, written as narrative, that makes the abstract
  claim bite. Not a restatement. A situation with a decision in it.
- **The questions** — the same questions as the frontmatter, rendered readably, so the
  file stands alone when read on GitHub.
- **Reading your answer** — what each outcome band means about the reader. Written to a
  person, not about them. No flattery, no horoscope. Say what the answer commits them to
  and what it costs.
- **Sources** — see below.

---

## 4. Writing standards

- **The reader is intelligent and has not read the book.** No jargon without a gloss on
  first use.
- **Steelman every position.** Each option in a question set must be one that a thoughtful
  person actually holds. An option nobody would pick is a wasted slot and skews the score.
- **No option is the "right" one.** If the prose signals which answer is correct, the
  instrument stops measuring and starts teaching.
- **Do not moralise in "Reading your answer."** Describe the position and its price.
  "This commits you to X, which is hard to hold alongside Y" — not "you should reconsider".
- Attribute contested readings: *"on Kaufmann's reading"*, not a bare assertion.

---

## 5. Sources and the honesty rules

Three rules exist because the corpus is worthless if it cannot be trusted:

**Cite only what is real.** Every entry in `sources` must be a work that exists — author,
title, where it was published, year. Cite the primary work first, reference works after.

**No URLs.** This is not stylistic. The build environment's egress proxy blocks
`plato.stanford.edu`, `pnas.org` and `pubmed.ncbi.nlm.nih.gov` among others, so a link
written into an entry here cannot be checked before it ships, and an unchecked link is a
guess wearing the costume of a citation. A bibliographic reference — author, title,
journal, year — is verifiable by any reader from any library and cannot rot. The
`sources` schema therefore has no `url` field at all.

**Never invent a statistic.** `base_rate` records the share of people who chose this way in
a *published empirical study*, and it may only be non-null when `sources` contains that
study. Most entries have no such study: those set `base_rate: null`, and the app reports
only the reader's own computed result. Inventing "72% of people choose to pull the lever"
would make the product a liar in a way no user could detect.

---

## 6. Reserved ids

`SCHEMA.md`, `README.md` and `_registry.json` are infrastructure, not entries. The
validator skips them.
