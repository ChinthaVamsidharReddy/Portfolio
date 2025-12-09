import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Direct Email',
      description: 'For detailed project discussions and formal inquiries',
      value: 'vamsidharreddy831@gmail.com',
      action: 'mailto:vamsidharreddy831@gmail.com',
      icon: 'Mail',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      response: '24-48 hours'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Professional',
      description: 'Connect for networking and professional opportunities',
      value: 'linkedin.com/in/vamsidhar-reddy',
      action: 'https://www.linkedin.com/in/c-vamsidharreddy/',
      icon: 'Linkedin',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      response: 'Same day'
    },
    
    {
      id: 'github',
      title: 'GitHub Collaboration',
      description: 'For open-source projects and code reviews',
      value: 'github.com/vamsidhar-reddy',
      action: 'https://github.com/ChinthaVamsidharReddy',
      icon: 'Github',
      color: 'text-foreground',
      bgColor: 'bg-muted',
      response: '1-2 days'
    }
  ];

  const handleContactClick = (method) => {
    
    
    if (method.action.startsWith('mailto:')) {
      window.location.href = method.action;
    } else {
      window.open(method.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Multiple Ways to Connect
        </h3>
        <p className="text-muted-foreground">
          Choose the method that works best for your inquiry type
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                <Icon name={method.icon} size={24} className={method.color} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-poppins font-semibold text-foreground mb-1">
                  {method.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {method.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {method.value}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Response: {method.response}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleContactClick(method)}
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="text-primary hover:text-primary hover:bg-primary/10"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Contact Stats for Fresher */}
<div className="bg-card rounded-xl p-6 border border-border">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    
    {/* Response Time */}
    <div className="space-y-2">
      <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center mx-auto">
        <Icon name="Clock" size={16} className="text-success" />
      </div>
      <h4 className="font-poppins font-semibold text-foreground">Quick Response</h4>
      <p className="text-sm text-muted-foreground">
        Usually replies within 24 hours via email
      </p>
    </div>

    {/* Interview/HR Friendly */}
    <div className="space-y-2">
      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
        <Icon name="UserCheck" size={16} className="text-primary" />
      </div>
      <h4 className="font-poppins font-semibold text-foreground">Open to Opportunities</h4>
      <p className="text-sm text-muted-foreground">
        Actively seeking entry-level roles or internships
      </p>
    </div>

    {/* Resume Availability */}
    <div className="space-y-2">
      <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
        <Icon name="FileText" size={16} className="text-accent" />
      </div>
      <h4 className="font-poppins font-semibold text-foreground">Resume Ready</h4>
      <p className="text-sm text-muted-foreground">
        Download resume or contact via email for details
      </p>
    </div>

  </div>
</div>

    </div>
  );
};

export default ContactMethods;