import React, { Component } from 'react';
import '../styles/PokeRows.css';

class PokeRows extends Component {
    render() {
        return (
            <div className="PokeRows">
                <div className="box">A</div>
                <div className="box">B</div>
                <div className="box">C</div>
                <div className="box">D</div>
                <div className="box">E</div>
                <div className="box">F</div>
                <div className="box">G</div>
            </div>
        );
    }
}

export default PokeRows;
