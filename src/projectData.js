// projectData.js
// Add your GitHub repo URL to `source` for each project to show the GitHub icon and link.

export const projectData = [
  {
    name: "NewsX",
    slug: "newsx",
    link: "https://newsx-radzhiv.web.app",
    source: "https://github.com/radzhiv25/news-app",
    description: "Your daily news app",
    skills: ["React", "Tailwind", "GNews API"],
    image: "/assets/NewsX.png",
    className: "md:col-span-3",
    category: "Frontend",
    externalLink: "https://newsx-radzhiv.web.app",
    detailedDescription: `
      <p>NewsX is a news aggregation app that surfaces the latest headlines in one place. Built with <strong>React</strong> and <strong>Tailwind CSS</strong>, it fetches articles via the <strong>GNews API</strong> and presents them in a clean, responsive layout.</p>
      <h3>What I built</h3>
      <ul>
        <li>Category-based news (e.g. tech, business, world)</li>
        <li>Search and filter by topic</li>
        <li>Responsive design for mobile and desktop</li>
        <li>API integration and error handling</li>
      </ul>
    `,
  },
  {
    name: "PennWise",
    slug: "pennwise",
    link: "https://pennwise.vercel.app",
    source: "https://github.com/radzhiv25/pennwise",
    description: "An expense tracker to manage your daily expenses",
    skills: ["React", "Tailwind", "ChartJS"],
    image: "/assets/PennWise.png",
    className: "md:col-span-3",
    category: "Frontend",
    externalLink: "https://pennwise.vercel.app",
    detailedDescription: `
      <p>PennWise is a personal expense tracker to log spending and visualize trends. It uses <strong>React</strong> and <strong>Tailwind</strong> for the UI and <strong>Chart.js</strong> for charts and breakdowns.</p>
      <h3>What I built</h3>
      <ul>
        <li>Add, edit, and delete expense entries</li>
        <li>Charts for spending by category and over time</li>
        <li>Local storage for persistence</li>
        <li>Simple, accessible form and list UX</li>
      </ul>
    `,
  },
  {
    name: "Potato Leaf Analyser",
    slug: "potato-leaf-analyser",
    link: "https://potato-leaf-https://potato-leaf-analyzer.streamlit.app",
    source: "",
    description: "A leaf analyser to detect diseases in potato leaves",
    skills: ["Pandas", "Keras", "Tensorflow", "Numpy", "Python"],
    image: "/assets/LeafAnalyser.png",
    className: "md:col-span-3",
    category: "ML/AI",
    externalLink: "https://potato-leaf-https://potato-leaf-analyzer.streamlit.app",
    detailedDescription: `
      <p>An ML-powered tool that classifies potato leaf images to detect disease. Built with <strong>Python</strong>, <strong>TensorFlow</strong>, and <strong>Keras</strong>, using <strong>Pandas</strong> and <strong>NumPy</strong> for data handling.</p>
      <h3>What I built</h3>
      <ul>
        <li>Image upload and preprocessing pipeline</li>
        <li>CNN-based classification model</li>
        <li>Streamlit UI for inference</li>
        <li>Training and evaluation workflows</li>
      </ul>
    `,
  },
  {
    name: "StackMeme",
    slug: "stackmeme",
    link: "https://stackmeme.appwrite.network",
    source: "https://github.com/radzhiv25/stackmeme",
    description: "A meme platform for developers",
    skills: ["React", "Tailwind", "Appwrite", "ShadCN"],
    image: "/assets/StackMeme.png",
    className: "md:col-span-3",
    category: "Frontend",
    externalLink: "https://stackmeme.appwrite.network",
    detailedDescription: `
      <p>StackMeme is a dev-focused meme sharing app. The frontend is built with <strong>React</strong> and <strong>Tailwind</strong>, UI components from <strong>ShadCN</strong>, and backend/auth/storage powered by <strong>Appwrite</strong>.</p>
      <h3>What I built</h3>
      <ul>
        <li>User auth (sign up / login) via Appwrite</li>
        <li>Upload, view, and browse memes</li>
        <li>Reactions and basic engagement</li>
        <li>Responsive layout and dark mode</li>
      </ul>
    `,
  },
  {
    name: "CodeCache",
    slug: "codecache",
    link: "https://codecache.appwrite.network",
    source: "https://github.com/radzhiv25/codecache",
    description: "Code Snippets sharing site for developers",
    skills: ["React", "Tailwind", "Appwrite", "ShadCN"],
    image: "/assets/CodeCacheWeb.png",
    className: "md:col-span-3",
    category: "Frontend",
    externalLink: "https://codecache.appwrite.network",
    detailedDescription: `
      <p>CodeCache lets developers save and share reusable code snippets. Built with <strong>React</strong>, <strong>Tailwind</strong>, <strong>ShadCN</strong>, and <strong>Appwrite</strong> for auth and data.</p>
      <h3>What I built</h3>
      <ul>
        <li>Create, edit, and delete snippets with syntax highlighting</li>
        <li>Tagging and search</li>
        <li>Public and private snippets</li>
        <li>User profiles and snippet ownership</li>
      </ul>
    `,
  },
  {
    name: "Finboard",
    slug: "finboard",
    link: "https://finboard.appwrite.network",
    source: "https://github.com/radzhiv25/finboard",
    description: "A minimal expense tracker with AI insights",
    skills: ["React", "Tailwind", "Appwrite", "ShadCN"],
    image: "/assets/FinboardWeb.png",
    className: "md:col-span-4",
    category: "Frontend",
    externalLink: "https://finboard.appwrite.network",
    detailedDescription: `
      <p>Finboard is a minimal expense tracker with optional AI-driven insights. Uses <strong>React</strong>, <strong>Tailwind</strong>, <strong>ShadCN</strong>, and <strong>Appwrite</strong> for backend and auth.</p>
      <h3>What I built</h3>
      <ul>
        <li>Expense logging with categories and dates</li>
        <li>Dashboards and simple analytics</li>
        <li>AI-powered spending insights</li>
        <li>Sync and persistence via Appwrite</li>
      </ul>
    `,
  },
  {
    name: "Passage Point",
    slug: "passage-point",
    link: "https://passage-point.vercel.app",
    source: "https://github.com/radzhiv25/passage-point",
    description: "Save your VARC portion essays and make them publicly accessible",
    skills: ["React", "Tailwind", "Supabase", "ShadCN"],
    image: "/assets/PassagePointRes.png",
    className: "md:col-span-1",
    category: "Frontend",
    externalLink: "https://passage-point.vercel.app",
    detailedDescription: `
      <p>Passage Point helps users store and share VARC (Verbal Ability and Reading Comprehension) essays. Built with <strong>React</strong>, <strong>Tailwind</strong>, <strong>ShadCN</strong>, and <strong>Supabase</strong> for auth and database.</p>
      <h3>What I built</h3>
      <ul>
        <li>Create and organize essay passages</li>
        <li>Public sharing via links</li>
        <li>User accounts and private vs public passages</li>
        <li>Clean reading and editing experience</li>
      </ul>
    `,
  },
  {
    name: "Pathwise",
    slug: "pathwise",
    link: "https://pathwise-seven.vercel.app",
    source: "https://github.com/radzhiv25/pathwise",
    description: "Save your VARC portion essays and make them publicly accessible",
    skills: ["React", "Tailwind", "Supabase", "ShadCN"],
    image: "/assets/PathwiseWeb.png",
    className: "md:col-span-1",
    category: "Frontend",
    externalLink: "https://pathwise-seven.vercel.app",
    detailedDescription: `
      <p>Pathwise is another VARC essay storage and sharing app. Uses <strong>React</strong>, <strong>Tailwind</strong>, <strong>ShadCN</strong>, and <strong>Supabase</strong> for a fast, full-stack experience.</p>
      <h3>What I built</h3>
      <ul>
        <li>Essay CRUD and organization</li>
        <li>Shareable public links</li>
        <li>Auth and row-level security with Supabase</li>
        <li>Responsive UI</li>
      </ul>
    `,
  },
  {
    name: "Task Manager",
    slug: "task-manager",
    link: "https://alpha-task-manager.vercel.app",
    source: "https://github.com/radzhiv25/task-manager",
    description: "A simple task manager to manage your daily tasks",
    skills: ["React", "Tailwind"],
    image: "/assets/TaskManager.png",
    className: "md:col-span-1",
    category: "Frontend",
    externalLink: "https://alpha-task-manager.vercel.app",
    detailedDescription: `
      <p>A minimal daily task manager built with <strong>React</strong> and <strong>Tailwind</strong>. Focus on clarity and quick add/complete/delete.</p>
      <h3>What I built</h3>
      <ul>
        <li>Add, complete, and remove tasks</li>
        <li>Optional local storage persistence</li>
        <li>Simple filters (e.g. active / completed)</li>
        <li>Lightweight, responsive layout</li>
      </ul>
    `,
  },
  {
    name: "Pixus Project",
    slug: "pixus-project",
    link: "https://sveltekit-puce-xi.vercel.app",
    source: "",
    description: "Landing page for Generative AI Website",
    skills: ["React", "Tailwind"],
    image: "/assets/PixusProject.png",
    className: "md:col-span-3",
    category: "UI/UX",
    externalLink: "https://sveltekit-puce-xi.vercel.app",
    detailedDescription: `
      <p>Landing page for a generative AI product. Built with <strong>React</strong> and <strong>Tailwind</strong> for a modern, conversion-focused layout.</p>
      <h3>What I built</h3>
      <ul>
        <li>Hero, features, and CTA sections</li>
        <li>Responsive and accessible design</li>
        <li>Clear hierarchy and typography</li>
      </ul>
    `,
  },
  {
    name: "Crypto News",
    slug: "crypto-news",
    link: "https://dribbble.com/shots/22615728-Crypto-News-Landing-Page",
    source: "",
    description: "A basic crypto landing page",
    skills: ["Figma", "Prototyping"],
    image: "/assets/Dribble(Mobile).png",
    className: "md:col-span-3",
    category: "UI/UX",
    externalLink: "https://dribbble.com/shots/22615728-Crypto-News-Landing-Page",
    detailedDescription: `
      <p>A crypto news–style landing page designed in <strong>Figma</strong> with <strong>prototyping</strong> for interactions and flow.</p>
      <h3>What I built</h3>
      <ul>
        <li>Mobile-first layout and components</li>
        <li>Interactive prototype for key flows</li>
        <li>Visual style suited to crypto/finance</li>
      </ul>
    `,
  },
  {
    name: "Pixus Payment",
    slug: "pixus-payment",
    link: "https://dribbble.com/shots/22281003-Landing-Page-UI",
    source: "",
    description: "Landing page for Card Payment Website",
    skills: ["Figma"],
    image: "/assets/LandingPage.png",
    className: "md:col-span-3",
    category: "UI/UX",
    externalLink: "https://dribbble.com/shots/22281003-Landing-Page-UI",
    detailedDescription: `
      <p>Landing page concept for a card/payment product. Designed in <strong>Figma</strong> with focus on trust and clarity.</p>
      <h3>What I built</h3>
      <ul>
        <li>Hero and feature sections</li>
        <li>Payment/card-focused visual language</li>
        <li>Component-based design system</li>
      </ul>
    `,
  },
  {
    name: "Dashboard UI",
    slug: "dashboard-ui",
    link: "https://dashboard-ui-oripin-alpha.vercel.app",
    source: "https://github.com/radzhiv25/dashboard-ui",
    description: "Dashboard UI with small micro interactions",
    skills: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/DashboardUI.png",
    className: "md:col-span-3",
    category: "Micro Interactions",
    externalLink: "https://dashboard-ui-oripin-alpha.vercel.app",
    detailedDescription: `
      <p>A dashboard UI focused on layout and micro-interactions. Built with <strong>React</strong>, <strong>Tailwind</strong>, and <strong>Framer Motion</strong>.</p>
      <h3>What I built</h3>
      <ul>
        <li>Sidebar, cards, and data layout</li>
        <li>Hover, transition, and animation details</li>
        <li>Dark/light theme support</li>
      </ul>
    `,
  },
  {
    name: "Menu component",
    slug: "menu-component",
    link: "https://menu-component-six.vercel.app",
    source: "https://github.com/radzhiv25/menu-component",
    description: "Menu component with micro interactions",
    skills: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/MenuComponent.png",
    className: "md:col-span-3",
    category: "Micro Interactions",
    externalLink: "https://menu-component-six.vercel.app",
    detailedDescription: `
      <p>A reusable menu/navigation component with smooth micro-interactions. Uses <strong>React</strong>, <strong>Tailwind</strong>, and <strong>Framer Motion</strong>.</p>
      <h3>What I built</h3>
      <ul>
        <li>Animated open/close and item hover</li>
        <li>Accessible keyboard and focus behavior</li>
        <li>Customizable styling and layout</li>
      </ul>
    `,
  },
];

// Utility function to find project by slug
export const getProjectBySlug = (slug) => {
  return projectData.find((project) => project.slug === slug);
};
