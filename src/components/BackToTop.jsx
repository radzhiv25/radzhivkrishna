import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowUp } from "react-icons/lu";

const VIEWPORT_HEIGHT_OFFSET = 0.9; // show after ~90% of first viewport

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = window.innerHeight * VIEWPORT_HEIGHT_OFFSET;
    const handleScroll = () => setVisible(window.scrollY > threshold);
    handleScroll(); // in case already scrolled
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
            scale: 1,
            transition: {
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
              y: { duration: 2.2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" },
            },
          }}
          exit={{ opacity: 0, y: 8, scale: 0.9, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
          whileTap={{ scale: 0.92, transition: { duration: 0.1 } }}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-black shadow-md flex items-center justify-center text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
        >
          <LuArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
