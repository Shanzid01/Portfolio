import React from "react";
import { doParallax } from "../components/common.js";
import "../style/testimonial.css";

const person = {
  url: "https://www.linkedin.com/in/kabriel",
  name: "Kabriel Robichaux",
  position: "Engineering manager - NVIDIA",
  image: "./images/kabe.jpeg",
  testimoial:
    "Courage, perseverance, and enthusiasm are just a few of the amazing qualities that Shanzid demonstrated during his internship. He directly drove important user experience improvements and technology innovations that will be leveraged for years to come.",
};

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
          <a href={person.url}>
            <img
              className="testimonial-person"
              alt={person.name}
              src="./images/nil.svg"
              data-src={person.image}
            />
          </a>
          <div className="testimonial-text-container">
            <span className="person-testimonial">
              <i>
                <span className="quote">“</span>
                {person.testimoial}
                <span className="quote">”</span>
              </i>
            </span>
            <span className="person-name">
              <a href={person.url}>{person.name}</a>
            </span>
            <span className="person-position">
              {person.position} <br />
            </span>
            <div className="line-break-s" />
          </div>
        </div>
      </div>
    );
  }
}
