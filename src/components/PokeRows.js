import React, {Component} from "react";
import Pokemon from "./Pokemon";
import "../styles/PokeRows.css";

class PokeRows extends Component {
    mapFilteredPokemonToComponents(){
        let pokeNames = [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
            "Charmander",
            "Charmeleon",
            "Charizard",
            "Squirtle",
            "Wartortle",
            "Blastoise",
            "Caterpie",
        ]
        
        return this.props.pokeArray.map((_, i) =>{
            return {
                number: i + 1,
                name: pokeNames[i]
            }
        }).map((pokemon) =>
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
