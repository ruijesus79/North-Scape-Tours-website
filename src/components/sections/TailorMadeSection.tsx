import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Car, Wine, Compass, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientGlow } from '../../utils/shared';

const BENTO_FEATURES = {
  pt: {
    fleetTitle: 'Frota Executiva Mercedes-Benz',
    fleetDesc: 'Viaturas de luxo com climatização individual, Wi-Fi 5G, água mineral fresca e silêncio absoluto de rodagem.',
    guideTitle: 'Guia-Especialista & Sommelier',
    guideDesc: 'Acompanhamento por profissionais experientes e fluentes, conhecedores profundos dos vinhos e tradições locais.',
    flexTitle: 'Privacidade & Ritmo à Sua Medida',
    flexDesc: 'Sem grupos partilhados nem itinerários rígidos. A sua curiosidade e tempo ditam a cadência de cada momento.',
    destinationsHeading: 'Destinos à Escolha',
  },
  en: {
    fleetTitle: 'Executive Mercedes-Benz Fleet',
    fleetDesc: 'Top-tier luxury vehicles with privacy glass, high-speed Wi-Fi, chilled water, and superior ride comfort.',
    guideTitle: 'Local Wine Expert & Sommelier',
    guideDesc: 'Certified, multilingual specialists with deep knowledge of Portuguese terroirs, heritage, and hidden estates.',
    flexTitle: '100% Bespoke Private Pace',
    flexDesc: 'No shared coaches, no rushed schedules. Your personal preferences dictate every scenic stop and tasting.',
    destinationsHeading: 'Destinations of Choice',
  },
  es: {
    fleetTitle: 'Flota Ejecutiva Mercedes-Benz',
    fleetDesc: 'Vehículos de alta gama con cristales tintados, Wi-Fi 5G, agua mineral fresca y máximo confort acústico.',
    guideTitle: 'Guía Especialista y Sumiller',
    guideDesc: 'Profesionales multilingües con amplio conocimiento de los mejores vinos y bodegas históricas de Portugal.',
    flexTitle: 'Privacidad y Ritmo a su Medida',
    flexDesc: 'Sin grupos compartidos ni prisas. Su curiosidad y disponibilidad marcan el compás de cada momento.',
    destinationsHeading: 'Destinos a su Elección',
  },
  fr: {
    fleetTitle: 'Flotte Exécutive Mercedes-Benz',
    fleetDesc: 'Véhicules de prestige avec climatisation indépendante, Wi-Fi haut débit, eau fraîche et silence absolu.',
    guideTitle: 'Guide Spécialiste & Sommelier',
    guideDesc: 'Experts multilingues passionnés par les grands crus, les domaines familiaux et l’histoire secrète du Portugal.',
    flexTitle: 'Intimité & Rythme Sur Mesure',
    flexDesc: 'Sans groupe partagé ni contrainte d’horaire. Vos envies personnelles déterminent chaque étape du parcours.',
    destinationsHeading: 'Destinations au Choix',
  },
  de: {
    fleetTitle: 'Executive Mercedes-Benz Flotte',
    fleetDesc: 'Erstklassige Fahrzeuge mit individueller Klimatisierung, schnellem WLAN, frischem Wasser und leisem Fahrkomfort.',
    guideTitle: 'Lokaler Weinexperte & Sommelier',
    guideDesc: 'Mehrsprachige Spezialisten mit profundem Wissen über Quintas, Weinherstellung und portugiesische Kultur.',
    flexTitle: '100% Privates Reisetempo',
    flexDesc: 'Keine fremden Reisegruppen, keine Eile. Ihre Wünsche und Ihr Zeitplan definieren jeden einzelnen Genussmoment.',
    destinationsHeading: 'Wählbare Destinationen',
  },
};

export default function TailorMadeSection({ scrollTo }: { scrollTo: (id: string) => void }) {
  const { lang, t } = useLanguage();
  const bento = BENTO_FEATURES[lang as keyof typeof BENTO_FEATURES] || BENTO_FEATURES.pt;

  return (
    <section className="py-24 md:py-32 px-5 sm:px-8 md:px-12 relative overflow-hidden bg-[#0a0a0a]">
      <AmbientGlow color="rgba(212,175,55,0.06)" top="30%" left="50%" size={850} />
      <AmbientGlow color="rgba(16,185,129,0.03)" top="75%" left="80%" size={550} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/25 bg-amber-500/10 rounded-full text-[11px] tracking-[0.2em] uppercase text-amber-300 font-semibold mb-6">
              <Sparkles size={12} className="text-amber-400" />
              {t.tailorMade.badge}
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-[1.12]">
              <span className="text-gradient-animate block">{t.tailorMade.title}</span>
              {t.tailorMade.subtitle && (
                <span className="italic text-white/70 block text-xl sm:text-2xl md:text-3xl font-light mt-2">
                  {t.tailorMade.subtitle}
                </span>
              )}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-white/60 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
              {t.tailorMade.desc}
            </p>
          </Reveal>
        </div>

        {/* ═══════ BENTO GRID (Inspiration: bentogrids.com & unsection.com) ═══════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {/* Card 1: Main Panoramic Experience (Spans 2 columns on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-7 sm:p-9 flex flex-col justify-between min-h-[340px] md:col-span-2 lg:col-span-2 shadow-[0_10px_35px_rgba(0,0,0,0.5)]"
          >
            <img
              src={IMG.tailorMade}
              alt="Bespoke luxury experience"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-300 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/20">
                {t.tailorMade.collection}
              </span>
              <span className="text-xs font-serif italic text-white/50 hidden sm:inline">
                Porto · Douro · Minho
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-20">
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 group-hover:text-amber-200 transition-colors">
                {t.tailorMade.collectionDesc}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                {bento.flexDesc}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Mercedes-Benz Executive Fleet */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                <Car size={22} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 group-hover:text-amber-200 transition-colors">
                {bento.fleetTitle}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                {bento.fleetDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              100% Frota Própria & Segurada
            </div>
          </motion.div>

          {/* Card 3: Sommelier & Certified Guide */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-7 sm:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                <Wine size={22} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 group-hover:text-amber-200 transition-colors">
                {bento.guideTitle}
              </h3>
              <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                {bento.guideDesc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Fluente em PT · EN · ES · FR · DE
            </div>
          </motion.div>

          {/* Card 4: Destinations & Customized Itinerary (Spans 2 cols on lg) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-7 sm:p-8 flex flex-col justify-between md:col-span-2 lg:col-span-2 shadow-[0_10px_35px_rgba(0,0,0,0.4)]"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Compass size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white">
                    {bento.destinationsHeading}
                  </h3>
                  <span className="text-[11px] text-white/40 font-light">
                    Itinerários flexíveis à partida do Porto
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {t.tailorMade.destinations.map((dest, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/70 font-light hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-200 transition-all duration-300"
                  >
                    <MapPin size={11} className="text-amber-400/70" />
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-white/50 font-serif italic">
                {bento.flexTitle}
              </span>
              <button
                onClick={() => scrollTo('contacto')}
                className="cta-glow border-beam btn-press cursor-pointer inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wide uppercase hover:bg-white/95 transition-all"
              >
                <span>{t.tailorMade.cta}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
