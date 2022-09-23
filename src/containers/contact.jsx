import React from "react";
import Socials from "../components/socials";
import "../style/contact.css";

export default class Contact extends React.Component {
  render() {
    return (
      <div id="Contact">
        <div className="doodle-contact">
          <img data-src="./images/doodle-contact.svg" alt="" />
        </div>
        <div className="contact-card">
          <div className="contact-card-doodle">
            <div className="one" />
            <div className="two" />
          </div>
          <span className="contact-title">GET IN TOUCH</span>
          <br />
          <span className="contact-subTitle">
            I'd love to hear your thoughts!
          </span>
          <div className="line-break-m" />
          <div className="contact-details">
            <div className="contact-item">
              <i className="material-icons">location_on</i>
              <span className="contact-text">Montreal, Québec, Canada</span>
            </div>
            <div className="contact-item">
              <i className="material-icons">email</i>
              <a href="mailto:hello@shanzid.com">
                <span className="contact-text">hello@shanzid.com</span>
              </a>
            </div>
          </div>
          <div className="line-break-m" />
          <Socials />
          <div className="line-break-l" />
          <div className="sponsor"></div>
        </div>
      </div>
    );
  }
}
