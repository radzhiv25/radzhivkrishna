import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProjectBySlug } from '../projectData';
import { LuGithub, LuExternalLink, LuArrowLeft } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { SkillWithIcon } from '../lib/skillIcons';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-dashed  hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white"
          >
            <LuArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 border-x border-dashed dark:border-gray-700 px-2"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 mb-6 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        <LuArrowLeft className="size-4" />
        <span>Back</span>
      </button>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            {project.name}
          </h1>
          <div className="flex items-center gap-3">
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-dashed dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="View source code on GitHub"
              >
                <LuGithub className="size-5" />
              </a>
            )}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-dashed dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Visit live site"
              >
                <LuExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 border border-dashed dark:border-gray-700 text-sm text-gray-400 dark:text-white">
            {project.category}
          </span>
        </div>

        {/* Description - prominent on the page */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-2">About this project</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech / Skills with icons (like Hero section) */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-3">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill, index) => (
              <SkillWithIcon key={index} skill={skill} size="default" />
            ))}
          </div>
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8 overflow-hidden border border-dashed dark:border-gray-700">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Detailed Description (Blog-style content) */}
      {project.detailedDescription && (
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <h2 className="text-lg font-semibold text-black dark:text-white mb-3">More details</h2>
          <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
            {typeof project.detailedDescription === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
            ) : (
              project.detailedDescription
            )}
          </div>
        </div>
      )}

      {/* Call to Action
      {project.externalLink && (
        <div className="mt-12 pt-8 border-t border-dashed dark:border-gray-700">
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dashed  hover:bg-gray-100 dark:hover:bg-gray-800 text-black dark:text-white transition-colors font-medium"
          >
            <span>Visit Live Site</span>
            <LuExternalLink className="size-4" />
          </a>
        </div>
      )} */}
    </motion.div>
  );
};

export default ProjectDetail;
