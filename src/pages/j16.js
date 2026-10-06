import { Crosshair, Gauge, Radar, Zap } from "lucide-react";

import { aircraft } from "../aircraft.js";
import { photos } from "../photos.js";

const silhouette = aircraft.find((entry) => entry.slug === "j-16").silhouette;

const j16 = {
  slug: "j-16",
  badge: "J16",
  footerLabel: "AIRFRAME / J-16",
  eyebrow: "Shenyang J-16",
  title: ["J-16"],
  model: "010",
  tagline:
    "A large two-seat, twin-engine multirole fighter from Shenyang, developed from the Su-27 family and built in large numbers for the PLA Air Force.",
  heroStats: [
    ["4.5", "Generation"],
    ["02", "Engines"],
    ["2011", "First flight"],
  ],
  silhouette,
  detail: {
    spine: "M608 60 L608 462 M700 262 L846 344 M516 262 L370 344",
    canopy: "M594 110 L608 70 L622 110 L618 176 L598 176 Z",
    exhaust: "M560 452 Q580 468 600 454 M616 454 Q636 468 656 452",
  },
  next: {
    href: "#/j-15",
    label: "Shenyang J-15T",
  },

  designHeading: "A heavy, long-range strike fighter.",
  designIntro:
    "The J-16 keeps the airframe of the Flanker family and updates almost everything inside it. It is used as a long-range strike aircraft as much as a fighter.",
  designFeatures: [
    {
      id: "01",
      icon: Crosshair,
      kicker: "PAYLOAD",
      title: "Heavy weapon load",
      description:
        "A large airframe with a dozen hardpoints lets the J-16 carry a mix of long-range air-to-air missiles and air-to-ground weapons.",
      metric: "HARDPOINTS",
      value: "≈ 12",
    },
    {
      id: "02",
      icon: Radar,
      kicker: "SENSORS",
      title: "AESA radar",
      description:
        "The J-16 is reported to carry an active electronically scanned array radar, a major step up from the mechanically scanned radars of earlier Flankers.",
      metric: "RADAR",
      value: "AESA, REPORTED",
    },
    {
      id: "03",
      icon: Gauge,
      kicker: "RANGE",
      title: "Long endurance",
      description:
        "Large internal fuel tanks and the ability to refuel in flight from tankers such as the Y-20 give it the reach to operate far from its bases.",
      metric: "REFUELLING",
      value: "PROBE",
    },
    {
      id: "04",
      icon: Zap,
      kicker: "ELECTRONIC WARFARE",
      title: "J-16D variant",
      description:
        "A dedicated electronic-warfare version, the J-16D, has wingtip pods and no cannon. It is intended to jam radars and support other strike aircraft.",
      metric: "VARIANT",
      value: "J-16D",
    },
  ],

  specHeading: "The published profile.",
  specIntro:
    "The Chinese government does not publish detailed specifications for the J-16. The figures here are the ones cited by analysts and are based on the Su-30MKK family.",
  specNotice:
    "No official specification sheet exists for the J-16. Figures are inherited from the Su-30 airframe or estimated from photographs.",
  specifications: [
    {
      group: "IDENTITY",
      label: "PRIMARY ROLE",
      value: "MULTIROLE",
      unit: "STRIKE FIGHTER",
      detail:
        "A multirole aircraft used for air defence, strike and, in the J-16D version, electronic warfare.",
      confidence: "REPORTED",
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
      label: "ORIGIN",
      value: "FLANKER FAMILY",
      unit: "SU-27 / SU-30MKK",
      detail:
        "Developed from the Russian-designed Su-27 family, via the Shenyang J-11 and the imported Su-30MKK.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "CREW",
      value: "2",
      unit: "PILOT + WEAPONS OFFICER",
      detail: "A tandem two-seat cockpit.",
      confidence: "CONFIRMED",
    },
    {
      group: "CONFIGURATION",
      label: "POWERPLANT",
      value: "2 × TURBOFAN",
      unit: "AL-31FN → WS-10B",
      detail:
        "Early aircraft used Russian-built AL-31 series engines. Later aircraft are reported to use the Chinese WS-10B.",
      confidence: "REPORTED",
    },
    {
      group: "CONFIGURATION",
      label: "ARMAMENT",
      value: "30 MM CANNON",
      unit: "≈ 12 EXTERNAL STATIONS",
      detail:
        "An internal 30 mm cannon (removed on the J-16D) and around twelve hardpoints on wings and fuselage.",
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
      detail: "Inherited from the Su-30MKK family.",
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
      detail: "Inherited from the Su-30MKK family.",
      confidence: "ESTIMATE",
    },
    {
      group: "DIMENSIONS",
      label: "MAX TAKEOFF WEIGHT",
      value: "≈ 34,000",
      unit: "KILOGRAMS",
      imperial: {
        value: "≈ 75,000",
        unit: "POUNDS",
      },
      detail: "A commonly cited figure for the Su-30MKK family.",
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
      label: "SERVICE CEILING",
      value: "≈ 17,000",
      unit: "METRES",
      imperial: {
        value: "≈ 56,000",
        unit: "FEET",
      },
      detail: "A commonly cited figure for the Flanker family.",
      confidence: "ESTIMATE",
    },
    {
      group: "PERFORMANCE",
      label: "COMBAT RADIUS",
      value: "≈ 1,500",
      unit: "KILOMETRES",
      imperial: {
        value: "≈ 930",
        unit: "MILES",
      },
      detail:
        "A rough figure only. Real radius depends heavily on the mission, loadout and refuelling.",
      confidence: "ESTIMATE",
    },
    {
      group: "PROGRAMME",
      label: "FIRST FLIGHT",
      value: "OCT 2011",
      unit: "SHENYANG, CHINA",
      detail: "First flight of the first prototype, as reported.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "SERVICE ENTRY",
      value: "2013",
      unit: "PLA AIR FORCE",
      detail: "Reported to have entered service with the PLA Air Force.",
      confidence: "REPORTED",
    },
    {
      group: "PROGRAMME",
      label: "AIRCRAFT BUILT",
      value: "≈ 300+",
      unit: "ALL VERSIONS",
      detail:
        "Independent analysts estimate that several hundred have been built. No official figure has been published.",
      confidence: "ESTIMATE",
    },
  ],

  historyHeading: "A quiet workhorse.",
  historyIntro:
    "The programme in eight dates, from Chinese Flanker production to a large PLA fleet and encounters near Japan and the Philippines.",
  milestones: [
    {
      date: "1990s",
      title: "Flanker production begins",
      detail:
        "China acquires Su-27 fighters and begins licensed production at Shenyang as the J-11. The Su-30MKK follows in the 2000s.",
      confidence: "CONFIRMED",
    },
    {
      date: "OCT 2011",
      title: "First flight",
      detail:
        "The first J-16 prototype is reported to fly at Shenyang, based on the two-seat J-11BS and Su-30MKK lineage.",
      confidence: "REPORTED",
    },
    {
      date: "2013",
      title: "Enters service",
      detail:
        "Deliveries to the PLA Air Force begin, initially in small numbers.",
      confidence: "REPORTED",
    },
    {
      date: "2015",
      title: "J-16D seen",
      detail:
        "A two-seat electronic-warfare version with wingtip pods and no cannon is photographed in flight testing.",
      confidence: "REPORTED",
    },
    {
      date: "2019",
      title: "Public appearance",
      detail:
        "J-16 fighters appear in Chinese state media and in Air Force exercises in increasing numbers.",
      confidence: "REPORTED",
    },
    {
      date: "2023",
      title: "Air-show flypasts",
      detail:
        "J-16 fighters take part in public air-show formations and refuel from YY-20 tankers in front of spectators.",
      confidence: "CONFIRMED",
    },
    {
      date: "DEC 2023",
      title: "Seen near Japan",
      detail:
        "The Japanese Ministry of Defense publishes air-to-air photographs of a J-16 operating near Japan.",
      confidence: "CONFIRMED",
    },
    {
      date: "3 OCT 2026",
      title: "Close pass over the South China Sea",
      detail:
        "The Philippine armed forces say a J-16 repeatedly flew close to a Philippine patrol aircraft near Scarborough Shoal.",
      confidence: "CONFIRMED",
    },
  ],

  variantsHeading: "J-16 and J-16D.",
  variantsIntro:
    "Two main versions of the J-16 are known: the multirole aircraft and an electronic-warfare version derived from it.",
  variants: [
    {
      code: "J-16",
      name: "Multirole strike fighter",
      seats: "2",
      status: "IN SERVICE",
      photo: photos.j16_a,
      caption: "A J-16 on static display at the Changchun air show, 2025",
      summary:
        "The standard version, with a two-seat cockpit, a reported AESA radar and no canards. It is the most common J-16 in service.",
      points: [
        "Two-seat multirole",
        "Reported AESA radar",
        "Refuelling probe on the nose",
      ],
    },
    {
      code: "J-16D",
      name: "Electronic warfare",
      seats: "2",
      status: "IN SERVICE",
      caption: "No freely licensed photograph is available",
      summary:
        "An electronic-warfare version with jamming pods on the wingtips, no cannon and modified sensors. It is used to jam radars and support strike aircraft.",
      points: [
        "Wingtip jamming pods",
        "No internal cannon",
        "Escort and stand-off jamming",
      ],
    },
  ],

  compareIntro:
    "Published dimensions and dates for the J-16 alongside the other aircraft. Its numbers are inherited from the Su-30 airframe, so they are estimates.",
  glossary: [
    {
      term: "Flanker",
      definition:
        "The NATO reporting name for the Su-27 family of aircraft and its many derivatives, including the J-11 and J-16.",
    },
    {
      term: "Su-30MKK",
      definition:
        "A two-seat multirole Flanker built for China by Russia in the early 2000s. The J-16 is developed from its lineage.",
    },
    {
      term: "J-16D",
      definition:
        "A dedicated electronic-warfare version of the J-16, with wingtip pods and no cannon.",
    },
    {
      term: "AESA radar",
      definition:
        "Active electronically scanned array. A radar whose beam is steered electronically rather than by moving a dish.",
    },
    {
      term: "Y-20",
      definition:
        "China's large military transport, also built as the YY-20 tanker that refuels the J-16 in flight.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Shenyang J-16",
      href: "https://en.wikipedia.org/wiki/Shenyang_J-16",
      note: "General reference and citations",
    },
    {
      label: "Wikimedia Commons — J-16 media",
      href: "https://commons.wikimedia.org/w/index.php?search=Shenyang+J-16&ns6=1",
      note: "Freely licensed photographs",
    },
  ],
  referenceNote:
    "The J-16 has no official specification sheet. Figures on this page are inherited from the Su-30 family or estimated by analysts and are marked accordingly.",
};

export default j16;
