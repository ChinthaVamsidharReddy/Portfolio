import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const certifications = [
    {
      id: 'Java-certified',
      title: 'Java Certified Developer',
      issuer: 'Udemy',
      date: '2025',
      verified: true,
      image: '/assets/images/java-cert-image.png',
      credentialId: 'UC-a802ca00-44b2-4c61-8679-511dfef17ab3'
    },
    {
      id: 'Python',
      title: 'Python Expert Certification',
      issuer: 'Udemy',
      date: '2025',
      verified: true,
      image: 'assets/images/python-cerft-image.png',
      credentialId: `UC-J43a4U0t-370a-4tc'2-*a1lJ- a1dU4ecUad*`
    },
    {
      id: 'DBMS-certified',
      title: 'Database Management System Certified',
      issuer: 'Codechef',
      date: '2024',
      verified: true,
      image: 'assets/images/mysql-cert-image.png',
      credentialId: 'NODEJS-CD-2023-VR003'
    },
    {
      id: 'Java-certified',
      title: 'Java Certified Developer',
      issuer: 'Infosys Springboard',
      date: '2025',
      verified: true,
      image: '/assets/images/java-cert-image.png',
      // credentialId: 'AWS-CDA-2024-VR001''
    }
  ];

  // const securityFeatures = [
  //   {
  //     id: 'ssl',
  //     title: 'SSL Certificate',
  //     description: 'End-to-end encryption for all communications',
  //     icon: 'Shield',
  //     status: 'active',
  //     color: 'text-success'
  //   },
  //   {
  //     id: 'privacy',
  //     title: 'Privacy Compliant',
  //     description: 'GDPR and CCPA compliant data handling',
  //     icon: 'Lock',
  //     status: 'verified',
  //     color: 'text-primary'
  //   },
  //   {
  //     id: 'backup',
  //     title: 'Data Backup',
  //     description: 'Regular backups and disaster recovery',
  //     icon: 'Database',
  //     status: 'active',
  //     color: 'text-accent'
  //   },
  //   {
  //     id: 'monitoring',
  //     title: '24/7 Monitoring',
  //     description: 'Continuous security and performance monitoring',
  //     icon: 'Eye',
  //     status: 'active',
  //     color: 'text-warning'
  //   }
  // ];

  // const testimonialStats = [
  //   {
  //     metric: '98%',
  //     label: 'Client Satisfaction',
  //     description: 'Based on 50+ project reviews'
  //   },
  //   {
  //     metric: '100%',
  //     label: 'On-Time Delivery',
  //     description: 'Never missed a project deadline'
  //   },
  //   {
  //     metric: '4.9/5',
  //     label: 'Average Rating',
  //     description: 'Across all platforms and reviews'
  //   },
  //   {
  //     metric: '85%',
  //     label: 'Repeat Clients',
  //     description: 'Clients who return for more projects'
  //   }
  // ];

  const verificationBadges = [
    {
      id: 'github-verified',
      title: 'GitHub Verified',
      icon: 'Github',
      color: 'text-foreground'
    },
    {
      id: 'linkedin-verified',
      title: 'LinkedIn Verified',
      icon: 'Linkedin',
      color: 'text-secondary'
    },
    {
      id: 'email-verified',
      title: 'Email Verified',
      icon: 'Mail',
      color: 'text-primary'
    },
    {
      id: 'phone-verified',
      title: 'Phone Verified',
      icon: 'Phone',
      color: 'text-accent'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Trust & Verification
        </h3>
        <p className="text-muted-foreground">
          Professional credentials and security measures for your peace of mind
        </p>
      </div>

      {/* Professional Certifications */}
      <div className="bg-card rounded-xl p-8 border border-border">
        <h4 className="text-xl font-poppins font-bold text-foreground mb-6 flex items-center">
          <Icon name="Award" size={24} className="text-primary mr-3" />
          Professional Certifications
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex items-start space-x-4 p-4 bg-background rounded-lg border border-border">
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h5 className="font-poppins font-semibold text-foreground text-sm">
                    {cert.title}
                  </h5>
                  {cert.verified && (
                    <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mb-2">Issued: {cert.date}</p>
                
                <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                  ID: {cert.credentialId}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Features
      <div className="bg-card rounded-xl p-8 border border-border">
        <h4 className="text-xl font-poppins font-bold text-foreground mb-6 flex items-center">
          <Icon name="Shield" size={24} className="text-success mr-3" />
          Security & Privacy
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityFeatures.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                <Icon name={feature.icon} size={20} className={feature.color} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h5 className="font-poppins font-semibold text-foreground text-sm">
                    {feature.title}
                  </h5>
                  <span className="px-2 py-1 bg-success/20 text-success text-xs rounded-full">
                    {feature.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Client Satisfaction Stats */}
      {/* <div className="bg-card rounded-xl p-8 border border-border">
        <h4 className="text-xl font-poppins font-bold text-foreground mb-6 flex items-center">
          <Icon name="TrendingUp" size={24} className="text-accent mr-3" />
          Client Satisfaction Metrics
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialStats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
              <h5 className="font-poppins font-semibold text-foreground mb-1">{stat.label}</h5>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Verification Badges */}
      <div className="bg-card rounded-xl p-8 border border-border">
        <h4 className="text-xl font-poppins font-bold text-foreground mb-6 flex items-center">
          <Icon name="CheckCircle" size={24} className="text-primary mr-3" />
          Account Verification
        </h4>
        
        <div className="flex flex-wrap justify-center gap-4">
          {verificationBadges.map((badge) => (
            <div key={badge.id} className="flex items-center space-x-2 px-4 py-2 bg-background rounded-lg border border-border">
              <Icon name={badge.icon} size={16} className={badge.color} />
              <span className="text-sm font-medium text-foreground">{badge.title}</span>
              <Icon name="CheckCircle" size={14} className="text-success" />
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            All accounts and credentials are regularly verified and updated
          </p>
          <div className="flex items-center justify-center space-x-2 text-success">
            <Icon name="Shield" size={16} />
            <span className="text-sm font-medium">Last verified: June 2025</span>
          </div>
        </div>
      </div>

      {/* Contact Guarantee */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Handshake" size={32} className="text-primary" />
          </div>
          <h4 className="text-xl font-poppins font-bold text-foreground mb-2">
            Professional Guarantee
          </h4>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          As a passionate and dedicated fresher, I bring strong fundamentals, a willingness to learn, 
          and a proactive mindset. I'm committed to delivering my best, communicating clearly, 
          and growing through every opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-success" />
            <span className="text-foreground">Quick response (within 24-48 hrs)</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span className="text-foreground">Respectful & private communication</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-foreground">Committed to doing my best</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;