import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projectData } from '../projectData';

export default function Work() {
  return (
    <div className="">
      <h2 className="my-5 text-3xl font-medium text-center">Some proof of Concepts</h2>
      <div className="grid md:grid-cols-6 grid-cols-1 gap-5">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            link={project.link}
            source={project.source}
            description={project.description}
            skills={project.skills}
            className={project.className} // Pass the className dynamically
          />
        ))}
      </div>
      <p className='my-5 text-center'>more projects coming soon</p>
    </div>
  );
}