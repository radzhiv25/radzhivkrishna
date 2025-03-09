import Back from "/assets/Wallpaper4.jpeg";
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
        <div className="flex items-center my-10">
          <div className="aspect-square size-2/5 bg-gradient-to-br from-fuchsia-300 via-pink-400 to-purple-500 animate-gradient bg-300% rounded shadow-md"></div>
          <div className=" flex flex-col items-center mx-auto w-maz">
            <h1 className="md:text-4xl text-xl font-semibold">
              Hi, I'm Rajeev Krishna
            </h1>
            <p className="md:text-lg text-xs">
              I'm a frontend engineering enthusiast
            </p>
          </div>
        </div>
        <Skills />
      </section>
    </div>
  );
};

export default Hero;
