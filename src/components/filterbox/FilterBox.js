import React, {Component} from "react";
// import './App.css';

class FilterBox extends Component {
    render(){
        return (
            <div className="FilterBox">
                <h4>Filters</h4>
                <p><a href="#">Java</a> (100)</p>
                <p><a href="#">Javascript</a> (100)</p>
                <p><a href="#">C#</a> (100)</p>
                <p><a href="#">C++</a> (100)</p>
                <p><a href="#">C</a> (100)</p>
            </div>
        );
    }
}

export default FilterBox;
