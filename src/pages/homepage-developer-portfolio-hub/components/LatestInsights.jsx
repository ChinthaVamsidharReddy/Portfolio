import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LatestInsights = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced React Patterns: Compound Components and Render Props",
      excerpt: "Explore advanced React patterns that will make your components more flexible and reusable. Learn when and how to implement compound components and render props effectively.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "React",
      readTime: "8 min read",
      publishedAt: "2025-01-15",
      tags: ["React", "JavaScript", "Frontend"],
      slug: "advanced-react-patterns-compound-components"
    },
    {
      id: 2,
      title: "Node.js Performance Optimization: From Basics to Advanced",
      excerpt: "Deep dive into Node.js performance optimization techniques. Learn about event loop optimization, memory management, and scaling strategies for production applications.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      category: "Node.js",
      readTime: "12 min read",
      publishedAt: "2025-01-10",
      tags: ["Node.js", "Performance", "Backend"],
      slug: "nodejs-performance-optimization-guide"
    },
    {
      id: 3,
      title: "TypeScript Best Practices for Large-Scale Applications",
      excerpt: "Discover TypeScript patterns and practices that scale. From project structure to advanced type definitions, learn how to build maintainable TypeScript applications.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      category: "TypeScript",
      readTime: "10 min read",
      publishedAt: "2025-01-05",
      tags: ["TypeScript", "Architecture", "Best Practices"],
      slug: "typescript-best-practices-large-scale"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      'React': 'text-primary bg-primary/10',
      'Node.js': 'text-accent bg-accent/10',
      'TypeScript': 'text-secondary bg-secondary/10'
    };
    return colorMap[category] || 'text-muted-foreground bg-muted/10';
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto mb-8">
            Sharing knowledge and insights from my development journey. 
            Deep dives into React patterns, Node.js optimization, and modern web development practices.
          </p>
          <Link to="/technical-blog-knowledge-center">
            <Button
              variant="outline"
              iconName="BookOpen"
              iconPosition="right"
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              Read All Articles
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 glow-effect"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-inter font-medium rounded-full backdrop-blur-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-1 bg-background/80 text-foreground text-xs font-inter rounded backdrop-blur-sm">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-poppins font-semibold mb-3 leading-tight group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs font-inter rounded hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  to={`/technical-blog-knowledge-center/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 font-inter font-medium transition-colors duration-200"
                >
                  <span>Read Article</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-8 border border-border text-center">
            <div className="max-w-2xl mx-auto">
              <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-poppins font-bold mb-4">
                Stay Updated with Latest Insights
              </h3>
              <p className="text-muted-foreground font-inter mb-6">
                Get notified when I publish new articles about React, Node.js, and modern web development. 
                No spam, just valuable content delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-inter"
                  />
                </div>
                <Button
                  variant="default"
                  iconName="Send"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                Join 500+ developers who trust my insights. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;