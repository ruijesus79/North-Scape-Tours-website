import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import * as THREE from 'three';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import HeroText from './components/HeroText';
import MagneticButton from './components/MagneticButton';
import BentoBox from './components/BentoBox';
import ScrollRevealText from './components/ScrollRevealText';
import { Star, ArrowRight, Clock, Users, Menu, X, Globe, ChevronDown, Phone, Mail, Shield, Check, Wine, Ship, Car, Heart, Camera, MessageCircle, Calendar, Award } from 'lucide-react';
import { CONTENT, WHATSAPP_LINK, type Language } from './content';
import CustomCursor from './components/CustomCursor';

// Lazy-loaded heavy WebGL packages for 99 score performance
// @ts-ignore
const LazyVantaFog = lazy(() => import('./components/VantaFog'));
// @ts-ignore
const LazyVantaWaves = lazy(() => import('./components/VantaWaves'));

/* ──────── Curated Douro Valley Images — Hand-picked Feb 2026 ──────── */
const IMG = {
  /* HERO — Golden hour valley with winding river: emotional, warm, awe-inspiring */
  hero: 'https://www.anadventurousworld.com/wp-content/uploads/2017/05/douro-valley-day-trip.jpg',
  /* VINEYARD — Quinta do Seixo panoramic terraces: iconic, dramatic curves of the Douro */
  douroVineyard: 'https://s27363.pcdn.co/wp-content/uploads/2024/02/Quinta-do-Seixo-Douro-Valley.jpg.optimal.jpg',
  /* WINE TASTING — Quinta Nova wines with valley backdrop: romantic, depth of field, high-end */
  wineTasting: 'https://blog.winetourismportugal.com/hs-fs/hubfs/37QuintaNova1404.jpg?width=1383',
  /* BOAT RIDE — Traditional Rabelo boat on the Douro */
  boatRide: '/images/douro_boat_tour_1771612994491.png',
  /* LUNCH — Quinta do Crasto terrace set for two: exclusive, serene, luxury dining */
  lunch: 'https://blog.winetourismportugal.com/hs-fs/hubfs/Enotourism%5B6%5D%20(4).jpg?width=1969',
  /* ROMANTIC — Couple sharing wine on Douro river boat at golden hour sunset */
  romantic: 'https://www.louderthanfire.com/wp-content/uploads/2023/07/Boat-Trip-Marriage-Proposal-Douro-Valley-featured.jpg',
  /* TRANSFER — Premium chauffeur service */
  transfer: '/images/transfer_branded.png',
  /* TEAM — Quinta do Vallado estate amid terraces: professional, established */
  team: '/images/North Scape Tours Team example2.png',
  /* CTA BACKGROUND — Quinta house amid vineyard terraces by river: exclusive, luxury brochure feel */
  ctaBg: 'https://images.winalist.com/blog/wp-content/uploads/2024/02/26114506/AdobeStock_106808196.jpeg',
  /* ambient backgrounds — subtle, low-opacity images for visual depth */
  ambientVines: 'https://s27363.pcdn.co/wp-content/uploads/2024/02/Douro-Valley-Vines.jpg.optimal.jpg',
  ambientBarrels: 'https://images.winalist.com/blog/wp-content/uploads/2024/02/21152357/maksym-kaharlytskyi-5ZmAyIG_OrI-unsplash.jpg',
  ambientRiver: 'https://images.winalist.com/blog/wp-content/uploads/2022/04/26174037/what-to-do-douro-valley-pinhao-winalist.jpeg',
  ambientSunset: 'https://blog.winetourismportugal.com/hs-fs/hubfs/1607627042-portugal-estates-douro-quinta-do-seixo-6.jpg?width=1383',
};

const NAV_IDS = ['home', 'tour-douro', 'douro-a-dois', 'transfer', 'sobre-nos', 'avaliacoes', 'blog', 'contacto'] as const;

/* ─── Chanteclerc-style scroll-reveal animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
// 600ms duration with ease-out
const fadeUpTransition = { duration: 0.6, ease: 'easeOut' };

interface RevealProps { children: React.ReactNode; className?: string; delay?: number;[key: string]: unknown; }
function Reveal({ children, className = '', delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ ...fadeUpTransition, delay }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

interface StaggerProps { children: React.ReactNode; className?: string;[key: string]: unknown; }
function StaggerContainer({ children, className = '', ...rest }: StaggerProps) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20%' }} transition={{ staggerChildren: 0.1 }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
function StaggerItem({ children, className = '', ...rest }: StaggerProps) {
  return (
    <motion.div variants={fadeUp} transition={fadeUpTransition} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

/* ─── Ambient background component ─── */
function AmbientBg({ src, opacity = 0.15, position = 'center' }: { src: string; opacity?: number; position?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img src={src} alt="" className="w-full h-full object-cover" style={{ opacity, objectPosition: position }} referrerPolicy="no-referrer" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]/80" />
    </div>
  );
}

/* ─── Ambient radial glow ─── */
function AmbientGlow({ color = 'rgba(212,175,55,0.06)', top = '50%', left = '50%', size = 600 }: { color?: string; top?: string; left?: string; size?: number }) {
  return (
    <div className="absolute pointer-events-none" style={{ top, left, width: size, height: size, transform: 'translate(-50%,-50%)', borderRadius: '50%', background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }} aria-hidden="true" />
  );
}


/* ─── Star rating with half-star support ─── */
function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const empty = 5 - full - (hasHalf ? 1 : 0);
  return (
    <div className="flex gap-0.5">
      {[...Array(full)].map((_, i) => <Star key={`f${i}`} size={size} fill="#d4af37" className="text-[#d4af37]" />)}
      {hasHalf && (
        <span key="half" className="relative" style={{ width: size, height: size }}>
          <Star size={size} className="text-white/15 absolute inset-0" />
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} fill="#d4af37" className="text-[#d4af37]" />
          </span>
        </span>
      )}
      {[...Array(empty)].map((_, i) => <Star key={`e${i}`} size={size} className="text-white/15" />)}
    </div>
  );
}

/* ─── Character-by-character text reveal on scroll ─── */
function TextReveal({ text, className = '' }: { text: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  let charIndex = 0;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {text.split(' ').map((word, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
          {word.split('').map((char) => {
            const i = charIndex++;
            return (
              <span
                key={i}
                className={`text-reveal-char ${revealed ? 'revealed' : ''}`}
                style={{ '--index': i } as React.CSSProperties}
                aria-hidden="true"
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}

/* ─── Social Icons (21st.dev-inspired) ─── */
const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/northscapetours',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/northscapetours',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    name: 'TripAdvisor',
    href: 'https://tripadvisor.com/northscapetours',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.432 5.976 5.976 0 004.003-1.533l2 2.328 2-2.328a5.976 5.976 0 004.003 1.533 5.997 5.997 0 004.04-10.432L24 6.648h-4.35a15.66 15.66 0 00-7.644-2.353zM6.003 17.215a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.221a2 2 0 100 4 2 2 0 000-4zm11.994 0a2 2 0 100 4 2 2 0 000-4z" /></svg>,
  },
  {
    name: 'WhatsApp',
    href: WHATSAPP_LINK,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  },
];

function SocialIcons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="relative flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl bg-[#0a0a0a] border border-white/[0.08]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      {SOCIALS.map((social, index) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center size-10 rounded-xl transition-colors duration-200"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={social.name}
        >
          <span className={`absolute inset-1 rounded-lg bg-white/[0.08] transition-all duration-300 ease-out ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
          <span className={`relative z-10 transition-all duration-300 ease-out ${hoveredIndex === index ? 'text-white scale-110' : 'text-neutral-500'}`}>
            {social.icon}
          </span>
          <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-white transition-all duration-300 ease-out ${hoveredIndex === index ? 'w-3 opacity-100' : 'w-0 opacity-0'}`} />
          <span className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-white text-[#050505] text-[11px] font-medium whitespace-nowrap transition-all duration-300 ease-out ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'}`}>
            {social.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rotate-45 bg-white" />
          </span>
        </a>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showCookies, setShowCookies] = useState(() => !localStorage.getItem('cookieConsent'));
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isBlog = location.pathname.startsWith('/blog');

  const acceptCookies = (all: boolean) => {
    localStorage.setItem('cookieConsent', all ? 'all' : 'essential');
    setShowCookies(false);
  };

  const { scrollY } = useScroll();
  const t = CONTENT[lang];

  const heroY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

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
  const navKeys: (keyof typeof t.nav)[] = ['home', 'tourDouro', 'douroADois', 'transfer', 'about', 'reviews', 'blog', 'contact'];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 overflow-x-hidden">
      <CustomCursor />

      {/* ═══════ SCROLL PROGRESS BAR ═══════ */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ═══════ HEADER ═══════ */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${isScrolled || isBlog ? 'bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6 md:py-8'}`}>
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
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors pl-2 font-semibold text-[13px] text-white/70 uppercase tracking-widest" aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
              <Globe size={14} /><span>{lang.toUpperCase()}</span>
            </button>
            <div className="w-px h-5 bg-white/15 mx-1" />
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 normal-case tracking-normal text-white/80 hover:text-white text-[13px] font-medium">
              <MessageCircle size={15} /> WhatsApp
            </a>
            <button onClick={() => scrollTo('contacto')} className="cursor-pointer px-6 py-2.5 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 normal-case tracking-normal font-semibold text-[13px]">
              {t.nav.book}
            </button>
          </div>
          <div className="flex items-center gap-3 xl:hidden z-50 relative">
            <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="cursor-pointer flex items-center gap-1.5 text-sm font-medium text-white/70">
              <Globe size={15} /><span>{lang.toUpperCase()}</span>
            </button>
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
              <BlogPost lang={lang} />
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
              <section id="home" className="relative h-screen w-full overflow-hidden flex items-end pb-24 md:items-center md:pb-0 bg-[#0c0c0c]">
                <motion.div className="absolute inset-0 w-full h-full" style={{ y: heroY, opacity: heroOpacity }}>
                  <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: 'easeOut' }} className="w-full h-full">
                    <img src={IMG.hero} alt="Vista panorâmica dos socalcos e vinhas do Vale do Douro" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-[#0c0c0c]/90" />
                </motion.div>
                <Suspense fallback={null}><LazyVantaFog /></Suspense>
                <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[5]" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 w-full md:text-center md:mt-16">

                  <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="inline-block mb-5 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/50">
                    {t.hero.subtitle}
                  </motion.span>
                  <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] mb-6 tracking-tight">
                    <span className="text-gradient-animate">{t.hero.title1}</span><br />
                    <span className="italic text-white/60">{t.hero.title2}</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl md:mx-auto text-base sm:text-lg text-white/40 mb-10 font-light leading-relaxed">
                    {t.hero.desc}
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col sm:flex-row sm:justify-center items-start sm:items-center gap-3 mb-8">
                    <MagneticButton onClick={() => scrollTo('tour-douro')} className="cta-glow border-beam btn-press cursor-pointer px-7 py-3.5 rounded-full bg-white text-black font-medium">
                      <span className="flex items-center gap-3">{t.hero.cta} <ArrowRight size={18} /></span>
                    </MagneticButton>
                    <MagneticButton href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-press cursor-pointer px-6 py-3.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300">
                      <span className="flex items-center gap-2"><MessageCircle size={16} /> {t.hero.ctaWhatsapp}</span>
                    </MagneticButton>
                  </motion.div>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className="text-[11px] text-white/20 tracking-wide">{t.hero.trustLine}</motion.p>
                </div>
              </section>

              {/* ═══════ QUOTE / POEM ═══════ */}
              <section className="relative py-32 md:py-48 px-6 mt-0 md:mt-10 overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.img
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 15, ease: 'linear' }}
                    viewport={{ once: true }}
                    src={IMG.douroVineyard}
                    alt="Douro Vinhateiro"
                    className="w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Elegant dark overlay */}
                  <div className="absolute inset-0 bg-[#0c0c0c]/80 md:bg-[#0c0c0c]/60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-transparent to-[#0c0c0c] opacity-90" />
                </div>

                <AmbientGlow color="rgba(212,175,55,0.15)" top="50%" left="50%" size={800} />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                  <Reveal>
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.12] mb-8 tracking-tight drop-shadow-2xl">
                      <span className="text-gradient-animate">{t.quote.text1}</span><br />
                      <span className="italic text-white/60">{t.quote.text2}</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4 drop-shadow-md">
                      <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
                      <p className="text-white/80 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium">
                        {t.quote.author}
                      </p>
                      <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* ═══════ TOUR NO DOURO ═══════ */}
              <section id="tour-douro" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
                <AmbientBg src={IMG.ambientRiver} opacity={0.04} position="center 30%" />
                <AmbientGlow color="rgba(139,92,246,0.03)" top="20%" left="80%" size={500} />
                <AmbientGlow color="rgba(212,175,55,0.03)" top="70%" left="20%" size={600} />
                <div className="relative z-10 max-w-7xl mx-auto">
                  <Reveal className="mb-16 md:mb-20 max-w-2xl">
                    <span className="inline-block px-4 py-1.5 border border-amber-500/25 rounded-full text-[11px] tracking-[0.15em] uppercase text-amber-400/70 mb-5">{t.tourDouro.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.tourDouro.title} /></h2>
                    <p className="text-white/40 text-lg font-light leading-relaxed">{t.tourDouro.subtitle}</p>
                  </Reveal>

                  <StaggerContainer className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20 md:mb-24">
                    <StaggerItem className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
                      <img src={IMG.douroVineyard} alt="Vinhas em socalcos no Vale do Douro" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-serif">{t.tourDouro.priceLabel} {t.tourDouro.price}€</span>
                        <span className="text-xs sm:text-sm uppercase tracking-wider text-white/60">/ {t.tourDouro.priceUnit.replace('€/', '')}</span>
                      </div>
                    </StaggerItem>
                    <StaggerItem className="flex flex-col justify-center">
                      <p className="text-white/50 font-light text-base sm:text-lg leading-relaxed mb-6">{t.tourDouro.intro}</p>
                      <p className="text-xs text-white/25 mb-8">{t.tourDouro.priceIncludes}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button onClick={() => scrollTo('contacto')} className="cta-glow cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 transition-all duration-300">{t.tourDouro.ctaBook} <ArrowRight size={14} /></button>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"><MessageCircle size={14} /> {t.tourDouro.ctaWhatsapp}</a>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  {/* Timeline */}
                  <Reveal className="mb-20 md:mb-24">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-14">{t.tourDouro.timelineTitle}</h3>
                    <div className="relative">
                      <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-white/8" />
                      {t.tourDouro.timeline.map((step, i) => (
                        <Reveal key={i} delay={i * 0.08} className="relative flex gap-6 sm:gap-8 pl-2 py-5">
                          <div className="relative z-10 flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#0a0a0a] border border-white/8 flex items-center justify-center text-xs sm:text-sm font-mono text-white/40">{step.time}</div>
                          <div className="pt-2"><h4 className="font-serif text-base sm:text-lg mb-2">{step.title}</h4><p className="text-white/30 font-light leading-relaxed text-sm sm:text-base">{step.desc}</p></div>
                        </Reveal>
                      ))}
                    </div>
                  </Reveal>

                  {/* Gallery + included */}
                  <StaggerContainer className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
                    <StaggerItem>
                      <h3 className="font-serif text-xl sm:text-2xl mb-7">{t.tourDouro.includedTitle}</h3>
                      <BentoBox features={t.tourDouro.included} />
                      <p className="text-xs text-white/20 mt-6 italic font-light">{t.tourDouro.groupNote}</p>
                    </StaggerItem>
                    <StaggerItem className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl overflow-hidden aspect-square"><img src={IMG.wineTasting} alt="Prova de vinhos DOC Douro" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" referrerPolicy="no-referrer" /></div>
                      <div className="rounded-xl overflow-hidden aspect-square"><img src={IMG.boatRide} alt="Passeio de barco no rio" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" referrerPolicy="no-referrer" /></div>
                      <div className="rounded-xl overflow-hidden col-span-2 aspect-[2/1]"><img src={IMG.lunch} alt="Almoço regional" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" referrerPolicy="no-referrer" /></div>
                    </StaggerItem>
                  </StaggerContainer>

                  {/* Practical info */}
                  <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                      { icon: <Clock size={15} />, label: lang === 'pt' ? 'Duração' : 'Duration', value: t.tourDouro.duration },
                      { icon: <Calendar size={15} />, label: lang === 'pt' ? 'Saída' : 'Departure', value: t.tourDouro.departure },
                      { icon: <Users size={15} />, label: lang === 'pt' ? 'Grupo' : 'Group', value: t.tourDouro.groupType },
                      { icon: <Globe size={15} />, label: lang === 'pt' ? 'Idiomas' : 'Languages', value: t.tourDouro.languages },
                      { icon: <Shield size={15} />, label: lang === 'pt' ? 'Cancelamento' : 'Cancellation', value: t.tourDouro.cancellation },
                    ].map((info, i) => (
                      <StaggerItem key={i} className="card-lift bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center backdrop-blur-sm">
                        <div className="text-white/20 mb-2 flex justify-center">{info.icon}</div>
                        <p className="text-[10px] text-white/20 uppercase tracking-[0.15em] mb-1">{info.label}</p>
                        <p className="text-xs sm:text-sm text-white/50 font-light">{info.value}</p>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </section>

              {/* ═══════ DOURO A DOIS ═══════ */}
              <section id="douro-a-dois" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
                <AmbientBg src={IMG.ambientSunset} opacity={0.06} position="center 60%" />
                <AmbientGlow color="rgba(244,63,94,0.04)" top="30%" left="70%" size={600} />
                <AmbientGlow color="rgba(251,191,36,0.03)" top="80%" left="30%" size={500} />
                <div className="relative z-10 max-w-7xl mx-auto">
                  <Reveal className="mb-16 md:mb-20 max-w-2xl">
                    <span className="inline-block px-4 py-1.5 border border-rose-400/25 rounded-full text-[11px] tracking-[0.15em] uppercase text-rose-300/60 mb-5">{t.douroADois.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.douroADois.title} /></h2>
                    <p className="text-white/40 text-lg font-light italic leading-relaxed">{t.douroADois.subtitle}</p>
                  </Reveal>

                  <StaggerContainer className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20 md:mb-24">
                    <StaggerItem className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
                      <img src={IMG.romantic} alt="Casal com pôr-do-sol nos vinhedos do Douro" className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-serif">{t.douroADois.priceLabel} {t.douroADois.price}€</span>
                        <span className="text-xs sm:text-sm uppercase tracking-wider text-white/60">/ {t.douroADois.priceUnit.replace('€/', '')}</span>
                      </div>
                    </StaggerItem>
                    <StaggerItem className="flex flex-col justify-center">
                      <p className="text-white/50 font-light text-base sm:text-lg leading-relaxed mb-4">{t.douroADois.intro}</p>
                      <p className="text-white/30 italic font-light mb-8 text-sm sm:text-base">{t.douroADois.noGroup}</p>
                      <p className="text-xs text-white/20 mb-4">{t.douroADois.bookingNote}</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button onClick={() => scrollTo('contacto')} className="cta-glow border-beam btn-press cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-medium text-sm"><Heart size={14} /> {t.douroADois.ctaBook}</button>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-press cursor-pointer flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"><MessageCircle size={14} /> {t.douroADois.ctaWhatsapp}</a>
                      </div>
                    </StaggerItem>
                  </StaggerContainer>

                  {/* Timeline */}
                  <Reveal className="mb-20 md:mb-24">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-14">{t.douroADois.timelineTitle}</h3>
                    <div className="relative">
                      <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-rose-400/8" />
                      {t.douroADois.timeline.map((step, i) => (
                        <Reveal key={i} delay={i * 0.08} className="relative flex gap-6 sm:gap-8 pl-2 py-5">
                          <div className="relative z-10 flex-shrink-0 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#0a0a0a] border border-rose-400/15 flex items-center justify-center text-xs sm:text-sm font-mono text-rose-300/40">{step.time}</div>
                          <div className="pt-2"><h4 className="font-serif text-base sm:text-lg mb-2">{step.title}</h4><p className="text-white/30 font-light leading-relaxed text-sm sm:text-base">{step.desc}</p></div>
                        </Reveal>
                      ))}
                    </div>
                  </Reveal>

                  {/* Features */}
                  <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-14">
                    <StaggerItem className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 backdrop-blur-sm"><Ship size={22} className="text-rose-300/40 mb-4" /><h3 className="font-serif text-lg mb-3">{t.douroADois.boatTitle}</h3><p className="text-white/35 font-light leading-relaxed text-sm">{t.douroADois.boatDesc}</p></StaggerItem>
                    <StaggerItem className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 backdrop-blur-sm"><Camera size={22} className="text-rose-300/40 mb-4" /><h3 className="font-serif text-lg mb-3">{t.douroADois.photoTitle}</h3><p className="text-white/35 font-light leading-relaxed text-sm mb-3">{t.douroADois.photoDesc}</p><p className="text-[11px] text-white/20 italic">{t.douroADois.photoUpgrade}</p></StaggerItem>
                  </StaggerContainer>

                  <Reveal className="mt-6">
                    <h3 className="font-serif text-3xl sm:text-4xl text-center mb-10">{t.douroADois.includedTitle}</h3>
                    <BentoBox features={t.douroADois.included} />
                  </Reveal>
                </div>
              </section>

              {/* ═══════ TRANSFER ═══════ */}
              <section id="transfer" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden bg-[#0a0a00]">
                <Suspense fallback={null}><LazyVantaWaves /></Suspense>
                <AmbientBg src={IMG.ambientBarrels} opacity={0.04} position="center bottom" />
                <AmbientGlow color="rgba(59,130,246,0.03)" top="40%" left="80%" size={500} />
                <div className="relative z-10 max-w-7xl mx-auto">
                  <Reveal className="mb-16 md:mb-20 max-w-2xl">
                    <span className="inline-block px-4 py-1.5 border border-white/15 rounded-full text-[11px] tracking-[0.15em] uppercase text-white/35 mb-5">{t.transfer.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.transfer.title} /></h2>
                    <p className="text-white/40 text-lg font-light leading-relaxed">{t.transfer.subtitle}</p>
                  </Reveal>
                  <div className="mb-10 max-w-2xl px-2">
                    <ScrollRevealText text={t.transfer.intro} className="text-white/80 font-light text-base sm:text-lg leading-relaxed" />
                  </div>

                  <Reveal className="relative rounded-2xl overflow-hidden mb-14 md:mb-20">
                    <img src={IMG.transfer} alt="Executive Transfer in Portugal" className="w-full h-56 sm:h-72 md:h-96 object-cover transition-transform duration-[2s] ease-out hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0c0c0c] to-transparent pointer-events-none z-20" />
                  </Reveal>

                  <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-14">
                    {t.transfer.features.map((feat, i) => (
                      <StaggerItem key={i} className="card-lift bg-white/[0.03] border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
                        <div className="flex items-center gap-2.5 mb-5">{[<Shield key="s" size={18} className="text-white/25" />, <Car key="c" size={18} className="text-white/25" />, <Users key="u" size={18} className="text-white/25" />][i]}<h3 className="font-serif text-base sm:text-lg">{feat.title}</h3></div>
                        <ul className="space-y-2.5">{feat.items.map((item, j) => (<li key={j} className="flex items-start gap-2 text-sm text-white/35 font-light"><Check size={14} className="text-green-400/60 mt-0.5 flex-shrink-0" />{item}</li>))}</ul>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <StaggerContainer className="grid sm:grid-cols-2 gap-5 mb-14">
                    {t.transfer.services.map((svc, i) => (
                      <StaggerItem key={i} className="card-lift bg-white/[0.03] border border-white/5 rounded-2xl p-6 backdrop-blur-sm"><h3 className="font-serif text-base sm:text-lg mb-3">{svc.title}</h3><p className="text-sm text-white/35 font-light">{svc.desc}</p></StaggerItem>
                    ))}
                  </StaggerContainer>

                  <Reveal className="text-center">
                    <div className="flex items-baseline justify-center gap-2 mb-8"><span className="text-2xl sm:text-3xl font-serif">{t.transfer.priceLabel} {t.transfer.price}€</span><span className="text-xs sm:text-sm uppercase tracking-wider text-white/60">/ {t.transfer.priceUnit.replace('€/', '')}</span></div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button onClick={() => scrollTo('contacto')} className="cta-glow border-beam btn-press cursor-pointer flex items-center gap-2 px-7 py-3.5 bg-white text-black rounded-full font-medium text-sm"><Car size={14} /> {t.transfer.ctaBook}</button>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-press cursor-pointer flex items-center gap-2 px-7 py-3.5 border border-white/15 rounded-full text-sm text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300"><MessageCircle size={14} /> {t.transfer.ctaWhatsapp}</a>
                    </div>
                  </Reveal>
                </div>
              </section>

              {/* ═══════ ABOUT ═══════ */}
              <section id="sobre-nos" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
                <AmbientBg src={IMG.ambientVines} opacity={0.05} position="center 70%" />
                <AmbientGlow color="rgba(251,191,36,0.05)" top="50%" left="50%" size={800} />
                <div className="relative z-10 max-w-7xl mx-auto">
                  <Reveal className="mb-16 md:mb-20">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.about.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-7"><TextReveal text={t.about.title} /></h2>
                    <div className="max-w-2xl px-2">
                      <ScrollRevealText text={t.about.mission} className="text-lg sm:text-xl text-white/80 font-light italic leading-relaxed" />
                    </div>
                  </Reveal>

                  <StaggerContainer className="grid sm:grid-cols-3 gap-5 mb-16 md:mb-20">
                    {t.about.pillars.map((pillar, i) => (
                      <StaggerItem key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 text-center backdrop-blur-sm">
                        <div className="mb-5 flex justify-center">{[<Wine key="w" size={22} className="text-amber-400/50" />, <Heart key="h" size={22} className="text-rose-300/50" />, <Award key="a" size={22} className="text-white/30" />][i]}</div>
                        <h3 className="font-serif text-base sm:text-lg mb-3">{pillar.title}</h3>
                        <p className="text-sm text-white/35 font-light leading-relaxed">{pillar.desc}</p>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <Reveal className="relative rounded-2xl overflow-hidden mb-16 md:mb-20">
                    <img src={IMG.team} alt="Equipa North Scape Tours" className="w-full h-80 sm:h-96 md:h-[550px] object-cover object-bottom" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent flex items-end p-7 sm:p-10 pointer-events-none">
                      <div><h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-3">{t.about.teamTitle}</h3><p className="text-white/45 font-light leading-relaxed max-w-xl text-sm sm:text-base">{t.about.promise}</p></div>
                    </div>
                  </Reveal>

                  <Reveal className="bg-white/[0.03] border border-white/5 rounded-2xl p-7 backdrop-blur-sm">
                    <p className="text-white/40 font-light leading-relaxed">{t.about.teamDesc}</p>
                  </Reveal>
                </div>
              </section>

              {/* ═══════ TESTIMONIALS — scrolling columns ═══════ */}
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

              {/* ═══════ FAQ ═══════ */}
              <section className="py-28 md:py-36 px-6 relative overflow-hidden">
                <AmbientBg src={IMG.ambientBarrels} opacity={0.03} position="center" />
                <AmbientGlow color="rgba(139,92,246,0.03)" top="50%" left="70%" size={500} />
                <div className="relative z-10 max-w-3xl mx-auto">
                  <Reveal className="text-center mb-14">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.faq.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl"><TextReveal text={t.faq.title} /></h2>
                  </Reveal>
                  <div className="space-y-1.5">
                    {t.faq.items.map((item, i) => (
                      <Reveal key={i} delay={i * 0.05}>
                        <div className="border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm">
                          <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="cursor-pointer w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.03] transition-colors duration-300">
                            <span className="font-light text-sm sm:text-base text-white/70">{item.q}</span>
                            <ChevronDown size={16} className={`flex-shrink-0 text-white/20 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openFaq === i && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/35 font-light leading-relaxed text-sm">{item.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>

              {/* ═══════ BLOG ═══════ */}
              <section id="blog" className="py-28 md:py-36 px-6 md:px-12 relative overflow-hidden">
                <AmbientBg src={IMG.ambientVines} opacity={0.04} position="center 40%" />
                <AmbientGlow color="rgba(212,175,55,0.03)" top="30%" left="50%" size={700} />
                <div className="relative z-10 max-w-7xl mx-auto">
                  <Reveal className="mb-16 md:mb-20 max-w-2xl">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">{t.blog.badge}</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-5"><TextReveal text={t.blog.title} /></h2>
                    <p className="text-white/40 text-base sm:text-lg font-light">{t.blog.subtitle}</p>
                  </Reveal>

                  <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {t.blog.items.map((post, i) => (
                      <StaggerItem key={i} className="group cursor-pointer" role="article">
                        <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/5] overflow-hidden rounded-2xl mb-5 bg-white/5">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                          <div className="absolute top-4 left-4"><span className="text-[10px] px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-wider">{post.category}</span></div>
                        </Link>
                        <Link to={`/blog/${post.slug}`}>
                          <h3 className="font-serif text-base sm:text-lg mb-2 group-hover:text-amber-400 transition-colors duration-300">{post.title}</h3>
                        </Link>
                        <p className="text-white/35 font-light text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                        <span className="text-xs text-white/25 font-light">{post.date}</span>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </section>

              {/* ═══════ CTA / CONTACT ═══════ */}
              <section id="contacto" className="py-28 md:py-36 relative overflow-hidden bg-[#0c0c0c]">
                <Suspense fallback={null}><LazyVantaWaves /></Suspense>
                <div className="absolute inset-0 z-0">
                  <img src={IMG.ctaBg} alt="Paisagem do Douro" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-[#0c0c0c]/90" />
                </div>
                <AmbientGlow color="rgba(34,197,94,0.06)" top="50%" left="50%" size={800} />
                <Reveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl mb-7">{t.contact.title}</h2>
                  <p className="text-lg sm:text-xl text-white/45 font-light mb-12 max-w-2xl mx-auto">{t.contact.desc}</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <MagneticButton href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-glow border-beam btn-press cursor-pointer px-9 py-4 sm:py-5 rounded-full bg-green-600 text-white font-medium text-base sm:text-lg transition-all hover:bg-green-500 duration-300">
                      <span className="flex items-center gap-3"><MessageCircle size={20} /> {t.contact.ctaWhatsapp}</span>
                    </MagneticButton>
                    <MagneticButton href={`mailto:${t.contact.email}`} className="btn-press cursor-pointer px-7 py-4 sm:py-5 rounded-full border border-white/15 text-white font-medium text-base sm:text-lg hover:bg-white/5 transition-all duration-300">
                      <span className="flex items-center gap-2"><Mail size={18} /> {t.contact.email}</span>
                    </MagneticButton>
                  </div>

                  {/* Highly Visible Phone Number */}
                  <div className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:-translate-y-1 duration-300">
                    <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white/80 shadow-inner">
                      <Phone size={18} />
                    </div>
                    <div className="text-left flex flex-col justify-center">
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium mb-0.5">{t.contact.phoneLabel}</p>
                      <p className="text-lg sm:text-2xl text-white/95 font-serif tracking-wider">{t.contact.phone}</p>
                    </div>
                  </div>
                </Reveal>
              </section>
            </motion.div>
          } />
          <Route path="/termos" element={<motion.div key="/termos" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}><Terms /></motion.div>} />
          <Route path="/privacidade" element={<motion.div key="/privacidade" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}><Privacy /></motion.div>} />
        </Routes>
      </AnimatePresence>

      {/* ═══════ FOOTER — serif typography, larger logo, social icons ═══════ */}
      <footer className="border-t border-white/8 py-14 md:py-16 px-6 md:px-12 relative overflow-hidden">
        <AmbientGlow color="rgba(212,175,55,0.03)" top="50%" left="50%" size={600} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <img src="/logo-white.png" alt="North Scape Tours" className="h-20 sm:h-24 md:h-28 w-auto opacity-80 mb-4" />
            <p className="font-serif italic text-white/30 text-sm sm:text-base mb-6">{lang === 'pt' ? 'Experiências exclusivas no Norte de Portugal' : 'Exclusive experiences in Northern Portugal'}</p>

            {/* Social Icons — 21st.dev inspired */}
            <SocialIcons />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {navKeys.slice(0, 8).map((key, i) => (
              <button key={key} onClick={() => scrollTo(NAV_IDS[i])} className="cursor-pointer text-xs font-serif tracking-wide text-white/30 hover:text-white/60 transition-colors duration-300">{t.nav[key]}</button>
            ))}
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs font-serif text-white/25 text-center md:text-left">
              <span>{t.footer.licensedIn}</span>
              <span className="opacity-50 hidden md:block">|</span>
              <span>{t.footer.nif}</span>
              <span className="opacity-50 hidden md:block">|</span>
              <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-white/50 transition-colors duration-300 underline decoration-white/20 underline-offset-4">{t.footer.complaints}</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-serif text-white/25">
              <Link to="/termos" className="cursor-pointer hover:text-white/50 transition-colors duration-300">{t.footer.terms}</Link>
              <Link to="/privacidade" className="cursor-pointer hover:text-white/50 transition-colors duration-300">{t.footer.privacy}</Link>
            </div>
          </div>
          <div className="mt-4 text-center text-[10px] font-sans text-white/20">© {new Date().getFullYear()} North Scape Tours. {t.footer.rights}</div>
        </div>
      </footer>

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
