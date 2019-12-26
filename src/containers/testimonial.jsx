import React from 'react';
import {doParallax} from '../components/common.js';
import '../style/testimonial.css';

export default class Testimonial extends React.Component{
    componentDidMount(){
        doParallax("doodle-parallax-testimonial", 0.05, "marginTop");
    }
    render(){return(
        <div id="Testimonial">
            <div className="doodle-testimonial">
                <img src="./images/doodle_testimonial.svg" className="doodle-parallax-testimonial" alt="" />
                <div className="doodle-testimonial-background" />
            </div>
            <div className="testimonial-container">
                <img className="testimonial-person" alt="Md Azmain Amin" src="./images/azmain.jpg" />
                <div className="testimonial-text-container">
                    <span className="person-name"><a href="https://www.linkedin.com/in/azmainamin/">Md Azmain Amin</a></span><div className="line-break-s" />
                    <span className="person-position">Direct supervisor at The R-Squared Project <br/>Software Engineer II at EBSCO Information Services</span><div className="line-break-s" />
                    <span className="person-testimonial">
                        <i><span className="quote">" </span>
                        During our time together, it is evident that Shanzid is a bright young man, whose curiosity and passion is at the forefront of his work.
                        His passion and determination are evident in his work. He is always ready to take on challenging problems and tackle them head on.
                        <span className="quote"> "</span></i>
                    </span>
                </div>
            </div>
        </div>
    )}
} 