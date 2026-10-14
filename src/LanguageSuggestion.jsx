import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";

import { languages, switchLanguageHref, useLanguage } from "./i18n.js";
import { navigate } from "./routes.js";

// Offers the other language when the browser prefers it: a visitor whose
// browser is set to Spanish and opens an English page sees "Leer en
// español", and the reverse. It never switches language by itself. Once the
// visitor follows it, closes it or uses the header switch, it stays away.

const storageKey = "airframe-language-choice";

// Saved per browser. Storage can be unavailable (private windows, blocked
// site data), in which case the notice simply shows again next visit.
export function rememberLanguageChoice(choice) {
  try {
    window.localStorage.setItem(storageKey, choice);
  } catch {
    // Nothing to do: the choice just isn't remembered.
  }
}

function hasChosen() {
  try {
    return window.localStorage.getItem(storageKey) !== null;
  } catch {
    return false;
  }
}

// The first of the site's languages in the browser's preference list.
function preferredLanguage() {
  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return preferences
    .map((tag) => tag?.toLowerCase().split("-")[0])
    .find((tag) => languages.includes(tag));
}

// Written in the language it offers, for a reader of that language.
const text = {
  en: {
    label: "Language",
    message: "This page is also available in English.",
    link: "Read in English",
    close: "Close",
  },
  es: {
    label: "Idioma",
    message: "Esta página también está disponible en español.",
    link: "Leer en español",
    close: "Cerrar",
  },
};

export function LanguageSuggestion({ show }) {
  const language = useLanguage();
  const [closed, setClosed] = useState(false);
  const suggested = preferredLanguage();
  // Read on every render, so a choice made with the header switch counts.
  const visible =
    show && !closed && !hasChosen() && suggested && suggested !== language;
  const t = text[suggested] ?? text.en;

  const close = () => {
    rememberLanguageChoice(language);
    setClosed(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.aside
          key={suggested}
          lang={suggested}
          aria-label={t.label}
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 16,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center gap-4 border border-lime-300/30 bg-[#050708]/95 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm"
        >
          <div className="min-w-0 flex-1">
            <p className="text-sm leading-6 text-white/70">{t.message}</p>
            <a
              href={switchLanguageHref(window.location, suggested)}
              onClick={(event) => {
                event.preventDefault();
                rememberLanguageChoice(suggested);
                setClosed(true);
                navigate(switchLanguageHref(window.location, suggested));
              }}
              hrefLang={suggested}
              className="mt-2 inline-block font-mono text-xs uppercase tracking-[.18em] text-lime-300 transition hover:text-white"
            >
              {t.link}
            </a>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label={t.close}
            title={t.close}
            className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 text-white/60 transition hover:border-lime-300/50 hover:text-lime-300"
          >
            <X size={16} />
          </button>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
