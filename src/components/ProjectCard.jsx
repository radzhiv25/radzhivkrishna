// import React from 'react';
import { Link } from 'react-router-dom';



const ProjectCard = ({ image, name, link, source, description, skills, className }) => {
  return (
    <div className={`h-max p-2 border border-dashed rounded-md ${className} hover:scale-105 transition-all`}>
      <img
        src={image}
        alt={name}
        className="border border-dashed rounded"
        loading="lazy"
        decoding="async"
      />
      <span className="mt-2 flex items-end justify-between">
        <Link to={link}>
          <h3 className="font-semibold underline underline-offset-2">{name}</h3>
        </Link>
        <Link to={source} className="text-sm hover:underline">
          source
        </Link>
      </span>
      <p className="my-1 text-sm">{description}</p>
      <div className="flex items-center gap-2 text-xs">
        <h4 className="font-semibold">Skills</h4>
        <span className="flex items-center gap-2">
          {skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;