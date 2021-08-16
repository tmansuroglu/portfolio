import './index.scss';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  type,
  githubUrl,
  demoUrl1,
  demoUrl2,
  goal,
  impactArr,
  skillsArr,
  responsibilityArr,
  iosUrl,
  androidUrl,
  status,
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

    <div className="project-card__sub-title">
      <h5>
        <small>{status}</small>
      </h5>
    </div>

    <div className="project-card__links">
      {githubUrl && <a href={githubUrl}>Github</a>}
      {demoUrl1 && <a href={demoUrl1}>Demo</a>}
      {demoUrl2 && <a href={demoUrl2}>Demo v2</a>}
      {iosUrl && <a href={iosUrl}>App Store</a>}
      {androidUrl && <a href={androidUrl}>Google Play Store</a>}
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
  status: PropTypes.string,
  githubUrl: PropTypes.string,
  demoUrl1: PropTypes.string,
  demoUrl2: PropTypes.string,
  iosUrl: PropTypes.string,
  androidUrl: PropTypes.string,
  goal: PropTypes.string,
  impactArr: PropTypes.arrayOf(PropTypes.string),
  skillsArr: PropTypes.arrayOf(PropTypes.string),
  responsibilityArr: PropTypes.arrayOf(PropTypes.string),
};

ProjectCard.defaultProps = {
  title: 'Project Title',
  type: 'Project Type',
  githubUrl: 'Github Url',
  status: 'WIP',
  demoUrl1: 'Demo Url1',
  demoUrl2: 'Demo Url2',
  iosUrl: 'ios downlaod url',
  androidUrl: 'android download url',
  goal: 'Goal of the project',
  impactArr: ['first impact', 'second impact'],
  skillsArr: ['first skill', 'second skill'],
  responsibilityArr: ['first responsbility, second responsibility'],
};

export default ProjectCard;
