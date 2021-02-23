import React from "react";

const ProjectBack = ({ data }) => {
  return (
    <div className="project">
      <h1>{data.project}</h1>
      <p>{data.description}</p>
      <button>Back</button>
    </div>
  );
};

export default ProjectBack;
