import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container id='about'>
            <h1 className='homeTitle'>About</h1>
            <div className='homeText'>
                <p>
                    Tarkan Mansuroğlu is a front-end web developer. He started
                    learning coding by himself and continued his coding
                    education through “Re-Coded Front-End Web Development
                    Bootcamp”. He became a coder because he is a lifelong
                    learner and addicted to the sensation that comes after
                    solving a tech problem.
                </p>
                <p>
                    He discovered his appetite for challenges in his early 20s.
                    At age 20, he was severely obese and academically lost. At
                    22 he dropped from 175kg to 95 kg, became a fitness
                    enthusiast and top finance student of his university. Later,
                    he graduated with highest CGPA and continued being a
                    physically active person.
                </p>
                <p>
                    During these years, he wanted to figure out what he expected
                    from life. While searching for his purpose, he realized that
                    to build his future, first he needs to decypher himself.
                    This process helped him develop an analytical mindset.
                    Consequently, his new mentality lead him to coding.
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
