import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  Camera,
  ChevronRight,
  LayoutGrid,
  Menu,
  Search,
  X,
} from "lucide-react";

import { aircraft } from "./aircraft.js";

export function goToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const sectionKey = sectionIds.join(",");

  useEffect(() => {
    const sections = sectionKey
      .split(",")
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [sectionKey]);

  return activeSection;
}

export function GridBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(199,255,55,0.08),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(43,93,255,0.09),transparent_34%)]" />

      <div
        className="absolute inset-[-40%] opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          transform: "perspective(700px) rotateX(62deg) translateY(12%)",
          transformOrigin: "center bottom",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,8,0)_45%,#050708_92%)]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,rgba(255,255,255,.2) 0,rgba(255,255,255,.2) 1px,transparent 1px,transparent 4px)",
        }}
      />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-lime-300"
      style={{
        scaleX: scrollYProgress,
      }}
      aria-hidden="true"
    />
  );
}

export function PageHeader({
  badge,
  items,
  activeSection,
  galleryHref,
  showHangarLink = true,
  search = false,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pendingSection = useRef(null);
  const wide = items.length > 5;
  const menuBreakpoint = search ? "" : wide ? "xl:hidden" : "md:hidden";

  const term = query.trim().toLowerCase();
  // Match at the start of a word, and list designation matches first.
  const startsWord = (text) =>
    text.toLowerCase().split(/[\s-]+/).some((word) => word.startsWith(term));
  const results = term
    ? aircraft
        .filter(
          (entry) =>
            entry.available &&
            [entry.designation, entry.name, entry.manufacturer, entry.origin]
              .some(startsWord),
        )
        .sort(
          (a, b) =>
            Number(b.designation.toLowerCase().startsWith(term)) -
            Number(a.designation.toLowerCase().startsWith(term)),
        )
    : [];

  const selectSection = (sectionId) => {
    if (!menuOpen) {
      goToSection(sectionId);
      return;
    }

    // A smooth scroll started while the menu is collapsing is cancelled by
    // the layout change, so wait until the menu has finished closing.
    pendingSection.current = sectionId;
    setMenuOpen(false);
  };

  const scrollToPendingSection = () => {
    if (pendingSection.current) {
      goToSection(pendingSection.current);
      pendingSection.current = null;
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050708]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-6 px-5 md:px-10">
        <button
          type="button"
          onClick={() =>
            showHangarLink ? (window.location.hash = "#/") : selectSection("top")
          }
          className="group flex items-center gap-3 text-left"
          aria-label={showHangarLink ? "Return to all aircraft" : "Return to top"}
        >
          <div className="grid h-8 w-8 place-items-center border border-lime-300/60 text-[11px] font-bold text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black">
            {badge}
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[.24em]">
              AIRFRAME
            </div>

            <div className="font-mono text-[10px] tracking-[.18em] text-white/60">
              DIGITAL ARCHIVE
            </div>
          </div>
        </button>

        <nav
          className={
            wide
              ? "hidden items-center gap-6 xl:flex"
              : "hidden items-center gap-6 md:flex"
          }
        >
          {items.map(([sectionId, label]) => (
            <button
              key={sectionId}
              type="button"
              onClick={() => selectSection(sectionId)}
              aria-current={activeSection === sectionId ? "true" : undefined}
              className={`text-[11px] uppercase tracking-[.18em] transition hover:text-lime-300 ${
                activeSection === sectionId
                  ? "text-lime-300"
                  : "text-white/55"
              }`}
            >
              {label}
            </button>
          ))}

          {galleryHref && (
            <a
              href={galleryHref}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[.18em] text-lime-300 transition hover:text-white"
            >
              <Camera size={13} />
              Gallery
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {showHangarLink && (
            <a
              href="#/"
              aria-label="All aircraft"
              className="flex h-10 items-center gap-2 border border-white/10 bg-white/[.03] px-3 text-[11px] uppercase tracking-[.18em] text-white/60 transition hover:border-lime-300/50 hover:text-lime-300"
            >
              <LayoutGrid size={14} />
              <span className="hidden sm:inline">All aircraft</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((currentValue) => !currentValue)}
            className={`grid h-10 w-10 place-items-center border border-white/10 bg-white/[.03] ${menuBreakpoint}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      <AnimatePresence onExitComplete={scrollToPendingSection}>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className={`overflow-hidden border-t border-white/10 bg-[#080b0c] ${menuBreakpoint}`}
          >
            <div className="grid max-h-[calc(100vh-5rem)] overflow-y-auto p-5">
              {search && (
                <div className="mx-auto mb-2 w-full max-w-xl">
                  <label className="flex items-center gap-3 border border-white/15 bg-white/[.03] px-4 py-3 focus-within:border-white/40">
                    <Search size={15} className="text-white/50" />
                    <input
                      type="search"
                      autoFocus
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search aircraft by name"
                      aria-label="Search aircraft by name"
                      className="w-full bg-transparent text-sm text-white outline-none focus-visible:outline-none placeholder:text-white/40"
                    />
                  </label>

                  {term && (
                    <ul className="mt-2 border border-white/10">
                      {results.length === 0 && (
                        <li className="px-4 py-3 text-xs text-white/50">
                          No aircraft match “{query.trim()}”.
                        </li>
                      )}

                      {results.map((entry) => (
                        <li key={entry.slug}>
                          <a
                            href={`#/${entry.slug}`}
                            className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-sm transition last:border-b-0 hover:bg-white/[.04] hover:text-lime-300"
                          >
                            <span className="font-semibold">
                              {entry.designation}
                              <span className="ml-3 font-normal text-white/50">
                                {entry.name}
                              </span>
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/50">
                              {entry.manufacturer} · {entry.origin}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {items.map(([sectionId, label]) => (
                <button
                  key={sectionId}
                  type="button"
                  onClick={() => selectSection(sectionId)}
                  aria-current={
                    activeSection === sectionId ? "true" : undefined
                  }
                  className={`border-b border-white/10 py-4 text-left text-xs uppercase tracking-[.2em] transition hover:text-lime-300 ${
                    activeSection === sectionId ? "text-lime-300" : ""
                  }`}
                >
                  {label}
                </button>
              ))}

              {galleryHref && (
                <a
                  href={galleryHref}
                  className="flex items-center gap-3 border-b border-white/10 py-4 text-left text-xs uppercase tracking-[.2em] text-lime-300"
                >
                  <Camera size={14} />
                  Gallery
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function PageFooter({ label }) {
  return (
    <footer className="relative border-t border-white/10 px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="text-xl font-bold tracking-[.15em]">{label}</div>

          <p className="mt-3 max-w-md text-xs leading-5 text-white/50">
            Independent educational and visual design concept. This is not an
            official manufacturer or military website.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
          <a href="#/" className="transition hover:text-lime-300">
            All aircraft
          </a>

          <button
            type="button"
            onClick={() => goToSection("top")}
            className="group flex items-center gap-4 uppercase tracking-[.2em] transition hover:text-lime-300"
          >
            Return to top

            <ChevronRight
              size={13}
              className="-rotate-90 transition group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1500px] flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[.2em] text-white/50 md:flex-row">
        <span>
          Made by <span className="text-white/80">Sergio Rodriguez Anton</span>
        </span>

        <a
          href="mailto:sergioranton@gmail.com"
          className="transition hover:text-lime-300"
        >
          sergioranton@gmail.com
        </a>
      </div>
    </footer>
  );
}
