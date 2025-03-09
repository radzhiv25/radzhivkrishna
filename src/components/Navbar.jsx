import React from "react";
import { Link } from "react-router-dom";
import Rajeev from "/assets/rajeevNotion.svg";
import { message } from "antd";

const Navbar = () => {
  const handleDownloadResume = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/NewResumeRajeev.pdf"; // Ensure resume.pdf is in the `public` folder
    link.download = "RajeevResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show Ant Design success message
    message.success("Resume downloaded successfully!");
  };
  return (
    <div className="p-3 flex items-center justify-between border border-dashed rounded-md">
      <Link to="/">
        <span className="flex items-center gap-1">
          <img src={Rajeev} alt="Rajeev" className="size-8 bg-yellow-400 rounded-full" />
          <h1 className="text-xl font-semibold">Radzhiv</h1>
        </span>
      </Link>
      <div className="flex items-center space-x-3">
        <Link to="/about">
          <p className="hover:underline">about</p>
        </Link>
        <Link to="/work">
          <p className="hover:underline">work</p>
        </Link>
        <p className="border px-2 py-1 shadow-md rounded-md cursor-pointer" onClick={handleDownloadResume}>resume</p>
      </div>
    </div>
  );
};

export default Navbar;
