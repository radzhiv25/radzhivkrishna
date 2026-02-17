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

// Colorful brand colors like hero section — icon + hex
const SKILLS = [
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: RiNextjsFill, color: "currentColor" },
  { Icon: TbBrandCpp, color: "#00599C" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: FaGithub, color: "currentColor" },
  { Icon: FaFigma, color: "#F24E1E" },
  { Icon: FaWebflow, color: "#4353FF" },
  { Icon: SiVercel, color: "currentColor" },
  { Icon: FaSwift, color: "#F05138" },
  { Icon: FaJava, color: "#007396" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: RiNodejsFill, color: "#339933" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiPostman, color: "#FF6C37" },
  { Icon: SiCapacitor, color: "#119EFF" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiXcode, color: "#147EFB" },
  { Icon: SiAndroidstudio, color: "#3DDC84" },
];

const iconBaseClass =
  "p-2 border border-dashed border-gray-300 dark:border-gray-600  hover:scale-110 transition-transform duration-300 flex items-center justify-center";

const Skills = () => {
  return (
    <div className="md:my-20">
      <h2 className="my-5 md:text-5xl text-4xl font-semibold flex flex-col text-center text-black dark:text-white">
        Tools and Technologies{" "}
        <span className="text-lg text-gray-400 leading-1">
          I&apos;ve worked with
        </span>
      </h2>
      {/* Marquee Container */}
      <div className="my-8 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll">
          <div className="flex items-center gap-3 px-3 flex-shrink-0">
            {SKILLS.map(({ Icon, color }, i) => (
              <span
                key={i}
                className={`${iconBaseClass} md:w-12 md:h-12 w-10 h-10 ${color === "currentColor" ? "text-black dark:text-white" : ""}`}
              >
                <Icon
                  className="md:size-6 size-5 flex-shrink-0"
                  style={{ color: color === "currentColor" ? undefined : color }}
                />
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {SKILLS.map(({ Icon, color }, i) => (
              <span
                key={`dup-${i}`}
                className={`${iconBaseClass} md:w-12 md:h-12 w-10 h-10 ${color === "currentColor" ? "text-black dark:text-white" : ""}`}
              >
                <Icon
                  className="md:size-6 size-5 flex-shrink-0"
                  style={{ color: color === "currentColor" ? undefined : color }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-sm">a lot more to learn 💥</p>
    </div>
  );
};

export default Skills;
