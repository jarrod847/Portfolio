import React from "react";
import "../../scss/about.scss";
import aboutInfo from "./aboutInfo";

const AboutMe = () => {
  return (
    <div className="aboutPage">
      <h2>{aboutInfo[0]}</h2>
      <div></div>
    </div>
  );
};

export default AboutMe;
