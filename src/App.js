import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="brand">
          <a href="/">oltostudios</a>
        </div>
        <div className="header-links">
          <FontAwesomeIcon icon={faSun} className="header-icon" />
          <button id="header-btn" className="header-button">
            &#9776;
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
