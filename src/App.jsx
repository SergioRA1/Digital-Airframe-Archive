import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";

import { countPageView } from "./analytics.js";
import Home from "./Home.jsx";
import { LanguageSuggestion } from "./LanguageSuggestion.jsx";
import { LanguageContext, localHref, localise } from "./i18n.js";
import { startPrefetch } from "./prefetch.js";
import {
  clearPendingPosition,
  hasPendingPosition,
  restorePosition,
} from "./scrollAnchor.js";
import {
  basePath,
  documentTitle,
  navigate,
  navigateEvent,
  parsePath,
  readLocation,
} from "./routes.js";

// The boot overlay plays once per tab. A visitor who reloads or moves between
// pages goes straight to the page.
const bootAlreadyPlayed = () => {
  try {
    return window.sessionStorage.getItem("airframe-booted") === "1";
  } catch {
    return false;
  }
};

const bootSkipped = bootAlreadyPlayed();

// Each page loads on demand, so the hangar page ships without the data for
// every aircraft. A page with Spanish text in its own module gets a
// second, Spanish variant that loads that module too and passes it in as
// `translation`, so English visitors never download it.
const localised = (load, loadSpanish) => {
  const en = lazy(load);

  const preload = (language) => {
    load().catch(() => {});
    if (language === "es" && loadSpanish) {
      loadSpanish().catch(() => {});
    }
  };

  if (!loadSpanish) {
    return {
      en,
      es: en,
      preload,
    };
  }

  return {
    en,
    es: lazy(async () => {
      const [{ default: Component }, { default: translation }] =
        await Promise.all([load(), loadSpanish()]);

      return {
        default: (props) => <Component translation={translation} {...props} />,
      };
    }),
    preload,
  };
};

// Spanish text for the data-driven pages, found by file name, so adding a
// translation needs no change here.
const spanishPages = import.meta.glob("./locales/es/pages/*.js");

// Data-driven pages share one template; only the data module differs.
const dataPage = (name, loadData) => {
  const loadPage = (loadSpanish) =>
    lazy(async () => {
      const [{ default: AircraftPage }, { default: page }, spanish] =
        await Promise.all([
          import("./AircraftPage.jsx"),
          loadData(),
          loadSpanish?.(),
        ]);
      const localisedPage = localise(page, spanish?.default);

      return {
        default: (props) => <AircraftPage page={localisedPage} {...props} />,
      };
    });

  const preload = (language) => {
    import("./AircraftPage.jsx").catch(() => {});
    loadData().catch(() => {});
    if (language === "es") {
      spanishPages[`./locales/es/pages/${name}.js`]?.().catch(() => {});
    }
  };

  return {
    en: loadPage(),
    es: loadPage(spanishPages[`./locales/es/pages/${name}.js`]),
    preload,
  };
};

const Gallery = localised(
  () => import("./Gallery.jsx"),
  () => import("./locales/es/gallery.js"),
);

// Helper to build page entries with both component and preload
const pageEntry = (componentWithPreload) => ({
  component: componentWithPreload,
  preload: componentWithPreload.preload,
});

// The page component for each route in src/routes.js (galleries, including
// the archive, are rendered by Gallery).
const pages = {
  compare: pageEntry(localised(() => import("./Compare.jsx"))),
  timeline: pageEntry(
    localised(
      () => import("./Chronology.jsx"),
      () => import("./locales/es/timeline.js"),
    ),
  ),
  glossary: pageEntry(
    localised(
      () => import("./Glossary.jsx"),
      () => import("./locales/es/glossary.js"),
    ),
  ),
  "j-20": pageEntry(
    localised(
      () => import("./J20.jsx"),
      () => import("./locales/es/j20.js"),
    ),
  ),
  "f-22": pageEntry(
    localised(
      () => import("./F22.jsx"),
      () => import("./locales/es/f22.js"),
    ),
  ),
  "f-35": pageEntry(dataPage("f35", () => import("./pages/f35.js"))),
  "su-57": pageEntry(dataPage("su57", () => import("./pages/su57.js"))),
  "f-16": pageEntry(dataPage("f16", () => import("./pages/f16.js"))),
  typhoon: pageEntry(dataPage("typhoon", () => import("./pages/typhoon.js"))),
  rafale: pageEntry(dataPage("rafale", () => import("./pages/rafale.js"))),
  gripen: pageEntry(dataPage("gripen", () => import("./pages/gripen.js"))),
  "j-35": pageEntry(dataPage("j35", () => import("./pages/j35.js"))),
  "j-16": pageEntry(dataPage("j16", () => import("./pages/j16.js"))),
  "j-15": pageEntry(dataPage("j15", () => import("./pages/j15.js"))),
  "f-15ex": pageEntry(dataPage("f15ex", () => import("./pages/f15ex.js"))),
  "kf-21": pageEntry(dataPage("kf21", () => import("./pages/kf21.js"))),
  "su-35": pageEntry(dataPage("su35", () => import("./pages/su35.js"))),
  "fa-18": pageEntry(dataPage("fa18", () => import("./pages/fa18.js"))),
  "f-2": pageEntry(dataPage("f2", () => import("./pages/f2.js"))),
};

// Track preloaded addresses to avoid duplicates
const preloaded = new Set();

// Turn an address into a route and preload the appropriate page(s)
// Home has no lazy code. Gallery routes preload Gallery (archive too).
export function preloadAddress(href) {
  // Normalize href to a string
  const hrefStr = String(href || "");

  // Skip if already preloaded
  if (preloaded.has(hrefStr)) {
    return;
  }
  preloaded.add(hrefStr);

  try {
    // Try to parse as URL first
    const url = new URL(hrefStr, window.location.href);

    // Ignore other origins
    if (url.origin !== window.location.origin) {
      return;
    }

    // Extract path from URL
    const path = url.pathname.slice(basePath.length);
    const route = parsePath(decodeURIComponent(path));

    // Ignore unknown pages and current page
    if (!route.aircraft && !route.gallery) {
      return;
    }

    // Ignore current page
    const currentRoute = readLocation(window.location);
    if (
      route.language === currentRoute.language &&
      route.aircraft === currentRoute.aircraft &&
      route.gallery === currentRoute.gallery
    ) {
      // It may be worth loading later, from another page.
      preloaded.delete(hrefStr);
      return;
    }

    // For gallery routes (including archive), preload Gallery
    if (route.gallery) {
      Gallery.preload(route.language);
      return;
    }

    // For regular pages, find and preload the page
    const pageEntry = pages[route.aircraft];
    if (pageEntry) {
      pageEntry.preload(route.language);
    }
  } catch {
    // Invalid URL or parsing error, ignore
  }
}

// Titles live in src/routes.js, which the prerendered pages share. An old
// "#/..." link is replaced by the page's own address before anything renders.
function readRoute() {
  const route = readLocation(window.location);

  if (route.redirect) {
    window.history.replaceState(null, "", route.redirect);

    return readLocation(window.location);
  }

  return route;
}

// A click on a link to another page of the site, to handle without a reload.
// Modified clicks (new tab, download) and other sites are left to the browser.
function internalAddress(event) {
  const link = event.target.closest?.("a[href]");

  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (link.target && link.target !== "_self") ||
    link.hasAttribute("download")
  ) {
    return null;
  }

  const url = new URL(link.href, window.location.href);

  if (url.origin !== window.location.origin || !url.pathname.startsWith(basePath)) {
    return null;
  }

  // A jump within the current page (#term) is left to the browser.
  if (
    url.hash &&
    url.pathname === window.location.pathname &&
    url.search === window.location.search
  ) {
    return null;
  }

  return url.pathname + url.search + url.hash;
}

function App() {
  const [booting, setBooting] = useState(() => !bootSkipped);
  const [progress, setProgress] = useState(0);
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    if (!booting) {
      return undefined;
    }

    try {
      window.sessionStorage.setItem("airframe-booted", "1");
    } catch {
      // Storage can be refused (private mode, blocked cookies). The overlay
      // then plays on every page, as it did before.
    }

    const progressTimer = window.setInterval(() => {
      setProgress((currentProgress) =>
        Math.min(100, currentProgress + 4)
      );
    }, 40);

    const bootTimer = window.setTimeout(() => {
      setBooting(false);
    }, 1550);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(bootTimer);
    };
  }, [booting]);

  // Start predictive prefetching once the app is ready
  useEffect(() => {
    const stopPrefetch = startPrefetch(preloadAddress);
    return stopPrefetch;
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      setRoute(readRoute());

      // An anchor such as glossary/#aesa is scrolled to by its page.
      if (!window.location.hash || window.location.hash.startsWith("#/")) {
        // Skip scroll-to-top if we have a pending position to restore
        if (!hasPendingPosition()) {
          window.scrollTo({
            top: 0,
            behavior: "auto",
          });
        }
      }
    };

    const handlePopState = () => {
      clearPendingPosition();
      handleNavigation();
    };

    const handleClick = (event) => {
      const address = internalAddress(event);

      if (address) {
        event.preventDefault();
        // Clear pending position for regular navigation (not language switch)
        clearPendingPosition();
        navigate(address);
      }
    };

    window.addEventListener(navigateEvent, handleNavigation);
    // Back and forward, and an old "#/..." link pasted into the address bar.
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleNavigation);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener(navigateEvent, handleNavigation);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleNavigation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = route.language;
    document.title = documentTitle(route);
    countPageView();

    // After route changes, if there's a pending position, restore it once the page renders
    if (hasPendingPosition()) {
      // Use requestAnimationFrame to let the browser paint, then restore
      // The restorePosition function will wait for stability
      requestAnimationFrame(() => {
        restorePosition();
      });
    }
  }, [route]);

  const { language } = route;
  const introDelay = bootSkipped ? 0 : booting ? 1.5 : 0.1;
  const Page = pages[route.aircraft]?.component?.[language];
  const LocalGallery = Gallery[language];

  let content = <Home introDelay={introDelay} />;

  if (route.gallery) {
    content = (
      <LocalGallery
        key={`${language}-${route.aircraft}`}
        aircraft={route.aircraft}
        onBack={() => {
          navigate(
            localHref(
              route.aircraft === "archive" ? "#/" : `#/${route.aircraft}`,
              language,
            ),
          );
        }}
      />
    );
  } else if (Page) {
    content = <Page key={language} introDelay={introDelay} />;
  }

  return (
    <LanguageContext.Provider value={language}>
      <AnimatePresence>
        {booting && (
          <m.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            data-boot
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#050708] text-[#edf0e9]"
          >
            <div className="w-[min(86vw,520px)]">
              <div className="mb-4 flex items-end justify-between font-mono text-xs sm:text-[11px] uppercase tracking-[.28em] text-white/55">
                <span>
                  {language === "es"
                    ? "Archivo digital de aeronaves"
                    : "Digital airframe archive"}
                </span>
                <span>{progress}%</span>
              </div>

              <div className="h-px w-full bg-white/15">
                <m.div
                  className="h-px bg-lime-300"
                  animate={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <div className="mt-4 font-mono text-xs sm:text-[11px] uppercase tracking-[.22em] text-lime-300/70">
                {language === "es"
                  ? "Iniciando sistemas visuales"
                  : "Initializing visual systems"}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={`${language}-${route.aircraft ?? "hangar"}-${
            route.gallery ? "gallery" : "page"
          }`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <Suspense fallback={<div className="min-h-screen bg-[#050708]" />}>
            {content}
          </Suspense>
        </m.div>
      </AnimatePresence>

      <LanguageSuggestion show={!booting} />
    </LanguageContext.Provider>
  );
}

export default App;
