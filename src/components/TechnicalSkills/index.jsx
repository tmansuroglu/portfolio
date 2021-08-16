import React from 'react';
import './index.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import redux from '../../assets/images/redux-logo.svg';
import firebase from '../../assets/images/firebase-logo.svg';
import antDesign from '../../assets/images/ant-design-logo.svg';
import html from '../../assets/images/html-logo.svg';
import i18n from '../../assets/images/i18next-logo.svg';
import javascript from '../../assets/images/javascript-logo.svg';
import react from '../../assets/images/react-logo.svg';
import vue from '../../assets/images/vue-logo.svg';
import jest from '../../assets/images/jest-logo.svg';
import typescript from '../../assets/images/typescript-logo.svg';
import css from '../../assets/images/css-logo.svg';
import git from '../../assets/images/git-logo.svg';
import github from '../../assets/images/github-logo.svg';
import next from '../../assets/images/next-logo.svg';
import nuxt from '../../assets/images/nuxt-logo.svg';
import sass from '../../assets/images/sass-logo.svg';
import expo from '../../assets/images/expo-logo.svg';
import bootstrap from '../../assets/images/bootstrap-logo.svg';
import nodejs from '../../assets/images/nodejs-logo.svg';
import express from '../../assets/images/express-logo.svg';
import Skill from '../Skill';

const SKILLS = [
  <Skill title="JavaScript" rating={3} icon={javascript} />,
  <Skill title="React Native" rating={3} icon={react} />,
  <Skill title="CSS" rating={3} icon={css} />,
  <Skill title="HTML" rating={3} icon={html} />,
  <Skill title="Vue" rating={3} icon={vue} />,
  <Skill title="Nuxt" rating={3} icon={nuxt} />,
  <Skill title="Git" rating={3} icon={git} />,
  <Skill title="GitHub" rating={3} icon={github} />,
  <Skill title="Expo" rating={3} icon={expo} />,
  <Skill title="Ant Design" rating={3} icon={antDesign} />,
  <Skill title="Bootstrap" rating={3} icon={bootstrap} />,
  <Skill title="TypeScript" rating={2} icon={typescript} />,
  <Skill title="Redux" rating={2} icon={redux} />,
  <Skill title="Firebase" rating={2} icon={firebase} />,
  <Skill title="Next" rating={2} icon={next} />,
  <Skill title="Sass" rating={2} icon={sass} />,
  <Skill title="Jest" rating={2} icon={jest} />,
  <Skill title="i18next" rating={1} icon={i18n} />,
  <Skill title="NodeJs" rating={1} icon={nodejs} />,
  <Skill title="ExpressJs" rating={1} icon={express} />,
];

const TechnicalSkills = () => (
  <>
    <h3 id="technicalSkills">Technical Skills</h3>
    <div>
      <Swiper
        slidesPerView={10} // or 'auto'
        slidesPerColumn={2}
        slidesPerGroup={10}
        slidesPerColumnFill="row"
        className="swiper-container"
        spaceBetween={30}
      >
        {SKILLS.map((skill) => (
          <SwiperSlide>{skill}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default TechnicalSkills;
