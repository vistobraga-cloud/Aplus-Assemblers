import type { Dict } from './index';

/**
 * Portuguese, in a deliberately neutral register.
 *
 * The Portuguese speakers inside this radius are not one group: Fall River and
 * New Bedford are heavily Azorean and continental, while the Brazilian
 * community across southeastern New England is large and growing. Writing
 * hard in either variant sounds foreign to the other half, so this avoids
 * constructions that mark one strongly — no heavy gerund chains, no slang,
 * "você" throughout.
 */
export const pt: Dict = {
  locale: 'pt',
  htmlLang: 'pt',
  label: 'Português',

  meta: {
    title: 'Montagem e Reparo de Equipamentos de Ginástica | Aplus',
    description:
      'Esteiras, academias em casa e equipamentos comerciais: montagem, manutenção, reparo e mudança num raio de 50 milhas. Dez anos, uma pessoa só.',
  },

  nav: {
    book: 'Marcar horário',
    call: 'Ligar',
    skipToContent: 'Ir para o conteúdo',
    close: 'Fechar',
    language: 'Idioma',
    theme: 'Mudar o tema',
    themeToLight: 'Mudar para o tema claro',
    themeToDark: 'Mudar para o tema escuro',
  },

  hero: {
    eyebrow: ['Casas e empresas', 'A {radius} de {base}', '{years} anos'],
    headingLead: 'Equipamento de ginástica montado, revisado e consertado',
    headingAccent: 'e transportado quando você muda.',
    primary: 'Marcar horário',
    secondary: 'Mandar foto no WhatsApp',
    call: 'Ligar {phone}',
  },

  kit: [
    'Esteiras',
    'Elípticos',
    'Estações de musculação',
    'Power racks',
    'Bicicletas ergométricas',
    'Máquinas de remo',
    'Functional trainers',
    'Máquinas de cabo',
    'Bicicletas de spinning',
    'Bancos de supino',
    'Racks de agachamento',
    'Máquinas Smith',
    'Bicicletas horizontais',
    'Simuladores de escada',
  ],

  proof: {
    jobs: 'trabalhos concluídos',
    rating: 'de {count} avaliações',
    years: 'de ofício',
    topPro: 'desde {year}',
    source: 'Avaliação e número de trabalhos segundo o {platform}. Verificado e com seguro.',
  },

  reviews: {
    eyebrow: 'Avaliações',
    heading: 'O que escreveram depois',
    body: 'Cada uma destas foi deixada no {platform} por alguém que pagou pelo serviço. Estão transcritas palavra por palavra. Se preferir, leia na fonte.',
    readOn: 'Ler as {count} no {platform}',
    empty: 'Aqui entra uma avaliação, transcrita do perfil, com o nome e o mês como estão lá',
    previous: 'Avaliações anteriores',
    next: 'Mais avaliações',
  },

  lifecycle: {
    eyebrow: 'O que eu faço',
    heading: 'Da caixa até a próxima casa',
    body: 'Cinco coisas, mas na verdade uma só: a máquina funcionar, e continuar funcionando. A maioria me conhece no passo dois e me chama de volta no três.',
    stages: [
      {
        key: 'consulting',
        name: 'Consultoria',
        title: 'Antes de comprar',
        body: 'Se passa pela porta, se sobe a escada, se cabe naquele pé-direito. Se o piso aguenta, o que pesa muito mais numa cave ou em cima de uma garagem do que as pessoas imaginam. Dez anos vendo quais máquinas dão problema valem um telefonema antes de gastar quatro mil dólares.',
      },
      {
        key: 'installation',
        name: 'Montagem',
        title: 'Quando chega',
        body: 'Tiro da palete, levo até a sala onde vai ficar e monto no torque que o fabricante manda. Nivelada contra o chão e não contra a própria estrutura. É essa diferença que faz uma esteira nova gastar a lona de um lado só. Firmware e calibração feitos, testada com peso em cima, e a embalagem sai comigo.',
      },
      {
        key: 'maintenance',
        name: 'Manutenção',
        title: 'Enquanto roda',
        body: 'Tensão e alinhamento da lona, lubrificação da plataforma, inspeção dos cabos, revisão de rolamentos e articulações, reaperto dos parafusos. Equipamento que é olhado duas vezes por ano não vira o conserto da secção seguinte. Para empresas isto é visita marcada, não telefonema depois que alguma coisa quebrou.',
      },
      {
        key: 'repair',
        name: 'Reparo',
        title: 'Quando para',
        body: 'Cabo desfiado ou fora do lugar, lona e plataforma gastas, console que não liga, pedal e pedivela espanados por quem montou da primeira vez, rack que trava quando se muda a barra de segurança. Eu digo com franqueza quando a peça custa mais do que a máquina vale.',
      },
      {
        key: 'moving',
        name: 'Mudança',
        title: 'Quando tem que sair',
        body: 'Desmontada, parafusos ensacados e etiquetados por conjunto, peças embaladas, e montada de novo no destino para funcionar e não apenas para chegar. É o serviço que as pessoas improvisam e depois lamentam. Uma academia desmontada sem etiqueta é uma academia que acaba sendo substituída.',
      },
    ],
  },

  gallery: {
    eyebrow: 'O trabalho',
    heading: 'Serviços que ficam bem em foto',
    body: 'Mais do que portfólio, é registo. Cada um destes é uma máquina que umas horas antes estava em peças no chão de alguém.',
    empty: 'Aqui entra uma foto',
    items: [
      'Um rack, um banco e um espelho numa cave com luz azul',
      'Meio rack e banco sobre piso de borracha, com um disco carregado',
      'Uma estação de musculação de uma torre, com o banco, contra a parede',
      'Um reformer de Pilates com torre, montado junto a uma janela',
      'Parafusos, ferramentas e peças separados numa mesa antes de montar',
      'Uma esteira montada e a funcionar numa cave acabada',
      'Uma torre funcional numa cave por acabar, com os parafusos dispostos nos tapetes',
      'Uma air bike Assault ao lado da caixa de onde saiu, numa garagem',
    ],
  },

  brands: {
    eyebrow: 'Equipamentos',
    heading: 'As máquinas com que eu trabalho',
    body: 'Dez anos entre equipamento doméstico e semiprofissional. O jeito de montar e de dar manutenção se repete dentro de cada categoria, então a experiência realmente se transfere, mas se a sua for alguma coisa em que nunca pus a mão, eu aviso antes de ir.',
    disclaimer:
      'Prestador de serviço independente. Todos os nomes de produtos, logótipos e marcas pertencem aos seus respetivos donos e aparecem apenas para identificar os equipamentos atendidos. Não se afirma nem se sugere qualquer afiliação, autorização, patrocínio ou endosso.',
  },

  businesses: {
    eyebrow: 'Para empresas',
    heading: 'Máquina parada é reclamação do seu cliente',
    body: 'Academias, hotéis, prédios de apartamentos, salas de ginástica de empresas e clínicas de fisioterapia não compram comodidade. Compram disponibilidade. Outro problema, outro acordo.',
    points: [
      {
        title: 'Manutenção programada, não emergência',
        body: 'Visita periódica em toda a sala, com registo por máquina, para achar a falha enquanto ela ainda é só um ajuste.',
      },
      {
        title: 'Fora do seu horário de funcionamento',
        body: 'Cedo, tarde ou em dia fechado. O seu cliente não tem que passar ao lado de um carrinho de ferramentas.',
      },
      {
        title: 'Certificado de seguro',
        body: 'Enviado à administração ou ao dono do prédio antes da primeira visita, sempre que isso for exigido para trabalhar no local.',
      },
      {
        title: 'Faturado, não cobrado na porta',
        body: 'Uma fatura por visita ou por período, com o que foi feito e o que precisa de atenção da próxima vez.',
      },
    ],
    cta: 'Falar sobre um contrato de manutenção',
    whatsapp:
      'Olá Julio, eu administro um espaço com equipamentos de ginástica e queria falar sobre manutenção:',
  },

  weight: {
    eyebrow: 'A parte que subestimam',
    heading: 'O problema não é montar. É a escada.',
    body: [
      'Uma esteira de nível comercial tem entre 250 e 350 libras numa caixa só. Entrega por transportadora quer dizer o passeio, não a sala, e muita gente descobre isso no dia em que o camião chega.',
      'Subir uma máquina um andar ou descer até uma cave é um trabalho separado de montar, com risco próprio para a máquina, para as paredes e para quem está a carregar. Eu faço os dois, e digo com franqueza antes de ir se a sua escada aguenta aquela máquina.',
    ],
  },

  booking: {
    eyebrow: 'Marcação',
    heading: 'Escolha um horário que está mesmo livre',
    body: 'Os blocos são de {slotHours} horas e começam às {opens}. O que você vê é a minha agenda de verdade. Horário já ocupado não aparece, então o horário que escolher é o horário que tem.',
    note: 'O Google manda a confirmação na hora. Se for urgente, ou se nenhum destes servir, ligue. Isso é sempre mais rápido.',
    openInGoogle: 'Abrir a página de marcação',
    fallbackHeading: 'A marcação abre em breve',
    fallbackBody:
      'A agenda está a ser configurada. Enquanto isso, ligue ou mande mensagem. No mesmo dia você tem um horário real e um preço real.',
  },

  area: {
    eyebrow: 'Onde eu atendo',
    heading: '{radius} em volta de {base}',
    body: 'O trabalho está num sítio diferente todo dia, então o que limita este negócio é o tempo de estrada, não a fronteira de um estado. Esse círculo cobre praticamente todo o Rhode Island, o terço sudeste do Massachusetts e o canto do Connecticut à volta de Norwich e New London.',
    tiers: {
      core: { title: 'Marca mais rápido', range: 'Dentro de umas 35 milhas' },
      regular: { title: 'Uma viagem normal de trabalho', range: 'De 35 a 55 milhas' },
      edge: { title: 'Sim, com uma ressalva', range: 'Em parte fora do raio' },
    },
    edgeNote:
      'O leste do condado de Worcester, Cape Cod até perto de Hyannis e o sudeste do Connecticut ficam em cima da linha ou logo depois dela. Vale a pena ir, mas levam taxa de deslocação e pedem um dia organizado à volta deles.',
    caption: 'Distância em linha reta a partir de {base}.',
  },

  faq: {
    heading: 'Antes de marcar',
    items: [
      {
        q: 'Consegue subir uma esteira para o primeiro andar ou descer para a cave?',
        a: 'Normalmente sim, e faz parte do serviço em vez de ser um extra. Quem decide é a escada, não a máquina: uma curva no fim, um teto baixo por cima dos degraus ou uma entrada estreita de cave podem tornar uma unidade específica impossível. Mande uma foto da escada junto com o modelo e eu digo antes de qualquer um de nós marcar o dia.',
      },
      {
        q: 'Perde a garantia se o serviço for feito por alguém de fora da marca?',
        a: 'Montagem e manutenção de rotina feitas por alguém competente não anulam por si só a garantia do fabricante, e muitas marcas até exigem montagem profissional. O que pode anular é um reparo com peça que não é original ou mexer num componente selado. Eu aviso quando o serviço é daqueles que o fabricante deve fazer pela garantia, em vez de você pagar a mim.',
      },
      {
        q: 'Atende equipamento comercial?',
        a: 'Equipamento semiprofissional e doméstico de gama alta, sim, do tipo que existe em sala de hotel, ginásio de prédio, sala de empresa e clínica. Sala comercial inteira com dezenas de aparelhos eu aceito para manutenção e reparo, e sou direto se o volume for mais do que uma pessoa só devia prometer.',
      },
      {
        q: 'Quanto custa uma visita?',
        a: 'Montagem e mudança são orçadas com preço fechado assim que eu souber o modelo e como é o acesso. Manutenção e reparo começam com uma visita de diagnóstico, e você recebe o valor do conserto antes de eu começar o conserto, não depois. Empresa com contrato periódico paga por período e não por chamada.',
      },
      {
        q: 'Você tem seguro?',
        a: 'Tenho. Tenho seguro e verificação de antecedentes pelo {platform}, onde mantenho o estatuto de Top Pro desde {year}. Se o seu prédio, o condomínio ou a administração precisar do certificado de seguro antes de eu trabalhar lá, é só pedir que eu mando.',
      },
    ],
  },

  finalCta: {
    heading: 'Diga qual é a máquina',
    body: 'Com o modelo e uma foto do lugar onde ela vai ficar já dá para um preço real e um dia real. Quase sempre na mesma semana, e no dia seguinte mais vezes do que você imagina.',
  },

  whatsapp: {
    general: 'Olá Julio, encontrei o seu site. É este o equipamento com que preciso de ajuda:',
    booking: 'Olá Julio, queria marcar uma visita para o meu equipamento de ginástica:',
  },

  footer: {
    tagline:
      '{operator}. {years} anos, uma pessoa só, cada trabalho do início ao fim. Montagem, manutenção, reparo, mudança e consultoria de equipamento de ginástica.',
    hours: 'Horário',
    hoursValue: '{days}, das {opens} às {closes}. Domingo fechado.',
    area: 'Área de atendimento',
    areaValue: 'Dentro de {radius} de {base}, {region}. Serviço ao domicílio, sem loja.',
    payment: 'Formas de pagamento: {methods}.',
    rights: 'Todos os direitos reservados.',
    privacy: 'Privacidade',
  },

  privacy: {
    title: 'Política de Privacidade | Aplus',
    description:
      'O que este site recolhe, o que não recolhe e quem trata os dados. Em linguagem simples, sem rastreio além de estatística e medição de publicidade.',
    heading: 'Política de Privacidade',
    updated: 'Última atualização',
    body: [
      {
        heading: 'O que este site recolhe',
        text: 'Este site não tem conta, não tem login e não tem base de dados. Não guarda nada do que você escreve. Se marcar pela agenda, o nome, o email e o telefone que puser vão para o Google Calendar e para mim, para mais lado nenhum.',
      },
      {
        heading: 'Medição e publicidade',
        text: 'Este site usa o Google Analytics para contar visitas e o pixel da Meta para saber se um anúncio no Facebook ou no Instagram acabou em marcação. Os dois guardam cookies e os dois recebem o seu endereço IP. Nenhum dos dois recebe deste site o seu nome, o seu telefone ou o seu email.',
      },
      {
        heading: 'Marcação',
        text: 'A agenda de marcação é uma página de compromissos do Google Calendar. O que escrever ali é tratado também segundo a política de privacidade do Google, além desta. A marcação entra na minha agenda e eu entro em contacto por causa do serviço. Não se faz mais nada com isso.',
      },
      {
        heading: 'As suas opções',
        text: 'Você pode bloquear os cookies no seu navegador e o site continua a funcionar, sem a medição. Pode pedir que eu apague qualquer coisa que me tenha enviado, ligando ou escrevendo para os contactos abaixo, e eu apago.',
      },
      {
        heading: 'Contacto',
        text: 'Qualquer dúvida sobre isto vai para o mesmo telefone e o mesmo email de tudo o resto, no fim de cada página.',
      },
    ],
  },
};
