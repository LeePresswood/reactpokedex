import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {filterEven, filterOdd} from '../../modules/filter'
import "./index.css";

const PokeFilter = props => (
    <div className="PokeFilter row">
        <button onClick={props.filterEven}>Filter Even</button>
        <button onClick={props.filterOdd}>Filter Odd</button>
    </div>
);

const mapStateToProps = state => ({
    selectedPokemon : state.filter.selectedPokemon,
    pokemonListUnfiltered : state.filter.pokemonListUnfiltered,
    pokemonListFiltered : state.filter.pokemonListFiltered
});

const mapDispatchToProps = dispatch => bindActionCreators({
    filterEven : filterEven,
    filterOdd : filterOdd
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeFilter)