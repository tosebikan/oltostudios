import React from "react";
import "./card.css";

function Card() {
  return (
    <div className="card-container">
      <img
        src={require("../images/webimg.png")}
        alt=""
        className="card-image"
      />
      <h1 className="card-image-text">RichhomesGH</h1>
      <img
        src={require("../images/web2img.png")}
        alt=""
        className="card-image2"
      />
      <div className="card-tech">
        <p>Full-Stack</p>
        <p>Front-End</p>
        <p>Back-End</p>
        <p>React.js</p>
      </div>
    </div>
  );
}

export default Card;
