import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "./Layout.jsx";
import { peers } from "./data/peers.js";

// The cross-aircraft table, kept out of Sections.jsx so the hangar page can
// show it without loading every aircraft page's shared sections.
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
              <tr className="border-b border-white/10 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
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

        <p className="mt-5 font-mono text-xs sm:text-[10px] uppercase tracking-[.2em] text-white/50">
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
