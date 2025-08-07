import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const {
    id,
    title,
    category,
    description,
    image,
    technologies,
    metrics,
    status,
    demoUrl,
    githubUrl,
    featured,
    completionDate,
    duration,
    teamSize
  } = project;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web Application': return 'Globe';
      case 'API Development': return 'Server';
      case 'Full-Stack Solution': return 'Layers';
      case 'Mobile App': return 'Smartphone';
      default: return 'Code';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-success bg-success/10';
      case 'In Progress': return 'text-warning bg-warning/10';
      case 'Maintenance': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className={`group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${featured ? 'ring-1 ring-primary/20' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Icon name="Star" size={12} />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {demoUrl && (
            <Button
              variant="secondary"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              className="flex-1 bg-background/90 backdrop-blur-sm"
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
              className="flex-1 bg-background/90 backdrop-blur-sm border-border/50"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              Code
            </Button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={getCategoryIcon(category)} size={16} className="text-primary" />
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-muted/30 rounded-lg">
            {metrics.users && (
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground">{metrics.users}</div>
                <div className="text-xs text-muted-foreground">Users</div>
              </div>
            )}
            {metrics.performance && (
              <div className="text-center">
                <div className="text-sm font-semibold text-accent">{metrics.performance}</div>
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
            )}
            {metrics.uptime && (
              <div className="text-center">
                <div className="text-sm font-semibold text-success">{metrics.uptime}</div>
                <div className="text-xs text-muted-foreground">Uptime</div>
              </div>
            )}
          </div>
        )}

        {/* Project Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={12} />
              <span>{completionDate}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={12} />
              <span>{teamSize}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(project)}
          className="border-primary/20 text-primary hover:bg-primary/10"
        >
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;