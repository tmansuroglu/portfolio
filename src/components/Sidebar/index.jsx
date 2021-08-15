import React from "react";
import "./index.scss";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";

const Sidebar = () => {
  const phonePopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Button href="tel:+905523600893" variant="link">
          +90 552 360 08 93
        </Button>
      </Popover.Content>
    </Popover>
  );

  const emailPopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Button href="mailto: mansuroglu99@gmail.com" variant="link">
          mansuroglu99@gmail.com
        </Button>
      </Popover.Content>
    </Popover>
  );
  return (
    <div className="sidebar">
      <div className="iconContainer">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={phonePopover}
          rootClose={true}
          rootCloseEvent="click"
        >
          <i className="fas fa-phone fa-3x icon"></i>
        </OverlayTrigger>
      </div>
      <div className="iconContainer">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={emailPopover}
          rootClose={true}
          rootCloseEvent="click"
        >
          <i className="fas fa-envelope-open icon fa-3x"></i>
        </OverlayTrigger>
      </div>
      <div className="iconContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/tarkanmansuroglu/"
        >
          <i className="fab fa-linkedin-in icon fa-3x"></i>
        </a>
      </div>
      <div className="iconContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tmansuroglu"
        >
          <i className="fab fa-github icon fa-3x"></i>
        </a>
      </div>
      <div className="iconContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/tarkanmansuroglu/"
        >
          <i className="fab fa-instagram icon fa-3x"></i>
        </a>
      </div>
      <div className="iconContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/T_Mansuroglu"
        >
          <i className="fab fa-twitter icon fa-3x"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
