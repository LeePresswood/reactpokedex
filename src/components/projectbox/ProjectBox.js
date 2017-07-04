import React, {Component} from "react";
import Project from "../project/Project";
// import './App.css';

class ProjectBox extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            projects : [
                {
                    projectId: 1,
                    title : "Project 1",
                    description : "This is a full-stack project.",
                    tags : ["Java", "Javascript"]
                },
                {
                    projectId: 2,
                    title : "Project 2",
                    description : "This is a front-end project.",
                    tags : ["HTML", "CSS", "Javascript"]
                }
            ]
        }
    }
    
    renderProjects(){
        return this.state.projects.map(project => <Project key={project.projectId} project={project}/>);
    }
    
    render(){
        return (
            <div className="ProjectBox">
                <h4>Projects</h4>
                {this.renderProjects()}
            </div>
        );
    }
}

export default ProjectBox;
