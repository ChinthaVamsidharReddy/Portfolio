import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const codeSnippets = [
    {
      language: 'React',
      code: `const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // Learning React hooks!
    fetchProjects().then(setProjects);
  }, []);
  
  return <ProjectGrid projects={projects} />;
};`
    },
    {
      language: 'JavaScript',
      code: `// My first REST API
const express = require('express');
const app = express();

app.get('/api/students', (req, res) => {
  const students = [
    { name: "Vamsidhar Reddy", major: "Computer Science" }
  ];
  res.json(students);
});

app.listen(3000);`
    },
    {
      language: 'Java',
      code: `# Data Structures & Algorithms practice
      // Data Structures & Algorithms practice
    import java.util.*;
    public class Student {
    public static void main(String[] args) {
    System.out.println("Vamsidhar Reddy ", "GPA: 8.16", "Skills: Java,
     Python, React");
    }
}
`
    },
    {
      language: 'HTML/CSS',
      code: `<!-- Learning responsive design -->
<div class="student-card">
  <h3>Vamsidhar Reddy</h3>
  <p>Computer Science Student</p>
  <div class="skills">
    <span class="skill">Java</span>
    <span class="skill">JavaScript</span>
  </div>
</div>`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentCodeIndex((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-secondary/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent font-inter font-medium">Open to internships & entry-level roles</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Vamsidhar Reddy</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-inter">
                Fresh CS graduate ready to launch my tech career
              </p>
              
              <p className="text-lg text-foreground/80 font-inter leading-relaxed max-w-xl">
                Computer Science graduate passionate about creating innovative web solutions. 
                I'm eager to contribute to meaningful projects while learning from experienced developers 
                and growing my skills in a collaborative environment.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/technical-portfolio-case-studies">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Briefcase"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                >
                  View My Projects
                </Button>
              </Link>
              <a 
                  href="C:\Vamsi\devportfolio_pro (2)\devportfolio_pro\public\assets\images\pdf\Vamsidhar_Reddy_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-conversion text-conversion hover:bg-conversion/10"
              >
                Download Resume
              </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-primary">Fresh</div>
                <div className="text-sm text-muted-foreground">Graduate 2026</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-accent">12+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-secondary">8.16</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile & Code */}
          <div className="relative">
            {/* Profile Image */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden glow-effect">
                  <Image
                    src="assets/images/vamsi.jpg"
                    alt="Alex Johnson - Fresh Graduate Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-20 -z-10"></div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-card rounded-lg flex items-center justify-center floating-badge">
                  <Icon name="Code" size={24} className="text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-card rounded-lg flex items-center justify-center floating-badge animation-delay-200">
                  <Icon name="BookOpen" size={24} className="text-accent" />
                </div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-card rounded-lg flex items-center justify-center floating-badge animation-delay-400">
                  <Icon name="Lightbulb" size={20} className="text-secondary" />
                </div>
              </div>
            </div>

            {/* Animated Code Block */}
            <div className="code-block relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground font-jetbrains">
                  {codeSnippets[currentCodeIndex].language}
                </span>
              </div>
              
              <pre className={`text-sm font-jetbrains leading-relaxed transition-opacity duration-500 ${
                isTyping ? 'opacity-100' : 'opacity-50'
              }`}>
                <code className="text-foreground">
                  {codeSnippets[currentCodeIndex].code}
                </code>
              </pre>
              
              {/* Typing Cursor */}
              <div className="absolute bottom-4 right-4">
                <div className="w-2 h-4 bg-primary animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-inter">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;