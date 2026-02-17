import { Link } from 'react-router-dom';
import { LuGithub } from "react-icons/lu";
import PropTypes from 'prop-types';
import { SkillWithIcon } from '../lib/skillIcons';

const ProjectCard = ({ image, name, link, slug, source, description, skills, className, category }) => {
  // Use internal route if slug exists, otherwise use external link
  const projectLink = slug ? `/project/${slug}` : link;
  const isExternalLink = !slug;

  const LinkComponent = isExternalLink ? 'a' : Link;
  const linkProps = isExternalLink 
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: projectLink };

  return (
    <div className={`h-max p-2 border border-dashed dark:border-gray-700  break-inside-avoid ${className} transition-all mb-5`}>
      <LinkComponent {...linkProps}>
        <img
          src={image}
          alt={name}
          className=""
          loading="lazy"
          decoding="async"
        />
      </LinkComponent>
      <span className="flex items-center justify-between">
        <LinkComponent {...linkProps}>
          <h3 className="text-xl font-semibold hover:text-gray-400 text-black dark:text-white">{name}</h3>
        </LinkComponent>
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-gray-400"
            aria-label="View source code on GitHub"
          >
            <LuGithub className="size-5" />
          </a>
        )}
      </span>
      <p className="mt-1 mb-3 text-base leading-tight text-gray-400">{description}</p>
      <div className="flex flex-wrap items-center gap-2 overflow-x-auto scrollbar-hide">
        {skills.map((skill, index) => (
          <SkillWithIcon key={index} skill={skill} size="sm" />
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  slug: PropTypes.string,
  source: PropTypes.string,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default ProjectCard;