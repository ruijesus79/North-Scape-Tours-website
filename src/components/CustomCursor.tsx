import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isTextElement, setIsTextElement] = useState(false);

    // Raw mouse coordinates (updated instantly with 0ms latency)
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Snappy, ultra-responsive spring for the outer trailing ring (high stiffness, balanced damping)
    const springConfig = { damping: 28, stiffness: 420, mass: 0.18 };
    const ringRawX = useTransform(mouseX, x => x - 16);
    const ringRawY = useTransform(mouseY, y => y - 16);
    const ringX = useSpring(ringRawX, springConfig);
    const ringY = useSpring(ringRawY, springConfig);

    // Instant position for the inner focal dot (centered at mouse coordinates with 0 lag)
    const dotX = useTransform(mouseX, x => x - 3.5);
    const dotY = useTransform(mouseY, y => y - 3.5);

    // Interactive states via direct GPU motion values
    const hoverMotion = useMotionValue(0); // 0 = normal, 1 = hovering interactive
    const clickMotion = useMotionValue(0); // 0 = up, 1 = mousedown

    const hoverSpring = useSpring(hoverMotion, { stiffness: 400, damping: 25 });
    const clickSpring = useSpring(clickMotion, { stiffness: 500, damping: 20 });

    // Dynamic scale and styling for the outer ring
    const ringScale = useTransform([hoverSpring, clickSpring], ([hover, click]: number[]) => {
        const baseScale = 1 + hover * 0.45; // Expands to 1.45x on hover
        const clickScale = 1 - click * 0.2;  // Snaps down on click
        return baseScale * clickScale;
    });

    const ringBg = useTransform(hoverSpring, [0, 1], ['rgba(212, 175, 55, 0)', 'rgba(212, 175, 55, 0.12)']);
    const ringBorder = useTransform(hoverSpring, [0, 1], ['1.25px', '2px']);

    // Inner dot subtle scale on click/hover
    const dotScale = useTransform([hoverSpring, clickSpring], ([hover, click]: number[]) => {
        return (1 - hover * 0.3) * (1 - click * 0.3);
    });

    useEffect(() => {
        // Disable on touchscreens/mobile devices
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;

            // Check if hovering over form inputs / textareas
            const isText = Boolean(
                target.closest('input, textarea, select, [contenteditable="true"]')
            );
            setIsTextElement(isText);

            // Check if hovering over clickable / interactive elements
            const isClickable = Boolean(
                target.closest('a, button, [role="button"], .cursor-pointer, input[type="submit"]')
            );
            hoverMotion.set(isClickable ? 1 : 0);
        };

        const handleMouseDown = () => clickMotion.set(1);
        const handleMouseUp = () => clickMotion.set(0);

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        window.addEventListener('mousedown', handleMouseDown, { passive: true });
        window.addEventListener('mouseup', handleMouseUp, { passive: true });
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, hoverMotion, clickMotion]);

    if (!isVisible || isTextElement) return null;

    return (
        <>
            {/* 1. Instant Precision Dot (Zero Latency - exactly follows physical pointer) */}
            <motion.div
                className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-[#d4af37] pointer-events-none z-[99999] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                style={{
                    x: dotX,
                    y: dotY,
                    scale: dotScale,
                }}
            />

            {/* 2. Fluid Luxury Halo Ring (Ultra-snappy high-stiffness spring follow) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#d4af37]/70 pointer-events-none z-[99998] backdrop-blur-[0.5px]"
                style={{
                    x: ringX,
                    y: ringY,
                    scale: ringScale,
                    backgroundColor: ringBg,
                    borderWidth: ringBorder,
                }}
            />
        </>
    );
}
