import { motion } from "framer-motion";

export default function FloatingResume() {
  return (
    <motion.a
      href="/RajeevKrishnaFrontend.pdf"
      download="RajeevResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
      initial={{ opacity: 0, x: -8, scale: 0.9 }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          opacity: { duration: 0.25 },
          scale: { duration: 0.25 },
          x: { duration: 0.25 },
        },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      className="md:flex hidden fixed bottom-6 left-6 z-40 items-center gap-2 px-3 py-2.5 rounded-full dark:border-gray-600 bg-white dark:bg-transparent text-black dark:text-white transition-colors"
    >
      <svg width="48" height="50" viewBox="0 0 256 72" fill="none" className="shrink-0 text-gray-700 dark:text-gray-300" aria-hidden>
        <path d="M2.5 29.7587C20.7075 11.9512 44.1418 -1.89956 70.9445 3.80306C90.8502 8.03828 76.4349 33.8742 74.8556 46.1142C68.8481 92.6723 195.103 55.4848 213.611 48.1586C217.013 46.8119 247.651 32.0671 246.411 31.3586C243.431 29.6559 224.401 26.5586 229.7 26.5586C237.529 26.5586 244.936 29.7587 252.9 29.7587C256.858 29.7587 239.258 56.0038 237.7 60.1586" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="text-sm font-medium font-caveat">Resume</span>
    </motion.a>
  );
}
