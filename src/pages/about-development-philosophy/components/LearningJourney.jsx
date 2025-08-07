import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningJourney = () => {
  const [activeCategory, setActiveCategory] = useState('certifications');

  const learningData = {
    certifications: [
      {
        id: 1,
        title: "Java core ",
        issuer: "Udemy",
        date: "May 2025",
        status: "completed",
        description: ` Key Features, OOP, Collections & More`,
        skills: ["Java", "OOP", "Collections", "java8 features"],
        icon: "Code",
        color: "conversion"
      },
      {
        id: 2,
        title: "DBMS(Database Management Systems)",
        issuer: "Codechef",
        date: "March 2024",
        status: "completed",
        description: " covering core DBMS concepts and practical SQL applications.",
        skills: ["SQL","Normalization & ER Diagrams","Relational Database Management Systems (RDBMS)", "Database Design"],
        icon: "Award",
        color: "primary"
      },
      {
        id: 3,
        title: "Python",
        issuer: "Udemy",
        date: "June 2025",
        status: "completed",
        description: "Comprehensive Python course covering core programming concepts, data structures, and real-world applications.",
        skills: ["Python", "OOP (Object-Oriented Programming)", "Problem Solving"],
        icon: "FileCode",
        color: "secondary"
      },
      {
        id: 4,
        title: "DSA",
        issuer: "GeeksForGeeks",
        date: "July 2025",
        status: "in-progress",
        description: "Data Structures and Algorithms focused on coding efficiency and problem-solving techniques.",
        skills: ["Data Structures", "Algorithms", "Problem Solving", "Time and Space Complexity"],
        icon: "Server",
        color: "accent"
      }
    ],
    // conferences: [
    //   {
    //     id: 1,
    //     title: "React Conf 2023",
    //     location: "Las Vegas, NV",
    //     date: "October 2023",
    //     type: "Attendee",
    //     description: "Latest React features, Server Components, and ecosystem updates",
    //     highlights: ["React Server Components", "Concurrent Features", "Performance"],
    //     icon: "Calendar",
    //     color: "primary"
    //   },
    //   {
    //     id: 2,
    //     title: "AWS re:Invent 2023",
    //     location: "Las Vegas, NV",
    //     date: "November 2023",
    //     type: "Attendee",
    //     description: "Cloud computing innovations and AWS service announcements",
    //     highlights: ["Serverless Computing", "AI/ML Services", "Security Best Practices"],
    //     icon: "Cloud",
    //     color: "conversion"
    //   },
    //   {
    //     id: 3,
    //     title: "JSConf US 2024",
    //     location: "Austin, TX",
    //     date: "May 2024",
    //     type: "Speaker",
    //     description: "Presented on \'Building Scalable React Applications'",
    //     highlights: ["Component Architecture", "Performance Optimization", "Best Practices"],
    //     icon: "Mic",
    //     color: "accent"
    //   }
    // ],
    exploration: [
      {
        id: 1,
        title: "AI/ML Integration",
        description: "Exploring integration of AI models into web applications",
        technologies: ["TensorFlow.js", "OpenAI API", "Hugging Face", "Python"],
        progress: 75,
        status: "active",
        icon: "Brain",
        color: "secondary"
      },
      {
      id: 4,
      title: "Full-Stack Web Development",
      description: "Building scalable web applications using Node.js and Java Spring Boot",
      technologies: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs", "MongoDB/MySQL"],
      progress: 80,
      status: "active",  // or "active" if you're still learning
      icon: "Code",
      color: "success"
    },

      {
        id: 3,
        title: "Mobile Development",
        description: "Cross-platform mobile app development with React Native",
        technologies: ["React Native", "Expo", "Native Modules", "App Store"],
        progress: 30,
        status: "planned",
        icon: "Smartphone",
        color: "conversion"
      }
    ]
  };

  const categories = [
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    // { id: 'conferences', name: 'Conferences', icon: 'Calendar' },
    { id: 'exploration', name: 'Tech Exploration', icon: 'Compass' }
  ];

  const getColorClasses = (color, variant = 'default') => {
    const colors = {
      primary: {
        default: 'text-primary bg-primary/10',
        badge: 'bg-primary/20 text-primary',
        progress: 'bg-primary'
      },
      accent: {
        default: 'text-accent bg-accent/10',
        badge: 'bg-accent/20 text-accent',
        progress: 'bg-accent'
      },
      secondary: {
        default: 'text-secondary bg-secondary/10',
        badge: 'bg-secondary/20 text-secondary',
        progress: 'bg-secondary'
      },
      conversion: {
        default: 'text-conversion bg-conversion/10',
        badge: 'bg-conversion/20 text-conversion',
        progress: 'bg-conversion'
      }
    };
    return colors[color]?.[variant] || colors.primary[variant];
  };

  const renderCertifications = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {learningData.certifications.map((cert) => (
        <div key={cert.id} className="bg-card border border-border rounded-xl p-6 hover:glow-effect transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(cert.color)}`}>
              <Icon name={cert.icon} size={24} />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              cert.status === 'completed' ? 'bg-accent/20 text-accent' : 'bg-conversion/20 text-conversion'
            }`}>
              {cert.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
          
          <h3 className="text-lg font-poppins font-semibold mb-2">{cert.title}</h3>
          <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
          <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
          <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span key={skill} className={`px-2 py-1 rounded-md text-xs ${getColorClasses(cert.color, 'badge')}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // const renderConferences = () => (
  //   <div className="space-y-6">
  //     {learningData.conferences.map((conf) => (
  //       <div key={conf.id} className="bg-card border border-border rounded-xl p-6 hover:glow-effect transition-all duration-300">
  //         <div className="flex items-start space-x-4">
  //           <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(conf.color)}`}>
  //             <Icon name={conf.icon} size={24} />
  //           </div>
  //           <div className="flex-1">
  //             <div className="flex items-start justify-between mb-2">
  //               <h3 className="text-lg font-poppins font-semibold">{conf.title}</h3>
  //               <span className={`px-3 py-1 rounded-full text-xs font-medium ${
  //                 conf.type === 'Speaker' ? 'bg-conversion/20 text-conversion' : 'bg-primary/20 text-primary'
  //               }`}>
  //                 {conf.type}
  //               </span>
  //             </div>
  //             <p className="text-sm text-muted-foreground mb-1">{conf.location} • {conf.date}</p>
  //             <p className="text-sm text-muted-foreground mb-4">{conf.description}</p>
              
  //             <div className="flex flex-wrap gap-2">
  //               {conf.highlights.map((highlight) => (
  //                 <span key={highlight} className={`px-2 py-1 rounded-md text-xs ${getColorClasses(conf.color, 'badge')}`}>
  //                   {highlight}
  //                 </span>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  const renderExploration = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {learningData.exploration.map((item) => (
        <div key={item.id} className="bg-card border border-border rounded-xl p-6 hover:glow-effect transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(item.color)}`}>
              <Icon name={item.icon} size={24} />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              item.status === 'active' ? 'bg-accent/20 text-accent' : 'bg-muted/20 text-muted-foreground'
            }`}>
              {item.status === 'active' ? 'Active' : 'Planned'}
            </span>
          </div>
          
          <h3 className="text-lg font-poppins font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          
          {/* Progress bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium">{item.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${getColorClasses(item.color, 'progress')}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span key={tech} className={`px-2 py-1 rounded-md text-xs ${getColorClasses(item.color, 'badge')}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case 'certifications':
        return renderCertifications();
      // case 'conferences':
      //   return renderConferences();
      case 'exploration':
        return renderExploration();
      default:
        return renderCertifications();
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
            Continuous <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Staying ahead in technology requires constant learning and exploration. Here's my journey of growth and discovery.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground glow-effect'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="transition-all duration-300">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;