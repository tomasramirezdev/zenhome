import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Proyectos | Zen Home",
  description: "Conocé todos los proyectos de viviendas transportables realizados por Zen Home.",
};

const allProjects = [
  {
    id: 1,
    title: "Casa Bosque 42",
    location: "Córdoba, Argentina",
    category: "Casa transportable",
    m2: "42 m²",
    habitaciones: 2,
    year: "2023",
    description: "Vivienda de dos ambientes integrada al entorno boscoso. Diseño bioclimático con orientación norte y grandes ventanales para aprovechar la luz natural.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&q=80",
  },
  {
    id: 2,
    title: "Refugio Serrano",
    location: "Mendoza, Argentina",
    category: "Diseño personalizado",
    m2: "65 m²",
    habitaciones: 3,
    year: "2023",
    description: "Casa de tres dormitorios adaptada al clima de montaña. Aislamiento reforzado en muros y cubierta, con terminaciones en madera y piedra local.",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=900&q=80",
  },
  {
    id: 3,
    title: "Casa Litoral",
    location: "Entre Ríos, Argentina",
    category: "Casa transportable",
    m2: "55 m²",
    habitaciones: 2,
    year: "2022",
    description: "Vivienda pensada para zonas de alta humedad. Estructura de Panel SIP con tratamiento hidrófugo especial y deck perimetral de madera tratada.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
  },
  {
    id: 4,
    title: "Casa Pampa",
    location: "Buenos Aires, Argentina",
    category: "Casa transportable",
    m2: "72 m²",
    habitaciones: 3,
    year: "2022",
    description: "Proyecto familiar en terreno rural de la provincia de Buenos Aires. Planta funcional con cocina-comedor integrado y galería techada orientada al sur.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
  {
    id: 5,
    title: "Casa del Lago",
    location: "Neuquén, Argentina",
    category: "Diseño personalizado",
    m2: "88 m²",
    habitaciones: 3,
    year: "2024",
    description: "Vivienda premium con vistas al lago. Fachada acristalada, cubierta verde y sistema de energía solar integrado. El proyecto más ambicioso de Zen Home.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900&q=80",
  },
  {
    id: 6,
    title: "Casa Norteña",
    location: "Salta, Argentina",
    category: "Casa transportable",
    m2: "48 m²",
    habitaciones: 2,
    year: "2024",
    description: "Adaptada al clima árido del norte argentino. Aleros extendidos para sombra, ventilación cruzada natural y tonos térreos que dialogan con el paisaje.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
  },
  {
    id: 7,
    title: "Casa Patagónica",
    location: "Bariloche, Río Negro",
    category: "Diseño personalizado",
    m2: "78 m²",
    habitaciones: 3,
    year: "2024",
    description: "Vivienda para clima frío extremo. Doble aislamiento en muros y cubierta, carpinterías de aluminio con doble vidriado hermético y calefacción radiante.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
  },
  {
    id: 8,
    title: "Casa Esteros",
    location: "Corrientes, Argentina",
    category: "Casa transportable",
    m2: "52 m²",
    habitaciones: 2,
    year: "2023",
    description: "Diseñada para zonas inundables. Estructura elevada sobre pilotes con paneles SIP certificados para alta humedad y ventilación natural cruzada.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=80",
  },
];

const bedIcon = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  </svg>
);

export default function ProyectosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <Link href="/" className="inline-flex items-center gap-1.5 text-[#3d7a52] text-xs font-medium mb-5 hover:gap-3 transition-all">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Volver al inicio
              </Link>
              <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Proyectos realizados
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
                Nuestras viviendas
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Cada proyecto es único. Explorá el portfolio completo de casas
              transportables y diseños personalizados realizados en todo el país.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-[420px]" : i === 1 ? "h-[420px]" : "h-[280px]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/85 via-[#1c1c1c]/20 to-transparent" />

                  {/* Year badge */}
                  <div className="absolute top-5 right-5 bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                    {project.year}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[10px] font-semibold tracking-widest text-[#6aab7e] uppercase">
                      {project.category}
                    </span>
                    <h2 className="font-[family-name:var(--font-playfair)] text-white text-xl font-semibold mt-1 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-white/65 text-xs leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 text-white/60 text-xs">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.m2}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        {bedIcon}
                        {project.habitaciones} hab.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#2d5a3d] rounded-3xl p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-semibold mb-2">
                ¿Querés tu propia vivienda?
              </h3>
              <p className="text-white/65 text-sm">
                Diseñamos y construimos a medida. Contanos tu idea.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="flex-shrink-0 px-8 py-3.5 rounded-full bg-white text-[#2d5a3d] font-semibold text-sm hover:bg-[#e8f2eb] transition-colors"
            >
              Consultar proyecto
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
