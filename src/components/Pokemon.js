import React, {Component} from "react";
import "../styles/Pokemon.css";

class Pokemon extends Component {
    render(){
        return (
            <div className="Pokemon row">
                <div className="col-sm-4">{this.props.number}</div>
                <div className="col-sm-4">{this.props.name}</div>
                <div className="col-sm-4">Picture</div>
            </div>
        );
    }
}

export default Pokemon;
