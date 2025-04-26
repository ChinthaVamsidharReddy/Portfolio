import { motion } from 'framer-motion';

interface Education {
  institution: string;
  period: string;
  degree: string;
  location: string;
  cgpa: string;
}

const education: Education[] = [
  {
    institution: "Kalasalingam Academy of Research and Education",
    period: "2022 - 2026",
    degree: "B.Tech in Computer Science and Engineering",
    location: "Srivilliputhur, Madurai",
    cgpa: "CGPA: 8.15"
  },
  {
    institution: "Narayana Junior College",
    period: "2020 - 2022",
    degree: "HSC",
    location: "Anantapur",
    cgpa: "CGPA: 8.22"
  },
  {
    institution: "Yasoda Concept School",
    period: "2019 - 2020",
    degree: "SSC",
    location: "Dharmavaram",
    cgpa: "CGPA: 7.40"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-[#0a192f]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
          >
            Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#8892b0] text-lg max-w-2xl mx-auto"
          >
            My academic journey and qualifications
          </motion.p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#112240] rounded-xl p-6 border border-[#1d2b4a] hover:border-[#64ffda]/20 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-[#64ffda] mb-2">
                    {edu.degree}
                  </p>
                  <p className="text-[#8892b0]">
                    {edu.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[#64ffda] font-medium">
                    {edu.period}
                  </span>
                  <span className="text-[#8892b0] text-sm">
                    {edu.cgpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 