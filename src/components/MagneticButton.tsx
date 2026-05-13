import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
}

export default function MagneticButton({ children, className = '', onClick, href, target, rel }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Spring physics configuration 
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Distance from center
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        // Intensity of the pull
        x.set(distanceX * 0.2);
        y.set(distanceY * 0.2);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => setIsHovered(true);

    const Wrapper = href ? motion.a : motion.button;

    return (
        <Wrapper
            ref={ref as any}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            href={href as any}
            target={target as any}
            rel={rel as any}
            className={`relative inline-flex z-10 ${className}`}
            style={{ x, y }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Parallax inner content for extra 3D pop */}
            <motion.div
                className="flex items-center justify-center w-full h-full"
                style={{
                    x: useTransform(x, (val) => val * 0.5),
                    y: useTransform(y, (val) => val * 0.5)
                }}
            >
                {children}
            </motion.div>
        </Wrapper>
    );
}
