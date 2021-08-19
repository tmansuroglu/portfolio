import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './index.scss';

const TopNavBar = ({ isContainervisible, onScroll }) => (
  <div
    className={`top-navbar-container ${
      isContainervisible ? '' : 'hide-navbar'
    }`}
  >
    <HashLink
      className="top-navbar-container__nav"
      smooth
      to="#top"
      scroll={(el) => onScroll(el)}
    >
      Home
    </HashLink>
    <HashLink
      className="top-navbar-container__nav"
      smooth
      to="#about"
      scroll={(el) => onScroll(el)}
    >
      About
    </HashLink>
    <HashLink
      className="top-navbar-container__nav"
      smooth
      to="#projects"
      scroll={(el) => onScroll(el)}
    >
      Projects
    </HashLink>
    <HashLink className="top-navbar-container__nav contact-button">
      Contact
    </HashLink>
    <HashLink className="top-navbar-container__nav">Resume</HashLink>
  </div>
);

TopNavBar.propTypes = {
  isContainervisible: PropTypes.bool,
  onScroll: PropTypes.func,
};

TopNavBar.defaultProps = {
  isContainervisible: true,
  onScroll: () => 'scroll',
};

export default TopNavBar;
