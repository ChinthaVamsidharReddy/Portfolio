"use client";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { siteConfig } from "@/data/portfolio";

const channels = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    desc: "Best for job inquiries and collaboration",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "violet",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chinthavamsidharreddy",
    href: siteConfig.linkedin,
    desc: "Professional network & recruiter outreach",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "blue",
  },
  {
    label: "GitHub",
    value: "github.com/ChinthaVamsidharReddy",
    href: siteConfig.github,
    desc: "Code, contributions, and project repos",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "gray",
  },
];

const colorMap: Record<string, string> = {
  violet: "bg-violet-100 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/50",
  blue: "bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
  gray: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-gray-700",
};

export default function Contact() {
  return (
    <Section
      id="contact"
      label="Get in touch"
      title="Let's Work Together"
      subtitle="Open to full-time Software Engineer, Backend, and Full-Stack Developer roles."
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <FadeIn direction="left">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I'm actively seeking full-time opportunities where I can contribute from day one. If you're hiring for backend, full-stack, or AI engineering roles — or if you want to collaborate on something interesting — I'd love to hear from you.
            </p>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available immediately for full-time roles
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {channels.map((ch) => (
            <StaggerItem key={ch.label}>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors shrink-0 ${colorMap[ch.color]}`}>
                  {ch.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{ch.label}</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm truncate">{ch.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{ch.desc}</div>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </StaggerItem>
          ))}

          <StaggerItem>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume (PDF)
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </Section>
  );
}
