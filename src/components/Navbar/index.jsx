import React, { useState } from 'react';
import './index.scss';
// import { Nav, Navbar, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ContactModal from '../ContactModal';

const Navigation = () => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -50;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <Router>
        <div className="navbar-container">
          <HashLink
            className="navbar-container__nav"
            smooth
            to="#top"
            scroll={(el) => scrollWithOffset(el)}
          >
            Home
          </HashLink>
          <HashLink
            className="navbar-container__nav"
            smooth
            to="#about"
            scroll={(el) => scrollWithOffset(el)}
          >
            About
          </HashLink>
          <HashLink
            className="navbar-container__nav"
            smooth
            to="#projects"
            scroll={(el) => scrollWithOffset(el)}
          >
            Projects
          </HashLink>
          <HashLink
            onClick={() => {
              setModalVisibility(!modalVisibility);
            }}
            className="navbar-container__nav contact-button"
          >
            Contact
          </HashLink>
          <HashLink className="navbar-container__nav">Resume</HashLink>
        </div>
      </Router>
      <ContactModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </>
  );
};

export default Navigation;
