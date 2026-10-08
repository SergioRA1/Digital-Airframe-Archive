import { motion } from "framer-motion";
import { ArrowRight, Camera, ChevronDown, ChevronRight } from "lucide-react";

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

function HeroAircraft({ slug, silhouette, detail }) {
  const gradientId = `${slug}-body`;
  const edgeId = `${slug}-edge`;
  const glowId = `${slug}-glow`;

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
        aria-label={`Stylized ${slug.toUpperCase()} silhouette seen from above`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#41494a" />
            <stop offset=".42" stopColor="#171d1e" />
            <stop offset=".8" stopColor="#2b3333" />
            <stop offset="1" stopColor="#0c1011" />
          </linearGradient>

          <linearGradient id={edgeId} x1="0" x2="1">
            <stop stopColor="#c7ff37" stopOpacity="0" />
            <stop offset=".5" stopColor="#c7ff37" stopOpacity=".9" />
            <stop offset="1" stopColor="#c7ff37" stopOpacity="0" />
          </linearGradient>

          <filter id={glowId}>
            <feGaussianBlur stdDeviation="5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={silhouette}
          fill={`url(#${gradientId})`}
          stroke="#5d6868"
          strokeWidth="2"
        />

        <path
          d={detail.spine}
          fill="none"
          stroke="#778181"
          strokeOpacity=".34"
          strokeWidth="2"
        />

        <path
          d={detail.canopy}
          fill="#789398"
          fillOpacity=".36"
          stroke="#8b9796"
          strokeOpacity=".65"
        />

        <path
          d={detail.exhaust}
          fill="none"
          stroke={`url(#${edgeId})`}
          strokeWidth="3"
          filter={`url(#${glowId})`}
        />
      </svg>
    </motion.div>
  );
}

function AircraftPage({ page, introDelay = 0.1 }) {
  const activeSection = useActiveSection(sectionIds);
  const galleryHref = `#/${page.slug}/gallery`;

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge={page.badge}
        items={navigationItems}
        activeSection={activeSection}
        galleryHref={galleryHref}
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
              <SectionLabel>{page.eyebrow}</SectionLabel>

              <h1
                className={`font-black leading-[.73] tracking-[-.08em] ${
                  page.title.length > 1
                    ? "text-[clamp(4.5rem,13vw,11rem)]"
                    : "text-[clamp(3.5rem,8vw,7rem)]"
                }`}
              >
                {page.title[0]}

                {page.title.length > 1 && (
                  <>
                    <span className="text-lime-300">-</span>
                    {page.title[1]}
                  </>
                )}
              </h1>

              <p
                className={`max-w-md text-sm leading-7 text-white/55 md:text-base ${
                  page.title.length > 1 ? "mt-7" : "mt-10"
                }`}
              >
                {page.tagline}
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
                  href={galleryHref}
                  className="flex items-center gap-4 border border-white/20 px-6 py-4 text-[11px] uppercase tracking-[.2em] text-white/75 transition hover:border-lime-300 hover:text-lime-300"
                >
                  View photography
                  <Camera size={15} />
                </a>
              </div>
            </motion.div>

            <div className="relative">
              <HeroAircraft
                slug={page.slug}
                silhouette={page.silhouette}
                detail={page.detail}
              />

              <div className="absolute right-[6%] top-[8%] hidden font-mono text-[10px] uppercase tracking-[.2em] text-white/50 md:block">
                <span className="text-lime-300">●</span> Visual model /{" "}
                {page.model}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[1500px] items-end justify-between border-t border-white/10 pt-5">
            <div className="grid grid-cols-3 gap-8 font-mono text-[10px] uppercase tracking-[.18em] text-white/50 md:gap-16">
              {page.heroStats.map(([value, label], index) => (
                <div key={label}>
                  <b
                    className={`block text-xs ${
                      index === 2 ? "text-lime-300" : "text-white/80"
                    }`}
                  >
                    {value}
                  </b>
                  {label}
                </div>
              ))}
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
                  {page.designHeading}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                {page.designIntro}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {page.designFeatures.map((feature) => {
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
          specifications={page.specifications}
          number="02"
          heading={page.specHeading}
          intro={page.specIntro}
          notice={page.specNotice}
        />

        <Timeline
          slug={page.slug}
          number="03"
          heading={page.historyHeading}
          intro={page.historyIntro}
          items={page.milestones}
        />

        <Variants
          number="04"
          heading={page.variantsHeading}
          intro={page.variantsIntro}
          items={page.variants}
          silhouette={page.silhouette}
        />

        <Comparison
          number="05"
          current={page.slug}
          intro={page.compareIntro}
        />

        <Reference
          number="06"
          entries={page.glossary}
          links={page.sources}
          note={page.referenceNote}
        />

        <section
          id="archive"
          className="relative scroll-mt-20 border-t border-white/10 bg-[#090c0d] px-5 py-28 md:px-10 md:py-32"
        >
          <div className="mx-auto grid max-w-[1500px] gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            <a
              href={galleryHref}
              className="group flex items-center justify-between gap-6 bg-[#090c0d] p-8 transition-colors hover:bg-[#0d1210] md:p-12"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                  Photographic archive
                </span>

                <span className="mt-4 block text-3xl font-semibold tracking-[-.04em] transition group-hover:text-lime-300 md:text-4xl">
                  {page.title.join("-")} in frame
                </span>
              </span>

              <ArrowRight
                size={22}
                className="shrink-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-lime-300"
              />
            </a>

            <a
              href={page.next.href}
              className="group flex items-center justify-between gap-6 bg-[#090c0d] p-8 transition-colors hover:bg-[#0d1210] md:p-12"
            >
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                  Next aircraft
                </span>

                <span className="mt-4 block text-3xl font-semibold tracking-[-.04em] transition group-hover:text-lime-300 md:text-4xl">
                  {page.next.label}
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

      <PageFooter label={page.footerLabel} />
    </div>
  );
}

export default AircraftPage;
