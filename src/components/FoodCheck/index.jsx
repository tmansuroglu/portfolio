import React from 'react';
import './index.css';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const FoodCheck = () => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date={'Sept 2020'}
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
        <h4>FoodCheck</h4>
        <a
          href='https://github.com/tmansuroglu/MohammadJundi-Tarkan-Project'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>{' '}
        |{' '}
        <a
          href='https://foodcheck.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Demo
        </a>
        <p>
          <strong>Goal:</strong> creating a quick and easy to use weekly diet
          and calory tracker
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
              <li>Redux</li>
              <li>API Usage</li>
              <li>Firebase</li>
              <li>Ant Design</li>
              <li>Responsive Design</li>
              <li>Git and Github</li>
              <li>Chart.js</li>
              <li>Routing</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>My Responsibilities</h5>
            <ul>
              <li>App planning</li>
              <li>Setting up redux</li>
              <li>Setting up firebase</li>
              <li>Setting up food API</li>
              <li>Diet management page</li>
              <li>Creating charts</li>
              <li>Responsive design</li>
              <li>Home page</li>
              <li>Contact page</li>
              <li>Login page</li>
              <li>Register page</li>
            </ul>
          </Col>
        </Row>
      </div>
    </VerticalTimelineElement>
  );
};

export default FoodCheck;
