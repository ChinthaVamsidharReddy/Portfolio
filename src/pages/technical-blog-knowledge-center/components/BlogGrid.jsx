import React from 'react';
import BlogCard from './BlogCard';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlogGrid = ({ 
  posts, 
  loading, 
  hasMore, 
  onLoadMore,
  currentPage,
  totalPages,
  selectedCategory,
  selectedTag,
  searchQuery
}) => {
  const getFilterTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (selectedTag) return `Posts tagged with #${selectedTag}`;
    if (selectedCategory && selectedCategory !== 'all') return `${selectedCategory} Articles`;
    return 'All Articles';
  };

  const getFilterDescription = () => {
    if (searchQuery) return `Found ${posts.length} articles matching your search`;
    if (selectedTag) return `Exploring ${selectedTag} related content`;
    if (selectedCategory && selectedCategory !== 'all') return `Latest insights in ${selectedCategory.toLowerCase()}`;
    return 'Latest technical insights and development tutorials';
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span>Loading articles...</span>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
          No Articles Found
        </h3>
        <p className="text-muted-foreground mb-6">
          {searchQuery 
            ? `No articles match "${searchQuery}". Try different keywords.`
            : 'No articles available for the selected filters.'
          }
        </p>
        <Button
          variant="outline"
          iconName="RefreshCw"
          iconPosition="left"
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-2">
            {getFilterTitle()}
          </h2>
          <p className="text-muted-foreground">
            {getFilterDescription()}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="FileText" size={16} />
          <span>{posts.length} articles</span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More / Pagination */}
      {hasMore && (
        <div className="text-center pt-8">
          <Button
            variant="outline"
            size="lg"
            iconName="ChevronDown"
            iconPosition="right"
            onClick={onLoadMore}
            disabled={loading}
            className="border-primary/20 text-primary hover:bg-primary/10"
          >
            {loading ? 'Loading...' : 'Load More Articles'}
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Showing page {currentPage} of {totalPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;