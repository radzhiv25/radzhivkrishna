// ExperienceCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ title, company, dates, description, responsibilities, techStack }) => {
  return (
    <motion.div
      className="border-l border-dashed pl-2 my-2"
      initial={{ opacity: 0, x: -50 }}       // Starts off-screen to the left
      animate={{ opacity: 1, x: 0 }}         // Fades in and slides into position
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}           // Slightly enlarges on hover for interaction feedback
    >
      <span className="flex items-start justify-between w-full">
        <h2 className="leading-none text-lg font-semibold">{title}</h2>
        <p className='text-sm'>{dates}</p>
      </span>
      <h3 className="leading-none border-b border-dashed pb-2">{company}</h3>
      <p className="mt-2 leading-none text-sm">{description}</p>

      {responsibilities && responsibilities.length > 0 && (
        <ul className="mt-2 list-disc list-inside text-sm">
          {responsibilities.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      <span className="mt-2 text-xs flex md:flex-nowrap items-center gap-2">
        <p className="font-semibold">Tech Stack</p>
        <ul className="flex items-center md:flex-nowrap flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </span>
    </motion.div>
  );
};

export default ExperienceCard;