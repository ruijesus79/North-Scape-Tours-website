import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, useNavigate, Link, Navigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, MessageCircle, Shield } from 'lucide-react';

const BlogPost = lazy(() => import('./pages/BlogPost'));
const TourPage = lazy(() => import('./pages/TourPage'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';

import { useLanguage } from './contexts/LanguageContext';
import { WHATSAPP_LINK, getWhatsAppLink, type Language } from './content';

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
  const isSubPage = location.pathname.startsWith('/blog') || location.pathname.startsWith('/tours');

  const acceptCookies = (all: boolean) => {
    localStorage.setItem('cookieConsent', all ? 'all' : 'essential');
    setShowCookies(false);
  };

  const LANG_LABELS: Record<Language, string> = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Handle scroll to top on route change
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
      setTimeout(doScroll, 150);
    } else {
      doScroll();
    }
    setMenuOpen(false);
  };

  // Select category and scroll to tours section
  const handleCategoryNav = (cat: 'all' | 'douro' | 'north' | 'porto') => {
    window.dispatchEvent(new CustomEvent('northe_select_category', { detail: cat }));
    scrollTo('tours');
  };

  // Requested Main Menu: Home, Private Tours, Douro Valley, Northern Portugal, Porto Experiences, About NORTHÉ, Contact
  const navItems = [
    { id: 'home', label: t.nav.home, action: () => scrollTo('home') },
    { id: 'tours', label: t.nav.tours, action: () => handleCategoryNav('all') },
    { id: 'douro', label: 'Douro Valley', action: () => handleCategoryNav('douro') },
    { id: 'north', label: 'Northern Portugal', action: () => handleCategoryNav('north') },
    { id: 'porto', label: 'Porto Experiences', action: () => handleCategoryNav('porto') },
    { id: 'about', label: t.nav.about, action: () => scrollTo('sobre-nos') },
    { id: 'contact', label: t.nav.contact, action: () => scrollTo('contacto') },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 overflow-x-hidden">
      <CustomCursor />
      <SEO
        title={
          lang === 'pt'
            ? 'NORTHÉ | Tours Privados & Experiências Exclusivas no Douro e Porto'
            : lang === 'es'
            ? 'NORTHÉ | Tours Privados y Experiencias Exclusivas en el Duero y Oporto'
            : lang === 'fr'
            ? 'NORTHÉ | Circuits Privés & Expériences Exclusives dans le Douro et Porto'
            : lang === 'de'
            ? 'NORTHÉ | Private Touren & Exklusive Erlebnisse im Douro-Tal und Porto'
            : 'NORTHÉ | Luxury Private Tours & Experiences from Porto'
        }
        description={
          lang === 'pt'
            ? 'Experiências 100% privadas no Vale do Douro, Porto e Norte de Portugal. Guias certificados, viaturas executivas e itinerários exclusivos sob medida.'
            : lang === 'es'
            ? 'Experiencias 100% privadas en el Valle del Duero, Oporto y Norte de Portugal. Guías certificados, vehículos ejecutivos e itinerarios exclusivos a medida.'
            : lang === 'fr'
            ? 'Expériences 100% privées dans la Vallée du Douro, Porto et le Nord du Portugal. Véhicules exécutifs et itinéraires sur mesure.'
            : lang === 'de'
            ? '100% private Touren im Douro-Tal, Porto und Nordportugal. Zertifizierte Guides, Executive-Fahrzeuge und maßgeschneiderte Reiserouten.'
            : 'Exclusive 100% private tours in Douro Valley, Porto, and Northern Portugal. Certified wine-master guides, executive vehicles, and bespoke itineraries.'
        }
        lang={lang}
        image="/logo-white.png"
        url="https://northetours.com"
      />

      {/* ═══════ SCROLL PROGRESS BAR ═══════ */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ═══════ HEADER ═══════ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          isScrolled || isSubPage
            ? 'bg-[#0c0c0c]/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-white/[0.06] py-3.5'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-[1550px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => scrollTo('home')}
              className="cursor-pointer z-50 relative flex-shrink-0 flex items-center gap-3 group"
              aria-label="NORTHÉ Início"
            >
              <img
                src="/logo-white.png"
                alt="NORTHÉ Private Tours"
                className={`w-auto transition-all duration-500 origin-left ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isScrolled || isSubPage ? 'h-9 sm:h-11' : 'h-14 sm:h-16 md:h-20'
                }`}
              />
            </button>
          </div>

          {/* Center: Main Navigation Menu */}
          <nav className="hidden 2xl:flex items-center justify-center gap-7 text-[11px] font-semibold tracking-[0.18em] uppercase whitespace-nowrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="cursor-pointer relative pb-1 group text-white/70 hover:text-white transition-colors duration-300"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center pointer-events-none" />
              </button>
            ))}
          </nav>

          {/* Medium Desktop Compact Nav (for screens between xl and 2xl) */}
          <nav className="hidden xl:flex 2xl:hidden items-center justify-center gap-4 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="cursor-pointer relative pb-1 group text-white/70 hover:text-white transition-colors"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden xl:flex flex-1 items-center justify-end gap-4 whitespace-nowrap">
            {/* Language Dropdown */}
            <div ref={langDropdownRef} className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-all pl-3 pr-2.5 py-1.5 bg-white/[0.04] border border-white/10 hover:border-amber-500/30 backdrop-blur-md rounded-full font-semibold text-[12px] text-white/75 uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                aria-label="Switch language"
              >
                <Globe size={13} />
                <span>{lang.toUpperCase()}</span>
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${langDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full right-0 mt-3 min-w-[160px] bg-[#0c0c0c]/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50 p-1.5"
                  >
                    {(Object.keys(LANG_LABELS) as Language[]).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangDropdownOpen(false);
                        }}
                        className={`cursor-pointer w-full text-left px-4 py-2 text-[12px] font-medium tracking-wide transition-all duration-200 flex items-center justify-between rounded-xl mb-0.5 last:mb-0 ${
                          lang === code
                            ? 'text-amber-300 bg-white/[0.08]'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                        }`}
                      >
                        <span>{LANG_LABELS[code]}</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/30">{code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-5 bg-white/15 mx-0.5" />

            {/* WhatsApp Direct */}
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 normal-case tracking-normal text-white/80 hover:text-white text-[12px] font-medium"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Book CTA */}
            <button
              onClick={() => scrollTo('contacto')}
              className="cursor-pointer px-5 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 normal-case tracking-normal font-semibold text-[12px] shadow-sm"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 xl:hidden z-50 relative">
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="cursor-pointer flex items-center gap-1 text-xs font-medium text-white/70 bg-white/[0.05] px-2.5 py-1.5 rounded-full border border-white/10"
                aria-label="Switch language"
              >
                <Globe size={13} />
                <span>{lang.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 min-w-[140px] bg-[#111]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[60]"
                  >
                    {(Object.keys(LANG_LABELS) as Language[]).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangDropdownOpen(false);
                        }}
                        className={`cursor-pointer w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                          lang === code ? 'text-amber-300 bg-white/[0.05]' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {LANG_LABELS[code]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              className="cursor-pointer p-2 rounded-lg bg-white/[0.05] border border-white/10 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Drawer */}
        <motion.div
          initial={false}
          animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 bg-[#0c0c0c]/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center p-6"
          role="dialog"
          aria-hidden={!menuOpen}
        >
          <div className="flex flex-col items-center gap-5 text-lg font-serif">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="cursor-pointer hover:text-amber-300 transition-colors duration-200 text-white/80 py-1"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 w-full max-w-xs">
            <a
              href={getWhatsAppLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-sans text-sm font-semibold"
            >
              <MessageCircle size={17} /> WhatsApp Direto
            </a>
            <button
              onClick={() => scrollTo('contacto')}
              className="w-full cursor-pointer py-3.5 rounded-full bg-white text-black text-sm font-sans font-semibold uppercase tracking-wider shadow-lg"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ═══════ PAGE TRANSITIONS WRAPPER ═══════ */}
      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#0c0c0c] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          }
        >
          <Routes location={location}>
            {/* Dynamic Google Ads Landing Page for each of the 17 Private Tours */}
            <Route
              path="/tours/:slug"
              element={
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TourPage />
                </motion.div>
              }
            />

            {/* Blog Post */}
            <Route
              path="/blog/:slug"
              element={
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.98, filter: 'blur(5px)' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BlogPost />
                </motion.div>
              }
            />

            {/* Main Home Route */}
            <Route
              path="/"
              element={
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
              }
            />

            {/* Legal Pages */}
            <Route
              path="/termos"
              element={
                <motion.div
                  key="/termos"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Terms />
                </motion.div>
              }
            />
            <Route
              path="/privacidade"
              element={
                <motion.div
                  key="/privacidade"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <Privacy />
                </motion.div>
              }
            />
            {/* Catch-all Not Found Route: safely redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer scrollTo={scrollTo} />

      {/* ═══════ FIXED MOBILE BAR ═══════ */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111]/95 backdrop-blur-md border-t border-white/10 p-3 flex gap-2.5 shadow-2xl">
        <a
          href={getWhatsAppLink(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-600 text-white rounded-full font-medium text-xs hover:bg-emerald-500 transition-colors duration-300"
        >
          <MessageCircle size={15} /> WhatsApp
        </a>
        <button
          onClick={() => scrollTo('contacto')}
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black rounded-full font-medium text-xs hover:bg-white/90 transition-colors duration-300 shadow-md"
        >
          {t.mobileBar.book}
        </button>
      </div>

      {/* ═══════ COOKIE BANNER ═══════ */}
      <AnimatePresence>
        {showCookies && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 sm:bottom-6 left-0 sm:left-6 right-0 sm:right-auto sm:max-w-sm z-[100] bg-[#0f0f0f] border border-white/10 sm:rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl pb-24 sm:pb-6"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="p-2.5 bg-white/5 rounded-full text-amber-400/80">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-white/80 text-sm font-light leading-relaxed mb-1">
                  {t.cookieBanner.text}{' '}
                  <Link
                    to="/privacidade"
                    className="underline decoration-white/20 underline-offset-4 hover:text-white transition-colors"
                  >
                    {t.cookieBanner.linkText}
                  </Link>
                  .
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
