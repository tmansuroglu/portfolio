import React from 'react';
import { Row } from 'react-bootstrap';
import './index.css';
import reduxLogo from '../../img/reduxLogo.svg';
import firebaseLogo from '../../img/firebaseLogo.svg';
import antDesignLogo from '../../img/antDesignLogo.svg';
import htmlLogo from '../../img/htmlLogo.svg';
import jestLogo from '../../img/jestLogo.svg';
import i18nLogo from '../../img/i18nLogo.svg';

const TechnicalSkills = () => {
  return (
    <>
      <h2 id='technicalSkills' className='homePageHeader'>
        Technical Skills
      </h2>
      <Row className='justify-content-around'>
        <div className='skillDiv'>
          HTML5 <br />
          <img src={htmlLogo} alt='html logo' className='svgIcon' />
        </div>
        <div className='skillDiv'>
          CSS <br />
          <i class='fab fa-css3-alt skillIcon cssLogo'></i>
        </div>
        <div className='skillDiv'>
          JavaScript <br />
          <i class='fab fa-js-square skillIcon javaScriptLogo'></i>
        </div>
        <div className='skillDiv'>
          React <br />
          <i class='fab fa-react skillIcon reactLogo'></i>
        </div>
        <div className='skillDiv'>
          Git <br />
          <i class='fab fa-git skillIcon gitLogo'></i>
        </div>
        <div className='skillDiv'>
          Github <br />
          <i class='fab fa-github skillIcon'></i>
        </div>
        <div className='skillDiv'>
          Bootstrap <br />
          <i class='fab fa-bootstrap skillIcon bootstrapLogo'></i>
        </div>
        <div className='skillDiv'>
          Ant Design <br />
          <img src={antDesignLogo} alt='ant design logo' className='svgIcon' />
        </div>
        <div className='skillDiv'>
          Firebase <br />
          <img src={firebaseLogo} alt='firebase logo' className='svgIcon' />
        </div>
        <div className='skillDiv'>
          Redux <br />
          <img src={reduxLogo} alt='redux logo' className='svgIcon' />
        </div>
        <div className='skillDiv'>
          i18next <br />
          <img src={i18nLogo} alt='i18n logo' className='svgIcon' />
        </div>
        <div className='skillDiv'>
          Jest <br />
          <img src={jestLogo} alt='jest logo' className='svgIcon' />
        </div>
      </Row>
    </>
  );
};

export default TechnicalSkills;
