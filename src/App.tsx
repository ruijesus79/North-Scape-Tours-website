import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, MessageCircle, Shield } from 'lucide-react';

import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';

import { useLanguage } from './contexts/LanguageContext';
import { WHATSAPP_LINK, type Language } from './content';
import { NAV_IDS } from './utils/shared';

import HeroSection from './components/sections/HeroSection';
import ToursSection from './components/sections/ToursSection';
import TailorMadeSection from './components/sections/TailorMadeSection';
import TransferSection from './components/sections/TransferSection';
import AboutSection from './components/sections/AboutSection';
import ReviewsSection from './components/sections/ReviewsSection';
import FaqSection from './components/sections/FaqSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';

export default function App() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCookies, setShowCookies] = useState(() => !localStorage.getItem('cookieConsent'));
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();
  const isBlog = location.pathname.startsWith('/blog');

  const acceptCookies = (all: boolean) => {
    localStorage.setItem('cookieConsent', all ? 'all' : 'essential');
    setShowCookies(false);
  };

  const LANG_LABELS: Record<Language, string> = { pt: 'Português', en: 'English', es: 'Español', fr: 'Français', de: 'Deutsch' };

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) setLangDropdownOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Handle true scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const fn = () => {
      setIsScrolled(window.scrollY > 50);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id: string) => {
    const doScroll = () => {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(`#${id}`, { offset: -50, duration: 1.2 });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 100);
    } else {
      doScroll();
    }
    setMenuOpen(false);
  };
  
  const navKeys: (keyof typeof t.nav)[] = ['home', 'tours', 'transfer', 'about', 'reviews', 'blog', 'contact'];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 overflow-x-hidden">
      <CustomCursor />
      <SEO 
        title={t.hero.title1 + ' ' + t.hero.title2 + ' | North Scape Tours'} 
        description={t.hero.desc}
        lang={lang}
      />

      {/* ═══════ SCROLL PROGRESS BAR ═══════ */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ═══════ HEADER ═══════ */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${isScrolled || isBlog ? 'bg-[#0c0c0c]/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] border-b border-white/[0.05] py-4' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* Left: Logo (flex-1 to allow true centering of nav) */}
          <div className="flex-1 flex justify-start">
            <button onClick={() => scrollTo('home')} className="cursor-pointer z-50 relative flex-shrink-0" aria-label="Início">
              <img src="/logo-white.png" alt="North Scape Tours" className={`w-auto transition-all duration-500 origin-left ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled || isBlog ? 'h-10 sm:h-12' : 'h-[75px] sm:h-[90px] xl:h-[110px]'}`} />
            </button>
          </div>

          <nav className="hidden xl:flex items-center justify-center gap-6 text-[12px] font-semibold tracking-widest uppercase whitespace-nowrap">
            {navKeys.map((key, i) => (
              <button key={key} onClick={() => scrollTo(NAV_IDS[i])} className="cursor-pointer relative pb-1 group">
                <span className="text-white/70 group-hover:opacity-0 transition-opacity duration-300">
                  {t.nav[key]}
                </span>
                <span className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gradient-animate pointer-events-none">
                  {t.nav[key]}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center pointer-events-none" />
              </button>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden xl:flex flex-1 items-center justify-end gap-5 whitespace-nowrap">
            <div ref={langDropdownRef} className="relative">
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-all pl-3 pr-2.5 py-1.5 bg-white/[0.03] border border-white/10 hover:border-amber-500/30 backdrop-blur-md rounded-full font-semibold text-[13px] text-white/70 uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.1)]" aria-label="Switch language">
                <Globe size={14} /><span>{lang.toUpperCase()}</span><ChevronDown size={12} className={`transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: 8, filter: 'blur(4px)' }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="absolute top-full right-0 mt-3 min-w-[160px] bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-50 p-1.5">
                    {(Object.keys(LANG_LABELS) as Language[]).map((code) => (
                      <button key={code} onClick={() => { setLang(code); setLangDropdownOpen(false); }} className={`cursor-pointer w-full text-left px-4 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-200 flex items-center justify-between rounded-xl mb-0.5 last:mb-0 ${lang === code ? 'text-amber-300 bg-white/[0.08]' : 'text-white/60 hover:text-white hover:bg-white/[0.05]'}`}>
                        <span>{LANG_LABELS[code]}</span>
                        <span className="text-[11px] uppercase tracking-widest text-white/30">{code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="w-px h-5 bg-white/15 mx-1" />
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 normal-case tracking-normal text-white/80 hover:text-white text-[13px] font-medium">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <button onClick={() => scrollTo('contacto')} className="cursor-pointer px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 normal-case tracking-normal font-semibold text-[13px]">
              {t.nav.book}
            </button>
          </div>
          <div className="flex items-center gap-3 xl:hidden z-50 relative">
            <div className="relative" ref={langDropdownRef}>
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="cursor-pointer flex items-center gap-1.5 text-sm font-medium text-white/70" aria-label="Switch language">
                <Globe size={15} /><span>{lang.toUpperCase()}</span><ChevronDown size={11} className={`transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="absolute top-full right-0 mt-2 min-w-[150px] bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[60]">
                    {(Object.keys(LANG_LABELS) as Language[]).map((code) => (
                      <button key={code} onClick={() => { setLang(code); setLangDropdownOpen(false); }} className={`cursor-pointer w-full text-left px-4 py-2.5 text-[13px] font-medium transition-colors ${lang === code ? 'text-amber-300 bg-white/[0.05]' : 'text-white/60 hover:text-white hover:bg-white/[0.05]'}`}>
                        {LANG_LABELS[code]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="cursor-pointer p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <motion.div initial={false} animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }} transition={{ duration: 0.4 }} className="fixed inset-0 bg-[#0c0c0c]/98 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-7 text-xl font-serif" role="dialog" aria-hidden={!menuOpen}>
          {navKeys.map((key, i) => (
            <button key={key} onClick={() => scrollTo(NAV_IDS[i])} className="cursor-pointer hover:text-white/80 transition-colors duration-300 text-white/60">{t.nav[key]}</button>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer mt-4 flex items-center gap-2 px-8 py-3 rounded-full border border-green-500/30 text-green-400 font-sans text-base"><MessageCircle size={16} /> WhatsApp</a>
          <button onClick={() => scrollTo('contacto')} className="cursor-pointer px-8 py-3 rounded-full bg-white text-black text-base font-sans uppercase tracking-wide">{t.nav.bookNow}</button>
        </motion.div>
      </header>

      {/* ═══════ PAGE TRANSITIONS WRAPPER ═══════ */}
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/blog/:slug" element={
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <BlogPost />
            </motion.div>
          } />

          <Route path="/" element={
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSection scrollTo={scrollTo} />
              <ToursSection scrollTo={scrollTo} />
              <TailorMadeSection scrollTo={scrollTo} />
              <TransferSection scrollTo={scrollTo} />
              <AboutSection />
              <ReviewsSection />
              <FaqSection />
              <BlogSection scrollTo={scrollTo} />
              <ContactSection />
            </motion.div>
          } />
          <Route path="/termos" element={<motion.div key="/termos" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}><Terms /></motion.div>} />
          <Route path="/privacidade" element={<motion.div key="/privacidade" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}><Privacy /></motion.div>} />
        </Routes>
      </AnimatePresence>

      <Footer scrollTo={scrollTo} />

      {/* ═══════ FIXED MOBILE BAR ═══════ */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-md border-t border-white/8 p-3 flex gap-2">
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-full font-medium text-sm hover:bg-green-500 transition-colors duration-300">
          <MessageCircle size={15} /> {t.mobileBar.whatsapp}
        </a>
        <button onClick={() => scrollTo('contacto')} className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-colors duration-300">
          {t.mobileBar.book}
        </button>
      </div>

      {/* ═══════ COOKIE BANNER ═══════ */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 sm:bottom-6 left-0 sm:left-6 right-0 sm:right-auto sm:max-w-sm z-[100] bg-[#0f0f0f] border border-white/10 sm:rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl pb-24 sm:pb-6"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="p-2.5 bg-white/5 rounded-full text-amber-400/80"><Shield size={20} /></div>
              <div>
                <p className="text-white/80 text-sm font-light leading-relaxed mb-1">
                  {t.cookieBanner.text}{' '}
                  <Link to="/privacidade" className="underline decoration-white/20 underline-offset-4 hover:text-white transition-colors">
                    {t.cookieBanner.linkText}
                  </Link>.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => acceptCookies(true)}
                className="flex-1 bg-white text-black font-medium text-[13px] py-2.5 rounded-xl hover:bg-white/90 transition-colors cursor-pointer"
              >
                {t.cookieBanner.acceptBtn}
              </button>
              <button
                onClick={() => acceptCookies(false)}
                className="flex-1 border border-white/15 text-white/70 font-medium text-[13px] py-2.5 rounded-xl hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
              >
                {t.cookieBanner.essentialBtn}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
