import { useMemo, useState } from "react";
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
  glossary,
  milestones,
  page as pageText,
  sectionText,
  sources,
  specifications,
  variants,
} from "./data/j20.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  SectionLabel,
  goToSection,
  useActiveSection,
} from "./Layout.jsx";
import { Comparison } from "./Comparison.jsx";
import { localise, useHref } from "./i18n.js";
import { navigate } from "./routes.js";
import {
  Reference,
  Specifications,
  Timeline,
  Variants,
} from "./Sections.jsx";

const systemIcons = [Eye, Radar, Radio, Gauge];

const chapterTargets = [
  "top",
  "airframe",
  "systems",
  "specifications",
  "history",
  "variants",
  "compare",
  "reference",
];

const featureMarkers = [
  { letter: "A", x: 608, y: 86 },
  { letter: "B", x: 738, y: 338 },
  { letter: "C", x: 672, y: 220 },
  { letter: "D", x: 704, y: 440 },
  { letter: "E", x: 584, y: 246 },
  { letter: "F", x: 608, y: 318 },
];

const silhouette = aircraft.find((entry) => entry.slug === "j-20").silhouette;

const navigationIds = [
  "overview",
  "airframe",
  "systems",
  "specifications",
  "history",
  "variants",
  "compare",
  "reference",
];

const sectionIds = ["top", "profile", ...navigationIds];

function Aircraft({
  compact = false,
  features = [],
  activeFeature,
  onSelectFeature,
  label,
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
        aria-label={label}
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

function J20({ introDelay = 0.1, translation }) {
  const [activeFeature, setActiveFeature] = useState("A");
  const [selectedChapter, setSelectedChapter] = useState(0);
  const activeSection = useActiveSection(sectionIds);
  const href = useHref();

  const content = useMemo(
    () =>
      localise(
        {
          page: pageText,
          specifications,
          milestones,
          variants,
          glossary,
          sources,
          sectionText,
        },
        translation,
      ),
    [translation],
  );
  const { page } = content;
  const text = content.sectionText;

  const navigationItems = navigationIds.map((id, index) => [
    id,
    page.navigation[index],
  ]);
  const airframeFeatures = featureMarkers.map((marker, index) => ({
    ...marker,
    ...page.airframe.features[index],
  }));

  const openGallery = () => {
    navigate(href("#/j-20/gallery"));
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
              <SectionLabel>{page.eyebrow}</SectionLabel>

              <h1 className="text-[clamp(4.5rem,13vw,11rem)] font-black leading-[.73] tracking-[-.08em]">
                J<span className="text-lime-300">-</span>20
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/55 md:text-base">
                {page.intro}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => goToSection("overview")}
                  className="group flex items-center gap-4 bg-lime-300 px-6 py-4 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
                >
                  {page.enterArchive}

                  <ChevronRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={openGallery}
                  className="flex items-center gap-4 border border-white/20 px-6 py-4 text-xs sm:text-[11px] uppercase tracking-[.2em] text-white/75 transition hover:border-lime-300 hover:text-lime-300"
                >
                  {page.viewPhotography}
                  <Camera size={15} />
                </button>
              </div>
            </motion.div>

            <div className="relative lg:-ml-20">
              <Aircraft label={page.silhouetteLabel} />

              <div className="absolute left-[12%] top-[18%] hidden whitespace-nowrap font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50 md:block">
                <span className="text-lime-300">●</span> {page.visualModel}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[1500px] items-end justify-between border-t border-white/10 pt-5">
            <div className="grid grid-cols-3 gap-8 font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50 md:gap-16">
              {page.heroStats.map((stat, index) => (
                <div key={stat.label}>
                  <b
                    className={`block text-xs ${
                      index === 2 ? "text-lime-300" : "text-white/80"
                    }`}
                  >
                    {stat.value}
                  </b>
                  {stat.label}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToSection("overview")}
              className="hidden items-center gap-3 text-xs sm:text-[11px] uppercase tracking-[.2em] text-white/60 transition hover:text-lime-300 md:flex"
            >
              {page.scroll}

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
                <SectionLabel>{page.overview.label}</SectionLabel>

                <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-7xl">
                  {page.overview.heading}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">
                {page.overview.intro}
              </p>
            </div>

            <div className="mt-20 grid border-y border-white/10 md:grid-cols-4">
              {page.chapters.map((chapter, index) => {
                const selected = selectedChapter === index;

                return (
                  <button
                    key={chapter.number}
                    type="button"
                    onClick={() => {
                      setSelectedChapter(index);
                      goToSection(chapterTargets[index]);
                    }}
                    className={`group min-h-52 border-b border-white/10 p-6 text-left transition duration-300 md:border-r ${
                      index < page.chapters.length - 4 ? "" : "md:border-b-0"
                    } ${
                      selected
                        ? "bg-lime-300 text-black"
                        : "hover:bg-white/[.035]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs sm:text-[11px] ${
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
                <SectionLabel>{page.airframe.label}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {page.airframe.heading}
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
                  {page.airframe.intro}
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
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border font-mono text-xs sm:text-[11px] transition ${
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
                <div className="absolute left-4 top-4 z-10 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                  {page.airframe.projection}
                </div>

                <Aircraft
                  compact
                  features={airframeFeatures}
                  activeFeature={activeFeature}
                  onSelectFeature={setActiveFeature}
                  label={page.silhouetteLabel}
                />

                <div className="grid grid-cols-3 border-t border-white/10 pt-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.15em] text-white/50">
                  <span>{page.airframe.axis}</span>
                  <span className="text-center">{page.airframe.select}</span>
                  <span className="text-right text-lime-300">
                    {page.airframe.feature} / {activeFeature}
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
                <SectionLabel>{page.systems.label}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {page.systems.heading}
                </h2>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs sm:text-[11px] uppercase tracking-[.2em] text-white/50">
                <Activity size={14} className="text-lime-300" />
                {page.systems.status}
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {page.systems.items.map((system, index) => {
                const Icon = systemIcons[index];

                return (
                  <article
                  key={system.id}
                  className="group bg-[#050708] p-7 transition-colors duration-150 ease-linear hover:bg-[#0b100d] md:p-10"
                >
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center border border-white/15 text-lime-300 transition group-hover:border-lime-300">
                        <Icon size={20} />
                      </div>

                      <span className="font-mono text-xs sm:text-[11px] text-white/50">
                        SYS / {system.id}
                      </span>
                    </div>

                    <div className="mt-14 font-mono text-xs sm:text-[10px] uppercase tracking-[.25em] text-lime-300">
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

                    <div className="mt-10 flex justify-between border-t border-white/10 pt-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                      <span>{system.metric}</span>
                      <span className="text-white/70">{system.value}</span>
                    </div>
                    </article>
                );
              })}
            </div>
          </div>
        </section>

        <Specifications
          specifications={content.specifications}
          heading={text.specHeading}
          intro={text.specIntro}
          notice={text.specNotice}
        />

        <Timeline
          slug="j-20"
          heading={text.historyHeading}
          intro={text.historyIntro}
          items={content.milestones}
        />

        <Variants
          heading={text.variantsHeading}
          intro={text.variantsIntro}
          items={content.variants}
          silhouette={silhouette}
        />

        <Comparison
          current="j-20"
          intro={text.compareIntro}
        />

        <Reference
          entries={content.glossary}
          links={content.sources}
          note={text.referenceNote}
        />

        <section
          id="profile"
          className="relative scroll-mt-20 border-y border-white/10 bg-[#090c0d] px-5 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <SectionLabel>{page.profile.label}</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                {page.profile.heading}
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/50">
                {page.profile.intro}
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
                {page.profile.readouts.map(({ label, value }) => (
                  <div key={value} className="bg-[#090c0d] p-5">
                    <div className="font-mono text-xs sm:text-[10px] tracking-[.2em] text-white/50">
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
                className="group mt-10 flex items-center gap-4 border border-white/20 px-6 py-4 text-xs sm:text-[11px] uppercase tracking-[.2em] transition hover:border-lime-300 hover:text-lime-300"
              >
                {page.profile.archive}

                <ChevronRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href={href("#/f-22")}
                className="group mt-4 flex w-fit items-center gap-4 font-mono text-xs sm:text-[11px] uppercase tracking-[.2em] text-white/60 transition hover:text-lime-300"
              >
                {page.profile.next}

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