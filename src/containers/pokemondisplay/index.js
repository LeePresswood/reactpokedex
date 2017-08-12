import React from 'react'
import {connect} from 'react-redux'

import "./index.css";

{/*<div className={"Pokemon col-md-4 col-sm-6" + (props.selectedPokemon === props.number ? " selected" : "")} onClick={() => props.selectPokemon(props.number)}>*/}
    {/*<div>{props.number}</div>*/}
    {/*<div>{props.name}</div>*/}
    {/*<div>Picture</div>*/}
{/*</div>*/}

const PokeFilter = props => (
    <div className="PokemonDisplay col-sm-7 col-md-8">
        <h1>{props.selectedPokemon}</h1>
    </div>
);

const mapStateToProps = state => ({
    selectedPokemon : state.select.selectedPokemon
});

export default connect(
    mapStateToProps
)(PokeFilter)