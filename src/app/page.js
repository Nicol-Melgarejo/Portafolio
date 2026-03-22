"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Technologies from "@/components/Technologies";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="h-[100dvh] overflow-y-scroll md:snap-y md:snap-mandatory">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Technologies />
      <ContactCTA />
      <Footer />
    </main>

  );
}