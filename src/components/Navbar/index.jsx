import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand='sm' className='navigation'>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='navs d-flex justify-content-around'>
                    <Nav.Link href='#home' className='text-light'>
                        Home
                    </Nav.Link>
                    <Nav.Link href='#about' className='text-light'>
                        About
                    </Nav.Link>
                    <Nav.Link href='#resume' className='text-light'>
                        Resume
                    </Nav.Link>
                    <Nav.Link href='#projects' className='text-light'>
                        Projects
                    </Nav.Link>
                    <Nav.Link href='#contact' className='text-light'>
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;

// <Navbar collapseOnSelect expand='lg' >
