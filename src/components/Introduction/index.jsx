import React from 'react';
import './index.css';
import Typical from 'react-typical';
import { Container } from 'react-bootstrap';

const Introduction = () => {
    return (
        <Container id='introduction' className='homeText'>
            <span className='name'>Tarkan Mansuroğlu</span>
            <Typical
                className='loop'
                steps={[
                    1500,
                    'Front-End Web Developer',
                    5000,
                    'Challenge Driven',
                    2000,
                    'Passionate Learner',
                    2000,
                    'Fitness Enthusiast',
                    2000,
                    'PC Enthusiast',
                    2000,
                    'Gamer',
                ]}
                loop={Infinity}
            />
        </Container>
    );
};

export default Introduction;
