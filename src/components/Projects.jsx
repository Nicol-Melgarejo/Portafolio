"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    title: "Pintos Pet Shop",
    category: "Ecommerce",
    description:
      "Tienda online desarrollada en WooCommerce. Incluye arquitectura de productos, optimización SEO y experiencia de compra enfocada en conversión.",
    stack: ["WordPress", "WooCommerce", "ACF"],
    url: "https://pintospetshop.com/",
    image: "/Pintos.png",
  },
  {
    title: "Instituto Politécnico",
    category: "Educativo",
    description:
      "Sitio institucional con estructura dinámica usando ACF. Optimizado para gestión de cursos y posicionamiento SEO.",
    stack: ["WordPress", "ACF", "CPT"],
    url: "https://institutopolitecnico.edu.pe/",
    image: "/IP.png",
  },
  {
    title: "Fundación Calma",
    category: "Institucional",
    description: "Rediseño completo enfocado en UX y contenido.",
    stack: ["WordPress", "UI/UX"],
    url: "https://fundacioncalma.org/",
    image: "/Fcalma.png",
  },
  {
    title: "Postgrado Politécnica",
    category: "Educativo",
    description: "Plataforma web escalable.",
    stack: ["WordPress", "ACF"],
    url: "https://postgrado.politecnica.edu.pe/",
    image: "/Up.png",
  },
  {
    title: "Glekom",
    category: "Corporativo",
    description: "Sitio corporativo optimizado.",
    stack: ["WordPress", "SEO"],
    url: "https://gk.com.pe/",
    image: "/GK.png",
  },
  {
    title: "Digital Construction",
    category: "Corporativo",
    description: "Web moderna enfocada en branding.",
    stack: ["WordPress", "SEO"],
    url: "https://digitalconstructioncorp.com/",
    image: "/DC.png",
  },
  {
    title: "Administra Más",
    category: "Corporativo",
    description: "Experiencia optimizada.",
    stack: ["WordPress", "ACF"],
    url: "https://administramas.pe/",
    image: "/Administra.png",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // 🔥 DETECTAR RESPONSIVE
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1); // móvil
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // tablet
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // 🔥 CREAR SLIDES DINÁMICOS
  const slides = [];
  for (let i = 0; i < projects.length; i += itemsPerSlide) {
    slides.push(projects.slice(i, i + itemsPerSlide));
  }

  return (
    <section
      id="projects"
      className="min-h-[100dvh] md:h-[100dvh] md:snap-start flex items-center text-white relative py-20 md:py-28"
    >
      <div className="max-w-[1240px] mx-auto px-6 w-full">

        {/* TÍTULO */}
        <div className="mb-12 text-center flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos</h2>
          <div className="w-14 h-[3px] bg-orange-500 mt-4"></div>
        </div>

        {/* GRID */}
        <div
          className={`
            grid gap-6 md:gap-8
            ${itemsPerSlide === 1 ? "grid-cols-1" : ""}
            ${itemsPerSlide === 2 ? "grid-cols-2" : ""}
            ${itemsPerSlide === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : ""}
          `}
        >
          {slides[current]?.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              className="relative rounded-2xl overflow-hidden group border border-white/10 bg-white/5 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,0,150,0.2)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[160px] md:h-[200px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative z-10 p-5 md:p-6">
                <span className="text-xs text-pink-400 uppercase tracking-wider">
                  {project.category}
                </span>

                <h3 className="text-base md:text-lg font-semibold mt-1">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
            </a>
          ))}
        </div>

        {/* CONTROLES */}
        <div className="flex justify-center items-center gap-6 mt-10">

          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? slides.length - 1 : prev - 1
              )
            }
            className="text-gray-400 hover:text-white transition text-xl"
          >
            ←
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === index ? "bg-pink-500" : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
              )
            }
            className="text-gray-400 hover:text-white transition text-xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
