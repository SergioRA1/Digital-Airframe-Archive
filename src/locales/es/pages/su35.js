// Spanish text for src/pages/su35.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "Sukhoi Su-35S · OTAN «Flanker-E»",
  tagline:
    "La versión más desarrollada del Su-27 Flanker: un gran caza bimotor con motores de empuje vectorial, un radar de largo alcance y una cabina nueva, construido para Rusia y para la exportación.",
  heroStats: [
    ["4,5", "Generación"],
    ["02", "Motores"],
    ["2008", "Primer vuelo"],
  ],
  next: {
    label: "Boeing F/A-18E/F Super Hornet",
  },

  designHeading: "El Flanker, rehecho.",
  designIntro:
    "El Su-35S conserva la forma del Su-27, pero sustituye casi todo su interior. Cuatro cambios definen el avión.",
  designFeatures: [
    {
      kicker: "PROPULSIÓN",
      title: "Empuje vectorial",
      description:
        "Sus motores AL-41F1S tienen toberas orientables que dirigen el empuje, lo que permite mantener el control a muy baja velocidad y con grandes ángulos de ataque.",
      metric: "EMPUJE (CADA UNO)",
      value: "≈ 142 KN",
    },
    {
      kicker: "SENSORES",
      title: "Radar Irbis-E",
      description:
        "Un radar de barrido electrónico pasivo con una antena muy grande. Según informes, detecta blancos grandes a unos 350 a 400 kilómetros.",
      metric: "RADAR",
      value: "IRBIS-E",
    },
    {
      kicker: "SEGUIMIENTO PASIVO",
      title: "Sensor OLS-35",
      description:
        "Un sensor de búsqueda y seguimiento por infrarrojos delante de la cabina detecta el calor de otros aviones sin emitir ninguna señal.",
      metric: "IRST",
      value: "OLS-35",
    },
    {
      kicker: "CÉLULA",
      title: "Más simple, más robusto, más combustible",
      description:
        "Se suprimieron los canards de versiones anteriores y el gran aerofreno situado detrás de la cabina, se reforzó la estructura y aumentó el combustible interno.",
      metric: "CANARDS",
      value: "NINGUNO",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por Sukhoi y la United Aircraft Corporation, redondeadas para su presentación. Las cifras de prestaciones son datos del fabricante que no se han comprobado de forma independiente.",
  specNotice:
    "Los valores siguen las publicaciones del fabricante para el Su-35S. Rusia publica pocas cifras oficiales, así que muchas se marcan como según informes.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "SUPERIORIDAD AÉREA",
      detail:
        "Hecho sobre todo para conquistar el dominio del aire, con una gran carga de armamento aire-superficie y antibuque.",
    },
    {
      label: "FABRICANTE",
      value: "SUKHOI",
      unit: "RUSIA",
      detail:
        "Diseñado por Sukhoi y construido en Komsomolsk del Amur, dentro de la United Aircraft Corporation.",
    },
    {
      label: "NOMBRE",
      value: "SU-35S",
      unit: "OTAN: FLANKER-E",
      detail:
        "Su-35S es la versión de serie para Rusia. El Su-35 anterior, de los años noventa y sin relación directa, era un desarrollo del Su-27 con canards.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO",
      detail: "El avión de serie es un caza monoplaza.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × AL-41F1S",
      unit: "TURBOFÁN CON EMPUJE VECTORIAL",
      detail:
        "Dos motores Saturn AL-41F1S, también conocidos como 117S, de unos 142 kN cada uno en régimen de emergencia.",
    },
    {
      label: "EMPUJE POR MOTOR",
      value: "≈ 142",
      unit: "KILONEWTONS",
      imperial: {
        value: "≈ 31.900",
        unit: "LIBRAS",
      },
      detail: "Cada AL-41F1S en régimen de emergencia.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 30 MM",
      unit: "12 ESTACIONES EXTERNAS",
      detail:
        "Un cañón interno GSh-30-1 y doce puntos de anclaje para unos 8.000 kilogramos de misiles, bombas y contenedores.",
    },
    {
      label: "RADAR",
      value: "IRBIS-E",
      unit: "PESA",
      detail:
        "Un radar de barrido electrónico pasivo, combinado con el sensor de búsqueda y seguimiento por infrarrojos OLS-35.",
    },
    {
      label: "LONGITUD",
      value: "21,9",
      unit: "METROS",
      imperial: {
        value: "71,9",
        unit: "PIES",
      },
      detail: "Longitud publicada.",
    },
    {
      label: "ENVERGADURA",
      value: "15,3",
      unit: "METROS",
      imperial: {
        value: "50,2",
        unit: "PIES",
      },
      detail: "Envergadura publicada.",
    },
    {
      label: "ALTURA",
      value: "5,9",
      unit: "METROS",
      imperial: {
        value: "19,4",
        unit: "PIES",
      },
      detail: "Altura publicada.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 34.500",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 76.100",
        unit: "LIBRAS",
      },
      detail: "Cifra del fabricante.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 2,25",
      unit: "A GRAN ALTITUD",
      detail: "Cifra del fabricante. Unos Mach 1,13 al nivel del mar.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "18.000",
      unit: "METROS",
      imperial: {
        value: "59.000",
        unit: "PIES",
      },
      detail: "Cifra del fabricante.",
    },
    {
      label: "ALCANCE",
      value: "≈ 3.600",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 2.200",
        unit: "MILLAS",
      },
      detail:
        "Cifra del fabricante a gran altitud con combustible interno. No se ha publicado un radio de combate.",
    },
    {
      label: "PRIMER VUELO",
      value: "19 FEB 2008",
      unit: "ZHUKOVSKI, RUSIA",
      detail:
        "Primer vuelo del primer prototipo modernizado, conocido como T-10BM.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2014",
      unit: "FUERZA AÉREA RUSA",
      detail: "El primer regimiento operativo recibió sus aviones en febrero de 2014.",
    },
  ],

  historyHeading: "Las dos vidas del Su-35.",
  historyIntro:
    "El programa en doce fechas, desde una versión con canards del Su-27 que nunca llegó a fabricarse en serie hasta el moderno Su-35S en combate y en exportación.",
  milestones: [
    {
      title: "Vuela el Su-27M",
      detail:
        "El primer Su-27M, un Su-27 mejorado con canards, realiza su primer vuelo. Más tarde se le da el nombre de Su-35.",
    },
    {
      title: "Recibe el nombre de Su-35",
      detail:
        "El caza mejorado se presenta en el extranjero como Su-35. Solo se construye alrededor de una docena y nunca entra en producción en serie.",
    },
    {
      title: "Vuela el nuevo Su-35",
      detail:
        "Un avión rediseñado sin canards, el T-10BM, realiza su primer vuelo en Zhukovski. Se convierte en el Su-35S.",
    },
    {
      title: "Se pierde un prototipo",
      detail:
        "Un prototipo queda destruido por el fuego tras un accidente durante una carrera de rodaje a alta velocidad. El piloto se eyecta.",
    },
    {
      title: "Primer pedido",
      detail:
        "El Ministerio de Defensa ruso encarga 48 aviones Su-35S en el salón aeronáutico MAKS.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "El primer regimiento operativo, el 23.º Regimiento de Aviación de Caza en Dzyomgi, recibe sus aviones.",
    },
    {
      title: "China encarga 24",
      detail:
        "China firma por 24 aviones, por unos 2.000 millones de dólares, y se convierte en el primer cliente de exportación.",
    },
    {
      title: "Primer despliegue de combate",
      detail: "Rusia envía cazas Su-35S a Siria.",
    },
    {
      title: "Primeras entregas de exportación",
      detail:
        "Los cuatro primeros aviones llegan a China. Los 24 están entregados en 2018.",
    },
    {
      title: "Guerra en Ucrania",
      detail:
        "El Su-35S vuela en la guerra de Rusia contra Ucrania, y según informes se pierden varios, el primero el 3 de abril de 2022.",
    },
    {
      title: "Argelia recibe aviones",
      detail:
        "Según informes, Su-35 fabricados en origen para Egipto, que canceló su pedido, se entregan a Argelia.",
    },
    {
      title: "Pedido iraní",
      detail:
        "Documentos filtrados describen la fabricación de Su-35 para Irán. Ni Rusia ni Irán han confirmado ninguna entrega.",
    },
  ],

  variantsHeading: "Tres Su-35.",
  variantsIntro:
    "El nombre Su-35 ha designado dos aviones distintos. El Su-27M con canards de los años noventa y su entrenador biplaza se construyeron en pequeño número antes del rediseñado Su-35S.",
  variants: [
    {
      name: "Prototipo con canards",
      status: "RETIRADO",
      caption: "Un Su-27M en el salón ILA de Berlín, 1994",
      summary:
        "Un Su-27 mejorado con canards y aviónica nueva, que voló por primera vez en 1988 y recibió el nombre de Su-35. Se construyó alrededor de una docena y ninguno entró en producción en serie.",
      points: [
        "Canards delante del ala",
        "Primer vuelo en 1988",
        "Pasaron a ser aviones de ensayo",
      ],
    },
    {
      name: "Entrenador biplaza",
      status: "1 CONSTRUIDO",
      caption: "El Su-35UB (abajo) junto al Su-47 en el MAKS, 2003",
      summary:
        "Un único entrenador de combate biplaza construido a partir del diseño anterior del Su-35, que voló por primera vez en 2000.",
      points: [
        "Motores de empuje vectorial",
        "Primer vuelo en agosto de 2000",
        "No se fabricó en serie",
      ],
    },
    {
      name: "Caza de serie",
      status: "EN SERVICIO",
      caption: "Un Su-35S despegando en el salón aeronáutico MAKS, 2013",
      summary:
        "La versión de serie rediseñada para Rusia y para la exportación, sin canards y con el radar Irbis-E y los motores AL-41F1S.",
      points: [
        "Radar Irbis-E",
        "Motores AL-41F1S de empuje vectorial",
        "Operado por Rusia, China y Argelia",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del Su-35S junto a otros ${counts.es.others} aviones. Es uno de los aviones más grandes de la tabla y uno de los tres con motores de empuje vectorial.`,

  glossary: [
    {
      term: "Flanker",
      definition:
        "El nombre en código de la OTAN para la familia Su-27. El Su-35S es el Flanker-E.",
    },
    {
      term: "Empuje vectorial",
      definition:
        "Toberas de motor que pueden orientarse para dirigir el empuje, lo que ayuda al avión a girar y a mantener el control a baja velocidad.",
    },
    {
      term: "PESA",
      definition:
        "Radar de barrido electrónico pasivo. Un radar cuyo haz se orienta electrónicamente desde un único transmisor, a diferencia de un AESA, que tiene muchos.",
    },
    {
      term: "IRST",
      definition:
        "Búsqueda y seguimiento por infrarrojos. Un sensor pasivo que detecta el calor de otros aviones sin emitir ninguna señal propia.",
    },
    {
      term: "Canard",
      definition:
        "Una pequeña superficie alar delante del ala principal. El Su-35 de los años noventa los tenía; el Su-35S no.",
    },
    {
      term: "T-10BM",
      definition:
        "La designación interna de Sukhoi para el avión rediseñado que se convirtió en el Su-35S de serie.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Sukhoi Su-35",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del Su-35",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante cuando las hay. Rusia publica pocos datos oficiales, así que los valores marcados como según informes varían según la fuente.",
};
