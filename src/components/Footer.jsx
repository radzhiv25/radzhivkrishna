import { FaStarOfLife } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto pb-10 flex justify-between items-center">
      <p className="text-gray-500">Created with React, Tailwind and Framer</p>
      <span className="flex items-center gap-2 text-sm">
        <Link
          to="https://linkedin.com/in/rajeevkrishna25"
          className="hover:underline"
        >
          linkedin
        </Link>
        <FaStarOfLife />
        <Link to="https://github.com/radzhiv25" className="hover:underline">
          github
        </Link>
        <FaStarOfLife />
        <Link to="https://x.com/RadzhivDev" className="hover:underline">
          twitter
        </Link>
      </span>
    </div>
  );
};

export default Footer;
