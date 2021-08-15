import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const FoodCheck = () => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sept 2020"
    dateClassName="date"
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
    icon={<i className="fas fa-project-diagram projectIcon"></i>}
  >
    <div className=" projectContent">
      <h4>FoodCheck</h4>
      <small>Team Project</small> <br />
      <a
        href="https://github.com/tmansuroglu/MohammadJundi-Tarkan-Project"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>{' '}
      |{' '}
      <a href="https://foodcheck.netlify.app/" target="_blank" rel="noreferrer">
        Demo
      </a>
      <p className="projectText">
        <strong>Goal:</strong> creating a quick and easy to use diet tracker
      </p>
      <br />
      <Row>
        <Col xs={12}>
          <h5>My Impact</h5>
          <ul>
            <li>
              Took responsibility of whole project when teammate was facing
              crisis and completed project before its deadline
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6}>
          <h5>Skills Applied</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>API Usage (nutritionix API)</li>
            <li>Firebase</li>
            <li>Ant Design</li>
            <li>Responsive Design</li>
            <li>Git and Github</li>
            <li>Chart.js</li>
            <li>Routing</li>
          </ul>
        </Col>
      </Row>
    </div>
  </VerticalTimelineElement>
);

export default FoodCheck;
