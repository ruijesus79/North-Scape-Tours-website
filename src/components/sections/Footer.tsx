import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { AmbientGlow, SocialIcons, NAV_IDS } from '../../utils/shared';

export default function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const navKeys: (keyof typeof t.nav)[] = ['home', 'tours', 'transfer', 'about', 'reviews', 'blog', 'contact'];

  return (
    <footer className="border-t border-white/8 py-14 md:py-16 px-6 md:px-12 relative overflow-hidden">
      <AmbientGlow color="rgba(212,175,55,0.03)" top="50%" left="50%" size={600} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <img src="/logo-white.png" alt="North Scape Tours" className="h-20 sm:h-24 md:h-28 w-auto opacity-80 mb-4" />
          <p className="font-serif italic text-white/30 text-sm sm:text-base mb-6">
            {lang === 'pt' ? 'Experiências exclusivas no Norte de Portugal' : 'Exclusive experiences in Northern Portugal'}
          </p>

          <SocialIcons />
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {navKeys.map((key, i) => (
            <button key={key} onClick={() => scrollTo(NAV_IDS[i])} className="cursor-pointer text-xs font-serif tracking-wide text-white/30 hover:text-white/60 transition-colors duration-300">
              {t.nav[key]}
            </button>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs font-serif text-white/25 text-center md:text-left">
            <span>{t.footer.licensedIn}</span>
            <span className="opacity-50 hidden md:block">|</span>
            <span>{t.footer.nif}</span>
            <span className="opacity-50 hidden md:block">|</span>
            <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white/50 transition-colors duration-300 underline decoration-white/20 underline-offset-4">
              {t.footer.complaints}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-serif text-white/25">
            <Link to="/termos" className="cursor-pointer hover:text-white/50 transition-colors duration-300">{t.footer.terms}</Link>
            <Link to="/privacidade" className="cursor-pointer hover:text-white/50 transition-colors duration-300">{t.footer.privacy}</Link>
          </div>
        </div>
        <div className="mt-4 text-center text-[10px] font-sans text-white/20">© {new Date().getFullYear()} North Scape Tours. {t.footer.rights}</div>
      </div>
    </footer>
  );
}
