import React from 'react';
import './index.css';
import { Col, Row } from 'react-bootstrap';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Juniper = () => {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      date={'Nov 2020'}
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
        <h4>Juniper</h4>
        <small>Team Project</small> <br />
        <a
          href='https://github.com/ReCoded-Org/capstone-istanbul-juniper'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>{' '}
        |{' '}
        <a
          href='https://juniper-ist.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Demo
        </a>
        <p className='projectText'>
          <strong>Goal:</strong> teaching middle-eastern youth about
          environmental problems through games.
        </p>
        <br />
        <Row>
          <Col xs={12}>
            <h5>My Impact</h5>
            <ul>
              <li>Built signature game(memory game) of the project</li>
              <li>
                Elevated my teammates' work by organizing off-hour online
                meetings
              </li>
              <li>Became problem solver of the team</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>Skills Applied</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git and Github</li>
              <li>AGILE Methodologies</li>
              <li>Teamwork</li>
              <li>Firebase</li>
              <li>Ant Design</li>
              <li>Responsive Design</li>
              <li>Figma</li>
              <li>Testing (Jest)</li>
              <li>Routing</li>
              <li>i18n</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>My Responsibilities</h5>
            <ul>
              <li>Developing a memory game</li>
              <li>Code reviewing</li>
              <li>Bug bashing</li>
              <li>Developing games page</li>
              <li>Scrum master for 1 week</li>
              <li>Developing twitter section of homepage</li>
            </ul>
          </Col>
        </Row>
      </div>
    </VerticalTimelineElement>
  );
};

export default Juniper;
