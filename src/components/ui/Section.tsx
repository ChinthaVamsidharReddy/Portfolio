import { ReactNode } from "react";
import { FadeIn } from "@/components/ui/AnimationWrappers";

interface SectionProps {
  id: string;
  label?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, label, title, subtitle, children, className = "", dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 scroll-mt-16 ${dark ? "bg-gray-950" : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="mb-12 sm:mb-16">
          {label && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-500 dark:text-violet-400 mb-3">
              {label}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400 max-w-2xl">{subtitle}</p>
          )}
        </FadeIn>
        {children}
      </div>
    </section>
  );
}
