"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isSubpage = pathname !== "/";
  const [scrolled, setScrolled] = useState(false);
  const [onLightSection, setOnLightSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["#proyectos", "#modulos"]
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting);
        setOnLightSection(anyVisible);
      },
      { threshold: 0.1 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const prefix = isSubpage ? "/" : "";

  const links = [
    { label: "Panel SIP", href: `${prefix}#panel-sip` },
    { label: "Viviendas", href: `${prefix}#proyectos` },
    { label: "Módulos Transportables", href: `${prefix}#modulos` },
    { label: "Proyectos a Medida", href: `${prefix}#proceso` },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 px-3 sm:px-6 pointer-events-none">
      {/* Pill container */}
      <div
        className={`w-full max-w-7xl pointer-events-auto transition-all duration-500 ${
          scrolled || onLightSection || isSubpage || menuOpen
            ? "bg-[#1a1a1a]/40 backdrop-blur-2xl rounded-3xl md:rounded-2xl shadow-lg ring-1 ring-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="px-5 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#3d7a52] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">ZH</span>
            </div>
            <span className="font-semibold text-base tracking-wide text-white ml-2">
              Zen Home
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide text-white/75 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${prefix}#contacto`}
              className="text-xs font-medium px-4 py-2 rounded-full bg-[#3d7a52] text-white hover:bg-[#2d5a3d] transition-colors"
            >
              Contáctanos
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 px-5 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 font-medium text-sm py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${prefix}#contacto`}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-medium px-4 py-2.5 rounded-full bg-[#3d7a52] text-white text-center hover:bg-[#2d5a3d] transition-colors"
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
