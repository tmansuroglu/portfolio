import React, { useState } from "react";
import "./index.scss";
import { Nav, Navbar, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Contact from "../../containers/Contact";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const changeCollapseState = () => {
    if (window.outerWidth < 578) {
      setIsExpanded(!isExpanded);
    } else return;
  };

  return (
    <>
      <Contact
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
      <Navbar
        expand="sm"
        className="navbarContainer"
        fixed="top"
        collapseOnSelect={true}
        expanded={isExpanded}
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={changeCollapseState}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbarContainer__navs d-flex justify-content-around">
            <Router>
              <HashLink
                smooth
                to="#top"
                className="text-light navbarContainer__navs__nav"
              >
                <Button
                  variant="link"
                  className="text-light navbarContainer__navs__nav__button"
                  onClick={changeCollapseState}
                >
                  Home
                </Button>
              </HashLink>
              <DropdownButton
                variant="link"
                id="dropdown-basic-button"
                title="About"
              >
                <HashLink
                  smooth
                  to="#whoIsTarkan"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <Dropdown.Item onClick={changeCollapseState}>
                    Who is Tarkan Mansuroğlu?
                  </Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to="#education"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <Dropdown.Item onClick={changeCollapseState}>
                    Education
                  </Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to="#employmentHistory"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <Dropdown.Item onClick={changeCollapseState}>
                    Work Experience
                  </Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to="#technicalSkills"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  <Dropdown.Item onClick={changeCollapseState}>
                    Technical Skills
                  </Dropdown.Item>
                </HashLink>
              </DropdownButton>
              <HashLink
                smooth
                to="#projects"
                className="text-light navbarContainer__navs__nav"
                scroll={(el) => scrollWithOffset(el)}
              >
                <Button
                  variant="link"
                  className="text-light navbarContainer__navs__nav__button"
                  onClick={changeCollapseState}
                >
                  Projects
                </Button>
              </HashLink>
              <Button
                variant="link"
                className="text-light navbarContainer__navs__nav__button resumeButton"
                href="https://drive.google.com/file/d/17xUMhkAijWpodpJa7CNzIq9jvbj4nYuQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={changeCollapseState}
              >
                Resume
              </Button>
              <Button
                variant="link"
                className="text-light navbarContainer__navs__nav__button"
                onClick={() => {
                  changeCollapseState();
                  setModalVisibility(true);
                }}
              >
                Contact
              </Button>
            </Router>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
