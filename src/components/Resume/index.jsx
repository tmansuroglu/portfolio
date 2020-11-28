import React, { useRef, useEffect } from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import webViewer from '@pdftron/webviewer';

const Resume = () => {
    const viewerDiv = useRef(null);

    useEffect(() => {
        webViewer(
            { path: 'lib', initialDoc: 'resume.pdf', isReadOnly: true },
            viewerDiv.current
        );
    }, []);
    return (
        <Container>
            <h1 className='homeTitle' id='resume'>
                Resume
            </h1>
            <div className='webViewer' ref={viewerDiv}></div>
        </Container>
    );
};

export default Resume;
