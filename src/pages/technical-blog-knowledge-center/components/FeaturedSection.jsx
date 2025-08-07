import React from 'react';
import BlogCard from './BlogCard';
import Icon from '../../../components/AppIcon';

const FeaturedSection = ({ featuredPosts }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Icon name="Star" size={20} className="text-background" />
        </div>
        <div>
          <h2 className="text-2xl font-poppins font-bold text-foreground">
            Featured Articles
          </h2>
          <p className="text-muted-foreground">
            Most popular and impactful technical insights
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredPosts.map((post, index) => (
          <div key={post.id} className={index === 0 ? "lg:col-span-2" : ""}>
            <BlogCard post={post} featured={index === 0} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;