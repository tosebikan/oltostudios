import React from "react";
import "./PortfolioDetails.css";
import data from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUp,
  faExternalLinkAlt,
  faLink
} from "@fortawesome/free-solid-svg-icons";

function PortfolioDetailsScreen(props) {
  const project = data.projects.find((x) => x.id === props.match.params.id);

  return (
    <div className="portfolio-details__hero">
      <h4>{project.title}</h4>
      <p>{project.info}</p>
      <div className="portfolio-details__group">
        <div className="portfolio-details__image-container">
          <img
            src={project.images[0]}
            alt=""
            className="portfolio-details__image"
          />
        </div>
        <div className="portfolio-details__info">
          <img src={project.logo} alt="" className="logo__image" />
          <p>{project.description}</p>
          <h4>technical sheet</h4>
          <p>Technologies used to complete the project</p>
          <div className="tech_sheet">
            <ul className="property-details__list">
              {project.tech.map((tech, id) => (
                <li key={id}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="portfolio-details__resources">
            <a
              target="_blank"
              rel="noreferrer"
              href={`${project.url}`}
              className="project__link"
            >
              <button className="portfolio__github-button">
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  className="github-icon"
                />
                visit link
                <FontAwesomeIcon icon={faLink} className="link-icon" />
              </button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`${project.githubUrl}`}
              className="project__link"
            >
              <button className="portfolio__website-button">
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                source code
                <FontAwesomeIcon icon={faArrowUp} className="arrow-icon" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailsScreen;
