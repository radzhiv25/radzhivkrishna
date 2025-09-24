import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";

export default function Work() {
  // Define categories
  const categories = ["All", "UI/UX", "Frontend", "ML/AI"];
  const [activeTab, setActiveTab] = useState(() => {
    // Initialize from session storage or default to "All"
    return sessionStorage.getItem("workActiveTab") || "All";
  });

  // Update session storage when activeTab changes
  useEffect(() => {
    sessionStorage.setItem("workActiveTab", activeTab);
  }, [activeTab]);

  // Filter projects based on active tab
  const filteredProjects = projectData.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  return (
    <div className="">
      <h2 className="my-5 text-3xl font-semibold text-center">
        Some Proof of Work
      </h2>

      {/* Custom Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex border rounded-lg p-1 bg-white/80 backdrop-blur-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === category
                ? "bg-gray-200 text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
            key={index}
            image={project.image}
            name={project.name}
            link={project.link}
            source={project.source}
            description={project.description}
            skills={project.skills}
            category={project.category}
          />
        ))}
      </div>

      <p className="my-5 text-center bg-gradient-to-br from-gray-500 via-zinc-700 to-gray-900 animate-gradient bg-300% bg-clip-text font-semibold text-transparent">
        More projects coming soon
      </p>
    </div>
  );
}
