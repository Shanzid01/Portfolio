import React from 'react';
import M from 'materialize-css';
import '../style/toolElement.css';

export default class ToolElement extends React.Component{
    componentDidMount(){
        M.AutoInit();
    }
    render(){return(
        <div className="tool-image tooltipped" data-position="top" data-tooltip={this.props.name}>
            <img src={this.props.image} alt={this.props.name} />
        </div>
    )}
}