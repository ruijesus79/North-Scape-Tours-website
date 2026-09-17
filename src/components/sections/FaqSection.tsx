import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, HelpCircle, Search, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { IMG, Reveal, AmbientBg, AmbientGlow, TextReveal } from '../../utils/shared';
import { getWhatsAppLink } from '../../content';

export default function FaqSection() {
  const { lang, t } = useLanguage();
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = (t.faq as any).categories || [
    { id: 'all', label: 'Todas as Dúvidas' },
  ];

  // Filter items by category and search query
  const filteredItems = useMemo(() => {
    return t.faq.items.filter((item: any) => {
      const matchCat = selectedCat === 'all' || item.category === selectedCat;
      const qLower = searchQuery.toLowerCase().trim();
      const matchQuery =
        !qLower ||
        item.q.toLowerCase().includes(qLower) ||
        item.a.toLowerCase().includes(qLower);
      return matchCat && matchQuery;
    });
  }, [t.faq.items, selectedCat, searchQuery]);

  // JSON-LD Schema for Google FAQPage Rich Results
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: t.faq.items.map((item: any) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    };
  }, [t.faq.items]);

  return (
    <section id="faq" className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden bg-[#0c0c0c]">
      {/* Schema.org JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AmbientBg src={IMG.ambientBarrels} opacity={0.03} position="center" />
      <AmbientGlow color="rgba(212,175,55,0.05)" top="40%" left="70%" size={600} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 mb-4">
            <HelpCircle size={13} className="text-amber-400" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-300 font-semibold">
              {t.faq.badge}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            <TextReveal text={t.faq.title} />
          </h2>
          {(t.faq as any).subtitle && (
            <p className="text-white/65 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {(t.faq as any).subtitle}
            </p>
          )}
        </Reveal>

        {/* Category Pills & Search */}
        <div className="mb-8 space-y-4">
          {/* Search input */}
          <div className="relative max-w-xl mx-auto">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaq(0);
              }}
              placeholder={(t.faq as any).searchPlaceholder || 'Pesquisar dúvidas...'}
              className="w-full pl-11 pr-10 py-3 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 focus:border-amber-400/60 focus:bg-white/[0.06] text-white placeholder-white/40 text-xs sm:text-sm transition-all duration-200 outline-none backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="cursor-pointer absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white p-1"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none justify-start md:justify-center flex-nowrap md:flex-wrap px-1">
            {categories.map((cat: any) => {
              const isSelected = selectedCat === cat.id;
              const count =
                cat.id === 'all'
                  ? t.faq.items.length
                  : t.faq.items.filter((it: any) => it.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCat(cat.id);
                    setOpenFaq(0);
                  }}
                  className={`cursor-pointer flex-shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border ${
                    isSelected
                      ? 'bg-amber-400 text-black border-amber-300 font-semibold shadow-[0_4px_20px_rgba(251,191,36,0.25)]'
                      : 'bg-white/[0.03] text-white/70 hover:text-white hover:bg-white/[0.07] border-white/10'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-white/60'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-3xl">
            <p className="text-white/60 text-sm mb-4">
              {(t.faq as any).noResults || 'Nenhuma pergunta encontrada.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCat('all');
              }}
              className="cursor-pointer text-xs uppercase tracking-widest text-amber-300 hover:text-amber-200 border-b border-amber-400/40 pb-1"
            >
              {(t.faq as any).clearSearch || 'Limpar pesquisa'}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredItems.map((item: any, i: number) => {
              const isOpen = openFaq === i;
              return (
                <Reveal key={item.q} delay={Math.min(i * 0.03, 0.3)}>
                  <div
                    className={`rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-sm ${
                      isOpen
                        ? 'bg-white/[0.05] border-amber-500/40 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
                        : 'bg-white/[0.02] border-white/8 hover:border-amber-500/30 hover:bg-white/[0.035]'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="cursor-pointer w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs text-amber-400/80 font-bold mt-0.5 select-none">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-sm sm:text-base leading-snug transition-colors duration-200 ${
                            isOpen ? 'text-white font-medium' : 'text-white/85 hover:text-white font-light'
                          }`}
                        >
                          {item.q}
                        </span>
                      </div>
                      <div
                        className={`flex items-center justify-center size-8 rounded-full border transition-all duration-300 flex-shrink-0 ${
                          isOpen
                            ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 rotate-180'
                            : 'border-white/10 bg-white/[0.03] text-white/50'
                        }`}
                      >
                        <ChevronDown size={15} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 pl-11 sm:pl-12">
                            <p className="text-white/80 font-light leading-relaxed text-sm sm:text-[15px]">
                              {item.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Bottom WhatsApp Direct Help Card */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative rounded-3xl overflow-hidden p-7 sm:p-8 bg-gradient-to-br from-white/[0.04] to-amber-500/[0.04] border border-amber-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <Sparkles size={13} className="text-amber-400" />
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                  {(t.faq as any).badge || 'FAQ'} · NORTHÉ
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                {(t.faq as any).whatsappTitle || 'Ainda tem alguma dúvida sobre a sua experiência?'}
              </h3>
              <p className="text-xs sm:text-sm text-white/65 font-light max-w-xl leading-relaxed">
                {(t.faq as any).whatsappSubtitle ||
                  'Fale diretamente com a NORTHÉ. Teremos todo o gosto em ajudar a encontrar a experiência, o itinerário e as opções mais adequadas ao seu grupo.'}
              </p>
            </div>
            <a
              href={getWhatsAppLink(lang, (t.faq as any).whatsappTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 cursor-pointer inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle size={17} />
              <span>{(t.faq as any).whatsappBtn || 'Falar no WhatsApp'}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

