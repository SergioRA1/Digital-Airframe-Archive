// Spanish text for src/pages/kf21.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "KAI KF-21 Boramae",
  tagline:
    "El primer caza desarrollado por Corea del Sur: un bimotor con una forma que reduce su firma radar, construido primero como Block I para el combate aéreo.",
  heroStats: [
    ["4,5", "Generación"],
    ["02", "Motores"],
    ["2022", "Primer vuelo"],
  ],
  next: {
    label: "Sukhoi Su-35S",
  },

  designHeading: "Construido por bloques.",
  designIntro:
    "El KF-21 se planificó para crecer por etapas. La primera versión es un caza de superioridad aérea; el armamento de ataque y una mayor furtividad llegarán en bloques posteriores.",
  designFeatures: [
    {
      kicker: "FIRMA",
      title: "Forma furtiva",
      description:
        "Los bordes alineados, el morro con aristas y las derivas inclinadas reducen su firma radar. El Block I lleva los misiles fuera del avión, en parte encastrados bajo el fuselaje, así que no es un diseño plenamente furtivo.",
      metric: "BODEGA DE ARMAMENTO",
      value: "BLOQUES POSTERIORES",
    },
    {
      kicker: "SENSORES",
      title: "Radar AESA coreano",
      description:
        "Su radar de barrido electrónico activo lo desarrolló en Corea del Sur Hanwha Systems, después de que Estados Unidos se negara a transferir la tecnología.",
      metric: "RADAR",
      value: "APY-016K",
    },
    {
      kicker: "PROPULSIÓN",
      title: "Dos motores F414",
      description:
        "Dos motores General Electric F414 fabricados bajo licencia en Corea del Sur por Hanwha Aerospace. La misma familia de motores impulsa al Super Hornet y al Gripen E.",
      metric: "EMPUJE (CADA UNO)",
      value: "≈ 98 KN",
    },
    {
      kicker: "PROGRAMA",
      title: "Primero el Block I",
      description:
        "Los primeros 40 aviones de serie son cazas Block I para el combate aéreo. Está previsto que el Block II añada armamento aire-superficie y antibuque.",
      metric: "PEDIDOS BLOCK I",
      value: "40",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por Korea Aerospace Industries y la agencia de adquisiciones de defensa de Corea del Sur, redondeadas para su presentación. Varias cifras de prestaciones no se han hecho públicas.",
  specNotice:
    "El KF-21 acaba de entrar en servicio y algunas cifras proceden de los ensayos de desarrollo. Los valores marcados como según informes proceden de crónicas de prensa sobre presentaciones oficiales.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "PRIMERO SUPERIORIDAD AÉREA",
      detail:
        "El Block I está hecho para misiones aire-aire. Está previsto que los bloques posteriores añadan misiones aire-superficie y antibuque.",
    },
    {
      label: "FABRICANTE",
      value: "KAI",
      unit: "COREA DEL SUR",
      detail:
        "Diseñado y construido por Korea Aerospace Industries en Sacheon, con Indonesia como socio de desarrollo.",
    },
    {
      label: "NOMBRE",
      value: "BORAMAE",
      unit: "HALCÓN JOVEN",
      detail:
        "Boramae es la palabra coreana para un halcón joven adiestrado para la caza.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO (BIPLAZA: 2)",
      detail:
        "Se construye en versiones monoplaza y biplaza. El primer avión de serie entregado fue un biplaza.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × F414-GE-400K",
      unit: "TURBOFÁN",
      detail:
        "Motores General Electric F414 fabricados bajo licencia por Hanwha Aerospace, de unos 98 kN cada uno con poscombustión.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 20 MM",
      unit: "10 ESTACIONES EXTERNAS",
      detail:
        "Un cañón rotativo interno M61A2 y diez puntos de anclaje externos, con unos 7.700 kilogramos de carga externa. Entre los misiles figuran el Meteor y el IRIS-T.",
    },
    {
      label: "RADAR",
      value: "APY-016K",
      unit: "AESA",
      detail:
        "Un radar de barrido electrónico activo desarrollado por Hanwha Systems, con unos 1.000 módulos de transmisión y recepción según informes.",
    },
    {
      label: "LONGITUD",
      value: "16,9",
      unit: "METROS",
      imperial: {
        value: "55,4",
        unit: "PIES",
      },
      detail: "Longitud publicada del diseño de serie.",
    },
    {
      label: "ENVERGADURA",
      value: "11,2",
      unit: "METROS",
      imperial: {
        value: "36,7",
        unit: "PIES",
      },
      detail: "Envergadura publicada.",
    },
    {
      label: "ALTURA",
      value: "4,7",
      unit: "METROS",
      imperial: {
        value: "15,4",
        unit: "PIES",
      },
      detail: "Altura publicada.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 25.600",
      unit: "KILOGRAMOS",
      imperial: {
        value: "≈ 56.400",
        unit: "LIBRAS",
      },
      detail: "Una cifra citada habitualmente para el monoplaza.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 1,81",
      unit: "A GRAN ALTITUD",
      detail:
        "La cifra de diseño publicada. En los ensayos en vuelo se alcanzó Mach 1,8 en 2024.",
    },
    {
      label: "PRIMER VUELO",
      value: "19 JUL 2022",
      unit: "SACHEON, COREA DEL SUR",
      detail: "Primer vuelo del primer prototipo.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2026",
      unit: "FUERZA AÉREA DE LA REPÚBLICA DE COREA",
      detail:
        "El primer avión de serie se entregó al 156.º Escuadrón de Caza en septiembre de 2026. Se espera la plena capacidad operativa en 2027.",
    },
    {
      label: "AVIONES ENCARGADOS",
      value: "40",
      unit: "BLOCK I",
      detail:
        "Dos pedidos de 20 aviones Block I, hechos en 2024 y 2025. Están previstos más aviones Block II.",
    },
  ],

  historyHeading: "Del KF-X al servicio.",
  historyIntro:
    "El programa en doce fechas, desde los primeros planes de un caza coreano hasta la llegada a un escuadrón del primer avión de serie.",
  milestones: [
    {
      title: "Se anuncia el KF-X",
      detail:
        "Corea del Sur anuncia un plan para desarrollar su propio caza y sustituir a los veteranos F-4 y F-5.",
    },
    {
      title: "Se suma Indonesia",
      detail:
        "Indonesia acepta financiar el 20 % del desarrollo a cambio de una parte del trabajo y de un prototipo.",
    },
    {
      title: "Empieza el desarrollo",
      detail:
        "Korea Aerospace Industries firma el contrato de desarrollo a gran escala. Estados Unidos se niega a transferir cuatro tecnologías clave, entre ellas el radar AESA, que Corea del Sur desarrolla por su cuenta.",
    },
    {
      title: "Presentación",
      detail:
        "Se presenta el primer prototipo en Sacheon y el avión recibe el nombre de Boramae.",
    },
    {
      title: "Primer vuelo",
      detail: "El primer prototipo realiza su vuelo inaugural desde Sacheon.",
    },
    {
      title: "Supersónico",
      detail: "Un prototipo vuela por primera vez más rápido que el sonido.",
    },
    {
      title: "Seis prototipos en vuelo",
      detail:
        "Vuela el sexto y último prototipo. Cuatro son monoplazas y dos son biplazas.",
    },
    {
      title: "Se encarga la producción",
      detail: "Corea del Sur encarga los primeros 20 aviones de serie Block I.",
    },
    {
      title: "Se reduce la parte de Indonesia",
      detail:
        "Se reduce la aportación de Indonesia al desarrollo, y su participación en el programa baja a cerca del 7,5 %.",
    },
    {
      title: "Fin de los ensayos",
      detail:
        "El programa de ensayos en vuelo de desarrollo termina tras unos 1.600 vuelos sin accidentes.",
    },
    {
      title: "Primer avión de serie",
      detail: "Se presenta en Sacheon el primer KF-21 de serie.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "El primer avión de serie, un biplaza, se entrega al 156.º Escuadrón de Caza en la base aérea de Yecheon.",
    },
  ],

  variantsHeading: "Una célula, dos asientos.",
  variantsIntro:
    "El Block I se ha construido como monoplaza y como biplaza. El Block II, previsto a continuación, se muestra como silueta.",
  variants: [
    {
      name: "Monoplaza",
      status: "EN SERVICIO",
      caption: "Un KF-21 en una exhibición aérea en Seoul ADEX, octubre de 2023",
      summary:
        "La versión principal de serie, hecha para misiones aire-aire con el radar AESA y los misiles Meteor e IRIS-T.",
      points: [
        "Misión de superioridad aérea",
        "Misiles transportados por fuera",
        "Primero de 40 aviones Block I",
      ],
    },
    {
      name: "Biplaza",
      status: "EN SERVICIO",
      caption: "El sexto prototipo, un biplaza, en Seoul ADEX, octubre de 2023",
      summary:
        "Una versión biplaza del mismo avión, usada para la instrucción y capaz de realizar misiones de combate. Dos de los seis prototipos eran biplazas.",
      points: [
        "Segunda cabina detrás de la primera",
        "Prototipos 4 y 6",
        "Primer avión de serie entregado",
      ],
    },
    {
      name: "Polivalente",
      status: "PREVISTO",
      summary:
        "Una versión prevista que añade al avión Block I armamento aire-superficie y antibuque, como el misil de crucero KALCM.",
      points: [
        "Armamento aire-superficie",
        "Misiles antibuque",
        "Previsto después del Block I",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del KF-21 junto a otros ${counts.es.others} aviones. Es el diseño de la tabla que ha entrado en servicio más recientemente.`,

  glossary: [
    {
      term: "Boramae",
      definition:
        "En coreano, un halcón joven adiestrado para la caza; se eligió como nombre del avión en su presentación en 2021.",
    },
    {
      term: "KF-X",
      definition:
        "Korean Fighter eXperimental, el nombre del programa de desarrollo antes de que el avión recibiera el nombre de KF-21.",
    },
    {
      term: "Block",
      definition:
        "Un estándar de producción. Los aviones Block I están hechos para el combate aéreo, y está previsto que los bloques posteriores añadan nuevas armas y capacidades.",
    },
    {
      term: "AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar formado por muchos pequeños módulos emisores y receptores que orientan el haz electrónicamente.",
    },
    {
      term: "Transporte semiencastrado",
      definition:
        "Misiles transportados en parte hundidos en la parte inferior del fuselaje, lo que reduce la resistencia y la firma radar frente a los soportes normales.",
    },
    {
      term: "IF-X",
      definition:
        "El nombre que da Indonesia a su parte del programa, como socio de desarrollo.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — KAI KF-21 Boramae",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del KF-21",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones del fabricante y del Gobierno cuando las hay. Los valores marcados como según informes proceden de la prensa y pueden cambiar a medida que el avión entre en servicio.",
};
