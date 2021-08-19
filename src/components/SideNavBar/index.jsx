import React from 'react';
import './index.scss';
import { Offcanvas, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import MenuButton from '../../assets/images/menu-button.svg';

const SideNavBar = ({
  showOffCanvas,
  handleShowOffCanvas,
  handleCloseOffCanvas,
  isContainerVisible,
}) => (
  <>
    <div className={`mobile-navbar ${isContainerVisible ? '' : 'hide-navbar'}`}>
      <Button variant="dark" onClick={handleShowOffCanvas} className="me-2">
        <img src={MenuButton} alt="menu button" />
      </Button>
    </div>

    <Offcanvas show={showOffCanvas} onHide={handleCloseOffCanvas}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  </>
);

SideNavBar.propTypes = {
  showOffCanvas: PropTypes.bool,
  handleShowOffCanvas: PropTypes.func,
  handleCloseOffCanvas: PropTypes.func,
  isContainerVisible: PropTypes.bool,
};

SideNavBar.defaultProps = {
  showOffCanvas: false,
  handleShowOffCanvas: () => 'show offcanvas',
  handleCloseOffCanvas: () => 'close offcanvas',
  isContainerVisible: true,
};

export default SideNavBar;
