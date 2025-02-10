export type ScenarioText = {
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
      'Así que cuando Jekserah, una mujer Valrath con un manto rojo y joyas de oro suficientes para mantenerte alimentado durante una década, se te acerca en el León Durmiente (Sleeping Lion) y ofrece pagarte diez monedas de oro para localizar a un ladrón y recuperar algunos bienes robados ... Bueno, parece una excusa tan buena como cualquiera para ponerse sobrio y comenzar a pagar tu cuenta.',
      '"Este ladrón ha robado algunos documentos importantes", dice la comerciante de piel roja, agitando la cola con agitación. "No me importa lo que le hagas a él. Solo trae lo que es mío ".',
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
      ayudando a eliminar una amenaza. <strong>(6-Decaying Crypt)</strong>`
    ]
  },
  {
    name: '#5 Ruinous Crypt',
    introduction: [
      `Tu misión es clara. Estos cultistas elementales
      están distorsionando el tejido del mundo y
      deben ser detenidos. Con ese objetivo en
      mente, te diriges a la zona más antigua de la
      cripta. Crees que es la base de operaciones del
      culto. Tomas coraje para el combate, derribas la
      desvencijada puerta y entras a la cámara de la
      cripta.`,
      `Lo que tienes ante ti es maravilloso y
      horripilante. Un grupo de cultistas está
      realizando encantamientos rituales delante de
      un oscuro y profundo agujero en la realidad. Se
      vuelven hacia ti mientras gruñen y desenvainan
      sus dagas de sacrificio.`,
      `Detrás de ellos algo semejante a una tinta
      profundamente negra se derrama del agujero y
      luego se incorpora en una forma llena de
      dientes y garras como salida de una pesadilla.
      Sabes que debes enviar estos terrores del plano
      elemental de vuelta al vacío, pero estás
      paralizado por el miedo.`
    ],
    milestones: [],
    conclusion: [
      `Con los cultistas y sus secuaces muertos, parece
      que la oscura grieta está inactiva. Sin embargo,
      esto no la hace menos desconcertante. Tiras
      una roca y desaparece en la nada. Debes
      admitir que te preguntas si podrías atravesar la
      grieta en la realidad y si sobrevivirías al viaje
      para llegar al lugar donde haya terminado esa
      roca <strong>(10-Plane of Elemental Power)</strong>`,
      `Por otra parte, encontrar alguna manera de
      cerrar la grieta probablemente sea la decisión
      más prudente. Hay una encantadora Aesther en
      Gloomhaven que puede saber más que vosotros sobre
      este material interplanar. Antes de ayudar a
      alguien, es conocida por pedir favores
      imposibles <strong>(14-Frozen Hollow)</strong> <strong>(19-Forgotten Crypt)</strong>`
    ]
  },
  {
    name: '#6 Decaying Crypt',
    introduction: [
      `¿Qué es la vida sin un poco de intriga? Los
      cultistas han marcado claramente esta cripta
      como un lugar problemático para ellos. Tal vez
      una limpieza aquí supondrá su agradecimiento o
      tal vez puedas encontrar un tesoro fuera del
      alcance de los saqueadores.`,
      `Tan pronto llegas, es el olor el que te hace
      arrepentirte de tu decisión más que cualquier
      otra cosa. No es el hecho de que te hayas
      enterado de este lugar explorando antiguas
      ruinas decrépitas. No es el horror de las
      trémulas sombras y los gemidos de los muertos
      vivientes. Es el olor, el olor de la muerte. De la
      carne podrida sin alma.`
    ],
    milestones: [],
    conclusion: [
      `Cuando se apagan los terribles gritos y
      gemidos de los retornados, escuchas con
      extrañeza y alarma que alguien aplaude. Al
      voltearte, observas una figura encapuchada
      cerca de tu antorcha y levantas tu arma. La
      silueta de sonrisa en su cara supone una
      amenaza, pero no como para enfrentarla
      armado. Es un tipo de amenaza que nunca has
      experimentado.`,
      `“Muy bien, señores” -dice la figura-. "Notable.
      Ciertamente ustedes saben desenvolverse, ¿no
      creen?" “Han echado de esta cripta a sus
      incómodos moradores. Ahora tienen nuestra
      atención”. Nosotros preferimos la variedad de
      no-muertos que podemos controlar,
      lógicamente.`,
      `La figura encapuchada hace una larga pausa
      mientras os mira fijamente, sin dejar de sonreír.`,
      `"Bueno, ¿serían tan amables de hacernos otro
      favor? Después del cual habremos resuelto en
      gran medida la cuestión del asesinato de
      algunos de mis hermanos”. Ya no sonríe.`,
      `“Hay una nigromante en Gloomhaven. Nos ha
      estado dando problemas, enviando mercenarios
      para hacer su trabajo sucio. Tal vez la hayan
      conocido.”`,
      `“Maten a Jekserah. Tráigannos su cabeza y
      veremos si los dejamos Vivir" <strong>(8-Gloomhaven Warehouse)</strong>`
    ]
  },
  {
    name: '#7 Vibrant Grotto',
    introduction: [],
    milestones: [],
    conclusion: []
  },
  {
    name: '#8 Gloomhaven Warehouse',
    introduction: [
      `A instancias de vuestro misterioso contacto, os
      dirigís a escondidas hacia el almacén de
      Jekserah, cubierto por la noche. Con un poco de
      suerte, seréis capaces de descubrir sus planes y
      ponerles fin.`,
      `Guardas esperanzas de que el depósito esté
      abandonado. En lugar de eso descubres que
      está repleto de muertos vivientes. Al menos
      tienes una mejor idea de sus planes. Claramente
      ha estado usando el pergamino necromántico
      que le entregaste para retornar a los muertos
      dentro de las murallas de la ciudad. Ahora es el
      momento de devolverlos al descanso.`,
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Atravesáis el depósito arrasando estantes,
          trampas y muertos vivientes. Cuando
          finalmente llegáis a la parte trasera del almacén,
          os enfrentáis cara a cara con Jekserah y sus dos
          guardaespaldas Inox.`,
          `"¿Así que, habéis decidido interrumpir mis planes
          en lugar de ayudarme? ¡Os arrepentiréis de vuestra
          decisión cuando regreséis a Gloomhaven con una
          legión de muertos vivientes tras de mi! "`,
          `Moviéndose con gran velocidad, Jekserah gira,
          corre y escapa por una ventana. Intentas
          perseguirla, pero los dos gigantescos Inox
          bloquean tu avance.`
        ]
      }
    ],
    conclusion: [
      `Con la batalla detrás de ti, buscas algún rastro
      de la Valrath fuera de la ventana pero no ha
      dejado ningún indicio de su huida. Has
      detenido sus planes por ahora, pero después de
      su breve conversación, está claro que tienes que
      cazarla antes de que pueda concretar sus
      amenazas <strong>(13-Temple of the Seer)</strong>`,
      `"Ella está fuera de mi alcance", dice la guardia
      de la ciudad Argeise encogiéndose de hombros
      cuando le preguntas. "Nos gustaría asegurarnos
      de que no causará más problemas, pero huyó
      de la ciudad y yo no estoy como para ir de
      paseo a la espesura”.`,
      `"Podrías tener más suerte con la encantadora
      Aesther de la ciudad.`,
      `Probablemente pueda ubicar a esta cobarde
      para ti, si logras conseguir que la encantadora
      coopere" <strong>(14-Frozen Hollow)</strong> <strong>(17-Vibrant Grotto)</strong>`
    ]
  },
  {
    name: '#9 Diamond Mine',
    introduction: [
      `Ignorando las advertencias de Argeise, llegas a
      la mina de diamante. "Maquinaciones siniestras"
      es una frase para meditar, sin duda, pero la
      frase "recompensa considerable" la supera sin
      duda.`,
      `Rumbo a la húmeda caverna subterránea
      suponías que unos cuantos Vermlings eran un
      desafío sencillo de superar. Ciertamente, no
      esperabas una jauría de perros rabiosos
      vigilando la entrada. Encontrar ese diamante
      puede resultar más difícil de lo que pensabas.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Te mueves a través de un estrecho pasaje
          claramente más apropiado para criaturas como
          los Vermlings, hasta que llegas a una gran
          cámara llena de escombros y Vermling mineros
          en estado de alerta. En la parte posterior de la
          Cámara, un hombre con una túnica oscura
          azota con el látigo y escupe órdenes a los
          mineros, que alejan sus picos de la piedra y los
          dirigen hacia ti.`,
        ]
      }
    ],
    conclusion: [
      `Con el capataz muerto y el diamante en mano,
      regresas a ver a Jekserah para reclamar tu
      recompensa. Sus guardaespaldas te escoltan
      dentro la mansión. La encuentras diferente, más
      irascible y sombría.`,
      `"Maravilloso." Intercambia contigo el diamante
      por buen saco de monedas. “Esto servirá
      magníficamente como foco para los conjuros.
      Me pregunto si los cultistas sabían lo que se
      puede lograr con algo como esto. Puedo
      convocar a un ejército de muertos vivientes!"`,
      `Ella se vuelve hacia ti con un extraño brillo en
      los ojos. "¡Entonces! ¿Estás listo para derrocar a
      los milicia de Gloomhaven y poner la ciudad
      bajo el control del gremio de comerciantes? <strong>(11-Gloomhaven Square A)</strong>
      ¿O no tienes estómago para hacer un verdadero
      cambio?" <strong>(12-Gloomhaven Square B)</strong>`
    ]
  },
  {
    name: '#10 Plane of Elemental Power',
    introduction: [
      `La visión cambia y se desenfoca a vuestro
      alrededor. Lamentos de pesadilla perforan
      vuestros oídos. Sentís las extremidades que
      se extienden, como si el universo estuviera
      tratando de desgarraros.`,
      `Y de repente se detiene. Abrís los ojos y
      veis que vuestros pies están en tierra
      firme, pero alrededor giran
      extrañas energías elementales:
      fuego mezclado con hielo
      en forma de energía torrencial.
      Recobráis el aliento y echáis
      un vistazo atrás, aliviados
      al ver un vacío de oscuridad
      similar al que os trajo a este lugar.`,
      `El alivio es momentáneo, ya que una
      retumbante voz llena el aire de
      chisporroteo: ¿"Quienes sois para matar a
      mis siervos e invadir mi reino? Esta afrenta
      no quedará sin castigo."`,
      `Delante devosotros la energía en el aire
      comienza a producir formas demoníacas. Para
      seguir en este lugar sobrenatural, debéis luchar.`
    ],
    milestones: [],
    conclusion: [
      `Viendo al último demonio gritar y disiparse
      en el viento, caéis de rodillas, agradecidos
      de que la batalla haya cesado.`,
      `"Muy interesante". La voz aparece dentro de
      vuestras cabezas, estremeciendo vuestros
      cerebros con sus palabras. "Intrusos, sois
      inesperadamente capaces.`,
      `Podría ciertamente utilizar vuestras habilidades
      para encontrar algo en vuestro propio
      plano."`,
      `La roca roja retumba y se
      resquebraja, abriendo una grieta ardiente a
      vuestros pies. "Os abro mi reino. Venid,
      quiero hablar con vosotros cara a cara".`,
      `Ya habiendo realizado un acto de fe hoy,
      decidís que no hay nada de malo en
      realizar otro. El calor aumenta, más y más
      intenso conforme descendéis. Oleadas de
      aire hirviendo suben y retardan vuestra
      caída. Aterrizáis con seguridad en lo que
      parece ser un templo subterráneo. Ante
      vosotros se encuentra una criatura
      monstruosa, con terroríficos cuernos,
      sosteniendo un tridente y plantado sobre
      cuatro curvadas patas.
      Su voz todavía resuena en el interior de vuestra
      cabeza.`,
      `"Valientes y tontos. Debéis servirme bien.
      Hay un artefacto de gran poder situado en
      un templo olvidado a lo largo del rio del
      beso de la serpiente. Podéis ir a traérmelo,
      <strong>(22-Temple of the Elements)</strong> o podéis morir aquí y ahora. <strong>(21-Infernal Throne)</strong>`
    ]
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
    , introduction: [
      `Mientras Jekserah esboza su plan, lentamente
      salís de la habitación. Proteger esta ciudad
      contra un ejército de nomuertos es una locura,
      Pero no puedes entregar todo al poder a una
      nigromante sin escrúpulos.`,
      `En medio de la frase, Jekserah te mira y se
      detiene. "¿Cuál es el problema?" frunce el
      ceño. "¿Estáis perdiendo los nervios finalmente?
      Habéis matado ya a tantos a mi servicio. Qué os
      supondrían unos pocos más?"`,
      `Rápidamente, os giráis y corréis hacia la puerta.
      Su ejército es demasiado grande para
      combatirlo sin ayuda."Estúpidos mercenarios",
      se ríe detrás de tí. "Pensé que querríais uniros a
      mí en este nuevo proyecto, pero si preferís
      morir como el resto de la escoria militar, ¡eso
      se puede arreglar!" Corréis a través de la plaza
      de Gloomhaven hasta la Fortaleza Fantasma.
      Los guardias te paran en la puerta y te
      apresuras a explicar la amenaza que se avecina
      detrás de ti.`,
      `Frenéticamente los empujas a un lado,
      buscando al Capitán de la Guardia.`,
      `"Es realmente preocupante", dice el capitán,
      después de que rápidamente expliques el plan
      de Jekserah. "Debemos enfrentarnos a esa
      nigromante inmediatamente!" El sonido de
      acero sobre acero reverbera a través de la
      habitación, seguido de los gritos del guardia en
      el exterior.`,
      `"¡Están sobre nosotros!" Las puertas se abren de
      golpe y las figuras en descomposición de los
      muertos vivientes fluyen al interior de la
      habitación. "¡A las armas! ¡Debemos combatirlos
      de nuevo!"`,
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Las olas de no-muertos que chocan contra
          vuestras armas finalmente han amainado
          cuando llegáis a la mansión de Jekserah y
          pateáis la puerta y la veis en el vestíbulo, temblando de rabia.`,
          `"¡No me derrotaréis! Mi ejército ha sido
          reducido, pero los muertos son el combustible
          de mi fuego. ¡Mi ejército es infinito y eterno!"`
        ]
      }
    ],
    conclusion: [
      `Jekserah se derrumba, con la vida huyendo
      de sus ojos. "Yo..." te susurra. "No tenéis ni
      idea de lo que viene..." <strong>28 (Cámara Ritual
      del exterior)</strong>. "Furioso." El Capitán de la
      Guardia se acerca detrás de ti, limpiándose
      la espada con su túnica.`,
      `"Tanta muerte innecesaria, acabando con
      nosotros mismos desde dentro. Al menos
      ya se acabó". Mira desde el cadáver sin vida
      de Jekserah a vosotros. "Escuchad, habéis
      demostrado vuestra valía en este día. Sin
      vuestra advertencia y sin vuestra fuerza,
      habríamos sido superados por los nomuertos.
      Si estáis interesados, puede que tenga algo más
      de trabajo.`,
      `"En primer lugar, hemos recibido informes del
      norte sobre grandes criaturas voladoras.`,
      `La gente le teme a los dragones". Sacude la
      cabeza, molesto. "Me gustaría que os
      dirigiéseis al paso del norte para investigar.
      <strong>16 (Paso de las Montañas)</strong> "Por aquí cerca,
      sin embargo, hay algunos problemas que se
      están gestando en las cloacas bajo el
      Mercado Hundido. Las cisternas allí parecen
      estar envenenadas, y las alcantarillas están
      infestadas de serpientes y Oozes, lo cual
      dificulta la investigación.`,
      `Necesito que descubráis la fuente del veneno."
      <strong>18 (Alcantarillas abandonadas)</strong>`
    ]
    },
    { name: '#13 Temple of the Seer'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#14 Frozen Hollow',
    introduction: [
      `Así que toca buscar a un encantador, allá
      vamos.`,
      `Nos informan de una Aesther en el
      Distrito Caldera, con lo que nos dirigimos
      hacia una taberna abandonada y decrépita
      en la zona, el Hueso Torcido. Al acceder nos
      encontramos el interior que esperábamos a
      expensas del exterior: telarañas, taburetes
      astillados y cristal roto y polvoriento.`,
      `Tras pasar el umbral, una mujer traslúcida
      aparece repentinamente ante nosotros. - ¿Por
      qué habéis venido, mercenarios? Vuestra
      presencia no es deseada e interrumpís mis
      estudios.`,
      `Rápidamente le explicamos nuestros motivos y
      la mujer frunce el ceño aún más. - "Oh, buscad
      a la mujer Aesther. Ella puede cumplir vuestros
      deseos. Le basta con mover las manos y
      vuestros sueños más salvajes se harán realidad."
      - Suspira frustrada y, de hecho, mueve las
      manos. - Dejadme en paz.`,
      `No nos movemos. Nos clava su mirada.`,
      `- Bueno, en lugar de interrumpir, tal vez seáis
      útiles. Hoy por ti, mañana por mí. Así
      funcionan las cosas, ¿no? - La mujer se gira y se
      dirige hacia unas escaleras destrozadas, pero
      tras unos pasos, se desvanece por completo.`,
      `- Necesito un orbe de Hueco Congelado, se
      encuentra en las Montañas de Cuello de Cobre.
      - La voz de la mujer viene desde nuestro
      interior, como si no se hubiera movido. -
      Traédmelo y puede que os ayude.`,
      `Un mapa cae a nuestros pies. - Por cierto, mi
      nombre es Hail. No volváis sin el orbe.`,
      `El mapa es fácil de seguir. En lo profundo de las
      Montañas de Cuello de Cobre, oculto por
      ventiscas de nieve, encontramos la entrada a
      una cueva oscura y estrecha. Las pisadas de
      lobo en la entrada son un signo de problemas,
      pero con resolución firme, entramos.`
    ],
    milestones: [],
    conclusion: [
      `Tras acabar con el último de los enemigos nos
      acercamos al fondo de la sala, donde una esfera
      azul flota a centímetros del suelo. Lentamente
      acercamos la mano y agarramos el frío orbe,
      tan frío que resulta apenas soportable.
      Rápidamente lo metemos en la mochila y nos
      dirigimos de vuelta al Hueso Torcido.`,
      `Entramos en la taberna abandonada y llamamos
      a Hail. No hay respuesta, investigamos,
      revisamos el caótico desastre que nos rodea.
      Cómo será posible que trabaje cómoda en un
      sitio así. Al acercarnos a la barra, Hail aparece
      ante nosotros, con el orbe en la mano.`,
      `- Muy interesante. - No parece darse cuenta de
      que estamos ahí. - Una grieta en nuestro plano
      de alguna forma contenida dentro de esta
      barrera esférica. Menos mal que no la
      rompisteis en el viaje. Habríais sido
      transportados a un mundo de puro frío y
      congelados antes de llegar siquiera a respirar.
      O algo peor podría haber sucedido.`,
      `- Es tan confuso. ¿Quién tendría el poder para
      hacer esto? - Hail se mueve lateralmente y
      desaparece.`,
      `Esperamos por lo que parecen ser horas,
      pasando de sentarnos en los pocos taburetes
      aún enteros. De vez en cuando decimos su
      nombre sin éxito.`,
      `- Oh, seguís aquí. - Nos giramos para ver a Hail
      en el centro de la habitación. - Bien, me
      gustaría experimentar con vosotros si os parece
      bien. - Se acerca a nosotros y tropezamos al
      recular, cayendo sobre una vieja mesa que se
      astilla en cientos de trozos.-`,
      `Oh, no temáis. Estoy bastante segura de que
      acabará bien.`,
      `Hail nos explica que quiere acumular poder
      puro de otro plano y guardarlo en un pequeño
      orbe que daría grandes poderes a quien lo
      tuviera. El proceso de almacenamiento, sin
      embargo, requiere mucho oro.`,
      `- Ya que me habéis ayudado en mis estudios,
      supongo que os devolveré el favor, - suspira
      Hail. - Así que, ¿qué es lo que queréis?`
    ]
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
  { name: '#19 Forgotten Crypt',
    introduction: [
      `¿Que deseáis hacer?" Hail nos mira fijamente
      sin comprender. "Habéis encontrado una grieta
      en el plano de la energía Elemental y deseáis
      cerrarla?" Ella suspira.`,
      `"Bien, acepto ayudaros". Hail comienza a lanzar
      el orbe que recuperamos hacia arriba y hacia
      abajo mientras piensa. "Está bien, basándome
      en vuestra descripción, nos va a tomar un poco
      de trabajo cerrar una brecha de esa magnitud.
      Podría hacerlo yo mismo sin ayuda extra, pero
      llevaría un tiempo, y podría resultar molesto ser
      atacados en medio del conjuro. Sería mucho
      más fácil de hacer si tuviera un incensario
      elemental, que, realmente, es muy conveniente,
      porque he querido poseerlo para mis estudios
      de todos modos.`,
      `"Sabía de un chamán poderoso que tenía uno
      hace muchos años. Él está muerto ahora, pero
      os llevaré a su cripta personalmente. No os
      aconsejaría manejar el incensario vosotros
      solos."`,
      `Después de viaje de unos días, encontráis un
      mausoleo antiguo, cubierto de maleza a lo largo
      del Río del beso de la serpiente.`,
      `"Stonebreaker realmente era un buen
      muchacho, aunque ser aplastado por enormes
      rocas es uno de los peligros de ser un chamán".
      Después de apartar la maleza , bajáis a la cripta.`,
      `"¡Oh genial! "dice Hail.`,
      `"Estos hechiceros devastadores están por todas
      partes hoy en día. Probablemente buscando el
      incensario. O simplemente no desean que yo lo
      tenga."`,
      `Mira Hail con confusión, y apunta a las
      sombras, donde surgen figuras oscuras con
      túnicas negras.`,
      `"No deberías haber venido aquí" dice uno de
      ellos`,
      `"¡Ugh," Hail suspira. "Despachad rápidamente a
      estos incautos. Estoy ya aburrida de ellos."`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `No hay descanso posible entre estos malditos
          muertos vivientes. Tras derribar a patadas la
          puerta de la habitación de al lado, escuchamos
          más revuelo en la entrada. "Hay más de ellos
          detrás de nosotros!" Grita Hail.`
        ]
      }
    ],
    conclusion: [
      `Hail se mueve hacia adelante y agarra el
      incensario. Lo levanta en alto y pronuncia unas
      pocas palabras en un idioma desconocido. El
      fuego estalla e inmola a los restantes muertos
      vivientes, reduciéndolos a ceniza. Hail sonríe
      vagamente.`,
      `"Bueno, ahora que se ha resuelto esta molestia,
      vamos a seguir con la diversión real.
      Mostradme esa grieta." <strong>(14-Ruinous Rift)</strong>`
    ]
  },
  { name: '#20 Necromancer\'s Sanctum',
    introduction: [
      `Una cosa es segura: no habríais encontrado la
      guarida de Jekserah sin ayuda. En lo más
      profundo del Bosque de las Dagas, os habríais
      perdidos durante horas si las direcciones
      detalladas que lleváis con vosotros.`,
      `Tras varios giros y recovecos, os encontráis
      frente a un antiguo mausoleo, escondido en la
      espesura del bosque. El tronco de un árbol
      enorme bloquea casi toda la entrada. Este
      edificio debe haber sido construido hace
      milenios, tras lo que fue olvidado por el tiempo.`,
      `Os escurrís para pasar junto al tronco, hacia las
      oscuras estancias de la tumba. Encendéis una
      antorcha y os sentáis en silencio, escuchando
      los sonidos que os rodean. Es muy débil, pero
      hacia vuestra izquierda se oye algo que se
      arrastra. Os acercáis y abrís unos portones de
      piedra. Delante de vosotros, la luz de la
      antorcha proyecta las sombras de muertos
      vivientes. Parace que Jekserah ha estado
      trabajando en su nuevo ejército.`,

    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Jekserah ha tenido, por desgracia, mucho
          tiempo para renimar los cuerpos de la cripta,
          pero no suponen un gran desafío frente a
          vuestras habilidades. Tiráis abajo la última
          puerta para encontraros cara a cara con la
          nigromante.`,
          `"No sé cómo me habéis encontrado, ni me
          importa. Os habéis equivocado pensando que
          huí porque tenía miedo de luchar contra
          vosotros. Simplemente tenía la esperanza de
          que entrarías en razón con el tiempo. Es una
          pena que vuestras mentes no pueden pensar
          más allá de dar unos espadazos. Los cadáveres
          que habéis destruido serán reemplaazdos por
          vuestros propios cuerpos.`
        ]
      }
    ],
    conclusion: [
      `Jekserah se desploma, con la vida escapando de
      su mirada. "Yo ..." susurra. "No tenéis ni idea de
      lo que viene ..." <strong>(28-Outer Ritual Chamber)</strong>`,
      `Con el último mandoble de vuestra espada,
      separáis su cabeza muerta de su cuerpo y dejáis
      aquel terrible lugar lleno de cuerpos mutilados.
      Devolvéis la cabeza al Capitán de la Guarda y
      os pagan con generosidad la recompensa
      acordada.`,
      `"Si estáis interesados, tengo más trabajo para
      vosotros", dice con una voz sombría.`,
      `"En primer lugar, tenemos informes de nuestros
      exploradores al norte sobre una criatura
      gigantesca voladora. Tienen miedo de los
      dragones." Mueve su cabeza con incredulidad.
      "Me gustaría que os acercáseis al paso del norte
      para investigar." <strong>(16-Mountain Pass)</strong>`,
      `"Sin embargo, más cerca de casa, hay ciertos
      disturbios en las cloacas bajo el Mercado
      Hundido (Sinking Market). Los pozos en la
      zona parece que han sido envenenados, y las
      cloacas han aparecido infestadas con serpientes
      y peligrosos lodos, haciendo más difícil la
      investigación. Necesito que descubráis el origen
      del envenenamiento." <strong>(18-Abandoned Sewers)</strong>`
    ]
  },
  { name: '#21 Infernal Throne',
    introduction: [
      `Antes de que podáis alcanzar vuestras armas, el
      demonio conoce vuestra intención.`,
      `“¡Tontos! “Su voz resuena en tu cráneo como
      un tambor: “Os atrevéis a ir en mi contra en mi
      poderosa casa” habéis cometido un grave error.`,
      `Con un estallido de fuego su enorme forma
      desaparece en la oscuridad. “ Venid a mí, mis
      siervos! Lapidad a estos mortales, decorar
      mi palacio con sus entrañas!`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `El velo oscuro se levanta poco a poco
          revelando la sala principal del Palacio. En el
          centro ves un enorme demonio riendo.
          “Teníais que haber dejado mi reino mientras
          tuvisteis oportunidad, ¡gusanos!. En este lugar
          no es posible hacerme daño”. Coloca una
          mano gigante con garras sobre un altar de
          vidrio negro delante de él; de pronto emerge
          un remolino de energía cromática, bañando al
          demonio en un aura de protección.`
        ]
      }
    ],
    conclusion: [
      `Con un golpe final, la fisura crece sin control y
      gira salvajemente, escupiendo rayos de energía
      en ángulos extraños. Un agudo gemido emerge
      de él y aumenta en intensidad hasta que el
      sonido retumba por todo el palacio. Con un
      brillante destello de luz, la voz se colapsa en sí
      misma y luego explota fuera, enviando una
      onda expansiva que destruye todos los
      demonios en su camino.`,
      `Mientras la ola golpea al demonio principal, su
      aura se disipa y un grito perfora vuestras
      mentes. Sus piernas se entrelazan debajo de él
      y se derrumba, explotando en innumerables
      fragmentos de roca.`,
      `Cuando esto pasa, los gritos se detienen y el
      Palacio queda extrañamente tranquilo. Con la
      amenaza destruida, lo único que queda por
      hacer es saquear el lugar y regresar a tu propia
      dimensión.`
    ]
  },
  { name: '#22 Temple of the Elements',
    introduction: [
      `Vuestro camino os lleva hasta el Templo de los
      Elementos en busca de un artefacto antiguo.
      Aparentemente tiene un gran poder, pero hay
      algo más que eso. Entráis en la estructura de la
      maltrecha piedra y veis de qué se trata ese
      alboroto.`,
      `Al entrar, captas signos de visitantes recientes,
      una rama rota, huellas de pisadas en el polvo.
      Os acercáis a la cámara principal y preparáis
      vuestras armas, las figuras de un grupo de
      encapuchados emergen de las sombras.`,
      `“Es demasiado tarde, ¡tontos!. Controlamos este
      templo ahora y todo su poder nos sirve a
      nosotros”`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Pasáis la cámara de la entrada, encontráis una
          gran sala central con muchas salidas. En el
          centro un grupo de cultitas preparando
          encantamientos alrededor de un bloque de
          arcilla rojiza, más o menos del tamaño de un
          cráneo.`,
          `“El artefacto es nuestro” y ha hecho a
          nuestra gente más poderosa que nunca. No
          puedes parar lo que avecina; si nos golpeas
          la penumbra caerá y será el fin. Los
          cultistas levantan las manos y una barrera
          rodea el artefacto.`
        ]
      }
    ],
    conclusion: [
      `Con los altares destruidos, los demonios se
      desvanecen, la barrera protectora alrededor del
      artefacto se disipa, os acercáis al centro del
      templo y extendéis la mano hacia la vasija, pero
      os detenéis. Sentís como que una poderosa
      oscuridad emana del recipiente y tras ello una
      profunda tristeza.`,
      `La vasija ha sido corrompida y casi parece ser
      consciente de este hecho. Los sentimientos
      encontrados aparecen como un flash en
      vuestras mentes, como si fueran de advertencia;
      podrían ser usados para hacer el mal pero,
      ¿lucharéis por ese mal? <strong>(35-Gloomhaven Battlements A)</strong> ¿O contra él? <strong>(36-Gloomhaven Battlements B)</strong>`,
      `Después de un poco de esfuerzo utilizáis un
      paño grueso para meter la vasija en vuestras
      mochilas. Tal vez sería mejor llevarlo a un
      hechicero en lugar de tener problemas con él. <strong>(14-Frozen Hollow)</strong> <strong>(31-Plane of Night)</strong>`
    ]
  },
  {
    name: '#23 Deep Ruins',
    introduction: [
      `Desafiando los oscuros pasadizos debajo de las
      alcantarillas de Gloomhaven, encendéis una antorcha
      en el lugar más profundo, el ladrillo descascarillado da
      paso a piedra intrincada en un estado de extremo
      desgaste.`,
      `Veis un idioma rúnico irreconocible grabado en las
      paredes. Las grietas y trozos de roca impiden leerlo
      incluso para gente que conoce el idioma.`,
      `Después del pasadizo, el camino da a una habitación
      más grande llena de extrañas maquinas en ruinas que
      no puedes entender. Una puerta se ve en la pared
      opuesta, a continuación, un sonido metálico atraviesa la
      habitación, como si alertara de algo. Entonces la
      maquina empieza a moverse y cobra vida; es
      claramente palpable la intención de atacar a los
      intrusos, empezando por ti.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Lucháis para haceros paso a través de la
          habitación de la máquina; encontráis pasillos a
          izquierda y derecha. Oís la alarma sonando en
          ambas direcciones. Para apagarla, puede que
          tengáis que dividiros.`
        ]
      }
    ],
    conclusion: [
      `Con la última placa pulsada, la alarma
      finalmente se silencia. Las luces de los cañones
      se apagan y sus armas miran hacia abajo,
      inactivos.`,
      `La máquina se tambalea y cae; los engranajes se
      detienen y paran de rotar. En cuestión de
      segundos, la cámara parece tan vacía como
      antes, dejándoos explorar en paz.`,
      `Ponéis rumbo a un estrecho pasillo; en la parte
      trasera de la habitación izquierda se encuentra
      un pasillo que desciende a una piscina de
      líquido salobre; podéis ver una luz que vaga a
      cierta distancia bajo el agua.`,
      `Un chapuzón rápido os llevara más lejos en este
      mundo subterráneo.<strong>(26-Ancient Cistern)</strong>`
    ]
  },
  {
    name: '#24 Echo Chamber',
    introduction: [
      `Entráis en la cueva haciendo caso omiso de la
      voz en vuestras cabezas. Os atrae el peligro,
      podríais caer en una trampa, como un corderito
      desvalido en un juego macabro; con estos
      miedos la Voz os intenta convencer.
      “Todo estará bien, solo continúa descendiendo a
      la oscuridad ”`,
      `Contra toda razón continuáis vuestro camino.`,
      `Imágenes y pensamientos intermitentes llegan a
      vosotros y la voz intenta explicarse. Ha sido
      atrapada por una poderosa fuerza en las
      profundidades de la tierra. Necesita tu ayuda
      para salir; os preguntáis quien la encarceló y
      por qué pero la voz desaparece en vuestros
      pensamientos.`,
      `Y el silencio se hace preocupante; en las
      profundidades de la oscuridad, estás
      irremediablemente perdido, hasta que la voz
      regresa y continúa dirigiéndose a vosotros sin
      respuestas para vuestras preguntas.`,
      `La voz muestra imágenes de lugares donde se
      esconden monstruos. Y te da un plan: Si podéis
      conectar todas las habitaciones de su cámara, la
      voz resonará y tomará forma una vez más,
      dándoos la capacidad de ahuyentar a los
      secuestradores.`,
      `La voz os dice que estáis cerca. Os dice que os
      preparéis...`
    ],
    milestones: [],
    conclusion: [
      `La última niebla se disipa e inmediatamente un
      viento te encoge, circulando a lo largo de las
      cámaras de la prisión. Su velocidad crece
      rápidamente, comenzando como una brisa que
      crece a ciclón en cuestión de segundos.`,
      `Y entonces oís la voz: un sonido llevado por el
      viento, un sonido enorme y terrible. Un grito
      poderoso y el resto de monstruos son
      destruidos, desintegrados y dispersos entre la
      tormenta.`,
      `“Gracias amigos míos, es bueno deshacerse de
      estas cosas” La voz suena como si unos huesos
      estuvieran hablando “y ahora que está hecho te
      pido que me ayudes de nuevo; sigo siendo un
      prisionero atrapado por el viento, con el fin de
      tener una forma más corpórea y dejar esta
      tierra exijo que sean devueltas mis vasijas de
      poder.”`,
      `Caéis de rodillas mientras el sonido se apaga,
      vuestras cabezas retumban de la vibración. La
      voz acaba de destruir a sus adversarios como si
      no fueran nada. No os podéis imaginar lo que
      sería capaz si le dáis más poder.`,
      `“No te preocupes no tengo ningún deseo de
      traer el mal a esta tierra. Solo deseo seguir mi
      camino para ser libre y no estar atrapado por
      este mal. Os proporcionaré una visión para
      saber dónde encontrar la primera vasija.
      Pensaron en esconderla de mí, pero puedo verla
      como si estuviera en esta misma cámara”.`,
      `"Por favor traédmela”`,
      `De vuelta a la entrada de la cueva. Muy lejos de
      su influencia, podéis tomar la decisión de hacer
      lo que propone <strong>(32-Decrepit Wood)</strong> o podéis intentar llegar al
      fondo del asunto de qué es exactamente lo que
      quiere hacer la Voz con sus poderes y que no
      alcanzas a entender. <strong>(30-Shrine of the Depths)</strong>`
    ]
  },
  {
    name: '#25 Icecrag Ascent',
    introduction: [
      `Las montañas Copperneck no son acogedoras.
      Más allá del paso, el clima empeora
      progresivamente cuanto más al norte se viaja.
      Vuestras pertenencias se vuelven insoportablemente
      pesadas. El frío cala en vuestros huesos. Y luego
      comenzáis a escalar el Icecrag.`,
      `Sin haber visto aún signos de una bestia
      gigante alada, empiezáis a preguntaros si todos
      estos problemas merecen la pena. Varias veces
      contempláis dar marcha atrás, soñando con el
      cálido resplandor del hogar del León
      Durmiente.`,
      `Pero comenzáis a escuchar algo extraño. Vuestros
      oídos retienen un sonido chirriante en el viento.
      No es grande, posiblemente sea solo el viento
      que fluye a través de un espacio pequeño. Pero
      aún así, es algo. Avanzáis, y luego véis los lobos.
      Están sobre vosotros, pelaje blanco entre los cúmulos
      de nieve.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Superáis los lobos, agradecidos de que la nieve
          no os haya demorado demasiado. Asumís que la
          pelea ha terminado, pero el chirrido comienza
          de nuevo, esta vez mucho más cerca. Miráis a
          través de la tormenta blanca y véis formas rojas
          corriendo hacia vosotros.`
        ]
      },
    ],
    conclusion: [
      `Todo tu ser quiere detenerse, caer y descansar
      en la nieve. Pero sabes que no te levantarás.
      Sabes que serías despedazado por enormes
      garras rojas. Entonces sigues adelante, más allá
      de toda razón. Hasta que, finalmente, los
      dragones dejan de perseguirte y la cima de la
      montaña está a la vista.`,
      `El viento calma a medida que te acercas al pico.
      Es un cambio agradable tras torrente de dolor
      penetrante que vino antes. El aire es poco
      denso, pero ahora estás sobre las nubes y el
      clima es relativamente pacífico. Hace que sea
      muy fácil ver al lagarto gigante alado posado
      sobre una roca dentada.`,
      `"Bienvenidos a mi montaña, intrépidos
      aventureros." Una voz grave sale de la criatura,
      sorprendiéndote con su elocuencia.
      "Odio arrinconaros, pero ahora que habéis
      acudido a mí, cara a cara, vuestras opciones son
      lamentablemente limitadas.`,
      `No estoy particularmente hambriento en este
      momento, así que podría considerar el dejarte
      vivir, si aceptas ayudarme en un pequeño
      asunto.`,
      `"Un grupo de Savvas me sometió mientras
      dormía y sacó una de mis glándulas de fuego,
      supuestamente para estudiarla. No puedo dejar
      que este insulto quede impune y agradecería
      mucho que me la trajeras de vuelta de su
      ciudad, matando a tantos de ellos como puedas
      en el proceso." El draco golpea con furia sus
      garras contra su poste de piedra. <strong>(33-Savvas Armory)</strong>`,
      `"O, si quieres ser un cliché", dice la criatura con
      un suspiro, "simplemente podrías atacarme".
      Mata al dragón, salva a la princesa y todo eso.`,
      `"Excepto que no tengo princesa, y no soy un
      dragón; solo un Draco que ha vivido mucho
      tiempo y no desea terminar con su vida hoy.`,
      `Entonces si me atacas, lucharé y seguramente
      morirás ". <strong>(34-Scorched Summit)</strong>`
    ]
    },
  {
    name: '#26 Ancient Cistern',
    introduction: [
      `El agua se vuelve oscura, negra como un cielo
      nocturno nublado. No puedes ver tus manos
      remar frente a tu cara, pero continúas. En poco
      tiempo, se ve una luz en la distancia. Necesitas
      todas las fuerzas que te quedan, pero
      finalmente la luz se hace más grande y emerges
      de un charco de agua fétida, agradecido de que
      puedas respirar libremente una vez más.`,
      `El alivio, sin embargo, es efímero. La habitación
      está plagada de amenazantes masas verdes de
      cieno y no muertos. Te desplomas en tierra
      firme y tratas de recuperar el aliento,
      preparando tus armas para otra batalla.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Siguiendo las señales de corrupción, te diriges a
          la sala final de la cámara, con la esperanza de
          acabar con el resto de tus adversarios
          rápidamente. En cambio, el horror invade tu
          mente al ver la escena que tienes delante.`,
          `Cuatro tuberías verticales se encuentran en la
          parte posterior de la sala; conductos
          transparentes para el bombeo del agua de la
          ciudad. Sin embargo, pegadas a las tuberías hay
          masas negras retorcidas que envenenan el agua
          que corre. Cuando entras, parte de la masa
          negra gotea desde las tuberías y se fusiona en
          forma de pequeñas protuberancias bulbosas con
          bocas llenas de dientes.`,
          `La horda de demonios y muertos vivientes
          tampoco es un espectáculo agradable.`
        ]
      }
    ],
    conclusion: [
      `Para cuando la pelea termina, las paredes y el
      piso son un desastre de cieno negro. Sin
      embargo, nada de ese cieno tiene vida, lo que
      es un paso en la dirección correcta. Una simple
      fregona puede limpiar los restos, ahora que se
      ha eliminado la presencia oscura.`,
      `Te acercas a la pared de atrás y con un gesto
      de la mano limpias con perplejidad un poco de
      la mugre. La mayor parte se desprende
      fácilmente, pero sigue habiendo una mancha
      negra calcárea. Curioso, tomas tu manga y
      comienzas a limpiar la pared más
      vigorosamente, revelando rápidamente algún
      tipo de lenguaje rúnico. Limpiando lo suficiente,
      encontrará letras que cubren toda la pared
      posterior.`,
      `Las letras son irreconocibles, pero las anotas y
      regresas a la ciudad, llevando las escrituras a un
      experto en idiomas de la Universidad.`,
      `"Es parte de un ritual", dice un Quatryl con
      gafas, mirando con detalle tus notas. "No estoy
      completamente familiarizado con los detalles,
      pero parece ser un ritual para 'Welspar' ... err,
      corrupto.`,
      `"Creo que tal corrupción requeriría el uso de
      un conductor." El Quatryl parece mirar aún
      más atentamente las escrituras. "Ah, aquí! Algo
      conocido como 'The Artifact', ubicado en el
      Templo de los Elementos. '`,
      `El Quatryl se precipita sobre una biblioteca
      repleta de textos, "¡Ah, interesante! He oído
      hablar de eso antes." Desaparece detrás de una
      gran pila de tomos.`,
      `"¡Sí! El Templo de los Elementos." Su cabeza
      aparece por encima de los libros. "El Templo de
      los Elementos, que se dice que alberga la Vasija
      de los Elementos, un poderoso artefacto
      antiguo capaz de dar forma y poder a los
      residuos elementales que nos rodean.`,
      `"El libro dice que el templo no está muy lejos
      de aquí, en algún lugar alrededor de la
      bifurcación en el Río Beso de Serpiente
      (Serpent's Kiss River). Si quieres encontrar el
      fondo de esta corrupción, comienza allí". <strong>(22-Temple of the Elements)</strong>`
    ]
  },
  { name: '#27 Ruinous Rift',
    introduction: [
      `En el camino de regreso a las ruinas de la
      Cripta, Hail parece casi feliz mientras camina a
      través del barro contigo, ansiosa por luchar de
      nuevo contra demonios y no-muertos.`,
      `"Ha pasado tanto tiempo desde la última vez
      que salí de Gloomhaven," dice, balanceando el
      incensario elemental de un lado a otro mientras
      camina. "La ciudad es necesaria para mis
      estudios. Aunque sienta bien tomar un
      pequeño descanso y viajar en este plano otra
      vez. Y con menos peligro esta vez."`,
      `Miráis a la Aesther interrogativamente. "Claro,
      los hechiceros y los demonios no son
      exactamente amistosos encuentros, pero la
      última vez que viajé por estas tierras... bueno,
      es algo que juré nunca volver a mencionar."`,
      `Hail calla hasta que llegamos a la cripta. Al
      abrir las antiguas puertas, casi esperamos que
      el lugar esté repleto de hechiceros y demonios
      una vez más, pero las salas de piedra se
      encuentran tan silenciosas y estériles como la
      muerte. Nos desplazamos hacia la cámara
      principal donde se encuentra la grieta gigante,
      flotando sobre un altar demoníaco.`,
      `"Bueno, ciertamente no estabas bromeando".
      dice. "¡Esta cosa es una belleza! La
      circunferencia y estabilidad... ¡muy
      impresionante!" Hail pasea alrededor del
      perímetro del altar, lanzando arena al aire y
      viéndola caer.`,
      `"Estoy bastante segura de que puedo cerrarla,
      gracias al viejo incensario de Stonebreak.
      Aunque puedo imaginarme que las fuerzas al
      otro lado de esta grieta no van a estar muy
      contentas por ello".`,
      `Hail levanta el incensario por encima de su
      cabeza con un brazo y hunde el otro hasta el
      codo en la grieta. "Acérquense, damas y
      caballeros. Esto va a ser una gran fiesta."`
    ],
    milestones: [],
    conclusion: [
      `Hail grita con una intensidad espeluznante. La
      miráis, con miedo de que más demonios os
      pasen y la ataquen. En vez de eso, la ves
      sacando su mano de la grieta. Su antebrazo está
      marchito y humeando.`,
      `A medida que sus nudosos dedos despejan las
      caóticas energías de la grieta, se tambalea y
      comienza a encogerse. Un gran viento se
      levanta en la cámara y los demonios que luchan
      contigo muestran miedo por primera vez. En
      lugar de clavarte las garras, se agarran al suelo
      de piedra, desesperados por detener el tirón de
      la grieta.`,
      `Sin embargo, sus esfuerzos son inútiles. Hasta
      el último de ellos es succionado de vuelta a su
      propio plano. La rasgadura se encoge hasta un
      punto brillante y desaparece.`,
      `Hail se derrumba, y vosotros corréis a su lado.
      "Oh, no os preocupéis por mí", tose. "Estaré
      bien. Este viejo cuerpo ha visto cosas mucho
      peores."`,
      `Estalla en un ataque de tos, que pronto se
      convierte en risa. "Eso estuvo muy bien, ¿no?
      Si hay algo en lo que puedo confiar, es en un
      desafío."`,
      `"Venid, ayudadme a levantarme. Necesito volver
      a Gloomhaven inmediatamente. Tengo muchas
      ideas nuevas para mi investigación. No dudéis
      en venir cuando queráis y encontraré la forma
      de agradecéroslo"`
    ]
  },
  { name: '#28 Outer Ritual Chamber',
    introduction: [],
    milestones: [],
    conclusion: []
  },
  { name: '#29 Sanctuary of Gloom',
    introduction: [],
    milestones: [],
    conclusion: []
  },
  {
    name: '#30 Shrine of the Depths',
    introduction: [
      `"Así que, ¿hay una voz sin cuerpo en alguna
      parte en lo profundo de las Montañas de Cuello
      de Cobre (Copperneck Mountains), y quiere
      que acumuléis vasijas que le ayuden a escapar
      de su confinamiento?" Un bibliotecario Quatryl
      de la Universidad se ajusta las gafas para
      miraros. "¿Y queréis saber exactamente qué es
      esta voz?"`,
      `Se ríe nerviosamente. "Heh, vale, bueno, haré lo
      que pueda. Empezaré con rituales que podrían
      separar una voz de su anfitrión..." El Quatryl se
      desvía en medio de su frase y deambula por
      unos estantes de libros, donde hojea varios
      textos.`,
      `Decidís ir al mercado por unas horas. Cuando
      regresáis, el Quatryl se apresura con emoción.`,
      `"¡Lo he encontrado!" Os pone un libro en la
      cara. "Encontré varios callejones sin salida hasta
      que me di cuenta de que la voz no estaba
      separada, si no que era la única cosa que
      puede atravesar la barrera creada para
      encarcelarlo, lo que implica que la barrera en sí
      era extra-planar, probablemente creada por los
      Aesthers hace siglos.`,
      `"Así que examiné todos los textos que tenemos
      sobre los rituales de los Aesthers -que no es
      mucho, son muy reticentes con esos asuntos pero
      por suerte encontré este libro. Es un
      relato concreto de la atadura de un demonio en
      la región de Cuello de Cobre (Copperneck) a la
      que os referisteis. Aparentemente la criatura
      era tan fuerte, que los Aesthers solicitaron la
      ayuda de los Savvas y también la de los
      Harrowers. Dicen que fue lo suficientemente
      poderoso como para arrasar con todo el
      continente.`,
      `"Si os está pidiendo que le ayudéis a liberarse,
      recomendaría encarecidamente que no lo
      hicierais. La fiabilidad del texto es un poco
      cuestionable la verdad, pero sea lo que sea esta
      voz, estaba sellada por alguna razón."`,
      `El Quatryl, por fin, deja de agitar el libro y
      empieza a hojear las páginas. "De hecho, si
      podéis escuchar la voz desde el exterior de la
      cueva, y tiene una influencia tan fuerte sobre
      vosotros, parece como si la barrera estuviera
      debilitándose, tal y como advierte el autor.`,
      `"Por lo que parece, hay un cetro que podría ser
      utilizado para fortalecer el ritual de unión, pero
      el autor dice que ha sido colocado en una isla a
      lo largo de la costa sur por seguridad. En el
      texto se encuentra detallado un sencillo
      encantamiento para abrir la puerta del
      santuario."`,
      `Dos días después, os encontráis ante la
      estructura en ruinas semisumergida en la tierra
      encharcada. Pronunciáis unas pocas palabras
      extrañas y la puerta se abre de golpe. Tenéis el
      fuerte presentimiento de que la puerta no es lo
      único que se interpone entre ese cetro y
      vosotros.`
    ],
    milestones: [],
    conclusion: [
      `Os hacéis con el cetro y toda la edificación
      tiembla violentamente. Una energía oscura
      irrumpe, perforando los cuerpos de los
      monstruos que aún os atacan.`,
      `Todos ellos caen muertos y el temblor se
      detiene.`,
      `Sin embargo, al poneros en pie, un punzante
      dolor os atraviesa el cráneo de repente.`,
      `"Habéis sido engañados", dice la Voz en
      vuestras mentes. "¡No traigáis ese cetro hasta
      mí! Si me liberáis, os garantizo que no os haré
      ningún daño. Pero no puedo decir lo mismo si
      venís con el cetro. Sea lo que sea que estáis
      haciendo, estáis equivocados."`,
      `Tan rápido como llegó, el dolor se detiene.
      Aseguráis el cetro y salís corriendo de la capilla,
      deseosos de llevarlo a la Cámara del Eco (Echo
      Chamber) y silenciar la Voz. <strong>(42-Realm of the Voice)</strong>`
    ]
  },
    { name: '#31 Plane of the Night'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
    {
      name: '#32 Decrepit Wood',
      introduction: [
        `La madera gruesa retrocede a medida que os
        acercáis a la localización de la primera vasija
        de la Voz. A través de los árboles, se ve una
        estructura de madera en descomposición con
        paredes derrumbadas y una podredumbre que
        parece que se está filtrando en la
        zona circundante. Los árboles y
        plantas alrededor del edificio están
        igualmente desolados y decaídos.`,
        `La Voz dice que el lugar es el
        hogar de una secta de
        Torturadores militarizados, muy
        agresivos y territoriales. Nadie se
        atrevería a acercarse a esta zona a
        menos que tengan un deseo
        extremo de morir.`,
        `Así que no hay nada más que
        hacer que derribar la puerta y
        encontrar la vasija en alguno de
        los cofres de los Torturadores.
        Alternativamente, habéis explorado
        una entrada lateral que podría
        permitiros evitar alguna
        confrontación, pero puede llevaros
        a otros peligros.`
      ],
      milestones: [],
      conclusion: [
        `Los Torturadores resultaron bastante
        difíciles de derrotar, pero al final
        cayeron como cualquier otro enemigo.
        Sintiendo la putrefacción del lugar
        filtrándose en tus huesos, rápidamente
        saqueas la morada y localizas la
        pequeña olla de barro que te muestra
        la Voz.`,
        `Cuando la levantas, la Voz llena tu
        cabeza. "¡Bien! Sí, ¡excelente! Los
        infestadores no eran más que un
        guardián empleado para bloquear mi
        paso. Os doy ahora la segunda
        ubicación. <strong>(33-Savvas Armory)</strong> Por favor, devuélveme
        las vasijas. Te recompensaré
        enormemente." <strong>(40-Ancient Defense Network)</strong>`
      ]
    },
    {
      name: '#33 Savvas Armory',
      introduction: [
        `Comandado por una poderosa criatura para
        recuperar un tesoro de valor incalculable,
        ahora conspiráis para infiltraros en una
        ciudad de Savvas y entrar en una armería en
        lo profundo de su montaña.`,
        `"Asaltar a los Savvas directamente es
        imposible", dijo la criatura. "Pero hay un
        pasaje en el lado norte de su ciudad que lleva
        directamente a su cámara."`,
        `Es un largo y tortuoso viaje, dirigiéndote por
        el lado más lejano de la montaña, pero
        finalmente encuentras la entrada oculta.`,
        `"Tendréis que actuar rápido," advirtió la
        criatura . "Tan pronto como entréis, los
        Savvas activarán la alarma. Necesitaréis coger
        lo que habéis venido a buscar y largaros antes
        de que estéis atrapados por los refuerzos."`,
        `Llegáis a una simple puerta de madera al final
        del túnel. Intentando con cuidado abrir la
        puerta, no se mueve. Es bastante endeble, así
        que deberíais ser capaz de derribarla
        fácilmente, pero tendrás que abandonar el
        enfoque sigiloso.`
      ],
      milestones: [
        {
          key: '1',
          texts: [
            `Escucháis una alarma sonando claramente en
            la distancia. Habéis golpeado un avispero y es
            sólo cuestión de tiempo antes de que os
            ataquen. Entráis en la cámara interior y
            examináis la habitación. Hay un montón de
            tesoros aquí. Es mejor agarrarlo todo.`
          ]
        }
      ],
      conclusion: [
        `Dobláis la esquina justo cuando una bola de
        fuego vuela hacia vosotros. Explota en un
        muro lejano y derrumba el túnel detrás de
        vosotros. Echáis a correr a toda velocidad y,
        en cuestión de minutos, emergéis de la
        montaña y seguís corriendo hacia las
        estribaciones circundantes. Con una distancia
        segura entre vosotros y vuestros
        perseguidores, finalmente os desplomáis en el
        suelo y descansáis. Después de un momento,
        tenéis claro que ningún Savvas os persigue,
        así que os levantáis y continuáis vuestra
        búsqueda con el tesoro en la mano. <strong>(40-Ancient Defense Network)</strong>`
      ]
    },
    {
      name: '#34 Scorched Summit',
      introduction: [
        `De pie ante el gran y orgulloso Drake, no véis
        nada que discutir con el monstruo. Si quiere
        vuestra ayuda, es ciertamente para un
        propósito nefasto. Los dragones que has
        conocido anteriormente no han sido muy
        amables. Preparáis vuestras armas con
        determinación.`,
        `"Así que, va a ser de esa manera, ¿no?" El
        dragón suspira. "Bueno, supongo que podría
        comer, si insistís." Respira hondo.`
      ],
      milestones: [],
      conclusion: [
        `Con un último chillido sangriento, el dragón
        gigante se cae de su pedestal y cae al suelo
        nevado. Parece que todavía está vivo, pero su
        respiración es débil y poco profunda.`,
        `"Hambriento y lento. No sé por qué debería
        haber esperado más", susurra el dragón.
        "Felicidades por tu impresionante éxito. Estoy
        seguro de que seréis aclamados como héroes a
        vuestro regreso triunfal. Adornado con coronas
        de oro y capas de seda. Las riquezas serán
        cargadas sobre ti y cinco mil..."`,
        `Los susurros del dragón se desvanecen y se
        detiene su respiración. No hace falta decir que
        las predicciones sarcásticas del dragón no se
        cumplen. Informáis de lo sucedido en
        Gloomhaven y recibís una modesta recompensa
        para añadir a la modesta cantidad de tesoros
        que encontráis en la Cumbre Quemada.`
      ]
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
    {
      name: '#40 Ancient Defense Network',
      introduction: [
        `"Solo queda una vasija", te dice la Voz.
        "Estamos muy cerca".`,
        `"El último grupo que trató de encarcelarme fue
        un gremio de humanos que hace mucho que
        dejaron esta tierra. Incluso se desconoce dónde
        están sus tumbas".`,
        `"Pero yo lo sé. Lo sé todo."`,
        `Las visiones de una tumba llenan tu cabeza.
        Está plagado de trampas y otros instrumentos
        mortales. De alguna manera, tienes
        conocimiento de cómo encontrarlo, en las
        profundidades de las Coppernecks orientales.`,
        `"La vasija fue enterrada con el líder del gremio,
        en una tumba diseñada para matar a todos
        aquellos lo suficientemente tonto como para entrar", dice
        la Voz. "Esta será tu tarea más difícil. Antes de
        que puedas entrar en la tumba, deberás
        desactivar la red de defensa construida a su
        alrededor."`,
        `"Puedo mostrarte el camino para entrar. Una
        vez allí, deberéis dividiros y activar
        simultáneamente una serie de interruptores en
        los lados opuestos de este pozo de sufrimiento.
        Pensaron que podían ocultarme sus secretos,
        pero estaban equivocados ".`,
        `Efectivamente, puedes encontrar la entrada a la
        tumba en una cueva debajo de las montañas. Te
        precipitas a las ruinas y una alarma estridente
        llena de inmediato la habitación. Toda la
        extensión frente a ti se ilumina en rojo y un
        grupo de cadáveres momificados comienzan a
        moverse y levantarse.`,
      ],
      milestones: [],
      conclusion: [
        `Desde los extremos opuestos de la red, activáis
        los interruptores en el orden que os indica la
        Voz. Tan pronto como llegó, la alarma se apaga
        y las paredes de las habitaciones se abren,
        llevándoos de vuelta a la entrada. Allí, el centro
        del suelo se desliza, revelando una estrecha
        escalera que desciende hacia la oscuridad.`,
        `"El camino a la tumba está despejado", dice la
        Voz. "Ve ahora, y recupera lo que es mío". <strong>(41-Timeworn Tomb)</strong>`
      ]
    },
    {
      name: '#41 Timeworn Tomb',
      introduction: [
        `Después de descender por la escalera, te
        arrastras a través de la tumba mohosa. Con la
        red de defensa desactivada, todo parece
        inactivo. Debería ser una simple cuestión de
        recuperar la vasija y salir de este lugar
        macabro.`,
        `Te acercas al sarcófago en la cámara central y
        te das cuenta de que la Voz no ha hablado
        desde que entraste en la tumba. No piensas
        mucho al respecto y agarras el recipiente al pie
        del ataúd de piedra.`,
        `El misterioso silencio vuelve a romperse por el
        sonido agudo de una sirena. Reverbera por toda
        la habitación pequeña y asalta tus oídos. Desde
        las esquinas de las sombras, se ve movimiento:
        armas automáticas diseñadas para matar a
        todos los intrusos.`,
        `Te enojas con la Voz por no advertirte sobre
        esta seguridad extra, y
        luego canalizas esa furia para hacer lo que sea
        necesario para salir de esta tumba con vida.`
      ],
      milestones: [
        {
          key: '1',
          texts: [
            `Salís de la habitación principal hacia una
            antecámara. Lo que una vez estuvo dormido
            ahora está repleto de cadáveres vivientes de los
            que hace mucho tiempo fueron sepultados aquí.
            Y más que eso, el camino de regreso a la
            superficie ahora está cerrado. Miráis a vuestro
            alrededor, desesperados por encontrar alguna
            forma de evitar que esta situación vaya de mal
            en peor.`
          ]
        },
        {
          key: '2',
          texts: [
            `Empujáis la puerta desbloqueada, llegáis a la
            entrada de la tumba, y vuestro corazón se encoje al
            ver la estrecha escalera que conduce a la
            libertad. Tendréis que escapar de esta trampa
            mortal de una vez.`
          ]
        }
      ],
      conclusion: [
        `Con el sonido rechinante de los golems que
        llega desde abajo, saltas rápidamente de la
        ruina. Solo entonces la Voz regresa a ti.`,
        `"Me temo que mis captores fueron más listos
        de lo que esperaba. Algo bloqueó mi influencia
        para llegar dentro de la tumba.
        Afortunadamente, fuiste capaz de sortear los
        peligros sin mi ayuda. Estoy feliz de que hayas
        encontrado mi prisión y de que decidieras ser
        el artífice de mi liberación. Después de todo
        este tiempo, finalmente seré libre ".`,
        `Con las tres vasijas en la mano, regresas a la
        cueva de la montaña en la Cámara del Eco.
        Colocas las pequeñas ollas de barro en el centro
        de la caverna y esperas.`,
        `Es difícil notarlo al principio, pero con el
        tiempo, un leve temblor en el piso y las paredes
        comienza a crecer hasta que es difícil mantener
        el equilibrio. Apenas te puedes apartar del
        camino cuando una gran roca cae del techo.`,
        `Luego hay un destello de luz, y frente a ti flota
        una neblina verde que gira en forma de muchos
        zarcillos largos entrelazados.`,
        `"Casi había olvidado lo que era no estar
        encarcelado". Por una vez, escuchas la voz no
        desde dentro de tu propia cabeza, sino que
        emana de la figura frente a ti. "Es bastante
        maravilloso. Estoy seguro de que antes de que
        pase mucho tiempo, olvidaré ese horrible
        sentimiento de impotencia."`,
        `"Es hora de dejar este reino", dice la Voz. "Hay
        mucho que arreglar desde mi prolongada
        ausencia. Pero primero, debo darte las gracias.
        Voy a mantener mi parte del trato y otorgaros
        gran poder y riqueza ".`,
        `La luz verde se extiende y se ilumina,
        proporcionándote la más maravillosa sensación
        de calidez. Y luego se va.`,
        `Todo lo que queda es una tabla de piedra en el
        centro de la habitación con marcas extrañas y
        crípticas.`
      ]
    },
    { name: '#42 Realm of the Voice'
    , introduction: [],
    milestones: [],
    conclusion: []
    },
  {
    name: '#43 - Drake Nest',
    introduction: [
      `"¿Así que pensáis que puedo ayudaros a
      respirar bajo el agua? Sois adorables." dice Hail
      con una mirada exhasperante. "¿Me refiero a
      que quién creéis que soy? ¿Por dónde podría
      empezar?".`,
      `Hail se da la vuelta y comienza a caminar.
      "Necesitaréis escamas de dragón, y algo para
      filtrar el aire del agua. Y si además consideráis
      las propiedades del agua por separado...".
      Se aleja y desaparece.`,
      `Estáis acostumbrados a este tipo de
      comportamientos por lo que esperáis
      pacientemente. Aparece una hora después.`,
      `"Ok, me habéis intrigado. Acepto vuestra
      propuesta. Traedme algunas esacamas de
      dragón, y veremos lo que puedo hacer. Conozco
      un nido de dragones en las montañas
      Cuellocobre (Coppernecks). Os dibujaré un
      mapa."`,
      `El mapa no es gran cosa, pero os lleva hasta la
      entrada de una caverna de la cual emana un
      silbido escalofriante. Hail quiere que consigáis
      todas las escamas que podáis, por lo que debéis
      empezar la carnicería.`
    ],
    milestones: [],
    conclusion: [
      `Las oleadas de lagartos rojizos parecen nunca
      acabar, así que consideráis que ya habéis
      recopilado un número significante de cadáveres
      como para empezar la retirada.
      En la entrada de la cueva empezáis a correr,
      huyendo de la horda de dragones que parecen
      poco interesados en seguiros. Allí empieza la
      dura vuelta cargando el botín hasta el Hueso
      Torcido (Crooked Bone).`,
      `En cuanto llegáis, Hail os quita en silencio la
      mole sangrienta de escamas. Desaparece durante
      dos horas. Cuando regresa, sostiene un puñado
      de pequeños orbes azules.`,
      `"Bien, todo lo que tenéis que hacer es meter esto
      en vuestras gargantas cuando estéis bajo el agua.
      Debería filtrar cuando inhaléis y exhaléis bajo el
      agua."`,
      `"Será increíblemente doloroso, y os costará
      sacároslo cuando volváis a tierra firme. No os
      envidio, pero alguien va a tener que hacer el
      trabajo sucio."`,
      `Hail sonrie de oreja a oreja. "Estoy muy contenta
      con el resultado. Gracias por proporcionarme
      este interesante desafío. Ahora salid de mi casa."`
    ]
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
  {
    name: '#55 Foggy Thicket',
    introduction: [
      `Fue en vuestra última incursión en el bosque de
      las dagas cuando lo visteis - ese inconfundible
      tono púrpura - un pequeño trozo de tela
      rasgado por la rama de un árbol. No es mucho,
      pero es suficiente para vosotros.`,
      `Encontrásteis un rastro y lo seguisteis hasta
      que os envolvió una espesa y persistente niebla.
      Perdisteis el rastro, pero decidisteis volver
      pronto, una vez que la niebla se hubiese
      disipado.`,
      `Así que aquí estáis, días después, y la espesa
      niebla continua bloqueando vuestro camino.
      Entre tanto, no habéis pensado en nada más,
      excepto en vengaros de los bandidos que
      destruyeron vuestra aldea. La niebla os detuvo
      una vez, pero ahora estáis decididos. No logrará
      deteneros de nuevo.`,
      `Os recomponéis y entráis en lo desconocido.`
    ],
    milestones: [],
    conclusion: [
      `La niebla parece estar agotando vuestras
      fuerzas a medida que la atravesáis; cada paso
      que dáis es doloroso. Sin embargo, justo
      cuando pensáis que no podéis llegar más lejos,
      encontráis una caja oculta de suministros
      marcada con el emblema púrpura de vuestra
      presa.`,
      `Rápidamente abrís la caja y encontráis un mapa
      detallado de la zona con instrucciones precisas
      para llegar hasta el campamento. Lo guardáis y
      huis hacia los árboles, lejos de la niebla.`,
      `Con este mapa, sentís que vuestra búsqueda
      finalmente está llegando a su fin. <strong>(56-Bandit's Wood)</strong>`
    ]
  },
  {
    name: '#56 Bandit\'s Wood',
    introduction: [
      `Conociendo el camino correcto al campamento
      de los bandidos, seguís los puntos de referencia y
      os abrís camino a través del bosque con
      facilidad. Entráis en un tosco sendero, donde os
      recibe un grupo de bandidos y sus perros.`,
      `"Bueno, ¿qué tipo de carne fresca es esta?",
      Pregunta uno de ellos, soltando las correas de
      los perros. "Acabáis de tomar vuestro último
      camino equivocado". Oís gritos en la distancia y
      os olvidáis de la amenaza del bandido, no
      queriendo perder más tiempo con esta chusma.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Llegáis al campamento bandido situado en un
          gran claro abierto. Al mirar más allá de la
          fuerza formidable de los enemigos que tenéis
          delante, veis a un grupo de Orquídeas
          harapientas a un lado: más víctimas de estos
          monstruos.`,
          `Los Orquídeas cautivos advierten vuestra
          llegada y aprovechan la oportunidad para
          escabullirse de sus ataduras y atacar a uno de
          sus captores distraídos. Sonríes, sabiendo que
          tu familia se vengará este día.`,
          `Los bandidos miran hacia uno y otro lado entre
          vosotros y los cautivos que escapan presa del
          pánico. Uno de los guardias empuña su espada
          y carga. "¡Matarlos a todos! ¡Nadie escapará!`
        ]
      }
    ],
    conclusion: [
      `Con el último de los bandidos muerto, uno de
      los cautivos supervivientes se acerca a tu grupo
      y cae de rodillas. "gracias por rescatarnos", dice
      en voz baja. "Saber que mi tribu siempre será
      tu aliada".`,
      `Mientras reúne a sus compañeros y se dirige al
      bosque de vuelta a su hogar, analizas la
      carnicería a vuestro alrededor. El grupo de
      bandidos ha sido erradicado y sientes alivio al
      saber que lse ha vengado a tu pueblo. Aquí
      también hay muchos botines para ayudarte a
      comenzar una nueva vida: un primer paso hacia
      un futuro más seguro.`
    ]
  },
  {
    name: '#57 Investigation',
    introduction: [
      `Reunir información sobre la muerte de vuestro
      amigo no fue una tarea fácil, pero vuestra
      implacable investigación finalmente os lleva a
      conocer a cierto teniente corrupto destinado en
      los cuarteles del oeste. Aparentemente es
      conocido por hacer la vista gorda ante ciertos crímenes en el Mercado del
      Hundimiento y estaba de guardia la noche en
      que vuestro amigo fue asesinado. Ahora es el
      momento de derribar algunas puertas, y
      obtener algunas respuestas a partir de
      cualquier medio que se considere necesario.`
    ],
    milestones: [
      {
        key: '1',
        texts: []
      },
      {
        key: '2',
        texts: [
          `Habéis encontrado el cuartel principal, y al
          abrirse la puerta, un presentimiento os invade.
          Reconoceis al teniente de la esquina gritando
          órdenes. "¡Alarma! ¡Intrusos! ¡No dejéis que se
          escapen! ¡Matadlos!" Estáis en el buen camino.
          Llevadlo ante la justicia y buscad pistas en sus
          restos.`
        ]
      },
      {
        key: '3',
        texts: [
          `"¡Alto! ¡Intrusos! ¿Qué estáis haciendo en el
          almacén de provisiones de la guardia de la
          ciudad?" Os dais la vuelta para ver a dos
          guardias salir de una puerta detrás de vosotros.
          Esto no era lo que estábais buscando, pero no
          tenéis tiempo para explicaciones. Ojalá podáis
          despachar a los guardias rápidamente.`
        ]
      },
      {
        key: '4',
        texts: [
          `Interrumpís un ejercicio de entrenamiento para
          varios reclutas nuevos. El maestro no está
          contento con la interrupción y hace un
          llamamiento a sus alumnos para que practiquen
          sus habilidades con sus invitados no
          bienvenidos.`
        ]
      }
    ],
    conclusion: [
      `Buscando entre los restos del Infiltrado,
      encontráis un horario para una reunión fuera
      de la ciudad en una choza remota. Hay notas
      sobre una cosecha de cadáveres. Estáis
      deseando colaros en esta reunión y exigir
      vuestra venganza. <strong>(58-Bloody Shack)</strong> Con el espía revelado, el
      resto de la guardia de la ciudad os da las
      gracias por desenmascararlo.`
    ]
  },
  {
    name: '#58 Bloody Shack',
    introduction: [
      `Rodeáis la pequeña choza en Hook Coast y
      preparáis vuestras armas. Sin embargo, el
      dueño de este lugar no está totalmente
      desprevenido. Grandes elementales de tierra y
      una patrulla de Harrowers acompañados por
      grotescos diablillos negros vigilan ambas
      entradas. Entráis en acción con la esperanza de
      deshaceros de todos ellos antes de que puedan
      dar la alarma.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Cuando entráis por la puerta principal, veis un
          pedestal de aspecto extraño cubierto de sangre.
          Tiene una daga curvada y dentada que se
          ilumina en rojo. Recordando las heridas de
          vuestro amigo muerto, tenéis una fuerte
          sospecha de que ésta fue el arma que lo
          asesinó. Es hora de devolver el favor a su
          dueño.`
        ]
      },
      {
        key: '2',
        texts: [
          `Montones de huesos podridos adornados con
          glifos ocultos os reciben cuando entráis en la
          habitación de atrás. En el centro, una figura
          humana maliciosa se sienta en un trono de
          calaveras. Está reuniendo energías
          nigrománticas de las pilas de huesos
          circundantes. "Siento que el deseo de venganza
          brilla intensamente dentro de tu corazón. ¡Me
          daré un banquete con eso!"`
        ]
      }
    ],
    conclusion: [
      `La sed de sangre es algo extraño. Una vez que
      está saciada, deja tras de sí una persona vacía
      como un caparazón hueco. La daga cae al suelo
      cuando una sensación fría y entumecida se
      extiende a través de ti. El trabajo está hecho, y
      es hora de seguir adelante, por duro que sea.`
    ]
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
  {
    name: '#65 Sulfur Mine',
    introduction: [
      `No es precisamente un secreto la ubicación de
      la mina de azufre; su hedor es fácilmente
      perceptible desde una milla de distancia. Sin
      embargo, el mapa que encontrásteis también hace
      mención particular de un poderoso artefacto de
      una civilización muerta, una especie de taladro a
      vapor que podría tener muchos usos si se
      coloca en las manos adecuadas.`,
      `A medida que os acercáis, el olor a podrido se
      hace más fuerte hasta que apenas podéis
      respirar.`,
      `Ya os estáis preguntando si este viaje vale la
      pena incluso antes de que notéis signos
      distintivos de un nido Vermling y escuchéis un
      aullido profundo que sale de la boca de la mina.`,
      `Con Vermlings corriendo por todos lados, dudáis
      de que algún tipo de artilugio intrincado haya
      quedado intacto, pero sin embargo mantienéis la
      respiración y os adentráis en el túnel. Tal vez se
      pueda salvar algo de información sobre el
      taladro de esta desafortunada situación.`
    ],
    milestones: [],
    conclusion: [
      `Ni siquiera os molestáis en leer todos los
      recortes de papel que habéis encontrado en la
      mina. Simplemente los metéis en vuestras
      mochilas mientras acabáis con todas las
      criaturas que se interponen en vuestro camino.`,
      `Una vez en el exterior, cuando volvéis a poder
      respirar libremente, intentáis juntar los distintos
      fragmentos de lo que parece algún tipo de
      esquema. Hay muchas y complejas fórmulas en
      los papeles, escritas en un arcaico lenguaje.`,
      `Con suerte, con suficiente estudio y las
      herramientas adecuadas, podréis reconstruir ese
      fabuloso taladro.`
    ]
  },
  { name: '#66 Clockwork Cove',
    introduction: [
      `Los escritos que descubristeis afirman que hay
      algún tipo de maquinaria antigua que se
      encuentra a lo largo de la costa norte de
      Gloomhaven. Las indicaciones muestran que el
      lugar solía fabricar algo en una época muy
      lejana.`,
      `Quién sabe qué valiosa tecnología que hay
      para encontrar enterrada en las ruinas?`,
      `Alquiláis una pequeña nave y os embarcáis.
      Navegando a lo largo de la costa, finalmente
      encontráis una pequeña entrada indicada en el
      mapa. Echáis el ancla, y os dirigís a la orilla
      rocosa donde veis una entrada en la cara del
      acantilado. Sin saber lo que os espera, entráis.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Después de atraversar la entrada, abrís una
          pesada puerta de metal, desatando una
          cacofonía de engranajes giratorios y maquinaria
          en movimiento. La totalidad de la antigua
          caverna es parte de algun enorme e intrincado
          sistema mecánico que esta todavía activo y
          opera en las profundidades de la tierra.`,
          `Desafortunadamente, sus guardianes están
          todavía vivos; será necesaría más que fuerza
          bruta para atravesar todo este caos.`
        ]
      },
    ],
    conclusion: [
      `Con la última placa activada, un enorme ruido
      resuena por toda la cámara y los engranajes se
      detienen lentamente.`,
      `Afortunadamente, esto también parece socavar
      el poder de los guardianes, y lo que una vez fue
      un estruendoso tumulto ahora está
      espeluznantemente en silencio. Los engranajes
      están inactivos y la maquinaria ya no zumba.`
    ]
  },
  {
    name: '#67 Arcane Library',
    introduction: [
      `Parece que los viejos escritos que encontrasteis
      sobre el místico loco Morsbane eran ciertos.
      Sus divagaciones hablaban de un gran tesoro
      que guardaba bajo llave, que aumentaría en
      poder y valor con el tiempo. El maligno
      bastardo ya hace tiempo que está muerto, pero,
      siguiendo las escrituras, encontráis las ruinas de
      la que en una vez fuera su grandiosa torre.`,
      `Ahora, es poco más que escombros. Cualquier
      tesoro que hubiera probalemente haya sido
      robado o esté profundamente enterrado, pero
      no sois tan fáciles de disuadir. En la base de la
      colina, veis una puerta de piedra gigante.
      Desafortunadamente, está custodiada por
      muchas criaturas del bosque con aspecto
      amenazador.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `La puerta casi se cae de sus bisagras oxidadas al
          empujarla, permitiéndoos entrar en un túnel
          anegado debajo de la torre.`,
          `Observando la habitación, inmediatamente veis
          palabras grabadas profundamente en la pared
          de piedra: "Soy un monstruo. Soy malvado. No
          tengo alma.`
        ]
      },
      {
        key: '2',
        texts: [
          `La puerta se abre para revelar una prístina
          biblioteca con un enorme golem de piedra en
          su centro. Sorprendentemente, el golem habla
          con voz grave y dura.`,
          `"¡No! ¿Por qué habéis venido
          aquí? He destruido todo lo que había que
          tomar.`,
          `¿Por qué me obligáis a matar?"`
        ]
      }
    ],
    conclusion: [
      `Los glifos de las extremidades del golem
      comienzan a desvanecerse y trozos de piedra
      caen de su esqueleto mientras pronuncia una
      palabra más: "Gracias". Revisando la biblioteca,
      encontrais un diario que detalla cómo se le dio
      al golem inteligencia y la capacidad de
      aprender.`,
      `Lo que aprendió, sin embargo, fue que era un
      ser sin alma, y que no podría entrar en
      contacto con nada más ya que se le ordenó no
      salir nunca y matar a todos los intrusos.
      También encuentráis un núcleo de energía
      incandescente en el interior del gólem.`
    ]
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
  {
    name: '#72 Oozing Grove',
    introduction: [
      `"Entrad." El rico concejal Greymare te acompaña
      a su oficina, luego se sienta en su escritorio.
      "Dominic me dice que está escribiendo un libro
      sobre la corrupción de los militares y necesita
      mi apoyo para evitar que termine encadenado
      debajo de la Fortaleza Fantasma (Ghost
      Fortress). Es un favor complicado, pero puede
      que tengáis suerte, porque tengo un favor
      igualmente complicado que pediros para el que
      estáis perfectamente preparados.`,
      `"Hasta hace poco, tenía una propiedad en
      Corpsewood que estaba produciendo frutas y
      verduras. Las buenas tierras de cultivo son un
      lujo aquí, y pensé que si la finca estaba
      escondida y protegida, debería haber sido capaz
      de mantenerse. Desafortunadamente, no he
      tenido noticias de mis encargados en más de
      una semana. Envié algunos hombres para
      investigar, pero tampoco han regresado ".`,
      `Greymare suspira. "Necesito a alguien capaz de
      ir y descubrir lo que está pasando. También
      sería bueno si pudieráis arreglar lo que esté
      pasando para poder recuperar mi tierra de
      cultivo. Hazlo y apoyaré vuestro pequeño libro "`,
      `Aceptáis y os dirigís hacia el bosque de los
      cadáveres para localizar la propiedad de
      Greymare. Esperando Vermellings y cosas por
      el estilo, os sorprendéis por la escena que
      encuentráis a vuestra llegada. El cortijo está cubierto
      de un moho espeso y viscoso y encuentras
      numerosos esqueletos, completamente limpios,
      alrededor de la propiedad. Es como si este lugar
      hubiera sido abandonado durante años, no días.`,
      `Seguís el rastro del moho denso sobre una
      arboleda de árboles frutales. Aquí, el lodo es
      más grueso, y cuando lo pinchas con tu arma,
      se ondula y reacciona. De repente, el terreno
      está lleno de movimiento y hostilidad.`
    ],
    milestones: [],
    conclusion: [
      `El moho verde que cubre el suelo se ondula y
      convulsiona cuando el último árbol se estrella
      contra la tierra. Tal vez sea tu imaginación,
      pero casi lo oyes gritar.`,
      `Entonces todo el lodo se vuelve marrón. No
      estás seguro de que esta tierra vaya a crecer
      alguna vez pero neutralizaste la amenaza.
      Esperemos que eso sea suficiente para que
      Greymare cumpla con su parte del trato.`
    ]
  },
  {
    name: '#73 Rockslide Ridge',
    introduction: [
      `A medida que escalas esta zona de las
      montañas Vigilantes, empezáis a daros cuenta
      de por qué nadie intentó recuperar el Codex. Si
      fueras un Inox tratando de proteger a tu tribu,
      éste parece ser un lugar bastante ideal para
      establecer un campamento.`,
      `Constantes temblores en la tierra causan
      frecuentes deslizamientos de rocas a lo largo de
      la ladera de la montaña, lo que hace que la
      escalada sea increíblemente difícil. Los Inox
      deben tener otro camino, pero sin ningún
      conocimiento de la zona, decidís que la única
      forma es la más difícil. Preparáis vuestras armas
      mientras escucháis el estruendo de las rocas que
      caen.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Entráis en la boca de la cueva y os encontráis
          cara a cara con un chamán Inox enojado.`,
          `"¡Volved, ratas de ciudad! ¡Esta tierra es
          nuestra y no será contaminada! ¡Corred hacia la
          montaña o sentid nuestra ira!"`,
          `Sonreís con ironía al Inox. No habéis subido hasta
          aquí solo para iros a casa con las manos vacías.`
        ]
      },
    ],
    conclusion: [
      `Con el Inox muerto, hacéis un inventario de lo
      que encontráis en la cueva. En su mayoría son
      ollas de barro llenas de ceniza y pedazos de
      hueso, pero entre sus pertenencias, se
      encuentra un gran tomo. Está raído y se está
      cayendo a pedazos, pero la mayoría de las
      páginas aún son legibles. Lo guardáis
      cuidadosamente en vuestra mochila y volvéis a
      Gloomhaven.`,
      `"¡Sois mis héroes!", Dice Dominic cuando
      regresas con el Codex. "Esto es todo lo que
      podría haber esperado. Quiero decir, seguro,
      podría estar en mejor estado, pero no importa.
      Comenzaré a estudiarlo de inmediato ".`
    ]
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
  { name: '#76 Harrower Hive',
    introduction: [
      `"Así que, ¿creéis que tenéis lo que hace falta
      para en este trabajo? Creéis que sois hábiles
      para vivir una vida larga y fructífera y que el
      tiempo en este mundo no se os vea sesgado por
      la espada de un Vermling?"`,
      `Un anciano con cicatrices cruzándole la cara os
      mira fijamente con su único ojo bueno. Nunca
      lo habíamos visto antes de que se sentara frente
      a nosotros en el León Durmiente, pero con
      total seguridad respondemos a su pregunta.`,
      `"Ja-ja-ja, bueno, teneis las agallas al menos", se
      ríe. "Eso es algo, pero no es ni de lejos todo lo
      necesario"`,
      `"Las noticias que vienen
      directamente de la Capital dicen que
      hay un grupo de Harrowers
      matando gente en el Camino del
      Este. No sabemos por qué, pero
      creemos que de alguna manera
      hemos localizado su colmena al sur,
      en el borde de las Montañas
      Vigilantes (Watcher Mountains). El
      problema es, sin embargo, que no
      podemos encontrar a nadie lo
      suficientemente valiente o estúpido
      para ir allí tras ellos.`,
      `"¿Qué decís? ¿Estáis listos para el
      desafío? Podríais regresar como
      héroes, o también podríais
      simplemente conseguir que os chupe
      la cara entera uno de esos bichos."`,
      `No sois de los que se rinden ante un desafío.
      Marcháis hacia las Montañas Vigilantes, donde
      el viejo dijo que habría una colmena Harrower.
      Vagabundeáis por las colinas durante horas sin
      encontrar ningún tipo de evidencia de ella y
      entonces empezáis a oír un débil zumbido.`,
      `Os acercáis a la cara cercana del acantilado y el
      zumbido se hace más fuerte. Los Harrowers
      están en las rocas, y vais a tener que
      desenterrarlos.`
    ],
    milestones: [],
    conclusion: [
      `Demonios de la noche y muertos animados;
      ciertamente una asquerosa congregación de
      Harrowers que no hacía presagiar nada bueno.
      Cuando volvéis a Gloomhaven para encontraros
      con el viejo en el lugar acordado, no lo
      encontráis. Preguntando por ahí en el León
      Durmiente, nadie parece recordar que alguna
      vez estuvo allí.`,
      `Después de unas horas de búsqueda, empezáis a
      preguntaros si lo habéis soñado. Los Harrowers
      eran reales, seguro. Tal vez el bastardo no
      quería pagaros por el trabajo terminado y huyó.
      Todo este trabajo para nada. Será mejor que no
      asome su cara por aquí otra vez.`
    ]
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
  { name: '#82 Burning Mountain',
    introduction: [
      `Siguiendo el camino de los Inox, encontráis
      los restos de su aldea, quemados y
      derrumbados en una grieta. Una nube oscura
      cuelga sobre la montaña. Siigues un viejo
      camino de piedra, aparentemente intacto, que
      serpentea por el terreno chamuscado y
      termina en un acantilado de varios cientos de
      metros de altura.`,
      `Encontráis un par de grandes puertas de
      piedra, cálidas al tacto e intrincadamente
      talladas en el lado de la montaña. Una vez
      dentro de las puertas, veis charcos de llamas
      líquidas iluminando la habitación de más allá
      en un misterioso resplandor rojo. Los
      cadáveres carbonizados de Savvas están
      dispersos por todas partes. La tierra tiembla
      violentamente y un grupo de demonios
      vuelven su mirada hacia vosotros.`,
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Los Savvas se reunieron en esta cámara trasera
          para su última batalla. Algunos de ellos
          descansan alrededor del área, con sus cuerpos
          destrozados y abrasados. Un trono ocupa el
          centro de la habitación, y encima se encuentra
          el cuerpo de un Savvas sosteniendo un martillo
          y un casco. Quemado contra la pared detrás de
          él lees las palabras: "Locura. La Bestia se
          despierta. Imposible controlar el poder de la
          montaña. Devuélvelas y podrá dormir de
          nuevo."`
        ]
      }
    ],
    conclusion: [
      `CONCLUSIÓN A: Arrojaste el objeto a la creciente llama líquida a
      tu alrededor. Chisporrotea y engulle el objeto.
      El estruendo y temblor, constantes hasta este
      punto, comienzan a disiparse. Los golems cesan
      sus movimientos, y los demonios parecen haber
      desaparecido. La nube de hollín todavía cuelga
      en el cielo mientras caminas de nuevo a casa,
      pero la montaña parece dormir. Por ahora.`,
      `CONCLUSIÓN B: Irrumpís a través de las puertas de piedra, con
      las cenizas lamiendo vuestras espaldas. El
      temblor de la montaña llega a un crescendo
      mientras os deslizáis por el viejo camino de
      piedra, ahora con fisuras. El cielo se ha vuelto
      negro y grandes rocas llegan retumbando por
      las laderas. Apenas escapáis de vuelta a
      Gloomhaven, pero la devastación del volcán se
      sintió incluso allí.`
    ]
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
  {
    name: '#87 Corrupted Cove',
    introduction: [
      `Con la fuente de la corrupción inaccesible por
      tierra, cogéis un bote pequeño en la cala,
      rodeada por grandes muros de roca por tres
      lados. En la base del lejano acantilado, podéis
      ver una entrada en la base de la caverna oscura,
      de la que sale agua de un verde enfermizo.`,
      `Amarráis el bote dentro de la caverna y saltáis
      sobre un suelo de piedra cubierto de una
      mugre verde y pegajosa. Estáis resueltos a
      encontrar la fuente de tal horrible corrupción,
      pero un grupo de Lurkers frente a vosotros
      quieren deteneros.`
    ],
    milestones: [
      {
        key: '1',
        texts: [
          `Luchando a través de los Lurkers, os adentráis
          en la cámara principal de la caverna, la cual está
          goteando con una baba espesa y pútrida. En el
          centro de la habitación se encuentra un bulto
          enorme de mugre latiente, el cual late con una
          maligna bilis.`,
          `A vuestro alrededor, otras oscuras criaturas
          emergen de la suciedad. La masa del centro
          parace que las controla. Si pudieseis encontrar
          algo para destruirla, pondriais fin a la
          corrupción.`
        ]
      }
    ],
    conclusion: [
      `Incapaz de sostenerse por más tiempo, la masa
      gigante tiembla y luego pierde su forma,
      extendiendo su sustancia gelatinosa por todo el
      suelo ya viscoso. Las otras criaturas a vuestro
      alrededor también se disuelven en el lodo.`,
      `Limpiáis la mugre de vuestras armas y cuerpo,
      agradecidos de que cualquier mal cancerígeno
      que haya estado aquí ahora haya sido destruido.`,
      `Parte de este líquido venenoso aún puede
      filtrarse en el océano, y llevará mucho tiempo
      hasta que los efectos de lo que ya está allí se
      disipen, pero al menos no empeorarán.`,
      `Cuando regresáis a vuestro bote, podéis ver
      cómo el flujo del lodo se desvanece. Vuelves a
      Gloomhaven e informas de las noticias.`
    ]
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
