import { Eye, Flame, Layers, Radar } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";
import { counts } from "../counts.js";

const silhouette = aircraft.find((entry) => entry.slug === "kf-21").silhouette;

const kf21 = {
  slug: "kf-21",
  badge: "KF",
  footerLabel: "AIRFRAME / KF-21",
  eyebrow: "KAI KF-21 Boramae",
  title: ["KF", "21"],
  model: "013",
  tagline:
    "South Korea's first home-developed fighter: a twin-engine aircraft shaped for a low radar signature and built first as an air-combat Block I.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["2022", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 440 M672 246 L846 350 M544 246 L370 350",
    canopy: "M594 104 L608 64 L622 104 L618 172 L598 172 Z",
    exhaust: "M568 444 Q586 458 602 446 M614 446 Q630 458 648 444",
  },
  next: {
    href: "#/su-35",
    label: "Sukhoi Su-35S",
  },

  designHeading: "Built in blocks.",
  designIntro:
    "The KF-21 was planned to grow in steps. The first version is an air-superiority fighter, with attack weapons and more stealth to follow in later blocks.",
  designFeatures: [
    {
      id: "01",
      icon: Eye,
      kicker: "SIGNATURE",
      title: "Shaped for stealth",
      description:
        "Aligned edges, a chined nose and canted tails reduce its radar signature. Block I carries its missiles outside the airframe, partly recessed under the fuselage, so it is not a full stealth design.",
      metric: "WEAPON BAY",
      value: "LATER BLOCKS",
    },
    {
      id: "02",
      icon: Radar,
      kicker: "SENSORS",
      title: "Korean AESA radar",
      description:
        "Its active electronically scanned array radar was developed in South Korea by Hanwha Systems, after the United States declined to transfer the technology.",
      metric: "RADAR",
      value: "APY-016K",
    },
    {
      id: "03",
      icon: Flame,
      kicker: "PROPULSION",
      title: "Twin F414 engines",
      description:
        "Two General Electric F414 engines, built under licence in South Korea by Hanwha Aerospace. The same engine family powers the Super Hornet and the Gripen E.",
      metric: "THRUST (EACH)",
      value: "≈ 98 KN",
    },
    {
      id: "04",
      icon: Layers,
      kicker: "PROGRAMME",
      title: "Block I first",
      description:
        "The first 40 production aircraft are Block I fighters for air combat. Block II is planned to add air-to-ground and anti-ship weapons.",
      metric: "BLOCK I ORDERS",
      value: "40",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Korea Aerospace Industries and South Korea's defence procurement agency, rounded for display. Several performance figures have not been released.",
  specNotice:
    "The KF-21 is newly in service, and some figures are from development testing. Values marked as reported come from press accounts of official briefings.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "AIR SUPERIORITY FIRST",
      detail:
        "Block I is built for air-to-air missions. Later blocks are planned to add air-to-ground and anti-ship roles.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "KAI",
      unit: "SOUTH KOREA",
      detail:
        "Designed and built by Korea Aerospace Industries at Sacheon, with Indonesia as a development partner.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "BORAMAE",
      unit: "YOUNG HAWK",
      detail:
        "Boramae is the Korean word for a young hawk trained for hunting.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (TWO-SEAT: 2)",
      detail:
        "Built as single-seat and two-seat aircraft. The first production aircraft delivered was a two-seater.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × F414-GE-400K",
      unit: "TURBOFAN",
      detail:
        "General Electric F414 engines built under licence by Hanwha Aerospace, each giving about 98 kN with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "20 MM CANNON",
      unit: "10 EXTERNAL STATIONS",
      detail:
        "An internal M61A2 rotary cannon and ten external hardpoints, with about 7,700 kilograms of external load. Missiles include the Meteor and IRIS-T.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "APY-016K",
      unit: "AESA",
      detail:
        "An active electronically scanned array radar developed by Hanwha Systems, reported to have about 1,000 transmit-receive modules.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "16.9",
      unit: "METRES",
      imperial: {
        value: "55.4",
        unit: "FEET",
      },
      detail: "Published length of the production design.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "11.2",
      unit: "METRES",
      imperial: {
        value: "36.7",
        unit: "FEET",
      },
      detail: "Published wingspan.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "4.7",
      unit: "METRES",
      imperial: {
        value: "15.4",
        unit: "FEET",
      },
      detail: "Published height.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 25,600",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 56,400",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure for the single-seat aircraft.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 1.81",
      unit: "AT ALTITUDE",
      detail:
        "The published design figure. Flight tests reached Mach 1.8 in 2024.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "19 JUL 2022",
      unit: "SACHEON, SOUTH KOREA",
      detail: "First flight of the first prototype.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2026",
      unit: "REPUBLIC OF KOREA AIR FORCE",
      detail:
        "The first production aircraft was delivered to the 156th Fighter Squadron in September 2026. Full operational capability is expected in 2027.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT ORDERED",
      value: "40",
      unit: "BLOCK I",
      detail:
        "Two orders of 20 Block I aircraft, placed in 2024 and 2025. Further Block II aircraft are planned.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "From KF-X to service.",
  historyIntro:
    "The programme in twelve dates, from the first plans for a Korean fighter to the first production aircraft joining a squadron.",
  milestones: [
    {
      date: "MAR 2001",
      title: "KF-X announced",
      detail:
        "South Korea announces a plan to develop its own fighter to replace older F-4 and F-5 aircraft.",
      confidence: "REPORTED",
    },
    {
      date: "JUL 2010",
      title: "Indonesia joins",
      detail:
        "Indonesia agrees to fund 20 per cent of development in exchange for a share of the work and a prototype.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2015",
      title: "Development begins",
      detail:
        "Korea Aerospace Industries signs the full-scale development contract. The United States declines to transfer four key technologies, including the AESA radar, which South Korea develops itself.",
      confidence: "REPORTED",
    },
    {
      date: "9 APR 2021",
      title: "Rollout",
      detail:
        "The first prototype is rolled out at Sacheon and the aircraft is named Boramae.",
      confidence: "CONFIRMED",
    },
    {
      date: "19 JUL 2022",
      title: "First flight",
      detail: "The first prototype makes its maiden flight from Sacheon.",
      confidence: "CONFIRMED",
    },
    {
      date: "17 JAN 2023",
      title: "Supersonic",
      detail: "A prototype flies faster than sound for the first time.",
      confidence: "CONFIRMED",
    },
    {
      date: "28 JUN 2023",
      title: "Six prototypes flying",
      detail:
        "The sixth and last prototype flies. Four are single-seat and two are two-seat aircraft.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUN 2024",
      title: "Production ordered",
      detail: "South Korea orders the first 20 Block I production aircraft.",
      confidence: "CONFIRMED",
    },
    {
      date: "AUG 2024",
      title: "Indonesia's share cut",
      detail:
        "Indonesia's contribution to development is reduced, and its share of the programme falls to about 7.5 per cent.",
      confidence: "REPORTED",
    },
    {
      date: "JAN 2026",
      title: "Testing complete",
      detail:
        "The development flight-test programme ends after about 1,600 flights without an accident.",
      confidence: "REPORTED",
    },
    {
      date: "25 MAR 2026",
      title: "First production jet",
      detail: "The first production KF-21 is rolled out at Sacheon.",
      confidence: "REPORTED",
    },
    {
      date: "SEP 2026",
      title: "Enters service",
      detail:
        "The first production aircraft, a two-seater, is delivered to the 156th Fighter Squadron at Yecheon Air Base.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "One airframe, two seats.",
  variantsIntro:
    "Block I has been built as a single-seat and a two-seat aircraft. Block II, planned next, is shown as a silhouette.",
  variants: [
    {
      code: "KF-21 Block I",
      name: "Single-seat",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.kf21_g3,
      caption: "A KF-21 in an aerial demonstration at Seoul ADEX, October 2023",
      summary:
        "The main production version, built for air-to-air missions with the AESA radar and Meteor and IRIS-T missiles.",
      points: [
        "Air-superiority role",
        "Missiles carried externally",
        "First of 40 Block I aircraft",
      ],
    },
    {
      code: "KF-21 two-seat",
      name: "Two-seat",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.kf21_g8,
      caption: "The sixth prototype, a two-seater, at Seoul ADEX, October 2023",
      summary:
        "A two-seat version of the same aircraft, used for training and able to fly combat missions. Two of the six prototypes were two-seaters.",
      points: [
        "Second cockpit behind the first",
        "Prototypes 4 and 6",
        "First production aircraft delivered",
      ],
    },
    {
      code: "KF-21 Block II",
      name: "Multirole",
      seats: "1",
      status: "PLANNED",
      summary:
        "A planned version that adds air-to-ground and anti-ship weapons, such as the KALCM cruise missile, to the Block I aircraft.",
      points: [
        "Air-to-ground weapons",
        "Anti-ship missiles",
        "Planned after Block I",
      ],
    },
  ],

  compareIntro:
    `Published dimensions and dates for the KF-21 alongside ${counts.en.others} other aircraft. It is the most recent design in the table to enter service.`,

  glossary: [
    {
      term: "Boramae",
      definition:
        "Korean for a young hawk trained for hunting, chosen as the aircraft's name at its rollout in 2021.",
    },
    {
      term: "KF-X",
      definition:
        "Korean Fighter eXperimental, the name of the development programme before the aircraft was named KF-21.",
    },
    {
      term: "Block",
      definition:
        "A production standard. Block I aircraft are built for air combat, and later blocks are planned to add new weapons and capabilities.",
    },
    {
      term: "AESA",
      definition:
        "Active electronically scanned array. A radar made of many small transmitter-receiver modules that steer the beam electronically.",
    },
    {
      term: "Semi-recessed carriage",
      definition:
        "Missiles carried partly sunk into the underside of the fuselage, which reduces drag and radar signature compared with ordinary pylons.",
    },
    {
      term: "IF-X",
      definition:
        "Indonesia's name for its share of the programme, as the development partner.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — KAI KF-21 Boramae",
      href: "https://en.wikipedia.org/wiki/KAI_KF-21_Boramae",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — KF-21 media",
      href: "https://commons.wikimedia.org/wiki/Category:Korea_Aerospace_Industries_KF-21_Boramae",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and government publications where available. Values marked as reported come from press accounts and may change as the aircraft enters service.",
};

export default kf21;
