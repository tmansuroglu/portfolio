import React from 'react';
import './index.css';
import Typical from 'react-typical';

const Introduction = () => {
    return (
        <div id='introduction' className='homeText'>
            <div>
                <span className='name'>Tarkan Mansuroğlu,</span>
            </div>
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
        </div>
    );
};

export default Introduction;
