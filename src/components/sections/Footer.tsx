import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { AmbientGlow, SocialIcons } from '../../utils/shared';
import { EMAIL } from '../../content';

export default function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const [portugalTime, setPortugalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('pt-PT', {
          timeZone: 'Europe/Lisbon',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setPortugalTime(timeStr);
      } catch {
        setPortugalTime('18:00');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryNav = (cat: 'all' | 'douro' | 'north' | 'porto') => {
    window.dispatchEvent(new CustomEvent('northe_select_category', { detail: cat }));
    scrollTo('tours');
  };

  const SEASON_TEXT: Record<string, string> = {
    pt: 'Vale do Douro · Provas & Tours Privados',
    en: 'Douro Valley · Private Wine Journeys',
    es: 'Valle del Duero · Catas y Tours Privados',
    fr: 'Vallée du Douro · Dégustations & Circuits Privés',
    de: 'Douro-Tal · Private Weinreisen & Touren',
  };

  return (
    <footer className="border-t border-white/8 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden bg-[#080808]">
      {/* Monumental Watermark Typography (Inspiration: footer.design) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 font-serif text-[17vw] leading-none tracking-[0.25em] text-white/[0.02] uppercase font-bold whitespace-nowrap z-0 translate-y-[30%]"
      >
        NORTHÉ
      </div>

      <AmbientGlow color="rgba(212,175,55,0.035)" top="40%" left="50%" size={700} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <img
            src="/logo-white.png"
            alt="NORTHÉ — Private Tours"
            className="h-16 sm:h-20 md:h-24 w-auto opacity-90 mb-4 transition-opacity hover:opacity-100"
          />
          <p className="font-serif italic text-white/40 text-sm sm:text-base max-w-lg mb-4">
            {lang === 'pt'
              ? 'Experiências Privadas a partir do Porto · Douro Valley · Norte de Portugal'
              : lang === 'es'
              ? 'Experiencias Privadas desde Oporto · Valle del Duero · Norte de Portugal'
              : lang === 'fr'
              ? 'Expériences Privées au départ de Porto · Vallée du Douro · Nord du Portugal'
              : lang === 'de'
              ? 'Private Erlebnisse ab Porto · Douro-Tal · Nordportugal'
              : 'Private Experiences from Porto · Douro Valley · Northern Portugal'}
          </p>

          {/* Live Portugal Destination Time & Season Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/8 backdrop-blur-md mb-6 text-[11px] font-mono text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400"></span>
            </span>
            <span>Porto: {portugalTime || '18:00'} (WET / GMT+1)</span>
            <span className="text-white/20">•</span>
            <span className="text-amber-200/70 font-serif italic tracking-normal">
              {SEASON_TEXT[lang] || SEASON_TEXT.pt}
            </span>
          </div>

          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">
            Wine · Gastronomy · Local Culture
          </p>

          <SocialIcons />
        </div>

        {/* Primary Destination & Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-xs uppercase tracking-widest font-medium text-white/40">
          <button
            onClick={() => scrollTo('home')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => handleCategoryNav('all')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.tours}
          </button>
          <button
            onClick={() => handleCategoryNav('douro')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.douro || 'Douro Valley'}
          </button>
          <button
            onClick={() => handleCategoryNav('north')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.north || 'Northern Portugal'}
          </button>
          <button
            onClick={() => handleCategoryNav('porto')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.porto || 'Porto Experiences'}
          </button>
          <button
            onClick={() => scrollTo('sobre-nos')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollTo('contacto')}
            className="cursor-pointer hover:text-amber-300 transition-colors"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Legal & Credentials Line */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs font-serif text-white/30 text-center md:text-left">
            <span>{t.footer.licensedIn}</span>
            <span className="opacity-50 hidden md:block">|</span>
            <span>{t.footer.nif}</span>
            <span className="opacity-50 hidden md:block">|</span>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-white/60 transition-colors text-white/40 underline decoration-white/20 underline-offset-4"
            >
              {EMAIL}
            </a>
            <span className="opacity-50 hidden md:block">|</span>
            <a
              href="https://www.livroreclamacoes.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-white/60 transition-colors underline decoration-white/20 underline-offset-4"
            >
              {t.footer.complaints}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-serif text-white/30">
            <Link to="/termos" className="cursor-pointer hover:text-white/60 transition-colors">
              {t.footer.terms}
            </Link>
            <Link to="/privacidade" className="cursor-pointer hover:text-white/60 transition-colors">
              {t.footer.privacy}
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-[11px] font-sans text-white/25">
          © {new Date().getFullYear()} NORTHÉ. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
