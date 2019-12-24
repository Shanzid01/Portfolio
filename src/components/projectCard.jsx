import React from 'react';
import '../style/projectCard.css';

export default class ProjectCard extends React.Component{
    render(){return(
        <div className="project-card">
            <div className="proj-name">
                <span className="proj-title">{this.props.name}</span>
                <span className="proj-type"><i className="material-icons">{this.props.type}</i></span>
            </div>
            <div className="proj-img-container">
                <img src={this.props.img} alt={this.props.name} />
            </div>
            <div className="waves-overlay waves-effect waves-light" />
        </div>
    )}
}