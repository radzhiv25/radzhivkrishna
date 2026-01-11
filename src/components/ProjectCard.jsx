import { Link } from 'react-router-dom';
import { LuGithub } from "react-icons/lu";
import PropTypes from 'prop-types';

const ProjectCard = ({ image, name, link, source, description, skills, className, category }) => {
  return (
    <div className={`h-max p-2 border border-dashed dark:border-gray-700 rounded-md break-inside-avoid ${className} transition-all mb-5`}>
      <Link to={link}>
        <img
          src={image}
          alt={name}
          className=""
          loading="lazy"
          decoding="async"
        />
      </Link>
      <span className="flex items-center justify-between">
        <Link to={link}>
          <h3 className="text-xl font-semibold hover:text-gray-400 text-black dark:text-white">{name}</h3>
        </Link>
        {category !== "UI/UX" && (
          <Link to={source || "#"} className="hover:text-gray-400 text-gray-400">
            <LuGithub className='size-5' />
          </Link>
        )}
      </span>
      <p className="mt-1 mb-3 text-base leading-tight text-gray-400">{description}</p>
      <div className="flex items-end gap-2 text-xs overflow-x-auto scrollbar-hide">
        {/* <h4 className="font-semibold text-base">Skills</h4> */}
        <span className="flex items-center gap-2">
          {skills.map((skill, index) => (
            <p key={index} className='border border-gray-300 dark:border-gray-700 rounded py-0.5 px-1 text-xs text-gray-400 dark:text-white'>{skill}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
};

export default ProjectCard;