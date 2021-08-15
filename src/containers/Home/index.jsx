import React from 'react';
import Navbar from '../../components/Navbar';
import Introduction from '../../components/Introduction';
import About from '../About';
import Projects from '../Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div>
    <Navbar />
    <Introduction />
    <About />
    <Projects />
  </div>
);

export default Home;
