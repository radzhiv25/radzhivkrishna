import { Tabs } from "antd";
import ProjectCard from "../components/ProjectCard";
import { projectData } from "../projectData";

export default function Work() {
  // Define categories
  const categories = ["All", "UI/UX", "Frontend", "ML/AI"];

  // Create items array for the new Tabs API
  const tabItems = categories.map((category) => ({
    key: category,
    label: category,
    children: (
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5">
        {projectData
          .filter(
            (project) =>
              category === "All" || project.category === category
          )
          .map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              link={project.link}
              source={project.source}
              description={project.description}
              skills={project.skills}
              className={project.className} // Keep grid layout intact
            />
          ))}
      </div>
    )
  }));

  return (
    <div className="">
      <h2 className="my-5 text-3xl font-medium text-center">
        Some Proof of Concepts
      </h2>

      {/* Ant Design Tabs */}
      <Tabs
        defaultActiveKey="All"
        centered
        items={tabItems}
        tabBarStyle={{
          color: "#D946EF", // Custom text color
          border: "none"
        }}
      />

      <p className="my-5 text-center bg-gradient-to-br from-black via-zinc-400 to-gray-500 animate-gradient bg-300% bg-clip-text font-semibold text-transparent">
        More projects coming soon
      </p>
    </div>
  );
}
