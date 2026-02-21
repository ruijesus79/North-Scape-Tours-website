import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw } from "lucide-react";

interface HeroTextProps {
    text?: string;
    className?: string;
}

export default function HeroText({
    text = "IMMERSE",
    className = "",
}: HeroTextProps) {
    const [count, setCount] = useState(0);
    const characters = text.split("");

    return (
        <div
            className={`relative flex flex-col items-center justify-center h-full w-full 
      bg-transparent transition-colors duration-700 ${className}`}
        >
            {/* Immersive Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)`,
                    backgroundSize: "clamp(20px, 5vw, 60px) clamp(20px, 5vw, 60px)",
                }}
            />

            {/* Main Text Container */}
            <div className="relative z-10 w-full px-4 flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={count}
                        className="flex flex-wrap justify-center items-center w-full"
                    >
                        {characters.map((char, i) => (
                            <div
                                key={i}
                                className="relative px-[0.1vw] overflow-hidden group"
                            >
                                {/* Main Character - Responsive sizing using vw */}
                                <motion.span
                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    transition={{ delay: i * 0.04 + 0.3, duration: 0.8 }}
                                    className="text-[12vw] xl:text-[200px] leading-none font-serif text-white/90 tracking-tighter"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>

                                {/* Top Slice Layer */}
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: "100%", opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.04,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 text-[12vw] xl:text-[200px] leading-none font-serif text-amber-500 z-10 pointer-events-none"
                                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 35%, 0 35%)" }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>

                                {/* Middle Slice Layer */}
                                <motion.span
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: "-100%", opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.04 + 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 text-[12vw] xl:text-[200px] leading-none font-serif text-white z-10 pointer-events-none"
                                    style={{
                                        clipPath: "polygon(0 35%, 100% 35%, 100% 65%, 0 65%)",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>

                                {/* Bottom Slice Layer */}
                                <motion.span
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: "100%", opacity: [0, 1, 0] }}
                                    transition={{
                                        duration: 0.7,
                                        delay: i * 0.04 + 0.2,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 text-[12vw] xl:text-[200px] leading-none font-serif text-amber-400 z-10 pointer-events-none"
                                    style={{
                                        clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Floating UI Controls */}
            <div className="absolute bottom-12 flex flex-col items-center gap-6 z-20">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCount((c) => c + 1)}
                    className="p-4 bg-white/5 border border-white/10 text-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-colors duration-300 hover:bg-white/10"
                >
                    <RefreshCw size={24} className="text-amber-400" />
                </motion.button>

                <p className="text-[10px] uppercase tracking-[0.5em] font-medium text-white/30">
                    Repetir
                </p>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 border-l border-t border-white/15 w-8 h-8 md:w-12 md:h-12" />
            <div className="absolute bottom-8 right-8 border-r border-b border-white/15 w-8 h-8 md:w-12 md:h-12" />
        </div>
    );
}
