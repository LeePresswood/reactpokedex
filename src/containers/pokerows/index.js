import React from 'react'
import "./index.css";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    filterEven
} from '../../modules/filter'

import Pokemon from '../pokemon'

const PokeRows = props => (
    <div className="PokeRows row">
        {
            props.pokemonListFiltered.map((pokemon) =>
                <Pokemon key={pokemon.number} {...pokemon} />
            )
        }
    </div>
)

const mapStateToProps = state => ({
    selectedPokemon: state.filter.selectedPokemon,
    pokemonListUnfiltered: state.filter.pokemonListUnfiltered,
    pokemonListFiltered: state.filter.pokemonListFiltered
});

const mapDispatchToProps = dispatch => bindActionCreators({
    increment : filterEven
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeRows)