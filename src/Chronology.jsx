import { useMemo, useState } from "react";
import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpRight, Minus, Plus } from "lucide-react";

import { aircraft } from "./aircraft.js";
import { milestones as f22Milestones } from "./data/f22.js";
import { milestones as j20Milestones } from "./data/j20.js";
import { localise, useDate, useHref, useTerm, useText } from "./i18n.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  SectionLabel,
  useActiveSection,
} from "./Layout.jsx";
import f15ex from "./pages/f15ex.js";
import f16 from "./pages/f16.js";
import f2 from "./pages/f2.js";
import f35 from "./pages/f35.js";
import fa18 from "./pages/fa18.js";
import gripen from "./pages/gripen.js";
import j15 from "./pages/j15.js";
import j16 from "./pages/j16.js";
import j35 from "./pages/j35.js";
import kf21 from "./pages/kf21.js";
import rafale from "./pages/rafale.js";
import su35 from "./pages/su35.js";
import su57 from "./pages/su57.js";
import typhoon from "./pages/typhoon.js";
import { counts } from "./counts.js";

const text = {
  en: {
    navigationItems: [
      ["top", "Filter"],
      ["chart", "Chart"],
      ["list", "List"],
    ],
    eyebrow: "Combined timeline",
    heroTop: "FIFTY YEARS",
    heroBottom: "OF FIGHTERS",
    intro:
      `Every milestone from all ${counts.en.all} aircraft files on one axis, from the F-16's first prototypes to the latest deliveries. Filter by origin or by how well a milestone is sourced.`,
    origin: "Origin",
    confidence: "Confidence",
    shown: (count, total) => `of ${total} milestones shown`,
    chartLabel: "01 / Chart",
    chartHeading: `${counts.en.All} programmes, one axis.`,
    chartIntro:
      "Each line runs from an aircraft's first recorded milestone to its latest. Point at a dot, or select it, to read the entry.",
    chartAria: (count, from, to) =>
      `Timeline chart of ${count} milestones for ${counts.en.all} aircraft, from ${from} to ${to}. The same entries are listed below.`,
    openFile: (name) => `Open the ${name} file`,
    listLabel: "02 / List",
    listHeading: "Every entry, in order.",
    listIntro:
      "The same milestones as a table, using the filters above. Select a row to mark it on the chart.",
    newest: "Newest first",
    oldest: "Oldest first",
    caption: "Milestones for all aircraft, filtered by origin and confidence",
    headings: ["Date", "Aircraft", "Milestone", "Confidence"],
    empty: "{t.empty}",
    showFewer: "Show fewer",
    showAll: (count) => `Show all ${count} milestones`,
    footerLabel: "AIRFRAME / TIMELINE",
  },
  es: {
    navigationItems: [
      ["top", "Filtros"],
      ["chart", "Gráfico"],
      ["list", "Lista"],
    ],
    eyebrow: "Cronología conjunta",
    heroTop: "CINCUENTA AÑOS",
    heroBottom: "DE CAZAS",
    intro:
      `Todos los hitos de los ${counts.es.all} aviones en un solo eje, desde los primeros prototipos del F-16 hasta las últimas entregas. Filtra por origen o por la fiabilidad de la fuente de cada hito.`,
    origin: "Origen",
    confidence: "Fiabilidad",
    shown: (count, total) => `de ${total} hitos mostrados`,
    chartLabel: "01 / Gráfico",
    chartHeading: `${counts.es.All} programas, un solo eje.`,
    chartIntro:
      "Cada línea va del primer hito registrado de un avión al más reciente. Pasa el cursor sobre un punto, o selecciónalo, para leer la entrada.",
    chartAria: (count, from, to) =>
      `Gráfico cronológico de ${count} hitos de ${counts.es.all} aviones, de ${from} a ${to}. Las mismas entradas se enumeran debajo.`,
    openFile: (name) => `Abrir la ficha del ${name}`,
    listLabel: "02 / Lista",
    listHeading: "Cada entrada, por orden.",
    listIntro:
      "Los mismos hitos en forma de tabla, con los filtros de arriba. Selecciona una fila para marcarla en el gráfico.",
    newest: "Más recientes primero",
    oldest: "Más antiguos primero",
    caption: "Hitos de todos los aviones, filtrados por origen y fiabilidad",
    headings: ["Fecha", "Avión", "Hito", "Fiabilidad"],
    empty: "Ningún hito coincide con estos filtros.",
    showFewer: "Mostrar menos",
    showAll: (count) => `Mostrar los ${count} hitos`,
    footerLabel: "AIRFRAME / CRONOLOGÍA",
  },
};

const sectionIds = text.en.navigationItems.map(([sectionId]) => sectionId);

const sources = {
  "j-20": j20Milestones,
  "f-22": f22Milestones,
  ...Object.fromEntries(
    [
      f35,
      su57,
      f16,
      typhoon,
      rafale,
      gripen,
      j35,
      j16,
      j15,
      f15ex,
      kf21,
      su35,
      fa18,
      f2,
    ].map(
      (page) => [page.slug, page.milestones],
    ),
  ),
};

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

// Turns dates such as "11 JAN 2011", "FEB–MAR 2026" or "LATE 1990s" into a
// decimal year. Ranges sort by their first value.
function toYear(date) {
  const yearMatch = date.match(/\d{4}/);
  let year = Number(yearMatch[0]);

  if (date.slice(yearMatch.index + 4, yearMatch.index + 5) === "s") {
    if (/EARLY/.test(date)) year += 2;
    else if (/LATE/.test(date)) year += 8;
    else year += 5;

    return year;
  }

  const month = months.findIndex((name) => date.includes(name));
  const day = date.match(/^(\d{1,2}) /);

  if (month !== -1) year += month / 12;
  else if (/LATE/.test(date)) year += 0.8;

  if (day) year += (Number(day[1]) - 1) / 365;

  return year;
}

const events = aircraft
  .filter((entry) => sources[entry.slug])
  .flatMap((entry) =>
    sources[entry.slug].map((milestone, index) => ({
      ...milestone,
      id: `${entry.slug}-${index}`,
      index,
      slug: entry.slug,
      designation: entry.designation,
      origin: entry.origin,
      year: toYear(milestone.date),
    })),
  )
  .sort((a, b) => a.year - b.year);

// One lane per aircraft, ordered by its earliest milestone.
const lanes = aircraft
  .filter((entry) => sources[entry.slug])
  .map((entry) => {
    const own = events.filter((event) => event.slug === entry.slug);

    return {
      ...entry,
      start: own[0].year,
      end: own[own.length - 1].year,
    };
  })
  .sort((a, b) => a.start - b.start);

// The list starts short and expands on request.
const collapsedRows = 20;

const origins = ["All", ...new Set(lanes.map((lane) => lane.origin))];
// Only levels that some milestone uses, so no filter comes up empty.
const levels = ["CONFIRMED", "REPORTED", "ESTIMATE"].filter((level) =>
  events.some((event) => event.confidence === level),
);
const confidences = ["All", ...levels];

const confidenceFill = {
  CONFIRMED: "#c7ff37",
  REPORTED: "#fcd34d",
  ESTIMATE: "rgba(255,255,255,.55)",
};

// Chart geometry, in SVG units.
const chart = {
  width: 1200,
  labelWidth: 100,
  right: 28,
  top: 36,
  laneHeight: 38,
};

const firstYear = Math.floor(events[0].year / 5) * 5;
const lastYear = Math.ceil((events[events.length - 1].year + 0.5) / 5) * 5;
const chartHeight = chart.top + lanes.length * chart.laneHeight + 12;

const xFor = (year) =>
  chart.labelWidth +
  ((year - firstYear) / (lastYear - firstYear)) *
    (chart.width - chart.labelWidth - chart.right);

const yFor = (slug) =>
  chart.top +
  lanes.findIndex((lane) => lane.slug === slug) * chart.laneHeight +
  chart.laneHeight / 2;

const ticks = Array.from(
  { length: (lastYear - firstYear) / 5 + 1 },
  (_, index) => firstYear + index * 5,
);

// Unlike the aircraft pages, estimates get their own colour here so the chart
// can tell them apart from reported entries.
function ConfidenceLabel({ confidence }) {
  const term = useTerm();

  return (
    <span
      className="flex items-center gap-2 whitespace-nowrap font-mono text-xs sm:text-[10px] uppercase tracking-[.2em]"
      style={{ color: confidenceFill[confidence] }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: confidenceFill[confidence] }}
      />
      {term(confidence)}
    </span>
  );
}

function FilterGroup({ label, options, value, onChange }) {
  const term = useTerm();

  return (
    <div>
      <div className="mb-3 font-mono text-xs sm:text-[10px] uppercase tracking-[.22em] text-white/50">
        {label}
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className={`border px-4 py-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] transition ${
              value === option
                ? "border-lime-300 bg-lime-300 text-black"
                : "border-white/15 text-white/60 hover:border-lime-300 hover:text-lime-300"
            }`}
          >
            {option === "All" ? term("ALL") : term(option)}
          </button>
        ))}
      </div>
    </div>
  );
}

function Chronology({ introDelay = 0.1, translation }) {
  const t = useText(text);
  const href = useHref();
  const term = useTerm();
  const date = useDate();
  const navigationItems = t.navigationItems;
  const activeSection = useActiveSection(sectionIds);
  const [origin, setOrigin] = useState("All");
  const [confidence, setConfidence] = useState("All");
  const [newestFirst, setNewestFirst] = useState(true);
  const [activeId, setActiveId] = useState(events[events.length - 1].id);
  const [showAll, setShowAll] = useState(false);

  const matches = (event) =>
    (origin === "All" || event.origin === origin) &&
    (confidence === "All" || event.confidence === confidence);

  // Spanish text is laid over each aircraft's milestones by position.
  const shownText = useMemo(() => {
    if (!translation) {
      return null;
    }

    return Object.fromEntries(
      Object.entries(sources).map(([slug, list]) => [
        slug,
        localise(list, translation.milestones?.[slug]),
      ]),
    );
  }, [translation]);
  const shown = (event) =>
    shownText ? shownText[event.slug][event.index] : event;

  const filtered = events.filter(matches);
  const ordered = newestFirst ? [...filtered].reverse() : filtered;
  const visible = showAll ? ordered : ordered.slice(0, collapsedRows);

  const active = events.find((event) => event.id === activeId);

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="TL"
        items={navigationItems}
        activeSection={activeSection}
      />

      <main>
        <section
          id="top"
          className="relative scroll-mt-20 px-5 pb-20 pt-40 md:px-10"
        >
          <m.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: introDelay,
              duration: 0.8,
            }}
            className="relative mx-auto max-w-[1500px]"
          >
            <SectionLabel>{t.eyebrow}</SectionLabel>

            <h1 className="text-[clamp(3.2rem,10vw,9rem)] font-black leading-[.8] tracking-[-.075em]">
              {t.heroTop}
              <span className="block text-white/40">{t.heroBottom}</span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              {t.intro}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <FilterGroup
                label={t.origin}
                options={origins}
                value={origin}
                onChange={setOrigin}
              />

              <FilterGroup
                label={t.confidence}
                options={confidences}
                value={confidence}
                onChange={setConfidence}
              />
            </div>

            <div className="mt-8 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              <span className="mr-3 text-lime-300">
                {String(filtered.length).padStart(3, "0")}
              </span>
              {t.shown(filtered.length, events.length)}
            </div>
          </m.div>
        </section>

        <section
          id="chart"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>{t.chartLabel}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.chartHeading}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                {t.chartIntro}
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
              <svg
                viewBox={`0 0 ${chart.width} ${chartHeight}`}
                className="min-w-[900px]"
                role="group"
                aria-label={t.chartAria(events.length, firstYear, lastYear)}
              >
                {ticks.map((year) => (
                  <g key={year}>
                    <line
                      x1={xFor(year)}
                      x2={xFor(year)}
                      y1={chart.top - 8}
                      y2={chartHeight - 8}
                      stroke="rgba(255,255,255,.07)"
                    />

                    <text
                      x={xFor(year)}
                      y={chart.top - 16}
                      textAnchor="middle"
                      className="fill-white/40 font-mono text-[11px]"
                    >
                      {year}
                    </text>
                  </g>
                ))}

                {lanes.map((lane, index) => {
                  const y = yFor(lane.slug);
                  const dimmed = origin !== "All" && lane.origin !== origin;

                  return (
                    <m.g
                      key={lane.slug}
                      animate={{
                        opacity: dimmed ? 0.2 : 1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    >
                      <a href={href(`#/${lane.slug}`)}>
                        <text
                          x={16}
                          y={y + 4}
                          className="fill-white/70 font-mono text-[12px] uppercase tracking-[.1em] transition hover:fill-lime-300"
                        >
                          {lane.designation}
                        </text>
                      </a>

                      <line
                        x1={chart.labelWidth}
                        x2={chart.width - chart.right}
                        y1={y}
                        y2={y}
                        stroke="rgba(255,255,255,.04)"
                      />

                      <m.line
                        x1={xFor(lane.start)}
                        x2={xFor(lane.end)}
                        y1={y}
                        y2={y}
                        stroke="rgba(199,255,55,.35)"
                        strokeWidth={2}
                        initial={{
                          pathLength: 0,
                        }}
                        whileInView={{
                          pathLength: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.4,
                          delay: index * 0.06,
                          ease: "easeInOut",
                        }}
                      />
                    </m.g>
                  );
                })}

                {events.map((event) => {
                  const shown = matches(event);
                  const isActive = event.id === activeId;
                  const x = xFor(event.year);
                  const y = yFor(event.slug);

                  return (
                    <g
                      key={event.id}
                      onMouseEnter={() => shown && setActiveId(event.id)}
                      onClick={() => shown && setActiveId(event.id)}
                      className={shown ? "cursor-pointer" : ""}
                    >
                      {/* A larger invisible target makes small dots easy to hit. */}
                      <circle cx={x} cy={y} r={11} fill="transparent" />

                      <m.circle
                        cx={x}
                        cy={y}
                        fill={confidenceFill[event.confidence]}
                        stroke="#050708"
                        strokeWidth={2}
                        initial={{
                          r: 0,
                        }}
                        animate={{
                          r: isActive ? 7.5 : 4.5,
                          opacity: shown ? 1 : 0.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />

                      {isActive && (
                        <m.circle
                          cx={x}
                          cy={y}
                          fill="none"
                          stroke={confidenceFill[event.confidence]}
                          strokeWidth={1}
                          initial={{
                            r: 6,
                            opacity: 0.9,
                          }}
                          animate={{
                            r: 16,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
              <AnimatePresence mode="wait">
                {active && (
                  <m.div
                    key={active.id}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="border border-white/10 bg-white/[.02] p-6"
                    aria-live="polite"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs sm:text-[11px] uppercase tracking-[.24em] text-lime-300">
                        {date(active.date)} · {active.designation}
                      </span>

                      <ConfidenceLabel confidence={active.confidence} />
                    </div>

                    <h3 className="mt-3 text-xl font-semibold md:text-2xl">
                      {shown(active).title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/60">
                      {shown(active).detail}
                    </p>

                    <a
                      href={href(`#/${active.slug}`)}
                      className="group mt-5 inline-flex items-center gap-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/60 transition hover:text-lime-300"
                    >
                      {t.openFile(active.designation)}
                      <ArrowUpRight
                        size={13}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </m.div>
                )}
              </AnimatePresence>

              <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50 lg:flex-col">
                {levels.map((name) => (
                  <span key={name} className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: confidenceFill[name] }}
                    />
                    {term(name)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="list"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>{t.listLabel}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.listHeading}
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-7 text-white/50">
                  {t.listIntro}
                </p>

                <button
                  type="button"
                  onClick={() => setNewestFirst((value) => !value)}
                  className="mt-6 flex items-center gap-3 border border-white/15 px-4 py-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/70 transition hover:border-lime-300 hover:text-lime-300"
                >
                  {newestFirst ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
                  {newestFirst ? t.newest : t.oldest}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  {t.caption}
                </caption>

                <thead>
                  <tr className="border-b border-white/10 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                    {t.headings.map(
                      (heading) => (
                        <th
                          key={heading}
                          scope="col"
                          className="p-5 font-normal"
                        >
                          {heading}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>

                <tbody>
                  <AnimatePresence initial={false}>
                    {visible.map((event) => (
                      <m.tr
                        key={event.id}
                        layout
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        onClick={() => setActiveId(event.id)}
                        className={`cursor-pointer border-b border-white/10 align-top transition-colors last:border-b-0 ${
                          event.id === activeId
                            ? "bg-lime-300/[.07] text-white"
                            : "text-white/65 hover:bg-white/[.03]"
                        }`}
                      >
                        <td className="whitespace-nowrap p-5 font-mono text-xs sm:text-[11px] uppercase tracking-[.18em] text-lime-300">
                          {date(event.date)}
                        </td>

                        <th
                          scope="row"
                          className="whitespace-nowrap p-5 font-semibold text-white/85"
                        >
                          <a
                            href={href(`#/${event.slug}`)}
                            onClick={(clickEvent) => clickEvent.stopPropagation()}
                            className="underline decoration-lime-300/50 underline-offset-4 transition hover:text-lime-300"
                          >
                            {event.designation}
                          </a>
                        </th>

                        <td className="p-5">
                          <div className="font-semibold text-white/85">
                            {shown(event).title}
                          </div>

                          <p className="mt-1 max-w-2xl text-xs leading-5 text-white/55">
                            {shown(event).detail}
                          </p>
                        </td>

                        <td className="p-5">
                          <ConfidenceLabel confidence={event.confidence} />
                        </td>
                      </m.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>

              {visible.length === 0 && (
                <p className="p-8 text-sm text-white/50">
                  No milestones match these filters.
                </p>
              )}
            </div>

            {ordered.length > collapsedRows && (
              <button
                type="button"
                onClick={() => setShowAll((value) => !value)}
                aria-expanded={showAll}
                className="mt-6 flex items-center gap-3 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition hover:text-lime-300"
              >
                {showAll ? <Minus size={14} /> : <Plus size={14} />}
                {showAll ? t.showFewer : t.showAll(ordered.length)}
              </button>
            )}
          </div>
        </section>
      </main>

      <PageFooter label={t.footerLabel} />
    </div>
  );
}

// The bars and rows animate to their new places (`layout`), which needs
// framer-motion's domMax features. Loading them here keeps them out of the
// main bundle.
function ChronologyPage(props) {
  return (
    <LazyMotion features={domMax}>
      <Chronology {...props} />
    </LazyMotion>
  );
}

export default ChronologyPage;
