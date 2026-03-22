"use client";
import { useRef, useEffect, useState } from "react";

export default function Navbar() {
  const glowRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.left = `${x - 60}px`;
      glowRef.current.style.top = `${y - 60}px`;
      glowRef.current.style.opacity = "1";
    }
  };

  const handleLeave = () => {
    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  };

  return (
    <>
      <header className="fixed top-6 left-0 w-full flex justify-center z-50 px-4">
        
        <nav
          onMouseMove={handleMouseMove}
          onMouseLeave={handleLeave}
          className={`
            relative w-full max-w-[1240px] px-6 py-1 rounded-full 
            flex justify-between items-center text-white overflow-hidden
            transition-all duration-500
            ${scrolled 
              ? "bg-black/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] border border-white/10" 
              : "bg-white/5 backdrop-blur-xl border border-white/10"
            }
          `}
        >

          {/* FONDO */}
          <div className="absolute inset-0 liquid-glass z-0"></div>
          <div className="absolute inset-0 bg-black/20 rounded-full z-0"></div>

          {/* EFECTO */}
          <div ref={glowRef} className="liquid-hover absolute z-10"></div>

          {/* CONTENIDO */}
          <div className="relative flex items-center w-full justify-between z-20">
            
            {/* LOGO (TAMAÑO ORIGINAL) */}
            <a href="/">
              <img src="/Logo NM.png" className="w-18 h-18 object-contain" />
            </a>

            {/* DESKTOP (SIN CAMBIOS) */}
            <ul className="hidden md:flex gap-10 text-base font-medium">
              <li><a href="#projects" className="hover:text-pink-400 transition">Proyectos</a></li>
              <li><a href="#about" className="hover:text-pink-400 transition">Sobre mí</a></li>
              <li><a href="#services" className="hover:text-pink-400 transition">Servicios</a></li>
              <li><a href="#tech" className="hover:text-pink-400 transition">Tecnologías</a></li>
              <li><a href="#contact" className="hover:text-pink-400 transition">Contacto</a></li>
            </ul>

            {/* BOTÓN DESKTOP */}
            <a
              href="/MELGAREJO, NICCOLLY.docx (1).pdf"
              download
              className="hidden md:flex items-center gap-1 px-5 py-1.5 rounded-full text-m font-medium 
              bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition"
            >
              Descargar CV

              <svg xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>

            {/* HAMBURGUESA (SOLO MOBILE) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col gap-1"
            >
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
              <span className="w-6 h-[2px] bg-white"></span>
            </button>

          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          open 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* SIDEBAR */}
      <div
  className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-black/90 backdrop-blur-2xl text-white z-50 p-6 transition-transform duration-500 ${
    open ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div onClick={(e) => e.stopPropagation()}>

    {/* CERRAR */}
    <button
      onClick={() => setOpen(false)}
      className="text-white text-2xl mb-10"
    >
      ✕
    </button>

    {/* MENÚ */}
    <ul className="flex flex-col gap-6 text-lg font-medium text-white">

      <li>
        <a href="#projects" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
          Proyectos
        </a>
      </li>

      <li>
        <a href="#about" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
          Sobre mí
        </a>
      </li>

      <li>
        <a href="#services" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
          Servicios
        </a>
      </li>

      <li>
        <a href="#tech" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
          Tecnologías
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
          Contacto
        </a>
      </li>

    </ul>

    {/* BOTÓN */}
    <a
      href="/MELGAREJO, NICCOLLY.docx (1).pdf"
      className="mt-10 inline-block px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-center"
    >
      Descargar CV
    </a>

  </div>
</div>
    </>
  );
}