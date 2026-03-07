import { useState, useEffect, useRef, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageToAscii } from '../lib/asciiConverter';

// Generate fine-toothed stamp perforation path (objectBoundingBox 0–1)
function getStampClipPath(teethPerSide = 16, radius = 0.018) {
  const n = teethPerSide;
  const r = radius;
  const inset = 2 * r;
  const step = (1 - 4 * r) / n;
  let d = '';

  // Top edge: indentations downward
  d += `M ${inset},0`;
  for (let i = 0; i < n; i++) {
    const x = inset + (i + 1) * step - r;
    const nextX = inset + (i + 1) * step;
    d += ` L ${x.toFixed(4)},0 A ${r},${r} 0 0 1 ${nextX.toFixed(4)},${inset}`;
  }
  // Right edge: indentations leftward
  d += ` L 1,${inset}`;
  for (let i = 0; i < n; i++) {
    const y = inset + (i + 1) * step - r;
    const nextY = inset + (i + 1) * step;
    d += ` L 1,${y.toFixed(4)} A ${r},${r} 0 0 1 ${(1 - inset).toFixed(4)},${nextY.toFixed(4)}`;
  }
  // Bottom edge: indentations upward
  d += ` L ${1 - inset},1`;
  for (let i = 0; i < n; i++) {
    const x = 1 - inset - (i + 1) * step + r;
    const nextX = 1 - inset - (i + 1) * step;
    d += ` L ${x.toFixed(4)},1 A ${r},${r} 0 0 1 ${nextX.toFixed(4)},${1 - inset}`;
  }
  // Left edge: indentations rightward
  d += ` L 0,${1 - inset}`;
  for (let i = 0; i < n; i++) {
    const y = 1 - inset - (i + 1) * step + r;
    const nextY = 1 - inset - (i + 1) * step;
    d += ` L 0,${y.toFixed(4)} A ${r},${r} 0 0 1 ${inset},${nextY.toFixed(4)}`;
  }
  return d + ' Z';
}

const STAMP_CLIP_PATH = getStampClipPath(16, 0.018);

const AnimatedAsciiArt = ({ 
  imageUrl, 
  width = 32, 
  height = 32,
  className = '',
  animationType = 'typewriter', // 'typewriter', 'glitch', 'fade', 'random'
  showOriginal = false
}) => {
  const stampClipId = useId().replace(/:/g, '-');
  const [asciiArt, setAsciiArt] = useState('');
  const [displayedAscii, setDisplayedAscii] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const animationRef = useRef(null);
  const frameRef = useRef(0);
  const lastUpdateTime = useRef(0);

  // Load and convert image to ASCII
  useEffect(() => {
    const loadAscii = async () => {
      try {
        setIsLoading(true);
        const ascii = await imageToAscii(imageUrl, width, height);
        setAsciiArt(ascii);
        setIsLoading(false);
      } catch (error) {
        console.error('Error converting image to ASCII:', error);
        setIsLoading(false);
      }
    };

    loadAscii();
  }, [imageUrl, width, height]);

  // Typewriter animation - smoother and faster using requestAnimationFrame
  useEffect(() => {
    if (!asciiArt || animationType !== 'typewriter' || showOriginal) return;

    let currentIndex = 0;
    const chars = asciiArt.split('');
    const targetFPS = 120; // Higher FPS for smoother animation
    const frameTime = 1000 / targetFPS;
    let lastTime = performance.now();
    let accumulatedTime = 0;

    const typewriter = (currentTime) => {
      if (currentIndex >= chars.length) {
        setDisplayedAscii(asciiArt);
        return;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      accumulatedTime += deltaTime;

      // Update multiple characters per frame for faster animation
      const charsPerFrame = Math.max(1, Math.floor(accumulatedTime / 2)); // 2ms per char = faster
      
      if (accumulatedTime >= 2) {
        const nextIndex = Math.min(currentIndex + charsPerFrame, chars.length);
        setDisplayedAscii(chars.slice(0, nextIndex).join(''));
        currentIndex = nextIndex;
        accumulatedTime = 0;
      }

      animationRef.current = requestAnimationFrame(typewriter);
    };

    animationRef.current = requestAnimationFrame(typewriter);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [asciiArt, animationType, showOriginal]);

  // Glitch/Random character animation
  useEffect(() => {
    if (!asciiArt || animationType !== 'glitch') return;

    const glitchChars = '@%#*+=-:. ·░▒▓█';
    const lines = asciiArt.split('\n');
    
    const animate = () => {
      frameRef.current++;
      
      if (frameRef.current % 3 === 0) { // Update every 3 frames for performance
        const glitched = lines.map(line => 
          line.split('').map((char, i) => {
            // Randomly glitch some characters
            if (Math.random() < 0.05) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          }).join('')
        ).join('\n');
        
        setDisplayedAscii(glitched);
      } else {
        setDisplayedAscii(asciiArt);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [asciiArt, animationType]);

  // Random character cycling animation
  useEffect(() => {
    if (!asciiArt || animationType !== 'random') return;

    const randomChars = '@%#*+=-:. ·░▒▓█';
    const lines = asciiArt.split('\n');
    
    const animate = () => {
      frameRef.current++;
      
      if (frameRef.current % 2 === 0) {
        const randomized = lines.map(line => 
          line.split('').map(char => {
            // Cycle through random characters
            if (Math.random() < 0.1) {
              return randomChars[Math.floor(Math.random() * randomChars.length)];
            }
            return char;
          }).join('')
        ).join('\n');
        
        setDisplayedAscii(randomized);
      } else {
        setDisplayedAscii(asciiArt);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [asciiArt, animationType]);

  // For fade or no animation, just show the ASCII
  useEffect(() => {
    if (asciiArt && (animationType === 'fade' || !animationType) && !showOriginal) {
      setDisplayedAscii(asciiArt);
    }
  }, [asciiArt, animationType, showOriginal]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="text-xs text-gray-400 font-mono">Loading ASCII...</div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Toggle between ASCII and Image */}
      <AnimatePresence mode="wait">
        {showOriginal ? (
          <motion.div
            key="original-image"
            className="w-full h-full overflow-visible"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <svg width={0} height={0} aria-hidden="true">
              <defs>
                <clipPath id={stampClipId} clipPathUnits="objectBoundingBox">
                  <path d={STAMP_CLIP_PATH} />
                </clipPath>
              </defs>
            </svg>
            <div
              className="w-full h-full overflow-hidden"
              style={{ clipPath: `url(#${stampClipId})` }}
            >
              <img
                src={imageUrl}
                alt="Original"
                className="w-full h-full object-cover object-center block"
              />
            </div>
          </motion.div>
        ) : (
          <motion.pre
            key="ascii-art"
            className="font-mono text-[4px] md:text-[6px] leading-[0.8] text-black dark:text-white select-none w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              fontFamily: 'monospace',
              letterSpacing: '0',
              lineHeight: '1',
            }}
          >
            {displayedAscii || asciiArt}
          </motion.pre>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAsciiArt;
