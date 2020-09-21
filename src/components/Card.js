import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ title, tech, link, image1, image2 }) {
  return (
    <Link to={link}>
      <div className="card-container">
        <img src={image1} alt="" className="card-image" />
        <h1 className="card-image-text">{title}</h1>
        <img src={image2} alt="" className="card-image2" />
        <div className="card-tech">
          <p>{tech}</p>
          <p>... see more</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
