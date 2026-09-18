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
                    slug: "norte-de-portugal-lugares-para-conhecer",
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
            destinations: ['Porto', 'Douro Valley', 'Braga', 'Guimarães', 'Gerês', 'Amarante', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisboa'],
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
                    slug: "norte-de-portugal-lugares-para-conhecer",
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
            destinations: ['Porto', 'Douro Valley', 'Braga', 'Guimarães', 'Gerês', 'Amarante', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisbon'],
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
            destinations: ['Porto', 'Douro Valley', 'Braga', 'Guimarães', 'Gerês', 'Amarante', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisboa'],
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
                    slug: "norte-de-portugal-lugares-para-conhecer",
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
            destinations: ['Porto', 'Douro Valley', 'Braga', 'Guimarães', 'Gerês', 'Amarante', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lisbonne'],
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
            destinations: ['Porto', 'Douro Valley', 'Braga', 'Guimarães', 'Gerês', 'Amarante', 'Aveiro', 'Coimbra', 'Nazaré', 'Óbidos', 'Peniche', 'Lissabon'],
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
