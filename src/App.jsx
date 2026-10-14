import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Home.jsx";
import { LanguageContext, localHref, localise } from "./i18n.js";

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

const pages = {
  archive: {
    title: {
      en: "Visual archive",
      es: "Archivo visual",
    },
    gallery: true,
  },
  compare: {
    title: {
      en: "Compare",
      es: "Comparar",
    },
    component: localised(() => import("./Compare.jsx")),
  },
  timeline: {
    title: {
      en: "Timeline",
      es: "Cronología",
    },
    component: localised(
      () => import("./Chronology.jsx"),
      () => import("./locales/es/timeline.js"),
    ),
  },
  "j-20": {
    title: "J-20",
    component: localised(
      () => import("./J20.jsx"),
      () => import("./locales/es/j20.js"),
    ),
  },
  "f-22": {
    title: "F-22",
    component: localised(
      () => import("./F22.jsx"),
      () => import("./locales/es/f22.js"),
    ),
  },
  "f-35": { title: "F-35", component: dataPage("f35", () => import("./pages/f35.js")) },
  "su-57": { title: "Su-57", component: dataPage("su57", () => import("./pages/su57.js")) },
  "f-16": { title: "F-16", component: dataPage("f16", () => import("./pages/f16.js")) },
  typhoon: { title: "Typhoon", component: dataPage("typhoon", () => import("./pages/typhoon.js")) },
  rafale: { title: "Rafale", component: dataPage("rafale", () => import("./pages/rafale.js")) },
  gripen: { title: "Gripen", component: dataPage("gripen", () => import("./pages/gripen.js")) },
  "j-35": { title: "J-35", component: dataPage("j35", () => import("./pages/j35.js")) },
  "j-16": { title: "J-16", component: dataPage("j16", () => import("./pages/j16.js")) },
  "j-15": { title: "J-15T", component: dataPage("j15", () => import("./pages/j15.js")) },
  "f-15ex": { title: "F-15EX", component: dataPage("f15ex", () => import("./pages/f15ex.js")) },
};

const titles = {
  en: {
    home: "Airframe | Digital Aircraft Archive",
    gallery: (name) => `${name} Gallery | Airframe Archive`,
    page: (name) => `${name} | Airframe Archive`,
  },
  es: {
    home: "Airframe | Archivo digital de aeronaves",
    gallery: (name) => `Galería del ${name} | Archivo Airframe`,
    page: (name) => `${name} | Archivo Airframe`,
  },
};

const pageTitle = (page, language) =>
  typeof page.title === "string" ? page.title : page.title[language];

// Spanish pages sit under #/es/ (e.g. #/es/f-35/gallery); everything else is
// English.
function readRoute() {
  let path = window.location.hash.replace(/^#\/?/, "");
  let language = "en";

  if (path === "es" || path.startsWith("es/")) {
    language = "es";
    path = path.slice(3);
  }

  // Links from before the hangar page existed pointed at "#gallery".
  if (path === "gallery") {
    return {
      language,
      aircraft: "j-20",
      gallery: true,
    };
  }

  const [aircraft, view] = path.split("/");

  if (aircraft === "archive") {
    return {
      language,
      aircraft,
      gallery: true,
    };
  }

  if (!pages[aircraft]) {
    return {
      language,
      aircraft: null,
      gallery: false,
    };
  }

  return {
    language,
    aircraft,
    gallery: view === "gallery",
  };
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
    const handleHashChange = () => {
      setRoute(readRoute());

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const page = pages[route.aircraft];
    const title = titles[route.language];

    document.documentElement.lang = route.language;

    if (!page) {
      document.title = title.home;
    } else if (route.aircraft === "archive") {
      document.title = title.page(pageTitle(page, route.language));
    } else if (route.gallery) {
      document.title = title.gallery(pageTitle(page, route.language));
    } else {
      document.title = title.page(pageTitle(page, route.language));
    }
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
          window.location.hash = localHref(
            route.aircraft === "archive" ? "#/" : `#/${route.aircraft}`,
            language,
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
    </LanguageContext.Provider>
  );
}

export default App;
