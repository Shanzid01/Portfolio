import React from 'react';
import '../style/chip.css';

export default class Chip extends React.Component{
    render(){return(
        <div className="chip">
            <span>{this.props.text}</span>
        </div>
    )}
}