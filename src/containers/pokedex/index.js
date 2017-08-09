import React from 'react'
import PokemonSelector from "../pokemonselector";
import PokemonDisplay from "../pokemondisplay";

export default () => (
    <div className="container-fluid">
        <div className="row">
            <PokemonSelector/>
            <PokemonDisplay/>
        </div>
        {/*<Footer/>*/}
    </div>
)