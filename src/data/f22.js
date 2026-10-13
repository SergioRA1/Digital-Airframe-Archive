// F-22 data used outside its hand-built page as well: the comparison
// charts read the specifications and the combined timeline reads the
// milestones. Keeping it here means those pages don't load F22.jsx.

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
      "F-22s deploy to Israel and fly in the U.S.-Israeli campaign against Iran, mainly to keep Iranian aircraft away from strike packages.",
    confidence: "REPORTED",
  },
];
