// F-22 data used outside its hand-built page as well: the comparison
// charts read the specifications and the combined timeline reads the
// milestones. Keeping it here means those pages don't load F22.jsx.
// The rest of the page's text lives here too so that it can be translated.

import { photos } from "../photos.js";
import { counts } from "../counts.js";

export const specifications = [
  {
    group: "IDENTITY",
    label: "PRIMARY ROLE",
    value: "AIR DOMINANCE",
    unit: "MULTIROLE FIGHTER",
    detail:
      "Described by the U.S. Air Force as an air dominance fighter with air-to-ground capability.",
    confidence: "CONFIRMED",
  },
  {
    group: "IDENTITY",
    label: "MANUFACTURER",
    value: "LOCKHEED MARTIN",
    unit: "WITH BOEING",
    detail:
      "Lockheed Martin was prime contractor, with Boeing building the wings and aft fuselage.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "CREW",
    value: "1",
    unit: "PILOT",
    detail:
      "All production aircraft are single-seat. A planned two-seat trainer was cancelled.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "POWERPLANT",
    value: "2 × F119",
    unit: "PRATT & WHITNEY TURBOFANS",
    detail:
      "F119-PW-100 engines in the 35,000-pound thrust class, each with a two-dimensional thrust-vectoring nozzle.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "ENGINE THRUST",
    value: "≈ 156",
    unit: "KILONEWTONS",
    imperial: {
      value: "35,000",
      unit: "POUNDS",
    },
    detail: "Each F119 is in the 35,000-pound thrust class with afterburner.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "WEAPON BAYS",
    value: "1 + 2",
    unit: "MAIN + SIDE BAYS",
    detail:
      "A main bay for medium-range missiles or guided bombs and two side bays for short-range missiles, plus an internal 20 mm cannon.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "LENGTH",
    value: "18.9",
    unit: "METRES",
    imperial: {
      value: "62.1",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "WINGSPAN",
    value: "13.6",
    unit: "METRES",
    imperial: {
      value: "44.5",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "HEIGHT",
    value: "5.1",
    unit: "METRES",
    imperial: {
      value: "16.7",
      unit: "FEET",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "MAX TAKEOFF WEIGHT",
    value: "38,000",
    unit: "KILOGRAMS",
    imperial: {
      value: "83,500",
      unit: "POUNDS",
    },
    detail: "As published in the U.S. Air Force fact sheet.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "MAXIMUM SPEED",
    value: "MACH 2 CLASS",
    unit: "WITH AFTERBURNER",
    detail:
      "The official description. Exact maximum speed is not published.",
    confidence: "CONFIRMED",
  },
  {
    group: "PERFORMANCE",
    label: "SUPERCRUISE",
    value: "MACH 1.5+",
    unit: "WITHOUT AFTERBURNER",
    detail:
      "Sustained supersonic cruise on dry thrust, a defining requirement of the programme.",
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
    value: "≈ 2,960",
    unit: "KILOMETRES",
    imperial: {
      value: "≈ 1,850",
      unit: "MILES",
    },
    detail:
      "Published as more than 1,850 miles with two external fuel tanks.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "FIRST FLIGHT",
    value: "7 SEP 1997",
    unit: "MARIETTA, GEORGIA",
    detail:
      "First flight of the production-standard F-22. The YF-22 prototype had flown in September 1990.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "SERVICE ENTRY",
    value: "DEC 2005",
    unit: "U.S. AIR FORCE",
    detail:
      "Initial operational capability was declared at Langley Air Force Base, Virginia.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "AIRFRAMES BUILT",
    value: "195",
    unit: "187 PRODUCTION + 8 TEST",
    detail:
      "Production ended in 2011. The aircraft was never exported.",
    confidence: "CONFIRMED",
  },
];

export const milestones = [
  {
    date: "1981",
    title: "A new requirement",
    detail:
      "The U.S. Air Force defines the Advanced Tactical Fighter requirement for an aircraft to succeed the F-15.",
    confidence: "CONFIRMED",
  },
  {
    date: "OCT 1986",
    title: "Two teams chosen",
    detail:
      "Teams led by Lockheed and Northrop are selected to build competing prototypes, the YF-22 and YF-23.",
    confidence: "CONFIRMED",
  },
  {
    date: "29 SEP 1990",
    title: "YF-22 flies",
    detail: "The first YF-22 prototype makes its maiden flight.",
    confidence: "CONFIRMED",
  },
  {
    date: "23 APR 1991",
    title: "Competition won",
    detail:
      "The YF-22 and its Pratt & Whitney engine are announced as winners of the Advanced Tactical Fighter competition.",
    confidence: "CONFIRMED",
  },
  {
    date: "APR 1997",
    title: "Roll-out",
    detail:
      "The first production-standard F-22 is rolled out at Marietta, Georgia, and the name Raptor is announced.",
    confidence: "CONFIRMED",
  },
  {
    date: "7 SEP 1997",
    title: "First flight",
    detail: "The first F-22 flies from Marietta.",
    confidence: "CONFIRMED",
  },
  {
    date: "2003",
    title: "Training begins",
    detail:
      "The first aircraft are delivered to Tyndall Air Force Base, Florida, to train pilots.",
    confidence: "CONFIRMED",
  },
  {
    date: "DEC 2005",
    title: "Initial operational capability",
    detail:
      "The 27th Fighter Squadron at Langley Air Force Base becomes the first operational unit.",
    confidence: "CONFIRMED",
  },
  {
    date: "2009",
    title: "Production capped",
    detail:
      "The decision is taken to end procurement at 187 production aircraft, far fewer than first planned.",
    confidence: "CONFIRMED",
  },
  {
    date: "DEC 2011",
    title: "Last aircraft built",
    detail:
      "The final F-22 leaves the Marietta assembly line. It is delivered the following year.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2014",
    title: "Combat debut",
    detail:
      "F-22s fly their first combat mission, striking targets in Syria.",
    confidence: "CONFIRMED",
  },
  {
    date: "4 FEB 2023",
    title: "First air-to-air kill",
    detail:
      "An F-22 from Langley shoots down a high-altitude balloon off the coast of South Carolina.",
    confidence: "CONFIRMED",
  },
  {
    date: "JAN 2025",
    title: "Infrared defence upgrade",
    detail:
      "Lockheed Martin receives a 270 million dollar contract to fit a new infrared defensive system to the fleet.",
    confidence: "CONFIRMED",
  },
  {
    date: "FEB–MAR 2026",
    title: "Operation Epic Fury",
    detail:
      "F-22s are reported to deploy to Israel and to fly in the U.S.-Israeli campaign against Iran, clearing the way for strike aircraft.",
    confidence: "REPORTED",
    source: {
      name: "The War Zone",
      href: "https://www.twz.com/air/f-22-raptors-arrive-in-england-after-deployment-to-israel-for-iran-war",
    },
  },
];

export const content = {
  navigation: {
    design: "Design",
    specifications: "Data",
    history: "History",
    variants: "Variants",
    compare: "Compare",
    reference: "Reference",
  },
  silhouetteLabel: "Stylised F-22 silhouette seen from above",
  eyebrow: "Lockheed Martin F-22 Raptor",
  tagline:
    "The first operational fifth-generation fighter: an air dominance aircraft built around stealth, supercruise and sensor fusion, and flown only by the U.S. Air Force.",
  enterArchive: "Enter archive",
  viewPhotography: "View photography",
  visualModel: "Visual model",
  model: "002",
  heroStats: [
    ["05", "Generation"],
    ["195", "Built"],
    ["1997", "First flight"],
  ],
  scroll: "Scroll to explore",
  designLabel: "Design",
  designHeading: "First look, first shot.",
  designIntro:
    "The F-22 was designed to find and engage other aircraft before being detected itself. Four ideas carry most of that design.",
  specHeading: "The published profile.",
  specIntro:
    "Figures published by the U.S. Air Force, rounded for display. Performance beyond what is officially stated is not included.",
  specNotice:
    "Values follow the public U.S. Air Force fact sheet and standard references. They are included for educational context, not as technical documentation.",
  historyHeading: "From requirement to Raptor.",
  historyIntro:
    "The programme in fourteen dates, from the requirement that started it to combat over Iran.",
  variantsHeading: "One production form.",
  variantsIntro:
    "Only one version of the F-22 was built in quantity. A two-seat trainer was planned and dropped, so it is shown as a silhouette.",
  compareIntro:
    `Published dimensions and dates for the F-22 alongside ${counts.en.others} other aircraft. It was the first fifth-generation fighter to fly and to enter service.`,
  referenceNote:
    "Figures on this page follow official publications where available. Anything not officially published has been left out.",
  photoArchive: "Photographic archive",
  inFrame: "F-22 in frame",
  nextAircraft: "Next aircraft",
  nextLabel: "Lockheed Martin F-35",
};

export const designFeatures = [
  {
    id: "01",
    kicker: "SIGNATURE",
    title: "Aligned edges",
    description:
      "Wing, tail and panel edges share a small set of angles, and weapons are carried in internal bays, to keep radar returns low from the front and sides.",
    metric: "WEAPON CARRIAGE",
    value: "INTERNAL",
  },
  {
    id: "02",
    kicker: "PROPULSION",
    title: "Supercruise",
    description:
      "Two F119 engines allow sustained supersonic flight without afterburner. The Air Force cites speeds above Mach 1.5 in this regime.",
    metric: "WITHOUT AFTERBURNER",
    value: "MACH 1.5+",
  },
  {
    id: "03",
    kicker: "CONTROL",
    title: "Thrust vectoring",
    description:
      "Flat, two-dimensional nozzles deflect engine thrust up and down, adding pitch authority at low speed and high angles of attack.",
    metric: "NOZZLE TRAVEL",
    value: "± 20°",
  },
  {
    id: "04",
    kicker: "AWARENESS",
    title: "Integrated avionics",
    description:
      "The AN/APG-77 AESA radar and passive AN/ALR-94 receivers feed one fused picture to a single pilot, rather than separate displays per sensor.",
    metric: "RADAR",
    value: "AN/APG-77",
  },
];

export const variants = [
  {
    code: "YF-22",
    name: "Prototype",
    seats: "1",
    status: "2 BUILT",
    photo: photos.f22_yf22,
    caption: "A YF-22 prototype in a test flight",
    summary:
      "The demonstrator that won the Advanced Tactical Fighter competition against the Northrop YF-23. The production aircraft was substantially reshaped afterwards.",
    points: [
      "First flight in September 1990",
      "Flown with two competing engine designs",
      "Selected in April 1991",
    ],
  },
  {
    code: "F-22A",
    name: "Production single-seat",
    seats: "1",
    status: "IN SERVICE",
    photo: photos.f22_a,
    caption: "An F-22A over Kadena Air Base, Japan, 2009",
    summary:
      "The only production version. It was briefly designated F/A-22 in the early 2000s to emphasise its ground-attack role.",
    points: [
      "187 production aircraft",
      "In service since 2005",
      "Upgraded in increments since delivery",
    ],
  },
  {
    code: "F-22B",
    name: "Planned two-seat",
    seats: "2",
    status: "CANCELLED",
    caption: "Never built, so there is no photograph",
    summary:
      "A two-seat trainer planned alongside the F-22A and cancelled in the 1990s to save cost. Pilots train in simulators and the single-seat aircraft.",
    points: [
      "None built",
      "Cancelled before production",
      "No two-seat Raptor has flown",
    ],
  },
];

export const glossary = [
  {
    term: "Fifth generation",
    definition:
      "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. The F-22 is usually named as the first.",
  },
  {
    term: "Advanced Tactical Fighter (ATF)",
    definition:
      "The 1980s U.S. Air Force programme to replace the F-15. It produced two competing prototypes, the YF-22 and the YF-23.",
  },
  {
    term: "Low observable (LO)",
    definition:
      "Design measures that reduce how easily an aircraft is detected — shaping, aligned edges, internal weapon bays and surface materials. Often called stealth.",
  },
  {
    term: "Supercruise",
    definition:
      "Sustained supersonic flight without afterburner, which saves fuel and reduces the aircraft's infrared signature compared with afterburning flight.",
  },
  {
    term: "Thrust vectoring",
    definition:
      "Redirecting engine exhaust to help steer the aircraft. The F-22's nozzles move in pitch only.",
  },
  {
    term: "AESA radar",
    definition:
      "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
  },
];

export const sources = [
  {
    label: "U.S. Air Force — F-22 Raptor fact sheet",
    href: "https://www.af.mil/About-Us/Fact-Sheets/Display/Article/104506/f-22-raptor/",
    note: "Official description and published figures",
  },
  {
    label: "Wikipedia — Lockheed Martin F-22 Raptor",
    href: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-22_Raptor",
    note: "General reference and citations",
  },
  {
    label: "Wikimedia Commons — F-22 media",
    href: "https://commons.wikimedia.org/wiki/Category:Lockheed_Martin_F-22_Raptor",
    note: "Public-domain and freely licensed photographs",
  },
];
