import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Compass } from 'lucide-react';
import { FACEBOOK_PAGE, TIKTOK_PAGE, YOUTUBE_PAGE, GETYOURGUIDE_LINK, WHATSAPP_LINK } from '../content';

/* ──────── Curated Douro Valley Images — Hand-picked Feb 2026 ──────── */
export const IMG = {
  hero: 'https://www.anadventurousworld.com/wp-content/uploads/2017/05/douro-valley-day-trip.jpg',
  douroVineyard: 'https://s27363.pcdn.co/wp-content/uploads/2024/02/Quinta-do-Seixo-Douro-Valley.jpg.optimal.jpg',
  wineTasting: 'https://blog.winetourismportugal.com/hs-fs/hubfs/37QuintaNova1404.jpg?width=1383',
  boatRide: '/images/douro_boat_tour_1771612994491.png',
  lunch: 'https://blog.winetourismportugal.com/hs-fs/hubfs/Enotourism%5B6%5D%20(4).jpg?width=1969',
  romantic: 'https://www.louderthanfire.com/wp-content/uploads/2023/07/Boat-Trip-Marriage-Proposal-Douro-Valley-featured.jpg',
  tailorMade: '/images/tailor-made.png',
  transfer: '/images/transfer_branded.png',
  ctaBg: 'https://images.winalist.com/blog/wp-content/uploads/2024/02/26114506/AdobeStock_106808196.jpeg',
  ambientVines: 'https://s27363.pcdn.co/wp-content/uploads/2024/02/Douro-Valley-Vines.jpg.optimal.jpg',
  ambientBarrels: 'https://images.winalist.com/blog/wp-content/uploads/2024/02/21152357/maksym-kaharlytskyi-5ZmAyIG_OrI-unsplash.jpg',
  ambientRiver: 'https://images.winalist.com/blog/wp-content/uploads/2022/04/26174037/what-to-do-douro-valley-pinhao-winalist.jpeg',
  ambientSunset: 'https://blog.winetourismportugal.com/hs-fs/hubfs/1607627042-portugal-estates-douro-quinta-do-seixo-6.jpg?width=1383',
};

export const NAV_IDS = ['home', 'tours', 'transfer', 'sobre-nos', 'avaliacoes', 'blog', 'contacto'] as const;

/* ─── Chanteclerc-style scroll-reveal animation ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const fadeUpTransition = { duration: 1.0, ease: [0.16, 1, 0.3, 1] };

interface RevealProps { children: React.ReactNode; className?: string; delay?: number;[key: string]: unknown; }
export function Reveal({ children, className = '', delay = 0, ...rest }: RevealProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ ...fadeUpTransition, delay }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

interface StaggerProps { children: React.ReactNode; className?: string;[key: string]: unknown; }
export function StaggerContainer({ children, className = '', ...rest }: StaggerProps) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-20%' }} transition={{ staggerChildren: 0.1 }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className = '', ...rest }: StaggerProps) {
  return (
    <motion.div variants={fadeUp} transition={fadeUpTransition} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

/* ─── Ambient background component ─── */
export function AmbientBg({ src, opacity = 0.15, position = 'center' }: { src: string; opacity?: number; position?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img src={src} alt="" className="w-full h-full object-cover" style={{ opacity, objectPosition: position }} referrerPolicy="no-referrer" aria-hidden="true" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-transparent to-[#0c0c0c]/80" />
    </div>
  );
}

/* ─── Ambient radial glow ─── */
export function AmbientGlow({ color = 'rgba(212,175,55,0.06)', top = '50%', left = '50%', size = 600 }: { color?: string; top?: string; left?: string; size?: number }) {
  return (
    <div className="absolute pointer-events-none" style={{ top, left, width: size, height: size, transform: 'translate(-50%,-50%)', borderRadius: '50%', background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }} aria-hidden="true" />
  );
}

/* ─── Star rating with half-star support ─── */
export function StarRating({ rating, size = 12 }: { rating: number; size?: number }) {
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
export function TextReveal({ text, className = '' }: { text: string; className?: string }) {
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
    href: FACEBOOK_PAGE,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  },
  {
    name: 'TikTok',
    href: TIKTOK_PAGE,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>,
  },
  {
    name: 'YouTube',
    href: YOUTUBE_PAGE,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
  },
  {
    name: 'TripAdvisor',
    href: 'https://tripadvisor.com/northscapetours',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.432 5.976 5.976 0 004.003-1.533l2 2.328 2-2.328a5.976 5.976 0 004.003 1.533 5.997 5.997 0 004.04-10.432L24 6.648h-4.35a15.66 15.66 0 00-7.644-2.353zM6.003 17.215a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.221a2 2 0 100 4 2 2 0 000-4zm11.994 0a2 2 0 100 4 2 2 0 000-4z" /></svg>,
  },
  {
    name: 'GetYourGuide',
    href: GETYOURGUIDE_LINK,
    icon: <Compass size={18} strokeWidth={1.75} className="size-[18px]" />,
  },
  {
    name: 'WhatsApp',
    href: WHATSAPP_LINK,
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
  },
];

export function SocialIcons() {
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
