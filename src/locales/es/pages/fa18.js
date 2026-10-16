// Spanish text for src/pages/fa18.js, laid over the English with localise().
// Same shape as the English module, text only.

import { counts } from "../../../counts.js";

export default {
  eyebrow: "Boeing F/A-18E/F Super Hornet",
  tagline:
    "El caza embarcado de la Armada de EE. UU. durante un cuarto de siglo: un rediseño más grande y de mayor alcance del Hornet, que vuela en versiones monoplaza y biplaza y como EA-18G Growler.",
  heroStats: [
    ["4,5", "Generación"],
    ["02", "Motores"],
    ["1995", "Primer vuelo"],
  ],
  next: {
    label: "Mitsubishi F-2",
  },

  designHeading: "Más grande que el Hornet.",
  designIntro:
    "El Super Hornet se parece al Hornet al que sustituyó, pero es un avión nuevo y más grande, diseñado para tener más alcance y llevar más armas desde la cubierta de un portaaviones.",
  designFeatures: [
    {
      kicker: "PORTAAVIONES",
      title: "Hecho para la cubierta",
      description:
        "Un tren de aterrizaje robusto y un gancho de apontaje absorben el impacto de los aterrizajes en el portaaviones, y las alas se pliegan para que quepan más aviones en la cubierta y en el hangar.",
      metric: "ALAS",
      value: "PLEGABLES",
    },
    {
      kicker: "CÉLULA",
      title: "Un Hornet más grande",
      description:
        "Es alrededor de una cuarta parte más grande que el F/A-18 original, con un tercio más de combustible interno y dos estaciones de armamento más. Sus tomas de aire son rectangulares en lugar de redondeadas.",
      metric: "COMBUSTIBLE INTERNO",
      value: "+33 %",
    },
    {
      kicker: "SENSORES",
      title: "Radar APG-79",
      description:
        "Los aviones fabricados desde 2005 llevan el radar de barrido electrónico activo APG-79, que puede seguir blancos aéreos y terrestres al mismo tiempo.",
      metric: "RADAR",
      value: "APG-79",
    },
    {
      kicker: "MODERNIZACIÓN",
      title: "Block III",
      description:
        "El estándar más reciente añade una gran pantalla táctil en cabina, un ordenador de misión más rápido, mejores enlaces de datos y una célula de mayor vida útil.",
      metric: "VIDA DE LA CÉLULA",
      value: "10.000 H",
    },
  ],

  specHeading: "El perfil publicado.",
  specIntro:
    "Cifras publicadas por la Armada de EE. UU. y Boeing, redondeadas para su presentación. El F/A-18E monoplaza es la versión de referencia.",
  specNotice:
    "Los valores siguen las fichas técnicas de la Armada de EE. UU. cuando las hay. El alcance depende mucho de la misión, del armamento que se lleve y del uso de depósitos externos.",
  specifications: [
    {
      label: "MISIÓN PRINCIPAL",
      value: "POLIVALENTE",
      unit: "CAZA DE ATAQUE EMBARCADO",
      detail:
        "Diseñado para defensa aérea, ataque, reconocimiento y reabastecimiento en vuelo de otros aviones desde portaaviones.",
    },
    {
      label: "FABRICANTE",
      value: "BOEING",
      unit: "ESTADOS UNIDOS",
      detail:
        "Desarrollado por McDonnell Douglas, que se fusionó con Boeing en 1997, y fabricado en San Luis, Misuri.",
    },
    {
      label: "NOMBRE",
      value: "SUPER HORNET",
      unit: "F/A: CAZA / ATAQUE",
      detail:
        "El prefijo F/A indica un avión diseñado tanto para misiones de caza como de ataque.",
    },
    {
      label: "TRIPULACIÓN",
      value: "1",
      unit: "PILOTO (F: 2)",
      detail:
        "El F/A-18E tiene un asiento. El F/A-18F añade un oficial de sistemas de armas en el asiento trasero.",
    },
    {
      label: "PLANTA MOTRIZ",
      value: "2 × F414-GE-400",
      unit: "TURBOFÁN",
      detail:
        "Dos motores General Electric F414, de unos 98 kN cada uno con poscombustión.",
    },
    {
      label: "ARMAMENTO",
      value: "CAÑÓN DE 20 MM",
      unit: "11 ESTACIONES EXTERNAS",
      detail:
        "Un cañón rotativo interno M61A2 y once estaciones para unos 8.000 kilogramos de misiles, bombas, depósitos de combustible y contenedores.",
    },
    {
      label: "RADAR",
      value: "APG-79",
      unit: "AESA",
      detail:
        "Los aviones fabricados antes de 2005 llevan el radar anterior APG-73; los posteriores, el AESA APG-79.",
    },
    {
      label: "LONGITUD",
      value: "18,3",
      unit: "METROS",
      imperial: {
        value: "60,1",
        unit: "PIES",
      },
      detail: "Longitud publicada.",
    },
    {
      label: "ENVERGADURA",
      value: "13,6",
      unit: "METROS",
      imperial: {
        value: "44,7",
        unit: "PIES",
      },
      detail:
        "Envergadura con misiles en las puntas de las alas. Unos 9,3 metros con las alas plegadas.",
    },
    {
      label: "ALTURA",
      value: "4,9",
      unit: "METROS",
      imperial: {
        value: "16,0",
        unit: "PIES",
      },
      detail: "Altura publicada.",
    },
    {
      label: "PESO MÁXIMO AL DESPEGUE",
      value: "≈ 29.900",
      unit: "KILOGRAMOS",
      imperial: {
        value: "66.000",
        unit: "LIBRAS",
      },
      detail: "Cifra de la Armada de EE. UU.",
    },
    {
      label: "VELOCIDAD MÁXIMA",
      value: "MACH 1,8",
      unit: "A GRAN ALTITUD",
      detail: "Cifra de la Armada de EE. UU., que la da como Mach 1,8 o más.",
    },
    {
      label: "TECHO DE SERVICIO",
      value: "> 15.000",
      unit: "METROS",
      imperial: {
        value: "> 50.000",
        unit: "PIES",
      },
      detail: "Cifra de la Armada de EE. UU., que la da como más de 50.000 pies.",
    },
    {
      label: "RADIO DE COMBATE",
      value: "≈ 720",
      unit: "KILÓMETROS",
      imperial: {
        value: "≈ 450",
        unit: "MILLAS",
      },
      detail:
        "Una cifra citada habitualmente para una misión de interdicción con depósitos externos. El radio real depende mucho de la misión y de la carga.",
    },
    {
      label: "PRIMER VUELO",
      value: "29 NOV 1995",
      unit: "SAN LUIS, MISURI",
      detail: "Primer vuelo del primer F/A-18E.",
    },
    {
      label: "ENTRADA EN SERVICIO",
      value: "2001",
      unit: "ARMADA DE EE. UU.",
      detail:
        "El primer escuadrón de la flota, el VFA-115, recibió la certificación para operar el avión en junio de 2001.",
    },
  ],

  historyHeading: "Tres décadas en el mar.",
  historyIntro:
    "El programa en diez fechas, desde el contrato de un Hornet más grande hasta el último pedido de aviones nuevos de la Armada.",
  milestones: [
    {
      title: "Se encarga el desarrollo",
      detail:
        "La Armada de EE. UU. encarga el desarrollo de un Hornet ampliado tras cancelar otros programas de aviones nuevos.",
    },
    {
      title: "Primer vuelo",
      detail: "El primer F/A-18E realiza su vuelo inaugural desde San Luis.",
    },
    {
      title: "Entrada en servicio",
      detail:
        "El 115.º Escuadrón de Caza de Ataque, en la Estación Aeronaval de Lemoore, se convierte en el primer escuadrón de la flota autorizado a operar el Super Hornet por su cuenta.",
    },
    {
      title: "Primer combate",
      detail:
        "Super Hornets del USS Abraham Lincoln atacan objetivos en Irak durante la operación Southern Watch.",
    },
    {
      title: "Vuela el Growler",
      detail:
        "El primer EA-18G Growler, una versión de ataque electrónico del F/A-18F biplaza, realiza su primer vuelo.",
    },
    {
      title: "Pedido de Australia",
      detail:
        "Australia firma por 24 F/A-18F y se convierte en el primer cliente de exportación.",
    },
    {
      title: "Derribo aire-aire",
      detail:
        "Un F/A-18E derriba un Su-22 sirio sobre Siria, el primer derribo aire-aire de un caza de la Armada de EE. UU. desde 1991.",
    },
    {
      title: "Pedido de Kuwait",
      detail: "Kuwait encarga 22 F/A-18E y 6 F/A-18F.",
    },
    {
      title: "Primeros Block III",
      detail:
        "Boeing entrega a la Armada de EE. UU. los dos primeros aviones de ensayo Block III.",
    },
    {
      title: "Último pedido",
      detail:
        "La Armada encarga sus últimos 17 Super Hornets nuevos, con entregas que deben terminar en 2027, cuando Boeing cerrará la línea de producción.",
    },
  ],

  variantsHeading: "E, F y G.",
  variantsIntro:
    "El E monoplaza y el F biplaza se fabrican en paralelo. El EA-18G Growler es un F transformado para el ataque electrónico.",
  variants: [
    {
      name: "Monoplaza",
      status: "EN SERVICIO",
      caption: "Un F/A-18E del VFA-81 en una pasada a alta velocidad, mayo de 2011",
      summary:
        "La versión monoplaza, que vuela en la mayoría de los escuadrones de caza de ataque de la Armada de EE. UU. y en Kuwait.",
      points: [
        "Un piloto",
        "Misiones de caza y de ataque",
        "Puede reabastecer a otros aviones",
      ],
    },
    {
      name: "Biplaza",
      status: "EN SERVICIO",
      caption: "Un F/A-18F del VFA-103 sobre el mar Arábigo, octubre de 2012",
      summary:
        "La versión biplaza, con un oficial de sistemas de armas detrás del piloto. Se usa para instrucción y para misiones de ataque complejas, y la opera Australia.",
      points: [
        "Piloto y oficial de sistemas de armas",
        "Mismo armamento que el E",
        "Base del Growler",
      ],
    },
    {
      name: "Growler",
      status: "EN SERVICIO",
      caption: "Un EA-18G Growler del VAQ-138 sobre el Pacífico, julio de 2024",
      summary:
        "Una versión de ataque electrónico que interfiere radares y comunicaciones enemigos, en sustitución del EA-6B Prowler. La operan la Armada de EE. UU. y Australia.",
      points: [
        "Contenedores receptores en las puntas de las alas",
        "Contenedores de interferencia bajo las alas",
        "Primer vuelo en agosto de 2006",
      ],
    },
  ],

  compareIntro:
    `Dimensiones y fechas publicadas del F/A-18E junto a otros ${counts.es.others} aviones. Como el J-15T, se diseñó desde el principio para operar desde portaaviones.`,

  glossary: [
    {
      term: "F/A",
      definition:
        "Caza/ataque: una designación estadounidense para aviones diseñados para misiones aire-aire y aire-superficie.",
    },
    {
      term: "Gancho de apontaje",
      definition:
        "Un gancho bajo la cola que engancha un cable tendido en la cubierta del portaaviones y detiene el avión en poca distancia.",
    },
    {
      term: "Reabastecimiento entre cazas",
      definition:
        "Un caza que lleva un contenedor de reabastecimiento y depósitos adicionales para repostar a otros en vuelo, una misión que realizan a menudo los Super Hornets.",
    },
    {
      term: "AESA",
      definition:
        "Radar de barrido electrónico activo. Un radar formado por muchos pequeños módulos emisores y receptores que orientan el haz electrónicamente.",
    },
    {
      term: "Oficial de sistemas de armas",
      definition:
        "El tripulante del asiento trasero del F/A-18F que maneja los sensores y el armamento.",
    },
    {
      term: "Ataque electrónico",
      definition:
        "Interferir o engañar a los radares y las comunicaciones enemigos. El EA-18G Growler está hecho para esta misión.",
    },
  ],
  sources: [
    {
      label: "Wikipedia — Boeing F/A-18E/F Super Hornet",
      note: "Referencia general y citas",
    },
    {
      label: "Wikimedia Commons — archivos del Super Hornet",
      note: "Fotografías de dominio público y con licencia libre",
    },
  ],
  referenceNote:
    "Las cifras de esta página siguen las publicaciones de la Armada de EE. UU. y del fabricante cuando las hay. Los valores marcados como según informes o estimados varían según la fuente y la misión.",
};
