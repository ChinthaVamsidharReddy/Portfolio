import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkExperience = () => {
  const [expandedJob, setExpandedJob] = useState(0);

  const experiences = [
    {
      company: 'TechStart Solutions',
      position: 'Web Development Intern',
      duration: 'Jun 2023 - Aug 2023',
      location: 'Remote',
      type: 'Summer Internship',
      logo: 'Briefcase',
      description: 'Summer internship focused on frontend development and learning modern web technologies in a startup environment.',
      achievements: [
        'Contributed to company website redesign using React and Tailwind CSS',
        'Fixed 15+ UI bugs and improved mobile responsiveness',
        'Collaborated with design team on 3 client projects',
        'Participated in daily standups and agile development process'
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git', 'Figma'],
      projects: [
        {
          name: 'Company Website Redesign',
          description: 'Helped redesign company landing page with modern UI',
          impact: 'Improved loading speed by 30%'
        },
        {
          name: 'Client Portfolio Sites',
          description: 'Built responsive portfolio websites for 3 clients',
          impact: 'All delivered on time with positive feedback'
        }
      ]
    },
    {
      company: 'University Computer Lab',
      position: 'Lab Teaching Assistant',
      duration: 'Sep 2022 - May 2024',
      location: 'State University',
      type: 'Part-time',
      logo: 'GraduationCap',
      description: 'Teaching assistant for Introduction to Programming course, helping students learn Java and fundamental programming concepts.',
      achievements: [
        'Assisted 60+ students per semester with programming assignments',
        'Conducted weekly lab sessions on Java programming',
        'Graded assignments and provided constructive feedback',
        'Maintained lab equipment and software installations'
      ],
      technologies: ['Java', 'Eclipse IDE', 'IntelliJ IDEA', 'Git', 'JUnit', 'BlueJ'],
      projects: [
        {
          name: 'Student Code Review System',
          description: 'Created automated script to help with assignment grading',
          impact: 'Reduced grading time by 40%'
        },
        {
          name: 'Programming Tutorial Videos',
          description: 'Created instructional videos for common programming concepts',
          impact: 'Used by 200+ students'
        }
      ]
    },
    {
      company: 'Local Coffee Shop',
      position: 'Barista & Shift Supervisor',
      duration: 'Jan 2021 - Dec 2022',
      location: 'College Town, CA',
      type: 'Part-time',
      logo: 'Coffee',
      description: 'Customer service role while attending university, developed strong communication and time management skills.',
      achievements: [
        'Supervised team of 5 baristas during busy shifts',
        'Handled cash management and inventory tracking',
        'Maintained 98% customer satisfaction rating',
        'Trained 8 new employees on coffee preparation and POS system'
      ],
      technologies: ['POS Systems', 'Inventory Management', 'Excel', 'Customer Service'],
      projects: [
        {
          name: 'Inventory Tracking Spreadsheet',
          description: 'Created Excel system for tracking daily inventory',
          impact: 'Reduced waste by 20%'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
            Experience & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Internships, part-time work, and leadership roles that shaped my professional development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block"></div>

                <div className="lg:ml-16">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                    {/* Job Header */}
                    <div 
                      className="p-6 cursor-pointer hover:bg-muted/10 transition-colors"
                      onClick={() => setExpandedJob(expandedJob === index ? -1 : index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon name={job.logo} size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-poppins font-semibold text-foreground">
                              {job.position}
                            </h3>
                            <p className="text-primary font-medium text-lg mb-1">
                              {job.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Icon name="Calendar" size={14} />
                                <span>{job.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="MapPin" size={14} />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Icon name="Briefcase" size={14} />
                                <span>{job.type}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-2">{job.description}</p>
                          </div>
                        </div>
                        <Icon 
                          name={expandedJob === index ? "ChevronUp" : "ChevronDown"} 
                          size={20} 
                          className="text-muted-foreground flex-shrink-0 ml-4" 
                        />
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedJob === index && (
                      <div className="border-t border-border bg-muted/5 animate-in slide-in-from-top-2 duration-300">
                        <div className="p-6 space-y-6">
                          {/* Key Achievements */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities & Achievements:</h4>
                            <div className="space-y-2">
                              {job.achievements.map((achievement, achIndex) => (
                                <div key={achIndex} className="flex items-start space-x-3">
                                  <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Technologies & Skills Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Key Projects */}
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Notable Projects & Contributions:</h4>
                            <div className="space-y-3">
                              {job.projects.map((project, projIndex) => (
                                <div key={projIndex} className="bg-background border border-border rounded-lg p-4">
                                  <h5 className="font-medium text-foreground mb-1">{project.name}</h5>
                                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                                  <div className="flex items-center space-x-2">
                                    <Icon name="TrendingUp" size={14} className="text-accent" />
                                    <span className="text-sm text-accent font-medium">{project.impact}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex space-x-3 pt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              iconName="ExternalLink"
                              iconPosition="right"
                              className="text-primary border-primary/20 hover:bg-primary/10"
                            >
                              View Details
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              iconName="MessageSquare"
                              iconPosition="right"
                              className="text-secondary hover:text-secondary/80"
                            >
                              References Available
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-poppins font-bold mb-4">
              Ready for My First Full-Time Role
            </h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-2xl mx-auto">
              My internship and part-time experiences have prepared me for a full-time development role. 
              I'm excited to bring my enthusiasm, fresh perspective, and eagerness to learn to your team.
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
                  Let's Connect
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;