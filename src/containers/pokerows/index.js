import React from 'react'
import "./index.css";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment
} from '../../modules/filter'

import Pokemon from '../pokemon'

function mapFilteredPokemonToComponents(props){
    return props.pokemonListFiltered.map((pokemon) =>
        <Pokemon key={pokemon.number} {...pokemon} />
    );
}

const PokeRows = props => (
    <div className="PokeRows row">
        {mapFilteredPokemonToComponents(props)}
    </div>
)

const mapStateToProps = state => ({
    selectedPokemon: state.filter.selectedPokemon,
    pokemonListUnfiltered: state.filter.pokemonListUnfiltered,
    pokemonListFiltered: state.filter.pokemonListFiltered
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeRows)