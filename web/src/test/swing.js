/**
 * The hero's swinging figure.
 *
 * The brief asked for a 3D render of Spider-Man swinging across the landing page. The
 * character is Marvel's, so what is here is an original figure — an anonymous silhouette
 * on a grappling line — built to do the thing that was actually wanted: a body that
 * swings past the title with real momentum and real depth.
 *
 * It is 3D in the sense that matters for the look. The skeleton is sixteen joints in
 * world space with x, y and z; the swing plane is tilted, so the figure sweeps toward
 * the viewer at the bottom of each arc and away at the top; everything is perspective-
 * projected, and limb thickness scales with depth so the near arm reads as nearer. No
 * WebGL and no library — the artifact has to be self-contained, and a jointed figure at
 * this size does not need a scene graph.
 *
 * The motion is simulated rather than keyframed, which is why it does not read as a
 * loop. Two states:
 *
 *   swinging — a damped pendulum on a line of fixed length. Angular acceleration is
 *              −(g/L)·sin θ, integrated semi-implicitly. The figure hauls in slightly
 *              through the bottom of the arc, which is what actually converts a swing
 *              into forward speed.
 *
 *   flying   — released at the forward extreme, ballistic under the same gravity, until
 *              a new anchor comes within reach and the line is fired.
 *
 * The camera does not follow horizontally. A figure held at a fixed screen position
 * over a static background reads as bobbing in place, not travelling — so the figure
 * genuinely crosses the hero, exits the right edge, and re-enters from the left with a
 * fresh set of anchors. Vertically the camera does follow, partially, to keep the arc
 * in the band above the headline.
 *
 * Three things it does not do, deliberately: it does not run when the visitor has asked
 * for reduced motion, it does not run while the hero is scrolled out of view, and it
 * does not draw on top of the title — the canvas sits behind the hero's text layer.
 */

const G = 1400; // px/s², tuned against the swing lengths below rather than to Earth
// The simulation runs slower than the physics it borrows. At 1:1 the figure crossed a
// 1280px hero in about a second and a half, which reads as a flicker rather than a
// swing; at 0.5 the arc is legible and the crossing takes six or seven seconds.
const TIME_SCALE = 0.5;
const FOCAL = 900; // perspective focal length in projected pixels
const CAMERA_Y = 0.19; // and settles around this height, high in the hero
const CAMERA_Y_FOLLOW = 0.7; // how much of the vertical swing the camera absorbs
const SCALE = 1.7; // the figure's world size; the skeleton below is authored at 1

/** The skeleton, as parent → child bone pairs over the joint names below. */
const BONES = [
  ['neck', 'head'],
  ['neck', 'hipC'],
  ['neck', 'shoulderL'], ['shoulderL', 'elbowL'], ['elbowL', 'handL'],
  ['neck', 'shoulderR'], ['shoulderR', 'elbowR'], ['elbowR', 'handR'],
  ['hipC', 'hipL'], ['hipL', 'kneeL'], ['kneeL', 'footL'],
  ['hipC', 'hipR'], ['hipR', 'kneeR'], ['kneeR', 'footR'],
];

// Bone weights, in world units. The trunk is heavier than the limbs so the silhouette
// reads as a body rather than a stick figure at small sizes.
const WEIGHT = {
  'neck>head': 7,
  'neck>hipC': 9,
  'shoulderL>elbowL': 4.5, 'elbowL>handL': 3.5,
  'shoulderR>elbowR': 4.5, 'elbowR>handR': 3.5,
  'hipL>kneeL': 5.5, 'kneeL>footL': 4,
  'hipR>kneeR': 5.5, 'kneeR>footR': 4,
};

/**
 * Builds the figure's joints in its own local frame: +y is down the line toward the
 * feet, so the whole body can then be rotated by the swing angle as one rigid pose.
 *
 * `reach` is how far the grappling arm is extended (1 at full stretch), `tuck` how far
 * the legs are drawn up (0 straight, 1 curled). Both are driven by the swing phase, and
 * the small z offsets are what stop the figure reading as a flat cut-out.
 */
function pose(reach, tuck, twist) {
  const s = Math.sin(twist), c = Math.cos(twist);
  // Local frame: origin at the neck, y increasing toward the feet.
  const j = {
    head: [0, -12, 2],
    neck: [0, 0, 0],
    hipC: [0, 26, 0],
    shoulderL: [-8 * c, 2, -8 * s],
    shoulderR: [8 * c, 2, 8 * s],
    hipL: [-6 * c, 26, -6 * s],
    hipR: [6 * c, 26, 6 * s],
  };
  // The grappling arm reaches back up the line; the trailing arm swings free.
  const up = -18 - 10 * reach;
  j.elbowL = [-10 * c - 4, up * 0.55, -10 * s];
  j.handL = [-6 * c - 2, up, -6 * s + 3];
  j.elbowR = [14 * c, 14 - 8 * reach, 14 * s];
  j.handR = [20 * c, 26 - 16 * reach, 20 * s - 4];
  // Legs tuck through the bottom of the arc and extend at the top of it.
  const kneeY = 26 + 16 * (1 - tuck) + 6 * tuck;
  const kneeZ = 14 * tuck;
  j.kneeL = [-7 * c, kneeY, -7 * s + kneeZ];
  j.kneeR = [7 * c, kneeY, 7 * s + kneeZ];
  const footY = kneeY + 18 * (1 - tuck) - 2 * tuck;
  const footZ = kneeZ + 16 * tuck;
  j.footL = [-9 * c, footY, -9 * s + footZ];
  j.footR = [9 * c, footY, 9 * s + footZ];
  for (const k of Object.keys(j)) j[k] = [j[k][0] * SCALE, j[k][1] * SCALE, j[k][2]];
  return j;
}

export function mountSwing(canvas, opts = {}) {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !canvas?.getContext) return () => {};

  const ctx = canvas.getContext('2d');
  const ink = opts.ink ?? '#14161b';
  let W = 0, H = 0, dpr = 1;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  size();

  // ── world ────────────────────────────────────────────────────────────────
  // The figure's position is in world pixels; the camera subtracts a running offset so
  // the world scrolls left forever without the numbers growing without bound.
  const anchors = [];
  let nextAnchorX = 0;
  let rng = 20260814;
  const rand = () => ((rng = (rng * 1664525 + 1013904223) >>> 0) / 4294967296);
  const body = { x: 0, y: 0, z: 0, vx: 0, vy: 0 };
  let anchor = null, rope = 0, theta = 0, omega = 0, state = 'swinging', phase = 0;

  function addAnchor(x) {
    anchors.push({
      x,
      y: -H * (0.15 + rand() * 0.3), // above the top edge, where a skyline would be
      z: -140 + rand() * 280,
    });
  }
  function ensureAnchors(aheadOf) {
    while (nextAnchorX < aheadOf + W * 1.6) {
      nextAnchorX += W * (0.34 + rand() * 0.18);
      addAnchor(nextAnchorX);
    }
    while (anchors.length > 6) anchors.shift();
  }

  /**
   * Places the figure just off the left edge, already on a line and already moving, so
   * it arcs into view rather than dropping into it. Used at mount and again on each
   * wrap, which is why the entry always looks the same shape and never the same arc —
   * the anchor heights and depths come from the running generator, not from a reset.
   */
  function enter() {
    anchors.length = 0;
    nextAnchorX = -W * 0.55;
    body.x = -W * 0.12;
    body.y = H * 0.34;
    body.z = 0;
    ensureAnchors(body.x);
    anchor = anchors.find((a) => a.x > body.x) ?? anchors[0];
    rope = Math.hypot(body.x - anchor.x, body.y - anchor.y);
    theta = Math.atan2(body.x - anchor.x, body.y - anchor.y);
    omega = 1.1;
    state = 'swinging';
    phase = theta;
  }
  enter();

  function project(x, y, z) {
    const k = FOCAL / (FOCAL + z);
    return [x * k, y * k, k];
  }

  function step(dt) {
    if (state === 'swinging') {
      // Pendulum. The haul-in through the bottom of the arc is what actually produces
      // forward speed — a purely passive pendulum would swing back and get nowhere.
      omega += (-(G / rope) * Math.sin(theta)) * dt;
      omega *= 1 - 0.12 * dt;
      theta += omega * dt;
      const haul = 1 - 0.16 * Math.cos(theta);
      const r = rope * haul;
      body.x = anchor.x + r * Math.sin(theta);
      body.y = anchor.y + r * Math.cos(theta);
      // The swing plane is tilted, so the figure comes toward the viewer at the bottom.
      body.z = anchor.z + 110 * Math.sin(theta) * Math.cos(theta * 0.5);
      phase = theta;
      // Release at the forward extreme, carrying the tangential velocity.
      if (theta > 0.42 && omega > 0) {
        const v = omega * r;
        body.vx = Math.cos(theta) * v + 60;
        body.vy = -Math.sin(theta) * v;
        state = 'flying';
      }
    } else {
      body.vy += G * dt;
      body.x += body.vx * dt;
      body.y += body.vy * dt;
      body.z += (0 - body.z) * 1.6 * dt;
      phase += dt * 3;
      // Fire a new line once one is both ahead and within a plausible span.
      const next = anchors.find((a) => a.x > body.x + 40);
      if (next) {
        const d = Math.hypot(next.x - body.x, next.y - body.y);
        if (d < H * 1.15 && body.vy > 0) {
          anchor = next;
          rope = d;
          theta = Math.atan2(body.x - anchor.x, body.y - anchor.y);
          // Convert the ballistic velocity into angular velocity about the new anchor.
          const tx = Math.cos(theta), ty = -Math.sin(theta);
          omega = (body.vx * tx + body.vy * ty) / rope;
          state = 'swinging';
        }
      }
    }
    ensureAnchors(body.x);

    // Off the right edge, or dropped out of the bottom because no anchor was in range:
    // re-enter from the left. The second case is rare but must be handled, or a bad
    // draw of anchor heights leaves an empty hero until the tab is reloaded.
    if (body.x > W + 70 || body.y > H * 2.2) enter();
  }

  // The vertical camera absorbs most of the swing's rise and fall, which keeps the
  // figure in the band above the headline instead of crossing it twice an arc. It
  // absorbs most and not all: a figure pinned to one height stops reading as swinging.
  let camY = 0;
  let camYInit = false;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const wantY = (body.y - H * CAMERA_Y) * CAMERA_Y_FOLLOW;
    camY = camYInit ? camY + (wantY - camY) * 0.06 : (camYInit = true, wantY);
    // Hard vertical bound. The follow is deliberately slow, so a fast release can carry
    // the figure off the top before the camera catches up — which showed up as the hero
    // going briefly empty mid-crossing. Clamping the camera keeps the body inside this
    // band whatever the physics does, without flattening the swing that stays in range.
    camY = Math.min(Math.max(camY, body.y - H * 0.52), body.y - H * 0.1);

    // Depth-scaled line thickness: near limbs are heavier, which is most of what makes
    // a flat projection read as a solid.
    const swinging = state === 'swinging';
    const reach = swinging ? 1 : Math.max(0, 1 - Math.abs(Math.sin(phase)));
    const tuck = swinging
      ? Math.max(0, Math.cos(theta)) * 0.9
      : 0.5 + 0.5 * Math.sin(phase * 1.4);
    const twist = 0.5 + 0.35 * Math.sin(phase * 0.8);

    // The body rotates as one rigid pose about the line, which is what a swinging body
    // does — the head leads into the arc rather than staying upright.
    const lean = swinging ? theta : Math.atan2(body.vx, -body.vy) * 0.35;
    const cs = Math.cos(lean), sn = Math.sin(lean);
    const local = pose(reach, tuck, twist);
    const world = {};
    for (const [name, [lx, ly, lz]] of Object.entries(local)) {
      world[name] = [
        body.x + (lx * cs - ly * sn),
        body.y - camY + (lx * sn + ly * cs),
        body.z + lz,
      ];
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // The line, drawn first so the hand sits on top of it.
    const [ax, ay, ak] = project(anchor.x - W / 2, anchor.y - camY - H / 2, anchor.z);
    const [hx, hy] = project(world.handL[0] - W / 2, world.handL[1] - H / 2, world.handL[2]);
    if (swinging) {
      ctx.strokeStyle = ink;
      ctx.globalAlpha = 0.22;
      ctx.lineWidth = Math.max(0.6, 1.4 * ak);
      ctx.beginPath();
      ctx.moveTo(ax + W / 2, ay + H / 2);
      ctx.lineTo(hx + W / 2, hy + H / 2);
      ctx.stroke();
    }

    // Subordinate to the type by design. The figure passes behind the headline — the
    // glyphs occlude it, which is the effect wanted — but at full ink it competes with
    // the words for the same weight, so it is carried at the same strength as the
    // partition behind it rather than at the strength of the title.
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = ink;
    for (const [a, b] of BONES) {
      const [x1, y1, k1] = project(world[a][0] - W / 2, world[a][1] - H / 2, world[a][2]);
      const [x2, y2, k2] = project(world[b][0] - W / 2, world[b][1] - H / 2, world[b][2]);
      const w = (WEIGHT[`${a}>${b}`] ?? 3) * SCALE;
      ctx.lineWidth = Math.max(1, w * (k1 + k2) * 0.5);
      ctx.beginPath();
      ctx.moveTo(x1 + W / 2, y1 + H / 2);
      ctx.lineTo(x2 + W / 2, y2 + H / 2);
      ctx.stroke();
    }

    // The head, drawn as a disc so it does not taper away like a bone end.
    const [hxx, hyy, hk] = project(world.head[0] - W / 2, world.head[1] - H / 2, world.head[2]);
    ctx.fillStyle = ink;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(hxx + W / 2, hyy + H / 2, Math.max(3, 6.5 * SCALE * hk), 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // ── loop ─────────────────────────────────────────────────────────────────
  let raf = 0;
  let last = 0;
  let running = false;

  function frame(t) {
    if (!running) return;
    const dt = Math.min(0.033, last ? (t - last) / 1000 : 0.016);
    last = t;
    // Fixed sub-steps: the pendulum is stiff at short rope lengths and a dropped frame
    // on a variable step visibly kicks the figure sideways.
    let rest = dt * TIME_SCALE;
    while (rest > 0) { const h = Math.min(1 / 240, rest); step(h); rest -= h; }
    draw();
    raf = requestAnimationFrame(frame);
  }
  function start() { if (running) return; running = true; last = 0; raf = requestAnimationFrame(frame); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  // Paused whenever the hero is not on screen, so a visitor reading the glossary is not
  // paying for a simulation they cannot see.
  const io = new IntersectionObserver(
    ([e]) => (e.isIntersecting ? start() : stop()),
    { threshold: 0 },
  );
  io.observe(canvas);

  const onResize = () => { size(); };
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    stop();
    io.disconnect();
    window.removeEventListener('resize', onResize);
  };
}
