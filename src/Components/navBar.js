import React from "react";
import "../scss/navStlye.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        <Link className="navHeader" to="/">
          <h1>Jarrod's Portfolio</h1>
        </Link>
        <div className="navPages">
          <Link className="navlinks" to="/projects">
            Projects
          </Link>
          <Link className="navlinks" to="/about">
            About
          </Link>
          <Link className="navlinks" to="/social">
            Social
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
