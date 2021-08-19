import React from 'react';
import './index.scss';
import { Offcanvas, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SideNavBar = ({
  showOffCanvas,
  handleShowOffCanvas,
  handleCloseOffCanvas,
  isContainerVisible,
}) => (
  <>
    <div className={`side-navbar ${isContainerVisible ? '' : 'hide-navbar'}`}>
      <Button variant="primary" onClick={handleShowOffCanvas} className="me-2">
        Button
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
