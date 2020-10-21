import React, { useState } from "react";
import "../scss/social.scss";
import twit from "../imgs/windows-media-audio.svg";
import insta from "../imgs/logos.svg";
import linkdin from "../imgs/networks.svg";
import emailjs from "emailjs-com";
const Social = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then((results) => {
        console.log("Succesfully sent");
      });
  };
  
  //social

  return (
    <div className="socialDiv">
      <h2 className="socialHeader">
        Here you can send me emails and reach me on social media
      </h2>
      <div className="socialCont">
        <form className="socialForm" onSubmit={sendEmail}>
          <input className="socialEmail" name="user_name" placeholder="Name" />
          <input
            className="socialEmail"
            name="user_email"
            placeholder="Email"
          />

          <textarea
            className="message"
            name="html_message"
            placeholder="message"
          />

          <div className="socialLogos">
            <a href="https://twitter.com/SkahillJarrod">
              <img
                className="socialMediaLogo"
                src={twit}
                alt="Twitter Account"
              />
            </a>
            <a href="https://www.instagram.com/jarrod847/">
              <img
                className="socialMediaLogo"
                src={insta}
                alt="Instagram Account"
              />
            </a>
            <a href="https://www.linkedin.com/in/jarrod-skahill-561059197/">
              <img
                className="socialMediaLogo"
                src={linkdin}
                alt="Linkdin Account"
              />
            </a>
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Social;
