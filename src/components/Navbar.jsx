import React from "react";
import { Link } from "react-router-dom";
import Rajeev from "/assets/rajeevNotion.svg";

const Navbar = () => {
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
          <p className="underline">about</p>
        </Link>
        <Link to="/work">
          <p className="underline">work</p>
        </Link>
        <p className="underline">resume</p>
      </div>
    </div>
  );
};

export default Navbar;
