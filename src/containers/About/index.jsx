import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import Education from '../../components/Education';
import EmploymentHistory from '../../components/WorkExperience';
import TechnicalSkills from '../../components/TechnicalSkills';
import WhoIsTarkan from '../../components/WhoIsTarkan';

const About = () => {
  return (
    <Container id='about'>
      <h1 className='homeTitle aboutBigScreen'>About</h1>
      <div className='homeText'>
        <WhoIsTarkan />
        <Education />
        <EmploymentHistory />
        <TechnicalSkills />
      </div>
    </Container>
  );
};

export default About;
