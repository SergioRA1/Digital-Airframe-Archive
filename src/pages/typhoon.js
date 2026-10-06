import { Flame, Mic, Radar, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "typhoon").silhouette;

const typhoon = {
  slug: "typhoon",
  badge: "EF",
  footerLabel: "AIRFRAME / TYPHOON",
  eyebrow: "Eurofighter Typhoon",
  title: ["Typhoon"],
  model: "006",
  tagline:
    "A twin-engine canard-delta fighter built by a four-nation European consortium: fast, agile and flown by nine air forces.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["1994", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 40 L608 456 M660 240 L700 428 M556 240 L516 428",
    canopy: "M594 112 L608 70 L622 112 L618 165 L598 165 Z",
    exhaust: "M566 440 Q608 458 650 440",
  },
  next: {
    href: "#/rafale",
    label: "Dassault Rafale",
  },

  designHeading: "Built together, built to turn.",
  designIntro:
    "The Typhoon was designed in the 1980s as an agile air-superiority fighter and has since gained strong air-to-ground abilities. Four features define it.",
  designFeatures: [
    {
      id: "01",
      icon: Wind,
      kicker: "AERODYNAMICS",
      title: "Canard delta",
      description:
        "Small foreplanes ahead of a large delta wing give good agility. Like most modern fighters, the aircraft is unstable and relies on a flight computer to stay controllable.",
      metric: "CONFIGURATION",
      value: "CANARD DELTA",
    },
    {
      id: "02",
      icon: Flame,
      kicker: "PROPULSION",
      title: "Two EJ200 engines",
      description:
        "Two Eurojet EJ200 turbofans give a high thrust-to-weight ratio. The manufacturer describes the aircraft as able to cruise supersonically in some configurations.",
      metric: "ENGINES",
      value: "2 × EJ200",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "AWARENESS",
      title: "Radar and infrared search",
      description:
        "The CAPTOR radar has been fitted in mechanically scanned form, with the AESA CAPTOR-E following, alongside the PIRATE infrared search and track sensor.",
      metric: "RADAR",
      value: "CAPTOR",
    },
    {
      id: "04",
      icon: Mic,
      kicker: "COCKPIT",
      title: "Voice control",
      description:
        "Pilots can give some commands by voice, alongside hands-on-throttle-and-stick controls, which reduces workload in a busy cockpit.",
      metric: "COCKPIT INPUT",
      value: "VOICE + HOTAS",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by the Eurofighter consortium and partner air forces, rounded for display. Different production batches, called tranches, vary in equipment.",
  specNotice:
    "Values follow public manufacturer and air force publications. Later tranches carry different radar and systems, so treat figures as typical rather than exact.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "FIGHTER",
      detail:
        "Designed for air superiority, with air-to-ground capability added and expanded over time.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "EUROFIGHTER",
      unit: "BAE · AIRBUS · LEONARDO",
      detail:
        "Built by a consortium of companies from the United Kingdom, Germany, Italy and Spain.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (T: 2)",
      detail:
        "Combat aircraft are single-seat. Twin-seat versions are used for training.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × EJ200",
      unit: "EUROJET TURBOFANS",
      detail:
        "Each engine gives about 20,000 pounds of thrust with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "27 MM CANNON",
      unit: "13 EXTERNAL STATIONS",
      detail:
        "An internal Mauser cannon and up to 13 hardpoints for missiles, bombs and fuel tanks. There are no internal weapon bays.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "CAPTOR",
      unit: "MECHANICAL OR AESA (E)",
      detail:
        "Early aircraft carry the mechanically scanned CAPTOR-M. The AESA CAPTOR-E is fitted to later builds and upgrades.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "16.0",
      unit: "METRES",
      imperial: {
        value: "52.4",
        unit: "FEET",
      },
      detail: "As published by the manufacturer.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "11.0",
      unit: "METRES",
      imperial: {
        value: "35.9",
        unit: "FEET",
      },
      detail: "As published by the manufacturer.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "5.3",
      unit: "METRES",
      imperial: {
        value: "17.3",
        unit: "FEET",
      },
      detail: "As published by the manufacturer.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 23,500",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 51,800",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure for the single-seat aircraft.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2 CLASS",
      unit: "AT ALTITUDE",
      detail: "Published as Mach 2 or slightly above.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "≈ 19,800",
      unit: "METRES",
      imperial: {
        value: "≈ 65,000",
        unit: "FEET",
      },
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 1,390",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 860",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure for an air-superiority mission. Real radius depends heavily on the mission and loadout.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "27 MAR 1994",
      unit: "MANCHING, GERMANY",
      detail:
        "First flight of the DA1 prototype, the first of seven development aircraft.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2003",
      unit: "GERMANY · UNITED KINGDOM",
      detail:
        "The first production aircraft entered service with the German and British air forces in 2003.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT DELIVERED",
      value: "600+",
      unit: "ALL VERSIONS",
      detail:
        "Deliveries continue against orders that exceed this total. Exact numbers change as batches are handed over.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "A four-nation fighter.",
  historyIntro:
    "The programme in ten dates, from the collaboration's origins to recent export orders and combat use.",
  milestones: [
    {
      date: "1985",
      title: "France leaves",
      detail:
        "France withdraws from the European fighter collaboration and goes on to develop the Rafale on its own.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUN 1986",
      title: "Company formed",
      detail:
        "The partner companies from the United Kingdom, Germany, Italy and Spain set up Eurofighter to run the programme.",
      confidence: "CONFIRMED",
    },
    {
      date: "27 MAR 1994",
      title: "First flight",
      detail: "The DA1 prototype makes its maiden flight from Manching, Germany.",
      confidence: "CONFIRMED",
    },
    {
      date: "1998",
      title: "Named Typhoon",
      detail:
        "The aircraft, formerly known as the European Fighter Aircraft, receives the name Typhoon.",
      confidence: "REPORTED",
    },
    {
      date: "2003",
      title: "Enters service",
      detail:
        "The first production aircraft are accepted by the German and British air forces.",
      confidence: "REPORTED",
    },
    {
      date: "2007",
      title: "First large export order",
      detail:
        "Saudi Arabia signs a contract for 72 aircraft, the first big order from outside the four partner nations and Austria.",
      confidence: "REPORTED",
    },
    {
      date: "MAR 2011",
      title: "Combat over Libya",
      detail:
        "British and Italian Typhoons fly in the coalition operation over Libya, the type's first combat deployment.",
      confidence: "CONFIRMED",
    },
    {
      date: "2016–2017",
      title: "More Gulf customers",
      detail: "Kuwait and Qatar sign orders for the aircraft.",
      confidence: "REPORTED",
    },
    {
      date: "JAN 2024",
      title: "Strikes over Yemen",
      detail:
        "Royal Air Force Typhoons take part in strikes against targets in Yemen alongside U.S. aircraft.",
      confidence: "CONFIRMED",
    },
    {
      date: "27 OCT 2025",
      title: "Turkey signs",
      detail:
        "Turkey signs with the United Kingdom for 20 new Tranche 4 Typhoons, worth about 8 billion pounds. Deliveries are planned from 2030.",
      confidence: "CONFIRMED",
    },
  ],

  variantsHeading: "Prototype, single-seat, twin-seat.",
  variantsIntro:
    "The Typhoon has been built in several production tranches with steadily improving equipment. The main airframe types show how it is used.",
  variants: [
    {
      code: "DA",
      name: "Development aircraft",
      seats: "1 / 2",
      status: "7 BUILT",
      photo: photos.ty_proto,
      caption: "Prototype DA-2 on display at the RAF Museum, London",
      summary:
        "Seven development aircraft flew from 1994 to prove the design, assembled by the four partner nations.",
      points: [
        "First flight in March 1994",
        "Some prototypes were two-seaters",
        "Several are now in museums",
      ],
    },
    {
      code: "Typhoon",
      name: "Single-seat production",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.ty_single,
      caption: "A Royal Air Force Typhoon FGR4 at RIAT, 2019",
      summary:
        "The combat version, delivered in tranches 1 to 4. Later tranches added new sensors, weapons and, eventually, an AESA radar.",
      points: [
        "Named FGR4 in Royal Air Force service",
        "Ground-attack ability added after entry into service",
        "Flown by nine air forces",
      ],
    },
    {
      code: "Typhoon T",
      name: "Twin-seat trainer",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.ty_two,
      caption: "Two Royal Air Force Typhoon T3s refuelling from a VC10, 2004",
      summary:
        "A two-seat version used for conversion training. It keeps most of the combat aircraft's abilities, including the cannon.",
      points: [
        "Named T3 in Royal Air Force service",
        "Used for pilot conversion and instructing",
        "Built for several customers",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the Typhoon alongside eleven other aircraft. It is one of three European canard-delta fighters in the table.",

  glossary: [
    {
      term: "Consortium",
      definition:
        "The Typhoon is built by a group of companies from four countries. Each builds a share of the aircraft, and final assembly takes place in each partner country.",
    },
    {
      term: "Tranche",
      definition:
        "A production batch with a defined standard of equipment. Tranches 1 to 4 have added capability over the years.",
    },
    {
      term: "Canard delta",
      definition:
        "A layout with a delta-shaped main wing and small movable foreplanes ahead of it. It combines good agility with low drag at high speed.",
    },
    {
      term: "Supercruise",
      definition:
        "Sustained supersonic flight without afterburner. Typhoon marketing states that the aircraft can supercruise in some configurations.",
    },
    {
      term: "AESA radar",
      definition:
        "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
    },
    {
      term: "PIRATE",
      definition:
        "Passive infrared airborne tracking equipment. A sensor that detects heat from other aircraft without transmitting a signal of its own.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Eurofighter Typhoon",
      href: "https://en.wikipedia.org/wiki/Eurofighter_Typhoon",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Typhoon media",
      href: "https://commons.wikimedia.org/wiki/Category:Eurofighter_Typhoon",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and air force publications where available. Values marked as reported vary between sources and tranches.",
};

export default typhoon;
