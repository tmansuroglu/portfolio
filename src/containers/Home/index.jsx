import React from 'react';
import Introduction from '../../components/Introduction';
import About from '../About';
import Projects from '../Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div style={{ paddingTop: '80px' }}>
    <Introduction />
    <About />
    <Projects />
  </div>
);

export default Home;
