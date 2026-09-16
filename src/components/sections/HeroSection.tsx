import React, { lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MessageCircle, Shield, Car, Check, Star, Award } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import MagneticButton from '../MagneticButton';
import { IMG, Reveal, AmbientGlow } from '../../utils/shared';
import { WHATSAPP_LINK, GETYOURGUIDE_LINK } from '../../content';

// @ts-ignore
const LazyVantaFog = lazy(() => import('../VantaFog'));

/* ──────── Social Proof Trust Ticker ──────── */
function SocialProofBar({ lang }: { lang: string }) {
  const pt = lang === 'pt';
  const items = [
    {
      icon: <span className="text-[#00AF87] font-black text-xs">★</span>,
      label: pt ? 'TripAdvisor · Certificado de Excelência' : 'TripAdvisor · Certificate of Excellence',
      sub: '5.0 / 5.0',
    },
    {
      icon: <Award size={14} className="text-orange-400 flex-shrink-0" />,
      label: pt ? 'GetYourGuide · Top Rated' : 'GetYourGuide · Top Rated Partner',
      sub: pt ? '15 tours verificados' : '15 verified tours',
    },
    {
      icon: <Shield size={14} className="text-emerald-400 flex-shrink-0" />,
      label: pt ? 'Turismo de Portugal · Empresa Licenciada' : 'Tourism of Portugal · Licensed Operator',
      sub: 'RNAAT 284/2026',
    },
    {
      icon: <Star size={13} fill="#d4af37" className="text-[#d4af37] flex-shrink-0" />,
      label: pt ? '+1 200 Viajantes Satisfeitos' : '+1,200 Happy Travellers',
      sub: pt ? 'desde 2018' : 'since 2018',
    },
    {
      icon: <Check size={14} className="text-white/70 flex-shrink-0" />,
      label: pt ? 'Motorista-Guia Especialista em Vinhos' : 'Certified Wine-Expert Driver-Guide',
      sub: pt ? 'Fluente em PT · EN · ES · FR' : 'Fluent PT · EN · ES · FR',
    },
    {
      icon: <Car size={14} className="text-amber-400 flex-shrink-0" />,
      label: pt ? 'Frota Executiva Mercedes-Benz' : 'Executive Mercedes-Benz Fleet',
      sub: pt ? 'Ar condicionado · Wi-Fi · Água' : 'A/C · Wi-Fi · Water',
    },
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] border-y border-white/[0.07] py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

      <div
        className="flex items-center gap-10 w-max"
        style={{
          animation: 'social-proof-ticker 38s linear infinite',
        }}
      >
        {allItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[11px] text-white/75 font-medium whitespace-nowrap">{item.label}</span>
              <span className="text-[10px] text-amber-400/70 font-mono whitespace-nowrap">{item.sub}</span>
            </div>
            {/* Separator dot */}
            <span className="ml-4 text-white/15 text-lg flex-shrink-0">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}


export default function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <>
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-end pb-20 md:items-center md:pb-0 bg-[#0c0c0c]">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: 'easeOut' }} className="w-full h-full">
            <img src={IMG.hero} alt="Vista panorâmica dos socalcos e vinhas do Vale do Douro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0c0c0c]/95" />
        </motion.div>
        <Suspense fallback={null}><LazyVantaFog /></Suspense>
        <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 w-full md:text-center md:mt-12">
          {/* Main Headline - Refined Luxury Typography with Shimmering Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.14] mb-4 tracking-[-0.01em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
          >
            <span className="text-gradient-animate font-medium block">
              {t.hero.title1}
            </span>
            <span className="block mt-2 sm:mt-1.5 font-serif italic text-xl sm:text-2xl md:text-3xl text-amber-100/85 font-normal tracking-wide drop-shadow-md">
              {t.hero.title2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl md:mx-auto text-sm sm:text-base text-white/75 mb-8 font-light leading-relaxed drop-shadow-sm"
          >
            {t.hero.desc}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center gap-3.5 mb-7"
          >
            <MagneticButton
              onClick={() => scrollTo('tours')}
              className="cta-glow border-beam btn-press cursor-pointer px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(255,255,255,0.18)] hover:bg-white/95 transition-all"
            >
              <span className="flex items-center gap-2.5">
                {t.hero.cta} <ArrowRight size={16} />
              </span>
            </MagneticButton>
            <MagneticButton
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press cursor-pointer px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 hover:border-emerald-500/40 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <MessageCircle size={15} className="text-emerald-400" /> {t.hero.ctaWhatsapp}
              </span>
            </MagneticButton>
          </motion.div>

          {/* Reassurance Micro-Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] sm:text-xs text-white/60 font-light"
          >
            <span className="flex items-center gap-1.5">
              <Shield size={13} className="text-amber-400/90 flex-shrink-0" />
              {lang === 'pt' ? '100% Tours Privados (1 a 8 pax)' : '100% Private Tours (1 to 8 pax)'}
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Car size={13} className="text-amber-400/90 flex-shrink-0" />
              {lang === 'pt' ? 'Frota Executiva Mercedes-Benz' : 'Executive Mercedes-Benz Fleet'}
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-1.5">
              <Check size={13} className="text-emerald-400/90 flex-shrink-0" />
              {lang === 'pt' ? 'Cancelamento Gratuito até 48h' : 'Free Cancellation up to 48h'}
            </span>
          </motion.div>
        </div>
      </section>

      <SocialProofBar lang={lang} />

      {/* ═══════ QUOTE / POEM ═══════ */}
      <section className="relative py-32 md:py-48 px-6 mt-0 md:mt-10 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 15, ease: 'linear' }}
            viewport={{ once: true }}
            src={IMG.douroVineyard}
            alt="Douro Vinhateiro"
            className="w-full h-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0c0c0c]/80 md:bg-[#0c0c0c]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c] opacity-90" />
        </div>

        <AmbientGlow color="rgba(212,175,55,0.15)" top="50%" left="50%" size={800} />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <Reveal>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.25] mb-6 tracking-tight drop-shadow-xl text-balance">
              <span className="text-white/95">{t.quote.text1}</span><br />
              <span className="italic text-amber-200/80 font-normal">{t.quote.text2}</span>
            </h2>
            <div className="flex items-center justify-center gap-4 drop-shadow-md">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
              <p className="text-white/80 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium">
                {t.quote.author}
              </p>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
