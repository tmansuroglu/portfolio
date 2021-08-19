import React from 'react';
import './index.scss';
import { Offcanvas, Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import MenuButton from '../../assets/images/menu-button.svg';
import Tarkan from '../../assets/images/tarkan.png';

const SideNavBar = ({
  showOffCanvas,
  handleShowOffCanvas,
  handleCloseOffCanvas,
  isContainerVisible,
  onScroll,
}) => (
  <>
    <div className={`mobile-navbar ${isContainerVisible ? '' : 'hide-navbar'}`}>
      <Button variant="dark" onClick={handleShowOffCanvas} className="me-2">
        <img src={MenuButton} alt="menu button" />
      </Button>
    </div>

    <Offcanvas
      show={showOffCanvas}
      onHide={handleCloseOffCanvas}
      closeVariant="white"
      rounded
    >
      <div>
        <Offcanvas.Header closeButton closeLabel="Close"></Offcanvas.Header>
      </div>

      <Offcanvas.Title>
        <Image
          src={Tarkan}
          className="offcanvas-image"
          alt="tarkan mansuroğlu's picture"
          roundedCircle
          fluid
        />
      </Offcanvas.Title>

      <Offcanvas.Body>
        <div className="sidebar-body">
          <HashLink
            className="sidebar-body__nav"
            smooth
            to="#top"
            scroll={(el) => {
              onScroll(el);
              handleCloseOffCanvas();
            }}
          >
            Home
          </HashLink>
          <HashLink
            className="sidebar-body__nav"
            smooth
            to="#about"
            scroll={(el) => {
              onScroll(el);
              handleCloseOffCanvas();
            }}
          >
            About
          </HashLink>
          <HashLink
            className="sidebar-body__nav"
            smooth
            to="#projects"
            scroll={(el) => {
              onScroll(el);
              handleCloseOffCanvas();
            }}
          >
            Projects
          </HashLink>
          <HashLink className="sidebar-body__nav contact-button">
            Contact
          </HashLink>
          <HashLink className="sidebar-body__nav">Resume</HashLink>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
);

SideNavBar.propTypes = {
  showOffCanvas: PropTypes.bool,
  handleShowOffCanvas: PropTypes.func,
  handleCloseOffCanvas: PropTypes.func,
  isContainerVisible: PropTypes.bool,
  onScroll: PropTypes.func,
};

SideNavBar.defaultProps = {
  showOffCanvas: false,
  handleShowOffCanvas: () => 'show offcanvas',
  handleCloseOffCanvas: () => 'close offcanvas',
  isContainerVisible: true,
  onScroll: () => 'on scroll',
};

export default SideNavBar;
