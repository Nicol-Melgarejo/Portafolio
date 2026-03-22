"use client";

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Creación de páginas web corporativas y landing pages en WordPress, adaptadas a las necesidades del negocio.",
  },
  {
    title: "Ecommerce",
    description:
      "Implementación de tiendas online con WooCommerce, configuración de productos y flujo de compra.",
  },
  {
    title: "Optimización Web",
    description:
      "Mejora de velocidad, estructura SEO (H1–H6) y rendimiento general del sitio web.",
  },
];

export default function About() {
  return (
    <section id="about" className="h-screen snap-start flex items-center justify-center py-32 text-white relative z-10">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* TÍTULO */}
        <div className="mb-10">
          <h2 className="text-5xl font-bold animate-fadeUp">Sobre mí</h2>
          <div className="w-14 h-[3px] bg-orange-500 mt-4"></div>
        </div>

        {/* TEXTO */}
        <div className="max-w-2xl text-gray-300 leading-relaxed space-y-4 animate-fadeUp delay-1 mb-16">
          <p>
            Soy desarrolladora web especializada en WordPress, participo en todo el proceso del proyecto: desde el levantamiento de requerimientos hasta la implementación y optimización final.
          </p>

          <p>
            Trabajo con herramientas como Elementor, ACF y desarrollo personalizado con PHP, HTML, CSS y JavaScript.
          </p>

          <p>
            Me enfoco en crear sitios web funcionales, rápidos y fáciles de gestionar para el cliente.
          </p>
        </div>

        {/* SERVICIOS (SIN TÍTULO) */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden group transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,150,0.2)]"
            >

              {/* EFECTO HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>

              {/* CONTENIDO */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* DECORACIÓN */}
              <div className="absolute bottom-4 right-4 text-6xl text-white/5 font-bold select-none">
                {index + 1}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}