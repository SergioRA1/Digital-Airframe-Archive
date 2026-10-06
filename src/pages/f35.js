import { Eye, Layers, Monitor, Radar } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "f-35").silhouette;

const f35 = {
  slug: "f-35",
  badge: "35",
  footerLabel: "AIRFRAME / 35",
  eyebrow: "Lockheed Martin F-35 Lightning II",
  title: ["F", "35"],
  model: "003",
  tagline:
    "A single-engine stealth fighter built around sensor fusion and sold as one family of three variants. The most widely flown fifth-generation aircraft in the world.",
  heroStats: [
    ["05", "Generation"],
    ["03", "Variants"],
    ["2006", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 46 L608 450 M648 215 L700 372 M568 215 L516 372",
    canopy: "M594 130 L608 78 L622 130 L616 176 L600 176 Z",
    exhaust: "M566 434 Q608 452 650 434",
  },
  next: {
    href: "#/su-57",
    label: "Sukhoi Su-57",
  },

  designHeading: "One design, three roles.",
  designIntro:
    "The F-35 was conceived as a common airframe that could replace several older aircraft at once. Four ideas carry most of the design.",
  designFeatures: [
    {
      id: "01",
      icon: Eye,
      kicker: "SIGNATURE",
      title: "Low observable by design",
      description:
        "Shaping, aligned edges, radar-absorbing coatings and internal weapon bays keep the aircraft's radar signature low from most angles.",
      metric: "WEAPON CARRIAGE",
      value: "INTERNAL",
    },
    {
      id: "02",
      icon: Radar,
      kicker: "AWARENESS",
      title: "Sensor fusion",
      description:
        "The AN/APG-81 AESA radar, an electro-optical targeting system and six infrared cameras around the airframe feed one combined picture to the pilot.",
      metric: "INFRARED CAMERAS",
      value: "6",
    },
    {
      id: "03",
      icon: Monitor,
      kicker: "COCKPIT",
      title: "A helmet instead of a HUD",
      description:
        "There is no head-up display. Flight and sensor information is shown on the pilot's helmet visor, including imagery from the cameras around the aircraft.",
      metric: "HEAD-UP DISPLAY",
      value: "HELMET",
    },
    {
      id: "04",
      icon: Layers,
      kicker: "FAMILY",
      title: "Three variants",
      description:
        "A conventional-takeoff F-35A, a short-takeoff, vertical-landing F-35B and a carrier-based F-35C share most systems but differ in wing, structure and lift.",
      metric: "VARIANTS",
      value: "A / B / C",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures for the F-35A as published by Lockheed Martin and the U.S. Air Force, rounded for display. The B and C variants differ in size, weight and range.",
  specNotice:
    "Values follow public manufacturer and U.S. Air Force publications for the F-35A. They are included for educational context, not as technical documentation.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "STEALTH STRIKE FIGHTER",
      detail:
        "Described as a multirole fighter for air-to-air and air-to-ground missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "LOCKHEED MARTIN",
      unit: "WITH INDUSTRY PARTNERS",
      detail:
        "Lockheed Martin is prime contractor, with Northrop Grumman and BAE Systems as principal industry partners.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT",
      detail: "All variants are single-seat.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "1 × F135",
      unit: "PRATT & WHITNEY TURBOFAN",
      detail:
        "The F-35A's F135 engine produces about 43,000 pounds of thrust with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "WEAPON BAYS",
      value: "2 BAYS",
      unit: "4 INTERNAL STATIONS",
      detail:
        "Two internal bays carry air-to-air missiles and guided bombs, with additional stations on external pylons when stealth is not required.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "AN/APG-81",
      unit: "AESA RADAR",
      detail:
        "An active electronically scanned array that also supports electronic warfare and communication functions.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "15.7",
      unit: "METRES",
      imperial: {
        value: "51.4",
        unit: "FEET",
      },
      detail: "F-35A. The F-35B is similar; the F-35C is slightly longer.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "10.7",
      unit: "METRES",
      imperial: {
        value: "35.0",
        unit: "FEET",
      },
      detail:
        "F-35A. The carrier-based F-35C has a much larger wing, at about 13.1 metres.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "4.4",
      unit: "METRES",
      imperial: {
        value: "14.4",
        unit: "FEET",
      },
      detail: "F-35A, as published by the manufacturer.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 31,800",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 70,000",
        unit: "POUNDS",
      },
      detail: "Published as the 70,000-pound class for the F-35A.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 1.6",
      unit: "WITH AFTERBURNER",
      detail:
        "The published top speed. The F-35 is not designed to supercruise.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "15,000",
      unit: "METRES",
      imperial: {
        value: "50,000",
        unit: "FEET",
      },
      detail: "Published as 50,000 feet for the F-35A.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "> 1,090",
      unit: "KILOMETRES",
      imperial: {
        value: "> 680",
        unit: "MILES",
      },
      detail:
        "Published as more than 590 nautical miles on internal fuel for the F-35A.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "15 DEC 2006",
      unit: "FORT WORTH, TEXAS",
      detail:
        "First flight of the F-35A. The X-35 demonstrator had flown in October 2000.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "AUG 2016",
      unit: "U.S. AIR FORCE",
      detail:
        "Initial operational capability of the F-35A. The Marine Corps declared the F-35B operational a year earlier, in July 2015.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT DELIVERED",
      value: "1,000+",
      unit: "ALL VARIANTS",
      detail:
        "Production continues, so the total keeps rising. Exact figures change with each delivery.",
      confidence: "REPORTED",
    },
  ],

  historyHeading: "From competition to fleet.",
  historyIntro:
    "The programme in sixteen dates, from the Joint Strike Fighter competition to combat over Iran and new European operators.",
  milestones: [
    {
      date: "NOV 1996",
      title: "Joint Strike Fighter competition",
      detail:
        "Boeing and Lockheed Martin are chosen to build competing demonstrators for a common fighter for several services.",
      confidence: "CONFIRMED",
    },
    {
      date: "24 OCT 2000",
      title: "X-35 flies",
      detail:
        "Lockheed Martin's X-35A demonstrator makes its first flight. Boeing's competing X-32 had flown weeks earlier.",
      confidence: "CONFIRMED",
    },
    {
      date: "26 OCT 2001",
      title: "Lockheed Martin selected",
      detail:
        "The X-35 design is chosen as the winner of the Joint Strike Fighter competition.",
      confidence: "CONFIRMED",
    },
    {
      date: "15 DEC 2006",
      title: "First F-35A flight",
      detail: "The first F-35A flies from Fort Worth, Texas.",
      confidence: "CONFIRMED",
    },
    {
      date: "11 JUN 2008",
      title: "First F-35B flight",
      detail:
        "The short-takeoff, vertical-landing variant makes its maiden flight.",
      confidence: "CONFIRMED",
    },
    {
      date: "6 JUN 2010",
      title: "First F-35C flight",
      detail: "The carrier-based variant flies for the first time.",
      confidence: "CONFIRMED",
    },
    {
      date: "31 JUL 2015",
      title: "Marine Corps operational",
      detail:
        "The U.S. Marine Corps declares its F-35B squadron ready for operations, the first of the three variants to do so.",
      confidence: "CONFIRMED",
    },
    {
      date: "2 AUG 2016",
      title: "Air Force operational",
      detail:
        "The U.S. Air Force declares initial operational capability for the F-35A.",
      confidence: "CONFIRMED",
    },
    {
      date: "MAY 2018",
      title: "First combat use",
      detail:
        "Israel announces that its F-35I aircraft have been used in combat, the first reported combat use of the type.",
      confidence: "CONFIRMED",
    },
    {
      date: "27 SEP 2018",
      title: "First U.S. combat strike",
      detail:
        "Marine Corps F-35Bs from the amphibious assault ship USS Essex strike a target in Afghanistan.",
      confidence: "CONFIRMED",
    },
    {
      date: "28 FEB 2019",
      title: "Navy operational",
      detail:
        "The U.S. Navy declares initial operational capability for the F-35C.",
      confidence: "CONFIRMED",
    },
    {
      date: "17 JUL 2019",
      title: "Turkey removed",
      detail:
        "The United States announces that Turkey will be removed from the programme after Turkey took delivery of a Russian air-defence system.",
      confidence: "CONFIRMED",
    },
    {
      date: "13 JUN 2025",
      title: "Strikes on Iran",
      detail:
        "Israeli F-35I aircraft take a leading part in the opening strikes of Israel's campaign against Iran.",
      confidence: "CONFIRMED",
    },
    {
      date: "28 FEB 2026",
      title: "Operation Epic Fury",
      detail:
        "U.S. Air Force, Navy and Marine Corps F-35s fly strike missions in the U.S.-Israeli campaign against Iran.",
      confidence: "CONFIRMED",
    },
    {
      date: "19 MAR 2026",
      title: "Damaged over Iran",
      detail:
        "A U.S. Air Force F-35A makes an emergency landing after a combat mission over Iran. It is reported to have been hit by ground fire. The pilot is stable.",
      confidence: "REPORTED",
    },
    {
      date: "18 SEP 2026",
      title: "Finland's first jets",
      detail:
        "The first two of Finland's 64 F-35As land at Rovaniemi, inside the Arctic Circle.",
      confidence: "CONFIRMED",
    },
  ],

  variantsHeading: "One family, three forms.",
  variantsIntro:
    "The three variants share a common design, sensors and engine family, but differ in structure, wing and how they take off and land.",
  variants: [
    {
      code: "F-35A",
      name: "Conventional takeoff",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.f35_a,
      caption: "An F-35A on a test flight over California, 2023",
      summary:
        "The smallest and lightest variant, flown by the U.S. Air Force and most export customers. It is the only one with an internal cannon.",
      points: [
        "Internal 25 mm cannon",
        "Rated to 9 g",
        "Flown by most partner air forces",
      ],
    },
    {
      code: "F-35B",
      name: "Short takeoff, vertical landing",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.f35_b,
      caption: "A Royal Air Force F-35B hovering at RIAT, 2025",
      summary:
        "A variant able to land vertically, using a lift fan behind the cockpit and a swivelling rear nozzle. It operates from small carriers and austere airfields.",
      points: [
        "Lift fan behind the cockpit",
        "Swivelling rear exhaust nozzle",
        "Flown by the U.S. Marine Corps and the Royal Navy and Air Force, among others",
      ],
    },
    {
      code: "F-35C",
      name: "Carrier variant",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.f35_c,
      caption: "An F-35C in flight test over Chesapeake Bay",
      summary:
        "A carrier-based variant with a larger wing, folding wingtips and a strengthened undercarriage and tailhook for catapult launches and arrested landings.",
      points: [
        "Larger wing with folding tips",
        "Catapult launch and arrested landing",
        "Flown by the U.S. Navy and Marine Corps",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the F-35A alongside eleven other aircraft. It is the only single-engine fifth-generation design in the table; the F-16 and Gripen are single-engine fourth-generation designs.",

  glossary: [
    {
      term: "Fifth generation",
      definition:
        "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. There is no single agreed definition.",
    },
    {
      term: "Joint Strike Fighter (JSF)",
      definition:
        "The 1990s U.S.-led programme to build a common fighter for the Air Force, Navy and Marine Corps and for allied air forces. It produced the F-35.",
    },
    {
      term: "STOVL",
      definition:
        "Short takeoff and vertical landing. The F-35B achieves this with a lift fan and a swivelling exhaust nozzle, letting it operate without long runways.",
    },
    {
      term: "Distributed Aperture System (DAS)",
      definition:
        "Six infrared cameras spread around the airframe that give the pilot a view in every direction, including below the aircraft, projected onto the helmet visor.",
    },
    {
      term: "AESA radar",
      definition:
        "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
    },
    {
      term: "Technology Refresh 3 (TR-3)",
      definition:
        "An upgrade to the aircraft's core computing and displays that prepares it for later software capabilities. The first TR-3 flight took place in January 2023.",
    },
  ],
  sources: [
    {
      label: "Lockheed Martin — F-35 Lightning II",
      href: "https://www.lockheedmartin.com/en-us/products/f-35.html",
      note: "Manufacturer overview and published specifications",
    },
    {
      label: "Wikipedia — Lockheed Martin F-35 Lightning II",
      href: "https://en.wikipedia.org/wiki/Lockheed_Martin_F-35_Lightning_II",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — F-35 media",
      href: "https://commons.wikimedia.org/wiki/Category:Lockheed_Martin_F-35_Lightning_II",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow manufacturer and U.S. Air Force publications for the F-35A. Anything not officially published has been left out.",
};

export default f35;
