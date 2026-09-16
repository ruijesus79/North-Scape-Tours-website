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

export default function ToursSection({ scrollTo, initialCategory = 'all' }: ToursSectionProps) {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'douro' | 'north' | 'porto'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState(false);

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

  const lKey = lang === 'pt' ? 'pt' : 'en';

  // Category counts
  const counts = useMemo(() => {
    return {
      all: ALL_17_TOURS.length,
      douro: ALL_17_TOURS.filter((t) => t.category === 'douro').length,
      north: ALL_17_TOURS.filter((t) => t.category === 'north').length,
      porto: ALL_17_TOURS.filter((t) => t.category === 'porto').length,
    };
  }, []);

  // Filtered tours based on category and search query
  const filteredTours = useMemo(() => {
    return ALL_17_TOURS.filter((tour) => {
      // Category filter
      if (activeCategory !== 'all' && tour.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      const name = (tour.name[lKey] || tour.name.pt).toLowerCase();
      const subtitle = (tour.subtitle[lKey] || tour.subtitle.pt).toLowerCase();
      const code = tour.code.toLowerCase();
      return name.includes(query) || subtitle.includes(query) || code.includes(query);
    });
  }, [activeCategory, searchQuery, lKey]);

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
            <span>{lang === 'pt' ? '100% Tours Privados Exclusivos' : '100% Exclusive Private Tours'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight leading-[1.1]">
            <TextReveal text={lang === 'pt' ? 'Coleção de Tours Privados' : 'Private Tours Collection'} />
          </h2>
          <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed">
            {lang === 'pt'
              ? '17 experiências concebidas exclusivamente para grupos de 1 a 8 pessoas. Sem partilha com desconhecidos, em viaturas executivas e ao seu próprio ritmo.'
              : '17 signature journeys curated exclusively for private parties of 1 to 8 guests. No shared crowds, in executive vehicles with a dedicated wine-expert guide.'}
          </p>
        </Reveal>

        {/* Categories Bar & Search Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {[
              { key: 'all', label: lang === 'pt' ? 'Todos os Tours' : 'All Tours', count: counts.all },
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
              placeholder={lang === 'pt' ? 'Pesquisar destino, vinhos, cruzeiro...' : 'Search by destination, wine, cruise...'}
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
              {lang === 'pt' ? 'Nenhum tour encontrado para esta pesquisa.' : 'No tours matched your search criteria.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-semibold text-amber-300 underline cursor-pointer"
            >
              {lang === 'pt' ? 'Limpar filtros' : 'Reset filters'}
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
                const tourName = tour.name[lKey] || tour.name.pt;
                const tourSubtitle = tour.subtitle[lKey] || tour.subtitle.pt;
                const tourDuration = tour.duration[lKey] || tour.duration.pt;

                const quickMsg = `Olá NORTHÉ! Gostaria de saber mais sobre o tour privado: ${tour.code} - ${tourName}.`;
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
                        <Shield size={10} /> {lang === 'pt' ? '100% Privado' : 'Private'}
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
                        <span>Porto Pickup</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-amber-400/80 font-medium mb-1.5">
                      {tour.categoryLabel[lKey] || tour.categoryLabel.pt}
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                      {tourName}
                    </h3>

                    <p className="text-xs text-white/65 font-light leading-relaxed line-clamp-2 mb-6">
                      {tourSubtitle}
                    </p>

                    {/* Key Highlights preview */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5 flex-1">
                      {(tour.highlights[lKey] || tour.highlights.pt).slice(0, 3).map((hl, idx) => (
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
                            {lang === 'pt' ? 'Viatura Privada (1-8 pax)' : 'Private Vehicle (1-8 pax)'}
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs text-white/65">
                              {lang === 'pt' ? 'A partir de' : 'From'}{' '}
                              <strong className="font-serif text-2xl text-white">€{tour.startingPrice}</strong>
                            </span>
                          </div>
                          <span className="text-[10px] text-amber-400/60 font-mono">
                            {lang === 'pt'
                              ? `≈ €${Math.ceil(tour.startingPrice / 8)}/pessoa (8 pax)`
                              : `≈ €${Math.ceil(tour.startingPrice / 8)}/person (8 pax)`}
                          </span>
                        </div>
                        {tour.gygVerified && (
                          <span className="text-[10px] px-2 py-0.5 bg-orange-500/15 text-orange-300 border border-orange-500/25 rounded-full flex items-center gap-1">
                            <Award size={11} /> GetYourGuide
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <Link
                          to={`/tours/${tour.id}`}
                          className="w-full py-3 px-3 rounded-xl bg-white text-black font-semibold text-xs text-center hover:bg-white/90 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span>{lang === 'pt' ? 'Ver Tour' : 'View Tour'}</span>
                          <ArrowRight size={13} />
                        </Link>
                        <a
                          href={quickWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-3 rounded-xl border border-white/15 hover:border-emerald-500/40 hover:bg-emerald-500/10 text-white/80 hover:text-white text-xs font-medium text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <MessageCircle size={14} className="text-emerald-400" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                );
              })}
            </motion.div>

          {/* Mobile "Show more" button — only visible on mobile when not all cards are shown */}
          {filteredTours.length > 6 && !showAll && (
            <div className="mt-10 flex justify-center md:hidden">
              <button
                onClick={() => setShowAll(true)}
                className="cursor-pointer px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 hover:border-amber-500/40 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2.5"
              >
                <span>
                  {lang === 'pt'
                    ? `Ver mais ${filteredTours.length - 6} tours →`
                    : `Show ${filteredTours.length - 6} more tours →`}
                </span>
              </button>
            </div>
          )}
          </>
        )}

        {/* ═══════ VIP EXTRAS & BESPOKE UPGRADES ═══════ */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <Reveal className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-amber-500/25 rounded-full text-[11px] tracking-[0.2em] uppercase text-amber-300/80 mb-3 bg-amber-500/[0.04]">
              <Sparkles size={12} className="text-amber-400" />
              <span>{lang === 'pt' ? 'Upgrades Exclusivos' : 'Bespoke VIP Upgrades'}</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-3">
              {lang === 'pt' ? 'Personalize o Seu Tour Privado' : 'Elevate Your Private Experience'}
            </h3>
            <p className="text-sm sm:text-base text-white/50 font-light leading-relaxed">
              {lang === 'pt'
                ? 'Para ocasiões marcantes, luas-de-mel, aniversários ou pedidos de casamento, a NORTHÉ disponibiliza serviços VIP dedicados para tornar o seu dia inesquecível:'
                : 'For milestone moments, honeymoons, birthdays or marriage proposals, NORTHÉ provides dedicated VIP enhancements to elevate your day:'}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {VIP_EXTRAS.map((extra) => (
              <div
                key={extra.id}
                className="bg-white/[0.02] border border-white/8 hover:border-amber-500/30 rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-300 flex items-center justify-center mb-5 border border-amber-500/20">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="font-serif text-xl text-white mb-1.5">
                    {extra.name[lKey] || extra.name.pt}
                  </h4>
                  <p className="text-xs text-amber-300/80 font-mono mb-3">
                    {extra.tagline[lKey] || extra.tagline.pt}
                  </p>
                  <p className="text-xs text-white/55 font-light leading-relaxed mb-6">
                    {extra.desc[lKey] || extra.desc.pt}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-white/40">
                    {lang === 'pt' ? 'Adicional desde' : 'Upgrade from'}
                  </span>
                  <span className="font-serif text-xl text-amber-300">+€{extra.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
