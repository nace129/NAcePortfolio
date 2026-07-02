export const personal = {
  name: "Nidhi Shah",
  positioning:
    "Full-Stack Software Engineer building Applied AI systems — RAG pipelines, LLM orchestration, and distributed cloud infrastructure",
  location: "San Francisco Bay Area (open to relocate)",
  github: "https://github.com/nace129",
  githubHandle: "github.com/nace129",
  linkedin: "https://linkedin.com/in/nidhishah4065",
  linkedinHandle: "linkedin.com/in/nidhishah4065",
  email: "nidhis0120@gmail.com",
  resumeUrl: "/resume.pdf",
};

export const about = `Full-stack AI software engineer with 2.5 years of production experience, currently finishing a Master's in Software Engineering (Cloud & Mobile Computing) at San Jose State University. I've built AI-integrated products end-to-end — RAG pipelines, LLM integration, function calling, and vector databases on distributed cloud infrastructure. At Sophos, I maintained 99.9% uptime for 25.7M protected devices. I'm an AWS Certified Solutions Architect.`;

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
    name: "VisionBuddy",
    pitch:
      "Real-time multimodal AI agent that narrates the physical world for blind users through a Flutter Android app.",
    problem:
      "Visually impaired users need real-time, hands-free scene understanding.",
    approach:
      "Built a dual-model NVIDIA NIM vision pipeline (primary + automatic fallback model) feeding into Nemotron-70B for natural-language enhancement, then text-to-speech output. 5 specialized analysis modes: general scene, medical/medication ID, navigation safety, text/OCR reading, and currency recognition.",
    stack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "NVIDIA NIM (Nemotron)",
      "REST API",
    ],
    outcome:
      "Core AI pipeline and backend production-ready; mobile-backend wiring in progress",
    github: "https://github.com/nace129/VisionBuddy",
  },
  {
    name: "DataTrust",
    pitch:
      "Policy-aware enterprise AI assistant enforcing role-based LLM access control with full audit traceability.",
    problem:
      "Enterprises need visibility and governance over how employees use AI, not just AI capability itself.",
    approach:
      "Built RAG with semantic search, function calling, tool use, and structured outputs, layered with role-based access controls and shadow-AI usage detection.",
    stack: ["Python", "TypeScript", "RAG", "Semantic Search", "Vector DB"],
    outcome: "Policy-enforced AI orchestration system with audit trail",
    github: "https://github.com/SJSU-DataTrust/DataTrust_Project",
  },
  {
    name: "AI Usage Risk Intelligence Platform",
    pitch:
      "A telemetry and risk-detection system for enterprise LLM usage.",
    problem:
      "Companies need to detect compliance risk (PII leakage, sensitive data exposure) in real employee-AI interactions.",
    approach:
      "Chrome extension captures prompt/response pairs from ChatGPT, correlates them via UUID turn-tracking, and runs an asynchronous PII-detection + explainable (rule-based, auditable) risk-scoring pipeline.",
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Chrome Extension (Manifest V3)",
      "AWS",
    ],
    outcome: "Real-time, auditable risk scoring for enterprise AI usage",
    github:
      "https://github.com/nace129/AI-Usage-Risk-Intelligence-Platform",
  },
  {
    name: "CareerPilot",
    pitch:
      "Full-stack platform that analyzes resumes against job descriptions and coaches candidates through AI-powered mock interviews.",
    problem:
      "Candidates struggle to prepare effectively and get personalized feedback for technical/behavioral interviews.",
    approach:
      "Structured-output LLM integration (Gemini + Cohere) for resume analysis, speech-to-text for audio-based mock interviews, real-time feedback.",
    stack: [
      "React",
      "TypeScript",
      "Flask",
      "Gemini API",
      "Cohere API",
      "MongoDB",
      "AWS",
    ],
    outcome: "AI interview preparation platform with resume-to-JD analysis",
    github: "https://github.com/nace129/CareerPilotProject",
  },
  {
    name: "BookMyTable",
    pitch:
      "Cloud-native restaurant reservation platform with real-time availability, built and deployed as project lead for a team of 4.",
    problem:
      "Restaurants need reliable real-time booking with an admin-facing management layer.",
    approach:
      "Spring Boot microservices architecture with MongoDB, real-time table availability, admin dashboard, deployed on AWS EC2/S3 across Agile sprints.",
    stack: ["Spring Boot", "MongoDB", "AWS EC2", "AWS S3", "Microservices"],
    outcome: "Shipped full-stack reservation system as project lead",
    github: "https://github.com/CMPE202-CloudCircuit/BookMyTable",
  },
];

export interface OtherProject {
  name: string;
  description: string;
  github: string;
}

export const otherProjects: OtherProject[] = [
  {
    name: "JobSwipe",
    description: "Swipe-based job discovery and matching app.",
    github: "https://github.com/nace129/JobSwipe",
  },
  {
    name: "Market Researcher & Car Maintenance Copilots",
    description: "Hackathon project — AI copilots for research and car maintenance workflows.",
    github:
      "https://github.com/nace129/Market-Researcher-and-Car-Maintenance-Copilots-Hackathon",
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

export const certifications = ["AWS Certified Solutions Architect – Associate"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
