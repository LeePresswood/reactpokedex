import React from 'react'
import {connect} from 'react-redux'

import Pokemon from '../pokemon'
import "./index.css";

const PokeRows = props => (
    <div className="PokeRows row">
        {
            props.pokemonListFiltered.map((pokemon) =>
                <Pokemon key={pokemon.number} {...pokemon} />
            )
        }
    </div>
);

const mapStateToProps = state => ({
    selectedPokemon : state.select.selectedPokemon,
    pokemonListFiltered : state.filter.pokemonListFiltered
});

export default connect(
    mapStateToProps
)(PokeRows)