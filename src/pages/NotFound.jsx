import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function NotFound() {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10 text-center"
    >
      {/* Caveman 404 illustration — blended into site with dashed card */}
      <motion.div
        variants={item}
        className="w-full max-w-[320px] mb-8"
      >
        <motion.div
          className="overflow-hidden rounded-lg border border-dashed border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/60 shadow-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/assets/404.gif"
            alt="404 - Page not found"
            className="w-full h-auto object-contain block"
          />
        </motion.div>
      </motion.div>

      {/* 404 type lockup */}
      <motion.div variants={item} className="mb-2">
        <span className="text-6xl md:text-7xl font-bold tracking-tighter text-black dark:text-white tabular-nums">
          404
        </span>
      </motion.div>

      <motion.p
        variants={item}
        className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-sm mb-6"
      >
        This route doesn’t exist — but you can find your way back.
      </motion.p>

      <motion.div variants={item}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-dashed border-gray-400 dark:border-gray-600 hover:border-black dark:hover:border-white px-5 py-2.5 rounded-md text-black dark:text-white font-medium transition-colors duration-200"
        >
          Back to home
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
