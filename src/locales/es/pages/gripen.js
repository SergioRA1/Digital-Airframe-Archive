// Spanish text for src/pages/gripen.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "Saab JAS 39 Gripen",
  tagline:
    "El caza ligero monomotor de Suecia, diseñado para operar desde carreteras dispersas y pistas cortas y que hoy se opera en su versión E, de mayor tamaño.",
  heroStats: [
    ["4,5", "Generación"],
    ["01", "Motor"],
    ["1988", "Primer vuelo"],
  ],
  next: {
    label: "Shenyang J-35",
  },

  designHeading: "Pequeño, disperso, listo.",
  designIntro:
    "El Gripen se diseñó para un país que esperaba combatir desde muchas bases pequeñas. Ese requisito marcó todo el avión.",
  designFeatures: [
    {
      kicker: "OPERACIONES",
      title: "Basado de forma dispersa",
      description:
        "El avión se diseñó para despegar y aterrizar en tramos cortos de carretera y para que un pequeño equipo de tierra lo preparase para su siguiente salida.",
      metric: "OBJETIVO DE DISEÑO",
      value: "BASES EN CARRETERA",
    },
    {
      kicker: "AERODINÁMICA",
      title: "Delta con canard compacto",
      description:
        "Una célula pequeña y ligera, con canards y ala en delta, mantiene bajos el tamaño y el peso. El Gripen C mide solo unos 14 metros de largo.",
      metric: "LONGITUD (C)",
      value: "14,1 M",
    },
    {
      kicker: "PERCEPCIÓN",
      title: "Radar AESA Raven",
      description:
        "El Gripen E lleva el radar AESA Raven ES-05, que puede explorar un campo amplio, junto con un sensor de búsqueda y seguimiento por infrarrojos.",
      metric: "RADAR (E)",
      value: "RAVEN ES-05",
    },
    {
      kicker: "RED",
      title: "Operaciones con enlace de datos",
      description:
        "Los enlaces tácticos de datos permiten a los Gripen compartir objetivos e imágenes de sensores entre sí y con otros aviones y unidades de tierra.",
      metric: "ENLACE DE DATOS",
      value: "EN RED",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por Saab y las fuerzas armadas de Suecia, redondeadas para su presentación. El Gripen C/D es la versión de referencia, y se indica el Gripen E, de mayor tamaño, donde difiere.",
  specNotice:
    "Los valores siguen las publicaciones públicas del fabricante y del Gobierno. Cuando las cifras difieren entre el Gripen C/D y el E, se indica la del C/D y se señala la del E.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "CAZA LIGERO",
      detail:
        "Diseñado como un caza ligero polivalente para defensa aérea, ataque y reconocimiento.",
    },
    {
      label: "FABRICANTE",
      value: "SAAB",
      unit: "SUECIA",
      detail: "Diseñado y construido por Saab, con sede en Linköping, Suecia.",
    },
    {
      label: "NOMBRE",
      value: "JAS 39",
      unit: "JAKT · ATTACK · SPANING",
      detail:
        "La designación significa caza, ataque y reconocimiento en sueco. Gripen significa grifo.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO (D, F: 2)",
      detail:
        "Los aviones de combate son monoplaza. Las versiones biplaza se emplean para instrucción y en algunas misiones.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "1 × RM12 O F414",
      unit: "TURBOFÁN",
      detail:
        "El Gripen C/D usa una versión del General Electric F404 construida en Suecia, conocida como RM12. El Gripen E, de mayor tamaño, usa el más potente GE F414.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 27 MM",
      unit: "8–10 ESTACIONES EXTERNAS",
      detail:
        "Un cañón interno Mauser y ocho puntos de anclaje en el C/D, o diez en el E. No hay bodegas internas de armamento.",
    },
    {
      label: "RADAR",
      value: "PS-05/A → RAVEN",
      unit: "AESA EN EL E",
      detail:
        "El Gripen C/D usa el radar Doppler de impulsos PS-05/A. El E lleva el AESA Raven ES-05.",
    },
    {
      label: "LONGITUD",
      value: "14,1",
      unit: "METROS",
      imperial: {
        value: "46,3",
        unit: "PIES",
      },
      detail: "Gripen C. El E mide unos 15,2 metros de largo.",
    },
    {
      label: "ENVERGADURA",
      value: "8,4",
      unit: "METROS",
      imperial: {
        value: "27,6",
        unit: "PIES",
      },
      detail: "Gripen C. El E tiene unos 8,6 metros.",
    },
    {
      label: "ALTURA",
      value: "4,5",
      unit: "METROS",
      imperial: {
        value: "14,8",
        unit: "PIES",
      },
      detail: "Gripen C.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 14.000",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 30.900",
        unit: "LIBRAS",
      },
      detail: "Gripen C. El E es más pesado, con unos 16.500 kilogramos.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "CLASE MACH 2",
      unit: "A GRAN ALTITUD",
      detail: "Publicada como Mach 2 a gran altitud.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "> 15.000",
      unit: "METROS",
      imperial: {
        value: "> 49.000",
        unit: "PIES",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "≈ 800",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 500",
        unit: "MILLAS",
      },
      detail:
        "Una cifra citada habitualmente para el Gripen C. El radio real depende mucho de la misión y de la carga.",
    },
    {
      label: "PRIMER VUELO",
      value: "9 DIC 1988",
      unit: "LINKÖPING, SUECIA",
      detail: "Primer vuelo del primer prototipo.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "1996",
      unit: "FUERZA AÉREA SUECA",
      detail:
        "El Gripen A entró en servicio en la Fuerza Aérea Sueca en 1996.",
    },
    {
      label: "AVIONES CONSTRUIDOS",
      value: "300+",
      unit: "TODAS LAS VERSIONES",
      detail:
        "La producción ha incluido aviones para Suecia, varios clientes de exportación y la nueva versión E.",
    },
  ],

  historyHeading: "Un caza sueco.",
  historyIntro:
    "El programa en once fechas, desde la decisión de Suecia de desarrollar el avión hasta los nuevos pedidos de Gripen E de Tailandia y Colombia.",
  milestones: [
    {
      title: "Se aprueba el desarrollo",
      detail:
        "Suecia se compromete a desarrollar un nuevo caza para sustituir al Viggen, que será el JAS 39 Gripen.",
    },
    {
      title: "Primer vuelo",
      detail: "El primer prototipo realiza su vuelo inaugural en Linköping.",
    },
    {
      title: "Se pierde un prototipo",
      detail:
        "El primer prototipo se estrella al aterrizar tras un vuelo de pruebas. El piloto sobrevive.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "El Gripen A entra en servicio en la Fuerza Aérea Sueca.",
    },
    {
      title: "Primer pedido de exportación",
      detail:
        "Sudáfrica firma por el Gripen, un año después de elegirlo, a lo que siguen acuerdos de alquiler y compra con otros países.",
    },
    {
      title: "Vuela el demostrador",
      detail:
        "El Gripen Demo, un banco de pruebas para la versión de nueva generación, de mayor tamaño, realiza su primer vuelo.",
    },
    {
      title: "Brasil elige el Gripen",
      detail:
        "Brasil elige la versión más grande del Gripen para su fuerza aérea.",
    },
    {
      title: "Vuela el Gripen E",
      detail: "El primer Gripen E realiza su primer vuelo.",
    },
    {
      title: "Tailandia encarga el Gripen E",
      detail:
        "Tailandia encarga cuatro nuevos Gripen E/F, tres monoplazas y un biplaza, por unos 5.300 millones de coronas suecas.",
    },
    {
      title: "Carta de intenciones con Ucrania",
      detail:
        "Suecia y Ucrania firman una carta de intenciones sobre una posible venta de aviones Gripen E. En el momento de redactar este texto no se había informado de ningún contrato.",
    },
    {
      title: "Colombia firma",
      detail:
        "Colombia firma por 15 Gripen E y dos Gripen F, con entregas previstas de 2026 a 2032.",
    },
  ],

  variantsHeading: "C, D y E.",
  variantsIntro:
    "El Gripen se ha construido en varias versiones. A los primeros A y B siguieron los C y D mejorados, y luego los E y F, de mayor tamaño, que se muestran aquí.",
  variants: [
    {
      name: "Monoplaza, mejorado",
      status: "EN SERVICIO",
      caption: "Un Gripen C de la Fuerza Aérea Sueca sobrevolando Öland, 2023",
      summary:
        "La versión monoplaza mejorada, con capacidad de repostaje en vuelo y mejor armamento y sensores que el A original.",
      points: [
        "Sucedió al Gripen A",
        "Operado por Suecia y varios clientes de exportación",
        "Motor RM12 y radar PS-05/A",
      ],
    },
    {
      name: "Biplaza, mejorado",
      status: "EN SERVICIO",
      caption:
        "Un Gripen D de la Fuerza Aérea Húngara junto a un demostrador biplaza",
      summary:
        "Una versión biplaza del Gripen C, que se usa para la instrucción de transición y, en algunos países, para misiones operativas.",
      points: [
        "Mismos sistemas que el Gripen C",
        "Fuselaje alargado para el segundo asiento",
        "Operado por varias fuerzas aéreas",
      ],
    },
    {
      name: "Nueva generación",
      status: "EN SERVICIO",
      caption: "Un Gripen E sueco en la pista, julio de 2023",
      summary:
        "Una versión mayor y más capaz, con un motor más potente, un radar AESA y más estaciones de armamento. Está prevista una versión biplaza, el Gripen F.",
      points: [
        "Motor F414G",
        "Radar AESA Raven ES-05",
        "Primer vuelo en junio de 2017",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del Gripen C/D junto a otros ${counts.es.others} aviones. Es el avión más pequeño de la tabla y uno de sus pocos diseños monomotor.`,

  glossary: [
    {
      term: "JAS",
      definition:
        "Jakt, Attack, Spaning: caza, ataque y reconocimiento en sueco. La combinación de misiones para la que se diseñó el avión.",
    },
    {
      term: "Base en carretera",
      definition:
        "Un tramo de carretera ordinaria preparado para usarse como pista temporal. La fuerza aérea sueca se adiestró para operaciones dispersas desde este tipo de bases.",
    },
    {
      term: "Raven ES-05",
      definition:
        "Un radar AESA para el Gripen E. Su antena puede girar para ampliar la zona que el radar puede explorar.",
    },
    {
      term: "Gripen Demo",
      definition:
        "Un Gripen biplaza modificado que sirvió para probar la célula, el motor y los sistemas, de mayor tamaño, que dieron lugar al Gripen E.",
    },
    {
      term: "Enlace de datos",
      definition:
        "Una red de radio que permite a aviones y estaciones de tierra compartir objetivos e información de sensores en tiempo real.",
    },
    {
      term: "IRST",
      definition:
        "Búsqueda y seguimiento por infrarrojos. Un sensor pasivo que detecta el calor de otros aviones sin emitir ninguna señal propia.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Saab JAS 39 Gripen",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del Gripen",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante y del Gobierno cuando las hay. Los valores marcados como reportados varían según la fuente y la versión.",
};
