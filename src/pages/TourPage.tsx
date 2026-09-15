import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Check,
  Clock,
  Car,
  Shield,
  MessageCircle,
  Users,
  Award,
  Calendar,
  Sparkles,
  MapPin,
  ExternalLink,
  ChevronRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTourBySlug, ALL_17_TOURS, VIP_EXTRAS, type TourItem } from '../data/toursData';
import { WHATSAPP_NUMBER, GETYOURGUIDE_LINK } from '../content';
import SEO from '../components/SEO';

export default function TourPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t } = useLanguage();

  const tour: TourItem | undefined = useMemo(() => {
    return slug ? getTourBySlug(slug) : undefined;
  }, [slug]);

  // Selected group size (1 to 8 people)
  const [selectedPax, setSelectedPax] = useState<number>(2);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [travelDate, setTravelDate] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [formSent, setFormSent] = useState<boolean>(false);

  // Scroll to top on mount or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl mb-4">Tour Não Encontrado</h1>
        <p className="text-white/60 mb-8 max-w-md">O tour solicitado não foi encontrado ou o link pode ter sido alterado.</p>
        <Link
          to="/#tours"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all"
        >
          Ver Todos os Tours Privados
        </Link>
      </div>
    );
  }

  // Localized texts helper
  const lKey = lang === 'pt' ? 'pt' : 'en';
  const tourName = tour.name[lKey] || tour.name.pt;
  const tourSubtitle = tour.subtitle[lKey] || tour.subtitle.pt;
  const tourCategory = tour.categoryLabel[lKey] || tour.categoryLabel.pt;
  const tourDuration = tour.duration[lKey] || tour.duration.pt;
  const tourHighlights = tour.highlights[lKey] || tour.highlights.pt;
  const tourIncluded = tour.included[lKey] || tour.included.pt;
  const tourFullDesc = tour.fullDesc[lKey] || tour.fullDesc.pt;

  // Calculate pricing based on selected Pax
  const tierPrice = tour.pricingTiers.find((tier) => tier.pax === selectedPax)?.price ?? tour.startingPrice;
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const extra = VIP_EXTRAS.find((e) => e.id === id);
    return sum + (extra ? extra.price : 0);
  }, 0);
  const totalPrice = tierPrice + extrasTotal;

  // Toggle VIP extra
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // WhatsApp formatted inquiry message
  const extraNames = selectedExtras
    .map((id) => VIP_EXTRAS.find((e) => e.id === id)?.name[lKey])
    .filter(Boolean)
    .join(', ');

  const whatsappMessage = `Olá NORTHÉ! Gostaria de reservar o tour privado:\n\n` +
    `• Tour: ${tour.code} - ${tourName}\n` +
    `• Grupo: ${selectedPax} ${selectedPax === 1 ? 'pessoa' : 'pessoas'} (100% Privado)\n` +
    `• Valor estimado: €${totalPrice}\n` +
    (extraNames ? `• Upgrades VIP selecionados: ${extraNames}\n` : '') +
    (travelDate ? `• Data pretendida: ${travelDate}\n` : '') +
    `\nPoderiam confirmar a disponibilidade? Obrigado!`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(whatsappMessage)}`;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    const subject = encodeURIComponent(`Pedido de Cotação: ${tour.code} - ${tourName} (${selectedPax} pax)`);
    const body = encodeURIComponent(
      `Olá NORTHÉ,\n\n` +
      `Gostaria de solicitar informações/reserva para:\n` +
      `• Tour: ${tour.code} - ${tourName}\n` +
      `• Nome: ${guestName}\n` +
      `• E-mail: ${guestEmail}\n` +
      `• Número de Pessoas: ${selectedPax} pax (Privado)\n` +
      `• Valor Estimado: €${totalPrice}\n` +
      (travelDate ? `• Data Pretendida: ${travelDate}\n` : '') +
      (extraNames ? `• Upgrades VIP: ${extraNames}\n` : '') +
      (guestNotes ? `• Mensagem/Notas: ${guestNotes}\n` : '')
    );
    window.location.href = `mailto:info@northetours.com?subject=${subject}&body=${body}`;
  };

  // Related tours in same region
  const relatedTours = ALL_17_TOURS.filter((t) => t.id !== tour.id && t.category === tour.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20 pt-24 pb-20 overflow-x-hidden">
      <SEO
        title={`${tourName} | NORTHÉ Private Tours`}
        description={tour.shortDesc[lKey] || tour.shortDesc.pt}
        lang={lang}
      />

      {/* Top Breadcrumbs & Back */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link
          to="/#tours"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          {lang === 'pt' ? 'Voltar a Todos os Tours' : 'Back to All Tours'}
        </Link>
        <div className="hidden sm:flex items-center gap-2 text-xs text-white/40">
          <span>NORTHÉ</span>
          <ChevronRight size={12} />
          <span>{tourCategory}</span>
          <ChevronRight size={12} />
          <span className="text-white/80 font-medium truncate max-w-[200px]">{tour.code}</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-4 mb-10">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span className="px-3 py-1 bg-white/10 text-amber-300 font-mono text-xs font-bold rounded-full border border-white/15">
            {tour.code}
          </span>
          <span className="px-3 py-1 bg-amber-500/15 text-amber-200 border border-amber-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full">
            {tourCategory}
          </span>
          <span className="px-3 py-1 bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1.5">
            <Shield size={12} /> {lang === 'pt' ? '100% Tour Privado' : '100% Private Tour'}
          </span>
          {tour.gygVerified && (
            <span className="px-3 py-1 bg-orange-500/15 text-orange-200 border border-orange-500/30 text-[11px] font-semibold uppercase tracking-wider rounded-full flex items-center gap-1">
              <Award size={12} /> GetYourGuide Verified
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 text-balance">
          {tourName}
        </h1>
        <p className="text-lg sm:text-xl text-white/60 font-light max-w-3xl leading-relaxed mb-6">
          {tourSubtitle}
        </p>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center gap-6 py-4 border-y border-white/10 text-xs sm:text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-amber-400" />
            <span>{tourDuration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car size={16} className="text-amber-400" />
            <span>{lang === 'pt' ? 'Recolha e Entrega no Hotel (Porto)' : 'Hotel Pickup & Drop-off (Porto)'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-amber-400" />
            <span>{lang === 'pt' ? 'Grupo Fechado de 1 a 8 Pessoas' : 'Private Party of 1 to 8 Guests'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-green-400" />
            <span>{lang === 'pt' ? 'Cancelamento Gratuito até 48h' : 'Free Cancellation up to 48h'}</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Content (Left) + Booking Box (Right) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-14 items-start">
        {/* Left Column: Visuals & Rich Info */}
        <div className="space-y-10">
          {/* Main Photo Banner */}
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/10] border border-white/10 shadow-2xl">
            <img
              src={tour.image}
              alt={tourName}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-white/70">
              <span className="font-mono uppercase tracking-widest">{tour.code} · NORTHÉ Signature</span>
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                {lang === 'pt' ? 'Viatura Executiva & Sommelier Guia' : 'Executive Vehicle & Wine Guide'}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {lang === 'pt' ? 'A Experiência' : 'The Experience'}
            </h2>
            <div className="space-y-4 text-white/70 font-light leading-relaxed text-base sm:text-lg">
              {tourFullDesc.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {lang === 'pt' ? 'Destaques do Tour' : 'Tour Highlights'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tourHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-white/80 font-light">
                  <div className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={13} />
                  </div>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div className="bg-white/[0.02] border border-white/8 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6 text-white">
              {lang === 'pt' ? 'O Que Está Incluído' : 'What is Included'}
            </h2>
            <div className="space-y-3.5">
              {tourIncluded.map((inc, i) => (
                <div key={i} className="flex items-start gap-3.5 text-sm sm:text-base text-white/80 font-light">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Add-ons Upgrade */}
          <div className="bg-gradient-to-br from-white/[0.04] to-amber-500/[0.03] border border-amber-500/20 rounded-3xl p-7 sm:p-9 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-2">
              <Sparkles size={14} />
              <span>{lang === 'pt' ? 'Upgrades VIP Disponíveis' : 'VIP Upgrades Available'}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl mb-3 text-white">
              {lang === 'pt' ? 'Personalize o Seu Dia Especial' : 'Customize Your Special Journey'}
            </h2>
            <p className="text-sm text-white/60 font-light mb-6">
              {lang === 'pt'
                ? 'Celebre aniversários, propostas de casamento ou momentos únicos adicionando serviços exclusivos:'
                : 'Celebrate birthdays, marriage proposals or milestone occasions by adding exclusive private services:'}
            </p>

            <div className="space-y-3">
              {VIP_EXTRAS.map((extra) => {
                const isChecked = selectedExtras.includes(extra.id);
                return (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${
                      isChecked
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(212,175,55,0.1)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 rounded text-amber-400 bg-black/40 border-white/20 focus:ring-0 cursor-pointer"
                      />
                      <div>
                        <h4 className="font-medium text-white text-base">
                          {extra.name[lKey] || extra.name.pt}
                        </h4>
                        <p className="text-xs text-amber-300/80 mb-1 font-mono">
                          {extra.tagline[lKey] || extra.tagline.pt}
                        </p>
                        <p className="text-xs text-white/50 font-light leading-relaxed">
                          {extra.desc[lKey] || extra.desc.pt}
                        </p>
                      </div>
                    </div>
                    <span className="font-serif text-lg text-amber-300 whitespace-nowrap">
                      +€{extra.price}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Booking Calculator (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-28 space-y-6">
          <div className="bg-[#111111] border border-white/15 rounded-3xl p-7 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 block mb-0.5">
                  {lang === 'pt' ? 'Preço Total do Grupo' : 'Total Group Price'}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl text-white">€{totalPrice}</span>
                  <span className="text-xs text-white/50">
                    {lang === 'pt' ? `para ${selectedPax} ${selectedPax === 1 ? 'pessoa' : 'pessoas'}` : `for ${selectedPax} ${selectedPax === 1 ? 'guest' : 'guests'}`}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 inline-block">
                  {lang === 'pt' ? '100% Privado' : '100% Private'}
                </span>
                <p className="text-[10px] text-white/40 mt-1">
                  {lang === 'pt' ? 'Sem grupos externos' : 'No shared guests'}
                </p>
              </div>
            </div>

            {/* Interactive Group Size Selector (1 to 8 people) */}
            <div className="py-6 border-b border-white/10">
              <label className="text-xs uppercase tracking-widest text-white/60 font-medium block mb-3">
                {lang === 'pt' ? 'Selecione o Número de Pessoas (1 a 8):' : 'Select Party Size (1 to 8 Guests):'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((pax) => {
                  const isSelected = selectedPax === pax;
                  const paxTier = tour.pricingTiers.find((t) => t.pax === pax);
                  return (
                    <button
                      key={pax}
                      type="button"
                      onClick={() => setSelectedPax(pax)}
                      className={`cursor-pointer py-2.5 px-2 rounded-xl text-center transition-all duration-200 border ${
                        isSelected
                          ? 'bg-white text-black font-bold border-white shadow-lg scale-[1.02]'
                          : 'bg-white/[0.04] text-white/70 border-white/10 hover:border-white/30 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="text-sm font-medium">{pax} {pax === 1 ? (lang === 'pt' ? 'Pessoa' : 'Pax') : (lang === 'pt' ? 'Pessoas' : 'Pax')}</div>
                      {paxTier && (
                        <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-black/70 font-semibold' : 'text-amber-400/80'}`}>
                          €{paxTier.price}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-white/40 mt-3 flex items-center gap-1.5">
                <Check size={12} className="text-emerald-400" />
                {lang === 'pt'
                  ? 'Veículo executivo privado de uso exclusivo para o seu grupo.'
                  : 'Executive private vehicle exclusively reserved for your party.'}
              </p>
            </div>

            {/* Date Selection */}
            <div className="py-5 border-b border-white/10">
              <label className="text-xs uppercase tracking-widest text-white/60 font-medium block mb-2">
                {lang === 'pt' ? 'Data Pretendida (Opcional):' : 'Preferred Tour Date (Optional):'}
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              {/* WhatsApp Direct CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.5)] cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>{lang === 'pt' ? 'Reservar via WhatsApp' : 'Book via WhatsApp'}</span>
              </a>

              {/* GetYourGuide Verified Option */}
              {tour.gygVerified && (
                <a
                  href={tour.gygUrl || GETYOURGUIDE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl border border-white/15 hover:border-orange-500/40 hover:bg-orange-500/[0.04] text-white/80 hover:text-white text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Award size={15} className="text-orange-400" />
                  <span>{lang === 'pt' ? 'Disponível no GetYourGuide' : 'Also on GetYourGuide'}</span>
                  <ExternalLink size={13} className="opacity-50" />
                </a>
              )}
            </div>

            {/* Reassurance Footer */}
            <div className="mt-6 pt-5 border-t border-white/10 space-y-2 text-[11px] text-white/50">
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{lang === 'pt' ? 'Cancelamento gratuito até 48h antes da partida' : 'Free cancellation up to 48 hours prior to departure'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{lang === 'pt' ? 'Garantia do melhor preço com reserva direta NORTHÉ' : 'Best rate guarantee when booking direct with NORTHÉ'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={13} className="text-emerald-400 flex-shrink-0" />
                <span>{lang === 'pt' ? 'Empresa licenciada em Portugal · RNAAT 284/2026' : 'Fully licensed in Portugal · RNAAT 284/2026'}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-sm">
            <h3 className="font-serif text-xl mb-1 text-white">
              {lang === 'pt' ? 'Prefere contacto por e-mail?' : 'Prefer email contact?'}
            </h3>
            <p className="text-xs text-white/50 mb-5 font-light">
              {lang === 'pt' ? 'Respondemos ao seu pedido em menos de 2 horas úteis.' : 'We reply to all bespoke requests within 2 business hours.'}
            </p>

            {formSent ? (
              <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                <CheckCircle2 size={18} />
                <span>
                  {lang === 'pt'
                    ? 'Mensagem enviada com sucesso! A equipa NORTHÉ entrará em contacto brevemente.'
                    : 'Message sent! The NORTHÉ team will contact you shortly.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'pt' ? 'O seu nome completo' : 'Your full name'}
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/30"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={lang === 'pt' ? 'O seu e-mail de contacto' : 'Your email address'}
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/30"
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder={lang === 'pt' ? 'Notas adicionais ou pedidos especiais...' : 'Additional notes or special requests...'}
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors placeholder:text-white/30 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-black font-semibold rounded-xl text-xs hover:bg-white/90 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={13} />
                  <span>{lang === 'pt' ? 'Enviar Pedido de Cotação' : 'Send Inquiry Request'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Related Tours Section */}
      {relatedTours.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-white/10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-amber-400/80 font-medium block mb-1">
                {tourCategory}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                {lang === 'pt' ? 'Outras Experiências Privadas na Região' : 'Other Private Journeys in this Region'}
              </h3>
            </div>
            <Link
              to="/#tours"
              className="text-xs uppercase tracking-widest font-semibold text-white/50 hover:text-white transition-colors"
            >
              {lang === 'pt' ? 'Ver Todos (17) →' : 'View All (17) →'}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedTours.map((rel) => (
              <Link
                key={rel.id}
                to={`/tours/${rel.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.02] border border-white/8 hover:border-amber-500/40 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.name[lKey] || rel.name.pt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-amber-300 border border-white/10">
                      {rel.code}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-serif text-lg text-white group-hover:text-amber-200 transition-colors mb-1 line-clamp-2">
                    {rel.name[lKey] || rel.name.pt}
                  </h4>
                  <p className="text-xs text-white/50 font-light line-clamp-2 mb-4">
                    {rel.subtitle[lKey] || rel.subtitle.pt}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/5 flex items-baseline justify-between">
                    <span className="text-[11px] text-white/40">
                      {lang === 'pt' ? 'Desde' : 'From'} <strong className="font-serif text-base text-white">€{rel.startingPrice}</strong>
                    </span>
                    <span className="text-xs text-amber-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {lang === 'pt' ? 'Ver Tour' : 'Explore'} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
