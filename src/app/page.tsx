"use client";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    // Refresh AOS to detect new elements dynamically added to the DOM
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Testimonials/>
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}



