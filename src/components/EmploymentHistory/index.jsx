import React from 'react';
import './index.css';

const EmploymentHistory = () => {
  return (
    <>
      <h2 id='employmentHistory' className='homePageHeader'>
        Employment History
      </h2>
      <h4>
        <strong>Re:Coded Labs</strong>
      </h4>
      <span>Junior Developer Intern - 2020</span>
      <ul>
        <li>Built technical and soft skills</li>
        <li>
          Practiced AGILE Methodologies, pair programming and teamwork to build
          projects
        </li>
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
    </>
  );
};

export default EmploymentHistory;
