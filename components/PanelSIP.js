"use client";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    benefit: "Reducción de tiempos de obra",
    spec: "Hasta un 50% menos de tiempo en obra respecto a la construcción tradicional. Los paneles llegan prefabricados y listos para ensamblar en sitio.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
    benefit: "Alto ahorro energético",
    spec: "El núcleo de EPS provee un aislamiento térmico superior. Reduce hasta un 40% el consumo de calefacción y refrigeración en comparación con muros convencionales.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    benefit: "Alta resistencia a la humedad",
    spec: "Las placas OSB cuentan con tratamiento hidrófugo que minimiza la absorción de agua. Ideales para climas lluviosos, zonas costeras o de alta humedad ambiental.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    benefit: "Alta resistencia estructural",
    spec: "El sistema panel SIP trabaja como una viga en caja: soporta cargas de compresión, flexión y corte muy superiores a las de un muro tradicional de igual espesor.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.626 4.5 4.714V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.714c0-1.088-.806-2.014-1.907-2.142A48.715 48.715 0 0012 2.25z" />
      </svg>
    ),
    benefit: "Precisión en costos e insumos",
    spec: "Al ser un sistema industrializado, los materiales se calculan con exactitud antes de comenzar la obra. Se eliminan desperdicios y se garantiza el presupuesto inicial.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    benefit: "Garantía y asistencia post-venta",
    spec: "Acompañamos cada proyecto con seguimiento post-entrega. Asesoramos en instalaciones, reparaciones y ampliaciones para garantizar la durabilidad de tu estructura.",
  },
];

export default function PanelSIP() {
  return (
    <section id="panel-sip" className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center mb-12 md:mb-20">
          <div>
            <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Tecnología constructiva
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
              ¿Por qué construir
              <br />
              con <span className="text-[#3d7a52]">Panel SIP</span>?
            </h2>
          </div>

          {/* Panel image */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/panelsip.png"
              alt="Panel SIP"
              className="w-48 h-48 object-contain drop-shadow-lg"
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed max-w-md lg:text-right lg:ml-auto">
            El sistema SIP combina aislamiento, estructura y terminación en un
            único panel. Más rápido, más eficiente y con mejor desempeño
            energético que la construcción convencional.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div key={card.benefit} className="group h-52" style={{ perspective: "1000px" }}>
              <div
                className="relative w-full h-full transition-transform duration-1000 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateY(0deg)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "rotateY(180deg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "rotateY(0deg)")
                }
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-2xl border border-gray-100 bg-[#f7f5f0] px-4 sm:px-7 py-6 sm:py-8 flex flex-col gap-5 justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#3d7a52] shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-[#1c1c1c] font-semibold text-base leading-snug">
                    {card.benefit}
                  </h3>
                  {/* Mobile flip hint */}
                  <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#f7f5f0] border border-[#3d7a52] flex items-center justify-center text-[#3d7a52]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[#2d5a3d] px-4 sm:px-7 py-6 sm:py-8 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div className="w-8 h-px bg-[#6aab7e]" />
                  <p className="text-white/85 text-sm leading-relaxed">
                    {card.spec}
                  </p>
                  <p className="text-[#6aab7e] text-xs font-semibold tracking-wider uppercase">
                    Panel SIP · Zen Home
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-10">
          <p className="text-gray-400 text-sm max-w-sm">
            Visitá nuestro canal de YouTube y enterate lo que dicen nuestros profesionales.
          </p>
          <a
            href="https://www.youtube.com/@zenhome"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#3d7a52] text-white text-sm font-medium hover:bg-[#2d5a3d] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Ver en YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
