import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const actionCards = [
    {
      id: 1,
      title: "View My Work",
      description: "Explore detailed case studies of projects I've built and the impact they've created.",
      icon: "Briefcase",
      color: "primary",
      link: "/technical-portfolio-case-studies",
      buttonText: "Browse Portfolio"
    },
    {
      id: 2,
      title: "Download Resume",
      description: "Get a detailed overview of my experience, skills, and educational background.",
      icon: "FileText",
      color: "secondary",
      link: "/assets/pdf/Vamsidhar_Reddy_Resume.pdf",
      buttonText: "Download PDF"
    },
    {
      id: 3,
      title: "Let's Collaborate",
      description: "Ready to work together? Let's discuss your project and how I can help bring it to life.",
      icon: "MessageCircle",
      color: "conversion",
      link: "/professional-contact-collaboration",
      buttonText: "Start Conversation"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary/10',
        text: 'text-primary',
        border: 'border-primary/20',
        gradient: 'from-primary/20 to-primary/5',
        button: 'bg-primary hover:bg-primary/90 text-primary-foreground'
      },
      secondary: {
        bg: 'bg-secondary/10',
        text: 'text-secondary',
        border: 'border-secondary/20',
        gradient: 'from-secondary/20 to-secondary/5',
        button: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
      },
      conversion: {
        bg: 'bg-conversion/10',
        text: 'text-conversion',
        border: 'border-conversion/20',
        gradient: 'from-conversion/20 to-conversion/5',
        button: 'bg-conversion hover:bg-conversion/90 text-conversion-foreground'
      }
    };
    return colors[color] || colors.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Ready to <span className="text-gradient">Explore More?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Now that you know my story and approach, let's dive deeper into my work and start a conversation about your next project.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionCards.map((card) => {
            const isPDF = card.link.endsWith('.pdf');
            const Wrapper = isPDF ? 'a' : Link;
            const wrapperProps = isPDF
              ? { href: card.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: card.link };

            return (
              <div
                key={card.id}
                className={`group relative bg-gradient-to-br ${getColorClasses(card.color).gradient} border ${getColorClasses(card.color).border} rounded-2xl p-8 hover:glow-effect transition-all duration-300`}
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Icon name={card.icon} size={48} />
                </div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${getColorClasses(card.color).bg} flex items-center justify-center mb-6`}>
                    <Icon name={card.icon} size={28} className={getColorClasses(card.color).text} />
                  </div>

                  <h3 className="text-xl font-poppins font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{card.description}</p>

                  <Wrapper {...wrapperProps}>
                    <Button
                      variant="default"
                      className={getColorClasses(card.color).button}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      {card.buttonText}
                    </Button>
                  </Wrapper>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={36} className="text-white" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-poppins font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for a technical co-founder, a senior developer for your team, or someone to bring your vision to life, I'm here to help create solutions that make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/professional-contact-collaboration">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  iconName="Mail"
                  iconPosition="left"
                >
                  Get In Touch
                </Button>
              </Link>

              <Link to="/skills-technical-expertise">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                  iconName="Code"
                  iconPosition="left"
                >
                  View Skills
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Available for full-time opportunities, consulting projects, and technical partnerships
              </p>
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>Remote & On-site</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} />
                  <span>IST Timezone</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={16} />
                  <span>Available Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
