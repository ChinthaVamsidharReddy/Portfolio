import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink?: string;
  features: string[];
  role: string;
  duration: string;
}

const projects: Project[] = [
  // {
  //   title: "Rice Leaf Disease Prediction",
  //   description: "A machine learning-based system for early detection and classification of rice leaf diseases, helping farmers improve crop management and yield.",
  //   technologies: ["Python", "Machine Learning", "Random Forest", "CNN", "OpenCV", "TensorFlow", "Scikit-learn"],
  //   image: "/rice-disease.png",
  //   githubLink: "https://github.com/yourusername/rice-disease-prediction",
  //   features: [
  //     "Advanced image processing and preprocessing techniques",
  //     "Multiple ML algorithms including Random Forest and CNNs",
  //     "High-precision disease classification system",
  //     "Comprehensive performance metrics (accuracy, precision, recall)",
  //     "Early disease detection capabilities",
  //     "User-friendly interface for farmers",
  //     "Dataset optimization and feature extraction"
  //   ],
  //   role: "Machine Learning Engineer",
  //   duration: "2 months"
  // },
  {
    title: "Service Hub",
    description: "A comprehensive service booking platform that connects service providers with customers, featuring real-time updates and efficient management tools.",
    technologies: ["ReactJS", "NodeJS", "MySQL", "Express.js", "Socket.io", "JWT Authentication"],
    image: "/Portfolio/image.png",
    githubLink: "https://github.com/ChinthaVamsidharReddy/Service-Hub",
    demoLink: "https://service-hub-demo.com",
    features: [
      "Real-time booking updates and notifications",
      "Worker management system with scheduling",
      "User booking system with calendar integration",
      "Secure payment processing",
      "Admin dashboard for service management",
      "Responsive design for all devices"
    ],
    role: "Full Stack Developer",
    duration: "3 months"
  },
  {
    title: "ATM Simulation",
    description: "A Java-based ATM simulation system that replicates real-world banking operations with secure transaction handling.",
    technologies: ["Java", "Object-Oriented Programming", "File I/O", "Exception Handling"],
    image: "/Portfolio/atm.png",
    githubLink: "https://github.com/ChinthaVamsidharReddy/ATM-Simulation",
    features: [
      "Secure PIN authentication system",
      "Transaction history tracking",
      "Balance inquiry and management",
      "Cash withdrawal and deposit operations",
      "PIN change functionality",
      "Error handling and logging"
    ],
    role: "Solo Developer",
    duration: "1 month"
  },
  {
    title: "To-Do List Web App",
    description: "A modern task management application with intuitive user interface and persistent data storage.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage API", "Responsive Design"],
    image: "/Portfolio/todo.jpg",
    githubLink: "https://github.com/ChinthaVamsidharReddy/To-do-list",
    demoLink: "https://chinthavamsidharreddy.github.io/To-do-list/",
    features: [
      "Create, read, update, and delete tasks",
      "Task categorization and filtering",
      "Due date management",
      "Priority levels for tasks",
      "Dark/Light mode toggle",
      "Data persistence using local storage",
      "Responsive design for all screen sizes"
    ],
    role: "Frontend Developer",
    duration: "2 weeks"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#8892b0] text-lg max-w-2xl mx-auto"
          >
            A showcase of my recent work and technical capabilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="bg-[#112240] rounded-xl overflow-hidden border border-[#1d2b4a] hover:border-[#64ffda]/20 transition-colors duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-[#ccd6f6] mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-[#64ffda]">{project.role}</span>
                      <span className="text-sm text-[#8892b0]">{project.duration}</span>
                    </div>
                    <p className="text-[#8892b0] mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm text-[#64ffda] bg-[#64ffda]/10 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-[#64ffda] mt-1">•</span>
                          <span className="text-[#8892b0]">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 text-[#64ffda] border border-[#64ffda] rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                      >
                        View Code
                      </a>
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 text-[#64ffda] border border-[#64ffda] rounded-lg hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 