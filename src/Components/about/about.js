import React from "react";
import "../../scss/about.scss";
import aboutInfo from "./aboutInfo";

const AboutMe = () => {
  return (
    <div className="aboutPage">
      <h1>Hello, I'm Jarrod Skahill....</h1>
      <p>{aboutInfo[0]}</p>
      <div></div>
    </div>
  );
};

export default AboutMe;
