import React from 'react';
import '../style/socials.css';

export default class Socials extends React.Component{
    render(){return(
        <div>
            <a href="https://www.linkedin.com/in/Shanzid01/">
                <div className="social-icon linkedIn waves-effect waves-light"><img alt="LinkedIn" src="./images/linkedin.svg" /></div>
            </a>
            <a href="https://github.com/Shanzid01">
                <div className="social-icon github waves-effect waves-light"><img alt="Github" src="./images/github.svg" /></div>
            </a>
            <a href="https://www.instagram.com/shanzid01/">
                <div className="social-icon instagram waves-effect waves-light"><img alt="Instagram" src="./images/instagram.svg" /></div>
            </a>
            <a href="https://www.fb.com/shanzid01">
                <div className="social-icon facebook waves-effect waves-light"><img alt="Facebook" src="./images/facebook.svg" /></div>
            </a>            
        </div>
    )}
}