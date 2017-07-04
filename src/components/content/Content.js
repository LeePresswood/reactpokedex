import React, {Component} from "react";
import InfoSection from "../infosection/InfoSection";
import ProjectSection from "../projectsection/ProjectSection";
// import './App.css';

class Content extends Component {
    render(){
        return (
            <div className="Content">
                <InfoSection/>
                <ProjectSection/>
            </div>
        );
    }
}

export default Content;
