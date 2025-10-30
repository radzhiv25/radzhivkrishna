import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Skills from "./Skills";
import ProjectGlimpse from "./ProjectGlimpse";
import Experience from "./Experience";
import ProjectCard from "./ProjectCard";
import { projectData } from "../projectData";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "../context/ThemeContext";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2
        }
    }
};

export default function CombinedPage() {
    const { darkMode } = useTheme();
    const categories = ["All", "UI/UX", "Frontend", "ML/AI", "Micro Interactions"];
    const [activeTab, setActiveTab] = useState("All");

    const introRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const githubRef = useRef(null);

    const introInView = useInView(introRef, { once: true, margin: "-100px" });
    const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
    const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
    const githubInView = useInView(githubRef, { once: true, margin: "-100px" });

    useEffect(() => {
        sessionStorage.setItem("workActiveTab", activeTab);
    }, [activeTab]);

    const filteredProjects = projectData.filter(
        (project) => activeTab === "All" || project.category === activeTab
    );

    return (
        <div className="space-y-20 md:space-y-32">
            {/* Hero Section */}
            <motion.section
                className="mt-5 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="h-[90vh] flex flex-col items-center justify-center">
                    <motion.a
                        href="https://calendly.com/radzhivkrishna/meet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-max mx-auto mb-4 px-2 py-1 flex items-center gap-2 border border-dashed rounded-full hover:bg-gray-50 dark:hover:bg-gray-400 transition-colors cursor-pointer text-black dark:text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <p className="text-xs">want to have a quick call</p>
                        <FaSquareArrowUpRight />
                    </motion.a>
                    <motion.div
                        className="flex md:flex-row flex-col-reverse items-center my-auto w-full border border-dashed rounded-md p-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="relative aspect-square md:size-2/6 size-full flex flex-col items-center justify-center">
                            <motion.img
                                src="https://cdn.jsdelivr.net/gh/radzhiv25/radzhivkrishna@main/public/assets/HeroSection.png"
                                alt="Rajeev Krishna"
                                className="rounded-md shadow-md"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
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
                    </motion.div>
                </div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Skills />
                </motion.div>

                {/* Project Glimpse */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <ProjectGlimpse />
                </motion.div>
            </motion.section>

            {/* Intro Section */}
            <motion.section
                id="intro"
                ref={introRef}
                initial="hidden"
                animate={introInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="md:my-20 my-10"
            >
                <div className="md:mb-20 mb-10">
                    <div className="lg:text-5xl text-3xl font-bold text-gray-400 lg:col-span-2 md:leading-none leading-tight">
                        I&apos;m{" "}
                        <motion.span
                            className="text-black dark:text-white"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Rajeev
                        </motion.span>
                        , a frontend{" "}
                        <motion.span
                            className="text-purple-500"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            engineering
                        </motion.span>{" "}
                        enthusiast with a curiosity that spans from{" "}
                        <motion.span
                            className="text-blue-500"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            tech
                        </motion.span>{" "}
                        to tasty{" "}
                        <motion.span
                            className="text-yellow-400"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            bites
                        </motion.span>
                        {" "}wherever the{" "}
                        <motion.span
                            className="text-green-500"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            adventure
                        </motion.span>
                        {" "}leads, I&apos;m all in!
                    </div>
                </div>
            </motion.section>

            {/* Experience Section */}
            <motion.section
                ref={experienceRef}
                initial="hidden"
                animate={experienceInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <Experience />
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                ref={projectsRef}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <motion.h2
                    variants={fadeInUp}
                    className="my-5 text-3xl font-semibold text-center text-black dark:text-white"
                >
                    Some Proof of Work
                </motion.h2>

                {/* Custom Tabs with animation */}
                <motion.div
                    variants={fadeInUp}
                    className="flex justify-center mb-8"
                >
                    <div className="flex gap-2 border rounded-lg p-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === category
                                    ? "bg-gray-200 dark:bg-white text-gray-900 dark:text-gray-900 shadow-sm"
                                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-500"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid with staggered animation */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={`${project.name}-${index}`}
                            initial="hidden"
                            animate={projectsInView ? "visible" : "hidden"}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }
                                }
                            }}
                            whileHover={{ scale: 1.02 }}
                            className="mb-5"
                        >
                            <ProjectCard
                                image={project.image}
                                name={project.name}
                                link={project.link}
                                source={project.source}
                                description={project.description}
                                skills={project.skills}
                                category={project.category}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    variants={fadeInUp}
                    className="my-5 text-center text-gray-400 font-semibold"
                >
                    More projects coming soon
                </motion.p>
            </motion.section>

            {/* GitHub Contribution Graph */}
            <motion.section
                ref={githubRef}
                initial="hidden"
                animate={githubInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="mb-8 flex flex-col items-center mx-auto w-max"
            >
                <motion.h3
                    className="text-lg font-semibold text-black dark:text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                >
                    GitHub Activity
                </motion.h3>
                <motion.div
                    className="w-full overflow-x-auto"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <GitHubCalendar
                        username="radzhiv25"
                        blockSize={12}
                        blockMargin={3}
                        fontSize={14}
                        colorScheme={darkMode ? "dark" : "light"}
                        hideColorLegend={false}
                        hideMonthLabels={false}
                        hideTotalCount={false}
                    />
                </motion.div>
            </motion.section>
        </div>
    );
}

