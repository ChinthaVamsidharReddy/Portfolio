"use client";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { siteConfig } from "@/data/portfolio";

const highlights = [
  { icon: "🏗️", title: "Systems thinker", desc: "I design for scale first — microservices, observability, and fault tolerance are built in from the start, not bolted on later." },
  { icon: "🤖", title: "AI-native engineer", desc: "From on-device TensorFlow Lite models to LLM proxy middleware with PII redaction, I build AI features that are production-safe." },
  { icon: "📄", title: "Two published papers", desc: "IEEE Xplore 2025 (mobile edge ML, 92% accuracy) and CRC Press / Taylor & Francis 2026 (IoT recycling system aligned with UN SDGs)." },
  { icon: "🚀", title: "Full-stack depth", desc: "Java/Spring Boot backend to React/Angular frontend to Kubernetes deployment — I own the entire stack end to end." },
];

export default function About() {
  return (
    <Section id="about" label="Who I am" title="Engineer. Researcher. Builder."
      subtitle="I'm a 2026 Computer Science graduate who spent three years turning ideas into production systems.">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn direction="left">
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>I&apos;m <strong className="text-gray-900 dark:text-white font-semibold">{siteConfig.fullName}</strong>, a full-stack engineer graduating from KARE in 2026 with a B.Tech in Computer Science. I build backend systems that scale, frontends that don&apos;t get in the way, and AI integrations that are production-safe.</p>
            <p>During my Infosys internship I shipped enterprise Java microservices in an Agile environment. Alongside that, I built NeuralLog — an LLM observability platform with Kubernetes orchestration, real-time SSE streaming, and PII redaction — entirely from scratch to solve a real problem I encountered working with AI APIs.</p>
            <p>I hold two published research credits: an IEEE Xplore 2025 paper on mobile edge machine learning (92% plant classification accuracy, fully offline), and a CRC Press 2026 book chapter on an IoT-based recycling vending machine aligned with UN Sustainable Development Goals.</p>
            <p>I&apos;m actively seeking Software Engineer, Backend Engineer, or Full-Stack Developer roles where I can contribute to meaningful systems from day one.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors">
              LinkedIn
            </a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white transition-colors">
              Download Resume
            </a>
          </div>
        </FadeIn>
        <StaggerContainer className="space-y-4">
          {highlights.map((h) => (
            <StaggerItem key={h.title}>
              <div className="group flex gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700/50 bg-white dark:bg-gray-900/50 hover:bg-violet-50/40 dark:hover:bg-violet-950/20 transition-all">
                <span className="text-2xl mt-0.5 shrink-0">{h.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{h.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{h.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
