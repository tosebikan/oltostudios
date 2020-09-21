import React from "react";
import { Link } from "react-router-dom";
import "./aboutScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faAngleDoubleRight,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

function AboutScreen() {
  return (
    <div className="about-hero">
      <div className="hero-text">
        <h1>Hello, my name is Tosin Ola.</h1>
        <p>A full-stack developer & UI | UX specialist.</p>
        <p>I design & develop immersive web & mobile applications. </p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tosebikan"
          >
            <button className="github-button">
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              Github
              <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
            </button>
          </a>

          <Link to="contact">
            <button className="github-button">
              <FontAwesomeIcon icon={faPaperPlane} className="github-icon" />
              Send a message
            </button>{" "}
          </Link>
        </div>

        <Link to="/portfolio" className="portfolio-button-container">
          <p>portfolio</p>
          <span>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="portfolio-button"
            />
          </span>
        </Link>
      </div>
      <div className="hero-image__container">
        <img src={require("../images/mac.png")} alt="" className="hero-image" />
      </div>
    </div>
  );
}

export default AboutScreen;
