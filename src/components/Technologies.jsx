"use client";

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "WordPress",
  "Elementor",
  "ACF",
  "PHP",
  "MySQL",
];

export default function Technologies() {
  return (
<section className="h-screen snap-start flex flex-col justify-center text-white overflow-hidden relative z-10">

  <div className="max-w-[1240px] mx-auto px-6 text-center w-full">

    {/* TÍTULO */}
    <h2 className="text-5xl md:text-5xl font-bold mb-10">
      Tecnologías
    </h2>

    {/* MARQUEE */}
    <div className="space-y-6">

      {/* FILA 1 */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* FILA 2 */}
      <div className="overflow-hidden">
        <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* TEXTO */}
    <div className="max-w-xl mx-auto mt-10 text-gray-400 leading-relaxed text-sm md:text-base">
      No solo desarrollo páginas web, también optimizo su estructura, rendimiento y experiencia de usuario, asegurando que sean funcionales y fáciles de gestionar.
    </div>

  </div>

</section>
  );
}
