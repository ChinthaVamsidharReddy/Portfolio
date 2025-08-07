import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';

import BlogSidebar from './components/BlogSidebar';
import FeaturedSection from './components/FeaturedSection';
import BlogGrid from './components/BlogGrid';
import KnowledgeCenter from './components/KnowledgeCenter';
import BlogStats from './components/BlogStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const TechnicalBlogKnowledgeCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Mock data
  const blogStats = {
    totalArticles: 127,
    totalViews: 45600,
    totalComments: 892,
    subscribers: 3400
  };

  const featuredPosts = [
    {
      id: 1,
      title: "Advanced React Patterns: Compound Components and Render Props in 2024",
      excerpt: `Explore modern React patterns that will transform your component architecture. Learn how compound components and render props can create more flexible and reusable UI components.\n\nThis comprehensive guide covers implementation strategies, performance considerations, and real-world examples from production applications.`,
      category: "React",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-07-15",
      readTime: 12,
      views: "2.4K",
      comments: 34,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["react", "patterns", "components", "architecture"]
    },
    {
      id: 2,
      title: "Node.js Performance Optimization: From 100ms to 10ms Response Times",
      excerpt: `Deep dive into Node.js performance optimization techniques that reduced our API response times by 90%. Covering database optimization, caching strategies, and memory management.`,
      category: "Node.js",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-07-10",
      readTime: 15,
      views: "1.8K",
      comments: 28,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
      tags: ["nodejs", "performance", "optimization", "api"]
    },
    {
      id: 3,
      title: "TypeScript Best Practices: Building Type-Safe Applications at Scale",
      excerpt: `Learn advanced TypeScript techniques for building maintainable, type-safe applications. Covers utility types, conditional types, and enterprise-level patterns.`,
      category: "TypeScript",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-07-08",
      readTime: 10,
      views: "1.5K",
      comments: 22,
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      tags: ["typescript", "types", "patterns", "enterprise"]
    }
  ];

  const allPosts = [
    ...featuredPosts,
    {
      id: 4,
      title: "PostgreSQL Query Optimization: Indexing Strategies for High Performance",
      excerpt: `Master PostgreSQL indexing strategies to achieve lightning-fast query performance. Learn about B-tree, Hash, GIN, and GiST indexes with practical examples.`,
      category: "Database",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-07-05",
      readTime: 14,
      views: "1.2K",
      comments: 19,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
      tags: ["postgresql", "database", "optimization", "indexing"]
    },
    {
      id: 5,
      title: "Building Scalable APIs with Express.js and MongoDB",
      excerpt: `Complete guide to building production-ready APIs with Express.js and MongoDB. Covers authentication, validation, error handling, and deployment strategies.`,
      category: "Backend",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-07-02",
      readTime: 18,
      views: "2.1K",
      comments: 31,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      tags: ["express", "mongodb", "api", "backend"]
    },
    {
      id: 6,
      title: "Modern CSS Grid Layouts: Beyond the Basics",
      excerpt: `Explore advanced CSS Grid techniques for creating complex, responsive layouts. Learn about subgrid, container queries, and modern layout patterns.`,
      category: "Frontend",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-06-28",
      readTime: 8,
      views: "980",
      comments: 15,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      tags: ["css", "grid", "layout", "responsive"]
    },
    {
      id: 7,
      title: "React Testing Library: Complete Testing Strategy Guide",
      excerpt: `Comprehensive guide to testing React applications with Testing Library. Covers unit tests, integration tests, and end-to-end testing strategies.`,
      category: "Testing",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-06-25",
      readTime: 16,
      views: "1.7K",
      comments: 26,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
      tags: ["testing", "react", "jest", "quality"]
    },
    {
      id: 8,
      title: "Docker for Developers: Containerizing Full-Stack Applications",
      excerpt: `Learn Docker fundamentals and advanced techniques for containerizing full-stack applications. Includes Docker Compose, multi-stage builds, and production deployment.`,
      category: "DevOps",
      author: "Vamsidhar Reddy",
      publishedAt: "2024-06-20",
      readTime: 20,
      views: "2.3K",
      comments: 38,
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
      tags: ["docker", "devops", "containers", "deployment"]
    }
  ];

  const categories = [
    { name: "React", count: 15 },
    { name: "Node.js", count: 12 },
    { name: "TypeScript", count: 18 },
    { name: "Database", count: 8 },
    { name: "Backend", count: 14 },
    { name: "Frontend", count: 22 },
    { name: "Testing", count: 9 },
    { name: "DevOps", count: 11 }
  ];

  const popularTags = [
    { name: "react", count: 25 },
    { name: "nodejs", count: 18 },
    { name: "typescript", count: 22 },
    { name: "javascript", count: 30 },
    { name: "performance", count: 15 },
    { name: "optimization", count: 12 },
    { name: "patterns", count: 14 },
    { name: "api", count: 16 },
    { name: "database", count: 10 },
    { name: "testing", count: 13 }
  ];

  const recentPosts = allPosts.slice(0, 5);

  const knowledgeComponents = [
    {
      id: 1,
      name: "Custom Hook: useLocalStorage",
      category: "React Hooks",
      framework: "React",
      version: "18.0",
      icon: "Code",
      description: "A reusable hook for managing localStorage with automatic JSON serialization and TypeScript support.",
      code: `const useLocalStorage = (key, initialValue) => {\n  const [value, setValue] = useState(() => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : initialValue;\n  });\n\n  const setStoredValue = (value) => {\n    setValue(value);\n    localStorage.setItem(key, JSON.stringify(value));\n  };\n\n  return [value, setStoredValue];\n};`,
      downloads: "1.2K",
      stars: 89,
      forks: 23
    },
    {
      id: 2,
      name: "API Response Handler",
      category: "Utilities",
      framework: "Node.js",
      version: "1.0",
      icon: "Server",
      description: "Standardized API response handler with error handling, status codes, and consistent response format.",
      code: `const apiResponse = {\n  success: (res, data, message = 'Success') => {\n    return res.status(200).json({\n      success: true,\n      message,\n      data\n    });\n  },\n  error: (res, message, statusCode = 500) => {\n    return res.status(statusCode).json({\n      success: false,\n      message,\n      data: null\n    });\n  }\n};`,
      downloads: "856",
      stars: 67,
      forks: 18
    },
    {
      id: 3,
      name: "Debounced Search Input",
      category: "Components",
      framework: "React",
      version: "2.1",
      icon: "Search",
      description: "Optimized search input component with debouncing, loading states, and keyboard navigation support.",
      code: `const DebouncedSearch = ({ onSearch, delay = 300 }) => {\n  const [query, setQuery] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      if (query) {\n        setLoading(true);\n        onSearch(query).finally(() => setLoading(false));\n      }\n    }, delay);\n\n    return () => clearTimeout(timer);\n  }, [query, delay, onSearch]);\n\n  return (\n    <input\n      value={query}\n      onChange={(e) => setQuery(e.target.value)}\n      placeholder="Search..."\n    />\n  );\n};`,
      downloads: "2.1K",
      stars: 134,
      forks: 41
    },
    {
      id: 4,
      name: "Database Connection Pool",
      category: "Database",
      framework: "Node.js",
      version: "1.5",
      icon: "Database",
      description: "Optimized PostgreSQL connection pool with automatic reconnection, health checks, and monitoring.",
      code: `const { Pool } = require('pg');\n\nconst pool = new Pool({\n  host: process.env.DB_HOST,\n  port: process.env.DB_PORT,\n  database: process.env.DB_NAME,\n  user: process.env.DB_USER,\n  password: process.env.DB_PASSWORD,\n  max: 20,\n  idleTimeoutMillis: 30000,\n  connectionTimeoutMillis: 2000\n});\n\nmodule.exports = {\n  query: (text, params) => pool.query(text, params),\n  getClient: () => pool.connect()\n};`,
      downloads: "743",
      stars: 92,
      forks: 27
    }
  ];

  // Filter posts based on search, category, and tag
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(0, currentPage * postsPerPage);
  const hasMore = currentPage < totalPages;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    }, 1000);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-background" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-gradient mb-2">
                    Technical Blog
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Knowledge Center
                  </p>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Deep technical insights, development tutorials, and industry best practices. 
                Sharing knowledge from React patterns to Node.js optimization, TypeScript mastery to PostgreSQL performance tuning.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Rss"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90"
                >
                  Subscribe to Feed
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Mail"
                  iconPosition="left"
                  className="border-accent/20 text-accent hover:bg-accent/10"
                >
                  Weekly Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Blog Stats */}
          <BlogStats stats={blogStats} />

          {/* Featured Articles */}
          <FeaturedSection featuredPosts={featuredPosts.slice(0, 3)} />

          {/* Knowledge Center */}
          <KnowledgeCenter components={knowledgeComponents} />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <BlogGrid
                posts={displayedPosts}
                loading={loading}
                hasMore={hasMore}
                onLoadMore={handleLoadMore}
                currentPage={currentPage}
                totalPages={totalPages}
                selectedCategory={selectedCategory}
                selectedTag={selectedTag}
                searchQuery={searchQuery}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                recentPosts={recentPosts}
                popularTags={popularTags}
                categories={categories}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                selectedTag={selectedTag}
                onTagChange={handleTagChange}
              />
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <section className="bg-card border-t border-border py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-conversion/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="PenTool" size={32} className="text-conversion" />
            </div>
            <h2 className="text-3xl font-poppins font-bold text-foreground mb-4">
              Share Your Expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our community of developers sharing knowledge. Submit your technical articles, 
              tutorials, or insights to help fellow developers grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Edit3"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90"
              >
                Submit Article
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="border-secondary/20 text-secondary hover:bg-secondary/10"
              >
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TechnicalBlogKnowledgeCenter;