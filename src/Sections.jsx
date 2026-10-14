import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { ExternalLink, Minus, Plus } from "lucide-react";

import {
  localise,
  useDate,
  useLanguage,
  useTerm,
  useText,
} from "./i18n.js";
import { SectionLabel } from "./Layout.jsx";
import { usage as spanishUsage } from "./locales/es/usage.js";
import { usage } from "./usage.js";
import { srcSet } from "./imageSizes.js";

const text = {
  en: {
    capabilities: "Capabilities and use",
    showLess: "Show less",
    readMore: "Read more",
    history: "History",
    variants: "Variants",
    noPhoto: "No freely licensed photograph is available",
    photo: "Photo",
    crew: "Crew",
    reference: "Reference",
    termsHeading: "Terms, decoded.",
    furtherReading: "Further reading",
    specifications: "Specifications",
    watermark: "DATA",
    confirmedOrReported: "Confirmed or reported",
    publicEstimate: "Public estimate",
    filterGroups: "Filter specifications by group",
    units: "Measurement units",
    metric: "Metric",
    imperial: "Imperial",
    dataConfidence: "Data confidence",
    dataNotice: "Data notice",
  },
  es: {
    capabilities: "Capacidades y uso",
    showLess: "Mostrar menos",
    readMore: "Leer más",
    history: "Historia",
    variants: "Variantes",
    noPhoto: "No hay ninguna fotografía con licencia libre",
    photo: "Foto",
    crew: "Tripulación",
    reference: "Referencia",
    termsHeading: "Términos, explicados.",
    furtherReading: "Para saber más",
    specifications: "Especificaciones",
    watermark: "DATOS",
    confirmedOrReported: "Confirmado o según informes",
    publicEstimate: "Estimación pública",
    filterGroups: "Filtrar especificaciones por grupo",
    units: "Unidades de medida",
    metric: "Métrico",
    imperial: "Imperial",
    dataConfidence: "Fiabilidad del dato",
    dataNotice: "Aviso sobre los datos",
  },
};

export function ConfidenceTag({ confidence }) {
  const translate = useTerm();
  const isConfirmed = confidence === "CONFIRMED";

  return (
    <span
      className={`flex items-center gap-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] ${
        isConfirmed ? "text-lime-300" : "text-amber-300"
      }`}
    >
      <span
        className={`h-1 w-1 rounded-full ${
          isConfirmed ? "bg-lime-300" : "bg-amber-300"
        }`}
      />

      {translate(confidence)}
    </span>
  );
}

function UsagePanel({ info }) {
  const t = useText(text);
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10 border border-white/10 bg-white/[.02] p-6">
      <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.22em] text-lime-300">
        {t.capabilities}
      </div>

      <p className="mt-4 text-sm leading-7 text-white/70">{info.summary}</p>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
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
                  <h3 className="font-mono text-xs sm:text-[10px] uppercase tracking-[.22em] text-white/50">
                    {section.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="usage-details"
        className="mt-6 flex items-center gap-3 text-xs sm:text-[11px] font-bold uppercase tracking-[.2em] text-white/75 transition hover:text-lime-300"
      >
        {open ? <Minus size={14} /> : <Plus size={14} />}
        {open ? t.showLess : t.readMore}
      </button>
    </div>
  );
}

export function Timeline({
  slug,
  number = "05",
  heading,
  intro,
  items,
}) {
  const t = useText(text);
  const formatDate = useDate();
  const language = useLanguage();
  const info =
    language === "es"
      ? localise(usage[slug], spanishUsage[slug])
      : usage[slug];

  return (
    <section
      id="history"
      className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:self-start">
            <SectionLabel>
              {number} / {t.history}
            </SectionLabel>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              {intro}
            </p>

            {info && <UsagePanel key={slug} info={info} />}
          </div>

          <ol className="relative border-l border-white/10">
            {items.map((milestone) => (
              <m.li
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
                  <span className="font-mono text-xs sm:text-[11px] uppercase tracking-[.24em] text-lime-300">
                    {formatDate(milestone.date)}
                  </span>

                  <ConfidenceTag confidence={milestone.confidence} />
                </div>

                <h3 className="mt-3 text-xl font-semibold md:text-2xl">
                  {milestone.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                  {milestone.detail}
                </p>
              </m.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Variants({
  number = "06",
  heading,
  intro,
  items,
  silhouette,
}) {
  const t = useText(text);
  const translate = useTerm();

  return (
    <section
      id="variants"
      className="relative scroll-mt-20 border-t border-white/10 bg-[#0b0f10] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <SectionLabel>
              {number} / {t.variants}
            </SectionLabel>

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
                      srcSet={srcSet(variant.photo.src)}
                      sizes="(min-width: 1024px) 33vw, 100vw"
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

                <figcaption className="min-h-[6.25rem] border-b border-white/10 px-7 py-3 font-mono text-xs sm:text-[10px] uppercase leading-5 tracking-[.14em] text-white/50 md:px-10">
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
                        {t.photo}: {variant.photo.photographer} ·{" "}
                        {translate(variant.photo.licence)}
                      </a>
                    </>
                  ) : (
                    <span className="block">
                      {variant.caption || t.noPhoto}
                    </span>
                  )}
                </figcaption>
              </figure>

              <div className="flex flex-1 flex-col p-7 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl font-black tracking-[-.06em] transition-colors group-hover:text-lime-300 md:text-5xl">
                    {variant.code}
                  </div>

                  <span className="shrink-0 border border-white/15 px-3 py-1.5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/60">
                    {variant.status}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 font-mono text-xs sm:text-[11px] uppercase tracking-[.22em]">
                  <span className="text-lime-300">{variant.name}</span>

                  <span className="shrink-0 text-white/50">
                    {t.crew} / {variant.seats}
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

export function Reference({
  number = "08",
  entries,
  links,
  note,
}) {
  const t = useText(text);
  const [openTerm, setOpenTerm] = useState(entries[0].term);

  return (
    <section
      id="reference"
      className="relative scroll-mt-20 border-t border-white/10 bg-[#080b0c] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <SectionLabel>
            {number} / {t.reference}
          </SectionLabel>

          <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
            {t.termsHeading}
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
                      <m.div
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
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:pt-24">
          <div className="border border-white/10 bg-black/20 p-7 md:p-10">
            <div className="font-mono text-xs sm:text-[11px] uppercase tracking-[.25em] text-lime-300">
              {t.furtherReading}
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
  heading,
  intro,
  notice,
}) {
  const t = useText(text);
  const translate = useTerm();
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
        data-watermark={t.watermark}
        className="pointer-events-none absolute -right-8 top-0 text-[24vw] font-black leading-none tracking-[-.09em] text-white/[.018] before:content-[attr(data-watermark)]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <SectionLabel>
              {number} / {t.specifications}
            </SectionLabel>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-.045em] md:text-6xl">
              {heading}
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-white/50">
              {intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_#c7ff37]" />
                {t.confirmedOrReported}
              </span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]" />
                {t.publicEstimate}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={t.filterGroups}
          >
            {specificationGroups.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setSpecificationGroup(group)}
                aria-pressed={specificationGroup === group}
                className={`border px-4 py-2.5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] transition ${
                  specificationGroup === group
                    ? "border-lime-300 bg-lime-300 text-black"
                    : "border-white/15 text-white/60 hover:border-lime-300/60 hover:text-lime-300"
                }`}
              >
                {translate(group)}
              </button>
            ))}
          </div>

          <div
            className="flex w-fit border border-white/15"
            role="group"
            aria-label={t.units}
          >
            {[
              ["metric", t.metric],
              ["imperial", t.imperial],
            ].map(([unitSystem, label]) => (
              <button
                key={unitSystem}
                type="button"
                onClick={() => setUnits(unitSystem)}
                aria-pressed={units === unitSystem}
                className={`px-4 py-2.5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] transition ${
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
              <m.article
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
                    <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.28em] text-white/50">
                      {translate(specification.group)}
                    </div>

                    <div className="mt-3 font-mono text-xs sm:text-[11px] uppercase tracking-[.24em] text-lime-300">
                      {specification.label}
                    </div>
                  </div>

                  <div className="font-mono text-xs sm:text-[10px] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-12">
                  <div className="break-words text-[clamp(1.65rem,2.8vw,2.8rem)] font-semibold leading-[.95] tracking-[-.055em] text-white transition-colors group-hover:text-lime-300">
                    {measurement.value}
                  </div>

                  <div className="mt-4 font-mono text-xs sm:text-[10px] uppercase tracking-[.24em] text-white/50">
                    {measurement.unit}
                  </div>
                </div>

                <p className="mt-7 pb-6 text-xs leading-5 text-white/50">
                  {specification.detail}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                    {t.dataConfidence}
                  </span>

                  <span
                    className={`flex items-center gap-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] ${
                      isEstimate ? "text-amber-300" : "text-lime-300"
                    }`}
                  >
                    <span
                      className={`h-1 w-1 rounded-full ${
                        isEstimate ? "bg-amber-300" : "bg-lime-300"
                      }`}
                    />

                    {translate(specification.confidence)}
                  </span>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${
                    isEstimate ? "bg-amber-300" : "bg-lime-300"
                  }`}
                />
              </m.article>
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
          <div className="font-mono text-xs sm:text-[10px] uppercase tracking-[.25em] text-amber-300">
            {t.dataNotice}
          </div>

          <p className="text-xs leading-6 text-white/60">{notice}</p>
        </div>
      </div>
    </section>
  );
}
