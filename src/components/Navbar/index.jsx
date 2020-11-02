import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <Navbar
            collapseOnSelect
            expand='sm'
            className='navbarContainer'
            fixed='top'
        >
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='navbarContainer__navs d-flex justify-content-around'>
                    <Router>
                        {/* <HashLink
                            smooth
                            to='#introduction'
                            className='text-light navbarContainer__navs__brand'
                        >
                            T. Mansuroğlu
                        </HashLink> */}
                        <HashLink
                            smooth
                            to='#top'
                            className='text-light navbarContainer__navs__nav'
                        >
                            Home
                        </HashLink>
                        <HashLink
                            smooth
                            to='#about'
                            className='text-light navbarContainer__navs__nav'
                        >
                            About
                        </HashLink>
                        <HashLink
                            smooth
                            to='#projects'
                            className='text-light navbarContainer__navs__nav'
                        >
                            Projects
                        </HashLink>
                        <HashLink
                            smooth
                            to='#resume'
                            className='text-light navbarContainer__navs__nav'
                        >
                            Resume
                        </HashLink>
                        <HashLink
                            smooth
                            to='#contact'
                            className='text-light navbarContainer__navs__nav'
                        >
                            Contact
                        </HashLink>
                    </Router>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;

// <Navbar collapseOnSelect expand='lg' >
