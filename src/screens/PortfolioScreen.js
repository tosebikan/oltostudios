import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./portfolio.css";
import Card from "../components/Card";
const techStacks = [
  { tech: "Show-All" },
  { tech: "Full-Stack" },
  { tech: "Front-End" },
  { tech: "Back-End" },
  { tech: "React.js" },
  { tech: "Redux" },
  { tech: "Mongodb" },
  { tech: "HTML5" },
  { tech: "Bootstrap" },
  { tech: "UI/UX" }
];
function PortfolioScreen() {
  const [active, setActive] = useState("Show-All");

  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.id);
    console.log(e.target.id);
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
          {techStacks.map((techStack) => (
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
            <Card />
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default PortfolioScreen;
