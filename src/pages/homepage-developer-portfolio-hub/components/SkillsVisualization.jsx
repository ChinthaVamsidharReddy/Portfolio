import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsVisualization = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "Monitor",
      skills: [
        { name: "React", level: 65, experience: "5+ months", color: "primary" },
        { name: "JSP", level: 85, experience: "1+ years", color: "secondary" },
        { name: "Servlet", level: 88, experience: "1+ years", color: "accent" },
        { name: "HTML/CSS", level: 92, experience: "2+ years", color: "conversion" }
      ]
    },
    {
      title: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 85, experience: "6+ months", color: "primary" },
        { name: "Java", level: 92, experience: "3+ years", color: "conversion" },
        { name: "Spring Boot", level: 90, experience: "6+ moths", color: "secondary" },
        { name: "Express.js", level: 80, experience: "1+ years", color: "accent" }
      ]
    },
    {
      title: "Tools & Database",
      icon: "Settings",
      skills: [
        
        { name: "Git", level: 95, experience: "2+ years", color: "primary" },
        { name: "MySQL", level: 87, experience: "1+ years", color: "accent" },
        { name: "VSCode", level: 90, experience: "3+ Years", color: "secondary" },
        { name: "Eclipse", level: 93, experience: "1+ years", color: "conversion" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          animated[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'from-primary to-primary/60',
      secondary: 'from-secondary to-secondary/60',
      accent: 'from-accent to-accent/60',
      conversion: 'from-conversion to-conversion/60'
    };
    return colorMap[color] || colorMap.primary;
  };

  const getTextColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      conversion: 'text-conversion'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels, 
            built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/20 transition-all duration-300 glow-effect"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-inter font-medium">{skill.name}</span>
                      <span className={`text-sm font-jetbrains ${getTextColorClass(skill.color)}`}>
                        {animatedSkills[skill.name] || 0}%
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getColorClass(skill.color)} transition-all duration-1000 ease-out`}
                          style={{
                            width: `${animatedSkills[skill.name] || 0}%`,
                            transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-popover border border-border rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                        <span className="text-xs font-inter whitespace-nowrap">
                          {skill.experience} experience
                        </span>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-poppins font-semibold mb-6">Additional Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "GraphQL",
      "Vite",
      "Prisma",
      "Firebase",
      "TypeScript",
      "JWT",
      "Hibernate",
      "MongoDB",
      "REST API",
      "Python",
      "Spring Boot",
      "MySQL",
      "Express"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/50 text-muted-foreground rounded-full text-sm font-inter hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;