import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./portfolio.css";
import Card from "../components/Card";
import data from "../data";

function PortfolioScreen() {
  const [active, setActive] = useState("Show-All");
  const webProjects = data.projects.filter((x) => x.type === "web");

  const react = webProjects.filter((x) => x.tech.includes("React"));
  const frontEnd = webProjects.filter((x) => x.tech.includes("Front-End"));
  const fullStack = webProjects.filter((x) => x.tech.includes("Full-Stack"));
  const backEnd = webProjects.filter((x) => x.tech.includes("Back-End"));
  const redux = webProjects.filter((x) => x.tech.includes("Redux"));
  const mongoDB = webProjects.filter((x) => x.tech.includes("MongoDB"));
  const html5 = webProjects.filter((x) => x.tech.includes("HTML5"));

  const bootstrap = webProjects.filter((x) => x.tech.includes("Bootstrap"));
  const uiUx = webProjects.filter((x) => x.tech.includes("UI/UX"));
  const firebase = webProjects.filter((x) => x.tech.includes("Firebase"));

  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.id);
  };
  return (
    <div className="portfolio-hero">
      <h1>Web Developer Portfolio</h1>
      <p>
        Checkout my latest web development projects, from UI/UX design with
        sketch to coding with React.js, Redux, Node.js, Mongodb.
      </p>
      <Tabs>
        <TabList className="tablist-container">
          {data.webTech.map((techStack) => (
            <Tab className="tablist" key={techStack.tech}>
              <button
                id={techStack.tech}
                className={
                  active === techStack.tech ? "active" : "tablist-button"
                }
                onClick={handleClick}
              >
                {techStack.tech}
              </button>
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <h4>Showing All</h4>
          <div className="tab-gallery">
            {webProjects.map((web) => (
              <Card
                link={`portfolio-details${web.id}`}
                key={web.id}
                title={web.title}
                tech={web.tech.slice(0, 4).join(", ")}
                image1={web.images[0]}
                image2={web.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>React.js</h4>
          <div className="tab-gallery">
            {react.map((react) => (
              <Card
                link={`portfolio-details${react.id}`}
                key={react.id}
                title={react.title}
                tech={react.tech.slice(0, 4).join(", ")}
                image1={react.images[0]}
                image2={react.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Front-End</h4>
          <div className="tab-gallery">
            {frontEnd.map((frontEnd) => (
              <Card
                link={`portfolio-details${frontEnd.id}`}
                key={frontEnd.id}
                title={frontEnd.title}
                tech={frontEnd.tech.slice(0, 4).join(", ")}
                image1={frontEnd.images[0]}
                image2={frontEnd.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Full-Stack</h4>
          <div className="tab-gallery">
            {fullStack.map((fullStack) => (
              <Card
                link={`portfolio-details${fullStack.id}`}
                key={fullStack.id}
                title={fullStack.title}
                tech={fullStack.tech.slice(0, 4).join(", ")}
                image1={fullStack.images[0]}
                image2={fullStack.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Back-End</h4>
          <div className="tab-gallery">
            {backEnd.map((backEnd) => (
              <Card
                link={`portfolio-details${backEnd.id}`}
                key={backEnd.id}
                title={backEnd.title}
                tech={backEnd.tech.slice(0, 4).join(", ")}
                image1={backEnd.images[0]}
                image2={backEnd.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Redux</h4>
          <div className="tab-gallery">
            {redux.map((redux) => (
              <Card
                link={`portfolio-details${redux.id}`}
                key={redux.id}
                title={redux.title}
                tech={redux.tech.slice(0, 4).join(", ")}
                image1={redux.images[0]}
                image2={redux.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>MongoDB</h4>
          <div className="tab-gallery">
            {mongoDB.map((mongoDB) => (
              <Card
                link={`portfolio-details${mongoDB.id}`}
                key={mongoDB.id}
                title={mongoDB.title}
                tech={mongoDB.tech.slice(0, 4).join(", ")}
                image1={mongoDB.images[0]}
                image2={mongoDB.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>HTML5</h4>
          <div className="tab-gallery">
            {html5.map((html5) => (
              <Card
                link={`portfolio-details${html5.id}`}
                key={html5.id}
                title={html5.title}
                tech={html5.tech.slice(0, 4).join(", ")}
                image1={html5.images[0]}
                image2={html5.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Bootstrap</h4>
          <div className="tab-gallery">
            {bootstrap.map((bootstrap) => (
              <Card
                link={`portfolio-details${bootstrap.id}`}
                key={bootstrap.id}
                title={bootstrap.title}
                tech={bootstrap.tech.slice(0, 4).join(", ")}
                image1={bootstrap.images[0]}
                image2={bootstrap.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>UI/UX</h4>
          <div className="tab-gallery">
            {uiUx.map((uiUx) => (
              <Card
                link={`portfolio-details${uiUx.id}`}
                key={uiUx.id}
                title={uiUx.title}
                tech={uiUx.tech.slice(0, 4).join(", ")}
                image1={uiUx.images[0]}
                image2={uiUx.images[1]}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h4>Firebase</h4>
          <div className="tab-gallery">
            {firebase.map((firebase) => (
              <Card
                link={`portfolio-details${firebase.id}`}
                key={firebase.id}
                title={firebase.title}
                tech={firebase.tech.slice(0, 4).join(", ")}
                image1={firebase.images[0]}
                image2={firebase.images[1]}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <Link
        to="/mobile-portfolio"
        className="portfolio-screen-button-container"
      >
        <div className="link-holder">
          <p>mobile app portfolio</p>
          <span className="link-span">
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="portfolio-screen-button"
            />
          </span>
        </div>
      </Link>
      <div className="portfolio__contact">
        <Link to="contact">
          <button className="instagram__contact">
            <FontAwesomeIcon icon={faPaperPlane} className="github-icon" />
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PortfolioScreen;
