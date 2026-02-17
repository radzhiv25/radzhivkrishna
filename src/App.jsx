import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTop";
import FloatingResume from "./components/FloatingResume";
import CombinedPage from "./components/CombinedPage";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";
import { Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { useState, useEffect } from "react";
import { getVisitorCount } from "./lib/visitorCount";

// Decide splash synchronously so first paint shows splash when needed (avoids main content flashing first)
function getInitialShowSplash() {
  if (typeof window === "undefined" || !window.localStorage) return true;
  const lastShown = localStorage.getItem("splashScreenLastShown");
  const now = Date.now();
  const oneDayInMs = 24 * 60 * 60 * 1000;
  return !lastShown || now - parseInt(lastShown, 10) > oneDayInMs;
}

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(getInitialShowSplash);
  const isNotFound = location.pathname !== "/" && !location.pathname.startsWith("/project/");

  // Call visitor count edge function on mount
  useEffect(() => {
    getVisitorCount().catch(() => {
      // Silently handle errors
    });
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Store the current timestamp when splash screen completes
    localStorage.setItem('splashScreenLastShown', Date.now().toString());
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`p-2 md:w-1/2 mx-auto flex flex-col min-h-screen transition-opacity duration-500 bg-white dark:bg-black ${showSplash ? 'opacity-0' : 'opacity-100'
        }`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<CombinedPage />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isNotFound && (
          <>
            <div className="border-b border-dashed dark:border-gray-700"></div>
            <Footer />
            <BackToTop />
            <FloatingResume />
          </>
        )}
        <Analytics />
      </div>
    </>
  );
}

export default App;
