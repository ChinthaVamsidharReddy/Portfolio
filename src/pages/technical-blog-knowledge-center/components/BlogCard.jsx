import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post, featured = false }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  };

  if (featured) {
    return (
      <article className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 glow-effect">
        <div className="aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-4 mb-3">
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{formatDate(post.publishedAt)}</span>
              <span>{formatReadTime(post.readTime)}</span>
            </div>
          </div>
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-background font-jetbrains font-bold text-sm">V</span>
              </div>
              <span className="text-sm font-medium text-foreground">{post.author}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="Eye" size={16} />
                <span>{post.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="MessageCircle" size={16} />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-effect">
      <div className="aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
            {post.category}
          </span>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{formatReadTime(post.readTime)}</span>
          </div>
        </div>
        <h3 className="text-xl font-poppins font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-background font-jetbrains font-bold text-sm">V</span>
            </div>
            <span className="text-sm font-medium text-foreground">{post.author}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Eye" size={16} />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="MessageCircle" size={16} />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;