import React, {Component} from "react";
import "./Pokesquare.css";

class Pokesquare extends Component {
    render(){
        return (
            <div className="Pokesquare">
                <p>
                    PokeId: {this.props.pokeId}
                </p>
            </div>
        );
    }
}

export default Pokesquare;
