import { createContext, useContext } from "react";

// The site is written in English. Spanish lives at #/es/..., and its text is
// laid over the English data (see `localise`), so numbers, icons, links and
// enum values are never copied into a translation.

export const languages = ["en", "es"];

export const LanguageContext = createContext("en");

export function useLanguage() {
  return useContext(LanguageContext);
}

// Picks the current language's strings from a { en: {...}, es: {...} } table.
// A string missing in Spanish falls back to English.
export function useText(table) {
  const language = useLanguage();

  return {
    ...table.en,
    ...table[language],
  };
}

// Turns a site link ("#/f-35", "#/") into the same page in `language`. Other
// links, such as external URLs, are returned unchanged.
export function localHref(href, language) {
  if (
    language === "en" ||
    typeof href !== "string" ||
    !href.startsWith("#/") ||
    href === "#/es" ||
    href.startsWith("#/es/")
  ) {
    return href;
  }

  return href === "#/" ? "#/es/" : `#/es${href.slice(1)}`;
}

export function useHref() {
  const language = useLanguage();

  return (href) => localHref(href, language);
}

// The same page in the other language, for the header switch.
export function switchLanguageHref(hash, language) {
  const path = hash.replace(/^#\/?/, "").replace(/^es(\/|$)/, "");

  return language === "es" ? `#/es/${path}` : `#/${path}`;
}

// React components such as lucide icons are plain objects too, so they are
// excluded by their $$typeof marker.
const isPlainObject = (value) =>
  value !== null &&
  typeof value === "object" &&
  Object.getPrototypeOf(value) === Object.prototype &&
  !("$$typeof" in value);

// Lays a translation over English data. Objects merge by key and arrays by
// position, and only strings are taken from the translation, so anything it
// leaves out stays in English and it can never replace a number, an icon or
// a component.
export function localise(base, translation) {
  if (translation === undefined || translation === null) {
    return base;
  }

  if (Array.isArray(base)) {
    return base.map((item, index) => localise(item, translation[index]));
  }

  if (isPlainObject(base)) {
    return Object.fromEntries(
      Object.entries(base).map(([key, value]) => [
        key,
        localise(value, translation[key]),
      ]),
    );
  }

  return typeof base === "string" && typeof translation === "string"
    ? translation
    : base;
}

// Fixed values that the data stores in English because code relies on them
// (filters, sorting, the timeline's date parser). They are translated only
// when shown.
const terms = {
  es: {
    CONFIRMED: "CONFIRMADO",
    REPORTED: "SEGÚN INFORMES",
    ESTIMATE: "ESTIMACIÓN",
    IDENTITY: "IDENTIDAD",
    CONFIGURATION: "CONFIGURACIÓN",
    DIMENSIONS: "DIMENSIONES",
    PERFORMANCE: "PRESTACIONES",
    PROGRAMME: "PROGRAMA",
    PROPULSION: "PROPULSIÓN",
    SENSORS: "SENSORES",
    WEAPONS: "ARMAMENTO",
    ALL: "TODO",
    "United States": "Estados Unidos",
    China: "China",
    Russia: "Rusia",
    Europe: "Europa",
    France: "Francia",
    Sweden: "Suecia",
    "Public domain": "Dominio público",
  },
};

export function term(value, language) {
  return terms[language]?.[value] ?? value;
}

export function useTerm() {
  const language = useLanguage();

  return (value) => term(value, language);
}

const months = {
  es: {
    JAN: "ENE",
    APR: "ABR",
    AUG: "AGO",
    DEC: "DIC",
  },
};

// Milestone dates stay in English in the data ("MAR 2017", "LATE 1990s")
// because the combined timeline parses them. This translates them for display.
export function formatDate(date, language) {
  if (language !== "es") {
    return date;
  }

  return date
    .replace(/\b(JAN|APR|AUG|DEC)\b/g, (month) => months.es[month])
    .replace(/^(\d{4})s–(\d{4})s$/, "DÉCADAS DE $1–$2")
    .replace(/^LATE (\d{4})s$/, "FINALES DE LA DÉCADA DE $1")
    .replace(/^LATE (\d{4})$/, "FINALES DE $1")
    .replace(/^(\d{4})s$/, "DÉCADA DE $1");
}

export function useDate() {
  const language = useLanguage();

  return (date) => formatDate(date, language);
}
