import React from "react";
import "./aboutScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

function AboutScreen() {
  return (
    <div className="about-hero">
      <div className="hero-text">
        <h1>Hello, my name is Tosin Ola.</h1>
        <p>A full-stack developer & UI | UX specialist.</p>
        <p>I design & develop immersive web & mobile applications. </p>
        <div>
          <button className="github-button">
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            Github
            <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
          </button>
          <button className="github-button">Send a message</button>
        </div>
        <div className="portfolio-button-container">
          <p>portfolio</p>
          <span>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="portfolio-button"
            />{" "}
          </span>
        </div>
      </div>

      <img src={require("../images/mac.png")} alt="" className="hero-image" />
    </div>
  );
}

export default AboutScreen;
