import React from 'react'
import PokeFilter from "../pokefilter";
import PokeRows from "../pokerows";
import "./index.css";

export default () => (
    <div className="PokemonSelector col-sm-5 col-md-4">
        <PokeFilter/>
        <PokeRows/>
    </div>
)