import { Flame, Layers, Radar, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "su-57").silhouette;

const su57 = {
  slug: "su-57",
  badge: "57",
  footerLabel: "AIRFRAME / 57",
  eyebrow: "Sukhoi Su-57 · NATO “Felon”",
  title: ["Su", "57"],
  model: "004",
  tagline:
    "Russia's twin-engine fifth-generation fighter: a large, agile airframe with thrust-vectoring engines, moving leading-edge extensions and a sensor suite spread across the whole aircraft.",
  heroStats: [
    ["05", "Generation"],
    ["02", "Engines"],
    ["2010", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 34 L608 412 M692 212 L742 368 M524 212 L474 368",
    canopy: "M594 120 L608 66 L622 120 L618 172 L598 172 Z",
    exhaust: "M540 440 Q608 456 676 440",
  },
  next: {
    href: "#/f-16",
    label: "General Dynamics F-16",
  },

  designHeading: "Agility first.",
  designIntro:
    "The Su-57 grew from Sukhoi's Su-27 lineage, and its design puts manoeuvrability alongside low observability. Four features stand out.",
  designFeatures: [
    {
      id: "01",
      icon: Wind,
      kicker: "AERODYNAMICS",
      title: "Moving leading-edge extensions",
      description:
        "All-moving leading-edge root extensions, often called LEVCON, sit ahead of the wing and help control the aircraft at high angles of attack.",
      metric: "LEADING-EDGE ROOTS",
      value: "ALL-MOVING",
    },
    {
      id: "02",
      icon: Flame,
      kicker: "PROPULSION",
      title: "Thrust vectoring",
      description:
        "Two widely spaced engines with movable nozzles add control at low speed. Later aircraft are planned to receive a new engine, known as Izdeliye 30.",
      metric: "ENGINES",
      value: "2",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "AWARENESS",
      title: "Distributed sensors",
      description:
        "An N036 Byelka radar combines a main array, side-looking arrays and L-band arrays in the wing leading edges, alongside an infrared search and track system.",
      metric: "RADAR",
      value: "N036",
    },
    {
      id: "04",
      icon: Layers,
      kicker: "WEAPONS",
      title: "Internal bays",
      description:
        "Two main weapon bays under the fuselage and two smaller side bays for short-range missiles keep the aircraft's outline clean.",
      metric: "BAYS",
      value: "2 + 2",
    },
  ],

  specHeading: "The reported profile.",
  specIntro:
    "Russia publishes few figures for the Su-57. Dimensions come from manufacturer and reference sources, and performance figures are open-source estimates marked as such.",
  specNotice:
    "Little about this aircraft is officially published, and figures vary between sources. Treat estimates as approximate; they are included for educational context only.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "STEALTH FIGHTER",
      detail:
        "Described by its manufacturer as a fifth-generation multirole fighter for air superiority and strike.",
      confidence: "REPORTED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "SUKHOI",
      unit: "UNITED AIRCRAFT CORPORATION",
      detail:
        "Designed by Sukhoi and built at the Komsomolsk-on-Amur aircraft plant in Russia's Far East.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "FELON",
      unit: "NATO REPORTING NAME",
      detail:
        "The aircraft was known as PAK FA and T-50 during development. It received the designation Su-57 in 2017.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT",
      detail: "The production aircraft is single-seat.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × AL-41F1",
      unit: "THRUST-VECTORING TURBOFANS",
      detail:
        "Interim engines fitted to current aircraft. A more powerful engine, Izdeliye 30, has been reported in testing.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "WEAPON BAYS",
      value: "2 + 2",
      unit: "MAIN + SIDE BAYS",
      detail:
        "Two main bays plus two small side bays, in addition to external stations on the wings.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "N036 BYELKA",
      unit: "AESA RADAR",
      detail:
        "A multi-array radar with X-band arrays in the nose and cheeks and L-band arrays in the wing leading edges.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "20.1",
      unit: "METRES",
      imperial: {
        value: "65.9",
        unit: "FEET",
      },
      detail: "As commonly published in reference sources.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "14.1",
      unit: "METRES",
      imperial: {
        value: "46.3",
        unit: "FEET",
      },
      detail:
        "As commonly published in reference sources. The widest wing of any aircraft on this site.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "4.6",
      unit: "METRES",
      imperial: {
        value: "15.1",
        unit: "FEET",
      },
      detail: "As commonly published in reference sources.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 35,000",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 77,200",
        unit: "POUNDS",
      },
      detail: "An open-source estimate. No official figure is available.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2 CLASS",
      unit: "APPROXIMATE",
      detail:
        "A widely quoted estimate; higher figures also circulate, and none is officially confirmed.",
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
      detail: "An open-source estimate repeated across public references.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "RANGE",
      value: "≈ 3,500",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 2,170",
        unit: "MILES",
      },
      detail:
        "Estimated subsonic range on internal fuel. Values vary with the source and the assumptions used.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "29 JAN 2010",
      unit: "KOMSOMOLSK-ON-AMUR",
      detail: "First flight of the T-50 prototype, the design that became the Su-57.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2020",
      unit: "RUSSIAN AEROSPACE FORCES",
      detail:
        "The first production aircraft were reported delivered to the Russian Aerospace Forces around the end of 2020.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT IN SERVICE",
      value: "≈ 20–30",
      unit: "OPEN-SOURCE ESTIMATE",
      detail:
        "Russia has not published a fleet total. Independent estimates vary and change as deliveries continue.",
      confidence: "ESTIMATE",
    },
  ],

  historyHeading: "From programme to prototype.",
  historyIntro:
    "The programme in twelve dates, from the fighter competition that produced it to its first export deliveries. Entries based on press reporting are marked as reported.",
  milestones: [
    {
      date: "1980s–1990s",
      title: "A fighter for the future",
      detail:
        "The Soviet Union's MiG-led programme for a next-generation fighter loses momentum after the Soviet collapse, leaving the requirement to be restarted.",
      confidence: "REPORTED",
    },
    {
      date: "APR 2002",
      title: "Sukhoi chosen",
      detail:
        "Sukhoi's design is selected for the PAK FA, Russia's Prospective Airborne Complex of Frontline Aviation.",
      confidence: "CONFIRMED",
    },
    {
      date: "29 JAN 2010",
      title: "First flight",
      detail:
        "The T-50-1 prototype makes its maiden flight from Komsomolsk-on-Amur.",
      confidence: "CONFIRMED",
    },
    {
      date: "AUG 2011",
      title: "Public debut",
      detail:
        "The T-50 appears in public for the first time at the MAKS air show near Moscow.",
      confidence: "CONFIRMED",
    },
    {
      date: "11 AUG 2017",
      title: "Named Su-57",
      detail:
        "The aircraft is officially given the designation Su-57 after years as the PAK FA and T-50.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2018",
      title: "Syria deployment reported",
      detail:
        "Two aircraft are reported to have been sent to Syria for evaluation. Details were never fully published.",
      confidence: "REPORTED",
    },
    {
      date: "2018",
      title: "India withdraws",
      detail:
        "India is reported to have left the joint programme to develop a fighter from the Su-57 design, pursuing other options.",
      confidence: "REPORTED",
    },
    {
      date: "24 DEC 2019",
      title: "Serial aircraft lost",
      detail:
        "The first serial-production aircraft crashes during a delivery flight. The pilot ejects safely.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2020",
      title: "First deliveries",
      detail:
        "The first production aircraft are reported delivered to the Russian Aerospace Forces.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2024",
      title: "Debut abroad",
      detail:
        "A Su-57 flies at Airshow China in Zhuhai, the aircraft's first appearance at a major foreign air show.",
      confidence: "CONFIRMED",
    },
    {
      date: "NOV 2025",
      title: "First export deliveries",
      detail:
        "Russia says two Su-57s have been delivered to an unnamed foreign customer, widely reported to be Algeria.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2026",
      title: "Seen in Algeria",
      detail:
        "Video filmed in Algeria shows Su-57s in flight, the first public sign of the type in a foreign air force. Neither government has published details.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "Prototype, production, export.",
  variantsIntro:
    "The Su-57 family is small. Designations and upgrade names vary between sources, so treat them as working labels.",
  variants: [
    {
      code: "T-50",
      name: "Prototypes",
      seats: "1",
      status: "TEST",
      photo: photos.su57_t50,
      caption: "The second flying prototype, T-50-2, in 2012",
      summary:
        "About ten flying prototypes were built between 2010 and 2017 to test the airframe, engines and systems before production began.",
      points: [
        "First flight in January 2010",
        "Known as PAK FA in Russia",
        "Public debut in 2011",
      ],
    },
    {
      code: "Su-57",
      name: "Production",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.su57_prod,
      caption: "A Su-57 seen from below in flight, 2019",
      summary:
        "The production single-seat fighter, currently fitted with interim engines. An upgraded standard with new engines and avionics has been reported in development.",
      points: [
        "Delivered from 2020",
        "Interim AL-41F1 engines",
        "Upgrade path reported as Su-57M",
      ],
    },
    {
      code: "Su-57E",
      name: "Export",
      seats: "1",
      status: "MARKETED",
      photo: photos.su57_e,
      caption: "A Su-57 landing after the Zhuhai air show, 2024",
      summary:
        "The version offered to foreign customers by Russia's arms-export agency. It flew abroad for the first time at Airshow China in November 2024.",
      points: [
        "Offered through Rosoboronexport",
        "Demonstrated at Zhuhai in 2024",
        "First customer reported in press",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the Su-57 alongside eleven other aircraft. The Su-57 has one of the widest wings in the table; its performance figures are public estimates.",

  glossary: [
    {
      term: "PAK FA",
      definition:
        "Perspektivny Aviatsionny Kompleks Frontovoy Aviatsii — Prospective Airborne Complex of Frontline Aviation. The programme name under which the aircraft was developed.",
    },
    {
      term: "Fifth generation",
      definition:
        "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. There is no single agreed definition.",
    },
    {
      term: "LEVCON",
      definition:
        "Leading-edge vortex controller. All-moving surfaces at the wing roots that manage airflow over the wing, helping control at high angles of attack.",
    },
    {
      term: "Thrust vectoring",
      definition:
        "Redirecting engine exhaust to help steer the aircraft. The Su-57's engines are reported to vector thrust in more than one axis.",
    },
    {
      term: "IRST",
      definition:
        "Infrared search and track. A passive sensor that detects the heat of other aircraft without emitting any signal of its own.",
    },
    {
      term: "Izdeliye 30",
      definition:
        "The engine planned to power later Su-57s, offering more thrust than the interim AL-41F1. Also referred to in press as the AL-51F-1.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Sukhoi Su-57",
      href: "https://en.wikipedia.org/wiki/Sukhoi_Su-57",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Su-57 media",
      href: "https://commons.wikimedia.org/wiki/Category:Sukhoi_Su-57",
      note: "Freely licensed photographs",
    },
  ],
  referenceNote:
    "Very little about this aircraft is officially published. Figures on this page are drawn from open sources, and estimates are marked as such.",
};

export default su57;
