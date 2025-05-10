import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript'],
    icon: '💻',
    description: 'Core programming languages I work with'
  },
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React.js'],
    icon: '🎨',
    description: 'Frontend development technologies'
  },
  {
    title: 'Backend',
    skills: ['Node.js','Spring', 'Express.js', 'Spring Boot'],
    icon: '⚙️',
    description: 'Backend frameworks and technologies'
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB'],
    icon: '🗄️',
    description: 'Database management systems'
  },
  {
    title: 'ORM',
    skills: ['JDBC', 'Hibernate'],
    icon: '🔗',
    description: 'Object-Relational Mapping tools'
  },
  {
    title: 'Tools/IDEs',
    skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'PyCharm'],
    icon: '🛠️',
    description: 'Development tools and environments'
  },
  {
    title: 'Concepts',
    skills: ['Data Structures', 'TCP/IP', 'OS', 'DBMS', 'OOP', 'Distributed Systems'],
    icon: '📚',
    description: 'Core computer science concepts'
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#8892b0] text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and tools I work with
          </motion.p>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#112240] rounded-xl overflow-hidden border border-[#1d2b4a] hover:border-[#64ffda]/20 transition-colors duration-300"
            >
              <button
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`w-full p-6 text-left transition-all duration-300 ${
                  activeCategory === index ? 'bg-[#64ffda]/10' : 'hover:bg-[#112240]/80'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#8892b0]">
                      {category.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: activeCategory === index ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-[#64ffda]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {activeCategory === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="px-4 py-2 text-[#64ffda] bg-[#64ffda]/10 rounded-lg text-sm font-bold transition-all duration-300 hover:bg-[#64ffda]/20 hover:scale-105"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 