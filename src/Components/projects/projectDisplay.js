import React, { useState } from "react";
import { data } from "./data";
import Project from "./project";
import "../../scss/projects.scss";

const ProjectDisplay = () => {
  const [projects, setProjects] = useState(data);
  return (
    <div className="projectDisplay">
      {projects.map((item, index) => {
        return <Project key={index} data={item} />;
      })}
    </div>
  );
};

export default ProjectDisplay;
