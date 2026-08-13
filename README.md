# The Test of Morality

**An examination in moral philosophy.** Answer questions drawn from real arguments —
the trolley problem, the ring of Gyges, the veil of ignorance, the categorical
imperative, Ubuntu, wu wei, the banality of evil — and the pattern in your answers gets
a name, a distribution across ten moral traditions, and a reading of what it commits you
to.

It computes; it does not consult a model. Every figure on your result is arithmetic on
the answers you gave, it runs entirely in your browser, and nothing you answer is ever
sent anywhere. No API key, no account, works offline.

The corpus behind it is **352 planned entries** across **266 named thinkers** and 108
traditions, each a markdown file that explains the idea, states the strongest objection
to it, and carries the questions the test asks. See [`theories/README.md`](theories/README.md).

**Also in this repository: [Tweetosopher](web/tweetosopher.html)** — the other instrument,
which reads an X timeline instead of asking questions. A standing panel of thirty
philosophers reads the timeline, argues, assigns you a thinker, explains itself with
citations, tells a real anecdote from that philosopher's life that rhymes with your
posting, gives you a name tag, and hangs the one post that gives you away. It needs an
Anthropic key for live analysis and falls back to a demonstration archive without one.
It is served at `/tweetosopher.html`.

---

## Quick start

```bash
npm install
npm run dev          # Vite on :5173, API on :8787
```

Open **http://localhost:5173** for the test. It needs no keys and no network.

Production-shaped, one server one port:

```bash
npm run preview      # builds both pages, serves from :8787
```

## Working on the corpus

```bash
npm run corpus       # regenerate the registry, then compile theories/ into the bundle
npm run validate     # check every entry against theories/SCHEMA.md
npm test             # 41 tests: the X pipeline, the Substack pipeline, the scoring engine
```

`npm run validate` currently fails, and should: it reports one problem per entry not yet
written. To see only real defects in what exists:

```bash
npm run validate 2>&1 | grep -v "missing — every registry id needs a file"
```


## Deploying to Vercel

The Test of Morality is fully static — it computes in the browser — so it deploys as a
static site with nothing to configure. Tweetosopher's live analysis is the only part that
needs a server, and it ships as one serverless function that the test never calls.

### From the dashboard

1. Push the branch to GitHub.
2. At **vercel.com/new**, import `chad3456/tweetosopher`.
3. Vercel reads `vercel.json` and fills everything in — framework Vite, build
   `npm run build`, output `dist`. Change nothing.
4. Under **Environment Variables**, add these only if you want Tweetosopher to do live
   analysis. **The Test of Morality needs none of them and works without any.**

   | name | needed for | notes |
   | --- | --- | --- |
   | `ANTHROPIC_API_KEY` | Tweetosopher live analysis | without it, it serves a demo archive |
   | `X_BEARER_TOKEN` | reading a timeline | app-only token from the X developer portal |
   | `X_USER_ACCESS_TOKEN` | reading likes | OAuth 2.0 user token with `likes.read` |
   | `X_DEPTH` | how far back to read | `fast`, `standard` or `deep` |

5. **Deploy.** First build takes about a minute.

### From the CLI

```bash
npm i -g vercel
vercel login
vercel                 # preview deployment, prints a URL
vercel --prod          # promote to production
```

Adding env vars from the CLI, if you want them:

```bash
vercel env add ANTHROPIC_API_KEY production
vercel env add X_BEARER_TOKEN production
vercel --prod          # redeploy so the function picks them up
```

### Verifying the deployment

```bash
curl -s https://YOUR-DEPLOYMENT.vercel.app/ -o /dev/null -w "%{http_code}\n"          # 200
curl -s https://YOUR-DEPLOYMENT.vercel.app/tweetosopher.html -o /dev/null -w "%{http_code}\n"
curl -s https://YOUR-DEPLOYMENT.vercel.app/api/health
```

`/api/health` reports `"engine":"demo"` until `ANTHROPIC_API_KEY` is set, then `"live"`.
If the test itself loads and works, the deployment is good — it has no server to fail.

### What is deployed, and what is not

`.vercelignore` keeps `theories/` out of the deployment. That is deliberate and not a
loss: the corpus is compiled into the bundle by `npm run build`, so every question and
result ships, while the 350 full markdown essays — which nothing at runtime reads — do
not need to be uploaded on every deploy.

**A caution.** `vercel.json` sets a one-year immutable cache on `/assets/*`, which is
safe because Vite fingerprints those filenames. Do not extend that rule to `/(.*)` —
`index.html` must stay revalidated or visitors will be served a stale page pointing at
asset names that no longer exist.

---

# Tweetosopher

Everything below documents the second instrument.


```bash
npm install
cp .env.example .env      # optional — it runs without any keys
npm run dev
```

Then open **http://localhost:5173**.

`npm run dev` starts two processes: the Vite dev server on `:5173` and the API on
`:8787`, with `/api` proxied between them.

For a production-shaped run — one server, one port, no proxy:

```bash
npm run preview           # builds, then serves everything from :8787
```

### It works with no keys at all

With an empty `.env` the whole experience runs against a sample archive and a
prepared verdict, so you can see the finished thing before deciding whether to
wire anything up. Each credential you add upgrades one part:

| Set this | You get |
|---|---|
| *(nothing)* | Sample corpus + a prepared demonstration verdict |
| `ANTHROPIC_API_KEY` | **Real verdicts** over the sample corpus |
| `X_BEARER_TOKEN` | Real profiles, timelines, threads, quotes and reposts |
| `X_USER_ACCESS_TOKEN` | Likes, which is where taste actually lives — see below |

---

## The panel

Thirty thinkers, defined in [`server/lib/philosophers.js`](server/lib/philosophers.js),
from Heraclitus to Byung-Chul Han by way of Zhuangzi, Montaigne, Weil, Arendt,
McLuhan and Fisher. The roster is a **closed set** — the model may only assign
from it. That is deliberate: an open field means the model reaches for whoever is
most famous, and the mix here guarantees that almost any kind of posting has
someone in the room who recognises it.

Each entry carries a `signature` written as the shape of a mind rather than a
biography — *what would a timeline written by this person feel like*. That is
what the model matches against. Add your own by appending to the array; nothing
else needs to change.

### What comes back

A verdict is one structured object:

- **Name tag + tagline** — your acquisition title
- **The assignment** — philosopher, alignment score, three to five paragraphs of
  reasoning, all of it citing numbered items from your corpus
- **An anecdote** — a real, documented episode from that philosopher, tied to
  something specific you posted
- **An epigraph** — a line in their idiom, labelled as paraphrase rather than
  quotation, because inventing quotations is how this genre goes wrong
- **The defining post** — the model cites an index; the server resolves the text
  and the permalink itself, so the exhibit is never a hallucinated quote
- **Panel remarks** — three or four other thinkers reacting, at least one dissenting
- **Themes, tensions, your best argument, a reading list, and a confidence note**

---

## How it reads a corpus

**Collection.** A staged pipeline — see [The X pipeline](#the-x-pipeline) below —
producing posts, reassembled threads, replies, quotes with their referents,
reposts, and (with a user token) likes.

**Curation** ([`server/lib/corpus.js`](server/lib/corpus.js)). Taking the newest
N posts over-weights whatever someone happened to be doing last week. Instead the
corpus is sampled along three axes and interleaved:

- **recency** — what they sound like now
- **reach** — what other people rewarded, i.e. their public register
- **substance** — the longest things they wrote, where arguments live

Likes and reposts are kept in a separate bucket and labelled as such. They are
evidence of *taste*, not *voice*, and the prompt asks the panel to weigh them
differently and to say so when the two disagree — a person whose posts are serene
and whose likes are all knives is telling you something.

**Deliberation** ([`server/lib/engine.js`](server/lib/engine.js)). One streamed
call to `claude-opus-5` with adaptive thinking, `effort: high`, and a JSON schema
constraining the output. The system prompt and roster are identical on every
request and carry a cache breakpoint, so that prefix is served from cache after
the first analysis.

---

## The X pipeline

Four stages, in `server/lib/pipeline/x/`:

```
profile   → the account, its metrics, its bio
timeline  → posts, replies, quotes and reposts, paginated
likes     → what they endorse  (needs a user token — see below)
stitch    → self-threads reassembled into single items
```

```bash
npm run scrape -- marbledust                 # standard
npm run scrape -- marbledust --depth deep    # further back
npm run scrape -- marbledust --json          # machine-readable
npm run scrape -- marbledust --corpus        # + the assembled prompt corpus
npm test                                     # 30 tests against fixture APIs
```

`--depth` is a dial, not a boolean: `fast` is one page and belongs behind an
interactive form, `deep` is eight and burns rate limit. Set the default with
`X_DEPTH`, or per request with `"depth"` in the analyze body. Stage progress
streams onto the same NDJSON channel the panel uses, so the page shows
collection happening rather than a pause.

### Three things a naive collector gets wrong

Reading `data[].text` and shipping it produces a corpus with three specific
holes, and each one damages exactly what this product is trying to read.

**Threads arrive shredded.** A twelve-post argument becomes twelve disconnected
fragments — the most valuable thing in the corpus, destroyed by the collection
step. `stitch` groups by `conversation_id`, keeps only genuine *self*-threads (a
reply to someone else is a different speech act and stays its own item), orders
them chronologically and numbers the parts, so the panel can see the shape of an
argument and not just its content. Engagement uses the root post's numbers;
summing across a thread would wildly overstate reach.

**Reposts arrive truncated.** The API returns `RT @someone: first 140 chars…`.
Endorsement is real signal, but a truncated one is noise. Expansions get the
full original text, and `via` records whose words they actually were — so the
panel is never invited to attribute someone else's sentence to the subject.

**Quote posts arrive without their referent.** "this is exactly right" tells a
panel of philosophers nothing at all unless you know what *this* was. The quoted
post is fetched and appended as context.

There is a fourth, quieter one: long posts come back with `text` truncated and
the real body only in `note_tweet.text`. Since the longest things someone writes
are where their argument lives, reading `text` first would systematically
discard the best items in the corpus.

**Stages fail independently.** A run that gets the timeline but not the likes is
a thinner reading, not an error. Only a run that ends with nothing throws. Every
gap is recorded and surfaces in the verdict's provenance block, so the reader
knows what the panel could not see.

### Being a good guest

Everything goes through one client (`pipeline/http.js`) that serialises requests
per host with a minimum gap between them, backs off exponentially on 429/5xx,
caches responses in-memory for the run, and sends an identifying User-Agent.
Politeness here is not just etiquette: a client that hammers a host gets blocked,
and a blocked client is a broken product.

Backoff reads **both** conventions, because hosts do not agree on one:
`Retry-After` is a duration in seconds, while X sends `x-rate-limit-reset` as an
absolute epoch second. Treating the latter as a duration would sleep for roughly
fifty years, so it is differenced against now — there is a test for it.

When crawling rather than calling an API, the client also **fetches and obeys
robots.txt**. It is deliberately *not* consulted for the X API: robots.txt
governs crawlers discovering pages, and applying a crawl directive to a
credentialed, documented API call would be cargo-culted politeness. Only public
posts are read either way.

### The repair agent

X's API v2 is documented and versioned, so here the agent is a safety net rather
than load-bearing — it matters most for the Substack pipeline, whose endpoints
are undocumented and change without notice. Both platforms share one extraction
path so there is one story to reason about.

So extraction is expressed as a **plan**: a declarative map from field names to
candidate paths, tried best-first.

```js
{ list: 'results', fields: { title: ['headline'], text: ['teaser_html', 'standfirst'] } }
```

When a built-in plan stops fitting a payload, an agent (`pipeline/agent.js`) is
shown a truncated sample and asked to write a new one. The plan is **validated
against the real payload** before it is trusted — it must fill every required
field on a majority of records — then cached under a fingerprint of the
payload's shape. So the cost is one model call the first time an endpoint
changes and zero thereafter, and a plausible-but-wrong plan cannot get cached and
quietly produce empty corpora forever.

Three deliberate constraints:

- **The agent is never in the hot path.** It runs only after a deterministic
  extractor has already failed.
- **It returns paths, never code.** A model-authored plan can only read
  properties out of a payload we already fetched. Model-authored code would need
  a sandbox, a review step, and a much longer argument about trust. `pick()`
  also refuses to walk the prototype chain, which is tested.
- **Repairs are capped per run**, so one genuinely broken endpoint cannot turn a
  single scrape into a dozen model calls.

Without `ANTHROPIC_API_KEY` the agent is simply off: the pipeline degrades to
whatever the deterministic stages managed and says so in the coverage notes.

## About the X credentials

The two X tokens are **not interchangeable**, and this trips everyone up once:

- `X_BEARER_TOKEN` is app-only. Profile and timeline.
- `X_USER_ACCESS_TOKEN` must be an OAuth 2.0 **user-context** token with the
  `likes.read` scope. The liked-tweets endpoint returns 403 for an app-only
  bearer no matter how the request is shaped.

A missing user token degrades the reading rather than breaking it: the gap is
recorded in the corpus, shown in the verdict's provenance block, and the panel is
told it is working from public output only.

---

## Configuration

Everything lives in `.env` — see [`.env.example`](.env.example).

| Variable | Default | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | — | Absent ⇒ demonstration verdicts |
| `TWEETOSOPHER_MODEL` | `claude-opus-5` | The prompt is tuned for it |
| `TWEETOSOPHER_EFFORT` | `high` | `low` \| `medium` \| `high` \| `xhigh` \| `max` |
| `X_BEARER_TOKEN` | — | App-only bearer |
| `X_USER_ACCESS_TOKEN` | — | User context, `likes.read` |
| `X_DEPTH` | `standard` | `fast` \| `standard` \| `deep` |
| `X_API_BASE` | X's API | Point at a mirror or a fixture |
| `ENABLE_SUBSTACK` | `false` | Re-enable the Substack platform |
| `SUBSTACK_DEPTH` | `standard` | `fast` \| `standard` \| `deep` |
| `PORT` | `8787` | API port |

---

## Layout

```
server/
  index.js               Express app; serves dist/ in production
  routes/analyze.js      NDJSON streaming endpoint + /api/health
  lib/philosophers.js    The roster
  lib/sources/twitter.js Façade over the X pipeline
  lib/sources/substack.js Façade over the Substack pipeline (off by default)
  lib/pipeline/
    http.js              Rate limiting, backoff, robots.txt, caching
    plans.js             Declarative extraction plans + validation
    agent.js             The repair agent
    x/
      index.js           X orchestrator, depth levels
      stages.js          profile / timeline / likes / stitch
      plans.js           X API v2 extraction plans
    index.js             Substack orchestrator
    stages.js            resolve / feed / archive / hydrate / notes
    text.js              RSS parsing, HTML→text, paywall detection
  lib/corpus.js          Sampling and prompt assembly
  lib/engine.js          Prompt, output schema, the model call
  lib/cache.js           90-minute in-memory verdict cache
scripts/scrape.js        Standalone pipeline CLI
tests/                   Pipeline tests against fixture X and Substack APIs
docs/                    Standalone, self-contained floor-plan page
web/
  src/artifact.js        Three.js hero — procedural marble, plinth, dust
  src/voronoi.js         Weighted Voronoi treemap solver (power diagram)
  src/floorplan.js       Renders the treemap as museum marquetry
  src/motion.js          GSAP intro, scroll link, section reveals
  src/verdict.js         Renders a verdict as museum wall text
  src/api.js             NDJSON stream client
  src/main.js            Wiring
demo/                    Sample corpora and a prepared verdict
```

### Notes on the front end

The hero is entirely procedural — no models, no textures, no image requests. The
marble is fbm over 3D simplex noise evaluated in object space, so the veining is
locked to the stone and turns with it, and it is never the same twice. GSAP
handles the letterpress intro, the scroll link that sinks the artifact as the
hero leaves, and the per-section reveals.

The analysis endpoint streams **line-delimited JSON** rather than SSE: the request
carries a body and `EventSource` is GET-only, so SSE would have meant either
query-string state or a two-call handshake. Each line is one `{ stage, … }`
event, which is what lets the page show the panel actually writing.

Under `prefers-reduced-motion` the intro, parallax, dust and reveals are all
skipped and everything renders in its final state.

---

## The floor plan

Each verdict is also drawn as a **weighted Voronoi treemap** — one room per claim
the panel made:

- **area** ∝ how many cited posts the claim rests on
- **shade** — a diverging scale: their own words ← mixed → what they amplified
- **label** — identity and the exact count, in the cell

**The areas are real, and that is the whole point.** A Voronoi diagram over
scattered seeds looks identical and means nothing: its cell sizes are an accident
of where the seeds landed. `web/src/voronoi.js` computes a genuine additively
weighted power diagram and iterates until each room matches its share.

The update rule is *additive*, and that detail is the ballgame. The textbook
multiplicative form (scale each weight by the area ratio) was tried first and
left cells up to **88% off target** — a treemap with wrong areas is worse than no
treemap, because it looks authoritative while lying. Two things were wrong with
it: weights only mean anything as *differences* in a power diagram, so scaling
them all drifts without separating them; and clamping each weight against its
nearest neighbour is symmetric, so a big room got throttled by the small rooms
crowding it. The additive form is dimensionally honest — `w` has units of
length², and so does `(target − area)`, so the error adds to the weight directly.
Measured over 320 runs (40 seeds × 8 weight patterns): **worst area error
0.478%**, no starved cells.

Area is still a soft channel — people read it to about ±20% — so identity and
magnitude never rest on it alone: every room is direct-labelled with its exact
figure, and a table view carries the same numbers.

The colour scale is *diverging*, not categorical, because voice-versus-taste is a
polarity rather than an identity — and because a Voronoi is an all-pairs form,
where any two cells can touch, which caps categorical encoding at three series.
Both poles were validated against the actual chart surface for lightness band,
chroma floor, CVD separation and contrast, in both themes.

The server ships a `citations` index alongside each verdict — only the indices
the panel actually cited, resolved to their kind — which is what lets the drawing
tell the subject's own words from things they amplified without the client
re-deriving anything.

A standalone, self-contained version of the drawing lives in
[`docs/floorplan-artifact.html`](docs/floorplan-artifact.html) — open it directly
in a browser; it needs no server and no network.

## Substack (switched off)

A full Substack pipeline — feed, paginated archive, per-post hydration, Notes,
paywall detection — is in `server/lib/pipeline/` and still covered by 13 tests.
It is disabled at the product surface rather than deleted:

```bash
ENABLE_SUBSTACK=true                          # re-enable the platform
npm run scrape -- the-long-way --platform substack
```

## Caveats

- Public posts only. Nothing is persisted beyond a 90-minute in-process cache.
- Protected accounts cannot be read, and X's free API tier limits how far back
  the timeline goes — `deep` reaches further, not forever.
- The cache is per-node. Put Redis behind `lib/cache.js` before running more than
  one instance.
- Verdicts are a reading, not a diagnosis, and the panel has been dead for some
  time.
