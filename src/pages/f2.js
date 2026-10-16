import { Layers, Radar, Ship, Wind } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";
import { counts } from "../counts.js";

const silhouette = aircraft.find((entry) => entry.slug === "f-2").silhouette;

const f2 = {
  slug: "f-2",
  badge: "F2",
  footerLabel: "AIRFRAME / F-2",
  eyebrow: "Mitsubishi F-2",
  title: ["F", "2"],
  model: "016",
  tagline:
    "Japan's single-engine fighter, developed with the United States from the F-16 but with a larger composite wing, a Japanese radar and a strong focus on attacking ships.",
  heroStats: [
    ["04", "Generation"],
    ["01", "Engine"],
    ["1995", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 50 L608 464 M666 282 L692 410 M550 282 L524 410",
    canopy: "M594 118 L608 76 L622 118 L618 170 L598 170 Z",
    exhaust: "M576 446 Q608 466 640 446",
  },
  next: {
    href: "#/j-20",
    label: "Chengdu J-20",
  },

  designHeading: "An F-16, rebuilt for Japan.",
  designIntro:
    "The F-2 began as a modified F-16 but changed so much in development that it became a different aircraft, shaped by Japan's need to defend its sea approaches.",
  designFeatures: [
    {
      id: "01",
      icon: Wind,
      kicker: "AERODYNAMICS",
      title: "A larger composite wing",
      description:
        "Its wing has about a quarter more area than the F-16's and was one of the first on a fighter built from co-cured composite materials, which saves weight.",
      metric: "WING AREA",
      value: "34.8 M²",
    },
    {
      id: "02",
      icon: Radar,
      kicker: "SENSORS",
      title: "An early AESA radar",
      description:
        "The Mitsubishi Electric J/APG-1 was the first active electronically scanned array radar fitted to a production fighter. Aircraft have since been upgraded to the J/APG-2.",
      metric: "RADAR",
      value: "J/APG-2",
    },
    {
      id: "03",
      icon: Ship,
      kicker: "ROLE",
      title: "Ship attack",
      description:
        "The F-2 was designed above all to strike ships approaching Japan, and can carry up to four large anti-ship missiles.",
      metric: "ANTI-SHIP MISSILES",
      value: "UP TO 4",
    },
    {
      id: "04",
      icon: Layers,
      kicker: "AIRFRAME",
      title: "Longer and heavier",
      description:
        "The fuselage is slightly longer than the F-16's, with larger tailplanes, a three-piece canopy and a more powerful engine for the heavier aircraft.",
      metric: "LENGTH",
      value: "15.5 M",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by Japan's Ministry of Defense and Mitsubishi Heavy Industries, rounded for display. The single-seat F-2A is the reference version.",
  specNotice:
    "Values follow Japanese government and manufacturer publications where available. Performance figures are commonly cited values marked as reported.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "ANTI-SHIP · AIR DEFENCE",
      detail:
        "Designed as a support fighter for attacking ships and ground targets, and also used for air defence.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "MITSUBISHI",
      unit: "JAPAN",
      detail:
        "Built by Mitsubishi Heavy Industries, with Lockheed Martin as the main partner and builder of some parts.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "F-2",
      unit: "NO OFFICIAL NAME",
      detail:
        "The aircraft has no official name. Viper Zero is an unofficial nickname, from the F-16's Viper and the wartime Zero fighter.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (F-2B: 2)",
      detail:
        "The F-2A has one seat. The F-2B is a two-seat trainer that keeps the combat systems.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "1 × F110-IHI-129",
      unit: "TURBOFAN",
      detail:
        "A General Electric F110 built under licence by IHI, giving about 131 kN with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "20 MM CANNON",
      unit: "11 EXTERNAL STATIONS",
      detail:
        "An internal JM61A2 rotary cannon, two wingtip missile rails, eight stations under the wings and one under the fuselage.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "J/APG-1 → J/APG-2",
      unit: "AESA",
      detail:
        "The J/APG-1 was the first AESA radar on a production fighter. The upgraded J/APG-2 was fitted later.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "15.5",
      unit: "METRES",
      imperial: {
        value: "50.9",
        unit: "FEET",
      },
      detail: "Published length.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "11.1",
      unit: "METRES",
      imperial: {
        value: "36.5",
        unit: "FEET",
      },
      detail: "Wingspan over the wingtip missile launchers.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "HEIGHT",
      value: "5.0",
      unit: "METRES",
      imperial: {
        value: "16.3",
        unit: "FEET",
      },
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 22,100",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 48,700",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 2 CLASS",
      unit: "AT ALTITUDE",
      detail: "Commonly given as about Mach 2 at high altitude.",
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
      detail: "A commonly cited figure.",
      confidence: "REPORTED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 830",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 520",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure for an anti-ship mission. Real radius depends heavily on the mission and loadout.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "7 OCT 1995",
      unit: "NAGOYA, JAPAN",
      detail: "First flight of the first prototype, the XF-2A.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2000",
      unit: "JAPAN AIR SELF-DEFENSE FORCE",
      detail:
        "Delayed from 1999 by problems found in the wing structure during testing.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "98",
      unit: "INCLUDING 4 PROTOTYPES",
      detail:
        "Larger planned orders were cut in 2004. The last of 94 production aircraft was delivered in 2011.",
      confidence: "CONFIRMED",
    },
  ],

  historyHeading: "A fighter for an island nation.",
  historyIntro:
    "The programme in eleven dates, from the decision to build on the F-16 to the choice of the fighter that will replace it.",
  milestones: [
    {
      date: "OCT 1987",
      title: "Based on the F-16",
      detail:
        "Japan and the United States agree that Japan's next support fighter, the FS-X, will be developed from the F-16.",
      confidence: "CONFIRMED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/world/japan/f-2-decision.htm",
      },
    },
    {
      date: "1989",
      title: "Agreement revised",
      detail:
        "After a debate in the U.S. Congress over sharing technology, the two governments revise the terms of the joint development.",
      confidence: "CONFIRMED",
      source: {
        name: "The Christian Science Monitor",
        href: "https://www.csmonitor.com/1989/0623/ofsx.html",
      },
    },
    {
      date: "7 OCT 1995",
      title: "First flight",
      detail: "The first prototype, the XF-2A, makes its maiden flight at Nagoya.",
      confidence: "CONFIRMED",
      source: {
        name: "Federation of American Scientists",
        href: "https://man.fas.org/dod-101/sys/ac/row/f-2.htm",
      },
    },
    {
      date: "2000",
      title: "Enters service",
      detail:
        "The F-2 enters service with the Japan Air Self-Defense Force, after a delay caused by wing problems.",
      confidence: "CONFIRMED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/world/japan/f-2.htm",
      },
    },
    {
      date: "2004",
      title: "Production cut",
      detail:
        "Japan cuts the total to 98 aircraft, including the four prototypes, because of the aircraft's high unit cost.",
      confidence: "REPORTED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/world/japan/f-2-program.htm",
      },
    },
    {
      date: "11 MAR 2011",
      title: "Tsunami",
      detail:
        "The tsunami that follows the Tōhoku earthquake floods Matsushima Air Base and damages 18 F-2Bs. Some are later repaired and return to service.",
      confidence: "CONFIRMED",
      source: {
        name: "U.S. Indo-Pacific Command",
        href: "https://www.pacom.mil/Media/News/News-Articles/Article/586516/restored-aircraft-signifies-recovery-from-disaster/",
      },
    },
    {
      date: "27 SEP 2011",
      title: "Last delivery",
      detail: "The last production F-2 is delivered and the line closes.",
      confidence: "CONFIRMED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/world/japan/f-2-program.htm",
      },
    },
    {
      date: "MAR 2016",
      title: "Back at Matsushima",
      detail:
        "The F-2B training squadron returns to Matsushima, five years after the tsunami forced it to move.",
      confidence: "REPORTED",
      source: {
        name: "Wikipedia",
        href: "https://en.wikipedia.org/wiki/21st_Fighter_Training_Squadron_(JASDF)",
      },
    },
    {
      date: "AUG 2022",
      title: "Pitch Black",
      detail:
        "F-2s fly in Exercise Pitch Black in northern Australia, the first time Japanese fighters take part.",
      confidence: "REPORTED",
      source: {
        name: "Defense News",
        href: "https://www.defensenews.com/global/asia-pacific/2022/08/25/japanese-south-korean-warplanes-make-a-showing-at-australian-drill/",
      },
    },
    {
      date: "9 DEC 2022",
      title: "Successor chosen",
      detail:
        "Japan, the United Kingdom and Italy announce GCAP, a joint fighter that will replace the F-2 from about 2035.",
      confidence: "CONFIRMED",
      source: {
        name: "UK Government",
        href: "https://www.gov.uk/government/publications/joint-leaders-statement-uk-italy-japan-9-december-2022",
      },
    },
    {
      date: "JAN 2023",
      title: "Veer Guardian",
      detail:
        "F-2s and F-15s train with Indian Air Force Su-30MKIs in Japan, the two countries' first fighter exercise.",
      confidence: "REPORTED",
      source: {
        name: "Embassy of India, Tokyo",
        href: "https://www.indembassy-tokyo.gov.in/eoityo_listview/NjUy",
      },
    },
  ],

  variantsHeading: "A, B and the prototypes.",
  variantsIntro:
    "Production covered the single-seat F-2A and the two-seat F-2B. Four XF-2 prototypes were built first and are shown as a silhouette.",
  variants: [
    {
      code: "F-2A",
      name: "Single-seat",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.f2_g7,
      caption: "An F-2A in a flying display at Komatsu Air Base, September 2018",
      summary:
        "The single-seat fighter, which makes up most of the fleet and carries the anti-ship role.",
      points: [
        "One pilot",
        "Up to four anti-ship missiles",
        "J/APG-2 radar after upgrade",
      ],
    },
    {
      code: "F-2B",
      name: "Two-seat",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.f2_b,
      caption: "An F-2B of 3 Squadron taking off from Misawa, March 2008",
      summary:
        "A two-seat version used mainly for training, with the same weapons and sensors as the F-2A.",
      points: [
        "Second cockpit for an instructor",
        "Same weapons and sensors",
        "Most based at Matsushima",
      ],
    },
    {
      code: "XF-2",
      name: "Prototypes",
      seats: "1–2",
      status: "4 BUILT",
      summary:
        "Two single-seat XF-2A and two two-seat XF-2B prototypes used for flight testing from 1995.",
      points: [
        "First flight in October 1995",
        "Used to find and fix wing problems",
        "Two single-seat, two two-seat",
      ],
    },
  ],

  compareIntro:
    `Published dimensions and dates for the F-2A alongside ${counts.en.others} other aircraft. It is the largest of the single-engine fourth-generation designs in the table, with the F-16 and Gripen.`,

  glossary: [
    {
      term: "FS-X",
      definition:
        "Fighter Support eXperimental, the name of the development programme that produced the F-2.",
    },
    {
      term: "Support fighter",
      definition:
        "The Japanese term for a fighter whose main role is attacking ships and ground targets in support of other forces.",
    },
    {
      term: "Co-cured composite",
      definition:
        "Composite parts cured together in one piece rather than fastened, which makes a lighter and stronger structure.",
    },
    {
      term: "AESA",
      definition:
        "Active electronically scanned array. A radar made of many small transmitter-receiver modules that steer the beam electronically.",
    },
    {
      term: "ASM-3",
      definition:
        "A Japanese supersonic anti-ship missile carried by the F-2.",
    },
    {
      term: "GCAP",
      definition:
        "Global Combat Air Programme, the fighter Japan, the United Kingdom and Italy are developing together to replace the F-2.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Mitsubishi F-2",
      href: "https://en.wikipedia.org/wiki/Mitsubishi_F-2",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — F-2 media",
      href: "https://commons.wikimedia.org/wiki/Category:Mitsubishi_F-2",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow Japanese government and manufacturer publications where available. Values marked as reported vary between sources.",
};

export default f2;
