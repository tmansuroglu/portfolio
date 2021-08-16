import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import dataArr from './data';
import './index.scss';

const swipers = dataArr.map((data) => (
  <SwiperSlide key={data.title}>
    <ProjectCard
      title={data.title}
      type={data.type}
      githubUrl={data.githubUrl}
      demoUrl1={data.demoUrl1}
      demoUrl2={data.demoUrl2}
      goal={data.goal}
      impactArr={data.impactArr}
      skillsArr={data.skillsArr}
      responsibilityArr={data.responsibilityArr}
      iosUrl={data.iosUrl}
      androidUrl={data.androidUrl}
      status={data.status}
    />
  </SwiperSlide>
));

const Projects = () => (
  <Container>
    <h2 id="projects">Projects</h2>
    <Swiper className="swiper-container" spaceBetween={30} slidesPerView={2.5}>
      {swipers}
    </Swiper>
  </Container>
);

export default Projects;
