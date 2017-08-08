import React, {Component} from "react";
import "../styles/Pokemon.css";

class Pokemon extends Component {
    render(){
        return (
            <div className="Pokemon col-sm-4">
                <div>{this.props.number}</div>
                <div>{this.props.name}</div>
                <div>Picture</div>
            </div>
        );
    }
}

export default Pokemon;
