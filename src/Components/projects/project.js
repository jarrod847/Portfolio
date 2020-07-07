import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project">
      <h1>{data.project}</h1>
      <p>Start Date: {data.start}</p>
      <p>End Date: {data.end}</p>
    </div>
  );
};

export default Project;
