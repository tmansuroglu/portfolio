import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h1 className='homeTitle' id={'about'}>
                About
            </h1>
            <div className='homeText'>
                <p>
                    Tarkan Mansuroğlu is a front-end web developer. He started
                    learning coding by himself and continued his coding
                    education through “Re-Coded Front-End Web Development
                    Bootcamp”. Tarkan Mansuroğlu is a passionate learner and
                    enjoys complex problems.
                </p>
                <p>
                    His desire to tackle difficult things always made him stand
                    out. At age 20 he was severely obese and academically lost.
                    At 22 he dropped from 175kg to 95 kg, became a fitness
                    enthusiast and top finance student of his university. Later,
                    he graduated with highest CGPA and continued being a
                    physically active person. During these years he wanted to
                    figure out what he expected from life. While trying, he
                    developed an analytical mindset. Consequently, he got
                    attracted to coding.
                </p>
                <p>
                    He is currently looking for new challenges to conquer and
                    technologies to learn.
                </p>
            </div>
        </Container>
    );
};

export default About;
