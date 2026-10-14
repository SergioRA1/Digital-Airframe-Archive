// Spanish text for src/data/j20.js, laid over the English with localise().
// Same shape as the English exports, text only.

import { counts } from "../../counts.js";

export default {
  page: {
    navigation: [
      "Resumen",
      "Célula",
      "Sistemas",
      "Datos",
      "Historia",
      "Variantes",
      "Comparar",
      "Referencia",
    ],
    eyebrow: "Chengdu J-20",
    intro:
      "Una exposición digital independiente que explora la identidad visual, la geometría de la célula y la historia pública de un caza furtivo moderno.",
    enterArchive: "Entrar al archivo",
    viewPhotography: "Ver fotografías",
    silhouetteLabel: "Silueta estilizada de un avión furtivo",
    visualModel: "Modelo visual / 001",
    heroStats: [
      { value: "05", label: "Generación" },
      { value: "01", label: "Célula" },
      { value: "EN VIVO", label: "Exposición" },
    ],
    scroll: "Desplázate para explorar",
    overview: {
      label: "01 / Resumen",
      heading: "Diseñado como una sombra digital en el cielo.",
      intro:
        "Este concepto trata el avión como una pieza de museo. Las capas gráficas, el movimiento contenido y la información por niveles crean un relato visual interactivo.",
    },
    chapters: [
      {
        label: "Identidad",
        detail: "Vuelve a la presentación inicial del avión.",
      },
      {
        label: "Célula",
        detail: "Explora el lenguaje visual que hay detrás del avión.",
      },
      {
        label: "Sistemas",
        detail: "Unas tarjetas interactivas presentan la arquitectura digital.",
      },
      {
        label: "Especificaciones",
        detail: "Dimensiones según informes e hitos de desarrollo.",
      },
      {
        label: "Historia",
        detail: "Hitos desde los primeros estudios de diseño hasta hoy.",
      },
      {
        label: "Variantes",
        detail: "Células base, actualizada y biplaza.",
      },
      {
        label: "Comparación",
        detail: "El J-20 junto a sus pares de quinta generación.",
      },
      {
        label: "Referencia",
        detail: "Un glosario de términos y lecturas complementarias.",
      },
    ],
    airframe: {
      label: "02 / Célula",
      heading: "Geometría con intención.",
      intro:
        "El modelo visual está estilizado a propósito. Selecciona una llamada o un marcador de la proyección para leer sobre las características de diseño visibles en fotografías públicas.",
      projection: "Proyección superior / ilustrativa",
      axis: "Eje X / Estable",
      select: "Selecciona un marcador",
      feature: "Característica",
      features: [
        {
          label: "Morro con aristas",
          detail:
            "Una arista marcada recorre el fuselaje delantero desde el morro y da la sección facetada típica de los diseños de baja observabilidad.",
        },
        {
          label: "Ala y fuselaje integrados",
          detail:
            "El fuselaje se funde con suavidad en una gran ala delta, que aporta volumen interno para combustible y sustentación a gran velocidad.",
        },
        {
          label: "Configuración canard",
          detail:
            "Los planos canard móviles, situados delante del ala, añaden sustentación y control de cabeceo. Pocos diseños de baja observabilidad los usan.",
        },
        {
          label: "Disposición de doble deriva",
          detail:
            "Dos derivas verticales móviles, inclinadas hacia fuera, junto con pequeñas aletas ventrales bajo el fuselaje trasero.",
        },
        {
          label: "Tomas sin desviador",
          detail:
            "Cada toma usa un abultamiento fijo en lugar de rampas móviles, lo que ahorra peso y ayuda a ocultar la cara del motor.",
        },
        {
          label: "Bodegas internas de armamento",
          detail:
            "Una bodega principal bajo el fuselaje y dos bodegas laterales más pequeñas mantienen la carga dentro de la célula.",
        },
      ],
    },
    systems: {
      label: "03 / Sistemas",
      heading: "Una imagen integrada.",
      status: "Simulación de interfaz en línea",
      items: [
        {
          title: "Forma de baja observabilidad",
          kicker: "CÉLULA",
          description:
            "Una exploración visual de la alineación de la planta, la geometría interna y una célula diseñada para reducir la observabilidad.",
          reported:
            "Las bodegas internas de armamento, las tomas sin desviador y los bordes de panel en dientes de sierra son las características de baja observabilidad más visibles en las fotografías públicas.",
          metric: "PERFIL",
          value: "FURTIVO",
        },
        {
          title: "Fusión de sensores",
          kicker: "PERCEPCIÓN",
          description:
            "La información simulada de radar, infrarrojos y navegación se presenta como una única capa visual coherente.",
          reported:
            "Los informes públicos describen un radar AESA, un sistema electroóptico de designación de objetivos bajo el morro y aperturas infrarrojas repartidas por la célula.",
          metric: "PISTAS",
          value: "FUSIONADAS",
        },
        {
          title: "Espacio de batalla conectado",
          kicker: "RED",
          description:
            "Enlaces de datos abstractos visualizan la información que circula entre aviones, nodos de mando y medios de apoyo.",
          reported:
            "Según informes, el J-20S biplaza está pensado para la gestión de misión y para operar junto con aeronaves no tripuladas.",
          metric: "ENLACE",
          value: "ACTIVO",
        },
        {
          title: "Vuelo de alta energía",
          kicker: "PRESTACIONES",
          description:
            "La telemetría animada da a la experiencia una sensación de velocidad sin presentar controles operativos.",
          reported:
            "Según informes, los aviones de producción posteriores usan motores chinos WS-10C, y el WS-15, más potente, está en pruebas de vuelo.",
          metric: "ESTADO",
          value: "NOMINAL",
        },
      ],
    },
    profile: {
      label: "09 / Perfil",
      heading: "Explora la señal.",
      intro:
        "El módulo de inspiración radar añade movimiento al último capítulo. Los objetivos y la telemetría son elementos de interfaz ficticios creados para contar una historia visual.",
      readouts: [
        { label: "MODO", value: "EXPOSICIÓN" },
        { label: "SEÑAL", value: "LIMPIA" },
        { label: "PISTAS", value: "05" },
        { label: "ESTADO", value: "EN LÍNEA" },
      ],
      archive: "Entrar al archivo fotográfico",
      next: "Siguiente aeronave / F-22 Raptor",
    },
  },

  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "SUPERIORIDAD AÉREA",
      unit: "CAZA FURTIVO",
      detail:
        "Se describe públicamente como un caza de superioridad aérea con una capacidad secundaria de ataque de precisión.",
    },
    {
      label: "FABRICANTE",
      value: "CHENGDU",
      unit: "AIRCRAFT CORPORATION",
      detail:
        "Desarrollado y fabricado por Chengdu Aircraft Corporation, en China.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO",
      detail:
        "El avión original y los aviones de producción base usan una configuración monoplaza.",
    },
    {
      label: "LONGITUD",
      value: "20,4–21,2",
      unit: "METROS",
      imperial: {
        value: "66,9–69,6",
        unit: "PIES",
      },
      detail:
        "Rango aproximado extraído de referencias públicas. Los valores varían entre fuentes.",
    },
    {
      label: "ENVERGADURA",
      value: "13,0–13,5",
      unit: "METROS",
      imperial: {
        value: "42,7–44,3",
        unit: "PIES",
      },
      detail:
        "Envergadura publicada aproximada, según la fuente y la variante del avión.",
    },
    {
      label: "ALTURA",
      value: "4,4–4,7",
      unit: "METROS",
      imperial: {
        value: "14,4–15,4",
        unit: "PIES",
      },
      detail:
        "Altura publicada aproximada, no una medida oficial del fabricante.",
    },
    {
      label: "PRIMER VUELO",
      value: "11 ENE 2011",
      unit: "CHENGDU",
      detail:
        "La fecha asociada al vuelo inaugural del avión, según se informó públicamente.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "MAR 2017",
      unit: "PLAAF",
      detail:
        "Según se informó públicamente, el J-20 entró en servicio en marzo de 2017.",
    },
    {
      label: "NOMBRE",
      value: "DRAGÓN PODEROSO",
      unit: "SEGÚN SE USA EN LOS MEDIOS CHINOS",
      detail:
        "El nombre con el que se conoce habitualmente el avión en los medios y comentarios públicos chinos: «Weilong» o «Mighty Dragon».",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × WS-10C",
      unit: "TURBOFANES CON POSTCOMBUSTIÓN",
      detail:
        "Según informes, para los aviones de producción posteriores. Los primeros ejemplares usaban motores de la serie AL-31, de origen ruso; se informa de que el WS-15 está en pruebas.",
    },
    {
      label: "BODEGAS DE ARMAMENTO",
      value: "1 + 2",
      unit: "BODEGA PRINCIPAL + LATERALES",
      detail:
        "Según informes, una bodega ventral principal para misiles de mayor alcance y dos bodegas laterales para misiles de corto alcance, como se ha visto en exhibiciones públicas.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 37.000",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 81.600",
        unit: "LIBRAS",
      },
      detail:
        "Una estimación de fuentes abiertas citada con frecuencia. No se ha publicado ninguna cifra oficial.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 2,0",
      unit: "APROXIMADA",
      detail:
        "Una estimación muy citada para la velocidad en altitud; las prestaciones reales dependen de los motores instalados.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "≈ 20.000",
      unit: "METROS",
      imperial: {
        value: "≈ 65.600",
        unit: "PIES",
      },
      detail:
        "Una estimación de fuentes abiertas repetida en referencias públicas.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "≈ 2.000",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 1.240",
        unit: "MILLAS",
      },
      detail:
        "Las estimaciones varían mucho según el perfil de misión y el combustible externo. La larga célula sugiere una gran carga interna de combustible.",
    },
    {
      label: "CÉLULAS CONSTRUIDAS",
      value: "300+",
      unit: "ESTIMACIÓN DE FUENTES ABIERTAS",
      detail:
        "Estimaciones de analistas basadas en números de serie e imágenes a 2025. Las cifras de producción no se publican oficialmente.",
    },
  ],

  milestones: [
    {
      title: "Orígenes del programa",
      detail:
        "China inicia estudios para un caza de nueva generación, al que la prensa occidental se refiere como programa J-XX.",
    },
    {
      title: "Se elige el diseño de Chengdu",
      detail:
        "Según informes, la propuesta canard-delta de Chengdu se eligió frente a un diseño rival de Shenyang.",
    },
    {
      title: "Primer vuelo",
      detail:
        "El primer prototipo vuela desde Chengdu. Las fotografías tomadas desde fuera del aeródromo circulan por todo el mundo en pocas horas.",
    },
    {
      title: "Prototipo revisado",
      detail:
        "Aparece un prototipo perfeccionado, con tomas remodeladas, puntas recortadas en el canard y la deriva, una nueva cubierta y un alojamiento para un sensor electroóptico bajo el morro.",
    },
    {
      title: "Producción inicial",
      detail:
        "Se fotografían en Chengdu aviones con imprimación amarilla, lo que se interpreta de forma generalizada como el inicio de la producción inicial de bajo ritmo.",
    },
    {
      title: "Debut público",
      detail:
        "Dos J-20 realizan un breve pase en el Airshow China de Zhuhai, la primera aparición pública oficial del avión.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "Los medios estatales informan de que el avión ha entrado en servicio en la Fuerza Aérea del Ejército Popular de Liberación.",
    },
    {
      title: "Unidades de combate",
      detail:
        "La fuerza aérea anuncia que el J-20 se ha incorporado a unidades de combate.",
    },
    {
      title: "Motores nacionales a la vista",
      detail:
        "Varios J-20 con motores chinos WS-10C vuelan en el Airshow China y sustituyen a los motores de origen ruso de los aviones anteriores.",
    },
    {
      title: "Se ve la variante biplaza",
      detail:
        "Se fotografía en Chengdu una célula biplaza en tándem, el primer caza furtivo biplaza que se ve en público.",
    },
    {
      title: "Célula actualizada y WS-15",
      detail:
        "Se fotografía un prototipo con un lomo elevado tras la cubierta, seguido de informes de vuelos con el motor WS-15, más potente.",
    },
    {
      title: "Presentación del J-20S",
      detail:
        "El J-20S biplaza se presenta oficialmente en el Airshow China de Zhuhai.",
    },
    {
      title: "Pase de la familia",
      detail:
        "Variantes del J-20 vuelan juntas sobre Pekín durante el desfile del Día de la Victoria, y a finales de ese mes un J-20 se expone en estático al público en Changchun.",
    },
    {
      title: "J-20A en producción",
      detail:
        "Según informes, los J-20A de producción vuelan con el motor chino WS-15, más potente.",
    },
  ],

  variants: [
    {
      name: "Base",
      status: "EN SERVICIO",
      caption: "Pase en el Airshow China de Zhuhai, 2016",
      summary:
        "El avión de producción monoplaza original. Los primeros ejemplares volaron con motores de la serie AL-31, de origen ruso; según informes, los lotes posteriores usan el WS-10C chino.",
      points: [
        "Configuración canard-delta monoplaza",
        "Bodega ventral principal y dos bodegas laterales",
        "En servicio desde 2017",
      ],
    },
    {
      name: "Monoplaza actualizado",
      status: "SEGÚN INFORMES",
      caption: "J-20 en el pase del Día Nacional de 2019, Pekín",
      summary:
        "Una célula monoplaza actualizada, con un lomo elevado e integrado tras la cubierta. Se asocia de forma generalizada al motor WS-15, que según informes se instalará en los aviones de producción a partir de 2026.",
      points: [
        "Cubierta y lomo dorsal remodelados",
        "Asociado a los motores WS-15",
        "El uso de la designación varía entre fuentes",
      ],
    },
    {
      name: "Biplaza",
      status: "PRESENTADO EN 2024",
      summary:
        "Una variante biplaza en tándem, vista por primera vez en 2021 y presentada oficialmente en 2024. Los comentarios públicos relacionan el segundo asiento con la gestión de misión y con operar junto con aeronaves no tripuladas.",
      points: [
        "Primer caza furtivo biplaza visto en público",
        "Segundo tripulante para la gestión de misión",
        "Descrito como polivalente",
      ],
    },
  ],

  glossary: [
    {
      term: "Quinta generación",
      definition:
        "Una etiqueta informal para los cazas que combinan baja observabilidad, armamento interno, sensores avanzados y un alto grado de fusión de datos. No existe una definición única aceptada.",
    },
    {
      term: "Baja observabilidad (LO)",
      definition:
        "Medidas de diseño que reducen la facilidad con que se detecta un avión: formas, bordes alineados, bodegas internas de armamento y materiales de superficie. A menudo se llama sigilo.",
    },
    {
      term: "Canard",
      definition:
        "Una pequeña superficie de control situada delante del ala principal. En el J-20, los canard móviles añaden sustentación y control de cabeceo, una elección poco habitual en un diseño de baja observabilidad.",
    },
    {
      term: "Toma supersónica sin desviador (DSI)",
      definition:
        "Una toma de aire del motor que usa un abultamiento moldeado y una cubierta inclinada hacia delante en lugar de rampas móviles o de un desviador de capa límite separado, con lo que ahorra peso y reduce los reflejos del radar.",
    },
    {
      term: "Radar AESA",
      definition:
        "Antena de barrido electrónico activo. Un radar cuyo haz se orienta electrónicamente mediante muchos módulos pequeños de transmisión y recepción, en lugar de con una antena móvil.",
    },
    {
      term: "EOTS",
      definition:
        "Sistema electroóptico de designación de objetivos. Un sensor pasivo infrarrojo y óptico, que en el J-20 se ve como un alojamiento facetado bajo el morro.",
    },
    {
      term: "Supercrucero",
      definition:
        "Vuelo supersónico sostenido sin postcombustión. Se cita a menudo como un objetivo del motor WS-15; no se ha publicado oficialmente ninguna cifra de prestaciones.",
    },
  ],

  sources: [
    {
      label: "Wikipedia — Chengdu J-20",
      note: "Referencia general y citas",
    },
    {
      label: "CSIS ChinaPower — J-20 overview",
      note: "Análisis y comparación con sus pares",
    },
    {
      label: "Wikimedia Commons — archivos del J-20",
      note: "Fotografías con licencia libre",
    },
  ],

  sectionText: {
    specHeading: "El perfil público.",
    specIntro:
      "Una visión estructurada de las características publicadas y los hitos del programa. Las medidas aproximadas se marcan aparte de la información histórica confirmada.",
    specNotice:
      "Las medidas pueden referirse a distintas variantes del avión y no deben interpretarse como documentación técnica oficial. Las fechas y descripciones se incluyen como contexto divulgativo.",
    historyHeading: "Del rumor a la línea de vuelo.",
    historyIntro:
      "Una cronología pública condensada del programa, desde los primeros estudios de diseño hasta las últimas variantes. Las entradas basadas en fotografías y en prensa, y no en declaraciones oficiales, se marcan como según informes.",
    variantsHeading: "Una célula, tres formas.",
    variantsIntro:
      "La familia del J-20 tal como la describen las fuentes públicas. Las designaciones no se aplican de forma coherente entre publicaciones, así que conviene tomar los nombres como etiquetas provisionales. Donde no existe ninguna fotografía con licencia libre, se muestra una silueta.",
    compareIntro:
      `Dimensiones y fechas publicadas del J-20 junto a otros ${counts.es.others} aviones. El J-20 es uno de los aviones más largos de la tabla; sus cifras son estimaciones públicas.`,
    referenceNote:
      "Buena parte de lo que se sabe de este avión no se publica oficialmente. Las cifras de este sitio proceden de fuentes abiertas y deben leerse como aproximadas.",
  },
};
