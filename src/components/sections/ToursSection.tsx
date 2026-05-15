import React from 'react';
import { ArrowRight, Heart, Check, Users, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StaggerContainer, StaggerItem } from '../../utils/shared';
import { WHATSAPP_LINK } from '../../content';

export default function ToursSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useLanguage();

  return (
    <section id="tours" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <AmbientBg src={IMG.ambientSunset} opacity={0.05} position="center 50%" />
      <AmbientGlow color="rgba(251,191,36,0.05)" top="25%" left="75%" size={600} />
      <AmbientGlow color="rgba(244,63,94,0.03)" top="75%" left="20%" size={500} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal className="mb-12 md:mb-14 max-w-2xl">
          <span className="inline-block px-4 py-1.5 border border-amber-500/25 rounded-full text-[11px] tracking-[0.15em] uppercase text-amber-400/70 mb-5">{t.tours.badge}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.tours.title} /></h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">{t.tours.subtitle}</p>
        </Reveal>

        {/* Discount banner */}
        <Reveal className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 backdrop-blur-sm">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/15 text-amber-300">
              <Heart size={14} />
            </span>
            <p className="text-sm sm:text-base text-amber-100/90 font-light">
              {t.tours.discount}
            </p>
          </div>
        </Reveal>

        {/* Pricing cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.tours.items.map((tour, i) => {
            const fallbackImages = [IMG.lunch, IMG.romantic, IMG.boatRide];
            const tourImage = ('image' in tour && tour.image) ? tour.image : (fallbackImages[i] ?? IMG.boatRide);
            const isPerPerson = 'perPerson' in tour;
            return (
              <StaggerItem key={tour.id} className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/8 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-500">
                <div className="relative h-52 overflow-hidden">
                  <img src={tourImage} alt={tour.name} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/15 uppercase tracking-[0.15em] text-white/80">
                      {tour.tagline}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl mb-1">{tour.name}</h3>
                  {'subtitle' in tour && tour.subtitle && (
                    <p className="text-sm text-amber-300/70 font-light italic mb-4">{tour.subtitle}</p>
                  )}
                  {!('subtitle' in tour) && <div className="mb-4" />}

                  <ul className="space-y-2.5 mb-6">
                    {tour.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-white/60 font-light leading-relaxed">
                        <Check size={14} className="text-amber-400/70 mt-1 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/8 pt-5 space-y-2.5 mb-5">
                    {isPerPerson ? (
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs uppercase tracking-[0.15em] text-white/45">{t.tours.labels.perPersonLabel}</span>
                        <span className="font-serif text-2xl text-white">{tour.perPerson}€</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs uppercase tracking-[0.15em] text-white/45">{t.tours.labels.private}</span>
                          <span className="font-serif text-xl text-white">{tour.pricePrivate}€</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs uppercase tracking-[0.15em] text-white/45">{t.tours.labels.shared}</span>
                          <span className="font-serif text-xl text-white/85">{tour.priceShared}€</span>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <span className="text-xs uppercase tracking-[0.15em] text-white/45">{t.tours.labels.extra}</span>
                          <span className="font-serif text-xl text-white/85">{tour.priceExtra}€</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
                    <Users size={13} className="text-white/35" />
                    <span className="font-light">{tour.capacityLabel}</span>
                  </div>

                  <div className="mt-auto flex flex-col gap-2">
                    <button onClick={() => scrollTo('contacto')} className="cta-glow cursor-pointer flex items-center justify-center gap-2 px-5 py-3 bg-white text-black rounded-full font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 transition-all duration-300">
                      {t.tours.labels.book} <ArrowRight size={14} />
                    </button>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center gap-2 px-5 py-3 border border-white/15 rounded-full text-sm text-white/55 hover:text-white hover:bg-white/5 transition-all duration-300">
                      <MessageCircle size={13} /> {t.tours.labels.whatsapp}
                    </a>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
