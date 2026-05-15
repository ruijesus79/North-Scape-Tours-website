import React, { lazy, Suspense } from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientGlow } from '../../utils/shared';
import MagneticButton from '../MagneticButton';
import { WHATSAPP_LINK } from '../../content';

// @ts-ignore
const LazyVantaWaves = lazy(() => import('../VantaWaves'));

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-28 md:py-36 relative overflow-hidden bg-[#0c0c0c]">
      <Suspense fallback={null}><LazyVantaWaves /></Suspense>
      <div className="absolute inset-0 z-0">
        <img src={IMG.ctaBg} alt="Paisagem do Douro" className="w-full h-full object-cover opacity-15 mix-blend-luminosity" referrerPolicy="no-referrer" loading="lazy" />
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
  );
}
