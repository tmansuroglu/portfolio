import React from 'react';
import './index.css';

const Education = () => {
  return (
    <>
      <h2 id='education'>Education</h2>
      <h4>
        <strong>Re:Coded Bootcamp</strong>(
        <a target='_blank' rel='noreferrer' href='https://www.re-coded.com/'>
          Re:Coded
        </a>{' '}
        +{' '}
        <a target='_blank' rel='noreferrer' href='https://flatironschool.com/'>
          Flatiron School
        </a>
        ) - 2020
      </h4>
      <ul>
        <li>Front End Web Development (HTML, CSS, JavaScript, React)</li>
        <li>
          5 month intense web development program run by Re:Coded with Flatiron
          School's curriculum.
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
    </>
  );
};

export default Education;
