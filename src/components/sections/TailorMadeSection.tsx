import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientGlow } from '../../utils/shared';

export default function TailorMadeSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { t } = useLanguage();

  return (
    <section className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <AmbientGlow color="rgba(212,175,55,0.06)" top="40%" left="50%" size={800} />
      <AmbientGlow color="rgba(139,92,246,0.03)" top="70%" left="20%" size={500} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
              <img src={IMG.tailorMade} alt="Tailor-made experience" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]/20" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 font-medium">{t.tailorMade.collection}</span>
                <p className="text-sm text-white/60 font-light mt-2">{t.tailorMade.collectionDesc}</p>
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <Reveal>
              <span className="inline-block px-4 py-1.5 border border-amber-500/25 rounded-full text-[11px] tracking-[0.15em] uppercase text-amber-400/70 mb-6">{t.tailorMade.badge}</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 leading-[1.08]">
                <span className="text-gradient-animate">{t.tailorMade.title.split('.')[0]}.</span><br />
                <span className="italic text-white/60">{t.tailorMade.title.split('.').slice(1).join('.').trim()}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-lg text-white/50 font-light mb-6">{t.tailorMade.subtitle}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-white/40 font-light leading-relaxed mb-8">{t.tailorMade.desc}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-2 mb-10">
                {t.tailorMade.destinations.map((dest, i) => (
                  <span key={i} className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-white/50 font-light hover:border-amber-500/30 hover:text-amber-200/70 transition-all duration-300">
                    {dest}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <button onClick={() => scrollTo('contacto')} className="cta-glow border-beam btn-press cursor-pointer inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 transition-all duration-300">
                {t.tailorMade.cta} <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
