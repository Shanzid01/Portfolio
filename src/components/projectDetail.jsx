import React from 'react';
import M from 'materialize-css';
import Chip from '../components/chip';
import '../style/projectDetail.css';

export default class ProjectDetail extends React.Component{
    componentDidMount(){
        M.AutoInit();
        window.onpopstate  = () => {
            let instance = M.Modal.getInstance(document.getElementById("ProjectModal"));
            instance.close();
            this.props.closeModal();
        }
    }
    componentDidUpdate(){
        if(this.props.isOpen){
            window.history.pushState({}, '', '/');
            let instance = M.Modal.getInstance(document.getElementById("ProjectModal"));
            instance.open();
        }
    }
    render(){return(
        <div>
            <div id="ProjectModal" className="modal bottom-sheet">
                <div className="modal-content">
                    {/*<div className="preview-container">
                        {
                            this.props.projectData.previews.map(url=>{
                                return <img key={url} src={url} alt="" />
                            })
                        }
                    </div>*/}
                    <div className="container project-text">
                        <span className="project-name">{this.props.projectData.name}</span><br/>
                        {
                            this.props.projectData.stacks.map(item=>{
                                return <Chip key={item} text={item} />
                            })
                        }
                        <p dangerouslySetInnerHTML={{__html:this.props.projectData.description}}></p>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="container">
                    <div className="proj-links">
                            <div className={"proj-github waves-effect waves-light tooltipped "+(this.props.projectData.github!==""? "": "proj-hide")} data-position="top" data-tooltip="Github">
                                <a href={this.props.projectData.github}><img src="./images/github.svg" alt="" /></a>
                            </div>
                            <div className={"proj-live waves-effect waves-light tooltipped "+(this.props.projectData.live!==""? "": "proj-hide")} data-position="top" data-tooltip="Live website">
                                <a href={this.props.projectData.live}><i className="material-icons">public</i></a>
                            </div>
                            <div className={"proj-android waves-effect waves-light tooltipped "+(this.props.projectData.android!==""? "": "proj-hide")} data-position="top" data-tooltip="Android app">
                                <a href={this.props.projectData.android}><i className="material-icons">android</i></a>
                            </div>
                    </div>
                    <span className="proj-date"><i>{this.props.projectData.date}</i></span>
                    </div>
                </div>
            </div>
        </div>
    )}
}