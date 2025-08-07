import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const availability = {
    status: 'available', // or 'limited', 'busy' if needed
    preferredRoles: ['Internships', 'Full-Time Roles', 'Java Backend', 'Spring Boot', 'AI/ML Projects','Nodejs','Software Engineer','Full-Stack Development'],
    workingHours: {
      timezone: 'IST (UTC+5:30)',
      hours: '10:00 AM - 6:00 PM',
      days: 'Monday - Saturday'
    },
    responseTime: {
      email: 'Within 24 hrs',
      linkedin: 'Same day',
      urgent: 'Quick Response'
    }
  };

  const statusColors = {
    bg: 'bg-success/20',
    text: 'text-success',
    border: 'border-success/30',
    dot: 'bg-success'
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short'
    });
  };
  const handleContactClick = () => {
    navigate('/contact-methods'); // Navigate to your ContactMethods page
  };

  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Availability & Contact Info
        </h3>
        <p className="text-muted-foreground">
          Open to opportunities | Actively looking to grow
        </p>
      </div>

      {/* Status Indicator */}
      <div className={`${statusColors.bg} ${statusColors.border} border rounded-xl p-6 mb-8`}>
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="relative">
            <div className={`w-4 h-4 ${statusColors.dot} rounded-full`}></div>
            <div className={`absolute inset-0 w-4 h-4 ${statusColors.dot} rounded-full animate-ping opacity-75`}></div>
          </div>
          <h4 className={`text-xl font-poppins font-bold ${statusColors.text}`}>
            Actively Seeking Opportunities
          </h4>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Current Time: {formatTime(currentTime)}
        </p>
      </div>

      {/* Preferred Roles */}
      <div className="mb-8">
        <h4 className="font-poppins font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Heart" size={18} className="text-error mr-2" />
          Interested In
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {availability.preferredRoles.map((role, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-sm text-foreground">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Working Hours */}
      <div className="mb-8">
        <h4 className="font-poppins font-semibold text-foreground mb-4 flex items-center">
          <Icon name="Clock" size={18} className="text-accent mr-2" />
          Available For Communication
        </h4>
        <p className="text-sm text-muted-foreground">
          {availability.workingHours.days}, {availability.workingHours.hours} ({availability.workingHours.timezone})
        </p>
      </div>

      {/* Response Times */}
      <div className="mb-8">
        <h4 className="font-poppins font-semibold text-foreground mb-4 flex items-center">
          <Icon name="MessageCircle" size={18} className="text-secondary mr-2" />
          Response Time
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-xs text-muted-foreground">{availability.responseTime.email}</p>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <Icon name="Linkedin" size={24} className="text-secondary mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">LinkedIn</p>
            <p className="text-xs text-muted-foreground">{availability.responseTime.linkedin}</p>
          </div>
          <div className="text-center p-4 bg-background rounded-lg border border-border">
            <Icon name="Zap" size={24} className="text-warning mx-auto mb-2" />
            <p className="text-sm font-medium text-foreground">Urgent</p>
            <p className="text-xs text-muted-foreground">{availability.responseTime.urgent}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          size="lg"
          iconName="MessageSquare"
          iconPosition="left"
          className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
        <a
          href="/assets/pdf/Vamsidhar_Reddy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            variant="outline"
            size="lg"
            iconName="Download"
            iconPosition="left"
            className="border-primary/20 text-primary hover:bg-primary/10 w-full"
          >
            Download Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default AvailabilityStatus;
