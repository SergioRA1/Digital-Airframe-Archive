import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChevronDown,
  ChevronRight,
  Eye,
  Flame,
  Gauge,
  Radar,
} from "lucide-react";

import { aircraft } from "./aircraft.js";
import { photos } from "./photos.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  goToSection,
  useActiveSection,
} from "./Layout.jsx";
import {
  Comparison,
  Reference,
  SectionLabel,
  Specifications,
  Timeline,
  Variants,
} from "./Sections.jsx";

const designFeatures = [
  {
    id: "01",
    icon: Eye,
    kicker: "SIGNATURE",
    title: "Aligned edges",
    description:
      "Wing, tail and panel edges share a small set of angles, and weapons are carried in internal bays, to keep radar returns low from the front and sides.",
    metric: "WEAPON CARRIAGE",
    value: "INTERNAL",
  },
  {
    id: "02",
    icon: Gauge,
    kicker: "PROPULSION",
    title: "Supercruise",
    description:
      "Two F119 engines allow sustained supersonic flight without afterburner. The Air Force cites speeds above Mach 1.5 in this regime.",
    metric: "WITHOUT AFTERBURNER",
    value: "MACH 1.5+",
  },
  {
    id: "03",
    icon: Flame,
    kicker: "CONTROL",
    title: "Thrust vectoring",
    description:
      "Flat, two-dimensional nozzles deflect engine thrust up and down, adding pitch authority at low speed and high angles of attack.",
    metric: "NOZZLE TRAVEL",
    value: "± 20°",
  },
  {
    id: "04",
    icon: Radar,
    kicker: "AWARENESS",
    title: "Integrated avionics",
    description:
      "The AN/APG-77 AESA radar and passive AN/ALR-94 receivers feed one fused picture to a single pilot, rather than separate displays per sensor.",
    metric: "RADAR",
    value: "AN/APG-77",
  },
];

const specifications = [
  {
    group: "IDENTITY",
    label: "PRIMARY ROLE",
    value: "AIR DOMINANCE",
    unit: "MULTIROLE FIGHTER",
    detail:
      "Described by the U.S. Air Force as an air dominance fighter with air-to-ground capability.",
    confidence: "CONFIRMED",
  },
  {
    group: "IDENTITY",
    label: "MANUFACTURER",
    value: "LOCKHEED MARTIN",
    unit: "WITH BOEING",
    detail:
      "Lockheed Martin was prime contractor, with Boeing building the wings and aft fuselage.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "CREW",
    value: "1",
    unit: "PILOT",
    detail:
      "All production aircraft are single-seat. A planned two-seat trainer was cancelled.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "POWERPLANT",
    value: "2 × F119",
    unit: "PRATT & WHITNEY TURBOFANS",
    detail:
      "F119-PW-100 engines in the 35,000-pound thrust class, each with a two-dimensional thrust-vectoring nozzle.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "WEAPON BAYS",
    value: "1 + 2",
    unit: "MAIN + SIDE BAYS",
    detail:
      "A main bay for medium-range missiles or guided bombs and two side bays for short-range missiles, plus an internal 20 mm cannon.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "LENGTH",
    value: "18.9",
    unit: "METRES",
    imperial: {
      value: "62.1",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "WINGSPAN",
    value: "13.6",
    unit: "METRES",
    imperial: {
      value: "44.5",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "HEIGHT",
    value: "5.1",
    unit: "METRES",
    imperial: {
      value: "16.7",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "MAX TAKEOFF WEIGHT",
    value: "38,000",
    unit: "KILOGRAMS",
    imperial: {
      value: "83,500",
      unit: "POUNDS",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "MAXIMUM SPEED",
    value: "MACH 2 CLASS",
    unit: "WITH AFTERBURNER",
    detail:
      "The official description. Exact maximum speed is not published.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "SUPERCRUISE",
    value: "MACH 1.5+",
    unit: "WITHOUT AFTERBURNER",
    detail:
      "Sustained supersonic cruise on dry thrust, a defining requirement of the programme.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "SERVICE CEILING",
    value: "15,000+",
    unit: "METRES",
    imperial: {
      value: "50,000+",
      unit: "FEET",
    },
    detail: "Published only as “above 50,000 feet”.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "FERRY RANGE",
    value: "≈ 2,960",
    unit: "KILOMETRES",
    imperial: {
      value: "≈ 1,850",
      unit: "MILES",
    },
    detail:
      "Published as more than 1,850 miles with two external fuel tanks.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "FIRST FLIGHT",
    value: "7 SEP 1997",
    unit: "MARIETTA, GEORGIA",
    detail:
      "First flight of the production-standard F-22. The YF-22 prototype had flown in September 1990.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "SERVICE ENTRY",
    value: "DEC 2005",
    unit: "U.S. AIR FORCE",
    detail:
      "Initial operational capability was declared at Langley Air Force Base, Virginia.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "AIRFRAMES BUILT",
    value: "195",
    unit: "187 PRODUCTION + 8 TEST",
    detail:
      "Production ended in 2011. The aircraft was never exported.",
    confidence: "CONFIRMED",
  },
];

const milestones = [
  {
    date: "1981",
    title: "A new requirement",
    detail:
      "The U.S. Air Force defines the Advanced Tactical Fighter requirement for an aircraft to succeed the F-15.",
    confidence: "CONFIRMED",
  },
  {
    date: "OCT 1986",
    title: "Two teams chosen",
    detail:
      "Teams led by Lockheed and Northrop are selected to build competing prototypes, the YF-22 and YF-23.",
    confidence: "CONFIRMED",
  },
  {
    date: "29 SEP 1990",
    title: "YF-22 flies",
    detail: "The first YF-22 prototype makes its maiden flight.",
    confidence: "CONFIRMED",
  },
  {
    date: "23 APR 1991",
    title: "Competition won",
    detail:
      "The YF-22 and its Pratt & Whitney engine are announced as winners of the Advanced Tactical Fighter competition.",
    confidence: "CONFIRMED",
  },
  {
    date: "APR 1997",
    title: "Roll-out",
    detail:
      "The first production-standard F-22 is rolled out at Marietta, Georgia, and the name Raptor is announced.",
    confidence: "CONFIRMED",
  },
  {
    date: "7 SEP 1997",
    title: "First flight",
    detail: "The first F-22 flies from Marietta.",
    confidence: "CONFIRMED",
  },
  {
    date: "2003",
    title: "Training begins",
    detail:
      "The first aircraft are delivered to Tyndall Air Force Base, Florida, to train pilots.",
    confidence: "CONFIRMED",
  },
  {
    date: "DEC 2005",
    title: "Initial operational capability",
    detail:
      "The 27th Fighter Squadron at Langley Air Force Base becomes the first operational unit.",
    confidence: "CONFIRMED",
  },
  {
    date: "2009",
    title: "Production capped",
    detail:
      "The decision is taken to end procurement at 187 production aircraft, far fewer than first planned.",
    confidence: "CONFIRMED",
  },
  {
    date: "DEC 2011",
    title: "Last aircraft built",
    detail:
      "The final F-22 leaves the Marietta assembly line. It is delivered the following year.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2014",
    title: "Combat debut",
    detail:
      "F-22s fly their first combat mission, striking targets in Syria.",
    confidence: "CONFIRMED",
  },
  {
    date: "4 FEB 2023",
    title: "First air-to-air kill",
    detail:
      "An F-22 from Langley shoots down a high-altitude balloon off the coast of South Carolina.",
    confidence: "CONFIRMED",
  },
  {
    date: "JAN 2025",
    title: "Infrared defence upgrade",
    detail:
      "Lockheed Martin receives a 270 million dollar contract to fit a new infrared defensive system to the fleet.",
    confidence: "CONFIRMED",
  },
  {
    date: "FEB–MAR 2026",
    title: "Operation Epic Fury",
    detail:
      "F-22s deploy to Israel and fly in the U.S.-Israeli campaign against Iran, mainly to keep Iranian aircraft away from strike packages.",
    confidence: "REPORTED",
  },
];

const silhouette = aircraft.find((entry) => entry.slug === "f-22").silhouette;

const variants = [
  {
    code: "YF-22",
    name: "Prototype",
    seats: "1",
    status: "2 BUILT",
    photo: photos.f22_yf22,
    caption: "A YF-22 prototype in a test flight",
    summary:
      "The demonstrator that won the Advanced Tactical Fighter competition against the Northrop YF-23. The production aircraft was substantially reshaped afterwards.",
    points: [
      "First flight in September 1990",
      "Flown with two competing engine designs",
      "Selected in April 1991",
    ],
  },
  {
    code: "F-22A",
    name: "Production single-seat",
    seats: "1",
    status: "IN SERVICE",
    photo: photos.f22_a,
    caption: "An F-22A over Kadena Air Base, Japan, 2009",
    summary:
      "The only production version. It was briefly designated F/A-22 in the early 2000s to emphasise its ground-attack role.",
    points: [
      "187 production aircraft",
      "In service since 2005",
      "Upgraded in increments since delivery",
    ],
  },
  {
    code: "F-22B",
    name: "Planned two-seat",
    seats: "2",
    status: "CANCELLED",
    caption: "Never built, so there is no photograph",
    summary:
      "A two-seat trainer planned alongside the F-22A and cancelled in the 1990s to save cost. Pilots train in simulators and the single-seat aircraft.",
    points: [
      "None built",
      "Cancelled before production",
      "No two-seat Raptor has flown",
    ],
  },
];

const glossary = [
  {
    term: "Fifth generation",
    definition:
      "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. The F-22 is usually named as the first.",
  },
  {
    term: "Advanced Tactical Fighter (ATF)",
    definition:
      "The 1980s U.S. Air Force programme to replace the F-15. It produced two competing prototypes, the YF-22 and the YF-23.",
  },
  {
    term: "Low observable (LO)",
    definition:
      "Design measures that reduce how easily an aircraft is detected — shaping, aligned edges, internal weapon bays and surface materials. Often called stealth.",
  },
  {
    term: "Supercruise",
    definition:
      "Sustained supersonic flight without afterburner, which saves fuel and reduces the aircraft's infrared signature compared with afterburning flight.",
  },
  {
    term: "Thrust vectoring",
    definition:
      "Redirecting engine exhaust to help steer the aircraft. The F-22's nozzles move in pitch only.",
  },
  {
    term: "AESA radar",
    definition:
      "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
  },
];

const sources = [
  {
    label: "U.S. Air Force — F-22 Raptor fact sheet",
    href: "https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104506/f-22-raptor/",
    note: "Official description and published figures",
  },
  {
    label: "Wikipedia — Lockheed Martin F-22 Raptor",
    href: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor",
    note: "General reference and citations",
  },
  {
    label: "Wikimedia Commons — F-22 media",
    href: "https://commons.wikimedia.org/wiki/Category:Lockheed_Martin_F-22_Raptor",
    note: "Public-domain and freely licensed photographs",
  },
];

const navigationItems = [
  ["design", "Design"],
  ["specifications", "Data"],
  ["history", "History"],
  ["variants", "Variants"],
  ["compare", "Compare"],
  ["reference", "Reference"],
];

const sectionIds = [
  "top",
  "archive",
  ...navigationItems.map(([sectionId]) => sectionId),
];

function Aircraft() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        rotate: -2,
      }}
      animate={{
        opacity: 1,
        y: [0, -9, 0],
        rotate: [-1, 1, -1],
      }}
      transition={{
        opacity: {
          duration: 1,
        },
        y: {
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative mx-auto w-full max-w-4xl"
    >
      <div className="absolute left-1/2 top-1/2 h-20 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl" />

      <svg
        viewBox="200 0 816 480"
        className="relative w-full overflow-visible drop-shadow-[0_35px_28px_rgba(0,0,0,.65)]"
        role="img"
        aria-label="Stylized F-22 silhouette seen from above"
      >
        <defs>
          <linearGradient id="raptor-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#41494a" />
            <stop offset=".42" stopColor="#171d1e" />
            <stop offset=".8" stopColor="#2b3333" />
            <stop offset="1" stopColor="#0c1011" />
          </linearGradient>

          <linearGradient id="raptor-edge" x1="0" x2="1">
            <stop stopColor="#c7ff37" stopOpacity="0" />
            <stop offset=".5" stopColor="#c7ff37" stopOpacity=".9" />
            <stop offset="1" stopColor="#c7ff37" stopOpacity="0" />
          </linearGradient>

          <filter id="raptor-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M608 40 L636 170 L660 215 L905 330 L905 352 L712 322 L805 408 L778 440 L668 398 L650 425 L608 410 L566 425 L548 398 L438 440 L411 408 L504 322 L311 352 L311 330 L556 215 L580 170 Z"
          fill="url(#raptor-body)"
          stroke="#5d6868"
          strokeWidth="2"
        />

        <path
          d="M608 40 L608 410 M660 215 L712 322 M556 215 L504 322"
          fill="none"
          stroke="#778181"
          strokeOpacity=".34"
          strokeWidth="2"
        />

        <path
          d="M590 165 L608 70 L626 165 L618 195 L598 195 Z"
          fill="#789398"
          fillOpacity=".36"
          stroke="#8b9796"
          strokeOpacity=".65"
        />

        <path
          d="M640 300 L694 388 L674 394 L632 330 Z M576 300 L522 388 L542 394 L584 330 Z"
          fill="#101516"
          stroke="#485151"
        />

        <path
          d="M540 418 Q608 440 676 418"
          fill="none"
          stroke="url(#raptor-edge)"
          strokeWidth="3"
          filter="url(#raptor-glow)"
        />
      </svg>
    </motion.div>
  );
}

function F22({ introDelay = 0.1 }) {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="22"
        items={navigationItems}
        activeSection={activeSection}
        galleryHref="#/f-22/gallery"
      />

      <main>
        <section
          id="top"
          className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden px-5 pb-10 pt-28 md:px-10"
        >
          <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: introDelay,
                duration: 0.8,
              }}
              className="relative z-10"
            >
              <SectionLabel>Lockheed Martin F-22 Raptor</SectionLabel>

              <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-black leading-[.73] tracking-[-.08em]">
                F<span className="text-lime-300">-</span>22
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base">
                The first operational fifth-generation fighter: an air
                dominance aircraft built around stealth, supercruise and
                sensor fusion, and flown only by the U.S. Air Force.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => goToSection("design")}
                  className="group flex items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
                >
                  Enter archive

                  <ChevronRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <a
                  href="#/f-22/gallery"
                  className="flex items-center gap-4 border border-white/20 px-6 py-4 text-[11px] uppercase tracking-[.2em] text-white/75 transition hover:border-lime-300 hover:text-lime-300"
                >
                  View photography
                  <Camera size={15} />
                </a>
              </div>
            </motion.div>

            <div className="relative">
              <Aircraft />

              <div className="absolute right-[6%] top-[8%] hidden font-mono text-[10px] uppercase tracking-[.2em] text-white/50 md:block">
                <span className="text-lime-300">●</span> Visual model / 002
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[1500px] items-end justify-between border-t border-white/10 pt-5">
            <div className="grid grid-cols-3 gap-8 font-mono text-[10px] uppercase tracking-[.18em] text-white/50 md:gap-16">
              <div>
                <b className="block text-xs text-white/80">05</b>
                Generation
              </div>

              <div>
                <b className="block text-xs text-white/80">195</b>
                Built
              </div>

              <div>
                <b className="block text-xs text-lime-300">1997</b>
                First flight
              </div>
            </div>

            <button
              type="button"
              onClick={() => goToSection("design")}
              className="hidden items-center gap-3 text-[11px] uppercase tracking-[.2em] text-white/60 transition hover:text-lime-300 md:flex"
            >
              Scroll to explore

              <motion.span
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <ChevronDown size={15} />
              </motion.span>
            </button>
          </div>
        </section>

        <section
          id="design"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <SectionLabel>01 / Design</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  First look, first shot.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                The F-22 was designed to find and engage other aircraft
                before being detected itself. Four ideas carry most of that
                design.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {designFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.id}
                    className="group bg-[#050708] p-7 transition-colors duration-150 ease-linear hover:bg-[#0b100d] md:p-10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center border border-white/15 text-lime-300 transition group-hover:border-lime-300">
                        <Icon size={20} />
                      </div>

                      <span className="font-mono text-[11px] text-white/50">
                        DSN / {feature.id}
                      </span>
                    </div>

                    <div className="mt-14 font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                      {feature.kicker}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                      {feature.description}
                    </p>

                    <div className="mt-10 flex justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                      <span>{feature.metric}</span>
                      <span className="text-white/70">{feature.value}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <Specifications
          specifications={specifications}
          number="02"
          heading="The published profile."
          intro="Figures published by the U.S. Air Force, rounded for display. Performance beyond what is officially stated is not included."
          notice="Values follow the public U.S. Air Force fact sheet and standard references. They are included for educational context, not as technical documentation."
        />

        <Timeline
          slug="f-22"
          number="03"
          heading="From requirement to Raptor."
          intro="The programme in fourteen dates, from the requirement that started it to combat over Iran."
          items={milestones}
        />

        <Variants
          number="04"
          heading="One production form."
          intro="Only one version of the F-22 was built in quantity. A two-seat trainer was planned and dropped, so it is shown as a silhouette."
          items={variants}
          silhouette={silhouette}
        />

        <Comparison
          number="05"
          current="f-22"
          intro="Published dimensions and dates for the F-22 alongside eleven other aircraft. It was the first fifth-generation fighter to fly and to enter service."
        />

        <Reference
          number="06"
          entries={glossary}
          links={sources}
          note="Figures on this page follow official publications where available. Anything not officially published has been left out."
        />

        <section
          id="archive"
          className="relative scroll-mt-20 border-t border-white/10 bg-[#090c0d] px-5 py-28 md:px-10 md:py-32"
        >
          <div className="mx-auto grid max-w-[1500px] gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            <a
              href="#/f-22/gallery"
              className="group flex items-center justify-between gap-6 bg-[#090c0d] p-8 transition-colors hover:bg-[#0d1210] md:p-12"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                  Photographic archive
                </span>

                <span className="mt-4 block text-3xl font-semibold tracking-[-.04em] transition group-hover:text-lime-300 md:text-4xl">
                  F-22 in frame
                </span>
              </span>

              <ArrowRight
                size={22}
                className="shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-lime-300"
              />
            </a>

            <a
              href="#/f-35"
              className="group flex items-center justify-between gap-6 bg-[#090c0d] p-8 transition-colors hover:bg-[#0d1210] md:p-12"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                  Next aircraft
                </span>

                <span className="mt-4 block text-3xl font-semibold tracking-[-.04em] transition group-hover:text-lime-300 md:text-4xl">
                  Lockheed Martin F-35
                </span>
              </span>

              <ArrowRight
                size={22}
                className="shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-lime-300"
              />
            </a>
          </div>
        </section>
      </main>

      <PageFooter label="AIRFRAME / 22" />
    </div>
  );
}

export default F22;
