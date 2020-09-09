import React from "react";
import "./card.css";

function Card({ title, tech }) {
  return (
    <div className="card-container">
      <img
        src={require("../images/webimg.png")}
        alt=""
        className="card-image"
      />
      <h1 className="card-image-text">{title}</h1>
      <img
        src={require("../images/web2img.png")}
        alt=""
        className="card-image2"
      />
      <div className="card-tech">
        <p>{tech}</p>
        <p>... see more</p>
      </div>
    </div>
  );
}

export default Card;
