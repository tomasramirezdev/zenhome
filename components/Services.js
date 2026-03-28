const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Casas Transportables",
    description:
      "Viviendas completas diseñadas para ser trasladadas sin perder calidad constructiva ni estética. Llave en mano y listas para habitar.",
    tag: "Residencial",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    title: "Módulos Ampliables",
    description:
      "Unidades modulares que crecen con tus necesidades. Podés comenzar con un módulo y expandirte de forma ordenada y coherente.",
    tag: "Modular",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Diseño Personalizado",
    description:
      "Cada proyecto es único. Trabajamos con vos desde la idea inicial hasta el detalle final, adaptando el diseño a tu estilo de vida.",
    tag: "A medida",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: "Arquitectura Sostenible",
    description:
      "Materiales de bajo impacto, orientación bioclimática y sistemas eficientes para reducir la huella ambiental sin resignar confort.",
    tag: "Sustentable",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-12 md:py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Nuestros servicios
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
              Lo que hacemos
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Especializados en arquitectura transportable y modular con un
            enfoque en la calidad, la identidad y la sostenibilidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#6aab7e]/30"
            >
              <div className="w-12 h-12 rounded-xl bg-[#e8f2eb] flex items-center justify-center text-[#3d7a52] mb-5 group-hover:bg-[#3d7a52] group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <span className="text-[10px] font-semibold tracking-widest text-[#3d7a52] uppercase bg-[#e8f2eb] px-2.5 py-1 rounded-full">
                {service.tag}
              </span>
              <h3 className="text-[#1c1c1c] font-semibold text-lg mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
