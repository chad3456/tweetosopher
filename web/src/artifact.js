/**
 * The hero artifact.
 *
 * A slowly turning marble object on a dark plinth, in a room full of dust.
 * Everything is procedural — no models, no textures, no network requests — so
 * the museum loads instantly and the marble is never the same twice.
 *
 * The veining is fbm over 3D simplex noise, evaluated in object space so the
 * pattern is locked to the stone and rotates with it. The lighting is a cheap
 * hemispheric wrap rather than a PBR material: this is a scenic backdrop behind
 * body text, and correctness matters less than not fighting the type.
 */

import * as THREE from 'three';

/* Ashima Arts' 3D simplex noise (MIT). The standard implementation — worth
   pasting rather than deriving, and small enough not to warrant a dependency. */
const SIMPLEX = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p){
  float total = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    total += snoise(p) * amp;
    p *= 2.03;
    amp *= 0.5;
  }
  return total;
}
`;

const VERT = /* glsl */ `
uniform float uTime;
uniform float uWarp;
varying vec3 vObjPos;
varying vec3 vNormal;
varying vec3 vView;

${SIMPLEX}

void main() {
  vec3 p = position;

  // A slow breathing displacement. Kept small: past ~0.08 the silhouette stops
  // reading as carved stone and starts reading as a lava lamp.
  float swell = fbm(p * 1.15 + vec3(0.0, uTime * 0.06, 0.0));
  p += normal * swell * 0.075 * uWarp;

  vObjPos = position;
  vNormal = normalize(normalMatrix * normal);

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;

const FRAG = /* glsl */ `
uniform float uTime;
uniform vec3 uStone;
uniform vec3 uVein;
uniform vec3 uWarm;
uniform float uReveal;
varying vec3 vObjPos;
varying vec3 vNormal;
varying vec3 vView;

${SIMPLEX}

void main() {
  // Low frequency: Carrara has a few long veins, not a rash of them. Going
  // much above ~1.0 here is what turns marble into granite.
  vec3 p = vObjPos * 0.95;

  // Domain-warp the sample point, then take a narrow ridge of the result. The
  // ridge is what reads as a vein rather than as a cloud.
  vec3 warp = vec3(
    fbm(p + vec3(0.0, uTime * 0.02, 0.0)),
    fbm(p + vec3(4.7, 2.1, 0.0)),
    fbm(p + vec3(9.2, 0.0, 5.3))
  );
  float m = fbm(p * 0.85 + warp * 1.35);
  float vein = smoothstep(0.16, 0.0, abs(m));
  float halo = smoothstep(0.34, 0.05, abs(m)) * 0.35;
  float mottle = smoothstep(-0.5, 1.1, fbm(p * 2.2));

  vec3 base = mix(uStone, uStone * 0.955, mottle);
  vec3 color = mix(base, uVein, clamp(vein * 0.8 + halo * 0.4, 0.0, 1.0));

  // Hemispheric wrap light plus one warm key from upper left, and a rim so the
  // silhouette separates from the paper background.
  vec3 n = normalize(vNormal);
  vec3 key = normalize(vec3(-0.5, 0.85, 0.6));
  float lambert = max(dot(n, key), 0.0);
  float wrap = 0.5 + 0.5 * n.y;
  float rim = pow(1.0 - max(dot(n, normalize(vView)), 0.0), 2.4);

  color *= 0.55 + 0.55 * wrap;
  color += uWarm * lambert * 0.35;
  color += vec3(0.9, 0.84, 0.74) * rim * 0.22;

  gl_FragColor = vec4(color, uReveal);
}
`;

export function mountArtifact(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'low-power',
  });
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.35, 6.4);

  const group = new THREE.Group();
  scene.add(group);

  // ── The stone ──────────────────────────────────────────────────────────
  const uniforms = {
    uTime: { value: 0 },
    uWarp: { value: 1 },
    uReveal: { value: 0 },
    uStone: { value: new THREE.Color('#e7dfd0') },
    uVein: { value: new THREE.Color('#8a7c69') },
    uWarm: { value: new THREE.Color('#c08a52') },
  };

  const stone = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.45, 48),
    new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
    }),
  );
  stone.position.y = 0.5;
  group.add(stone);

  // ── The plinth ─────────────────────────────────────────────────────────
  const plinth = new THREE.Mesh(
    new THREE.CylinderGeometry(0.82, 0.98, 2.4, 64),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color('#241d16'),
      transparent: true,
      opacity: 0,
    }),
  );
  plinth.position.y = -2.5;
  group.add(plinth);

  // ── Dust ───────────────────────────────────────────────────────────────
  const DUST = 900;
  const positions = new Float32Array(DUST * 3);
  const drift = new Float32Array(DUST);
  for (let i = 0; i < DUST; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 11;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 7 - 1;
    drift[i] = 0.15 + Math.random() * 0.5;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      color: new THREE.Color('#7a6a55'),
      size: 0.028,
      transparent: true,
      opacity: 0,
      sizeAttenuation: true,
      depthWrite: false,
    }),
  );
  scene.add(dust);

  // ── Interaction ────────────────────────────────────────────────────────
  const pointer = { x: 0, y: 0 };
  const eased = { x: 0, y: 0 };

  function onPointerMove(e) {
    pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
    pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  /**
   * The hero is type-first. On wide screens the exhibit is pushed into the
   * right third and pulled back so it reads as something standing in the room
   * behind the wall text; on narrow screens there is no room beside the type,
   * so it centres, shrinks, and drops behind (the stylesheet also dims it).
   */
  function layout(w, h) {
    const wide = w / h > 1.05 && w >= 900;
    camera.position.z = wide ? 7.6 : 9.6;
    group.position.x = wide ? 1.95 : 0;
    group.scale.setScalar(wide ? 0.86 : 0.62);
    // Narrow: the stone floats clear above the title, and the plinth is hidden
    // — at that size it reads as a grey slab behind the lede, not as furniture.
    baseY = wide ? 0.15 : 3.4;
    plinth.visible = wide;
  }

  let baseY = 0.15;

  function resize() {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    layout(w, h);
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  // ── Loop ───────────────────────────────────────────────────────────────
  const clock = new THREE.Clock();
  let running = true;
  let scroll = 0;

  function frame() {
    if (!running) return;
    requestAnimationFrame(frame);

    // Scrolled past the hero: nothing is visible, so stop doing work.
    if (scroll > 1.15) return;

    const t = clock.getElapsedTime();
    uniforms.uTime.value = t;

    if (!reduced) {
      eased.x += (pointer.x - eased.x) * 0.045;
      eased.y += (pointer.y - eased.y) * 0.045;

      group.rotation.y = t * 0.09 + eased.x * 0.28;
      group.rotation.x = Math.sin(t * 0.21) * 0.05 - eased.y * 0.14;
      stone.position.y = 0.5 + Math.sin(t * 0.55) * 0.07;

      const pos = dust.geometry.attributes.position;
      for (let i = 0; i < DUST; i++) {
        let y = pos.array[i * 3 + 1] + drift[i] * 0.0035;
        if (y > 5.5) y = -5.5;
        pos.array[i * 3 + 1] = y;
        pos.array[i * 3] += Math.sin(t * 0.3 + i) * 0.0004;
      }
      pos.needsUpdate = true;
    }

    // Sink and fade as the hero leaves.
    group.position.y = baseY - scroll * 1.6;
    uniforms.uReveal.value = Math.max(0, uniforms.uReveal.value * (1 - scroll * 0.9));

    renderer.render(scene, camera);
  }
  frame();

  return {
    /** Fade the exhibit in — driven by the intro timeline, not by load. */
    reveal(value) {
      uniforms.uReveal.value = value;
      plinth.material.opacity = value * 0.8;
      dust.material.opacity = value * 0.75;
    },
    /** 0 at the top of the hero, 1 once it has scrolled fully away. */
    setScroll(v) {
      scroll = v;
    },
    setWarp(v) {
      uniforms.uWarp.value = v;
    },
    destroy() {
      running = false;
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();
    },
  };
}
