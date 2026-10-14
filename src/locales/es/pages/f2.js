// Spanish text for src/pages/f2.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "Mitsubishi F-2",
  tagline:
    "El caza monomotor de Japón, desarrollado con Estados Unidos a partir del F-16, pero con un ala de materiales compuestos más grande, un radar japonés y una clara orientación al ataque contra buques.",
  heroStats: [
    ["04", "Generación"],
    ["01", "Motor"],
    ["1995", "Primer vuelo"],
  ],
  next: {
    label: "Chengdu J-20",
  },

  designHeading: "Un F-16 rehecho para Japón.",
  designIntro:
    "El F-2 nació como un F-16 modificado, pero cambió tanto durante el desarrollo que se convirtió en otro avión, marcado por la necesidad de Japón de defender sus accesos marítimos.",
  designFeatures: [
    {
      kicker: "AERODINÁMICA",
      title: "Un ala de compuestos más grande",
      description:
        "Su ala tiene alrededor de una cuarta parte más de superficie que la del F-16 y fue una de las primeras de un caza fabricadas con materiales compuestos curados en una sola pieza, lo que ahorra peso.",
      metric: "SUPERFICIE ALAR",
      value: "34,8 M²",
    },
    {
      kicker: "SENSORES",
      title: "Un radar AESA pionero",
      description:
        "El Mitsubishi Electric J/APG-1 fue el primer radar de barrido electrónico activo instalado en un caza de serie. Los aviones se han modernizado después con el J/APG-2.",
      metric: "RADAR",
      value: "J/APG-2",
    },
    {
      kicker: "MISIÓN",
      title: "Ataque contra buques",
      description:
        "El F-2 se diseñó ante todo para atacar a los buques que se acerquen a Japón, y puede llevar hasta cuatro grandes misiles antibuque.",
      metric: "MISILES ANTIBUQUE",
      value: "HASTA 4",
    },
    {
      kicker: "CÉLULA",
      title: "Más largo y más pesado",
      description:
        "El fuselaje es algo más largo que el del F-16, con estabilizadores más grandes, una cúpula de tres piezas y un motor más potente para el avión, más pesado.",
      metric: "LONGITUD",
      value: "15,5 M",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por el Ministerio de Defensa de Japón y Mitsubishi Heavy Industries, redondeadas para su presentación. El F-2A monoplaza es la versión de referencia.",
  specNotice:
    "Los valores siguen las publicaciones del Gobierno japonés y del fabricante cuando las hay. Las cifras de prestaciones son valores citados habitualmente, marcados como según informes.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "ANTIBUQUE · DEFENSA AÉREA",
      detail:
        "Diseñado como caza de apoyo para atacar buques y objetivos en tierra, y usado también para la defensa aérea.",
    },
    {
      label: "FABRICANTE",
      value: "MITSUBISHI",
      unit: "JAPÓN",
      detail:
        "Fabricado por Mitsubishi Heavy Industries, con Lockheed Martin como socio principal y fabricante de algunas piezas.",
    },
    {
      label: "NOMBRE",
      value: "F-2",
      unit: "SIN NOMBRE OFICIAL",
      detail:
        "El avión no tiene nombre oficial. Viper Zero es un apodo extraoficial, que combina el Viper del F-16 y el caza Zero de la Segunda Guerra Mundial.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO (F-2B: 2)",
      detail:
        "El F-2A tiene un asiento. El F-2B es un entrenador biplaza que conserva los sistemas de combate.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "1 × F110-IHI-129",
      unit: "TURBOFÁN",
      detail:
        "Un General Electric F110 fabricado bajo licencia por IHI, de unos 131 kN con poscombustión.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 20 MM",
      unit: "11 ESTACIONES EXTERNAS",
      detail:
        "Un cañón rotativo interno JM61A2, dos raíles para misiles en las puntas de las alas, ocho estaciones bajo las alas y una bajo el fuselaje.",
    },
    {
      label: "RADAR",
      value: "J/APG-1 → J/APG-2",
      unit: "AESA",
      detail:
        "El J/APG-1 fue el primer radar AESA en un caza de serie. Más tarde se instaló el J/APG-2, mejorado.",
    },
    {
      label: "LONGITUD",
      value: "15,5",
      unit: "METROS",
      imperial: {
        value: "50,9",
        unit: "PIES",
      },
      detail: "Longitud publicada.",
    },
    {
      label: "ENVERGADURA",
      value: "11,1",
      unit: "METROS",
      imperial: {
        value: "36,5",
        unit: "PIES",
      },
      detail: "Envergadura sobre los lanzadores de misiles de las puntas de las alas.",
    },
    {
      label: "ALTURA",
      value: "5,0",
      unit: "METROS",
      imperial: {
        value: "16,3",
        unit: "PIES",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 22.100",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 48.700",
        unit: "LIBRAS",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "CLASE MACH 2",
      unit: "A GRAN ALTITUD",
      detail: "Se suele dar como unos Mach 2 a gran altitud.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "18.000",
      unit: "METROS",
      imperial: {
        value: "59.000",
        unit: "PIES",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "≈ 830",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 520",
        unit: "MILLAS",
      },
      detail:
        "Una cifra citada habitualmente para una misión antibuque. El radio real depende mucho de la misión y de la carga.",
    },
    {
      label: "PRIMER VUELO",
      value: "7 OCT 1995",
      unit: "NAGOYA, JAPÓN",
      detail: "Primer vuelo del primer prototipo, el XF-2A.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2000",
      unit: "FUERZA AÉREA DE AUTODEFENSA DE JAPÓN",
      detail:
        "Se retrasó desde 1999 por problemas detectados en la estructura del ala durante los ensayos.",
    },
    {
      label: "AVIONES CONSTRUIDOS",
      value: "98",
      unit: "INCLUIDOS 4 PROTOTIPOS",
      detail:
        "En 2004 se recortaron los pedidos previstos, que eran mayores. El último de los 94 aviones de serie se entregó en 2011.",
    },
  ],

  historyHeading: "Un caza para un país insular.",
  historyIntro:
    "El programa en once fechas, desde la decisión de partir del F-16 hasta la elección del caza que lo sustituirá.",
  milestones: [
    {
      title: "Basado en el F-16",
      detail:
        "Japón y Estados Unidos acuerdan que el próximo caza de apoyo japonés, el FS-X, se desarrollará a partir del F-16.",
    },
    {
      title: "Se revisa el acuerdo",
      detail:
        "Tras un debate en el Congreso de EE. UU. sobre el intercambio de tecnología, los dos gobiernos revisan las condiciones del desarrollo conjunto.",
    },
    {
      title: "Primer vuelo",
      detail: "El primer prototipo, el XF-2A, realiza su vuelo inaugural en Nagoya.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "El F-2 entra en servicio en la Fuerza Aérea de Autodefensa de Japón, tras un retraso causado por problemas en el ala.",
    },
    {
      title: "Se recorta la producción",
      detail:
        "Japón reduce el total a 98 aviones, incluidos los cuatro prototipos, por el elevado coste unitario del avión.",
    },
    {
      title: "Tsunami",
      detail:
        "El tsunami que sigue al terremoto de Tōhoku inunda la base aérea de Matsushima y daña 18 F-2B. Trece se reparan más tarde.",
    },
    {
      title: "Última entrega",
      detail: "Se entrega el último F-2 de serie y se cierra la línea.",
    },
    {
      title: "Fin de las reparaciones",
      detail: "El último de los F-2B reparados vuelve al servicio.",
    },
    {
      title: "Pitch Black",
      detail:
        "Varios F-2 vuelan en el ejercicio Pitch Black, en el norte de Australia, la primera vez que participan cazas japoneses.",
    },
    {
      title: "Se elige el sucesor",
      detail:
        "Japón, el Reino Unido e Italia anuncian el GCAP, un caza conjunto que sustituirá al F-2 a partir de 2035 aproximadamente.",
    },
    {
      title: "Veer Guardian",
      detail:
        "Varios F-2 y F-15 se adiestran en Japón con Su-30MKI de la Fuerza Aérea India, en el primer ejercicio de cazas entre los dos países.",
    },
  ],

  variantsHeading: "A, B y los prototipos.",
  variantsIntro:
    "La producción incluyó el F-2A monoplaza y el F-2B biplaza. Antes se construyeron cuatro prototipos XF-2, que se muestran como silueta.",
  variants: [
    {
      name: "Monoplaza",
      status: "EN SERVICIO",
      caption: "Un F-2A en una exhibición en vuelo en la base aérea de Komatsu, septiembre de 2018",
      summary:
        "El caza monoplaza, que forma la mayor parte de la flota y asume la misión antibuque.",
      points: [
        "Un piloto",
        "Hasta cuatro misiles antibuque",
        "Radar J/APG-2 tras la modernización",
      ],
    },
    {
      name: "Biplaza",
      status: "EN SERVICIO",
      caption: "Un F-2B del 3.er Escuadrón despegando de Misawa, marzo de 2008",
      summary:
        "Una versión biplaza que se usa sobre todo para la instrucción, con el mismo armamento y los mismos sensores que el F-2A.",
      points: [
        "Segunda cabina para un instructor",
        "Mismo armamento y sensores",
        "La mayoría con base en Matsushima",
      ],
    },
    {
      name: "Prototipos",
      status: "4 CONSTRUIDOS",
      summary:
        "Dos prototipos monoplaza XF-2A y dos biplaza XF-2B, usados en los ensayos en vuelo a partir de 1995.",
      points: [
        "Primer vuelo en octubre de 1995",
        "Sirvieron para detectar y corregir problemas del ala",
        "Dos monoplazas y dos biplazas",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del F-2A junto a otros ${counts.es.others} aviones. Es el mayor de los diseños monomotor de cuarta generación de la tabla, junto al F-16 y el Gripen.`,

  glossary: [
    {
      term: "FS-X",
      definition:
        "Fighter Support eXperimental, el nombre del programa de desarrollo del que salió el F-2.",
    },
    {
      term: "Caza de apoyo",
      definition:
        "El término japonés para un caza cuya misión principal es atacar buques y objetivos en tierra en apoyo de otras fuerzas.",
    },
    {
      term: "Compuesto curado en una pieza",
      definition:
        "Piezas de materiales compuestos curadas juntas en una sola pieza en lugar de unidas con fijaciones, lo que da una estructura más ligera y resistente.",
    },
    {
      term: "AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar formado por muchos pequeños módulos emisores y receptores que orientan el haz electrónicamente.",
    },
    {
      term: "ASM-3",
      definition: "Un misil antibuque supersónico japonés que lleva el F-2.",
    },
    {
      term: "GCAP",
      definition:
        "Global Combat Air Programme, el caza que Japón, el Reino Unido e Italia desarrollan juntos para sustituir al F-2.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Mitsubishi F-2",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del F-2",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del Gobierno japonés y del fabricante cuando las hay. Los valores marcados como según informes varían según la fuente.",
};
