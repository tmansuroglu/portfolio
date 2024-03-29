import React from 'react';
import { HashLink } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './index.scss';

const TopNavBar = ({
  isContainervisible,
  onScroll,
  handleOpenContactModal,
}) => (
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
    <HashLink
      className="top-navbar-container__nav contact-button"
      onClick={handleOpenContactModal}
    >
      Contact
    </HashLink>
    <a
      href="https://drive.google.com/file/d/17xUMhkAijWpodpJa7CNzIq9jvbj4nYuQ/view?usp=sharing"
      className="top-navbar-container__nav"
      target="_blank"
      rel="noreferrer"
    >
      Resume
    </a>
  </div>
);

TopNavBar.propTypes = {
  isContainervisible: PropTypes.bool,
  onScroll: PropTypes.func,
  handleOpenContactModal: PropTypes.func,
};

TopNavBar.defaultProps = {
  isContainervisible: true,
  onScroll: () => 'scroll',
  handleOpenContactModal: () => 'open contact modal',
};

export default TopNavBar;
