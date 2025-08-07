import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnologies, 
  onCategoryChange, 
  onTechnologyToggle,
  onClearFilters,
  projectCount 
}) => {
  const hasActiveFilters = selectedCategory !== 'All' || selectedTechnologies.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-poppins font-semibold text-lg text-foreground mb-1">
            Filter Projects
          </h3>
          <p className="text-sm text-muted-foreground">
            {projectCount} project{projectCount !== 1 ? 's' : ''} found
          </p>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
          <Icon name="Folder" size={16} />
          <span>Category</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div>
        <h4 className="font-medium text-foreground mb-3 flex items-center space-x-2">
          <Icon name="Code" size={16} />
          <span>Technologies</span>
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => {
            const isSelected = selectedTechnologies.includes(tech);
            return (
              <button
                key={tech}
                onClick={() => onTechnologyToggle(tech)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  isSelected
                    ? 'bg-secondary text-secondary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {isSelected && <Icon name="Check" size={12} />}
                <span>{tech}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;