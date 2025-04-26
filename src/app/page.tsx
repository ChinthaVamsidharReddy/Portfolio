'use client';

import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const Navigation = dynamic(() => import('@/components/Navigation'));
const Hero = dynamic(() => import('@/components/Hero'));
const Skills = dynamic(() => import('@/components/Skills'));
const Projects = dynamic(() => import('@/components/Projects'));
const Experience = dynamic(() => import('@/components/Experience'));
const Contact = dynamic(() => import('@/components/Contact'));

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
