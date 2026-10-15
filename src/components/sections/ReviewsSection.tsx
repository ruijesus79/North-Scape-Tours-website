import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GOOGLE_REVIEWS_LINK } from '../../content';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StarRating } from '../../utils/shared';

const GoogleGIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`flex-shrink-0 ${className}`} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export default function ReviewsSection() {
  const { t } = useLanguage();
  const [pausedCol, setPausedCol] = useState<number | null>(null);

  const reviewsList = t.reviews.items || [];
  const col1 = reviewsList.slice(0, 3);
  const col2 = reviewsList.slice(3, 6);
  const col3 = reviewsList.slice(6, 9);

  const renderCard = (review: any, key: string) => {
    // Generate initials for avatar
    const initials = review.author
      ? review.author.split(' ').map((n: string) => n[0]).slice(0, 2).join('')
      : 'G';

    return (
      <div
        key={key}
        className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-amber-400/30 hover:bg-white/[0.05] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex flex-col justify-between"
      >
        <div>
          {/* Top row: stars + Google badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <StarRating rating={review.stars || 5} size={13} />
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] text-white/70 font-medium tracking-wider">
              <GoogleGIcon className="w-3 h-3" />
              <span>Google</span>
            </span>
          </div>

          {/* Review text */}
          <p className="text-sm text-white/80 font-light leading-relaxed mb-5 font-serif italic">
            "{review.text}"
          </p>
        </div>

        {/* Author info */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/30 border border-amber-400/30 flex items-center justify-center text-[11px] font-semibold text-amber-200">
              {initials}
            </div>
            <div>
              <p className="text-xs font-medium text-white flex items-center gap-1.5">
                <span>{review.author}</span>
                <span className="text-sm" title={review.location}>{review.flag}</span>
              </p>
              <p className="text-[10px] text-white/40">{review.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-emerald-400/80 font-medium">
            <CheckCircle2 size={11} className="text-emerald-400" />
            <span className="hidden sm:inline">Verificado</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="avaliacoes" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <AmbientBg src={IMG.ambientRiver} opacity={0.04} position="center 50%" />
      <AmbientGlow color="rgba(251,191,36,0.04)" top="60%" left="20%" size={600} />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header row */}
        <Reveal className="mb-14 md:mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.reviews.badge}</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.reviews.title} /></h2>
          <p className="text-white/40 font-light text-base sm:text-lg mb-8 max-w-xl mx-auto">{t.reviews.subtitle}</p>

          {/* Official Google Reviews Trust Badge */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-3 sm:p-4 pr-4 sm:pr-6 rounded-2xl sm:rounded-full bg-white/[0.04] border border-amber-400/20 backdrop-blur-md shadow-[0_4px_30px_rgba(212,175,55,0.06)]">
            <div className="flex items-center gap-2.5 pl-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <GoogleGIcon className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white tracking-wide">5.0</span>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-white/50 tracking-wider uppercase font-medium">Google Reviews</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-white/10" />

            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-medium text-white/90">
                {(t.reviews as any).googleVerified || 'Classificação 5.0 Estrelas no Google'}
              </span>
              <span className="text-[10px] text-amber-300/80">
                {(t.reviews as any).googleHighlight || '100% de avaliações 5 estrelas'}
              </span>
            </div>

            <a
              href={GOOGLE_REVIEWS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-amber-100 transition-all duration-300 text-[11px] font-semibold tracking-wide uppercase shadow-sm group"
            >
              <span>{(t.reviews as any).viewOnGoogle || 'Ver no Google Maps'}</span>
              <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Scrolling columns with pause-on-hover */}
        <div className="grid md:grid-cols-3 gap-6 h-[520px] md:h-[620px] overflow-hidden relative">
          {/* Gradient masks */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0c0c0c] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0c0c0c] to-transparent z-20 pointer-events-none" />

          {/* Column 1 — slow */}
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setPausedCol(1)}
            onMouseLeave={() => setPausedCol(null)}
          >
            <motion.div
              animate={{ translateY: pausedCol === 1 ? undefined : '-50%' }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {col1.map((review, i) => renderCard(review, `c1-${setIdx}-${i}`))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 2 — medium speed */}
          <div
            className="overflow-hidden relative hidden md:block"
            onMouseEnter={() => setPausedCol(2)}
            onMouseLeave={() => setPausedCol(null)}
          >
            <motion.div
              animate={{ translateY: pausedCol === 2 ? undefined : '-50%' }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {col2.map((review, i) => renderCard(review, `c2-${setIdx}-${i}`))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Column 3 — fast */}
          <div
            className="overflow-hidden relative hidden md:block"
            onMouseEnter={() => setPausedCol(3)}
            onMouseLeave={() => setPausedCol(null)}
          >
            <motion.div
              animate={{ translateY: pausedCol === 3 ? undefined : '-50%' }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
              className="flex flex-col gap-5 pb-5"
            >
              {[...Array(2)].map((_, setIdx) => (
                <React.Fragment key={setIdx}>
                  {col3.map((review, i) => renderCard(review, `c3-${setIdx}-${i}`))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <Reveal className="mt-12 text-center">
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-md">
            <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
              {(t.reviews as any).bottomTitle || 'Viveu uma experiência inesquecível com a NORTHÉ?'}
            </h3>
            <p className="text-white/50 text-sm font-light max-w-xl mx-auto mb-6">
              {(t.reviews as any).bottomSubtitle || 'A sua opinião é fundamental para nós. Leia as avaliações no nosso perfil oficial do Google ou partilhe a sua própria experiência.'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-amber-100 font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-md group"
              >
                <GoogleGIcon className="w-3.5 h-3.5" />
                <span>{(t.reviews as any).viewOnGoogle || 'Ver no Google Maps'}</span>
                <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/15 hover:border-white/30 font-medium text-xs uppercase tracking-wider transition-all duration-300"
              >
                <span>{(t.reviews as any).writeOnGoogle || 'Avaliar no Google'}</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
