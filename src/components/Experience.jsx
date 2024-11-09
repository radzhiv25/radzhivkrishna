// Experience.js
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../experienceData.js';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Stagger each child by 0.3 seconds
            },
          },
        }}
        className='my-10 md:w-1/2 mx-auto space-y-10'
      >
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            dates={exp.dates}
            description={exp.description}
            responsibilities={exp.responsibilities}
            techStack={exp.techStack}
          />
        ))}
      </motion.div>
  );
};

export default Experience;