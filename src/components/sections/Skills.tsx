"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/AnimationWrappers";
import { skillCategories } from "@/data/portfolio";

const colorMap: Record<string, { pill: string; bar: string; border: string; active: string }> = {
  violet: {
    pill: "bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300",
    bar: "bg-gradient-to-r from-violet-500 to-purple-600",
    border: "border-violet-300 dark:border-violet-700",
    active: "bg-violet-50 dark:bg-violet-950/30 border-violet-300 dark:border-violet-700",
  },
  sky: {
    pill: "bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300",
    bar: "bg-gradient-to-r from-sky-500 to-blue-600",
    border: "border-sky-300 dark:border-sky-700",
    active: "bg-sky-50 dark:bg-sky-950/30 border-sky-300 dark:border-sky-700",
  },
  emerald: {
    pill: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-600",
    border: "border-emerald-300 dark:border-emerald-700",
    active: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700",
  },
  amber: {
    pill: "bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300",
    bar: "bg-gradient-to-r from-amber-500 to-orange-600",
    border: "border-amber-300 dark:border-amber-700",
    active: "bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700",
  },
};

export default function Skills() {
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];
  const colors = colorMap[cat.color] || colorMap.violet;

  return (
    <Section
      id="skills"
      label="Technical expertise"
      title="Skills & Technologies"
      subtitle="Four years across backend, frontend, AI/ML, and infrastructure."
      className="bg-gray-50 dark:bg-gray-900/40"
    >
      {/* Category tabs */}
      <FadeIn className="flex flex-wrap gap-2 mb-10">
        {skillCategories.map((c, i) => {
          const cc = colorMap[c.color] || colorMap.violet;
          return (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                active === i
                  ? `${cc.active} ${cc.border}`
                  : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50"
              }`}
            >
              {c.name}
            </button>
          );
        })}
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Skill bars */}
        <div>
          <StaggerContainer key={active} className="space-y-5">
            {cat.skills.map((skill) => (
              <StaggerItem key={skill.name}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${colors.pill}`}>
                      {skill.level >= 85 ? "Expert" : skill.level >= 75 ? "Advanced" : "Proficient"}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      className={`h-full rounded-full ${colors.bar}`}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* All tech pills */}
        <FadeIn direction="right">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              Full Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Java", "Spring Boot", "Node.js", "Python", "Django", "TypeScript",
                "React", "Angular", "Next.js", "Tailwind CSS",
                "PostgreSQL", "MySQL", "MongoDB",
                "Docker", "Kubernetes", "AWS", "CI/CD",
                "TensorFlow Lite", "Flutter", "REST API", "OAuth 2.0",
                "JWT", "Microservices", "SSE", "Git",
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 cursor-default transition-colors hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
