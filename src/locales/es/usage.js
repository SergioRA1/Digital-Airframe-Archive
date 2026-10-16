// Spanish text for the "Capabilities and use" panels, keyed by slug like
// src/usage.js. Laid over the English with localise().

const titles = ["Capacidades", "Uso y operaciones", "Límites y salvedades"];

const panel = (summary, texts) => ({
  summary,
  sections: texts.map((text, index) => ({
    title: titles[index],
    text,
  })),
});

export const usage = {
  "j-20": panel(
    "Un gran caza furtivo bimotor construido para la Fuerza Aérea del EPL, diseñado para volar largas distancias y operar junto con aviones cisterna y de alerta temprana.",
    [
      "El J-20 combina una forma de baja observabilidad con una bodega interna de armamento para misiles aire-aire de largo alcance. Su configuración de ala en delta y plano canard y su gran carga interna de combustible favorecen el alcance y la velocidad frente a la agilidad a corta distancia. Según informes, lleva un radar AESA y un sistema electroóptico de designación de objetivos bajo el morro.",
      "Entró en servicio hacia 2017 y lo operan varias brigadas de la Fuerza Aérea del EPL. Según la información pública, se describe como interceptor de largo alcance y como medio para amenazar a los aviones cisterna y de apoyo enemigos. Ha participado en ejercicios y exhibiciones aéreas, y Japón y Taiwán han informado de encuentros con cazas chinos cerca de su espacio aéreo.",
      "El J-20 no tiene historial de combate conocido. Sus motores fueron un problema durante años: los primeros aviones usaron motores rusos AL-31 y, según informes, los posteriores usan el WS-10C chino. La mayoría de las cifras de prestaciones son estimaciones externas, no datos oficiales.",
    ],
  ),
  "f-22": panel(
    "El caza de superioridad aérea de la Fuerza Aérea de EE. UU.: un avión furtivo, muy rápido y muy maniobrable, concebido para ganar la batalla aérea antes de que lleguen otras fuerzas.",
    [
      "El F-22 puede volar a velocidad supersónica sin postcombustión (supercrucero) y usa toberas de empuje vectorial para lograr una agilidad extrema. Su armamento va en bodegas internas, y su radar AESA y la fusión de sensores ofrecen al piloto una imagen clara del espacio de batalla. También tiene un papel limitado aire-superficie con bombas guiadas por GPS.",
      "Se construyeron unos 195 y la producción terminó en 2011. Su primer uso en combate fue en septiembre de 2014, contra objetivos terrestres en Siria. En febrero de 2023, un F-22 derribó con un misil AIM-9X un globo chino de gran altitud frente a la costa de EE. UU. Se despliega con regularidad en Europa, Oriente Medio y el Pacífico.",
      "La flota es pequeña y costosa de mantener, y la ley estadounidense ha bloqueado las exportaciones, por lo que ningún aliado lo opera. Los aviones más antiguos no están plenamente preparados para el combate y se emplean en instrucción.",
    ],
  ),
  "f-35": panel(
    "Un caza polivalente furtivo monomotor, construido en tres versiones y utilizado por Estados Unidos y muchos aliados, apreciado tanto por sus sensores como por su baja observabilidad.",
    [
      "El F-35 fusiona los datos de su radar, de sus sensores infrarrojos y de las redes en una sola pantalla, y los comparte con otros aviones. Lleva el armamento en el interior para mantener la baja observabilidad, o en el exterior cuando esta importa menos. Puede cumplir misiones de ataque, defensa aérea, reconocimiento y guerra electrónica.",
      "El F-35A es la versión de despegue convencional, el F-35B despega en distancia corta y aterriza en vertical, y el F-35C está diseñado para catapultas de portaaviones. Se han entregado más de mil a Estados Unidos y a países socios. Israel ha informado de que usa su F-35I en combate desde 2018, y fuerzas estadounidenses y de otros países lo han empleado en operaciones en Oriente Medio.",
      "El programa ha sido criticado por su coste, sus retrasos y el gasto de mantener la flota lista para operar. Algunas mejoras llegaron más tarde de lo previsto. Al tener un solo motor, ofrece menos redundancia que un diseño bimotor.",
    ],
  ),
  "su-57": panel(
    "El caza bimotor de quinta generación de Rusia, diseñado para la superioridad aérea y el ataque, y el primer avión del país que combina rasgos de baja observabilidad con supermaniobrabilidad.",
    [
      "El Su-57 tiene bodegas internas de armamento, un radar AESA con antenas laterales adicionales y motores con empuje vectorial. Está diseñado para ser muy ágil y llevar una combinación de armas aire-aire y aire-superficie. Según informes, los aviones más nuevos están pasando al motor mejorado Izdeliye 30.",
      "La producción para las Fuerzas Aeroespaciales rusas ha sido lenta y la flota sigue siendo pequeña. Rusia afirma que el avión se probó en Siria en 2018, aunque esto se discute. Durante la guerra de Ucrania, fuentes rusas e informaciones occidentales indican que ha lanzado misiles de largo alcance desde el espacio aéreo ruso. Argelia es, según informes, el primer cliente de exportación.",
      "Las cifras de producción son bajas, y el motor de segunda generación prometido y el conjunto completo de sensores han llegado más tarde de lo previsto. Sus características de baja observabilidad están menos probadas que las de los cazas occidentales de quinta generación, y la mayoría de las cifras no se han verificado de forma independiente.",
    ],
  ),
  "f-16": panel(
    "El caza occidental más utilizado de su época: un avión polivalente ligero y monomotor que se ha mejorado de forma continua durante más de cuarenta años.",
    [
      "El F-16 es pequeño, ágil y barato de operar en comparación con los cazas más pesados. Fue el primer caza de producción con un sistema de mandos fly-by-wire y una cúpula de burbuja. Las versiones recientes, como el Block 70/72, añaden un radar AESA, enlaces de datos modernos y una amplia gama de armamento.",
      "Se han construido más de 4.600 para más de 25 países. Ha volado en muchos conflictos, desde Oriente Medio en la década de 1980 hasta los Balcanes, Irak y Afganistán. Países europeos comenzaron a entregar F-16 a Ucrania en 2024. La Fuerza Aérea de EE. UU. lo emplea como avión de trabajo para el apoyo aéreo cercano y la defensa aérea.",
      "El diseño data de la década de 1970, por lo que tiene menos margen de crecimiento y menor baja observabilidad que los cazas más recientes. Tiene un solo motor y una carga útil y un alcance menores que los de los aviones bimotor más grandes.",
    ],
  ),
  typhoon: panel(
    "Un caza europeo bimotor de ala en delta y plano canard, construido por un consorcio de cuatro naciones, que nació como avión de superioridad aérea y se ha convertido en polivalente.",
    [
      "El Typhoon combina un empuje elevado, un ala en delta y planos canard para lograr una aceleración y un ascenso muy buenos. Lleva el misil de largo alcance Meteor y, en los lotes posteriores, un radar AESA (Captor-E). Los aviones más nuevos añaden armamento aire-superficie y capacidad de ataque de precisión.",
      "Vuela con el Reino Unido, Alemania, Italia y España, y con clientes de exportación como Austria, Arabia Saudí, Omán, Kuwait y Catar. Los Typhoon participaron en la campaña de Libia de 2011 y en ataques contra el Estado Islámico en Irak y Siria. Gran parte de su trabajo diario es la policía aérea: interceptar aviones cerca del espacio aéreo de la OTAN.",
      "La capacidad polivalente se añadió más tarde, y la flota ha sufrido problemas de disponibilidad y retrasos en las mejoras. Su forma no está diseñada para la baja observabilidad.",
    ],
  ),
  rafale: panel(
    "Un caza francés bimotor «omnirrol» que vuela tanto desde bases terrestres como desde portaaviones y puede realizar casi todas las misiones con una sola célula.",
    [
      "El Rafale lleva un radar AESA (RBE2), el sistema de autoprotección SPECTRA y una amplia gama de armamento, incluidos el Meteor y el misil de crucero SCALP. Realiza misiones de defensa aérea, ataque, reconocimiento y, para las fuerzas francesas, lanzamiento nuclear con el misil ASMPA.",
      "Ha volado en Libia en 2011, en Malí en 2013 y en Irak y Siria. El Rafale M opera desde el portaaviones Charles de Gaulle. Entre sus clientes de exportación están Egipto, India, Catar, Grecia, los Emiratos Árabes Unidos, Indonesia, Croacia y Serbia, lo que lo convierte en una de las exportaciones de cazas europeos con más éxito.",
      "No es un avión furtivo, aunque tiene una firma radar reducida. Su rendimiento según los informes sobre los enfrentamientos entre India y Pakistán de 2025 se debatió ampliamente, y las afirmaciones de ambas partes no se confirmaron de forma independiente.",
    ],
  ),
  gripen: panel(
    "Un caza ligero sueco monomotor, diseñado para ser barato de operar y para volar desde carreteras cortas y bases dispersas.",
    [
      "El Gripen es pequeño, rápido de preparar entre misiones y sencillo de mantener. El Gripen E añade un radar AESA, más combustible, un sensor de búsqueda y seguimiento por infrarrojos y misiles Meteor. Está concebido en torno a los enlaces de datos y la guerra electrónica más que al tamaño bruto.",
      "Suecia lo diseñó para operar desde carreteras y pequeños aeródromos si se ataca a las bases principales. Entre sus operadores están Suecia, Chequia, Hungría, Sudáfrica, Tailandia y Brasil. Los Gripen C suecos realizaron misiones de reconocimiento y patrulla sobre Libia en 2011.",
      "Un solo motor y una carga útil y un alcance menores limitan las misiones de ataque pesado. Tiene una firma radar mucho menor que la de los cazas más antiguos, pero no es un avión furtivo.",
    ],
  ),
  "j-35": panel(
    "Un caza furtivo chino bimotor de Shenyang, desarrollado a partir del demostrador FC-31 y que, según informes, servirá como avión terrestre y embarcado.",
    [
      "El J-35 tiene una forma de baja observabilidad y, como otros cazas de quinta generación, se espera que lleve el armamento en bodegas internas. Es más pequeño que el J-20, por lo que se cree que sacrifica alcance a cambio de un coste menor y un manejo más sencillo en portaaviones. Los detalles del radar y de los motores no están confirmados.",
      "Fuentes chinas han mostrado el J-35A para la Fuerza Aérea del EPL y una versión embarcada para la Armada del EPL, asociada al portaaviones con catapultas Fujian. La versión terrestre se presentó en el salón aeronáutico de Zhuhai en 2024. Algunos informes lo han vinculado a un posible interés de exportación de Pakistán, pero no se ha confirmado ningún pedido.",
      "La información pública es limitada y gran parte procede de fotografías y de informaciones de prensa. Se desconocen su ritmo real de producción, sus motores y su rendimiento en combate.",
    ],
  ),
  "j-16": panel(
    "Un gran caza de ataque chino biplaza derivado de la familia Flanker, utilizado como complemento de gran carga útil del J-20 furtivo.",
    [
      "El J-16 puede llevar una gran carga de armamento aire-aire y aire-superficie en una docena de puntos de anclaje. Según informes, tiene un radar AESA y lleva el misil de largo alcance PL-15 y armas antibuque y antirradiación. Su gran autonomía se ve favorecida por el reabastecimiento en vuelo.",
      "Entró en servicio en el EPL hacia 2015 y se fabrica en gran número. Aparece con regularidad en ejercicios cerca de Taiwán y en encuentros que ha comunicado Japón. La versión de guerra electrónica J-16D está pensada para interferir radares y apoyar a otros aviones de ataque.",
      "La célula no es furtiva, por lo que depende de armas de largo alcance y del apoyo de otros aviones. Sus especificaciones se heredan de la familia Su-30 o son estimaciones, no cifras publicadas oficialmente.",
    ],
  ),
  "j-15": panel(
    "El caza embarcado de China, derivado de la familia Flanker. El J-15T es la versión que, según informes, se lanza con catapulta desde el portaaviones más nuevo.",
    [
      "El J-15 es un caza polivalente pesado y bimotor, con alas plegables y un tren de aterrizaje reforzado para apontar en portaaviones. La versión original despega con rampa de salto y con una carga reducida. Según informes, el J-15T tiene el equipo necesario para el lanzamiento por catapulta, lo que permite cargas mayores de combustible y armamento.",
      "El J-15 opera desde los portaaviones Liaoning y Shandong. El J-15T se ha asociado al portaaviones con catapulta electromagnética Fujian. También se ha informado de una versión biplaza de guerra electrónica, el J-15D.",
      "Los primeros J-15 estaban limitados en carga útil y alcance por el despegue con rampa de salto. Los datos de producción y de prestaciones no son oficiales.",
    ],
  ),
  "f-15ex": panel(
    "La versión más reciente del veterano F-15 Eagle, encargada por la Fuerza Aérea de EE. UU. para añadir una gran carga de armamento y electrónica moderna a una célula bimotor ya probada.",
    [
      "El F-15EX tiene mandos fly-by-wire, un radar AESA y un sistema moderno de guerra electrónica. Sus puntos de anclaje en las alas y el fuselaje le permiten llevar un número muy grande de misiles aire-aire, y también puede llevar armas hipersónicas y de largo alcance. Es una evolución del F-15E Strike Eagle y del F-15QA vendido a Catar.",
      "Las entregas a la Fuerza Aérea de EE. UU. comenzaron en 2021. Su función es sustituir a los F-15C/D más antiguos, actuar como portador de misiles de largo alcance y compartir datos de designación de objetivos con aviones furtivos. Lo operan unidades de la Guardia Nacional Aérea y unidades en servicio activo.",
      "No es un avión furtivo, por lo que es menos adecuado para espacios aéreos muy defendidos. Su valor depende de operar junto con otros aviones y de las armas de largo alcance.",
    ],
  ),
  "kf-21": panel(
    "El primer caza desarrollado por Corea del Sur, hecho para sustituir sus veteranas flotas de F-4 y F-5 y para dar al país un avión que pueda modernizar y exportar según sus propios criterios.",
    [
      "El Block I es un caza de superioridad aérea con un radar AESA coreano, búsqueda y seguimiento por infrarrojos y misiles Meteor de largo alcance e IRIS-T de corto alcance. Su forma reduce su firma radar, y sus misiles van en parte encastrados bajo el fuselaje. Está previsto que el Block II añada armamento aire-superficie y antibuque.",
      "El primer avión de serie se incorporó al 156.º Escuadrón de Caza de la Fuerza Aérea de la República de Corea en septiembre de 2026, y se espera la plena capacidad operativa en 2027. Hay 40 aviones Block I encargados. Indonesia es socio de desarrollo, y otros países han mostrado interés por la exportación.",
      "El Block I no tiene bodega interna de armamento, así que no es un avión plenamente furtivo, y su capacidad aire-superficie llegará más tarde. Muchas cifras de prestaciones no se han publicado, y el avión aún no tiene historial operativo.",
    ],
  ),
  "su-35": panel(
    "El Flanker más moderno de Rusia y su caza nuevo más numeroso, exportado también a China y Argelia y, según informes, encargado por Irán.",
    [
      "El Su-35S combina motores de empuje vectorial, un gran radar Irbis-E, un sensor de búsqueda y seguimiento por infrarrojos y doce estaciones de armamento. Lleva misiles aire-aire de largo alcance, además de bombas guiadas y misiles antibuque y antirradiación, y tiene gran alcance con combustible interno.",
      "Ha realizado misiones de combate sobre Siria desde 2016 y en la guerra contra Ucrania desde 2022, donde se han perdido varios. Los Su-35 rusos interceptan con frecuencia aviones de patrulla extranjeros cerca de las fronteras de Rusia.",
      "Es un avión grande con una firma radar considerable, y su radar es de barrido pasivo y no del tipo activo, más moderno. Las cifras de prestaciones proceden del fabricante, y según informes las sanciones han ralentizado la producción y las modernizaciones.",
    ],
  ),
  "fa-18": panel(
    "La columna vertebral de las alas aéreas embarcadas de la Armada de EE. UU. desde principios de la década de 2000, operado también por Australia y Kuwait, y base del EA-18G Growler.",
    [
      "El Super Hornet lleva misiles aire-aire, bombas guiadas y armas de largo alcance en once estaciones, y puede reabastecer a otros aviones con un contenedor. Los aviones más recientes tienen el radar AESA APG-79, y el Block III añade una gran pantalla táctil en cabina, mejores enlaces de datos y una célula de mayor vida útil.",
      "Ha operado desde portaaviones sobre Irak, Afganistán, Siria y el mar Rojo. Equipa la mayoría de los escuadrones de caza de ataque de la Armada de EE. UU., junto al F-35C que se incorpora ahora a las alas aéreas embarcadas, y la versión Growler es el avión de ataque electrónico de la Armada.",
      "No es un avión furtivo, y su alcance desde un portaaviones es limitado sin aviones cisterna. Está previsto que la fabricación de aviones nuevos termine en 2027, y el próximo caza de la Armada, el F/A-XX, sigue en desarrollo.",
    ],
  ),
  "f-2": panel(
    "Un caza japonés hecho para defender los accesos marítimos del país, desarrollado junto con Estados Unidos y que está previsto sustituir por el GCAP a partir de 2035 aproximadamente.",
    [
      "El F-2 lleva hasta cuatro misiles antibuque, entre ellos el supersónico ASM-3, además de misiles aire-aire como el AAM-4 y bombas guiadas. Su radar AESA fue el primero en un caza de serie, y su gran ala de materiales compuestos le da un buen alcance para su tamaño.",
      "Equipa varios escuadrones de la Fuerza Aérea de Autodefensa de Japón y se adiestra con aliados en ejercicios como Cope North en Guam y Pitch Black en Australia. También participa en salidas de alerta para interceptar aviones que se acercan al espacio aéreo japonés.",
      "Solo se construyeron 98 y la línea de producción cerró en 2011, así que las pérdidas no pueden reponerse y los repuestos son limitados. Es un diseño de cuarta generación sin furtividad, y muchas de sus cifras de prestaciones no se publican oficialmente.",
    ],
  ),
};
