import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CommunityMetrics = ({ metrics }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('community-metrics');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    metrics.forEach((metric, index) => {
      let start = 0;
      const end = parseInt(metric.value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        
        setAnimatedValues(prev => ({
          ...prev,
          [index]: formatValue(Math.floor(start), metric.value)
        }));
      }, 16);
    });
  };

  const formatValue = (value, original) => {
    if (original.includes('k')) return `${(value / 1000).toFixed(1)}k`;
    if (original.includes('+')) return `${value}+`;
    return value.toString();
  };

  const getMetricColor = (type) => {
    switch (type) {
      case 'github': return 'from-primary to-accent';
      case 'community': return 'from-accent to-secondary';
      case 'mentorship': return 'from-conversion to-primary';
      default: return 'from-primary to-secondary';
    }
  };

  const getMetricIcon = (type) => {
    switch (type) {
      case 'github': return 'Github';
      case 'community': return 'Users';
      case 'mentorship': return 'GraduationCap';
      default: return 'TrendingUp';
    }
  };

  return (
    <div id="community-metrics" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div 
          key={index}
          className={`group p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Icon & Value */}
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${getMetricColor(metric.type)} group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={getMetricIcon(metric.type)} size={24} className="text-background" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-poppins font-bold text-primary">
                {animatedValues[index] || '0'}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">
                {metric.period}
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {metric.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {metric.description}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Growth</span>
              <span className={`font-medium ${metric.growth > 0 ? 'text-accent' : 'text-muted-foreground'}`}>
                {metric.growth > 0 ? '+' : ''}{metric.growth}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${getMetricColor(metric.type)} transition-all duration-1000 ease-out`}
                style={{ 
                  width: isVisible ? `${Math.min(Math.abs(metric.growth), 100)}%` : '0%',
                  transitionDelay: `${index * 200 + 500}ms`
                }}
              />
            </div>
          </div>

          {/* Recent Activity */}
          {metric.recentActivity && (
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Icon name="Activity" size={12} />
                <span>Recent: {metric.recentActivity}</span>
              </div>
            </div>
          )}

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default CommunityMetrics;