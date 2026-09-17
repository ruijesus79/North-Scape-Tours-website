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
export const TIKTOK_PAGE = 'https://www.tiktok.com/@northe.tours';
export const YOUTUBE_PAGE = 'https://www.youtube.com/@NorthETours';
export const GETYOURGUIDE_LINK = 'https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/';
export const CONTENT = {
    pt: {
        nav: {
            home: 'Início', tours: 'Private Tours', douro: 'Douro Valley', north: 'Northern Portugal', porto: 'Porto Experiences', about: 'Sobre a NORTHÉ', reviews: 'Avaliações',
            blog: 'Blog', contact: 'Contacto', book: 'Reservar', bookNow: 'Reservar Agora',
        },
        hero: {
            subtitle: 'Experiências Exclusivas no Norte de Portugal',
            title1: 'Experiências Privadas de Excelência',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: 'Tours 100% privados a partir do Porto com transporte executivo e motorista-guia especialista em vinhos.',
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
            badge: 'Sobre Nós',
            title: 'Além do Horizonte: A Essência da NORTHÉ',
            paragraphs: [
                'Na NORTHÉ, acreditamos que o luxo não se define pelo que se vê, mas pelo que se sente. Nascemos da paixão por revelar o Douro invisível - aquele que não aparece nos mapas turísticos, mas que pulsa nas quintas privadas, no silêncio das águas ao entardecer e nos sabores de uma cozinha que honra a terra.',
                'A nossa missão é desenhar experiências, não apenas trajetos. Cada detalhe, desde o conforto dos nossos veículos executivos à escolha meticulosa de parceiros com Estrela Michelin, é pensado para quem valoriza o tempo, a privacidade e a autenticidade.',
                'Não somos apenas guias; somos contadores de histórias e facilitadores de momentos. No banco de trás da nossa exclusividade, o Douro deixa de ser um destino para passar a ser uma memória eterna.',
                'Bem-vindo ao Douro, no seu ritmo. Bem-vindo à NORTHÉ.',
            ],
            signature: 'NORTHÉ',
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
                { text: 'Celebrámos o nosso aniversário com a NORTHÉ e foi o ponto alto da nossa viagem. Luxo real.', author: 'Michael & Sarah Chen', location: 'Nova Iorque, EUA', flag: '🇺🇸', stars: 5 },
                { text: 'O guia sabia tudo sobre a história da região. Uma viagem imperdível para amantes de vinho.', author: 'Alessandro Rossi', location: 'Milão, Itália', flag: '🇮🇹', stars: 4.5 },
                { text: 'Transfer impecável e tour ainda melhor. Serviço de primeira classe do início ao fim.', author: 'Lucía Fernández', location: 'Madrid, Espanha', flag: '🇪🇸', stars: 5 },
                { text: 'Incrível! O Douro é mágico e a equipa da NORTHÉ tornou tudo mais especial.', author: 'Daan van der Berg', location: 'Amesterdão, Holanda', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Tudo o que precisa de saber',
            subtitle: 'Respostas claras e transparentes às dúvidas mais frequentes sobre os nossos tours 100% privados, comodidades, reservas e cancelamentos.',
            items: [
                {
                    q: 'Os tours são mesmo 100% privados ou tenho de partilhar a carrinha com outras pessoas?',
                    a: 'Todos os tours da NORTHÉ são rigorosamente 100% privados e exclusivos para si e para o seu grupo (de 1 a 8 pessoas). Nunca juntamos desconhecidos na mesma viatura. O veículo executivo Mercedes-Benz e o motorista-guia especialista em vinhos estarão inteiramente ao vosso serviço, permitindo desfrutar de cada paragem e paisagem ao vosso próprio ritmo.'
                },
                {
                    q: 'O que está incluído no valor apresentado? Existem custos adicionais ocultos?',
                    a: 'Não existem quaisquer custos ocultos. O valor inclui: transporte executivo exclusivo porta-a-porta (recolha e entrega no hotel/alojamento no Porto ou Gaia), motorista-guia certificado multilingue, água mineral a bordo, Wi-Fi, portagens e todos os seguros legais (RNAAT 284/2026). Consoante o tour selecionado, estão também incluídas as visitas guiadas às quintas com provas de vinhos DOC e do Porto, almoços regionais completos com harmonização vínica e cruzeiros em barco rabelo privado.'
                },
                {
                    q: 'Qual é o tamanho máximo do grupo e como funciona o preço por pessoa?',
                    a: 'A nossa frota executiva acomoda com o máximo conforto de 1 até 8 passageiros por viatura. O valor base é apresentado por veículo/grupo privado, o que significa que para famílias ou pequenos grupos (4 a 8 pessoas), o custo por pessoa fica extremamente vantajoso (a partir de ~€49 a €65 por pessoa), mantendo o padrão inigualável de um serviço de luxo 100% privado.'
                },
                {
                    q: 'Onde e a que horas é feita a recolha (pick-up) e o regresso?',
                    a: 'Recolhemos o seu grupo diretamente no átrio do seu hotel, apartamento, Airbnb ou residência na cidade do Porto e Vila Nova de Gaia, habitualmente entre as 08h30 e as 09h00 (ou num horário alternativo à sua escolha). No final do dia (cerca das 18h00 - 18h30), regressamos comodamente ao mesmo local ou deixamo-lo num restaurante à sua escolha para o jantar.'
                },
                {
                    q: 'Qual é a política de cancelamento e de alteração de datas?',
                    a: 'Oferecemos cancelamento gratuito e reembolso integral para cancelamentos solicitados até 48 horas antes da hora de início do tour. Caso os seus planos de voo sofram alterações ou surja algum imprevisto, ajustamos a data do seu tour sem qualquer custo adicional, sujeito à disponibilidade de calendário.'
                },
                {
                    q: 'Os tours são adequados para famílias com crianças ou bebés?',
                    a: 'Com certeza. Sendo uma viagem 100% privada, temos total flexibilidade para fazer pausas sempre que necessário. Disponibilizamos gratuitamente cadeirinhas auto homologadas e assentos elevatórios para bebés e crianças (basta indicar as idades na reserva). Os nossos parceiros dispõem de menus infantis e opções acolhedoras para toda a família.'
                },
                {
                    q: 'Posso personalizar o roteiro, visitar quintas específicas ou celebrar uma ocasião especial?',
                    a: 'Sim! A personalização é uma das maiores marcas da NORTHÉ. Caso pretenda visitar uma quinta de renome específica, realizar uma sessão fotográfica com fotógrafo profissional, celebrar uma lua-de-mel, aniversário ou pedido de casamento nas vinhas, criamos um itinerário sob medida e cuidamos de todos os pormenores.'
                },
                {
                    q: 'Como posso reservar e quais as formas de pagamento seguras disponíveis?',
                    a: 'A reserva é simples, rápida e segura. Pode iniciar o pedido diretamente através do nosso WhatsApp oficial (+351 911 923 499) para atendimento imediato ou preenchendo o formulário de cotação no nosso site. Aceitamos pagamentos por transferência bancária (SEPA/SWIFT), cartões de crédito/débito internacionais (Visa, Mastercard, Amex), MB Way e numerário, sempre com emissão de fatura oficial.'
                },
            ],
        },
        blog: {
            badge: 'Jornal',
            title: 'Diário do Douro',
            subtitle: 'Notícias, segredos e as últimas do enoturismo em Portugal.',
            readMore: 'Ler História',
            bookCta: 'Reservar esta experiência',
            readTimeDefault: '4 min de leitura',
            items: [
                {
                    slug: 'vindimas-outono-douro-lagares-2026',
                    title: 'Vindimas no Douro: A Magia dos Lagares de Granito e as Provas Exclusivas de Outono',
                    excerpt: 'Quando as vinhas em socalcos ganham tonalidades douradas e acobreadas, o Douro entra na sua época mais apaixonante. Um convite privado para viver a pisa a pé, almoços nas vinhas e colheitas raras.',
                    date: '15 de Setembro de 2026',
                    category: 'Vindimas & Tradição',
                    image: '/images/blog/2026/harvest.jpg',
                    readTime: '4 min de leitura',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Setembro e outubro trazem ao Vale do Douro uma luz única e o perfume inconfundível do mosto em fermentação. É a temporada dourada da colheita, o momento em que séculos de saber-fazer ganham vida nas encostas esculpidas pelos rios Douro e Pinhão.' },
                        { type: 'p', text: 'Longe das multidões das excursões turísticas convencionais, a experiência de vindima com a NORTHÉ é desenhada sob o signo da privacidade absoluta. O seu grupo é recebido por enólogos e famílias produtoras em quintas boutique de acesso reservado, onde a hospitalidade duriense é vivida com autenticidade desarmante.' },
                        { type: 'p', text: 'Entre o ritual secular da pisa a pé nos lagares de granito, ao som de cantares tradicionais, e almoços harmonizados servidos nos terraços com vista panorâmica sobre o rio, cada momento é um tributo à gastronomia e aos grandes vinhos de mesa e do Porto.' },
                        { type: 'p', text: 'Para celebrar esta época especial, a NORTHÉ disponibiliza roteiros de dia inteiro (Tour North-001 e North-002) com transporte executivo a partir do Porto, permitindo vivenciar as vindimas tardias e as primeiras prensagens com todo o conforto e exclusividade.' }
                    ]
                },
                {
                    slug: 'rota-secreta-minho-alvarinho-palacios-2026',
                    title: 'Além do Douro: A Rota Secreta do Vinho Alvarinho e os Palácios do Minho',
                    excerpt: 'Descubra a nobreza do Norte de Portugal entre os solares barrocos de Ponte de Lima, os castelos medievais de Guimarães e as quintas onde nasce o Alvarinho mais elegante do mundo.',
                    date: '8 de Setembro de 2026',
                    category: 'Norte de Portugal',
                    image: '/images/blog/2026/quinta-estate.jpg',
                    readTime: '4 min de leitura',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Se o Douro é o coração do vinho fortificado e dos tintos monumentais, o Minho é a alma verde, fresca e aristocrática do Norte de Portugal. Uma região de solares de granito com brasões seculares, jardins labirínticos e vinhedos que produzem brancos de craveira internacional.' },
                        { type: 'p', text: 'Numa viagem privada com partida do Porto em viatura executiva, a NORTHÉ conduz o seu grupo pelas estradas cénicas do Alto Minho, explorando a sub-região de Monção e Melgaço, berço consagrado da casta nobre Alvarinho, caracterizada pela sua mineralidade vibrante e aromas florais inebriantes.' },
                        { type: 'p', text: 'O itinerário conjuga visitas privadas a palácios históricos e quintas familiares com almoços gastronómicos onde o peixe fresco da costa, os arrozes de fumeiro e a doçaria conventual são servidos com o refinamento que a região exige.' },
                        { type: 'p', text: 'Uma proposta perfeita para quem deseja alargar os horizontes para lá do Vale do Douro, descobrindo o património da UNESCO em Guimarães e Braga ou a beleza intemporal de Ponte de Lima com o nosso Tour Privado Minho & Vinhos Verdes.' }
                    ]
                },
                {
                    slug: 'douro-porto-wine-festival-2026', title: 'Douro & Porto Wine Festival: O Evento do Verão em Lamego', excerpt: 'Em pleno coração do Douro, Lamego foi, nos dias 3 e 4 de julho, o epicentro dos melhores vinhos portugueses, gastronomia de autor e música ao vivo.', date: '4 de Julho de 2026', category: 'Eventos', image: '/images/blog/2026/wine-festival-julho-2026.jpg', readTime: '3 min de leitura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'O Douro tem calendário próprio. E no início de julho, Lamego transforma-se no epicentro do vinho português.' },
                        { type: 'p', text: 'O Douro & Porto Wine Festival regressou nos dias 3 e 4 de julho ao Porto Comercial de Cambres, em Lamego, reunindo os melhores produtores da região num evento que combina, com elgância rara, a degustação de vinhos de excelência com gastronomia de autor e música ao vivo.' },
                        { type: 'p', text: 'Para quem nos visita nesta época do ano, o festival representa uma oportunidade única: provar dezenas de referências durienses num único fim de semana, dialogar diretamente com enólogos e descobrir os vinhos que ainda não chegaram às prateleiras das lojas especializadas.' },
                        { type: 'p', text: 'Na NORTHÉ, combinamos a experiência do festival com o nosso tour privado pelo vale — um dia que começa entre vinhas e termina com o rio a dourar ao pôr do sol. Reservas com antecedência recomendadas.' }
                    ]
                },
                {
                    slug: 'vindima-antecipada-douro-2026', title: 'Vindima 2026: A Colheita Começa Mais Cedo no Douro', excerpt: 'As alterações climáticas estão a reescrever o ritmo da vindima no Douro. Agosto é o novo setembro — e quem chegar primeiro vive a experiência mais autêntica.', date: '4 de Julho de 2026', category: 'Tendências', image: '/images/blog/2026/vindima-antecipada-2026.jpg', readTime: '4 min de leitura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Há algo de silencioso e urgente no ar do Douro neste verão. Os cachos amadurecem mais depressa. As quintas preparam-se. E a vindima de 2026 promete chegar antes do esperado.' },
                        { type: 'p', text: 'As alterações climáticas estão a redefinir o ritmo secular da colheita no Douro Vinhateiro. O que historicamente ocorria em outubro começa hoje, em muitas quintas, logo no início de agosto — por vezes até em julho. O calor intenso acelera a maturação das uvas, comprimindo uma janela de tempo que, outrora, permitia semanas de observação cuidadosa.' },
                        { type: 'p', text: 'Para os produtores, este é um desafio técnico e humano de grande exigência. Para os viajantes, é uma oportunidade rara: estar no Douro quando a região está no seu momento mais vivo, mais autêntico e mais sensorial.' },
                        { type: 'p', text: 'As experiências de vindima imersivas — colheita manual, pisa a pé em lagares de granito, almoços regionais com harmonização vínica — estão a esgotar-se rapidamente. A nossa recomendação: não esperes por setembro. O Douro de agosto é, cada vez mais, o Douro da vindima.' }
                    ]
                },
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"O Melhor Vinho do Ano" é um tinto do Douro', excerpt: 'O prestigiado prémio foi para um vinho do Douro que custa 75 euros, reafirmando a qualidade excecional da região.', date: '13 de Maio de 2026', category: 'Prémios', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de leitura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'A crítica especializada voltou a premiar a excelência do Douro. O título de "Melhor Vinho do Ano" foi atribuído a um tinto duriense, uma distinção que reforça o prestígio internacional da mais antiga região demarcada do mundo.' },
                        { type: 'p', text: 'Na NORTHÉ, proporcionamos aos nossos clientes degustações premium que incluem colheitas premiadas nas melhores quintas da região. Venha provar a excelência connosco.' }
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
            desc: 'Podemos personalizar a sua viagem privada pelo Norte de Portugal, com a opção de estender a sua experiência até Lisboa.',
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
            title1: 'Exclusive Private Journeys',
            title2: 'Douro Valley · Porto · Northern Portugal',
            desc: '100% private bespoke tours departing from Porto with executive transport and wine-expert guide.',
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
            badge: 'About Us',
            title: 'Beyond the Horizon: The Essence of NORTHÉ',
            paragraphs: [
                'At NORTHÉ, we believe that luxury is not defined by what you see, but by what you feel. We were born from a passion to reveal the invisible Douro - the one that does not appear on tourist maps, but that pulses in private estates, in the silence of the waters at dusk and in the flavors of a cuisine that honors the land.',
                'Our mission is to design experiences, not just routes. Every detail, from the comfort of our executive vehicles to the meticulous choice of partners with Michelin Star, is thought for those who value time, privacy and authenticity.',
                'We are not just guides; we are storytellers and facilitators of moments. In the back seat of our exclusivity, the Douro ceases to be a destination to become an eternal memory.',
                'Welcome to the Douro, at your own pace. Welcome to NORTHÉ.',
            ],
            signature: 'NORTHÉ',
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
                { text: 'We celebrated our anniversary with NORTHÉ and it was the highlight of our trip. Real luxury.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'The guide knew everything about the history of the region. A must-trip for wine lovers.', author: 'Alessandro Rossi', location: 'Milan, Italy', flag: '🇮🇹', stars: 4.5 },
                { text: 'Impeccable transfer and even better tour. First class service from start to finish.', author: 'Lucía Fernández', location: 'Madrid, Spain', flag: '🇪🇸', stars: 5 },
                { text: 'Amazing! The Douro is magical and the NORTHÉ team made everything special.', author: 'Daan van der Berg', location: 'Amsterdam, Netherlands', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Everything you need to know',
            subtitle: 'Clear, transparent answers about our 100% private tours, premium amenities, booking process, and flexible cancellations.',
            items: [
                {
                    q: 'Are the tours strictly 100% private, or will we share the vehicle with strangers?',
                    a: 'Every NORTHÉ experience is strictly 100% private and reserved exclusively for you and your party (from 1 to 8 guests). We never combine separate bookings in the same vehicle. Your luxury Mercedes-Benz executive van and certified wine-expert driver-guide are at your sole disposal throughout the entire day, allowing you to enjoy each scenic stop and winery at your own leisure.'
                },
                {
                    q: 'What is included in the quoted price? Are there any hidden fees?',
                    a: 'There are absolutely zero hidden fees. The price includes: private door-to-door executive transport (pickup and drop-off at your hotel or apartment in Porto/Vila Nova de Gaia), certified multilingual wine guide, bottled water onboard, Wi-Fi, highway tolls, and all mandatory official passenger insurance (RNAAT 284/2026). Depending on the selected tour, winery visits with premium DOC & Port tastings, gourmet regional lunches with wine pairings, and private river cruises are fully included.'
                },
                {
                    q: 'What is the maximum party size and how does pricing work per person?',
                    a: 'Our executive fleet comfortably accommodates from 1 to 8 guests per vehicle. The pricing is structured per private party/vehicle, which means that for families or groups of 4 to 8 guests, the cost per person becomes exceptionally attractive (starting from ~€49 to €65 per person) while guaranteeing the supreme comfort and exclusivity of a high-end private journey.'
                },
                {
                    q: 'Where and what time is hotel pickup and drop-off?',
                    a: 'We pick your group up directly at your hotel lobby, Airbnb, or residence in Porto or Vila Nova de Gaia, typically between 8:30 AM and 9:00 AM (or at a customized time of your choosing). At the end of the day (around 6:00 PM – 6:30 PM), we return you comfortably to your accommodation or drop you off at a dinner restaurant of your choice.'
                },
                {
                    q: 'What is your cancellation and date reschedule policy?',
                    a: 'We offer full 100% refunds for cancellations requested up to 48 hours prior to the scheduled tour start time, no questions asked. Should your travel or flight dates shift unexpectedly, we will gladly reschedule your booking to another available date without any penalty or rebooking fees.'
                },
                {
                    q: 'Are the tours suitable for families with young children or infants?',
                    a: 'Absolutely. Because your tour is completely private, you set the pace and we can pause whenever your family needs a break. We provide certified baby seats and child booster seats free of charge upon request (please indicate children\'s ages when inquiring). Partner estates and restaurants offer welcoming spaces and dedicated children\'s menus.'
                },
                {
                    q: 'Can I customize the itinerary, visit specific estates, or celebrate a milestone?',
                    a: 'Yes! Bespoke tailoring is NORTHÉ\'s trademark. Whether you have a dream winery on your bucket list, wish to hire a professional photographer, celebrate a romantic honeymoon, anniversary, or orchestrate a surprise marriage proposal among the vineyard terraces, our team will orchestrate every detail flawlessly.'
                },
                {
                    q: 'How do I book and what secure payment methods are accepted?',
                    a: 'Booking is swift and effortless. You can message us directly on official WhatsApp (+351 911 923 499) for immediate confirmation or submit our online inquiry form. We accept SEPA/SWIFT bank wire transfers, major international debit/credit cards (Visa, Mastercard, Amex), MB Way, and cash, always backed by an official invoice and booking voucher.'
                },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'The Douro Diary',
            subtitle: 'News, secrets and the latest from wine tourism in Portugal.',
            readMore: 'Read Story',
            bookCta: 'Book this experience',
            readTimeDefault: '4 min read',
            items: [
                {
                    slug: 'vindimas-outono-douro-lagares-2026',
                    title: 'Douro Harvest: The Magic of Granite Lagares & Exclusive Autumn Wine Tastings',
                    excerpt: 'As terraced vineyards turn shades of deep gold and amber, the Douro enters its most passionate season. An exclusive private invitation to experience foot treading, vineyard lunches, and rare vintage releases.',
                    date: 'September 15, 2026',
                    category: 'Harvest & Tradition',
                    image: '/images/blog/2026/harvest.jpg',
                    readTime: '4 min read',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'September and October bestow upon the Douro Valley a luminous autumn light and the unmistakable aroma of fermenting must. It is the golden harvest season, when centuries of winemaking heritage come vibrantly alive across steep schist hillsides carved by the Douro and Pinhão rivers.' },
                        { type: 'p', text: 'Far from crowded standard coach tours, harvest experiences with NORTHÉ are curated with absolute privacy and intimacy. Your party is hosted by estate winemakers and heritage families at secluded boutique quintas, where warm Portuguese hospitality is lived in its purest, most authentic form.' },
                        { type: 'p', text: 'From the time-honored ritual of foot treading inside granite lagares to the sound of traditional folk melodies, to gourmet estate lunches served on scenic panoramic terraces overlooking the valley, every moment is an ode to refined gastronomy and world-class DOC and Port wines.' },
                        { type: 'p', text: 'To celebrate this momentous season, NORTHÉ offers tailored full-day private journeys (Tour North-001 and North-002) with executive Mercedes-Benz transport directly from Porto, allowing you to immerse in late harvests and early pressings in complete comfort and prestige.' }
                    ]
                },
                {
                    slug: 'rota-secreta-minho-alvarinho-palacios-2026',
                    title: 'Beyond the Douro: The Secret Alvarinho Route & Aristocratic Palaces of Minho',
                    excerpt: 'Explore Northern Portugal\'s noble soul through the baroque manor estates of Ponte de Lima, medieval castles of Guimarães, and boutique quintas producing the world\'s finest Alvarinho.',
                    date: 'September 8, 2026',
                    category: 'Northern Portugal',
                    image: '/images/blog/2026/quinta-estate.jpg',
                    readTime: '4 min read',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'While the Douro Valley reigns supreme for fortified Ports and monumental reds, the Minho province represents Portugal\'s fresh, lush, and aristocratic soul. A majestic territory of granite manor estates, ancient coat-of-arms gates, manicured gardens, and world-renowned white wines.' },
                        { type: 'p', text: 'Traveling privately from Porto in an executive Mercedes-Benz van, NORTHÉ whisks your party along scenic routes to the prestigious Monção and Melgaço sub-region—the historic cradle of the noble Alvarinho grape, revered globally for its flinty minerality and captivating citrus-floral aromas.' },
                        { type: 'p', text: 'The curated itinerary seamlessly blends private visits to historic estates with leisurely gastronomic lunches featuring fresh Atlantic seafood, regional delicacies, and centuries-old conventual pastries served with impeccable panache.' },
                        { type: 'p', text: 'The ultimate getaway for discerning travelers wishing to extend their Portuguese stay beyond the Douro, discovering the UNESCO World Heritage centers of Guimarães and Braga or the timeless romance of Ponte de Lima on our Private Minho & Vinho Verde Tour.' }
                    ]
                },
                {
                    slug: 'douro-porto-wine-festival-2026', title: 'Douro & Porto Wine Festival: The Summer Event in Lamego', excerpt: 'At the heart of the Douro, Lamego was, on July 3rd and 4th, the epicentre of the finest Portuguese wines, chef cuisine and live music.', date: 'July 4, 2026', category: 'Events', image: '/images/blog/2026/wine-festival-julho-2026.jpg', readTime: '3 min read', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'The Douro has its own calendar. And in early July, Lamego becomes the epicentre of Portuguese wine.' },
                        { type: 'p', text: 'The Douro & Porto Wine Festival returned on July 3rd and 4th to the Porto Comercial de Cambres in Lamego, bringing together the region\'s finest producers in an event that combines, with rare elegance, exceptional wine tastings with chef cuisine and live music.' },
                        { type: 'p', text: 'For those visiting at this time of year, the festival represents a unique opportunity: to taste dozens of Douro references in a single weekend, speak directly with winemakers, and discover wines yet to reach specialist shop shelves.' },
                        { type: 'p', text: 'At NORTHÉ, we combine the festival experience with our private tour of the valley — a day that begins among vineyards and ends with the river glowing gold at sunset. Advance bookings recommended.' }
                    ]
                },
                {
                    slug: 'vindima-antecipada-douro-2026', title: 'Harvest 2026: Picking Starts Earlier in the Douro', excerpt: 'Climate change is rewriting the rhythm of the harvest in the Douro. August is the new September — and those who arrive first live the most authentic experience.', date: 'July 4, 2026', category: 'Trends', image: '/images/blog/2026/vindima-antecipada-2026.jpg', readTime: '4 min read', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'There is something silent and urgent in the Douro air this summer. The clusters ripen faster. The estates prepare. And the 2026 harvest promises to arrive sooner than expected.' },
                        { type: 'p', text: 'Climate change is redefining the age-old rhythm of the harvest in the Douro Valley. What historically took place in October now begins, at many estates, as early as August — sometimes even July. The intense heat accelerates grape ripening, compressing a window of time that once allowed weeks of careful observation.' },
                        { type: 'p', text: 'For producers, this is a major technical and human challenge. For travellers, it is a rare opportunity: to be in the Douro when the region is at its most alive, most authentic and most sensorial.' },
                        { type: 'p', text: 'Immersive harvest experiences — hand-picking grapes, treading by foot in granite lagares, regional lunches with wine pairings — are filling up fast. Our recommendation: don\'t wait for September. August in the Douro is, increasingly, harvest season.' }
                    ]
                },
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"The Best Wine of the Year" is a Douro Red', excerpt: 'The prestigious award went to a Douro wine, reaffirming the exceptional quality of the region.', date: 'May 13, 2026', category: 'Awards', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min read', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Specialized critics have once again rewarded the excellence of the Douro. The title of "Best Wine of the Year" was awarded to a Douro red, a distinction that reinforces the international prestige of the oldest demarcated region in the world.' },
                        { type: 'p', text: 'At NORTHÉ, we provide our clients with premium tastings that include award-winning vintages at the best estates in the region. Come taste excellence with us.' }
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
            badge: 'Sobre Nosotros',
            title: 'Más allá del horizonte: La esencia de NORTHÉ',
            paragraphs: [
                'En NORTHÉ, creemos que el lujo no se define por lo que se ve, sino por lo que se siente. Nacimos de la pasión por revelar el Duero invisible: aquel que no aparece en los mapas turísticos, sino que late en las fincas privadas, en el silencio de las aguas al atardecer y en los sabores de una cocina que honra la tierra.',
                'Nuestra misión es diseñar experiencias, no solo trayectos. Cada detalle, desde el confort de nuestros vehículos ejecutivos hasta la elección meticulosa de socios con Estrella Michelin, está pensado para quienes valoran el tiempo, la privacidad y la autenticidad.',
                'No somos solo guías; somos contadores de historias y facilitadores de momentos. En el asiento trasero de nuestra exclusividad, el Duero deja de ser un destino para convertirse en un recuerdo eterno.',
                'Bienvenido al Duero, a su propio ritmo. Bienvenido a NORTHÉ.',
            ],
            signature: 'NORTHÉ',
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
                { text: 'Celebramos nuestro aniversario con NORTHÉ y fue lo mejor de nuestro viaje. Lujo real.', author: 'Michael & Sarah Chen', location: 'Nueva York, EE. UU.', flag: '🇺🇸', stars: 5 },
                { text: 'El guía sabía todo sobre la historia della región. Un viaje imprescindible para los amantes del vino.', author: 'Alessandro Rossi', location: 'Milán, Italia', flag: '🇮🇹', stars: 4.5 },
                { text: 'Traslado impecable y tour aún mejor. Servicio de primera clase de principio a fin.', author: 'Lucía Fernández', location: 'Madrid, España', flag: '🇪🇸', stars: 5 },
                { text: '¡Increíble! El Duero es mágico y el equipo de NORTHÉ hizo que todo fuera especial.', author: 'Daan van der Berg', location: 'Ámsterdam, Holanda', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Todo lo que necesita saber',
            subtitle: 'Respuestas claras y transparentes sobre nuestros tours 100% privados, comodidades, reservas y cancelaciones.',
            items: [
                {
                    q: '¿Los tours son realmente 100% privados o se comparte el vehículo con desconocidos?',
                    a: 'Todos los tours de NORTHÉ son estrictamente 100% privados y exclusivos para usted y su grupo (de 1 a 8 personas). Nunca mezclamos reservas distintas en el mismo vehículo. El vehículo ejecutivo Mercedes-Benz y el guía sumiller están dedicados únicamente a ustedes durante toda la jornada, adaptando las paradas y el ritmo a sus preferencias.'
                },
                {
                    q: '¿Qué incluye el precio indicado? ¿Existen costes adicionales ocultos?',
                    a: 'No existen costes ocultos. El precio incluye transporte ejecutivo privado puerta a puerta (recogida y regreso al hotel en Oporto o Vila Nova de Gaia), guía sumiller certificado multilingüe, agua mineral, Wi-Fi, peajes y seguros oficiales (RNAAT 284/2026). Según el tour seleccionado, incluye visitas guiadas a bodegas con catas de vinos DOC y Oporto, almuerzos tradicionales maridados y paseos en barco rabelo privado.'
                },
                {
                    q: '¿Cuál es el tamaño máximo del grupo y cómo funciona el precio por persona?',
                    a: 'Nuestra flota ejecutiva tiene capacidad para 1 a 8 pasajeros por vehículo con máxima comodidad. El precio se cotiza por vehículo/grupo privado, por lo que para familias o grupos de 4 a 8 personas el coste por persona resulta muy ventajoso (desde ~€49 a €65 por persona), disfrutando del lujo inigualable de la máxima privacidad.'
                },
                {
                    q: '¿Dónde y a qué hora se realiza la recogida y el regreso?',
                    a: 'Recogemos a su grupo directamente en la recepción de su hotel, apartamento o alojamiento en Oporto o Vila Nova de Gaia, habitualmente entre las 08:30 y las 09:00 (o en el horario que usted elija). Al finalizar el día (sobre las 18:00 - 18:30), regresamos al punto de partida o le dejamos en el restaurante que prefiera para cenar.'
                },
                {
                    q: '¿Cuál es la política de cancelación y cambio de fecha?',
                    a: 'Ofrecemos cancelación gratuita y reembolso del 100% para cancelaciones realizadas hasta 48 horas antes del inicio del tour. Si sus vuelos o planes sufren cambios imprevistos, reprogramamos la fecha de su tour sin recargo alguno, según disponibilidad.'
                },
                {
                    q: '¿Los tours son adecuados para familias con niños o bebés?',
                    a: 'Por supuesto. Al ser un tour 100% privado, adaptamos el ritmo a las necesidades de su familia. Proporcionamos sillas de coche y elevadores infantiles homologados de forma gratuita (indique las edades al reservar). Nuestros restaurantes colaboradores ofrecen menús infantiles y espacios acogedores.'
                },
                {
                    q: '¿Puedo personalizar el itinerario, visitar bodegas concretas o celebrar una ocasión especial?',
                    a: '¡Sí! La personalización es el sello de NORTHÉ. Si desea visitar una bodega icónica en particular, contratar un fotógrafo profesional, celebrar un aniversario, luna de miel o planear una pedida de mano sorpresa en los viñedos, diseñamos su itinerario a medida cuidando cada detalle.'
                },
                {
                    q: '¿Cómo puedo reservar y qué métodos de pago seguros aceptan?',
                    a: 'Reservar es rápido y seguro. Puede contactarnos directamente por nuestro WhatsApp oficial (+351 911 923 499) para confirmación inmediata o enviar el formulario web. Aceptamos transferencias bancarias, tarjetas de crédito/débito internacionales (Visa, Mastercard, Amex), MB Way y efectivo, con factura oficial.'
                },
            ],
        },
        blog: {
            badge: 'Diario',
            title: 'Diario del Duero',
            subtitle: 'Noticias, secretos y lo último en enoturismo en Portugal.',
            readMore: 'Leer Historia',
            bookCta: 'Reservar esta experiencia',
            readTimeDefault: '4 min de lectura',
            items: [
                {
                    slug: 'vindimas-outono-douro-lagares-2026',
                    title: 'Vendimia en el Duero: La Magia de los Lagares de Granito y Catas Exclusivas de Otoño',
                    excerpt: 'Cuando las terrazas de viñedos se tiñen de dorado y cobre, el Duero entra en su temporada más apasionante. Una invitación privada para vivir el pisado de uva, almuerzos campestres y añadas de colección.',
                    date: '15 de septiembre de 2026',
                    category: 'Vendimia y Tradición',
                    image: '/images/blog/2026/harvest.jpg',
                    readTime: '4 min de lectura',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Septiembre y octubre regalan al Valle del Duero una luz dorada y el aroma embriagador del mosto en fermentación. Es la temporada culmen del año vitivinícola, cuando siglos de tradición cobran vida en las laderas pizarrosas esculpidas por el río.' },
                        { type: 'p', text: 'Lejos de las aglomeraciones de los autobuses turísticos convencionales, la experiencia de vendimia con NORTHÉ se concibe con absoluta privacidad. Su grupo es recibido por enólogos y propietarios en fincas boutique de acceso restringido, donde la hospitalidad portuguesa se siente en su expresión más auténtica.' },
                        { type: 'p', text: 'Desde el rito secular del pisado de la uva a pie en lagares de granito al son de melodías tradicionales, hasta almuerzos gastronómicos en terrazas panorámicas con vistas al río, cada instante rinde homenaje a la alta cocina regional y a los mejores vinos DOC y Oporto.' },
                        { type: 'p', text: 'Para disfrutar de este momento único, NORTHÉ ofrece itinerarios privados de día completo (Tour North-001 y North-002) con transporte ejecutivo desde Oporto, permitiendo presenciar las vendimias tardías con todo el confort y distinción.' }
                    ]
                },
                {
                    slug: 'rota-secreta-minho-alvarinho-palacios-2026',
                    title: 'Más Allá del Duero: La Ruta Secreta del Vino Alvarinho y los Palacios del Miño',
                    excerpt: 'Descubra la nobleza del Norte de Portugal entre los pazos solariegos de Ponte de Lima, los castillos de Guimarães y las quintas donde nace el Alvarinho más cotizado del mundo.',
                    date: '8 de septiembre de 2026',
                    category: 'Norte de Portugal',
                    image: '/images/blog/2026/quinta-estate.jpg',
                    readTime: '4 min de lectura',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Si el Duero es la cuna del vino de Oporto y los tintos monumentales, el Miño es el alma verde, fresca y señorial del Norte de Portugal. Una tierra de pazos de granito con blasones centenarios, jardines laberínticos y viñedos de renombre universal.' },
                        { type: 'p', text: 'Viajando en privado desde Oporto en una van ejecutiva Mercedes-Benz, NORTHÉ guía a su grupo por los paisajes bucólicos de Monção y Melgaço, subregión madre de la uva Alvarinho, famosa por su mineralidad vibrante y aromas cítricos y florales.' },
                        { type: 'p', text: 'El recorrido combina visitas exclusivas a palacios históricos con comidas gastronómicas donde el marisco del Atlántico, las carnes autóctonas y los dulces conventuales se degustan con la máxima delicadeza.' },
                        { type: 'p', text: 'Una escapada perfecta para quienes desean ampliar horizontes más allá del Duero, recorriendo los centros Patrimonio de la UNESCO de Guimarães y Braga o el encanto de Ponte de Lima con nuestro Tour Privado Miño & Vinos Verdes.' }
                    ]
                },
                {
                    slug: 'douro-porto-wine-festival-2026', title: 'Douro & Porto Wine Festival: El Evento del Verano en Lamego', excerpt: 'En el corazón del Duero, Lamego fue, los días 3 y 4 de julio, el epicentro de los mejores vinos portugueses, gastronomía de autor y música en vivo.', date: '4 de julio de 2026', category: 'Eventos', image: '/images/blog/2026/wine-festival-julho-2026.jpg', readTime: '3 min de lectura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'El Duero tiene su propio calendario. Y a principios de julio, Lamego se convierte en el epicentro del vino portugués.' },
                        { type: 'p', text: 'El Douro & Porto Wine Festival regresó los días 3 y 4 de julio al Porto Comercial de Cambres, en Lamego, reuniendo a los mejores productores de la región en un evento que combina, con rara elegancia, catas de vinos excepcionales con gastronomía de autor y música en vivo.' },
                        { type: 'p', text: 'Para quienes nos visitan en esta época del año, el festival representa una oportunidad única: degustar docenas de referencias del Duero en un solo fin de semana, dialogar directamente con enólogos y descubrir vinos que aún no han llegado a las tiendas especializadas.' },
                        { type: 'p', text: 'En NORTHÉ, combinamos la experiencia del festival con nuestro tour privado por el valle — un día que comienza entre viñas y termina con el río dorándose al atardecer. Se recomienda reservar con antelación.' }
                    ]
                },
                {
                    slug: 'vindima-antecipada-douro-2026', title: 'Vendimia 2026: La Cosecha Comienza Más Temprano en el Duero', excerpt: 'El cambio climático está reescribiendo el ritmo de la vendimia en el Duero. Agosto es el nuevo septiembre — y quien llega primero vive la experiencia más auténtica.', date: '4 de julio de 2026', category: 'Tendencias', image: '/images/blog/2026/vindima-antecipada-2026.jpg', readTime: '4 min de lectura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Hay algo silencioso y urgente en el aire del Duero este verano. Los racimos maduran más deprisa. Las fincas se preparan. Y la vendimia de 2026 promete llegar antes de lo esperado.' },
                        { type: 'p', text: 'El cambio climático está redefiniendo el ritmo secular de la cosecha en el Valle del Duero. Lo que históricamente ocurría en octubre comienza hoy, en muchas fincas, ya a principios de agosto — a veces incluso en julio. El intenso calor acelera la maduración de las uvas, comprimiendo una ventana de tiempo que, antes, permitía semanas de observación cuidadosa.' },
                        { type: 'p', text: 'Para los productores, este es un gran reto técnico y humano. Para los viajeros, es una oportunidad única: estar en el Duero cuando la región está en su momento más vivo, más auténtico y más sensorial.' },
                        { type: 'p', text: 'Las experiencias de vendimia inmersivas — recolección manual, pisado en lagares de granito, almuerzos regionales con maridaje — se agotan rápidamente. Nuestra recomendación: no espere a septiembre. El Duero de agosto es, cada vez más, el Duero de la vendimia.' }
                    ]
                },
                {
                    slug: 'melhor-vinho-do-ano-douro', title: '"El Mejor Vino del Año" es un Tinto del Duero', excerpt: 'El prestigioso premio fue para un vino del Duero, reafirmando la excepcional calidad de la región.', date: '13 de mayo de 2026', category: 'Premios', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de lectura', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La crítica especializada ha vuelto a premiar la excelencia del Duero. El título de "Mejor Vino del Año" fue otorgado a un tinto duriense, una distinción que refuerza el prestigio internacional de la región demarcada más antigua del mundo.' },
                        { type: 'p', text: 'En NORTHÉ, brindamos a nuestros clientes catas premium que incluyen cosechas premiadas en las mejores fincas de la región. Venga a degustar la excelencia con nosotros.' }
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
            badge: 'À Propos',
            title: 'Au-delà de l\'horizon : L\'âme de NORTHÉ',
            paragraphs: [
                'Chez NORTHÉ, nous croyons que le luxe ne se définit pas par ce que vous voyez, mais par ce que vous ressentez. Nous sommes nés d\'une passion pour révéler le Douro invisible - celui qui n\'apparaît pas sur les cartes touristiques, mais qui vibre au sein des domaines privés, dans le silence du fleuve au crépuscule et dans les saveurs d\'une cuisine qui honore la terre.',
                'Notre mission est de concevoir des expériences, pas des itinéraires. Chaque détail, du confort de nos véhicules exécutifs à la sélection méticuleuse de partenaires étoilés au Michelin, est pensé pour ceux qui apprécient le temps, l\'intimité et l\'authenticité.',
                'Nous ne sommes pas de simples guides ; nous sommes des conteurs et des curateurs de moments inoubliables. À l\'arrière de notre exclusivité, le Douro cesse d\'être une destination pour devenir un souvenir éternel.',
                'Bienvenue dans le Douro, à votre propre rythme. Bienvenue chez NORTHÉ.',
            ],
            signature: 'NORTHÉ',
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
                { text: 'Meilleure expérience jamais vécue dans le Douro ! La balade en bateau au coucher du soleil était inoubliable. Je recommande vivement NORTHÉ.', author: 'Carlos Mendes', location: 'São Paulo, Brésil', flag: '🇧🇷', stars: 5 },
                { text: 'Une journée parfaite dans la vallée du Douro ! La dégustation de vins était de premier ordre et le paysage à couper le souffle. Nous reviendrons sans hésiter.', author: 'Hannah Müller', location: 'Munich, Allemagne', flag: '🇩🇪', stars: 4.8 },
                { text: 'Nous avons fêté notre anniversaire avec NORTHÉ et ce fut le point fort de notre voyage. L\'expérience privée semblait vraiment exclusive. Ça en valait chaque centime.', author: 'Michael & Sarah Chen', location: 'New York, États-Unis', flag: '🇺🇸', stars: 5 },
                { text: 'Le guide savait tout sur les vins et l\'histoire de la région. Un voyage inoubliable que je recommande à tous les amateurs de vin.', author: 'Alessandro Rossi', location: 'Milan, Italie', flag: '🇮🇹', stars: 4.5 },
                { text: 'Le transfert depuis l\'aéroport était impeccable, et le tour le lendemain a dépassé toutes nos attentes. Un service de première classe tout au long.', author: 'Lucía Fernández', location: 'Madrid, Espagne', flag: '🇪🇸', stars: 5 },
                { text: 'Expérience incroyable ! Le bateau sur le Douro au coucher du soleil était magique. Un service professionnel du début à la fin.', author: 'Daan van der Berg', location: 'Amsterdam, Pays-Bas', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Tout Ce Que Vous Devez Savoir',
            subtitle: 'Des réponses claires et transparentes sur nos visites 100% privées, nos équipements, nos réservations et nos annulations.',
            items: [
                {
                    q: 'Les circuits sont-ils vraiment 100% privés ou devons-nous partager le van avec d\'autres clients ?',
                    a: 'Toutes les expériences NORTHÉ sont rigoureusement 100% privées et réservées exclusivement à votre groupe (de 1 à 8 personnes). Nous ne regroupons jamais d\'inconnus dans le même véhicule. Le van exécutif Mercedes-Benz et votre chauffeur-guide sommelier sont entièrement dédiés à votre groupe tout au long de la journée, vous permettant de savourer chaque halte à votre propre rythme.'
                },
                {
                    q: 'Qu\'est-ce qui est inclus dans le tarif ? Y a-t-il des frais cachés ?',
                    a: 'Aucun frais caché. Le tarif comprend : la prise en charge et le retour privés porte-à-porte à votre hôtel ou appartement à Porto ou Gaia, un guide sommelier certifié multilingue, eau minérale à bord, Wi-Fi, péages d\'autoroute et assurances légales passagers (RNAAT 284/2026). Selon le circuit choisi, les visites guidées de domaines avec dégustations de vins DOC et de Porto, déjeuners gastronomiques complets et croisières privées en bateau rabelo sont totalement inclus.'
                },
                {
                    q: 'Quelle est la taille maximale du groupe et comment fonctionne le tarif par personne ?',
                    a: 'Notre flotte exécutive accueille de 1 à 8 passagers par véhicule avec un confort de premier ordre. Le tarif est fixé par véhicule/groupe privé : pour les familles ou groupes de 4 à 8 personnes, le coût par personne s\'avère particulièrement avantageux (dès ~49 € à 65 € par personne), tout en conservant le privilège exclusif d\'un service haut de gamme sur mesure.'
                },
                {
                    q: 'Où et à quelle heure s\'effectuent la prise en charge et le retour ?',
                    a: 'Nous venons chercher votre groupe directement dans le hall de votre hôtel, appartement ou Airbnb à Porto ou Vila Nova de Gaia, généralement entre 8h30 et 9h00 (ou à un horaire personnalisé selon vos souhaits). En fin de journée (vers 18h00 - 18h30), nous vous raccompagnons confortablement à votre hébergement ou au restaurant de votre choix pour le dîner.'
                },
                {
                    q: 'Quelle est votre politique d\'annulation et de modification de date ?',
                    a: 'Nous offrons une annulation gratuite avec remboursement intégral à 100% pour toute demande effectuée jusqu\'à 48 heures avant le début de la visite. En cas d\'imprévu ou de modification de vos horaires de vol, nous reprogrammons volontiers votre expérience sans aucuns frais additionnels, selon les disponibilités.'
                },
                {
                    q: 'Les circuits sont-ils adaptés aux familles avec enfants ou bébés ?',
                    a: 'Tout à fait. Votre journée étant 100% privée, nous adaptons le rythme et effectuons des pauses à votre convenance. Nous mettons gratuitement à disposition des sièges auto et rehausseurs homologués pour bébés et enfants (veuillez préciser leurs âges lors de la demande). Nos domaines et restaurants partenaires proposent des espaces chaleureux et des menus enfants.'
                },
                {
                    q: 'Puis-je personnaliser l\'itinéraire, visiter un domaine spécifique ou fêter un événement ?',
                    a: 'Oui ! Le sur-mesure est l\'ADN de NORTHÉ. Que vous souhaitiez visiter un domaine réputé précis, faire appel à un photographe professionnel, célébrer une lune de miel, un anniversaire ou organiser une demande en mariage surprise au milieu des vignes, notre équipe concrétise chaque détail à la perfection.'
                },
                {
                    q: 'Comment réserver et quels moyens de paiement sécurisés sont acceptés ?',
                    a: 'La réservation est simple, rapide et sécurisée. Vous pouvez nous contacter directement sur notre WhatsApp officiel (+351 911 923 499) pour une confirmation immédiate ou remplir le formulaire en ligne. Nous acceptons les virements bancaires (SEPA/SWIFT), cartes de débit/crédit internationales (Visa, Mastercard, Amex), MB Way et espèces, avec facture officielle.'
                },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'Journal du Douro',
            subtitle: 'Actualités, secrets et les dernières nouveautés de l\'oenotourisme au Portugal.',
            readMore: 'Lire l\'Histoire',
            bookCta: 'Réserver cette expérience',
            readTimeDefault: '4 min de lecture',
            items: [
                {
                    slug: 'vindimas-outono-douro-lagares-2026',
                    title: 'Vendanges dans le Douro : La Magie des Lagares en Granit et Dégustations d\'Automne',
                    excerpt: 'Quand les terrasses viticoles se parent d\'or et de cuivre, le Douro entre dans sa saison la plus émouvante. Une invitation privée pour vivre le foulage au pied, les déjeuners aux vignes et les grands millésimes.',
                    date: '15 septembre 2026',
                    category: 'Vendanges & Tradition',
                    image: '/images/blog/2026/harvest.jpg',
                    readTime: '4 min de lecture',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Septembre et octobre confèrent à la vallée du Douro une lumière dorée incomparable et les parfums envoûtants du moût en fermentation. C\'est la saison royale des vendanges, où des siècles de tradition reprennent vie sur les pentes escarpées de schiste baignées par le fleuve.' },
                        { type: 'p', text: 'Bien loin de l\'agitation des circuits touristiques en autocar, l\'immersion de vendange avec NORTHÉ est conçue sous le signe de l\'intimité absolue. Votre groupe est reçu par les maîtres de chais et familles vigneronnes dans des quintas de prestige privatisées, où l\'hospitalité portugaise s\'exprime avec une générosité sans égale.' },
                        { type: 'p', text: 'Du rituel séculaire du foulage des raisins au pied dans les cuves en granit (lagares) au son d\'airs folkloriques, aux déjeuners gastronomiques dressés sur des terrasses panoramiques surplombant le fleuve, chaque instant célèbre l\'art de vivre et les grands vins de Porto et du Douro.' },
                        { type: 'p', text: 'Pour célébrer cette saison exceptionnelle, NORTHÉ propose des circuits privés sur-mesure d\'une journée (Tour North-001 et North-002) avec transport exécutif au départ de Porto, vous permettant de savourer les vendanges tardives dans le plus grand des conforts.' }
                    ]
                },
                {
                    slug: 'rota-secreta-minho-alvarinho-palacios-2026',
                    title: 'Au-delà du Douro : La Route Secrète de l\'Alvarinho et les Châteaux du Minho',
                    excerpt: 'Découvrez la noblesse du Nord du Portugal entre les manoirs baroques de Ponte de Lima, les cités médiévales de Guimarães et les domaines où naît le meilleur vin blanc Alvarinho.',
                    date: '8 septembre 2026',
                    category: 'Nord du Portugal',
                    image: '/images/blog/2026/quinta-estate.jpg',
                    readTime: '4 min de lecture',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Si le Douro est le temple mondial des grands vins rouges et des Portos centenaires, le Minho incarne l\'âme verte, aristocratique et raffinée du Portugal. Une contrée de manoirs seigneuriaux en granit, de portails armoriés, de jardins romantiques et de vignes produisant des blancs de renommée planétaire.' },
                        { type: 'p', text: 'En voyage privé au départ de Porto en van Mercedes-Benz exécutif, NORTHÉ vous guide à travers les paysages bucoliques du Haut Minho vers la sous-région de Monção et Melgaço, berceau mythique du cépage noble Alvarinho, célébré pour sa minéralité cristalline et ses notes d\'agrumes délicates.' },
                        { type: 'p', text: 'Ce circuit d\'exception conjugue visites privées de palais historiques et de domaines familiaux avec des déjeuners gastronomiques où poissons frais de l\'Atlantique, viandes savoureuses et pâtisseries conventuelles s\'accordent avec majesté.' },
                        { type: 'p', text: 'Une escapade idéale pour prolonger votre séjour portugais au-delà du Douro, en explorant le patrimoine mondial de l\'UNESCO à Guimarães et Braga ou la poésie de Ponte de Lima grâce à notre Tour Privé Minho & Vins Verts.' }
                    ]
                },
                {
                    slug: 'douro-porto-wine-festival-2026', title: 'Douro & Porto Wine Festival : L\'Événement de l\'Eté à Lamego', excerpt: 'Au cœur du Douro, Lamego a été, les 3 et 4 juillet, l\'épicentre des meilleurs vins portugais, de la gastronomie d\'auteur et de la musique live.', date: '4 juillet 2026', category: 'Événements', image: '/images/blog/2026/wine-festival-julho-2026.jpg', readTime: '3 min de lecture', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Le Douro a son propre calendrier. Et au début du mois de juillet, Lamego devient l\'épicentre du vin portugais.' },
                        { type: 'p', text: 'Le Douro & Porto Wine Festival est revenu les 3 et 4 juillet au Porto Comercial de Cambres, à Lamego, réunissant les meilleurs producteurs de la région dans un événement qui combine, avec une élégance rare, des dégustations de vins d\'exception, de la gastronomie d\'auteur et de la musique live.' },
                        { type: 'p', text: 'Pour ceux qui nous rendent visite à cette époque de l\'année, le festival représente une opportunité unique : goûter des dizaines de références du Douro en un seul week-end, dialoguer directement avec des énologues et découvrir des vins qui n\'ont pas encore atteint les étagères des boutiques spécialisées.' },
                        { type: 'p', text: 'Chez NORTHÉ, nous combinons l\'expérience du festival avec notre circuit privé dans la vallée — une journée qui commence entre les vignes et se termine avec le fleuve doré au coucher du soleil. Réservations anticipées recommandées.' }
                    ]
                },
                {
                    slug: 'vindima-antecipada-douro-2026', title: 'Vendanges 2026 : La Récolte Commence Plus Tôt dans le Douro', excerpt: 'Le changement climatique réécrit le rythme des vendanges dans le Douro. Août est le nouveau septembre — et qui arrive le premier vit l\'expérience la plus authentique.', date: '4 juillet 2026', category: 'Tendances', image: '/images/blog/2026/vindima-antecipada-2026.jpg', readTime: '4 min de lecture', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Il y a quelque chose de silencieux et d\'urgent dans l\'air du Douro cet été. Les grappes mûrissent plus vite. Les domaines se préparent. Et les vendanges 2026 promettent d\'arriver plus tôt que prévu.' },
                        { type: 'p', text: 'Le changement climatique redéfinit le rythme séculaire de la récolte dans la vallée du Douro. Ce qui se passait historiquement en octobre commence aujourd\'hui, dans de nombreux domaines, dès le début du mois d\'août — parfois même en juillet. La chaleur intense accélère la maturation des raisins, réduisant une fenêtre de temps qui permettait autrefois des semaines d\'observation attentive.' },
                        { type: 'p', text: 'Pour les producteurs, c\'est un défi technique et humain de grande ampleur. Pour les voyageurs, c\'est une opportunité rare : être dans le Douro quand la région est à son moment le plus vivant, le plus authentique et le plus sensoriel.' },
                        { type: 'p', text: 'Les expériences de vendanges immersives — cueillette manuelle, foulage à pied dans des pressoirs en granit, déjeuners régionaux avec accords mets-vins — se remplissent rapidement. Notre recommandation : n\'attendez pas septembre. Le Douro d\'août est, de plus en plus, le Douro des vendanges.' }
                    ]
                },
                { slug: 'melhor-vinho-do-ano-douro', title: '"Le Meilleur Vin de l\'Année" est un Rouge du Douro', excerpt: 'Le prix prestigieux a été décerné à un vin du Douro, réaffirmant la qualité exceptionnelle de la région.', date: '13 mai 2026', category: 'Prix', image: '/images/blog/2026/golden-hour.jpg', readTime: '3 min de lecture', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'La critique spécialisée a une fois de plus récompensé l\'excellence du Douro. Le titre de "Meilleur Vin de l\'Année" a été attribué à un rouge du Douro, une distinction qui renforce le prestige international de la plus ancienne région délimitée au monde.' },
                        { type: 'p', text: 'Chez NORTHÉ, nous offrons à nos clients des dégustations premium qui incluent des millésimes primés dans les meilleurs domaines de la région. Venez déguster l\'excellence avec nous.' }
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
            badge: 'Über Uns',
            title: 'Hinter dem Horizont: Die Seele von NORTHÉ',
            paragraphs: [
                'Bei NORTHÉ glauben wir, dass Luxus nicht durch das definiert wird, was man sieht, sondern durch das, was man fühlt. Wir sind aus der Leidenschaft heraus entstanden, den unsichtbaren Douro zu enthüllen - den, der nicht auf Touristenkarten erscheint, sondern in privaten Weingütern, in der Stille des Flusses bei der Abenddämmerung und in den Aromen einer Küche, die das Land ehrt, pulsiert.',
                'Unsere Mission ist es, Erlebnisse zu gestalten, nicht Reiserouten. Jedes Detail, vom Komfort unserer exklusiven Fahrzeuge bis hin zur sorgfältigen Auswahl von Michelin-Sterne-Partnern, ist für diejenigen konzipiert, die Zeit, Privatsphäre und Authentizität schätzen.',
                'Wir sind nicht einfach nur Reiseleiter; wir sind Geschichtenerzähler und Kuratoren unvergesslicher Momente. Auf dem Rücksitz unserer Exklusivität hört der Douro auf, ein Reiseziel zu sein, und wird zu einer ewigen Erinnerung.',
                'Willkommen am Douro, in Ihrem eigenen Tempo. Willkommen bei NORTHÉ.',
            ],
            signature: 'NORTHÉ',
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
                { text: 'Das beste Erlebnis, das ich je am Douro hatte! Die Bootsfahrt zum Sonnenuntergang war unvergesslich. Ich kann NORTHÉ nur wärmstens empfehlen.', author: 'Carlos Mendes', location: 'São Paulo, Brasilien', flag: '🇧🇷', stars: 5 },
                { text: 'Ein perfekter Tag im Douro-Tal! Die Weinprobe war erstklassig und die Landschaft atemberaubend. Wir werden auf jeden Fall wiederkommen.', author: 'Hannah Müller', location: 'München, Deutschland', flag: '🇩🇪', stars: 4.8 },
                { text: 'Wir haben unser Jubiläum mit NORTHÉ gefeiert und es war der Höhepunkt unserer Reise. Das private Erlebnis fühlte sich wirklich exklusiv an. Es war jeden Cent wert.', author: 'Michael & Sarah Chen', location: 'New York, USA', flag: '🇺🇸', stars: 5 },
                { text: 'Der Guide wusste alles über die Weine und die Geschichte der Region. Ein unvergessliche Reise, die ich allen Weinliebhabern empfehle.', author: 'Alessandro Rossi', location: 'Mailand, Italien', flag: '🇮🇹', stars: 4.5 },
                { text: 'Der Flughafen-Transfer war makellos, und die Tour am nächsten Tag hat alle unsere Erwartungen übertroffen. Erstklassiger Service in jeder Hinsicht.', author: 'Lucía Fernández', location: 'Madrid, Spanien', flag: '🇪🇸', stars: 5 },
                { text: 'Tolle Erfahrung! Das Boot auf dem Douro bei Sonnenuntergang war magisch. Professioneller Service von Anfang bis Ende.', author: 'Daan van der Berg', location: 'Amsterdam, Niederlande', flag: '🇳🇱', stars: 4.8 },
            ],
        },
        faq: {
            badge: 'FAQ',
            title: 'Alles, Was Sie Wissen Müssen',
            subtitle: 'Transparente und detaillierte Antworten zu unseren 100% privaten Touren, Annehmlichkeiten, Buchungen und flexiblen Stornierungen.',
            items: [
                {
                    q: 'Sind die Touren wirklich 100% privat oder teilen wir das Fahrzeug mit anderen Gästen?',
                    a: 'Jede Reise mit NORTHÉ ist ausnahmslos 100% privat und exklusiv für Sie und Ihre persönliche Reisegruppe (1 bis 8 Personen) reserviert. Wir kombinieren niemals Buchungen von fremden Personen. Der exklusive Mercedes-Benz Van und Ihr zertifizierter Sommelier-Guide stehen während des gesamten Tages ausschließlich Ihnen zur Verfügung, sodass Sie jeden Zwischenstopp in Ihrem eigenen Rhythmus genießen.'
                },
                {
                    q: 'Was ist im Preis inbegriffen? Gibt es versteckte Zusatzkosten?',
                    a: 'Es gibt absolut keine versteckten Kosten. Der Preis beinhaltet: exklusiven Tür-zu-Tür-Transfer (Abholung und Rückfahrt am Hotel in Porto oder Gaia), zertifizierten mehrsprachigen Weinguide, Mineralwasser an Bord, Wi-Fi, Autobahnmaut und gesetzlich vorgeschriebene Passagierversicherungen (RNAAT 284/2026). Je nach gewählter Tour sind Weingutbesichtigungen mit DOC- und Portweinverkostungen, mehrgängige Gourmet-Mittagessen mit Weinbegleitung und private Rabelo-Bootsfahrten vollständig enthalten.'
                },
                {
                    q: 'Wie groß ist die maximale Gruppengröße und wie staffelt sich der Preis pro Person?',
                    a: 'Unsere Executive-Flotte bietet 1 bis 8 Gästen pro Fahrzeug erstklassigen Komfort. Der Grundpreis gilt pro Privatfahrzeug/Gruppe. Für Familien oder befreundete Paare (4 bis 8 Personen) ergibt sich dadurch ein besonders attraktiver Pro-Kopf-Preis (ab ca. €49 bis €65 pro Person) – kombiniert mit dem unvergleichlichen Luxus absoluter Privatsphäre.'
                },
                {
                    q: 'Wo und zu welcher Uhrzeit erfolgt die Abholung und die Rückkehr?',
                    a: 'Wir holen Ihre Gruppe direkt in der Lobby Ihres Hotels, Apartments oder Ferienunterkunft in Porto oder Vila Nova de Gaia ab – üblicherweise zwischen 8:30 und 9:00 Uhr (oder zu einer individuell vereinbarten Wunschzeit). Am späten Nachmittag (ca. 18:00 – 18:30 Uhr) bringen wir Sie entspannt zurück zu Ihrer Unterkunft oder setzen Sie an einem Wunschrestaurant zum Abendessen ab.'
                },
                {
                    q: 'Wie lauten Ihre Stornierungs- und Umbuchungsbedingungen?',
                    a: 'Wir bieten eine kostenlose Stornierung mit 100% voller Rückerstattung bis zu 48 Stunden vor Tourbeginn – unkompliziert und ohne Rückfragen. Sollten sich Ihre Flug- oder Reisezeiten kurzfristig ändern, passen wir Ihren Termin bei Verfügbarkeit ohne zusätzliche Gebühren flexibel an.'
                },
                {
                    q: 'Sind die Touren für Familien mit Kindern oder Kleinkindern geeignet?',
                    a: 'Ganz bestimmt. Da Ihre Tour 100% privat ist, bestimmen Sie das Reisetempo und wir legen Pausen nach Ihren Bedürfnissen ein. Homologierte Babyschalen und Kindersitze stellen wir auf Anfrage kostenfrei bereit (bitte das Alter der Kinder bei der Anfrage angeben). Partnerweingüter und Restaurants bieten familienfreundliche Räumlichkeiten und spezielle Kindermenüs.'
                },
                {
                    q: 'Kann ich die Reiseroute anpassen, bestimmte Weingüter besuchen oder besondere Anlässe feiern?',
                    a: 'Ja! Maßgeschneiderte Erlebnisse sind die Kernkompetenz von NORTHÉ. Ob Besuch eines bestimmten Wunschweinguts, Begleitung durch einen professionellen Fotografen, Feier eines Jubiläums, Flitterwochen oder ein romantischer Heiratsantrag in den Weinbergen: Unser Team plant jedes Detail exakt nach Ihren Wünschen.'
                },
                {
                    q: 'Wie buche ich und welche sicheren Zahlungsmethoden stehen zur Verfügung?',
                    a: 'Die Buchung ist schnell und zuverlässig. Sie können direkt über unseren offiziellen WhatsApp-Service (+351 911 923 499) anfragen oder das Online-Formular nutzen. Wir akzeptieren Banküberweisungen (SEPA/SWIFT), internationale Kredit-/Debitkarten (Visa, Mastercard, Amex), MB Way und Barzahlung, stets mit offizieller Rechnung.'
                },
            ],
        },
        blog: {
            badge: 'Journal',
            title: 'Douro-Tagebuch',
            subtitle: 'Geschichten, Geheimnisse und Erlebnisse aus dem sch\u00f6nsten Tal der Welt.',
            readMore: 'Geschichte lesen',
            bookCta: 'Dieses Erlebnis buchen',
            readTimeDefault: '4 Min. Lesezeit',
            items: [
                {
                    slug: 'vindimas-outono-douro-lagares-2026',
                    title: 'Weinlese im Douro-Tal: Die Magie der Granit-Lagares & Exklusive Herbst-Weinproben',
                    excerpt: 'Wenn sich die terrassierten Weinberge in tiefes Gold und Kupfer hüllen, erlebt das Douro-Tal seine faszinierendste Jahreszeit. Eine exklusive private Einladung zum traditionellen Traubentreten und seltenen Jahrgangsverkostungen.',
                    date: '15. September 2026',
                    category: 'Weinlese & Tradition',
                    image: '/images/blog/2026/harvest.jpg',
                    readTime: '4 Min. Lesezeit',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'September und Oktober schenken dem Douro-Tal ein unvergleichliches, goldenes Herbstlicht und den berauschenden Duft von gärendem Most. Es ist der Höhepunkt des Weinjahres, in dem jahrhundertealte Traditionen an den steilen Schieferhängen der Flüsse Douro und Pinhão lebendig werden.' },
                        { type: 'p', text: 'Fernab von den Menschenmassen herkömmlicher Reisebusse sind die Weinlese-Erlebnisse von NORTHÉ ganz auf absolute Privatsphäre und Exklusivität ausgelegt. Ihre Gruppe wird von Önologen und Inhaberfamilien auf ausgewählten Boutique-Weingütern mit herzlicher portugiesischer Gastfreundschaft empfangen.' },
                        { type: 'p', text: 'Vom traditionsreichen Ritual des Traubentretens mit bloßen Füßen in Granit-Lagares zu traditioneller Musik bis hin zu mehrgängigen Gourmet-Mittagessen auf Panoramaterrassen über dem Fluss: Jeder Augenblick ist ein Fest für die Sinne und die weltberühmten DOC- und Portweine.' },
                        { type: 'p', text: 'Um diese besondere Jahreszeit voll auszukosten, bietet NORTHÉ maßgeschneiderte ganztägige Privattouren (Tour North-001 und North-002) mit Executive-Transfer direkt ab Porto an – für ein unvergessliches Weinerlebnis in höchstem Komfort.' }
                    ]
                },
                {
                    slug: 'rota-secreta-minho-alvarinho-palacios-2026',
                    title: 'Jenseits des Douro: Die Geheime Alvarinho-Route & die Paläste des Minho',
                    excerpt: 'Entdecken Sie Nordportugals aristokratische Seele zwischen den Barock-Herrensitzen von Ponte de Lima, den Burgen von Guimarães und den Wiegen des weltbesten Alvarinho-Weißweins.',
                    date: '8. September 2026',
                    category: 'Nordportugal',
                    image: '/images/blog/2026/quinta-estate.jpg',
                    readTime: '4 Min. Lesezeit',
                    bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Während das Douro-Tal für monumentale Rotweine und Portweine weltberühmt ist, verkörpert die Minho-Region die grüne, erfrischende und vornehme Seele Nordportugals. Ein Landstrich voller jahrhundertealter Herrenhäuser aus Granit, verwunschener Gärten und Weine von internationalem Rang.' },
                        { type: 'p', text: 'Auf einer privaten Fahrt ab Porto in einem luxuriösen Mercedes-Benz Van führt NORTHÉ Sie entlang malerischer Landstraßen in die renommierte Subregion Monção und Melgaço – die Wiege der edlen Alvarinho-Traube, die für ihre vibrierende Mineralität und feinen Zitrus- und Blütenaromen geschätzt wird.' },
                        { type: 'p', text: 'Die Reiseroute verbindet exklusive Privatbesuche historischer Schlösser und Familiengüter mit kulinarischen Mittagessen, bei denen frischer Atlantikfisch, regionale Spezialitäten und traditionelle Klosterdesserts zelebriert werden.' },
                        { type: 'p', text: 'Eine ideale Tour für anspruchsvolle Reisende, die ihren Aufenthalt über das Douro-Tal hinaus erweitern möchten, um das UNESCO-Weltkulturerbe von Guimarães und Braga oder den zeitlosen Zauber von Ponte de Lima mit unserer Privattour Minho & Vinho Verde zu erleben.' }
                    ]
                },
                {
                    slug: 'douro-porto-wine-festival-2026', title: 'Douro & Porto Wine Festival: Das Weinfest des Sommers in Lamego', excerpt: 'Im Herzen des Douro war Lamego am 3. und 4. Juli das Epizentrum der besten portugiesischen Weine, der Sterneküche und Live-Musik.', date: '4. Juli 2026', category: 'Veranstaltungen', image: '/images/blog/2026/wine-festival-julho-2026.jpg', readTime: '3 Min. Lesezeit', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Das Douro hat seinen eigenen Kalender. Und Anfang Juli wird Lamego zum Epizentrum des portugiesischen Weins.' },
                        { type: 'p', text: 'Das Douro & Porto Wine Festival kehrte am 3. und 4. Juli in den Porto Comercial de Cambres in Lamego zurück und versammelte die besten Produzenten der Region in einer Veranstaltung, die mit seltener Eleganz außergewöhnliche Weinproben mit Küche und Live-Musik verbindet.' },
                        { type: 'p', text: 'Für alle, die uns zu dieser Jahreszeit besuchen, bietet das Festival eine einzigartige Gelegenheit: Dutzende von Douro-Referenzen an einem einzigen Wochenende zu probieren, direkt mit Winzern zu sprechen und Weine zu entdecken, die noch nicht in den Fachgeschäften angekommen sind.' },
                        { type: 'p', text: 'Bei NORTHÉ verbinden wir das Festivalerlebnis mit unserer privaten Tour durch das Tal — ein Tag, der zwischen den Weinbergen beginnt und mit dem im Sonnenuntergang golden leuchtenden Fluss endet. Frühzeitige Buchungen werden empfohlen.' }
                    ]
                },
                {
                    slug: 'vindima-antecipada-douro-2026', title: 'Weinlese 2026: Die Ernte Beginnt Früher im Douro', excerpt: 'Der Klimawandel schreibt den Rhythmus der Weinlese im Douro neu. August ist das neue September — und wer zuerst kommt, erlebt das authentischste Erlebnis.', date: '4. Juli 2026', category: 'Trends', image: '/images/blog/2026/vindima-antecipada-2026.jpg', readTime: '4 Min. Lesezeit', bookable: true,
                    fullContent: [
                        { type: 'p', text: 'Es liegt etwas Stilles und Drängendes in der Luft des Douro in diesem Sommer. Die Trauben reifen schneller. Die Güter bereiten sich vor. Und die Weinlese 2026 verspricht früher als erwartet zu kommen.' },
                        { type: 'p', text: 'Der Klimawandel verändert den jahrhundertealten Rhythmus der Ernte im Douro-Weintal. Was historisch im Oktober stattfand, beginnt heute in vielen Gütern bereits Anfang August — manchmal sogar im Juli. Die intensive Hitze beschleunigt die Traubenreife und verkürzt ein Zeitfenster, das früher wochenlange sorgfältige Beobachtung ermöglichte.' },
                        { type: 'p', text: 'Für die Winzer ist dies eine große technische und menschliche Herausforderung. Für Reisende ist es eine seltene Gelegenheit: im Douro zu sein, wenn die Region in ihrer lebendigsten, authentischsten und sinnlichsten Phase ist.' },
                        { type: 'p', text: 'Immersive Weinernte-Erlebnisse — Handlese, Fußtretung in Granitkeltern, regionale Mittagessen mit Weinbegleitung — füllen sich schnell. Unsere Empfehlung: Warten Sie nicht bis September. Der Douro im August ist zunehmend Weinterrassen-Zeit.' }
                    ]
                },
                { slug: 'golden-hour-science-douro', title: 'Die Wissenschaft der Goldenen Stunde: Warum das Douro-Tal im Abendlicht leuchtet', excerpt: 'Das Abendlicht im Douro ver\u00e4ndert die Weinwahrnehmung und verwandelt jede Verkostung in ein einzigartiges Sinneserlebnis.', date: '10. Mai 2026', category: 'Erlebnisse', image: '/images/blog/2026/golden-hour.jpg', readTime: '4 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Es gibt einen Moment an jedem Tag im Douro-Tal, den die Winzer die goldene Stunde nennen. Das Licht wird bernsteinfarben und das gesamte Tal scheint in sanfter Flamme zu brennen.' }, { type: 'h3', text: 'Das NORTHÉ Erlebnis' }, { type: 'p', text: 'Bei unseren privaten Touren planen wir jeden Moment so, dass die Hauptverkostung mit der goldenen Stunde zusammenf\u00e4llt.' }] },
                { slug: 'quintas-secretas-douro', title: 'Das Unsichtbare Douro: Private Quintas', excerpt: 'Entdecken Sie die historischen Douro-Anwesen, die nur auf private Einladung zug\u00e4nglich sind.', date: '3. Mai 2026', category: 'Exklusiv', image: '/images/blog/2026/quinta-estate.jpg', readTime: '5 Min. Lesezeit', bookable: true, fullContent: [{ type: 'p', text: 'Das Alto Douro Weingebiet beherbergt \u00fcber 40.000 Weingüter. Die exklusivsten funktionieren nur auf private Einladung.' }, { type: 'blockquote', text: 'Wahrer Luxus im Douro l\u00e4sst sich nicht kaufen. Er wird mit Zeit und Neugier erobert.' }, { type: 'p', text: 'Bei NORTHÉ organisieren wir exklusive Besuche in privaten Quintas. Kontaktieren Sie uns für Ihr personalisiertes Erlebnis.' }] },
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
