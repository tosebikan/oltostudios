import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./portfolio.css";
import Card from "../components/Card";
import data from "../data";

function MobilePortfolioScreen() {
  const [active, setActive] = useState("Show-All");
  const mobileProjects = data.projects.filter((x) => x.type === "mobile");
  const reactNative = mobileProjects.filter((x) =>
    x.tech.includes("React-Native")
  );
  const firebase = mobileProjects.filter((x) => x.tech.includes("Firebase"));
  const frontEnd = mobileProjects.filter((x) => x.tech.includes("Front-End"));

  const fullStack = mobileProjects.filter((x) => x.tech.includes("Full-Stack"));
  const backEnd = mobileProjects.filter((x) => x.tech.includes("Back-End"));
  const redux = mobileProjects.filter((x) => x.tech.includes("Redux"));
  const mongoDB = mobileProjects.filter((x) => x.tech.includes("MongoDB"));
  const uiUx = mobileProjects.filter((x) => x.tech.includes("UI/UX"));

  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.id);
  };
  return (
    <div className="portfolio-hero">
      <h1>Mobile App Developer Portfolio</h1>
      <p>
        Checkout my latest mobile app development projects, from UI/UX design
        with sketch to coding with React-Native, Redux,Firebase, Node.js,
        Mongodb.
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
            {mobileProjects.map((mobile) => (
              <Card
                link={`portfolio-details${mobile.id}`}
                key={mobile.id}
                title={mobile.title}
                tech={mobile.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {reactNative.map((rn) => (
              <Card
                link={`portfolio-details${rn.id}`}
                key={rn.id}
                title={rn.title}
                tech={rn.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {firebase.map((fb) => (
              <Card
                link={`portfolio-details${fb.id}`}
                key={fb.id}
                title={fb.title}
                tech={fb.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="tab-gallery">
            {frontEnd.map((frontEnd) => (
              <Card
                link={`portfolio-details${frontEnd.id}`}
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
                link={`portfolio-details${fullStack.id}`}
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
                link={`portfolio-details${backEnd.id}`}
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
                key={redux.id}
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
            {uiUx.map((uiux) => (
              <Card
                key={uiux.id}
                title={uiux.title}
                tech={uiux.tech.slice(0, 4).join(", ")}
              />
            ))}
          </div>
        </TabPanel>
      </Tabs>
      <Link to="/portfolio" className="portfolio-screen-button-container">
        <div className="link-holder">
          <p>web portfolio</p>
          <span className="link-span">
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="portfolio-screen-button"
            />
          </span>
        </div>
      </Link>
    </div>
  );
}

export default MobilePortfolioScreen;
