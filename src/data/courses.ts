import { IMAGES } from "@/data/images";

export interface Course {
  id: string;
  title: string;
  image: string;
  description: string;
  videoUrl: string;
  details: string[];
  duration: string;
  modules: number;
}

export const courses: Course[] = [
  {
    id: "frontend-domination",
    title: "Frontend Domination",
    image: IMAGES.courseFrontend,
    description: "Master React, HTML, CSS, JavaScript, TypeScript and modern frontend frameworks to build stunning user interfaces.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6 Months",
    modules: 24,
    details: [
      "HTML5, CSS3, Responsive Design & Tailwind CSS",
      "JavaScript ES6+ Deep Dive",
      "React.js with Hooks, Context API & Redux",
      "TypeScript Fundamentals",
      "Next.js & Server Side Rendering",
      "UI/UX Design Principles",
      "Real-world Projects & Portfolio Building",
      "Interview Preparation & Mock Interviews",
    ],
  },
  {
    id: "backend-domination",
    title: "Backend Domination",
    image: IMAGES.courseBackend,
    description: "Learn Node.js, Express, databases, APIs, authentication and server-side architecture from scratch.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "6 Months",
    modules: 22,
    details: [
      "Node.js & Express.js Fundamentals",
      "RESTful API Design & GraphQL",
      "MongoDB, PostgreSQL & Database Design",
      "Authentication & Authorization (JWT, OAuth)",
      "Microservices Architecture",
      "Docker & Deployment Strategies",
      "Testing & CI/CD Pipelines",
      "System Design & Scalability",
    ],
  },
  {
    id: "fullstack-webdev",
    title: "FullStack WEBDEV",
    image: IMAGES.courseFullstack,
    description: "The complete package — master both frontend and backend to become a full-stack web developer.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12 Months",
    modules: 48,
    details: [
      "Complete Frontend Development (HTML, CSS, JS, React)",
      "Complete Backend Development (Node.js, Express)",
      "Database Management (MongoDB, PostgreSQL)",
      "Full-Stack Project Architecture",
      "DevOps & Cloud Deployment (AWS/GCP)",
      "Real-time Applications with WebSockets",
      "Payment Integration & Third-party APIs",
      "Capstone Project & Career Guidance",
    ],
  },
];
