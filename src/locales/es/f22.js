// Spanish text for src/data/f22.js, laid over the English with localise().
// Same shape as the English exports, text only.

import { counts } from "../../counts.js";

export default {
  content: {
    navigation: {
      design: "Diseño",
      specifications: "Datos",
      history: "Historia",
      variants: "Variantes",
      compare: "Comparar",
      reference: "Referencia",
    },
    silhouetteLabel: "Silueta estilizada del F-22 vista desde arriba",
    eyebrow: "Lockheed Martin F-22 Raptor",
    tagline:
      "El primer caza de quinta generación operativo: un avión de superioridad aérea construido en torno al sigilo, el supercrucero y la fusión de sensores, y operado únicamente por la Fuerza Aérea de EE. UU.",
    enterArchive: "Entrar al archivo",
    viewPhotography: "Ver fotografías",
    visualModel: "Modelo visual",
    model: "002",
    heroStats: [
      ["05", "Generación"],
      ["195", "Construidos"],
      ["1997", "Primer vuelo"],
    ],
    scroll: "Desplázate para explorar",
    designLabel: "Diseño",
    designHeading: "Ver primero, disparar primero.",
    designIntro:
      "El F-22 se diseñó para encontrar y atacar a otros aviones antes de ser detectado. Cuatro ideas sostienen la mayor parte de ese diseño.",
    specHeading: "El perfil publicado.",
    specIntro:
      "Cifras publicadas por la Fuerza Aérea de EE. UU., redondeadas para su presentación. No se incluyen prestaciones que no figuren en datos oficiales.",
    specNotice:
      "Los valores siguen la ficha técnica pública de la Fuerza Aérea de EE. UU. y referencias habituales. Se incluyen con fines divulgativos, no como documentación técnica.",
    historyHeading: "Del requisito al Raptor.",
    historyIntro:
      "El programa en catorce fechas, desde el requisito que lo originó hasta el combate sobre Irán.",
    variantsHeading: "Una única versión de producción.",
    variantsIntro:
      "Solo se construyó en cantidad una versión del F-22. Se planificó un entrenador biplaza que se abandonó, por lo que se muestra como silueta.",
    compareIntro:
      `Dimensiones y fechas publicadas del F-22 junto a otros ${counts.es.others} aviones. Fue el primer caza de quinta generación en volar y en entrar en servicio.`,
    referenceNote:
      "Las cifras de esta página siguen las publicaciones oficiales cuando existen. Se ha omitido todo lo que no se ha publicado oficialmente.",
    photoArchive: "Archivo fotográfico",
    inFrame: "El F-22 en imágenes",
    nextAircraft: "Siguiente aeronave",
    nextLabel: "Lockheed Martin F-35",
  },

  designFeatures: [
    {
      kicker: "FIRMA",
      title: "Bordes alineados",
      description:
        "Los bordes del ala, la cola y los paneles comparten un conjunto reducido de ángulos, y el armamento se lleva en bodegas internas, para mantener baja la firma radar desde el frente y los lados.",
      metric: "TRANSPORTE DE ARMAMENTO",
      value: "INTERNO",
    },
    {
      kicker: "PROPULSIÓN",
      title: "Supercrucero",
      description:
        "Dos motores F119 permiten un vuelo supersónico sostenido sin postcombustión. La Fuerza Aérea cita velocidades superiores a Mach 1,5 en este régimen.",
      metric: "SIN POSTCOMBUSTIÓN",
      value: "MACH 1,5+",
    },
    {
      kicker: "CONTROL",
      title: "Empuje vectorial",
      description:
        "Unas toberas planas, bidimensionales, desvían el empuje del motor hacia arriba y hacia abajo, lo que aumenta el control en cabeceo a baja velocidad y con ángulos de ataque elevados.",
      metric: "RECORRIDO DE LA TOBERA",
      value: "± 20°",
    },
    {
      kicker: "PERCEPCIÓN",
      title: "Aviónica integrada",
      description:
        "El radar AESA AN/APG-77 y los receptores pasivos AN/ALR-94 ofrecen una imagen fusionada a un único piloto, en lugar de pantallas separadas para cada sensor.",
      metric: "RADAR",
      value: "AN/APG-77",
    },
  ],

  variants: [
    {
      name: "Prototipo",
      status: "2 CONSTRUIDOS",
      caption: "Un prototipo YF-22 en un vuelo de pruebas",
      summary:
        "El demostrador que ganó el concurso del Advanced Tactical Fighter frente al Northrop YF-23. El avión de producción se rediseñó en buena medida después.",
      points: [
        "Primer vuelo en septiembre de 1990",
        "Voló con dos diseños de motor en competencia",
        "Seleccionado en abril de 1991",
      ],
    },
    {
      name: "Monoplaza de producción",
      status: "EN SERVICIO",
      caption: "Un F-22A sobre la base aérea de Kadena, Japón, 2009",
      summary:
        "La única versión de producción. A principios de la década de 2000 se designó brevemente F/A-22 para destacar su función de ataque a tierra.",
      points: [
        "187 aviones de producción",
        "En servicio desde 2005",
        "Mejorado por etapas desde su entrega",
      ],
    },
    {
      name: "Biplaza previsto",
      status: "CANCELADO",
      caption: "Nunca se construyó, por lo que no hay fotografía",
      summary:
        "Un entrenador biplaza previsto junto al F-22A y cancelado en la década de 1990 para ahorrar costes. Los pilotos se entrenan en simuladores y en el avión monoplaza.",
      points: [
        "Ninguno construido",
        "Cancelado antes de la producción",
        "Ningún Raptor biplaza ha volado",
      ],
    },
  ],

  glossary: [
    {
      term: "Quinta generación",
      definition:
        "Una etiqueta informal para los cazas que combinan baja observabilidad, armamento interno, sensores avanzados y un alto grado de fusión de datos. Suele citarse el F-22 como el primero.",
    },
    {
      term: "Advanced Tactical Fighter (ATF)",
      definition:
        "El programa de la Fuerza Aérea de EE. UU. de la década de 1980 para sustituir al F-15. Dio lugar a dos prototipos en competencia, el YF-22 y el YF-23.",
    },
    {
      term: "Baja observabilidad (LO)",
      definition:
        "Medidas de diseño que reducen la facilidad con que se detecta un avión: la forma, los bordes alineados, las bodegas internas de armamento y los materiales de la superficie. A menudo se llama sigilo.",
    },
    {
      term: "Supercrucero",
      definition:
        "Vuelo supersónico sostenido sin postcombustión, que ahorra combustible y reduce la firma infrarroja del avión en comparación con el vuelo con postcombustión.",
    },
    {
      term: "Empuje vectorial",
      definition:
        "Redirigir el escape del motor para ayudar a gobernar el avión. Las toberas del F-22 se mueven solo en cabeceo.",
    },
    {
      term: "Radar AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar cuyo haz se orienta electrónicamente mediante muchos pequeños módulos de transmisión y recepción, en lugar de con una antena móvil.",
    },
  ],

  sources: [
    {
      label: "Fuerza Aérea de EE. UU. — ficha técnica del F-22 Raptor",
      note: "Descripción oficial y cifras publicadas",
    },
    {
      label: "Wikipedia — Lockheed Martin F-22 Raptor",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del F-22",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],

  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "SUPERIORIDAD AÉREA",
      unit: "CAZA POLIVALENTE",
      detail:
        "Descrito por la Fuerza Aérea de EE. UU. como un caza de superioridad aérea con capacidad de ataque a tierra.",
    },
    {
      label: "FABRICANTE",
      value: "LOCKHEED MARTIN",
      unit: "CON BOEING",
      detail:
        "Lockheed Martin fue el contratista principal, y Boeing construyó las alas y el fuselaje trasero.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO",
      detail:
        "Todos los aviones de producción son monoplaza. Se canceló un entrenador biplaza previsto.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × F119",
      unit: "TURBOFANES PRATT & WHITNEY",
      detail:
        "Motores F119-PW-100 de la clase de 35.000 libras de empuje, cada uno con una tobera de empuje vectorial bidimensional.",
    },
    {
      label: "EMPUJE POR MOTOR",
      value: "≈ 156",
      unit: "KILONEWTONS",
      imperial: {
        value: "35.000",
        unit: "LIBRAS",
      },
      detail:
        "Cada F119 pertenece a la clase de 35.000 libras de empuje con postcombustión.",
    },
    {
      label: "BODEGAS DE ARMAMENTO",
      value: "1 + 2",
      unit: "BODEGA PRINCIPAL + LATERALES",
      detail:
        "Una bodega principal para misiles de medio alcance o bombas guiadas y dos bodegas laterales para misiles de corto alcance, además de un cañón interno de 20 mm.",
    },
    {
      label: "LONGITUD",
      value: "18,9",
      unit: "METROS",
      imperial: {
        value: "62,1",
        unit: "PIES",
      },
      detail: "Según la ficha técnica de la Fuerza Aérea de EE. UU.",
    },
    {
      label: "ENVERGADURA",
      value: "13,6",
      unit: "METROS",
      imperial: {
        value: "44,5",
        unit: "PIES",
      },
      detail: "Según la ficha técnica de la Fuerza Aérea de EE. UU.",
    },
    {
      label: "ALTURA",
      value: "5,1",
      unit: "METROS",
      imperial: {
        value: "16,7",
        unit: "PIES",
      },
      detail: "Según la ficha técnica de la Fuerza Aérea de EE. UU.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "38.000",
      unit: "KILOGRAMOS",
      imperial: {
        value: "83.500",
        unit: "LIBRAS",
      },
      detail: "Según la ficha técnica de la Fuerza Aérea de EE. UU.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "CLASE MACH 2",
      unit: "CON POSTCOMBUSTIÓN",
      detail:
        "La descripción oficial. No se publica la velocidad máxima exacta.",
    },
    {
      label: "SUPERCRUCERO",
      value: "MACH 1,5+",
      unit: "SIN POSTCOMBUSTIÓN",
      detail:
        "Crucero supersónico sostenido con empuje en seco, un requisito definitorio del programa.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "15.000+",
      unit: "METROS",
      imperial: {
        value: "50.000+",
        unit: "PIES",
      },
      detail: "Publicado solo como «por encima de 50.000 pies».",
    },
    {
      label: "ALCANCE DE TRASLADO",
      value: "≈ 2.960",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 1.850",
        unit: "MILLAS",
      },
      detail:
        "Publicado como más de 1.850 millas con dos depósitos externos de combustible.",
    },
    {
      label: "PRIMER VUELO",
      value: "7 SEP 1997",
      unit: "MARIETTA, GEORGIA",
      detail:
        "Primer vuelo del F-22 con estándar de producción. El prototipo YF-22 había volado en septiembre de 1990.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "DIC 2005",
      unit: "FUERZA AÉREA DE EE. UU.",
      detail:
        "La capacidad operativa inicial se declaró en la base aérea de Langley, Virginia.",
    },
    {
      label: "AVIONES CONSTRUIDOS",
      value: "195",
      unit: "187 DE PRODUCCIÓN + 8 DE PRUEBAS",
      detail:
        "La producción terminó en 2011. El avión nunca se exportó.",
    },
  ],

  milestones: [
    {
      title: "Un nuevo requisito",
      detail:
        "La Fuerza Aérea de EE. UU. define el requisito del Advanced Tactical Fighter para un avión que suceda al F-15.",
    },
    {
      title: "Dos equipos elegidos",
      detail:
        "Se eligen los equipos liderados por Lockheed y Northrop para construir prototipos en competencia, el YF-22 y el YF-23.",
    },
    {
      title: "Vuela el YF-22",
      detail: "El primer prototipo YF-22 realiza su vuelo inaugural.",
    },
    {
      title: "Concurso ganado",
      detail:
        "Se anuncia que el YF-22 y su motor Pratt & Whitney han ganado el concurso del Advanced Tactical Fighter.",
    },
    {
      title: "Presentación",
      detail:
        "El primer F-22 con estándar de producción se presenta en Marietta, Georgia, y se anuncia el nombre Raptor.",
    },
    {
      title: "Primer vuelo",
      detail: "El primer F-22 vuela desde Marietta.",
    },
    {
      title: "Comienza la instrucción",
      detail:
        "Los primeros aviones se entregan a la base aérea de Tyndall, Florida, para formar pilotos.",
    },
    {
      title: "Capacidad operativa inicial",
      detail:
        "El 27.º Escuadrón de Caza de la base aérea de Langley se convierte en la primera unidad operativa.",
    },
    {
      title: "Producción limitada",
      detail:
        "Se decide poner fin a las compras en 187 aviones de producción, muchos menos de los previstos al principio.",
    },
    {
      title: "Último avión construido",
      detail:
        "El último F-22 sale de la línea de montaje de Marietta. Se entrega al año siguiente.",
    },
    {
      title: "Debut en combate",
      detail:
        "Los F-22 realizan su primera misión de combate y atacan objetivos en Siria.",
    },
    {
      title: "Primer derribo aire-aire",
      detail:
        "Un F-22 de Langley derriba un globo de gran altitud frente a la costa de Carolina del Sur.",
    },
    {
      title: "Mejora de defensa infrarroja",
      detail:
        "Lockheed Martin recibe un contrato de 270 millones de dólares para instalar en la flota un nuevo sistema defensivo infrarrojo.",
    },
    {
      title: "Operación Epic Fury",
      detail:
        "Según informes, los F-22 se despliegan en Israel y participan en la campaña estadounidense-israelí contra Irán, abriendo paso a los aviones de ataque.",
    },
  ],
};
