const modulos = [
  {
    id: 1,
    title: "Módulo Studio",
    uso: "Vivienda / Home office",
    categoria: "Módulo simple",
    m2: "24 m²",
    habitaciones: 1,
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Módulo Dúo",
    uso: "Vivienda familiar",
    categoria: "Módulo ampliable",
    m2: "48 m²",
    habitaciones: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Módulo Sereno",
    uso: "Cabaña / Turismo",
    categoria: "Módulo premium",
    m2: "36 m²",
    habitaciones: 1,
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Módulo Expansión",
    uso: "Ampliación de vivienda",
    categoria: "Módulo complementario",
    m2: "18 m²",
    habitaciones: 1,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    featured: false,
  },
];

const bedIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  </svg>
);

export default function Modulos() {
  const featured = modulos[0];
  const rest = modulos.slice(1);

  return (
    <section id="modulos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
              Módulos transportables
            </h2>
          </div>
          <a
            href="/modulos"
            className="inline-flex items-center gap-2 text-[#3d7a52] font-medium text-sm hover:gap-4 transition-all"
          >
            Ver todos los módulos
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Featured + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer h-[300px] sm:h-[380px] lg:h-auto">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-[10px] font-semibold tracking-widest text-[#6aab7e] uppercase bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                {featured.categoria}
              </span>
              <h3 className="text-white text-2xl font-semibold mt-3 mb-1 font-[family-name:var(--font-playfair)]">
                {featured.title}
              </h3>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span>{featured.uso}</span>
                <span>·</span>
                <span>{featured.m2}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <span className="w-3.5 h-3.5">{bedIcon}</span>
                  {featured.habitaciones} hab.
                </span>
              </div>
            </div>
          </div>

          {/* Grid of 3 */}
          <div className="flex flex-col gap-6">
            {rest.map((modulo) => (
              <div
                key={modulo.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-[140px]"
              >
                <img
                  src={modulo.image}
                  alt={modulo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c]/70 via-[#1c1c1c]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center px-7">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[#6aab7e] uppercase">
                      {modulo.categoria}
                    </span>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {modulo.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-0.5 flex items-center gap-2">
                      <span>{modulo.uso}</span>
                      <span>·</span>
                      <span>{modulo.m2}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <span className="w-3 h-3">{bedIcon}</span>
                        {modulo.habitaciones} hab.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
