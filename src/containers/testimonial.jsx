import React from "react";
import { doParallax } from "../components/common.js";
import "../style/testimonial.css";

export default class Testimonial extends React.Component {
  componentDidMount() {
    doParallax("doodle-parallax-testimonial", -0.065);
  }
  render() {
    return (
      <div id="Testimonial" className="container">
        <div className="doodle-testimonial">
          <img
            data-src="./images/doodle_testimonial.svg"
            className="doodle-parallax-testimonial"
            id="doodle-parallax-testimonial"
            alt=""
          />
        </div>
        <div className="testimonial-container">
          <a href="https://www.linkedin.com/in/silvajoaopaulod/">
            <img
              className="testimonial-person"
              alt="Joao Paulo Silva"
              src="./images/nil.svg"
              data-src="./images/jp.jfif"
            />
          </a>
          <div className="testimonial-text-container">
            <span className="person-testimonial">
              <i>
                <span className="quote">“ </span>
                Technically strong, motivated, collaborative and communicative, Shanzid is one of the best interns I have ever had in my teams.
                <span className="quote">”</span>
              </i>
            </span>
            <span className="person-name">
              <a href="https://www.linkedin.com/in/silvajoaopaulod/">
              Joao Paulo Silva
              </a>
            </span>
            <span className="person-position">
              Team Lead - Ubisoft Montreal <br />
            </span>
            <div className="line-break-s" />
          </div>
        </div>
      </div>
    );
  }
}
