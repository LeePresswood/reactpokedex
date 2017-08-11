import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectPokemon} from '../../modules/select'
import "./index.css";

const PokeFilter = props => (
    <div className={"Pokemon col-sm-4" + (props.selectedPokemon === props.number ? " selected" : "")} onClick={() => props.selectPokemon(props.number)}>
        <div>{props.number}</div>
        <div>{props.name}</div>
        <div>Picture</div>
    </div>
);

const mapStateToProps = state => ({
    selectedPokemon : state.select.selectedPokemon
});

const mapDispatchToProps = dispatch => bindActionCreators({
    selectPokemon : selectPokemon,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokeFilter)