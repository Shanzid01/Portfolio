import React from 'react';
import {doParallax} from '../components/common.js';
import toolData from '../tools.json';
import ToolElement from '../components/toolElement';
import TitleCard from '../components/titleCard';
import '../style/tools.css';

export default class Tools extends React.Component{
    componentDidMount(){
        doParallax("doodle-tools", -0.05);
    }
    render(){return(
        <div id="Tools">
            <div className="doodle-tools"><img src="./images/doodle2_tools.svg" alt="" /></div>
            <div className="tools-container container">
                <TitleCard text="Tools" img="./images/doodle_tools.svg" />
                <div className="break-on-small" />
                {
                    toolData.map(tool=>{
                        return <ToolElement name={tool.name} image={tool.image} key={tool.id} />
                    })
                }
            </div>
        </div>
    )}
}