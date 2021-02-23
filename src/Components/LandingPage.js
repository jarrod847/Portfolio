import React from "react";
import "../scss/landing.scss";
import codingImg from "../imgs/coding_pic.jpg";
const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landingHeaderContainer">
        <img src={codingImg} />
        <h2>Hello my name is Jarrod Skahill, and welcome to my Portfolio!</h2>
      </div>
    </div>
  );
};

export default LandingPage;
