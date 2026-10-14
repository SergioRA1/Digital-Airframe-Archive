// Checks that every piece of English text has a Spanish translation.
//
// Each entry below pairs an English data module with its Spanish module under
// src/locales/es/. The Spanish module mirrors the English shape (objects by
// key, arrays by position) and holds only text; localise() in src/i18n.js lays
// it over the English at runtime. Fields in `fixed` are codes, links, dates or
// credits that are never translated, so they must not appear in Spanish.
//
// Run `npm run translations` for a report. A test fails if anything is missing.

import { fileURLToPath } from "node:url";

// Fixed only at the top of a page module, where `title` is the ["F", "35"]
// heading and `detail` holds SVG paths. Deeper down they are ordinary text.
const fixedAtTop = new Set([
  "slug",
  "badge",
  "footerLabel",
  "title",
  "model",
  "silhouette",
  "detail",
]);

const fixed = new Set([
  "slug",
  "silhouette",
  "href",
  "id",
  "group",
  "confidence",
  "date",
  "code",
  "seats",
  "photo",
  "photos",
  "src",
  "full",
  "source",
  "licence",
  "photographer",
  "available",
  "icon",
  "generation",
  "designation",
  "firstFlight",
  "service",
  "engines",
  "number",
  "years",
  // Shown through term() in src/i18n.js, or proper names.
  "origin",
  "manufacturer",
]);

const pageNames = [
  "f35",
  "su57",
  "f16",
  "typhoon",
  "rafale",
  "gripen",
  "j35",
  "j16",
  "j15",
  "f15ex",
  "kf21",
  "su35",
  "fa18",
  "f2",
];

// An absent module counts as an empty translation, so missing work shows up
// in the report instead of crashing it.
const load = async (path, pick = (module) => module.default) => {
  try {
    return pick(await import(new URL(path, import.meta.url)));
  } catch (error) {
    if (error.code === "ERR_MODULE_NOT_FOUND") {
      return undefined;
    }

    throw error;
  }
};

// Every named export of a module, for English modules such as data/j20.js
// that export several arrays.
const namedExports = (module) =>
  Object.fromEntries(
    Object.entries(module).filter(([name]) => name !== "default"),
  );

export const pairs = [
  ...pageNames.map((name) => ({
    name: `pages/${name}`,
    english: () => load(`../src/pages/${name}.js`),
    spanish: () => load(`../src/locales/es/pages/${name}.js`),
  })),
  {
    name: "data/j20 (J-20 page)",
    english: () => load("../src/data/j20.js", namedExports),
    spanish: () => load("../src/locales/es/j20.js"),
  },
  {
    name: "data/f22 (F-22 page)",
    english: () => load("../src/data/f22.js", namedExports),
    spanish: () => load("../src/locales/es/f22.js"),
  },
  {
    name: "usage",
    english: () => load("../src/usage.js", (module) => module.usage),
    spanish: () => load("../src/locales/es/usage.js", (module) => module.usage),
  },
  {
    name: "aircraft (hangar list)",
    english: () => load("../src/aircraft.js", (module) => module.aircraft),
    spanish: () =>
      load("../src/locales/es/aircraft.js", (module) => module.aircraft),
  },
  {
    name: "data/peers (comparison table)",
    english: () => load("../src/data/peers.js", (module) => module.peers),
    spanish: () => load("../src/locales/es/peers.js", (module) => module.peers),
  },
  {
    name: "data/gallery (photo captions)",
    english: () => load("../src/data/gallery.js", namedExports),
    spanish: () => load("../src/locales/es/gallery.js"),
  },
];

const isPlainObject = (value) =>
  value !== null &&
  typeof value === "object" &&
  Object.getPrototypeOf(value) === Object.prototype &&
  !("$$typeof" in value);

// Walks the English data and lists text with no Spanish string, Spanish
// entries with no English counterpart, and fixed fields that were translated.
export function compare(english, spanish, path = "") {
  const result = {
    missing: [],
    extra: [],
    fixedTranslated: [],
    unchanged: [],
    total: 0,
  };

  const walk = (base, translation, at) => {
    if (Array.isArray(base)) {
      base.forEach((item, index) =>
        walk(item, translation?.[index], `${at}[${index}]`),
      );

      if (Array.isArray(translation) && translation.length > base.length) {
        result.extra.push(`${at} has ${translation.length} entries, English has ${base.length}`);
      }

      return;
    }

    if (isPlainObject(base)) {
      for (const [key, value] of Object.entries(base)) {
        const childPath = at ? `${at}.${key}` : key;

        if (fixed.has(key) || (at === "" && fixedAtTop.has(key))) {
          if (translation?.[key] !== undefined) {
            result.fixedTranslated.push(childPath);
          }

          continue;
        }

        walk(value, translation?.[key], childPath);
      }

      if (isPlainObject(translation)) {
        for (const key of Object.keys(translation)) {
          if (!(key in base)) {
            result.extra.push(at ? `${at}.${key}` : key);
          }
        }
      }

      return;
    }

    if (typeof base !== "string" || !/[A-Za-z0-9]/.test(base)) {
      return;
    }

    result.total += 1;

    if (typeof translation !== "string") {
      result.missing.push(at);
    } else if (translation === base) {
      result.unchanged.push(at);
    }
  };

  walk(english, spanish, path);

  return result;
}

export async function checkTranslations() {
  const report = [];

  for (const pair of pairs) {
    const english = await pair.english();

    if (english === undefined) {
      report.push({
        name: pair.name,
        notSetUp: true,
      });
      continue;
    }

    report.push({
      name: pair.name,
      ...compare(english, await pair.spanish()),
    });
  }

  return report;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const verbose = process.argv.includes("--verbose");
  const report = await checkTranslations();
  let problems = 0;

  for (const entry of report) {
    if (entry.notSetUp) {
      console.log(`✗ ${entry.name}: English module not found`);
      problems += 1;
      continue;
    }

    const issues =
      entry.missing.length + entry.extra.length + entry.fixedTranslated.length;
    const done = entry.total - entry.missing.length;

    problems += issues;
    console.log(
      `${issues ? "✗" : "✓"} ${entry.name}: ${done}/${entry.total} translated` +
        (entry.unchanged.length ? `, ${entry.unchanged.length} kept as in English` : ""),
    );

    const list = (label, paths) => {
      if (paths.length) {
        console.log(`    ${label}:`);
        paths
          .slice(0, verbose ? Infinity : 8)
          .forEach((item) => console.log(`      ${item}`));

        if (!verbose && paths.length > 8) {
          console.log(`      … and ${paths.length - 8} more (--verbose)`);
        }
      }
    };

    list("missing", entry.missing);
    list("not in the English", entry.extra);
    list("fixed fields that must stay in English", entry.fixedTranslated);

    if (verbose) {
      list("kept as in English", entry.unchanged);
    }
  }

  process.exitCode = problems ? 1 : 0;
}
