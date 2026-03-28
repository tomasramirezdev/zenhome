"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
          alt="Casa Zen Home"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay - green toned */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a3d]/75 via-[#1c1c1c]/40 to-[#2d5a3d]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
        <p
          className={`text-white/80 text-xs font-semibold tracking-[0.3em] uppercase mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Arquitectura de vanguardia
        </p>

        <h1
          className={`font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6 max-w-3xl transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Diseño que se mueve con vos.
        </h1>

        <p
          className={`text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Viviendas y módulos transportables diseñados con
          identidad propia, funcionalidad y respeto por el entorno natural.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#proyectos"
            className="px-8 py-3.5 rounded-full bg-[#3d7a52] text-white font-medium hover:bg-[#2d5a3d] transition-colors text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#nosotros"
            className="px-8 py-3.5 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors text-sm backdrop-blur-sm"
          >
            Conocer más
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
