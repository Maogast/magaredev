// data/projects.ts

export interface Project {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  challenge: string;
  solution: string;
  result: string;
  liveDemoUrl?: string;
}

const projects: Project[] = [
  {
    slug: "spenza-stock",
    title: "Spenza Stock Inventory Dashboard",
    role: "Full-Stack Developer",
    stack: ["Next.js", "Supabase", "SWR", "Vercel"],
    challenge: "No real-time visibility into stock levels caused mismatches and stockouts.",
    solution:
      "Built a Next.js dashboard with Supabase real-time DB, full CRUD, audit trails, low-stock alerts, and server-side pagination.",
    result: "Eliminated data errors and gave teams up-to-the-second SKU visibility.",
    liveDemoUrl: "https://spenza-stock.vercel.app/",
  },
  {
    slug: "transaction-tracker",
    title: "Transaction Tracker Application",
    role: "Full-Stack Developer",
    stack: ["React", "Firebase Auth/Firestore", "Material-UI"],
    challenge: "No centralized system for logging and auditing transactions in real time.",
    solution:
      "Built a Firebase-powered app with Google+Email auth, Firestore logging, role-based dashboards, and timestamps.",
    result: "Streamlined reconciliation and cut reporting time by over 50%.",
    liveDemoUrl: "https://transact-nature-s-k-organics.web.app/",
  },
  {
    slug: "natures-kitchen-organics",
    title: "Nature's Kitchen Organics",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "Vite", "Three.js", "GSAP"],
    challenge:
      "Static pages failed to convey product quality and struggled to hold attention.",
    solution:
      "Created a React SPA with immersive 3D product visuals (Three.js + GSAP), fully responsive.",
    result:
      "Boosted session duration and delivered a memorable shopping experience.",
    liveDemoUrl: "https://natures-kitchen-organics.netlify.app/",
  },
  {
    slug: "mine-the-word",
    title: "Mine The Word Academy Website",
    role: "Lead Developer",
    stack: ["WordPress", "PHP", "Elementor", "JavaScript"],
    challenge:
      "Outdated CMS slowed content updates and hampered SEO performance.",
    solution:
      "Rebuilt on WordPress with custom plugins, responsive layouts, and SEO optimizations.",
    result:
      "Increased organic traffic and halved new-content publishing time.",
    liveDemoUrl: "https://minetheword-claim.org/",
  },
  {
    slug: "nk2-organics",
    title: "NK2-Organics E-Commerce Platform",
    role: "Full-Stack Developer",
    stack: ["React", "Supabase", "REST API"],
    challenge:
      "Absence of a professional, real-time e-commerce platform to showcase products and manage inventory.",
    solution:
      "Developed a React SPA with a Supabase backend and secure REST API integration for live product data, plus performance optimizations.",
    result:
      "Delivered a flagship, customer-centric store that boosted engagement and streamlined stock management.",
     liveDemoUrl: "https://nk2-organics-frontend.vercel.app/" 
  },
  {
    slug: "performance-tracker-magare",
    title: "Performance Tracker for Magare",
    role: "Frontend Developer",
    stack: ["React", "TypeScript", "Firebase Cloud Firestore", "Material-UI"],
    challenge:
      "Users lacked a streamlined system to record, visualize, and analyze performance trends over time.",
    solution:
      "Built a React web app with Firebase Cloud Firestore for persistence, featuring dynamic charts and logs for real-time insights.",
    result:
      "Enabled users to track progress effectively, improving accountability and data-driven goal setting.",
    liveDemoUrl: "https://performance-tracker-magare.netlify.app/",
  },
  {
    slug: "she-systems-consultancy",
    title: "SHE Systems Consultancy Ltd.",
    role: "WordPress Developer",
    stack: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    challenge:
      "The company lacked a professional website to showcase services and manage content efficiently.",
    solution:
      "Designed and deployed a responsive WordPress site with dynamic content management capabilities.",
    result:
      "Increased brand credibility and streamlined content publication workflows.",
    // liveDemoUrl: "https://she-systems-consultancy-ltd.com" // add your live link here
  },
  {
    slug: "attendance-register",
    title: "Church Attendance Register",
    role: "Full-Stack Developer",
    stack: ["React", "Firebase Auth/Firestore", "Material-UI"],
    challenge:
      "Manual attendance processes were time-consuming and error-prone.",
    solution:
      "Developed a React app with Firebase real-time database, role-based access, and an intuitive UI for marking and reviewing attendance.",
    result:
      "Modernized record-keeping, improved data accuracy, and simplified administrative workflows.",
    liveDemoUrl: "https://zimmersdachurchtracker.vercel.app/" //add your live link here
  },
];

export default projects;