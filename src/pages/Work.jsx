import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

export default function Work() {
  const { darkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Define categories
  const categories = ["All", "UI/UX", "Frontend", "ML/AI", "Micro Interactions"];
  const [activeTab, setActiveTab] = useState(() => {
    // Initialize from session storage or default to "All"
    return sessionStorage.getItem("workActiveTab") || "All";
  });

  // Update session storage when activeTab changes
  useEffect(() => {
    sessionStorage.setItem("workActiveTab", activeTab);
  }, [activeTab]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter projects based on active tab
  const filteredProjects = projectData.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <div className="">
      <h2 className="my-5 text-3xl font-semibold text-center text-black dark:text-white">
        Some Proof of Work
      </h2>

      {/* Custom Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex gap-2 border rounded-lg p-1 backdrop-blur-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === category
                ? "bg-gray-200 dark:bg-white text-gray-900 dark:text-gray-900 shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-500"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`${activeTab}-${project.name}-${index}`}
            image={project.image}
            name={project.name}
            link={project.link}
            slug={project.slug}
            source={project.source}
            description={project.description}
            skills={project.skills}
            category={project.category}
            index={index}
          />
        ))}
      </div>

      <p className="my-5 text-center text-gray-400 font-semibold">
        More projects coming soon
      </p>
      {/* GitHub Contribution Graph */}
      <div className="mb-8 flex flex-col items-center w-full">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
          GitHub Activity
        </h3>
        <div className="w-full overflow-x-auto">
          <div className="inline-block min-w-max px-2">
            <GitHubCalendar
              username="radzhiv25"
              blockSize={isMobile ? 8 : 12}
              blockMargin={isMobile ? 2 : 3}
              fontSize={isMobile ? 10 : 14}
              colorScheme={darkMode ? "dark" : "light"}
              hideColorLegend={false}
              hideMonthLabels={false}
              hideTotalCount={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}