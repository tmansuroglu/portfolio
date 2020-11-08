import React from 'react';
import './index.css';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const Sidebar = () => {
    const phonePopover = (
        <Popover id='popover-basic'>
            <Popover.Content>
                <span>+90 552 360 08 93 </span>
            </Popover.Content>
        </Popover>
    );

    const emailPopover = (
        <Popover id='popover-basic'>
            <Popover.Content>
                <span>tarkanmansuroglu@hotmail.com</span>
            </Popover.Content>
        </Popover>
    );
    return (
        <div className='sidebar float-left d-flex flex-column-reverse'>
            <div className='iconContainer'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.instagram.com/tarkanmansuroglu/'
                >
                    <i class='fab fa-instagram icon fa-3x'></i>
                </a>
            </div>
            <div className='iconContainer'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.twitter.com'
                >
                    <i class='fab fa-twitter icon fa-3x'></i>
                </a>
            </div>
            <div className='iconContainer'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/tmansuroglu'
                >
                    <i class='fab fa-github icon fa-3x'></i>
                </a>
            </div>
            <div className='iconContainer'>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/tarkan-mansuro%C4%9Flu-3385301bb/'
                >
                    <i class='fab fa-linkedin-in icon fa-3x'></i>
                </a>
            </div>
            <div className='iconContainer'>
                <OverlayTrigger
                    trigger='click'
                    placement='right'
                    overlay={emailPopover}
                >
                    <i class='fas fa-envelope-open icon fa-3x'></i>
                </OverlayTrigger>
            </div>
            <div className='iconContainer'>
                <OverlayTrigger
                    trigger='click'
                    placement='right'
                    overlay={phonePopover}
                >
                    <i class='fas fa-phone fa-3x icon'></i>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Sidebar;
