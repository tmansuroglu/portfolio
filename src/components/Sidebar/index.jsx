import React from 'react';
import './index.scss';

const Sidebar = () => (
  <div className="sidebar">
    <div className="iconContainer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/+905523600893/?text=Hello+Tarkan!"
      >
        <i className="fa fa-whatsapp fa-4x icon"></i>
      </a>
    </div>
    <div className="iconContainer">
      <a href="tel:+905523600893" rel="noreferrer">
        <i className="fas fa-mobile-alt fa-3x fa-4x icon"></i>
      </a>
    </div>
    <div className="iconContainer">
      <a target="_blank" rel="noreferrer" href="mailto: mansuroglu99@gmail.com">
        <i className="far fa-envelope fa-4x icon"></i>
      </a>
    </div>
    <div className="iconContainer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/tarkanmansuroglu/"
      >
        <i className="fab fa-linkedin-in icon fa-4x"></i>
      </a>
    </div>
    <div className="iconContainer">
      <a target="_blank" rel="noreferrer" href="https://github.com/tmansuroglu">
        <i className="fab fa-github icon fa-4x"></i>
      </a>
    </div>
    <div className="iconContainer">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/tarkanmansuroglu/"
      >
        <i className="fab fa-instagram icon fa-4x"></i>
      </a>
    </div>
  </div>
);

export default Sidebar;
