"use client";
import Section from "@/components/ui/Section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrappers";
import { publication } from "@/data/portfolio";

export default function Research() {
  return (
    <Section
      id="research"
      label="Research"
      title="IEEE Publication"
      subtitle="Peer-reviewed research on mobile edge machine learning — a differentiator few new grads can claim."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Main paper card */}
        <FadeIn direction="left" className="lg:col-span-3">
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  IEEE Xplore · {publication.year}
                </span>
                <span className="bg-white/10 border border-white/20 text-white/80 text-xs px-3 py-1 rounded-full">
                  Peer Reviewed
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {publication.title}
              </h3>
            </div>

            <div className="p-8">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Abstract</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {publication.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {publication.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              <a
                href={publication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View on IEEE Xplore
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Metrics + context */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <FadeIn direction="right" delay={0.1}>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Key results</h4>
              <StaggerContainer className="space-y-4">
                {publication.metrics.map((m) => (
                  <StaggerItem key={m.label}>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{m.label}</span>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{m.value}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800/50 bg-emerald-50 dark:bg-emerald-950/20 p-6">
              <div className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm mb-2">
                💡 Why this matters
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                A published IEEE paper at the undergraduate level is rare. This demonstrates the ability to define a technical problem, design an experimental methodology, achieve measurable results, and communicate findings to a peer review panel — skills directly transferable to senior engineering roles.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Conference</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  IEEE
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm">IEEE Xplore Digital Library</div>
                  <div className="text-xs text-gray-500">{publication.conference}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
