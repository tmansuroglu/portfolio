import React, { useState } from 'react';
import './index.css';
import { Container, Button, Collapse, Row, Col } from 'react-bootstrap';

const Resume = () => {
    const [isCollapsableOpen, setIsCollapsableOpen] = useState(false);
    return (
        <Container className='resumeContainer'>
            <h1 className='homeTitle' id='resume'>
                Resume
            </h1>
            <Row>
                <Col xs={12} md={3} className='resumeButtonCol'>
                    <a
                        href='https://docs.google.com/document/d/1ZJmw9fsLZJDZKE32afpMMZXos12eTN-c29GJtLfOp1Q/edit?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <Button variant='light' className='resumeButtonColItem'>
                            View resume in Google Docs
                        </Button>
                    </a>
                </Col>
                <Col xs={12} md={3}>
                    <Button
                        variant='light'
                        onClick={() => setIsCollapsableOpen(!isCollapsableOpen)}
                        aria-controls='resumePdfCollapsable'
                        aria-expanded={isCollapsableOpen}
                        className='resumeButtonColItem viewPdf'
                    >
                        View Resume as PDF
                    </Button>
                </Col>
                <Col xs={12} md={3}>
                    <a
                        href='https://drive.google.com/file/d/1hYvgvIL-4xm-cn7JKFCq-CIULs9LJx8E/view?usp=sharing'
                        target='_blank'
                        rel='noreferrer'
                        className='downloadResumePdf'
                    >
                        <Button variant='light' className='resumeButtonColItem'>
                            Download Resume From Google Drive
                        </Button>
                    </a>
                </Col>
            </Row>
            <Collapse in={isCollapsableOpen} id='resumePdfCollapsable'>
                <div>
                    <iframe
                        src='resume.pdf'
                        title='resume'
                        className='resumePdf'
                    />
                </div>
            </Collapse>
            <div className='resume homeText'>asdasd</div>
        </Container>
    );
};

export default Resume;
