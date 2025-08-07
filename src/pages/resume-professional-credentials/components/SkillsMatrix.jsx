import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('technical');

  const skillCategories = {
    technical: {
      name: 'Technical Skills',
      icon: 'Code',
      description: 'Programming languages, frameworks, and development tools',
      skills: [
        { name: 'React.js', level: 95, experience: '5+ years', projects: 25, category: 'Frontend' },
        { name: 'Node.js', level: 90, experience: '4+ years', projects: 20, category: 'Backend' },
        { name: 'TypeScript', level: 85, experience: '3+ years', projects: 18, category: 'Language' },
        { name: 'Python', level: 80, experience: '3+ years', projects: 15, category: 'Language' },
        { name: 'Next.js', level: 88, experience: '2+ years', projects: 12, category: 'Frontend' },
        { name: 'Express.js', level: 85, experience: '4+ years', projects: 22, category: 'Backend' },
        { name: 'GraphQL', level: 75, experience: '2+ years', projects: 8, category: 'API' },
        { name: 'MongoDB', level: 82, experience: '3+ years', projects: 16, category: 'Database' },
        { name: 'PostgreSQL', level: 78, experience: '3+ years', projects: 14, category: 'Database' },
        { name: 'Redis', level: 70, experience: '2+ years', projects: 10, category: 'Database' }
      ]
    },
    cloud: {
      name: 'Cloud & DevOps',
      icon: 'Cloud',
      description: 'Cloud platforms, infrastructure, and deployment technologies',
      skills: [
        { name: 'AWS', level: 90, experience: '4+ years', projects: 18, category: 'Cloud Platform' },
        { name: 'Docker', level: 85, experience: '3+ years', projects: 20, category: 'Containerization' },
        { name: 'Kubernetes', level: 75, experience: '2+ years', projects: 12, category: 'Orchestration' },
        { name: 'Google Cloud', level: 80, experience: '2+ years', projects: 10, category: 'Cloud Platform' },
        { name: 'Azure', level: 70, experience: '2+ years', projects: 8, category: 'Cloud Platform' },
        { name: 'Terraform', level: 72, experience: '2+ years', projects: 9, category: 'IaC' },
        { name: 'Jenkins', level: 75, experience: '3+ years', projects: 15, category: 'CI/CD' },
        { name: 'GitHub Actions', level: 80, experience: '2+ years', projects: 16, category: 'CI/CD' }
      ]
    },
    tools: {
      name: 'Tools & Methodologies',
      icon: 'Settings',
      description: 'Development tools, version control, and project management',
      skills: [
        { name: 'Git', level: 95, experience: '5+ years', projects: 30, category: 'Version Control' },
        { name: 'VS Code', level: 90, experience: '5+ years', projects: 30, category: 'IDE' },
        { name: 'Jira', level: 85, experience: '4+ years', projects: 25, category: 'Project Management' },
        { name: 'Figma', level: 75, experience: '3+ years', projects: 15, category: 'Design' },
        { name: 'Postman', level: 80, experience: '4+ years', projects: 22, category: 'API Testing' },
        { name: 'Jest', level: 82, experience: '3+ years', projects: 18, category: 'Testing' },
        { name: 'Cypress', level: 78, experience: '2+ years', projects: 12, category: 'E2E Testing' },
        { name: 'Webpack', level: 70, experience: '3+ years', projects: 16, category: 'Build Tool' }
      ]
    },
    soft: {
      name: 'Leadership & Soft Skills',
      icon: 'Users',
      description: 'Communication, leadership, and interpersonal abilities',
      skills: [
        { name: 'Team Leadership', level: 88, experience: '3+ years', projects: 8, category: 'Management' },
        { name: 'Project Management', level: 85, experience: '4+ years', projects: 15, category: 'Management' },
        { name: 'Mentoring', level: 90, experience: '3+ years', projects: 12, category: 'Development' },
        { name: 'Code Review', level: 92, experience: '4+ years', projects: 25, category: 'Quality' },
        { name: 'Technical Writing', level: 80, experience: '4+ years', projects: 20, category: 'Communication' },
        { name: 'Public Speaking', level: 75, experience: '2+ years', projects: 6, category: 'Communication' },
        { name: 'Agile/Scrum', level: 85, experience: '4+ years', projects: 20, category: 'Methodology' },
        { name: 'Architecture Design', level: 78, experience: '2+ years', projects: 10, category: 'Design' }
      ]
    }
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-accent to-accent/80';
    if (level >= 80) return 'from-primary to-primary/80';
    if (level >= 70) return 'from-secondary to-secondary/80';
    return 'from-muted-foreground to-muted-foreground/80';
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  const getLevelLabelColor = (level) => {
    if (level >= 90) return 'text-accent border-accent/30 bg-accent/10';
    if (level >= 80) return 'text-primary border-primary/30 bg-primary/10';
    if (level >= 70) return 'text-secondary border-secondary/30 bg-secondary/10';
    return 'text-muted-foreground border-border bg-muted/20';
  };

  const currentSkills = skillCategories[selectedCategory];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-6">
            Skills Matrix & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of technical proficiencies, experience levels, and project applications
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.name}</span>
              <span className="text-xs opacity-75">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Category Content */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          {/* Category Header */}
          <div className="p-6 border-b border-border bg-muted/5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon name={currentSkills.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {currentSkills.name}
                </h3>
                <p className="text-muted-foreground">{currentSkills.description}</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentSkills.skills.map((skill, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300">
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground text-lg mb-1">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.category}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelLabelColor(skill.level)}`}>
                      {getLevelLabel(skill.level)}
                    </div>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Skill Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Experience</div>
                      <div className="text-sm font-medium text-foreground">{skill.experience}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Projects</div>
                      <div className="text-sm font-medium text-foreground">{skill.projects} completed</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-poppins font-bold text-foreground mb-2">25+</div>
            <p className="text-sm text-muted-foreground">Technologies Mastered</p>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-poppins font-bold text-foreground mb-2">8</div>
            <p className="text-sm text-muted-foreground">Expert Level Skills</p>
          </div>
          
          <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-secondary" />
            </div>
            <div className="text-2xl font-poppins font-bold text-foreground mb-2">1000+</div>
            <p className="text-sm text-muted-foreground">Hours Learning/Year</p>
          </div>
        </div>

        {/* Skill Development Timeline */}
        <div className="mt-16 bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Continuous Skill Development
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Committed to staying current with emerging technologies and industry best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Weekly Learning', value: '15 hours', icon: 'BookOpen' },
              { title: 'Courses Completed', value: '50+', icon: 'GraduationCap' },
              { title: 'Tech Articles Read', value: '200+', icon: 'FileText' },
              { title: 'Open Source Contributions', value: '120+', icon: 'GitBranch' }
            ].map((stat, index) => (
              <div key={index} className="bg-background border border-border rounded-lg p-4 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={20} className="text-primary" />
                </div>
                <div className="text-lg font-poppins font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">{stat.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              className="text-primary border-primary/20 hover:bg-primary/10"
            >
              View Learning Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;