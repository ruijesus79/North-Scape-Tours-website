export type Language = 'pt' | 'en' | 'es' | 'fr' | 'de';
import { ALL_17_TOURS, VIP_EXTRAS, type TourItem, type VipExtraItem, type TourPricingTier } from './data/toursData';
export type { TourItem, VipExtraItem, TourPricingTier };

export const WHATSAPP_NUMBER = '351911923499';
export const WHATSAPP_MESSAGE = 'Olá NORTHÉ! Gostaria de mais informações sobre os vossos tours privados no Douro e Norte de Portugal.';
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const WHATSAPP_MESSAGES: Record<Language, string> = {
    pt: 'Olá NORTHÉ! Gostaria de mais informações sobre os vossos tours privados no Douro e Norte de Portugal.',
    en: 'Hello NORTHÉ! I would like more information regarding your private tours in the Douro Valley and Northern Portugal.',
    es: '¡Hola NORTHÉ! Me gustaría más información sobre sus tours privados en el Valle del Duero y Norte de Portugal.',
    fr: "Bonjour NORTHÉ ! J'aimerais avoir plus d'informations sur vos circuits privés dans la Vallée du Douro et le Nord du Portugal.",
    de: 'Hallo NORTHÉ! Ich hätte gerne weitere Informationen zu Ihren privaten Touren im Douro-Tal und Nordportugal.',
};

export const getWhatsAppLink = (lang: Language = 'en', customMsg?: string) => {
    const text = customMsg || WHATSAPP_MESSAGES[lang] || WHATSAPP_MESSAGES.en;
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
};
export const EMAIL = 'info@northetours.com';
export const FACEBOOK_PAGE = 'https://www.facebook.com/profile.php?id=61583598036171';
export const INSTAGRAM_PAGE = 'https://www.instagram.com/northetours/';
export const TIKTOK_PAGE = 'https://www.tiktok.com/@northetours';
export const YOUTUBE_PAGE = 'https://www.youtube.com/@NorthETours';
export const GETYOURGUIDE_LINK = 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/';
export const GOOGLE_REVIEWS_LINK = 'https://share.google/1cNLfjIGsUnAx9ebu';
export const CONTENT = {
    pt: {
        nav: {
            home: 'Início', tours: 'Private Tours', douro: 'Douro Valley', north: 'Northern Portugal', porto: 'Porto Experiences', about: 'Sobre a NORTHÉ', reviews: 'Avaliações',
            blog: 'Blog', contact: 'Contacto', book: 'Reservar', bookNow: 'Reservar Agora',
        },
        hero: {
            subtitle: 'Experiências Exclusivas no Norte de Portugal',
            title1: 'Experiências Privadas a partir do Porto',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Experiências privadas pelo Douro, Porto e Norte de Portugal, com transporte executivo e itinerários cuidadosamente pensados para cada grupo.',
            cta: 'Explorar Experiências',
            ctaWhatsapp: 'Falar via WhatsApp',
            trustLine: '100% Privado · 1–8 Pessoas · Transporte Executivo · Cancelamento Gratuito até 48h',
        },
        quote: {
            text1: '"O Douro não é uma paisagem,',
            text2: 'é um poema geológico."',
            author: 'Miguel Torga',
        },
        tours: {
            badge: '100% Tours Privados',
            title: 'Coleção de Tours Privados',
            subtitle: '17 tours privados exclusivos para grupos de 1 a 8 pessoas, ao seu próprio ritmo.',
            categories: {
                all: 'Todos os Tours',
                douro: 'Douro Valley',
                north: 'Northern Portugal',
                porto: 'Porto Experiences',
            },
            filterAll: 'Todos os Tours (17)',
            searchPlaceholder: 'Pesquisar destino, vinhos, cruzeiro...',
            labels: {
                from: 'Desde',
                groupSize: 'Grupo privado de 1 a 8 pessoas',
                perGroup: 'por grupo',
                viewTour: 'Ver Tour & Preços',
                whatsapp: 'WhatsApp',
                gygBadge: 'GetYourGuide Verified',
                details: 'Ver Detalhes',
                duration: 'Duração',
                highlights: 'Destaques',
                included: 'Incluído',
                pricingNote: 'Preço total para grupo fechado',
                freeCancel: 'Cancelamento gratuito até 48h',
                customQuote: 'Pedir Orçamento',
            },
            extrasTitle: 'Upgrades VIP & Celebrações Especiais',
            extrasSubtitle: 'Torne o seu dia memorável com experiências VIP personalizadas para o seu grupo privado:',
            extras: VIP_EXTRAS.map(e => ({
                id: e.id,
                name: e.name.pt,
                tagline: e.tagline.pt,
                desc: e.desc.pt,
                price: e.price,
            })),
            items: ALL_17_TOURS.map(t => ({
                id: t.id,
                code: t.code,
                category: t.category,
                categoryLabel: t.categoryLabel.pt,
                name: t.name.pt,
                subtitle: t.subtitle.pt,
                tagline: t.tagline.pt,
                shortDesc: t.shortDesc.pt,
                fullDesc: t.fullDesc.pt,
                duration: t.duration.pt,
                highlights: t.highlights.pt,
                included: t.included.pt,
                pricingTiers: t.pricingTiers,
                startingPrice: t.startingPrice,
                gygVerified: t.gygVerified,
                gygUrl: t.gygUrl,
                image: t.image,
                gallery: t.gallery,
            })),
        },
        transfer: {
            badge: 'Serviço Premium',
            title: 'Transfer Executivo no Porto',
            subtitle: 'Conforto, Pontualidade e Excelência em Cada Detalhe',
            intro: 'Oferecemos serviço de transfer executivo privado no Porto, com recolha e entrega no hotel, residência ou no Aeroporto Francisco Sá Carneiro. Um serviço pensado para viajantes exigentes.',
            features: [
                { title: 'Pontualidade e Planeamento Premium', items: ['O seu tempo é valioso.', 'Monitorização de voo em tempo real', 'Motorista no local antes do horário', 'Tempo de espera incluído na chegada'] },
                { title: 'Viatura Executiva até 8 Passageiros', items: ['Interior confortável, silencioso e espaçoso', 'Amplo espaço para bagagem', 'Ar condicionado', 'Ideal para famílias ou executivos'] },
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
            badge: "Sobre a NORTHÉ",
            title: "Experiências privadas, criadas para descobrir Portugal de uma forma mais pessoal.",
            paragraphs: [
                "A NORTHÉ nasceu no Porto com uma ideia simples: transformar cada passeio em uma experiência que tenha significado. Criamos viagens privadas pelo Douro, Porto e Norte de Portugal, combinando paisagens, vinhos, gastronomia, cultura e lugares cuidadosamente selecionados.",
                "Cada experiência é pensada para o seu grupo, com conforto, flexibilidade e atenção aos detalhes — porque conhecer um destino não precisa seguir um roteiro igual para todos.",
            ],
            signature: "NORTHÉ",
            subsignature: "Private Tours & Bespoke Journeys",
            stat: "100%",
            statLabel: "Privado e Personalizado",
        },
        reviews: {
            badge: 'Avaliações',
            title: 'O Que Dizem os Nossos Clientes',
            subtitle: 'Cada review é uma história real de quem viveu a experiência.',
            rating: '5.0', totalReviews: '5.0 ★★★★★',
            googleScore: '5.0',
            googleBadge: 'Google Reviews',
            googleVerified: 'Classificação 5.0 Estrelas no Google',
            googleHighlight: '100% de avaliações 5 estrelas verificadas',
            viewOnGoogle: 'Ver todas as avaliações no Google Maps',
            writeOnGoogle: 'Avaliar no Google',
            bottomTitle: 'Viveu uma experiência inesquecível com a NORTHÉ?',
            bottomSubtitle: 'A sua opinião é fundamental para nós. Leia as avaliações no nosso perfil oficial do Google ou partilhe a sua própria experiência.',
            verifiedTag: 'Avaliação Verificada no Google',
            items: [
                { text: 'Uma experiência que transcende o turismo. Sentimo-nos como convidados de honra numa das regiões mais belas do mundo. O guia foi excepcional e a atenção ao detalhe impressionante.', author: 'Sofia Albuquerque', location: 'Lisboa, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'A atenção ao detalhe foi impecável. Do passeio de barco privado às provas de vinhos exclusivas, tudo foi perfeito. Altamente recomendado para quem visita o Porto.', author: 'James Sterling', location: 'Londres, Reino Unido', flag: '🇬🇧', stars: 5 },
                { text: 'Um dia mágico no Douro. O guia foi excelente, os vinhos soberbos e o almoço delicioso. Recomendo vivamente!', author: 'Marie Dubois', location: 'Paris, França', flag: '🇫🇷', stars: 5 },
                { text: 'Melhor experiência de sempre no Douro! O passeio de barco ao pôr do sol foi inesquecível.', author: 'Carlos Mendes', location: 'São Paulo, Brasil', flag: '🇧🇷', stars: 5 },
                { text: 'Um dia perfeito! A prova de vinhos foi de alto nível e a paisagem é de cortar a respiração.', author: 'Hannah Müller', location: 'Munique, Alemanha', flag: '🇩🇪', stars: 5 },
                { text: 'Celebrámos o nosso aniversário com a NORTHÉ e foi o ponto alto da nossa viagem. Luxo real.', author: 'Michael & Sarah Chen', location: 'Nova Iorque, EUA', flag: '🇺🇸', stars: 5 },
                { text: 'O guia sabia tudo sobre a história da região. Uma viagem imperdível para amantes de vinho.', author: 'Alessandro Rossi', location: 'Milão, Itália', flag: '🇮🇹', stars: 5 },
                { text: 'Transfer impecável e tour ainda melhor. Serviço de primeira classe do início ao fim.', author: 'Lucía Fernández', location: 'Madrid, Espanha', flag: '🇪🇸', stars: 5 },
                { text: 'Incrível! O Douro é mágico e a equipa da NORTHÉ tornou tudo mais especial.', author: 'Daan van der Berg', location: 'Amesterdão, Holanda', flag: '🇳🇱', stars: 5 },
            ],
        },

                faq: {
            badge: "FAQ",
            title: "Perguntas Frequentes",
            subtitle: "Respostas claras e transparentes às dúvidas mais frequentes antes de reservar a sua experiência privada.",
            searchPlaceholder: "Pesquisar dúvidas (ex: barco, pick-up, crianças, cancelamento)...",
            noResults: "Não foram encontradas perguntas para esta pesquisa.",
            clearSearch: "Limpar pesquisa",
            whatsappTitle: "Ainda tem alguma dúvida sobre a sua experiência?",
            whatsappSubtitle: "Fale diretamente com a NORTHÉ. Teremos todo o gosto em ajudar a desenhar a experiência e itinerário ideais para o seu grupo.",
            whatsappBtn: "Falar pelo WhatsApp",
            categories: [
                { id: "all", label: "Todas as Perguntas" },
                { id: "reservas", label: "Reservas e Preços" },
                { id: "transporte", label: "Pick-up e Transporte" },
                { id: "douro", label: "Vale do Douro" },
                { id: "barco", label: "Passeios de Barco" },
                { id: "familias", label: "Famílias e Acessibilidade" },
                { id: "gastronomia", label: "Alimentação e Dietas" },
                { id: "cancelamentos", label: "Cancelamentos e Flexibilidade" },
                { id: "especiais", label: "Ocasiões Especiais" },
            ],
            items: [
                {
                    category: "reservas",
                    q: "Como posso reservar uma experiência privada com a NORTHÉ?",
                    a: "Pode solicitar a sua experiência diretamente através do nosso site, WhatsApp ou pelos canais de contacto da NORTHÉ. Envie-nos a data pretendida, número de pessoas e a experiência de interesse. A nossa equipa confirmará a disponibilidade e todos os detalhes antes da reserva.",
                },
                {
                    category: "reservas",
                    q: "Com quanta antecedência devo fazer a minha reserva?",
                    a: "Recomendamos reservar com antecedência, especialmente para experiências no Douro, passeios de barco, visitas a quintas e datas de maior procura. Reservas de última hora podem ser possíveis, mediante disponibilidade.",
                },
                {
                    category: "reservas",
                    q: "Os tours da NORTHÉ são 100% privados?",
                    a: "Sim. A NORTHÉ é especializada em experiências privadas. O seu grupo viaja e vive a experiência com exclusividade, sem partilhar a van com outros clientes.",
                },
                {
                    category: "reservas",
                    q: "Como funciona o preço de uma experiência privada?",
                    a: "O preço depende da experiência escolhida, do número de participantes, do itinerário e dos serviços incluídos. Cada experiência apresenta as respetivas condições e preço antes da reserva.",
                },
                {
                    category: "reservas",
                    q: "O valor apresentado é por pessoa ou por grupo?",
                    a: "O valor apresentado é por grupo privado, e não por pessoa. As experiências da NORTHÉ podem ser reservadas para grupos de 1 a 8 pessoas, mantendo a exclusividade do serviço para o seu grupo. O valor varia de acordo com a experiência escolhida e, quando aplicável, com o número de participantes.",
                },
                {
                    category: "reservas",
                    q: "O que está incluído no valor? Existem custos adicionais?",
                    a: "Cada experiência apresenta claramente o que está incluído. Quando existem serviços opcionais, entradas, refeições, provas, passeios de barco ou outros extras não incluídos, estes serão identificados previamente.",
                },
                {
                    category: "reservas",
                    q: "Quais são as formas de pagamento disponíveis?",
                    a: "As opções de pagamento disponíveis são informadas no momento da reserva. O pagamento é realizado através de meios seguros e os detalhes são confirmados antes da experiência.",
                },
                {
                    category: "reservas",
                    q: "Posso solicitar uma experiência personalizada?",
                    a: "Sim. A personalização é uma das características das experiências privadas da NORTHÉ. Podemos adaptar o ritmo, o itinerário e determinados elementos da experiência de acordo com os interesses e necessidades do seu grupo, sempre que operacionalmente possível.",
                },
                {
                    category: "transporte",
                    q: "Onde é feita a recolha (pick-up) e o regresso?",
                    a: "O pick-up e o regresso são combinados previamente de acordo com o local indicado na reserva. Para experiências com partida no Porto, podemos organizar a recolha no local previamente acordado.",
                },
                {
                    category: "transporte",
                    q: "A NORTHÉ oferece pick-up e drop-off em hotéis no Porto?",
                    a: "Recolhemos o seu grupo diretamente no átrio do seu hotel, apartamento, Airbnb ou residência na cidade do Porto e Vila Nova de Gaia, habitualmente entre as 08h30 e as 09h00 (ou num horário alternativo à sua escolha). No final do dia (cerca das 18h00 - 18h30), regressamos comodamente ao mesmo local ou deixamo-lo num restaurante à sua escolha para o jantar.",
                },
                {
                    category: "transporte",
                    q: "É possível fazer pick-up no Aeroporto do Porto?",
                    a: "Sim. O serviço deve ser solicitado no momento da reserva para que possamos confirmar a logística e o horário adequado.",
                },
                {
                    category: "transporte",
                    q: "Posso solicitar pick-up fora do Porto?",
                    a: "É possível avaliar pick-ups fora da área habitual, dependendo da localização, horário e experiência escolhida. Poderá existir um custo adicional, que será informado previamente.",
                },
                {
                    category: "transporte",
                    q: "O transporte durante o tour é exclusivamente privado?",
                    a: "Sim. As experiências privadas da NORTHÉ são realizadas em transporte reservado exclusivamente para o seu grupo.",
                },
                {
                    category: "douro",
                    q: "Qual é a melhor forma de visitar o Douro a partir do Porto?",
                    a: "Uma experiência privada permite explorar o Douro com maior liberdade, evitando um itinerário rígido e adaptando o ritmo aos interesses do seu grupo. A partir do Porto, é possível combinar paisagens, vinhos, gastronomia, quintas e momentos de descoberta ao longo do vale.",
                },
                {
                    category: "douro",
                    q: "Quanto tempo dura um tour privado pelo Douro?",
                    a: "A duração varia de acordo com a experiência escolhida. As experiências da NORTHÉ são geralmente pensadas para proporcionar um dia completo de descoberta, e a duração específica é indicada na página de cada tour.",
                },
                {
                    category: "douro",
                    q: "O que posso visitar durante uma experiência privada no Douro?",
                    a: "Dependendo do itinerário, poderá visitar quintas, vinhas, aldeias e cidades históricas, apreciar as paisagens do Douro e conhecer a cultura do vinho e da gastronomia da região.",
                },
                {
                    category: "douro",
                    q: "As provas de vinhos estão incluídas?",
                    a: "Depende da experiência. Quando uma prova de vinhos faz parte do programa, isso é indicado na descrição do tour. Também podemos avaliar experiências personalizadas com provas específicas.",
                },
                {
                    category: "douro",
                    q: "Que tipos de vinhos posso provar no Douro?",
                    a: "Dependendo da experiência, poderá conhecer diferentes expressões dos vinhos da região do Douro, incluindo vinhos do Douro e vinho do Porto.",
                },
                {
                    category: "douro",
                    q: "Posso visitar uma quinta específica no Douro?",
                    a: "Podemos avaliar esse pedido e verificar a disponibilidade da quinta para a data pretendida. Algumas visitas dependem de reserva antecipada e disponibilidade do próprio local.",
                },
                {
                    category: "douro",
                    q: "Posso personalizar o roteiro do meu tour pelo Douro?",
                    a: "Sim. As experiências privadas permitem maior flexibilidade do que um tour partilhado. Podemos conversar consigo sobre os locais que gostaria de conhecer e criar uma experiência adequada ao seu grupo, sempre respeitando os horários e a disponibilidade dos locais visitados.",
                },
                {
                    category: "barco",
                    q: "As experiências da NORTHÉ incluem passeio de barco no Douro?",
                    a: "Algumas experiências incluem momentos no rio Douro. O tipo de passeio, duração e condições estão especificados na página de cada experiência.",
                },
                {
                    category: "barco",
                    q: "O passeio de barco é privado ou partilhado?",
                    a: "Depende da experiência escolhida. A NORTHÉ disponibiliza experiências com diferentes modalidades de passeio de barco, incluindo opções privadas quando especificadas no programa.",
                },
                {
                    category: "barco",
                    q: "Quanto tempo dura o passeio de barco?",
                    a: "A duração varia de acordo com a experiência reservada. O tempo previsto é indicado na descrição de cada tour.",
                },
                {
                    category: "barco",
                    q: "O que acontece se as condições meteorológicas impedirem o passeio de barco?",
                    a: "A segurança dos nossos clientes é sempre prioritária. Se as condições meteorológicas ou operacionais impedirem a realização do passeio de barco, a situação será avaliada e serão apresentadas as alternativas possíveis de acordo com as condições da reserva e do operador.",
                },
                {
                    category: "familias",
                    q: "Os tours são adequados para famílias com crianças ou bebés?",
                    a: "Muitas das nossas experiências podem ser realizadas por famílias. No entanto, a adequação depende do itinerário, duração e atividades incluídas. Recomendamos informar a idade das crianças no momento da reserva para podermos orientar a escolha da experiência.",
                },
                {
                    category: "familias",
                    q: "É possível disponibilizar cadeira para crianças?",
                    a: "Sim. Esta necessidade deve ser indicada no momento da reserva.",
                },
                {
                    category: "familias",
                    q: "As experiências são adequadas para pessoas com mobilidade reduzida?",
                    a: "A acessibilidade varia de acordo com o itinerário, veículo, quintas, restaurantes, monumentos e atividades incluídas. Se tiver necessidades específicas de mobilidade, informe-nos antes da reserva para avaliarmos a experiência mais adequada.",
                },
                {
                    category: "gastronomia",
                    q: "É possível adaptar as refeições a restrições alimentares?",
                    a: "Sempre que possível, sim. As restrições alimentares devem ser comunicadas antecipadamente para que possamos verificar as opções disponíveis nos restaurantes, quintas ou experiências gastronómicas.",
                },
                {
                    category: "gastronomia",
                    q: "Existem opções vegetarianas, veganas ou sem glúten?",
                    a: "Podem ser solicitadas opções vegetarianas, veganas ou adequadas a determinadas restrições alimentares, mediante disponibilidade dos locais selecionados. Recomendamos informar-nos no momento da reserva.",
                },
                {
                    category: "gastronomia",
                    q: "É necessário informar alergias ou restrições alimentares com antecedência?",
                    a: "Sim. Esta informação deve ser comunicada antes da experiência. Quanto mais cedo recebermos essa informação, maior será a possibilidade de confirmar opções adequadas junto dos parceiros envolvidos.",
                },
                {
                    category: "cancelamentos",
                    q: "Qual é a política de cancelamento e alteração de datas?",
                    a: "Oferecemos cancelamento gratuito e reembolso integral para cancelamentos solicitados até 48 horas antes da hora de início do tour. Caso os seus planos de voo sofram alterações ou surja algum imprevisto, ajustamos a data do seu tour sem qualquer custo adicional, sujeito à disponibilidade de calendário.",
                },
                {
                    category: "cancelamentos",
                    q: "Posso alterar a data da minha experiência depois de reservar?",
                    a: "Os pedidos de alteração podem ser analisados de acordo com a disponibilidade para a nova data e as condições da reserva. Quanto mais cedo nos contactar, maior será a possibilidade de encontrarmos uma alternativa.",
                },
                {
                    category: "cancelamentos",
                    q: "O que acontece se as condições meteorológicas afetarem a experiência?",
                    a: "Quando as condições meteorológicas podem comprometer uma atividade, como um passeio de barco, avaliamos a situação com os operadores envolvidos e procuramos a alternativa mais adequada, de acordo com as condições da experiência reservada.",
                },
                {
                    category: "cancelamentos",
                    q: "A NORTHÉ pode alterar o itinerário durante o tour?",
                    a: "Em determinadas circunstâncias, pode ser necessário ajustar o itinerário devido a condições meteorológicas, horários, disponibilidade de locais ou outras situações operacionais. Qualquer alteração será feita procurando preservar a qualidade e a essência da experiência.",
                },
                {
                    category: "especiais",
                    q: "Posso organizar uma experiência para uma ocasião especial?",
                    a: "Sim. Podemos criar experiências privadas para celebrar momentos especiais, adaptando determinados elementos da experiência às características da ocasião.",
                },
                {
                    category: "especiais",
                    q: "A NORTHÉ organiza aniversários, pedidos de casamento ou outras celebrações?",
                    a: "Sim. Organizamos aniversários, aniversários de casamento, pedidos de casamento e outras celebrações privadas. Os detalhes devem ser combinados antecipadamente.",
                },
                {
                    category: "especiais",
                    q: "Posso adicionar um picnic, fotógrafo ou outros serviços à minha experiência?",
                    a: "Algumas experiências podem ser complementadas com serviços ou elementos adicionais, como picnics, fotografia, decoração ou outros pedidos especiais. A disponibilidade e o valor são confirmados individualmente.",
                },
            ],
        },

        blog: {
            badge: "Diário & Guias",
            title: "Diário do Norte & Douro",
            subtitle: "Guias autorizados, itinerários exclusivos e segredos do Norte de Portugal.",
            readMore: "Ler Artigo",
            bookCta: "Reservar esta experiência",
            items: [
                {
                    slug: "passeio-de-barco-privado-no-porto-douro",
                    title: "Passeio de Barco Privado no Porto: Guia Completo, Preço e Vistas do Rio Douro",
                    subtitle: "Descubra o Porto e Vila Nova de Gaia a partir das águas do Rio Douro com total exclusividade",
                    excerpt: "Navegar pelo Rio Douro numa embarcação 100% privada é uma das formas mais memoráveis de admirar a Ribeira do Porto, as caves de Vila Nova de Gaia e a Ponte D. Luís I. Saiba quanto custa (150€ até 6 pessoas) e como funciona.",
                    date: "21 de Outubro de 2026",
                    category: "Porto Experiences",
                    image: "/images/tours/porto-private-boat-tour/1.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O Passeio de Barco Privado no Porto da NORTHÉ (RNAAT 284/2026) oferece uma experiência náutica 100% exclusiva pelo Rio Douro pelo valor fixo de 150€ por saída para grupos de 1 até 6 pessoas, com duração de 1 hora e skipper profissional habilitado." },
                        { type: "h3", text: "Porquê escolher um passeio de barco privado no Porto em vez de um cruzeiro partilhado?" },
                        { type: "p", text: "Enquanto os cruzeiros tradicionais das Seis Pontes transportam dezenas de passageiros em horários rígidos, uma embarcação privada permite-lhe desfrutar do Rio Douro apenas com a sua família, amigos ou a dois. A bordo do barco privado da NORTHÉ, navega num ambiente tranquilo, com bancos estofados na proa e na popa e liberdade para fotografar cada ângulo da Ribeira e do Cais de Gaia sem multidões." },
                        { type: "blockquote", text: "Ver o Porto a partir do Rio Douro revela a verdadeira alma da cidade: as fachadas históricas da Ribeira, as caves seculares de Vinho do Porto em Gaia e a imponência da Ponte D. Luís I refletida na água." },
                        { type: "image", url: "/images/tours/porto-private-boat-tour/3.webp", text: "Conforto e exclusividade a bordo do barco privado NORTHÉ no Rio Douro (até 6 passageiros)." },
                        { type: "h3", text: "O que está incluído e informações importantes" },
                        { type: "p", text: "O passeio tem duração aproximada de 1 hora, lotação máxima de 6 passageiros e inclui embarcação privada exclusiva, skipper habilitado, combustível, equipamento de segurança completo e seguros obrigatórios. Recomendamos roupa confortável, casaco leve ou corta-vento, óculos de sol e chegar ao local de embarque 10 a 15 minutos antes do horário agendado." },
                    ],
                },
                {
                    slug: "8-melhores-passeios-a-partir-do-porto",
                    title: "8 Melhores Passeios a partir do Porto",
                    subtitle: "Descubra o Norte de Portugal além da cidade",
                    excerpt: "O Porto é uma excelente base para descobrir outras regiões de Portugal. Em poucas horas, é possível sair do centro histórico e encontrar vinhedos, cidades medievais, palácios, montanhas, aldeias tradicionais e a costa atlântica.",
                    date: "18 de Setembro de 2026",
                    category: "Guia de Viagem",
                    image: "/images/blog/8-melhores-passeios-porto.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O Porto é uma excelente base para descobrir outras regiões de Portugal. Em poucas horas, é possível sair do centro histórico e encontrar vinhedos, cidades medievais, palácios, montanhas, aldeias tradicionais e a costa atlântica." },
                        { type: "p", text: "Entre os passeios mais procurados estão o Vale do Douro, Braga, Guimarães e Aveiro. Para quem procura natureza, o Parque Nacional da Peneda-Gerês oferece uma paisagem completamente diferente, enquanto Arouca combina montanhas, rios e experiências ao ar livre. Amarante e Ponte de Lima são alternativas para quem prefere um ritmo mais tranquilo e uma experiência mais ligada à cultura local." },
                        { type: "p", text: "A escolha depende do que você procura: vinho e gastronomia no Douro, história em Guimarães, arquitetura e patrimônio em Braga, canais e litoral em Aveiro ou natureza no Gerês." },
                        { type: "p", text: "Mais do que simplesmente sair do Porto por um dia, explorar o Norte permite conhecer a diversidade de uma região onde história, gastronomia, vinho e paisagem estão profundamente ligados." },
                        { type: "p", text: "Quer descobrir o Norte de Portugal a partir do Porto? Conheça as experiências privadas da NORTHÉ." },
                    ],
                },
                {
                    slug: "vale-do-douro-a-partir-do-porto",
                    title: "Vale do Douro a partir do Porto",
                    subtitle: "Vinhos, paisagens e uma das regiões mais emblemáticas de Portugal",
                    excerpt: "O Vale do Douro é uma das experiências mais marcantes para quem visita o Porto. A região é conhecida pelas encostas cobertas de vinhas, pelo rio Douro e pela tradição secular ligada à produção de vinhos, incluindo o famoso Vinho do Porto.",
                    date: "17 de Setembro de 2026",
                    category: "Douro Valley",
                    image: "/images/blog/douro-valley-vineyards.webp",
                    readTime: "5 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O Vale do Douro é uma das experiências mais marcantes para quem visita o Porto. A região é conhecida pelas encostas cobertas de vinhas, pelo rio Douro e pela tradição secular ligada à produção de vinhos, incluindo o famoso Vinho do Porto." },
                        { type: "p", text: "Pinhão e Peso da Régua estão entre os principais pontos de referência para quem visita a região. Ao longo do caminho, quintas, miradouros e estradas panorâmicas revelam diferentes perspetivas da paisagem." },
                        { type: "p", text: "Uma visita pode combinar uma quinta vinícola, degustação de vinhos, gastronomia regional e um passeio pelo rio. O percurso entre Porto e Douro é mais longo do que outros passeios próximos da cidade, por isso vale a pena planejar o dia com cuidado." },
                        { type: "p", text: "O Douro também muda bastante ao longo do ano. A primavera traz diferentes tonalidades de verde, enquanto setembro e outubro transformam as vinhas durante a época das vindimas." },
                        { type: "p", text: "Para quem está no Porto e quer conhecer a relação entre território, vinho e cultura portuguesa, o Douro é uma experiência que vai muito além de uma simples visita a uma região vinícola." },
                        { type: "p", text: "Descubra o Douro com uma experiência privada NORTHÉ." },
                    ],
                },
                {
                    slug: "o-que-fazer-no-porto",
                    title: "O que fazer no Porto",
                    subtitle: "Uma cidade para descobrir sem pressa",
                    excerpt: "O Porto reúne história, arquitetura, gastronomia, vinho e uma forte identidade cultural em uma área relativamente compacta.",
                    date: "16 de Setembro de 2026",
                    category: "Porto & Cultura",
                    image: "/images/blog/o-que-fazer-porto.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O Porto reúne história, arquitetura, gastronomia, vinho e uma forte identidade cultural em uma área relativamente compacta." },
                        { type: "p", text: "O centro histórico, classificado como Patrimônio Mundial pela UNESCO, concentra alguns dos lugares mais conhecidos da cidade, como a Ribeira, a Sé, a Estação de São Bento e a Torre dos Clérigos. Do outro lado do rio, Vila Nova de Gaia oferece as tradicionais caves de vinho do Porto e uma das vistas mais conhecidas sobre a cidade." },
                        { type: "p", text: "Mas o Porto também pode ser descoberto além dos principais monumentos. Mercados, restaurantes, cafés, bairros históricos, lojas tradicionais e a zona da Foz mostram diferentes lados da cidade." },
                        { type: "p", text: "Para quem tem mais tempo, vale ainda explorar experiências gastronômicas, arquitetura, arte e os arredores do Porto." },
                        { type: "p", text: "A melhor maneira de conhecer a cidade depende do seu ritmo e dos seus interesses. Algumas pessoas preferem seguir um roteiro clássico; outras procuram uma experiência mais personalizada e menos previsível." },
                        { type: "p", text: "O importante é deixar espaço para descobrir a cidade sem transformar cada momento em uma lista de lugares para marcar." },
                        { type: "p", text: "Explore o Porto de uma forma mais pessoal com a NORTHÉ." },
                    ],
                },
                {
                    slug: "braga-e-guimaraes-a-partir-do-porto",
                    title: "Braga e Guimarães a partir do Porto",
                    subtitle: "Dois destinos históricos no coração do Norte de Portugal",
                    excerpt: "Braga e Guimarães estão entre os destinos mais interessantes para quem quer explorar o Norte de Portugal a partir do Porto.",
                    date: "14 de Setembro de 2026",
                    category: "História & Património",
                    image: "/images/blog/braga-guimaraes-norte.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Braga e Guimarães estão entre os destinos mais interessantes para quem quer explorar o Norte de Portugal a partir do Porto." },
                        { type: "p", text: "Braga combina um centro histórico marcado pela arquitetura religiosa com lugares como o Santuário do Bom Jesus do Monte, conhecido pela sua monumental escadaria e pelas vistas sobre a região." },
                        { type: "p", text: "Guimarães apresenta uma atmosfera diferente. O centro histórico, classificado como Patrimônio Mundial da UNESCO, preserva ruas, praças e edifícios que ajudam a contar a história da formação de Portugal. A cidade está tradicionalmente associada às origens da nacionalidade portuguesa. " },
                        { type: "p", text: "As duas cidades podem ser visitadas no mesmo dia, mas é preciso aceitar um ritmo mais intenso. Para quem prefere explorar com mais calma, dedicar um dia inteiro a apenas uma delas permite apreciar melhor o patrimônio, a arquitetura e a gastronomia local." },
                        { type: "p", text: "Braga é especialmente interessante para quem aprecia arquitetura e história religiosa. Guimarães pode agradar mais a quem procura um centro histórico compacto e uma atmosfera medieval." },
                        { type: "p", text: "Duas cidades, duas perspetivas diferentes sobre a história do Norte de Portugal." },
                    ],
                },
                {
                    slug: "norte-de-portugal-lugares-alem-do-porto",
                    title: "Norte de Portugal: Lugares para conhecer além do Porto",
                    subtitle: "Uma região de paisagens, história, vinho e cultura",
                    excerpt: "O Norte de Portugal é muito mais amplo do que o Porto e o Douro.",
                    date: "12 de Setembro de 2026",
                    category: "Norte de Portugal",
                    image: "/images/blog/norte-de-portugal-natureza.webp",
                    readTime: "5 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O Norte de Portugal é muito mais amplo do que o Porto e o Douro." },
                        { type: "p", text: "Ao norte e ao leste da cidade encontram-se destinos com características completamente diferentes. Guimarães preserva um dos centros históricos mais importantes da região. Braga combina patrimônio religioso e arquitetura. Ponte de Lima revela a tradição do Minho e a cultura do Vinho Verde." },
                        { type: "p", text: "Mais ao norte, Viana do Castelo une patrimônio, montanha e litoral. No interior, o Parque Nacional da Peneda-Gerês oferece uma paisagem de montanhas, rios e aldeias tradicionais." },
                        { type: "p", text: "Também existem destinos como Amarante e Arouca, que permitem conhecer uma faceta mais tranquila e natural do Norte." },
                        { type: "p", text: "Essa diversidade é justamente uma das características mais interessantes da região: em uma mesma viagem é possível passar de uma cidade histórica para uma quinta vinícola, de uma aldeia tradicional para uma paisagem de montanha ou da serra para o Atlântico." },
                        { type: "p", text: "Para quem está no Porto, explorar os arredores significa descobrir um território com diferentes ritmos, sabores e paisagens — muitas vezes além dos roteiros mais conhecidos." },
                        { type: "p", text: "Descubra o Norte de Portugal através de experiências privadas a partir do Porto." },
                    ],
                },
                {
                    slug: "parque-nacional-peneda-geres-a-partir-do-porto",
                    title: "Parque Nacional da Peneda-Gerês a partir do Porto",
                    subtitle: "Natureza, montanhas e aldeias tradicionais",
                    excerpt: "Para quem deseja conhecer um lado mais natural de Portugal, o Parque Nacional da Peneda-Gerês oferece uma experiência completamente diferente do ambiente urbano do Porto.",
                    date: "10 de Setembro de 2026",
                    category: "Natureza & Montanha",
                    image: "/images/blog/geres-cascatas-natureza.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Para quem deseja conhecer um lado mais natural de Portugal, o Parque Nacional da Peneda-Gerês oferece uma experiência completamente diferente do ambiente urbano do Porto." },
                        { type: "p", text: "Montanhas, rios, cascatas, florestas e aldeias tradicionais formam uma paisagem que muda ao longo das estações. Lugares como Soajo e Lindoso preservam elementos da arquitetura e das tradições rurais do Norte." },
                        { type: "p", text: "Gerês também é procurado por quem gosta de caminhadas, fotografia e atividades ao ar livre. Nos meses mais quentes, as zonas de água natural tornam-se especialmente procuradas." },
                        { type: "p", text: "Por ser uma região extensa e com muitos pontos de interesse espalhados, explorar Gerês exige mais planejamento do que um passeio convencional por uma cidade. Transporte, tempo disponível e escolha dos locais fazem diferença na experiência." },
                        { type: "p", text: "Para quem parte do Porto, um dia permite conhecer alguns dos principais cenários da região, mas o ritmo deve ser planejado de acordo com os interesses do grupo." },
                        { type: "p", text: "Gerês é uma escolha especialmente interessante para quem quer substituir monumentos e ruas movimentadas por montanhas, silêncio e natureza." },
                        { type: "p", text: "Conheça o lado mais selvagem do Norte de Portugal com a NORTHÉ." },
                    ],
                },
                {
                    slug: "douro-ou-vinho-verde",
                    title: "Douro ou Vinho Verde?",
                    subtitle: "Duas experiências de vinho no Norte de Portugal",
                    excerpt: "Douro e Vinho Verde representam duas das experiências vinícolas mais conhecidas do Norte de Portugal — mas oferecem atmosferas bastante diferentes.",
                    date: "8 de Setembro de 2026",
                    category: "Enoturismo & Vinhos",
                    image: "/images/blog/vinho-verde-vs-douro.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Douro e Vinho Verde representam duas das experiências vinícolas mais conhecidas do Norte de Portugal — mas oferecem atmosferas bastante diferentes." },
                        { type: "p", text: "O Douro é marcado pelas encostas íngremes cobertas de vinhas, pelo rio e pelas quintas que fazem parte da paisagem cultural da região. É um destino especialmente associado ao Vinho do Porto e aos vinhos do Douro." },
                        { type: "p", text: "A região do Vinho Verde, por outro lado, estende-se principalmente pelo Minho e apresenta uma paisagem mais verde, com pequenas propriedades, quintas, rios e cidades históricas como Ponte de Lima." },
                        { type: "p", text: "A diferença não está apenas no vinho. É também uma diferença de território e experiência." },
                        { type: "p", text: "O Douro proporciona grandes paisagens de vale e rio. O Minho oferece uma atmosfera mais verde, rural e próxima das tradições locais." },
                        { type: "p", text: "Para quem gosta de vinho, escolher entre os dois depende do tipo de viagem que procura — ou simplesmente da vontade de conhecer ambos." },
                        { type: "p", text: "O Norte de Portugal permite justamente essa variedade: duas regiões vinícolas relativamente próximas, mas com paisagens, histórias e identidades próprias." },
                        { type: "p", text: "Descubra os sabores do Norte de Portugal com uma experiência privada da NORTHÉ." },
                    ],
                },
                {
                    slug: "experiencias-privadas-a-partir-do-porto",
                    title: "Experiências Privadas a partir do Porto",
                    subtitle: "Conhecer Portugal no seu próprio ritmo",
                    excerpt: "Nem toda viagem precisa seguir um roteiro fixo.",
                    date: "5 de Setembro de 2026",
                    category: "Experiências Privadas",
                    image: "/images/blog/experiencias-privadas-douro-terrace.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Nem toda viagem precisa seguir um roteiro fixo." },
                        { type: "p", text: "Uma experiência privada permite adaptar o dia aos interesses de cada grupo: dedicar mais tempo a uma quinta, escolher um almoço especial, fazer uma parada inesperada ou simplesmente passar mais tempo apreciando uma paisagem." },
                        { type: "p", text: "A partir do Porto, as possibilidades são muito variadas. Um dia pode ser dedicado ao vinho e à gastronomia no Douro, à história de Braga e Guimarães, às paisagens do Gerês ou às tradições do Minho." },
                        { type: "p", text: "Para casais, famílias ou pequenos grupos que viajam juntos, a privacidade também significa não dividir o veículo ou o ritmo do passeio com desconhecidos." },
                        { type: "p", text: "Mais do que visitar vários lugares no mesmo dia, uma experiência privada permite escolher como você quer conhecer Portugal." },
                        { type: "p", text: "É essa flexibilidade que transforma um passeio em uma experiência mais pessoal — seja para uma primeira viagem ao Norte, seja para quem já conhece o Porto e quer descobrir algo diferente." },
                        { type: "p", text: "Na NORTHÉ, as experiências privadas partem do Porto e percorrem o Douro, o Porto e o Norte de Portugal, sempre com foco em privacidade, conforto e liberdade para aproveitar o destino no seu ritmo." },
                        { type: "p", text: "Explore as experiências privadas da NORTHÉ." },
                    ],
                },
                {
                    slug: "aveiro-e-coimbra-a-partir-do-porto",
                    title: "Aveiro e Coimbra a Partir do Porto",
                    subtitle: "Canais da Ria, Costa Nova e a Mais Antiga Universidade de Portugal",
                    excerpt: "Uma jornada que combina os reflexos luminosos da Ria de Aveiro, as casas coloridas da Costa Nova e a monumental erudição de Coimbra.",
                    date: "24 de Setembro de 2026",
                    category: "Cultura & Tradição",
                    image: "/images/tours/coimbra-aveiro/coimbra-aveiro-private-tour-1.webp",
                    readTime: "5 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Poucas viagens de um dia a partir do Porto oferecem um contraste tão fascinante entre a poesia da água e o peso da história como a rota entre Aveiro e Coimbra." },
                        { type: "p", text: "Em Aveiro, muitas vezes celebrada como a 'Veneza Portuguesa', a vida desenrola-se ao ritmo dos canais da ria. A bordo de um barco moliceiro tradicional — outrora utilizado na recolha de algas para fertilização agrícola —, desliza-se suavemente sob pontes históricas enquanto se admiram as fachadas de Arte Nova mais requintadas do país." },
                        { type: "p", text: "A curta distância, a Costa Nova surpreende com os seus 'palheiros': antigas casas de pescadores pintadas com riscas verticais vibrantes em tons de vermelho, azul e verde, diante do areal atlântico. É também paragem obrigatória para provar a autenticidade dos tradicionais ovos moles envolvidos em delicada hóstia." },
                        { type: "p", text: "Rumo a sul, a cidade de Coimbra ergue-se imponente sobre o Rio Mondego. Berço de seis reis portugueses e da mais antiga universidade do país — fundada em 1290 e classificada pela UNESCO —, a sua Alta guarda a lendária Biblioteca Joanina. Esta obra-prima barroca abriga milhares de volumes raros e é guardada por uma colónia de morcegos que protege secularmente o acervo." },
                        { type: "p", text: "Entre o romantismo dos canais e a solenidade académica, esta experiência privada convida a conhecer duas das cidades mais autênticas do Centro-Norte de Portugal com total conforto executivo." },
                        { type: "p", text: "Descubra o tour privado Aveiro & Coimbra com a NORTHÉ." }
                    ]
                },
                {
                    slug: "nazare-obidos-e-sao-martinho-do-porto",
                    title: "Nazaré e Óbidos: Ondas Gigantes e Muralhas Medievais",
                    subtitle: "A mística da Costa de Prata entre o oceano selvagem e vilas de contos de fadas",
                    excerpt: "Do promontório lendário da Nazaré, onde quebram as maiores ondas do planeta, às ruas floridas e muralhas de pedra da vila medieval de Óbidos.",
                    date: "26 de Setembro de 2026",
                    category: "Costa de Prata",
                    image: "/images/tours/nazare-sao-martinho/1.webp",
                    readTime: "5 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "A Costa de Prata portuguesa é um território onde a força indómita do Oceano Atlântico se cruza com séculos de histórias de reis, pescadores e marinheiros." },
                        { type: "p", text: "Na Nazaré, o olhar perde-se do cimo do Sítio da Nazaré em direção ao horizonte. No Forte de São Miguel Arcanjo, erguido sobre a falésia, sente-se a potência cósmica do Canhão da Nazaré — um desfiladeiro submarino de mais de 5.000 metros de profundidade que gera as maiores ondas surfadas na história do planeta." },
                        { type: "p", text: "Mas a Nazaré é também memória viva: as tradicionais varinas de sete saias, a seca artesanal do peixe no areal dourado e a gastronomia de marisco fresquíssimo que faz as delícias de quem aprecia sabores puros do mar." },
                        { type: "p", text: "A curta distância, a atmosfera transforma-se ao avistar a baía em concha perfeita de São Martinho do Porto, um refúgio natural de águas mansas e tranquilidade rara." },
                        { type: "p", text: "O roteiro completa-se com a entrada triunfal em Óbidos, uma das vilas medievais mais bem preservadas da Europa. Oferecida em tempos como presente de casamento pelos monarcas portugueses às suas rainhas, Óbidos convida a percorrer muralhas amparadas por torres de pedra, calçadas de seixos floridas de buganvílias e a saborear a tradicional ginjinha servida em copo de chocolate artesanal." },
                        { type: "p", text: "Viva a Costa de Prata com o conforto e a exclusividade de um tour privado NORTHÉ." }
                    ]
                },
                {
                    slug: "fatima-batalha-e-tomar-monumentos-unesco",
                    title: "Fátima, Batalha e Tomar: Roteiro dos Templários e Maravilhas UNESCO",
                    subtitle: "Espiritualidade, gótico flamejante e a mística da Ordem dos Cavaleiros do Templo",
                    excerpt: "Uma imersão na grandeza histórica de Portugal: a paz de Fátima, o rendilhado de pedra da Batalha e a fortaleza templária de Tomar.",
                    date: "28 de Setembro de 2026",
                    category: "História & Património",
                    image: "/images/tours/fatima-batalha-tomar/1.webp",
                    readTime: "5 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Poucos trajetos em Portugal concentram tanto simbolismo, fé e património arquitetónico universal como o triângulo formado por Fátima, Batalha e Tomar." },
                        { type: "p", text: "A paragem em Fátima oferece um momento de serenidade e reflexão no Santuário de Nossa Senhora do Rosário. Um dos mais célebres locais de peregrinação mariana do mundo, Fátima acolhe visitantes de todas as origens com a sua vasta esplanada, a Basílica da Santíssima Trindade e a tocante Capelinha das Aparições." },
                        { type: "p", text: "Prosseguindo caminho, o Mosteiro da Batalha (Santa Maria da Vitória) ergue-se como um dos cumes mundiais da arquitetura gótica e manuelina. Mandado erguer por D. João I em cumprimento de promessa após a decisiva Batalha de Aljubarrota em 1385, o monumento deslumbra pelos vitrais ancestrais e pelas célebres Capelas Imperfeitas — panteão octogonal a céu aberto trabalhado como renda em pedra calcária." },
                        { type: "p", text: "Em Tomar, o culminar da jornada acontece no Convento de Cristo e Castelo dos Templários, sede da mítica Ordem do Templo e mais tarde da Ordem de Cristo. A Charola octogonal, inspirada na Rotunda do Santo Sepulcro de Jerusalém, e a icónica Janela Manuelina da Sala do Capítulo são testemunhos monumentais da época das Grandes Navegações e da expansão marítima portuguesa." },
                        { type: "p", text: "Uma experiência privada indispensável para viajantes apaixonados por história, lendas cavalheirescas e grandes monumentos da humanidade." },
                        { type: "p", text: "Reserve a sua jornada privada a Fátima, Batalha e Tomar com a NORTHÉ." }
                    ]
                },
                {
                    slug: "ponte-de-lima-e-barcelos-minho-vinho-verde",
                    title: "Ponte de Lima e Barcelos: Tradição Nobre e Rota do Vinho Verde",
                    subtitle: "A vila mais antiga de Portugal, a lenda do Galo e a alma senhorial do Minho",
                    excerpt: "Descubra a nobreza rural do Minho: pontes romanas milenares, solares brasonados, o berço do Galo de Barcelos e as mais prestigiadas quintas de Vinho Verde.",
                    date: "30 de Setembro de 2026",
                    category: "Minho & Vinho Verde",
                    image: "/images/tours/ponte-de-lima-douro/ponte-de-lima-historic-wine-centre.webp",
                    readTime: "4 min de leitura",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "O coração do Minho guarda a identidade mais calorosa, tradicional e nobre de Portugal. Entre vales recortados por rios límpidos e vinhedos em pérgula, esta é a terra natal do inimitável Vinho Verde." },
                        { type: "p", text: "Ponte de Lima ostenta com orgulho o título de vila mais antiga de Portugal, outorgado em foral de 1125 pela Rainha D. Teresa. A sua emblemática ponte gótica e romana sobre o Rio Lima foi cenário da famosa lenda do Rio Lethes: as legiões de Décimo Júnio Bruto hesitaram em atravessá-lo temendo perder todas as memórias da sua pátria." },
                        { type: "p", text: "Passear pelo centro histórico de Ponte de Lima é respirar elegância clássica: solares fidalgos de pedra de cantaria, jardins floridos, o Centro de Interpretação e Promoção do Vinho Verde (CIPV) e restaurantes tradicionais onde o bacalhau de cebolada e o sarrabulho contam histórias de gerações." },
                        { type: "p", text: "Em Barcelos, a criatividade artesanal revela-se na cerâmica e na célebre Lenda do Galo — o milagroso galo que cantou para salvar um peregrino inocente a caminho de Santiago de Compostela, tornando-se o símbolo nacional de Portugal." },
                        { type: "p", text: "Com visitas a quintas solarengas com provas exclusivas das castas Loureiro e Alvarinho, este roteiro privado é a celebração definitiva da hospitalidade e do paladar minhoto." },
                        { type: "p", text: "Explore as quintas e tradições do Minho com o conforto privado da NORTHÉ." }
                    ]
                }
            ],
        },
        contact: {
            title: 'Vamos criar sua experiência em Portugal?',
            desc: 'Conte-nos o que gostaria de viver. Criamos uma experiência privada à medida do seu grupo.',
            ctaBook: 'Reservar Experiência', ctaWhatsapp: 'Falar via WhatsApp',
            emailLabel: 'E-mail', email: EMAIL,
            phoneLabel: 'Telefone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Experiências à Medida',
            title: 'Quer algo diferente?',
            subtitle: 'Criamos experiências privadas personalizadas.',
            desc: 'Criamos experiências privadas personalizadas de acordo com os seus interesses, ritmo e ocasião.',
            collection: 'North Private Collection',
            collectionDesc: 'Jantares privados, quintas históricas e momentos inesquecíveis.',
            destinations: ['Porto', 'Douro Valley', 'Alcobaça', 'Amarante', 'Arouca', 'Aveiro', 'Batalha', 'Barcelos', 'Braga', 'Coimbra', 'Fátima', 'Gerês', 'Guimarães', 'Lamego', 'Nazaré', 'Óbidos', 'Ponte de Lima', 'Santa Maria da Feira', 'São Martinho do Porto', 'Tomar'],
            cta: 'Criar Minha Experiência',
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
                { title: '1. Identificação do Responsável de Tratamento', content: 'A entidade responsável pelo tratamento de dados é a "NORTHÉ" (NIPC: 518 190 145), com sede em Portugal. Comprometemo-nos com a proteção de dados pessoais, cumprindo estritamente as normativas do RGPD Europeu (Regulamento de Proteção de Dados de Caráter Pessoal).' },
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
                { title: '1. Âmbito e Objeto', content: 'Estes Termos e Condições aplicam-se a todos os serviços prestados pela NORTHÉ. Ao reservar connosco, o cliente declara conhecer e aceitar estas normas.' },
                { title: '2. Reservas e Pagamentos', content: 'As reservas tornam-se efetivas após confirmação escrita por parte da NORTHÉ. Os pagamentos são realizados conforme o método acordado no momento da reserva.' },
                { title: '3. Política de Cancelamento', content: 'Cancelamento gratuito até 48 horas antes da data do tour. Após este período, será cobrado o valor total da reserva devido aos compromissos assumidos com parceiros locais.' },
                { title: '4. Responsabilidade', content: 'A NORTHÉ detém todos os seguros obrigatórios por lei (Acidentes Pessoais e Responsabilidade Civil). Não nos responsabilizamos por perdas de bens pessoais durante as atividades.' },
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
            home: 'Home', tours: 'Private Tours', douro: 'Douro Valley', north: 'Northern Portugal', porto: 'Porto Experiences', about: 'About NORTHÉ', reviews: 'Reviews',
            blog: 'Blog', contact: 'Contact', book: 'Book', bookNow: 'Book Now',
        },
        hero: {
            subtitle: 'Exclusive Experiences in Northern Portugal',
            title1: 'Private Experiences Departing from Porto',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Private bespoke experiences throughout Douro Valley, Porto, and Northern Portugal, with executive transport and carefully curated itineraries for each group.',
            cta: 'Explore Experiences',
            ctaWhatsapp: 'Chat on WhatsApp',
            trustLine: '100% Private · 1–8 Guests · Executive Transport · Free Cancellation up to 48h',
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
                extra: 'Additional Guest',
                perPersonLabel: 'Per Person',
                pricingNote: 'for 2 people',
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
                    capacityLabel: 'Maximum: 4 people',
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
                    capacityLabel: 'Maximum: 4 people',
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
            badge: "About NORTHÉ",
            title: "Private experiences, crafted to discover Portugal in a more personal way.",
            paragraphs: [
                "NORTHÉ was born in Porto with a simple idea: to transform every journey into a meaningful experience. We create private journeys across the Douro, Porto, and Northern Portugal, combining landscapes, fine wines, gastronomy, culture, and carefully curated destinations.",
                "Every experience is thoughtfully tailored for your group, with comfort, flexibility, and passionate attention to detail — because discovering a destination should never follow a generic itinerary.",
            ],
            signature: "NORTHÉ",
            subsignature: "Private Tours & Bespoke Journeys",
            stat: "100%",
            statLabel: "Private & Tailor-Made",
        },
        reviews: {
            badge: 'Testimonials',
            title: 'What Our Guests Say',
            subtitle: 'Every review is a true story from those who lived the experience.',
            rating: '5.0', totalReviews: '5.0 ★★★★★',
            googleScore: '5.0',
            googleBadge: 'Google Reviews',
            googleVerified: 'Rated 5.0 Stars on Google',
            googleHighlight: '100% verified 5-star traveler reviews',
            viewOnGoogle: 'View all reviews on Google Maps',
            writeOnGoogle: 'Review us on Google',
            bottomTitle: 'Traveled with NORTHÉ recently?',
            bottomSubtitle: 'Your feedback means the world to us. Read authentic stories from our guests or share your review on our official Google profile.',
            verifiedTag: 'Verified Google Review',
            items: [
                { text: 'An experience that transcends tourism. We felt like guests of honor in one of the most beautiful regions in the world. The guide was exceptional and the attention to detail impressive.', author: 'Sofia Albuquerque', location: 'Lisbon, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'The attention to detail was impeccable. From the private boat ride to the exclusive wine tastings, everything was perfect. Highly recommended for anyone visiting Porto.', author: 'James Sterling', location: 'London, UK', flag: '🇬🇧', stars: 5 },
                { text: 'A magical day in the Douro. The guide was excellent, the wines superb and the lunch delicious. Highly recommend!', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 5 },
                { text: 'Best experience ever in the Douro! The sunset boat ride was unforgettable.', author: 'Carlos Mendes', location: 'São Paulo, Brazil', flag: '🇧🇷', stars: 5 },
                { text: 'A perfect day! The wine tasting was top notch and the landscape is breathtaking.', author: 'Hannah Müller', location: 'Munich, Germany', flag: '🇩🇪', stars: 5 },
                { text: 'We celebrated our anniversary with NORTHÉ and it was the highlight of our trip. Real luxury.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'The guide knew everything about the history of the region. A must-trip for wine lovers.', author: 'Alessandro Rossi', location: 'Milan, Italy', flag: '🇮🇹', stars: 5 },
                { text: 'Impeccable transfer and even better tour. First class service from start to finish.', author: 'Lucía Fernández', location: 'Madrid, Spain', flag: '🇪🇸', stars: 5 },
                { text: 'Amazing! The Douro is magical and the NORTHÉ team made everything special.', author: 'Daan van der Berg', location: 'Amsterdam, Netherlands', flag: '🇳🇱', stars: 5 },
            ],
        },

                faq: {
            badge: "FAQ",
            title: "Everything You Need to Know",
            subtitle: "Clear and transparent answers to the most common questions before booking your private experience.",
            searchPlaceholder: "Search questions (e.g., boat, pick-up, children, cancellation)...",
            noResults: "No questions found matching your search.",
            clearSearch: "Clear search",
            whatsappTitle: "Still have questions about your experience?",
            whatsappSubtitle: "Speak directly with NORTHÉ. We will be delighted to help design the ideal experience and itinerary for your group.",
            whatsappBtn: "Chat on WhatsApp",
            categories: [
                { id: "all", label: "All Questions" },
                { id: "reservas", label: "Bookings & Pricing" },
                { id: "transporte", label: "Pick-up & Transport" },
                { id: "douro", label: "Douro Valley" },
                { id: "barco", label: "Boat Cruises" },
                { id: "familias", label: "Families & Accessibility" },
                { id: "gastronomia", label: "Dining & Diets" },
                { id: "cancelamentos", label: "Cancellations & Flexibility" },
                { id: "especiais", label: "Special Occasions" },
            ],
            items: [
                {
                    category: "reservas",
                    q: "How can I book a private experience with NORTHÉ?",
                    a: "You can request your experience directly via our website, WhatsApp, or through NORTHÉ's official contact channels. Simply share your preferred date, party size, and the journey that interests you. Our concierge team will confirm availability and all customized details prior to reservation.",
                },
                {
                    category: "reservas",
                    q: "How far in advance should I make my reservation?",
                    a: "We recommend reserving well in advance, particularly for Douro Valley journeys, private boat cruises, exclusive wine estate visits, and peak season travel dates. Last-minute reservations may be accommodated depending on calendar availability.",
                },
                {
                    category: "reservas",
                    q: "Are NORTHÉ tours 100% private?",
                    a: "Yes. NORTHÉ specializes exclusively in 100% private experiences. Your party travels and enjoys the journey with complete exclusivity, never sharing the vehicle or itinerary with strangers.",
                },
                {
                    category: "reservas",
                    q: "How is the pricing of a private experience structured?",
                    a: "Pricing depends on the chosen experience, party size, custom itinerary, and premium services included. Each experience clearly outlines its inclusions and pricing prior to reservation.",
                },
                {
                    category: "reservas",
                    q: "Is the displayed price per person or per group?",
                    a: "Prices are presented per private group, not per person. NORTHÉ private experiences can be booked for parties of 1 to 8 guests, maintaining total exclusivity. Pricing varies based on the experience and party size.",
                },
                {
                    category: "reservas",
                    q: "What is included in the price? Are there any hidden costs?",
                    a: "Every experience details its exact inclusions with absolute transparency. Whenever optional upgrades, monument entrances, private dining, rare vintage tastings, or yacht charters are chosen, they are clearly identified in advance.",
                },
                {
                    category: "reservas",
                    q: "What payment methods are available?",
                    a: "Available payment methods are shared upon booking. Payments are processed through secure channels (bank transfer, credit/debit cards, and payment links), with all transaction details confirmed prior to the experience.",
                },
                {
                    category: "reservas",
                    q: "Can I request a fully customized tailor-made experience?",
                    a: "Yes. Bespoke customization is the hallmark of NORTHÉ. We can tailor the pace, itinerary, and exclusive moments to match your group's unique passions, subject to operational feasibility.",
                },
                {
                    category: "transporte",
                    q: "Where does pick-up and drop-off take place?",
                    a: "Pick-up and drop-off are arranged directly at your preferred location. For experiences departing from Porto, we coordinate seamless collection right at your doorstep.",
                },
                {
                    category: "transporte",
                    q: "Does NORTHÉ offer pick-up and drop-off at Porto hotels?",
                    a: "We collect your party directly from the lobby of your hotel, boutique apartment, Airbnb, or private villa in Porto and Vila Nova de Gaia, typically between 08:30 and 09:00 (or at your preferred timing). At the end of the day (~18:00 - 18:30), we return you comfortably to your accommodation or drop you at a restaurant of your choice for dinner.",
                },
                {
                    category: "transporte",
                    q: "Is pick-up available directly at Porto Airport (OPO)?",
                    a: "Yes. Airport collection can be arranged upon booking, allowing our chauffeur to monitor your incoming flight and coordinate a seamless VIP transition.",
                },
                {
                    category: "transporte",
                    q: "Can I request pick-up outside of Porto?",
                    a: "Pick-ups outside our standard area can be arranged depending on location, timing, and chosen experience. A distance supplement may apply, clearly communicated in advance.",
                },
                {
                    category: "transporte",
                    q: "Is vehicle transport during the tour exclusively private?",
                    a: "Yes. All NORTHÉ journeys are conducted in executive fleet vehicles reserved exclusively for your party.",
                },
                {
                    category: "douro",
                    q: "What is the best way to explore Douro Valley from Porto?",
                    a: "A private experience is the most refined and rewarding way to explore the Douro, avoiding rigid tour bus schedules and adapting the day to your personal pace. Departing from Porto, it combines breathtaking viewpoints, historic quintas, regional gourmet dining, and private river navigation.",
                },
                {
                    category: "douro",
                    q: "How long does a private Douro Valley tour last?",
                    a: "Duration varies by itinerary. NORTHÉ signature day journeys are curated for a comprehensive full-day discovery (approx. 8 to 9 hours), with exact timings outlined on each experience page.",
                },
                {
                    category: "douro",
                    q: "What will I visit during a private Douro experience?",
                    a: "Depending on the itinerary, you will explore historic wine estates (quintas), terraced vineyards, riverside villages such as Pinhão, panoramic viewpoints, and delve deeply into the world of Douro DOC and Port wine heritage.",
                },
                {
                    category: "douro",
                    q: "Are wine tastings included in the experience?",
                    a: "Depending on the selected tour, wine tastings and estate visits are included in the programme as detailed on each tour page. We can also arrange bespoke tastings of rare vintages upon request.",
                },
                {
                    category: "douro",
                    q: "What varieties of wine will I taste in the Douro?",
                    a: "You will experience both world-renowned Port Wines (Tawny, Ruby, Vintage) and exceptional Douro DOC whites and reds from indigenous grape varieties.",
                },
                {
                    category: "douro",
                    q: "Can I request a visit to a specific Douro winery (quinta)?",
                    a: "Yes. We are happy to evaluate specific winery requests and confirm private host availability for your selected date.",
                },
                {
                    category: "douro",
                    q: "Can I customize the Douro itinerary to our liking?",
                    a: "Yes. Private journeys offer unparalleled flexibility. We can align with you on preferred stops, balancing visits, and dining to craft an experience suited to your party.",
                },
                {
                    category: "barco",
                    q: "Do NORTHÉ experiences include a Douro river boat cruise?",
                    a: "Selected signature journeys feature time on the Douro River. Cruise type, duration, and vessel specifications are detailed on each tour page.",
                },
                {
                    category: "barco",
                    q: "Is the boat cruise private or shared?",
                    a: "NORTHÉ offers experiences with private classic wooden boats or vintage rabelo vessels. Each tour page clearly indicates whether the cruise is private or shared.",
                },
                {
                    category: "barco",
                    q: "How long does the boat cruise typically last?",
                    a: "Cruises typically range from 1 to 2 hours, perfectly balanced within the day's itinerary as specified in the tour details.",
                },
                {
                    category: "barco",
                    q: "What happens if weather conditions prevent the boat cruise?",
                    a: "Guest safety and comfort are always paramount. If weather conditions prevent safe river navigation, we coordinate with operators to provide premium terrestrial alternatives or estate experiences.",
                },
                {
                    category: "familias",
                    q: "Are the tours suitable for families traveling with children or infants?",
                    a: "Many of our private experiences are ideal for families. We adapt travel pacing and comfort accordingly. We recommend sharing children's ages during booking so we can tailor the best itinerary.",
                },
                {
                    category: "familias",
                    q: "Are certified child seats and boosters provided?",
                    a: "Yes. Certified ISOFIX infant seats and booster seats are provided complimentary upon advance notice.",
                },
                {
                    category: "familias",
                    q: "Are the experiences accessible for guests with reduced mobility?",
                    a: "Accessibility varies by estate, terrain, and historic cobblestone settings. Please inform us of any mobility requirements so we can curate a smooth, step-free itinerary.",
                },
                {
                    category: "gastronomia",
                    q: "Can meals be adapted for dietary restrictions or allergies?",
                    a: "Yes. Dietary requirements (vegetarian, vegan, gluten-free, lactose-free, or specific allergies) can be accommodated at our partner restaurants and estates with advance notice.",
                },
                {
                    category: "gastronomia",
                    q: "Are vegetarian, vegan, or gluten-free options available?",
                    a: "Yes. We partner with top-tier culinary teams capable of crafting exceptional vegetarian, vegan, and gluten-free menus.",
                },
                {
                    category: "gastronomia",
                    q: "Is advance notice required for dietary preferences?",
                    a: "Yes. Kindly inform us at the time of reservation to ensure our culinary partners prepare appropriate bespoke courses.",
                },
                {
                    category: "cancelamentos",
                    q: "What is the cancellation and rescheduling policy?",
                    a: "We offer free cancellation with a 100% full refund for requests made up to 48 hours before tour departure. If your flight schedules shift or unexpected events arise, we happily adjust your tour date at no additional fee, subject to calendar availability.",
                },
                {
                    category: "cancelamentos",
                    q: "Can I reschedule my experience date after booking?",
                    a: "Yes. Date changes can be accommodated subject to calendar availability. The earlier you notify us, the smoother the transition.",
                },
                {
                    category: "cancelamentos",
                    q: "What occurs if adverse weather affects the experience?",
                    a: "When weather impacts outdoor activities like boat cruises, we adapt the itinerary to indoor private cellars, tasting rooms, and covered viewpoints, ensuring the luxury experience remains unforgettable.",
                },
                {
                    category: "cancelamentos",
                    q: "Can NORTHÉ adjust the itinerary during the tour?",
                    a: "If unexpected weather or local road closures arise, our professional chauffeur-guide may adjust the route to preserve safety, quality, and uninterrupted pleasure.",
                },
                {
                    category: "especiais",
                    q: "Can I arrange an experience for a special celebration?",
                    a: "Yes. We frequently curate bespoke private experiences for birthdays, anniversaries, proposals, and VIP milestones.",
                },
                {
                    category: "especiais",
                    q: "Does NORTHÉ organize marriage proposals, birthdays, or celebrations?",
                    a: "Yes. We specialize in intimate marriage proposals, milestone birthdays, and wedding anniversaries, coordinating flowers, champagne, and private musicians.",
                },
                {
                    category: "especiais",
                    q: "Can I add private picnics, professional photography, or bespoke extras?",
                    a: "Yes. Experiences can be enhanced with private vineyard picnics, personal photographers, or custom decorations upon request.",
                },
            ],
        },

        blog: {
            badge: "Journal & Travel Guides",
            title: "Douro & Northern Portugal Journal",
            subtitle: "Curated guides, exclusive itineraries, and insider secrets of Northern Portugal.",
            readMore: "Read Article",
            bookCta: "Book this experience",
            items: [
                {
                    slug: "passeio-de-barco-privado-no-porto-douro",
                    title: "Private Boat Tour in Porto: Complete Guide, Pricing & Douro River Views",
                    subtitle: "Discover Porto and Vila Nova de Gaia from the waters of the Douro River in complete exclusivity",
                    excerpt: "Cruising the Douro River aboard a 100% private boat is one of the most memorable ways to admire Porto's Ribeira, the Port wine cellars of Vila Nova de Gaia, and Dom Luís I Bridge. Learn about pricing (€150 up to 6 guests) and what to expect.",
                    date: "October 21, 2026",
                    category: "Porto Experiences",
                    image: "/images/tours/porto-private-boat-tour/1.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "The Private Boat Tour in Porto by NORTHÉ (Official License RNAAT 284/2026) offers a 100% exclusive nautical experience along the Douro River at a flat rate of €150 per departure for groups of 1 to 6 guests, lasting 1 hour with a licensed professional skipper." },
                        { type: "h3", text: "Why choose a private boat tour in Porto over a shared Six Bridges cruise?" },
                        { type: "p", text: "While traditional shared cruises carry dozens of passengers on rigid schedules, a private vessel lets you enjoy the Douro River exclusively with your partner, family, or friends. Aboard NORTHÉ's private boat, you glide in a serene atmosphere with cushioned bow and stern seating and total freedom to photograph Ribeira and Cais de Gaia without crowds." },
                        { type: "blockquote", text: "Seeing Porto from the Douro River reveals the true soul of the city: the historic facades of Ribeira, the centuries-old Port wine cellars in Gaia, and the grandeur of the Dom Luís I Bridge reflected on the water." },
                        { type: "image", url: "/images/tours/porto-private-boat-tour/3.webp", text: "Comfort and exclusivity aboard NORTHÉ's private boat on the Douro River (up to 6 guests)." },
                        { type: "h3", text: "What is included and important information" },
                        { type: "p", text: "The tour lasts approximately 1 hour, accommodates up to 6 passengers, and includes an exclusive private boat, licensed skipper, fuel, safety equipment, and mandatory insurance. We recommend comfortable clothing, a light windbreaker jacket, sunglasses, and arriving at the boarding point 10 to 15 minutes before departure." },
                    ],
                },
                {
                    slug: "8-melhores-passeios-a-partir-do-porto",
                    title: "8 Best Day Trips from Porto",
                    subtitle: "Discover Northern Portugal Beyond the City",
                    excerpt: "Porto is an exceptional base for exploring other regions of Portugal. Within a few hours, you can leave the historic city center behind and find terraced vineyards, medieval towns, palaces, mountains, and the Atlantic coast.",
                    date: "September 18, 2026",
                    category: "Travel Guide",
                    image: "/images/blog/8-melhores-passeios-porto.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Porto is an exceptional base for exploring other regions of Portugal. Within a few hours, you can leave the historic city center behind and find terraced vineyards, medieval towns, palaces, mountains, traditional villages, and the Atlantic coast." },
                        { type: "p", text: "Among the most sought-after journeys are Douro Valley, Braga, Guimarães, and Aveiro. For nature lovers, Peneda-Gerês National Park offers a completely distinct mountain landscape, while Arouca combines suspension bridges, rivers, and outdoor adventure. Amarante and Ponte de Lima offer serene alternatives intimately connected with local Minho heritage." },
                        { type: "p", text: "The choice depends entirely on your desires: world-class wine and gastronomy in the Douro, founding history in Guimarães, monumental religious architecture in Braga, serene canals in Aveiro, or pristine wilderness in Gerês." },
                        { type: "p", text: "Far more than a simple day excursion, exploring the North unlocks a land where history, culinary excellence, wine craftsmanship, and landscape are deeply intertwined." },
                        { type: "p", text: "Looking to discover Northern Portugal from Porto? Explore NORTHÉ private bespoke experiences." },
                    ],
                },
                {
                    slug: "vale-do-douro-a-partir-do-porto",
                    title: "Douro Valley from Porto",
                    subtitle: "Wines, Landscapes, and One of Portugal's Most Iconic Regions",
                    excerpt: "The Douro Valley is one of the most memorable journeys for anyone visiting Porto. The region is celebrated worldwide for its hand-carved schist vineyard terraces, the winding Douro River, and a centuries-old winemaking heritage.",
                    date: "September 17, 2026",
                    category: "Douro Valley",
                    image: "/images/blog/douro-valley-vineyards.webp",
                    readTime: "5 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "The Douro Valley is one of the most memorable journeys for anyone visiting Porto. The region is celebrated worldwide for its hand-carved schist vineyard terraces, the winding Douro River, and a centuries-old winemaking heritage deeply linked to Port Wine." },
                        { type: "p", text: "Pinhão and Peso da Régua are central focal points for visitors. Along the journey, historic quintas (wine estates), viewpoints, and scenic roads reveal stunning vistas across the canyon." },
                        { type: "p", text: "A day trip seamlessly combines an exclusive boutique winery, sommelier-guided tastings, regional gastronomy, and a private wooden boat cruise. Because the drive is more extensive than other destinations near Porto, thoughtful itinerary planning is essential." },
                        { type: "p", text: "The Douro also transforms dramatically across the seasons: spring carpets the valley in vivid greens, while September and October ignite the slopes in deep gold and amber during the harvest (vindima)." },
                        { type: "p", text: "For travelers in Porto who wish to understand the living harmony between terroir, wine, and Portuguese soul, the Douro is an experience that transcends conventional travel." },
                        { type: "p", text: "Discover the Douro through an exclusive NORTHÉ private journey." },
                    ],
                },
                {
                    slug: "o-que-fazer-no-porto",
                    title: "What to Do in Porto",
                    subtitle: "A City to Discover at Your Own Pace",
                    excerpt: "Porto blends timeless history, noble architecture, culinary excellence, renowned wines, and a vibrant cultural identity into a remarkably intimate setting.",
                    date: "September 16, 2026",
                    category: "Porto & Culture",
                    image: "/images/blog/o-que-fazer-porto.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Porto blends timeless history, noble architecture, culinary excellence, renowned wines, and a vibrant cultural identity into a remarkably intimate setting." },
                        { type: "p", text: "Its historic center, a UNESCO World Heritage site, gathers iconic landmarks such as Ribeira, Sé Cathedral, São Bento Station with its intricate azulejos, and the Clérigos Tower. Across the river, Vila Nova de Gaia hosts historic Port wine lodges and breathtaking panoramic views over the skyline." },
                        { type: "p", text: "Yet Porto reveals its true charm when explored beyond the headline monuments. Local food markets, cozy taverns, historic residential quarters, and the ocean promenade of Foz do Douro display authentic layers of local life." },
                        { type: "p", text: "For travelers with extra time, private culinary discoveries, contemporary architecture, and boutique museums are well worth delving into." },
                        { type: "p", text: "The finest way to experience Porto is at your personal rhythm: leaving space for spontaneous beauty rather than turning your holiday into a rushed checklist." },
                        { type: "p", text: "Experience Porto in a more personal way with NORTHÉ." },
                    ],
                },
                {
                    slug: "braga-e-guimaraes-a-partir-do-porto",
                    title: "Braga & Guimarães from Porto",
                    subtitle: "Two Historic Capitals in the Heart of Northern Portugal",
                    excerpt: "Braga and Guimarães stand among the most compelling cultural day trips for travelers exploring Northern Portugal from Porto.",
                    date: "September 14, 2026",
                    category: "History & Heritage",
                    image: "/images/blog/braga-guimaraes-norte.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Braga and Guimarães stand among the most compelling cultural day trips for travelers exploring Northern Portugal from Porto." },
                        { type: "p", text: "Braga blends an ancient historic quarter shaped by noble ecclesiastical architecture with icons like Bom Jesus do Monte, famed for its monumental Baroque stairway and commanding regional vistas." },
                        { type: "p", text: "Guimarães, recognized as the birthplace of the Portuguese nation, presents an enchanting medieval atmosphere. Its UNESCO-listed historic center preserves stone lanes, grand squares, and the imposing 10th-century castle." },
                        { type: "p", text: "Both cities can be visited in a single day, or explored individually with relaxed leisure, allowing deeper immersion into regional architecture and culinary traditions." },
                        { type: "p", text: "Braga resonates with lovers of grand architecture and sacred heritage, while Guimarães captivates those who cherish romantic medieval intimacy." },
                        { type: "p", text: "Two cities, two distinct perspectives on Portugal's foundational spirit." },
                    ],
                },
                {
                    slug: "norte-de-portugal-lugares-alem-do-porto",
                    title: "Northern Portugal Beyond Porto",
                    subtitle: "A Land of Breathtaking Landscapes, Wine, and Living Heritage",
                    excerpt: "Northern Portugal is far richer and more diverse than just Porto and the Douro.",
                    date: "September 12, 2026",
                    category: "Northern Portugal",
                    image: "/images/blog/norte-de-portugal-natureza.webp",
                    readTime: "5 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Northern Portugal extends far beyond the borders of Porto and the Douro." },
                        { type: "p", text: "To the north and east lie destinations of distinct character: Guimarães preserves medieval majesty, Braga showcases Baroque splendor, and Ponte de Lima embodies the aristocratic manor houses and Vinho Verde traditions of the Minho." },
                        { type: "p", text: "Further north, Viana do Castelo unites mountain grandeur, folklore, and coastal beaches. Inland, Peneda-Gerês National Park provides dramatic granitic mountains and ancient villages." },
                        { type: "p", text: "Hidden gems like Amarante and Arouca reveal an unhurried, pastoral side of Northern Portugal." },
                        { type: "p", text: "This striking variety allows travelers to transition effortlessly from a historic fortress to an exclusive vineyard, or from mountain peaks to Atlantic waves, all within a single journey." },
                        { type: "p", text: "Discover Northern Portugal through private signature journeys departing from Porto." },
                    ],
                },
                {
                    slug: "parque-nacional-peneda-geres-a-partir-do-porto",
                    title: "Peneda-Gerês National Park from Porto",
                    subtitle: "Untamed Nature, Granite Mountains, and Ancient Villages",
                    excerpt: "For those seeking Portugal's pristine wilderness, Peneda-Gerês National Park offers a completely different world from the urban charm of Porto.",
                    date: "September 10, 2026",
                    category: "Nature & Wilderness",
                    image: "/images/blog/geres-cascatas-natureza.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "For those seeking Portugal's pristine wilderness, Peneda-Gerês National Park offers a completely different world from the urban charm of Porto." },
                        { type: "p", text: "Granitic peaks, crystal waterfalls, secluded natural lagoons, and centuries-old granite villages create a timeless sanctuary that shifts beauty across each season. Villages like Soajo and Lindoso preserve ancient espigueiros (granaries) and living pastoral traditions." },
                        { type: "p", text: "Gerês is a haven for private hiking, photography, and refreshing dips in crystal-clear mountain waters during summer months." },
                        { type: "p", text: "Because the park is vast, exploring Gerês requires professional navigation and executive transport to connect the most scenic spots seamlessly." },
                        { type: "p", text: "Gerês is the perfect choice for travelers seeking silence, mountain majesty, and authentic nature." },
                        { type: "p", text: "Experience Portugal's only National Park with NORTHÉ." },
                    ],
                },
                {
                    slug: "douro-ou-vinho-verde",
                    title: "Douro Valley or Vinho Verde?",
                    subtitle: "Two Contrasting Wine Expressions in Northern Portugal",
                    excerpt: "Douro and Vinho Verde represent Portugal's two most renowned northern wine regions, each offering a fascinatingly distinct terroir and atmosphere.",
                    date: "September 8, 2026",
                    category: "Wine & Terroir",
                    image: "/images/blog/vinho-verde-vs-douro.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Douro and Vinho Verde represent Portugal's two most renowned northern wine regions, each offering a fascinatingly distinct terroir and atmosphere." },
                        { type: "p", text: "The Douro is distinguished by dramatic slate terraced hillsides, hot dry microclimates, and rich, full-bodied reds alongside iconic Ports." },
                        { type: "p", text: "In contrast, the Vinho Verde denomination spans the lush, green Minho region, characterized by family-run manors, pergola-trained vines, and fresh, aromatic whites such as premium Alvarinho." },
                        { type: "p", text: "The contrast is evident in both the glass and the landscape: monumental canyons versus pastoral aristocratic gardens." },
                        { type: "p", text: "Choosing between them depends on the ambiance you seek — or the joy of experiencing both on separate days." },
                        { type: "p", text: "Explore the diverse wine cultures of Northern Portugal with NORTHÉ." },
                    ],
                },
                {
                    slug: "experiencias-privadas-a-partir-do-porto",
                    title: "Private Experiences Departing from Porto",
                    subtitle: "Discovering Portugal at Your Own Rhythm",
                    excerpt: "Travel should never be confined to rigid bus schedules or crowded tour groups.",
                    date: "September 5, 2026",
                    category: "Private Experiences",
                    image: "/images/blog/experiencias-privadas-douro-terrace.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Travel should never be confined to rigid bus schedules or crowded tour groups." },
                        { type: "p", text: "A private experience gives you the freedom to shape the day around what your party loves most: lingering over a private tasting, enjoying a relaxed riverside lunch, or pausing at an unexpected viewpoint." },
                        { type: "p", text: "Departing from Porto, possibilities abound: from the terraced vineyards of the Douro to historic Braga and Guimarães, the waterfalls of Gerês, or the manor estates of the Minho." },
                        { type: "p", text: "For couples, families, and intimate groups, privacy ensures absolute comfort in executive vehicles without sharing your day with strangers." },
                        { type: "p", text: "More than checking off monuments, a private journey lets you choose how you wish to experience Portugal." },
                        { type: "p", text: "At NORTHÉ, we curate bespoke private journeys from Porto with certified chauffeur-guides, executive fleet transport, and passionate attention to detail." },
                        { type: "p", text: "Explore NORTHÉ private signature collection." },
                    ],
                },
                {
                    slug: "aveiro-e-coimbra-a-partir-do-porto",
                    title: "Aveiro & Coimbra from Porto",
                    subtitle: "Ria Canals, Costa Nova and Portugal's Oldest Historic University",
                    excerpt: "A private journey uniting the aquatic grace of Aveiro's canals, vivid striped fisher cottages, and the centuries-old scholarly grandeur of Coimbra.",
                    date: "September 24, 2026",
                    category: "Culture & Heritage",
                    image: "/images/tours/coimbra-aveiro/coimbra-aveiro-private-tour-1.webp",
                    readTime: "5 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Few day trips from Porto weave together such a compelling tapestry of maritime romance and medieval academic heritage as the scenic path to Aveiro and Coimbra." },
                        { type: "p", text: "Often hailed as the 'Venice of Portugal', Aveiro is shaped by the tranquil lagoons of its Ria. Gliding aboard a private moliceiro boat — once navigated to harvest seagrass for agricultural fertilizer — guests drift under historic bridges while marveling at Portugal's finest Art Nouveau facades lining the banks." },
                        { type: "p", text: "Minutes away lies Costa Nova, an idyllic seaside enclave famous for its brightly striped timber 'palheiros' in vivid candy reds, blues, and emerald greens facing the Atlantic dunes. It is also the ideal setting to savor authentic ovos moles, the delicate local egg-pastry legacy preserved by convent sisters." },
                        { type: "p", text: "Continuing south along the banks of the Mondego River, Coimbra ascends dramatically into the sky. The cradle of six Portuguese monarchs and home to the oldest university in Portugal (founded in 1290 and recognized as a UNESCO World Heritage site), its upper campus shelters the incomparable Joanina Library. This gilded Baroque sanctuary houses thousands of rare antiquarian volumes, guarded by a resident bat colony that protects the ancient pages from insects." },
                        { type: "p", text: "Between sunlit canals and sovereign academic libraries, this bespoke private itinerary immerses travelers in Portugal's intellectual and coastal heart in absolute executive comfort." },
                        { type: "p", text: "Discover our private Aveiro & Coimbra tour with NORTHÉ." }
                    ]
                },
                {
                    slug: "nazare-obidos-e-sao-martinho-do-porto",
                    title: "Nazaré & Óbidos: Monster Ocean Waves & Medieval Walled Fortresses",
                    subtitle: "Silver Coast legends from colossal canyon swells to fairytale stone alleys",
                    excerpt: "From the world's most epic big-wave promontory in Nazaré to the bougainvillea-draped stone ramparts of royal Óbidos.",
                    date: "September 26, 2026",
                    category: "Silver Coast",
                    image: "/images/tours/nazare-sao-martinho/1.webp",
                    readTime: "5 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Portugal's Silver Coast is a dramatic maritime realm where the untamed fury of the Atlantic meets nine centuries of kings, crusaders, and fearless seafarers." },
                        { type: "p", text: "In Nazaré, standing atop the cliffside Sítio da Nazaré reveals a breathtaking panorama. Perched on the cliff edge, the red lighthouse fortress of São Miguel Arcanjo surveys the underwater Nazaré Canyon — an abyssal undersea chasm plunging over 16,000 feet that channels the most titanic surf waves ever ridden by humankind." },
                        { type: "p", text: "Yet Nazaré is also deeply steeped in coastal heritage: local women still wearing the historic seven-layered skirts, silver fish drying in sea-breeze racks on golden beaches, and harborside taverns serving freshly landed seafood of exceptional caliber." },
                        { type: "p", text: "A scenic coastal drive reveals the serene, shell-shaped bay of São Martinho do Porto, offering crystal-clear still waters framed by sheltering limestone dunes." },
                        { type: "p", text: "The day culminates inside the fortified crown of Óbidos, one of Europe's most pristine medieval villages. Given as a royal wedding gift by Portuguese monarchs to their queens, Óbidos invites you to stroll along medieval ramparts, explore flower-filled cobbled alleys, and sip regional sour cherry liqueur (Ginjinha) served in artisanal dark chocolate cups." },
                        { type: "p", text: "Experience the Silver Coast in bespoke luxury with a private tour by NORTHÉ." }
                    ]
                },
                {
                    slug: "fatima-batalha-e-tomar-monumentos-unesco",
                    title: "Fátima, Batalha & Tomar: Templar Knights & UNESCO Masterpieces",
                    subtitle: "Serene spirituality, flamboyant Gothic stone lace, and the secrets of the Knights Templar",
                    excerpt: "An unforgettable immersion in Portugal's royal history: the peaceful sanctuary of Fátima, the Gothic majesty of Batalha, and Tomar's Templar fortress.",
                    date: "September 28, 2026",
                    category: "History & UNESCO",
                    image: "/images/tours/fatima-batalha-tomar/1.webp",
                    readTime: "5 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "Very few journeys in Southern Europe gather as much spiritual significance, military chivalry, and architectural grandeur as the historic golden triangle of Fátima, Batalha, and Tomar." },
                        { type: "p", text: "The visit begins at the Sanctuary of Our Lady of the Rosary of Fátima, an oasis of profound peace and one of the world's most revered pilgrimage destinations. Its vast esplanade, neo-Baroque Basilica, and intimate Chapel of Apparitions provide a deeply reflective opening to the day." },
                        { type: "p", text: "Continuing to Batalha Monastery (Santa Maria da Vitória), travelers are met by one of the crowning triumphs of European Gothic and Manueline architecture. Commissioned by King John I in gratitude for the nation-saving victory at the Battle of Aljubarrota in 1385, the monastery enchants with soaring stained-glass nave windows and the world-famous Unfinished Chapels — an open-air octagonal pantheon carved with stone lacework of unbelievable virtuosity." },
                        { type: "p", text: "In Tomar, the adventure reaches its dramatic pinnacle at the Convent of Christ and Templar Castle, former headquarters of the enigmatic Knights Templar. The 12th-century octagonal Charola, modeled on Jerusalem's Church of the Holy Sepulchre, and the famed Chapterhouse Window tell the epic saga of maritime exploration and Christian chivalry that shaped world history." },
                        { type: "p", text: "An indispensable bespoke journey for connoisseurs of world history, monumental architecture, and legendary tales." },
                        { type: "p", text: "Book your private Fátima, Batalha & Tomar expedition with NORTHÉ." }
                    ]
                },
                {
                    slug: "ponte-de-lima-e-barcelos-minho-vinho-verde",
                    title: "Ponte de Lima & Barcelos: Medieval Nobility & the Vinho Verde Route",
                    subtitle: "Portugal's oldest chartered town, the Rooster legend, and the noble soul of Minho",
                    excerpt: "Unveil the aristocratic rural charm of the Minho: ancient Roman bridges, manor houses, the birthplace of the Barcelos Rooster, and prestigious Vinho Verde estates.",
                    date: "September 30, 2026",
                    category: "Minho & Vinho Verde",
                    image: "/images/tours/ponte-de-lima-douro/ponte-de-lima-historic-wine-centre.webp",
                    readTime: "4 min read",
                    bookable: true,
                    fullContent: [
                        { type: "p", text: "The Minho province represents the warmest, greenest, and most aristocratic soul of Northern Portugal. Framed by crystalline mountain rivers and vine-shaded pergolas, it is the exclusive birthplace of crisp Vinho Verde." },
                        { type: "p", text: "Ponte de Lima proudly bears the distinction of being Portugal's oldest chartered town, officially established in 1125 by Countess-Queen Teresa. Its majestic Roman and medieval stone bridge across the Lima River gave rise to the legendary tale of the River Lethes, where conquering Roman legions froze in terror, fearing its waters would erase all memories of their homeland." },
                        { type: "p", text: "Wandering through the historic heart of Ponte de Lima reveals noble granite mansions, lush botanical gardens, and the Vinho Verde Interpretation Centre (CIPV), complemented by rustic taverns celebrating traditional Minho hospitality." },
                        { type: "p", text: "In Barcelos, artistic craft thrives in century-old ceramic workshops that gave life to the Legend of the Rooster — the miraculous bird that crowed to save an innocent pilgrim heading to Santiago de Compostela, forever cementing the Rooster as Portugal's global emblem of trust and good fortune." },
                        { type: "p", text: "Paired with private visits to historic aristocratic quintas tasting exquisite Loureiro and single-estate Alvarinho wines, this private journey captures the purest essence of northern Portuguese tradition." },
                        { type: "p", text: "Experience the private manor estates and wines of Minho with NORTHÉ." }
                    ]
                }
            ],
        },
        contact: {
            title: 'Shall we create your experience in Portugal?',
            desc: 'Tell us what you would love to experience. We craft a private journey tailored exclusively for your group.',
            ctaBook: 'Book Experience', ctaWhatsapp: 'Chat on WhatsApp',
            emailLabel: 'Email', email: EMAIL,
            phoneLabel: 'Phone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Tailor-Made Experiences',
            title: 'Looking for something unique?',
            subtitle: 'We craft personalized private experiences.',
            desc: 'We create bespoke private experiences designed around your personal interests, preferred pace, and special occasions.',
            collection: 'North Private Collection',
            collectionDesc: 'Private dining, historic wine estates, and unforgettable scenic journeys.',
            destinations: ['Porto', 'Douro Valley', 'Alcobaça', 'Amarante', 'Arouca', 'Aveiro', 'Batalha', 'Barcelos', 'Braga', 'Coimbra', 'Fátima', 'Gerês', 'Guimarães', 'Lamego', 'Nazaré', 'Óbidos', 'Ponte de Lima', 'Santa Maria da Feira', 'São Martinho do Porto', 'Tomar'],
            cta: 'Design My Experience',
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
                { title: '1. Identification of the Data Controller', content: 'The entity responsible for data processing is "NORTHÉ" (NIPC: 518 190 145), based in Portugal. We are committed to the protection of personal data, strictly complying with the EU GDPR (General Data Protection Regulation) standards.' },
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
                { title: '1. Scope and Object', content: 'These Terms and Conditions apply to all services provided by NORTHÉ. By booking with us, the client declares they know and accept these rules.' },
                { title: '2. Bookings and Payments', content: 'Bookings become effective after written confirmation from NORTHÉ. Payments are made according to the method agreed upon at the time of booking.' },
                { title: '3. Cancellation Policy', content: 'Free cancellation up to 48 hours before the tour date. After this period, the full booking value will be charged due to commitments made with local partners.' },
                { title: '4. Responsibility', content: 'NORTHÉ holds all insurance required by law (Personal Accident and Civil Liability). We are not responsible for loss of personal belongings during activities.' },
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
            title1: 'Experiencias Privadas desde Oporto',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Experiencias privadas por el Duero, Oporto y el Norte de Portugal, con transporte ejecutivo e itinerarios cuidadosamente pensados para cada grupo.',
            cta: 'Explorar Experiencias',
            ctaWhatsapp: 'Hablar por WhatsApp',
            trustLine: '100% Privado · 1–8 Personas · Transporte Ejecutivo · Cancelación Gratuita hasta 48h',
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
                extra: 'Persona Adicional',
                perPersonLabel: 'Por Persona',
                pricingNote: 'para 2 personas',
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
                    capacityLabel: 'Máximo: 4 personas',
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
                    capacityLabel: 'Máximo: 4 personas',
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
            badge: "Sobre NORTHÉ",
            title: "Experiencias privadas, creadas para descubrir Portugal de una forma más personal.",
            paragraphs: [
                "NORTHÉ nació en Oporto con una idea simple: transformar cada viaje en una experiencia con verdadero significado. Creamos rutas privadas por el Duero, Oporto y el Norte de Portugal, combinando paisajes, vinos, gastronomía, cultura y lugares cuidadosamente seleccionados.",
                "Cada experiencia está pensada para su grupo, con comodidad, flexibilidad y esmero en los detalles — porque conocer un destino no tiene que seguir un itinerario idéntico para todos.",
            ],
            signature: "NORTHÉ",
            imageAlt: "Restaurante vinícola con vistas panorámicas al atardecer sobre el río Duero y Oporto",
        },
        reviews: {
            badge: 'Reseñas',
            title: 'Lo Que Dicen Nuestros Clientes',
            subtitle: 'Cada reseña es una historia real de quien vivió la experiencia.',
            rating: '5.0', totalReviews: '5.0 ★★★★★',
            googleScore: '5.0',
            googleBadge: 'Google Reviews',
            googleVerified: 'Calificación 5.0 Estrellas en Google',
            googleHighlight: '100% de opiniones verificadas con 5 estrellas',
            viewOnGoogle: 'Ver todas las reseñas en Google Maps',
            writeOnGoogle: 'Valorar en Google',
            bottomTitle: '¿Ha vivido una experiencia con NORTHÉ?',
            bottomSubtitle: 'Su opinión es de gran valor para nosotros. Conozca las historias de nuestros clientes o comparta su propia experiencia en nuestro perfil de Google.',
            verifiedTag: 'Reseña Verificada en Google',
            items: [
                { text: 'Una experiencia que trasciende el turismo. Nos sentimos como invitados de honor en una de las regiones más bellas del mundo. El guía fue excepcional y la atención al detalle impresionante.', author: 'Sofia Albuquerque', location: 'Lisboa, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'La atención al detalle fue impecable. Desde el paseo en barco privado hasta las catas de vino exclusivas, todo fue perfecto. Muy recomendable para cualquiera que visite Oporto.', author: 'James Sterling', location: 'Londres, Reino Unido', flag: '🇬🇧', stars: 5 },
                { text: 'Un día mágico en el Duero. El guía fue excelente, los vinos soberbios y el almuerzo delicioso. ¡Muy recomendable!', author: 'Marie Dubois', location: 'París, Francia', flag: '🇫🇷', stars: 5 },
                { text: '¡La mejor experiencia en el Duero! El paseo en barco al atardecer fue inolvidable.', author: 'Carlos Mendes', location: 'São Paulo, Brasil', flag: '🇧🇷', stars: 5 },
                { text: '¡Un día perfecto! La cata de vinos fue de alto nivel y el paisaje es impresionante.', author: 'Hannah Müller', location: 'Múnich, Alemania', flag: '🇩🇪', stars: 5 },
                { text: 'Celebramos nuestro aniversario con NORTHÉ y fue lo mejor de nuestro viaje. Lujo real.', author: 'Michael & Sarah Chen', location: 'Nueva York, EE. UU.', flag: '🇺🇸', stars: 5 },
                { text: 'El guía sabía todo sobre la historia de la región. Un viaje imprescindible para los amantes del vino.', author: 'Alessandro Rossi', location: 'Milán, Italia', flag: '🇮🇹', stars: 5 },
                { text: 'Traslado impecable y tour aún mejor. Servicio de primera clase de principio a fin.', author: 'Lucía Fernández', location: 'Madrid, España', flag: '🇪🇸', stars: 5 },
                { text: '¡Increíble! El Duero es mágico y el equipo de NORTHÉ hizo que todo fuera especial.', author: 'Daan van der Berg', location: 'Ámsterdam, Holanda', flag: '🇳🇱', stars: 5 },
            ],
        },

        faq: {
            badge: "FAQ",
            title: "Todo lo que necesita saber",
            subtitle: "Respuestas claras y transparentes a las dudas más frecuentes antes de reservar su experiencia privada.",
            searchPlaceholder: "Buscar dudas (ej: barco, recogida, niños, cancelación)...",
            noResults: "No se encontraron preguntas para esta búsqueda.",
            clearSearch: "Limpiar búsqueda",
            whatsappTitle: "¿Aún tiene alguna duda sobre su experiencia?",
            whatsappSubtitle: "Hable directamente con NORTHÉ. Estaremos encantados de ayudarle a diseñar la experiencia e itinerario idóneos.",
            whatsappBtn: "Hablar por WhatsApp",
            categories: [
                { id: "all", label: "Todas las Dudas" },
                { id: "reservas", label: "Reservas y Precios" },
                { id: "transporte", label: "Recogida y Transporte" },
                { id: "douro", label: "Valle del Duero" },
                { id: "barco", label: "Paseos en Barco" },
                { id: "familias", label: "Familias y Accesibilidad" },
                { id: "gastronomia", label: "Alimentación y Dietas" },
                { id: "cancelamentos", label: "Cancelaciones y Flexibilidad" },
                { id: "especiais", label: "Ocasiones Especiales" },
            ],
            items: [
                {
                    category: "reservas",
                    q: "¿Cómo puedo reservar una experiencia privada con NORTHÉ?",
                    a: "Puede solicitar su experiencia directamente a través de nuestro sitio web, WhatsApp o por los canales de contacto de NORTHÉ. Indíquenos la fecha deseada, número de personas y la experiencia de su interés. Nuestro equipo confirmará la disponibilidad y todos los detalles antes de la reserva."
                },
                {
                    category: "reservas",
                    q: "¿Con cuánta antelación debo hacer mi reserva?",
                    a: "Recomendamos reservar con antelación, especialmente para experiencias en el Valle del Duero, paseos en barco, visitas a bodegas y fechas de alta demanda. Las reservas de última hora pueden ser posibles según disponibilidad."
                },
                {
                    category: "reservas",
                    q: "¿Los tours de NORTHÉ son 100% privados?",
                    a: "Sí. NORTHÉ está especializada exclusivamente en experiencias privadas. Su grupo viaja y disfruta de la experiencia con total exclusividad, sin compartir el vehículo con otros clientes."
                },
                {
                    category: "reservas",
                    q: "¿Cómo funciona el precio de una experiencia privada?",
                    a: "El precio depende de la experiencia elegida, del número de participantes, del itinerario y de los servicios exclusivos incluidos. Cada experiencia presenta claramente sus condiciones y precio antes de la reserva."
                },
                {
                    category: "reservas",
                    q: "¿El valor presentado es por persona o por grupo?",
                    a: "El valor presentado es por grupo privado, no por persona. Las experiencias de NORTHÉ se pueden reservar para grupos de 1 a 8 personas, manteniendo la exclusividad total. El precio varía según la experiencia y el número de participantes."
                },
                {
                    category: "reservas",
                    q: "¿Qué está incluido en el valor? ¿Existen costes adicionales?",
                    a: "Cada experiencia detalla con claridad lo que está incluido. Cuando existen servicios opcionales, entradas a monumentos, comidas especiales, catas raras o paseos en barco no incluidos, se informarán con total transparencia con antelación."
                },
                {
                    category: "reservas",
                    q: "¿Cuáles son las formas de pago disponibles?",
                    a: "Las opciones de pago se informan en el momento de la reserva. El pago se efectúa a través de medios seguros (transferencia bancaria, tarjetas de crédito/débito, MB Way) y los detalles se confirman antes de la experiencia."
                },
                {
                    category: "reservas",
                    q: "¿Puedo solicitar una experiencia totalmente personalizada?",
                    a: "Sí. La personalización a medida es una de las mayores señas de identidad de NORTHÉ. Podemos adaptar el ritmo, el itinerario y detalles específicos según los gustos y necesidades de su grupo, siempre que sea operativamente viable."
                },
                {
                    category: "transporte",
                    q: "¿Dónde se realiza la recogida (pick-up) y el regreso?",
                    a: "La recogida y el regreso se acuerdan previamente según el lugar indicado en su reserva. Para experiencias con salida desde Oporto, organizamos la recogida en el punto acordado."
                },
                {
                    category: "transporte",
                    q: "¿NORTHÉ ofrece recogida y regreso en hoteles de Oporto?",
                    a: "Recogemos a su grupo directamente en el vestíbulo de su hotel, apartamento, Airbnb o residencia en Oporto y Vila Nova de Gaia, habitualmente entre las 08:30 y las 09:00 (o en el horario que prefiera). Al final del día (~18:00 - 18:30), regresamos cómodamente al mismo punto o en un restaurante de su elección para cenar."
                },
                {
                    category: "transporte",
                    q: "¿Es posible realizar la recogida en el Aeropuerto de Oporto?",
                    a: "Sí. El servicio debe solicitarse en el momento de la reserva para que podamos coordinar los vuelos y el horario adecuado."
                },
                {
                    category: "transporte",
                    q: "¿Puedo solicitar la recogida fuera de Oporto?",
                    a: "Es posible evaluar recogidas fuera del área habitual según la ubicación, horario y experiencia seleccionada. Podrá aplicarse un suplemento que será informado previamente."
                },
                {
                    category: "transporte",
                    q: "¿El transporte durante el tour es exclusivamente privado?",
                    a: "Sí. Las experiencias privadas de NORTHÉ se realizan en vehículos ejecutivos reservados exclusivamente para su grupo."
                },
                {
                    category: "douro",
                    q: "¿Cuál es la mejor manera de visitar el Duero desde Oporto?",
                    a: "Una experiencia privada permite explorar el Valle del Duero con total libertad, evitando horarios rígidos y adaptando el ritmo a su grupo. Desde Oporto, permite combinar miradores, bodegas históricas, gastronomía regional y navegación por el río."
                },
                {
                    category: "douro",
                    q: "¿Cuánto tiempo dura un tour privado por el Duero?",
                    a: "La duración varía según la experiencia elegida. Las experiencias de NORTHÉ están pensadas generalmente para un día completo (aprox. 8 a 9 horas), y la duración exacta se indica en la página de cada tour."
                },
                {
                    category: "douro",
                    q: "¿Qué puedo visitar durante una experiencia privada en el Duero?",
                    a: "Según el itinerario, visitará bodegas (quintas), viñedos en terrazas, pueblos ribereños históricos como Pinhão, miradores panorámicos y conocerá a fondo la cultura del vino y la gastronomia de la región."
                },
                {
                    category: "douro",
                    q: "¿Las catas de vinos están incluidas?",
                    a: "Depende de la experiencia. Cuando una cata forma parte del programa, se indica claramente en la descripción. También podemos diseñar catas personalizadas con cosechas especiales."
                },
                {
                    category: "douro",
                    q: "¿Qué tipos de vinos puedo degustar en el Duero?",
                    a: "Según el itinerario, conocerá diferentes expresiones de la región: vinos blancos frescos DOC Douro, tintos de guarda con cuerpo y los legendarios Vinos de Oporto (Tawny, Ruby, Colheitas)."
                },
                {
                    category: "douro",
                    q: "¿Puedo visitar una bodega (quinta) específica en el Duero?",
                    a: "Podemos evaluar su petición y comprobar la disponibilidad de la finca para la fecha deseada. Ciertas visitas prestigiosas requieren reserva previa según su calendario."
                },
                {
                    category: "douro",
                    q: "¿Puedo personalizar el itinerario de mi tour por el Duero?",
                    a: "Sí. Las experiencias privadas permiten gran flexibilidad. Conversamos con usted sobre los lugares que desea conocer para crear una experiencia a medida, respetando los tiempos y aperturas de los lugares visitados."
                },
                {
                    category: "barco",
                    q: "¿Las experiencias de NORTHÉ incluyen paseo en barco por el Duero?",
                    a: "Varias experiencias incluyen navegación por el río Duero. La modalidad de paseo, duración y embarcación se detallan en la página de cada experiencia."
                },
                {
                    category: "barco",
                    q: "¿El paseo en barco es privado o compartido?",
                    a: "Depende de la experiencia elegida. NORTHÉ dispone de diferentes modalidades, incluyendo opciones de barco rabelo 100% privado cuando se especifica en el programa."
                },
                {
                    category: "barco",
                    q: "¿Cuánto tiempo dura el paseo en barco?",
                    a: "La duración varía según la experiencia reservada (generalmente de 1 a 2 horas), y el tiempo previsto se indica con exactitud en la descripción de cada tour."
                },
                {
                    category: "barco",
                    q: "¿Qué sucede si las condiciones meteorológicas impiden el paseo en barco?",
                    a: "La seguridad y el confort son siempre prioritarios. Si el tiempo impide la navegación, se evalúa la situación y se presentan alternativas culturales o ajustes de acuerdo con las condiciones de reserva."
                },
                {
                    category: "familias",
                    q: "¿Los tours son adecuados para familias con niños o bebés?",
                    a: "Muchas de nuestras experiencias son ideales para familias. La adecuación depende del itinerario, duración y actividades. Aconsejamos indicar la edad de los niños al reservar para orientar la mejor elección."
                },
                {
                    category: "familias",
                    q: "¿Se proporcionan asientos o sillas para niños?",
                    a: "Sí. Disponemos gratuitamente de sillas de seguridad y alzadores homologados para bebés y niños, previa solicitud en la reserva."
                },
                {
                    category: "familias",
                    q: "¿Las experiencias son aptas para personas con movilidad reducida?",
                    a: "La accesibilidad varía según la bodega, vehículo, terreno y monumentos visitados. Si algún participante tiene necesidades de movilidad, infórmenos antes de reservar para diseñar una ruta cómoda."
                },
                {
                    category: "gastronomia",
                    q: "¿Es posible adaptar las comidas a restricciones alimentarias?",
                    a: "Siempre que sea posible, sí. Las restricciones deben comunicarse con antelación para verificar y acordar opciones gastronómicas de primer nivel con nuestros restaurantes asociados."
                },
                {
                    category: "gastronomia",
                    q: "¿Existen opciones vegetarianas, veganas o sin gluten?",
                    a: "Pueden solicitarse menús vegetarianos, veganos o sin gluten previa indicación en el momento de la reserva con los restaurantes y bodegas seleccionados."
                },
                {
                    category: "gastronomia",
                    q: "¿Es necesario informar alergias o intolerancias con antelación?",
                    a: "Sí. Cuanto antes nos informe, mayor será la garantía de coordinar una atención gastronómica impecable y adaptada."
                },
                {
                    category: "cancelamentos",
                    q: "¿Cuál es la política de cancelación y cambio de fechas?",
                    a: "Ofrecemos cancelación gratuita y reembolso total para cancelaciones solicitadas hasta 48 horas antes del inicio del tour. Si sus planes de vuelo cambian, modificamos la fecha sin coste adicional, sujeto a disponibilidad."
                },
                {
                    category: "cancelamentos",
                    q: "¿Puedo cambiar la fecha de mi experiencia después de reservar?",
                    a: "Las solicitudes de cambio se gestionan según la disponibilidad para la nueva fecha. Cuanto antes nos contacte, más fácil será asegurar la fecha alternativa."
                },
                {
                    category: "cancelamentos",
                    q: "¿Qué ocurre si el mal tiempo afecta a la experiencia?",
                    a: "Si el clima compromete alguna actividad exterior, adaptamos el itinerario con visitas a palacios, catas interiores y propuestas a resguardo para mantener la excelencia del día."
                },
                {
                    category: "cancelamentos",
                    q: "¿NORTHÉ puede modificar el itinerario durante el tour?",
                    a: "En circunstancias excepcionales (clima, tráfico, disponibilidad de fincas), se pueden realizar ajustes para garantizar la seguridad y preservar la esencia y máxima calidad de la experiencia."
                },
                {
                    category: "especiais",
                    q: "¿Puedo organizar una experiencia para una ocasión especial?",
                    a: "Sí. Diseñamos con entusiasmo experiencias privadas exclusivas para celebrar momentos únicos con el máximo esmero."
                },
                {
                    category: "especiais",
                    q: "¿NORTHÉ organiza cumpleaños, peticiones de mano o celebraciones?",
                    a: "Sí. Organizamos cumpleaños, aniversarios, pedidas de mano y celebraciones privadas memorables. Los detalles se coordinan previamente de forma personalizada."
                },
                {
                    category: "especiais",
                    q: "¿Puedo añadir un picnic, fotógrafo u otros servicios a mi experiencia?",
                    a: "Ciertas experiencias pueden enriquecerse con pícnics en terrazas, fotógrafo profesional, detalles florales o barco privado. La disponibilidad y el valor se confirman a medida."
                },
            ],
        },
blog: {
            badge: "Diario y Guías",
            title: "Diario del Norte y Duero",
            subtitle: "Guías autorizadas, itinerarios exclusivos y secretos del Norte de Portugal.",
            readMore: "Leer Artículo",
            bookCta: "Reservar esta experiencia",
            items: [
                {
                    slug: "passeio-de-barco-privado-no-porto-douro",
                    title: "Paseo en Barco Privado en Oporto: Guía Completa, Precio y Vistas del Río Duero",
                    subtitle: "Descubra Oporto y Vila Nova de Gaia desde las aguas del Río Duero con total exclusividad",
                    excerpt: "Navegar por el Río Duero en una embarcación 100% privada es una de las formas más memorables de admirar la Ribeira de Oporto, las bodegas de Vila Nova de Gaia y el Puente D. Luís I. Conozca el precio (150€ hasta 6 personas) y todos los detalles.",
                    date: "21 de Octubre de 2026",
                    category: "Porto Experiences",
                    image: "/images/tours/porto-private-boat-tour/1.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El Paseo en Barco Privado en Oporto de NORTHÉ (Licencia Oficial RNAAT 284/2026) ofrece una experiencia náutica 100% exclusiva por el Río Duero por una tarifa fija de 150€ por salida para grupos de 1 a 6 personas, con 1 hora de duración y patrón profesional titulado." },
                        { type: 'h3', text: "¿Por qué elegir un paseo en barco privado en Oporto frente a un crucero compartido?" },
                        { type: 'p', text: "Mientras los cruceros compartidos transportan decenas de pasajeros, una embarcación privada le permite disfrutar del Río Duero solo con su pareja, familia o amigos, admirando la Ribeira de Oporto y el Cais de Gaia con total intimidad y confort." },
                        { type: 'blockquote', text: "Contemplar Oporto desde el Río Duero revela el alma de la ciudad: las fachadas históricas de la Ribeira, las bodegas de Vino de Oporto en Gaia y la imponente silueta del Puente D. Luís I." },
                        { type: 'image', url: "/images/tours/porto-private-boat-tour/3.webp", text: "Confort y exclusividad a bordo del barco privado de NORTHÉ en el Río Duero (hasta 6 pasajeros)." },
                        { type: 'h3', text: "Qué incluye e información importante" },
                        { type: 'p', text: "El paseo tiene una duración aproximada de 1 hora, capacidad máxima para 6 pasajeros e incluye barco privado exclusivo, patrón titulado, combustible, equipo de seguridad y seguros obligatorios. Se recomienda ropa cómoda, chaqueta cortavientos, gafas de sol y llegar al punto de embarque 10 a 15 minutos antes." },
                    ]
                },
                {
                    slug: "8-melhores-passeios-a-partir-do-porto",
                    title: "8 Mejores Excursiones desde Oporto",
                    subtitle: "Descubra el Norte de Portugal más allá de la ciudad",
                    excerpt: "Oporto es una base excelente para descubrir otras regiones de Portugal. En pocas horas es posible salir del centro histórico y encontrar viñedos en terrazas, villas medievales, palacios, montañas y la costa atlántica.",
                    date: "18 de Septiembre de 2026",
                    category: "Guía de Viaje",
                    image: "/images/blog/8-melhores-passeios-porto.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Oporto es una base excelente para descubrir otras regiones de Portugal. En pocas horas es posible salir del centro histórico y encontrar viñedos en terrazas, villas medievales, palacios, montañas y la costa atlántica." },
                        { type: 'p', text: "Entre las excursiones más solicitadas destacan el Valle del Duero, Braga, Guimarães y Aveiro. Para los amantes de la naturaleza, el Parque Nacional de Peneda-Gerês ofrece un paisaje completamente diferente, mientras que Arouca combina ríos y puentes colgantes. Amarante y Ponte de Lima son alternativas idóneas para un ritmo tranquilo y auténtico." },
                        { type: 'p', text: "La elección depende de sus gustos: vino y gastronomía en el Duero, historia en Guimarães, patrimonio en Braga, canales en Aveiro o naturaleza salvaje en Gerês." },
                        { type: 'p', text: "Más que una simple escapada de un día, explorar el Norte permite conectar con un territorio donde historia, cocina, vino y paisaje se entrelazan de forma inseparable." },
                        { type: 'p', text: "¿Desea descubrir el Norte de Portugal desde Oporto? Conozca las experiencias privadas de NORTHÉ." },
                    ]
                },
                {
                    slug: "vale-do-douro-a-partir-do-porto",
                    title: "Valle del Duero desde Oporto",
                    subtitle: "Vinos, paisajes y una de las regiones más emblemáticas de Portugal",
                    excerpt: "El Valle del Duero es una de las experiencias más inolvidables para quienes visitan Oporto. La región es célebre por sus laderas de viñedos en terrazas, el río Duero y su tradición vinícola secular.",
                    date: "17 de Septiembre de 2026",
                    category: "Valle del Duero",
                    image: "/images/blog/douro-valley-vineyards.webp",
                    readTime: "5 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El Valle del Duero es una de las experiencias más inolvidables para quienes visitan Oporto. La región es célebre por sus laderas de viñedos en terrazas, el río Duero y su tradición vinícola secular ligada al célebre Vino de Oporto." },
                        { type: 'p', text: "Pinhão y Peso da Régua son los puntos de referencia principales. A lo largo del camino, bodegas históricas (quintas), miradores y carreteras panorámicas descubren vistas espectaculares." },
                        { type: 'p', text: "Una visita de un día combina bodega vinícola, cata comentada, gastronomía regional y un relajante paseo en barco por el río. Al ser un trayecto más amplio desde Oporto, planificar el día con esmero resulta esencial." },
                        { type: 'p', text: "El Duero se transforma con cada estación. La primavera despliega un manto verde brillante, mientras que septiembre y octubre tiñen las viñas de dorado durante la época de la vendimia." },
                        { type: 'p', text: "Para quien busca comprender la conexión entre tierra, vino y cultura portuguesa, el Duero es una experiencia que va mucho más allá de una visita convencional." },
                        { type: 'p', text: "Descubra el Duero con una experiencia privada NORTHÉ." },
                    ]
                },
                {
                    slug: "o-que-fazer-no-porto",
                    title: "Qué Hacer en Oporto",
                    subtitle: "Una ciudad para descubrir sin prisas",
                    excerpt: "Oporto reúne historia, arquitectura señorial, gastronomía de autor, vinos y una identidad cultural vibrante en un espacio cómodo de recorrer.",
                    date: "16 de Septiembre de 2026",
                    category: "Oporto y Cultura",
                    image: "/images/blog/o-que-fazer-porto.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Oporto reúne historia, arquitectura señorial, gastronomía de autor, vinos y una identidad cultural vibrante en un espacio cómodo de recorrer." },
                        { type: 'p', text: "Su centro histórico, Patrimonio de la Humanidad por la UNESCO, acoge iconos como la Ribeira, la Catedral de la Sé, la Estación de São Bento con sus azulejos y la Torre de los Clérigos. En la otra orilla, Vila Nova de Gaia ofrece las históricas bodegas de vino de Oporto y las vistas más célebres de la ciudad." },
                        { type: 'p', text: "Pero Oporto se disfruta aún más allá de los monumentos principales. Mercados tradicionales, restaurantes acogedores, cafés con encanto y el paseo costero de Foz do Douro revelan el alma auténtica de la ciudad." },
                        { type: 'p', text: "Para quien dispone de más tiempo, vale la pena adentrarse en experiencias gastronómicas privadas, arquitectura contemporánea y museos de arte." },
                        { type: 'p', text: "La mejor forma de vivir la ciudad depende de su propio ritmo: algunos prefieren los monumentos clave, mientras que otros buscan rincones íntimos y sorprendentes." },
                        { type: 'p', text: "Lo esencial es dejar espacio para pasear sin convertir el viaje en una lista apresurada de lugares." },
                        { type: 'p', text: "Explore Oporto de una forma más personal y exclusiva con NORTHÉ." },
                    ]
                },
                {
                    slug: "braga-e-guimaraes-a-partir-do-porto",
                    title: "Braga y Guimarães desde Oporto",
                    subtitle: "Dos destinos históricos en el corazón del Norte de Portugal",
                    excerpt: "Braga y Guimarães se sitúan entre los destinos culturales más fascinantes para explorar el Norte de Portugal desde Oporto.",
                    date: "14 de Septiembre de 2026",
                    category: "Historia y Patrimonio",
                    image: "/images/blog/braga-guimaraes-norte.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Braga y Guimarães se sitúan entre los destinos culturales más fascinantes para explorar el Norte de Portugal desde Oporto." },
                        { type: 'p', text: "Braga combina un casco histórico distinguido por su arquitectura religiosa y barroca con enclaves monumentales como el Santuario del Bom Jesus do Monte y sus famosas escalinatas." },
                        { type: 'p', text: "Guimarães ofrece una atmósfera medieval única. Su centro histórico UNESCO conserva plazas empedradas y casonas de piedra que narran la génesis de Portugal —cuna indiscutible de la nación." },
                        { type: 'p', text: "Ambas ciudades pueden visitarse en una jornada con un ritmo activo. Para quienes aprecian la tranquilidad, dedicar tiempo pausado permite saborear a fondo el patrimonio y la gastronomía local." },
                        { type: 'p', text: "Braga entusiasma a los apasionados de la arquitectura sacra; Guimarães enamora a quienes buscan la magia de las villas medievales." },
                        { type: 'p', text: "Dos ciudades, dos perspectivas inolvidables sobre el origen del Norte de Portugal." },
                    ]
                },
                {
                    slug: "norte-de-portugal-lugares-alem-do-porto",
                    title: "Norte de Portugal: Lugares Para Conocer Más Allá de Oporto",
                    subtitle: "Una región de paisajes, historia viva, vinos y cultura",
                    excerpt: "El Norte de Portugal es un territorio mucho más vasto y diverso que solo Oporto y el Duero.",
                    date: "12 de Septiembre de 2026",
                    category: "Norte de Portugal",
                    image: "/images/blog/ponte-de-lima-minho.webp",
                    readTime: "5 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El Norte de Portugal es un territorio mucho más vasto y diverso que solo Oporto y el Duero." },
                        { type: 'p', text: "Al norte y al este se abren horizontes sorprendentes. Guimarães preserva el encanto medieval; Braga deslumbra con su monumentalidad; Ponte de Lima exhibe la nobleza del Minho y el prestigioso Vinho Verde." },
                        { type: 'p', text: "Hacia el litoral norte, Viana do Castelo une mar, monte y tradiciones marineras. En el interior, el Parque Nacional de Peneda-Gerês regala cumbres graníticas, cascadas y aldeas históricas." },
                        { type: 'p', text: "Destinos como Amarante y Arouca invitan a descubrir una faceta plácida y de pura naturaleza." },
                        { type: 'p', text: "Esta variedad es el gran valor del Norte: en una misma estancia puede pasar de una ciudad medieval a una bodega de diseño, o de un santuario de montaña a la brisa del Atlántico." },
                        { type: 'p', text: "Descubrir los alrededores de Oporto significa sumergirse en sabores genuinos y paisajes sin masificación." },
                        { type: 'p', text: "Viva el Norte de Portugal a través de experiencias privadas exclusivas con NORTHÉ." },
                    ]
                },
                {
                    slug: "parque-nacional-peneda-geres-a-partir-do-porto",
                    title: "Parque Nacional de Peneda-Gerês desde Oporto",
                    subtitle: "Naturaleza indómita, montañas y aldeas tradicionales",
                    excerpt: "Para quienes desean descubrir la naturaleza más pura de Portugal, Peneda-Gerês ofrece una vivencia totalmente opuesta al ambiente urbano de Oporto.",
                    date: "10 de Septiembre de 2026",
                    category: "Naturaleza y Parques",
                    image: "/images/blog/peneda-geres-lagoa-cascata.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Para quienes desean descubrir la naturaleza más pura de Portugal, Peneda-Gerês ofrece una vivencia totalmente opuesta al ambiente urbano de Oporto." },
                        { type: 'p', text: "Montañas escarpadas, ríos cristalinos, cascadas, robledales y aldeas de pastores componen un paisaje cautivador en cualquier época del año. Aldeas como Soajo y Lindoso conservan sus singulares hórreos (espigueiros) de piedra." },
                        { type: 'p', text: "Gerês es el destino predilecto para caminatas panorámicas, fotografía de naturaleza y desconexión absoluta. En verano, sus pozas de aguas esmeralda ofrecen un baño inolvidable." },
                        { type: 'p', text: "Por ser un parque extenso con accesos singulares, recorrer Gerês con un vehículo privado ejecutivo y un itinerario planificado marca la diferencia en confort y seguridad." },
                        { type: 'p', text: "Desde Oporto, una excursión de un día permite admirar sus mejores escenarios al ritmo exclusivo de su grupo." },
                        { type: 'p', text: "Gerês es la elección perfecta para cambiar el bullicio urbano por el silencio y la grandiosidad de la sierra." },
                        { type: 'p', text: "Conozca el lado más auténtico y natural del Norte con NORTHÉ." },
                    ]
                },
                {
                    slug: "douro-ou-vinho-verde",
                    title: "¿Duero o Vinho Verde?",
                    subtitle: "Dos experiencias vinícolas en el Norte de Portugal",
                    excerpt: "El Duero y el Vinho Verde representan las dos denominaciones vinícolas más prestigiosas del Norte de Portugal, con personalidades fascinantemente distintas.",
                    date: "8 de Septiembre de 2026",
                    category: "Vinos de Portugal",
                    image: "/images/blog/douro-ou-vinho-verde-amarante.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El Duero y el Vinho Verde representan las dos denominaciones vinícolas más prestigiosas del Norte de Portugal, con personalidades fascinantemente distintas." },
                        { type: 'p', text: "El Duero cautiva por sus laderas pronunciadas de pizarra talladas a mano sobre el río, cuna de tintos de gran estructura y de los míticos vinos de Oporto." },
                        { type: 'p', text: "La región del Vinho Verde, extendida por el frondoso Minho, muestra un paisaje verdejante de solares hidalgos, viñas en emparrado y villas señoriales como Ponte de Lima, produciendo blancos aromáticos, minerales y frescos como el Alvarinho." },
                        { type: 'p', text: "La diferencia radica en la copa y en el paisaje: el Duero ofrece un cañón monumental; el Minho despliega una elegancia bucólica y aristocrática." },
                        { type: 'p', text: "Para los amantes del vino, elegir entre ambos depende de la atmósfera buscada —o del placer de disfrutar de los dos." },
                        { type: 'p', text: "El Norte de Portugal brinda este privilegio: dos culturas vitivinícolas de primer orden a corta distancia de Oporto." },
                        { type: 'p', text: "Descubra los aromas del Norte con las rutas privadas exclusivas de NORTHÉ." },
                    ]
                },
                {
                    slug: "experiencias-privadas-a-partir-do-porto",
                    title: "Experiencias Privadas desde Oporto",
                    subtitle: "Conocer Portugal a su propio ritmo",
                    excerpt: "No todo viaje tiene que ajustarse a un itinerario rígido ni a los horarios de un autobús turístico.",
                    date: "5 de Septiembre de 2026",
                    category: "Experiencias Privadas",
                    image: "/images/blog/experiencias-privadas-douro-terrace.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "No todo viaje tiene que ajustarse a un itinerario rígido ni a los horarios de un autobús turístico." },
                        { type: 'p', text: "Una experiencia privada permite amoldar el día a lo que más disfruta su grupo: dedicar más tiempo a una cata selecta, disfrutar de un almuerzo sin prisas con vistas al río o detenerse en un mirador imprevisto." },
                        { type: 'p', text: "Desde Oporto las opciones son infinitas: del vino y la gastronomía del Duero a los solares del Minho, las ciudades históricas de Braga y Guimarães o las cascadas del Gerês." },
                        { type: 'p', text: "Para parejas, familias o pequeños grupos, viajar en privado significa confort total y no compartir vehículo con desconocidos." },
                        { type: 'p', text: "Más que acumular visitas aceleradas, una experiencia privada le permite elegir cómo desea vivir Portugal." },
                        { type: 'p', text: "Esa libertad y flexibilidad convierten un paseo en un recuerdo imborrable." },
                        { type: 'p', text: "En NORTHÉ diseñamos experiencias exclusivas desde Oporto con vehículos ejecutivos, guía experto y la máxima atención al detalle." },
                        { type: 'p', text: "Explore la colección de experiencias privadas de NORTHÉ." },
                    ]
                },
                {
                    slug: "aveiro-e-coimbra-a-partir-do-porto",
                    title: "Aveiro y Coímbra desde Oporto",
                    subtitle: "Canales de la Ría, Costa Nova y la Universidad Más Antigua de Portugal",
                    excerpt: "Un recorrido exclusivo que une la belleza acuática de la Ría de Aveiro, las casas de rayas de Costa Nova y la monumental historia académica de Coímbra.",
                    date: "24 de Septiembre de 2026",
                    category: "Cultura y Tradición",
                    image: "/images/tours/coimbra-aveiro/coimbra-aveiro-private-tour-1.webp",
                    readTime: "5 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Pocas excursiones privadas desde Oporto combinan un contraste tan inspirador entre el encanto marinero y la grandeza histórica como la ruta de Aveiro y Coímbra." },
                        { type: 'p', text: "En Aveiro, conocida como la 'Venecia Portuguesa', los canales de la ría marcan el pulso de la ciudad. Navegar en un barco moliceiro tradicional permite deslizarse bajo puentes históricos admirando los mejores edificios Art Nouveau de Portugal." },
                        { type: 'p', text: "A pocos minutos se encuentra Costa Nova, famosa por sus 'palheiros': pintorescas casas de madera decoradas con llamativas franjas de colores junto al mar. Es también el rincón ideal para degustar los auténticos ovos moles conventuales." },
                        { type: 'p', text: "Hacia el sur, la noble ciudad de Coímbra se eleva sobre el río Mondego. Cuna de seis reyes y sede de la universidad más antigua del país (fundada en 1290 y declarada Patrimonio UNESCO), su campus histórico custodia la Biblioteca Joanina, un santuario barroco dorado con miles de obras singulares custodiadas por murciélagos centinelas." },
                        { type: 'p', text: "Una vivencia que equilibra el romanticismo de la costa y el esplendor intelectual con total confort y privacidad ejecutiva." },
                        { type: 'p', text: "Descubra el tour privado de Aveiro y Coímbra con NORTHÉ." }
                    ]
                },
                {
                    slug: "nazare-obidos-e-sao-martinho-do-porto",
                    title: "Nazaré y Óbidos: Olas Gigantes y Murallas Medievales",
                    subtitle: "La leyenda de la Costa de Plata entre el océano bravo y pueblos amurallados",
                    excerpt: "Del promontorio épico de Nazaré donde rompen las mayores olas del planeta al laberinto de piedra medieval de la villa real de Óbidos.",
                    date: "26 de Septiembre de 2026",
                    category: "Costa de Plata",
                    image: "/images/tours/nazare-sao-martinho/1.webp",
                    readTime: "5 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "La Costa de Plata portuguesa es un escenario donde la bravura del Atlántico se une a leyendas milenarias de caballeros, reyes y pescadores." },
                        { type: 'p', text: "En Nazaré, desde lo alto del Sítio de Nazaré, se contempla un espectáculo sobrecogedor. Junto al Forte de São Miguel Arcanjo y su faro rojo, la fuerza del Cañón de Nazaré —una fosa submarina de 5.000 metros de profundidad— crea las olas más gigantescas jamás surfeadas en el mundo." },
                        { type: 'p', text: "La villa pesquera conserva además una identidad única: las mujeres con sus siete sayas tradicionales, el pescado secándose al sol en la arena y las marisquerías de producto fresco inigualable." },
                        { type: 'p', text: "Siguiendo la costa, la perfecta bahía en forma de concha de São Martinho do Porto ofrece un remanso de serenidad con aguas cristalinas y tranquilas." },
                        { type: 'p', text: "El viaje concluye con la entrada a Óbidos, joya medieval fortificada regalada durante siglos por los reyes de Portugal a sus reinas. Recorrer sus murallas almenadas y brindar con ginjinha en copa de chocolate artesanal es una experiencia inolvidable." },
                        { type: 'p', text: "Viva la Costa de Plata en privado con el confort exclusivo de NORTHÉ." }
                    ]
                },
                {
                    slug: "fatima-batalha-e-tomar-monumentos-unesco",
                    title: "Fátima, Batalha y Tomar: Ruta Templaria y Patrimonio UNESCO",
                    subtitle: "Fervor sereno, gótico florido y los enigmas de la Orden del Temple",
                    excerpt: "Una inmersión en la memoria monumental de Portugal: la paz de Fátima, la piedra labrada de Batalha y el castillo templario de Tomar.",
                    date: "28 de Septiembre de 2026",
                    category: "Historia y UNESCO",
                    image: "/images/tours/fatima-batalha-tomar/1.webp",
                    readTime: "5 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El triángulo histórico entre Fátima, Batalha y Tomar reúne algunos de los monumentos más emblemáticos y sobrecogedores de Portugal." },
                        { type: 'p', text: "La jornada comienza en el Santuario de Nuestra Señora del Rosario de Fátima, un enclave de honda serenidad espiritual con su explanada imponente y la íntima Capilla de las Apariciones." },
                        { type: 'p', text: "A continuación, el Monasterio de Batalha deslumbra como obra maestra del gótico y manuelino luso. Mandado construir por el rey Juan I tras la decisiva Batalla de Aljubarrota en 1385, cautiva por sus Capillas Imperfectas, un panteón octogonal a cielo abierto esculpido como un encaje en piedra." },
                        { type: 'p', text: "En Tomar, el Convento de Cristo y Castillo Templario revelan el cuartel general de los Caballeros Templarios en Portugal. La Charola románico-gótica y la famosa Ventana Manuelina son testimonios grandiosos de la epopeya de las navegaciones marítimas." },
                        { type: 'p', text: "Un recorrido imprescindible para los amantes de la historia viva y el arte universal." },
                        { type: 'p', text: "Reserve su expedición privada a Fátima, Batalha y Tomar con NORTHÉ." }
                    ]
                },
                {
                    slug: "ponte-de-lima-e-barcelos-minho-vinho-verde",
                    title: "Ponte de Lima y Barcelos: Nobleza Medieval y Ruta del Vinho Verde",
                    subtitle: "La villa más antigua de Portugal, la leyenda del Gallo y los señoríos del Minho",
                    excerpt: "Descubra el Minho más aristocrático: puentes romanos milenarios, casonas hidalgas, el mítico Gallo de Barcelos y las mejores bodegas de Vinho Verde.",
                    date: "30 de Septiembre de 2026",
                    category: "Minho y Vinho Verde",
                    image: "/images/tours/ponte-de-lima-douro/ponte-de-lima-historic-wine-centre.webp",
                    readTime: "4 min de lectura",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "El Minho es el corazón más verde, auténtico y noble del Norte de Portugal, tierra de manantiales cristalinos y viñedos en emparrado que dan vida al apreciado Vinho Verde." },
                        { type: 'p', text: "Ponte de Lima ostenta con orgullo el título de villa más antigua de Portugal (1125). Su majestuoso puente romano sobre el río Lima recuerda la leyenda del Río Lethes, donde las legiones romanas temían olvidar su propia patria." },
                        { type: 'p', text: "Pasear por Ponte de Lima permite contemplar casas blasonadas, plácidos jardines y visitar el Centro de Interpretación del Vinho Verde (CIPV), saboreando la gastronomía regional más auténtica." },
                        { type: 'p', text: "En Barcelos, la tradición artesana florece en la cerámica y en la célebre Leyenda del Gallo, símbolo imperecedero de la identidad portuguesa en todo el mundo." },
                        { type: 'p', text: "Con catas privadas de variedades selectas como Loureiro y Alvarinho en quintas señoriales, este tour representa la máxima expresión de la elegancia minhota." },
                        { type: 'p', text: "Viva la cultura y los vinos del Minho con NORTHÉ." }
                    ]
                }
            ],
        },
        contact: {
            title: '¿Creamos su experiencia en Portugal?',
            desc: 'Cuéntenos qué le gustaría vivir. Diseñamos una experiencia privada a la medida de su grupo.',
            ctaBook: 'Reservar Experiencia', ctaWhatsapp: 'Hablar por WhatsApp',
            emailLabel: 'Correo electrónico', email: EMAIL,
            phoneLabel: 'Teléfono', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Experiencias a Medida',
            title: '¿Busca algo diferente?',
            subtitle: 'Creamos experiencias privadas personalizadas.',
            desc: 'Diseñamos experiencias privadas personalizadas de acuerdo con sus intereses, ritmo y ocasión.',
            collection: 'North Private Collection',
            collectionDesc: 'Cenas privadas, quintas históricas y momentos inolvidables.',
            destinations: ['Porto', 'Douro Valley', 'Alcobaça', 'Amarante', 'Arouca', 'Aveiro', 'Batalha', 'Barcelos', 'Braga', 'Coimbra', 'Fátima', 'Gerês', 'Guimarães', 'Lamego', 'Nazaré', 'Óbidos', 'Ponte de Lima', 'Santa Maria da Feira', 'São Martinho do Porto', 'Tomar'],
            cta: 'Crear Mi Experiencia',
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
                { title: '1. Identificación del Responsable del Tratamiento', content: 'La entidad responsable del tratamiento de datos es "NORTHÉ" (NIPC: 518 190 145), con sede en Portugal. Nos comprometemos con la protección de datos personales, cumpliendo estrictamente con la normativa RGPD Europea.' },
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
                { title: '1. Alcance y Objeto', content: 'Estos Términos y Condiciones se aplican a todos los servicios prestados por NORTHÉ.' },
                { title: '2. Reservas y Pagos', content: 'Las reservas se hacen efectivas tras la confirmación por escrito. Los pagos se realizan según el método acordado.' },
                { title: '3. Política de Cancelación', content: 'Cancelación gratuita hasta 48 horas antes del tour. Después, se aplicará la tarifa completa.' },
                { title: '4. Responsabilidad', content: 'NORTHÉ cuenta con todos los seguros obligatorios por ley. No nos responsabilizamos por la pérdida de bienes personales.' },
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
            title1: 'Expériences Privées au Départ de Porto',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Expériences privées dans le Douro, Porto et le Nord du Portugal, avec transport exécutif et itinéraires soigneusement conçus pour votre groupe.',
            cta: 'Explorer les Expériences',
            ctaWhatsapp: 'Discuter sur WhatsApp',
            trustLine: "100% Privé · 1–8 Personnes · Transport Exécutif · Annulation Gratuite jusqu'à 48h",
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
                pricingNote: 'pour 2 personnes',
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
                    capacityLabel: 'Maximum : 4 personnes',
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
                    capacityLabel: 'Maximum : 4 personnes',
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
            badge: "À Propos de NORTHÉ",
            title: "Expériences privées, conçues pour découvrir le Portugal d’une manière plus personnelle.",
            paragraphs: [
                "NORTHÉ est née à Porto d’une idée simple : transformer chaque voyage en une expérience riche de sens. Nous créons des périples privés à travers la Vallée du Douro, Porto et le Nord du Portugal, alliant paysages, vins d’exception, gastronomie, culture et lieux rigoureusement sélectionnés.",
                "Chaque expérience est pensée pour votre groupe, avec confort, flexibilité et attention portée aux moindres détails — car découvrir une destination ne doit jamais ressembler à un itinéraire standard.",
            ],
            signature: "NORTHÉ",
            imageAlt: "Restaurant vinicole avec vue panoramique au coucher du soleil sur le fleuve Douro et Porto",
        },
        reviews: {
            badge: 'Avis',
            title: 'Ce Que Disent Nos Clients',
            subtitle: 'Chaque avis est une histoire réelle vécue par nos voyageurs.',
            rating: '5.0', totalReviews: '5.0 ★★★★★',
            googleScore: '5.0',
            googleBadge: 'Google Reviews',
            googleVerified: 'Noté 5.0 Étoiles sur Google',
            googleHighlight: '100% d\'avis 5 étoiles vérifiés',
            viewOnGoogle: 'Voir tous les avis sur Google Maps',
            writeOnGoogle: 'Donner votre avis sur Google',
            bottomTitle: 'Avez-vous voyagé récemment avec NORTHÉ ?',
            bottomSubtitle: 'Votre avis est inestimable. Découvrez les retours d\'autres voyageurs ou partagez votre propre expérience sur notre fiche officielle Google.',
            verifiedTag: 'Avis Vérifié sur Google',
            items: [
                { text: 'Une expérience qui transcende le tourisme. Nous nous sommes sentis comme des invités d\'honneur dans l\'une des plus belles régions du monde. Le guide était exceptionnel et l\'attention portée aux détails impressionnante.', author: 'Sofia Albuquerque', location: 'Lisbonne, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'L\'attention portée aux détails était impeccable. De la balade en bateau privé aux dégustations de vins exclusives, tout était parfait. Hautement recommandé pour tous ceux qui visitent Porto.', author: 'James Sterling', location: 'Londres, Royaume-Uni', flag: '🇬🇧', stars: 5 },
                { text: 'Une journée magique dans la vallée du Douro. Le guide était exceptionnel, les vins superbes et le déjeuner absolument délicieux. Une expérience incontournable !', author: 'Marie Dubois', location: 'Paris, France', flag: '🇫🇷', stars: 5 },
                { text: 'Meilleure expérience jamais vécue dans le Douro ! La balade en bateau au coucher du soleil était inoubliable. Je recommande vivement NORTHÉ.', author: 'Carlos Mendes', location: 'São Paulo, Brésil', flag: '🇧🇷', stars: 5 },
                { text: 'Une journée parfaite dans la vallée du Douro ! La dégustation de vins était de premier ordre et le paysage à couper le souffle. Nous reviendrons sans hésiter.', author: 'Hannah Müller', location: 'Munich, Allemagne', flag: '🇩🇪', stars: 5 },
                { text: 'Nous avons fêté notre anniversaire avec NORTHÉ et ce fut le point fort de notre voyage. L\'expérience privée semblait vraiment exclusive. Ça en valait chaque centime.', author: 'Michael & Sarah Chen', location: 'New York, États-Unis', flag: '🇺🇸', stars: 5 },
                { text: 'Le guide savait tout sur les vins et l\'histoire de la région. Un voyage inoubliable que je recommande à tous les amateurs de vin.', author: 'Alessandro Rossi', location: 'Milan, Italie', flag: '🇮🇹', stars: 5 },
                { text: 'Le transfert depuis l\'aéroport était impeccable, et le tour le lendemain a dépassé toutes nos attentes. Un service de première classe tout au long.', author: 'Lucía Fernández', location: 'Madrid, Espagne', flag: '🇪🇸', stars: 5 },
                { text: 'Expérience incroyable ! Le bateau sur le Douro au coucher du soleil était magique. Un service professionnel du début à la fin.', author: 'Daan van der Berg', location: 'Amsterdam, Pays-Bas', flag: '🇳🇱', stars: 5 },
            ],
        },

                faq: {
            badge: "FAQ",
            title: "Tout ce que vous devez savoir",
            subtitle: "Des réponses claires et transparentes à toutes vos questions avant de réserver votre expérience privée.",
            searchPlaceholder: "Rechercher une question (ex. bateau, prise en charge, enfants, annulation)...",
            noResults: "Aucune question trouvée pour cette recherche.",
            clearSearch: "Effacer la recherche",
            whatsappTitle: "Vous avez encore des questions sur votre expérience ?",
            whatsappSubtitle: "Échangez directement avec NORTHÉ. Nous nous ferons un plaisir de concevoir l’itinéraire parfait pour votre groupe.",
            whatsappBtn: "Discuter sur WhatsApp",
            categories: [
                { id: "all", label: "Toutes les Questions" },
                { id: "reservas", label: "Réservations et Tarifs" },
                { id: "transporte", label: "Prise en Charge & Transferts" },
                { id: "douro", label: "Vallée du Douro" },
                { id: "barco", label: "Croisières en Bateau" },
                { id: "familias", label: "Familles & Accessibilité" },
                { id: "gastronomia", label: "Gastronomie & Régimes" },
                { id: "cancelamentos", label: "Annulations & Flexibilité" },
                { id: "especiais", label: "Occasions Spéciales" },
            ],
            items: [
                {
                    category: "reservas",
                    q: "Comment puis-je réserver une expérience privée avec NORTHÉ ?",
                    a: "Vous pouvez demander votre expérience directement sur notre site, via WhatsApp ou par nos canaux de contact. Indiquez-nous la date souhaitée, le nombre de personnes et l’expérience choisie. Notre équipe confirmera la disponibilité et chaque détail avant la réservation."
                },
                {
                    category: "reservas",
                    q: "Combien de temps à l’avance dois-je réserver ?",
                    a: "Nous recommandons de réserver bien à l'avance, en particulier pour les expériences dans le Douro, les croisières privées, les visites de domaines viticoles et les périodes de forte affluence. Les réservations de dernière minute sont possibles selon disponibilité."
                },
                {
                    category: "reservas",
                    q: "Les circuits de NORTHÉ sont-ils 100 % privés ?",
                    a: "Oui. NORTHÉ est exclusivement spécialisée dans les expériences privées. Votre groupe voyage et vit l'expérience en toute exclusivité, sans jamais partager le véhicule avec d'autres clients."
                },
                {
                    category: "reservas",
                    q: "Comment fonctionne le tarif d’une expérience privée ?",
                    a: "Le tarif dépend de l'expérience choisie, du nombre de participants, de l'itinéraire et des services haut de gamme inclus. Chaque expérience détaille ses conditions et son prix avant la réservation."
                },
                {
                    category: "reservas",
                    q: "Le prix affiché est-il par personne ou par groupe ?",
                    a: "Le montant est présenté par groupe privé, et non par personne. Les expériences NORTHÉ peuvent être réservées pour des groupes de 1 à 8 personnes, garantissant une exclusivité totale."
                },
                {
                    category: "reservas",
                    q: "Qu’est-ce qui est inclus dans le prix ? Y a-t-il des frais cachés ?",
                    a: "Chaque expérience précise clairement les prestations incluses. Si des services optionnels, entrées de monuments, déjeuners gastronomiques ou croisières ne sont pas inclus, ils seront indiqués en amont avec une transparence totale."
                },
                {
                    category: "reservas",
                    q: "Quels sont les modes de paiement acceptés ?",
                    a: "Les options de paiement sont communiquées lors de la réservation. Le règlement s'effectue via des canaux sécurisés (virement SEPA/SWIFT, cartes de crédit/débit, MB Way) avec confirmation des détails au préalable."
                },
                {
                    category: "reservas",
                    q: "Puis-je demander une expérience entièrement sur-mesure ?",
                    a: "Oui. La personnalisation sur-mesure est l'un des piliers de NORTHÉ. Nous adaptons le rythme, l'itinéraire et les étapes selon les souhaits de votre groupe, dans le respect de la faisabilité opérationnelle."
                },
                {
                    category: "transporte",
                    q: "Où s’effectuent la prise en charge (pick-up) et le retour ?",
                    a: "La prise en charge et le retour sont convenus à l’avance selon le lieu indiqué lors de la réservation. Pour les départs de Porto, nous organisons la prise en charge au point convenu."
                },
                {
                    category: "transporte",
                    q: "NORTHÉ propose-t-elle la prise en charge dans les hôtels à Porto ?",
                    a: "Nous prenons en charge votre groupe directement dans le hall de votre hôtel, appartement, Airbnb ou résidence à Porto et Vila Nova de Gaia, généralement entre 08h30 et 09h00 (ou selon l'horaire de votre choix). En fin de journée (~18h00 - 18h30), nous vous raccompagnons confortablement au même endroit ou à un restaurant de votre choix pour le dîner."
                },
                {
                    category: "transporte",
                    q: "Est-il possible d’organiser une prise en charge à l’aéroport de Porto ?",
                    a: "Oui. Ce service doit être demandé au moment de la réservation afin que nous puissions coordonner la logistique de vol et le planning du chauffeur."
                },
                {
                    category: "transporte",
                    q: "Puis-je demander une prise en charge en dehors de Porto ?",
                    a: "Une prise en charge en dehors de notre zone habituelle est possible selon le lieu, l'horaire et l'expérience choisie. Un supplément éventuel vous sera communiqué à l'avance."
                },
                {
                    category: "transporte",
                    q: "Le transport est-il exclusivement privé tout au long du tour ?",
                    a: "Oui. Toutes les expériences NORTHÉ se déroulent à bord d'un véhicule exécutif réservé exclusivement à votre groupe."
                },
                {
                    category: "douro",
                    q: "Quelle est la meilleure façon de visiter le Douro depuis Porto ?",
                    a: "Un circuit privé offre une liberté incomparable pour explorer la Vallée du Douro sans contrainte horaire, en adaptant le tempo à votre groupe. Depuis Porto, vous profitez de panoramas grandioses, de dégustations dans des quintas réputées et d'une croisière fluviale."
                },
                {
                    category: "douro",
                    q: "Combien de temps dure une journée privée dans le Douro ?",
                    a: "La durée dépend du circuit retenu. Les expériences NORTHÉ sont généralement conçues pour une journée complète (environ 8 à 9 heures), avec le détail des horaires indiqué sur la page de chaque tour."
                },
                {
                    category: "douro",
                    q: "Que puis-je visiter lors d’une expérience privée dans le Douro ?",
                    a: "Selon l'itinéraire, vous découvrirez des domaines viticoles historiques (quintas), des coteaux en terrasses, des villages typiques comme Pinhão, des belvédères panoramiques et toute la culture œnogastronomique locale."
                },
                {
                    category: "douro",
                    q: "Les dégustations de vins sont-elles incluses ?",
                    a: "Cela dépend de l'expérience choisie. Lorsque les dégustations font partie du programme, cela est explicitement mentionné. Nous pouvons également organiser des dégustations sur-mesure de grands millésimes."
                },
                {
                    category: "douro",
                    q: "Quels types de vins pourrai-je déguster dans le Douro ?",
                    a: "Selon votre itinéraire, vous apprécierez la diversité du terroir : des blancs DOC Douro vifs et minéraux, des rouges élégants et complexes, et les célèbres Vins de Porto (Tawny, Ruby, Colheitas)."
                },
                {
                    category: "douro",
                    q: "Puis-je demander la visite d’une quinta spécifique dans le Douro ?",
                    a: "Nous pouvons étudier votre demande et vérifier les disponibilités du domaine à la date souhaitée. Certaines propriétés de renom nécessitent une réservation préalable selon leur calendrier de réception."
                },
                {
                    category: "douro",
                    q: "Puis-je personnaliser l’itinéraire de mon tour dans le Douro ?",
                    a: "Oui. Les excursions privées offrent une flexibilité totale. Nous échangeons avec vous sur vos centres d'intérêt afin de concevoir un itinéraire sur-mesure, dans le respect des horaires d'ouverture des domaines."
                },
                {
                    category: "barco",
                    q: "Les expériences NORTHÉ incluent-elles une croisière en bateau sur le Douro ?",
                    a: "Plusieurs de nos expériences intègrent une navigation sur le Douro. La formule, la durée et le type de bateau sont précisés sur la page de chaque circuit."
                },
                {
                    category: "barco",
                    q: "La croisière en bateau est-elle privée ou partagée ?",
                    a: "Cela dépend du tour choisi. NORTHÉ propose différentes formules, dont des bateaux rabelos en affrètement 100 % privé lorsqu'indiqué au programme."
                },
                {
                    category: "barco",
                    q: "Quelle est la durée de la croisière en bateau ?",
                    a: "La durée varie selon l'expérience réservée (habituellement de 1 à 2 heures) et est précisée dans la fiche descriptive du tour."
                },
                {
                    category: "barco",
                    q: "Que se passe-t-il si la météo empêche la sortie en bateau ?",
                    a: "Votre sécurité et votre confort demeurent notre priorité absolue. Si des conditions maritimes ou météorologiques empêchent la navigation, des alternatives culturelles ou œnologiques raffinées vous seront proposées."
                },
                {
                    category: "familias",
                    q: "Les circuits conviennent-ils aux familles avec enfants ou bébés ?",
                    a: "Nombre de nos expériences conviennent parfaitement aux familles. L'adaptation dépend de l'itinéraire et des étapes. Nous vous conseillons de nous préciser l'âge des enfants afin de vous orienter vers la meilleure formule."
                },
                {
                    category: "familias",
                    q: "Des sièges bébé ou rehausseurs sont-ils mis à disposition ?",
                    a: "Oui. Des sièges auto et rehausseurs homologués sont mis gracieusement à votre disposition sur simple demande lors de la réservation."
                },
                {
                    category: "familias",
                    q: "Les expériences sont-elles adaptées aux personnes à mobilité réduite ?",
                    a: "L'accessibilité varie selon les domaines viticoles, le relief, les embarcations et les monuments historiques. Si un membre de votre groupe a des besoins spécifiques, informez-nous pour adapter le parcours."
                },
                {
                    category: "gastronomia",
                    q: "Les repas peuvent-ils être adaptés à des régimes alimentaires particuliers ?",
                    a: "Dans toute la mesure du possible, oui. Vos préférences et restrictions doivent être communiquées à l'avance afin d'organiser des menus adaptés auprès de nos chefs et restaurants partenaires."
                },
                {
                    category: "gastronomia",
                    q: "Des options végétariennes, véganes ou sans gluten sont-elles proposées ?",
                    a: "Des menus végétariens, véganes ou sans gluten peuvent être réservés auprès des domaines et tables sélectionnés, sur simple notification lors de votre réservation."
                },
                {
                    category: "gastronomia",
                    q: "Faut-il signaler les allergies ou intolérances à l’avance ?",
                    a: "Oui. Une information préalable nous permet de coordonner un accueil culinaire irréprochable auprès de nos partenaires."
                },
                {
                    category: "cancelamentos",
                    q: "Quelle est votre politique d’annulation et de modification de date ?",
                    a: "Nous offrons l'annulation gratuite et le remboursement intégral pour toute demande effectuée jusqu'à 48 heures avant le départ. En cas d'imprévu ou de changement de vol, nous déplaçons la date sans frais supplémentaires, selon nos disponibilités."
                },
                {
                    category: "cancelamentos",
                    q: "Puis-je modifier la date de mon expérience après avoir réservé ?",
                    a: "Les demandes de changement de date sont traitées selon la disponibilité de nos plannings et de nos partenaires. Plus vous nous prévenez tôt, plus il est aisé de vous satisfaire."
                },
                {
                    category: "cancelamentos",
                    q: "Que se passe-t-il si la météo perturbe le déroulement de la journée ?",
                    a: "En cas d'intempéries compromettant les activités extérieures, nous ajustons le parcours avec des visites de palais, dégustations abritées et moments d'exception en intérieur."
                },
                {
                    category: "cancelamentos",
                    q: "NORTHÉ peut-elle modifier l’itinéraire pendant l’excursion ?",
                    a: "Dans des situations exceptionnelles (météo, circulation, impératifs de domaines), des ajustements peuvent être apportés pour garantir votre sécurité tout en préservant le prestige de l'expérience."
                },
                {
                    category: "especiais",
                    q: "Puis-je organiser une expérience pour une occasion spéciale ?",
                    a: "Oui. Nous concevons avec enthousiasme des expériences privées d'exception pour célébrer vos événements marquants."
                },
                {
                    category: "especiais",
                    q: "NORTHÉ organise-t-elle des anniversaires ou demandes en mariage ?",
                    a: "Oui. Nous organisons régulièrement des anniversaires, lunes de miel et demandes en mariage dans des cadres féeriques. Tous les détails sont préparés en toute discrétion au préalable."
                },
                {
                    category: "especiais",
                    q: "Puis-je ajouter un pique-nique privé, un photographe ou d’autres prestations ?",
                    a: "Certaines expériences peuvent être enrichies d'un pique-nique dans les vignes, d'un photographe professionnel ou d'une croisière privatisée. La faisabilité et le devis sont confirmés sur-mesure."
                },
            ],
        },
                blog: {
            badge: "Journal & Guides",
            title: "Chronique du Douro & du Nord",
            subtitle: "Guides rédigés avec passion, itinéraires exclusifs et secrets du Nord du Portugal.",
            readMore: "Lire l’article",
            bookCta: "Réserver cette expérience",
            items: [
                {
                    slug: "passeio-de-barco-privado-no-porto-douro",
                    title: "Croisière Privée en Bateau à Porto : Guide Complet, Tarif et Vues sur le Douro",
                    subtitle: "Découvrez Porto et Vila Nova de Gaia depuis les eaux du fleuve Douro en toute exclusivité",
                    excerpt: "Naviguer sur le fleuve Douro à bord d'un bateau 100 % privé est l'une des façons les plus mémorables d'admirer la Ribeira de Porto, les caves de Vila Nova de Gaia et le pont Dom-Luís I. Découvrez le tarif (150 € jusqu'à 6 personnes) et tous les détails.",
                    date: "21 Octobre 2026",
                    category: "Porto Experiences",
                    image: "/images/tours/porto-private-boat-tour/1.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "La Croisière Privée en Bateau à Porto de NORTHÉ (Licence Officielle RNAAT 284/2026) offre une expérience nautique 100 % exclusive sur le fleuve Douro au tarif fixe de 150 € par départ pour 1 à 6 personnes, d'une durée d'1 heure avec skipper professionnel diplômé." },
                        { type: 'h3', text: "Pourquoi choisir une croisière privée à Porto plutôt qu'un bateau touristique partagé ?" },
                        { type: 'p', text: "Contrairement aux croisières collectives très fréquentées, une embarcation privée vous permet de savourer le fleuve Douro uniquement en couple, en famille ou entre amis, avec une vue imprenable sur la Ribeira et Vila Nova de Gaia." },
                        { type: 'blockquote', text: "Découvrir Porto depuis le Douro révèle l'âme véritable de la ville : les façades historiques de la Ribeira, les caves séculaires de Gaia et la majesté du pont Dom-Luís I." },
                        { type: 'image', url: "/images/tours/porto-private-boat-tour/3.webp", text: "Confort et exclusivité à bord du bateau privé NORTHÉ sur le fleuve Douro (jusqu'à 6 passagers)." },
                        { type: 'h3', text: "Ce qui est inclus et informations importantes" },
                        { type: 'p', text: "L'expérience dure environ 1 heure pour un maximum de 6 passagers et comprend le bateau privé exclusif, le skipper diplômé, le carburant, l'équipement de sécurité et les assurances obligatoires. Prévoyez une veste coupe-vent, des lunettes de soleil et arrivez 10 à 15 minutes avant l'embarquement." },
                    ]
                },
                {
                    slug: "8-melhores-passeios-a-partir-do-porto",
                    title: "8 Meilleures Excursions au Départ de Porto",
                    subtitle: "Découvrez le Nord du Portugal au-delà de la ville",
                    excerpt: "Porto est un point de départ idéal pour explorer les trésors du Portugal. En quelques heures, vous quittez le centre historique pour découvrir vignobles en terrasses, cités médiévales, palais et côtes sauvages.",
                    date: "18 Septembre 2026",
                    category: "Guide de Voyage",
                    image: "/images/blog/8-melhores-passeios-porto.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Porto est un point de départ idéal pour explorer les trésors du Portugal. En quelques heures, vous quittez le centre historique pour découvrir vignobles en terrasses, cités médiévales, palais et côtes sauvages." },
                        { type: 'p', text: "Parmi les échappées les plus prisées figurent la Vallée du Douro, Braga, Guimarães et Aveiro. Les amoureux de nature sauvage privilégieront le Parc National de Peneda-Gerês, tandis qu'Arouca séduit par ses ponts suspendus. Amarante et Ponte de Lima offrent quant à elles une quiétude bucolique remarquable." },
                        { type: 'p', text: "Votre choix s'adapte à vos envies : grands crus dans le Douro, histoire médiévale à Guimarães, splendeur baroque à Braga, canaux à Aveiro ou grands espaces au Gerês." },
                        { type: 'p', text: "Bien plus qu'une simple excursion d'une journée, parcourir le Nord révèle une région où histoire, gastronomie et paysages d'exception sont intimement liés." },
                        { type: 'p', text: "Envie d'explorer le Nord du Portugal depuis Porto ? Découvrez les expériences privées de NORTHÉ." },
                    ]
                },
                {
                    slug: "vale-do-douro-a-partir-do-porto",
                    title: "La Vallée du Douro au Départ de Porto",
                    subtitle: "Grands crus, panoramas grandioses et terroir légendaire",
                    excerpt: "La Vallée du Douro constitue l'une des expériences les plus mémorables d'un séjour à Porto. Mondialement renommée pour ses coteaux en terrasses et ses traditions viticoles séculaires.",
                    date: "17 Septembre 2026",
                    category: "Vallée du Douro",
                    image: "/images/blog/douro-valley-vineyards.webp",
                    readTime: "5 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "La Vallée du Douro constitue l'une des expériences les plus mémorables d'un séjour à Porto. Mondialement renommée pour ses coteaux en terrasses et ses traditions viticoles séculaires liées au célèbre Vin de Porto." },
                        { type: 'p', text: "Pinhão et Peso da Régua sont les étapes emblématiques de la vallée. Le long des routes panoramiques, domaines viticoles (quintas), belvédères et méandres du fleuve dévoilent des perspectives spectaculaires." },
                        { type: 'p', text: "Une journée de visite allie visite privée de domaine, dégustations commentées, gastronomie régionale raffinée et croisière fluviale paisible. L'itinéraire méritant une organisation minutieuse, un voyage privatisé assure sérénité et confort." },
                        { type: 'p', text: "Le Douro se métamorphose au fil des saisons : le printemps pare les collines d'un vert tendre, tandis que septembre et octobre embrasent les vignobles de nuances pourpres et dorées pendant les vendanges." },
                        { type: 'p', text: "Pour qui souhaite saisir l'âme du terroir portugais, le Douro est une immersion d'une rare intensité." },
                        { type: 'p', text: "Explorez le Douro lors d'une expérience privée d'exception avec NORTHÉ." },
                    ]
                },
                {
                    slug: "o-que-fazer-no-porto",
                    title: "Que Faire à Porto",
                    subtitle: "Une cité noble à savourer sans précipitation",
                    excerpt: "Porto concentre patrimoine séculaire, architecture admirable, gastronomie de renom et traditions vinicoles dans un cœur historique d'une remarquable élégance.",
                    date: "16 Septembre 2026",
                    category: "Porto & Culture",
                    image: "/images/blog/o-que-fazer-porto.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Porto concentre patrimoine séculaire, architecture admirable, gastronomie de renom et traditions vinicoles dans un cœur historique d'une remarquable élégance." },
                        { type: 'p', text: "Classé au Patrimoine Mondial de l'UNESCO, le centre rassemble des joyaux tels que la Ribeira, la Cathédrale Sé, la gare de São Bento ornée d'azulejos et la Tour des Clérigos. Sur l'autre rive, Vila Nova de Gaia abrite les prestigieuses caves de Porto et une vue mythique sur la ville." },
                        { type: 'p', text: "Mais Porto se révèle pleinement en s'écartant des sentiers battus : marchés gourmands, ateliers d'artisans, ruelles pittoresques et le quartier maritime de Foz do Douro offrent un visage authentique et vibrant." },
                        { type: 'p', text: "Pour les voyageurs disposant de plus de temps, tables d'auteur, galeries d'art et circuits architecturaux enrichissent la découverte." },
                        { type: 'p', text: "La meilleure manière de visiter la ville dépend de votre propre tempo : certains préfèrent les grands monuments, d'autres recherchent des adresses confidentielles." },
                        { type: 'p', text: "L'essentiel est de laisser place à la flânerie sans enfermer votre journée dans une simple liste de visites." },
                        { type: 'p', text: "Découvrez Porto d'une manière plus intime et sur-mesure avec NORTHÉ." },
                    ]
                },
                {
                    slug: "braga-e-guimaraes-a-partir-do-porto",
                    title: "Braga et Guimarães depuis Porto",
                    subtitle: "Deux joyaux historiques au cœur du Nord du Portugal",
                    excerpt: "Braga et Guimarães constituent les deux escapades culturelles indispensables pour comprendre l'histoire et l'âme du Nord portugais.",
                    date: "14 Septembre 2026",
                    category: "Histoire & Patrimoine",
                    image: "/images/blog/braga-guimaraes-norte.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Braga et Guimarães constituent les deux escapades culturelles indispensables pour comprendre l'histoire et l'âme du Nord portugais." },
                        { type: 'p', text: "Braga associe un centre ancien marqué par la ferveur et l'art baroque à des sites grandioses comme le Sanctuaire de Bom Jesus do Monte et son escalier monumental." },
                        { type: 'p', text: "Guimarães offre un charme médiéval préservé. Son centre classé par l'UNESCO conte la naissance du royaume — fièrement commémorée comme le berceau de la nation portugaise." },
                        { type: 'p', text: "Bien qu'il soit possible de parcourir les deux cités en une journée, un rythme mesuré permet de savourer pleinement l'architecture, les terrasses pavées et les douceurs conventuelles." },
                        { type: 'p', text: "Braga ravira les passionnés d'art religieux et de splendeurs baroques ; Guimarães séduira les amateurs d'atmosphère médiévale et de cours seigneuriales." },
                        { type: 'p', text: "Deux cités, deux regards saisissants sur l'épopée du Nord du Portugal." },
                    ]
                },
                {
                    slug: "norte-de-portugal-lugares-alem-do-porto",
                    title: "Nord du Portugal : Trésors à Découvrir au-delà de Porto",
                    subtitle: "Un territoire d'histoire, de paysages, de vignobles et d'authenticité",
                    excerpt: "Le Nord du Portugal s'étend bien au-delà de Porto et de la Vallée du Douro.",
                    date: "12 Septembre 2026",
                    category: "Nord du Portugal",
                    image: "/images/blog/ponte-de-lima-minho.webp",
                    readTime: "5 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Le Nord du Portugal s'étend bien au-delà de Porto et de la Vallée du Douro." },
                        { type: 'p', text: "Vers le nord et l'est s'ouvrent des contrées aux charmes contrastés. Guimarães protège l'héritage médiéval ; Braga resplendit de foi baroque ; Ponte de Lima perpétue l'élégance rurale du Minho et la finesse du Vinho Verde." },
                        { type: 'p', text: "Sur la façade atlantique, Viana do Castelo marie mer, fleuve et costumes traditionnels. Dans l'arrière-pays, le Parc National de Peneda-Gerês déploie crêtes granitiques et villages séculaires." },
                        { type: 'p', text: "Amarante et Arouca invitent à des haltes apaisantes au bord des rivières et sur des passerelles vertigineuses." },
                        { type: 'p', text: "Cette pluralité fait la grandeur du Nord : en un seul voyage, passez d'une cité princière à un vignoble d'exception, ou d'une sierra sauvage à l'océan Atlantique." },
                        { type: 'p', text: "S'évader de Porto permet de goûter à un terroir généreux et à des panoramas préservés des foules." },
                        { type: 'p', text: "Vivez le Nord du Portugal lors de circuits privés haut de gamme avec NORTHÉ." },
                    ]
                },
                {
                    slug: "parque-nacional-peneda-geres-a-partir-do-porto",
                    title: "Parc National de Peneda-Gerês depuis Porto",
                    subtitle: "Nature sauvage, sommets de granit et villages ancestraux",
                    excerpt: "Pour les voyageurs désireux de contempler la nature la plus sauvage du Portugal, Peneda-Gerês offre un dépaysement saisissant à quelques heures de Porto.",
                    date: "10 Septembre 2026",
                    category: "Nature & Parcs",
                    image: "/images/blog/peneda-geres-lagoa-cascata.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Pour les voyageurs désireux de contempler la nature la plus sauvage du Portugal, Peneda-Gerês offre un dépaysement saisissant à quelques heures de Porto." },
                        { type: 'p', text: "Crêtes rocheuses, cascades d'eau limpide, forêts de chênes et villages de bergers composent un paysage vivant qui change au fil des saisons. Des hameaux comme Soajo et Lindoso conservent de remarquables greniers de granit (espigueiros)." },
                        { type: 'p', text: "Le Gerês est réputé pour ses randonnées panoramiques, la photographie de paysages et le ressourcement en plein air. En été, ses vasques naturelles aux eaux émeraude offrent une baignade rafraîchissante." },
                        { type: 'p', text: "En raison de l'étendue du parc et de la dispersion des sites, explorer le Gerês avec chauffeur privé et véhicule tout confort transforme l'expérience." },
                        { type: 'p', text: "Depuis Porto, une journée privatisée permet de visiter les plus beaux panoramas en toute sérénité." },
                        { type: 'p', text: "Le Gerês est le choix parfait pour troquer l'agitation des villes contre la quiétude majestueuse des montagnes." },
                        { type: 'p', text: "Approchez la facette la plus sauvage du Portugal avec NORTHÉ." },
                    ]
                },
                {
                    slug: "douro-ou-vinho-verde",
                    title: "Douro ou Vinho Verde ?",
                    subtitle: "Deux expériences viticoles d'exception dans le Nord du Portugal",
                    excerpt: "Le Douro et le Vinho Verde représentent les deux fleurons viticoles du Nord du Portugal, incarnant des atmosphères admirablement distinctes.",
                    date: "8 Septembre 2026",
                    category: "Vins du Portugal",
                    image: "/images/blog/douro-ou-vinho-verde-amarante.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Le Douro et le Vinho Verde représentent les deux fleurons viticoles du Nord du Portugal, incarnant des atmosphères admirablement distinctes." },
                        { type: 'p', text: "Le Douro captive par ses pentes schisteuses escarpées plongeant dans le fleuve, sculptées par l'homme et réputées pour leurs rouges d'une grande structure et leurs Vins de Porto d'anthologie." },
                        { type: 'p', text: "Le terroir du Vinho Verde, étendu à travers le Minho verdoyant, dévoile des manoirs nobles, de petites parcelles familiales et des bourgs historiques comme Ponte de Lima, offrant des blancs vibrants et minéraux comme l'Alvarinho." },
                        { type: 'p', text: "La différence réside dans le verre comme dans le panorama : le Douro offre un amphithéâtre majestueux, le Minho une élégance bucolique et intime." },
                        { type: 'p', text: "Pour les passionnés de vin, le choix dépend de vos préférences gustatives — ou de l'envie gourmande de découvrir les deux." },
                        { type: 'p', text: "Le Nord du Portugal réunit ce privilège : deux grandes traditions viticoles à portée de main au départ de Porto." },
                        { type: 'p', text: "Dégustez la noblesse des vins du Nord lors d'une escapade privée avec NORTHÉ." },
                    ]
                },
                {
                    slug: "experiencias-privadas-a-partir-do-porto",
                    title: "Expériences Privées au Départ de Porto",
                    subtitle: "Découvrir le Portugal à votre propre rythme",
                    excerpt: "Un grand voyage ne devrait jamais s'enfermer dans un itinéraire figé ou les contraintes d'un groupe nombreux.",
                    date: "5 Septembre 2026",
                    category: "Expériences Privées",
                    image: "/images/blog/experiencias-privadas-douro-terrace.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Un grand voyage ne devrait jamais s'enfermer dans un itinéraire figé ou les contraintes d'un groupe nombreux." },
                        { type: 'p', text: "Une expérience privée sur-mesure vous permet d'adapter chaque moment aux envies de votre groupe : prolonger un échange avec un vigneron, savourer un déjeuner d'auteur face au fleuve ou s'arrêter à un point de vue secret." },
                        { type: 'p', text: "Au départ de Porto, les horizons sont infinis : des crus du Douro aux manoirs du Minho, des cités médiévales de Guimarães aux cascades du Gerês." },
                        { type: 'p', text: "Pour les couples, familles ou petits groupes d'amis, l'exclusivité garantit confort absolu et sérénité sans jamais partager le véhicule." },
                        { type: 'p', text: "Bien plus qu'enchaîner des visites au pas de course, voyager en privé permet de nouer une relation authentique avec le Portugal." },
                        { type: 'p', text: "C'est cette liberté qui métamorphose une simple excursion en un souvenir inoubliable." },
                        { type: 'p', text: "Chez NORTHÉ, nos voyages privés partent de Porto pour sillonner le Douro et le Nord du Portugal dans un esprit de confort, d'élégance et d'exclusivité." },
                        { type: 'p', text: "Découvrez la collection des voyages privés de NORTHÉ." },
                    ]
                },
                {
                    slug: "aveiro-e-coimbra-a-partir-do-porto",
                    title: "Aveiro et Coimbra depuis Porto",
                    subtitle: "Canaux de la Ria, Costa Nova et la Plus Ancienne Université du Portugal",
                    excerpt: "Une journée d'exception alliant la grâce lagunaire d'Aveiro, les maisons rayées de Costa Nova et le prestige séculaire de Coimbra.",
                    date: "24 Septembre 2026",
                    category: "Culture & Patrimoine",
                    image: "/images/tours/coimbra-aveiro/coimbra-aveiro-private-tour-1.webp",
                    readTime: "5 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Rarement une excursion privée au départ de Porto n'offre un contraste aussi saisissant entre la poésie des eaux et la grandeur de l'histoire portugaise." },
                        { type: 'p', text: "À Aveiro, surnommée la 'Venise Portugaise', la vie s'écoule au fil des canaux. À bord d'un bateau moliceiro traditionnel, vous glissez sous les ponts élégants en admirant de somptueuses façades Art Nouveau." },
                        { type: 'p', text: "À quelques minutes, le village côtier de Costa Nova séduit avec ses 'palheiros' aux rayures colorées face aux dunes atlantiques. C'est l'endroit parfait pour déguster les traditionnels ovos moles, douceur conventuelle emblématique." },
                        { type: 'p', text: "Plus au sud, Coimbra se dresse au-dessus du fleuve Mondego. Berceau de rois et de la plus ancienne université du pays (fondée en 1290 et inscrite à l'UNESCO), elle abrite la somptueuse Bibliothèque Joanina aux dorures baroques inestimables, protégées par des chauves-souris sentinelles." },
                        { type: 'p', text: "Une immersion inoubliable mêlant romantisme littoral et prestige universitaire dans le plus grand confort exécutif." },
                        { type: 'p', text: "Découvrez notre circuit privé Aveiro et Coimbra avec NORTHÉ." }
                    ]
                },
                {
                    slug: "nazare-obidos-e-sao-martinho-do-porto",
                    title: "Nazaré et Óbidos : Vagues Géantes et Remparts Médiévaux",
                    subtitle: "La Côte d'Argent entre puissance océanique et cité fortifiée des reines",
                    excerpt: "Du promontoire mythique de Nazaré où surgissent les vagues les plus hautes de la planète aux ruelles médiévales fleuries d'Óbidos.",
                    date: "26 Septembre 2026",
                    category: "Côte d'Argent",
                    image: "/images/tours/nazare-sao-martinho/1.webp",
                    readTime: "5 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "La Côte d'Argent portugaise est une terre où la majesté de l'Atlantique rencontre des siècles d'épopées maritimes et royales." },
                        { type: 'p', text: "À Nazaré, depuis le belvédère du Sítio, le panorama est vertigineux. Près du Fort de São Miguel Arcanjo et de son phare rouge, le Canyon de Nazaré — gouffre sous-marin de plus de 5 000 mètres — propulse les vagues les plus colossales du globe." },
                        { type: 'p', text: "Le village de pêcheurs conserve son âme authentique : poisson séché sur la plage dorée, costumes traditionnels et dégustation de fruits de mer d'une fraîcheur éclatante." },
                        { type: 'p', text: "La route longe ensuite la superbe baie en coquillage de São Martinho do Porto, havre de calme aux eaux douces et paisibles." },
                        { type: 'p', text: "L'excursion se termine en apothéose dans la cité fortifiée d'Óbidos. Offerte par les rois à leurs épouses, Óbidos invite à parcourir ses chemins de ronde, ses venelles de pierres fleuries et à savourer la célèbre ginjinha dans une tasse en chocolat noir." },
                        { type: 'p', text: "Vivez la magie de la Côte d'Argent en privé avec NORTHÉ." }
                    ]
                },
                {
                    slug: "fatima-batalha-e-tomar-monumentos-unesco",
                    title: "Fátima, Batalha et Tomar : Sur les Traces des Templiers et l'UNESCO",
                    subtitle: "Ferveur spirituelle, dentelle gothique et secrets de l'Ordre du Temple",
                    excerpt: "Une plongée dans le patrimoine mondial : la paix de Fátima, les splendeurs de Batalha et la forteresse templière de Tomar.",
                    date: "28 Septembre 2026",
                    category: "Histoire & UNESCO",
                    image: "/images/tours/fatima-batalha-tomar/1.webp",
                    readTime: "5 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Le triangle d'or réunissant Fátima, Batalha et Tomar constitue l'un des parcours patrimoniaux les plus émouvants du Portugal." },
                        { type: 'p', text: "Le voyage débute au Sanctuaire de Fátima, lieu de pèlerinage mondial empreint d'une grande sérénité, avec son immense esplanade et la touchante Chapelle des Apparitions." },
                        { type: 'p', text: "À Batalha, le Monastère de Santa Maria da Vitória émerveille par sa dentelle gothique et ses fameuses Chapelles Imparfaites, chef-d'œuvre à ciel ouvert édifié à la suite de la victoire d'Aljubarrota en 1385." },
                        { type: 'p', text: "Enfin, Tomar dévoile le majestueux Couvent du Christ et Château des Templiers, ancien quartier général des chevaliers de l'Ordre du Temple. Sa Charola octogonale et sa célèbre Fenêtre Manueline symbolisent la grande aventure des découvertes portugaises." },
                        { type: 'p', text: "Un voyage exclusif sur mesure pour les passionnés d'histoire et d'architecture sacrée." },
                        { type: 'p', text: "Réservez votre périple privé à Fátima, Batalha et Tomar avec NORTHÉ." }
                    ]
                },
                {
                    slug: "ponte-de-lima-e-barcelos-minho-vinho-verde",
                    title: "Ponte de Lima et Barcelos : Noblesse Médiévale et Vinho Verde",
                    subtitle: "Le plus ancien bourg du Portugal, la légende du Coq et les manoirs du Minho",
                    excerpt: "Explorez le Minho aristocratique : ponts romains millénaires, manoirs en granit, berceau du Coq de Barcelos et prestigieux domaines de Vinho Verde.",
                    date: "30 Septembre 2026",
                    category: "Minho & Vinho Verde",
                    image: "/images/tours/ponte-de-lima-douro/ponte-de-lima-historic-wine-centre.webp",
                    readTime: "4 min de lecture",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Le Minho est la province la plus verdoyante, généreuse et seigneuriale du Portugal, berceau exclusif du rafraîchissant Vinho Verde." },
                        { type: 'p', text: "Ponte de Lima est fièrement reconnue comme la plus ancienne bourgade du Portugal (fondée en 1125). Son pont romain et médiéval enjambant la rivière Lima fut le théâtre de la légende du fleuve Léthé, où les légions de Rome craignaient de perdre la mémoire de leur patrie." },
                        { type: 'p', text: "Flâner dans Ponte de Lima révèle de superbes demeures nobles, des allées de platanes séculaires et le Centre d'Interprétation du Vinho Verde (CIPV)." },
                        { type: 'p', text: "À Barcelos, les ateliers de poterie perpétuent la célèbre Légende du Coq miraculeux, devenu l'emblème national de la loyauté et de la chance portugaise." },
                        { type: 'p', text: "Avec des dégustations de cépages nobles Loureiro et Alvarinho au cœur de manoirs familiaux, cette excursion privée célèbre l'art de vivre du Nord." },
                        { type: 'p', text: "Savourez l'élégance du Minho avec les voyages privés de NORTHÉ." }
                    ]
                }
            ],
        },
        contact: {
            title: 'Créons votre expérience au Portugal ?',
            desc: 'Partagez vos envies avec nous. Nous créons une expérience privée sur mesure pour votre groupe.',
            ctaBook: 'Réserver l\'Expérience', ctaWhatsapp: 'Discuter sur WhatsApp',
            emailLabel: 'E-mail', email: EMAIL,
            phoneLabel: 'Téléphone', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Expériences Sur Mesure',
            title: 'Envie de quelque chose de différent ?',
            subtitle: 'Nous créons des expériences privées personnalisées.',
            desc: 'Conçues exclusivement selon vos centres d’intérêt, votre rythme et chaque occasion spéciale.',
            collection: 'North Private Collection',
            collectionDesc: 'Dîners privés, domaines viticoles historiques et moments inoubliables.',
            destinations: ['Porto', 'Douro Valley', 'Alcobaça', 'Amarante', 'Arouca', 'Aveiro', 'Batalha', 'Barcelos', 'Braga', 'Coimbra', 'Fátima', 'Gerês', 'Guimarães', 'Lamego', 'Nazaré', 'Óbidos', 'Ponte de Lima', 'Santa Maria da Feira', 'São Martinho do Porto', 'Tomar'],
            cta: 'Créer Mon Expérience',
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
                { title: '1. Identification du Responsable du Traitement', content: 'L\'entité responsable du traitement des données est "NORTHÉ" (NIPC : 518 190 145), basée au Portugal. Nous nous engageons à protéger les données personnelles conformément au RGPD européen.' },
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
                { title: '1. Champ d\'Application', content: 'Ces conditions générales s\'appliquent à tous les services fournis par NORTHÉ.' },
                { title: '2. Réservations et Paiements', content: 'Les réservations sont effectives après confirmation écrite. Les paiements sont effectués selon la méthode convenue.' },
                { title: '3. Politique d\'Annulation', content: 'Annulation gratuite jusqu\'à 48 heures avant le tour. Au-delà, le tarif plein est appliqué.' },
                { title: '4. Responsabilité', content: 'NORTHÉ détient toutes les assurances obligatoires. Nous ne sommes pas responsables de la perte de biens personnels.' },
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
            title1: 'Private Erlebnisse ab Porto',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Private Erlebnisse im Douro-Tal, in Porto und Nordportugal mit Executive-Transport und maßgeschneiderten Reiserouten für jede Gruppe.',
            cta: 'Erlebnisse Entdecken',
            ctaWhatsapp: 'Per WhatsApp Chatten',
            trustLine: '100% Privat · 1–8 Gäste · Executive-Transport · Kostenlose Stornierung bis 48h',
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
                extra: 'Zusätzlicher Gast',
                perPersonLabel: 'Pro Person',
                pricingNote: 'für 2 Personen',
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
                    capacityLabel: 'Maximum: 4 Personen',
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
                    capacityLabel: 'Maximum: 4 Personen',
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
            badge: "Über NORTHÉ",
            title: "Private Erlebnisse, geschaffen, um Portugal auf persönlichere Weise zu entdecken.",
            paragraphs: [
                "NORTHÉ entstand in Porto aus einer klaren Vision: jede Reise in ein bedeutungsvolles Erlebnis zu verwandeln. Wir gestalten private Touren durch das Douro-Tal, Porto und Nordportugal, die faszinierende Landschaften, Weine, Gastronomie, Kultur und handverlesene Orte harmonisch vereinen.",
                "Jedes Erlebnis wird maßgeschneidert für Ihre Gruppe konzipiert — mit höchstem Komfort, Flexibilität und Liebe zum Detail. Denn ein Reiseziel zu entdecken erfordert keinen Standardplan für jedermann.",
            ],
            signature: "NORTHÉ",
            imageAlt: "Weinrestaurant mit Panoramablick bei Sonnenuntergang über den Fluss Douro und Porto",
        },
        reviews: {
            badge: 'Bewertungen',
            title: 'Was Unsere Gäste Sagen',
            subtitle: 'Jede Bewertung ist eine echte Geschichte von Reisenden.',
            rating: '5.0', totalReviews: '5.0 ★★★★★',
            googleScore: '5.0',
            googleBadge: 'Google Reviews',
            googleVerified: 'Mit 5.0 Sternen auf Google bewertet',
            googleHighlight: '100% verifizierte 5-Sterne-Gästebewertungen',
            viewOnGoogle: 'Alle Bewertungen auf Google Maps ansehen',
            writeOnGoogle: 'Auf Google bewerten',
            bottomTitle: 'Haben Sie ein Erlebnis mit NORTHÉ genossen?',
            bottomSubtitle: 'Ihr Feedback ist für uns von unschätzbarem Wert. Lesen Sie die Erfahrungsberichte unserer Gäste oder teilen Sie Ihre eigene Bewertung auf Google.',
            verifiedTag: 'Verifizierte Google-Bewertung',
            items: [
                { text: 'Ein Erlebnis, das über den Tourismus hinausgeht. Wir fühlten uns wie Ehrengäste in einer der schönsten Regionen der Welt. Der Guide war außergewöhnlich und die Liebe zum Detail beeindruckend.', author: 'Sofia Albuquerque', location: 'Lissabon, Portugal', flag: '🇵🇹', stars: 5 },
                { text: 'Die Liebe zum Detail war tadellos. Von der privaten Bootsfahrt bis hin zu den exklusiven Weinproben war alles perfekt. Sehr empfehlenswert für jeden, der Porto besucht.', author: 'James Sterling', location: 'London, GB', flag: '🇬🇧', stars: 5 },
                { text: 'Ein magischer Tag im Douro-Tal. Der Guide war außergewöhnlich, die Weine hervorragend und das Mittagessen absolut köstlich. Ein absolutes Muss!', author: 'Marie Dubois', location: 'Paris, Frankreich', flag: '🇫🇷', stars: 5 },
                { text: 'Das beste Erlebnis, das ich je am Douro hatte! Die Bootsfahrt zum Sonnenuntergang war unvergesslich. Ich kann NORTHÉ nur wärmstens empfehlen.', author: 'Carlos Mendes', location: 'São Paulo, Brasilien', flag: '🇧🇷', stars: 5 },
                { text: 'Ein perfekter Tag im Douro-Tal! Die Weinprobe war erstklassig und die Landschaft atemberaubend. Wir werden auf jeden Fall wiederkommen.', author: 'Hannah Müller', location: 'München, Deutschland', flag: '🇩🇪', stars: 5 },
                { text: 'Wir haben unser Jubiläum mit NORTHÉ gefeiert und es war der Höhepunkt unserer Reise. Das private Erlebnis fühlte sich wirklich exklusiv an. Es war jeden Cent wert.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'Der Guide wusste alles über die Weine und die Geschichte der Region. Ein unvergessliche Reise, die ich allen Weinliebhabern empfehle.', author: 'Alessandro Rossi', location: 'Mailand, Italien', flag: '🇮🇹', stars: 5 },
                { text: 'Der Flughafen-Transfer war makellos, und die Tour am nächsten Tag hat alle unsere Erwartungen übertroffen. Erstklassiger Service in jeder Hinsicht.', author: 'Lucía Fernández', location: 'Madrid, Spanien', flag: '🇪🇸', stars: 5 },
                { text: 'Tolle Erfahrung! Das Boot auf dem Douro bei Sonnenuntergang war magisch. Professioneller Service von Anfang bis Ende.', author: 'Daan van der Berg', location: 'Amsterdam, Niederlande', flag: '🇳🇱', stars: 5 },
            ],
        },

        faq: {
            badge: "FAQ",
            title: "Alles, was Sie wissen müssen",
            subtitle: "Klare und transparente Antworten auf die häufigsten Fragen vor der Buchung Ihres privaten Erlebnisses.",
            searchPlaceholder: "Fragen durchsuchen (z.B. Boot, Abholung, Kinder, Stornierung)...",
            noResults: "Keine passenden Fragen zu dieser Suche gefunden.",
            clearSearch: "Suche zurücksetzen",
            whatsappTitle: "Haben Sie noch Fragen zu Ihrem Erlebnis?",
            whatsappSubtitle: "Sprechen Sie direkt mit NORTHÉ. Wir beraten Sie mit Freude bei der Wahl des perfekten Reiseplans für Ihre Gruppe.",
            whatsappBtn: "Über WhatsApp kontaktieren",
            categories: [
                { id: "all", label: "Alle Fragen" },
                { id: "reservas", label: "Buchung & Preise" },
                { id: "transporte", label: "Abholung & Transfer" },
                { id: "douro", label: "Douro-Tal" },
                { id: "barco", label: "Bootsfahrten" },
                { id: "familias", label: "Familien & Barrierefreiheit" },
                { id: "gastronomia", label: "Essen & Diätwünsche" },
                { id: "cancelamentos", label: "Stornierung & Flexibilität" },
                { id: "especiais", label: "Besondere Anlässe" },
            ],
            items: [
                {
                    category: "reservas",
                    q: "Wie kann ich ein privates Erlebnis bei NORTHÉ buchen?",
                    a: "Sie können Ihre Anfrage direkt über unsere Website, per WhatsApp oder über die Kontaktkanäle von NORTHÉ stellen. Nennen Sie uns Ihr Wunschdatum, die Personenanzahl und die gewünschte Tour. Unser Team prüft umgehend die Verfügbarkeit und stimmt alle Details vor der Buchung mit Ihnen ab."
                },
                {
                    category: "reservas",
                    q: "Wie lange im Voraus sollte ich meine Buchung vornehmen?",
                    a: "Wir empfehlen eine frühzeitige Buchung, besonders für Douro-Tal-Touren, private Bootsfahrten, renommierte Weingüter und die Hauptsaison. Kurzfristige Buchungen sind je nach Verfügbarkeit möglich."
                },
                {
                    category: "reservas",
                    q: "Sind die Touren von NORTHÉ zu 100 % privat?",
                    a: "Ja. NORTHÉ ist ausschließlich auf 100 % private Touren spezialisiert. Ihre Gruppe reist und genießt das Erlebnis in absoluter Exklusivität, ohne das Fahrzeug mit anderen Gästen zu teilen."
                },
                {
                    category: "reservas",
                    q: "Wie setzt sich der Preis für ein privates Erlebnis zusammen?",
                    a: "Der Preis richtet sich nach der gewählten Tour, der Teilnehmerzahl, der Reiseroute und den inkludierten Leistungen. Jede Tour weist vor der Buchung transparente Bedingungen und Preise aus."
                },
                {
                    category: "reservas",
                    q: "Gilt der angegebene Preis pro Person oder pro Gruppe?",
                    a: "Der Preis versteht sich pro privater Gruppe und nicht pro Person. NORTHÉ-Touren können für Gruppen von 1 bis 8 Gästen gebucht werden, wobei die Exklusivität stets gewahrt bleibt."
                },
                {
                    category: "reservas",
                    q: "Was ist im Preis enthalten? Gibt es versteckte Kosten?",
                    a: "Jede Tour listet alle Inklusivleistungen detailliert auf. Sollten optionale Extras, Eintrittsgelder, spezielle Weinproben oder Bootsupgrades nicht enthalten sein, werden diese im Vorfeld vollkommen transparent ausgewiesen."
                },
                {
                    category: "reservas",
                    q: "Welche Zahlungsmethoden stehen zur Verfügung?",
                    a: "Die Zahlungsoptionen werden bei der Buchungsbestätigung mitgeteilt. Zahlungen erfolgen sicher per Banküberweisung (SEPA/SWIFT), gängigen Kreditkarten oder MB Way."
                },
                {
                    category: "reservas",
                    q: "Kann ich eine maßgeschneiderte Tour anfragen?",
                    a: "Ja. Individuelle Flexibilität ist ein zentrales Merkmal von NORTHÉ. Wir passen Tempo, Route und Programm gerne an die Wünsche und Vorlieben Ihrer Gruppe an, soweit dies logistisch möglich ist."
                },
                {
                    category: "transporte",
                    q: "Wo finden Abholung (Pick-up) und Rückfahrt statt?",
                    a: "Abholung und Rückfahrt werden vorab gemäß Ihren Buchungsangaben vereinbart. Bei Touren ab Porto holen wir Sie am vereinbarten Treffpunkt ab."
                },
                {
                    category: "transporte",
                    q: "Bietet NORTHÉ Abholung und Rückfahrt an Hotels in Porto an?",
                    a: "Wir holen Ihre Gruppe direkt in der Lobby Ihres Hotels, Apartments, Airbnbs oder Ihrer Unterkunft in Porto und Vila Nova de Gaia ab – üblicherweise zwischen 08:30 und 09:00 Uhr (oder zu einer gewünschten Wunschzeit). Am Ende des Tages (~18:00 - 18:30 Uhr) bringen wir Sie entspannt zurück oder setzen Sie an einem Wunschrestaurant für das Abendessen ab."
                },
                {
                    category: "transporte",
                    q: "Ist eine Abholung direkt am Flughafen Porto möglich?",
                    a: "Ja. Dieser Service muss bei der Buchung angefragt werden, damit wir Flugdaten und Fahrerkoordination exakt abstimmen können."
                },
                {
                    category: "transporte",
                    q: "Kann ich eine Abholung außerhalb von Porto anfragen?",
                    a: "Abholungen außerhalb unseres regulären Gebiets können je nach Ort, Zeit und Tour geprüft werden. Ein möglicher Aufpreis wird vorab transparent mitgeteilt."
                },
                {
                    category: "transporte",
                    q: "Erfolgt die Beförderung während der gesamten Tour ausschließlich privat?",
                    a: "Ja. Alle Erlebnisse von NORTHÉ finden in modernen Oberklasse-Fahrzeugen statt, die exklusiv für Ihre Reisegruppe reserviert sind."
                },
                {
                    category: "douro",
                    q: "Wie besichtigt man das Douro-Tal ab Porto am besten?",
                    a: "Eine private Tagestour bietet maximale Freiheit, das Douro-Tal ohne Zeitdruck zu erkunden und das Tempo an Ihre Gruppe anzupassen. Ab Porto lassen sich atemberaubende Aussichtspunkte, Quintas, Kulinarik und Bootsfahrten ideal kombinieren."
                },
                {
                    category: "douro",
                    q: "Wie lange dauert eine private Douro-Tal-Tagestour?",
                    a: "Die Dauer richtet sich nach dem gewählten Programm. NORTHÉ-Touren sind in der Regel als ganztägige Entdeckungsreisen (ca. 8 bis 9 Stunden) konzipiert; genaue Angaben finden sich auf der jeweiligen Tour-Seite."
                },
                {
                    category: "douro",
                    q: "Was besuche ich während einer privaten Douro-Tour?",
                    a: "Je nach Route besichtigen Sie historische Weingüter (Quintas), terrassierte Weinberge, malerische Flussorte wie Pinhão, spektakuläre Aussichtspunkte und tauchen tief in die Weinkultur und Gastronomie ein."
                },
                {
                    category: "douro",
                    q: "Sind Weinverkostungen im Preis inbegriffen?",
                    a: "Das hängt von der jeweiligen Tour ab. Wenn Weinproben Teil des Programms sind, ist dies in der Tour-Beschreibung ausdrücklich vermerkt. Auf Wunsch arrangieren wir auch exklusive Jahrgangsverkostungen."
                },
                {
                    category: "douro",
                    q: "Welche Weinsorten kann ich im Douro-Tal probieren?",
                    a: "Je nach Route verkosten Sie das facettenreiche Spektrum der Region: frische DOC Douro-Weißweine, vollmundige Rotweine sowie legendäre Portweine (Tawny, Ruby, Colheitas)."
                },
                {
                    category: "douro",
                    q: "Kann ich ein bestimmtes Weingut im Douro-Tal besuchen?",
                    a: "Gerne prüfen wir Ihre Wunsch-Quinta auf Verfügbarkeit am gewählten Datum. Manche namhafte Weingüter erfordern rechtzeitige Voranmeldung gemäß ihren internen Empfangszeiten."
                },
                {
                    category: "douro",
                    q: "Kann ich die Reiseroute meiner Douro-Tour individualisieren?",
                    a: "Ja. Private Touren bieten höchste Flexibilität. Wir stimmen die Stationen mit Ihnen ab und kreieren ein individuelles Erlebnis unter Berücksichtigung der Fahrzeiten und Öffnungszeiten."
                },
                {
                    category: "barco",
                    q: "Beinhalten die NORTHÉ-Touren eine Bootsfahrt auf dem Douro?",
                    a: "Mehrere unserer Touren beinhalten eine Flussfahrt auf dem Douro. Art, Dauer und Bootstyp sind auf der jeweiligen Tour-Seite detailliert beschrieben."
                },
                {
                    category: "barco",
                    q: "Ist die Bootsfahrt privat oder geteilt?",
                    a: "Das hängt von der gewählten Tour ab. NORTHÉ bietet verschiedene Varianten, darunter auch 100 % private Holzrabelo-Charterfahrten, sofern im Programm aufgeführt."
                },
                {
                    category: "barco",
                    q: "Wie lange dauert die Bootsfahrt?",
                    a: "Die Dauer variiert je nach Programm (meist 1 bis 2 Stunden) und ist in der Tour-Beschreibung genau angegeben."
                },
                {
                    category: "barco",
                    q: "Was passiert, wenn schlechtes Wetter die Bootsfahrt verhindert?",
                    a: "Ihre Sicherheit und Ihr Wohlbefinden stehen immer an erster Stelle. Sollten Wetter- oder Flussbedingungen eine Fahrt unmöglich machen, bieten wir niveauvolle kulturelle oder weinbezogene Alternativen an."
                },
                {
                    category: "familias",
                    q: "Sind die Touren für Familien mit Kindern oder Babys geeignet?",
                    a: "Viele unserer Touren eignen sich hervorragend für Familien. Die Eignung richtet sich nach Strecke, Dauer und Aktivitäten. Bitte geben Sie bei der Buchung das Alter der Kinder an, damit wir Sie optimal beraten."
                },
                {
                    category: "familias",
                    q: "Werden Kindersitze oder Sitzerhöhungen bereitgestellt?",
                    a: "Ja. Zugelassene Babyschalen und Kindersitze stellen wir Ihnen auf Anfrage bei der Buchung kostenlos zur Verfügung."
                },
                {
                    category: "familias",
                    q: "Sind die Touren für Personen mit eingeschränkter Mobilität geeignet?",
                    a: "Die Barrierefreiheit variiert je nach Weingut, historischem Gelände, Boot und Monument. Bitte informieren Sie uns vorab, damit wir eine barrierearme Route zusammenstellen können."
                },
                {
                    category: "gastronomia",
                    q: "Können Mahlzeiten an besondere Ernährungsweisen angepasst werden?",
                    a: "Wann immer möglich, ja. Spezielle Ernährungswünsche sollten im Vorfeld mitgeteilt werden, damit wir diese mit unseren Partnerrestaurants abstimmen können."
                },
                {
                    category: "gastronomia",
                    q: "Gibt es vegetarische, vegane oder glutenfreie Optionen?",
                    a: "Vegetarische, vegane oder glutenfreie Menüs können bei rechtzeitiger Voranmeldung bei der Buchung mit den ausgewählten Restaurants arrangiert werden."
                },
                {
                    category: "gastronomia",
                    q: "Müssen Allergien oder Unverträglichkeiten im Voraus gemeldet werden?",
                    a: "Ja. Eine rechtzeitige Vorankündigung ermöglicht unseren Partnern eine erstklassige kulinarische Vorbereitung."
                },
                {
                    category: "cancelamentos",
                    q: "Wie lauten die Stornierungs- und Umbuchungsbedingungen?",
                    a: "Wir bieten kostenlose Stornierung mit voller Rückerstattung bis zu 48 Stunden vor Tourbeginn. Sollte sich Ihr Flugplan ändern, passen wir das Tourdatum nach Verfügbarkeit kostenfrei an."
                },
                {
                    category: "cancelamentos",
                    q: "Kann ich das Datum meiner Tour nach der Buchung noch ändern?",
                    a: "Umbuchungsanfragen werden nach Maßgabe der Terminverfügbarkeit flexibel geprüft. Je früher Sie uns kontaktieren, desto einfacher lässt sich ein Alternativtermin sichern."
                },
                {
                    category: "cancelamentos",
                    q: "Was passiert, wenn ungünstige Wetterbedingungen das Erlebnis beeinflussen?",
                    a: "Sollte das Wetter Aktivitäten im Freien beeinträchtigen, passen wir die Route mit Schlossbesichtigungen und wettergeschützten Weinverkostungen an."
                },
                {
                    category: "cancelamentos",
                    q: "Kann NORTHÉ die Route während der Tour anpassen?",
                    a: "In Ausnahmefällen (Wetterlage, Straßensperren, Öffnungszeiten) können routenbezogene Anpassungen vorgenommen werden, um Ihre Sicherheit und den hohen Qualitätsstandard zu gewährleisten."
                },
                {
                    category: "especiais",
                    q: "Kann ich eine Tour für einen besonderen Anlass arrangieren?",
                    a: "Ja. Wir gestalten private Erlebnisse mit großer Sorgfalt für besondere Lebensmomente und Jubiläen."
                },
                {
                    category: "especiais",
                    q: "Organisiert NORTHÉ Geburtstage, Heiratsanträge oder Jubiläen?",
                    a: "Ja. Wir organisieren regelmäßig Geburtstage, Heiratsanträge und private Feiern in traumhafter Kulisse, diskret und vorab abgestimmt."
                },
                {
                    category: "especiais",
                    q: "Kann ich ein Picknick, einen Fotografen oder Zusatzleistungen buchen?",
                    a: "Ausgewählte Touren können mit Weinberg-Picknicks, professioneller Fotobegleitung, Blumendekorationen oder privatem Boot ergänzt werden. Details und Preise werden individuell bestätigt."
                },
            ],
        },
blog: {
            badge: "Magazin & Reiseführer",
            title: "Douro & Nordportugal Tagebuch",
            subtitle: "Autorisierte Reiseführer, exklusive Routen und Geheimtipps für Nordportugal.",
            readMore: "Artikel lesen",
            bookCta: "Dieses Erlebnis anfragen",
            items: [
                {
                    slug: "passeio-de-barco-privado-no-porto-douro",
                    title: "Private Bootstour in Porto: Kompletter Guide, Preis & Ausblicke auf den Douro",
                    subtitle: "Entdecken Sie Porto und Vila Nova de Gaia exklusiv vom Wasser des Douro-Flusses aus",
                    excerpt: "Eine Fahrt auf dem Douro-Fluss in einem 100 % privaten Boot ist eine der unvergesslichsten Möglichkeiten, Portos Ribeira, die Portweinkeller von Vila Nova de Gaia und die Brücke Dom Luís I zu bewundern. Erfahren Sie alles über den Festpreis (150 € bis 6 Personen).",
                    date: "21. Oktober 2026",
                    category: "Porto Experiences",
                    image: "/images/tours/porto-private-boat-tour/1.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Die Private Bootstour in Porto von NORTHÉ (Offizielle Lizenz RNAAT 284/2026) bietet ein 100 % exklusives Bootserlebnis auf dem Douro-Fluss zum Festpreis von 150 € pro Fahrt für Gruppen von 1 bis 6 Personen (Dauer: 1 Stunde) inklusive lizenziertem Skipper." },
                        { type: 'h3', text: "Warum eine private Bootstour in Porto statt einer öffentlichen Brückenfahrt wählen?" },
                        { type: 'p', text: "Während öffentliche Ausflugsboote Dutzende Passagiere befördern, genießen Sie auf einem privaten Boot den Douro-Fluss ganz entspannt zu zweit, mit der Familie oder mit Freunden – mit freiem Blick auf die Ribeira und Vila Nova de Gaia." },
                        { type: 'blockquote', text: "Porto vom Wasser des Douro aus zu betrachten, offenbart die wahre Seele der Stadt: die historischen Fassaden der Ribeira, die traditionsreichen Portweinkeller in Gaia und die imposante Brücke Dom Luís I." },
                        { type: 'image', url: "/images/tours/porto-private-boat-tour/3.webp", text: "Komfort und Exklusivität an Bord des privaten NORTHÉ-Boots auf dem Douro (bis zu 6 Gäste)." },
                        { type: 'h3', text: "Inklusivleistungen und wichtige Hinweise" },
                        { type: 'p', text: "Die Fahrt dauert ca. 1 Stunde für maximal 6 Passagiere und beinhaltet das exklusive Privatboot, einen lizenzierten Skipper, Treibstoff, Sicherheitsausrüstung und obligatorische Versicherungen. Wir empfehlen bequeme Kleidung, eine leichte Windjacke, Sonnenbrille und ein Erscheinen 10 bis 15 Minuten vor Abfahrt." },
                    ]
                },
                {
                    slug: "8-melhores-passeios-a-partir-do-porto",
                    title: "Die 8 Besten Tagesausflüge ab Porto",
                    subtitle: "Entdecken Sie Nordportugal jenseits der Stadtgrenzen",
                    excerpt: "Porto ist der ideale Ausgangspunkt, um die vielfältigen Regionen Portugals zu erkunden. In wenigen Stunden erreichen Sie Weinberge, mittelalterliche Städte, historische Paläste, Gebirgszüge und die Atlantikküste.",
                    date: "18. September 2026",
                    category: "Reiseführer",
                    image: "/images/blog/8-melhores-passeios-porto.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Porto ist der ideale Ausgangspunkt, um die vielfältigen Regionen Portugals zu erkunden. In wenigen Stunden erreichen Sie Weinberge, mittelalterliche Städte, historische Paläste, Gebirgszüge und die Atlantikküste." },
                        { type: 'p', text: "Zu den beliebtesten Zielen gehören das Douro-Tal, Braga, Guimarães und Aveiro. Naturliebhaber zieht es in den Nationalpark Peneda-Gerês mit seinen Bergmassiven, während Arouca mit Flüssen und Hängebrücken begeistert. Amarante und Ponte de Lima sind charmante Oasen für Ruhesuchende." },
                        { type: 'p', text: "Die Wahl richtet sich nach Ihren Vorlieben: Wein und Gastronomie im Douro, Landesgeschichte in Guimarães, sakrale Baukunst in Braga, Kanäle in Aveiro oder wilde Gebirgsnatur in Gerês." },
                        { type: 'p', text: "Mehr als ein gewöhnlicher Tagesausflug: Eine Reise in den Norden offenbart ein facettenreiches Land, in dem Geschichte, Weinkultur und Natur tief verwurzelt sind." },
                        { type: 'p', text: "Möchten Sie Nordportugal ab Porto erleben? Entdecken Sie die privaten Erlebnisse von NORTHÉ." },
                    ]
                },
                {
                    slug: "vale-do-douro-a-partir-do-porto",
                    title: "Das Douro-Tal ab Porto",
                    subtitle: "Spitzenweine, majestätische Landschaften und Jahrhunderte der Tradition",
                    excerpt: "Das Douro-Tal zählt zu den eindrucksvollsten Erlebnissen jedes Portugal-Aufenthalts. Berühmt für seine steilen Weinterrassen, den gewundenen Fluss Douro und den weltbekannten Portwein.",
                    date: "17. September 2026",
                    category: "Douro-Tal",
                    image: "/images/blog/douro-valley-vineyards.webp",
                    readTime: "5 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Das Douro-Tal zählt zu den eindrucksvollsten Erlebnissen jedes Portugal-Aufenthalts. Berühmt für seine steilen Weinterrassen, den gewundenen Fluss Douro und den weltbekannten Portwein." },
                        { type: 'p', text: "Pinhão und Peso da Régua bilden die zentralen Ausgangspunkte im Tal. Entlang spektakulärer Panoramastraßen eröffnen Weingüter (Quintas) und Aussichtspunkte atemberaubende Ausblicke." },
                        { type: 'p', text: "Ein Tagesausflug verbindet private Kellerführungen, geführte Verkostungen, regionale Spitzenküche und eine entspannte Bootsfahrt. Da die Distanz ab Porto weiter ist als zu anderen Zielen, empfiehlt sich eine sorgfältig geplante Privattour." },
                        { type: 'p', text: "Das Tal wandelt sich im Rhythmus der Jahreszeiten: Der Frühling hüllt die Hänge in sattes Grün, während der Herbst die Terrassen während der Weinlese in warmes Gold taucht." },
                        { type: 'p', text: "Wer die tiefe Verbindung zwischen Land, Wein und portugiesischer Kultur spüren möchte, erlebt im Douro-Tal weit mehr als eine gewöhnliche Weinprobe." },
                        { type: 'p', text: "Erleben Sie das Douro-Tal exklusiv mit einer privaten Tour von NORTHÉ." },
                    ]
                },
                {
                    slug: "o-que-fazer-no-porto",
                    title: "Was Man in Porto Erleben Sollte",
                    subtitle: "Eine faszinierende Stadt ohne Eile entdecken",
                    excerpt: "Porto vereint reiche Geschichte, noble Architektur, hervorragende Kulinarik, Weinkultur und einen unverwechselbaren Charakter auf kompaktem Raum.",
                    date: "16. September 2026",
                    category: "Porto & Kultur",
                    image: "/images/blog/o-que-fazer-porto.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Porto vereint reiche Geschichte, noble Architektur, hervorragende Kulinarik, Weinkultur und einen unverwechselbaren Charakter auf kompaktem Raum." },
                        { type: 'p', text: "Die zum UNESCO-Welterbe zählende Altstadt umfasst Wahrzeichen wie die Ribeira, die Kathedrale Sé, den mit Azulejos verzierten Bahnhof São Bento und den Clérigos-Turm. Auf der anderen Flussseite in Vila Nova de Gaia laden historische Portweinkeller mit Panoramablick ein." },
                        { type: 'p', text: "Doch Portos wahre Seele erschließt sich jenseits der bekannten Monumente: Lokale Märkte, charmante Cafés, Künstlerviertel und die Meerespromenade von Foz do Douro zeigen authentische Facetten." },
                        { type: 'p', text: "Wer mehr Zeit mitbringt, vertieft seinen Besuch mit exzellenter Gastronomie, privater Kunstführung und architektonischen Entdeckungen." },
                        { type: 'p', text: "Der schönste Weg, Porto zu erkunden, richtet sich ganz nach Ihrem eigenen Tempo — ob klassische Höhepunkte oder versteckte Lieblingsorte." },
                        { type: 'p', text: "Wichtig ist, Raum für spontane Entdeckungen zu lassen, statt bloß eine Liste abzuarbeiten." },
                        { type: 'p', text: "Erleben Sie Porto auf persönliche und stilvolle Weise mit NORTHÉ." },
                    ]
                },
                {
                    slug: "braga-e-guimaraes-a-partir-do-porto",
                    title: "Braga und Guimarães ab Porto",
                    subtitle: "Zwei historische Juwelen im Herzen Nordportugals",
                    excerpt: "Braga und Guimarães gehören zu den faszinierendsten Kulturausflügen für Reisende, die von Porto aus den Norden erkunden möchten.",
                    date: "14. September 2026",
                    category: "Geschichte & Erbe",
                    image: "/images/blog/braga-guimaraes-norte.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Braga und Guimarães gehören zu den faszinierendsten Kulturausflügen für Reisende, die von Porto aus den Norden erkunden möchten." },
                        { type: 'p', text: "Braga besticht durch barocke Sakralarchitektur und monumentale Ensembles wie das Heiligtum Bom Jesus do Monte mit seiner weltberühmten Treppenanlage." },
                        { type: 'p', text: "Guimarães verströmt mittelalterlichen Zauber. Das UNESCO-geschützte Zentrum bewahrt Plätze und Natursteinhäuser, die von den Ursprüngen Portugals als Wiege der Nation erzählen." },
                        { type: 'p', text: "Beide Städte lassen sich an einem Tag kombinieren. Wer entspannt reisen möchte, nimmt sich Zeit, um das historische Ambiente und die nordportugiesische Küche in Ruhe zu genießen." },
                        { type: 'p', text: "Braga begeistert Architektur- und Geschichtsliebhaber; Guimarães verzaubert all jene, die intime Gassen und ritterliche Geschichte suchen." },
                        { type: 'p', text: "Zwei Städte, zwei eindrucksvolle Perspektiven auf das kulturelle Erbe Nordportugals." },
                    ]
                },
                {
                    slug: "norte-de-portugal-lugares-alem-do-porto",
                    title: "Nordportugal: Orte Jenseits von Porto Entdecken",
                    subtitle: "Eine facettenreiche Region voll Landschaft, Geschichte und Wein",
                    excerpt: "Nordportugal bietet weitaus mehr als die bekannten Ufer von Porto und dem Douro.",
                    date: "12. September 2026",
                    category: "Nordportugal",
                    image: "/images/blog/ponte-de-lima-minho.webp",
                    readTime: "5 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Nordportugal bietet weitaus mehr als die bekannten Ufer von Porto und dem Douro." },
                        { type: 'p', text: "Nördlich und östlich der Stadt eröffnen sich kontrastreiche Welten: Guimarães bewahrt mittelalterlichen Glanz; Braga beeindruckt mit barocker Pracht; Ponte de Lima zelebriert die Idylle des Minho und die Frische des Vinho Verde." },
                        { type: 'p', text: "Weiter nördlich verbindet Viana do Castelo Meer, Fluss und lebendige Seefahrertradition. Im Landesinneren eröffnet der Nationalpark Peneda-Gerês raue Granitberge und uralte Steindörfer." },
                        { type: 'p', text: "Orte wie Amarante und Arouca laden zu erholsamen Naturbegegnungen abseits des Trubels ein." },
                        { type: 'p', text: "Diese Vielfalt zeichnet den Norden aus: An einem einzigen Tag können Sie von einer UNESCO-Stadt zu einem Spitzenweingut oder vom Gebirgsmassiv an den tosenden Atlantik reisen." },
                        { type: 'p', text: "Ein Ausflug ins Umland von Porto belohnt mit authentischen Aromen und unberührten Landschaften." },
                        { type: 'p', text: "Entdecken Sie Nordportugal auf maßgeschneiderten privaten Touren mit NORTHÉ." },
                    ]
                },
                {
                    slug: "parque-nacional-peneda-geres-a-partir-do-porto",
                    title: "Nationalpark Peneda-Gerês ab Porto",
                    subtitle: "Wilde Natur, Granitberge und traditionelle Bergdörfer",
                    excerpt: "Für Reisende, die Portugals unberührte Natur erleben möchten, bietet der Nationalpark Peneda-Gerês einen faszinierenden Kontrast zum urbanen Leben in Porto.",
                    date: "10. September 2026",
                    category: "Natur & Parks",
                    image: "/images/blog/peneda-geres-lagoa-cascata.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Für Reisende, die Portugals unberührte Natur erleben möchten, bietet der Nationalpark Peneda-Gerês einen faszinierenden Kontrast zum urbanen Leben in Porto." },
                        { type: 'p', text: "Granitfelsen, glasklare Gebirgsbäche, Wasserfälle und traditionelle Schäferdörfer prägen die Kulisse im Wandel der Jahreszeiten. Dörfer wie Soajo und Lindoso bewahren historische Getreidespeicher (Espigueiros)." },
                        { type: 'p', text: "Gerês ist ein Paradies für Wanderungen, Landschaftsfotografie und tiefe Entspannung. Im Sommer laden smaragdgrüne Lagunen zu einer erfrischenden Pause ein." },
                        { type: 'p', text: "Aufgrund der Weitläufigkeit des Parks und der abgelegenen Schätze macht ein privates Fahrzeug mit Ortskenntnis den entscheidenden Unterschied." },
                        { type: 'p', text: "Ab Porto ermöglicht eine private Tagestour, die Höhepunkte des Parks entspannt und nach eigenen Vorlieben zu erkunden." },
                        { type: 'p', text: "Gerês ist die vollendete Wahl, um Stadttrubel gegen Bergluft, Stille und Weite einzutauschen." },
                        { type: 'p', text: "Erleben Sie die wilde Seite Nordportugals mit NORTHÉ." },
                    ]
                },
                {
                    slug: "douro-ou-vinho-verde",
                    title: "Douro oder Vinho Verde?",
                    subtitle: "Zwei außergewöhnliche Weinerlebnisse in Nordportugal",
                    excerpt: "Das Douro-Tal und das Vinho Verde-Gebiet repräsentieren die beiden renommiertesten Weinregionen Nordportugals — mit herrlich unterschiedlichem Charakter.",
                    date: "8. September 2026",
                    category: "Portugiesischer Wein",
                    image: "/images/blog/douro-ou-vinho-verde-amarante.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Das Douro-Tal und das Vinho Verde-Gebiet repräsentieren die beiden renommiertesten Weinregionen Nordportugals — mit herrlich unterschiedlichem Charakter." },
                        { type: 'p', text: "Das Douro-Tal besticht durch steile Schieferterrassen entlang des Flusses, weltberühmt für körperreiche Rotweine und die legendären Portweine." },
                        { type: 'p', text: "Die Vinho Verde-Region im saftig-grünen Minho zeichnet sich durch herrschaftliche Landgüter und historische Städtchen wie Ponte de Lima aus und bringt aromatische, mineralische Weißweine wie Alvarinho und Loureiro hervor." },
                        { type: 'p', text: "Der Unterschied zeigt sich im Glas wie in der Landschaft: Der Douro bietet monumentale Canyons, das Minho ländlich-feine Eleganz." },
                        { type: 'p', text: "Für Weinliebhaber hängt die Wahl von der gewünschten Atmosphäre ab — oder von der Freude, beide Regionen zu verkosten." },
                        { type: 'p', text: "Nordportugal bietet diesen seltenen Luxus: zwei Weltklasse-Weinkulturen in bequemer Reichweite von Porto." },
                        { type: 'p', text: "Entdecken Sie die Spitzenweine des Nordens auf einer privaten Tour mit NORTHÉ." },
                    ]
                },
                {
                    slug: "experiencias-privadas-a-partir-do-porto",
                    title: "Private Erlebnisse ab Porto",
                    subtitle: "Portugal im ganz eigenen Rhythmus entdecken",
                    excerpt: "Nicht jede Reise muss einem starren Gruppenzeitplan folgen.",
                    date: "5. September 2026",
                    category: "Private Erlebnisse",
                    image: "/images/blog/experiencias-privadas-douro-terrace.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Nicht jede Reise muss einem starren Gruppenzeitplan folgen." },
                        { type: 'p', text: "Ein maßgeschneidertes privates Erlebnis ermöglicht es Ihnen, den Tag nach Ihren Wünschen zu gestalten: länger auf einem Weingut verweilen, ein exzellentes Mittagessen genießen oder spontan an einem Aussichtspunkt halten." },
                        { type: 'p', text: "Ab Porto sind die Möglichkeiten grenzenlos: Douro-Weine, mittelalterliche Geschichte in Guimarães, frische Bergluft in Gerês oder Herrenhäuser im Minho." },
                        { type: 'p', text: "Für Paare, Familien und kleine Gruppen bedeutet Privatsphäre höchsten Komfort, ohne das Fahrzeug mit Fremden teilen zu müssen." },
                        { type: 'p', text: "Statt Sehenswürdigkeiten im Minutentakt abzuhaken, erlaubt Ihnen eine private Tour, eine echte Verbindung zu Land und Leuten aufzubauen." },
                        { type: 'p', text: "Diese Flexibilität macht aus einem gewöhnlichen Ausflug eine unvergessliche Erinnerung." },
                        { type: 'p', text: "Bei NORTHÉ starten private Touren ab Porto durch das Douro-Tal und Nordportugal — stets fokussiert auf Komfort, Exklusivität und persönliche Freiheit." },
                        { type: 'p', text: "Entdecken Sie die privaten Erlebnisse von NORTHÉ." },
                    ]
                },
                {
                    slug: "aveiro-e-coimbra-a-partir-do-porto",
                    title: "Aveiro & Coimbra ab Porto",
                    subtitle: "Kanäle der Ria, Costa Nova und Portugals Älteste Universität",
                    excerpt: "Eine exklusive Privattour, die den maritimen Zauber der Ria de Aveiro, gestreifte Strandhäuser und Coimbras weltberühmte Universität vereint.",
                    date: "24. September 2026",
                    category: "Kultur & Tradition",
                    image: "/images/tours/coimbra-aveiro/coimbra-aveiro-private-tour-1.webp",
                    readTime: "5 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Nur wenige Tagesausflüge ab Porto bieten einen so faszinierenden Bogen zwischen maritimer Romantik und jahrhundertealtem Gelehrtentum wie die Reise nach Aveiro und Coimbra." },
                        { type: 'p', text: "In Aveiro, dem 'Venedig Portugals', bestimmt das Lagunensystem der Ria das Stadtbild. An Bord eines kunstvoll bemalten Moliceiro-Boots gleiten Sie unter malerischen Brücken hindurch und bestaunen feinste Jugendstil-Paläste." },
                        { type: 'p', text: "Wenige Minuten entfernt lockt Costa Nova mit seinen berühmten 'Palheiros': historischen Holzhäusern mit bunten Längsstreifen direkt hinter den Atlantikdünen — der perfekte Ort für die traditionelle Süßspeise Ovos Moles." },
                        { type: 'p', text: "Weiter südlich ragt Coimbra majestätisch über dem Fluss Mondego auf. Als Wiege portugiesischer Könige und Sitz der ältesten Universität des Landes (1290 gegründet, UNESCO-Welterbe) hütet sie die prachtvolle barocke Joanina-Bibliothek mit tausenden kostbaren Folianten." },
                        { type: 'p', text: "Erleben Sie zwei der geschichtsträchtigsten Städte Zentralportugals mit höchstem individuellem Reisekomfort." },
                        { type: 'p', text: "Entdecken Sie die private Tour Aveiro & Coimbra mit NORTHÉ." }
                    ]
                },
                {
                    slug: "nazare-obidos-e-sao-martinho-do-porto",
                    title: "Nazaré & Óbidos: Riesenwellen und Mittelalterliche Festungsmauern",
                    subtitle: "Die Silberküste zwischen Urgewalten des Atlantiks und königlicher Festungsidylle",
                    excerpt: "Vom weltberühmten Leuchtturm-Felsen in Nazaré mit den höchsten Wellen der Welt bis zur blumengeschmückten Burgstadt Óbidos.",
                    date: "26. September 2026",
                    category: "Silberküste",
                    image: "/images/tours/nazare-sao-martinho/1.webp",
                    readTime: "5 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Die portugiesische Silberküste ist ein Schauplatz ungezähmter Ozeankräfte und geschichtsträchtiger Seefahrertradition." },
                        { type: 'p', text: "In Nazaré bietet die Klippe des Sítio da Nazaré atemberaubende Ausblicke. Am Fort São Miguel Arcanjo mit seinem roten Leuchtturm erzeugt der über 5.000 Meter tiefe Unterwassercanyon von Nazaré die gewaltigsten Surfwellen des Planeten." },
                        { type: 'p', text: "Gleichzeitig bewahrt der Fischerort seine Wurzeln: Frauen in traditionellen sieben Röcken, getrockneter Fisch am Sandstrand und fangfrische Meeresfrüchte von herausragender Qualität." },
                        { type: 'p', text: "Entlang der Küste öffnet sich die geschützte Muschelbucht von São Martinho do Porto mit spiegelglattem, smaragdgrünem Wasser." },
                        { type: 'p', text: "Den krönenden Abschluss bildet das mittelalterliche Óbidos, einst königliches Hochzeitsgeschenk der portugiesischen Monarchen. Spazieren Sie auf zinnenbewehrten Mauern und genießen Sie den berühmten Sauerkirschlikör Ginjinha aus Schokoladenbechern." },
                        { type: 'p', text: "Erleben Sie die Silberküste exklusiv mit den privaten Reisen von NORTHÉ." }
                    ]
                },
                {
                    slug: "fatima-batalha-e-tomar-monumentos-unesco",
                    title: "Fátima, Batalha & Tomar: Templerorden und UNESCO-Weltkulturerbe",
                    subtitle: "Tiefe Spiritualität, filigrane Gotik und die Geheimnisse der Tempelritter",
                    excerpt: "Eine faszinierende Zeitreise: die Stille von Fátima, die Steinmetzkunst in Batalha und die Templerburg von Tomar.",
                    date: "28. September 2026",
                    category: "Geschichte & UNESCO",
                    image: "/images/tours/fatima-batalha-tomar/1.webp",
                    readTime: "5 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Das historische Dreieck aus Fátima, Batalha und Tomar vereint Glaube, königliche Ritterehre und monumentale Architektur wie kaum eine andere Region Europas." },
                        { type: 'p', text: "In Fátima empfängt das Marienheiligtum Pilger und Reisende aus aller Welt mit einer Atmosphäre tiefer innerer Ruhe auf dem weiten Platz und an der Erscheinungskapelle." },
                        { type: 'p', text: "Das Kloster von Batalha (Santa Maria da Vitória) gilt als Meilenstein der Gotik und Manuelinik. Erbaut zum Dank für den Sieg in der Schlacht von Aljubarrota 1385, verzaubert es mit seinen unvollendeten Kapellen (Capelas Imperfeitas) — einem offenen Achteckbau aus filigranem Kalkstein." },
                        { type: 'p', text: "In Tomar ragt die gewaltige Templerburg mit dem Christuskloster empor. Die romanisch-byzantinische Charola und das berühmte manuelinische Kapitelfenster bezeugen den Geist der Entdeckungsfahrten Portugals." },
                        { type: 'p', text: "Ein unverzichtbares Erlebnis für Kulturreisende und Geschichtsliebhaber." },
                        { type: 'p', text: "Buchen Sie Ihre private Entdeckungsreise nach Fátima, Batalha und Tomar mit NORTHÉ." }
                    ]
                },
                {
                    slug: "ponte-de-lima-e-barcelos-minho-vinho-verde",
                    title: "Ponte de Lima & Barcelos: Mittelalterlicher Adel & die Vinho Verde-Route",
                    subtitle: "Portugals ältestes Dorf, die Hahnenlegende und die Seele des Minho",
                    excerpt: "Entdecken Sie den aristokratischen Minho: jahrtausendealte Römerbrücken, Adelshäuser, die Wiege des Galo de Barcelos und erlesene Vinho Verde-Weingüter.",
                    date: "30. September 2026",
                    category: "Minho & Vinho Verde",
                    image: "/images/tours/ponte-de-lima-douro/ponte-de-lima-historic-wine-centre.webp",
                    readTime: "4 Min. Lesezeit",
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: "Das Minho verkörpert die grünste, gastfreundlichste und nobelste Region Nordportugals — die Heimat des frischen, mineralischen Vinho Verde." },
                        { type: 'p', text: "Ponte de Lima ist stolz darauf, die älteste Stadt Portugals zu sein (gegründet 1125). Die Römerbrücke über den Fluss Lima war Schauplatz der Lethe-Sage, in der die römischen Soldaten fürchteten, im Wasser die Erinnerung an ihre Heimat zu verlieren." },
                        { type: 'p', text: "Beim Spaziergang durch die Altstadt begegnen Ihnen herrschaftliche Adelshäuser, Alleen alter Platanen und das Vinho Verde-Museum (CIPV)." },
                        { type: 'p', text: "In Barcelos hält die Keramikkunst die Legende des Hahns von Barcelos lebendig — des Wappenvogels, der zum Nationalsymbol Portugals wurde." },
                        { type: 'p', text: "Mit privaten Verkostungen der Rebsorten Loureiro und Alvarinho auf traditionsreichen Landgütern ist diese Tour das pure Destillat nordportugiesischer Lebensart." },
                        { type: 'p', text: "Erleben Sie die traditionsreichen Weine und Gutshäuser des Minho mit NORTHÉ." }
                    ]
                }
            ],
        },
        contact: {
            title: 'Gestalten wir Ihr Erlebnis in Portugal?',
            desc: 'Erzählen Sie uns von Ihren Reiseträumen. Wir kreieren ein privates Erlebnis ganz nach den Wünschen Ihrer Gruppe.',
            ctaBook: 'Erlebnis Buchen', ctaWhatsapp: 'Per WhatsApp Chatten',
            emailLabel: 'E-Mail', email: EMAIL,
            phoneLabel: 'Telefon', phone: '+351 911 923 499',
        },
        tailorMade: {
            badge: 'Maßgeschneiderte Erlebnisse',
            title: 'Wünschen Sie etwas Besonderes?',
            subtitle: 'Wir gestalten personalisierte Privaterlebnisse.',
            desc: 'Individuell abgestimmt auf Ihre Interessen, Ihr persönliches Reisetempo und jeden besonderen Anlass.',
            collection: 'North Private Collection',
            collectionDesc: 'Private Dinners, historische Weingüter und unvergessliche Augenblicke.',
            destinations: ['Porto', 'Douro Valley', 'Alcobaça', 'Amarante', 'Arouca', 'Aveiro', 'Batalha', 'Barcelos', 'Braga', 'Coimbra', 'Fátima', 'Gerês', 'Guimarães', 'Lamego', 'Nazaré', 'Óbidos', 'Ponte de Lima', 'Santa Maria da Feira', 'São Martinho do Porto', 'Tomar'],
            cta: 'Mein Erlebnis Gestalten',
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
                { title: '1. Identifizierung des Verantwortlichen', content: 'Verantwortlich für die Datenverarbeitung ist "NORTHÉ" (NIPC: 518 190 145) mit Sitz in Portugal. Wir verpflichten uns zum Schutz personenbezogener Daten gemäß der DSGVO.' },
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
                { title: '1. Geltungsbereich', content: 'Diese Bedingungen gelten für alle Dienstleistungen von NORTHÉ.' },
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
