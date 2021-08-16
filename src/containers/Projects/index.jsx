import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import FoodCheck from '../../components/FoodCheck';
import Juniper from '../../components/Juniper';
import Madlibz from '../../components/Madlibz';
import Portfolio from '../../components/Portfolio';
import TMDB from '../../components/TMDB';

const Projects = () => (
  <Container>
    <h1 id="projects">Projects</h1>
    <Swiper
      spaceBetween={50}
      slidesPerView={1.1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Juniper />
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio />
      </SwiperSlide>
      <SwiperSlide>
        <FoodCheck />
      </SwiperSlide>
      <SwiperSlide>
        <TMDB />
      </SwiperSlide>
      <SwiperSlide>
        <Madlibz />
      </SwiperSlide>
    </Swiper>
  </Container>
);

export default Projects;
