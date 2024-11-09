import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import { Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="p-5 md:w-3/4 mx-auto flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
