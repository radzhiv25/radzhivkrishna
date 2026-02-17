import {
  FaReact,
  FaPython,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiTensorflow,
  SiJavascript,
  SiTypescript,
  SiVercel,
  SiRedux,
  SiMongodb,
  SiAppwrite,
  SiShadcnui,
  SiFramer,
  SiNumpy
} from "react-icons/si";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import {
  LuCode2,
  LuNewspaper,
  LuBarChart3,
  LuLayers,
  LuPencil,
  LuMove,
  LuDatabase,
} from "react-icons/lu";
import { TbBrandFramerMotion } from "react-icons/tb";

// Map skill name (case-insensitive key) to icon component
const SKILL_ICON_MAP = {
  react: FaReact,
  "react.js": FaReact,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  python: FaPython,
  pandas: LuDatabase,
  keras: LuCode2,
  tensorflow: SiTensorflow,
  numpy: SiNumpy,
  appwrite: SiAppwrite,
  shadcn: SiShadcnui,
  "shadcn/ui": SiShadcnui,
  supabase: SiSupabase,
  chartjs: LuBarChart3,
  "chart.js": LuBarChart3,
  figma: FaFigma,
  prototyping: LuPencil,
  "framer motion": TbBrandFramerMotion,
  framer: SiFramer,
  "gnews api": LuNewspaper,
  gnews: LuNewspaper,
  javascript: SiJavascript,
  typescript: SiTypescript,
  next: RiNextjsFill,
  "next.js": RiNextjsFill,
  node: RiNodejsFill,
  nodejs: RiNodejsFill,
  html: FaHtml5,
  css: FaCss3Alt,
  redux: SiRedux,
  mongodb: SiMongodb,
  vercel: SiVercel,
  git: FaGitAlt,
  github: FaGithub,
};

const DEFAULT_ICON = LuCode2;

/**
 * Get the icon component for a skill name (case-insensitive).
 * @param {string} skillName - e.g. "React", "Tailwind", "ShadCN"
 * @returns {React.Component} Icon component
 */
export function getSkillIcon(skillName) {
  if (!skillName || typeof skillName !== "string") return DEFAULT_ICON;
  const key = skillName.toLowerCase().trim();
  return SKILL_ICON_MAP[key] || DEFAULT_ICON;
}

/**
 * Renders a skill badge with icon (for project detail page and cards).
 * Reuses the same style as Hero/Skills: border-dashed, rounded, icon + label.
 */
export function SkillWithIcon({ skill, size = "default", className = "" }) {
  const Icon = getSkillIcon(skill);
  const iconSizeClasses =
    size === "sm"
      ? "size-4"
      : size === "lg"
        ? "size-6"
        : "size-5";
  const gapClass = size === "sm" ? "gap-1.5" : "gap-2";
  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const paddingClass = size === "sm" ? "py-0.5 px-1.5" : "py-1 px-2";

  return (
    <span
      className={`inline-flex items-center ${gapClass} border border-dashed border-gray-300 dark:border-gray-700  ${paddingClass} ${textSize} text-gray-400 dark:text-white ${className}`}
      title={skill}
    >
      <Icon className={`${iconSizeClasses} flex-shrink-0 text-gray-500 dark:text-gray-400`} />
      <span className="truncate">{skill}</span>
    </span>
  );
}

export default { getSkillIcon, SkillWithIcon };
