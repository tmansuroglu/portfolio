import React from 'react';
import { Row } from 'react-bootstrap';
import './index.scss';
import reduxLogo from '../../assets/images/reduxLogo.svg';
import firebaseLogo from '../../assets/images/firebaseLogo.svg';
import antDesignLogo from '../../assets/images/antDesignLogo.svg';
import htmlLogo from '../../assets/images/htmlLogo.svg';
import i18nLogo from '../../assets/images/i18nLogo.svg';

const TechnicalSkills = () => (
  <>
    <h2 id="technicalSkills">Technical Skills</h2>
    <Row className="skillRow">
      <div className="skillDiv">
        HTML5 <br />
        <img src={htmlLogo} alt="html logo" className="svgIcon" />
      </div>
      <div className="skillDiv">
        CSS <br />
        <i className="fab fa-css3-alt skillIcon cssLogo"></i>
      </div>
      <div className="skillDiv">
        JavaScript <br />
        <i className="fab fa-js-square skillIcon javaScriptLogo"></i>
      </div>
      <div className="skillDiv">
        React <br />
        <i className="fab fa-react skillIcon reactLogo"></i>
      </div>
      {/* <div className='skillDiv'>
    Git <br />
    <i className='fab fa-git skillIcon gitLogo'></i>
  </div> */}
      <div className="skillDiv">
        Github <br />
        <i className="fab fa-github skillIcon"></i>
      </div>
      <div className="skillDiv">
        Bootstrap <br />
        <i className="fab fa-bootstrap skillIcon bootstrapLogo"></i>
      </div>
      <div className="skillDiv">
        Ant Design <br />
        <img src={antDesignLogo} alt="ant design logo" className="svgIcon" />
      </div>
      <div className="skillDiv">
        Firebase <br />
        <img src={firebaseLogo} alt="firebase logo" className="svgIcon" />
      </div>
      <div className="skillDiv">
        Redux <br />
        <img src={reduxLogo} alt="redux logo" className="svgIcon" />
      </div>
      <div className="skillDiv">
        i18next <br />
        <img src={i18nLogo} alt="i18n logo" className="svgIcon" />
      </div>
      {/* <div className='skillDiv'>
    Jest <br />
    <img src={jestLogo} alt='jest logo' className='svgIcon' />
  </div> */}
    </Row>
  </>
);

export default TechnicalSkills;
