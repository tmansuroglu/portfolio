import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import Education from '../../components/Education';
import EmploymentHistory from '../../components/EmploymentHistory';
import TechnicalSkills from '../../components/TechnicalSkills';
import WhoIsTarkan from '../../components/WhoIsTarkan';

const About = () => {
  return (
    <Container id='about'>
      <h1 className='homeTitle'>About</h1>
      <div className='homeText'>
        <WhoIsTarkan />
        <TechnicalSkills />
        <EmploymentHistory />
        <Education />
        <h2 id='languages' className='homePageHeader'>
          Languages
        </h2>
        <ul>
          <li>English</li>
          <li>Turkish</li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
