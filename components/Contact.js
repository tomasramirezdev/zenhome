"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-12 md:py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[#3d7a52] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Contacto
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1c1c1c] font-semibold leading-tight">
            Hablemos de tu <span className="text-[#3d7a52]">proyecto</span>
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2">

          {/* Left: form */}
          <div className="p-8 md:p-12">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#e8f2eb] flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#3d7a52]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-[#1c1c1c] text-xl font-semibold mb-2 font-[family-name:var(--font-playfair)]">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-400 text-sm">Te contactaremos a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1c1c1c] font-semibold mb-1">
                    Solicite una consulta
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete el formulario y nos ponemos en contacto a la brevedad.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1c1c1c] text-xs font-semibold">Nombre</label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ingrese su nombre"
                      className="bg-[#f7f5f0] rounded-xl px-4 py-3 text-sm text-[#1c1c1c] border border-transparent focus:outline-none focus:border-[#3d7a52] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[#1c1c1c] text-xs font-semibold">Correo</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Ingrese su correo"
                      className="bg-[#f7f5f0] rounded-xl px-4 py-3 text-sm text-[#1c1c1c] border border-transparent focus:outline-none focus:border-[#3d7a52] transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1c1c1c] text-xs font-semibold">Número de teléfono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Ingrese su número de teléfono"
                    className="bg-[#f7f5f0] rounded-xl px-4 py-3 text-sm text-[#1c1c1c] border border-transparent focus:outline-none focus:border-[#3d7a52] transition-colors placeholder:text-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[#1c1c1c] text-xs font-semibold">Cuéntenos sobre su proyecto</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ingrese su cuéntenos sobre su proyecto"
                    className="bg-[#f7f5f0] rounded-xl px-4 py-3 text-sm text-[#1c1c1c] border border-transparent focus:outline-none focus:border-[#3d7a52] transition-colors resize-none placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="self-end px-8 py-3 rounded-full bg-[#3d7a52] text-white font-medium text-sm hover:bg-[#2d5a3d] transition-colors"
                >
                  Enviar consulta
                </button>
              </form>
            )}
          </div>

          {/* Right: image + info overlay */}
          <div className="relative min-h-[400px] lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85"
              alt="Zen Home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1a1a1a]/80" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-10 gap-8">
              <div>
                <p className="text-[#6aab7e] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                  Especialistas en
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white font-semibold mb-6">
                  Construcción transportable
                </h3>
                <div className="flex flex-col gap-3">
                  {["Panel SIP", "Viviendas", "Módulos Transportables", "Proyectos a Medida"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#6aab7e] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/20 pt-8 flex flex-col gap-3">
                <p className="text-white font-semibold text-sm mb-1">Contactanos directamente</p>
                <a
                  href="mailto:zenhomeoficial@gmail.com"
                  className="flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  zenhomeoficial@gmail.com
                </a>
                <a
                  href="tel:+5493415321287"
                  className="flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +54 9 3415 321 287
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
