import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

import { aircraft } from "./aircraft.js";
import { aircraft as spanishAircraft } from "./locales/es/aircraft.js";
import {
  localise,
  useHref,
  useLanguage,
  useTerm,
  useText,
} from "./i18n.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  SectionLabel,
  goToSection,
  useActiveSection,
} from "./Layout.jsx";
import { photos } from "./photos.js";
import { Comparison } from "./Comparison.jsx";
import { counts } from "./counts.js";

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

const sectionIds = ["top", "aircraft", "archive", "compare", "analysis"];

const toolLinks = ["#/compare", "#/timeline"];

const text = {
  en: {
    navigation: [
      ["aircraft", "Aircraft"],
      ["archive", "Archive"],
      ["compare", "Compare"],
      ["analysis", "Analysis"],
    ],
    tools: [
      {
        kicker: "Interactive comparison",
        title: "Head to head",
        text: `Pick up to three aircraft and compare speed, weight, range and size on animated charts, with a sortable table of all ${counts.en.all}.`,
      },
      {
        kicker: "Combined timeline",
        title: "Fifty years of fighters",
        text: "Every milestone from every file on one axis, filterable by origin and by how well each entry is sourced.",
      },
    ],
    groups: [
      {
        title: "Fifth generation",
        note: "Low-observable designs that carry weapons internally and fuse sensor data.",
      },
      {
        title: "Fourth generation and 4.5",
        note: "Agile, heavily upgraded fighters that remain the backbone of many air forces.",
      },
    ],
    all: "All",
    file: "File",
    open: "Open",
    silhouette: (designation) => `Stylised ${designation} silhouette`,
    firstFlight: "First flight",
    inService: "In service",
    openFile: "Open file",
    files: "files",
    label: "Digital airframe archive",
    heroTop: "THE",
    heroBottom: "HANGAR",
    intro:
      "An independent digital exhibition of modern combat aircraft. Each file collects the design, public history, specifications and photography of one airframe.",
    browse: "Browse aircraft",
    aircraftFiles: "Aircraft files",
    origins: "Origins",
    photography: "Attributed photography",
    aircraftLabel: "01 / Aircraft",
    aircraftHeading: "Choose an airframe.",
    aircraftIntro:
      "Open a file to explore the aircraft in detail, or scroll on for a side-by-side comparison.",
    filter: "Filter aircraft by origin",
    archiveLabel: "02 / Visual archive",
    archiveHeading: "Every photograph, in sequence.",
    archiveIntro:
      "Watch the whole collection as one continuous reel, from the J-20 to the F-15EX, or open a single aircraft file for its own gallery.",
    playArchive: "Play the full archive",
    preview: (label) => `${label} preview`,
    compareHeading: "Side by side.",
    analysisLabel: "04 / Analysis",
    analysisHeading: "Explore the data.",
  },
  es: {
    navigation: [
      ["aircraft", "Aeronaves"],
      ["archive", "Archivo"],
      ["compare", "Comparar"],
      ["analysis", "Análisis"],
    ],
    tools: [
      {
        kicker: "Comparación interactiva",
        title: "Cara a cara",
        text: `Se pueden elegir hasta tres aeronaves y comparar velocidad, peso, alcance y tamaño en gráficos animados, con una tabla ordenable de las ${counts.es.all}.`,
      },
      {
        kicker: "Cronología combinada",
        title: "Cincuenta años de cazas",
        text: "Todos los hitos de todas las fichas en un único eje, con filtros por origen y por la calidad de las fuentes de cada entrada.",
      },
    ],
    groups: [
      {
        title: "Quinta generación",
        note: "Diseños de baja observabilidad que llevan el armamento en el interior y fusionan los datos de los sensores.",
      },
      {
        title: "Cuarta generación y 4.5",
        note: "Cazas ágiles y muy modernizados que siguen siendo la columna vertebral de muchas fuerzas aéreas.",
      },
    ],
    all: "Todo",
    file: "Ficha",
    open: "Abrir",
    silhouette: (designation) => `Silueta estilizada del ${designation}`,
    firstFlight: "Primer vuelo",
    inService: "En servicio",
    openFile: "Abrir ficha",
    files: "fichas",
    label: "Archivo digital de células",
    heroTop: "EL",
    heroBottom: "HANGAR",
    intro:
      "Una exposición digital independiente de aviones de combate modernos. Cada ficha reúne el diseño, la historia pública, las especificaciones y la fotografía de una célula.",
    browse: "Ver aeronaves",
    aircraftFiles: "Fichas de aeronaves",
    origins: "Orígenes",
    photography: "Fotografía con atribución",
    aircraftLabel: "01 / Aeronaves",
    aircraftHeading: "Elige una célula.",
    aircraftIntro:
      "Abre una ficha para explorar la aeronave en detalle, o sigue bajando para ver una comparación lado a lado.",
    filter: "Filtrar aeronaves por origen",
    archiveLabel: "02 / Archivo visual",
    archiveHeading: "Todas las fotografías, en secuencia.",
    archiveIntro:
      "Se puede ver toda la colección como un único carrete continuo, del J-20 al F-15EX, o abrir la ficha de una aeronave para ver su propia galería.",
    playArchive: "Reproducir todo el archivo",
    preview: (label) => `Vista previa del ${label}`,
    compareHeading: "Lado a lado.",
    analysisLabel: "04 / Análisis",
    analysisHeading: "Explorar los datos.",
  },
};

const availableAircraft = aircraft.filter((entry) => entry.available);
const originCount = new Set(availableAircraft.map((entry) => entry.origin))
  .size;

const origins = ["All", ...new Set(availableAircraft.map((e) => e.origin))];

const groupMatches = [
  (entry) => entry.generation === "5",
  (entry) => entry.generation !== "5",
];

function AircraftCard({ entry, index, fileNumber }) {
  const t = useText(text);
  const href = useHref();
  const translate = useTerm();

  return (
    <motion.a
      href={href(`#/${entry.slug}`)}
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
      <div className="flex items-center justify-between font-mono text-xs sm:text-[10px] uppercase tracking-[.22em]">
        <span className="text-white/50">
          {t.file} / {String(fileNumber).padStart(2, "0")} · {translate(entry.origin)}
        </span>

        <span className="flex items-center gap-2 text-lime-300">
          <span className="h-1 w-1 rounded-full bg-lime-300" />
          {t.open}
        </span>
      </div>

      <svg
        viewBox="100 0 1000 470"
        className="mx-auto mt-8 w-full max-w-md transition-transform duration-700 group-hover:-translate-y-2"
        role="img"
        aria-label={t.silhouette(entry.designation)}
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

      <div className="mt-3 font-mono text-xs sm:text-[11px] uppercase tracking-[.24em] text-lime-300">
        {entry.manufacturer} · {entry.name}
      </div>

      <p className="mb-10 mt-6 max-w-md text-sm leading-7 text-white/60">
        {entry.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-5 border-t border-white/10 pt-6">
        <div className="flex gap-8 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          <div>
            <b className="block text-sm text-white/85">
              {entry.firstFlight}
            </b>
            {t.firstFlight}
          </div>

          <div>
            <b className="block text-sm text-white/85">{entry.service}</b>
            {t.inService}
          </div>
        </div>

        <span className="flex items-center gap-3 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition group-hover:text-lime-300">
          {t.openFile}
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
  const t = useText(text);
  const language = useLanguage();
  const href = useHref();
  const translate = useTerm();
  const activeSection = useActiveSection(sectionIds);
  const [origin, setOrigin] = useState("All");

  const shown = useMemo(
    () =>
      (language === "es" ? localise(aircraft, spanishAircraft) : aircraft)
        .filter((entry) => entry.available),
    [language],
  );

  const groups = t.groups
    .map((group, groupIndex) => ({
      ...group,
      items: shown.filter(
        (entry) =>
          groupMatches[groupIndex](entry) &&
          (origin === "All" || entry.origin === origin),
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="AF"
        items={t.navigation}
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
            <SectionLabel>{t.label}</SectionLabel>

            <h1 className="text-[clamp(3.5rem,11vw,10rem)] font-black leading-[.8] tracking-[-.075em]">
              {t.heroTop}
              <span className="block text-white/30">{t.heroBottom}</span>
            </h1>

            <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
                {t.intro}
              </p>

              <button
                type="button"
                onClick={() => goToSection("aircraft")}
                className="group flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
              >
                {t.browse}

                <ChevronRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              <div>
                <span className="mr-3 text-lime-300">
                  {String(availableAircraft.length).padStart(2, "0")}
                </span>
                {t.aircraftFiles}
              </div>

              <div>
                <span className="mr-3 text-lime-300">
                  {String(originCount).padStart(2, "0")}
                </span>
                {t.origins}
              </div>

              <div>
                <span className="mr-3 text-lime-300">CC</span>
                {t.photography}
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
                <SectionLabel>{t.aircraftLabel}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.aircraftHeading}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-white/50">
                {t.aircraftIntro}
              </p>
            </div>

            <div
              className="mb-10 flex flex-wrap gap-2"
              role="group"
              aria-label={t.filter}
            >
              {origins.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setOrigin(name)}
                  aria-pressed={origin === name}
                  className={`border px-4 py-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] transition ${
                    origin === name
                      ? "border-lime-300 bg-lime-300 text-black"
                      : "border-white/15 text-white/60 hover:border-lime-300 hover:text-lime-300"
                  }`}
                >
                  {name === "All" ? t.all : translate(name)}
                </button>
              ))}
            </div>

            {groups.map((group, groupIndex) => (
              <div key={`${origin}-${group.title}`} className={groupIndex > 0 ? "mt-16" : ""}>
                <div className="mb-6 flex flex-col justify-between gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end">
                  <h3 className="text-2xl font-semibold tracking-[-.03em]">
                    {group.title}
                  </h3>

                  <p className="font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50">
                    {group.items.length} {t.files} · {group.note}
                  </p>
                </div>

                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2 xl:grid-cols-4">
                  {group.items.map((entry, index) => (
                    <AircraftCard
                      key={entry.slug}
                      entry={entry}
                      index={index}
                      fileNumber={shown.indexOf(entry) + 1}
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
                <SectionLabel>{t.archiveLabel}</SectionLabel>

                <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  {t.archiveHeading}
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-sm leading-7 text-white/50">
                  {t.archiveIntro}
                </p>

                <a
                  href={href("#/archive")}
                  className="group mt-8 flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-black transition hover:bg-white"
                >
                  {t.playArchive}

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
                  href={href("#/archive")}
                  className="group relative block aspect-[4/3] overflow-hidden bg-[#080b0c]"
                >
                  <img
                    src={photos[key].src}
                    alt={t.preview(label)}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <span className="absolute bottom-3 left-3 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Comparison
          number="03"
          heading={t.compareHeading}
        />

        <section
          id="analysis"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12">
              <SectionLabel>{t.analysisLabel}</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                {t.analysisHeading}
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {t.tools.map((tool, index) => (
                <motion.a
                  key={toolLinks[index]}
                  href={href(toolLinks[index])}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group relative flex flex-col bg-[#080b0c] p-7 transition-colors hover:bg-[#0d1210] md:p-10"
                >
                  <span className="font-mono text-xs sm:text-[10px] uppercase tracking-[.22em] text-lime-300">
                    {tool.kicker}
                  </span>

                  <span className="mt-6 text-4xl font-black tracking-[-.06em] transition-colors group-hover:text-lime-300 md:text-5xl">
                    {tool.title}
                  </span>

                  <p className="mb-10 mt-5 max-w-md text-sm leading-7 text-white/60">
                    {tool.text}
                  </p>

                  <span className="mt-auto flex items-center gap-3 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition group-hover:text-lime-300">
                    {t.open}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-500 group-hover:w-full" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <PageFooter label="AIRFRAME / ARCHIVE" />
    </div>
  );
}

export default Home;
