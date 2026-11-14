// Predictive prefetching: track mouse velocity to predict which link the visitor
// will click, and preload that page's code. Uses exponential smoothing on pointer
// velocity, ray-box intersection with viewport link cache (updated on scroll, every
// 300ms), triggers preload when same target hit on 2 consecutive frames.

let cleanup = null;

export function startPrefetch(preloadAddress) {
  if (navigator.connection?.saveData) return () => {};

  let lastSample = null;
  let vx = 0, vy = 0;
  let lastFrame = null;
  let consecutiveTarget = null;
  let consecutiveCount = 0;
  let linkCache = [];
  let lastCacheTime = 0;

  const cache = () => {
    const now = Date.now();
    if (now - lastCacheTime < 300) return;
    lastCacheTime = now;
    linkCache = Array.from(document.querySelectorAll("a[href]")).map(el => ({
      el,
      rect: el.getBoundingClientRect(),
    })).filter(({ rect }) =>
      rect.right + 16 >= 0 && rect.left - 16 <= window.innerWidth &&
      rect.bottom + 16 >= 0 && rect.top - 16 <= window.innerHeight
    );
  };

  const intersect = (x, y, dx, dy, box) => {
    const { left, top, right, bottom } = box;
    let tmin = -Infinity, tmax = Infinity;

    if (dx !== 0) {
      const t1 = (left - x) / dx, t2 = (right - x) / dx;
      tmin = Math.max(tmin, Math.min(t1, t2));
      tmax = Math.min(tmax, Math.max(t1, t2));
    } else if (x < left || x > right) return null;

    if (dy !== 0) {
      const t1 = (top - y) / dy, t2 = (bottom - y) / dy;
      tmin = Math.max(tmin, Math.min(t1, t2));
      tmax = Math.min(tmax, Math.max(t1, t2));
    } else if (y < top || y > bottom) return null;

    if (tmin > tmax || tmax < 0) return null;
    const t = tmin > 0 ? tmin : tmax;
    return t <= 1 ? { t, d: t * Math.hypot(dx, dy) } : null;
  };

  const findTarget = (x, y, lx, ly, dist) => {
    cache();
    const len = Math.hypot(lx, ly);
    if (len === 0) return null;
    const dx = (lx / len) * dist, dy = (ly / len) * dist;
    let closest = null, minD = Infinity;

    for (const { el, rect } of linkCache) {
      const box = { left: rect.left - 16, top: rect.top - 16, right: rect.right + 16, bottom: rect.bottom + 16 };
      const r = intersect(x, y, dx, dy, box);
      if (r && r.d < minD) { minD = r.d; closest = el; }
    }
    return closest;
  };

  const evaluate = (x, y) => {
    lastFrame = null;
    const speed = Math.hypot(vx, vy);
    if (speed <= 0.05) { consecutiveTarget = null; consecutiveCount = 0; return; }

    const lookahead = Math.min(700, Math.max(80, speed * 500));
    const target = findTarget(x, y, vx, vy, lookahead);

    if (target) {
      if (target === consecutiveTarget) {
        if (++consecutiveCount >= 2) { preloadAddress(target.href); consecutiveCount = 0; }
      } else { consecutiveTarget = target; consecutiveCount = 1; }
    } else { consecutiveTarget = null; consecutiveCount = 0; }
  };

  const move = (e) => {
    if (e.pointerType !== "mouse") return;
    const { clientX: x, clientY: y } = e;
    const now = performance.now();

    if (lastSample && now - lastSample.t < 100) {
      const dt = now - lastSample.t;
      vx = 0.7 * ((x - lastSample.x) / dt) + 0.3 * vx;
      vy = 0.7 * ((y - lastSample.y) / dt) + 0.3 * vy;
    } else { vx = 0; vy = 0; }

    lastSample = { x, y, t: now };
    if (lastFrame) cancelAnimationFrame(lastFrame);
    lastFrame = requestAnimationFrame(() => evaluate(x, y));
  };

  const immediate = (e) => { const link = e.target.closest("a[href]"); if (link) preloadAddress(link.href); };

  document.addEventListener("pointermove", move, { passive: true });
  document.addEventListener("pointerover", immediate, { capture: true, passive: true });
  document.addEventListener("pointerdown", immediate, { passive: true });
  document.addEventListener("touchstart", immediate, { passive: true });
  document.addEventListener("focusin", immediate, { passive: true });
  window.addEventListener("scroll", cache, { passive: true });

  cleanup = () => {
    if (lastFrame) cancelAnimationFrame(lastFrame);
    document.removeEventListener("pointermove", move);
    document.removeEventListener("pointerover", immediate, { capture: true });
    document.removeEventListener("pointerdown", immediate);
    document.removeEventListener("touchstart", immediate);
    document.removeEventListener("focusin", immediate);
    window.removeEventListener("scroll", cache);
    cleanup = null;
  };

  return cleanup;
}
