import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalSummary = () => {
  const stats = [
    { label: 'Recent Graduate', value: '2024', icon: 'GraduationCap' },
    { label: 'Academic Projects', value: '12+', icon: 'Code' },
    { label: 'Technologies Learned', value: '15+', icon: 'BookOpen' },
    { label: 'GPA', value: '3.7', icon: 'Award' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6">
            Fresh Graduate Resume &{' '}
            <span className="text-gradient">Academic Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recent Computer Science graduate eager to launch my career in software development. 
            Showcasing my academic achievements, projects, and readiness for entry-level opportunities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group-hover:shadow-glow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={stat.icon} size={24} className="text-primary" />
                </div>
                <div className="text-3xl font-poppins font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Summary */}
        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="User" size={32} className="text-background" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Alex Johnson
              </h2>
              <p className="text-primary text-lg font-medium mb-4">
                Fresh Computer Science Graduate | Aspiring Full-Stack Developer
              </p>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Recent Computer Science graduate with a passion for creating innovative web applications. 
                  Strong foundation in programming fundamentals, data structures, and modern web technologies. 
                  Eager to contribute to dynamic development teams while continuing to learn and grow in a 
                  professional environment. Looking for entry-level opportunities to apply my academic knowledge 
                  to real-world projects.
                </p>
              </div>
              
              {/* Key Highlights */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-medium text-foreground mb-3">Academic & Personal Highlights:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Graduated with 3.7 GPA in Computer Science',
                    'Completed 12+ hands-on programming projects',
                    'Proficient in React, JavaScript, Python, and Java',
                    'Active in coding clubs and hackathons'
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Objective */}
              <div className="mt-6 p-4 bg-muted/10 rounded-lg border border-border">
                <h3 className="text-lg font-medium text-foreground mb-2">Career Objective:</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seeking an entry-level full-stack developer position where I can utilize my academic background 
                  in computer science and passion for web development to contribute to innovative projects while 
                  gaining valuable industry experience and mentorship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;