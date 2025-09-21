// Experience.jsx
import React from "react";
import { Steps } from "antd";
import { motion } from "framer-motion";
import { experienceData } from "../experienceData.js";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, duration: 0.5, ease: "easeInOut" },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="my-10 space-y-10"
    >
      <Steps
        direction="vertical"
        current={1} // Highlight current experience dynamically if needed
        items={experienceData.map((exp, index) => ({
          title: (
            <motion.div variants={stepVariants} key={index}>
              {exp.title}
            </motion.div>
          ),
          description: (
            <motion.div
              key={index}
              variants={stepVariants}
              className="border border-dashed rounded-lg p-4 shadow-sm bg-white"
            >
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-500">{exp.dates}</p>
              <p>{exp.description}</p>

              {exp.responsibilities && (
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {exp.techStack && (
                <div className="mt-2 text-sm">
                  <strong>Tech Stack:</strong> {exp.techStack.join(", ")}
                </div>
              )}
            </motion.div>
          ),
        }))}
      />
    </motion.div>
  );
};

export default Experience;