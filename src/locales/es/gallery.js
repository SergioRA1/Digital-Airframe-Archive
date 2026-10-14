// Spanish text for the photo galleries. Mirrors src/data/gallery.js.

import { counts } from "../../counts.js";

const captions = {
  // Chengdu J-20
  "airshow-2016": {
    title: "Presentación pública",
    subtitle: "Airshow China · Zhuhai · 2016",
    description:
      "Un Chengdu J-20 realiza un sobrevuelo público durante Airshow China, en Zhuhai. La fotografía destaca el fuselaje alargado, los canards delanteros y la forma angulosa del ala.",
  },
  "formation-2016": {
    title: "Formación",
    subtitle: "Exhibición de dos aviones · 2016",
    description:
      "Dos J-20 vuelan en formación cerrada durante la primera aparición pública del avión. La vista trasera destaca la disposición de los dos motores y los estabilizadores verticales.",
  },
  "airframe-2017": {
    title: "Estudio de la célula",
    subtitle: "Fotografía pública · 2017",
    description:
      "Una fotografía pública detallada que permite ver de cerca la cúpula, el fuselaje delantero, la geometría de las superficies y el acabado gris de baja visibilidad.",
  },
  "crossing-2018": {
    title: "Pasada cruzada",
    subtitle: "Airshow China · Zhuhai · 2018",
    description:
      "Dos J-20 se cruzan en una pasada con alabeo bajo un cielo cubierto. El avión de arriba muestra en planta el ala en delta, los canards y las dos toberas.",
  },
  "pair-2022": {
    title: "Exhibición en pareja",
    subtitle: "Salón Aeronáutico de Changchun · 2022",
    description:
      "Una pareja de J-20 vuela en estela con el tren de aterrizaje desplegado, lo que ofrece una vista lateral nítida del fuselaje alargado y las derivas inclinadas.",
  },
  "static-2025": {
    title: "En tierra",
    subtitle: "Changchun · septiembre de 2025",
    description:
      "Un J-20 en exhibición estática durante la jornada de puertas abiertas de la fuerza aérea en 2025. De cerca se aprecian el morro con aristas, la toma de aire y la cúpula de una sola pieza.",
  },
  "j20-g7": {
    title: "Perfil lateral",
    subtitle: "Salón Aeronáutico de Changchun · 2022",
    description:
      "Un J-20 en una vista lateral limpia, con el morro largo, los canards delante del ala y las dos derivas inclinadas.",
  },
  "j20-g8": {
    title: "Bodega de armamento abierta",
    subtitle: "Airshow China · Zhuhai · 2018",
    description:
      "Un J-20 sobrevuela la zona con las puertas de la bodega de armamento principal abiertas, lo que deja ver los misiles que lleva en el interior del fuselaje.",
  },
  "j20-g9": {
    title: "Viraje en ascenso",
    subtitle: "Salón Aeronáutico de Changchun · 2022",
    description:
      "Un J-20 tira de la palanca para iniciar un viraje en ascenso y deja una estela de vapor en las puntas de las alas.",
  },
  "j20-g10": {
    title: "Cuatro aviones",
    subtitle: "Salón Aeronáutico de Changchun · 2023",
    description:
      "Cuatro J-20 vuelan en formación de rombo durante el salón aeronáutico.",
  },
  // Lockheed Martin F-22
  "kadena-2009": {
    title: "Sobre Kadena",
    subtitle: "Base aérea de Kadena · Japón · 2009",
    description:
      "Un F-22 desplegado desde el 27.º Escuadrón de Caza, con base en Langley, realiza una misión de entrenamiento rutinaria sobre la base aérea de Kadena.",
  },
  "column-2005": {
    title: "En columna",
    subtitle: "De camino a la base aérea de Hill · 2005",
    description:
      "Dos Raptor se colocan detrás de un avión cisterna KC-10 para repostar y muestran desde arriba el ala en diamante recortado y las derivas inclinadas.",
  },
  "bays-2008": {
    title: "Bodegas abiertas",
    subtitle: "Estación Aeronaval de Oceana · 2008",
    description:
      "Un F-22 abre y cierra las puertas de sus bodegas de armamento ante el público de una exhibición aérea y demuestra cómo se transporta la carga dentro de la célula.",
  },
  "twilight-2019": {
    title: "Exhibición al anochecer",
    subtitle: "EAA AirVenture · Oshkosh · 2019",
    description:
      "El comandante del equipo de demostración del F-22 realiza una exhibición al anochecer en EAA AirVenture, en Oshkosh (Wisconsin).",
  },
  "formation-2013": {
    title: "Formación",
    subtitle: "43.º Escuadrón de Caza · 2013",
    description:
      "F-22 del 43.º Escuadrón de Caza, la unidad de instrucción del modelo, vuelan en formación.",
  },
  "langley-2023": {
    title: "Salida de Langley",
    subtitle: "Base Conjunta Langley-Eustis · 4 de febrero de 2023",
    description:
      "Un F-22 despega de Langley el día en que el modelo logró su primera victoria aire-aire, contra un globo a gran altitud.",
  },
  "f22-g7": {
    title: "Pasada a alta velocidad",
    subtitle: "Base aérea de Andrews · 2008",
    description:
      "Un F-22A pasa a toda velocidad en la jornada de puertas abiertas de las Fuerzas Conjuntas, con la postcombustión encendida y vapor sobre el ala.",
  },
  "f22-g8": {
    title: "Equipo de demostración",
    subtitle: "Base aérea de Dyess · 2023",
    description:
      "Un F-22 del equipo de demostración del Raptor actúa en el Big Country Air Fest de Dyess, en Texas.",
  },
  "f22-g9": {
    title: "Rodaje nocturno",
    subtitle: "Oriente Medio · 2026",
    description:
      "Un piloto de la Fuerza Aérea de EE. UU. rueda de noche con un F-22 en una base de Oriente Medio, en marzo de 2026.",
  },
  "f22-g10": {
    title: "En la pista",
    subtitle: "Fuerza Aérea de EE. UU. · 2010",
    description:
      "Un F-22A con el código de cola AK del 3.er Ala, en Alaska, avanza por la pista con la cúpula teñida de dorado.",
  },
  // Lockheed Martin F-35
  "climb-2018": {
    title: "Ascenso vertical",
    subtitle: "Fort Worth Alliance Air Show · 2018",
    description:
      "El comandante del equipo del Heritage Flight del F-35 realiza un ascenso vertical en un F-35A. Su motor F135 produce unas 43.000 libras de empuje.",
  },
  "landing-2017": {
    title: "Aterrizaje",
    subtitle: "Aviation Nation · Base aérea de Nellis · 2017",
    description:
      "Un F-35A del 6.º Escuadrón de Armamento toma tierra tras la demostración de armas combinadas y muestra las dos derivas inclinadas y el acabado de baja observabilidad.",
  },
  "coalition-2020": {
    title: "Vuelo de la coalición",
    subtitle: "Sobre el sur de Israel · 2020",
    description:
      "Un F-35I de la Fuerza Aérea Israelí y un F-35A de la Fuerza Aérea de EE. UU. se aproximan a un avión cisterna KC-10 durante el ejercicio Enduring Lightning II.",
  },
  "tr3-2023": {
    title: "Technology Refresh 3",
    subtitle: "Base aérea de Edwards · 2023",
    description:
      "Un F-35A sobrevuela el desierto de Mojave en el primer vuelo de un F-35 con la configuración Technology Refresh 3.",
  },
  "aeroindia-2023": {
    title: "Pasada por encima",
    subtitle: "Aero India · Bengaluru · 2023",
    description:
      "Un F-35 realiza una pasada baja durante una exhibición en vuelo en Aero India 2023 y se ve el avión desde abajo.",
  },
  "redflag-2025": {
    title: "Salida en Red Flag",
    subtitle: "Base aérea de Nellis · 2025",
    description:
      "Un F-35A del 421.º Escuadrón de Caza, del 388.º Ala de Caza, sale para una salida de entrenamiento durante Red Flag 25-1.",
  },
  "f35-g7": {
    title: "Primer avión de pruebas",
    subtitle: "Base aérea de Edwards · 2008",
    description:
      "El AA-1, el primer F-35 construido, despega en Edwards durante las pruebas de arranque de motor en vuelo.",
  },
  "f35-g8": {
    title: "En la rampa",
    subtitle: "Base aérea de Luke · 2015",
    description:
      "Un F-35 con el código de cola LF de la base aérea de Luke, en Arizona, fotografiado en blanco y negro bajo un cielo cargado.",
  },
  "f35-g9": {
    title: "Primer F-35 neerlandés",
    subtitle: "Real Fuerza Aérea de los Países Bajos · 2013",
    description:
      "El F-001, el primer F-35A construido para la Real Fuerza Aérea de los Países Bajos, en vuelo en 2013.",
  },
  "f35-g10": {
    title: "Adir y Sufa",
    subtitle: "Fuerza Aérea Israelí · 2016",
    description:
      "Un F-35I Adir vuela junto a un F-16I Sufa durante el primer vuelo del Adir en Israel, en diciembre de 2016.",
  },
  // Sukhoi Su-57
  "flight-2019": {
    title: "En vuelo",
    subtitle: "Rusia · 2019",
    description:
      "Un Su-57 visto desde abajo en vuelo, con las toberas muy separadas, las extensiones móviles del borde de ataque en la raíz del ala y el patrón de camuflaje digital.",
  },
  "taxi-2024": {
    title: "Rodaje",
    subtitle: "Zhuhai · noviembre de 2024",
    description:
      "Un Su-57 rueda hacia la pista en Zhuhai antes de su exhibición en vuelo en Airshow China, la primera aparición del avión en un gran salón aeronáutico extranjero.",
  },
  "takeoff-2024": {
    title: "Despegue con postcombustión",
    subtitle: "Zhuhai · noviembre de 2024",
    description:
      "Un Su-57 despega con los dos motores en postcombustión y muestra los dos escapes y las derivas inclinadas.",
  },
  "landing-2024": {
    title: "Aterrizaje",
    subtitle: "Zhuhai · noviembre de 2024",
    description:
      "Un Su-57 aterriza en el vuelo de regreso tras el salón aeronáutico de Zhuhai.",
  },
  "maks-2015": {
    title: "Vapor en MAKS",
    subtitle: "MAKS · Zhukovski · 2015",
    description:
      "Un T-50 realiza una maniobra de muchos g y la condensación se forma alrededor del avión en el aire húmedo.",
  },
  "lineup-maks": {
    title: "Fila de prototipos",
    subtitle: "MAKS · Zhukovski",
    description:
      "Tres prototipos T-50 estacionados en la línea de vuelo durante el salón aeronáutico MAKS.",
  },
  "su57-g7": {
    title: "Forma en planta",
    subtitle: "MAKS · Zhukovski · 2019",
    description:
      "El Su-57 054 de la oficina de diseño Sukhoi vira por encima con camuflaje digital y muestra su forma en planta ancha y plana.",
  },
  "su57-g8": {
    title: "Ascenso vertical",
    subtitle: "MAKS · Zhukovski · 2019",
    description:
      "El Su-57 054 asciende en pronunciada subida con los dos motores en postcombustión.",
  },
  "su57-g9": {
    title: "Prototipo y MiG",
    subtitle: "Zhukovski · 2012",
    description:
      "El segundo prototipo T-50 en vuelo, el número 52, vuela junto a un MiG-29 en la celebración del centenario de la Fuerza Aérea Rusa.",
  },
  "su57-g10": {
    title: "Cola de exportación",
    subtitle: "Dubai Airshow · 2025",
    description:
      "La cola del Su-57E de exportación expuesto en el Dubai Airshow.",
  },
  // General Dynamics F-16
  "f16-g1": {
    title: "Exhibición",
    subtitle: "Base aérea de Dyess · 2018",
    description:
      "El avión de demostración del F-16 actúa en la exhibición aérea de Dyess y muestra el fuselaje integrado con el ala y los estabilizadores horizontales anchos.",
  },
  "f16-g2": {
    title: "Thunderbirds sobre Nueva York",
    subtitle: "Thunderbirds de la Fuerza Aérea de EE. UU.",
    description:
      "Seis F-16 de la patrulla acrobática Thunderbirds de la Fuerza Aérea de EE. UU. vuelan en formación en delta junto al Empire State Building.",
  },
  "f16-g3": {
    title: "Formación en rombo",
    subtitle: "Real Fuerza Aérea Danesa · 2014",
    description:
      "Nueve F-16 de los escuadrones 727 y 730 de la Real Fuerza Aérea Danesa vuelan en formación de rombo en el Danish Air Show.",
  },
  "f16-g4": {
    title: "Junto a un Su-27",
    subtitle: "1990",
    description:
      "Un F-16A Block 15G del 186.º Escuadrón de Caza vuela junto a un Su-27 de fabricación soviética, una vista cercana poco habitual de dos aviones contemporáneos.",
  },
  "f16-g5": {
    title: "Sobre los incendios petrolíferos",
    subtitle: "Kuwait · 1991",
    description:
      "Aviones del 4.º Ala de Caza, un F-16, un F-15C y un F-15E, sobrevuelan los incendios de petróleo de Kuwait provocados por las fuerzas iraquíes en retirada.",
  },
  "f16-g6": {
    title: "Aproximación final",
    subtitle: "Las Vegas, Nevada",
    description:
      "El piloto de un F-16 vira a la derecha en la aproximación final sobre el norte de Las Vegas, con depósitos externos de combustible y misiles visibles bajo el ala.",
  },
  "f16-g7": {
    title: "Tras el reabastecimiento",
    subtitle: "Irak · 2008",
    description:
      "Un F-16 Block 40 del 34.º Escuadrón Expedicionario de Caza sobre Irak tras recibir combustible de un KC-135, con bombas y misiles.",
  },
  "f16-g8": {
    title: "De frente",
    subtitle: "Operación Libertad Iraquí · 2003",
    description:
      "Un F-16 del 35.º Ala de Caza vuela una misión cerca de Irak en marzo de 2003, visto de frente con su armamento y sus depósitos de combustible.",
  },
  "f16-g9": {
    title: "Avión de exhibición danés",
    subtitle: "Royal International Air Tattoo · 2025",
    description:
      "El F-16AM de exhibición de la Real Fuerza Aérea Danesa, el E-006, se aleja en ascenso con postcombustión con su esquema rojo y blanco.",
  },
  "f16-g10": {
    title: "Esquema verde",
    subtitle: "Radom Air Show · 2023",
    description:
      "Un F-16 belga, el FA-87, rueda en el Radom Air Show con un esquema especial verde de reptil.",
  },
  // Eurofighter Typhoon
  "ty-g1": {
    title: "Salida",
    subtitle: "RAF Fairford · 2013",
    description:
      "Un Typhoon británico y otro italiano salen de RAF Fairford durante el Royal International Air Tattoo.",
  },
  "ty-g2": {
    title: "En la línea",
    subtitle: "RAF Akrotiri, Chipre",
    description:
      "Un Typhoon FGR4 del Escuadrón 6 en la pista, listo para volar una salida desde RAF Akrotiri.",
  },
  "ty-g3": {
    title: "Sobre Irak",
    subtitle: "Diciembre de 2015",
    description:
      "Un Typhoon británico sobrevuela Irak mientras las fuerzas de la coalición vuelan misiones diarias en apoyo de la Operación Inherent Resolve.",
  },
  "ty-g4": {
    title: "Postcombustión encendida",
    subtitle: "Cosford Air Show · 2009",
    description:
      "Un Typhoon pasa con la postcombustión encendida durante una exhibición en el Cosford Air Show.",
  },
  "ty-g5": {
    title: "Formación",
    subtitle: "RAF Fairford · 2018",
    description:
      "Una gran formación de Typhoon FGR4 de la Real Fuerza Aérea (RAF) sobrevuela RAF Fairford.",
  },
  "ty-g6": {
    title: "Typhoon alemán",
    subtitle: "Luftwaffe · 2013",
    description:
      "Un Typhoon de la Fuerza Aérea Alemana vira por encima y muestra los canards, el ala en delta y la deriva única.",
  },
  "typhoon-g7": {
    title: "Esquema conmemorativo",
    subtitle: "ILA Berlín · 2016",
    description:
      "El Typhoon alemán 30+68 del Ala Táctica 74, con un esquema especial azul que conmemora el 60.º aniversario de la Luftwaffe.",
  },
  "typhoon-g8": {
    title: "Formación de reabastecimiento",
    subtitle: "ILA Berlín · 2024",
    description:
      "Un avión cisterna neerlandés Airbus A330 MRTT encabeza una formación de reabastecimiento con dos Typhoon y dos Tornado.",
  },
  "typhoon-g9": {
    title: "Esquema negro",
    subtitle: "Radom Air Show · 2023",
    description:
      "El Typhoon FGR4 ZJ914 de la RAF con un esquema de exhibición negro y una gran escarapela en la cola.",
  },
  "typhoon-g10": {
    title: "Bandera británica",
    subtitle: "Radom Air Show · 2023",
    description:
      "El mismo avión visto desde abajo, con la bandera británica pintada en la parte inferior de las alas.",
  },
  // Dassault Rafale
  "rf-g1": {
    title: "Exhibición en solitario",
    subtitle: "Salón Aeronáutico de París · 2025",
    description:
      "El Rafale C de exhibición en solitario, con su colorido esquema, en el Salón Aeronáutico de París.",
  },
  "rf-g2": {
    title: "Rafale naval",
    subtitle: "Armada francesa",
    description:
      "Un Rafale M de la Armada francesa en un ascenso pronunciado con la postcombustión encendida.",
  },
  "rf-g3": {
    title: "Colores de exhibición",
    subtitle: "RAF Fairford · 2018",
    description:
      "Un Rafale C con un esquema de exhibición negro y rojo en la pista de RAF Fairford.",
  },
  "rf-g4": {
    title: "Alejándose en ascenso",
    subtitle: "Armada francesa",
    description:
      "Un Rafale M se aleja en ascenso con las dos postcombustiones encendidas y muestra los dos escapes.",
  },
  "rf-g5": {
    title: "Viraje",
    subtitle: "Armada francesa",
    description:
      "Un Rafale M vira por encima y muestra la parte inferior, los canards y la deriva única.",
  },
  "rf-g6": {
    title: "Fila de aviones",
    subtitle: "Aero India · 2013",
    description:
      "Dos Rafale B y un Rafale C estacionados junto a dos F-16C de la Fuerza Aérea de EE. UU. en Aero India 2013.",
  },
  "rafale-g7": {
    title: "Llegada a Croacia",
    subtitle: "Fuerza Aérea Croata · 2024",
    description:
      "Un Rafale llega a Croacia con las dos postcombustiones encendidas, cuando la Fuerza Aérea Croata empieza a recibir el avión.",
  },
  "rafale-g8": {
    title: "Toberas gemelas",
    subtitle: "Cognac · 2026",
    description:
      "Un Rafale de la Fuerza Aérea y Espacial francesa visto desde atrás en tierra, en Cognac, con las dos toberas de sus motores M88.",
  },
  "rafale-g9": {
    title: "Exposición de armamento",
    subtitle: "Dassault · 2005",
    description:
      "Un Rafale en exhibición estática rodeado de los misiles, las bombas y los depósitos de combustible que puede llevar.",
  },
  "rafale-g10": {
    title: "Rafale de Catar",
    subtitle: "Burdeos-Mérignac · 2019",
    description:
      "El QA217, un Rafale para la Fuerza Aérea Emiral de Catar, en Burdeos-Mérignac, cerca de la planta de montaje de Dassault.",
  },
  // Saab Gripen
  "gr-g1": {
    title: "Vórtices",
    subtitle: "Royal International Air Tattoo · 2025",
    description:
      "Un Gripen E sueco genera vórtices al ascender durante el Royal International Air Tattoo en RAF Fairford.",
  },
  "gr-g2": {
    title: "Escolta a un bombardero",
    subtitle: "Bomber Task Force Europe",
    description:
      "Tres Gripen suecos escoltan a un B-52H Stratofortress estadounidense durante una misión de la Bomber Task Force Europe.",
  },
  "gr-g3": {
    title: "Escolta cercana",
    subtitle: "Bomber Task Force Europe",
    description:
      "Un Gripen sueco vuela junto a un B-52H, visto desde el bombardero, y muestra el ala en delta y los canards.",
  },
  "gr-g4": {
    title: "Fila en Malmen",
    subtitle: "Malmen Airshow · 2012",
    description:
      "Una fila multinacional de Gripen en exhibición estática en el Malmen Airshow de 2012.",
  },
  "gr-g5": {
    title: "Exhibición del centenario",
    subtitle: "Flygdagarna · Malmen · 2026",
    description:
      "Un Gripen E realiza una exhibición acrobática con humo de colores en el salón aeronáutico del centenario de la Fuerza Aérea Sueca.",
  },
  "gr-g6": {
    title: "En el cielo",
    subtitle: "2010",
    description:
      "Un Gripen en vuelo visto desde abajo, con el ala en delta compacta y los canards.",
  },
  "gripen-g7": {
    title: "Despegue",
    subtitle: "Base aérea de Čáslav · 2010",
    description:
      "Un Gripen de la Fuerza Aérea Checa despega de Čáslav con su sombra sobre la pista.",
  },
  "gripen-g8": {
    title: "Formación checa",
    subtitle: "Base aérea de Čáslav · 2011",
    description:
      "Dos Gripen checos vuelan en formación con dos aviones de combate ligeros Aero L-159.",
  },
  "gripen-g9": {
    title: "Parte inferior",
    subtitle: "Ala de Uppland · 2025",
    description:
      "Un Gripen C sueco visto desde abajo, con el ala en delta, los canards y la postcombustión encendida.",
  },
  "gripen-g10": {
    title: "Cola pintada",
    subtitle: "Radom Air Show · 2018",
    description:
      "Un Gripen checo con la cola pintada de forma especial rueda en el Radom Air Show.",
  },
  // Shenyang J-35
  "j35-g1": {
    title: "FC-31 en aproximación",
    subtitle: "Airshow China · Zhuhai · 2014",
    description:
      "Un prototipo FC-31 con el tren de aterrizaje desplegado en aproximación en Zhuhai, durante la presentación pública del avión.",
  },
  "j35-g2": {
    title: "Vista trasera",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "La parte trasera de un prototipo FC-31 2.0 en exhibición, con las dos toberas, la cola ancha y las derivas inclinadas hacia fuera.",
  },
  "j35-g3": {
    title: "Prototipo en exhibición",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "Una vista lateral del prototipo FC-31 2.0 junto a aviones Shenyang más antiguos, con el fuselaje integrado y alargado.",
  },
  "j35-g4": {
    title: "Rodaje en el Fujian",
    subtitle: "Tipo 003 · 2025",
    description:
      "Un J-35 rueda por la cubierta de vuelo del portaaviones Fujian, visto de lado.",
  },
  "j35-g5": {
    title: "Personal de cubierta",
    subtitle: "Tipo 003 · 2025",
    description:
      "Un miembro del personal de cubierta hace señales a un J-35 en el portaaviones Fujian. Se ven las alas plegables y la pata de morro.",
  },
  "j35-g6": {
    title: "Recuperación con cable de frenado",
    subtitle: "Tipo 003 · 2025",
    description:
      "Un J-35 aterriza en el portaaviones Fujian y engancha un cable de frenado con su gancho de cola.",
  },
  "j35-g7": {
    title: "Vista frontal",
    subtitle: "SAC Aviation Expo Park · 2026",
    description:
      "El prototipo FC-31 2.0 visto de frente, con las tomas de aire a cada lado de la cabina y las derivas inclinadas hacia fuera.",
  },
  // Shenyang J-16
  "j16-g1": {
    title: "Pasada cercana",
    subtitle: "Salón Aeronáutico de Changchun · 2023",
    description:
      "Un J-16 en vuelo, con la gran célula de doble deriva y los puntos de anclaje bajo las alas.",
  },
  "j16-g2": {
    title: "Postcombustión",
    subtitle: "Salón Aeronáutico de Changchun · 2023",
    description:
      "Dos J-16 se alejan en viraje con la postcombustión encendida durante una exhibición.",
  },
  "j16-g3": {
    title: "Cabina abierta",
    subtitle: "Salón Aeronáutico de Changchun · 2025",
    description:
      "Un J-16 en exhibición estática con la cúpula abierta, que deja ver su cabina biplaza.",
  },
  "j16-g4": {
    title: "Cisterna y caza",
    subtitle: "Estrecho de Miyako · 2024",
    description:
      "Un avión cisterna chino YY-20 y un J-16 sobrevuelan el estrecho de Miyako, en una fotografía tomada por la Fuerza Aérea de Autodefensa de Japón.",
  },
  "j16-g5": {
    title: "Formación con cisterna",
    subtitle: "Salón Aeronáutico de Changchun · 2025",
    description:
      "Un cisterna YY-20A encabeza a dos cazas J-16 en un vuelo en formación.",
  },
  "j16-g6": {
    title: "En el cielo",
    subtitle: "Salón Aeronáutico de Changchun · 2025",
    description:
      "Un J-16 en vuelo contra un cielo despejado durante la jornada de puertas abiertas de la Fuerza Aérea.",
  },
  "j16-g7": {
    title: "Formación de reabastecimiento",
    subtitle: "Salón Aeronáutico de Changchun · 2023",
    description:
      "Un cisterna YY-20A vuela con cazas J-20 y J-16 en una formación de reabastecimiento en vuelo.",
  },
  "j16-g8": {
    title: "Interceptado",
    subtitle: "Ministerio de Defensa de Japón · 2023",
    description:
      "Un J-16 de la Fuerza Aérea del EPL sobre las nubes, fotografiado desde un avión de la Fuerza Aérea de Autodefensa de Japón en diciembre de 2023.",
  },
  // Shenyang J-15
  "j15-g1": {
    title: "Sobre el mar",
    subtitle: "Mar de China Oriental · 2022",
    description:
      "Dos J-15 en el aire cerca de Japón, en una fotografía tomada por el Estado Mayor Conjunto de Japón.",
  },
  "j15-g2": {
    title: "Ala aérea embarcada",
    subtitle: "Liaoning · 2022",
    description:
      "Dos J-15 del portaaviones Liaoning, fotografiados desde el mar por la Fuerza Marítima de Autodefensa de Japón.",
  },
  "j15-g3": {
    title: "Reabastecimiento entre aviones",
    subtitle: "Armada del EPL",
    description:
      "Un J-15 se aproxima al cesto de reabastecimiento de un avión cisterna de apoyo, visto desde el cisterna.",
  },
  "j15-g4": {
    title: "Listo para el lanzamiento",
    subtitle: "Tipo 003 Fujian · 2025",
    description:
      "Un J-15T en el Fujian, en la posición de lanzamiento, detrás del deflector de chorro.",
  },
  "j15-g5": {
    title: "Formación embarcada",
    subtitle: "Armada del EPL",
    description:
      "Un J-35, un J-15T y un J-15DT vuelan juntos y muestran tres de los aviones embarcados más recientes de la armada.",
  },
  "j15-g6": {
    title: "Prototipo temprano",
    subtitle: "Mianyang · 2014",
    description:
      "Un J-15 temprano expuesto en una feria de ciencia y tecnología en Mianyang, pintado con imprimación amarilla.",
  },
  "j15-g7": {
    title: "Lanzamiento desde el Liaoning",
    subtitle: "Liaoning · 2022",
    description:
      "Un J-15 abandona la rampa de salto del portaaviones Liaoning, al sur de la isla de Ishigaki, en mayo de 2022.",
  },
  "j15-g8": {
    title: "Recuperación",
    subtitle: "Liaoning · 2022",
    description:
      "Un J-15 se alinea para aterrizar en el portaaviones Liaoning, fotografiado por las Fuerzas de Autodefensa de Japón en mayo de 2022.",
  },
  // Boeing F-15EX
  "f15ex-g1": {
    title: "Eagle II",
    subtitle: "Base aérea de Eglin · 2021",
    description:
      "Un F-15EX del 40.º Escuadrón de Pruebas en Vuelo vira en vuelo y muestra sus dos derivas y los depósitos de combustible conformes.",
  },
  "f15ex-g2": {
    title: "Despegue",
    subtitle: "Base de la Guardia Nacional Aérea de Portland · 2025",
    description:
      "Un F-15EX del 123.º Escuadrón de Caza despega de Portland, en Oregón.",
  },
  "f15ex-g3": {
    title: "Con un Ghost Bat",
    subtitle: "Valiant Shield · 2026",
    description:
      "Un F-15EX vuela con un MQ-28 Ghost Bat no tripulado durante el ejercicio Valiant Shield.",
  },
  "f15ex-g4": {
    title: "Sobre la costa del Golfo",
    subtitle: "Florida · 2023",
    description:
      "Dos F-15EX vuelan por la costa de Florida en agosto de 2023.",
  },
  "f15ex-g5": {
    title: "Llegada a Eglin",
    subtitle: "Base aérea de Eglin · 2021",
    description:
      "El primer F-15EX llega a la base aérea de Eglin, donde un señalero lo guía hasta su plaza de estacionamiento.",
  },
  "f15ex-g6": {
    title: "Kadena",
    subtitle: "Base aérea de Kadena · Japón",
    description:
      "Un F-15EX despega en la base aérea de Kadena, en Japón, junto con un F-15E.",
  },
  "f15ex-g7": {
    title: "Reabastecimiento en vuelo",
    subtitle: "Fuerza Aérea de EE. UU.",
    description:
      "Un F-15EX se aproxima a un avión cisterna para el reabastecimiento aire-aire.",
  },
  "f15ex-g8": {
    title: "Vuelo de presentación",
    subtitle: "Base de la Guardia Nacional Aérea de Portland · 2024",
    description:
      "Un F-15EX del 142.º Ala despega junto a la torre de control del aeropuerto de Portland en la ceremonia de presentación del avión.",
  },
  "f15ex-g9": {
    title: "Rodando hacia la pista",
    subtitle: "Base de la Guardia Nacional Aérea de Portland · 2024",
    description:
      "El F-15EX 007 del 142.º Ala rueda antes del despegue. El ala sustituirá sus F-15C/D Eagle por el nuevo avión.",
  },
  "f15ex-g10": {
    title: "Cabina biplaza",
    subtitle: "Base de la Guardia Nacional Aérea de Portland · 2024",
    description:
      "Las tripulaciones se preparan para el despegue en la cabina biplaza del F-15EX durante la ceremonia de presentación.",
  },  "kf21-g1": {
    title: "Exhibición en vuelo",
    subtitle: "Seoul ADEX · 2023",
    description:
      "Un KF-21 de la Fuerza Aérea de la República de Corea realiza una exhibición en vuelo en la Exposición Internacional Aeroespacial y de Defensa de Seúl.",
  },
  "kf21-g2": {
    title: "Ascenso pronunciado",
    subtitle: "Base aérea de Seúl · 2023",
    description:
      "Un KF-21 inicia un ascenso pronunciado durante una exhibición aérea en Seoul ADEX.",
  },
  "kf21-g3": {
    title: "Vista lateral en vuelo",
    subtitle: "Seoul ADEX · 2023",
    description:
      "Un KF-21 en vuelo, en el que se aprecian su morro con aristas y sus dos derivas inclinadas.",
  },
  "kf21-g4": {
    title: "Tercer prototipo",
    subtitle: "Salón aeronáutico de Sacheon · 2022",
    description:
      "El tercer prototipo del KF-21 expuesto al público en el salón aeronáutico de Sacheon en octubre de 2022.",
  },
  "kf21-g5": {
    title: "Perfil lateral",
    subtitle: "Salón aeronáutico de Sacheon · 2022",
    description:
      "El perfil lateral de un prototipo del KF-21 expuesto en Sacheon, en el que se ve la forma del morro y de la cúpula.",
  },
  "kf21-g6": {
    title: "En la plataforma",
    subtitle: "Seoul ADEX · 2023",
    description:
      "Un prototipo del KF-21 en exposición estática en Seoul ADEX 2023, con la cúpula abierta.",
  },
  "kf21-g7": {
    title: "De frente",
    subtitle: "Seoul ADEX · 2023",
    description:
      "Un KF-21 visto de frente en Seoul ADEX, guiado por un miembro del personal de tierra.",
  },
  "kf21-g8": {
    title: "Prototipo biplaza",
    subtitle: "Seoul ADEX · 2023",
    description:
      "El sexto prototipo, uno de los dos biplazas construidos para los ensayos.",
  },
  "su35-g1": {
    title: "Interceptado cerca de Japón",
    subtitle: "Mar de Japón · 2024",
    description:
      "Un Su-35S ruso fotografiado por la Fuerza Aérea de Autodefensa de Japón mientras vuela del mar de China Oriental hacia el mar de Japón.",
  },
  "su35-g2": {
    title: "Interceptación cercana",
    subtitle: "Mar Mediterráneo · 2020",
    description:
      "Un Su-35 ruso vuela muy cerca de un P-8A Poseidon de la Armada de EE. UU. sobre el Mediterráneo, en una interceptación que la Armada calificó de insegura.",
  },
  "su35-g3": {
    title: "Despegue en el MAKS",
    subtitle: "Zhukovski · 2013",
    description:
      "Un Su-35S despega ante el público en el salón aeronáutico MAKS, cerca de Moscú.",
  },
  "su35-g4": {
    title: "En la pista",
    subtitle: "MAKS · 2015",
    description:
      "Un Su-35S rueda por la pista en el salón aeronáutico MAKS.",
  },
  "su35-g5": {
    title: "Ascenso vertical",
    subtitle: "MAKS · 2015",
    description:
      "Un Su-35S asciende con fuerte inclinación durante su exhibición en vuelo en el MAKS 2015.",
  },
  "su35-g6": {
    title: "Exhibición de un prototipo",
    subtitle: "MAKS · 2009",
    description:
      "Uno de los primeros prototipos modernizados del Su-35, con camuflaje, vuela en el MAKS 2009.",
  },
  "su35-g7": {
    title: "A contraluz",
    subtitle: "Rusia · 2016",
    description:
      "Un Su-35S recortado contra el sol con el tren de aterrizaje desplegado.",
  },
  "su35-g8": {
    title: "Con un Tu-95MS",
    subtitle: "Russian Knights · 2022",
    description:
      "Cazas Su-35S de la patrulla acrobática Russian Knights vuelan en formación con un bombardero Tu-95MS.",
  },
  "su35-g9": {
    title: "Exposición estática",
    subtitle: "Zhukovski · 2012",
    description:
      "Un Su-35S de la Fuerza Aérea Rusa en exposición estática en Zhukovski.",
  },
  "su35-g10": {
    title: "Exhibición en vuelo",
    subtitle: "MAKS · 2013",
    description:
      "Un Su-35S durante su exhibición en vuelo en el MAKS 2013.",
  },
  "fa18-g1": {
    title: "Apontaje",
    subtitle: "USS Nimitz · 2023",
    description:
      "Un F/A-18E de los Blue Diamonds del VFA-146 engancha el cable en la cubierta del USS Nimitz, en el mar de Filipinas.",
  },
  "fa18-g2": {
    title: "Reabastecimiento",
    subtitle: "Mar de Filipinas · 2014",
    description:
      "Un F/A-18E del VFA-195 reposta de un KC-135 Stratotanker de la Fuerza Aérea de EE. UU.",
  },
  "fa18-g3": {
    title: "Pasada a alta velocidad",
    subtitle: "USS Carl Vinson · 2011",
    description:
      "Un F/A-18E del VFA-81 realiza una pasada a alta velocidad sobre el USS Carl Vinson durante una demostración de poder aéreo.",
  },
  "fa18-g4": {
    title: "Cono de vapor",
    subtitle: "USS Kitty Hawk · 2007",
    description:
      "Un F/A-18F atraviesa una nube de condensación a velocidad transónica durante una demostración de poder aéreo.",
  },
  "fa18-g5": {
    title: "Maniobras",
    subtitle: "Mar Arábigo · 2012",
    description:
      "Un F/A-18F del VFA-103 maniobra durante una demostración de poder aéreo desde el USS Dwight D. Eisenhower.",
  },
  "fa18-g6": {
    title: "Lanzamiento con catapulta",
    subtitle: "USS Ronald Reagan · 2013",
    description:
      "Un F/A-18E del VFA-137 despega de la cubierta del USS Ronald Reagan en el Pacífico.",
  },
  "fa18-g7": {
    title: "Real Fuerza Aérea Australiana",
    subtitle: "Brisbane · 2019",
    description:
      "Un F/A-18F de la Real Fuerza Aérea Australiana realiza acrobacias sobre Brisbane mientras ensaya para el festival Riverfire.",
  },
  "fa18-g8": {
    title: "Sobre el HMS Queen Elizabeth",
    subtitle: "Océano Atlántico · 2017",
    description:
      "Un F/A-18E del VFA-31 y un F/A-18F del VFA-213 sobrevuelan el portaaviones británico HMS Queen Elizabeth.",
  },
  "fa18-g9": {
    title: "Condensación sobre las alas",
    subtitle: "NAS Oceana · 2004",
    description:
      "Un F/A-18F del VFA-122 hace un viraje cerrado en un festival aéreo y forma condensación sobre las alas.",
  },
  "fa18-g10": {
    title: "Growler sobre Polonia",
    subtitle: "Norte de Polonia · 2022",
    description:
      "Un EA-18G Growler del VAQ-134 de la Armada de EE. UU. patrulla sobre Polonia mientras está desplegado en Alemania para la OTAN.",
  },
  "f2-g1": {
    title: "Formación sobre Guam",
    subtitle: "Cope North · 2023",
    description:
      "Un F-2 de la Fuerza Aérea de Autodefensa de Japón vuela en formación con aviones de la Fuerza Aérea de EE. UU. cerca de Guam.",
  },
  "f2-g2": {
    title: "Aterrizaje en Andersen",
    subtitle: "Guam · 2024",
    description:
      "Un F-2 aterriza en la base aérea de Andersen durante el ejercicio Cope North 24.",
  },
  "f2-g3": {
    title: "En la línea de vuelo",
    subtitle: "Guam · 2023",
    description:
      "Varios F-2 estacionados en la línea de vuelo de la base aérea de Andersen durante Cope North 2023.",
  },
  "f2-g4": {
    title: "Despegue con poscombustión",
    subtitle: "Guam · 2010",
    description:
      "El F-2A 523 del 6.º Escuadrón despega de la base aérea de Andersen con la poscombustión encendida.",
  },
  "f2-g5": {
    title: "Tras el tsunami",
    subtitle: "Matsushima · 2011",
    description:
      "F-2 dañados en la base aérea de Matsushima una semana después del tsunami de marzo de 2011.",
  },
  "f2-g6": {
    title: "Exhibición de reabastecimiento",
    subtitle: "Komaki · 2018",
    description:
      "Un F-2A sigue a un avión cisterna KC-767 en una exhibición simulada de reabastecimiento en vuelo en la base aérea de Komaki.",
  },
  "f2-g7": {
    title: "Exhibición en vuelo",
    subtitle: "Komatsu · 2018",
    description:
      "El F-2A 13-8514 en una exhibición en vuelo en la base aérea de Komatsu.",
  },
  "f2-g8": {
    title: "Biplaza en viraje",
    subtitle: "Gifu · 2019",
    description:
      "El F-2B 03-8105 vira durante una exhibición en vuelo en la base aérea de Gifu.",
  },
  "f2-g9": {
    title: "Elephant walk",
    subtitle: "8.º Escuadrón · 2021",
    description:
      "Varios F-2 del 8.º Escuadrón se alinean en la pista en un elephant walk para celebrar el 60.º aniversario del escuadrón.",
  },
  "f2-g10": {
    title: "Pareja sobre el mar",
    subtitle: "Fuerza Aérea de Autodefensa de Japón",
    description:
      "Dos F-2 vuelan bajo sobre el mar, el entorno para el que se diseñó el avión.",
  },
};

const galleryText = {
  "j-20": {
    name: "J-20",
    fullName: "Chengdu J-20",
    label: "Airframe / 20",
    intro:
      "Una colección cinematográfica de fotografías públicas que documentan el J-20 en exhibiciones aéreas y otras apariciones públicas.",
  },
  "f-22": {
    name: "F-22",
    fullName: "Lockheed Martin F-22",
    label: "Airframe / 22",
    intro:
      "Una colección de fotografías de dominio público del F-22 en servicio, desde salidas de entrenamiento y despliegues hasta exhibiciones aéreas.",
  },
  "f-35": {
    name: "F-35",
    fullName: "Lockheed Martin F-35",
    label: "Airframe / 35",
    intro:
      "Una colección de fotografías del F-35 en servicio, desde salidas de pruebas en vuelo y ejercicios hasta exhibiciones aéreas.",
  },
  "su-57": {
    name: "Su-57",
    fullName: "Sukhoi Su-57",
    label: "Airframe / 57",
    intro:
      "Una colección de fotografías con licencia libre del Su-57 y de sus prototipos T-50, desde MAKS, en Rusia, hasta Airshow China, en Zhuhai.",
  },
  "f-16": {
    name: "F-16",
    fullName: "General Dynamics F-16",
    label: "Airframe / 16",
    intro:
      "Una colección de fotografías del F-16 en servicio, desde los encuentros de la Guerra Fría y la guerra del Golfo hasta exhibiciones aéreas.",
  },
  typhoon: {
    name: "Typhoon",
    fullName: "Eurofighter Typhoon",
    label: "Airframe / Typhoon",
    intro:
      "Una colección de fotografías del Typhoon en servicio con las fuerzas aéreas británica, alemana e italiana, desde operaciones hasta exhibiciones aéreas.",
  },
  rafale: {
    name: "Rafale",
    fullName: "Dassault Rafale",
    label: "Airframe / Rafale",
    intro:
      "Una colección de fotografías del Rafale en servicio con la fuerza aérea y la armada francesas, desde vuelos de exhibición hasta filas de aviones en salones aeronáuticos.",
  },
  gripen: {
    name: "Gripen",
    fullName: "Saab Gripen",
    label: "Airframe / Gripen",
    intro:
      "Una colección de fotografías del Gripen, desde las exhibiciones aéreas de Malmen y las escoltas a bombarderos hasta el nuevo Gripen E en exposición.",
  },
  "j-35": {
    name: "J-35",
    fullName: "Shenyang J-35",
    label: "Airframe / J-35",
    intro:
      "Una colección de fotografías con licencia libre de los demostradores FC-31 y del J-35 embarcado, desde el primer vuelo público en Zhuhai hasta la cubierta del Fujian.",
  },
  "j-16": {
    name: "J-16",
    fullName: "Shenyang J-16",
    label: "Airframe / J-16",
    intro:
      "Una colección de fotografías del J-16 en salones aeronáuticos y en vuelo, incluido el reabastecimiento desde un cisterna YY-20.",
  },
  "j-15": {
    name: "J-15T",
    fullName: "Shenyang J-15",
    label: "Airframe / J-15T",
    intro:
      "Una colección de fotografías de la familia J-15, desde un prototipo temprano y las salidas cerca de Japón hasta el J-15T con capacidad de catapulta en el Fujian.",
  },
  "f-15ex": {
    name: "F-15EX",
    fullName: "Boeing F-15EX",
    label: "Airframe / F-15EX",
    intro:
      "Una colección de fotografías de dominio público del F-15EX Eagle II, desde la primera llegada a Eglin hasta su servicio con unidades de la Guardia Nacional Aérea y en el Pacífico.",
  },
  "kf-21": {
    name: "KF-21",
    fullName: "KAI KF-21 Boramae",
    label: "Airframe / KF-21",
    intro:
      "Una colección de fotografías de dominio público y con licencia libre del KF-21, desde los prototipos expuestos en Sacheon hasta las exhibiciones en vuelo en Seoul ADEX.",
  },
  "su-35": {
    name: "Su-35",
    fullName: "Sukhoi Su-35S",
    label: "Airframe / Su-35",
    intro:
      "Una colección de fotografías con licencia libre del Su-35S, desde las exhibiciones en salones aeronáuticos cerca de Moscú hasta interceptaciones fotografiadas por tripulaciones japonesas y estadounidenses.",
  },
  "fa-18": {
    name: "Super Hornet",
    fullName: "Boeing F/A-18E/F Super Hornet",
    label: "Airframe / F/A-18E/F",
    intro:
      "Una colección de fotografías, en su mayoría de dominio público, del Super Hornet, desde las cubiertas de los portaaviones y las demostraciones de poder aéreo hasta la Real Fuerza Aérea Australiana y el EA-18G Growler.",
  },
  "f-2": {
    name: "F-2",
    fullName: "Mitsubishi F-2",
    label: "Airframe / F-2",
    intro:
      "Una colección de fotografías de dominio público y con licencia libre del F-2, desde ejercicios sobre Guam hasta exhibiciones en vuelo en bases aéreas japonesas.",
  },
  archive: {
    name: "Archivo",
    fullName: "Archivo Airframe",
    label: "Airframe / Todo",
    intro:
      `Todas las fotografías del hangar, una tras otra. Se pueden recorrer los ${counts.es.all} aviones por orden o abrir cualquier imagen para moverse por todo el carrete en el visor a pantalla completa.`,
  },
};

export default {
  captions,
  galleryText,
};
