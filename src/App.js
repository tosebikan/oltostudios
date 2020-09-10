import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faAddressCard,
  faAddressBook,
  faMobile,
  faTimes,
  faBars,
  faGlobe
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import AboutScreen from "./screens/AboutScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import MobilePortfolioScreen from "./screens/MobilePortfolioScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  const [click, setClick] = useState(false);
  const toggle = () => {
    setClick(!click);
    document.querySelector(".sidebar").classList.toggle("open");
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <Link to="/">oltostudios</Link>
          </div>
          <div className="header-links">
            <FontAwesomeIcon icon={faSun} className="header-icon" />
            <button id="header-btn" className="header-button" onClick={toggle}>
              {click ? (
                <FontAwesomeIcon icon={faTimes} style={{ color: "#fff" }} />
              ) : (
                <FontAwesomeIcon icon={faBars} style={{ color: "#000" }} />
              )}
            </button>
          </div>
        </header>
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="/" onClick={toggle}>
                <FontAwesomeIcon icon={faAddressCard} className="link-icon" />
                about
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={toggle}>
                <FontAwesomeIcon icon={faGlobe} className="link-icon" />
                portfolio
              </Link>
            </li>
            <li>
              <Link to="/mobile-portfolio" onClick={toggle}>
                <FontAwesomeIcon icon={faMobile} className="link-icon" />
                portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggle}>
                <FontAwesomeIcon icon={faAddressBook} className="link-icon" />
                contact
              </Link>
            </li>
          </ul>
          <hr className="sidebar__hr" />
          <div className="sidebar__profile">
            <img
              src={require("./images/profile.jpg")}
              alt=""
              className="profile__image"
            />
            <p>Tosin Ola.</p>
          </div>
        </aside>

        <main>
          <div>
            <Route path="/" component={AboutScreen} exact={true} />
            <Route path="/portfolio" component={PortfolioScreen} />
            <Route path="/mobile-portfolio" component={MobilePortfolioScreen} />
            <Route path="/contact" component={ContactScreen} exact={true} />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
