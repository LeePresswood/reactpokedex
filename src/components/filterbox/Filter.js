import React, {Component} from "react";
// import './Project.css';

class Filter extends Component {
    render(){
        return (
            <div className="Filter">
                <p><button onClick={() => this.setFilter(this.props.filter.filter)} href="#">{this.props.filter.filter}</button> ({this.props.filter.projectCount})</p>
            </div>
        );
    }
}

export default Filter;
