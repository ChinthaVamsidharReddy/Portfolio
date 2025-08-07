import React from 'react';
import Icon from '../../../components/AppIcon';

const BlogStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'FileText',
      label: 'Articles Published',
      value: stats.totalArticles,
      color: 'primary'
    },
    {
      icon: 'Eye',
      label: 'Total Views',
      value: stats.totalViews,
      color: 'accent'
    },
    {
      icon: 'MessageCircle',
      label: 'Comments',
      value: stats.totalComments,
      color: 'secondary'
    },
    {
      icon: 'Users',
      label: 'Subscribers',
      value: stats.subscribers,
      color: 'conversion'
    }
  ];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, index) => (
          <div
            key={item.label}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:glow-effect"
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4`}>
              <Icon name={item.icon} size={24} className={`text-${item.color}`} />
            </div>
            <div className="text-2xl font-poppins font-bold text-foreground mb-1">
              {formatNumber(item.value)}
            </div>
            <div className="text-sm text-muted-foreground">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogStats;