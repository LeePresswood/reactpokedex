import React, { Component } from 'react';
import '../styles/PokeRows.css';

class PokeRows extends Component {
    render() {
        return (
            <div className="PokeRows">
                {this.props.pokeArray.map((pokemon) =>
                    <div key={pokemon} className="box">{pokemon}</div>
                )}
            </div>
        );
    }
}

export default PokeRows;
