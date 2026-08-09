/**
 * Motion.
 *
 * GSAP drives three things: the hero's letterpress intro, the scroll link
 * between the page and the Three.js artifact, and the reveal of each verdict
 * section as it enters. Everything degrades to "already visible" under
 * `prefers-reduced-motion` — the reveals set opacity, so a user who opts out
 * must never be left with an invisible page.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

/** Wrap each character in a span so it can be staggered. */
export function splitChars(node) {
  const text = node.textContent;
  node.replaceChildren();
  const chars = [];
  for (const ch of text) {
    const span = document.createElement('span');
    span.className = 'char';
    span.textContent = ch;
    node.append(span);
    chars.push(span);
  }
  return chars;
}

export function playIntro({ onReveal }) {
  const words = document.querySelectorAll('[data-split]');
  const chars = [...words].flatMap((w) => splitChars(w));
  const fades = document.querySelectorAll('[data-reveal]');

  if (reducedMotion) {
    gsap.set([...chars, ...fades], { opacity: 1, y: 0 });
    onReveal?.(1);
    return;
  }

  gsap.set(chars, { yPercent: 115, opacity: 0 });
  gsap.set(fades, { opacity: 0, y: 14 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to(chars, {
    yPercent: 0,
    opacity: 1,
    duration: 1.05,
    stagger: 0.032,
  })
    .to(fades, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, '-=0.6')
    .fromTo(
      { v: 0 },
      { v: 0 },
      {
        v: 1,
        duration: 2.2,
        ease: 'power2.inOut',
        onUpdate() {
          onReveal?.(this.targets()[0].v);
        },
      },
      0.15,
    );

  return tl;
}

/** Feed hero scroll progress to the artifact so it sinks out of the way. */
export function linkHeroScroll(artifact) {
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => artifact.setScroll(self.progress),
  });
}

/** Reveal each direct child section of a container as it scrolls in. */
export function revealSections(container) {
  const targets = container.querySelectorAll(
    ':scope > .section, :scope > .placard, :scope > .provenance, :scope > .again',
  );

  targets.forEach((node) => {
    if (reducedMotion) {
      gsap.set(node, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      node,
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: node,
          start: 'top 88%',
          once: true,
        },
      },
    );
  });

  // Alignment bars fill once, when their placard arrives.
  container.querySelectorAll('.score__fill').forEach((fill) => {
    const pct = Number(fill.dataset.score || 0);
    gsap.to(fill, {
      width: `${Math.max(0, Math.min(100, pct))}%`,
      duration: reducedMotion ? 0 : 1.4,
      ease: 'power2.out',
      delay: reducedMotion ? 0 : 0.3,
    });
  });

  // Rules draw themselves in.
  if (!reducedMotion) {
    container.querySelectorAll('.section__head .rule').forEach((rule) => {
      gsap.fromTo(
        rule,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: rule, start: 'top 92%', once: true },
        },
      );
    });
  }

  ScrollTrigger.refresh();
}

export function scrollTo(target) {
  const node = typeof target === 'string' ? document.querySelector(target) : target;
  if (!node) return;
  node.scrollIntoView({
    behavior: reducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}
