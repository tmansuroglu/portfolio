import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';
import dataArr from './data';

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
    <h1 id="projects">Projects</h1>
    <Swiper
      spaceBetween={30}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {swipers}
    </Swiper>
  </Container>
);

export default Projects;
