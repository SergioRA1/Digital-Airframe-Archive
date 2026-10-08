import { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./Home.jsx";

// Each aircraft page and the gallery load on demand, so the hangar page ships
// without the data for all twelve aircraft.
const Gallery = lazy(() => import("./Gallery.jsx"));

// Data-driven pages share one template; only the data module differs.
const dataPage = (loadData) =>
  lazy(async () => {
    const [{ default: AircraftPage }, { default: page }] = await Promise.all([
      import("./AircraftPage.jsx"),
      loadData(),
    ]);

    return {
      default: (props) => <AircraftPage page={page} {...props} />,
    };
  });

const pages = {
  archive: { title: "Visual archive", gallery: true },
  compare: { title: "Compare", component: lazy(() => import("./Compare.jsx")) },
  timeline: { title: "Timeline", component: lazy(() => import("./Chronology.jsx")) },
  "j-20": { title: "J-20", component: lazy(() => import("./J20.jsx")) },
  "f-22": { title: "F-22", component: lazy(() => import("./F22.jsx")) },
  "f-35": { title: "F-35", component: dataPage(() => import("./pages/f35.js")) },
  "su-57": { title: "Su-57", component: dataPage(() => import("./pages/su57.js")) },
  "f-16": { title: "F-16", component: dataPage(() => import("./pages/f16.js")) },
  typhoon: { title: "Typhoon", component: dataPage(() => import("./pages/typhoon.js")) },
  rafale: { title: "Rafale", component: dataPage(() => import("./pages/rafale.js")) },
  gripen: { title: "Gripen", component: dataPage(() => import("./pages/gripen.js")) },
  "j-35": { title: "J-35", component: dataPage(() => import("./pages/j35.js")) },
  "j-16": { title: "J-16", component: dataPage(() => import("./pages/j16.js")) },
  "j-15": { title: "J-15T", component: dataPage(() => import("./pages/j15.js")) },
  "f-15ex": { title: "F-15EX", component: dataPage(() => import("./pages/f15ex.js")) },
};

function readRoute() {
  const path = window.location.hash.replace(/^#\/?/, "");

  // Links from before the hangar page existed pointed at "#gallery".
  if (path === "gallery") {
    return {
      aircraft: "j-20",
      gallery: true,
    };
  }

  const [aircraft, view] = path.split("/");

  if (aircraft === "archive") {
    return {
      aircraft,
      gallery: true,
    };
  }

  if (!pages[aircraft]) {
    return {
      aircraft: null,
      gallery: false,
    };
  }

  return {
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

    if (!page) {
      document.title = "Airframe | Digital Aircraft Archive";
    } else if (route.aircraft === "archive") {
      document.title = "Visual archive | Airframe Archive";
    } else if (route.gallery) {
      document.title = `${page.title} Gallery | Airframe Archive`;
    } else {
      document.title = `${page.title} | Airframe Archive`;
    }
  }, [route]);

  const introDelay = booting ? 1.5 : 0.1;
  const Page = pages[route.aircraft]?.component;

  let content = <Home introDelay={introDelay} />;

  if (route.gallery) {
    content = (
      <Gallery
        key={route.aircraft}
        aircraft={route.aircraft}
        onBack={() => {
          window.location.hash =
            route.aircraft === "archive" ? "/" : `/${route.aircraft}`;
        }}
      />
    );
  } else if (Page) {
    content = <Page introDelay={introDelay} />;
  }

  return (
    <>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050708] text-[#edf0e9]"
          >
            <div className="w-[min(86vw,520px)]">
              <div className="mb-4 flex items-end justify-between font-mono text-[11px] uppercase tracking-[.28em] text-white/55">
                <span>Digital airframe archive</span>
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

              <div className="mt-4 font-mono text-[11px] uppercase tracking-[.22em] text-lime-300/70">
                Initializing visual systems
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={<div className="min-h-screen bg-[#050708]" />}>
        {content}
      </Suspense>
    </>
  );
}

export default App;
