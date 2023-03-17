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
    { name: '#25 Icecrag Ascent'
    , introduction: [],
    milestones: [],
    conclusion: []
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
