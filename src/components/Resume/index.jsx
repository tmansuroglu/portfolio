import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container>
            <h1 className='homeTitle'>Resume</h1>
            <a
                href='https://docs.google.com/document/d/1ZJmw9fsLZJDZKE32afpMMZXos12eTN-c29GJtLfOp1Q/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='googleDocsLink'
            >
                View resume in Google Docs
            </a>
            <iframe
                src='resume.pdf'
                title='resume'
                id='resume'
                className='resume'
            />
        </Container>
    );
};

export default Resume;
