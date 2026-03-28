export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-5">
              <img src="/logo.webp" alt="Zen Home" className="h-9 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Casas y módulos transportables diseñados con identidad,
              construidos con precisión. Arquitectura que se adapta a tu vida.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/zenhome.arq",
                  icon: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#3d7a52] flex items-center justify-center transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {[
                ["Proyectos", "#proyectos"],
                ["Servicios", "#servicios"],
                ["Nosotros", "#nosotros"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-400 text-sm hover:text-[#6aab7e] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contacto</h4>
            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>hola@zenhome.com.ar</li>
              <li>Argentina</li>
              <li className="text-[#6aab7e]">
                <a href="https://zenhome.elpatiodelaconstruccion.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  zenhome.elpatiodelaconstruccion.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {year} Zen Home. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado con amor por la arquitectura.</p>
        </div>
      </div>
    </footer>
  );
}
