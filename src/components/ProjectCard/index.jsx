import './index.scss';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  type,
  githubUrl,
  demoUrl,
  goal,
  impactArr,
  skillsArr,
  responsibilityArr,
}) => (
  <div className="project-card">
    <div className="project-card__main-title">
      <h3>{title}</h3>
    </div>
    <div className="project-card__sub-title">
      <h5>
        <small>{type}</small>
      </h5>
    </div>
    <div className="project-card__links">
      <a href={githubUrl}>{githubUrl}</a>
      {' | '}
      <a href={demoUrl}>{demoUrl}</a>
    </div>

    <div className="project-card__secondary-title">
      <h4>Goal</h4>
    </div>

    <div className="project-card__goal">
      <p>{goal}</p>
    </div>

    <div className="project-card__secondary-title">
      <h4>My Responsibilities</h4>
    </div>

    <ul className="project-card__list">
      {responsibilityArr.map((responsibility) => (
        <li>{responsibility}</li>
      ))}
    </ul>

    <div className="project-card__secondary-title">
      <h4>My Impact</h4>
    </div>

    <ul className="project-card__list">
      {impactArr.map((impact) => (
        <li>{impact}</li>
      ))}
    </ul>

    <div className="project-card__secondary-title">
      <h4>Skills Applied</h4>
    </div>

    <ul className="project-card__list">
      {skillsArr.map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  githubUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  goal: PropTypes.string,
  impactArr: PropTypes.arrayOf(PropTypes.string),
  skillsArr: PropTypes.arrayOf(PropTypes.string),
  responsibilityArr: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  title: 'Project Title',
  type: 'Project Type',
  githubUrl: 'Github Url',
  demoUrl: 'Demo Url',
  goal: 'Goal of the project',
  impactArr: ['first impact', 'second impact'],
  skillsArr: ['first skill', 'second skill'],
  responsibilityArr: ['first responsbility, second responsibility'],
};

export default ProjectCard;
