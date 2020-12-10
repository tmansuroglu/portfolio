import React from 'react';
import './index.css';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';
import FoodCheck from '../../components/FoodCheck';
import Juniper from '../../components/Juniper';
import Madlibz from '../../components/Madlibz';
import Portfolio from '../../components/Portfolio';
import TMDB from '../../components/TMDB';

const Projects = () => {
  return (
    <Container className='projectsContainer'>
      <h1 className='homeTitle' id='projects'>
        Projects
      </h1>
      <VerticalTimeline animate={false} className='verticalTimeline'>
        <Juniper />
        <Portfolio />
        <FoodCheck />
        <TMDB />
        <Madlibz />
      </VerticalTimeline>
    </Container>
  );
};

export default Projects;
