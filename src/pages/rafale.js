import { Anchor, Layers, Radar, Shield } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "rafale").silhouette;

const rafale = {
  slug: "rafale",
  badge: "RF",
  footerLabel: "AIRFRAME / RAFALE",
  eyebrow: "Dassault Rafale",
  title: ["Rafale"],
  model: "007",
  tagline:
    "France's omnirole fighter: a twin-engine canard-delta jet flown by the French Air and Space Force and, in a carrier version, by the French Navy.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["1986", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 42 L608 456 M654 262 L700 432 M562 262 L516 432",
    canopy: "M594 112 L608 70 L622 112 L618 160 L598 160 Z",
    exhaust: "M566 440 Q608 458 650 440",
  },
  next: {
    href: "#/gripen",
    label: "Saab Gripen",
  },

  designHeading: "One aircraft, every role.",
  designIntro:
    "Dassault calls the Rafale an omnirole fighter: one airframe intended to replace several older French aircraft. Four features stand out.",
  designFeatures: [
    {
      id: "01",
      icon: Layers,
      kicker: "CONCEPT",
      title: "Omnirole",
      description:
        "Air defence, ground attack, reconnaissance and, in France, nuclear strike are all handled by the same aircraft, with the mission set by weapons and software.",
      metric: "ROLE",
      value: "OMNIROLE",
    },
    {
      id: "02",
      icon: Shield,
      kicker: "SELF-PROTECTION",
      title: "SPECTRA",
      description:
        "An integrated electronic warfare suite detects, identifies and counters threats, with sensors and jammers built into the airframe rather than added as pods.",
      metric: "EW SUITE",
      value: "SPECTRA",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "AWARENESS",
      title: "RBE2 radar",
      description:
        "The RBE2 electronically scanned radar has been upgraded from a passive array to an active AESA version on newer aircraft, alongside an infrared and optical sensor ahead of the canopy.",
      metric: "RADAR",
      value: "RBE2 AESA",
    },
    {
      id: "04",
      icon: Anchor,
      kicker: "CARRIER",
      title: "Catapult and arrested landing",
      description:
        "The naval Rafale M has a reinforced undercarriage and tailhook for catapult launches and arrested landings on the carrier Charles de Gaulle.",
      metric: "LAUNCH METHOD",
      value: "CATOBAR",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Dassault Aviation and the French armed forces, rounded for display. The Rafale C is the single-seat air force version.",
  specNotice:
    "Values follow public manufacturer and government publications for the Rafale C. The two-seat B and naval M differ slightly in weight and equipment.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "OMNIROLE",
      unit: "FIGHTER",
      detail:
        "Described by the manufacturer as an omnirole aircraft for air superiority, strike, reconnaissance and nuclear deterrence.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "DASSAULT",
      unit: "WITH SAFRAN AND THALES",
      detail:
        "Dassault Aviation is prime contractor, with Safran supplying the engines and Thales the radar and electronic warfare systems.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1 OR 2",
      unit: "C SINGLE-SEAT · B TWO-SEAT",
      detail:
        "The Rafale C and M are single-seat. The Rafale B is a two-seater used for training and some missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × M88",
      unit: "SAFRAN TURBOFANS",
      detail:
        "Each engine gives roughly 17,000 pounds of thrust with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "30 MM CANNON",
      unit: "14 EXTERNAL STATIONS",
      detail:
        "An internal cannon and 14 hardpoints, or 13 on the naval version. There are no internal weapon bays.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "RBE2",
      unit: "PASSIVE OR AESA",
      detail:
        "Early aircraft use the passive electronically scanned RBE2. Later aircraft have the AESA version.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "15.3",
      unit: "METRES",
      imperial: {
        value: "50.1",
        unit: "FEET",
      },
      detail: "As published for the Rafale C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "10.8",
      unit: "METRES",
      imperial: {
        value: "35.4",
        unit: "FEET",
      },
      detail: "As published for the Rafale C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "5.3",
      unit: "METRES",
      imperial: {
        value: "17.5",
        unit: "FEET",
      },
      detail: "As published for the Rafale C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 24,500",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 54,000",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure for the Rafale C.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 1.8",
      unit: "AT ALTITUDE",
      detail: "The figure quoted by the manufacturer.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "≈ 15,800",
      unit: "METRES",
      imperial: {
        value: "≈ 52,000",
        unit: "FEET",
      },
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "> 1,850",
      unit: "KILOMETRES",
      imperial: {
        value: "> 1,150",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure. Real radius depends heavily on the mission and loadout.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "4 JUL 1986",
      unit: "RAFALE A DEMONSTRATOR",
      detail:
        "First flight of the Rafale A technology demonstrator. The first Rafale C flew in 1991.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2001",
      unit: "FRENCH NAVY (RAFALE M)",
      detail:
        "The naval Rafale M entered service in 2001, and air force aircraft followed in the mid-2000s.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT ORDERED",
      value: "500+",
      unit: "FRANCE AND EXPORT",
      detail:
        "Orders from France and export customers together exceed this figure, and deliveries continue.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "A French choice.",
  historyIntro:
    "The programme in fourteen dates, from France's decision to go alone to combat over Pakistan and deliveries to Indonesia.",
  milestones: [
    {
      date: "1985",
      title: "France goes alone",
      detail:
        "France leaves the European fighter collaboration and starts its own programme, which becomes the Rafale.",
      confidence: "CONFIRMED",
    },
    {
      date: "4 JUL 1986",
      title: "Rafale A flies",
      detail:
        "The Rafale A technology demonstrator makes its first flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "12 MAY 1991",
      title: "First Rafale C",
      detail:
        "The first prototype of the single-seat air force version takes to the air.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 1991",
      title: "First Rafale M",
      detail: "The naval prototype makes its first flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "2001",
      title: "Navy service",
      detail:
        "The first Rafale M aircraft enter service with the French Navy.",
      confidence: "REPORTED",
    },
    {
      date: "DEC 2004",
      title: "Air force deliveries begin",
      detail:
        "The first aircraft in the F2 standard are delivered to the French Air Force.",
      confidence: "REPORTED",
    },
    {
      date: "MAR 2011",
      title: "Operations over Libya",
      detail:
        "French Rafales fly strike and air-defence missions in the coalition campaign over Libya.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2015",
      title: "First export order",
      detail:
        "Egypt signs a contract for 24 aircraft, the first export sale of the Rafale.",
      confidence: "CONFIRMED",
    },
    {
      date: "SEP 2016",
      title: "India signs",
      detail: "India signs a contract for 36 Rafales.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUL 2020",
      title: "First Indian arrivals",
      detail: "The first Rafales for India arrive from France.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2021",
      title: "United Arab Emirates order",
      detail:
        "The United Arab Emirates announces an order for 80 aircraft, the largest single export order for the type.",
      confidence: "REPORTED",
    },
    {
      date: "APR 2025",
      title: "Naval version for India",
      detail:
        "India signs an agreement for Rafale M naval fighters for its aircraft carriers.",
      confidence: "REPORTED",
    },
    {
      date: "7 MAY 2025",
      title: "Operation Sindoor",
      detail:
        "Indian Rafales take part in strikes on Pakistan. The loss of at least one Rafale is reported, the first combat loss of the type. India has not published its losses by type.",
      confidence: "REPORTED",
    },
    {
      date: "23 JAN 2026",
      title: "Indonesia's first jets",
      detail:
        "The first three of Indonesia's 42 Rafales, all two-seaters, arrive at Pekanbaru in Sumatra.",
      confidence: "CONFIRMED",
    },
  ],

  variantsHeading: "One design, three versions.",
  variantsIntro:
    "The Rafale is built in three main versions that share most systems. Export aircraft carry different letter codes but follow the same layout.",
  variants: [
    {
      code: "Rafale C",
      name: "Single-seat, air force",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.rf_c,
      caption: "A French Air and Space Force Rafale C in display colours, 2018",
      summary:
        "The single-seat version flown by the French Air and Space Force, and the reference for most published figures.",
      points: [
        "First flown in May 1991",
        "Used for air defence and strike",
        "Carries the nuclear strike role in France",
      ],
    },
    {
      code: "Rafale B",
      name: "Two-seat",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.rf_b,
      caption: "A French Air Force Rafale B at Kleine Brogel, 2007",
      summary:
        "A two-seat version with the same capabilities, used for training and for missions that benefit from a second crew member.",
      points: [
        "Larger cockpit section",
        "Often used for strike and reconnaissance",
        "Ordered by several export customers",
      ],
    },
    {
      code: "Rafale M",
      name: "Carrier-based, navy",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.rf_m,
      caption: "A French Navy Rafale M in flight",
      summary:
        "The naval version, with a reinforced airframe and landing gear and a tailhook for catapult launches and arrested landings on the carrier Charles de Gaulle.",
      points: [
        "Entered service in 2001",
        "Slightly heavier than the Rafale C",
        "Also ordered by India for its carriers",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the Rafale alongside eleven other aircraft. It is one of three European canard-delta fighters here, with the Typhoon and Gripen.",

  glossary: [
    {
      term: "Omnirole",
      definition:
        "Dassault's term for an aircraft intended to perform every fighter role, from air defence to strike and reconnaissance, on one airframe.",
    },
    {
      term: "SPECTRA",
      definition:
        "The Rafale's integrated electronic self-protection suite. It combines radar warning, laser warning, jamming and decoys under one system.",
    },
    {
      term: "Canard delta",
      definition:
        "A layout with a delta-shaped main wing and small movable foreplanes ahead of it. It combines good agility with low drag at high speed.",
    },
    {
      term: "AESA radar",
      definition:
        "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
    },
    {
      term: "CATOBAR",
      definition:
        "Catapult-assisted takeoff but arrested recovery. The launch method used by large carriers such as the Charles de Gaulle.",
    },
    {
      term: "Standard F3-R",
      definition:
        "A capability standard for the French fleet that adds new weapons and improved sensors, including the AESA radar in later builds.",
    },
  ],
  sources: [
    {
      label: "Dassault Aviation — Rafale",
      href: "https://www.dassault-aviation.com/en/defense/rafale/",
      note: "Manufacturer overview",
    },
    {
      label: "Wikipedia — Dassault Rafale",
      href: "https://en.wikipedia.org/wiki/Dassault_Rafale",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Rafale media",
      href: "https://commons.wikimedia.org/wiki/Category:Dassault_Rafale",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and government publications where available. Values marked as reported vary between sources.",
};

export default rafale;
