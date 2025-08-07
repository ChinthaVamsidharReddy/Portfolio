import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  if (!project) return null;

  const {
    title,
    category,
    description,
    image,
    technologies,
    metrics,
    demoUrl,
    githubUrl,
    outcomes
  } = project;

  return (
    <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-xl p-8 mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="Star" size={16} className="text-accent-foreground" />
        </div>
        <div>
          <h2 className="font-poppins font-bold text-xl text-foreground">Featured Project</h2>
          <p className="text-sm text-muted-foreground">Showcasing technical excellence</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Image */}
        <div className="relative">
          <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
              {demoUrl && (
                <Button
                  variant="secondary"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => window.open(demoUrl, '_blank')}
                  className="flex-1 bg-background/90 backdrop-blur-sm"
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
                  className="flex-1 bg-background/90 backdrop-blur-sm border-border/50"
                >
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                {category}
              </span>
            </div>
            <h3 className="font-poppins font-bold text-2xl text-foreground mb-3">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
              <Icon name="Code" size={16} />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-md font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          {metrics && (
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} />
                <span>Impact Metrics</span>
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {metrics.users && (
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <div className="text-lg font-bold text-foreground">{metrics.users}</div>
                    <div className="text-xs text-muted-foreground">Users</div>
                  </div>
                )}
                {metrics.performance && (
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <div className="text-lg font-bold text-accent">{metrics.performance}</div>
                    <div className="text-xs text-muted-foreground">Performance</div>
                  </div>
                )}
                {metrics.uptime && (
                  <div className="text-center p-3 bg-card/50 rounded-lg">
                    <div className="text-lg font-bold text-success">{metrics.uptime}</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Key Outcomes */}
          {outcomes && (
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center space-x-2">
                <Icon name="Target" size={16} />
                <span>Key Outcomes</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {outcomes}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4">
            <Button
              variant="default"
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onViewDetails(project)}
              className="bg-primary hover:bg-primary/90"
            >
              View Full Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;