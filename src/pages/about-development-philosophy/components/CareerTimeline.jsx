import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2024",
      title: "Intern web developer",
      company: " Octanet Services Pvt Ltd",
      type: "experience",
      description: "Developed and maintained multiple client-facing applications with focus on performance and user experience.",
      achievements: [
        ` Designedanddeployeddynamic,cross-browsercompatiblewebplatformsusingHTML,CSS,JavaScript,
          and integrated backend services with Java.`,
        `Improved page load speed and engagement by implementing asynchronous data fetching, responsive layouts, and frontend optimization strategies`,
        "Mentored 5 junior developers in modern development practices",
        `Contributed to REST API integration and application security, enhancing user data protection and
          ensuring reliable functionality across multiple platforms.`
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Java", "MYSQL"],
      icon: "Briefcase"
    },
    {
    id: 3,
    year: "2025",
    title: "Project Developer",
    company: "Self-Initiated / Academic Projects",
    type: "experience",
    description: "Built and led multiple full-stack, AI, and ML projects, focusing on real-world impact and scalable architecture.",
    achievements: [
          " AgroDoc AI – AI-based crop disease diagnosis system using CNN + NLP with multilingual audio output. Built with Flask and deployed via Render.",
          " Herbal Plant Identifier – Offline Flutter app using a custom-trained TensorFlow Lite model to identify Indian medicinal leaves.",
          " FightNest – A full-stack web application built with Spring Boot, Spring Security (JWT), and Spring Data JPA to detect and manage suspicious user interface patterns. Integrated role-based access, secure API endpoints, and a MySQL-backed reporting system for tracking user interactions.",
          " Student Management System – Web-based app to manage attendance, marks, and user roles using JSP, Servlets, and MySQL.",
          " Service Hub – Full-stack service booking platform built with ReactJS, Node.js, and MySQL. Implemented real-time synchronization and JWT-based authentication for secure access. Designed RESTful APIs and optimized MySQL queries, improving booking processing speed by 20% and supporting 1000+ concurrent users.",
          " Number Guessing Game & ATM Machine – Console-based Java applications demonstrating strong OOP and logic skills.",
          " Vending Machine with IoT – Arduino-powered reward system for recycling detection using inductive sensor and servo motor."
        ],
      technologies: [
  "Python",
  "TensorFlow",
  "TFLite",
  "Flask",
  "Spring Boot",
  "Spring Security (JWT)",
  "Spring Data JPA",
  "MySQL",
  "React",
  "JSP",
  "Servlet",
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "Flutter",
  "Arduino",
],

  icon: "Project"
    },
    // {
    //   id: 3,
    //   year: "2021",
    //   title: "Frontend Developer",
    //   company: "StartupHub Technologies",
    //   type: "experience",
    //   description: "Specialized in creating interactive user interfaces and optimizing frontend performance.",
    //   achievements: [
    //     "Developed component library used across 8 different projects",
    //     "Improved Core Web Vitals scores by 40% on average",
    //     "Implemented responsive designs supporting all device types",
    //     "Collaborated with UX team to enhance user engagement by 35%"
    //   ],
    //   technologies: ["React", "JavaScript", "SCSS", "Webpack", "Jest"],
    //   icon: "Monitor"
    // },
    // {
    //   id: 4,
    //   year: "2020",
    //   title: "Junior Developer",
    //   company: "CodeCraft Solutions",
    //   type: "experience",
    //   description: "Started my professional journey learning modern web development practices and contributing to team projects.",
    //   achievements: [
    //     "Completed 20+ feature implementations under senior guidance",
    //     "Learned agile development methodologies and version control",
    //     "Contributed to bug fixes and code reviews",
    //     "Gained expertise in responsive design and cross-browser compatibility"
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Bootstrap"],
    //   icon: "GraduationCap"
    // },
    {
      id: 2,
      year: "2026",
      title: "Computer Science Graduate",
      company: "kalasalingam University",
      type: "education",
      description: "Completed Bachelor\'s degree with focus on software engineering and web technologies.",
      achievements: [
        "Pursuing B.Tech in Computer Science – CGPA: 8.1/10",
        "Led final year project on AgroDoc AI – Virtual Agronomist",
        "Active member of coding club and hackathon participant",
        "Completed internship at local tech startup"
      ],
      technologies: ["Java", "Python", "MySQL", "Data Structures", "Algorithms"],
      icon: "BookOpen"
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'current':
        return 'text-conversion border-conversion bg-conversion/10';
      case 'experience':
        return 'text-primary border-primary bg-primary/10';
      case 'education':
        return 'text-accent border-accent bg-accent/10';
      default:
        return 'text-muted-foreground border-border bg-muted/10';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and meaningful contributions to the development community.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary opacity-30"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-2 ${getTypeColor(item.type)} z-10`}></div>

                {/* Content card */}
                <div className="ml-20">
                  <div 
                    className="bg-card border border-border rounded-xl p-6 hover:glow-effect transition-all duration-300 cursor-pointer"
                    onClick={() => toggleExpanded(item.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeColor(item.type)}`}>
                          <Icon name={item.icon} size={20} />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-sm font-medium text-primary">{item.year}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">
                              {item.type}
                            </span>
                          </div>
                          <h3 className="text-lg font-poppins font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                        </div>
                      </div>
                      
                      <Icon 
                        name={expandedItem === item.id ? "ChevronUp" : "ChevronDown"} 
                        size={20} 
                        className="text-muted-foreground transition-transform duration-200"
                      />
                    </div>

                    <p className="text-muted-foreground mb-4">{item.description}</p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable achievements */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      expandedItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-border pt-4">
                        <h4 className="text-sm font-medium mb-3 text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;