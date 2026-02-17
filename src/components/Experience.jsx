import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "../experienceData.js";
import { SkillWithIcon } from "../lib/skillIcons";

const MOBILE_BREAKPOINT = 768;

const PAD = "p-2";
const GAP = "gap-4";

const panelTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

const ExperienceAccordionItem = ({ exp, index, isOpen, onToggle, isMobile }) => {
  const list = isMobile && exp.responsibilitiesMobile ? exp.responsibilitiesMobile : exp.responsibilities;
  return (
    <div className="border border-dashed border-gray-300 dark:border-gray-700 min-w-0 max-w-full overflow-hidden">
      <button
        type="button"
        onClick={() => onToggle(index)}
        className={`w-full text-left ${PAD} flex md:flex-row flex-col md:items-center justify-between ${GAP} bg-white dark:bg-black hover:bg-gray-50 transition-colors duration-200 ${isOpen ? "border-b border-dashed border-gray-700" : ""}`}
        aria-expanded={isOpen}
      >
        <span className="flex flex-col items-start justify-between">
          <p className="font-semibold text-black dark:text-white">{exp.title}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{exp.company}</p>
        </span>
        <span className="text-gray-500 dark:text-gray-500 text-sm w-max ml-auto">
        <span className="text-gray-500 dark:text-gray-500 text-sm w-max ml-auto">{exp.dates}</span>
        <span className="text-gray-400 dark:text-gray-500 text-sm shrink-0 inline-flex items-center justify-center w-6 h-6" aria-hidden>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "minus" : "plus"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-block origin-center"
            >
              {isOpen ? "−" : "+"}
            </motion.span>
          </AnimatePresence>
        </span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={panelTransition}
            className="overflow-hidden min-w-0 max-w-full"
          >
            <div className={`${PAD} flex flex-col ${GAP} bg-white dark:bg-black min-w-0 w-full max-w-full overflow-hidden box-border`}>
              <motion.p
                className="text-gray-700 dark:text-gray-300 break-words min-w-0"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.25 }}
              >
                {exp.description}
              </motion.p>
              {list && list.length > 0 && (
                <ul className="flex flex-col gap-1.5 min-w-0 w-full max-w-full list-none pl-0">
                  {list.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex gap-2 min-w-0 max-w-full text-sm text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.04, duration: 0.25 }}
                    >
                      <span className="shrink-0 mt-0.5">•</span>
                      <span className="break-words min-w-0 overflow-hidden">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
              {exp.techStack && (
                <motion.div
                  className="flex flex-wrap items-center gap-2 min-w-0"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.25 }}
                >
                  <strong className="text-gray-700 dark:text-gray-300 text-sm shrink-0">Tech Stack:</strong>
                  {exp.techStack.map((skill, idx) => (
                    <SkillWithIcon key={idx} skill={skill} size="sm" />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ExperienceAccordionItem.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    responsibilitiesMobile: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="my-10 flex flex-col gap-4 min-w-0 w-full max-w-full overflow-hidden">
      {experienceData.map((exp, index) => (
        <ExperienceAccordionItem
          key={index}
          exp={exp}
          index={index}
          isOpen={openIndex === index}
          onToggle={handleToggle}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default Experience;
