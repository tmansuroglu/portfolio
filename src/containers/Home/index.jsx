import React from 'react';
import './index.css';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Introduction from '../../components/Introduction';
import About from '../About';
import Projects from '../Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import tarkanImage from '../../img/tarkanImage.png';
import { Image, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Introduction />
      <Container className='tarkanDiv'>
        <Image
          src={tarkanImage}
          className='tarkanImage'
          alt="tarkan mansuroğlu's picture"
          roundedCircle
          fluid
        />
      </Container>
      <About />
      <Projects />
    </>
  );
};

export default Home;
