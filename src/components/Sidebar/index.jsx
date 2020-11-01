import React from 'react';
import './index.css';

const Sidebar = () => {
    return (
        <div className='sidebar float-left d-flex flex-column-reverse'>
            <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com'
            >
                <i class='fab fa-instagram icon fa-3x'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.twitter.com'>
                <i class='fab fa-twitter icon fa-3x'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.github.com'>
                <i class='fab fa-github icon fa-3x'></i>
            </a>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com'>
                <i class='fab fa-linkedin-in icon fa-3x'></i>
            </a>
        </div>
    );
};

export default Sidebar;
