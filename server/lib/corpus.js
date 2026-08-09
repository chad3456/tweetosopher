/**
 * Turning a raw collection into something a panel can read.
 *
 * The naive move is to dump the newest N posts. That over-weights whatever the
 * person happened to be doing last week and buries the posts they actually
 * think of as theirs. Instead we sample along three axes and interleave them:
 *
 *   recency   what they sound like now
 *   reach     what other people rewarded (their public register)
 *   substance the longest things they wrote (where arguments live)
 *
 * Likes and retweets are kept in a separate bucket. They are evidence of taste
 * rather than voice, and the prompt asks the panel to weigh them differently.
 */

const MAX_CHARS = 42_000;

function byRecency(items) {
  return [...items].sort(
    (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
  );
}

function byReach(items) {
  return [...items].sort(
    (a, b) => (b.likes ?? 0) + (b.reposts ?? 0) - ((a.likes ?? 0) + (a.reposts ?? 0)),
  );
}

function bySubstance(items) {
  return [...items].sort((a, b) => (b.text?.length ?? 0) - (a.text?.length ?? 0));
}

/** Round-robin across the ranked lists, skipping anything already taken. */
function interleave(lists, limit) {
  const picked = [];
  const taken = new Set();
  const cursors = lists.map(() => 0);

  while (picked.length < limit) {
    let progressed = false;
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i];
      while (cursors[i] < list.length && taken.has(list[cursors[i]].id)) {
        cursors[i]++;
      }
      if (cursors[i] >= list.length) continue;
      const item = list[cursors[i]++];
      taken.add(item.id);
      picked.push(item);
      progressed = true;
      if (picked.length >= limit) break;
    }
    if (!progressed) break;
  }
  return picked;
}

function renderItem(item, index) {
  const parts = [`[${index}]`];
  if (item.kind && item.kind !== 'post') parts.push(`(${item.kind})`);
  if (item.createdAt) {
    const d = new Date(item.createdAt);
    if (!Number.isNaN(d.valueOf())) parts.push(d.toISOString().slice(0, 10));
  }
  if (typeof item.likes === 'number' && item.likes > 0) {
    parts.push(`♥${item.likes}`);
  }
  const head = parts.join(' ');
  const title = item.title ? `${item.title}\n` : '';
  return `${head}\n${title}${item.text}`;
}

/**
 * @returns {{ text: string, index: Map<number, object>, stats: object }}
 *   `index` maps the `[n]` markers the model sees back to real items, so the
 *   defining-post citation can be resolved to a URL without trusting the model
 *   to reproduce one.
 */
export function buildCorpus(collection) {
  const all = collection.items.filter((i) => (i.text || '').trim().length > 1);

  const own = all.filter((i) => i.kind !== 'like' && i.kind !== 'retweet');
  const taste = all.filter((i) => i.kind === 'like' || i.kind === 'retweet');

  // Long and short form get separate budgets. A Substack writer's notes are
  // short, frequent and unedited — closer to a timeline than to their essays,
  // and the cheapest voice per token available. Sampling them from the same
  // pool as the essays would let recency crowd the essays out entirely.
  const longform = own.filter((i) => i.kind !== 'note');
  const shortform = own.filter((i) => i.kind === 'note');

  const ownSample = [
    ...interleave(
      [byRecency(longform), byReach(longform), bySubstance(longform)],
      collection.platform === 'substack' ? 24 : 120,
    ),
    ...interleave([byRecency(shortform), byReach(shortform)], 60),
  ];
  const tasteSample = interleave([byRecency(taste), byReach(taste)], 40);

  const index = new Map();
  let n = 0;
  let budget = MAX_CHARS;

  const ownLines = [];
  for (const item of ownSample) {
    const rendered = renderItem(item, n);
    if (rendered.length > budget) break;
    budget -= rendered.length;
    index.set(n, item);
    ownLines.push(rendered);
    n++;
  }

  const tasteLines = [];
  for (const item of tasteSample) {
    const rendered = renderItem(item, n);
    if (rendered.length > budget) break;
    budget -= rendered.length;
    index.set(n, item);
    tasteLines.push(rendered);
    n++;
  }

  const p = collection.profile;
  const header = [
    `PLATFORM: ${collection.platform}`,
    `HANDLE: ${p.handle}`,
    p.displayName ? `DISPLAY NAME: ${p.displayName}` : null,
    p.bio ? `BIO: ${p.bio}` : null,
    p.location ? `LOCATION: ${p.location}` : null,
    p.followers != null ? `FOLLOWERS: ${p.followers}` : null,
    p.following != null ? `FOLLOWING: ${p.following}` : null,
    p.joined ? `JOINED: ${new Date(p.joined).toISOString().slice(0, 10)}` : null,
  ]
    .filter(Boolean)
    .join('\n');

  const sections = [`## SUBJECT\n${header}`];

  sections.push(
    `## THEIR OWN WORDS (${ownLines.length} items — posts, replies, quotes, essays)\n\n${
      ownLines.join('\n\n') || '(none available)'
    }`,
  );

  if (tasteLines.length) {
    sections.push(
      `## WHAT THEY AMPLIFY (${tasteLines.length} items — likes and reposts, i.e. other people's words this person chose to endorse)\n\n${tasteLines.join(
        '\n\n',
      )}`,
    );
  }

  const gaps = collection.coverage?.notes ?? [];
  if (gaps.length) {
    sections.push(`## GAPS IN THE RECORD\n${gaps.map((g) => `- ${g}`).join('\n')}`);
  }

  return {
    text: sections.join('\n\n'),
    index,
    stats: {
      collected: all.length,
      analysed: index.size,
      own: ownLines.length,
      amplified: tasteLines.length,
      chars: MAX_CHARS - budget,
    },
  };
}
