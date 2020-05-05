import React from "react";
import "../Styles/landing.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing-left">
        <h2>Hello my name is Jarrod Skahill, and welcome to my Portfolio!</h2>
        <p>
          I have three pages: <Link className="land-links">About</Link> for a
          short summary about myself,{" "}
          <Link className="land-links">Projects</Link> is where you can find
          current and past work, and <Link className="land-links">Social</Link>{" "}
          is where I provide links to my social platforms and where you can send
          me your email with inquires. Thanks for stopping by, feel free to
          reach out and get in touch through my social page.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
