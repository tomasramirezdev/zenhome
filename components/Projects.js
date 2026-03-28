const projects = [
  {
    id: 1,
    title: "Casa Bosque 42",
    location: "Córdoba, Argentina",
    category: "Casa transportable",
    m2: "42 m²",
    habitaciones: 2,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Módulo Patagonia",
    location: "Bariloche, Río Negro",
    category: "Módulo ampliable",
    m2: "28 m²",
    habitaciones: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Refugio Serrano",
    location: "Mendoza, Argentina",
    category: "Diseño personalizado",
    m2: "65 m²",
    habitaciones: 3,
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=800&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Casa Litoral",
    location: "Entre Ríos, Argentina",
    category: "Casa transportable",
    m2: "55 m²",
    habitaciones: 2,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Proyectos realizados
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
              Nuestras viviendas
            </h2>
          </div>
          <a
            href="/proyectos"
            className="inline-flex items-center gap-2 text-[#3d7a52] font-medium text-sm hover:gap-4 transition-all"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Featured project + grid */}
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
                {featured.category}
              </span>
              <h3 className="text-white text-2xl font-semibold mt-3 mb-1 font-[family-name:var(--font-playfair)]">
                {featured.title}
              </h3>
              <div className="flex items-center gap-4 text-white/70 text-sm">
                <span>{featured.location}</span>
                <span>·</span>
                <span>{featured.m2}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                  </svg>
                  {featured.habitaciones} hab.
                </span>
              </div>
            </div>
          </div>

          {/* Grid of 3 */}
          <div className="flex flex-col gap-6">
            {rest.map((project) => (
              <div
                key={project.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer h-[140px]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c]/70 via-[#1c1c1c]/30 to-transparent" />
                <div className="absolute inset-0 flex items-center px-7">
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest text-[#6aab7e] uppercase">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-0.5 flex items-center gap-2">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.m2}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
                        </svg>
                        {project.habitaciones} hab.
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
