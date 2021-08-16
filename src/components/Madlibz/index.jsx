import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Juniper = () => (
  <div className=" projectContent">
    <h4>Madlibz</h4>
    <small>Team Project</small> <br />
    <a
      href="https://github.com/tmansuroglu/Madlibzz"
      target="_blank"
      rel="noreferrer"
    >
      Github
    </a>{' '}
    |{' '}
    <a href="https://madlibz.netlify.app/" target="_blank" rel="noreferrer">
      Demo
    </a>
    <p className="projectText">
      <strong>Goal:</strong> creating Mad Libs game as an introduction to
      project building.
    </p>
    <br />
    <Row>
      <Col xs={12} md={6}>
        <h5>Skills Applied</h5>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Regular Expression</li>
          <li>i18n</li>
          <li>Bootstrap</li>
          <li>Visual Design</li>
          <li>Responsive Design</li>
          <li>Teamwork</li>
        </ul>
      </Col>
      <Col xs={12} md={6}>
        <h5>My Responsibilities</h5>
        <ul>
          <li>Game Logic</li>
          <li>Setting up i18n</li>
          <li>Visual Design</li>
          <li>Responsive Design</li>
        </ul>
      </Col>
    </Row>
  </div>
);

export default Juniper;
