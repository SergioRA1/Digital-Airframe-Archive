import { Activity, Eye, Gauge, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "f-16").silhouette;

const f16 = {
  slug: "f-16",
  badge: "16",
  footerLabel: "AIRFRAME / 16",
  eyebrow: "General Dynamics / Lockheed Martin F-16",
  title: ["F", "16"],
  model: "005",
  tagline:
    "The lightweight fighter that became the most-produced Western jet fighter: a single-engine, fly-by-wire design flown by around 25 air forces.",
  heroStats: [
    ["04", "Generation"],
    ["4,600+", "Built"],
    ["1974", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 50 L608 458 M664 290 L696 408 M552 290 L520 408",
    canopy: "M594 118 L608 76 L622 118 L618 170 L598 170 Z",
    exhaust: "M576 442 Q608 460 640 442",
  },
  next: {
    href: "#/typhoon",
    label: "Eurofighter Typhoon",
  },

  designHeading: "Small, light, agile.",
  designIntro:
    "The F-16 began as a cheap, lightweight fighter meant to complement the F-15. Several ideas that were new in the 1970s are now standard.",
  designFeatures: [
    {
      id: "01",
      icon: Activity,
      kicker: "CONTROLS",
      title: "Fly-by-wire from the start",
      description:
        "Electrical signals, not cables, link the pilot's side-stick to the control surfaces. The aircraft is deliberately unstable, and the flight computer keeps it under control.",
      metric: "FLIGHT CONTROLS",
      value: "FLY-BY-WIRE",
    },
    {
      id: "02",
      icon: Eye,
      kicker: "COCKPIT",
      title: "Bubble canopy, reclined seat",
      description:
        "A frameless bubble canopy gives the pilot an all-round view, and the seat is reclined to help withstand high g forces.",
      metric: "SEAT RECLINE",
      value: "30°",
    },
    {
      id: "03",
      icon: Wind,
      kicker: "AERODYNAMICS",
      title: "Blended body and strakes",
      description:
        "The fuselage merges into the wing, and long leading-edge extensions add lift at high angles of attack by feeding vortices across the wing.",
      metric: "G LIMIT",
      value: "9 G",
    },
    {
      id: "04",
      icon: Gauge,
      kicker: "PHILOSOPHY",
      title: "Light and affordable",
      description:
        "One engine and a compact airframe keep cost and weight down, which is a large part of why so many air forces bought it.",
      metric: "ORIGINAL CONCEPT",
      value: "LIGHTWEIGHT",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures for a typical F-16C as published by the U.S. Air Force and the manufacturer, rounded for display. Later blocks and other countries' aircraft differ.",
  specNotice:
    "Values follow public U.S. Air Force and manufacturer publications for the F-16C. Different blocks vary in weight, engine and equipment, so treat figures as typical rather than exact.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "FIGHTER",
      detail:
        "Described as a compact, multirole fighter for air-to-air and air-to-ground missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "LOCKHEED MARTIN",
      unit: "ORIGINALLY GENERAL DYNAMICS",
      detail:
        "General Dynamics designed and first built the F-16. Lockheed bought its Fort Worth aircraft division in 1993.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (D: 2)",
      detail:
        "The F-16C is single-seat. The F-16D is a two-seat version used for training and some missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "1 × F100 OR F110",
      unit: "TURBOFAN, TWO ENGINE FAMILIES",
      detail:
        "A Pratt & Whitney F100 or a General Electric F110, in roughly the 23,000 to 29,000 pound thrust class depending on the version.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "20 MM CANNON",
      unit: "PLUS EXTERNAL STORES",
      detail:
        "An internal M61A1 cannon, with missiles, bombs and fuel tanks carried on external pylons. There are no internal weapon bays.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "AN/APG-68",
      unit: "OR AN/APG-83 AESA",
      detail:
        "The F-16C's standard radar. Upgraded aircraft use the AN/APG-83 AESA radar.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "15.1",
      unit: "METRES",
      imperial: {
        value: "49.5",
        unit: "FEET",
      },
      detail: "As published for the F-16C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "10.0",
      unit: "METRES",
      imperial: {
        value: "32.8",
        unit: "FEET",
      },
      detail: "Measured without wingtip missiles.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "4.9",
      unit: "METRES",
      imperial: {
        value: "16.0",
        unit: "FEET",
      },
      detail: "As published for the F-16C.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 19,200",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 42,300",
        unit: "POUNDS",
      },
      detail:
        "A commonly cited figure for later blocks. Published values are lower for early blocks and vary between sources.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2 CLASS",
      unit: "AT ALTITUDE",
      detail: "The published top speed class at high altitude.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "15,000+",
      unit: "METRES",
      imperial: {
        value: "50,000+",
        unit: "FEET",
      },
      detail: "Published only as “above 50,000 feet”.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "FERRY RANGE",
      value: "> 3,700",
      unit: "KILOMETRES",
      imperial: {
        value: "> 2,300",
        unit: "MILES",
      },
      detail:
        "Published as more than 2,000 nautical miles, flown with external fuel tanks.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "2 FEB 1974",
      unit: "EDWARDS AFB, CALIFORNIA",
      detail:
        "Official first flight of the YF-16 prototype, after an unplanned short hop on 20 January.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "1978–79",
      unit: "U.S. AIR FORCE",
      detail:
        "Deliveries to the U.S. Air Force began in 1978, and the first operational wing received aircraft in January 1979.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "4,600+",
      unit: "ALL VERSIONS",
      detail:
        "Production continues, with new-build aircraft ordered by several export customers.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "OPERATORS",
      value: "≈ 25",
      unit: "COUNTRIES",
      detail:
        "Roughly 25 countries have flown the type. The exact number changes as fleets retire and new orders arrive.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "From prototype to world fleet.",
  historyIntro:
    "The programme in thirteen dates, from the Lightweight Fighter competition to the type's service in Ukraine.",
  milestones: [
    {
      date: "APR 1972",
      title: "Lightweight Fighter competition",
      detail:
        "The U.S. Air Force picks General Dynamics and Northrop to build competing prototypes, the YF-16 and the YF-17.",
      confidence: "CONFIRMED",
    },
    {
      date: "2 FEB 1974",
      title: "YF-16 flies",
      detail:
        "The first prototype makes its official first flight at Edwards Air Force Base, California.",
      confidence: "CONFIRMED",
    },
    {
      date: "13 JAN 1975",
      title: "YF-16 selected",
      detail:
        "The Air Force chooses the YF-16 over the YF-17 as its new lightweight fighter.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 1976",
      title: "First production F-16",
      detail: "The first production-standard F-16A makes its first flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "JAN 1979",
      title: "First operational wing",
      detail:
        "The 388th Tactical Fighter Wing at Hill Air Force Base, Utah, receives the first operational aircraft.",
      confidence: "REPORTED",
    },
    {
      date: "1981",
      title: "Long-range strike",
      detail:
        "Israeli F-16s take part in a long-range strike on an Iraqi nuclear reactor, one of the type's earliest combat uses.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUN 1984",
      title: "F-16C flies",
      detail:
        "The improved F-16C and two-seat F-16D make their first flights, later becoming the main production versions.",
      confidence: "CONFIRMED",
    },
    {
      date: "JAN 1991",
      title: "Desert Storm",
      detail:
        "F-16s fly more combat missions than any other coalition aircraft during the Gulf War air campaign.",
      confidence: "REPORTED",
    },
    {
      date: "1993",
      title: "Lockheed takes over",
      detail:
        "Lockheed buys General Dynamics' Fort Worth division, and with it the F-16 programme.",
      confidence: "CONFIRMED",
    },
    {
      date: "FEB 2012",
      title: "F-16V unveiled",
      detail:
        "Lockheed shows the F-16V upgrade, adding an AESA radar and new cockpit displays to existing airframes.",
      confidence: "CONFIRMED",
    },
    {
      date: "2019",
      title: "Production moves",
      detail:
        "New F-16 production is announced to move from Fort Worth, Texas, to Greenville, South Carolina.",
      confidence: "CONFIRMED",
    },
    {
      date: "AUG 2024",
      title: "Ukraine receives F-16s",
      detail:
        "Ukraine's president confirms that the country's first F-16s, donated by European nations, have arrived.",
      confidence: "CONFIRMED",
    },
    {
      date: "SEP 2026",
      title: "Belgian jets for Ukraine",
      detail:
        "Ukraine's president says Belgium will begin transferring its F-16s by the end of 2026, as Belgium moves to the F-35A.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "From YF-16 to Viper.",
  variantsIntro:
    "The F-16 has been built in many blocks, with new radars, engines and cockpits. Three stages show how the design evolved. The latest F-16V and Block 70/72 aircraft add an AESA radar.",
  variants: [
    {
      code: "YF-16",
      name: "Prototype",
      seats: "1",
      status: "2 BUILT",
      photo: photos.f16_yf16,
      caption: "A YF-16 (front) flying with the YF-17, about 1972–74",
      summary:
        "The demonstrator that won the Air Force's Lightweight Fighter competition against the Northrop YF-17, which later became the basis of the F/A-18.",
      points: [
        "First flight in February 1974",
        "Competed against the YF-17",
        "Production aircraft were changed after selection",
      ],
    },
    {
      code: "F-16A/B",
      name: "Original production",
      seats: "1 / 2",
      status: "EXPORT SERVICE",
      photo: photos.f16_a,
      caption: "A Portuguese Air Force F-16A taxiing at RIAT",
      summary:
        "The first production versions: the single-seat A and two-seat B. The U.S. Air Force retired them from regular units long ago, but several air forces still fly upgraded examples.",
      points: [
        "Entered service in 1978–79",
        "AN/APG-66 radar",
        "Sold to Europe and beyond",
      ],
    },
    {
      code: "F-16C/D",
      name: "Improved production",
      seats: "1 / 2",
      status: "IN SERVICE",
      photo: photos.f16_c,
      caption: "A crew chief launches an armed U.S. Air Force F-16C, 1991",
      summary:
        "The main production versions from the mid-1980s, with a better radar, cockpit and engines. Later Block 50/52 and 60 aircraft added even more capability, and the F-16V brings older airframes to a similar standard.",
      points: [
        "Introduced in 1984",
        "Choice of Pratt & Whitney or General Electric engine",
        "Block 60 built for the United Arab Emirates",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the F-16C alongside eleven other aircraft. It is the oldest design in the table, first flying in 1974.",

  glossary: [
    {
      term: "Lightweight Fighter (LWF)",
      definition:
        "The 1970s U.S. Air Force programme to build a small, cheap fighter to complement the larger F-15. It produced the YF-16 and YF-17.",
    },
    {
      term: "Fly-by-wire",
      definition:
        "A control system where the pilot's inputs go to a computer, which moves the control surfaces electrically instead of through mechanical linkages.",
    },
    {
      term: "Relaxed static stability",
      definition:
        "A deliberately neutral or unstable design that makes an aircraft more agile. A flight computer makes constant corrections to keep it controllable.",
    },
    {
      term: "Leading-edge extension (strake)",
      definition:
        "A long, narrow surface running from the wing root toward the nose. It creates vortices that keep air attached to the wing at high angles of attack.",
    },
    {
      term: "Block",
      definition:
        "A production batch with a defined standard of engines, radar and equipment. Blocks are numbered, for example Block 25, 50 or 70.",
    },
    {
      term: "F-16V (Viper)",
      definition:
        "An upgrade package and a production standard with an AESA radar, modern displays and updated computers, offered for new and existing aircraft.",
    },
  ],
  sources: [
    {
      label: "Lockheed Martin — F-16 Fighting Falcon",
      href: "https://www.lockheedmartin.com/en-us/products/f-16.html",
      note: "Manufacturer overview",
    },
    {
      label: "Wikipedia — General Dynamics F-16 Fighting Falcon",
      href: "https://en.wikipedia.org/wiki/General_Dynamics_F-16_Fighting_Falcon",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — F-16 media",
      href: "https://commons.wikimedia.org/wiki/Category:General_Dynamics_F-16_Fighting_Falcon",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow official and manufacturer publications where available. Values marked as reported vary between sources and blocks.",
};

export default f16;
