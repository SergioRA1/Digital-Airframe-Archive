import React, { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Image as ImageIcon,
  Maximize2,
  X,
} from "lucide-react";

import { photos } from "./photos.js";

const entry = (id, number, title, subtitle, description, photo) => ({
  id,
  number,
  title,
  subtitle,
  description,
  src: photo.src,
  full: photo.full,
  position: "center center",
  photographer: photo.photographer,
  licence: photo.licence,
  source: photo.source,
});

const j20Images = [
  {
    id: "airshow-2016",
    number: "01",
    title: "Public debut",
    subtitle: "Airshow China · Zhuhai · 2016",
    description:
      "A Chengdu J-20 performs a public flypast during Airshow China in Zhuhai. The photograph highlights the long fuselage, forward canards and angular wing planform.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/J-20_at_Airshow_China_2016.jpg/1280px-J-20_at_Airshow_China_2016.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/a/a2/J-20_at_Airshow_China_2016.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_at_Airshow_China_2016.jpg",
  },
  {
    id: "formation-2016",
    number: "02",
    title: "Formation",
    subtitle: "Two-aircraft display · 2016",
    description:
      "Two J-20 aircraft fly in close formation during the aircraft's first public appearance. The rear perspective highlights the twin-engine arrangement and vertical stabilizers.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/J-20s.jpg/1280px-J-20s.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/9/96/J-20s.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:J-20s.jpg",
  },
  {
    id: "airframe-2017",
    number: "03",
    title: "Airframe study",
    subtitle: "Public photograph · 2017",
    description:
      "A detailed public photograph offering a closer view of the canopy, forward fuselage, surface geometry and low-visibility grey finish.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/J-20_%28cropped%29.jpg/1280px-J-20_%28cropped%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/7/7b/J-20_%28cropped%29.jpg",
    position: "center center",
    photographer: "Alert5",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_%28cropped%29.jpg",
  },
  {
    id: "crossing-2018",
    number: "04",
    title: "Crossing pass",
    subtitle: "Airshow China · Zhuhai · 2018",
    description:
      "Two J-20s cross in a banked pass under an overcast sky. The upper aircraft shows the delta wing, canards and twin engine nozzles in plan view.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/J-20_formation_%28cropped%29.jpg/1280px-J-20_formation_%28cropped%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/J-20_formation_%28cropped%29.jpg/1920px-J-20_formation_%28cropped%29.jpg",
    position: "center center",
    photographer: "emperornie",
    licence: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_formation_%28cropped%29.jpg",
  },
  {
    id: "pair-2022",
    number: "05",
    title: "Paired display",
    subtitle: "Changchun Air Show · 2022",
    description:
      "A pair of J-20s fly in trail with landing gear extended, giving a clear side view of the long fuselage and canted tails.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg/1280px-Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg/1920px-Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Two_J-20s_at_CCAS2022_%2820220827103245%29.jpg",
  },
  {
    id: "static-2025",
    number: "06",
    title: "On the ground",
    subtitle: "Changchun · September 2025",
    description:
      "A J-20 on static display during the air force's 2025 aviation open day, showing the chined nose, intake and one-piece canopy at close range.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J-20_at_Changchun_Air_Show_20250921.jpg/1280px-J-20_at_Changchun_Air_Show_20250921.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/J-20_at_Changchun_Air_Show_20250921.jpg/1920px-J-20_at_Changchun_Air_Show_20250921.jpg",
    position: "center center",
    photographer: "Yiyuanju",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:J-20_at_Changchun_Air_Show_20250921.jpg",
  },
  entry(
    "j20-g7",
    "07",
    "Side profile",
    "Changchun Air Show · 2022",
    "A J-20 in a clean side view, showing the long nose, the canards ahead of the wing and the twin canted tails.",
    photos.j20_g7
  ),
  entry(
    "j20-g8",
    "08",
    "Weapons bay open",
    "Airshow China · Zhuhai · 2018",
    "A J-20 flies overhead with its main weapons bay doors open, showing missiles carried inside the fuselage.",
    photos.j20_g8
  ),
  entry(
    "j20-g9",
    "09",
    "Climbing turn",
    "Changchun Air Show · 2022",
    "A J-20 pulls up into a climbing turn, trailing vapour from its wingtips.",
    photos.j20_g9
  ),
  entry(
    "j20-g10",
    "10",
    "Four-ship",
    "Changchun Air Show · 2023",
    "Four J-20s fly in a diamond formation during the air show.",
    photos.j20_g10
  ),
];

const f22Images = [
  {
    id: "kadena-2009",
    number: "01",
    title: "Over Kadena",
    subtitle: "Kadena Air Base · Japan · 2009",
    description:
      "An F-22 deployed from the 27th Fighter Squadron at Langley flies a routine training mission over Kadena Air Base.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/F-22_Raptor_edit1.jpg/1280px-F-22_Raptor_edit1.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/F-22_Raptor_edit1.jpg/1920px-F-22_Raptor_edit1.jpg",
    position: "center center",
    photographer: "Master Sgt. Andy Dunaway, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_edit1.jpg",
  },
  {
    id: "column-2005",
    number: "02",
    title: "In column",
    subtitle: "En route to Hill Air Force Base · 2005",
    description:
      "Two Raptors line up behind a KC-10 tanker to refuel, showing the clipped diamond wing and canted tails from above.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg/1280px-Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg/1920px-Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
    position: "center center",
    photographer: "Tech. Sgt. Ben Bloker, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg",
  },
  {
    id: "bays-2008",
    number: "03",
    title: "Bays open",
    subtitle: "Naval Air Station Oceana · 2008",
    description:
      "An F-22 cycles its weapon bay doors for an air show crowd, demonstrating how stores are carried inside the airframe.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/F-22_Raptor_shows_its_weapon_bay.jpg/1280px-F-22_Raptor_shows_its_weapon_bay.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/F-22_Raptor_shows_its_weapon_bay.jpg/1920px-F-22_Raptor_shows_its_weapon_bay.jpg",
    position: "center center",
    photographer: "Edward I. Fagg, U.S. Navy",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_shows_its_weapon_bay.jpg",
  },
  {
    id: "twilight-2019",
    number: "04",
    title: "Twilight demonstration",
    subtitle: "EAA AirVenture · Oshkosh · 2019",
    description:
      "The F-22 Demonstration Team commander flies a twilight display at EAA AirVenture in Oshkosh, Wisconsin.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg/1280px-F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg/1920px-F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
    position: "center center",
    photographer: "2nd Lt. Samuel Eckholm, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_flying_at_twilight_190728-F-VA182-1014.jpg",
  },
  {
    id: "formation-2013",
    number: "05",
    title: "Formation",
    subtitle: "43rd Fighter Squadron · 2013",
    description:
      "F-22s of the 43rd Fighter Squadron, the type's training unit, fly in formation.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/F-22_of_43rd_FS.jpg/1280px-F-22_of_43rd_FS.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/F-22_of_43rd_FS.jpg/1920px-F-22_of_43rd_FS.jpg",
    position: "center center",
    photographer: "Master Sgt. J. Wilcox, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_of_43rd_FS.jpg",
  },
  {
    id: "langley-2023",
    number: "06",
    title: "Departure from Langley",
    subtitle: "Joint Base Langley-Eustis · 4 February 2023",
    description:
      "An F-22 takes off from Langley on the day the type scored its first air-to-air kill, against a high-altitude balloon.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg/1280px-F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg/1920px-F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
    position: "center center",
    photographer: "Senior Airman Chloe Shanes, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-22_Raptor_taking_off_-_2023_Chinese_balloon_incident_%28230204-F-BD665-1252%29.jpg",
  },
  entry(
    "f22-g7",
    "07",
    "High-speed pass",
    "Andrews Air Force Base · 2008",
    "An F-22A streaks past at the Joint Services Open House with its afterburners lit and vapour forming over the wing.",
    photos.f22_g7
  ),
  entry(
    "f22-g8",
    "08",
    "Demonstration team",
    "Dyess Air Force Base · 2023",
    "An F-22 from the Raptor Demonstration Team performs at the Dyess Big Country Air Fest in Texas.",
    photos.f22_g8
  ),
  entry(
    "f22-g9",
    "09",
    "Night taxi",
    "Middle East · 2026",
    "A U.S. Air Force pilot taxis an F-22 at night at a base in the Middle East, in March 2026.",
    photos.f22_g9
  ),
  entry(
    "f22-g10",
    "10",
    "On the runway",
    "U.S. Air Force · 2010",
    "An F-22A with the AK tail code of the 3rd Wing in Alaska rolls along the runway, its canopy tinted gold.",
    photos.f22_g10
  ),
];


const f35Images = [
  {
    id: "climb-2018",
    number: "01",
    title: "Vertical climb",
    subtitle: "Fort Worth Alliance Air Show · 2018",
    description:
      "The commander of the F-35 Heritage Flight Team performs a vertical climb in an F-35A. Its F135 engine produces about 43,000 pounds of thrust.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/1280px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg/1920px-F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
    position: "center center",
    photographer: "Airman 1st Class Alexander Cook, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35_Heritage_Flight_Team_performs_in_Bell_Fort_Worth_Alliance_AirShow.jpg",
  },
  {
    id: "landing-2017",
    number: "02",
    title: "Landing",
    subtitle: "Aviation Nation · Nellis Air Force Base · 2017",
    description:
      "An F-35A of the 6th Weapons Squadron touches down after the Combined Arms Demo, showing the twin canted tails and the low-observable finish.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/USAF_F-35A_Lightning_II_Landing_3.jpg/1280px-USAF_F-35A_Lightning_II_Landing_3.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/USAF_F-35A_Lightning_II_Landing_3.jpg/1920px-USAF_F-35A_Lightning_II_Landing_3.jpg",
    position: "center center",
    photographer: "Noah Wulf",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:USAF_F-35A_Lightning_II_Landing_3.jpg",
  },
  {
    id: "coalition-2020",
    number: "03",
    title: "Coalition flight",
    subtitle: "Over southern Israel · 2020",
    description:
      "An Israeli Air Force F-35I and a U.S. Air Force F-35A approach a KC-10 tanker during the exercise Enduring Lightning II.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Enduring_Lightning_II_200802-F-BT522-0460.jpg/1280px-Enduring_Lightning_II_200802-F-BT522-0460.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Enduring_Lightning_II_200802-F-BT522-0460.jpg/1920px-Enduring_Lightning_II_200802-F-BT522-0460.jpg",
    position: "center center",
    photographer: "Master Sgt. Patrick O'Reilly, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:Enduring_Lightning_II_200802-F-BT522-0460.jpg",
  },
  {
    id: "tr3-2023",
    number: "04",
    title: "Technology Refresh 3",
    subtitle: "Edwards Air Force Base · 2023",
    description:
      "An F-35A flies over the Mojave Desert on the first flight of an F-35 in the Technology Refresh 3 configuration.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg/1280px-F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg/1920px-F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
    position: "center center",
    photographer: "U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35A_Lightning_II_flies_above_the_Mojave_Desert.jpg",
  },
  {
    id: "aeroindia-2023",
    number: "05",
    title: "Overhead pass",
    subtitle: "Aero India · Bengaluru · 2023",
    description:
      "An F-35 performs a low pass during a flying display at Aero India 2023, showing the aircraft from below.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg/1280px-Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg/1920px-Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
    position: "center center",
    photographer: "Ashwin Kumar",
    licence: "CC BY-SA 2.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Lockheed_Martin_F-35_Lightning_II_%2852709921064%29.jpg",
  },
  {
    id: "redflag-2025",
    number: "06",
    title: "Red Flag departure",
    subtitle: "Nellis Air Force Base · 2025",
    description:
      "An F-35A from the 388th Fighter Wing's 421st Fighter Squadron departs for a training sortie during Red Flag 25-1.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg/1280px-F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg/1920px-F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
    position: "center center",
    photographer: "Micah Garbarino, U.S. Air Force",
    licence: "Public domain",
    source:
      "https://commons.wikimedia.org/wiki/File:F-35A_Lightning_II_from_the_388th_Fighter_Wing%27s_421st_Fighter_Squadron_-_8859371.jpg",
  },
  entry(
    "f35-g7",
    "07",
    "First test aircraft",
    "Edwards Air Force Base · 2008",
    "AA-1, the first F-35 built, takes off at Edwards during engine air-start testing.",
    photos.f35_g7
  ),
  entry(
    "f35-g8",
    "08",
    "On the ramp",
    "Luke Air Force Base · 2015",
    "An F-35 with the LF tail code of Luke Air Force Base, Arizona, photographed in black and white under a heavy sky.",
    photos.f35_g8
  ),
  entry(
    "f35-g9",
    "09",
    "First Dutch F-35",
    "Royal Netherlands Air Force · 2013",
    "F-001, the first F-35A built for the Royal Netherlands Air Force, in flight in 2013.",
    photos.f35_g9
  ),
  entry(
    "f35-g10",
    "10",
    "Adir and Sufa",
    "Israeli Air Force · 2016",
    "An F-35I Adir flies alongside an F-16I Sufa during the Adir's first flight in Israel, in December 2016.",
    photos.f35_g10
  ),
];

const su57Images = [
  {
    id: "flight-2019",
    number: "01",
    title: "In flight",
    subtitle: "Russia · 2019",
    description:
      "A Su-57 seen from below in flight, showing the wide-set engine nozzles, the moving leading-edge root extensions and the digital camouflage pattern.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%A1%D1%83-57.jpg/1280px-%D0%A1%D1%83-57.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%D0%A1%D1%83-57.jpg/1920px-%D0%A1%D1%83-57.jpg",
    position: "center center",
    photographer: "Vladislav06112019",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:%D0%A1%D1%83-57.jpg",
  },
  {
    id: "taxi-2024",
    number: "02",
    title: "Taxi",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 taxis to the runway in Zhuhai ahead of its flying display at Airshow China, the aircraft's first appearance at a major foreign air show.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Su-57_054%40TYN_%2820241104112740%29.jpg/1280px-Su-57_054%40TYN_%2820241104112740%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Su-57_054%40TYN_%2820241104112740%29.jpg/1920px-Su-57_054%40TYN_%2820241104112740%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241104112740%29.jpg",
  },
  {
    id: "takeoff-2024",
    number: "03",
    title: "Afterburning takeoff",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 takes off with both engines in afterburner, showing the twin exhausts and the canted tail fins.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Su-57_054%40TYN_%2820241104112819%29.jpg/1280px-Su-57_054%40TYN_%2820241104112819%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Su-57_054%40TYN_%2820241104112819%29.jpg/1920px-Su-57_054%40TYN_%2820241104112819%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241104112819%29.jpg",
  },
  {
    id: "landing-2024",
    number: "04",
    title: "Landing",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 lands on the return flight after the Zhuhai air show.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Su-57_054%40TYN_%2820241121145844%29.jpg/1280px-Su-57_054%40TYN_%2820241121145844%29.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Su-57_054%40TYN_%2820241121145844%29.jpg/1920px-Su-57_054%40TYN_%2820241121145844%29.jpg",
    position: "center center",
    photographer: "N509FZ",
    licence: "CC BY-SA 4.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Su-57_054%40TYN_%2820241121145844%29.jpg",
  },
  {
    id: "maks-2015",
    number: "05",
    title: "Vapor at MAKS",
    subtitle: "MAKS · Zhukovsky · 2015",
    description:
      "A T-50 pulls a high-g manoeuvre, with condensation forming around the aircraft in humid air.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/PAK_FA_Prandtl_Glauert_singularity.jpg/1280px-PAK_FA_Prandtl_Glauert_singularity.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/PAK_FA_Prandtl_Glauert_singularity.jpg/1920px-PAK_FA_Prandtl_Glauert_singularity.jpg",
    position: "center center",
    photographer: "Rulexip",
    licence: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:PAK_FA_Prandtl_Glauert_singularity.jpg",
  },
  {
    id: "lineup-maks",
    number: "06",
    title: "Prototype line-up",
    subtitle: "MAKS · Zhukovsky",
    description:
      "Three T-50 prototypes parked on the flight line during the MAKS air show.",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pak-fa-and-berkut-mill-group.jpg/1280px-Pak-fa-and-berkut-mill-group.jpg",
    full: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Pak-fa-and-berkut-mill-group.jpg/1920px-Pak-fa-and-berkut-mill-group.jpg",
    position: "center center",
    photographer: "Rulexip",
    licence: "CC BY-SA 3.0",
    source:
      "https://commons.wikimedia.org/wiki/File:Pak-fa-and-berkut-mill-group.jpg",
  },
  entry(
    "su57-g7",
    "07",
    "Planform",
    "MAKS · Zhukovsky · 2019",
    "Su-57 054 of the Sukhoi Design Bureau banks overhead in digital camouflage, showing its wide, flat planform.",
    photos.su57_g7
  ),
  entry(
    "su57-g8",
    "08",
    "Vertical climb",
    "MAKS · Zhukovsky · 2019",
    "Su-57 054 climbs steeply with both engines in afterburner.",
    photos.su57_g8
  ),
  entry(
    "su57-g9",
    "09",
    "Prototype and MiG",
    "Zhukovsky · 2012",
    "The second flying T-50 prototype, number 52, flies with a MiG-29 at the Russian Air Force centenary celebrations.",
    photos.su57_g9
  ),
  entry(
    "su57-g10",
    "10",
    "Export tail",
    "Dubai Airshow · 2025",
    "The tail of the export Su-57E on display at the Dubai Airshow.",
    photos.su57_g10
  ),
];

const f16Images = [
  entry(
    "f16-g1",
    "01",
    "Demonstration",
    "Dyess Air Force Base · 2018",
    "The F-16 demonstration aircraft performs at the Dyess air show, showing the blended wing body and the wide horizontal tails.",
    photos.f16_g1
  ),
  entry(
    "f16-g2",
    "02",
    "Thunderbirds over New York",
    "U.S. Air Force Thunderbirds",
    "Six F-16s of the U.S. Air Force Thunderbirds aerial demonstration team fly in delta formation past the Empire State Building.",
    photos.f16_g2
  ),
  entry(
    "f16-g3",
    "03",
    "Diamond formation",
    "Royal Danish Air Force · 2014",
    "Nine F-16s from Squadrons 727 and 730 of the Royal Danish Air Force fly in a diamond formation at the Danish Air Show.",
    photos.f16_g3
  ),
  entry(
    "f16-g4",
    "04",
    "Beside a Su-27",
    "1990",
    "An F-16A Block 15G of the 186th Fighter Squadron flies alongside a Soviet-built Su-27, a rare close view of two contemporaries.",
    photos.f16_g4
  ),
  entry(
    "f16-g5",
    "05",
    "Over the oil fires",
    "Kuwait · 1991",
    "Aircraft of the 4th Fighter Wing, an F-16, an F-15C and an F-15E, fly over Kuwaiti oil fires set by retreating Iraqi forces.",
    photos.f16_g5
  ),
  entry(
    "f16-g6",
    "06",
    "Final approach",
    "Las Vegas, Nevada",
    "An F-16 pilot breaks right on final approach over northern Las Vegas, with external fuel tanks and missiles visible under the wing.",
    photos.f16_g6
  ),
  entry(
    "f16-g7",
    "07",
    "After refuelling",
    "Iraq · 2008",
    "A Block 40 F-16 of the 34th Expeditionary Fighter Squadron over Iraq after taking fuel from a KC-135, carrying bombs and missiles.",
    photos.f16_g7
  ),
  entry(
    "f16-g8",
    "08",
    "Head-on",
    "Operation Iraqi Freedom · 2003",
    "An F-16 from the 35th Fighter Wing flies a mission near Iraq in March 2003, seen head-on with its weapons and fuel tanks.",
    photos.f16_g8
  ),
  entry(
    "f16-g9",
    "09",
    "Danish display jet",
    "Royal International Air Tattoo · 2025",
    "The Royal Danish Air Force F-16AM display aircraft, E-006, climbs away in afterburner in its red and white scheme.",
    photos.f16_g9
  ),
  entry(
    "f16-g10",
    "10",
    "Green scheme",
    "Radom Air Show · 2023",
    "A Belgian F-16, FA-87, taxis at the Radom Air Show in a special green reptile scheme.",
    photos.f16_g10
  ),
];

const typhoonImages = [
  entry(
    "ty-g1",
    "01",
    "Departure",
    "RAF Fairford · 2013",
    "A British and an Italian Typhoon depart RAF Fairford during the Royal International Air Tattoo.",
    photos.ty_g1
  ),
  entry(
    "ty-g2",
    "02",
    "On the line",
    "RAF Akrotiri, Cyprus",
    "A Typhoon FGR4 of 6 Squadron on the runway, ready to fly a sortie from RAF Akrotiri.",
    photos.ty_g2
  ),
  entry(
    "ty-g3",
    "03",
    "Over Iraq",
    "December 2015",
    "A British Typhoon flies over Iraq as coalition forces fly daily missions in support of Operation Inherent Resolve.",
    photos.ty_g3
  ),
  entry(
    "ty-g4",
    "04",
    "Afterburners lit",
    "Cosford Air Show · 2009",
    "A Typhoon flies past with its afterburners lit during a display at the Cosford Air Show.",
    photos.ty_g4
  ),
  entry(
    "ty-g5",
    "05",
    "Formation",
    "RAF Fairford · 2018",
    "A large formation of Royal Air Force Typhoon FGR4s flies over RAF Fairford.",
    photos.ty_g5
  ),
  entry(
    "ty-g6",
    "06",
    "German Typhoon",
    "Luftwaffe · 2013",
    "A German Air Force Typhoon banks overhead, showing the canards, delta wing and single tail.",
    photos.ty_g6
  ),
  entry(
    "typhoon-g7",
    "07",
    "Anniversary scheme",
    "ILA Berlin · 2016",
    "German Typhoon 30+68 of Tactical Air Wing 74 in a blue special scheme marking the Luftwaffe's 60th anniversary.",
    photos.typhoon_g7
  ),
  entry(
    "typhoon-g8",
    "08",
    "Refuelling formation",
    "ILA Berlin · 2024",
    "A Dutch Airbus A330 MRTT tanker leads two Typhoons and two Tornados in a refuelling formation.",
    photos.typhoon_g8
  ),
  entry(
    "typhoon-g9",
    "09",
    "Black scheme",
    "Radom Air Show · 2023",
    "RAF Typhoon FGR4 ZJ914 in a black display scheme with a large roundel on the tail.",
    photos.typhoon_g9
  ),
  entry(
    "typhoon-g10",
    "10",
    "Union flag",
    "Radom Air Show · 2023",
    "The same aircraft seen from below, with the Union flag painted across the underside of the wings.",
    photos.typhoon_g10
  ),
];

const rafaleImages = [
  entry(
    "rf-g1",
    "01",
    "Solo display",
    "Paris Air Show · 2025",
    "The Rafale C solo display aircraft in its colourful scheme at the Paris Air Show.",
    photos.rf_g1
  ),
  entry(
    "rf-g2",
    "02",
    "Naval Rafale",
    "French Navy",
    "A Rafale M of the French Navy in a steep climb with afterburners lit.",
    photos.rf_g2
  ),
  entry(
    "rf-g3",
    "03",
    "Display colours",
    "RAF Fairford · 2018",
    "A Rafale C in a black and red display scheme on the runway at RAF Fairford.",
    photos.rf_g3
  ),
  entry(
    "rf-g4",
    "04",
    "Climbing away",
    "French Navy",
    "A Rafale M climbs away with both afterburners lit, showing the twin exhausts.",
    photos.rf_g4
  ),
  entry(
    "rf-g5",
    "05",
    "Banking",
    "French Navy",
    "A Rafale M banks overhead, showing the underside, the canards and the single tail.",
    photos.rf_g5
  ),
  entry(
    "rf-g6",
    "06",
    "Line-up",
    "Aero India · 2013",
    "Two Rafale Bs and a Rafale C parked beside two U.S. Air Force F-16Cs at Aero India 2013.",
    photos.rf_g6
  ),
  entry(
    "rafale-g7",
    "07",
    "Arrival in Croatia",
    "Croatian Air Force · 2024",
    "A Rafale arrives in Croatia with both afterburners lit, as the Croatian Air Force begins to receive the aircraft.",
    photos.rafale_g7
  ),
  entry(
    "rafale-g8",
    "08",
    "Twin nozzles",
    "Cognac · 2026",
    "A French Air and Space Force Rafale seen from behind on the ground at Cognac, showing its two M88 engine nozzles.",
    photos.rafale_g8
  ),
  entry(
    "rafale-g9",
    "09",
    "Weapons display",
    "Dassault · 2005",
    "A Rafale on static display surrounded by the missiles, bombs and fuel tanks it can carry.",
    photos.rafale_g9
  ),
  entry(
    "rafale-g10",
    "10",
    "Qatari Rafale",
    "Bordeaux-Mérignac · 2019",
    "QA217, a Rafale for the Qatar Emiri Air Force, at Bordeaux-Mérignac, near Dassault's assembly plant.",
    photos.rafale_g10
  ),
];

const gripenImages = [
  entry(
    "gr-g1",
    "01",
    "Vortices",
    "Royal International Air Tattoo · 2025",
    "A Swedish Gripen E creates vortices as it climbs during the Royal International Air Tattoo at RAF Fairford.",
    photos.gr_g1
  ),
  entry(
    "gr-g2",
    "02",
    "Escorting a bomber",
    "Bomber Task Force Europe",
    "Three Swedish Gripens escort a U.S. B-52H Stratofortress during a Bomber Task Force Europe mission.",
    photos.gr_g2
  ),
  entry(
    "gr-g3",
    "03",
    "Close escort",
    "Bomber Task Force Europe",
    "A Swedish Gripen flies alongside a B-52H, seen from the bomber, showing the delta wing and canards.",
    photos.gr_g3
  ),
  entry(
    "gr-g4",
    "04",
    "Malmen line-up",
    "Malmen Airshow · 2012",
    "A multinational line-up of Gripens on static display at the 2012 Malmen Airshow.",
    photos.gr_g4
  ),
  entry(
    "gr-g5",
    "05",
    "Centennial display",
    "Flygdagarna · Malmen · 2026",
    "A Gripen E flies an aerobatic display with coloured smoke at the Swedish Air Force centennial air show.",
    photos.gr_g5
  ),
  entry(
    "gr-g6",
    "06",
    "In the sky",
    "2010",
    "A Gripen in flight seen from below, showing the compact delta wing and canards.",
    photos.gr_g6
  ),
  entry(
    "gripen-g7",
    "07",
    "Takeoff",
    "Čáslav Air Base · 2010",
    "A Czech Air Force Gripen lifts off from Čáslav, its shadow on the runway below.",
    photos.gripen_g7
  ),
  entry(
    "gripen-g8",
    "08",
    "Czech formation",
    "Čáslav Air Base · 2011",
    "Two Czech Gripens fly in formation with two Aero L-159 light combat aircraft.",
    photos.gripen_g8
  ),
  entry(
    "gripen-g9",
    "09",
    "Underside",
    "Uppland Wing · 2025",
    "A Swedish Gripen C seen from below, showing the delta wing, the canards and the lit afterburner.",
    photos.gripen_g9
  ),
  entry(
    "gripen-g10",
    "10",
    "Painted tail",
    "Radom Air Show · 2018",
    "A Czech Gripen with a specially painted tail taxis at the Radom Air Show.",
    photos.gripen_g10
  ),
];

const j35Images = [
  entry(
    "j35-g1",
    "01",
    "FC-31 on approach",
    "Airshow China · Zhuhai · 2014",
    "An FC-31 prototype with its landing gear down on approach at Zhuhai, during the aircraft's public debut.",
    photos.j35_fc31
  ),
  entry(
    "j35-g2",
    "02",
    "Rear view",
    "SAC Aviation Expo Park · 2026",
    "The rear of an FC-31 2.0 prototype on display, showing the two engine nozzles, the wide tail and the outward-canted fins.",
    photos.j35_g2
  ),
  entry(
    "j35-g3",
    "03",
    "Prototype on display",
    "SAC Aviation Expo Park · 2026",
    "A side view of the FC-31 2.0 prototype beside older Shenyang aircraft, showing the long blended fuselage.",
    photos.j35_g3
  ),
  entry(
    "j35-g4",
    "04",
    "Taxiing on the Fujian",
    "Type 003 · 2025",
    "A J-35 taxis on the flight deck of the aircraft carrier Fujian, seen from the side.",
    photos.j35_g4
  ),
  entry(
    "j35-g5",
    "05",
    "Deck crew",
    "Type 003 · 2025",
    "A deck crew member signals to a J-35 on the carrier Fujian. The folding wings and nose leg are visible.",
    photos.j35_g5
  ),
  entry(
    "j35-g6",
    "06",
    "Arrested recovery",
    "Type 003 · 2025",
    "A J-35 lands on the carrier Fujian and catches an arrestor wire with its tail hook.",
    photos.j35_g6
  ),
  entry(
    "j35-g7",
    "07",
    "Front view",
    "SAC Aviation Expo Park · 2026",
    "The FC-31 2.0 prototype seen head-on, showing the intakes on either side of the cockpit and the outward-canted fins.",
    photos.j35_g7
  ),
];

const j16Images = [
  entry(
    "j16-g1",
    "01",
    "Close pass",
    "Changchun Air Show · 2023",
    "A J-16 in flight, showing the large twin-tail airframe and the underwing hardpoints.",
    photos.j16_g1
  ),
  entry(
    "j16-g2",
    "02",
    "Afterburners",
    "Changchun Air Show · 2023",
    "Two J-16s bank away with their afterburners lit during a display.",
    photos.j16_g2
  ),
  entry(
    "j16-g3",
    "03",
    "Open cockpit",
    "Changchun Air Show · 2025",
    "A J-16 on static display with the canopy open, showing its two-seat cockpit.",
    photos.j16_g3
  ),
  entry(
    "j16-g4",
    "04",
    "Tanker and fighter",
    "Miyako Strait · 2024",
    "A Chinese YY-20 tanker and a J-16 fly over the Miyako Strait, in a photograph taken by Japan's Air Self-Defense Force.",
    photos.j16_g4
  ),
  entry(
    "j16-g5",
    "05",
    "Tanker formation",
    "Changchun Air Show · 2025",
    "A YY-20A tanker leads two J-16 fighters in a formation flight.",
    photos.j16_g5
  ),
  entry(
    "j16-g6",
    "06",
    "In the sky",
    "Changchun Air Show · 2025",
    "A J-16 in flight against a clear sky during the Air Force Open Day.",
    photos.j16_g6
  ),
  entry(
    "j16-g7",
    "07",
    "Refuelling formation",
    "Changchun Air Show · 2023",
    "A YY-20A tanker flies with J-20 and J-16 fighters in an aerial refuelling formation.",
    photos.j16_g7
  ),
  entry(
    "j16-g8",
    "08",
    "Intercepted",
    "Japan Ministry of Defense · 2023",
    "A PLA Air Force J-16 above the clouds, photographed from a Japan Air Self-Defense Force aircraft in December 2023.",
    photos.j16_g8
  ),
];

const j15Images = [
  entry(
    "j15-g1",
    "01",
    "Over the sea",
    "East China Sea · 2022",
    "Two J-15s in the air near Japan, in a photograph taken by Japan's Joint Staff Office.",
    photos.j15_base
  ),
  entry(
    "j15-g2",
    "02",
    "Carrier air wing",
    "Liaoning · 2022",
    "Two J-15s from the carrier Liaoning, photographed from the sea by the Japanese Maritime Self-Defense Force.",
    photos.j15_g2
  ),
  entry(
    "j15-g3",
    "03",
    "Buddy refuelling",
    "PLA Navy",
    "A J-15 approaches the refuelling drogue of a buddy tanker, seen from the tanker.",
    photos.j15_g3
  ),
  entry(
    "j15-g4",
    "04",
    "Ready to launch",
    "Type 003 Fujian · 2025",
    "A J-15T on the Fujian at the launch position, behind the jet blast deflector.",
    photos.j15_g4
  ),
  entry(
    "j15-g5",
    "05",
    "Carrier formation",
    "PLA Navy",
    "A J-35, a J-15T and a J-15DT fly together, showing three of the navy's newest carrier aircraft.",
    photos.j15_g5
  ),
  entry(
    "j15-g6",
    "06",
    "Early prototype",
    "Mianyang · 2014",
    "An early J-15 on display at a science and technology expo in Mianyang, painted in yellow primer.",
    photos.j15_g6
  ),
  entry(
    "j15-g7",
    "07",
    "Launch from Liaoning",
    "Liaoning · 2022",
    "A J-15 leaves the ski-jump of the carrier Liaoning, south of Ishigaki Island, in May 2022.",
    photos.j15_g7
  ),
  entry(
    "j15-g8",
    "08",
    "Recovery",
    "Liaoning · 2022",
    "A J-15 lines up to land on the carrier Liaoning, photographed by Japan's Self-Defense Forces in May 2022.",
    photos.j15_g8
  ),
];

const f15exImages = [
  entry(
    "f15ex-g1",
    "01",
    "Eagle II",
    "Eglin Air Force Base · 2021",
    "An F-15EX from the 40th Flight Test Squadron banks in flight, showing its two tails and conformal fuel tanks.",
    photos.f15_ex
  ),
  entry(
    "f15ex-g2",
    "02",
    "Takeoff",
    "Portland Air National Guard Base · 2025",
    "An F-15EX of the 123rd Fighter Squadron takes off from Portland, Oregon.",
    photos.f15_g2
  ),
  entry(
    "f15ex-g3",
    "03",
    "With a Ghost Bat",
    "Valiant Shield · 2026",
    "An F-15EX flies with an uncrewed MQ-28 Ghost Bat during Exercise Valiant Shield.",
    photos.f15_g3
  ),
  entry(
    "f15ex-g4",
    "04",
    "Over the Gulf coast",
    "Florida · 2023",
    "Two F-15EX aircraft fly along the Florida coast in August 2023.",
    photos.f15_g4
  ),
  entry(
    "f15ex-g5",
    "05",
    "Arrival at Eglin",
    "Eglin Air Force Base · 2021",
    "The first F-15EX arrives at Eglin Air Force Base, where a marshaller guides it to its parking spot.",
    photos.f15_g5
  ),
  entry(
    "f15ex-g6",
    "06",
    "Kadena",
    "Kadena Air Base · Japan",
    "An F-15EX takes off at Kadena Air Base in Japan, together with an F-15E.",
    photos.f15_g6
  ),
  entry(
    "f15ex-g7",
    "07",
    "Aerial refuelling",
    "U.S. Air Force",
    "An F-15EX approaches a tanker for air-to-air refuelling.",
    photos.f15_g7
  ),
  entry(
    "f15ex-g8",
    "08",
    "Unveiling flight",
    "Portland Air National Guard Base · 2024",
    "An F-15EX of the 142nd Wing takes off past the Portland airport control tower at the aircraft's unveiling ceremony.",
    photos.f15_g8
  ),
  entry(
    "f15ex-g9",
    "09",
    "Taxiing out",
    "Portland Air National Guard Base · 2024",
    "F-15EX 007 of the 142nd Wing taxis before takeoff. The wing is replacing its F-15C/D Eagles with the new aircraft.",
    photos.f15_g9
  ),
  entry(
    "f15ex-g10",
    "10",
    "Two-seat cockpit",
    "Portland Air National Guard Base · 2024",
    "Crews prepare for takeoff in the F-15EX's two-seat cockpit at the unveiling ceremony.",
    photos.f15_g10
  ),
];

export const galleries = {
  "j-20": {
    name: "J-20",
    fullName: "Chengdu J-20",
    label: "Airframe / 20",
    years: "2016–2025",
    intro:
      "A cinematic collection of public photographs documenting the J-20 during airshows and other public appearances.",
    images: j20Images,
  },
  "f-22": {
    name: "F-22",
    fullName: "Lockheed Martin F-22",
    label: "Airframe / 22",
    years: "2005–2026",
    intro:
      "A collection of public-domain photographs of the F-22 in service, from training sorties and deployments to air show demonstrations.",
    images: f22Images,
  },
  "f-35": {
    name: "F-35",
    fullName: "Lockheed Martin F-35",
    label: "Airframe / 35",
    years: "2008–2025",
    intro:
      "A collection of photographs of the F-35 in service, from flight-test sorties and exercises to air show demonstrations.",
    images: f35Images,
  },
  "su-57": {
    name: "Su-57",
    fullName: "Sukhoi Su-57",
    label: "Airframe / 57",
    years: "2012–2025",
    intro:
      "A collection of freely licensed photographs of the Su-57 and its T-50 prototypes, from MAKS in Russia to Airshow China in Zhuhai.",
    images: su57Images,
  },
  "f-16": {
    name: "F-16",
    fullName: "General Dynamics F-16",
    label: "Airframe / 16",
    years: "1990–2025",
    intro:
      "A collection of photographs of the F-16 in service, from Cold War encounters and the Gulf War to air show demonstrations.",
    images: f16Images,
  },
  typhoon: {
    name: "Typhoon",
    fullName: "Eurofighter Typhoon",
    label: "Airframe / Typhoon",
    years: "2009–2024",
    intro:
      "A collection of photographs of the Typhoon in service with the British, German and Italian air forces, from operations to air show displays.",
    images: typhoonImages,
  },
  rafale: {
    name: "Rafale",
    fullName: "Dassault Rafale",
    label: "Airframe / Rafale",
    years: "2005–2026",
    intro:
      "A collection of photographs of the Rafale in French air force and navy service, from display flights to line-ups at air shows.",
    images: rafaleImages,
  },
  gripen: {
    name: "Gripen",
    fullName: "Saab Gripen",
    label: "Airframe / Gripen",
    years: "2010–2026",
    intro:
      "A collection of photographs of the Gripen, from Malmen air shows and bomber escorts to the newer Gripen E on display.",
    images: gripenImages,
  },
  "j-35": {
    name: "J-35",
    fullName: "Shenyang J-35",
    label: "Airframe / J-35",
    years: "2014–2026",
    intro:
      "A collection of freely licensed photographs of the FC-31 demonstrators and the carrier-based J-35, from the first public flight at Zhuhai to the deck of the Fujian.",
    images: j35Images,
  },
  "j-16": {
    name: "J-16",
    fullName: "Shenyang J-16",
    label: "Airframe / J-16",
    years: "2023–2025",
    intro:
      "A collection of photographs of the J-16 at air shows and in flight, including refuelling from a YY-20 tanker.",
    images: j16Images,
  },
  "j-15": {
    name: "J-15T",
    fullName: "Shenyang J-15",
    label: "Airframe / J-15T",
    years: "2014–2026",
    intro:
      "A collection of photographs of the J-15 family, from an early prototype and sorties near Japan to the catapult-capable J-15T on the Fujian.",
    images: j15Images,
  },
  "f-15ex": {
    name: "F-15EX",
    fullName: "Boeing F-15EX",
    label: "Airframe / F-15EX",
    years: "2021–2026",
    intro:
      "A collection of public-domain photographs of the F-15EX Eagle II, from the first arrival at Eglin to its service with Air National Guard units and in the Pacific.",
    images: f15exImages,
  },
};

// Every photograph of every aircraft, in hangar order, as one continuous reel.
const allImages = Object.values(galleries).flatMap((gallery) =>
  gallery.images.map((image) => ({
    ...image,
    aircraft: gallery.fullName,
    subtitle: `${gallery.name} · ${image.subtitle}`,
  }))
);

galleries.archive = {
  name: "Archive",
  fullName: "Airframe archive",
  label: "Airframe / All",
  years: "2005–2026",
  intro:
    "Every photograph in the hangar, one after the other. Scroll through all twelve aircraft in order, or open any frame to move through the whole reel in the full-screen viewer.",
  images: allImages.map((image, index) => ({
    ...image,
    id: `archive-${index}`,
    number: String(index + 1).padStart(2, "0"),
  })),
};

function GalleryNavigation({ onBack, gallery }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050708]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-10">
        <button
          type="button"
          onClick={onBack}
          className="group flex items-center gap-4"
        >
          <span className="grid h-10 w-10 place-items-center border border-white/15 text-white/60 transition group-hover:border-lime-300 group-hover:text-lime-300">
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
          </span>

          <span className="text-left">
            <span className="block text-[11px] font-semibold uppercase tracking-[.24em]">
              {gallery.label}
            </span>

            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
              Return to archive
            </span>
          </span>
        </button>

        <div className="hidden text-right sm:block">
          <div className="font-mono text-[10px] uppercase tracking-[.28em] text-lime-300">
            Visual archive
          </div>

          <div className="mt-1 font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
            Public photography · {gallery.years}
          </div>
        </div>
      </div>
    </header>
  );
}

function GalleryHero({ onExplore, gallery }) {
  const images = gallery.images;
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 900], [0, 180]);
  const contentY = useTransform(scrollY, [0, 800], [0, 100]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 md:px-10 md:pb-20">
      <motion.div
        style={{
          y: imageY,
        }}
        className="absolute -inset-x-6 -bottom-24 top-0"
      >
        <img
          src={images[0].src}
          alt=""
          className="h-full w-full object-cover"
          style={{
            objectPosition: images[0].position,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050708] via-[#050708]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050708] via-[#050708]/10 to-[#050708]/40" />
        <div className="absolute inset-0 bg-lime-950/10 mix-blend-color" />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.16) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative mx-auto w-full max-w-[1500px]"
      >
        <div className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[.3em] text-lime-300">
          <span className="h-px w-10 bg-lime-300" />
          Photographic record
        </div>

        <h1 className="max-w-5xl text-[clamp(4rem,11vw,10rem)] font-black leading-[.76] tracking-[-.075em]">
          {gallery.name}
          <span className="block text-white/50">IN FRAME</span>
        </h1>

        <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
            {gallery.intro}
          </p>

          <button
            type="button"
            onClick={onExplore}
            className="group flex w-fit items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.22em] text-black transition hover:bg-white"
          >
            Explore images

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/15 pt-6 font-mono text-[10px] uppercase tracking-[.2em] text-white/60">
          <div>
            <span className="mr-3 text-lime-300">
              {String(images.length).padStart(2, "0")}
            </span>
            Selected photographs
          </div>

          <div>
            <span className="mr-3 text-lime-300">CC</span>
            Attributed media
          </div>

          <div>
            <span className="mr-3 text-lime-300">HD</span>
            Full-screen viewer
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function GalleryCard({ image, index, name, onOpen }) {
  const imageOnRight = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      className={`group grid overflow-hidden border border-white/10 bg-[#080b0c] ${
        imageOnRight
          ? "lg:grid-cols-[.8fr_1.2fr]"
          : "lg:grid-cols-[1.2fr_.8fr]"
      }`}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        className={`relative min-h-[420px] overflow-hidden text-left md:min-h-[580px] ${
          imageOnRight ? "lg:order-2" : ""
        }`}
        aria-label={`Open ${image.title}`}
      >
        <motion.img
          src={image.src}
          alt={`${image.aircraft ?? name}: ${image.title}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: image.position,
          }}
          whileHover={{
            scale: 1.045,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-lime-300/5 mix-blend-color" />

          <div className="absolute left-6 top-6 grid h-12 w-12 place-items-center border border-white/30 bg-black/20 backdrop-blur-md">
            <Maximize2 size={17} />
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-white/60">
          <span>Image / {image.number}</span>
          <span>Click to expand</span>
        </div>
      </button>

      <div
        className={`flex min-h-[440px] flex-col justify-between p-7 md:p-12 ${
          imageOnRight ? "lg:order-1" : ""
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[.28em] text-lime-300">
              Record {image.number}
            </span>

            <ImageIcon size={17} className="text-white/50" />
          </div>

          <h2 className="mt-16 text-4xl font-semibold tracking-[-.045em] md:text-6xl">
            {image.title}
          </h2>

          <p className="mt-5 font-mono text-[11px] uppercase tracking-[.2em] text-white/60">
            {image.subtitle}
          </p>

          <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
            {image.description}
          </p>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="grid gap-5 text-[11px] sm:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                Photographer
              </div>

              <div className="mt-2 text-white/65">
                {image.photographer}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[.2em] text-white/50">
                Licence
              </div>

              <div className="mt-2 text-white/65">{image.licence}</div>
            </div>
          </div>

          <a
            href={image.source}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-white/50 transition hover:text-lime-300"
          >
            View original source
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Lightbox({
  images,
  name,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const selectedImage =
    selectedIndex === null ? null : images[selectedIndex];

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose, onPrevious, onNext]);

  return (
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded photograph: ${selectedImage.title}`}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:right-10 md:top-10"
            aria-label="Close image"
          >
            <X size={19} />
          </button>

          <button
            type="button"
            onClick={onPrevious}
            className="absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:left-10"
            aria-label="Previous image"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/20 bg-black/50 text-white/70 transition hover:border-lime-300 hover:text-lime-300 md:right-10"
            aria-label="Next image"
          >
            <ArrowRight size={18} />
          </button>

          <motion.div
            key={selectedImage.id}
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="pointer-events-none relative flex h-full w-full max-w-[1600px] flex-col justify-center"
          >
            <img
              src={selectedImage.full}
              alt={`Expanded ${selectedImage.aircraft ?? name} photograph: ${selectedImage.title}`}
              className="min-h-0 max-h-[78vh] w-full object-contain"
            />

            <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/15 pt-5 md:flex-row md:items-center">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[.25em] text-lime-300">
                  Record {selectedImage.number}
                </div>

                <div className="mt-2 text-lg font-semibold">
                  {selectedImage.title}
                </div>
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[.18em] text-white/50">
                {selectedIndex + 1} / {images.length} ·{" "}
                {selectedImage.photographer} · {selectedImage.licence}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Gallery({ onBack, aircraft = "j-20" }) {
  const gallery = galleries[aircraft];
  const images = gallery.images;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeImage = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const previousImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (
        (currentIndex - 1 + images.length) %
        images.length
      );
    });
  }, [images.length]);

  const nextImage = useCallback(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % images.length;
    });
  }, [images.length]);

  const scrollToGallery = () => {
    document.getElementById("photographs")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[#050708] text-[#edf0e9] selection:bg-lime-300 selection:text-black">
      <GalleryNavigation onBack={onBack} gallery={gallery} />

      <main>
        <GalleryHero onExplore={scrollToGallery} gallery={gallery} />

        <section
          id="photographs"
          className="scroll-mt-20 border-t border-white/10 px-5 py-24 md:px-10 md:py-36"
        >
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[.3em] text-lime-300">
                  01 / Selected photography
                </div>

                <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-.05em] md:text-7xl">
                  Public appearances of the airframe.
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-white/60">
                Select any photograph to open the full-screen viewer. Use the
                left and right arrow keys to move between records. Press Escape
                to close the viewer.
              </p>
            </div>

            <div className="space-y-8">
              {images.map((image, index) => (
                <GalleryCard
                  key={image.id}
                  image={image}
                  name={gallery.fullName}
                  index={index}
                  onOpen={setSelectedIndex}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#080b0c] px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[.3em] text-lime-300">
                  02 / Media notice
                </div>

                <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-.045em] md:text-6xl">
                  Images with attribution.
                </h2>
              </div>

              <div>
                <p className="text-sm leading-7 text-white/60">
                  These photographs are loaded from Wikimedia Commons and
                  remain the work of their respective photographer.
                  Attribution, licensing information and original source links
                  are displayed with every photograph.
                </p>

                <button
                  type="button"
                  onClick={onBack}
                  className="group mt-8 flex items-center gap-4 bg-lime-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[.22em] text-black transition hover:bg-white"
                >
                  Return to archive

                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 font-mono text-[10px] uppercase tracking-[.2em] text-white/50 sm:flex-row">
          <span>{gallery.label} · Visual archive</span>
          <span>Independent educational design concept</span>
        </div>

        <div className="mx-auto mt-6 flex max-w-[1500px] flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[.2em] text-white/50 sm:flex-row">
          <span>
            Made by{" "}
            <span className="text-white/80">Sergio Rodriguez Anton</span>
          </span>

          <a
            href="mailto:sergioranton@gmail.com"
            className="transition hover:text-lime-300"
          >
            sergioranton@gmail.com
          </a>
        </div>
      </footer>

      <Lightbox
        images={images}
        name={gallery.fullName}
        selectedIndex={selectedIndex}
        onClose={closeImage}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </div>
  );
}

export default Gallery;