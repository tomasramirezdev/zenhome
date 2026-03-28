const steps = [
  {
    number: "01",
    title: "Primera consulta",
    description:
      "Nos reunimos para entender tus necesidades, el terreno disponible y el presupuesto estimado. Sin compromisos.",
  },
  {
    number: "02",
    title: "Diseño y anteproyecto",
    description:
      "Desarrollamos la propuesta arquitectónica con planos, renders y especificaciones técnicas para tu aprobación.",
  },
  {
    number: "03",
    title: "Construcción",
    description:
      "Fabricamos en taller con control de calidad, minimizando los tiempos y el impacto en el lugar de destino.",
  },
  {
    number: "04",
    title: "Instalación y entrega",
    description:
      "Transportamos y colocamos el módulo o casa en el terreno. Entrega llave en mano con seguimiento post-obra.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-12 md:py-24 bg-[#2d5a3d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6aab7e] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Cómo trabajamos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-semibold">
            El proceso
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
<div className="relative z-10">
                <div className="w-14 h-14 rounded-full border-2 border-[#6aab7e] flex items-center justify-center mb-6">
                  <span className="text-[#6aab7e] font-semibold text-sm font-[family-name:var(--font-playfair)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
