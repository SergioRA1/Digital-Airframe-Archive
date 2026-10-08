import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Minus, Plus } from "lucide-react";

import { photos } from "./photos.js";
import { usage } from "./usage.js";

export const milestones = [
  {
    date: "LATE 1990s",
    title: "Programme origins",
    detail:
      "China begins studies for a next-generation fighter, referred to in Western reporting as the J-XX programme.",
    confidence: "REPORTED",
  },
  {
    date: "2008",
    title: "Chengdu design selected",
    detail:
      "Chengdu's canard-delta proposal is reported to have been chosen over a competing Shenyang design.",
    confidence: "REPORTED",
  },
  {
    date: "11 JAN 2011",
    title: "First flight",
    detail:
      "The first prototype flies from Chengdu. Photographs taken from outside the airfield circulate worldwide within hours.",
    confidence: "CONFIRMED",
  },
  {
    date: "MAR 2014",
    title: "Revised prototype",
    detail:
      "A refined prototype appears with reshaped intakes, clipped canard and tail tips, a new canopy and a chin-mounted electro-optical sensor housing.",
    confidence: "CONFIRMED",
  },
  {
    date: "LATE 2015",
    title: "Initial production",
    detail:
      "Aircraft in yellow primer are photographed at Chengdu, widely read as the start of low-rate initial production.",
    confidence: "REPORTED",
  },
  {
    date: "1 NOV 2016",
    title: "Public debut",
    detail:
      "Two J-20s make a brief flypast at Airshow China in Zhuhai — the aircraft's first official public appearance.",
    confidence: "CONFIRMED",
  },
  {
    date: "MAR 2017",
    title: "Service entry",
    detail:
      "State media report that the aircraft has entered service with the People's Liberation Army Air Force.",
    confidence: "CONFIRMED",
  },
  {
    date: "FEB 2018",
    title: "Combat units",
    detail:
      "The air force announces that the J-20 has been commissioned into combat units.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2021",
    title: "Domestic engines on show",
    detail:
      "J-20s fitted with Chinese WS-10C engines fly at Airshow China, replacing the Russian-derived engines used by earlier aircraft.",
    confidence: "CONFIRMED",
  },
  {
    date: "OCT 2021",
    title: "Twin-seat variant seen",
    detail:
      "A tandem two-seat airframe is photographed at Chengdu, the first twin-seat stealth fighter to be seen publicly.",
    confidence: "REPORTED",
  },
  {
    date: "2022–2023",
    title: "Updated airframe and WS-15",
    detail:
      "A prototype with a raised spine behind the canopy is photographed, followed by reports of flights with the more powerful WS-15 engine.",
    confidence: "REPORTED",
  },
  {
    date: "NOV 2024",
    title: "J-20S unveiled",
    detail:
      "The twin-seat J-20S is presented officially at Airshow China in Zhuhai.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2025",
    title: "Family flypast",
    detail:
      "J-20 variants fly together over Beijing during the Victory Day parade, and a J-20 is placed on static public display at Changchun later that month.",
    confidence: "REPORTED",
  },
  {
    date: "2026",
    title: "J-20A in production",
    detail:
      "Production J-20A aircraft are reported flying with the more powerful Chinese WS-15 engine.",
    confidence: "REPORTED",
  },
];

const variants = [
  {
    code: "J-20",
    name: "Baseline",
    seats: "1",
    status: "IN SERVICE",
    photo: photos.j20_base,
    caption: "Flypast at Airshow China, Zhuhai, 2016",
    summary:
      "The original single-seat production aircraft. Early examples flew with Russian-derived AL-31 series engines; later batches are reported to use the Chinese WS-10C.",
    points: [
      "Single-seat canard-delta layout",
      "Main ventral bay plus two side bays",
      "In service since 2017",
    ],
  },
  {
    code: "J-20A",
    name: "Updated single-seat",
    seats: "1",
    status: "REPORTED",
    photo: photos.j20_a,
    caption: "J-20s in the 2019 National Day flypast, Beijing",
    summary:
      "An updated single-seat airframe with a raised, blended spine behind the canopy. Widely associated with the WS-15 engine, which is reported to be fitted to production aircraft from 2026.",
    points: [
      "Reshaped canopy and dorsal spine",
      "Associated with WS-15 engines",
      "Designation usage varies between sources",
    ],
  },
  {
    code: "J-20S",
    name: "Twin-seat",
    seats: "2",
    status: "UNVEILED 2024",
    summary:
      "A tandem two-seat variant, first seen in 2021 and presented officially in 2024. Public commentary links the second seat to mission management and teaming with uncrewed aircraft.",
    points: [
      "First twin-seat stealth fighter seen publicly",
      "Second crew member for mission management",
      "Described as multirole",
    ],
  },
];

export const peers = [
  {
    name: "Lockheed Martin F-22A",
    slug: "f-22",
    generation: "5",
    origin: "United States",
    length: "18.9 m",
    wingspan: "13.6 m",
    engines: "2",
    firstFlight: "1997",
    service: "2005",
    layout: "Trapezoidal wing, tailplanes, twin canted tails",
  },
  {
    name: "Lockheed Martin F-35A",
    slug: "f-35",
    generation: "5",
    origin: "United States",
    length: "15.7 m",
    wingspan: "10.7 m",
    engines: "1",
    firstFlight: "2006",
    service: "2016",
    layout: "Trapezoidal wing, tailplanes, twin canted tails",
  },
  {
    name: "Chengdu J-20",
    origin: "China",
    length: "≈ 21.2 m",
    wingspan: "≈ 13.0 m",
    engines: "2",
    firstFlight: "2011",
    service: "2017",
    layout: "Canard delta, twin canted tails",
    slug: "j-20",
    generation: "5",
  },
  {
    name: "Shenyang J-35A",
    slug: "j-35",
    generation: "5",
    origin: "China",
    length: "≈ 17 m",
    wingspan: "≈ 11.5 m",
    engines: "2",
    firstFlight: "2012",
    service: "2025",
    layout: "Blended body, trapezoidal wing, twin canted tails",
  },
  {
    name: "Sukhoi Su-57",
    slug: "su-57",
    generation: "5",
    origin: "Russia",
    length: "20.1 m",
    wingspan: "14.1 m",
    engines: "2",
    firstFlight: "2010",
    service: "2020",
    layout: "Blended body, movable leading-edge extensions",
  },
  {
    name: "Boeing F-15EX",
    slug: "f-15ex",
    generation: "4.5",
    origin: "United States",
    length: "19.4 m",
    wingspan: "13.1 m",
    engines: "2",
    firstFlight: "2021",
    service: "2024",
    layout: "Trapezoidal wing, tailplanes, twin tails",
  },
  {
    name: "Eurofighter Typhoon",
    slug: "typhoon",
    generation: "4.5",
    origin: "Europe",
    length: "16.0 m",
    wingspan: "11.0 m",
    engines: "2",
    firstFlight: "1994",
    service: "2003",
    layout: "Canard delta, single tail",
  },
  {
    name: "Dassault Rafale C",
    slug: "rafale",
    generation: "4.5",
    origin: "France",
    length: "15.3 m",
    wingspan: "10.8 m",
    engines: "2",
    firstFlight: "1986",
    service: "2001",
    layout: "Canard delta, single tail",
  },
  {
    name: "Shenyang J-16",
    slug: "j-16",
    generation: "4.5",
    origin: "China",
    length: "≈ 21.9 m",
    wingspan: "≈ 14.7 m",
    engines: "2",
    firstFlight: "2011",
    service: "2013",
    layout: "Blended body, swept wing, twin tails",
  },
  {
    name: "Shenyang J-15T",
    slug: "j-15",
    generation: "4.5",
    origin: "China",
    length: "≈ 21.9 m",
    wingspan: "≈ 14.7 m",
    engines: "2",
    firstFlight: "2009",
    service: "2012",
    layout: "Canard, swept wing, twin tails",
  },
  {
    name: "Lockheed Martin F-16C",
    slug: "f-16",
    generation: "4",
    origin: "United States",
    length: "15.1 m",
    wingspan: "10.0 m",
    engines: "1",
    firstFlight: "1974",
    service: "1978",
    layout: "Blended body, cropped-delta wing, single tail",
  },
  {
    name: "Saab Gripen C/D",
    slug: "gripen",
    generation: "4.5",
    origin: "Sweden",
    length: "14.1 m",
    wingspan: "8.4 m",
    engines: "1",
    firstFlight: "1988",
    service: "1996",
    layout: "Canard delta, single tail",
  },
];

const glossary = [
  {
    term: "Fifth generation",
    definition:
      "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. There is no single agreed definition.",
  },
  {
    term: "Low observable (LO)",
    definition:
      "Design measures that reduce how easily an aircraft is detected — shaping, aligned edges, internal weapon bays and surface materials. Often called stealth.",
  },
  {
    term: "Canard",
    definition:
      "A small control surface ahead of the main wing. On the J-20 the all-moving canards add lift and pitch control, an unusual choice for a low-observable design.",
  },
  {
    term: "Diverterless supersonic inlet (DSI)",
    definition:
      "An engine intake that uses a shaped bump and forward-swept cowl instead of moving ramps or a separate boundary-layer diverter, saving weight and reducing radar reflections.",
  },
  {
    term: "AESA radar",
    definition:
      "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
  },
  {
    term: "EOTS",
    definition:
      "Electro-optical targeting system. A passive infrared and optical sensor, seen on the J-20 as a faceted housing beneath the nose.",
  },
  {
    term: "Supercruise",
    definition:
      "Sustained supersonic flight without afterburner. Often cited as a goal of the WS-15 engine; no performance figures have been officially published.",
  },
];

const sources = [
  {
    label: "Wikipedia — Chengdu J-20",
    href: "https://en.wikipedia.org/wiki/Chengdu_J-20",
    note: "General reference and citations",
  },
  {
    label: "CSIS ChinaPower — J-20 overview",
    href: "https://chinapower.csis.org/china-chengdu-j-20/",
    note: "Analysis and comparison with peers",
  },
  {
    label: "Wikimedia Commons — J-20 media",
    href: "https://commons.wikimedia.org/wiki/Category:Chengdu_J-20",
    note: "Freely licensed photographs",
  },
];

export function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.3em] text-lime-300">
      <span className="h-px w-8 bg-lime-300/70" />
      {children}
    </div>
  );
}

export function ConfidenceTag({ confidence }) {
  const isConfirmed = confidence === "CONFIRMED";

  return (
    <span
      className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] ${
        isConfirmed ? "text-lime-300" : "text-amber-300"
      }`}
    >
      <span
        className={`h-1 w-1 rounded-full ${
          isConfirmed ? "bg-lime-300" : "bg-amber-300"
        }`}
      />

      {confidence}
    </span>
  );
}

function UsagePanel({ info }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 border border-white/10 bg-white/[.02] p-6">
      <div className="font-mono text-[10px] uppercase tracking-[.22em] text-lime-300">
        Capabilities and use
      </div>

      <p className="mt-4 text-sm leading-7 text-white/70">{info.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="usage-details"
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-6 pt-6">
              {info.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-mono text-[10px] uppercase tracking-[.22em] text-white/50">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="usage-details"
        className="mt-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition hover:text-lime-300"
      >
        {open ? <Minus size={14} /> : <Plus size={14} />}
        {open ? "Show less" : "Read more"}
      </button>
    </div>
  );
}

export function Timeline({
  slug,
  number = "05",
  heading = "From rumour to flight line.",
  intro = "A condensed public timeline of the programme, from early design studies to the latest variants. Entries based on photographs and press reporting rather than official statements are marked as reported.",
  items = milestones,
}) {
  return (
    <section
      id="history"
      className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:self-start">
            <SectionLabel>{number} / History</SectionLabel>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              {intro}
            </p>

            {usage[slug] && <UsagePanel key={slug} info={usage[slug]} />}
          </div>

          <ol className="relative border-l border-white/10">
            {items.map((milestone) => (
              <motion.li
                key={milestone.date}
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="group relative pb-10 pl-8 last:pb-0 md:pl-12"
              >
                <span className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border border-lime-300/70 bg-[#050708] transition group-hover:bg-lime-300" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[.24em] text-lime-300">
                    {milestone.date}
                  </span>

                  <ConfidenceTag confidence={milestone.confidence} />
                </div>

                <h3 className="mt-3 text-xl font-semibold md:text-2xl">
                  {milestone.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                  {milestone.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Variants({
  number = "06",
  heading = "One airframe, three forms.",
  intro = "The family as it is described in public sources. Designations are not applied consistently between publications, so treat the names as working labels.",
  items = variants,
  silhouette,
}) {
  return (
    <section
      id="variants"
      className="relative scroll-mt-20 border-t border-white/10 bg-[#0b0f10] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <SectionLabel>{number} / Variants</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/50">
            {intro}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {items.map((variant) => (
            <article
              key={variant.code}
              className="group flex flex-col bg-[#0b0f10] transition-colors hover:bg-[#10160f]"
            >
              <figure>
                {variant.photo ? (
                  <div className="aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={variant.photo.src}
                      alt={`${variant.code} ${variant.name}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="relative grid aspect-[16/10] place-items-center bg-[#080b0c]">
                    {silhouette && (
                      <svg
                        viewBox="300 20 620 460"
                        className="w-3/5 opacity-70"
                        aria-hidden="true"
                      >
                        <path
                          d={silhouette}
                          fill="#151b1c"
                          stroke="#3b4646"
                          strokeWidth="3"
                        />
                      </svg>
                    )}
                  </div>
                )}

                <figcaption className="min-h-[6.25rem] border-b border-white/10 px-7 py-3 font-mono text-[10px] uppercase leading-5 tracking-[.14em] text-white/50 md:px-10">
                  {variant.photo ? (
                    <>
                      <span className="block text-white/65">
                        {variant.caption}
                      </span>

                      <a
                        href={variant.photo.source}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="transition hover:text-lime-300"
                      >
                        Photo: {variant.photo.photographer} ·{" "}
                        {variant.photo.licence}
                      </a>
                    </>
                  ) : (
                    <span className="block">
                      {variant.caption ||
                        "No freely licensed photograph is available"}
                    </span>
                  )}
                </figcaption>
              </figure>

              <div className="flex flex-1 flex-col p-7 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl font-black tracking-[-.06em] transition-colors group-hover:text-lime-300 md:text-5xl">
                    {variant.code}
                  </div>

                  <span className="shrink-0 border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.2em] text-white/60">
                    {variant.status}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[.22em]">
                  <span className="text-lime-300">{variant.name}</span>

                  <span className="shrink-0 text-white/50">
                    Crew / {variant.seats}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/60">
                  {variant.summary}
                </p>

                <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                  {variant.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-xs leading-5 text-white/65"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-lime-300/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison({
  number = "07",
  current,
  heading = "Among its peers.",
  intro = "Published dimensions and dates for twelve fighters from the fourth and fifth generations. Select an underlined aircraft to open its file.",
}) {
  return (
    <section
      id="compare"
      className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <SectionLabel>{number} / Comparison</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/50">
            {intro}
          </p>
        </div>

        <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
          <table className="w-full min-w-[980px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of twelve fighters, from most to least capable: F-22A, F-35A, J-20, J-35A, Su-57, F-15EX, Typhoon, Rafale C, J-16, J-15T, F-16C and Gripen C/D
            </caption>

            <thead>
              <tr className="border-b border-white/10 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                {[
                  "Aircraft",
                  "Gen.",
                  "Origin",
                  "Length",
                  "Wingspan",
                  "Engines",
                  "First flight",
                  "In service",
                  "Layout",
                ].map((heading) => (
                  <th key={heading} scope="col" className="p-5 font-normal">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {peers.map((peer) => {
                const highlight = peer.slug === current;

                return (
                  <tr
                    key={peer.name}
                    className={`border-b border-white/10 transition-colors last:border-b-0 ${
                      highlight
                        ? "bg-lime-300/[.07] text-white"
                        : "text-white/65 hover:bg-white/[.03]"
                    }`}
                  >
                    <th
                      scope="row"
                      className={`whitespace-nowrap p-5 font-semibold ${
                        highlight ? "text-lime-300" : "text-white/85"
                      }`}
                    >
                      {peer.slug && !highlight ? (
                        <a
                          href={`#/${peer.slug}`}
                          className="group inline-flex items-center gap-2 underline decoration-lime-300/50 underline-offset-4 transition hover:text-lime-300"
                        >
                          {peer.name}

                          <ArrowUpRight
                            size={14}
                            className="text-lime-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        peer.name
                      )}
                    </th>

                  <td className="p-5">{peer.generation}</td>
                  <td className="p-5">{peer.origin}</td>
                  <td className="whitespace-nowrap p-5">{peer.length}</td>
                  <td className="whitespace-nowrap p-5">{peer.wingspan}</td>
                  <td className="p-5">{peer.engines}</td>
                  <td className="p-5">{peer.firstFlight}</td>
                  <td className="p-5">{peer.service}</td>
                  <td className="p-5 text-xs leading-5">{peer.layout}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
          Rows run from most to least capable, an editorial estimate ·
          Rounded published figures · Service dates refer to first
          operational units · Generation labels are informal, and 4.5 marks
          upgraded fourth-generation designs · Underlined aircraft have their
          own page
        </p>
      </div>
    </section>
  );
}

export function Reference({
  number = "08",
  entries = glossary,
  links = sources,
  note = "Much about this aircraft is not officially published. Figures on this site are drawn from open sources and should be read as approximate.",
}) {
  const [openTerm, setOpenTerm] = useState(entries[0].term);

  return (
    <section
      id="reference"
      className="relative scroll-mt-20 border-t border-white/10 bg-[#080b0c] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <SectionLabel>{number} / Reference</SectionLabel>

          <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
            Terms, decoded.
          </h2>

          <div className="mt-12 border-t border-white/10">
            {entries.map((entry) => {
              const open = openTerm === entry.term;

              return (
                <div key={entry.term} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenTerm(open ? null : entry.term)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-lime-300"
                  >
                    <span
                      className={`text-base font-semibold md:text-lg ${
                        open ? "text-lime-300" : ""
                      }`}
                    >
                      {entry.term}
                    </span>

                    {open ? (
                      <Minus size={16} className="shrink-0 text-lime-300" />
                    ) : (
                      <Plus size={16} className="shrink-0 text-white/50" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-sm leading-7 text-white/60">
                          {entry.definition}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="border border-white/10 bg-black/20 p-7 md:p-10">
            <div className="font-mono text-[11px] uppercase tracking-[.25em] text-lime-300">
              Further reading
            </div>

            <ul className="mt-8 space-y-6">
              {links.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-start justify-between gap-4 border-b border-white/10 pb-6"
                  >
                    <span>
                      <span className="block text-sm font-semibold transition group-hover:text-lime-300">
                        {source.label}
                      </span>

                      <span className="mt-2 block text-xs text-white/50">
                        {source.note}
                      </span>
                    </span>

                    <ExternalLink
                      size={14}
                      className="mt-1 shrink-0 text-white/50 transition group-hover:text-lime-300"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-xs leading-6 text-white/50">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Specifications({
  specifications,
  number = "04",
  heading = "The public profile.",
  intro = "A structured overview of publicly reported characteristics and programme milestones. Approximate measurements are marked separately from confirmed historical information.",
  notice = "Measurements may refer to different aircraft variants and should not be interpreted as official technical documentation. Dates and descriptions are included for educational context.",
}) {
  const [specificationGroup, setSpecificationGroup] = useState("ALL");
  const [units, setUnits] = useState("metric");

  const specificationGroups = [
    "ALL",
    ...new Set(specifications.map((specification) => specification.group)),
  ];

  const visibleSpecifications =
    specificationGroup === "ALL"
      ? specifications
      : specifications.filter(
          (specification) => specification.group === specificationGroup
        );

  return (
    <section
      id="specifications"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#080b0c] px-5 py-28 md:px-10 md:py-40"
    >
      {/* Drawn with ::before so audits don't read the watermark as text. */}
      <div
        aria-hidden="true"
        data-watermark="DATA"
        className="pointer-events-none absolute -right-8 top-0 text-[24vw] font-black leading-none tracking-[-.09em] text-white/[.018] before:content-[attr(data-watermark)]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>{number} / Specifications</SectionLabel>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-white/50">
              {intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_#c7ff37]" />
                Confirmed or reported
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]" />
                Public estimate
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter specifications by group"
          >
            {specificationGroups.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setSpecificationGroup(group)}
                aria-pressed={specificationGroup === group}
                className={`border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[.2em] transition ${
                  specificationGroup === group
                    ? "border-lime-300 bg-lime-300 text-black"
                    : "border-white/15 text-white/60 hover:border-lime-300/60 hover:text-lime-300"
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          <div
            className="flex w-fit border border-white/15"
            role="group"
            aria-label="Measurement units"
          >
            {[
              ["metric", "Metric"],
              ["imperial", "Imperial"],
            ].map(([unitSystem, label]) => (
              <button
                key={unitSystem}
                type="button"
                onClick={() => setUnits(unitSystem)}
                aria-pressed={units === unitSystem}
                className={`px-4 py-2.5 font-mono text-[10px] uppercase tracking-[.2em] transition ${
                  units === unitSystem
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-lime-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {visibleSpecifications.map((specification, index) => {
            const isEstimate = specification.confidence === "ESTIMATE";

            const measurement =
              units === "imperial" && specification.imperial
                ? specification.imperial
                : specification;

            return (
              <motion.article
                key={specification.label}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                }}
                className="group relative flex min-h-[350px] flex-col overflow-hidden bg-[#080b0c] p-6 transition-colors hover:bg-[#0d1210] md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[.28em] text-white/50">
                      {specification.group}
                    </div>

                    <div className="mt-3 font-mono text-[11px] uppercase tracking-[.24em] text-lime-300">
                      {specification.label}
                    </div>
                  </div>

                  <div className="font-mono text-[10px] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-12">
                  <div className="break-words text-[clamp(1.65rem,2.8vw,2.8rem)] font-semibold leading-[.95] tracking-[-.055em] text-white transition-colors group-hover:text-lime-300">
                    {measurement.value}
                  </div>

                  <div className="mt-4 font-mono text-[10px] uppercase tracking-[.24em] text-white/50">
                    {measurement.unit}
                  </div>
                </div>

                <p className="mt-7 pb-6 text-xs leading-5 text-white/50">
                  {specification.detail}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                    Data confidence
                  </span>

                  <span
                    className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] ${
                      isEstimate ? "text-amber-300" : "text-lime-300"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full ${
                        isEstimate ? "bg-amber-300" : "bg-lime-300"
                      }`}
                    />

                    {specification.confidence}
                  </span>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${
                    isEstimate ? "bg-amber-300" : "bg-lime-300"
                  }`}
                />
              </motion.article>
            );
          })}

          {visibleSpecifications.length % 2 === 1 && (
            <div className="hidden bg-[#080b0c] sm:block lg:hidden" />
          )}

          {Array.from(
            {
              length: (4 - (visibleSpecifications.length % 4)) % 4,
            },
            (_, index) => (
              <div key={index} className="hidden bg-[#080b0c] lg:block" />
            )
          )}
        </div>

        <div className="mt-6 grid gap-4 border border-white/10 bg-black/20 p-5 md:grid-cols-[auto_1fr] md:items-center md:gap-8 md:p-7">
          <div className="font-mono text-[10px] uppercase tracking-[.25em] text-amber-300">
            Data notice
          </div>

          <p className="text-xs leading-6 text-white/60">{notice}</p>
        </div>
      </div>
    </section>
  );
}
