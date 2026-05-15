import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal } from '../../utils/shared';

export default function FaqSection() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-28 md:py-36 px-6 relative overflow-hidden">
      <AmbientBg src={IMG.ambientBarrels} opacity={0.03} position="center" />
      <AmbientGlow color="rgba(139,92,246,0.03)" top="50%" left="70%" size={500} />
      <div className="relative z-10 max-w-3xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.faq.badge}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl"><TextReveal text={t.faq.title} /></h2>
        </Reveal>
        <div className="space-y-1.5">
          {t.faq.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="cursor-pointer w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.03] transition-colors duration-300">
                  <span className="font-light text-sm sm:text-base text-white/70">{item.q}</span>
                  <ChevronDown size={16} className={`flex-shrink-0 text-white/20 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/35 font-light leading-relaxed text-sm">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
