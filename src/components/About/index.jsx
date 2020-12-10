import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import Education from '../Education';
import EmploymentHistory from '../EmploymentHistory';
import TechnicalSkills from '../TechnicalSkills';
import WhoIsTarkan from '../WhoIsTarkan';

const About = () => {
  return (
    <Container id='about'>
      <h1 className='homeTitle'>About</h1>
      <div className='homeText'>
        <WhoIsTarkan />
        <TechnicalSkills />
        <EmploymentHistory />
        <Education />
        <h2 id='languages'>Languages</h2>
        <ul>
          <li>English</li>
          <li>Turkish</li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
