import React, { useState } from 'react';
import './index.css';
import { Nav, Navbar, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Contact from '../../containers/Contact';

const Navigation = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const scrollWithOffset = el => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <Contact
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
      <Navbar expand='sm' className='navbarContainer' fixed='top'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='navbarContainer__navs d-flex justify-content-around'>
            <Router>
              <HashLink
                smooth
                to='#top'
                className='text-light navbarContainer__navs__nav'
              >
                <Button
                  variant='link'
                  className='text-light navbarContainer__navs__nav__button'
                >
                  Home
                </Button>
              </HashLink>
              <DropdownButton
                variant='link'
                id='dropdown-basic-button'
                title='About'
              >
                <HashLink
                  smooth
                  to='#whoIsTarkan'
                  scroll={el => scrollWithOffset(el)}
                >
                  <Dropdown.Item>Who is Tarkan Mansuroğlu?</Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to='#technicalSkills'
                  scroll={el => scrollWithOffset(el)}
                >
                  <Dropdown.Item>Technical Skills</Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to='#education'
                  scroll={el => scrollWithOffset(el)}
                >
                  <Dropdown.Item>Education</Dropdown.Item>
                </HashLink>
                <HashLink
                  smooth
                  to='#employmentHistory'
                  scroll={el => scrollWithOffset(el)}
                >
                  <Dropdown.Item>Employment History</Dropdown.Item>
                </HashLink>
              </DropdownButton>
              <HashLink
                smooth
                to='#projects'
                className='text-light navbarContainer__navs__nav'
                scroll={el => scrollWithOffset(el)}
              >
                <Button
                  variant='link'
                  className='text-light navbarContainer__navs__nav__button'
                >
                  Projects
                </Button>
              </HashLink>
              <Button
                variant='link'
                className='text-light navbarContainer__navs__nav__button resumeButton'
                href='https://drive.google.com/file/d/1hYvgvIL-4xm-cn7JKFCq-CIULs9LJx8E/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                Resume
              </Button>
              <Button
                variant='link'
                className='text-light navbarContainer__navs__nav__button'
                onClick={() => setModalVisibility(true)}
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
