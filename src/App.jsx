import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CombinedPage from "./components/CombinedPage";
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
      <div className={`p-5 md:w-1/2 mx-auto flex flex-col min-h-screen transition-opacity duration-500 bg-white dark:bg-black ${showSplash ? 'opacity-0' : 'opacity-100'
        }`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<CombinedPage />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </>
  );
}

export default App;
