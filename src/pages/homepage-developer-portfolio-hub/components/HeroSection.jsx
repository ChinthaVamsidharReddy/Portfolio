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
    fetchProjects().then(setProjects);
  }, []);
  
  return <ProjectGrid projects={projects} />;
};`
    },
    {
      language: 'JavaScript',
      code: `const express = require('express');
const app = express();

app.get('/api/students', (req, res) => {
  const students = [{ name: "Vamsidhar Reddy", major: "CS" }];
  res.json(students);
});

app.listen(3000);`
    },
    {
      language: 'Java',
      code: `import java.util.*;
public class Student {
  public static void main(String[] args) {
    System.out.println("Vamsidhar Reddy | GPA: 8.16 | Skills: Java, React");
  }
}`
    },
    {
      language: 'HTML/CSS',
      code: `<div class="student-card">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/80 to-background">
      {/* Decorative Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 sm:w-24 sm:h-24 border border-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            {/* <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-accent text-sm sm:text-base font-medium">Open to internships & entry-level roles</span>
            </div> */}

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-poppins font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Vamsidhar Reddy</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-muted-foreground font-inter">
              Fresh CS graduate ready to launch my tech career
            </p>

            <p className="text-sm sm:text-base text-foreground/80 font-inter leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate about building modern web applications and learning cutting-edge technologies.
              Excited to contribute, collaborate, and grow in a real-world environment.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/technical-portfolio-case-studies">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Briefcase"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect w-full sm:w-auto"
                >
                  View My Projects
                </Button>
              </Link>

              <a
                href="./assets/pdf/Vamsidhar_Reddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="border-conversion text-conversion hover:bg-conversion/10 w-full sm:w-auto"
                >
                  Download Resume
                </Button>
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">Fresh</div>
                <div className="text-sm text-muted-foreground">Graduate 2026</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-accent">12+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-secondary">8.16</div>
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

            {/* CODE SNIPPET BOX */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-card p-4 sm:p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-error rounded-full"></div>
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <span className="text-xs text-muted-foreground font-jetbrains">
                  {codeSnippets[currentCodeIndex].language}
                </span>
              </div>
              <pre className={`text-xs sm:text-sm font-jetbrains leading-relaxed whitespace-pre-wrap transition-opacity duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                <code className="text-foreground">
                  {codeSnippets[currentCodeIndex].code}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-1 animate-bounce">
          <span className="text-xs text-muted-foreground font-inter">Scroll to explore</span>
          <Icon name="ChevronDown" size={18} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
