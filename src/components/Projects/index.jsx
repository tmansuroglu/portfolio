import React from 'react';
import './index.css';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Container } from 'react-bootstrap';

const Projects = () => {
    return (
        <Container>
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
                    icon={
                        <i className='fas fa-project-diagram projectIcon'></i>
                    }
                >
                    <div className='homeText projectContent'>
                        <h4>Juniper</h4>
                        <a
                            href='https://github.com/ReCoded-Org/capstone-istanbul-juniper'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </a>
                        <br />
                        <a
                            href='https://juniper-ist.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Demo
                        </a>
                        <p>
                            <strong>Goal:</strong> teaching middle-eastern youth
                            about environmental problems through games.
                        </p>
                        <br />
                        <h5>My Responsibilities</h5>
                        <ul>
                            <li>Developing a memory game</li>
                            <li>Code reviewing</li>
                            <li>Bug bashing</li>
                            <li>Developing games page</li>
                            <li>Scrum master for 1 week</li>
                            <li>Helping colleagues whenever needed</li>
                            <li>Developing twitter section of homepage</li>
                        </ul>
                        <h5>Skills Applied</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Git and Github</li>
                            <li>AGILE Methodologies</li>
                            <li>Teamwork</li>
                            <li>Firebase</li>
                            <li>Ant Design</li>
                            <li>Responsive Design</li>
                            <li>Figma</li>
                            <li>Testing (Jest)</li>
                            <li>Routing</li>
                            <li>i18n</li>
                        </ul>
                    </div>
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
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={
                        <i className='fas fa-project-diagram projectIcon'></i>
                    }
                >
                    <div className='homeText projectContent'>
                        <h4>FoodCheck</h4>
                        <a
                            href='https://github.com/tmansuroglu/MohammadJundi-Tarkan-Project'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </a>
                        <br />
                        <a
                            href='https://foodcheck.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Demo
                        </a>
                        <p>
                            <strong>Goal:</strong> creating a quick and easy to
                            use weekly diet and calory tracker
                        </p>
                        <br />
                        <h5>My Responsibilities</h5>
                        <ul>
                            <li>App planning</li>
                            <li>Setting up redux</li>
                            <li>Setting up firebase</li>
                            <li>Setting up food API</li>
                            <li>Diet management page</li>
                            <li>Creating charts</li>
                            <li>Responsive design</li>
                            <li>Home page</li>
                            <li>Contact page</li>
                            <li>Login page</li>
                            <li>Register page</li>
                        </ul>
                        <h5>Skills Applied</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>API Usage</li>
                            <li>Firebase</li>
                            <li>Ant Design</li>
                            <li>Responsive Design</li>
                            <li>Git and Github</li>
                            <li>Chart.js</li>
                            <li>Routing</li>
                        </ul>
                    </div>
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
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={
                        <i className='fas fa-project-diagram projectIcon'></i>
                    }
                >
                    <div className='homeText projectContent'>
                        <h4>Portfolio</h4>
                        <a
                            href='https://github.com/tmansuroglu/portfolio'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </a>
                        <br />
                        <p>
                            <strong>Goal:</strong> building a portfolio website
                            to create an online presence.
                        </p>
                        <br />
                        <h5>My Responsibilities</h5>
                        <ul>
                            <li>Solo Project</li>
                        </ul>
                        <h5>Skills Applied</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Emailjs</li>
                            <li>Bootstrap</li>
                            <li>Responsive Design</li>
                            <li>Git and Github</li>
                            <li>Testing (Jest)</li>
                        </ul>
                    </div>
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
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={
                        <i className='fas fa-project-diagram projectIcon'></i>
                    }
                >
                    <div className='homeText projectContent'>
                        <h4>TMDB</h4>
                        <a
                            href='https://github.com/tmansuroglu/TMDB-Project'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github link
                        </a>
                        <br />
                        <a
                            href='https://tmdbproject.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Demo
                        </a>
                        <p>
                            <strong>Goal:</strong> creating an IMDB clone.
                        </p>
                        <br />
                        <h5>My Responsibilities</h5>
                        <ul>
                            <li>Setting up TMDB API</li>
                            <li>Movie/Tv Series Page</li>
                            <li>Actor/Actress Page</li>
                            <li>Search Page</li>
                            <li>Main Page</li>
                            <li>Navbar Dropdowns</li>
                            <li>Visual Design</li>
                        </ul>
                        <h5>Skills Applied</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Bootstrap</li>
                            <li>Responsive Design</li>
                            <li>API Usage</li>
                        </ul>
                    </div>
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
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={
                        <i className='fas fa-project-diagram projectIcon'></i>
                    }
                >
                    <div className='homeText projectContent'>
                        <h4>Madlibz</h4>
                        <a
                            href='https://github.com/tmansuroglu/Madlibzz'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github link
                        </a>
                        <br />
                        <a
                            href='https://madlibz.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Demo
                        </a>
                        <p>
                            <strong>Goal:</strong> creating a Madlibz game.
                        </p>
                        <br />
                        <h5>My Responsibilities</h5>
                        <ul>
                            <li>Game Logic</li>
                            <li>Setting up i18n</li>
                            <li>Visual Design</li>
                            <li>Responsive Design</li>
                        </ul>
                        <h5>Skills Applied</h5>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Regular Expression</li>
                            <li>i18n</li>
                            <li>Bootstrap</li>
                            <li>Visual Design</li>
                            <li>Responsive Design</li>
                            <li>Teamwork</li>
                        </ul>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        color: 'white',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  white',
                    }}
                    iconStyle={{
                        background: 'white',
                    }}
                    icon={<i className='fas fa-play startIcon'></i>}
                ></VerticalTimelineElement>
            </VerticalTimeline>
        </Container>
    );
};

export default Projects;
