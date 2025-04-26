import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const experiences = [
  {
    "title": "Web Developer Intern",
    "company": "OctaNet Services Pvt Ltd",
    "period": "2022",
    "description": "Worked on developing and optimizing web applications using modern technologies.",
    "skills": ["React", "TypeScript", "Next.js", "Java (basic)"],
    "achievements": [
        "Developed a landing page and to-do list project using React and TypeScript",
        "Improved website responsiveness and performance",
        "Gained hands-on experience in front-end development with React and TypeScript",
        "Explored Java for backend logic and application structure"
    ]
},
  // {
  //   title: "Full Stack Developer",
  //   company: "Startup",
  //   period: "2020 - 2022",
  //   description: "Developed and maintained multiple client projects with focus on user experience.",
  //   skills: ["Vue.js", "Python", "Docker", "MongoDB"],
  //   achievements: [
  //     "Reduced loading time by 60%",
  //     "Implemented real-time features",
  //     "Mentored junior developers"
  //   ]
  // }
];

const education = [
  {
    "degree": "Bachelor of Technology (B.Tech) in Computer Science",
    "institution": "Kalasalingam Academy of Research and Education",
    "period": "2022 - 2026",
    "description": "Focused on software development, data structures, and web technologies.",
    "achievements": [
        "Developed multiple projects including a library system and an ATM simulation",
        "Completed internships in web development and Java development",
        "Participated in coding competitions and hackathons"
    ]
},
{
    "degree": "Higher Secondary Certificate (HSC)",
    "institution": "Narayana Junior College",
    "period": "2020 - 2022",
    "description": "Studied core subjects including Mathematics, Physics, and chemistry",
    "achievements": [
    ]
},
{
    "degree": "Secondary School Certificate (SSC)",
    "institution": "Yasoda Concept School",
    "period": "2019 - 2020",
    "description": "Foundation in Science, Mathematics, and Computer Applications.",
    "achievements": [
    ]
}
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />
      </div>

      <motion.div
        ref={ref}
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              A journey through my professional growth and academic achievements
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 md:space-y-20">
          {/* Professional Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-10 flex items-center gap-3 md:gap-4 px-2 md:px-0"
            >
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white text-xl md:text-2xl">
                💼
              </span>
              Professional Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-blue-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-20 pb-12 md:pb-16 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-7 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/50 animate-pulse" />
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative backdrop-blur-sm bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 transition-all duration-300 hover:border-emerald-500/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {exp.title}
                        </h4>
                        <span className="px-3 md:px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium border border-emerald-500/20 w-fit">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">{exp.company}</p>
                      <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{exp.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={achievement}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.3 + i * 0.1 }}
                                className="flex items-center text-sm md:text-base text-gray-300"
                              >
                                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-2 md:mr-3 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Technologies</h5>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {exp.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-gray-300 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-10 flex items-center gap-3 md:gap-4 px-2 md:px-0"
            >
              <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl md:text-2xl">
                🎓
              </span>
              Education
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-500" />

              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-3 md:left-7 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50 animate-pulse" />
                  
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative backdrop-blur-sm bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-8 border border-white/10 transition-all duration-300 hover:border-cyan-500/30">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="px-3 md:px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium border border-cyan-500/20 w-fit">
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6">{edu.institution}</p>
                      <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{edu.description}</p>

                      {/* <div>
                        <h5 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={achievement}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: index * 0.3 + i * 0.1 }}
                              className="flex items-center text-sm md:text-base text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2 md:mr-3 flex-shrink-0" />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div> */}
                      {edu.degree.includes("Bachelor") && edu.achievements.length > 0 && (
  <div>
    <h5 className="text-base md:text-lg font-medium text-white mb-2 md:mb-3">Key Achievements</h5>
    <ul className="space-y-2">
      {edu.achievements.map((achievement, i) => (
        <motion.li
          key={achievement}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: index * 0.3 + i * 0.1 }}
          className="flex items-center text-sm md:text-base text-gray-300"
        >
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-2 md:mr-3 flex-shrink-0" />
          {achievement}
        </motion.li>
      ))}
    </ul>
  </div>
)}

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 