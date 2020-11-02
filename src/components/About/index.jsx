import React from 'react';
import './index.css';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1 className='homeTitle' id={'about'}>
                About
            </h1>
            <div className='homeText'>
                <p>
                    Tarkan Mansuroğlu is a front-end web developer. He started
                    learning coding by himself and continued his coding
                    education with “Re-Coded Front-End Web Development
                    Bootcamp”. Tarkan Mansuroğlu is a passionate learner and
                    enjoys solving complex problems. When, he started coding, he
                    realized that a programmer never stops learning and always
                    after complex problems. That moment of revelation was
                    unforgettable for him. Because, realized what he should do
                    for rest of his life.
                </p>
                <p>
                    His desire to tackle difficult things always made him stand
                    out. At age 20 he was severely obese, depressed and
                    academically lost. At 22 he dropped from 175kg to 95 kg,
                    beat depression and became the top finance student of his
                    university. But he didn’t stop there. He started
                    bodybuilding and powerlifting. Later, he graduated as top
                    student from university and continued working out for years.
                    During these years he wanted to figure out what he expected
                    from life. This led him to develop an analytical mindset and
                    consequently ended up becoming a programmer.
                </p>
                <p>
                    He is currently looking for new challenges to conquer and
                    technologies to learn. You can reach him from{' '}
                    {
                        <Router>
                            <HashLink
                                smooth
                                to='#contact'
                                className='text-light interactiveText'
                            >
                                here
                            </HashLink>
                        </Router>
                    }
                    .
                </p>
            </div>
        </>
    );
};

export default About;
