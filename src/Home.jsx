import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import { aircraft } from "./aircraft.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  goToSection,
  useActiveSection,
} from "./Layout.jsx";
import { photos } from "./photos.js";
import { Comparison, SectionLabel } from "./Sections.jsx";

// One representative frame per aircraft for the archive teaser.
const teaser = [
  ["J-20", "j20_base"],
  ["F-22", "f22_a"],
  ["F-35", "f35_a"],
  ["Su-57", "su57_prod"],
  ["F-16", "f16_a"],
  ["Typhoon", "ty_single"],
  ["Rafale", "rf_c"],
  ["Gripen", "gr_c"],
  ["J-35", "j35_n"],
  ["J-16", "j16_a"],
  ["J-15T", "j15_t"],
  ["F-15EX", "f15_ex"],
];

const navigationItems = [
  ["aircraft", "Aircraft"],
  ["archive", "Archive"],
  ["compare", "Compare"],
];

const sectionIds = ["top", "aircraft", "compare"];

const availableAircraft = aircraft.filter((entry) => entry.available);
const originCount = new Set(availableAircraft.map((entry) => entry.origin))
  .size;

const origins = ["All", ...new Set(availableAircraft.map((e) => e.origin))];

const groupDefinitions = [
  {
    title: "Fifth generation",
    note: "Low-observable designs that carry weapons internally and fuse sensor data.",
    match: (entry) => entry.generation === "5",
  },
  {
    title: "Fourth generation and 4.5",
    note: "Agile, heavily upgraded fighters that remain the backbone of many air forces.",
    match: (entry) => entry.generation !== "5",
  },
];

function AircraftCard({ entry, index, fileNumber }) {
  return (
    <motion.a
      href={`#/${entry.slug}`}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.1,
      }}
      className="group relative flex flex-col overflow-hidden bg-[#080b0c] p-7 transition-colors hover:bg-[#0d1210] md:p-10"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.22em]">
        <span className="text-white/50">
          File / {String(fileNumber).padStart(2, "0")} · {entry.origin}
        </span>

        <span className="flex items-center gap-2 text-lime-300">
          <span className="h-1 w-1 rounded-full bg-lime-300" />
          Open
        </span>
      </div>

      <svg
        viewBox="100 0 1000 470"
        className="mx-auto mt-8 w-full max-w-md transition-transform duration-700 group-hover:-translate-y-2"
        role="img"
        aria-label={`Stylized ${entry.designation} silhouette`}
      >
        <path
          d={entry.silhouette}
          fill="#1b2223"
          stroke="#5d6868"
          strokeWidth="3"
          className="transition-colors duration-500 group-hover:stroke-lime-300"
        />
      </svg>

      <div className="mt-8 text-5xl font-black tracking-[-.07em] transition-colors group-hover:text-lime-300 md:text-6xl xl:text-5xl 2xl:text-6xl">
        {entry.designation}
      </div>

      <div className="mt-3 font-mono text-[11px] uppercase tracking-[.24em] text-lime-300">
        {entry.manufacturer} · {entry.name}
      </div>

      <p className="mb-10 mt-6 max-w-md text-sm leading-7 text-white/60">
        {entry.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-5 border-t border-white/10 pt-6">
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
          <div>
            <b className="block text-sm text-white/85">
              {entry.firstFlight}
            </b>
            First flight
          </div>

          <div>
            <b className="block text-sm text-white/85">{entry.service}</b>
            In service
          </div>
        </div>

        <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition group-hover:text-lime-300">
          Open file
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-500 group-hover:w-full" />
    </motion.a>
  );
}

function Home({ introDelay = 0.1 }) {
  const activeSection = useActiveSection(sectionIds);
  const [origin, setOrigin] = useState("All");

  const groups = groupDefinitions
    .map((group) => ({
      ...group,
      items: availableAircraft.filter(
        (entry) =>
          group.match(entry) && (origin === "All" || entry.origin === origin),
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="AF"
        items={navigationItems}
        activeSection={activeSection}
        showHangarLink={false}
        search
      />

      <main>
        <section
          id="top"
          className="relative flex min-h-[78vh] scroll-mt-20 flex-col justify-end px-5 pb-16 pt-40 md:px-10"
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
            className="relative mx-auto w-full max-w-[1500px]"
          >
            <SectionLabel>Digital airframe archive</SectionLabel>

            <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-black leading-[.8] tracking-[-.075em]">
              THE
              <span className="block text-white/30">HANGAR</span>
            </h1>

            <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
                An independent digital exhibition of modern combat aircraft.
                Each file collects the design, public history, specifications
                and photography of one airframe.
              </p>

              <button
                type="button"
                onClick={() => goToSection("aircraft")}
                className="group flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
              >
                Browse aircraft

                <ChevronRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
              <div>
                <span className="mr-3 text-lime-300">
                  {String(availableAircraft.length).padStart(2, "0")}
                </span>
                Aircraft files
              </div>

              <div>
                <span className="mr-3 text-lime-300">
                  {String(originCount).padStart(2, "0")}
                </span>
                Origins
              </div>

              <div>
                <span className="mr-3 text-lime-300">CC</span>
                Attributed photography
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="aircraft"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>01 / Aircraft</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  Choose an airframe.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                Open a file to explore the aircraft in detail, or scroll on
                for a side-by-side comparison.
              </p>
            </div>

            <div
              className="mb-10 flex flex-wrap gap-2"
              role="group"
              aria-label="Filter aircraft by origin"
            >
              {origins.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setOrigin(name)}
                  aria-pressed={origin === name}
                  className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[.2em] transition ${
                    origin === name
                      ? "border-lime-300 bg-lime-300 text-black"
                      : "border-white/15 text-white/60 hover:border-lime-300 hover:text-lime-300"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {groups.map((group, groupIndex) => (
              <div key={`${origin}-${group.title}`} className={groupIndex > 0 ? "mt-16" : ""}>
                <div className="mb-6 flex flex-col justify-between gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end">
                  <h3 className="text-2xl font-semibold tracking-[-.03em]">
                    {group.title}
                  </h3>

                  <p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/50">
                    {group.items.length} files · {group.note}
                  </p>
                </div>

                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 xl:grid-cols-4">
                  {group.items.map((entry, index) => (
                    <AircraftCard
                      key={entry.slug}
                      entry={entry}
                      index={index}
                      fileNumber={availableAircraft.indexOf(entry) + 1}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="archive"
          className="scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>02 / Visual archive</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  Every photograph, in sequence.
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-7 text-white/50">
                  Watch the whole collection as one continuous reel, from the
                  J-20 to the F-15EX, or open a single aircraft file for its
                  own gallery.
                </p>

                <a
                  href="#/archive"
                  className="group mt-8 flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
                >
                  Play the full archive

                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-4">
              {teaser.map(([label, key]) => (
                <a
                  key={key}
                  href="#/archive"
                  className="group relative block aspect-[4/3] overflow-hidden bg-[#080b0c]"
                >
                  <img
                    src={photos[key].src}
                    alt={`${label} preview`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[.2em] text-white">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Comparison
          number="03"
          heading="Side by side."
        />
      </main>

      <PageFooter label="AIRFRAME / ARCHIVE" />
    </div>
  );
}

export default Home;
