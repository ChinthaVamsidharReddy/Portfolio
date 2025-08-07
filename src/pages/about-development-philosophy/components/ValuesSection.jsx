import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      id: 1,
      title: "Code Quality",
      icon: "Shield",
      description: "Writing clean, maintainable, and well-documented code that stands the test of time.",
      principles: [
        "Follow SOLID principles and design patterns",
        "Comprehensive testing with high coverage",
        "Consistent code style and formatting",
        "Regular refactoring and technical debt management"
      ],
      color: "primary",
      stats: { metric: "Code Coverage", value: "95%" }
    },
    {
      id: 2,
      title: "Team Collaboration",
      icon: "Users",
      description: "Building strong relationships and fostering a culture of knowledge sharing and mutual growth.",
      principles: [
        "Open communication and transparent feedback",
        "Mentoring junior developers and sharing knowledge",
        "Active participation in code reviews",
        "Contributing to team processes and best practices"
      ],
      color: "accent",
      stats: { metric: "Developers Mentored", value: "12+" }
    },
    {
      id: 3,
      title: "Innovation",
      icon: "Lightbulb",
      description: "Embracing new technologies and methodologies to solve problems more effectively.",
      principles: [
        "Stay updated with latest industry trends",
        "Experiment with emerging technologies",
        "Propose and implement process improvements",
        "Balance innovation with stability and reliability"
      ],
      color: "secondary",
      stats: { metric: "New Tech Adopted", value: "8" }
    },
    {
      id: 4,
      title: "User Focus",
      icon: "Heart",
      description: "Every technical decision is made with the end user\'s experience and needs in mind.",
      principles: [
        "Prioritize accessibility and inclusive design",
        "Optimize for performance across all devices",
        "Gather and act on user feedback",
        "Design with empathy and user-centric thinking"
      ],
      color: "conversion",
      stats: { metric: "User Satisfaction", value: "98%" }
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20',
        gradient: 'from-primary/20 to-primary/5'
      },
      accent: {
        bg: 'bg-accent/10',
        text: 'text-accent',
        border: 'border-accent/20',
        gradient: 'from-accent/20 to-accent/5'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/20',
        gradient: 'from-secondary/20 to-secondary/5'
      },
      conversion: {
        bg: 'bg-conversion/10',
        text: 'text-conversion',
        border: 'border-conversion/20',
        gradient: 'from-conversion/20 to-conversion/5'
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Core <span className="text-gradient">Values</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The principles that guide my work and define my commitment to excellence in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`group relative bg-gradient-to-br ${getColorClasses(value.color).gradient} border ${getColorClasses(value.color).border} rounded-2xl p-8 hover:glow-effect transition-all duration-300`}
            >
              {/* Background decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Icon name={value.icon} size={64} />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-xl ${getColorClasses(value.color).bg} flex items-center justify-center`}>
                      <Icon name={value.icon} size={28} className={getColorClasses(value.color).text} />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-bold">{value.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-muted-foreground">{value.stats.metric}:</span>
                        <span className={`text-sm font-semibold ${getColorClasses(value.color).text}`}>
                          {value.stats.value}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Principles */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Key Principles
                  </h4>
                  <ul className="space-y-2">
                    {value.principles.map((principle, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded-full ${getColorClasses(value.color).bg} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                          <Icon name="Check" size={12} className={getColorClasses(value.color).text} />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {principle}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative element */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getColorClasses(value.color).gradient} rounded-b-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Contribution */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Globe" size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-2">Community Contribution</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Giving back to the development community through open source contributions, knowledge sharing, and mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Open Source Projects", value: "5+", icon: "GitBranch" },
              { label: "Git Commits", value: "100+", icon: "GitCommit" },
              { label: "Community Talks", value: "8", icon: "Mic" },
              { label: "GitHub Stars", value: "50+", icon: "Star" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} />
                </div>
                <div className="text-2xl font-poppins font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;