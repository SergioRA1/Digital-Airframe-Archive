// J-20 data used outside its hand-built page as well: the comparison
// charts read the specifications and the combined timeline reads the
// milestones. Keeping it here means those pages don't load J20.jsx or Sections.jsx.

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
  },
  {
    date: "2008",
    title: "Chengdu design selected",
    detail:
      "Chengdu's canard-delta proposal is reported to have been chosen over a competing Shenyang design.",
    confidence: "REPORTED",
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
  },
  {
    date: "2022–2023",
    title: "Updated airframe and WS-15",
    detail:
      "A prototype with a raised spine behind the canopy is photographed, followed by reports of flights with the more powerful WS-15 engine.",
    confidence: "REPORTED",
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
  },
  {
    date: "2026",
    title: "J-20A in production",
    detail:
      "Production J-20A aircraft are reported flying with the more powerful Chinese WS-15 engine.",
    confidence: "REPORTED",
  },
];
