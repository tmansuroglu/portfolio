import React from "react";
import "./index.css";
import Typical from "react-typical";
import { Container, Image } from "react-bootstrap";
import tarkanImage from "../../img/tarkanImage.png";

const Introduction = () => {
  return (
    <Container id="introduction" className="homeText intro-container">
      <div className="image-container">
        <Image
          src={tarkanImage}
          className="tarkanImage"
          alt="tarkan mansuroğlu's picture"
          roundedCircle
          fluid
        />
      </div>
      <div className="text-container">
        <h1 className="name">Tarkan Mansuroğlu</h1>
        <Typical
          className="loop"
          steps={[
            1500,
            "Front-End Web Developer",
            5000,
            "Challenge Driven",
            2000,
            "Passionate Learner",
            2000,
            "Fitness Enthusiast",
            2000,
            "PC Enthusiast",
            2000,
            "Gamer",
          ]}
          loop={Infinity}
        />
      </div>
    </Container>
  );
};

export default Introduction;
