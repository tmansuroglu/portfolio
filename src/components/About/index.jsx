import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container id='about'>
      <h1 className='homeTitle'>About</h1>
      <div className='homeText'>
        <h2 id='whoIsTarkan'>Who is Tarkan Mansuroğlu?</h2>
        <p>
          Tarkan Mansuroğlu is a front-end web developer. He started learning
          coding by himself and continued his coding education through “Re-Coded
          Front-End Web Development Bootcamp”. He became a coder because he is a
          lifelong learner and addicted to the sensation that comes after
          solving a tech problem.
        </p>
        <p>
          He discovered his appetite for challenges in his early 20s. At age 20,
          he was severely obese and academically lost. At 22 he dropped from
          175kg to 95 kg, became a fitness enthusiast and top finance student of
          his university. Later, he graduated with highest CGPA and continued
          being a physically active person.
        </p>
        <p>
          During these years, he wanted to figure out what he expected from
          life. While searching for his purpose, he realized that to build his
          future, first he needs to understand himself. This process helped him
          develop an analytical mindset. Consequently, his new mentality lead
          him to coding.
        </p>
        <p>
          He is currently looking for new challenges to conquer and technologies
          to learn.
        </p>
        <h2 id='education'>Education</h2>
        <h4>
          <strong>Re:Coded Bootcamp</strong>(
          <a target='_blank' rel='noreferrer' href='https://www.re-coded.com/'>
            Re:Coded
          </a>{' '}
          +{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://flatironschool.com/'
          >
            Flatiron School
          </a>
          ) - 2020
        </h4>
        <ul>
          <li>Front End Web Development (HTML, CSS, JavaScript, React)</li>
          <li>
            5 month intense web development program run by Re:Coded with
            Flatiron School's curriculum.
          </li>
        </ul>
        <h4>
          <a target='_blank' rel='noreferrer' href='https://www.emu.edu.tr/en'>
            Eastern Mediterranean University
          </a>{' '}
          - 2019
        </h4>
        <ul>
          <li>Degree: Bachelor of Science in International Finance</li>
          <li>Top student 4.00 out of 4.00 CGPA</li>
        </ul>
        <h2 id='languages'>Languages</h2>
        <ul>
          <li>English</li>
          <li>Turkish</li>
        </ul>
        <h2 id='technicalSkills'>Technical Skills</h2>
        <p>
          HTML, CSS, JavaScript, React, Redux, Firebase, Git, Github, Bootstrap,
          Ant Design, i18next, Firebase, API usage
        </p>
        <h2 id='employmentHistory'>Employment History</h2>
        <h4>
          <a
            target='_blank'
            href='https://www.recodedlabs.com/'
            rel='noreferrer'
          >
            Re:Coded Labs
          </a>
        </h4>
        <span>Junior Developer Intern, 2020</span>
        <ul>
          <li>
            Learned and practised HTML, CSS, JavaScript, React, Redux, Firebase,
            Git, Github, responsive design, AGILE etc.
          </li>
          <li>Built projects</li>
        </ul>
        <h4>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://fbe.emu.edu.tr/en/academic-units/banking-and-finance'
          >
            Eastern Mediterranean University Banking and Finance Department
          </a>
        </h4>
        <span>Assistant - 2018-2019</span>
        <ul>
          <li>Helped department communication (translations and paperwork)</li>
          <li>Managed archive</li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
