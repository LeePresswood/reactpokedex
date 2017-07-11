import React, { Component } from 'react';
import '../styles/ContentSection.css';
import PokeRows from "./PokeRows";
import PokeFilter from "./PokeFilter";

class ContentSection extends Component {
    render() {
        return (
            <div className="ContentSection">
                <PokeFilter/>
                <PokeRows/>
            </div>
        );
    }
}

export default ContentSection;
