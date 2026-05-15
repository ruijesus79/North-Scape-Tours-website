import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StarRating } from '../../utils/shared';

export default function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section id="avaliacoes" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <AmbientBg src={IMG.ambientRiver} opacity={0.04} position="center 50%" />
      <AmbientGlow color="rgba(251,191,36,0.04)" top="60%" left="20%" size={600} />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header row */}
        <Reveal className="mb-16 md:mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.reviews.badge}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.reviews.title} /></h2>
          <p className="text-white/40 font-light text-base sm:text-lg mb-8 max-w-xl mx-auto">{t.reviews.subtitle}</p>
        </Reveal>

        {/* Scrolling columns */}
        <div className="grid md:grid-cols-3 gap-6 h-[500px] md:h-[600px] overflow-hidden relative">
          {/* Gradient masks */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0c0c0c] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c0c] to-transparent z-20 pointer-events-none" />

          {/* Column 1 — slow */}
          <div className="overflow-hidden relative">
            <motion.div
              animate={{ translateY: '-50%' }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {t.reviews.items.slice(0, 3).map((review, i) => (
                    <div key={`${setIdx}-${i}`} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm">
                      <StarRating rating={review.stars} size={12} />
                      <p className="text-sm text-white/60 font-light leading-relaxed mb-4 font-serif italic">"{review.text}"</p>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{review.flag}</span>
                        <div>
                          <p className="text-xs font-medium">{review.author}</p>
                          <p className="text-[10px] text-white/30">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 2 — medium speed */}
          <div className="overflow-hidden relative hidden md:block">
            <motion.div
              animate={{ translateY: '-50%' }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {t.reviews.items.slice(3, 6).map((review, i) => (
                    <div key={`${setIdx}-${i}`} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm">
                      <StarRating rating={review.stars} size={12} />
                      <p className="text-sm text-white/60 font-light leading-relaxed mb-4 font-serif italic">"{review.text}"</p>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{review.flag}</span>
                        <div>
                          <p className="text-xs font-medium">{review.author}</p>
                          <p className="text-[10px] text-white/30">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 3 — fast */}
          <div className="overflow-hidden relative hidden md:block">
            <motion.div
              animate={{ translateY: '-50%' }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {t.reviews.items.slice(6, 9).map((review, i) => (
                    <div key={`${setIdx}-${i}`} className="p-6 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm">
                      <StarRating rating={review.stars} size={12} />
                      <p className="text-sm text-white/60 font-light leading-relaxed mb-4 font-serif italic">"{review.text}"</p>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{review.flag}</span>
                        <div>
                          <p className="text-xs font-medium">{review.author}</p>
                          <p className="text-[10px] text-white/30">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
