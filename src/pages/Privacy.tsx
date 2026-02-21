import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';

export default function Privacy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20">
            <CustomCursor />

            <header className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-[1500px] mx-auto px-6 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer mr-6">
                        <ArrowLeft size={20} /> <span className="text-sm font-medium tracking-wide">Voltar</span>
                    </Link>
                    <img src="/logo-white.png" alt="North Scape Tours" className="h-10 mx-auto opacity-80" />
                    <div className="w-20" /> {/* Spacer */}
                </div>
            </header>

            <main className="py-36 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-serif text-3xl sm:text-5xl mb-10 pb-6 border-b border-white/10">Política de Privacidade</h1>

                    <div className="space-y-8 text-white/70 font-light leading-relaxed text-sm sm:text-base">
                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">1. Identificação do Responsável de Tratamento</h2>
                            <p>A entidade responsável pelo tratamento de dados é a "North Scape Tours" (NIF: 247 114 430), com sede em Portugal. Comprometemo-nos com a proteção de dados pessoais, cumprindo estritamente as normativas do RGPD Europeu (Regulamento de Proteção de Dados de Caráter Pessoal).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">2. Recolha e Finalidade</h2>
                            <p>Não dispomos de formulários de venda diretos. Os dados fornecidos aquando de reservas ou contacto via e-mail e WhatsApp (nome completo, número de telemóvel, preferências dietéticas) servem o exclusivo propósito de organizar as logísticas do tour de forma 100% personalizada por cliente.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">3. Partilha Externa</h2>
                            <p>Alguns dados essenciais poderão ser comunicados apenas aos parceiros logísticos (Quintadas e Restaurantes) sob o critério de intolerâncias/alergias alimentares ou adaptações de viaturas.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">4. Política de Cookies</h2>
                            <p>O Website usa tecnologia Cookie, exclusivamente com propósito técnico e analítico (Google Analytics) para entendermos o perfil do nosso visitante. Na primeira visita, foi inquirido do seu consentimento explícito em concordância com a Diretiva CE/PE de proteção da e-Privacy. Pode remover este consentimento ou apagar o histórico de sessão no seu Web Browser a qualquer tempo.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">5. Retenção e Direitos</h2>
                            <p>Mantemos a informação de clientes apenas durante o tempo útil do serviço ou mandato tributário de faturação obrigatório. Mediante a submissão de um e-mail escrito a <a href="mailto:northscapetours@gmail.com" className="text-white hover:underline">northscapetours@gmail.com</a>, o cliente tem direito de pedir Acesso, Portabilidade ou Apagamento ('Right to be Forgotten').</p>
                        </section>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
