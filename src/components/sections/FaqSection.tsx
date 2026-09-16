import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal } from '../../utils/shared';
import { WHATSAPP_LINK } from '../../content';

export default function FaqSection() {
  const { lang, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0); // Open first by default for immediate preview

  const isPt = lang === 'pt';

  return (
    <section id="faq" className="py-28 md:py-36 px-6 relative overflow-hidden bg-[#0c0c0c]">
      <AmbientBg src={IMG.ambientBarrels} opacity={0.03} position="center" />
      <AmbientGlow color="rgba(212,175,55,0.05)" top="40%" left="70%" size={600} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
            <HelpCircle size={13} className="text-amber-400" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-300 font-semibold">{t.faq.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <TextReveal text={t.faq.title} />
          </h2>
          {(t.faq as any).subtitle && (
            <p className="text-white/65 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {(t.faq as any).subtitle}
            </p>
          )}
        </Reveal>

        <div className="space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-sm ${
                    isOpen
                      ? 'bg-white/[0.05] border-amber-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                      : 'bg-white/[0.02] border-white/8 hover:border-amber-500/30 hover:bg-white/[0.035]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="cursor-pointer w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base leading-snug transition-colors duration-200 ${
                        isOpen ? 'text-white font-medium' : 'text-white/85 hover:text-white font-light'
                      }`}
                    >
                      {item.q}
                    </span>
                    <div
                      className={`flex items-center justify-center size-8 rounded-full border transition-all duration-300 flex-shrink-0 ${
                        isOpen
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 rotate-180'
                          : 'border-white/10 bg-white/[0.03] text-white/50'
                      }`}
                    >
                      <ChevronDown size={15} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5">
                          <p className="text-white/80 font-light leading-relaxed text-sm sm:text-[15px]">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* ─── Bottom WhatsApp Direct Help Card ─── */}
        <Reveal delay={0.3} className="mt-14">
          <div className="relative rounded-3xl overflow-hidden p-7 sm:p-8 bg-gradient-to-br from-white/[0.04] to-amber-500/[0.04] border border-amber-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                {isPt ? 'Atendimento Personalizado' : 'Personalized Assistance'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                {isPt ? 'Ficou com alguma dúvida sobre o seu grupo?' : 'Have a specific question about your group?'}
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-light max-w-xl">
                {isPt
                  ? 'Fale diretamente com o nosso especialista pelo WhatsApp e receba recomendações à medida em tempo real.'
                  : 'Chat directly with our wine travel specialist on WhatsApp and receive bespoke advice in real time.'}
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 cursor-pointer inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300"
            >
              <MessageCircle size={17} />
              <span>{isPt ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

