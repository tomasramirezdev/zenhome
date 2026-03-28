export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative h-[500px]">
            <div className="absolute top-0 left-0 w-3/4 h-4/5 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Arquitectos Zen Home trabajando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-2/4 h-2/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80"
                alt="Detalle de arquitectura Zen Home"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 w-16 h-16 rounded-xl bg-[#3d7a52] flex items-center justify-center">
              <span className="text-white text-2xl font-[family-name:var(--font-playfair)] font-semibold">
                ZH
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Nosotros
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight mb-6">
              Dos arquitectos,{" "}
              <span className="text-[#3d7a52]">una visión</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              Zen Home nació del encuentro de dos arquitectos con una misma
              convicción: que la buena arquitectura debe ser accesible,
              flexible y respetuosa del entorno. Nos especializamos en
              diseñar y construir casas y módulos transportables que combinan
              estética contemporánea con funcionalidad real.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Cada proyecto es una conversación. Escuchamos, diseñamos y
              construimos con el compromiso de entregar espacios que mejoren
              la calidad de vida de quienes los habitan.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Diseño auténtico", desc: "Sin fórmulas repetidas" },
                { label: "Construcción propia", desc: "Control total del proceso" },
                { label: "Plazos concretos", desc: "Tiempos acordados y cumplidos" },
                { label: "Entrega llave en mano", desc: "Listo para habitar" },
              ].map((v) => (
                <div key={v.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e8f2eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#3d7a52]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#1c1c1c] font-semibold text-sm">{v.label}</div>
                    <div className="text-gray-400 text-xs">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
