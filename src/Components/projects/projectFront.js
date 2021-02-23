import React from "react";

const ProjectFront = ({ data, handleFlip }) => {
  return (
    <div>
      <h1>{data.project}</h1>
      <p>Stack: {data.stack}</p>
      <p>Start Date: {data.start}</p>
      <p>End Date: {data.end}</p>
      <button onClick={() => handleFlip()}>Description</button>
      <div className="projectLinks">
        <a href={data.github}>Github Link</a>
        <a href={data.deployed}>Deployed Link</a>
      </div>
    </div>
  );
};

export default ProjectFront;
