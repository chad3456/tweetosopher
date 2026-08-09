# Tweetosopher

**A museum of the online mind.** Hand it a handle. A standing panel of thirty
philosophers reads the timeline, argues, assigns you a thinker, explains itself
with citations, tells you a real anecdote from that philosopher's life that
rhymes with your posting, gives you a name tag, and hangs the one post that gives
you away.

Supports **Twitter / X** and **Substack**.

---

## Quick start

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
| `ANTHROPIC_API_KEY` | **Real verdicts.** Substack works fully at this point — no Substack key exists or is needed |
| `X_BEARER_TOKEN` | Real Twitter/X profiles and timelines |
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

**Collection.** Twitter gives up to ~300 timeline items (posts, replies, quotes,
reposts) plus liked tweets if a user token is present. Substack is read from the
public RSS feed, backfilled from the public archive endpoint, with essays
condensed to their opening and a mid-body sample — the two places a writer's
actual thinking is least likely to be throat-clearing or sign-off.

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
| `PORT` | `8787` | API port |

---

## Layout

```
server/
  index.js               Express app; serves dist/ in production
  routes/analyze.js      NDJSON streaming endpoint + /api/health
  lib/philosophers.js    The roster
  lib/sources/twitter.js X API v2 collection
  lib/sources/substack.js RSS + archive collection, no credentials
  lib/corpus.js          Sampling and prompt assembly
  lib/engine.js          Prompt, output schema, the model call
  lib/cache.js           90-minute in-memory verdict cache
web/
  src/artifact.js        Three.js hero — procedural marble, plinth, dust
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

## Caveats

- Public posts only. Nothing is persisted beyond a 90-minute in-process cache.
- The cache is per-node. Put Redis behind `lib/cache.js` before running more than
  one instance.
- Verdicts are a reading, not a diagnosis, and the panel has been dead for some
  time.
