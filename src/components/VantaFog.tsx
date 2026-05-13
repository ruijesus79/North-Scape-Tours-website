import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

export default function VantaFog({ className = '' }: { className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const vantaRef = useRef<ReturnType<typeof FOG> | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth < 768; // Desativar em telemóveis para performance extrema
        if (prefersReduced || isMobile) return;

        try {
            vantaRef.current = FOG({
                el: ref.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                highlightColor: 0x242424,
                midtoneColor: 0xd4af37, // Golden accent
                lowlightColor: 0x050505,
                baseColor: 0x0c0c0c,
                blurFactor: 0.9,
                speed: 1.0,
                zoom: 0.8
            });
        } catch (e) {
            console.warn('Vanta FOG init error:', e);
        }

        return () => {
            vantaRef.current?.destroy();
        };
    }, []);

    return <div ref={ref} className={`absolute inset-0 z-[1] pointer-events-none ${className}`} style={{ opacity: 0.35 }} />;
}
