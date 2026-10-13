import { ArrowUpRight } from "lucide-react";

import { SectionLabel } from "./Layout.jsx";

// The cross-aircraft table, kept out of Sections.jsx so the hangar page can
// show it without loading every aircraft page's shared sections.
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
