import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "slides"
  };

  return (
    <div className="portfolio-details__hero">
      <h4>{project.title}</h4>
      <p>{project.info}</p>
      <div className="portfolio-details__group">
        <div className="portfolio-details__image-container">
          <Slider {...settings}>
            {project.images.map((image, id) => (
              <img
                src={image}
                alt=""
                key={id}
                className="portfolio-details__image"
              />
            ))}
          </Slider>
        </div>
        <div className="portfolio-details__info">
          {project.logo === null ? (
            <h1>{project.title}</h1>
          ) : (
            <img src={project.logo} alt="" className="logo__image" />
          )}

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
              href={`${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
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
              href={`${project.githubUrl}`}
              target="_blank"
              rel="noopener noreferrer"
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
