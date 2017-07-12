import React, { Component } from 'react';
import '../styles/Pokemon.css';

class Pokemon extends Component {
    render() {
        return (
            <div className="Pokemon">{this.props.name}</div>
        );
    }
}

export default Pokemon;
