import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Check,
  Clock,
  Car,
  Shield,
  MessageCircle,
  Users,
  Award,
  Calendar,
  Sparkles,
  MapPin,
  ExternalLink,
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTourBySlug, ALL_17_TOURS, VIP_EXTRAS, type TourItem } from '../data/toursData';
import { WHATSAPP_NUMBER, GETYOURGUIDE_LINK } from '../content';
import SEO from '../components/SEO';

const UI_TEXT = {
  pt: {
    notFoundTitle: 'Tour Não Encontrado',
    notFoundDesc: 'O tour solicitado não foi encontrado ou o link pode ter sido alterado.',
    viewAllTours: 'Ver Todos os Tours Privados',
    backToAll: 'Voltar a Todos os Tours',
    privateBadge: '100% Tour Privado',
    pickupBadge: 'Recolha e Entrega no Hotel (Porto)',
    paxRange: 'Grupo Fechado de 1 a 8 Pessoas',
    freeCancellation: 'Cancelamento Gratuito até 48h',
    chauffeurTag: 'Viatura Executiva & Sommelier Guia',
    theExperience: 'A Experiência',
    tourHighlights: 'Destaques do Tour',
    whatIsIncluded: 'O Que Está Incluído',
    vipUpgrades: 'Upgrades VIP Disponíveis',
    customizeJourney: 'Personalize o Seu Dia Especial',
    vipIntro: 'Celebre aniversários, propostas de casamento ou momentos únicos adicionando serviços exclusivos:',
    totalPrice: 'Preço Total do Grupo',
    forPax: (pax: number) => `para ${pax} ${pax === 1 ? 'pessoa' : 'pessoas'}`,
    noShared: 'Sem grupos externos',
    selectPax: 'Selecione o Número de Pessoas (1 a 8):',
    paxUnit: (pax: number) => pax === 1 ? 'Pessoa' : 'Pessoas',
    privateVehicleNote: 'Veículo executivo privado de uso exclusivo para o seu grupo.',
    preferredDate: 'Data Pretendida (Opcional):',
    bookWhatsapp: 'Reservar via WhatsApp',
    alsoGyg: 'Disponível no GetYourGuide',
    freeCancelFooter: 'Cancelamento gratuito até 48h antes da partida',
    bestPriceFooter: 'Garantia do melhor preço com reserva direta NORTHÉ',
    licensedFooter: 'Empresa licenciada em Portugal · RNAAT 284/2026',
    detailedQuote: 'Pedido de Cotação Detalhado',
    detailedQuoteDesc: 'Preencha os seus dados e enviaremos a cotação pelo WhatsApp. Respondemos em menos de 2 horas.',
    sentSuccess: 'Pedido enviado pelo WhatsApp! A equipa NORTHÉ responde em breve.',
    namePlaceholder: 'O seu nome completo',
    emailPlaceholder: 'O seu e-mail de contacto',
    notesPlaceholder: 'Notas adicionais ou pedidos especiais...',
    sendViaWhatsapp: 'Enviar Pedido pelo WhatsApp',
    otherTours: 'Outras Experiências Privadas na Região',
    viewAllLink: 'Ver Todos (17) →',
    from: 'Desde',
    explore: 'Ver Tour',
    boatCruise: 'Barco Privado',
  },
  en: {
    notFoundTitle: 'Tour Not Found',
    notFoundDesc: 'The requested private tour could not be found or the link may have changed.',
    viewAllTours: 'View All Private Tours',
    backToAll: 'Back to All Tours',
    privateBadge: '100% Private Tour',
    pickupBadge: 'Hotel Pickup & Drop-off (Porto)',
    paxRange: 'Private Party of 1 to 8 Guests',
    freeCancellation: 'Free Cancellation up to 48h',
    chauffeurTag: 'Executive Vehicle & Wine Guide',
    theExperience: 'The Experience',
    tourHighlights: 'Tour Highlights',
    whatIsIncluded: 'What is Included',
    vipUpgrades: 'VIP Upgrades Available',
    customizeJourney: 'Customize Your Special Journey',
    vipIntro: 'Celebrate birthdays, proposals or milestone occasions by adding exclusive private services:',
    totalPrice: 'Total Group Price',
    forPax: (pax: number) => `for ${pax} ${pax === 1 ? 'guest' : 'guests'}`,
    noShared: 'No shared guests',
    selectPax: 'Select Party Size (1 to 8 Guests):',
    paxUnit: (pax: number) => pax === 1 ? 'Guest' : 'Guests',
    privateVehicleNote: 'Executive private vehicle exclusively reserved for your party.',
    preferredDate: 'Preferred Tour Date (Optional):',
    bookWhatsapp: 'Book via WhatsApp',
    alsoGyg: 'Also on GetYourGuide',
    freeCancelFooter: 'Free cancellation up to 48 hours prior to departure',
    bestPriceFooter: 'Best rate guarantee when booking direct with NORTHÉ',
    licensedFooter: 'Fully licensed in Portugal · RNAAT 284/2026',
    detailedQuote: 'Detailed Quote Request',
    detailedQuoteDesc: "Fill in your details and we'll send your quote via WhatsApp. We respond within 2 hours.",
    sentSuccess: 'Request sent via WhatsApp! The NORTHÉ team will reply shortly.',
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'Your email address',
    notesPlaceholder: 'Additional notes or special requests...',
    sendViaWhatsapp: 'Send Request via WhatsApp',
    otherTours: 'Other Private Journeys in this Region',
    viewAllLink: 'View All (17) →',
    from: 'From',
    explore: 'Explore',
    boatCruise: 'Private Boat',
  },
  es: {
    notFoundTitle: 'Tour No Encontrado',
    notFoundDesc: 'El tour privado solicitado no fue encontrado o el enlace ha cambiado.',
    viewAllTours: 'Ver Todos los Tours Privados',
    backToAll: 'Volver a Todos los Tours',
    privateBadge: '100% Tour Privado',
    pickupBadge: 'Recogida y Entrega en el Hotel (Oporto)',
    paxRange: 'Grupo Privado de 1 a 8 Personas',
    freeCancellation: 'Cancelación Gratuita hasta 48h',
    chauffeurTag: 'Vehículo Ejecutivo y Guía Sumiller',
    theExperience: 'La Experiencia',
    tourHighlights: 'Puntos Destacados del Tour',
    whatIsIncluded: 'Qué Está Incluido',
    vipUpgrades: 'Mejoras VIP Disponibles',
    customizeJourney: 'Personalice su Día Especial',
    vipIntro: 'Celebre aniversarios, propuestas de matrimonio o momentos únicos añadiendo servicios exclusivos:',
    totalPrice: 'Precio Total del Grupo',
    forPax: (pax: number) => `para ${pax} ${pax === 1 ? 'persona' : 'personas'}`,
    noShared: 'Sin grupos externos',
    selectPax: 'Seleccione el Número de Personas (1 a 8):',
    paxUnit: (pax: number) => pax === 1 ? 'Persona' : 'Personas',
    privateVehicleNote: 'Vehículo ejecutivo privado de uso exclusivo para su grupo.',
    preferredDate: 'Fecha Deseada (Opcional):',
    bookWhatsapp: 'Reservar por WhatsApp',
    alsoGyg: 'Disponible en GetYourGuide',
    freeCancelFooter: 'Cancelación gratuita hasta 48h antes de la salida',
    bestPriceFooter: 'Garantía de mejor tarifa reservando directamente con NORTHÉ',
    licensedFooter: 'Empresa licenciada en Portugal · RNAAT 284/2026',
    detailedQuote: 'Solicitud de Presupuesto Detallado',
    detailedQuoteDesc: 'Complete sus datos y le enviaremos la cotización por WhatsApp en menos de 2 horas.',
    sentSuccess: '¡Solicitud enviada por WhatsApp! El equipo de NORTHÉ responderá en breve.',
    namePlaceholder: 'Su nombre completo',
    emailPlaceholder: 'Su correo electrónico',
    notesPlaceholder: 'Peticiones especiales o notas...',
    sendViaWhatsapp: 'Enviar Solicitud por WhatsApp',
    otherTours: 'Otras Experiencias Privadas en la Región',
    viewAllLink: 'Ver Todos (17) →',
    from: 'Desde',
    explore: 'Ver Tour',
    boatCruise: 'Barco Privado',
  },
  fr: {
    notFoundTitle: 'Circuit Non Trouvé',
    notFoundDesc: 'Le circuit privé demandé est introuvable ou le lien a été modifié.',
    viewAllTours: 'Voir Tous les Circuits Privés',
    backToAll: 'Retour à Tous les Circuits',
    privateBadge: '100% Circuit Privé',
    pickupBadge: 'Prise en charge et retour hôtel (Porto)',
    paxRange: 'Groupe Privé de 1 à 8 Personnes',
    freeCancellation: "Annulation Gratuite jusqu'à 48h",
    chauffeurTag: 'Véhicule Exécutif & Guide Sommelier',
    theExperience: "L'Expérience",
    tourHighlights: 'Points Forts du Circuit',
    whatIsIncluded: 'Ce Qui Est Inclus',
    vipUpgrades: 'Surclassements VIP Disponibles',
    customizeJourney: "Personnalisez Votre Journée d'Exception",
    vipIntro: 'Célébrez anniversaires, demandes en mariage ou moments uniques avec nos prestations exclusives :',
    totalPrice: 'Prix Total du Groupe',
    forPax: (pax: number) => `pour ${pax} ${pax === 1 ? 'personne' : 'personnes'}`,
    noShared: 'Aucun partage de groupe',
    selectPax: 'Sélectionnez le Nombre de Personnes (1 à 8) :',
    paxUnit: (pax: number) => pax === 1 ? 'Personne' : 'Personnes',
    privateVehicleNote: 'Véhicule exécutif privé réservé exclusivement à votre groupe.',
    preferredDate: 'Date Souhaitée (Optionnel) :',
    bookWhatsapp: 'Réserver via WhatsApp',
    alsoGyg: 'Disponible sur GetYourGuide',
    freeCancelFooter: "Annulation gratuite jusqu'à 48h avant le départ",
    bestPriceFooter: 'Meilleur tarif garanti en réservant directement auprès de NORTHÉ',
    licensedFooter: 'Agence agréée au Portugal · RNAAT 284/2026',
    detailedQuote: 'Demande de Devis Détaillé',
    detailedQuoteDesc: 'Renseignez vos coordonnées, nous vous répondrons via WhatsApp sous 2 heures.',
    sentSuccess: "Demande envoyée via WhatsApp ! L'équipe NORTHÉ vous répond très vite.",
    namePlaceholder: 'Votre nom complet',
    emailPlaceholder: 'Votre adresse e-mail',
    notesPlaceholder: 'Demandes particulières ou questions...',
    sendViaWhatsapp: 'Envoyer la Demande via WhatsApp',
    otherTours: 'Autres Circuits Privés dans cette Région',
    viewAllLink: 'Voir Tous (17) →',
    from: 'À partir de',
    explore: 'Découvrir',
    boatCruise: 'Bateau Privé',
  },
  de: {
    notFoundTitle: 'Tour Nicht Gefunden',
    notFoundDesc: 'Die angeforderte private Tour wurde nicht gefunden oder der Link wurde geändert.',
    viewAllTours: 'Alle Privaten Touren Anzeigen',
    backToAll: 'Zurück zu Allen Touren',
    privateBadge: '100% Private Tour',
    pickupBadge: 'Hotelabholung & Rückfahrt (Porto)',
    paxRange: 'Private Gruppe von 1 bis 8 Personen',
    freeCancellation: 'Kostenlose Stornierung bis 48h',
    chauffeurTag: 'Executive-Fahrzeug & Weinguide',
    theExperience: 'Das Erlebnis',
    tourHighlights: 'Höhepunkte der Tour',
    whatIsIncluded: 'Was Enthalten Ist',
    vipUpgrades: 'Verfügbare VIP-Upgrades',
    customizeJourney: 'Gestalten Sie Ihren Besonderen Tag',
    vipIntro: 'Feiern Sie Jubiläen, Heiratsanträge oder besondere Anlässe mit exklusiven Zusatzleistungen:',
    totalPrice: 'Gesamtpreis der Gruppe',
    forPax: (pax: number) => `für ${pax} ${pax === 1 ? 'Person' : 'Personen'}`,
    noShared: 'Keine fremden Gäste',
    selectPax: 'Wählen Sie die Gruppengröße (1 bis 8 Personen):',
    paxUnit: (pax: number) => pax === 1 ? 'Person' : 'Personen',
    privateVehicleNote: 'Privates Executive-Fahrzeug exklusiv für Ihre Gruppe reserviert.',
    preferredDate: 'Wunschdatum (Optional):',
    bookWhatsapp: 'Über WhatsApp Buchen',
    alsoGyg: 'Auch auf GetYourGuide',
    freeCancelFooter: 'Kostenlose Stornierung bis zu 48 Stunden vor Abfahrt',
    bestPriceFooter: 'Bestpreisgarantie bei Direktbuchung über NORTHÉ',
    licensedFooter: 'Lizenziertes Touristik-Unternehmen in Portugal · RNAAT 284/2026',
    detailedQuote: 'Detaillierte Angebotsanfrage',
    detailedQuoteDesc: 'Geben Sie Ihre Daten ein und wir senden Ihnen Ihr Angebot per WhatsApp innerhalb von 2 Stunden.',
    sentSuccess: 'Anfrage über WhatsApp gesendet! Das NORTHÉ-Team antwortet in Kürze.',
    namePlaceholder: 'Ihr vollständiger Name',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    notesPlaceholder: 'Besondere Wünsche oder Fragen...',
    sendViaWhatsapp: 'Anfrage über WhatsApp Senden',
    otherTours: 'Weitere Private Erlebnisse in dieser Region',
    viewAllLink: 'Alle Anzeigen (17) →',
    from: 'Ab',
    explore: 'Tour Ansehen',
    boatCruise: 'Privates Boot',
  }
};

export default function TourPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const ui = UI_TEXT[lang as keyof typeof UI_TEXT] || UI_TEXT.en;

  const tour: TourItem | undefined = useMemo(() => {
    return slug ? getTourBySlug(slug) : undefined;
  }, [slug]);

  // Selected group size (1 to 8 people)
  const [selectedPax, setSelectedPax] = useState<number>(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [travelDate, setTravelDate] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [formSent, setFormSent] = useState<boolean>(false);

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl mb-4">{ui.notFoundTitle}</h1>
        <p className="text-white/60 mb-8 max-w-md">{ui.notFoundDesc}</p>
        <Link
          to="/#tours"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
        >
          {ui.viewAllTours}
        </Link>
      </div>
    );
  }

  // Localized texts helper across all 5 languages
  const tourName = tour.name[lang] || tour.name['en'] || tour.name.pt;
  const tourSubtitle = tour.subtitle[lang] || tour.subtitle['en'] || tour.subtitle.pt;
  const tourCategory = tour.categoryLabel[lang] || tour.categoryLabel['en'] || tour.categoryLabel.pt;
  const tourDuration = tour.duration[lang] || tour.duration['en'] || tour.duration.pt;
  const tourHighlights = tour.highlights[lang] || tour.highlights['en'] || tour.highlights.pt;
  const tourIncluded = tour.included[lang] || tour.included['en'] || tour.included.pt;
  const tourFullDesc = tour.fullDesc[lang] || tour.fullDesc['en'] || tour.fullDesc.pt;
  const boatBadge = tour.boatBadge ? (tour.boatBadge[lang] || tour.boatBadge['en'] || tour.boatBadge.pt) : undefined;
  const experienceBadge = tour.experienceBadge ? (tour.experienceBadge[lang] || tour.experienceBadge['en'] || tour.experienceBadge.pt) : undefined;

  // Calculate pricing based on selected Pax
  const tierPrice = tour.pricingTiers.find((tier) => tier.pax === selectedPax)?.price ?? tour.startingPrice;
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = VIP_EXTRAS.find((e) => e.id === id);
    return sum + (extra ? extra.price : 0);
  }, 0);
  const totalPrice = tierPrice + extrasTotal;

  // Toggle VIP extra
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // WhatsApp formatted inquiry message
  const extraNames = selectedExtras
    .map((id) => {
      const extra = VIP_EXTRAS.find((e) => e.id === id);
      return extra ? (extra.name[lang] || extra.name['en'] || extra.name.pt) : '';
    })
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Olá NORTHÉ! Gostaria de reservar o tour privado:

` +
    `• Tour: ${tour.code} - ${tourName}
` +
    `• Grupo: ${selectedPax} ${selectedPax === 1 ? 'pessoa' : 'pessoas'} (100% Privado)
` +
    `• Idioma do cliente: ${lang.toUpperCase()}
` +
    `• Valor estimado: €${totalPrice}
` +
    (extraNames ? `• Upgrades VIP selecionados: ${extraNames}
` : '') +
    (travelDate ? `• Data pretendida: ${travelDate}
` : '') +
    `
Poderiam confirmar a disponibilidade? Obrigado!`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formMessage =
      `Olá NORTHÉ! Tenho interesse no seguinte tour privado:

` +
      `• Tour: ${tour.code} - ${tourName}
` +
      `• Nome: ${guestName}
` +
      `• E-mail: ${guestEmail}
` +
      `• Nº Pessoas: ${selectedPax} pax (100% Privado)
` +
      `• Idioma: ${lang.toUpperCase()}
` +
      `• Valor Estimado: €${totalPrice}
` +
      (travelDate ? `• Data Preferencial: ${travelDate}
` : '') +
      (extraNames ? `• Upgrades VIP: ${extraNames}
` : '') +
      (guestNotes ? `• Notas / Pedidos Especiais: ${guestNotes}
` : '') +
      `
Poderiam confirmar disponibilidade e detalhes? Muito obrigado!`;
    const formWhatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(formMessage)}`;
    window.open(formWhatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSent(true);
  };

  // Related tours in same region
  const relatedTours = ALL_17_TOURS.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 pt-24 pb-20 overflow-x-hidden">
      <SEO
        title={`${tourName} | NORTHÉ Private Tours`}
        description={tour.shortDesc[lang] || tour.shortDesc['en'] || tour.shortDesc.pt}
        lang={lang}
      />

      {/* Top Breadcrumbs & Back */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link
          to="/#tours"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          {ui.backToAll}
        </Link>
        <div className="hidden sm:flex items-center gap-2 text-xs text-white/40">
          <span>NORTHÉ</span>
          <ChevronRight size={12} />
          <span>{tourCategory}</span>
          <ChevronRight size={12} />
          <span className="text-white/80 font-medium truncate max-w-[200px]">{tour.code}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-4 mb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 bg-white/10 text-amber-300 font-mono text-xs font-bold rounded-full border border-white/15">
            {tour.code}
          </span>
          <span className="px-3 py-1 bg-amber-500/15 text-amber-200 border border-amber-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full">
            {tourCategory}
          </span>
          <span className="px-3 py-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1.5">
            <Shield size={12} /> {ui.privateBadge}
          </span>
          {boatBadge && (
            <span className="px-3 py-1 bg-sky-500/15 text-sky-300 border border-sky-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1.5">
              <Sparkles size={12} /> {boatBadge}
            </span>
          )}
          {experienceBadge && (
            <span className="px-3 py-1 bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1.5">
              <Award size={12} /> {experienceBadge}
            </span>
          )}
          {tour.gygVerified && (
            <span className="px-3 py-1 bg-orange-500/15 text-orange-200 border border-orange-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1">
              <Award size={12} /> GetYourGuide Verified
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 text-balance">
          {tourName}
        </h1>
        <p className="text-lg sm:text-xl text-white/60 font-light max-w-3xl leading-relaxed mb-6">
          {tourSubtitle}
        </p>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/10 text-xs sm:text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-amber-400" />
            <span>{tourDuration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={16} className="text-amber-400" />
            <span>{ui.pickupBadge}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-amber-400" />
            <span>{ui.paxRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-green-400" />
            <span>{ui.freeCancellation}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Content (Left) + Booking Box (Right) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-14 items-start">
        {/* Left Column: Visuals & Rich Info */}
        <div className="space-y-10">
          {/* Main Photo Banner */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/10] border border-white/10 shadow-2xl">
            <img
              src={tour.image}
              alt={tourName}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/70">
              <span className="font-mono uppercase tracking-widest">{tour.code} · NORTHÉ Signature</span>
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                {ui.chauffeurTag}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {ui.theExperience}
            </h2>
            <div className="space-y-4 text-white/70 font-light leading-relaxed text-base sm:text-lg">
              {tourFullDesc.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {ui.tourHighlights}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tourHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/80 font-light">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {ui.whatIsIncluded}
            </h2>
            <div className="space-y-3.5">
              {tourIncluded.map((inc, i) => (
                <div key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-white/80 font-light">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Add-ons Upgrade */}
          <div className="bg-gradient-to-br from-white/[0.04] to-amber-500/[0.03] border border-amber-500/20 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>{ui.vipUpgrades}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-white">
              {ui.customizeJourney}
            </h2>
            <p className="text-sm text-white/60 font-light mb-6">
              {ui.vipIntro}
            </p>

            <div className="space-y-3">
              {VIP_EXTRAS.map((extra) => {
                const isChecked = selectedExtras.includes(extra.id);
                const extraName = extra.name[lang] || extra.name['en'] || extra.name.pt;
                const extraTagline = extra.tagline[lang] || extra.tagline['en'] || extra.tagline.pt;
                const extraDesc = extra.desc[lang] || extra.desc['en'] || extra.desc.pt;
                return (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                      isChecked
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-amber-400 bg-black/40 border-white/20 focus:ring-0 cursor-pointer"
                      />
                      <div>
                        <h4 className="font-medium text-white text-base">
                          {extraName}
                        </h4>
                        <p className="text-xs text-amber-300/80 mb-1 font-mono">
                          {extraTagline}
                        </p>
                        <p className="text-xs text-white/50 font-light leading-relaxed">
                          {extraDesc}
                        </p>
                      </div>
                    </div>
                    <span className="font-serif text-lg text-amber-300 whitespace-nowrap">
                      +€{extra.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Booking Calculator (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-28 space-y-6">
          <div className="bg-[#111111] border border-white/15 rounded-3xl p-7 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-0.5">
                  {ui.totalPrice}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl text-white">€{totalPrice}</span>
                  <span className="text-xs text-white/50">
                    {ui.forPax(selectedPax)}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-block">
                  {ui.privateBadge}
                </span>
                <p className="text-[10px] text-white/60 mt-1">
                  {ui.noShared}
                </p>
              </div>
            </div>

            {/* Interactive Group Size Selector (1 to 8 people) */}
            <div className="py-6 border-b border-white/10">
              <label className="text-xs uppercase tracking-widest text-white/60 font-medium block mb-3">
                {ui.selectPax}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((pax) => {
                  const isSelected = selectedPax === pax;
                  const paxTier = tour.pricingTiers.find((t) => t.pax === pax);
                  return (
                    <button
                      key={pax}
                      type="button"
                      onClick={() => setSelectedPax(pax)}
                      className={`cursor-pointer py-2.5 px-2 rounded-xl text-center transition-all duration-200 border ${
                        isSelected
                          ? 'bg-white text-black font-bold border-white shadow-lg scale-[1.02]'
                          : 'bg-white/[0.04] text-white/70 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="text-sm font-medium">{pax} {ui.paxUnit(pax)}</div>
                      {paxTier && (
                        <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-black/70 font-semibold' : 'text-amber-400/80'}`}>
                          €{paxTier.price}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-white/40 mt-3 flex items-center gap-1.5">
                <Check size={12} className="text-emerald-400" />
                {ui.privateVehicleNote}
              </p>
            </div>

            {/* Date Selection */}
            <div className="py-5 border-b border-white/10">
              <label className="text-xs uppercase tracking-widest text-white/60 font-medium block mb-2">
                {ui.preferredDate}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              {/* WhatsApp Direct CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)] cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>{ui.bookWhatsapp}</span>
              </a>

              {/* GetYourGuide Verified Option */}
              {tour.gygVerified && (
                <a
                  href={tour.gygUrl || GETYOURGUIDE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl border border-white/15 hover:border-orange-500/40 hover:bg-orange-500/[0.04] text-white/80 hover:text-white text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award size={15} className="text-orange-400" />
                  <span>{ui.alsoGyg}</span>
                  <ExternalLink size={13} className="opacity-50" />
                </a>
              )}
            </div>

            {/* Reassurance Footer */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-[11px] text-white/50">
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{ui.freeCancelFooter}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{ui.bestPriceFooter}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{ui.licensedFooter}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-sm">
            <h3 className="font-serif text-xl mb-1 text-white">
              {ui.detailedQuote}
            </h3>
            <p className="text-xs text-white/65 mb-5 font-light">
              {ui.detailedQuoteDesc}
            </p>

            {formSent ? (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 size={18} />
                <span>{ui.sentSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={ui.namePlaceholder}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={ui.emailPlaceholder}
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/50"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder={ui.notesPlaceholder}
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(16,185,129,0.25)]"
                >
                  <MessageCircle size={13} />
                  <span>{ui.sendViaWhatsapp}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Related Tours Section */}
      {relatedTours.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-amber-400/80 font-medium block mb-1">
                {tourCategory}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                {ui.otherTours}
              </h3>
            </div>
            <Link
              to="/#tours"
              className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-white transition-colors"
            >
              {ui.viewAllLink}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedTours.map((rel) => {
              const relName = rel.name[lang] || rel.name['en'] || rel.name.pt;
              const relSubtitle = rel.subtitle[lang] || rel.subtitle['en'] || rel.subtitle.pt;
              return (
                <Link
                  key={rel.id}
                  to={`/tours/${rel.id}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] border border-white/8 hover:border-amber-500/40 transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={rel.image}
                      alt={relName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-amber-300 border border-white/10">
                        {rel.code}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-serif text-lg text-white group-hover:text-amber-200 transition-colors mb-1 line-clamp-2">
                      {relName}
                    </h4>
                    <p className="text-xs text-white/50 font-light line-clamp-2 mb-4">
                      {relSubtitle}
                    </p>
                    <div className="mt-auto pt-3 border-t border-white/5 flex items-baseline justify-between">
                      <span className="text-[11px] text-white/40">
                        {ui.from} <strong className="font-serif text-base text-white">€{rel.startingPrice}</strong>
                      </span>
                      <span className="text-xs text-amber-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {ui.explore} →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
