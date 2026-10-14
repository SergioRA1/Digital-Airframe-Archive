// Spanish text for src/pages/rafale.js, laid over the English with localise().
// Same shape as the English module, text only.

export default {
  eyebrow: "Dassault Rafale",
  tagline:
    "El caza omnirrol de Francia: un reactor bimotor de ala en delta con canard, operado por el Ejército del Aire y del Espacio francés (Armée de l'air et de l'espace) y, en una versión embarcada, por la Armada francesa.",
  heroStats: [
    ["4,5", "Generación"],
    ["02", "Motores"],
    ["1986", "Primer vuelo"],
  ],
  next: {
    label: "Saab Gripen",
  },

  designHeading: "Un avión, todas las misiones.",
  designIntro:
    "Dassault llama al Rafale un caza omnirrol: una única célula concebida para sustituir a varios aviones franceses más antiguos. Destacan cuatro rasgos.",
  designFeatures: [
    {
      kicker: "CONCEPTO",
      title: "Omnirrol",
      description:
        "La defensa aérea, el ataque a tierra, el reconocimiento y, en Francia, el ataque nuclear corren a cargo del mismo avión, y la misión la fijan el armamento y el software.",
      metric: "MISIÓN",
      value: "OMNIRROL",
    },
    {
      kicker: "AUTOPROTECCIÓN",
      title: "SPECTRA",
      description:
        "Un conjunto integrado de guerra electrónica detecta, identifica y contrarresta amenazas, con sensores e inhibidores incorporados a la célula en lugar de añadidos como contenedores.",
      metric: "SISTEMA DE GUERRA ELECTRÓNICA",
      value: "SPECTRA",
    },
    {
      kicker: "PERCEPCIÓN",
      title: "Radar RBE2",
      description:
        "El radar de barrido electrónico RBE2 ha pasado de una antena pasiva a una versión AESA activa en los aviones más recientes, junto con un sensor infrarrojo y óptico delante de la cúpula.",
      metric: "RADAR",
      value: "RBE2 AESA",
    },
    {
      kicker: "PORTAAVIONES",
      title: "Catapulta y apontaje con cable",
      description:
        "El Rafale M naval tiene un tren de aterrizaje reforzado y un gancho de apontaje para lanzamientos con catapulta y apontajes con cable en el portaaviones Charles de Gaulle.",
      metric: "MÉTODO DE LANZAMIENTO",
      value: "CATOBAR",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por Dassault Aviation y las fuerzas armadas francesas, redondeadas para su presentación. El Rafale C es la versión monoplaza de la fuerza aérea.",
  specNotice:
    "Los valores siguen las publicaciones públicas del fabricante y del Gobierno para el Rafale C. El B biplaza y el M naval difieren ligeramente en peso y equipamiento.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "OMNIRROL",
      unit: "CAZA",
      detail:
        "Descrito por el fabricante como un avión omnirrol para superioridad aérea, ataque, reconocimiento y disuasión nuclear.",
    },
    {
      label: "FABRICANTE",
      value: "DASSAULT",
      unit: "CON SAFRAN Y THALES",
      detail:
        "Dassault Aviation es el contratista principal, con Safran como proveedor de los motores y Thales del radar y de los sistemas de guerra electrónica.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1 O 2",
      unit: "C MONOPLAZA · B BIPLAZA",
      detail:
        "Los Rafale C y M son monoplazas. El Rafale B es un biplaza que se usa para instrucción y en algunas misiones.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × M88",
      unit: "TURBOFANES SAFRAN",
      detail:
        "Cada motor produce unas 17.000 libras de empuje con postcombustión.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 30 MM",
      unit: "14 ESTACIONES EXTERNAS",
      detail:
        "Un cañón interno y 14 puntos de anclaje, o 13 en la versión naval. No hay bodegas internas de armamento.",
    },
    {
      label: "RADAR",
      value: "RBE2",
      unit: "PASIVO O AESA",
      detail:
        "Los primeros aviones usan el RBE2 de barrido electrónico pasivo. Los posteriores tienen la versión AESA.",
    },
    {
      label: "LONGITUD",
      value: "15,3",
      unit: "METROS",
      imperial: {
        value: "50,1",
        unit: "PIES",
      },
      detail: "Según los datos publicados para el Rafale C.",
    },
    {
      label: "ENVERGADURA",
      value: "10,8",
      unit: "METROS",
      imperial: {
        value: "35,4",
        unit: "PIES",
      },
      detail: "Según los datos publicados para el Rafale C.",
    },
    {
      label: "ALTURA",
      value: "5,3",
      unit: "METROS",
      imperial: {
        value: "17,5",
        unit: "PIES",
      },
      detail: "Según los datos publicados para el Rafale C.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 24.500",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 54.000",
        unit: "LIBRAS",
      },
      detail: "Una cifra citada habitualmente para el Rafale C.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 1,8",
      unit: "A GRAN ALTITUD",
      detail: "La cifra que cita el fabricante.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "≈ 15.800",
      unit: "METROS",
      imperial: {
        value: "≈ 52.000",
        unit: "PIES",
      },
      detail: "Una cifra citada habitualmente.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "> 1.850",
      unit: "KILÓMETROS",
      imperial: {
        value: "> 1.150",
        unit: "MILLAS",
      },
      detail:
        "Una cifra citada habitualmente. El radio real depende mucho de la misión y de la carga.",
    },
    {
      label: "PRIMER VUELO",
      value: "4 JUL 1986",
      unit: "DEMOSTRADOR RAFALE A",
      detail:
        "Primer vuelo del demostrador tecnológico Rafale A. El primer Rafale C voló en 1991.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2001",
      unit: "ARMADA FRANCESA (RAFALE M)",
      detail:
        "El Rafale M naval entró en servicio en 2001, y los aviones de la fuerza aérea lo hicieron a mediados de la década de 2000.",
    },
    {
      label: "AVIONES ENCARGADOS",
      value: "500+",
      unit: "FRANCIA Y EXPORTACIÓN",
      detail:
        "Los pedidos de Francia y de clientes de exportación juntos superan esta cifra, y las entregas continúan.",
    },
  ],

  historyHeading: "Una elección francesa.",
  historyIntro:
    "El programa en catorce fechas, desde la decisión de Francia de seguir en solitario hasta el combate sobre Pakistán y las entregas a Indonesia.",
  milestones: [
    {
      title: "Francia, en solitario",
      detail:
        "Francia abandona la colaboración europea para un caza y pone en marcha su propio programa, que se convertirá en el Rafale.",
    },
    {
      title: "Vuela el Rafale A",
      detail:
        "El demostrador tecnológico Rafale A realiza su primer vuelo.",
    },
    {
      title: "Primer Rafale C",
      detail:
        "El primer prototipo de la versión monoplaza de la fuerza aérea despega.",
    },
    {
      title: "Primer Rafale M",
      detail: "El prototipo naval realiza su primer vuelo.",
    },
    {
      title: "Servicio en la Armada",
      detail:
        "Los primeros Rafale M entran en servicio en la Armada francesa.",
    },
    {
      title: "Comienzan las entregas a la fuerza aérea",
      detail:
        "Los primeros aviones con el estándar F2 se entregan a la Fuerza Aérea francesa.",
    },
    {
      title: "Operaciones sobre Libia",
      detail:
        "Los Rafale franceses realizan misiones de ataque y de defensa aérea en la campaña de la coalición sobre Libia.",
    },
    {
      title: "Primer pedido de exportación",
      detail:
        "Egipto firma un contrato por 24 aviones, la primera venta de exportación del Rafale.",
    },
    {
      title: "India firma",
      detail: "India firma un contrato por 36 Rafale.",
    },
    {
      title: "Primeras llegadas a India",
      detail: "Los primeros Rafale para India llegan desde Francia.",
    },
    {
      title: "Pedido de los Emiratos Árabes Unidos",
      detail:
        "Los Emiratos Árabes Unidos anuncian un pedido de 80 aviones, el mayor pedido de exportación individual del modelo.",
    },
    {
      title: "Versión naval para India",
      detail:
        "India firma un acuerdo para cazas navales Rafale M para sus portaaviones.",
    },
    {
      title: "Operación Sindoor",
      detail:
        "Los Rafale indios participan en ataques contra Pakistán. Se informa de la pérdida de al menos un Rafale, la primera pérdida en combate del modelo. India no ha publicado sus pérdidas por tipo.",
    },
    {
      title: "Los primeros aviones de Indonesia",
      detail:
        "Los tres primeros de los 42 Rafale de Indonesia, todos biplazas, llegan a Pekanbaru, en Sumatra.",
    },
  ],

  variantsHeading: "Un diseño, tres versiones.",
  variantsIntro:
    "El Rafale se construye en tres versiones principales que comparten la mayoría de los sistemas. Los aviones de exportación llevan otras letras de código, pero siguen la misma configuración.",
  variants: [
    {
      name: "Monoplaza, fuerza aérea",
      status: "EN SERVICIO",
      caption:
        "Un Rafale C del Ejército del Aire y del Espacio francés con colores de exhibición, 2018",
      summary:
        "La versión monoplaza que opera el Ejército del Aire y del Espacio francés, y la referencia de la mayoría de las cifras publicadas.",
      points: [
        "Primer vuelo en mayo de 1991",
        "Se usa para defensa aérea y ataque",
        "Asume la misión de ataque nuclear en Francia",
      ],
    },
    {
      name: "Biplaza",
      status: "EN SERVICIO",
      caption: "Un Rafale B de la Fuerza Aérea francesa en Kleine Brogel, 2007",
      summary:
        "Una versión biplaza con las mismas capacidades, que se usa para instrucción y para misiones que se benefician de un segundo tripulante.",
      points: [
        "Sección de cabina más grande",
        "Se usa a menudo para ataque y reconocimiento",
        "Encargado por varios clientes de exportación",
      ],
    },
    {
      name: "Embarcado, armada",
      status: "EN SERVICIO",
      caption: "Un Rafale M de la Armada francesa en vuelo",
      summary:
        "La versión naval, con célula y tren de aterrizaje reforzados y un gancho de apontaje para lanzamientos con catapulta y apontajes con cable en el portaaviones Charles de Gaulle.",
      points: [
        "Entró en servicio en 2001",
        "Algo más pesado que el Rafale C",
        "También encargado por India para sus portaaviones",
      ],
    },
  ],

  compareIntro:
    "Dimensiones y fechas publicadas del Rafale junto a otros once aviones. Es uno de los tres cazas europeos de ala en delta con canard de la tabla, con el Typhoon y el Gripen.",

  glossary: [
    {
      term: "Omnirrol",
      definition:
        "El término de Dassault para un avión concebido para desempeñar todas las misiones de un caza, desde la defensa aérea hasta el ataque y el reconocimiento, en una sola célula.",
    },
    {
      term: "SPECTRA",
      definition:
        "El sistema integrado de autoprotección electrónica del Rafale. Combina alerta de radar, alerta láser, inhibición y señuelos bajo un único sistema.",
    },
    {
      term: "Delta con canard",
      definition:
        "Una configuración con un ala principal en delta y pequeños planos móviles por delante. Combina buena agilidad con poca resistencia a gran velocidad.",
    },
    {
      term: "Radar AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar cuyo haz se orienta electrónicamente mediante muchos pequeños módulos de transmisión y recepción, en lugar de con una antena móvil.",
    },
    {
      term: "CATOBAR",
      definition:
        "Despegue asistido por catapulta y recuperación con cable. El método de lanzamiento que usan los portaaviones grandes como el Charles de Gaulle.",
    },
    {
      term: "Estándar F3-R",
      definition:
        "Un estándar de capacidades para la flota francesa que añade nuevo armamento y sensores mejorados, incluido el radar AESA en las series posteriores.",
    },
  ],
  sources: [
    {
      label: "Dassault Aviation — Rafale",
      note: "Presentación del fabricante",
    },
    {
      label: "Wikipedia — Dassault Rafale",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del Rafale",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante y del Gobierno cuando las hay. Los valores marcados como reportados varían según la fuente.",
};
