import React from 'react';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyProject from '../../components/CompanyProject';

const Home = () => (
  <div style={{ paddingBottom: '20px' }}>
    <Introduction />
    <About />
    <CompanyProject />
  </div>
);

export default Home;
