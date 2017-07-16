import React, {Component} from "react";
import "../styles/PokeRows.css";
import Pokemon from "./Pokemon";
import pokemonList from "../pokemonMapped.json"

class PokeRows extends Component {
    mapFilteredPokemonToComponents(){
        return pokemonList.map((pokemon) =>
            <Pokemon key={pokemon.number} {...pokemon} />
        );
    }
    
    render(){
        return (
            <div className="PokeRows">
                {this.mapFilteredPokemonToComponents()}
            </div>
        );
    }
}

export default PokeRows;
