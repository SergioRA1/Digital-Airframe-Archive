import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ArrowUpRight,
  Check,
  Link,
} from "lucide-react";

import { aircraft } from "./aircraft.js";
import { figures, metrics } from "./figures.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  useActiveSection,
} from "./Layout.jsx";
import { SectionLabel, peers } from "./Sections.jsx";

const navigationItems = [
  ["top", "Select"],
  ["chart", "Chart"],
  ["table", "Table"],
];

const sectionIds = navigationItems.map(([sectionId]) => sectionId);

// One colour per selection slot. Lime matches the site accent.
const seriesColours = ["#c7ff37", "#6fd3ff", "#ff8a5c"];
const maxSelected = seriesColours.length;
const defaultSelection = ["f-22", "j-20", "su-57"];

// The selection lives in the URL (#/compare/f-22,j-20), so a comparison can
// be shared as a link.
function readSelection() {
  const [, list = ""] = window.location.hash.replace(/^#\/?/, "").split("/");
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

const columns = [
  {
    key: "name",
    label: "Aircraft",
    sortValue: (peer) => designations[peer.slug],
  },
  {
    key: "generation",
    label: "Gen.",
    sortValue: (peer) => Number(peer.generation),
  },
  {
    key: "origin",
    label: "Origin",
    sortValue: (peer) => peer.origin,
  },
  {
    key: "firstFlight",
    label: "First flight",
    sortValue: (peer) => Number(peer.firstFlight),
  },
  {
    key: "service",
    label: "In service",
    sortValue: (peer) => Number(peer.service),
  },
  ...metrics.map((metric) => ({
    key: metric.key,
    label: metric.label,
    unit: metric.unit,
    figure: true,
    sortValue: (peer) => figures[peer.slug][metric.key]?.value ?? null,
  })),
];

function ConfidenceDot({ confidence }) {
  return (
    <span
      className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${confidenceColours[confidence]}`}
      title={confidence}
    />
  );
}

function ConfidenceLegend() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
      {Object.keys(confidenceColours).map((confidence) => (
        <span key={confidence} className="flex items-center gap-2">
          <ConfidenceDot confidence={confidence} />
          {confidence}
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

function MetricChart({ metric, selected }) {
  const maximum = metricMaximum[metric.key];

  return (
    <div className="border-b border-white/10 py-8 last:border-b-0">
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-[-.02em] md:text-xl">
          {metric.label}
        </h3>

        <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
          {metric.unit}
        </span>
      </div>

      <div className="space-y-4">
        <AnimatePresence initial={false}>
          {selected.map((slug, index) => {
            const entry = figures[slug][metric.key];
            const colour = seriesColours[index];
            const { rank, total } = rankOf(slug, metric.key);

            return (
              <motion.div
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
                  className="font-mono text-[11px] uppercase tracking-[.16em]"
                  style={{ color: colour }}
                >
                  {designations[slug]}
                </span>

                <div className="relative h-7">
                  <div className="absolute inset-y-[13px] left-0 right-0 bg-white/[.06]" />

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
                        title={`${designations[peer.slug]}: ${figures[peer.slug][metric.key].display}`}
                      />
                    );
                  })}

                  {entry ? (
                    <motion.div
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

                <div className="col-span-2 flex items-center gap-3 pl-[5.5rem] font-mono text-[11px] uppercase tracking-[.14em] md:col-span-1 md:justify-end md:pl-0">
                  {entry ? (
                    <>
                      <ConfidenceDot confidence={entry.confidence} />
                      <span className="text-white/85">{entry.display}</span>
                      <span className="text-white/50">
                        {rank}/{total}
                      </span>
                    </>
                  ) : (
                    <span className="text-white/50">Not published</span>
                  )}
                </div>
              </motion.div>
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

  // replaceState does not fire hashchange, so App keeps the scroll position.
  useEffect(() => {
    window.history.replaceState(null, "", `#/compare/${selected.join(",")}`);
    setCopied(false);
  }, [selected]);

  // A pasted comparison link changes the hash without remounting the page.
  useEffect(() => {
    const handleHashChange = () => setSelected(readSelection());

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
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
      return peers;
    }

    const column = columns.find((entry) => entry.key === sort.key);
    const factor = sort.direction === "asc" ? 1 : -1;

    return [...peers].sort((a, b) => {
      const first = column.sortValue(a);
      const second = column.sortValue(b);

      // Unpublished figures always sink to the bottom.
      if (first == null) return 1;
      if (second == null) return -1;

      return typeof first === "string"
        ? first.localeCompare(second) * factor
        : (first - second) * factor;
    });
  }, [sort]);

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
          <motion.div
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
            <SectionLabel>Interactive comparison</SectionLabel>

            <h1 className="text-[clamp(3.2rem,10vw,9rem)] font-black leading-[.8] tracking-[-.075em]">
              HEAD
              <span className="block text-white/30">TO HEAD</span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Pick up to three aircraft to compare their published
              performance. A fourth choice replaces the oldest one. The
              address updates as you choose, so any comparison can be shared.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-2"
              role="group"
              aria-label="Choose aircraft to compare"
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
                    className={`flex items-center gap-2 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[.18em] transition ${
                      isSelected
                        ? "border-white/40 bg-white/[.06] text-white"
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
              className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.18em] text-white/55 transition hover:text-lime-300"
            >
              {copied ? <Check size={13} /> : <Link size={13} />}
              <span aria-live="polite">
                {copied ? "Link copied" : "Copy link to this comparison"}
              </span>
            </button>
          </motion.div>
        </section>

        <section
          id="chart"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>01 / Chart</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  Measured against the field.
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-7 text-white/50">
                  Each bar runs from zero to the highest figure among all
                  twelve aircraft. Faint ticks mark the other aircraft, and
                  the rank counts only aircraft with a published figure.
                </p>

                <div className="mt-6">
                  <ConfidenceLegend />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10">
              {metrics.map((metric) => (
                <MetricChart
                  key={metric.key}
                  metric={metric}
                  selected={selected}
                />
              ))}
            </div>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
              Figures from each aircraft's specifications · Ranges are
              plotted at their midpoint · "Mach 2 class" is plotted as Mach
              2.0 · Published figures are not like-for-like, and combat
              radius depends heavily on the mission and load
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
                <SectionLabel>02 / Table</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  All twelve, sorted your way.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                Select a column heading to sort, and again to reverse the
                order. Use the dot at the start of a row to add that aircraft
                to the chart.
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
              <table className="w-full min-w-[1180px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Published figures for twelve fighters. Column headings sort
                  the table.
                </caption>

                <thead>
                  <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-[.18em] text-white/50">
                    <th scope="col" className="w-12 p-4 font-normal">
                      <span className="sr-only">In chart</span>
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
                                <span className="block text-white/35">
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
                      <motion.tr
                        key={peer.slug}
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 32,
                        }}
                        className={`border-b border-white/10 transition-colors last:border-b-0 ${
                          isSelected
                            ? "bg-white/[.04] text-white"
                            : "text-white/65 hover:bg-white/[.03]"
                        }`}
                      >
                        <td className="p-4">
                          <button
                            type="button"
                            onClick={() => toggle(peer.slug)}
                            aria-pressed={isSelected}
                            aria-label={`${isSelected ? "Remove" : "Add"} ${designations[peer.slug]} ${isSelected ? "from" : "to"} the chart`}
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
                            href={`#/${peer.slug}`}
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

                        {metrics.map((metric) => {
                          const entry = figures[peer.slug][metric.key];

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
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-4 md:flex-row">
              <ConfidenceLegend />

              <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                — Not published · Unpublished figures sort last
              </span>
            </div>
          </div>
        </section>
      </main>

      <PageFooter label="AIRFRAME / COMPARE" />
    </div>
  );
}

export default Compare;
