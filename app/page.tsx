import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-white/30 border-t border-white/8 bg-[#030712]">
        © 2026{" "}
        <span className="text-gradient-hero font-semibold">Vamsidhar Reddy</span>
        . Built with Next.js, Tailwind CSS &amp; Framer Motion.
      </footer>
    </>
  );
}
