import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container>
            <h1 className='homeTitle'>Resume</h1>
            <a
                href='https://drive.google.com/file/d/1hYvgvIL-4xm-cn7JKFCq-CIULs9LJx8E/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='hrefLink'
            >
                Download resume PDF
            </a>
            <div id='resume' className='homeText'>
                resume here
            </div>
        </Container>
    );
};

export default Resume;
