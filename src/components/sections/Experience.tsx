"use client";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { experience, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Journey"
      title="Experience & Education"
      subtitle="From first line of code to production Kubernetes deployments."
      className="bg-gray-50 dark:bg-gray-900/40"
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <StaggerContainer className="relative space-y-0">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-6 bottom-6 w-px bg-gray-200 dark:bg-gray-800" />

            {experience.map((item, i) => (
              <StaggerItem key={i}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Dot */}
                  <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${
                    item.highlight
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-400"
                  }`}>
                    {item.type === "work" ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-gray-700 transition-colors">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{item.role}</h3>
                        <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{item.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                        <div className="text-xs text-gray-400 mt-1">{item.location}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Certifications */}
        <div>
          <FadeIn direction="right">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 hover:border-violet-300 dark:hover:border-violet-700/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-950/50 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">At a glance</h4>
              <div className="space-y-3">
                {[
                  { label: "GitHub Repos", value: "36+" },
                  { label: "Commits (2024)", value: "200+" },
                  { label: "Languages", value: "5+" },
                  { label: "Production Deploys", value: "4+" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{s.label}</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
