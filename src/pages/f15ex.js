import { Crosshair, Cpu, Radar, Shield } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "f-15ex").silhouette;

const f15ex = {
  slug: "f-15ex",
  badge: "F15",
  footerLabel: "AIRFRAME / F-15EX",
  eyebrow: "Boeing F-15EX Eagle II",
  title: ["F-15EX"],
  model: "012",
  tagline:
    "The newest member of a fighter family that first flew in 1972, rebuilt with fly-by-wire controls, a digital cockpit and the largest weapons load of any American fighter.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["2021", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 466 M672 262 L842 352 M544 262 L374 352",
    canopy: "M594 110 L608 68 L622 110 L618 180 L598 180 Z",
    exhaust: "M560 456 Q580 470 600 456 M616 456 Q636 470 656 456",
  },
  next: {
    href: "#/j-20",
    label: "Chengdu J-20",
  },

  designHeading: "An old airframe, rebuilt.",
  designIntro:
    "The F-15 airframe is decades old, but the Eagle II replaces most of the systems inside it. It is built for a large weapons load rather than stealth.",
  designFeatures: [
    {
      id: "01",
      icon: Crosshair,
      kicker: "WEAPONS",
      title: "Large payload",
      description:
        "Boeing says the F-15EX can carry up to 29,500 pounds of weapons on 12 wing and fuselage stations, including a large number of air-to-air missiles.",
      metric: "PAYLOAD",
      value: "≈ 13,400 KG",
    },
    {
      id: "02",
      icon: Cpu,
      kicker: "CONTROLS",
      title: "Fly-by-wire",
      description:
        "Digital flight controls replace the mechanical and analogue controls of earlier F-15s. They allow more stable handling with heavy loads and simpler upgrades.",
      metric: "CONTROLS",
      value: "FLY-BY-WIRE",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "SENSORS",
      title: "APG-82 radar",
      description:
        "The F-15EX carries the APG-82(V)1 AESA radar. A very large cockpit display and a new mission computer give the crew more information.",
      metric: "RADAR",
      value: "APG-82(V)1",
    },
    {
      id: "04",
      icon: Shield,
      kicker: "SURVIVABILITY",
      title: "EPAWSS defensive suite",
      description:
        "The Eagle Passive Active Warning Survivability System detects and jams radar threats. It replaces older defensive equipment on the F-15.",
      metric: "DEFENCE",
      value: "EPAWSS",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Boeing and the U.S. Air Force, rounded for display. The F-15EX is a development of the F-15E and shares much of its geometry.",
  specNotice:
    "Values follow public manufacturer and government publications. Where the F-15EX differs from the F-15E, the EX is listed.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "AIR SUPERIORITY + STRIKE",
      detail:
        "Designed to shoot down aircraft and cruise missiles and to carry out long-range strikes.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "BOEING",
      unit: "UNITED STATES",
      detail:
        "Designed and built by Boeing at St. Louis, Missouri. The F-15 family began at McDonnell Douglas.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "EAGLE II",
      unit: "F-15EX",
      detail:
        "Eagle II is the name adopted by the U.S. Air Force for the aircraft. It is a two-seat development of the F-15E Strike Eagle.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "2",
      unit: "PILOT + WEAPONS SYSTEMS OFFICER",
      detail: "A tandem two-seat cockpit.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × F110-GE-129",
      unit: "TURBOFAN",
      detail:
        "Two General Electric F110 engines, each in the 29,000 pound thrust class with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "20 MM CANNON",
      unit: "12 EXTERNAL STATIONS",
      detail:
        "An internal M61A1 cannon and twelve wing and fuselage stations for missiles and bombs.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "APG-82(V)1",
      unit: "AESA",
      detail: "An active electronically scanned array radar.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "19.4",
      unit: "METRES",
      imperial: {
        value: "63.7",
        unit: "FEET",
      },
      detail: "Overall length.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "13.1",
      unit: "METRES",
      imperial: {
        value: "42.8",
        unit: "FEET",
      },
      detail: "Overall span.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "5.6",
      unit: "METRES",
      imperial: {
        value: "18.5",
        unit: "FEET",
      },
      detail: "To the top of the tails.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 36,700",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 81,000",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure for the F-15E family.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2.5",
      unit: "AT ALTITUDE",
      detail: "Published as Mach 2.5 class.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "≈ 20,000",
      unit: "METRES",
      imperial: {
        value: "≈ 65,000",
        unit: "FEET",
      },
      detail: "A commonly cited figure for the F-15 family.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 1,270",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 790",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure for the F-15E. Real radius depends heavily on the mission and loadout.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "2 FEB 2021",
      unit: "ST. LOUIS, MISSOURI",
      detail: "First flight of the first F-15EX.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2024",
      unit: "U.S. AIR FORCE",
      detail:
        "The first aircraft was delivered to the 142nd Wing of the Oregon Air National Guard in mid-2024.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT PLANNED",
      value: "≈ 100+",
      unit: "U.S. AIR FORCE",
      detail:
        "Planned numbers have varied, from 129 aircraft in the original plan to a reduced total in later budgets. Orders from other countries may add to this.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "Fifty years of Eagles.",
  historyIntro:
    "The programme in ten dates, from the first F-15 in 1972 to the first export contract, signed by Israel.",
  milestones: [
    {
      date: "27 JUL 1972",
      title: "F-15 first flight",
      detail:
        "The original single-seat F-15A makes its first flight at Edwards Air Force Base.",
      confidence: "CONFIRMED",
    },
    {
      date: "11 DEC 1986",
      title: "F-15E flies",
      detail:
        "The two-seat F-15E Strike Eagle makes its first flight. It adds conformal fuel tanks and strong strike capability.",
      confidence: "CONFIRMED",
    },
    {
      date: "1988",
      title: "F-15E enters service",
      detail:
        "The Strike Eagle enters service with the U.S. Air Force and goes on to fly in operations from the Gulf War onwards.",
      confidence: "CONFIRMED",
    },
    {
      date: "2019",
      title: "F-15QA flies",
      detail:
        "The first F-15QA, built for Qatar, makes its first flight. It introduces fly-by-wire controls to the two-seat F-15 family.",
      confidence: "REPORTED",
    },
    {
      date: "2020",
      title: "Air Force orders F-15EX",
      detail:
        "The U.S. Air Force awards a contract for the F-15EX to replace its ageing F-15C and F-15D fighters.",
      confidence: "REPORTED",
    },
    {
      date: "2 FEB 2021",
      title: "First flight",
      detail: "The first F-15EX makes its maiden flight at St. Louis.",
      confidence: "REPORTED",
    },
    {
      date: "11 MAR 2021",
      title: "Arrives at Eglin",
      detail:
        "The first F-15EX arrives at Eglin Air Force Base in Florida for testing.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUN–JUL 2024",
      title: "First delivery to a unit",
      detail:
        "The first F-15EX is delivered to the 142nd Wing at Portland, Oregon, and unveiled at a ceremony in July.",
      confidence: "CONFIRMED",
    },
    {
      date: "29 DEC 2025",
      title: "Israel signs",
      detail:
        "Israel signs a contract for 25 F-15IA aircraft, its version of the F-15EX. Deliveries are expected to start in 2031.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2026",
      title: "Indonesia steps back",
      detail:
        "Boeing says Indonesia, once expected to be the first export customer, is no longer an active campaign.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "E, QA and EX.",
  variantsIntro:
    "The F-15EX is the latest in a line of two-seat strike Eagles. Its two predecessors are shown here for comparison.",
  variants: [
    {
      code: "F-15E",
      name: "Strike Eagle",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.f15_e,
      caption: "An F-15E Strike Eagle at the Dyess AFB air show, 2018",
      summary:
        "The two-seat strike version that first flew in 1986. It has conformal fuel tanks and can carry a heavy ground-attack load.",
      points: [
        "First flew in 1986",
        "Conformal fuel tanks",
        "Analogue flight controls",
      ],
    },
    {
      code: "F-15QA",
      name: "Qatar Advanced",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.f15_qa,
      caption: "A Qatar Emiri Air Force F-15QA at RIAT, July 2024",
      summary:
        "The version built for Qatar. It introduced fly-by-wire controls, the large cockpit display and the APG-82 radar to the F-15 family.",
      points: [
        "Fly-by-wire controls",
        "APG-82(V)1 radar",
        "Built for Qatar",
      ],
    },
    {
      code: "F-15EX",
      name: "Eagle II",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.f15_ex,
      caption: "An F-15EX from the 40th Flight Test Squadron, May 2021",
      summary:
        "The U.S. Air Force's version, derived from the F-15QA with U.S. systems, including the EPAWSS defensive suite and a new mission computer.",
      points: [
        "EPAWSS defensive suite",
        "Large weapons capacity",
        "Replaces the F-15C and F-15D",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the F-15EX alongside the other aircraft. It is one of the heaviest aircraft in the table and has the largest weapons load.",
  glossary: [
    {
      term: "EPAWSS",
      definition:
        "Eagle Passive Active Warning Survivability System. An electronic warfare suite that detects radar threats and jams them.",
    },
    {
      term: "Fly-by-wire",
      definition:
        "A flight-control system in which the pilot's inputs go to a computer that moves the control surfaces, rather than through mechanical linkages.",
    },
    {
      term: "APG-82(V)1",
      definition:
        "An active electronically scanned array radar developed for the F-15E and used on the F-15EX.",
    },
    {
      term: "Conformal fuel tank",
      definition:
        "A fuel tank shaped to fit against the fuselage that adds range without much extra drag. The F-15E and F-15EX can carry them along the sides of the air intakes.",
    },
    {
      term: "Air National Guard",
      definition:
        "A reserve component of the U.S. Air Force. The first F-15EX unit is the 142nd Wing of the Oregon Air National Guard.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Boeing F-15EX Eagle II",
      href: "https://en.wikipedia.org/wiki/Boeing_F-15EX_Eagle_II",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — F-15EX media",
      href: "https://commons.wikimedia.org/w/index.php?search=F-15EX+Eagle+II&ns6=1",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and U.S. Air Force publications where available. Values marked as reported vary between sources and versions.",
};

export default f15ex;
