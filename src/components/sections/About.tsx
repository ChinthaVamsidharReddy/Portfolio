"use client";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { siteConfig } from "@/data/portfolio";

const highlights = [
  {
    icon: "🏗️",
    title: "Systems thinker",
    desc: "I design for scale first — microservices, observability, and fault tolerance are built in from the start, not bolted on later.",
  },
  {
    icon: "🤖",
    title: "AI-native engineer",
    desc: "From on-device TensorFlow Lite models to LLM proxy middleware with PII redaction, I build AI features that are production-safe.",
  },
  {
    icon: "📄",
    title: "Published researcher",
    desc: "IEEE Xplore 2025: a peer-reviewed paper on mobile edge ML achieving 92% classification accuracy across 40 plant species.",
  },
  {
    icon: "🚀",
    title: "Full-stack depth",
    desc: "Java/Spring Boot backend to React/Angular frontend to Kubernetes deployment — I own the entire stack end to end.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      label="Who I am"
      title="Engineer. Researcher. Builder."
      subtitle="I'm a 2026 Computer Science graduate who spent three years turning ideas into production systems."
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeIn direction="left">
          <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              I'm <strong className="text-gray-900 dark:text-white font-semibold">{siteConfig.fullName}</strong>, a full-stack engineer graduating from KARE in 2026 with a B.Tech in Computer Science. I build backend systems that scale, frontends that don't get in the way, and AI integrations that are production-safe.
            </p>
            <p>
              During my Infosys internship, I shipped enterprise Java microservices in an Agile environment. Alongside that, I built NeuralLog — an LLM observability platform with Kubernetes orchestration, real-time SSE streaming, and PII redaction — entirely from scratch to solve a real problem I encountered working with AI APIs.
            </p>
            <p>
              In my final year, I published peer-reviewed research in IEEE Xplore on mobile edge machine learning: a Flutter + TensorFlow Lite plant classifier that achieves 92% accuracy with zero internet connectivity, designed for deployment in rural healthcare settings.
            </p>
            <p>
              I'm actively seeking Software Engineer, Backend Engineer, or Full-Stack Developer roles where I can contribute to meaningful systems from day one.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-violet-600 hover:bg-violet-700 text-white transition-colors"
            >
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
