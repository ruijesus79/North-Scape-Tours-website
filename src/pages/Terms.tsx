import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from '../components/CustomCursor';
import { useLanguage } from '../contexts/LanguageContext';

export default function Terms() {
    const { t: CONTENT } = useLanguage();
    const t = CONTENT.terms;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <div className="min-h-screen bg-[#0c0c0c] text-[#fafafa] font-sans selection:bg-white/20">
            <CustomCursor />

            <header className="fixed top-0 inset-x-0 z-50 bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="max-w-[1500px] mx-auto px-6 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer mr-6">
                        <ArrowLeft size={20} /> <span className="text-sm font-medium tracking-wide">{t.back}</span>
                    </Link>
                    <img src="/logo-white.png" alt="North Scape Tours" className="h-10 mx-auto opacity-80" />
                    <div className="w-20" /> {/* Spacer */}
                </div>
            </header>

            <main className="py-36 px-6 md:px-12 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="font-serif text-3xl sm:text-5xl mb-10 pb-6 border-b border-white/10">{t.title}</h1>

                    <div className="space-y-8 text-white/70 font-light leading-relaxed text-sm sm:text-base">
                        {t.sections.map((section, index) => (
                            <section key={index}>
                                <h2 className="text-xl font-serif text-white mb-4">{section.title}</h2>
                                <p>{section.content}</p>
                            </section>
                        ))}
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
