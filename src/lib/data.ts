/* ─── Portfolio Content Data ──────────────────────────────────────────── */

export const siteConfig = {
  name: "Joe Montalto",
  contactEmail: "joey.montalto@hotmail.com",
  resumePath: "/jrm_resume_1.pdf",
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

export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  pageTitle: string;
  summary: string;
  detailHeading: string;
  body: string;
  figure: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
  };
}

export function casePath(slug: string) {
  return `/work/${slug}/`;
}

export const selectedWork = {
  featured: {
    slug: "hav-and-mar-staffing",
    category: "Client delivery",
    title: "Helping Hav & Mar plan next week’s staffing",
    pageTitle: "Helping Hav & Mar plan next week’s staffing",
    summary:
      "Hav & Mar’s schedule writer posted shifts every Friday. I built a two-week planning view that brought reservations, large parties, and upcoming events together before she posted.",
    detailHeading: "What changed after client feedback",
    body:
      "Working with her also changed how I presented labor costs. She wanted to see which parts of the restaurant were running above target. I revised the daily labor report to show front- and back-of-house labor separately, compare each role with its target, and simplify the charts. At our next meeting, she confirmed she had seen the changes and found the report easier to use.",
    figure: {
      src: "/images/work/v1b-reservations-with-schedules-crop.png",
      width: 2336,
      height: 1790,
      alt: "Weekly forecast table comparing scheduled and recommended labor hours for each night.",
      caption:
        "Recreated weekly staffing forecast with illustrative figures. Each row compares one night’s expected demand, scheduled hours, and the hours implied by the labor target.",
    },
  },
  engineering: {
    slug: "restaurant-data-imports",
    category: "Software engineering",
    title: "Importing OpenTable and ezCater data without API access",
    pageTitle: "Bringing OpenTable and ezCater data into Colette without API access",
    summary:
      "I built two file importers so restaurant teams could use their existing exports in Colette. OpenTable reservations fed planning reports, and ezCater order details fed a kitchen prep sheet.",
    detailHeading: "Handling incomplete exports",
    body:
      "The two providers served different restaurant groups and exported different data. OpenTable supplied reservation CSVs. For ezCater, I combined order summaries with item-level details so a kitchen could see what to prepare. I also built checks for files that looked usable but were incomplete. When a real OpenTable export arrived with eight required columns missing, the importer rejected it in seconds and replied to the sender with the names of all eight.",
    figure: {
      src: "/images/work/v2a-email-import-architecture.png",
      width: 2400,
      height: 1720,
      alt: "Import architecture showing Joe’s components, the successful route to reporting, and a rejection branch for missing columns.",
      caption:
        "The diagram follows an emailed export from validation to report data. The dashed outline marks the components I built. The rejection path shows how the sender learns which columns are missing.",
    },
  },
  analysis: {
    slug: "labor-versus-sales",
    category: "Data analysis",
    title: "Making labor costs comparable across restaurant systems",
    pageTitle: "Making labor costs comparable across restaurant systems",
    summary:
      "A restaurant manager could ask, “What percentage of sales went to labor this week?” I built the calculation that let Colette answer when a restaurant used different systems for timekeeping and sales.",
    detailHeading: "Calculating a weekly percentage managers can interpret",
    body:
      "I joined clock-in costs with net sales by location and business day. For a weekly figure, I divided total labor cost by total sales so a quiet Monday and a busy Friday contributed in proportion to their sales. The tool also distinguished a genuine zero from a figure it couldn’t calculate. I checked the new calculation against Colette’s earlier Toast-only tool. In an automated test using synthetic data, the two agreed to the cent.",
    figure: {
      src: "/images/work/v3a-labor-pct-by-day.png",
      width: 2400,
      height: 1400,
      alt: "Illustrative daily labor percentages. The period total is 24.7%. Saturday is blank because sales were zero. Sunday shows a flagged 0% because there were sales and no clock-ins.",
      caption:
        "Illustrative week. Labor was 24.7% of total sales. Averaging the daily percentages would give 21.4% because it gives quiet and busy days equal weight.",
    },
  },
} satisfies Record<string, CaseStudy>;

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

export const aboutBio =
  "I earned an M.S. in Artificial Intelligence and a B.S. in Computer Science at Tufts, where I also hosted a weekly music show on WMFO.";

export const experience = [
  {
    role: "Colette · Forward Deployed Engineer",
    description: "Worked with restaurant operators on staffing reports and built the integrations behind reservation and catering tools.",
  },
  {
    role: "ESG Flo · Software Engineer Intern",
    description: "Built Python data pipelines that increased reporting throughput by 40% across 15+ enterprise accounts.",
  },
  {
    role: "Lucky Friday Labs · Software Engineer Intern",
    description: "Built a Python service that analyzed more than 50,000 Ethereum transactions per day.",
  },
];

export const skillCategories = [
  { title: "Software engineering", skills: "TypeScript, React, Node.js, PostgreSQL, Vitest, Playwright" },
  { title: "Data analysis", skills: "SQL, Python, pandas, scikit-learn, data validation" },
  { title: "Client delivery", skills: "Requirements gathering, deployment, customer training, ongoing support" },
];

export const footerMenu = [{ label: "Home", href: "/" }, ...navLinks];

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joe-montalto-478b56230/",
  },
  {
    label: "GitHub",
    href: "https://github.com/jomo8",
  },
];
