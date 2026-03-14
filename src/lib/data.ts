/* ─── Portfolio Content Data ──────────────────────────────────────────── */

export const siteConfig = {
  name: "Joe Montalto",
  role: "AI Engineer & Developer",
  tagline:
    "Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital projects that leave a mark.",
  availability: "Available for work",
  availableDate: "Jun'26",
  profileImage: "/1.webp",
};

export const navLinks = [
  { label: "Services", href: "/#Services" },
  { label: "Works", href: "/#Works" },
  { label: "About", href: "/#About" },
  { label: "Contact", href: "/#Contact" },
];

export interface Service {
  number: string;
  title: string;
  description: string;
  skills: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Back-End Development",
    description:
      "From ETL pipelines to ML-driven insights, I build complete data suites with simple dashboards. I work with modern stacks to deliver high-impact apps that are scalable, maintainable, and ready for real-world users.",
    skills: [
      "FastAPI, Node.js, SQL/PostgreSQL",
      "AWS, Kubernetes, Airflow, Kafka",
      "Git, GitHub, Postman, Jira",
    ],
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Data is everywhere. I apply statistical analysis to reveal patterns, flag anomalies, and support better decisions. My work applies efficient modeling to cleaned data to deliver insights for my teams.",  
    // "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
    skills: [
      "scikit-learn, NumPy, Pandas",
      "PCA, K-Means, Multivariate Analysis",
      "Exploratory Data Analysis, Feature Engineering",
    ],
  },
  {
    number: "03",
    title: "Optimization",
    description:
      "I focus on building systems that stay reliable as things scale. From building clean dashboards to adding security architecture, I apply core computer science principles to keep applications fast, secure, and usable for the future.", 
    // "Beyond handling data, I'm driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
    skills: [
      "Data Structures & Algorithms",
      "DBMS, OOP, OS Fundamentals",
      "Data Pipelines, ETL, and Task Automation",
    ],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
  year: string;
  video?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Solar Microgrid Energy Management System",
    subtitle: "Modern Marketing Website",
    href: "https://energy-management-system-sim.streamlit.app/",
    tags: ["Development"],
    year: "2025",
    video: "/ems_recording_new.mp4",
  },
//   {
//     title: "Financial Capstone AI",
//     subtitle: "Full-Stack Recruitment Platform",
//     href: "https://zunedjobs.netlify.app/",
//     tags: ["Development"],
//     year: "2025",
//   },
  {
    title: "Wildfire Detection",
    subtitle: "SAAS Platform",
    href: "https://productivity-saas-zuned.netlify.app/",
    tags: ["Development"],
    year: "2025",
    image: "/wildfire_thumbnail.png",
  },
//   {
//     title: "Real Time Financial News Monitor",
//     subtitle: "ML Recommendation Engine",
//     href: "https://movierecommendation-sbjn.onrender.com/",
//     tags: ["Development"],
//     year: "2025",
//   },
//   {
//     title: "Hot Food Places",
//     subtitle: "Using Google Places API to get place w most new reviews",
//     href: "https://code2img-zuned.netlify.app/",
//     tags: ["Development"],
//     year: "2025",
//   },
];

export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Tools",
    items: [
      "Python",
      "SQL",
      "C++",
      "Java",
      "Typescript",
      "JavaScript",
      "Git",
      "Postman",
      "Docker",
      "Firebase",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "Flask",
      "Bootstrap",
      "jQuery",
      "TailwindCSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    title: "Core CS Concepts",
    items: ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"],
  },
];

export const aboutHeadings = ["DEVELOPER", "DESIGNER", "CREATOR/"];

export const aboutTagline =
  "I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences.";

export const aboutBio = [
  "I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.",
  "Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.",
];

export const servicesIntro =
  "I specialize in building data pipelines that are fast, reliable, and developer-friendly. With a solid foundation in algorithms and AI, I can create simple solutions for complex problems."
// "I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it's for a business, a startup, or a product team.";

export const worksIntro =
  "Here are some of my favorite projects.";

export const footerMenu = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#Services" },
  { label: "Works", href: "#Works" },
  { label: "About", href: "#About" },
  { label: "Contact", href: "#Contact" },
];

export const socials = [
  {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/joe-montalto-478b56230/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/joey.montalto/",
  },
  {
    label: "Github",
    href: "https://github.com/jomo8",
  },
];
