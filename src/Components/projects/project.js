import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ProjectBack from "./projectBack";
import ProjectFront from "./projectFront";

const Project = ({ data }) => {
  const [flip, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flip);
  };
  return (
    <div className="project">
      <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
        <ProjectFront data={data} handleFlip={handleFlip} />
        <ProjectBack data={data} handleFlip={handleFlip} />
      </ReactCardFlip>
    </div>
  );
};

export default Project;
