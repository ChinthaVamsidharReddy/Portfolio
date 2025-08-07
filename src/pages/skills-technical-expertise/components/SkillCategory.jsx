import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillCategory = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-accent border-accent/30 bg-accent/10';
      case 'Advanced': return 'text-primary border-primary/30 bg-primary/10';
      case 'Intermediate': return 'text-secondary border-secondary/30 bg-secondary/10';
      case 'Beginner': return 'text-warning border-warning/30 bg-warning/10';
      default: return 'text-muted-foreground border-border bg-muted/20';
    }
  };

  const getProficiencyWidth = (level) => {
    switch (level) {
      case 'Expert': return '95%';
      case 'Advanced': return '80%';
      case 'Intermediate': return '65%';
      case 'Beginner': return '40%';
      default: return '20%';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      {/* Category Header */}
      <div 
        className="p-6 cursor-pointer hover:bg-muted/10 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient}`}>
              <Icon name={category.icon} size={24} className="text-background" />
            </div>
            <div>
              <h2 className="text-xl font-poppins font-semibold text-foreground">
                {category.name}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Skills</div>
              <div className="text-2xl font-poppins font-bold text-primary">
                {category.skills.length}
              </div>
            </div>
            <Icon 
              name={isExpanded ? "ChevronUp" : "ChevronDown"} 
              size={20} 
              className="text-muted-foreground" 
            />
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/5">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`p-4 bg-background border border-border rounded-lg hover:border-primary/30 transition-all duration-300 cursor-pointer ${
                    selectedSkill === index ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
                  }`}
                  onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name={skill.icon} size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.version}</p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-3">
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ width: getProficiencyWidth(skill.proficiency) }}
                      />
                    </div>
                  </div>

                  {/* Experience Info */}
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="text-foreground font-medium">{skill.experience}</span>
                  </div>

                  {/* Expanded Details */}
                  {selectedSkill === index && (
                    <div className="space-y-3 border-t border-border pt-3 animate-in slide-in-from-top-2 duration-300">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Projects:</h4>
                        <ul className="space-y-1">
                          {skill.projects.map((project, projIndex) => (
                            <li key={projIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <Icon name="ArrowRight" size={12} className="text-primary mt-1 flex-shrink-0" />
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Related Tools:</h4>
                        <div className="flex flex-wrap gap-1">
                          {skill.tools.map((tool, toolIndex) => (
                            <span 
                              key={toolIndex}
                              className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded border border-secondary/20"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="ExternalLink"
                          iconPosition="right"
                          className="text-primary border-primary/20 hover:bg-primary/10"
                        >
                          View Projects
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="BookOpen"
                          iconPosition="right"
                          className="text-secondary hover:text-secondary/80"
                        >
                          Documentation
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCategory;