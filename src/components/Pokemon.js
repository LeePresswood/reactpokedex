import React, {Component} from "react";
import "../styles/Pokemon.css";

class Pokemon extends Component {
    render(){
        return (
            <div className="Pokemon">
                <div className="hidden">{this.props.number}</div>
                <div className="visible">{this.props.name}</div>
            </div>
        );
    }
}

export default Pokemon;
