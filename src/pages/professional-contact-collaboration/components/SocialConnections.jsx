import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnections = () => {
  const socialPlatforms = [
    {
      id: 'github',
      name: 'GitHub',
      username: 'ChinthaVamsidharReddy',
      description: 'Open source contributions and project repositories',
      url: 'https://github.com/ChinthaVamsidharReddy',
      icon: 'Github',
      color: 'text-foreground',
      bgColor: 'bg-muted',
      stats: {
        label: 'Public Repos',
        value: '20+'
      },
      activity: 'Active daily • Latest: React Performance Optimization Guide'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      username: 'Vamsidhar Reddy',
      description: 'Professional network and industry insights',
      url: 'https://www.linkedin.com/in/chintha-vamsidhar-reddy/',
      icon: 'Linkedin',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      stats: {
        label: 'Connections',
        value: '2.1K+'
      },
      // activity: 'Posted 3 days ago • Topic: Next.js 14 App Router Best Practices'
    },
    {
      id: 'twitter',
      name: 'Twitter / X',
      username: '@VamsidharDev',
      description: 'Tech thoughts, quick tips, and community engagement',
      url: 'https://x.com/Vamsidh14468854?t=qkEhgZKXpwcUJUBUQTyrmQ&s=09',
      icon: 'Twitter',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      stats: {
        label: 'Followers',
        value: '50+'
      },
      // activity: 'Tweeted 1 day ago • Thread: TypeScript Advanced Patterns'
    },
    
    {
      id: 'stackoverflow',
      name: 'Stack Overflow',
      username: 'vamsidhar-reddy',
      description: 'Helping developers solve complex problems',
      url: 'https://stackoverflow.com/users/31095564/vamsidhar-reddy',
      icon: 'HelpCircle',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      stats: {
        label: 'Reputation',
        value: '1.5K'
      },
      // activity: 'Answered 2 days ago • React Hook optimization question'
    },
    
  ];

  const handleSocialClick = (platform) => {
    window.open(platform.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
          Connect Across Platforms
        </h3>
        <p className="text-muted-foreground">
          Follow my journey and engage with my content across different channels
        </p>
      </div>

      {/* Social Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            onClick={() => handleSocialClick(platform)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${platform.bgColor} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <Icon name={platform.icon} size={24} className={platform.color} />
              </div>
              <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-poppins font-semibold text-foreground mb-1">
                  {platform.name}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {platform.username}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {platform.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="text-center">
                  <p className="text-lg font-bold text-foreground">{platform.stats.value}</p>
                  <p className="text-xs text-muted-foreground">{platform.stats.label}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="text-primary hover:text-primary hover:bg-primary/10"
                >
                  Follow
                </Button>
              </div>

              <div className="pt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {platform.activity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Connect Section */}
      <div className="bg-card rounded-xl p-8 border border-border">
        <div className="text-center mb-6">
          <h4 className="text-xl font-poppins font-bold text-foreground mb-2">
            Let's Connect!
          </h4>
          <p className="text-muted-foreground">
            Choose your preferred platform to start following my technical journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {socialPlatforms.slice(0, 4).map((platform) => (
            <Button
              key={platform.id}
              variant="outline"
              size="sm"
              onClick={() => handleSocialClick(platform)}
              iconName={platform.icon}
              iconPosition="left"
              className="border-border hover:border-primary/30 hover:bg-primary/5"
            >
              {platform.name}
            </Button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Users" size={16} className="text-primary" />
              </div>
              <h5 className="font-poppins font-semibold text-foreground">Active Community</h5>
              <p className="text-sm text-muted-foreground">
                Engaging with 1K+ developers worldwide
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="BookOpen" size={16} className="text-accent" />
              </div>
              <h5 className="font-poppins font-semibold text-foreground">Knowledge Sharing</h5>
              <p className="text-sm text-muted-foreground">
                Regular tutorials and insights
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                <Icon name="MessageCircle" size={16} className="text-secondary" />
              </div>
              <h5 className="font-poppins font-semibold text-foreground">Open Discussions</h5>
              <p className="text-sm text-muted-foreground">
                Always happy to discuss tech and projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;