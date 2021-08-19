import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './index.scss';

const TopNavBar = ({ visible, onScroll }) => (
  <div className={`top-navbar-container ${visible ? '' : 'hide-top-navbar'}`}>
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
  visible: PropTypes.bool,
  onScroll: PropTypes.func,
};

TopNavBar.defaultProps = {
  visible: true,
  onScroll: () => 'scroll',
};

export default TopNavBar;
