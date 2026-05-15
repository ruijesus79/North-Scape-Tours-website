import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Reveal } from '../../utils/shared';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="sobre-nos" className="relative bg-[#f6f2ea] text-[#14110d] overflow-hidden">
      {/* Subtle paper grain accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 15%, #8b6f3d 0, transparent 40%), radial-gradient(circle at 85% 85%, #1a1a1a 0, transparent 45%)',
        }}
      />

      <div className="relative grid lg:grid-cols-[1.05fr_1fr] min-h-[90vh]">
        {/* IMAGE — top on mobile, right on desktop */}
        <div className="relative order-1 lg:order-2 aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[90vh] overflow-hidden">
          <img
            src="/images/about/misty-douro-bw.jpg"
            alt={t.about.imageAlt}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          {/* Soft vignette to blend into cream on mobile/stack seam */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f6f2ea] to-transparent lg:hidden" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f6f2ea] to-transparent hidden lg:block" />

          {/* Editorial plate */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 max-w-[230px] text-right hidden md:block">
            <span className="text-[10px] tracking-[0.35em] uppercase text-white/80 font-medium">
              Douro Valley
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-white/55 mt-1">
              Portugal · Est. 2024
            </span>
          </div>
        </div>

        {/* TEXT — editorial */}
        <div className="order-2 lg:order-1 flex items-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-20 sm:py-24 lg:py-32">
          <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <Reveal>
              <span className="inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#8b6f3d] mb-8 font-medium">
                {t.about.badge}
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-serif text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-[-0.01em] text-balance mb-10 text-[#14110d]">
                {t.about.title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="w-12 h-px bg-[#8b6f3d]/60 mx-auto lg:mx-0 mb-10" />
            </Reveal>

            <div className="space-y-6">
              {t.about.paragraphs.map((para, i) => (
                <Reveal key={i} delay={0.16 + i * 0.06}>
                  <p
                    className={
                      i === t.about.paragraphs.length - 1
                        ? 'font-serif italic text-[17px] sm:text-lg leading-[1.75] text-[#1a1a1a] text-pretty'
                        : 'text-[15px] sm:text-base leading-[1.85] text-[#3d3731] font-light text-pretty'
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div className="mt-14 pt-8 border-t border-[#8b6f3d]/20">
                <p
                  className="text-xl sm:text-2xl text-[#8b6f3d] tracking-wide"
                  style={{ fontFamily: '"Dancing Script", "Brush Script MT", cursive' }}
                >
                  {t.about.signature}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
