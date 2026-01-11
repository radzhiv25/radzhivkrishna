// Experience.jsx
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { experienceData } from "../experienceData.js";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

const stepperVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
};

// Individual Experience Card Component
const ExperienceCard = ({ exp, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getViewportMargin = () => {
      const vh = window.innerHeight;
      return `-${vh * 0.15}px 0px -${vh * 0.15}px 0px`; // Use 15% of viewport height
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the card is visible
        rootMargin: getViewportMargin()
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Handle window resize
    const handleResize = () => {
      observer.disconnect();
      observer.rootMargin = getViewportMargin();
      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
    };

    window.addEventListener('resize', handleResize);

    const currentRef = cardRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative flex items-start mb-8">
      {/* Stepper indicator */}
      <div className="relative z-10 flex-shrink-0 mr-6">
        <motion.div
          variants={stepperVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${index === 0
            ? "bg-black dark:bg-white text-white dark:text-black"
            : "bg-gray-100 dark:bg-gray-100 text-gray-600 dark:text-gray-900"
            }`}
        >
          {index === 0 ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            index + 1
          )}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="flex-1"
      >
        {/* Title */}
        <h3 className={`font-semibold mb-2 ${index === 0 ? "text-lg text-black dark:text-white" : "text-base text-gray-800 dark:text-gray-200"}`}>
          {exp.title}
        </h3>

        {/* Card */}
        <div className="border border-dashed dark:border-gray-700 rounded-lg p-4 shadow-sm bg-white dark:bg-black hover:shadow-md transition-all duration-300">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            {exp.company}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {exp.dates}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>

          {exp.responsibilities && (
            <ul className="list-disc list-inside mb-3">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {item}
                </li>
              ))}
            </ul>
          )}

          {exp.techStack && (
            <div className="mt-3 text-sm">
              <strong className="text-gray-700 dark:text-gray-300">Tech Stack:</strong>
              <span className="text-gray-600 dark:text-gray-400 ml-1">{exp.techStack.join(", ")}</span>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Experience = () => {
  return (
    <div className="my-10">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 border-l border-dashed dark:border-gray-700"></div>

        {experienceData.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

Experience.propTypes = {
  // This component doesn't receive props, but we can add PropTypes for future props if needed
};

export default Experience;