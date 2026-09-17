import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { AmbientGlow, SocialIcons } from '../../utils/shared';
import { EMAIL } from '../../content';

export default function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();

  const handleCategoryNav = (cat: 'all' | 'douro' | 'north' | 'porto') => {
    window.dispatchEvent(new CustomEvent('northe_select_category', { detail: cat }));
    scrollTo('tours');
  };

  return (
    <footer className="border-t border-white/8 py-14 md:py-20 px-6 md:px-12 relative overflow-hidden bg-[#080808]">
      <AmbientGlow color="rgba(212,175,55,0.03)" top="50%" left="50%" size={600} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <img
            src="/logo-white.png"
            alt="NORTHÉ — Private Tours"
            className="h-16 sm:h-20 md:h-24 w-auto opacity-90 mb-4 transition-opacity hover:opacity-100"
          />
          <p className="font-serif italic text-white/40 text-sm sm:text-base max-w-lg mb-2">
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
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">
            Wine · Gastronomy · Local Culture
          </p>

          <SocialIcons />
        </div>

        {/* Primary Destination & Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 text-xs uppercase tracking-widest font-medium text-white/40">
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
