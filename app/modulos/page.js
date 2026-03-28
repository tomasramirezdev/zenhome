import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Módulos Transportables | Zen Home",
  description: "Conocé todos los módulos transportables de Zen Home: studios, dúos, premium y complementarios.",
};

const allModulos = [
  {
    id: 1,
    title: "Módulo Studio",
    uso: "Vivienda / Home office",
    categoria: "Módulo simple",
    m2: "24 m²",
    habitaciones: 1,
    plazo: "45 días",
    description: "La unidad mínima de Zen Home. Ideal como primera vivienda, espacio de trabajo o complemento de una casa existente. Cocina integrada, baño completo y living.",
    specs: ["Estructura Panel SIP", "Cocina integrada", "Baño completo", "Living comedor", "Instalación eléctrica"],
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80",
  },
  {
    id: 2,
    title: "Módulo Dúo",
    uso: "Vivienda familiar",
    categoria: "Módulo ampliable",
    m2: "48 m²",
    habitaciones: 2,
    plazo: "60 días",
    description: "Dos dormitorios, living-comedor y cocina separada. La solución más elegida para familias que buscan comodidad sin renunciar a la transportabilidad.",
    specs: ["2 dormitorios", "Living-comedor", "Cocina independiente", "Baño completo", "Lavadero"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  },
  {
    id: 3,
    title: "Módulo Sereno",
    uso: "Cabaña / Turismo",
    categoria: "Módulo premium",
    m2: "36 m²",
    habitaciones: 1,
    plazo: "55 días",
    description: "Diseñado para entornos naturales. Terminaciones premium, grandes ventanales y deck exterior incluido. Ideal para proyectos de alquiler turístico.",
    specs: ["Terminaciones premium", "Ventanales de piso a techo", "Deck exterior", "Baño con ducha XL", "Aislamiento reforzado"],
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900&q=80",
  },
  {
    id: 4,
    title: "Módulo Expansión",
    uso: "Ampliación de vivienda",
    categoria: "Módulo complementario",
    m2: "18 m²",
    habitaciones: 1,
    plazo: "30 días",
    description: "Pensado para adosar a una vivienda existente o a otro módulo. Perfecto como habitación adicional, estudio o espacio de servicio.",
    specs: ["Conectable a módulos existentes", "Flexible en uso", "Instalación en 1 día", "Sin obra húmeda", "Certificación estructural"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
  },
  {
    id: 5,
    title: "Módulo Trio",
    uso: "Vivienda familiar amplia",
    categoria: "Módulo ampliable",
    m2: "72 m²",
    habitaciones: 3,
    plazo: "75 días",
    description: "Nuestra unidad más espaciosa. Tres dormitorios, dos baños y living-comedor-cocina integrado. Para familias que necesitan espacio sin sacrificar eficiencia.",
    specs: ["3 dormitorios", "2 baños completos", "Living-comedor-cocina", "Lavadero", "Cochera opcional"],
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=900&q=80",
  },
  {
    id: 6,
    title: "Módulo Lago",
    uso: "Turismo / Segunda vivienda",
    categoria: "Módulo premium",
    m2: "42 m²",
    habitaciones: 2,
    plazo: "60 días",
    description: "Versión premium para entornos lacustres o de montaña. Doble aislamiento, cubierta de chapa prepintada y carpinterías de aluminio de alta performance.",
    specs: ["Doble aislamiento EPS", "Cubierta prepintada", "Carpinterías premium", "Deck perimetral", "Sistema solar opcional"],
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&q=80",
  },
];

const bedIcon = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
  </svg>
);

export default function ModulosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5f0] pt-24 sm:pt-28 lg:pt-32 pb-16 md:pb-24">
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
                Soluciones modulares
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
                Módulos transportables
              </h1>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Desde el studio mínimo hasta la vivienda familiar amplia. Todos
              los módulos se fabrican en taller y se instalan sin obra húmeda.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allModulos.map((modulo) => (
              <div key={modulo.id} className="bg-white rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={modulo.image}
                    alt={modulo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest text-[#6aab7e] uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {modulo.categoria}
                  </span>
                  <span className="absolute top-4 right-4 text-[10px] font-medium text-white/80 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    Entrega en {modulo.plazo}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#1c1c1c] font-semibold">
                        {modulo.title}
                      </h2>
                      <p className="text-[#3d7a52] text-xs font-medium mt-0.5">{modulo.uso}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-[#1c1c1c] font-semibold text-sm">{modulo.m2}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1 justify-end mt-0.5">
                        {bedIcon} {modulo.habitaciones} hab.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {modulo.description}
                  </p>

                  {/* Specs */}
                  <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 mb-6">
                    {modulo.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-[#3d7a52] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-gray-500 text-xs">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`mailto:zenhomeoficial@gmail.com?subject=Consulta sobre ${encodeURIComponent(modulo.title)}&body=Hola, me interesa consultar sobre el ${encodeURIComponent(modulo.title)} (${modulo.m2}). Por favor contáctenme.`}
                    className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#3d7a52] text-[#3d7a52] text-sm font-medium hover:bg-[#3d7a52] hover:text-white transition-colors"
                  >
                    Consultar por este módulo
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#2d5a3d] rounded-3xl p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl text-white font-semibold mb-2">
                ¿No encontrás lo que buscás?
              </h3>
              <p className="text-white/65 text-sm">
                Diseñamos módulos a medida según tus necesidades y terreno.
              </p>
            </div>
            <Link
              href="/#contacto"
              className="flex-shrink-0 px-8 py-3.5 rounded-full bg-white text-[#2d5a3d] font-semibold text-sm hover:bg-[#e8f2eb] transition-colors"
            >
              Consultar módulo
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
