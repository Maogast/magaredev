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
    challenge:
      "No real-time visibility into stock levels caused mismatches and stockouts.",
    solution:
      "Built a Next.js dashboard with Supabase real-time DB, full CRUD, audit trails, low-stock alerts, and server-side pagination.",
    result:
      "Eliminated data errors and gave teams up-to-the-second SKU visibility.",
    liveDemoUrl: "https://spenza-stock.vercel.app/",
  },
  {
    slug: "transaction-tracker",
    title: "Transaction Tracker Application",
    role: "Full-Stack Developer",
    stack: ["React", "Firebase Auth/Firestore", "Material-UI"],
    challenge:
      "No centralized system for logging and auditing transactions in real time.",
    solution:
      "Built a Firebase-powered app with Google+Email auth, Firestore logging, role-based dashboards, and timestamps.",
    result:
      "Streamlined reconciliation and cut reporting time by over 50%.",
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
    liveDemoUrl: "https://nk2-organics-frontend.vercel.app/",
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
];

export default projects;