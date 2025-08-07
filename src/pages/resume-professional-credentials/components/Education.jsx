import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Education = () => {
  const [expandedEdu, setExpandedEdu] = useState(null);

  const education = [
    {
      institution: 'State University',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2020 - 2024',
      location: 'California, USA',
      gpa: '3.7/4.0',
      logo: 'GraduationCap',
      description: 'Comprehensive computer science program with focus on software engineering and web development',
      coursework: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming (Java)',
        'Web Development (HTML, CSS, JavaScript)',
        'Database Systems and SQL',
        'Software Engineering Principles',
        'Computer Networks',
        'Operating Systems',
        'Discrete Mathematics',
        'Human-Computer Interaction',
        'Mobile App Development'
      ],
      projects: [
        {
          name: 'Student Course Management System',
          description: 'Full-stack web app for managing student courses with React and Node.js',
          technologies: ['React', 'Node.js', 'MySQL', 'Express.js']
        },
        {
          name: 'Campus Navigation Mobile App',
          description: 'Android app using GPS to help students navigate campus buildings',
          technologies: ['Java', 'Android Studio', 'Google Maps API', 'SQLite']
        },
        {
          name: 'Algorithm Visualization Tool',
          description: 'Interactive web tool to visualize sorting and search algorithms',
          technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'D3.js']
        }
      ],
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.7/4.0)',
        'Dean\'s List for 4 semesters',
        'Computer Science Club Vice President (2022-2023)',
        'Winner of Annual Hackathon 2023',
        'Peer Tutor for Data Structures course'
      ]
    },
    {
      institution: 'Community College',
      degree: 'Associate of Science in Mathematics',
      duration: '2018 - 2020',
      location: 'California, USA',
      gpa: '3.8/4.0',
      logo: 'Calculator',
      description: 'Strong foundation in mathematics and science before transferring to university',
      coursework: [
        'Calculus I, II, III',
        'Linear Algebra',
        'Discrete Mathematics',
        'Statistics and Probability',
        'Physics I, II',
        'Introduction to Programming (Python)'
      ],
      projects: [
        {
          name: 'Math Tutoring Website',
          description: 'Created simple website to help classmates with math concepts',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
        },
        {
          name: 'Scientific Calculator',
          description: 'Python-based calculator with graphing capabilities',
          technologies: ['Python', 'Tkinter', 'Matplotlib', 'NumPy']
        }
      ],
      achievements: [
        'Graduated with Highest Honors (GPA: 3.8/4.0)',
        'Mathematics Department Award recipient',
        'Phi Theta Kappa Honor Society member',
        'Successfully transferred to 4-year university'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: 'Cloud'
    },
    {
      name: 'Google IT Support Certificate',
      issuer: 'Google (Coursera)',
      date: '2023',
      icon: 'Settings'
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta (Coursera)',
      date: '2023',
      icon: 'Code'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: '2022',
      icon: 'Award'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
            Education & Academic Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science with hands-on project experience
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                {/* Education Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-muted/10 transition-colors"
                  onClick={() => setExpandedEdu(expandedEdu === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon name={edu.logo} size={28} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-poppins font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium text-lg mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" size={14} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="MapPin" size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Award" size={14} />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                    <Icon 
                      name={expandedEdu === index ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-muted-foreground flex-shrink-0 ml-4" 
                    />
                  </div>
                </div>

                {/* Expanded Education Content */}
                {expandedEdu === index && (
                  <div className="border-t border-border bg-muted/5 animate-in slide-in-from-top-2 duration-300">
                    <div className="p-6 space-y-6">
                      {/* Relevant Coursework */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <div key={courseIndex} className="flex items-start space-x-2">
                              <Icon name="BookOpen" size={14} className="text-secondary mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Academic Projects */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Key Academic Projects:</h4>
                        <div className="space-y-3">
                          {edu.projects.map((project, projIndex) => (
                            <div key={projIndex} className="bg-background border border-border rounded-lg p-4">
                              <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                  <span 
                                    key={techIndex}
                                    className="px-2 py-1 text-xs bg-accent/10 text-accent rounded border border-accent/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Academic Achievements:</h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3">
                              <Icon name="Trophy" size={16} className="text-warning mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Online Learning & Certifications */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Continuous Learning & Certifications
            </h3>
            <p className="text-muted-foreground">
              Self-directed learning through online courses and professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4">
                  <Icon name={cert.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2 text-sm">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-accent font-medium">{cert.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="bg-muted/10 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <strong>Learning Philosophy:</strong> I believe in continuous learning and staying current with technology trends. 
                These certifications complement my formal education and demonstrate my commitment to professional growth.
              </p>
            </div>
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              className="text-primary border-primary/20 hover:bg-primary/10"
            >
              View All Certificates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;