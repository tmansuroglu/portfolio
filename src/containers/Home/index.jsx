import React from 'react';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Projects from '../../components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div style={{ paddingBottom: '20px' }}>
    <Introduction />
    <About />
    <Projects />
  </div>
);

export default Home;
