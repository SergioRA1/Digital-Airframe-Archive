// Scroll position anchor for language switching.
// Records the current scroll position by section id and fraction, then restores
// it after the new language page has rendered.

let pendingPosition = null;

/**
 * Records the current scroll position.
 * Finds the last element with an id inside <main> or #root whose top is at or above
 * the viewport top, plus the fraction of that element's height already scrolled past.
 * Falls back to fraction of the whole document scrolled.
 * If scrollY is 0, records nothing.
 */
export function rememberPosition() {
  const scrollY = window.scrollY;

  if (scrollY === 0) {
    pendingPosition = null;
    return;
  }

  // Find all elements with ids inside <main> or #root
  const root = document.getElementById("root") || document.documentElement;
  const main = document.querySelector("main");
  const container = main || root;

  const elementsWithId = [];
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_ELEMENT,
    { acceptNode: (node) => (node.id ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) },
  );

  let node;
  while ((node = walker.nextNode())) {
    elementsWithId.push(node);
  }

  // Find the last element whose top is at or above viewport top
  const viewportTop = scrollY;
  let targetElement = null;

  for (const element of elementsWithId) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + scrollY;

    if (rect.height > 0 && elementTop <= viewportTop) {
      targetElement = element;
    } else {
      // Elements are in tree order, so once we pass viewportTop we can stop
      // (assuming no absolute positioning that would reorder them)
      // But we need to check all to find the LAST one at or above viewport
    }
  }

  if (targetElement) {
    const rect = targetElement.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const elementHeight = rect.height;
    const scrolledPast = viewportTop - elementTop;
    const fraction = Math.min(1, Math.max(0, scrolledPast / elementHeight));

    pendingPosition = {
      elementId: targetElement.id,
      fraction: fraction,
      // The page is rebuilt for the other language, so the same id on a
      // different node means the new page has rendered.
      oldElement: targetElement,
      time: Date.now(),
    };
  } else {
    // Fallback: use fraction of whole document
    const docHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const maxScroll = docHeight - viewportHeight;
    pendingPosition = {
      elementId: null,
      fraction: maxScroll > 0 ? scrollY / maxScroll : 0,
      oldElement: main,
      time: Date.now(),
    };
  }
}

/**
 * Restores the scroll position recorded by rememberPosition().
 * Waits until the element with that id exists and document height has been
 * stable for a couple of animation frames (give up after about 3 seconds).
 * Then scrolls to element top + fraction * element height with behavior "instant".
 * Clears the pending position afterwards.
 */
export function restorePosition() {
  if (!pendingPosition) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const startTime = Date.now();
    const timeout = 3000;
    const stabilityFrames = 4;

    let lastHeight = 0;
    let stableCount = 0;
    let timer = null;

    const check = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed > timeout) {
        cleanup();
        pendingPosition = null;
        resolve();
        return;
      }

      const currentHeight = document.documentElement.scrollHeight;

      // Check if height is stable
      if (Math.abs(currentHeight - lastHeight) < 1) {
        stableCount++;
      } else {
        stableCount = 0;
        lastHeight = currentHeight;
      }

      // Check if the target element exists
      const current = pendingPosition.elementId
        ? document.getElementById(pendingPosition.elementId)
        : document.querySelector("main");
      const elementExists =
        current !== null && current !== pendingPosition.oldElement;

      if (stableCount >= stabilityFrames && elementExists) {
        doRestore();
        cleanup();
        resolve();
      } else {
        timer = requestAnimationFrame(check);
      }
    };

    const doRestore = () => {
      if (pendingPosition.elementId) {
        const element = document.getElementById(pendingPosition.elementId);

        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const offset = elementTop + pendingPosition.fraction * rect.height;

          window.scrollTo({
            top: offset,
            behavior: "instant",
          });
        }
      } else {
        // Fallback: use fraction of whole document
        const docHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const maxScroll = docHeight - viewportHeight;
        const targetScroll = pendingPosition.fraction * maxScroll;

        window.scrollTo({
          top: targetScroll,
          behavior: "instant",
        });
      }

      pendingPosition = null;
    };

    const cleanup = () => {
      if (timer) {
        cancelAnimationFrame(timer);
        timer = null;
      }
    };

    check();
  });
}

/**
 * Clears any pending position (e.g., when navigating elsewhere).
 */
export function clearPendingPosition() {
  pendingPosition = null;
}

/**
 * Returns true if there's a pending position to restore.
 */
export function hasPendingPosition() {
  // A click that never navigated (opened in a new tab, say) must not affect
  // a later navigation.
  if (pendingPosition && Date.now() - pendingPosition.time > 4000) {
    pendingPosition = null;
  }

  return pendingPosition !== null;
}
