import React from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Resume from '../../components/Resume';

const Home = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Introduction />
            <About />
            <Projects />
            <Resume />
        </>
    );
};

export default Home;
