import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyTimeline = ({ timeline }) => {
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

      {/* Timeline Items */}
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <div 
            key={index}
            className={`relative flex items-start space-x-6 group cursor-pointer transition-all duration-300 ${
              selectedYear === item.year ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={() => setSelectedYear(selectedYear === item.year ? null : item.year)}
          >
            {/* Timeline Dot */}
            <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 transition-all duration-300 ${
              selectedYear === item.year 
                ? 'border-primary bg-primary shadow-lg shadow-primary/25' 
                : 'border-border bg-card group-hover:border-primary/50'
            }`}>
              <span className={`text-sm font-bold font-poppins transition-colors ${
                selectedYear === item.year ? 'text-background' : 'text-primary'
              }`}>
                {item.year}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className={`p-6 bg-card border border-border rounded-xl transition-all duration-300 ${
                selectedYear === item.year 
                  ? 'border-primary/30 shadow-lg shadow-primary/10' 
                  : 'group-hover:border-primary/20'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.milestone}
                    </h3>
                    <p className="text-muted-foreground">{item.context}</p>
                  </div>
                  <Icon 
                    name={selectedYear === item.year ? "ChevronUp" : "ChevronDown"} 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary transition-colors" 
                  />
                </div>

                {/* Technologies Learned */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Adopted:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg"
                      >
                        <Icon name={tech.icon} size={16} className="text-primary" />
                        <span className="text-sm text-primary font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedYear === item.year && (
                  <div className="space-y-4 border-t border-border pt-4 animate-in slide-in-from-top-2 duration-300">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Learning Resources:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.resources.map((resource, resIndex) => (
                          <span 
                            key={resIndex}
                            className="px-2 py-1 text-xs bg-secondary/10 text-secondary rounded-md border border-secondary/20"
                          >
                            {resource}
                          </span>
                        ))}
                      </div>
                    </div>

                    {item.projects && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Notable Projects:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {item.projects.map((project, projIndex) => (
                            <div key={projIndex} className="p-3 bg-muted/20 rounded-lg border border-border">
                              <h5 className="font-medium text-foreground">{project.name}</h5>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyTimeline;