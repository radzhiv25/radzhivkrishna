import React from "react";
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
    <div className="md:my-10">
      <div className="md:w-4/5 mx-auto md:my-20 my-10">
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
      </div>
      <h2 className="my-5 md:text-5xl text-4xl font-semibold flex flex-col text-center">
        Skills I offer{" "}
        <span className="text-lg text-gray-500 leading-none">
          with programming
        </span>
      </h2>
      <div className="my-2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap justify-center place-items-center gap-3 my-3 py-5 mx-auto">
          <FaHtml5 className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaCss3Alt className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiJavascript className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiMysql className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaReact className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiTailwindcss className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <RiNextjsFill className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <TbBrandCpp className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaPython className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaGitAlt className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaGithub className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaFigma className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaWebflow className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiVercel className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaSwift className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <FaJava className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiMongodb className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <RiNodejsFill className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiRedux className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiPostman className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiCapacitor className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiTypescript className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiXcode className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
          <SiAndroidstudio className="md:size-20 size-12 p-1 border border-dashed border-gray-300 rounded-lg hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
