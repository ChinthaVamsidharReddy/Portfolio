import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Student Management System",
      description:
        "A dynamic web application developed using JSP, Servlets, JDBC, and MySQL to manage student details, course enrollment, and academic performance. Includes features like student login, admin dashboard, CRUD operations, and secure data handling. Built with a clean UI and modular backend logic.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
      techStack: ["JSP", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3"],
      metrics: {
        grade: "A+",
        github: "Public",
      },
      githubUrl: "https://github.com/ChinthaVamsidharReddy/Student_Management_System",
      category: "Personal Project",
      featured: true,
    },
    {
      id: 2,
      title: "ServiceConnect – On-Demand Service Booking Platform",
      description:
        "A full-stack web platform developed with React, Node.js, and MySQL that allows users to discover, book, and manage local services. Includes secure user authentication, dynamic service listings, booking management, and an intuitive admin panel. Designed with scalability and user experience in mind.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      techStack: ["React", "Node.js", "MySQL", "Express.js", "CSS3"],
      metrics: {
        grade: "Personal",
        github: "Public",
      },
      githubUrl: "https://github.com/ChinthaVamsidharReddy/Service-Hub",
      category: "Academic Project",
      featured: true,
    },
    {
      id: 3,
      title: "LeafScan – Herbal Plant Identification App",
      description:
        "An AI-powered mobile app developed using Flutter and Python for offline identification of Indian medicinal plants. Utilizes a custom-trained TFLite model to recognize leaf images with high accuracy. Built to support rural healthcare and educational use cases. Works without internet once installed.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      techStack: ["Flutter", "Python", "TensorFlow Lite", "Firebase", "SQLite"],
      metrics: {
        grade: "Final year Project",
        github: "Public",
      },
      githubUrl: "https://github.com/ChinthaVamsidharReddy/Herbal-Plant-Identifier",
      category: "Final year Project",
      featured: true,
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description:
        "This very website! Built from scratch to showcase my projects and skills. Responsive design with modern UI/UX principles. Includes dark mode, smooth animations, and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Vercel"],
      metrics: {
        demo: "Live",
        github: "Public",
      },
      liveUrl: "https://chinthavamsidharreddy.github.io/Portfolio/",
      githubUrl: "https://github.com/ChinthaVamsidharReddy/Portfolio",
      category: "Personal Project",
      featured: true,
    },
  ];

  const getMetricIcon = (key) => {
    const iconMap = {
      grade: "Award",
      demo: "ExternalLink",
      github: "Github",
    };
    return iconMap[key] || "BarChart";
  };

  const getMetricLabel = (key) => {
    const labelMap = {
      grade: "Project Grade",
      github: "Source Code",
    };
    return labelMap[key] || key;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto mb-8">
            Showcasing my academic and personal projects - from coursework assignments to
            passion projects. Each demonstrates my learning journey and technical growth.
          </p>
          <Link to="/technical-portfolio-case-studies">
            <Button
              variant="outline"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 glow-effect"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-inter font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.title === "Personal Portfolio Website" && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                    >
                      <Icon name="ExternalLink" size={16} className="text-primary" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                  >
                    <Icon name="Github" size={16} className="text-primary" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs font-inter rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Icon name={getMetricIcon(key)} size={16} className="text-primary" />
                      </div>
                      <div className="text-sm font-poppins font-semibold text-primary">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground">{getMetricLabel(key)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Ready to Start My Career Journey
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              I'm excited to contribute to innovative projects and learn from experienced developers.
              Let's discuss how I can add value to your team while growing my skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/professional-contact-collaboration">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link to="/technical-portfolio-case-studies">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Briefcase"
                  iconPosition="left"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
