import React from 'react';
import './index.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Projects = () => {
    return (
        <div className='container'>
            <h1 className='homeTitle' id='projects'>
                Projects
            </h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'white',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  white',
                    }}
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i class='fas fa-project-diagram projectIcon'></i>}
                >
                    <div className='projectContent'>
                        <h3 className='vertical-timeline-element-title'>
                            JUNIPER
                        </h3>
                        <p></p>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'black',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  white',
                    }}
                    date='Oct-Nov 2020'
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i class='fas fa-project-diagram projectIcon'></i>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        FoodCheck
                    </h3>
                    <p></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'black',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  white',
                    }}
                    date='Oct-Nov 2020'
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i class='fas fa-project-diagram projectIcon'></i>}
                >
                    <h3 className='vertical-timeline-element-title'>
                        TMDB Project
                    </h3>
                    <p></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'black',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  white',
                    }}
                    date='Oct-Nov 2020'
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i class='fas fa-project-diagram projectIcon'></i>}
                >
                    <h3 className='vertical-timeline-element-title'>Madlibz</h3>
                    <p></p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Projects;
