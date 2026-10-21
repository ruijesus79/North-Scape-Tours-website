import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal, StaggerContainer, StaggerItem } from '../utils/shared';

export default function BlogIndex() {
  const { lang, t } = useLanguage();
  const navigate = useNavigate();
  const posts = t.blog.items;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const backLabel =
    lang === 'pt'
      ? 'Voltar ao Início'
      : lang === 'es'
      ? 'Volver al Inicio'
      : lang === 'fr'
      ? "Retour à l'Accueil"
      : lang === 'de'
      ? 'Zurück zur Startseite'
      : 'Back to Home';

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] pt-28 md:pt-36 pb-24 px-6 md:px-12 relative overflow-hidden">
      <SEO
        title={`${t.blog.title} | NORTHÉ Blog & Journal`}
        description={t.blog.subtitle}
        lang={lang}
        url="https://www.northetours.com/blog"
      />

      {/* Schema.org Blog & BreadcrumbList structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Blog',
              name: `${t.blog.title} — NORTHÉ`,
              description: t.blog.subtitle,
              url: 'https://www.northetours.com/blog',
              publisher: {
                '@type': 'Organization',
                name: 'NORTHÉ',
                url: 'https://www.northetours.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.northetours.com/logo-white.png',
                },
              },
              blogPost: posts.map((post: any) => ({
                '@type': 'BlogPosting',
                headline: post.title,
                description: post.excerpt,
                url: `https://www.northetours.com/blog/${post.slug}`,
                image: post.image?.startsWith('http')
                  ? post.image
                  : `https://www.northetours.com${post.image}`,
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.northetours.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Blog',
                  item: 'https://www.northetours.com/blog',
                },
              ],
            },
          ]),
        }}
      />

      <AmbientBg src={IMG.ambientVines} opacity={0.04} position="center 40%" />
      <AmbientGlow color="rgba(212,175,55,0.04)" top="25%" left="50%" size={700} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft size={14} /> {backLabel}
          </Link>
        </div>

        <Reveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">
            <BookOpen size={13} /> {t.blog.badge}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-[1.1] text-balance text-white">
            <TextReveal text={t.blog.title} />
          </h1>
          <p className="text-white/65 text-base sm:text-lg font-light leading-relaxed text-pretty">
            {t.blog.subtitle}
          </p>
          <div className="w-12 h-px bg-amber-400/40 mx-auto mt-8" />
        </Reveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
          {posts.map((post: any, i: number) => (
            <StaggerItem key={post.slug || i} className="group flex flex-col" role="article">
              <Link
                to={`/blog/${post.slug}`}
                className="block relative aspect-[4/5] sm:aspect-[16/11] md:aspect-[4/5] overflow-hidden rounded-2xl mb-7 bg-white/5 border border-white/8 shadow-xl"
              >
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
                <span className="text-[11px] text-amber-400/80 uppercase tracking-[0.2em] mb-3 font-mono">
                  {post.date}
                </span>

                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-[1.75rem] mb-4 leading-[1.2] text-pretty text-white transition-colors duration-500 group-hover:text-amber-300">
                    {post.title}
                  </h2>
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
                      onClick={() => navigate('/#contacto')}
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
      </div>
    </div>
  );
}
