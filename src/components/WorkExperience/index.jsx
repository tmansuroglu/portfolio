import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './index.css';

const EmploymentHistory = () => {
  return (
    <>
      <h2 id='employmentHistory' className='homePageHeader'>
        Work Experience
      </h2>
      <p>
        Tarkan worked as junior developer intern for Re:Coded in 2020. His
        efforts were focused on improving his{' '}
        <AnchorLink offset='100' href='#technicalSkills'>
          technical skills
        </AnchorLink>
        , building{' '}
        <AnchorLink offset='100' href='#projects'>
          projects
        </AnchorLink>{' '}
        and soft skills(business communication, teamwork, agile product
        management, time management...).
      </p>
      <p>
        Before, he was peer teaching statistics, finance, economics and math to
        social science students.
      </p>
      <p>
        Also, he was working for banking and finance department of EMU as a
        student assistant. His main responsibilities were: contributing to
        department communication, archive management and translation.
      </p>
    </>
  );
};

export default EmploymentHistory;
