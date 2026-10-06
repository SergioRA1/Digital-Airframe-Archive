import { MapPin, Radar, Radio, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "gripen").silhouette;

const gripen = {
  slug: "gripen",
  badge: "GR",
  footerLabel: "AIRFRAME / GRIPEN",
  eyebrow: "Saab JAS 39 Gripen",
  title: ["Gripen"],
  model: "008",
  tagline:
    "Sweden's light single-engine fighter, designed to operate from dispersed roads and short airstrips and now flown in its larger E version.",
  heroStats: [
    ["4.5", "Generation"],
    ["01", "Engine"],
    ["1988", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 454 M658 262 L696 428 M558 262 L520 428",
    canopy: "M596 126 L608 84 L620 126 L616 176 L600 176 Z",
    exhaust: "M580 440 Q608 456 636 440",
  },
  next: {
    href: "#/j-35",
    label: "Shenyang J-35",
  },

  designHeading: "Small, dispersed, ready.",
  designIntro:
    "The Gripen was designed for a country that expected to fight from many small bases. That requirement shaped the whole aircraft.",
  designFeatures: [
    {
      id: "01",
      icon: MapPin,
      kicker: "OPERATIONS",
      title: "Dispersed basing",
      description:
        "The aircraft was designed to take off and land on short stretches of road and to be prepared for its next sortie by a small ground crew.",
      metric: "DESIGN GOAL",
      value: "ROAD BASES",
    },
    {
      id: "02",
      icon: Wind,
      kicker: "AERODYNAMICS",
      title: "Compact canard delta",
      description:
        "A small, light airframe with canards and a delta wing keeps size and weight down. The Gripen C is only about 14 metres long.",
      metric: "LENGTH (C)",
      value: "14.1 M",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "AWARENESS",
      title: "Raven AESA radar",
      description:
        "The Gripen E has the Raven ES-05 AESA radar, which can scan across a wide field, along with an infrared search and track sensor.",
      metric: "RADAR (E)",
      value: "RAVEN ES-05",
    },
    {
      id: "04",
      icon: Radio,
      kicker: "NETWORK",
      title: "Data-linked operations",
      description:
        "Tactical data links let Gripens share targets and sensor pictures with each other and with other aircraft and ground units.",
      metric: "DATA LINK",
      value: "NETWORKED",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Saab and Sweden's armed forces, rounded for display. The Gripen C/D is the reference version, and the larger Gripen E is noted where it differs.",
  specNotice:
    "Values follow public manufacturer and government publications. Where figures differ between the Gripen C/D and E, the C/D is listed and the E noted.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "LIGHT FIGHTER",
      detail:
        "Designed as a light multirole fighter for air defence, attack and reconnaissance.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "SAAB",
      unit: "SWEDEN",
      detail: "Designed and built by Saab, based in Linköping, Sweden.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "JAS 39",
      unit: "JAKT · ATTACK · SPANING",
      detail:
        "The designation stands for fighter, attack and reconnaissance in Swedish. Gripen means griffin.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (D, F: 2)",
      detail:
        "Combat aircraft are single-seat. Two-seat versions are used for training and some missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "1 × RM12 OR F414",
      unit: "TURBOFAN",
      detail:
        "The Gripen C/D uses a Swedish-built version of the General Electric F404 known as the RM12. The larger Gripen E uses the more powerful GE F414.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "27 MM CANNON",
      unit: "8–10 EXTERNAL STATIONS",
      detail:
        "An internal Mauser cannon and eight hardpoints on the C/D, or ten on the E. There are no internal weapon bays.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "PS-05/A → RAVEN",
      unit: "AESA ON THE E",
      detail:
        "The Gripen C/D uses the PS-05/A pulse-Doppler radar. The E has the Raven ES-05 AESA.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "14.1",
      unit: "METRES",
      imperial: {
        value: "46.3",
        unit: "FEET",
      },
      detail: "Gripen C. The E is about 15.2 metres long.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "8.4",
      unit: "METRES",
      imperial: {
        value: "27.6",
        unit: "FEET",
      },
      detail: "Gripen C. The E is about 8.6 metres.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "4.5",
      unit: "METRES",
      imperial: {
        value: "14.8",
        unit: "FEET",
      },
      detail: "Gripen C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 14,000",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 30,900",
        unit: "POUNDS",
      },
      detail: "Gripen C. The E is heavier, at about 16,500 kilograms.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2 CLASS",
      unit: "AT ALTITUDE",
      detail: "Published as Mach 2 at altitude.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "> 15,000",
      unit: "METRES",
      imperial: {
        value: "> 49,000",
        unit: "FEET",
      },
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 800",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 500",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure for the Gripen C. Real radius depends heavily on the mission and loadout.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "9 DEC 1988",
      unit: "LINKÖPING, SWEDEN",
      detail: "First flight of the first prototype.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "1996",
      unit: "SWEDISH AIR FORCE",
      detail:
        "The Gripen A entered service with the Swedish Air Force in 1996.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "300+",
      unit: "ALL VERSIONS",
      detail:
        "Production has included aircraft for Sweden, several export customers and the newer E version.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "A Swedish fighter.",
  historyIntro:
    "The programme in eleven dates, from Sweden's decision to develop the aircraft to new Gripen E orders from Thailand and Colombia.",
  milestones: [
    {
      date: "1982",
      title: "Development approved",
      detail:
        "Sweden commits to develop a new fighter to replace the Viggen, which becomes the JAS 39 Gripen.",
      confidence: "REPORTED",
    },
    {
      date: "9 DEC 1988",
      title: "First flight",
      detail: "The first prototype makes its maiden flight at Linköping.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 1989",
      title: "Prototype lost",
      detail:
        "The first prototype crashes while landing after a test flight. The pilot survives.",
      confidence: "CONFIRMED",
    },
    {
      date: "1996",
      title: "Enters service",
      detail:
        "The Gripen A enters service with the Swedish Air Force.",
      confidence: "REPORTED",
    },
    {
      date: "DEC 1999",
      title: "First export selection",
      detail:
        "South Africa selects the Gripen, followed by lease and purchase deals with other countries.",
      confidence: "REPORTED",
    },
    {
      date: "APR 2008",
      title: "Demonstrator flies",
      detail:
        "The Gripen Demo, a testbed for the larger next-generation version, makes its first flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2013",
      title: "Brazil selects Gripen",
      detail:
        "Brazil chooses the larger Gripen version for its air force.",
      confidence: "REPORTED",
    },
    {
      date: "15 JUN 2017",
      title: "Gripen E flies",
      detail: "The first Gripen E makes its first flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "AUG 2025",
      title: "Thailand orders Gripen E",
      detail:
        "Thailand orders four new Gripen E/F aircraft, three single-seat and one two-seat, worth about 5.3 billion Swedish kronor.",
      confidence: "CONFIRMED",
    },
    {
      date: "OCT 2025",
      title: "Ukraine letter of intent",
      detail:
        "Sweden and Ukraine sign a letter of intent about a possible sale of Gripen E aircraft. No contract had been reported at the time of writing.",
      confidence: "REPORTED",
    },
    {
      date: "15 NOV 2025",
      title: "Colombia signs",
      detail:
        "Colombia signs for 15 Gripen E and two Gripen F aircraft, with deliveries planned from 2026 to 2032.",
      confidence: "CONFIRMED",
    },
  ],

  variantsHeading: "C, D and E.",
  variantsIntro:
    "The Gripen has been built in several versions. The earlier A and B were followed by the improved C and D, and then by the larger E and F, shown here.",
  variants: [
    {
      code: "Gripen C",
      name: "Single-seat, improved",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.gr_c,
      caption: "A Swedish Air Force Gripen C flying over Öland, 2023",
      summary:
        "The improved single-seat version, with air-to-air refuelling capability and better weapons and sensors than the original A.",
      points: [
        "Followed the Gripen A",
        "Flown by Sweden and several export customers",
        "RM12 engine and PS-05/A radar",
      ],
    },
    {
      code: "Gripen D",
      name: "Two-seat, improved",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.gr_d,
      caption: "A Hungarian Air Force Gripen D beside a two-seat demonstrator",
      summary:
        "A two-seat version of the Gripen C, used for conversion training and, in some countries, for operational missions.",
      points: [
        "Same systems as the Gripen C",
        "Fuselage stretched for the second seat",
        "Flown by several air forces",
      ],
    },
    {
      code: "Gripen E",
      name: "Next generation",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.gr_e,
      caption: "A Swedish Gripen E on the runway, July 2023",
      summary:
        "A larger, more capable version with a more powerful engine, an AESA radar and more weapon stations. A two-seat Gripen F is planned.",
      points: [
        "F414G engine",
        "Raven ES-05 AESA radar",
        "First flight in June 2017",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the Gripen C/D alongside eleven other aircraft. It is the smallest aircraft in the table, and one of three single-engine designs.",

  glossary: [
    {
      term: "JAS",
      definition:
        "Jakt, Attack, Spaning: fighter, attack and reconnaissance in Swedish. The role combination the aircraft was designed to perform.",
    },
    {
      term: "Road base",
      definition:
        "A stretch of ordinary road prepared for use as a temporary airstrip. Sweden's air force trained for dispersed operations from such bases.",
    },
    {
      term: "Raven ES-05",
      definition:
        "An AESA radar for the Gripen E. Its antenna can be swivelled to widen the area the radar can scan.",
    },
    {
      term: "Gripen Demo",
      definition:
        "A converted two-seat Gripen used to test the larger airframe, engine and systems that became the Gripen E.",
    },
    {
      term: "Data link",
      definition:
        "A radio network that lets aircraft and ground stations share targets and sensor information in real time.",
    },
    {
      term: "IRST",
      definition:
        "Infrared search and track. A passive sensor that detects the heat of other aircraft without transmitting any signal of its own.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Saab JAS 39 Gripen",
      href: "https://en.wikipedia.org/wiki/Saab_JAS_39_Gripen",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Gripen media",
      href: "https://commons.wikimedia.org/wiki/Category:Saab_39_Gripen",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and government publications where available. Values marked as reported vary between sources and versions.",
};

export default gripen;
