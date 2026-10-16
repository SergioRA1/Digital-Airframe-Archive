// Draws the link-preview image (1200×630 PNG) shown when a page is shared,
// in the site's style: a two-line title, the aircraft's outline in lime and
// a line of key figures. scripts/prerender.js calls it for every page.
//
// Images are drawn as SVG and rasterised with resvg, using the fonts in
// ./fonts (Inter and JetBrains Mono, both SIL Open Font Licence), so the
// output doesn't depend on the fonts installed on the machine.

import { Resvg } from "@resvg/resvg-js";

const fontFiles = [
  "Inter-Black.ttf",
  "Inter-Regular.ttf",
  "JetBrainsMono-Regular.ttf",
].map((file) => new URL(`fonts/${file}`, import.meta.url).pathname);

export const width = 1200;
export const height = 630;

const colours = {
  background: "#050708",
  text: "#edf0e9",
  faint: "#5b5d5c",
  label: "#8b8d8c",
  lime: "#c7ff37",
  fill: "#151b1d",
};

// Comparison series colours, as on the compare page.
const series = ["#c7ff37", "#6fd3ff", "#ff8a5c"];

const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const fontOptions = {
  fontFiles,
  loadSystemFonts: false,
  defaultFontFamily: "Inter",
};

// The width of a title line at 100px, measured by rendering it, so lines
// can be sized to exactly the space they have.
const measured = new Map();

function widthAt100(text) {
  if (!measured.has(text)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="4000" height="200"><text x="0" y="150" font-family="Inter" font-weight="900" font-size="100" letter-spacing="-6" fill="#fff">${escape(text)}</text></svg>`;
    const box = new Resvg(svg, { font: fontOptions }).getBBox();

    measured.set(text, box ? box.width : text.length * 60);
  }

  return measured.get(text);
}

// The largest size, up to `largest`, at which a line fits `room` pixels.
const titleSize = (text, room, largest) =>
  Math.min(largest, Math.floor((room * 100) / widthAt100(text)));

// Splits a long line in two at the space nearest its middle.
function splitLine(text) {
  const middle = text.length / 2;
  const spaces = [...text.matchAll(/ /g)].map((match) => match.index);

  if (!spaces.length) {
    return [text];
  }

  const at = spaces.reduce((best, each) =>
    Math.abs(each - middle) < Math.abs(best - middle) ? each : best,
  );

  return [text.slice(0, at), text.slice(at + 1)];
}

// The two-line heading: the first line bright, the second faint, as in the
// site's hero sections. A second line too long for one line wraps.
function heading(top, bottom, room) {
  const topSize = titleSize(top, room, 190);
  let bottomLines = [bottom];
  let bottomSize = titleSize(bottom, room, 190);

  if (bottomSize < 72 && bottom.includes(" ")) {
    bottomLines = splitLine(bottom);
    bottomSize = Math.min(
      ...bottomLines.map((line) => titleSize(line, room, 120)),
    );
  }

  // The space between the eyebrow (y 157) and the figures (y 527).
  const areaTop = 190;
  const areaHeight = 310;
  let lines = [
    { text: top, size: topSize, colour: colours.text },
    ...bottomLines.map((text) => ({
      text,
      size: bottomSize,
      colour: colours.faint,
    })),
  ];
  const fullHeight = lines.reduce((sum, line) => sum + line.size * 0.86, 0);

  // Three lines can be taller than the space: shrink them all to fit.
  if (fullHeight > areaHeight) {
    lines = lines.map((line) => ({
      ...line,
      size: Math.floor((line.size * areaHeight) / fullHeight),
    }));
  }

  const blockHeight = lines.reduce((sum, line) => sum + line.size * 0.86, 0);
  let y = areaTop + (areaHeight - blockHeight) / 2;

  return lines
    .map((line) => {
      y += line.size * 0.86;

      return `<text x="64" y="${y - line.size * 0.1}" font-family="Inter" font-weight="900" font-size="${line.size}" letter-spacing="${-line.size * 0.06}" fill="${line.colour}">${escape(line.text)}</text>`;
    })
    .join("");
}

// The bounding box of an outline path ("M608 46 L626 135 …").
function bounds(path) {
  const numbers = path.match(/-?\d+(\.\d+)?/g).map(Number);
  const xs = numbers.filter((_, index) => index % 2 === 0);
  const ys = numbers.filter((_, index) => index % 2 === 1);

  return {
    x: Math.min(...xs),
    y: Math.min(...ys),
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
  };
}

// An outline scaled to fit a box, centred in it.
function outline(path, box, { stroke = colours.lime, fill = colours.fill, strokeWidth = 3 } = {}) {
  const shape = bounds(path);
  const scale = Math.min(box.width / shape.width, box.height / shape.height);
  const x = box.x + (box.width - shape.width * scale) / 2 - shape.x * scale;
  const y = box.y + (box.height - shape.height * scale) / 2 - shape.y * scale;

  return `<path d="${path}" transform="translate(${x} ${y}) scale(${scale})" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth / scale}" stroke-linejoin="round"/>`;
}

// The figures along the bottom: [value, label] pairs.
function figures(items) {
  let x = 64;

  return items
    .map(([value, label]) => {
      const valueText = escape(String(value).toUpperCase());
      const labelText = escape(label.toUpperCase());
      const part = `<text x="${x}" y="572" font-family="JetBrains Mono" font-size="18" letter-spacing="3.6"><tspan fill="${colours.lime}">${valueText}</tspan><tspan fill="${colours.label}" dx="14">${labelText}</tspan></text>`;

      // JetBrains Mono is 0.6em wide, plus the letter spacing.
      x += (valueText.length + labelText.length) * (18 * 0.6 + 3.6) + 14 + 44;

      return part;
    })
    .join("");
}

function frame({ badge, brand, eyebrow, body, artwork, stats }) {
  const grid = Array.from({ length: 20 }, (_, index) => index * 60)
    .map(
      (at) =>
        `<line x1="${at}" y1="0" x2="${at}" y2="${height}"/><line x1="0" y1="${at}" x2="${width}" y2="${at}"/>`,
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow" cx="72%" cy="45%" r="45%">
      <stop offset="0" stop-color="#c7ff37" stop-opacity=".12"/>
      <stop offset="1" stop-color="#c7ff37" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="${colours.background}"/>
  <g stroke="#ffffff" stroke-opacity=".04" stroke-width="1">${grid}</g>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect x="64.5" y="56.5" width="43" height="43" fill="none" stroke="${colours.lime}" stroke-opacity=".7"/>
  <text x="86" y="84" text-anchor="middle" font-family="Inter" font-weight="900" font-size="15" fill="${colours.lime}">${escape(badge)}</text>
  <text x="124" y="74" font-family="JetBrains Mono" font-size="16" letter-spacing="3" fill="${colours.text}">AIRFRAME</text>
  <text x="124" y="95" font-family="JetBrains Mono" font-size="12" letter-spacing="3" fill="${colours.label}">${escape(brand.toUpperCase())}</text>
  ${eyebrow ? `<line x1="64" y1="152" x2="96" y2="152" stroke="${colours.lime}"/><text x="110" y="157" font-family="JetBrains Mono" font-size="15" letter-spacing="4" fill="${colours.lime}">${escape(eyebrow.toUpperCase())}</text>` : ""}
  ${artwork}
  ${body}
  <line x1="64" y1="527.5" x2="1136" y2="527.5" stroke="#ffffff" stroke-opacity=".1"/>
  ${figures(stats)}
</svg>`;
}

function toPng(svg) {
  return new Resvg(svg, { font: fontOptions })
    .render()
    .asPng();
}

const brands = {
  en: "Digital aircraft archive",
  es: "Archivo digital de aeronaves",
};

// An aircraft page (and its gallery): its name, outline and key dates.
export function aircraftPreview({ language, title, entry, labels }) {
  const art = { x: 720, y: 190, width: 420, height: 300 };
  const full = `${entry.manufacturer} ${entry.designation} ${entry.name}`;

  return toPng(
    frame({
      badge: "AF",
      brand: brands[language],
      // A long maker's name ("General Dynamics / Lockheed Martin") alone.
      eyebrow: full.length > 38 ? entry.manufacturer : full,
      body: heading(title.toUpperCase(), entry.name.toUpperCase(), 610),
      artwork: outline(entry.silhouette, art),
      stats: [
        [String(entry.generation).padStart(2, "0"), labels.generation],
        [entry.firstFlight, labels.firstFlight],
        [entry.service, labels.service],
      ],
    }),
  );
}

// A page about the whole hangar: home, compare, timeline or the archive.
// `kind` picks the artwork.
export function hangarPreview({ language, kind, top, bottom, eyebrow, stats, silhouettes }) {
  const art = { x: 720, y: 190, width: 420, height: 300 };
  let artwork = "";

  if (kind === "home") {
    artwork = outline(silhouettes[0], art);
  } else if (kind === "compare") {
    // Three outlines side by side in the comparison's series colours.
    artwork = silhouettes
      .slice(0, 3)
      .map((path, index) =>
        outline(
          path,
          { x: art.x + index * 140, y: art.y + 60, width: 140, height: 220 },
          { stroke: series[index] },
        ),
      )
      .join("");
  } else if (kind === "timeline") {
    // One lane per aircraft, with milestones as dots.
    artwork = silhouettes
      .map((_, index) => {
        const y = art.y + 20 + index * (310 / silhouettes.length);
        const start = art.x + ((index * 37) % 120);
        const end = art.width + art.x - ((index * 23) % 60);
        const dots = [0, 0.35, 0.6, 0.85, 1]
          .map(
            (at) =>
              `<circle cx="${start + (end - start) * at}" cy="${y}" r="4" fill="${colours.lime}"/>`,
          )
          .join("");

        return `<line x1="${start}" y1="${y}" x2="${end}" y2="${y}" stroke="${colours.lime}" stroke-opacity=".35" stroke-width="2"/>${dots}`;
      })
      .join("");
  } else if (kind === "glossary") {
    // The alphabet's ends, drawn in outline.
    artwork = `<text x="${art.x + art.width / 2}" y="${art.y + 215}" text-anchor="middle" font-family="Inter" font-weight="900" font-size="190" letter-spacing="-8" fill="none" stroke="${colours.lime}" stroke-width="3">A–Z</text>`;
  } else {
    // The archive: a two-by-two grid of outlines.
    artwork = silhouettes
      .slice(0, 4)
      .map((path, index) =>
        outline(
          path,
          {
            x: art.x + (index % 2) * 210 + 15,
            y: art.y + Math.floor(index / 2) * 175 + 10,
            width: 180,
            height: 155,
          },
          { strokeWidth: 2.5 },
        ),
      )
      .join("");
  }

  return toPng(
    frame({
      badge: "AF",
      brand: brands[language],
      eyebrow,
      body: heading(top, bottom, 610),
      artwork,
      stats,
    }),
  );
}
