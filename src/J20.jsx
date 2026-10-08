import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Camera,
  ChevronDown,
  ChevronRight,
  Eye,
  Gauge,
  Radar,
  Radio,
} from "lucide-react";

import { aircraft } from "./aircraft.js";
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

const systems = [
  {
    id: "01",
    icon: Eye,
    title: "Low-observable form",
    kicker: "AIRFRAME",
    description:
      "A visual exploration of planform alignment, internal geometry and an airframe shaped around reduced observability.",
    reported:
      "Internal weapon bays, diverterless intakes and sawtooth panel edges are the most visible low-observable features in public photographs.",
    metric: "PROFILE",
    value: "STEALTH",
  },
  {
    id: "02",
    icon: Radar,
    title: "Sensor fusion",
    kicker: "AWARENESS",
    description:
      "Simulated radar, infrared and navigation information are presented as one coherent visual layer.",
    reported:
      "Public reporting describes an AESA radar, a chin-mounted electro-optical targeting system and infrared apertures distributed around the airframe.",
    metric: "TRACKS",
    value: "FUSED",
  },
  {
    id: "03",
    icon: Radio,
    title: "Connected battlespace",
    kicker: "NETWORK",
    description:
      "Abstract data links visualize information moving between aircraft, command nodes and supporting assets.",
    reported:
      "The twin-seat J-20S is widely reported as intended for mission management and teaming with uncrewed aircraft.",
    metric: "LINK",
    value: "ACTIVE",
  },
  {
    id: "04",
    icon: Gauge,
    title: "High-energy flight",
    kicker: "PERFORMANCE",
    description:
      "Animated telemetry gives the experience a sense of speed without presenting operational controls.",
    reported:
      "Later production aircraft are reported to use Chinese WS-10C engines, with the more powerful WS-15 in flight testing.",
    metric: "STATE",
    value: "NOMINAL",
  },
];

const chapters = [
  {
    number: "01",
    label: "Identity",
    detail: "Return to the opening aircraft presentation.",
    target: "top",
  },
  {
    number: "02",
    label: "Airframe",
    detail: "Explore the visual language behind the aircraft.",
    target: "airframe",
  },
  {
    number: "03",
    label: "Systems",
    detail: "Interactive cards present the digital architecture.",
    target: "systems",
  },
  {
    number: "04",
    label: "Specifications",
    detail: "Reported dimensions and development milestones.",
    target: "specifications",
  },
  {
    number: "05",
    label: "History",
    detail: "Milestones from early design studies to today.",
    target: "history",
  },
  {
    number: "06",
    label: "Variants",
    detail: "Baseline, updated and twin-seat airframes.",
    target: "variants",
  },
  {
    number: "07",
    label: "Comparison",
    detail: "The J-20 beside its fifth-generation peers.",
    target: "compare",
  },
  {
    number: "08",
    label: "Reference",
    detail: "A glossary of terms and further reading.",
    target: "reference",
  },
];

const airframeFeatures = [
  {
    letter: "A",
    label: "Chined nose profile",
    x: 608,
    y: 86,
    detail:
      "A sharp chine runs from the nose along the forward fuselage, giving the faceted cross-section typical of low-observable designs.",
  },
  {
    letter: "B",
    label: "Blended wing body",
    x: 738,
    y: 338,
    detail:
      "The fuselage merges smoothly into a large delta wing, providing internal volume for fuel and lift at high speed.",
  },
  {
    letter: "C",
    label: "Canard configuration",
    x: 672,
    y: 220,
    detail:
      "All-moving foreplanes ahead of the wing add lift and pitch authority. Few low-observable designs use them.",
  },
  {
    letter: "D",
    label: "Twin-tail arrangement",
    x: 704,
    y: 440,
    detail:
      "Two all-moving, outward-canted vertical tails, paired with small ventral fins beneath the rear fuselage.",
  },
  {
    letter: "E",
    label: "Diverterless intakes",
    x: 584,
    y: 246,
    detail:
      "Each intake uses a fixed bump instead of moving ramps, which saves weight and helps hide the engine face.",
  },
  {
    letter: "F",
    label: "Internal weapon bays",
    x: 608,
    y: 318,
    detail:
      "A main bay under the fuselage and two smaller side bays keep stores inside the airframe.",
  },
];

const specifications = [
  {
    group: "IDENTITY",
    label: "PRIMARY ROLE",
    value: "AIR SUPERIORITY",
    unit: "STEALTH FIGHTER",
    detail:
      "Publicly described as an air-superiority fighter with a secondary precision-strike capability.",
    confidence: "REPORTED",
  },
  {
    group: "IDENTITY",
    label: "MANUFACTURER",
    value: "CHENGDU",
    unit: "AIRCRAFT CORPORATION",
    detail:
      "Developed and manufactured by Chengdu Aircraft Corporation in China.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "CREW",
    value: "1",
    unit: "PILOT",
    detail:
      "The original and baseline production aircraft use a single-seat configuration.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "LENGTH",
    value: "20.4–21.2",
    unit: "METRES",
    imperial: {
      value: "66.9–69.6",
      unit: "FEET",
    },
    detail:
      "Approximate range found across public references. Values vary between sources.",
    confidence: "ESTIMATE",
  },
  {
    group: "DIMENSIONS",
    label: "WINGSPAN",
    value: "13.0–13.5",
    unit: "METRES",
    imperial: {
      value: "42.7–44.3",
      unit: "FEET",
    },
    detail:
      "Approximate published wingspan depending on the source and aircraft variant.",
    confidence: "ESTIMATE",
  },
  {
    group: "DIMENSIONS",
    label: "HEIGHT",
    value: "4.4–4.7",
    unit: "METRES",
    imperial: {
      value: "14.4–15.4",
      unit: "FEET",
    },
    detail:
      "Approximate published height rather than an official manufacturer measurement.",
    confidence: "ESTIMATE",
  },
  {
    group: "PROGRAMME",
    label: "FIRST FLIGHT",
    value: "11 JAN 2011",
    unit: "CHENGDU",
    detail:
      "The date associated with the aircraft's publicly reported maiden flight.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "SERVICE ENTRY",
    value: "MAR 2017",
    unit: "PLAAF",
    detail:
      "The J-20 was publicly reported as entering service in March 2017.",
    confidence: "CONFIRMED",
  },
  {
    group: "IDENTITY",
    label: "NAME",
    value: "MIGHTY DRAGON",
    unit: "AS USED IN CHINESE MEDIA",
    detail:
      "The name commonly used for the aircraft in Chinese media and public commentary.",
    confidence: "REPORTED",
  },
  {
    group: "CONFIGURATION",
    label: "POWERPLANT",
    value: "2 × WS-10C",
    unit: "AFTERBURNING TURBOFANS",
    detail:
      "Reported for later production aircraft. Early examples used Russian-derived AL-31 series engines; the WS-15 is reported in testing.",
    confidence: "REPORTED",
  },
  {
    group: "CONFIGURATION",
    label: "WEAPON BAYS",
    value: "1 + 2",
    unit: "MAIN + SIDE BAYS",
    detail:
      "A main ventral bay for longer-range missiles and two side bays for short-range missiles, as seen at public displays.",
    confidence: "REPORTED",
  },
  {
    group: "DIMENSIONS",
    label: "MAX TAKEOFF WEIGHT",
    value: "≈ 37,000",
    unit: "KILOGRAMS",
    imperial: {
      value: "≈ 81,600",
      unit: "POUNDS",
    },
    detail:
      "A commonly cited open-source estimate. No official figure has been published.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "MAXIMUM SPEED",
    value: "MACH 2.0",
    unit: "APPROXIMATE",
    detail:
      "A widely quoted estimate for speed at altitude; actual performance depends on the engines fitted.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "SERVICE CEILING",
    value: "≈ 20,000",
    unit: "METRES",
    imperial: {
      value: "≈ 65,600",
      unit: "FEET",
    },
    detail:
      "An open-source estimate repeated across public references.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "COMBAT RADIUS",
    value: "≈ 2,000",
    unit: "KILOMETRES",
    imperial: {
      value: "≈ 1,240",
      unit: "MILES",
    },
    detail:
      "Estimates vary widely with mission profile and external fuel. The long airframe suggests a large internal fuel load.",
    confidence: "ESTIMATE",
  },
  {
    group: "PROGRAMME",
    label: "AIRFRAMES BUILT",
    value: "300+",
    unit: "OPEN-SOURCE ESTIMATE",
    detail:
      "Analyst estimates based on serial numbers and imagery as of 2025. Production totals are not officially published.",
    confidence: "ESTIMATE",
  },
];

const silhouette = aircraft.find((entry) => entry.slug === "j-20").silhouette;

const navigationItems = [
  ["overview", "Overview"],
  ["airframe", "Airframe"],
  ["systems", "Systems"],
  ["specifications", "Data"],
  ["history", "History"],
  ["variants", "Variants"],
  ["compare", "Compare"],
  ["reference", "Reference"],
];

const sectionIds = [
  "top",
  "profile",
  ...navigationItems.map(([sectionId]) => sectionId),
];

function Aircraft({
  compact = false,
  features = [],
  activeFeature,
  onSelectFeature,
}) {
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
      className={`relative mx-auto ${
        compact ? "w-full max-w-xl" : "w-[94vw] max-w-6xl"
      }`}
    >
      <div className="absolute left-1/2 top-1/2 h-20 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl" />

      <svg
        viewBox="0 0 1200 500"
        className="relative w-full overflow-visible drop-shadow-[0_35px_28px_rgba(0,0,0,.65)]"
        role="img"
        aria-label="Stylized stealth aircraft silhouette"
      >
        <defs>
          <linearGradient
            id="aircraft-body"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stopColor="#41494a" />
            <stop offset=".42" stopColor="#171d1e" />
            <stop offset=".8" stopColor="#2b3333" />
            <stop offset="1" stopColor="#0c1011" />
          </linearGradient>

          <linearGradient id="aircraft-edge" x1="0" x2="1">
            <stop stopColor="#c7ff37" stopOpacity="0" />
            <stop offset=".5" stopColor="#c7ff37" stopOpacity=".9" />
            <stop offset="1" stopColor="#c7ff37" stopOpacity="0" />
          </linearGradient>

          <filter id="aircraft-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M608 34 L616 80 L622 126 L626 172 L696 214 L690 230 L638 222 L640 252 L808 376 L804 392 L690 414 L714 426 L718 458 L694 454 L676 468 L640 466 L608 462 L576 466 L540 468 L522 454 L498 458 L502 426 L526 414 L412 392 L408 376 L576 252 L578 222 L526 230 L520 214 L590 172 L594 126 L600 80 Z"
          fill="url(#aircraft-body)"
          stroke="#5d6868"
          strokeWidth="2"
        />

        <path
          d="M608 34 L608 462 M626 172 L640 252 L808 376 M590 172 L576 252 L408 376"
          fill="none"
          stroke="#778181"
          strokeOpacity=".34"
          strokeWidth="2"
        />

        <path
          d="M596 176 L600 118 L608 74 L616 118 L620 176 L612 214 L604 214 Z"
          fill="#101616"
          stroke="#8b9796"
          strokeOpacity=".65"
        />

        <path
          d="M601 160 L608 92 L615 160 L611 184 L605 184 Z"
          fill="#789398"
          fillOpacity=".36"
        />

        <path
          d="M632 262 L646 262 L652 350 L634 350 Z M584 262 L570 262 L564 350 L582 350 Z"
          fill="#101516"
          stroke="#485151"
        />

        <path
          d="M572 456 Q608 484 644 456"
          fill="none"
          stroke="url(#aircraft-edge)"
          strokeWidth="3"
          filter="url(#aircraft-glow)"
        />

        <circle
          cx="608"
          cy="330"
          r="4"
          fill="#c7ff37"
          filter="url(#aircraft-glow)"
        />

        {features.map((feature) => {
          const active = feature.letter === activeFeature;

          return (
            <g
              key={feature.letter}
              onClick={() => onSelectFeature(feature.letter)}
              className="cursor-pointer"
            >
              {active && (
                <motion.circle
                  cx={feature.x}
                  cy={feature.y}
                  fill="none"
                  stroke="#c7ff37"
                  strokeWidth="2"
                  initial={{
                    r: 20,
                    opacity: 0.7,
                  }}
                  animate={{
                    r: [20, 38],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              <circle
                cx={feature.x}
                cy={feature.y}
                r="20"
                fill={active ? "#c7ff37" : "#050708"}
                stroke="#c7ff37"
                strokeWidth="2"
              />

              <text
                x={feature.x}
                y={feature.y + 7}
                textAnchor="middle"
                fontSize="20"
                fontWeight="700"
                fill={active ? "#050708" : "#c7ff37"}
              >
                {feature.letter}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="absolute left-[10%] top-[58%] h-px w-[18%] bg-gradient-to-r from-transparent to-lime-300/60" />

      <div className="absolute right-[10%] top-[58%] h-px w-[18%] bg-gradient-to-l from-transparent to-lime-300/60" />
    </motion.div>
  );
}

function RadarDisplay() {
  const radarDots = useMemo(
    () => [
      [28, 34],
      [67, 25],
      [62, 69],
      [39, 76],
      [77, 49],
    ],
    []
  );

  return (
    <div className="relative aspect-square w-full max-w-[340px] overflow-hidden rounded-full border border-white/20 bg-black/30 shadow-[inset_0_0_55px_rgba(199,255,55,.08)]">
      {[25, 50, 75].map((size) => (
        <div
          key={size}
          className="absolute rounded-full border border-lime-300/15"
          style={{
            inset: `${(100 - size) / 2}%`,
          }}
        />
      ))}

      <div className="absolute left-1/2 top-0 h-full w-px bg-lime-300/15" />

      <div className="absolute left-0 top-1/2 h-px w-full bg-lime-300/15" />

      <motion.div
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(199,255,55,.5),rgba(199,255,55,.04)_18%,transparent_28%)]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {radarDots.map(([x, y], index) => (
        <motion.span
          key={`${x}-${y}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_#c7ff37]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.35, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      ))}

      <div className="absolute inset-[47%] rounded-full bg-white shadow-[0_0_18px_white]" />
    </div>
  );
}

function J20({ introDelay = 0.1 }) {
  const [activeFeature, setActiveFeature] = useState("A");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const activeSection = useActiveSection(sectionIds);

  const openGallery = () => {
    window.location.hash = "/j-20/gallery";
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="20"
        items={navigationItems}
        activeSection={activeSection}
        galleryHref="#/j-20/gallery"
      />

      <main>
        <section
          id="top"
          className="relative flex min-h-screen scroll-mt-20 flex-col justify-center overflow-hidden px-5 pb-10 pt-28 md:px-10"
        >
          <div className="mx-auto grid w-full max-w-[1500px] items-center gap-8 lg:grid-cols-[.7fr_1.3fr]">
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
              <SectionLabel>Chengdu J-20</SectionLabel>

              <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-black leading-[.73] tracking-[-.08em]">
                J<span className="text-lime-300">-</span>20
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base">
                An independent digital exhibition exploring the visual
                identity, airframe geometry and public history of a modern
                stealth aircraft.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => goToSection("overview")}
                  className="group flex items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
                >
                  Enter archive

                  <ChevronRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={openGallery}
                  className="flex items-center gap-4 border border-white/20 px-6 py-4 text-[11px] uppercase tracking-[.2em] text-white/75 transition hover:border-lime-300 hover:text-lime-300"
                >
                  View photography
                  <Camera size={15} />
                </button>
              </div>
            </motion.div>

            <div className="relative lg:-ml-20">
              <Aircraft />

              <div className="absolute right-[12%] top-[18%] hidden font-mono text-[10px] uppercase tracking-[.2em] text-white/50 md:block">
                <span className="text-lime-300">●</span> Visual model / 001
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
                <b className="block text-xs text-white/80">01</b>
                Airframe
              </div>

              <div>
                <b className="block text-xs text-lime-300">LIVE</b>
                Exhibit
              </div>
            </div>

            <button
              type="button"
              onClick={() => goToSection("overview")}
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
          id="overview"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-36"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
              <div>
                <SectionLabel>01 / Overview</SectionLabel>

                <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-7xl">
                  Designed as a digital shadow in the sky.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">
                This concept treats the aircraft as a museum object. Graphic
                overlays, restrained motion and layered information create an
                interactive visual story.
              </p>
            </div>

            <div className="mt-20 grid border-y border-white/10 md:grid-cols-4">
              {chapters.map((chapter, index) => {
                const selected = selectedChapter === index;

                return (
                  <button
                    key={chapter.number}
                    type="button"
                    onClick={() => {
                      setSelectedChapter(index);
                      goToSection(chapter.target);
                    }}
                    className={`group min-h-52 border-b border-white/10 p-6 text-left transition duration-300 md:border-r ${
                      index < chapters.length - 4 ? "" : "md:border-b-0"
                    } ${
                      selected
                        ? "bg-lime-300 text-black"
                        : "hover:bg-white/[.035]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[11px] ${
                          selected ? "text-black/70" : "text-lime-300"
                        }`}
                      >
                        {chapter.number}
                      </span>

                      <ChevronRight
                        size={15}
                        className={`transition group-hover:translate-x-1 ${
                          selected ? "text-black/60" : "text-white/50"
                        }`}
                      />
                    </div>

                    <h3 className="mt-16 text-xl font-semibold">
                      {chapter.label}
                    </h3>

                    <p
                      className={`mt-3 text-xs leading-5 ${
                        selected ? "text-black/65" : "text-white/60"
                      }`}
                    >
                      {chapter.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="airframe"
          className="relative scroll-mt-20 overflow-hidden bg-[#0b0f10] px-5 py-28 md:px-10 md:py-40"
        >
          {/* Drawn with ::before so audits don't read the watermark as text. */}
          <div
            aria-hidden="true"
            data-watermark="20"
            className="absolute right-0 top-0 text-[28vw] font-black leading-none tracking-[-.08em] text-white/[.018] before:content-[attr(data-watermark)]"
          />

          <div className="relative mx-auto max-w-[1500px]">
            <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <SectionLabel>02 / Airframe</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  Geometry with intent.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
                  The visual model is deliberately stylized. Select a callout
                  or a marker on the projection to read about the design
                  features visible in public photographs.
                </p>

                <div className="mt-10 border-t border-white/10">
                  {airframeFeatures.map((feature) => {
                    const active = feature.letter === activeFeature;

                    return (
                      <button
                        key={feature.letter}
                        type="button"
                        onClick={() => setActiveFeature(feature.letter)}
                        aria-pressed={active}
                        className="group flex w-full items-start gap-4 border-b border-white/10 py-4 text-left"
                      >
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border font-mono text-[11px] transition ${
                            active
                              ? "border-lime-300 bg-lime-300 text-black"
                              : "border-lime-300/50 text-lime-300 group-hover:border-lime-300"
                          }`}
                        >
                          {feature.letter}
                        </span>

                        <span className="pt-1">
                          <span
                            className={`block text-xs uppercase tracking-[.16em] transition group-hover:text-lime-300 ${
                              active ? "text-lime-300" : "text-white/65"
                            }`}
                          >
                            {feature.label}
                          </span>

                          {active && (
                            <motion.span
                              initial={{
                                opacity: 0,
                                y: -4,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              className="mt-3 block max-w-md text-sm leading-6 text-white/60"
                            >
                              {feature.detail}
                            </motion.span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative border border-white/10 bg-black/20 p-4 md:p-10">
                <div className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                  Top projection / illustrative
                </div>

                <Aircraft
                  compact
                  features={airframeFeatures}
                  activeFeature={activeFeature}
                  onSelectFeature={setActiveFeature}
                />

                <div className="grid grid-cols-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[.15em] text-white/50">
                  <span>Axis X / Stable</span>
                  <span className="text-center">Select a marker</span>
                  <span className="text-right text-lime-300">
                    Feature / {activeFeature}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="relative scroll-mt-20 px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <SectionLabel>03 / Systems</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  One integrated picture.
                </h2>
              </div>

              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.2em] text-white/50">
                <Activity size={14} className="text-lime-300" />
                Interface simulation online
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {systems.map((system) => {
                const Icon = system.icon;

                return (
                  <article
                  key={system.id}
                  className="group bg-[#050708] p-7 transition-colors duration-150 ease-linear hover:bg-[#0b100d] md:p-10"
                >
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center border border-white/15 text-lime-300 transition group-hover:border-lime-300">
                        <Icon size={20} />
                      </div>

                      <span className="font-mono text-[11px] text-white/50">
                        SYS / {system.id}
                      </span>
                    </div>

                    <div className="mt-14 font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                      {system.kicker}
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold">
                      {system.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/60">
                      {system.description}
                    </p>

                    <p className="mt-5 max-w-md border-l border-lime-300/40 pl-4 text-xs leading-5 text-white/60">
                      {system.reported}
                    </p>

                    <div className="mt-10 flex justify-between border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                      <span>{system.metric}</span>
                      <span className="text-white/70">{system.value}</span>
                    </div>
                    </article>
                );
              })}
            </div>
          </div>
        </section>

        <Specifications specifications={specifications} />

        <Timeline slug="j-20" />

        <Variants
          silhouette={silhouette}
          intro="The J-20 family as it is described in public sources. Designations are not applied consistently between publications, so treat the names as working labels. Where no freely licensed photograph exists, a silhouette is shown instead."
        />

        <Comparison
          current="j-20"
          intro="Published dimensions and dates for the J-20 alongside eleven other aircraft. The J-20 is one of the longest aircraft in the table; its figures are public estimates."
        />

        <Reference />

        <section
          id="profile"
          className="relative scroll-mt-20 border-y border-white/10 bg-[#090c0d] px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <SectionLabel>09 / Profile</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                Explore the signal.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/50">
                The radar-inspired module adds motion to the final chapter. The
                targets and telemetry are fictional interface elements created
                for visual storytelling.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
                {[
                  ["MODE", "EXHIBIT"],
                  ["SIGNAL", "CLEAR"],
                  ["TRACKS", "05"],
                  ["STATUS", "ONLINE"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#090c0d] p-5">
                    <div className="font-mono text-[10px] tracking-[.2em] text-white/50">
                      {label}
                    </div>

                    <div className="mt-2 text-sm font-semibold text-lime-300">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={openGallery}
                className="group mt-10 flex items-center gap-4 border border-white/20 px-6 py-4 text-[11px] uppercase tracking-[.2em] transition hover:border-lime-300 hover:text-lime-300"
              >
                Enter photographic archive

                <ChevronRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href="#/f-22"
                className="group mt-4 flex w-fit items-center gap-4 font-mono text-[11px] uppercase tracking-[.2em] text-white/60 transition hover:text-lime-300"
              >
                Next aircraft / F-22 Raptor

                <ChevronRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="flex justify-center">
              <RadarDisplay />
            </div>
          </div>
        </section>
      </main>

      <PageFooter label="AIRFRAME / 20" />
    </div>
  );
}

export default J20;