import React, { Component } from 'react';
import '../styles/ContentSection.css';
import PokeRows from "./PokeRows";

class ContentSection extends Component {
    render() {
        return (
            <div className="ContentSection">
                <PokeRows/>
            </div>
        );
    }
}

export default ContentSection;
