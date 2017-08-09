import React from 'react'
import "./index.css";
// import React, {Component} from "react";
// import "../containers/pokerows/PokeRows.css";
// import Pokemon from "./Pokemon";
// import pokemonList from "../data/pokemonMapped.json"

function mapFilteredPokemonToComponents(){
    // return pokemonList.map((pokemon) =>
        {/*<Pokemon key={pokemon.number} {...pokemon} />*/}
    // );
}

export default () => (
    <div className="PokeRows row">
        {mapFilteredPokemonToComponents()}
    </div>
)
