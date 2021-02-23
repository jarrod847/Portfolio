import React from "react";

const ProjectBack = ({ data, handleFlip }) => {
  return (
    <div>
      <h1>{data.project}</h1>
      <p>{data.description}</p>
      <button onClick={() => handleFlip()}>Back</button>
    </div>
  );
};

export default ProjectBack;
