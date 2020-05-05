import React from "react";
import "../Styles/social.scss";
import twit from "../imgs/windows-media-audio.svg";
import insta from "../imgs/logos.svg";
import linkdin from "../imgs/networks.svg";
const Social = () => {
  return (
    <div className="socialDiv">
      <h2 className="socialHeader">
        Here you can send me emails and reach me on social media
      </h2>
      <div className="socialCont">
        <input className="socialEmail" placeholder="Email"></input>
        <div className="socialLogos">
          <a href="https://twitter.com/SkahillJarrod">
            <img className="socialMediaLogo" src={twit} />
          </a>
          <a href="https://www.instagram.com/jarrod847/">
            <img className="socialMediaLogo" src={insta} />
          </a>
          <a href="https://www.linkedin.com/in/jarrod-skahill-561059197/">
            <img className="socialMediaLogo" src={linkdin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
