import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project">
      <h1>{data.project}</h1>
      <p>Start Date: {data.start}</p>
      <p>End Date: {data.end}</p>
      <a href={data.github}>Github Link</a>
      <a href={data.deployed}>Deployed Link</a>
    </div>
  );
};

export default Project;
