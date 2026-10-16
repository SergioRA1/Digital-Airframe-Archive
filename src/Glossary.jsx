import { useEffect, useMemo, useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";

import { aircraft } from "./aircraft.js";
import { counts } from "./counts.js";
import { glossary as f22Glossary } from "./data/f22.js";
import { glossary as j20Glossary } from "./data/j20.js";
import { dataPages } from "./dataPages.js";
import { letterOf, mergeGlossaries } from "./glossary.js";
import { localise, useHref, useLanguage, useText } from "./i18n.js";
import {
  GridBackdrop,
  PageFooter,
  PageHeader,
  ScrollProgress,
  SectionLabel,
  useActiveSection,
} from "./Layout.jsx";

const text = {
  en: {
    navigationItems: [
      ["top", "Search"],
      ["terms", "Terms"],
    ],
    eyebrow: "Reference",
    heroTop: "THE",
    heroBottom: "GLOSSARY",
    intro: `Every technical term defined in the ${counts.en.all} aircraft files, in one place. Search for a term, or jump to a letter.`,
    search: "Search the glossary",
    placeholder: "Search terms and definitions",
    shown: (total) => `of ${total} terms shown`,
    letters: "Jump to a letter",
    none: "No terms match your search.",
    termsLabel: "01 / Terms",
    termsHeading: "A to Z.",
    definedIn: "Defined in",
    footerLabel: "AIRFRAME / GLOSSARY",
  },
  es: {
    navigationItems: [
      ["top", "Buscar"],
      ["terms", "Términos"],
    ],
    eyebrow: "Referencia",
    heroTop: "EL",
    heroBottom: "GLOSARIO",
    intro: `Todos los términos técnicos definidos en las ${counts.es.all} fichas de aeronaves, en un solo lugar. Busca un término o salta a una letra.`,
    search: "Buscar en el glosario",
    placeholder: "Buscar términos y definiciones",
    shown: (total) => `de ${total} términos`,
    letters: "Saltar a una letra",
    none: "Ningún término coincide con la búsqueda.",
    termsLabel: "01 / Términos",
    termsHeading: "De la A a la Z.",
    definedIn: "Definido en",
    footerLabel: "AIRFRAME / GLOSARIO",
  },
};

const sectionIds = text.en.navigationItems.map(([sectionId]) => sectionId);

// Each aircraft's English glossary, in hangar order.
const englishGlossaries = aircraft
  .filter((entry) => entry.available)
  .map((entry) => ({
    slug: entry.slug,
    english:
      entry.slug === "j-20"
        ? j20Glossary
        : entry.slug === "f-22"
          ? f22Glossary
          : dataPages.find((page) => page.slug === entry.slug).glossary,
  }));

const designationOf = (slug) =>
  aircraft.find((entry) => entry.slug === slug).designation;

// Accents and case don't matter when searching ("celula" finds "Célula").
const plain = (value) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

function Glossary({ introDelay = 0.1, translation }) {
  const t = useText(text);
  const href = useHref();
  const language = useLanguage();
  const activeSection = useActiveSection(sectionIds);
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(null);

  const terms = useMemo(
    () =>
      mergeGlossaries(
        englishGlossaries.map(({ slug, english }) => ({
          slug,
          english,
          shown: translation
            ? localise(english, translation.glossary?.[slug])
            : english,
        })),
        language,
      ),
    [translation, language],
  );

  const needle = plain(query.trim());
  const visible = needle
    ? terms.filter((entry) =>
        plain(`${entry.term} ${entry.definition}`).includes(needle),
      )
    : terms;
  const letters = [...new Set(terms.map((entry) => letterOf(entry.term)))];
  const groups = letters
    .map((letter) => ({
      letter,
      entries: visible.filter((entry) => letterOf(entry.term) === letter),
    }))
    .filter((group) => group.entries.length > 0);

  // A link such as glossary/#aesa, from an aircraft's reference section,
  // opens the page at that term.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const target = id && document.getElementById(id);

    if (target) {
      const entry = target.closest("[data-term]");

      setFocused(entry?.dataset.term ?? null);
      // Instant, not the page's smooth scrolling, which a later layout
      // change could interrupt. Again once the fonts have loaded, since they
      // can move the entry.
      const jump = () =>
        target.scrollIntoView({ block: "start", behavior: "instant" });

      jump();
      document.fonts?.ready.then(jump);
    }
  }, []);

  const goToLetter = (letter) => {
    setQuery("");
    window.requestAnimationFrame(() =>
      document
        .getElementById(`letter-${letter}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GridBackdrop />

      <ScrollProgress />

      <PageHeader
        badge="GL"
        items={t.navigationItems}
        activeSection={activeSection}
      />

      <main>
        <section
          id="top"
          className="relative scroll-mt-20 px-5 pb-16 pt-40 md:px-10"
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

            <label className="mt-10 flex max-w-xl items-center gap-3 border border-white/15 bg-white/3 px-4 py-3 focus-within:border-white/40">
              <Search size={15} className="text-white/50" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.placeholder}
                aria-label={t.search}
                className="w-full bg-transparent text-sm text-white outline-hidden focus-visible:outline-hidden placeholder:text-white/40"
              />
            </label>

            <div className="mt-6 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
              <span className="mr-3 text-lime-300">
                {String(visible.length).padStart(2, "0")}
              </span>
              {t.shown(terms.length)}
            </div>

            <nav aria-label={t.letters} className="mt-8 flex flex-wrap gap-2">
              {letters.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => goToLetter(letter)}
                  className="grid h-10 w-10 place-items-center border border-white/10 font-mono text-xs uppercase text-white/60 transition hover:border-lime-300/50 hover:text-lime-300"
                >
                  {letter}
                </button>
              ))}
            </nav>
          </m.div>
        </section>

        <section
          id="terms"
          className="relative scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12">
              <SectionLabel>{t.termsLabel}</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                {t.termsHeading}
              </h2>
            </div>

            {groups.length === 0 && (
              <p className="text-sm text-white/60">{t.none}</p>
            )}

            {groups.map((group) => (
              <div
                key={group.letter}
                id={`letter-${group.letter}`}
                className="grid scroll-mt-28 gap-6 border-t border-white/10 py-10 md:grid-cols-[120px_1fr]"
              >
                <div className="font-mono text-3xl text-lime-300" aria-hidden="true">
                  {group.letter}
                </div>

                <dl className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-2">
                  {group.entries.map((entry) => (
                    <div
                      key={entry.id}
                      id={entry.id}
                      data-term={entry.id}
                      className={`scroll-mt-28 p-6 transition-colors md:p-8 ${
                        focused === entry.id ? "bg-[#10160f]" : "bg-[#080b0c]"
                      }`}
                    >
                      <dt
                        className={`text-lg font-semibold ${
                          focused === entry.id ? "text-lime-300" : ""
                        }`}
                      >
                        {/* Other wordings of the same term, so links from
                            every aircraft page land here. */}
                        {entry.aliases.map((alias) => (
                          <span key={alias} id={alias} className="block scroll-mt-28" />
                        ))}
                        {entry.term}
                      </dt>

                      <dd className="mt-3 text-sm leading-7 text-white/60">
                        {entry.definition}
                      </dd>

                      <dd className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs sm:text-[10px] uppercase tracking-[.18em] text-white/50">
                        <span>{t.definedIn}</span>
                        {entry.aircraft.map((slug) => (
                          <a
                            key={slug}
                            href={href(`#/${slug}`)}
                            className="inline-flex items-center gap-1 text-white/70 transition hover:text-lime-300"
                          >
                            {designationOf(slug)}
                            <ArrowUpRight size={11} aria-hidden="true" />
                          </a>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </section>
      </main>

      <PageFooter label={t.footerLabel} />
    </div>
  );
}

export default Glossary;
