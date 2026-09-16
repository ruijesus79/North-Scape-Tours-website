import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StaggerContainer, StaggerItem } from '../../utils/shared';

export default function BlogSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const isPt = lang === 'pt';

  const visiblePosts = showAll ? t.blog.items : t.blog.items.slice(0, 4);

  return (
    <section id="blog" className="py-28 md:py-40 px-6 md:px-12 relative overflow-hidden bg-[#0c0c0c]">
      <AmbientBg src={IMG.ambientVines} opacity={0.04} position="center 40%" />
      <AmbientGlow color="rgba(212,175,55,0.03)" top="30%" left="50%" size={700} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4 block">{t.blog.badge}</span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.1] text-balance text-white"><TextReveal text={t.blog.title} /></h2>
          <p className="text-white/65 text-base sm:text-lg font-light leading-relaxed text-pretty">{t.blog.subtitle}</p>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mt-8" />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
          {visiblePosts.map((post, i) => (
            <StaggerItem key={post.slug || i} className="group flex flex-col" role="article">
              <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] overflow-hidden rounded-2xl mb-7 bg-white/5 border border-white/8 shadow-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover brightness-90 transition-all duration-[1.4s] ease-out group-hover:scale-[1.04] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-700" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-[10px] px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/15 uppercase tracking-[0.18em] text-amber-300 font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/15 uppercase tracking-[0.15em] text-white/90 font-medium">
                    <Clock size={11} className="text-amber-400" /> {post.readTime}
                  </span>
                </div>
              </Link>

              <div className="flex flex-col flex-1 px-1">
                <span className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mb-3 font-mono">{post.date}</span>

                <Link to={`/blog/${post.slug}`}>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-[1.75rem] mb-4 leading-[1.2] text-pretty text-white transition-colors duration-500 group-hover:text-amber-300">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-white/70 font-light text-[15px] leading-relaxed mb-7 text-pretty">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm text-white tracking-wide border-b border-white/30 pb-1 transition-all duration-300 hover:border-amber-300 hover:text-amber-300"
                  >
                    <span className="font-serif italic">{t.blog.readMore}</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>

                  {post.bookable && (
                    <button
                      onClick={() => scrollTo('contacto')}
                      className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-amber-300/20 hover:border-amber-300/60 hover:-translate-y-0.5"
                    >
                      {t.blog.bookCta} <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {t.blog.items.length > 4 && !showAll && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="cursor-pointer px-8 py-3.5 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 hover:border-amber-500/40 text-xs sm:text-sm font-medium tracking-wide transition-all duration-300"
            >
              {isPt
                ? `Ver mais ${t.blog.items.length - 4} histórias do Douro →`
                : `Discover ${t.blog.items.length - 4} more stories →`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

