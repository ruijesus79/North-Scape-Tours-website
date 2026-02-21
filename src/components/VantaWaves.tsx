import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

export default function VantaWaves({ className = '' }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const vantaRef = useRef<ReturnType<typeof WAVES> | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768; // Desativar telemóveis para fluidez 60fps
        if (prefersReduced || isMobile) return;

        try {
            vantaRef.current = WAVES({
                el: ref.current,
                THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                color: 0x0a0a00,
                shininess: 15,
                waveHeight: 8,
                waveSpeed: 0.5,
                zoom: 0.8,
            });
        } catch (e) {
            console.warn('Vanta WAVES init error:', e);
        }

        return () => {
            vantaRef.current?.destroy();
        };
    }, []);

    return <div ref={ref} className={`absolute inset-0 z-[1] pointer-events-none ${className}`} style={{ opacity: 0.25 }} />;
}
