type ScenarioText = {
  name: string,
  introduction: string[],
  milestones: {key: string, texts: string[]}[],
  conclusion: string[]
};

export const SCENARIO_TEXTS: ScenarioText[] = [
  { // campaign intro
    name: 'Introducción',
    introduction: [
      'Todo el mundo necesita comer.',
      'Cualquiera que sea tu razón para venir a Gloomhaven, aquí en el borde del mundo, ese simple hecho nunca va a cambiar. Un mercenario no puede luchar con el estómago vacío.',
      'Así que cuando Jekserah, una mujer de Valrath con un manto rojo y joyas de oro suficientes para mantenerte alimentado durante una década, se te acerca en el León Durmiente (Sleeping Lion) y ofrece pagarte diez monedas de oro para localizar a un ladrón y recuperar algunos bienes robados ... Bueno, parece una excusa tan buena como cualquiera para ponerse sobrio y comenzar a pagar tu cuenta.',
      '"Este ladrón ha robado algunos documentos importantes", dice la comerciante de piel roja, agitando la colacon agitación. "No me importa lo que le hagas a él. Solo trae lo que es mío ".',
      'Basándoos en la descripción de Jekserah, fue bastante fácil golpear a algunos matones callejeros y obtener una ubicación de la guarida de los ladrones. No te ganas la vida como mercenario en Gloomhaven sin saber cómo romper algunos cráneos.',
      'Entonces vuestro objetivo es Black Barrow. Suena como un lugar encantador.'
    ],
    milestones: [],
    conclusion: []
  },
  {
    name: '#1 Black Barrow',
    introduction: [
      'La colina es bastante fácil de encontrar, un breve trayecto después de pasar por la Puerta del Mercado Nuevo (New Market Gate) y alcanzas a verla sobresaliendo en la linde del Bosque Cadavérico (Coprsewood), como una rata que asoma bajo una alfombra. Cuando te acercas ves un montículo formado por tierra negra. La pequeña entrada, cubierta de vegetación, permite ver un desgastado conjunto de escaleras de piedra que se proyectan hacia la oscuridad.',
      'Al descender, agradeces que haya luz emanando desde abajo. Desafortunadamente, la luz está acompañada por el inconfundible hedor de la muerte. Mientras desciendes los últimos escalones te preguntas qué tipo de ladrones harían su campamento en este lugar horrible. Y encuentras tu respuesta - un grupo de asesinos que no parecen haber tomado muy amablemente tu repentina aparición. En la parte posterior, uno de ellos coincide con la descripción de tu presa.',
      `"Ocúpense de estos desafortunados" dice, retrocediendo fuera de la habitación.
      Vagamente, puedes distinguir su silueta retrocediendo a través del pasillo y luego
      atravesando una puerta a la izquierda.`,
      `"Bueno, no todos los días recibimos gente lo suficientemente estúpida que nos venga a
      entregar en mano sus objetos de valor", sonríe uno de los bandidos más grandes, mientras desenvaina una hoja oxidada. “Ahora los mataremos.” Se llevarán unasorpresa. Si tuvieras algún objeto de valor, probablemente no estarías aquí abajo.`,
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Al patear la puerta, te encuentras cara a cara con la razón por la que estos bandidos
          eligieron este agujero en particular para anidar: Huesos vivientes (Living Bones) -
          abominaciones impías producto del poder necromántico.`,
          `Tendrás que ponerlos a descansar junto con el resto de esta problemática chusma.`,
        ]
      }
    ],
    conclusion: [
      `Con el último de los bandidos muerto, te tomas un momento para recuperar el
      aliento y protegerte de la visión de restos humanos no muertos tratando de
      arrancarte la carne. Tu objetivo no está entre los muertos y te estremeces al pensar
      en los horrores que te esperan abajo en las catacumbas  <strong>(2-Barrow Lair)</strong>`
    ]
  },
  {
    name: '#2 Barrow Lair',
    introduction: [
      `El hedor de la muerte y la carne podrida se hace más intenso a medida que os alejais
      de los cadáveres de vuestros enemigos y os adentrais en el subterráneo del tumulo.
      Guiados por los sonidos de voces amortiguadas, os abris camino a través del laberinto
      de criptas que termina en una pequeña habitación llena de bandidos de rudas caras,
      todos con sus arcos tensados.`,
      `Ellos claramente están protegiendo algo. Debes estar en el lugar correcto.`,
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Abrís la puerta a una gran cripta llena de ataúdes. En lo más profundo se encuentra
          vuestro objetivo. Se ajusta a la descripción, pero hay algo en sus ojos que no os explicaron, una oscura fuerza de otro mundo.`,
          `"¿Quién eres tú para pensar que puedes interrumpir el trabajo de Gloom?" Una energía
          oscura envuelve sus manos mientras habla. "¡Te mostraré con quién estás tratando!"`,
        ]
      }
    ],
    conclusion: [
      `Examinando la carnicería que dejó la batalla, encuentras un alijo en la parte posterior de la habitación que contiene los pergaminos por los que fuiste contratado. No puedes evitar echarles un vistazo, pero descubrís que la escritura es desconocida de un lenguaje arcaico. Sin embargo, reconoces un mapa del norte de la zona. Un saliente en el Río Tranquilo (Still River) está claramente marcado como un punto de interés. Al contemplarlo quieres saber más sobre este llamado "Gloom",  decides que este lugar también podría ser un punto de interés para ti. <strong>(4-Crypt of the Damned)</strong>`,
      `Pero eso puede esperar por el momento. Recoges los papeles y vuelves a Gloomhaven
      para recibir tu recompensa Al encontraros con Jekserah una vez más en el León Durmiente, la entregais los papeles y se os paga la cantidad acordada.`,
      `"Ya sabeis." ella os susurra suavemente bajo el bullicio de la taberna. "Si estáis interesados, tengo otro trabajo para vosotros. Una tribu de Inox en el Bosque de las Dagas (Dagger Forest) ha saqueado un par de mis caravanas que sedirigian a la capital." "Se lo dije a la milicia, pero no hacen nada". ella
      escupe "Puedo señalaros la dirección de su campamento. Así podéis darles su merecido, os pagaré aún más". <strong>(3-Inox Encampment)</strong>`,
      `Ella coloca un mapa del bosque sobre la mesa y se pone de pie, sus joyas tintinean con el movimiento. "Venir a buscarme cuando estéis listos".`
    ]
  },
  {
    name: '#3 Inox Encampment',
    introduction: [
      `¿Entonces este comerciante quiere dar un escarmiento con algunos saqueadores de
      caravanas? Parece lo suficientemente razonable. Por la cantidad correcta de dinero, casi cualquier cosa puede hacerse razonable.`,
      `Entras al Bosque de las Dagas (Dagger Forest) y comienzas a buscar el campamento usando el mapa de Jekserah. Está bien escondido, pero siguiendo los signos delineados en el pergamino, se encuentra un denso grupo de cabañas en un pequeño claro del bosque. Todo lo que queda es dirigirse allí y dar ese escarmiento solicitado.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Os abrís camino a la cueva posterior del campamento solo para encontraros media docena
          de niños Inox gritando entre llantos. Tenéis poco tiempo para analizar la situación
          ya que frente a vosotros se encuentran varios arqueros amenazantes. Vuestra única
          oportunidad es continuar luchando.`,
        ]
      }
    ],
    conclusion: [
      `Corriendo hacia el bosque, huyendo del olor a carne quemada, encontráis la oportunidad de observar las consecuencias de vuestros actos. En vuestra cara se refleja el desasosiego de vuestras acciones incluso cuando os encontráis con Jekserah, esta vez en su mansión.`,
      `Os aproxima un de saco de monedas a vuestras manos mientras frunce el ceño. "Eran ladrones y asesinos", dice ella con la mirada vacía.`,
      `"Se merecían lo que les disteis. Y eso es todo lo que diré sobre el asunto. Volviendo a temas más importantes, tengo otra tarea que me gustaría que realizarais; necesito un diamante de tamaño considerable para un cliente, pero soy incapaz de encontrar uno en ninguna parte de la ciudad."`,
      `"Sin embargo, hay una mina de diamantes abandonada hace mucho tiempo en las montañas del sur del desierto. He escuchado rumores de que ahora está infestada de Vermlings, seguramente con alguien más inteligente y fuerte al mando. Si te las arreglas para entrar y hacerte con el diamante más grande que veas te daré una recompensa considerable." <strong>(9-Diamond Mine)</strong>`,
      `"Ahora dejadme tranquila". Los dos enormes guardaespaldas Inox de Jekserah dan un paso
      hacia adelante obligandoos que abandonéis la mansión. Al salir, mientras asimilais vuestra nueva tarea, escucháis una pequeña voz a vuestra espalda. "Ella no esta buscando solo lucrarse ¿Lo sabéis?"`,
      `Os dais la vuelta para ver una Quatryl femenina saliendo del callejón justo al lado de la casa de
      Jekserah. Va vestida con una armadura de cuero oscuro y tiene un artilugio llamativo lleno de engranajes y cubierto con una pieza de metal cónico conectado a un tubo, emite unos zumbidos peculiares.`,
      `"Argeise, guardia de la ciudad", dice presentándose. "Lo sé, no parezco una guardia, pero si alguien no es lo que parece ser, es esa Valrath con quien habeis estado tratando. Por supuesto, ella es una comerciante, pero está tramando algo mucho más siniestro.`,
      `"Ha estado tratando de derrocar a altos cargos militares en Gloomhaven durante todo el
      tiempo en el que ha estado aquí y estamos alerta hasta que sepamos sus verdaderas
      intenciones.”`,
      `"Mirad, podéis ir a hacer su encargo como buenos perritos falderos si lo deseáis, pero si loque queréis en realidad es ayudar a mantener la paz en la ciudad y que no se convierta en una tiranía, tengo una idea diferente; Llegaremos al fondo del asunto, descubriremos sus planes y expondremos quien realmente es Jekserah.” <strong>(8-Gloomhaven Warehouse)</strong>`
    ]
  },
  {
    name: '#4 Crypt of the Damned',
    introduction: [
      `Las proclamaciones del comandante bandido de
      un "Gloom" no te sientan bien en el estómago
      mientras buscas en la curva del Río Tranquilo -
      hay algo aquí que interesa a estos maníacos.`,
      `Te sorprende un poco encontrar las ruinas de
      una antigua cripta medio cubierta de musgo
      y hiedra. La historia de este lugar es vieja y
      oscura. Sin más información que seguir, te
      diriges hacia las profundidades. Lo que sea
      que traten estos supuestos bandidos, estás
      decidido a descubrirlo, incluso después de
      tropezarte con un gran grupo de ellos y más
      muertos vivientes al pie de las escaleras.`,
      `"Has cometido un error al venir aquí", sisea
      uno de los bandidos. No estás de acuerdo.
      Estás justo donde quieres estar."`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Golpeas la puerta, pensando que estás
          preparado para cualquier cosa. Ante ti, sin
          embargo, se encuentra una criatura de energía
          elemental pura, enfurecida y demoníaca. Te
          lleva un segundo recuperarte. Como si animar a
          los muertos no fuera suficiente para estos
          lunáticos.`,
        ]
      }
    ],
    conclusion: [
      `Está claro que has interrumpido algún tipo de
      ritual aquí. Estos demonios elementales
      pertenecen a un plano de existencia
      completamente diferente, pero los sectarios de
      alguna manera lograron llevarlos a éste.`,
      `En el altar en la habitación de atrás, hay una
      gran cantidad de garabatos en estos rituales. No
      toda la escritura es inteligible, pero se tiene la
      sensación de que esta cripta es un lugar de
      poder utilizado una vez por una civilización
      antigua. Los antiguos aprovecharon el poder de
      los elementos para mejorar sus propias vidas, y
      aunque su destino exacto está más allá de tu
      conocimiento, claramente no terminó bien.`,
      `Entre las escrituras también encontrará notas
      sobre otros lugares de poder en la zona. Uno
      parece ser algo muy utilizado por el culto y el
      otro está marcado como invadido por perversos
      muertos vivientes. Parece como si tuvieras la
      oportunidad de estropear algo más de su
      trabajo <strong>(5-Ruinous Crypt)</strong> o de obtener su beneplácito
      ayudando a eliminar una amenaza. <strong>(5-Decaying Crypt)</strong>`
    ]
  },
    { name: '#5 Ruinous Crypt'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#6 Decaying Crypt'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#7 Vibrant Grotto'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#8 Gloomhaven Warehouse'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#9 Diamond Mine'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#10 Plane of Elemental Power'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#11 Gloomhaven Square A',
    introduction: [
      `"El plan de Jekserah os perturba, pero
      indudablemente encontráis una cierta lógica.
      Una lógica terrible y retorcida, pero una lógica
      a fin de cuentas. Habéis visto a los guardias en
      el muro. Apenas son capaces de luchar contra
      los Vermlings, y sus impuestos están ahogando
      la ciudad y vuestro propio bolsillo.`,
      `Acompañados de un ejército de muertos
      vivientes, los comerciantes podrían llevar a la
      ciudad a una nueva era de prosperidad y
      mantenerla a salvo de amenazas externas.`,
      `"Entonces estáis listos para coger el destino de
      esta ciudad, mercenarios?"`,
      `Asentís con la cabeza. "Mi ejercito esta listo.
      ¡Marchemos hacia la Fortaleza Fantasma (Ghost
      Fortress)!" Un estruendo se escucha en el
      vestíbulo.`,
      `Al investigarlo, os encontráis cara a cara con
      una tropa de soldados de pie sobre los
      cadáveres de los Guardias Inox de Jekserah.`,
      `"¡Esto termina ahora!" Argeise os apunta
      con su ballesta." "Intenté advertiros.
      ¿Teneis idea de lo que estáis desatando en
      la ciudad?"`,
      `"Es demasiado tarde," escupe Jekserah
      detrás de ti. "¡No podéis detenernos! Mi
      ejercito está disperso por la ciudad.
      Además crece con cada guardia que cae".`,
      `Jekserah se gira hacia vosotros. "Dirigios a
      la Fortaleza Fantasma (Ghost Fortress). Si
      el Capitán de la Guardia cae, cualquier
      resistencia a nuestro nuevo orden caerá
      pronto después."`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Con los cuerpos de los guardias caídos
          agitándose y levantándose como muertos
          vivientes; golpeáis la puerta de la fortaleza.
          "¡Hoy nos enfrentamos a la oscuridad!"
          Grita el capitán rodeado de soldados.`,
          `"¡A mí! ¡No permitiré que la ciudad caiga en
          manos de esta escoria!"`
        ]
      }
    ],
    conclusion: [
      `El último de los guardias cae, y una vez
      más veis la transformación a un cadáver
      sin alma. Jekserah entra por la puerta
      detrás de vosotros. "Lo habéis hecho bien,
      mercenarios; habéis conseguido derrotar a estos
      cerdos implacables. Con mis guardaespaldas
      muertos, vosotros seréis mi nueva mano
      derecha, y gobernaremos sobre esta ciudad
      como debería ser. Los últimos restos del
      antiguo imperio finalmente han caído, y
      deberíais estar orgullosos.`,
      `Pero todavía hay
      mucho trabajo por hacer. El Gremio de
      Comerciantes está preocupado por la
      disminución de la calidad de nuestros
      suministros de agua.
      Creemos que puede haber alguna fuerza oscura
      trabajando en lo más profundo de las
      alcantarillas, envenenando la ciudad. <strong>(18-Abandoned Sewers)</strong>`,
      `También he escuchado algunas conversaciones
      a puerta cerrada sobre un Dragón que se posa
      en las Montañas Cuellocobre (Copperneck
      Mountains).`,
      `Algunos comerciantes son como niños,
      pero aún así vale la pena investigar los
      informes. Sea lo que sea, podría ser una
      amenaza para la ciudad". <strong>(16-Mountain Pass)</strong>`
    ]
  },
    { name: '#12 Gloomhaven Square B'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#13 Temple of the Seer'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#14 Frozen Hollow'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#15 Shrine of Strength',
    introduction: [],
    milestones: [],
    conclusion: []
  },
  {
    name: '#16 Mountain Pass',
    introduction: [
      `La gente suele menear la cabeza cuando habláis
      de dragones, como si vuestro interlocutor no
      pudiera ni siquiera creer lo que está hablando.
      Los dragones no existen, dicen, pero hay una
      bestia gigante alada que se ha visto al norte,
      por lo que partís para ver qué hay de cierto.`,
      `Vuestro objetivo es Icecrag (Riscohelado), la
      montaña más alta de las Coppernecks
      (Cuellocobre). Para llegar allí, no obstante,
      debéis atravesar el paso del norte, un corredor
      estrecho entre dos gigantescos acantilados de
      piedra de los que suelen desprenderse
      avalanchas frecuentes, así como otros peligros.`,
      `Avanzáis con cautela, vigilando cualquier signo
      de emboscada desde las alturas. Esta precaución
      es la que os salva de ser aplastados por una
      lluvia de piedras que caen por el lateral de uno
      de los acantilados. Buscáis cobertura conforme
      las piedras golpean el suelo, justo a tiempo para
      mirar hacia arriba y ver un grupo de Inox salir
      de una cueva en uno de los laterales del paso.`,
      `Os han intentado matar con las piedras. No
      obstante, vuestra supervivencia los ha motivado
      para buscar una forma de eliminaros más
      convencional.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Con el paso bloqueado por la avalancha, entráis
          en la cueva para enfrentaros a vuestros
          agresores. Dentro, vislumbráis una red de
          pasadizos que se adentran en la montaña.
          Quizás merezca la pena explorarlos una vez
          acabéis con vuestros enemigos.`
        ]
      }
    ],
    conclusion: [
      `¿Qué estaban haciendo juntos esos Inox y
      Demonios? ¿Y además tan al norte? Examináis
      sus pertenencias, buscando algún indicio de sus
      motivos. Todo lo que encontráis es algunos
      garabatos que referencian a la "voz".`,
      `Observáis la cueva. Debe haber más pistas en
      los túneles profundos. Hacia el norte, el Pico
      Riscohelado (Icecrag Peak) se yergue
      majestuoso en la distancia <strong>(25-Icecrag Ascent)</strong> . Aun así, sentís
      que algo os llama a explorar la cueva <strong>(24-Echo Chamber)</strong>
      No es audible, pero os reclama con una sutil
      aunque poderosa urgencia.`,
      `Miráis los garabatos de los Inox. Una "voz".
      Sí, algo que os suena familiar. Casi podéis oirla.`
    ]
  },
    { name: '#17 Lost Island'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#18 Abandoned Sewers',
    introduction: [
      `Desde el centro del Puente Silencioso, un
      guarda de la ciudad os señala una rejilla que se
      abre en la orilla oeste. "Es la mejor forma de
      entrar en ese agujero inmundo. Buena suerte".`,
      `Descendéis por entre los barrotes, que han sido
      doblados y corroídos por el tiempo, alcanzando
      el fondo. Encendéis una antorcha y entráis al
      interior, caminando por un pasillo estrecho
      ligeramente inclinado, evitando el flujo de
      líquido marrón que baja en la dirección
      opuesta. Tras unos pocos minutos, el camino se
      abre en una serie de pasillos ramificados.`,
      `Miráis alrededor, decidiendo qué camino coger,
      cuando un sonido sutil resuena en la piedra
      que os rodea. Rápidamente, cogéis vuestras
      armas, justo a tiempo para ver unas figuras
      reptantes que se aproximan.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Navegando por los pasillos, alcanzáis una
          enorme sala abierta con un depósito de agua en
          el centro. Alrededor de la cisterna hay un grupo
          de Vermlings, que detienen su canto con
          vuestra interrupción y gruñen en vuestra
          dirección. Deben ser la causa del agua
          envenenada.`
        ]
      }
    ],
    conclusion: [
      `Los Vermlings yacen muertos, con su sangre
      negra mezclándose con el agua del suelo. Tras
      una profunda investigación, encontráis que no
      hay ningún veneno en sus cuerpos. ¿Es posible
      que estos Vermlings no fueran la causa, sino
      que simplemente estuvieran viviendo ahí, a
      salvo de las miradas de los guardias? Al fondo
      de la habitación, la grandes grietas en el muro,
      mostrando un pasaje que se abre hacia lo
      desconocido. <strong>(23-Deep Ruins)</strong>`,
      `Y si tenéis alguna forma de respirar bajo el agua
      <strong>(14-Frozen Hollow)</strong>, <strong>(43-Drake Nest)</strong>,
      incluso podríais entrar a la cisterna y
      encontrar la fuente del veneno directamente
      <strong>(26-Ancient Cistern)</strong> .`
    ]
  },
    { name: '#19 Forgotten Crypt'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#20 Necromancer\'s Sanctum'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#21 Infernal Throne'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#22 Temple of the Elements'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#23 Deep Ruins'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#24 Echo Chamber'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#25 Icecrag Ascent'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#26 Ancient Cistern'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#27 Ruinous Rift'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#28 Outer Ritual Chamber'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#29 Sanctuary of Gloom'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#30 Shrine of the Depths'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#31 Plane of the Night'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#32 Decrepit Wood'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#33 Savvas Armory'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#34 Scorched Summit'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#35 Gloomhaven Battlements A'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#36 Gloomhaven Battlements B'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#37 Doom Trench'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#38 Slave Pens'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#39 Treacherous Divide'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#40 Ancient Defense Network'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#41 Timeworn Tomb'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#42 Realm of the Voice'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#43 - Drake Nest'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#44 Tribal Assault'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#45 Rebel Swamp'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#46 Nightmare Peak'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#47 Lair of the Unseeing Eye'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#48 - Shadow Weald'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#49 Rebel\'s Stand'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#50 Ghost Fortress'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#51 The Void'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#52 Noxious Cellar'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#53 Crypt Basement'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#54 Palace of Ice'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    // TODO Show message that this is random, use deck tab instead
    { name: '#55 Foggy Thicket'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#56 Bandit\'s Wood'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#57 Investigation'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#58 Bloody Shack'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#59 Forgotten Grove'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#60 Alchemy Lab'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#61 Fading Lighthouse'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#62 Pit of Souls'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#63 Magma Pit'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#64 Underwater Lagoon'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#65 Sulfur Mine'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#66 Clockwork Cove'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#67 Arcane Library'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#68 Toxic Moor'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#69 Well of the Unfortunate'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#70 Chained Isle'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#71 Windswept Highlands'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#72 Oozing Grove'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#73 Rockslide Ridge'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#74 Merchant Ship'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#75 Overgrown Graveyard'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#76 Harrower Hive'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#77 Vault of Secrets'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#78 Sacrifice Pit'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#79 Lost Temple'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#80 Vigil Keep'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#81 Temple of the Eclipse',
    introduction: [
      `En vuestro camino a la ubicación indicada por
      el Aesther, nubes oscuras se ciernen sobre
      vosotros. Una ligera llovizna comienza a caer
      cuando os acercáis a un pequeño templo
      escondido en el Bosque de las Dagas.`,
      `El edificio parece abandonado, pero una vez
      estáis dentro, quedáis estupefactos por un
      espectáculo fascinante: un cielo crepuscular
      eterno se extiende sobre vosotros. Atrapada
      entre el día y la noche, la habitación está
      iluminada por un extraño resplandor. Sin
      embargo, una rápida inspección por sus
      alrededores indica que no sois bienvenidos.
      Demonios de la luz y las sombras se aproximan.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Finalmente llegando a la entrada del santuario,
          os preparáis para el último desafío. Abrís la
          puerta que da a un lugar atrapado entre la
          oscuridad eterna y la luz cegadora. Dos
          enormes demonios flanquean un Savvas cuyo
          pecho late con luces negras y doradas. Savvas
          normalmente no puede dominar esos
          elementos, pero por la mirada en su cara,
          intuyes que al hacerlo se volvió loco.`
        ]
      }
    ],
    conclusion: [
      `Con todas tus fuerzas, metes tu arma en el
      pecho del Savvas, destrozando sus entrañas. De
      repente, la luz y la oscuridad antinaturales son
      arrastradas hacia la herida, acumulándose
      dentro de ella antes de estallar en una enorme
      explosión. El cuerpo vacío del Savvas
      cae muerto al suelo.`,
      `El crepúsculo a vuestro alrededor vuelve a la
      normalidad cuando recogéis vuestro botín y
      salís del templo. Por última vez, os quedáis
      mirando al techo y os maravilláis ante la
      imposibilidad de este lugar.`
    ]
  },
    { name: '#82 Burning Mountain'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#83 Shadows Within'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#84 Crystalline Cave'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#85 Sun Temple'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#86 Harried Village'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#87 Corrupted Cove'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#88 Plane of Water'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#89 Syndicate Hideout'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#90 Demonic Rift'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#91 Wild Melee'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#92 Back Alley Brawl'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#93 Sunken Vessel'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#94 Vermling Nest'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#95 Payment Due'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    // Kickstarter scenarios
    { name: '#K1 Just Another Night'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K2 A Quatryl Scorned'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K3 Unreliable Medicine'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K4 Unlikely Allies'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K5 The Sun Spire'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K6 A Ship in a Storm'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K7 Arrival in Chains'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K8 The Doctor\'s Lab'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K9 Skewed Perspective'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#K10 Panic Room'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    // solo scenarios
    { name: '#S1 - Brute - Return to the Black Barrow'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S2 - Tinkerer - An Unfortunate Intrusion'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S3 - Spellweaver - Corrupted Library'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S4 - Scoundrel - Armory Heist'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S5 - Cragheart - Stone Defense'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S6 - Mindthief - Rodent Liberation'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S7 - Sunkeeper - Caravan Escort'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S8 - Berserker - Unnatural Insults'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S9 - Quartermaster - Storage Fees'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S10 - Summoner - Plane of the Wild Beasts'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S11 - Nightshroud - Harvesting the Night'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S12 - Plagueherald - Plagued Crypt'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S13 - Soothsinger - Battle of the Bards'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S14 - Doomstalker - Corrupted Hunt'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S15 - Sawbones - Aftermath'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S16 - Elementalist - Elemental Secrets'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    { name: '#S17 - Beast Tyrant - The Caged Bear'
    , introduction: [],
    milestones: [],
    conclusion: []
    },

];
