import { Anchor, Layers, Monitor, Radar } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";
import { counts } from "../counts.js";

const silhouette = aircraft.find((entry) => entry.slug === "fa-18").silhouette;

const fa18 = {
  slug: "fa-18",
  badge: "SH",
  footerLabel: "AIRFRAME / F/A-18E/F",
  eyebrow: "Boeing F/A-18E/F Super Hornet",
  title: ["F/A", "18"],
  model: "015",
  tagline:
    "The U.S. Navy's carrier fighter for a quarter of a century: a larger, longer-ranged redesign of the Hornet, flown in single-seat and two-seat versions and as the EA-18G Growler.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["1995", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 460 M680 262 L820 348 M536 262 L396 348",
    canopy: "M594 104 L608 66 L622 104 L618 176 L598 176 Z",
    exhaust: "M562 458 Q580 474 600 460 M616 460 Q636 474 654 458",
  },
  next: {
    href: "#/f-2",
    label: "Mitsubishi F-2",
  },

  designHeading: "Bigger than the Hornet.",
  designIntro:
    "The Super Hornet looks like the Hornet it replaced, but it is a new, larger aircraft designed for longer range and more weapons from a carrier deck.",
  designFeatures: [
    {
      id: "01",
      icon: Anchor,
      kicker: "CARRIER",
      title: "Built for the deck",
      description:
        "Strong landing gear and an arresting hook take the shock of carrier landings, and the wings fold so more aircraft fit on deck and in the hangar.",
      metric: "WINGS",
      value: "FOLDING",
    },
    {
      id: "02",
      icon: Layers,
      kicker: "AIRFRAME",
      title: "A larger Hornet",
      description:
        "About a quarter larger than the original F/A-18, with a third more internal fuel and two more weapon stations. Its intakes are rectangular rather than rounded.",
      metric: "INTERNAL FUEL",
      value: "+33%",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "SENSORS",
      title: "APG-79 radar",
      description:
        "Aircraft built from 2005 have the APG-79 active electronically scanned array radar, which can track air and ground targets at the same time.",
      metric: "RADAR",
      value: "APG-79",
    },
    {
      id: "04",
      icon: Monitor,
      kicker: "UPGRADE",
      title: "Block III",
      description:
        "The latest standard adds a large touchscreen cockpit display, a faster mission computer, better data links and a longer-lasting airframe.",
      metric: "AIRFRAME LIFE",
      value: "10,000 HRS",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "Figures published by the U.S. Navy and Boeing, rounded for display. The single-seat F/A-18E is the reference version.",
  specNotice:
    "Values follow U.S. Navy fact sheets where available. Range depends heavily on the mission, the weapons carried and the use of external tanks.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "CARRIER STRIKE FIGHTER",
      detail:
        "Designed for air defence, strike, reconnaissance and aerial refuelling of other aircraft from aircraft carriers.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "BOEING",
      unit: "UNITED STATES",
      detail:
        "Developed by McDonnell Douglas, which merged with Boeing in 1997, and built in St. Louis, Missouri.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "SUPER HORNET",
      unit: "F/A: FIGHTER / ATTACK",
      detail:
        "The F/A prefix marks an aircraft designed for both fighter and attack missions.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (F: 2)",
      detail:
        "The F/A-18E has one seat. The F/A-18F adds a weapon systems officer in the rear seat.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × F414-GE-400",
      unit: "TURBOFAN",
      detail:
        "Two General Electric F414 engines, each giving about 98 kN with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ENGINE THRUST",
      value: "≈ 98",
      unit: "KILONEWTONS",
      imperial: {
        value: "≈ 22,000",
        unit: "POUNDS",
      },
      detail: "Each F414-GE-400 with afterburner.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "20 MM CANNON",
      unit: "11 EXTERNAL STATIONS",
      detail:
        "An internal M61A2 rotary cannon and eleven stations for up to about 8,000 kilograms of missiles, bombs, fuel tanks and pods.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "RADAR",
      value: "APG-79",
      unit: "AESA",
      detail:
        "Aircraft built before 2005 have the earlier APG-73 radar; later aircraft have the APG-79 AESA.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "18.3",
      unit: "METRES",
      imperial: {
        value: "60.1",
        unit: "FEET",
      },
      detail: "Published length.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "13.6",
      unit: "METRES",
      imperial: {
        value: "44.7",
        unit: "FEET",
      },
      detail: "Wingspan with missiles on the wingtips. About 9.3 metres with the wings folded.",
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
      detail: "Published height.",
      confidence: "CONFIRMED",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 29,900",
      unit: "KILOGRAMS",
      imperial: {
        value: "66,000",
        unit: "POUNDS",
      },
      detail: "U.S. Navy figure.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "MACH 1.8",
      unit: "AT ALTITUDE",
      detail: "U.S. Navy figure, given as Mach 1.8 or more.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "SERVICE CEILING",
      value: "> 15,000",
      unit: "METRES",
      imperial: {
        value: "> 50,000",
        unit: "FEET",
      },
      detail: "U.S. Navy figure, given as more than 50,000 feet.",
      confidence: "CONFIRMED",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 720",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 450",
        unit: "MILES",
      },
      detail:
        "A commonly cited figure for an interdiction mission with external tanks. Real radius depends heavily on the mission and loadout.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "29 NOV 1995",
      unit: "ST. LOUIS, MISSOURI",
      detail: "First flight of the first F/A-18E.",
      confidence: "CONFIRMED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2001",
      unit: "U.S. NAVY",
      detail:
        "The first fleet squadron, VFA-115, was certified to operate the aircraft in June 2001.",
      confidence: "CONFIRMED",
    },
  ],

  historyHeading: "Three decades at sea.",
  historyIntro:
    "The programme in ten dates, from the contract for a bigger Hornet to the Navy's last order for new aircraft.",
  milestones: [
    {
      date: "1992",
      title: "Development ordered",
      detail:
        "The U.S. Navy orders development of an enlarged Hornet after cancelling other new aircraft programmes.",
      confidence: "CONFIRMED",
      source: {
        name: "Boeing",
        href: "https://boeing.mediaroom.com/1999-05-05-Boeing-Super-Hornet-Successfully-Completes-EMD",
      },
    },
    {
      date: "29 NOV 1995",
      title: "First flight",
      detail: "The first F/A-18E makes its maiden flight from St. Louis.",
      confidence: "CONFIRMED",
      source: {
        name: "European Airshows",
        href: "https://www.europeanairshows.co.uk/aviation-anniversaries/november/boeing-f/a-18e/f-super-hornet-first-flight",
      },
    },
    {
      date: "JUN 2001",
      title: "Enters service",
      detail:
        "Strike Fighter Squadron 115 at Naval Air Station Lemoore becomes the first fleet squadron cleared to fly the Super Hornet on its own.",
      confidence: "CONFIRMED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/agency/navy/vfa-115.htm",
      },
    },
    {
      date: "6 NOV 2002",
      title: "First combat",
      detail:
        "Super Hornets from USS Abraham Lincoln strike targets in Iraq during Operation Southern Watch.",
      confidence: "CONFIRMED",
      source: {
        name: "GlobalSecurity.org",
        href: "https://www.globalsecurity.org/military/agency/navy/vfa-115.htm",
      },
    },
    {
      date: "15 AUG 2006",
      title: "Growler flies",
      detail:
        "The first EA-18G Growler, an electronic-attack version of the two-seat F/A-18F, makes its first flight.",
      confidence: "CONFIRMED",
      source: {
        name: "Boeing",
        href: "https://boeing.mediaroom.com/2006-08-16-Boeing-Flies-EA-18G-Growler-for-First-Time",
      },
    },
    {
      date: "MAY 2007",
      title: "Australia orders",
      detail:
        "Australia signs for 24 F/A-18Fs, becoming the first export customer.",
      confidence: "CONFIRMED",
      source: {
        name: "Defence Talk",
        href: "https://www.defencetalk.com/super-hornet-acquisition-contract-signed-11807/",
      },
    },
    {
      date: "18 JUN 2017",
      title: "Air-to-air kill",
      detail:
        "An F/A-18E shoots down a Syrian Su-22 over Syria, the first air-to-air kill by a U.S. Navy fighter since 1991.",
      confidence: "CONFIRMED",
      source: {
        name: "USNI News",
        href: "https://news.usni.org/2017/06/18/navy-super-hornet-shoots-syrian-fighter-near-raqqah",
      },
    },
    {
      date: "JUN 2018",
      title: "Kuwait orders",
      detail: "Kuwait orders 22 F/A-18Es and 6 F/A-18Fs.",
      confidence: "CONFIRMED",
      source: {
        name: "Seapower",
        href: "https://seapowermagazine.org/boeing-to-build-28-super-hornets-for-kuwait/",
      },
    },
    {
      date: "JUN 2020",
      title: "First Block III",
      detail:
        "Boeing delivers the first two Block III test aircraft to the U.S. Navy.",
      confidence: "REPORTED",
      source: {
        name: "Boeing",
        href: "https://boeing.mediaroom.com/2020-06-17-Boeing-Delivers-First-F-A-18-Block-III-Super-Hornets-to-U-S-Navy-for-Flight-Test",
      },
    },
    {
      date: "19 MAR 2024",
      title: "Last order",
      detail:
        "The Navy orders its final 17 new Super Hornets, with deliveries planned to end in 2027, when Boeing will close the production line.",
      confidence: "CONFIRMED",
      source: {
        name: "USNI News",
        href: "https://news.usni.org/2024/03/22/navy-makes-last-planned-super-hornet-buy-secures-technical-data-packages",
      },
    },
  ],

  variantsHeading: "E, F and G.",
  variantsIntro:
    "The single-seat E and two-seat F are built side by side. The EA-18G Growler is an F rebuilt for electronic attack.",
  variants: [
    {
      code: "F/A-18E",
      name: "Single-seat",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.fa18_g3,
      caption: "An F/A-18E of VFA-81 making a high-speed pass, May 2011",
      summary:
        "The single-seat version, flown by most U.S. Navy strike fighter squadrons and by Kuwait.",
      points: [
        "One pilot",
        "Fighter and strike missions",
        "Can refuel other aircraft",
      ],
    },
    {
      code: "F/A-18F",
      name: "Two-seat",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.fa18_g5,
      caption: "An F/A-18F of VFA-103 over the Arabian Sea, October 2012",
      summary:
        "The two-seat version, with a weapon systems officer behind the pilot. Used for training and for complex strike missions, and flown by Australia.",
      points: [
        "Pilot and weapon systems officer",
        "Same weapons as the E",
        "Basis of the Growler",
      ],
    },
    {
      code: "EA-18G",
      name: "Growler",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.fa18_growler,
      caption: "An EA-18G Growler of VAQ-138 over the Pacific, July 2024",
      summary:
        "An electronic-attack version that jams enemy radars and communications, replacing the EA-6B Prowler. Flown by the U.S. Navy and Australia.",
      points: [
        "Wingtip receiver pods",
        "Jamming pods under the wings",
        "First flight in August 2006",
      ],
    },
  ],

  compareIntro:
    `Published dimensions and dates for the F/A-18E alongside ${counts.en.others} other aircraft. Like the J-15T, it was designed from the start to fly from aircraft carriers.`,

  glossary: [
    {
      term: "F/A",
      definition:
        "Fighter/attack: a U.S. designation for aircraft designed for both air-to-air and air-to-ground missions.",
    },
    {
      term: "Arresting hook",
      definition:
        "A hook under the tail that catches a wire across the carrier deck, stopping the aircraft in a short distance.",
    },
    {
      term: "Buddy refuelling",
      definition:
        "One fighter carrying a refuelling pod and extra tanks to refuel others in the air, a role Super Hornets often fly.",
    },
    {
      term: "AESA",
      definition:
        "Active electronically scanned array. A radar made of many small transmitter-receiver modules that steer the beam electronically.",
    },
    {
      term: "Weapon systems officer",
      definition:
        "The crew member in the rear seat of the F/A-18F who runs the sensors and weapons.",
    },
    {
      term: "Electronic attack",
      definition:
        "Jamming or deceiving enemy radars and communications. The EA-18G Growler is built for this role.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Boeing F/A-18E/F Super Hornet",
      href: "https://en.wikipedia.org/wiki/Boeing_F/A-18E/F_Super_Hornet",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — Super Hornet media",
      href: "https://commons.wikimedia.org/wiki/Category:F/A-18E/F_Super_Hornet",
      note: "Public-domain and freely licensed photographs",
    },
  ],
  referenceNote:
    "Figures on this page follow U.S. Navy and manufacturer publications where available. Values marked as reported or estimated vary between sources and missions.",
};

export default fa18;
