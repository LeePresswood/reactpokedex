import React, {Component} from "react";
import FilterBox from "../filterbox/FilterBox";
import ProjectBox from "../projectbox/ProjectBox";
// import './App.css';

class ProjectSection extends Component {
    render(){
        return (
            <div className="ProjectSection">
                <h2>Projects</h2>
                <p>Choose a filter and select a project.</p>
                <FilterBox/>
                <ProjectBox/>
            </div>
        );
    }
}

export default ProjectSection;
