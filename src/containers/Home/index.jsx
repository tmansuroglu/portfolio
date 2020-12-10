import React from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Introduction from '../../components/Introduction';
import About from '../About';
import Projects from '../../components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Introduction />
      <About />
      <Projects />
    </>
  );
};

export default Home;
