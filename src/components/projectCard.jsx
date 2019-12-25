import React from 'react';
import '../style/projectCard.css';

export default class ProjectCard extends React.Component{
    constructor(props){
        super(props);
        this.state={color:'', title:''}
    }
    componentDidMount(){
        let color='blue';
        let title='';
        switch(this.props.type){
            case 'public': color='blue'; title='Website'; break;
            case 'work': color='teal'; title='Work'; break;
            case 'android': color='green'; title='Android app'; break;
            case 'memory': color='red'; title='Machine learning'; break;
            case 'people': color='orange'; title='Community work'; break;
            case 'videogame_asset': color='purple'; title='Hobby'; break;  
            default: color='grey'; title=''; break;          
        }
        this.setState({color, title});   
    }
    render(){return(
        <div className="project-card">
            <div className="proj-name">
                <span className="proj-title">{this.props.name}</span>
                <span title={this.state.title} className={"proj-type "+this.state.color+'-text'}><i className="material-icons">{this.props.type}</i></span>
            </div>
            <div className="proj-img-container">
                <img src={this.props.img} alt={this.props.name} />
            </div>
            <div className="waves-overlay waves-effect waves-light" />
        </div>
    )}
}