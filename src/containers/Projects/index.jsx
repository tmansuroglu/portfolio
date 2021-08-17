import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import dataArr from './data';
import './index.scss';

const SWIPER_BREAKPOINTS = {
  280: {
    slidesPerView: 1.05,
    spaceBetween: 5,
  },
  450: {
    slidesPerView: 1.2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1.5,
    spaceBetween: 15,
  },
  992: {
    slidesPerView: 2.1,
    spaceBetween: 15,
  },
  1200: {
    slidesPerView: 2.1,
    spaceBetween: 20,
  },
  1400: {
    slidesPerView: 2.5,
    spaceBetween: 30,
  },
};

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
    <Swiper className="projects-container" breakpoints={SWIPER_BREAKPOINTS}>
      {swipers}
    </Swiper>
  </Container>
);

export default Projects;
