import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const {
    title,
    category,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    problemStatement,
    technicalApproach,
    architecture,
    outcomes,
    testimonial,
    codeSnippets,
    challenges,
    learnings
  } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-poppins font-bold text-xl text-foreground">{title}</h2>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-8">
            {/* Project Image */}
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                {demoUrl && (
                  <Button
                    variant="secondary"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => window.open(demoUrl, '_blank')}
                  >
                    Live Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    onClick={() => window.open(githubUrl, '_blank')}
                  >
                    View Code
                  </Button>
                )}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-3">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics */}
            {metrics && (
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3">
                  Key Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {metrics.users && (
                    <div className="bg-muted/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">{metrics.users}</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                  )}
                  {metrics.performance && (
                    <div className="bg-muted/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-accent">{metrics.performance}</div>
                      <div className="text-sm text-muted-foreground">Performance Boost</div>
                    </div>
                  )}
                  {metrics.uptime && (
                    <div className="bg-muted/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-success">{metrics.uptime}</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Problem Statement */}
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                <Icon name="AlertCircle" size={20} className="text-warning" />
                <span>Problem Statement</span>
              </h3>
              <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
                <p className="text-foreground leading-relaxed">{problemStatement}</p>
              </div>
            </div>

            {/* Technical Approach */}
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                <Icon name="Lightbulb" size={20} className="text-primary" />
                <span>Technical Approach</span>
              </h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <p className="text-foreground leading-relaxed">{technicalApproach}</p>
              </div>
            </div>

            {/* Architecture */}
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                <Icon name="Layers" size={20} className="text-secondary" />
                <span>Architecture Overview</span>
              </h3>
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                <p className="text-foreground leading-relaxed">{architecture}</p>
              </div>
            </div>

            {/* Code Snippets */}
            {codeSnippets && codeSnippets.length > 0 && (
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Code" size={20} className="text-accent" />
                  <span>Code Highlights</span>
                </h3>
                <div className="space-y-4">
                  {codeSnippets.map((snippet, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg overflow-hidden">
                      <div className="bg-muted/50 px-4 py-2 border-b border-border">
                        <p className="text-sm font-medium text-foreground">{snippet.title}</p>
                      </div>
                      <pre className="p-4 overflow-x-auto">
                        <code className="font-jetbrains text-sm text-foreground">
                          {snippet.code}
                        </code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {challenges && (
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Zap" size={20} className="text-warning" />
                  <span>Challenges & Solutions</span>
                </h3>
                <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">{challenges}</p>
                </div>
              </div>
            )}

            {/* Outcomes */}
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                <Icon name="Target" size={20} className="text-success" />
                <span>Outcomes & Impact</span>
              </h3>
              <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                <p className="text-foreground leading-relaxed">{outcomes}</p>
              </div>
            </div>

            {/* Key Learnings */}
            {learnings && (
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="BookOpen" size={20} className="text-accent" />
                  <span>Key Learnings</span>
                </h3>
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <p className="text-foreground leading-relaxed">{learnings}</p>
                </div>
              </div>
            )}

            {/* Testimonial */}
            {testimonial && (
              <div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Quote" size={20} className="text-primary" />
                  <span>Client Feedback</span>
                </h3>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <blockquote className="text-foreground leading-relaxed italic mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;