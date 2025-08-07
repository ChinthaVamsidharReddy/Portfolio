import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const BlogSidebar = ({ 
  recentPosts, 
  popularTags, 
  categories,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedTag,
  onTagChange
}) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <aside className="space-y-8">
      {/* Search */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-poppins font-bold text-foreground mb-4">
          Search Articles
        </h3>
        <div className="relative">
          <Input
            type="search"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-poppins font-bold text-foreground mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
              selectedCategory === 'all' ?'bg-primary/20 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => onCategoryChange(category.name)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                selectedCategory === category.name
                  ? 'bg-primary/20 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-sm">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-poppins font-bold text-foreground mb-4">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => onTagChange(tag.name === selectedTag ? '' : tag.name)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedTag === tag.name
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
              }`}
            >
              #{tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-lg font-poppins font-bold text-foreground mb-4">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <div className="text-center mb-4">
          <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
          <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
            Technical Insights
          </h3>
          <p className="text-sm text-muted-foreground">
            Get weekly updates on React patterns, Node.js tips, and development best practices.
          </p>
        </div>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
          />
          <Button
            variant="default"
            fullWidth
            iconName="Send"
            iconPosition="right"
            className="bg-primary hover:bg-primary/90"
          >
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-3">
          No spam, unsubscribe anytime.
        </p>
      </div>

      {/* Guest Post CTA */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center">
          <Icon name="Edit3" size={32} className="text-accent mx-auto mb-3" />
          <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
            Guest Writer?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Share your technical expertise with our developer community.
          </p>
          <Button
            variant="outline"
            fullWidth
            iconName="PenTool"
            iconPosition="left"
            className="border-accent/20 text-accent hover:bg-accent/10"
          >
            Submit Article
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default BlogSidebar;