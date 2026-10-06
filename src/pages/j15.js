import { Anchor, Radar, Ship, Zap } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "j-15").silhouette;

const j15 = {
  slug: "j-15",
  badge: "J15",
  footerLabel: "AIRFRAME / J-15T",
  eyebrow: "Shenyang J-15 / J-15T Flying Shark",
  title: ["J-15T"],
  model: "011",
  tagline:
    "China's carrier-based heavy fighter, and in its J-15T version the first Chinese fighter fitted to be launched by an electromagnetic catapult.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["2009", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 466 M700 268 L846 346 M516 268 L370 346",
    canopy: "M594 112 L608 70 L622 112 L618 176 L598 176 Z",
    exhaust: "M560 456 Q580 470 600 456 M616 456 Q636 470 656 454",
  },
  next: {
    href: "#/f-15ex",
    label: "Boeing F-15EX",
  },

  designHeading: "Built for the deck.",
  designIntro:
    "The J-15 is a large twin-engine fighter adapted to operate from a carrier. The T version is the one built for a catapult launch.",
  designFeatures: [
    {
      id: "01",
      icon: Anchor,
      kicker: "CARRIER",
      title: "Folding wings",
      description:
        "The wings and tailplane fold so the aircraft takes up less space in the hangar and on deck. Canards help slow-speed handling on approach.",
      metric: "DECK SPACE",
      value: "FOLDING WINGS",
    },
    {
      id: "02",
      icon: Ship,
      kicker: "LAUNCH",
      title: "Ski-jump to catapult",
      description:
        "The first J-15s launch from a ski-jump ramp, which limits their fuel and weapon load. The J-15T has a strengthened nose leg with a catapult launch bar so it can be launched from Fujian.",
      metric: "J-15T",
      value: "CATAPULT",
    },
    {
      id: "03",
      icon: Radar,
      kicker: "SENSORS",
      title: "Radar upgrades",
      description:
        "Later aircraft are reported to carry a more capable radar, and the J-15T is thought to have updated avionics and weapons.",
      metric: "RADAR",
      value: "UPDATED",
    },
    {
      id: "04",
      icon: Zap,
      kicker: "MISSIONS",
      title: "Electronic warfare version",
      description:
        "A two-seat J-15D is intended for electronic warfare, and a two-seat J-15S is used for training. Both are visible in photographs from 2024.",
      metric: "VARIANT",
      value: "J-15D",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "No official specification has been published for the J-15 or J-15T. Figures here are inherited from the Su-33 airframe or estimated from photographs.",
  specNotice:
    "The J-15 is based on the Russian Su-33 airframe, so the figures listed are for the Su-33 family and are approximate. The J-15T may differ.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "CARRIER FIGHTER",
      detail:
        "A heavy carrier-based fighter for air defence and strike.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "MANUFACTURER",
      value: "SHENYANG",
      unit: "AVIC · CHINA",
      detail: "Built by Shenyang Aircraft Corporation, part of AVIC.",
      confidence: "CONFIRMED",
    },
    {
      group: "IDENTITY",
      label: "NAME",
      value: "FLYING SHARK",
      unit: "J-15",
      detail:
        "Flying Shark (Feisha) is the popular name for the J-15 in Chinese media. The T stands for the catapult-capable version.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "1",
      unit: "PILOT (D, S: 2)",
      detail:
        "The standard J-15 is single-seat. The J-15D and J-15S have two seats.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × TURBOFAN",
      unit: "AL-31F → WS-10",
      detail:
        "The original J-15 flew with AL-31 series engines. Later aircraft are reported to use the Chinese WS-10 series.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "30 MM CANNON",
      unit: "≈ 12 EXTERNAL STATIONS",
      detail:
        "An internal cannon and around a dozen external stations for missiles and bombs.",
      confidence: "REPORTED",
    },
    {
      group: "DIMENSIONS",
      label: "LENGTH",
      value: "≈ 21.9",
      unit: "METRES",
      imperial: {
        value: "≈ 71.9",
        unit: "FEET",
      },
      detail: "A commonly cited figure, inherited from the Su-33 family.",
      confidence: "ESTIMATE",
    },
    {
      group: "DIMENSIONS",
      label: "WINGSPAN",
      value: "≈ 14.7",
      unit: "METRES",
      imperial: {
        value: "≈ 48.2",
        unit: "FEET",
      },
      detail: "Unfolded. The folded span is much smaller.",
      confidence: "ESTIMATE",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 32,500",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 71,700",
        unit: "POUNDS",
      },
      detail:
        "A commonly cited figure. Actual weight from a ski-jump ramp is lower.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "MAXIMUM SPEED",
      value: "≈ MACH 2",
      unit: "AT ALTITUDE",
      detail: "A commonly cited figure for the Flanker family.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 1,000",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 620",
        unit: "MILES",
      },
      detail:
        "A rough figure only. Real radius depends heavily on the mission and take-off method.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "31 AUG 2009",
      unit: "CHINA",
      detail: "First flight of the first J-15 prototype, as reported.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2012",
      unit: "PLA NAVY",
      detail:
        "The J-15 made its first arrested landing on the carrier Liaoning in November 2012 and entered service soon after.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "≈ 60–100+",
      unit: "ALL VERSIONS",
      detail:
        "Independent estimates vary widely. No official figure has been published.",
      confidence: "ESTIMATE",
    },
  ],

  historyHeading: "From ski-jump to catapult.",
  historyIntro:
    "The programme in ten dates, from the Su-33 prototype to heavily armed launches from the catapult carrier Fujian.",
  milestones: [
    {
      date: "2001",
      title: "Su-33 prototype acquired",
      detail:
        "China acquires an unfinished Su-33 prototype (T-10K-3) from Ukraine, which becomes the basis for the J-15.",
      confidence: "REPORTED",
    },
    {
      date: "31 AUG 2009",
      title: "First flight",
      detail:
        "The first J-15 prototype is reported to fly with Russian AL-31 engines.",
      confidence: "REPORTED",
    },
    {
      date: "25 NOV 2012",
      title: "First carrier landing",
      detail:
        "A J-15 makes its first arrested landing on the aircraft carrier Liaoning, followed by ski-jump take-off.",
      confidence: "CONFIRMED",
    },
    {
      date: "2019",
      title: "Shandong carrier",
      detail:
        "The second carrier, Shandong, enters service and operates J-15 aircraft in larger numbers.",
      confidence: "CONFIRMED",
    },
    {
      date: "2022",
      title: "Seen at sea",
      detail:
        "The Japanese Ministry of Defense publishes photographs of J-15 aircraft operating from the carrier Liaoning near Japan.",
      confidence: "CONFIRMED",
    },
    {
      date: "2021–2023",
      title: "J-15T seen",
      detail:
        "A version with a catapult launch bar on the nose gear is photographed in flight and on land, widely read as the J-15T.",
      confidence: "REPORTED",
    },
    {
      date: "NOV 2024",
      title: "Zhuhai display",
      detail:
        "J-15T and J-15D aircraft appear at Airshow China in Zhuhai.",
      confidence: "CONFIRMED",
    },
    {
      date: "NOV 2025",
      title: "Fujian catapult",
      detail:
        "Video shows a J-15T launching from the carrier Fujian by electromagnetic catapult.",
      confidence: "REPORTED",
    },
    {
      date: "6 DEC 2025",
      title: "Radar lock on Japanese jets",
      detail:
        "Japan says J-15s from the carrier Liaoning twice locked their radar on Japanese F-15s near Okinawa. Japan protests to China.",
      confidence: "CONFIRMED",
    },
    {
      date: "JUL 2026",
      title: "Heavy anti-ship load",
      detail:
        "Images show a J-15T launching from the Fujian with four YJ-83K anti-ship missiles.",
      confidence: "REPORTED",
    },
  ],

  variantsHeading: "J-15, J-15T and J-15D.",
  variantsIntro:
    "Three versions are shown here: the original ski-jump aircraft, the catapult-capable J-15T and the two-seat electronic-warfare J-15D.",
  variants: [
    {
      code: "J-15",
      name: "Ski-jump fighter",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.j15_base,
      caption: "Two J-15s in the air near Japan, May 2022",
      summary:
        "The original single-seat version, developed from the Su-33. It takes off from the ramp of Liaoning and Shandong with a reduced load.",
      points: [
        "Ski-jump take-off",
        "Folding wings and canards",
        "AL-31 and later WS-10 engines",
      ],
    },
    {
      code: "J-15T",
      name: "Catapult fighter",
      seats: "1",
      status: "IN SERVICE",
      photo: photos.j15_t,
      caption: "A J-15T launched from the carrier Fujian, 2025",
      summary:
        "A version with a strengthened nose gear and catapult launch bar for the Fujian's electromagnetic catapults, which allows a heavier load than a ski-jump launch.",
      points: [
        "Electromagnetic catapult launch",
        "Reported updated avionics",
        "Operates from Fujian",
      ],
    },
    {
      code: "J-15D",
      name: "Electronic warfare",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.j15_d,
      caption: "Two J-15Ts and a J-15D on display at Zhuhai, 2024",
      summary:
        "A two-seat version with jamming pods on the wingtips, intended to jam radars and support other aircraft from a carrier.",
      points: [
        "Two-seat electronic warfare",
        "Wingtip jamming pods",
        "Shown in public in 2024",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the J-15 alongside the other aircraft. Its numbers are inherited from the Su-33 airframe, so they are estimates.",
  glossary: [
    {
      term: "CATOBAR",
      definition:
        "Catapult-assisted take-off but arrested recovery. The launch method used by the newest Chinese carrier, Fujian, and by American carriers.",
    },
    {
      term: "STOBAR",
      definition:
        "Short take-off but arrested recovery. Aircraft launch from a ski-jump ramp and land using arrestor wires, as on Liaoning and Shandong.",
    },
    {
      term: "EMALS",
      definition:
        "Electromagnetic aircraft launch system. A catapult that uses electric motors rather than steam to accelerate the aircraft.",
    },
    {
      term: "Su-33",
      definition:
        "The Russian carrier-based Flanker on which the J-15 is based. It was flown from the carrier Admiral Kuznetsov.",
    },
    {
      term: "Arrestor wire",
      definition:
        "A cable across the deck that catches the tail hook of a landing aircraft and brings it to a stop in a short distance.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Shenyang J-15",
      href: "https://en.wikipedia.org/wiki/Shenyang_J-15",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — J-15 media",
      href: "https://commons.wikimedia.org/w/index.php?search=Shenyang+J-15&ns6=1",
      note: "Freely licensed photographs",
    },
  ],
  referenceNote:
    "The J-15 has no official specification sheet. Figures on this page are inherited from the Su-33 family or estimated by analysts and are marked accordingly.",
};

export default j15;
