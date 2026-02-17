import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { performHealthCheck } from "../lib/healthCheck";

const StatusBadge = ({ className = "" }) => {
  const [status, setStatus] = useState({
    loading: true,
    allOperational: false,
    supabase: false,
    vercel: false,
  });

  useEffect(() => {
    const checkHealth = async () => {
      setStatus(prev => ({ ...prev, loading: true }));
      try {
        const health = await performHealthCheck();
        setStatus({
          loading: false,
          allOperational: health.allOperational,
          supabase: health.supabase,
          vercel: health.vercel,
        });
      } catch (error) {
        console.error('Health check error:', error);
        setStatus({
          loading: false,
          allOperational: false,
          supabase: false,
          vercel: false,
        });
      }
    };

    // Initial check
    checkHealth();

    // Check every 60 seconds
    const interval = setInterval(checkHealth, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    if (status.loading) return "bg-gray-400";
    if (status.allOperational) return "bg-green-500";
    return "bg-yellow-500";
  };

  const getStatusText = () => {
    if (status.loading) return "Checking status...";
    if (status.allOperational) return "All systems operational";
    
    const issues = [];
    if (!status.supabase) issues.push("Supabase");
    if (!status.vercel) issues.push("Vercel");
    return `Issues: ${issues.join(", ")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`flex items-center gap-2 px-2 py-1 border border-dashed dark:border-gray-700  text-xs text-black dark:text-white ${className}`}
      title={
        status.loading
          ? "Checking service status..."
          : `Supabase: ${status.supabase ? "Operational" : "Down"} | Vercel: ${status.vercel ? "Operational" : "Down"}`
      }
    >
      <span className="relative flex h-2 w-2">
        {status.allOperational && !status.loading && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${getStatusColor()}`}></span>
      </span>
      <span>{getStatusText()}</span>
    </motion.div>
  );
};

export default StatusBadge;
