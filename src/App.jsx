import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import SplashScreen from "./components/SplashScreen";
import { Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { useState } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`p-5 md:w-3/4 mx-auto flex flex-col min-h-screen transition-opacity duration-500 bg-white dark:bg-black ${showSplash ? 'opacity-0' : 'opacity-100'
        }`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;
