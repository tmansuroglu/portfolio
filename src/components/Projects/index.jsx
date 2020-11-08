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
                    date='Oct-Nov 2020'
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i class='fas fa-project-diagram projectIcon'></i>}
                >
                    <div className='projectContent'>JUNIPER</div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'white',
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
                    <div className='projectContent'>FoodCheck</div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'white',
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
                    <div className='projectContent'>TMDB</div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        background: 'white',
                        color: 'white',
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
                    <div className='projectContent'>Madlibz</div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Projects;
