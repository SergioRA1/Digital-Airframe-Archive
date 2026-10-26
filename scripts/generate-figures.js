// Generates src/figures.js, the numbers behind the comparison charts, from
// each aircraft's specifications. Run it with `npm run figures` after
// changing a specification. A test fails if src/figures.js is out of date.
//
// The figures are generated rather than read in the browser so the compare
// page doesn't download every aircraft's full text for six numbers.

import { existsSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { specifications as f22Specifications } from "../src/data/f22.js";
import { specifications as j20Specifications } from "../src/data/j20.js";
import { dataPages } from "../src/dataPages.js";
import { peers } from "../src/data/peers.js";
import { localise } from "../src/i18n.js";
import spanishF22 from "../src/locales/es/f22.js";
import spanishJ20 from "../src/locales/es/j20.js";

// Each metric is found by its English specification label.
export const metrics = [
  {
    key: "speed",
    label: "Maximum speed",
    spanishLabel: "Velocidad máxima",
    unit: "MACH",
    specification: "MAXIMUM SPEED",
  },
  {
    key: "mtow",
    label: "Max takeoff weight",
    spanishLabel: "Peso máximo al despegue",
    unit: "KG",
    specification: "MAX TAKEOFF WEIGHT",
  },
  {
    key: "thrust",
    label: "Thrust per engine",
    spanishLabel: "Empuje por motor",
    unit: "KN",
    specification: "ENGINE THRUST",
  },
  {
    // Not a specification: total afterburning thrust over max takeoff weight,
    // worked out in deriveThrustToWeight() below.
    key: "thrustToWeight",
    label: "Thrust-to-weight",
    spanishLabel: "Relación empuje-peso",
    unit: "AT MAX WEIGHT",
    spanishUnit: "AL PESO MÁXIMO",
  },
  {
    key: "radius",
    label: "Combat radius",
    spanishLabel: "Radio de combate",
    unit: "KM",
    specification: "COMBAT RADIUS",
  },
  {
    key: "ceiling",
    label: "Service ceiling",
    spanishLabel: "Techo de servicio",
    unit: "M",
    specification: "SERVICE CEILING",
  },
  {
    key: "length",
    label: "Length",
    spanishLabel: "Longitud",
    unit: "M",
    specification: "LENGTH",
  },
  {
    key: "wingspan",
    label: "Wingspan",
    spanishLabel: "Envergadura",
    unit: "M",
    specification: "WINGSPAN",
  },
];


const specificationSources = {
  "j-20": j20Specifications,
  "f-22": f22Specifications,
  ...Object.fromEntries(
    dataPages.map((page) => [page.slug, page.specifications]),
  ),
};

// Spanish specification text, where it exists yet, for the displayed wording.
const spanishPage = async (name) => {
  const path = new URL(`../src/locales/es/pages/${name}.js`, import.meta.url);

  return existsSync(path) ? (await import(path)).default : {};
};

const spanishSpecifications = {
  "j-20": spanishJ20.specifications,
  "f-22": spanishF22.specifications,
  ...Object.fromEntries(
    await Promise.all(
      // Module file names are the slug without its hyphen ("f-35" → f35.js).
      dataPages.map(async (page) => [
        page.slug,
        (await spanishPage(page.slug.replace("-", ""))).specifications,
      ]),
    ),
  ),
};

// "≈ 36,700" → 36700, "MACH 2 CLASS" → 2, and a range such as "20.4–21.2"
// → its midpoint, 20.8.
export function parseFigure(text) {
  const numbers = (text.match(/\d[\d,]*(?:\.\d+)?/g) ?? []).map((number) =>
    Number(number.replace(/,/g, "")),
  );

  if (numbers.length === 0) {
    return null;
  }

  const mean = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;

  // Rounded so a midpoint reads 20.8 rather than 20.799999999999997.
  return Math.round(mean * 100) / 100;
}

// The chart value always comes from the English row; only the displayed
// wording ("MACH 1,6", "≈ 31.800") is translated.
function readFigure(rows, displayRows, metric) {
  const index = rows.findIndex((entry) => entry.label === metric.specification);

  if (index === -1) {
    return null;
  }

  return {
    value: parseFigure(rows[index].value),
    display: displayRows[index].value,
    confidence: rows[index].confidence,
  };
}

// Engines reported for an aircraft besides the one its figures describe. The
// compare page's performance model can plot them in place of the current
// engine. Each is a specification row on the aircraft's page.
const alternativeEngines = [
  {
    slug: "j-20",
    engine: "WS-15",
    specification: "WS-15 THRUST",
  },
];

// The current engine's name from the powerplant row ("2 × WS-10C" → "WS-10C").
function currentEngine(rows) {
  return rows
    .find((entry) => entry.label === "POWERPLANT")
    .value.replace(/^\d+\s*×\s*/, "");
}

export function buildAlternatives(language = "en") {
  return Object.fromEntries(
    alternativeEngines.map(({ slug, engine, specification }) => {
      const rows = specificationSources[slug];
      const displayRows =
        language === "es"
          ? localise(rows, spanishSpecifications[slug])
          : rows;

      return [
        slug,
        {
          current: currentEngine(rows),
          engine,
          thrust: readFigure(rows, displayRows, { specification }),
        },
      ];
    }),
  );
}

// The least certain input sets the confidence of a derived figure.
const confidenceOrder = ["CONFIRMED", "REPORTED", "ESTIMATE"];

// Engines × thrust per engine, over max takeoff weight in newtons. The engine
// count comes from the comparison table.
function deriveThrustToWeight(slug, values, language) {
  const engines = Number(peers.find((peer) => peer.slug === slug).engines);

  if (!values.thrust || !values.mtow) {
    return null;
  }

  const value =
    Math.round(
      ((engines * values.thrust.value * 1000) / (values.mtow.value * 9.80665)) *
        100,
    ) / 100;
  const number = value.toFixed(2);

  return {
    value,
    display: `≈ ${language === "es" ? number.replace(".", ",") : number}`,
    confidence: [values.thrust.confidence, values.mtow.confidence].sort(
      (a, b) => confidenceOrder.indexOf(b) - confidenceOrder.indexOf(a),
    )[0],
  };
}

export function buildFigures(language = "en") {
  return Object.fromEntries(
    Object.entries(specificationSources).map(([slug, rows]) => {
      const displayRows =
        language === "es"
          ? localise(rows, spanishSpecifications[slug])
          : rows;
      const values = Object.fromEntries(
        metrics
          .filter((metric) => metric.specification)
          .map((metric) => [metric.key, readFigure(rows, displayRows, metric)]),
      );

      values.thrustToWeight = deriveThrustToWeight(slug, values, language);

      return [
        slug,
        Object.fromEntries(metrics.map((metric) => [metric.key, values[metric.key]])),
      ];
    }),
  );
}

// Writes the module in the project's code style.
export function renderFigures() {
  const text = (value) => JSON.stringify(value);
  const key = (name) => (/^[a-z]\w*$/i.test(name) ? name : text(name));

  const metricLines = (label, unit) =>
    metrics.flatMap((metric) => [
      "  {",
      `    key: ${text(metric.key)},`,
      `    label: ${text(metric[label])},`,
      `    unit: ${text(metric[unit] ?? metric.unit)},`,
      "  },",
    ]);

  const figureLines = (language) =>
    Object.entries(buildFigures(language)).flatMap(([slug, values]) => [
      `  ${key(slug)}: {`,
      ...Object.entries(values).map(([name, figure]) =>
        figure
          ? `    ${name}: figure(${figure.value}, ${text(figure.display)}, ${text(figure.confidence)}),`
          : `    ${name}: null,`,
      ),
      "  },",
    ]);

  return [
    "// Generated by scripts/generate-figures.js from each aircraft's",
    "// specifications. Do not edit by hand: change the specification and run",
    "// `npm run figures`. `value` drives the charts, `display` and `confidence`",
    "// come from the specification row, and `null` means the aircraft's page",
    "// does not publish that figure.",
    "",
    "const figure = (value, display, confidence) => ({",
    "  value,",
    "  display,",
    "  confidence,",
    "});",
    "",
    "export const metrics = [",
    ...metricLines("label", "unit"),
    "];",
    "",
    "export const figures = {",
    ...figureLines("en"),
    "};",
    "",
    "const spanishMetrics = [",
    ...metricLines("spanishLabel", "spanishUnit"),
    "];",
    "",
    "// Same values, with the Spanish specification wording where it exists.",
    "const spanishFigures = {",
    ...figureLines("es"),
    "};",
    "",
    "// Engines the performance model can plot instead of the current one.",
    "export const alternativesByLanguage = {",
    ...["en", "es"].flatMap((language) => [
      `  ${language}: {`,
      ...Object.entries(buildAlternatives(language)).flatMap(([slug, entry]) => [
        `    ${key(slug)}: {`,
        `      current: ${text(entry.current)},`,
        `      engine: ${text(entry.engine)},`,
        `      thrust: figure(${entry.thrust.value}, ${text(entry.thrust.display)}, ${text(entry.thrust.confidence)}),`,
        "    },",
      ]),
      "  },",
    ]),
    "};",
    "",
    "export const metricsByLanguage = {",
    "  en: metrics,",
    "  es: spanishMetrics,",
    "};",
    "",
    "export const figuresByLanguage = {",
    "  en: figures,",
    "  es: spanishFigures,",
    "};",
    "",
  ].join("\n");
}

export const outputPath = fileURLToPath(
  new URL("../src/figures.js", import.meta.url),
);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeFileSync(outputPath, renderFigures());
  console.log(`Wrote ${outputPath}`);
}
