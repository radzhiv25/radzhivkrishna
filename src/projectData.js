import { link, source } from "framer-motion/client";

// projectData.js
export const projectData = [
    {
      name: "Crypto News",
      link: "https://dribbble.com/shots/22615728-Crypto-News-Landing-Page",
      source: "",
      description: "A basic crypto landing page",
      skills: ["Figma", "Prototyping"],
      image: "/assets/Dribble(Mobile).png",
      className: "md:col-span-3", // Example of a smaller card
      category: "UI/UX"
    },
    {
      name: "Pixus Payment",
      link: "https://dribbble.com/shots/22281003-Landing-Page-UI",
      source: "",
      description: "Landing page for Card Payment Website",
      skills: ["Figma"],
      image: "/assets/LandingPage.png",
      className: "md:col-span-3",
      category: "UI/UX" // Example of a larger card
    },
    {
      name: "NewsX",
      link: "https://newsx-radzhiv.web.app",
      source: "",
      description: "Your daily news app",
      skills: ["React", "Tailwind", "GNews API"],
      image: "/assets/NewsX.png",
      className: "md:col-span-3",
      category: "Frontend" // Example of a larger card
    },
    {
      name: "PennWise",
      link: "https://pennwise.vercel.app",
      source: "",
      description: "An expense tracker to manage your daily expenses",
      skills: ["React", "Tailwind", "ChartJS"],
      image: "/assets/PennWise.png",
      className: "md:col-span-3",
      category: "Frontend" // Example of a smaller card
    },
    {
      name: "Potato Leaf Analyser",
      link: "https://potato-leaf-https://potato-leaf-analyzer.streamlit.app",
      source: "",
      description: "A leaf analyser to detect diseases in potato leaves",
      skills: ["Pandas", "Keras", "Tensorflow","Numpy", "Python"],
      image: "/assets/PotatoLeaf.png",
      className: "md:col-span-2",
      category: "ML/AI" // Example of a larger card
    },
    {
      name: "Task Manager",
      link: "https://alpha-task-manager.vercel.app",
      source: "",
      description: "A simple task manager to manage your daily tasks",
      skills: ["React", "Tailwind"],
      image: "/assets/TaskManager.png",
      className: "md:col-span-2 size-1/2",
      category: "Frontend" // Example of a smaller card
    },
  ];