import React from 'react';
import './index.css';
import { Container, Tabs, Tab } from 'react-bootstrap';

const Resume = () => {
    return (
        <Container className='resumeContainer'>
            <h1 className='homeTitle' id='resume'>
                Resume
            </h1>
            <div className='resumeTabs'>
                <Tabs defaultActiveKey='html'>
                    <Tab eventKey='html' title='View resume as HTML'>
                        <a
                            href='resume.pdf'
                            download
                            className='resumeDownloadLink'
                        >
                            Download Resume
                        </a>
                        <div className='resume homeText'>
                            <h1 className='resumeName'>Tarkan Mansuroğlu</h1>
                            <p className='resumeContact'>
                                <a href='tel:+905523600893'>
                                    +90 552 360 08 93
                                </a>{' '}
                                |{' '}
                                <a href='mailto: mansuroglu99@gmail.com'>
                                    mansuroglu99@gmail.com
                                </a>{' '}
                                |{' '}
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://github.com/tmansuroglu'
                                >
                                    Github
                                </a>{' '}
                                |{' '}
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://www.linkedin.com/in/tarkanmansuroglu/'
                                >
                                    LinkedIn
                                </a>
                            </p>
                            <p>
                                Front-end web developer with multidisciplinary
                                background. Graduated from Front-End Web
                                Development bootcamps of Flatiron School and
                                Re:Coded. Also studied international finance at
                                Eastern Mediterranean University. Working and
                                studying in international environments since
                                2013. Transitioned to coding because he loves
                                complex problems and learning.
                            </p>
                            <h3>TECHNICAL PROJECTS</h3>
                            <h4>
                                <strong>Juniper</strong>{' '}
                                <small>
                                    -{' '}
                                    <a
                                        href='https://github.com/ReCoded-Org/capstone-istanbul-juniper'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Github
                                    </a>{' '}
                                    |{' '}
                                    <a
                                        href='https://juniper-ist.netlify.app/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Demo
                                    </a>
                                </small>
                            </h4>
                            <span>
                                An educational website designed to teach youth
                                living in MENA region about environmental issues
                                through games.
                            </span>
                            <ul>
                                <li>Built with React</li>
                                <li>
                                    Created games with JavaScript, CSS, Ant
                                    Design and other small libraries
                                </li>
                                <li>Tested with Jest</li>
                                <li>Implemented AGILE methodologies</li>
                                <li>Used i18next for translations</li>
                                <li>
                                    Used Git and Github for version management
                                </li>
                            </ul>
                            <h4>
                                <strong>Foodcheck</strong>{' '}
                                <small>
                                    -{' '}
                                    <a
                                        href='https://github.com/tmansuroglu/Foodcheck'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Github
                                    </a>{' '}
                                    |{' '}
                                    <a
                                        href='https://foodcheck.netlify.app/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Demo
                                    </a>
                                </small>
                            </h4>
                            <span>
                                A web app designed to track and analyze diet and
                                dietary goals
                            </span>
                            <ul>
                                <li>Developed with React</li>
                                <li>Managed states with Redux</li>
                                <li>Provided data with Nutritionix API</li>
                                <li>Provided backend with Firebase</li>
                            </ul>
                            <h4>
                                <strong>TMDB</strong>{' '}
                                <small>
                                    -{' '}
                                    <a
                                        href='https://github.com/tmansuroglu/TMDB-Project'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Github
                                    </a>{' '}
                                    |{' '}
                                    <a
                                        href='https://tmdbproject.netlify.app/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        Demo
                                    </a>
                                </small>
                            </h4>
                            <span>Developing an IMDB clone</span>
                            <ul>
                                <li>Developed with vanilla JS</li>
                                <li>Created UI with Bootstrap</li>
                                <li>Provided data with TMDB API</li>
                            </ul>
                            <h3>TECHNICAL SKILLS</h3>
                            <p>
                                HTML, CSS, JavaScript, React, Redux, Firebase,
                                Git, Github, Bootstrap, Ant Design, i18next,
                                Firebase, API usage
                            </p>
                            <h3>EMPLOYMENT HISTORY</h3>
                            <h4>
                                <a
                                    target='_blank'
                                    href='https://www.recodedlabs.com/'
                                    rel='noreferrer'
                                >
                                    Re:Coded Labs
                                </a>
                            </h4>
                            <span>Junior Developer Intern, 2020</span>
                            <ul>
                                <li>
                                    Learned and practised HTML, CSS, JavaScript,
                                    React, Redux, Firebase, Git, Github,
                                    responsive design, AGILE etc.
                                </li>
                                <li>Built projects</li>
                            </ul>
                            <h4>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://fbe.emu.edu.tr/en/academic-units/banking-and-finance'
                                >
                                    Eastern Mediterranean University Banking and
                                    Finance Department
                                </a>
                            </h4>
                            <span>Assistant, 2018 - 2019</span>
                            <ul>
                                <li>
                                    Helped department communication
                                    (translations and paperwork)
                                </li>
                                <li>Managed archive</li>
                            </ul>
                            <h3>EDUCATION</h3>
                            <h4>
                                <strong>Re:Coded Bootcamp</strong>(
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://www.re-coded.com/'
                                >
                                    Re:Coded
                                </a>{' '}
                                +{' '}
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://flatironschool.com/'
                                >
                                    Flatiron School
                                </a>
                                ) - 2020
                            </h4>
                            <ul>
                                <li>
                                    Front End Web Development (HTML, CSS,
                                    JavaScript, React)
                                </li>
                                <li>
                                    5 month intense web development program run
                                    by Re:Coded with Flatiron School's
                                    curriculum.
                                </li>
                            </ul>
                            <h4>
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://www.emu.edu.tr/en'
                                >
                                    Eastern Mediterranean University
                                </a>{' '}
                                - 2019
                            </h4>
                            <ul>
                                <li>
                                    Degree: Bachelor of Science in International
                                    Finance
                                </li>
                                <li>Top student 4.00 out of 4.00 CGPA</li>
                            </ul>
                            <h3>LANGUAGES</h3>
                            <ul>
                                <li>English</li>
                                <li>Turkish</li>
                            </ul>
                        </div>
                    </Tab>
                    <Tab eventKey='pdf' title='View resume as PDF'>
                        <iframe
                            loading='eager'
                            src='resume.pdf'
                            title='resume'
                            className='resumePdf'
                        />
                    </Tab>
                </Tabs>
            </div>
        </Container>
    );
};

export default Resume;
