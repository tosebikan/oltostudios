import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./portfolio.css";
import Card from "../components/Card";
import data from "../data";

function PortfolioScreen() {
  const [active, setActive] = useState("Show-All");
  const react = data.webProjects.filter((x) => x.tech.includes("React"));
  const frontEnd = data.webProjects.filter((x) => x.tech.includes("Front-End"));
  const fullStack = data.webProjects.filter((x) =>
    x.tech.includes("Full-Stack")
  );
  const backEnd = data.webProjects.filter((x) => x.tech.includes("Back-End"));
  const redux = data.webProjects.filter((x) => x.tech.includes("Redux"));
  const mongoDB = data.webProjects.filter((x) => x.tech.includes("MongoDB"));
  const html5 = data.webProjects.filter((x) => x.tech.includes("HTML5"));
  const bootstrap = data.webProjects.filter((x) =>
    x.tech.includes("Bootstrap")
  );
  const uiUx = data.webProjects.filter((x) => x.tech.includes("UI/UX"));
  const firebase = data.webProjects.filter((x) => x.tech.includes("Firebase"));

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
          <div className="tab-gallery">
            {data.webProjects.map((web) => (
              <Card
                key={web.id}
                title={web.title}
                tech={web.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {react.map((react) => (
              <Card
                title={react.title}
                tech={react.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {frontEnd.map((frontEnd) => (
              <Card
                title={frontEnd.title}
                tech={frontEnd.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {fullStack.map((fullStack) => (
              <Card
                title={fullStack.title}
                tech={fullStack.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {backEnd.map((backEnd) => (
              <Card
                title={backEnd.title}
                tech={backEnd.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {redux.map((redux) => (
              <Card
                title={redux.title}
                tech={redux.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {mongoDB.map((mongoDB) => (
              <Card
                title={mongoDB.title}
                tech={mongoDB.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {html5.map((html5) => (
              <Card
                title={html5.title}
                tech={html5.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {bootstrap.map((bootstrap) => (
              <Card
                title={bootstrap.title}
                tech={bootstrap.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {uiUx.map((uiUx) => (
              <Card
                title={uiUx.title}
                tech={uiUx.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {firebase.map((firebase) => (
              <Card
                title={firebase.title}
                tech={firebase.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PortfolioScreen;
