export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';

export const WHATSAPP_NUMBER = '351911923499';
export const WHATSAPP_MESSAGE = 'Olá North Scape Tours! Gostaria de mais informações sobre os vossos tours no Douro.';
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const EMAIL = 'manager@northscapetours.pt';
export const FACEBOOK_PAGE = 'https://www.facebook.com/profile.php?id=61583598036171';
export const TIKTOK_PAGE = 'https://www.tiktok.com/@north.scape.tours';
export const YOUTUBE_PAGE = 'https://www.youtube.com/@NorthScapeTours';
export const GETYOURGUIDE_LINK = 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/';

export const CONTENT = {
    pt: {
        nav: {
            home: 'Início', tours: 'Tours',
            transfer: 'Transfer', about: 'Sobre Nós', reviews: 'Avaliações',
            blog: 'Blog', contact: 'Contacto', book: 'Reservar', bookNow: 'Reservar Agora',
        },
        hero: {
            subtitle: 'Experiências Exclusivas no Norte de Portugal',
            title1: 'Experiências exclusivas no Douro',
            title2: 'com degustação de vinhos e passeio de barco.',
            desc: 'Saídas do Porto com transfer confortável e atendimento personalizado.',
            cta: 'Ver Experiências',
            ctaWhatsapp: 'Falar via WhatsApp',
            trustLine: 'Serviço licenciado · Cancelamento gratuito até 48h · Guias trilíngues',
        },
        quote: {
            text1: '"O Douro não é uma paisagem,',
            text2: 'é um poema geológico."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'Experiências no Rio',
            title: 'Tours & Preços',
            subtitle: 'Três experiências exclusivas a bordo, desenhadas para o entardecer mágico do Douro.',
            discount: 'Desconto de 20% para crianças (0-8 anos)',
            labels: {
                private: 'Barco Privado',
                shared: 'Barco Compartilhado',
                extra: 'Pessoa Extra',
                perPersonLabel: 'Por Pessoa',
                book: 'Reservar',
                whatsapp: 'WhatsApp',
            },
            items: [
                {
                    id: 'picnic-sunset',
                    name: 'Piquenique de luxo, barco e comboio',
                    tagline: 'A bordo · Pôr do sol',
                    image: '/images/novo-picnic.jpg',
                    bullets: [
                        'Experiência 100% privada sem grupos',
                        'Transporte executivo com motorista-guia especialista em vinhos',
                        'Piquenique de luxo em vínicola selecionada',
                        'Passeio de barco no Rio Douro (privado ou em pequeno grupo)',
                        'Visita a quinta com prova de vinhos e degustação de mel e azeite regionais',
                        'Percurso panorâmico de comboio no Vale do Douro',
                    ],
                    pricePrivate: 1000,
                    priceShared: 900,
                    priceExtra: 150,
                    capacityLabel: 'Até 4 pessoas',
                },
                {
                    id: 'golden-hour',
                    name: 'Douro Golden Hour',
                    subtitle: 'Cruzeiro privado, almoço e degustação de vinhos.',
                    tagline: 'Hora mágica · Luz cinematográfica',
                    bullets: [
                        'Experiência 100% privada sem grupos',
                        'Transporte executivo com motorista-guia especialista em vinhos',
                        'Percurso cénico pelo Vale do Douro (inclui troços da N222)',
                        'Almoço gastronómico em restaurante com Chef estrela Michelin, com harmonização vínica',
                        'Cruzeiro no rio douro (privado ou em pequeno grupo) ao final do dia',
                        'Prova de vinhos numa vínicola de referência com vista sobre o vale',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Até 4 pessoas',
                },
                {
                    id: 'douro-premium',
                    name: 'Douro Premium',
                    subtitle: 'Wine master, Almoço, Cruzeiro e Comboio.',
                    tagline: 'Assinatura · Grupo reduzido',
                    image: '/images/douro-premium.jpg',
                    bullets: [
                        'Acompanhamento de Wine master especialista em vinhos do Douro',
                        'Almoço tradicional com harmonização vínica',
                        'Visita a quintas selecionadas com prova de vinhos e degustação de azeite, mel e queijos regionais',
                        'Cruzeiro panorâmico de luxo no Rio Douro',
                        'Passeio de comboio com vista sobre o vale',
                    ],
                    perPerson: 180,
                    capacityLabel: 'Pequeno grupo até 8 pessoas',
                },
            ],
        },
        transfer: {
            badge: 'Serviço Premium',
            title: 'Transfer Executivo no Porto',
            subtitle: 'Conforto, Pontualidade e Excelência em Cada Detalhe',
            intro: 'Oferecemos serviço de transfer executivo privado no Porto, com recolha e entrega no hotel, residência ou no Aeroporto Francisco Sá Carneiro. Um serviço pensado para viajantes exigentes.',
            features: [
                { title: 'Pontualidade e Planeamento Premium', items: ['O seu tempo é valioso.', 'Monitorização de voo em tempo real', 'Motorista no local antes do horário', 'Tempo de espera incluído na chegada'] },
                { title: 'Viatura Exectiva até 8 Passageiros', items: ['Interior confortável, silencioso e espaçoso', 'Amplo espaço para bagagem', 'Ar condicionado', 'Ideal para famílias ou executivos'] },
                { title: 'Segurança e Excelência', items: ['Motoristas experientes e trilíngues', 'Cadeirinha de bebé (mediante pedido)', 'Serviço totalmente licenciado e seguro'] },
            ],
            services: [
                { title: 'Transfer Aeroporto \u2192 Hotel', desc: 'Acompanhamento do voo, receção na área de chegadas, assistência total com a bagagem e transporte direto ao seu destino.' },
                { title: 'Transfer Hotel \u2192 Aeroporto', desc: 'Recolha pontual no hotel ou alojamento com planeamento adequado para garantir a chegada atempada ao aeroporto.' },
            ],
            price: '45',
            priceLabel: 'A partir de',
            priceUnit: '€/transfer',
            ctaBook: 'Solicitar Cotação Personalizada',
            ctaWhatsapp: 'Reservar via WhatsApp',
        },
        about: {
            badge: 'Sobre Nós',
            title: 'Além do Horizonte: A Essência da North Scape Tours',
            paragraphs: [
                'Na North Scape Tours, acreditamos que o luxo não se define pelo que se vê, mas pelo que se sente. Nascemos da paixão por revelar o Douro invisível - aquele que não aparece nos mapas turísticos, mas que pulsa nas quintas privadas, no silêncio das águas ao entardecer e nos sabores de uma cozinha que honra a terra.',
                'A nossa missão é desenhar experiências, não apenas trajetos. Cada detalhe, desde o conforto dos nossos veículos executivos à escolha meticulosa de parceiros com Estrela Michelin, é pensado para quem valoriza o tempo, a privacidade e a autenticidade.',
                'Não somos apenas guias; somos contadores de histórias e facilitadores de momentos. No banco de trás da nossa exclusividade, o Douro deixa de ser um destino para passar a ser uma memória eterna.',
                'Bem-vindo ao Douro, no seu ritmo. Bem-vindo à North Scape.',
            ],
            signature: 'North Scape Tours',
            imageAlt: 'Vale do Douro envolto em névoa matinal',
        },
        reviews: {
            badge: 'Avaliações',
            title: 'O Que Dizem os Nossos Clientes',
            subtitle: 'Cada review é uma história real de quem viveu a experiência.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'Uma experiência que transcende o turismo. Sentimo-nos como convidados de honra numa das regiões mais belas do mundo. O guia foi excepcional e a atenção ao detalhe impressionante.', author: 'Sofia Albuquerque', location: 'Lisboa, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'Um dia mágico no Douro. O guia foi excelente, os vinhos soberbos e o almoço delicioso. Recomendo vivamente!', author: 'Marie Dubois', location: 'Paris, França', flag: '🇫🇷', stars: 4.5 },
                { text: 'Melhor experiência de sempre no Douro! O passeio de barco ao pôr do sol foi inesquecível.', author: 'Carlos Mendes', location: 'São Paulo, Brasil', flag: '🇧🇷', stars: 5 },
                { text: 'Um dia perfeito! A prova de vinhos foi de alto nível e a paisagem é de cortar a respiração.', author: 'Hannah Müller', location: 'Munique, Alemanha', flag: '🇩🇪', stars: 4.8 },
                { text: 'Celebrámos o nosso aniversário com a North Scape e foi o ponto alto da nossa viagem. Luxo real.', author: 'Michael & Sarah Chen', location: 'Nova Iorque, EUA', flag: '🇺🇸', stars: 5 },
                { text: 'O guia sabia tudo sobre a história da região. Uma viagem imperdível para amantes de vinho.', author: 'Alessandro Rossi', location: 'Milão, Itália', flag: '🇮🇹', stars: 4.5 },
                { text: 'Transfer impecável e tour ainda melhor. Serviço de primeira classe do início ao fim.', author: 'Lucía Fernández', location: 'Madrid, Espanha', flag: '🇪🇸', stars: 5 },
                { text: 'Incrível! O Douro é mágico e a equipa da North Scape tornou tudo mais especial.', author: 'Daan van der Berg', location: 'Amesterdão, Holanda', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Tudo o que precisa de saber',
            items: [
                { q: 'Quais os 3 tours no Douro e o que muda em cada um?', a: 'Oferecemos 3 tours distintos: o mais simples inclui visita a 1 quinta com almoço, passeio de barco, prova de vinhos e comboio panorâmico. Todos acompanhados por guia trilíngue.' },
                { q: 'Quanto tempo dura a experiência?', a: 'O Douro Tour é uma experiência de dia inteiro, entre 8 a 9 horas.' },
                { q: 'É adequado para famílias com crianças?', a: 'Sim! Temos cadeirinhas e menus infantis disponíveis nos restaurantes parceiros.' },
                { q: 'Posso personalizar a experiência?', a: 'Sim, somos especialistas em tours privados à medida.' },
                { q: 'Pode-se cancelar a reserva?', a: 'Cancelamento gratuito até 48 horas antes da data do tour.' },
                { q: 'Existem opções vegetarianas?', a: 'Sim, todos os nossos restaurantes parceiros oferecem alternativas vegetarianas e vegans.' },
                { q: 'Os tours funcionam todo o ano?', a: 'Sim, cada estação no Douro tem o seu encanto único.' },
                { q: 'Como funciona o transfer executivo?', a: 'Motorista privado com monitorização de voo em tempo real.' },
                { q: 'Em que línguas estão disponíveis os tours?', a: 'Português e Inglês são garantidos. Outras línguas sob consulta.' },
                { q: 'Como posso reservar?', a: 'Diretamente pelo site, WhatsApp ou e-mail.' },
            ],
        },
        blog: {
            badge: 'Jornal',
            title: 'Diário do Douro',
            subtitle: 'Notícias, segredos e as últimas do enoturismo em Portugal.',
            readMore: 'Ler História',
            bookCta: 'Reservar esta experiência',
            readTimeDefault: '3 min de leitura',
            items: [
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"O Melhor Vinho do Ano" é um tinto do Douro', excerpt: 'O prestigiado prémio foi para um vinho do Douro que custa 75 euros, reafirmando a qualidade excecional da região.', date: '13 de Maio de 2026', category: 'Prémios', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de leitura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'A crítica especializada voltou a premiar a excelência do Douro. O título de "Melhor Vinho do Ano" foi atribuído a um tinto duriense, uma distinção que reforça o prestígio internacional da mais antiga região demarcada do mundo.' },
                        { type: 'p', text: 'Na North Scape Tours, proporcionamos aos nossos clientes degustações premium que incluem colheitas premiadas nas melhores quintas da região. Venha provar a excelência connosco.' }
                    ]
                },
                {
                    slug: 'napa-valley-para-o-douro', title: 'De Napa Valley para o Douro: Investimento de 10 milhões em Enoturismo', excerpt: 'Um empresário norte-americano escolheu o Douro para um projeto de luxo focado em vinhos e turismo.', date: '16 de Março de 2026', category: 'Notícias', image: '/images/blog/2026/quinta-estate.jpg', readTime: '4 min de leitura', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'O Douro continua a atrair os maiores investidores mundiais. Recentemente, um empresário de Napa Valley, na Califórnia, investiu cerca de 10 milhões de euros num novo projeto de vinhos e turismo na região.' },
                        { type: 'p', text: 'Este investimento milionário é a prova de que o Douro Vinhateiro é um destino de eleição global para o enoturismo de luxo, rivalizando com as mais famosas regiões vinícolas do mundo.' }
                    ]
                },
                {
                    slug: 'cimeira-mundial-enoturismo', title: 'Portugal recebe a Cimeira Mundial de Enoturismo', excerpt: 'O nosso país reforça a sua posição de liderança ao acolher o maior evento global dedicado ao turismo de vinhos.', date: '11 de Maio de 2026', category: 'Eventos', image: '/images/blog/2026/gastronomy.jpg', readTime: '3 min de leitura', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Portugal continua a fazer história no turismo mundial. O país foi escolhido para sediar a Cimeira Mundial de Enoturismo, um marco que sublinha a nossa dedicação à cultura do vinho e à hospitalidade de excelência.' },
                        { type: 'p', text: 'Sendo o Douro a principal montra do enoturismo nacional, celebramos este reconhecimento global e continuamos empenhados em oferecer experiências inesquecíveis.' }
                    ]
                },
                {
                    slug: 'quinta-renasce-experiencias', title: 'Experiências Sensoriais "Pés na Terra" nas Quintas', excerpt: 'O enoturismo em Portugal está a evoluir para experiências imersivas, onde o visitante interage diretamente com a terra e o vinho.', date: '6 de Abril de 2026', category: 'Tendências', image: '/images/blog/2026/harvest.jpg', readTime: '4 min de leitura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'A tendência atual no enoturismo é a autenticidade. Os visitantes já não procuram apenas provar o vinho, mas sim compreender o terroir, participar nas vindimas e desfrutar de experiências "pés na terra".' },
                        { type: 'p', text: 'As nossas tours à medida no Douro são desenhadas exatamente com esse propósito: conectar os nossos clientes com a verdadeira essência da cultura e tradição portuguesas.' }
                    ]
                }
            ]
        },
        contact: {
            title: 'Pronto para embarcar?',
            desc: 'Deixe-nos desenhar a sua viagem de sonho. Respondemos em menos de 2 horas.',
            ctaBook: 'Reservar Experiência', ctaWhatsapp: 'Falar via WhatsApp',
            emailLabel: 'E-mail', email: EMAIL,
            phoneLabel: 'Telefone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Experiências à Medida',
            title: 'Portugal. Your Way.',
            subtitle: 'Viagens privadas ao seu ritmo.',
            desc: 'Podemos personalizar a sua viagem privada pelo Norte de Portugal, com la opção de estender a sua experiência até Lisboa.',
            collection: 'North Premium Collection',
            collectionDesc: 'Experiências exclusivas nos destinos mais icónicos do norte de Portugal.',
            destinations: ['Amarante', 'Braga', 'Gerês', 'Guimarães', 'Porto', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisboa'],
            cta: 'Contacte-nos para Personalizar',
        },
        footer: {
            rights: 'Todos os direitos reservados.',
            terms: 'Termos e Condições', privacy: 'Política de Privacidade',
            licensedIn: 'Serviço licenciado em Portugal · RNAAT 284/2026',
            nif: 'NIPC: 518 190 145',
            complaints: 'Livro de Reclamações Eletrónico'
        },
        cookieBanner: {
            text: 'Utilizamos cookies para lhe proporcionar a melhor experiência possível. Ao continuar, consideramos que concorda com a nossa',
            linkText: 'Política de Privacidade',
            acceptBtn: 'Aceitar Todos',
            essentialBtn: 'Apenas Essenciais',
        },
        mobileBar: { book: 'Reservar', whatsapp: 'WhatsApp' },
        privacy: {
            title: 'Política de Privacidade',
            back: 'Voltar',
            sections: [
                { title: '1. Identificação do Responsável de Tratamento', content: 'A entidade responsável pelo tratamento de dados é a "North Scape Tours" (NIPC: 518 190 145), com sede em Portugal. Comprometemo-nos com a proteção de dados pessoais, cumprindo estritamente as normativas do RGPD Europeu (Regulamento de Proteção de Dados de Caráter Pessoal).' },
                { title: '2. Recolha e Finalidade', content: 'Não dispomos de formulários de venda diretos. Os dados fornecidos aquando de reservas ou contacto via e-mail e WhatsApp (nome completo, número de telemóvel, preferências dietéticas) servem o exclusivo propósito de organizar as logísticas do tour de forma 100% personalizada por cliente.' },
                { title: '3. Partilha Externa', content: 'Alguns dados essenciais poderão ser comunicados apenas aos parceiros logísticos (Quintas e Restaurantes) sob o critério de intolerâncias/alergias alimentares ou adaptações de viaturas.' },
                { title: '4. Política de Cookies', content: 'O Website usa tecnologia Cookie, exclusivamente com propósito técnico e analítico (Google Analytics) para entendermos o perfil do nosso visitante. Na primeira visita, foi inquirido do seu consentimento explícito em concordância com a Diretiva CE/PE de proteção da e-Privacy. Pode remover este consentimento ou apagar o histórico de sessão no seu Web Browser a qualquer tempo.' },
                { title: '5. Retenção e Direitos', content: 'Mantemos a informação de clientes apenas durante o tempo útil do serviço ou mandato tributário de faturação obrigatório. O cliente tem direito de pedir Acesso, Portabilidade ou Apagamento.' },
            ]
        },
        terms: {
            title: 'Termos e Condições',
            back: 'Voltar',
            sections: [
                { title: '1. Âmbito e Objeto', content: 'Estes Termos e Condições aplicam-se a todos os serviços prestados pela North Scape Tours. Ao reservar connosco, o cliente declara conhecer e aceitar estas normas.' },
                { title: '2. Reservas e Pagamentos', content: 'As reservas tornam-se efetivas após confirmação escrita por parte da North Scape Tours. Os pagamentos são realizados conforme o método acordado no momento da reserva.' },
                { title: '3. Política de Cancelamento', content: 'Cancelamento gratuito até 48 horas antes da data do tour. Após este período, será cobrado o valor total da reserva devido aos compromissos assumidos com parceiros locais.' },
                { title: '4. Responsabilidade', content: 'A North Scape Tours detém todos os seguros obrigatórios por lei (Acidentes Pessoais e Responsabilidade Civil). Não nos responsabilizamos por perdas de bens pessoais durante as atividades.' },
                { title: '5. Jurisdição', content: 'Para a resolução de qualquer litígio, é competente o tribunal da comarca do Porto, com renúncia a qualquer outro.' },
            ]
        },
        common: {
            back: 'Voltar',
            backHome: 'Voltar ao início',
            notFound: 'Artigo não encontrado',
            enjoyed: 'Gostou deste artigo?',
            enjoyedDesc: 'Descubra estas paisagens ao vivo connosco, numa experiência totalmente exclusiva e desenhada à sua medida.',
            exclusiveExp: 'Experiências exclusivas no Norte de Portugal',
        },
    },
    en: {
        nav: {
            home: 'Home', tours: 'Tours',
            transfer: 'Transfer', about: 'About', reviews: 'Reviews',
            blog: 'Blog', contact: 'Contact', book: 'Book', bookNow: 'Book Now',
        },
        hero: {
            subtitle: 'Exclusive Experiences in Northern Portugal',
            title1: 'Exclusive Douro experiences',
            title2: 'with wine tasting and river cruise.',
            desc: 'Departures from Porto with comfortable transfer and personalised service.',
            cta: 'View Experiences',
            ctaWhatsapp: 'Chat on WhatsApp',
            trustLine: 'Licensed service · Free cancellation up to 48h · Trilingual guides',
        },
        quote: {
            text1: '"The Douro is not a landscape,',
            text2: 'it is a geological poem."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'River Experiences',
            title: 'Tours & Prices',
            subtitle: 'Three exclusive on-board experiences, designed for the Douro\'s magical sunset.',
            discount: '20% discount for children (0-8 years)',
            labels: {
                private: 'Private Boat',
                shared: 'Shared Boat',
                extra: 'Extra Person',
                perPersonLabel: 'Per Person',
                book: 'Book',
                whatsapp: 'WhatsApp',
            },
            items: [
                {
                    id: 'picnic-sunset',
                    name: 'Luxury Picnic, Boat & Train',
                    tagline: 'On board · Sunset',
                    image: '/images/novo-picnic.jpg',
                    bullets: [
                        '100% private experience, no groups',
                        'Executive transport with wine expert driver-guide',
                        'Luxury picnic at selected winery',
                        'Douro river cruise (private or small group)',
                        'Winery visit with wine tasting and regional honey and olive oil tasting',
                        'Scenic train ride in the Douro Valley',
                    ],
                    pricePrivate: 1000,
                    priceShared: 900,
                    priceExtra: 150,
                    capacityLabel: 'Up to 4 people',
                },
                {
                    id: 'golden-hour',
                    name: 'Douro Golden Hour',
                    subtitle: 'Private cruise, lunch and wine tasting.',
                    tagline: 'Magic hour · Cinematic light',
                    bullets: [
                        '100% private experience, no groups',
                        'Executive transport with wine expert driver-guide',
                        'Scenic route through the Douro Valley (includes N222 sections)',
                        'Gastronomic lunch at Michelin-starred restaurant with wine pairing',
                        'Douro river cruise (private or small group) at the end of the day',
                        'Wine tasting at a reference winery with views over the valley',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Up to 4 people',
                },
                {
                    id: 'douro-premium',
                    name: 'Douro Premium',
                    subtitle: 'Wine master, Lunch, Cruise and Train.',
                    tagline: 'Signature · Small group',
                    image: '/images/douro-premium.jpg',
                    bullets: [
                        'Accompanied by a Douro wine master',
                        'Traditional lunch with wine pairing',
                        'Visit to selected estates with wine tasting and regional products',
                        'Luxury scenic cruise on the Douro River',
                        'Train ride with views over the valley',
                    ],
                    perPerson: 180,
                    capacityLabel: 'Small group up to 8 people',
                },
            ],
        },
        transfer: {
            badge: 'Premium Service',
            title: 'Executive Transfer in Porto',
            subtitle: 'Comfort, Punctuality and Excellence in Every Detail',
            intro: 'We offer private executive transfer service in Porto, with pickup and delivery at hotel, residence or Francisco Sá Carneiro Airport. A service designed for demanding travellers.',
            features: [
                { title: 'Punctuality and Premium Planning', items: ['Your time is valuable.', 'Real-time flight monitoring', 'Driver on site before the time', 'Waiting time included on arrival'] },
                { title: 'Executive Vehicle up to 8 Passengers', items: ['Comfortable, quiet and spacious interior', 'Ample space for luggage', 'Air conditioning', 'Ideal for families or executives'] },
                { title: 'Safety and Excellence', items: ['Experienced and trilingual drivers', 'Baby seat (on request)', 'Fully licensed and safe service'] },
            ],
            services: [
                { title: 'Airport \u2192 Hotel Transfer', desc: 'Flight tracking, reception at arrivals, total luggage assistance and direct transport to your destination.' },
                { title: 'Hotel \u2192 Airport Transfer', desc: 'Punctual pickup at hotel or accommodation with proper planning to ensure timely arrival at the airport.' },
            ],
            price: '45',
            priceLabel: 'From',
            priceUnit: '€/transfer',
            ctaBook: 'Request Personalized Quote',
            ctaWhatsapp: 'Book via WhatsApp',
        },
        about: {
            badge: 'About Us',
            title: 'Beyond the Horizon: The Essence of North Scape Tours',
            paragraphs: [
                'At North Scape Tours, we believe that luxury is not defined by what you see, but by what you feel. We were born from a passion to reveal the invisible Douro - the one that does not appear on tourist maps, but that pulses in private estates, in the silence of the waters at dusk and in the flavors of a cuisine that honors the land.',
                'Our mission is to design experiences, not just routes. Every detail, from the comfort of our executive vehicles to the meticulous choice of partners with Michelin Star, is thought for those who value time, privacy and authenticity.',
                'We are not just guides; we are storytellers and facilitators of moments. In the back seat of our exclusivity, the Douro ceases to be a destination to become an eternal memory.',
                'Welcome to the Douro, at your own pace. Welcome to North Scape.',
            ],
            signature: 'North Scape Tours',
            imageAlt: 'Douro Valley shrouded in morning mist',
        },
        reviews: {
            badge: 'Reviews',
            title: 'What Our Clients Say',
            subtitle: 'Every review is a true story of those who lived the experience.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'An experience that transcends tourism. We felt like guest of honor in one of the most beautiful regions in the world. The guide was exceptional and the attention to detail impressive.', author: 'Sofia Albuquerque', location: 'Lisbon, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'A magical day in the Douro. The guide was excellent, the wines superb and the lunch delicious. Highly recommend!', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 4.5 },
                { text: 'Best experience ever in the Douro! The sunset boat ride was unforgettable.', author: 'Carlos Mendes', location: 'São Paulo, Brazil', flag: '🇧🇷', stars: 5 },
                { text: 'A perfect day! The wine tasting was top notch and the landscape is breathtaking.', author: 'Hannah Müller', location: 'Munich, Germany', flag: '🇩🇪', stars: 4.8 },
                { text: 'We celebrated our anniversary with North Scape and it was the highlight of our trip. Real luxury.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'The guide knew everything about the history of the region. A must-trip for wine lovers.', author: 'Alessandro Rossi', location: 'Milan, Italy', flag: '🇮🇹', stars: 4.5 },
                { text: 'Impeccable transfer and even better tour. First class service from start to finish.', author: 'Lucía Fernández', location: 'Madrid, Spain', flag: '🇪🇸', stars: 5 },
                { text: 'Amazing! The Douro is magical and the North Scape team made everything special.', author: 'Daan van der Berg', location: 'Amsterdam, Netherlands', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Everything you need to know',
            items: [
                { q: 'What are the 3 Douro tours and what changes in each?', a: 'We offer 3 distinct tours: the simplest includes a visit to 1 estate with lunch, boat ride, wine tasting and scenic train. All accompanied by a trilingual guide.' },
                { q: 'How long does the experience last?', a: 'The Douro Tour is a full day experience, between 8 to 9 hours.' },
                { q: 'Is it suitable for families with children?', a: 'Yes! We have baby seats and children\'s menus available at partner restaurants.' },
                { q: 'Can I customize the experience?', a: 'Yes, we are experts in tailor-made private tours.' },
                { q: 'Can the booking be cancelled?', a: 'Free cancellation up to 48 hours before the tour date.' },
                { q: 'Are there vegetarian options?', a: 'Yes, all our partner restaurants offer vegetarian and vegan alternatives.' },
                { q: 'Do the tours work all year round?', a: 'Yes, each season in the Douro has its unique charm.' },
                { q: 'How does the executive transfer work?', a: 'Private driver with real-time flight monitoring.' },
                { q: 'In which languages are the tours available?', a: 'Portuguese and English are guaranteed. Other languages on request.' },
                { q: 'How can I book?', a: 'Directly through the website, WhatsApp or email.' },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'The Douro Diary',
            subtitle: 'News, secrets and the latest from wine tourism in Portugal.',
            readMore: 'Read Story',
            bookCta: 'Book this experience',
            readTimeDefault: '3 min read',
            items: [
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"The Best Wine of the Year" is a Douro Red', excerpt: 'The prestigious award went to a Douro wine, reaffirming the exceptional quality of the region.', date: 'May 13, 2026', category: 'Awards', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min read', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Specialized critics have once again rewarded the excellence of the Douro. The title of "Best Wine of the Year" was awarded to a Douro red, a distinction that reinforces the international prestige of the oldest demarcated region in the world.' },
                        { type: 'p', text: 'At North Scape Tours, we provide our clients with premium tastings that include award-winning vintages at the best estates in the region. Come taste excellence with us.' }
                    ]
                },
                {
                    slug: 'napa-valley-para-o-douro', title: 'From Napa Valley to Douro: 10 Million Investment in Wine Tourism', excerpt: 'An American entrepreneur chose the Douro for a luxury project focused on wine and tourism.', date: 'March 16, 2026', category: 'News', image: '/images/blog/2026/quinta-estate.jpg', readTime: '4 min read', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'The Douro continues to attract the world\'s largest investors. Recently, an entrepreneur from Napa Valley, California, invested around 10 million euros in a new wine and tourism project in the region.' },
                        { type: 'p', text: 'This millionaire investment is proof that the Douro Valley is a global destination of choice for luxury wine tourism, rivaling the most famous wine regions in the world.' }
                    ]
                },
                {
                    slug: 'cimeira-mundial-enoturismo', title: 'Portugal hosts the Global Wine Tourism Summit', excerpt: 'Our country strengthens its leadership position by hosting the largest global event dedicated to wine tourism.', date: 'May 11, 2026', category: 'Events', image: '/images/blog/2026/gastronomy.jpg', readTime: '3 min read', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Portugal continues to make history in world tourism. The country was chosen to host the Global Wine Tourism Summit, a milestone that underlines our dedication to wine culture and hospitality excellence.' },
                        { type: 'p', text: 'As the Douro is the main showcase of national wine tourism, we celebrate this global recognition and remain committed to offering unforgettable experiences.' }
                    ]
                },
                {
                    slug: 'quinta-renasce-experiencias', title: 'Immersive "Hands-On" Experiences in the Quintas', excerpt: 'Wine tourism in Portugal is evolving into immersive experiences, where visitors interact directly with the land and the wine.', date: 'April 6, 2026', category: 'Trends', image: '/images/blog/2026/harvest.jpg', readTime: '4 min read', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'The current trend in wine tourism is authenticity. Visitors no longer seek just to taste wine, but to understand the terroir, participate in the harvest and enjoy "hands-on" experiences.' },
                        { type: 'p', text: 'Our tailor-made tours in the Douro are designed precisely with this purpose: to connect our clients with the true essence of Portuguese culture and tradition.' }
                    ]
                }
            ]
        },
        contact: {
            title: 'Ready to embark?',
            desc: 'Let us design your dream trip. We reply within 2 hours.',
            ctaBook: 'Book Experience', ctaWhatsapp: 'Chat on WhatsApp',
            emailLabel: 'Email', email: EMAIL,
            phoneLabel: 'Phone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Tailor-Made Experiences',
            title: 'Portugal. Your Way.',
            subtitle: 'Private journeys tailored to your rhythm.',
            desc: 'We can customize your private journey through Northern Portugal, with the option to extend your experience to Lisbon.',
            collection: 'North Premium Collection',
            collectionDesc: 'Exclusive experiences across Portugal\'s most iconic northern destinations.',
            destinations: ['Amarante', 'Braga', 'Gerês', 'Guimarães', 'Porto', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisbon'],
            cta: 'Contact Us to Customize',
        },
        footer: {
            rights: 'All rights reserved.',
            terms: 'Terms and Conditions', privacy: 'Privacy Policy',
            licensedIn: 'Licensed service in Portugal · RNAAT 284/2026',
            nif: 'NIPC: 518 190 145',
            complaints: 'Electronic Complaints Book'
        },
        cookieBanner: {
            text: 'We use cookies to ensure you get the best experience on our website. By continuing, you agree to our',
            linkText: 'Privacy Policy',
            acceptBtn: 'Accept All',
            essentialBtn: 'Essential Only',
        },
        mobileBar: { book: 'Book Now', whatsapp: 'WhatsApp' },
        privacy: {
            title: 'Privacy Policy',
            back: 'Back',
            sections: [
                { title: '1. Identification of the Data Controller', content: 'The entity responsible for data processing is "North Scape Tours" (NIPC: 518 190 145), based in Portugal. We are committed to the protection of personal data, strictly complying with the EU GDPR (General Data Protection Regulation) standards.' },
                { title: '2. Collection and Purpose', content: 'We do not have direct sales forms. Data provided during bookings or contact via email and WhatsApp (full name, mobile number, dietary preferences) serve the exclusive purpose of organizing tour logistics in a 100% personalized way per client.' },
                { title: '3. External Sharing', content: 'Some essential data may be communicated only to logistics partners (Estates and Restaurants) under the criteria of food intolerances/allergies or vehicle adaptations.' },
                { title: '4. Cookie Policy', content: 'The Website uses Cookie technology, exclusively for technical and analytical purposes (Google Analytics) to understand our visitor profile. On your first visit, your explicit consent was requested in accordance with the EC/PE Directive on e-Privacy protection. You can remove this consent or clear your session history in your Web Browser at any time.' },
                { title: '5. Retention and Rights', content: 'We keep client information only for the useful time of the service or mandatory tax invoicing period. The client has the right to request Access, Portability or Erasure.' },
            ]
        },
        terms: {
            title: 'Terms and Conditions',
            back: 'Back',
            sections: [
                { title: '1. Scope and Object', content: 'These Terms and Conditions apply to all services provided by North Scape Tours. By booking with us, the client declares they know and accept these rules.' },
                { title: '2. Bookings and Payments', content: 'Bookings become effective after written confirmation from North Scape Tours. Payments are made according to the method agreed upon at the time of booking.' },
                { title: '3. Cancellation Policy', content: 'Free cancellation up to 48 hours before the tour date. After this period, the full booking value will be charged due to commitments made with local partners.' },
                { title: '4. Responsibility', content: 'North Scape Tours holds all insurance required by law (Personal Accident and Civil Liability). We are not responsible for loss of personal belongings during activities.' },
                { title: '5. Jurisdiction', content: 'For the resolution of any dispute, the court of the district of Porto is competent, with the waiver of any other.' },
            ]
        },
        common: {
            back: 'Back',
            backHome: 'Back Home',
            notFound: 'Article not found',
            enjoyed: 'Enjoyed this article?',
            enjoyedDesc: 'Discover these landscapes live with us, in a fully exclusive and tailor-made experience.',
            exclusiveExp: 'Exclusive experiences in Northern Portugal',
        },
    },
    es: {
        nav: {
            home: 'Inicio', tours: 'Tours',
            transfer: 'Traslado', about: 'Sobre Nosotros', reviews: 'Reseñas',
            blog: 'Blog', contact: 'Contacto', book: 'Reservar', bookNow: 'Reservar Ahora',
        },
        hero: {
            subtitle: 'Experiencias Exclusivas en el Norte de Portugal',
            title1: 'Experiencias exclusivas en el Duero',
            title2: 'con cata de vinos y paseo en barco.',
            desc: 'Salidas desde Oporto con traslado cómodo y atención personalizada.',
            cta: 'Ver Experiencias',
            ctaWhatsapp: 'Hablar por WhatsApp',
            trustLine: 'Servicio licenciado · Cancelación gratuita hasta 48h · Guías trilingües',
        },
        quote: {
            text1: '"El Duero no es un paisaje,',
            text2: 'es un poema geológico."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'Experiencias en el Río',
            title: 'Tours y Precios',
            subtitle: 'Tres experiencias exclusivas a bordo, diseñadas para el atardecer mágico del Duero.',
            discount: 'Descuento del 20% para niños (0-8 años)',
            labels: {
                private: 'Barco Privado',
                shared: 'Barco Compartido',
                extra: 'Persona Extra',
                perPersonLabel: 'Por Persona',
                book: 'Reservar',
                whatsapp: 'WhatsApp',
            },
            items: [
                {
                    id: 'picnic-sunset',
                    name: 'Picnic de lujo, barco y tren',
                    tagline: 'A bordo · Puesta de sol',
                    image: '/images/novo-picnic.jpg',
                    bullets: [
                        'Experiencia 100% privada sin grupos',
                        'Transporte ejecutivo con guía-conductor experto en vinos',
                        'Picnic de lujo en bodega seleccionada',
                        'Paseo en barco por el río Duero (privado o en grupo pequeño)',
                        'Visita a bodega con cata de vinos y degustación de miel y aceite regionales',
                        'Recorrido panorámico en tren por el valle del Duero',
                    ],
                    pricePrivate: 1000,
                    priceShared: 900,
                    priceExtra: 150,
                    capacityLabel: 'Hasta 4 personas',
                },
                {
                    id: 'golden-hour',
                    name: 'Douro Golden Hour',
                    subtitle: 'Crucero privado, almuerzo y cata de vinos.',
                    tagline: 'Hora mágica · Luz cinematográfica',
                    bullets: [
                        'Experiencia 100% privada sin grupos',
                        'Transporte ejecutivo con guía-conductor experto en vinos',
                        'Ruta escénica por el valle del Duero (incluye tramos de la N222)',
                        'Almuerzo gastronómico en restaurante con Chef estrella Michelin, con maridaje',
                        'Crucero por el río Duero (privado o en grupo pequeño) al final del día',
                        'Cata de vinos en una bodega de referencia con vistas sobre el valle',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Hasta 4 personas',
                },
                {
                    id: 'douro-premium',
                    name: 'Douro Premium',
                    subtitle: 'Wine master, Almuerzo, Crucero y Tren.',
                    tagline: 'Firma · Grupo reducido',
                    image: '/images/douro-premium.jpg',
                    bullets: [
                        'Acompañado por un Wine master experto en vinos del Duero',
                        'Almuerzo tradicional con maridaje',
                        'Visita a bodegas seleccionadas con cata de vinos y productos regionales',
                        'Crucero panorámico de lujo en el río Duero',
                        'Paseo en tren con vistas sobre el valle',
                    ],
                    perPerson: 180,
                    capacityLabel: 'Grupo pequeño hasta 8 personas',
                },
            ],
        },
        transfer: {
            badge: 'Servicio Premium',
            title: 'Transfer Ejecutivo en Oporto',
            subtitle: 'Confort, Puntualidad y Excelencia en Cada Detalle',
            intro: 'Ofrecemos servicio de transfer ejecutivo privado en Oporto, con recogida y entrega en hotel, residencia o Aeropuerto Francisco Sá Carneiro. Un servicio diseñado para viajeros exigentes.',
            features: [
                { title: 'Puntualidad y Planificación Premium', items: ['Su tiempo es valioso.', 'Seguimiento de vuelos en tiempo real', 'Conductor en el lugar antes de la hora', 'Tiempo de espera incluido a la llegada'] },
                { title: 'Vehículo Ejecutivo hasta 8 Pasajeros', items: ['Interior cómodo, silencioso y espacioso', 'Amplio espacio para equipaje', 'Aire acondicionado', 'Ideal para familias o ejecutivos'] },
                { title: 'Seguridad y Excelencia', items: ['Conductores experimentados y trilingües', 'Silla de bebé (bajo petición)', 'Servicio totalmente licenciado y seguro'] },
            ],
            services: [
                { title: 'Traslado Aeropuerto \u2192 Hotel', desc: 'Seguimiento de vuelo, recepción en llegadas, asistencia total con el equipaje y transporte directo a su destino.' },
                { title: 'Traslado Hotel \u2192 Aeropuerto', desc: 'Recogida puntual en el hotel o alojamiento con planificación adecuada para garantizar la llegada a tiempo al aeropuerto.' },
            ],
            price: '45',
            priceLabel: 'Desde',
            priceUnit: '€/traslado',
            ctaBook: 'Solicitar Presupuesto Personalizado',
            ctaWhatsapp: 'Reservar por WhatsApp',
        },
        about: {
            badge: 'Sobre Nosotros',
            title: 'Más allá del horizonte: La esencia de North Scape Tours',
            paragraphs: [
                'En North Scape Tours, creemos que el lujo no se define por lo que se ve, sino por lo que se siente. Nacimos de la pasión por revelar el Duero invisible: aquel que no aparece en los mapas turísticos, sino que late en las fincas privadas, en el silencio de las aguas al atardecer y en los sabores de una cocina que honra la tierra.',
                'Nuestra misión es diseñar experiencias, no solo trayectos. Cada detalle, desde el confort de nuestros vehículos ejecutivos hasta la elección meticulosa de socios con Estrella Michelin, está pensado para quienes valoran el tiempo, la privacidad y la autenticidad.',
                'No somos solo guías; somos contadores de historias y facilitadores de momentos. En el asiento trasero de nuestra exclusividad, el Duero deja de ser un destino para convertirse en un recuerdo eterno.',
                'Bienvenido al Duero, a su propio ritmo. Bienvenido a North Scape.',
            ],
            signature: 'North Scape Tours',
            imageAlt: 'Valle del Duero envuelto en niebla matinal',
        },
        reviews: {
            badge: 'Reseñas',
            title: 'Lo que dicen nuestros clientes',
            subtitle: 'Cada reseña es una historia real de quien vivió la experiencia.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'Una experiencia que trasciende el turismo. Nos sentimos como invitados de honor en una de las regiones más bellas del mundo. El guía fue excepcional y la atención al detalle impresionante.', author: 'Sofia Albuquerque', location: 'Lisboa, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'Un día mágico en el Duero. El guía fue excelente, los vinos soberbios y el almuerzo delicioso. ¡Muy recomendable!', author: 'Marie Dubois', location: 'París, Francia', flag: '🇫🇷', stars: 4.5 },
                { text: '¡La mejor experiencia en el Duero! El paseo en barco al atardecer fue inolvidable.', author: 'Carlos Mendes', location: 'São Paulo, Brasil', flag: '🇧🇷', stars: 5 },
                { text: '¡Un día perfecto! La cata de vinos fue de alto nivel y el paisaje es impresionante.', author: 'Hannah Müller', location: 'Múnich, Alemania', flag: '🇩🇪', stars: 4.8 },
                { text: 'Celebramos nuestro aniversario con North Scape y fue lo mejor de nuestro viaje. Lujo real.', author: 'Michael & Sarah Chen', location: 'Nueva York, EE. UU.', flag: '🇺🇸', stars: 5 },
                { text: 'El guía sabía todo sobre la historia della región. Un viaje imprescindible para los amantes del vino.', author: 'Alessandro Rossi', location: 'Milán, Italia', flag: '🇮🇹', stars: 4.5 },
                { text: 'Traslado impecable y tour aún mejor. Servicio de primera clase de principio a fin.', author: 'Lucía Fernández', location: 'Madrid, España', flag: '🇪🇸', stars: 5 },
                { text: '¡Increíble! El Duero es mágico y el equipo de North Scape hizo que todo fuera especial.', author: 'Daan van der Berg', location: 'Ámsterdam, Holanda', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Todo lo que necesita saber',
            items: [
                { q: '¿Cuáles son los 3 tours en el Duero y qué cambia en cada uno?', a: 'Ofrecemos 3 tours distintos: el más sencillo incluye visita a 1 bodega con almuerzo, paseo en barco, cata de vinos y tren panorámico. Todos acompañados por guía trilingüe.' },
                { q: '¿Cuánto dura la experiencia?', a: 'El Douro Tour es una experiencia de día completo, entre 8 y 9 horas.' },
                { q: '¿Es adecuado para familias con niños?', a: '¡Sí! Tenemos sillas de bebé y menús infantiles disponibles en los restaurantes asociados.' },
                { q: '¿Puedo personalizar la experiencia?', a: 'Sí, somos expertos en tours privados a medida.' },
                { q: '¿Se puede cancelar la reserva?', a: 'Cancelación gratuita hasta 48 horas antes de la fecha del tour.' },
                { q: '¿Hay opciones vegetarianas?', a: 'Sí, todos nuestros restaurantes asociados ofrecen alternativas vegetarianas y veganas.' },
                { q: '¿Los tours funcionan todo el año?', a: 'Sí, cada estación en el Duero tiene su encanto único.' },
                { q: '¿Cómo funciona el traslado ejecutivo?', a: 'Conductor privado con seguimiento de vuelo en tiempo real.' },
                { q: '¿En qué idiomas están disponibles los tours?', a: 'Portugués e inglés garantizados. Otros bajo consulta.' },
                { q: '¿Cómo puedo reservar?', a: 'Directamente por la web, WhatsApp o email.' },
            ],
        },
        blog: {
            badge: 'Diario',
            title: 'Diario del Duero',
            subtitle: 'Noticias, secretos y lo último en enoturismo en Portugal.',
            readMore: 'Leer Historia',
            bookCta: 'Reservar esta experiencia',
            readTimeDefault: '3 min de lectura',
            items: [
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"El Mejor Vino del Año" es un Tinto del Duero', excerpt: 'El prestigioso premio fue para un vino del Duero, reafirmando la excepcional calidad de la región.', date: '13 de mayo de 2026', category: 'Premios', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de lectura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La crítica especializada ha vuelto a premiar la excelencia del Duero. El título de "Mejor Vino del Año" fue otorgado a un tinto duriense, una distinción que refuerza el prestigio internacional de la región demarcada más antigua del mundo.' },
                        { type: 'p', text: 'En North Scape Tours, brindamos a nuestros clientes catas premium que incluyen cosechas premiadas en las mejores fincas de la región. Venga a degustar la excelencia con nosotros.' }
                    ]
                },
                {
                    slug: 'napa-valley-para-o-douro', title: 'De Napa Valley al Duero: Inversión de 10 Millones en Enoturismo', excerpt: 'Un empresario estadounidense eligió el Duero para un proyecto de lujo centrado en el vino y el turismo.', date: '16 de marzo de 2026', category: 'Noticias', image: '/images/blog/2026/quinta-estate.jpg', readTime: '4 min de lectura', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'El Duero sigue atrayendo a los mayores inversores mundiales. Recientemente, un empresario de Napa Valley, California, invirtió cerca de 10 millones de euros en un nuevo proyecto de vino y turismo en la región.' },
                        { type: 'p', text: 'Esta millonaria inversión es prueba de que el Valle del Duero es un destino de elección mundial para el enoturismo de lujo, rivalizando con las regiones vinícolas más famosas del mundo.' }
                    ]
                },
                {
                    slug: 'cimeira-mundial-enoturismo', title: 'Portugal acoge la Cumbre Mundial de Enoturismo', excerpt: 'Nuestro país refuerza su posición de liderazgo al acoger el mayor evento mundial dedicado al turismo del vino.', date: '11 de mayo de 2026', category: 'Eventos', image: '/images/blog/2026/gastronomy.jpg', readTime: '3 min de lectura', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Portugal sigue haciendo historia en el turismo mundial. El país fue elegido para albergar la Cumbre Mundial de Enoturismo, un hito que subraya nuestra dedicación a la cultura del vino y la excelencia en hospitalidad.' },
                        { type: 'p', text: 'Siendo el Duero el principal escaparate del enoturismo nacional, celebramos este reconocimiento mundial y seguimos comprometidos en ofrecer experiencias inolvidables.' }
                    ]
                },
                {
                    slug: 'quinta-renasce-experiencias', title: 'Experiencias Sensoriales "Pies en la Tierra" en las Quintas', excerpt: 'El enoturismo en Portugal evoluciona hacia experiencias inmersivas, donde el visitante interactúa directamente con la tierra y el vino.', date: '6 de abril de 2026', category: 'Tendencias', image: '/images/blog/2026/harvest.jpg', readTime: '4 min de lectura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La tendencia actual en el enoturismo es la autenticidad. Los visitantes ya no solo buscan probar el vino, sino comprender el terruño, participar en la vendimia y disfrutar de experiencias "pies en la tierra".' },
                        { type: 'p', text: 'Nuestros tours a medida en el Duero están diseñados precisamente con este propósito: conectar a nuestros clientes con la verdadera esencia de la cultura y la tradición portuguesas.' }
                    ]
                }
            ]
        },
        contact: {
            title: '¿Listo para embarcar?',
            desc: 'Permítanos diseñar el viaje de sus sueños. Respondemos en menos de 2 horas.',
            ctaBook: 'Reservar Experiencia', ctaWhatsapp: 'Hablar por WhatsApp',
            emailLabel: 'Correo electrónico', email: EMAIL,
            phoneLabel: 'Teléfono', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Experiencias a medida',
            title: 'Portugal. Your Way.',
            subtitle: 'Viajes privados a su ritmo.',
            desc: 'Podemos personalizar su viaje privado por el norte de Portugal, con la opción de extender su experiencia hasta Lisboa.',
            collection: 'Colección North Premium',
            collectionDesc: 'Experiencias exclusivas en los destinos más icónicos del norte de Portugal.',
            destinations: ['Amarante', 'Braga', 'Gerês', 'Guimarães', 'Oporto', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisboa'],
            cta: 'Contáctenos para personalizar',
        },
        footer: {
            rights: 'Todos los derechos reservados.',
            terms: 'Términos y Condiciones', privacy: 'Política de Privacidad',
            licensedIn: 'Servicio licenciado en Portugal · RNAAT 284/2026',
            nif: 'NIPC: 518 190 145',
            complaints: 'Libro de Reclamaciones Electrónico'
        },
        cookieBanner: {
            text: 'Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. Al continuar, acepta nuestra',
            linkText: 'Política de Privacidad',
            acceptBtn: 'Aceptar todo',
            essentialBtn: 'Solo esenciales',
        },
        mobileBar: { book: 'Reservar ahora', whatsapp: 'WhatsApp' },
        privacy: {
            title: 'Política de Privacidad',
            back: 'Volver',
            sections: [
                { title: '1. Identificación del Responsable del Tratamiento', content: 'La entidad responsable del tratamiento de datos es "North Scape Tours" (NIPC: 518 190 145), con sede en Portugal. Nos comprometemos con la protección de datos personales, cumpliendo estrictamente con la normativa RGPD Europea.' },
                { title: '2. Recogida y Finalidad', content: 'No disponemos de formularios de venta directa. Los datos proporcionados durante las reservas o el contacto por correo electrónico y WhatsApp sirven al propósito exclusivo de organizar la logística del tour de forma personalizada.' },
                { title: '3. Intercambio Externo', content: 'Algunos datos esenciales pueden ser comunicados solo a socios logísticos (fincas y restaurantes) bajo el criterio de intolerancias alimentarias o adaptaciones de vehículos.' },
                { title: '4. Política de Cookies', content: 'El sitio web utiliza tecnología de cookies, exclusivamente con fines técnicos y analíticos para comprender el perfil del visitante. Puede retirar su consentimiento en cualquier momento.' },
                { title: '5. Retención y Derechos', content: 'Mantenemos la información del cliente solo durante el tiempo útil del servicio. El cliente tiene derecho a solicitar acceso, portabilidad o supresión.' },
            ]
        },
        terms: {
            title: 'Términos y Condiciones',
            back: 'Volver',
            sections: [
                { title: '1. Alcance y Objeto', content: 'Estos Términos y Condiciones se aplican a todos los servicios prestados por North Scape Tours.' },
                { title: '2. Reservas y Pagos', content: 'Las reservas se hacen efectivas tras la confirmación por escrito. Los pagos se realizan según el método acordado.' },
                { title: '3. Política de Cancelación', content: 'Cancelación gratuita hasta 48 horas antes del tour. Después, se aplicará la tarifa completa.' },
                { title: '4. Responsabilidad', content: 'North Scape Tours cuenta con todos los seguros obligatorios por ley. No nos responsabilizamos por la pérdida de bienes personales.' },
                { title: '5. Jurisdicción', content: 'Para la resolución de cualquier disputa, es competente el tribunal del distrito de Oporto.' },
            ]
        },
        common: {
            back: 'Volver',
            backHome: 'Volver al inicio',
            notFound: 'Artículo no encontrado',
            enjoyed: '¿Le gustó este artículo?',
            enjoyedDesc: 'Descubra estos paisajes en vivo con nosotros, en una experiencia exclusiva diseñada a su medida.',
            exclusiveExp: 'Experiencias exclusivas en el norte de Portugal',
        },
    },
    fr: {
        nav: {
            home: 'Accueil', tours: 'Tours',
            transfer: 'Transfert', about: 'À Propos', reviews: 'Avis',
            blog: 'Blog', contact: 'Contact', book: 'Réserver', bookNow: 'Réserver Maintenant',
        },
        hero: {
            subtitle: 'Expériences Exclusives dans le Nord du Portugal',
            title1: 'Expériences exclusives dans le Douro',
            title2: 'avec dégustation de vins et croisière.',
            desc: 'Départs de Porto avec transfert confortable et service personnalisé.',
            cta: 'Voir les Expériences',
            ctaWhatsapp: 'Discuter sur WhatsApp',
            trustLine: 'Service agréé · Annulation gratuite jusqu\'à 48h · Guides trilingues',
        },
        quote: {
            text1: '"Le Douro n\'est pas un paysage,',
            text2: 'c\'est un poème géologique."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'Expériences sur le Fleuve',
            title: 'Tours et Tarifs',
            subtitle: 'Trois expériences exclusives à bord, conçues pour le coucher du soleil magique du Douro.',
            discount: '20% de réduction pour les enfants (0-8 ans)',
            labels: {
                private: 'Bateau Privé',
                shared: 'Bateau Partagé',
                extra: 'Personne Supplémentaire',
                perPersonLabel: 'Par Personne',
                book: 'Réserver',
                whatsapp: 'WhatsApp',
            },
            items: [
                {
                    id: 'picnic-sunset',
                    name: 'Pique-nique de Luxe, Bateau et Train',
                    tagline: 'À bord · Coucher de soleil',
                    image: '/images/novo-picnic.jpg',
                    bullets: [
                        'Expérience 100% privée sans groupes',
                        'Transport exécutif avec chauffeur-guide sommelier',
                        'Pique-nique de luxe dans un domaine sélectionné',
                        'Croisière sur le Douro (privée ou en petit groupe)',
                        'Visite de domaine avec dégustation de vins, miel et huile d\'olive',
                        'Trajet panoramique en train dans la vallée du Douro',
                    ],
                    pricePrivate: 1000,
                    priceShared: 900,
                    priceExtra: 150,
                    capacityLabel: 'Jusqu\'à 4 personnes',
                },
                {
                    id: 'golden-hour',
                    name: 'Douro Golden Hour',
                    subtitle: 'Croisière privée, déjeuner et dégustation de vins.',
                    tagline: 'Heure magique · Lumière cinématographique',
                    bullets: [
                        'Expérience 100% privée sans groupes',
                        'Transport exécutif avec chauffeur-guide sommelier',
                        'Route panoramique dans la vallée du Douro (incluant la N222)',
                        'Déjeuner gastronomique chez un chef étoilé Michelin avec accord mets-vins',
                        'Croisière sur le Douro (privée ou en petit groupe) en fin de journée',
                        'Dégustation de vins dans un domaine de référence avec vue sur la vallée',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Jusqu\'à 4 personnes',
                },
                {
                    id: 'douro-premium',
                    name: 'Douro Premium',
                    subtitle: 'Wine master, Déjeuner, Croisière et Train.',
                    tagline: 'Signature · Petit groupe',
                    image: '/images/douro-premium.jpg',
                    bullets: [
                        'Accompagné par un maître de chai du Douro',
                        'Déjeuner traditionnel avec accord mets-vins',
                        'Visites de domaines sélectionnés avec dégustations de vins et produits locaux',
                        'Croisière panoramique de luxe sur le Douro',
                        'Voyage en train panoramique avec vue sur la vallée',
                    ],
                    perPerson: 180,
                    capacityLabel: 'Petit groupe jusqu\'à 8 personnes',
                },
            ],
        },
        transfer: {
            badge: 'Service Premium',
            title: 'Transfert Exécutif à Porto',
            subtitle: 'Confort, Ponctualité et Excellence dans Chaque Détail',
            intro: 'Nous proposons un service de transfert exécutif privé à Porto, avec prise en charge et dépose à votre hôtel, résidence ou à l\'aéroport Francisco Sá Carneiro. Un service conçu pour les voyageurs exigeants.',
            features: [
                { title: 'Ponctualité et Planification Premium', items: ['Votre temps est précieux.', 'Suivi des vols en temps réel', 'Chauffeur sur place avant l\'heure prévue', 'Temps d\'attente inclus à l\'arrivée'] },
                { title: 'Véhicule Exécutif jusqu\'à 8 Passagers', items: ['Intérieur confortable, silencieux et spacieux', 'Grand espace pour les bagages', 'Climatisation', 'Idéal pour les familles ou les événements d\'entreprise'] },
                { title: 'Sécurité et Excellence', items: ['Chauffeurs trilingues expérimentés', 'Siège bébé (disponible sur demande)', 'Service entièrement agréé et assuré'] },
            ],
            services: [
                { title: 'Transfert Aéroport \u2192 Hôtel', desc: 'Suivi de vol, accueil personnalisé aux arrivées, assistance complète pour les bagages et transport direct vers votre destination.' },
                { title: 'Transfert Hôtel \u2192 Aéroport', desc: 'Prise en charge ponctuelle à votre hôtel ou hébergement avec une planification adéquate pour garantir une arrivée à temps à l\'aéroport.' },
            ],
            price: '45',
            priceLabel: 'À partir de',
            priceUnit: '€/transfert',
            ctaBook: 'Demander un Devis Personnalisé',
            ctaWhatsapp: 'Réserver via WhatsApp',
        },
        about: {
            badge: 'À Propos',
            title: 'Au-delà de l\'horizon : L\'âme de North Scape Tours',
            paragraphs: [
                'Chez North Scape Tours, nous croyons que le luxe ne se définit pas par ce que vous voyez, mais par ce que vous ressentez. Nous sommes nés d\'une passion pour révéler le Douro invisible - celui qui n\'apparaît pas sur les cartes touristiques, mais qui vibre au sein des domaines privés, dans le silence du fleuve au crépuscule et dans les saveurs d\'une cuisine qui honore la terre.',
                'Notre mission est de concevoir des expériences, pas des itinéraires. Chaque détail, du confort de nos véhicules exécutifs à la sélection méticuleuse de partenaires étoilés au Michelin, est pensé pour ceux qui apprécient le temps, l\'intimité et l\'authenticité.',
                'Nous ne sommes pas de simples guides ; nous sommes des conteurs et des curateurs de moments inoubliables. À l\'arrière de notre exclusivité, le Douro cesse d\'être une destination pour devenir un souvenir éternel.',
                'Bienvenue dans le Douro, à votre propre rythme. Bienvenue chez North Scape.',
            ],
            signature: 'North Scape Tours',
            imageAlt: 'Vallée du Douro enveloppée dans la brume matinale',
        },
        reviews: {
            badge: 'Avis',
            title: 'Ce Que Disent Nos Clients',
            subtitle: 'Chaque avis est une histoire vraie de quelqu\'un qui a vécu l\'expérience.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'Une expérience qui transcende le tourisme. Nous nous sommes sentis comme des invités d\'honneur dans l\'une des plus belles régions du monde. Le guide était exceptionnel et l\'attention portée aux détails impressionnante.', author: 'Sofia Albuquerque', location: 'Lisbonne, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'L\'attention portée aux détails était impeccable. De la balade en bateau privé aux dégustations de vins exclusives, tout était parfait. Hautement recommandé pour tous ceux qui visitent Porto.', author: 'James Sterling', location: 'Londres, Royaume-Uni', flag: '🇬🇧', stars: 5 },
                { text: 'Une journée magique dans la vallée du Douro. Le guide était exceptionnel, les vins superbes et le déjeuner absolument délicieux. Une expérience incontournable !', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 4.5 },
                { text: 'Meilleure expérience jamais vécue dans le Douro ! La balade en bateau au coucher du soleil était inoubliable. Je recommande vivement North Scape Tours.', author: 'Carlos Mendes', location: 'São Paulo, Brésil', flag: '🇧🇷', stars: 5 },
                { text: 'Une journée parfaite dans la vallée du Douro ! La dégustation de vins était de premier ordre et le paysage à couper le souffle. Nous reviendrons sans hésiter.', author: 'Hannah Müller', location: 'Munich, Allemagne', flag: '🇩🇪', stars: 4.8 },
                { text: 'Nous avons fêté notre anniversaire avec North Scape et ce fut le point fort de notre voyage. L\'expérience privée semblait vraiment exclusive. Ça en valait chaque centime.', author: 'Michael & Sarah Chen', location: 'New York, États-Unis', flag: '🇺🇸', stars: 5 },
                { text: 'Le guide savait tout sur les vins et l\'histoire de la région. Un voyage inoubliable que je recommande à tous les amateurs de vin.', author: 'Alessandro Rossi', location: 'Milan, Italie', flag: '🇮🇹', stars: 4.5 },
                { text: 'Le transfert depuis l\'aéroport était impeccable, et le tour le lendemain a dépassé toutes nos attentes. Un service de première classe tout au long.', author: 'Lucía Fernández', location: 'Madrid, Espagne', flag: '🇪🇸', stars: 5 },
                { text: 'Expérience incroyable ! Le bateau sur le Douro au coucher du soleil était magique. Un service professionnel du début à la fin.', author: 'Daan van der Berg', location: 'Amsterdam, Pays-Bas', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Tout Ce Que Vous Devez Savoir',
            items: [
                { q: 'Quels sont les 3 tours dans le Douro et qu\'est-ce qui change dans chacun d\'eux ?', a: 'Nous proposons 3 tours distincts dans le Douro, chacun avec des expériences différentes. Le tour le plus simple comprend : Visite d\'un domaine viticole avec déjeuner accompagné de vins, balade en bateau, visite de domaine avec dégustation de vins, huile d\'olive et miel, promenade dans les vignes et trajet panoramique en train. Tous nos tours sont accompagnés d\'un guide trilingue (PT/EN/FR).' },
                { q: 'Combien de temps dure l\'expérience ?', a: 'Le Douro Tour est une expérience d\'une journée complète de 8 à 9 heures. L\'expérience Douro à Deux a la même durée.' },
                { q: 'Est-ce adapté aux familles avec enfants ?', a: 'Oui ! Le Douro Tour est idéal pour les familles. Les enfants sont les bienvenus et nous avons des sièges bébé disponibles pour les transferts. Des options de menu enfant sont disponibles dans les restaurants.' },
                { q: 'Puis-je personnaliser l\'expérience ?', a: 'Absolument. Nous proposons des visites privées où vous pouvez adapter l\'itinéraire, choisir des domaines viticoles spécifiques ou ajouter des arrêts supplémentaires. Contactez-nous pour une visite sur mesure.' },
                { q: 'Quelle est la politique d\'annulation ?', a: 'Annulation gratuite jusqu\'à 48 heures avant la date de la visite. Passé ce délai, le tarif plein s\'applique.' },
                { q: 'Y a-t-il des options végétariennes ou des adaptations alimentaires ?', a: 'Oui. Nos restaurants partenaires proposent des options végétariennes, végé        blog: {
            badge: 'Journal',
            title: 'Journal du Douro',
            subtitle: 'Actualités, secrets et les dernières nouveautés de l\'oenotourisme au Portugal.',
            readMore: 'Lire l\'Histoire',
            bookCta: 'Réserver cette expérience',
            readTimeDefault: '3 min de lecture',
            items: [
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"Le Meilleur Vin de l\'Année" est un Rouge du Douro', excerpt: 'Le prix prestigieux a été décerné à un vin du Douro, réaffirmant la qualité exceptionnelle de la région.', date: '13 mai 2026', category: 'Prix', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de lecture', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La critique spécialisée a une fois de plus récompensé l\'excellence du Douro. Le titre de "Meilleur Vin de l\'Année" a été attribué à un rouge du Douro, une distinction qui renforce le prestige international de la plus ancienne région délimitée au monde.' },
                        { type: 'p', text: 'Chez North Scape Tours, nous offrons à nos clients des dégustations premium qui incluent des millésimes primés dans les meilleurs domaines de la région. Venez déguster l\'excellence avec nous.' }
                    ]
                },
                {
                    slug: 'napa-valley-para-o-douro', title: 'De la Napa Valley au Douro : 10 Millions d\'Investissement dans l\'Oenotourisme', excerpt: 'Un entrepreneur américain a choisi le Douro pour un projet de luxe axé sur le vin et le tourisme.', date: '16 mars 2026', category: 'Actualités', image: '/images/blog/2026/quinta-estate.jpg', readTime: '4 min de lecture', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Le Douro continue d\'attirer les plus grands investisseurs mondiaux. Récemment, un entrepreneur de la Napa Valley en Californie a investi près de 10 millions d\'euros dans un nouveau projet viticole et touristique dans la région.' },
                        { type: 'p', text: 'Cet investissement millionnaire prouve que la vallée du Douro est une destination mondiale de choix pour l\'oenotourisme de luxe, rivalisant avec les régions viticoles les plus célèbres au monde.' }
                    ]
                },
                {
                    slug: 'cimeira-mundial-enoturismo', title: 'Le Portugal accueille le Sommet Mondial de l\'Oenotourisme', excerpt: 'Notre pays renforce sa position de leader en accueillant le plus grand événement mondial dédié au tourisme du vin.', date: '11 mai 2026', category: 'Événements', image: '/images/blog/2026/gastronomy.jpg', readTime: '3 min de lecture', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Le Portugal continue d\'écrire l\'histoire du tourisme mondial. Le pays a été choisi pour accueillir le Sommet Mondial de l\'Oenotourisme, une étape importante qui souligne notre dévouement à la culture du vin et à l\'excellence de l\'hospitalité.' },
                        { type: 'p', text: 'Le Douro étant la principale vitrine de l\'oenotourisme national, nous célébrons cette reconnaissance mondiale et restons déterminés à offrir des expériences inoubliables.' }
                    ]
                },
                {
                    slug: 'quinta-renasce-experiencias', title: 'Expériences Sensorielles "Les Pieds dans la Terre" dans les Quintas', excerpt: 'L\'oenotourisme au Portugal évolue vers des expériences immersives, où le visiteur interagit directement avec la terre et le vin.', date: '6 avril 2026', category: 'Tendances', image: '/images/blog/2026/harvest.jpg', readTime: '4 min de lecture', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La tendance actuelle de l\'oenotourisme est l\'authenticité. Les visiteurs ne cherchent plus seulement à déguster du vin, mais à comprendre le terroir, à participer aux vendanges et à profiter d\'expériences "les pieds dans la terre".' },
                        { type: 'p', text: 'Nos circuits sur mesure dans le Douro sont conçus précisément dans ce but : connecter nos clients avec la véritable essence de la culture et de la tradition portugaises.' }
                    ]
                }
            ]
        },es.' }, { type: 'p', text: 'Dans nos circuits gastronomiques, nous incluons des d\u00e9jeuners dans des quintas s\u00e9lectionn\u00e9es avec des menus exclusifs.' }] },
                { slug: 'vindima-douro-tradicao-viva', title: 'Les Vendanges du Douro : Une Tradition Vivante', excerpt: 'Septembre dans le Douro est magique. La vall\u00e9e se transforme en une f\u00eate de couleurs et de traditions ancestrales.', date: '15 avril 2026', category: 'Tradition', image: '/images/blog/2026/harvest.jpg', readTime: '4 min de lecture', bookable: true, fullContent: [{ type: 'p', text: 'Quand septembre arrive dans le Douro, les terrasses explosent en palettes d\'or, de rouge et d\'ambre. C\'est la vindima, tradition qui remonte au XIIe si\u00e8cle.' }, { type: 'blockquote', text: 'Participer \u00e0 des vendanges dans le Douro, c\'est toucher l\'\u00e2me du Portugal.' }, { type: 'p', text: 'De septembre \u00e0 mi-octobre, nous organisons des circuits sp\u00e9ciaux de vendanges. Une exp\u00e9rience authentique et unique.' }] }
            ],
        },
        contact: {
            title: 'Prêt à embarquer ?',
            desc: 'Laissez-nous concevoir le voyage de vos rêves. Nous répondons en moins de 2 heures.',
            ctaBook: 'Réserver l\'Expérience', ctaWhatsapp: 'Discuter sur WhatsApp',
            emailLabel: 'E-mail', email: EMAIL,
            phoneLabel: 'Téléphone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Expériences sur mesure',
            title: 'Portugal. Your Way.',
            subtitle: 'Voyages privés à votre rythme.',
            desc: 'Nous pouvons personnaliser votre voyage privé dans le nord du Portugal, avec la possibilité de prolonger votre expérience jusqu\'à Lisbonne.',
            collection: 'Collection North Premium',
            collectionDesc: 'Expériences exclusives dans les destinations les plus emblématiques du nord du Portugal.',
            destinations: ['Amarante', 'Braga', 'Gerês', 'Guimarães', 'Porto', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisbonne'],
            cta: 'Contactez-nous pour personnaliser',
        },
        footer: {
            rights: 'Tous droits réservés.',
            terms: 'Conditions Générales', privacy: 'Politique de Confidentialité',
            licensedIn: 'Service agréé au Portugal · RNAAT 284/2026',
            nif: 'NIPC: 518 190 145',
            complaints: 'Livre de Réclamations Électronique'
        },
        cookieBanner: {
            text: 'Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site. En continuant, vous acceptez notre',
            linkText: 'Politique de Confidentialité',
            acceptBtn: 'Tout accepter',
            essentialBtn: 'Uniquement essentiels',
        },
        mobileBar: { book: 'Réserver maintenant', whatsapp: 'WhatsApp' },
        privacy: {
            title: 'Politique de Confidentialité',
            back: 'Retour',
            sections: [
                { title: '1. Identification du Responsable du Traitement', content: 'L\'entité responsable du traitement des données est "North Scape Tours" (NIPC : 518 190 145), basée au Portugal. Nous nous engageons à protéger les données personnelles conformément au RGPD européen.' },
                { title: '2. Collecte et Finalité', content: 'Nous ne disposons pas de formulaires de vente directe. Les données fournies lors des réservations ou des contacts servent exclusivement à l\'organisation personnalisée du tour.' },
                { title: '3. Partage Externe', content: 'Certaines données essentielles peuvent être communiquées uniquement aux partenaires logistiques pour des raisons d\'intolérances alimentaires ou d\'adaptation des véhicules.' },
                { title: '4. Politique de Cookies', content: 'Le site utilise des cookies à des fins techniques et analytiques. Vous pouvez retirer votre consentement à tout moment.' },
                { title: '5. Rétention et Droits', content: 'Nous conservons les informations des clients uniquement pendant la durée utile du service. Le client a le droit de demander l\'accès, la portabilité ou l\'effacement.' },
            ]
        },
        terms: {
            title: 'Conditions Générales',
            back: 'Retour',
            sections: [
                { title: '1. Champ d\'Application', content: 'Ces conditions générales s\'appliquent à tous les services fournis par North Scape Tours.' },
                { title: '2. Réservations et Paiements', content: 'Les réservations sont effectives après confirmation écrite. Les paiements sont effectués selon la méthode convenue.' },
                { title: '3. Politique d\'Annulation', content: 'Annulation gratuite jusqu\'à 48 heures avant le tour. Au-delà, le tarif plein est appliqué.' },
                { title: '4. Responsabilité', content: 'North Scape Tours détient toutes les assurances obligatoires. Nous ne sommes pas responsables de la perte de biens personnels.' },
                { title: '5. Juridiction', content: 'Pour la résolution de tout litige, le tribunal du district de Porto est compétent.' },
            ]
        },
        common: {
            back: 'Retour',
            backHome: 'Retour à l\'accueil',
            notFound: 'Article non trouvé',
            enjoyed: 'Vous avez aimé cet article ?',
            enjoyedDesc: 'Découvrez ces paysages en direct avec nous, lors d\'une expérience exclusive et sur mesure.',
            exclusiveExp: 'Expériences exclusives dans le nord du Portugal',
        },
    },
    de: {
        nav: {
            home: 'Startseite', tours: 'Touren',
            transfer: 'Transfer', about: 'Über Uns', reviews: 'Bewertungen',
            blog: 'Blog', contact: 'Kontakt', book: 'Buchen', bookNow: 'Jetzt Buchen',
        },
        hero: {
            subtitle: 'Exklusive Erlebnisse in Nordportugal',
            title1: 'Exklusive Douro-Erlebnisse',
            title2: 'mit Weinprobe und Flusskreuzfahrt.',
            desc: 'Abfahrten ab Porto mit komfortablem Transfer und persönlichem Service.',
            cta: 'Erlebnisse Anzeigen',
            ctaWhatsapp: 'Per WhatsApp Chatten',
            trustLine: 'Lizensierter Service · Kostenlose Stornierung bis 48h · Dreisprachige Guides',
        },
        quote: {
            text1: '"Der Douro ist keine Landschaft,',
            text2: 'er ist ein geologisches Gedicht."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'Flusserlebnisse',
            title: 'Touren & Preise',
            subtitle: 'Drei exklusive Erlebnisse an Bord, entworfen für den magischen Sonnenuntergang am Douro.',
            discount: '20% Rabatt für Kinder (0-8 Jahre)',
            labels: {
                private: 'Privatboot',
                shared: 'Geteiltes Boot',
                extra: 'Zusatzperson',
                perPersonLabel: 'Pro Person',
                book: 'Buchen',
                whatsapp: 'WhatsApp',
            },
            items: [
                {
                    id: 'picnic-sunset',
                    name: 'Luxus-Picknick, Boot & Zug',
                    tagline: 'An Bord · Sonnenuntergang',
                    image: '/images/novo-picnic.jpg',
                    bullets: [
                        '100% privates Erlebnis, keine Gruppen',
                        'Exklusiver Transport mit weinfachkundigem Fahrer-Guide',
                        'Luxus-Picknick in einem ausgewählten Weingut',
                        'Douro-Flusskreuzfahrt (privat oder kleine Gruppe)',
                        'Gutsbesichtigung mit Weinprobe und regionaler Honig- und Olivenölverkostung',
                        'Panoramazugfahrt durch das Douro-Tal',
                    ],
                    pricePrivate: 1000,
                    priceShared: 900,
                    priceExtra: 150,
                    capacityLabel: 'Bis zu 4 Personen',
                },
                {
                    id: 'golden-hour',
                    name: 'Douro Golden Hour',
                    subtitle: 'Private Kreuzfahrt, Mittagessen und Weinprobe.',
                    tagline: 'Magische Stunde · Kinoreifes Licht',
                    bullets: [
                        '100% privates Erlebnis, keine Gruppen',
                        'Exklusiver Transport mit weinfachkundigem Fahrer-Guide',
                        'Malerische Route durch das Douro-Tal (einschließlich Abschnitten der N222)',
                        'Gastronomisches Mittagessen in einem Michelin-Sterne-Restaurant mit Weinbegleitung',
                        'Douro-Flusskreuzfahrt (privat oder kleine Gruppe) am Ende des Tages',
                        'Weinprobe in einem renommierten Weingut mit Blick über das Tal',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Bis zu 4 Personen',
                },
                {
                    id: 'douro-premium',
                    name: 'Douro Premium',
                    subtitle: 'Wine Master, Mittagessen, Kreuzfahrt & Zug.',
                    tagline: 'Signatur · Kleine Gruppe',
                    image: '/images/douro-premium.jpg',
                    bullets: [
                        'Geführt von einem Douro-Weinmeister',
                        'Traditionelles Mittagessen mit Weinbegleitung',
                        'Besuche ausgewählter Güter mit Wein-, Olivenöl-, Honig- und Käseverkostungen',
                        'Exklusive Panorama-Flusskreuzfahrt auf dem Douro',
                        'Malerische Zugfahrt mit Blick über das Tal',
                    ],
                    perPerson: 180,
                    capacityLabel: 'Kleine Gruppe bis zu 8 Personen',
                },
            ],
        },
        transfer: {
            badge: 'Premium-Service',
            title: 'Exklusiver Transfer in Porto',
            subtitle: 'Komfort, Pünktlichkeit und Exzellenz in jedem Detail',
            intro: 'Wir bieten einen privaten exklusiven Transferservice in Porto an, mit Abholung und Rückgabe an Ihrem Hotel, Wohnsitz oder am Flughafen Francisco Sá Carneiro. Ein Service, der für anspruchsvolle Reisende entwickelt wurde.',
            features: [
                { title: 'Pünktlichkeit und Premium-Planung', items: ['Ihre Zeit ist wertvoll.', 'Flugüberwachung in Echtzeit', 'Fahrer vor der geplanten Zeit vor Ort', 'Wartezeit bei Ankunft inbegriffen'] },
                { title: 'Exklusives Fahrzeug für bis zu 8 Passagiere', items: ['Komfortables, leises und geräumiges Interieur', 'Viel Platz für Gepäck', 'Klimaanlage', 'Ideal für Familien oder Firmenveranstaltungen'] },
                { title: 'Sicherheit und Exzellenz', items: ['Erfahrene dreisprachige Fahrer', 'Babysitz (auf Anfrage erhältlich)', 'Vollständig lizensierter und versicherter Service'] },
            ],
            services: [
                { title: 'Transfer Flughafen \u2192 Hotel', desc: 'Flugverfolgung, persönlicher Empfang bei der Ankunft, umfassende Unterstützung beim Gepäck und direkter Transport zu Ihrem Ziel.' },
                { title: 'Transfer Hotel \u2192 Flughafen', desc: 'Pünktliche Abholung an Ihrem Hotel oder Ihrer Unterkunft mit angemessener Planung, um eine rechtzeitige Ankunft am Flughafen zu gewährleisten.' },
            ],
            price: '45',
            priceLabel: 'Ab',
            priceUnit: '€/Transfer',
            ctaBook: 'Individuelles Angebot Anfordern',
            ctaWhatsapp: 'Per WhatsApp Buchen',
        },
        about: {
            badge: 'Über Uns',
            title: 'Hinter dem Horizont: Die Seele von North Scape Tours',
            paragraphs: [
                'Bei North Scape Tours glauben wir, dass Luxus nicht durch das definiert wird, was man sieht, sondern durch das, was man fühlt. Wir sind aus der Leidenschaft heraus entstanden, den unsichtbaren Douro zu enthüllen - den, der nicht auf Touristenkarten erscheint, sondern in privaten Weingütern, in der Stille des Flusses bei der Abenddämmerung und in den Aromen einer Küche, die das Land ehrt, pulsiert.',
                'Unsere Mission ist es, Erlebnisse zu gestalten, nicht Reiserouten. Jedes Detail, vom Komfort unserer exklusiven Fahrzeuge bis hin zur sorgfältigen Auswahl von Michelin-Sterne-Partnern, ist für diejenigen konzipiert, die Zeit, Privatsphäre und Authentizität schätzen.',
                'Wir sind nicht einfach nur Reiseleiter; wir sind Geschichtenerzähler und Kuratoren unvergesslicher Momente. Auf dem Rücksitz unserer Exklusivität hört der Douro auf, ein Reiseziel zu sein, und wird zu einer ewigen Erinnerung.',
                'Willkommen am Douro, in Ihrem eigenen Tempo. Willkommen bei North Scape.',
            ],
            signature: 'North Scape Tours',
            imageAlt: 'Douro-Tal in Morgennebel gehüllt',
        },
        reviews: {
            badge: 'Bewertungen',
            title: 'Was Unsere Gäste Sagen',
            subtitle: 'Jede Bewertung ist eine echte Geschichte von jemandem, der das Erlebnis gelebt hat.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'Ein Erlebnis, das über den Tourismus hinausgeht. Wir fühlten uns wie Ehrengäste in einer der schönsten Regionen der Welt. Der Guide war außergewöhnlich und die Liebe zum Detail beeindruckend.', author: 'Sofia Albuquerque', location: 'Lissabon, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'Die Liebe zum Detail war tadellos. Von der privaten Bootsfahrt bis hin zu den exklusiven Weinproben war alles perfekt. Sehr empfehlenswert für jeden, der Porto besucht.', author: 'James Sterling', location: 'London, GB', flag: '🇬🇧', stars: 5 },
                { text: 'Ein magischer Tag im Douro-Tal. Der Guide war außergewöhnlich, die Weine hervorragend und das Mittagessen absolut köstlich. Ein absolutes Muss!', author: 'Marie Dubois', location: 'Paris, Frankreich', flag: '🇫🇷', stars: 4.5 },
                { text: 'Das beste Erlebnis, das ich je am Douro hatte! Die Bootsfahrt zum Sonnenuntergang war unvergesslich. Ich kann North Scape Tours nur wärmstens empfehlen.', author: 'Carlos Mendes', location: 'São Paulo, Brasilien', flag: '🇧🇷', stars: 5 },
                { text: 'Ein perfekter Tag im Douro-Tal! Die Weinprobe war erstklassig und die Landschaft atemberaubend. Wir werden auf jeden Fall wiederkommen.', author: 'Hannah Müller', location: 'München, Deutschland', flag: '🇩🇪', stars: 4.8 },
                { text: 'Wir haben unser Jubiläum mit North Scape gefeiert und es war der Höhepunkt unserer Reise. Das private Erlebnis fühlte sich wirklich exklusiv an. Es war jeden Cent wert.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'Der Guide wusste alles über die Weine und die Geschichte der Region. Ein unvergessliche Reise, die ich allen Weinliebhabern empfehle.', author: 'Alessandro Rossi', location: 'Mailand, Italien', flag: '🇮🇹', stars: 4.5 },
                { text: 'Der Flughafen-Transfer war makellos, und die Tour am nächsten Tag hat alle unsere Erwartungen übertroffen. Erstklassiger Service in jeder Hinsicht.', author: 'Lucía Fernández', location: 'Madrid, Spanien', flag: '🇪🇸', stars: 5 },
                { text: 'Tolle Erfahrung! Das Boot auf dem Douro bei Sonnenuntergang war magisch. Professioneller Service von Anfang bis Ende.', author: 'Daan van der Berg', location: 'Amsterdam, Niederlande', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Alles, Was Sie Wissen Müssen',
            items: [
                { q: 'Welche sind die 3 Douro-Touren und was ist bei jeder anders?', a: 'Wir bieten 3 verschiedene Touren am Douro an: Die einfachste Tour beinhaltet Besuch von 1 Weingut mit Mittagessen, Bootsfahrt, Weinprobe und Panoramazugfahrt. Alle unsere Touren werden von einem dreisprachigen Guide (PT/EN/FR) begleitet.' },
                { q: 'Wie lange dauert das Erlebnis?', a: 'Die Douro-Tour ist ein ganztägiges Erlebnis von 8 bis 9 Stunden. Das Douro-zu-zweit-Erlebnis hat die gleiche Dauer.' },
                { q: 'Ist es für Familien mit Kindern geeignet?', a: 'Ja! Die Douro-Tour ist ideal für Familien. Kinder sind willkommen und wir haben Babysitze für Transfers zur Verfügung. Kindermenüs sind in den Restaurants erhältlich.' },
                { q: 'Kann ich das Erlebnis individuell gestalten?', a: 'Absolut. Wir bieten private Touren an, bei denen Sie die Reiseroute anpassen, bestimmte Weingüter auswählen oder zusätzliche Stopps hinzufügen können. Kontaktieren Sie uns für eine maßgeschneiderte Tour.' },
                { q: 'Wie lauten die Stornierungsbedingungen?', a: 'Kostenlose Stornierung bis zu 48 Stunden vor dem Tourtermin. Nach dieser Frist wird der volle Preis berechnet.' },
                { q: 'Gibt es vegetarische Optionen oder Ernährungsanpassungen?', a: 'Ja. Unsere Partnerrestaurants bieten vegetarische, vegane und allergikerfreundliche Optionen an. Bitte informieren Sie uns bei der Buchung.' },
                { q: 'Finden die Touren das ganze Jahr über statt?', a: 'Ja, die Touren finden das ganze Jahr über statt. Jede Jahreszeit bietet eine andere Landschaft: grüne Reben im Frühling, Ernte im Herbst und goldene Terrassen im Winter.' },
                { q: 'Wie funktioniert der exklusive Transfer?', a: 'Der Fahrer trifft vor der geplanten Zeit ein. Bei Flughafen-Transfers überwachen wir Ihren Flug in Echtzeit. Exklusives Fahrzeug mit einer Kapazität für bis zu 8 Passagiere.' },
                { q: 'In welchen Sprachen werden die Touren angeboten?', a: 'Unsere Guides sprechen fließend Portugiesisch und Englisch. Für andere Sprachen kontaktieren Sie uns bitte, um die Verfügbarkeit zu prüfen.' },
                { q: 'Wie kann ich buchen?', a: 'Sie können direkt über unsere Website, per WhatsApp oder per E-Mail buchen. Wir bestätigen Ihre Buchung innerhalb von 2 Stunden.' },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'Douro-Tagebuch',
            subtitle: 'Geschichten, Geheimnisse und Erlebnisse aus dem sch\u00f6nsten Tal der Welt.',
            readMore: 'Geschichte lesen',
            bookCta: 'Dieses Erlebnis buchen',
            readTimeDefault: '3 Min. Lesezeit',
            items: [
                { slug: 'golden-hour-science-douro', title: 'Die Wissenschaft der Goldenen Stunde: Warum das Douro-Tal im Abendlicht leuchtet', excerpt: 'Das Abendlicht im Douro ver\u00e4ndert die Weinwahrnehmung und verwandelt jede Verkostung in ein einzigartiges Sinneserlebnis.', date: '10. Mai 2026', category: 'Erlebnisse', image: '/images/blog/2026/golden-hour.jpg', readTime: '4 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Es gibt einen Moment an jedem Tag im Douro-Tal, den die Winzer die goldene Stunde nennen. Das Licht wird bernsteinfarben und das gesamte Tal scheint in sanfter Flamme zu brennen.' }, { type: 'h3', text: 'Das North Scape Erlebnis' }, { type: 'p', text: 'Bei unseren privaten Touren planen wir jeden Moment so, dass die Hauptverkostung mit der goldenen Stunde zusammenf\u00e4llt.' }] },
                { slug: 'quintas-secretas-douro', title: 'Das Unsichtbare Douro: Private Quintas', excerpt: 'Entdecken Sie die historischen Douro-Anwesen, die nur auf private Einladung zug\u00e4nglich sind.', date: '3. Mai 2026', category: 'Exklusiv', image: '/images/blog/2026/quinta-estate.jpg', readTime: '5 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Das Alto Douro Weingebiet beherbergt \u00fcber 40.000 Weingüter. Die exklusivsten funktionieren nur auf private Einladung.' }, { type: 'blockquote', text: 'Wahrer Luxus im Douro l\u00e4sst sich nicht kaufen. Er wird mit Zeit und Neugier erobert.' }, { type: 'p', text: 'Bei North Scape Tours organisieren wir exklusive Besuche in privaten Quintas. Kontaktieren Sie uns für Ihr personalisiertes Erlebnis.' }] },
                { slug: 'gastronomia-michelin-douro', title: 'Haute Cuisine trifft Tradition: Die Michelin-Aromen des Douro', excerpt: 'Die gastronomische Revolution, die das Tal transformiert.', date: '25. April 2026', category: 'Gastronomie', image: '/images/blog/2026/gastronomy.jpg', readTime: '4 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Das Douro-Weingebiet war schon immer ein Land intensiver Aromen. Jetzt erfindet eine neue Generation von K\u00f6chen dieses Erbe mit Haute-Cuisine-Technik neu.' }, { type: 'blockquote', text: 'Im Douro zu kochen bedeutet, der Erde zuzuh\u00f6ren. Jede Zutat erz\u00e4hlt eine jahrhundertealte Geschichte.' }, { type: 'p', text: 'Bei unseren gastronomischen Touren bieten wir Mittagessen in ausgew\u00e4hlten Quintas mit exklusiven Men\u00fcs.' }] },
                { slug: 'vindima-douro-tradicao-viva', title: 'Die Douro-Weinlese: Eine Lebendige Tradition', excerpt: 'September im Douro ist magisch. Das Tal verwandelt sich in ein Fest der Farben und uralten Traditionen.', date: '15. April 2026', category: 'Tradition', image: '/images/blog/2026/harvest.jpg', readTime: '4 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Wenn der September im Douro ankommt, explodieren die Terrassen in Paletten aus Gold, Rot und Bernstein. Es ist die Vindima, eine Tradition aus dem 12. Jahrhundert.' }, { type: 'blockquote', text: 'An einer Weinlese im Douro teilzunehmen bedeutet, die Seele Portugals zu berühren.' }, { type: 'p', text: 'Von September bis Mitte Oktober organisieren wir spezielle Weinlese-Touren. Ein authentisches und einmaliges Erlebnis.' }] }
            ],
        },
        contact: {
            title: 'Bereit für die Reise?',
            desc: 'Lassen Sie uns Ihre Traumreise planen. Wir antworten innerhalb von 2 Stunden.',
            ctaBook: 'Erlebnis Buchen', ctaWhatsapp: 'Per WhatsApp Chatten',
            emailLabel: 'E-Mail', email: EMAIL,
            phoneLabel: 'Telefon', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Maßgeschneiderte Erlebnisse',
            title: 'Portugal. Your Way.',
            subtitle: 'Private Reisen in Ihrem Rhythmus.',
            desc: 'Wir können Ihre private Reise durch Nordportugal individuell gestalten, mit der Option, Ihr Erlebnis bis nach Lissabon zu verlängern.',
            collection: 'North Premium Kollektion',
            collectionDesc: 'Exklusive Erlebnisse an den ikonischsten Zielen Nordportugals.',
            destinations: ['Amarante', 'Braga', 'Gerês', 'Guimarães', 'Porto', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lissabon'],
            cta: 'Kontaktieren Sie uns für eine individuelle Planung',
        },
        footer: {
            rights: 'Alle Rechte vorbehalten.',
            terms: 'Allgemeine Geschäftsbedingungen', privacy: 'Datenschutzrichtlinie',
            licensedIn: 'Lizensierter Service in Portugal · RNAAT 284/2026',
            nif: 'NIPC: 518 190 145',
            complaints: 'Elektronisches Beschwerdebuch'
        },
        cookieBanner: {
            text: 'Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website machen. Durch die Fortsetzung stimmen Sie unserer',
            linkText: 'Datenschutzrichtlinie',
            acceptBtn: 'Alle akzeptieren',
            essentialBtn: 'Nur essenzielle',
        },
        mobileBar: { book: 'Jetzt buchen', whatsapp: 'WhatsApp' },
        privacy: {
            title: 'Datenschutzerklärung',
            back: 'Zurück',
            sections: [
                { title: '1. Identifizierung des Verantwortlichen', content: 'Verantwortlich für die Datenverarbeitung ist "North Scape Tours" (NIPC: 518 190 145) mit Sitz in Portugal. Wir verpflichten uns zum Schutz personenbezogener Daten gemäß der DSGVO.' },
                { title: '2. Erhebung und Zweck', content: 'Wir haben keine direkten Verkaufsformulare. Daten aus Buchungen dienen ausschließlich der Organisation der Tour.' },
                { title: '3. Externe Weitergabe', content: 'Daten werden nur bei Notwendigkeit an Logistikpartner (Weingüter/Restaurants) weitergegeben (z.B. Allergien).' },
                { title: '4. Cookie-Richtlinie', content: 'Die Website verwendet Cookies zu technischen und analytischen Zwecken. Sie können Ihre Einwilligung jederzeit widerrufen.' },
                { title: '5. Aufbewahrung und Rechte', content: 'Wir speichern Daten nur so lange wie nötig. Kunden haben das Recht auf Auskunft, Übertragbarkeit oder Löschung.' },
            ]
        },
        terms: {
            title: 'Allgemeine Geschäftsbedingungen',
            back: 'Zurück',
            sections: [
                { title: '1. Geltungsbereich', content: 'Diese Bedingungen gelten für alle Dienstleistungen von North Scape Tours.' },
                { title: '2. Buchung und Zahlung', content: 'Buchungen sind nach schriftlicher Bestätigung wirksam. Zahlungen erfolgen nach Vereinbarung.' },
                { title: '3. Stornierung', content: 'Kostenlose Stornierung bis 48 Stunden vor dem Termin. Danach wird der volle Preis berechnet.' },
                { title: '4. Haftung', content: 'Wir verfügen über alle gesetzlich vorgeschriebenen Versicherungen. Keine Haftung für den Verlust persönlicher Gegenstände.' },
                { title: '5. Gerichtsstand', content: 'Gerichtsstand für alle Streitigkeiten ist Porto.' },
            ]
        },
        common: {
            back: 'Zurück',
            backHome: 'Zur Startseite',
            notFound: 'Beitrag nicht gefunden',
            enjoyed: 'Hat Ihnen dieser Beitrag gefallen?',
            enjoyedDesc: 'Entdecken Sie diese Landschaften live mit uns in einem exklusiven, maßgeschneiderten Erlebnis.',
            exclusiveExp: 'Exklusive Erlebnisse in Nordportugal',
        },
    },
};
