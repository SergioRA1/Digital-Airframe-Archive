// Spanish text for src/pages/typhoon.js, laid over the English with localise().
// Same shape as the English module, text only.

export default {
  eyebrow: "Eurofighter Typhoon",
  tagline:
    "Un caza bimotor de ala en delta con canard construido por un consorcio europeo de cuatro naciones: rápido, ágil y operado por nueve fuerzas aéreas.",
  heroStats: [
    ["4,5", "Generación"],
    ["02", "Motores"],
    ["1994", "Primer vuelo"],
  ],
  next: {
    label: "Dassault Rafale",
  },

  designHeading: "Construido en común, hecho para virar.",
  designIntro:
    "El Typhoon se diseñó en la década de 1980 como un caza ágil de superioridad aérea y desde entonces ha ganado una gran capacidad de ataque a tierra. Cuatro rasgos lo definen.",
  designFeatures: [
    {
      kicker: "AERODINÁMICA",
      title: "Ala en delta con canard",
      description:
        "Unos pequeños planos canard por delante de una gran ala en delta le dan buena agilidad. Como la mayoría de los cazas modernos, el avión es inestable y depende de un ordenador de vuelo para mantenerse controlable.",
      metric: "CONFIGURACIÓN",
      value: "DELTA CON CANARD",
    },
    {
      kicker: "PROPULSIÓN",
      title: "Dos motores EJ200",
      description:
        "Dos turbofanes Eurojet EJ200 le dan una elevada relación empuje-peso. El fabricante describe el avión como capaz de volar en supercrucero en algunas configuraciones.",
      metric: "MOTORES",
      value: "2 × EJ200",
    },
    {
      kicker: "PERCEPCIÓN",
      title: "Radar y búsqueda por infrarrojos",
      description:
        "El radar CAPTOR se ha instalado en su versión de barrido mecánico, seguida del CAPTOR-E AESA, junto con el sensor de búsqueda y seguimiento por infrarrojos PIRATE.",
      metric: "RADAR",
      value: "CAPTOR",
    },
    {
      kicker: "CABINA",
      title: "Control por voz",
      description:
        "Los pilotos pueden dar algunas órdenes por voz, además de los mandos HOTAS en la palanca de gases y la palanca de control, lo que reduce la carga de trabajo en una cabina muy exigente.",
      metric: "ENTRADA EN CABINA",
      value: "VOZ + HOTAS",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por el consorcio Eurofighter y las fuerzas aéreas socias, redondeadas para su presentación. Los distintos lotes de producción, llamados «tranches», varían en equipamiento.",
  specNotice:
    "Los valores siguen las publicaciones públicas del fabricante y de las fuerzas aéreas. Los tranches posteriores llevan radar y sistemas distintos, así que las cifras deben tomarse como típicas y no como exactas.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "CAZA",
      detail:
        "Diseñado para la superioridad aérea, con una capacidad aire-superficie añadida y ampliada con el tiempo.",
    },
    {
      label: "FABRICANTE",
      value: "EUROFIGHTER",
      unit: "BAE · AIRBUS · LEONARDO",
      detail:
        "Construido por un consorcio de empresas del Reino Unido, Alemania, Italia y España.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO (T: 2)",
      detail:
        "Los aviones de combate son monoplaza. Las versiones biplaza se emplean para instrucción.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × EJ200",
      unit: "TURBOFANES EUROJET",
      detail:
        "Cada motor produce unas 20.000 libras de empuje con postcombustión.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 27 MM",
      unit: "13 ESTACIONES EXTERNAS",
      detail:
        "Un cañón interno Mauser y hasta 13 puntos de anclaje para misiles, bombas y depósitos de combustible. No hay bodegas internas de armamento.",
    },
    {
      label: "RADAR",
      value: "CAPTOR",
      unit: "MECÁNICO O AESA (E)",
      detail:
        "Los primeros aviones llevan el CAPTOR-M de barrido mecánico. El CAPTOR-E AESA se instala en las series posteriores y en las modernizaciones.",
    },
    {
      label: "LONGITUD",
      value: "16,0",
      unit: "METROS",
      imperial: {
        value: "52,4",
        unit: "PIES",
      },
      detail: "Según los datos publicados por el fabricante.",
    },
    {
      label: "ENVERGADURA",
      value: "11,0",
      unit: "METROS",
      imperial: {
        value: "35,9",
        unit: "PIES",
      },
      detail: "Según los datos publicados por el fabricante.",
    },
    {
      label: "ALTURA",
      value: "5,3",
      unit: "METROS",
      imperial: {
        value: "17,3",
        unit: "PIES",
      },
      detail: "Según los datos publicados por el fabricante.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 23.500",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 51.800",
        unit: "LIBRAS",
      },
      detail: "Una cifra citada habitualmente para el avión monoplaza.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "CLASE MACH 2",
      unit: "A GRAN ALTITUD",
      detail: "Publicada como Mach 2 o algo superior.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "≈ 19.800",
      unit: "METROS",
      imperial: {
        value: "≈ 65.000",
        unit: "PIES",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "≈ 1.390",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 860",
        unit: "MILLAS",
      },
      detail:
        "Una cifra citada habitualmente para una misión de superioridad aérea. El radio real depende mucho de la misión y de la carga.",
    },
    {
      label: "PRIMER VUELO",
      value: "27 MAR 1994",
      unit: "MANCHING, ALEMANIA",
      detail:
        "Primer vuelo del prototipo DA1, el primero de siete aviones de desarrollo.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2003",
      unit: "ALEMANIA · REINO UNIDO",
      detail:
        "Los primeros aviones de serie entraron en servicio en las fuerzas aéreas alemana y británica en 2003.",
    },
    {
      label: "AVIONES ENTREGADOS",
      value: "600+",
      unit: "TODAS LAS VERSIONES",
      detail:
        "Las entregas continúan respecto a unos pedidos que superan este total. Las cifras exactas cambian a medida que se entregan lotes.",
    },
  ],

  historyHeading: "Un caza de cuatro naciones.",
  historyIntro:
    "El programa en diez fechas, desde los orígenes de la colaboración hasta los pedidos de exportación recientes y el uso en combate.",
  milestones: [
    {
      title: "Francia se retira",
      detail:
        "Francia se retira de la colaboración europea para un caza y pasa a desarrollar el Rafale por su cuenta.",
    },
    {
      title: "Se crea la empresa",
      detail:
        "Las empresas socias del Reino Unido, Alemania, Italia y España fundan Eurofighter para dirigir el programa.",
    },
    {
      title: "Primer vuelo",
      detail:
        "El prototipo DA1 realiza su vuelo inaugural desde Manching, Alemania.",
    },
    {
      title: "Se bautiza Typhoon",
      detail:
        "El avión, hasta entonces conocido como European Fighter Aircraft, recibe el nombre de Typhoon.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "Las fuerzas aéreas alemana y británica aceptan los primeros aviones de serie.",
    },
    {
      title: "Primer gran pedido de exportación",
      detail:
        "Arabia Saudí firma un contrato por 72 aviones, el primer gran pedido de fuera de las cuatro naciones socias y Austria.",
    },
    {
      title: "Combate sobre Libia",
      detail:
        "Typhoon británicos e italianos vuelan en la operación de la coalición sobre Libia, el primer despliegue de combate del modelo.",
    },
    {
      title: "Más clientes del Golfo",
      detail: "Kuwait y Catar firman pedidos del avión.",
    },
    {
      title: "Ataques sobre Yemen",
      detail:
        "Typhoon de la Real Fuerza Aérea participan en ataques contra objetivos en Yemen junto a aviones de EE. UU.",
    },
    {
      title: "Turquía firma",
      detail:
        "Turquía firma con el Reino Unido la compra de 20 Typhoon nuevos del Tranche 4, por unos 8.000 millones de libras esterlinas. Las entregas están previstas a partir de 2030.",
    },
  ],

  variantsHeading: "Prototipo, monoplaza, biplaza.",
  variantsIntro:
    "El Typhoon se ha construido en varios tranches de producción con un equipamiento cada vez mejor. Los principales tipos de célula muestran cómo se emplea.",
  variants: [
    {
      name: "Aviones de desarrollo",
      status: "7 CONSTRUIDOS",
      caption: "El prototipo DA-2 expuesto en el Museo de la RAF, Londres",
      summary:
        "Siete aviones de desarrollo volaron desde 1994 para validar el diseño, ensamblados por las cuatro naciones socias.",
      points: [
        "Primer vuelo en marzo de 1994",
        "Algunos prototipos eran biplazas",
        "Varios están hoy en museos",
      ],
    },
    {
      name: "Producción monoplaza",
      status: "EN SERVICIO",
      caption: "Un Typhoon FGR4 de la Real Fuerza Aérea en el RIAT, 2019",
      summary:
        "La versión de combate, entregada en los tranches 1 a 4. Los tranches posteriores añadieron nuevos sensores, armamento y, finalmente, un radar AESA.",
      points: [
        "Designado FGR4 en la Real Fuerza Aérea",
        "Capacidad de ataque a tierra añadida tras la entrada en servicio",
        "Operado por nueve fuerzas aéreas",
      ],
    },
    {
      name: "Entrenador biplaza",
      status: "EN SERVICIO",
      caption:
        "Dos Typhoon T3 de la Real Fuerza Aérea repostando de un VC10, 2004",
      summary:
        "Una versión biplaza que se usa para la instrucción de transición. Conserva la mayoría de las capacidades del avión de combate, incluido el cañón.",
      points: [
        "Designado T3 en la Real Fuerza Aérea",
        "Se usa para la transición de pilotos y para instrucción",
        "Construido para varios clientes",
      ],
    },
  ],

  compareIntro:
    "Dimensiones y fechas publicadas del Typhoon junto a otros once aviones. Es uno de los tres cazas europeos de ala en delta con canard de la tabla.",

  glossary: [
    {
      term: "Consorcio",
      definition:
        "El Typhoon lo construye un grupo de empresas de cuatro países. Cada una fabrica una parte del avión, y el montaje final se realiza en cada país socio.",
    },
    {
      term: "Tranche",
      definition:
        "Un lote de producción con un estándar de equipamiento definido. Los tranches 1 a 4 han ido añadiendo capacidades con los años.",
    },
    {
      term: "Delta con canard",
      definition:
        "Una configuración con un ala principal en delta y pequeños planos móviles por delante. Combina buena agilidad con poca resistencia a gran velocidad.",
    },
    {
      term: "Supercrucero",
      definition:
        "Vuelo supersónico sostenido sin postcombustión. La publicidad del Typhoon afirma que el avión puede volar en supercrucero en algunas configuraciones.",
    },
    {
      term: "Radar AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar cuyo haz se orienta electrónicamente mediante muchos pequeños módulos de transmisión y recepción, en lugar de con una antena móvil.",
    },
    {
      term: "PIRATE",
      definition:
        "Equipo pasivo de seguimiento por infrarrojos aerotransportado. Un sensor que detecta el calor de otros aviones sin emitir ninguna señal propia.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Eurofighter Typhoon",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del Typhoon",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante y de las fuerzas aéreas cuando las hay. Los valores marcados como reportados varían según la fuente y el tranche.",
};
