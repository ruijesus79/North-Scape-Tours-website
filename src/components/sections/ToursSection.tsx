import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Search,
  Check,
  Clock,
  Car,
  Shield,
  MessageCircle,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ALL_17_TOURS, VIP_EXTRAS, type TourItem } from '../../data/toursData';
import { WHATSAPP_NUMBER, GETYOURGUIDE_LINK } from '../../content';
import { AmbientBg, AmbientGlow, Reveal, StaggerContainer, StaggerItem, TextReveal, IMG } from '../../utils/shared';

interface ToursSectionProps {
  scrollTo: (id: string) => void;
  initialCategory?: 'all' | 'douro' | 'north' | 'porto';
}

const SECTION_UI = {
  pt: {
    exclusiveBadge: '100% Tours Privados Exclusivos',
    title: 'Coleção de Tours Privados',
    subtitle: '17 experiências concebidas exclusivamente para grupos de 1 a 8 pessoas. Sem partilha com desconhecidos, em viaturas executivas e ao seu próprio ritmo.',
    allTab: 'Todos os Tours',
    searchPlaceholder: 'Pesquisar destino, vinhos, cruzeiro...',
    noMatch: 'Nenhum tour encontrado para esta pesquisa.',
    resetFilters: 'Limpar filtros',
    privateBadge: '100% Privado',
    pickup: 'Porto Pickup',
    paxNote: 'Viatura Privada (1-8 pax)',
    from: 'Desde',
    details: 'Ver Tour',
    whatsappQuick: 'WhatsApp',
    viewAllMobile: 'Ver Todos os 17 Tours Privados',
    showLessMobile: 'Mostrar Menos',
  },
  en: {
    exclusiveBadge: '100% Exclusive Private Tours',
    title: 'Private Tours Collection',
    subtitle: '17 signature journeys curated exclusively for private parties of 1 to 8 guests. No shared crowds, in executive vehicles with a dedicated wine-expert guide.',
    allTab: 'All Tours',
    searchPlaceholder: 'Search by destination, wine, cruise...',
    noMatch: 'No tours matched your search criteria.',
    resetFilters: 'Reset filters',
    privateBadge: '100% Private',
    pickup: 'Porto Pickup',
    paxNote: 'Private Vehicle (1-8 pax)',
    from: 'From',
    details: 'Explore',
    whatsappQuick: 'WhatsApp',
    viewAllMobile: 'View All 17 Private Tours',
    showLessMobile: 'Show Less',
  },
  es: {
    exclusiveBadge: '100% Tours Privados Exclusivos',
    title: 'Colección de Tours Privados',
    subtitle: '17 experiencias diseñadas exclusivamente para grupos de 1 a 8 personas. Sin compartir con desconocidos, en vehículos ejecutivos y a su propio ritmo.',
    allTab: 'Todos los Tours',
    searchPlaceholder: 'Buscar destino, vinos, crucero...',
    noMatch: 'No se encontraron tours para esta búsqueda.',
    resetFilters: 'Restablecer filtros',
    privateBadge: '100% Privado',
    pickup: 'Recogida Oporto',
    paxNote: 'Vehículo Privado (1-8 pax)',
    from: 'Desde',
    details: 'Ver Tour',
    whatsappQuick: 'WhatsApp',
    viewAllMobile: 'Ver Todos los 17 Tours Privados',
    showLessMobile: 'Mostrar Menos',
  },
  fr: {
    exclusiveBadge: '100% Circuits Privés Exclusifs',
    title: 'Collection de Circuits Privés',
    subtitle: '17 expériences conçues exclusivement pour des groupes privés de 1 à 8 personnes. Sans partage, en véhicules exécutifs et à votre propre rythme.',
    allTab: 'Tous les Circuits',
    searchPlaceholder: 'Rechercher destination, vins, croisière...',
    noMatch: 'Aucun circuit trouvé pour cette recherche.',
    resetFilters: 'Réinitialiser les filtres',
    privateBadge: '100% Privé',
    pickup: 'Prise en charge Porto',
    paxNote: 'Véhicule Privé (1-8 pax)',
    from: 'À partir de',
    details: 'Découvrir',
    whatsappQuick: 'WhatsApp',
    viewAllMobile: 'Voir Tous les 17 Circuits Privés',
    showLessMobile: 'Afficher Moins',
  },
  de: {
    exclusiveBadge: '100% Exklusive Private Touren',
    title: 'Kollektion Privater Touren',
    subtitle: '17 Erlebnisse exklusiv für geschlossene Gruppen von 1 bis 8 Personen. Keine fremden Gäste, in Executive-Fahrzeugen und in Ihrem eigenen Tempo.',
    allTab: 'Alle Touren',
    searchPlaceholder: 'Nach Ziel, Weinen oder Bootsfahrt suchen...',
    noMatch: 'Keine Touren für diese Suche gefunden.',
    resetFilters: 'Filter zurücksetzen',
    privateBadge: '100% Privat',
    pickup: 'Abholung Porto',
    paxNote: 'Privatfahrzeug (1-8 pax)',
    from: 'Ab',
    details: 'Tour Ansehen',
    whatsappQuick: 'WhatsApp',
    viewAllMobile: 'Alle 17 Privaten Touren Anzeigen',
    showLessMobile: 'Weniger Anzeigen',
  }
};

export default function ToursSection({ scrollTo, initialCategory = 'all' }: ToursSectionProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'douro' | 'north' | 'porto'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState(false);

  const ui = SECTION_UI[lang as keyof typeof SECTION_UI] || SECTION_UI.en;

  // Synchronize when initialCategory changes from outside navigation
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Listen to window custom event for menu category selection
  useEffect(() => {
    const handleCategorySelect = (e: CustomEvent<'all' | 'douro' | 'north' | 'porto'>) => {
      if (e.detail) {
        setActiveCategory(e.detail);
      }
    };
    window.addEventListener('northe_select_category' as any, handleCategorySelect as any);
    return () => window.removeEventListener('northe_select_category' as any, handleCategorySelect as any);
  }, []);

  // Category counts
  const counts = useMemo(() => {
    return {
      all: ALL_17_TOURS.length,
      douro: ALL_17_TOURS.filter((t) => t.category === 'douro').length,
      north: ALL_17_TOURS.filter((t) => t.category === 'north').length,
      porto: ALL_17_TOURS.filter((t) => t.category === 'porto').length,
    };
  }, []);

  // Filtered tours based on category and search query (multilingual search)
  const filteredTours = useMemo(() => {
    return ALL_17_TOURS.filter((tour) => {
      // Category filter
      if (activeCategory !== 'all' && tour.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const name = (tour.name[lang] || tour.name['en'] || tour.name.pt).toLowerCase();
      const subtitle = (tour.subtitle[lang] || tour.subtitle['en'] || tour.subtitle.pt).toLowerCase();
      const ptName = tour.name.pt.toLowerCase();
      const ptSubtitle = tour.subtitle.pt.toLowerCase();
      const code = tour.code.toLowerCase();
      return (
        name.includes(query) ||
        subtitle.includes(query) ||
        ptName.includes(query) ||
        ptSubtitle.includes(query) ||
        code.includes(query)
      );
    });
  }, [activeCategory, searchQuery, lang]);

  return (
    <section id="tours" className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      <AmbientBg src={IMG.ambientSunset} opacity={0.04} position="center 50%" />
      <AmbientGlow color="rgba(212,175,55,0.06)" top="20%" left="80%" size={700} />
      <AmbientGlow color="rgba(244,63,94,0.03)" top="70%" left="15%" size={600} />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <Reveal className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-amber-500/25 rounded-full text-[11px] tracking-[0.2em] uppercase text-amber-300/80 mb-4 bg-amber-500/[0.04]">
            <Shield size={12} className="text-amber-400" />
            <span>{ui.exclusiveBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight leading-[1.1]">
            <TextReveal text={ui.title} />
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed">
            {ui.subtitle}
          </p>
        </Reveal>

        {/* Categories Bar & Search Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {[
              { key: 'all', label: ui.allTab, count: counts.all },
              { key: 'douro', label: 'Douro Valley', count: counts.douro },
              { key: 'north', label: 'Northern Portugal', count: counts.north },
              { key: 'porto', label: 'Porto Experiences', count: counts.porto },
            ].map((tab) => {
              const isSelected = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveCategory(tab.key as any);
                    setShowAll(false);
                  }}
                  className={`cursor-pointer px-4 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-[0_4px_20px_rgba(255,255,255,0.15)] scale-[1.02]'
                      : 'bg-white/[0.03] text-white/60 border-white/10 hover:border-amber-500/30 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-black/15 text-black font-mono font-bold' : 'bg-white/10 text-white/40 font-mono'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px] max-w-md">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
            <input
              type="text"
              placeholder={ui.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Tours Cards Grid */}
        {filteredTours.length === 0 ? (
          <div className="text-center py-16 bg-white/[0.02] border border-white/8 rounded-3xl">
            <Compass size={32} className="mx-auto text-amber-400/60 mb-3" />
            <p className="text-white/60 text-sm">
              {ui.noMatch}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-amber-300 underline cursor-pointer"
            >
              {ui.resetFilters}
            </button>
          </div>
        ) : (
          <>
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {filteredTours.map((tour, tourIndex) => {
                // On mobile (controlled via state), hide cards beyond index 5 when showAll=false
                const isMobileHidden = !showAll && tourIndex >= 6;
                const tourName = tour.name[lang] || tour.name['en'] || tour.name.pt;
                const tourSubtitle = tour.subtitle[lang] || tour.subtitle['en'] || tour.subtitle.pt;
                const tourCategory = tour.categoryLabel[lang] || tour.categoryLabel['en'] || tour.categoryLabel.pt;
                const tourDuration = tour.duration[lang] || tour.duration['en'] || tour.duration.pt;
                const tourHighlights = tour.highlights[lang] || tour.highlights['en'] || tour.highlights.pt;
                const boatBadge = tour.boatBadge ? (tour.boatBadge[lang] || tour.boatBadge['en'] || tour.boatBadge.pt) : undefined;
                const experienceBadge = tour.experienceBadge ? (tour.experienceBadge[lang] || tour.experienceBadge['en'] || tour.experienceBadge.pt) : undefined;

                const quickMsg = `Olá NORTHÉ! Gostaria de saber mais sobre o tour privado: ${tour.code} - ${tourName} (${lang.toUpperCase()}).`;
                const quickWhatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(quickMsg)}`;

                return (
                  <motion.div
                    key={tour.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(tourIndex * 0.03, 0.2) }}
                    className={`group relative flex flex-col rounded-3xl overflow-hidden bg-white/[0.03] border border-white/8 backdrop-blur-sm hover:border-amber-500/40 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-500${isMobileHidden ? ' hidden md:flex' : ''}`}
                  >
                  {/* Photo Container */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tourName}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 bg-black/65 backdrop-blur-md rounded-full border border-white/15 text-amber-300">
                        {tour.code}
                      </span>
                      <span className="text-[10px] px-2.5 py-1 bg-emerald-500/20 text-emerald-300 backdrop-blur-md rounded-full border border-emerald-500/30 uppercase tracking-widest font-semibold flex items-center gap-1">
                        <Shield size={10} /> {ui.privateBadge}
                      </span>
                    </div>

                    {/* Bottom overlay in photo */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/70">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-amber-400" />
                        <span>{tourDuration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Car size={13} className="text-amber-400" />
                        <span>{ui.pickup}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400/80 font-medium">
                        {tourCategory}
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                      {tourName}
                    </h3>

                    {/* Rich Badges (Boat & Special Experience) */}
                    {(boatBadge || experienceBadge) && (
                      <div className="flex flex-wrap items-center gap-1.5 mb-3">
                        {boatBadge && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-200 border border-sky-500/30 inline-flex items-center gap-1 font-medium">
                            <Sparkles size={10} className="text-sky-300" /> {boatBadge}
                          </span>
                        )}
                        {experienceBadge && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-200 border border-purple-500/30 inline-flex items-center gap-1 font-medium">
                            <Award size={10} className="text-purple-300" /> {experienceBadge}
                          </span>
                        )}
                      </div>
                    )}

                    <p className="text-xs text-white/65 font-light leading-relaxed line-clamp-2 mb-6">
                      {tourSubtitle}
                    </p>

                    {/* Key Highlights preview */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5 flex-1">
                      {tourHighlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/70 font-light">
                          <Check size={13} className="text-amber-400/80 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing & Actions */}
                    <div className="pt-4 border-t border-white/8 mt-auto">
                      <div className="flex items-baseline justify-between mb-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-white/50 block">
                            {ui.paxNote}
                          </span>
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-xs text-white/60">{ui.from}</span>
                            <span className="font-serif text-2xl sm:text-3xl text-white font-normal">
                              €{tour.startingPrice}
                            </span>
                          </div>
                        </div>

                        {tour.gygVerified && (
                          <span className="text-[10px] text-orange-300 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Award size={10} /> GetYourGuide
                          </span>
                        )}
                      </div>

                      {/* CTAs: Details + Quick WhatsApp */}
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          to={`/tours/${tour.id}`}
                          className="w-full py-2.5 px-3 rounded-full bg-white text-black font-semibold text-xs text-center hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group/btn"
                        >
                          <span>{ui.details}</span>
                          <ArrowRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>

                        <a
                          href={quickWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-3 rounded-full bg-emerald-600/90 hover:bg-emerald-500 text-white font-medium text-xs text-center transition-all duration-300 flex items-center justify-center gap-1.5 border border-emerald-500/30"
                        >
                          <MessageCircle size={13} />
                          <span>{ui.whatsappQuick}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                );
              })}
            </motion.div>

            {/* Mobile "Show More" button if more than 6 tours exist */}
            {filteredTours.length > 6 && (
              <div className="mt-10 text-center md:hidden">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-widest border border-white/15 transition-all"
                >
                  {showAll ? ui.showLessMobile : `${ui.viewAllMobile} (${filteredTours.length})`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
