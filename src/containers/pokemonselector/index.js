import React from 'react'
import PokeFilter from "../pokefilter";
import PokeRows from "../../components/PokeRows";
import "./index.css";

export default () => (
    <div className="PokemonSelector col-sm-3">
        <PokeFilter />
        <PokeRows/>
    </div>
)