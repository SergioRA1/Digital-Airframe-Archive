import { Layers, Radar, Ship, Zap } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "j-35").silhouette;

const j35 = {
  slug: "j-35",
  badge: "J35",
  footerLabel: "AIRFRAME / J-35",
  eyebrow: "Shenyang J-35 / FC-31 Gyrfalcon",
  title: ["J-35"],
  model: "009",
  tagline:
    "China's second stealth fighter, a twin-engine design from Shenyang that has been developed in a land-based J-35A and a carrier-based J-35.",
  heroStats: [
    ["5", "Generation"],
    ["02", "Engines"],
    ["2012", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 452 M656 236 L846 336 M560 236 L370 336",
    canopy: "M596 130 L608 88 L620 130 L616 178 L600 178 Z",
    exhaust: "M576 440 Q592 456 608 446 Q624 456 640 440",
  },
  next: {
    href: "#/j-16",
    label: "Shenyang J-16",
  },

  designHeading: "A second stealth path.",
  designIntro:
    "The J-35 began as a company-funded demonstrator and has since been reported in service. Its shaping is closer to the F-35 than to the J-20.",
  designFeatures: [
    {
      id: "01",
      icon: Layers,
      kicker: "STEALTH",
      title: "Low-observable shaping",
      description:
        "Blended fuselage, aligned edges, a diverterless intake and internal weapon bays are all designed to reduce the aircraft's radar signature.",
      metric: "WEAPON BAYS",
      value: "INTERNAL",
    },
    {
      id: "02",
      icon: Ship,
      kicker: "CARRIER",
      title: "Two versions, two roles",
      description:
        "The J-35A is the land-based version for the PLA Air Force. The J-35 for the navy has folding wings and a strengthened undercarriage for catapult launch and arrested landing.",
      metric: "NAVAL DECK",
      value: "FUJIAN",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "SENSORS",
      title: "AESA radar and EOTS",
      description:
        "Reported to carry an active electronically scanned array radar and an electro-optical targeting system mounted under the nose.",
      metric: "SENSORS",
      value: "AESA + EOTS",
    },
    {
      id: "04",
      icon: Zap,
      kicker: "PROPULSION",
      title: "Twin engines",
      description:
        "The FC-31 flew with Russian RD-93 engines. Later J-35 aircraft are reported to use Chinese WS-13 or WS-19 engines, but official details are limited.",
      metric: "ENGINES",
      value: "TWIN, REPORTED",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Very little has been published officially. Most figures come from manufacturer show materials for the FC-31 and from analysts, and are marked accordingly.",
  specNotice:
    "The J-35 is a recent aircraft and no official specification sheet has been published. Treat every figure here as approximate.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "STEALTH FIGHTER",
      detail:
        "Designed for air superiority and strike, with land-based and carrier-based versions.",
      confidence: "REPORTED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "SHENYANG",
      unit: "AVIC · CHINA",
      detail:
        "Designed and built by Shenyang Aircraft Corporation, part of AVIC.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "FC-31 → J-35",
      unit: "EXPORT · MILITARY",
      detail:
        "FC-31 was the export-oriented demonstrator name and J-31 an unofficial early label. J-35 is the military designation reported for the production aircraft, and Gyrfalcon is the name used in export marketing.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT",
      detail: "A single-seat aircraft.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × TURBOFAN",
      unit: "RD-93 → WS-13 / WS-19",
      detail:
        "The FC-31 prototypes flew with RD-93 engines. Later aircraft are reported to use Chinese WS-13 or WS-19 engines.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "INTERNAL BAYS",
      unit: "PLUS WING PYLONS",
      detail:
        "Two main internal weapon bays and two smaller side bays are reported, with external pylons for non-stealthy loads.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "≈ 17",
      unit: "METRES",
      imperial: {
        value: "≈ 56",
        unit: "FEET",
      },
      detail:
        "A commonly cited figure for the FC-31. Production aircraft may differ.",
      confidence: "ESTIMATE",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "≈ 11.5",
      unit: "METRES",
      imperial: {
        value: "≈ 38",
        unit: "FEET",
      },
      detail: "A commonly cited FC-31 figure, based on the demonstrator.",
      confidence: "ESTIMATE",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 25,000",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 55,000",
        unit: "POUNDS",
      },
      detail:
        "A rough estimate from published show materials. The naval version is likely to differ.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "≈ MACH 1.8",
      unit: "AT ALTITUDE",
      detail: "A figure shown in FC-31 export marketing material.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 1,250",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 780",
        unit: "MILES",
      },
      detail:
        "A figure shown in FC-31 export marketing material. Real radius depends on the mission and loadout.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "31 OCT 2012",
      unit: "SHENYANG, CHINA",
      detail: "First flight of the first FC-31 prototype.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2025",
      unit: "REPORTED",
      detail:
        "The J-35A and the naval J-35 appeared publicly in 2024 and 2025. No official date for entry into service has been published.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "UNKNOWN",
      unit: "NOT PUBLISHED",
      detail:
        "No production figures have been published. Prototype and early production numbers are only known from photographs.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "From demonstrator to fleet.",
  historyIntro:
    "The programme in nine dates, from the first FC-31 prototype to a reported first export agreement.",
  milestones: [
    {
      date: "31 OCT 2012",
      title: "First flight",
      detail:
        "The first FC-31 prototype, then widely called the J-31, makes its first flight at Shenyang.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2014",
      title: "Public debut",
      detail:
        "The aircraft is shown at Airshow China in Zhuhai and flown in public for the first time.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2016",
      title: "Second prototype flies",
      detail:
        "A second prototype with a revised airframe and nose flies, followed by a further show appearance in 2016.",
      confidence: "REPORTED",
    },
    {
      date: "2021",
      title: "FC-31 2.0",
      detail:
        "A redesigned airframe with a revised tail, canopy and wing is photographed in flight testing.",
      confidence: "REPORTED",
    },
    {
      date: "2021–2023",
      title: "Carrier version tested",
      detail:
        "A version with folding wings and a strengthened undercarriage is photographed in trials, widely read as the naval J-35.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2024",
      title: "J-35A shown at Zhuhai",
      detail:
        "The land-based J-35A is displayed and flown at Airshow China, the first time it is shown to the public.",
      confidence: "CONFIRMED",
    },
    {
      date: "3 SEP 2025",
      title: "Victory Day parade",
      detail:
        "J-35A aircraft are reported in the flypast over Beijing.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2025",
      title: "On the Fujian",
      detail:
        "Images and video show the navy's J-35 operating from the carrier Fujian, including arrested landings.",
      confidence: "REPORTED",
    },
    {
      date: "MAY 2026",
      title: "Pakistan agreement reported",
      detail:
        "Pakistan is reported to have signed an initial agreement for the J-35, which would be the first export of a Chinese stealth fighter. Neither government has confirmed numbers or dates.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "FC-31, J-35 and J-35A.",
  variantsIntro:
    "The design has changed a lot since 2012. The demonstrator, a redesigned prototype and the naval production aircraft are shown here.",
  variants: [
    {
      code: "FC-31",
      name: "First demonstrator",
      seats: "1",
      status: "RETIRED",
      photo: photos.j35_fc31,
      caption: "An FC-31 prototype on approach at Zhuhai, 2014",
      summary:
        "The first prototypes, flown from 2012 with Russian-built engines. Two examples flew, the second with a modified airframe.",
      points: [
        "Company-funded demonstrator",
        "RD-93 engines",
        "Widely called the J-31",
      ],
    },
    {
      code: "FC-31 2.0",
      name: "Redesigned prototype",
      seats: "1",
      status: "DISPLAYED",
      photo: photos.j35_fc31b,
      caption: "An FC-31 2.0 prototype on display at SAC Aviation Expo Park, 2026",
      summary:
        "A thoroughly revised airframe with larger tail surfaces, a new canopy and reshaped wings. The direct ancestor of the J-35.",
      points: [
        "Larger vertical tails",
        "Revised canopy and wing",
        "Basis for J-35 and J-35A",
      ],
    },
    {
      code: "J-35",
      name: "Carrier fighter",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.j35_n,
      caption: "A J-35 on the deck of the carrier Fujian, 2025",
      summary:
        "The naval version, with folding wings, a strengthened nose gear and a tail hook. A land-based J-35A for the PLA Air Force has also been shown.",
      points: [
        "Catapult launch and arrested landing",
        "Reported on the Type 003 Fujian",
        "Land-based J-35A also reported",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the J-35 alongside the other aircraft. Its numbers are estimates, so read them as a rough guide.",
  glossary: [
    {
      term: "FC-31",
      definition:
        "The export-oriented name of the demonstrator that led to the J-35. It was also called the J-31 in unofficial use.",
    },
    {
      term: "Gyrfalcon",
      definition:
        "The name used for the FC-31 in export marketing. A gyrfalcon is the largest species of falcon.",
    },
    {
      term: "CATOBAR",
      definition:
        "Catapult-assisted take-off but arrested recovery. The launch method used by the newest Chinese carrier, Fujian.",
    },
    {
      term: "DSI",
      definition:
        "Diverterless supersonic inlet. A fixed bump beside the intake that manages airflow without a separate splitter plate.",
    },
    {
      term: "EOTS",
      definition:
        "Electro-optical targeting system. A passive infrared and optical sensor housed under the nose.",
    },
    {
      term: "WS-19",
      definition:
        "A Chinese turbofan reported to have been developed for the FC-31 and J-35 in the same thrust class as the RD-93.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Shenyang J-35",
      href: "https://en.wikipedia.org/wiki/Shenyang_J-35",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — J-35 media",
      href: "https://commons.wikimedia.org/w/index.php?search=J-35+Shenyang+fighter&ns6=1",
      note: "Freely licensed photographs",
    },
  ],
  referenceNote:
    "The J-35 is a recent aircraft with very little official data. Everything on this page is based on public photographs and press reporting and is marked as reported or estimated.",
};

export default j35;
