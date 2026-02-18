import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowLeft, LuChevronLeft, LuChevronRight, LuHeart } from "react-icons/lu";
import clicksManifest from "../data/clicks.json";
import { getLikeCounts, addLike } from "../lib/galleryLikes";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Gallery() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [likeCounts, setLikeCounts] = useState({});
  const [liked, setLiked] = useState(new Set());
  const [liking, setLiking] = useState(false);

  const images = clicksManifest;
  const currentFilename = lightboxIndex != null ? images[lightboxIndex] : null;
  const currentSrc = currentFilename ? `/clicks/${encodeURIComponent(currentFilename)}` : null;

  useEffect(() => {
    getLikeCounts().then(setLikeCounts).catch(() => {});
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i == null ? null : i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i == null ? null : i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex == null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goPrev, goNext]);

  const handleLikeFor = useCallback(
    async (filename) => {
      if (!filename || liking || liked.has(filename)) return;
      setLiking(true);
      try {
        await addLike(filename);
        setLiked((s) => new Set(s).add(filename));
        setLikeCounts((c) => ({ ...c, [filename]: (c[filename] || 0) + 1 }));
      } catch {
        // ignore
      } finally {
        setLiking(false);
      }
    },
    [liking, liked]
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="px-2 py-4 border-x border-dashed dark:border-gray-700"
    >
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          aria-label="Back"
        >
          <LuArrowLeft className="size-4" />
          <span>Back</span>
        </button>
      </div>

      <motion.h1
        variants={item}
        className="font-caveat text-3xl md:text-4xl mb-2 text-gray-800 dark:text-gray-200"
      >
        Clicks
      </motion.h1>
      <motion.p variants={item} className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {images.length} photos
      </motion.p>
      <motion.p
        variants={item}
        className="text-xs text-gray-400 dark:text-gray-500 mb-6"
      >
        Shot on Galaxy S24 Ultra · iPhone 12, 13, 15 · iPhone 16 Pro, 17 Pro Max · Pixel 7
      </motion.p>

      <motion.div
        variants={container}
        className="md:columns-3 columns-2 gap-2 md:gap-3 space-y-3"
      >
        {images.map((filename, index) => {
          const src = `/clicks/${encodeURIComponent(filename)}`;
          const isLiked = liked.has(filename);
          return (
            <motion.div
              key={filename}
              variants={item}
              className="relative overflow-hidden rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={src}
                alt={filename}
                className="w-full h-auto object-cover rounded-md"
                loading="lazy"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeFor(filename);
                }}
                disabled={liking || isLiked}
                className={`absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 rounded-md text-sm transition-colors ${
                  isLiked
                    ? "text-white"
                    : "bg-black/30 text-white/90 hover:bg-black/70"
                }`}
                aria-label="Like"
              >
                <LuHeart className={`size-4 ${isLiked ? "fill-current text-red-500/80" : ""}`} />
                <span>{likeCounts[filename] ?? 0}</span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {lightboxIndex != null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 left-4 text-white/80 hover:text-white flex items-center gap-2"
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
            >
              <LuArrowLeft className="size-5" />
              <span>Close</span>
            </button>

            <button
              type="button"
              className="absolute top-1/2 left-2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <LuChevronLeft className="size-10" />
            </button>

            <button
              type="button"
              className="absolute top-1/2 right-2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <LuChevronRight className="size-10" />
            </button>

            <motion.div
              className="relative max-w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentFilename}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                src={currentSrc}
                alt={currentFilename}
                className="max-w-full max-h-[75vh] object-contain rounded"
              />
              <div className="flex items-center gap-3 mt-3 text-white/90">
                <button
                  type="button"
                  onClick={() => handleLikeFor(currentFilename)}
                  disabled={liking || liked.has(currentFilename)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded border border-white/30 transition-colors ${
                    liked.has(currentFilename)
                      ? "bg-red-500/30 text-red-200 border-red-400/50"
                      : "hover:bg-white/10"
                  }`}
                  aria-label="Like"
                >
                  <LuHeart
                    className={`size-5 ${liked.has(currentFilename) ? "fill-current" : ""}`}
                  />
                  <span>{likeCounts[currentFilename] ?? 0}</span>
                </button>
                <span className="text-sm text-white/60">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
