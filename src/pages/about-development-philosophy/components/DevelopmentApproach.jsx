import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DevelopmentApproach = () => {
  const [activeApproach, setActiveApproach] = useState(0);

  const approaches = [
    {
      id: 0,
      title: "User-Centric Design",
      icon: "Users",
      description: "Every technical decision starts with understanding the end user\'s needs and pain points.",
      details: [
        "Conduct thorough user research before writing any code",
        "Create user personas and journey maps to guide development",
        "Implement analytics to track user behavior and iterate accordingly",
        "Regular usability testing throughout the development cycle"
      ],
      color: "primary"
    },
    {
      id: 1,
      title: "Business Impact Focus",
      icon: "TrendingUp",
      description: "Technology should drive measurable business outcomes and solve real-world problems.",
      details: [
        "Align technical solutions with business objectives",
        "Measure success through KPIs and user engagement metrics",
        "Prioritize features based on ROI and user value",
        "Communicate technical concepts in business terms"
      ],
      color: "accent"
    },
    {
      id: 2,
      title: "Quality & Performance",
      icon: "Zap",
      description: "Clean, maintainable code that performs exceptionally across all devices and conditions.",
      details: [
        "Write self-documenting code with comprehensive testing",
        "Optimize for Core Web Vitals and accessibility standards",
        "Implement proper error handling and edge case coverage",
        "Regular code reviews and refactoring for technical debt management"
      ],
      color: "secondary"
    },
    {
      id: 3,
      title: "Collaborative Development",
      icon: "GitBranch",
      description: "Great software is built by great teams working together towards common goals.",
      details: [
        "Practice transparent communication and knowledge sharing",
        "Mentor junior developers and contribute to team growth",
        "Use version control and documentation for seamless collaboration",
        "Participate in code reviews and architectural discussions"
      ],
      color: "conversion"
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      primary: isActive ? 'bg-primary text-primary-foreground' : 'text-primary bg-primary/10 hover:bg-primary/20',
      accent: isActive ? 'bg-accent text-accent-foreground' : 'text-accent bg-accent/10 hover:bg-accent/20',
      secondary: isActive ? 'bg-secondary text-secondary-foreground' : 'text-secondary bg-secondary/10 hover:bg-secondary/20',
      conversion: isActive ? 'bg-conversion text-conversion-foreground' : 'text-conversion bg-conversion/10 hover:bg-conversion/20'
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Development <span className="text-gradient">Approach</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My methodology combines technical excellence with human-centered thinking to create solutions that truly matter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Approach Navigation */}
          <div className="space-y-4">
            {approaches.map((approach, index) => (
              <div
                key={approach.id}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeApproach === index
                    ? 'border-primary bg-primary/5 glow-effect' :'border-border bg-card hover:border-primary/50'
                }`}
                onClick={() => setActiveApproach(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    getColorClasses(approach.color, activeApproach === index)
                  }`}>
                    <Icon name={approach.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-poppins font-semibold mb-2">{approach.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                  <Icon 
                    name="ChevronRight" 
                    size={20} 
                    className={`text-muted-foreground transition-transform duration-300 ${
                      activeApproach === index ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Content */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  getColorClasses(approaches[activeApproach].color, true)
                }`}>
                  <Icon name={approaches[activeApproach].icon} size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold">
                    {approaches[activeApproach].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {approaches[activeApproach].description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-poppins font-semibold">Implementation Strategy:</h4>
                <ul className="space-y-3">
                  {approaches[activeApproach].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                        getColorClasses(approaches[activeApproach].color)
                      }`}>
                        <Icon name="Check" size={14} />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Flow */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                  Process Flow
                </h4>
                <div className="flex items-center space-x-2 text-sm">
                  {['Research', 'Plan', 'Build', 'Test', 'Deploy', 'Iterate'].map((step, index) => (
                    <React.Fragment key={step}>
                      <span className={`px-3 py-1 rounded-full ${
                        getColorClasses(approaches[activeApproach].color)
                      }`}>
                        {step}
                      </span>
                      {index < 5 && (
                        <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach;