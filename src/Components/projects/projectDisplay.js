import React, { useState } from "react";
import { data } from "./data";
import Project from "./project";
import "../../scss/projects.scss";

const ProjectDisplay = () => {
  const [projects, setProjects] = useState(data);
  return (
    <div className="projectDisplay">
      <div className="projectHeadContainer">
        <h2>Projects</h2>
      </div>
      <div className="projects">
        {projects.map((item, index) => {
          return <Project key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectDisplay;
