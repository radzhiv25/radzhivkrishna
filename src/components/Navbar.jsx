import { useState } from "react";
import { Link } from "react-router-dom";
import Rajeev from "/assets/rajeevNotion.svg";
import { message } from "antd";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/RajeevFrontendResumeNew.pdf"; // Ensure resume.pdf is in the `public` folder
    link.download = "RajeevResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show Ant Design success message
    message.success("Resume downloaded successfully!");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="p-3 flex items-center justify-between border border-dashed rounded-md sticky top-5 backdrop-blur-sm z-50 bg-white/80">
      <Link to="/">
        <span className="flex items-center gap-1">
          <img src={Rajeev} alt="Rajeev" className="size-8 bg-yellow-400 rounded-full" />
          <h1 className="text-xl font-semibold">Radzhiv</h1>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-3">
        <Link to="/about">
          <p className="hover:underline">about</p>
        </Link>
        <Link to="/work">
          <p className="hover:underline">work</p>
        </Link>
        <button
          className="border border-dashed px-2 py-1 rounded-md"
          onClick={handleDownloadResume}
        >
          Resume
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-3 bg-white/95 backdrop-blur-sm border border-dashed rounded-md shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/about"
              className="hover:underline py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link
              to="/work"
              className="hover:underline py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              work
            </Link>
            <button
              className="border border-dashed px-2 py-1 rounded-md text-left w-max"
              onClick={() => {
                handleDownloadResume();
                setIsMenuOpen(false);
              }}
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
