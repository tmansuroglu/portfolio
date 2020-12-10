import React from 'react';
import './index.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Education from '../../components/Education';
import EmploymentHistory from '../../components/EmploymentHistory';
import TechnicalSkills from '../../components/TechnicalSkills';
import WhoIsTarkan from '../../components/WhoIsTarkan';
import tarkanImage from '../../img/tarkanImage.png';

const About = () => {
  return (
    <Container id='about'>
      <h1 className='homeTitle aboutBigScreen'>About</h1>
      <div className='homeText'>
        <div className='tarkanDiv'>
          <Image
            src={tarkanImage}
            className='tarkanImage'
            alt="tarkan mansuroğlu's picture"
            roundedCircle
            fluid
          />
        </div>
        <h1 className='homeTitle aboutSmallScreen'>About</h1>
        <WhoIsTarkan />
        <TechnicalSkills />
        <Education />
        <EmploymentHistory />
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
