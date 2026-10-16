import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ArrowUpRight,
  Check,
  Link,
} from "lucide-react";

import { aircraft } from "./aircraft.js";
import { figuresByLanguage, metrics, metricsByLanguage } from "./figures.js";
import { localHref, localise, term as translate, useLanguage, useHref, useTerm, useText } from "./i18n.js";
import { navigateEvent } from "./routes.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  SectionLabel,
  useActiveSection,
} from "./Layout.jsx";
import { peers } from "./data/peers.js";
import { peers as spanishPeers } from "./locales/es/peers.js";
import { counts } from "./counts.js";

const text = {
  en: {
    navigationItems: [
      ["top", "Select"],
      ["chart", "Chart"],
      ["table", "Table"],
    ],
    eyebrow: "Interactive comparison",
    heroTop: "HEAD",
    heroBottom: "TO HEAD",
    intro:
      "Pick up to three aircraft to compare their published performance. A fourth choice replaces the oldest one. The address updates as you choose, so any comparison can be shared.",
    pickerLabel: "Choose aircraft to compare",
    linkCopied: "Link copied",
    copyLink: "Copy link to this comparison",
    chartLabel: "01 / Chart",
    chartHeading: "Measured against the field.",
    chartIntro:
      `Each bar runs from zero to the highest figure among all ${counts.en.all} aircraft. Faint ticks mark the other aircraft, and the rank counts only aircraft with a published figure.`,
    footnote:
      "Figures from each aircraft's specifications · Ranges are plotted at their midpoint · \"Mach 2 class\" is plotted as Mach 2.0 · Published figures are not like-for-like, and combat radius depends heavily on the mission and load",
    tableLabel: "02 / Table",
    tableHeading: `All ${counts.en.all}, sorted your way.`,
    tableIntro:
      "Select a column heading to sort, and again to reverse the order. Use the dot at the start of a row to add that aircraft to the chart.",
    caption:
      `Published figures for ${counts.en.all} fighters. Column headings sort the table.`,
    inChart: "In chart",
    notPublished: "Not published",
    tableNote: "— Not published · Unpublished figures sort last",
    aircraft: "Aircraft",
    generation: "Gen.",
    origin: "Origin",
    firstFlight: "First flight",
    service: "In service",
    remove: (name) => `Remove ${name} from the chart`,
    add: (name) => `Add ${name} to the chart`,
    footerLabel: "AIRFRAME / COMPARE",
  },
  es: {
    navigationItems: [
      ["top", "Elegir"],
      ["chart", "Gráfico"],
      ["table", "Tabla"],
    ],
    eyebrow: "Comparación interactiva",
    heroTop: "CARA",
    heroBottom: "A CARA",
    intro:
      "Elige hasta tres aviones para comparar sus prestaciones publicadas. Una cuarta elección sustituye a la más antigua. La dirección se actualiza con cada cambio, así que cualquier comparación puede compartirse.",
    pickerLabel: "Elegir aviones para comparar",
    linkCopied: "Enlace copiado",
    copyLink: "Copiar enlace de esta comparación",
    chartLabel: "01 / Gráfico",
    chartHeading: "Frente al resto.",
    chartIntro:
      `Cada barra va de cero a la cifra más alta de los ${counts.es.all} aviones. Las marcas tenues señalan a los demás aviones, y la posición solo cuenta los aviones con cifra publicada.`,
    footnote:
      "Cifras tomadas de las especificaciones de cada avión · Los intervalos se representan por su punto medio · «Clase Mach 2» se representa como Mach 2,0 · Las cifras publicadas no son del todo comparables, y el radio de combate depende mucho de la misión y de la carga",
    tableLabel: "02 / Tabla",
    tableHeading: `Los ${counts.es.all}, ordenados a tu gusto.`,
    tableIntro:
      "Pulsa el título de una columna para ordenar, y otra vez para invertir el orden. Usa el punto al inicio de una fila para añadir ese avión al gráfico.",
    caption:
      `Cifras publicadas de ${counts.es.all} cazas. Los títulos de columna ordenan la tabla.`,
    inChart: "En el gráfico",
    notPublished: "No publicado",
    tableNote: "— No publicado · Las cifras no publicadas van al final",
    aircraft: "Avión",
    generation: "Gen.",
    origin: "Origen",
    firstFlight: "Primer vuelo",
    service: "En servicio",
    remove: (name) => `Quitar ${name} del gráfico`,
    add: (name) => `Añadir ${name} al gráfico`,
    footerLabel: "AIRFRAME / COMPARAR",
  },
};

const sectionIds = text.en.navigationItems.map(([sectionId]) => sectionId);

const figures = figuresByLanguage.en;

// One colour per selection slot. Lime matches the site accent.
const seriesColours = ["#c7ff37", "#6fd3ff", "#ff8a5c"];
const maxSelected = seriesColours.length;
const defaultSelection = ["f-22", "j-20", "su-57"];

// The selection lives in the address (compare/?aircraft=f-22,j-20), so a
// comparison can be shared as a link.
function readSelection() {
  const list =
    new URLSearchParams(window.location.search).get("aircraft") ?? "";
  const slugs = [...new Set(list.split(","))]
    .filter((slug) => peers.some((peer) => peer.slug === slug))
    .slice(0, maxSelected);

  return slugs.length ? slugs : defaultSelection;
}

const confidenceColours = {
  CONFIRMED: "bg-lime-300",
  REPORTED: "bg-amber-300",
  ESTIMATE: "bg-white/55",
};

const designations = Object.fromEntries(
  aircraft.map((entry) => [entry.slug, entry.designation]),
);

// The longest published value for each metric sets the full width of its bars.
const metricMaximum = Object.fromEntries(
  metrics.map((metric) => [
    metric.key,
    Math.max(
      ...peers
        .map((peer) => figures[peer.slug][metric.key]?.value)
        .filter((value) => value != null),
    ),
  ]),
);

function buildColumns(t, shownMetrics) {
  return [
    {
      key: "name",
      label: t.aircraft,
      sortValue: (peer) => designations[peer.slug],
    },
    {
      key: "generation",
      label: t.generation,
      sortValue: (peer) => Number(peer.generation),
    },
    {
      key: "origin",
      label: t.origin,
      sortValue: (peer) => peer.origin,
    },
    {
      key: "firstFlight",
      label: t.firstFlight,
      sortValue: (peer) => Number(peer.firstFlight),
    },
    {
      key: "service",
      label: t.service,
      sortValue: (peer) => Number(peer.service),
    },
    ...shownMetrics.map((metric) => ({
      key: metric.key,
      label: metric.label,
      unit: metric.unit,
      figure: true,
      sortValue: (peer) => figures[peer.slug][metric.key]?.value ?? null,
    })),
  ];
}

function ConfidenceDot({ confidence }) {
  const term = useTerm();

  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${confidenceColours[confidence]}`}
      title={term(confidence)}
    />
  );
}

function ConfidenceLegend() {
  const term = useTerm();

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
      {Object.keys(confidenceColours).map((confidence) => (
        <span key={confidence} className="flex items-center gap-2">
          <ConfidenceDot confidence={confidence} />
          {term(confidence)}
        </span>
      ))}
    </div>
  );
}

function rankOf(slug, metricKey) {
  const ranked = peers
    .map((peer) => figures[peer.slug][metricKey]?.value)
    .filter((value) => value != null)
    .sort((a, b) => b - a);
  const value = figures[slug][metricKey]?.value;

  return {
    rank: ranked.indexOf(value) + 1,
    total: ranked.length,
  };
}

function MetricChart({ metric, selected, shownFigures, notPublished }) {
  const maximum = metricMaximum[metric.key];

  return (
    <div className="border-b border-white/10 py-8 last:border-b-0">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-[-.02em] md:text-xl">
          {metric.label}
        </h3>

        <span className="font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          {metric.unit}
        </span>
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {selected.map((slug, index) => {
            const entry = shownFigures[slug][metric.key];
            const colour = seriesColours[index];
            const { rank, total } = rankOf(slug, metric.key);

            return (
              <m.div
                key={slug}
                layout
                initial={{
                  opacity: 0,
                  y: -8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 8,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="grid grid-cols-[4.5rem_1fr] items-center gap-4 md:grid-cols-[6rem_1fr_12rem]"
              >
                <span
                  className="font-mono text-xs sm:text-[11px] uppercase tracking-[.16em]"
                  style={{ color: colour }}
                >
                  {designations[slug]}
                </span>

                <div className="relative h-7">
                  <div className="absolute inset-y-[13px] left-0 right-0 bg-white/6" />

                  {/* Every other aircraft as a faint tick, to show where the selection sits. */}
                  {peers.map((peer) => {
                    const value = figures[peer.slug][metric.key]?.value;

                    if (value == null || peer.slug === slug) {
                      return null;
                    }

                    return (
                      <span
                        key={peer.slug}
                        className="absolute top-2 h-3 w-px bg-white/25"
                        style={{ left: `${(value / maximum) * 100}%` }}
                        title={`${designations[peer.slug]}: ${shownFigures[peer.slug][metric.key].display}`}
                      />
                    );
                  })}

                  {entry ? (
                    <m.div
                      className="absolute left-0 top-[9px] h-2.5"
                      style={{
                        backgroundColor: colour,
                        boxShadow: `0 0 18px ${colour}55`,
                      }}
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${(entry.value / maximum) * 100}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 18,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-y-[9px] left-0 right-0 border border-dashed border-white/15" />
                  )}
                </div>

                <div className="col-span-2 flex items-center gap-3 pl-22 font-mono text-xs sm:text-[11px] uppercase tracking-[.14em] md:col-span-1 md:justify-end md:pl-0">
                  {entry ? (
                    <>
                      <ConfidenceDot confidence={entry.confidence} />
                      <span className="text-white/85">{entry.display}</span>
                      <span className="text-white/50">
                        {rank}/{total}
                      </span>
                    </>
                  ) : (
                    <span className="text-white/50">{notPublished}</span>
                  )}
                </div>
              </m.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SortIcon({ active, direction }) {
  if (!active) {
    return <ArrowUpDown size={11} className="opacity-40" />;
  }

  return direction === "asc" ? <ArrowUp size={11} /> : <ArrowDown size={11} />;
}

function Compare({ introDelay = 0.1 }) {
  const t = useText(text);
  const language = useLanguage();
  const href = useHref();
  const shownFigures = figuresByLanguage[language];
  const shownMetrics = metricsByLanguage[language];
  const columns = useMemo(
    () => buildColumns(t, shownMetrics),
    [t, shownMetrics],
  );
  const shownPeers = useMemo(
    () =>
      (language === "es" ? localise(peers, spanishPeers) : peers).map(
        (peer) => ({
          ...peer,
          origin: translate(peer.origin, language),
        }),
      ),
    [language],
  );
  const navigationItems = t.navigationItems;
  const activeSection = useActiveSection(sectionIds);
  const [selected, setSelected] = useState(readSelection);
  const [copied, setCopied] = useState(false);
  const [sort, setSort] = useState({
    key: null,
    direction: "desc",
  });

  const toggle = (slug) => {
    setSelected((current) => {
      if (current.includes(slug)) {
        return current.length > 1
          ? current.filter((entry) => entry !== slug)
          : current;
      }

      // A fourth pick replaces the oldest, so the chart always has three or fewer.
      return [...current, slug].slice(-maxSelected);
    });
  };

  // replaceState fires no event, so App keeps the scroll position.
  useEffect(() => {
    window.history.replaceState(
      null,
      "",
      localHref("#/compare", language) +
        (selected.length ? `?aircraft=${selected.join(",")}` : ""),
    );
    setCopied(false);
  }, [selected, language]);

  // Back and forward between comparisons, or a link to this page from the
  // page itself, change the address without remounting it.
  useEffect(() => {
    const handleNavigation = () => setSelected(readSelection());

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener(navigateEvent, handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener(navigateEvent, handleNavigation);
    };
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const sortBy = (key) => {
    setSort((current) => ({
      key,
      direction:
        current.key === key && current.direction === "desc" ? "asc" : "desc",
    }));
  };

  const rows = useMemo(() => {
    if (!sort.key) {
      return shownPeers;
    }

    const column = columns.find((entry) => entry.key === sort.key);
    const factor = sort.direction === "asc" ? 1 : -1;

    return [...shownPeers].sort((a, b) => {
      const first = column.sortValue(a);
      const second = column.sortValue(b);

      // Unpublished figures always sink to the bottom.
      if (first == null) return 1;
      if (second == null) return -1;

      return typeof first === "string"
        ? first.localeCompare(second, language) * factor
        : (first - second) * factor;
    });
  }, [sort, shownPeers, columns, language]);

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="VS"
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

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/60 md:text-base md:leading-6">
              {t.intro}
            </p>

            <div
              className="mt-10 flex flex-wrap gap-2"
              role="group"
              aria-label={t.pickerLabel}
            >
              {peers.map((peer) => {
                const slot = selected.indexOf(peer.slug);
                const isSelected = slot !== -1;

                return (
                  <button
                    key={peer.slug}
                    type="button"
                    onClick={() => toggle(peer.slug)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-2 border px-4 py-2.5 font-mono text-xs sm:text-[11px] uppercase tracking-[.18em] transition ${
                      isSelected
                        ? "border-white/40 bg-white/6 text-white"
                        : "border-white/15 text-white/55 hover:border-lime-300 hover:text-lime-300"
                    }`}
                  >
                    <span
                      className="h-2 w-2 rounded-full transition-colors"
                      style={{
                        backgroundColor: isSelected
                          ? seriesColours[slot]
                          : "rgba(255,255,255,.15)",
                      }}
                    />
                    {designations[peer.slug]}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={copyLink}
              className="mt-6 flex items-center gap-2 font-mono text-xs sm:text-[11px] uppercase tracking-[.18em] text-white/55 transition hover:text-lime-300"
            >
              {copied ? <Check size={13} /> : <Link size={13} />}
              <span aria-live="polite">
                {copied ? t.linkCopied : t.copyLink}
              </span>
            </button>
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

              <div>
                <p className="max-w-xl text-sm leading-7 text-white/50">
                  {t.chartIntro}
                </p>

                <div className="mt-6">
                  <ConfidenceLegend />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10">
              {shownMetrics.map((metric) => (
                <MetricChart
                  key={metric.key}
                  metric={metric}
                  selected={selected}
                  shownFigures={shownFigures}
                  notPublished={t.notPublished}
                />
              ))}
            </div>

            <p className="mt-6 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              {t.footnote}
            </p>
          </div>
        </section>

        <section
          id="table"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>{t.tableLabel}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.tableHeading}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                {t.tableIntro}
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
              <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  {t.caption}
                </caption>

                <thead>
                  <tr className="border-b border-white/10 font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50">
                    <th scope="col" className="w-12 p-4 font-normal">
                      <span className="sr-only">{t.inChart}</span>
                    </th>

                    {columns.map((column) => {
                      const active = sort.key === column.key;

                      return (
                        <th
                          key={column.key}
                          scope="col"
                          aria-sort={
                            active
                              ? sort.direction === "asc"
                                ? "ascending"
                                : "descending"
                              : "none"
                          }
                          className="p-4 font-normal"
                        >
                          <button
                            type="button"
                            onClick={() => sortBy(column.key)}
                            className={`flex items-center gap-2 uppercase tracking-[.18em] transition hover:text-lime-300 ${
                              active ? "text-lime-300" : ""
                            }`}
                          >
                            <span className="text-left">
                              {column.label}
                              {column.unit && (
                                <span className="block text-white/50">
                                  {column.unit}
                                </span>
                              )}
                            </span>

                            <SortIcon
                              active={active}
                              direction={sort.direction}
                            />
                          </button>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {rows.map((peer) => {
                    const slot = selected.indexOf(peer.slug);
                    const isSelected = slot !== -1;

                    return (
                      <m.tr
                        key={peer.slug}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 32,
                        }}
                        className={`border-b border-white/10 transition-colors last:border-b-0 ${
                          isSelected
                            ? "bg-white/4 text-white"
                            : "text-white/65 hover:bg-white/3"
                        }`}
                      >
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => toggle(peer.slug)}
                            aria-pressed={isSelected}
                            aria-label={(isSelected ? t.remove : t.add)(designations[peer.slug])}
                            className="grid h-7 w-7 place-items-center border border-white/15 transition hover:border-lime-300"
                          >
                            <span
                              className="h-2.5 w-2.5 rounded-full transition-colors"
                              style={{
                                backgroundColor: isSelected
                                  ? seriesColours[slot]
                                  : "transparent",
                              }}
                            />
                          </button>
                        </td>

                        <th
                          scope="row"
                          className="whitespace-nowrap p-4 font-semibold text-white/85"
                        >
                          <a
                            href={href(`#/${peer.slug}`)}
                            className="group inline-flex items-center gap-2 underline decoration-lime-300/50 underline-offset-4 transition hover:text-lime-300"
                          >
                            {designations[peer.slug]}

                            <ArrowUpRight
                              size={13}
                              className="text-lime-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </a>
                        </th>

                        <td className="p-4">{peer.generation}</td>
                        <td className="whitespace-nowrap p-4">{peer.origin}</td>
                        <td className="p-4">{peer.firstFlight}</td>
                        <td className="p-4">{peer.service}</td>

                        {shownMetrics.map((metric) => {
                          const entry = shownFigures[peer.slug][metric.key];

                          return (
                            <td
                              key={metric.key}
                              className="whitespace-nowrap p-4 font-mono text-xs"
                            >
                              {entry ? (
                                <span className="flex items-center gap-2">
                                  <ConfidenceDot
                                    confidence={entry.confidence}
                                  />
                                  {entry.display}
                                </span>
                              ) : (
                                <span className="text-white/30">—</span>
                              )}
                            </td>
                          );
                        })}
                      </m.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row">
              <ConfidenceLegend />

              <span className="font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                {t.tableNote}
              </span>
            </div>
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
function ComparePage(props) {
  return (
    <LazyMotion features={domMax}>
      <Compare {...props} />
    </LazyMotion>
  );
}

export default ComparePage;
