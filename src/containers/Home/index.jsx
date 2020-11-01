import React from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Introduction from '../../components/Introduction';
import About from '../../components/About';

const Home = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Introduction />
            <About />
        </>
    );
};

export default Home;
