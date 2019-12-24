import React from 'react';
import NavBar from '../components/navbar';
import Socials from '../components/socials';
import Button from '../components/button';
import TextTransition, { presets } from "react-text-transition";
import '../style/helloWorld.css';

export default class HelloWorld extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTitleIndex:0,
            titles:["Full-stack web developer", "AI Enthusiast", "Drone Engineer"]
        }
    }
    componentDidMount(){
        window.addEventListener('scroll', (e)=>{
            let scrolled=window.pageYOffset;
            document.getElementsByClassName("mesh-top")[0].style.top=-(scrolled*-0.2)+"px";
            document.getElementsByClassName("doodle-home")[0].style.top=-(scrolled*0.2)+"px";
            document.getElementsByClassName("doodle2-home")[0].style.top=-(scrolled*0.5)+"px";
        });
        setInterval(()=>{
            let newIndex=this.state.currentTitleIndex+1;
            this.setState({currentTitleIndex:newIndex%3});
        }, 2500);
    }
    setActive(i){
        this.setState({currentTitleIndex:i});
    }
    render(){return(
        <div id="HelloWorld" >
            <NavBar />
            <div className="body-container">
                <div className="identity-container">
                    <img className="mesh-top" src="/images/mesh.svg" /><br/>
                    <div className="my-name">SHANZID SHAIHAM</div>
                    <div className="my-titles">
                        <div className="title-dots">
                            <div onClick={()=>this.setActive(0)} className={"dot-one "+(this.state.currentTitleIndex==0? "dot-active":"")}></div>
                            <div onClick={()=>this.setActive(1)} className={"dot-two "+(this.state.currentTitleIndex==1? "dot-active":"")}></div>
                            <div onClick={()=>this.setActive(2)} className={"dot-three "+(this.state.currentTitleIndex==2? "dot-active":"")}></div>
                        </div>
                        <div className="title-name">
                            <TextTransition
                                text={this.state.titles[this.state.currentTitleIndex]}
                                springConfig={ presets.stiff }
                            />
                        </div>
                    </div><br/><br/>
                    <Socials /><br /><br />
                    <a href="mailto:hello@shanzid.com"><Button value="EMAIL" color="red" icon="keyboard_arrow_right" /></a>
                </div>
                <div className="picture-container">
                    <a href="./images/me.jpeg"><img src="./images/me-min.png"/></a>
                </div>
            </div>
            <div className="parallax-wrapper">
                <img className="doodle-home" src="./images/doodlesR_home.svg" />
                <img className="doodle2-home" src="./images/doodlesR2_home.svg" />
            </div>
        </div>
    )}
}