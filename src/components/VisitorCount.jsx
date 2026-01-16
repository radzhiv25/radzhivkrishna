import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchVisitorCount } from '../lib/visitorCount';

const VisitorCount = () => {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCount = async () => {
      setIsLoading(true);
      const visitorCount = await fetchVisitorCount();
      setCount(visitorCount);
      setIsLoading(false);
    };

    loadCount();
    
    const interval = setInterval(() => {
      fetchVisitorCount().then(setCount);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) return;

    const duration = 1000;
    const steps = 40;
    const increment = count / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [count]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="text-sm text-gray-500 dark:text-gray-400"
    >
      <motion.span
        key={displayCount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="font-medium text-black dark:text-white"
      >
        {isLoading ? '...' : formatNumber(displayCount)}
      </motion.span>
      {' '}visitors
    </motion.span>
  );
};

export default VisitorCount;
