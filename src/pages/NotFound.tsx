import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Compass, MessageCircle, Home, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import { useLanguage } from '../contexts/LanguageContext';
import { getWhatsAppLink, type Language } from '../content';
import { AmbientGlow, IMG } from '../utils/shared';
import SEO from '../components/SEO';

const NOT_FOUND_TEXT: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  desc: string;
  homeBtn: string;
  douroBtn: string;
  conciergeBtn: string;
  conciergeOnline: string;
}> = {
  pt: {
    badge: 'Rota Não Encontrada',
    title: 'Parece que este trilho ainda não foi desbravado.',
    subtitle: 'Erro 404 — Página Não Encontrada',
    desc: 'O endereço que procura não existe ou mudou de rumo. No entanto, os socalcos sagrados do Vale do Douro, a nobreza do Porto e os segredos do Norte de Portugal continuam à sua espera.',
    homeBtn: 'Página Inicial',
    douroBtn: 'Explorar Tours no Douro',
    conciergeBtn: 'Falar com o Concierge',
    conciergeOnline: 'Concierge VIP Online · Resposta imediata',
  },
  en: {
    badge: 'Unmapped Route',
    title: 'It seems this private trail remains undiscovered.',
    subtitle: 'Error 404 — Page Not Found',
    desc: 'The page you seek does not exist or has been relocated. Yet the terraced vineyards of the Douro, the historic charm of Porto, and the hidden sanctuaries of Northern Portugal await your arrival.',
    homeBtn: 'Back to Home',
    douroBtn: 'Explore Douro Tours',
    conciergeBtn: 'Speak with Concierge',
    conciergeOnline: 'VIP Concierge Online · Immediate reply',
  },
  es: {
    badge: 'Ruta No Encontrada',
    title: 'Parece que este camino exclusivo aún no ha sido explorado.',
    subtitle: 'Error 404 — Página No Encontrada',
    desc: 'La dirección solicitada no existe o ha cambiado. Sin embargo, los majestuosos bancales del Duero, la historia de Oporto y las joyas del Norte de Portugal siguen a su disposición.',
    homeBtn: 'Volver al Inicio',
    douroBtn: 'Explorar Tours en el Duero',
    conciergeBtn: 'Hablar con el Concierge',
    conciergeOnline: 'Concierge VIP Online · Respuesta inmediata',
  },
  fr: {
    badge: 'Itinéraire Introuvable',
    title: 'Il semble que ce sentier secret reste encore inexploré.',
    subtitle: 'Erreur 404 — Page Non Trouvée',
    desc: "L'adresse que vous cherchez n'existe pas ou a été déplacée. Pourtant, les terrasses séculaires du Douro, l'élégance de Porto et les mystères du Nord du Portugal vous attendent.",
    homeBtn: "Retour à l'Accueil",
    douroBtn: 'Découvrir les Circuits Douro',
    conciergeBtn: 'Contacter le Concierge',
    conciergeOnline: 'Concierge VIP En Ligne · Réponse immédiate',
  },
  de: {
    badge: 'Unbekannte Route',
    title: 'Dieser exklusive Pfad scheint noch unentdeckt zu sein.',
    subtitle: 'Fehler 404 — Seite Nicht Gefunden',
    desc: 'Die gewünschte Seite existiert nicht oder wurde verschoben. Doch die sonnenverwöhnten Terrassen des Douro-Tals, die Eleganz von Porto und die Schätze Nordportugals warten auf Sie.',
    homeBtn: 'Zur Startseite',
    douroBtn: 'Douro Touren entdecken',
    conciergeBtn: 'Concierge kontaktieren',
    conciergeOnline: 'VIP Concierge Online · Sofortige Antwort',
  },
};

export default function NotFound() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const content = NOT_FOUND_TEXT[lang] || NOT_FOUND_TEXT.pt;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleDouroClick = () => {
    navigate('/');
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('northe_select_category', { detail: 'douro' }));
      document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 relative overflow-hidden flex flex-col justify-between">
      <CustomCursor />
      <SEO
        title="404 — Página Não Encontrada | NORTHÉ"
        description="A página solicitada não foi encontrada. Explore os tours privados e experiências exclusivas da NORTHÉ no Douro, Porto e Norte de Portugal."
        lang={lang}
        image="/logo-white.png"
        url="https://northetours.com/404"
      />

      {/* Atmospheric Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMG.douroVineyard}
          alt="Vale do Douro"
          className="w-full h-full object-cover opacity-15 filter grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/80 via-[#0c0c0c]/90 to-[#0c0c0c]" />
        <AmbientGlow color="rgba(212,175,55,0.08)" top="35%" left="50%" size={700} />
      </div>

      {/* Minimal Header */}
      <header className="relative z-10 py-6 px-6 sm:px-12 flex items-center justify-between border-b border-white/5 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer" aria-label="NORTHÉ Início">
          <img
            src="/logo-white.png"
            alt="NORTHÉ Private Tours"
            className="h-10 sm:h-12 w-auto opacity-85 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>{content.homeBtn}</span>
        </Link>
      </header>

      {/* Central Content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-6 backdrop-blur-md">
            <Sparkles size={13} className="text-amber-400" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-300 font-semibold font-mono">
              {content.badge}
            </span>
          </div>

          {/* Grand 404 Monumental Watermark */}
          <div className="select-none font-serif text-7xl sm:text-9xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/5 to-transparent mb-2 leading-none">
            404
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white mb-5 leading-tight tracking-tight">
            {content.title}
          </h1>

          {/* Subtitle / Explanation */}
          <p className="text-white/65 font-light text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            {content.desc}
          </p>

          {/* Interactive Route Recovery Actions (cta.gallery inspiration) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-lg mx-auto mb-10">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide uppercase shadow-[0_4px_25px_rgba(255,255,255,0.18)] hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Home size={15} />
              <span>{content.homeBtn}</span>
            </Link>

            <button
              onClick={handleDouroClick}
              className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-medium text-xs sm:text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Compass size={15} />
              <span>{content.douroBtn}</span>
            </button>
          </div>

          {/* Live Concierge Recovery Strip */}
          <div className="pt-6 border-t border-white/5 flex flex-col items-center gap-2.5">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400/90 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {content.conciergeOnline}
            </span>
            <a
              href={getWhatsAppLink(lang, 'Olá NORTHÉ, perdi-me no site e gostaria de saber mais sobre as experiências privadas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
            >
              <MessageCircle size={14} className="text-emerald-400" />
              <span>{content.conciergeBtn} →</span>
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
