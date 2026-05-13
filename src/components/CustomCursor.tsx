import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    // Smooth spring physics for the cursor ring
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(-100, springConfig);
    const cursorY = useSpring(-100, springConfig);

    // High performance hover state via direct GPU motion value (0 = normal, 1 = hovering)
    const hoverMotion = useMotionValue(0);
    const hoverSpring = useSpring(hoverMotion, { stiffness: 300, damping: 20 });

    // Transforms for outer ring
    const ringScale = useTransform(hoverSpring, [0, 1], [1, 1.8]);
    const ringBg = useTransform(hoverSpring, [0, 1], ['transparent', 'rgba(212, 175, 55, 0.1)']);
    const ringBorder = useTransform(hoverSpring, [0, 1], ['1px', '2px']);

    // Transforms for inner dot
    const dotScale = useTransform(hoverSpring, [0, 1], [1, 0]);
    const dotOpacity = useTransform(hoverSpring, [0, 1], [1, 0]);

    useEffect(() => {
        // Only show custom cursor on devices with a fine pointer (mice/trackpads)
        const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // offset by half width (32/2)
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if we are hovering over clickable elements
            const isClickable = target.closest('a') || target.closest('button') || target.closest('.cursor-pointer');
            if (isClickable) {
                hoverMotion.set(1);
            } else {
                hoverMotion.set(0);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, hoverMotion]);

    if (!isVisible) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4af37] pointer-events-none z-[99999] mix-blend-exclusion flex items-center justify-center transform-gpu"
            style={{
                x: cursorX,
                y: cursorY,
                scale: ringScale,
                backgroundColor: ringBg,
                borderWidth: ringBorder
            }}
        >
            <motion.div
                className="w-1.5 h-1.5 bg-[#d4af37] rounded-full transform-gpu"
                style={{
                    scale: dotScale,
                    opacity: dotOpacity
                }}
            />
        </motion.div>
    );
}
