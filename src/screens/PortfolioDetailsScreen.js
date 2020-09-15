import React from "react";
import "./PortfolioDetails.css";
import data from "../data";

function PortfolioDetailsScreen(props) {
  console.log(props.match.params.id);

  const project = data.projects.find((x) => x.id === props.match.params.id);

  return (
    <div className="portfolio-details__hero">
      <h4>{project.title}</h4>
      <p>SpineUp mobile React-Native application </p>
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
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailsScreen;
