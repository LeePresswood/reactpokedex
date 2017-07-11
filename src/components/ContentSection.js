import React, {Component} from "react";
import "../styles/ContentSection.css";
import PokeRows from "./PokeRows";
import PokeFilter from "./PokeFilter";

class ContentSection extends Component {
    render(){
        return (
            <div className="ContentSection">
                <PokeFilter/>
                <PokeRows pokeArray={new Array(10).fill(0).map((_, i) => i + 1)}/>
            </div>
        );
    }
}

export default ContentSection;
