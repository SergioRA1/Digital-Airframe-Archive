import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Search } from "lucide-react";

import { pageName, navigate } from "./routes.js";
import {
  useHref,
  useLanguage,
  useTerm,
  useText,
} from "./i18n.js";
import { searchAircraft } from "./search.js";

const text = {
  en: {
    search: "Search",
    searchLabel: "Search aircraft and tools",
    noMatch: (query) => `No aircraft match "${query}".`,
    shortcutMac: "⌘K",
    shortcutOther: "CTRL K",
  },
  es: {
    search: "Buscar",
    searchLabel: "Buscar aeronaves y herramientas",
    noMatch: (query) => `Ninguna aeronave coincide con "${query}".`,
    shortcutMac: "⌘K",
    shortcutOther: "CTRL K",
  },
};

const rowHeight = 44;
const panelHeaderHeight = 52;
const panelPadding = 8;

export function SearchPalette() {
  const t = useText(text);
  const language = useLanguage();
  const href = useHref();
  const translate = useTerm();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortcutHint, setShortcutHint] = useState(null);
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  // Determine platform for shortcut hint
  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) {
      setShortcutHint(t.shortcutMac);
    } else {
      setShortcutHint(t.shortcutOther);
    }
  }, [t.shortcutMac, t.shortcutOther]);

  // Handle Ctrl+K / Meta+K at xl width
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    
    const handleShortcut = (event) => {
      if (mediaQuery.matches && (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (!open) {
          setOpen(true);
        }
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [open]);

  // Close on pointerdown outside
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
        setQuery("");
        setActiveIndex(0);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    // A closed panel is invisible: keep it away from the pointer, the
    // keyboard and screen readers.
    if (panelRef.current) {
      panelRef.current.inert = !open;
    }

    if (open) {
      inputRef.current?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [open]);

  // Search results
  const { aircraft: matchedAircraft, pages: matchedPages } = searchAircraft(
    query,
    translate,
    (page) => pageName(page, language),
  );
  const allResults = [...matchedAircraft, ...matchedPages];
  const resultCount = allResults.length;

  // Active index with wrap
  const activeResultIndex = resultCount > 0 ? activeIndex % resultCount : -1;

  // Panel height calculation: 52 + rows*44 + 8
  const noMatch = query.trim() !== "" && resultCount === 0;
  const panelHeight =
    panelHeaderHeight + resultCount * rowHeight + panelPadding + (noMatch ? 40 : 0);

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
      return;
    }

    if (resultCount === 0) {
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((current) => (current + step + resultCount) % resultCount);
      return;
    }

    if (event.key === "Enter" && activeResultIndex >= 0) {
      event.preventDefault();
      const result = allResults[activeResultIndex];
      // aircraft have slug, pages are strings
      const address = typeof result === "string" 
        ? href(`#/${result}`) 
        : href(`#/${result.slug}`);
      navigate(address);
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setActiveIndex(0);
  };

  const toggleOpen = () => {
    if (open) {
      setOpen(false);
      setQuery("");
      setActiveIndex(0);
    } else {
      setOpen(true);
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative hidden xl:block"
      style={{ width: 170, height: 44 }}
    >
      <m.div
        className={`absolute right-0 top-0 z-50 overflow-hidden bg-[#0b0f10] border transition-colors ${
          open ? "border-lime-300/60" : "border-white/15 hover:border-lime-300/50"
        }`}
        initial={false}
        animate={{
          width: open ? 340 : 170,
          height: open ? panelHeight : 44,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 26 },
          height: { type: "spring", stiffness: 240, damping: 24 },
        }}
      >
        {/* Closed state: pill */}
        <m.button
          type="button"
          ref={buttonRef}
          onClick={toggleOpen}
          aria-expanded={open}
          tabIndex={open ? -1 : 0}
          className={`absolute left-0 top-0 z-10 flex h-[42px] w-[168px] items-center gap-3 px-4 ${
            open ? "pointer-events-none" : ""
          }`}
          initial={false}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ duration: 0.12 }}
        >
          <Search size={15} className="text-white/60" />
          <span className="font-mono uppercase text-xs sm:text-[11px] tracking-[.18em] text-white/60">
            {t.search}
          </span>
          {shortcutHint && (
            <kbd aria-hidden="true" className="shrink-0 border border-white/15 px-1.5 py-0.5 font-mono text-xs sm:text-[10px] uppercase tracking-[.14em] text-white/50">
              {shortcutHint}
            </kbd>
          )}
        </m.button>

        {/* Open state: panel */}
        <m.div
          initial={false}
          ref={panelRef}
          animate={{
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: open ? 0.18 : 0.1,
            delay: open ? 0.08 : 0,
          }}
          className="absolute left-0 top-0 flex w-[338px] flex-col"
        >
          {/* Search row */}
          <label className="flex h-[52px] items-center gap-3 border-b border-white/15 px-4 transition-colors focus-within:border-lime-300/60">
            <Search size={15} className="text-white/50" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={t.search}
              aria-label={t.searchLabel}
              aria-expanded={open}
              aria-controls={resultCount > 0 ? "palette-results" : undefined}
              aria-activedescendant={activeResultIndex >= 0 ? `palette-${allResults[activeResultIndex]?.slug || allResults[activeResultIndex]}` : undefined}
              className="w-full bg-transparent text-base text-white outline-hidden focus-visible:outline-hidden placeholder:text-white/40"
            />
          </label>

          {/* Results list */}
          {resultCount > 0 && (
            <div
              id="palette-results"
              className="relative flex-1"
              style={{ height: resultCount * rowHeight }}
            >
              {/* Highlight bar */}
              <m.div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                  height: rowHeight,
                }}
                initial={false}
                animate={{
                  y: activeResultIndex * rowHeight,
                  opacity: activeResultIndex >= 0 ? 1 : 0,
                }}
                transition={{
                  y: { type: "spring", stiffness: 420, damping: 30 },
                  opacity: { duration: 0.12 },
                }}
              >
                <div className="h-full w-full bg-white/10 border-l-2 border-lime-300" />
              </m.div>

              <ul className="relative">
                <AnimatePresence initial={false} mode="popLayout">
                  {allResults.map((result, index) => {
                    const isAircraft = typeof result !== "string";
                    const key = isAircraft ? result.slug : result;
                    const displayName = isAircraft ? result.designation : pageName(result, language);
                    const isActive = index === activeResultIndex;

                    return (
                      <m.li
                        key={key}
                        id={`palette-${key}`}
                        initial={{ opacity: 0, y: -10, scale: 0.96 }}
                        animate={{ opacity: 1, y: index * rowHeight, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        className="absolute inset-x-0 top-0"
                      >
                        <a
                          href={isAircraft ? href(`#/${result.slug}`) : href(`#/${result}`)}
                          onClick={() => {
                            // The app's click handler opens the page.
                            setOpen(false);
                            setQuery("");
                            setActiveIndex(0);
                          }}
                          style={{ height: rowHeight }}
                          className={`flex items-center justify-between gap-4 px-4 text-sm transition-colors ${
                            isActive ? "text-white" : "text-white/70"
                          }`}
                        >
                          <span className="font-semibold min-w-0 truncate">
                            {displayName}
                            {isAircraft && result.name && (
                              <span className={`ml-3 font-normal ${
                                isActive ? "text-white/70" : "text-white/50"
                              }`}>
                                {result.name}
                              </span>
                            )}
                          </span>
                          {isAircraft && (
                            <span className="shrink-0 font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50">
                              {translate(result.origin)}
                            </span>
                          )}
                        </a>
                      </m.li>
                    );
                  })}
                </AnimatePresence>
              </ul>
            </div>
          )}

          {noMatch && (
            <div className="px-4 py-3 text-xs text-white/50">
              {t.noMatch(query.trim())}
            </div>
          )}
        </m.div>
      </m.div>
    </div>
  );
}
