// Spanish text for src/pages/f35.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "Lockheed Martin F-35 Lightning II",
  tagline:
    "Un caza furtivo monomotor construido en torno a la fusión de sensores y vendido como una única familia de tres variantes. Es el avión de quinta generación más extendido del mundo.",
  heroStats: [
    ["05", "Generación"],
    ["03", "Variantes"],
    ["2006", "Primer vuelo"],
  ],
  next: {
    label: "Sukhoi Su-57",
  },

  designHeading: "Un diseño, tres misiones.",
  designIntro:
    "El F-35 se concibió como una célula común capaz de sustituir a la vez a varios aviones más antiguos. Cuatro ideas sostienen la mayor parte del diseño.",
  designFeatures: [
    {
      kicker: "FIRMA",
      title: "Baja observabilidad desde el diseño",
      description:
        "La forma, los bordes alineados, los recubrimientos absorbentes de radar y las bodegas internas de armamento mantienen baja la firma radar del avión desde la mayoría de los ángulos.",
      metric: "ARMAMENTO",
      value: "INTERNO",
    },
    {
      kicker: "PERCEPCIÓN",
      title: "Fusión de sensores",
      description:
        "El radar AESA AN/APG-81, un sistema electroóptico de designación de objetivos y seis cámaras infrarrojas repartidas por la célula ofrecen al piloto una única imagen combinada.",
      metric: "CÁMARAS INFRARROJAS",
      value: "6",
    },
    {
      kicker: "CABINA",
      title: "Un casco en lugar de un HUD",
      description:
        "No hay visor frontal. La información de vuelo y de los sensores se muestra en el visor del casco del piloto, incluidas las imágenes de las cámaras situadas alrededor del avión.",
      metric: "VISOR FRONTAL",
      value: "CASCO",
    },
    {
      kicker: "FAMILIA",
      title: "Tres variantes",
      description:
        "El F-35A de despegue convencional, el F-35B de despegue corto y aterrizaje vertical y el F-35C embarcado comparten la mayoría de los sistemas, pero difieren en el ala, la estructura y la sustentación.",
      metric: "VARIANTES",
      value: "A / B / C",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras del F-35A publicadas por Lockheed Martin y la Fuerza Aérea de EE. UU., redondeadas para su presentación. Las variantes B y C difieren en tamaño, peso y alcance.",
  specNotice:
    "Los valores siguen las publicaciones públicas del fabricante y de la Fuerza Aérea de EE. UU. para el F-35A. Se incluyen con fines divulgativos, no como documentación técnica.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "CAZA FURTIVO DE ATAQUE",
      detail:
        "Descrito como un caza polivalente para misiones aire-aire y aire-superficie.",
    },
    {
      label: "FABRICANTE",
      value: "LOCKHEED MARTIN",
      unit: "CON SOCIOS INDUSTRIALES",
      detail:
        "Lockheed Martin es el contratista principal, con Northrop Grumman y BAE Systems como principales socios industriales.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO",
      detail: "Todas las variantes son monoplaza.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "1 × F135",
      unit: "TURBOFÁN PRATT & WHITNEY",
      detail:
        "El motor F135 del F-35A produce unas 43.000 libras de empuje con postcombustión.",
    },
    {
      label: "EMPUJE POR MOTOR",
      value: "≈ 191",
      unit: "KILONEWTONS",
      imperial: {
        value: "≈ 43.000",
        unit: "LIBRAS",
      },
      detail: "El F135 con postcombustión, según lo publicado para el F-35A.",
    },
    {
      label: "BODEGAS DE ARMAMENTO",
      value: "2 BODEGAS",
      unit: "4 ESTACIONES INTERNAS",
      detail:
        "Dos bodegas internas llevan misiles aire-aire y bombas guiadas, con estaciones adicionales en soportes externos cuando no se necesita sigilo.",
    },
    {
      label: "RADAR",
      value: "AN/APG-81",
      unit: "RADAR AESA",
      detail:
        "Un radar de barrido electrónico activo que también admite funciones de guerra electrónica y comunicaciones.",
    },
    {
      label: "LONGITUD",
      value: "15,7",
      unit: "METROS",
      imperial: {
        value: "51,4",
        unit: "PIES",
      },
      detail: "F-35A. El F-35B es similar; el F-35C es algo más largo.",
    },
    {
      label: "ENVERGADURA",
      value: "10,7",
      unit: "METROS",
      imperial: {
        value: "35,0",
        unit: "PIES",
      },
      detail:
        "F-35A. El F-35C embarcado tiene un ala mucho mayor, de unos 13,1 metros.",
    },
    {
      label: "ALTURA",
      value: "4,4",
      unit: "METROS",
      imperial: {
        value: "14,4",
        unit: "PIES",
      },
      detail: "F-35A, según los datos publicados por el fabricante.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 31.800",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 70.000",
        unit: "LIBRAS",
      },
      detail: "Publicado como de la clase de 70.000 libras para el F-35A.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 1,6",
      unit: "CON POSTCOMBUSTIÓN",
      detail:
        "La velocidad máxima publicada. El F-35 no está diseñado para volar en supercrucero.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "15.000",
      unit: "METROS",
      imperial: {
        value: "50.000",
        unit: "PIES",
      },
      detail: "Publicado como 50.000 pies para el F-35A.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "> 1.090",
      unit: "KILÓMETROS",
      imperial: {
        value: "> 680",
        unit: "MILLAS",
      },
      detail:
        "Publicado como más de 590 millas náuticas con combustible interno para el F-35A.",
    },
    {
      label: "PRIMER VUELO",
      value: "15 DIC 2006",
      unit: "FORT WORTH, TEXAS",
      detail:
        "Primer vuelo del F-35A. El demostrador X-35 había volado en octubre de 2000.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "AGO 2016",
      unit: "FUERZA AÉREA DE EE. UU.",
      detail:
        "Capacidad operativa inicial del F-35A. El Cuerpo de Marines declaró operativo el F-35B un año antes, en julio de 2015.",
    },
    {
      label: "AVIONES ENTREGADOS",
      value: "1.000+",
      unit: "TODAS LAS VARIANTES",
      detail:
        "La producción continúa, así que el total sigue creciendo. Las cifras exactas cambian con cada entrega.",
    },
  ],

  historyHeading: "Del concurso a la flota.",
  historyIntro:
    "El programa en dieciséis fechas, desde el concurso Joint Strike Fighter hasta el combate sobre Irán y los nuevos operadores europeos.",
  milestones: [
    {
      title: "Concurso Joint Strike Fighter",
      detail:
        "Boeing y Lockheed Martin son elegidas para construir demostradores rivales de un caza común para varias ramas de las fuerzas armadas.",
    },
    {
      title: "Vuela el X-35",
      detail:
        "El demostrador X-35A de Lockheed Martin realiza su primer vuelo. El X-32 rival de Boeing había volado semanas antes.",
    },
    {
      title: "Lockheed Martin, elegida",
      detail:
        "El diseño X-35 resulta ganador del concurso Joint Strike Fighter.",
    },
    {
      title: "Primer vuelo del F-35A",
      detail: "El primer F-35A vuela desde Fort Worth, Texas.",
    },
    {
      title: "Primer vuelo del F-35B",
      detail:
        "La variante de despegue corto y aterrizaje vertical realiza su vuelo inaugural.",
    },
    {
      title: "Primer vuelo del F-35C",
      detail: "La variante embarcada vuela por primera vez.",
    },
    {
      title: "Operativo en el Cuerpo de Marines",
      detail:
        "El Cuerpo de Marines de EE. UU. declara listo para operar su escuadrón de F-35B, la primera de las tres variantes en lograrlo.",
    },
    {
      title: "Operativo en la Fuerza Aérea",
      detail:
        "La Fuerza Aérea de EE. UU. declara la capacidad operativa inicial del F-35A.",
    },
    {
      title: "Primer uso en combate",
      detail:
        "Israel anuncia que sus F-35I se han empleado en combate, el primer uso en combate del modelo del que se tiene noticia.",
    },
    {
      title: "Primer ataque de EE. UU.",
      detail:
        "F-35B del Cuerpo de Marines que operan desde el buque de asalto anfibio USS Essex atacan un objetivo en Afganistán.",
    },
    {
      title: "Operativo en la Armada",
      detail:
        "La Armada de EE. UU. declara la capacidad operativa inicial del F-35C.",
    },
    {
      title: "Turquía, fuera",
      detail:
        "Estados Unidos anuncia que Turquía quedará fuera del programa después de que recibiera un sistema de defensa aérea ruso.",
    },
    {
      title: "Ataques contra Irán",
      detail:
        "Los F-35I israelíes tienen un papel destacado en los primeros ataques de la campaña de Israel contra Irán.",
    },
    {
      title: "Operación Epic Fury",
      detail:
        "F-35 de la Fuerza Aérea, la Armada y el Cuerpo de Marines de EE. UU. realizan misiones de ataque en la campaña estadounidense-israelí contra Irán.",
    },
    {
      title: "Dañado sobre Irán",
      detail:
        "Un F-35A de la Fuerza Aérea de EE. UU. realiza un aterrizaje de emergencia tras una misión de combate sobre Irán. Según informes, fue alcanzado por fuego desde tierra. El piloto se encuentra estable.",
    },
    {
      title: "Los primeros aviones de Finlandia",
      detail:
        "Los dos primeros de los 64 F-35A de Finlandia aterrizan en Rovaniemi, dentro del círculo polar ártico.",
    },
  ],

  variantsHeading: "Una familia, tres formas.",
  variantsIntro:
    "Las tres variantes comparten diseño, sensores y familia de motores, pero difieren en la estructura, el ala y la forma de despegar y aterrizar.",
  variants: [
    {
      name: "Despegue convencional",
      status: "EN SERVICIO",
      caption: "Un F-35A en un vuelo de pruebas sobre California, 2023",
      summary:
        "La variante más pequeña y ligera, la que usan la Fuerza Aérea de EE. UU. y la mayoría de los clientes de exportación. Es la única con cañón interno.",
      points: [
        "Cañón interno de 25 mm",
        "Certificado para 9 g",
        "En servicio en la mayoría de las fuerzas aéreas asociadas",
      ],
    },
    {
      name: "Despegue corto, aterrizaje vertical",
      status: "EN SERVICIO",
      caption: "Un F-35B de la Real Fuerza Aérea en vuelo estacionario en el RIAT, 2025",
      summary:
        "Una variante capaz de aterrizar en vertical gracias a un ventilador de sustentación tras la cabina y una tobera trasera orientable. Opera desde portaaviones pequeños y aeródromos rudimentarios.",
      points: [
        "Ventilador de sustentación tras la cabina",
        "Tobera de escape trasera orientable",
        "En servicio en el Cuerpo de Marines de EE. UU. y en la Real Armada y la Real Fuerza Aérea británicas, entre otros",
      ],
    },
    {
      name: "Variante embarcada",
      status: "EN SERVICIO",
      caption: "Un F-35C en un vuelo de pruebas sobre la bahía de Chesapeake",
      summary:
        "Una variante para portaaviones con un ala mayor, puntas de ala plegables y un tren de aterrizaje y un gancho de apontaje reforzados para lanzamientos con catapulta y apontajes con cable.",
      points: [
        "Ala mayor con puntas plegables",
        "Lanzamiento con catapulta y apontaje con cable",
        "En servicio en la Armada y el Cuerpo de Marines de EE. UU.",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del F-35A junto a otros ${counts.es.others} aviones. Es el único diseño monomotor de quinta generación de la tabla; el F-16, el F-2 y el Gripen son diseños monomotor de cuarta generación.`,

  glossary: [
    {
      term: "Quinta generación",
      definition:
        "Una etiqueta informal para los cazas que combinan baja observabilidad, armamento interno, sensores avanzados y un alto grado de fusión de datos. No existe una definición única aceptada.",
    },
    {
      term: "Joint Strike Fighter (JSF)",
      definition:
        "El programa liderado por EE. UU. en la década de 1990 para construir un caza común para la Fuerza Aérea, la Armada y el Cuerpo de Marines, y para fuerzas aéreas aliadas. De él nació el F-35.",
    },
    {
      term: "STOVL",
      definition:
        "Despegue corto y aterrizaje vertical. El F-35B lo consigue con un ventilador de sustentación y una tobera de escape orientable, lo que le permite operar sin pistas largas.",
    },
    {
      term: "Sistema de apertura distribuida (DAS)",
      definition:
        "Seis cámaras infrarrojas repartidas por la célula que dan al piloto visión en todas las direcciones, también por debajo del avión, proyectada en el visor del casco.",
    },
    {
      term: "Radar AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar cuyo haz se orienta electrónicamente mediante muchos pequeños módulos de transmisión y recepción, en lugar de con una antena móvil.",
    },
    {
      term: "Technology Refresh 3 (TR-3)",
      definition:
        "Una mejora del ordenador central y las pantallas del avión que lo prepara para futuras capacidades de software. El primer vuelo con TR-3 tuvo lugar en enero de 2023.",
    },
  ],
  sources: [
    {
      label: "Lockheed Martin — F-35 Lightning II",
      note: "Presentación del fabricante y especificaciones publicadas",
    },
    {
      label: "Wikipedia — Lockheed Martin F-35 Lightning II",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del F-35",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante y de la Fuerza Aérea de EE. UU. para el F-35A. Se ha omitido todo lo que no se ha publicado oficialmente.",
};
