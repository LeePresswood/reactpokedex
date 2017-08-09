import React, {Component} from "react";
import "../containers/pokemonselector/PokemonSelector.css";
import PokeRows from "./PokeRows";
import PokeFilter from "./PokeFilter";

class PokemonSelector extends Component {
    render(){
        return (
            <div className="PokemonSelector col-sm-3">
                <PokeFilter />
                <PokeRows/>
            </div>
        );
    }
}

export default PokemonSelector;
