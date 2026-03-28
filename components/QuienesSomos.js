const founders = [
  {
    name: "Gustavo Nicastro",
    title: "Ingeniero Civil",
    role: "Co-Founder",
    image: "/GustavoNicastro.png",
    quote:
      "Construir bien no es solo una cuestión técnica. Es entender que detrás de cada estructura hay una familia, un sueño y una forma de vivir.",
    bio: "Con formación en ingeniería civil y años de experiencia en obra, Gustavo aporta el rigor técnico que garantiza que cada proyecto no solo sea bello, sino sólido, seguro y duradero.",
  },
  {
    name: "Franco Pensato",
    title: "Arquitecto",
    role: "Co-Founder",
    image: "/FrancoPensato.png",
    quote:
      "La arquitectura transportable no es una limitación. Es una oportunidad de repensar cómo habitamos el espacio y nos relacionamos con el entorno.",
    bio: "Franco lleva la visión proyectual de Zen Home. Su mirada arquitectónica define la identidad estética de cada módulo y vivienda: funcionales, contemporáneos y pensados para perdurar.",
  },
];

export default function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-[#f7f5f0] overflow-hidden">

      {/* Top label bar */}
      <div className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-end">
          <p className="text-gray-400 text-xs tracking-widest uppercase">
            Zen Home · Argentina
          </p>
        </div>
      </div>

      {/* Headline */}
      <div className="max-w-7xl mx-auto px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl md:text-6xl text-[#1c1c1c] font-semibold leading-[1.1] mb-6">
            Dos miradas,
            <br />
            <span className="text-[#3d7a52]">un mismo propósito.</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg">
            Zen Home nació de la unión de la ingeniería y la arquitectura.
            De la precisión técnica y la sensibilidad proyectual.
            Del rigor estructural y la búsqueda de identidad en cada obra.
          </p>
        </div>
      </div>

      {/* Founders — editorial layout */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">

          {founders.map((founder, i) => (
            <div key={founder.name} className="bg-[#f7f5f0] flex flex-col">

              {/* Photo — full bleed, tall */}
              <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden md:grayscale md:hover:grayscale-0 transition-all duration-700">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f5f0] to-transparent" />

                {/* Role badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3d7a52]" />
                  <span className="text-[10px] font-semibold tracking-widest text-[#2d5a3d] uppercase">
                    {founder.role}
                  </span>
                </div>
              </div>

              {/* Text block */}
              <div className={`px-6 sm:px-10 pt-8 pb-12 flex flex-col gap-6 ${i === 1 ? "lg:items-end lg:text-right" : ""}`}>

                {/* Name + title */}
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-[#1c1c1c] font-semibold">
                    {founder.name}
                  </h3>
                  <p className="text-[#3d7a52] text-sm font-medium mt-1">{founder.title}</p>
                </div>

                {/* Quote */}
                <blockquote className={`border-l-2 border-[#3d7a52] pl-5 ${i === 1 ? "lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-5" : ""}`}>
                  <p className="text-[#1c1c1c] text-base leading-relaxed italic font-[family-name:var(--font-playfair)]">
                    "{founder.quote}"
                  </p>
                </blockquote>

                {/* Bio */}
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}
