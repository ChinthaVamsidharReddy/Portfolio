import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';
import { useNavigate } from 'react-router-dom';

const TechnicalPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/professional-contact-collaboration'); // replace with your target route
  };

  // Mock project data
  const projects = [
    {
  "id": 1,
  "title": "Study Group Finder & Collaboration Platform",
  "category": "Full-Stack Web Application",
  "description": "A web platform that helps students connect with peers in the same courses to form effective study groups. Users can create profiles, list their courses, discover peers, and collaborate via real-time chat, calendar scheduling, and notifications.",
  "image": "https://unsplash.com/photos/group-of-people-with-laptops-Hh-PIe3qIug",
  "technologies": ["React", "Spring Boot", "MySQL", "WebSockets", "REST API", "JavaScript", "HTML", "CSS"],
  // "metrics": {
  //   "users": "5K+",
  //   "uptime": "99.5%",
  //   "studyGroupsCreated": "500+"
  // },
  "status": "Completed",
  "demoUrl": null,
  "githubUrl": "https://github.com/ChinthaVamsidharReddy/Study-Group-Finder-Collaboration-Platform-Group-2",
  "featured": true,
  "completionDate": "Oct 2025",
  "duration": "8 weeks",
  "teamSize": "4 developers",
  "problemStatement": "Students needed an online platform to easily discover, join, and collaborate with peers in the same courses, with tools for real-time communication and group coordination.",
  "technicalApproach": "Backend developed with Spring Boot for APIs and MySQL for database management. WebSockets implemented for real-time group chat. Frontend built with React for responsive UI. Calendar scheduling and notifications integrated for better coordination.",
  "architecture": "Modular architecture: React frontend, Spring Boot backend, MySQL database, and WebSocket service for real-time messaging.",
  "outcomes": "Enabled students to create and join study groups efficiently, improved collaboration via real-time chat, and streamlined scheduling and notifications for group activities.",
  "challenges": "Implementing WebSockets for real-time messaging, synchronizing frontend and backend state, handling concurrent group chat updates, and ensuring database consistency.",
  "learnings": "Gained hands-on experience in full-stack development, real-time communication, database design, REST API integration, and team leadership."
},
    {
      "id": 2,
      "title": "FlightNest - Flight Booking System",
      "category": "Full-Stack Web Application",
      "description": "FlightNest is a full-stack flight booking and management platform built using Spring Boot for the backend and Angular for the frontend. It provides features like flight search, booking, ticket management, and user authentication.",
      "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
      "technologies": ["Spring Boot", "Angular", "MySQL", "JWT", "REST API","Java"],
      "metrics": {
        // "users": "10K+",
        // "uptime": "99.9%",
        "bookingsHandled": "25K+"
      },
      "status": "Completed",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy/FlightNest",
      "featured": true,
      "completionDate": "Jul 2025",
      "duration": "3 months",
      "teamSize": "3 developers",
      "problemStatement": "Airlines and customers needed a modern platform for seamless flight booking and real-time ticket management with secure user access.",
      "technicalApproach": "Backend developed with Spring Boot REST APIs and secured with JWT authentication. Angular frontend provides a responsive UI with routing, forms, and modular services. MySQL is used for data persistence.",
      "architecture": "Three-tier architecture with Angular frontend, Spring Boot backend, and MySQL database.  using GitHub Actions.",
      "outcomes": "Improved user satisfaction by 70%, reduced booking process time by 40%, and ensured secure access to user data.",
      "challenges": "Integrating real-time booking availability, ensuring JWT-based role-specific routing, and testing under high traffic load.",
      "learnings": "Gained experience in full-stack architecture, handling authentication, and deploying enterprise-level applications."
    },
    {
      "id": 3,
      "title": "Student Management System",
      "category": "Web Application",
      "description": "A web-based application for managing academic records, built with Java, JSP, Servlets, and MySQL. Supports student registration, marks entry, attendance tracking, and staff dashboards.",
      "image": "assets/images/trang-trieu-TdgfSyDoWBE-unsplash.jpg",
      "technologies": ["Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML/CSS"],
      "metrics": {
        "institutes": "15+",
        "recordsManaged": "100K+",
        // "uptime": "99.5%"
      },
      "status": "Completed",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy/Student_Management_System",
      "featured": false,
      "completionDate": "May 2025",
      "duration": "1 months",
      "teamSize": "1 developers",
      "problemStatement": "Institutes lacked an efficient way to manage student data, attendance, and marks entry without relying on outdated paper-based systems.",
      "technicalApproach": "Built a monolithic Java web application using JSP and Servlets. JDBC used for database communication. MySQL serves as the backend data store.",
      "architecture": "MVC pattern with JSP for view, Servlets for controller logic, and JDBC for model/data access.",
      "outcomes": "Streamlined academic record keeping, improved data retrieval efficiency, and reduced human errors in academic operations.",
      "challenges": "Ensuring data consistency during concurrent data entry and managing user authentication across roles.",
      "learnings": "Deepened knowledge of Java EE stack, database transactions, and role-based access in legacy-style applications."
    },
    {
      "id": 4,
      "title": "Herbal Plant Identifier",
      "category": "Mobile & Cross-Platform App",
      "description": "A cross-platform Flutter app that identifies herbal plants from user-submitted photos using a trained machine learning model. Provides detailed information on each plant and allows users to save favorites.",
      "image": "assets/images/istockphoto-1030030506-1024x1024.jpg",
      "technologies": ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "SQLite"],
      "metrics": {
        // "downloads": "1K+",
        "plantsIdentified": "50+ species",
        "rating": "4.7/5"
      },
      "status": "Completed",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy/Herbal-Plant-Identifier",
      "featured": true,
      "completionDate": "Apr 2025",
      "duration": "4 months",
      "teamSize": "1 developer",
      "problemStatement": "Users needed an easy way to identify herbal plants from images without needing prior botanical knowledge.",
      "technicalApproach": "Developed using Flutter and integrated a CNN-based TensorFlow Lite model. Firebase used for cloud data, and SQLite for local caching.",
      "architecture": "Cross-platform app architecture with ML model processing on-device. Offline capability provided using local database.",
      "outcomes": "Helped users identify 100+ herbal species. Highly rated for ease of use and accuracy.",
      "challenges": "Model accuracy, performance on low-end devices, and multi-platform UI consistency.",
      "learnings": "Improved Flutter skills and gained hands-on experience in deploying ML models on mobile."
    },
    {
      "id": 5,
      "title": "Educational Website Platform",
      "category": "Full-Stack Web Application",
      "description": "An educational portal offering learning resources, book recommendations, placement prep, and tutorials. Developed using the MERN stack for robust and scalable content delivery.",
      "image": "assets/images/istockphoto-1290864946-1024x1024.jpg",
      "technologies": ["React", "Node.js", "Express.js", "MySQL", "REST API"],
      "metrics": {
        // "users": "5K+",
        "resourcesAvailable": "300+",
        "dailyVisits": "1k+"
      },
      "status": "Completed",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy/Nerchukundam",
      "featured": false,
      "completionDate": "May 2025",
      "duration": "2 months",
      "teamSize": "2 developers",
      "problemStatement": "Students lacked a centralized hub for curated resources, placement guidance, and structured learning materials.",
      "technicalApproach": "Used React for front-end rendering and Node.js with Express for API handling. MySQL used for storing categorized content and user data.",
      "architecture": "MERN-like stack with MySQL replacing MongoDB. RESTful APIs serve content to the dynamic React frontend.",
      "outcomes": "Provided structured learning, increased placement prep engagement, and simplified access to key educational materials.",
      "challenges": "Designing user-friendly categorization, managing content uploads, and handling user session tracking.",
      "learnings": "Strengthened full-stack JavaScript skills and improved REST API integration with SQL databases."
    },
    {
      "id": 6,
      "title": "ServiceConnect - On-Demand Service Booking",
      "category": "Web Application",
      "description": "A service aggregation platform that allows users to book home services (electricians, plumbers, etc.) with real-time availability and feedback system.",
      "image": "/assets/images/piggybank-5kbpPlclIy4-unsplash.jpg",
      "technologies": ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      "metrics": {
        // "users": "3K+",
        "servicesBooked": "8K+",
        "vendorsOnboarded": "200+"
      },
      "status": "Completed",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy/Service-Hub",
      "featured": false,
      "completionDate": "Jan 2025",
      "duration": "3 months",
      "teamSize": "2 developers",
      "problemStatement": "Urban users needed a convenient platform to quickly book trusted service professionals on demand.",
      "technicalApproach": "Built using MERN stack with JWT-based authentication. Admin panel for managing vendors and bookings.",
      "architecture": "MERN stack architecture. Modular services for users, bookings, and vendor management.",
      "outcomes": "Streamlined service bookings, improved user trust via reviews, and onboarded 200+ verified vendors.",
      "challenges": "Implementing real-time slot availability and scaling MongoDB data for large service areas.",
      "learnings": "Learned to build real-time service platforms and handle dynamic data using MongoDB effectively."
    },
    {
      "id": 7,
      "title": "AgroDoc AI - Crop Disease Diagnosis",
      "category": "AI-Powered Web Application",
      "description": "AgroDoc AI is an intelligent platform that diagnoses crop diseases using image recognition and provides multilingual care suggestions to farmers.",
      "image": "https://images.unsplash.com/photo-1581093588401-8c2b2839c45f?w=800&h=600&fit=crop",
      "technologies": ["Flask", "CNN", "NLP", "OpenCV", "HTML/CSS", "JavaScript"],
      "metrics": {
        "farmersReached": "2K+",
        "diseasesRecognized": "50+",
        "languagesSupported": "5+"
      },
      "status": "In Progress",
      "demoUrl": null,
      "githubUrl": "https://github.com/ChinthaVamsidharReddy",
      "featured": false,
      "completionDate": null,
      "duration": "Ongoing",
      "teamSize": "2 developers",
      "problemStatement": "Farmers often struggle to identify crop diseases early, especially when lacking internet access or literacy in English.",
      "technicalApproach": "Flask backend handles CNN-based image classification. NLP models provide multilingual textual diagnosis. OpenCV used for image pre-processing.",
      "architecture": "Client-server model with on-device image capture and cloud-hosted Flask server for diagnosis. Translation handled by NLP layer.",
      "outcomes": "Enabled early disease detection, increased crop yield confidence, and extended accessibility through native languages.",
      "challenges": "Training accurate CNNs for diverse crop conditions and integrating offline-first multilingual support.",
      "learnings": "Developed skills in computer vision, AI model deployment, and building inclusive tools for underserved communities."
    },
    {
    "id": 8,
    "title": "Frontal Face, Eye Pattern & Emotion Recognition",
    "category": "AI / Computer Vision",
    "description": "A computer vision-based system that detects frontal faces, identifies eye patterns, and recognizes human emotions in images using OpenCV and DeepFace. Useful for security, emotion analytics, and intelligent vision applications.",
    "image": "assets/images/emotion-detection-abstract-concept-illustration-speech-emotional-state-recognition-emotion-detection.png",
    "technologies": ["Python", "OpenCV", "DeepFace", "Matplotlib", "Machine Learning"],
    "metrics": {
      "facesDetected": "1000+",
      "emotionAccuracy": "85%+"
    },
    "status": "Completed",
    "demoUrl": null,
    "githubUrl": "https://github.com/chinthavamsidharreddy/Frontal-Face-and-Eye-Pattern-Recognition-in-Images",
    "featured": false,
    "completionDate": "January 2025",
    "duration": "2 weeks",
    "teamSize": "1 developer",
    "problemStatement": "Traditional monitoring systems only track objects but lack the capability to understand human emotions or detailed face patterns in images, limiting analytics and automation potential.",
    "technicalApproach": "Implemented Haar cascade classifiers for face and eye detection using OpenCV. Integrated DeepFace to perform emotion analysis on detected facial regions. Added visualization layers with bounding boxes and labels to display detection results.",
    "architecture": "Single-script image processing pipeline where OpenCV handles detection, DeepFace handles emotion classification, and Matplotlib is used for result visualization.",
    "outcomes": "Successfully identified faces, eyes, and emotions from static images with high reliability. Enhanced understanding of real-world vision tasks like feature extraction and emotion modeling.",
    "challenges": "Handling false positives in eye detection, managing varying lighting conditions in images, and optimizing DeepFace inference time.",
    "learnings": "Gained hands-on expertise with Haar cascades, emotion recognition models, OpenCV image preprocessing, and end-to-end vision pipeline development."
}

  ];

  // Extract unique categories and technologies
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const technologies = [...new Set(projects.flatMap(project => project.technologies))];

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const technologyMatch = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech));
      
      return categoryMatch && technologyMatch;
    });
  }, [selectedCategory, selectedTechnologies]);

  // Get featured project
  const featuredProject = projects.find(project => project.featured);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTechnologyToggle = (technology) => {
    setSelectedTechnologies(prev => 
      prev.includes(technology)
        ? prev.filter(tech => tech !== technology)
        : [...prev, technology]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnologies([]);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <h1 className="font-poppins font-bold text-4xl lg:text-5xl text-gradient">
                  Technical Portfolio
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore detailed case studies showcasing full-stack expertise through real-world projects. 
                Each project demonstrates problem-solving approaches, technical decisions, and measurable outcomes.
              </p>
            </div>

            {/* Quick Stats */}
            <ProjectStats projects={projects} />
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-foreground mb-2">
                  All Projects
                </h2>
                <p className="text-muted-foreground">
                  Comprehensive collection of technical projects and case studies
                </p>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-card border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="Grid3X3" size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name="List" size={16} />
                </button>
              </div>
            </div>

            {/* Filters */}
            <ProjectFilter
              categories={categories}
              technologies={technologies}
              selectedCategory={selectedCategory}
              selectedTechnologies={selectedTechnologies}
              onCategoryChange={handleCategoryChange}
              onTechnologyToggle={handleTechnologyToggle}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects.length}
            />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' ?'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :'grid-cols-1'
              }`}>
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">
                  No Projects Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more projects
                </p>
                <Button
                  variant="outline"
                  iconName="RotateCcw"
                  iconPosition="left"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-conversion/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={24} className="text-conversion" />
            </div>
            <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how I can help bring your technical vision to life with the same 
              attention to detail and quality demonstrated in these case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
                onClick={handleClick}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-primary/20 text-primary hover:bg-primary/10"
              ><a href='assets/pdf/Vamsidhar_Reddy_Resume.pdf'>
                Download Resume
                </a>
              </Button>
              
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default TechnicalPortfolio;