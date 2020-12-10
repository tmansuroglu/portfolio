import React from 'react';
import './index.css';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Portfolio = () => {
  return (
    <VerticalTimelineElement
      date={'Nov 2020'}
      dateClassName={'date'}
      className='vertical-timeline-element--work'
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
        <h4>Portfolio</h4>
        <a
          href='https://github.com/tmansuroglu/portfolio'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
        <br />
        <p>
          <strong>Goal:</strong> building a portfolio website to create an
          online presence.
        </p>
        <br />
        <Row>
          <Col xs={12} md={6}>
            <h5>Skills Applied</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Emailjs</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>Git and Github</li>
              <li>Testing (Jest)</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>My Responsibilities</h5>
            <ul>
              <li>Solo Project</li>
            </ul>
          </Col>
        </Row>
      </div>
    </VerticalTimelineElement>
  );
};

export default Portfolio;
