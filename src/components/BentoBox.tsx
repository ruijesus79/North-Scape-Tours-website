import React from 'react';
import { motion } from 'motion/react';
import { Check, Compass, Wine, Utensils, Users, Heart, Camera, Car } from 'lucide-react';

interface BentoFeature {
    title: string;
    icon: string;
}

interface BentoBoxProps {
    features: string[];
    className?: string;
}

// Icon mapping based on keyword heuristics
const getIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('vinho') || lower.includes('vinícola')) return <Wine size={24} />;
    if (lower.includes('almoço') || lower.includes('restaurante')) return <Utensils size={24} />;
    if (lower.includes('barco') || lower.includes('cruzeiro') || lower.includes('rio')) return <Compass size={24} />;
    if (lower.includes('guia') || lower.includes('assistência')) return <Users size={24} />;
    if (lower.includes('transfer') || lower.includes('transporte')) return <Car size={24} />;
    if (lower.includes('fotógrafo')) return <Camera size={24} />;
    if (lower.includes('decoração') || lower.includes('romântic')) return <Heart size={24} />;
    return <Check size={24} />;
};

export default function BentoBox({ features, className = '' }: BentoBoxProps) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
            {features.map((feature, i) => {
                // Determine a slight spanning variation for asymmetry to make it truly Bento
                const isWide = i === 0 || (features.length % 2 !== 0 && i === features.length - 1);

                return (
                    <motion.div
                        key={i}
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-end min-h-[160px] cursor-pointer ${isWide ? 'sm:col-span-2' : ''}`}
                    >
                        {/* Hover Border Beam effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-r from-transparent via-amber-500/30 to-transparent background-animate" style={{ backgroundSize: '200% auto', animation: 'gradient-shift 3s infinite linear' }} />
                        </div>

                        {/* Subtle background glow on hover */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                                {getIcon(feature)}
                            </div>
                            <h4 className="text-white/90 font-medium text-base sm:text-lg leading-snug group-hover:text-amber-400 transition-colors duration-300">
                                {feature}
                            </h4>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
