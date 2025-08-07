import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GitHubActivity = () => {
  const [selectedRepo, setSelectedRepo] = useState(0);

  const githubStats = {
    totalRepos: 19,
    totalStars: 199,
    totalForks: 23,
    totalCommits: 85,
    contributionStreak: 5
  };

  const popularRepos = [
    {
      name: "CampusCorner",
      description:
        "A full-stack web platform designed to connect students with resources, doubt resolution, session booking, and placement assistance. Built using React, Node.js, Express, and MySQL.",
      language: "JavaScript",
      stars: 89,
      forks: 23,
      lastUpdate: "3 months ago",
      topics: ["react", "nodejs", "jwt", "mysql", "express", "full-stack"]
    },
    {
      name: "FightNest",
      description:
        "A flight booking and management system built using Angular for the frontend and Spring Boot for the backend. Includes user authentication and real-time updates.",
      language: "Java",
      stars: 48,
      forks: 0,
      lastUpdate: "Recently updated",
      topics: ["angular", "springboot", "mysql", "jwt", "full-stack", "hibernate"]
    },
    {
      name: "StudentResourceHub",
      description:
        "A static website using HTML, CSS, and JavaScript to help students with free learning content and resources. Created during my early web development journey.",
      language: "JavaScript",
      stars: 34,
      forks: 0,
      lastUpdate: "Initial release",
      topics: ["html", "css", "javascript", "static-site", "student-resources"]
    },
    {
      name: "FaceEmotionRecognizer",
      description:
        "A real-time face emotion recognition app using Python, OpenCV, and deep learning with CNN models to detect emotions from webcam input.",
      language: "Python",
      stars: 28,
      forks: 0,
      lastUpdate: "1 month ago",
      topics: ["python", "opencv", "deep-learning", "cnn", "emotion-detection"]
    }
  ];

  const getLanguageColor = (language) => {
    const colors = {
      Java: '#b07219',
      JavaScript: '#f1e05a',
      Python: '#3572A5',
      CSS: '#563d7c'
    };
    return colors[language] || '#8b949e';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedRepo((prev) => (prev + 1) % popularRepos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            A glimpse into my coding journey and open-source contributions. Consistent commits, quality code, and community engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* GitHub Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <StatCard icon="GitBranch" value={githubStats.totalRepos} label="Repositories" color="primary" />
              <StatCard icon="Star" value={githubStats.totalStars} label="Stars Earned" color="accent" />
              <StatCard icon="GitFork" value={githubStats.totalForks} label="Forks" color="secondary" />
              <StatCard icon="GitCommit" value={githubStats.totalCommits} label="Commits" color="conversion" />
            </div>
          </div>

          {/* Popular Repositories */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-poppins font-semibold">Popular Repositories</h3>
              <a
                href="https://github.com/ChinthaVamsidharReddy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="border-primary/20 text-primary hover:bg-primary/10"
                >
                  View on GitHub
                </Button>
              </a>
            </div>

            <div className="space-y-4">
              {popularRepos.map((repo, index) => (
                <div
                  key={repo.name}
                  className={`bg-card rounded-lg p-6 border transition-all duration-300 cursor-pointer ${
                    selectedRepo === index
                      ? 'border-primary/40 glow-effect'
                      : 'border-border hover:border-primary/20'
                  }`}
                  onClick={() => setSelectedRepo(index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="GitBranch" size={16} className="text-primary" />
                      <h4 className="font-poppins font-semibold text-primary">{repo.name}</h4>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={14} />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="GitFork" size={14} />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground font-inter mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        <span className="text-sm text-muted-foreground">{repo.language}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{repo.lastUpdate}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-inter rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, value, label, color }) => (
  <div className="bg-card rounded-lg p-6 border border-border text-center">
    <Icon name={icon} size={32} className={`text-${color} mx-auto mb-2`} />
    <div className={`text-2xl font-poppins font-bold text-${color}`}>{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default GitHubActivity;