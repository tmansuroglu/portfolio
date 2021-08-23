import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const EmploymentHistory = () => (
  <>
    <h3 id="employmentHistory">Work Experience</h3>
    <p>
      Tarkan is working for{' '}
      <a href="https://smartup.network/" target="_blank" rel="noreferrer">
        Smartup Network(SN)
      </a>{' '}
      as front-end developer since February 2021. Although his training was on
      web development, Tarkan became a mobile developer while working for SN.
      Checkout{' '}
      <AnchorLink offset="100" href="#projects">
        projects
      </AnchorLink>{' '}
      to see his professional efforts.
    </p>
    <p>
      Before Smartup Network, Tarkan worked as junior developer intern for
      Re:Coded in 2020. His efforts were focused on improving his{' '}
      <AnchorLink offset="100" href="#technicalSkills">
        technical skills
      </AnchorLink>
      , building{' '}
      <AnchorLink offset="100" href="#projects">
        projects
      </AnchorLink>{' '}
      and soft skills(business communication, teamwork, agile product
      management, time management...).
    </p>
    <p>
      During university, he was peer teaching statistics, finance, economics and
      math to social science students. Also, he was working for banking and
      finance department of EMU as a student assistant. His main
      responsibilities were: contributing to department communication, archive
      management and translation.
    </p>
  </>
);

export default EmploymentHistory;
