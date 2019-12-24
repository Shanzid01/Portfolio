import React from 'react';
import '../style/button.css';

export default class Button extends React.Component{
    render(){return(
        <div className={"button "+this.props.color}>
            <span className="button-title">{this.props.value}</span>
            <span className="button-icon material-icons">{this.props.icon}</span>
        </div>
    )}
}