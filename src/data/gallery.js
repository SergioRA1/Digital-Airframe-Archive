// English text for the photo galleries (src/Gallery.jsx). The Spanish
// version in src/locales/es/gallery.js mirrors these exports. Ids, numbers,
// photos and year ranges stay in Gallery.jsx.

import { counts } from "../counts.js";

// Every photograph's caption, keyed by the id used in Gallery.jsx.
export const captions = {
  // Chengdu J-20
  "airshow-2016": {
    title: "Public debut",
    subtitle: "Airshow China · Zhuhai · 2016",
    description:
      "A Chengdu J-20 performs a public flypast during Airshow China in Zhuhai. The photograph highlights the long fuselage, forward canards and angular wing planform.",
  },
  "formation-2016": {
    title: "Formation",
    subtitle: "Two-aircraft display · 2016",
    description:
      "Two J-20 aircraft fly in close formation during the aircraft's first public appearance. The rear perspective highlights the twin-engine arrangement and vertical stabilisers.",
  },
  "airframe-2017": {
    title: "Airframe study",
    subtitle: "Public photograph · 2017",
    description:
      "A detailed public photograph offering a closer view of the canopy, forward fuselage, surface geometry and low-visibility grey finish.",
  },
  "crossing-2018": {
    title: "Crossing pass",
    subtitle: "Airshow China · Zhuhai · 2018",
    description:
      "Two J-20s cross in a banked pass under an overcast sky. The upper aircraft shows the delta wing, canards and twin engine nozzles in plan view.",
  },
  "pair-2022": {
    title: "Paired display",
    subtitle: "Changchun Air Show · 2022",
    description:
      "A pair of J-20s fly in trail with landing gear extended, giving a clear side view of the long fuselage and canted tails.",
  },
  "static-2025": {
    title: "On the ground",
    subtitle: "Changchun · September 2025",
    description:
      "A J-20 on static display during the air force's 2025 aviation open day, showing the chined nose, intake and one-piece canopy at close range.",
  },
  "j20-g7": {
    title: "Side profile",
    subtitle: "Changchun Air Show · 2022",
    description:
      "A J-20 in a clean side view, showing the long nose, the canards ahead of the wing and the twin canted tails.",
  },
  "j20-g8": {
    title: "Weapons bay open",
    subtitle: "Airshow China · Zhuhai · 2018",
    description:
      "A J-20 flies overhead with its main weapons bay doors open, showing missiles carried inside the fuselage.",
  },
  "j20-g9": {
    title: "Climbing turn",
    subtitle: "Changchun Air Show · 2022",
    description:
      "A J-20 pulls up into a climbing turn, trailing vapour from its wingtips.",
  },
  "j20-g10": {
    title: "Four-ship",
    subtitle: "Changchun Air Show · 2023",
    description:
      "Four J-20s fly in a diamond formation during the air show.",
  },
  // Lockheed Martin F-22
  "kadena-2009": {
    title: "Over Kadena",
    subtitle: "Kadena Air Base · Japan · 2009",
    description:
      "An F-22 deployed from the 27th Fighter Squadron at Langley flies a routine training mission over Kadena Air Base.",
  },
  "column-2005": {
    title: "In column",
    subtitle: "En route to Hill Air Force Base · 2005",
    description:
      "Two Raptors line up behind a KC-10 tanker to refuel, showing the clipped diamond wing and canted tails from above.",
  },
  "bays-2008": {
    title: "Bays open",
    subtitle: "Naval Air Station Oceana · 2008",
    description:
      "An F-22 cycles its weapon bay doors for an air show crowd, demonstrating how stores are carried inside the airframe.",
  },
  "twilight-2019": {
    title: "Twilight demonstration",
    subtitle: "EAA AirVenture · Oshkosh · 2019",
    description:
      "The F-22 Demonstration Team commander flies a twilight display at EAA AirVenture in Oshkosh, Wisconsin.",
  },
  "formation-2013": {
    title: "Formation",
    subtitle: "43rd Fighter Squadron · 2013",
    description:
      "F-22s of the 43rd Fighter Squadron, the type's training unit, fly in formation.",
  },
  "langley-2023": {
    title: "Departure from Langley",
    subtitle: "Joint Base Langley-Eustis · 4 February 2023",
    description:
      "An F-22 takes off from Langley on the day the type scored its first air-to-air kill, against a high-altitude balloon.",
  },
  "f22-g7": {
    title: "High-speed pass",
    subtitle: "Andrews Air Force Base · 2008",
    description:
      "An F-22A streaks past at the Joint Services Open House with its afterburners lit and vapour forming over the wing.",
  },
  "f22-g8": {
    title: "Demonstration team",
    subtitle: "Dyess Air Force Base · 2023",
    description:
      "An F-22 from the Raptor Demonstration Team performs at the Dyess Big Country Air Fest in Texas.",
  },
  "f22-g9": {
    title: "Night taxi",
    subtitle: "Middle East · 2026",
    description:
      "A U.S. Air Force pilot taxis an F-22 at night at a base in the Middle East, in March 2026.",
  },
  "f22-g10": {
    title: "On the runway",
    subtitle: "U.S. Air Force · 2010",
    description:
      "An F-22A with the AK tail code of the 3rd Wing in Alaska rolls along the runway, its canopy tinted gold.",
  },
  // Lockheed Martin F-35
  "climb-2018": {
    title: "Vertical climb",
    subtitle: "Fort Worth Alliance Air Show · 2018",
    description:
      "The commander of the F-35 Heritage Flight Team performs a vertical climb in an F-35A. Its F135 engine produces about 43,000 pounds of thrust.",
  },
  "landing-2017": {
    title: "Landing",
    subtitle: "Aviation Nation · Nellis Air Force Base · 2017",
    description:
      "An F-35A of the 6th Weapons Squadron touches down after the Combined Arms Demo, showing the twin canted tails and the low-observable finish.",
  },
  "coalition-2020": {
    title: "Coalition flight",
    subtitle: "Over southern Israel · 2020",
    description:
      "An Israeli Air Force F-35I and a U.S. Air Force F-35A approach a KC-10 tanker during the exercise Enduring Lightning II.",
  },
  "tr3-2023": {
    title: "Technology Refresh 3",
    subtitle: "Edwards Air Force Base · 2023",
    description:
      "An F-35A flies over the Mojave Desert on the first flight of an F-35 in the Technology Refresh 3 configuration.",
  },
  "aeroindia-2023": {
    title: "Overhead pass",
    subtitle: "Aero India · Bengaluru · 2023",
    description:
      "An F-35 performs a low pass during a flying display at Aero India 2023, showing the aircraft from below.",
  },
  "redflag-2025": {
    title: "Red Flag departure",
    subtitle: "Nellis Air Force Base · 2025",
    description:
      "An F-35A from the 388th Fighter Wing's 421st Fighter Squadron departs for a training sortie during Red Flag 25-1.",
  },
  "f35-g7": {
    title: "First test aircraft",
    subtitle: "Edwards Air Force Base · 2008",
    description:
      "AA-1, the first F-35 built, takes off at Edwards during engine air-start testing.",
  },
  "f35-g8": {
    title: "On the ramp",
    subtitle: "Luke Air Force Base · 2015",
    description:
      "An F-35 with the LF tail code of Luke Air Force Base, Arizona, photographed in black and white under a heavy sky.",
  },
  "f35-g9": {
    title: "First Dutch F-35",
    subtitle: "Royal Netherlands Air Force · 2013",
    description:
      "F-001, the first F-35A built for the Royal Netherlands Air Force, in flight in 2013.",
  },
  "f35-g10": {
    title: "Adir and Sufa",
    subtitle: "Israeli Air Force · 2016",
    description:
      "An F-35I Adir flies alongside an F-16I Sufa during the Adir's first flight in Israel, in December 2016.",
  },
  // Sukhoi Su-57
  "flight-2019": {
    title: "In flight",
    subtitle: "Russia · 2019",
    description:
      "A Su-57 seen from below in flight, showing the wide-set engine nozzles, the moving leading-edge root extensions and the digital camouflage pattern.",
  },
  "taxi-2024": {
    title: "Taxi",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 taxis to the runway in Zhuhai ahead of its flying display at Airshow China, the aircraft's first appearance at a major foreign air show.",
  },
  "takeoff-2024": {
    title: "Afterburning takeoff",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 takes off with both engines in afterburner, showing the twin exhausts and the canted tail fins.",
  },
  "landing-2024": {
    title: "Landing",
    subtitle: "Zhuhai · November 2024",
    description:
      "A Su-57 lands on the return flight after the Zhuhai air show.",
  },
  "maks-2015": {
    title: "Vapour at MAKS",
    subtitle: "MAKS · Zhukovsky · 2015",
    description:
      "A T-50 pulls a high-g manoeuvre, with condensation forming around the aircraft in humid air.",
  },
  "lineup-maks": {
    title: "Prototype line-up",
    subtitle: "MAKS · Zhukovsky",
    description:
      "Three T-50 prototypes parked on the flight line during the MAKS air show.",
  },
  "su57-g7": {
    title: "Planform",
    subtitle: "MAKS · Zhukovsky · 2019",
    description:
      "Su-57 054 of the Sukhoi Design Bureau banks overhead in digital camouflage, showing its wide, flat planform.",
  },
  "su57-g8": {
    title: "Vertical climb",
    subtitle: "MAKS · Zhukovsky · 2019",
    description:
      "Su-57 054 climbs steeply with both engines in afterburner.",
  },
  "su57-g9": {
    title: "Prototype and MiG",
    subtitle: "Zhukovsky · 2012",
    description:
      "The second flying T-50 prototype, number 52, flies with a MiG-29 at the Russian Air Force centenary celebrations.",
  },
  "su57-g10": {
    title: "Export tail",
    subtitle: "Dubai Airshow · 2025",
    description:
      "The tail of the export Su-57E on display at the Dubai Airshow.",
  },
  // General Dynamics F-16
  "f16-g1": {
    title: "Demonstration",
    subtitle: "Dyess Air Force Base · 2018",
    description:
      "The F-16 demonstration aircraft performs at the Dyess air show, showing the blended wing body and the wide horizontal tails.",
  },
  "f16-g2": {
    title: "Thunderbirds over New York",
    subtitle: "U.S. Air Force Thunderbirds",
    description:
      "Six F-16s of the U.S. Air Force Thunderbirds aerial demonstration team fly in delta formation past the Empire State Building.",
  },
  "f16-g3": {
    title: "Diamond formation",
    subtitle: "Royal Danish Air Force · 2014",
    description:
      "Nine F-16s from Squadrons 727 and 730 of the Royal Danish Air Force fly in a diamond formation at the Danish Air Show.",
  },
  "f16-g4": {
    title: "Beside a Su-27",
    subtitle: "1990",
    description:
      "An F-16A Block 15G of the 186th Fighter Squadron flies alongside a Soviet-built Su-27, a rare close view of two contemporaries.",
  },
  "f16-g5": {
    title: "Over the oil fires",
    subtitle: "Kuwait · 1991",
    description:
      "Aircraft of the 4th Fighter Wing, an F-16, an F-15C and an F-15E, fly over Kuwaiti oil fires set by retreating Iraqi forces.",
  },
  "f16-g6": {
    title: "Final approach",
    subtitle: "Las Vegas, Nevada",
    description:
      "An F-16 pilot breaks right on final approach over northern Las Vegas, with external fuel tanks and missiles visible under the wing.",
  },
  "f16-g7": {
    title: "After refuelling",
    subtitle: "Iraq · 2008",
    description:
      "A Block 40 F-16 of the 34th Expeditionary Fighter Squadron over Iraq after taking fuel from a KC-135, carrying bombs and missiles.",
  },
  "f16-g8": {
    title: "Head-on",
    subtitle: "Operation Iraqi Freedom · 2003",
    description:
      "An F-16 from the 35th Fighter Wing flies a mission near Iraq in March 2003, seen head-on with its weapons and fuel tanks.",
  },
  "f16-g9": {
    title: "Danish display jet",
    subtitle: "Royal International Air Tattoo · 2025",
    description:
      "The Royal Danish Air Force F-16AM display aircraft, E-006, climbs away in afterburner in its red and white scheme.",
  },
  "f16-g10": {
    title: "Green scheme",
    subtitle: "Radom Air Show · 2023",
    description:
      "A Belgian F-16, FA-87, taxis at the Radom Air Show in a special green reptile scheme.",
  },
  // Eurofighter Typhoon
  "ty-g1": {
    title: "Departure",
    subtitle: "RAF Fairford · 2013",
    description:
      "A British and an Italian Typhoon depart RAF Fairford during the Royal International Air Tattoo.",
  },
  "ty-g2": {
    title: "On the line",
    subtitle: "RAF Akrotiri, Cyprus",
    description:
      "A Typhoon FGR4 of 6 Squadron on the runway, ready to fly a sortie from RAF Akrotiri.",
  },
  "ty-g3": {
    title: "Over Iraq",
    subtitle: "December 2015",
    description:
      "A British Typhoon flies over Iraq as coalition forces fly daily missions in support of Operation Inherent Resolve.",
  },
  "ty-g4": {
    title: "Afterburners lit",
    subtitle: "Cosford Air Show · 2009",
    description:
      "A Typhoon flies past with its afterburners lit during a display at the Cosford Air Show.",
  },
  "ty-g5": {
    title: "Formation",
    subtitle: "RAF Fairford · 2018",
    description:
      "A large formation of Royal Air Force Typhoon FGR4s flies over RAF Fairford.",
  },
  "ty-g6": {
    title: "German Typhoon",
    subtitle: "Luftwaffe · 2013",
    description:
      "A German Air Force Typhoon banks overhead, showing the canards, delta wing and single tail.",
  },
  "typhoon-g7": {
    title: "Anniversary scheme",
    subtitle: "ILA Berlin · 2016",
    description:
      "German Typhoon 30+68 of Tactical Air Wing 74 in a blue special scheme marking the Luftwaffe's 60th anniversary.",
  },
  "typhoon-g8": {
    title: "Refuelling formation",
    subtitle: "ILA Berlin · 2024",
    description:
      "A Dutch Airbus A330 MRTT tanker leads two Typhoons and two Tornados in a refuelling formation.",
  },
  "typhoon-g9": {
    title: "Black scheme",
    subtitle: "Radom Air Show · 2023",
    description:
      "RAF Typhoon FGR4 ZJ914 in a black display scheme with a large roundel on the tail.",
  },
  "typhoon-g10": {
    title: "Union flag",
    subtitle: "Radom Air Show · 2023",
    description:
      "The same aircraft seen from below, with the Union flag painted across the underside of the wings.",
  },
  // Dassault Rafale
  "rf-g1": {
    title: "Solo display",
    subtitle: "Paris Air Show · 2025",
    description:
      "The Rafale C solo display aircraft in its colourful scheme at the Paris Air Show.",
  },
  "rf-g2": {
    title: "Naval Rafale",
    subtitle: "French Navy",
    description:
      "A Rafale M of the French Navy in a steep climb with afterburners lit.",
  },
  "rf-g3": {
    title: "Display colours",
    subtitle: "RAF Fairford · 2018",
    description:
      "A Rafale C in a black and red display scheme on the runway at RAF Fairford.",
  },
  "rf-g4": {
    title: "Climbing away",
    subtitle: "French Navy",
    description:
      "A Rafale M climbs away with both afterburners lit, showing the twin exhausts.",
  },
  "rf-g5": {
    title: "Banking",
    subtitle: "French Navy",
    description:
      "A Rafale M banks overhead, showing the underside, the canards and the single tail.",
  },
  "rf-g6": {
    title: "Line-up",
    subtitle: "Aero India · 2013",
    description:
      "Two Rafale Bs and a Rafale C parked beside two U.S. Air Force F-16Cs at Aero India 2013.",
  },
  "rafale-g7": {
    title: "Arrival in Croatia",
    subtitle: "Croatian Air Force · 2024",
    description:
      "A Rafale arrives in Croatia with both afterburners lit, as the Croatian Air Force begins to receive the aircraft.",
  },
  "rafale-g8": {
    title: "Twin nozzles",
    subtitle: "Cognac · 2026",
    description:
      "A French Air and Space Force Rafale seen from behind on the ground at Cognac, showing its two M88 engine nozzles.",
  },
  "rafale-g9": {
    title: "Weapons display",
    subtitle: "Dassault · 2005",
    description:
      "A Rafale on static display surrounded by the missiles, bombs and fuel tanks it can carry.",
  },
  "rafale-g10": {
    title: "Qatari Rafale",
    subtitle: "Bordeaux-Mérignac · 2019",
    description:
      "QA217, a Rafale for the Qatar Emiri Air Force, at Bordeaux-Mérignac, near Dassault's assembly plant.",
  },
  // Saab Gripen
  "gr-g1": {
    title: "Vortices",
    subtitle: "Royal International Air Tattoo · 2025",
    description:
      "A Swedish Gripen E creates vortices as it climbs during the Royal International Air Tattoo at RAF Fairford.",
  },
  "gr-g2": {
    title: "Escorting a bomber",
    subtitle: "Bomber Task Force Europe",
    description:
      "Three Swedish Gripens escort a U.S. B-52H Stratofortress during a Bomber Task Force Europe mission.",
  },
  "gr-g3": {
    title: "Close escort",
    subtitle: "Bomber Task Force Europe",
    description:
      "A Swedish Gripen flies alongside a B-52H, seen from the bomber, showing the delta wing and canards.",
  },
  "gr-g4": {
    title: "Malmen line-up",
    subtitle: "Malmen Airshow · 2012",
    description:
      "A multinational line-up of Gripens on static display at the 2012 Malmen Airshow.",
  },
  "gr-g5": {
    title: "Centennial display",
    subtitle: "Flygdagarna · Malmen · 2026",
    description:
      "A Gripen E flies an aerobatic display with coloured smoke at the Swedish Air Force centennial air show.",
  },
  "gr-g6": {
    title: "In the sky",
    subtitle: "2010",
    description:
      "A Gripen in flight seen from below, showing the compact delta wing and canards.",
  },
  "gripen-g7": {
    title: "Takeoff",
    subtitle: "Čáslav Air Base · 2010",
    description:
      "A Czech Air Force Gripen lifts off from Čáslav, its shadow on the runway below.",
  },
  "gripen-g8": {
    title: "Czech formation",
    subtitle: "Čáslav Air Base · 2011",
    description:
      "Two Czech Gripens fly in formation with two Aero L-159 light combat aircraft.",
  },
  "gripen-g9": {
    title: "Underside",
    subtitle: "Uppland Wing · 2025",
    description:
      "A Swedish Gripen C seen from below, showing the delta wing, the canards and the lit afterburner.",
  },
  "gripen-g10": {
    title: "Painted tail",
    subtitle: "Radom Air Show · 2018",
    description:
      "A Czech Gripen with a specially painted tail taxis at the Radom Air Show.",
  },
  // Shenyang J-35
  "j35-g1": {
    title: "FC-31 on approach",
    subtitle: "Airshow China · Zhuhai · 2014",
    description:
      "An FC-31 prototype with its landing gear down on approach at Zhuhai, during the aircraft's public debut.",
  },
  "j35-g2": {
    title: "Rear view",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "The rear of an FC-31 2.0 prototype on display, showing the two engine nozzles, the wide tail and the outward-canted fins.",
  },
  "j35-g3": {
    title: "Prototype on display",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "A side view of the FC-31 2.0 prototype beside older Shenyang aircraft, showing the long blended fuselage.",
  },
  "j35-g4": {
    title: "Taxiing on the Fujian",
    subtitle: "Type 003 · 2025",
    description:
      "A J-35 taxis on the flight deck of the aircraft carrier Fujian, seen from the side.",
  },
  "j35-g5": {
    title: "Deck crew",
    subtitle: "Type 003 · 2025",
    description:
      "A deck crew member signals to a J-35 on the carrier Fujian. The folding wings and nose leg are visible.",
  },
  "j35-g6": {
    title: "Arrested recovery",
    subtitle: "Type 003 · 2025",
    description:
      "A J-35 lands on the carrier Fujian and catches an arrestor wire with its tail hook.",
  },
  "j35-g7": {
    title: "Front view",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "The FC-31 2.0 prototype seen head-on, showing the intakes on either side of the cockpit and the outward-canted fins.",
  },
  // Shenyang J-16
  "j16-g1": {
    title: "Close pass",
    subtitle: "Changchun Air Show · 2023",
    description:
      "A J-16 in flight, showing the large twin-tail airframe and the underwing hardpoints.",
  },
  "j16-g2": {
    title: "Afterburners",
    subtitle: "Changchun Air Show · 2023",
    description:
      "Two J-16s bank away with their afterburners lit during a display.",
  },
  "j16-g3": {
    title: "Open cockpit",
    subtitle: "Changchun Air Show · 2025",
    description:
      "A J-16 on static display with the canopy open, showing its two-seat cockpit.",
  },
  "j16-g4": {
    title: "Tanker and fighter",
    subtitle: "Miyako Strait · 2024",
    description:
      "A Chinese YY-20 tanker and a J-16 fly over the Miyako Strait, in a photograph taken by Japan's Air Self-Defense Force.",
  },
  "j16-g5": {
    title: "Tanker formation",
    subtitle: "Changchun Air Show · 2025",
    description:
      "A YY-20A tanker leads two J-16 fighters in a formation flight.",
  },
  "j16-g6": {
    title: "In the sky",
    subtitle: "Changchun Air Show · 2025",
    description:
      "A J-16 in flight against a clear sky during the Air Force Open Day.",
  },
  "j16-g7": {
    title: "Refuelling formation",
    subtitle: "Changchun Air Show · 2023",
    description:
      "A YY-20A tanker flies with J-20 and J-16 fighters in an aerial refuelling formation.",
  },
  "j16-g8": {
    title: "Intercepted",
    subtitle: "Japan Ministry of Defense · 2023",
    description:
      "A PLA Air Force J-16 above the clouds, photographed from a Japan Air Self-Defense Force aircraft in December 2023.",
  },
  // Shenyang J-15
  "j15-g1": {
    title: "Over the sea",
    subtitle: "East China Sea · 2022",
    description:
      "Two J-15s in the air near Japan, in a photograph taken by Japan's Joint Staff Office.",
  },
  "j15-g2": {
    title: "Carrier air wing",
    subtitle: "Liaoning · 2022",
    description:
      "Two J-15s from the carrier Liaoning, photographed from the sea by the Japanese Maritime Self-Defense Force.",
  },
  "j15-g3": {
    title: "Buddy refuelling",
    subtitle: "PLA Navy",
    description:
      "A J-15 approaches the refuelling drogue of a buddy tanker, seen from the tanker.",
  },
  "j15-g4": {
    title: "Ready to launch",
    subtitle: "Type 003 Fujian · 2025",
    description:
      "A J-15T on the Fujian at the launch position, behind the jet blast deflector.",
  },
  "j15-g5": {
    title: "Carrier formation",
    subtitle: "PLA Navy",
    description:
      "A J-35, a J-15T and a J-15DT fly together, showing three of the navy's newest carrier aircraft.",
  },
  "j15-g6": {
    title: "Early prototype",
    subtitle: "Mianyang · 2014",
    description:
      "An early J-15 on display at a science and technology expo in Mianyang, painted in yellow primer.",
  },
  "j15-g7": {
    title: "Launch from Liaoning",
    subtitle: "Liaoning · 2022",
    description:
      "A J-15 leaves the ski-jump of the carrier Liaoning, south of Ishigaki Island, in May 2022.",
  },
  "j15-g8": {
    title: "Recovery",
    subtitle: "Liaoning · 2022",
    description:
      "A J-15 lines up to land on the carrier Liaoning, photographed by Japan's Self-Defense Forces in May 2022.",
  },
  // Boeing F-15EX
  "f15ex-g1": {
    title: "Eagle II",
    subtitle: "Eglin Air Force Base · 2021",
    description:
      "An F-15EX from the 40th Flight Test Squadron banks in flight, showing its two tails and conformal fuel tanks.",
  },
  "f15ex-g2": {
    title: "Takeoff",
    subtitle: "Portland Air National Guard Base · 2025",
    description:
      "An F-15EX of the 123rd Fighter Squadron takes off from Portland, Oregon.",
  },
  "f15ex-g3": {
    title: "With a Ghost Bat",
    subtitle: "Valiant Shield · 2026",
    description:
      "An F-15EX flies with an uncrewed MQ-28 Ghost Bat during Exercise Valiant Shield.",
  },
  "f15ex-g4": {
    title: "Over the Gulf coast",
    subtitle: "Florida · 2023",
    description:
      "Two F-15EX aircraft fly along the Florida coast in August 2023.",
  },
  "f15ex-g5": {
    title: "Arrival at Eglin",
    subtitle: "Eglin Air Force Base · 2021",
    description:
      "The first F-15EX arrives at Eglin Air Force Base, where a marshaller guides it to its parking spot.",
  },
  "f15ex-g6": {
    title: "Kadena",
    subtitle: "Kadena Air Base · Japan",
    description:
      "An F-15EX takes off at Kadena Air Base in Japan, together with an F-15E.",
  },
  "f15ex-g7": {
    title: "Aerial refuelling",
    subtitle: "U.S. Air Force",
    description:
      "An F-15EX approaches a tanker for air-to-air refuelling.",
  },
  "f15ex-g8": {
    title: "Unveiling flight",
    subtitle: "Portland Air National Guard Base · 2024",
    description:
      "An F-15EX of the 142nd Wing takes off past the Portland airport control tower at the aircraft's unveiling ceremony.",
  },
  "f15ex-g9": {
    title: "Taxiing out",
    subtitle: "Portland Air National Guard Base · 2024",
    description:
      "F-15EX 007 of the 142nd Wing taxis before takeoff. The wing is replacing its F-15C/D Eagles with the new aircraft.",
  },
  "f15ex-g10": {
    title: "Two-seat cockpit",
    subtitle: "Portland Air National Guard Base · 2024",
    description:
      "Crews prepare for takeoff in the F-15EX's two-seat cockpit at the unveiling ceremony.",
  },
  "kf21-g1": {
    title: "Display flight",
    subtitle: "Seoul ADEX · 2023",
    description:
      "A Republic of Korea Air Force KF-21 performs a flying display at the Seoul International Aerospace and Defense Exhibition.",
  },
  "kf21-g2": {
    title: "Steep climb",
    subtitle: "Seoul Air Base · 2023",
    description:
      "A KF-21 pulls into a steep climb during an aerial demonstration at Seoul ADEX.",
  },
  "kf21-g3": {
    title: "Side view in flight",
    subtitle: "Seoul ADEX · 2023",
    description:
      "A KF-21 in flight, showing its chined nose and canted twin tails.",
  },
  "kf21-g4": {
    title: "Third prototype",
    subtitle: "Sacheon Airshow · 2022",
    description:
      "The third KF-21 prototype on public display at the Sacheon Airshow in October 2022.",
  },
  "kf21-g5": {
    title: "Side profile",
    subtitle: "Sacheon Airshow · 2022",
    description:
      "The side profile of a KF-21 prototype on display at Sacheon, showing the shape of its nose and canopy.",
  },
  "kf21-g6": {
    title: "On the ramp",
    subtitle: "Seoul ADEX · 2023",
    description:
      "A KF-21 prototype on static display at Seoul ADEX 2023, with its canopy open.",
  },
  "kf21-g7": {
    title: "Head-on",
    subtitle: "Seoul ADEX · 2023",
    description:
      "A KF-21 seen head-on at Seoul ADEX, guided by a member of the ground crew.",
  },
  "kf21-g8": {
    title: "Two-seat prototype",
    subtitle: "Seoul ADEX · 2023",
    description:
      "The sixth prototype, one of the two two-seaters built for testing.",
  },
  "su35-g1": {
    title: "Intercepted near Japan",
    subtitle: "Sea of Japan · 2024",
    description:
      "A Russian Su-35S photographed by the Japan Air Self-Defense Force as it flies from the East China Sea towards the Sea of Japan.",
  },
  "su35-g2": {
    title: "Close intercept",
    subtitle: "Mediterranean Sea · 2020",
    description:
      "A Russian Su-35 flies close to a U.S. Navy P-8A Poseidon over the Mediterranean, in an intercept the Navy called unsafe.",
  },
  "su35-g3": {
    title: "Takeoff at MAKS",
    subtitle: "Zhukovsky · 2013",
    description:
      "A Su-35S takes off in front of the crowd at the MAKS air show near Moscow.",
  },
  "su35-g4": {
    title: "On the runway",
    subtitle: "MAKS · 2015",
    description:
      "A Su-35S rolls along the runway at the MAKS air show.",
  },
  "su35-g5": {
    title: "Vertical climb",
    subtitle: "MAKS · 2015",
    description:
      "A Su-35S climbs steeply during its flying display at MAKS 2015.",
  },
  "su35-g6": {
    title: "Prototype display",
    subtitle: "MAKS · 2009",
    description:
      "One of the first modernised Su-35 prototypes, in camouflage, flies at MAKS 2009.",
  },
  "su35-g7": {
    title: "Against the sun",
    subtitle: "Russia · 2016",
    description:
      "A Su-35S silhouetted against the sun with its landing gear down.",
  },
  "su35-g8": {
    title: "With a Tu-95MS",
    subtitle: "Russian Knights · 2022",
    description:
      "Su-35S fighters of the Russian Knights display team fly in formation with a Tu-95MS bomber.",
  },
  "su35-g9": {
    title: "Static display",
    subtitle: "Zhukovsky · 2012",
    description:
      "A Russian Air Force Su-35S on static display at Zhukovsky.",
  },
  "su35-g10": {
    title: "Flying display",
    subtitle: "MAKS · 2013",
    description:
      "A Su-35S during its flying display at MAKS 2013.",
  },
  "fa18-g1": {
    title: "Arrested landing",
    subtitle: "USS Nimitz · 2023",
    description:
      "An F/A-18E of the Blue Diamonds of VFA-146 catches the wire on the deck of USS Nimitz in the Philippine Sea.",
  },
  "fa18-g2": {
    title: "Refuelling",
    subtitle: "Philippine Sea · 2014",
    description:
      "An F/A-18E of VFA-195 refuels from a U.S. Air Force KC-135 Stratotanker.",
  },
  "fa18-g3": {
    title: "High-speed pass",
    subtitle: "USS Carl Vinson · 2011",
    description:
      "An F/A-18E of VFA-81 makes a high-speed pass over USS Carl Vinson during an air power demonstration.",
  },
  "fa18-g4": {
    title: "Vapour cone",
    subtitle: "USS Kitty Hawk · 2007",
    description:
      "An F/A-18F punches through a cloud of condensation at transonic speed during an air power demonstration.",
  },
  "fa18-g5": {
    title: "Manoeuvres",
    subtitle: "Arabian Sea · 2012",
    description:
      "An F/A-18F of VFA-103 manoeuvres during an air power demonstration from USS Dwight D. Eisenhower.",
  },
  "fa18-g6": {
    title: "Catapult launch",
    subtitle: "USS Ronald Reagan · 2013",
    description:
      "An F/A-18E of VFA-137 launches from the flight deck of USS Ronald Reagan in the Pacific.",
  },
  "fa18-g7": {
    title: "Royal Australian Air Force",
    subtitle: "Brisbane · 2019",
    description:
      "A Royal Australian Air Force F/A-18F performs aerobatics over Brisbane while practising for the Riverfire festival.",
  },
  "fa18-g8": {
    title: "Over HMS Queen Elizabeth",
    subtitle: "Atlantic Ocean · 2017",
    description:
      "An F/A-18E of VFA-31 and an F/A-18F of VFA-213 fly over the British carrier HMS Queen Elizabeth.",
  },
  "fa18-g9": {
    title: "Condensation over the wings",
    subtitle: "NAS Oceana · 2004",
    description:
      "An F/A-18F of VFA-122 pulls a high-g turn at an air show, drawing condensation over its wings.",
  },
  "fa18-g10": {
    title: "Growler over Poland",
    subtitle: "Northern Poland · 2022",
    description:
      "A U.S. Navy EA-18G Growler of VAQ-134 patrols over Poland while deployed to Germany for NATO.",
  },
  "f2-g1": {
    title: "Formation over Guam",
    subtitle: "Cope North · 2023",
    description:
      "A Japan Air Self-Defense Force F-2 flies in formation with U.S. Air Force aircraft near Guam.",
  },
  "f2-g2": {
    title: "Landing at Andersen",
    subtitle: "Guam · 2024",
    description:
      "An F-2 lands at Andersen Air Force Base during Exercise Cope North 24.",
  },
  "f2-g3": {
    title: "On the flight line",
    subtitle: "Guam · 2023",
    description:
      "F-2s parked on the flight line at Andersen Air Force Base during Cope North 2023.",
  },
  "f2-g4": {
    title: "Afterburner takeoff",
    subtitle: "Guam · 2010",
    description:
      "F-2A 523 of 6 Squadron takes off from Andersen Air Force Base with its afterburner lit.",
  },
  "f2-g5": {
    title: "After the tsunami",
    subtitle: "Matsushima · 2011",
    description:
      "Damaged F-2s at Matsushima Air Base a week after the tsunami of March 2011.",
  },
  "f2-g6": {
    title: "Refuelling display",
    subtitle: "Komaki · 2018",
    description:
      "An F-2A follows a KC-767 tanker in a simulated aerial refuelling display at Komaki Air Base.",
  },
  "f2-g7": {
    title: "Flying display",
    subtitle: "Komatsu · 2018",
    description:
      "F-2A 13-8514 in a flying display at Komatsu Air Base.",
  },
  "f2-g8": {
    title: "Two-seater banking",
    subtitle: "Gifu · 2019",
    description:
      "F-2B 03-8105 banks during a flying display at Gifu Air Base.",
  },
  "f2-g9": {
    title: "Elephant walk",
    subtitle: "8 Squadron · 2021",
    description:
      "F-2s of 8 Squadron line up on the runway for an elephant walk marking the squadron's 60th anniversary.",
  },
  "f2-g10": {
    title: "Pair over the sea",
    subtitle: "Japan Air Self-Defense Force",
    description:
      "Two F-2s fly low over the sea, where the aircraft was designed to fight.",
  },
};

// The text of each gallery page, keyed by aircraft slug.
export const galleryText = {
  "j-20": {
    name: "J-20",
    fullName: "Chengdu J-20",
    label: "Airframe / 20",
    intro:
      "A cinematic collection of public photographs documenting the J-20 during airshows and other public appearances.",
  },
  "f-22": {
    name: "F-22",
    fullName: "Lockheed Martin F-22",
    label: "Airframe / 22",
    intro:
      "A collection of public-domain photographs of the F-22 in service, from training sorties and deployments to air show demonstrations.",
  },
  "f-35": {
    name: "F-35",
    fullName: "Lockheed Martin F-35",
    label: "Airframe / 35",
    intro:
      "A collection of photographs of the F-35 in service, from flight-test sorties and exercises to air show demonstrations.",
  },
  "su-57": {
    name: "Su-57",
    fullName: "Sukhoi Su-57",
    label: "Airframe / 57",
    intro:
      "A collection of freely licensed photographs of the Su-57 and its T-50 prototypes, from MAKS in Russia to Airshow China in Zhuhai.",
  },
  "f-16": {
    name: "F-16",
    fullName: "General Dynamics F-16",
    label: "Airframe / 16",
    intro:
      "A collection of photographs of the F-16 in service, from Cold War encounters and the Gulf War to air show demonstrations.",
  },
  typhoon: {
    name: "Typhoon",
    fullName: "Eurofighter Typhoon",
    label: "Airframe / Typhoon",
    intro:
      "A collection of photographs of the Typhoon in service with the British, German and Italian air forces, from operations to air show displays.",
  },
  rafale: {
    name: "Rafale",
    fullName: "Dassault Rafale",
    label: "Airframe / Rafale",
    intro:
      "A collection of photographs of the Rafale in French air force and navy service, from display flights to line-ups at air shows.",
  },
  gripen: {
    name: "Gripen",
    fullName: "Saab Gripen",
    label: "Airframe / Gripen",
    intro:
      "A collection of photographs of the Gripen, from Malmen air shows and bomber escorts to the newer Gripen E on display.",
  },
  "j-35": {
    name: "J-35",
    fullName: "Shenyang J-35",
    label: "Airframe / J-35",
    intro:
      "A collection of freely licensed photographs of the FC-31 demonstrators and the carrier-based J-35, from the first public flight at Zhuhai to the deck of the Fujian.",
  },
  "j-16": {
    name: "J-16",
    fullName: "Shenyang J-16",
    label: "Airframe / J-16",
    intro:
      "A collection of photographs of the J-16 at air shows and in flight, including refuelling from a YY-20 tanker.",
  },
  "j-15": {
    name: "J-15T",
    fullName: "Shenyang J-15",
    label: "Airframe / J-15T",
    intro:
      "A collection of photographs of the J-15 family, from an early prototype and sorties near Japan to the catapult-capable J-15T on the Fujian.",
  },
  "f-15ex": {
    name: "F-15EX",
    fullName: "Boeing F-15EX",
    label: "Airframe / F-15EX",
    intro:
      "A collection of public-domain photographs of the F-15EX Eagle II, from the first arrival at Eglin to its service with Air National Guard units and in the Pacific.",
  },
  "kf-21": {
    name: "KF-21",
    fullName: "KAI KF-21 Boramae",
    label: "Airframe / KF-21",
    intro:
      "A collection of public-domain and freely licensed photographs of the KF-21, from the prototypes on display at Sacheon to flying displays at Seoul ADEX.",
  },
  "su-35": {
    name: "Su-35",
    fullName: "Sukhoi Su-35S",
    label: "Airframe / Su-35",
    intro:
      "A collection of freely licensed photographs of the Su-35S, from air show displays near Moscow to intercepts photographed by Japanese and American aircrews.",
  },
  "fa-18": {
    name: "Super Hornet",
    fullName: "Boeing F/A-18E/F Super Hornet",
    label: "Airframe / F/A-18E/F",
    intro:
      "A collection of mostly public-domain photographs of the Super Hornet, from carrier decks and air power demonstrations to the Royal Australian Air Force and the EA-18G Growler.",
  },
  "f-2": {
    name: "F-2",
    fullName: "Mitsubishi F-2",
    label: "Airframe / F-2",
    intro:
      "A collection of public-domain and freely licensed photographs of the F-2, from exercises over Guam to flying displays at Japanese air bases.",
  },
  archive: {
    name: "Archive",
    fullName: "Airframe archive",
    label: "Airframe / All",
    intro:
      `Every photograph in the hangar, one after the other. Scroll through all ${counts.en.all} aircraft in order, or open any frame to move through the whole reel in the full-screen viewer.`,
  },
};
