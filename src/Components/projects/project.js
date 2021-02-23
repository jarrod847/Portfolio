import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project">
      <h1>{data.project}</h1>
      <p>Stack: {data.stack}</p>
      <p>Start Date: {data.start}</p>
      <p>End Date: {data.end}</p>
      <div className="projectLinks">
        <a href={data.github}>Github Link</a>
        <a href={data.deployed}>Deployed Link</a>
      </div>
    </div>
  );
};

export default Project;
