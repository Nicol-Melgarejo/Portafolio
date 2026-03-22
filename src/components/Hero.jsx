"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desarrolladora Web especializada en WordPress";

  useEffect(() => {
    let i = 0;

    const type = () => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i <= fullText.length) setTimeout(type, 25);
    };

    type();
  }, []);

  return (
    <section className="
      min-h-[100dvh] 
      md:h-[100dvh] 
      md:snap-start
      flex items-center justify-center 
      text-center 
      relative 
      px-6 
      pt-28 md:pt-32
    ">

      <div className="flex flex-col items-center gap-8 md:gap-10 max-w-5xl w-full">

        <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold leading-[1.2] text-white">

          <span>
            {displayText.includes("Desarrolladora") && "Desarrolladora "}

            {displayText.includes("Web") && (
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Web
              </span>
            )}

            {displayText.includes("especializada") && " especializada"}
          </span>

          <br />

          <span>
            {displayText.includes("en") && "en "}

            {displayText.includes("WordPress") && (
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                WordPress
              </span>
            )}
          </span>

          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-gray-300 max-w-xl text-lg md:text-xl px-2">
          Diseño, desarrollo y optimización de sitios web enfocados en resultados y experiencia de usuario.
        </p>

        <div className="w-16 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">

          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition text-center"
          >
            Ver proyectos →
          </a>

          <a 
            href="https://wa.me/51900070788?text=Hola%20Niccolly,%20vi%20tu%20portafolio"
            target="_blank"
            className="relative w-full sm:w-auto px-8 py-3 rounded-full overflow-hidden border border-white/20 hover:scale-105 transition text-center"
          >
            <div className="absolute inset-0 liquid-glass"></div>
            <span className="relative text-white font-medium">Contactar</span>
          </a>

        </div>
      </div>
    </section>
  );
}
