import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillMeter = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setProgress(skill.proficiency);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.proficiency, delay]);

  const getProgressColor = (level) => {
  if (level >= 90) return 'from-blue-500 to-indigo-600';       // Expert
  if (level >= 85) return 'from-teal-400 to-blue-500';         // Strong
  if (level >= 80) return 'from-green-400 to-teal-500';        // Very Good
  if (level >= 75) return 'from-yellow-400 to-orange-500';     // Moderate
  if (level >= 60) return 'from-orange-400 to-red-500';        // Basic
  return 'from-gray-400 to-red-500';                           // Needs work
};


  return (
    <div className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${getProgressColor(skill.proficiency)}`}>
            <Icon name={skill.icon} size={20} className="text-background" />
          </div>
          <div>
            <h3 className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
              {skill.name}
            </h3>
            <p className="text-sm text-muted-foreground">{skill.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-poppins font-bold text-primary">
            {progress}%
          </div>
          <div className="text-xs text-muted-foreground">{skill.level}</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mb-4">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getProgressColor(skill.proficiency)} transition-all duration-1000 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="absolute -top-1 bg-primary w-3 h-4 rounded-full transition-all duration-1000 ease-out"
             style={{ left: `calc(${progress}% - 6px)` }} />
      </div>

      {/* Experience Details */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Experience:</span>
          <span className="text-foreground font-medium">{skill.experience}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Projects:</span>
          <span className="text-foreground font-medium">{skill.projects}+</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Last Used:</span>
          <span className="text-foreground font-medium">{skill.lastUsed}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {skill.description}
      </p>

      {/* Technologies/Tools */}
      <div className="flex flex-wrap gap-2">
        {skill.tools.map((tool, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillMeter;