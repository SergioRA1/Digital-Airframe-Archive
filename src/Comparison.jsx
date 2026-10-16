import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "./Layout.jsx";
import { counts } from "./counts.js";
import { peers } from "./data/peers.js";
import { peers as spanishPeers } from "./locales/es/peers.js";
import {
  localise,
  useHref,
  useLanguage,
  useTerm,
  useText,
} from "./i18n.js";

const text = {
  en: {
    label: "Comparison",
    heading: "Among its peers.",
    intro:
      `Published dimensions and dates for ${counts.en.all} fighters from the fourth and fifth generations. Select an underlined aircraft to open its file.`,
    caption: `Comparison of ${counts.en.all} fighters, from most to least capable`,
    columns: [
      "Aircraft",
      "Gen.",
      "Origin",
      "Length",
      "Wingspan",
      "Engines",
      "First flight",
      "In service",
      "Layout",
    ],
    note: "Rows run from most to least capable, an editorial estimate · Rounded published figures · Service dates refer to first operational units · Generation labels are informal, and 4.5 marks upgraded fourth-generation designs · Underlined aircraft have their own page",
  },
  es: {
    label: "Comparación",
    heading: "Entre sus pares.",
    intro:
      `Dimensiones y fechas publicadas de ${counts.es.all} cazas de cuarta y quinta generación. Cada aeronave subrayada abre su ficha.`,
    caption: `Comparación de ${counts.es.all} cazas, del más al menos capaz`,
    columns: [
      "Aeronave",
      "Gen.",
      "Origen",
      "Longitud",
      "Envergadura",
      "Motores",
      "Primer vuelo",
      "En servicio",
      "Configuración",
    ],
    note: "Las filas van del más al menos capaz, una estimación editorial · Cifras publicadas redondeadas · Las fechas de servicio se refieren a las primeras unidades operativas · Las etiquetas de generación son informales, y 4.5 señala los diseños de cuarta generación modernizados · Las aeronaves subrayadas tienen página propia",
  },
};

// "A, B and C" in British English, "A, B y C" in Spanish.
const listFormat = (language) =>
  new Intl.ListFormat(language === "es" ? "es" : "en-GB", {
    type: "conjunction",
  });

// The cross-aircraft table, kept out of Sections.jsx so the hangar page can
// show it without loading every aircraft page's shared sections.
export function Comparison({
  number = "07",
  current,
  heading,
  intro,
}) {
  const t = useText(text);
  const language = useLanguage();
  const href = useHref();
  const translate = useTerm();
  const rows = language === "es" ? localise(peers, spanishPeers) : peers;

  return (
    <section
      id="compare"
      className="relative scroll-mt-20 border-t border-white/10 px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <SectionLabel>{number} / {t.label}</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-.045em] md:text-6xl">
              {heading ?? t.heading}
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/50">
            {intro ?? t.intro}
          </p>
        </div>

        <div className="overflow-x-auto border border-white/10 bg-[#050708]/80">
          <table className="w-full min-w-[980px] border-collapse text-left text-sm">
            <caption className="sr-only">
              {t.caption}: {listFormat(language).format(rows.map((row) => row.name))}
            </caption>

            <thead>
              <tr className="border-b border-white/10 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
                {t.columns.map((column) => (
                  <th key={column} scope="col" className="p-5 font-normal">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((peer) => {
                const highlight = peer.slug === current;

                return (
                  <tr
                    key={peer.name}
                    className={`border-b border-white/10 transition-colors last:border-b-0 ${
                      highlight
                        ? "bg-lime-300/[.07] text-white"
                        : "text-white/65 hover:bg-white/3"
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
                          href={href(`#/${peer.slug}`)}
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
                  <td className="p-5">{translate(peer.origin)}</td>
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

        <p className="mt-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
          {t.note}
        </p>
      </div>
    </section>
  );
}
