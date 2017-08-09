import React from 'react'
import "./index.css";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    filterEven
} from '../../modules/filter'

const PokeFilter = props => (
    <div className="PokeFilter row">
        <button onClick={props.filterEven}>Filter Even</button>
    </div>
);

const mapStateToProps = state => ({
    selectedPokemon: state.filter.selectedPokemon,
    pokemonListUnfiltered: state.filter.pokemonListUnfiltered,
    pokemonListFiltered: state.filter.pokemonListFiltered
});

const mapDispatchToProps = dispatch => bindActionCreators({
    filterEven : filterEven
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeFilter)