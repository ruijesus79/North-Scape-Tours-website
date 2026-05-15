import React, { lazy, Suspense } from 'react';
import { Car, Shield, Users, Check, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StaggerContainer, StaggerItem } from '../../utils/shared';
import ScrollRevealText from '../ScrollRevealText';
import { WHATSAPP_LINK } from '../../content';

// @ts-ignore
const LazyVantaWaves = lazy(() => import('../VantaWaves'));

export default function TransferSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useLanguage();

  return (
    <section id="transfer" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#0a0a00]">
      <Suspense fallback={null}><LazyVantaWaves /></Suspense>
      <AmbientBg src={IMG.ambientBarrels} opacity={0.04} position="center bottom" />
      <AmbientGlow color="rgba(59,130,246,0.03)" top="40%" left="80%" size={500} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <span className="inline-block px-4 py-1.5 border border-white/15 rounded-full text-[11px] tracking-[0.15em] uppercase text-white/35 mb-5">{t.transfer.badge}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.transfer.title} /></h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">{t.transfer.subtitle}</p>
        </Reveal>
        <div className="mb-10 max-w-2xl px-2">
          <ScrollRevealText text={t.transfer.intro} className="text-white/80 font-light text-base sm:text-lg leading-relaxed" />
        </div>

        <Reveal className="relative rounded-2xl overflow-hidden mb-14 md:mb-20">
          <img src={IMG.transfer} alt="Executive Transfer in Portugal" className="w-full h-72 sm:h-80 md:h-[30rem] object-cover object-[center_65%] transition-transform duration-[2s] ease-out hover:scale-105" referrerPolicy="no-referrer" loading="lazy" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0c0c0c] to-transparent pointer-events-none z-20" />
        </Reveal>

        <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-14">
          {t.transfer.features.map((feat, i) => (
            <StaggerItem key={i} className="card-lift bg-white/[0.03] border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2.5 mb-5">{[<Shield key="s" size={18} className="text-white/25" />, <Car key="c" size={18} className="text-white/25" />, <Users key="u" size={18} className="text-white/25" />][i]}<h3 className="font-serif text-base sm:text-lg">{feat.title}</h3></div>
              <ul className="space-y-2.5">{feat.items.map((item, j) => (<li key={j} className="flex items-start gap-2 text-sm text-white/35 font-light"><Check size={14} className="text-green-400/60 mt-0.5 flex-shrink-0" />{item}</li>))}</ul>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-14">
          {t.transfer.services.map((svc, i) => (
            <StaggerItem key={i} className="card-lift bg-white/[0.03] border border-white/5 rounded-2xl p-6 backdrop-blur-sm"><h3 className="font-serif text-base sm:text-lg mb-3">{svc.title}</h3><p className="text-sm text-white/35 font-light">{svc.desc}</p></StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="text-center">
          <div className="flex items-baseline justify-center gap-2 mb-8"><span className="text-2xl sm:text-3xl font-serif">{t.transfer.priceLabel} {t.transfer.price}€</span><span className="text-xs sm:text-sm uppercase tracking-wider text-white/60">/ {t.transfer.priceUnit.replace('€/', '')}</span></div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={() => scrollTo('contacto')} className="cta-glow border-beam btn-press cursor-pointer flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-medium text-sm"><Car size={14} /> {t.transfer.ctaBook}</button>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-press cursor-pointer flex items-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"><MessageCircle size={14} /> {t.transfer.ctaWhatsapp}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
