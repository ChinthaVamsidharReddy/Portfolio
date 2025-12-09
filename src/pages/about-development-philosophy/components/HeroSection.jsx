import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Code" size={16} />
                <span>Full-Stack Developer</span>
              </div> */}
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Vamsidhar Reddy</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-inter leading-relaxed">
                Crafting digital solutions that bridge the gap between complex technical challenges and meaningful user experiences.
              </p>
            </div>

            {/* Philosophy Statement */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 lg:p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-conversion/10 rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-conversion" />
                </div>
                <div>
                  <h3 className="text-lg font-poppins font-semibold mb-3">Development Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Every line of code should serve a purpose, every feature should solve a real problem, and every solution should be built with the end user in mind. Technology is just a tool—the real magic happens when we use it to create experiences that matter."
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold text-primary">Fresher</div>
                <div className="text-sm text-muted-foreground">Graduate 2026</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold text-accent">20+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-poppins font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-10xl rotate-6"></div>
                <div className="relative bg-card border border-border rounded-3xl overflow-hidden glow-effect">
                  <Image
                    src="assets\images\vamsiside.png"
                    alt="Vamsidhar Reddy - Full Stack Developer"
                    // className="w-full h-full object-cover"
                    className="w-100 h-120 mx-auto relative"

                  />
                  
                  {/* Overlay with tech elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Floating tech badges */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'SpringBoot','Hibernate','MYSQL'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-2xl rotate-12 floating-badge"></div>
            <div className="absolute -bottom-4 -left-10 w-16 h-16 bg-accent/20 rounded-xl -rotate-12 floating-badge animation-delay-200"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-inter">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;