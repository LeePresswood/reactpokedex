import React from 'react'
import PokemonSelector from "../../components/PokemonSelector";
import PokemonDisplay from "../../components/PokemonDisplay";

export default () => (
    <div className="container-fluid">
        <div className="row">
            <PokemonSelector/>
            <PokemonDisplay/>
        </div>
        {/*<Footer/>*/}
    </div>
)