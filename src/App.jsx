import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Home.jsx";
import { LanguageSuggestion } from "./LanguageSuggestion.jsx";
import { LanguageContext, localHref, localise } from "./i18n.js";
import {
  basePath,
  documentTitle,
  navigate,
  navigateEvent,
  readLocation,
} from "./routes.js";

// Each page loads on demand, so the hangar page ships without the data for
// every aircraft. A page with Spanish text in its own module gets a
// second, Spanish variant that loads that module too and passes it in as
// `translation`, so English visitors never download it.
const localised = (load, loadSpanish) => {
  const en = lazy(load);

  if (!loadSpanish) {
    return {
      en,
      es: en,
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

  return {
    en: loadPage(),
    es: loadPage(spanishPages[`./locales/es/pages/${name}.js`]),
  };
};

const Gallery = localised(
  () => import("./Gallery.jsx"),
  () => import("./locales/es/gallery.js"),
);

// The page component for each route in src/routes.js (galleries, including
// the archive, are rendered by Gallery).
const pages = {
  compare: {
    component: localised(() => import("./Compare.jsx")),
  },
  timeline: {
    component: localised(
      () => import("./Chronology.jsx"),
      () => import("./locales/es/timeline.js"),
    ),
  },
  "j-20": {
    component: localised(
      () => import("./J20.jsx"),
      () => import("./locales/es/j20.js"),
    ),
  },
  "f-22": {
    component: localised(
      () => import("./F22.jsx"),
      () => import("./locales/es/f22.js"),
    ),
  },
  "f-35": { component: dataPage("f35", () => import("./pages/f35.js")) },
  "su-57": { component: dataPage("su57", () => import("./pages/su57.js")) },
  "f-16": { component: dataPage("f16", () => import("./pages/f16.js")) },
  typhoon: { component: dataPage("typhoon", () => import("./pages/typhoon.js")) },
  rafale: { component: dataPage("rafale", () => import("./pages/rafale.js")) },
  gripen: { component: dataPage("gripen", () => import("./pages/gripen.js")) },
  "j-35": { component: dataPage("j35", () => import("./pages/j35.js")) },
  "j-16": { component: dataPage("j16", () => import("./pages/j16.js")) },
  "j-15": { component: dataPage("j15", () => import("./pages/j15.js")) },
  "f-15ex": { component: dataPage("f15ex", () => import("./pages/f15ex.js")) },
};

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

  return url.origin === window.location.origin &&
    url.pathname.startsWith(basePath)
    ? url.pathname + url.search
    : null;
}

function App() {
  const [booting, setBooting] = useState(true);
  const [progress, setProgress] = useState(0);
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      setRoute(readRoute());

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    const handleClick = (event) => {
      const address = internalAddress(event);

      if (address) {
        event.preventDefault();
        navigate(address);
      }
    };

    window.addEventListener(navigateEvent, handleNavigation);
    // Back and forward, and an old "#/..." link pasted into the address bar.
    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("hashchange", handleNavigation);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener(navigateEvent, handleNavigation);
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("hashchange", handleNavigation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = route.language;
    document.title = documentTitle(route);
  }, [route]);

  const { language } = route;
  const introDelay = booting ? 1.5 : 0.1;
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
          <motion.div
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050708] text-[#edf0e9]"
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
                <motion.div
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
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={<div className="min-h-screen bg-[#050708]" />}>
        {content}
      </Suspense>

      <LanguageSuggestion show={!booting} />
    </LanguageContext.Provider>
  );
}

export default App;
