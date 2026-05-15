import React, { lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import MagneticButton from '../MagneticButton';
import { IMG, Reveal, AmbientGlow } from '../../utils/shared';
import { WHATSAPP_LINK } from '../../content';

// @ts-ignore
const LazyVantaFog = lazy(() => import('../VantaFog'));

export default function HeroSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <>
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-end pb-24 md:items-center md:pb-0 bg-[#0c0c0c]">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: 'easeOut' }} className="w-full h-full">
            <img src={IMG.hero} alt="Vista panorâmica dos socalcos e vinhas do Vale do Douro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-[#0c0c0c]/90" />
        </motion.div>
        <Suspense fallback={null}><LazyVantaFog /></Suspense>
        <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 w-full md:text-center md:mt-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="inline-block mb-5 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/50">
            {t.hero.subtitle}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] mb-6 tracking-tight">
            <span className="text-gradient-animate">{t.hero.title1}</span><br />
            <span className="italic text-white/60">{t.hero.title2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl md:mx-auto text-base sm:text-lg text-white/40 mb-10 font-light leading-relaxed">
            {t.hero.desc}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center gap-3 mb-8">
            <MagneticButton onClick={() => scrollTo('tours')} className="cta-glow border-beam btn-press cursor-pointer px-7 py-3.5 rounded-full bg-white text-black font-medium">
              <span className="flex items-center gap-3">{t.hero.cta} <ArrowRight size={18} /></span>
            </MagneticButton>
            <MagneticButton href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-press cursor-pointer px-6 py-3.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300">
              <span className="flex items-center gap-2"><MessageCircle size={16} /> {t.hero.ctaWhatsapp}</span>
            </MagneticButton>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className="text-[11px] text-white/20 tracking-wide">{t.hero.trustLine}</motion.p>
        </div>
      </section>

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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] mb-8 tracking-tight drop-shadow-2xl">
              <span className="text-gradient-animate">{t.quote.text1}</span><br />
              <span className="italic text-white/60">{t.quote.text2}</span>
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
