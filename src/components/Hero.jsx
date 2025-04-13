import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Earth } from "../ui/Globe"; // Import your Globe component
import Back from "/assets/AnimeWallpaper1.jpg";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Skills from "../components/Skills";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="">
      <section className="mt-5 text-center">
        <div className="w-max mx-auto mb-4 px-2 py-1 flex items-center gap-2 border border-dashed rounded-full">
          <p className="text-xs">want to have a quick call</p>
          <FaSquareArrowUpRight />
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center my-10 border border-dashed rounded-md p-2">
          {/* Replacing the iframe div with the Globe component */}
          <div className="relative aspect-square md:size-2/5 size-full flex flex-col items-center justify-center">
            <Earth />
          </div>

          <div className="md:py-0 py-20 flex flex-col items-center mx-auto w-max bg-gradient-to-br from-black via-zinc-400 to-gray-500 animate-gradient bg-300% bg-clip-text font-semibold text-transparent">
            <h1 className="md:text-4xl text-xl font-semibold">
              Hi, I'm Rajeev Krishna
            </h1>
            <p className="md:text-lg text-xs">
              I'm a frontend engineering enthusiast
            </p>
          </div>
        </div>
        <Skills />
        <Contact />
      </section>
    </div>
  );
};

export default Hero;
