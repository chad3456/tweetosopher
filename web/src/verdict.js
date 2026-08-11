import { renderFloorPlan } from './floorplan.js';

/**
 * Renders a verdict as museum wall text.
 *
 * All text from the model is inserted as text nodes, never as HTML — the one
 * exception is the citation markers, which are found with a strict `[\d+]`
 * pattern and wrapped in spans after the text has already been escaped.
 */

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
};

/** Split on `[7]` markers and rebuild with styled spans. No HTML parsing. */
function withCitations(text) {
  const frag = document.createDocumentFragment();
  const parts = String(text ?? '').split(/(\[\d{1,3}\])/g);
  for (const part of parts) {
    if (/^\[\d{1,3}\]$/.test(part)) {
      frag.append(el('span', 'cite', part));
    } else if (part) {
      frag.append(document.createTextNode(part));
    }
  }
  return frag;
}

/** Model prose arrives as \n\n-separated paragraphs. */
function paragraphs(text, className) {
  const wrap = el('div', className);
  for (const chunk of String(text ?? '').split(/\n{2,}/)) {
    if (!chunk.trim()) continue;
    const p = el('p');
    p.append(withCitations(chunk.trim()));
    wrap.append(p);
  }
  return wrap;
}

function section(id, label) {
  const s = el('section', 'section');
  s.id = id;
  const head = el('div', 'section__head');
  head.append(el('h3', null, label), el('div', 'rule'));
  s.append(head);
  return s;
}

function formatDate(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.valueOf())) return null;
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const KIND_LABEL = {
  post: 'Post',
  thread: 'Thread',
  reply: 'Reply',
  quote: 'Quote post',
  retweet: 'Repost',
  like: 'Liked post',
  note: 'Note',
  essay: 'Essay',
  'essay-summary': 'Essay (summary)',
};

/** The provenance line under an exhibit: what kind of thing this is, exactly. */
function exhibitMeta(post) {
  const bits = [KIND_LABEL[post.kind] ?? 'Item'];

  if (post.kind === 'thread' && post.parts) bits[0] = `Thread · ${post.parts} posts`;
  // A repost or a like is someone else's words that the subject chose to
  // endorse. Saying whose keeps the exhibit honest about authorship.
  if (post.via && (post.kind === 'retweet' || post.kind === 'like')) {
    bits.push(`originally @${post.via}`);
  }

  const date = formatDate(post.createdAt);
  if (date) bits.push(date);
  return bits.join(' · ');
}

export function renderVerdict(root, data) {
  root.replaceChildren();
  root.hidden = false;

  const subjectLine =
    data.platform === 'substack'
      ? `${data.subject.displayName || data.subject.handle} · Substack`
      : `@${data.subject.handle} · Twitter / X`;

  // ── Placard ────────────────────────────────────────────────────────────
  const placard = el('header', 'placard');
  placard.append(
    el('p', 'placard__subject', `Acquisition · ${subjectLine}`),
    el('h2', 'placard__name', data.nameTag),
    el('p', 'placard__tagline', data.tagline),
  );

  const attribution = el('div', 'attribution');
  const who = el('div');
  who.append(
    el('p', 'attribution__who', data.verdict.philosopher.name),
    el(
      'p',
      'attribution__meta',
      [data.verdict.philosopher.era, data.verdict.philosopher.school]
        .filter(Boolean)
        .join(' · '),
    ),
  );

  const score = el('div', 'score');
  const bar = el('div', 'score__bar');
  const fill = el('span', 'score__fill');
  fill.dataset.score = String(data.verdict.matchScore ?? 0);
  bar.append(fill);
  score.append(
    el('span', 'score__num', `${data.verdict.matchScore}`),
    bar,
    el('span', 'score__label', 'alignment'),
  );

  attribution.append(who, score);
  placard.append(attribution);
  root.append(placard);

  // ── The reading ────────────────────────────────────────────────────────
  const reading = section('reading', 'The reading');
  reading.append(paragraphs(data.verdict.reasoning, 'walltext'));

  const anecdote = el('aside', 'aside');
  anecdote.append(el('p', 'aside__label', 'From the life'));
  anecdote.append(...paragraphs(data.verdict.anecdote).children);
  reading.append(anecdote);

  const epi = el('figure', 'epigraph');
  const quote = el('blockquote', null, `“${data.verdict.epigraph}”`);
  epi.append(
    quote,
    el(
      'figcaption',
      null,
      `In the idiom of ${data.verdict.philosopher.name} — a paraphrase, not a quotation`,
    ),
  );
  reading.append(epi);
  root.append(reading);

  // ── The exhibit ────────────────────────────────────────────────────────
  if (data.definingPost?.text) {
    const ex = section('exhibit', 'The post that gives you away');
    const frame = el('figure', 'exhibit');

    frame.append(el('p', 'exhibit__meta', exhibitMeta(data.definingPost)));

    if (data.definingPost.title) {
      frame.append(el('h4', 'exhibit__title', data.definingPost.title));
    }
    frame.append(el('p', 'exhibit__text', data.definingPost.text));

    if (data.definingPost.url) {
      const link = el('a', 'exhibit__link', 'View source ↗');
      link.href = data.definingPost.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      frame.append(link);
    }

    ex.append(frame);
    ex.append(paragraphs(data.definingPost.why, 'exhibit__why'));
    root.append(ex);
  }

  // ── The panel ──────────────────────────────────────────────────────────
  if (data.panel?.length) {
    const panel = section('panel', 'The panel responds');
    const grid = el('div', 'remarks');
    for (const entry of data.panel) {
      const card = el('article', 'remark');
      const head = el('div', 'remark__head');
      const pos = el('span', 'remark__position', entry.position);
      pos.dataset.position = entry.position;
      head.append(el('h4', 'remark__who', entry.philosopher.name), pos);
      const body = el('p');
      body.append(withCitations(entry.remark));
      card.append(head, body);
      grid.append(card);
    }
    panel.append(grid);
    root.append(panel);
  }

  // ── Floor plan ─────────────────────────────────────────────────────────
  // Placed after the exhibit and before the prose breakdown: by here the reader
  // knows who they were assigned and why, and the partition answers the next
  // question — how much of that verdict rests on what.
  const plan = section('floorplan', 'Floor plan of the collection');
  if (renderFloorPlan(plan, data)) {
    root.append(plan);
  }

  // ── Themes & tensions ──────────────────────────────────────────────────
  const analysis = section('analysis', 'Preoccupations & contradictions');
  const cols = el('div', 'two-col');

  const themeCol = el('div');
  themeCol.append(el('p', 'aside__label', 'Recurring'));
  const themeList = el('ul', 'themes');
  for (const theme of data.themes ?? []) {
    const li = el('li');
    li.append(el('strong', null, theme.name));
    const span = el('span');
    span.append(withCitations(theme.evidence));
    li.append(span);
    themeList.append(li);
  }
  themeCol.append(themeList);

  const tensionCol = el('div');
  tensionCol.append(el('p', 'aside__label', 'Where it does not add up'));
  const tensionList = el('ul', 'tensions');
  for (const t of data.tensions ?? []) {
    const li = el('li');
    li.append(withCitations(t));
    tensionList.append(li);
  }
  tensionCol.append(tensionList);

  cols.append(themeCol, tensionCol);
  analysis.append(cols);
  root.append(analysis);

  // ── Shadow ─────────────────────────────────────────────────────────────
  if (data.shadow?.why) {
    const shadow = section('shadow', 'Your best argument');
    const head = el('p', 'attribution__who', data.shadow.philosopher.name);
    shadow.append(head, paragraphs(data.shadow.why, 'walltext'));
    root.append(shadow);
  }

  // ── Reading list ───────────────────────────────────────────────────────
  if (data.readingList?.length) {
    const rl = section('reading-list', 'Prescribed');
    const list = el('ul', 'reading');
    for (const book of data.readingList) {
      const li = el('li');
      li.append(
        el('b', null, book.title),
        el('em', null, book.author),
        el('span', null, book.why),
      );
      list.append(li);
    }
    rl.append(list);
    root.append(rl);
  }

  // ── Provenance ─────────────────────────────────────────────────────────
  const prov = el('div', 'provenance');
  const line = (label, value) => {
    const p = el('p');
    p.append(el('b', null, `${label} `), document.createTextNode(value));
    return p;
  };

  prov.append(
    line(
      'Corpus —',
      `${data.stats.analysed} of ${data.stats.collected} collected items read (${data.stats.own} in their own words, ${data.stats.amplified} amplified).`,
    ),
  );

  if (data.pipeline) {
    const p = data.pipeline;
    const parts = [
      `${p.posts} posts`,
      p.threads ? `${p.threads} threads reassembled` : null,
      p.replies ? `${p.replies} replies` : null,
      p.quotes ? `${p.quotes} quotes` : null,
      p.retweets ? `${p.retweets} reposts` : null,
      p.likes ? `${p.likes} likes` : null,
    ].filter(Boolean);
    prov.append(line('Collection —', `${parts.join(', ')} · depth "${p.depth}".`));
  }

  prov.append(line('Confidence —', `${data.confidence.level}. ${data.confidence.caveat}`));

  for (const note of data.coverage?.notes ?? []) {
    prov.append(line('Gap —', note));
  }

  prov.append(
    line(
      'Panel —',
      data.demo
        ? 'demonstration verdict, no model call'
        : `${data.model}${data.usage ? ` · ${data.usage.input.toLocaleString()} in / ${data.usage.output.toLocaleString()} out` : ''}`,
    ),
  );
  root.append(prov);

  const again = el('div', 'again');
  const btn = el('button', 'btn');
  btn.type = 'button';
  btn.id = 'again';
  btn.append(el('span', 'btn__label', 'Submit another subject'), el('span', 'btn__rule'));
  again.append(btn);
  root.append(again);

  return root;
}

export function renderError(root, error) {
  root.replaceChildren();
  root.hidden = false;

  const box = el('div', 'error');
  box.append(
    el('h3', null, 'The reading room is closed on this one.'),
    el('p', null, error.message),
  );
  if (error.hint) box.append(el('p', 'error__hint', error.hint));

  const wrap = el('section', 'section');
  wrap.append(box);
  root.append(wrap);
}
