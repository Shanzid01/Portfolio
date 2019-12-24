import React from 'react';
import TitleCard from '../components/titleCard';
import ProjectCard from '../components/projectCard';
import Button from '../components/button';
import projectData from '../projects.json';
import '../style/projects.css';

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={projectData};
    }
    componentDidMount(){
        window.addEventListener('scroll', (e)=>{
            let scrolled=window.pageYOffset;
            document.getElementsByClassName("doodle_projects")[0].style.top=-(scrolled*-0.2)+"px";
        });
    }
    showMoreProjects(){
        document.getElementsByClassName("show-more")[0].style.display="none";
        document.getElementsByClassName("proj-container")[0].style.maxHeight="1000vh";
    }
    render(){return(
        <div id="Projects">
            <div className="doodle_projects">
                <img src="./images/doodle_projects.svg" alt="" />
                <div className="doodle_circle2" />
            </div>
            <div className="line-break-l"/>
            <div className="container proj-container">
                <TitleCard img="./images/titleDoodle_projects.svg" text="PROJECTS"/>
                {this.state.projectData.map((project)=>{
                    return <ProjectCard key={project.id} img={project.thumb} name={project.name} type={project.type} />
                })}
            </div>
            <div className="show-more">
                <div onClick={()=>this.showMoreProjects()} ><Button color="blue" value="See more" icon="arrow_drop_down" /></div>
            </div>
        </div>
    )}
}