import React, {Component} from "react";
import Filter from "../filter/Filter";
// import './App.css';

class FilterBox extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            filters : [
                {
                    filterId: 1,
                    filter : "java",
                    projectCount : 100
                },
                {
                    filterId: 2,
                    filter : "javascript",
                    projectCount : 1000
                }
            ]
        }
    }
    
    renderFilters(){
        return this.state.filters.map(filter => <Filter key={filter.filterId} filter={filter}/>);
    }
    
    setFilter(filter){
        alert("Filter: " + filter);
    }
    
    render(){
        return (
            <div className="FilterBox">
                <h4>Filters</h4>
                {this.renderFilters()}
            </div>
        );
    }
}

export default FilterBox;
