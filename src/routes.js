import { aircraft } from "./aircraft.js";
import { basePath } from "./site.js";

// Every page has its own address, so search engines can find and list each
// one: /Digital-Airframe-Archive/f-35/, .../es/f-35/gallery/, .../compare/.
// `npm run build` writes an HTML file for each (scripts/prerender.js), and
// the app moves between them without reloading (see `navigate`).
//
// Code and data write internal links in a short route form, "#/f-35" or
// "#/es/f-35/gallery", which was also the site's address format before pages
// had their own. `hrefFor` turns a route into an address, and old "#/..."
// links are redirected to the matching address when the site loads.

export { basePath };

export const aircraftSlugs = aircraft
  .filter((entry) => entry.available)
  .map((entry) => entry.slug);

export const toolPages = ["archive", "compare", "timeline", "glossary"];

const pageNames = [...toolPages, ...aircraftSlugs];

// The page a route path ("es/f-35/gallery") shows. Unknown pages fall back to
// the hangar.
export function parsePath(path) {
  const parts = path.split("/").filter(Boolean);
  let language = "en";

  if (parts[0] === "es") {
    language = "es";
    parts.shift();
  }

  const [name, view] = parts;

  // Links from before the hangar page existed pointed at "#gallery".
  if (name === "gallery") {
    return {
      language,
      aircraft: "j-20",
      gallery: true,
    };
  }

  if (!pageNames.includes(name)) {
    return {
      language,
      aircraft: null,
      gallery: false,
    };
  }

  return {
    language,
    aircraft: name,
    gallery: name === "archive" || (view === "gallery" && aircraftSlugs.includes(name)),
  };
}

// The address of a page: "/Digital-Airframe-Archive/es/f-35/gallery/".
export function routePath({ language, aircraft: page, gallery }) {
  const parts = [
    language === "es" && "es",
    page,
    gallery && page !== "archive" && "gallery",
  ].filter(Boolean);

  return basePath + parts.map((part) => `${part}/`).join("");
}

// A route ("#/f-35") as an address in `language`. A route that already names
// Spanish ("#/es/f-35") stays Spanish. Anything else, such as an external
// link, is returned unchanged.
export function hrefFor(route, language = "en") {
  if (typeof route !== "string" || !route.startsWith("#/")) {
    return route;
  }

  const page = parsePath(route.slice(2));

  return routePath({
    ...page,
    language: page.language === "es" ? "es" : language,
  });
}

// The page at a browser location. An old "#/..." link returns `redirect`,
// the address it has moved to.
export function readLocation({ pathname, search, hash }) {
  if (hash.startsWith("#/") || hash === "#gallery") {
    const path = hash === "#gallery" ? "gallery" : hash.slice(2);
    const page = parsePath(path);
    // Shared comparisons were "#/compare/f-22,j-20"; they are now
    // "compare/?aircraft=f-22,j-20".
    const [, , selection] = path.match(/^(es\/)?compare\/([^/?]+)/) ?? [];

    return {
      ...page,
      redirect:
        routePath(page) + (selection ? `?aircraft=${selection}` : ""),
    };
  }

  const path = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length)
    : pathname.replace(/^\//, "");

  return {
    ...parsePath(decodeURIComponent(path)),
    search,
  };
}

// Moves to another page of the site without reloading it. App listens for
// the event and renders the new page.
export const navigateEvent = "airframe:navigate";

export function navigate(address) {
  window.history.pushState(null, "", address);
  window.dispatchEvent(new Event(navigateEvent));
}

// Titles, shared by the app (document.title) and the prerendered pages.
const pageTitles = {
  archive: {
    en: "Visual archive",
    es: "Archivo visual",
  },
  compare: {
    en: "Compare",
    es: "Comparar",
  },
  timeline: {
    en: "Timeline",
    es: "Cronología",
  },
  glossary: {
    en: "Glossary",
    es: "Glosario",
  },
  "j-20": "J-20",
  "f-22": "F-22",
  "f-35": "F-35",
  "su-57": "Su-57",
  "f-16": "F-16",
  typhoon: "Typhoon",
  rafale: "Rafale",
  gripen: "Gripen",
  "j-35": "J-35",
  "j-16": "J-16",
  "j-15": "J-15T",
  "f-15ex": "F-15EX",
  "kf-21": "KF-21",
  "su-35": "Su-35",
  "fa-18": "F/A-18E/F",
  "f-2": "F-2",
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

export function pageName(page, language) {
  const title = pageTitles[page];

  if (title === undefined) {
    throw new Error(`No title for "${page}": add it to pageTitles in src/routes.js`);
  }

  return typeof title === "string" ? title : title[language];
}

export function documentTitle({ language, aircraft: page, gallery }) {
  const title = titles[language];

  if (!page) {
    return title.home;
  }

  return gallery && page !== "archive"
    ? title.gallery(pageName(page, language))
    : title.page(pageName(page, language));
}

// Every page in both languages, for the prerendered files and the sitemap.
export const allRoutes = ["en", "es"].flatMap((language) => [
  {
    language,
    aircraft: null,
    gallery: false,
  },
  ...toolPages.map((page) => ({
    language,
    aircraft: page,
    gallery: page === "archive",
  })),
  ...aircraftSlugs.flatMap((slug) => [
    {
      language,
      aircraft: slug,
      gallery: false,
    },
    {
      language,
      aircraft: slug,
      gallery: true,
    },
  ]),
]);
