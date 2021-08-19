import React from 'react';
import { Container } from 'react-bootstrap';
import Education from '../Education';
import EmploymentHistory from '../WorkExperience';
import TechnicalSkills from '../TechnicalSkills';
import WhoIsTarkan from '../WhoIsTarkan';

const About = () => (
  <Container id="about">
    <h2>About</h2>
    <WhoIsTarkan />
    <Education />
    <EmploymentHistory />
    <TechnicalSkills />
  </Container>
);

export default About;
