import React from 'react';
import '../style/titleCard.css';

export default class TitleCard extends React.Component{
    render(){return(
        <div className="title-container">
            <img alt="" className="bg-img" src={this.props.img} />
            <span className="title-text">{this.props.text}</span>
        </div>
    )}
}