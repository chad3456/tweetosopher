import { mountArtifact } from './artifact.js';
import { playIntro, linkHeroScroll, revealSections, scrollTo } from './motion.js';
import { analyze, getHealth, AnalysisError } from './api.js';
import { renderVerdict, renderError } from './verdict.js';

const $ = (sel) => document.querySelector(sel);

const form = $('#analyze-form');
const handleInput = $('#handle');
const sigil = $('#sigil');
const hint = $('#hint');
const submit = $('#submit');
const modeNote = $('#mode-note');
const engineBadge = $('#engine-badge');
const colophonEngine = $('#colophon-engine');
const deliberation = $('#deliberation');
const stageText = $('#stage-text');
const stageLog = $('#stage-log');
const verdictRoot = $('#verdict');

/* ── Hero ──────────────────────────────────────────────────────────────── */

const artifact = mountArtifact($('#artifact'));
playIntro({ onReveal: (v) => artifact.reveal(v) });
linkHeroScroll(artifact);

/* ── Platform affordances ──────────────────────────────────────────────── */

const PLATFORM_UI = {
  twitter: {
    sigil: '@',
    placeholder: 'marbledust',
    hint: 'A handle, or a full profile URL.',
  },
  substack: {
    sigil: '¶',
    placeholder: 'the-long-way',
    hint: 'A publication name, or its full URL.',
  },
};

function currentPlatform() {
  return form.elements.platform.value;
}

function syncPlatform() {
  const ui = PLATFORM_UI[currentPlatform()];
  sigil.textContent = ui.sigil;
  handleInput.placeholder = ui.placeholder;
  hint.textContent = ui.hint;
}

form.querySelectorAll('input[name="platform"]').forEach((radio) => {
  radio.addEventListener('change', syncPlatform);
});
syncPlatform();

/* ── Engine status ─────────────────────────────────────────────────────── */

let health = null;

(async () => {
  health = await getHealth();
  if (!health) {
    engineBadge.textContent = 'api offline';
    modeNote.textContent =
      'The API is not responding. Start it with `npm run dev:api`.';
    return;
  }

  engineBadge.textContent =
    health.engine === 'live' ? `panel: ${health.model}` : 'panel: demonstration';
  colophonEngine.textContent =
    health.engine === 'live'
      ? `Verdicts by ${health.model}.`
      : 'Running in demonstration mode — set ANTHROPIC_API_KEY for live verdicts.';

  const notes = [];
  if (health.engine !== 'live') {
    notes.push(
      'No ANTHROPIC_API_KEY: the panel will serve a prepared demonstration verdict.',
    );
  }
  if (!health.sources.twitter.timeline) {
    notes.push(
      'No X_BEARER_TOKEN: Twitter subjects fall back to the sample archive. Substack works without credentials.',
    );
  } else if (!health.sources.twitter.likes) {
    notes.push(
      'No X_USER_ACCESS_TOKEN: likes will not be read, so the panel judges output only.',
    );
  }
  modeNote.textContent = notes.join(' ');
})();

/* ── Deliberation theatre ──────────────────────────────────────────────── */

/* The panel takes a while. These rotate underneath the real stage messages so
   the wait reads as deliberation rather than as a hang. */
const MURMURS = [
  'Heraclitus objects to the premise.',
  'Someone has brought up the cave again.',
  'Diogenes is eating loudly.',
  'Montaigne has digressed.',
  'Kant is drafting a rule.',
  'Weil is re-reading the same three posts.',
  'Baudrillard says the corpus is already a copy.',
  'A vote is called and immediately disputed.',
  'Nietzsche wants the likes read aloud.',
  'Wittgenstein is questioning the word “vibe”.',
];

let murmurTimer = null;

function logLine(text) {
  const li = document.createElement('li');
  li.textContent = text;
  stageLog.append(li);
  while (stageLog.children.length > 5) stageLog.firstChild.remove();
}

function startDeliberation() {
  verdictRoot.hidden = true;
  verdictRoot.replaceChildren();
  stageLog.replaceChildren();
  stageText.textContent = 'Convening.';
  deliberation.hidden = false;
  scrollTo('#deliberation');

  let i = Math.floor(Math.random() * MURMURS.length);
  murmurTimer = setInterval(() => {
    logLine(MURMURS[i % MURMURS.length]);
    i += 1 + Math.floor(Math.random() * 3);
  }, 3200);
}

function stopDeliberation() {
  clearInterval(murmurTimer);
  murmurTimer = null;
  deliberation.hidden = true;
}

const STAGE_HEADLINE = {
  cached: 'Recalling a recent acquisition.',
  collecting: 'Collecting the corpus.',
  reading: 'Cataloguing.',
  deliberating: 'The panel is reading.',
  writing: 'Writing the wall text.',
};

/* ── Submit ────────────────────────────────────────────────────────────── */

let inFlight = null;

async function run(handle, platform) {
  inFlight?.abort();
  const controller = new AbortController();
  inFlight = controller;

  submit.disabled = true;
  startDeliberation();

  try {
    for await (const event of analyze({
      handle,
      platform,
      signal: controller.signal,
    })) {
      if (STAGE_HEADLINE[event.stage]) {
        stageText.textContent = STAGE_HEADLINE[event.stage];
      }
      if (event.message) logLine(event.message);
      if (event.stage === 'writing') {
        // A rough word count, so the log shows the verdict getting longer.
        logLine(`${Math.round(event.written / 5.5)} words on the wall.`);
      }
      if (event.stage === 'done') {
        stopDeliberation();
        renderVerdict(verdictRoot, event.result);
        revealSections(verdictRoot);
        scrollTo(verdictRoot);
        history.replaceState(null, '', `?platform=${platform}&handle=${encodeURIComponent(handle)}`);
      }
    }
  } catch (err) {
    if (err.name === 'AbortError') return;
    stopDeliberation();
    renderError(
      verdictRoot,
      err instanceof AnalysisError
        ? err
        : new AnalysisError('Could not reach the reading room.', err.message),
    );
    revealSections(verdictRoot);
    scrollTo(verdictRoot);
  } finally {
    if (inFlight === controller) {
      inFlight = null;
      submit.disabled = false;
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const handle = handleInput.value.trim();
  if (!handle) {
    handleInput.focus();
    return;
  }
  run(handle, currentPlatform());
});

// "Submit another subject" lives inside the rendered verdict.
verdictRoot.addEventListener('click', (e) => {
  if (e.target.closest('#again')) {
    scrollTo('#desk');
    handleInput.focus();
    handleInput.select();
  }
});

/* ── Deep links ────────────────────────────────────────────────────────── */

const params = new URLSearchParams(location.search);
const linkedHandle = params.get('handle');
const linkedPlatform = params.get('platform');

if (linkedHandle) {
  if (linkedPlatform && PLATFORM_UI[linkedPlatform]) {
    form.elements.platform.value = linkedPlatform;
    syncPlatform();
  }
  handleInput.value = linkedHandle;
  run(linkedHandle, currentPlatform());
}
