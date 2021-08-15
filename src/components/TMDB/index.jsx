import React from "react";
import { Col, Row } from "react-bootstrap";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TMDB = () => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={"Sept 2020"}
      dateClassName={"date"}
      contentStyle={{
        background: "white",
        color: "white",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  white",
      }}
      iconStyle={{
        background: "white",
      }}
      icon={<i className="fas fa-project-diagram projectIcon"></i>}
    >
      <div className="homeText projectContent">
        <h4>TMDB</h4>
        <small>Team Project</small> <br />
        <a
          href="https://github.com/tmansuroglu/TMDB-Project"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        |{" "}
        <a
          href="https://tmdbproject.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
        <p className="projectText">
          <strong>Goal:</strong> creating an IMDB clone to learn object oriented
          programming.
        </p>
        <br />
        <Row>
          <Col xs={12} md={6}>
            <h5>Skills Applied</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Responsive Design</li>
              <li>API Usage</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            <h5>My Responsibilities</h5>
            <ul>
              <li>Setting up TMDB API</li>
              <li>Movie/Tv Series Page</li>
              <li>Actor/Actress Page</li>
              <li>Search Page</li>
              <li>Main Page</li>
              <li>Navbar Dropdowns</li>
              <li>Visual Design</li>
            </ul>
          </Col>
        </Row>
      </div>
    </VerticalTimelineElement>
  );
};

export default TMDB;
