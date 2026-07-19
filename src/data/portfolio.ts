export const siteConfig = {
  name: "Vamsidhar Reddy",
  fullName: "Chintha Vamsidhar Reddy",
  role: "Full-Stack & AI Engineer",
  tagline: "I build backend systems and full-stack products that ship.",
  location: "Andhra Pradesh, India",
  email: "vamsidharreddy831@gmail.com",
  github: "https://github.com/ChinthaVamsidharReddy",
  linkedin: "https://www.linkedin.com/in/chinthavamsidharreddy/",
  resumeUrl: "/Vamsidhar_Reddy_Resume.pdf",
  availableForWork: true,
};

export const heroStats = [
  { label: "Production Systems", value: "4+", suffix: "" },
  { label: "Technologies", value: "20", suffix: "+" },
  { label: "IEEE Publication", value: "1", suffix: "" },
  { label: "Years Building", value: "3", suffix: "+" },
];

export const skillCategories = [
  {
    name: "Backend",
    icon: "server",
    color: "violet",
    skills: [
      { name: "Java", level: 90 },
      { name: "Spring Boot", level: 88 },
      { name: "Node.js", level: 80 },
      // {name: "Python", level: 90},
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 78 },
    ],
  },
  {
    name: "Frontend",
    icon: "layout",
    color: "sky",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Angular", level: 72 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "AI / ML",
    icon: "brain",
    color: "emerald",
    skills: [
      { name: "TensorFlow Lite", level: 78 },
      { name: "LLM Integration", level: 80 },
      { name: "RAG Pipelines", level: 72 },
      { name: "Flutter", level: 70 },
      { name: "Python", level: 75 },
    ],
  },
  {
    name: "Infrastructure",
    icon: "cloud",
    color: "amber",
    skills: [
      { name: "Docker", level: 82 },
      { name: "Kubernetes", level: 72 },
      { name: "AWS", level: 68 },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
];

export const experience = [
{
  type: "work",
  role: "Software Engineer Intern",
  company: "Infosys Springboard",
  period: "2026",
  location: "India",
  description:
"Developed enterprise Java applications using Spring Boot within an Agile team. Contributed to microservices design, REST API development, and cloud deployment pipelines for production systems serving thousands of users.",
  tech: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "MySQL",
    "Hibernate",
    "Spring Data JPA",
    "System Design",
    "Microservices",
    "Git",
    "Agile"
  ],
  highlight: true,
},
  {
    type: "education",
    role: "B.Tech Computer Science Engineering",
    company: "Kalasalingam Academy of Research and Education (KARE)",
    period: "2022 – 2026",
    location: "Tamil Nadu, India",
    description:
      "Graduated with a focus on distributed systems, applied machine learning, and software engineering. Published IEEE peer-reviewed research paper in final year. Built 4+ production systems during studies.",
    tech: ["Algorithms", "Distributed Systems", "ML", "Java", "Python"],
    highlight: false,
  },
];

export const publication = {
  title: "Herbal Plant Identifier Using Flutter and TensorFlow Lite",
  conference: "IEEE Xplore 2025",
  year: 2025,
  doi: "https://ieeexplore.ieee.org/abstract/document/11390093",
  abstract:
    "A mobile-first medicinal plant identification system using on-device machine learning with TensorFlow Lite to classify 40 herbal plant species at 92% accuracy — entirely offline. Designed for deployment in remote agricultural and healthcare settings where connectivity is unreliable.",
  metrics: [
    { label: "Accuracy", value: "92%" },
    { label: "Plant Classes", value: "40" },
    { label: "Connectivity Required", value: "None" },
    { label: "Platform", value: "Flutter" },
  ],
  keywords: ["TensorFlow Lite", "Flutter", "Mobile ML", "Computer Vision", "Healthcare AI", "Edge Computing"],
};

export const projects = [
  {
    id: "neurallog",
    title: "NeuralLog",
    subtitle: "Multi-Provider LLM Observability Platform",
    featured: true,
    status: "live",
    category: ["Backend", "AI/ML", "Infrastructure"],
    problem:
      "AI engineering teams using multiple LLM providers had no unified tool to monitor inference requests, detect cost anomalies, or ensure sensitive data wasn't leaking through prompts.",
    solution:
      "A production-grade observability middleware that intercepts, logs, and redacts LLM API calls in real time — with an SSE streaming dashboard, PII redaction pipeline, and Kubernetes-orchestrated deployment.",
    architecturePoints: [
      "Spring Boot proxy gateway intercepts all LLM API calls transparently",
      "Regex-based PII redaction pipeline with 12+ sensitive data patterns",
      "Server-Sent Events (SSE) push log streams to React dashboard in real time",
      "Kubernetes microservice orchestration for horizontal scalability",
      "PostgreSQL with indexed storage for persistent query and cost analytics",
    ],
    metrics: [
      { label: "LLM Providers", value: "3+" },
      { label: "PII Patterns", value: "12+" },
      { label: "Stream Latency", value: "<100ms" },
      { label: "Deployment", value: "K8s" },
    ],
    tech: ["Java", "Spring Boot", "React", "Docker", "Kubernetes", "PostgreSQL", "SSE", "TypeScript"],
    github: "https://github.com/ChinthaVamsidharReddy/NeuralLog",
    live: "#",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    accentHex: "#7c3aed",
    tagColor: "purple",
  },
  {
    id: "flightnest",
    title: "FlightNest",
    subtitle: "Enterprise Flight Booking Platform",
    featured: true,
    status: "live",
    category: ["Backend", "Frontend"],
    problem:
      "Need for a secure, multi-role booking system where passengers, travel agents, and administrators each operate with distinct permissions and dashboards in a single application.",
    solution:
      "Full-stack flight booking platform with Spring Boot REST backend, Angular SPA frontend, JWT authentication, and a three-tier RBAC system with role-specific dashboards.",
    architecturePoints: [
      "Spring Boot REST API with JWT-based stateless authentication",
      "Angular SPA with per-role route guards and dashboard views",
      "Three-tier RBAC: Passenger, Agent, Admin with isolated capabilities",
      "MySQL relational schema with optimized booking and availability queries",
    ],
    metrics: [
      { label: "User Roles", value: "3" },
      { label: "API Endpoints", value: "20+" },
      { label: "Auth", value: "JWT" },
      { label: "Booking States", value: "6" },
    ],
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "JWT", "TypeScript"],
    github: "https://github.com/ChinthaVamsidharReddy/FlightNest",
    live: "#",
    gradient: "from-sky-500 via-blue-600 to-cyan-700",
    accentHex: "#0284c7",
    tagColor: "blue",
  },
  {
    id: "servicehub",
    title: "Service Hub",
    subtitle: "Full-Stack Service Marketplace",
    featured: true,
    status: "live",
    category: ["Frontend", "Backend"],
    problem:
      "Local service providers needed a marketplace to list services, manage bookings, and accept payments — without enterprise-tier complexity or cost.",
    solution:
      "Node.js + React + TypeScript marketplace with integrated payment gateway, dual-role system for providers and clients, and real-time booking management.",
    architecturePoints: [
      "Node.js Express backend with TypeScript throughout",
      "React SPA with TypeScript and component-driven architecture",
      "Integrated third-party payment gateway for transaction handling",
      "MySQL schema supporting dual-role provider/client booking logic",
    ],
    metrics: [
      { label: "Stack", value: "Full-Stack" },
      { label: "Language", value: "TypeScript" },
      { label: "Payments", value: "Integrated" },
      { label: "Roles", value: "2" },
    ],
    tech: ["Node.js", "React", "TypeScript", "MySQL", "Express", "REST API"],
    github: "https://github.com/ChinthaVamsidharReddy/Service-Hub",
    live: "#",
    gradient: "from-emerald-500 via-teal-600 to-green-700",
    accentHex: "#059669",
    tagColor: "emerald",
  },
  {
    id: "auth-system",
    title: "Auth System",
    subtitle: "OAuth 2.0 Production Auth Service",
    featured: false,
    status: "live",
    category: ["Backend"],
    problem: "Implementing secure OAuth 2.0 with refresh token rotation and multi-provider support correctly is a known pain point for backend developers.",
    solution:
      "Production-ready authentication service with Google + GitHub OAuth 2.0, JWT refresh token rotation, BCrypt password hashing, and secure session management.",
    architecturePoints: [
      "Google and GitHub OAuth 2.0 social login flows",
      "JWT access tokens + refresh token rotation on every use",
      "BCrypt password hashing with configurable salt rounds",
      "PostgreSQL-backed session and token storage",
    ],
    metrics: [
      { label: "OAuth Providers", value: "2" },
      { label: "Token Security", value: "Rotated" },
      { label: "Hashing", value: "BCrypt" },
    ],
    tech: ["Node.js", "JWT", "OAuth 2.0", "BCrypt", "PostgreSQL"],
    github: "https://github.com/ChinthaVamsidharReddy/authentication",
    live: "#",
    gradient: "from-rose-500 via-pink-600 to-red-700",
    accentHex: "#e11d48",
    tagColor: "rose",
  },
  {
  id: "stockflow",
  title: "StockFlow",
  subtitle: "Production-Ready E-Commerce Backend",
  featured: true,
  status: "completed",
  category: ["Backend", "System Design"],
  problem:
    "E-commerce platforms require reliable order processing, inventory management, fast product search, and protection against concurrent stock updates while remaining scalable and production-ready.",
  solution:
    "Built a production-ready backend using Django, Django REST Framework, PostgreSQL, Redis, Celery, and Docker featuring transactional order processing, advanced product search, asynchronous task execution, caching, and concurrency-safe inventory management.",
  architecturePoints: [
    "Atomic order processing with transaction.atomic() and select_for_update() to prevent overselling",
    "Advanced product search with filtering, sorting, pagination, inventory annotation, and Redis caching",
    "Redis-powered autocomplete with per-IP rate limiting and automatic cache invalidation using Django signals",
    "Asynchronous background processing using Celery workers and Celery Beat for notifications and scheduled inventory reports",
    "Dockerized microservice architecture with PostgreSQL, Redis, API, Celery Worker, and Beat services"
  ],
  metrics: [
    { label: "Products Seeded", value: "1000+" },
    { label: "Stores", value: "25" },
    { label: "API Tests", value: "19" },
    { label: "Rate Limit", value: "20/min" },
  ],
  tech: [
    "Python",
    "Django",
    "Django REST Framework",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Docker",
    "OpenAPI",
    "Swagger"
  ],
  github: "https://github.com/ChinthaVamsidharReddy/Aforro-Backend-Assignment",
  live: "#",
  gradient: "from-emerald-600 via-teal-600 to-cyan-700",
  accentHex: "#222bcc",
  tagColor: "emerald",
},
{
  id: "skynest",
  title: "SkyNest",
  subtitle: "Local Rental Discovery & Property Listing Platform",
  featured: true,
  status: "completed",
  category: ["Frontend", "Backend"],
  problem:
    "Finding verified rental houses, PGs, hostels, and residential properties locally is often fragmented, with users relying on brokers, social media, or multiple listing platforms that lack trust, transparency, and direct owner communication.",
  solution:
    "Developed a full-stack property discovery platform that connects property owners with tenants through verified listings, advanced search filters, and direct owner communication. The platform acts as a trusted mediator, allowing owners to publish rental properties while enabling users to discover listings, pay a small platform fee to unlock owner contact details, and connect directly without broker involvement.",
  architecturePoints: [
    "Role-based platform supporting property owners and customers with dedicated dashboards",
    "Advanced property search with location, property type, price, and amenity filters",
    "Listing management system with image uploads, availability tracking, and property updates",
    "Direct owner contact workflow after successful platform payment, eliminating broker dependency",
    "Customer feedback, ratings, and property reporting system to improve listing trust and quality"
  ],
  metrics: [
    { label: "User Roles", value: "2" },
    { label: "Property Types", value: "4+" },
    { label: "Image Uploads", value: "Supported" },
    { label: "Platform", value: "Full Stack" },
  ],
  tech: [
    "Node.js",
    "Express.js",
    "React",
    "Vite",
    "MySQL",
    "Tailwind CSS",
    "Multer",
    "React Router"
  ],
  github: "https://github.com/ChinthaVamsidharReddy/SkyNest",
  live: "#",
  gradient: "from-sky-600 via-blue-600 to-indigo-700",
  accentHex: "#0284c7",
  tagColor: "sky",
},
{
  id: "herbai",
  title: "HerbAI",
  subtitle: "Offline AI-Powered Medicinal Plant Identification Platform",
  featured: true,
  status: "completed",
  category: ["AI/ML", "Mobile", "Flutter"],
  problem:
    "Identifying medicinal plants typically requires internet access or expert knowledge, making it difficult for students, researchers, and the public to recognize herbal plants and understand their medicinal uses in remote or low-connectivity areas.",
  solution:
    "Developed a cross-platform Flutter application that uses an offline TensorFlow Lite deep learning model to identify medicinal plants from images. The application provides multilingual plant information, AI-assisted chatbot support, voice guidance, and personalized favorites while ensuring complete privacy through on-device inference.",
  architecturePoints: [
    "TensorFlow Lite model performs fully offline image classification with Top-3 predictions and confidence scores",
    "Cross-platform Flutter architecture supporting Android, iOS, Web, Windows, macOS, and Linux from a single codebase",
    "Multilingual knowledge base with localized plant information, chatbot responses, and voice assistance across five languages",
    "Offline AI chatbot with similarity-based search for conversational plant information retrieval",
    "Local-first architecture using on-device storage for favorites, settings, and inference without requiring internet connectivity"
  ],
  metrics: [
    { label: "Plant Classes", value: "40" },
    { label: "Validation Accuracy", value: "92%" },
    { label: "Languages", value: "5" },
    { label: "Platforms", value: "6" },
  ],
  tech: [
    "Flutter",
    "Dart",
    "TensorFlow Lite",
    "Provider",
    "SharedPreferences",
    "Flutter TTS",
    "Image Picker",
    "Share Plus"
  ],
  github: "https://github.com/ChinthaVamsidharReddy/Herbal-Plant-Identifier",
  live: "#",
  gradient: "from-green-600 via-emerald-600 to-lime-600",
  accentHex: "#16a34a",
  tagColor: "green",
}
];

export const certifications = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: 2024, icon: "cloud" },
  { name: "Java Full-Stack Development", issuer: "Infosys / Springboard", year: 2025, icon: "code" },
  { name: "Database Management System", issuer: "CodeChef", year: 2024, icon: "box" },
];
