import React from "react";
import NavBar from "./Components/navBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Styles/app.scss";
import LandingPage from "./Components/LandingPage";
import AboutMe from "./Components/about";
import Social from "./Components/social";
function App() {
  return (
    <div className="App">
      <div className="space"></div>
      <Router>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/social" component={Social} />
      </Router>
    </div>
  );
}

export default App;
