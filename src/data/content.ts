export const personal = {
  name: "Nidhi Shah",
  positioning:[
    "Full-Stack Software Engineer - Applied AI focus",
    "RAG, LLM orchestration, and the distributed systems underneath them",
  ],
  location: "San Francisco Bay Area (open to relocate)",
  github: "https://github.com/nace129",
  githubHandle: "github.com/nace129",
  linkedin: "https://linkedin.com/in/nidhishah4065",
  linkedinHandle: "linkedin.com/in/nidhishah4065",
  twitter: "https://x.com/NidhiS129",
  twitterHandle: "@NidhiS129",
  youtube: "https://www.youtube.com/@nidhishah8206",
  youtubeHandle: "@nidhishah8206",
  email: "nidhis0120@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const about = `I'm a full-stack software engineer with 2.5 years of production experience, currently graduated with Master's in Software Engineering (Cloud & Mobile Computing) at San José State University. I spent that production time at Sophos owning reliability for distributed systems protecting 25.7M devices, and started my career as a security analyst - logs, threat detection, vulnerability assessment - which is where the instinct to think about access control and audit trails, not just features, comes from.

That instinct now shows up in my Applied AI work: RAG pipelines, LLM orchestration with function calling and structured outputs, and the access-control and evaluation layers that make AI systems trustworthy enough to put in front of enterprise users.

AWS Certified Solutions Architect – Associate, Certified Ethical Hacker (CEH). Currently looking for full-stack or Applied AI engineering roles, and everything below is real, working code, not just claims on a page.`;

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Development Intern",
    org: "Plato+",
    period: "June 2025 — Aug 2025",
    bullets: [
      "Increased mobile user engagement 35% by designing a recommendation system from scratch using TF-IDF and FAISS/ScaNN",
      "Reduced deployment cycle time 40% by containerizing Django/GraphQL services with Docker + Redis + Elasticsearch, deployed to AWS via improved CI/CD",
    ],
  },
  {
    role: "Software Engineer, Quality & Reliability Engineering",
    org: "Sophos",
    period: "Oct 2023 — July 2024",
    bullets: [
      "Maintained 99.9% uptime for 25.7M protected devices across 6 distributed Java/Groovy microservices on AWS with Docker/Kubernetes",
      "Slashed validation time 33% with CI-integrated test pipelines (400+ cases); led incident response as DRI, achieving 95% same-sprint closure across 200+ defects",
    ],
  },
  {
    role: "Software Engineering Intern, Test Automation",
    org: "Sophos",
    period: "Dec 2021 — Sept 2023",
    bullets: [
      "Reduced regression debugging time 60% by building a Python/Bash automation toolset (120+ test cases)",
      "Improved PostgreSQL query performance 45% across 3 production services",
    ],
  },
  {
    role: "Security Analyst - VAPT & SOC",
    org: "TechDefence Labs",
    period: "June 2021 – Nov 2021",
    bullets: [
      "Strengthened infrastructure security by analyzing real-time logs with Splunk SIEM, proactively identifying and mitigating threats to reduce incident response time",
      "Conducted security assessments using Nessus, Nmap, and Wireshark, delivering actionable recommendations that improved system resilience and data integrity",
    ],
  },
];

export interface Project {
  name: string;
  pitch: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "DataTrust",
    pitch:
      "Policy-aware enterprise AI assistant enforcing role-based LLM access control with full audit traceability.",
    problem:
      "Enterprises are adopting LLMs faster than they can govern them — most RAG systems assume every user can see every document, which breaks the moment sensitive and general-access data share a knowledge base.",
    approach:
      "Built a RAG pipeline with semantic search, function calling, tool use, and structured outputs, layered with role-based access control at the retrieval layer and shadow-AI usage detection to flag ungoverned AI interactions.",
    stack: ["Python", "TypeScript", "RAG", "Semantic Search", "Vector DB", "Function Calling", "Access Control"],
    outcome:
      "Production-style AI orchestration system with enforced access boundaries and a full audit trail on every AI interaction — Production-style AI orchestration system with access boundaries enforced at the retrieval layer and a full audit trail on every AI interaction.",
    github: "https://github.com/SJSU-DataTrust/DataTrust_Project",
  },
  {
    name: "VisionBuddy",
    pitch:
      "Real-time multimodal AI agent that narrates the physical world for blind users through a mobile app.",
    problem:
      "Visually impaired users need real-time, hands-free scene understanding that goes beyond simple object labels — navigation, medication ID, and text reading all require different kinds of visual reasoning.",
    approach:
      "Built a dual-model NVIDIA NIM vision pipeline with automatic fallback, feeding into Nemotron-70B for natural-language scene description, across five specialized modes: general scene, medical/medication ID, navigation safety, text/OCR reading, and currency recognition.",
    stack: ["Flutter", "Dart", "FastAPI", "Python", "NVIDIA NIM", "Multimodal AI", "Text-to-Speech"],
    outcome:
      "Five working AI-assisted accessibility modes with automatic model fallback for reliability — Five working AI-assisted accessibility modes with automatic model fallback for reliability. Backend and Flutter app run as functional parallel components; full end-to-end integration is in progress.",
    github: "https://github.com/nace129/VisionBuddy",
  },
  {
    name: "AI Usage Risk Intelligence Platform",
    pitch:
      "Telemetry and risk-detection platform that flags PII exposure and compliance risk in real LLM interactions.",
    problem:
      "Enterprises have no visibility into what employees are actually sending to AI tools like ChatGPT — sensitive data can leak with zero detection or audit trail.",
    approach:
      "Built a browser extension that captures prompt/response pairs, correlates them by conversation via UUID turn-tracking, and runs an asynchronous PII-detection and explainable, rule-based risk-scoring pipeline so every flag is auditable, not a black-box score.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Chrome Extension (Manifest V3)", "AWS", "PII Detection"],
    outcome:
      "End-to-end risk telemetry pipeline from browser capture to explainable risk score — End-to-end risk telemetry pipeline from browser capture through explainable risk score, covering four PII categories (email, SSN, phone, payment-card patterns) with automatic redaction of high-risk content.",
    github: "https://github.com/nace129/AI-Usage-Risk-Intelligence-Platform",
  },
  {
    name: "CareerPilot",
    pitch:
      "AI-powered interview prep platform that analyzes resumes against job descriptions and coaches candidates through mock interviews.",
    problem:
      "Candidates struggle to get specific, personalized feedback on resume-job fit and interview performance without expensive human coaching.",
    approach:
      "Built structured-output LLM integration across Gemini and Cohere for resume-to-JD analysis, with audio-based mock interviews and real-time AI feedback on responses.",
    stack: ["React", "TypeScript", "Flask", "Gemini API", "Cohere API", "MongoDB", "AWS"],
    outcome:
      "Full-stack AI coaching product spanning resume analysis to live audio interview feedback — Full-stack AI coaching product spanning resume-to-JD analysis through live audio interview feedback, built on structured-output LLM integration across two providers.",
    github: "https://github.com/nace129/CareerPilotProject",
  },
  {
    name: "BookMyTable",
    pitch:
      "Cloud-native restaurant reservation platform with real-time table availability, built and deployed as project lead.",
    problem:
      "Restaurants need reliable real-time booking with an admin-facing management layer, without the complexity or cost of enterprise reservation software.",
    approach:
      "Led a team of four to design and build a Spring Boot microservices architecture with MongoDB, real-time availability tracking, and an admin dashboard, deployed on AWS EC2 and S3 across Agile sprints.",
    stack: ["Spring Boot", "MongoDB", "AWS EC2", "AWS S3", "Microservices", "Team Leadership"],
    outcome:
      "Fully deployed multi-service reservation system delivered end-to-end by a 4-person team under my technical leadership.",
    github: "https://github.com/CMPE202-CloudCircuit/BookMyTable",
  },
];

export interface OtherProject {
  name: string;
  pitch: string;
  stack: string[];
  github: string;
}

export const otherProjects: OtherProject[] = [
  {
    name: "JobSwipe",
    pitch: "Swipe-based job recommendation app matching candidates to roles.",
    stack: ["Flask", "React"],
    github: "https://github.com/nace129/JobSwipe",
  },
  {
    name: "Market Researcher & Car Maintenance Copilots",
    pitch:
      "Hackathon project pairing an agentic market-research assistant with a sound-based car maintenance diagnostic model.",
    stack: ["Java", "Agentic AI", "Audio Classification"],
    github: "https://github.com/nace129/Market-Researcher-and-Car-Maintenance-Copilots-Hackathon",
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Bash", "HTML5"],
  },
  {
    label: "AI & GenAI",
    items: [
      "LLM Integration",
      "RAG",
      "AI Agents",
      "Semantic Search",
      "Prompt Engineering",
      "FAISS/ScaNN",
      "pgvector",
      "Elasticsearch",
    ],
  },
  {
    label: "Frameworks & APIs",
    items: [
      "Spring Boot",
      "FastAPI",
      "Flask",
      "Django",
      "Node.js",
      "React",
      "REST APIs",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, CloudWatch, Lambda)",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL", "DynamoDB"],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  credentialLabel: string;
  heroLabel: string;
  file: string;
  fileType: "image" | "pdf";
  badge: "aws" | "ceh";
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    credentialLabel: "Associate",
    heroLabel: "AWS Certified Solutions Architect — Associate",
    file: "/certificates/aws-solutions-architect-associate.jpeg",
    fileType: "image",
    badge: "aws",
  },
  {
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    credentialLabel: "CEH",
    heroLabel: "Certified Ethical Hacker (CEH)",
    file: "/certificates/ceh-certified-ethical-hacker.pdf",
    fileType: "pdf",
    badge: "ceh",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
