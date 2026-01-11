import { FaStarOfLife } from "react-icons/fa6";
// import { FaCopy } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const email = "rajeevkrishna.work@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      // You could add a toast notification here if you have one
      console.log('Email copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className="mt-auto py-10 ">
      <span className="w-full flex md:justify-end justify-center items-center mb-5">
        <p className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-2 sm:text-base text-black dark:text-white">
          <span className="text-right sm:text-left">want to connect drop a mail at</span>
          <div className="group flex items-center gap-2">
            <strong
              className="font-semibold cursor-pointer hover:underline break-all text-black dark:text-white"
              onClick={() => window.open('mailto:rajeevkrishna.work@gmail.com', '_blank')}
            >
              {email}
            </strong>
            <MdContentCopy
              className="cursor-pointer transition-all duration-200 text-xs sm:text-sm hover:text-black dark:hover:text-white flex-shrink-0 opacity-0 group-hover:opacity-100 text-gray-400"
              onClick={copyToClipboard}
              title="Copy email to clipboard"
            />
          </div>
        </p>
      </span>
      <div className="flex md:justify-between flex-col md:gap-0 gap-2">
        <p className="text-gray-400 md:text-left text-center">Created with React, Tailwind, Framer and Ant Design ⚡️ with ❤️ by Rajeev</p>
        <span className="flex items-center gap-2 text-sm text-black dark:text-white">
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
          <FaStarOfLife />
          <Link to="https://dribbble.com/radzhiv" className="hover:underline">
            dribbble
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
