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
        }
        console.log(this.props.projectData);
    }
    componentDidUpdate(){
        window.history.pushState({}, '', '/');
        if(this.props.isOpen){
            let instance = M.Modal.getInstance(document.getElementById("ProjectModal"));
            instance.open();
        }
    }
    render(){return(
        <div>
            <div id="ProjectModal" className="modal bottom-sheet">
                <div className="modal-content">
                    <div className="preview-container">
                        {this.props.projectData!=="" &&
                            this.props.projectData.previews.map(url=>{
                                return <img key={url} src={url} alt="" />
                            })
                        }
                    </div>
                    <div className="container project-text">
                        <span className="project-name">{this.props.projectData.name}</span><br/>
                        {this.props.projectData!=="" &&
                            this.props.projectData.stacks.map(item=>{
                                return <Chip key={item} text={item} />
                            })
                        }
                        <p>{this.props.projectData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )}
}