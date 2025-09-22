// import React from "react";
import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaFigma,
  FaSwift,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiVercel,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiCapacitor,
  SiTypescript,
  SiXcode,
  SiAndroidstudio,
} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { FaWebflow } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="md:my-20 h-[50vh]">
      {/* <div className="mx-auto md:my-20 my-10">
        <h2 className="md:text-5xl text-4xl font-semibold text-center">
          Offerings
        </h2>
        <div className="my-5 md:flex grid grid-cols-1 gap-5 mx-auto">
          <div className="text-center p-3 border rounded-md border-dashed">
            <h3 className="md:text-2xl text-lg font-semibold my-2">
              Frontend Development <span>⚒️</span>
            </h3>
            <p className="text-gray-500">
              I offer a versatile way to build frontend based Saas application
              in the defined timeline to make workflow easy and efficient.
            </p>
          </div>
          <div className="text-center p-3 border border-dashed rounded-md">
            <h3 className="md:text-2xl text-lg font-semibold my-2">
              UI/UX Design <span>✍🏻</span>
            </h3>
            <p className="text-gray-500">
              UI/UX design as a solution to make user have the immersive
              experience with the touch of the latest trends.
            </p>
          </div>
        </div>
      </div> */}

      <div className="">

      </div>
      <h2 className="my-5 md:text-5xl text-4xl font-semibold flex flex-col text-center">
        Tools and Technologies{" "}
        <span className="text-lg text-gray-500 leading-1">
          I&apos;ve worked with
        </span>
      </h2>
      {/* Marquee Container */}
      <div className="my-8 overflow-hidden relative">
        {/* Gradient fade effects */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-scroll">
          {/* First set of skills */}
          <div className="flex items-center gap-4 px-4 flex-shrink-0">
            <FaHtml5 className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaCss3Alt className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiJavascript className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiMysql className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaReact className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiTailwindcss className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <RiNextjsFill className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <TbBrandCpp className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaPython className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaGitAlt className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaGithub className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaFigma className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaWebflow className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiVercel className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaSwift className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaJava className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiMongodb className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <RiNodejsFill className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiRedux className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiPostman className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiCapacitor className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiTypescript className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiXcode className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiAndroidstudio className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
          </div>

          {/* Duplicate set for seamless loop - no gap */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <FaHtml5 className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaCss3Alt className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiJavascript className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiMysql className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaReact className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiTailwindcss className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <RiNextjsFill className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <TbBrandCpp className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaPython className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaGitAlt className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaGithub className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaFigma className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaWebflow className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiVercel className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaSwift className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <FaJava className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiMongodb className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <RiNodejsFill className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiRedux className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiPostman className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiCapacitor className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiTypescript className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiXcode className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
            <SiAndroidstudio className="md:size-20 size-12 p-3 border border-dashed border-gray-300 rounded-lg hover:scale-110 transition-transform duration-300 text-gray-400" />
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm">a lot more to come, I build on the go, if I see a problem I solve it, if I see a feature I add it, if I see a tool I use it 💥</p>
    </div>
  );
};

export default Skills;
