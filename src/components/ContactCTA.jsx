"use client";

export default function ContactCTA() {
  return (
    <section id="contact" className="h-screen snap-start flex items-center justify-center py-32 text-white">

      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[600px] aspect-square bg-pink-500/20 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 text-center">

        {/* TEXTO PRINCIPAL */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          ¿Tienes un proyecto en mente?
          <br />
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Trabajemos juntos.
          </span>
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Desarrollo sitios web enfocados en rendimiento, SEO y experiencia de usuario.
          Si estás buscando llevar tu proyecto al siguiente nivel, podemos trabajar juntos.
        </p>

        {/* BOTÓN PRINCIPAL */}
        <a
          href="https://wa.me/51900070788?text=Hola%20Niccolly,%20vi%20tu%20portafolio"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-110 transition duration-300"
        >
          Solicitar proyecto →
        </a>

        {/* CONTACTO */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-400">

          <span className="hover:text-white transition">
            niccolly.melgarejo@tecsup.edu.pe
          </span>

          <span className="hidden md:block">•</span>

          <span className="hover:text-white transition">
            900 070 788
          </span>

          <span className="hidden md:block">•</span>

          <span className="hover:text-white transition">
            linkedin.com/in/nicol-melgarejo
          </span>

        </div>

      </div>
    </section>
  );
}
