import React from 'react';
import './index.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Projects = () => {
    return (
        <>
            <h1 className='homeTitle' id='projects'>
                Projects
            </h1>
            <VerticalTimeline>
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
                    <h3 className='vertical-timeline-element-title'>Juniper</h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
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
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
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
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
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
                        E-Commerce
                    </h3>
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
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
                    <h4 className='vertical-timeline-element-subtitle'>
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    );
};

export default Projects;
