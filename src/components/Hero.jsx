// import Globe from "../ui/Globe"; 
// import HeroSec from "../../public/assets/HeroSection.png"
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Skills from "../components/Skills";
// import Contact from "./Contact";
import ProjectGlimpse from "./ProjectGlimpse";

const Hero = () => {
  return (
    <div className="">
      <section className="mt-5 text-center">
        <div className="h-[90vh] flex flex-col items-center justify-center">
          <a
            href="https://calendly.com/radzhivkrishna/meet"
            target="_blank"
            rel="noopener noreferrer"
            className="w-max mx-auto mb-4 px-2 py-1 flex items-center gap-2 border border-dashed rounded-full hover:bg-gray-50 dark:hover:bg-gray-400 transition-colors cursor-pointer text-black dark:text-white"
          >
            <p className="text-xs">want to have a quick call</p>
            <FaSquareArrowUpRight />
          </a>
          <div className=" flex md:flex-row flex-col-reverse items-center my-auto w-full border border-dashed rounded-md p-2">
            <div className="relative aspect-square md:size-2/6 size-full flex flex-col items-center justify-center">
              {/* <Globe /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-zinc-300 via-gray-400 to-slate-500 animate-gradient bg-300% rounded-md shadow-md">
            </div> */}
              <img
                src="https://cdn.jsdelivr.net/gh/radzhiv25/radzhivkrishna@main/public/assets/HeroSection.png"
                alt="Rajeev Krishna"
                className="rounded-md shadow-md"
              />
            </div>

            <div className="md:py-0 py-20 flex flex-col items-center mx-auto w-max">
              <h1 className="md:text-4xl text-xl font-semibold text-black dark:text-white">
                Hi, I&apos;m Rajeev Krishna
              </h1>
              <p className="md:text-lg text-xs text-gray-400 mt-2">
                I&apos;m a frontend engineering enthusiast
              </p>
            </div>
          </div>
        </div>
        <Skills />
        <ProjectGlimpse />
        {/* <Contact /> */}
      </section>
    </div>
  );
};

export default Hero;
