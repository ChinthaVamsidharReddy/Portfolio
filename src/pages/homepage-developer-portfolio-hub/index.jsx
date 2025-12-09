import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsVisualization from './components/SkillsVisualization';
import FeaturedProjects from './components/FeaturedProjects';
import GitHubActivity from './components/GitHubActivity';
const HomepageDeveloperPortfolioHub = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.getAttribute('href');
      if (target && target.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
    
      <Helmet>
        <title>Vamsidhar Reddy – Software Developer | React, Java, Spring Boot</title>
        <meta 
          name="description" 
          content="Vamsidhar Reddy – A Computer Science graduate and passionate full-stack developer skilled in React, Java, Spring Boot, and MySQL. Focused on building modern, scalable web applications. Open to entry-level software development roles." 
        />
        <meta 
          name="keywords" 
          content="Vamsidhar Reddy, computer science graduate, full-stack developer, entry-level developer, React developer, Java developer, Spring Boot, MySQL, web development portfolio, fresher software engineer" 
        />
        <meta name="author" content="Vamsidhar Reddy" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Vamsidhar Reddy - Fresh Graduate Developer Portfolio" />
        <meta property="og:description" content="Fresh CS graduate ready to contribute to innovative projects. Explore my academic projects and technical journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chinthavamsidharreddy.github.io/Portfolio/" />
        <meta property="og:image" content="/assets/images/no_image.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vamsidhar Reddy - Fresh Graduate Developer" />
        <meta name="twitter:description" content="Ready to launch my career in web development" />
        <meta name="twitter:image" content="/assets/images/vamsi.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vamsidhar Reddy",
            "jobTitle": "Fresh Graduate Developer",
            "description": "Computer Science graduate seeking entry-level development opportunities",
            "url": "https://chinthavamsidharreddy.github.io/Portfolio/",
            "sameAs": [
              "https://github.com/ChinthaVamsidharReddy",
              "https://www.linkedin.com/in/chintha-vamsidhar-reddy/",
              "https://x.com/_V_a_m_s_i_"
            ],
            "knowsAbout": [
              "React",
              "Java",
              "JavaScript",
              "HTML/CSS",
              "Node.js",
              "Spring Boot",
              "Git",
              "Python",
              "SQL"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <HeroSection />

          {/* Skills Visualization */}
          <SkillsVisualization />

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* GitHub Activity */}
          <GitHubActivity />
        </main>

        {/* Footer */}
        <footer className="bg-card/50 border-t border-border py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-background font-jetbrains font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-gradient">
                      Vamsidhar Reddy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vamsidhar Reddy into Tech
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed max-w-md">
                  Fresh Computer Science graduate eager to start my career and contribute to 
                  innovative projects. Ready to learn, grow, and make an impact.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/about-development-philosophy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/technical-portfolio-case-studies" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/professional-contact-collaboration" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h4 className="font-poppins font-semibold mb-4">Connect</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/ChinthaVamsidharReddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chintha-vamsidhar-reddy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://x.com/_V_a_m_s_i_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Vamsidhar Reddy. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageDeveloperPortfolioHub;