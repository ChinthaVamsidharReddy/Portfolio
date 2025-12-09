import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage-developer-portfolio-hub", icon: "Home" },
    { name: "About", path: "/about-development-philosophy", icon: "User" },
    { name: "Portfolio", path: "/technical-portfolio-case-studies", icon: "Briefcase" },
    {name:"Blog", path: "/technical-blog-knowledge-center",icon:"BookOpen"},
    { name: "Resume", path: "/assets/pdf/Vamsidhar_Reddy_Resume.pdf", icon: "FileText" },
    { name: "Skills", path: "/skills-technical-expertise", icon: "Code" },
    { name: "Contact", path: "/professional-contact-collaboration", icon: "Mail" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const isActivePath = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            to="/homepage-developer-portfolio-hub"
            className="flex items-center space-x-3 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-background font-jetbrains font-bold text-lg">V</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-poppins font-bold text-gradient">
                DevPortfolio
              </h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-inter">
                Vamsidhar’s Technical Showcase
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) =>
              item.path.endsWith(".pdf") ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-2 rounded-md font-inter font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md font-inter font-medium transition-all duration-300 flex items-center space-x-2 ${
                    isActivePath(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </Link>
              )
            )}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/assets/pdf/Vamsidhar_Reddy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                iconName="Download"
                iconPosition="left"
                className="border-primary/20 text-primary hover:bg-primary/10"
              >
                Resume
              </Button>
            </a>
            <Link to="/professional-contact-collaboration">
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
              >
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-foreground" />
          </button>
        </div>

        {/* Mobile & Tablet Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-card/95 backdrop-blur-md border-t border-border">
            <nav className="px-4 sm:px-6 py-4 space-y-2">
              {navigationItems.map((item) =>
                item.path.endsWith(".pdf") ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                      isActivePath(item.path)
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span>{item.name}</span>
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-inter font-medium transition-all duration-200 ${
                      isActivePath(item.path)
                        ? "text-primary bg-primary/10 border-l-2 border-primary"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span>{item.name}</span>
                  </Link>
                )
              )}

              {/* Mobile/Tablet CTA Buttons */}
              <div className="pt-4 space-y-3 border-t border-border mt-4">
                <a
                  href="/assets/pdf/Vamsidhar_Reddy_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                    className="border-primary/20 text-primary hover:bg-primary/10"
                  >
                    Download Resume
                  </Button>
                </a>
                <Link to="/professional-contact-collaboration" onClick={closeMenu}>
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                  >
                    Start Conversation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
