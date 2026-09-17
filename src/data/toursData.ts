// ============================================================================
// NORTHÉ PRIVATE TOURS - OFFICIAL 17 TOURS DATA COLLECTION (5 LANGUAGES)
// Fully enriched from client official documentation in: pt, en, es, fr, de
// ============================================================================

export interface TourPricingTier {
  pax: number;
  price: number;
}

export type LocalizedText = {
  pt: string;
  en: string;
  es?: string;
  fr?: string;
  de?: string;
  [key: string]: string | undefined;
};

export type LocalizedList = {
  pt: string[];
  en: string[];
  es?: string[];
  fr?: string[];
  de?: string[];
  [key: string]: string[] | undefined;
};

export interface TourItem {
  id: string;
  code: string;
  category: 'douro' | 'north' | 'porto';
  categoryLabel: LocalizedText;
  name: LocalizedText;
  subtitle: LocalizedText;
  tagline: LocalizedText;
  shortDesc: LocalizedText;
  fullDesc: LocalizedList;
  duration: LocalizedText;
  highlights: LocalizedList;
  included: LocalizedList;
  boatBadge?: LocalizedText;
  experienceBadge?: LocalizedText;
  pricingTiers: TourPricingTier[];
  startingPrice: number;
  gygVerified: boolean;
  gygUrl: string;
  image: string;
  gallery: string[];
}

export interface VipExtraItem {
  id: string;
  name: LocalizedText;
  tagline: LocalizedText;
  desc: LocalizedText;
  price: number;
}

export const VIP_EXTRAS: VipExtraItem[] = [
  {
    id: 'dj',
    name: {
      pt: 'DJ Privado',
      en: 'Private DJ',
      es: 'DJ Privado',
      fr: 'DJ Privé',
      de: 'Privater DJ'
    },
    tagline: {
      pt: 'Música Exclusiva · Cruzeiro & Quinta',
      en: 'Curated Sound · Cruise & Estate',
      es: 'Música Exclusiva · Crucero y Finca',
      fr: 'Musique Sur-Mesure · Croisière et Domaine',
      de: 'Exklusive Musik · Bootsfahrt & Weingut'
    },
    desc: {
      pt: 'Set musical personalizado e sofisticado para o seu cruzeiro privado pelo Rio Douro ou almoço numa quinta histórica. Equipamento de som profissional incluído.',
      en: 'Sophisticated bespoke live DJ set for your private Douro river cruise or exclusive quinta luncheon. Professional sound gear included.',
      es: 'Sesión musical personalizada y sofisticada para su crucero privado por el río Duero o almuerzo en una finca histórica. Equipo de sonido profesional incluido.',
      fr: 'Set musical sur-mesure et sophistiqué pour votre croisière privée sur le Douro ou votre déjeuner dans un domaine historique. Équipement sonore professionnel inclus.',
      de: 'Individuelles und anspruchsvolles Musikset für Ihre private Douro-Bootsfahrt oder Ihr Mittagessen auf einem historischen Weingut. Professionelle Tonanlage inklusive.'
    },
    price: 350
  },
  {
    id: 'decor',
    name: {
      pt: 'Decoração Personalizada',
      en: 'Bespoke Event Decor',
      es: 'Decoración Personalizada',
      fr: 'Décoration Sur-Mesure',
      de: 'Individuelle Dekoration'
    },
    tagline: {
      pt: 'Cenografia · Celebrações & Romance',
      en: 'Romantic Styling & Floral Art',
      es: 'Estilismo Romántico y Arte Floral',
      fr: 'Scénographie · Célébrations et Romance',
      de: 'Romantisches Styling & Blumenkunst'
    },
    desc: {
      pt: 'Design floral, arranjos de luxo e ambientação elegante para celebrações íntimas, aniversários e pedidos de casamento inesquecíveis.',
      en: 'Custom floral installations, luxury table styling and romantic ambient lighting for proposals, anniversaries and celebrations.',
      es: 'Diseño floral, arreglos de lujo y ambientación elegante para celebraciones íntimas, aniversarios y propuestas de matrimonio inolvidables.',
      fr: 'Créations florales, décoration de table de luxe et ambiance élégante pour célébrations intimes, anniversaires et demandes en mariage inoubliables.',
      de: 'Blumenarrangements, luxuriöses Tischstyling und stilvolle Atmosphäre für intime Feiern, Geburtstage und unvergessliche Heiratsanträge.'
    },
    price: 250
  },
  {
    id: 'photographer',
    name: {
      pt: 'Fotógrafo / Videógrafo Profissional',
      en: 'Professional Photographer',
      es: 'Fotógrafo / Videógrafo Profesional',
      fr: 'Photographe / Vidéaste Professionnel',
      de: 'Professioneller Fotograf / Videograf'
    },
    tagline: {
      pt: 'Memórias Eternas · Foto & Vídeo 4K',
      en: 'Timeless Memories · 4K Photo & Video',
      es: 'Recuerdos Eternos · Foto y Vídeo 4K',
      fr: 'Souvenirs Éternels · Photo & Vidéo 4K',
      de: 'Unvergessliche Momente · 4K Foto & Video'
    },
    desc: {
      pt: 'Acompanhamento discreto de um fotógrafo e videógrafo profissional dedicado para registar com estética cinematográfica os momentos mais marcantes do seu dia.',
      en: 'Discreet accompaniment by a dedicated professional photographer to capture magazine-worthy cinematic shots of your private journey.',
      es: 'Acompañamiento discreto de un fotógrafo y videógrafo profesional dedicado para capturar con estética cinematográfica los momentos más memorables de su día.',
      fr: 'Accompagnement discret d’un photographe et vidéaste professionnel dédié pour immortaliser avec une esthétique cinématographique les moments clés de votre journée.',
      de: 'Diskrete Begleitung durch einen professionellen Fotografen und Videografen, um die schönsten Momente Ihres Tages in kinoreifer Ästhetik festzuhalten.'
    },
    price: 300
  }
];

export const ALL_17_TOURS: TourItem[] = [
  {
    "id": "ponte-de-lima-douro",
    "code": "North-001",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley & Norte",
      "en": "Douro Valley & North",
      "es": "Valle del Duero y Norte",
      "fr": "Vallée du Douro & Nord",
      "de": "Douro-Tal & Norden"
    },
    "name": {
      "pt": "Ponte de Lima & Douro: Vinhos, Almoço e Cruzeiro Privado",
      "en": "Ponte de Lima & Douro: Wine, Regional Lunch & Private Cruise",
      "es": "Ponte de Lima y Duero: Vinos, Almuerzo Regional y Crucero Privado",
      "fr": "Ponte de Lima & Douro : Vins, Déjeuner Régional et Croisière Privée",
      "de": "Ponte de Lima & Douro: Weine, Regionales Mittagessen & Private Schifffahrt"
    },
    "subtitle": {
      "pt": "Vinho Verde na vila mais antiga de Portugal, quinta tradicional no Douro com almoço harmonizado e cruzeiro panorâmico privado em barco exclusivo.",
      "en": "Vinho Verde in Portugal's oldest village, traditional Douro quinta with paired lunch, and private scenic river cruise.",
      "es": "Vinho Verde en la villa más antigua de Portugal, quinta tradicional en el Duero con almuerzo maridado y crucero panorámico privado.",
      "fr": "Vinho Verde dans le plus ancien village du Portugal, domaine traditionnel du Douro avec déjeuner accords mets-vins et croisière privée.",
      "de": "Vinho Verde im ältesten Dorf Portugals, traditionelles Douro-Weingut mit Wein-Mittagessen und private Panorama-Bootsfahrt."
    },
    "tagline": {
      "pt": "Vinho Verde · Douro UNESCO · Barco Privado",
      "en": "Vinho Verde · Douro UNESCO · Private Boat",
      "es": "Vinho Verde · Duero UNESCO · Barco Privado",
      "fr": "Vinho Verde · Douro UNESCO · Bateau Privé",
      "de": "Vinho Verde · Douro UNESCO · Privates Boot"
    },
    "shortDesc": {
      "pt": "Descubra os sabores do Norte de Portugal em um tour privado: prove Vinho Verde em Ponte de Lima, desfrute de um almoço harmonizado no Douro e navegue entre vinhedos num barco privado.",
      "en": "Discover the flavours of Northern Portugal on an exclusive private journey: taste crisp Vinho Verde in Ponte de Lima, savor a paired lunch at an authentic Douro estate, and cruise among UNESCO terraces on a private boat.",
      "es": "Descubra los sabores del Norte de Portugal en un tour privado: deguste Vinho Verde en Ponte de Lima, disfrute de un almuerzo maridado en el Duero y navegue entre viñedos en barco privado.",
      "fr": "Découvrez les saveurs du Nord du Portugal lors d'une excursion privée : dégustez du Vinho Verde à Ponte de Lima, savourez un déjeuner accord mets-vins dans le Douro et naviguez en bateau privé.",
      "de": "Entdecken Sie die Aromen Nordportugals auf einer privaten Tour: Probieren Sie Vinho Verde in Ponte de Lima, genießen Sie ein Wein-Mittagessen im Douro-Tal und fahren Sie mit einem privaten Boot durch die Weinberge."
    },
    "fullDesc": {
      "pt": [
        "Saia do Porto com total conforto executivo e descubra dois dos maiores tesouros gastronómicos e vitivinícolas de Portugal num único dia desenhado exclusivamente para o seu grupo. A jornada começa na pitoresca Ponte de Lima, tradicionalmente reconhecida como a vila mais antiga de Portugal, famosa pelo seu traçado medieval e pela centenária ponte romana e medieval sobre o límpido Rio Lima.",
        "Em Ponte de Lima, visite um espaço nobre dedicado à cultura do Vinho Verde. Desfrute de uma prova comentada das castas locais — conhecendo o frescor, a mineralidade e os segredos deste vinho único no mundo —, acompanhada por histórias sobre a secular tradição vinícola da região do Minho.",
        "De seguida, seguimos viagem em direção ao magnífico Vale do Douro, Património Mundial da UNESCO. Seja recebido calorosamente numa quinta familiar tradicional e visite o seu museu vitivinícola particular, onde alfaias, memórias e fotografias preservam séculos de dedicação à vinha e ao vinho. Em seguida, saboreie um generoso almoço regional completo harmonizado com vinhos DOC do Douro cuidadosamente selecionados.",
        "Para coroar o dia com chave de ouro, embarque num cruzeiro privado e exclusivo de aproximadamente 1 hora pelas águas calmas do Rio Douro. Admire as majestosas encostas esculpidas em socalcos a partir da perspetiva privilegiada da água, brindando à tranquilidade duriense antes de um regresso descontraído ao Porto."
      ],
      "en": [
        "Depart from Porto in executive comfort to explore two of Northern Portugal's greatest wine and gastronomic treasures on an exclusive private day tour. Your journey begins in charming Ponte de Lima, widely celebrated as Portugal's oldest village, renowned for its quaint medieval alleys and the iconic Roman-medieval stone bridge spanning the Lima River.",
        "In Ponte de Lima, visit a refined estate dedicated to Vinho Verde culture. Savor a guided tasting of regional varietals, discovering the vibrant freshness, minerality, and centuries-old heritage of this globally unique wine style.",
        "Continue towards the majestic Douro Valley, a UNESCO World Heritage site. Be welcomed into an authentic family-owned quinta and explore its private wine museum, where historical artifacts and family archives narrate generations of winemaking passion. Then, enjoy a leisurely multi-course regional lunch paired with fine Douro DOC wines.",
        "Conclude this extraordinary day with an exclusive 1-hour private boat cruise along the tranquil waters of the Douro River. Behold the towering terraced vineyards rising above the riverbanks before enjoying a smooth, comfortable drive back to your accommodation in Porto."
      ],
      "es": [
        "Salga de Oporto en confort ejecutivo y descubra dos de los mayores tesoros gastronómicos y vitivinícolas de Portugal en un recorrido privado exclusivo. La jornada comienza en la pintoresca villa de Ponte de Lima, la más antigua de Portugal, célebre por su puente romano-medieval sobre el río Lima.",
        "Visite un espacio dedicado a la cultura del Vinho Verde y disfrute de una cata comentada de variedades autóctonas, descubriendo la frescura y la historia de este vino singular.",
        "Continuamos hacia el majestuoso Valle del Duero, Patrimonio de la Humanidad por la UNESCO. Será recibido en una finca familiar tradicional con visita a su museo vitivinícola y degustará un almuerzo regional completo maridado con vinos del Duero.",
        "Finalice el día con un exclusivo crucero privado de 1 hora por las aguas del Duero, contemplando los impresionantes bancales de viñedos desde el agua antes de regresar relajadamente a Oporto."
      ],
      "fr": [
        "Partez de Porto dans le confort d'un véhicule exécutif pour explorer deux des plus grands terroirs du Portugal en une journée privée exclusive. Votre voyage débute à Ponte de Lima, le plus ancien village du Portugal, célèbre pour son pont romano-médiéval enjambant la rivière Lima.",
        "Découvrez la culture du Vinho Verde à travers une dégustation commentée de cépages locaux, révélant la vivacité et la minéralité de ce vin d'exception.",
        "Poursuivez vers la majestueuse Vallée du Douro, classée au patrimoine mondial de l'UNESCO. Visitez un domaine familial historique et son musée privé du vin, puis savourez un authentique déjeuner régional accordé aux vins du Douro.",
        "Terminez par une croisière privée d'une heure sur le Douro, admirant les célèbres terrasses de vignobles depuis l'eau avant de regagner Porto en toute sérénité."
      ],
      "de": [
        "Starten Sie von Porto aus im exklusiven Executive-Fahrzeug zu einer privaten Entdeckungsreise zweier bedeutender Weinregionen Nordportugals. Ihr Tag beginnt im malerischen Ponte de Lima, dem ältesten Dorf Portugals mit seiner berühmten römisch-mittelalterlichen Brücke.",
        "Besuchen Sie ein renommiertes Weingut der Region Vinho Verde und genießen Sie eine geführte Verkostung der frischen, mineralischen Tropfen.",
        "Anschließend reisen Sie ins spektakuläre Douro-Tal (UNESCO-Welterbe). Auf einem traditionellen Familienweingut besichtigen Sie das private Weinmuseum und genießen ein mehrgängiges regionales Mittagessen mit erlesenen Douro-Weinen.",
        "Krönen Sie den Tag mit einer privaten einstündigen Schifffahrt auf dem Douro inmitten der weltberühmten Weinterrassen, bevor Sie entspannt nach Porto zurückkehren."
      ]
    },
    "duration": {
      "pt": "9h30",
      "en": "9.5 hours",
      "es": "9,5 horas",
      "fr": "9h30",
      "de": "9,5 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue especialista em vinhos",
        "Vinho Verde e vinhos do Douro DOC numa única experiência",
        "Visita ao centro histórico de Ponte de Lima e ponte romana medieval",
        "Almoço regional completo harmonizado com vinhos numa quinta tradicional",
        "Visita ao museu vitivinícola da quinta familiar no Douro",
        "Cruzeiro privado exclusivo de 1 hora pelo Rio Douro entre os socalcos UNESCO"
      ],
      "en": [
        "100% private journey with dedicated bilingual wine-expert guide",
        "Vinho Verde and Douro DOC wines combined in a single immersive day",
        "Guided walk through historic Ponte de Lima and its iconic Roman bridge",
        "Multi-course regional lunch paired with estate Douro wines",
        "Private tour of an authentic family wine museum in the Douro",
        "Exclusive 1-hour private cruise on the Douro River among UNESCO terraces"
      ],
      "es": [
        "Tour 100% privado con chófer-guía bilingüe especialista en vinos",
        "Vinho Verde y vinos del Duero DOC en una sola experiencia inolvidable",
        "Paseo por el centro histórico de Ponte de Lima y su puente romano",
        "Almuerzo regional completo maridado con vinos en una finca tradicional",
        "Entrada al museo vitivinícola familiar en el Duero",
        "Crucero privado exclusivo de 1 hora por el río Duero entre bancales UNESCO"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide bilingue expert en œnologie",
        "Vinho Verde et vins du Douro DOC réunis en une seule journée d'exception",
        "Visite du centre historique de Ponte de Lima et de son pont romain",
        "Déjeuner régional traditionnel accordé aux vins dans un domaine familial",
        "Visite du musée privé du vin au cœur du Douro",
        "Croisière privée d'une heure sur le Douro au pied des coteaux classés UNESCO"
      ],
      "de": [
        "100% private Tagestour mit persönlichem, weinkundigem Fahrer/Guide",
        "Vinho Verde und Douro DOC-Weine an einem einzigen unvergesslichen Tag",
        "Besuch des historischen Ponte de Lima und der römischen Steinbrücke",
        "Mehrgängiges regionales Mittagessen mit Weinbegleitung auf einem Weingut",
        "Führung durch das historische Familien-Weinmuseum im Douro-Tal",
        "Exklusive 1-stündige private Bootsfahrt auf dem Douro entlang der UNESCO-Terrassen"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Recolha e entrega personalizada no hotel ou alojamento",
        "Motorista-guia bilingue dedicado e especialista em vinhos",
        "Visita e prova guiada de Vinho Verde em Ponte de Lima",
        "Paragem na histórica Ponte Romana e centro de Ponte de Lima",
        "Visita guiada a uma quinta tradicional familiar no Vale do Douro",
        "Entrada no museu vitivinícola histórico da propriedade",
        "Almoço regional completo com pratos tradicionais portugueses",
        "Harmonização do almoço com seleção de vinhos do Douro DOC",
        "Cruzeiro privado e exclusivo de 1 hora pelo Rio Douro",
        "Água mineral a bordo durante todo o dia",
        "Cadeirinha ou assento infantil disponível mediante pedido prévio",
        "Seguro de responsabilidade civil e acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Door-to-door pickup and drop-off at your hotel or apartment",
        "Dedicated bilingual chauffeur-guide with deep wine knowledge",
        "Guided visit and wine tasting at a prestigious Vinho Verde estate",
        "Visit to the historic Roman bridge and town center of Ponte de Lima",
        "Guided tour of an authentic family-owned quinta in the Douro Valley",
        "Admission to the estate's private historical wine museum",
        "Traditional multi-course regional lunch",
        "Wine pairing during lunch with handpicked Douro DOC wines",
        "Exclusive 1-hour private Douro River boat cruise",
        "Complimentary bottled water throughout the journey",
        "Child or infant safety seats available upon prior request",
        "Comprehensive civil liability and personal accident insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Recogida y regreso puerta a puerta en su hotel o alojamiento",
        "Chófer-guía bilingüe dedicado y especialista en vinos",
        "Visita y cata guiada de Vinho Verde en Ponte de Lima",
        "Parada en el histórico puente romano y centro de Ponte de Lima",
        "Visita guiada a una finca tradicional familiar en el Valle del Duero",
        "Entrada al museo vitivinícola histórico de la propiedad",
        "Almuerzo regional completo con platos tradicionales portugueses",
        "Maridaje de vinos del Duero DOC durante el almuerzo",
        "Crucero privado exclusivo de 1 hora por el río Duero",
        "Agua mineral a bordo durante todo el recorrido",
        "Asiento infantil disponible previa solicitud",
        "Seguro de responsabilidad civil y accidentes personales"
      ],
      "fr": [
        "Transport privé en véhicule exécutif aller-retour depuis Porto",
        "Prise en charge et retour à votre hôtel ou lieu d'hébergement",
        "Chauffeur-guide bilingue dédié et expert en vins portugais",
        "Visite guidée et dégustation de Vinho Verde à Ponte de Lima",
        "Arrêt au pont romano-médiéval historique de Ponte de Lima",
        "Visite guidée d'un domaine viticole familial dans la Vallée du Douro",
        "Entrée au musée privé de la vigne et du vin",
        "Déjeuner régional traditionnel complet",
        "Accords mets et vins avec une sélection de crus Douro DOC",
        "Croisière privée d'une heure sur le fleuve Douro",
        "Eau minérale à bord tout au long de la journée",
        "Siège enfant disponible sur demande préalable",
        "Assurance responsabilité civile et accidents personnels"
      ],
      "de": [
        "Privater Hin- und Rücktransfer im Executive-Fahrzeug ab Porto",
        "Bequeme Hotelabholung und Rückbringung an Ihrer Unterkunft",
        "Persönlicher zweisprachiger Guide mit fundiertem Weinwissen",
        "Führung und Verkostung auf einem Vinho Verde Weingut",
        "Fotostopp an der historischen römischen Brücke von Ponte de Lima",
        "Führung auf einem traditionellen Familienweingut im Douro-Tal",
        "Eintritt in das hauseigene historische Weinmuseum",
        "Traditionelles mehrgängiges regionales Mittagessen",
        "Passende Weinbegleitung zum Essen mit Douro DOC Weinen",
        "Exklusive 1-stündige private Douro-Bootsfahrt",
        "Mineralwasser an Bord während des gesamten Tages",
        "Kindersitze auf Voranmeldung kostenlos verfügbar",
        "Vollumfängliche Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 549
      },
      {
        "pax": 2,
        "price": 599
      },
      {
        "pax": 3,
        "price": 649
      },
      {
        "pax": 4,
        "price": 699
      },
      {
        "pax": 5,
        "price": 749
      },
      {
        "pax": 6,
        "price": 799
      },
      {
        "pax": 7,
        "price": 899
      },
      {
        "pax": 8,
        "price": 949
      }
    ],
    "startingPrice": 549,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_001_ponte_de_lima.jpg",
    "gallery": [
      "/images/tours/north_001_ponte_de_lima.jpg",
      "/images/douro_boat_tour_1771612994491.png",
      "/images/douro-premium.jpg"
    ],
    "boatBadge": {
      "pt": "Barco Privado Exclusivo",
      "en": "Exclusive Private Boat",
      "es": "Barco Privado Exclusivo",
      "fr": "Bateau Privé Exclusif",
      "de": "Exklusives Privates Boot"
    },
    "experienceBadge": {
      "pt": "Vinho Verde & Museu Familiar",
      "en": "Vinho Verde & Family Wine Museum",
      "es": "Vinho Verde y Museo Familiar",
      "fr": "Vinho Verde & Musée Familial",
      "de": "Vinho Verde & Familien-Weinmuseum"
    }
  },
  {
    "id": "douro-wine-gastronomy",
    "code": "North-002",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Douro: Experiência Privada com Gastronomia de Excelência, Cruzeiro & Prova de Vinhos",
      "en": "Douro: Private Wine & Gourmet Experience with River Cruise",
      "es": "Duero: Experiencia Privada con Gastronomía de Excelencia, Crucero y Vinos",
      "fr": "Douro : Expérience Privée Gastronomique, Croisière & Dégustation de Vins",
      "de": "Douro: Privates Gourmet-Erlebnis mit Schifffahrt & Weinverkostung"
    },
    "subtitle": {
      "pt": "Almoço gastronómico num restaurante de referência, cruzeiro panorâmico pelo Rio Douro e prova de vinhos selecionados numa quinta prestigiada.",
      "en": "Gourmet dining at a celebrated Douro restaurant, scenic river cruise, and curated wine tasting at an elite estate.",
      "es": "Almuerzo gastronómico en un restaurante de referencia, crucero panorámico por el río Duero y cata en una finca prestigiosa.",
      "fr": "Déjeuner gastronomique dans une table de référence, croisière panoramique sur le Douro et dégustation de vins d'exception.",
      "de": "Gourmet-Mittagessen in einem Spitzenrestaurant, malerische Douro-Schifffahrt und erlesene Weinprobe auf einem Renommier-Weingut."
    },
    "tagline": {
      "pt": "Alta Gastronomia · Cruzeiro no Douro · Prova de Vinhos",
      "en": "Haute Cuisine · Douro Cruise · Fine Wine Tasting",
      "es": "Alta Gastronomía · Crucero en el Duero · Vinos Selectos",
      "fr": "Haute Gastronomie · Croisière Douro · Dégustation d'Élite",
      "de": "Spitzengastronomie · Douro-Bootsfahrt · Edle Weine"
    },
    "shortDesc": {
      "pt": "Descubra o Douro numa experiência privada que combina gastronomia de excelência, cruzeiro pelo rio e prova de vinhos selecionados, vivida com conforto e exclusividade.",
      "en": "Immerse yourself in the Douro with an exclusive journey pairing gourmet culinary artistry, a scenic river cruise, and an intimate wine tasting at a celebrated estate.",
      "es": "Descubra el Duero en una experiencia privada que combina gastronomía de excelencia, crucero por el río y cata de vinos seleccionados con total confort y exclusividad.",
      "fr": "Découvrez le Douro lors d'une escapade privée alliant gastronomie raffinée, croisière fluviale et dégustation de grands vins dans un domaine historique.",
      "de": "Erleben Sie das Douro-Tal auf einer privaten Tour, die Spitzengastronomie, eine idyllische Schifffahrt und eine edle Weinprobe harmonisch vereint."
    },
    "fullDesc": {
      "pt": [
        "Uma experiência privada desenhada sob medida para quem procura exclusividade, sofisticação e uma ligação genuína ao Vale do Douro. Sem horários rígidos impostos por grandes grupos: apenas o Douro ao seu próprio ritmo. A experiência começa com a recolha privada no seu hotel no Porto em veículo executivo climatizado com motorista-guia dedicado.",
        "À medida que nos aproximamos do vale, percorremos troços cénicos da famosa Estrada Nacional 222, repetidamente eleita uma das estradas panorâmicas mais belas do mundo, onde o rio serpenteia abraçado por encostas esculpidas em socalcos milenares.",
        "O dia prossegue com um almoço gastronómico inesquecível num restaurante de referência da região duriense, sob curadoria culinária de excelência e harmonizado com vinhos de eleição. Sabores tradicionais portugueses reinterpretados com mestria contemporânea valorizam os melhores produtos sazonais da terra.",
        "Após o almoço, embarque num cruzeiro panorâmico pelas águas límpidas do Douro para contemplar a paisagem a partir do coração do rio. Em seguida, visite uma propriedade vinícola de referência para uma prova comentada de vinhos DOC Douro e do Porto de lote superior antes do regresso confortável ao Porto."
      ],
      "en": [
        "A private journey crafted for travelers who value refined exclusivity, authentic comfort, and unhurried luxury. Free from crowd schedules, you experience the Douro entirely at your own pace. Depart from your Porto hotel in an executive vehicle with a dedicated wine-expert chauffeur-guide.",
        "Travel along dramatic stretches of the world-famous N222 highway, celebrated as one of the planet's most scenic drives, where the Douro River winds through ancient terraced hillsides.",
        "Savor a memorable gourmet luncheon at one of the valley's most acclaimed dining establishments, thoughtfully paired with exquisite regional vintages. Traditional Portuguese gastronomy is elevated through modern culinary artistry and seasonal local produce.",
        "Following lunch, embark on a serene river cruise to admire the steep vineyard estates from the water. Conclude with a private tasting of premium DOC Douro and vintage Port wines at an esteemed wine estate before a smooth drive back to Porto."
      ],
      "es": [
        "Una experiencia privada concebida para quienes buscan exclusividad, confort y alta gastronomía en el Duero. Salida desde Oporto en vehículo ejecutivo con chófer-guía dedicado.",
        "Recorra la célebre carretera panorámica N222, admirando paisajes espectaculares de viñedos que descienden hacia el cauce del río.",
        "Disfrute de un almuerzo gastronómico inolvidable en un restaurante de referencia, maridado con vinos excepcionales de la región.",
        "Embarque en un crucero relajante por el río Duero y culmine la jornada con una cata comentada de vinos DOC y Oporto en una prestigiosa bodega antes de retornar a Oporto."
      ],
      "fr": [
        "Une expérience privée d'exception dédiée aux amateurs de haute gastronomie et de grands vins dans la Vallée du Douro. Départ de Porto en berline exécutive avec guide sommelier.",
        "Traversez la légendaire route panoramique N222, considérée comme l'une des plus belles au monde, serpentant au fil des vignobles en terrasses.",
        "Savourez un déjeuner gastronomique raffiné dans un restaurant réputé, sublimé par des accords mets et vins méticuleusement choisis.",
        "Embarquez pour une croisière paisible sur le Douro puis profitez d'une dégustation privée de grands crus Douro et Porto dans une quinta historique avant de rentrer à Porto."
      ],
      "de": [
        "Ein exklusives privates Erlebnis für Feinschmecker und Weinliebhaber im Douro-Tal. Abholung in Porto im komfortablen Executive-Fahrzeug mit persönlichem Guide.",
        "Fahrt entlang der weltberühmten Panoramastraße N222 mit atemberaubenden Blicken auf die terrassierten Weinberge des UNESCO-Welterbes.",
        "Genießen Sie ein unvergessliches Gourmet-Mittagessen in einem renommierten Restaurant, meisterhaft abgestimmt mit erlesenen Douro-Weinen.",
        "Erleben Sie eine entspannte Schifffahrt auf dem Fluss und eine geführte Verkostung feiner DOC- und Portweine auf einem traditionellen Weingut vor der Rückfahrt nach Porto."
      ]
    },
    "duration": {
      "pt": "7 horas",
      "en": "7 hours",
      "es": "7 horas",
      "fr": "7 heures",
      "de": "7 Stunden"
    },
    "highlights": {
      "pt": [
        "Experiência 100% privada com recolha e regresso no hotel em veículo executivo",
        "Passagem panorâmica pela emblemática Estrada Nacional 222",
        "Almoço gastronómico de excelência com harmonização de vinhos de topo",
        "Cruzeiro panorâmico de 1 hora pelo Rio Douro",
        "Prova comentada de vinhos DOC Douro e Vinho do Porto numa quinta prestigiada",
        "Acompanhamento personalizado por motorista-guia especialista"
      ],
      "en": [
        "100% private journey with hotel pickup and drop-off in an executive vehicle",
        "Scenic drive along the world-renowned N222 highway",
        "Gourmet multi-course lunch paired with exceptional regional wines",
        "Scenic 1-hour Douro River cruise surrounded by vine-terraced slopes",
        "Guided tasting of select DOC Douro and Port wines at a historic quinta",
        "Dedicated wine-expert guide throughout the day"
      ],
      "es": [
        "Experiencia 100% privada con recogida y regreso al hotel en vehículo ejecutivo",
        "Recorrido panorámico por la emblemática carretera N222",
        "Almuerzo gastronómico de alto nivel con maridaje de vinos selectos",
        "Crucero panorámico de 1 hora por el río Duero",
        "Cata comentada de vinos DOC Duero y Oporto en una bodega histórica",
        "Atención personalizada con chófer-guía sumiller"
      ],
      "fr": [
        "Circuit 100% privé avec prise en charge hôtel en véhicule exécutif",
        "Parcours scénique le long de la prestigieuse route N222",
        "Déjeuner gastronomique haut de gamme avec accords mets et vins",
        "Croisière d'une heure sur le fleuve Douro au cœur des vignes",
        "Dégustation commentée de crus DOC Douro et vins de Porto réputés",
        "Accompagnement VIP par un guide expert en œnologie"
      ],
      "de": [
        "100% private Tour mit persönlichem Hoteltransfer im Executive-Fahrzeug",
        "Fahrt entlang der berühmten Panoramastraße N222",
        "Gourmet-Mittagessen auf Spitzenniveau mit feiner Weinbegleitung",
        "1-stündige Panorama-Schifffahrt auf dem Douro",
        "Verkostung prämierter DOC Douro- und Portweine auf einem Traditionsweltgut",
        "Exklusive Betreuung durch einen weinkundigen Chauffeur-Guide"
      ]
    },
    "included": {
      "pt": [
        "Recolha e regresso porta a porta no seu hotel no Porto",
        "Transporte privado em veículo executivo climatizado",
        "Motorista-guia bilíngue dedicado e especialista em vinhos",
        "Percurso cénico pela famosa Estrada Nacional 222",
        "Almoço gastronómico completo num restaurante de referência",
        "Harmonização de vinhos selecionados durante a refeição",
        "Passeio de barco de 1 hora pelo Rio Douro",
        "Visita guiada e degustação de vinhos numa vinícola tradicional",
        "Água mineral a bordo",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Door-to-door pickup and return at your Porto accommodation",
        "Private transportation in a modern executive air-conditioned vehicle",
        "Dedicated bilingual chauffeur-guide with sommelier expertise",
        "Scenic drive along the legendary N222 route",
        "Multi-course gourmet lunch at a premier Douro dining destination",
        "Handpicked wine pairing served throughout lunch",
        "1-hour panoramic river cruise on the Douro",
        "Guided cellar tour and wine tasting at an authentic quinta",
        "Bottled water available on board",
        "Comprehensive passenger accident and liability insurance"
      ],
      "es": [
        "Recogida y regreso puerta a puerta en su hotel de Oporto",
        "Transporte privado en vehículo ejecutivo climatizado",
        "Chófer-guía bilingüe dedicado y especialista en vinos",
        "Paseo escénico por la famosa carretera N222",
        "Almuerzo gastronómico completo en restaurante de referencia",
        "Maridaje de vinos selectos durante toda la comida",
        "Paseo en barco de 1 hora por el río Duero",
        "Visita guiada y cata de vinos en una finca tradicional",
        "Agua mineral a bordo",
        "Seguro de responsabilidad civil y accidentes personales"
      ],
      "fr": [
        "Prise en charge et retour à votre hébergement à Porto",
        "Transport privé en véhicule exécutif climatisé",
        "Chauffeur-guide bilingue dédié avec expertise en vins",
        "Parcours panoramique sur la célèbre route N222",
        "Déjeuner gastronomique complet dans un établissement réputé",
        "Accords mets-vins prestigieux servis au déjeuner",
        "Croisière panoramique d'une heure sur le Douro",
        "Visite guidée et dégustation de vins dans une quinta réputée",
        "Eau minérale fraîche à bord",
        "Assurance complète des passagers et responsabilité civile"
      ],
      "de": [
        "Bequeme Hotelabholung und Rückfahrt in Porto",
        "Privater Transport im klimatisierten Executive-Fahrzeug",
        "Engagierter zweisprachiger Guide mit Sommelier-Kenntnissen",
        "Panoramatour entlang der berühmten Straße N222",
        "Mehrgängiges Gourmet-Mittagessen in einem Spitzenrestaurant",
        "Hochwertige Weinbegleitung während des gesamten Essens",
        "1-stündige Schifffahrt auf dem Douro-Fluss",
        "Geführter Weingutsbesuch mit exklusiver Weinverkostung",
        "Mineralwasser an Bord inklusive",
        "Umfassende Personen- und Haftpflichtversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 549
      },
      {
        "pax": 2,
        "price": 599
      },
      {
        "pax": 3,
        "price": 649
      },
      {
        "pax": 4,
        "price": 699
      },
      {
        "pax": 5,
        "price": 749
      },
      {
        "pax": 6,
        "price": 799
      },
      {
        "pax": 7,
        "price": 899
      },
      {
        "pax": 8,
        "price": 949
      }
    ],
    "startingPrice": 549,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/douro-premium.jpg",
    "gallery": [
      "/images/douro-premium.jpg",
      "/images/douro_boat_tour_1771612994491.png",
      "/images/novo-picnic.jpg"
    ],
    "boatBadge": {
      "pt": "Cruzeiro no Rio Douro",
      "en": "Douro River Cruise",
      "es": "Crucero por el Río Duero",
      "fr": "Croisière sur le Douro",
      "de": "Douro-Schifffahrt"
    },
    "experienceBadge": {
      "pt": "Gastronomia de Excelência & N222",
      "en": "Gourmet Dining & Scenic N222",
      "es": "Alta Gastronomía y Ruta N222",
      "fr": "Gastronomie d'Élite & Route N222",
      "de": "Spitzenküche & Panoramastraße N222"
    }
  },
  {
    "id": "amarante-mateus-palace-douro",
    "code": "North-003",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Amarante, Palácio de Mateus e Douro: Tour Privado de Vinhos & Cultura",
      "en": "Amarante, Mateus Palace & Douro: Private Wine & Heritage Tour",
      "es": "Amarante, Palacio de Mateus y Duero: Tour Privado de Vinos y Cultura",
      "fr": "Amarante, Palais de Mateus & Douro : Circuit Privé Vins et Patrimoine",
      "de": "Amarante, Mateus-Palast & Douro: Private Kultur- und Weintour"
    },
    "subtitle": {
      "pt": "Centro histórico de Amarante, visita guiada ao Palácio de Mateus e seus jardins barrocos, almoço tradicional e prova exclusiva de 5 vinhos Martha's.",
      "en": "Historic Amarante, audioguided Mateus Palace and baroque gardens, traditional lunch, and exclusive 5-wine tasting including aged 10 & 20 Year Ports.",
      "es": "Centro histórico de Amarante, visita al Palacio de Mateus y jardines barrocos, almuerzo tradicional y cata exclusiva de 5 vinos Martha's.",
      "fr": "Centre historique d'Amarante, visite du Palais de Mateus et ses jardins baroques, déjeuner traditionnel et dégustation de 5 vins Martha's.",
      "de": "Historisches Amarante, Führung im barocken Mateus-Palast mit Gärten, traditionelles Mittagessen und exklusive 5-Wein-Probe von Martha's."
    },
    "tagline": {
      "pt": "Palácio de Mateus · Amarante · Vinhos Martha's",
      "en": "Mateus Palace · Amarante · Martha's Reserve Wines",
      "es": "Palacio de Mateus · Amarante · Vinos Martha's",
      "fr": "Palais de Mateus · Amarante · Vins Martha's",
      "de": "Mateus-Palast · Amarante · Martha's Weine"
    },
    "shortDesc": {
      "pt": "Descubra Amarante, o monumental Palácio de Mateus e o Douro num tour privado com almoço tradicional e degustação exclusiva de 5 vinhos, incluindo Portos de 10 e 20 anos.",
      "en": "Discover picturesque Amarante, the aristocratic Mateus Palace and the Douro on a private tour featuring authentic Portuguese lunch and an exclusive tasting of 5 Martha's wines, including 10 and 20-Year-Old Ports.",
      "es": "Descubra Amarante, el monumental Palacio de Mateus y el Duero en un tour privado con almuerzo tradicional y cata exclusiva de 5 vinos seleccionados.",
      "fr": "Découvrez Amarante, le majestueux Palais de Mateus et le Douro lors d'un circuit privé incluant déjeuner traditionnel et dégustation de 5 vins réputés.",
      "de": "Entdecken Sie Amarante, den prachtvollen Mateus-Palast und das Douro-Tal auf einer privaten Tour mit authentischem Mittagessen und Verkostung von 5 Spitzenweinen."
    },
    "fullDesc": {
      "pt": [
        "Descubra uma fusão fascinante de história, arquitetura senhorial e alta tradição vinícola num itinerário desenhado para revelar a essência aristocrática do Norte de Portugal. A manhã começa com a viagem privada até Amarante, uma das vilas mais românticas da região. Caminhe pelo centro histórico empedrado, admire a icónica Igreja e Ponte de São Gonçalo sobre as águas serenas do Rio Tâmega e desfrute da doçaria tradicional amarantina.",
        "Em seguida, seguimos para Vila Real para descobrir o imponente Palácio de Mateus, obra-prima máxima do barroco português. Com audioguia no interior, conheça a biblioteca de livros raros, os tetos entalhados em madeira e os salões históricos. Passeie pelos famosos jardins geométricos barrocos, pelo túnel de cedros e pelo espelho d'água onde a fachada do palácio se reflete de forma inesquecível.",
        "Após a imersão histórica, desfrute de um saboroso almoço tradicional português num restaurante acolhedor cuidadosamente selecionado, celebrando as receitas mais genuínas da gastronomia transmontana e duriense.",
        "À tarde, a viagem atinge o seu clímax enológico com uma visita guiada às prestigiadas instalações da família Martha's, uma das mais antigas famílias produtoras do Douro. Termine com uma prova comentada de cinco vinhos de eleição: Martha's DOC Colheita Branco, Martha's DOC Reserva Tinto, Martha's Porto Pink e os preciosos Martha's Porto 10 Anos e Martha's Porto 20 Anos envelhecidos em cascos de carvalho."
      ],
      "en": [
        "Immerse yourself in a captivating blend of noble heritage, baroque architecture, and winemaking mastery. Your day begins with a private drive to picturesque Amarante, nestled beside the tranquil Tâmega River. Explore its cobbled streets, the iconic 16th-century Church of São Gonçalo, and the historic stone bridge celebrated in Portuguese lore.",
        "Continue to Vila Real to visit the world-famous Mateus Palace, considered the pinnacle of Portuguese baroque architecture. Enjoy an interior audio-guided visit exploring ornate carved ceilings, library archives, and historical salons. Walk through the romantic French gardens, the cedar tunnel, and the legendary mirror lake.",
        "Take time to relish a multi-course traditional Portuguese lunch in an authentic local setting, savoring regional dishes prepared with local ingredients.",
        "In the afternoon, enjoy an exclusive private wine experience with the historic Martha's family, one of the oldest wine estates in the Douro. Savor a guided tasting of five distinguished wines: Martha's DOC Colheita White, Martha's DOC Reserve Red, Martha's Rosé Port, followed by exceptional 10-Year and 20-Year-Old aged Tawny Ports."
      ],
      "es": [
        "Una jornada perfecta entre patrimonio monumental, jardines palaciegos y grandes vinos. Comenzamos en la bella Amarante, descubriendo su iglesia, el puente medieval de São Gonçalo y las orillas del río Tâmega.",
        "Visite el Palacio de Mateus, obra cumbre del barroco portugués. Con audioguía, descubra sus estancias históricas, techos de madera noble y sus famosos jardines con el túnel de cedros.",
        "Saboree un almuerzo tradicional portugués en un ambiente acogedor antes de sumergirse en el universo del vino.",
        "Por la tarde, viva una experiencia vinícola premium con la familia Martha's, concluyendo con una cata comentada de 5 vinos selectos: DOC Blanco, DOC Reserva Tinto, Oporto Pink y joyas de Oporto Tawny de 10 y 20 Años."
      ],
      "fr": [
        "Une échappée alliant raffinement baroque, charme médiéval et grands crus. Commencez par la ravissante ville d'Amarante, son pont historique et l'église Saint-Gonçalo dominant le fleuve Tâmega.",
        "Pénétrez dans le somptueux Palais de Mateus, joyau baroque du Portugal. Explorez les appartements royaux avec audioguide et déambulez dans ses jardins à la française et son tunnel de cèdres centenaires.",
        "Profitez d'un déjeuner traditionnel portugais dans une ambiance chaleureuse avec spécialités régionales.",
        "L'après-midi est dédiée à une expérience viticole d'exception chez Martha's, maison historique du Douro, avec dégustation guidée de 5 vins prestigieux, dont deux grands Portos Tawny de 10 et 20 ans d'âge."
      ],
      "de": [
        "Erleben Sie die Symbiose aus adliger Geschichte, barocker Baukunst und exzellenter Weinkultur. Der Tag beginnt im malerischen Amarante an den Ufern des Rio Tâmega mit seiner historischen Brücke.",
        "Besichtigen Sie den weltberühmten barocken Mateus-Palast mit Audioguide: Prunksäle, holzgeschnitzte Decken und die meisterhaften Gärten mit dem Zypressentunnel und dem Schlosssee.",
        "Stärken Sie sich bei einem traditionellen portugiesischen Mittagessen mit authentischen Spezialitäten der Region.",
        "Am Nachmittag erwartet Sie eine Premium-Weinverkostung im Traditionsweingut Martha's: 5 ausgewählte Spitzenweine, darunter feine DOC-Weine sowie edle 10 und 20 Jahre gereifte Portweine."
      ]
    },
    "duration": {
      "pt": "9 horas",
      "en": "9 hours",
      "es": "9 horas",
      "fr": "9 heures",
      "de": "9 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue e wine master",
        "Visita ao centro histórico de Amarante e Ponte de São Gonçalo",
        "Entrada e audioguia no monumental Palácio de Mateus",
        "Acesso aos jardins barrocos geométricos e túnel de cedros",
        "Almoço tradicional português com sabores regionais autênticos",
        "Visita guiada e degustação de 5 vinhos premium Martha's (DOC e Portos 10 e 20 Anos)"
      ],
      "en": [
        "100% private tour with dedicated bilingual wine-master chauffeur",
        "Guided walk in historic Amarante and the São Gonçalo bridge",
        "Admission and audioguide inside the majestic Mateus Palace",
        "Stroll through the baroque gardens and historic cedar tunnel",
        "Authentic regional Portuguese lunch in a charming atmosphere",
        "Guided tasting of 5 premium Martha's wines including 10 & 20 Year aged Ports"
      ],
      "es": [
        "Tour 100% privado con chófer-guía bilingüe especialista en vinos",
        "Paseo por el casco histórico de Amarante y puente de São Gonçalo",
        "Entrada y audioguía en el monumental Palacio de Mateus",
        "Recorrido por los jardines barrocos y el túnel de cedros",
        "Almuerzo tradicional con auténtica gastronomía portuguesa",
        "Cata guiada de 5 vinos selectos Martha's (DOC y Oportos de 10 y 20 Años)"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide bilingue sommelier",
        "Découverte d'Amarante et du pont médiéval de São Gonçalo",
        "Billet et audioguide pour la visite intérieure du Palais de Mateus",
        "Accès aux célèbres jardins baroques et à la voûte de cèdres",
        "Déjeuner portugais traditionnel aux saveurs du terroir",
        "Dégustation guidée de 5 vins Martha's dont Portos 10 et 20 ans d'âge"
      ],
      "de": [
        "100% private Tour mit weinkundigem, zweisprachigem Guide",
        "Rundgang durch die Altstadt von Amarante und über die São Gonçalo Brücke",
        "Eintritt und Audioguide im barocken Mateus-Palast",
        "Spaziergang durch die weltberühmten Schlossgärten und den Zypressentunnel",
        "Traditionelles portugiesisches Mittagessen in historischem Ambiente",
        "Exklusive Verkostung von 5 Martha's Spitzenweinen (inkl. 10 & 20 Jahre Portwein)"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilingue especialista em vinhos portugueses",
        "Visita ao centro histórico de Amarante e Rio Tâmega",
        "Ingresso no Palácio de Mateus com audioguia no interior",
        "Acesso aos jardins barrocos, espelho de água e túnel de cedros",
        "Almoço tradicional português completo",
        "Visita guiada às instalações vinícolas premium da família Martha's",
        "Degustação de 5 vinhos selecionados: Martha's DOC Branco, DOC Reserva Tinto, Porto Pink, Porto 10 Anos e Porto 20 Anos",
        "Água mineral a bordo durante todo o percurso",
        "Cadeirinha ou assento de bebé disponível mediante solicitação prévia",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual driver-guide specialized in Portuguese wines",
        "Visit to the historic center of Amarante and Tâmega River",
        "Admission to Mateus Palace with interior audio guide",
        "Full access to the baroque gardens, lake mirror, and cedar tunnel",
        "Multi-course traditional Portuguese lunch",
        "Guided visit to the premium Martha's family wine production",
        "Tasting of 5 selected wines: Martha's DOC White, DOC Reserve Red, Pink Port, 10-Year Port, and 20-Year Port",
        "Complimentary bottled water throughout the day",
        "Baby or child safety seat provided upon prior request",
        "Comprehensive civil liability and personal accident insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe especialista en vinos portugueses",
        "Visita al centro histórico de Amarante y río Tâmega",
        "Entrada al Palacio de Mateus con audioguía interior",
        "Acceso completo a los jardines barrocos y túnel de cedros",
        "Almuerzo tradicional portugués completo",
        "Visita guiada a la bodega de la prestigiosa familia Martha's",
        "Cata de 5 vinos seleccionados: DOC Blanco, DOC Reserva Tinto, Oporto Pink, Oporto 10 Años y Oporto 20 Años",
        "Agua mineral a bordo durante todo el trayecto",
        "Silla infantil disponible bajo petición previa",
        "Seguro de accidentes personales y responsabilidad civil"
      ],
      "fr": [
        "Transport privé en véhicule grand confort au départ de Porto",
        "Chauffeur-guide bilingue expert en œnologie portugaise",
        "Découverte d'Amarante et des berges du fleuve Tâmega",
        "Entrée au Palais de Mateus avec audioguide intérieur inclus",
        "Accès complet aux jardins d'apparat et au tunnel de cèdres",
        "Déjeuner portugais traditionnel complet",
        "Visite privée du domaine viticole haut de gamme Martha's",
        "Dégustation de 5 vins d'exception : DOC Blanc, DOC Réserve Rouge, Porto Pink, Porto 10 Ans et Porto 20 Ans",
        "Bouteilles d'eau minérale à disposition à bord",
        "Siège pour enfant disponible sur demande préalable",
        "Assurance complète responsabilité civile et accidents"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Zweisprachiger Fahrer-Guide mit Spezialisierung auf portugiesische Weine",
        "Besuch der Altstadt von Amarante am Fluss Tâmega",
        "Eintritt in den Mateus-Palast mit Audioguide für die Innenräume",
        "Vollständiger Zugang zu den barocken Gärten und dem Zypressentunnel",
        "Traditionelles mehrgängiges portugiesisches Mittagessen",
        "Geführter Besuch im renommierten Weingut der Familie Martha's",
        "Verkostung von 5 Premium-Weinen: DOC Weiß, DOC Reserve Rot, Pink Port, 10 Jahre Port und 20 Jahre Port",
        "Mineralwasser während der Fahrt inklusive",
        "Kindersitz auf Anfrage vorab verfügbar",
        "Umfassende Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 530
      },
      {
        "pax": 2,
        "price": 580
      },
      {
        "pax": 3,
        "price": 630
      },
      {
        "pax": 4,
        "price": 680
      },
      {
        "pax": 5,
        "price": 730
      },
      {
        "pax": 6,
        "price": 780
      },
      {
        "pax": 7,
        "price": 880
      },
      {
        "pax": 8,
        "price": 930
      }
    ],
    "startingPrice": 530,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_003_palacio_mateus.jpg",
    "gallery": [
      "/images/tours/north_003_palacio_mateus.jpg",
      "/images/douro-premium.jpg",
      "/images/douro_boat_tour_1771612994491.png"
    ],
    "experienceBadge": {
      "pt": "Palácio de Mateus & Portos 10 e 20 Anos",
      "en": "Mateus Palace & 10 & 20 Year Aged Ports",
      "es": "Palacio de Mateus y Oportos de 10 y 20 Años",
      "fr": "Palais de Mateus & Portos de 10 et 20 Ans",
      "de": "Mateus-Palast & 10 & 20 Jahre alte Portweine"
    }
  },
  {
    "id": "lamego-douro",
    "code": "North-004",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Lamego & Douro: Tour Privado de Vinhos, Gastronomia e Cruzeiro Privado",
      "en": "Lamego & Douro: Private Wine, Heritage & Private Cruise Tour",
      "es": "Lamego y Duero: Tour Privado de Vinos, Gastronomía y Crucero Privado",
      "fr": "Lamego & Douro : Circuit Privé Vins, Gastronomie et Croisière Privée",
      "de": "Lamego & Douro: Private Wein-, Kultur- und Schifffahrtstour"
    },
    "subtitle": {
      "pt": "Castelo e Santuário dos Remédios em Lamego, almoço numa quinta tradicional, cruzeiro privado exclusivo de 1 hora e degustação de vinhos do Douro e Porto.",
      "en": "Lamego Castle and Sanctuary of Remédios, wine estate lunch, 1-hour exclusive private river cruise, and Douro DOC & Port tasting.",
      "es": "Castillo y Santuario de los Remedios en Lamego, almuerzo en una quinta tradicional, crucero privado exclusivo de 1 hora y cata de vinos del Duero y Oporto.",
      "fr": "Château et Sanctuaire des Remédios à Lamego, déjeuner dans un domaine, croisière privée d'une heure et dégustation de vins du Douro et Porto.",
      "de": "Burg und Heiligtum Nossa Senhora dos Remédios in Lamego, Mittagessen auf einem Weingut, 1-stündige private Schifffahrt und Weinprobe."
    },
    "tagline": {
      "pt": "Lamego Histórico · Quinta no Douro · Barco Privado",
      "en": "Historic Lamego · Douro Estate · Private Boat",
      "es": "Lamego Histórico · Finca en el Duero · Barco Privado",
      "fr": "Lamego Historique · Domaine Douro · Bateau Privé",
      "de": "Historisches Lamego · Douro-Weingut · Privates Boot"
    },
    "shortDesc": {
      "pt": "Descubra Lamego e o Douro em um tour privado, com almoço em uma quinta, cruzeiro privado entre vinhedos e degustação de vinhos selecionados numa experiência autêntica.",
      "en": "Experience historical Lamego and the Douro Valley on an authentic private tour featuring monument visits, a scenic quinta lunch, an exclusive 1-hour private boat cruise, and fine wine tasting.",
      "es": "Descubra Lamego y el Duero en un tour privado, con almuerzo en una finca tradicional, crucero privado entre viñedos y cata de vinos seleccionados.",
      "fr": "Découvrez Lamego et le Douro lors d'un circuit privé mêlant patrimoine historique, déjeuner dans une quinta, croisière privée sur le fleuve et dégustation de vins.",
      "de": "Entdecken Sie Lamego und das Douro-Tal auf einer privaten Tour mit Burgbesichtigung, Mittagessen auf einem Weingut, privater Schifffahrt und erlesener Weinprobe."
    },
    "fullDesc": {
      "pt": [
        "Viva um dia fascinante que começa entre castelos e santuários monumentais e culmina entre socalcos, sabores genuínos e grandes vinhos do Douro. Partimos do Porto em transporte executivo com destino a Lamego, uma das cidades históricas mais imponentes e nobres do Norte de Portugal.",
        "Inicie a visita pelo Castelo de Lamego, antiga fortificação medieval de origem mourisca e cristã que guarda séculos de glória militar. Em seguida, deslumbre-se com o monumental Santuário de Nossa Senhora dos Remédios: a sua impressionante escadaria barroca de 686 degraus com azulejos, fontes, obeliscos e jardins proporciona um miradouro inigualável sobre a cidade.",
        "De Lamego, descemos em direção ao Vale do Douro. O cenário transforma-se à medida que nos aproximamos das margens do rio, rodeados por socalcos de vinhas esculpidos na montanha. Numa quinta tradicional duriense, desfrute de um almoço regional completo harmonizado com vinhos da propriedade.",
        "À tarde, viva um dos momentos mais marcantes com um cruzeiro privado de 1 hora pelo Rio Douro num barco reservado exclusivamente para o seu grupo. Para concluir a experiência, visite uma produtora familiar secular para uma prova comentada de vinhos DOC Douro e Vinho do Porto."
      ],
      "en": [
        "Embark on an extraordinary private day tour bridging monumental history and world-class wine country. Depart from Porto in executive comfort heading to historic Lamego, one of the most culturally rich towns in Northern Portugal.",
        "Begin at the medieval Lamego Castle, exploring ancient battlements with views over the historic center. Next, marvel at the grand Sanctuary of Nossa Senhora dos Remédios, famed for its sweeping 686-step baroque staircase decorated with hand-painted blue azulejos, statues, and fountains.",
        "Descend into the heart of the Douro Valley, where terraced vineyards cascade toward the water. Savor an authentic multi-course lunch at a traditional wine estate, thoughtfully paired with estate-bottled Douro DOC wines.",
        "In the afternoon, board an exclusive 1-hour private boat cruise on the Douro River, soaking in the serene UNESCO vineyard vistas. Conclude with an intimate cellar tour and tasting of premium DOC Douro and aged Port wines before returning to Porto."
      ],
      "es": [
        "Una jornada inolvidable que une fortalezas medievales, santuarios barrocos y los viñedos del Duero. Comenzamos en la histórica ciudad de Lamego, visitando su castillo medieval y el grandioso Santuario de Nuestra Señora de los Remedios con su famosa escalinata de azulejos.",
        "Descendemos al Valle del Duero para deleitarnos con un almuerzo tradicional en una quinta vinícola típica, armonizado con vinos de la propiedad.",
        "Por la tarde, disfrute de un crucero privado exclusivo de 1 hora por las tranquilas aguas del Duero, navegando entre bancales milenarios.",
        "Termine la experiencia con una cata comentada de vinos DOC Duero y Oporto en una bodega familiar antes del regreso a Oporto."
      ],
      "fr": [
        "Une journée mémorable reliant architecture sacrée, forteresses médiévales et l'élégance viticole du Douro. Départ de Porto vers Lamego pour visiter son château historique et le majestueux Sanctuaire de Nossa Senhora dos Remédios avec ses 686 marches ornées d'azulejos.",
        "Rejoignez ensuite les rives du Douro pour un déjeuner traditionnel complet dans un domaine viticole réputé, sublimé par les vins de la propriété.",
        "L'après-midi, embarquez pour une croisière privée d'une heure sur le fleuve Douro à bord d'un bateau affrété exclusivement pour votre groupe.",
        "Concluez par une dégustation commentée de grands crus du Douro et de vins de Porto dans une propriété familiale avant de regagner Porto."
      ],
      "de": [
        "Ein erlebnisreicher Tag zwischen monumentaler Geschichte und weltberühmten Weinbergen. Fahrt ab Porto nach Lamego: Besichtigung der mittelalterlichen Burg und des prachtvollen Heiligtums Nossa Senhora dos Remédios mit seiner azulejoverzierten barocken Freitreppe.",
        "Weiterfahrt ins Douro-Tal zu einem traditionellen Mittagessen auf einem Weingut, perfekt abgestimmt mit Weinen des Hauses.",
        "Am Nachmittag erwartet Sie eine 1-stündige private Schifffahrt auf dem Douro – exklusiv für Ihre Gruppe gechartert.",
        "Zum Abschluss genießen Sie eine geführte Verkostung von DOC Douro- und Portweinen auf einem familiengeführten Weingut vor der Rückkehr nach Porto."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado em veículo executivo com guia bilingue e wine master",
        "Visita ao Castelo medieval de Lamego e centro histórico",
        "Visita ao monumental Santuário de Nossa Senhora dos Remédios e escadaria barroca",
        "Almoço tradicional regional numa quinta com harmonização de vinhos",
        "Cruzeiro privado de 1 hora pelo Rio Douro reservado exclusivamente para o grupo",
        "Visita guiada e degustação de vinhos do Douro e Porto em produtora familiar"
      ],
      "en": [
        "100% private journey in an executive vehicle with dedicated wine-master guide",
        "Guided exploration of medieval Lamego Castle and historic alleys",
        "Visit to the iconic Sanctuary of Nossa Senhora dos Remédios and baroque stairway",
        "Multi-course traditional lunch at a Douro quinta with paired wines",
        "Exclusive 1-hour private Douro River boat cruise reserved solely for your party",
        "Guided cellar tour and tasting of Douro DOC & Port wines at a family estate"
      ],
      "es": [
        "Tour 100% privado en vehículo ejecutivo con guía sumiller",
        "Visita al Castillo medieval de Lamego y casco histórico",
        "Visita al Santuario de Nuestra Señora de los Remedios y escalinata barroca",
        "Almuerzo tradicional en una quinta vinícola con maridaje de vinos",
        "Crucero privado de 1 hora por el río Duero exclusivo para su grupo",
        "Cata comentada de vinos DOC Duero y Oporto en una bodega familiar"
      ],
      "fr": [
        "Circuit 100% privé en véhicule exécutif avec guide sommelier",
        "Visite du château médiéval de Lamego et du centre historique",
        "Visite du Sanctuaire de Nossa Senhora dos Remédios et de son escalier d'apparat",
        "Déjeuner traditionnel dans une quinta avec accords mets et vins",
        "Croisière privée d'une heure sur le Douro réservée exclusivement à votre groupe",
        "Visite guidée et dégustation de vins du Douro et Porto dans un domaine familial"
      ],
      "de": [
        "100% private Tour im Executive-Fahrzeug mit weinkundigem Guide",
        "Besuch der mittelalterlichen Burg und des Zentrums von Lamego",
        "Besichtigung des Wallfahrtsortes Nossa Senhora dos Remédios mit Freitreppe",
        "Traditionelles Mittagessen auf einem Douro-Weingut mit Weinbegleitung",
        "1-stündige private Douro-Schifffahrt exklusiv für Ihre Gruppe",
        "Führung und Weinprobe von Douro DOC- und Portweinen auf einem Traditionsgut"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Guia bilingue/trilíngue dedicado durante toda a experiência",
        "Visita ao Castelo de Lamego e centro histórico",
        "Visita ao Santuário de Nossa Senhora dos Remédios",
        "Almoço tradicional regional completo numa quinta do Douro",
        "Harmonização de vinhos selecionados durante o almoço",
        "Passeio privado de barco de 1 hora pelo Rio Douro",
        "Água a bordo durante o cruzeiro",
        "Visita e prova guiada em produtora familiar de vinhos do Douro e Porto",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated multilingual chauffeur-guide throughout the journey",
        "Guided visit to Lamego Castle and historic center",
        "Visit to the Sanctuary of Nossa Senhora dos Remédios",
        "Full traditional regional lunch at an authentic Douro quinta",
        "Curated wine pairing served during lunch",
        "Exclusive 1-hour private boat cruise on the Douro River",
        "Bottled water on board the boat",
        "Cellar visit and guided wine tasting of Douro and Port wines",
        "Comprehensive personal accident and civil liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía multilingüe dedicado durante todo el tour",
        "Visita al Castillo de Lamego y casco histórico",
        "Visita al Santuario de Nuestra Señora de los Remedios",
        "Almuerzo regional completo en una finca del Duero",
        "Maridaje de vinos selectos durante el almuerzo",
        "Crucero privado de 1 hora por el río Duero",
        "Agua a bordo durante el paseo en barco",
        "Visita y cata de vinos DOC Duero y Oporto en bodega familiar",
        "Seguro de accidentes personales y responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour au départ de Porto",
        "Chauffeur-guide multilingue dédié pendant toute la journée",
        "Visite du château médiéval de Lamego et du centre historique",
        "Visite du Sanctuaire de Nossa Senhora dos Remédios",
        "Déjeuner régional traditionnel complet dans une quinta du Douro",
        "Accords mets-vins servis pendant le déjeuner",
        "Croisière privée d'une heure sur le fleuve Douro",
        "Eau minérale à bord du bateau",
        "Visite et dégustation guidée de vins du Douro et de Porto",
        "Assurance responsabilité civile et accidents corporels"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Engagierter mehrsprachiger Guide während des gesamten Tages",
        "Besuch der Burg und des historischen Zentrums von Lamego",
        "Besuch des Heiligtums Nossa Senhora dos Remédios",
        "Mehrgängiges traditionelles Mittagessen auf einem Douro-Weingut",
        "Erlesene Weinbegleitung zum Mittagessen",
        "1-stündige private Schifffahrt auf dem Douro-Fluss",
        "Mineralwasser an Bord des Bootes",
        "Kellerführung und Weinprobe von Douro- und Portweinen",
        "Umfassende Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 540
      },
      {
        "pax": 2,
        "price": 590
      },
      {
        "pax": 3,
        "price": 640
      },
      {
        "pax": 4,
        "price": 690
      },
      {
        "pax": 5,
        "price": 740
      },
      {
        "pax": 6,
        "price": 790
      },
      {
        "pax": 7,
        "price": 890
      },
      {
        "pax": 8,
        "price": 940
      }
    ],
    "startingPrice": 540,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_004_lamego_remedios.jpg",
    "gallery": [
      "/images/tours/north_004_lamego_remedios.jpg",
      "/images/douro-premium.jpg",
      "/images/cinematic-style-couple-vineyard.jpg"
    ],
    "boatBadge": {
      "pt": "Barco Privado Exclusivo",
      "en": "Exclusive Private Boat",
      "es": "Barco Privado Exclusivo",
      "fr": "Bateau Privé Exclusif",
      "de": "Exklusives Privates Boot"
    },
    "experienceBadge": {
      "pt": "Santuário dos Remédios & Bôla de Lamego",
      "en": "Remédios Sanctuary & Lamego Heritage",
      "es": "Santuario de los Remedios y Tradición",
      "fr": "Sanctuaire des Remédios & Histoire",
      "de": "Wallfahrtsort Remédios & Tradition"
    }
  },
  {
    "id": "douro-private-celebration",
    "code": "North-005",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Celebre no Douro: Workshop de Cocktails, Brunch de Luxo & Cruzeiro Privado com Espumante",
      "en": "Celebrate in the Douro: Cocktail Workshop, Luxury Brunch & Private Cruise",
      "es": "Celebra en el Duero: Taller de Cócteles, Brunch y Crucero Privado con Espumoso",
      "fr": "Célébrez dans le Douro : Atelier Cocktails, Brunch & Croisière Privée avec Bulles",
      "de": "Feiern im Douro-Tal: Cocktail-Workshop, Luxus-Brunch & Private Bootsfahrt"
    },
    "subtitle": {
      "pt": "Workshop prático de cocktails com bartender, brunch panorâmico com bôla de carne e vinhos locais, e 1 hora de navegação exclusiva no Pinhão com espumante e música a bordo.",
      "en": "Hands-on cocktail masterclass, scenic vineyard brunch with regional delicacies, and an exclusive 1-hour private cruise in Pinhão with sparkling wine and curated music.",
      "es": "Taller práctico de cócteles con bartender, brunch panorámico con bôla de carne y vinos locales, y crucero privado de 1 hora en Pinhão con espumoso y música.",
      "fr": "Atelier de mixologie avec barman, brunch gourmand avec bôla de carne et vins locaux, et croisière privée d'une heure à Pinhão avec bulles et musique.",
      "de": "Interaktiver Cocktail-Workshop mit Bartender, Weinberg-Brunch mit regionalen Köstlichkeiten und 1-stündige private Bootsfahrt in Pinhão mit Schaumwein und Musik."
    },
    "tagline": {
      "pt": "Celebrações VIP · Workshop Cocktails · Barco Privado c/ Espumante",
      "en": "VIP Celebrations · Cocktail Workshop · Private Boat with Bubbly",
      "es": "Celebraciones VIP · Taller Cócteles · Barco Privado con Espumoso",
      "fr": "Célébrations VIP · Atelier Cocktails · Bateau Privé & Bulles",
      "de": "VIP-Feiern · Cocktail-Workshop · Privates Boot & Sekt"
    },
    "shortDesc": {
      "pt": "Celebre com seu grupo de amigos, faça uma despedida de solteiro ou comemore uma data especial: workshop de cocktails, brunch português e cruzeiro privado com espumante no Douro.",
      "en": "The ultimate private celebration in the Douro: hands-on cocktail masterclass, delicious vineyard brunch with local wines, and an exclusive private river cruise with chilled sparkling wine and music.",
      "es": "Celebre con su grupo de amigos, despedida de soltero o fecha especial: taller de cócteles, brunch portugués y crucero privado con espumoso en el Duero.",
      "fr": "Célébrez un anniversaire ou un événement unique entre amis dans le Douro : atelier cocktails, brunch gourmand et croisière privée avec bulles et musique.",
      "de": "Feiern Sie stilvoll im Douro-Tal: interaktiver Cocktail-Workshop, traditioneller Brunch mit Weinen und private Schifffahrt mit Sekt und Musik."
    },
    "fullDesc": {
      "pt": [
        "Prepare-se para viver um dia inesquecível no Douro, especialmente concebido para celebrar momentos únicos com o seu grupo fechado de amigos ou família. Quer se trate de uma despedida de solteiro, aniversário, encontro de amigos ou uma ocasião marcante, esta experiência combina diversão, gastronomia portuguesa de topo, grandes vinhos e navegação exclusiva.",
        "A jornada começa com a recolha privada no Porto e uma viagem descontraída até ao coração do Vale do Douro. Ao chegar, inicia-se uma das partes mais animadas: um workshop privado e prático de cocktails. Sob orientação de um profissional experiente, aprenda técnicas de mixologia, descubra harmonizações botânicas com Vinho do Porto e participe ativamente na preparação das suas próprias criações.",
        "Após o workshop, desfrute de um delicioso brunch servido num ambiente elegante com vista privilegiada para os socalcos. O banquete inclui pão regional fresco, miniaturas da pastelaria tradicional portuguesa, a famosa bôla de carne duriense, tábua de queijos nobres e enchidos artesanais, tudo acompanhado por vinhos brancos e tintos da região.",
        "De seguida, seguimos para o cais do Pinhão para embarcar num barco privado reservado exclusivamente para o seu grupo. Durante uma hora, navegue pelas águas serenas do Douro enquanto brinda com espumante servido a bordo, desfruta da sua playlist favorita no sistema de som do barco e tira fotografias espetaculares das vinhas antes do regresso triunfal ao Porto."
      ],
      "en": [
        "Get ready for an extraordinary celebration in the Douro Valley, tailored specifically for milestones, birthdays, bachelor/bachelorette trips, or upscale gatherings with friends. This signature experience blends hands-on mixology, authentic Portuguese gastronomy, scenic relaxation, and a private party on the river.",
        "Depart from Porto in private executive comfort towards the heart of wine country. Upon arrival, kick off the fun with an exclusive private cocktail workshop. Guided by a master bartender, learn professional mixing techniques, discover innovative cocktail recipes using Port wine, and craft signature drinks for your party.",
        "Relax with a lavish brunch served in a private setting overlooking the vineyard hills. Feast on fresh regional breads, artisanal pastries, traditional savory bôla de carne, cured cheeses and smoked sausages, perfectly paired with estate white and red Douro wines.",
        "Head to the scenic Pinhão marina to board a private boat chartered exclusively for your group. For one blissful hour, cruise along the Douro River, toasting with chilled Portuguese sparkling wine, playing your favorite music on board, and capturing unforgettable memories before your private chauffeur drives you back to Porto."
      ],
      "es": [
        "La experiencia festiva y exclusiva definitiva en el Duero para grupos de amigos, aniversarios y despedidas de soltero. Salida privada desde Oporto hacia el corazón vinícola.",
        "Comience con un taller práctico de coctelería guiado por un bartender profesional, aprendiendo a crear deliciosos cócteles con bases de vino de Oporto e ingredientes locales.",
        "Disfrute de un brunch exquisito con vistas a los viñedos: bôla de carne tradicional, quesos curados, embutidos y excelentes vinos blancos y tintos del Duero.",
        "En Pinhão, embarque en un barco privado exclusivo para su grupo durante 1 hora, brindando con vino espumoso a bordo con música y paisajes impresionantes antes del retorno a Oporto."
      ],
      "fr": [
        "Une journée de fête et de raffinement dans le Douro, pensée pour célébrer enterrements de vie de célibataire, anniversaires et retrouvailles entre amis.",
        "Participez à un atelier privé de mixologie avec un barman expert : apprenez à élaborer des cocktails signatures à base de vin de Porto dans une ambiance festive et détendue.",
        "Savourez un brunch généreux face aux vignes : bôla de carne, fromages artisanaux, charcuteries fines et crus régionaux.",
        "Embarquez à Pinhão sur un bateau privé affrété rien que pour vous pour 1 heure de croisière avec musique et dégustation de vin effervescent portugais à bord."
      ],
      "de": [
        "Das ultimative private Feier-Erlebnis im Douro-Tal für Geburtstage, Junggesellenabschiede und besondere Anlässe mit Freunden.",
        "Starten Sie mit einem interaktiven Cocktail-Workshop unter Anleitung eines Profi-Bartenders und kreieren Sie eigene Signature-Drinks mit Portwein.",
        "Genießen Sie einen ausgiebigen Weinberg-Brunch mit regionalen Spezialitäten wie Bôla de Carne, feinem Käse, Schinken und Douro-Weinen.",
        "In Pinhão gehen Sie an Bord Ihres privaten Bootes: 1 Stunde exklusive Douro-Schifffahrt mit kühlem Sekt und Musik vor traumhafter Kulisse."
      ]
    },
    "duration": {
      "pt": "9h30",
      "en": "9.5 hours",
      "es": "9,5 horas",
      "fr": "9h30",
      "de": "9,5 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado concebido para celebrações e grupos de amigos",
        "Workshop prático e exclusivo de cocktails com bartender profissional",
        "Brunch requintado com bôla de carne, queijos, enchidos e vinhos locais",
        "Cruzeiro privado de 1 hora pelo Douro no Pinhão reservado exclusivamente para o grupo",
        "Espumante e música a bordo do barco privado",
        "Acompanhamento de Wine Master e motorista privado dedicado"
      ],
      "en": [
        "100% private celebration tour tailored for parties, birthdays & friends",
        "Hands-on private cocktail workshop with an expert bartender",
        "Lavish vineyard brunch with regional bôla de carne, cheeses & estate wines",
        "Exclusive 1-hour private boat cruise in Pinhão solely for your party",
        "Chilled sparkling wine and music system on board the boat",
        "Dedicated wine master and private executive chauffeur"
      ],
      "es": [
        "Tour 100% privado ideal para celebraciones, aniversarios y amigos",
        "Taller práctico de coctelería con bartender profesional",
        "Brunch con bôla de carne tradicional, quesos y vinos del Duero",
        "Crucero privado de 1 hora en Pinhão exclusivo para su grupo",
        "Vino espumoso y música a bordo del barco privado",
        "Acompañamiento de sumiller y chófer ejecutivo dedicado"
      ],
      "fr": [
        "Circuit 100% privé conçu pour célébrations, EVJF/EVG et anniversaires",
        "Atelier pratique de cocktails avec un barman professionnel",
        "Brunch gourmand avec bôla de carne, fromages et vins du domaine",
        "Croisière privée d'une heure à Pinhão sur un bateau affrété pour votre groupe",
        "Bouteilles de vin effervescent et musique à bord du bateau",
        "Accompagnement par un guide sommelier et chauffeur dédié"
      ],
      "de": [
        "100% private Tour für Feiern, Geburtstage und Freundesgruppen",
        "Interaktiver Cocktail-Workshop mit einem Profi-Bartender",
        "Herrlicher Brunch mit regionaler Bôla de Carne, Käse und Douro-Weinen",
        "1-stündige private Schifffahrt in Pinhão exklusiv für Ihre Gruppe",
        "Gekühlter Schaumwein und Musik an Bord des Bootes",
        "Begleitung durch einen Sommelier und persönlichen Chauffeur"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista e Wine Master dedicados durante toda a experiência",
        "Workshop privado e prático de preparação de cocktails",
        "Todos os ingredientes, bebidas espirituosas e materiais para o workshop",
        "Brunch completo com bôla de carne tradicional, pão regional, queijos e enchidos",
        "Vinhos brancos e tintos do Douro servidos durante o brunch",
        "Transporte privado até ao cais de Pinhão",
        "Passeio privado de barco pelo Rio Douro durante 1 hora",
        "Barco reservado exclusivamente para o seu grupo",
        "Espumante servido a bordo do barco",
        "Música ambiente e água mineral a bordo",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated wine master and chauffeur throughout the day",
        "Private hands-on cocktail making workshop",
        "All fresh ingredients, spirits, and barware provided",
        "Full regional brunch featuring artisan bôla de carne, breads, cheeses & charcuterie",
        "Douro white and red wines served throughout the brunch",
        "Private transfer to the Pinhão marina",
        "1-hour private boat cruise on the Douro River",
        "Boat reserved 100% exclusively for your party",
        "Chilled sparkling wine served on board",
        "Onboard music sound system and complimentary water",
        "Personal accident and civil liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer y sumiller dedicados durante toda la jornada",
        "Taller práctico y privado de coctelería",
        "Todos los ingredientes, destilados y utensilios para el taller",
        "Brunch completo con bôla de carne, panes regionales, quesos y embutidos",
        "Vinos blancos y tintos del Duero servidos en el brunch",
        "Traslado privado al muelle de Pinhão",
        "Crucero privado de 1 hora por el río Duero",
        "Barco reservado exclusivamente para su grupo",
        "Vino espumoso servido a bordo",
        "Música a bordo y agua mineral",
        "Seguro de accidentes personales y responsabilidad civil"
      ],
      "fr": [
        "Transport privé en véhicule exécutif aller-retour depuis Porto",
        "Chauffeur et sommelier dédiés tout au long de la journée",
        "Atelier pratique et privé de création de cocktails",
        "Tous les ingrédients, spiritueux et accessoires fournis",
        "Brunch complet avec bôla de carne, pains du terroir, fromages et charcuteries",
        "Vins blancs et rouges du Douro servis au brunch",
        "Transfert privé jusqu'au quai de Pinhão",
        "Croisière privée d'une heure sur le fleuve Douro",
        "Bateau réservé exclusivement pour votre groupe",
        "Vin effervescent servi à bord du bateau",
        "Système audio pour votre musique et eau minérale",
        "Assurance responsabilité civile et accidents personnels"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher Chauffeur und Sommelier den ganzen Tag an Ihrer Seite",
        "Exklusiver praktischer Cocktail-Workshop",
        "Alle Zutaten, Spirituosen und Bar-Utensilien inklusive",
        "Vollständiger Brunch mit Bôla de Carne, Brot, Käse und regionalen Wurstwaren",
        "Douro Weiß- und Rotweine zum Brunch serviert",
        "Privater Transfer zur Anlegestelle in Pinhão",
        "1-stündige private Schifffahrt auf dem Douro-Fluss",
        "Boot 100% exklusiv für Ihre Gruppe reserviert",
        "Gekühlter Schaumwein an Bord serviert",
        "Musikanlage an Bord und Mineralwasser",
        "Umfassende Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 649
      },
      {
        "pax": 2,
        "price": 699
      },
      {
        "pax": 3,
        "price": 749
      },
      {
        "pax": 4,
        "price": 799
      },
      {
        "pax": 5,
        "price": 849
      },
      {
        "pax": 6,
        "price": 899
      },
      {
        "pax": 7,
        "price": 999
      },
      {
        "pax": 8,
        "price": 1049
      }
    ],
    "startingPrice": 649,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_005_douro_celebration.jpg",
    "gallery": [
      "/images/tours/north_005_douro_celebration.jpg",
      "/images/douro_boat_tour_1771612994491.png",
      "/images/novo-picnic.jpg"
    ],
    "boatBadge": {
      "pt": "Barco Privado com Espumante & Música",
      "en": "Private Boat with Sparkling Wine & Music",
      "es": "Barco Privado con Espumoso y Música",
      "fr": "Bateau Privé avec Bulles & Musique",
      "de": "Privates Boot mit Sekt & Musik"
    },
    "experienceBadge": {
      "pt": "Workshop de Cocktails & Brunch de Luxo",
      "en": "Cocktail Workshop & Vineyard Brunch",
      "es": "Taller de Cócteles y Brunch",
      "fr": "Atelier Cocktails & Brunch",
      "de": "Cocktail-Workshop & Weinberg-Brunch"
    }
  },
  {
    "id": "coimbra-aveiro",
    "code": "North-006",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte & Centro de Portugal",
      "en": "Northern & Central Portugal",
      "es": "Norte y Centro de Portugal",
      "fr": "Nord & Centre du Portugal",
      "de": "Nord- & Zentralportugal"
    },
    "name": {
      "pt": "Coimbra & Aveiro: Tour Privado com Moliceiro, Ovos Moles e Oficina de Porcelana",
      "en": "Coimbra & Aveiro: Private Tour with Moliceiro Cruise & Porcelain Workshop",
      "es": "Coímbra y Aveiro: Tour Privado con Moliceiro, Ovos Moles y Taller de Porcelana",
      "fr": "Coimbra & Aveiro : Circuit Privé avec Moliceiro & Atelier Porcelaine",
      "de": "Coimbra & Aveiro: Private Tour mit Moliceiro-Fahrt & Porzellan-Workshop"
    },
    "subtitle": {
      "pt": "Universidade histórica de Coimbra, almoço no complexo da Vista Alegre com ovos moles, oficina de pintura em porcelana com peça para levar e moliceiro em Aveiro.",
      "en": "Historic University of Coimbra, Vista Alegre luncheon with traditional ovos moles, porcelain painting workshop with your own painted piece to take home, and Aveiro moliceiro canal cruise.",
      "es": "Universidad histórica de Coímbra, almuerzo en Vista Alegre con ovos moles, taller de pintura en porcelana con pieza de recuerdo y paseo en moliceiro en Aveiro.",
      "fr": "Université historique de Coimbra, déjeuner au domaine Vista Alegre avec ovos moles, atelier de peinture sur porcelaine et croisière en moliceiro à Aveiro.",
      "de": "Historische Universität Coimbra, Mittagessen im Vista Alegre Komplex mit Ovos Moles, Porzellanmalerei-Workshop mit eigenem Kunstwerk zum Mitnehmen und Moliceiro-Fahrt."
    },
    "tagline": {
      "pt": "Coimbra UNESCO · Vista Alegre · Moliceiro Aveiro",
      "en": "Coimbra UNESCO · Vista Alegre · Aveiro Moliceiro",
      "es": "Coímbra UNESCO · Vista Alegre · Moliceiro Aveiro",
      "fr": "Coimbra UNESCO · Vista Alegre · Moliceiro Aveiro",
      "de": "Coimbra UNESCO · Vista Alegre · Aveiro Moliceiro"
    },
    "shortDesc": {
      "pt": "Descubra Coimbra e Aveiro em um tour privado, com passeio de moliceiro, sabores portugueses e uma oficina de porcelana na Vista Alegre onde você cria sua própria peça para levar.",
      "en": "Discover historic Coimbra and the canals of Aveiro on a private journey featuring the legendary Vista Alegre estate, a hands-on porcelain painting masterclass, and a traditional moliceiro boat ride.",
      "es": "Descubra Coímbra y Aveiro en un tour privado con paseo en moliceiro, gastronomía portuguesa y taller de porcelana en Vista Alegre donde creará su propia pieza de recuerdo.",
      "fr": "Découvrez Coimbra et Aveiro lors d'un circuit privé mêlant canaux romantiques, déjeuner au domaine Vista Alegre, atelier créatif de porcelaine et balade en moliceiro.",
      "de": "Entdecken Sie Coimbra und Aveiro auf einer privaten Tour mit Moliceiro-Kanalfahrt, feiner Gastronomie und einem Porzellan-Workshop bei Vista Alegre mit eigenem Kunstwerk."
    },
    "fullDesc": {
      "pt": [
        "Comece o dia com uma recolha privada no seu hotel no Porto e descubra a grandiosidade académica de Coimbra aliada ao encanto dos canais de Aveiro e à tradição secular da porcelana portuguesa da Vista Alegre.",
        "Em Coimbra, explore o coração histórico da Universidade de Coimbra, uma das mais antigas e prestigiadas da Europa e Património Mundial da UNESCO. Caminhe pelo imponente Paço das Escolas, descubra o Palácio Real, a imponente Sala dos Capelos, a Via Latina e a deslumbrante Capela de São Miguel, famosa pelos seus azulejos e talha dourada.",
        "Seguimos para Ílhavo, onde história, artesanato e gastronomia se cruzam no prestigiado universo da Vista Alegre. Desfrute de um almoço cuidadosamente selecionado no complexo histórico, acompanhado pelos afamados Ovos Moles de Aveiro. De seguida, visite o Museu Vista Alegre e participe numa oficina prática de pintura em porcelana sob orientação técnica, criando uma peça personalizada exclusiva que levará para casa como recordação da sua viagem.",
        "Para terminar em beleza, chegamos a Aveiro, a célebre 'Veneza de Portugal'. Admire as elegantes fachadas Arte Nova ao longo dos canais e embarque num tradicional barco moliceiro para navegar pelas águas da ria, apreciando a luz e as cores únicas da cidade antes do regresso relaxado ao Porto."
      ],
      "en": [
        "Depart from Porto in executive comfort to experience the academic heritage of Coimbra, the vibrant canals of Aveiro, and the centuries-old artistry of Vista Alegre porcelain.",
        "In Coimbra, step into the historic grounds of the University of Coimbra, a UNESCO World Heritage site founded in 1290. Explore the monumental courtyard of Paço das Escolas, the Royal Palace, the Great Hall of Acts (Sala dos Capelos), and the opulent St. Michael's Chapel with its exquisite tilework and baroque pipe organ.",
        "Travel to nearby Ílhavo to immerse yourself in the world of Vista Alegre, Portugal's most illustrious porcelain manufacture since 1824. Enjoy a curated lunch within the historic factory quarter, complete with regional wine and sweet Ovos Moles de Aveiro. Tour the Vista Alegre Museum and participate in an exclusive porcelain painting masterclass where you will hand-paint your own porcelain keepsake to take home.",
        "Conclude the afternoon in Aveiro, celebrated as Portugal's Venice. Board a traditional vibrantly painted moliceiro wooden boat for a scenic cruise along the urban canals, admiring the celebrated Art Nouveau architecture before your private chauffeur drives you back to Porto."
      ],
      "es": [
        "Una combinación perfecta de historia universitaria, canales pintorescos y arte en porcelana. Comenzamos en Coímbra recorriendo el histórico Paço das Escolas de la Universidad de Coímbra (UNESCO), la Sala de los Capelos y la Capilla de San Miguel.",
        "Continuamos hacia el histórico complejo de Vista Alegre en Ílhavo. Disfrute de un almuerzo seleccionado con los famosos Ovos Moles de Aveiro de postre. Visite el Museo Vista Alegre y participe en un taller de pintura en porcelana, llevándose a casa la pieza creada por usted.",
        "En Aveiro, la 'Venecia de Portugal', navegue por los canales urbanos a bordo de un tradicional barco moliceiro decorado artesanalmente, contemplando las fachadas de estilo Art Nouveau antes de regresar a Oporto."
      ],
      "fr": [
        "Une journée d'élégance culturelle associant l'illustre université de Coimbra, la cité lacustre d'Aveiro et le prestige séculaire de la manufacture Vista Alegre.",
        "À Coimbra, visitez l'une des plus anciennes universités du monde (UNESCO), découvrant la cour d'honneur, la chapelle Saint-Michel et le palais royal.",
        "Rejoignez ensuite le domaine historique de Vista Alegre pour un déjeuner raffiné sublimé par les traditionnels Ovos Moles d'Aveiro. Après la visite du musée, participez à un atelier de peinture sur porcelaine et repartez avec votre création.",
        "Terminez par une croisière romantique sur les canaux d'Aveiro à bord d'un bateau moliceiro traditionnel avant de regagner votre hébergement à Porto."
      ],
      "de": [
        "Erleben Sie die traditionsreiche Universitätsstadt Coimbra, die bunten Kanäle von Aveiro und die weltberühmte Porzellankunst von Vista Alegre.",
        "In Coimbra entdecken Sie den historischen Universitätscampus (UNESCO-Welterbe) mit dem barocken Paço das Escolas, den Festsälen und der kunstvollen Michaelskapelle.",
        "In Ílhavo besuchen Sie die legendäre Porzellanmanufaktur Vista Alegre. Genießen Sie ein stilvolles Mittagessen mit traditionellen Ovos Moles, besichtigen Sie das Museum und bemalen Sie Ihr eigenes Porzellan-Kunstwerk zum Mitnehmen.",
        "In Aveiro, dem 'Venedig Portugals', gleiten Sie auf einem traditionellen hölzernen Moliceiro-Boot durch die Stadtkanäle, gesäumt von prächtigen Jugendstilvillen, bevor Sie nach Porto zurückkehren."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue dedicado",
        "Visita ao núcleo histórico da Universidade de Coimbra (UNESCO)",
        "Almoço no complexo histórico de Vista Alegre com Ovos Moles de Aveiro",
        "Entrada no prestigiado Museu Vista Alegre",
        "Oficina de pintura em porcelana com peça exclusiva para levar para casa",
        "Passeio tradicional de barco moliceiro pelos canais de Aveiro"
      ],
      "en": [
        "100% private tour with dedicated bilingual guide and executive transport",
        "Guided walk in the historic University of Coimbra campus (UNESCO)",
        "Lunch in the Vista Alegre historic quarter with authentic Ovos Moles",
        "Admission to the prestigious Vista Alegre Porcelain Museum",
        "Hands-on porcelain painting workshop with your own piece to keep",
        "Scenic 45-minute traditional moliceiro boat cruise in Aveiro's canals"
      ],
      "es": [
        "Tour 100% privado con chófer-guía bilingüe dedicado",
        "Visita al núcleo histórico de la Universidad de Coímbra (UNESCO)",
        "Almuerzo en el complejo de Vista Alegre con degustación de Ovos Moles",
        "Entrada al prestigioso Museo Vista Alegre",
        "Taller de pintura en porcelana con pieza de regalo para llevarse a casa",
        "Paseo en barco moliceiro tradicional por los canales de Aveiro"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide bilingue dédié",
        "Découverte de l'Université historique de Coimbra (UNESCO)",
        "Déjeuner au complexe historique de Vista Alegre avec Ovos Moles",
        "Entrée au célèbre Musée de Porcelaine Vista Alegre",
        "Atelier créatif de peinture sur porcelaine avec œuvre à emporter",
        "Croisière traditionnelle en barque moliceiro sur les canaux d'Aveiro"
      ],
      "de": [
        "100% private Tour mit persönlichem zweisprachigem Guide",
        "Führung auf dem historischen Campus der Universität Coimbra (UNESCO)",
        "Mittagessen im historischen Vista Alegre Komplex mit Ovos Moles",
        "Eintritt in das renommierte Porzellanmuseum Vista Alegre",
        "Porzellanmalerei-Workshop mit eigenem Kunstwerk zum Mitnehmen",
        "Fahrt auf einem traditionellen Moliceiro-Boot durch die Kanäle von Aveiro"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilingue durante toda a experiência",
        "Visita à Universidade de Coimbra (Paço das Escolas e Capela de São Miguel)",
        "Almoço completo no complexo da Vista Alegre",
        "Bebida, café e tradicionais Ovos Moles incluídos no almoço",
        "Ingresso no Museu Vista Alegre",
        "Oficina de pintura acrílica em porcelana com material incluído",
        "Peça de porcelana personalizada para levar para casa como souvenir",
        "Passeio de moliceiro de 45 minutos pelos canais de Aveiro",
        "Água mineral a bordo durante a viagem",
        "Seguro de responsabilidade civil e acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual driver-guide throughout the day",
        "Visit to the University of Coimbra (Paço das Escolas & St. Michael Chapel)",
        "Full regional lunch at the Vista Alegre historic complex",
        "Beverage, coffee, and traditional Ovos Moles included with lunch",
        "Admission ticket to the Vista Alegre Museum",
        "Porcelain painting workshop with all materials provided",
        "Personalized porcelain souvenir crafted by you to take home",
        "Scenic 45-minute traditional moliceiro boat tour through Aveiro canals",
        "Complimentary bottled water on board",
        "Comprehensive civil liability and personal accident insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante toda la experiencia",
        "Visita a la Universidad de Coímbra (Paço das Escolas y Capilla)",
        "Almuerzo completo en el complejo histórico de Vista Alegre",
        "Bebida, café y auténticos Ovos Moles incluidos en la comida",
        "Entrada al Museo Vista Alegre",
        "Taller de pintura sobre porcelana con materiales incluidos",
        "Pieza de porcelana decorada por usted para llevar a casa",
        "Paseo en moliceiro de 45 minutos por los canales de Aveiro",
        "Agua mineral a bordo",
        "Seguro de responsabilidad civil y accidentes personales"
      ],
      "fr": [
        "Transport privé exécutif aller-retour depuis Porto",
        "Chauffeur-guide bilingue dédié tout au long du circuit",
        "Visite du campus historique de l'Université de Coimbra",
        "Déjeuner complet au domaine historique de Vista Alegre",
        "Boisson, café et délicieux Ovos Moles inclus au déjeuner",
        "Billet d'entrée au Musée Vista Alegre",
        "Atelier pratique de peinture sur porcelaine avec matériel fourni",
        "Pièce de porcelaine peinte par vos soins à emporter en souvenir",
        "Balade de 45 minutes en moliceiro traditionnel sur les canaux d'Aveiro",
        "Bouteilles d'eau minérale à bord",
        "Assurance responsabilité civile et accidents personnels"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher zweisprachiger Guide während des gesamten Tages",
        "Besichtigung der Universität Coimbra (Paço das Escolas & Michaelskapelle)",
        "Mehrgängiges Mittagessen im Vista Alegre Areal",
        "Getränk, Kaffee und originale Ovos Moles zum Essen inklusive",
        "Eintrittskarte in das Vista Alegre Porzellanmuseum",
        "Porzellanmal-Workshop inklusive aller Materialien",
        "Selbst gestaltetes Porzellan-Souvenir zur Mitnahme nach Hause",
        "45-minütige traditionelle Moliceiro-Bootsfahrt auf den Kanälen von Aveiro",
        "Mineralwasser an Bord inklusive",
        "Umfassende Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 520
      },
      {
        "pax": 2,
        "price": 570
      },
      {
        "pax": 3,
        "price": 620
      },
      {
        "pax": 4,
        "price": 670
      },
      {
        "pax": 5,
        "price": 720
      },
      {
        "pax": 6,
        "price": 770
      },
      {
        "pax": 7,
        "price": 870
      },
      {
        "pax": 8,
        "price": 920
      }
    ],
    "startingPrice": 520,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_006_aveiro_moliceiro.jpg",
    "gallery": [
      "/images/tours/north_006_aveiro_moliceiro.jpg"
    ],
    "boatBadge": {
      "pt": "Moliceiro Tradicional em Aveiro",
      "en": "Traditional Aveiro Moliceiro",
      "es": "Moliceiro Tradicional en Aveiro",
      "fr": "Moliceiro Traditionnel à Aveiro",
      "de": "Traditionelles Aveiro-Moliceiro"
    },
    "experienceBadge": {
      "pt": "Oficina de Pintura em Porcelana Vista Alegre",
      "en": "Vista Alegre Porcelain Workshop",
      "es": "Taller de Pintura en Porcelana Vista Alegre",
      "fr": "Atelier Peinture sur Porcelaine Vista Alegre",
      "de": "Vista Alegre Porzellanmalerei-Workshop"
    }
  },
  {
    "id": "barcelos-braga-guimaraes",
    "code": "North-007",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte de Portugal",
      "en": "Northern Portugal",
      "es": "Norte de Portugal",
      "fr": "Nord du Portugal",
      "de": "Nordportugal"
    },
    "name": {
      "pt": "Barcelos, Braga & Guimarães: Tour Privado pelo Berço de Portugal",
      "en": "Barcelos, Braga & Guimarães: Private Tour of Portugal's Cradle",
      "es": "Barcelos, Braga y Guimarães: Tour Privado por la Cuna de Portugal",
      "fr": "Barcelos, Braga & Guimarães : Circuit Privé aux Berceaux de la Nation",
      "de": "Barcelos, Braga & Guimarães: Private Tour zur Wiege Portugals"
    },
    "subtitle": {
      "pt": "Lenda do Galo em Barcelos, Sé e Elevador do Bom Jesus (UNESCO) em Braga, Castelo medieval e Paço dos Duques em Guimarães com almoço tradicional incluído.",
      "en": "Barcelos and its famous rooster legend, Braga's Cathedral and Bom Jesus funicular (UNESCO), Guimarães Medieval Castle and Ducal Palace with traditional lunch included.",
      "es": "Leyenda del Gallo en Barcelos, Catedral y Elevador del Bom Jesus (UNESCO) en Braga, Castillo medieval y Palacio Ducal en Guimarães con almuerzo incluido.",
      "fr": "Légende du Coq à Barcelos, Cathédrale et Funiculaire du Bom Jesus (UNESCO) à Braga, Château médiéval et Palais des Ducs à Guimarães avec déjeuner inclus.",
      "de": "Hahnenlegende in Barcelos, Kathedrale und Bom Jesus Seilbahn (UNESCO) in Braga, mittelalterliche Burg und Herzogspalast in Guimarães mit traditionellem Mittagessen."
    },
    "tagline": {
      "pt": "Berço da Nação · Braga dos Arcebispos · Galo de Barcelos",
      "en": "Cradle of Portugal · Archbishop's Braga · Barcelos Heritage",
      "es": "Cuna de la Nación · Braga Histórica · Gallo de Barcelos",
      "fr": "Berceau de la Nation · Braga Sacrée · Coq de Barcelos",
      "de": "Wiege der Nation · Erzbistum Braga · Hahn von Barcelos"
    },
    "shortDesc": {
      "pt": "Descubra Barcelos, Braga e Guimarães em um tour privado pelo Norte de Portugal: história, arquitetura medieval, a lenda do Galo, monumentos da UNESCO e sabores tradicionais.",
      "en": "Explore the historical origins of Portugal on a private day tour: discover Barcelos, the ancient cathedral and UNESCO sanctuary of Braga, and the medieval cradle of Guimarães with lunch included.",
      "es": "Descubra Barcelos, Braga y Guimarães en un tour privado por el Norte de Portugal: historia, arquitectura medieval, santuarios UNESCO y gastronomía tradicional.",
      "fr": "Explorez les origines du Portugal lors d'un circuit privé reliant Barcelos, les splendeurs sacrées de Braga (UNESCO) et la cité médiévale de Guimarães avec déjeuner.",
      "de": "Entdecken Sie die Wiege Portugals auf einer privaten Tagestour: die Hahnenlegende in Barcelos, das UNESCO-Heiligtum in Braga und die Ritterburg in Guimarães."
    },
    "fullDesc": {
      "pt": [
        "Embarque numa viagem nobre e emocionante pelas origens de Portugal, explorando três cidades fundamentais que moldaram a identidade, a fé e a soberania da nação: Barcelos, Braga e Guimarães.",
        "A primeira paragem é a encantadora Barcelos, banhada pelo Rio Cávado. Caminhe pelo centro histórico empedrado, cruze a ponte medieval gótica e descubra a fascinante lenda do Galo de Barcelos junto ao Cruzeiro do Senhor do Galo e às ruínas do Paço dos Condes de Barcelos.",
        "Seguimos para Braga, uma das cidades cristãs mais antigas do mundo e apelidada de 'Roma Portuguesa'. Visite o interior da Sé de Braga — a mais antiga catedral do país —, e suba ao monumental Santuário do Bom Jesus do Monte (Património Mundial da UNESCO) a bordo do histórico e engenhoso elevador hidráulico de 1882, admirando as escadarias monumentais e vistas panorâmicas sobre a cidade.",
        "Após um generoso almoço minhoto com bebidas incluídas, rumamos a Guimarães, a cidade onde nasceu Portugal. Visite o altivo Castelo de Guimarães, fortaleza do primeiro rei D. Afonso Henriques, e explore os salões nobres com tetos em quilha de navio do majestoso Paço dos Duques de Bragança. Conclua com um passeio pelo pitoresco Largo da Oliveira antes do regresso ao Porto."
      ],
      "en": [
        "Embark on an inspiring private journey through the very roots of Portuguese nationhood, visiting three cornerstone cities that forged the country's spirit: Barcelos, Braga, and Guimarães.",
        "Begin in Barcelos, the legendary craft town beside the Cávado River. Discover the medieval bridge, the Count's Palace ruins, and the origin story of the Barcelos Rooster, Portugal's most beloved national icon.",
        "Continue to Braga, known as the Portuguese Rome for its profound spiritual heritage. Tour the interior of Braga Cathedral, the nation's oldest, and ascend to the Sanctuary of Bom Jesus do Monte (UNESCO World Heritage) via the ingenious 1882 water-powered funicular. Take in the dramatic baroque staircase and breathtaking viewpoints.",
        "Enjoy an authentic regional Minho lunch before arriving in Guimarães, universally venerated as the Cradle of Portugal. Step inside medieval Guimarães Castle, where King Afonso Henriques founded the realm in the 12th century, and tour the opulent Palace of the Dukes of Braganza. Stroll through the UNESCO-listed Largo da Oliveira before returning to Porto in comfort."
      ],
      "es": [
        "Un recorrido apasionante por el origen de Portugal visitando tres ciudades esenciales: Barcelos, Braga y Guimarães.",
        "En Barcelos descubriremos su puente medieval y la famosa leyenda del Gallo de Barcelos. En Braga, la 'Roma Portuguesa', visitamos la Catedral más antigua del país y subimos en el histórico funicular de agua al Santuario del Bom Jesus do Monte (UNESCO).",
        "Tras un almuerzo tradicional con platos típicos del Miño, descubrimos Guimarães, cuna de la nación. Visitamos el Castillo medieval de Alfonso Enríquez y el suntuoso Palacio de los Duques de Braganza antes de pasear por el Largo da Oliveira."
      ],
      "fr": [
        "Un voyage captivant à travers les racines du Portugal, reliant Barcelos, Braga la spirituelle et Guimarães, berceau de la nation.",
        "Découvrez à Barcelos l'histoire du célèbre coq emblématique et son pont gothique. À Braga, visitez la plus ancienne cathédrale du Portugal et montez au Sanctuaire du Bom Jesus (UNESCO) en funiculaire à eau historique.",
        "Savourez un déjeuner traditionnel du Minho avant d'explorer Guimarães : son château médiéval royal, le magnifique Palais des Ducs de Bragance et le cœur historique classé UNESCO."
      ],
      "de": [
        "Eine faszinierende Zeitreise zu den Ursprüngen Portugals: Barcelos, Braga und Guimarães.",
        "In Barcelos begegnen Sie der Hahnenlegende und der mittelalterlichen Steinbrücke. In Braga besichtigen Sie die älteste Kathedrale des Landes und fahren mit der wasserbetriebenen Standseilbahn zum Wallfahrtsort Bom Jesus do Monte (UNESCO).",
        "Nach einem traditionellen Mittagessen erkunden Sie Guimarães: die Königsburg des ersten portugiesischen Königs und den prächtigen Palast der Herzöge von Braganza."
      ]
    },
    "duration": {
      "pt": "9h30",
      "en": "9.5 hours",
      "es": "9,5 horas",
      "fr": "9h30",
      "de": "9,5 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue dedicado",
        "Visita a Barcelos e descoberta da famosa Lenda do Galo",
        "Visita ao interior da Sé de Braga com ingresso incluído",
        "Subida ao Santuário do Bom Jesus do Monte (UNESCO) no histórico elevador hidráulico",
        "Almoço tradicional minhoto completo com bebidas incluídas",
        "Visita ao interior do Castelo de Guimarães e Paço dos Duques de Bragança com ingressos"
      ],
      "en": [
        "100% private tour with dedicated bilingual chauffeur-guide",
        "Guided visit of Barcelos and the famous legend of the Rooster",
        "Interior visit to the historic Braga Cathedral with admission ticket",
        "Ride on the historic 1882 water-powered funicular to Bom Jesus do Monte (UNESCO)",
        "Traditional multi-course Minho regional lunch with drinks included",
        "Interior visits with admissions to Guimarães Castle & Palace of the Dukes of Braganza"
      ],
      "es": [
        "Tour 100% privado con chófer-guía bilingüe dedicado",
        "Paseo por Barcelos y descubrimiento de la leyenda del Gallo",
        "Visita al interior de la Catedral de Braga con entrada incluida",
        "Subida en el elevador hidráulico de 1882 al Santuario del Bom Jesus (UNESCO)",
        "Almuerzo tradicional del Miño completo con bebidas",
        "Entrada y visita al Castillo de Guimarães y Palacio de los Duques de Braganza"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide bilingue dédié",
        "Visite de Barcelos et découverte de la légende du Coq",
        "Visite intérieure de la Cathédrale de Braga avec billet inclus",
        "Montée au Sanctuaire du Bom Jesus (UNESCO) en funiculaire à contrepoids d'eau",
        "Déjeuner traditionnel complet avec boissons incluses",
        "Visites intérieures avec billets du Château de Guimarães et du Palais des Ducs"
      ],
      "de": [
        "100% private Tour mit persönlichem zweisprachigem Guide",
        "Rundgang in Barcelos und Erläuterung der Hahnenlegende",
        "Innenbesichtigung der Kathedrale von Braga inklusive Eintritt",
        "Fahrt mit der historischen Wasserballast-Standseilbahn zum Bom Jesus (UNESCO)",
        "Traditionelles mehrgängiges regionales Mittagessen mit Getränken",
        "Eintritt und Innenführung in der Burg von Guimarães und im Herzogspalast"
      ]
    },
    "included": {
      "pt": [
        "Transporte executivo privado de ida e volta a partir do Porto",
        "Motorista-guia bilingue durante toda a experiência",
        "Visita ao centro histórico de Barcelos e ponte medieval",
        "Ingresso e visita ao interior da Sé Catedral de Braga",
        "Bilhete de ida e volta no histórico Elevador do Bom Jesus do Monte",
        "Visita ao Santuário do Bom Jesus do Monte (UNESCO) e miradouro",
        "Almoço com rica gastronomia minhota tradicional",
        "Bebidas e café incluídos durante a refeição",
        "Ingresso e visita ao interior do Castelo de Guimarães",
        "Ingresso e visita ao Paço dos Duques de Bragança",
        "Passeio pelo Largo da Oliveira e centro histórico UNESCO de Guimarães",
        "Água mineral a bordo e seguro de acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual chauffeur-guide throughout the day",
        "Guided walk through Barcelos historic center and medieval bridge",
        "Admission ticket and interior visit to Braga Cathedral",
        "Round-trip ticket on the historic water-balanced Bom Jesus Funicular",
        "Visit to the Sanctuary of Bom Jesus do Monte (UNESCO) and panoramic overlook",
        "Full regional lunch featuring traditional Minho cuisine",
        "Beverages and coffee included with lunch",
        "Admission ticket and interior visit to Guimarães Castle",
        "Admission ticket and interior tour of the Palace of the Dukes of Braganza",
        "Guided stroll in Largo da Oliveira and UNESCO historic Guimarães",
        "Bottled water on board and comprehensive passenger insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante todo el recorrido",
        "Visita al centro histórico de Barcelos y puente medieval",
        "Entrada y visita al interior de la Catedral de Braga",
        "Billete de ida y vuelta en el histórico elevador del Bom Jesus",
        "Visita al Santuario del Bom Jesus do Monte (UNESCO)",
        "Almuerzo completo con gastronomía tradicional del Miño",
        "Bebidas y café incluidos durante la comida",
        "Entrada y visita al interior del Castillo de Guimarães",
        "Entrada y visita al Palacio de los Duques de Braganza",
        "Paseo por el Largo da Oliveira en Guimarães",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour depuis Porto",
        "Chauffeur-guide bilingue dédié toute la journée",
        "Visite du centre médiéval de Barcelos et de son pont",
        "Billet et visite intérieure de la Cathédrale de Braga",
        "Billet aller-retour pour le funiculaire historique du Bom Jesus",
        "Visite du Sanctuaire du Bom Jesus do Monte (UNESCO)",
        "Déjeuner gastronomique régional traditionnel complet",
        "Boissons et café inclus au déjeuner",
        "Billet et visite intérieure du Château de Guimarães",
        "Billet et visite intérieure du Palais des Ducs de Bragance",
        "Promenade au Largo da Oliveira dans le centre classé UNESCO",
        "Bouteilles d'eau minérale à bord et assurance passagers"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher zweisprachiger Guide den ganzen Tag",
        "Rundgang durch das historische Zentrum von Barcelos",
        "Eintritt und Führung in der Kathedrale von Braga",
        "Hin- und Rückfahrt mit der historischen Standseilbahn Bom Jesus",
        "Besichtigung des Wallfahrtsortes Bom Jesus do Monte (UNESCO)",
        "Traditionelles mehrgängiges regionales Mittagessen",
        "Getränke und Kaffee zum Mittagessen inklusive",
        "Eintrittskarte und Innenführung in der Burg von Guimarães",
        "Eintrittskarte und Führung im Palast der Herzöge von Braganza",
        "Spaziergang über den malerischen Platz Largo da Oliveira",
        "Mineralwasser an Bord und Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 490
      },
      {
        "pax": 2,
        "price": 540
      },
      {
        "pax": 3,
        "price": 590
      },
      {
        "pax": 4,
        "price": 640
      },
      {
        "pax": 5,
        "price": 690
      },
      {
        "pax": 6,
        "price": 740
      },
      {
        "pax": 7,
        "price": 840
      },
      {
        "pax": 8,
        "price": 890
      }
    ],
    "startingPrice": 490,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_007_castelo_guimaraes.jpg",
    "gallery": [
      "/images/tours/north_007_castelo_guimaraes.jpg"
    ],
    "experienceBadge": {
      "pt": "Berço da Nação & Bom Jesus do Monte UNESCO",
      "en": "Cradle of Portugal & Bom Jesus UNESCO",
      "es": "Cuna de Portugal y Bom Jesus UNESCO",
      "fr": "Berceau de la Nation & Bom Jesus UNESCO",
      "de": "Wiege Portugals & Bom Jesus UNESCO"
    }
  },
  {
    "id": "fatima-batalha-tomar",
    "code": "North-008",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte & Centro de Portugal",
      "en": "Northern & Central Portugal",
      "es": "Norte y Centro de Portugal",
      "fr": "Nord & Centre du Portugal",
      "de": "Nord- & Zentralportugal"
    },
    "name": {
      "pt": "Fátima, Batalha & Tomar: Tour Privado dos Templários e Património UNESCO",
      "en": "Fátima, Batalha & Tomar: Private Templar & UNESCO Heritage Tour",
      "es": "Fátima, Batalha y Tomar: Tour Privado de los Templarios y Patrimonio UNESCO",
      "fr": "Fátima, Batalha & Tomar : Circuit Privé Templiers et Patrimoine UNESCO",
      "de": "Fátima, Batalha & Tomar: Private Templer- & UNESCO-Welterbetour"
    },
    "subtitle": {
      "pt": "Santuário de Fátima, Mosteiro gótico da Batalha (UNESCO), Castelo Templário e Convento de Cristo em Tomar (UNESCO) com almoço especial e ingressos incluídos.",
      "en": "Sanctuary of Fátima, Batalha Gothic Monastery (UNESCO), and Tomar Knights Templar Castle & Convent of Christ (UNESCO) with gourmet lunch and admissions included.",
      "es": "Santuario de Fátima, Monasterio gótico de Batalha (UNESCO), Castillo Templario y Convento de Cristo en Tomar (UNESCO) con almuerzo e entradas incluidas.",
      "fr": "Sanctuaire de Fátima, Monastère gothique de Batalha (UNESCO), Château des Templiers et Couvent du Christ à Tomar (UNESCO) avec déjeuner et billets inclus.",
      "de": "Wallfahrtsort Fátima, gotisches Kloster Batalha (UNESCO), Templerburg und Christuskloster in Tomar (UNESCO) mit Mittagessen und Eintritten inklusive."
    },
    "tagline": {
      "pt": "Cavaleiros Templários · Fátima · Mosteiro da Batalha",
      "en": "Knights Templar · Fátima Sanctuary · Batalha Monastery",
      "es": "Caballeros Templarios · Fátima · Monasterio de Batalha",
      "fr": "Chevaliers Templiers · Fátima · Monastère de Batalha",
      "de": "Tempelritter · Fátima · Kloster Batalha"
    },
    "shortDesc": {
      "pt": "Descubra Fátima, Batalha e Tomar em um tour privado com almoço e ingressos incluídos. Visite o Convento de Cristo e explore a história dos Cavaleiros Templários.",
      "en": "Discover three of Portugal's most profound spiritual and historical treasures on a private tour: the Sanctuary of Fátima, Batalha Monastery (UNESCO), and the legendary Knights Templar headquarters in Tomar.",
      "es": "Descubra Fátima, Batalha y Tomar en un tour privado con almuerzo e ingresos incluidos: santuarios mundiales, gótico deslumbrante y el misterio de los Templarios.",
      "fr": "Découvrez Fátima, Batalha et Tomar lors d'un circuit privé exceptionnel incluant déjeuner et billets : spiritualité, chef-d'œuvre gothique et forteresse templière.",
      "de": "Entdecken Sie Fátima, Batalha und Tomar auf einer privaten Tour mit Mittagessen und Eintritten: weltberühmte Wallfahrt, gotische Baukunst und der Mythos der Tempelritter."
    },
    "fullDesc": {
      "pt": [
        "Uma experiência privada profunda e inesquecível concebida para quem deseja explorar os grandes pilares da fé, da arquitetura monumental e do mistério dos Cavaleiros Templários em Portugal, acompanhado por um motorista-guia trilíngue dedicado.",
        "O dia começa no venerado Santuário de Fátima, um dos centros de peregrinação mariana mais famosos do planeta. Visite o imenso recinto de oração, a imponente Basílica de Nossa Senhora do Rosário com os túmulos dos três pastorinhos e a comovente Capelinha das Aparições, tendo tempo sereno para recolhimento e contemplação.",
        "Em seguida, delicie-se com um almoço tradicional de gastronomia portuguesa num restaurante especialmente selecionado. Rumamos depois ao monumental Mosteiro da Batalha (Património Mundial da UNESCO), expoente máximo do gótico flamejante e manuelino, erguido para celebrar a vitória na Batalha de Aljubarrota em 1385. Explore as suas Capelas Imperfeitas a céu aberto e claustros de renda de pedra.",
        "A jornada atinge o auge na mística cidade de Tomar, antiga sede da Ordem dos Cavaleiros do Templo em Portugal. Suba ao imponente Castelo Templário e ao magnífico Convento de Cristo (UNESCO). Descubra a lendária Charola octogonal dos Templários, os sete claustros renascentistas e a célebre Janela do Capítulo manuelina, repleta de simbolismo esotérico e marítimo."
      ],
      "en": [
        "An unforgettable private journey exploring three monumental pillars of Portuguese spirituality, architectural mastery, and Templar mythology, led by an executive multilingual guide.",
        "Begin at the world-renowned Sanctuary of Fátima, one of global Christianity's most sacred pilgrimage sites. Walk the serene esplanade, visit the Basilica of Our Lady of the Rosary where the shepherd children rest, and spend contemplative moments at the Chapel of the Apparitions.",
        "Relish a specially prepared Portuguese lunch before traveling to the awe-inspiring Batalha Monastery (UNESCO World Heritage). Built to commemorate Portugal's decisive victory at the Battle of Aljubarrota in 1385, this masterpiece of Gothic and Manueline architecture features breathtaking stone lacework, soaring vaults, and the famous open-air Unfinished Chapels.",
        "Conclude in mystical Tomar, the historic headquarters of the Knights Templar in Portugal. Explore the defensive walls of Tomar Castle and enter the majestic Convent of Christ (UNESCO). Marvel at the 12th-century octagonal Romanesque Charola where mounted knights attended Mass, the serene cloisters, and the world-famous Manueline Chapterhouse Window."
      ],
      "es": [
        "Un viaje extraordinario por tres monumentos cumbres de la historia portuguesa: fe, gótico y la mística de los Templarios.",
        "Comenzamos en el Santuario de Fátima, uno de los centros de devoción mariana más venerados del mundo, visitando la Basílica y la Capilla de las Apariciones.",
        "Disfrutamos de un almuerzo tradicional portugués antes de visitar el imponente Monasterio de Batalha (UNESCO), joya gótica y manuelina con sus célebres Capillas Imperfectas.",
        "Culminamos en Tomar, feudo de los Caballeros Templarios. Visitamos el Castillo de Tomar y el Convento de Cristo (UNESCO), admirando la misteriosa Charola octogonal y la famosa Ventana Manuelina."
      ],
      "fr": [
        "Un itinéraire d'exception traversant l'histoire sacrée, les légendes templières et les chefs-d'œuvre architecturaux du Portugal.",
        "Visitez d'abord le Sanctuaire mondial de Fátima, la Chapelle des Apparitions et la Basilique Notre-Dame du Rosaire dans une ambiance de sérénité.",
        "Savourez un authentique déjeuner portugais, puis admirez le spectaculaire Monastère de Batalha (UNESCO), joyau d'art gothique et manuelin avec ses Chapelles Imparfaites.",
        "Terminez par Tomar, capitale des Chevaliers du Temple. Explorez le Château des Templiers et le prestigieux Couvent du Christ (UNESCO), sa célèbre Charola romane et la sublime Fenêtre manuéline."
      ],
      "de": [
        "Eine tiefgründige private Entdeckungsreise zu den Höhepunkten portugiesischer Spiritualität und Templergeschichte.",
        "Ihr Tag beginnt am weltberühmten Marienheiligtum von Fátima mit der Basilika und der Erscheinungskapelle.",
        "Nach einem traditionellen Mittagessen besichtigen Sie das gotische Kloster von Batalha (UNESCO-Welterbe) mit seinen filigranen Kreuzgängen und den unvollendeten Kapellen.",
        "Höhepunkt des Nachmittags ist Tomar: die Festung der Tempelritter und das Christuskloster (UNESCO) mit der romanischen Rundkirche (Charola) und dem weltberühmten manuelinischen Kapitelfenster."
      ]
    },
    "duration": {
      "pt": "11 horas",
      "en": "11 hours",
      "es": "11 horas",
      "fr": "11 heures",
      "de": "11 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia trilíngue experiente",
        "Visita serena ao Santuário de Fátima e Capelinha das Aparições",
        "Almoço português especial completo incluído",
        "Ingresso e visita guiada ao Mosteiro da Batalha (UNESCO)",
        "Ingresso e visita ao Castelo dos Templários e Convento de Cristo em Tomar (UNESCO)",
        "Descoberta da mística Charola dos Templários e da Janela Manuelina"
      ],
      "en": [
        "100% private tour with experienced multilingual executive chauffeur-guide",
        "Visit to the Sanctuary of Fátima and the sacred Chapel of Apparitions",
        "Special multi-course Portuguese regional lunch included",
        "Admission ticket and guided visit to Batalha Monastery (UNESCO)",
        "Admission ticket and tour of Tomar Templar Castle & Convent of Christ (UNESCO)",
        "Detailed exploration of the Templar Charola rotunda and the iconic Manueline Window"
      ],
      "es": [
        "Tour 100% privado con chófer-guía trilingüe dedicado",
        "Visita al Santuario de Fátima y Capilla de las Apariciones",
        "Almuerzo especial con sabores de la gastronomía portuguesa",
        "Entrada incluida y visita al Monasterio de Batalha (UNESCO)",
        "Entrada y visita al Castillo Templario y Convento de Cristo de Tomar (UNESCO)",
        "Descubrimiento de la mística Charola templaria y la famosa Ventana Manuelina"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide trilingue expérimenté",
        "Visite du Sanctuaire de Fátima et de la Chapelle des Apparitions",
        "Déjeuner portugais traditionnel complet inclus",
        "Billet et visite guidée du Monastère de Batalha (UNESCO)",
        "Billet et visite du Château des Templiers et Couvent du Christ à Tomar (UNESCO)",
        "Découverte de la fascinante Charola templière et de la Fenêtre manuéline"
      ],
      "de": [
        "100% private Tour mit persönlichem dreisprachigem Guide",
        "Besuch des Marienheiligtums von Fátima und der Erscheinungskapelle",
        "Traditionelles portugiesisches Mittagessen inklusive",
        "Eintritt und Führung im gotischen Kloster Batalha (UNESCO)",
        "Eintritt und Führung in der Templerburg und im Christuskloster in Tomar (UNESCO)",
        "Besichtigung der romanischen Templer-Rotunde (Charola) und des Manuelinischen Fensters"
      ]
    },
    "included": {
      "pt": [
        "Transporte executivo privado de ida e volta a partir do Porto",
        "Motorista-guia trilíngue (português, inglês e francês) durante todo o dia",
        "Visita detalhada ao Santuário de Fátima",
        "Almoço tradicional português especial completo",
        "Ingresso oficial para o Mosteiro da Batalha (UNESCO)",
        "Ingresso oficial para o Castelo Templário e Convento de Cristo em Tomar (UNESCO)",
        "Visita guiada à Charola dos Templários, claustros e igreja",
        "Água mineral a bordo durante todo o dia",
        "Seguro de responsabilidade civil e acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated trilingual driver-guide (Portuguese, English, French)",
        "Comprehensive visit to the Sanctuary of Fátima",
        "Multi-course traditional Portuguese lunch",
        "Admission ticket to Batalha Monastery (UNESCO)",
        "Admission ticket to the Templar Castle & Convent of Christ in Tomar (UNESCO)",
        "Guided visit to the Templar Charola rotunda, cloisters, and church",
        "Complimentary bottled water throughout the day",
        "Civil liability and personal accident insurance"
      ],
      "es": [
        "Transporte ejecutivo privado de ida y vuelta desde Oporto",
        "Chófer-guía trilingüe (portugués, inglés, francés) durante toda la jornada",
        "Visita al Santuario de Fátima",
        "Almuerzo tradicional portugués completo",
        "Entrada oficial al Monasterio de Batalha (UNESCO)",
        "Entrada oficial al Castillo Templario y Convento de Cristo de Tomar (UNESCO)",
        "Visita guiada a la Charola templaria, claustros e iglesia",
        "Agua mineral a bordo durante todo el recorrido",
        "Seguro de responsabilidad civil y accidentes personales"
      ],
      "fr": [
        "Transport exécutif privé aller-retour depuis Porto",
        "Chauffeur-guide trilingue (portugais, anglais, français) dédié",
        "Visite approfondie du Sanctuaire de Fátima",
        "Déjeuner portugais traditionnel complet",
        "Billet d'entrée au Monastère de Batalha (UNESCO)",
        "Billet d'entrée au Château des Templiers et Couvent du Christ à Tomar (UNESCO)",
        "Visite guidée de la Charola des Templiers, des cloîtres et de l'église",
        "Bouteilles d'eau minérale à bord",
        "Assurance responsabilité civile et accidents personnels"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Dreisprachiger Chauffeur-Guide (Portugiesisch, Englisch, Französisch)",
        "Umfassender Besuch des Wallfahrtsortes Fátima",
        "Mehrgängiges traditionelles portugiesisches Mittagessen",
        "Eintrittskarte für das Kloster Batalha (UNESCO)",
        "Eintrittskarte für die Templerburg und das Christuskloster in Tomar (UNESCO)",
        "Führung durch die Templer-Charola, Kreuzgänge und Kirche",
        "Mineralwasser an Bord den ganzen Tag",
        "Haftpflicht- und Personenunfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 560
      },
      {
        "pax": 2,
        "price": 610
      },
      {
        "pax": 3,
        "price": 660
      },
      {
        "pax": 4,
        "price": 710
      },
      {
        "pax": 5,
        "price": 760
      },
      {
        "pax": 6,
        "price": 810
      },
      {
        "pax": 7,
        "price": 910
      },
      {
        "pax": 8,
        "price": 960
      }
    ],
    "startingPrice": 560,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_008_mosteiro_batalha.jpg",
    "gallery": [
      "/images/tours/north_008_mosteiro_batalha.jpg"
    ],
    "experienceBadge": {
      "pt": "Cavaleiros Templários & Janela Manuelina",
      "en": "Knights Templar & Manueline Heritage",
      "es": "Caballeros Templarios y Arte Manuelino",
      "fr": "Chevaliers Templiers & Art Manuelin",
      "de": "Tempelritter & Manuelinische Kunst"
    }
  },
  {
    "id": "obidos-alcobaca",
    "code": "North-009",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte & Centro de Portugal",
      "en": "Northern & Central Portugal",
      "es": "Norte y Centro de Portugal",
      "fr": "Nord & Centre du Portugal",
      "de": "Nord- & Zentralportugal"
    },
    "name": {
      "pt": "Óbidos & Alcobaça: Tour Privado Medieval com Ginjinha e Doçaria Conventual",
      "en": "Óbidos & Alcobaça: Private Medieval Tour with Ginjinha & Conventual Pastries",
      "es": "Óbidos y Alcobaça: Tour Privado Medieval con Ginjinha y Repostería Conventual",
      "fr": "Óbidos & Alcobaça : Circuit Privé Médiéval avec Ginjinha et Pâtisseries Conventuelles",
      "de": "Óbidos & Alcobaça: Private Mittelalter-Tour mit Ginjinha & Klostergebäck"
    },
    "subtitle": {
      "pt": "Passeio pelas muralhas da vila medieval de Óbidos com prova de ginjinha em copo de chocolate, almoço português e Mosteiro de Alcobaça (UNESCO) com doces conventuais.",
      "en": "Explore the medieval fortified village of Óbidos with Ginjinha in a chocolate cup, traditional Portuguese lunch, and Alcobaça Monastery (UNESCO) with conventual pastries.",
      "es": "Recorrido por la villa medieval amurallada de Óbidos con degustación de ginjinha en vaso de chocolate, almuerzo típico y Monasterio de Alcobaça (UNESCO) con dulces conventuales.",
      "fr": "Visite de la cité médiévale fortifiée d'Óbidos avec dégustation de ginjinha dans une tasse en chocolat, déjeuner portugais et Monastère d'Alcobaça (UNESCO) avec douceurs monacales.",
      "de": "Entdeckung der befestigten mittelalterlichen Stadt Óbidos mit Ginjinha im Schokobecher, portugiesischem Mittagessen und Kloster Alcobaça (UNESCO) mit traditionellem Klostergebäck."
    },
    "tagline": {
      "pt": "Vila Medieval de Óbidos · Alcobaça UNESCO · Ginjinha no Chocolate",
      "en": "Medieval Óbidos · Alcobaça UNESCO · Ginjinha in Chocolate",
      "es": "Óbidos Medieval · Alcobaça UNESCO · Ginjinha en Chocolate",
      "fr": "Óbidos Médiévale · Alcobaça UNESCO · Ginjinha en Chocolat",
      "de": "Mittelalterliches Óbidos · Alcobaça UNESCO · Ginjinha im Schokobecher"
    },
    "shortDesc": {
      "pt": "Viaje pela história de Portugal entre as muralhas de Óbidos e o magnífico Mosteiro de Alcobaça: prove ginjinha no copo de chocolate, delicie-se com almoço tradicional e doçaria conventual.",
      "en": "Travel through Portugal's romantic history between the medieval battlements of Óbidos and the grandiose Alcobaça Monastery (UNESCO): taste Ginjinha in chocolate cups, savor local cuisine, and indulge in conventual pastries.",
      "es": "Viaje por la historia de Portugal entre las murallas de Óbidos y el magnífico Monasterio de Alcobaça: deguste ginjinha en vaso de chocolate, almuerzo típico y repostería conventual.",
      "fr": "Voyagez dans le temps entre les remparts médiévaux d'Óbidos et l'impressionnant Monastère d'Alcobaça (UNESCO) : dégustez la ginjinha dans une tasse en chocolat et de délicieuses pâtisseries monastiques.",
      "de": "Reisen Sie durch die Geschichte Portugals zwischen den Zinnen von Óbidos und dem prachtvollen Kloster Alcobaça (UNESCO): Ginjinha im Schokobecher, portugiesisches Essen und erlesenes Klostergebäck."
    },
    "fullDesc": {
      "pt": [
        "Descubra o património, os sabores e o romance histórico de Portugal numa experiência privada cuidadosamente concebida para quem valoriza conforto, autenticidade e um ritmo descontraído e sem pressa.",
        "A jornada começa na idílica vila medieval de Óbidos, presente de casamento de reis portugueses às suas rainhas durante séculos. Ao atravessar a histórica Porta da Vila com os seus azulejos setecentistas, percorra ruelas de pedra ladeadas por casas caiadas de branco, buganvílias e lojas de artesanato. Em seguida, desfrute da famosa Ginjinha de Óbidos servida da forma mais autêntica e irresistível: num delicado copo de chocolate comestível.",
        "Seguimos para Alcobaça, onde um almoço de cozinha tradicional portuguesa num restaurante selecionado proporciona uma agradável pausa gastronómica com os melhores sabores da região.",
        "À tarde, entre na grandiosidade solene do Mosteiro de Santa Maria de Alcobaça (Património Mundial da UNESCO), a primeira e maior obra do gótico primitivo cisterciense em Portugal. Com entrada incluída, explore a sua nave monumental e contemple as obras-primas da escultura tumular gótica: os túmulos eternos dos infelizes amantes D. Pedro I e Inês de Castro. Para terminar com chave de ouro, prove os lendários doces conventuais de Alcobaça com café antes de regressar ao Porto."
      ],
      "en": [
        "Experience the romance, monumental architecture, and sweet culinary traditions of Portugal on an unhurried private day journey from Porto.",
        "Your morning begins in fairytale Óbidos, the preserved medieval town surrounded by 14th-century fortified stone battlements that was historically gifted by Portuguese kings to their queens. Stroll through picturesque cobblestone lanes adorned with vibrant flowers and artisan shops, and savor the iconic regional liqueur: Ginjinha de Óbidos served in a delicate edible dark chocolate cup.",
        "Continue to historic Alcobaça for an authentic Portuguese lunch in a handpicked local restaurant, featuring regional seasonal recipes and fine wine.",
        "In the afternoon, step inside the monumental Alcobaça Monastery (UNESCO World Heritage), the grandest Cistercian abbey in Portugal founded by the nation's first king in 1153. With admission included, marvel at the breathtaking Gothic vaults and the intricately carved 14th-century limestone tombs of King Pedro I and his beloved Inês de Castro. Conclude the day with a tasting of authentic conventual egg pastries and coffee in a historic pastry shop before your private drive back to Porto."
      ],
      "es": [
        "Una experiencia romántica e histórica por dos de las joyas más bellas de Portugal: la villa amurallada de Óbidos y el Monasterio de Alcobaça.",
        "En Óbidos paseamos por sus calles medievales empedradas y degustamos la famosa ginjinha de guinda servida en vasito de chocolate comestible.",
        "Tras un almuerzo tradicional portugués, visitamos el Monasterio de Alcobaça (UNESCO), cuna del amor eterno entre Don Pedro e Inés de Castro con sus sobrecogedores sepulcros góticos esculpidos.",
        "Culminamos la visita saboreando la tradicional repostería conventual de Alcobaça antes de regresar a Oporto."
      ],
      "fr": [
        "Une escapade pleine de charme médiéval, de romantisme et de douceurs artisanales au cœur du Portugal.",
        "Parcourez les ruelles fleuries de la cité fortifiée d'Óbidos et dégustez la fameuse liqueur de griotte Ginjinha servie dans une tasse en chocolat croquant.",
        "Profitez d'un déjeuner typique avant de pénétrer dans le grandiose Monastère d'Alcobaça (UNESCO), chef-d'œuvre de l'art cistercien abritant les splendides tombeaux sculptés de Pierre Ier et Inês de Castro.",
        "Finissez par une dégustation gourmande de pâtisseries conventuelles de tradition séculaire avant votre retour à Porto."
      ],
      "de": [
        "Ein Tag voller Romantik, mittelalterlichem Flair und süßer Gaumenfreuden im Herzen Portugals.",
        "Spaziergang durch die malerischen Kopfsteinpflastergassen von Óbidos, umgeben von Zinnenmauern, gefolgt von einer Verkostung des berühmten Sauerkirschlikörs Ginjinha im essbaren Schokobecher.",
        "Nach einem traditionellen Mittagessen besichtigen Sie das Zisterzienserkloster Alcobaça (UNESCO) mit den weltberühmten gotischen Grabmälern des Liebespaares Pedro I. und Inês de Castro.",
        "Verkostung feinsten traditionellen Klostergebäcks bei einer Tasse Kaffee vor der entspannten Rückfahrt nach Porto."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com acompanhamento exclusivo e sem pressa",
        "Passeio a pé pelas ruelas medievais e muralhas de Óbidos",
        "Prova da autêntica Ginjinha de Óbidos servida no copo de chocolate",
        "Almoço de cozinha tradicional portuguesa cuidadosamente selecionado",
        "Ingresso incluído no Mosteiro de Alcobaça (Património Mundial UNESCO)",
        "Degustação de doces conventuais tradicionais de Alcobaça com café"
      ],
      "en": [
        "100% private journey with dedicated chauffeur-guide and flexible pace",
        "Walking tour through medieval fortified Óbidos and its flower-lined alleys",
        "Tasting of authentic Ginjinha de Óbidos served in an edible chocolate cup",
        "Curated traditional multi-course Portuguese lunch included",
        "Admission ticket to Alcobaça Monastery (UNESCO World Heritage)",
        "Tasting of historical conventual pastries with coffee in Alcobaça"
      ],
      "es": [
        "Tour 100% privado con atención personalizada y ritmo flexible",
        "Paseo por las callejuelas medievales y murallas de Óbidos",
        "Degustación de auténtica Ginjinha de Óbidos en vaso de chocolate",
        "Almuerzo de cocina tradicional portuguesa cuidadosamente seleccionado",
        "Entrada incluida al Monasterio de Alcobaça (Patrimonio Mundial UNESCO)",
        "Degustación de repostería conventual típica con café"
      ],
      "fr": [
        "Circuit 100% privé avec accompagnement personnalisé et rythme sur-mesure",
        "Promenade au cœur de la cité médiévale et des remparts d'Óbidos",
        "Dégustation de la véritable Ginjinha d'Óbidos dans une tasse en chocolat",
        "Déjeuner complet de cuisine traditionnelle portugaise",
        "Billet d'entrée au Monastère d'Alcobaça (Patrimoine Mondial UNESCO)",
        "Dégustation de pâtisseries conventuelles artisanales avec café"
      ],
      "de": [
        "100% private Tagestour im bequemen Executive-Fahrzeug",
        "Rundgang durch das mittelalterliche Burgstädtchen Óbidos",
        "Verkostung des Kirschlikörs Ginjinha im echten Schokoladenbecher",
        "Mehrgängiges traditionelles portugiesisches Mittagessen",
        "Eintritt in das Kloster Alcobaça (UNESCO-Weltkulturerbe)",
        "Verkostung von traditionellem Klostergebäck mit portugiesischem Kaffee"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilíngue dedicado durante toda a experiência",
        "Visita guiada ao centro histórico de Óbidos e muralhas",
        "Degustação da tradicional Ginjinha de Óbidos em copo de chocolate",
        "Almoço de cozinha tradicional portuguesa selecionado",
        "Ingresso oficial no Mosteiro de Alcobaça (Património Mundial da UNESCO)",
        "Visita aos túmulos góticos de D. Pedro I e Inês de Castro",
        "Degustação de doces conventuais tradicionais com café",
        "Água mineral a bordo durante todo o dia",
        "Seguro de responsabilidade civil e acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual chauffeur-guide throughout the journey",
        "Guided exploration of medieval Óbidos and its ancient streets",
        "Tasting of traditional Ginjinha de Óbidos in an edible chocolate cup",
        "Full regional lunch featuring traditional Portuguese gastronomy",
        "Admission ticket to Alcobaça Monastery (UNESCO World Heritage)",
        "Visit to the royal tombs of King Pedro I and Inês de Castro",
        "Tasting of authentic conventual pastries with coffee",
        "Bottled water on board throughout the day",
        "Personal accident and civil liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante toda la jornada",
        "Paseo guiado por el centro histórico y murallas de Óbidos",
        "Cata de la tradicional Ginjinha de Óbidos en vaso de chocolate",
        "Almuerzo completo de gastronomía portuguesa seleccionada",
        "Entrada oficial al Monasterio de Alcobaça (UNESCO)",
        "Visita a los sepulcros de Don Pedro e Inés de Castro",
        "Degustación de dulces conventuales típicos con café",
        "Agua mineral a bordo durante todo el trayecto",
        "Seguro de responsabilidad civil y accidentes personales"
      ],
      "fr": [
        "Transport privé en véhicule exécutif aller-retour au départ de Porto",
        "Chauffeur-guide bilingue dédié pendant toute la durée du tour",
        "Visite guidée de la cité médiévale et des remparts d'Óbidos",
        "Dégustation de Ginjinha d'Óbidos dans une tasse en chocolat",
        "Déjeuner complet aux saveurs authentiques du Portugal",
        "Billet d'entrée au Monastère d'Alcobaça (UNESCO)",
        "Visite des tombeaux royaux de Pierre Ier et Inês de Castro",
        "Dégustation de pâtisseries conventuelles avec café",
        "Eau minérale à disposition à bord",
        "Assurance complète responsabilité civile et accidents"
      ],
      "de": [
        "Privater Hin- und Rücktransfer im Executive-Fahrzeug ab Porto",
        "Zweisprachiger Fahrer-Guide den gesamten Tag an Ihrer Seite",
        "Geführter Spaziergang durch die mittelalterliche Stadt Óbidos",
        "Verkostung des originalen Ginjinha-Likörs im Schokobecher",
        "Mehrgängiges traditionelles portugiesisches Mittagessen",
        "Eintrittskarte für das Zisterzienserkloster Alcobaça (UNESCO)",
        "Besichtigung der Grabmäler von Pedro I. und Inês de Castro",
        "Verkostung von traditionellem Klostergebäck mit Kaffee",
        "Mineralwasser an Bord den gesamten Tag über",
        "Umfassende Haftpflicht- und Unfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 560
      },
      {
        "pax": 2,
        "price": 610
      },
      {
        "pax": 3,
        "price": 660
      },
      {
        "pax": 4,
        "price": 710
      },
      {
        "pax": 5,
        "price": 760
      },
      {
        "pax": 6,
        "price": 810
      },
      {
        "pax": 7,
        "price": 910
      },
      {
        "pax": 8,
        "price": 960
      }
    ],
    "startingPrice": 560,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_009_obidos_medieval.jpg",
    "gallery": [
      "/images/tours/north_009_obidos_medieval.jpg"
    ],
    "experienceBadge": {
      "pt": "Ginjinha no Chocolate & Mosteiro de Alcobaça UNESCO",
      "en": "Ginjinha in Chocolate & Alcobaça UNESCO",
      "es": "Ginjinha en Chocolate y Alcobaça UNESCO",
      "fr": "Ginjinha en Chocolat & Alcobaça UNESCO",
      "de": "Ginjinha im Schokobecher & Alcobaça UNESCO"
    }
  },
  {
    "id": "porto-highlights-ocean",
    "code": "North-010",
    "category": "porto",
    "categoryLabel": {
      "pt": "Porto Experiences",
      "en": "Porto Experiences",
      "es": "Experiencias en Oporto",
      "fr": "Expériences à Porto",
      "de": "Porto Erlebnisse"
    },
    "name": {
      "pt": "Porto: Tour Privado com Teleférico de Gaia, Vinho do Porto, Almoço & Foz Atlântica",
      "en": "Porto: Private Highlights Tour with Gaia Cable Car, Wine, Lunch & Atlantic Coast",
      "es": "Oporto: Tour Privado con Teleférico de Gaia, Vino de Oporto, Almuerzo y Costa Atlántica",
      "fr": "Porto : Circuit Privé avec Téléphérique de Gaia, Vin de Porto, Déjeuner & Côte Atlantique",
      "de": "Porto: Private Stadt- & Küstentour mit Gaia-Seilbahn, Portwein, Mittagessen & Atlantik"
    },
    "subtitle": {
      "pt": "Centro histórico do Porto, viagem no Teleférico de Gaia sobre o Douro, visita e prova em caves de Vinho do Porto, almoço tradicional e passeio costeiro pela Foz e Castelo do Queijo.",
      "en": "Historic Porto highlights, Gaia Cable Car panoramic flight over the river, historic Port wine cellar tour and tasting, traditional lunch, and coastal drive to Foz and the Atlantic fortress.",
      "es": "Centro histórico de Oporto, viaje en el Teleférico de Gaia sobre el río Duero, visita y cata en bodegas de Oporto, almuerzo tradicional y recorrido costero por Foz y el Castillo del Queso.",
      "fr": "Monuments historiques de Porto, survol en téléphérique au-dessus du Douro, visite et dégustation dans les chais de Porto, déjeuner typique et promenade sur le front de mer à Foz.",
      "de": "Historische Höhepunkte Portos, Panoramafahrt mit der Gaia-Seilbahn über den Fluss, Führung und Verkostung in einer Portweinkellerei, traditionelles Mittagessen und Küstenfahrt an die Atlantikküste."
    },
    "tagline": {
      "pt": "Porto Panorâmico · Teleférico de Gaia · Costa Atlântica",
      "en": "Panoramic Porto · Gaia Cable Car · Atlantic Ocean",
      "es": "Oporto Panorámico · Teleférico de Gaia · Costa Atlántica",
      "fr": "Porto Panoramique · Téléphérique de Gaia · Côte Atlantique",
      "de": "Panorama Porto · Gaia-Seilbahn · Atlantikküste"
    },
    "shortDesc": {
      "pt": "Descubra o Porto em uma experiência privada que combina centro histórico, Teleférico de Gaia, caves de Vinho do Porto, almoço tradicional e a brisa atlântica da Foz do Douro.",
      "en": "Experience Porto's absolute best on a private tour: UNESCO historic landmarks, Gaia Cable Car views over the Douro, historic Port wine cellar tasting, traditional lunch, and oceanfront coastal beauty.",
      "es": "Descubra Oporto en una experiencia privada que combina centro histórico, Teleférico de Gaia, bodegas de vino de Oporto, almuerzo típico y la belleza atlántica de Foz.",
      "fr": "Découvrez le meilleur de Porto lors d'une journée privée complète : centre historique UNESCO, survol en téléphérique, chais centenaires de vin de Porto, déjeuner et front de mer.",
      "de": "Erleben Sie Porto von seiner schönsten Seite: UNESCO-Altstadt, Seilbahnfahrt über den Fluss, Portweinkellerei mit Verkostung, traditionelles Mittagessen und Atlantikküste."
    },
    "fullDesc": {
      "pt": [
        "Descubra a cidade Invicta de forma completa, personalizada e confortável, unindo história monumental, vistas panorâmicas sobre o rio, vinho de eleição, alta gastronomia e a beleza do Oceano Atlântico em veículo executivo.",
        "Comece no coração nobre do Porto, admirando a Avenida dos Aliados e a deslumbrante Estação de São Bento com os seus vinte mil azulejos históricos. Suba à imponente Sé Catedral e aprecie o panorama da Ribeira e da secular Ponte Luís I. Passeie pela zona dos Clérigos e contemple a célebre Torre dos Clérigos e a icónica Livraria Lello.",
        "Em seguida, atravesse para Gaia e viva uma experiência inesquecível a bordo do Teleférico de Gaia: uma viagem aérea panorâmica contemplando os telhados das caves, as embarcações rabelo e a frente ribeirinha do Porto. Faça uma pausa para um almoço tradicional requintado num restaurante de referência antes de visitar uma cave histórica com prova comentada de Vinho do Porto.",
        "A última parte da experiência leva-o ao encontro das águas oceânicas. Percorra a elegante marginal do Rio Douro até à Foz do Douro, onde o rio se funde com o Atlântico, e termine junto ao histórico Castelo do Queijo (Forte de São Francisco Xavier), respirando a brisa marítima antes do regresso confortável ao hotel."
      ],
      "en": [
        "Discover the vibrant soul of Porto on an all-inclusive private journey combining UNESCO world heritage architecture, sky-high river panoramas, cellar wine tastings, regional cuisine, and the Atlantic coastline.",
        "Begin in the monumental center at Avenida dos Aliados and São Bento Railway Station, world-famous for its 20,000 historic narrative azulejo tiles. Visit the 12th-century Porto Cathedral with its dramatic overlook, and view the Clérigos Tower and celebrated Livraria Lello.",
        "Cross into Vila Nova de Gaia and glide over the riverbank on the scenic Gaia Cable Car, taking in breathtaking aerial views of the Douro River, traditional wooden rabelo boats, and historic cellar rooftops. Pause for an exquisite Portuguese lunch in an acclaimed restaurant, followed by a private tour of a historic Port wine lodge with guided tastings.",
        "Conclude along the river's edge toward the Atlantic Ocean. Drive through the glamorous seaside promenade of Foz do Douro and stop at the 17th-century Castelo do Queijo fortress, taking in crashing Atlantic waves before your driver escorts you back to your hotel."
      ],
      "es": [
        "Una experiencia privada completa por Oporto que abarca sus monumentos más emblemáticos, vistas aéreas, cata de vinos y la costa atlántica.",
        "Visitamos los Aliados, la Estación de São Bento con sus 20.000 azulejos, la Catedral y la zona de los Clérigos.",
        "En Gaia, disfrutamos de un paseo en el Teleférico de Gaia con vistas únicas sobre el Duero y la Ribeira. Saboreamos un almuerzo tradicional portugués y visitamos una bodega histórica con cata de vino de Oporto.",
        "Continuamos hacia la costa pasando por la señorial Foz do Douro donde el río desemboca en el Atlántico, culminando en el Castillo del Queso frente al mar."
      ],
      "fr": [
        "Une journée privée exceptionnelle pour embrasser toute la richesse de Porto, de ses ruelles historiques jusqu'à l'Océan Atlantique.",
        "Parcourez l'Avenida dos Aliados, la gare São Bento et ses magnifiques azulejos, la Cathédrale et le quartier de la Tour des Clérigos.",
        "Envolez-vous au-dessus des quais grâce au Téléphérique de Gaia pour une vue saisissante sur le fleuve Douro. Savourez un déjeuner typique de qualité et profitez d'une visite privée d'un chai centenaire avec dégustation de vins de Porto.",
        "Longez le fleuve jusqu'à l'estuaire de Foz do Douro et terminez face aux vagues de l'Atlantique devant le Fort du Fromage (Castelo do Queijo)."
      ],
      "de": [
        "Eine abwechslungsreiche private Tour durch Porto: historische Monumente, Seilbahn-Panorama, edle Weine und Atlantikflair.",
        "Besuch der Avenida dos Aliados, des berühmten Bahnhofs São Bento mit seinen Azulejos, der Kathedrale und des Clérigos-Viertels.",
        "Panoramaflug mit der Gaia-Seilbahn hoch über den Portweinkellereien mit Blick auf die Ribeira. Feines portugiesisches Mittagessen und Führung durch eine traditionelle Portweinkellerei mit Verkostung.",
        "Küstenfahrt entlang der Mündung in Foz do Douro bis zur Meeresfestung Castelo do Queijo mit weitem Blick auf den offenen Ozean."
      ]
    },
    "duration": {
      "pt": "7 horas",
      "en": "7 hours",
      "es": "7 horas",
      "fr": "7 heures",
      "de": "7 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia trilíngue dedicado",
        "Destaques do centro histórico: Aliados, São Bento, Sé e Clérigos",
        "Bilhete e viagem panorâmica no Teleférico de Gaia sobre o Rio Douro",
        "Visita guiada a uma conceituada cave tradicional com prova de Vinho do Porto",
        "Almoço tradicional português num restaurante selecionado",
        "Passeio costeiro panorâmico pela Foz do Douro e Castelo do Queijo no Atlântico"
      ],
      "en": [
        "100% private tour with dedicated multilingual chauffeur-guide",
        "Historic downtown highlights: Aliados, São Bento station, Cathedral & Clérigos",
        "Panoramic flight on the Gaia Cable Car high above the Douro River",
        "Cellar tour and guided Port wine tasting at an established wine lodge",
        "Curated traditional Portuguese lunch in a quality restaurant",
        "Scenic coastal seaside drive along Foz do Douro and Castelo do Queijo fortress"
      ],
      "es": [
        "Tour 100% privado con chófer-guía trilingüe dedicado",
        "Monumentos del casco histórico: Aliados, São Bento, Catedral y Clérigos",
        "Billete del Teleférico de Gaia con vistas aéreas sobre el río Duero",
        "Visita guiada a una bodega histórica con cata de vino de Oporto",
        "Almuerzo tradicional en restaurante seleccionado",
        "Recorrido panorámico por la costa atlántica de Foz y el Castillo del Queso"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide trilingue dédié",
        "Les trésors du centre historique : Aliados, gare São Bento, Cathédrale, Clérigos",
        "Billet et vol panoramique en Téléphérique de Gaia au-dessus du Douro",
        "Visite guidée d'un chai réputé avec dégustation de vin de Porto",
        "Déjeuner portugais traditionnel dans une table sélectionnée",
        "Parcours côtier le long de Foz do Douro et du Fort Saint-François-Xavier"
      ],
      "de": [
        "100% private Tour mit persönlichem dreisprachigem Guide",
        "Höhepunkte der Altstadt: Aliados, Bahnhof São Bento, Kathedrale und Clérigos",
        "Fahrt mit der Gaia-Seilbahn mit Panoramablick auf den Douro-Fluss",
        "Führung durch eine Portweinkellerei mit geführter Verkostung",
        "Traditionelles portugiesisches Mittagessen in einem ausgewählten Restaurant",
        "Küstenfahrt entlang der Promenade von Foz do Douro und der Seefestung"
      ]
    },
    "included": {
      "pt": [
        "Recolha e retorno porta a porta no seu hotel no Porto",
        "Transporte privado em veículo executivo climatizado",
        "Motorista-guia trilíngue durante toda a experiência",
        "Bilhete de ida e volta no Teleférico de Gaia",
        "Visita guiada a uma cave tradicional de Vinho do Porto",
        "Prova comentada de vinhos do Porto",
        "Almoço completo em restaurante tradicional selecionado",
        "Paragens panorâmicas na Sé do Porto, Clérigos e Miradouros",
        "Passeio panorâmico na Foz do Douro e Castelo do Queijo",
        "Água mineral a bordo e seguro de acidentes pessoais"
      ],
      "en": [
        "Door-to-door hotel pickup and return in Porto",
        "Private transportation in an executive air-conditioned vehicle",
        "Dedicated multilingual chauffeur-guide throughout the day",
        "Round-trip ticket on the Gaia Cable Car",
        "Guided visit to an authentic Port wine lodge",
        "Guided tasting of select Port wines",
        "Full traditional Portuguese lunch at an established dining venue",
        "Scenic stops at Porto Cathedral, Clérigos, and viewpoints",
        "Coastal drive through Foz do Douro to Castelo do Queijo fortress",
        "Bottled water on board and passenger liability insurance"
      ],
      "es": [
        "Recogida y regreso puerta a puerta en su hotel de Oporto",
        "Transporte privado en vehículo ejecutivo climatizado",
        "Chófer-guía trilingüe dedicado durante todo el recorrido",
        "Billete del Teleférico de Gaia",
        "Visita guiada a una bodega tradicional de vino de Oporto",
        "Cata comentada de vinos de Oporto",
        "Almuerzo completo en restaurante tradicional de calidad",
        "Paradas en miradores, Catedral de Oporto y Clérigos",
        "Paseo panorámico por Foz do Douro y Castillo del Queso",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Prise en charge et retour à votre hôtel à Porto",
        "Transport privé en véhicule exécutif climatisé",
        "Chauffeur-guide trilingue dédié pendant tout le circuit",
        "Billet pour le Téléphérique panoramique de Gaia",
        "Visite guidée d'un chai traditionnel de vin de Porto",
        "Dégustation commentée de vins de Porto",
        "Déjeuner complet dans un restaurant portugais réputé",
        "Arrêts photos à la Cathédrale de Porto, Clérigos et belvédères",
        "Parcours panoramique à Foz do Douro et au Fort de São Francisco Xavier",
        "Eau minérale fraîche à bord et assurance passagers"
      ],
      "de": [
        "Bequeme Hotelabholung und Rückbringung in Porto",
        "Privattransfer im klimatisierten Executive-Fahrzeug",
        "Persönlicher dreisprachiger Chauffeur-Guide",
        "Fahrkarte für die Gaia-Seilbahn",
        "Führung in einer traditionellen Portweinkellerei",
        "Geführte Verkostung erlesener Portweine",
        "Mehrgängiges Mittagessen in einem traditionellen Restaurant",
        "Fotostopps an der Kathedrale, am Clérigos-Turm und an Aussichtspunkten",
        "Küstenfahrt entlang der Foz do Douro bis zur Festung Castelo do Queijo",
        "Mineralwasser an Bord und umfassende Versicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 420
      },
      {
        "pax": 2,
        "price": 470
      },
      {
        "pax": 3,
        "price": 520
      },
      {
        "pax": 4,
        "price": 570
      },
      {
        "pax": 5,
        "price": 620
      },
      {
        "pax": 6,
        "price": 670
      },
      {
        "pax": 7,
        "price": 770
      },
      {
        "pax": 8,
        "price": 820
      }
    ],
    "startingPrice": 420,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_010_porto_teleferico.jpg",
    "gallery": [
      "/images/tours/north_010_porto_teleferico.jpg",
      "/images/northe_experience_portrait.jpg"
    ],
    "experienceBadge": {
      "pt": "Teleférico Panorâmico de Gaia & Foz do Douro",
      "en": "Gaia Cable Car Flight & Atlantic Coast",
      "es": "Teleférico de Gaia y Costa Atlántica",
      "fr": "Téléphérique de Gaia & Côte Atlantique",
      "de": "Gaia-Seilbahn & Atlantikküste"
    }
  },
  {
    "id": "geres-mountain-villages",
    "code": "North-011",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte de Portugal",
      "en": "Northern Portugal",
      "es": "Norte de Portugal",
      "fr": "Nord du Portugal",
      "de": "Nordportugal"
    },
    "name": {
      "pt": "Gerês: Tour Privado, Cabras Autóctones, Queijo Artesanal & Aldeias de Montanha",
      "en": "Gerês: Private National Park Tour, Native Goats, Artisan Cheese & Mountain Villages",
      "es": "Gerês: Tour Privado, Cabras Autóctonas, Queso Artesanal y Aldeas de Montaña",
      "fr": "Gerês : Circuit Privé Parc National, Chèvres Indigènes, Fromage Artisanal & Villages",
      "de": "Gerês: Private Nationalpark-Tour, Ziegenmelken, Handwerkskäse & Bergdörfer"
    },
    "subtitle": {
      "pt": "Parque Nacional da Peneda-Gerês, vivência rural com ordenha tradicional de cabras, degustação de queijo artesanal, aldeia típica de montanha e caminhada panorâmica.",
      "en": "Peneda-Gerês National Park wilderness, traditional goat milking experience, artisan mountain cheese tasting, historic granite village walk, and scenic nature stroll.",
      "es": "Parque Nacional de Peneda-Gerês, experiencia rural con ordeño tradicional de cabras, cata de queso artesano, paseo por aldea de montaña y caminata panorámica.",
      "fr": "Parc National de Peneda-Gerês, expérience rurale de traite traditionnelle des chèvres, dégustation de fromage fermier, village de granit et balade panoramique.",
      "de": "Peneda-Gerês Nationalpark, traditionelles Ziegenmelken auf der Alm, handwerkliche Bergkäse-Verkostung, Rundgang durch ein Granitdorf und Panoramawanderung."
    },
    "tagline": {
      "pt": "Parque Nacional do Gerês · Vivência Rural · Queijo Artesanal",
      "en": "Gerês National Park · Rural Heritage · Artisan Cheese",
      "es": "Parque Nacional Gerês · Vida Rural · Queso Artesanal",
      "fr": "Parc National du Gerês · Vie Rurale · Fromage Fermier",
      "de": "Gerês-Nationalpark · Almleben · Handwerklicher Käse"
    },
    "shortDesc": {
      "pt": "Descubra o Gerês em um tour privado e autêntico: conheça de perto as cabras, assista à ordenha tradicional, prove queijo artesanal, explore aldeias de montanha e paisagens intocadas.",
      "en": "Discover the wild soul of Peneda-Gerês National Park on a private eco-tour: meet mountain goats, experience traditional milking, savor handcrafted cheeses, and explore historic stone villages.",
      "es": "Descubra Gerês en un tour privado auténtico: contacto con rebaños de cabras, ordeño tradicional, degustación de queso artesano, aldeas de piedra y paisajes protegidos.",
      "fr": "Découvrez le Gerês lors d'une immersion rurale privée : observez la traite traditionnelle des chèvres, savourez du fromage artisanal et explorez des villages de montagne préservés.",
      "de": "Erleben Sie den Nationalpark Peneda-Gerês auf einer privaten Naturtour: Bergbauern-Tradition, Ziegenmelken, Verkostung von Alm-Käse und unberührte Landschaften."
    },
    "fullDesc": {
      "pt": [
        "Descubra um lado genuíno, intocado e exclusivo do Norte de Portugal através de um tour privado que combina a grandiosidade selvagem do Parque Nacional da Peneda-Gerês com tradições rurais ancestrais e gastronomia de montanha.",
        "A jornada começa com a recolha privada no seu alojamento no Porto, subindo em direção às serras verdes do Alto Minho. A primeira paragem proporciona um contacto inesquecível com o mundo pastoril: visite uma exploração tradicional, conviva de perto com um rebanho de cabras autóctones de montanha e assista à demonstração da ordenha tradicional.",
        "Em seguida, conheça os segredos da queijaria artesanal familiar e delicie-se com uma prova comentada de queijos de cabra artesanais com pão rústico e café. Uma vivência enriquecedora que homenageia as pessoas e saberes que preservam a identidade viva da montanha.",
        "O percurso segue por estradas cénicas até uma aldeia histórica de granito do Gerês, onde o tempo parece ter parado entre espigueiros seculares e calçadas romanas. Após tempo livre para um reconfortante almoço tradicional com a gastronomia típica da serra, desfrute de uma caminhada panorâmica descontraída por trilhos naturais com vistas soberbas sobre vales profundos e cascatas cristalinas antes do regresso relaxado ao Porto."
      ],
      "en": [
        "Step far off the beaten tourist path into the pristine wild landscapes of Peneda-Gerês National Park, Portugal's only designated national park, on an authentic private eco-experience.",
        "Depart from Porto in an executive air-conditioned vehicle towards the green mountain ridges of Alto Minho. Your first stop offers an intimate encounter with authentic pastoral heritage: meet a friendly herd of native mountain goats, observe traditional morning milking, and learn how shepherds have sustained these highland ecosystems for centuries.",
        "Visit a small artisanal family cheese dairy to learn traditional curdling techniques, followed by a curated tasting of fresh and cured goat cheeses served with regional bread and coffee. This genuine encounter directly supports local mountain producers.",
        "Continue along scenic mountain roads to a secluded granite stone village tucked into the valley. Enjoy an authentic regional mountain lunch featuring local delicacies, then set out on a gentle panoramic walk along peaceful nature trails overlooking forested ravines and glacial streams before a comfortable drive back to Porto."
      ],
      "es": [
        "Una inmersión auténtica en la naturaleza protegida y la vida rural del Parque Nacional de Peneda-Gerês.",
        "Salimos de Oporto hacia las montañas del Alto Miño. Visitamos una ganadería tradicional para convivir con un rebaño de cabras autóctonas, presenciar el ordeño tradicional y aprender cómo se elabora el queso artesanal.",
        "Disfrute de una cata de quesos locales artesanales con pan de pueblo y café. Después, descubra una aldea histórica de granito con sus hórreos centenarios.",
        "Tras un almuerzo tradicional con productos de montaña, realizamos un relajante paseo panorámico por la naturaleza con vistas espectaculares antes de regresar a Oporto."
      ],
      "fr": [
        "Une immersion authentique dans la nature sauvage et les traditions pastorales du Parc National de Peneda-Gerês.",
        "Départ de Porto vers les montagnes verdoyantes du Minho pour rencontrer un éleveur local et son troupeau de chèvres indigènes. Assistez à la traite traditionnelle et découvrez les secrets de fabrication du fromage fermier.",
        "Dégustez différents fromages artisanaux accompagnés de pain de campagne et café. Explorez ensuite un village typique aux maisons de granit et greniers traditionnels.",
        "Après un déjeuner régional montagnard, profitez d'une balade panoramique accessible le long de sentiers préservés avec vues grandioses sur les vallées avant le retour à Porto."
      ],
      "de": [
        "Eine authentische Entdeckungsreise in die wilde Natur und Hirtenkultur des Peneda-Gerês Nationalparks.",
        "Fahrt von Porto in die Bergwelt des Alto Minho: hautnaher Kontakt mit einer Herde einheimischer Bergziegen und Vorführung des traditionellen Ziegenmelkens von Hand.",
        "Besuch einer kleinen Käserei mit Verkostung handwerklich hergestellter Ziegenkäse, Bauernbrot und Kaffee. Anschließend Spaziergang durch ein ursprüngliches Granitdorf mit historischen Maisspeichern (Espigueiros).",
        "Nach einem traditionellen Mittagessen mit Bergspezialitäten unternehmen Sie eine leichte Panoramawanderung mit herrlichen Ausblicken auf Schluchten und Bäche, bevor Sie nach Porto zurückkehren."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado no único Parque Nacional de Portugal (Peneda-Gerês)",
        "Contacto próximo com rebanho de cabras autóctones e ordenha tradicional",
        "Visita à queijaria artesanal e degustação de queijos locais com café",
        "Passeio guiado por uma aldeia histórica de granito preservada",
        "Caminhada panorâmica relaxante pela natureza e miradouros do Gerês",
        "Acompanhamento personalizado por guia bilingue dedicado"
      ],
      "en": [
        "100% private journey through Portugal's sole National Park (Peneda-Gerês)",
        "Up-close encounter with native mountain goats and traditional milking demonstration",
        "Artisan cheese dairy visit and tasting of handcrafted mountain cheeses",
        "Guided walk in an authentic preserved granite stone village",
        "Gentle scenic nature walk featuring spectacular mountain viewpoints",
        "Dedicated bilingual guide providing rich local cultural and natural context"
      ],
      "es": [
        "Tour 100% privado en el único Parque Nacional de Portugal (Peneda-Gerês)",
        "Contacto con cabras autóctonas y demostración de ordeño tradicional",
        "Degustación de quesos artesanos de montaña con pan y café",
        "Paseo por una aldea tradicional de piedra de granito",
        "Caminata panorámica suave por senderos naturales del Gerês",
        "Chófer-guía bilingüe dedicado durante todo el recorrido"
      ],
      "fr": [
        "Circuit 100% privé dans le seul Parc National du Portugal (Peneda-Gerês)",
        "Rencontre avec le troupeau de chèvres et démonstration de traite traditionnelle",
        "Dégustation commentée de fromages artisanaux de montagne avec café",
        "Découverte guidée d'un village de montagne en pierre de granit",
        "Balade panoramique facile à travers des paysages sauvages protégés",
        "Accompagnement attentif par un guide bilingue expérimenté"
      ],
      "de": [
        "100% private Tour im einzigen Nationalpark Portugals (Peneda-Gerês)",
        "Begegnung mit einheimischen Bergziegen und traditionelle Melkvorführung",
        "Besuch einer Handwerkskäserei und Verkostung von Bergkäse mit Kaffee",
        "Rundgang durch ein historisches Granit-Bergdorf mit Espigueiros",
        "Leichte Panoramawanderung zu spektakulären Aussichtspunkten",
        "Persönliche Betreuung durch einen naturkundigen zweisprachigen Guide"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilingue durante todo o dia",
        "Contacto guiado com rebanho de cabras de montanha",
        "Demonstração do processo tradicional de ordenha",
        "Visita à queijaria artesanal familiar",
        "Degustação de queijos artesanais de montanha e café",
        "Passeio acompanhado por aldeia histórica de granito",
        "Caminhada panorâmica guiada pela natureza do Gerês",
        "Água mineral a bordo durante todo o percurso",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual driver-guide throughout the journey",
        "Guided visit to mountain goat pastures and herd encounter",
        "Traditional goat milking demonstration",
        "Family-run artisan cheese production tour",
        "Tasting of handcrafted mountain cheeses with regional bread & coffee",
        "Guided stroll through a preserved historical granite village",
        "Scenic guided nature walk in Peneda-Gerês National Park",
        "Complimentary bottled water throughout the day",
        "Personal accident and civil liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante toda la jornada",
        "Encuentro cercano con rebaño de cabras autóctonas",
        "Demostración del ordeño tradicional de montaña",
        "Visita a quesería artesanal familiar",
        "Cata de quesos artesanos locales con café",
        "Paseo guiado por aldea histórica de granito",
        "Caminata panorámica suave por el Parque Nacional",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour au départ de Porto",
        "Chauffeur-guide bilingue dédié pendant toute la journée",
        "Visite pastorale et contact avec le troupeau de chèvres",
        "Démonstration de la traite traditionnelle",
        "Visite d'une fromagerie artisanale familiale",
        "Dégustation de fromages fermiers avec pain et café",
        "Promenade guidée dans un village traditionnel en granit",
        "Balade panoramique au cœur du Parc National du Gerês",
        "Bouteilles d'eau minérale à bord et assurance complète"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher zweisprachiger Guide während des gesamten Tages",
        "Begegnung mit einer Ziegenherde auf der Weide",
        "Vorführung des traditionellen Ziegenmelkens",
        "Besuch einer familiengeführten Handwerkskäserei",
        "Verkostung von frischem Bergkäse mit Bauernbrot und Kaffee",
        "Führung durch ein traditionelles Steindorf",
        "Geführte Panoramawanderung im Nationalpark Peneda-Gerês",
        "Mineralwasser an Bord und umfassender Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 549
      },
      {
        "pax": 2,
        "price": 599
      },
      {
        "pax": 3,
        "price": 649
      },
      {
        "pax": 4,
        "price": 699
      },
      {
        "pax": 5,
        "price": 749
      },
      {
        "pax": 6,
        "price": 799
      },
      {
        "pax": 7,
        "price": 899
      },
      {
        "pax": 8,
        "price": 949
      }
    ],
    "startingPrice": 549,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_011_geres_national_park.jpg",
    "gallery": [
      "/images/tours/north_011_geres_national_park.jpg"
    ],
    "experienceBadge": {
      "pt": "Ordenha Tradicional & Degustação de Queijo de Montanha",
      "en": "Goat Milking & Artisan Mountain Cheese Tasting",
      "es": "Ordeño Tradicional y Degustación de Queso",
      "fr": "Traite Traditionnelle & Dégustation de Fromage Fermier",
      "de": "Traditionelles Ziegenmelken & Bergkäse-Verkostung"
    }
  },
  {
    "id": "porto-filigree-gourmet",
    "code": "North-012",
    "category": "porto",
    "categoryLabel": {
      "pt": "Porto Experiences",
      "en": "Porto Experiences",
      "es": "Experiencias en Oporto",
      "fr": "Expériences à Porto",
      "de": "Porto Erlebnisse"
    },
    "name": {
      "pt": "Porto: Tour Privado com Workshop de Filigrana em Prata, Vinho do Porto & Almoço Gourmet",
      "en": "Porto: Private Silver Filigree Masterclass, Port Wine & Gourmet Lunch",
      "es": "Oporto: Tour Privado con Taller de Filigrana en Plata, Vino de Oporto y Almuerzo Gourmet",
      "fr": "Porto : Circuit Privé Atelier Filigrane en Argent, Vin de Porto & Déjeuner Gourmet",
      "de": "Porto: Privater Silberfiligran-Workshop, Portwein & Gourmet-Mittagessen"
    },
    "subtitle": {
      "pt": "Workshop exclusivo de 2 horas com um mestre ourives para criar a sua própria joia em prata de lei, visita a caves de Vinho do Porto com prova e almoço gourmet.",
      "en": "Exclusive 2-hour hands-on workshop with a master goldsmith creating your own silver filigree jewelry piece to keep, historic Port wine cellar tour with tasting, and gourmet lunch.",
      "es": "Taller exclusivo de 2 horas con un maestro orfebre para crear su propia joya en plata de ley, visita y cata en bodegas de Oporto y almuerzo gourmet.",
      "fr": "Atelier de création de 2 heures avec un maître orfèvre pour façonner votre propre bijou en argent, visite et dégustation dans les chais de Porto et déjeuner gastronomique.",
      "de": "Exklusiver 2-stündiger Workshop mit einem Goldschmiedemeister zur Herstellung Ihres eigenen Silberfiligran-Schmuckstücks, Portweinkellerei mit Probe und Gourmet-Mittagessen."
    },
    "tagline": {
      "pt": "Artesanato Nobre · Workshop Filigrana em Prata · Vinho do Porto",
      "en": "Noble Crafts · Silver Filigree Masterclass · Port Wine",
      "es": "Orfebrería Noble · Taller de Filigrana en Plata · Vino de Oporto",
      "fr": "Artisanat d'Art · Atelier Filigrane en Argent · Vin de Porto",
      "de": "Edles Handwerk · Silberfiligran-Meisterklasse · Portwein"
    },
    "shortDesc": {
      "pt": "Crie a sua própria joia de filigrana em prata num workshop de 2h com mestre artesão, visite o museu da ourivesaria, prove Vinho do Porto em caves seculares e desfrute de almoço gourmet.",
      "en": "Craft your own sterling silver filigree jewelry during a 2-hour masterclass with a master goldsmith, explore the goldsmith museum, taste fine Port in historic cellars, and enjoy an authentic gourmet lunch.",
      "es": "Cree su propia joya de filigrana de plata en un taller de 2h con maestro artesano, visite el museo de orfebrería, cate vino de Oporto y disfrute de un almuerzo gourmet.",
      "fr": "Façonnez votre propre bijou en filigrane d'argent lors d'un atelier privé de 2h avec un maître orfèvre, visitez le musée de l'orfèvrerie, dégustez du vin de Porto et savourez un déjeuner gourmet.",
      "de": "Kreieren Sie Ihr eigenes Schmuckstück aus Sterlingsilber in einem 2-stündigen Filigran-Workshop beim Meister, besichtigen Sie das Museum, verkosten Sie Portwein und genießen Sie ein Gourmet-Mittagessen."
    },
    "fullDesc": {
      "pt": [
        "Viva uma das experiências culturais e artesanais mais nobres e exclusivas de Portugal. Este tour privado foi concebido para quem deseja colocar as mãos na arte tradicional da filigrana portuguesa, combinando criatividade, alta gastronomia e grandes vinhos.",
        "A jornada começa com a recolha privada no seu hotel no Porto. Siga com o seu guia até a uma oficina e museu tradicional de filigrana, onde conhecerá séculos de história da ourivesaria minhota e duriense. De seguida, senta-se na bancada de trabalho ao lado de um mestre ourives experiente num workshop prático de duas horas.",
        "Aprenda a manipular delicados fios de prata de lei (técnicas do 'S', da escama aberta e do cartão) e crie com as suas próprias mãos uma peça autêntica — escolha entre o emblemático Coração de Viana ou um medalhão circular clássico. No final, a joia em prata que criou é sua para levar para casa: uma memória eterna com o seu toque pessoal.",
        "A experiência prossegue no universo do Vinho do Porto. Visite uma prestigiada cave histórica, compreenda os mistérios do envelhecimento em pipas de carvalho e desfrute de uma prova comentada de vinhos de diferentes categorias. Para culminar, saboreie um almoço gourmet de inspiração portuguesa num restaurante requintado antes do regresso privativo ao seu hotel."
      ],
      "en": [
        "Immerse yourself in one of Portugal's most prestigious and delicate artisan traditions. This exclusive private cultural experience is curated for discerning travelers seeking hands-on craftsmanship, fine dining, and world-class wine.",
        "Depart from your hotel in Porto in an executive vehicle to an authentic filigree workshop and private museum. Uncover the centuries-old legacy of Northern Portuguese gold and silversmithing, celebrated in royal courts across Europe. Then, sit at the jeweler's bench for an intensive 2-hour masterclass beside a master craftsman.",
        "Using authentic tools and fine sterling silver threads, master intricate historical wire-twisting techniques. Hand-craft your own piece of Portuguese jewelry — choosing between the timeless Heart of Viana or an elegant circular medallion. Upon completion, your silver masterpiece is yours to keep: an irreplaceable personal memory crafted by your own hands.",
        "After the workshop, delve into the heritage of Port wine. Tour an atmospheric historic cellar lodge, discover the alchemy of barrel aging, and enjoy an expert-led tasting of vintage and reserve styles. Conclude with an authentic multi-course gourmet Portuguese luncheon before your chauffeur escorts you back to your hotel."
      ],
      "es": [
        "Una experiencia cultural y artística única en Oporto. Comenzamos con recogida en su hotel hacia un taller tradicional y museo de filigrana.",
        "Durante un taller práctico exclusivo de 2 horas junto a un maestro orfebre, manipulará hilos de plata de ley con herramientas históricas para crear su propia joya (el Corazón de Viana o un medallón circular). La pieza terminada será suya para llevarse a casa.",
        "Continuamos hacia una bodega histórica de vino de Oporto para realizar una visita guiada y cata comentada de distintas añadas.",
        "Culminamos la experiencia con un almuerzo gourmet de alta gastronomía portuguesa antes del regreso en vehículo ejecutivo."
      ],
      "fr": [
        "Une expérience d'artisanat d'art rare et prestigieuse au Portugal. Départ en véhicule privé vers un atelier traditionnel et musée d'orfèvrerie.",
        "Pendant un atelier de 2 heures aux côtés d'un maître artisan, travaillez les fils d'argent sterling selon les techniques ancestrales pour façonner votre propre bijou (Cœur de Viana ou médaillon classique), que vous emporterez chez vous.",
        "Explorez ensuite les caves historiques de vin de Porto pour une visite guidée suivie d'une dégustation de cuvées raffinées.",
        "Terminez par un déjeuner gastronomique portugais de premier ordre dans une atmosphère élégante avant de regagner votre hébergement."
      ],
      "de": [
        "Ein exklusives privates Kunsthandwerks-Erlebnis in Porto. Fahrt im Executive-Fahrzeug zu einer traditionellen Filigran-Werkstatt mit Museum.",
        "In einem 2-stündigen Workshop sitzen Sie direkt neben einem Goldschmiedemeister an der Werkbank, biegen feinste Sterlingsilberdrähte und fertigen Ihr eigenes portugiesisches Schmuckstück (z.B. das berühmte Herz von Viana), das Sie als wertvolles Andenken mit nach Hause nehmen.",
        "Anschließend besuchen Sie eine historische Portweinkellerei mit geführter Verkostung edler Tropfen.",
        "Zum Abschluss genießen Sie ein mehrgängiges Gourmet-Mittagessen mit authentischen portugiesischen Gaumenfreuden vor der Rückkehr zu Ihrem Hotel."
      ]
    },
    "duration": {
      "pt": "6 horas",
      "en": "6 hours",
      "es": "6 horas",
      "fr": "6 heures",
      "de": "6 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com recolha e entrega no hotel em veículo executivo",
        "Workshop prático de filigrana em prata de 2 horas com mestre ourives",
        "Criação de uma joia em prata de lei que o participante leva para casa",
        "Visita ao museu histórico da ourivesaria tradicional portuguesa",
        "Visita guiada e prova comentada em caves de Vinho do Porto",
        "Almoço gourmet completo com sabores autênticos de Portugal"
      ],
      "en": [
        "100% private journey with hotel pickup and drop-off in an executive vehicle",
        "2-hour intensive hands-on silver filigree masterclass with a master goldsmith",
        "Creation of your own sterling silver jewelry piece to keep and take home",
        "Visit to the private museum of Portuguese jewelry and gold traditions",
        "Guided cellar tour and tasting of premium Port wines at a historic lodge",
        "Multi-course gourmet lunch featuring authentic Portuguese cuisine"
      ],
      "es": [
        "Tour 100% privado con recogida en hotel en vehículo ejecutivo",
        "Taller práctico de filigrana en plata de 2 horas con maestro orfebre",
        "Creación de una joya de plata de ley para llevar a casa",
        "Visita al museo histórico de la filigrana y orfebrería portuguesa",
        "Visita guiada y cata de vino de Oporto en bodegas históricas",
        "Almuerzo gourmet completo con alta gastronomía portuguesa"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur dédié et véhicule exécutif",
        "Atelier pratique de filigrane d'argent de 2 heures avec un maître orfèvre",
        "Création d'un bijou en argent massif que vous emportez chez vous",
        "Visite du musée de l'orfèvrerie traditionnelle portugaise",
        "Visite guidée et dégustation de vins de Porto dans des chais séculaires",
        "Déjeuner gastronomique complet inspiré des meilleures tables portugaises"
      ],
      "de": [
        "100% private Tour mit persönlicher Hotelabholung im Executive-Fahrzeug",
        "2-stündiger praktischer Silberfiligran-Workshop mit einem Goldschmiedemeister",
        "Herstellung eines echten Schmuckstücks aus Sterlingsilber zur Mitnahme",
        "Führung durch das Museum für traditionelle Goldschmiedekunst",
        "Kellerbesichtigung und geführte Portweinprobe in historischen Kellern",
        "Mehrgängiges Gourmet-Mittagessen mit Spezialitäten der portugiesischen Küche"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado de ida e volta a partir do hotel no Porto",
        "Acompanhamento de motorista-guia durante toda a experiência",
        "Workshop prático de filigrana portuguesa com duração de 2 horas",
        "Todos os fios de prata de lei, materiais e ferramentas para o workshop",
        "Peça em prata criada pelo próprio participante para levar para casa",
        "Visita guiada ao museu da tradição da ourivesaria e filigrana",
        "Visita a uma cave tradicional secular de Vinho do Porto",
        "Prova comentada de vinhos do Porto",
        "Almoço gourmet completo em restaurante selecionado",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated guide accompaniment throughout the experience",
        "2-hour hands-on silver filigree masterclass with master jeweler",
        "All sterling silver wire, tools, and materials for jewelry crafting",
        "Handmade sterling silver jewelry piece crafted by you to take home",
        "Guided visit to the filigree and goldsmith heritage museum",
        "Tour of an authentic centuries-old Port wine cellar lodge",
        "Guided tasting of select premium Port wines",
        "Full multi-course gourmet lunch at a curated dining venue",
        "Comprehensive civil liability and accident insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde el hotel en Oporto",
        "Acompañamiento de chófer-guía durante todo el día",
        "Taller práctico de filigrana portuguesa de 2 horas con maestro orfebre",
        "Hilos de plata de ley y herramientas profesionales incluidas",
        "Joya de plata realizada por usted para llevarse a casa",
        "Visita guiada al museo de orfebrería y filigrana",
        "Visita a una bodega tradicional histórica de vino de Oporto",
        "Cata comentada de vinos de Oporto",
        "Almuerzo gourmet completo en restaurante seleccionado",
        "Seguro de accidentes personales y responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour depuis votre hôtel à Porto",
        "Accompagnement par un guide dédié tout au long du circuit",
        "Atelier pratique de création en filigrane de 2 heures",
        "Fils d'argent massif 925, outils professionnels et matériaux inclus",
        "Le bijou en argent créé par vos soins à emporter définitivement",
        "Visite guidée du musée de l'artisanat et de l'orfèvrerie",
        "Visite d'un chai traditionnel séculaire de vin de Porto",
        "Dégustation commentée de vins de Porto",
        "Déjeuner gastronomique complet dans un restaurant réputé",
        "Assurance complète responsabilité civile et accidents"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Ihrem Hotel in Porto",
        "Persönliche Begleitung durch einen Guide den gesamten Tag über",
        "2-stündiger praktischer Silberfiligran-Workshop mit Meisteranleitung",
        "Sterlingsilberdrähte, Werkzeuge und Arbeitsmaterialien inklusive",
        "Das von Ihnen selbst gefertigte Silberschmuckstück zum Mitnehmen",
        "Führung durch das Museum der portugiesischen Goldschmiedetradition",
        "Führung in einer traditionellen Portweinkellerei",
        "Fachmännische Verkostung erlesener Portweine",
        "Mehrgängiges Gourmet-Mittagessen in einem Spitzenrestaurant",
        "Haftpflicht- und Personenunfallversicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 460
      },
      {
        "pax": 2,
        "price": 510
      },
      {
        "pax": 3,
        "price": 560
      },
      {
        "pax": 4,
        "price": 610
      },
      {
        "pax": 5,
        "price": 660
      },
      {
        "pax": 6,
        "price": 710
      },
      {
        "pax": 7,
        "price": 810
      },
      {
        "pax": 8,
        "price": 860
      }
    ],
    "startingPrice": 460,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_012_porto_filigrana.jpg",
    "gallery": [
      "/images/tours/north_012_porto_filigrana.jpg",
      "/images/northe_experience_square.jpg"
    ],
    "experienceBadge": {
      "pt": "Workshop de Filigrana (Crie a Sua Joia de Prata)",
      "en": "Hands-on Filigree Masterclass (Keep Your Jewelry)",
      "es": "Taller de Filigrana (Cree su Joya de Plata)",
      "fr": "Atelier Filigrane (Créez Votre Bijou en Argent)",
      "de": "Silberfiligran-Workshop (Eigenes Schmuckstück)"
    }
  },
  {
    "id": "douro-blind-tasting-blend",
    "code": "North-013",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Douro: Tour Privado com Prova às Cegas & Crie e Engarrafe o Seu Próprio Vinho do Porto",
      "en": "Douro: Blind Wine Tasting Challenge & Create Your Own Port Wine",
      "es": "Duero: Tour Privado con Cata a Ciegas y Crea Tu Propio Vino de Oporto",
      "fr": "Douro : Défi Dégustation à l'Aveugle & Créez Votre Propre Vin de Porto",
      "de": "Douro: Blindverkostungs-Challenge & Kreieren Sie Ihren Eigenen Portwein"
    },
    "subtitle": {
      "pt": "Receção com Moscatel Spritz, desafio de prova de vinhos às cegas com prémios, workshop enológico para misturar, engarrafar e rotular o seu próprio Tawny e tábua de queijos e enchidos.",
      "en": "Moscatel Spritz welcome, blind wine tasting challenge with winner surprise, blending masterclass to bottle and label your custom Tawny Port, paired with artisan cheeses and charcuterie.",
      "es": "Bienvenida con Moscatel Spritz, desafío de cata a ciegas con premios, taller enológico para mezclar, embotellar y etiquetar su propio Tawny y tabla de embutidos y quesos.",
      "fr": "Accueil Moscatel Spritz, défi dégustation de vins à l'aveugle avec surprise, atelier œnologique pour assembler, embouteiller et étiqueter votre Tawny personnalisé, plancha de fromages et charcuteries.",
      "de": "Begrüßung mit Moscatel Spritz, Blindverkostungs-Wettbewerb mit Überraschungspreis, Workshop zum Mischen, Abfüllen und Etikettieren Ihres eigenen Tawny Portweins mit Käse- und Wurstspezialitäten."
    },
    "tagline": {
      "pt": "Prova às Cegas · Faça o Seu Blend · Garrafa Personalizada",
      "en": "Blind Tasting · Blend Your Wine · Custom Port Bottle",
      "es": "Cata a Ciegas · Crea tu Blend · Botella Personalizada",
      "fr": "Dégustation à l'Aveugle · Créez Votre Blend · Bouteille Sur-Mesure",
      "de": "Blindverkostung · Eigenes Blending · Personalisierte Flasche"
    },
    "shortDesc": {
      "pt": "Descubra o Douro num tour privado interativo: receção com Moscatel Spritz, desafio de prova de vinhos às cegas e oficina prática onde cria, engarrafa e rotula o seu próprio Vinho do Porto.",
      "en": "An interactive Douro wine journey: enjoy a Moscatel Spritz welcome, test your senses in a blind wine tasting challenge, and blend, bottle, cork, and wax-seal your very own custom Port wine to take home.",
      "es": "Descubra el Duero en un tour privado interactivo: bienvenida con Moscatel Spritz, cata a ciegas y taller práctico donde mezcla, embotella y etiqueta su propio vino de Oporto.",
      "fr": "Une aventure œnologique privée et ludique dans le Douro : accueil Moscatel Spritz, défi dégustation à l'aveugle et atelier de création où vous assemblez, embouteillez et étiquetez votre propre Porto.",
      "de": "Ein interaktives Weinerlebnis im Douro-Tal: Empfang mit Moscatel Spritz, Blindverkostungs-Wettbewerb und Workshop zum Mischen, Abfüllen und Etikettieren Ihres eigenen Portweins zum Mitnehmen."
    },
    "fullDesc": {
      "pt": [
        "Descubra o Vale do Douro de uma forma interativa, divertida e profundamente sensorial numa experiência privada que combina vinho, competição amigável, criatividade enológica e alta hospitalidade duriense.",
        "O dia começa com a recolha privada no seu hotel no Porto com destino a uma charmosa casa vinícola do Douro. À chegada, seja recebido com um refrescante Moscatel Spritz antes de realizar uma visita guiada às adegas e instalações vinícolas para compreender o processo de vinificação e envelhecimento em cascos.",
        "Em seguida, teste o seu olfato e paladar no empolgante 'Blind Wine Challenge': quatro vinhos serão servidos sem revelar a sua identidade. Com uma ficha de avaliação profissional, tente adivinhar castas, aromas e características. No final, as garrafas são reveladas com uma surpresa especial reservada para o vencedor!",
        "A experiência atinge o auge na oficina prática 'Crie o Seu Próprio Tawny'. Prove três lotes de Vinho do Porto Tawny de diferentes idades e crie a sua fórmula de lote perfeita. De seguida, utilize a máquina manual de engarrafamento, coloque a rolha, sele com cera e aplique o seu rótulo personalizado. Desfrute ainda de uma tábua de queijos nobres e enchidos portugueses harmonizada com vinhos DOC Colheita Branco e Reserva Tinto antes do regresso triunfal ao Porto com a sua garrafa exclusiva."
      ],
      "en": [
        "Experience the Douro Valley through an engaging, interactive, and deeply sensorial masterclass that goes far beyond passive tourism.",
        "Depart from Porto in private executive comfort to an elegant boutique wine estate in the Douro hills. You are greeted upon arrival with a refreshing Moscatel Spritz cocktail followed by a private guided tour of the fermentation cellars and barrel aging rooms.",
        "Next, sharpen your senses in the thrilling Blind Wine Challenge: four mystery wines are poured into unmarked glasses. Evaluate aromas, body, and grape varietals on your score sheet. When labels are revealed, celebrate with a special surprise gift prepared for the tasting champion!",
        "The day reaches its artistic climax with the hands-on 'Make Your Own Tawny' workshop. Taste three distinct aged Tawny Port casks and blend your dream formula using precision labware. Bottle, cork, dip in sealing wax, and apply your customized label to your bottle. Celebrate your creation with an artisan platter of Portuguese cheeses, charcuterie, and fine DOC Douro wines before driving back to Porto with your bespoke Port wine trophy."
      ],
      "es": [
        "Una experiencia enológica divertida e interactiva en el Duero: cata a ciegas, gastronomía y taller de ensamblaje de vino.",
        "Recibimiento con un Moscatel Spritz en una bodega de encanto y visita guiada a sus instalaciones.",
        "Participe en el emocionante desafío de cata a ciegas con cuatro vinos misteriosos y descubra quién tiene el paladar más afinado, con premio para el ganador.",
        "En el taller de ensamblaje, mezclará tres añadas distintas de Oporto Tawny hasta encontrar su mezcla perfecta, embotellará y colocará su propia etiqueta personalizada. Disfrute de una tabla de quesos y embutidos con vinos DOC antes de regresar a Oporto."
      ],
      "fr": [
        "Une expérience œnologique vivante et créative au cœur de la Vallée du Douro.",
        "Accueil privilégié avec un cocktail Moscatel Spritz dans une quinta de charme suivi d'une visite guidée des chais de vinification.",
        "Relevez le défi de la dégustation à l'aveugle : analysez 4 vins mystères sur votre fiche de dégustation, avec une surprise d'exception pour le vainqueur.",
        "Créez ensuite votre propre vin de Porto Tawny en assemblant trois fûts d'âges différents, embouteillez votre cuvée, scellez-la à la cire et apposez votre étiquette personnalisée. Dégustez ensuite une sélection de fromages et charcuteries accompagnés de vins DOC avant de rentrer à Porto."
      ],
      "de": [
        "Ein kreatives, interaktives Wein-Erlebnis im Douro-Tal für Weinbegeisterte.",
        "Begrüßung mit einem spritzigen Moscatel Spritz auf einem charmanten Weingut, gefolgt von einer Führung durch die Kellerei und die Holzfasslager.",
        "Die Blindverkostungs-Challenge: Identifizieren Sie 4 Weine im Glas und messen Sie sich spielerisch mit Ihren Begleitern – inklusive Überraschungspreis für den Gewinner.",
        "Beim 'Make Your Own Tawny' Workshop mischen Sie 3 verschiedene Jahrgänge zu Ihrem eigenen Portwein-Cuvée, füllen die Flasche selbst ab, verkorken, versiegeln und etikettieren sie. Dazu gibt es eine Platte mit regionalem Käse, Schinken und Douro DOC Weinen vor der Rückfahrt."
      ]
    },
    "duration": {
      "pt": "6 horas",
      "en": "6 hours",
      "es": "6 horas",
      "fr": "6 heures",
      "de": "6 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado e interativo em elegante casa vinícola no Douro",
        "Boas-vindas com cocktail refrescante Moscatel Spritz",
        "Desafio de prova de vinhos às cegas (Blind Wine Challenge) com prémios",
        "Workshop prático de enologia: crie, misture, engarrafe e rotule o seu próprio Porto Tawny",
        "Garrafa personalizada de Vinho do Porto criada por si para levar para casa",
        "Tábua de queijos e enchidos tradicionais com prova de vinhos DOC Branco e Reserva Tinto"
      ],
      "en": [
        "100% private interactive masterclass at an elegant Douro boutique wine estate",
        "Welcome with a chilled artisanal Moscatel Spritz cocktail",
        "Blind Wine Tasting Challenge with score sheets and winner surprise gift",
        "Hands-on blending workshop: craft, bottle, cork, wax-seal, and label your custom Tawny",
        "Personalized custom-blended Port wine bottle to keep and take home",
        "Artisan Portuguese cheese & charcuterie board paired with fine DOC Douro wines"
      ],
      "es": [
        "Tour 100% privado e interactivo en una bodega con encanto del Duero",
        "Bienvenida con cóctel refrescante Moscatel Spritz",
        "Desafío de cata de vinos a ciegas con premio sorpresa para el ganador",
        "Taller de ensamblaje: mezcle, embotelle y etiquete su propio Oporto Tawny",
        "Botella personalizada creada por usted para llevarse a casa",
        "Tabla de quesos y embutidos artesanales con cata de vinos DOC Blanco y Tinto Reserva"
      ],
      "fr": [
        "Circuit 100% privé et immersif dans une quinta de charme du Douro",
        "Cocktail de bienvenue Moscatel Spritz rafraîchissant",
        "Grand jeu de dégustation à l'aveugle avec cadeau pour le vainqueur",
        "Atelier d'assemblage œnologique : créez, embouteillez et étiquetez votre Tawny",
        "Bouteille personnalisée de vin de Porto à emporter chez vous",
        "Planche de fromages et charcuteries avec dégustation de vins DOC Blanc et Rouge Réserve"
      ],
      "de": [
        "100% private interaktive Tour auf einem charmanten Douro-Weingut",
        "Willkommens-Cocktail mit hausgemachtem Moscatel Spritz",
        "Spannende Blindverkostungs-Challenge mit Überraschungspreis",
        "Praktischer Blending-Workshop: Eigenen Tawny Portwein mischen, abfüllen & etikettieren",
        "Persönlich kreierte und etikettierte Portweinflasche zum Mitnehmen",
        "Schlemmerplatte mit Käse und Wurstspezialitäten sowie DOC Douro-Weinen"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilíngue dedicado durante toda a experiência",
        "Receção de boas-vindas com cocktail Moscatel Spritz",
        "Visita guiada às adegas e instalações vinícolas",
        "Desafio de vinhos às cegas com 4 vinhos e fichas de avaliação",
        "Prémio surpresa especial para o vencedor do desafio",
        "Workshop enológico prático 'Make Your Own Tawny'",
        "Degustação de 3 lotes de Tawny de diferentes idades para blending",
        "Garrafa de Vinho do Porto Tawny engarrafada e rotulada para levar",
        "Tábua de queijos e enchidos portugueses artesanais",
        "Degustação de vinhos DOC Colheita Branco e DOC Reserva Tinto",
        "Água mineral a bordo e seguro de acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual driver-guide throughout the day",
        "Welcome Moscatel Spritz cocktail upon arrival",
        "Guided tour of the estate winemaking facilities and barrel rooms",
        "Blind Wine Challenge with 4 mystery wines and evaluation sheets",
        "Special surprise gift for the challenge winner",
        "Hands-on 'Make Your Own Tawny' winemaking masterclass",
        "Tasting of 3 distinct aged Tawny Port casks for blending",
        "Your own custom-bottled, wax-sealed, and labeled 750ml Port bottle to take home",
        "Platter of artisanal Portuguese cheeses and cured meats",
        "Tasting of estate DOC Douro White and Reserve Red wines",
        "Bottled water on board and passenger liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante todo el tour",
        "Cóctel de bienvenida Moscatel Spritz",
        "Visita guiada a las bodegas y salas de barricas",
        "Desafío de cata a ciegas con 4 vinos y fichas de notas",
        "Premio sorpresa para el ganador del desafío",
        "Taller de enología práctico 'Make Your Own Tawny'",
        "Cata de 3 lotes de Tawny de diferentes añadas para la mezcla",
        "Botella de Oporto Tawny embotellada y etiquetada para llevar a casa",
        "Tabla de quesos y embutidos ibéricos tradicionales",
        "Cata de vinos DOC Blanco y Tinto Reserva",
        "Agua mineral a bordo y seguro de accidentes personales"
      ],
      "fr": [
        "Transport privé exécutif aller-retour au départ de Porto",
        "Chauffeur-guide bilingue dédié pendant toute la journée",
        "Cocktail de bienvenue Moscatel Spritz",
        "Visite guidée des caves de vieillissement et de vinification",
        "Défi de dégustation à l'aveugle avec 4 vins et fiches de dégustation",
        "Cadeau surprise pour le vainqueur du concours",
        "Atelier pratique d'assemblage 'Make Your Own Tawny'",
        "Dégustation de 3 fûts de Tawny d'âges variés pour votre création",
        "Votre bouteille de vin de Porto étiquetée et scellée à emporter",
        "Planche gourmande de fromages et charcuteries portugaises",
        "Dégustation de vins DOC Douro Blanc et Rouge Réserve",
        "Eau minérale fraîche à bord et assurance passagers"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher zweisprachiger Guide den ganzen Tag",
        "Empfangs-Cocktail Moscatel Spritz",
        "Geführte Besichtigung der Kellerei und der Barrique-Räume",
        "Blindverkostungs-Wettbewerb mit 4 Weinen und Bewertungsbögen",
        "Überraschungsgeschenk für den Sieger des Wettbewerbs",
        "Praktischer Workshop 'Make Your Own Tawny'",
        "Verkostung von 3 verschiedenen Tawny-Jahrgängen für die eigene Komposition",
        "Ihre persönliche Flasche Portwein mit individuellem Etikett zum Mitnehmen",
        "Vesperplatte mit handwerklichem Käse und portugiesischen Wurstwaren",
        "Verkostung von DOC Douro Weiß- und Reserve-Rotweinen",
        "Mineralwasser an Bord und Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 640
      },
      {
        "pax": 2,
        "price": 690
      },
      {
        "pax": 3,
        "price": 740
      },
      {
        "pax": 4,
        "price": 790
      },
      {
        "pax": 5,
        "price": 840
      },
      {
        "pax": 6,
        "price": 890
      },
      {
        "pax": 7,
        "price": 990
      },
      {
        "pax": 8,
        "price": 1040
      }
    ],
    "startingPrice": 640,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/cinematic-style-couple-vineyard.jpg",
    "gallery": [
      "/images/cinematic-style-couple-vineyard.jpg",
      "/images/douro-premium.jpg"
    ],
    "experienceBadge": {
      "pt": "Engarrafe o Seu Próprio Vinho do Porto Tawny",
      "en": "Bottle & Label Your Own Custom Port Wine",
      "es": "Embotelle y Etiquete su Propio Oporto",
      "fr": "Mettez en Bouteille Votre Propre Vin de Porto",
      "de": "Füllen Sie Ihren Eigenen Portwein Ab"
    }
  },
  {
    "id": "nazare-sao-martinho",
    "code": "North-014",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte & Centro de Portugal",
      "en": "Northern & Central Portugal",
      "es": "Norte y Centro de Portugal",
      "fr": "Nord & Centre du Portugal",
      "de": "Nord- & Zentralportugal"
    },
    "name": {
      "pt": "Nazaré & São Martinho: Tour Privado de Ondas Gigantes, Forte & Sabores do Atlântico",
      "en": "Nazaré & São Martinho: Giant Waves, Historic Fort & Atlantic Flavours Private Tour",
      "es": "Nazaré y São Martinho: Olas Gigantes, Fuerte y Sabores del Atlántico Tour Privado",
      "fr": "Nazaré & São Martinho : Vagues Géantes, Fort & Saveurs de l'Atlantique",
      "de": "Nazaré & São Martinho: Riesenwellen, Festung & Atlantikküste Private Tour"
    },
    "subtitle": {
      "pt": "Sítio da Nazaré, Forte de São Miguel e Canhão submarino das maiores ondas do mundo, almoço costeiro tradicional de peixe fresco e baía serena de São Martinho do Porto com 3 doces e café.",
      "en": "Sítio da Nazaré, São Miguel Fort and the underwater canyon behind the world's biggest surf waves, fresh coastal seafood lunch, and scenic shell-shaped bay of São Martinho with 3 pastries and coffee.",
      "es": "Sítio de Nazaré, Fuerte de São Miguel y Cañón submarino de las mayores olas del mundo, almuerzo costero tradicional de pescado fresco y bahía de São Martinho do Porto con 3 dulces y café.",
      "fr": "Sítio de Nazaré, Fort Saint-Michel et canyon sous-marin des vagues géantes mythiques, déjeuner de poisson frais en bord de mer et baie de São Martinho do Porto avec 3 pâtisseries et café.",
      "de": "Sítio da Nazaré, São Miguel Festung und Unterwasserschlucht der weltberühmten Riesenwellen, traditionelles Fisch-Mittagessen am Meer und muschelförmige Bucht von São Martinho mit 3 Gebäcken und Kaffee."
    },
    "tagline": {
      "pt": "Ondas Gigantes da Nazaré · Forte São Miguel · Baía de São Martinho",
      "en": "Nazaré Giant Waves · São Miguel Fort · São Martinho Bay",
      "es": "Olas Gigantes de Nazaré · Fuerte São Miguel · Bahía São Martinho",
      "fr": "Vagues Géantes de Nazaré · Fort Saint-Michel · Baie de São Martinho",
      "de": "Riesenwellen von Nazaré · Festung São Miguel · Bucht von São Martinho"
    },
    "shortDesc": {
      "pt": "Descubra Nazaré e as suas ondas gigantes em um tour privado: visite o Forte e o Canhão da Nazaré, desfrute de um almoço português à beira-mar e termine com degustação de 3 doces em São Martinho.",
      "en": "Witness the natural drama of Nazaré's world-record big waves on a private coastal journey: explore São Miguel Fort overlooking Praia do Norte, enjoy fresh seafood, and visit peaceful São Martinho bay with pastries.",
      "es": "Descubra Nazaré y sus olas gigantes en un tour privado: visite el Fuerte y el Cañón de Nazaré, deguste un almuerzo costero y termine con cata de 3 dulces en São Martinho do Porto.",
      "fr": "Ressentez la puissance des vagues géantes de Nazaré lors d'un circuit privé : visitez le Fort Saint-Michel, dégustez un déjeuner de poissons côtiers et terminez par des douceurs à São Martinho do Porto.",
      "de": "Erleben Sie die weltberühmten Riesenwellen von Nazaré auf einer privaten Küstentour: Festung São Miguel, frisches Meeresfrüchte-Mittagessen und die friedliche Bucht von São Martinho mit Gebäck."
    },
    "fullDesc": {
      "pt": [
        "Prepare-se para descobrir dois dos cenários mais fascinantes e contrastantes da costa atlântica de Portugal numa viagem privada que combina a força indomável do oceano com a serenidade de uma baía idílica e os melhores sabores do mar.",
        "Em Nazaré, suba ao emblemático promontório do Sítio da Nazaré e contemple a vista arrebatadora do Miradouro do Suberco, suspenso a 110 metros sobre o oceano. Visite o histórico Santuário de Nossa Senhora da Nazaré e caminhe até ao imponente Forte de São Miguel Arcanjo (com ingresso incluído), vigia solitário sobre a Praia do Norte.",
        "No Forte, visite o Centro Interpretativo do Canhão da Nazaré e compreenda o abismo geológico submarino de 5.000 metros de profundidade que gera as maiores ondas surfáveis do planeta. Veja as pranchas originais doadas pelos lendários surfistas de ondas gigantes que desafiam este monstro da natureza.",
        "Após a imersão oceânica, saboreie um almoço tradicional à beira-mar com o melhor peixe fresco e marisco da costa portuguesa. À tarde, seguimos para a magnífica Baía de São Martinho do Porto, uma baía natural perfeita em forma de concha com águas calmas. Caminhe pela marginal costeira e termine numa pastelaria tradicional com uma degustação de três mini doces típicos acompanhados por café antes do regresso confortável ao Porto."
      ],
      "en": [
        "Witness two of the most breathtaking contrasting coastal landscapes in Europe on an exhilarating private journey from Porto.",
        "Arrive at legendary Nazaré and ascend to the sheer clifftop village of O Sítio. Take in the dramatic panoramic views from the Suberco Viewpoint, suspended 110 meters directly above the crashing Atlantic. Visit the Sanctuary of Our Lady of Nazaré, then walk down the rocky promontory to the 16th-century Fort of São Miguel Arcanjo.",
        "Inside the fort (admission included), explore the Nazaré Canyon Interpretive Center to understand how this 5,000-meter-deep underwater geological chasm channels raw ocean energy into the planet's biggest surfable waves. Inspect the actual surfboards donated by world-record big-wave surfers like Garrett McNamara who made this coastline famous worldwide.",
        "Enjoy an authentic multi-course coastal lunch featuring freshly caught Atlantic fish and seafood. In the afternoon, travel to the sheltered, shell-shaped bay of São Martinho do Porto, known for its tranquil golden waters. Stroll along the oceanfront promenade and finish with a tasting of three traditional Portuguese pastries and espresso before your private return drive to Porto."
      ],
      "es": [
        "Una jornada costera emocionante descubriendo las mayores olas del mundo en Nazaré y la calma de la bahía de São Martinho do Porto.",
        "En Nazaré subimos al acantilado de O Sítio y disfrutamos del mirador del Suberco. Visitamos el Fuerte de San Miguel Arcángel frente a la Praia do Norte y su Centro de Interpretación del Cañón de Nazaré con las tablas de los surfistas de olas gigantes.",
        "Saboreamos un almuerzo marinero tradicional de pescado fresco junto a la costa.",
        "Por la tarde descubrimos la bahía en forma de concha de São Martinho do Porto y degustamos una selección de tres pastelillos típicos con café antes de retornar a Oporto."
      ],
      "fr": [
        "Une journée côtière spectaculaire mêlant la puissance brute des plus grandes vagues du globe et la douceur d'une baie protégée.",
        "À Nazaré, contemplez l'océan depuis le belvédère du Suberco avant de visiter le Fort Saint-Michel Archange dominant la mythique Praia do Norte. Découvrez le centre d'interprétation du canyon sous-marin et les planches dédicacées par les surfeurs de l'extrême.",
        "Savourez un déjeuner de poissons frais de l'Atlantique dans un restaurant typique du front de mer.",
        "Poursuivez vers la sublime baie en coquillage de São Martinho do Porto pour une balade paisible suivie de la dégustation de 3 pâtisseries traditionnelles avec café avant de rentrer à Porto."
      ],
      "de": [
        "Ein atemberaubender Küstentag zwischen den weltberühmten Riesenwellen von Nazaré und der idyllischen muschelförmigen Bucht von São Martinho.",
        "In Nazaré genießen Sie den schwindelerregenden Blick vom Miradouro do Suberco 110 Meter über dem tosenden Ozean. Besichtigung der Festung São Miguel Arcanjo mit dem Museum der Unterwasserschlucht und den Original-Surfboards der Big-Wave-Legenden.",
        "Traditionelles Mittagessen mit fangfrischem Atlantikfisch in einem ausgewählten Küstenrestaurant.",
        "Am Nachmittag Spaziergang an der windgeschützten Bucht von São Martinho do Porto und Verkostung von 3 traditionellen Gebäcken mit portugiesischem Espresso vor der Rückfahrt."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10熟horas"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue em veículo executivo",
        "Vistas panorâmicas vertiginosas do Miradouro do Suberco no Sítio da Nazaré",
        "Ingresso e visita ao histórico Forte de São Miguel Arcanjo sobre a Praia do Norte",
        "Descoberta do fenómeno do Canhão submarino da Nazaré e das ondas gigantes mundiais",
        "Almoço de gastronomia costeira tradicional com peixe fresco incluído",
        "Passeio pela magnífica Baía de São Martinho do Porto com degustação de 3 doces e café"
      ],
      "en": [
        "100% private journey with dedicated bilingual guide in executive comfort",
        "Breathtaking 110m cliff-edge panoramas from Miradouro do Suberco in Sítio",
        "Admission ticket and tour of São Miguel Fort overlooking Praia do Norte",
        "Discovery of the Nazaré Underwater Canyon and world-record big wave science",
        "Traditional multi-course seafood lunch featuring freshly caught Atlantic fish",
        "Scenic exploration of shell-shaped São Martinho Bay with 3 traditional pastries & coffee"
      ],
      "es": [
        "Tour 100% privado con chófer-guía bilingüe en vehículo ejecutivo",
        "Vistas panorámicas vertiginosas desde el mirador del Suberco en Nazaré",
        "Entrada y visita al Fuerte de São Miguel Arcanjo sobre la Praia do Norte",
        "Interpretación del fenómeno geológico del Cañón de Nazaré y las olas gigantes",
        "Almuerzo marinero tradicional de pescado fresco junto a la costa",
        "Visita a la bahía de São Martinho do Porto con degustación de 3 dulces y café"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur-guide bilingue en véhicule exécutif",
        "Panoramas saisissants depuis le belvédère du Suberco à 110 mètres au-dessus des flots",
        "Billet et visite du Fort Saint-Michel Archange face à la Praia do Norte",
        "Compréhension du phénomène géologique du canyon et des vagues géantes de légende",
        "Déjeuner traditionnel complet de poissons frais et fruits de mer au bord de l'eau",
        "Découverte de la baie de São Martinho do Porto avec dégustation de 3 pâtisseries et café"
      ],
      "de": [
        "100% private Tour mit persönlichem Guide im Executive-Fahrzeug",
        "Spektakuläre Aussicht vom Miradouro do Suberco über den Atlantik",
        "Eintritt und Führung in der Festung São Miguel Arcanjo an der Praia do Norte",
        "Erläuterung des Unterwasser-Canyons und des Phänomens der Riesenwellen",
        "Traditionelles Mittagessen mit frischem Fisch direkt an der Küste",
        "Spaziergang an der Bucht von São Martinho mit Verkostung von 3 Gebäcken und Kaffee"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilíngue dedicado durante todo o dia",
        "Visita ao Sítio da Nazaré e Miradouro do Suberco",
        "Ingresso oficial no Forte de São Miguel Arcanjo",
        "Entrada no Centro Interpretativo do Canhão da Nazaré",
        "Almoço tradicional português completo com peixe fresco",
        "Visita à Baía de São Martinho do Porto",
        "Degustação de 3 mini doces tradicionais portugueses",
        "Café português incluído durante a degustação",
        "Água mineral a bordo e seguro de acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual driver-guide throughout the day",
        "Visit to O Sítio da Nazaré and Miradouro do Suberco",
        "Official admission ticket to São Miguel Arcanjo Fort",
        "Admission to the Nazaré Canyon Interpretive Center",
        "Full traditional Portuguese coastal lunch with fresh fish",
        "Visit to the picturesque Bay of São Martinho do Porto",
        "Tasting of 3 traditional mini pastries in a local bakery",
        "Portuguese espresso coffee included during pastry tasting",
        "Bottled water on board and passenger liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante todo el tour",
        "Paseo por O Sítio de Nazaré y mirador del Suberco",
        "Entrada oficial al Fuerte de São Miguel Arcanjo",
        "Entrada al Centro de Interpretación del Cañón de Nazaré",
        "Almuerzo tradicional de pescado fresco en restaurante costero",
        "Paseo por la bahía en concha de São Martinho do Porto",
        "Degustación de 3 dulces tradicionales en pastelería local",
        "Café portugués incluido durante la degustación",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour au départ de Porto",
        "Chauffeur-guide bilingue dédié tout au long de la journée",
        "Visite d'O Sítio de Nazaré et du belvédère du Suberco",
        "Billet d'entrée officiel au Fort de São Miguel Arcanjo",
        "Entrée au Centre d'Interprétation du Canyon de Nazaré",
        "Déjeuner côtier traditionnel complet de poisson frais",
        "Visite de la baie naturelle de São Martinho do Porto",
        "Dégustation de 3 mini pâtisseries portugaises traditionnelles",
        "Café expresso portugais inclus lors de la dégustation",
        "Eau minérale fraîche à bord et assurance passagers"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher zweisprachiger Guide während des gesamten Tages",
        "Besuch von O Sítio da Nazaré und dem Aussichtspunkt Suberco",
        "Eintrittskarte für die Festung São Miguel Arcanjo",
        "Zugang zum Informationszentrum über den Nazaré-Canyon",
        "Mehrgängiges traditionelles Mittagessen mit frischem Fisch",
        "Besuch der geschützten Bucht von São Martinho do Porto",
        "Verkostung von 3 traditionellen Gebäcken in einer Konditorei",
        "Portugiesischer Kaffee zur Verkostung inklusive",
        "Mineralwasser an Bord und umfassender Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 550
      },
      {
        "pax": 2,
        "price": 600
      },
      {
        "pax": 3,
        "price": 650
      },
      {
        "pax": 4,
        "price": 700
      },
      {
        "pax": 5,
        "price": 750
      },
      {
        "pax": 6,
        "price": 800
      },
      {
        "pax": 7,
        "price": 900
      },
      {
        "pax": 8,
        "price": 950
      }
    ],
    "startingPrice": 550,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_014_nazare_farol.jpg",
    "gallery": [
      "/images/tours/north_014_nazare_farol.jpg"
    ],
    "experienceBadge": {
      "pt": "Canhão da Nazaré & Ondas Gigantes Mundiais",
      "en": "Nazaré Canyon & World-Record Surf Waves",
      "es": "Cañón de Nazaré y Olas Gigantes",
      "fr": "Canyon de Nazaré & Vagues Géantes",
      "de": "Nazaré-Canyon & Weltrekord-Wellen"
    }
  },
  {
    "id": "arouca-santa-maria-feira",
    "code": "North-015",
    "category": "north",
    "categoryLabel": {
      "pt": "Norte de Portugal",
      "en": "Northern Portugal",
      "es": "Norte de Portugal",
      "fr": "Nord du Portugal",
      "de": "Nordportugal"
    },
    "name": {
      "pt": "Arouca & Santa Maria da Feira: Tour Privado - Mosteiro, Castelo Medieval & Fogaça ao Vivo",
      "en": "Arouca & Santa Maria da Feira: Monastery, Medieval Castle & Fresh Fogaça Private Tour",
      "es": "Arouca y Santa Maria da Feira: Monasterio, Castillo Medieval y Fogaça en Vivo",
      "fr": "Arouca & Santa Maria da Feira : Monastère, Château Médiéval & Fogaça Artisanale",
      "de": "Arouca & Santa Maria da Feira: Kloster, Ritterburg & Ofenfrische Fogaça"
    },
    "subtitle": {
      "pt": "Mosteiro secular de Arouca com arte sacra, degustação de Castanha Doce conventual, almoço de gastronomia regional, Castelo de Santa Maria da Feira e Fogaça tradicional quente do forno.",
      "en": "Centuries-old Arouca Monastery, sweet conventual chestnut tasting with coffee, regional gastronomy lunch, medieval Santa Maria da Feira Castle, and warm traditional Fogaça straight from the bakery oven.",
      "es": "Monasterio secular de Arouca con arte sacro, degustación de Castaña Dulce conventual, almuerzo regional, Castillo medieval de Santa Maria da Feira y Fogaça tradicional caliente del horno.",
      "fr": "Monastère séculaire d'Arouca, dégustation de châtaigne douce conventuelle, déjeuner régional, château médiéval de Santa Maria da Feira et Fogaça traditionnelle tout juste sortie du four.",
      "de": "Jahrhundertealtes Kloster Arouca mit Sakralkunst, süße Kloster-Kastanie mit Kaffee, regionales Mittagessen, mittelalterliche Burg Santa Maria da Feira und ofenfrische Fogaça."
    },
    "tagline": {
      "pt": "Mosteiro de Arouca · Castelo Medieval · Fogaça da Feira",
      "en": "Arouca Monastery · Medieval Castle · Fresh Fogaça",
      "es": "Monasterio de Arouca · Castillo Medieval · Fogaça Tradicional",
      "fr": "Monastère d'Arouca · Château Médiéval · Fogaça Artisanale",
      "de": "Kloster Arouca · Ritterburg · Traditionelle Fogaça"
    },
    "shortDesc": {
      "pt": "Descubra dois tesouros do Norte: o Mosteiro de Arouca e o Castelo de Santa Maria da Feira. Saboreie a doçaria conventual, a Fogaça acabada de cozer e a gastronomia regional sem pressa.",
      "en": "Discover two architectural and culinary gems of Northern Portugal on a private tour: the monumental Arouca Monastery, medieval Santa Maria da Feira Castle, conventual chestnut sweets, and warm oven-baked Fogaça.",
      "es": "Descubra dos tesoros del Norte: el Monasterio de Arouca y el Castillo de Santa Maria da Feira. Saboree la repostería conventual, la tradicional Fogaça caliente del horno y comida típica.",
      "fr": "Découvrez deux trésors authentiques du Nord : le Monastère d'Arouca et le Château médiéval de Santa Maria da Feira avec dégustation de douceurs conventuelles et Fogaça artisanale chaude.",
      "de": "Entdecken Sie zwei Juwelen Nordportugals auf einer privaten Tour: das Kloster Arouca und die Ritterburg Santa Maria da Feira mit traditionellem Klostergebäck und ofenfrischer Fogaça."
    },
    "fullDesc": {
      "pt": [
        "Descubra um lado genuíno, menos percorrido e fascinante do Norte de Portugal numa viagem privada que combina património monumental, fortalezas medievais, tradições gastronómicas seculares e o prazer de viajar com conforto e sem pressa.",
        "A jornada começa com a recolha privada no seu alojamento no Porto rumo a Arouca, atravessando colinas verdejantes. A primeira paragem é a acolhedora vila de Arouca para visitar o monumental Mosteiro de Santa Maria de Arouca (com ingresso incluído), um dos mosteiros cistercienses femininos mais opulentos de Portugal. Explore a sua igreja imponente, o cadeiral barroco do coro e o impressionante tesouro de arte sacra associado à Beata Rainha D. Mafalda.",
        "Em seguida, paramos na histórica Casa dos Doces Conventuais de Arouca para provar a célebre Castanha Doce de Arouca com café. Desfrute depois de um almoço de rica gastronomia regional num ambiente tranquilo e acolhedor.",
        "À tarde, seguimos para Santa Maria da Feira para visitar o extraordinário Castelo de Santa Maria da Feira (ingresso incluído), uma das fortalezas medievais mais emblemáticas, bem preservadas e cénicas de Portugal, célebre pelas suas quatro torres encimadas por coruchéus cónicos. Para encerrar o dia de forma deliciosa, visite uma confeitaria tradicional para provar a famosa Fogaça da Feira acabada de sair do forno a lenha, acompanhada por café, antes de regressar ao Porto."
      ],
      "en": [
        "Uncover a rare, authentic, and culturally profound side of Northern Portugal on a private day journey connecting royal monasteries, intact medieval fortresses, and centuries-old baking traditions.",
        "Depart from your Porto accommodation in an executive vehicle towards mountainous Arouca. Your morning is dedicated to the monumental Monastery of Santa Maria de Arouca (admission included). Tour the opulent historic spaces, the church with its grand baroque choir stalls, and the world-renowned sacred art museum linked to the 13th-century royal Queen-Saint Mafalda.",
        "Visit the historic Casa dos Doces Conventuais to taste the legendary Castanha Doce de Arouca paired with Portuguese coffee. Savor a traditional multi-course lunch celebrating the regional gastronomy of the northern interior.",
        "In the afternoon, continue to Santa Maria da Feira to explore the fairy-tale Castle of Santa Maria da Feira (admission included). One of the best-preserved and strategically important medieval fortresses in Portugal, famous for its four conical-capped turrets. Complete the day at an artisan bakery tasting the beloved sweet spiced bread Fogaça da Feira warm directly from the wood-fired oven before your private drive back to Porto."
      ],
      "es": [
        "Una jornada privada inolvidable descubriendo monumentos históricos y tradiciones gastronómicas exclusivas del Norte de Portugal.",
        "En Arouca visitamos el monumental Monasterio de Santa María de Arouca (entrada incluida), conociendo su rica iglesia barroca y su excepcional colección de arte sacro.",
        "Degustamos la célebre Castaña Dulce en la Casa de los Dulces Conventuales con café y disfrutamos de un almuerzo tradicional regional.",
        "Por la tarde exploramos el impresionante Castillo medieval de Santa Maria da Feira (entrada incluida), con sus características torres cónicas. Finalizamos en una pastelería tradicional degustando la famosa Fogaça recién horneada antes de volver a Oporto."
      ],
      "fr": [
        "Une journée privée hors des sentiers battus mêlant splendeur monastique, forteresse médiévale de conte de fées et douceurs artisanales.",
        "Visitez d'abord le somptueux Monastère cistercien de Santa Maria de Arouca (billet inclus) et son trésor exceptionnel d'art sacré lié à la reine sainte Mafalda.",
        "Dégustez la fameuse châtaigne douce conventuelle d'Arouca avec un café, puis profitez d'un déjeuner traditionnel aux saveurs du terroir.",
        "Explorez l'emblématique Château médiéval de Santa Maria da Feira (billet inclus), l'une des forteresses les mieux conservées du pays, puis savourez la traditionnelle Fogaça tout juste sortie du four dans une boulangerie artisanale avant de rentrer à Porto."
      ],
      "de": [
        "Eine private Entdeckungsreise abseits der Touristenströme: monumentale Klöster, Ritterburgen und traditionelles Handwerksgebäck.",
        "In Arouca besichtigen Sie das prächtige Zisterzienserkloster Santa Maria de Arouca (Eintritt inklusive) mit seiner barocken Klosterkirche und dem Sakralkunstmuseum.",
        "Verkostung der berühmten süßen Kloster-Kastanie mit Kaffee und mehrgängiges regionales Mittagessen in gemütlicher Atmosphäre.",
        "Besichtigung der märchenhaften Ritterburg Santa Maria da Feira (Eintritt inklusive) mit ihren vier kegelförmigen Wehrtürmen, gefolgt von einer Verkostung der warmen, ofenfrischen traditionellen Fogaça direkt aus der Backstube vor der Rückfahrt nach Porto."
      ]
    },
    "duration": {
      "pt": "10 horas",
      "en": "10 hours",
      "es": "10 horas",
      "fr": "10 heures",
      "de": "10 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com motorista-guia bilingue em veículo executivo",
        "Visita ao monumental Mosteiro de Santa Maria de Arouca com ingresso incluído",
        "Degustação da tradicional Castanha Doce de Arouca com café na Casa dos Doces Conventuais",
        "Almoço com a rica gastronomia tradicional regional do Norte",
        "Ingresso e visita ao histórico Castelo medieval de Santa Maria da Feira",
        "Degustação da tradicional Fogaça da Feira acabada de sair do forno com café"
      ],
      "en": [
        "100% private journey in executive comfort with dedicated bilingual guide",
        "Admission ticket and guided tour of the monumental Arouca Monastery",
        "Tasting of authentic conventual Castanha Doce with coffee at Casa dos Doces Conventuais",
        "Traditional multi-course regional lunch with local Northern flavours",
        "Admission ticket and exploration of the medieval Castle of Santa Maria da Feira",
        "Tasting of traditional warm Fogaça da Feira straight from the bakery oven"
      ],
      "es": [
        "Tour 100% privado en confort ejecutivo con chófer-guía dedicado",
        "Entrada incluida y visita al monumental Monasterio de Santa María de Arouca",
        "Degustación de Castaña Dulce conventual con café en Arouca",
        "Almuerzo regional tradicional completo con productos locales",
        "Entrada y visita al emblemático Castillo medieval de Santa Maria da Feira",
        "Degustación de Fogaça tradicional caliente del horno con café"
      ],
      "fr": [
        "Circuit 100% privé en véhicule exécutif avec chauffeur-guide dédié",
        "Billet d'entrée et visite guidée du grand Monastère de Santa Maria de Arouca",
        "Dégustation de la fameuse châtaigne douce conventuelle avec café",
        "Déjeuner complet aux saveurs authentiques du terroir régional",
        "Billet et visite intérieure du Château médiéval de Santa Maria da Feira",
        "Dégustation de Fogaça traditionnelle chaude tout juste sortie du four"
      ],
      "de": [
        "100% private Tour im bequemen Executive-Fahrzeug mit persönlichem Guide",
        "Eintrittskarte und Führung im geschichtsträchtigen Kloster Santa Maria de Arouca",
        "Verkostung der traditionellen Kloster-Kastanie mit portugiesischem Kaffee",
        "Traditionelles mehrgängiges Mittagessen mit Spezialitäten des Nordens",
        "Eintritt und Rundgang in der mittelalterlichen Burg Santa Maria da Feira",
        "Verkostung ofenfrischer, traditioneller Fogaça da Feira direkt in der Backstube"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia bilíngue dedicado durante todo o dia",
        "Ingresso oficial no Mosteiro de Santa Maria de Arouca e museu sacro",
        "Degustação de Castanha Doce de Arouca com café na confeitaria histórica",
        "Almoço tradicional com gastronomia regional do Norte",
        "Ingresso oficial no Castelo de Santa Maria da Feira",
        "Degustação de Fogaça da Feira acabada de cozer com café",
        "Combustível, portagens e estacionamentos incluídos",
        "Água mineral a bordo durante todo o dia",
        "Seguro de responsabilidade civil e acidentes pessoais"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated bilingual chauffeur-guide throughout the day",
        "Admission ticket to the Monastery of Santa Maria de Arouca and museum",
        "Tasting of conventual Castanha Doce with espresso at the historical sweetshop",
        "Full traditional regional lunch featuring Northern Portuguese cuisine",
        "Admission ticket to the Castle of Santa Maria da Feira",
        "Tasting of oven-warm traditional Fogaça bread with espresso",
        "All highway tolls, fuel, and parking fees included",
        "Complimentary bottled water on board",
        "Comprehensive civil liability and personal accident insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía bilingüe dedicado durante todo el recorrido",
        "Entrada oficial al Monasterio de Santa María de Arouca",
        "Degustación de Castaña Dulce con café en pastelería histórica",
        "Almuerzo regional tradicional completo con gastronomía del Norte",
        "Entrada oficial al Castillo de Santa Maria da Feira",
        "Degustación de Fogaça tradicional caliente con café",
        "Combustible, peajes y aparcamientos incluidos",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Transport privé exécutif aller-retour au départ de Porto",
        "Chauffeur-guide bilingue dédié pendant tout le circuit",
        "Billet d'entrée au Monastère de Santa Maria de Arouca et musée",
        "Dégustation de châtaigne douce conventuelle avec café",
        "Déjeuner traditionnel complet avec spécialités régionales du Nord",
        "Billet d'entrée au Château médiéval de Santa Maria da Feira",
        "Dégustation de Fogaça chaude sortie du four avec café",
        "Tous péages, carburant et frais de parking inclus",
        "Eau minérale à bord et assurance responsabilité civile"
      ],
      "de": [
        "Privater Hin- und Rücktransfer im Executive-Fahrzeug ab Porto",
        "Persönlicher zweisprachiger Chauffeur-Guide den ganzen Tag",
        "Eintrittskarte für das Kloster Santa Maria de Arouca und Sakralmuseum",
        "Verkostung der süßen Kloster-Kastanie mit Kaffee",
        "Mehrgängiges traditionelles Mittagessen mit Spezialitäten Nordportugals",
        "Eintrittskarte für die Burg Santa Maria da Feira",
        "Verkostung ofenfrischer Fogaça mit Kaffee in der Backstube",
        "Alle Mautgebühren, Treibstoff und Parkgebühren inklusive",
        "Mineralwasser an Bord und umfassender Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 510
      },
      {
        "pax": 2,
        "price": 560
      },
      {
        "pax": 3,
        "price": 610
      },
      {
        "pax": 4,
        "price": 660
      },
      {
        "pax": 5,
        "price": 710
      },
      {
        "pax": 6,
        "price": 760
      },
      {
        "pax": 7,
        "price": 860
      },
      {
        "pax": 8,
        "price": 910
      }
    ],
    "startingPrice": 510,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_015_arouca_516.jpg",
    "gallery": [
      "/images/tours/north_015_arouca_516.jpg"
    ],
    "experienceBadge": {
      "pt": "Fogaça Tradicional ao Vivo & Doçaria Conventual",
      "en": "Live Oven-Fresh Fogaça & Conventual Pastries",
      "es": "Fogaça Caliente del Horno y Dulces Conventuales",
      "fr": "Fogaça Sortie du Four & Douceurs Conventuelles",
      "de": "Ofenfrische Fogaça & Traditionelles Klostergebäck"
    }
  },
  {
    "id": "historic-quinta-bucheiro-douro",
    "code": "North-016",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Douro Autêntico: Quinta do Bucheiro, Museu Familiar, Almoço na Quinta, Cruzeiro & Vinhos",
      "en": "Authentic Douro: Quinta do Bucheiro, Family Museum, Estate Lunch, Cruise & Wine",
      "es": "Duero Auténtico: Quinta do Bucheiro, Museo Familiar, Almuerzo en la Finca, Crucero y Vinos",
      "fr": "Douro Authentique : Quinta do Bucheiro, Musée Familial, Déjeuner au Domaine, Croisière & Vins",
      "de": "Authentisches Douro-Tal: Quinta do Bucheiro, Familienmuseum, Weinguts-Mittagessen, Bootsfahrt & Weine"
    },
    "subtitle": {
      "pt": "Visita guiada exclusiva à histórica Quinta do Bucheiro e ao Museu da Família, almoço gastronómico servido na própria quinta, cruzeiro panorâmico de 1 hora pelo Douro e prova de vinhos.",
      "en": "Private guided visit to historic Quinta do Bucheiro and its Family Heritage Museum, authentic multi-course lunch served right on the estate, 1-hour scenic river cruise, and curated wine tasting.",
      "es": "Visita guiada exclusiva a la histórica Quinta do Bucheiro y al Museo de la Familia, almuerzo gastronómico en la propia finca, crucero panorámico de 1 hora por el río Duero y cata de vinos.",
      "fr": "Visite guidée exclusive de la prestigieuse Quinta do Bucheiro et de son Musée de Famille, déjeuner gastronomique servi sur la propriété, croisière panoramique d'une heure sur le Douro et dégustation.",
      "de": "Exklusive Führung auf der historischen Quinta do Bucheiro und im Familienmuseum, mehrgängiges Mittagessen direkt auf dem Weingut, 1-stündige Panorama-Bootsfahrt auf dem Douro und Weinverkostung."
    },
    "tagline": {
      "pt": "Quinta do Bucheiro · Museu da Família · Almoço na Quinta · Cruzeiro",
      "en": "Quinta do Bucheiro · Family Wine Museum · Estate Lunch · Cruise",
      "es": "Quinta do Bucheiro · Museo Familiar · Almuerzo en Finca · Crucero",
      "fr": "Quinta do Bucheiro · Musée de Famille · Déjeuner Domaine · Croisière",
      "de": "Quinta do Bucheiro · Familienmuseum · Weinguts-Lunch · Bootsfahrt"
    },
    "shortDesc": {
      "pt": "Descubra o Douro de forma privada, combinando a histórica Quinta do Bucheiro com museu familiar, almoço gastronómico na própria quinta, cruzeiro panorâmico e degustação de vinhos.",
      "en": "Experience the genuine soul of the Douro on an intimate private journey: tour historic Quinta do Bucheiro and its family museum, savor a homemade estate lunch, cruise the river, and taste fine wines.",
      "es": "Descubra el Duero de forma privada en la histórica Quinta do Bucheiro: museo familiar, almuerzo tradicional servido en la finca, crucero panorámico de 1 hora y cata de vinos.",
      "fr": "Vivez l'authenticité pure du Douro dans la prestigieuse Quinta do Bucheiro : musée de famille, déjeuner gastronomique au domaine, croisière d'une heure sur le fleuve et dégustation.",
      "de": "Erleben Sie das echte Douro-Tal auf der traditionsreichen Quinta do Bucheiro: privates Familienmuseum, authentisches Mittagessen auf dem Weingut, Schifffahrt und Weinprobe."
    },
    "fullDesc": {
      "pt": [
        "Viva um dia dedicado aos sabores mais puros, às paisagens deslumbrantes e às tradições seculares do Douro, numa experiência privada desenhada com o conforto de um serviço personalizado desde o Porto.",
        "A jornada começa com a recolha privada no seu hotel no Porto e uma viagem panorâmica confortável em direção ao coração do Vale do Douro. Ao chegar à histórica Quinta do Bucheiro, propriedade familiar com raízes profundas na vitivinicultura duriense, será recebido com hospitalidade genuína pelos anfitriões.",
        "A visita inclui um percurso guiado pela propriedade e pelo seu Museu da Família, um acervo privado com alfaias antigas, lagares de granito, documentos e memórias que revelam como gerações consecutivas viveram e moldaram a cultura do vinho no Douro. De seguida, desfrute de um memorável almoço gastronómico servido na própria quinta, onde receitas tradicionais de família são harmonizadas com os vinhos DOC produzidos na propriedade.",
        "À tarde, descemos até ao rio para um cruzeiro panorâmico de 1 hora pelo Rio Douro, apreciando as encostas cobertas de vinhedos em socalcos a partir da água. A experiência conclui-se com uma prova comentada de vinhos do Douro e do Porto antes do regresso confortável ao Porto ao final do dia."
      ],
      "en": [
        "Immerse yourself in the authentic winemaking heritage of the Douro Valley on a private day tour centered around genuine family hospitality and historical estate traditions.",
        "Depart from Porto in an executive vehicle, enjoying scenic vineyard vistas as you arrive in the Douro heartland. Be warmly welcomed at historic Quinta do Bucheiro, a multi-generational family-owned wine estate renowned for preserving Douro viticultural heritage.",
        "Begin with a private guided tour of the vineyards and the estate's private Family Museum, featuring antique stone lagares, traditional cooperage tools, and historic archives narrating generations of wine craft. Then, savor a leisurely multi-course homemade regional lunch served right on the estate, with dishes prepared from family recipes paired with estate-grown Douro DOC wines.",
        "In the afternoon, head down to the riverbank for a scenic 1-hour cruise on the Douro River, gazing up at the UNESCO terraced hillsides from the tranquil water. Conclude with a guided tasting of reserve Douro DOC and Port wines before relaxing on your private executive transfer back to Porto."
      ],
      "es": [
        "Una experiencia privada llena de encanto y tradición en la histórica Quinta do Bucheiro en el corazón del Duero.",
        "Salida desde Oporto hacia el valle vinícola para ser acogido en la finca familiar Quinta do Bucheiro. Recorrido guiado por sus viñedos y su singular Museo de la Familia, con lagares antiguos e instrumentos tradicionales de vinificación.",
        "Disfrute de un almuerzo gastronómico inolvidable servido en la propia finca con recetas tradicionales de la familia maridadas con vinos de la propiedad.",
        "Por la tarde realizamos un crucero panorámico de 1 hora por el río Duero para admirar los bancales desde el agua y culminamos con una cata comentada de vinos DOC Duero y Oporto antes del regreso a Oporto."
      ],
      "fr": [
        "Une journée privée d'authenticité et d'émotion au cœur du Douro, au sein de la prestigieuse Quinta do Bucheiro.",
        "Départ de Porto vers le domaine familial où vous êtes reçus en hôtes privilégiés. Visite guidée des vignes et du passionnant Musée de Famille abritant pressoirs en granit et outils viticoles ancestraux.",
        "Savourez un déjeuner gastronomique traditionnel servi au sein même du domaine, préparé selon des recettes familiales séculaires et accordé aux crus de la propriété.",
        "Embarquez ensuite pour une croisière panoramique d'une heure sur le fleuve Douro au pied des coteaux classés UNESCO et terminez par une dégustation commentée de vins du Douro et de Porto."
      ],
      "de": [
        "Erleben Sie die gelebte Geschichte des Douro-Tals auf der traditionsreichen Familien-Quinta do Bucheiro.",
        "Fahrt ab Porto im Executive-Fahrzeug direkt zum Weingut, wo Sie von den Eigentümern herzlich empfangen werden. Führung über das Gut und durch das private Familienmuseum mit historischen Steinlagares und altem Winzer-Werkzeug.",
        "Genießen Sie ein mehrgängiges Mittagessen direkt auf dem Weingut, zubereitet nach traditionellen Familienrezepten und harmonisch begleitet von den Weinen des Hauses.",
        "Am Nachmittag 1-stündige Schifffahrt auf dem Douro entlang der UNESCO-Weinterrassen, gefolgt von einer geführten Verkostung edler Douro- und Portweine vor der Rückfahrt."
      ]
    },
    "duration": {
      "pt": "9h30",
      "en": "9.5 hours",
      "es": "9,5 horas",
      "fr": "9h30",
      "de": "9,5 Stunden"
    },
    "highlights": {
      "pt": [
        "Tour 100% privado com recolha e regresso no hotel no Porto",
        "Visita guiada exclusiva à histórica Quinta do Bucheiro no Douro",
        "Entrada e visita ao Museu da Família da Quinta do Bucheiro",
        "Almoço gastronómico regional servido na própria quinta com vinhos da propriedade",
        "Cruzeiro panorâmico de 1 hora pelo Rio Douro entre as encostas vinícolas",
        "Prova comentada de vinhos DOC Douro e Vinho do Porto"
      ],
      "en": [
        "100% private journey with hotel pickup and drop-off in an executive vehicle",
        "Exclusive guided tour of the historic Quinta do Bucheiro in the Douro",
        "Admission and guided tour of the private Quinta do Bucheiro Family Museum",
        "Traditional multi-course homemade lunch served directly at the estate with paired wines",
        "Scenic 1-hour Douro River cruise admiring UNESCO vineyard terraces from the water",
        "Guided tasting of estate Douro DOC and Port wines"
      ],
      "es": [
        "Tour 100% privado con recogida y regreso al hotel en Oporto",
        "Visita guiada exclusiva a la histórica Quinta do Bucheiro en el Duero",
        "Entrada y recorrido por el Museo de la Familia de la finca",
        "Almuerzo gastronómico tradicional servido en la propia quinta con vinos locales",
        "Crucero panorámico de 1 hora por el río Duero entre bancales de viñedos",
        "Cata comentada de vinos DOC Duero y Oporto"
      ],
      "fr": [
        "Circuit 100% privé avec chauffeur dédié aller-retour depuis Porto",
        "Visite guidée exclusive de la prestigieuse Quinta do Bucheiro",
        "Visite guidée du Musée de Famille au cœur du domaine",
        "Déjeuner gastronomique fait maison servi au domaine avec vins de la propriété",
        "Croisière panoramique d'une heure sur le fleuve Douro au fil des terrasses",
        "Dégustation commentée de crus DOC Douro et vins de Porto"
      ],
      "de": [
        "100% private Tour mit persönlichem Hoteltransfer im Executive-Fahrzeug",
        "Exklusive Führung auf der historischen Quinta do Bucheiro",
        "Besuch des privaten Familien-Weinmuseums auf dem Gut",
        "Regionales Mittagessen direkt auf dem Weingut mit passenden Weinen des Hauses",
        "1-stündige Panorama-Schifffahrt auf dem Douro entlang der Weinberge",
        "Geführte Verkostung von Douro DOC- und Portweinen"
      ]
    },
    "included": {
      "pt": [
        "Transporte privado executivo de ida e volta a partir do Porto",
        "Motorista-guia dedicado durante toda a experiência",
        "Visita guiada à histórica Quinta do Bucheiro",
        "Visita guiada ao Museu da Família e antigas adegas",
        "Almoço gastronómico regional servido na quinta",
        "Harmonização de vinhos da propriedade durante o almoço",
        "Cruzeiro panorâmico de 1 hora pelo Rio Douro",
        "Prova comentada de vinhos do Douro e do Porto",
        "Água mineral a bordo durante todo o dia",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Round-trip executive private transportation from Porto",
        "Dedicated driver-guide throughout the day",
        "Guided private visit to historic Quinta do Bucheiro",
        "Guided tour of the Family Heritage Museum and historic cellars",
        "Multi-course regional gastronomic lunch served right at the estate",
        "Wine pairing with estate-grown wines during lunch",
        "1-hour scenic boat cruise on the Douro River",
        "Guided tasting of select Douro DOC and Port wines",
        "Bottled water on board throughout the journey",
        "Personal accident and civil liability insurance"
      ],
      "es": [
        "Transporte privado ejecutivo de ida y vuelta desde Oporto",
        "Chófer-guía dedicado durante toda la jornada",
        "Visita guiada a la histórica Quinta do Bucheiro",
        "Visita al Museo de la Familia y antiguas bodegas",
        "Almuerzo gastronómico regional servido en la propia finca",
        "Maridaje de vinos de la finca durante el almuerzo",
        "Crucero panorámico de 1 hora por el río Duero",
        "Cata comentada de vinos del Duero y Oporto",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Transport privé en véhicule exécutif aller-retour depuis Porto",
        "Chauffeur-guide dédié pendant toute la journée",
        "Visite guidée de la prestigieuse Quinta do Bucheiro",
        "Visite du Musée de Famille et des anciens chais",
        "Déjeuner gastronomique régional servi sur la propriété",
        "Accords mets-vins du domaine servis au déjeuner",
        "Croisière panoramique d'une heure sur le fleuve Douro",
        "Dégustation commentée de vins du Douro et de Porto",
        "Bouteilles d'eau minérale à bord et assurance complète"
      ],
      "de": [
        "Privater Executive-Transfer hin und zurück ab Porto",
        "Persönlicher Chauffeur-Guide den ganzen Tag an Ihrer Seite",
        "Führung über das historische Anwesen Quinta do Bucheiro",
        "Führung durch das Familien-Weinmuseum und historische Keller",
        "Mehrgängiges regionales Mittagessen direkt auf dem Weingut",
        "Weinbegleitung mit Weinen des Hauses zum Mittagessen",
        "1-stündige Panorama-Bootsfahrt auf dem Douro-Fluss",
        "Fachkundige Verkostung von Douro DOC- und Portweinen",
        "Mineralwasser an Bord und Versicherungsschutz"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 560
      },
      {
        "pax": 2,
        "price": 610
      },
      {
        "pax": 3,
        "price": 660
      },
      {
        "pax": 4,
        "price": 710
      },
      {
        "pax": 5,
        "price": 760
      },
      {
        "pax": 6,
        "price": 810
      },
      {
        "pax": 7,
        "price": 910
      },
      {
        "pax": 8,
        "price": 960
      }
    ],
    "startingPrice": 560,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/tours/north_016_quinta_do_bucheiro.jpg",
    "gallery": [
      "/images/tours/north_016_quinta_do_bucheiro.jpg",
      "/images/tours/north_016_bucheiro_courtyard.jpg",
      "/images/tours/north_016_bucheiro_cellar.jpg",
      "/images/douro_boat_tour_1771612994491.png"
    ],
    "boatBadge": {
      "pt": "Cruzeiro Panorâmico no Rio Douro",
      "en": "Scenic Douro River Cruise",
      "es": "Crucero Panorámico por el Río Duero",
      "fr": "Croisière Panoramique sur le Douro",
      "de": "Panorama-Bootsfahrt auf dem Douro"
    },
    "experienceBadge": {
      "pt": "Quinta do Bucheiro & Museu da Família",
      "en": "Quinta do Bucheiro & Family Museum",
      "es": "Quinta do Bucheiro y Museo Familiar",
      "fr": "Quinta do Bucheiro & Musée Familial",
      "de": "Quinta do Bucheiro & Familienmuseum"
    }
  },
  {
    "id": "douro-luxury-picnic",
    "code": "North-017",
    "category": "douro",
    "categoryLabel": {
      "pt": "Douro Valley",
      "en": "Douro Valley",
      "es": "Valle del Duero",
      "fr": "Vallée du Douro",
      "de": "Douro-Tal"
    },
    "name": {
      "pt": "Um Dia a Dois no Douro: Piquenique Romântico de Luxo nas Vinhas, Cruzeiro & Vinhos",
      "en": "Douro for Two: Luxury Romantic Vineyard Picnic, River Cruise & Wine Tasting",
      "es": "Un Día para Dos en el Duero: Picnic Romántico de Lujo entre Viñedos, Crucero y Vinos",
      "fr": "Le Douro à Deux : Pique-Nique Romantique de Luxe dans les Vignes, Croisière & Vins",
      "de": "Douro zu Zweit: Romantisches Luxus-Picknick in den Weinbergen, Bootsfahrt & Weine"
    },
    "subtitle": {
      "pt": "Piquenique privado de luxo montado no coração dos vinhedos com produtos locais requintados e vinhos durienses, cruzeiro panorâmico pelo Rio Douro e prova comentada de vinhos.",
      "en": "Private luxury picnic set exclusively among terraced vines with regional artisan delicacies and chilled wines, scenic 1-hour Douro River cruise, and guided reserve wine tasting.",
      "es": "Picnic privado de lujo entre bancales de viñedos con productos locales selectos y vinos del Duero, crucero panorámico de 1 hora y cata comentada en bodega.",
      "fr": "Pique-nique de luxe intime dressé au milieu des vignes avec mets du terroir et vins du domaine, croisière panoramique d'une heure sur le Douro et dégustation privée de grands crus.",
      "de": "Privates Luxus-Picknick inmitten der Weinterrassen mit regionalen Delikatessen und feinen Weinen, 1-stündige Schifffahrt auf dem Douro und geführte Weinprobe auf einem ausgewählten Weingut."
    },
    "tagline": {
      "pt": "Romance VIP no Douro · Piquenique nas Vinhas · Cruzeiro & Prova",
      "en": "Romantic Douro · Vineyard Picnic · River Cruise & Wine",
      "es": "Romance VIP en el Duero · Picnic en Viñedos · Crucero y Vinos",
      "fr": "Romance VIP Douro · Pique-Nique dans les Vignes · Croisière & Vins",
      "de": "Romantisches Douro-Tal · Luxus-Picknick · Bootsfahrt & Weinprobe"
    },
    "shortDesc": {
      "pt": "Escape ao Vale do Douro numa experiência privada e intimista que combina um piquenique de luxo montado no meio das vinhas, um cruzeiro relaxante pelo rio e prova comentada de vinhos.",
      "en": "Escape to the Douro Valley for an unforgettable romantic day: private luxury picnic set among panoramic vines, scenic 1-hour river cruise, and private reserve cellar wine tasting.",
      "es": "Escápese al Valle del Duero en una experiencia privada e intimista para dos: picnic de lujo entre viñedos con productos gourmet, crucero relajante por el río y cata de vinos.",
      "fr": "Évadez-vous en amoureux dans la Vallée du Douro : pique-nique de luxe intimiste dressé au cœur des vignes, croisière paisible sur le fleuve et dégustation privée de vins d'exception.",
      "de": "Entfliehen Sie zu zweit ins Douro-Tal: privates Luxus-Picknick inmitten malerischer Weinterrassen, entspannte Schifffahrt und exklusive Weinverkostung auf einem Weingut."
    },
    "fullDesc": {
      "pt": [
        "Descubra o Douro de uma forma serena, apaixonante e profundamente exclusiva, num dia especialmente desenhado para casais, aniversários de casamento, pedidos de namoro ou noivado, ou simplesmente momentos especiais a dois.",
        "A experiência começa com a recolha privada no seu hotel no Porto em veículo executivo com motorista dedicado. Durante a viagem, desfrute de um percurso panorâmico pelas estradas sinuosas do vale com vistas arrebatadoras sobre as encostas de vinhas e o espelho de água do rio.",
        "Ao chegar a uma vinícola histórica selecionada, é recebido para uma das experiências mais marcantes: um piquenique privado de luxo montado exclusivamente para vocês no meio das vinhas com vista panorâmica. O piquenique é decorado com toalhas de linho, almofadas confortáveis e serviço requintado, incluindo queijos artesanais nobres, presunto ibérico fatiado, pães rústicos, frutas frescas sazonais e garrafas de vinho DOC da própria quinta servidas à temperatura ideal.",
        "Depois do piquenique, siga em direção ao cais para um passeio de barco relaxante de aproximadamente uma hora pelo Rio Douro, contemplando a paisagem património mundial a partir das águas. Conclua com uma prova comentada de vinhos selecionados na vinícola antes do regresso relaxado ao Porto no final da tarde."
      ],
      "en": [
        "Experience the romance of the Douro Valley with an intimate, beautifully curated private day tour designed for couples, anniversaries, marriage proposals, or honeymoons.",
        "Depart from Porto in an executive vehicle with your dedicated private chauffeur. Enjoy a breathtaking scenic drive through the heart of the Douro wine country, admiring tiered vineyards sculpted into granite slopes.",
        "Arrive at a premier private wine estate where a luxury vineyard picnic has been curated exclusively for you among the vines. Relax on plush cushions and fine blankets while admiring 360-degree views of the valley. Savor artisanal Portuguese cheeses, cured Iberian ham, fresh crusty bread, seasonal fruits, and chilled estate DOC wines poured at your own relaxed pace.",
        "Following your picnic, head down to the river for a tranquil 1-hour cruise along the peaceful waters of the Douro. Complete the afternoon with a private cellar tour and guided wine tasting before your executive chauffeur whisks you back to Porto in time for the evening."
      ],
      "es": [
        "Una escapada romántica e inolvidable diseñada para parejas en el Valle del Duero.",
        "Salida desde Oporto en vehículo ejecutivo con chófer dedicado, recorriendo panorámicas espectaculares del valle vinícola.",
        "En una finca seleccionada, disfrute de un picnic de lujo privado montado entre las cepas de viñedo: manta, cojines, tabla de quesos nobles, jamón ibérico, fruta fresca y excelentes vinos de la propiedad.",
        "Posteriormente disfrutará de un crucero panorámico de 1 hora por las aguas del Duero y una cata comentada de vinos antes del regreso a Oporto."
      ],
      "fr": [
        "Une escapade romantique d'exception dans le décor féerique de la Vallée du Douro, idéale pour demandes en mariage, lunes de miel ou anniversaires.",
        "Voyagez dans le confort d'un véhicule exécutif avec chauffeur dédié à travers les paysages spectaculaires du Douro.",
        "Au cœur d'un domaine d'exception, découvrez votre pique-nique de luxe dressé privativement au milieu des vignes : nappe élégante, coussins confortables, fromages nobles, jambon ibérique, fruits frais et vins du domaine servis frais.",
        "Poursuivez par une croisière paisible d'une heure sur le Douro au fil des méandres, puis une visite et dégustation privée de grands crus avant de regagner Porto."
      ],
      "de": [
        "Ein unvergesslicher romantischer Tag zu zweit im malerischen Douro-Tal für Hochzeitsreisen, Heiratsanträge oder Jubiläen.",
        "Bequemer Transfer im Executive-Fahrzeug mit persönlichem Chauffeur entlang der spektakulären Panoramastraßen des Douro-Tals.",
        "Auf einem ausgewählten Weingut erwartet Sie ein privates Luxus-Picknick inmitten der Weinterrassen: edle Decken, bequeme Kissen, handwerklicher Käse, Schinken, frische Früchte und Weine des Hauses mit Panoramablick.",
        "Anschließend 1-stündige Schifffahrt auf den ruhigen Fluten des Douro und eine geführte Verkostung von Spitzenweinen vor der Rückfahrt nach Porto."
      ]
    },
    "duration": {
      "pt": "8 horas",
      "en": "8 hours",
      "es": "8 horas",
      "fr": "8 heures",
      "de": "8 Stunden"
    },
    "highlights": {
      "pt": [
        "Experiência 100% privada e romântica concebida para casais",
        "Transporte executivo com motorista dedicado a partir do Porto",
        "Percurso cénico panorâmico pelas paisagens do Douro",
        "Piquenique de luxo privado montado exclusivamente no meio das vinhas",
        "Produtos locais nobres, queijos, presunto e vinhos da quinta",
        "Cruzeiro panorâmico de 1 hora pelo Rio Douro e prova comentada de vinhos"
      ],
      "en": [
        "100% private and romantic signature experience curated for couples",
        "Executive private transportation with dedicated chauffeur from Porto",
        "Scenic panoramic drive through the heart of the Douro Valley",
        "Luxury private picnic set up exclusively for you among the vines",
        "Artisanal regional delicacies, cured meats, cheeses and estate wines",
        "1-hour scenic river cruise on the Douro and guided reserve wine tasting"
      ],
      "es": [
        "Experiencia 100% privada y romántica diseñada para parejas",
        "Transporte ejecutivo con chófer dedicado desde Oporto",
        "Recorrido panorámico por los miradores del Valle del Duero",
        "Picnic privado de lujo montado exclusivamente entre los viñedos",
        "Productos regionales selectos, quesos, ibéricos y vinos de la finca",
        "Crucero panorámico de 1 hora por el río Duero y cata comentada de vinos"
      ],
      "fr": [
        "Circuit 100% privé et romantique pensé sur-mesure pour les couples",
        "Transport exécutif avec chauffeur dédié aller-retour depuis Porto",
        "Parcours scénique au fil des plus beaux panoramas du Douro",
        "Pique-nique de luxe intime dressé au cœur même des vignobles",
        "Mets raffinés du terroir, fromages, charcuteries et vins de la propriété",
        "Croisière panoramique d'une heure sur le fleuve et dégustation privée"
      ],
      "de": [
        "100% private, romantische Tagestour speziell für Paare",
        "Fahrt im Executive-Fahrzeug mit persönlichem Chauffeur ab Porto",
        "Spektakuläre Panoramaroute durch das Douro-Tal",
        "Privates Luxus-Picknick exklusiv für Sie inmitten der Weinberge",
        "Regionale Köstlichkeiten, Käse, Schinken und Weine des Hauses",
        "1-stündige Schifffahrt auf dem Douro und geführte Weinverkostung"
      ]
    },
    "included": {
      "pt": [
        "Recolha e regresso porta a porta ao hotel no Porto",
        "Transporte executivo em veículo climatizado com motorista dedicado",
        "Montagem de piquenique de luxo privado no meio dos vinhedos",
        "Toalhas, almofadas, decoração e serviço exclusivo de piquenique",
        "Menu gourmet com queijos nobres, enchidos artesanais, pão e frutas",
        "Vinhos da quinta servidos durante o piquenique",
        "Passeio de barco panorâmico de 1 hora pelo Rio Douro",
        "Visita guiada à vinícola e prova comentada de vinhos",
        "Água mineral a bordo durante todo o percurso",
        "Seguro de acidentes pessoais e responsabilidade civil"
      ],
      "en": [
        "Door-to-door pickup and return at your Porto hotel or Airbnb",
        "Executive private transportation with dedicated chauffeur",
        "Private luxury picnic setup among hillside vineyard terraces",
        "Blankets, plush cushions, elegant decor, and private picnic service",
        "Gourmet menu with fine cheeses, cured Iberian meats, breads & fresh fruits",
        "Estate-produced wines served throughout the picnic",
        "1-hour scenic river cruise on the Douro River",
        "Guided winery cellar tour and reserve wine tasting",
        "Bottled water on board throughout the journey",
        "Comprehensive civil liability and personal accident insurance"
      ],
      "es": [
        "Recogida y regreso puerta a puerta en su hotel de Oporto",
        "Transporte ejecutivo climatizado con chófer dedicado",
        "Montaje de picnic de lujo privado en medio de los viñedos",
        "Mantas, cojines, ambientación elegante y servicio exclusivo",
        "Menú gourmet con quesos nobles, embutidos ibéricos, pan y fruta",
        "Vinos de la finca servidos durante el picnic",
        "Crucero panorámico de 1 hora por el río Duero",
        "Visita guiada a la bodega y cata comentada de vinos",
        "Agua mineral a bordo y seguro de responsabilidad civil"
      ],
      "fr": [
        "Prise en charge et retour à votre hébergement à Porto",
        "Transport exécutif privé avec chauffeur dédié",
        "Installation d'un pique-nique de luxe privé au cœur des vignes",
        "Nappes, coussins confortables, décor soigné et vaisselle fine",
        "Menu gourmet complet avec fromages affinés, charcuteries, pains et fruits",
        "Vins du domaine servis au pique-nique à température idéale",
        "Croisière panoramique d'une heure sur le fleuve Douro",
        "Visite guidée de la propriété et dégustation privée de vins",
        "Eau minérale fraîche à bord et assurance passagers"
      ],
      "de": [
        "Bequeme Hotelabholung und Rückfahrt in Porto",
        "Privattransfer im Executive-Fahrzeug mit persönlichem Chauffeur",
        "Aufbau eines exklusiven Luxus-Picknicks inmitten der Weinterrassen",
        "Decken, Kissen, stilvolles Geschirr und private Betreuung",
        "Gourmet-Auswahl an Käse, Schinken, Bauernbrot und frischen Früchten",
        "Weine des Weinguts zum Picknick serviert",
        "1-stündige Schifffahrt auf dem Douro-Fluss",
        "Führung auf dem Weingut mit geführter Weinverkostung",
        "Mineralwasser an Bord und umfassende Versicherung"
      ]
    },
    "pricingTiers": [
      {
        "pax": 1,
        "price": 620
      },
      {
        "pax": 2,
        "price": 670
      },
      {
        "pax": 3,
        "price": 720
      },
      {
        "pax": 4,
        "price": 770
      },
      {
        "pax": 5,
        "price": 820
      },
      {
        "pax": 6,
        "price": 870
      },
      {
        "pax": 7,
        "price": 970
      },
      {
        "pax": 8,
        "price": 1020
      }
    ],
    "startingPrice": 620,
    "gygVerified": true,
    "gygUrl": "https://www.getyourguide.com/pt-pt/north-scape-tours-lda-s716611/",
    "image": "/images/novo-picnic.jpg",
    "gallery": [
      "/images/novo-picnic.jpg",
      "/images/douro_boat_tour_1771612994491.png"
    ],
    "boatBadge": {
      "pt": "Cruzeiro Romântico no Rio Douro",
      "en": "Romantic Douro River Cruise",
      "es": "Crucero Romántico por el Río Duero",
      "fr": "Croisière Romantique sur le Douro",
      "de": "Romantische Bootsfahrt auf dem Douro"
    },
    "experienceBadge": {
      "pt": "Piquenique Privado de Luxo nas Vinhas",
      "en": "Private Luxury Vineyard Picnic",
      "es": "Picnic Privado de Lujo entre Viñedos",
      "fr": "Pique-Nique Privé de Luxe dans les Vignes",
      "de": "Privates Luxus-Picknick in den Weinbergen"
    }
  },

];

export function getTourBySlug(slug: string): TourItem | undefined {
  return ALL_17_TOURS.find((t) => t.id === slug);
}

export function getToursByCategory(cat: 'douro' | 'north' | 'porto' | 'all'): TourItem[] {
  if (cat === 'all') return ALL_17_TOURS;
  return ALL_17_TOURS.filter((t) => t.category === cat);
}
