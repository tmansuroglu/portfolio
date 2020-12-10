import React from 'react';
import './index.css';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Juniper = () => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date={'Aug 2020'}
      dateClassName={'date'}
      contentStyle={{
        background: 'white',
        color: 'white',
      }}
      contentArrowStyle={{
        borderRight: '7px solid  white',
      }}
      iconStyle={{
        background: 'white',
      }}
      icon={<i className='fas fa-project-diagram projectIcon'></i>}
    >
      <div className='homeText projectContent'>
        <h4>Madlibz</h4>
        <a
          href='https://github.com/tmansuroglu/Madlibzz'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>{' '}
        |{' '}
        <a href='https://madlibz.netlify.app/' target='_blank' rel='noreferrer'>
          Demo
        </a>
        <p>
          <strong>Goal:</strong> creating a Madlibz game.
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
    </VerticalTimelineElement>
  );
};

export default Juniper;
