import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./portfolio.css";
import Card from "../components/Card";
import data from "../data";

function MobilePortfolioScreen() {
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
      <h1>Mobile App Developer Portfolio</h1>
      <p>
        Checkout my latest web development projects, from UI/UX design with
        sketch to coding with React-Native, Redux,Firebase, Node.js, Mongodb.
      </p>
      <Tabs>
        <TabList className="tablist-container">
          {data.mobileTech.map((techStack) => (
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
                key={react.id}
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
                key={frontEnd.id}
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
                key={fullStack.id}
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
                key={backEnd.id}
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
                card={redux.id}
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
                key={mongoDB.id}
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
                key={html5.id}
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
                key={bootstrap.id}
                title={bootstrap.title}
                tech={bootstrap.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default MobilePortfolioScreen;
