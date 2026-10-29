export const siteConfig = {
  name: "Vamsidhar Reddy",
  title: "Full-Stack & AI Engineer",
  description:
    "B.Tech CS graduate (2026) from Kalasalingam Academy of Research and Education. Building production-grade full-stack systems, LLM observability platforms, and AI-powered applications. Published researcher in IEEE and CRC Press / Taylor & Francis.",
  email: "vamsidharreddy831@gmail.com",
  github: "https://github.com/ChinthaVamsidharReddy",
  linkedin: "https://www.linkedin.com/in/chinthavamsidharreddy",
  url: "https://portfolio-umber-three-7x4ca651hy.vercel.app/",
  // Replace this path with your actual hosted resume PDF URL (Google Drive, Cloudinary, etc.)
  resumeUrl: "/Vamsidhar_Reddy_Resume.pdf",
};

export const about = {
  greeting: "Hi, I'm Vamsidhar 👋",
  headline: "I build full-stack systems, AI pipelines, and research-grade software.",
  bio: [
    "I'm a Computer Science graduate (2026) from Kalasalingam Academy of Research and Education (KARE), with a CGPA of 8.3. I specialise in building production-grade backends with Java/Spring Boot and Python/FastAPI, full-stack web apps with React and Next.js, and mobile applications with Flutter.",
    "My engineering interests span LLM observability, semantic search, on-device ML inference, and scalable microservices. I've shipped projects across e-commerce, property platforms, AI-powered code review, and digital asset management — each one built end-to-end, from database schema to deployed frontend.",
    "I'm also a published researcher. My work on AI-powered medicinal plant identification appeared in IEEE Xplore (ICACC 2025), and my IoT home automation research was published in a CRC Press / Taylor & Francis volume (2026).",
  ],
  highlights: [
    { icon: "Code2", label: "10+ Projects", sub: "Production-grade, end-to-end" },
    { icon: "BookOpen", label: "2 Publications", sub: "IEEE & CRC Press / Taylor & Francis" },
    { icon: "Award", label: "5 Certifications", sub: "Azure, ML, Java, Spring Boot, Python" },
    { icon: "Layers", label: "20+ Technologies", sub: "Full-stack & AI/ML breadth" },
  ],
  currentFocus:
    "Actively seeking full-time Software Engineer, Full-Stack, or AI Engineer roles. Open to remote and on-site opportunities across India and globally.",
};

export const heroStats = [
  { label: "Projects Built", value: "10+" },
  { label: "Publications", value: "2" },
  { label: "Technologies", value: "20+" },
  { label: "Certifications", value: "5+" },
];

export const skillCategories = [
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter", "Framer Motion", "Vite", "Material UI", "JavaScript (ES6+)"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Spring Boot", "Node.js", "Express.js", "Django", "FastAPI", "REST APIs", "SSE Streaming" ,"Spring Data JPA",
, "Hibernate", "Spring Security"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase", "SQLite", "Database Migrations","Database Design"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: ["TensorFlow Lite", "CLIP", "LLM Integration","RAG", "OpenAI API", "Semantic Search", "Vector Embeddings", "AI Agents"],
  },
  {
    category: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "AWS EC2", "Nginx", "Linux" ,"Render", "Supabase Deployment"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "Postman", "Celery", "JWT", "Flyway", "VS Code", "IntelliJ", "Maven" ,"JUnit"],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern – Java Full Stack",
    company: "Infosys Springboard (Remote)",
    period: "Sept 2025 – Nov 2025",
    description:
      "Built RESTful microservices with Spring Boot, reduced API latency by 30% through query optimisation, and contributed to CI/CD pipelines using GitHub Actions and Docker.",
    tags: ["Spring Boot", "Docker", "GitHub Actions",  "WebSockets"],
  },
  {
    role: "B.Tech Computer Science",
    company: "Kalasalingam Academy of Research and Education",
    period: "2022 – 2026",
    description:
      "Graduated 2026. Research in AI-powered plant identification and IoT systems. Published in IEEE (2025) and CRC Press / Taylor & Francis (2026). Coursework: DSA, OS, DBMS, CN, ML.",
    tags: ["Research", "AI/ML", "Full-Stack", "Mobile Applications"],
  },
];

export const publications = [
  {
    title: "HerbAI: AI-Powered Medicinal Plant Identification Using Deep Learning",
    journal: "IEEE Xplore — International Conference on Advances in Computing and Communication (ICACC 2025)",
    year: "2025",
    publisher: "IEEE",
    abstract:
      "Developed a mobile application using Flutter and TensorFlow Lite that classifies 40 medicinal plant species with 92% accuracy. The model was optimised for on-device inference, enabling offline identification without network connectivity. The study addresses challenges in botanical identification and provides a scalable solution for healthcare workers and researchers in remote areas.",
    tags: ["Deep Learning", "TensorFlow Lite", "Flutter", "Computer Vision", "Mobile AI"],
    doi: "10.1109/ICACC2025.example",
    link: "https://ieeexplore.ieee.org/abstract/document/11390093",
    metrics: { accuracy: "92%", classes: "40", platform: "Mobile (Flutter)", inference: "On-device" },
  },
  {
    title: "Smart IoT-Based Home Automation and Environmental Monitoring System",
    journal: "CRC Press / Taylor & Francis — Advances in IoT and Embedded Systems (2026)",
    year: "2026",
    publisher: "CRC Press / Taylor & Francis",
    abstract:
      "Designed and implemented a full-stack IoT home automation system integrating multiple sensor nodes, an MQTT-based communication layer, and a React dashboard for real-time environmental monitoring. The system demonstrated significant energy savings and improved environmental responsiveness compared to traditional approaches.",
    tags: ["IoT", "MQTT", "React", "Embedded Systems", "Home Automation"],
    doi: "10.1201/CRC2026.example",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003662808-52/automated-vending-machine-reward-mechanism-plastic-bottle-management-abhishek-tripathi-shilpi-gupta-abhinay-krishna-vamsidhar-reddy-dhanushya-lakshmi-dhanush-harsha-vardhini",
    metrics: { sensors: "8+", protocol: "MQTT", dashboard: "Real-time", energySaving: "~22%" },
  },
];

export const publication = publications[0];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  impact?: string;
  tags: string[];
  category: string[];
  metrics?: { label: string; value: string }[];
  links: { github?: string; live?: string };
  featured?: boolean;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "neurallog",
    title: "NeuralLog",
    tagline: "Multi-provider LLM Observability & Inference Platform",
    description:
      "Production-grade platform for routing, logging, and observing LLM calls across multiple providers. Features real-time SSE streaming, per-request cost tracking, latency analytics, and a React dashboard for prompt replay.",
    problem:
      "Engineering teams integrating LLMs lack unified visibility into model performance, cost, and failure modes across providers. Debugging hallucinations or latency spikes requires stitching together logs from disparate systems.",
    solution:
      "Built a Spring Boot proxy layer that intercepts all LLM traffic, streams tokens via SSE, computes per-token cost, and persists structured traces to PostgreSQL. A React frontend provides real-time dashboards, filterable trace explorer, and prompt replay with diff highlighting.",
    impact:
      "Reduces LLM debugging time from hours to minutes. Enables cost attribution per feature, catches model regressions early, and provides an audit trail for compliance-sensitive deployments.",
    tags: ["Spring Boot", "React", "Docker", "Kubernetes", "SSE", "PostgreSQL", "LLM"],
    category: ["AI/ML", "Backend", "Infrastructure"],
    metrics: [
      { label: "Providers Supported", value: "4+" },
      { label: "Streaming Latency", value: "<50ms" },
      { label: "Cost Tracking", value: "Per-token" },
      { label: "Trace Retention", value: "30 days" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/neurallog" },
    featured: true,
    gradient: "from-violet-500 to-purple-700",
  },
  {
    id: "ai-review",
    title: "AI-Powered Code Review Assistant",
    tagline: "Automated intelligent code review with LLM-backed analysis",
    description:
      "An AI assistant that performs automated code reviews by analysing pull request diffs, detecting bugs, security vulnerabilities, and style issues, then generating human-readable review comments with fix suggestions.",
    problem:
      "Manual code review is time-consuming and inconsistent. Junior developers often miss subtle security flaws or performance anti-patterns, and review cycles slow down delivery.",
    solution:
      "Built a FastAPI service that receives GitHub webhook events on PR creation, fetches the diff, chunks it by file, and passes each chunk to an LLM with a structured prompt. Reviews are posted back as GitHub PR comments via the GitHub API. A React dashboard shows review history and metrics.",
    impact:
      "Cuts average review turnaround from hours to under 2 minutes. Consistently catches common vulnerability classes (OWASP Top 10) and enforces coding standards without manual effort.",
    tags: ["FastAPI", "Python", "OpenAI API", "GitHub API", "React", "PostgreSQL"],
    category: ["AI/ML", "Backend"],
    metrics: [
      { label: "Review Time", value: "<2 min" },
      { label: "Issues Detected", value: "Bug + Security + Style" },
      { label: "Integration", value: "GitHub Webhooks" },
      { label: "LLM Backend", value: "GPT-4o" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/ai_code_review" },
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "ai-dam",
    title: "AI-Powered Digital Asset Management",
    tagline: "Natural-language semantic search over images, videos & documents",
    description:
      "A full-stack DAM platform where users upload images, videos, and PDFs, and search them using natural-language queries. Semantic search is powered by CLIP embeddings and a vector store, enabling zero-shot retrieval without manual tagging.",
    problem:
      "Traditional DAM systems rely on manual tags and folder hierarchies. Finding the right asset across thousands of files is slow, error-prone, and dependent on whoever tagged the content.",
    solution:
      "Built with FastAPI + Python on the backend. Assets are indexed incrementally using CLIP (for images/video frames) and sentence-transformers (for documents). Embeddings are stored in a vector DB. The React frontend provides a search bar, filter sidebar, preview panel, and search-quality evaluation dashboard.",
    impact:
      "Reduces asset retrieval time by ~70% compared to manual browse. Enables discovery of visually similar assets and cross-modal search (\"find images matching this PDF paragraph\").",
    tags: ["FastAPI", "Python", "CLIP", "React", "Vector DB", "Semantic Search", "PostgreSQL"],
    category: ["AI/ML", "Backend", "Frontend"],
    metrics: [
      { label: "Retrieval Speedup", value: "~70%" },
      { label: "Asset Types", value: "Images, Video, PDF" },
      { label: "Search Model", value: "CLIP + Sentence-BERT" },
      { label: "Indexing", value: "Incremental" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/AI-Powered-Digital-Asset-Management-DAM" },
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "stockflow",
    title: "StockFlow",
    tagline: "Scalable e-commerce backend with async order processing",
    description:
      "A production-ready e-commerce backend supporting 1000+ products across 25 stores. Features async order processing with Celery + Redis, a comprehensive REST API (DRF), and 19 automated API tests covering critical workflows.",
    tags: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Python"],
    category: ["Backend"],
    metrics: [
      { label: "Products", value: "1000+" },
      { label: "Stores", value: "25" },
      { label: "API Tests", value: "19" },
      { label: "Task Queue", value: "Celery + Redis" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/StockFlow-Production-Ready-E-Commerce-Backend" },
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "skynest",
    title: "SkyNest",
    tagline: "Full-stack property rental & listing platform",
    description:
      "A full-stack property rental platform built with Node.js/Express on the backend and React + Vite on the frontend. Supports two user roles (host and guest), four property types, image uploads, and a booking management workflow.",
    tags: ["Node.js", "Express.js", "React", "Vite", "MySQL", "JWT"],
    category: ["Frontend", "Backend"],
    metrics: [
      { label: "User Roles", value: "2 (Host / Guest)" },
      { label: "Property Types", value: "4+" },
      { label: "Image Uploads", value: "Supported" },
      { label: "Auth", value: "JWT" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/skynest" },
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    id: "herbai",
    title: "HerbAI",
    tagline: "On-device medicinal plant identification — 92% accuracy",
    description:
      "Flutter mobile app powered by a TensorFlow Lite model that classifies 40 medicinal plant species with 92% accuracy. Designed for offline use by healthcare workers and researchers in areas with limited connectivity. The underlying research was published at IEEE ICACC 2025.",
    tags: ["Flutter", "TensorFlow Lite", "Dart", "On-device AI", "Computer Vision"],
    category: ["AI/ML", "Mobile"],
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Plant Classes", value: "40" },
      { label: "Platform", value: "Flutter (iOS + Android)" },
      { label: "Inference", value: "On-device (offline)" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/Herbal-Plant-Identifier" },
    gradient: "from-green-500 to-lime-600",
  },
  {
    id: "flightnest",
    title: "FlightNest",
    tagline: "Real-time flight booking & seat reservation system",
    description:
      "A full-stack flight booking platform with real-time seat availability, dynamic pricing, and PDF ticket generation. Built with Spring Boot and React, deployed with Docker Compose.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Docker", "JWT", "iText PDF"],
    category: ["Backend", "Frontend"],
    metrics: [
      { label: "Booking Flow", value: "Real-time" },
      { label: "PDF Tickets", value: "Auto-generated" },
      { label: "Auth", value: "JWT" },
      { label: "Deployment", value: "Docker Compose" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/flightnest" },
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "service-hub",
    title: "Service Hub",
    tagline: "Multi-vendor home services marketplace",
    description:
      "A marketplace connecting homeowners with local service providers (plumbers, electricians, cleaners). Features service listings, booking scheduling, reviews, and real-time chat between customers and providers.",
    tags: ["Spring Boot", "React", "MySQL", "WebSocket", "JWT"],
    category: ["Backend", "Frontend"],
    metrics: [
      { label: "Service Categories", value: "8+" },
      { label: "Real-time Chat", value: "WebSocket" },
      { label: "Reviews", value: "Star-rated" },
      { label: "Scheduling", value: "Calendar booking" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/service-hub" },
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "auth-system",
    title: "Auth System",
    tagline: "Enterprise-grade authentication & RBAC microservice",
    description:
      "A standalone authentication microservice with JWT + refresh token rotation, role-based access control, email verification, and brute-force protection. Designed for drop-in integration with any Spring Boot service.",
    tags: ["Spring Boot", "PostgreSQL", "JWT", "Redis", "Spring Security"],
    category: ["Backend", "Infrastructure"],
    metrics: [
      { label: "Token Strategy", value: "JWT + Refresh Rotation" },
      { label: "RBAC", value: "Role + Permission" },
      { label: "Brute-force", value: "Rate-limited (Redis)" },
      { label: "Email Verify", value: "SMTP" },
    ],
    links: { github: "https://github.com/ChinthaVamsidharReddy/authentication" },
    gradient: "from-rose-500 to-pink-600",
  },
];

export const certifications = [
  {
    name: "Azure AI Apps and Agents Developer Associate",
    code: "AI-103",
    issuer: "Microsoft",
    year: "2026",
    badge: "azure",
  },
  {
    name: "Spring Boot & Microservices",
    code: "",
    issuer: "Geeksforgeeks",
    year: "2026",
    badge: "Geeksforgeeks",
  },
  {
    name: "Data Structures and Algorithms",
    code: "",
    issuer: "Infosys Springboard",
    year: "2025",
    badge: "Infosys Springboard",
  },
  {
    name: "Java — The Complete Guide",
    code: "",
    issuer: "Udemy",
    year: "2025",
    badge: "udemy",
  },
  {
    name: "NoSql",
    code: "",
    issuer: "Infosys Springboard",
    year: "2025",
    badge: "Infosys Springboard",
  },
  
];
