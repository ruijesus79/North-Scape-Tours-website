import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollRevealTextProps {
    text: string;
    className?: string;
}

export default function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });

    const words = text.split(" ");

    return (
        <p ref={containerRef} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                // Calculate progress range for this specific word based on its index
                const start = i / words.length;
                const end = start + (1 / words.length);

                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word: React.FC<{ children: string, progress: any, range: [number, number] }> = ({ children, progress, range }) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
        <span className="relative inline-flex mr-2 lg:mr-3 mt-1 lg:mt-2">
            {characters.map((char, i) => {
                const start = range[0] + (i * step);
                const end = range[0] + ((i + 1) * step);
                return (
                    <Character key={i} progress={progress} range={[start, end]}>
                        {char}
                    </Character>
                );
            })}
        </span>
    );
};

const Character: React.FC<{ children: string, progress: any, range: [number, number] }> = ({ children, progress, range }) => {
    // Opacity goes from 0.1 to 1 based on its specific scroll range
    const opacity = useTransform(progress, range, [0.15, 1]);

    // Add a slight golden color highlight at the leading edge of the scroll
    const color = useTransform(
        progress,
        [range[0], range[0] + (range[1] - range[0]) / 2, range[1]],
        ["rgba(255,255,255,0.15)", "#d4af37", "rgba(255,255,255,0.95)"]
    );

    return (
        <motion.span style={{ opacity, color }}>
            {children}
        </motion.span>
    );
};
