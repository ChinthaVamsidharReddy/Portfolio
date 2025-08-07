import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityStatus from './components/AvailabilityStatus';
import SocialConnections from './components/SocialConnections';
import TrustSignals from './components/TrustSignals';
import { useNavigate } from 'react-router-dom';
const ProfessionalContactCollaboration = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const navigate = useNavigate();
  const tabs = [
    {
      id: 'contact',
      label: 'Contact Form',
      icon: 'MessageSquare',
      description: 'Send a detailed project inquiry'
    },
    {
      id: 'methods',
      label: 'Contact Methods',
      icon: 'Phone',
      description: 'Multiple ways to reach me'
    },
    {
      id: 'availability',
      label: 'Availability',
      icon: 'Calendar',
      description: 'Current status and capacity'
    },
    {
      id: 'social',
      label: 'Social Networks',
      icon: 'Users',
      description: 'Connect across platforms'
    },
    {
      id: 'trust',
      label: 'Credentials',
      icon: 'Award',
      description: 'Certifications and trust signals'
    }
  ];

  const quickStats = [
    {
      icon: 'Clock',
      value: '< 24hrs',
      label: 'Response Time',
      color: 'text-success'
    },
    {
      icon: 'Users',
      value: '5+',
      label: 'Projects Completed',
      color: 'text-primary'
    },
    {
      icon: 'Star',
      value: '4.8/5',
      label: 'Feedback Rating',
      color: 'text-warning'
    },
    {
      icon: 'CheckCircle',
      value: '100%',
      label: 'Project Success',
      color: 'text-accent'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <ContactForm />;
      case 'methods':
        return <ContactMethods />;
      case 'availability':
        return <AvailabilityStatus />;
      case 'social':
        return <SocialConnections />;
      case 'trust':
        return <TrustSignals />;
      default:
        return <ContactForm />;
    }
  };
  const handleContactClick = () => {
    navigate('/contact-methods'); // Navigate to your ContactMethods page
  };
  return (
    <div className="min-h-screen bg-background">
  <Helmet>
    <title>Contact Vamsidhar Reddy - Aspiring Full-Stack Developer | DevPortfolio</title>
    <meta
      name="description"
      content="Connect with Vamsidhar Reddy, an aspiring full-stack developer eager to collaborate on projects, internships, and learning opportunities. Open to mentorship and growth."
    />
    <meta
      name="keywords"
      content="contact developer, hire junior developer, full-stack developer contact, React developer, Node.js beginner, internship"
    />
    <meta property="og:title" content="Contact Vamsidhar Reddy - Aspiring Full-Stack Developer" />
    <meta
      property="og:description"
      content="Looking for a motivated junior developer? Get in touch with Vamsidhar Reddy for internships, projects, and collaborative learning."
    />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="/contact" />
  </Helmet>

  <Header />

  <main className="pt-16">
    {/* Hero Section */}
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="MessageCircle" size={16} />
            <span>Open for Internships & Projects</span>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
            Ready to Learn & <span className="text-gradient block">Build Together</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Eager to grow my skills and contribute to meaningful projects. Let's collaborate and
            create impactful web applications using the latest technologies.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mx-auto mb-3 border border-border">
                  <Icon name={stat.icon} size={24} className={stat.color} />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              onClick={() => setActiveTab('contact')}
            >
              Reach Out for Collaboration
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="border-primary/20 text-primary hover:bg-primary/10"
              onClick={() => setActiveTab('availability')}
            >
              Check My Availability
            </Button>
          </div>
        </div>
      </div>
    </section>

        {/* Navigation Tabs */}
        <section className="px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card rounded-2xl p-2 border border-border">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={tab.icon} size={24} />
                    <div className="text-center">
                      <div className="font-medium text-sm">{tab.label}</div>
                      <div className="text-xs opacity-80 hidden md:block">{tab.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="min-h-[600px]">
              {renderTabContent()}
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        {/* Emergency Contact Section */}
<section className="px-6 lg:px-8 pb-20">
  <div className="max-w-4xl mx-auto">
    <div className="bg-gradient-to-r from-error/10 to-warning/10 rounded-2xl p-8 border border-error/20">
      <div className="text-center">
        <div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Zap" size={32} className="text-error" />
        </div>
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Need Help Quickly? I'm Here to Support!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          For urgent questions or quick assistance on your projects, I’m available to respond promptly during regular hours.
          Let’s solve your challenges together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918317655125" className="flex-1">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="bg-error hover:bg-error/90 text-error-foreground w-full"
                >
                  Quick Contact
                </Button>
              </a>

              <a
                href="https://wa.me/918317655125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-warning/20 text-warning hover:bg-warning/10 w-full"
                >
                  Message Me on WhatsApp
                </Button>
              </a>
            </div>
        <p className="text-xs text-muted-foreground mt-4">
          Available Monday to Friday, 9 AM - 6 PM (Your Timezone)
        </p>
      </div>
    </div>
  </div>
</section>

{/* Footer CTA */}
<section className="px-6 lg:px-8 pb-20">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-poppins font-bold text-foreground mb-4">
      Excited to Start Working Together?
    </h3>
    <p className="text-lg text-muted-foreground mb-8">
      Whether it’s your first project or you’re exploring new ideas, I’m eager to learn and collaborate. Let’s get your project moving!
    </p>
    {/* Footer CTA */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        variant="default"
        size="lg"
        iconName="ArrowRight"
        iconPosition="right"
        className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
        // onClick={handleContactClick}
        ><a href='https://www.linkedin.com/in/chintha-vamsidhar-reddy/'>
        Let’s Connect
        </a>
        </Button>
            <a
          href="/assets/images/pdf/Vamsidhar_Reddy_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
        <Button
          variant="ghost"
          size="lg"
          iconName="Download"
          iconPosition="left"
          className="text-primary hover:text-primary hover:bg-primary/10 w-full"
        >
          <a href='assets/pdf/Vamsidhar_Reddy_Resume.pdf'>
          Download Resume
          </a>
        </Button>
      </a>
    </div>

  </div>
</section>

        
      </main>
    </div>
  );
};

export default ProfessionalContactCollaboration;