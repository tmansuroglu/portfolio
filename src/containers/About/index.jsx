import React from 'react';
import { Container } from 'react-bootstrap';
import Education from '../../components/Education';
import EmploymentHistory from '../../components/WorkExperience';
import TechnicalSkills from '../../components/TechnicalSkills';
import WhoIsTarkan from '../../components/WhoIsTarkan';

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
