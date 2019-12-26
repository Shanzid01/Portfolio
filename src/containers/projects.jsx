import React from 'react';
import TitleCard from '../components/titleCard';
import ProjectCard from '../components/projectCard';
import Button from '../components/button';
import ProjectDetail from '../components/projectDetail';
import projectData from '../projects.json';
import {doParallax} from '../components/common.js';
import '../style/projects.css';

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            projectData,
            isDetailOpen:false,
            detailData:{
                "id":-1,
                "name":"",
                "description":"",
                "type":"",
                "thumb":"",
                "stacks":[""],
                "date":"",
                "live":"",
                "github":"",
                "android":""
            }
        };
    }
    componentDidMount(){
        doParallax("doodle_projects", -0.05);
    }
    showMoreProjects(){
        document.getElementsByClassName("show-more")[0].style.display="none";
        document.getElementById("Projects").style.maxHeight="1000vh";
    }
    openModal(proj_id){
        let detailData=this.state.projectData.find(proj=> proj.id===proj_id);
        this.setState({isDetailOpen:true, detailData});
    }
    closeModal(){
        this.setState({isDetailOpen:false});
    }
    render(){return(
        <div className="proj-all-container">
            <div className="doodle_projects">
                <img data-src="./images/doodle_projects.svg" alt="" />
                <div className="doodle_circle2" />
            </div>
            <div id="Projects">
                <div className="line-break-l"/>
                <div className="container proj-container">
                    <TitleCard img="./images/titleDoodle_projects.svg" text="PROJECTS"/>
                    {this.state.projectData.map((project)=>{
                        return  (<span key={project.id} onClick={()=>this.openModal(project.id)}>
                                    <ProjectCard key={project.id} img={project.thumb} name={project.name} type={project.type} />
                                </span>)
                    })}
                    <ProjectDetail isOpen={this.state.isDetailOpen} closeModal={()=>this.closeModal()} projectData={this.state.detailData} />
                </div>
                <div className="show-more">
                    <div onClick={()=>this.showMoreProjects()} ><Button color="blue" value="See more" icon="arrow_drop_down" /></div>
                </div>
            </div>
        </div>
    )}
}