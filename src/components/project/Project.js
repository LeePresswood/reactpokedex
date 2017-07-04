import React, {Component} from "react";
import './Project.css';

class Project extends Component {
    render(){
        return (
            <div className="Project">
                    <p>
                        <b>Title: </b> {this.props.project.title}
                    </p>
                    <p>
                        <b>Description: </b> {this.props.project.description}
                    </p>
                    <p>
                        <b>Tags: </b> {this.props.project.tags.join(" | ")}
                    </p>
            </div>
        );
    }
}

export default Project;
