export interface TourPricingTier {
  pax: number;
  price: number;
}

export interface TourItem {
  id: string;
  code: string;
  category: 'douro' | 'north' | 'porto';
  categoryLabel: { pt: string; en: string };
  name: { pt: string; en: string };
  subtitle: { pt: string; en: string };
  tagline: { pt: string; en: string };
  shortDesc: { pt: string; en: string };
  fullDesc: { pt: string[]; en: string[] };
  duration: { pt: string; en: string };
  highlights: { pt: string[]; en: string[] };
  included: { pt: string[]; en: string[] };
  pricingTiers: TourPricingTier[];
  startingPrice: number;
  gygVerified: boolean;
  gygUrl: string;
  image: string;
  gallery: string[];
}

export interface VipExtraItem {
  id: string;
  name: { pt: string; en: string };
  tagline: { pt: string; en: string };
  desc: { pt: string; en: string };
  price: number;
}

export const VIP_EXTRAS: VipExtraItem[] = [
  {
    id: 'dj',
    name: { pt: 'DJ Privado', en: 'Private DJ' },
    tagline: { pt: 'Música Exclusiva · Cruzeiro & Quinta', en: 'Curated Sound · Cruise & Estate' },
    desc: {
      pt: 'Set musical personalizado e sofisticado para o seu cruzeiro privado pelo Rio Douro ou almoço numa quinta histórica. Equipamento de som profissional incluído.',
      en: 'Sophisticated bespoke live DJ set for your private Douro river cruise or exclusive quinta luncheon. Professional sound gear included.'
    },
    price: 350
  },
  {
    id: 'decor',
    name: { pt: 'Decoração Personalizada', en: 'Bespoke Event Decor' },
    tagline: { pt: 'Cenografia · Celebrações & Romance', en: 'Romantic Styling & Floral Art' },
    desc: {
      pt: 'Design floral, arranjos de luxo e ambientação elegante para celebrações íntimas, aniversários e pedidos de casamento inesquecíveis.',
      en: 'Custom floral installations, luxury table styling and romantic ambient lighting for proposals, anniversaries and celebrations.'
    },
    price: 250
  },
  {
    id: 'photographer',
    name: { pt: 'Fotógrafo / Videógrafo Profissional', en: 'Professional Photographer' },
    tagline: { pt: 'Memórias Eternas · Foto & Vídeo 4K', en: 'Timeless Memories · 4K Photo & Video' },
    desc: {
      pt: 'Acompanhamento discreto de um fotógrafo e videógrafo profissional dedicado para registar com estética cinematográfica os momentos mais marcantes do seu dia.',
      en: 'Discreet accompaniment by a dedicated professional photographer to capture magazine-worthy cinematic shots of your private journey.'
    },
    price: 300
  }
];

export const ALL_17_TOURS: TourItem[] = [
  {
    id: 'ponte-de-lima-douro',
    code: 'North-001',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley & Norte', en: 'Douro Valley & North' },
    name: {
      pt: 'Ponte de Lima & Douro: Vinhos, Almoço e Cruzeiro',
      en: 'Ponte de Lima & Douro: Wine, Regional Lunch & Cruise'
    },
    subtitle: {
      pt: 'Vinho Verde em Ponte de Lima, quinta tradicional no Douro com almoço harmonizado e cruzeiro panorâmico',
      en: 'Vinho Verde in Portugal oldest village, traditional Douro quinta with paired lunch and river cruise'
    },
    tagline: { pt: 'Vinho Verde · Douro · Cruzeiro', en: 'Vinho Verde · Douro · Cruise' },
    shortDesc: {
      pt: 'Descubra os sabores do Norte de Portugal num tour privado: prove Vinho Verde em Ponte de Lima, desfrute de um almoço harmonizado no Douro e navegue entre vinhedos.',
      en: 'Discover the flavours of Northern Portugal on a private tour: taste Vinho Verde in Ponte de Lima, savour a wine-paired lunch in the Douro and cruise through UNESCO vineyards.'
    },
    fullDesc: {
      pt: [
        'Saia do Porto e descubra dois dos grandes tesouros gastronómicos e vitivinícolas do Norte de Portugal num único dia exclusivo. Comece em Ponte de Lima, tradicionalmente considerada a vila mais antiga de Portugal.',
        'Visite um espaço dedicado à cultura do Vinho Verde com prova comentada das castas locais e faça uma paragem na histórica ponte romana e medieval sobre o Rio Lima.',
        'Siga para o Vale do Douro e visite uma quinta familiar tradicional. Conheça o seu pequeno museu vitivinícola e desfrute de um almoço regional completo harmonizado com vinhos do Douro.',
        'Termine o dia navegando entre os famosos socalcos e vinhedos do Douro num cruzeiro panorâmico de 1 hora pelo rio. Ao final, regresse com total conforto e tranquilidade ao Porto.'
      ],
      en: [
        'Depart from Porto to experience two of Northern Portugal greatest wine and culinary treasures in a single exclusive day. Begin in Ponte de Lima, traditionally regarded as Portugal oldest village.',
        'Visit a dedicated Vinho Verde estate with a guided wine tasting, followed by a scenic walk alongside the historic Roman and medieval bridge spanning the Lima River.',
        'Continue to the Douro Valley to tour an authentic family-owned quinta and its wine museum. Savor a traditional regional multi-course lunch paired with fine Douro DOC wines.',
        'Cap off your day with a relaxing 1-hour cruise along the terraced UNESCO hills of the Douro River before returning in executive comfort to your hotel in Porto.'
      ]
    },
    duration: { pt: '10 horas', en: '10 hours' },
    highlights: {
      pt: [
        'Tour 100% privado com motorista-guia especialista em vinhos',
        'Vinho Verde e vinhos do Douro numa única viagem exclusiva',
        'Paragem na ponte romana e centro histórico de Ponte de Lima',
        'Almoço regional completo harmonizado com vinhos do Douro',
        'Cruzeiro panorâmico de 1 hora no Rio Douro entre vinhas',
        'Transporte executivo com recolha e entrega no hotel no Porto'
      ],
      en: [
        '100% private tour with certified wine-expert driver/guide',
        'Vinho Verde and Douro Valley wines in a single exclusive day',
        'Historic walk in Ponte de Lima and ancient Roman bridge',
        'Full regional lunch paired with fine Douro DOC wines',
        'Scenic 1-hour Douro River cruise among terraced vineyards',
        'Door-to-door executive vehicle pickup and drop-off in Porto'
      ]
    },
    included: {
      pt: [
        'Transporte privado de ida e volta em veículo executivo climatizado',
        'Motorista/guia bilingue especialista em vinhos e cultura local',
        'Recolha e entrega no hotel ou alojamento no Porto',
        'Visita e degustação de Vinho Verde em espaço enológico',
        'Visita a quinta familiar no Douro e entrada no museu vitivinícola',
        'Almoço regional completo com harmonização de vinhos do Douro',
        'Cruzeiro de 1 hora pelo Rio Douro',
        'Seguro de responsabilidade civil e acidentes pessoais'
      ],
      en: [
        'Private round-trip transportation in executive air-conditioned vehicle',
        'Bilingual driver/guide specializing in Portuguese wine & culture',
        'Direct hotel pickup and drop-off in Porto',
        'Guided visit and commented Vinho Verde tasting',
        'Tour of a family-owned Douro quinta and heritage wine museum',
        'Multi-course regional lunch with curated Douro wine pairing',
        '1-hour panoramic river cruise in the Douro Valley',
        'Full civil liability and personal accident insurance coverage'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 549 }, { pax: 2, price: 599 }, { pax: 3, price: 649 }, { pax: 4, price: 699 },
      { pax: 5, price: 749 }, { pax: 6, price: 799 }, { pax: 7, price: 899 }, { pax: 8, price: 949 }
    ],
    startingPrice: 549,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/douro_boat_tour_1771612994491.png',
    gallery: ['/images/douro_boat_tour_1771612994491.png', '/images/novo-picnic.jpg', '/images/douro-premium.jpg']
  },
  {
    id: 'douro-wine-gastronomy',
    code: 'North-002',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Douro: Gastronomia, Cruzeiro & Prova de Vinhos',
      en: 'Douro: Gastronomy, Cruise & Wine Tasting'
    },
    subtitle: {
      pt: 'A essência clássica do Douro: quintas históricas, almoço de autor e barco rabelo no Pinhão',
      en: 'The classic Douro essence: historic quintas, signature lunch and rabelo boat in Pinhão'
    },
    tagline: { pt: 'Alta Gastronomia · Barco Rabelo · Quintas', en: 'Gastronomy · Rabelo Boat · Quintas' },
    shortDesc: {
      pt: 'Uma imersão sensorial completa no Vale do Douro. Visitas a quintas de prestígio, almoço tradicional harmonizado e cruzeiro rabelo no Pinhão.',
      en: 'A comprehensive sensory immersion in the Douro Valley. Tours of prestigious wine quintas, paired gourmet lunch and scenic rabelo cruise in Pinhão.'
    },
    fullDesc: {
      pt: [
        'Deixe o bulício da cidade para trás e adentre o coração da mais antiga região vinícola demarcada do mundo. Viaje pelas curvas panorâmicas da N222 com paragens nos miradouros mais emblemáticos.',
        'Visite uma prestigiada quinta vinícola onde mestres de adega revelam os segredos da elaboração do Vinho do Porto e DOC Douro, acompanhado de uma prova de colheitas selecionadas.',
        'O almoço é uma celebração da gastronomia regional portuguesa num terraço com vista para o rio, harmonizado com vinhos brancos e tintos de topo.',
        'À tarde, embarque num cruzeiro privado em barco rabelo clássico no Pinhão para admirar a monumental obra dos socalcos talhados na encosta.'
      ],
      en: [
        'Leave the bustling city behind and venture into the world oldest demarcated wine region. Travel along the panoramic curves of the famous N222 road with photo stops at breathtaking viewpoints.',
        'Tour a prestigious wine estate where cellar masters reveal the craft behind Port and Douro DOC wines, followed by a tasting of rare and aged vintages.',
        'Lunch is a celebration of authentic Portuguese regional cuisine served at a riverfront terrace, paired with top Douro reds and whites.',
        'In the afternoon, board a classic rabelo boat in Pinhão to admire the UNESCO-listed man-made stone terraces rising from the river.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Duas quintas históricas com provas completas de vinhos e azeite',
        'Almoço gastronómico regional harmonizado com vinhos DOC Douro',
        'Cruzeiro tradicional no Pinhão pelo coração do rio',
        'Passagem pela cénica estrada N222 com paragens fotográficas',
        'Experiência 100% privada com veículo executivo'
      ],
      en: [
        'Two historic quintas with complete tastings of wine and estate olive oil',
        'Gourmet regional lunch paired with fine Douro DOC wines',
        'Scenic traditional cruise in Pinhão along the serene river',
        'Scenic drive along the famed N222 with bespoke photo stops',
        '100% private experience in executive Mercedes vehicle'
      ]
    },
    included: {
      pt: [
        'Veículo executivo privado climatizado com motorista/guia exclusivo',
        'Recolha e entrega no hotel no Porto ou Vila Nova de Gaia',
        'Visita e prova de vinhos comentada em 2 quintas durienses',
        'Almoço regional completo de 3 pratos com vinhos incluídos',
        'Cruzeiro no Rio Douro de 1 hora',
        'Água mineral a bordo e seguros legais completos'
      ],
      en: [
        'Private executive air-conditioned vehicle with dedicated wine guide',
        'Hotel pickup and drop-off in Porto or Gaia',
        'Guided tours and commented tastings at 2 renowned Douro quintas',
        'Full 3-course regional lunch with estate wines included',
        '1-hour Douro River cruise',
        'Bottled water on board and full mandatory insurances'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 549 }, { pax: 2, price: 599 }, { pax: 3, price: 649 }, { pax: 4, price: 699 },
      { pax: 5, price: 749 }, { pax: 6, price: 799 }, { pax: 7, price: 899 }, { pax: 8, price: 949 }
    ],
    startingPrice: 549,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/douro-premium.jpg',
    gallery: ['/images/douro-premium.jpg', '/images/douro_boat_tour_1771612994491.png', '/images/novo-picnic.jpg']
  },
  {
    id: 'amarante-mateus-palace-douro',
    code: 'North-003',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Amarante, Palácio de Mateus e Douro: Vinhos e História',
      en: 'Amarante, Mateus Palace & Douro: Wine & History'
    },
    subtitle: {
      pt: 'Palácio barroco do séc. XVIII, doçaria conventual em Amarante e provas nos socalcos do Douro',
      en: '18th-century baroque palace, convent sweets in Amarante and scenic Douro wine tastings'
    },
    tagline: { pt: 'Palácio de Mateus · Amarante · Vinho', en: 'Mateus Palace · Amarante · Wine' },
    shortDesc: {
      pt: 'Combine o esplendor aristocrático do Palácio de Mateus com os encantos de Amarante e uma degustação inesquecível de vinhos no Vale do Douro.',
      en: 'Combine the aristocratic grandeur of Mateus Palace with the romantic charm of Amarante and an unforgettable wine tasting in the Douro Valley.'
    },
    fullDesc: {
      pt: [
        'Comece o dia na pitoresca cidade de Amarante, banhada pelo Rio Tâmega. Admire a secular Ponte de São Gonçalo e prove os célebres doces conventuais durienses numa pastelaria tradicional.',
        'Em Vila Real, entre nos deslumbrantes jardins barrocos e salões do Palácio de Mateus, uma das obras-primas da arquitetura barroca portuguesa.',
        'Desça depois em direção aos socalcos do Douro para um almoço tradicional e visita com prova guiada numa vinícola com vista panorâmica sobre os vinhedos.'
      ],
      en: [
        'Begin in the picturesque riverside town of Amarante along the Tâmega River. Admire the historic São Gonçalo Bridge and taste famous monastic pastries at an authentic local confectionery.',
        'In Vila Real, step into the enchanting baroque gardens and grand halls of Mateus Palace, one of Portugal architectural crown jewels.',
        'Descend into the terraced vineyards of the Douro for an authentic regional lunch and a private guided wine tasting overlooking the valley.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Visita guiada ao Palácio de Mateus e aos seus jardins premiados',
        'Passeio pelo centro histórico e ponte românica de Amarante',
        'Degustação de doces conventuais tradicionais',
        'Prova de vinhos DOC Douro e Porto numa quinta selecionada',
        'Almoço regional duriense incluído'
      ],
      en: [
        'Guided tour of Mateus Palace and its award-winning botanical gardens',
        'Stroll through Amarante historic center and Romanesque bridge',
        'Tasting of traditional local convent pastries',
        'Douro DOC and Port wine tasting at a curated quinta',
        'Authentic regional multi-course lunch included'
      ]
    },
    included: {
      pt: [
        'Veículo executivo privado e motorista/guia wine master',
        'Entrada e visita aos jardins e Palácio de Mateus',
        'Prova de doces conventuais em Amarante',
        'Almoço completo com vinhos em restaurante regional',
        'Visita e prova comentada em quinta vinícola do Douro',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive private vehicle and dedicated wine-master guide',
        'Admission and tour of Mateus Palace gardens and estate',
        'Conventual pastry tasting in Amarante',
        'Full regional lunch with wine pairings',
        'Private visit and guided tasting at a Douro winery',
        'Door-to-door hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 530 }, { pax: 2, price: 580 }, { pax: 3, price: 630 }, { pax: 4, price: 680 },
      { pax: 5, price: 730 }, { pax: 6, price: 780 }, { pax: 7, price: 880 }, { pax: 8, price: 930 }
    ],
    startingPrice: 530,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'lamego-douro',
    code: 'North-004',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Lamego & Douro: Vinhos, Gastronomia e Cruzeiro',
      en: 'Lamego & Douro: Wine, Gastronomy & Cruise'
    },
    subtitle: {
      pt: 'Santuário monumental dos Remédios, caves históricas de espumante e cruzeiro no rio',
      en: 'Monumental Remédios sanctuary, historic sparkling wine cellars and peaceful river cruise'
    },
    tagline: { pt: 'Espumantes · Santuário Barroco · Cruzeiro', en: 'Sparkling Wine · Baroque Shrine · Cruise' },
    shortDesc: {
      pt: 'Descubra a nobre cidade de Lamego, os seus espumantes de renome, e mergulhe nas paisagens deslumbrantes do Douro com cruzeiro e almoço tradicional.',
      en: 'Discover the noble city of Lamego, its acclaimed sparkling wines, and immerse yourself in the Douro breathtaking scenery with a river cruise and regional lunch.'
    },
    fullDesc: {
      pt: [
        'Visite Lamego, uma das cidades mais históricas e nobres do Norte de Portugal. Suba o monumental escadório barroco do Santuário de Nossa Senhora dos Remédios com os seus azulejos azuis e brancos.',
        'Visite as emblemáticas caves de espumante da região, com uma prova refrescante de espumantes produzidos pelo método tradicional.',
        'Siga para uma quinta com vista para o Rio Douro, saboreando um almoço tradicional beirão e duriense, antes de terminar com um cruzeiro panorâmico relaxante.'
      ],
      en: [
        'Visit Lamego, one of the most historic and noble cities in Northern Portugal. Marvel at the monumental baroque staircase of the Sanctuary of Our Lady of Remedies adorned with hand-painted blue azulejos.',
        'Tour celebrated sparkling wine cellars to discover Portugal premier traditional-method sparklers with an exclusive tasting.',
        'Journey to a scenic riverside quinta for a traditional lunch paired with Douro wines, capped with a peaceful river cruise.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Escadório monumental do Santuário de Nossa Senhora dos Remédios',
        'Visita e prova em caves de espumante método tradicional',
        'Almoço gastronómico harmonizado com vinhos do Douro',
        'Cruzeiro no Rio Douro entre vinhedos e montanhas',
        'Serviço privado e exclusivo em veículo executivo'
      ],
      en: [
        'Monumental baroque stairs at Sanctuary of Our Lady of Remedies',
        'Private visit and sparkling wine tasting in historic cellars',
        'Multi-course regional lunch paired with Douro DOC wines',
        'Douro river cruise surrounded by terraced vineyards',
        'Exclusive door-to-door private service'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Visita ao Santuário dos Remédios e centro histórico de Lamego',
        'Visita guiada e degustação em caves de espumante',
        'Almoço tradicional completo com vinhos incluídos',
        'Cruzeiro de 1 hora pelo Rio Douro',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive vehicle with private wine-specialist chauffeur',
        'Visit to Sanctuary of Remedies and historic Lamego',
        'Sparkling wine cellar tour and commented tasting',
        'Full regional lunch with paired wines',
        '1-hour Douro River cruise',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 540 }, { pax: 2, price: 590 }, { pax: 3, price: 640 }, { pax: 4, price: 690 },
      { pax: 5, price: 740 }, { pax: 6, price: 790 }, { pax: 7, price: 890 }, { pax: 8, price: 940 }
    ],
    startingPrice: 540,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'douro-private-celebration',
    code: 'North-005',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Celebre no Douro: Workshop de Cocktails, Brunch & Cruzeiro Privado',
      en: 'Douro Private Celebration: Cocktail Workshop, Brunch & Cruise'
    },
    subtitle: {
      pt: 'Workshop de mixologia com Vinho do Porto, brunch panorâmico gourmet e cruzeiro privado com brinde',
      en: 'Port wine mixology masterclass, panoramic gourmet brunch and private river cruise with celebratory toast'
    },
    tagline: { pt: 'Mixologia · Brunch Panorâmico · Cruzeiro Privado', en: 'Mixology · Scenic Brunch · Private Cruise' },
    shortDesc: {
      pt: 'Celebre momentos únicos: workshop privado de cocktails com Vinho do Porto, brunch panorâmico numa quinta de topo e cruzeiro com brinde exclusivo.',
      en: 'Celebrate special moments: private Port wine mixology workshop, gourmet panoramic brunch at a premier quinta, and scenic boat cruise with celebration toast.'
    },
    fullDesc: {
      pt: [
        'Criado a pensar em celebrações inesquecíveis — desde aniversários a despedidas de solteiro(a) sofisticadas, noivados ou celebração entre amigos.',
        'Chegue ao Douro em veículo executivo e seja recebido com uma masterclass privada de mixologia: aprenda a criar cocktails de assinatura usando diferentes estilos de Vinho do Porto.',
        'Desfrute de um brunch panorâmico de luxo com produtos gourmet regionais, queijos artesanais, charcutaria nobre e doces tradicionais acompanhados de espumante e vinhos.',
        'O dia culmina num cruzeiro privado com brinde a bordo enquanto o sol se põe sobre as colinas do Douro.'
      ],
      en: [
        'Tailored specifically for milestone celebrations — birthdays, sophisticated bachelor/bachelorette gatherings, engagements or reunions with close friends.',
        'Arrive in the Douro via executive vehicle for a private mixology masterclass, creating signature cocktails with aged Port wine and local botanicals.',
        'Delight in an artisanal panoramic brunch featuring regional cheeses, cured meats, fresh breads, pastries and chilled sparkling wines.',
        'The experience culminates in an exclusive river cruise with a celebration toast as golden light fills the Douro Valley.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Workshop privado de mixologia e cocktails com Vinho do Porto',
        'Brunch gourmet panorâmico com espumante e vinhos incluídos',
        'Cruzeiro com brinde especial a bordo',
        'Possibilidade de adicionar DJ privado, decoração e fotógrafo',
        'Transporte executivo privado porta a porta'
      ],
      en: [
        'Private mixology and Port wine cocktail workshop',
        'Gourmet scenic brunch with sparkling and Douro wines',
        'Exclusive cruise with celebration toast on board',
        'Options to add private DJ, bespoke decor and photographer',
        'Executive door-to-door private transport'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista dedicado',
        'Workshop de cocktails com mixologista e ingredientes premium',
        'Brunch completo de luxo com vinhos e espumante',
        'Cruzeiro no Rio Douro',
        'Garrafa de espumante de celebração',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive transportation with dedicated chauffeur',
        'Mixology workshop with private host and premium ingredients',
        'Luxury brunch feast with wine pairings',
        'Scenic Douro river cruise',
        'Celebration sparkling wine bottle',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 649 }, { pax: 2, price: 699 }, { pax: 3, price: 749 }, { pax: 4, price: 799 },
      { pax: 5, price: 849 }, { pax: 6, price: 899 }, { pax: 7, price: 999 }, { pax: 8, price: 1049 }
    ],
    startingPrice: 649,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/northe_landscape_douro.jpg',
    gallery: ['/images/northe_landscape_douro.jpg', '/images/douro_boat_tour_1771612994491.png']
  },
  {
    id: 'coimbra-aveiro',
    code: 'North-006',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal', en: 'Northern Portugal' },
    name: {
      pt: 'Coimbra & Aveiro: Moliceiro e Oficina de Porcelana',
      en: 'Coimbra & Aveiro: Moliceiro Boat & Porcelain Heritage'
    },
    subtitle: {
      pt: 'Canais de Aveiro em barco moliceiro, manufatura secular Vista Alegre e Coimbra histórica',
      en: 'Aveiro canal moliceiro cruise, Vista Alegre royal porcelain factory and university city of Coimbra'
    },
    tagline: { pt: 'Moliceiro · Vista Alegre · Coimbra UNESCO', en: 'Moliceiro Boat · Vista Alegre · Coimbra' },
    shortDesc: {
      pt: 'Navegue pelos canais de Aveiro num barco moliceiro típico, visite a célebre Manufatura Vista Alegre e descubra a atmosfera académica e medieval de Coimbra.',
      en: 'Glide through the canals of Aveiro on a traditional moliceiro boat, visit the world-famous Vista Alegre porcelain estate and explore Coimbra historic university.'
    },
    fullDesc: {
      pt: [
        'Parta do Porto rumo a Aveiro, a elegante "Veneza de Portugal". Desfrute de um passeio relaxante a bordo de um autêntico barco moliceiro decorado à mão e prove os tradicionais ovos moles.',
        'Visite a prestigiada Manufatura e Museu da Vista Alegre em Ílhavo, descobrindo mais de 200 anos de excelência artesanal na produção de porcelana nobre.',
        'Continue até Coimbra, a cidade dos estudantes e primeira capital de Portugal. Conheça o centro histórico, a Sé Velha e os edifícios da célebre Universidade de Coimbra, classificada Património Mundial pela UNESCO.'
      ],
      en: [
        'Head south from Porto to Aveiro, often called the "Venice of Portugal". Enjoy a tranquil canal cruise aboard a colorful hand-painted moliceiro boat and taste authentic ovos moles pastries.',
        'Visit the prestigious Vista Alegre Porcelain Museum and historic factory village, discovering over 200 years of royal porcelain artistry.',
        'Journey to Coimbra, the city of students and Portugal first royal capital. Explore its medieval lanes and the UNESCO-listed University of Coimbra with panoramic views.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Passeio privado de barco moliceiro pelos canais de Aveiro',
        'Degustação de ovos moles tradicionais',
        'Visita guiada ao Museu da Porcelana Vista Alegre',
        'Passeio histórico por Coimbra e Universidade UNESCO',
        'Almoço regional incluído com especialidades da Bairrada'
      ],
      en: [
        'Private moliceiro canal cruise through Aveiro waterways',
        'Tasting of traditional handmade ovos moles sweets',
        'Guided tour of Vista Alegre Porcelain Museum & Estate',
        'Historic walking tour of Coimbra and its UNESCO University',
        'Full regional lunch included with regional specialties'
      ]
    },
    included: {
      pt: [
        'Transporte executivo privado ida e volta a partir do Porto',
        'Motorista/guia profissional dedicado',
        'Passeio de barco moliceiro em Aveiro',
        'Entrada e visita ao Museu Vista Alegre',
        'Almoço regional completo',
        'Tempo livre e visita guiada em Coimbra'
      ],
      en: [
        'Private executive round-trip transport from Porto',
        'Professional private chauffeur-guide',
        'Moliceiro boat canal ride in Aveiro',
        'Admission to Vista Alegre Museum & complex',
        'Full regional lunch with beverages',
        'Guided walk and free exploration time in Coimbra'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 520 }, { pax: 2, price: 570 }, { pax: 3, price: 620 }, { pax: 4, price: 670 },
      { pax: 5, price: 720 }, { pax: 6, price: 770 }, { pax: 7, price: 870 }, { pax: 8, price: 920 }
    ],
    startingPrice: 520,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'barcelos-braga-guimaraes',
    code: 'North-007',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal', en: 'Northern Portugal' },
    name: {
      pt: 'Barcelos, Braga & Guimarães: As raízes de Portugal',
      en: 'Barcelos, Braga & Guimarães: The Roots of Portugal'
    },
    subtitle: {
      pt: 'O Berço de Portugal em Guimarães, monumental Bom Jesus em Braga e tradição de Barcelos',
      en: 'The Cradle of Portugal in Guimarães, baroque Bom Jesus in Braga and artisan legends of Barcelos'
    },
    tagline: { pt: 'Berço da Nação · Bom Jesus · Minho Nobre', en: 'Cradle of Portugal · Bom Jesus · Minho' },
    shortDesc: {
      pt: 'Mergulhe no coração histórico de Portugal: explore Guimarães onde nasceu o país, a grandiosidade do Bom Jesus em Braga e as tradições lendárias de Barcelos.',
      en: 'Immerse in Portugal historic soul: explore Guimarães where the nation was born, the awe-inspiring Bom Jesus sanctuary in Braga and artisan legends of Barcelos.'
    },
    fullDesc: {
      pt: [
        'Visite Guimarães, classificada como Património Mundial da UNESCO e o "Berço de Portugal", onde nasceu o primeiro rei D. Afonso Henriques. Explore o imponente Castelo e o Paço dos Duques de Bragança.',
        'Em Braga, a cidade dos arcebispos e a mais antiga de Portugal, suba ao Santuário do Bom Jesus do Monte com o seu fascinante escadório e funicular ecológico movido a água.',
        'Termine na carismática vila de Barcelos, famosa pela lenda do Galo que se tornou o maior símbolo de hospitalidade portuguesa no mundo.'
      ],
      en: [
        'Discover Guimarães, a UNESCO World Heritage site and the "Cradle of Portugal" where the nation first king was born. Walk the historic ramparts of the Castle and the Palace of the Dukes of Bragança.',
        'In Braga, known as the Portuguese Rome, ascend to the Sanctuary of Bom Jesus do Monte with its world-famous zigzagging baroque stairway and historic water-powered funicular.',
        'Conclude in Barcelos, the legendary home of the Rooster of Barcelos, the premier symbol of Portuguese identity and good fortune.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Castelo medieval e centro histórico de Guimarães (UNESCO)',
        'Santuário do Bom Jesus do Monte em Braga',
        'Visita ao centro histórico de Braga e Sé Catedral mais antiga',
        'Lenda e artesanato tradicional de Barcelos',
        'Almoço minhoto tradicional com vinhos verdes da região'
      ],
      en: [
        'Medieval castle and UNESCO historic quarter of Guimarães',
        'Sanctuary of Bom Jesus do Monte and water-driven funicular',
        'Historic center of Braga and Portugal oldest cathedral',
        'Artisanal heritage and legends of Barcelos',
        'Traditional Minho feast paired with fresh local Vinho Verde'
      ]
    },
    included: {
      pt: [
        'Veículo executivo privado climatizado com condutor/guia exclusivo',
        'Entrada no Paço dos Duques de Bragança em Guimarães',
        'Visita completa ao Bom Jesus e Sé de Braga',
        'Almoço tradicional minhoto completo',
        'Recolha e entrega personalizada no alojamento no Porto'
      ],
      en: [
        'Private executive air-conditioned vehicle with dedicated guide',
        'Admission to Palace of the Dukes in Guimarães',
        'Full tour of Bom Jesus sanctuary and historic Braga',
        'Authentic Minho regional lunch with local wines',
        'Direct hotel pickup and return in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 490 }, { pax: 2, price: 540 }, { pax: 3, price: 590 }, { pax: 4, price: 640 },
      { pax: 5, price: 690 }, { pax: 6, price: 740 }, { pax: 7, price: 840 }, { pax: 8, price: 890 }
    ],
    startingPrice: 490,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'fatima-batalha-tomar',
    code: 'North-008',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal & Centro', en: 'Northern Portugal & Center' },
    name: {
      pt: 'Fátima, Batalha & Tomar: História e Património',
      en: 'Fátima, Batalha & Tomar: History & Templar Heritage'
    },
    subtitle: {
      pt: 'Santuário da Paz em Fátima, Mosteiro gótico da Batalha e o Castelo dos Templários em Tomar',
      en: 'Sanctuary of Fátima, soaring Gothic cloisters at Batalha and Knights Templar stronghold in Tomar'
    },
    tagline: { pt: 'Cavaleiros Templários · Fátima · Monumentos UNESCO', en: 'Knights Templar · Fátima · UNESCO' },
    shortDesc: {
      pt: 'Um itinerário inesquecível pela fé e história medieval: o Santuário de Fátima, o Mosteiro da Batalha e o lendário Convento de Cristo em Tomar.',
      en: 'An unforgettable journey through faith and medieval legend: the Sanctuary of Fátima, Batalha Monastery and the legendary Knights Templar castle in Tomar.'
    },
    fullDesc: {
      pt: [
        'Visite o Santuário de Fátima, um dos maiores centros mundiais de peregrinação e espiritualidade, conhecendo a Basílica e a Capelinha das Aparições em ambiente sereno.',
        'Em seguida, maravilhe-se com a grandiosidade gótica do Mosteiro da Batalha (Património Mundial UNESCO), construído em agradecimento pela vitória na Batalha de Aljubarrota, com as suas Capelas Imperfeitas.',
        'Termine em Tomar, na mítica fortaleza dos Cavaleiros Templários e Convento de Cristo, admirando a icónica Janela Manuelina e séculos de história da Ordem do Templo.'
      ],
      en: [
        'Visit the Sanctuary of Fátima, one of the world most reverent pilgrimage destinations, visiting the Basilica of Our Lady of the Rosary and Chapel of Apparitions.',
        'Next, marvel at the Gothic and Manueline mastery of the Batalha Monastery (UNESCO World Heritage), including its awe-inspiring Unfinished Chapels.',
        'Conclude in Tomar inside the ancient stronghold of the Knights Templar and the Convent of Christ, viewing the iconic Manueline chapterhouse window and secret cloisters.'
      ]
    },
    duration: { pt: '10 horas', en: '10 hours' },
    highlights: {
      pt: [
        'Santuário de Fátima e Capelinha das Aparições',
        'Mosteiro da Batalha e Capelas Imperfeitas (UNESCO)',
        'Castelo dos Templários e Convento de Cristo em Tomar (UNESCO)',
        'Almoço regional tradicional incluído',
        'Veículo executivo privado para todo o conforto'
      ],
      en: [
        'Sanctuary of Fátima and Chapel of the Apparitions',
        'Batalha Monastery and its soaring Gothic cloisters (UNESCO)',
        'Knights Templar Castle & Convent of Christ in Tomar (UNESCO)',
        'Full traditional regional lunch included',
        'Executive private vehicle with maximum travel comfort'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Entradas no Mosteiro da Batalha e Convento de Cristo em Tomar',
        'Visita ao Santuário de Fátima',
        'Almoço tradicional completo',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive vehicle with private chauffeur-guide',
        'Admission tickets to Batalha Monastery and Tomar Convent',
        'Full visit to the Sanctuary of Fátima',
        'Traditional multi-course lunch',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 560 }, { pax: 2, price: 610 }, { pax: 3, price: 660 }, { pax: 4, price: 710 },
      { pax: 5, price: 760 }, { pax: 6, price: 810 }, { pax: 7, price: 910 }, { pax: 8, price: 960 }
    ],
    startingPrice: 560,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'obidos-alcobaca',
    code: 'North-009',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal & Centro', en: 'Northern Portugal & Center' },
    name: {
      pt: 'Óbidos & Alcobaça com Ginjinha e Doces Conventuais',
      en: 'Óbidos & Alcobaça: Ginjinha Liqueur & Monastic Sweets'
    },
    subtitle: {
      pt: 'Muralhas medievais de Óbidos com Ginjinha em chocolate, Mosteiro de Alcobaça e doçaria histórica',
      en: 'Medieval walled town of Óbidos with chocolate Ginjinha, Alcobaça Monastery and convent pastries'
    },
    tagline: { pt: 'Vila Medieval · Mosteiro UNESCO · Ginjinha', en: 'Medieval Town · UNESCO Monastery · Ginjinha' },
    shortDesc: {
      pt: 'Caminhe pelas ruelas floridas e muralhas de Óbidos, deguste Ginjinha no copo de chocolate e emocione-se com o Mosteiro de Alcobaça e a sua doçaria secular.',
      en: 'Stroll the cobblestone alleys of medieval Óbidos, savor sweet Ginjinha in a chocolate cup and marvel at the UNESCO Alcobaça Monastery and royal love story.'
    },
    fullDesc: {
      pt: [
        'Entre na vila medieval de Óbidos através das suas portas decoradas com azulejos e sinta-se a viajar no tempo. Percorra as muralhas do castelo, descubra livrarias históricas e deguste a autêntica Ginjinha servida em copo de chocolate.',
        'Em Alcobaça, visite o grandioso Mosteiro de Santa Maria de Alcobaça (Património Mundial UNESCO), uma das primeiras e mais monumentais construções cistercienses da Europa.',
        'Conheça a história de amor eterno de D. Pedro e Inês de Castro diante dos seus túmulos rendilhados em pedra, terminando com uma degustação dos famosos doces conventuais da região.'
      ],
      en: [
        'Step inside the fairy-tale walled town of Óbidos through tile-adorned medieval gates. Walk the ancient battlements, browse charming artisan shops and savor traditional sour cherry Ginjinha in an edible chocolate cup.',
        'Continue to Alcobaça to visit the monumental Royal Monastery of Santa Maria (UNESCO World Heritage), one of Europe finest Cistercian abbey churches.',
        'Witness the heartbreaking royal love story of King Pedro I and Inês de Castro at their carved limestone tombs, followed by a tasting of delicious centuries-old monastic pastries.'
      ]
    },
    duration: { pt: '10 horas', en: '10 hours' },
    highlights: {
      pt: [
        'Passeio privado pelas muralhas e vila medieval de Óbidos',
        'Prova tradicional de licor de Ginjinha em copo de chocolate',
        'Visita ao Mosteiro de Alcobaça e túmulos de Pedro e Inês (UNESCO)',
        'Degustação de doces conventuais autênticos',
        'Almoço regional completo incluído'
      ],
      en: [
        'Private walking tour through medieval Óbidos and ramparts',
        'Tasting of authentic Ginjinha liqueur in a chocolate cup',
        'Guided tour of Alcobaça Monastery & royal tombs (UNESCO)',
        'Tasting of heritage convent sweets and pastries',
        'Full regional lunch included'
      ]
    },
    included: {
      pt: [
        'Veículo executivo privado com recolha no hotel no Porto',
        'Motorista/guia exclusivo',
        'Entrada no Mosteiro de Alcobaça',
        'Degustação de Ginjinha em Óbidos e doces conventuais',
        'Almoço tradicional regional',
        'Seguros de viagem completos'
      ],
      en: [
        'Private executive vehicle with Porto hotel pickup & return',
        'Dedicated private chauffeur-guide',
        'Admission ticket to Alcobaça Monastery',
        'Ginjinha chocolate cup tasting and convent sweet treats',
        'Traditional regional multi-course lunch',
        'Comprehensive travel insurance'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 560 }, { pax: 2, price: 610 }, { pax: 3, price: 660 }, { pax: 4, price: 710 },
      { pax: 5, price: 760 }, { pax: 6, price: 810 }, { pax: 7, price: 910 }, { pax: 8, price: 960 }
    ],
    startingPrice: 560,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'porto-highlights-ocean',
    code: 'North-010',
    category: 'porto',
    categoryLabel: { pt: 'Porto Experiences', en: 'Porto Experiences' },
    name: {
      pt: 'Porto: Teleférico, Vinho, Almoço & Oceano Atlântico',
      en: 'Porto: Cable Car, Wine Cellars, Lunch & Atlantic Coast'
    },
    subtitle: {
      pt: 'Vistas aéreas no teleférico de Gaia, caves centenárias de Vinho do Porto, almoço e brisa marítima na Foz',
      en: 'Scenic aerial cable car over Douro, historic Port wine lodges, traditional lunch and Atlantic ocean drive'
    },
    tagline: { pt: 'Teleférico de Gaia · Caves do Porto · Foz do Douro', en: 'Cable Car · Port Wine Cellars · Atlantic' },
    shortDesc: {
      pt: 'A experiência definitiva da cidade invicta: vista panorâmica de teleférico sobre o Rio Douro, prova em caves históricas, almoço regional e o encanto do oceano na Foz.',
      en: 'The definitive Porto signature experience: panoramic cable car ride over the Douro, tasting in historic wine lodges, traditional lunch and coastal drive along the Atlantic.'
    },
    fullDesc: {
      pt: [
        'Descubra o Porto e Vila Nova de Gaia de ângulos privilegiados. Comece com uma viagem no Teleférico de Gaia, admirando lá do alto a Ponte Luís I, os barcos rabelos e a monumental Ribeira do Porto.',
        'Visite uma prestigiada cave de Vinho do Porto, descobrindo séculos de maturação em cascos de carvalho com prova guiada de reservas e tawnies excecionais.',
        'Desfrute de um almoço tradicional num restaurante típico antes de seguir num passeio panorâmico à beira-mar até à Foz do Douro e Matosinhos, sentindo a imponência do Oceano Atlântico.'
      ],
      en: [
        'Discover Porto and Gaia from unmatched vantage points. Start with a flight on the Gaia Cable Car, gazing over the iconic Dom Luís I Bridge, rabelo boats and vibrant Ribeira riverfront.',
        'Tour a historic Port wine lodge, exploring vaulted stone cellars filled with massive oak casks followed by an intimate tasting of aged Tawnies and Vintage Port.',
        'Enjoy an authentic regional lunch before continuing along the scenic coastline to Foz do Douro and Matosinhos, feeling the invigorating ocean breeze.'
      ]
    },
    duration: { pt: '8 horas', en: '8 hours' },
    highlights: {
      pt: [
        'Viagem panorâmica no Teleférico de Vila Nova de Gaia',
        'Visita guiada e prova premium em cave de Vinho do Porto',
        'Almoço tradicional do Porto com pratos e vinhos típicos',
        'Passeio cénico pela Foz do Douro e costa marítima atlântica',
        'Condução privada em viatura de luxo com recolha no hotel'
      ],
      en: [
        'Panoramic flight on the Gaia Cable Car above the Douro',
        'Guided tour and premium tasting in renowned Port wine lodge',
        'Authentic multi-course lunch paired with Portuguese wines',
        'Scenic coastal drive through Foz do Douro and seaside avenues',
        'Private luxury vehicle with door-to-door hotel pickup'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Bilhete para o Teleférico de Gaia',
        'Entrada, visita e prova de vinhos em cave de Vinho do Porto',
        'Almoço tradicional completo',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive vehicle with private driver-guide',
        'Gaia Cable Car ticket',
        'Admission, tour and premium wine tasting at historic Port lodge',
        'Full regional lunch with wine',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 420 }, { pax: 2, price: 470 }, { pax: 3, price: 520 }, { pax: 4, price: 570 },
      { pax: 5, price: 620 }, { pax: 6, price: 670 }, { pax: 7, price: 770 }, { pax: 8, price: 820 }
    ],
    startingPrice: 420,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1569959220744-ff553533f492?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'geres-mountain-villages',
    code: 'North-011',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal', en: 'Northern Portugal' },
    name: {
      pt: 'Gerês: Cabras, Queijo Artesanal & Aldeias de Montanha',
      en: 'Gerês: Mountain Goats, Artisanal Cheese & Highland Villages'
    },
    subtitle: {
      pt: 'Parque Nacional da Peneda-Gerês, pastores tradicionais, degustação de queijo e mel, e aldeias de granito',
      en: 'Peneda-Gerês National Park, traditional mountain shepherds, artisanal cheese tasting and stone villages'
    },
    tagline: { pt: 'Parque Nacional Único · Pastores · Natureza', en: 'National Park · Shepherds · Nature' },
    shortDesc: {
      pt: 'Descubra a pureza do único Parque Nacional de Portugal: contacto autêntico com pastores e cabras de montanha, prova de queijo artesanal e aldeias de granito preservadas.',
      en: 'Discover Portugal sole National Park: authentic encounter with mountain shepherds, artisanal cheese tasting and pristine granite heritage villages.'
    },
    fullDesc: {
      pt: [
        'Deixe para trás o litoral e suba ao Parque Nacional da Peneda-Gerês, reserva da biosfera da UNESCO com paisagens de cortar a respiração.',
        'Viva uma experiência genuína no coração das montanhas: encontre-se com pastores locais e o seu rebanho de cabras bravias, aprendendo sobre os modos de vida ancestrais e a transumância.',
        'Visite uma pequena queijaria artesanal familiar para provar queijos curados tradicionais, mel de urze e broa caseira.',
        'Explore aldeias comunitárias com os seus famosos espigueiros de granito e saboreie um almoço serrano reconfortante acompanhado de vinhos da região.'
      ],
      en: [
        'Ascend into the Peneda-Gerês National Park, a UNESCO Biosphere Reserve of untamed granite peaks, crystalline rivers and deep valleys.',
        'Experience an authentic mountain encounter: meet local shepherds and their indigenous goats, discovering ancient pastoral traditions and mountain life.',
        'Tour an artisanal family cheesery to taste handmade cured cheeses, wild heather honey and traditional wood-fired cornbread.',
        'Stroll through communal villages with historic granite grain granaries (espigueiros) and enjoy a hearty mountain lunch with local wines.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Parque Nacional da Peneda-Gerês (único em Portugal)',
        'Contacto direto com pastores tradicionais e rebanhos',
        'Visita a queijaria artesanal com prova de queijos e mel',
        'Aldeias típicas de montanha e espigueiros de granito',
        'Almoço gastronómico de montanha incluído'
      ],
      en: [
        'Peneda-Gerês National Park (Portugal only national park)',
        'Hands-on encounter with traditional mountain shepherds',
        'Artisanal cheesery visit with cheese and local honey tasting',
        'Preserved granite stone villages and historic espigueiros',
        'Hearty traditional mountain lunch with wine included'
      ]
    },
    included: {
      pt: [
        'Transporte executivo privado 4x4 ou van de luxo com motorista/guia',
        'Encontro guiado com pastor e rebanho de montanha',
        'Degustação de queijos artesanais, mel e iguarias locais',
        'Almoço serrano completo em restaurante típico',
        'Recolha e entrega porta a porta no hotel no Porto'
      ],
      en: [
        'Executive private vehicle with specialized nature guide',
        'Guided meet-up with local shepherd and goat flock',
        'Artisanal cheese, raw honey and local delicacy tasting',
        'Full mountain lunch with wine at an authentic village tavern',
        'Door-to-door hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 549 }, { pax: 2, price: 599 }, { pax: 3, price: 649 }, { pax: 4, price: 699 },
      { pax: 5, price: 749 }, { pax: 6, price: 799 }, { pax: 7, price: 899 }, { pax: 8, price: 949 }
    ],
    startingPrice: 549,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'porto-filigree-gourmet',
    code: 'North-012',
    category: 'porto',
    categoryLabel: { pt: 'Porto Experiences', en: 'Porto Experiences' },
    name: {
      pt: 'Porto: Filigrana, Vinho do Porto & Almoço Gourmet',
      en: 'Porto: Portuguese Filigree, Port Wine & Gourmet Lunch'
    },
    subtitle: {
      pt: 'Atelier privado de ourivesaria tradicional, almoço gourmet com harmonização e caves privadas de Gaia',
      en: 'Master goldsmith filigree atelier, sommelier-paired fine dining and VIP tasting in historic Port lodges'
    },
    tagline: { pt: 'Ourivesaria Nobre · Almoço Gourmet · Vinho do Porto', en: 'Goldsmith Art · Fine Dining · Port Wine' },
    shortDesc: {
      pt: 'Um tributo ao artesanato nobre e sofisticação portuense: atelier privado de filigrana portuguesa, almoço de autor e degustação de colheitas especiais.',
      en: 'A celebration of noble Portuguese craftsmanship and luxury: private master filigree workshop, signature gourmet lunch and curated Port wine tasting.'
    },
    fullDesc: {
      pt: [
        'Mergulhe na arte mais preciosa de Portugal: a filigrana em ouro e prata. Visite um atelier familiar privado onde mestres ourives tecem finíssimos fios de metal precioso segundo técnicas que remontam à época romana.',
        'Assista ao vivo à criação de icónicos Corações de Viana e peças de joalharia contemporânea exclusiva.',
        'Em seguida, delicie-se com um almoço gourmet harmonizado por sommelier num dos melhores restaurantes gastronómicos com vista para o Rio Douro.',
        'Conclua a tarde com uma visita VIP privada a uma cave centenária em Gaia com prova de vinhos do Porto Colheita e Vintage raros.'
      ],
      en: [
        'Immerse yourself in Portugal most precious craft: gold and silver filigree. Visit a private family goldsmith workshop where master artisans weave delicate metal threads using techniques dating back to Roman times.',
        'Watch live demonstrations of iconic Viana Hearts and bespoke contemporary fine jewelry being crafted by hand.',
        'Afterwards, savor an exclusive multi-course gourmet lunch paired by a sommelier at a top riverfront dining room.',
        'Conclude with a VIP tasting inside historic vaulted cellars in Gaia, sampling rare Colheita and Vintage Ports.'
      ]
    },
    duration: { pt: '8 horas', en: '8 hours' },
    highlights: {
      pt: [
        'Visita privada exclusiva a atelier de filigrana com mestre ourives',
        'Demonstração prática ao vivo da manufatura de joias',
        'Almoço gourmet de múltiplos pratos com harmonização vínica',
        'Degustação VIP de Vinhos do Porto Vintage e Colheita',
        'Transporte executivo porta a porta a partir do seu hotel'
      ],
      en: [
        'Exclusive private visit to master goldsmith filigree studio',
        'Live hands-on demonstration of authentic jewelry making',
        'Multi-course fine dining gourmet lunch with wine pairings',
        'VIP Port wine tasting featuring rare Vintage and Colheita bottles',
        'Executive door-to-door transportation in Mercedes vehicle'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Entrada e receção privada em oficina mestre de filigrana',
        'Almoço gourmet completo com vinhos selecionados',
        'Visita VIP e degustação comentada em cave histórica',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive private vehicle with dedicated host',
        'Private reception at master filigree atelier',
        'Gourmet lunch with curated wine pairings',
        'VIP historic cellar tour and premium Port tasting',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 460 }, { pax: 2, price: 510 }, { pax: 3, price: 560 }, { pax: 4, price: 610 },
      { pax: 5, price: 660 }, { pax: 6, price: 710 }, { pax: 7, price: 810 }, { pax: 8, price: 860 }
    ],
    startingPrice: 460,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'douro-blind-tasting-blend',
    code: 'North-013',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Douro: Prova às Cegas e Crie o Seu Próprio Vinho do Porto',
      en: 'Douro: Blind Tasting & Blend Your Own Port Wine'
    },
    subtitle: {
      pt: 'Masterclass de enologia, prova às cegas e workshop prático criando a sua garrafa exclusiva de vinho',
      en: 'Winemaker masterclass, blind tasting challenge and hands-on blending workshop with custom bottle'
    },
    tagline: { pt: 'Enólogo por um Dia · Prova às Cegas · Garrafa Única', en: 'Winemaker for a Day · Blind Tasting · Custom Bottle' },
    shortDesc: {
      pt: 'Desafie os seus sentidos numa prova às cegas orientada por enólogo e crie o seu lote exclusivo de Vinho do Porto, engarrafando e rotulando a sua própria garrafa.',
      en: 'Challenge your senses in an enologist-guided blind tasting, then blend your own signature Port wine, corking and labeling your personalized bottle.'
    },
    fullDesc: {
      pt: [
        'Para verdadeiros apreciadores de vinho e mentes curiosas. Esta experiência imersiva começa com uma prova às cegas em sala enológica no Douro: aprenda a identificar castas, aromas, taninos e tempos de envelhecimento sem pistas visuais.',
        'Em seguida, assuma o papel de enólogo: numa bancada de trabalho equipada com provetas e diferentes vinhos de base (Touriga Nacional, Touriga Franca, Tinta Roriz), teste várias proporções até encontrar o seu equilíbrio perfeito.',
        'Engarrafe, rolhe, sele com cera e crie o seu próprio rótulo personalizado para levar para casa uma recordação inesquecível.',
        'O dia inclui almoço regional harmonizado na quinta e paragens panorâmicas pelos miradouros do vale.'
      ],
      en: [
        'Designed for passionate wine lovers and curious palates. This experience begins with a blind tasting in a Douro cellar: detect indigenous grape varieties, complex aromas and age without visual hints.',
        'Next, step into the winemaker shoes: equipped with graduated cylinders and premium base wines, craft several blends until you discover your ideal sensory harmony.',
        'Cork your creation, seal it with traditional wax and handcraft your own personalized label to take home an irreplaceable bottle.',
        'Enjoy an authentic regional wine-paired lunch at the estate terrace with panoramic valley views.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Prova às cegas interativa conduzida por enólogo profissional',
        'Workshop prático de loteamento / blending de Vinho do Porto',
        'Engarrafe, rolhe e rotule a sua própria garrafa personalizada',
        'Almoço regional completo na quinta com harmonização vínica',
        'Transporte executivo privado porta a porta'
      ],
      en: [
        'Interactive blind tasting led by a professional enologist',
        'Hands-on winemaking and Port wine blending workshop',
        'Cork, seal and label your own custom take-home bottle',
        'Full regional lunch at the quinta with paired wines',
        'Executive door-to-door private transportation'
      ]
    },
    included: {
      pt: [
        'Transporte privado executivo climatizado',
        'Motorista/guia bilingue wine master',
        'Masterclass de enologia e prova às cegas',
        'Workshop de criação de vinho com todos os materiais',
        '1 garrafa personalizada de vinho por pessoa para levar',
        'Almoço tradicional duriense completo',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Private air-conditioned executive vehicle',
        'Bilingual certified wine-master chauffeur',
        'Enology masterclass and guided blind tasting',
        'Blending workshop materials and base wines',
        '1 personalized hand-crafted bottle per person to take home',
        'Full traditional regional lunch with wines',
        'Direct hotel pickup and return in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 640 }, { pax: 2, price: 690 }, { pax: 3, price: 740 }, { pax: 4, price: 790 },
      { pax: 5, price: 840 }, { pax: 6, price: 890 }, { pax: 7, price: 990 }, { pax: 8, price: 1040 }
    ],
    startingPrice: 640,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/cinematic-style-couple-vineyard.jpg',
    gallery: ['/images/cinematic-style-couple-vineyard.jpg', '/images/douro-premium.jpg']
  },
  {
    id: 'nazare-sao-martinho',
    code: 'North-014',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal & Costa', en: 'Northern Portugal & Coast' },
    name: {
      pt: 'Nazaré & São Martinho: Ondas Gigantes & Sabores do Atlântico',
      en: 'Nazaré & São Martinho: Giant Waves & Atlantic Flavors'
    },
    subtitle: {
      pt: 'Forte de São Miguel e as ondas gigantes do Canhão da Nazaré, baía de São Martinho e marisco fresco',
      en: 'Cliffside São Miguel fort and giant wave lookout, tranquil shell bay of São Martinho and fresh seafood'
    },
    tagline: { pt: 'Ondas Gigantes · Canhão da Nazaré · Marisco', en: 'Giant Waves · Nazaré Canyon · Seafood' },
    shortDesc: {
      pt: 'Sinta a força colossal do Atlântico no Sítio da Nazaré e relaxe na tranquila baía de São Martinho do Porto, saboreando um almoço inesquecível de peixe e marisco fresco.',
      en: 'Witness the immense power of the Atlantic at Nazaré cliff edge and unwind in the calm natural bay of São Martinho do Porto, enjoying fresh seafood by the sea.'
    },
    fullDesc: {
      pt: [
        'Visite o mítico Sítio da Nazaré e o Forte de São Miguel Arcanjo, debruçado sobre a falésia com vista para o lendário Canhão da Nazaré — onde se formam as maiores ondas do planeta surfadas por atletas mundiais.',
        'Conheça as tradições piscatórias das mulheres das sete saias e o peixe seco nas praias da Nazaré.',
        'Em seguida, dirija-se à idílica baía de São Martinho do Porto, uma baía natural em forma de concha protegida das correntes atlânticas.',
        'Desfrute de um almoço gastronómico com peixe fresco acabado de pescar, mariscos da costa e vinhos brancos portugueses bem frescos.'
      ],
      en: [
        'Visit the iconic Sítio da Nazaré and the 16th-century São Miguel Arcanjo Fort perched over cliffs where the underwater Nazaré Canyon creates the world largest surfed waves.',
        'Discover traditional fishing customs and the heritage of the Nazaré women with their layered skirts drying cod on open sands.',
        'Continue to picturesque São Martinho do Porto, a rare shell-shaped natural lagoon lined with fine golden sand.',
        'Savor an exceptional seaside lunch of grilled fresh catch, Atlantic shellfish and crisp Portuguese white wines.'
      ]
    },
    duration: { pt: '10 horas', en: '10 hours' },
    highlights: {
      pt: [
        'Forte de São Miguel Arcanjo e miradouro do Canhão da Nazaré',
        'Visita ao museu do surf e pranchas das maiores ondas do mundo',
        'Passeio pela praia tradicional e centro histórico da Nazaré',
        'Baía natural em concha de São Martinho do Porto',
        'Almoço de peixe fresco e marisco à beira-mar incluído'
      ],
      en: [
        'Fort of São Miguel Arcanjo and Nazaré Canyon world-record wave lookout',
        'Surf museum showcasing big-wave boards ridden by world champions',
        'Stroll along Nazaré beach and historic fishermen village',
        'Serene shell-shaped bay of São Martinho do Porto',
        'Seaside lunch featuring fresh Atlantic catch and seafood'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Entrada no Forte de São Miguel Arcanjo',
        'Almoço de marisco ou peixe fresco com vinhos',
        'Tempo livre na praia de São Martinho do Porto',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive vehicle with private driver-guide',
        'Admission to São Miguel Arcanjo Fort',
        'Fresh seafood or fish lunch paired with wine',
        'Free time at São Martinho do Porto beach',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 550 }, { pax: 2, price: 600 }, { pax: 3, price: 650 }, { pax: 4, price: 700 },
      { pax: 5, price: 750 }, { pax: 6, price: 800 }, { pax: 7, price: 900 }, { pax: 8, price: 950 }
    ],
    startingPrice: 550,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'arouca-santa-maria-feira',
    code: 'North-015',
    category: 'north',
    categoryLabel: { pt: 'Northern Portugal', en: 'Northern Portugal' },
    name: {
      pt: 'Arouca e Santa Maria da Feira: Mosteiro, Castelo e Fogaça',
      en: 'Arouca & Santa Maria da Feira: Monastery, Castle & Fogaça'
    },
    subtitle: {
      pt: 'Castelo medieval da Feira, fogaça quente tradicional, Mosteiro de Arouca e montanhas do Geopark UNESCO',
      en: 'Fairytale medieval castle, warm traditional fogaça sweetbread, colossal Arouca Monastery and Geopark'
    },
    tagline: { pt: 'Castelo Medieval · Arouca Geopark · Doçaria Nobre', en: 'Medieval Castle · Arouca Geopark · Heritage' },
    shortDesc: {
      pt: 'Explore um dos castelos medievais mais preservados da Península Ibérica, saboreie a tradicional fogaça quente e descubra o imponente Mosteiro de Arouca e as montanhas do Geopark.',
      en: 'Explore one of Iberia best-preserved medieval castles, taste warm traditional fogaça bread and discover monumental Arouca Monastery amidst UNESCO Geopark mountains.'
    },
    fullDesc: {
      pt: [
        'Comece em Santa Maria da Feira, visitando o seu icónico Castelo com quatro torreões góticos cónicos — considerado um dos mais belos exemplares de arquitetura militar medieval em Portugal.',
        'Visite uma padaria artesanal e saboreie a fogaça da Feira ainda quente, pão doce conventual com séculos de história.',
        'Siga para Arouca, aninhada no UNESCO Arouca Geopark. Visite o monumental Mosteiro de Santa Maria de Arouca, os seus tesouros sacros e o museu de arte religiosa da Rainha Santa Mafalda.',
        'Desfrute de um almoço com a famosa carne arouquesa DOC e vinhos regionais.'
      ],
      en: [
        'Begin in Santa Maria da Feira, exploring its iconic medieval castle with four conical turrets — widely hailed as one of Portugal most picturesque fortresses.',
        'Stop at a traditional bakery to taste warm fogaça, a centuries-old sweet bread honoring Saint Sebastian.',
        'Head into the mountainous landscapes of Arouca UNESCO Global Geopark to tour the colossal Monastery of Santa Maria de Arouca and its sacred art collections.',
        'Savor a regional lunch featuring acclaimed certified Arouquesa beef paired with local wines.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Castelo medieval de Santa Maria da Feira e muralhas',
        'Degustação de Fogaça tradicional acabada de cozer',
        'Visita guiada ao Mosteiro de Arouca e arte sacra',
        'Paisagens montanhosas do Arouca Geopark (UNESCO)',
        'Almoço gastronómico de vitela arouquesa incluído'
      ],
      en: [
        'Medieval Castle of Santa Maria da Feira and battlements',
        'Tasting of warm traditional handmade fogaça sweetbread',
        'Guided tour of the colossal Arouca Monastery',
        'Mountain vistas of UNESCO Arouca Geopark',
        'Gourmet lunch featuring prized Arouquesa beef with wine'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia exclusivo',
        'Entrada no Castelo da Feira e Mosteiro de Arouca',
        'Prova de fogaça tradicional',
        'Almoço regional completo',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive vehicle with private chauffeur-guide',
        'Admission to Santa Maria da Feira Castle & Arouca Monastery',
        'Traditional warm fogaça tasting',
        'Full regional lunch with wine',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 510 }, { pax: 2, price: 560 }, { pax: 3, price: 610 }, { pax: 4, price: 660 },
      { pax: 5, price: 710 }, { pax: 6, price: 760 }, { pax: 7, price: 860 }, { pax: 8, price: 910 }
    ],
    startingPrice: 510,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80']
  },
  {
    id: 'historic-quinta-bucheiro-douro',
    code: 'North-016',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Douro Autêntico: Quinta Histórica do Bucheiro, Almoço, Cruzeiro & Vinhos',
      en: 'Authentic Douro: Historic Quinta do Bucheiro, Lunch, Cruise & Wine'
    },
    subtitle: {
      pt: 'Imersão autêntica numa quinta centenária familiar, almoço caseiro duriense, vinhos raros e cruzeiro',
      en: 'Authentic family immersion at centennial Quinta do Bucheiro, home-cooked regional feast and river cruise'
    },
    tagline: { pt: 'Quinta Centenária · Vinhos Raros · Cruzeiro', en: 'Centennial Quinta · Rare Vintages · Cruise' },
    shortDesc: {
      pt: 'Uma viagem íntima ao Douro profundo: receção calorosa na centenária Quinta do Bucheiro, almoço tradicional confeccionado pela família com vinhos da casa e passeio de barco no rio.',
      en: 'An intimate journey into the authentic Douro: warm reception at centennial Quinta do Bucheiro, home-style paired lunch prepared by the family and scenic river cruise.'
    },
    fullDesc: {
      pt: [
        'Longe das multidões turísticas, descubra a alma autêntica do Douro na secular Quinta do Bucheiro. Conheça a família proprietária que há gerações cuida destas vinhas e preserva os métodos tradicionais de vinificação.',
        'Caminhe entre as vinhas antigas, visite os lagares de granito e a adega histórica com prova comentada de vinhos da propriedade.',
        'Desfrute de um almoço caseiro confeccionado com produtos da horta e receitas de família, harmonizado generosamente com os vinhos tintos, brancos e Porto da quinta.',
        'Conclua a sua viagem com um cruzeiro relaxante pelas águas calmas do Rio Douro.'
      ],
      en: [
        'Far from commercial crowds, uncover the authentic soul of the Douro at historic Quinta do Bucheiro. Meet the family who has nurtured these vines for generations.',
        'Walk through heritage vineyards, tour ancient granite lagares (treading tanks) and historic cellars with commented tastings of estate-grown wines.',
        'Savor a generous family-style lunch prepared with estate produce and cherished recipes, harmoniously paired with the quinta red, white and Port wines.',
        'Complete your day with a peaceful river cruise through the Douro grandest canyon scenery.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Visita exclusiva e intimista à centenária Quinta do Bucheiro',
        'Receção pelos proprietários e visita aos lagares tradicionais',
        'Almoço caseiro autêntico duriense com vinhos da quinta',
        'Cruzeiro panorâmico pelo Rio Douro',
        'Experiência 100% privada com veículo executivo'
      ],
      en: [
        'Exclusive intimate tour of the centennial Quinta do Bucheiro',
        'Private welcome by estate owners and traditional stone cellar tour',
        'Hearty homemade regional feast paired with estate wines',
        'Scenic panoramic Douro river cruise',
        '100% private door-to-door luxury transport'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia exclusivo',
        'Visita completa à Quinta do Bucheiro e prova de vinhos',
        'Almoço tradicional caseiro duriense com vinhos ilimitados',
        'Cruzeiro de 1 hora no Rio Douro',
        'Recolha e entrega no hotel no Porto'
      ],
      en: [
        'Executive private vehicle with dedicated driver-guide',
        'Comprehensive Quinta do Bucheiro tour and wine tasting',
        'Traditional homemade multi-course lunch with estate wines',
        '1-hour Douro River cruise',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 560 }, { pax: 2, price: 610 }, { pax: 3, price: 660 }, { pax: 4, price: 710 },
      { pax: 5, price: 760 }, { pax: 6, price: 810 }, { pax: 7, price: 910 }, { pax: 8, price: 960 }
    ],
    startingPrice: 560,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/northe_experience_square.jpg',
    gallery: ['/images/northe_experience_square.jpg', '/images/douro_boat_tour_1771612994491.png']
  },
  {
    id: 'douro-luxury-picnic',
    code: 'North-017',
    category: 'douro',
    categoryLabel: { pt: 'Douro Valley', en: 'Douro Valley' },
    name: {
      pt: 'Um Dia a Dois no Douro: Piquenique, Cruzeiro & Vinhos',
      en: 'A Day for Two in the Douro: Luxury Picnic, Cruise & Wine'
    },
    subtitle: {
      pt: 'Piquenique privado de luxo montado nos socalcos das vinhas, cruzeiro a dois no rio e degustação exclusiva',
      en: 'Private luxury vineyard picnic perched above the Douro river, intimate boat cruise and cellar wine tasting'
    },
    tagline: { pt: 'Romance nas Vinhas · Piquenique de Luxo · Barco Privado', en: 'Romantic Romance · Luxury Picnic · Private Cruise' },
    shortDesc: {
      pt: 'O romance absoluto no Douro: piquenique gourmet montado privadamente nos socalcos, cruzeiro a dois pelo rio e visita a adega com prova de vinhos raros.',
      en: 'The quintessential romantic escape in the Douro: private luxury gourmet picnic set among hillside vines, couple river cruise and cellar wine tasting.'
    },
    fullDesc: {
      pt: [
        'Concebido para casais apaixonados, pedidos de casamento, luas-de-mel e aniversários inesquecíveis.',
        'Chegue ao Douro em veículo executivo de luxo com total privacidade. Numa quinta de referência, será instalado um piquenique de luxo num terraço isolado com vista deslumbrante sobre os socalcos e o rio.',
        'Deguste iguarias preparadas pelo chef: queijos artesanais, compotas caseiras, pães quentes, saladas frescas, fruta da época e vinhos premiados com espumante gelado.',
        'À tarde, desfrute de um cruzeiro privado pelo Rio Douro ao sabor de uma taça de vinho e da luz dourada do entardecer.'
      ],
      en: [
        'Crafted specifically for couples seeking intimacy — marriage proposals, honeymoons or milestone anniversaries.',
        'Arrive in the Douro in an executive private vehicle. At a premier quinta, a romantic luxury picnic is laid out exclusively for you on a panoramic terrace overlooking the river.',
        'Feast on chef-prepared delicacies: artisanal cheeses, local charcuterie, fresh breads, salads, seasonal fruits and chilled sparkling and reserve Douro wines.',
        'Later, step aboard a scenic river cruise to toast each other as the warm golden sun sets behind the hills.'
      ]
    },
    duration: { pt: '9 horas', en: '9 hours' },
    highlights: {
      pt: [
        'Piquenique de luxo privado montado exclusivamente para si entre as vinhas',
        'Degustação gourmet de queijos, presuntos nobres e espumante',
        'Passeio de barco pelo Rio Douro com brinde a bordo',
        'Visita privada a quinta vinícola com prova comentada',
        'Possibilidade de adicionar fotógrafo profissional para registar o dia'
      ],
      en: [
        'Private luxury picnic set exclusively for you among hillside vineyards',
        'Gourmet tasting of fine cheeses, cured Iberian meats and sparkling wine',
        'Panoramic cruise on the Douro River with toast on board',
        'Private cellar tour with guided reserve wine tasting',
        'Optional professional photographer upgrade to capture your memories'
      ]
    },
    included: {
      pt: [
        'Transporte executivo com motorista/guia privado',
        'Montagem de piquenique de luxo com toalhas, almofadas e decoração',
        'Menu gastronómico gourmet completo com espumante e vinhos DOC',
        'Passeio de barco no Rio Douro',
        'Visita e prova guiada em quinta selecionada',
        'Recolha e entrega porta a porta no hotel no Porto'
      ],
      en: [
        'Executive private vehicle with dedicated chauffeur',
        'Luxury picnic setup with blankets, cushions and elegant decor',
        'Chef-prepared gourmet menu with chilled sparkling and DOC wines',
        'Douro River cruise',
        'Private guided cellar tour and wine tasting',
        'Hotel pickup and drop-off in Porto'
      ]
    },
    pricingTiers: [
      { pax: 1, price: 620 }, { pax: 2, price: 670 }, { pax: 3, price: 720 }, { pax: 4, price: 770 },
      { pax: 5, price: 820 }, { pax: 6, price: 870 }, { pax: 7, price: 970 }, { pax: 8, price: 1020 }
    ],
    startingPrice: 620,
    gygVerified: true,
    gygUrl: 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/',
    image: '/images/novo-picnic.jpg',
    gallery: ['/images/novo-picnic.jpg', '/images/douro_boat_tour_1771612994491.png']
  }
];

export function getTourBySlug(slug: string): TourItem | undefined {
  return ALL_17_TOURS.find((t) => t.id === slug);
}

export function getToursByCategory(cat: 'douro' | 'north' | 'porto' | 'all'): TourItem[] {
  if (cat === 'all') return ALL_17_TOURS;
  return ALL_17_TOURS.filter((t) => t.category === cat);
}
