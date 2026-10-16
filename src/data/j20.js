// J-20 content for the shared page sections, kept out of J20.jsx so the
// comparison and timeline pages can read the specifications and milestones
// without loading the page component.

import { photos } from "../photos.js";
import { counts } from "../counts.js";

export const specifications = [
  {
    group: "IDENTITY",
    label: "PRIMARY ROLE",
    value: "AIR SUPERIORITY",
    unit: "STEALTH FIGHTER",
    detail:
      "Publicly described as an air-superiority fighter with a secondary precision-strike capability.",
    confidence: "REPORTED",
  },
  {
    group: "IDENTITY",
    label: "MANUFACTURER",
    value: "CHENGDU",
    unit: "AIRCRAFT CORPORATION",
    detail:
      "Developed and manufactured by Chengdu Aircraft Corporation in China.",
    confidence: "CONFIRMED",
  },
  {
    group: "CONFIGURATION",
    label: "CREW",
    value: "1",
    unit: "PILOT",
    detail:
      "The original and baseline production aircraft use a single-seat configuration.",
    confidence: "CONFIRMED",
  },
  {
    group: "DIMENSIONS",
    label: "LENGTH",
    value: "20.4–21.2",
    unit: "METRES",
    imperial: {
      value: "66.9–69.6",
      unit: "FEET",
    },
    detail:
      "Approximate range found across public references. Values vary between sources.",
    confidence: "ESTIMATE",
  },
  {
    group: "DIMENSIONS",
    label: "WINGSPAN",
    value: "13.0–13.5",
    unit: "METRES",
    imperial: {
      value: "42.7–44.3",
      unit: "FEET",
    },
    detail:
      "Approximate published wingspan depending on the source and aircraft variant.",
    confidence: "ESTIMATE",
  },
  {
    group: "DIMENSIONS",
    label: "HEIGHT",
    value: "4.4–4.7",
    unit: "METRES",
    imperial: {
      value: "14.4–15.4",
      unit: "FEET",
    },
    detail:
      "Approximate published height rather than an official manufacturer measurement.",
    confidence: "ESTIMATE",
  },
  {
    group: "PROGRAMME",
    label: "FIRST FLIGHT",
    value: "11 JAN 2011",
    unit: "CHENGDU",
    detail:
      "The date associated with the aircraft's publicly reported maiden flight.",
    confidence: "CONFIRMED",
  },
  {
    group: "PROGRAMME",
    label: "SERVICE ENTRY",
    value: "MAR 2017",
    unit: "PLAAF",
    detail:
      "The J-20 was publicly reported as entering service in March 2017.",
    confidence: "CONFIRMED",
  },
  {
    group: "IDENTITY",
    label: "NAME",
    value: "MIGHTY DRAGON",
    unit: "AS USED IN CHINESE MEDIA",
    detail:
      "The name commonly used for the aircraft in Chinese media and public commentary.",
    confidence: "REPORTED",
  },
  {
    group: "CONFIGURATION",
    label: "POWERPLANT",
    value: "2 × WS-10C",
    unit: "AFTERBURNING TURBOFANS",
    detail:
      "Reported for later production aircraft. Early examples used Russian-derived AL-31 series engines; the WS-15 is reported in testing.",
    confidence: "REPORTED",
  },
  {
    group: "CONFIGURATION",
    label: "WEAPON BAYS",
    value: "1 + 2",
    unit: "MAIN + SIDE BAYS",
    detail:
      "A main ventral bay for longer-range missiles and two side bays for short-range missiles, as seen at public displays.",
    confidence: "REPORTED",
  },
  {
    group: "DIMENSIONS",
    label: "MAX TAKEOFF WEIGHT",
    value: "≈ 37,000",
    unit: "KILOGRAMS",
    imperial: {
      value: "≈ 81,600",
      unit: "POUNDS",
    },
    detail:
      "A commonly cited open-source estimate. No official figure has been published.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "MAXIMUM SPEED",
    value: "MACH 2.0",
    unit: "APPROXIMATE",
    detail:
      "A widely quoted estimate for speed at altitude; actual performance depends on the engines fitted.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "SERVICE CEILING",
    value: "≈ 20,000",
    unit: "METRES",
    imperial: {
      value: "≈ 65,600",
      unit: "FEET",
    },
    detail:
      "An open-source estimate repeated across public references.",
    confidence: "ESTIMATE",
  },
  {
    group: "PERFORMANCE",
    label: "COMBAT RADIUS",
    value: "≈ 2,000",
    unit: "KILOMETRES",
    imperial: {
      value: "≈ 1,240",
      unit: "MILES",
    },
    detail:
      "Estimates vary widely with mission profile and external fuel. The long airframe suggests a large internal fuel load.",
    confidence: "ESTIMATE",
  },
  {
    group: "PROGRAMME",
    label: "AIRFRAMES BUILT",
    value: "300+",
    unit: "OPEN-SOURCE ESTIMATE",
    detail:
      "Analyst estimates based on serial numbers and imagery as of 2025. Production totals are not officially published.",
    confidence: "ESTIMATE",
  },
];

export const milestones = [
  {
    date: "LATE 1990s",
    title: "Programme origins",
    detail:
      "China begins studies for a next-generation fighter, referred to in Western reporting as the J-XX programme.",
    confidence: "REPORTED",
    source: {
      name: "Wikipedia",
      href: "https://en.wikipedia.org/wiki/J-XX",
    },
  },
  {
    date: "2008",
    title: "Chengdu design selected",
    detail:
      "Chengdu's canard-delta proposal is reported to have been chosen over a competing Shenyang design.",
    confidence: "REPORTED",
    source: {
      name: "Wikipedia",
      href: "https://en.wikipedia.org/wiki/J-XX",
    },
  },
  {
    date: "11 JAN 2011",
    title: "First flight",
    detail:
      "The first prototype flies from Chengdu. Photographs taken from outside the airfield circulate worldwide within hours.",
    confidence: "CONFIRMED",
  },
  {
    date: "MAR 2014",
    title: "Revised prototype",
    detail:
      "A refined prototype appears with reshaped intakes, clipped canard and tail tips, a new canopy and a chin-mounted electro-optical sensor housing.",
    confidence: "CONFIRMED",
  },
  {
    date: "LATE 2015",
    title: "Initial production",
    detail:
      "Aircraft in yellow primer are photographed at Chengdu, widely read as the start of low-rate initial production.",
    confidence: "REPORTED",
    source: {
      name: "AIN",
      href: "https://www.ainonline.com/aviation-news/defense/2016-02-14/chengdus-j-20-enters-production",
    },
  },
  {
    date: "1 NOV 2016",
    title: "Public debut",
    detail:
      "Two J-20s make a brief flypast at Airshow China in Zhuhai — the aircraft's first official public appearance.",
    confidence: "CONFIRMED",
  },
  {
    date: "MAR 2017",
    title: "Service entry",
    detail:
      "State media report that the aircraft has entered service with the People's Liberation Army Air Force.",
    confidence: "CONFIRMED",
  },
  {
    date: "FEB 2018",
    title: "Combat units",
    detail:
      "The air force announces that the J-20 has been commissioned into combat units.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2021",
    title: "Domestic engines on show",
    detail:
      "J-20s fitted with Chinese WS-10C engines fly at Airshow China, replacing the Russian-derived engines used by earlier aircraft.",
    confidence: "CONFIRMED",
  },
  {
    date: "OCT 2021",
    title: "Twin-seat variant seen",
    detail:
      "A tandem two-seat airframe is photographed at Chengdu, the first twin-seat stealth fighter to be seen publicly.",
    confidence: "REPORTED",
    source: {
      name: "The Aviationist",
      href: "https://theaviationist.com/2021/10/27/worlds-first-two-seat-stealth-fighter/",
    },
  },
  {
    date: "2022–2023",
    title: "Updated airframe and WS-15",
    detail:
      "A prototype with a raised spine behind the canopy is photographed, followed by reports of flights with the more powerful WS-15 engine.",
    confidence: "REPORTED",
    source: {
      name: "The War Zone",
      href: "https://www.twz.com/this-could-be-our-first-glimpse-of-chinas-enhanced-j-20-stealth-fighter",
    },
  },
  {
    date: "NOV 2024",
    title: "J-20S unveiled",
    detail:
      "The twin-seat J-20S is presented officially at Airshow China in Zhuhai.",
    confidence: "CONFIRMED",
  },
  {
    date: "SEP 2025",
    title: "Family flypast",
    detail:
      "J-20 variants fly together over Beijing during the Victory Day parade, and a J-20 is placed on static public display at Changchun later that month.",
    confidence: "REPORTED",
    source: {
      name: "China Daily",
      href: "https://global.chinadaily.com.cn/a/202509/20/WS68cde2e4a3108622abca1dd1.html",
    },
  },
  {
    date: "JAN 2026",
    title: "J-20A flight testing",
    detail:
      "State media show J-20A aircraft in yellow primer flying in tests, reported to be powered by the more powerful Chinese WS-15 engine. Service with the WS-15 had not been confirmed.",
    confidence: "REPORTED",
    source: {
      name: "The EurAsian Times",
      href: "https://www.eurasiantimes.com/chinas-j-20a-fat-neck-closes-gap-with-f-35-ws-15-engine-leap-puts-mighty-dragon-in-supercruise-league/",
    },
  },
];

export const variants = [
  {
    code: "J-20",
    name: "Baseline",
    seats: "1",
    status: "IN SERVICE",
    photo: photos.j20_base,
    caption: "Flypast at Airshow China, Zhuhai, 2016",
    summary:
      "The original single-seat production aircraft. Early examples flew with Russian-derived AL-31 series engines; later batches are reported to use the Chinese WS-10C.",
    points: [
      "Single-seat canard-delta layout",
      "Main ventral bay plus two side bays",
      "In service since 2017",
    ],
  },
  {
    code: "J-20A",
    name: "Updated single-seat",
    seats: "1",
    status: "REPORTED",
    photo: photos.j20_a,
    caption: "J-20s in the 2019 National Day flypast, Beijing",
    summary:
      "An updated single-seat airframe with a raised, blended spine behind the canopy. Widely associated with the WS-15 engine, which is reported to be fitted to production aircraft from 2026.",
    points: [
      "Reshaped canopy and dorsal spine",
      "Associated with WS-15 engines",
      "Designation usage varies between sources",
    ],
  },
  {
    code: "J-20S",
    name: "Twin-seat",
    seats: "2",
    status: "UNVEILED 2024",
    summary:
      "A tandem two-seat variant, first seen in 2021 and presented officially in 2024. Public commentary links the second seat to mission management and teaming with uncrewed aircraft.",
    points: [
      "First twin-seat stealth fighter seen publicly",
      "Second crew member for mission management",
      "Described as multirole",
    ],
  },
];

export const glossary = [
  {
    term: "Fifth generation",
    definition:
      "An informal label for fighters that combine low observability, internal weapon carriage, advanced sensors and a high degree of data fusion. There is no single agreed definition.",
  },
  {
    term: "Low observable (LO)",
    definition:
      "Design measures that reduce how easily an aircraft is detected — shaping, aligned edges, internal weapon bays and surface materials. Often called stealth.",
  },
  {
    term: "Canard",
    definition:
      "A small control surface ahead of the main wing. On the J-20 the all-moving canards add lift and pitch control, an unusual choice for a low-observable design.",
  },
  {
    term: "Diverterless supersonic inlet (DSI)",
    definition:
      "An engine intake that uses a shaped bump and forward-swept cowl instead of moving ramps or a separate boundary-layer diverter, saving weight and reducing radar reflections.",
  },
  {
    term: "AESA radar",
    definition:
      "Active electronically scanned array. A radar whose beam is steered electronically by many small transmit/receive modules rather than by a moving dish.",
  },
  {
    term: "EOTS",
    definition:
      "Electro-optical targeting system. A passive infrared and optical sensor, seen on the J-20 as a faceted housing beneath the nose.",
  },
  {
    term: "Supercruise",
    definition:
      "Sustained supersonic flight without afterburner. Often cited as a goal of the WS-15 engine; no performance figures have been officially published.",
  },
];

export const sources = [
  {
    label: "Wikipedia — Chengdu J-20",
    href: "https://en.wikipedia.org/wiki/Chengdu_J-20",
    note: "General reference and citations",
  },
  {
    label: "CSIS ChinaPower — J-20 overview",
    href: "https://chinapower.csis.org/china-chengdu-j-20/",
    note: "Analysis and comparison with peers",
  },
  {
    label: "Wikimedia Commons — J-20 media",
    href: "https://commons.wikimedia.org/wiki/Category:Chengdu_J-20",
    note: "Freely licensed photographs",
  },
];

// Headings and introductions for the shared sections on the J-20 page.
export const sectionText = {
  specHeading: "The public profile.",
  specIntro:
    "A structured overview of publicly reported characteristics and programme milestones. Approximate measurements are marked separately from confirmed historical information.",
  specNotice:
    "Measurements may refer to different aircraft variants and should not be interpreted as official technical documentation. Dates and descriptions are included for educational context.",
  historyHeading: "From rumour to flight line.",
  historyIntro:
    "A condensed public timeline of the programme, from early design studies to the latest variants. Entries based on photographs and press reporting rather than official statements are marked as reported.",
  variantsHeading: "One airframe, three forms.",
  variantsIntro:
    "The J-20 family as it is described in public sources. Designations are not applied consistently between publications, so treat the names as working labels. Where no freely licensed photograph exists, a silhouette is shown instead.",
  compareIntro:
    `Published dimensions and dates for the J-20 alongside ${counts.en.others} other aircraft. The J-20 is one of the longest aircraft in the table; its figures are public estimates.`,
  referenceNote:
    "Much about this aircraft is not officially published. Figures on this site are drawn from open sources and should be read as approximate.",
};

// Text for the bespoke J-20 page itself. Ids, icons, coordinates and scroll
// targets stay in J20.jsx and are matched to these lists by position.
export const page = {
  navigation: [
    "Overview",
    "Airframe",
    "Systems",
    "Data",
    "History",
    "Variants",
    "Compare",
    "Reference",
  ],
  eyebrow: "Chengdu J-20",
  intro:
    "An independent digital exhibition exploring the visual identity, airframe geometry and public history of a modern stealth aircraft.",
  enterArchive: "Enter archive",
  viewPhotography: "View photography",
  silhouetteLabel: "Stylised stealth aircraft silhouette",
  visualModel: "Visual model / 001",
  heroStats: [
    { value: "05", label: "Generation" },
    { value: "01", label: "Airframe" },
    { value: "LIVE", label: "Exhibit" },
  ],
  scroll: "Scroll to explore",
  overview: {
    label: "01 / Overview",
    heading: "Designed as a digital shadow in the sky.",
    intro:
      "This concept treats the aircraft as a museum object. Graphic overlays, restrained motion and layered information create an interactive visual story.",
  },
  chapters: [
    {
      number: "01",
      label: "Identity",
      detail: "Return to the opening aircraft presentation.",
    },
    {
      number: "02",
      label: "Airframe",
      detail: "Explore the visual language behind the aircraft.",
    },
    {
      number: "03",
      label: "Systems",
      detail: "Interactive cards present the digital architecture.",
    },
    {
      number: "04",
      label: "Specifications",
      detail: "Reported dimensions and development milestones.",
    },
    {
      number: "05",
      label: "History",
      detail: "Milestones from early design studies to today.",
    },
    {
      number: "06",
      label: "Variants",
      detail: "Baseline, updated and twin-seat airframes.",
    },
    {
      number: "07",
      label: "Comparison",
      detail: "The J-20 beside its fifth-generation peers.",
    },
    {
      number: "08",
      label: "Reference",
      detail: "A glossary of terms and further reading.",
    },
  ],
  airframe: {
    label: "02 / Airframe",
    heading: "Geometry with intent.",
    intro:
      "The visual model is deliberately stylised. Select a callout or a marker on the projection to read about the design features visible in public photographs.",
    projection: "Top projection / illustrative",
    axis: "Axis X / Stable",
    select: "Select a marker",
    feature: "Feature",
    features: [
      {
        label: "Chined nose profile",
        detail:
          "A sharp chine runs from the nose along the forward fuselage, giving the faceted cross-section typical of low-observable designs.",
      },
      {
        label: "Blended wing body",
        detail:
          "The fuselage merges smoothly into a large delta wing, providing internal volume for fuel and lift at high speed.",
      },
      {
        label: "Canard configuration",
        detail:
          "All-moving foreplanes ahead of the wing add lift and pitch authority. Few low-observable designs use them.",
      },
      {
        label: "Twin-tail arrangement",
        detail:
          "Two all-moving, outward-canted vertical tails, paired with small ventral fins beneath the rear fuselage.",
      },
      {
        label: "Diverterless intakes",
        detail:
          "Each intake uses a fixed bump instead of moving ramps, which saves weight and helps hide the engine face.",
      },
      {
        label: "Internal weapon bays",
        detail:
          "A main bay under the fuselage and two smaller side bays keep stores inside the airframe.",
      },
    ],
  },
  systems: {
    label: "03 / Systems",
    heading: "One integrated picture.",
    status: "Interface simulation online",
    items: [
      {
        id: "01",
        title: "Low-observable form",
        kicker: "AIRFRAME",
        description:
          "A visual exploration of planform alignment, internal geometry and an airframe shaped around reduced observability.",
        reported:
          "Internal weapon bays, diverterless intakes and sawtooth panel edges are the most visible low-observable features in public photographs.",
        metric: "PROFILE",
        value: "STEALTH",
      },
      {
        id: "02",
        title: "Sensor fusion",
        kicker: "AWARENESS",
        description:
          "Simulated radar, infrared and navigation information are presented as one coherent visual layer.",
        reported:
          "Public reporting describes an AESA radar, a chin-mounted electro-optical targeting system and infrared apertures distributed around the airframe.",
        metric: "TRACKS",
        value: "FUSED",
      },
      {
        id: "03",
        title: "Connected battlespace",
        kicker: "NETWORK",
        description:
          "Abstract data links visualize information moving between aircraft, command nodes and supporting assets.",
        reported:
          "The twin-seat J-20S is widely reported as intended for mission management and teaming with uncrewed aircraft.",
        metric: "LINK",
        value: "ACTIVE",
      },
      {
        id: "04",
        title: "High-energy flight",
        kicker: "PERFORMANCE",
        description:
          "Animated telemetry gives the experience a sense of speed without presenting operational controls.",
        reported:
          "Later production aircraft are reported to use Chinese WS-10C engines, with the more powerful WS-15 in flight testing.",
        metric: "STATE",
        value: "NOMINAL",
      },
    ],
  },
  profile: {
    label: "09 / Profile",
    heading: "Explore the signal.",
    intro:
      "The radar-inspired module adds motion to the final chapter. The targets and telemetry are fictional interface elements created for visual storytelling.",
    readouts: [
      { label: "MODE", value: "EXHIBIT" },
      { label: "SIGNAL", value: "CLEAR" },
      { label: "TRACKS", value: "05" },
      { label: "STATUS", value: "ONLINE" },
    ],
    archive: "Enter photographic archive",
    next: "Next aircraft / F-22 Raptor",
  },
};
