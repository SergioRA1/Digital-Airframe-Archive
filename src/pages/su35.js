import { Eye, Flame, Radar, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";
import { counts } from "../counts.js";

const silhouette = aircraft.find((entry) => entry.slug === "su-35").silhouette;

const su35 = {
  slug: "su-35",
  badge: "S35",
  footerLabel: "AIRFRAME / SU-35",
  eyebrow: "Sukhoi Su-35S · NATO “Flanker-E”",
  title: ["Su", "35"],
  model: "014",
  tagline:
    "The most developed version of the Su-27 Flanker: a large twin-engine fighter with thrust-vectoring engines, a long-range radar and a new cockpit, built for Russia and export.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["2008", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 482 M702 262 L852 346 M514 262 L364 346",
    canopy: "M594 110 L608 70 L622 110 L618 176 L598 176 Z",
    exhaust: "M558 456 Q578 472 600 458 M616 458 Q638 472 658 456",
  },
  next: {
    href: "#/fa-18",
    label: "Boeing F/A-18E/F Super Hornet",
  },

  designHeading: "The Flanker, reworked.",
  designIntro:
    "The Su-35S keeps the shape of the Su-27 but replaces almost everything inside it. Four changes define the aircraft.",
  designFeatures: [
    {
      id: "01",
      icon: Flame,
      kicker: "PROPULSION",
      title: "Thrust vectoring",
      description:
        "Its AL-41F1S engines have nozzles that swivel to point the thrust, which lets the aircraft keep control at very low speeds and high angles of attack.",
      metric: "THRUST (EACH)",
      value: "≈ 142 KN",
    },
    {
      id: "02",
      icon: Radar,
      kicker: "SENSORS",
      title: "Irbis-E radar",
      description:
        "A passive electronically scanned array radar with a very large antenna. It is reported to detect large targets at around 350 to 400 kilometres.",
      metric: "RADAR",
      value: "IRBIS-E",
    },
    {
      id: "03",
      icon: Eye,
      kicker: "PASSIVE TRACKING",
      title: "OLS-35 sensor",
      description:
        "An infrared search and track sensor in front of the cockpit detects the heat of other aircraft without transmitting any signal.",
      metric: "IRST",
      value: "OLS-35",
    },
    {
      id: "04",
      icon: Wind,
      kicker: "AIRFRAME",
      title: "Simpler, stronger, more fuel",
      description:
        "The canards of earlier versions and the large airbrake behind the cockpit were removed, the structure was strengthened and the internal fuel load increased.",
      metric: "CANARDS",
      value: "NONE",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Sukhoi and the United Aircraft Corporation, rounded for display. Performance figures are manufacturer claims that have not been independently tested.",
  specNotice:
    "Values follow manufacturer publications for the Su-35S. Russia publishes few official figures, so many are marked as reported.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "AIR SUPERIORITY",
      detail:
        "Built mainly to win control of the air, with a large load of air-to-ground and anti-ship weapons as well.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "SUKHOI",
      unit: "RUSSIA",
      detail:
        "Designed by Sukhoi and built at Komsomolsk-on-Amur, part of the United Aircraft Corporation.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "SU-35S",
      unit: "NATO: FLANKER-E",
      detail:
        "Su-35S is the production version for Russia. The earlier, unrelated Su-35 of the 1990s was a canard Su-27 development.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT",
      detail: "The production aircraft is a single-seat fighter.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × AL-41F1S",
      unit: "THRUST-VECTORING TURBOFAN",
      detail:
        "Two Saturn AL-41F1S engines, also known as the 117S, each giving about 142 kN in emergency power.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "30 MM CANNON",
      unit: "12 EXTERNAL STATIONS",
      detail:
        "An internal GSh-30-1 cannon and twelve hardpoints for up to about 8,000 kilograms of missiles, bombs and pods.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "IRBIS-E",
      unit: "PESA",
      detail:
        "A passive electronically scanned array radar, paired with the OLS-35 infrared search and track sensor.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "21.9",
      unit: "METRES",
      imperial: {
        value: "71.9",
        unit: "FEET",
      },
      detail: "Published length.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "15.3",
      unit: "METRES",
      imperial: {
        value: "50.2",
        unit: "FEET",
      },
      detail: "Published wingspan.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "5.9",
      unit: "METRES",
      imperial: {
        value: "19.4",
        unit: "FEET",
      },
      detail: "Published height.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 34,500",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 76,100",
        unit: "POUNDS",
      },
      detail: "Manufacturer figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2.25",
      unit: "AT ALTITUDE",
      detail: "Manufacturer figure. About Mach 1.13 at sea level.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "18,000",
      unit: "METRES",
      imperial: {
        value: "59,000",
        unit: "FEET",
      },
      detail: "Manufacturer figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "RANGE",
      value: "≈ 3,600",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 2,200",
        unit: "MILES",
      },
      detail:
        "Manufacturer figure at altitude on internal fuel. No combat radius has been published.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "19 FEB 2008",
      unit: "ZHUKOVSKY, RUSSIA",
      detail: "First flight of the first modernised prototype, known as the T-10BM.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2014",
      unit: "RUSSIAN AIR FORCE",
      detail:
        "The first operational regiment received its aircraft in February 2014.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "Two lives of the Su-35.",
  historyIntro:
    "The programme in twelve dates, from a canard version of the Su-27 that never entered production to the modern Su-35S at war and on export.",
  milestones: [
    {
      date: "28 JUN 1988",
      title: "Su-27M flies",
      detail:
        "The first Su-27M, an improved Su-27 with canards, makes its first flight. It is later renamed Su-35.",
      confidence: "CONFIRMED",
    },
    {
      date: "1992",
      title: "Named Su-35",
      detail:
        "The improved fighter is shown abroad as the Su-35. Only about a dozen are built, and it never enters series production.",
      confidence: "REPORTED",
    },
    {
      date: "19 FEB 2008",
      title: "New Su-35 flies",
      detail:
        "A redesigned aircraft without canards, the T-10BM, makes its first flight at Zhukovsky. It becomes the Su-35S.",
      confidence: "CONFIRMED",
    },
    {
      date: "26 APR 2009",
      title: "Prototype lost",
      detail:
        "A prototype is destroyed by fire after an accident during a high-speed taxi run. The pilot ejects.",
      confidence: "CONFIRMED",
    },
    {
      date: "AUG 2009",
      title: "First order",
      detail:
        "Russia's defence ministry orders 48 Su-35S aircraft at the MAKS air show.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2014",
      title: "Enters service",
      detail:
        "The first operational regiment, the 23rd Fighter Aviation Regiment at Dzyomgi, receives its aircraft.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2015",
      title: "China orders 24",
      detail:
        "China signs for 24 aircraft, worth about 2 billion US dollars, making it the first export customer.",
      confidence: "REPORTED",
    },
    {
      date: "JAN 2016",
      title: "First combat deployment",
      detail: "Russia sends Su-35S fighters to Syria.",
      confidence: "REPORTED",
    },
    {
      date: "DEC 2016",
      title: "First export deliveries",
      detail:
        "The first four aircraft arrive in China. All 24 are delivered by 2018.",
      confidence: "REPORTED",
    },
    {
      date: "2022",
      title: "War in Ukraine",
      detail:
        "The Su-35S flies in Russia's war against Ukraine, and several are reported lost, the first on 3 April 2022.",
      confidence: "REPORTED",
    },
    {
      date: "MAR 2025",
      title: "Algeria receives aircraft",
      detail:
        "Su-35s originally built for Egypt, which cancelled its order, are reported delivered to Algeria.",
      confidence: "REPORTED",
    },
    {
      date: "2025",
      title: "Iranian order",
      detail:
        "Leaked documents describe Su-35s being built for Iran. Neither Russia nor Iran has confirmed any delivery.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "Three Su-35s.",
  variantsIntro:
    "The name Su-35 has covered two different aircraft. The canard Su-27M of the 1990s and its two-seat trainer were built in small numbers before the redesigned Su-35S.",
  variants: [
    {
      code: "Su-27M / Su-35",
      name: "Canard prototype",
      seats: "1",
      status: "RETIRED",
      photo: photos.su35_27m,
      caption: "A Su-27M at the ILA show in Berlin, 1994",
      summary:
        "An improved Su-27 with canards and new avionics, first flown in 1988 and renamed Su-35. About a dozen were built and none entered series production.",
      points: [
        "Canards ahead of the wing",
        "First flight in 1988",
        "Became test aircraft",
      ],
    },
    {
      code: "Su-35UB",
      name: "Two-seat trainer",
      seats: "2",
      status: "1 BUILT",
      photo: photos.su35_ub,
      caption: "The Su-35UB (lower) beside the Su-47 at MAKS, 2003",
      summary:
        "A single two-seat combat trainer built from the earlier Su-35 design, first flown in 2000.",
      points: [
        "Thrust-vectoring engines",
        "First flight in August 2000",
        "Not produced",
      ],
    },
    {
      code: "Su-35S",
      name: "Production fighter",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.su35_s,
      caption: "A Su-35S taking off at the MAKS air show, 2013",
      summary:
        "The redesigned production version for Russia and export, without canards and with the Irbis-E radar and AL-41F1S engines.",
      points: [
        "Irbis-E radar",
        "Thrust-vectoring AL-41F1S engines",
        "Flown by Russia, China and Algeria",
      ],
    },
  ],

  compareIntro:
    `Published dimensions and dates for the Su-35S alongside ${counts.en.others} other aircraft. It is one of the largest aircraft in the table, and one of three with thrust-vectoring engines.`,

  glossary: [
    {
      term: "Flanker",
      definition:
        "NATO's reporting name for the Su-27 family. The Su-35S is Flanker-E.",
    },
    {
      term: "Thrust vectoring",
      definition:
        "Engine nozzles that can swivel to point the thrust, helping the aircraft turn and stay controlled at low speed.",
    },
    {
      term: "PESA",
      definition:
        "Passive electronically scanned array. A radar whose beam is steered electronically from a single transmitter, unlike an AESA, which has many.",
    },
    {
      term: "IRST",
      definition:
        "Infrared search and track. A passive sensor that detects the heat of other aircraft without transmitting any signal of its own.",
    },
    {
      term: "Canard",
      definition:
        "A small wing ahead of the main wing. The 1990s Su-35 had them; the Su-35S does not.",
    },
    {
      term: "T-10BM",
      definition:
        "Sukhoi's internal designation for the redesigned aircraft that became the production Su-35S.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Sukhoi Su-35",
      href: "https://en.wikipedia.org/wiki/Sukhoi_Su-35",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Su-35 media",
      href: "https://commons.wikimedia.org/wiki/Category:Sukhoi_Su-35",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer publications where available. Russia publishes few official details, so values marked as reported vary between sources.",
};

export default su35;
