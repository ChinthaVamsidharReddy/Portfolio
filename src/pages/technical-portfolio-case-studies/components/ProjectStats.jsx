import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'Completed').length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    featured: projects.filter(p => p.featured).length,
    categories: [...new Set(projects.map(p => p.category))].length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))].length
  };

  const statItems = [
    {
      label: 'Total Projects',
      value: stats.total,
      icon: 'Briefcase',
      color: 'text-primary bg-primary/10'
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: 'CheckCircle',
      color: 'text-success bg-success/10'
    },
    {
      label: 'In Progress',
      value: stats.inProgress,
      icon: 'Clock',
      color: 'text-warning bg-warning/10'
    },
    {
      label: 'Featured',
      value: stats.featured,
      icon: 'Star',
      color: 'text-accent bg-accent/10'
    },
    {
      label: 'Categories',
      value: stats.categories,
      icon: 'Folder',
      color: 'text-secondary bg-secondary/10'
    },
    {
      label: 'Technologies',
      value: stats.technologies,
      icon: 'Code',
      color: 'text-conversion bg-conversion/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {statItems.map((stat, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/30 transition-colors duration-200"
        >
          <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-3`}>
            <Icon name={stat.icon} size={20} />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;