import { IMAGES } from "@/data/images";

export interface CurriculumTopic {
  title: string;
  description: string;
  points: string[];
}

export interface CurriculumSection {
  heading: string;
  topics: CurriculumTopic[];
}

export interface Course {
  id: string;
  title: string;
  image: string;
  description: string;
  videoUrl: string;
  details: string[];
  duration: string;
  modules: number;
  curriculum?: CurriculumSection[];
  isUpcoming?: boolean;
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
    curriculum: [
      {
        heading: "1. HTML: Structuring Web Content",
        topics: [
          {
            title: "Fundamentals",
            description: "HTML (HyperText Markup Language) is the backbone of any website, defining the elements on a page.",
            points: [
              "Introduction to HTML, file setup, and the basic document structure including <!DOCTYPE html>, <html>, <head>, and <body> tags.",
            ],
          },
          {
            title: "Text & Content",
            description: "",
            points: [
              "Working with headings (<h1>–<h6>), paragraphs (<p>), line breaks (<br>), and horizontal rules (<hr>).",
            ],
          },
          {
            title: "Links & Navigation",
            description: "",
            points: [
              "Using the anchor tag (<a>) to create hyperlinks and managing navigation menus.",
            ],
          },
          {
            title: "Media Elements",
            description: "",
            points: [
              "Adding images (<img>), videos (<video>), audio (<audio>), and embedding content with iframes.",
            ],
          },
          {
            title: "Lists",
            description: "",
            points: [
              "Creating unordered (<ul>), ordered (<ol>), and description lists (<dl>) with list items (<li>).",
            ],
          },
          {
            title: "Tables",
            description: "",
            points: [
              "Structuring data using <table>, <tr>, <td>, <th>, and spanning rows or columns.",
            ],
          },
          {
            title: "Forms",
            description: "",
            points: [
              "Building interactive forms with <input> (various types like text, email, password), <textarea>, <select>, and <button>.",
            ],
          },
          {
            title: "Semantic HTML",
            description: "",
            points: [
              "Using meaningful tags like <header>, <footer>, <article>, <section>, and <nav> to improve accessibility and SEO.",
            ],
          },
        ],
      },
      {
        heading: "2. CSS: Styling and Layout",
        topics: [
          {
            title: "Basics",
            description: "CSS (Cascading Style Sheets) is used to control the layout, colors, fonts, and overall visual design.",
            points: [
              "Understanding CSS syntax, adding CSS (inline, internal, external), and using comments.",
            ],
          },
          {
            title: "Selectors & Specificity",
            description: "",
            points: [
              "Targeting elements using tag names, classes (.), IDs (#), and understanding the 'cascade' and specificity rules.",
            ],
          },
          {
            title: "Colors & Backgrounds",
            description: "",
            points: [
              "Applying colors (HEX, RGB, HSL), background images, repeats, and gradients.",
            ],
          },
          {
            title: "Typography",
            description: "",
            points: [
              "Controlling font-family (including Google Fonts), font-size, line-height, text alignment, and text decoration.",
            ],
          },
          {
            title: "The Box Model",
            description: "",
            points: [
              "Mastering padding, borders, margins, and the box-sizing property to manage element size and spacing.",
            ],
          },
          {
            title: "Positioning",
            description: "",
            points: [
              "Using static, relative, absolute, fixed, and sticky positioning to place elements precisely on a page.",
            ],
          },
          {
            title: "Layout Techniques",
            description: "",
            points: [
              "Flexbox: One-dimensional layouts for aligning items in rows or columns.",
              "Grid: Two-dimensional layouts for complex designs with rows and columns.",
              "Floats: Older layout methods using float and clear.",
            ],
          },
          {
            title: "Responsive Web Design",
            description: "",
            points: [
              "Using media queries and relative units (like %, em, rem, vh, vw) to ensure websites look good on all devices.",
            ],
          },
        ],
      },
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
    curriculum: [
      {
        heading: "1. Node.js Fundamentals",
        topics: [
          {
            title: "Runtime Basics",
            description: "",
            points: [
              "Understanding the Chrome V8 engine, event-driven architecture, and the single-threaded event loop.",
            ],
          },
          {
            title: "Modules & NPM",
            description: "",
            points: [
              "Using built-in modules (like fs, path, http) and managing third-party packages via NPM.",
            ],
          },
          {
            title: "Asynchronous Programming",
            description: "",
            points: [
              "Mastering callbacks, Promises, and async/await to handle non-blocking I/O operations.",
            ],
          },
          {
            title: "Environment Variables",
            description: "",
            points: [
              "Using tools like dotenv to store sensitive information like API keys and database credentials securely.",
            ],
          },
        ],
      },
      {
        heading: "2. Express.js Framework",
        topics: [
          {
            title: "Server Setup",
            description: "",
            points: ["Initializing a basic Express application and configuring ports."],
          },
          {
            title: "Routing",
            description: "",
            points: ["Defining HTTP methods (GET, POST, PUT, DELETE) and creating logical API endpoints (e.g., /api/users)."],
          },
          {
            title: "Middleware",
            description: "",
            points: ["Implementing application-level and router-level middleware for tasks like logging, body parsing, and CORS handling."],
          },
          {
            title: "Error Handling",
            description: "",
            points: ["Creating global error-handling routines to prevent server crashes and provide clear client feedback."],
          },
        ],
      },
      {
        heading: "3. MongoDB & Mongoose (Database)",
        topics: [
          {
            title: "NoSQL Concepts",
            description: "",
            points: ["Understanding document-oriented storage, collections, and JSON-like (BSON) formats."],
          },
          {
            title: "Mongoose ODM",
            description: "",
            points: ["Using Mongoose to create structured schemas and models for data validation."],
          },
          {
            title: "CRUD Operations",
            description: "",
            points: ["Building backend logic to Create, Read, Update, and Delete documents in MongoDB."],
          },
          {
            title: "Aggregation Framework",
            description: "",
            points: ["Processing large datasets and performing complex calculations on the server side."],
          },
          {
            title: "Indexing & Performance",
            description: "",
            points: ["Improving search efficiency using database indexes."],
          },
        ],
      },
      {
        heading: "4. Authentication & Security",
        topics: [
          {
            title: "JWT (JSON Web Tokens)",
            description: "",
            points: ["Implementing token-based authentication and secure session handling."],
          },
          {
            title: "Password Hashing",
            description: "",
            points: ["Using libraries like bcrypt to encrypt user passwords before saving them to the database."],
          },
          {
            title: "Role-Based Access Control (RBAC)",
            description: "",
            points: ["Protecting specific routes so only authorized users (e.g., admins) can access them."],
          },
          {
            title: "Input Validation",
            description: "",
            points: ["Sanitizing user data to prevent attacks like SQL/NoSQL injection."],
          },
        ],
      },
      {
        heading: "5. Advanced Backend Topics",
        topics: [
          {
            title: "Real-time Communication",
            description: "",
            points: ["Using Socket.io for WebSockets to enable features like live chat or notifications."],
          },
          {
            title: "File Uploads",
            description: "",
            points: ["Handling multipart data (like images or PDFs) using the multer middleware."],
          },
          {
            title: "API Testing",
            description: "",
            points: ["Utilizing tools like Postman or Insomnia to test endpoints and verify responses."],
          },
          {
            title: "Testing Frameworks",
            description: "",
            points: ["Writing unit and integration tests for routes and controllers using Jest or Supertest."],
          },
        ],
      },
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
    isUpcoming: true,
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
