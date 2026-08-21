import type { Dict } from './index';

/**
 * Spanish. Written as Spanish, not as a word-for-word rendering of the
 * English — in a market where speaking the language IS the differentiator,
 * copy that reads like machine output costs more than it earns.
 *
 * `Dict` is derived from en.ts, so a missing key here is a build error.
 */
export const es: Dict = {
  locale: 'es',
  htmlLang: 'es-US',
  label: 'Español',

  meta: {
    title: 'Instalación y Reparación de Equipos de Gimnasio | Aplus',
    description:
      'Caminadoras, gimnasios en casa y equipos comerciales: instalación, mantenimiento, reparación y mudanza en un radio de 50 millas. Diez años, una sola persona.',
  },

  nav: {
    book: 'Reservar una cita',
    call: 'Llamar',
    skipToContent: 'Ir al contenido',
    language: 'Idioma',
    theme: 'Cambiar tema',
    themeToLight: 'Cambiar a tema claro',
    themeToDark: 'Cambiar a tema oscuro',
  },

  hero: {
    eyebrow: ['Casas y negocios', 'A {radius} de {base}', '{years} años'],
    headingLead: 'Equipos de gimnasio instalados, mantenidos y reparados',
    headingAccent: 'y trasladados cuando usted se muda.',
    primary: 'Reservar una cita',
    secondary: 'Enviar una foto por WhatsApp',
    call: 'Llamar al {phone}',
    proofTitle: 'El historial hasta hoy',
  },

  kit: [
    'Caminadoras',
    'Elípticas',
    'Gimnasios en casa',
    'Racks de potencia',
    'Bicicletas fijas',
    'Máquinas de remo',
    'Entrenadores funcionales',
    'Máquinas de cable',
    'Bicicletas de spinning',
    'Bancos de pesas',
    'Racks de sentadillas',
    'Máquinas Smith',
    'Bicicletas reclinadas',
    'Escaladoras',
  ],

  proof: {
    jobs: 'trabajos completados',
    rating: 'de {count} reseñas',
    years: 'de experiencia',
    topPro: 'desde {year}',
    source: 'Calificación y número de trabajos según {platform}. Verificado y asegurado.',
  },

  reviews: {
    eyebrow: 'Reseñas',
    heading: 'Lo que escribieron después',
    body: 'Cada una de estas la dejó en {platform} alguien que pagó por el trabajo. Están transcritas palabra por palabra. Si prefiere, léalas en la fuente.',
    readOn: 'Leer las {count} en {platform}',
    empty: 'Aquí va una reseña, transcrita del perfil, con el nombre y el mes tal como aparecen',
    previous: 'Reseñas anteriores',
    next: 'Más reseñas',
  },

  lifecycle: {
    eyebrow: 'Lo que hago',
    heading: 'De la caja hasta la próxima casa',
    body: 'Cinco cosas, pero en realidad una sola: que la máquina funcione, y que siga funcionando. La mayoría me conoce en el paso dos y me vuelve a llamar en el tres.',
    stages: [
      {
        key: 'consulting',
        name: 'Asesoría',
        title: 'Antes de comprarla',
        body: 'Si pasa por la puerta, si sube la escalera, si cabe con esa altura de techo. Si el piso la aguanta, algo que importa mucho más en un sótano o encima de un garaje de lo que la gente supone. Diez años viendo cuáles máquinas dan problemas valen una llamada antes de gastar cuatro mil dólares.',
      },
      {
        key: 'installation',
        name: 'Instalación',
        title: 'Cuando llega',
        body: 'La bajo de la tarima, la llevo al cuarto donde va y la armo con el torque que indica el fabricante. Nivelada contra el piso y no contra su propio marco. Esa diferencia es la razón por la que una caminadora nueva desgasta la banda de un solo lado. Firmware y calibración al día, probada con peso encima, y el empaque se va conmigo.',
      },
      {
        key: 'maintenance',
        name: 'Mantenimiento',
        title: 'Mientras funciona',
        body: 'Tensión y alineación de la banda, lubricación de la plataforma, revisión de cables, servicio de rodamientos y pivotes, reapriete de tornillería. Un equipo que se revisa dos veces al año no se convierte en la reparación de la sección siguiente. Para negocios esto es una visita programada, no una llamada después de que algo falló.',
      },
      {
        key: 'repair',
        name: 'Reparación',
        title: 'Cuando se detiene',
        body: 'Cables deshilachados o salidos, bandas y plataformas gastadas, consolas que no encienden, pedales y bielas barridos por quien la armó la primera vez, racks que se traban al mover los seguros. Le digo con franqueza cuándo la pieza cuesta más de lo que vale la máquina.',
      },
      {
        key: 'moving',
        name: 'Mudanza',
        title: 'Cuando tiene que irse',
        body: 'Desarmada, tornillería embolsada y etiquetada por sección, piezas envueltas, y armada de nuevo en el destino para que funcione y no solo para que llegue. Este es el trabajo que la gente improvisa y después lamenta. Un gimnasio desarmado sin etiquetas es un gimnasio que termina en la basura.',
      },
    ],
  },

  gallery: {
    eyebrow: 'El trabajo',
    heading: 'Trabajos que quedan bien en foto',
    body: 'Más que un portafolio, un registro. Cada uno de estos es una máquina que unas horas antes estaba en pedazos en el piso de alguien.',
    empty: 'Aquí va una foto',
    items: [
      'Una caminadora bajada hasta un sótano terminado',
      'Un rack armado y nivelado contra el piso',
      'Cable y polea después del servicio',
      'La escalera que decidió cómo subía la máquina',
      'Una sala de ejercicio de hotel, atendida fuera de horario',
      'Tornillería embolsada y etiquetada antes de una mudanza',
      'Una banda gastada junto a la que la reemplazó',
      'Un gimnasio de garaje, terminado y barrido',
    ],
  },

  brands: {
    eyebrow: 'Equipos',
    heading: 'Las máquinas con las que trabajo',
    body: 'Diez años entre equipos de casa y de uso semicomercial. El mecanismo de armado y servicio se repite dentro de cada categoría, así que la experiencia sí se transfiere, pero si la suya es algo que nunca he tocado, se lo digo antes de ir.',
    disclaimer:
      'Proveedor de servicio independiente. Todos los nombres de productos, logotipos y marcas son propiedad de sus respectivos dueños y se muestran únicamente para identificar los equipos atendidos. No se afirma ni se insinúa ninguna afiliación, autorización, patrocinio ni respaldo.',
  },

  businesses: {
    eyebrow: 'Para negocios',
    heading: 'Una máquina fuera de servicio es una queja de su cliente',
    body: 'Gimnasios, hoteles, edificios de apartamentos, salas de ejercicio de empresas y clínicas de terapia física no compran comodidad. Compran disponibilidad. Otro problema, otro arreglo.',
    points: [
      {
        title: 'Mantenimiento programado, no emergencias',
        body: 'Una visita recurrente a todo el salón, con registro por máquina, para encontrar las fallas mientras todavía son ajustes.',
      },
      {
        title: 'Fuera de su horario de atención',
        body: 'Temprano, tarde o en día cerrado. Sus clientes no tienen por qué pasar junto a un carrito de herramientas.',
      },
      {
        title: 'Certificado de seguro',
        body: 'Enviado a su administración o al dueño del edificio antes de la primera visita, siempre que sea requisito para trabajar en el lugar.',
      },
      {
        title: 'Facturado, no cobrado en la puerta',
        body: 'Una factura por visita o por período, con lo que se atendió y lo que hay que vigilar la próxima vez.',
      },
    ],
    cta: 'Hablemos de un contrato de servicio',
    whatsapp:
      'Hola Julio, administro un lugar con equipos de gimnasio y quiero hablar sobre el mantenimiento:',
  },

  weight: {
    eyebrow: 'Lo que la gente subestima',
    heading: 'No es armarla. Es la escalera.',
    body: [
      'Una caminadora de grado comercial pesa entre 250 y 350 libras en una sola caja. Entrega por flete significa la acera, no el cuarto, y muchísima gente se entera de esto el día que llega el camión.',
      'Subir una máquina un piso o bajarla a un sótano es un trabajo aparte de armarla, con su propio riesgo para la máquina, para las paredes y para quien la carga. Yo hago las dos cosas, y le digo con franqueza antes de ir si su escalera aguanta esa máquina en particular.',
    ],
  },

  booking: {
    eyebrow: 'Reservas',
    heading: 'Elija un horario que de verdad está libre',
    body: 'Los bloques son de {slotHours} horas y empiezan a las {opens}. Lo que usted ve es mi calendario real. Si una hora ya está ocupada, no aparece, así que el horario que elige es el horario que tiene.',
    note: 'Google le manda la confirmación de inmediato. Si es urgente, o si ninguno de estos le sirve, llámeme. Eso siempre es más rápido.',
    openInGoogle: 'Abrir la página de reservas',
    fallbackHeading: 'Las reservas abren muy pronto',
    fallbackBody:
      'El calendario se está configurando. Mientras tanto, llame o mande un mensaje. El mismo día tendrá una hora real y un precio real.',
  },

  area: {
    eyebrow: 'Dónde trabajo',
    heading: '{radius} alrededor de {base}',
    body: 'El trabajo está en un lugar distinto cada día, así que lo que limita este negocio es el tiempo de manejo, no la línea de un estado. Ese círculo cubre prácticamente todo Rhode Island, el tercio sureste de Massachusetts y la esquina de Connecticut alrededor de Norwich y New London.',
    tiers: {
      core: { title: 'Se agenda más rápido', range: 'Dentro de unas 35 millas' },
      regular: { title: 'Un viaje normal de trabajo', range: 'De 35 a 55 millas' },
      edge: { title: 'Sí, con una advertencia', range: 'Parcialmente fuera del radio' },
    },
    edgeNote:
      'El este del condado de Worcester, Cape Cod hasta cerca de Hyannis y el sureste de Connecticut quedan sobre la línea o apenas pasándola. Vale la pena ir, pero llevan cargo por traslado y requieren un día organizado alrededor.',
    caption: 'Distancia en línea recta desde {base}.',
  },

  faq: {
    heading: 'Antes de reservar',
    items: [
      {
        q: '¿Puede subir una caminadora a un segundo piso o bajarla a un sótano?',
        a: 'Normalmente sí, y va incluido en el trabajo en lugar de ser un extra. Lo que decide es la escalera, no la máquina: una vuelta al final, un techo bajo encima de los escalones o una entrada estrecha de sótano pueden hacer imposible una unidad en particular. Mándeme una foto de la escalera junto con el modelo y se lo digo antes de que ninguno de los dos aparte un día.',
      },
      {
        q: '¿Se pierde la garantía si el servicio lo hace alguien ajeno a la marca?',
        a: 'El armado y el mantenimiento de rutina hechos por alguien competente no anulan por sí solos la garantía del fabricante, y muchas marcas de hecho exigen armado profesional. Lo que sí puede anularla es una reparación con piezas que no son originales o trabajo sobre un componente sellado. Le aviso cuando un trabajo le corresponde al fabricante por garantía en vez de correr por su cuenta conmigo.',
      },
      {
        q: '¿Atiende equipos comerciales?',
        a: 'Equipos semicomerciales y de gama alta para casa, sí, los que hay en salas de hotel, gimnasios de edificios, salas de empresa y clínicas. Salones comerciales completos con decenas de unidades los tomo para mantenimiento y reparación, y le seré claro si el volumen es más de lo que una sola persona debería prometer.',
      },
      {
        q: '¿Cuánto cuesta una visita?',
        a: 'Instalación y mudanza se cotizan a precio cerrado en cuanto sé el modelo y cómo es el acceso. Mantenimiento y reparación parten de una visita de diagnóstico, y usted recibe el precio del arreglo antes de que empiece el arreglo, no después. Los negocios con contrato recurrente se cobran por período y no por llamada.',
      },
      {
        q: '¿Tiene seguro?',
        a: 'Sí. Tengo seguro y verificación de antecedentes a través de {platform}, donde mantengo el estatus de Top Pro desde {year}. Si su edificio, su asociación de propietarios o su administrador necesita el certificado de seguro antes de que yo trabaje ahí, pídamelo y se lo mando.',
      },
    ],
  },

  finalCta: {
    heading: 'Dígame qué máquina es',
    body: 'Con el modelo y una foto del lugar donde va, ya tengo para darle un precio real y un día real. Casi siempre la misma semana, y al día siguiente más seguido de lo que usted esperaría.',
  },

  whatsapp: {
    general: 'Hola Julio, encontré su sitio. Este es el equipo con el que necesito ayuda:',
    booking: 'Hola Julio, quisiera agendar una visita para mi equipo de gimnasio:',
  },

  footer: {
    tagline:
      '{operator}. {years} años, una sola persona, cada trabajo de principio a fin. Instalación, mantenimiento, reparación, mudanza y asesoría de equipos de gimnasio.',
    hours: 'Horario',
    hoursValue: '{days}, de {opens} a {closes}. Domingo cerrado.',
    area: 'Área de servicio',
    areaValue: 'Dentro de {radius} de {base}, {region}. Servicio a domicilio, sin local.',
    payment: 'Formas de pago: {methods}.',
    rights: 'Todos los derechos reservados.',
    privacy: 'Privacidad',
  },

  privacy: {
    title: 'Política de Privacidad | Aplus',
    description:
      'Qué recoge este sitio, qué no recoge y quién procesa los datos. En lenguaje claro, sin rastreo más allá de analítica y medición de publicidad.',
    heading: 'Política de Privacidad',
    updated: 'Última actualización',
    body: [
      {
        heading: 'Qué recoge este sitio',
        text: 'Este sitio no tiene cuentas, ni inicio de sesión, ni base de datos. No guarda nada de lo que usted escribe. Si reserva por el calendario, el nombre, el correo y el teléfono que ponga van a Google Calendar y a mí, a ningún otro lado.',
      },
      {
        heading: 'Medición y publicidad',
        text: 'Este sitio usa Google Analytics para contar visitas y el píxel de Meta para saber si un anuncio en Facebook o Instagram terminó en una reserva. Los dos guardan cookies y los dos reciben su dirección IP. Ninguno recibe de este sitio su nombre, su teléfono ni su correo.',
      },
      {
        heading: 'Reservas',
        text: 'El calendario de reservas es una página de citas de Google Calendar. Lo que escriba ahí se maneja también bajo la política de privacidad de Google, además de esta. La cita entra en mi calendario y yo lo contacto por el trabajo. No se hace nada más con eso.',
      },
      {
        heading: 'Sus opciones',
        text: 'Puede bloquear las cookies en su navegador y el sitio sigue funcionando, sin la medición. Puede pedirme que borre cualquier cosa que me haya enviado, llamando o escribiendo a los datos de abajo, y lo hago.',
      },
      {
        heading: 'Contacto',
        text: 'Cualquier duda sobre esto va al mismo teléfono y al mismo correo que todo lo demás, al pie de cada página.',
      },
    ],
  },
};
