import React from 'react';
import { Container } from 'react-bootstrap';
import Education from '../../components/Education';
import EmploymentHistory from '../../components/WorkExperience';
import TechnicalSkills from '../../components/TechnicalSkills';
import WhoIsTarkan from '../../components/WhoIsTarkan';

const About = () => (
  <Container id="about">
    <h1>About</h1>
    <WhoIsTarkan />
    <Education />
    <EmploymentHistory />
    <TechnicalSkills />
  </Container>
);

export default About;
