import React from "react";
import "../style/socials.css";

export default class Socials extends React.Component {
  render() {
    return (
      <div style={{ display: "inline" }}>
        <a href="https://www.linkedin.com/in/Shanzid01/">
          <div className="social-icon linkedIn waves-effect waves-light">
            <img alt="LinkedIn" src="./images/linkedin.svg" />
          </div>
        </a>
        <a href="https://github.com/Shanzid01">
          <div className="social-icon github waves-effect waves-light">
            <img alt="Github" src="./images/github.svg" />
          </div>
        </a>
        <a href="https://www.twitter.com/shanzid01/">
          <div className="social-icon twitter waves-effect waves-light">
            <img alt="Twitter" src="./images/twitter.svg" />
          </div>
        </a>
      </div>
    );
  }
}
