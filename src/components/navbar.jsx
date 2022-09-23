import React from "react";
import M from "materialize-css";
import "../style/navbar.css";

export default class NavBar extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <a
          href="#!"
          data-target="sidenav"
          className="sidenav-trigger hide-on-med-and-up"
        >
          <i className="material-icons">menu</i>
        </a>
        <nav className="transparent z-depth-0 container">
          <div className="nav-wrapper">
            <ul className="right nav-options hide-on-med-and-down">
              <li>
                <a href="#HelloWorld">Hello World</a>
              </li>
              <li>
                <a href="#Projects">Experience</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
              <li>
                <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-c3fbb.appspot.com/o/Shanzid_Shaiham-resume.pdf?alt=media">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://pay.shanzid.com">Buy me a coffee</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav container" id="sidenav">
          <li>
            <a className="subheader" href="#!">
              NAVIGATION
            </a>
          </li>
          <li>
            <a className="waves-effect sidenav-close" href="#HelloWorld">
              <i className="material-icons">face</i>Hello World
            </a>
          </li>
          <li>
            <a className="waves-effect sidenav-close" href="#Projects">
              <i className="material-icons">toys</i>Experience
            </a>
          </li>
          <li>
            <a className="waves-effect sidenav-close" href="#Contact">
              <i className="material-icons">alternate_email</i>Contact
            </a>
          </li>
          <li>
            <a
              className="waves-effect sidenav-close"
              href="https://firebasestorage.googleapis.com/v0/b/portfolio-c3fbb.appspot.com/o/Shanzid_Shaiham-resume.pdf?alt=media"
            >
              <i className="material-icons">list_alt</i>Resume
            </a>
          </li>
          <li>
            <a
              className="waves-effect sidenav-close"
              href="https://pay.shanzid.com"
            >
              <i className="material-icons">loyalty</i>Buy me a coffee
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
