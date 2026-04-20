export type Language = 'pt' | 'en';

export const WHATSAPP_NUMBER = '351911923499';
export const WHATSAPP_MESSAGE = 'Olá North Scape Tours! Gostaria de mais informações sobre os vossos tours no Douro.';
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const EMAIL = 'manager@northscapetours.pt';

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
            trustLine: 'Serviço licenciado · Cancelamento gratuito até 48h · Guias bilíngues',
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
            discount: 'Desconto de 20% para crianças dos 0 aos 8 anos',
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
                    name: 'Picnic & Sunset',
                    tagline: 'A bordo · Pôr do sol',
                    bullets: [
                        'Piquenique gourmet servido a bordo com produtos regionais selecionados',
                        'Navegação tranquila pelo Douro com vista privilegiada para o entardecer',
                        'Atmosfera íntima e descontraída, ideal para casais e pequenos grupos',
                    ],
                    pricePrivate: 950,
                    priceShared: 800,
                    priceExtra: 140,
                    capacityLabel: 'Até 4 pessoas',
                },
                {
                    id: 'golden-hour',
                    name: 'Golden Hour',
                    tagline: 'Hora mágica · Luz cinematográfica',
                    bullets: [
                        'Saída estratégica para apanhar a luz dourada sobre os socalcos',
                        'Degustação premium de Vinho do Porto e petiscos tradicionais portugueses',
                        'Serviço exclusivo a bordo com atendimento personalizado',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Até 4 pessoas',
                },
                {
                    id: 'sunset-signature',
                    name: 'Sunset Signature',
                    tagline: 'Assinatura · Grupo reduzido',
                    bullets: [
                        'Cruzeiro assinatura ao pôr do sol com cocktail de boas-vindas',
                        'Menu de degustação com harmonização de vinhos DOC Douro',
                        'Ambiente sofisticado com música ambiente e capacidade limitada',
                    ],
                    perPerson: 160,
                    capacityLabel: 'Mínimo 4 · Máximo 8 pessoas',
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
                { title: 'Segurança e Excelência', items: ['Motoristas experientes e bilíngues', 'Cadeirinha de bebé (mediante pedido)', 'Serviço totalmente licenciado e seguro'] },
            ],
            services: [
                { title: 'Transfer Aeroporto → Hotel', desc: 'Acompanhamento do voo, receção na área de chegadas, assistência total com a bagagem e transporte direto ao seu destino.' },
                { title: 'Transfer Hotel → Aeroporto', desc: 'Recolha pontual no hotel ou alojamento com planeamento adequado para garantir a chegada atempada ao aeroporto.' },
            ],
            price: '45',
            priceLabel: 'A partir de',
            priceUnit: '€/transfer',
            ctaBook: 'Solicitar Cotação Personalizada',
            ctaWhatsapp: 'Reservar via WhatsApp',
        },
        about: {
            badge: 'Quem Somos',
            title: 'Experiências Autênticas no Norte de Portugal',
            mission: 'Na North Scape Tours, o cliente não é um turista. É um convidado especial.',
            pillars: [
                { title: 'O Douro que se vive', desc: 'Os nossos roteiros vão além do óbvio. Conectamos cada cliente a vinícolas selecionadas, provas enogastronómicas autênticas e paisagens de tirar o fôlego.' },
                { title: 'O nosso diferencial', desc: 'Atendimento próximo, humano e personalizado. Roteiros feitos à medida e uma curadoria rigorosa de parceiros locais de excelência em conforto e segurança.' },
                { title: 'Muito além do Douro', desc: 'Exploramos o património histórico, a gastronomia e a natureza fora do turismo massificado, sempre com um padrão elevado de serviço.' },
            ],
            promise: 'A nossa promessa é criar experiências memoráveis, onde cada paisagem, cada vinho e cada momento se transformam numa ligação real com Portugal.',
        },
        reviews: {
            badge: 'Avaliações',
            title: 'O Que Dizem os Nossos Clientes',
            subtitle: 'Cada review é uma história real de quem viveu a experiência.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'Uma experiência que transcende o turismo. Sentimo-nos como convidados de honra numa das regiões mais belas do mundo. O guia foi excepcional e a atenção ao detalhe impressionante.', author: 'Sofia Albuquerque', location: 'Lisboa, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'Une journée magique dans la vallée du Douro. Le guide était exceptionnel, les vins superbes et le déjeuner absolument délicieux. À refaire absolument!', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 4.5 },
                { text: 'Melhor experiência de sempre no Douro! O passeio de barco ao pôr do sol foi inesquecível. Recomendo muito a North Scape Tours.', author: 'Carlos Mendes', location: 'São Paulo, Brasil', flag: '🇧🇷', stars: 5 },
                { text: 'Ein perfekter Tag im Douro-Tal! Die Weinprobe war erstklassig und die Landschaft atemberaubend. Wir kommen auf jeden Fall wieder.', author: 'Hannah Müller', location: 'Munique, Alemanha', flag: '🇩🇪', stars: 4.8 },
                { text: 'We celebrated our anniversary with North Scape and it was the highlight of our trip. The private experience felt truly exclusive. Worth every penny.', author: 'Michael & Sarah Chen', location: 'New York, EUA', flag: '🇺🇸', stars: 5 },
                { text: 'La guida sapeva tutto sui vini e sulla storia della regione. Un viaggio indimenticabile che consiglio a tutti gli amanti del vino.', author: 'Alessandro Rossi', location: 'Milão, Itália', flag: '🇮🇹', stars: 4.5 },
                { text: 'El transfer desde el aeropuerto fue impecable, y el tour al día siguiente superó todas nuestras expectativas. Servicio de primera clase.', author: 'Lucía Fernández', location: 'Madrid, Espanha', flag: '🇪🇸', stars: 5 },
                { text: 'Geweldige ervaring! De boot op de Douro bij zonsondergang was magisch. Professionele service van begin tot eind.', author: 'Daan van der Berg', location: 'Amesterdão, Holanda', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'Perguntas Frequentes',
            title: 'Tudo o Que Precisa de Saber',
            items: [
                { q: 'O que está incluído no Tour ao Douro?', a: 'O tour inclui transfer ida e volta desde o Porto, visita a vinícola selecionada, prova de vinhos DOC Douro, almoço em restaurante regional e passeio de barco pelo rio Douro. Guia bilíngue (PT/EN) incluído.' },
                { q: 'Quanto tempo dura a experiência?', a: 'O Tour no Douro tem duração de 8 a 9 horas (dia completo). A experiência Douro a Dois também tem a mesma duração.' },
                { q: 'É adequado para famílias com crianças?', a: 'Sim! O Tour no Douro é ideal para famílias. As crianças são bem-vindas e temos cadeirinha de bebé disponível para o transfer. Há opções de menu infantil nos restaurantes.' },
                { q: 'Posso personalizar a experiência?', a: 'Absolutamente. Oferecemos tours privados onde pode adaptar o roteiro, escolher vinícolas específicas ou adicionar paragens. Contacte-nos para um tour à medida.' },
                { q: 'Qual a política de cancelamento?', a: 'Cancelamento gratuito até 48 horas antes da data do tour. Após este prazo, aplica-se a tarifa completa.' },
                { q: 'Existem opções vegetarianas ou restrições alimentares?', a: 'Sim. Os nossos restaurantes parceiros oferecem opções vegetarianas, veganas e adaptadas a alergias. Informe-nos no momento da reserva.' },
                { q: 'Os tours funcionam durante todo o ano?', a: 'Sim, os tours operam durante todo o ano. Cada estação oferece uma paisagem diferente: vinhas verdes na primavera, colheita no outono e socalcos dourados no inverno.' },
                { q: 'Como funciona o transfer executivo?', a: 'O motorista chega ao local antes do horário combinado. Para transfers de aeroporto, monitorizamos o voo em tempo real. Viatura executiva com capacidade até 8 passageiros.' },
                { q: 'Em que idiomas é feito o tour?', a: 'Os nossos guias são fluentes em Português e Inglês. Para outros idiomas, consulte-nos para verificar disponibilidade.' },
                { q: 'Como posso reservar?', a: 'Pode reservar diretamente pelo nosso website, por WhatsApp ou por email. Confirmamos a sua reserva em menos de 2 horas.' },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'Diário da Primavera',
            subtitle: 'Quatro histórias da estação em que o Douro acorda.',
            readMore: 'Ler a Crónica',
            bookCta: 'Reservar Esta Experiência',
            readTimeDefault: '3 min de leitura',
            items: [
                {
                    slug: 'emerald-awakening-douro-spring', title: 'The Emerald Awakening: Douro\u2019s Secret Spring', excerpt: 'Descubra a rara fase \u201Cverde n\u00E9on\u201D do vale, um espet\u00E1culo ef\u00E9mero da natureza exclusivo dos viajantes de Abril.', date: '20 Abr 2026', category: 'Primavera', image: '/images/blog/spring2026/emerald-awakening.jpg', readTime: '3 min', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Todos os Abris, durante três breves semanas, o Vale do Douro sofre uma transformação cromática que poucos viajantes conhecem: a fase do verde néon. É o instante em que o primeiro rebento, tenro e translúcido, apanha a luz baixa da manhã e devolve ao vale um tom de esmeralda quase fluorescente — impossível de capturar em folheto, difícil de esquecer em memória.' },
                        { type: 'image', url: '/images/blog/spring2026/emerald-awakening.jpg', text: 'O rebento de Abril, fotografado ao amanhecer junto à margem do rio. A luz cria um verde impossível de ver em qualquer outro mês.' },
                        { type: 'h3', text: 'Porque só acontece em Abril' },
                        { type: 'p', text: 'A combinação é cirúrgica: solo de xisto ainda frio, humidade nocturna que persiste até às primeiras horas, sol baixo de primavera a atravessar as folhas jovens em contraluz. Basta um dia de calor intenso para a pigmentação escurecer e o fenómeno desaparecer até ao próximo ano.' },
                        { type: 'blockquote', text: 'O Douro de Abril é o único momento em que o vale parece iluminado por dentro.' },
                        { type: 'h3', text: 'Como ver o despertar esmeralda' },
                        { type: 'p', text: 'Organizamos saídas privadas ao amanhecer durante as três semanas da janela. Saída às 06h30 do Porto, chegada às encostas certas com a luz certa. Não há duas manhãs iguais — por isso limitamos a grupos de quatro.' }
                    ]
                },
                {
                    slug: 'barefoot-luxury-private-picnic', title: 'Barefoot Luxury: The Anatomy of a Private Picnic', excerpt: 'Porque o verdadeiro luxo em 2026 n\u00E3o \u00E9 cristal \u2014 \u00E9 sabor artesanal numa vinha secreta onde o tempo p\u00E1ra.', date: '18 Abr 2026', category: 'Luxo Lento', image: '/images/blog/spring2026/barefoot-luxury.jpg', readTime: '3 min', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'O luxo contemporâneo não se mede pelo peso do talher, mas pela discrição do cenário. Em 2026, os nossos hóspedes já não pedem o restaurante mais caro — pedem o local onde ninguém mais pode entrar. Um socalco escondido, uma mesa baixa de nogueira, linho cru, figos maduros e vinho branco do Douro a sete graus.' },
                        { type: 'image', url: '/images/blog/spring2026/barefoot-luxury.jpg', text: 'Picnic privado na Quinta do Pé do Monte — acessível apenas por caminho de terra batida e apenas para quem sabe o nome certo.' },
                        { type: 'h3', text: 'A anatomia de um piquenique que se recorda' },
                        { type: 'p', text: 'Três coisas distinguem um picnic nosso de qualquer outro: a curadoria (queijos DOP de três regiões, pão do dia, azeite de primeira prensagem a frio), a privacidade (zero público, zero trânsito) e o silêncio. Sobretudo o silêncio — aquele que deixa ouvir o vento a passar nas vinhas.' },
                        { type: 'blockquote', text: 'Luxo é quando a única agenda é ver a sombra das folhas a mudar de lugar.' },
                        { type: 'h3', text: 'Onde e quando' },
                        { type: 'p', text: 'Três localizações secretas, rotativas conforme a luz do dia e a época da floração. Reservamos apenas uma mesa por dia em cada quinta — nunca partilhamos o local com outro grupo.' }
                    ]
                },
                {
                    slug: 'n222-slow-motion-chauffeur', title: 'The N222 in Slow Motion: The Joy of Not Driving', excerpt: 'Viva a estrada mais bonita do mundo a partir do conforto do banco traseiro executivo, c\u00E1lice de vinho na m\u00E3o.', date: '15 Abr 2026', category: 'Transfer', image: '/images/blog/spring2026/n222-slow-motion.jpg', readTime: '3 min', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'A N222 entre Peso da Régua e Pinhão foi eleita pela Avis como a estrada mais bela do mundo. O segredo, porém, é que ela só revela a sua plenitude quando não se é a pessoa a conduzir. Cada curva, cada miradouro não oficial, cada inclinação acentuada exige atenção — e atenção é o preço que se paga quando se perde a paisagem.' },
                        { type: 'image', url: '/images/blog/spring2026/n222-slow-motion.jpg', text: 'A vista lateral a partir de uma Mercedes-Benz Classe V, a 40 km/h, no troço mais fotografado da N222.' },
                        { type: 'h3', text: 'Câmara lenta, a sério' },
                        { type: 'p', text: 'Nos nossos serviços de transfer, pedimos aos motoristas para fazerem este troço abaixo dos 50 km/h. Paramos em três miradouros não turísticos, sempre com água gelada à mão e a possibilidade de um cálice de branco do Douro no próprio carro. Sem pressa. Sem mapa. Só janela.' },
                        { type: 'blockquote', text: 'Conduzir a N222 é um rito. Ser conduzido na N222 é uma meditação.' },
                        { type: 'h3', text: 'Detalhes práticos' },
                        { type: 'p', text: 'Viatura executiva até 8 passageiros, motorista bilingue, percurso Porto → Pinhão em cerca de 2h30 com paragens incluídas. Ideal para clientes que preferem chegar descansados à experiência do rio.' }
                    ]
                },
                {
                    slug: 'golden-hour-science-douro', title: 'Golden Hour Science: How Douro\u2019s Light Changes Everything', excerpt: 'Explore a magia sensorial do vale quando o sol toca a \u00E1gua no \u00E2ngulo perfeito para o seu cruzeiro da tarde.', date: '10 Abr 2026', category: 'Golden Hour', image: '/images/blog/spring2026/golden-hour-science.jpg', readTime: '3 min', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Há uma razão científica para o Douro à hora dourada ser diferente de qualquer outro rio do mundo. O vale corre no sentido este-oeste, o que significa que, durante os 40 minutos antes do pôr-do-sol, a luz passa rasante sobre a água e multiplica-se nas mil curvas do rio. O resultado: um ouro líquido que só existe aqui.' },
                        { type: 'image', url: '/images/blog/spring2026/golden-hour-science.jpg', text: 'Os primeiros reflexos da hora dourada, captados a partir de um barco rabelo tradicional, rio abaixo de Pinhão.' },
                        { type: 'h3', text: 'A janela dos 40 minutos' },
                        { type: 'p', text: 'Cronometramos cada saída para apanhar exactamente este intervalo. Entre 45 e 5 minutos antes do sol tocar o horizonte, a superfície da água comporta-se como um espelho convexo — e cada socalco ganha um contorno dourado que desaparece em poucos minutos.' },
                        { type: 'blockquote', text: 'Não é pôr-do-sol. É uma equação de luz que resolve o vale.' },
                        { type: 'h3', text: 'O nosso cruzeiro Golden Hour' },
                        { type: 'p', text: 'Embarcação tradicional, capacidade até 4 pessoas, cocktail de boas-vindas com vinho do Porto branco, petiscos da região e o silêncio que a luz exige. Saídas diárias entre Abril e Outubro, mediante confirmação astronómica.' }
                    ]
                }
            ],
        },
        contact: {
            title: 'Pronto para embarcar?',
            desc: 'Deixe-nos desenhar a sua viagem de sonho. Respondemos em menos de 2 horas.',
            ctaBook: 'Reservar Experiência',
            ctaWhatsapp: 'Falar via WhatsApp',
            emailLabel: 'Email', email: EMAIL,
            phoneLabel: 'Telefone', phone: '+351 911 923 499',
        },
        footer: {
            rights: 'Todos os direitos reservados.',
            terms: 'Termos e Condições', privacy: 'Política de Privacidade',
            licensedIn: 'Serviço licenciado em Portugal · RNAVT n.º 11959 · RNAAT 284/2026',
            nif: 'NIF: 247 114 430',
            complaints: 'Livro de Reclamações Eletrónico'
        },
        cookieBanner: {
            text: 'Utilizamos cookies para lhe proporcionar a melhor experiência possível. Ao continuar, consideramos que concorda com a nossa',
            linkText: 'Política de Privacidade',
            acceptBtn: 'Aceitar Todos',
            essentialBtn: 'Apenas Essenciais',
        },
        mobileBar: { book: 'Reservar', whatsapp: 'WhatsApp' },
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
            trustLine: 'Licensed service · Free cancellation up to 48h · Bilingual guides',
        },
        quote: {
            text1: '"The Douro is not a landscape,',
            text2: 'it is a geological poem."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: 'River Experiences',
            title: 'Tours & Pricing',
            subtitle: 'Three exclusive on-board experiences crafted for the Douro\'s magical sunset.',
            discount: '20% discount for children aged 0 to 8',
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
                    name: 'Picnic & Sunset',
                    tagline: 'On board · Sunset',
                    bullets: [
                        'Gourmet picnic served on board with hand-picked regional produce',
                        'Serene cruise along the Douro with prime sunset views',
                        'Intimate, relaxed atmosphere, ideal for couples and small groups',
                    ],
                    pricePrivate: 950,
                    priceShared: 800,
                    priceExtra: 140,
                    capacityLabel: 'Up to 4 people',
                },
                {
                    id: 'golden-hour',
                    name: 'Golden Hour',
                    tagline: 'Magic hour · Cinematic light',
                    bullets: [
                        'Timed departure to catch the golden light over the terraces',
                        'Premium Port wine tasting with traditional Portuguese appetisers',
                        'Exclusive on-board service with personalised attention',
                    ],
                    pricePrivate: 1000,
                    priceShared: 850,
                    priceExtra: 150,
                    capacityLabel: 'Up to 4 people',
                },
                {
                    id: 'sunset-signature',
                    name: 'Sunset Signature',
                    tagline: 'Signature · Small group',
                    bullets: [
                        'Signature sunset cruise with a welcome cocktail',
                        'Tasting menu paired with DOC Douro wines',
                        'Sophisticated setting with ambient music and limited capacity',
                    ],
                    perPerson: 160,
                    capacityLabel: 'Minimum 4 · Maximum 8 people',
                },
            ],
        },
        transfer: {
            badge: 'Premium Service',
            title: 'Executive Transfer in Porto',
            subtitle: 'Comfort, Punctuality and Excellence in Every Detail',
            intro: 'We offer a private executive transfer service in Porto, with pick-up and drop-off at your hotel, residence or Francisco Sá Carneiro Airport. A service designed for demanding travellers.',
            features: [
                { title: 'Punctuality and Premium Planning', items: ['Your time is valuable.', 'Real-time flight monitoring', 'Driver on location before scheduled time', 'Arrival waiting time included'] },
                { title: 'Executive Vehicle up to 8 Passengers', items: ['Comfortable, silent and spacious interior', 'Ample luggage space', 'Air conditioning', 'Ideal for families or corporate events'] },
                { title: 'Safety and Excellence', items: ['Experienced bilingual drivers', 'Baby seat (available upon request)', 'Fully licensed and insured service'] },
            ],
            services: [
                { title: 'Transfer Airport → Hotel', desc: 'Flight tracking, personalised reception at arrivals, total luggage assistance and direct transport to your destination.' },
                { title: 'Transfer Hotel → Airport', desc: 'Punctual pick-up at your hotel or accommodation with adequate planning to ensure a timely arrival at the airport.' },
            ],
            price: '45',
            priceLabel: 'From',
            priceUnit: '€/transfer',
            ctaBook: 'Request a Custom Quote',
            ctaWhatsapp: 'Book via WhatsApp',
        },
        about: {
            badge: 'About Us',
            title: 'Authentic Experiences in Northern Portugal',
            mission: 'At North Scape Tours, the client is not a tourist. They are a special guest.',
            pillars: [
                { title: 'The Douro you live', desc: 'Our itineraries go beyond the obvious. We connect each client to selected wineries, authentic gastronomic tastings and breathtaking landscapes.' },
                { title: 'Our differential', desc: 'Close, human and personalised service. Tailored itineraries and rigorous curation of local partners standing for excellence, comfort, and safety.' },
                { title: 'Far beyond the Douro', desc: 'We explore the historical heritage, gastronomy, and nature away from mass tourism, always with a high standard of service.' },
            ],
            promise: 'Our promise is to create memorable experiences, where every landscape, every wine and every moment becomes a real connection with Portugal.',
        },
        reviews: {
            badge: 'Reviews',
            title: 'What Our Guests Say',
            subtitle: 'Every review is a real story from someone who lived the experience.',
            rating: '4.9', totalReviews: '127',
            items: [
                { text: 'An experience that transcends tourism. We felt like guests of honour in one of the most beautiful regions in the world. The guide was exceptional and the attention to detail impressive.', author: 'Sofia Albuquerque', location: 'Lisbon, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'A magical day in the Douro Valley. The guide was exceptional, the wines superb and the lunch absolutely delicious. A must-do experience!', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 4.5 },
                { text: 'Best experience ever in the Douro! The sunset boat ride was unforgettable. Highly recommend North Scape Tours.', author: 'Carlos Mendes', location: 'São Paulo, Brazil', flag: '🇧🇷', stars: 5 },
                { text: 'A perfect day in the Douro Valley! The wine tasting was first-class and the landscape breathtaking. We will definitely come back.', author: 'Hannah Müller', location: 'Munich, Germany', flag: '🇩🇪', stars: 4.8 },
                { text: 'We celebrated our anniversary with North Scape and it was the highlight of our trip. The private experience felt truly exclusive. Worth every penny.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'The guide knew everything about the wines and history of the region. An unforgettable journey I recommend to all wine lovers.', author: 'Alessandro Rossi', location: 'Milan, Italy', flag: '🇮🇹', stars: 4.5 },
                { text: 'The airport transfer was flawless, and the tour the next day exceeded all our expectations. First-class service throughout.', author: 'Lucía Fernández', location: 'Madrid, Spain', flag: '🇪🇸', stars: 5 },
                { text: 'Amazing experience! The boat on the Douro at sunset was magical. Professional service from start to finish.', author: 'Daan van der Berg', location: 'Amsterdam, Netherlands', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Everything You Need to Know',
            items: [
                { q: 'What\'s included in the Douro Tour?', a: 'The tour includes round-trip transfer from Porto, visit to a selected winery, DOC Douro wine tasting, lunch at a regional restaurant and a boat cruise on the Douro River. Bilingual guide (PT/EN) included.' },
                { q: 'How long does the experience last?', a: 'The Douro Tour is a full-day experience lasting 8 to 9 hours. The Douro for Two experience has the same duration.' },
                { q: 'Is it suitable for families with children?', a: 'Yes! The Douro Tour is ideal for families. Children are welcome and we have baby seats available for transfers. Children\'s menu options are available at restaurants.' },
                { q: 'Can I customise the experience?', a: 'Absolutely. We offer private tours where you can adapt the itinerary, choose specific wineries or add extra stops. Contact us for a bespoke tour.' },
                { q: 'What is the cancellation policy?', a: 'Free cancellation up to 48 hours before the tour date. After this deadline, the full rate applies.' },
                { q: 'Are there vegetarian options or dietary accommodations?', a: 'Yes. Our partner restaurants offer vegetarian, vegan and allergy-adapted options. Please inform us at the time of booking.' },
                { q: 'Do tours operate year-round?', a: 'Yes, tours run throughout the year. Each season offers a different landscape: green vines in spring, harvest in autumn and golden terraces in winter.' },
                { q: 'How does the executive transfer work?', a: 'The driver arrives before the scheduled time. For airport transfers, we monitor your flight in real time. Executive vehicle with capacity for up to 8 passengers.' },
                { q: 'What languages are tours available in?', a: 'Our guides are fluent in Portuguese and English. For other languages, please contact us to check availability.' },
                { q: 'How can I book?', a: 'You can book directly through our website, via WhatsApp or by email. We confirm your booking within 2 hours.' },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'The Spring Journal',
            subtitle: 'Four stories from the season when the Douro wakes up.',
            readMore: 'Read the Story',
            bookCta: 'Book This Experience',
            readTimeDefault: '3 min read',
            items: [
                {
                    slug: 'emerald-awakening-douro-spring', title: 'The Emerald Awakening: Douro\u2019s Secret Spring', excerpt: 'Discover the rare \u201Cneon green\u201D phase of the valley, a short-lived spectacle of nature exclusive to April travellers.', date: 'April 20, 2026', category: 'Spring', image: '/images/blog/spring2026/emerald-awakening.jpg', readTime: '3 min', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'Every April, for just three short weeks, the Douro Valley undergoes a chromatic transformation that few travellers ever witness: the neon-green phase. It is the moment when the first leaves, tender and translucent, catch the low morning light and return an almost fluorescent emerald to the valley — impossible to capture in a brochure, impossible to forget once seen.' },
                        { type: 'image', url: '/images/blog/spring2026/emerald-awakening.jpg', text: 'The April bud, photographed at dawn near the riverbank. The light produces a green you cannot see in any other month.' },
                        { type: 'h3', text: 'Why it only happens in April' },
                        { type: 'p', text: 'The combination is surgical: schist soil still cold, overnight humidity that lingers into the first hours, low spring sun backlighting the young leaves. A single hot day is enough to darken the pigment and retire the phenomenon until next year.' },
                        { type: 'blockquote', text: 'April\u2019s Douro is the only moment the valley seems to be lit from within.' },
                        { type: 'h3', text: 'How to see the emerald awakening' },
                        { type: 'p', text: 'We run private dawn departures during the three-week window. Pickup at 06:30 from Porto, arrival at the right slopes with the right light. No two mornings are alike — which is why we cap every departure at four guests.' }
                    ]
                },
                {
                    slug: 'barefoot-luxury-private-picnic', title: 'Barefoot Luxury: The Anatomy of a Private Picnic', excerpt: 'Why true luxury in 2026 isn\u2019t about crystal \u2014 it\u2019s about artisanal flavours in a secret vineyard where time stands still.', date: 'April 18, 2026', category: 'Slow Luxury', image: '/images/blog/spring2026/barefoot-luxury.jpg', readTime: '3 min', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Contemporary luxury is no longer measured by the weight of the cutlery, but by the discretion of the setting. In 2026, our guests stop asking for the most expensive restaurant — they ask for the place no one else can reach. A hidden terrace, a low walnut table, raw linen, ripe figs, and a white Douro wine served at exactly seven degrees.' },
                        { type: 'image', url: '/images/blog/spring2026/barefoot-luxury.jpg', text: 'Private picnic at Quinta do P\u00E9 do Monte \u2014 reachable only by dirt track and only by those who know the right name.' },
                        { type: 'h3', text: 'The anatomy of a picnic you\u2019ll remember' },
                        { type: 'p', text: 'Three things set our picnics apart from any other: the curation (DOP cheeses from three regions, bread baked the same morning, cold-pressed extra virgin olive oil), the privacy (zero crowds, zero traffic), and the silence. Above all, the silence — the kind that lets you hear the wind move through the vines.' },
                        { type: 'blockquote', text: 'Luxury is when the only agenda is watching the leaves shift their shadows.' },
                        { type: 'h3', text: 'Where and when' },
                        { type: 'p', text: 'Three secret locations, rotated according to the light and the flowering stage. We reserve only one table per day at each estate — we never share the setting with another group.' }
                    ]
                },
                {
                    slug: 'n222-slow-motion-chauffeur', title: 'The N222 in Slow Motion: The Joy of Not Driving', excerpt: 'Experience the world\u2019s most beautiful road from the comfort of an executive backseat, glass of wine in hand.', date: 'April 15, 2026', category: 'Transfer', image: '/images/blog/spring2026/n222-slow-motion.jpg', readTime: '3 min', bookable: false,
                    fullContent: [
                        { type: 'p', text: 'The N222, between Peso da R\u00E9gua and Pinh\u00E3o, was named by Avis the most beautiful road in the world. The secret, however, is that it only reveals itself to someone who isn\u2019t driving. Every curve, every unmarked viewpoint, every steep descent demands attention — and attention is the price you pay when you lose the view.' },
                        { type: 'image', url: '/images/blog/spring2026/n222-slow-motion.jpg', text: 'Side window view from a Mercedes-Benz V-Class, at 40 km/h, on the most photographed section of the N222.' },
                        { type: 'h3', text: 'Slow motion, literally' },
                        { type: 'p', text: 'On our transfers, we ask our chauffeurs to drive this stretch under 50 km/h. We stop at three non-tourist viewpoints, always with chilled water to hand and the option of a glass of white Douro inside the car. No hurry. No map. Just the window.' },
                        { type: 'blockquote', text: 'Driving the N222 is a rite. Being driven on the N222 is a meditation.' },
                        { type: 'h3', text: 'Practical detail' },
                        { type: 'p', text: 'Executive vehicle up to 8 passengers, bilingual chauffeur, Porto \u2192 Pinh\u00E3o route in around 2h30 with stops included. Ideal for guests who prefer to arrive rested at their river experience.' }
                    ]
                },
                {
                    slug: 'golden-hour-science-douro', title: 'Golden Hour Science: How Douro\u2019s Light Changes Everything', excerpt: 'Explore the sensory magic of the valley as the sun hits the water at the perfect angle for your evening cruise.', date: 'April 10, 2026', category: 'Golden Hour', image: '/images/blog/spring2026/golden-hour-science.jpg', readTime: '3 min', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'There is a scientific reason why golden hour in the Douro is unlike any other river in the world. The valley runs east to west, which means that for the 40 minutes before sunset, the light skims the water and multiplies itself across the river\u2019s thousand curves. The result: a liquid gold that exists only here.' },
                        { type: 'image', url: '/images/blog/spring2026/golden-hour-science.jpg', text: 'The first reflections of golden hour, captured from a traditional rabelo boat, downriver from Pinh\u00E3o.' },
                        { type: 'h3', text: 'The 40-minute window' },
                        { type: 'p', text: 'We time every departure to catch exactly this interval. Between 45 and 5 minutes before the sun hits the horizon, the water behaves like a convex mirror — and each terrace gains a gold contour that disappears within minutes.' },
                        { type: 'blockquote', text: 'It\u2019s not a sunset. It\u2019s a light equation that solves the valley.' },
                        { type: 'h3', text: 'Our Golden Hour cruise' },
                        { type: 'p', text: 'Traditional boat, capacity up to 4 guests, welcome cocktail of white Port wine, regional finger food, and the silence the light requires. Daily departures April through October, subject to astronomical confirmation.' }
                    ]
                },
            ],
        },
        contact: {
            title: 'Ready to embark?',
            desc: 'Let us design your dream trip. We reply within 2 hours.',
            ctaBook: 'Book Experience', ctaWhatsapp: 'Chat on WhatsApp',
            emailLabel: 'Email', email: EMAIL,
            phoneLabel: 'Phone', phone: '+351 911 923 499',
        },
        footer: {
            rights: 'All rights reserved.',
            terms: 'Terms and Conditions', privacy: 'Privacy Policy',
            licensedIn: 'Licensed service in Portugal · RNAVT No. 11959 · RNAAT 284/2026',
            nif: 'VAT Number: 247 114 430',
            complaints: 'Electronic Complaints Book'
        },
        cookieBanner: {
            text: 'We use cookies to ensure you get the best experience on our website. By continuing, you agree to our',
            linkText: 'Privacy Policy',
            acceptBtn: 'Accept All',
        },
        mobileBar: { book: 'Book Now', whatsapp: 'WhatsApp' },
    },
};
