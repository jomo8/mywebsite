/* ─── Portfolio Content Data ──────────────────────────────────────────── */

export const siteConfig = {
  name: "Joe Montalto",
  contactEmail: "joey.montalto@hotmail.com",
  tagline:
    "I’m a software engineer that loves to work with the people who use what I build. I've built tools that automated forecasting, staffing, and sales reporting for restaurant owners.",
  availability: "Available for work",
  availableDate: "DEC'26",
  profileImage: "/myself.JPG",
};

export const navLinks = [
  { label: "Work", href: "/#Works" },
  { label: "About", href: "/#About" },
  { label: "Contact", href: "/#Contact" },
];

export const selectedWork = {
  featured: {
    category: "Client delivery",
    title: "Featured case study",
    summary: "Project brief, approach, and outcomes coming soon.",
  },
  engineering: {
    category: "Software engineering",
    title: "Reporting workflow",
    summary: "Implementation notes coming soon.",
  },
  analysis: {
    category: "Data analysis",
    title: "Performance analysis",
    summary: "Methods and findings coming soon.",
  },
};

export const moreProjects = {
  year: "2025",
  items: [
    {
      title: "Solar Microgrid Energy Management System",
      href: "https://energy-management-system-sim.streamlit.app/",
    },
    {
      title: "Wildfire Detection",
      href: "https://github.com/jomo8/mywebsite/blob/main/Wildfire_Detection_Analysis.ipynb",
    },
  ],
};

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

export const footerMenu = [{ label: "Home", href: "/" }, ...navLinks];

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
