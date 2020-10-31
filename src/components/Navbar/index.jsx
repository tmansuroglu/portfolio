import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand='lg' className='navigation'>
            <Navbar.Brand href='#home' className='text-light'>
                TM
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto navs'>
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
