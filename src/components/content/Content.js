import React, { Component } from 'react';
import Info from "./info/Info";
import ProjectView from "./projectview/ProjectView";
// import './App.css';

class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Info/>
                <ProjectView/>
            </div>
        );
    }
}

export default Content;
