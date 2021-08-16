import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => (
  <Container>
    <h1 id="projects">Projects</h1>
    <Swiper
      spaceBetween={30}
      slidesPerView={2.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard />
      </SwiperSlide>
    </Swiper>
  </Container>
);

export default Projects;
