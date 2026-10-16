// Writes an HTML file for every page of the site, run by `npm run build`
// after Vite has built dist/.
//
// The site is a React app, but each page has its own address (see
// src/routes.js). This gives each address its own dist/<path>/index.html, so
// GitHub Pages serves it directly and search engines and link previews see:
//   - the page's title, description, canonical address and language
//     alternates (hreflang), and Open Graph tags for link previews;
//   - the page's main text and links, inside #root, which React replaces
//     when it starts.
// It also writes a link-preview image for each page (dist/og/), dist/404.html,
// which GitHub Pages serves for any other address (the app then shows the
// hangar), and dist/sitemap.xml.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { aircraft as englishAircraft } from "../src/aircraft.js";
import { counts } from "../src/counts.js";
import { peers as englishPeers } from "../src/data/peers.js";
import {
  captions,
  galleryText as englishGalleryText,
} from "../src/data/gallery.js";
import { formatDate, localise, term } from "../src/i18n.js";
import { aircraft as spanishAircraft } from "../src/locales/es/aircraft.js";
import { peers as spanishPeers } from "../src/locales/es/peers.js";
import spanishGallery from "../src/locales/es/gallery.js";
import {
  aircraftSlugs,
  allRoutes,
  basePath,
  documentTitle,
  pageName,
  routePath,
} from "../src/routes.js";
import { siteUrl } from "../src/site.js";
import {
  aircraftPreview,
  hangarPreview,
  height as previewHeight,
  width as previewWidth,
} from "./previews/render.js";

const dist = new URL("../dist/", import.meta.url);

const text = {
  en: {
    description:
      "An interactive digital exhibition of modern combat aircraft: specifications, history, variants and photographs of twelve fighters, with comparisons and a shared timeline.",
    homeHeading: "Airframe: the hangar",
    aircraftNav: "Aircraft",
    compare: "Compare",
    compareDescription:
      "Compare the speed, weight, range and size of modern combat aircraft on animated charts, with a sortable table of every aircraft in the hangar.",
    timeline: "Timeline",
    timelineDescription:
      "Every milestone of every aircraft in the hangar on one timeline, filterable by origin and by how well each milestone is sourced.",
    archive: "Visual archive",
    gallery: "Gallery",
    specifications: "Specifications",
    history: "History",
    photographs: "Photographs",
    columns: ["Aircraft", "Generation", "Origin", "Length", "Wingspan", "First flight", "In service"],
    switchLanguage: "Ver en español",
    locale: "en_GB",
    notFound: "Page not found",
    notFoundText: "There is no page at this address.",
  },
  es: {
    description:
      "Una exposición digital interactiva de aviones de combate modernos: especificaciones, historia, variantes y fotografías de doce cazas, con comparaciones y una cronología común.",
    homeHeading: "Airframe: el hangar",
    aircraftNav: "Aeronaves",
    compare: "Comparar",
    compareDescription:
      "Compara la velocidad, el peso, el alcance y el tamaño de aviones de combate modernos en gráficos animados, con una tabla ordenable de todos los aviones del hangar.",
    timeline: "Cronología",
    timelineDescription:
      "Todos los hitos de todos los aviones del hangar en una sola cronología, filtrable por origen y por la fiabilidad de la fuente de cada hito.",
    archive: "Archivo visual",
    gallery: "Galería",
    specifications: "Especificaciones",
    history: "Historia",
    photographs: "Fotografías",
    columns: ["Aeronave", "Generación", "Origen", "Longitud", "Envergadura", "Primer vuelo", "En servicio"],
    switchLanguage: "View in English",
    locale: "es_ES",
  },
};

// The hangar size in words, as everywhere else in the copy.
text.en.description = text.en.description.replace("twelve", counts.en.all);
text.es.description = text.es.description.replace("doce", counts.es.all);

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const absolute = (route) => siteUrl + routePath(route).slice(basePath.length);

const aircraftIn = {
  en: englishAircraft,
  es: localise(englishAircraft, spanishAircraft),
};
const peersIn = {
  en: englishPeers,
  es: localise(englishPeers, spanishPeers),
};
const galleryTextIn = {
  en: englishGalleryText,
  es: localise(englishGalleryText, spanishGallery.galleryText),
};

// Each aircraft's specifications and milestones, in both languages. J-20 and
// F-22 keep theirs in src/data/; the rest are data modules in src/pages/.
const namedExports = (module) =>
  Object.fromEntries(
    Object.entries(module).filter(([name]) => name !== "default"),
  );

async function loadContent(slug) {
  if (slug === "j-20" || slug === "f-22") {
    const name = slug.replace("-", "");
    const english = namedExports(await import(`../src/data/${name}.js`));
    const spanish = (await import(`../src/locales/es/${name}.js`)).default;

    return {
      en: english,
      es: localise(english, spanish),
    };
  }

  const name = slug.replace("-", "");
  const english = (await import(`../src/pages/${name}.js`)).default;
  const spanish = (await import(`../src/locales/es/pages/${name}.js`)).default;

  return {
    en: english,
    es: localise(english, spanish),
  };
}

const content = Object.fromEntries(
  await Promise.all(
    aircraftSlugs.map(async (slug) => [slug, await loadContent(slug)]),
  ),
);

const entryFor = (slug, language) =>
  aircraftIn[language].find((entry) => entry.slug === slug);

const link = (route, label, attributes = "") =>
  `<a href="${escape(routePath(route))}"${attributes}>${escape(label)}</a>`;

// The header and navigation shared by every page: home, the other language,
// every aircraft and the three tools.
function navigation(route) {
  const { language } = route;
  const t = text[language];
  const other = language === "es" ? "en" : "es";
  const aircraftLinks = aircraftSlugs
    .map((slug) => {
      const entry = entryFor(slug, language);

      return `<li>${link({ language, aircraft: slug }, `${entry.designation} ${entry.name}`)}</li>`;
    })
    .join("");
  const tools = [
    ["compare", t.compare],
    ["timeline", t.timeline],
    ["archive", t.archive],
  ]
    .map(
      ([page, label]) =>
        `<li>${link({ language, aircraft: page, gallery: page === "archive" }, label)}</li>`,
    )
    .join("");

  return {
    header: `<header>${link({ language, aircraft: null }, "Airframe")} · ${link(
      { ...route, language: other },
      t.switchLanguage,
      ` lang="${other}" hreflang="${other}"`,
    )}</header>`,
    nav: `<nav aria-label="${escape(t.aircraftNav)}"><ul>${aircraftLinks}</ul><ul>${tools}</ul></nav>`,
  };
}

// The page's own text comes before the links to every other page.
const layout = (route, main) => {
  const { header, nav } = navigation(route);

  return `${header}<main>${main}</main>${nav}`;
};

const specificationList = (rows, language) =>
  `<dl>${rows
    .map(
      (row) =>
        `<dt>${escape(row.label)}</dt><dd>${escape(
          [row.value, row.unit].filter(Boolean).join(" "),
        )} (${escape(term(row.confidence, language))})</dd>`,
    )
    .join("")}</dl>`;

const milestoneList = (milestones, language) =>
  `<ol>${milestones
    .map(
      (milestone) =>
        `<li><strong>${escape(formatDate(milestone.date, language))}: ${escape(
          milestone.title,
        )}.</strong> ${escape(milestone.detail)}${
          milestone.source
            ? ` (<a href="${escape(milestone.source.href)}" rel="noreferrer noopener">${escape(milestone.source.name)}</a>)`
            : ""
        }</li>`,
    )
    .join("")}</ol>`;

// The description and main text of each kind of page.
function page(route) {
  const { language, aircraft: slug, gallery } = route;
  const t = text[language];

  if (!slug) {
    return {
      description: t.description,
      body: `<h1>${escape(t.homeHeading)}</h1><p>${escape(t.description)}</p>${aircraftSlugs
        .map((each) => {
          const entry = entryFor(each, language);

          return `<h2>${link({ language, aircraft: each }, `${entry.manufacturer} ${entry.designation} ${entry.name}`)}</h2><p>${escape(entry.summary)}</p>`;
        })
        .join("")}`,
    };
  }

  if (slug === "compare") {
    const rows = peersIn[language]
      .map(
        (row) =>
          `<tr><th scope="row">${link({ language, aircraft: row.slug }, row.name)}</th>${[
            row.generation,
            term(row.origin, language),
            row.length,
            row.wingspan,
            row.firstFlight,
            row.service,
          ]
            .map((cell) => `<td>${escape(cell)}</td>`)
            .join("")}</tr>`,
      )
      .join("");

    return {
      description: t.compareDescription,
      body: `<h1>${escape(t.compare)}</h1><p>${escape(t.compareDescription)}</p><table><thead><tr>${t.columns
        .map((column) => `<th scope="col">${escape(column)}</th>`)
        .join("")}</tr></thead><tbody>${rows}</tbody></table>`,
    };
  }

  if (slug === "timeline") {
    return {
      description: t.timelineDescription,
      body: `<h1>${escape(t.timeline)}</h1><p>${escape(t.timelineDescription)}</p>${aircraftSlugs
        .map(
          (each) =>
            `<h2>${link({ language, aircraft: each }, pageName(each, language))}</h2>${milestoneList(
              content[each][language].milestones,
              language,
            )}`,
        )
        .join("")}`,
    };
  }

  if (slug === "archive") {
    const archive = galleryTextIn[language].archive;

    return {
      description: archive.intro,
      body: `<h1>${escape(archive.fullName)}</h1><p>${escape(archive.intro)}</p><ul>${aircraftSlugs
        .map(
          (each) =>
            `<li>${link(
              { language, aircraft: each, gallery: true },
              `${galleryTextIn[language][each].fullName}: ${t.gallery}`,
            )}</li>`,
        )
        .join("")}</ul>`,
    };
  }

  const entry = entryFor(slug, language);

  if (gallery) {
    const galleryText = galleryTextIn[language][slug];

    return {
      description: galleryText.intro,
      body: `<h1>${escape(galleryText.fullName)}: ${escape(t.photographs)}</h1><p>${escape(
        galleryText.intro,
      )}</p><p>${link({ language, aircraft: slug }, `${entry.manufacturer} ${entry.designation} ${entry.name}`)}</p>`,
    };
  }

  const { specifications, milestones } = content[slug][language];

  return {
    description: entry.summary,
    body: `<h1>${escape(`${entry.manufacturer} ${entry.designation} ${entry.name}`)}</h1><p>${escape(
      entry.summary,
    )}</p><p>${link({ language, aircraft: slug, gallery: true }, `${t.gallery}: ${pageName(slug, language)}`)}</p><h2>${escape(
      t.specifications,
    )}</h2>${specificationList(specifications, language)}<h2>${escape(
      t.history,
    )}</h2>${milestoneList(milestones, language)}`,
  };
}

const alternates = (route) => ({
  en: absolute({ ...route, language: "en" }),
  es: absolute({ ...route, language: "es" }),
});

// The link-preview image for each page (scripts/previews/render.js), written
// to dist/og/<language>/<name>.png. An aircraft's gallery shares its image.
const previewLabels = {
  en: {
    generation: "Generation",
    firstFlight: "First flight",
    service: "In service",
    alt: (name) => `Airframe: ${name}, its outline and key dates`,
    home: ["THE", "HANGAR"],
    homeEyebrow: "Digital airframe archive",
    homeStats: (aircraftCount, originCount) => [
      [String(aircraftCount).padStart(2, "0"), "Aircraft files"],
      [String(originCount).padStart(2, "0"), "Origins"],
      ["CC", "Attributed photography"],
    ],
    compare: ["HEAD", "TO HEAD"],
    compareEyebrow: "Interactive comparison",
    compareStats: (aircraftCount) => [
      ["3", "Aircraft at a time"],
      [aircraftCount, "In the table"],
    ],
    timeline: ["FIFTY YEARS", "OF FIGHTERS"],
    timelineEyebrow: "Timeline",
    timelineStats: (milestones, aircraftCount) => [
      [milestones, "Milestones"],
      [aircraftCount, "Aircraft"],
    ],
    archive: ["VISUAL", "ARCHIVE"],
    archiveEyebrow: "Photo archive",
    archiveStats: (photos, aircraftCount) => [
      [photos, "Photographs"],
      [aircraftCount, "Aircraft"],
    ],
  },
  es: {
    generation: "Generación",
    firstFlight: "Primer vuelo",
    service: "En servicio",
    alt: (name) => `Airframe: ${name}, su silueta y fechas clave`,
    home: ["EL", "HANGAR"],
    homeEyebrow: "Archivo digital de aeronaves",
    homeStats: (aircraftCount, originCount) => [
      [String(aircraftCount).padStart(2, "0"), "Fichas de aeronaves"],
      [String(originCount).padStart(2, "0"), "Orígenes"],
      ["CC", "Fotografía con atribución"],
    ],
    compare: ["CARA", "A CARA"],
    compareEyebrow: "Comparación interactiva",
    compareStats: (aircraftCount) => [
      ["3", "Aviones a la vez"],
      [aircraftCount, "En la tabla"],
    ],
    timeline: ["CINCUENTA AÑOS", "DE CAZAS"],
    timelineEyebrow: "Cronología",
    timelineStats: (milestones, aircraftCount) => [
      [milestones, "Hitos"],
      [aircraftCount, "Aviones"],
    ],
    archive: ["ARCHIVO", "VISUAL"],
    archiveEyebrow: "Archivo fotográfico",
    archiveStats: (photos, aircraftCount) => [
      [photos, "Fotografías"],
      [aircraftCount, "Aviones"],
    ],
  },
};

const silhouetteOf = (slug) =>
  englishAircraft.find((entry) => entry.slug === slug).silhouette;
const milestoneCount = aircraftSlugs.reduce(
  (sum, slug) => sum + content[slug].en.milestones.length,
  0,
);
const photoCount = Object.keys(captions).length;
const originCount = new Set(
  englishAircraft.filter((entry) => entry.available).map((entry) => entry.origin),
).size;
const previews = new Map();

// The preview's file name and alt text, drawing the image the first time.
function preview(route) {
  const { language, aircraft: slug } = route;
  const labels = previewLabels[language];
  const name = slug ?? "home";
  const file = `og/${language}/${name}.png`;
  let alt;

  if (aircraftSlugs.includes(slug)) {
    const entry = entryFor(slug, language);

    alt = labels.alt(`${entry.manufacturer} ${entry.designation} ${entry.name}`);

    if (!previews.has(file)) {
      previews.set(
        file,
        aircraftPreview({
          language,
          title: pageName(slug, language),
          entry,
          labels,
        }),
      );
    }
  } else {
    const [top, bottom] = labels[name];
    const stats = {
      home: () => labels.homeStats(aircraftSlugs.length, originCount),
      compare: () => labels.compareStats(aircraftSlugs.length),
      timeline: () => labels.timelineStats(milestoneCount, aircraftSlugs.length),
      archive: () => labels.archiveStats(photoCount, aircraftSlugs.length),
    }[name]();
    const silhouettes = {
      home: ["j-20"],
      compare: ["f-22", "j-20", "su-57"],
      timeline: aircraftSlugs,
      archive: aircraftSlugs.slice(0, 4),
    }[name].map(silhouetteOf);

    alt = `Airframe: ${top} ${bottom}`;

    if (!previews.has(file)) {
      previews.set(
        file,
        hangarPreview({
          language,
          kind: name,
          top,
          bottom,
          eyebrow: labels[`${name}Eyebrow`],
          stats,
          silhouettes,
        }),
      );
    }
  }

  return { url: siteUrl + file, alt };
}

function head(route, title, description) {
  const urls = alternates(route);
  const image = preview(route);
  const url = urls[route.language];
  const t = text[route.language];
  const otherLocale = text[route.language === "es" ? "en" : "es"].locale;

  return `<title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <link rel="canonical" href="${escape(url)}" />
    <link rel="alternate" hreflang="en" href="${escape(urls.en)}" />
    <link rel="alternate" hreflang="es" href="${escape(urls.es)}" />
    <link rel="alternate" hreflang="x-default" href="${escape(urls.en)}" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${escape(url)}" />
    <meta property="og:locale" content="${t.locale}" />
    <meta property="og:locale:alternate" content="${otherLocale}" />
    <meta property="og:image" content="${escape(image.url)}" />
    <meta property="og:image:width" content="${previewWidth}" />
    <meta property="og:image:height" content="${previewHeight}" />
    <meta property="og:image:alt" content="${escape(image.alt)}" />`;
}

const template = readFileSync(new URL("index.html", dist), "utf8");
const metaBlock = /<!-- page-meta:[\s\S]*?<!-- \/page-meta -->/;

if (!metaBlock.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error(
    "dist/index.html has no page-meta block or empty #root: check index.html.",
  );
}

function render(language, headHtml, bodyHtml) {
  return template
    .replace('<html lang="en">', `<html lang="${language}">`)
    .replace(metaBlock, () => headHtml)
    .replace(
      '<div id="root"></div>',
      () => `<div id="root"><div class="prerender">${bodyHtml}</div></div>`,
    );
}

function write(path, html) {
  const file = new URL(path, dist);

  mkdirSync(dirname(fileURLToPath(file)), { recursive: true });
  writeFileSync(file, html);
}

for (const route of allRoutes) {
  const { description, body } = page(route);
  const title = documentTitle(route);

  write(
    `${routePath(route).slice(basePath.length)}index.html`,
    render(
      route.language,
      head(route, title, description),
      layout(route, body),
    ),
  );
}

// Any other address. Not indexed, and with no canonical address of its own.
const home = { language: "en", aircraft: null, gallery: false };

write(
  "404.html",
  render(
    "en",
    `<title>${escape(`${text.en.notFound} | Airframe Archive`)}</title>
    <meta name="robots" content="noindex" />`,
    layout(
      home,
      `<h1>${escape(text.en.notFound)}</h1><p>${escape(text.en.notFoundText)}</p>`,
    ),
  ),
);

const sitemapEntries = allRoutes
  .map((route) => {
    const urls = alternates(route);

    return `  <url>
    <loc>${escape(urls[route.language])}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${escape(urls.en)}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${escape(urls.es)}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(urls.en)}"/>
  </url>`;
  })
  .join("\n");

write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`,
);

for (const [file, png] of previews) {
  write(file, png);
}

console.log(
  `Prerendered ${allRoutes.length} pages, ${previews.size} preview images, 404.html and sitemap.xml`,
);
