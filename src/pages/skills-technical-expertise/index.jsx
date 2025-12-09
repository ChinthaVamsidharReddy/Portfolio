import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillMeter from './components/SkillMeter';
import CodePlayground from './components/CodePlayground';
import TechnologyTimeline from './components/TechnologyTimeline';
import CertificationBadge from './components/CertificationBadge';
import CommunityMetrics from './components/CommunityMetrics';
import SkillCategory from './components/SkillCategory';

const SkillsTechnicalExpertise = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for core skills
  const coreSkills = [
    {
      name: "React.js",
      category: "Frontend Framework",
      proficiency: 80,
      level: "Expert",
      experience: "1+ years",
      projects: 4,
      lastUsed: "Currently",
      icon: "Code",
      description: "Advanced React development with hooks, context, performance optimization, and modern patterns. Extensive experience with React 18 features including concurrent rendering and Suspense.",
      tools: ["React 18", "Next.js", "Vite", "React Router", "Redux Toolkit"]
    },
    {
      name: "Java",
      category: "Programming Language",
      proficiency: 94,
      level: "Advanced",
      experience: "3+ years",
      projects: 10,
      lastUsed: "Daily",
      icon: "FileCode",
      description: "Robust development using core and advanced Java features including generics, annotations, and strong static typing. Experienced in building scalable, enterprise-level applications with emphasis on type safety and maintainability.",
      tools: ["JDK", "Spring Boot", "Lombok", "JPA", "Maven", "Hibernate"]

    },
    {
  name: "Spring Boot",
  category: "Backend Framework",
  proficiency: 88,
  level: "Advanced",
  experience: "2+ years",
  projects: 6,
  lastUsed: "Daily",
  icon: "Layers",
  description: "Enterprise-grade backend development with Spring Boot, including REST APIs, dependency injection, JPA, microservices, and production-ready application design.",
  tools: ["Spring MVC", "Spring Security", "JPA/Hibernate", "Maven", "Postman"]
},
    {
      name: "Node.js",
      category: "Backend Runtime",
      proficiency: 90,
      level: "Expert",
      experience: "1+ years",
      projects: 3,
      lastUsed: "This week",
      icon: "Server",
      description: "Full-stack Node.js development with Express, API design, microservices architecture, and performance optimization. Experience with both REST and GraphQL APIs.",
      tools: ["Express.js", "Fastify", "Socket.io", "JWT", "Passport.js"]
    },
    {
      name: "MYSQL",
      category: "Database",
      proficiency: 85,
      level: "Advanced",
      experience: "1+ years",
      projects: 15,
      lastUsed: "This month",
      icon: "Database",
      description: "Advanced MySQL database design, efficient query structuring, indexing strategies, and performance optimization. Proficient in writing complex joins, stored procedures, triggers, and handling database migrations.",
      tools: ["MySQL Workbench", "phpMyAdmin", "Flyway", "Liquibase", "JDBC"]

    },
    {
      name: "Python",
      category: "Programming Language",
      proficiency: 86,
      level: "Advanced",
      experience: "1+ years",
      projects: 5,
      lastUsed: "This month",
      icon: "FileCode",
      description: "Advanced Python programming including object-oriented design, exception handling, file I/O, and multithreading. Skilled in writing clean, modular code with a focus on maintainability and performance. Experienced in scripting, automation, and integration with APIs and databases.",
      tools: ["Python", "PyCharm", "Jupyter Notebook", "pip", "requests",  "NumPy"]


    },
    
{
  name: "MongoDB",
  category: "NoSQL Database",
  proficiency: 82,
  level: "Advanced",
  experience: "1+ years",
  projects: 8,
  lastUsed: "Currently",
  icon: "Database",
  description: "Document-based data modeling, aggregation pipelines, indexing optimization, and building scalable NoSQL database architectures for real-time applications.",
  tools: ["MongoDB Atlas", "Mongoose", "Compass", "Aggregation Framework"]
},
{
  name: "Firebase",
  category: "Cloud Backend",
  proficiency: 78,
  level: "Intermediate",
  experience: "1+ years",
  projects: 5,
  lastUsed: "This week",
  icon: "Cloud",
  description: "Cloud-based development using Firebase Authentication, Firestore, Hosting, and Storage. Implemented user auth flows, real-time updates, and integrated Firebase into web and mobile apps.",
  tools: ["Firestore", "Firebase Auth", "Firebase Hosting", "Cloud Functions"]
},
{
  name: "AI/ML Integration",
  category: "Artificial Intelligence",
  proficiency: 80,
  level: "Advanced",
  experience: "1+ years",
  projects: 4,
  lastUsed: "Currently",
  icon: "Brain",
  description: "Integration of ML models into production systems, including TFLite deployment, OpenAI API usage, vision models, and real-time inference for mobile and web applications.",
  tools: ["TensorFlow Lite", "OpenAI API", "Python", "NumPy", "Pillow"]
},
{
  name: "JSP & Servlets",
  category: "Backend Web Technology",
  proficiency: 84,
  level: "Advanced",
  experience: "2+ years",
  projects: 10,
  lastUsed: "This month",
  icon: "Globe",
  description: "Strong backend development with JSP, Servlets, MVC, JDBC, and session management. Built enterprise modules including attendance systems, marks entry, and authentication flows.",
  tools: ["JSP", "Servlets", "JDBC", "Tomcat"]
},
{
  name: "Git & GitHub",
  category: "Version Control",
  proficiency: 90,
  level: "Expert",
  experience: "3+ years",
  projects: "40+",
  lastUsed: "Daily",
  icon: "GitBranch",
  description: "Version control expertise including branching strategies, pull requests, conflict resolution, release management, and collaborative development workflows.",
  tools: ["Git", "GitHub", "Git CLI", "GitHub Actions"]
},
{
  name: "REST API Design",
  category: "Backend Development",
  proficiency: 88,
  level: "Expert",
  experience: "2+ years",
  projects: "20+",
  lastUsed: "Daily",
  icon: "Api",
  description: "Design and development of scalable REST APIs with best practices, authentication, rate limiting, and performance-focused architecture.",
  tools: ["Postman", "Swagger", "JWT", "OAuth2"]
},
{
  name: "System Design",
  category: "Architecture",
  proficiency: 75,
  level: "Intermediate",
  experience: "1 year",
  projects: 3,
  lastUsed: "Currently",
  icon: "Server",
  description: "Understanding of scalable architectures, load balancing, caching, queues, database sharding, microservices, and distributed system design principles.",
  tools: ["Kafka", "Redis", "Nginx", "Microservices"]
}



  ];

  // Mock data for code playgrounds
  const codePlaygrounds = [
    {
      title: "React Custom Hooks",
      description: "Reusable logic with custom hooks",
      icon: "Code",
      examples: [
        {
          name: "useLocalStorage",
          filename: "useLocalStorage.js",
          code: `import { useState, useEffect } from 'react'
;\n\nconst useLocalStorage = (key, initialValue) => {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error('Error reading localStorage:', error);\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      setStoredValue(value);\n      window.localStorage.setItem(key, JSON.stringify(value));\n    } catch (error) {\n      console.error('Error setting localStorage:', error);\n    }\n  };\n\n  return [storedValue, setValue];\n};\n\nexport default useLocalStorage;`,
          output: "// Usage: const [name, setName] = useLocalStorage('name', 'Vamsidhar');"
        },
        {
          name: "useFetch",
          filename: "useFetch.js",
          code: `import { useState, useEffect } from 'react'
;\n\nconst useFetch = (url, options = {}) => {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      try {\n        setLoading(true);\n        const response = await fetch(url, options);\n        \n        if (!response.ok) {\n          throw new Error('Network response was not ok');\n        }\n        \n        const result = await response.json();\n        setData(result);\n      } catch (err) {\n        setError(err.message);\n      } finally {\n        setLoading(false);\n      }\n    };\n\n    fetchData();\n  }, [url]);\n\n  return { data, loading, error };\n};\n\nexport default useFetch;`,
          output: "// Returns: { data, loading, error }"
        }
      ],
      concepts: ["Custom Hooks", "State Management", "Side Effects", "Error Handling"]
    },
    {
      title: "Node.js API Patterns",
      description: "RESTful API design patterns",
      icon: "Server",
      examples: [
        {
          name: "Express Middleware",
          filename: "middleware.js",
          code: `const express = require('express');\nconst jwt = require('jsonwebtoken');\n\n// Authentication middleware\nconst authenticateToken = (req, res, next) => {\n  const authHeader = req.headers['authorization'];\n  const token = authHeader && authHeader.split(' ')[1];\n\n  if (!token) {\n    return res.status(401).json({ error: 'Access token required' });\n  }\n\n  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\n    if (err) {\n      return res.status(403).json({ error: 'Invalid token' });\n    }\n    req.user = user;\n    next();\n  });\n};\n\n// Rate limiting middleware\nconst rateLimit = (windowMs, max) => {\n  const requests = new Map();\n  \n  return (req, res, next) => {\n    const key = req.ip;\n    const now = Date.now();\n    const windowStart = now - windowMs;\n    \n    if (!requests.has(key)) {\n      requests.set(key, []);\n    }\n    \n    const userRequests = requests.get(key)\n      .filter(time => time > windowStart);\n    \n    if (userRequests.length >= max) {\n      return res.status(429).json({ error: 'Too many requests' });\n    }\n    \n    userRequests.push(now);\n    requests.set(key, userRequests);\n    next();\n  };\n};\n\nmodule.exports = { authenticateToken, rateLimit };`,
          output: "// Middleware for authentication and rate limiting"
        }
      ],
      concepts: ["Middleware", "JWT Authentication", "Rate Limiting", "Error Handling"]
    },
    {
    title: "React Form Validation",
    description: "Controlled inputs with reusable validation logic",
    icon: "Edit3",
    examples: [
      {
        name: "useForm",
        filename: "useForm.js",
        code: `import { useState } from 'react';

const useForm = (initialValues = {}, validate = () => ({})) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    setErrors(validate(nextValues));
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, reset };
};

export default useForm;`,
        output:
          "// Usage: const { values, errors, handleChange } = useForm(initialValues, validate);"
      }
    ],
    concepts: ["Controlled Components", "Form Handling", "Validation", "Reusable Hooks"]
  },

  {
    title: "Prisma Data Access Layer",
    description: "Type-safe database access with Prisma",
    icon: "Database",
    examples: [
      {
        name: "User Repository",
        filename: "userRepository.ts",
        code: `import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (data) => {
  return prisma.user.create({ data });
};

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
  where: { email }
  });
};

export const listUsers = async () => {
  return prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  });
};`,
        output: "// Reusable functions for user CRUD operations with Prisma"
      }
    ],
    concepts: ["Prisma Client", "Repository Pattern", "Type-safe Queries", "CRUD"]
  },

  {
    title: "Spring Boot REST APIs",
    description: "Java REST controllers for backend services",
    icon: "Coffee",
    examples: [
      {
        name: "Flight Controller",
        filename: "FlightController.java",
        code: `@RestController
@RequestMapping("/api/flights")
@RequiredArgsConstructor
public class FlightController {

  private final FlightService flightService;

  @GetMapping
  public List<FlightDto> getAllFlights() {
    return flightService.getAllFlights();
  }

  @PostMapping
  public ResponseEntity<FlightDto> createFlight(
      @RequestBody @Valid CreateFlightRequest request
  ) {
    FlightDto created = flightService.createFlight(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(created);
  }
}`,
        output: "// REST endpoints for listing and creating flights in FlightNest"
      }
    ],
    concepts: ["REST Controller", "DTOs", "Validation", "Spring Boot", "Service Layer"]
  }
  ];

  // Mock data for technology timeline
  const technologyTimeline = [
    {
  year: "2025",
  milestone: "Face Emotion Recognition",
  context: "A computer vision project focused on detecting faces, eyes, and human emotions using classical image processing and deep learning techniques.",
  technologies: [
    { name: "Python", icon: "Code" },
    { name: "OpenCV", icon: "Terminal" },
    { name: "DeepFace", icon: "Human" },
    { name: "NumPy", icon: "Library" },
    { name: "Matplotlib", icon: "Library" },
    { name: "Haar Cascade Classifiers", icon: "Library" }
  ],
  achievements: [
     "Frontal face detection using Haar Cascade classifier",
    "Eye pattern recognition inside detected face region",
    "Emotion recognition using DeepFace (happy, sad, angry, neutral, etc.)",
    "Bounding box visualization for faces and eyes",
    "Emotion tag overlay on processed images"
  ],
  resources: [`OpenCV Haar Cascade documentation, DeepFace emotion recognition guides, and Python image processing tutorials.`],
      projects: [
        {
          name: "Face Emotion Recognition",
          description: "AI-powered computer vision system for detecting faces, eyes, and emotions using OpenCV and DeepFace."
        },
        // {
        //   name: "Analytics Dashboard",
        //   description: "Complex data visualization with real-time charts and filtering"
        // }
      ]
    },
        {
  year: "2025",
  milestone: "Full-Stack Mastery",
  context: "Advanced Angular architecture and scalable Node.js backend development",
  technologies: [
    { name: "Angular 17", icon: "Code" },
    { name: "Angular CLI", icon: "Terminal" },
    { name: "TypeScript", icon: "FileCode" },
    { name: "Prisma", icon: "Database" }
  ],
  achievements: [
    "Built 5 production-grade applications using Angular with RxJS and modular architecture",
    "Implemented advanced TypeScript patterns across reusable Angular services and components",
    "Optimized API integration and state management, reducing load times by 60%",
    "Led frontend architecture and design system integration for 3 enterprise projects"
  ],
  resources: ["Angular Docs", "TypeScript Handbook", "RxJS Guide", "Prisma Guides"],
      projects: [
        {
          name: "FightNest",
          description: "Flight-Booking System with advanced features and real-time updates"
        },
        {
          name: "Analytics Dashboard",
          description: "Complex data visualization with real-time charts and filtering"
        }
      ]
    },
    {
      year: "2025",
      milestone: "ServiceConnect",
      context: "On-Demand Service Booking Platform for real-time service discovery and scheduling",
      technologies: [
        { name: "React", icon: "Code" },
        { name: "Node.js", icon: "Globe" },
        { name: "Tailwind CSS", icon: "Palette" },
        { name: "MySQL", icon: "Database" }
      ],
      achievements: [
        "Built end-to-end booking flow with real-time service availability",
        "Designed responsive UI using Tailwind CSS and component reusability",
        "Integrated secure user authentication and role-based access",
        "Implemented RESTful APIs using Node.js and MySQL"
      ],
      resources: ["React Router Docs", "Tailwind CSS Guide", "Node.js Best Practices", "MySQL Joins Cheatsheet"],
      projects: [
        {
          name: "ServiceConnect Core",
          description: "Full-stack platform to connect users with service providers including login, scheduling, and admin dashboard features"
        }
      ]
    },    
    {
      year: "2024",
      milestone: "Student Management System",
      context: "Built a web-based student management application using Java, Servlets, and MySQL",
      technologies: [
        { name: "Java", icon: "Code" },
        { name: "Servlets", icon: "Server" },
        { name: "MySQL", icon: "Database" },
        { name: "JDBC", icon: "Link" }
      ],
      achievements: [
        "Implemented CRUD operations for student records using Servlets and JDBC",
        "Designed normalized MySQL database schema for efficient data handling",
        "Created user-friendly web interface with HTML, CSS, and form validation",
        "Handled session management and input validation securely"
      ],
      resources: ["Java Servlet API Docs", "MySQL Official Docs", "JDBC Tutorial", "W3Schools HTML/CSS"],
      projects: [
        {
          name: "Student Management System",
          description: "Web application for managing student data, including add/edit/delete/search functionality and academic record tracking"
        }
      ]
    },    
    {
      year: "2023",
      milestone: "Frontend Foundation",
      context: "Starting the journey with modern web development",
      technologies: [
        { name: "HTML5", icon: "Code" },
        { name: "CSS3", icon: "Palette" },
        { name: "JavaScript", icon: "FileCode" }
        
      ],
      achievements: [
        "Mastered ES6+ JavaScript features and modern syntax",
        "Built responsive layouts with CSS Grid and Flexbox",
        "Learned version control with Git and GitHub"
      ],
      resources: [ "JavaScript.info", "HTML Tutorial", "CSS-Tricks"],
      projects: [
        {
          name: "Educational Website",
          description: "First Html project showcasing frontend skills"
        }
      ]
    }
  ];

  // Mock data for certifications
  const certifications = [
    {
      name: "Java Certified Developer",
      issuer: "Udemy",
      description: "Certified in Java development with a strong focus on OOP principles, core Java concepts, exception handling, and multithreading.",
      status: "verified",
      issueDate: "2025",
      credentialId: "UC-a802ca00-44b2-4c61-8679-511dfef17ab3",
      icon: "Code",
      skills: ["Java", "OOP", "Multithreading", "Exception Handling", "Collections"],
      score: null,
      maxScore: null
    },
    {
      name: "Python Expert Certification",
      issuer: "Udemy",
      description: "Advanced certification in Python, covering syntax, data structures, OOP, file handling, and web scraping techniques.",
      status: "verified",
      issueDate: "2025",
      credentialId: "UC-J43a4U0t-370a-4tc'2-*a1lJ- a1dU4ecUad*",
      icon: "Zap",
      skills: ["Python", "Data Structures", "OOP", "File Handling", "Web Scraping"],
      score: null,
      maxScore: null
    },
    {
      name: "Database Management System Certified",
      issuer: "CodeChef",
      description: "Proficient in DBMS concepts, ER modeling, SQL queries, normalization, and indexing techniques.",
      status: "verified",
      issueDate: "2024",
      credentialId: "NODEJS-CD-2023-VR003",
      icon: "Database",
      skills: ["SQL", "MySQL", "ER Modeling", "Normalization", "Indexing"],
      score: null,
      maxScore: null
    },
    {
      name: "Java Certified Developer",
      issuer: "Infosys Springboard",
      description: "Certification validates core Java knowledge, with experience in data types, exception handling, and JDBC connectivity.",
      status: "verified",
      issueDate: "2025",
      credentialId: "INFY-JAVA-2025-VR004",
      icon: "Code2",
      skills: ["Java", "Data Types", "Control Structures", "JDBC", "OOP"],
      score: null,
      maxScore: null
    }
  ];
  

  // Mock data for community metrics
  const communityMetrics = [
    {
      title: "GitHub Contributions",
      value: "1k",
      type: "github",
      period: "This Year",
      description: "Open source contributions and personal projects",
      growth: 25,
      recentActivity: "5 commits this week"
    },
    {
      title: "Community Help",
      value: "50+",
      type: "community",
      period: "All Time",
      description: "Stack Overflow answers and forum contributions",
      growth: 15,
      recentActivity: "3 answers this week"
    },
    {
      title: "Mentorship",
      value: "1",
      type: "mentorship",
      period: "This Year",
      description: "Junior developers mentored and guided",
      growth: 30,
      recentActivity: "2 active mentees"
    }
  ];

  // Mock data for skill categories
  const skillCategories = [
  {
    name: "Frontend Development",
    description: "User interface and experience technologies",
    icon: "Monitor",
    gradient: "from-primary to-accent",
    skills: [
      {
        name: "React.js",
        version: "v18.2+",
        proficiency: "Expert",
        experience: "6+ Months",
        icon: "Code",
        projects: ["Booking Platform", "Analytics Dashboard", "Task Manager"],
        tools: ["Next.js", "Vite", "React Router", "Redux Toolkit"]
      },
      {
        name: "TypeScript",
        version: "v5.0+",
        proficiency: "Advanced",
        experience: "6+ Months",
        icon: "FileCode",
        projects: ["Type-safe APIs", "Component Libraries", "Large Applications"],
        tools: ["TSC", "ESLint", "Prettier", "Type Guards"]
      },
      {
        name: "Tailwind CSS",
        version: "v3.4+",
        proficiency: "Expert",
        experience: "6+ Months",
        icon: "Palette",
        projects: ["Responsive Designs", "Component Systems", "Design Systems"],
        tools: ["PostCSS", "Headless UI", "Tailwind UI", "Custom Plugins"]
      },
      {
        name: "Next.js",
        version: "v14+",
        proficiency: "Advanced",
        experience: "3+ Months",
        icon: "Globe",
        projects: ["SSR Applications", "Static Sites", "API Routes"],
        tools: ["App Router", "Server Components", "Middleware", "Edge Runtime"]
      },
      // 🔥 Added: core web skills you actually use
      {
        name: "JavaScript (ES6+)",
        version: "ES2020+",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "Brackets",
        projects: ["Interactive UIs", "Form Validation", "Dynamic Components"],
        tools: ["Fetch API", "Async/Await", "ES Modules", "Browser APIs"]
      },
      {
        name: "HTML5 & CSS3",
        version: "HTML5 / CSS3",
        proficiency: "Expert",
        experience: "2+ years",
        icon: "LayoutTemplate",
        projects: ["Landing Pages", "Portfolio Website", "Responsive Layouts"],
        tools: ["Flexbox", "CSS Grid", "Media Queries", "Semantic HTML"]
      },
      {
        name: "UI Libraries & Animations",
        version: "Modern",
        proficiency: "Intermediate",
        experience: "1+ years",
        icon: "Sparkles",
        projects: ["Marketing Sections", "Dashboard Interactions"],
        tools: ["Framer Motion", "Shadcn UI", "Radix UI", "Icon Libraries"]
      }
    ]
  },
  {
    name: "Backend Architecture",
    description: "Server-side development and API design",
    icon: "Server",
    gradient: "from-secondary to-primary",
    skills: [
      {
        name: "Node.js",
        version: "v20+",
        proficiency: "Expert",
        experience: "1+ years",
        icon: "Server",
        projects: ["RESTful APIs", "Microservices", "Real-time Apps"],
        tools: ["Express.js", "Fastify", "Socket.io", "Cluster"]
      },
      {
        name: "Express.js",
        version: "v4.18+",
        proficiency: "Expert",
        experience: "1+ years",
        icon: "Globe",
        projects: ["Web APIs", "Middleware Systems", "Authentication"],
        tools: ["Helmet", "CORS", "Morgan", "Compression"]
      },
      {
        name: "Java & Spring Boot",
        version: "Java 17 / Spring Boot 3",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "Coffee",
        projects: ["FlightNest Booking System", "Student Management System"],
        tools: [
          "Spring Security",
          "Spring Data JPA",
          "JWT",
          "Hibernate",
          "Lombok",
          "Maven",
          "Postman"
        ]
      },
      {
        name: "Python",
        version: "v3.11+",
        proficiency: "Intermediate",
        experience: "1+ years",
        icon: "Code",
        projects: ["Data Processing", "API Development", "Automation Scripts"],
        tools: ["FastAPI", "Django", "Pandas", "NumPy"]
      },
      // 🔥 Added: your Java web stack
      {
        name: "JSP & Servlets",
        version: "Jakarta EE",
        proficiency: "Advanced",
        experience: "1+ years",
        icon: "Globe",
        projects: ["Online Voting System", "E-commerce Platform", "Student Portal"],
        tools: ["JDBC", "JSTL", "Servlet Filters", "Tomcat"]
      },
      {
        name: "REST API Design & Security",
        version: "REST v2",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "ShieldCheck",
        projects: ["Authentication Services", "Payment/Transaction APIs"],
        tools: ["JWT", "OAuth2", "Postman", "Swagger / OpenAPI"]
      },
      {
        name: "Apache Kafka",
        version: "v3+",
        proficiency: "Intermediate",
        experience: "6+ Months",
        icon: "Podcast",
        projects: ["MIDAS Core Event-Driven System"],
        tools: ["Spring Kafka", "Consumer Groups", "Topics & Partitions", "Offsets"]
      }
    ]
  },
  {
    name: "Database Management",
    description: "Data storage and retrieval systems",
    icon: "Database",
    gradient: "from-accent to-secondary",
    skills: [
      {
        name: "MongoDB",
        version: "v7+",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "Database",
        projects: ["Document Stores", "Aggregation Pipelines", "Indexing"],
        tools: ["Mongoose", "MongoDB Compass", "Atlas", "Aggregation"]
      },
      {
        name: "MySQL",
        version: "v8+",
        proficiency: "Advanced",
        experience: "1+ years",
        icon: "Table",
        projects: ["Relational Data Modeling", "Query Optimization", "Database Migrations"],
        tools: ["MySQL Workbench", "phpMyAdmin", "JDBC", "Flyway"]
      },
      {
        name: "Prisma",
        version: "v5+",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "Database",
        projects: ["Type-safe Queries", "Schema Management", "Migrations"],
        tools: ["Prisma Studio", "Prisma Client", "Schema", "Migrate"]
      },
      // 🔥 Added: NoSQL you plan/use for projects
      {
        name: "Firebase Firestore",
        version: "v9+",
        proficiency: "Intermediate",
        experience: "6+ Months",
        icon: "Cloud",
        projects: ["AI Learning Platform", "Realtime Chat & Activity Tracking"],
        tools: ["Firebase SDK", "Security Rules", "Indexes", "Realtime Updates"]
      },
      {
        name: "SQL & Relational Modeling",
        version: "SQL:2016",
        proficiency: "Advanced",
        experience: "2+ years",
        icon: "Grid3X3",
        projects: ["ATM Simulation", "Library Management System", "E-commerce Orders"],
        tools: ["Joins & Subqueries", "Indexes", "Transactions", "Stored Procedures"]
      }
    ]
  }
    
  ];

  const navigationSections = [
    { id: 'overview', name: 'Overview', icon: 'BarChart3' },
    { id: 'core-skills', name: 'Core Skills', icon: 'Code' },
    { id: 'categories', name: 'Categories', icon: 'Layers' },
    { id: 'playground', name: 'Playground', icon: 'Play' },
    { id: 'timeline', name: 'Timeline', icon: 'Clock' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'community', name: 'Community', icon: 'Users' }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading technical expertise...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills & Technical Expertise - Vamsidhar Reddy | DevPortfolio Pro</title>
        <meta name="description" content="Explore Vamsidhar's comprehensive technical skills including React.js, Node.js, TypeScript, and PostgreSQL. Interactive demonstrations, certifications, and learning journey." />
        <meta name="keywords" content="React developer, Node.js, TypeScript, PostgreSQL, full-stack developer, technical skills, certifications" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Technical Expertise Showcase</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-foreground mb-6">
              Skills & <span className="text-gradient">Technical Mastery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dive deep into my technical capabilities through interactive demonstrations, 
              detailed proficiency metrics, and hands-on code examples that showcase 
              real-world application of modern development technologies.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl font-poppins font-bold text-primary mb-2">Fresher</div>
              <div className="text-sm text-muted-foreground">Graduate 2026</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl font-poppins font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl font-poppins font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-xl">
              <div className="text-3xl font-poppins font-bold text-conversion mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center space-x-1 py-4 overflow-x-auto">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-primary text-background' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Technical Overview
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  A comprehensive view of my technical capabilities, from frontend frameworks 
                  to backend architecture, database management, and modern development practices.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    Primary Technologies
                  </h3>
                  <div className="space-y-4">
                    {coreSkills.slice(0, 2).map((skill, index) => (
                      <SkillMeter key={index} skill={skill} delay={index * 200} />
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-poppins font-semibold text-foreground">
                    Supporting Technologies
                  </h3>
                  <div className="space-y-4">
                    {coreSkills.slice(2, 4).map((skill, index) => (
                      <SkillMeter key={index} skill={skill} delay={(index + 2) * 200} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Core Skills Section */}
          {activeSection === 'core-skills' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Core Technical Skills
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Deep dive into my primary technical competencies with detailed proficiency 
                  metrics, project experience, and practical applications.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {coreSkills.map((skill, index) => (
                  <SkillMeter key={index} skill={skill} delay={index * 150} />
                ))}
              </div>
            </section>
          )}

          {/* Categories Section */}
          {activeSection === 'categories' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Skill Categories
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Organized breakdown of technical skills across different domains of 
                  software development, from frontend to backend and DevOps.
                </p>
              </div>

              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <SkillCategory key={index} category={category} />
                ))}
              </div>
            </section>
          )}

          {/* Playground Section */}
          {activeSection === 'playground' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Code Playground
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Interactive code examples and patterns that demonstrate practical 
                  application of technical skills in real-world scenarios.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {codePlaygrounds.map((playground, index) => (
                  <CodePlayground key={index} playground={playground} />
                ))}
              </div>
            </section>
          )}

          {/* Timeline Section */}
          {activeSection === 'timeline' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Technology Evolution Timeline
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  My journey through different technologies, showing progression from 
                  fundamentals to advanced concepts and continuous learning.
                </p>
              </div>

              <TechnologyTimeline timeline={technologyTimeline} />
            </section>
          )}

          {/* Certifications Section */}
          {activeSection === 'certifications' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Certifications & Achievements
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Professional certifications and learning achievements that validate 
                  technical expertise and commitment to continuous improvement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((certification, index) => (
                  <CertificationBadge key={index} certification={certification} />
                ))}
              </div>
            </section>
          )}

          {/* Community Section */}
          {activeSection === 'community' && (
            <section className="space-y-16">
              <div className="text-center">
                <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
                  Community Involvement
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Active participation in the developer community through open source 
                  contributions, knowledge sharing, and mentorship activities.
                </p>
              </div>

              <CommunityMetrics metrics={communityMetrics} />

              <div className="text-center">
                <div className="inline-flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    iconName="Github"
                    iconPosition="left"
                    link="https://github.com/ChinthaVamsidharReddy"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <a href='https://github.com/ChinthaVamsidharReddy'>View GitHub Profile</a>
                  </Button>
                  <Link to="/professional-contact-collaboration">
                  <Button
                    variant="ghost"
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="text-accent hover:text-accent/80"
          
                  >
                    Connect & Collaborate
                  </Button>
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-16 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-poppins font-bold text-foreground mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how my technical expertise can contribute to your next project. From concept to deployment, I'm ready to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/professional-contact-collaboration">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-conversion hover:bg-conversion/90 text-conversion-foreground"
            >
              Start a Conversation
            </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <a href='assets/pdf/Vamsidhar_Reddy_Resume.pdf'>
              Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsTechnicalExpertise;