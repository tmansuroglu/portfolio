import React from 'react';
import { Row, Col, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import './index.css';

const ContactInfo = () => {
  const phonePopover = (
    <Popover id='popover-basic'>
      <Popover.Content>
        <Button href='tel:+905523600893' variant='link'>
          +90 552 360 08 93
        </Button>
      </Popover.Content>
    </Popover>
  );

  const emailPopover = (
    <Popover id='popover-basic'>
      <Popover.Content>
        <Button href='mailto: mansuroglu99@gmail.com' variant='link'>
          mansuroglu99@gmail.com
        </Button>
      </Popover.Content>
    </Popover>
  );

  return (
    <Row className='contactInfo'>
      <Col xs={4}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/tarkanmansuroglu/'
        >
          <i className='fab fa-linkedin-in fa-3x contactLinkedIn'></i>
        </a>
      </Col>
      <Col xs={4}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/tmansuroglu'
        >
          <i className='fab fa-github fa-3x contactGithub'></i>
        </a>
      </Col>
      <Col xs={4}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.instagram.com/tarkanmansuroglu/'
        >
          <i className='fab fa-instagram fa-3x contactInstagram'></i>
        </a>
      </Col>
      <Col xs={4}>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://twitter.com/T_Mansuroglu'
        >
          <i className='fab fa-twitter fa-3x contactTwitter'></i>
        </a>
      </Col>
      <Col xs={4}>
        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={phonePopover}
          rootClose={true}
          rootCloseEvent='click'
        >
          <i className='fas fa-mobile-alt fa-3x'></i>
        </OverlayTrigger>
      </Col>
      <Col xs={4}>
        <OverlayTrigger
          trigger='click'
          placement='bottom'
          overlay={emailPopover}
          rootClose={true}
          rootCloseEvent='click'
        >
          <i className='far fa-envelope fa-3x'></i>
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default ContactInfo;
