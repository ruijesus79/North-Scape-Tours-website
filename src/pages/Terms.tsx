import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';

export default function Terms() {
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
                    <h1 className="font-serif text-3xl sm:text-5xl mb-10 pb-6 border-b border-white/10">Termos e Condições</h1>

                    <div className="space-y-8 text-white/70 font-light leading-relaxed text-sm sm:text-base">
                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">1. Identidade da Empresa</h2>
                            <p>O serviço da "North Scape Tours" é operado em conformidade com as leis do estado Português, atuando como Agência de Animação Turística, com o número de registo RNAVT 11959. O nosso número fiscal (NIF) é 247 114 430.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">2. Reservas e Confirmação</h2>
                            <p>As reservas são confirmadas mediante o pagamento de um sinal prévio acordado com a agência. A disponibilidade imediata das atividades (ex: restaurante ou barco) requer validação logística pela nossa equipa antes da cobrança.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">3. Política de Cancelamento e Reembolso</h2>
                            <p>Oferecemos cancelamento 100% gratuito (reembolso integral) se notificado até 48 horas de antecedência do horário de início do tour. Menos de 48 horas resultarão na retenção total do valor para cobrir logísticas incontornáveis com os nossos parceiros locais.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">4. Alterações ao Itinerário</h2>
                            <p>A North Scape Tours reserva-se o direito de alterar itinerários devido a condições meteorológicas severas, instruções das autoridades de trânsito locais, ou encerramentos extemporâneos nas quintas/restaurantes fora do nosso controlo, providenciando alternativas do mesmo nível ou superior.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">5. Responsabilidades</h2>
                            <p>Todas as nossas viaturas executivas e os tours operam sob um teto de seguros de responsabilidade civil e acidentes pessoais mandatários por lei.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-serif text-white mb-4">6. Jurisdição</h2>
                            <p>Em caso de litígio não passível de ser resolvido consensualmente, a questão reger-se-á pela lei portuguesa, sendo competentes os tribunais da comarca do Porto.</p>
                        </section>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
